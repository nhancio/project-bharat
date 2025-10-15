# 📊 Google Sheets Lead Capture Setup Guide

This guide will help you set up automatic lead capture from your HESA website contact form directly to Google Sheets.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "HESA Lead Capture" or similar
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit`
   - Sheet ID: `1ABC123XYZ789`

### Step 2: Set Up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the code from `google-apps-script.js`
4. Update the `SHEET_ID` variable with your actual Sheet ID
5. Save the project (Ctrl+S) and name it "HESA Lead Capture"

### Step 3: Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the website

### Step 4: Update Website Code
1. Open `src/utils/emailService.ts`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your actual Web App URL
3. Save the file

### Step 5: Test the Integration
1. Go to your website contact form
2. Fill out and submit the form
3. Check your Google Sheet - the lead should appear automatically!

## 📋 What Gets Captured

Each form submission will create a new row in your Google Sheet with:

| Column | Description |
|--------|-------------|
| Timestamp | Date and time of submission |
| Name | Full name from form |
| Email | Email address |
| Phone | Phone number |
| Location | Village/District/State |
| Message | Additional message/background |
| Source | "HESA Website Contact Form" |
| Status | "New" (for tracking) |

## 🔧 Advanced Configuration

### Customizing the Sheet
You can modify the `google-apps-script.js` file to:
- Add more columns
- Change the sheet name
- Add data validation
- Set up automatic email notifications

### Adding Email Notifications
Add this function to your Google Apps Script to get email alerts for new leads:

```javascript
function sendEmailNotification(leadData) {
  const subject = `New HESA Lead: ${leadData.name}`;
  const body = `
New franchise application received:

Name: ${leadData.name}
Email: ${leadData.email}
Phone: ${leadData.phone}
Location: ${leadData.location}
Message: ${leadData.message}

Submitted: ${leadData.timestamp}
  `;
  
  MailApp.sendEmail('ajay@hesaglobal.com', subject, body);
}
```

Then call it in the `saveToSheet` function:
```javascript
// After saving to sheet
sendEmailNotification(leadData);
```

## 🛠️ Troubleshooting

### Common Issues

**1. "Script not found" error**
- Make sure you deployed the script as a web app
- Check that the Web App URL is correct in your website code

**2. "Permission denied" error**
- Ensure the web app is set to "Anyone" access
- Check that the Google Sheet is accessible

**3. Data not appearing in sheet**
- Verify the Sheet ID is correct
- Check the sheet name matches exactly
- Look at the Apps Script logs for errors

**4. CORS errors in browser**
- This is normal with Google Apps Script
- The `no-cors` mode handles this automatically

### Testing Your Setup

1. **Test the Google Apps Script directly:**
   - Open your Apps Script project
   - Run the `testSetup()` function
   - Check if a test row appears in your sheet

2. **Check the logs:**
   - In Apps Script, go to "Executions" to see logs
   - Look for any error messages

3. **Verify the Web App URL:**
   - The URL should end with `/exec`
   - Test it in a browser (you should see a JSON response)

## 📈 Analytics & Tracking

The system automatically tracks:
- Form submission timestamps
- Source of the lead (website)
- All form field data
- Submission success/failure

You can extend this to track:
- Page referrer
- User agent
- Geographic location
- Form completion time

## 🔒 Security & Privacy

- All data is stored in your private Google Sheet
- No third-party services involved
- Data is encrypted in transit and at rest
- You have full control over the data

## 📞 Support

If you need help with the setup:
1. Check the troubleshooting section above
2. Verify all URLs and IDs are correct
3. Test each component individually
4. Check the browser console for errors

## 🎯 Next Steps

Once set up, you can:
1. Set up automatic email notifications for new leads
2. Create dashboards in Google Sheets
3. Export data to Excel when needed
4. Set up lead scoring and qualification
5. Integrate with CRM systems

---

**Need help?** The setup should take less than 5 minutes. If you encounter any issues, double-check the Sheet ID and Web App URL are correct.
