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
  const articles = [
    {
      title: 'The Decisional Entropy Illusion Theory',
      description: 'Exploring the neuroscience of regret and the absolute futility of dwelling on past decisions.',
      category: 'Neuroscience',
      readTime: '8 min read',
      color: 'from-brand-purple to-brand-pink',
    },
    {
      title: 'Why Mondays Suck',
      description: 'A neuropsychiatrist&apos;s take on the Monday blues and what your brain is really telling you.',
      category: 'Psychology',
      readTime: '6 min read',
      color: 'from-brand-blue to-brand-teal',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Articles & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore Dr. DeSarbo&apos;s latest insights on neuroscience, bucket lists, and purposeful living
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured on Medium</h2>
            <a
              href="https://medium.com/@drdesarbo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center transition-colors"
            >
              View All Articles →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${article.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src="/images/cards/dr-d-writing.png"
                      alt="Dr. D Writing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="inline-block bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-2 w-fit">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-purple transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <a
                      href="https://medium.com/@drdesarbo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center transition-colors"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medium CTA Section */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-purple text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Follow Dr. D on Medium
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Get notified when new articles are published. Dive deep into the neuroscience of decision-making, bucket lists, and living a purposeful life.
            </p>
            <a
              href="https://medium.com/@drdesarbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Follow on Medium
            </a>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Video Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Video Content</h3>
            <p className="text-gray-600">
              Upcoming video series exploring bucket list neuroscience
            </p>
          </div>

          {/* Podcast Appearances */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Podcast Features</h3>
            <p className="text-gray-600">
              Guest appearances discussing adventure and brain science
            </p>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe for exclusive insights and bucket list inspiration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
