# Master Implementation Plan - Bucket List Doctor

**Last Updated:** 2025-10-23
**Critical Deadline:** Friday 10/25/2025 at 2PM (Radio Interview)
**Target:** Database hooked up, newsletter working, admin login functional, all client requests completed

---

## Three-Way Information Synthesis

This plan balances:
1. **Meeting Requirements** (10/18/2025 - HIGHEST PRIORITY)
2. **Squarespace Content Migration** (21 markdown files documented)
3. **Admin/Newsletter System** (wnu-newsletter-template foundation)

---

## PRIORITY 1: Critical Pre-Interview Fixes (Due: Thursday 4:30 PM)

**Deadline:** Thursday 10/24/2025 at 4:30 PM (before radio interview)

### 1.1 Punctuation Fixes
**Why:** Dr. D said "I kind of like punctuations kind of" - punctuation is critical throughout site

**Files to Update:**
- `app/page.tsx` - Homepage composition
- `components/home/ValueProp.tsx` - Value proposition text
- `components/home/BookShowcase.tsx` - Book descriptions
- `components/home/AboutSection.tsx` - About section text
- `app/about/page.tsx` - Full about page content
- `app/books/page.tsx` - Books page descriptions
- `app/blog/page.tsx` - Blog intro text
- `app/your-brain/page.tsx` - Brain benefits text

**Action:** Review all user-facing text for proper punctuation, especially:
- Periods at end of sentences
- Commas in lists
- Apostrophes in contractions
- Quotation marks around quotes

### 1.2 URL Corrections
**Critical Errors:**

1. **doctorsarbo.com → doctordesarbo.com**
   - File: `components/home/CrossSiteNavigation.tsx`
   - Line: Check all external links
   - Fix: Change ALL instances to correct spelling

2. **Remove Science Publishing Links**
   - File: `components/home/CrossSiteNavigation.tsx`
   - Action: Remove or hide science publishing site navigation

**Files to Check:**
- All components with external links
- Footer links
- Navigation components

### 1.3 BookBaby Formatting
**Rule:** "BookBaby" is ONE word with capital B's

**Files to Update:**
- `app/books/page.tsx` - Change "Book Baby" to "BookBaby"
- Any marketing copy mentioning the retailer
- Footer or credits if applicable

### 1.4 Books Section Overhaul
**Current Issue:** "Buy Now" button links to wrong book

**File:** `app/books/page.tsx:153`

**Required Changes:**
1. Show ALL 3 books:
   - The Neuroscience of a Bucket List (main book)
   - The Neuroscience of a Bucket List Workbook
   - Third book (check with Dr. D for details)

2. Fix "Buy Now" links:
   - Amazon: https://a.co/d/559YKwr
   - BookBaby: https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p
   - Barnes & Noble: https://www.barnesandnoble.com/s/desarbo

3. Verify each "Buy Now" button goes to CORRECT book on CORRECT retailer

**Design:** Use existing 3-book grid layout, ensure mobile responsiveness

### 1.5 About Page Title Update
**File:** `app/about/page.tsx`

**Change:**
- From: "About Dr. DeSarbo" or similar
- To: "Jeffrey DeSarbo, D.O."

**Also Update:**
- Page metadata title
- H1 heading on page
- Navigation text (if applicable)

### 1.6 Icons Update
**Files to Update:**
- `app/about/page.tsx` or icon components
- `components/layout/Navigation.tsx` (if icons shown there)

**Changes:**
1. Add microphone/speaker icon (for radio/speaking engagements)
2. Change existing icon to stethoscope (emphasize medical credential)

**Tech:** Use `react-icons` library (already installed)
- Microphone: `FaMicrophone` from `react-icons/fa`
- Stethoscope: `FaStethoscope` from `react-icons/fa`

### 1.7 ED180 Capitalization
**Rule:** "ED180" - capital E, capital D, numbers 180

**Files to Check:**
- `components/home/CrossSiteNavigation.tsx`
- Any marketing copy or about text
- Footer credits

**Search for:** "ed-180", "Ed-180", "Ed180", "ed180"
**Replace with:** "ED180"

### 1.8 Logo Integration
**Requirement:** Logo on EVERY page

**Current State:** Logo likely only in Navigation component

**Files to Update:**
- `components/layout/Navigation.tsx` - Ensure logo is visible and clickable
- All pages: Verify Navigation component is imported and rendered

**Logo File:** Check `public/` directory for logo files

**Action:**
1. Verify logo exists in correct location
2. Ensure Navigation component shows logo
3. Check all 7 pages render Navigation
4. Test logo is visible on mobile

### 1.9 Remove Medium References
**Search entire codebase for:**
- "medium.com"
- "Medium"
- Any blog post links that go to Medium

**Files to Check:**
- `app/blog/page.tsx`
- `components/layout/Footer.tsx`
- Any social media link sections

**Action:** Remove or replace with new blog system

### 1.10 About Page - Add Appointment Info
**File:** `app/about/page.tsx`

**Add Section:** "Schedule an Appointment" or "Work with Dr. DeSarbo"

**Content to Add:**
- How to contact for consultations
- Availability information
- Link to scheduling system (if exists)
- Or email/contact form

---

## PRIORITY 2: Content Integration from Squarespace (Before Newsletter Build)

**Goal:** Integrate documented content from old site into new site

**Source:** All files in `docs/squarespace-site-reference/`

### 2.1 Homepage Enhancements
**File:** `app/page.tsx`

**Reference:** `docs/squarespace-site-reference/homepage.md`

**Actions:**
- Compare existing hero section with documented content
- Ensure all 8 navigation cards match old site
- Verify color scheme matches documented brand colors
- Check mobile responsiveness

### 2.2 Books Page Content
**File:** `app/books/page.tsx`

**Reference:** `docs/squarespace-site-reference/books-page.md`

**Actions:**
- Add "Benefits of Bucket Listing" section from old site
- Integrate book descriptions (verbatim from docs)
- Add workbook content
- Ensure all purchase links are correct

### 2.3 Blog Page Content
**File:** `app/blog/page.tsx`

**Reference:** `docs/squarespace-site-reference/blog-page.md`

**Actions:**
- Add Dr. DeSarbo's personal intro (verbatim from docs)
- Replace placeholder YouTube IDs with real videos
- Add philosophy section on bucket list sharing

**YouTube Videos Needed:**
- Get YouTube channel videos from Dr. D
- Update placeholder IDs in `app/blog/page.tsx:169`

### 2.4 Contributors Corner
**New Page Needed:** `app/contributors/page.tsx`

**Reference:** `docs/squarespace-site-reference/contributors-page.md`

**Build:**
1. Submission form with fields from documentation
2. Legal terms & consent (verbatim from docs)
3. Thank you message section
4. Glamping tent hero image

**Form Fields:**
- Name
- Email
- Bucket list item submission
- Photo upload (optional)
- Consent checkboxes

### 2.5 Your Brain Page Enhancement
**File:** `app/your-brain/page.tsx`

**Reference:** `docs/squarespace-site-reference/your-brain-page.md`

**Actions:**
- Verify all 5 brain benefits are included
- Add 8 inspirational quotes with proper attribution
- Integrate quotes graphic from screenshots
- Ensure neuroscience messaging is accurate

**Quotes to Include:**
1. Carl Sagan
2. Eleanor Roosevelt
3. Eric Kandel
4. David Eagleman
5. Oliver Wendell Holmes Jr.
6. Charles Dickens
7. Norman Doidge
8. Dr. Lara Boyd

### 2.6 About Page Rebuild
**File:** `app/about/page.tsx` (already exists, needs enhancement)

**Reference:** `docs/squarespace-site-reference/about-page.md`

**Content Sources:**
- Bio from blog page intro
- Professional background
- Personal bucket list story

**Sections:**
1. Hero with professional photo
2. About Dr. DeSarbo - credentials, background
3. The Bucket List Journey - personal story
4. Why This Matters - mission statement
5. Book & Work - link to books page
6. Connect - social media, newsletter
7. Schedule an Appointment (from Priority 1.10)

**Quote to Include:**
> "I didn't come from a privileged background. I was raised in a lower-middle-class household, with few expectations placed on me growing up. Becoming a doctor was a later-in-life goal—and yes, a bucket list item. I've had both opportunities and misfortunes along the way. But I've always tried to make the most of what life has offered, striving to live without regret and to stay curious about what's possible."

### 2.7 Join Us Page Redesign
**File:** Create `app/join-us/page.tsx`

**Reference:** `docs/squarespace-site-reference/join-us-page.md`

**Current Issue:** Old form is "complete dog shit" - overly complex

**New Design:**
**Option 1: Newsletter Signup Only (RECOMMENDED)**
- Email (required)
- First Name (optional)
- Checkbox: Consent to receive emails
- Simple submit button
- Value prop headline
- Sample newsletter preview

**Integration:**
- Use existing `components/layout/NewsletterSignup.tsx`
- Extend with first name field
- Add clear privacy policy
- Link to unsubscribe page

### 2.8 Tips & Ideas Landing Page
**File:** `app/tips-ideas/page.tsx` (exists, needs content)

**Reference:** `docs/squarespace-site-reference/tips-ideas-*.md` (10 files)

**Build:**
- Landing page with 10 category cards
- Each card links to detailed sub-page
- Use vibrant imagery from screenshots
- Grid layout (mobile responsive)

**10 Categories:**
1. Documents (passports, visas)
2. Transportation (flights, trains)
3. Medical Concerns
4. Currencies & Trade Practices
5. Babies, Children & Teenagers
6. Accommodations
7. Packing & What to Bring
8. Cultural Considerations
9. Food & Beverages
10. Safety & Precautions

### 2.9 Tips & Ideas Sub-Pages
**Files to Create:** 10 new pages under `app/tips-ideas/[category]/page.tsx`

**Reference:** All `docs/squarespace-site-reference/tips-ideas-*.md` files

**Content:** 3,000-10,000+ words per page (all documented)

**Build Strategy:**
- Create reusable template component
- Markdown or static content
- Consistent styling across all 10 pages
- Include relevant images from screenshots

**Priority:** PHASE 3 (after admin/newsletter system)

### 2.10 City/Country Bucket List
**File:** Create `app/city-country/page.tsx`

**Reference:** `docs/squarespace-site-reference/city-country-page.md` (empty on old site)

**Status:** FUTURE/OPTIONAL - Build from scratch when ready

**Ideas:**
- Interactive map of bucket list destinations
- City guides
- Country-specific bucket list items
- User-submitted locations (via Contributors Corner)

---

## PRIORITY 3: Admin/Newsletter CMS System (Before Sleep!)

**Goal:** Functional admin system for content management and automated newsletters

**URL Decision Needed:** Choose ONE:
- ✅ `bucketlistdoctor.com/admin` (RECOMMENDED - simpler deployment)
- ⚠️ `admin.bucketlistdoctor.com` (requires subdomain setup)

### 3.1 Database Schema Design

**Supabase Tables:**

#### Existing Table: `newsletter_subscribers`
```sql
-- Already exists
id UUID PRIMARY KEY
created_at TIMESTAMP
email TEXT UNIQUE
subscribed BOOLEAN
```

#### New Table: `blog_posts`
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image_url TEXT,
  youtube_video_id TEXT,
  pdf_url TEXT,
  external_link TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  author_id UUID,
  tags TEXT[]
);

-- Index for faster queries
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
```

#### New Table: `media_uploads`
```sql
CREATE TABLE media_uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  filename TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT, -- 'image', 'pdf', 'video'
  file_size INTEGER,
  uploaded_by UUID,
  alt_text TEXT
);
```

#### New Table: `newsletters`
```sql
CREATE TABLE newsletters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  sent_at TIMESTAMP,
  sent_to_count INTEGER DEFAULT 0,
  blog_post_id UUID REFERENCES blog_posts(id)
);
```

#### New Table: `admin_users`
```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  last_login TIMESTAMP
);

-- Insert Dr. DeSarbo as admin (password to be set)
-- Use bcrypt to hash password in app
```

### 3.2 Authentication Setup

**Tech:** NextAuth.js v5 (latest)

**File:** `app/api/auth/[...nextauth]/route.ts`

**Provider:** Credentials (username/password)

**Features:**
- Login page at `/admin/login`
- Session management
- Redirect if not authenticated
- Logout functionality

**Implementation:**
```bash
npm install next-auth@beta bcryptjs
npm install --save-dev @types/bcryptjs
```

**Config:**
- Store admin credentials in Supabase `admin_users` table
- Use bcrypt for password hashing
- JWT session strategy
- Secure cookies

### 3.3 File Upload System

**Tech:** Vercel Blob Storage

**Why:** Simple, scalable, integrates with Vercel deployment

**Implementation:**
```bash
npm install @vercel/blob
```

**Features:**
- Drag-and-drop image upload
- Automatic file type validation
- Image preview before upload
- Store URLs in Supabase `media_uploads` table
- PDF upload support

**File:** `app/api/upload/route.ts`

**UI:** shadcn/ui file upload component (or custom)

### 3.4 Email Delivery System

**Tech Options:**
1. **Resend** (RECOMMENDED - modern, simple API)
2. SendGrid (established, more features)

**Choose Resend for:**
- Simple setup
- Generous free tier
- Great developer experience
- React email template support

**Implementation:**
```bash
npm install resend
npm install react-email @react-email/components
```

**File:** `lib/email.ts`

**Features:**
- Send newsletter to all subscribers
- Send automated email on new blog post
- Email templates using React Email
- Unsubscribe links
- Track send status

**Environment Variables:**
```
RESEND_API_KEY=your-key
FROM_EMAIL=newsletter@bucketlistdoctor.com
```

### 3.5 Admin Dashboard UI

**Route:** `/admin` (protected by auth)

**Tech:** shadcn/ui components

**Install shadcn/ui:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea table dialog alert
```

**Dashboard Sections:**

1. **Overview**
   - Total subscribers count
   - Recent blog posts
   - Newsletters sent
   - Quick actions

2. **Blog Posts**
   - List all posts (table)
   - Create new post button
   - Edit/Delete actions
   - Publish/Unpublish toggle

3. **Newsletter**
   - Subscriber list
   - Send newsletter form
   - Newsletter history

4. **Media Library**
   - Grid of uploaded images/PDFs
   - Upload new files
   - Copy URL button

**Files to Create:**
- `app/admin/page.tsx` - Dashboard overview
- `app/admin/posts/page.tsx` - Blog posts list
- `app/admin/posts/new/page.tsx` - Create post
- `app/admin/posts/[id]/page.tsx` - Edit post
- `app/admin/newsletter/page.tsx` - Newsletter management
- `app/admin/media/page.tsx` - Media library

### 3.6 Blog Post Editor

**File:** `app/admin/posts/new/page.tsx`

**Features:**
- Rich text editor (or simple textarea)
- Title input
- Slug auto-generation (from title)
- Excerpt textarea
- YouTube video ID input
- Featured image upload
- PDF attachment upload
- External link input
- Tags input
- Publish toggle
- Save draft button

**Rich Text Options:**
1. **Simple Textarea** (RECOMMENDED for v1 - "80-year-old friendly")
2. Tiptap editor (if need rich formatting)
3. Markdown editor

**Start Simple:** Just use `<textarea>` with preview

**Auto-Save:** Save draft every 30 seconds

### 3.7 Newsletter Composer

**File:** `app/admin/newsletter/page.tsx`

**Features:**
- Subject line input
- Content textarea (or rich editor)
- Preview email template
- "Send to all subscribers" button
- Confirmation dialog
- Progress indicator during send

**Auto-Newsletter:**
- Checkbox: "Send newsletter on publish" (in blog post editor)
- Auto-generate newsletter from blog post content
- Use blog post title as subject
- Include excerpt + "Read more" link

### 3.8 Automated Newsletter on New Post

**File:** `app/api/posts/publish/route.ts`

**Logic:**
1. When blog post is published
2. Check if "send newsletter" is enabled
3. Generate email from template
4. Get all subscribers where `subscribed = true`
5. Send via Resend API
6. Record in `newsletters` table
7. Return success/failure

**Email Template:**
```
Subject: New from Bucket List Doctor: [Blog Post Title]

Hi [First Name or "Friend"],

Dr. DeSarbo just published a new post:

[Blog Post Title]
[Excerpt]

[Read More Button] → Link to blog post

---

Unsubscribe | Update Preferences
```

### 3.9 Frontend Blog Display

**File:** `app/blog/page.tsx` (already exists, needs update)

**Changes:**
1. Remove hardcoded YouTube videos
2. Fetch from Supabase `blog_posts` table
3. Display published posts only
4. Order by `published_at DESC`
5. Pagination (10 per page)

**File:** `app/blog/[slug]/page.tsx` (NEW)

**Build:**
- Individual blog post page
- Fetch by slug
- Display title, content, images, videos
- Share buttons (social media)
- Newsletter signup CTA at bottom

### 3.10 Testing & Deployment Checklist

**Before Sleep Deadline:**

- [ ] Supabase database tables created
- [ ] NextAuth.js authentication working
- [ ] Admin login functional at `/admin/login`
- [ ] Admin can create blog post
- [ ] Admin can upload images
- [ ] Admin can publish post
- [ ] Published post appears on `/blog`
- [ ] Newsletter signup adds to database
- [ ] Admin can send newsletter manually
- [ ] Automated newsletter works on publish
- [ ] Email unsubscribe link works
- [ ] All Priority 1 fixes completed
- [ ] Site tested on mobile
- [ ] Site deployed to production

---

## PRIORITY 4: Code Optimization & Componentization

**Goal:** Clean, reusable code ready for extraction to wnu-newsletter-template

### 4.1 Component Audit & Refactor

**Review ALL components for:**
- Reusability
- Props interface clarity
- TypeScript types
- Documentation
- Consistent styling patterns

**Files to Review:**
- All files in `components/` directory
- Extract common patterns
- Create shared utilities

### 4.2 Create Reusable Patterns

**Extract to `components/shared/`:**

1. **Card Component** (already have `FeatureCard.tsx`)
   - Make more flexible
   - Accept children
   - Style variants

2. **Section Wrapper**
   - Consistent spacing
   - Background variants
   - Responsive padding

3. **Form Components**
   - Input with validation
   - Textarea
   - Button variants
   - Error states

4. **Loading States**
   - Spinner component
   - Skeleton loaders

### 4.3 Utility Functions

**Create `lib/utils.ts`:**
- Slug generation from title
- Date formatting
- Email validation
- Form validation helpers

**Create `lib/constants.ts`:**
- Brand colors export
- Social media links
- Book purchase links
- Site metadata

### 4.4 Type Definitions

**Create `types/index.ts`:**
```typescript
export interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  featured_image_url: string | null
  youtube_video_id: string | null
  pdf_url: string | null
  external_link: string | null
  published: boolean
  published_at: string | null
  tags: string[] | null
}

export interface NewsletterSubscriber {
  id: string
  created_at: string
  email: string
  subscribed: boolean
}

export interface Newsletter {
  id: string
  created_at: string
  subject: string
  content: string
  sent_at: string | null
  sent_to_count: number
  blog_post_id: string | null
}
```

### 4.5 API Route Organization

**Create consistent API structure:**

```
app/api/
├── auth/
│   └── [...nextauth]/route.ts
├── posts/
│   ├── route.ts              # GET all, POST create
│   └── [id]/route.ts         # GET, PATCH, DELETE single
├── newsletter/
│   ├── subscribe/route.ts
│   ├── unsubscribe/route.ts
│   └── send/route.ts
├── media/
│   └── upload/route.ts
└── upload/route.ts
```

**Standards:**
- Use HTTP methods correctly (GET, POST, PATCH, DELETE)
- Consistent error responses
- Type-safe request/response
- Error handling

---

## PRIORITY 5: wnu-newsletter-template Extraction

**Goal:** Make entire admin/newsletter system reusable for future projects

**Timeline:** After admin system is working on bucketlistdoctor.com

### 5.1 Template Repository Structure

**Create in `wnu-newsletter-template/`:**

```
wnu-newsletter-template/
├── README.md                 # Deployment guide
├── package.json              # Dependencies
├── app/
│   ├── admin/               # Copy entire admin section
│   └── api/                 # Copy all API routes
├── components/
│   ├── admin/               # Admin-specific components
│   └── newsletter/          # Newsletter components
├── lib/
│   ├── supabase.ts          # Database utilities
│   ├── email.ts             # Email sending utilities
│   └── auth.ts              # Auth utilities
├── types/
│   └── index.ts             # All TypeScript types
├── .env.example             # Environment variables template
└── docs/
    ├── DEPLOYMENT.md        # Step-by-step deployment
    ├── CUSTOMIZATION.md     # How to customize
    └── LESSONS_LEARNED.md   # Catalog of learnings
```

### 5.2 Configuration System

**Make everything configurable:**

**File:** `wnu-newsletter-template/config/site.ts`

```typescript
export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  newsletter: {
    fromEmail: "newsletter@yoursite.com",
    fromName: "Your Site Name",
  },
  admin: {
    route: "/admin", // or use subdomain
  },
  branding: {
    primaryColor: "#4A90E2",
    logo: "/logo.png",
  },
}
```

**Use throughout app instead of hardcoded values**

### 5.3 Documentation

**Create comprehensive docs:**

1. **DEPLOYMENT.md**
   - Prerequisites (Vercel account, Supabase account, etc.)
   - Step-by-step setup
   - Environment variables guide
   - Database setup SQL scripts
   - Email provider setup
   - Domain configuration

2. **CUSTOMIZATION.md**
   - How to change branding
   - How to modify email templates
   - How to add custom fields
   - How to extend admin dashboard

3. **LESSONS_LEARNED.md**
   - What worked well
   - What to avoid
   - Common pitfalls
   - Performance tips

### 5.4 Automation Scripts

**Create helper scripts:**

**File:** `wnu-newsletter-template/scripts/setup.js`

```javascript
// Interactive setup script
// Prompts for site name, colors, email, etc.
// Generates config files
// Creates .env.local
```

**File:** `wnu-newsletter-template/scripts/deploy.sh`

```bash
# Automated deployment
# Runs build
# Pushes to Vercel
# Sets up Supabase
# Configures email provider
```

### 5.5 Testing Suite

**Add comprehensive tests:**

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

**Test Coverage:**
- Newsletter signup flow
- Admin authentication
- Blog post CRUD operations
- Email sending (mocked)
- File uploads (mocked)

### 5.6 Example Site

**Include demo content:**
- Sample blog posts
- Example newsletter templates
- Demo images
- Placeholder content

**Make it easy to swap out for real content**

---

## PRIORITY 6: Performance & Polish

**Timeline:** After admin system is working

### 6.1 Performance Optimization

**Image Optimization:**
- Use Next.js `<Image>` component everywhere
- Add proper `alt` text
- Lazy load below-the-fold images
- Use appropriate image sizes

**Code Splitting:**
- Dynamic imports for heavy components
- Lazy load admin dashboard
- Split vendor bundles

**Caching:**
- Cache blog posts
- Use Supabase caching for reads
- Cache newsletter subscriber count

### 6.2 SEO Enhancements

**For each page:**
- Unique meta titles
- Unique meta descriptions
- Open Graph images
- Twitter card metadata
- Canonical URLs
- Structured data (schema.org)

**File:** Update all `metadata` objects in page files

### 6.3 Accessibility

**WCAG 2.1 AA Compliance:**
- Keyboard navigation for all interactive elements
- ARIA labels for screen readers
- Sufficient color contrast
- Focus indicators
- Alt text for all images
- Form labels and errors

### 6.4 Mobile Optimization

**Test on:**
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad)

**Check:**
- Touch targets (min 44x44px)
- Horizontal scrolling
- Form usability
- Navigation menu
- Image sizes

### 6.5 Analytics & Monitoring

**Add:**
- Google Analytics 4
- Vercel Analytics
- Error monitoring (Sentry optional)
- Newsletter open/click tracking

### 6.6 Final Content Polish

**Review all copy for:**
- Spelling
- Grammar
- Punctuation (Dr. D's priority!)
- Tone consistency
- Call-to-actions clarity

---

## Timeline & Milestones

### TODAY (2025-10-23) - Before Sleep
- ✅ Documentation complete (DONE)
- ✅ Analysis complete (DONE)
- ✅ CLAUDE.md updated (DONE)
- ✅ Master plan created (DONE)
- ⏳ Start Priority 1 fixes
- ⏳ Begin database setup
- ⏳ Start authentication implementation

### THURSDAY (2025-10-24) Morning
- Complete ALL Priority 1 fixes (due 4:30 PM)
- Test fixes on staging
- Get Dr. D approval

### THURSDAY (2025-10-24) Evening
- Complete admin authentication
- Complete database schema
- Complete basic blog post CRUD
- Complete image upload

### FRIDAY (2025-10-25) Morning
- Complete newsletter sending
- Complete automated emails
- Test entire flow end-to-end
- Deploy to production

### FRIDAY (2025-10-25) 2:00 PM
- ✅ Radio interview - site is READY!

### WEEK OF 2025-10-28
- Priority 2: Content integration
- Build Tips & Ideas pages
- Build Contributors Corner
- Polish all existing pages

### WEEK OF 2025-11-04
- Priority 4: Code optimization
- Priority 5: Extract to wnu-newsletter-template
- Priority 6: Performance & polish

---

## Success Criteria

### By Radio Interview (10/25/2025 2PM):
- [x] All Priority 1 fixes deployed
- [ ] Site loads fast (<2 seconds)
- [ ] Mobile-friendly
- [ ] Newsletter signup works
- [ ] Admin can log in
- [ ] Admin can create/publish blog post
- [ ] Automated newsletter sends on publish
- [ ] No broken links
- [ ] All punctuation correct!

### By End of Month (10/31/2025):
- [ ] All Squarespace content integrated
- [ ] 10 Tips & Ideas pages built
- [ ] Contributors Corner functional
- [ ] Admin system fully polished
- [ ] Newsletter template working
- [ ] Email automation reliable

### By Mid-November (11/15/2025):
- [ ] wnu-newsletter-template extracted
- [ ] Complete documentation
- [ ] Deployment automation
- [ ] Example site included
- [ ] Performance optimized
- [ ] SEO perfect

---

## Risk Management

### Risk 1: Time Pressure
**Mitigation:** Prioritize ruthlessly. Priority 1 MUST be done before interview.

### Risk 2: Database Issues
**Mitigation:** Use Supabase (reliable, simple). Have SQL scripts ready.

### Risk 3: Email Delivery
**Mitigation:** Use Resend (proven). Test thoroughly before automating.

### Risk 4: Authentication Security
**Mitigation:** Use NextAuth.js (battle-tested). Follow security best practices.

### Risk 5: Content Migration Errors
**Mitigation:** All content documented in markdown. Easy to reference and fix.

### Risk 6: Scope Creep
**Mitigation:** This plan defines scope clearly. Defer anything not listed.

---

## Notes for Future Self

**Key Learnings:**
- Document everything BEFORE coding
- Prioritize client requirements over features
- Simple is better than complex (80-year-old test)
- Testing saves time in the long run
- Automation is worth the upfront investment

**For wnu-newsletter-template:**
- This entire process should take <1 day next time
- Configuration over customization
- Clear documentation is critical
- Include example content
- Make deployment one command

**Client Management:**
- Dr. D cares about punctuation (A LOT)
- Radio interview is HARD deadline
- Meeting notes are source of truth
- Old site content must be preserved
- Simplicity in admin UI is non-negotiable

---

**Ready to execute. Let's build! 🚀**
