import { NextResponse } from 'next/server';
import { getActiveMediaAppearances } from '@/lib/db/media';

/**
 * GET /api/media
 * Get active media appearances (public endpoint)
 */
export async function GET() {
  try {
    const media = await getActiveMediaAppearances();
    return NextResponse.json({ media });
  } catch (error) {
    console.error('Error fetching media appearances:', error);
    // Fallback to empty array if database error
    return NextResponse.json({ media: [] });
  }
}








