import Link from 'next/link';
import { FaUserMd, FaGraduationCap, FaMountain } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="w-96 h-96 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <FaUserMd className="w-32 h-32 mx-auto mb-4 opacity-70" />
                <p className="text-sm opacity-70">Dr. D Photo Placeholder</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Dr. Jeffrey DeSarbo
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dr. Jeffrey DeSarbo is a neuroscience enthusiast, adventurer, and advocate for purposeful living. With a background in medicine and a passion for understanding how our brains work, he's dedicated his career to helping people unlock their full potential through intentional goal-setting.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Having traveled to all seven continents and completed hundreds of bucket list experiences, Dr. D combines personal adventure with scientific research to demonstrate how bucket lists literally rewire our brains for success, happiness, and resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaGraduationCap className="w-10 h-10 text-brand-blue" />
                </div>
                <h4 className="font-bold text-gray-900">Medical Doctor</h4>
                <p className="text-sm text-gray-600">Board Certified</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaMountain className="w-10 h-10 text-brand-purple" />
                </div>
                <h4 className="font-bold text-gray-900">7 Continents</h4>
                <p className="text-sm text-gray-600">Explorer</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaUserMd className="w-10 h-10 text-brand-teal" />
                </div>
                <h4 className="font-bold text-gray-900">Author</h4>
                <p className="text-sm text-gray-600">Published Researcher</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-all"
            >
              Learn More About Dr. D
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
