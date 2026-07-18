export const environment = {
  production: true,
  // Same-origin via Nginx — Host header selects the school DB
  apiBaseUrl: '/api/erp',
  rootDomain: 'schoolerp.local',
  upi: {
    vpa: 'school@upi',
    payeeName: 'School ERP'
  }
};
