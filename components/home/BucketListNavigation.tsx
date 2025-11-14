'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BucketListNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const bucketListSections = [
    {
      id: 'blog',
      title: 'Newsletter',
      description: 'Read weekly essays on neuroscience and purposeful living.',
      buttonText: 'Read Latest',
      image: '/images/cards/dr-d-writing.png',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgGradient: 'from-amber-100 via-orange-50 to-red-100',
      link: '/newsletter',
    },
    {
      id: 'books',
      title: 'Get the Books',
      description: 'Discover the neuroscience behind bucket lists.',
      buttonText: 'Buy Now',
      image: '/images/benefits/bucketlistdoctor-book-cover.png',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-100 via-pink-50 to-red-100',
      link: 'https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0',
    },
    {
      id: 'tips',
      title: 'Tips & Advice',
      description: 'Practical advice for your bucket list journey.',
      buttonText: 'Get Tips',
      image: '/images/benefits/bucketlist-sailing.jpeg',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-100 via-orange-50 to-red-100',
      link: '/tips-ideas',
    },
    {
      id: 'brain',
      title: 'Your Brain on a Bucket List',
      description: 'The neuroscience behind adventure and goals.',
      buttonText: 'Learn More',
      image: '/images/cards/brain-network.png',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgGradient: 'from-indigo-100 via-purple-50 to-pink-100',
      link: '/your-brain',
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Your Bucket List Journey Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Explore, discover, and transform your brain through purposeful adventure and meaningful experiences.
          </p>
          
          {/* Get the Books CTA */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <a
              href="https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg md:text-xl"
            >
              Get the Books
            </a>
          </div>
        </div>

        {/* Bucket List Navigation Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {bucketListSections.map((section, index) => (
            <a
              key={section.id}
              href={section.link}
              target={section.link.startsWith('http') ? '_blank' : '_self'}
              rel={section.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative transform transition-all duration-700 block ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br ${section.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-48 sm:h-56 md:h-64 cursor-pointer`}>
                {/* Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none z-10">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block bg-black group-hover:bg-gray-800 text-white font-bold py-2 px-3 sm:py-3 sm:px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 text-xs sm:text-sm">
                      {section.buttonText}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-4 right-3 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
