import { NextResponse } from 'next/server';
import { Client } from 'pg';

/**
 * Get Published Blog Posts API
 * Fetches all published blog posts for public display
 */
export async function GET() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });

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
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', posts: [], count: 0 },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
