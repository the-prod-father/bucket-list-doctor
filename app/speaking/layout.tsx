import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaking Engagements | Dr. Jeffrey DeSarbo',
  description: 'Book Dr. Jeffrey DeSarbo for speaking engagements, keynote presentations, and educational seminars on neuroscience, bucket lists, and brain health.',
  keywords: ['speaker', 'keynote', 'neuroscience speaker', 'bucket list', 'brain health', 'Dr. Jeffrey DeSarbo'],
  openGraph: {
    title: 'Speaking Engagements | Dr. Jeffrey DeSarbo',
    description: 'Book Dr. Jeffrey DeSarbo for your next event',
  },
};

export default function SpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
