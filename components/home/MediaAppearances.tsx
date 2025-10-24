'use client';

import Image from 'next/image';

export default function MediaAppearances() {
  const mediaAppearances = [
    {
      name: 'KTRS 550 ABC News Radio',
      logo: '/images/media/ktrs-550-abc-news-radio-logo.png',
      type: 'radio',
    },
    {
      name: 'News 12 Long Island',
      logo: '/images/media/news12-long-island-logo.png',
      type: 'tv',
    },
    {
      name: 'WICC Radio',
      logo: '/images/media/wicc-logo.png',
      type: 'radio',
    },
    {
      name: 'Connecticut Today',
      logo: '/images/media/connecticut-today-logo.png',
      type: 'tv',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            As Featured In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. DeSarbo shares insights on neuroscience and bucket lists across major media outlets.
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {mediaAppearances.map((media) => (
            <div
              key={media.name}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 w-full h-32"
            >
              <Image
                src={media.logo}
                alt={media.name}
                width={200}
                height={100}
                className="w-full h-auto object-contain max-h-20"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in having Dr. DeSarbo on your show or podcast?
          </p>
          <a
            href="mailto:drdesarbo@gmail.com"
            className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
