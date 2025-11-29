import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Jeffrey DeSarbo | Neuropsychiatrist & Author',
  description: 'Learn about Dr. Jeffrey DeSarbo, D.O. - physician, neuropsychiatrist, author of "The Neuroscience of a Bucket List," and seven-continent explorer with 20+ years of clinical experience.',
  keywords: ['Dr. Jeffrey DeSarbo', 'neuropsychiatrist', 'bucket list doctor', 'brain health', 'psychiatrist', 'author', 'speaker'],
  openGraph: {
    title: 'About Dr. Jeffrey DeSarbo | Neuropsychiatrist & Author',
    description: 'Physician, neuropsychiatrist, and author dedicated to exploring the intersection of brain health and purposeful living.',
    images: ['/images/profile/dr-d-radio-show.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Jeffrey DeSarbo',
    description: 'Neuropsychiatrist and author of The Neuroscience of a Bucket List',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
