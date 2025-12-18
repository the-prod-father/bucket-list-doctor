import { NextResponse } from 'next/server';
import { Client } from 'pg';

export const dynamic = 'force-dynamic';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// PostgreSQL client
function getClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

// GET /api/blog/[slug] - Get a single blog post by slug and increment view count
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const client = getClient();

  try {
    await client.connect();

    // First, get the post
    const result = await client.query(
      `SELECT
        id, title, slug, excerpt, content, status,
        created_at, updated_at, published_at, view_count,
        featured_image_url, meta_description
      FROM blog_posts
      WHERE slug = $1 AND status = 'published'`,
      [params.slug]
    );

    if (result.rows.length === 0) {
      const notFoundResponse = NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
      // Don't cache 404s - the post might be published later
      notFoundResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      notFoundResponse.headers.set('Pragma', 'no-cache');
      return notFoundResponse;
    }

    const post = result.rows[0];

    // Increment view count
    await client.query(
      `UPDATE blog_posts SET view_count = view_count + 1 WHERE id = $1`,
      [post.id]
    );

    // Return post with incremented view count
    post.view_count = post.view_count + 1;

    // Set cache headers to prevent stale data
    const response = NextResponse.json({ post });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
