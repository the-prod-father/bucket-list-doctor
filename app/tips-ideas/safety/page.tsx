import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Safety & Precautions for Bucket List Travel | Bucket List Doctor',
  description: 'Emergency contacts, theft prevention, and safety protocols for travelers. Plan wisely and stay safe on your adventures.',
  openGraph: {
    title: 'Safety & Precautions for Bucket List Travel',
    description: 'Emergency contacts, theft prevention, and safety protocols for travelers.',
  },
};

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Safety & Precautions" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/safety.png"
              alt="Safety & Precautions"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Safety & Precautions for Bucket Listers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            Because extraordinary experiences should come with smart planning.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Bucket list adventures often take you outside your comfort zone—and that&apos;s part of what makes them incredible. But whether you&apos;re skydiving, hiking remote trails, traveling solo, or exploring unfamiliar countries, your safety and preparedness should always come first. This guide is designed to help you plan wisely, assess risks, protect yourself, and know what to do when something goes wrong.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="Safety Starts with the List: Smart Bucket List Planning">
          <div>
            <p className="font-bold mb-3">Tips When Creating Your List:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Assess your health and ability honestly before adding high-risk or strenuous activities.</li>
              <li>Don&apos;t confuse &quot;epic&quot; with &quot;reckless.&quot; Challenge yourself but be realistic about your limits.</li>
              <li>For dangerous or remote experiences (mountain climbs, scuba diving, etc.), include &quot;preparation milestones&quot; like training or certifications as part of the list.</li>
              <li>Prioritize reputable companies and licensed guides for high-risk activities.</li>
              <li>Ask yourself: Would I be willing to do this alone? In another language? Without cell service? If not, consider modifying your goal plans and adding it with safeguards.</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Physical Risk, Dangerous Activities & Extreme Sports">
          <TipsSubsection title="Planning & Participation Tips:">
            <div className="space-y-4">
              <div>
                <p className="mb-2">Always get medical clearance before engaging in activities such as:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Scuba diving</li>
                  <li>High-altitude treks</li>
                  <li>Bungee jumping</li>
                  <li>Skydiving</li>
                  <li>White-water rafting</li>
                </ul>
              </div>
              <div>
                <p className="mb-2">Check insurance coverage for:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Emergency evacuation</li>
                  <li>Hospitalization abroad</li>
                  <li>High-risk sports (not always included in basic plans)</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Pro Tips:</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Take lessons or training in advance (e.g., rock climbing, surfing, snowboarding).</li>
              <li>Don&apos;t rely on your fitness level alone—learn safety protocols and terminology.</li>
              <li>Always have appropriate clothing for warmth and comfort.</li>
              <li>Be sure to have water decontamination tablets or bottles for long treks.</li>
              <li>Ask about equipment checks and staff certifications. If they&apos;re vague—walk away.</li>
              <li>Use a buddy system—even experienced adventurers shouldn&apos;t go it alone.</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Safety & Security While Traveling">
          <div>
            <p className="font-bold mb-3">General Travel Safety Tips:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Share your itinerary, lodging details, and emergency contacts with someone at home.</li>
              <li>Have a general code word agreed upon to let your contacts (family members/friends) know if you are in danger and another to let contacts know it is truly you and not an AI generated voice. Example: saying. &quot;A.O.K.,&quot; means you&apos;re in danger. Saying, &quot;Mommy,&quot; means it&apos;s really you and not a fake or AI voice. Saying, &quot;I&apos;m A.O.K. mommy,&quot; means it&apos;s really you and you&apos;re in danger.</li>
              <li>Keep digital and physical copies of your passport, travel insurance, and key documents.</li>
              <li>Register with your country&apos;s embassy or consulate for longer or riskier trips.</li>
              <li>Always carry emergency cash, photo ID, copy of passport, local emergency numbers, your hotel/cruise address and phone number (in the local language if needed), backup emergency medications if needed in a pillbox.</li>
              <li>Remain aware of your surroundings in day and at night.</li>
              <li>Do not leave luggage, bags or personal items unattended.</li>
              <li>Check ID of taxi drivers, Uber drivers and other transportation personnel and only use licensed companies.</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Using Satellite Phones & Messengers for Remote Bucket List Adventures">
          <p className="mb-6">When you go off-grid, don&apos;t go silent.</p>
          <p className="mb-6">Not all bucket list adventures come with cell service. Whether you&apos;re climbing Kilimanjaro, trekking Patagonia, hiking in the Canadian Rockies, or exploring Arctic ice fields, a satellite communication device can keep you connected in case of emergencies—or just for peace of mind.</p>

          <TipsSubsection title="Why Satellite Communication Matters">
            <div className="space-y-3">
              <p>Cell service disappears fast in national parks, high altitudes, deep canyons, deserts, oceans, and jungles.</p>
              <p className="mb-2">In remote areas, satellite signals are the only reliable way to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
                <li>Call for help during an emergency</li>
                <li>Stay in touch with your team or guide</li>
                <li>Send updates to loved ones</li>
                <li>Receive weather or safety alerts</li>
              </ul>
              <p>Note: Some newer smartphones (like iPhone 14 and up) offer emergency satellite SOS but can have very limited availability and no regular communication features.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Tips for Using Satellite Devices Effectively">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Pre-test the device before your trip—know how to use all functions (including SOS).</li>
              <li>Charge fully and carry extra batteries and a solar charger.</li>
              <li>Program emergency contacts into the device before travel.</li>
              <li>Learn how to send a location pin and how to check signal (satellites need open sky).</li>
              <li>Rent instead of buy if it&apos;s a one-time or infrequent need—check with local outfitters or services.</li>
            </ul>
          </TipsSubsection>

          <div className="mt-6">
            <p className="font-bold mb-2">Great for These Types of Trips:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kilimanjaro, Everest Base Camp, or Andes trekking</li>
              <li>Amazon or Congo River expeditions</li>
              <li>Sailing, cruising beyond Wi-Fi zones, or island hopping</li>
              <li>Deserts (Sahara, Atacama, Mojave)</li>
              <li>Arctic or Antarctic tours</li>
              <li>Deep backcountry hikes in Canada, Alaska, Australia, or Patagonia</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Local Awareness & Cultural Sensitivity:">
          <div className="space-y-4">
            <p>Research local laws and norms before traveling:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Some places ban certain medications, clothing styles, or public displays of affection.</li>
              <li>What&apos;s a legal souvenir in one country could be contraband in another.</li>
              <li>Don&apos;t assume local police function like they do at home. Some may expect bribes, while others may be extremely strict.</li>
            </ul>
            <div>
              <p className="font-bold mb-2">Tips for Avoiding Theft & Scams:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Use anti-theft bags or slings, and don&apos;t carry everything in one place.</li>
                <li>Avoid displaying valuables (cameras, jewelry, phones) in high-theft areas.</li>
                <li>Be aware of distraction tactics (e.g., a child bumping into you while someone picks your pocket).</li>
                <li>In markets or taxis, agree on prices up front and be wary of pressure tactics.</li>
              </ul>
            </div>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Securing Money, Jewelry & Personal Belongings">
          <TipsSubsection title="Divide and Conquer">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Never keep all your valuables in one place.</li>
              <li>Carry only what you need for the day. Lock what you can.</li>
              <li>Keep backup cards or cash in a separate bag or location.</li>
              <li>Leave emergency funds hidden in your luggage or hotel safe.</li>
              <li>Act Like You Know Where You&apos;re Going. Walk with confidence—even if you&apos;re not sure.</li>
              <li>Avoid checking your phone or maps in the middle of a street. Step into a shop or quiet corner instead.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Smart Ways to Secure Your Money">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Use a money belt, neck pouch, or hidden pocket under your clothes.</li>
              <li>Consider an RFID-blocking wallet or anti-theft crossbody bag.</li>
              <li>In high-theft areas, use a decoy wallet with a few small bills and expired cards.</li>
              <li>Bring multiple cards (debit/credit) and store one separately in your luggage or hotel.</li>
              <li>Keep a record of card numbers and contact info for cancellation in case of theft.</li>
              <li>Notify your bank of travel dates and locations to avoid card blocks.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="The Benefits of Using Apple Pay & Digital Wallets While Traveling">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Enhanced Security</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Your actual credit or debit card number is never shared with merchants.</li>
                  <li>Every transaction uses a unique, encrypted code—making it extremely difficult to hack or skim.</li>
                  <li>Your device usually requires biometric verification (Face ID, fingerprint) before completing a payment.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Convenience While Traveling</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>No need to carry your physical wallet everywhere—less risk of theft or loss.</li>
                  <li>Great for quick transit (taps on metro gates, buses, etc.).</li>
                  <li>Works even if you&apos;re traveling light or wearing clothing without pockets.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Widespread Global Acceptance</p>
                <p className="mb-2">Apple Pay and other wallets are accepted in:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                  <li>Most of Europe (especially Nordic countries, the UK, France, Germany)</li>
                  <li>Many parts of Asia (Japan, China, Singapore, South Korea)</li>
                  <li>Major cities in North America, Australia, and the Middle East</li>
                  <li>Even if your home country doesn&apos;t use digital payments often, many foreign countries now prefer it—especially post-pandemic.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Other Smart Benefits</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Track spending instantly through your app.</li>
                  <li>Pair with a virtual travel card or card with no foreign transaction fees.</li>
                  <li>Some digital wallets offer built-in currency conversion tools.</li>
                  <li>Easier refunds or reimbursements if something goes wrong.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Important Notes & Tips</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Bring a backup physical card in case the system goes down or a small vendor only takes cash.</li>
                  <li>Not all countries accept Apple Pay yet—check local compatibility before you go.</li>
                  <li>Have at least one form of ID and one physical payment method on you at all times.</li>
                  <li>Use Apple Maps or Google Maps to filter or search for &quot;Apple Pay accepted here&quot; businesses in some cities.</li>
                  <li>Carry a portable battery charger in case your cell phone power turns off.</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Traveling with Jewelry & Valuables">
            <div className="space-y-3">
              <p className="font-bold mb-2">Best Practices:</p>
              <p>Leave expensive or sentimental jewelry at home unless it&apos;s essential (e.g., wedding band).</p>
              <div>
                <p className="mb-2">If traveling with valuables:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Do not make yourself a target. Wear simple, understated pieces.</li>
                  <li>Store them in a mini combination safe or lockbox inside your main luggage.</li>
                  <li>Don&apos;t store jewelry in checked luggage.</li>
                </ul>
              </div>
              <p>If you must bring valuable items, consider getting them insured for travel.</p>
              <p>If traveling with very valuable pieces consider using the hotel&apos;s main safe or secure deposit box at the front desk if available. Access often requires a key from both you and staff, offering dual protection. Typically monitored by security staff or surveillance and often insured by the hotel.</p>
              <p>On Cruise Ships: Keep highly valuable items with the Purser or Guest Services which typically has a secured vault or safe deposit boxes available for passenger use.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Securing Passports & Documents">
            <div className="space-y-3">
              <p className="font-bold mb-2">What to Carry:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Carry a laminated copy of your passport photo page (and visa, if applicable).</li>
                <li>Keep originals in a hotel safe, unless you&apos;re in a country that requires ID at all times.</li>
                <li>Store a digital scan of documents in a secure cloud folder (Google Drive, Dropbox, or encrypted apps).</li>
              </ul>
              <div>
                <p className="font-bold mb-2">Emergency Prep:</p>
                <p>Include copies of passport, travel insurance, medical prescriptions. credit/debit card numbers (last 4 digits only), emergency contact list</p>
              </div>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Safety at Accommodations">
          <TipsSubsection title="In-Room Safety:">
            <p className="mb-3">Use the hotel/cruise cabin safe if available—but also:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Check if the safe works before storing valuables.</li>
              <li>Use a personal lockable pouch or mini safe if safes are not provided.</li>
              <li>Don&apos;t leave valuables out, even in &quot;nice&quot; hotels.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Room Entry Protection:">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Use a portable door lock or doorstop alarm, especially in shared or low-security lodging.</li>
              <li>Always lock doors and windows, even if you&apos;re only stepping out briefly.</li>
              <li>Leave the television on so room sounds occupied.</li>
            </ul>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Luggage & Transit Safety">
          <TipsSubsection title="While Flying or in Transit:">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Keep valuables in your carry-on, not checked baggage.</li>
              <li>Use a lockable, hard-shell suitcase for protection against theft and tampering.</li>
              <li>Add a luggage tracker (e.g., Apple AirTag, Tile) to keep tabs on bags.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="On Buses or Trains:">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Keep your bag in front of you, not in overhead bins or at your feet.</li>
              <li>Use a carabiner clip to attach zippers for basic deterrence.</li>
              <li>If sleeping on a train or overnight bus, use your bag as a pillow or loop your arm through the strap.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="If Theft Happens">
            <div className="space-y-3">
              <p className="font-bold mb-2">What to Do:</p>
              <p>Firstly, be prepared by following the above recommendations in this section for backup.</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Report theft immediately to local authorities and your country&apos;s embassy or consulate.</li>
                <li>Contact your bank to cancel cards and freeze accounts.</li>
                <li>Use your document copies to expedite replacements.</li>
                <li>Most travel insurance policies require a police report to process theft claims. File one, even for small losses.</li>
              </ul>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Essential Phone Numbers to Have for Emergencies, or if Your Passport is Lost or Stolen">
          <p className="mb-6">Preparation turns panic into a plan.</p>
          <p className="mb-6">Always store these digitally (in a secure app) and physically (in your luggage or travel wallet) in case your passport goes missing during your trip.</p>

          <TipsSubsection title="Your Country's Embassy or Consulate (Local to Your Travel Destination)">
            <p className="mb-4">This is your #1 resource for replacing a lost or stolen passport.</p>
            <p className="mb-4">Find the nearest embassy or consulate to your destination via your country&apos;s embassy:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>U.S. Embassy Directory</li>
              <li>UK Foreign Office Worldwide</li>
              <li>Canadian Embassy Finder</li>
              <li>Australian Embassies Abroad</li>
            </ul>
            <p className="mb-2">Write down:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Local embassy phone number</li>
              <li>Emergency after-hours number</li>
              <li>Address & directions (in English and local language)</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Passport Issuing Agency (Back Home)">
            <p className="font-bold mb-3">Emergency Passport Assistance Contact Numbers</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Emergency Contact Number(s)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇺🇸 United States</td>
                    <td className="border border-gray-300 px-4 py-2">
                      📞 1-877-487-2778<br />
                      📞 TTY: 1-888-874-7793<br />
                      🌐 travel.state.gov<br />
                      usembassy.gov
                    </td>
                    <td className="border border-gray-300 px-4 py-2">After-hours: Call for emergencies only. Staff can direct you to the nearest consulate or embassy.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇬🇧 United Kingdom</td>
                    <td className="border border-gray-300 px-4 py-2">
                      📞 +44 300 222 0000 (inside & outside the UK)<br />
                      🌐 gov.uk/passport-advice-line
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Lines open daily. Ask for Emergency travel documents if abroad.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇨🇦 Canada</td>
                    <td className="border border-gray-300 px-4 py-2">
                      📞 +1-613-996-8885 (24/7, collect calls accepted)<br />
                      🌐 travel.gc.ca
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Call for consular emergencies, lost passports, or urgent assistance.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇦🇺 Australia</td>
                    <td className="border border-gray-300 px-4 py-2">
                      📞 1300 555 135 (within Australia)<br />
                      📞 +61 2 6261 3305 (overseas)<br />
                      🌐 smartraveller.gov.au
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Also available via SMS: +61 421 269 080. Consular Emergency Centre.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 mb-2">These numbers help you:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Report a passport as lost or stolen</li>
              <li>Ask about reissuing documents</li>
              <li>Get advice if you can&apos;t reach a consulate</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Travel Insurance Provider">
            <p className="mb-3">If you&apos;ve purchased travel insurance, they can:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>Assist with logistics and paperwork</li>
              <li>Cover fees for emergency passports or delays</li>
              <li>Provide translation or legal support if needed</li>
            </ul>
            <p className="mb-2">Keep records and have ready:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Policy number</li>
              <li>24/7 emergency assistance number</li>
              <li>Claims department contact</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Credit Card Companies or Banks (For ID Verification Help)">
            <p className="mb-3">Some premium cards (e.g., AmEx Platinum, Chase Sapphire, etc.) offer concierge travel assistance and even passport loss coverage.</p>
            <p className="mb-2">Call to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Lock your card if your wallet was stolen</li>
              <li>Request ID verification to check in or access emergency funds</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Emergency Contact at Home">
            <p className="mb-3">A trusted friend or family member who:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>Has a copy of your passport or travel itinerary</li>
              <li>Can wire funds or contact services on your behalf</li>
              <li>Knows your travel insurance and embassy info</li>
            </ul>
            <p className="mb-2">Use a secure app like:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>1Password</li>
              <li>Google Drive (protected folder)</li>
              <li>Evernote with encryption</li>
            </ul>
            <p className="mb-2">To store:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Passport scans</li>
              <li>Visa pages</li>
              <li>Emergency phone numbers</li>
              <li>ID and insurance documents</li>
            </ul>
            <p className="mt-4">Having these phone numbers ready before anything goes wrong gives you power over the situation. If your passport is lost or stolen, you won&apos;t have to waste time hunting for help—you&apos;ll already know exactly who to call and what to do.</p>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Know Location-Specific Risks">
          <TipsSubsection title="Check Official Government Travel Advisories">
            <p className="mb-4">Different countries publish up-to-date travel advice that includes risk levels, regional alerts, crime stats, and embassy contact info. Be sure to check the advisory from your own country and consider reviewing others for a broader perspective.</p>
            <p className="font-bold mb-3">Official Travel Advisory Websites by Country</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Travel Advisory Website</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇺🇸 United States</td>
                    <td className="border border-gray-300 px-4 py-2">travel.state.gov</td>
                    <td className="border border-gray-300 px-4 py-2">U.S. Department of State travel advisories, country-by-country risk levels, security alerts, and health guidance.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇬🇧 United Kingdom</td>
                    <td className="border border-gray-300 px-4 py-2">gov.uk/foreign-travel-advice</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇨🇦 Canada</td>
                    <td className="border border-gray-300 px-4 py-2">travel.gc.ca/travelling/advisories</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">🇦🇺 Australia</td>
                    <td className="border border-gray-300 px-4 py-2">smartraveller.gov.au</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <p className="font-bold mb-2">Examples of Localized Safety Concerns:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Altitude sickness: Machu Picchu, Nepal, high-elevation climbs</li>
              <li>Unstable governments/police: Venezuela, Myanmar, parts of the Middle East</li>
              <li>Natural disasters: Earthquake-prone regions like Japan, Chile, or Indonesia</li>
              <li>Scams and petty theft: Popular tourist zones like Barcelona, Rome, or Bangkok</li>
              <li>Restricted internet & communication: China, Iran, parts of North Korea</li>
              <li>Terrorism or unrest risks: Check advisories at travel.state.gov or gov.uk/foreign-travel-advice</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="What to Do If You're Arrested or Detained Abroad">
          <TipsSubsection title="Stay Calm & Focused:">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Ask to contact your embassy or consulate immediately.</li>
              <li>It&apos;s your legal right in most countries.</li>
              <li>Embassy staff can&apos;t get you out of jail, but they can ensure your legal rights are observed, help arrange legal counsel and notify family.</li>
              <li>Do not sign documents you don&apos;t understand. Request a certified translator.</li>
              <li>Remain respectful and non-confrontational—arguing, yelling, or showing frustration may escalate things.</li>
              <li>Do not bribe police or officials unless explicitly legal or expected in that country (and even then—tread carefully).</li>
              <li>Follow local procedures—many countries have strict or unusual rules that may be unfamiliar (e.g., mandatory holding periods, religious court systems).</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Prepare in Advance:">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Another reminder to ALWAYS let someone know where you&apos;re going!</li>
              <li>Remember to set up and let people know your code words in case you are in trouble/danger and cannot speak openly and to verify it&apos;s truly your voice as discussed earlier.</li>
              <li>Know your embassy&apos;s local phone number and address.</li>
              <li>Carry emergency contact numbers (and not just saved in your phone).</li>
              <li>Be aware of any laws that might impact your behavior: prescription drugs, speech, alcohol, etc.</li>
            </ul>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Bonus Safety Tools & Resources">
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">Download these types of apps:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Smart Traveler (U.S. State Department travel alerts)</li>
                <li>Sitata (real-time safety alerts and health info)</li>
                <li>GeoSure (city-specific safety ratings by neighborhood)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Pack a personal safety kit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Small flashlight, whistle, phone charger, emergency meds, multi-tool</li>
                <li>Portable door lock or travel alarm for solo travelers</li>
              </ul>
            </div>
            <p>Consider GPS location sharing with a trusted contact while on more remote or dangerous excursions.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Child Safety While Traveling: Protection, Preparedness & Peace of Mind">
          <p className="mb-6">Explore the world as a family—safely and smartly.</p>
          <p className="mb-6">Traveling with children can be incredibly enriching, but it also requires a different level of awareness. From preventing kidnapping and illness to handling medical emergencies or getting separated, a few thoughtful precautions can make all the difference. Here&apos;s how to protect your little ones while still embracing the adventure.</p>

          <TipsSubsection title="Protecting Children from Kidnapping or Disappearance">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Tips to Prevent Abduction or Accidental Separation:</p>
                <p className="mb-2">Dress kids in bright, recognizable clothing—take a photo each morning in what they&apos;re wearing.</p>
                <div className="mb-2">
                  <p className="font-bold mb-2">Consider using child GPS trackers like:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Apple AirTags (hidden in shoe or backpack)</li>
                    <li>Jiobit Smart Tag</li>
                    <li>AngelSense (for children with special needs)</li>
                  </ul>
                </div>
                <div className="mb-2">
                  <p className="font-bold mb-2">Practice a &quot;What to Do If We Get Separated&quot; plan:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Stay in one spot.</li>
                    <li>Identify a safe adult (e.g., police, store worker).</li>
                    <li>Memorize parent&apos;s full name and phone number (or wear it as a bracelet).</li>
                    <li>Have a safety word that lets you know it&apos;s really them.</li>
                    <li>Teach them to never leave with a stranger and to scream loud and not stop if someone grabs them.</li>
                    <li>Practice saying: &quot;I&apos;m lost. Can you help me call my mom?&quot; preferably to someone in a uniform or a mom with kids.</li>
                  </ul>
                </div>
                <p className="mb-2">Choose a clear, visible meeting point at every venue (a landmark, ride, or entrance).</p>
                <p className="mb-2">Point it out and repeat it to the child when you arrive.</p>
                <p className="mb-2">Do not scare them but let them know that these things just common safety practices that everyone uses, even mommies and daddies.</p>
                <p className="mb-2">Use safety wristbands or temporary tattoos with emergency contact info.</p>
                <p className="mb-2">Avoid labeling backpacks or clothes with the child&apos;s name visible, which could be used to gain false trust.</p>
                <div className="mb-2">
                  <p className="font-bold mb-2">Keep a card in their pocket with:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Their Name</li>
                    <li>Parent&apos;s name</li>
                    <li>Emergency phone number</li>
                    <li>Hotel name/address</li>
                    <li>Language(s) spoken</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-bold mb-2">Smart Strategies:</p>
                <p className="mb-2">Don&apos;t post real-time photos with geotags on social media while still in a location.</p>
                <p className="mb-2">In crowded places (markets, amusement parks, airports), consider harness backpacks or stroller safety clips for toddlers.</p>
                <p>Never leave children unattended, even briefly, at hotel pools, lobbies, or stores.</p>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="What to Do If Your Child Gets Accidentally Separated in a Public Place">
            <p className="mb-6">Stay calm, act fast, and follow these steps.</p>
            <p className="mb-6">In the high emotion of the moment, having a clear plan of action can mean the difference between panic and resolution. This guide walks you through what to do immediately, and how to prepare your child and yourself before an incident ever happens.</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">IMMEDIATE ACTION: IF YOUR CHILD GOES MISSING</p>
                <div className="mb-4">
                  <p className="font-bold mb-2">Pause & Scan</p>
                  <p className="mb-2">Stop and look in every direction—kids often wander just a few feet away.</p>
                  <p className="mb-2">Call out their first name loudly and clearly and listen for their voice.</p>
                  <p className="mb-2">Look at eye level or lower—children often crouch or hide when scared.</p>
                  <p>If you have a child with special needs or is prone to wandering off, carry a loud whistle so they can hear and locate you.</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold mb-2">Don&apos;t Run Off—Alert Nearby Staff Immediately</p>
                  <p className="mb-2">Stay near where they were last seen and alert security, a shopkeeper, or official staff immediately.</p>
                  <p className="mb-2">Most large public places (airports, museums, parks) have protocols for lost children and can lock down exits or call a &quot;Code Adam&quot; (in North America).</p>
                  <p>Show them a current photo of your child (preferably the one you took that morning—another great habit).</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold mb-2">Call Out Landmarks to Help Your Child Return</p>
                  <p className="mb-2">If safe, use a public address system or ask staff to broadcast a message.</p>
                  <p>If you&apos;re in a mall, amusement park, or zoo, shout things like: &quot;This is Mom! I&apos;m by the red lion statue at the entrance—stay where you are and I&apos;ll come get you!&quot;</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold mb-2">Notify Local Authorities or Police If Not Found Quickly</p>
                  <p className="mb-2">If your child isn&apos;t found within 5–10 minutes, or you have a suspicion of foul play, contact local police or security immediately.</p>
                  <p className="mb-2">Provide:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Child&apos;s name, age, height, clothing, and distinguishing features and photo</li>
                    <li>Where and when you last saw them</li>
                    <li>Any GPS tracker or emergency contact bracelet details</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">International Trip Tips:</p>
                  <p className="mb-2">If abroad and your child becomes separated:</p>
                  <p className="mb-2">Notify your embassy or consulate after contacting local police—especially if a longer separation occurs.</p>
                  <p>Be prepared to show documentation proving parenthood or guardianship if needed.</p>
                  <p className="mt-4">Accidental separation can happen to even the most attentive parents, especially in new, stimulating environments. Preparation gives your child the confidence to respond calmly and gives you the tools to act effectively. Stay calm, stay local, alert staff, and trust your safety plan.</p>
                </div>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Preparing for Medical Emergencies">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Essential Medical Prep:</p>
                <p className="mb-2">Carry a detailed list of medical conditions, medications, and allergies (EpiPens when needed) in both English and the local language.</p>
                <div className="mb-2">
                  <p className="font-bold mb-2">Pack a child-specific medical kit including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Fever/pain reducers (acetaminophen, ibuprofen)</li>
                    <li>Antihistamines (Benadryl or generic)</li>
                    <li>Electrolyte packets</li>
                    <li>Bandages, thermometer, antiseptic wipes</li>
                    <li>Meds for nausea, motion sickness, or constipation</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-bold mb-2">Documentation to Carry:</p>
                <p className="mb-2">Copies of:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Child&apos;s vaccination records</li>
                  <li>Health insurance and travel insurance card</li>
                  <li>Parental custody documents or letters of permission (if traveling with one parent or non-parent)</li>
                  <li>Translated version of prescriptions, especially for controlled medications</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Know Before You Go:</p>
                <p className="mb-2">Find the nearest pediatric hospital or clinic at your destination.</p>
                <p className="mb-2">Learn the local emergency number (e.g., 112 in Europe, 911 in the U.S./Canada, 999 in the UK).</p>
                <p>Purchase travel insurance with child-specific coverage, including emergency evacuation if doing adventure travel.</p>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Security Tips in Transit (Airports, Trains, Transfers)">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Board early when allowed to get settled with children calmly.</li>
              <li>Teach older kids how to find help—point out uniforms of staff, security, etc.</li>
              <li>Use child ID cards or bracelets in case of emergencies.</li>
              <li>In airports or stations, agree on a &quot;rendezvous point&quot; in case of separation.</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="General Travel Safety for Children">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Environmental Awareness:</p>
                <p className="mb-2">Protect against sunburn, dehydration, and heat exhaustion—especially in tropical or desert locations.</p>
                <p className="mb-2">Use child-safe insect repellent and mosquito netting in high-risk areas (e.g., malaria zones).</p>
                <p>Watch for food and water safety—stick to bottled water and cooked foods for younger kids.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Road Safety:</p>
                <p className="mb-2">Bring your own travel car seat when possible, or verify safety standards in advance for rentals.</p>
                <p>Buckle kids in taxis—even if locals don&apos;t. Use portable harness systems if necessary.</p>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="What to Do If a Child Goes Missing">
            <div className="space-y-3">
              <p className="font-bold">Immediate Actions:</p>
              <p>Call local police/emergency services immediately.</p>
              <p>Notify your embassy or consulate if abroad.</p>
              <p>Show authorities the most recent photo of the child (why a daily photo is helpful).</p>
              <p>Share any GPS tracking info from a device or tag.</p>
              <p className="mt-4 font-bold">Extra Tip:</p>
              <p>Some countries (like the U.S.) allow you to register your child&apos;s photo and biometric info with embassy programs for faster response in emergencies.</p>
              <p className="mt-4">You don&apos;t need to be fearful to be careful. With the right preparation and boundaries in place, children can thrive in travel experiences, and you&apos;ll feel confident letting them explore the world by your side. Safety empowers freedom—especially for families.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        {/* Back to Catalog */}
        <div className="mt-12 text-center">
          <Link
            href="/tips-ideas"
            className="inline-block bg-gradient-to-r from-brand-navy to-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            ← Back to Tips & Advice
          </Link>
        </div>
      </div>
    </div>
  );
}

