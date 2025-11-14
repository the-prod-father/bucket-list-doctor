import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getActiveSubscribers } from '@/lib/db/newsletter';
import { sendSMTPEmail, verifySMTPConnection } from '@/lib/email/smtp';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/**
 * GET /api/admin/check-email-config
 * Diagnostic endpoint to check email configuration and test sending
 * Admin only
 */
export async function GET(request: NextRequest) {
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

    const diagnostics: any = {
      smtpConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD),
      smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com (default)',
      smtpPort: process.env.SMTP_PORT || '587 (default)',
      smtpUser: process.env.SMTP_USER ? `${process.env.SMTP_USER.substring(0, 3)}***` : 'not set',
      smtpFrom: process.env.SMTP_FROM || 'support@whynotus.ai (default)',
      activeSubscribers: 0,
      testEmailResult: null,
      smtpVerification: null,
    };

    // Get subscriber count
    try {
      const subscribers = await getActiveSubscribers();
      diagnostics.activeSubscribers = subscribers.length;
      diagnostics.sampleSubscribers = subscribers.slice(0, 3).map(s => ({
        email: s.email,
        subscribed: s.subscribed,
      }));
    } catch (error) {
      diagnostics.subscriberError = error instanceof Error ? error.message : String(error);
    }

    // Verify SMTP connection if configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        const verification = await verifySMTPConnection();
        diagnostics.smtpVerification = verification;
      } catch (error) {
        diagnostics.smtpVerification = {
          success: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }

      // Try to send a test email to the admin's email
      if (session.user?.email) {
        try {
          const testResult = await sendSMTPEmail({
            to: session.user.email,
            subject: 'Test Email from Bucket List Doctor',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #4A90E2;">Test Email</h1>
                <p>This is a test email to verify SMTP is configured correctly.</p>
                <p>If you received this, email sending is working!</p>
              </div>
            `,
          });

          diagnostics.testEmailResult = {
            success: testResult.success,
            messageId: testResult.messageId,
            message: testResult.success ? 'Test email sent successfully' : 'Failed to send test email',
            error: testResult.error,
            sentTo: session.user.email,
          };
        } catch (testError: any) {
          diagnostics.testEmailResult = {
            success: false,
            error: testError?.message || String(testError),
            sentTo: session.user.email,
          };
        }
      }
    }

    return NextResponse.json({
      diagnostics,
      recommendations: [
        !diagnostics.smtpConfigured && 'SMTP_USER or SMTP_PASSWORD is not configured. Add them to environment variables.',
        diagnostics.smtpConfigured && diagnostics.smtpVerification?.success === false && `SMTP connection failed: ${diagnostics.smtpVerification?.error}`,
        diagnostics.smtpConfigured && diagnostics.activeSubscribers === 0 && 'No active subscribers found. Add subscribers first.',
        diagnostics.testEmailResult?.success === false && `Test email failed: ${diagnostics.testEmailResult?.error}`,
        diagnostics.testEmailResult?.success === true && '✅ Email configuration is working! Check your inbox.',
      ].filter(Boolean),
    });
  } catch (error) {
    console.error('Error checking email config:', error);
    return NextResponse.json(
      { 
        error: 'Failed to check email configuration',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

