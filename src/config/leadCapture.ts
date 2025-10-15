// Lead Capture Configuration
// Update these values when you set up your Google Apps Script

export const LEAD_CAPTURE_CONFIG = {
  // Replace with your Google Apps Script Web App URL
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz_QPAGuyQBnHlCNkHGMC4epU-Lk-gaTgoSBdvgEEJEXx4NyUNnj7NvrCe6Z3Rge3YB/exec',
  
  // Fallback email for when Google Sheets fails
  FALLBACK_EMAIL: 'ajay@hesaglobal.com',
  
  // Form configuration
  FORM_CONFIG: {
    SOURCE: 'HESA Website Contact Form',
    TIMEOUT: 10000, // 10 seconds timeout for API calls
  }
};

// Helper function to get the Google Script URL
export const getGoogleScriptUrl = (): string => {
  return LEAD_CAPTURE_CONFIG.GOOGLE_SCRIPT_URL;
};

// Helper function to check if configuration is set up
export const isConfigured = (): boolean => {
  return LEAD_CAPTURE_CONFIG.GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
};
