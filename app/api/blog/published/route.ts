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

// GET /api/blog/published - Get all published blog posts
export async function GET() {
  const client = getClient();

  try {
    await client.connect();

    const result = await client.query(
      `SELECT
        id, title, slug, excerpt, content, status,
        created_at, updated_at, published_at, view_count,
        featured_image_url, meta_description
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY published_at DESC NULLS LAST, created_at DESC`
    );

    return NextResponse.json({ posts: result.rows });
  } catch (error) {
    console.error('Error fetching published blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', posts: [] },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
