import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Books by Dr. DeSarbo | The Neuroscience of a Bucket List',
  description: 'Explore Dr. Jeffrey DeSarbo&apos;s collection: The Neuroscience of a Bucket List, Workbook, and Eating Disorder Supplement. Learn the science behind goal-setting, neuroplasticity, and brain health.',
  openGraph: {
    title: 'Books by Dr. DeSarbo - Available on Amazon',
    description: 'Transform your life with neuroscience-backed bucket list strategies.',
    images: ['/images/benefits/bucketlistdoctor-book-cover.png'],
  },
};

export default function BooksPage() {
  const books = [
    {
      id: 'main',
      title: 'The Neuroscience of a Bucket List',
      subtitle: 'Getting the Most from Your Brain and Life.',
      image: '/images/benefits/bucketlistdoctor-book-cover.png',
      amazonUrl: 'https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0',
      description: `Are you ready to transform your life and uncover the hidden potential within your mind? "The Neuroscience of a Bucket List: Getting the Most from Your Brain and Life" is not just a book—it's an invitation to rethink how you approach living. This groundbreaking work delves deep into the science of goal setting, motivation, and fulfilment, blending cutting-edge neuroscience with practical advice to empower readers to craft a life of purpose, joy, and achievement. A bucket list isn't just a wish list of adventures and achievements; it's a powerful tool for reshaping how you think, feel, and live. Through engaging storytelling and actionable insights, this book reveals how your brain responds to meaningful goals and helps you unlock creativity, resilience, and happiness.`,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      id: 'workbook',
      title: 'The Neuroscience of a Bucketlist Workbook',
      subtitle: 'The Companion Guide to Transform Your Life',
      image: '/images/benefits/bucketlist-workbook-cover.png',
      amazonUrl: 'https://www.amazon.com/Neuroscience-Bucket-List-Workbook-Companion/dp/B0FBFNYWLW?ref_=ast_author_dp&th=1&psc=1',
      description: `"The Neuroscience of a Bucket List Workbook: The Companion Guide to Transform Your Life" is a dynamic, science-based workbook created to help readers put their dreams into motion through practical, intentional action. As the official workbook to the acclaimed title, "The Neuroscience of a Bucket List: Getting the Most from Your Brain and Life," this guide takes readers deeper into the journey of designing a life that aligns with their values, passions, and purpose―using the transformative power of the brain.`,
      gradient: 'from-blue-500 to-teal-500',
    },
    {
      id: 'eating-disorder',
      title: 'Eating Disorder Supplement',
      subtitle: 'of The Neuroscience of a Bucketlist',
      image: '/images/benefits/eating-disorder-supplement-cover.png',
      amazonUrl: 'https://www.amazon.com/Eating-Disorder-Supplement-Neuroscience-Bucket-ebook/dp/B0FR1G9BL6?ref_=ast_author_dp&th=1&psc=1',
      description: `The Eating Disorder Supplement to The Neuroscience of a Bucket List is a supplemental guide to Dr. DeSarbo's main title book that applies cutting-edge brain science to one of the most complex and misunderstood mental health challenges: eating disorders. Written by neuropsychiatrist Dr. Jeffrey DeSarbo, this supplement expands on his original work by offering a specialized framework for treatment tailored for individuals in recovery from anorexia, bulimia, ARFID, binge eating disorder, and other disordered eating patterns and is now a core book utilized in Dr. DeSarbo's professional presentations.`,
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Books by Dr. Jeffrey DeSarbo
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Transform your life through neuroscience-backed strategies for purposeful living.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              {/* Book Cover */}
              <div className={`relative h-96 bg-gradient-to-br ${book.gradient} p-4 flex items-center justify-center`}>
                <div className="relative w-full h-full">
                  <Image
                    src={book.image}
                    alt={`${book.title} Cover`}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h2>
                <p className="text-lg text-gray-600 mb-4 italic">
                  {book.subtitle}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-6 flex-1">
                  {book.description}
                </p>

                {/* Buy Button */}
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Purchase Options Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Also Available At:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              BookBaby
            </a>
            <a
              href="https://www.barnesandnoble.com/s/desarbo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple hover:bg-purple-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Barnes & Noble
            </a>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Available in paperback, hardcover, and coming soon as an audiobook.
          </p>
        </div>

        {/* About the Author Section */}
        <div className="grid md:grid-cols-5 gap-8 items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/images/profile/profile-pic-dr-d.png"
              alt="Dr. Jeffrey DeSarbo"
              width={256}
              height={256}
              className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-white"
              style={{ objectPosition: 'center 18%' }}
            />
          </div>
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About Dr. Jeffrey DeSarbo</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Dr. Jeffrey DeSarbo is a physician, neuroscience enthusiast, and adventurer who has traveled to all seven continents. He combines medical expertise with personal adventure to help people unlock their full potential through neuroscience-backed bucket list experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The main title is co-authored with his son, Lukas DeSarbo, LCSW, bridging scientific research with practical, real-world application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
