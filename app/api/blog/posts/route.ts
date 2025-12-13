import { NextResponse } from 'next/server';
import { Client } from 'pg';

// Force dynamic rendering - don't cache API responses
export const dynamic = 'force-dynamic';

// Allow self-signed certificates in serverless environments (Vercel)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// PostgreSQL client factory
function getClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

/**
 * Get Published Blog Posts API
 * Fetches all published blog posts for public display
 */
export async function GET() {
  const client = getClient();

  try {
    await client.connect();

    const result = await client.query(`
      SELECT
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        published_at,
        view_count
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY published_at DESC
    `);

    return NextResponse.json({
      posts: result.rows,
      count: result.rows.length,
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts',
        message: errorMessage,
        posts: [], 
        count: 0 
      },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
