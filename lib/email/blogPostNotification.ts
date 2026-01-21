import { getActiveSubscribers } from '@/lib/db/newsletter';
import { BlogPost } from '@/lib/db/blog';
import { sendSMTPEmail } from './smtp';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Strip HTML tags and get plain text preview (server-side)
function stripHtml(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

// Generate email HTML template for blog post notification
function generateEmailHtml(post: BlogPost, unsubscribeUrl: string): string {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://bucketlistdoctor.com';
  const postUrl = `${baseUrl}/newsletter/${post.slug}`;
  
  // Get excerpt or first 200 chars of content
  const preview = post.excerpt || stripHtml(post.content).slice(0, 200) + '...';
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #4A90E2; margin-bottom: 10px;">New from Bucket List Doctor</h1>
        <p style="color: #666; font-size: 18px;">The Neuroscience of Living Your Best Life</p>
      </div>

      <div style="background: linear-gradient(135deg, #4A90E2 0%, #B968E0 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
        <h2 style="color: white; font-size: 24px; margin-top: 0; margin-bottom: 15px;">${post.title}</h2>
        <p style="color: white; font-size: 16px; line-height: 1.6; margin: 0;">
          ${preview}
        </p>
      </div>

      <div style="text-align: center; margin-bottom: 30px;">
        <a href="${postUrl}" style="display: inline-block; background: linear-gradient(135deg, #4A90E2, #B968E0); color: white; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px;">
          Read More →
        </a>
      </div>

      <div style="background: #F5E6D3; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
        <h3 style="color: #2B4C6F; margin-top: 0; margin-bottom: 10px;">📖 Get the Book</h3>
        <p style="color: #666; margin-bottom: 15px;">
          Dive deeper into the science behind bucket lists with Dr. DeSarbo's book:
          <strong>"The Neuroscience of a Bucket List"</strong>
        </p>
        <a href="https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0" style="display: inline-block; background: linear-gradient(135deg, #4A90E2, #B968E0); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
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
          You're receiving this email because you subscribed to Bucket List Doctor newsletter.<br/>
          <a href="${unsubscribeUrl}" style="color: #999; text-decoration: underline;">Unsubscribe</a>
        </p>
      </div>
    </div>
  `;
}

export async function sendBlogPostNotification(post: BlogPost): Promise<{
  success: boolean;
  sent: number;
  total: number;
  errors: string[];
}> {
  try {
    // Get active subscribers
    const subscribers = await getActiveSubscribers();

    if (subscribers.length === 0) {
      console.log('📧 No active subscribers found, skipping email notification');
      return {
        success: true,
        sent: 0,
        total: 0,
        errors: [],
      };
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('⚠️ SMTP_USER or SMTP_PASSWORD not configured, skipping email notification');
      return {
        success: false,
        sent: 0,
        total: subscribers.length,
        errors: ['SMTP_USER or SMTP_PASSWORD not configured'],
      };
    }

    console.log(`📧 Sending blog post notification to ${subscribers.length} subscribers for post: ${post.title}`);

    // Send emails in batches to avoid rate limits
    const batchSize = 10; // Smaller batches for SMTP to avoid overwhelming the server
    let sentCount = 0;
    const errors: string[] = [];
    const baseUrl = process.env.NEXTAUTH_URL || 'https://bucketlistdoctor.com';
    const fromEmail = process.env.SMTP_FROM || 'Dr. Jeffrey DeSarbo <support@whynotus.ai>';

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);

      try {
        // Send individual emails with unsubscribe link
        const promises = batch.map(async (subscriber) => {
          const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`;
          const htmlContent = generateEmailHtml(post, unsubscribeUrl);

          const result = await sendSMTPEmail({
            from: fromEmail,
            to: subscriber.email,
            subject: `New from Bucket List Doctor: ${post.title}`,
            html: htmlContent,
          });

          if (!result.success) {
            throw new Error(result.error || 'Failed to send email');
          }

          return result;
        });

        const results = await Promise.allSettled(promises);
        
        // Count successful sends
        let batchSent = 0;
        results.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value.success) {
            batchSent++;
            const subscriber = batch[index];
            console.log(`📧 Email sent to ${subscriber.email}:`, {
              messageId: result.value.messageId,
              status: 'success',
            });
          } else {
            const subscriber = batch[index];
            const errorMsg = result.status === 'rejected' 
              ? result.reason?.message || String(result.reason)
              : result.value.error || 'Unknown error';
            console.error(`❌ Failed to send to ${subscriber.email}:`, errorMsg);
            errors.push(`${subscriber.email}: ${errorMsg}`);
          }
        });

        sentCount += batchSent;
        console.log(`✅ Sent batch ${Math.floor(i / batchSize) + 1}: ${batchSent}/${batch.length} emails sent successfully`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ Error sending batch ${Math.floor(i / batchSize) + 1}:`, errorMessage);
        errors.push(`Batch ${Math.floor(i / batchSize) + 1}: ${errorMessage}`);
      }

      // Small delay between batches to avoid rate limits
      if (i + batchSize < subscribers.length) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Longer delay for SMTP
      }
    }

    console.log(`📧 Email notification complete: ${sentCount}/${subscribers.length} sent, ${errors.length} errors`);

    return {
      success: errors.length === 0,
      sent: sentCount,
      total: subscribers.length,
      errors,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Error sending blog post notification:', errorMessage);
    return {
      success: false,
      sent: 0,
      total: 0,
      errors: [errorMessage],
    };
  }
}

