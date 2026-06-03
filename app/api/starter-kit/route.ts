import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';
import { sendSMTPEmail } from '@/lib/email/smtp';

// Where Starter Kit lead notifications are sent. Override via env if needed.
const NOTIFY_EMAIL = process.env.STARTER_KIT_NOTIFY_EMAIL || 'DrDBucketList@gmail.com';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Allow self-signed certificates in the Supabase cert chain.
// Required: the connection string uses sslmode=require, so node-postgres
// validates the chain and the per-Client ssl option alone is insufficient.
// This matches the pattern used by every other DB route in this repo.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Basic email shape validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Save the lead to newsletter_subscribers, tagged as a Starter Kit signup.
// Mirrors the direct-PostgreSQL pattern used by the newsletter subscribe route
// (bypasses Supabase RLS). Deduped on the unique email column.
async function saveStarterKitLead(email: string) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // Insert new lead, or quietly re-activate an existing one. We don't
    // overwrite the original `source` for people who were already on the list.
    await client.query(
      `INSERT INTO newsletter_subscribers (email, subscribed, source)
       VALUES ($1, true, 'starter-kit')
       ON CONFLICT (email)
       DO UPDATE SET subscribed = true, updated_at = NOW()`,
      [email]
    );

    return { success: true };
  } catch (error) {
    console.error('Error saving starter kit lead:', error);
    return { success: false };
  } finally {
    await client.end();
  }
}

// Notify the site owner that a new lead grabbed the Starter Kit.
// Best-effort: a mail failure must never block lead capture or the download.
async function notifyOwnerOfLead(email: string) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #2B4C6F; margin-bottom: 8px;">New Bucket List Starter Kit lead 🎉</h2>
      <p style="color: #444; font-size: 16px; margin: 0 0 16px;">
        Someone just downloaded the free Starter Kit from bucketlistdoctor.com.
      </p>
      <p style="font-size: 16px; margin: 0 0 4px;">
        <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
      </p>
      <p style="color: #888; font-size: 13px; margin-top: 16px;">
        They've been added to your subscriber list (source: starter-kit). View all leads in the admin panel.
      </p>
    </div>
  `;

  return sendSMTPEmail({
    to: NOTIFY_EMAIL,
    subject: `New Starter Kit lead: ${email}`,
    html,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const result = await saveStarterKitLead(email.trim().toLowerCase());

    if (!result.success) {
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      );
    }

    // Notify the owner — best-effort, never fails the request
    try {
      const notify = await notifyOwnerOfLead(email.trim().toLowerCase());
      if (!notify.success) {
        console.error('Starter Kit lead saved, but owner notification failed:', notify.error);
      }
    } catch (notifyError) {
      console.error('Starter Kit lead saved, but owner notification threw:', notifyError);
    }

    return NextResponse.json({
      success: true,
      downloadUrl: '/bucket-list-brain-starter-kit.pdf',
    });
  } catch (error) {
    console.error('Error processing starter kit request:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
