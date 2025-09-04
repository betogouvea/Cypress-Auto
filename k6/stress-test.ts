import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '3m', target: 300 },
    { duration: '2m', target: 500 },
    { duration: '1m', target: 300 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'],
    errors: ['rate<0.25'],
  },
};

export default function () {
  const apps = [
    'https://www.saucedemo.com',
    'https://coffee-cart.app'
  ];
  
  const selectedApp = apps[Math.floor(Math.random() * apps.length)];
  
  const response = http.get(selectedApp);
  
  check(response, {
    'stress test survival': (r) => r.status === 200,
    'stress response time': (r) => r.timings.duration < 5000,
  }) || errorRate.add(1);

  sleep(0.1);
}