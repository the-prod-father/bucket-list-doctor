'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface MediaAppearance {
  id: string;
  name: string;
  logo_url: string;
  type: string;
  gradient: string;
}

export default function MediaAppearances() {
  const [isVisible, setIsVisible] = useState(false);
  const [mediaAppearances, setMediaAppearances] = useState<MediaAppearance[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Fallback hardcoded data - matches Speakers page exactly
  const fallbackMedia = [
    {
      id: '1',
      name: 'Fox 5',
      logo_url: '/images/speaker/fox-5-top.png',
      type: 'tv',
      gradient: 'from-red-500 via-blue-500 to-red-500',
    },
    {
      id: '2',
      name: 'NBC News Now',
      logo_url: '/images/speaker/NBC-NEWS-NOW.png',
      type: 'tv',
      gradient: 'from-yellow-500 via-green-500 to-blue-500',
    },
    {
      id: '3',
      name: 'WBAP',
      logo_url: '/images/speaker/WBAP.png',
      type: 'radio',
      gradient: 'from-red-500 via-white to-blue-500',
    },
    {
      id: '4',
      name: '700 WLW',
      logo_url: '/images/speaker/700-WLW.png',
      type: 'radio',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
    },
    {
      id: '5',
      name: 'iHeart Radio',
      logo_url: '/images/speaker/iheart-radio.png',
      type: 'radio',
      gradient: 'from-red-500 via-pink-500 to-purple-500',
    },
    {
      id: '6',
      name: 'Doctor Radio / Sirius XM',
      logo_url: '/images/speaker/doctor-radio-siriusxm.png',
      type: 'radio',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
    },
    {
      id: '7',
      name: 'Newsday',
      logo_url: '/images/speaker/newsday-banner.png',
      type: 'print',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
      id: '8',
      name: 'WJR Radio',
      logo_url: '/images/speaker/wjr-radio-banner.png',
      type: 'radio',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
      id: '9',
      name: 'KOA Radio',
      logo_url: '/images/speaker/koa-radio-banner.png',
      type: 'radio',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
    },
    {
      id: '10',
      name: 'WBZ News Radio',
      logo_url: '/images/speaker/wbz-news-radio.png',
      type: 'radio',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    },
    {
      id: '11',
      name: 'KTRS 550 ABC News Radio',
      logo_url: '/images/media/ktrs-550-abc-news-radio-logo.png',
      type: 'radio',
      gradient: 'from-blue-500 via-red-500 to-blue-500',
    },
    {
      id: '12',
      name: 'News 12 Long Island',
      logo_url: '/images/media/news12-long-island-logo.png',
      type: 'tv',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
    },
    {
      id: '13',
      name: 'WICC Radio',
      logo_url: '/images/media/wicc-logo.png',
      type: 'radio',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
      id: '14',
      name: 'Fox 5 Washington DC',
      logo_url: '/images/speaker/fox-5-end.png',
      type: 'tv',
      gradient: 'from-red-500 via-blue-500 to-red-500',
    },
    {
      id: '15',
      name: 'Connecticut Today',
      logo_url: '/images/media/connecticut-today-logo.png',
      type: 'radio',
      gradient: 'from-blue-500 via-gray-500 to-blue-500',
    },
  ];

  const fetchMediaAppearances = useCallback(async () => {
    try {
      const response = await fetch('/api/media');
      const data = await response.json();
      if (data.media && data.media.length > 0) {
        setMediaAppearances(data.media);
      } else {
        // Fallback to hardcoded if database is empty
        setMediaAppearances(fallbackMedia);
      }
    } catch (error) {
      console.error('Error fetching media appearances:', error);
      // Fallback to hardcoded on error
      setMediaAppearances(fallbackMedia);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMediaAppearances();
  }, [fetchMediaAppearances]);

  // Intersection Observer for scroll animations
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #000 1px, transparent 1px),
          linear-gradient(to bottom, #000 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with enhanced animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Media Presence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            As <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Featured On</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dr. DeSarbo has been featured with his insights on psychiatry, neuroscience and bucket lists across major media outlets.
          </p>
        </div>

        {/* Media Logos Grid - matches Speakers page exactly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
          {mediaAppearances.map((media, index) => (
            <div
              key={media.name}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32"
            >
              <Image
                src={media.logo_url}
                alt={media.name}
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Call to Action with enhanced styling */}
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-purple-100/50 opacity-50" />

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
                Interested in having Dr. DeSarbo on your show or podcast?
              </p>
              <a
                href="mailto:drdbucketlist@gmail.com"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
