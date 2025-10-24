'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CrossSiteNavigation() {
  const [hoveredSite, setHoveredSite] = useState<number | null>(null);

  const otherSites = [
    {
      id: 'ed180',
      name: 'ED180',
      description: 'Eating Disorder Treatment Programs',
      url: 'https://ed-180.com/',
      logo: '/images/logos/ed180-logo.jpg',
      gradient: 'from-yellow-400 via-orange-400 to-red-400',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'drdesarbo',
      name: 'Dr. DeSarbo',
      description: 'Professional Medical Practice',
      url: 'https://www.drdesarbo.com',
      logo: '/images/profile/dr-desarbo-professional-headshot.jpg',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Dr. DeSarbo&apos;s Other Websites
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover more resources, professional services, and published works across Dr. D&apos;s digital presence.
        </p>
        </div>

        {/* Site Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {otherSites.map((site, index) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredSite(index)}
              onMouseLeave={() => setHoveredSite(null)}
            >
              <div className={`relative overflow-hidden rounded-xl ${site.bgColor} p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full`}>
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Logo/Image */}
                  <div className={`w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-opacity-50 transition-all duration-300 transform group-hover:scale-110 ${!site.logo ? `bg-gradient-to-br ${site.gradient}` : ''}`}>
                    {site.logo ? (
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 18%' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                        {site.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Site Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: hoveredSite === index ? `linear-gradient(to right, ${site.gradient})` : undefined }}>
                    {site.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {site.description}
                  </p>

                  {/* Visit Button */}
                  <div className="inline-flex items-center text-brand-purple group-hover:text-brand-blue font-semibold transition-colors">
                    Visit Site
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${site.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All websites are part of Dr. Jeffrey DeSarbo&apos;s professional network
          </p>
        </div>
      </div>
    </section>
  );
}

