'use client';

import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Topic {
  title: string;
  description: string;
}

interface TopicCarouselProps {
  topics: Topic[];
}

export default function TopicCarousel({ topics }: TopicCarouselProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const cardWidth = 100 / 2; // Show 2 cards at once (50% each)
        const singleSetWidth = cardWidth * topics.length;
        let newOffset = prev + 0.02; // Slow scroll speed
        
        // Seamless infinite loop: reset when we reach end of first set
        // Since duplicate set matches first set exactly, reset is invisible
        // This creates snake effect - last card appears behind first card
        if (newOffset >= singleSetWidth) {
          newOffset = newOffset - singleSetWidth;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [topics.length]);

  // Duplicate items for seamless infinite loop (snake effect)
  // Last card appears behind first card - infinite loop from the beginning
  const duplicatedTopics = [...topics, ...topics];

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border border-gray-100 py-8">
        <div
          ref={containerRef}
          className="flex"
          style={{ 
            transform: `translateX(-${offset}%)`,
            willChange: 'transform',
            transition: 'none' // Instant reset for seamless loop
          }}
        >
          {duplicatedTopics.map((topic, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 md:px-8"
              style={{ width: '50%' }} // Show 2 cards at once
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-200 shadow-md h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

