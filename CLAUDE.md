# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bucket List Doctor is a Next.js 14 personal brand website for Dr. Jeffrey DeSarbo, exploring "The Neuroscience of a Bucket List" - how bucket lists activate neuroplasticity, goal-setting, and brain health. The site features a custom admin CMS, newsletter system, and blog management.

## Development Commands

```bash
npm run dev        # Development server on port 9000
npm run dev:3000   # Development server on port 3000
npm run build      # Build for production
npm start          # Production server on port 9000
npm run lint       # Lint the code
```

**Note:** Default port is **9000** for both dev and production.

### Testing (Playwright)

```bash
npm run test         # Run all Playwright tests
npm run test:ui      # Run tests with Playwright UI
npm run test:debug   # Run tests in debug mode
npm run test:headed  # Run tests in headed browser mode
npm run test:report  # Show HTML test report
```

Tests run against port 9000 and auto-start the dev server if not running.

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 14.2.3 (App Router)
- **Database:** PostgreSQL via Supabase (direct `pg` client, not Supabase SDK for most operations)
- **Auth:** NextAuth.js with credentials provider
- **Email:** Resend API + Nodemailer SMTP
- **Styling:** Tailwind CSS with custom brand colors
- **3D Graphics:** @react-three/fiber for animated brain hero

### Key Architectural Patterns

**Database Access:** Direct PostgreSQL connections via `pg` client (not Supabase SDK):
```typescript
// lib/db/*.ts files use this pattern
const client = new Client({ connectionString: process.env.POSTGRES_URL_NON_POOLING });
```

**Authentication:** NextAuth.js with JWT strategy, custom credentials provider in `lib/auth.ts`. Admin routes protected via `getServerSession(authOptions)`.

**API Routes Structure:**
- `/api/admin/*` - Protected routes requiring auth (blog CRUD, newsletter, media)
- `/api/blog/*` - Public blog endpoints
- `/api/newsletter/*` - Public subscription endpoint
- `/api/youtube/videos` - Fetches from YouTube Data API

### Database Tables
- `users` - Admin users with bcrypt password hashes
- `blog_posts` - Blog content with status (draft/published/archived)
- `newsletter_subscribers` - Email subscribers
- `media_appearances` - "As Featured On" media outlets (optional)

### Admin CMS (`/admin/*`)
Fully functional admin panel at `bucketlistdoctor.com/admin`:
- `/admin/login` - NextAuth login page
- `/admin/dashboard` - Overview and quick actions
- `/admin/blog` - Create/edit/delete blog posts with image upload
- `/admin/newsletter` - Send newsletters, view subscribers
- `/admin/media` - Manage media appearance logos

### Image Upload
Images upload to `public/uploads/` locally. In production (Vercel's read-only filesystem), falls back to base64 data URLs stored in database. See `app/api/upload/image/route.ts`.

## Design System

**Brand Colors** (in `tailwind.config.ts`):
- `brand-navy`: #2B4C6F
- `brand-blue`: #4A90E2
- `brand-teal`: #50E3C2
- `brand-purple`: #B968E0
- `brand-pink`: #FF6B9D
- `brand-yellow`: #FFD93D

**Typography:** Inter (body), Montserrat (headings) via CSS variables.

## Important Guidelines

### DO NOT MODIFY
- `components/home/AnimatedBrainHero.tsx` - Complex 3D brain animation with particle system. Changes risk breaking the visual centerpiece.

### Environment Variables Required
```
POSTGRES_URL_NON_POOLING   # Direct PostgreSQL connection string
NEXTAUTH_SECRET            # NextAuth JWT secret
NEXTAUTH_URL               # Site URL (https://bucketlistdoctor.com)
NEXT_PUBLIC_SUPABASE_URL   # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
YOUTUBE_API_KEY            # For YouTube video fetching
RESEND_API_KEY             # For email sending
NEXT_PUBLIC_GA_ID          # Google Analytics 4 (optional)
```

### Styling Conventions
- Use brand color utilities: `bg-brand-navy`, `text-brand-teal`, etc.
- Tailwind CSS exclusively (no CSS modules)
- Mobile-first responsive design

### Blog Post Flow
1. Admin creates post at `/admin/blog` with status "draft" or "published"
2. If published, `sendBlogPostNotification()` emails all subscribers
3. Posts display on `/blog` page and individual `/blog/[slug]` pages
4. View counts tracked in database

## Cross-Site Integration

Dr. DeSarbo's 4-site portfolio with thumbnail navigation:
- **bucketlistdoctor.com** (this site)
- **drdesarbo.com** - Professional site
- **ed-180.com** - Eating disorder resources

The `CrossSiteNavigation` component handles these connections.

## Dynamic Route Pattern (Important!)

For dynamic routes that fetch from the database (like `/blog/[slug]` and `/newsletter/[slug]`), always include these exports to prevent sporadic 404 errors:

```typescript
// Force dynamic rendering - don't cache or statically generate these pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true; // Allow dynamic params not generated at build time
export const revalidate = 0; // Never cache
```

Also wrap `generateMetadata()` in a try-catch with fallback metadata to handle database errors gracefully.

## Known Issues

1. **Font loading warning:** fonts.gstatic.com console errors are safe to ignore
2. **media_appearances table:** May not exist in all environments; handled gracefully
3. **Image uploads in production:** Fall back to base64 data URLs on Vercel
