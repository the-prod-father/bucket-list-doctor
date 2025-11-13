'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaBrain, FaGlobe, FaBook, FaMicrophoneAlt, FaUserMd, FaEnvelope } from 'react-icons/fa';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated background elements */}
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
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Profile Image - Radio Show */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <Image
                    src="/images/profile/dr-d-radio-show.jpg"
                    alt="Dr. Jeffrey DeSarbo in Radio Studio"
                    width={500}
                    height={600}
                    className="w-full max-w-md rounded-2xl object-cover shadow-2xl border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-blue/50 rounded-tl-2xl animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-purple/50 rounded-br-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Physician • Author • Adventurer
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About Jeffrey DeSarbo, <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">D.O.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Neuropsychiatrist dedicated to exploring the intersection of brain health and purposeful living.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <FaGlobe className="w-8 h-8 mx-auto mb-2 text-brand-blue" />
                  <div className="text-2xl font-bold text-gray-900">7</div>
                  <div className="text-sm text-gray-600">Continents</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <FaBook className="w-8 h-8 mx-auto mb-2 text-brand-purple" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Books</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <FaBrain className="w-8 h-8 mx-auto mb-2 text-brand-teal" />
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section ref={sectionRef} className="py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-brand-purple first-letter:mr-2 first-letter:float-left">
                Jeffrey DeSarbo, D.O. is a physician/neuropsychiatrist and the Founder/Medical Director of ED-180 Treatment Programs in Garden City, N.Y. Dr. Desarbo, a former Diplomat of the American Board of Psychiatry and Neurology, has practiced at all levels of treatment including intensive outpatient programs (IOP), partial hospitalization programs (PHP), residential and inpatient hospitalization for eating disorders and general psychiatry. Currently, He maintains an active private practice treating patients with mood disorders such as depression, bipolar disorder, anxiety disorders, performance disorders, and eating disorders. Dr. DeSarbo continues to serve as a national and international consultant for select client cases in Europe, Australia, New Zealand, the Middle East and throughout the United States and Canada.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a clinician, Dr. DeSarbo is both a psycho-pharmacologist and psychotherapist who is formally trained in psychodynamic, CBT, ACT, mindfulness training, and existential therapy, incorporating these modalities into treatment plans with medication management and bio/neurofeedback interventions. Dr. DeSarbo practices psychiatry from a biological and neuroscientific perspective with the goal of helping his patients achieve their highest quality of life and performance level both physically and mentally. His clientele ranges from students to international politicians, prominent CEOs, figures in the entertainment industry, Olympic and professional athletes, and other physicians and health care providers offering mental health care and psycho/neuro coaching consultations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As a speaker/lecturer, Dr. DeSarbo has presented locally, nationally and internationally on the topics of the brain, biology and the science of mental health, performance enhancement, cultural psychiatry and eating disorders, and the brain benefits of bucket list living, to both the public and professionals. Dr. DeSarbo is also the author of The Neuroscience of a Bucket List: How to Get the Most from Your Brain and Life (Psyance Publishing, 2025) and its accompanying workbook. With over two decades of experience blending clinical expertise with human performance, he brings a dynamic, engaging, and science-based approach to purposeful living. His talks explore how goal-setting, novelty, and adventure impact brain health, longevity, motivation, and fulfillment. He has delivered talks and keynote presentations to professional organizations, wellness centers, hospitals, universities and academic institutions, corporations, and is now expanding his platform to adventurists, luxury travelers and lifelong learners seeking insight, inspiration, and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adventures & Achievements Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Adventures & <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From exploring all seven continents to pushing the boundaries of neuroscience research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Seven Continents Feature */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <Image
                    src="/images/profile/seven-continents-patch.jpg"
                    alt="Seven Continents Traveler Badge"
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Seven Continent Traveler</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Dr. DeSarbo has traveled to all seven continents, completing hundreds of bucket list experiences that inform his research and therapeutic approach. His adventures range from Antarctica to the Arctic, demonstrating firsthand how bucket list experiences transform the brain.
              </p>
            </div>

            {/* Additional Achievements */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Published Author</h4>
                    <p className="text-gray-600 text-sm">Three groundbreaking books on bucket list neuroscience, including the main title and specialized supplements for eating disorders. Author of numerous articles for professional publication.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMicrophoneAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">International Speaker</h4>
                    <p className="text-gray-600 text-sm">National and international professional presenter. Featured on major media outlets including iHeart Radio, KTRS 550 ABC News Radio, News 12 Television, Doctor Radio/Sirius XM, Newsday, WICC Radio, Connecticut Today and many more.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBrain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Neuropsychiatry Expert</h4>
                    <p className="text-gray-600 text-sm">Over 20 years of clinical experience treating elite clients including politicians, CEOs, Olympic athletes, and healthcare providers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Practice & Speaking Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Clinical Practice Card */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaUserMd className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Clinical Practice</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">In-person and virtual psychiatric care</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Specializing in mood disorders, anxiety, OCD, and eating disorders</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Evidence-based medicine with neuroscience-informed approaches</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-pink rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Clientele ranges from students to international politicians, CEOs, Olympic athletes, and healthcare providers</p>
                </div>
              </div>
            </div>

            {/* Speaking & Expertise Card */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaMicrophoneAlt className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Speaker & Educator</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Dr. DeSarbo has presented locally, nationally, and internationally on topics including brain science, mental health, performance enhancement, cultural psychiatry, and eating disorders to both public and professional audiences.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900 mb-3">Speaking Topics:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• The neuroscience of bucket lists and purposeful living</li>
                  <li>• Brain health, longevity, and motivation</li>
                  <li>• Goal-setting and adventure&apos;s impact on the brain</li>
                  <li>• Performance enhancement and mental wellness</li>
                  <li>• Eating disorder treatment innovations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment CTA */}
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
                Schedule an Appointment
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Interested in working with Dr. DeSarbo? He is available for consultations, speaking engagements, and professional collaborations.
              </p>

              <a
                href="mailto:DeSarbo312@gmail.com"
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Email Dr. DeSarbo</span>
              </a>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/80">
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Medical Consultations</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Speaking Engagements</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">TV/Radio Interviews</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Podcast Appearances</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Educational Seminars</span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Psychiatry Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
