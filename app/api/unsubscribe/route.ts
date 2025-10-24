import { NextRequest, NextResponse } from 'next/server';
import { unsubscribeEmail } from '@/lib/db/newsletter';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    const success = await unsubscribeEmail(email);

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully unsubscribed',
      });
    } else {
      return NextResponse.json(
        { error: 'Email address not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return NextResponse.json(
      { error: 'Failed to unsubscribe' },
      { status: 500 }
    );
  }
}
