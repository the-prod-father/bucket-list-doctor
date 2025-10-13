import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Jeffrey DeSarbo | Bucket List Doctor',
  description: 'Meet Dr. Jeffrey DeSarbo, physician and neuroscience enthusiast who has traveled to all 7 continents. Learn how he combines personal adventure with scientific research to help people unlock their potential.',
  openGraph: {
    title: 'About Dr. Jeffrey DeSarbo | Bucket List Doctor',
    description: 'Physician, adventurer, and advocate for purposeful living through neuroscience-backed bucket list experiences.',
    images: ['/images/profile/profile-pic-dr-d.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Profile Image */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/images/profile/profile-pic-dr-d.png"
              alt="Dr. Jeffrey DeSarbo"
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
              style={{ objectPosition: 'center 18%' }}
            />
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-full border-4 border-brand-blue/30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-2 border-brand-purple/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-2">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About Dr. Jeffrey DeSarbo</h1>
          <div className="prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dr. Jeffrey DeSarbo is a physician, neuroscience enthusiast, and adventurer dedicated to exploring the intersection of brain health and purposeful living.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With extensive medical training and a passion for understanding how our brains work, Dr. D has devoted his career to helping people unlock their full potential through intentional goal-setting and bucket list experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Having traveled to all seven continents and completed hundreds of bucket list experiences, he combines personal adventure with scientific research to demonstrate how bucket lists literally rewire our brains for success, happiness, and resilience.
            </p>
            
            {/* Book Section */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-brand-purple">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Author of &ldquo;The Neuroscience of a Bucket List&rdquo;</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/benefits/bucketlistdoctor-book-cover.png"
                  alt="The Neuroscience of a Bucket List Book Cover"
                  className="w-32 h-auto rounded shadow-lg"
                />
                <p className="text-gray-700">
                  Discover how your bucket list isn&apos;t just a wish list—it&apos;s a powerful tool for brain health, cognitive enhancement, and purposeful living.
                </p>
              </div>
              <a
                href="https://a.co/d/559YKwr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
