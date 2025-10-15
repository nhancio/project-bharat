/**
 * Google Apps Script for HESA Lead Capture
 * This script receives form data from the website and saves it to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save the project with name "HESA Lead Capture"
 * 5. Deploy as web app with execute permissions for "Anyone"
 * 6. Copy the web app URL and update it in the frontend code
 */

// Configuration - Update these values
const SHEET_ID = '1_ctjOJE9uFCyypzfp3AgsQwtFeMwLvITD8qXUkEcA88'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Sheet1'; // Name of the sheet tab

/**
 * Main function to handle POST requests from the website
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Log the received data (for debugging)
    console.log('Received lead data:', data);
    
    // Save to Google Sheets
    const result = saveToSheet(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Lead saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing lead:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Save lead data to Google Sheets
 */
function saveToSheet(leadData) {
  try {
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      setupSheetHeaders(newSheet);
      return saveToSheet(leadData); // Retry with new sheet
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      leadData.name,
      leadData.email,
      leadData.phone,
      leadData.location,
      leadData.message,
      leadData.source,
      'New' // Status
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 8);
    
    console.log('Lead saved successfully:', leadData.name);
    return true;
    
  } catch (error) {
    console.error('Error saving to sheet:', error);
    throw error;
  }
}

/**
 * Set up headers for the Google Sheet
 */
function setupSheetHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Location',
    'Message',
    'Source',
    'Status'
  ];
  
  // Add headers to the first row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#2d5016'); // HESA green color
  headerRange.setFontColor('white');
  
  // Freeze the header row
  sheet.setFrozenRows(1);
  
  console.log('Sheet headers set up successfully');
}

/**
 * Test function to verify the setup
 */
function testSetup() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 9876543210',
    location: 'Test City, Test State',
    message: 'This is a test message',
    source: 'Test',
    timestamp: new Date().toLocaleString()
  };
  
  const result = saveToSheet(testData);
  console.log('Test result:', result);
}

/**
 * Function to get sheet statistics
 */
function getSheetStats() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const lastRow = sheet.getLastRow();
    const totalLeads = lastRow > 1 ? lastRow - 1 : 0; // Subtract header row
    
    console.log(`Total leads in sheet: ${totalLeads}`);
    return totalLeads;
  } catch (error) {
    console.error('Error getting sheet stats:', error);
    return 0;
  }
}
