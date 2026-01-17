import { Metadata } from 'next';
import Link from 'next/link';
import { FaBrain, FaChevronLeft, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Life Enrichment Presentations | Bucket List Doctor™',
  description: 'Dr. Jeffrey DeSarbo\'s Life Enrichment & General Audience talks explore neuroscience, brain health, and purposeful living for audiences of all backgrounds.',
  openGraph: {
    title: 'Life Enrichment Presentations | Bucket List Doctor™',
    description: 'Neuroscience-based talks on brain health, purpose, and living fully at any age.',
  },
};

const talks = [
  {
    title: 'The Neuroscience of a Bucket List: Getting the Most From Your Brain and Life',
    description: 'This signature talk, based on Dr. DeSarbo\'s book of the same title, explores how creating and living with a bucket list enhances brain function and mental health and well-being. How bucket listing utilizes anticipation, novelty, and meaning to activate brain networks linked to happiness and resilience. Audiences leave inspired with a science-backed framework for living more fully at any stage of life.',
  },
  {
    title: 'Why Trying New Things Keeps You Young',
    description: 'New experiences stimulate neuroplasticity and protect cognitive health far more than routine ever can. This session blends neuroscience with storytelling to show why curiosity is one of the most powerful longevity tools we have and why continuing to seek out and engage in novel experiences is crucial for brain health.',
  },
  {
    title: 'The Brain on Purpose: How Meaning Shapes Mental Health',
    description: 'Purpose is not philosophical—it is neurobiological. This presentation explains how meaning regulates stress circuits, motivation, and emotional well-being in everyday life. Techniques, tools, and strategies for recognizing meaning and finding more gratitude in life are discussed.',
  },
  {
    title: 'Escaping Autopilot: Rewiring the Brain for Joy and Engagement',
    description: 'When life becomes repetitive, the brain slowly disengages. Over time, complacency sets in, and the brain becomes less sharp, leading to anxiety and low moods. This talk shows how intentional experiences can reawaken motivation, curiosity, and emotional vitality, and a more pleasurable life.',
  },
  {
    title: 'The Science of Anticipation: Why Looking Forward Matters',
    description: 'The brain benefits not just from experiences, but from expecting them. Audiences learn how anticipation itself boosts dopamine, mood, and resilience. We discuss planning methods that enhance future experiences, making them more exciting to look forward to and helping you get the most from them when they arrive.',
  },
  {
    title: 'Living Forward: Why Regret Is a Brain Trap',
    description: 'Regret feels productive, but neuroscience shows it often locks the brain into a cycle of rumination. Regret can also incorrectly lead to feelings of embarrassment, shame, guilt, and disappointment. This very unique and original talk reframes past decision-making and teaches how to move forward without self-blame, and even with a newfound appreciation for where one is in the present.',
  },
  {
    title: 'The Bucket List Mindset: Living Fully Without Waiting for "Someday"',
    description: 'This presentation challenges the myth that a bucket list is about the end of life. Instead, it shows how intentional living enhances mental health right now, whether one is 18 or 81. The sooner one learns to see how more experiences, big or small, impact our brain, the sooner one begins to reap the rewards of a bucket-list approach to life.',
  },
  {
    title: 'From Surviving to Thriving: Training the Brain to Want Again',
    description: 'Chronic stress teaches the brain to stop wanting. This talk helps audiences rediscover desire, motivation, and joy through a neuroscience-informed lens. By reframing stress, anxiety, depression, and other challenges, participants learn how this can alter brain wiring that makes us more resilient, even when chaos seems present.',
  },
];

export default function LifeEnrichmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/speaking" className="text-gray-600 hover:text-brand-blue transition-colors">
                Speaking
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Life Enrichment
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
            <FaBrain className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Life Enrichment & General Audience
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 px-4">
            Presentations for anyone seeking to understand how neuroscience can enhance everyday life, happiness, and mental well-being.
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Dr. DeSarbo&apos;s presentations are tailored to the audience and setting. He translates complex neuroscience concepts related to brain health, motivation, and well-being into clear, engaging narratives accessible to the layperson while remaining grounded in science. Talks may include guided mindfulness instruction, experiential exercises, and customized worksheets or instructional materials to enhance learning and engagement.
          </p>
        </div>

        {/* Talks List */}
        <div className="space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
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
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Dr. DeSarbo for Your Event
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Custom topics and seminars are also available. Contact Dr. DeSarbo to discuss your event needs.
          </p>
          <a
            href="mailto:DrDBucketList@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            <FaEnvelope />
            Contact for Booking
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaChevronLeft className="w-4 h-4" />
            Back to All Speaking Topics
          </Link>
        </div>
      </div>
    </div>
  );
}
