# EmailJS Integration Setup Guide

Your portfolio is now set up with **EmailJS** for email integration! Here's how to complete the setup:

## Step 1: Get Your EmailJS Public Key

1. Go to https://www.emailjs.com/ and log in (or create an account)
2. Click on **"Account"** in the top menu
3. Go to **"API Keys"** tab
4. Copy your **Public Key** (it looks like: `abc123def456...`)
5. Keep this key safe

## Step 2: Create an Email Template

1. In EmailJS dashboard, go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set it up like this:

### Template Settings:
- **Service**: Gmail (connected as samantha.olaco@urios.edu.ph)
- **Subject**: `New Message from {{from_name}}`

### Email Content (HTML):
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

4. Save the template
5. Note the **Template ID** (it looks like: `template_abc123...`)

## Step 3: Update Environment Variables

1. Open `.env.local` file in your project
2. Fill in the values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wvvm7na
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_template_id_here` with the Template ID from Step 2
- `your_public_key_here` with the Public Key from Step 1

## Step 4: Restart Dev Server

```bash
npm run dev
```

## Step 5: Test the Contact Form

1. Open your portfolio in browser
2. Go to Contact section
3. Fill in and submit the form
4. Check your Gmail inbox (samantha.olaco@urios.edu.ph)
5. You should receive the message!

---

## 📝 Finding Your Credentials

### Where to Get Template ID:
- EmailJS Dashboard → Email Templates → Click on your template
- Template ID is shown in the template details

### Where to Get Public Key:
- EmailJS Dashboard → Account → API Keys
- Copy the "Public Key"

### Service ID (Already Set):
- `service_wvvm7na` (provided by you)

---

## 🎯 Template Variables Reference

Your template should use these variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email (samantha.olaco@urios.edu.ph)

---

## ✅ Benefits of EmailJS

✓ No backend required (all on client-side)
✓ Free tier available
✓ Direct email sending
✓ Easy to set up
✓ No API key exposure on backend
✓ HTML email templates

---

## ❓ Troubleshooting

**Q: "Failed to send message" error**
- Check that Template ID and Public Key are correct in `.env.local`
- Make sure the template exists and is active
- Restart dev server after updating `.env.local`

**Q: Email not arriving**
- Check your spam/junk folder
- Verify template ID is correct
- Check that variables in template match: `from_name`, `from_email`, `message`

**Q: Can't find Public Key**
- Go to emailjs.com
- Log in to your account
- Click Account → API Keys
- Copy the Public Key (NOT the Service ID)

**Q: Environment variables not loading**
- Restart your dev server: `npm run dev`
- Make sure `.env.local` file is in project root
- Check that variable names start with `NEXT_PUBLIC_`

---

## 📱 What Users Will Experience

✅ Users fill form with Name, Email, Message
✅ Click "Send Message"
✅ See success notification
✅ You receive email immediately
✅ Emails go directly to samantha.olaco@urios.edu.ph

**Next Steps:**
1. Create EmailJS template
2. Get your Public Key
3. Update `.env.local`
4. Test the contact form!
