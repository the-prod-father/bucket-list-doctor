'use client';

import { FaCheckCircle } from 'react-icons/fa';

interface Topic {
  title: string;
  description: string;
}

interface TopicCarouselProps {
  topics: Topic[];
}

export default function TopicCarousel({ topics }: TopicCarouselProps) {
  // Duplicate items for seamless infinite loop
  const duplicatedTopics = [...topics, ...topics];
  const animationDuration = `${topics.length * 6}s`; // scale duration by number of slides

  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border border-gray-100 py-8">
        <div
          className="flex animate-marquee"
          style={{ animationDuration }}
        >
          {duplicatedTopics.map((topic, index) => (
            <div
              key={`${topic.title}-${index}`}
              className="flex-shrink-0 px-6 md:px-8 w-1/2"
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

