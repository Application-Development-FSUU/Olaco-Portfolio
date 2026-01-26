# 🔧 How to Get Your EmailJS Credentials

Follow these steps to get your Public Key and Template ID:

## Step 1: Get Your Public Key

1. Go to https://dashboard.emailjs.com/admin/account
2. You should see your **Public Key** displayed
3. It looks like: `abc123def456ghi789jkl`
4. **Copy this entire key**

## Step 2: Create Email Template

1. Go to https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"**
3. **Template Name**: `contact_form` (or any name)
4. **Service**: Select your Gmail service (samantha.olaco@urios.edu.ph)

### Configure Template:

**Email Settings:**
- **From Name**: `{{from_name}}`
- **From Email**: Your email or `{{from_email}}`
- **To Email**: `samantha.olaco@urios.edu.ph`
- **Subject**: `New Message from {{from_name}}`

**Template Content (HTML):**
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

5. Click **"Save"**
6. After saving, you'll see the **Template ID** (looks like: `template_abc123xyz`)
7. **Copy this Template ID**

## Step 3: Update .env.local

1. Open `.env.local` in your project root
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wvvm7na
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz123abc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456ghi789jkl
```

**Example of completed .env.local:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wvvm7na
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=yyyyyyyyyyyyyyyyyyyy
```

## Step 4: Save & Restart Dev Server

1. Save the `.env.local` file
2. **Completely stop** your dev server (Ctrl+C)
3. Restart it: `npm run dev`
4. Test the contact form!

---

## 📋 Checklist

- [ ] Got Public Key from EmailJS account
- [ ] Created email template with correct variables
- [ ] Copied Template ID
- [ ] Updated `.env.local` with all 3 values
- [ ] Stopped dev server completely
- [ ] Restarted dev server
- [ ] Tested contact form

---

## 🎯 Important Notes

✅ Variable names MUST start with `NEXT_PUBLIC_` (required by Next.js)
✅ All 3 values must be filled in (no "your_xxx_here" placeholders)
✅ Dev server must be restarted after changing `.env.local`
✅ Template variables must be: `{{from_name}}`, `{{from_email}}`, `{{message}}`

---

## ❓ Where to Find Each Value

### Public Key Location:
Dashboard → Account → Look for "Public Key"

### Template ID Location:
Create Template → After saving, check the template URL or template details

### Service ID (Already Set):
`service_wvvm7na` (you provided this)

---

If you need help finding these values, let me know what you see on your EmailJS dashboard!
