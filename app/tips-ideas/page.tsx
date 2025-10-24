import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bucket List Tips & Ideas | Practical Strategies',
  description: 'Get practical strategies and inspiration for creating and pursuing your bucket list. Learn how to set achievable goals that transform your brain and life.',
  openGraph: {
    title: 'Bucket List Tips & Ideas',
    description: 'Practical strategies for creating bucket list experiences that enhance brain health.',
  },
};

export default function TipsIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tips & Ideas
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Practical strategies and inspiration for creating and pursuing your bucket list adventures.
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Getting Started */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-blue to-brand-purple">
              <Image
                src="/images/cards/brain-network.png"
                alt="Brain Network"
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                Getting Started
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-teal text-2xl mr-3">•</span>
                  <span>Start with 10-20 diverse experiences across different life categories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal text-2xl mr-3">•</span>
                  <span>Mix short-term achievable goals with long-term aspirations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal text-2xl mr-3">•</span>
                  <span>Include experiences that challenge you mentally and physically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal text-2xl mr-3">•</span>
                  <span>Write them down and review quarterly to stay engaged</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Adventure Ideas */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/benefits/bucketlist-sailing.jpeg"
                alt="Bucket List Sailing Adventure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                Adventure Ideas
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-pink text-2xl mr-3">•</span>
                  <span>Travel to all seven continents (start with one!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink text-2xl mr-3">•</span>
                  <span>Learn a new language or musical instrument</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink text-2xl mr-3">•</span>
                  <span>Complete a physical challenge (marathon, climb, dive certification)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink text-2xl mr-3">•</span>
                  <span>Create something meaningful (book, art, business)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Brain Benefits */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-purple to-brand-pink">
              <Image
                src="/images/brain-benefits/neuroplasticity.png"
                alt="Neuroplasticity"
                fill
                className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                Brain Benefits
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-purple text-2xl mr-3">•</span>
                  <span>Novel experiences create new neural pathways (neuroplasticity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple text-2xl mr-3">•</span>
                  <span>Goal anticipation releases dopamine, boosting motivation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple text-2xl mr-3">•</span>
                  <span>Planning adventures enhances executive function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple text-2xl mr-3">•</span>
                  <span>Meaningful pursuits combat anxiety and depression</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Making It Happen */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/benefits/bucketlist-antartica.jpeg"
                alt="Antarctica Adventure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                Making It Happen
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-yellow text-2xl mr-3">•</span>
                  <span>Start a dedicated bucket list fund with automatic transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-2xl mr-3">•</span>
                  <span>Research costs and create realistic timelines for each goal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-2xl mr-3">•</span>
                  <span>Share your list with friends for accountability and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow text-2xl mr-3">•</span>
                  <span>Take one small action this week toward your top priority</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn the neuroscience behind bucket lists and discover how to harness your brain&apos;s full potential for adventure and growth.
          </p>
          <a
            href="/books"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get the Books
          </a>
        </div>
      </div>
    </div>
  );
}
