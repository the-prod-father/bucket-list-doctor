import Image from 'next/image';
import { FaAmazon, FaBook } from 'react-icons/fa';

export default function BookShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover Image with 3D Flip Animation */}
          <div className="flex justify-center" style={{ perspective: '1200px' }}>
            <div className="group relative w-80 h-[480px]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                {/* Front - Book Cover */}
                <div className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <Image
                    src="/images/benefits/bucketlistdoctor-book-cover.png"
                    alt="The Neuroscience of a Bucket List Book Cover"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
                {/* Back - Book Back Cover */}
                <div className="absolute inset-0 backface-hidden rotate-y-180" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <Image
                    src="/images/benefits/bucketlistdoctor-book-back-cover.png"
                    alt="The Neuroscience of a Bucket List Back Cover"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Neuroscience of a Bucket List
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Discover how your bucket list isn&apos;t just a wish list—it&apos;s a powerful tool for brain health, cognitive enhancement, and purposeful living.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Learn the neuroscience behind goal-setting and motivation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Understand how bucket lists activate neuroplasticity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Get practical strategies to maximize brain benefits.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Explore the connection between adventure and cognitive health.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://a.co/d/559YKwr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <FaAmazon className="w-6 h-6" />
                Buy on Amazon
              </a>
              <a
                href="https://store.bookbaby.com/book/the-neuroscience-of-a-bucket-list?srsltid=AfmBOoqGi5v7J9qv2KD7hLrNoibKl46uxPP9ZqZ0HXKSx-aYiw6t957p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-all"
              >
                <FaBook className="w-5 h-5" />
                BookBaby
              </a>
              <a
                href="https://www.barnesandnoble.com/s/desarbo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-all"
              >
                <FaBook className="w-5 h-5" />
                Barnes & Noble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
