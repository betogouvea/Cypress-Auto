export interface PerformanceThresholds {
  [key: string]: string[];
}

export const performanceThresholds: Record<string, PerformanceThresholds> = {
  saucedemo: {
    http_req_duration: ['p(95)<2000', 'p(99)<3000'],
    http_req_failed: ['rate<0.1'],
    checks: ['rate>0.9'],
  },
  coffee: {
    http_req_duration: ['p(95)<1500', 'p(99)<2000'],
    http_req_failed: ['rate<0.05'],
    checks: ['rate>0.95'],
  }
};

export interface LoadProfile {
  vus?: number;
  duration?: string;
  stages?: Array<{ duration: string; target: number }>;
}

export const loadProfiles: Record<string, LoadProfile> = {
  smoke: {
    vus: 1,
    duration: '30s'
  },
  load: {
    stages: [
      { duration: '30s', target: 10 },
      { duration: '1m', target: 20 },
      { duration: '30s', target: 0 },
    ]
  },
  stress: {
    stages: [
      { duration: '1m', target: 50 },
      { duration: '2m', target: 100 },
      { duration: '1m', target: 0 },
    ]
  }
};