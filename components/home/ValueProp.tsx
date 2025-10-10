import { FaBrain, FaHeart, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function ValueProp() {
  const benefits = [
    {
      icon: <FaBrain className="w-12 h-12 text-brand-purple" />,
      title: 'Activates Neuroplasticity',
      description: 'Creating and pursuing goals literally rewires your brain, forming new neural pathways and strengthening cognitive function.',
    },
    {
      icon: <FaHeart className="w-12 h-12 text-brand-pink" />,
      title: 'Releases Dopamine',
      description: 'Anticipating and achieving bucket list goals triggers dopamine release, creating positive reinforcement loops that motivate further growth.',
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-brand-yellow" />,
      title: 'Enhances Problem-Solving',
      description: 'Planning adventures and experiences forces your brain to think creatively, improving executive function and decision-making skills.',
    },
    {
      icon: <FaRocket className="w-12 h-12 text-brand-blue" />,
      title: 'Builds Resilience',
      description: 'Overcoming challenges on your bucket list journey strengthens mental resilience and increases stress tolerance.',
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-brand-teal" />,
      title: 'Creates Meaning',
      description: 'Purposeful goal-setting activates brain regions associated with meaning and life satisfaction, combating anxiety and depression.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            5 Ways a Bucket List Benefits Your Brain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by neuroscience research, bucket lists aren't just for adventure—they're essential for brain health and cognitive longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
