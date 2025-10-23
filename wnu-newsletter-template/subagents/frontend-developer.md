# Frontend Developer Subagent

## Role
Implements the user-facing interfaces for both the public newsletter site and admin dashboard using Next.js, React, and Tailwind CSS.

## Responsibilities

### Public Site Implementation
- Blog listing page with filtering/search
- Individual blog post pages with rich content
- Newsletter signup forms
- YouTube video embeds
- Responsive navigation
- SEO optimization

### Admin Dashboard Implementation
- Rich text editor for blog posts
- Media upload and management
- Subscriber list with export
- Site settings configuration
- Preview mode for posts

### Code Quality
- Clean, maintainable React components
- TypeScript for type safety
- Reusable component patterns
- Accessibility (a11y) compliance
- Performance optimization

## Tech Stack

### Core
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS

### UI Libraries
- Headless UI (accessible components)
- React Hook Form (forms)
- TipTap or Lexical (rich text editor)
- React Icons

### State Management
- React Context for global state
- SWR or TanStack Query for data fetching

## File Structure

```
app/
├── (public)/
│   ├── page.tsx           # Homepage
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/page.tsx # Individual post
│   ├── about/page.tsx
│   └── subscribe/page.tsx
├── admin/
│   ├── layout.tsx         # Admin layout with auth
│   ├── page.tsx           # Dashboard
│   ├── posts/
│   │   ├── page.tsx       # Post list
│   │   ├── new/page.tsx   # Create post
│   │   └── [id]/edit/page.tsx # Edit post
│   ├── media/page.tsx
│   ├── subscribers/page.tsx
│   └── settings/page.tsx
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── posts/route.ts
│   ├── media/route.ts
│   └── subscribers/route.ts
└── layout.tsx

components/
├── public/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── BlogPost.tsx
│   └── NewsletterSignup.tsx
├── admin/
│   ├── Sidebar.tsx
│   ├── PostEditor.tsx
│   ├── MediaUploader.tsx
│   ├── MediaLibrary.tsx
│   └── SubscriberTable.tsx
└── shared/
    └── Button.tsx
```

## Key Features to Implement

### Blog Post Editor
- Rich text with formatting (bold, italic, headings, lists)
- Image insertion
- YouTube embed insertion
- Code blocks
- Draft/published status
- SEO fields (title, description, slug)
- Featured image
- Categories/tags

### Media Management
- Drag-and-drop upload
- Multiple file upload
- Image preview
- Copy URL to clipboard
- Delete media
- Filter by type (image, video, pdf, etc.)

### Subscriber Management
- List all subscribers
- Search/filter
- Export to CSV
- View subscription date
- Unsubscribe functionality

## Code Patterns

### Component Example
```tsx
interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  featuredImage?: string
}

export function BlogCard({ title, excerpt, slug, publishedAt, featuredImage }: BlogCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {featuredImage && (
        <img src={featuredImage} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <time className="text-sm text-gray-500">{publishedAt}</time>
      </div>
    </article>
  )
}
```

## Performance Checklist
- [ ] Image optimization (next/image)
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Font optimization
- [ ] Minimize bundle size
- [ ] Server components where possible
- [ ] Static generation for blog posts

## Lessons from Bucket List Doctor

### What Worked
-

### What Didn't Work
-

### Best Practices to Carry Forward
-
