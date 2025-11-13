import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Packing Tips for Bucket List Travel | Bucket List Doctor',
  description: 'Expert packing tips and smart strategies for bucket list travel. Pack lighter, smarter, and more flexibly.',
  openGraph: {
    title: 'Packing Tips for Bucket List Travel',
    description: 'Expert packing tips and smart strategies for bucket list travel.',
  },
};

export default function PackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Packing & What to Bring" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/luggage.png"
              alt="Packing & What to Bring"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Packing for Bucket List Travel: Expert Tips & Smart Strategies
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            Because when the adventure&apos;s big, the packing needs to be smarter.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Packing for ordinary travel is one thing. But when your journey includes once-in-a-lifetime hikes, luxury rail rides, market hopping, camel trekking, scuba diving, or spiritual retreats—your gear needs to be more intentional. Here are expert tips to help you pack lighter, smarter, and more flexibly for unforgettable experiences.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="Luggage Strategy: Choose the Right Bags">
          <p className="mb-4">Choose luggage based on what you&apos;re doing, not just how long you&apos;re going.</p>
          <div className="space-y-3">
            <p>A safari, pilgrimage, or trek might require rugged gear.</p>
            <p>A multi-city European tour? Something lightweight and rollable.</p>
            <p>Island-hopping? Waterproof, soft-sided duffels or backpacks are easier on boats.</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Types of Luggage for Specialized Trips:</h3>
            <div className="space-y-2">
              <p><strong className="text-brand-teal">Convertible backpack-roller hybrid:</strong> Great for trips with both urban and off-road elements.</p>
              <p><strong className="text-brand-teal">Expandable carry-ons:</strong> For those who return with souvenirs or unexpected treasures.</p>
              <p><strong className="text-brand-teal">Hard shell vs. soft shell:</strong> Hard shell offers better protection, soft shell flexes for tight storage spaces.</p>
              <p><strong className="text-brand-teal">Duffel bags</strong> are great for stuffing odd-shaped gear or fitting into tight cargo holds.</p>
              <p><strong className="text-brand-teal">Trunks</strong> can carry formal wear, sporting equipment, or expedition gear—ideal for basecamps, luxury safaris, or long cruises.</p>
              <p><strong className="text-brand-teal">Insulated cooler bags:</strong> Perfect for road trips, camping, or when carrying medications or perishables.</p>
              <p><strong className="text-brand-teal">Vacuum-compressed bags:</strong> Excellent for puffer jackets, bulky sweaters, or kids&apos; clothes.</p>
            </div>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Carry-On & Personal Item Tips">
          <TipsSubsection title="Think Function Over Fashion">
            <div className="space-y-3">
              <p>Choose a personal item (backpack or tote) that doubles as your day bag or excursion bag.</p>
              <p>Prioritize multi-pocket designs so you can separate tech, documents, snacks, and meds.</p>
              <p>Use foldable totes or duffel bags for overflow, laundry, or last-minute purchases.</p>
            </div>
          </TipsSubsection>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-3">Specialized Carry-On Ideas:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Insulated pouches for medications or snacks</li>
              <li>Waterproof roll-top dry bags for boats, rain, or beach days</li>
              <li>Neck wallet or anti-theft sling bag for markets, crowded areas, or festivals</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Packing & Organization Genius">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Pack a &quot;Transit Survival Kit&quot;:</strong> Include a small pouch with snacks, meds, wipes, gum, chargers, a pen, and a neck pillow. Keep it accessible at all times—not buried in your bag.</p>
            <p><strong className="text-brand-teal">Color-Code or Label Your Bags Internally:</strong> Use pouches or dry bags in different colors to quickly grab &quot;tech,&quot; &quot;meds,&quot; or &quot;essentials&quot; without digging.</p>
            <p><strong className="text-brand-teal">Use Luggage Trackers:</strong> AirTags or similar Bluetooth trackers help find your suitcase if it&apos;s lost, delayed, or taken by mistake.</p>
            <p><strong className="text-brand-teal">Scan and Save Important Docs:</strong> Save your passport, ID, insurance, tickets, and emergency contacts in your phone and email them to yourself or a trusted person.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Space-Saving Packing Techniques">
          <TipsSubsection title="Smart Compression">
            <div className="space-y-3">
              <p>Use compression packing cubes to shrink bulky clothes.</p>
              <p>Roll, don&apos;t fold clothes to save space and reduce wrinkles.</p>
              <p>Wear your bulkiest items on travel days—like boots or jackets.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Multipurpose Mindset: Choose items with double duty">
            <div className="space-y-2">
              <p>Sarong or scarf = blanket, shawl, beach wrap, temple cover-up</p>
              <p>Athletic leggings = sleepwear, hike wear, airport comfort</p>
              <p>Trail runners = fine for both hiking and urban exploring</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="What to Pack vs. Buy at Destination">
          <TipsSubsection title="Best to Buy There:">
            <div className="space-y-2">
              <p><strong className="text-brand-teal">Toiletries & sunscreen:</strong> Save space and avoid TSA hassle. Bonus: you&apos;ll smell like the local brands.</p>
              <p><strong className="text-brand-teal">Beach towels, pool floats, flip-flops:</strong> Often cheap and easy to find.</p>
              <p><strong className="text-brand-teal">Heavy or regional clothing (e.g. saris, alpaca sweaters, thermal layers):</strong> Local styles often work better and make great souvenirs.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Always Pack:">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Medications, prescriptions, or health-specific items (often hard to replace abroad)</li>
              <li>Power banks, chargers, universal adapters</li>
              <li>Favorite comfort items for kids or picky eaters (snacks, small toys)</li>
              <li>One lightweight but stylish outfit for special occasions or photos</li>
            </ul>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Rarely Thought-of Expert Packing Tips">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Bring a zippered &quot;everything pouch&quot; or zip-lock bags:</strong> For receipts, postcards, SIM cards, or random finds that clutter your pockets.</p>
            <p><strong className="text-brand-teal">Pack a mini laundry kit:</strong> Sink stopper, travel detergent, and a stretchy clothesline = freedom from overpacking.</p>
            <p><strong className="text-brand-teal">Use a &quot;last 48 hours&quot; cube or pouch:</strong> Pack what you&apos;ll need for flights, airports, or the last days—separates clean from worn and keeps your return home smooth.</p>
            <p><strong className="text-brand-teal">Pre-pack an empty pack:</strong> Like a rolled-up duffel, for spontaneous markets or souvenir sprees.</p>
            <p><strong className="text-brand-teal">Label your cubes or pouches by purpose:</strong> &quot;Sleepwear,&quot; &quot;Cold Weather Layer,&quot; &quot;Electronics,&quot; etc.—less rummaging = less stress.</p>
            <p><strong className="text-brand-teal">Don&apos;t forget a mini first-aid/emergency pouch:</strong> Include ibuprofen, motion sickness tablets, tweezers, band-aids, safety pins, and a spare credit card or emergency cash.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Specialized Gear, Sports Equipment & Oversized Items">
          <TipsSubsection title="If You're Traveling With:">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Golf Clubs, Skis, or Snowboards</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Use padded, airline-approved cases with ID tags and contact info.</li>
                  <li>Call the airline in advance—some charge extra or require pre-check-in.</li>
                  <li>Stuff soft items inside (e.g., coats, socks) to pad and save space.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Musical Instruments or Camera Gear</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Consider carry-on approval or reserve a separate seat (for high-value instruments).</li>
                  <li>Bring proof of value (photos, receipts) in case of damage/loss.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Adventure Gear (e.g., scuba fins, trekking poles)</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Use detachable or telescoping models.</li>
                  <li>Tape or bundle awkward gear to prevent it from catching on conveyor belts.</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Packing for Dirty, Wet, or Worn Clothing">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Bring two lightweight laundry bags:</strong> one for dirty clothes, one for wet swimwear or sweaty gear.</p>
            <div>
              <p className="font-bold mb-2">Include multiple sizes of Ziploc bags:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Store wet socks or bathing suits.</li>
                <li>Protect electronics in wet environments.</li>
                <li>Hold snacks, medicine, or leaky toiletries.</li>
              </ul>
            </div>
            <p>Consider collapsible laundry cubes or odor-seal dry bags if you&apos;ll be traveling long-term or with kids.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Packing Formalwear, Heavy Coats & Delicates">
          <TipsSubsection title="For Dresses, Suits & Fancy Clothes:">
            <div className="space-y-2">
              <p>Garment folders or garment bags prevent wrinkling and keep items clean.</p>
              <p>Roll tissue paper or dry cleaning plastic between layers to reduce creases.</p>
              <p>Bring a travel steamer or wrinkle-release spray for last-minute fixes.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="For Bulky Outerwear:">
            <div className="space-y-2">
              <p>Wear your heaviest coat during transit.</p>
              <p>Use compression bags to flatten puffer coats or vests.</p>
              <p>If heading to a warm-weather destination first, ship coats ahead to cold-weather stops.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Traveling with Cash, Jewelry & High-Value Items">
          <TipsSubsection title="Know the Cash Rules:">
            <p className="mb-3">Many countries require customs declarations for cash over $10,000 USD (or equivalent) and other countries may have different rules and regulations. Check in advance.</p>
            <p>Keep large sums split across travelers or locations and avoid flashing cash in public.</p>
          </TipsSubsection>

          <TipsSubsection title="Jewelry Travel Tips:">
            <div className="space-y-2">
              <p>Only bring what you&apos;ll truly wear—leave sentimental or irreplaceable items home.</p>
              <p>Use padded jewelry cases or pillboxes to prevent tangling or scratching.</p>
              <p>Carry valuables in personal item or on your body, never in checked luggage.</p>
              <p>Photograph valuables before leaving—handy for insurance or loss.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Baggage Weight Limits & Size Awareness">
          <p className="mb-3">Most airlines have strict carry-on and checked baggage weight limits. Always check:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li>Domestic vs. international airline rules</li>
            <li>Low-cost carriers, which often have tighter restrictions</li>
          </ul>
          <div className="space-y-2">
            <p>Weigh your bag before heading to the airport.</p>
            <p>Know the dimensional rules for carry-ons and personal items—some international airlines are smaller than U.S. standards and carry-on bag limits have been reduced on some airlines.</p>
            <p>Pack a collapsible tote or backpack as backup if you exceed your weight limit and need to shift items at check-in.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="High-Level Packing Tips Most Travelers Overlook">
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Pack one &quot;easy grab&quot; cube with essentials you&apos;ll need right away: change of clothes, meds, power bank, and toiletries.</li>
            <li>Use a color-coded cube system by category (e.g., red = activewear, blue = sleep, gray = tech).</li>
            <li>Pack a sharpie, rubber bands, carabiner clips, and a couple of safety pins—tiny tools, big impact.</li>
            <li>Keep your essentials pouch restocked and ready to re-pack so you&apos;re not rebuilding from scratch every trip.</li>
            <li>If you&apos;re staying in multiple places, use one cube or pouch per destination stop for seamless repacking.</li>
            <li>Layer your luggage like a daily timeline—items you need first go near the top.</li>
          </ul>
          <p className="mt-4">Packing for bucket list experiences isn&apos;t just about gear—it&apos;s about supporting the freedom to say &quot;yes&quot; to what the world offers. Pack smart, pack intentionally, and remember, space is valuable, but peace of mind is priceless.</p>
        </TipsContentSection>

        <TipsContentSection title="Packing for Day Trips, Hikes & Cycling Adventures">
          <p className="mb-6">
            Don&apos;t let the small day bag fool you—packing for these experiences requires precision.
          </p>
          <p className="mb-6">
            When you step out for a full-day hike, cycling tour, or day-long city adventure, you need to pack light—but smart. The right gear keeps you safe, energized, and comfortable for hours away from your base, without weighing you down or leaving you unprepared.
          </p>

          <TipsSubsection title="Day Trip Essentials (for Cities, Tours, and Explorations)">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">What to Pack:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Lightweight daypack or sling bag with padded straps</li>
                  <li>Refillable water bottle (collapsible or insulated for long days)</li>
                  <li>Portable phone charger or power bank</li>
                  <li>Printed or offline map in case GPS fails</li>
                  <li>Cash & ID in a secure, waterproof pouch or neck wallet</li>
                  <li>Copy of passport or travel documents (digital and/or printed)</li>
                  <li>Snacks: nuts, protein bars, dried fruit, or local options</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Smart Add-ons:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Ziploc or wet bag for trash, wet wipes, or emergency storage</li>
                  <li>Travel-size hand sanitizer and toilet paper</li>
                  <li>Small scarf or wrap—can serve as shade, temple covering, or impromptu towel</li>
                  <li>Headlamp or flashlight if there&apos;s any chance you&apos;ll be out after dark</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="For Hikes & Nature-Based Excursions">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Day Hike Must-Haves:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Breathable, moisture-wicking layers</li>
                  <li>Weather-appropriate outer layer: rain jacket, windbreaker, or fleece</li>
                  <li>Sun protection: hat, sunglasses, SPF lip balm, reef-safe sunscreen</li>
                  <li>Bug spray or wipes</li>
                  <li>Trail shoes or lightweight hikers (broken-in before the trip!)</li>
                  <li>First aid mini-kit: bandages, antiseptic, tweezers, moleskin (for blisters)</li>
                  <li>Navigation tools: offline trail maps, GPS app, or compass</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Pro Hiker Tips:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Bring electrolyte tablets for hydration, especially in heat or altitude.</li>
                  <li>Carry a whistle—it&apos;s tiny and can help you be found quickly if lost.</li>
                  <li>Consider a packable sit pad or lightweight blanket for mid-hike rests or picnics.</li>
                  <li>Use collapsible trekking poles if hiking involves inclines or rocky ground.</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="For Cycling Tours or Scenic Rides">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Bike Adventure Must-Haves:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Helmet (if not included in rental or tour)</li>
                  <li>Padded cycling shorts or breathable clothing</li>
                  <li>Full water bottle + backup (or hydration pack)</li>
                  <li>Compact tool kit and tire repair kit if biking solo</li>
                  <li>Mini first aid kit and electrolyte chews</li>
                  <li>Bike lock if you plan to stop along the way</li>
                  <li>Weather layer—windbreaker, rain jacket, or arm sleeves</li>
                  <li>Phone mount or handlebar bag for GPS and access to essentials</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Often-Forgotten Cycling Tips:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Bring sunscreen for the backs of your hands, neck, and knees—easily forgotten but often exposed.</li>
                  <li>Use cycling gloves to avoid hand fatigue on longer rides.</li>
                  <li>Snacks that won&apos;t melt or crumble (e.g., fig bars, protein bites).</li>
                  <li>Add a rear-view mirror or reflective vest for urban or busy roads.</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">General Tips for Day Excursions</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Pack according to the weather + activity length + remoteness—a city walking tour requires different prep than a 6-hour jungle hike.</li>
              <li>Check bag requirements: Some museums, temples, or tours restrict large bags.</li>
              <li>Don&apos;t rely on phone service—download your maps, tickets, and confirmations in advance.</li>
              <li>Train with your gear before departure: wear your daypack, walk with water weight, test your shoes or padded shorts.</li>
              <li>Leave a note or message with someone when hiking or cycling solo—even if just for a few hours.</li>
            </ul>
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

