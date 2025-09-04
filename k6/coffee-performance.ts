import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';
export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '30s', target: 15 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1500'],
    errors: ['rate<0.05'],
  },
};

export default function () {
  const baseUrl = 'https://coffee-cart.app';
  
  const mainPageResponse = http.get(baseUrl);
  
  check(mainPageResponse, {
    'main page loaded': (r) => r.status === 200,
    'main page response time < 1s': (r) => r.timings.duration < 1000,
    'coffee menu visible': (r) => r.body.includes('Espresso'),
  }) || errorRate.add(1);

  const coffeeTypes = ['Espresso', 'Americano', 'Cappuccino'];
  
  coffeeTypes.forEach((coffee) => {
    const selectResponse = http.post(`${baseUrl}/api/coffee`, {
      type: coffee,
      quantity: 1
    });
    
    check(selectResponse, {
      [`${coffee} selection successful`]: (r) => r.status === 200 || r.status === 201,
      [`${coffee} response time < 500ms`]: (r) => r.timings.duration < 500,
    }) || errorRate.add(1);
  });

  sleep(0.5);
}