# Bucket List Doctor - Project TODO

**Last Updated:** 2025-11-25
**Project Status:** ~95% Complete - Final Polish & Handoff Phase
**Critical Context:** All major client requests from November 2025 have been implemented in Cursor

---

## 🔴 CRITICAL - Pre-Launch Verification (DO FIRST)

### New Client Requests from Jeff (Latest Text Messages - Nov 2025)
- [ ] **Speaking Page - Add YouTube Videos** - Add speaking/presentation videos to speaking page (similar to Videos and Media page)
  - Jeff mentioned: "Only one thing is to add that Speaking YouTube Videos to the speaking age as well"
  - Going to Vegas this weekend, wants to discuss what's next
  - Will be adding new shows like Fox stuff
- [ ] **Books Button Text Update** - Change button text from "Blogs and media" to "Recent Blogs Post"
  - Current: "My button for the books still reads Blogs and media and goes there"
  - Should read: "Recent Blogs Post" (as Jeff specified)
  - Verify it still links to correct page
- [ ] **Blog Upload Troubleshooting** - Jeff having issues uploading more blogs
  - "I had some trouble uploading more blogs and hope that's cause there's a limit"
  - Check database limits/constraints
  - Ensure no artificial limits on blog post creation
  - May need to increase storage quota or fix upload bug
- [ ] **"Coming Soon" Space** - Reserve space for future feature
  - Jeff: "I think you have a space saying coming soon where we can put this"
  - Identify where this placeholder exists
  - Confirm what content will go there

### Homepage Verification
- [ ] **Verify book image placement** - Confirm book image is in lower right corner as intended
- [ ] **Verify "Get the Books" button link** - Must link to main title, NOT workbook
  - Current link should point to: https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD
  - NOT to workbook or other book variations
- [ ] **Test MediaAppearances component** - Verify "As Featured On" banners (Newsday, Doctor Radio) display correctly on homepage
- [ ] **Verify updated description text** - Check that "Dr. DeSarbo has been featured with his insights on psychiatry, neuroscience and bucket lists across major media outlets." displays correctly

### About Page Verification
- [ ] **Verify Professional Summary** - Confirm new comprehensive copy is live
- [ ] **Verify Published Author section** - Check updated text: "Three groundbreaking books on bucket list neuroscience, including the main title and specialized supplements for eating disorders. Author of numerous articles for professional publication."
- [ ] **Verify International Speaker section** - Check updated text includes all media outlets (iHeart Radio, KTRS 550, News 12, Doctor Radio/Sirius XM, Newsday, WICC Radio, Connecticut Today)
- [ ] **Verify punctuation** - All achievement sections should have proper punctuation
- [ ] **Verify email CTA** - Must include "TV/Radio Interviews" and "Psychiatry Consultation"

### Videos and Media Page Verification
- [ ] **Verify intro text** - "Additional information from Dr. DeSarbo on neuroscience, mental health, eating disorders, bucket lists, and purposeful living."
- [ ] **Test YouTube integration** - Verify videos load from API
- [ ] **Test blog posts section** - Confirm articles display correctly
- [ ] **Verify "As Featured On" banners** - Same media outlets as homepage

### Tips & Advice Page Verification
- [ ] **Verify page title** - Should read "Tips & Advice" (not "Tips & Ideas")
- [ ] **Verify 10 category guides** - Check all icons, descriptions, and content display

### Your Brain Page Verification
- [ ] **Verify "Story of Your Brain on a Bucket List"** - Should appear after the 5 brain points
- [ ] **Verify three sections** - Starting Our List, Our List in Action, Afterwords
- [ ] **Verify three images** - brain, bucket, boat images display correctly
- [ ] **Verify scientific terminology** - Bold formatting on key terms

### Speaking Page Verification
- [ ] **Test media appearances grid** - All media logos/images display
- [ ] **Test topic carousels** - Verify carousel functionality and content
- [ ] **Test past engagements showcase** - Check display and content
- [ ] **Test booking CTA** - Verify contact form/link works

---

## 🟠 HIGH PRIORITY - Analytics & Tracking

### Analytics Setup for Jeff
- [ ] **Set up Google Analytics 4** - Enable traffic tracking from media appearances
- [ ] **Create analytics dashboard** - Simple view for Jeff to see key metrics
- [ ] **Configure conversion tracking** - Newsletter signups, book link clicks
- [ ] **Set up UTM parameter tracking** - Track traffic sources from different media outlets
- [ ] **Document analytics access** - Create guide for Jeff to view his stats

---

## 🟡 MEDIUM PRIORITY - Admin/CMS System

### Blog CMS (Already Exists - Needs Verification)
- [ ] **Test admin login** - Verify `/admin/blog` authentication works
- [ ] **Test blog post creation** - Create, edit, delete functionality
- [ ] **Test image uploads** - Drag-and-drop interface
- [ ] **Test blog display** - Verify posts show correctly on `/blog` page
- [ ] **Create user documentation** - "How to add a blog post" guide for Jeff

### Newsletter System (Planned - Not Yet Built)
- [ ] **Newsletter sending interface** - UI for Jeff to compose and send newsletters
- [ ] **Email template system** - Pre-built templates for consistency
- [ ] **Automated email on new blog post** - Trigger when post is published
- [ ] **Subscriber management** - View/export subscriber list
- [ ] **Unsubscribe handling** - Automated unsubscribe flow
- [ ] **Email service integration** - Set up Resend or SendGrid
- [ ] **Test email delivery** - Verify emails arrive correctly

### Admin System Improvements
- [ ] **Simplify admin UI** - "80-year-old friendly" interface
- [ ] **Add visual feedback** - Clear success/error messages
- [ ] **Add preview functionality** - Preview before publish
- [ ] **Add PDF upload** - For articles/resources
- [ ] **Add YouTube video embed** - Paste URL to add video
- [ ] **Session management** - Proper login/logout flow

---

## 🟢 LOW PRIORITY - Polish & Enhancement

### Content Updates
- [ ] **Review all page content** - Final copy edit pass
- [ ] **Optimize images** - Compress for faster loading
- [ ] **Check all links** - Verify no broken links
- [ ] **SEO optimization** - Meta descriptions, Open Graph tags
- [ ] **Accessibility audit** - WCAG compliance check

### Performance Optimization
- [ ] **Lighthouse audit** - Target 90+ scores across the board
- [ ] **Image optimization** - Next.js Image component usage
- [ ] **Font loading optimization** - Reduce FOUT/FOIT
- [ ] **Code splitting** - Optimize bundle sizes
- [ ] **Lazy loading** - Defer non-critical resources

### Cross-Site Integration
- [ ] **Test CrossSiteNavigation** - Verify links to all 4 sites work
- [ ] **Update site thumbnails** - Ensure current logos/images used
- [ ] **Verify science publishing site** - Once available, add link

### Mobile Experience
- [ ] **Mobile navigation testing** - Hamburger menu functionality
- [ ] **Touch targets** - Ensure buttons are large enough
- [ ] **Mobile animations** - Verify 3D brain works on mobile
- [ ] **Responsive images** - Test all breakpoints

### Documentation
- [ ] **Final handoff documentation** - Complete guide for Jeff
- [ ] **Deployment guide** - Vercel deployment instructions
- [ ] **Environment variables guide** - Document all required env vars
- [ ] **Troubleshooting guide** - Common issues and solutions
- [ ] **Content update guide** - How to update pages without developer

---

## ✅ COMPLETED (Reference)

### November 2025 Client Updates (ALL DONE IN CURSOR)
- ✅ Homepage book image placement
- ✅ "Get the Books" button link update
- ✅ "As Featured On" media banners (MediaAppearances component)
- ✅ Updated homepage description text
- ✅ About page Professional Summary update
- ✅ About page Published Author section update
- ✅ About page International Speaker section update
- ✅ About page punctuation fixes
- ✅ About page email CTA update
- ✅ Tips & Ideas page renamed to "Tips & Advice"
- ✅ 10 comprehensive category guides on Tips & Advice
- ✅ Your Brain page - Complete "Story of Your Brain on a Bucket List"
- ✅ Your Brain page - Three sections with images
- ✅ Your Brain page - Scientific terminology with bold formatting
- ✅ Videos and Media page intro text update
- ✅ YouTube integration with API
- ✅ Blog posts section for articles
- ✅ Blog admin CMS at `/admin/blog`
- ✅ Speaking page with all sections

### Core Site Completion
- ✅ 8 fully functional pages with SEO metadata
- ✅ 15+ components built and styled
- ✅ Supabase integration for newsletter
- ✅ Complete Squarespace content migration (18 pages documented)
- ✅ Responsive design across all breakpoints
- ✅ 3D animated brain hero with particle system
- ✅ Port 8000 configuration for dev and production

---

## 📝 NOTES & CONTEXT

### Known Issues (Safe to Ignore)
- Font loading warning from fonts.gstatic.com (cosmetic only)
- Unused components exist: BrainEarthHero.tsx, BrainHeader.tsx (legacy)

### DO NOT MODIFY
- `components/home/AnimatedBrainHero.tsx` - Complex 3D brain animation (180 LOC, risk of breaking)

### Critical Dates
- Original deadline: Friday 10/25/2025 at 2PM (radio interview) - **PASSED**
- Current phase: Final polish and handoff
- Jeff in Vegas through weekend (can still be reached if needed)
- Next meeting: Late Monday (will discuss next steps)
- Saturday meeting scheduled (final push and balance payment)

### Jeff's Latest Feedback (Text Messages)
- **Overall sentiment:** "LOVE IT! Only one thing is to add..."
- **Blog system:** "You now have full admin access at bucketlistdoctor.com/admin/blog"
  - Can create posts, upload images, manage content independently
  - No developer needed for routine updates
- **Everything is live, polished, and fully functional**
- Jeff will keep adding blogs and wants minimal developer interaction
- Appreciates the work: "I will go over it but will be in Vegas through the weekend"
- Ready for final features: "Happy to keep things moving as long as we stay aligned on expectations"

### Definition of Done
- [ ] All verification tasks completed
- [ ] Analytics set up and documented
- [ ] Admin/CMS fully functional and documented
- [ ] No broken links or missing content
- [ ] Lighthouse scores 90+ on all pages
- [ ] Complete handoff documentation delivered
- [ ] Jeff can independently manage content
- [ ] Jeff can track analytics
- [ ] All client requirements from November 2025 verified live

---

## 🎯 PRIORITY ORDER

1. **CRITICAL - NEW CLIENT REQUESTS** (Do before Saturday meeting)
   - Fix books button text ("Recent Blogs Post")
   - Add YouTube videos to Speaking page
   - Debug blog upload issues (database limit check)
   - Identify "coming soon" placeholder

2. **CRITICAL - VERIFICATION** (Do after fixes)
   - Run through all verification checklists
   - Test all existing functionality
   - Ensure no regressions

3. **HIGH PRIORITY**
   - Analytics setup for Jeff
   - Document everything for handoff

4. **MEDIUM PRIORITY**
   - Newsletter system (if time permits)
   - Polish and optimization

5. **LOW PRIORITY**
   - Nice-to-haves and future enhancements

---

## 💰 PROJECT SCOPE & BUDGET AWARENESS

**Hard cap on scope:** Project is at contract limit
- Core deliverables: ✅ DONE
- Current status: 95% complete, final polish phase
- New requests: Small additions only (buttons, videos, bug fixes)
- Big features (newsletter sending, etc.): Out of scope unless discussed

**Strategy:**
- Fix the 4 new issues from Jeff's texts
- Complete verification pass
- Set up basic analytics
- Document handoff
- **DONE** ✅

---

**Estimated Completion:** 95% → 100%

**Next Session Focus:**
1. Fix books button text
2. Add YouTube to Speaking page
3. Debug blog upload limit
4. Find "coming soon" space
5. Run verification pass
6. Saturday meeting: Final handoff + balance payment
