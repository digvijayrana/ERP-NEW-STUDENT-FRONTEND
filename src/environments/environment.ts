export const environment = {
  production: false,
  // Used only when not on *.localhost / *.schoolerp.local (direct ng serve → backend)
  apiBaseUrl: 'http://localhost:5000/api',
  // *.localhost needs no hosts file — browsers resolve to 127.0.0.1
  rootDomain: 'localhost',
  upi: {
    vpa: 'school@upi',
    payeeName: 'School ERP'
  }
};
