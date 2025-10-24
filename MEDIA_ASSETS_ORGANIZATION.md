# Media Assets Organization Plan

**Date:** October 23, 2025
**Purpose:** Organize all logos, media appearances, and profile images for the site

---

## Inventory of Current Assets

### Logos Discovered:

1. **Bucket List Doctor Logo**
   - **Current Location:** `docs/squarespace-site-reference/screenshots/tips-ideas/BUCKETLISTDOCTOR-LOGO.webp`
   - **Description:** Colorful stethoscope/book logo with "BUCKETLISTDOCTOR.com" text
   - **Colors:** Blue, green, orange, red gradient
   - **New Location:** `public/images/logos/bucketlist-doctor-logo.webp`
   - **Usage:** Site logo, favicon, social media

2. **ED180 Logo**
   - **Current Location:** `docs/squarespace-site-reference/screenshots/tips-ideas/ED180-LOGO.jpg`
   - **Description:** "ed 180" with yellow glow effect, teal arrow, "EATING DISORDER TREATMENT PROGRAMS"
   - **Colors:** White/gray text, yellow glow, teal accent
   - **New Location:** `public/images/logos/ed180-logo.jpg`
   - **Usage:** CrossSiteNavigation component

3. **DoctorDesarbo.com Placeholder**
   - **Will Use:** Professional headshot (doctor-desarbo-newprofile-pic.jpg)
   - **New Location:** `public/images/profile/dr-desarbo-professional-headshot.jpg`
   - **Usage:** CrossSiteNavigation for doctordesarbo.com link, About page

---

## Media Appearances Assets:

### Radio Stations:

1. **BIG 550 KTRS ABC News Radio**
   - **Current:** `Screenshot 2025-10-23 at 11.27.04 AM.png`
   - **New Name:** `ktrs-550-abc-news-radio-logo.png`
   - **Location:** `public/images/media/ktrs-550-abc-news-radio-logo.png`
   - **Type:** Radio station logo (St. Louis area)

### TV Stations:

2. **News 12 Long Island**
   - **Current:** `Screenshot 2025-10-23 at 11.28.50 AM.png`
   - **New Name:** `news12-long-island-logo.png`
   - **Location:** `public/images/media/news12-long-island-logo.png`
   - **Type:** TV news station logo

### Profile Images:

3. **Dr. DeSarbo Professional Headshot**
   - **Current:** `doctor-desarbo-newprofile-pic.jpg`
   - **New Name:** `dr-desarbo-professional-headshot.jpg`
   - **Location:** `public/images/profile/dr-desarbo-professional-headshot.jpg`
   - **Description:** Professional suit and tie headshot, gray background
   - **Usage:** About page, media section, placeholder for doctordesarbo.com

---

## Additional Screenshots to Review:

**Need to view and rename:**
- `Screenshot 2025-10-16 at 10.04.54 am.png`
- `Screenshot 2025-10-16 at 3.16.03 pm.png`
- `Screenshot 2025-10-22 at 11.18.07 AM.jpeg`
- `Screenshot 2025-10-23 at 11.27.04 AM (1).png` (duplicate?)

---

## File Organization Plan

### Create New Directory Structure:

```
public/images/
├── logos/
│   ├── bucketlist-doctor-logo.webp       # Main site logo
│   ├── ed180-logo.jpg                     # ED180 logo
│   └── (future: science-publishing-logo)
├── media/                                  # NEW - Media appearances
│   ├── ktrs-550-abc-news-radio-logo.png
│   ├── news12-long-island-logo.png
│   └── (future: newsday, podcast logos, etc.)
└── profile/
    ├── profile-pic-dr-d.png               # Existing casual photo
    └── dr-desarbo-professional-headshot.jpg  # NEW - Professional photo
```

---

## Renaming & Moving Operations

### Step 1: Create directories
```bash
mkdir -p public/images/logos
mkdir -p public/images/media
```

### Step 2: Copy and rename logos
```bash
cp "docs/squarespace-site-reference/screenshots/tips-ideas/BUCKETLISTDOCTOR-LOGO.webp" \
   "public/images/logos/bucketlist-doctor-logo.webp"

cp "docs/squarespace-site-reference/screenshots/tips-ideas/ED180-LOGO.jpg" \
   "public/images/logos/ed180-logo.jpg"
```

### Step 3: Copy and rename media appearances
```bash
cp "docs/squarespace-site-reference/screenshots/blog/imgs/Screenshot 2025-10-23 at 11.27.04 AM.png" \
   "public/images/media/ktrs-550-abc-news-radio-logo.png"

cp "docs/squarespace-site-reference/screenshots/blog/imgs/Screenshot 2025-10-23 at 11.28.50 AM.png" \
   "public/images/media/news12-long-island-logo.png"
```

### Step 4: Copy and rename profile images
```bash
cp "docs/squarespace-site-reference/screenshots/blog/imgs/doctor-desarbo-newprofile-pic.jpg" \
   "public/images/profile/dr-desarbo-professional-headshot.jpg"
```

---

## Code Updates Required

### Update #1: Navigation Logo
**File:** `components/layout/Navigation.tsx`
**Current (Line 24-27):**
```tsx
<Link href="/" className="flex items-center space-x-2">
  <div className="text-2xl font-display font-bold text-white">
    Bucket List Doctor
  </div>
</Link>
```

**Updated:**
```tsx
<Link href="/" className="flex items-center space-x-2">
  <Image
    src="/images/logos/bucketlist-doctor-logo.webp"
    alt="Bucket List Doctor"
    width={200}
    height={50}
    className="h-10 w-auto"
  />
</Link>
```

### Update #2: ED180 Logo in CrossSiteNavigation
**File:** `components/home/CrossSiteNavigation.tsx`
**Current (Line 16):**
```tsx
logo: '',
```

**Updated:**
```tsx
logo: '/images/logos/ed180-logo.jpg',
```

### Update #3: DoctorDesarbo.com Placeholder
**File:** `components/home/CrossSiteNavigation.tsx`
**Current (Line 25):**
```tsx
logo: '/images/profile/profile-pic-dr-d.png',
```

**Option 1: Keep casual photo (current)**
**Option 2: Use professional headshot**
```tsx
logo: '/images/profile/dr-desarbo-professional-headshot.jpg',
```

---

## New Component: Media Appearances Section

### Component Name: `MediaAppearances.tsx`
**Location:** `components/home/MediaAppearances.tsx`

### Purpose:
Showcase Dr. D's media credibility by displaying logos of radio shows, TV appearances, podcasts, and publications where he's been featured.

### Design:
- Section title: "As Seen On" or "Media Appearances" or "In The News"
- Grid of media logos (responsive: 2-4 columns)
- Grayscale logos with color on hover
- Optional: Click to see interview/article

### Data Structure:
```tsx
const mediaAppearances = [
  {
    name: 'KTRS 550 ABC News Radio',
    logo: '/images/media/ktrs-550-abc-news-radio-logo.png',
    url: 'https://550ktrs.com/', // Optional
    type: 'radio',
  },
  {
    name: 'News 12 Long Island',
    logo: '/images/media/news12-long-island-logo.png',
    url: 'https://longisland.news12.com/', // Optional
    type: 'tv',
  },
  // Future additions: Newsday, podcasts, etc.
];
```

### Placement Options:
1. **Homepage:** After AboutSection, before CrossSiteNavigation
2. **About Page:** After credentials section
3. **Both:** Show on both pages for maximum visibility

### Implementation Code:
```tsx
'use client';

import Image from 'next/image';

export default function MediaAppearances() {
  const mediaAppearances = [
    {
      name: 'KTRS 550 ABC News Radio',
      logo: '/images/media/ktrs-550-abc-news-radio-logo.png',
      type: 'radio',
    },
    {
      name: 'News 12 Long Island',
      logo: '/images/media/news12-long-island-logo.png',
      type: 'tv',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            As Featured In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. DeSarbo shares insights on neuroscience and bucket lists across major media outlets.
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {mediaAppearances.map((media) => (
            <div
              key={media.name}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={media.logo}
                alt={media.name}
                width={200}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Homepage Update Plan

### Current Homepage Structure:
```tsx
<AnimatedBrainHero />
<BucketListNavigation />
<ValueProp />
<BookShowcase />
<AboutSection />
<CrossSiteNavigation />
```

### Updated Homepage Structure:
```tsx
<AnimatedBrainHero />
<BucketListNavigation />
<ValueProp />
<BookShowcase />
<AboutSection />
<MediaAppearances />  // NEW - Shows credibility
<CrossSiteNavigation />
```

---

## About Page Enhancement

### Add Media Section After Credentials
**File:** `app/about/page.tsx`
**After:** Line 70 (after credentials grid)

**Insert:**
```tsx
{/* Media Appearances */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
    Featured Media Appearances
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md grayscale hover:grayscale-0 transition-all">
      <Image
        src="/images/media/ktrs-550-abc-news-radio-logo.png"
        alt="KTRS 550 ABC News Radio"
        width={150}
        height={75}
        className="w-full h-auto"
      />
    </div>
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md grayscale hover:grayscale-0 transition-all">
      <Image
        src="/images/media/news12-long-island-logo.png"
        alt="News 12 Long Island"
        width={150}
        height={75}
        className="w-full h-auto"
      />
    </div>
  </div>
</div>
```

---

## Future Media Assets to Request from Dr. D

### Additional Media Logos Needed:
- [ ] Newsday (if he's been featured)
- [ ] Any podcast appearances
- [ ] Any other radio shows
- [ ] Any print publications
- [ ] Any medical journals
- [ ] Any conference presentations

### Additional Images Needed:
- [ ] Dr. D on radio show (action shot)
- [ ] Dr. D speaking at event (if available)
- [ ] Book signing photos (if available)
- [ ] Travel/adventure photos for Tips & Ideas pages

---

## Favicon Update

### Current: Text-based logo
### Proposed: Use Bucket List Doctor logo

**File:** `app/favicon.ico`
**Generate from:** `public/images/logos/bucketlist-doctor-logo.webp`

**Tools:**
- Use favicon generator (favicon.io or similar)
- Create multiple sizes: 16x16, 32x32, 180x180, 512x512
- Generate favicon.ico and apple-touch-icon.png

---

## SEO & Social Media Updates

### Open Graph Images
Update all pages to use professional headshot or logo for social sharing:

**Current:** Book cover image
**Add:** Professional headshot for About page
**Add:** Logo for homepage

---

## Testing Checklist

After implementing:
- [ ] Logo displays correctly in navigation (desktop)
- [ ] Logo displays correctly in navigation (mobile)
- [ ] ED180 logo shows in CrossSiteNavigation
- [ ] DoctorDesarbo.com placeholder shows correctly
- [ ] Media logos display in grayscale
- [ ] Media logos show color on hover
- [ ] All images are optimized (not too large)
- [ ] Favicon updates correctly
- [ ] Professional headshot looks good on About page

---

## Performance Considerations

### Image Optimization:
- All logos should be WebP format (except where not supported)
- Maximum width: 400px for media logos
- Maximum width: 600px for profile images
- Use Next.js `<Image>` component for automatic optimization

### File Sizes:
- Logos: < 50KB each
- Profile images: < 200KB each
- Media logos: < 30KB each

---

**Status:** Ready to implement
**Estimated Time:** 1 hour for all changes
