import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  getMediaAppearanceById,
  updateMediaAppearance,
  deleteMediaAppearance,
  UpdateMediaAppearanceInput,
} from '@/lib/db/media';

/**
 * GET /api/admin/media/[id]
 * Get single media appearance
 * Admin only
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const media = await getMediaAppearanceById(params.id);

    if (!media) {
      return NextResponse.json({ error: 'Media appearance not found' }, { status: 404 });
    }

    return NextResponse.json({ media });
  } catch (error) {
    console.error('Error fetching media appearance:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media appearance' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/media/[id]
 * Update media appearance
 * Admin only
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const input: UpdateMediaAppearanceInput = {};

    if (body.name !== undefined) input.name = body.name;
    if (body.logo_url !== undefined) input.logo_url = body.logo_url;
    if (body.type !== undefined) input.type = body.type;
    if (body.gradient !== undefined) input.gradient = body.gradient;
    if (body.display_order !== undefined) input.display_order = body.display_order;
    if (body.is_active !== undefined) input.is_active = body.is_active;

    const media = await updateMediaAppearance(params.id, input);

    if (!media) {
      return NextResponse.json({ error: 'Media appearance not found' }, { status: 404 });
    }

    return NextResponse.json({ media });
  } catch (error) {
    console.error('Error updating media appearance:', error);
    return NextResponse.json(
      { error: 'Failed to update media appearance' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/media/[id]
 * Delete media appearance
 * Admin only
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user?.role !== 'admin' && session.user?.role !== 'super_admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const deleted = await deleteMediaAppearance(params.id);

    if (!deleted) {
      return NextResponse.json({ error: 'Media appearance not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting media appearance:', error);
    return NextResponse.json(
      { error: 'Failed to delete media appearance' },
      { status: 500 }
    );
  }
}

