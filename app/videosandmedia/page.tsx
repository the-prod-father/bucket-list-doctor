import Image from 'next/image';
import { withRetryOrEmpty } from '@/lib/db/retry';
import TabsContainer from './TabsContainer';

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

export default async function VideosAndMediaPage() {
  // Fetch articles on the server - instant load!
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Videos & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Videos, articles, and media appearances from Dr. DeSarbo on neuroscience, mental health, eating disorders, bucket lists, and purposeful living.
          </p>
        </div>

        {/* Tabbed Content */}
        <TabsContainer blogPosts={blogPosts} />

        {/* Media Banners Section */}
        <div className="mt-16 mb-16">
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
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 text-center">
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
      </div>
    </div>
  );
}
