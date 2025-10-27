'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  published_at: string | null;
  view_count: number;
  featured_image_url: string | null;
  meta_description: string | null;
}

function NewsletterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const isAdmin = session?.user?.role === 'admin';

  // Check if user just subscribed
  const justSubscribed = searchParams.get('subscribed') === 'true';
  const subscriberEmail = searchParams.get('email');
  const subscriptionStatus = searchParams.get('status');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetch published blog posts
      const response = await fetch('/api/blog/published');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeMessage('');
    setSubscribing(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message for all successful cases (new, existing, resubscribed)
        setSubscribeMessage('✅ ' + data.message);
        setEmail('');
      } else {
        setSubscribeMessage('❌ ' + (data.error || 'Failed to subscribe'));
      }
    } catch (err) {
      setSubscribeMessage('❌ Something went wrong. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const extractImageFromContent = (html: string): string | null => {
    if (!html) return null;
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    const img = tmp.querySelector('img');
    return img?.src || null;
  };

  const getPostImage = (post: BlogPost): string | null => {
    // Priority: featured_image_url > first image in content > null
    return post.featured_image_url || extractImageFromContent(post.content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-brand-blue to-brand-purple p-4 rounded-full mb-6">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Newsletter
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Insights on neuroscience, bucket lists, and purposeful living from Dr. Jeffrey DeSarbo.
          </p>
        </div>

        {/* Subscribe Section or Welcome Message */}
        {justSubscribed ? (
          /* Personalized Welcome for New Subscribers */
          <div className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink rounded-2xl shadow-2xl p-8 md:p-12 mb-16 text-white">
            <div className="text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-full mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎉 {subscriptionStatus === 'existing' ? 'Welcome Back!' : 'Thank You for Subscribing!'}
              </h2>
              {subscriberEmail && (
                <p className="text-xl md:text-2xl text-white/90 mb-6">
                  {subscriberEmail}
                </p>
              )}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
                You now have exclusive access to Dr. DeSarbo&apos;s insights on neuroscience, bucket lists, and purposeful living. Check your inbox for a welcome email!
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-bold mb-4">What You&apos;ll Get:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>Exclusive articles on brain science & bucket lists</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Early access to new content & research</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Weekly newsletter with curated insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span>Practical tips for purposeful living</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Regular Subscribe Form for Non-Subscribers */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Get Every Update
              </h2>
              <p className="text-gray-600">
                Join thousands of readers. No spam, unsubscribe anytime.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {subscribeMessage && (
                <p className={`mt-4 text-center text-sm ${subscribeMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                  {subscribeMessage}
                </p>
              )}
            </form>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No spam</span>
              </div>
            </div>
          </div>
        )}

        {/* Latest Articles */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <span className="text-gray-500 text-sm">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading articles...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No articles yet
              </h3>
              <p className="text-gray-600">
                Check back soon for new content from Dr. DeSarbo!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative"
                >
                  {/* Admin Quick Actions */}
                  {isAdmin && (
                    <div className="absolute top-4 right-4 z-10 flex space-x-2">
                      <button
                        onClick={() => router.push(`/admin/cms/posts/${post.id}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg transition-colors"
                        title="Edit post"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {(() => {
                    const postImage = getPostImage(post);
                    return postImage ? (
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                          src={postImage}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ) : null;
                  })()}

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <time dateTime={post.published_at || post.created_at}>
                        {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.view_count} views</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-brand-blue transition-colors">
                      <Link href={`/newsletter/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {post.excerpt && (
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    )}

                    {!post.excerpt && post.content && (
                      <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                        {stripHtml(post.content).substring(0, 200)}...
                      </p>
                    )}

                    <Link
                      href={`/newsletter/${post.slug}`}
                      className="inline-flex items-center text-brand-blue hover:text-brand-purple font-semibold transition-colors group"
                    >
                      <span>Read article</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewsletterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading newsletter...</p>
        </div>
      </div>
    }>
      <NewsletterContent />
    </Suspense>
  );
}
