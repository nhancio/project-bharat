# Fix EmailJS in Netlify Production

## Problem
The form is opening a mailto link instead of sending via EmailJS in production.

## Root Cause
Environment variables are not properly set in Netlify, causing EmailJS to fail silently.

## Solution Steps

### Step 1: Verify Environment Variables in Netlify

1. Go to your **Netlify Dashboard**
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Verify these three variables exist:
   - `VITE_EMAILJS_SERVICE_ID` = `service_to51a0h`
   - `VITE_EMAILJS_PUBLIC_KEY` = `sJRmvaj4n7OoyWI36`
   - `VITE_EMAILJS_TEMPLATE_ID` = `your_actual_template_id`

### Step 2: Check Template ID

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Email Templates**
3. Find your template and copy the **Template ID** (starts with `template_`)
4. Update the `VITE_EMAILJS_TEMPLATE_ID` in Netlify with the correct value

### Step 3: Redeploy Your Site

**IMPORTANT:** After adding/updating environment variables, you MUST redeploy:

1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Wait for deployment to complete

### Step 4: Test the Form

1. Open your production URL
2. Open browser **Developer Console** (F12)
3. Fill out and submit the form
4. Check the console for:
   - ✅ `EmailJS configuration detected` (on page load)
   - ✅ `EmailJS Configuration Check:` (on form submit)
   - ✅ `Email sent successfully via EmailJS` (on success)

### Step 5: Debugging

If it still doesn't work, check the console for:

#### Missing Environment Variables
```
⚠️ EmailJS environment variables are missing!
```
**Fix:** Add the missing variables in Netlify and redeploy.

#### Configuration Check
```
EmailJS Configuration Check: { hasServiceId: false, ... }
```
**Fix:** The variables aren't being read. Check:
- Variable names start with `VITE_`
- No typos in variable names
- Site has been redeployed after adding variables

#### EmailJS API Error
```
❌ Error sending email via EmailJS: [error details]
```
**Fix:** Check:
- Template ID is correct
- EmailJS service is connected to your email provider
- Template variables match the code

## Common Issues

### Issue 1: Variables Not Loading
**Symptom:** Console shows `hasServiceId: false`

**Solution:**
- Ensure variable names start with `VITE_` (required for Vite)
- Redeploy after adding variables
- Check for typos in variable names

### Issue 2: Template ID Mismatch
**Symptom:** EmailJS returns error about template

**Solution:**
- Verify Template ID in EmailJS dashboard
- Update `VITE_EMAILJS_TEMPLATE_ID` in Netlify
- Redeploy

### Issue 3: Service Not Connected
**Symptom:** EmailJS sends but no email received

**Solution:**
- Go to EmailJS Dashboard → Email Services
- Verify service `service_to51a0h` is connected
- Test the service connection

## Verification Checklist

- [ ] All 3 environment variables added in Netlify
- [ ] Variable names start with `VITE_`
- [ ] Template ID is correct and matches EmailJS dashboard
- [ ] Site has been redeployed after adding variables
- [ ] Browser console shows "EmailJS configuration detected"
- [ ] Form submission shows "Email sent successfully via EmailJS"
- [ ] Email is received at ajay@hesaglobal.com

## Quick Test

Run this in your browser console on the production site:

```javascript
console.log({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing'
});
```

All three should show values (not `undefined`).

## Still Not Working?

1. Check Netlify build logs for any errors
2. Verify EmailJS service is active and connected
3. Test EmailJS template manually in EmailJS dashboard
4. Check browser console for detailed error messages
5. Ensure you're testing on the production URL (not localhost)

