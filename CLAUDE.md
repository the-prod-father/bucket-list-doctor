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
├── about/page.tsx          # About Dr. DeSarbo page
├── blog/page.tsx           # Videos & Media page with YouTube integration
├── books/page.tsx          # Book showcase page
├── tips-ideas/page.tsx     # Tips and ideas content
└── your-brain/page.tsx     # Neuroscience content

components/
├── home/
│   ├── AnimatedBrainHero.tsx       # DO NOT MODIFY - Complex 3D brain with particles
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

## Related Documentation

- `PROJECT_CONTEXT.md` - Client info, brand message, social media links
- `TECHNICAL_NOTES.md` - Implementation status and known issues
- `SUPABASE_SETUP.md` - Step-by-step Supabase configuration
- `LAUNCH_CHECKLIST.md` - Pre-deployment checklist
- `README.md` - Standard Next.js documentation

## Cross-Site Integration

Dr. DeSarbo maintains 4 websites with thumbnail navigation between them:
- **bucketlistdoctor.com** (this site) - Use existing logo
- **doctordesarbo.com** - Use profile image (cropped in half)
- **ed-180.com** - Use logo with yellow glow
- Science publishing site - Book listings

The `CrossSiteNavigation` component handles these connections.

## Known Issues & Context

1. **Font loading warning:** fonts.gstatic.com may show errors in console (safe to ignore)
2. **Unused components:** `BrainEarthHero.tsx` and `BrainHeader.tsx` exist but aren't currently used
3. **Content pages:** Some pages (blog, tips-ideas, your-brain) may need content updates
4. **Port configuration:** Always use port 8000 for consistency with client expectations

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
