'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaBuilding, FaHospital, FaUniversity, FaBroadcastTower } from 'react-icons/fa';

interface Experience {
  type: string;
  description: string;
  iconName: string;
}

interface ExperienceCarouselProps {
  experiences: Experience[];
}

const iconMap: Record<string, any> = {
  FaBuilding,
  FaHospital,
  FaUniversity,
  FaBroadcastTower,
};

export default function ExperienceCarousel({ experiences }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [experiences.length, isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border border-gray-100 min-h-[250px]">
        {/* Experience Cards */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {experiences.map((experience, index) => {
            const Icon = iconMap[experience.iconName] || FaBuilding;
            return (
              <div
                key={index}
                className="w-full flex-shrink-0 px-8 py-10 md:px-12 md:py-14"
              >
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {experience.type}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Previous experience"
        >
          <FaChevronLeft className="w-5 h-5 text-purple-600" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Next experience"
        >
          <FaChevronRight className="w-5 h-5 text-purple-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-5000 ease-linear"
            style={{
              width: `${((currentIndex + 1) / experiences.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

