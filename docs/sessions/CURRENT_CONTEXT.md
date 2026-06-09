# Hot Context - Bucket List Doctor

**Last Updated:** 2026-06-08
**Project:** Bucket List Doctor (bucketlistdoctor.com)
**Dev Server:** http://localhost:9000

---

## 2026-06-08 Claude Code session wrap (START HERE)

### Active goal

Shipped the free **Bucket List Starter Kit** lead magnet, removed **Barnes & Noble** everywhere, and fixed the intermittently-empty **Articles page** — all live on production. The one open thread is turning on the per-lead **email notification** (SMTP is not configured in Vercel).

### Branch / repo state

- Worktree: `main` at `/Users/gavinwnu/Dev/consulting/bucket-list-doctor`
- All 3 commits this session pushed to `origin/main`. Tree clean. Latest sha: `462e783`.
- Deployed to production via Vercel auto-deploy. Live + smoke-tested at `https://www.bucketlistdoctor.com`.

### What shipped this cycle

1. `76e8848` — feat: add free Bucket List Starter Kit lead magnet
2. `c7ce526` — chore: remove Barnes & Noble from books, homepage, and docs
3. `462e783` — fix: make Articles page resilient to DB cold-start timeouts

### Where we left off

- Starter Kit CTA is live below the homepage hero: email gate → instant PDF download. Leads saved to `newsletter_subscribers` with `source='starter-kit'` (deduped), visible in `/admin/newsletter` (Source column + CSV export already exist).
- Per-lead notification email to `DrDBucketList@gmail.com` is **coded but does NOT send in prod** — `SMTP_USER`/`SMTP_PASSWORD` are not set in Vercel. Lead capture + download still work (notification fails gracefully).
- Same SMTP gap means the existing **blog-post notification emails have also never sent in prod**.
- B&N fully removed (site + the 2 internal QA/handoff docs). Amazon + BookBaby remain.
- Articles page (`/newsletter`) fixed: `/api/blog/published` now uses `withRetryOrEmpty` + a client-side retry. 40 published articles confirmed live.

### Next step — DO THIS FIRST, NO OPTIONS

**Set up SMTP in Vercel production so the Starter Kit lead alert (and the dormant blog-post emails) actually send.** Gavin already chose "Set up SMTP." Get from Gavin a sending email address + a Google **App Password**, then set `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM` (plus `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`) in Vercel production via `vercel env add ... production`, trigger a redeploy (env changes need a fresh deploy), and submit one real test lead through the live form. **Success = the test notification lands in `DrDBucketList@gmail.com`.**

### Then, in this exact order

1. Seed Claude's persistent memory for this project (currently empty): project facts, deploy workflow, the SMTP-pending item.

✅ DONE this session: the `SessionStart` continuity hook now auto-surfaces this handoff on every resume — `.claude/settings.json`, commit `a11884b`. (gstack already installed; gbrain optional/skip.)

### Open threads / parked

- gstack is installed globally — no project setup needed. `/setup-deploy` optional (Vercel auto-deploy-on-push already works). gbrain optional, likely overkill for one site.
- 8 pre-existing Playwright homepage-suite failures (stale `/blog` nav after the `/videosandmedia` migration + strict-mode multi-matches). Verified pre-existing via a HEAD baseline — not from our work. Could be cleaned up separately if desired.

### Blockers / decisions pending

- Waiting on Gavin for the SMTP **sending account + App Password** (he picked "Set up SMTP").

### Context worth remembering

- **Deploy = push to `main` → Vercel auto-deploys production** (project `prj_1sS6pBAUgeRq0cp8G1vnxW3GRVWv`, team why-not-us-labs). No PR ceremony.
- Production **redirects `bucketlistdoctor.com` → `www.bucketlistdoctor.com` (307)** — smoke tests must use `curl -L` or the `www` URL, or they read the redirect stub.
- **DB TLS gotcha (do not "fix"):** `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'` is **load-bearing** for the pg connection. The connection string uses `sslmode=require`, so node-postgres validates the chain and the per-`Client` `ssl: { rejectUnauthorized: false }` alone is **not** enough → `SELF_SIGNED_CERT_IN_CHAIN`. Every DB route sets the global flag; removing it breaks the connection (learned the hard way this session).
- **Build gotcha:** running `npm run build` while `npm run dev` is live corrupts the dev server's `.next` (shared dir). Kill dev before building.
- **Test-selector note:** the homepage now has 2 `input[type=email]` + 2 `button[type=submit]` (Starter Kit + footer newsletter). Newsletter Playwright tests were scoped to `footer ...` to avoid strict-mode violations — keep new homepage forms in mind.
- The Starter Kit PDF lives at `public/bucket-list-brain-starter-kit.pdf` with a `.gitignore` negation (`!public/bucket-list-brain-starter-kit.pdf`) overriding the global `*.pdf` ignore. It must stay committed or the download 404s in prod.

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
