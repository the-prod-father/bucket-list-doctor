import { NextResponse } from 'next/server';
import { withRetryOrEmpty } from '@/lib/db/retry';

export const dynamic = 'force-dynamic';

// GET /api/blog/published - Get all published blog posts
// Uses withRetryOrEmpty (3 retries + pooled connection) so a transient
// Supabase cold-start timeout no longer silently returns an empty list.
export async function GET() {
  const posts = await withRetryOrEmpty(async (client) => {
    const result = await client.query(
      `SELECT
        id, title, slug, excerpt, content, status,
        created_at, updated_at, published_at, view_count,
        featured_image_url, meta_description
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY published_at DESC NULLS LAST, created_at DESC`
    );
    return result.rows;
  });

  return NextResponse.json({ posts });
}
