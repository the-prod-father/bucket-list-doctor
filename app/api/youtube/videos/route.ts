import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

/**
 * Fetch videos from Dr. DeSarbo's YouTube channel
 *
 * To enable this endpoint:
 * 1. Get a YouTube Data API v3 key from: https://console.cloud.google.com/
 * 2. Add YOUTUBE_API_KEY to your .env.local file
 * 3. Enable YouTube Data API v3 in Google Cloud Console
 */
export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // Channel handle: @dr.jeffreydesarbo2584
  // You can also use channel ID if you have it
  const CHANNEL_HANDLE = 'dr.jeffreydesarbo2584';

  if (!API_KEY) {
    console.warn('⚠️ YOUTUBE_API_KEY not found in environment variables');
    console.warn('Add YOUTUBE_API_KEY to .env.local to enable dynamic video loading');

    // Return empty array if API key not configured
    return NextResponse.json({
      videos: [],
      error: 'YouTube API key not configured',
      message: 'Add YOUTUBE_API_KEY to .env.local to fetch videos dynamically'
    });
  }

  try {
    // Step 1: Get channel ID from handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${API_KEY}`
    );

    if (!channelResponse.ok) {
      throw new Error('Failed to fetch channel info');
    }

    const channelData = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json({
        videos: [],
        error: 'Channel not found'
      });
    }

    const channelId = channelData.items[0].id.channelId;

    // Step 2: Fetch videos from channel (sorted by date, newest first)
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=50&type=video`
    );

    if (!videosResponse.ok) {
      throw new Error('Failed to fetch videos');
    }

    const videosData = await videosResponse.json();

    const videos: YouTubeVideo[] = videosData.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
    }));

    console.log(`✅ Successfully fetched ${videos.length} videos from YouTube`);

    return NextResponse.json({ videos });

  } catch (error) {
    console.error('❌ Error fetching YouTube videos:', error);

    return NextResponse.json(
      {
        videos: [],
        error: 'Failed to fetch videos from YouTube',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
