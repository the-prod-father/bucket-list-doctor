# Build Step 1: Project Setup

## Tech Stack Decision

### Framework: Next.js 14+ (App Router)
**Why:**
- Server-side rendering for SEO
- API routes for backend functionality
- Easy Vercel deployment
- Great DX and performance

### Styling: Tailwind CSS
**Why:**
- Rapid development
- Consistent design system
- Small bundle size
- Easy theming

### Database: Supabase
**Why:**
- PostgreSQL (production-ready)
- Built-in authentication (if needed later)
- Real-time capabilities
- Generous free tier
- Easy setup

### Authentication: NextAuth.js (Simple Credentials)
**Why:**
- Simple username/password (no OAuth complexity)
- Session management
- Easy to configure
- Can add providers later if needed

### File Storage: Vercel Blob or Supabase Storage
**Why:**
- CDN-backed
- Easy upload/download
- Handles images, videos, PDFs, audio

### Email: Resend or SendGrid
**Why:**
- Newsletter sending
- Reliable delivery
- Good developer experience

## Initial Setup Commands

```bash
npx create-next-app@latest newsletter-template
cd newsletter-template
npm install @supabase/supabase-js
npm install next-auth
npm install @vercel/blob
npm install tailwindcss
```

## Environment Variables Template

```env
# Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

# File Storage
BLOB_READ_WRITE_TOKEN=

# Email
RESEND_API_KEY=
```

## Lessons from Bucket List Doctor

(This section will be filled as we build)

### What Worked
-

### What Didn't Work
-

### Changes for Template
-
