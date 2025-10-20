import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos & Media | Dr. DeSarbo',
  description: 'Watch Dr. Jeffrey DeSarbo&apos;s videos on neuroscience, bucket lists, and purposeful living. Media appearances, interviews, and educational content.',
  openGraph: {
    title: 'Videos & Media | Bucket List Doctor',
    description: 'Educational videos and media appearances on brain science, adventure, and living with purpose.',
  },
};

export default function BlogPage() {
  // YouTube video IDs - these can be easily updated as new videos are published
  const videos = [
    {
      id: 'PLACEHOLDER_1',
      title: 'The Neuroscience of a Bucket List',
      description: 'Learn how bucket lists activate neuroplasticity and enhance brain health.',
      category: 'Education',
    },
    {
      id: 'PLACEHOLDER_2',
      title: 'Interview: Living with Purpose',
      description: 'Dr. DeSarbo discusses the connection between adventure and cognitive enhancement.',
      category: 'Interview',
    },
    {
      id: 'PLACEHOLDER_3',
      title: 'Brain Science & Goal Setting',
      description: 'Understanding the neuroscience behind meaningful goals and achievement.',
      category: 'Education',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Videos & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Watch Dr. DeSarbo&apos;s insights on neuroscience, bucket lists, and purposeful living.
          </p>
        </div>

        {/* Featured Videos Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Videos</h2>
            <a
              href="https://www.youtube.com/@bucketlistdoctor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple hover:text-brand-blue font-semibold inline-flex items-center transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              View Channel →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Video Embed */}
                <div className="relative w-full pb-[56.25%] bg-gray-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <span className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-bold mb-3">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {video.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe on YouTube
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Get notified when new videos are published. Deep dives into neuroscience, bucket lists, and living a purposeful life.
            </p>
            <a
              href="https://www.youtube.com/@bucketlistdoctor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Additional Media Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Podcast Appearances */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4zm-1 10h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Podcast Features</h3>
            <p className="text-gray-600">
              Guest appearances discussing adventure and brain science.
            </p>
          </div>

          {/* Radio Interviews */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Radio Interviews</h3>
            <p className="text-gray-600">
              Listen to Dr. D&apos;s radio interviews and media appearances.
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
              Subscribe for exclusive insights and bucket list inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
