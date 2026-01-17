import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Presentation Topics | Bucket List Doctor™',
  description: 'Dr. Jeffrey DeSarbo\'s complete list of neuroscience-based presentations for general audiences, corporate leaders, medical professionals, and cruise travelers.',
  openGraph: {
    title: 'Presentation Topics | Bucket List Doctor™',
    description: 'Distinctively unique talks from a physician with an equally unique background.',
  },
};

const lifeEnrichmentTalks = [
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

const corporateTalks = [
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

const medicalTalks = [
  {
    title: 'The Neuroscience of a Bucket List for Physician Well-Being',
    description: 'Stress and burnout reflect measurable brain changes, not personal weakness. This talk explains the neurobiology specifically behind emotional exhaustion and depersonalization in physicians and health-care providers, and approaches to keep one fresh and high-functioning in a demanding profession.',
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

const cruiseTalks = [
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
  {
    title: 'Morning Mental Exercise: The Neuroscience of Mindfulness',
    description: 'With guided meditations, visualizations, progressive muscle relaxation, and other mindfulness practices, Dr. DeSarbo will first discuss the neurobiological benefits of these methods before leading a group experience in the techniques that benefit mental and physical well-being.',
    badge: 'Experiential Series',
  },
  {
    title: 'Destination Talks',
    description: 'Dr. DeSarbo is a proud member of the Seven Continents Club. Having traveled to all 7 continents and hundreds of cities and countries worldwide, Dr. DeSarbo can offer interesting and insightful previews to travelers planning their adventures. In a unique twist, Dr. DeSarbo helps travelers discover the bucket-list opportunities of specific destinations and excursions, elevating their experiences to new heights.',
    badge: 'Bucket List Emphasis',
  },
];

export default function PresentationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
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
              Presentations
            </li>
          </ol>
        </nav>

        {/* Hero Intro */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 italic">
            Distinctively Unique Talks from a Physician with an Equally Unique Background.
          </h1>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Dr. DeSarbo&apos;s presentations are tailored to the audience and setting, whether for physicians, corporate teams, travelers, or general audiences. He translates complex neuroscience concepts related to brain health, motivation, and well-being into clear, engaging narratives accessible to the layperson while remaining grounded in science. Talks may even include guided mindfulness instruction, experiential exercises, and customized worksheets or instructional materials to enhance learning and engagement. Drawing on a career that spans Wall Street finance, marketing research, entrepreneurship, and medicine, he brings a multidisciplinary, story-driven approach to every presentation.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">
            Partial List of Presentation Topics
          </h2>
          <p className="text-gray-600 italic">
            (Additional talks, custom topics and seminars are also available.)
          </p>
        </div>

        {/* Life Enrichment Section */}
        <section id="life-enrichment" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
            Life Enrichment & General Audience Talks
          </h2>
          <div className="md:float-right md:ml-6 md:mb-4 md:w-64 lg:w-80 mb-6">
            <Image
              src="/images/speaking/photo-life-enrichment.png"
              alt="Dr. DeSarbo presenting The Neuroscience of a Bucket List"
              width={320}
              height={480}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            {lifeEnrichmentTalks.map((talk, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 mb-2">
                  {index + 1}. {talk.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {talk.description}
                </p>
              </div>
            ))}
          </div>
          <div className="clear-both" />
          <hr className="my-10 border-gray-300" />
        </section>

        {/* Corporate Section */}
        <section id="corporate" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Corporate, Leadership & High-Performance Talks
          </h2>
          <div className="md:float-right md:ml-6 md:mb-4 md:w-64 lg:w-80 mb-6">
            <Image
              src="/images/speaking/photo-corporate.png"
              alt="Dr. DeSarbo speaking to corporate audience"
              width={320}
              height={480}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            {corporateTalks.map((talk, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 mb-2">
                  {index + 1}. {talk.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {talk.description}
                </p>
              </div>
            ))}
          </div>
          <div className="clear-both" />
          <hr className="my-10 border-gray-300" />
        </section>

        {/* Medical Section */}
        <section id="medical" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">
            Medical, Professional & Physician-Focused Talks
          </h2>
          <div className="md:float-right md:ml-6 md:mb-4 md:w-64 lg:w-80 mb-6">
            <Image
              src="/images/speaking/photo-medical.png"
              alt="Dr. DeSarbo in white coat presenting to medical professionals"
              width={320}
              height={480}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            {medicalTalks.map((talk, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 mb-2">
                  {index + 1}. {talk.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {talk.description}
                </p>
              </div>
            ))}
          </div>
          <div className="clear-both" />
          <hr className="my-10 border-gray-300" />
        </section>

        {/* Cruise Section */}
        <section id="cruise" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
            Cruise & Travel Enrichment Talks
          </h2>
          <div className="md:float-right md:ml-6 md:mb-4 md:w-64 lg:w-80 mb-6">
            <Image
              src="/images/speaking/photo-cruise.png"
              alt="Dr. DeSarbo presenting Antarctic Cruise Destination Talk"
              width={320}
              height={480}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            {cruiseTalks.map((talk, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 mb-2">
                  {index + 1}. {talk.title}
                  {talk.badge && (
                    <span className="ml-2 text-sm font-normal italic text-teal-600">
                      ({talk.badge})
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {talk.description}
                </p>
              </div>
            ))}
          </div>
          <div className="clear-both" />
        </section>

        {/* CTA Section */}
        <div className="mt-12 text-center py-10 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            To inquire or book a presentation, please email
          </h2>
          <a
            href="mailto:DrDBucketList@gmail.com"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-brand-purple hover:text-purple-800 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
            DrDBucketList@gmail.com
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 text-brand-purple hover:text-purple-800 font-medium"
          >
            <FaChevronLeft className="w-4 h-4" />
            Back to Speaking
          </Link>
        </div>
      </div>
    </div>
  );
}
