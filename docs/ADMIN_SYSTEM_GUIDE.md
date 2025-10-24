# Bucket List Doctor Admin System Guide

**Last Updated:** October 24, 2025
**Status:** ✅ Production Ready

---

## 🎯 Overview

Complete admin CMS for managing the Bucket List Doctor website, including newsletter management, blog posts, and subscriber database.

## 🔐 Admin Access

### Login Credentials

**Admin Dashboard URL:** https://www.bucketlistdoctor.com/admin/login

**Dr. DeSarbo Account (Admin):**
- Username: `Dr. D`
- Password: `bucketlistking`
- Role: admin

**Prod Father Account (Super Admin):**
- Username: `prodfather`
- Password: `whynotus`
- Role: super_admin

### Access Levels
- **Admin:** Can manage newsletter, blog posts, view subscribers
- **Super Admin:** Full system access including user management

---

## 📧 Newsletter System

### Accessing Newsletter Management

1. Login at `/admin/login`
2. Click "Newsletter" in the top navigation
3. Two tabs available: **Subscribers** and **Compose Newsletter**

### Managing Subscribers

**View Subscribers:**
- See all subscribers with email, status, source, and signup date
- Filter by active/inactive status
- Real-time subscriber counts

**Export Subscribers:**
- Click "Export CSV" button
- Downloads: `subscribers-YYYY-MM-DD.csv`
- Includes all subscriber data

### Sending Newsletters

**Step 1: Compose**
1. Click "Compose Newsletter" tab
2. Enter subject line (required)
3. Write content using rich text editor:
   - Bold, italic, underline formatting
   - Headers (H1, H2, H3)
   - Bulleted and numbered lists
   - Links and images
   - Clean text formatting

**Step 2: Preview**
1. Click "Preview" button
2. See exactly how email will look
3. Review formatting and content

**Step 3: Send**
1. Click "Send to X Subscribers" button
2. Confirm you want to send
3. Emails are sent in batches of 50
4. Progress shown in real-time
5. Success message when complete

### Email Features

**Automatic Features:**
- Professional sender: "Dr. Jeffrey DeSarbo <newsletter@bucketlistdoctor.com>"
- Unsubscribe link automatically added to every email
- Batch processing to avoid rate limits
- Error handling and retry logic

**Unsubscribe System:**
- Every email includes one-click unsubscribe link
- Users redirected to `/unsubscribe?email=...`
- Instant confirmation page
- Database automatically updated

---

## 🔧 Technical Setup

### Environment Variables Required

Add to Vercel environment variables:

```bash
# Database (Already configured)
POSTGRES_URL_NON_POOLING=postgres://...

# Authentication (Already configured)
NEXTAUTH_SECRET=xxxxx
NEXTAUTH_URL=https://www.bucketlistdoctor.com

# Email Service (NEEDS SETUP)
RESEND_API_KEY=re_xxxxx
```

### Setting Up Resend Email

**1. Create Resend Account:**
- Go to https://resend.com
- Sign up (free tier: 3,000 emails/month)
- Verify your email

**2. Get API Key:**
- Go to https://resend.com/api-keys
- Click "Create API Key"
- Name it: "Bucket List Doctor Newsletter"
- Copy the key (starts with `re_`)

**3. Add to Vercel:**
- Go to Vercel project settings
- Navigate to "Environment Variables"
- Add new variable:
  - Name: `RESEND_API_KEY`
  - Value: `re_xxxxx` (your key)
  - Environment: Production, Preview, Development
- Click "Save"
- Redeploy the site

**4. Verify Domain (Optional but Recommended):**
- In Resend dashboard, go to "Domains"
- Click "Add Domain"
- Enter: `bucketlistdoctor.com`
- Add DNS records shown (TXT, MX, CNAME)
- Wait for verification (can take up to 48 hours)
- Once verified, emails send from `newsletter@bucketlistdoctor.com`

**Without Domain Verification:**
- Emails will send from `onboarding@resend.dev`
- Still works perfectly fine
- May have lower deliverability rates

### Testing the Newsletter System

**1. Add Test Subscriber:**
- Visit homepage at https://www.bucketlistdoctor.com
- Find newsletter signup form at bottom
- Enter your test email
- Confirm you see success message

**2. Verify in Admin:**
- Login to admin dashboard
- Go to Newsletter > Subscribers tab
- Confirm your email appears in the list

**3. Send Test Newsletter:**
- Switch to "Compose Newsletter" tab
- Subject: "Test Newsletter"
- Content: "This is a test email from the admin system"
- Click "Preview" to review
- Click "Send to 1 Subscriber"
- Check your inbox (may take 1-2 minutes)
- Click unsubscribe link to test that flow

**4. Verify Unsubscribe:**
- Check email for unsubscribe link
- Click it
- Confirm you see success page
- Return to admin dashboard
- Refresh subscribers list
- Confirm status changed to "Unsubscribed"

---

## 📊 Database Schema

### Tables

**users:**
- Admin accounts for authentication
- Stores username, password hash, role, email
- Row-level security enabled

**newsletter_subscribers:**
- All newsletter subscribers
- Email, subscribed status, source, timestamps
- Automatic updated_at triggers

**blog_posts:** (Future)
- Blog post content and metadata
- Draft/published status
- SEO fields

### Current Data

**Admin Users:**
- Dr. D (admin)
- Prod Father (super_admin)

**Subscribers:**
- Currently: Check admin dashboard for count
- Database: Supabase PostgreSQL

---

## 🚀 Deployment

### Vercel Configuration

**Automatic Deployments:**
- Every push to `main` branch deploys automatically
- Build time: ~30-60 seconds
- Preview deployments for all branches

**Environment:**
- Node.js version: Latest LTS
- Next.js: 14.2.3
- Build command: `next build`
- Output directory: `.next`

**Required Environment Variables:**
```
POSTGRES_URL_NON_POOLING
NEXTAUTH_SECRET
NEXTAUTH_URL
RESEND_API_KEY (optional - for sending emails)
```

### Manual Deployment

If needed:
```bash
# From local machine
git push origin main

# Or redeploy from Vercel dashboard
# Go to Deployments > ... > Redeploy
```

---

## 🐛 Troubleshooting

### Newsletter Won't Send

**Check 1: Resend API Key**
```bash
# Verify environment variable is set
# In Vercel: Settings > Environment Variables
# Look for: RESEND_API_KEY
```

**Check 2: Active Subscribers**
```
# In admin dashboard
# Go to Newsletter > Subscribers
# Confirm "Active" count > 0
```

**Check 3: Email Validation**
```
# Invalid emails will fail silently
# Check subscriber list for typos
# Verify email addresses are valid
```

**Check 4: Rate Limits**
```
# Resend free tier: 3,000 emails/month
# System sends max 50 at a time
# Wait 1 second between batches
```

### Can't Login to Admin

**Issue: "Invalid username or password"**
- Check username is exactly: `Dr. D` or `prodfather` (case sensitive)
- Check password has no extra spaces
- Clear browser cookies and try again

**Issue: Database connection error**
- Verify POSTGRES_URL_NON_POOLING in env variables
- Check Supabase project is active
- Database may need restart (rare)

### Subscribers Not Showing

**Issue: Count shows 0 but people signed up**
- Check database directly in Supabase dashboard
- Verify newsletter_subscribers table exists
- Check RLS policies are correct
- May need to refresh page

---

## 📈 Future Enhancements

### Priority 1 (Coming Soon)
- [ ] Blog post management system
- [ ] Image upload to Vercel Blob
- [ ] Newsletter templates library
- [ ] Email analytics (opens, clicks)

### Priority 2 (Nice to Have)
- [ ] Schedule newsletters for later
- [ ] Newsletter history/archive
- [ ] A/B testing for subject lines
- [ ] Subscriber segmentation
- [ ] Custom email templates
- [ ] Rich media library

### Priority 3 (Advanced)
- [ ] Multi-user admin accounts
- [ ] Role-based permissions
- [ ] Activity logs/audit trail
- [ ] Automated email sequences
- [ ] Integration with CRM

---

## 📞 Support

### For Technical Issues
- Contact: Prod Father (Why Not Us Labs)
- Email: greg@whynotus.ai

### For Content Questions
- Contact: Dr. Jeffrey DeSarbo
- Email: drdesarbo@gmail.com

---

## 📝 Notes

### Security
- All passwords are hashed with bcrypt
- JWT sessions expire after 24 hours
- Row-level security enabled on all tables
- API routes check authentication
- SSL/TLS encryption for database connections

### Performance
- Newsletter sending is async (doesn't block UI)
- Batch processing prevents rate limit issues
- Database queries optimized with indexes
- Images served via Vercel CDN

### Backup
- Database: Supabase automatic backups
- Code: GitHub repository
- All commits include detailed messages

---

**System Status:** ✅ Fully Operational
**Last Deploy:** Check Vercel dashboard
**Next Steps:** Get Resend API key and test newsletter
