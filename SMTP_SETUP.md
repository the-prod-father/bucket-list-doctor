# SMTP Email Configuration Guide

## Environment Variables Required

Add these to your `.env.local` file for local development and to Vercel environment variables for production:

```bash
# SMTP Configuration
SMTP_HOST=smtp.gmail.com          # Your SMTP server hostname
SMTP_PORT=587                     # SMTP port (587 for TLS, 465 for SSL)
SMTP_SECURE=false                 # Set to 'true' for port 465 (SSL), 'false' for port 587 (TLS)
SMTP_USER=gavin@whynotus.ai       # Your SMTP username/email
SMTP_PASSWORD=Gr@p3-Pr0pe!-bunt   # Your SMTP password
SMTP_FROM=support@whynotus.ai     # Email address to send from (display name will be added)
```

## Common SMTP Server Settings

### Gmail / Google Workspace
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

**⚠️ IMPORTANT:** For Gmail/Google Workspace, you **MUST** use an "App Password":
1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with your Google account (`gavin@whynotus.ai`)
3. Select "Mail" and "Other (Custom name)" → enter "Bucket List Doctor"
4. Click "Generate" - you'll get a 16-character password
5. Use this app password (not your regular password) in `SMTP_PASSWORD`
6. Note: You must have 2-Step Verification enabled to generate app passwords

### Office 365 / Outlook
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP Server
```
SMTP_HOST=mail.whynotus.ai        # or smtp.whynotus.ai
SMTP_PORT=587                     # or 465, 25, etc.
SMTP_SECURE=false                 # true for SSL (port 465), false for TLS (port 587)
```

## Setup Instructions

### Local Development (.env.local)

1. Create or edit `.env.local` in the project root
2. Add the SMTP variables above
3. Restart your dev server

### Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM`
4. Select environments: **Production**, **Preview**, **Development**
5. Click **Save**
6. Redeploy your application

## Testing

After configuring SMTP:

1. Go to `/admin/dashboard`
2. Click **"Test Newsletter"** button
3. Check the result message - it will show if SMTP is configured
4. Check your email inbox (and spam folder)

You can also use the diagnostic endpoint:
- Visit `/api/admin/check-email-config` (while logged in as admin)
- This will verify SMTP connection and send a test email

## Security Notes

- **Never commit** `.env.local` to git
- Store passwords securely in Vercel environment variables
- Use app-specific passwords when possible (Gmail, etc.)
- Consider using environment-specific credentials for dev vs production

## Troubleshooting

**Connection Failed:**
- Verify SMTP_HOST and SMTP_PORT are correct
- Check if your network/firewall allows SMTP connections
- Try different ports (587 vs 465)

**Authentication Failed:**
- Verify SMTP_USER and SMTP_PASSWORD are correct
- For Gmail: Use an App Password, not your regular password
- Check if 2FA is enabled (may require app password)

**Emails Not Received:**
- Check spam folder
- Verify SMTP_FROM address is valid
- Check server logs for error messages
- Verify recipient email addresses are correct

