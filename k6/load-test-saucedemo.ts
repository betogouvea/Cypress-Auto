import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '2m', target: 50 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 150 },
    { duration: '3m', target: 100 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000', 'p(99)<5000'],
    errors: ['rate<0.15'],
    http_reqs: ['rate>50'],
  },
};

export default function () {
  const baseUrl = 'https://www.saucedemo.com';
  
  const loginResponse = http.post(`${baseUrl}/`, {
    'user-name': 'standard_user',
    'password': 'secret_sauce'
  });
  
  check(loginResponse, {
    'login under load': (r) => r.status === 200,
    'login time acceptable': (r) => r.timings.duration < 3000,
  }) || errorRate.add(1);

  const inventoryResponse = http.get(`${baseUrl}/inventory.html`);
  
  check(inventoryResponse, {
    'inventory under load': (r) => r.status === 200,
    'inventory time acceptable': (r) => r.timings.duration < 2000,
  }) || errorRate.add(1);

  sleep(1);
}