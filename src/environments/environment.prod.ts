export const environment = {
  production: true,
  // Same-origin /api when UI proxies to the API (no separate gateway)
  apiBaseUrl: '/api/erp',
  rootDomain: 'localhost',
  upi: {
    vpa: 'school@upi',
    payeeName: 'School ERP'
  }
};
