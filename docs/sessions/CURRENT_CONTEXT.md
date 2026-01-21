# Hot Context - Bucket List Doctor

**Last Updated:** 2026-01-20
**Project:** Bucket List Doctor (bucketlistdoctor.com)
**Dev Server:** http://localhost:9000

---

## Quick Status

| Area | Status | Notes |
|------|--------|-------|
| **Logos** | Updated | Using `bld-lite-transparent-cropped.png` across site |
| **Videos & Media** | New tabbed UI | At `/videosandmedia` with Videos + Articles tabs |
| **Speaking Page** | Simplified | Removed 4 category detail sections |
| **Media Appearances** | CBS added | CBS 94.9 News Now logo added |
| **Code Quality** | Deslopped | Removed 39 lines of AI-generated slop |
| **Database** | Pooled connections | Using PgBouncer for stability |

---

## Active Work Streams

### 1. Site Branding & Logos
- **Status:** Complete
- **Details:** Replaced all logos with new transparent PNG versions
- **Files:**
  - `bld-lite-transparent-cropped.png` - Light/pastel version (in use)
  - `BucketListDoctor-tm-transparent.png` - Vibrant version (available)

### 2. Videos & Media Page
- **Status:** Complete
- **URL:** `/videosandmedia`
- **Features:** Tabbed interface (Videos first, Articles second), manila folder-style tabs

### 3. Code Quality
- **Status:** Deslopped
- **Details:** Removed JSDoc blocks and trailing whitespace (39 lines)
- **Files cleaned:** `lib/db/retry.ts`, `lib/db/media.ts`, `app/api/admin/test-newsletter/route.ts`, `lib/email/blogPostNotification.ts`

---

## Technical Context

### Environment
- **Framework:** Next.js 14.2.3 (App Router)
- **Database:** PostgreSQL via Supabase (pooled connections)
- **Dev Port:** 9000
- **Auth:** NextAuth.js

### Recent Commits (Jan 20, 2026)
```
81d2cec chore: remove AI-generated slop
c402361 docs: initialize session-scribe documentation system
32cadd1 feat: add tabbed Videos & Media page at /videosandmedia
3adf974 feat: add CBS 94.9 News Now to media appearances
```

### Codebase Style Conventions
- Minimal inline comments (no JSDoc)
- Try-catch only at API boundaries
- No unnecessary `any` types
- Clean interfaces at top of files

---

## User Preferences

- **Logo style:** Prefers the light/pastel version over vibrant
- **UI style:** Clean, manila folder-style tabs
- **Videos first:** User wants Videos tab to be default on media page
- **Commits:** Prefers atomic commits with clear messages
- **Code style:** Minimalist, no verbose JSDoc comments

---

## Pending Questions

_None at this time_

---

## Next Session Priorities

1. [ ] Continue with any new feature requests
2. [ ] Site is clean and ready for new work

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
| DB retry logic | `lib/db/retry.ts` |
| Logos folder | `public/images/logos/` |
| Media logos folder | `public/images/media/` |
