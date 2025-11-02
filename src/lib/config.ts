// Configuration file for application settings
// Loads values from environment variables with fallback defaults

export const config = {
  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@givehope.org',
  },

  // Bank Details
  bank: {
    name: import.meta.env.VITE_BANK_NAME || 'Example Bank',
    accountNumber: import.meta.env.VITE_BANK_ACCOUNT_NUMBER || '1234567890',
    routingNumber: import.meta.env.VITE_BANK_ROUTING_NUMBER || '123456789',
    swiftCode: import.meta.env.VITE_BANK_SWIFT_CODE || 'EXBKUS33',
    iban: import.meta.env.VITE_BANK_IBAN || 'GB29 NWBK 6016 1331 9268 19',
    qrImage: import.meta.env.VITE_BANK_QR_IMAGE || '/qr-bank.png',
  },

  // Bitcoin Details
  bitcoin: {
    address: import.meta.env.VITE_BITCOIN_ADDRESS || 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    qrImage: import.meta.env.VITE_BITCOIN_QR_IMAGE || '/qr-bitcoin.png',
  },
};

// Type definitions for better TypeScript support
export type Config = typeof config;
