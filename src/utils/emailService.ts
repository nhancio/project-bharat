// Google Apps Script Integration for Lead Capture
// This utility will send form data directly to Google Sheets via Google Apps Script

import { getGoogleScriptUrl, isConfigured } from '../config/leadCapture';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  timestamp: string;
  source: string;
}

// Send lead data to Google Sheets via Google Apps Script
export const sendLeadToGoogleSheets = async (leadData: LeadData): Promise<boolean> => {
  try {
    // Check if configuration is set up
    if (!isConfigured()) {
      console.warn('Google Apps Script URL not configured. Please update the configuration.');
      return false;
    }

    const GOOGLE_SCRIPT_URL = getGoogleScriptUrl();
    
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    // Since we're using no-cors mode, we can't check the response status
    // But we assume it worked if no error was thrown
    console.log('Lead data sent to Google Sheets:', leadData);
    return true;
  } catch (error) {
    console.error('Error sending lead to Google Sheets:', error);
    return false;
  }
};

// Webhook integration (for services like Zapier, Make.com, etc.)
export const sendToWebhook = async (leadData: LeadData, webhookUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    return false;
  }
};
