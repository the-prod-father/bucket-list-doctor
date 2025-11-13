import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Travel Documents Guide | Bucket List Doctor',
  description: 'Complete guide to passports, visas, IDs, and essential travel documentation. Learn what documents you need and what people often forget.',
  openGraph: {
    title: 'Travel Documents Guide',
    description: 'Complete guide to passports, visas, IDs, and essential travel documentation.',
  },
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Documents" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/passport.png"
              alt="Documents"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Important Documentation: What You Need & What People Often Forget
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Your bucket list adventure shouldn&apos;t be derailed by missing paperwork. From boarding a plane to checking into a hotel—or even renting snorkel gear—having the right documentation can make or break the experience. Here&apos;s your go-to guide for making sure you have what you need, including lesser-known documents and smart ways to keep them secure.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="Core Travel Identification Tips">
          <div className="space-y-6">
            <div>
              <p className="mb-2">
                <strong className="text-brand-teal">Check Your Passport&apos;s Expiry Date (Right Now):</strong> Many countries require that your passport be valid for at least 6 months beyond your return date. Don&apos;t assume you&apos;re okay just because it hasn&apos;t expired yet.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-brand-teal">Make Sure Your Name Matches Exactly:</strong> Your airline ticket and passport (or ID) must match letter for letter. This includes middle names or hyphenations—otherwise, you may be denied boarding.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-brand-teal">Carry a Backup Government ID:</strong> A second form of ID (driver&apos;s license, national ID card) can be helpful if your passport is lost or you need to prove identity domestically.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-brand-teal">Check Entry Rules for Every Country:</strong> Some countries allow visa-free entry, some require electronic visas (e-visas), and others require you to apply weeks in advance. Always check the official government immigration site—not just blogs or forums.
              </p>
            </div>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Lesser-Known but Sometimes Crucial Documentation">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Proof of Travel Insurance:</strong> Some countries require printed proof of travel health insurance (especially during health emergencies or pandemics).</p>
            <p><strong className="text-brand-teal">Vaccination Records or Health Certificates:</strong> Yellow fever, polio, and COVID-related documentation may still be required in certain regions.</p>
            <p><strong className="text-brand-teal">International Driving Permit (IDP):</strong> Needed in many countries even if you have a valid license. Without it, your car rental may be denied—even after you&apos;ve booked and paid.</p>
            <p><strong className="text-brand-teal">Letter of Consent for Minors:</strong> If you&apos;re traveling with children who are not your own (or one parent is absent), many border officials require a notarized letter of permission.</p>
            <p><strong className="text-brand-teal">Credit Card Authorization Letters:</strong> If you&apos;re using someone else&apos;s credit card for a hotel or rental car booking, some providers may require a written letter and ID copy from the cardholder.</p>
            <p><strong className="text-brand-teal">Proof of Funds or Exit Ticket:</strong> Countries like Thailand or Peru may ask for proof you can financially support yourself—or proof you&apos;ll leave before your visa expires (a return or onward ticket).</p>
            <p><strong className="text-brand-teal">Cruise-Specific Docs:</strong> Some cruises require special shore passes, visas for port countries (even if you&apos;re not staying overnight), or customs declarations for duty-free goods.</p>
            <p><strong className="text-brand-teal">Proof of Onward Travel:</strong> Countries like Costa Rica, Indonesia, and the Philippines may require documentation showing when—and how—you plan to leave.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Backup, Backup, Backup">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Take Photos or Scans of Everything:</strong> Before your trip, photograph or scan your passport, ID, tickets, insurance, vaccination card, and important bookings. Save them in multiple locations:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Your phone (in a secure folder)</li>
              <li>Cloud storage (Google Drive, Dropbox, iCloud)</li>
              <li>Email them to yourself</li>
            </ul>
            <p><strong className="text-brand-teal">Carry Printed Copies:</strong> In areas with poor cell service or when devices die, paper copies can save the day. Keep them in a waterproof sleeve or organizer.</p>
            <p><strong className="text-brand-teal">Use a Travel Document Organizer:</strong> A slim, RFID-blocking pouch keeps your passport, IDs, boarding passes, emergency contacts, and backup cards in one secure, easy-to-grab place.</p>
            <p><strong className="text-brand-teal">Give a Trusted Person Access:</strong> Share key documents with someone at home (especially for solo travelers) in case of emergency.</p>
            <p><strong className="text-brand-teal">Label Your Passport Photocopy &quot;COPY&quot;:</strong> This avoids confusion or trouble with authorities if you&apos;re asked to show the real thing.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="U.S. Domestic Travel: The REAL ID">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">REAL ID Is Now Required for Domestic Flights:</strong> U.S. travelers need a REAL ID-compliant driver&apos;s license or state ID to board domestic flights and enter federal facilities.</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Look for a star in the upper right corner of your ID.</li>
              <li>If you don&apos;t have one, you&apos;ll need a passport or another TSA-approved ID to fly—even within the U.S.</li>
            </ul>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Documentation for Medications (Especially Controlled Substances)">
          <div className="space-y-4">
            <p><strong className="text-brand-teal">Keep Meds in Original Packaging:</strong> Prescription labels should show your name, doctor&apos;s info, and dosage. Especially important for international travel or controlled substances like ADHD meds, painkillers, or anti-anxiety meds.</p>
            <p><strong className="text-brand-teal">Bring a Doctor&apos;s Note or Prescription Copy:</strong> Especially for narcotics, stimulants, or injectable meds (like insulin or hormone therapy). A short letter explaining the need and dosage can help at customs.</p>
            <p><strong className="text-brand-teal">Check Medication Legality at Your Destination:</strong> Some medications that are common in your country (e.g. Adderall or even Sudafed) are banned or restricted abroad. Check with the embassy or a travel medicine clinic before departure.</p>
            <p><strong className="text-brand-teal">Carry Medications in Your Carry-On:</strong> Never check important medications—luggage can be delayed or lost.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Documentation for Service & Emotional Support Animals">
          <TipsSubsection title="Service Animals:">
            <p className="mb-4">Bring documentation of training, certification, and a doctor&apos;s letter explaining the medical need.</p>
            <p>Airlines and hotels may require advance notice and specific paperwork. Always check their policies beforehand.</p>
          </TipsSubsection>
          <TipsSubsection title="Emotional Support Animals (ESAs):">
            <p className="mb-4">Many airlines have changed their ESA policies and no longer allow ESAs to fly in the cabin. If allowed, you&apos;ll need a letter from a licensed mental health professional, dated within 12 months.</p>
            <p className="mb-4">Some destinations (including Hawaii and international ports) have strict quarantine laws for all animals. Plan months ahead if needed.</p>
            <p><strong className="text-brand-teal">Vaccination & Health Certificates:</strong> Bring a recent health certificate from a vet, including proof of rabies and other required vaccinations—especially when crossing borders or going on cruises.</p>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Activity Certifications & Hobby-Specific Documentation">
          <p className="mb-6">
            If your bucket list includes high-adventure experiences like SCUBA diving, skydiving, sailing, or mountaineering, you may need to carry proof of experience, training, or certification. Many providers require this before they&apos;ll let you participate—even if you&apos;ve booked in advance.
          </p>
          <p className="mb-6">Here&apos;s what to know:</p>
          
          <TipsSubsection title="SCUBA Diving Certifications">
            <p className="mb-4">Most dive shops require a certification card (physical or digital) from an accredited organization like PADI, SSI, or NAUI.</p>
            <p className="mb-4">Some dives—especially deep, wreck, or cave dives—may require advanced or specialty certifications.</p>
            <p>Lost your card? Many agencies now offer digital cards via their apps or websites. Be sure to download it before you leave.</p>
          </TipsSubsection>

          <TipsSubsection title="Skydiving Logbooks or Proof of Training">
            <p className="mb-4">If you&apos;re licensed and planning to skydive abroad (not just tandem), you&apos;ll likely need to show:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Your USPA license (or equivalent)</li>
              <li>A current logbook</li>
              <li>Proof of recent jumps or refresher courses</li>
            </ul>
            <p>Some drop zones may require documentation to be translated or accompanied by insurance coverage.</p>
          </TipsSubsection>

          <TipsSubsection title="Sailing or Boating Licenses">
            <p className="mb-4">In certain countries (especially in Europe), operating a sailboat, catamaran, or jet ski may require an International Certificate of Competence (ICC) or national boating license.</p>
            <p>Chartering a boat? Some companies require a resume of your sailing experience plus your formal credentials.</p>
          </TipsSubsection>

          <TipsSubsection title="Mountaineering, Ice Climbing, or Technical Terrain">
            <p className="mb-4">Adventure parks, glacier hikes, or alpine guides may require proof of:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Prior course completion</li>
              <li>First-aid or avalanche safety training</li>
              <li>Experience logs or guide references</li>
            </ul>
          </TipsSubsection>

          <TipsSubsection title="Other Specialized Activities">
            <p className="mb-2"><strong className="text-brand-teal">Freediving:</strong> Often requires level-based certification and a current medical form.</p>
            <p className="mb-2"><strong className="text-brand-teal">Paragliding or Hang Gliding:</strong> Most locations require a national or international rating card.</p>
            <p className="mb-2"><strong className="text-brand-teal">Motorbiking Abroad:</strong> Some countries require a motorcycle endorsement or international motorcycle license.</p>
            <p><strong className="text-brand-teal">Firearms or Archery Ranges (in some countries):</strong> May require proof of training or club affiliation.</p>
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

