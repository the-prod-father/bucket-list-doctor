# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bucket List Doctor is a Next.js 14 personal brand website for Dr. Jeffrey DeSarbo, exploring "The Neuroscience of a Bucket List" - how bucket lists activate neuroplasticity, goal-setting, and brain health. The site features vibrant splashy colors, animated 3D brain graphics, and neuroscience-focused content.

## Development Commands

```bash
# Development server (runs on port 8000)
npm run dev

# Development server on default port 3000
npm run dev:3000

# Build for production
npm run build

# Start production server (port 8000)
npm start

# Start production server on port 3000
npm start:3000

# Lint the code
npm run lint
```

**Note:** This project is configured to run on **port 8000** by default for both dev and production.

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 14.2.3 (App Router)
- **React:** 18.2.0
- **Styling:** Tailwind CSS 3.4.3 with custom brand colors
- **3D Graphics:** @react-three/fiber + @react-three/drei for animated brain hero
- **Backend:** Supabase for newsletter email collection
- **Icons:** react-icons
- **Utilities:** clsx, tailwind-merge

### Directory Structure

```
app/
├── layout.tsx              # Root layout with Navigation + Footer
├── page.tsx                # Homepage composition of all sections
├── about/page.tsx          # About Dr. DeSarbo page (78 LOC)
├── blog/page.tsx           # Videos & Media page with YouTube integration (169 LOC)
├── books/page.tsx          # Book showcase page (153 LOC)
├── tips-ideas/page.tsx     # Tips and ideas content
└── your-brain/page.tsx     # Neuroscience content

components/
├── home/
│   ├── AnimatedBrainHero.tsx       # DO NOT MODIFY - Complex 3D brain with particles (180 LOC)
│   ├── BucketListNavigation.tsx    # Four navigation cards (Blog, Books, etc.)
│   ├── ValueProp.tsx               # Value proposition section
│   ├── BookShowcase.tsx            # Featured book display
│   ├── AboutSection.tsx            # About section with profile
│   └── CrossSiteNavigation.tsx     # Links to other Dr. D sites
├── layout/
│   ├── Navigation.tsx              # Main navigation header
│   ├── Footer.tsx                  # Footer with social links
│   └── NewsletterSignup.tsx        # Supabase-connected newsletter signup
└── FeatureCard.tsx                 # Reusable card component

lib/
└── supabase.ts                     # Supabase client and newsletter functions

docs/
├── squarespace-site-reference/     # Complete Squarespace site content migration
│   ├── MASTER_CONTENT_INVENTORY.md # Master summary of all content (18 pages documented)
│   ├── SCREENSHOT_ORGANIZATION.md  # Image organization guide
│   ├── homepage.md                 # Homepage content
│   ├── books-page.md               # Books page content
│   ├── blog-page.md                # Blog intro text
│   ├── contributors-page.md        # Contributors corner content
│   ├── city-country-page.md        # City/Country bucket list (empty)
│   ├── your-brain-page.md          # Brain benefits and quotes
│   ├── about-page.md               # About page (404, needs rebuild)
│   ├── join-us-page.md             # Newsletter signup (needs redesign)
│   ├── tips-ideas-*.md             # 10 comprehensive travel guide pages
│   └── screenshots/                # 50+ organized images by page/section
└── meeting-notes/                  # Client meeting requirements and priorities
```

### Page Composition Pattern

The homepage (`app/page.tsx`) follows a component composition pattern:
```tsx
<AnimatedBrainHero />
<BucketListNavigation />
<ValueProp />
<BookShowcase />
<AboutSection />
<CrossSiteNavigation />
```

Each section is self-contained and can be reordered or removed.

### Design System

**Brand Colors** (defined in `tailwind.config.ts`):
- `brand-navy`: #2B4C6F - Primary dark blue
- `brand-blue`: #4A90E2 - Bright blue accents
- `brand-teal`: #50E3C2 - Teal accents
- `brand-purple`: #B968E0 - Purple gradients
- `brand-pink`: #FF6B9D - Pink accents
- `brand-yellow`: #FFD93D - Yellow highlights
- `brand-cream`: #F5E6D3 - Warm neutral

**Typography:**
- Body text: Inter (variable font)
- Headings: Montserrat (variable font)

### Supabase Integration

The newsletter signup uses Supabase for email collection:

1. **Configuration:** Set environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```

2. **Database table:** `newsletter_subscribers` with columns:
   - `id` (uuid, primary key)
   - `created_at` (timestamp)
   - `email` (text, unique)
   - `subscribed` (boolean)

3. **Functions:** Use `lib/supabase.ts` functions:
   - `addNewsletterSubscriber(email)` - Add/resubscribe email
   - `unsubscribeNewsletter(email)` - Unsubscribe functionality

4. **Graceful degradation:** If Supabase isn't configured, newsletter signup shows a placeholder message without errors.

See `SUPABASE_SETUP.md` for detailed setup instructions.

## Important Guidelines

### DO NOT MODIFY
- `components/home/AnimatedBrainHero.tsx` - Complex 3D brain animation with particle system. Changes risk breaking the visual centerpiece.

### Component Development
- Keep components self-contained and reusable
- Use Tailwind CSS exclusively for styling (no CSS modules)
- Prefer composition over prop drilling
- Use TypeScript for all new components
- Include proper SEO metadata for new pages

### Styling Conventions
- Use brand color utilities: `bg-brand-navy`, `text-brand-teal`, etc.
- Gradients should use multiple brand colors for vibrant effects
- Mobile-first responsive design with Tailwind breakpoints
- Animations should be smooth and purposeful (avoid excessive motion)

### Content Strategy
- This is part of a 4-site portfolio for Dr. DeSarbo
- Cross-site navigation connects to: doctordesarbo.com, ed-180.com, and a science publishing site
- Content focuses on neuroscience, adventure, and bucket list psychology
- Maintain professional yet accessible tone

## Current Project Status

**Completion:** 85-90% complete (~2,887 LOC across pages and components)

**What's Complete:**
- 7 fully functional pages with SEO metadata
- All core components (14 total) built and styled
- Supabase newsletter integration with graceful fallback
- Complete Squarespace content migration (18 pages documented)
- Responsive design across all breakpoints
- 3D animated brain hero with particle system

**What's Missing:**
- YouTube video IDs for blog page (currently placeholders)
- Ed180 logo image
- Admin/newsletter CMS system
- Meeting requirements implementation (see `docs/meeting-notes/`)
- Minor cleanup and optimization

## Related Documentation

### Primary Documentation
- `PROJECT_CONTEXT.md` - Client info, brand message, social media links
- `TECHNICAL_NOTES.md` - Implementation status and known issues
- `SUPABASE_SETUP.md` - Step-by-step Supabase configuration
- `LAUNCH_CHECKLIST.md` - Pre-deployment checklist
- `README.md` - Standard Next.js documentation

### Content Migration Documentation
- `docs/squarespace-site-reference/MASTER_CONTENT_INVENTORY.md` - Complete inventory of old site
- `docs/squarespace-site-reference/SCREENSHOT_ORGANIZATION.md` - Image organization guide
- `docs/squarespace-site-reference/*.md` - 21 markdown files with all Squarespace content

### Meeting Requirements
- `docs/meeting-notes/` - Client meeting transcripts and requirements
- **Critical Deadline:** Friday 10/25/2025 at 2PM (radio interview)
- **Priority Items:** Punctuation fixes, URL corrections, Books section overhaul, logo integration

## Cross-Site Integration

Dr. DeSarbo maintains 4 websites with thumbnail navigation between them:
- **bucketlistdoctor.com** (this site) - Colorful stethoscope/book logo
- **drdesarbo.com** - Professional headshot image
- **ed-180.com** - ED180 logo with yellow glow
- Science publishing site - Book listings (future)

The `CrossSiteNavigation` component handles these connections.

## Admin/Newsletter CMS System (Planned)

**Goal:** Simple content management for Dr. DeSarbo to manage blog posts, videos, and newsletter

**URL Options:**
- `admin.bucketlistdoctor.com` (subdomain - preferred for separation)
- `bucketlistdoctor.com/admin` (route-based - simpler deployment)

**Required Features:**
1. **Content Management:**
   - Upload images (drag-and-drop)
   - Add YouTube videos (paste URL)
   - Create text posts with rich editor
   - Upload PDFs and links
   - Simple CRUD interface

2. **Newsletter System:**
   - Send newsletters to subscriber list
   - Automated email on new blog post
   - Basic email template system
   - Integration with Supabase newsletter_subscribers table

3. **Authentication:**
   - Simple login (username/password)
   - Admin-only access
   - Session management

4. **User Experience:**
   - "Simple enough for 80-year-old who barely uses computer"
   - Visual, not technical
   - Clear feedback on all actions
   - Preview before publish

**Tech Stack (Planned):**
- NextAuth.js for authentication
- Vercel Blob for image/PDF storage
- Resend or SendGrid for email delivery
- Supabase for content database
- shadcn/ui for admin UI components

**Reusability:**
- Extract to `wnu-newsletter-template` for future projects
- Modular architecture for easy customization
- Clear documentation for deployment

## Known Issues & Context

1. **Font loading warning:** fonts.gstatic.com may show errors in console (safe to ignore)
2. **Unused components:** `BrainEarthHero.tsx` and `BrainHeader.tsx` exist but aren't currently used
3. **Content pages:** Some pages (blog, tips-ideas, your-brain) may need content updates
4. **Port configuration:** Always use port 8000 for consistency with client expectations
5. **Blog page:** Currently using placeholder YouTube video IDs (need real URLs)
6. **Meeting requirements:** Multiple fixes needed before 10/25/2025 radio interview

## Social Media Links

- Facebook: https://facebook.com/bucketlistdoctor
- Instagram: https://instagram.com/bucketlistdoctor
- LinkedIn: https://linkedin.com/in/drdesarbo
- YouTube: @bucketlistdoctor (videos on neuroscience and bucket lists)

## Book Information

**"The Neuroscience of a Bucket List"**
- Amazon: https://a.co/d/559YKwr
- BookBaby: https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p
- Barnes & Noble: https://www.barnesandnoble.com/s/desarbo
- Audiobook in production using 11Labs voice cloning
