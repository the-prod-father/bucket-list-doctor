import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Medical Travel Tips | Bucket List Doctor',
  description: 'Medical preparation, medications, and health considerations for bucket list travel. Stay healthy and prepared on your adventures.',
  openGraph: {
    title: 'Medical Travel Tips',
    description: 'Medical preparation, medications, and health considerations for bucket list travel.',
  },
};

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Medical Concern" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/medical.png"
              alt="Medical Concern"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            General Medical Advice for Bucket List Travel
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Your health is the foundation for everything on your bucket list journey, especially when traveling. By planning ahead, bringing the right medications, and knowing your medical needs, you can enjoy your trip with peace of mind. Don&apos;t wait until you&apos;re in a foreign country to realize something important is missing—prep now for the safest, most stress-free travel experience possible.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="Meet with Your Doctor(s) Before You Travel">
          <p className="mb-6">
            Before you book the zipline, the hike, or even the plane ticket—schedule a visit with your primary care physician (and any specialists you see regularly). Here&apos;s what to cover:
          </p>
          
          <TipsSubsection title="Get Medical Clearance for Travel or Activities">
            <p className="mb-4">Ask if you&apos;re medically cleared for long flights, high altitudes, scuba diving, strenuous excursions, or travel to remote areas.</p>
            <p className="mb-4">Discuss how chronic conditions (like heart disease, diabetes, asthma, or autoimmune disorders) may be affected by your destination&apos;s climate, altitude, or stressors.</p>
            <p>If needed, ask for documentation that supports your fitness to travel—some tour operators, insurance plans, or visa applications may require it.</p>
          </TipsSubsection>

          <TipsSubsection title="Ask for Travel-Specific Medical Advice">
            <p className="mb-4">What risks exist at your destination? Your doctor can advise on infectious diseases, food/water safety, or environmental hazards based on your itinerary.</p>
            <p>Are there activities you should avoid or modify? If you&apos;re planning to climb, dive, ride animals, or trek, your doctor may recommend limits or alternatives.</p>
          </TipsSubsection>

          <TipsSubsection title="Get the Right Vaccinations and Preventive Medications">
            <p className="mb-4">Schedule this at least 4–6 weeks before departure so you have time to complete any series of shots or allow immunity to build.</p>
            <p className="mb-4">Ask about:</p>
            <p className="mb-2">Routine updates (tetanus, MMR, flu, shingles, etc.)</p>
            <p className="mb-2">Destination-specific vaccines (yellow fever, typhoid, hepatitis A/B, Japanese encephalitis)</p>
            <p className="mb-2">Preventive prescriptions, like:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Malaria medication for tropical regions</li>
              <li>Traveler&apos;s diarrhea meds (Ciprofloxacin or azithromycin)</li>
              <li>Altitude sickness pills (Acetazolamide) if you&apos;re going above 8,000 ft</li>
              <li>Antivirals if there&apos;s known regional risk (like dengue or flu)</li>
            </ul>
            <p>Make sure your vaccination records are accessible and up-to-date, especially if your destination requires proof (like yellow fever zones or post-COVID protocols).</p>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Over-the-Counter (OTC) Medications & Supplements to Bring">
          <p className="mb-4">Always check with your healthcare provider if you&apos;re unsure about the use of over-the-counter medications or supplements.</p>
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Pain Relief & Fever Medication:</strong> Always pack basic pain relief (ibuprofen, aspirin, or acetaminophen) for headaches, sore muscles, or fever.</p>
            <p><strong className="text-brand-teal">Allergy Medication:</strong> Carry antihistamines (like Benadryl, Claritin, or Zyrtec) to manage seasonal allergies or allergic reactions to foods, insect stings, or environmental factors.</p>
            <p><strong className="text-brand-teal">Cold & Flu Relief:</strong> A cold remedy, cough syrup, nasal spray, or throat lozenges can help if you start feeling unwell.</p>
            <p><strong className="text-brand-teal">Stomach Medications:</strong> Pack antacids, anti-nausea medication (like Pepto-Bismol), and anti-diarrheal meds like Imodium.</p>
            <p><strong className="text-brand-teal">Topical Creams & Ointments:</strong> Bring a basic antiseptic (like Neosporin), hydrocortisone cream, and sunscreen.</p>
            <p><strong className="text-brand-teal">Motion Sickness Medication:</strong> For those prone to nausea on planes, buses, or boats, Dramamine or Bonine can be lifesavers.</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Supplements to Consider:</h3>
            <div className="space-y-2">
              <p><strong className="text-brand-teal">Probiotics:</strong> To support digestion, especially when trying new foods.</p>
              <p><strong className="text-brand-teal">Vitamins:</strong> Bring vitamin C, multivitamins, and any other necessary supplements to maintain your immunity and energy while traveling.</p>
              <p><strong className="text-brand-teal">Electrolytes:</strong> Pack electrolyte tablets or hydration powders (like Pedialyte or Nuun) to stay hydrated, particularly in warmer climates.</p>
            </div>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Medical Documentation for Prescription Medications">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Carry Original Prescriptions:</strong> Always bring your medications in their original packaging with the prescription label visible, especially for controlled substances.</p>
            <p><strong className="text-brand-teal">Doctor&apos;s Letter:</strong> For medications that are controlled (e.g., stimulants, painkillers, or injectables), carry a letter from your doctor explaining the medical need, dosage, and condition being treated.</p>
            <p><strong className="text-brand-teal">International Travel & Medication Laws:</strong> Check if any of your prescriptions are restricted in the country you&apos;re visiting. Certain medications, such as ADHD medications or some painkillers, are illegal in countries like the UAE and Japan.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Immunization Records & Health Certifications">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Travel Vaccinations:</strong> Ensure you&apos;re up-to-date on routine vaccinations (MMR, flu, etc.), and check if any travel-specific vaccines are required or recommended for your destination (e.g., Yellow Fever, Typhoid, Hepatitis A/B).</p>
            <p><strong className="text-brand-teal">Current Outbreaks:</strong> At times the world may suffer certain contagious outbreaks such as the occurrence of COVID-19. During these periods, many destinations may require proof of specific vaccinations or a negative test result for entry. Always check country-specific requirements during these periods.</p>
            <p><strong className="text-brand-teal">Yellow Fever Certificate:</strong> Some countries in Africa or South America require proof of Yellow Fever vaccination before entry. Keep the Yellow Card with you at all times.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Medical Conditions & Emergency Instructions">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">List of Medical Conditions:</strong> Create a document or app-based list that outlines any chronic conditions (e.g., diabetes, asthma, heart disease), allergies, or previous surgeries. This should also include any medications you&apos;re taking and their dosage.</p>
            <p><strong className="text-brand-teal">Emergency Contacts:</strong> Include the contact details of your primary doctor, any specialists, and emergency contacts back home. Have this information both digitally (secure storage) and printed in case of emergencies.</p>
            <p><strong className="text-brand-teal">Allergy Alerts:</strong> If you have allergies (especially food or insect allergies), wear a medical bracelet and carry a list of allergies in both your native language and the language of the country you&apos;re visiting.</p>
            <p><strong className="text-brand-teal">Know Your Destination&apos;s Medical Emergency Protocol:</strong> Familiarize yourself with emergency numbers, nearest hospitals, and any local medical customs before you travel (e.g., health insurance requirements in some countries).</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Traveling with Physical Disabilities or Limitations">
          <TipsSubsection title="General Considerations:">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Notify Airlines in Advance:</strong> When booking flights, request early boarding and any necessary assistance (e.g., wheelchair service, assistance with mobility devices). Airlines may typically require at least 48 hours&apos; notice.</p>
              <p><strong className="text-brand-teal">Accessibility at Airports:</strong> Many airports now have designated accessible services, including ramps, elevators, and priority seating at security and gate areas. Check airport websites or apps to plan your journey through the airport.</p>
              <p><strong className="text-brand-teal">Medical Equipment Needs:</strong> If traveling with medical equipment (e.g., oxygen concentrators, CPAP machines, home dialysis units), ensure your airline is notified, and ask about any special requirements for carrying or using them during the flight.</p>
              <p><strong className="text-brand-teal">Accessible Accommodation:</strong> Hotels, resorts and cruises may offer accessible rooms with features like wide doors, roll-in showers, and handrails. Confirm these features at the time of booking.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Specific Disabilities Considerations:">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Mobility Impairments:</strong> If using a wheelchair or mobility device, research wheelchair-friendly tours, buses, and taxis at your destination. Consider renting a mobility scooter for local travel.</p>
              <p><strong className="text-brand-teal">Hearing Impairments:</strong> Look into accommodations like captioning, visual or vibrating alarms, or sign language interpreters available in public spaces or through private services.</p>
              <p><strong className="text-brand-teal">Vision Impairments:</strong> Many tourist attractions offer audio tours or braille signage. Contact venues in advance to confirm availability.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Traveling with Diabetes: Special Considerations">
          <p className="mb-6">
            Whether you&apos;re managing type 1 or type 2 diabetes, it&apos;s absolutely possible to travel confidently—but it requires extra preparation. Climate, food, physical activity, and time zones can all affect your blood sugar. Here&apos;s what to do before, during, and after travel to stay safe while enjoying your trip to the fullest.
          </p>

          <TipsSubsection title="Before You Travel">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Visit Your Healthcare Provider:</strong> Get medical clearance if your trip includes strenuous activity, altitude, or remote areas. Ask for an up-to-date prescription list (insulin, oral meds, syringes, etc.), a doctor&apos;s letter explaining your condition, devices, and medical needs, advice on managing time zone shifts with insulin or medication schedules and guidance on adjusting insulin for increased activity, altitude, or temperature</p>
              <p><strong className="text-brand-teal">Arrange Travel Insurance That Covers Diabetes:</strong> Choose a plan that includes emergency evacuation, hospital care, and pre-existing conditions. Ensure it covers lost or stolen medication/devices.</p>
              <p><strong className="text-brand-teal">Notify Your Airline or Cruise Line:</strong> Request early boarding if needed, and ask about refrigeration or electrical outlets for devices. If using an insulin pump or continuous glucose monitor (CGM), alert security and bring documentation to avoid issues at checkpoints.</p>
              <p><strong className="text-brand-teal">Double Your Supplies:</strong> Bring twice as much insulin, test strips, and CGM sensors as you think you&apos;ll need.</p>
              <p><strong className="text-brand-teal">Keep All Medications in Your Carry-On:</strong> Never check insulin or meters—baggage delays can be dangerous.</p>
              <p><strong className="text-brand-teal">Get an Insulin Cooling Case or Frio Bag:</strong> Essential for warm climates or long travel days without refrigeration.</p>
              <p><strong className="text-brand-teal">Glucose Tablets or Fast-Acting Sugar:</strong> Keep these with you at all times—in pockets, daypacks, and your travel wallet.</p>
              <p><strong className="text-brand-teal">Snacks for Delays or Skipped Meals:</strong> Pack protein-rich or carb-balanced snacks like nuts, granola bars, or cheese sticks.</p>
              <p><strong className="text-brand-teal">Sharps Container or Needle Disposal Plan:</strong> Bring a small travel version or ask the hotel/cruise staff how to dispose safely.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="On the Trip">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Watch for Hidden Sugar in Local Foods:</strong> Even small differences in sauces or drinks can impact blood sugar. When in doubt, go slow and test more frequently.</p>
              <p><strong className="text-brand-teal">Adjust for Activity and Climate:</strong> More walking or heat may lower blood sugar faster—carry glucose and test often.</p>
              <p><strong className="text-brand-teal">Label Your Gear Clearly:</strong> Insulin, pens, and devices should be marked and easy for others to identify in an emergency.</p>
              <p><strong className="text-brand-teal">Store Emergency Info in Your Wallet & Phone:</strong> Include diagnosis, meds, allergies, and emergency contacts.</p>
              <p><strong className="text-brand-teal">Wear a Medical ID Bracelet:</strong> It should say &quot;Diabetes – Insulin Dependent&quot; (if applicable) and your emergency contact info.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Airports & Security Tips">
            <p className="mb-4">Inform TSA or Security Agents about your pump, pen, or CGM before screening.</p>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Request a visual inspection of supplies instead of X-ray</li>
              <li>Refuse to remove your medical device</li>
              <li>Carry sharps, insulin, and liquids above 3.4 oz, with proper labeling</li>
            </ul>
            <p className="mt-4">Living with diabetes doesn&apos;t mean compromising your dreams. It means planning intentionally so that your condition doesn&apos;t dictate your trip—you do. With the right preparation, your bucket list is still wide open.</p>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Traveling with Mental Health Conditions">
          <TipsSubsection title="Mental Health Medication & Documentation">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Keep Medications Accessible:</strong> Mental health medications, especially for anxiety, depression, or sleep disorders, should be in your carry-on luggage, along with documentation of the prescriptions and a doctor&apos;s note.</p>
              <p><strong className="text-brand-teal">Know the Mental Health Resources at Your Destination:</strong> Research mental health resources available in the area (such as clinics, support groups, or hotlines) in case of a crisis.</p>
              <p><strong className="text-brand-teal">Travel Insurance with Mental Health Coverage:</strong> Make sure your travel insurance covers mental health emergencies, including coverage for inpatient care if needed.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Coping Strategies for Anxiety, Stress, and Other Concerns">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Pre-Flight Relaxation Techniques:</strong> Use deep-breathing exercises, guided meditation, or calming music apps to manage pre-flight anxiety or fear of flying.</p>
              <p><strong className="text-brand-teal">Jet Lag Management:</strong> For those with anxiety or sleep disorders, ensure you bring sleep aids (melatonin, CBD, etc.) that are safe and legal at your destination.</p>
              <p><strong className="text-brand-teal">Routine & Familiar Comforts:</strong> Try to maintain some of your routines while traveling, like taking walks, eating familiar foods, or staying connected with loved ones, to minimize disruptions to your mental health.</p>
              <p><strong className="text-brand-teal">Notify Your Mental Health Providers of Your Travel:</strong> If you have a psychiatrist, psychotherapist or other mental health provider, notify them of your travel destination and duration. Ask for any advice and have their emergency contact numbers with you and ask about their availability in case of an emergency.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Physically Training/Preparing for Your Trip">
          <p className="mb-6">
            Condition your body for adventure—so you can enjoy every moment.
          </p>
          <p className="mb-6">
            The best memories happen when your body feels strong enough to keep up with your spirit. Training doesn&apos;t have to be intense—but it should be intentional. Start prepping at least 4–6 weeks before your trip, depending on the demands of your destination.
          </p>

          <TipsSubsection title="Start with Your Itinerary:">
            <p className="mb-4">Ask yourself:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>How much walking or standing will I do daily?</li>
              <li>Will there be stairs, hills, or high altitudes?</li>
              <li>Will I be swimming, biking, paddling, or climbing?</li>
              <li>Am I carrying luggage, a daypack, or equipment?</li>
              <li>Am I trying something physically new (diving, skiing, horseback riding)?</li>
            </ul>
            <p>Then match your prep to your plans.</p>
          </TipsSubsection>

          <TipsSubsection title="Physical Prep by Type of Trip:">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Urban/City Trips</p>
                <p className="mb-2">Think: walking tours, museums, local transit</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Take daily 30–60 min walks, ideally on uneven surfaces or stairs.</li>
                  <li>Strengthen your feet, calves, and lower back—you&apos;ll be on them all day.</li>
                  <li>Break in your travel shoes ahead of time.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Hiking, Trekking & Elevation Trips</p>
                <p className="mb-2">Think: Machu Picchu, Alps, Patagonia</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Add hill or stair climbing into your routine.</li>
                  <li>Build leg and core strength (squats, lunges, planks).</li>
                  <li>Practice walking with a loaded daypack and trekking poles.</li>
                  <li>Train with longer hikes on weekends, building up your endurance.</li>
                  <li>If elevation is a factor, consult your doctor about acclimatization or altitude meds.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Adventure & Water-Based Travel</p>
                <p className="mb-2">Think: kayaking, snorkeling, SCUBA, rafting</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Build upper body and grip strength for paddling or gear handling.</li>
                  <li>Practice swimming or treading water if it&apos;s been a while.</li>
                  <li>Add yoga or stretching for balance and joint health—especially for getting in/out of boats.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Wilderness & Remote Destinations</p>
                <p className="mb-2">Think: National parks, safaris, desert travel</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Train with uneven terrain or weighted hiking and trekking poles.</li>
                  <li>Practice early morning or midday movement—these trips often start early or go into heat.</li>
                  <li>Learn basic bodyweight recovery stretches—you may not have gym access.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">All-Inclusive or Cruise Trips</p>
                <p className="mb-2">Even low-activity trips involve walking through large ports or airports, dancing, excursions, or climbing stairs on the ship.</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Walking and light cardio will improve stamina and reduce post-travel fatigue.</li>
                  <li>Strengthen your balance and coordination to avoid falls on moving ships or unfamiliar floors.</li>
                </ul>
              </div>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Pro Tips:</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Don&apos;t overtrain right before your trip. Focus on gradual improvement, not burnout.</li>
              <li>Stretch daily—flexibility prevents soreness and improves recovery between long days.</li>
              <li>Simulate your day: Wear your pack while walking. Test your gear. Try hiking in your travel shoes.</li>
              <li>Get a Smart Watch or Fitness Monitor: As you train, monitor your heart rate, blood pressure, oxygen saturation, distance walked, stairs climbed and other fitness parameters to measure your training progress and preparedness for your trip.</li>
              <li>If traveling with limitations: Speak with a physical therapist about trip-specific prep that works for your mobility level or condition.</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Travel Considerations for Plus-Size and Obese Travelers">
          <p className="mb-6">
            A bucket list is for every body and travel is for every body—and with the right preparation, it can be more comfortable, accessible, and joyful. Larger-bodied travelers often face barriers that others don&apos;t even have to think about—from cramped airplane seats to mobility challenges, or fear of judgment in active excursions. But none of these things should keep someone from exploring the world. The key is anticipating your needs and advocating for your comfort.
          </p>

          <TipsSubsection title="Before You Fly">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Know Your Airline&apos;s Seat Policies:</strong> Some airlines require passengers who don&apos;t fit within one seat with the armrests down to purchase a second seat—others offer a refund or a free extra seat (like Southwest). Research in advance.</p>
              <p><strong className="text-brand-teal">Request a Seatbelt Extender:</strong> You can ask discreetly when boarding or bring your own FAA-approved extender. Flight attendants are used to this—don&apos;t feel embarrassed. They have them for a reason and you are not the only person who uses them.</p>
              <div>
                <p className="font-bold mb-2">Book Seats Strategically:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Aisle seats can offer more room to stretch one leg and move more freely.</li>
                  <li>Bulkhead and exit rows sometimes offer more space, but exit rows have restrictions.</li>
                  <li>If you can afford first class or business class these seats are wider and more comfortable.</li>
                </ul>
              </div>
              <p><strong className="text-brand-teal">Board Early if You Can:</strong> Pre-boarding allows time to get settled, find space for bags, and avoid narrow aisles packed with people.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="General Travel & Packing Tips">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Pack Lightweight, Comfortable Clothing:</strong> Fabrics like cotton, modal, or linen reduce chafing and heat retention. Compression shorts under dresses or loose pants prevent thigh chafing.</p>
              <div>
                <p className="font-bold mb-2">Bring Personal Comfort Tools:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Travel pillow or neck roll</li>
                  <li>Anti-chafing balm or powder</li>
                  <li>Foldable seat cushion or back support</li>
                  <li>Your own towel or wrap for certain destinations or excursions</li>
                </ul>
              </div>
              <p><strong className="text-brand-teal">Use Rolling or Sit-On Luggage:</strong> Navigating long airport corridors or train stations is easier with a supportive rolling bag or a compact scooter if needed.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Excursion & Activity Planning">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Ask About Weight Limits Before You Book:</strong> Unfortunately, many adventure activities (zip-lining, horseback riding, paragliding, snorkeling, etc.) have weight restrictions for safety or equipment. These are not always listed online—don&apos;t hesitate to call and ask.</p>
              <p><strong className="text-brand-teal">Bring What You Need to Get Around:</strong> Using walkers or hiking poles can reduce energy expenditure by over 50%. And if your more comfortable with a wheel chair or scooter, bring that too where allowed.</p>
              <p><strong className="text-brand-teal">Seek Size-Inclusive Outfitters:</strong> Choose tour companies and operators that openly advertise accommodations for larger travelers (such as wider harnesses, buoyancy vests, or larger bikes).</p>
              <p><strong className="text-brand-teal">Advocate for Your Comfort:</strong> It&apos;s okay to ask for larger seats, extra time to board, step-free access, or custom options. You are a paying customer and deserve to feel safe and respected.</p>
              <p><strong className="text-brand-teal">Choose Group Tours Wisely:</strong> Consider smaller group tours or private excursions where pace and comfort can be adjusted to your needs.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Accommodations & Accessibility">
            <div className="space-y-3">
              <p><strong className="text-brand-teal">Check for Sturdy Furniture and Room Layouts:</strong> Read reviews and photos to ensure chairs, beds, and showers feel safe and comfortable.</p>
              <p><strong className="text-brand-teal">Ask About Shower Access:</strong> Roll-in showers, grab bars, or removable shower heads can make a big difference for plus-size travelers with mobility needs.</p>
              <p><strong className="text-brand-teal">Bring a Portable Step or Shower Stool (if needed):</strong> These small travel aids can make getting in and out of high bathtubs or tight spaces safer.</p>
              <p><strong className="text-brand-teal">Scooters and Ambulatory Devices:</strong> Some hotels and most casinos offer ambulatory devices such as scooters for rent. If this can make your experience more enjoyable rent one.</p>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">❤️ Mental Health & Confidence Tips</h3>
            <div className="space-y-3">
              <p><strong className="text-brand-teal">You Have a Right to Take Up Space:</strong> Don&apos;t apologize for needing comfort or support. You&apos;re not &quot;inconveniencing&quot; anyone who is a decent human being.</p>
              <p><strong className="text-brand-teal">Plan Breaks, Not Barriers:</strong> Fatigue is real, and that&apos;s okay. Build in rest time, choose accessible paths, and pace your day for joy—not endurance. Don&apos;t hesitate to board first, or get off last.</p>
              <p><strong className="text-brand-teal">Curate Your Social Circle:</strong> Travel with people who uplift and include you. Avoid travel companions who body-shame, rush, or dismiss your comfort.</p>
            </div>
          </div>
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

