import { Metadata } from 'next';
import Link from 'next/link';
import { FaShip, FaChevronLeft, FaEnvelope, FaGlobe, FaBrain } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Cruise & Travel Enrichment Presentations | Bucket List Doctor™',
  description: 'Dr. Jeffrey DeSarbo\'s Cruise & Travel Enrichment talks explore the neuroscience of travel, destination insights, and mindfulness practices for travelers.',
  openGraph: {
    title: 'Cruise & Travel Enrichment Presentations | Bucket List Doctor™',
    description: 'Neuroscience-based travel talks, destination previews, and mindfulness sessions for cruises and travel groups.',
  },
};

const mainTalks = [
  {
    title: 'Your Brain and Your Bucket List: Getting the Most from Both',
    description: 'This signature talk comes alive with travelers. Based on Dr. DeSarbo\'s book of the same title, this lecture series explores how creating and living with a bucket list enhances brain function and mental health and well-being. How bucket listing utilizes anticipation, novelty, gratitude, and meaning to activate brain networks linked to happiness and resilience. Audiences leave inspired with a science-backed framework for living more fully at any stage of life. Worksheets included.',
    badge: 'Lecture Series',
  },
  {
    title: 'The Bucket List Brain: Why Some Experiences Stay With Us Forever',
    description: 'Certain experiences permanently reshape how we see ourselves and the world. This presentation explores the neuroscience behind transformative travel and personal milestones.',
  },
  {
    title: 'The Neuroscience of Travel: Why New Places Change the Brain',
    description: 'Travel stimulates neuroplasticity by engaging curiosity, attention, and emotional memory. This talk explains why exploring new environments leaves us feeling more alive and mentally refreshed.',
  },
  {
    title: 'Why Travel Feels So Meaningful: A Brain-Based Explanation',
    description: 'New experiences activate reward and memory circuits more powerfully than routine. Audiences discover why travel can create a lasting emotional impact long after the journey ends.',
  },
  {
    title: 'The Science of Anticipation: Why Planning a Trip Feels So Good',
    description: 'The brain benefits from anticipating experiences just as much as from living them. This presentation reveals how anticipation boosts mood, motivation, and emotional resilience.',
  },
  {
    title: 'Travel as Preventive Medicine for the Brain',
    description: 'Novel environments challenge the brain in healthy ways that support cognitive and emotional health. This talk reframes travel as an investment in mental longevity rather than indulgence.',
  },
  {
    title: 'Why We Remember Trips More Than Years',
    description: 'The brain encodes novelty and emotion more deeply than routine. Audiences learn why a single journey can feel richer than entire stretches of everyday life.',
  },
  {
    title: 'Living Forward: How Travel Helps Us Escape Autopilot',
    description: 'Routine slowly dulls the brain\'s engagement with life. Travel disrupts autopilot mode, restoring presence, curiosity, and emotional vitality.',
  },
  {
    title: 'From Sightseeing to Meaning-Making: How Experiences Become Memories',
    description: 'Not all experiences are remembered equally. This talk explains how attention, emotion, and intention turn moments into lifelong memories.',
  },
];

const experientialSeries = {
  title: 'Morning Mental Exercise: The Neuroscience of Mindfulness',
  description: 'With guided meditations, visualizations, progressive muscle relaxation, and other mindfulness practices, Dr. DeSarbo will first discuss the neurobiological benefits of these methods before leading a group experience in the techniques that benefit mental and physical well-being.',
  badge: 'Experiential Series',
};

const destinationTalks = {
  title: 'Destination Talks (with a unique Bucket List emphasis)',
  description: 'Dr. DeSarbo is a proud member of the Seven Continents Club. Having traveled to all 7 continents and hundreds of cities and countries worldwide, Dr. DeSarbo can offer interesting and insightful previews to travelers planning their adventures. In a unique twist, Dr. DeSarbo helps travelers discover the bucket-list opportunities of specific destinations and excursions, elevating their experiences to new heights.',
  badge: 'Destination Preview',
};

export default function CruisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/speaking" className="text-gray-600 hover:text-teal-600 transition-colors">
                Speaking
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Cruise & Travel Enrichment
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
            <FaShip className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Cruise & Travel Enrichment
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 px-4">
            Engaging presentations perfect for cruise ships, travel groups, and adventure seekers exploring the neuroscience of meaningful travel.
          </p>
        </div>

        {/* Seven Continents Badge */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-6 md:p-8 text-white mb-8 flex items-center gap-4">
          <FaGlobe className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Seven Continents Club Member</h3>
            <p className="text-teal-100">
              Dr. DeSarbo has traveled to all 7 continents and hundreds of cities and countries worldwide, bringing firsthand experience to every travel presentation.
            </p>
          </div>
        </div>

        {/* Main Talks */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Neuroscience of Travel Talks</h2>
        <div className="space-y-6 mb-12">
          {mainTalks.map((talk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span className="flex-1">
                  {talk.title}
                  {talk.badge && (
                    <span className="ml-2 inline-block bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full font-medium">
                      {talk.badge}
                    </span>
                  )}
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                {talk.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experiential Series */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mindfulness & Experiential Sessions</h2>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm">
              <FaBrain className="w-4 h-4" />
            </span>
            <span className="flex-1">
              {experientialSeries.title}
              <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                {experientialSeries.badge}
              </span>
            </span>
          </h3>
          <p className="text-gray-700 leading-relaxed ml-11">
            {experientialSeries.description}
          </p>
        </div>

        {/* Destination Talks */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Destination Previews</h2>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm">
              <FaGlobe className="w-4 h-4" />
            </span>
            <span className="flex-1">
              {destinationTalks.title}
              <span className="ml-2 inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                {destinationTalks.badge}
              </span>
            </span>
          </h3>
          <p className="text-gray-700 leading-relaxed ml-11">
            {destinationTalks.description}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Dr. DeSarbo for Your Cruise or Travel Event
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Perfect for cruise ship enrichment programs, travel groups, and destination events. Lecture series and multi-day programs available.
          </p>
          <a
            href="mailto:DrDBucketList@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors"
          >
            <FaEnvelope />
            Contact for Booking
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
          >
            <FaChevronLeft className="w-4 h-4" />
            Back to All Speaking Topics
          </Link>
        </div>
      </div>
    </div>
  );
}
