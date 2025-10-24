# Priority 1 Fix Inventory - Before/After Testing Guide

**Created:** 2025-10-23
**Deadline:** Thursday 10/24/2025 at 4:30 PM
**Purpose:** Complete inventory of all locations requiring Priority 1 fixes for radio interview

---

## Fix 1: URL Correction - doctorsarbo.com → doctordesarbo.com

### Status: ✅ ALREADY CORRECT
**Search Result:** No instances of "doctorsarbo" found in code files
**Conclusion:** This was likely fixed in a previous update

### Verification Needed:
- Test all external links manually to ensure they go to correct URLs

---

## Fix 2: BookBaby Formatting (one word, capital B)

### Current Status: ✅ MOSTLY CORRECT

**Already Correct Locations:**
1. ✅ `/app/books/page.tsx:112` - "BookBaby" (correct)
2. ✅ `/components/home/BookShowcase.tsx:65` - "BookBaby" (correct)
3. ✅ `/CLAUDE.md:280` - "BookBaby" (correct)

**Incorrect Locations (Documentation Only - NOT CODE):**
1. ⚠️ `/POLISHED_LAUNCH_SUMMARY.md:71` - "Book Baby" (two words)
2. ⚠️ `/docs/squarespace-site-reference/books-page.md:22` - "Book Baby" (two words)
3. ⚠️ `/PROJECT_CONTEXT.md:33` - "Book Baby" (incorrect URL)

### Action Required:
- ✅ **NO CODE CHANGES NEEDED** - All code is already correct
- 📝 Update documentation files for consistency (optional, not critical)

**Before:**
```markdown
Book Baby link: https://www.bookbaby.com
```

**After:**
```markdown
BookBaby link: https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list
```

---

## Fix 3: ED180 Capitalization

### Current Status: ⚠️ NEEDS FIX

**Correct Location:**
1. ✅ `/components/home/CrossSiteNavigation.tsx:12` - `name: 'ED180'` (correct)

**Incorrect Location:**
1. ❌ `/components/home/CrossSiteNavigation.tsx:14` - `url: 'https://ed-180.com/'` (lowercase with hyphen)

**Note:** The URL might be the actual domain name (lowercase is correct for URLs)

### File to Change:
**File:** `/components/home/CrossSiteNavigation.tsx`
**Line:** 14

**Before:**
```typescript
url: 'https://ed-180.com/',
```

**After (if domain is ED180.com):**
```typescript
url: 'https://ed180.com/',
```

**OR keep as-is if actual domain has hyphen**

### Action Required:
- ✅ Verify actual domain name with Dr. D
- If domain is `ed180.com` → update line 14
- If domain is `ed-180.com` → no change needed (correct as-is)

---

## Fix 4: Books Section - Show All 3 Books with Correct Links

### Current Status: ✅ ALREADY COMPLETE!

**File:** `/app/books/page.tsx`

**All 3 Books Already Displayed:**
1. ✅ Line 16-24: "The Neuroscience of a Bucket List"
   - Amazon URL: `https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0`
   - ✅ Correct

2. ✅ Line 25-33: "The Neuroscience of a Bucketlist Workbook"
   - Amazon URL: `https://www.amazon.com/Neuroscience-Bucket-List-Workbook-Companion/dp/B0FBFNYWLW?ref_=ast_author_dp&th=1&psc=1`
   - ✅ Correct

3. ✅ Line 34-42: "Eating Disorder Supplement"
   - Amazon URL: `https://www.amazon.com/Eating-Disorder-Supplement-Neuroscience-Bucket-ebook/dp/B0FR1G9BL6?ref_=ast_author_dp&th=1&psc=1`
   - ✅ Correct

**Additional Purchase Options (Lines 100-126):**
- ✅ BookBaby link: Correct
- ✅ Barnes & Noble link: Correct

### Action Required:
- ✅ **NO CHANGES NEEDED** - Already perfect!
- Just verify links work when testing

---

## Fix 5: About Page Title - "Jeffrey DeSarbo, D.O."

### Current Status: ✅ ALREADY CORRECT!

**File:** `/app/about/page.tsx`
**Line:** 37

**Current Title:**
```tsx
<h1 className="text-5xl font-bold text-gray-900 mb-8">About Jeffrey DeSarbo, D.O.</h1>
```

**Metadata (Line 5):**
```tsx
title: 'About Dr. Jeffrey DeSarbo | Bucket List Doctor',
```

### Action Required:
- ✅ **NO CHANGES NEEDED** - Already has "D.O." in the H1
- ✅ Metadata is also correct

---

## Fix 6: Add Microphone & Stethoscope Icons

### Current Status: ❌ NEEDS IMPLEMENTATION

**File to Update:** `/app/about/page.tsx`

### Icons to Add:
1. **Microphone Icon** - For speaking engagements/radio appearances
2. **Stethoscope Icon** - To emphasize medical credential (D.O.)

### Suggested Implementation Location:
After line 47 (after the travel description), add a new section:

**New Section to Add:**
```tsx
{/* Professional Credentials */}
<div className="flex flex-wrap gap-6 my-8">
  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
    <FaStethoscope className="w-8 h-8 text-brand-blue" />
    <div>
      <div className="font-bold text-gray-900">Licensed Physician</div>
      <div className="text-sm text-gray-600">Doctor of Osteopathic Medicine</div>
    </div>
  </div>
  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
    <FaMicrophone className="w-8 h-8 text-brand-purple" />
    <div>
      <div className="font-bold text-gray-900">Speaker & Educator</div>
      <div className="text-sm text-gray-600">Available for interviews & talks</div>
    </div>
  </div>
</div>
```

### Import Statement to Add:
```tsx
import { FaStethoscope, FaMicrophone } from 'react-icons/fa';
```

---

## Fix 7: Logo on Every Page

### Current Status: ✅ ALREADY IMPLEMENTED!

**Implementation:** Logo is in Navigation component which is in root layout

**File:** `/components/layout/Navigation.tsx`
**Lines:** 23-28

```tsx
<Link href="/" className="flex items-center space-x-2">
  <div className="text-2xl font-display font-bold text-white">
    Bucket List Doctor
  </div>
</Link>
```

**Root Layout:** `/app/layout.tsx` includes `<Navigation />`

**Pages Checked:**
- ✅ Homepage (`/app/page.tsx`)
- ✅ About (`/app/about/page.tsx`)
- ✅ Books (`/app/books/page.tsx`)
- ✅ Blog (`/app/blog/page.tsx`)
- ✅ Tips & Ideas (`/app/tips-ideas/page.tsx`)
- ✅ Your Brain (`/app/your-brain/page.tsx`)

### Action Required:
- ✅ **NO CHANGES NEEDED** - Logo appears on all pages via Navigation component
- Test to verify it displays properly

---

## Fix 8: Remove Medium References

### Current Status: ⚠️ NEEDS VERIFICATION

**Code Files:** No Medium references found in actual component code

**Documentation Files with Medium References:**
- `/LAUNCH_CHECKLIST.md` - Lines 69, 100, 103
- `/MASTER_IMPLEMENTATION_PLAN.md` - Lines 139-143
- `/TECHNICAL_NOTES.md` - Lines 90, 143
- `/POLISHED_LAUNCH_SUMMARY.md` - Line 15
- `/MEETING_REQUIREMENTS.md` - Multiple lines about Medium integration

**Git History:** One commit mentions Medium
- Commit message: "feat: Add Open Graph book cover image and fix Medium blog URL"

### Action Required:
- ✅ **NO CODE CHANGES NEEDED** - No Medium links in actual site code
- Check `/app/blog/page.tsx` to ensure no Medium URLs
- Update documentation files (optional, not user-facing)

---

## Fix 9: Add Appointment/Scheduling Info to About Page

### Current Status: ❌ NEEDS IMPLEMENTATION

**File to Update:** `/app/about/page.tsx`

### Suggested Implementation:
Add after the book section (after line 72), before closing div:

**New Section to Add:**
```tsx
{/* Schedule Appointment Section */}
<div className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 p-8 rounded-lg border-2 border-brand-blue/20">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule an Appointment</h3>
  <p className="text-lg text-gray-700 mb-6">
    Interested in working with Dr. DeSarbo? He is available for consultations, speaking engagements, and professional collaborations.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="mailto:contact@bucketlistdoctor.com"
      className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all text-center"
    >
      Email Dr. DeSarbo
    </a>
    <a
      href="/contact"
      className="inline-block bg-white hover:bg-gray-50 text-brand-blue border-2 border-brand-blue font-bold py-3 px-6 rounded-lg transition-all text-center"
    >
      Contact Form
    </a>
  </div>
  <p className="text-sm text-gray-600 mt-4">
    Available for: Medical consultations • Speaking engagements • Radio interviews • Podcast appearances • Educational seminars
  </p>
</div>
```

---

## Fix 10: Punctuation Review

### Files to Check for Punctuation:

**Priority Files (User-Facing Content):**
1. `/app/page.tsx` - Homepage
2. `/app/about/page.tsx` - About page
3. `/app/books/page.tsx` - Books page
4. `/app/blog/page.tsx` - Blog page
5. `/app/your-brain/page.tsx` - Your Brain page
6. `/app/tips-ideas/page.tsx` - Tips & Ideas page
7. `/components/home/ValueProp.tsx` - Value proposition
8. `/components/home/BookShowcase.tsx` - Book showcase
9. `/components/home/AboutSection.tsx` - About section
10. `/components/home/BucketListNavigation.tsx` - Navigation cards

### Punctuation Rules to Check:
- ✅ Sentences end with periods
- ✅ Lists have proper comma separation
- ✅ Contractions have apostrophes (don't, isn't, etc.)
- ✅ Quotes have proper quotation marks
- ✅ Possessives have apostrophes (Dr. D's, brain's, etc.)
- ✅ No double spaces after periods
- ✅ Proper spacing around punctuation

### Action Required:
- Read through each file line by line
- Fix any missing or incorrect punctuation
- Dr. D emphasized: "I kind of like punctuations kind of" - this is CRITICAL!

---

## Summary of Required Changes

### ✅ Already Complete (No Changes Needed):
1. ✅ URL Corrections (no instances of doctorsarbo found)
2. ✅ BookBaby formatting (already correct in code)
3. ✅ Books section (all 3 books shown with correct links)
4. ✅ About page title (already "Jeffrey DeSarbo, D.O.")
5. ✅ Logo on every page (via Navigation component)
6. ✅ Medium references (none in actual code)

### ⚠️ Needs Verification:
1. ⚠️ ED180 URL - Check if domain is `ed-180.com` or `ed180.com`

### ❌ Needs Implementation:
1. ❌ Add microphone & stethoscope icons to About page
2. ❌ Add appointment/scheduling section to About page
3. ❌ Review all user-facing text for punctuation

---

## Testing Checklist

After making changes, test the following:

### Visual Testing:
- [ ] Visit homepage - check for proper punctuation
- [ ] Visit /about - verify "Jeffrey DeSarbo, D.O." title
- [ ] Visit /about - check microphone & stethoscope icons display
- [ ] Visit /about - verify appointment section displays
- [ ] Visit /books - verify all 3 books show
- [ ] Visit /books - click each "Buy on Amazon" link
- [ ] Visit /books - click BookBaby link
- [ ] Visit /books - click Barnes & Noble link
- [ ] Check logo appears on all 7 pages
- [ ] Check ED180 link in CrossSiteNavigation section
- [ ] Check DoctorDesarbo link works

### Mobile Testing:
- [ ] Test all pages on mobile view
- [ ] Verify navigation hamburger menu works
- [ ] Check that icons display properly on mobile
- [ ] Verify appointment section is readable on mobile

### Link Testing:
- [ ] All Amazon book links open correct books
- [ ] BookBaby link opens correct book
- [ ] Barnes & Noble link works
- [ ] ED180 link goes to correct domain
- [ ] DoctorDesarbo link goes to https://www.doctordesarbo.com
- [ ] All social media links work (footer)

---

## Files That Will Be Modified

### Code Files to Edit:
1. `/app/about/page.tsx` - Add icons and appointment section
2. Potentially `/components/home/CrossSiteNavigation.tsx` - Verify ED180 URL
3. All page files - Punctuation review and fixes

### Documentation Files (Optional):
1. `/PROJECT_CONTEXT.md` - Update BookBaby URL
2. `/POLISHED_LAUNCH_SUMMARY.md` - Update "Book Baby" to "BookBaby"

---

## Estimated Time to Complete

- ⏱️ Add icons to About page: **10 minutes**
- ⏱️ Add appointment section to About page: **15 minutes**
- ⏱️ Punctuation review (all files): **30-45 minutes**
- ⏱️ Testing all changes: **20 minutes**

**Total: ~1.5 hours**

---

## Before/After Screenshots Recommended

Take screenshots of these pages BEFORE making changes:
1. `/about` - Full page
2. `/books` - All 3 books section
3. Homepage - Bottom section with CrossSiteNavigation

Take AFTER screenshots for comparison and to show Dr. D the improvements.

---

**Ready to proceed with fixes!** 🚀
