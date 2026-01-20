'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCalendar, FaVideo, FaNewspaper } from 'react-icons/fa';
import VideoSection from './VideoSection';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  published_at: string;
  view_count: number;
}

interface TabsContainerProps {
  blogPosts: BlogPost[];
}

const BLOG_FALLBACK_IMAGE = '/images/cards/dr-d-writing.png';

const normalizeImageUrl = (value: string | null): string | null => {
  if (!value) return BLOG_FALLBACK_IMAGE;
  const trimmed = value.trim();
  if (!trimmed) return BLOG_FALLBACK_IMAGE;

  if (trimmed.startsWith('data:')) return trimmed;
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  if (trimmed.startsWith('/Users/')) return BLOG_FALLBACK_IMAGE;
  if (trimmed.startsWith('/uploads/')) return trimmed;
  if (trimmed.startsWith('uploads/')) return `/${trimmed}`;
  if (trimmed.startsWith('/')) return trimmed;

  return BLOG_FALLBACK_IMAGE;
};

export default function TabsContainer({ blogPosts }: TabsContainerProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');

  return (
    <div>
      {/* Tab Navigation - Manila Folder Style */}
      <div className="flex mb-0">
        <button
          onClick={() => setActiveTab('videos')}
          className={`relative px-8 py-4 font-bold text-lg rounded-t-xl transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'videos'
              ? 'bg-white text-brand-purple shadow-lg z-10 -mb-px border-t-4 border-l border-r border-brand-purple'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
          }`}
        >
          <FaVideo className="w-5 h-5" />
          Videos
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`relative px-8 py-4 font-bold text-lg rounded-t-xl transition-all duration-200 flex items-center gap-2 ml-1 ${
            activeTab === 'articles'
              ? 'bg-white text-brand-blue shadow-lg z-10 -mb-px border-t-4 border-l border-r border-brand-blue'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
          }`}
        >
          <FaNewspaper className="w-5 h-5" />
          Latest Articles
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl p-8 border border-gray-200">
        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="animate-fadeIn">
            <VideoSection />
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Insights from Dr. DeSarbo on neuroscience, mental health, and purposeful living.
              </p>
            </div>

            {blogPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => {
                  const imageUrl = normalizeImageUrl(post.featured_image_url);

                  return (
                    <Link
                      key={post.id}
                      href={`/videosandmedia/${post.slug}`}
                      className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group border border-gray-100"
                    >
                      {/* Featured Image */}
                      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            unoptimized={imageUrl.startsWith('data:')}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                            <svg className="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Post Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <FaCalendar className="mr-2" />
                            <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center text-brand-blue font-semibold group-hover:translate-x-1 transition-transform">
                            Read More <FaArrowRight className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-600 text-lg mb-4">No articles found</p>
                <p className="text-gray-500 text-sm">
                  Check back soon for new articles from Dr. DeSarbo.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
