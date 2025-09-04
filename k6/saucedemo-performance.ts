import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';
export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    errors: ['rate<0.1'],
  },
};

export default function () {
  const baseUrl = 'https://www.saucedemo.com';
  
  const loginResponse = http.post(`${baseUrl}/`, {
    'user-name': 'standard_user',
    'password': 'secret_sauce'
  });
  
  check(loginResponse, {
    'login status is 200': (r) => r.status === 200,
    'login response time < 2s': (r) => r.timings.duration < 2000,
  }) || errorRate.add(1);

  const inventoryResponse = http.get(`${baseUrl}/inventory.html`);
  
  check(inventoryResponse, {
    'inventory loaded': (r) => r.status === 200,
    'inventory response time < 1s': (r) => r.timings.duration < 1000,
  }) || errorRate.add(1);

  sleep(1);
}