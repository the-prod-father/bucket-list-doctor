import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaMicrophoneAlt, FaGlobe, FaUsers, FaCalendar, FaEnvelope, FaCheckCircle, FaHospital, FaBuilding, FaBroadcastTower } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Speaking Engagements | Dr. Jeffrey DeSarbo',
  description: 'Book Dr. Jeffrey DeSarbo for speaking engagements, keynote presentations, and educational seminars on neuroscience, bucket lists, and brain health.',
  keywords: ['speaker', 'keynote', 'neuroscience speaker', 'bucket list', 'brain health', 'Dr. Jeffrey DeSarbo'],
  openGraph: {
    title: 'Speaking Engagements | Dr. Jeffrey DeSarbo',
    description: 'Book Dr. Jeffrey DeSarbo for your next event',
  },
};

export default function SpeakingPage() {
  const speakingTopics = [
    {
      title: 'The Neuroscience of Bucket Lists',
      description: 'How goal-setting, novelty, and adventure impact brain health, longevity, motivation, and fulfillment.',
    },
    {
      title: 'Brain Health & Longevity',
      description: 'The science behind maintaining cognitive function and mental wellness throughout life.',
    },
    {
      title: 'Performance Enhancement & Mental Wellness',
      description: 'Neuroscience-informed approaches to achieving peak performance in all areas of life.',
    },
    {
      title: 'Eating Disorder Treatment Innovations',
      description: 'Cutting-edge approaches to treating eating disorders from a neuroscientific perspective.',
    },
    {
      title: 'Cultural Psychiatry & Mental Health',
      description: 'Understanding mental health across cultures and communities.',
    },
  ];

  const mediaAppearances = [
    { name: 'iHeart Radio', logo: '/images/speaker/iheart-radio.png' },
    { name: 'Doctor Radio / Sirius XM', logo: '/images/speaker/doctor-radio-siriusxm.png' },
    { name: 'Newsday', logo: '/images/speaker/newsday-banner.png' },
    { name: 'WJR Radio', logo: '/images/speaker/wjr-radio-banner.png' },
    { name: 'KOA Radio', logo: '/images/speaker/koa-radio-banner.png' },
    { name: 'WBZ News Radio', logo: '/images/speaker/wbz-news-radio.png' },
    { name: 'KTRS 550 ABC News Radio', logo: '/images/media/ktrs-550-abc-news-radio-logo.png' },
    { name: 'News 12 Long Island', logo: '/images/media/news12-long-island-logo.png' },
    { name: 'WICC Radio', logo: '/images/media/wicc-logo.png' },
    { name: 'Connecticut Today', logo: '/images/media/connecticut-today-logo.png' },
  ];

  const pastEngagements = [
    {
      type: 'Professional Organizations',
      description: 'Keynote presentations and workshops for medical and mental health professionals',
      icon: FaBuilding,
    },
    {
      type: 'Wellness Centers & Hospitals',
      description: 'Educational seminars on brain health and purposeful living',
      icon: FaHospital,
    },
    {
      type: 'Universities & Academic Institutions',
      description: 'Lectures on neuroscience, psychiatry, and the science of goal-setting',
      icon: FaUniversity,
    },
    {
      type: 'Corporations',
      description: 'Talks on performance enhancement, motivation, and work-life balance',
      icon: FaBuilding,
    },
    {
      type: 'Media Appearances',
      description: 'Featured on major radio, TV, and print media outlets nationwide',
      icon: FaBroadcastTower,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Speaker Photo */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <Image
                    src="/images/profile/dr-d-radio-show.jpg"
                    alt="Dr. Jeffrey DeSarbo speaking on radio"
                    width={600}
                    height={800}
                    className="w-full rounded-2xl object-cover shadow-2xl border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Keynote Speaker • Educator • Presenter
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Speaking <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Engagements</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Dr. Jeffrey DeSarbo brings over two decades of clinical expertise and neuroscience research to audiences worldwide, exploring how purposeful living transforms the brain and enhances life.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Keynote Speaker</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Workshop Leader</span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">Medical Educator</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaGlobe className="w-8 h-8 mx-auto mb-2 text-brand-blue" />
              <div className="text-3xl font-bold text-gray-900">20+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaMicrophoneAlt className="w-8 h-8 mx-auto mb-2 text-brand-purple" />
              <div className="text-3xl font-bold text-gray-900">National</div>
              <div className="text-sm text-gray-600">& International</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaUsers className="w-8 h-8 mx-auto mb-2 text-brand-teal" />
              <div className="text-3xl font-bold text-gray-900">Public</div>
              <div className="text-sm text-gray-600">& Professional</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaCalendar className="w-8 h-8 mx-auto mb-2 text-brand-pink" />
              <div className="text-3xl font-bold text-gray-900">Flexible</div>
              <div className="text-sm text-gray-600">Scheduling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Appearances Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Appearances</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Dr. DeSarbo has been featured on major media outlets nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
            {mediaAppearances.map((media, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32"
              >
                <Image
                  src={media.logo}
                  alt={media.name}
                  width={150}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Speaking <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Topics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. DeSarbo presents on a wide range of neuroscience and mental health topics, tailored to your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {speakingTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Engagements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Speaking <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. DeSarbo has presented to diverse audiences across multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEngagements.map((engagement, index) => {
              const Icon = engagement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{engagement.type}</h3>
                      <p className="text-gray-700">{engagement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <FaEnvelope className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Dr. DeSarbo for Your Event
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Interested in having Dr. DeSarbo speak at your organization, conference, or event? Get in touch to discuss availability, topics, and format.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:drdbucketlist@gmail.com?subject=Speaking Engagement Inquiry"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>Email for Booking</span>
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-xl transition-all border-2 border-white/30"
                >
                  <span>Learn More About Dr. DeSarbo</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/80">
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Keynote Presentations</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Workshops</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Educational Seminars</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Virtual & In-Person</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

