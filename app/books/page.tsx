import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books by Dr. DeSarbo | The Neuroscience of a Bucket List',
  description: 'Get &ldquo;The Neuroscience of a Bucket List&rdquo; by Dr. Jeffrey DeSarbo. Learn the science behind goal-setting, neuroplasticity, and how bucket lists enhance brain health and cognitive function.',
  openGraph: {
    title: 'The Neuroscience of a Bucket List - Available on Amazon',
    description: 'A powerful tool for brain health, cognitive enhancement, and purposeful living.',
    images: ['/images/benefits/bucketlistdoctor-book-cover.png'],
  },
};

export default function BooksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Books</h1>
      <div className="prose prose-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Neuroscience of a Bucket List</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Discover how your bucket list isn&apos;t just a wish list—it&apos;s a powerful tool for brain health, cognitive enhancement, and purposeful living.
        </p>
        {/* Book Cover Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/benefits/bucketlistdoctor-book-cover.png"
            alt="The Neuroscience of a Bucket List Book Cover"
            className="w-64 h-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://a.co/d/559YKwr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all"
          >
            Buy on Amazon
          </a>
          <a
            href="https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Book Baby
          </a>
          <a
            href="https://www.barnesandnoble.com/s/desarbo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Barnes & Noble
          </a>
        </div>
      </div>
    </div>
  );
}
