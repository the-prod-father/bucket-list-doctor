import Link from 'next/link';
import Image from 'next/image';
import { FaUserMd, FaMountain, FaStethoscope, FaMicrophone } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dr. DeSarbo Profile Image */}
          <div className="flex flex-col items-center order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/profile/profile-pic-dr-d.png"
                alt="Dr. Jeffrey DeSarbo"
                width={384}
                height={384}
                className="w-96 h-96 rounded-full object-cover shadow-2xl border-4 border-white"
                style={{ objectPosition: 'center 18%' }}
              />
              {/* Animated glow ring */}
              <div className="absolute inset-0 rounded-full border-4 border-brand-blue/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-brand-purple/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <div className="mt-6">
              <Image
                src="/images/profile/trademark.png"
                alt="Bucket List Doctor"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto"
                unoptimized
              />
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Dr. Jeffrey DeSarbo
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dr. Jeffrey DeSarbo is a neuroscience enthusiast, adventurer, and advocate for purposeful living. With a background in medicine and a passion for understanding how our brains work, he&apos;s dedicated his career to helping people unlock their full potential through intentional goal-setting.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Having traveled to all seven continents and completed hundreds of bucket list experiences. Dr. D combines personal adventure with scientific research to demonstrate how bucket lists literally rewire our brains for success, happiness, and resilience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaStethoscope className="w-10 h-10 text-brand-blue" />
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
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaMicrophone className="w-10 h-10 text-brand-pink" />
                </div>
                <h4 className="font-bold text-gray-900">Speaker</h4>
                <p className="text-sm text-gray-600">Media Appearances</p>
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
