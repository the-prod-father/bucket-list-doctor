import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Transportation Tips for Bucket List Travel | Bucket List Doctor',
  description: 'Practical tips for flights, trains, local transit, and smart transportation strategies. Make getting there part of the adventure.',
  openGraph: {
    title: 'Transportation Tips for Bucket List Travel',
    description: 'Practical tips for flights, trains, local transit, and smart transportation strategies.',
  },
};

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Transportation" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/travel.png"
              alt="Transportation"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Transportation
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Whether you&apos;re jet-setting across the globe, hopping on a local bus, or boarding a cruise ship for the first time, how you get there is part of the adventure. Transportation is more than just booking a ticket or gassing up the car—it&apos;s about timing, comfort, safety, flexibility, budget awareness, and mental preparation.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto px-4">
            Here are practical tips, overlooked gems, and thoughtful advice to help your journey go smoothly—and make getting there just as fulfilling as being there.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="The Basics (Don't Skip These)">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Always Allow Extra Time:</strong> Missed connections, traffic, long lines, or getting lost are part of the unexpected—plan buffer time for every segment of your journey.</p>
            <p><strong className="text-brand-teal">Transportation Can Be a Bucket List Item Too:</strong> Riding a gondola, taking a bullet train, or hopping on a rickshaw can be the highlight not just the means.</p>
            <p><strong className="text-brand-teal">Pre-Book What You Can (But Don&apos;t Over Plan):</strong> Book transportation in advance when availability is limited (like trains in Europe or ferries) but leave room for spontaneity.</p>
            <p><strong className="text-brand-teal">Research Local Customs & Logistics:</strong> Some places don&apos;t run on strict timetables. Others expect exact change, reserved seating, or specific etiquette—know before you go.</p>
            <p><strong className="text-brand-teal">Don&apos;t Over-Rely on Technology:</strong> Download offline maps, transit schedules, and tickets. GPS and mobile data can (and do) fail—especially abroad or in rural areas.</p>
            <p><strong className="text-brand-teal">Travel Light When You Can:</strong> The fewer bags you have, the easier it is to navigate unfamiliar systems like subways, ferries, or cobblestone streets.</p>
            <p><strong className="text-brand-teal">Keep Transportation Costs in Perspective:</strong> Sometimes, spending a little more saves you a lot of stress, time, or energy—especially when exhausted or navigating language barriers.</p>
            <p><strong className="text-brand-teal">Learn a Few Local Words:</strong> Knowing how to say, &quot;Where is the bus/train station?&quot; or &quot;How much does it cost?&quot; can go a long way in helping you connect or get help when needed.</p>
            <p><strong className="text-brand-teal">Have Backup Payment Methods:</strong> Transit machines or local taxis may reject your card. Always carry a bit of local cash and a second form of payment.</p>
            <p><strong className="text-brand-teal">Look Into Local Travel Passes:</strong> Some cities offer 24- or 72-hour unlimited travel cards that save money and time.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Pro Tips You Might Not Have Thought Of">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Create a Dedicated Email Just for Travel and Loyalty Programs:</strong> Keep your main inbox clean while still giving you access to exclusive promos and rewards.</p>
            <p><strong className="text-brand-teal">Build in Buffer Time:</strong> Always pad your schedule—especially when switching between modes of transportation (flight to cruise, train to tour, etc.). Missing a connection is never a pleasant experience unless you can find a bucket list thing do in the meantime.</p>
            <p><strong className="text-brand-teal">Ask Locals or Frequent Travelers:</strong> They&apos;ll tell you what the apps won&apos;t—like how long you actually need to make that train, what modes to avoid, or which ferry always runs late.</p>
            <p><strong className="text-brand-teal">Transportation Can Be the Bucket List Item:</strong> Ever tried a gondola, steam train, camel ride, or helicopter tour? Make how you travel part of the memory.</p>
            <p><strong className="text-brand-teal">Know the Transit Culture:</strong> Some places are silent and efficient; others are vibrant and unpredictable. Adapt your expectations. Experiencing traffic patterns in Kathmandu is a bucket list experience in itself.</p>
            <p><strong className="text-brand-teal">Know What to Do If You Miss a Connection:</strong> Screenshot airline policies and have backup routes in mind. Know how to contact the airline&apos;s international office.</p>
            <p><strong className="text-brand-teal">Carry Two Days of Essentials on You:</strong> If your checked bag is delayed, you&apos;ll need a change of clothes, basic toiletries, and medication.</p>
            <p><strong className="text-brand-teal">Reverse Engineer Your Journey:</strong> Instead of planning forward (home ➝ destination), plan backward from your return. What could go wrong at the end of the trip? Layovers? Customs? Missed connections? Build in cushions early to protect yourself later.</p>
            <p><strong className="text-brand-teal">Create a &quot;Delay Day&quot; in Your Itinerary:</strong> Leave one day with no fixed plans on longer trips. Use it for weather delays, unexpected discoveries, or rest. It&apos;s a mental safety valve.</p>
            <p><strong className="text-brand-teal">Charge Everything During Transit Time:</strong> Plug in at every opportunity—on planes, trains, and terminals—even if your battery&apos;s at 80%.</p>
            <p><strong className="text-brand-teal">Travel with a Universal Travel Adapter Plug:</strong> Be ready for any power outlet presented across countries and continents, but always check before you get there.</p>
            <p><strong className="text-brand-teal">Bring a Multi-USB Charger or Power Hub:</strong> Especially for hotel rooms or cruise cabins with limited outlets. Charge several devices at once.</p>
            <p><strong className="text-brand-teal">Download Entertainment for All Ages & Moods:</strong> Flight delays and long rides get longer when your podcast fails to load. Download books, games, meditations, or movies for downtime.</p>
            <p><strong className="text-brand-teal">Keep a Separate Charging Kit for On-the-Go:</strong> Avoid unpacking cords every night. One dedicated &quot;transit&quot; pouch with cords, adapter, and power bank simplifies life.</p>
            <p><strong className="text-brand-teal">Treat Delays as Pause Opportunities:</strong> Read. Reflect. Watch people. Write. Rest. Bucket list travel is also about learning to wait well.</p>
            <p><strong className="text-brand-teal">Talk to Strangers (Safely):</strong> Taxi drivers, bus riders, train conductors—they know the real rhythm of a place. They often offer insights no guidebook can.</p>
            <p><strong className="text-brand-teal">Master Public Transit:</strong> Use apps like Citymapper or Moovit to navigate new cities confidently.</p>
            <p><strong className="text-brand-teal">Walking Opens Doors:</strong> Some of the most memorable bucket list moments happen when you ditch the car and wander.</p>
            <p><strong className="text-brand-teal">Try Transit Challenges:</strong> Use public transport to see how far you can get from home in a single day—it&apos;s a fun local adventure.</p>
            <p><strong className="text-brand-teal">Preload Your Digital Toolkit:</strong> Before you leave, install all key apps (local transit, translation, offline maps, ride shares, airline, weather, currency converter), and log in while you still have good service.</p>
            <p><strong className="text-brand-teal">Ask for Upgrades Nicely—Early & Often:</strong> Whether it&apos;s better seats, boarding priority, or car class, being polite, confident, and early improves your chances.</p>
            <p><strong className="text-brand-teal">Use Credit Card Perks Before You Forget Them:</strong> Many cards offer free insurance, rental car coverage, lounge access, or discounts you have to activate ahead of time.</p>
            <p><strong className="text-brand-teal">Keep a &quot;Hidden&quot; Emergency Card:</strong> Store one debit/credit card somewhere separate (in your shoe or a bag liner) in case your wallet is lost or stolen.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Join Loyalty Programs—Even for One Trip">
          <p className="mb-4">
            Many car rental companies, airlines, train services, and even gas stations offer free loyalty programs—and they&apos;re worth joining even if you think you&apos;ll only use them once. Here&apos;s why:
          </p>
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Faster Check-In & Priority Service:</strong> Loyalty members often get to skip lines or use express pick-up at rental counters and airport check-ins.</p>
            <p><strong className="text-brand-teal">Free Upgrades:</strong> Even entry-level members are sometimes eligible for free seat upgrades, car class upgrades, or early boarding.</p>
            <p><strong className="text-brand-teal">Waived Fees & Discounts:</strong> Some programs offer free second drivers, waived young driver fees, or discounts just for being a member.</p>
            <p><strong className="text-brand-teal">Points Add Up:</strong> You never know when your &quot;one-time&quot; trip turns into a pattern. Points can turn into free flights, hotel nights, or car rentals faster than you think.</p>
            <p><strong className="text-brand-teal">Members-Only Perks:</strong> Think free Wi-Fi, exclusive deals, complimentary insurance coverage, or flexible cancellation.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Transit Tactics Most People Forget">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Know the &quot;Taxi Traps&quot;:</strong> Some airports or train stations have taxi scams or unofficial drivers. Use licensed queues, pre-booked services, or rideshare apps where available.</p>
            <p><strong className="text-brand-teal">Carry a Paper Backup Map:</strong> Even if you&apos;re tech-savvy, batteries die. A foldable map or printed directions can be a trip-saver in remote areas.</p>
            <p><strong className="text-brand-teal">Learn Where the Locals Stand:</strong> Observe how locals get on and off buses or trains. It tells you which doors open, where crowds form, and how to ride respectfully.</p>
            <p><strong className="text-brand-teal">Ask What the Ride Usually Costs:</strong> Before getting in a cab or tuk-tuk, ask a local what a fair fare is. In some places, bartering is expected; in others, it&apos;s offensive.</p>
            <p><strong className="text-brand-teal">To Tip or Not:</strong> Tipping customs also vary with service tips built in, to standard percentages for quality service, to being an insult in some cultures.</p>
            <p><strong className="text-brand-teal">Accept the &quot;Transportation Personality&quot; of a Place:</strong> Some cities are hyper-efficient (Tokyo). Others are charmingly chaotic (Naples). Don&apos;t fight the vibe—flow with it.</p>
          </div>
        </TipsContentSection>

        {/* Back to Catalog */}
        <div className="mt-12 text-center">
          <Link
            href="/tips-ideas"
            className="inline-block bg-gradient-to-r from-brand-navy to-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            ← Back to Tips & Ideas
          </Link>
        </div>
      </div>
    </div>
  );
}

