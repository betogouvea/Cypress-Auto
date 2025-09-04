import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '2m', target: 75 },
    { duration: '5m', target: 150 },
    { duration: '2m', target: 200 },
    { duration: '3m', target: 150 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2500', 'p(99)<4000'],
    errors: ['rate<0.10'],
    http_reqs: ['rate>75'],
  },
};

export default function () {
  const baseUrl = 'https://coffee-cart.app';
  
  const mainPageResponse = http.get(baseUrl);
  
  check(mainPageResponse, {
    'coffee app under load': (r) => r.status === 200,
    'page load acceptable': (r) => r.timings.duration < 2500,
  }) || errorRate.add(1);

  const coffeeTypes = ['Espresso', 'Americano', 'Cappuccino'];
  
  coffeeTypes.forEach((coffee) => {
    const selectResponse = http.post(`${baseUrl}/api/coffee`, {
      type: coffee,
      quantity: 1
    });
    
    check(selectResponse, {
      [`${coffee} under load`]: (r) => r.status === 200 || r.status === 201,
      [`${coffee} time acceptable`]: (r) => r.timings.duration < 1000,
    }) || errorRate.add(1);
  });

  sleep(0.3);
}