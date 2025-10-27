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
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const post = result.rows[0];

    // Increment view count
    await client.query(
      `UPDATE blog_posts SET view_count = view_count + 1 WHERE id = $1`,
      [post.id]
    );

    // Return post with incremented view count
    post.view_count = post.view_count + 1;

    return NextResponse.json({ post });
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
