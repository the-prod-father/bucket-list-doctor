import { Metadata } from 'next';
import Link from 'next/link';
import { FaBriefcase, FaChevronLeft, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Corporate & Leadership Presentations | Bucket List Doctor™',
  description: 'Dr. Jeffrey DeSarbo\'s Corporate, Leadership & High-Performance talks on burnout prevention, team engagement, and sustainable success.',
  openGraph: {
    title: 'Corporate & Leadership Presentations | Bucket List Doctor™',
    description: 'Neuroscience-based talks for corporate teams, leaders, and high performers.',
  },
};

const talks = [
  {
    title: 'Burnout Is Not a Motivation Problem—It\'s a Brain Problem',
    description: 'Burnout reflects predictable changes in stress, reward, and the brain\'s executive networks. Leaders learn how purpose-driven engagement restores performance and well-being and how small changes in approach reorganize the brain\'s pathways to better strategize and implement result-oriented goals.',
  },
  {
    title: 'High Performance Without Burnout',
    description: 'Sustainable success requires more than grit. We discuss how past success theories have undergone massive changes that can sustain performers in the future. Change and adaptability affect the brain in ways that can be optimized to improve corporate cognitive functioning, not diminish it. This talk explains how novelty, recovery, and meaning optimize brain performance over time.',
  },
  {
    title: 'Decision Fatigue and the Modern Brain',
    description: 'Constant decisions silently drain cognitive resources. This session teaches leaders how to protect mental bandwidth and improve clarity under pressure. Neurally enhanced decision-making can be trained to develop neural pathways, leading to greater efficiency and efficacy in assessing options and boosting confidence when making choices.',
  },
  {
    title: 'Why Top Performers Lose Motivation—and How to Get It Back',
    description: 'Achievement alone does not sustain dopamine-driven engagement. The diminishing law of returns applies to individuals for many reasons. This talk reveals how meaningful goals, personal and professional, reignite drive in high achievers.',
  },
  {
    title: 'The Neuroscience of Engagement: Keeping Teams Mentally Alive',
    description: 'Engaged teams are neurologically stimulated teams. Stress can make team efforts feel like individual overwhelm and responsibility, leading to a pulling apart of a cohesive team and thus reducing productivity. Leaders learn how new techniques that foster novelty, autonomy, and purpose can enhance focus, morale, and productivity at the brain level.',
  },
  {
    title: 'Striving for the Top, Getting There, and Staying There in High-Stakes Careers',
    description: 'Routine increases efficiency but erodes creativity and satisfaction. It can also lead to cognitive decline in areas where one previously excelled. This presentation shows how intentional disruption enhances innovation and resilience, enabling goal achievement and helping handle the pressure of staying on top.',
  },
  {
    title: 'Purpose as a Performance Tool',
    description: 'Purpose is not soft—it is strategic. Nothing can be less helpful than having the brain do something without a clear purpose. This has become exponentially true in the post-COVID era. This talk explains how to actively find meaning and improve decision-making, stress tolerance, and leadership effectiveness.',
  },
  {
    title: 'Future-Focused Thinking: Training the Brain to Lead Forward',
    description: 'The brain performs best when it has something to move toward. This session teaches leaders how to set future-oriented goals that strengthen motivation and adaptability, incorporating a bucket-list methodology that can work in the workplace and at home.',
  },
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-brand-purple transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/speaking" className="text-gray-600 hover:text-brand-purple transition-colors">
                Speaking
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Corporate & Leadership
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
            <FaBriefcase className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Corporate, Leadership & High-Performance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 px-4">
            Presentations designed for leaders, teams, and organizations seeking sustainable peak performance through neuroscience-based strategies.
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Drawing on a career that spans Wall Street finance, marketing research, entrepreneurship, and medicine, Dr. DeSarbo brings a multidisciplinary, story-driven approach to every presentation. His corporate talks combine rigorous neuroscience with practical strategies for sustainable high performance.
          </p>
        </div>

        {/* Talks List */}
        <div className="space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span>{talk.title}</span>
              </h2>
              <p className="text-gray-700 leading-relaxed ml-11">
                {talk.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Dr. DeSarbo for Your Corporate Event
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Custom topics, workshops, and seminars are available for your organization&apos;s specific needs.
          </p>
          <a
            href="mailto:DrDBucketList@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors"
          >
            <FaEnvelope />
            Contact for Booking
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
          >
            <FaChevronLeft className="w-4 h-4" />
            Back to All Speaking Topics
          </Link>
        </div>
      </div>
    </div>
  );
}
