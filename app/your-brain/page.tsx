import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Your Brain on a Bucket List | Neuroscience Benefits',
  description: 'Discover the 5 ways bucket lists benefit your brain: neuroplasticity activation, dopamine release, enhanced problem-solving, stress resilience, and creating meaning.',
  keywords: ['neuroplasticity', 'dopamine', 'problem-solving', 'resilience', 'brain health', 'bucket list science'],
  openGraph: {
    title: 'Your Brain on a Bucket List | The Science Behind Adventure',
    description: 'Learn the neuroscience behind why bucket lists are powerful for brain health and cognitive enhancement.',
  },
};

export default function YourBrainPage() {
  const benefits = [
    {
      title: 'Neuroplasticity Activation',
      description: 'When you create and pursue bucket list goals, you activate your brain\'s neuroplasticity—its ability to form new neural connections. This process strengthens cognitive function and builds mental resilience.',
      image: '/images/brain-benefits/neuroplasticity.png',
      color: 'from-brand-purple to-brand-pink',
    },
    {
      title: 'Dopamine Release',
      description: 'Anticipating and achieving bucket list experiences triggers dopamine release, creating positive reinforcement loops that motivate further growth and adventure.',
      image: '/images/brain-benefits/dopamine.png',
      color: 'from-brand-blue to-brand-teal',
    },
    {
      title: 'Enhanced Problem-Solving',
      description: 'Planning adventures forces your brain to think creatively, improving executive function and decision-making skills that transfer to all areas of life.',
      image: '/images/brain-benefits/problem-solving.png',
      color: 'from-brand-teal to-brand-blue',
    },
    {
      title: 'Stress Resilience',
      description: 'Overcoming challenges on your bucket list journey strengthens mental resilience and increases your ability to handle stress in everyday situations.',
      image: '/images/brain-benefits/resilience.png',
      color: 'from-brand-pink to-brand-purple',
    },
    {
      title: 'Meaning & Purpose',
      description: 'Purposeful goal-setting activates brain regions associated with meaning and life satisfaction, combating anxiety and depression while enhancing overall well-being.',
      image: '/images/brain-benefits/meaning.png',
      color: 'from-brand-navy to-brand-blue',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Brain & Bucket Lists
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover the fascinating neuroscience behind why bucket lists are so powerful for brain health and cognitive enhancement
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Bucket Lists Change Your Brain
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your bucket list is more than just a wish list—it&apos;s a powerful neurological tool that literally rewires your brain for success, happiness, and resilience. Here are the five key ways bucket lists transform your brain:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              {/* Image Section */}
              <div className={`md:w-1/2 relative overflow-hidden bg-gradient-to-br ${benefit.color}`}>
                <div className="aspect-square md:aspect-auto md:h-full relative">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-gray-900">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
