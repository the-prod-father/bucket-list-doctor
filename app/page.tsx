import AnimatedBrainHero from '@/components/home/AnimatedBrainHero';
import BucketListNavigation from '@/components/home/BucketListNavigation';
import ValueProp from '@/components/home/ValueProp';
import BookShowcase from '@/components/home/BookShowcase';
import AboutSection from '@/components/home/AboutSection';
import MediaAppearances from '@/components/home/MediaAppearances';
import CrossSiteNavigation from '@/components/home/CrossSiteNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bucket List Doctor™ | The Neuroscience of a Bucket List',
  description: 'Discover how your bucket list rewires your brain for success. Dr. Jeffrey DeSarbo combines neuroscience with adventure to show how purposeful goal-setting activates neuroplasticity, releases dopamine, and builds resilience.',
  keywords: ['bucket list', 'neuroscience', 'brain health', 'neuroplasticity', 'dopamine', 'goal-setting', 'adventure', 'cognitive enhancement', 'Dr. DeSarbo', 'mental resilience'],
  authors: [{ name: 'Dr. Jeffrey DeSarbo' }],
  openGraph: {
    title: 'Bucket List Doctor™ | The Neuroscience of a Bucket List',
    description: 'Discover how your bucket list rewires your brain for success, happiness, and resilience.',
    url: 'https://bucketlistdoctor.com',
    siteName: 'Bucket List Doctor™',
    images: [
      {
        url: '/images/benefits/bucketlistdoctor-book-cover.png',
        width: 1200,
        height: 630,
        alt: 'The Neuroscience of a Bucket List Book Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucket List Doctor™ | The Neuroscience of a Bucket List',
    description: 'Discover how your bucket list rewires your brain for success, happiness, and resilience.',
    images: ['/images/benefits/bucketlistdoctor-book-cover.png'],
  },
};

export default function Home() {
  return (
    <>
      <AnimatedBrainHero />
      <BucketListNavigation />
      <ValueProp />
      <BookShowcase />
      <AboutSection />
      <MediaAppearances />
      <CrossSiteNavigation />
    </>
  );
}
