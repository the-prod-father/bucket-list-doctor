# Newsletter Template: Do's and Don'ts

This guide captures critical lessons learned while building newsletter sites.

## Architecture

### ✅ DO
- Use Next.js App Router for better performance and DX
- Implement proper separation between public and admin routes
- Use environment variables for all configuration
- Design database schema with future scaling in mind
- Plan for content migration from day one

### ❌ DON'T
- Mix public and admin logic in the same components
- Hard-code any client-specific values
- Skip database indexes on frequently queried columns
- Ignore mobile experience
- Over-engineer the initial version

## Authentication

### ✅ DO
- Keep it simple (username/password is fine)
- Use established libraries (NextAuth.js)
- Implement proper session management
- Hash passwords with bcrypt
- Add rate limiting to login endpoints

### ❌ DON'T
- Roll your own crypto
- Store passwords in plain text
- Skip HTTPS in production
- Make auth overly complex (no OAuth unless requested)
- Forget password reset functionality

## Content Management

### ✅ DO
- Autosave drafts frequently
- Support markdown and rich text
- Allow preview before publishing
- Make media uploads drag-and-drop
- Provide clear publishing workflow

### ❌ DON'T
- Lose user's work (always autosave)
- Limit media file types unnecessarily
- Make the editor confusing
- Skip image optimization
- Forget alt text for images

## Database Design

### ✅ DO
- Use UUIDs for primary keys
- Add created_at and updated_at timestamps
- Index foreign keys and frequently searched columns
- Plan for soft deletes (deleted_at)
- Version your schema with migrations

### ❌ DON'T
- Use auto-incrementing integers (hard to merge databases)
- Skip indexes (performance will suffer)
- Delete data permanently without backups
- Change schema without migrations
- Forget to back up the database

## Performance

### ✅ DO
- Optimize images (use next/image)
- Implement caching strategies
- Use static generation for blog posts
- Lazy load below-the-fold content
- Monitor Core Web Vitals

### ❌ DON'T
- Load huge unoptimized images
- Fetch data on every request when you can cache
- Ignore bundle size
- Skip performance testing
- Assume fast internet

## User Experience

### ✅ DO
- Provide instant feedback on actions
- Show loading states
- Display clear error messages
- Make navigation intuitive
- Test on real devices

### ❌ DON'T
- Leave users wondering if an action worked
- Show technical error messages to end users
- Hide important actions
- Assume users know how to use the system
- Only test on desktop

## Email Newsletters

### ✅ DO
- Test emails in multiple clients
- Provide plain text version
- Include unsubscribe link (legally required)
- Track open rates and clicks
- Respect subscriber preferences

### ❌ DON'T
- Send without testing
- Forget unsubscribe functionality
- Email too frequently
- Buy email lists
- Ignore bounce rates

## Deployment

### ✅ DO
- Use environment variables for configuration
- Set up staging environment
- Implement CI/CD
- Monitor errors in production
- Have rollback plan

### ❌ DON'T
- Commit secrets to git
- Deploy directly to production
- Skip testing migrations
- Ignore production errors
- Deploy on Fridays (unless necessary)

## Documentation

### ✅ DO
- Document setup steps clearly
- Include troubleshooting section
- Provide code examples
- Keep docs updated
- Write for your future self

### ❌ DON'T
- Assume knowledge
- Skip edge cases
- Let docs get stale
- Use jargon without explanation
- Write docs after you forget how it works

## Client Handoff

### ✅ DO
- Provide video walkthrough
- Create admin user guide
- Set up support channel
- Transfer all credentials securely
- Schedule follow-up check-in

### ❌ DON'T
- Assume they know how to use it
- Send passwords in plain text
- Disappear after launch
- Skip training session
- Forget to transfer domain ownership

## Lessons from Bucket List Doctor Build

(This section will be filled in as we build and learn)

### What Worked Great
-

### What Was Painful
-

### What We'll Do Differently
-

### Unexpected Challenges
-

### Pleasant Surprises
-
