# Technical Implementation Notes

## Current Tech Stack
- **Framework:** Next.js 14.2.3
- **React:** 18.2.0
- **3D Graphics:** @react-three/fiber, @react-three/drei
- **Styling:** Tailwind CSS 3.4.3
- **Icons:** react-icons 5.5.0
- **Utilities:** clsx, tailwind-merge

## Port Configuration
- **Development:** localhost:8000
- **Production:** localhost:8000 (for consistency)
- Configured in package.json scripts:
  - `npm run dev` → port 8000
  - `npm start` → port 8000

## Current File Structure
```
app/
├── about/page.tsx         ✅ Complete
├── blog/page.tsx          ⚠️  Needs content
├── books/page.tsx         ✅ Complete
├── layout.tsx             ✅ Complete
├── page.tsx               ✅ Complete (hero + sections)
├── tips-ideas/page.tsx    ⚠️  Needs content
└── your-brain/page.tsx    ⚠️  Needs content

components/
├── home/
│   ├── AboutSection.tsx           ✅ Complete
│   ├── AnimatedBrainHero.tsx      ✅ Complete (don't touch)
│   ├── BookShowcase.tsx           ✅ Complete
│   ├── BrainEarthHero.tsx         ❓ Not in use?
│   ├── BrainHeader.tsx            ❓ Not in use?
│   ├── BucketListNavigation.tsx   ⚠️  Remove Contributors card
│   └── ValueProp.tsx              ✅ Complete
├── layout/
│   ├── Footer.tsx                 ✅ Complete
│   ├── Navigation.tsx             ✅ Complete
│   └── NewsletterSignup.tsx       ⚠️  Needs SuperBase integration
└── FeatureCard.tsx                ✅ Complete

public/
└── images/
    ├── benefits/              ✅ Has images
    ├── hero/                  ✅ Has brain hero
    └── profile/               ✅ Has Dr. D profile pic
```

## Issues to Address

### 1. Contributors Section Removal
**File:** `/components/home/BucketListNavigation.tsx`
**Lines:** 31-40
**Action:** Remove the contributors card object from bucketListSections array

### 2. Cross-Site Navigation
**Location:** Homepage after hero section or in footer
**Requirements:**
- Ed180 logo with yellow glow
- Doctor Desarbo profile image (cropped)
- Bucket List Doctor logo
- Thumbnail size, clickable
**Implementation:** New component `CrossSiteNavigation.tsx`

### 3. Email Collection (SuperBase)
**File:** `/components/layout/NewsletterSignup.tsx`
**Current:** Mock implementation (lines 14-18)
**Needs:** 
- SuperBase client setup
- Environment variables for API keys
- Database table for emails
- Email validation
- Success/error handling
- Automated notifications setup

### 4. DNS Configuration
**Domain:** bucketlistdoctor.com
**Registrar:** GoDaddy
**Email:** dr.disarbo@bucketlistdoctor.com
**Action Required:**
- Add Google Workspace MX records
- Add SPF record
- Add DKIM record
- Verify domain ownership

### 5. Missing Content Pages
Pages exist but need content:
- `/blog` - Should pull from Medium or have blog list
- `/tips-ideas` - Has content mentioned in meetings
- `/your-brain` - Neuroscience content

## Browser Compatibility
- Need to test in Chrome, Safari, Firefox
- Mobile responsiveness (already using Tailwind breakpoints)
- Accessibility standards (WCAG 2.1 AA minimum)

## Performance Considerations
- 3D brain animation on hero (currently using react-three/fiber)
- Image optimization (Next.js Image component)
- Font loading (currently having issues with fonts.gstatic.com)

## Deployment Requirements
- Build command: `npm run build`
- Start command: `npm start`
- Environment variables needed:
  - NEXT_PUBLIC_SUPABASE_URL (if using SuperBase)
  - NEXT_PUBLIC_SUPABASE_ANON_KEY (if using SuperBase)
- DNS propagation time: 24-48 hours

## Known Issues
1. Font loading error from fonts.gstatic.com (line 33 in terminal)
   - May need to use local fonts or different CDN
2. Some components not in use (BrainEarthHero, BrainHeader)
   - Should clean up or document purpose
3. Newsletter signup is mock implementation
4. No 404 page
5. No loading states for navigation

## Accessibility Checklist
- [ ] All images have alt text
- [ ] Color contrast ratios meet WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader testing
- [ ] Focus indicators visible
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Forms have proper labels

## SEO Considerations
- Meta tags for each page
- Open Graph images
- Sitemap.xml
- Robots.txt
- Structured data for articles/books
- Page titles optimized with keywords

## Future Technical Needs
- Blog CMS backend (for Dr. D to post)
- SuperBase database tables:
  - newsletter_subscribers
  - blog_posts (if not using Medium)
  - user_stories (for future contributors feature)
- Analytics integration (Google Analytics or Plausible)
- Contact form (currently no contact page)

