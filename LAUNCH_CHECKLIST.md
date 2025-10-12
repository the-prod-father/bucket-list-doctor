# Launch Checklist - Bucket List Doctor

## NON-NEGOTIABLES (Must Complete for Launch Today)

### 1. Remove Contributors Section ⚠️
**Priority:** CRITICAL  
**File:** `/components/home/BucketListNavigation.tsx`  
**Task:** Remove contributors card from bucketListSections array (lines 31-40)  
**Estimated Time:** 2 minutes  
**Status:** Not started

### 2. Add Cross-Site Navigation Thumbnails ⚠️
**Priority:** CRITICAL  
**Task:** Create thumbnail navigation linking to other Dr. D sites  
**Location:** Homepage, after main sections (before footer)  
**Requirements:**
- Ed180.com logo with yellow glow
- DoctorDesarbo.com with profile image
- Science publishing site (need logo/link)
- Clickable, responsive design
**Estimated Time:** 30 minutes  
**Status:** Not started

### 3. Verify All Social Media Links ✅
**Priority:** HIGH  
**Files:** `/components/layout/Footer.tsx`  
**Links to Verify:**
- Facebook: https://facebook.com/bucketlistdoctor
- Instagram: https://instagram.com/bucketlistdoctor
- LinkedIn: https://linkedin.com/in/drdesarbo
**Estimated Time:** 5 minutes  
**Status:** Links present, need testing

### 4. Newsletter "No Spam" Messaging ✅
**Priority:** HIGH  
**File:** `/components/layout/NewsletterSignup.tsx`  
**Current Copy:** "No spam, ever. Unsubscribe anytime."  
**Status:** Already implemented (line 27)

### 5. Production Build & Deploy
**Priority:** CRITICAL  
**Tasks:**
- Run `npm run build` to verify no errors
- Test production build locally
- Prepare deployment package
- Provide deployment instructions for GoDaddy
**Estimated Time:** 20 minutes  
**Status:** Not started

---

## SHOULD-HAVES (Complete Today if Time Allows)

### 6. Email Collection Database (SuperBase)
**Priority:** MEDIUM-HIGH  
**File:** `/components/layout/NewsletterSignup.tsx`  
**Requirements:**
- Set up SuperBase project
- Create newsletter_subscribers table
- Add environment variables
- Implement form submission
- Add confirmation emails
**Estimated Time:** 1-2 hours  
**Status:** Mock implementation only

### 7. Content Pages - Basic Implementation
**Priority:** MEDIUM  
**Pages Missing Content:**
- `/blog` - Blog listing or redirect to Medium
- `/tips-ideas` - Dr. D mentioned content exists
- `/your-brain` - Neuroscience benefits content

**Estimated Time:** 1 hour total  
**Status:** Pages exist but need content

### 8. Mobile Responsiveness Check
**Priority:** MEDIUM  
**Tasks:**
- Test on mobile viewport
- Verify navigation works
- Check image scaling
- Test newsletter form
**Estimated Time:** 30 minutes  
**Status:** Tailwind responsive classes in place, needs testing

### 9. Accessibility Audit
**Priority:** MEDIUM  
**Tasks:**
- Verify alt text on all images
- Check color contrast
- Test keyboard navigation
- Add ARIA labels where needed
**Estimated Time:** 45 minutes  
**Status:** Partial implementation

---

## NICE-TO-HAVES (Future Iterations)

### 10. Medium Integration
**Priority:** LOW  
**For:** DoctorDesarbo.com (separate site)  
**Task:** Add link to Dr. D's Medium profile  
**Status:** For future Doctor Desarbo site work

### 11. Blog Carousel Component
**Priority:** LOW  
**Reference:** Like contributors section carousel  
**Location:** Blog page  
**Status:** Not started

### 12. SEO Optimization
**Priority:** LOW  
**Tasks:**
- Meta descriptions
- Open Graph tags
- Structured data
- Sitemap
**Status:** Basic Next.js defaults only

### 13. Analytics Integration
**Priority:** LOW  
**Options:** Google Analytics or Plausible  
**Status:** Not implemented

---

## PRE-LAUNCH TESTING CHECKLIST

- [ ] Homepage loads correctly
- [ ] Hero brain animation works
- [ ] All navigation links work
- [ ] Social media links open correctly
- [ ] Newsletter form submits (even if mock)
- [ ] Books page Amazon links work
- [ ] About page displays correctly
- [ ] Mobile view is functional
- [ ] No console errors
- [ ] Images load properly
- [ ] Footer displays correctly
- [ ] Cross-site navigation works

---

## DEPLOYMENT CHECKLIST

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm start`
- [ ] Verify port 8000 configuration
- [ ] Create .env file for production (if needed)
- [ ] Prepare static export (if using static hosting)
- [ ] DNS records ready for custom domain
- [ ] SSL certificate plan (usually automatic with host)

---

## POST-LAUNCH IMMEDIATE TASKS

1. DNS Configuration for Email (GoDaddy)
   - Add MX records for Google Workspace
   - Add SPF record
   - Add DKIM record
   - Verify dr.disarbo@bucketlistdoctor.com works

2. Monitor for Issues
   - Check for broken links
   - Monitor font loading issues
   - Test from different devices
   - Get Dr. D's feedback

3. Next Priority Projects
   - DoctorDesarbo.com with spinning brain
   - Ed180.com cleanup
   - Science publishing site updates
   - SuperBase email collection full implementation

---

## QUESTIONS TO ANSWER BEFORE LAUNCH

1. ✅ Do we have Ed180 logo/link?
2. ⚠️ Do we have Science publishing site logo/link?
3. ✅ Should Contributors page exist but hidden, or deleted entirely?
   - **Answer:** Delete entirely
4. ⚠️ What hosting platform for deployment?
   - Need to confirm with Dr. D
5. ⚠️ Is GoDaddy hosting or just domain registration?
   - Need to confirm

---

## TIME ESTIMATES

**Non-Negotiables:** ~1 hour  
**Should-Haves:** ~3-4 hours  
**Nice-to-Haves:** ~8+ hours  

**Minimum Viable Launch:** 1 hour  
**Polished Launch:** 4-5 hours  
**Complete Package:** 12+ hours

