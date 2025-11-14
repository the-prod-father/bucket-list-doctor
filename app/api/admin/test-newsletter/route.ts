import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getPublishedBlogPosts } from '@/lib/db/blog';
import { sendBlogPostNotification } from '@/lib/email/blogPostNotification';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/**
 * POST /api/admin/test-newsletter
 * Test endpoint to send the latest published blog post to all subscribers
 * Admin only - for testing newsletter email functionality
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    if (session.user?.role !== 'admin' && session.user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 });
    }

    // Get latest published blog post
    const publishedPosts = await getPublishedBlogPosts();

    if (publishedPosts.length === 0) {
      return NextResponse.json(
        { 
          error: 'No published posts found',
          message: 'Please publish at least one blog post before testing the newsletter.'
        },
        { status: 400 }
      );
    }

    // Get the most recent published post (first in DESC order)
    const latestPost = publishedPosts[0];

    console.log(`📧 Test newsletter: Sending latest post "${latestPost.title}" to subscribers`);

    // Send email notification
    const result = await sendBlogPostNotification(latestPost);

    // Check if SMTP is configured
    const smtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

    if (result.success && result.sent > 0) {
      return NextResponse.json({
        success: true,
        message: `Test newsletter sent successfully!`,
        post: {
          id: latestPost.id,
          title: latestPost.title,
          slug: latestPost.slug,
        },
        emailStats: {
          sent: result.sent,
          total: result.total,
          errors: result.errors.length,
          errorDetails: result.errors.length > 0 ? result.errors : undefined,
        },
        smtpConfigured,
        note: smtpConfigured 
          ? 'Emails were sent via SMTP. Check your inbox and spam folder.'
          : 'WARNING: SMTP_USER or SMTP_PASSWORD not configured. Emails were not actually sent.',
      });
    } else if (result.sent === 0 && result.total > 0) {
      return NextResponse.json({
        success: false,
        message: `No emails were sent. Check configuration.`,
        post: {
          id: latestPost.id,
          title: latestPost.title,
          slug: latestPost.slug,
        },
        emailStats: {
          sent: result.sent,
          total: result.total,
          errors: result.errors,
        },
        smtpConfigured,
        warning: !smtpConfigured 
          ? 'SMTP_USER or SMTP_PASSWORD is not configured. Add them to environment variables to enable email sending.'
          : 'Emails failed to send. Check error details above.',
      }, { status: 500 });
    } else {
      return NextResponse.json({
        success: result.success,
        message: result.errors.length > 0 ? `Newsletter sent with ${result.errors.length} errors` : 'Newsletter sent',
        post: {
          id: latestPost.id,
          title: latestPost.title,
          slug: latestPost.slug,
        },
        emailStats: {
          sent: result.sent,
          total: result.total,
          errors: result.errors,
        },
        smtpConfigured,
      }, { status: result.success ? 200 : 207 });
    }
  } catch (error) {
    console.error('Error sending test newsletter:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { 
        error: 'Failed to send test newsletter',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/admin/test-newsletter
 * Get info about the latest published post (without sending)
 */
export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    if (session.user?.role !== 'admin' && session.user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 });
    }

    // Get latest published blog post
    const publishedPosts = await getPublishedBlogPosts();

    if (publishedPosts.length === 0) {
      return NextResponse.json({
        hasPosts: false,
        message: 'No published posts found',
      });
    }

    const latestPost = publishedPosts[0];
    const baseUrl = process.env.NEXTAUTH_URL || 'https://bucketlistdoctor.com';
    const postUrl = `${baseUrl}/newsletter/${latestPost.slug}`;

    return NextResponse.json({
      hasPosts: true,
      latestPost: {
        id: latestPost.id,
        title: latestPost.title,
        slug: latestPost.slug,
        excerpt: latestPost.excerpt,
        published_at: latestPost.published_at,
        url: postUrl,
      },
      message: `Latest post: "${latestPost.title}" - Ready to send test newsletter`,
    });
  } catch (error) {
    console.error('Error fetching latest post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch latest post' },
      { status: 500 }
    );
  }
}

