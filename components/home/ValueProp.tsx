'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBrain, FaHeart, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function ValueProp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <FaBrain className="w-12 h-12 text-purple-600" />,
      title: 'Activates Neuroplasticity',
      description: 'Creating and pursuing goals literally rewires your brain, forming new neural pathways and strengthening cognitive function.',
      hoverImage: '/images/brain-benefits/neuroplasticity.png',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
      icon: <FaHeart className="w-12 h-12 text-pink-600" />,
      title: 'Releases Dopamine',
      description: 'Anticipating and achieving bucket list goals triggers dopamine release, creating positive reinforcement loops that motivate further growth.',
      hoverImage: '/images/brain-benefits/dopamine.png',
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      glowColor: 'rgba(236, 72, 153, 0.4)',
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Enhances Problem-Solving',
      description: 'Planning adventures and experiences forces your brain to think creatively, improving executive function and decision-making skills.',
      hoverImage: '/images/brain-benefits/problem-solving.png',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      glowColor: 'rgba(251, 191, 36, 0.4)',
    },
    {
      icon: <FaRocket className="w-12 h-12 text-blue-600" />,
      title: 'Builds Resilience',
      description: 'Overcoming challenges on your bucket list journey strengthens mental resilience and increases stress tolerance.',
      hoverImage: '/images/brain-benefits/resilience.png',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-green-600" />,
      title: 'Creates Meaning',
      description: 'Purposeful goal-setting activates brain regions associated with meaning and life satisfaction, combating anxiety and depression.',
      hoverImage: '/images/brain-benefits/meaning.png',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      glowColor: 'rgba(34, 197, 94, 0.4)',
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced animation */}
        <div className={`text-center mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Science-Backed Benefits
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            5 Ways a Bucket List <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Benefits Your Brain
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Backed by neuroscience research, bucket lists aren&apos;t just for adventure—they&apos;re essential for brain health and cognitive longevity.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Mobile: Horizontal Scroll with snap points */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
            <div className="flex gap-6 px-4">
              {benefits.map((benefit, index) => (
                <div
                  key={`mobile-${benefit.title}-${index}`}
                  className={`flex-shrink-0 w-[85vw] snap-center transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <BenefitCard benefit={benefit} index={index} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                </div>
              ))}
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {benefits.map((_, idx) => (
                <div
                  key={`dot-${idx}`}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: Responsive Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={`desktop-${benefit.title}-${index}`}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <BenefitCard benefit={benefit} index={index} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted BenefitCard component for better organization
function BenefitCard({
  benefit,
  index,
  hoveredCard,
  setHoveredCard
}: {
  benefit: any;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}) {
  const isHovered = hoveredCard === index;

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-r ${benefit.gradient}`}
        style={{ zIndex: -1 }}
      />

      {/* Main card */}
      <div className={`
        relative h-full bg-white rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg hover:shadow-xl'}
        border border-gray-100 group-hover:border-transparent
      `}>
        {/* Animated gradient border */}
        <div className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-r ${benefit.gradient} p-[2px]
        `}>
          <div className="h-full w-full bg-white rounded-2xl" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
          {/* Image section */}
          <div className="mb-6 relative">
            <div className={`
              relative w-full aspect-square rounded-xl overflow-hidden
              bg-gradient-to-br from-gray-50 to-gray-100
              transition-all duration-500
              ${isHovered ? 'scale-105' : 'scale-100'}
            `}>
              <img
                src={benefit.hoverImage}
                alt={benefit.title}
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${benefit.gradient}
                transition-opacity duration-500
                ${isHovered ? 'opacity-10' : 'opacity-0'}
              `} />

              {/* Animated particles on hover */}
              {isHovered && (
                <>
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" />
                  <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </>
              )}
            </div>

          </div>

          {/* Title */}
          <h3 className={`
            text-xl lg:text-2xl font-bold mb-3
            transition-all duration-300
            bg-gradient-to-r ${benefit.gradient} bg-clip-text
            ${isHovered ? 'text-transparent' : 'text-gray-900'}
          `}>
            {benefit.title}
          </h3>

          {/* Description */}
          <p className={`
            text-sm lg:text-base leading-relaxed flex-1
            transition-colors duration-300
            ${isHovered ? 'text-gray-700' : 'text-gray-600'}
          `}>
            {benefit.description}
          </p>

          {/* Hover indicator */}
          <div className={`
            mt-6 flex items-center gap-2 text-sm font-semibold
            transition-all duration-300
            ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'}
          `}>
            <span className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
              Learn More
            </span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}
          transition-all duration-500 origin-left
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
        `} />
      </div>
    </div>
  );
}
