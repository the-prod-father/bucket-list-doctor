import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserMd, FaChevronLeft, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Medical & Physician Presentations | Bucket List Doctor™',
  description: 'Dr. Jeffrey DeSarbo\'s Medical, Professional & Physician-Focused talks on clinician well-being, burnout prevention, and the neuroscience of healthcare.',
  openGraph: {
    title: 'Medical & Physician Presentations | Bucket List Doctor™',
    description: 'Specialized neuroscience talks for physicians, clinicians, and healthcare professionals.',
  },
};

const talks = [
  {
    title: 'The Neuroscience of a Bucket List for Physician Well-Being',
    description: 'Stress and burnout reflect measurable brain changes, not personal weakness. This talk explains the neurobiology specifically behind emotional exhaustion and depersonalization in physicians and healthcare providers, and approaches to keep one fresh and high-functioning in a demanding profession.',
  },
  {
    title: 'Demystifying the Neurobiology of Eating Disorders',
    description: 'As a specialist in treating eating disorders, this is one of Dr. DeSarbo\'s keynote presentations for medical and therapeutic communities. In this talk, Dr. DeSarbo discusses the neurobiological aspects of understanding and treating eating disorders—a perspective that evades insight even in well-trained clinicians.',
  },
  {
    title: 'How Neurobiology Intersects with Physical Medicine',
    description: 'Dr. DeSarbo discusses the body-brain axis, demonstrating how the brain and CNS interact with the other organ systems in a continuous feedback loop. Discussions include how changes in the brain, including those with a psychological component, can affect cardiovascular, respiratory, endocrine, immune, reproductive, and skeletal-musculoskeletal systems, and how recognizing and planning treatment around this concept can improve outcomes.',
  },
  {
    title: 'Meaning as a Protective Factor in Medicine',
    description: 'Loss of meaning accelerates clinician burnout at a neural level. Throughout one\'s career, the meaning of practicing medicine evolves, and personal identity can change. This presentation explores how reassessing personal values and objectives, and reconnecting with purpose, supports longevity in practice.',
  },
  {
    title: 'Why Smart, Compassionate Physicians Burn Out',
    description: 'Burnout disproportionately affects high-performing clinicians. Expectations, demands, responsibility, and workload balance contribute to moments of overwhelm for even the top clinicians. This talk explains why—and what neuroscience suggests actually helps.',
  },
  {
    title: 'Maintaining Your Gold Standard Focus When The Brain Is Under Chronic Clinical Stress',
    description: 'Sustained stress reshapes emotional and executive brain networks. This type of stress affects one\'s neurobiology, often leading to decreased attention, disorganized thought management, and increased fatigue thresholds. Physicians will gain insight into how to interrupt these processes before collapse occurs.',
  },
  {
    title: 'The Neuroscience of the Mind and Mental Health',
    description: 'Medicine is rapidly advancing, and the practice of psychiatry and mental health is increasingly a study of neurobiological processes rather than psychosocial causes and interpretations. In this lecture, participants learn how, through imaging studies, we are learning more about how the structure and physiological function of the brain determine mental health and can even predict future behavior.',
  },
  {
    title: 'Intentional Living as Preventive Medicine for Clinicians',
    description: 'Purpose-driven experiences have measurable effects on stress regulation and emotional resilience. This talk offers a science-based framework for sustainable practice. Concepts of living life with the intentionality found in a bucket list approach are discussed as a model for career and personal longevity. The anti-aging properties of purpose, intentionality, and gratitude are covered.',
  },
];

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/speaking" className="text-gray-600 hover:text-red-600 transition-colors">
                Speaking
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              Medical & Physician-Focused
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
            <FaUserMd className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Medical, Professional & Physician-Focused
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 px-4">
            Specialized presentations for physicians, clinicians, and healthcare professionals on well-being, burnout prevention, and the neuroscience of medical practice.
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-red-100 mb-8">
          <p className="text-gray-700 leading-relaxed">
            As a practicing neuropsychiatrist, Dr. DeSarbo understands the unique challenges facing healthcare professionals. These presentations address the specific neurobiological factors that affect clinician well-being and provide evidence-based strategies for sustainable practice.
          </p>
        </div>

        {/* Talks List */}
        <div className="space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
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
        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Dr. DeSarbo for Your Medical Conference
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            CME-eligible presentations and custom topics available for medical conferences, hospital grand rounds, and healthcare organizations.
          </p>
          <a
            href="mailto:DrDBucketList@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
          >
            <FaEnvelope />
            Contact for Booking
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
          >
            <FaChevronLeft className="w-4 h-4" />
            Back to All Speaking Topics
          </Link>
        </div>
      </div>
    </div>
  );
}
