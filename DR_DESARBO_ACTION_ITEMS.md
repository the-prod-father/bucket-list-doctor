# Dr. DeSarbo Action Items - From Nov Conversation

**Date:** November 2025  
**Status:** Reviewing and prioritizing remaining work

---

## ✅ COMPLETED TODAY

1. **"Get the Books" Button on Landing Page** ✅
   - Added back to hero section (was moved to second fold)
   - Now appears prominently on landing page hero

2. **All Oct 28 Requirements** ✅
   - Media banners (all 6 stations)
   - About page updates
   - Tips & Advice rebrand
   - Your Brain story with 3 pics
   - Videos & Media text update

---

## 🔴 REMAINING ACTION ITEMS (From Conversation)

### 1. **Backend Access Documentation** (HIGH PRIORITY)
**Issue:** Dr. DeSarbo mentioned "backend access to add blogs" - admin system exists but he may not know how to access it.

**What Exists:**
- Admin login page at `/admin/login`
- Blog management at `/admin/blog`
- Newsletter management at `/admin/newsletter`

**What's Needed:**
- [ ] Create simple instruction document for accessing admin
- [ ] Verify his login credentials work
- [ ] Provide direct link/instructions

**Action:** Create `ADMIN_ACCESS_GUIDE.md` with step-by-step instructions

---

### 2. **Media Stations Backend** (MEDIUM PRIORITY)
**Issue:** "call letters of stations" - Currently media appearances are hardcoded in `MediaAppearances.tsx`

**What Exists:**
- Hardcoded array of 6 media outlets in component
- Images for each station

**What's Needed:**
- [ ] Create database table for media appearances
- [ ] Create admin interface to add/edit/delete stations
- [ ] Update MediaAppearances component to pull from database
- [ ] Allow uploading station logos/images

**Action:** Build admin CRUD interface for media appearances

---

### 3. **Analytics/Tracking System** (HIGH PRIORITY)
**Issue:** "statistic data for when I'm on shows to see if it is giving a return"

**What Exists:**
- View counts on blog posts
- Basic subscriber counts

**What's Needed:**
- [ ] Google Analytics integration
- [ ] Track traffic sources (radio/TV show referrals)
- [ ] Dashboard showing:
  - Traffic spikes around show dates
  - Referral sources
  - Conversion tracking (newsletter signups, book clicks)
  - ROI metrics

**Action:** Set up analytics dashboard with referral tracking

---

### 4. **Dedicated Speaking Page** (HIGH PRIORITY)
**Issue:** "I need the speaking part up so I can find an agent"

**What Exists:**
- "Speaker & Educator" section on About page
- Speaking topics listed

**What's Needed:**
- [ ] Create dedicated `/speaking` page
- [ ] Include:
  - Speaker bio/highlights
  - Topics list
  - Past speaking engagements
  - Testimonials
  - Booking CTA
  - Speaker video/trailer (if available)
  - Contact form for booking inquiries

**Action:** Create comprehensive Speaking page

---

## 📋 SUMMARY

**Total Items:** 4 remaining action items

**Priority Order:**
1. ✅ Get the Books button (DONE)
2. Backend access documentation (HIGH - he needs to use the system)
3. Analytics/tracking (HIGH - ROI measurement)
4. Speaking page (HIGH - finding agent)
5. Media stations backend (MEDIUM - nice to have)

**Note:** The admin system exists and works. The main issues seem to be:
- Dr. DeSarbo may not know how to access it
- Missing analytics to measure ROI
- Missing dedicated Speaking page for agent outreach








