# After Action Review (AAR): Newsletter Article 404 Issue

**Date:** December 18, 2025  
**Issue:** Sporadic 404 errors when users click on newsletter articles from the Articles tab  
**Status:** ✅ RESOLVED

---

## Executive Summary

Users reported intermittent 404 "Page Not Found" errors when clicking on newsletter articles from the Articles tab (`/newsletter`). The issue was sporadic - refreshing the page would eventually load the content. Root cause was identified as missing Next.js dynamic route configuration and improper caching behavior.

---

## Problem Statement

### Symptoms
- Users navigate to `/newsletter` (Articles tab)
- Click on an article link (e.g., `/newsletter/article-slug`)
- Receive 404 "Page Not Found" error
- Refreshing the page eventually loads the content successfully
- Issue occurs sporadically, not consistently

### Impact
- Poor user experience
- Potential loss of engagement
- Users may think content doesn't exist
- SEO impact from 404 errors

---

## Root Cause Analysis

### Primary Root Cause
**Missing Next.js Dynamic Route Configuration**

The `/app/newsletter/[slug]/page.tsx` file was missing critical Next.js configuration exports that tell the framework how to handle dynamic routes:

1. **Missing `export const dynamic = 'force-dynamic'`**
   - Next.js was attempting to statically generate pages at build time
   - Dynamic routes with slugs that don't exist at build time were failing
   - This caused 404s when users navigated to newly published articles

2. **Missing `export const dynamicParams = true`**
   - Next.js defaults to `false` for `dynamicParams` in production
   - This means routes with params not generated at build time return 404
   - Our articles are created dynamically after deployment, so they weren't in the build

3. **Missing `export const revalidate = 0`**
   - Without explicit revalidation, Next.js may cache pages
   - Stale cached pages could show 404s for posts that were just published

### Secondary Issues
- **No cache headers on API responses**: The `/api/blog/[slug]` route didn't set proper cache-control headers
- **No retry logic in client component**: Single fetch failure would show error immediately
- **Metadata generation errors not handled**: If `generateMetadata()` failed, it could cause page generation to fail

---

## Solution Implemented

### 1. Added Dynamic Route Configuration
**File:** `app/newsletter/[slug]/page.tsx`

```typescript
// Force dynamic rendering - don't cache or statically generate these pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true; // Allow dynamic params that weren't generated at build time
export const revalidate = 0; // Never cache
```

**Why this fixes it:**
- `force-dynamic` ensures pages are rendered on-demand, not at build time
- `dynamicParams = true` allows routes with params not known at build time
- `revalidate = 0` prevents caching that could serve stale 404s

### 2. Enhanced Error Handling in Metadata Generation
**File:** `app/newsletter/[slug]/page.tsx`

Wrapped `generateMetadata()` in try-catch to handle database connection failures gracefully:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPost(params.slug);
    // ... metadata generation
  } catch (error) {
    // Return fallback metadata instead of failing
    console.error('Error generating metadata for newsletter post:', error);
    return {
      title: 'Article | Bucket List Doctor',
      description: 'Read articles from Dr. Jeffrey DeSarbo on neuroscience and bucket lists.',
    };
  }
}
```

### 3. Added Cache-Control Headers to API Route
**File:** `app/api/blog/[slug]/route.ts`

```typescript
// Set cache headers to prevent stale data
const response = NextResponse.json({ post });
response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
response.headers.set('Pragma', 'no-cache');
response.headers.set('Expires', '0');
return response;
```

Also added cache headers to 404 responses to prevent caching of "not found" states.

### 4. Improved Client-Side Fetch with Retry Logic
**File:** `components/newsletter/NewsletterPostClient.tsx`

- Added `cache: 'no-store'` to fetch requests
- Added explicit cache-control headers
- Implemented retry logic for transient failures
- Better error messages for users

---

## Testing & Verification

### Test Cases
1. ✅ Navigate to `/newsletter` and click on an article → Should load immediately
2. ✅ Navigate directly to `/newsletter/non-existent-slug` → Should show proper error message
3. ✅ Publish a new article and immediately navigate to it → Should load without refresh
4. ✅ Check browser network tab → Should see `Cache-Control: no-store` headers
5. ✅ Verify API endpoint returns proper cache headers

### Verification Steps
```bash
# Test API endpoint
curl -I http://localhost:9000/api/blog/test-slug
# Should see: Cache-Control: no-store, no-cache, must-revalidate

# Test page rendering
curl http://localhost:9000/newsletter/test-slug
# Should return 200 with error message (not 404)
```

---

## Prevention & Best Practices

### For Future Dynamic Routes

1. **Always add dynamic route configuration** when creating `[param]` routes:
   ```typescript
   export const dynamic = 'force-dynamic';
   export const dynamicParams = true;
   export const revalidate = 0; // or appropriate revalidation time
   ```

2. **Handle metadata generation errors**:
   - Wrap `generateMetadata()` in try-catch
   - Return fallback metadata instead of throwing
   - Log errors for debugging

3. **Set proper cache headers on API routes**:
   - Use `Cache-Control: no-store` for dynamic content
   - Don't cache 404 responses
   - Consider revalidation times for semi-static content

4. **Add retry logic for client-side fetches**:
   - Network errors are transient
   - Retry once before showing error
   - Provide clear error messages

5. **Test dynamic routes thoroughly**:
   - Test with params that don't exist at build time
   - Test immediately after creating new content
   - Test with slow network conditions

### Code Review Checklist

When reviewing PRs with dynamic routes, check:
- [ ] `export const dynamic = 'force-dynamic'` is present
- [ ] `export const dynamicParams = true` is set (if needed)
- [ ] `generateMetadata()` has error handling
- [ ] API routes have proper cache headers
- [ ] Client components have retry logic for fetches
- [ ] Test cases cover dynamic param scenarios

---

## Lessons Learned

### What Went Well
- Issue was identified quickly through user reports
- Root cause was clear once we examined the code
- Fix was straightforward and well-documented

### What Could Be Improved
- **Proactive testing**: Should have tested dynamic routes more thoroughly during initial development
- **Documentation**: Should have documented Next.js dynamic route requirements in project docs
- **Monitoring**: Could add error tracking to catch 404s on dynamic routes automatically

### Key Takeaways
1. **Next.js dynamic routes require explicit configuration** - don't assume defaults work for all use cases
2. **Caching can cause stale 404s** - always set appropriate cache headers for dynamic content
3. **Error handling is critical** - metadata generation failures can break page rendering
4. **User reports are valuable** - sporadic issues often indicate caching or timing problems

---

## Related Files Changed

1. `app/newsletter/[slug]/page.tsx` - Added dynamic route config and error handling
2. `app/api/blog/[slug]/route.ts` - Added cache headers
3. `components/newsletter/NewsletterPostClient.tsx` - Added retry logic and cache-busting

---

## Deployment Notes

- ✅ Changes are backward compatible
- ✅ No database migrations required
- ✅ No environment variable changes needed
- ✅ Can be deployed immediately

**Recommended deployment:**
1. Deploy to staging and verify
2. Monitor error logs for 24 hours
3. Deploy to production
4. Continue monitoring for any edge cases

---

## References

- [Next.js Dynamic Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Next.js Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
- [Next.js Caching Documentation](https://nextjs.org/docs/app/building-your-application/caching)

---

**Document Owner:** Development Team  
**Last Updated:** December 18, 2025  
**Status:** ✅ Resolved - Ready for Production
