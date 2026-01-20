# Hot Context - Bucket List Doctor

**Last Updated:** 2026-01-20
**Project:** Bucket List Doctor (bucketlistdoctor.com)
**Dev Server:** http://localhost:9000

---

## Quick Status

| Area | Status | Notes |
|------|--------|-------|
| **Logos** | Updated | Using `bld-lite-transparent-cropped.png` across site |
| **Videos & Media** | New tabbed UI | Moved from `/blog` to `/videosandmedia` |
| **Speaking Page** | Simplified | Removed 4 category detail sections |
| **Media Appearances** | CBS added | CBS 94.9 News Now logo added |
| **Database** | Pooled connections | Using PgBouncer for stability |

---

## Active Work Streams

### 1. Site Branding & Logos
- **Status:** Complete
- **Details:** Replaced all logos with new transparent PNG versions
- **Files:**
  - `bld-lite-transparent-cropped.png` - Light/pastel version (in use)
  - `BucketListDoctor-tm-transparent.png` - Vibrant version (available)
- **Locations updated:** Navigation, Footer, Hero, Admin login, About page

### 2. Videos & Media Page Restructure
- **Status:** Complete
- **New URL:** `/videosandmedia`
- **Features:**
  - Tabbed interface (Videos first, Articles second)
  - Manila folder-style tabs
  - FadeIn animation on tab switch
- **Redirects:** `/blog` → `/videosandmedia`, `/blog/[slug]` → `/videosandmedia/[slug]`
- **Key files:**
  - `app/videosandmedia/page.tsx` - Main page (server component)
  - `app/videosandmedia/TabsContainer.tsx` - Tab UI (client component)
  - `app/videosandmedia/VideoSection.tsx` - YouTube videos
  - `app/blog/page.tsx` - Redirect handler

### 3. Speaking Page
- **Status:** Simplified
- **Removed sections:**
  - Life Enrichment & General Audience
  - Corporate, Leadership & High-Performance
  - Cruise & Travel Enrichment
  - Medical, Professional & Physician-Focused
- **Kept:** Media appearances, Upcoming appearances

### 4. Media Appearances
- **Status:** CBS 94.9 added
- **New logo:** `/public/images/media/cbs-stimulating-talk.jpeg`
- **Updated in:**
  - `app/speaking/page.tsx` (mediaAppearances array)
  - `components/home/MediaAppearances.tsx` (fallbackMedia array)

---

## Technical Context

### Environment
- **Framework:** Next.js 14.2.3 (App Router)
- **Database:** PostgreSQL via Supabase (pooled connections)
- **Dev Port:** 9000
- **Auth:** NextAuth.js

### Recent Commits (Jan 20, 2026)
```
32cadd1 feat: add tabbed Videos & Media page at /videosandmedia
3adf974 feat: add CBS 94.9 News Now to media appearances
1e20268 refactor: remove talk category detail sections from speaking page
b77ae71 feat: update site logos to new transparent Bucket List Doctor branding
```

### Known Issues
- `media_appearances` table doesn't exist in some environments (handled gracefully with fallback)
- Font loading warnings from fonts.gstatic.com (safe to ignore)

---

## User Preferences

- **Logo style:** Prefers the light/pastel version over vibrant
- **UI style:** Clean, manila folder-style tabs
- **Videos first:** User wants Videos tab to be default on media page
- **Commits:** Prefers atomic commits with clear messages

---

## Pending Questions

_None at this time_

---

## Next Session Priorities

1. [ ] Review tabbed UI on production after deploy
2. [ ] Consider adding more media appearance logos if provided
3. [ ] Any additional page updates user requests

---

## File Quick Reference

| Purpose | Path |
|---------|------|
| Navigation | `components/layout/Navigation.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Videos & Media page | `app/videosandmedia/page.tsx` |
| Tabs component | `app/videosandmedia/TabsContainer.tsx` |
| Speaking page | `app/speaking/page.tsx` |
| Media appearances (home) | `components/home/MediaAppearances.tsx` |
| Logos folder | `public/images/logos/` |
| Media logos folder | `public/images/media/` |
