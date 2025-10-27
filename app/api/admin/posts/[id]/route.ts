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

// DELETE /api/admin/posts/[id] - Delete a blog post (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  // Check if user is authenticated and is an admin
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const client = getClient();

  try {
    await client.connect();

    // Check if post exists
    const checkResult = await client.query(
      'SELECT id FROM blog_posts WHERE id = $1',
      [params.id]
    );

    if (checkResult.rows.length === 0) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Delete the post
    await client.query('DELETE FROM blog_posts WHERE id = $1', [params.id]);

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
