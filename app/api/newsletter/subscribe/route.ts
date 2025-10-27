import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client } from 'pg';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Direct PostgreSQL client for newsletter (bypasses Supabase RLS)
async function addNewsletterSubscriberDirect(email: string) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // Check if email exists
    const checkResult = await client.query(
      'SELECT email, subscribed FROM newsletter_subscribers WHERE email = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      const existing = checkResult.rows[0];
      if (existing.subscribed) {
        // Treat as success - they're subscribed, just navigate them to newsletter
        return { success: true, message: 'You are already subscribed!', alreadySubscribed: true };
      } else {
        // Resubscribe
        await client.query(
          'UPDATE newsletter_subscribers SET subscribed = true WHERE email = $1',
          [email]
        );
        return { success: true, message: 'Welcome back! You have been resubscribed.' };
      }
    }

    // Insert new subscriber
    await client.query(
      'INSERT INTO newsletter_subscribers (email, subscribed) VALUES ($1, true)',
      [email]
    );

    return { success: true, message: 'Thank you for subscribing!' };
  } catch (error: any) {
    console.error('Error adding newsletter subscriber:', error);
    return { success: false, message: 'Failed to subscribe. Please try again.' };
  } finally {
    await client.end();
  }
}

// Lazy initialize Resend only when needed
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    console.log('⚠️ RESEND_API_KEY not found in environment');
    return null; // Email sending disabled if not configured
  }
  console.log('✅ RESEND_API_KEY found, initializing Resend client');
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add subscriber to database using direct PostgreSQL
    const result = await addNewsletterSubscriberDirect(email);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

    // Send welcome email if Resend is configured and it's a new subscription
    const resend = getResendClient();
    console.log('🔍 Resend client initialized:', !!resend);
    console.log('🔍 Result message:', result.message);
    console.log('🔍 Should send email:', resend && result.message.includes('Thank you for subscribing'));

    if (resend && result.message.includes('Thank you for subscribing')) {
      try {
        console.log('📧 Attempting to send welcome email to:', email);
        const unsubscribeUrl = `${process.env.NEXTAUTH_URL}/unsubscribe?email=${encodeURIComponent(email)}`;

        const emailResult = await resend.emails.send({
          from: 'Bucket List Doctor <onboarding@resend.dev>',
          to: [email],
          subject: 'Welcome to Bucket List Doctor! 🧠✨',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #4A90E2; margin-bottom: 10px;">Welcome to Bucket List Doctor!</h1>
                <p style="color: #666; font-size: 18px;">The Neuroscience of Living Your Best Life</p>
              </div>

              <div style="background: linear-gradient(135deg, #4A90E2 0%, #B968E0 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
                <p style="color: white; font-size: 16px; line-height: 1.6; margin: 0;">
                  Thank you for joining our community! I'm Dr. Jeffrey DeSarbo, and I'm excited to share insights on how bucket lists activate neuroplasticity, goal-setting, and brain health.
                </p>
              </div>

              <div style="margin-bottom: 30px;">
                <h2 style="color: #2B4C6F; margin-bottom: 15px;">What to Expect</h2>
                <ul style="color: #666; line-height: 1.8;">
                  <li>🧠 Brain science insights and neuroscience research</li>
                  <li>🌍 Bucket list inspiration from a 7-continent traveler</li>
                  <li>📚 Updates on new books and projects</li>
                  <li>💡 Tips for goal-setting and personal growth</li>
                  <li>🎙️ Radio show highlights and interviews</li>
                </ul>
              </div>

              <div style="background: #F5E6D3; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="color: #2B4C6F; margin-top: 0; margin-bottom: 10px;">📖 Get the Book</h3>
                <p style="color: #666; margin-bottom: 15px;">
                  Dive deeper into the science behind bucket lists with my book:
                  <strong>"The Neuroscience of a Bucket List"</strong>
                </p>
                <a href="https://a.co/d/559YKwr" style="display: inline-block; background: linear-gradient(135deg, #4A90E2, #B968E0); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                  Get Your Copy
                </a>
              </div>

              <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                <p style="color: #999; font-size: 14px; margin-bottom: 10px;">
                  Follow the journey:
                </p>
                <div style="margin-bottom: 20px;">
                  <a href="https://facebook.com/bucketlistdoctor" style="color: #4A90E2; text-decoration: none; margin: 0 10px;">Facebook</a>
                  <a href="https://instagram.com/bucketlistdoctor" style="color: #4A90E2; text-decoration: none; margin: 0 10px;">Instagram</a>
                  <a href="https://linkedin.com/in/drdesarbo" style="color: #4A90E2; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                  <a href="https://youtube.com/@dr.jeffreydesarbo2584" style="color: #4A90E2; text-decoration: none; margin: 0 10px;">YouTube</a>
                </div>
                <p style="color: #999; font-size: 12px;">
                  You're receiving this email because you subscribed at bucketlistdoctor.com<br/>
                  <a href="${unsubscribeUrl}" style="color: #999; text-decoration: underline;">Unsubscribe</a>
                </p>
              </div>
            </div>
          `,
        });

        console.log('✅ Welcome email sent successfully!', emailResult);
      } catch (emailError) {
        console.error('❌ Error sending welcome email:', emailError);
        // Don't fail the request if email fails - subscriber is already added
      }
    } else {
      console.log('⚠️ Skipping email send - Resend not configured or not a new subscription');
    }

    return NextResponse.json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
