import nodemailer from 'nodemailer';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/**
 * Create SMTP transporter using environment variables
 */
function createSMTPTransporter() {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.warn('⚠️ SMTP_USER or SMTP_PASSWORD not configured');
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
}

/**
 * Send email via SMTP
 */
export async function sendSMTPEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const transporter = createSMTPTransporter();

  if (!transporter) {
    return {
      success: false,
      error: 'SMTP not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.',
    };
  }

  try {
    const fromEmail = options.from || process.env.SMTP_FROM || 'support@whynotus.ai';
    
    const info = await transporter.sendMail({
      from: fromEmail,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
    });

    console.log(`📧 SMTP email sent:`, {
      messageId: info.messageId,
      to: options.to,
      subject: options.subject,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error('❌ SMTP email error:', error);
    return {
      success: false,
      error: error?.message || String(error),
    };
  }
}

/**
 * Verify SMTP connection
 */
export async function verifySMTPConnection(): Promise<{ success: boolean; error?: string }> {
  const transporter = createSMTPTransporter();

  if (!transporter) {
    return {
      success: false,
      error: 'SMTP not configured',
    };
  }

  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    return { success: true };
  } catch (error: any) {
    console.error('❌ SMTP verification failed:', error);
    return {
      success: false,
      error: error?.message || String(error),
    };
  }
}








