'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
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

  const isAdmin = session?.user?.role === 'admin' || session?.user?.role === 'super_admin';

  const justSubscribed = searchParams.get('subscribed') === 'true';
  const subscriberEmail = searchParams.get('email');
  const subscriptionStatus = searchParams.get('status');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/published');
      if (response.ok) {
        const data = await response.json();
        const sortedPosts = (data.posts || []).sort((a: BlogPost, b: BlogPost) => {
          const dateA = new Date(b.published_at || b.created_at).getTime();
          const dateB = new Date(a.published_at || a.created_at).getTime();
          return dateA - dateB;
        });
        setPosts(sortedPosts);
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
    return post.featured_image_url || extractImageFromContent(post.content);
  };

  const formatDate = (value: string | null) => {
    if (!value) return 'Unpublished';
    return new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const listPosts = featuredPost ? posts.slice(1) : posts;
  const trendingPosts = posts.slice(0, Math.min(5, posts.length));

  const renderSubscribeCard = () => {
    if (justSubscribed) {
      return (
        <div className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink text-white rounded-3xl shadow-2xl p-8 lg:p-10">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                {subscriptionStatus === 'existing' ? 'Welcome back to the list!' : 'You\u2019re officially on the list 🎉'}
              </h3>
              {subscriberEmail && (
                <p className="text-white/80 text-lg">{subscriberEmail}</p>
              )}
              <p className="text-white/80 leading-relaxed">
                Expect fresh takes on neuroscience, bucket lists, and purposeful living. Your first issue is already on its way to your inbox.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-left space-y-4">
              <h4 className="font-semibold text-white">Inside each edition:</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-yellow mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly essays translating brain science into everyday action.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-yellow mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Bucket list inspiration, frameworks, and stories from the field.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-yellow mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Personal brain and lifestyle experiments from Dr. DeSarbo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Join 15k+ curious readers</span>
          <h3 className="text-2xl font-bold text-gray-900">Get the weekly neuroscience dispatch</h3>
          <p className="text-gray-600">
            Practical neuroscience, bucket list experiments, and purposeful living tactics—delivered once a week.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@inbox.com"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={subscribing}
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-xl transition-transform transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {subscribing ? 'Subscribing…' : 'Subscribe'}
            </button>
          </div>
          {subscribeMessage && (
            <p className={`text-sm ${subscribeMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {subscribeMessage}
            </p>
          )}
        </form>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Weekly essays, no spam.
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Exclusive research notes and experiments.
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Zero fluff. Unsubscribe anytime.
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-12">
            <header className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold w-fit">
                <span className="w-2 h-2 bg-brand-blue rounded-full" />
                Bucket List Doctor Newsletter
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Neuroscience, purposeful living, and bucket list breakthroughs—every week.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Curated essays, research summaries, and experiments from neuropsychiatrist Dr. Jeffrey DeSarbo. Designed for people who want their bucket list to rewire their brain for good.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Brain science explained simply</p>
                    <p className="text-sm text-gray-600">Breakdowns of dopamine, neuroplasticity, stress and goal-setting in plain English.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.879 4.879a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bucket list playbooks</p>
                    <p className="text-sm text-gray-600">Step-by-step frameworks to design, fund, and complete meaningful adventures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H16a1 1 0 011 1v2H3V4z" />
                      <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 011 1v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm5 2a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Interviews & experiments</p>
                    <p className="text-sm text-gray-600">Stories from patients, adventurers, and the neuroscience community.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2H4v10h12V5zM6 7a1 1 0 011-1h1a1 1 0 011 1v1H6V7zm3 0a1 1 0 011-1h4a1 1 0 011 1v1H9V7zm5 3H6v1h8v-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Actionable takeaways</p>
                    <p className="text-sm text-gray-600">Each issue ends with prompts and experiments you can run this week.</p>
                  </div>
                </div>
              </div>
            </header>

            {featuredPost ? (
              <article className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
                {isAdmin && (
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/admin/cms/posts/${featuredPost.id}`);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg shadow"
                    >
                      Edit
                    </button>
                  </div>
                )}
                <Link href={`/newsletter/${featuredPost.slug}`} className="block">
                  {(() => {
                    const image = getPostImage(featuredPost);
                    return image ? (
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 640px, 100vw"
                          unoptimized={image.startsWith('data:')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>
                    ) : (
                      <div className="h-64 bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-pink/20" />
                    );
                  })()}
                  <div className="p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span>{formatDate(featuredPost.published_at || featuredPost.created_at)}</span>
                      <span>•</span>
                      <span>{featuredPost.view_count} views</span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight group-hover:text-brand-blue transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {featuredPost.excerpt || `${stripHtml(featuredPost.content).slice(0, 220)}${stripHtml(featuredPost.content).length > 220 ? '…' : ''}`}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-blue font-semibold">
                      Read the latest issue
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ) : null}

            <section className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recent issues</h2>
                <Link href="/blog" className="text-sm font-semibold text-brand-blue hover:text-brand-purple">
                  View full archive →
                </Link>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Loading issues…</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-12 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">No issues yet</h3>
                  <p className="text-gray-600">We&apos;re working on the first edition. Subscribe now and you&apos;ll be the first to know.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {listPosts.map((post) => {
                    const image = getPostImage(post);
                    const preview = post.excerpt || `${stripHtml(post.content).slice(0, 220)}${stripHtml(post.content).length > 220 ? '…' : ''}`;

                    return (
                      <article key={post.id} className="py-8 flex flex-col md:flex-row gap-6">
                        {image && (
                          <Link href={`/newsletter/${post.slug}`} className="md:w-48 w-full flex-shrink-0">
                            <div className="relative h-32 md:h-full rounded-2xl overflow-hidden bg-gray-100">
                              <Image
                                src={image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 192px, 50vw"
                                unoptimized={image.startsWith('data:')}
                              />
                            </div>
                          </Link>
                        )}
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                            <span>{formatDate(post.published_at || post.created_at)}</span>
                            <span>•</span>
                            <span>{post.view_count} views</span>
                            {isAdmin && (
                              <button
                                onClick={() => router.push(`/admin/cms/posts/${post.id}`)}
                                className="text-xs font-semibold text-brand-blue hover:text-brand-purple"
                              >
                                Edit
                              </button>
                            )}
                          </div>
                          <Link href={`/newsletter/${post.slug}`} className="block">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-brand-blue transition-colors">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 leading-relaxed">{preview}</p>
                          <Link
                            href={`/newsletter/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-purple"
                          >
                            Read issue
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24">
            {renderSubscribeCard()}

            {trendingPosts.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">Trending issues</h3>
                  <span className="text-xs font-semibold text-gray-400 uppercase">Top {trendingPosts.length}</span>
                </div>
                <ul className="space-y-3">
                  {trendingPosts.map((post, index) => (
                    <li key={post.id}>
                      <Link href={`/newsletter/${post.slug}`} className="flex items-start gap-3 group">
                        <span className="text-sm font-semibold text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-brand-blue transition-colors">
                            {post.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(post.published_at || post.created_at)} • {post.view_count} views
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Why subscribers stay</h3>
              <p className="text-sm text-gray-600">&ldquo;Every email feels like sitting in on a masterclass about how the brain responds to goals.&rdquo; — longtime reader</p>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-purple text-white font-semibold transition-colors"
              >
                Browse the archive
              </Link>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="font-semibold text-gray-900">Focus areas</p>
                  <p>Neuroplasticity, dopamine, resilience, purposeful living.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="font-semibold text-gray-900">Bonus content</p>
                  <p>Behind-the-scenes experiments, travel notes, patient stories.</p>
                </div>
              </div>
            </div>
          </aside>
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
          <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading newsletter…</p>
        </div>
      </div>
    }>
      <NewsletterContent />
    </Suspense>
  );
}
