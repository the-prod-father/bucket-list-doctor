import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCalendar } from 'react-icons/fa';
import { withRetryOrEmpty } from '@/lib/db/retry';
import VideoSection from './VideoSection';

// Force dynamic rendering for fresh data
export const dynamic = 'force-dynamic';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  published_at: string;
  view_count: number;
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

// Server-side data fetching with retry logic
async function getBlogPosts(): Promise<BlogPost[]> {
  return withRetryOrEmpty(async (client) => {
    const result = await client.query(`
      SELECT
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        published_at,
        view_count
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY published_at DESC
    `);
    return result.rows;
  });
}

export default async function BlogPage() {
  // Fetch articles on the server - instant load!
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Videos and Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Additional information from Dr. DeSarbo on neuroscience, mental health, eating disorders, bucket lists, and purposeful living.
          </p>
        </div>

        {/* Blog Posts Section - Server Rendered! */}
        <div id="articles" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Latest Articles
          </h2>

          {/* Articles Grid - Already loaded! */}
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => {
                const imageUrl = normalizeImageUrl(post.featured_image_url);

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group"
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
            <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
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

        {/* Videos Section - Client Component for YouTube API */}
        <VideoSection />

        {/* Media Banners Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            As Featured On
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
            <div className="relative w-full h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/speaker/doctor-radio-siriusxm.png"
                alt="Doctor Radio / Sirius XM"
                width={200}
                height={100}
                className="object-contain max-h-20 w-full"
              />
            </div>
            <div className="relative w-full h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/speaker/newsday-banner.png"
                alt="Newsday"
                width={200}
                height={100}
                className="object-contain max-h-20 w-full"
              />
            </div>
            <div className="relative w-full h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/speaker/iheart-radio.png"
                alt="iHeart Radio"
                width={200}
                height={100}
                className="object-contain max-h-20 w-full"
              />
            </div>
          </div>
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
              href="https://www.youtube.com/@dr.jeffreydesarbo2584"
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
