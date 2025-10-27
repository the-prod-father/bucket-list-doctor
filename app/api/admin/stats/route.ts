import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
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

// GET /api/admin/stats - Get dashboard statistics (admin only)
export async function GET() {
  const session = await getServerSession(authOptions);

  // Check if user is authenticated and is an admin or super_admin
  if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const client = getClient();

  try {
    await client.connect();

    // Get newsletter subscribers count
    const subscribersResult = await client.query(
      'SELECT COUNT(*) as count FROM newsletter_subscribers WHERE subscribed = true'
    );
    const subscribersCount = parseInt(subscribersResult.rows[0].count);

    // Get blog posts count
    const postsResult = await client.query(
      'SELECT COUNT(*) as count FROM blog_posts WHERE status = $1',
      ['published']
    );
    const postsCount = parseInt(postsResult.rows[0].count);

    // Get total views across all posts
    const viewsResult = await client.query(
      'SELECT SUM(view_count) as total FROM blog_posts WHERE status = $1',
      ['published']
    );
    const totalViews = parseInt(viewsResult.rows[0].total) || 0;

    // Get active users count (users who have logged in recently or are active)
    const usersResult = await client.query(
      'SELECT COUNT(*) as count FROM users WHERE is_active = true'
    );
    const usersCount = parseInt(usersResult.rows[0].count);

    return NextResponse.json({
      subscribers: subscribersCount,
      posts: postsCount,
      views: totalViews,
      users: usersCount,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
