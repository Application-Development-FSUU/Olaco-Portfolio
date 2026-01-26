# Email Integration Setup Guide

Your portfolio now has email integration enabled! Here's how to complete the setup:

## Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable 2-Factor Authentication if you haven't already
4. Under "App passwords", select:
   - App: Mail
   - Device: Windows PC (or your device type)
5. Google will generate a 16-character password
6. Copy this password

## Step 2: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the 16-character password you copied
3. Make sure the `GMAIL_USER` is set to your email: `iamsamanthanicoleolaco@gmail.com`

Example `.env.local`:
```
GMAIL_USER=iamsamanthanicoleolaco@gmail.com
GMAIL_PASSWORD=abcd efgh ijkl mnop
```

## Step 3: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Contact section of your portfolio
3. Fill out the contact form and submit
4. You should receive:
   - An email in your Gmail inbox with the contact message
   - A confirmation email sent to the user

## Features Included

✅ **Contact Form** with Name, Email, Subject, and Message fields
✅ **Email to Your Gmail** - All submissions sent to your inbox
✅ **Confirmation Email** - Users receive a thank you message
✅ **Form Validation** - Client-side and server-side validation
✅ **Success/Error Messages** - Using Sonner toast notifications
✅ **Loading State** - Button shows "Sending..." while processing

## Environment Variables Used

- `GMAIL_USER`: Your Gmail address
- `GMAIL_PASSWORD`: App-specific password (NOT your regular password)

## Troubleshooting

**Issue**: "Failed to send email"
- Solution: Check that your app password is correct and 2FA is enabled

**Issue**: "EAUTH authentication error"
- Solution: Make sure you're using an app password, not your regular Gmail password

**Issue**: Environment variables not loading
- Solution: Restart your dev server after updating `.env.local`

## Files Created/Modified

- ✨ `/app/api/send-email/route.ts` - Email API endpoint
- 📝 `/components/Contact.tsx` - Updated with contact form
- ⚙️ `/.env.local` - Environment variables (add your Gmail password here)
