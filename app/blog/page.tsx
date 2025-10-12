import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles & Media | Dr. DeSarbo on Medium',
  description: 'Read Dr. Jeffrey DeSarbo&apos;s latest insights on neuroscience, decision-making, and bucket lists. Featured articles include The Decisional Entropy Illusion Theory and Why Mondays Suck.',
  openGraph: {
    title: 'Articles & Media | Bucket List Doctor',
    description: 'Thought-provoking articles on brain science, adventure, and purposeful living.',
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Articles & Media</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8">
          Explore Dr. DeSarbo&apos;s latest insights on neuroscience, bucket lists, and purposeful living.
        </p>

        {/* Medium Articles Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border-l-4 border-brand-purple mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles on Medium</h2>
          <p className="text-gray-700 mb-6">
            Read Dr. D&apos;s thought-provoking articles on decision-making, neuroscience, and the science behind why we feel the way we do.
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Decisional Entropy Illusion Theory</h3>
              <p className="text-gray-600 mb-3">Exploring the neuroscience of regret and the absolute futility of dwelling on past decisions.</p>
              <a
                href="https://medium.com/@jeffrey.desarbo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center"
              >
                Read on Medium →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why Mondays Suck</h3>
              <p className="text-gray-600 mb-3">A neuropsychiatrist&apos;s take on the Monday blues and what your brain is really telling you.</p>
              <a
                href="https://medium.com/@jeffrey.desarbo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center"
              >
                Read on Medium →
              </a>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://medium.com/@jeffrey.desarbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all"
            >
              View All Articles on Medium
            </a>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon</h2>
          <p className="text-gray-700 mb-4">
            Stay tuned for video content, podcast appearances, and more insights from Dr. DeSarbo.
          </p>
          <p className="text-gray-600">
            Subscribe to our newsletter to get notified when new content is published.
          </p>
        </div>
      </div>
    </div>
  );
}
