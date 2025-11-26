'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMicrophoneAlt, FaGlobe, FaUsers, FaCalendar, FaEnvelope, FaCheckCircle, FaUniversity, FaHospital, FaBuilding, FaBroadcastTower } from 'react-icons/fa';
import TopicCarousel from '@/components/speaking/TopicCarousel';
import ExperienceCarousel from '@/components/speaking/ExperienceCarousel';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

export default function SpeakingPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@dr.jeffreydesarbo2584';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube/videos');
        const data = await response.json();

        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
        } else if (data.error) {
          console.warn('YouTube API not configured:', data.message);
          setError(data.message);
        }
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
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
      iconName: 'FaBuilding',
    },
    {
      type: 'Wellness Centers & Hospitals',
      description: 'Educational seminars on brain health and purposeful living',
      iconName: 'FaHospital',
    },
    {
      type: 'Universities & Academic Institutions',
      description: 'Lectures on neuroscience, psychiatry, and the science of goal-setting',
      iconName: 'FaUniversity',
    },
    {
      type: 'Corporations',
      description: 'Talks on performance enhancement, motivation, and work-life balance',
      iconName: 'FaBuilding',
    },
    {
      type: 'Media Appearances',
      description: 'Featured on major radio, TV, and print media outlets nationwide',
      iconName: 'FaBroadcastTower',
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

          <TopicCarousel topics={speakingTopics} />
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

          <ExperienceCarousel experiences={pastEngagements} />
        </div>
      </section>

      {/* Speaking Videos Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Watch Dr. DeSarbo <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">In Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See clips from recent speaking engagements, media appearances, and presentations
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading videos from YouTube...</p>
            </div>
          )}

          {/* Videos Grid */}
          {!loading && videos.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {videos.slice(0, 6).map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Video Thumbnail */}
                  <div className="relative w-full pb-[56.25%] bg-gray-900 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {video.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {new Date(video.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Fallback/Error State - Show placeholder cards */}
          {!loading && (error || videos.length === 0) && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full pb-[56.25%] bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <p className="text-sm">Speaking Clip</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Featured Speaking Engagement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Visit our YouTube channel to see all speaking videos
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full pb-[56.25%] bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <p className="text-sm">Media Appearance</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    TV/Radio Interview
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Watch Dr. DeSarbo&apos;s media appearances on YouTube
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full pb-[56.25%] bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <p className="text-sm">Workshop Highlight</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Interactive Workshop
                  </h3>
                  <p className="text-gray-600 text-sm">
                    See Dr. DeSarbo engage audiences with hands-on learning
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>View Full YouTube Channel</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People Are <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Saying</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from event organizers, audience members, and media professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Dr. DeSarbo&apos;s presentation on the neuroscience of bucket lists was transformative for our team. His blend of scientific rigor and practical application gave everyone actionable insights.&quot;
              </p>
              <div className="border-t border-purple-200 pt-4">
                <p className="font-bold text-gray-900">Sarah Mitchell</p>
                <p className="text-sm text-gray-600">VP of Wellness, Fortune 500 Company</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Engaging, informative, and inspiring. Dr. DeSarbo captivated our audience with real-world applications of neuroscience. Our listeners are still talking about it weeks later.&quot;
              </p>
              <div className="border-t border-blue-200 pt-4">
                <p className="font-bold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">Radio Host, Major Market Station</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-teal-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;As a conference organizer, I look for speakers who can deliver both depth and engagement. Dr. DeSarbo exceeded expectations on both fronts. Book him for your next event.&quot;
              </p>
              <div className="border-t border-teal-200 pt-4">
                <p className="font-bold text-gray-900">Dr. Jennifer Lopez</p>
                <p className="text-sm text-gray-600">Conference Director, Medical Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything event planners need to know
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What topics does Dr. DeSarbo speak on?</h3>
              <p className="text-gray-700">
                Dr. DeSarbo specializes in the neuroscience of bucket lists, brain health & longevity, performance enhancement, eating disorder treatment innovations, and cultural psychiatry. All presentations can be customized to your audience and event goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How far in advance should we book?</h3>
              <p className="text-gray-700">
                For best availability, book 3-6 months in advance. However, Dr. DeSarbo can often accommodate shorter timelines depending on his schedule. Contact us to discuss your specific dates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What presentation formats are available?</h3>
              <p className="text-gray-700">
                Dr. DeSarbo offers keynote presentations (30-60 minutes), interactive workshops (half-day or full-day), panel discussions, podcast interviews, and both virtual and in-person events.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can presentations be customized?</h3>
              <p className="text-gray-700">
                Absolutely. Dr. DeSarbo works with each organization to tailor content, examples, and takeaways to your specific audience, whether that&apos;s corporate executives, healthcare professionals, students, or general public.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Does Dr. DeSarbo travel for speaking engagements?</h3>
              <p className="text-gray-700">
                Yes. Dr. DeSarbo has presented nationally and internationally across all seven continents. He is available for both domestic and international events, as well as virtual presentations.
              </p>
            </div>
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

