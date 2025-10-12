'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBrain, FaHeart, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function ValueProp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <FaBrain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-600" />,
      title: 'Activates Neuroplasticity',
      description: 'Creating and pursuing goals literally rewires your brain, forming new neural pathways and strengthening cognitive function.',
      hoverImage: '/images/brain-benefits/neuroplasticity.png',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-100 via-pink-50 to-red-100',
      glow: 'shadow-purple-200',
    },
    {
      icon: <FaHeart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-600" />,
      title: 'Releases Dopamine',
      description: 'Anticipating and achieving bucket list goals triggers dopamine release, creating positive reinforcement loops that motivate further growth.',
      hoverImage: '/images/brain-benefits/dopamine.png',
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      bgGradient: 'from-pink-100 via-rose-50 to-orange-100',
      glow: 'shadow-pink-200',
    },
    {
      icon: <FaLightbulb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-600" />,
      title: 'Enhances Problem-Solving',
      description: 'Planning adventures and experiences forces your brain to think creatively, improving executive function and decision-making skills.',
      hoverImage: '/images/brain-benefits/problem-solving.png',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-100 via-orange-50 to-red-100',
      glow: 'shadow-yellow-200',
    },
    {
      icon: <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Builds Resilience',
      description: 'Overcoming challenges on your bucket list journey strengthens mental resilience and increases stress tolerance.',
      hoverImage: '/images/brain-benefits/resilience.png',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-100 via-cyan-50 to-teal-100',
      glow: 'shadow-blue-200',
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600" />,
      title: 'Creates Meaning',
      description: 'Purposeful goal-setting activates brain regions associated with meaning and life satisfaction, combating anxiety and depression.',
      hoverImage: '/images/brain-benefits/meaning.png',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      bgGradient: 'from-green-100 via-emerald-50 to-cyan-100',
      glow: 'shadow-green-200',
    },
  ];

  // Create multiple sets for seamless infinite scroll
  const extendedBenefits = [...benefits, ...benefits, ...benefits];

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

  // Auto-scroll pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Pause auto-scroll when user manually scrolls
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsPaused(true);

      // Resume auto-scroll after user stops scrolling for 3 seconds
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating brain images */}
        <img
          src="/images/brain-benefits/neuroplasticity.png"
          alt=""
          className="absolute top-20 left-[5%] w-24 h-24 md:w-32 md:h-32 opacity-10 animate-float"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <img
          src="/images/brain-benefits/dopamine.png"
          alt=""
          className="absolute top-40 right-[8%] w-20 h-20 md:w-28 md:h-28 opacity-15 animate-float"
          style={{ animationDelay: '1.5s', animationDuration: '10s' }}
        />
        <img
          src="/images/hero/2d-brain-hero.png"
          alt=""
          className="absolute bottom-32 left-[10%] w-28 h-28 md:w-36 md:h-36 opacity-8 animate-float"
          style={{ animationDelay: '3s', animationDuration: '12s' }}
        />
        <img
          src="/images/brain-benefits/problem-solving.png"
          alt=""
          className="absolute bottom-20 right-[5%] w-24 h-24 md:w-32 md:h-32 opacity-12 animate-float"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        />
        <img
          src="/images/cards/brain-network.png"
          alt=""
          className="absolute top-1/3 left-[3%] w-32 h-32 md:w-40 md:h-40 opacity-10 animate-float"
          style={{ animationDelay: '4s', animationDuration: '11s' }}
        />
        <img
          src="/images/brain-benefits/resilience.png"
          alt=""
          className="absolute top-1/2 right-[12%] w-20 h-20 md:w-28 md:h-28 opacity-12 animate-float"
          style={{ animationDelay: '5s', animationDuration: '13s' }}
        />
        <img
          src="/images/brain-benefits/meaning.png"
          alt=""
          className="absolute bottom-40 right-[20%] w-24 h-24 md:w-32 md:h-32 opacity-10 animate-float"
          style={{ animationDelay: '2.5s', animationDuration: '10s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            5 Ways a Bucket List Benefits Your Brain
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Backed by neuroscience research, bucket lists aren&apos;t just for adventure—they&apos;re essential for brain health and cognitive longevity.
          </p>
        </div>

        {/* Auto-Scrolling Carousel with Manual Scroll */}
        <div className="relative py-8">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
            }}
          >
            <div
              className={`flex gap-4 sm:gap-6 ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                width: `${extendedBenefits.length * 33.33}%`,
                animationDuration: '60s',
              }}
            >
            {extendedBenefits.map((benefit, index) => (
              <div
                key={`${benefit.title}-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`group relative p-6 sm:p-7 md:p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden h-[28rem] sm:h-[30rem] md:h-[32rem] border-2 border-transparent hover:border-gray-200`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient accent bar on left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${benefit.gradient} transform transition-all duration-500 ${hoveredCard === index ? 'scale-y-100' : 'scale-y-0'}`} />

                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-5' : 'opacity-0'
                  }`} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Brain Image with Icon Overlay */}
                    <div className="mb-4 sm:mb-5 md:mb-6 relative">
                      <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                        <img
                          src={benefit.hoverImage}
                          alt={benefit.title}
                          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      </div>
                      {/* Icon badge overlaying the image */}
                      <div className={`absolute -bottom-4 left-4 inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-2 transition-all duration-300 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent group-hover:scale-105`}>
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed flex-1">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Fade edges for seamless scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-purple-50 via-pink-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-l from-cyan-50 via-blue-50 to-transparent pointer-events-none z-10" />

          {/* Scroll indicator hint */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3 pointer-events-none z-10">
            <div className="text-xs text-gray-500 font-medium">
              Scroll or hover to explore →
            </div>
            <div className="flex gap-1.5">
              {benefits.map((_, idx) => (
                <div
                  key={idx}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-40 animate-pulse"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
