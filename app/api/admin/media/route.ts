import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  getAllMediaAppearances,
  createMediaAppearance,
  CreateMediaAppearanceInput,
} from '@/lib/db/media';

/**
 * GET /api/admin/media
 * Get all media appearances
 * Admin only
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const media = await getAllMediaAppearances();

    return NextResponse.json({ media });
  } catch (error) {
    console.error('Error fetching media appearances:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media appearances' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/media
 * Create new media appearance
 * Admin only
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const input: CreateMediaAppearanceInput = {
      name: body.name,
      logo_url: body.logo_url,
      type: body.type,
      gradient: body.gradient,
      display_order: body.display_order,
      is_active: body.is_active !== undefined ? body.is_active : true,
    };

    const media = await createMediaAppearance(input);

    return NextResponse.json({ media }, { status: 201 });
  } catch (error) {
    console.error('Error creating media appearance:', error);
    return NextResponse.json(
      { error: 'Failed to create media appearance' },
      { status: 500 }
    );
  }
}

