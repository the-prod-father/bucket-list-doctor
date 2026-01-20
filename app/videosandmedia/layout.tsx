import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos and Media | Dr. Jeffrey DeSarbo',
  description: 'Articles, videos, and media from Dr. Jeffrey DeSarbo on neuroscience, mental health, eating disorders, bucket lists, and purposeful living.',
  keywords: ['videos', 'media', 'neuroscience', 'mental health', 'bucket list', 'Dr. DeSarbo', 'brain health'],
  openGraph: {
    title: 'Videos and Media | Dr. Jeffrey DeSarbo',
    description: 'Articles, videos, and media on neuroscience, mental health, and bucket lists.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videos and Media | Dr. Jeffrey DeSarbo',
    description: 'Articles and videos on neuroscience and purposeful living',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
