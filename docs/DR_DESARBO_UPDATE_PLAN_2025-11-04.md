# Dr. DeSarbo Update Plan - November 4, 2025

**Date:** November 4, 2025  
**Status:** Planning Phase  
**Priority:** High - Multiple critical updates requested

---

## Executive Summary

Dr. DeSarbo has provided 8 major update requests across multiple pages, plus additional assets (logos, video, articles, audio files). This document organizes all requirements into actionable tasks with clear implementation steps.

---

## Task Breakdown by Page

### 1. HOMEPAGE UPDATES

#### Task 1.1: Add Book Photo to Lower Right Corner of Homepage Banner
**Priority:** High  
**Status:** Pending  
**Location:** `components/home/AnimatedBrainHero.tsx`

**Requirements:**
- Add book cover image in lower right corner of hero banner
- Purpose: Help users understand what "Get the Books" button refers to
- Image: Book covers image provided (from email attachment)

**Implementation Notes:**
- Current hero: `AnimatedBrainHero` component
- Need to position book image in lower right corner
- Ensure it doesn't interfere with existing hero content
- Make it responsive for mobile/tablet/desktop

**Assets Needed:**
- Book covers image (from email attachment - two books overlapping)

**Files to Modify:**
- `components/home/AnimatedBrainHero.tsx`

---

#### Task 1.2: Fix Homepage Banner Link
**Priority:** High  
**Status:** Pending  
**Location:** `components/home/AnimatedBrainHero.tsx`

**Requirements:**
- Current link goes to workbook
- Should go to main title instead
- Already fixed in previous update (points to main book URL)

**Current Status:**
- ✅ Already updated to: `https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0`

**Verification Needed:**
- Confirm link is correct (main title, not workbook)

---

#### Task 1.3: Add Newsday and Doctor Radio Banners
**Priority:** High  
**Status:** Pending  
**Location:** `components/home/MediaAppearances.tsx`

**Requirements:**
- Add Newsday logo/banner
- Add Doctor Radio (SiriusXM) logo/banner
- Change section heading from "As Featured In" to "As Featured On"
- Update description text

**Current Text:**
> "Dr. DeSarbo shares insights on neuroscience and bucket lists across major media outlets."

**New Text:**
> "Dr. DeSarbo has been featured with his insights on psychiatry, neuroscience and bucket lists across major media outlets."

**Assets Needed:**
- Newsday logo (from email attachment)
- Doctor Radio/SiriusXM logo (from email attachment - already have SiriusXM logo reference)

**Files to Modify:**
- `components/home/MediaAppearances.tsx`

**Implementation Steps:**
1. Add Newsday to `mediaAppearances` array
2. Add Doctor Radio/SiriusXM to `mediaAppearances` array
3. Update section heading text
4. Update description text
5. Add logo images to `/public/images/media/` directory

---

#### Task 1.4: Add DrD Blog Button to Homepage
**Priority:** Medium  
**Status:** Pending  
**Location:** `components/home/BucketListNavigation.tsx` or new component

**Requirements:**
- Add "DrD Blog" button to homepage
- Purpose: Dr. D will post articles, writings on bucket listing, and bucket list adventures
- Need backend access for Dr. D to add content with pictures

**Implementation Notes:**
- Can add as new card in `BucketListNavigation` component
- Or create separate blog section
- Backend already exists (`/admin/blog`) - may need to verify access
- Link should go to `/blog` or new blog page

**Files to Modify:**
- `components/home/BucketListNavigation.tsx` (add new card)
- Or create new blog section component
- Verify admin blog system is accessible

---

### 2. ABOUT DR. DESARBO PAGE UPDATES

#### Task 2.1: Update Professional Summary
**Priority:** High  
**Status:** Pending  
**Location:** `app/about/page.tsx`

**Requirements:**
- New copy attached (need to check email for attached document)
- Replace current professional summary text

**Current Location:**
- Lines 112-122 in `app/about/page.tsx`

**Files to Modify:**
- `app/about/page.tsx`

**Assets Needed:**
- Professional Summary new copy (from email attachment)

---

#### Task 2.2: Update Published Author Section
**Priority:** High  
**Status:** Pending  
**Location:** `app/about/page.tsx` (line 176-179)

**Current Text:**
> "Three groundbreaking books on bucket list neuroscience, including the main title and specialized supplements for eating disorders"

**New Text:**
> "Three groundbreaking books on bucket list neuroscience, including the main title and specialized supplements for eating disorders. Author of numerous articles for professional publication."

**Files to Modify:**
- `app/about/page.tsx` (line 177)

---

#### Task 2.3: Update International Speaker Section
**Priority:** High  
**Status:** Pending  
**Location:** `app/about/page.tsx` (line 188-190)

**Current Text:**
> "Featured on major media outlets including KTRS 550 ABC News Radio, News 12, WICC Radio, and Connecticut Today"

**New Text:**
> "National and international professional presenter. Featured on major media outlets including KTRS 550 ABC News Radio, News 12 Television, Doctor Radio/Sirius XM, Newsday, WICC Radio, and Connecticut Today."

**Files to Modify:**
- `app/about/page.tsx` (line 189)

---

#### Task 2.4: Add Periods to Sections
**Priority:** Medium  
**Status:** Pending  
**Location:** `app/about/page.tsx`

**Requirements:**
- Add period at end of sentence for "Neuropsychiatry Expert" section
- Add period at end of sentence under "Clinical Practice & Speaker & Educator"

**Files to Modify:**
- `app/about/page.tsx`

---

#### Task 2.5: Fix Adventures & Achievements Section
**Priority:** Medium  
**Status:** Pending  
**Location:** `app/about/page.tsx` (line 141)

**Requirements:**
- Add period at end of sentence
- Better alignment so single word doesn't appear alone on second line
- Consider making "Adventures" colored (like "Achievements" is)

**Current Text:**
```tsx
Adventures & <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Achievements</span>
```

**Files to Modify:**
- `app/about/page.tsx` (line 141)

---

#### Task 2.6: Update Email Section
**Priority:** Medium  
**Status:** Pending  
**Location:** `app/about/page.tsx` (line 306)

**Requirements:**
- Change "Radio Interviews" to "TV/Radio Interviews"
- Add "Psychiatry Consultation"

**Current Tags:**
- Medical Consultations
- Speaking Engagements
- Radio Interviews ← Change to "TV/Radio Interviews"
- Podcast Appearances
- Educational Seminars
- Add: "Psychiatry Consultation"

**Files to Modify:**
- `app/about/page.tsx` (line 303-308)

---

### 3. TIPS & IDEAS PAGE UPDATES

#### Task 3.1: Upload Content from Past Website
**Priority:** High  
**Status:** Pending  
**Location:** `app/tips-ideas/page.tsx`

**Requirements:**
- Upload copy and pics from past website (discussed last week)
- Content should be comprehensive travel guides and tips

**Current Status:**
- Page exists but has placeholder content
- Need to migrate content from Squarespace site

**Assets Needed:**
- Content from Squarespace site (already documented in `docs/squarespace-site-reference/tips-ideas-*.md`)
- Images from tips-ideas sections

**Files to Modify:**
- `app/tips-ideas/page.tsx`

**Reference Documents:**
- `docs/squarespace-site-reference/tips-ideas-*.md` (10 comprehensive guides)

---

#### Task 3.2: Change Button Title to "Tips & Advice"
**Priority:** Medium  
**Status:** Pending  
**Location:** Multiple files

**Requirements:**
- Change "Tips & Ideas" to "Tips & Advice" throughout site
- Update navigation
- Update page title
- Update button text

**Files to Modify:**
- `components/layout/Navigation.tsx`
- `components/home/BucketListNavigation.tsx`
- `app/tips-ideas/page.tsx`
- Any other references to "Tips & Ideas"

**Note:** This will require URL change from `/tips-ideas` to `/tips-advice` OR keep URL but change display text

---

### 4. YOUR BRAIN PAGE UPDATES

#### Task 4.1: Add Story After 5 Brain Points
**Priority:** High  
**Status:** Pending  
**Location:** `app/your-brain/page.tsx`

**Requirements:**
- Add story about "the brain on a bucket list" with 3 pictures
- Place immediately after the 5 brain benefits points
- Content provided in attached Word document

**Current Structure:**
- Hero section
- Introduction
- 5 Benefits (neuroplasticity, dopamine, problem-solving, resilience, meaning)
- **NEW:** Story section with 3 pictures ← Add here

**Assets Needed:**
- Word document with story content
- 3 pictures for the story

**Files to Modify:**
- `app/your-brain/page.tsx`

---

### 5. VIDEOS & MEDIA PAGE UPDATES

#### Task 5.1: Update Intro Text
**Priority:** Medium  
**Status:** Pending  
**Location:** `app/blog/page.tsx` (line 53)

**Current Text:**
> "Watch Dr. DeSarbo's insights on neuroscience, bucket lists, and purposeful living."

**New Text:**
> "Additional information from Dr. DeSarbo on neuroscience, mental health, eating disorders, bucket lists, and purposeful living."

**Files to Modify:**
- `app/blog/page.tsx` (line 53)

---

### 6. BLOG/ARTICLES UPDATES

#### Task 6.1: Add Articles and Google Notes Audio
**Priority:** Medium  
**Status:** Pending  
**Location:** TBD - New blog system or existing

**Requirements:**
- Articles attached (need to process)
- Google Notes Audio files attached (need to process)
- Integrate into blog system

**Assets Needed:**
- Article files (from email attachment)
- Google Notes Audio files (from email attachment)

**Implementation Notes:**
- Admin blog system exists at `/admin/blog`
- May need to create article upload functionality
- Audio files may need hosting solution
- Consider creating article display page

**Files to Create/Modify:**
- Blog/article display components
- Admin upload functionality (if needed)
- Audio player component (if needed)

---

### 7. SPEAKERS PAGE / VIDEO EMBED

#### Task 7.1: Embed Speaker Trailer Video
**Priority:** High (Urgent - for cruise line speaking opportunity)  
**Status:** Pending  
**Location:** TBD - May need to create Speakers page

**Requirements:**
- Embed "SpeakerTrailer.mov" video
- Video attached in email
- Needed urgently for cruise line speaking opportunity
- Dr. D wants to refer cruise line to site

**Assets Needed:**
- `SpeakerTrailer.mov` file (from email attachment)

**Implementation Notes:**
- May need to convert .mov to web-friendly format (mp4)
- Create Speakers page or add to About page
- Use HTML5 video player or embed solution

**Files to Create/Modify:**
- New page: `app/speakers/page.tsx` (if creating new page)
- Or add to: `app/about/page.tsx` (if adding to existing page)
- Video component for embedding

---

## Assets Inventory

### Images Needed:
1. ✅ Book covers image (for homepage lower right corner)
2. ✅ Newsday logo (for media appearances)
3. ✅ Doctor Radio/SiriusXM logo (for media appearances)
4. ✅ WJR 760 AM logo (from email - may be for reference)
5. ✅ KOA News Talk Sports logo (from email - may be for reference)
6. ✅ 3 pictures for "Your Brain" story section
7. ✅ Tips & Ideas content images (from Squarespace migration)

### Video Files:
1. ✅ `SpeakerTrailer.mov` (needs conversion to web format)

### Audio Files:
1. ✅ Google Notes Audio files (multiple - need to identify)

### Documents:
1. ✅ Professional Summary new copy (Word doc or text)
2. ✅ "Your Brain" story content (Word document)
3. ✅ Articles (multiple - need to process)

---

## Implementation Priority

### Phase 1: Critical/Urgent (Do First)
1. **Task 7.1:** Embed Speaker Trailer Video (URGENT - for cruise line)
2. **Task 1.1:** Add book photo to homepage banner
3. **Task 1.3:** Add Newsday and Doctor Radio banners
4. **Task 2.1:** Update Professional Summary
5. **Task 2.2:** Update Published Author section
6. **Task 2.3:** Update International Speaker section

### Phase 2: High Priority
7. **Task 4.1:** Add story to Your Brain page
8. **Task 3.1:** Upload Tips & Ideas content
9. **Task 1.4:** Add DrD Blog button to homepage

### Phase 3: Medium Priority
10. **Task 3.2:** Change "Tips & Ideas" to "Tips & Advice"
11. **Task 2.4:** Add periods to sections
12. **Task 2.5:** Fix Adventures & Achievements alignment
13. **Task 2.6:** Update email section tags
14. **Task 5.1:** Update Videos & Media intro text

### Phase 4: Lower Priority
15. **Task 6.1:** Add articles and audio files

---

## File Organization Plan

### New Assets Directory Structure:
```
public/
├── images/
│   ├── media/
│   │   ├── newsday-logo.png (NEW)
│   │   ├── doctor-radio-logo.png (NEW)
│   │   ├── siriusxm-logo.png (NEW - if separate)
│   │   ├── wjr-760-logo.png (NEW - if needed)
│   │   └── koa-logo.png (NEW - if needed)
│   ├── books/
│   │   └── book-covers-hero.png (NEW - for homepage)
│   └── brain-story/
│       ├── brain-story-1.jpg (NEW)
│       ├── brain-story-2.jpg (NEW)
│       └── brain-story-3.jpg (NEW)
├── videos/
│   └── speaker-trailer.mp4 (NEW - converted from .mov)
└── audio/
    └── google-notes/ (NEW - audio files)
```

---

## Questions to Resolve

1. **Speakers Page:** Create new `/speakers` page or add to About page?
2. **Tips & Advice:** Change URL from `/tips-ideas` to `/tips-advice` or keep URL?
3. **Blog Button:** Add to existing navigation cards or create separate section?
4. **Audio Files:** How should Google Notes audio be displayed? (Embedded player, download links, etc.)
5. **Articles:** Should articles be blog posts or separate articles page?
6. **Video Format:** Convert .mov to .mp4 or use HTML5 video with .mov support?
7. **Professional Summary:** Need to see attached document to get exact new copy
8. **Brain Story:** Need to see Word document to get exact story content

---

## Next Steps

1. ✅ **DONE:** Create this comprehensive plan document
2. **TODO:** Review all email attachments and organize assets
3. **TODO:** Extract text content from Word documents
4. **TODO:** Convert/organize media files (logos, images, video, audio)
5. **TODO:** Begin Phase 1 implementation (critical/urgent tasks)
6. **TODO:** Test all changes locally
7. **TODO:** Deploy to production

---

## Notes

- Dr. D mentioned urgency for Speaker Trailer video (cruise line opportunity)
- Multiple assets provided via email - need to download and organize
- Some content may already exist in Squarespace migration docs
- Admin blog system exists - may need to verify Dr. D has access
- Consider creating asset organization document for future reference

---

**Last Updated:** November 4, 2025  
**Next Review:** After Phase 1 completion

