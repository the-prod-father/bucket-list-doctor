import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bucket List Doctor | The Neuroscience of a Bucket List',
  description: 'Dr. Jeffrey DeSarbo explores how bucket lists activate and strengthen your brain through neuroplasticity, goal-setting, and purposeful living.',
  keywords: ['bucket list', 'neuroscience', 'brain health', 'neuroplasticity', 'goal setting', 'Dr. Jeffrey DeSarbo'],
  authors: [{ name: 'Dr. Jeffrey DeSarbo' }],
  metadataBase: new URL('https://bucketlistdoctor.com'),
  openGraph: {
    title: 'Bucket List Doctor | The Neuroscience of a Bucket List',
    description: 'Discover how bucket lists transform your brain and life',
    type: 'website',
    url: 'https://bucketlistdoctor.com',
    images: [
      {
        url: 'https://bucketlistdoctor.com/images/benefits/bucketlistdoctor-book-cover.png',
        width: 1200,
        height: 1600,
        alt: 'The Neuroscience of a Bucket List book cover by Dr. Jeffrey DeSarbo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucket List Doctor | The Neuroscience of a Bucket List',
    description: 'Discover how bucket lists transform your brain and life',
    images: ['https://bucketlistdoctor.com/images/benefits/bucketlistdoctor-book-cover.png'],
  },
};

// Structured data for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://bucketlistdoctor.com/#website',
      url: 'https://bucketlistdoctor.com',
      name: 'Bucket List Doctor',
      description: 'The Neuroscience of a Bucket List by Dr. Jeffrey DeSarbo',
      publisher: {
        '@id': 'https://bucketlistdoctor.com/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://bucketlistdoctor.com/#person',
      name: 'Dr. Jeffrey DeSarbo',
      jobTitle: 'Neuropsychiatrist',
      description: 'Physician, neuropsychiatrist, author, and speaker specializing in the neuroscience of bucket lists and purposeful living.',
      url: 'https://bucketlistdoctor.com/about',
      image: 'https://bucketlistdoctor.com/images/profile/dr-d-radio-show.jpg',
      sameAs: [
        'https://facebook.com/bucketlistdoctor',
        'https://instagram.com/bucketlistdoctor',
        'https://linkedin.com/in/drdesarbo',
        'https://www.youtube.com/@dr.jeffreydesarbo2584',
      ],
    },
    {
      '@type': 'Book',
      '@id': 'https://bucketlistdoctor.com/#book',
      name: 'The Neuroscience of a Bucket List',
      author: {
        '@id': 'https://bucketlistdoctor.com/#person',
      },
      description: 'Discover how your bucket list activates neuroplasticity, goal-setting, and brain health.',
      image: 'https://bucketlistdoctor.com/images/benefits/bucketlistdoctor-book-cover.png',
      url: 'https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD',
      publisher: 'Psyance Publishing',
      datePublished: '2025',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white">
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}
