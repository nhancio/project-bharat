# EmailJS Setup Guide

## Step 1: Create .env File

Create a `.env` file in the root directory of your project with the following content:

```env
VITE_EMAILJS_SERVICE_ID=service_to51a0h
VITE_EMAILJS_PUBLIC_KEY=sJRmvaj4n7OoyWI36
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Note:** Replace `your_template_id_here` with the actual template ID you'll get after creating the template in EmailJS dashboard.

## Step 2: Create EmailJS Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Email Templates** → **Create New Template**
3. Use the template code below:

### EmailJS Template Code

**Subject:**
```
New Franchise Application - {{from_name}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #2d5016 0%, #4a7c2a 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border: 1px solid #e0e0e0;
    }
    .field {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-left: 4px solid #2d5016;
      border-radius: 4px;
    }
    .field-label {
      font-weight: bold;
      color: #2d5016;
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      text-transform: uppercase;
    }
    .field-value {
      color: #333;
      font-size: 16px;
    }
    .footer {
      background: #f0f0f0;
      padding: 15px;
      text-align: center;
      border-radius: 0 0 8px 8px;
      font-size: 12px;
      color: #666;
    }
    .message-box {
      background: #fff3cd;
      border: 1px solid #ffc107;
      padding: 15px;
      border-radius: 4px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 New Franchise Application</h1>
    <p>HESA Technologies - Project Bharat</p>
  </div>
  
  <div class="content">
    <p><strong>You have received a new franchise partnership application!</strong></p>
    
    <div class="field">
      <span class="field-label">Applicant Name</span>
      <span class="field-value">{{from_name}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">Email Address</span>
      <span class="field-value">{{from_email}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">Phone Number</span>
      <span class="field-value">{{phone}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">Location</span>
      <span class="field-value">{{location}}</span>
    </div>
    
    {{#message}}
    <div class="field">
      <span class="field-label">Additional Message / Background</span>
      <div class="message-box">
        <span class="field-value">{{message}}</span>
      </div>
    </div>
    {{/message}}
    
    <div class="field">
      <span class="field-label">Submitted On</span>
      <span class="field-value">{{timestamp}}</span>
    </div>
  </div>
  
  <div class="footer">
    <p>This email was sent from the HESA Technologies website contact form.</p>
    <p>Please respond to the applicant at: <strong>{{from_email}}</strong></p>
  </div>
</body>
</html>
```

**Content (Plain Text - Alternative):**
```
New Franchise Application - HESA Technologies

You have received a new franchise partnership application!

APPLICANT NAME: {{from_name}}
EMAIL ADDRESS: {{from_email}}
PHONE NUMBER: {{phone}}
LOCATION: {{location}}

ADDITIONAL MESSAGE / BACKGROUND:
{{message}}

SUBMITTED ON: {{timestamp}}

---
This email was sent from the HESA Technologies website contact form.
Please respond to the applicant at: {{from_email}}
```

## Step 3: Configure EmailJS Service

1. In EmailJS Dashboard, go to **Email Services**
2. Make sure your service `service_to51a0h` is connected to your email provider (Gmail, Outlook, etc.)
3. If not connected, click **Add New Service** and connect your email account

## Step 4: Get Template ID

1. After creating the template, you'll see a **Template ID** (e.g., `template_abc123`)
2. Copy this Template ID
3. Update your `.env` file:
   ```env
   VITE_EMAILJS_TEMPLATE_ID=template_abc123
   ```

## Step 5: Configure for Netlify

### For Netlify Deployment:

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following environment variables:
   - `VITE_EMAILJS_SERVICE_ID` = `service_to51a0h`
   - `VITE_EMAILJS_PUBLIC_KEY` = `sJRmvaj4n7OoyWI36`
   - `VITE_EMAILJS_TEMPLATE_ID` = `your_template_id_here` (from Step 4)

4. **Important:** After adding environment variables, you need to **redeploy** your site for the changes to take effect.

## Step 6: Test the Integration

1. Fill out the franchise application form on your website
2. Submit the form
3. Check the recipient email (ajay@hesaglobal.com) for the email
4. Check the browser console for any errors

## Troubleshooting

### Email not being sent?
- Check that all environment variables are set correctly
- Verify the template ID matches the one in EmailJS dashboard
- Check browser console for error messages
- Ensure EmailJS service is properly connected to your email provider

### Template variables not working?
- Make sure variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{location}}`, `{{message}}`, `{{timestamp}}`
- Variable names are case-sensitive

### Netlify deployment issues?
- Make sure environment variables are set in Netlify dashboard
- Redeploy the site after adding environment variables
- Check Netlify build logs for any errors

## Template Variables Reference

The following variables are available in your EmailJS template:

- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email address
- `{{phone}}` - Applicant's phone number (10 digits, cleaned)
- `{{location}}` - Applicant's location (Village/District/State)
- `{{message}}` - Additional message/background (optional)
- `{{timestamp}}` - Submission timestamp (formatted)
- `{{to_email}}` - Recipient email (ajay@hesaglobal.com)
- `{{subject}}` - Email subject line

## Security Notes

- The `.env` file is already in `.gitignore` and will not be committed to git
- Public key is safe to expose in frontend code (it's designed for client-side use)
- Service ID and Template ID are also safe to expose
- Never commit your `.env` file to version control

