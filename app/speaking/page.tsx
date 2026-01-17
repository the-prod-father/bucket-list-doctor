'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMicrophoneAlt, FaGlobe, FaUsers, FaCalendar, FaEnvelope, FaCheckCircle, FaUniversity, FaHospital, FaBuilding, FaBroadcastTower, FaStar, FaTv, FaPodcast } from 'react-icons/fa';
import TopicCarousel from '@/components/speaking/TopicCarousel';
import ExperienceCarousel from '@/components/speaking/ExperienceCarousel';

// YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

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
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@dr.jeffreydesarbo2584';
  const VIDEO_ID = 'OXZJqGofLVE';

  // Load YouTube IFrame API and initialize video player
  useEffect(() => {
    // Load YouTube IFrame API script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (videoPlayerRef.current && !playerRef.current) {
          playerRef.current = new window.YT.Player(videoPlayerRef.current, {
            videoId: VIDEO_ID,
            playerVars: {
              autoplay: 1,
              mute: 1, // Required for autoplay, we'll unmute and set volume after ready
              controls: 1,
              rel: 0,
              modestbranding: 1,
              enablejsapi: 1,
            },
            events: {
              onReady: (event: any) => {
                setIsVideoReady(true);
                // Set volume to 50% and unmute
                event.target.setVolume(50);
                event.target.unMute();
                // Play the video
                event.target.playVideo();
              },
            },
          });
        }
      };
    } else if (videoPlayerRef.current && !playerRef.current) {
      // API already loaded, create player immediately
      playerRef.current = new window.YT.Player(videoPlayerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsVideoReady(true);
            event.target.setVolume(50);
            event.target.unMute();
            event.target.playVideo();
          },
        },
      });
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying player:', e);
        }
      }
    };
  }, []);

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
    { name: 'Fox 5', logo: '/images/speaker/fox-5-top.png' },
    { name: 'NBC News Now', logo: '/images/speaker/NBC-NEWS-NOW.png' },
    { name: 'KTRS 550 ABC News Radio', logo: '/images/media/ktrs-550-abc-news-radio-logo.png' },
    { name: 'KATU 2 ABC', logo: '/images/media/katu-2-abc.png' },
    { name: 'WBAP', logo: '/images/speaker/WBAP.png' },
    { name: '700 WLW', logo: '/images/speaker/700-WLW.png' },
    { name: 'iHeart Radio', logo: '/images/speaker/iheart-radio.png' },
    { name: 'Doctor Radio / Sirius XM', logo: '/images/speaker/doctor-radio-siriusxm.png' },
    { name: 'Newsday', logo: '/images/speaker/newsday-banner.png' },
    { name: 'WJR Radio', logo: '/images/speaker/wjr-radio-banner.png' },
    { name: 'KOA Radio', logo: '/images/speaker/koa-radio-banner.png' },
    { name: 'WBZ News Radio', logo: '/images/speaker/wbz-news-radio.png' },
    { name: 'News 12 Long Island', logo: '/images/media/news12-long-island-logo.png' },
    { name: 'WICC Radio', logo: '/images/media/wicc-logo.png' },
    { name: 'Connecticut Today', logo: '/images/media/connecticut-today-logo.png' },
    { name: 'WGY News Radio', logo: '/images/media/wgy-news-radio.png' },
    { name: 'WIOD News Radio', logo: '/images/media/wiod-news-radio.png' },
    { name: 'KFBK NewsTalk', logo: '/images/media/kfbk-news-talk.png' },
    { name: 'KSRM Radio', logo: '/images/media/ksrm-radio.png' },
    { name: 'WHNZ Radio', logo: '/images/media/whnz-radio.png' },
    { name: 'Radio Ritmo WPIK', logo: '/images/media/wpik-radio-ritmo.png' },
    { name: '600 KOGO NewsRadio', logo: '/images/media/kogo-600-newsradio.png' },
    { name: 'KTAR News 92.3 FM', logo: '/images/media/ktar-news.png' },
    { name: 'NewsRadio 630 WLAP', logo: '/images/media/wlap-630-newsradio.png' },
  ];

  // Upcoming appearances - Jeff can update these or we can add admin functionality
  const upcomingAppearances = [
    {
      id: 1,
      title: 'Fox News Interview',
      type: 'TV',
      network: 'Fox News',
      date: 'Coming Soon',
      description: 'Discussing the neuroscience of bucket lists and purposeful living',
      featured: true,
    },
    {
      id: 2,
      title: 'National Radio Tour',
      type: 'Radio',
      network: 'Multiple Stations',
      date: 'December 2025',
      description: 'Book promotion tour across major market radio stations',
      featured: false,
    },
    {
      id: 3,
      title: 'Podcast Feature',
      type: 'Podcast',
      network: 'TBA',
      date: 'Coming Soon',
      description: 'Deep dive into brain health and adventure psychology',
      featured: false,
    },
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
      {/* Video Hero Section */}
      <section className="relative w-full bg-black py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full mx-auto" style={{ 
            height: '50vh',
            minHeight: '250px',
            maxHeight: '400px'
          }}>
            <div 
              ref={videoPlayerRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-2xl"
            />
          </div>
        </div>
      </section>

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
                    src="/images/speaker/On Stage.png"
                    alt="Dr. Jeffrey DeSarbo speaking on stage"
                    width={800}
                    height={600}
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
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">Cruise/Destination Speaker</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">Corporate Events/Performance</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaGlobe className="w-8 h-8 mx-auto mb-2 text-brand-blue" />
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaMicrophoneAlt className="w-8 h-8 mx-auto mb-2 text-brand-purple" />
              <div className="text-3xl font-bold text-gray-900">National</div>
              <div className="text-sm text-gray-600">& International</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaBroadcastTower className="w-8 h-8 mx-auto mb-2 text-brand-pink" />
              <div className="text-3xl font-bold text-gray-900">350+</div>
              <div className="text-sm text-gray-600">Media Appearances</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaUsers className="w-8 h-8 mx-auto mb-2 text-brand-teal" />
              <div className="text-3xl font-bold text-gray-900">Public</div>
              <div className="text-sm text-gray-600">& Professional</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <FaCalendar className="w-8 h-8 mx-auto mb-2 text-brand-yellow" />
              <div className="text-3xl font-bold text-gray-900">Flexible</div>
              <div className="text-sm text-gray-600">Scheduling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk Category Boxes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              For a list and description of Dr. DeSarbo&apos;s presentations – <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">click below.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Life Enrichment */}
            <Link
              href="/speaking/presentations#life-enrichment"
              className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Image
                src="/images/speaking/life-enrichment.png"
                alt="Life Enrichment & General Audience Presentations - Click Here"
                width={658}
                height={494}
                className="w-full h-auto"
              />
            </Link>

            {/* Corporate */}
            <Link
              href="/speaking/presentations#corporate"
              className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Image
                src="/images/speaking/corporate.png"
                alt="Corporate Team Building, Leadership, and Performance Presentations - Click Here"
                width={658}
                height={494}
                className="w-full h-auto"
              />
            </Link>

            {/* Medical */}
            <Link
              href="/speaking/presentations#medical"
              className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Image
                src="/images/speaking/medical.png"
                alt="Medical, Psychological, and Clinician-Focused Presentations - Click Here"
                width={658}
                height={494}
                className="w-full h-auto"
              />
            </Link>

            {/* Cruise */}
            <Link
              href="/speaking/presentations#cruise"
              className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Image
                src="/images/speaking/cruise-travel.png"
                alt="Cruise, Destination, and Travel Enrichment Presentations - Click Here"
                width={658}
                height={494}
                className="w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Appearances Grid */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
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

      {/* Talk Category Detail Sections */}
      {/* Life Enrichment Section */}
      <section id="life-enrichment" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 shadow-xl">
              <Image src="/images/speaking/icon-life-brain.png" alt="Life Enrichment" width={60} height={60} className="object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Life Enrichment & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">General Audience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Engaging presentations for anyone curious about brain science and living a more fulfilling life
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The Neuroscience of a Bucket List', desc: 'Understanding the science and brain benefits of engaging in a bucket list lifestyle' },
              { title: 'Brain Science for the Curious', desc: 'An entertaining and informative discussion on the brain for a general audience' },
              { title: 'Your Brain on Adventure', desc: 'Neuroscience of novelty, growth, and how new experiences change and benefit your brain' },
              { title: 'Building a Life Worth Living', desc: 'The science behind living a meaningful and purposeful life' },
              { title: 'The Psychology of Bucket Lists', desc: 'An exploration of who and why people make bucket lists' },
              { title: 'Goal-Setting for Success', desc: 'A step-by-step guide to setting and achieving goals' },
              { title: 'Rewire Your Brain, Transform Your Life', desc: 'How goal-setting and purposeful living spark neuroplasticity' },
              { title: 'Fulfillment, Purpose, and Happiness', desc: 'Using neuroscience as a roadmap for wellness and a fulfilling life' },
            ].map((talk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm">{talk.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-xl">
              <Image src="/images/speaking/icon-corporate-bucket.png" alt="Corporate" width={60} height={60} className="object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate, Leadership & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">High-Performance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Science-backed strategies for peak performance, motivation, and sustainable success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The Neuroscience of Motivation', desc: 'Mental mastery, focus, and productivity for high performance' },
              { title: 'Peak Performance Brain Hacks', desc: 'Cognitive strategies for achieving peak mental performance' },
              { title: 'Psychology of Motivation & Goal Setting', desc: 'Understanding the science behind effective goals and sustained motivation' },
              { title: 'Building a High-Performance Culture', desc: 'Creating environments that support cognitive performance' },
              { title: 'Preventing Burnout', desc: 'The neuroscience of sustainable success and workplace wellness' },
              { title: 'The Stress-Proof Brain', desc: 'Neuroscience-based strategies for managing stress for high achievers' },
              { title: 'Leadership & Decision-Making', desc: 'How to make better decisions under pressure using brain science' },
              { title: 'Creating a Burnout-Resistant Workforce', desc: 'Promoting workplace wellness through neuroscience insights' },
            ].map((talk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm">{talk.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Section */}
      <section id="cruise" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-green-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl mb-6 shadow-xl">
              <Image src="/images/speaking/icon-cruise-ship.png" alt="Cruise" width={60} height={60} className="object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cruise & <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Travel Enrichment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect for cruise lines, travel groups, and adventure seekers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The Bucket List Doctor\'s Guide to Travel', desc: 'How travel enhances brain health and wellness' },
              { title: 'The Brain Science Behind Your Best Trip', desc: 'How travel impacts the brain and how to maximize cognitive benefits' },
              { title: 'Unlocking Your Brain\'s Potential', desc: 'Using travel as a tool for cognitive health and growth' },
              { title: 'Travel as Medicine', desc: 'The therapeutic effects of exploration on the brain' },
              { title: 'Why Travel is the Ultimate Bucket List', desc: 'Understanding the science behind adventure travel' },
              { title: 'Creating Your Perfect Bucket List', desc: 'A step-by-step workshop for planning and prioritizing adventures' },
              { title: 'Exploring the World, One Bucket List at a Time', desc: 'Combining neuroscience insights with travel inspiration' },
              { title: 'Jet Lag and Your Brain', desc: 'Cognitive strategies for managing travel fatigue' },
              { title: 'Neuroscience of Exploration at Sea', desc: 'Custom talk for cruise ships on wellness and fulfillment' },
              { title: 'Brain Health at Any Age', desc: 'Cognitive wellness insights for lifelong explorers' },
            ].map((talk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm">{talk.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Section */}
      <section id="medical" className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl mb-6 shadow-xl">
              <Image src="/images/speaking/icon-medical-brain.png" alt="Medical" width={60} height={60} className="object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medical, Professional & <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Physician-Focused</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based presentations for healthcare professionals and medical conferences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Brain Health and Bucket Lists', desc: 'A clinical look at lifestyle psychiatry and the intersection of adventure, goals and mental health' },
              { title: 'Optimizing Brain Function for Clinicians', desc: 'Strategies for healthcare professionals to maintain cognitive sharpness' },
              { title: 'Preventing Physician Burnout', desc: 'Addressing the mental health crisis among medical professionals' },
              { title: 'Neuroscience and the Art of Healing', desc: 'How the brain-body connection impacts patient care' },
              { title: 'Bucket Lists for Recovery', desc: 'A neuroscience approach to incorporating purposeful living into treatment' },
              { title: 'Cultural Psychiatry', desc: 'Exploring mental health across diverse populations and communities' },
              { title: 'Brain Health and Aging', desc: 'What clinicians need to know about cognitive health across the lifespan' },
              { title: 'The Brain and Eating Disorders', desc: 'Evidence-based treatment approaches from a neuroscience perspective' },
            ].map((talk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm">{talk.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Appearances Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <FaStar className="w-4 h-4" />
              <span>COMING SOON</span>
              <FaStar className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Appearances</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Catch Dr. DeSarbo on these upcoming media appearances and speaking engagements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingAppearances.map((appearance) => (
              <div
                key={appearance.id}
                className={`relative group ${appearance.featured ? 'md:col-span-1' : ''}`}
              >
                {/* Featured badge */}
                {appearance.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      FEATURED
                    </span>
                  </div>
                )}

                <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border ${appearance.featured ? 'border-yellow-400/50' : 'border-white/20'} hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 h-full`}>
                  {/* Glow effect for featured */}
                  {appearance.featured && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl -z-10" />
                  )}

                  {/* Type icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    appearance.type === 'TV' ? 'bg-gradient-to-br from-red-500 to-pink-600' :
                    appearance.type === 'Radio' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                    'bg-gradient-to-br from-purple-500 to-indigo-600'
                  }`}>
                    {appearance.type === 'TV' && <FaTv className="w-7 h-7 text-white" />}
                    {appearance.type === 'Radio' && <FaBroadcastTower className="w-7 h-7 text-white" />}
                    {appearance.type === 'Podcast' && <FaPodcast className="w-7 h-7 text-white" />}
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      appearance.type === 'TV' ? 'text-red-400' :
                      appearance.type === 'Radio' ? 'text-cyan-400' :
                      'text-purple-400'
                    }`}>
                      {appearance.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">
                      {appearance.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {appearance.description}
                    </p>
                  </div>

                  {/* Network & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Network</p>
                      <p className="text-white font-semibold">{appearance.network}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
                      <p className={`font-bold ${appearance.date === 'Coming Soon' || appearance.date === 'TBA' ? 'text-yellow-400 animate-pulse' : 'text-white'}`}>
                        {appearance.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Want to book Dr. DeSarbo for your show or event?</p>
            <a
              href="mailto:drdbucketlist@gmail.com?subject=Media Booking Inquiry"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Book for Your Show</span>
            </a>
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

