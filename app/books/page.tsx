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
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Neuroscience of a Bucket List
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover how your bucket list isn&apos;t just a wish list—it&apos;s a powerful tool for brain health, cognitive enhancement, and purposeful living
          </p>
        </div>

        {/* Main Book Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src="/images/benefits/bucketlistdoctor-book-cover.png"
                alt="The Neuroscience of a Bucket List Book Cover"
                className="w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-2xl blur-2xl -z-10 group-hover:blur-3xl transition-all"></div>
            </div>
          </div>

          {/* Book Description */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting the most from your brain and life
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Join Dr. Jeffrey DeSarbo on a journey through the fascinating intersection of neuroscience and adventure. This groundbreaking book reveals how bucket lists literally rewire your brain for success, happiness, and resilience.
                </p>
                <p>
                  Based on cutting-edge research and personal experiences from all seven continents, Dr. D shows you how to harness neuroplasticity, dopamine, and purposeful goal-setting to transform your life.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-brand-purple to-brand-blue text-white rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-yellow text-xl mr-3">✓</span>
                  <span>How bucket lists activate neuroplasticity and create new neural pathways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-xl mr-3">✓</span>
                  <span>The science behind dopamine and goal-setting motivation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-xl mr-3">✓</span>
                  <span>Strategies to enhance problem-solving and decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-xl mr-3">✓</span>
                  <span>How to build stress resilience through meaningful experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-xl mr-3">✓</span>
                  <span>Practical tools to create your own transformative bucket list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Purchase Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get Your Copy Today
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://a.co/d/559YKwr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Buy on Amazon
            </a>
            <a
              href="https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Book Baby
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
            Available in paperback, hardcover, and coming soon as an audiobook
          </p>
        </div>

        {/* About the Author Section */}
        <div className="grid md:grid-cols-5 gap-8 items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="md:col-span-2 flex justify-center">
            <img
              src="/images/profile/profile-pic-dr-d.png"
              alt="Dr. Jeffrey DeSarbo"
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
              Co-authored with his son, Lukas DeSarbo, LCSW, this book bridges scientific research with practical, real-world application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
