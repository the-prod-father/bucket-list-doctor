import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const runtime = 'nodejs';

/**
 * Upload Image API
 * Handles image uploads to local storage (public/uploads)
 * Requires authentication (admin users only)
 */
const BASE_UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const BLOG_UPLOAD_SUBDIR = 'blog-images';

function ensureUploadDir() {
  if (!fs.existsSync(BASE_UPLOAD_DIR)) {
    fs.mkdirSync(BASE_UPLOAD_DIR, { recursive: true });
  }

  const blogDir = path.join(BASE_UPLOAD_DIR, BLOG_UPLOAD_SUBDIR);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the file from the form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Generate a unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop();
    const safeName = `${timestamp}-${randomString}.${extension}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    try {
      ensureUploadDir();
      const filePath = path.join(BASE_UPLOAD_DIR, BLOG_UPLOAD_SUBDIR, safeName);
      await fs.promises.writeFile(filePath, buffer);
      const publicUrl = `/uploads/${BLOG_UPLOAD_SUBDIR}/${safeName}`;
      return NextResponse.json({ success: true, url: publicUrl, filename: publicUrl, storage: 'filesystem' });
    } catch (writeErr) {
      console.warn('Image upload: falling back to inline data URL', writeErr);
      const dataUrl = `data:${file.type};base64,${buffer.toString('base64')}`;
      return NextResponse.json({ success: true, url: dataUrl, filename: `inline-${safeName}`, storage: 'inline' });
    }

  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { error: 'Failed to upload image. Please try again.' },
      { status: 500 }
    );
  }
}
