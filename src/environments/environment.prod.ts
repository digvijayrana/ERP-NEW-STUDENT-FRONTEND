export const environment = {
  production: true,
  // Absolute backend URL for Vercel (static hosting cannot handle /api POSTs without a rewrite).
  // vercel.json also proxies /api/* → this same host for same-origin calls.
  apiBaseUrl: 'https://erp-new-student-backend.onrender.com/api',
  rootDomain: 'localhost',
  upi: {
    vpa: 'school@upi',
    payeeName: 'School ERP'
  }
};
