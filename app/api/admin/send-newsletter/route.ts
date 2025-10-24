import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getActiveSubscribers } from '@/lib/db/newsletter';
import { Resend } from 'resend';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Lazy initialize Resend only when needed
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { subject, content } = await request.json();

    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Subject and content are required' },
        { status: 400 }
      );
    }

    // Get active subscribers
    const subscribers = await getActiveSubscribers();

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: 'No active subscribers found' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to environment.' },
        { status: 500 }
      );
    }

    // Get Resend client
    const resend = getResendClient();

    // Send emails (in batches to avoid rate limits)
    const batchSize = 50;
    let sentCount = 0;
    const errors = [];

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);

      try {
        // Send individual emails with unsubscribe link
        const promises = batch.map(async (subscriber) => {
          const unsubscribeUrl = `${process.env.NEXTAUTH_URL}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`;

          const htmlContent = `
            ${content}
            <br/><br/>
            <hr style="margin: 40px 0; border: none; border-top: 1px solid #e5e5e5;"/>
            <p style="color: #666; font-size: 12px; text-align: center;">
              You're receiving this email because you subscribed to Bucket List Doctor newsletter.<br/>
              <a href="${unsubscribeUrl}" style="color: #666; text-decoration: underline;">Unsubscribe</a>
            </p>
          `;

          return resend.emails.send({
            from: 'Dr. Jeffrey DeSarbo <newsletter@bucketlistdoctor.com>',
            to: [subscriber.email],
            subject: subject,
            html: htmlContent,
          });
        });

        await Promise.all(promises);
        sentCount += batch.length;
      } catch (error) {
        console.error('Error sending batch:', error);
        errors.push(error);
      }

      // Small delay between batches
      if (i + batchSize < subscribers.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    return NextResponse.json({
      success: true,
      sent: sentCount,
      total: subscribers.length,
      errors: errors.length,
    });
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return NextResponse.json(
      { error: 'Failed to send newsletter' },
      { status: 500 }
    );
  }
}
