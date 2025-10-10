import { FaAmazon, FaBook } from 'react-icons/fa';

export default function BookShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-teal rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <FaBook className="w-32 h-32 mx-auto mb-4 opacity-50" />
                <p className="text-sm opacity-70">Book Cover Placeholder</p>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Neuroscience of a Bucket List
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Discover how your bucket list isn't just a wish list—it's a powerful tool for brain health, cognitive enhancement, and purposeful living.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Learn the neuroscience behind goal-setting and motivation</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Understand how bucket lists activate neuroplasticity</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Get practical strategies to maximize brain benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-yellow mr-3 text-xl">✓</span>
                <span>Explore the connection between adventure and cognitive health</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com/dp/B0DJHB1QSN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                <FaAmazon className="w-6 h-6" />
                Buy on Amazon
              </a>
              <a
                href="https://www.bookbaby.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-all"
              >
                <FaBook className="w-5 h-5" />
                Book Baby
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
