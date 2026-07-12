export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:5000/api',
  // UPI collection details used to generate the parent "Pay online" QR / deep link.
  // Replace the VPA and payee name with the school's real UPI account.
  upi: {
    vpa: 'school@upi',
    payeeName: 'School ERP'
  }
};

