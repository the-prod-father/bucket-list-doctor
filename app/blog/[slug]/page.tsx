import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Client } from 'pg';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendar, FaEye } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  meta_description: string | null;
  published_at: string;
  view_count: number;
  status: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    const result = await client.query(
      'SELECT * FROM blog_posts WHERE slug = $1 AND status = $2',
      [slug, 'published']
    );

    if (result.rows.length === 0) {
      return null;
    }

    // Increment view count
    await client.query(
      'UPDATE blog_posts SET view_count = view_count + 1 WHERE slug = $1',
      [slug]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  } finally {
    await client.end();
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Bucket List Doctor Blog`,
    description: post.meta_description || post.excerpt || `Read ${post.title} on the Bucket List Doctor blog`,
    openGraph: {
      title: post.title,
      description: post.meta_description || post.excerpt || undefined,
      images: post.featured_image_url ? [
        {
          url: post.featured_image_url,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
      type: 'article',
      publishedTime: post.published_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || post.excerpt || undefined,
      images: post.featured_image_url ? [post.featured_image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-brand-blue hover:text-brand-purple font-semibold mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="relative w-full h-96">
              <Image
                src={post.featured_image_url}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <FaEye className="mr-2" />
                <span>{post.view_count} views</span>
              </div>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Blog Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-purple
                prose-strong:text-gray-900
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-img:rounded-lg prose-img:shadow-md
                prose-blockquote:border-brand-blue prose-blockquote:bg-blue-50 prose-blockquote:py-2
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h3>
          <p className="text-gray-700 leading-relaxed">
            Dr. Jeffrey DeSarbo is the author of &quot;The Neuroscience of a Bucket List&quot; and a passionate
            advocate for purposeful living through neuroscience-backed goal setting. Follow him on social media
            to stay updated on the latest insights about bucket lists and brain health.
          </p>
        </div>
      </div>
    </div>
  );
}
