# Google Sheets Integration Setup Guide

Follow these steps to connect your waitlist form to Google Sheets for free data collection.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Refyul Waitlist"
4. In the first row, add these column headers:
   - `Timestamp`
   - `Full Name`
   - `Email`
   - `Phone`
   - `Location`
   - `Primary Needs`
   - `Vehicle Type`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.email,
      data.phone,
      data.location,
      data.needs,
      data.vehicleType
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project "Refyul Waitlist Handler"

## Step 3: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Waitlist Form Handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** (it looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

## Step 4: Update Your Website

1. Open `js/main.js`
2. Find this line near the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

## Step 5: Test Your Form

1. Open your website
2. Fill out the waitlist form
3. Submit it
4. Check your Google Sheet - you should see the data appear!

---

## Alternative: Use Formspree (Easier but Limited)

If you prefer a simpler solution:

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for free (50 submissions/month)
3. Create a new form
4. Copy your form endpoint
5. Update the form tag in `index.html`:
   ```html
   <form id="waitlistForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## Alternative: Use Google Forms

For the absolute easiest setup:

1. Create a Google Form with the same fields
2. Get the pre-filled link
3. Replace the form in your HTML with an embedded Google Form
4. Or link to it directly from your "Join Waitlist" buttons

---

## Troubleshooting

- **CORS errors**: Make sure you deployed as "Anyone" can access
- **403 errors**: Re-authorize the script
- **Data not appearing**: Check the script execution logs in Apps Script
- **Need help?**: Contact me or check the [Google Apps Script documentation](https://developers.google.com/apps-script)

---

**Current Status**: Form is ready, just needs the Google Script URL to be configured in `js/main.js`
