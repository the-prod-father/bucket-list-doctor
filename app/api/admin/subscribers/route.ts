import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getAllSubscribers, getSubscriberCount } from '@/lib/db/newsletter';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const subscribers = await getAllSubscribers();
    const counts = await getSubscriberCount();

    return NextResponse.json({
      subscribers,
      counts,
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
