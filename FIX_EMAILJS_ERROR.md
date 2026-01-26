# 🔍 EmailJS Configuration Diagnostic

The error "The public key is required" means your `.env.local` file is missing or incomplete.

## Quick Fix Checklist:

### 1. Check Your .env.local File

Open `.env.local` in your project root and verify it looks like this:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wvvm7na
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=yyyyyyyyyyyyyyyyyyyy
```

✅ **All three values must be filled in** (no placeholders like "your_xxx_here")

### 2. Make Sure Values Are Not Empty

❌ Wrong:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

✅ Right:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456ghi789
```

### 3. Get Your Public Key

1. Go to: https://dashboard.emailjs.com/admin/account
2. Look for **"Public Key"** section
3. Copy the entire key (it's usually a long string)
4. Paste it in `.env.local`

### 4. Get Your Template ID

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on your template (or create one if you haven't)
3. Look for the **Template ID** in the template details
4. Copy it and paste in `.env.local`

### 5. Restart Dev Server

**IMPORTANT:** You must restart your dev server after updating `.env.local`

1. Stop the dev server (Ctrl+C)
2. Wait 2 seconds
3. Run: `npm run dev`

---

## 📋 Your Current Setup

**Service ID**: ✅ Already set (`service_wvvm7na`)
**Template ID**: ❓ Needs to be created and set
**Public Key**: ❓ Needs to be found and set

---

## 🔑 Step-by-Step: Get Public Key

1. Open: https://dashboard.emailjs.com/admin/account
2. Look at your account information
3. Find the section labeled **"Public Key"** or **"API Keys"**
4. It will show a long string starting with letters and numbers
5. Copy the ENTIRE string
6. Paste it in `.env.local` next to `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=`

---

## 📧 Step-by-Step: Create Template

1. Open: https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"** button
3. Fill in:
   - **Service**: Gmail (samantha.olaco@urios.edu.ph)
   - **Template Name**: `contact_form`
   - **Subject**: `New Message from {{from_name}}`
4. In the template body, use:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Message: {{message}}
   ```
5. Click **"Save"**
6. After saving, the page will show your **Template ID**
7. Copy it and paste in `.env.local`

---

## ✨ After Updating .env.local

1. Save the file
2. Completely stop dev server: Press `Ctrl+C`
3. Wait 2 seconds
4. Start again: `npm run dev`
5. Test the contact form

---

## 🆘 Still Getting Error?

**Check the console output** when you try to send:
- If it says "missing" next to any field, that variable isn't in `.env.local`
- If it says "present", the variable is there but might be invalid

**Make sure:**
- ✅ No spaces around `=` sign in .env.local
- ✅ No quotes around the values
- ✅ File is saved
- ✅ Dev server is restarted
- ✅ All three values are actual credentials (not placeholder text)

**If still stuck:**
1. Delete `.env.local`
2. Recreate it with correct values
3. Restart dev server
