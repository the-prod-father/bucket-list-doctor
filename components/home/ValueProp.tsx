'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBrain, FaHeart, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function ValueProp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <FaBrain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-600" />,
      title: 'Activates Neuroplasticity',
      description: 'Creating and pursuing goals literally rewires your brain, forming new neural pathways and strengthening cognitive function.',
      hoverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-100 via-pink-50 to-red-100',
      glow: 'shadow-purple-200',
    },
    {
      icon: <FaHeart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-600" />,
      title: 'Releases Dopamine',
      description: 'Anticipating and achieving bucket list goals triggers dopamine release, creating positive reinforcement loops that motivate further growth.',
      hoverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      bgGradient: 'from-pink-100 via-rose-50 to-orange-100',
      glow: 'shadow-pink-200',
    },
    {
      icon: <FaLightbulb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-600" />,
      title: 'Enhances Problem-Solving',
      description: 'Planning adventures and experiences forces your brain to think creatively, improving executive function and decision-making skills.',
      hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-100 via-orange-50 to-red-100',
      glow: 'shadow-yellow-200',
    },
    {
      icon: <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
      title: 'Builds Resilience',
      description: 'Overcoming challenges on your bucket list journey strengthens mental resilience and increases stress tolerance.',
      hoverImage: 'https://images.unsplash.com/photo-1464822759844-d150baec5b4e?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-100 via-cyan-50 to-teal-100',
      glow: 'shadow-blue-200',
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600" />,
      title: 'Creates Meaning',
      description: 'Purposeful goal-setting activates brain regions associated with meaning and life satisfaction, combating anxiety and depression.',
      hoverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
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

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
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
            Backed by neuroscience research, bucket lists aren't just for adventure—they're essential for brain health and cognitive longevity.
          </p>
        </div>

        {/* Rolling Banner - All Devices */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`flex ${isPaused ? 'animate-pause' : 'animate-scroll'}`}
            style={{
              width: `${extendedBenefits.length * 100}%`,
              animationDuration: '60s', // Half speed - much slower
            }}
          >
            {extendedBenefits.map((benefit, index) => (
              <div 
                key={`${benefit.title}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / extendedBenefits.length}%` }}
              >
                <div 
                  className={`group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.bgGradient} shadow-lg hover:shadow-2xl ${benefit.glow} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden h-64 sm:h-72 md:h-80`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>

                  {/* Hover Image Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-30' : 'opacity-0'
                  }`}>
                    <img
                      src={benefit.hoverImage}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-70`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-3 sm:mb-4 md:mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-all duration-300`}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 group-hover:text-white/95 transition-colors duration-300 leading-relaxed flex-1">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Animated rainbow border */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} style={{ padding: '3px' }}>
                    <div className={`w-full h-full bg-gradient-to-br ${benefit.bgGradient} rounded-lg sm:rounded-xl`} />
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges for better visual effect */}
          <div className="absolute left-0 top-8 bottom-8 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-50 via-pink-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-8 bottom-8 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-cyan-50 via-blue-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
