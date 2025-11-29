import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter | Bucket List Doctor',
  description: 'Subscribe to the Bucket List Doctor newsletter for weekly neuroscience insights, bucket list strategies, and purposeful living tactics from Dr. Jeffrey DeSarbo.',
  keywords: ['newsletter', 'neuroscience', 'bucket list', 'brain health', 'Dr. DeSarbo', 'purposeful living'],
  openGraph: {
    title: 'Newsletter | Bucket List Doctor',
    description: 'Weekly neuroscience insights and bucket list strategies from Dr. Jeffrey DeSarbo.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucket List Doctor Newsletter',
    description: 'Weekly neuroscience insights and purposeful living tactics',
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
