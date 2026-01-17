import { Metadata } from 'next';
import NewsletterPostClient from '@/components/newsletter/NewsletterPostClient';
import { withRetryOrNull } from '@/lib/db/retry';

// Force dynamic rendering - don't cache or statically generate these pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true; // Allow dynamic params that weren't generated at build time
export const revalidate = 0; // Never cache

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

// Server-side data fetching with retry logic
async function getPost(slug: string): Promise<BlogPost | null> {
  return withRetryOrNull(async (client) => {
    const result = await client.query(
      `SELECT
        id, title, slug, excerpt, content, status,
        created_at, updated_at, published_at, view_count,
        featured_image_url, meta_description
      FROM blog_posts
      WHERE slug = $1 AND status = 'published'`,
      [slug]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  });
}

function extractImageFromHtml(html: string): string | null {
  if (!html) return null;

  // Simple regex to find first img src
  const imgMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPost(params.slug);

    if (!post) {
      return {
        title: 'Post Not Found | Bucket List Doctor',
        description: 'The article you are looking for could not be found.',
      };
    }

  // Determine the best image to use for Open Graph
  const ogImage = post.featured_image_url
    || extractImageFromHtml(post.content)
    || 'https://bucketlistdoctor.com/images/cards/brain-network.png'; // Fallback to brain image

  const description = post.meta_description
    || post.excerpt
    || `Read ${post.title} by Dr. Jeffrey DeSarbo on Bucket List Doctor.`;

  return {
    title: `${post.title} | Bucket List Doctor Magazine`,
    description: description,
    keywords: ['bucket list', 'neuroscience', 'brain health', 'Dr. Jeffrey DeSarbo', 'newsletter'],
    authors: [{ name: 'Dr. Jeffrey DeSarbo' }],
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.published_at || post.created_at,
      authors: ['Dr. Jeffrey DeSarbo'],
      url: `https://bucketlistdoctor.com/newsletter/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: [ogImage],
      creator: '@bucketlistdoc',
    },
  };
  } catch (error) {
    // If metadata generation fails, return fallback metadata
    // This prevents the page from failing during static generation
    console.error('Error generating metadata for newsletter post:', error);
    return {
      title: 'Article | Bucket List Doctor',
      description: 'Read articles from Dr. Jeffrey DeSarbo on neuroscience and bucket lists.',
    };
  }
}

export default function NewsletterPostPage({ params }: { params: { slug: string } }) {
  return <NewsletterPostClient slug={params.slug} />;
}
