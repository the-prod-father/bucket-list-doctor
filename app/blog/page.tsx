'use client';

import { useState, useEffect } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

export default function BlogPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // YouTube channel URL
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@dr.jeffreydesarbo2584';

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/youtube/videos');
      const data = await response.json();

      if (data.videos && data.videos.length > 0) {
        setVideos(data.videos);
      } else if (data.error) {
        console.warn('YouTube API not configured:', data.message);
        setError(data.message);
      }
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Videos & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Watch Dr. DeSarbo&apos;s insights on neuroscience, bucket lists, and purposeful living.
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {loading ? 'Loading Videos...' : videos.length > 0 ? `All Videos (${videos.length})` : 'Videos'}
            </h2>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              View Channel →
            </a>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading videos from YouTube...</p>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start space-x-4">
                <svg className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">YouTube API Not Configured</h3>
                  <p className="text-gray-700 mb-4">{error}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    To enable dynamic video loading, add <code className="bg-gray-200 px-2 py-1 rounded">YOUTUBE_API_KEY</code> to your .env.local file.
                  </p>
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Visit YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Videos Grid */}
          {!loading && videos.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Video Thumbnail */}
                  <div className="relative w-full pb-[56.25%] bg-gray-900 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                      {video.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {new Date(video.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && videos.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
              <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <p className="text-gray-600 text-lg mb-4">No videos found</p>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Visit YouTube Channel
              </a>
            </div>
          )}
        </div>

        {/* YouTube CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe on YouTube
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Get notified when new videos are published. Deep dives into neuroscience, bucket lists, and living a purposeful life.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Additional Media Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Podcast Appearances */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4zm-1 10h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Podcast Features</h3>
            <p className="text-gray-600">
              Guest appearances discussing adventure and brain science.
            </p>
          </div>

          {/* Radio Interviews */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Radio Interviews</h3>
            <p className="text-gray-600">
              Listen to Dr. D&apos;s radio interviews and media appearances.
            </p>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe for exclusive insights and bucket list inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
