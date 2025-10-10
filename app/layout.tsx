import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

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
  openGraph: {
    title: 'Bucket List Doctor | The Neuroscience of a Bucket List',
    description: 'Discover how bucket lists transform your brain and life',
    type: 'website',
    url: 'https://bucketlistdoctor.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-white">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
