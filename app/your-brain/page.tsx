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
            Discover the fascinating neuroscience behind why bucket lists are so powerful for brain health and cognitive enhancement.
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

        {/* Brain Story Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            The Story of Your Brain on a Bucket List: Expanding Your Insight About Expanding Your Brain
          </h2>
          <p className="text-center text-gray-600 mb-8 italic">by Dr. Jeffrey DeSarbo</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In this section, the words in <strong>bold</strong> may be new to you and sound intimidating to some, but hang in there, and soon you will better understand. Of course, I highly recommend reading <em>The Neuroscience of a Bucket List: Getting the Most from Your Brain and Life</em> to better understand these important concepts. I encourage you to consider making it a goal to learn more about how your brain works, perhaps even adding it to your own bucket list.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Starting Our List</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When we begin to make a bucket list, something extraordinary begins to happen in the brain. It isn&apos;t just a to-do list; it&apos;s a neurological rehearsal for meaning, joy, growth, and vitality. Consider this your introduction to the complexities of your brain on a bucket list. Here you will begin to learn how approaching life with a bucket list engages and stimulates the brain, leading to brain exercises that promote <strong>neurogenesis</strong> and <strong>neuroplasticity</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              First, the <strong>prefrontal cortex</strong> comes alive. That&apos;s the brain&apos;s planning and decision-making center. As we imagine possibilities such as traveling, learning, creating, and connecting, it begins to weigh logic and emotion: Can I do this? Would this make me happy? This moment marks the spark of intentionality and our brain mapping possible futures before they&apos;ve even begun.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Then, imagination takes over. The <strong>Default Mode Network</strong> lights up, the same system we use when we daydream or picture our future selves. We mentally walk the streets of Paris, climb the mountain, or write the book. Memory and imagination blend, giving us that beautiful continuity between who we are and who we&apos;re becoming.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              And even though we haven&apos;t done anything yet, the <strong>dopamine system</strong>, our brain&apos;s reward circuit, already starts firing. The <strong>ventral tegmental area</strong> and <strong>nucleus accumbens</strong> release small bursts of the neurotransmitter dopamine in anticipation. Just imagining something meaningful triggers motivation. It&apos;s the brain saying, &quot;Let&apos;s make this real.&quot;
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Meanwhile, the <strong>ventromedial prefrontal cortex</strong> starts attaching emotional value. It helps us prioritize what feels authentic and true to us, not what we think we should want, but what genuinely excites us. The <strong>hippocampus</strong>, our memory and novelty center, joins in, priming curiosity and even stimulating neurogenesis, the creation of new brain cells. Simply by planning, we begin strengthening our brains.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As the <strong>salience network</strong> helps us decide what matters most, the <strong>central executive network</strong> moves us toward action, categorizing, organizing, and building micro-steps. And when we land on goals tied to connection or growth, <strong>serotonin</strong> and <strong>oxytocin</strong> pathways light up, creating that grounded, grateful feeling. The planning stage alone can shift us from anxiety about time running out to gratitude for time still ahead.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Our List in Action</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Now comes the moment itself, when we actually do something on our list. Let&apos;s say you&apos;re standing on the rim of the Grand Canyon. The wind brushes your face. The scale is almost too vast to comprehend.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Instantly, your sensory systems go into overdrive. The <strong>thalamus</strong> relays an explosion of color, light, and sound to your visual and auditory cortices. The hippocampus flags it as &quot;novel,&quot; a once-in-a-lifetime moment worth encoding deeply. <strong>Dopamine</strong> and <strong>acetylcholine</strong> surge, sharpening focus and amplifying memory.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Then awe takes over. The Default Mode Network, the part of the brain that keeps us focused on ourselves, quiets down. Activity shifts toward the <strong>parietal cortex</strong> and the <strong>vagus nerve</strong>, evoking calm and self-transcendence. You feel small in a good way; connected to something larger. <strong>Cortisol</strong> drops, <strong>oxytocin</strong> rises, and your body mirrors that peace through slower breathing and steadier heartbeat.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In that moment, the reward system fires again, this time in full bloom. Dopamine floods the nucleus accumbens, and the <strong>orbitofrontal cortex</strong> registers profound satisfaction: not the quick hit of a notification, but the deep joy of meaning fulfilled.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong>amygdala</strong> and ventromedial prefrontal cortex then step in to tag the memory with emotion: This mattered. Your identity shifts ever so slightly, and you&apos;re now someone who did it. The hippocampus and amygdala work together to encode it for life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your body aligns with your mind. The <strong>insula</strong> maps that sense of calm coherence, releasing <strong>serotonin</strong> and <strong>GABA</strong> to stabilize mood. You feel both exhilarated and peaceful, energized yet centered.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Later, as you sleep, the hippocampus replays that day, strengthening the synaptic links that hold the memory. Telling others about it, sharing the photos, and reliving the moment reactivates those same neural pathways, giving small dopamine bursts and deepening the joy. Over time, this process enhances neuroplasticity, motivation, and perspective. Your brain literally learns to seek wonder again.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Afterwords</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Finally comes reflection, sometimes immediately after, perhaps a week later, sitting at home, looking at a photo from that museum trip with your family.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you reflect, the hippocampus and Default Mode Network reactivate the same circuits used during the experience itself. You&apos;re not just remembering; your brain is re-living. The ventromedial prefrontal cortex and amygdala reengage, coloring those memories with warmth and meaning; that was special, that was us together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your reward circuits quietly hum again. Dopamine trickles in, not as a rush but as a gentle glow of satisfaction. This reinforces the habit of savoring, teaching the brain that joy doesn&apos;t come only from doing, but also from appreciating.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As you tell the story, maybe showing your kids the pictures, the <strong>medial prefrontal cortex</strong> and <strong>temporoparietal junction</strong> weave it into your life story. The language centers sync with emotional ones, forming a coherent narrative: &quot;This is part of who we are.&quot;
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Even empathy gets involved. The <strong>mirror neuron system</strong> mirrors your loved ones&apos; emotions, deepening connection through shared joy. Oxytocin flows again, bonding you further.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              And as reflection turns to gratitude, the <strong>anterior cingulate cortex</strong> and insula balance emotion and body, slowing heart rate, easing tension, creating that peaceful calm we associate with contentment. Gratitude isn&apos;t just a feeling; it&apos;s the brain&apos;s version of harmony.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each time you recall or retell, you&apos;re reinforcing identity: I&apos;m someone who dreams, acts, and cherishes. That&apos;s neuroplastic growth in action. Over time, these cycles of planning, experiencing, and reflecting build resilience, motivation, and emotional stability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
              The result? A brain wired for meaning, gratitude, and lifelong curiosity. That is the neuroscience of a bucket list. It&apos;s how the simple act of dreaming, doing, and reflecting can literally reshape your brain for a fuller, more intentional life.
            </p>
          </div>

          {/* Three Images Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-6">
              <Image
                src="/images/logos/brain.png"
                alt="Brain illustration"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-6">
              <Image
                src="/images/logos/bucket.png"
                alt="Bucket list illustration"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-6">
              <Image
                src="/images/logos/boat.png"
                alt="Adventure and travel illustration"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
