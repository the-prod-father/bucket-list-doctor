import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bucket List Tips & Ideas | Practical Strategies',
  description: 'Get practical strategies and inspiration for creating and pursuing your bucket list. Learn how to set achievable goals that transform your brain and life.',
  openGraph: {
    title: 'Bucket List Tips & Ideas',
    description: 'Practical strategies for creating bucket list experiences that enhance brain health.',
  },
};

const categories = [
  {
    name: 'Documents',
    route: '/tips-ideas/documents',
    icon: '/images/tips/passport.png',
    description: 'Complete guide to passports, visas, IDs, and essential travel documentation.',
    gradient: 'from-brand-blue to-brand-purple',
  },
  {
    name: 'Transportation',
    route: '/tips-ideas/transportation',
    icon: '/images/tips/travel.png',
    description: 'Flights, trains, local transit, and smart transportation strategies.',
    gradient: 'from-brand-teal to-brand-blue',
  },
  {
    name: 'Medical Concern',
    route: '/tips-ideas/medical',
    icon: '/images/tips/medical.png',
    description: 'Medical preparation, medications, and health considerations for travel.',
    gradient: 'from-brand-pink to-brand-purple',
  },
  {
    name: 'Currencies & Trade Practices',
    route: '/tips-ideas/currencies',
    icon: '/images/tips/money.png',
    description: 'Currency exchange, payment methods, and financial travel tips.',
    gradient: 'from-brand-yellow to-brand-orange',
  },
  {
    name: 'Bucket Listing Babies, Children & Teenagers',
    route: '/tips-ideas/family',
    icon: '/images/tips/children.png',
    description: 'Family travel tips, child safety, and age-appropriate bucket list experiences.',
    gradient: 'from-brand-pink to-brand-purple',
  },
  {
    name: 'Accommodations',
    route: '/tips-ideas/accommodations',
    icon: '/images/tips/hotel.png',
    description: 'Hotels, B&Bs, special needs, pets, and accessibility considerations.',
    gradient: 'from-brand-purple to-brand-blue',
  },
  {
    name: 'Packing & What to Bring',
    route: '/tips-ideas/packing',
    icon: '/images/tips/luggage.png',
    description: 'Luggage strategy, packing cubes, and essential gear for your adventures.',
    gradient: 'from-brand-teal to-brand-blue',
  },
  {
    name: 'Cultural Considerations',
    route: '/tips-ideas/cultural',
    icon: '/images/tips/culture.png',
    description: 'Etiquette, greetings, dining customs, and respectful travel practices.',
    gradient: 'from-brand-orange to-brand-red',
  },
  {
    name: 'Food & Beverages',
    route: '/tips-ideas/food-beverages',
    icon: '/images/tips/food.png',
    description: 'Local food experiences, dining etiquette, and culinary bucket list adventures.',
    gradient: 'from-brand-red to-brand-pink',
  },
  {
    name: 'Safety & Precautions',
    route: '/tips-ideas/safety',
    icon: '/images/tips/safety.png',
    description: 'Emergency contacts, theft prevention, and safety protocols for travelers.',
    gradient: 'from-brand-navy to-brand-blue',
  },
];

export default function TipsIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Tips & Ideas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Practical strategies and inspiration for creating and pursuing your bucket list adventures. Explore our comprehensive guides covering everything from travel documents to cultural considerations.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.route}
              href={category.route}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-square flex flex-col"
            >
              {/* Icon fills the entire card */}
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={category.icon}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Title overlay */}
                <h3 className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-base sm:text-lg md:text-xl font-bold text-white leading-tight drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
              {/* Description at bottom */}
              <div className="p-3 sm:p-4 bg-white">
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Brain?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Learn the neuroscience behind bucket lists and discover how to harness your brain&apos;s full potential for adventure and growth.
          </p>
          <a
            href="/books"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get the Books
          </a>
        </div>
      </div>
    </div>
  );
}
