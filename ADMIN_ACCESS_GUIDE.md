# Admin Access Guide for Dr. DeSarbo

## How to Access Your Admin Dashboard

### Step 1: Go to Admin Login Page
Visit: **https://bucketlistdoctor.com/admin/login**

Or if testing locally: **http://localhost:8000/admin/login**

### Step 2: Login Credentials
**Username:** `prodfather` (or your assigned username)  
**Password:** Your password (contact Gavin if you need it reset)

### Step 3: After Login
You'll be automatically redirected to the **Admin Dashboard** at `/admin/dashboard`

---

## What You Can Do in the Admin Panel

### 📝 Blog Management (`/admin/blog`)
- **Create new blog posts**
- **Edit existing posts**
- **Publish/Draft posts**
- **Upload featured images**
- **View post statistics**

**How to Create a Blog Post:**
1. Click "Blog Posts" in the dashboard or go to `/admin/blog`
2. Click "Create New Post" button
3. Fill in:
   - Title
   - Excerpt (short summary)
   - Content (use the rich text editor)
   - Featured Image (upload or paste URL)
   - Status: Draft or Published
4. Click "Save Post"
5. If status is "Published", subscribers will automatically receive an email notification

### 📧 Newsletter Management (`/admin/newsletter`)
- **View all subscribers**
- **Send newsletters manually**
- **See subscriber statistics**

**How to Send a Newsletter:**
1. Go to `/admin/newsletter`
2. Click "Compose Newsletter" tab
3. Enter subject and content
4. Preview before sending
5. Click "Send to All Subscribers"

### 📊 Dashboard Overview (`/admin/dashboard`)
- View subscriber count
- View blog post count
- Quick actions
- Test newsletter functionality

---

## Important Notes

- **Blog posts automatically send emails** when published (if you have subscribers)
- **All changes are saved immediately**
- **You can edit published posts** - they'll update on the site automatically
- **Draft posts** are only visible to you until published

---

## Need Help?

If you have trouble accessing the admin panel:
1. Make sure you're using the correct URL
2. Check your username/password
3. Contact Gavin for password reset if needed

---

## Security

- The admin panel is protected and only accessible with your login credentials
- Never share your password
- Log out when done (especially on shared computers)

