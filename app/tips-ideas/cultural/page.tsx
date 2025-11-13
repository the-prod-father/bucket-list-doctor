import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Cultural Considerations for Travel | Bucket List Doctor',
  description: 'Tips for respectful, conscious, and connected travel. Learn about etiquette, greetings, dining customs, and respectful travel practices.',
  openGraph: {
    title: 'Cultural Considerations for Travel',
    description: 'Tips for respectful, conscious, and connected travel.',
  },
};

export default function CulturalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Cultural Considerations" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/culture.png"
              alt="Cultural Considerations"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Cultural Considerations: Tips for Respectful, Conscious, and Connected Travel
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            When you step into a new place, you step into someone else&apos;s world.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Traveling for bucket list experiences isn&apos;t just about seeing new places—it&apos;s about stepping into diverse cultural landscapes with openness and humility. The most meaningful journeys come from deep respect and genuine curiosity, and the best travelers know how to blend in, observe carefully, and avoid behaviors that may offend or isolate. Here&apos;s your guide to becoming a culturally aware, adaptive traveler, with detailed advice on traditions, behaviors, language, dress, and social norms across different countries and belief systems.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="First Principle: Be a Student of the Culture">
          <div className="space-y-3">
            <p>Research the basics of local customs, values, and taboos before you arrive.</p>
            <p>Ask: How do people greet one another? What are the norms around modesty, time, space, hierarchy, or hospitality?</p>
            <p>When in doubt: Observe first, act second.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="General Cultural Etiquette Tips for Travelers">
          <p className="mb-6">Because respect is the ultimate travel skill.</p>
          <p className="mb-6">No matter where you&apos;re headed, showing cultural respect opens doors, earns smiles, and can turn a simple interaction into a meaningful moment. Below are essential tips every traveler should keep in mind—simple actions with powerful impact, especially when visiting countries with traditions, religions, or customs different from your own.</p>

          <TipsSubsection title="Learn a Few Words in the Local Language">
            <div className="space-y-3">
              <p className="mb-2">Master basics like:</p>
              <p>&quot;Hello,&quot; &quot;Goodbye,&quot; &quot;Please,&quot; &quot;Thank you,&quot; &quot;Excuse me,&quot; &quot;I&apos;m sorry,&quot; &quot;Where is the washroom?,&quot; and &quot;Do you speak English (or other language)?&quot;</p>
              <p>Even a poorly pronounced &quot;thank you&quot; shows effort and respect—and locals often respond warmly.</p>
              <p>Use translation apps like Google Translate or iTranslate, and download offline versions.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Understand Local Customs for Greetings & Goodbyes">
            <div className="space-y-3">
              <p className="mb-2">In many cultures, greetings are formal and meaningful:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Bows in Japan or Thailand</li>
                <li>Cheek kisses in France or Latin America</li>
                <li>Handshakes with both hands or a hand over the heart in parts of Africa and the Middle East</li>
              </ul>
              <p>Some cultures do not touch at all during greetings, especially between men and women (e.g., many Muslim-majority regions).</p>
              <p>When in doubt: let the local person initiate the greeting.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Be Mindful of Rules Around Physical Touch">
            <div className="space-y-2">
              <p>Avoid hugging or touching people you don&apos;t know well, especially elders, children, monks, or members of the opposite gender.</p>
              <p>Don&apos;t touch someone&apos;s head in Buddhist or Hindu cultures—it&apos;s considered sacred.</p>
              <p>In some cultures, a pat on the back or hand on the shoulder can be invasive rather than friendly.</p>
              <p>In Arab cultures, handshakes may be gender-sensitive—wait to see if a hand is offered.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Watch Your Eye Contact and Gestures">
            <div className="space-y-2">
              <p>In Western cultures, eye contact is a sign of confidence and honesty.</p>
              <p>In parts of Asia, the Middle East, and Africa, direct eye contact—especially with elders or authority figures—can be seen as rude or aggressive.</p>
              <p>If someone avoids eye contact, don&apos;t assume they&apos;re being evasive—they may be showing respect.</p>
              <p>Pointing with your finger, touching someone&apos;s head, or showing the soles of your feet may be offensive (Southeast Asia, Middle East).</p>
              <p>Use open gestures and smile often—it bridges language gaps.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Observe Conversation Style and Tone">
            <div className="space-y-2">
              <p>Some cultures value directness (e.g., U.S., Germany, Israel).</p>
              <p>Others prioritize indirect or high-context communication (e.g., Japan, China, many Southeast Asian countries).</p>
              <p>Avoid sarcasm, dark humor, or jokes about religion, politics, or gender roles unless you know they&apos;re culturally appropriate.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Understand Tipping Expectations">
            <div className="space-y-3">
              <p>Tipping customs vary wildly:</p>
              <p><strong className="text-brand-teal">USA & Canada:</strong> 15–20% is expected in restaurants and service industries.</p>
              <p><strong className="text-brand-teal">Japan & South Korea:</strong> Tipping may be considered rude or rejected.</p>
              <p><strong className="text-brand-teal">Europe:</strong> Often a small round-up or 5–10% is appropriate, depending on the country.</p>
              <p><strong className="text-brand-teal">Middle East & North Africa:</strong> Tipping is often expected in cafés, taxis, and hotels.</p>
              <p>A VAT (Value Added Tax) is a government tax applied to goods and services in many countries (especially in Europe) and is not a tip. It&apos;s automatically included in the price of most things you buy—like meals, hotel stays, clothes, or souvenirs. It&apos;s not optional and doesn&apos;t go to your waiter, hotel staff, or driver—it goes to the government.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Respect Local Bargaining Norms">
            <div className="space-y-2">
              <p>In many markets (India, Morocco, Egypt, Vietnam and parts of Southeast Asia), bargaining is expected and encouraged.</p>
              <p>In other places (Japan, Scandinavia), haggling is not appropriate and can be seen as disrespectful.</p>
              <p>Tip: Be friendly, not aggressive. Smile, joke, and treat it as a cultural exchange—not a fight.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Dress Appropriately for the Setting">
            <div className="space-y-2">
              <p>Research norms for public dress, religious sites, and rural areas:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cover shoulders, cleavage, and knees in most conservative or religious regions.</li>
                <li>Bring a scarf or wrap to enter temples, mosques, or churches.</li>
                <li>Avoid flashy or revealing clothing if uncertain—modesty is a safe default.</li>
              </ul>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Observe Behavior in Sacred or Formal Spaces">
            <div className="space-y-2">
              <p>Remove shoes when entering homes, temples, or mosques (unless told otherwise).</p>
              <p>Don&apos;t point your feet at people or religious symbols in many Asian cultures.</p>
              <p>Keep your voice low, phones off, and don&apos;t touch artifacts or altars.</p>
              <p>Always ask before taking photos—especially of people in worship or traditional dress.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Be Conscious of Photography Etiquette">
            <div className="space-y-2">
              <p>Never take close-up photos of locals—especially children, religious leaders, or women—without permission.</p>
              <p>In some countries, photographing military, police, or government buildings is illegal.</p>
              <p>Be especially cautious at cemeteries, memorials, and sacred sites as photographs may have significant cultural and mystical representations unfamiliar to tourist.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="In Houses of Worship">
          <TipsSubsection title="Islam (Mosques, Middle East, parts of Africa and Asia):">
            <div className="space-y-2">
              <p>Remove shoes before entering prayer spaces.</p>
              <p>Dress conservatively: arms, legs, and sometimes hair (for women) must be covered.</p>
              <p>Never interrupt prayer or point feet toward the qibla (direction of prayer).</p>
              <p>Avoid public displays of affection near sacred sites.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Christianity (Churches in Europe, Latin America, USA):">
            <div className="space-y-2">
              <p>In cathedrals or older churches, quiet voices, modest attire, and respectful behavior are expected—even if it&apos;s a tourist site.</p>
              <p>Don&apos;t take flash photos during services or in front of altars.</p>
              <p>Sit or stand when others do during mass or services—observe before participating.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Judaism (Synagogues, Israel, U.S., parts of Europe):">
            <div className="space-y-2">
              <p>Men may be asked to wear a kippah or head covering.</p>
              <p>No electronics on the Sabbath in Orthodox spaces.</p>
              <p>Don&apos;t photograph religious Jews without permission—especially during ceremonies or prayer.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Hindu Temples (India, Bali, Nepal):">
            <div className="space-y-2">
              <p>Remove shoes and never touch idols or inner sanctums.</p>
              <p>Women may be discouraged from entering during menstruation (strict temples).</p>
              <p>Some areas are off-limits to non-Hindus—respect boundaries and posted signs.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Buddhist Temples (Thailand, Sri Lanka, Japan, etc.):">
            <div className="space-y-2">
              <p>Remove shoes, hats, and sunglasses before entering.</p>
              <p>Never point your feet at a Buddha statue or sit with your legs splayed toward it.</p>
              <p>Do not touch monks or sit higher than them (especially for women).</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Dining Etiquette">
          <TipsSubsection title="Japan:">
            <div className="space-y-2">
              <p>Slurping noodles is acceptable (even appreciated).</p>
              <p>Don&apos;t tip—it may be considered rude.</p>
              <p>Place chopsticks on the holder, not upright in rice (which resembles funeral rituals).</p>
              <p>Say &quot;Itadakimasu&quot; before eating, &quot;Gochisousama&quot; after.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="France:">
            <div className="space-y-2">
              <p>Keep both hands visible on the table (not in your lap).</p>
              <p>Bread goes on the table, not the plate.</p>
              <p>Don&apos;t ask to split the check in small traditional restaurants.</p>
              <p>Complimenting the food is appreciated—so is slow dining.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Morocco (and many Islamic cultures):">
            <div className="space-y-2">
              <p>Eat with your right hand only.</p>
              <p>Wash your hands before and after meals.</p>
              <p>Meals may be communal—wait to be invited to begin.</p>
              <p>Accept tea when offered—it&apos;s a symbol of hospitality.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Dress & Appearance Norms">
          <TipsSubsection title="General Advice:">
            <div className="space-y-2">
              <p>Modesty is key in conservative societies—cover shoulders, cleavage, and knees when in doubt.</p>
              <p>In rural or religious areas, bright colors, sheer fabrics, and tight clothes may be frowned upon—even if locals wear them fashionably in cities.</p>
              <p>Swimwear is for the beach—cover up when leaving the water.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="India:">
            <div className="space-y-2">
              <p>Women often wear scarves or shawls in temples or rural areas.</p>
              <p>Avoid wearing all white (associated with mourning) or black (inauspicious).</p>
              <p>Men: shorts may be seen as too casual in sacred spaces.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Thailand:">
            <div className="space-y-2">
              <p>Always dress respectfully when visiting the king&apos;s image or government offices.</p>
              <p>Cover shoulders and knees in temples.</p>
              <p>Appearance reflects respect—clean, pressed clothes matter.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Saudi Arabia & Gulf States:">
            <div className="space-y-2">
              <p>Women: Abayas are not always mandatory for foreigners, but modest dress is expected.</p>
              <p>Men: avoid shorts in public, especially near government buildings or mosques.</p>
              <p>Avoid perfume with alcohol in strict religious areas.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Cultural Sensitivities Inside Homes">
          <TipsSubsection title="Universal Tips:">
            <div className="space-y-2">
              <p>Always remove shoes unless explicitly told not to.</p>
              <p>Bring a small gift (snacks, fruit, flowers, or something from your home country).</p>
              <p>Compliment the host&apos;s hospitality—but avoid gushing or appearing insincere.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="South Korea:">
            <div className="space-y-2">
              <p>It&apos;s respectful to wait to be seated, especially at meals.</p>
              <p>Accept items and pour drinks with both hands.</p>
              <p>Don&apos;t pour your own drink—someone else should.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Mexico:">
            <div className="space-y-2">
              <p>Family culture is warm—refusing food or drink repeatedly may be seen as rude.</p>
              <p>Compliments on the home or food are always welcomed.</p>
              <p>Gifts don&apos;t need to be expensive—thoughtfulness is valued.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Italy:">
            <div className="space-y-2">
              <p>You may be offered coffee or dessert—accept with gratitude.</p>
              <p>Be polite but not too reserved—Italians value warmth and friendliness.</p>
              <p>Be cautious about being overly punctual—10–15 minutes late is normal for casual visits.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Cultural &quot;No-Go&quot; Zones to Avoid:">
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Don&apos;t criticize religion or politics, even casually—especially in authoritarian countries or devout cultures.</li>
            <li>Don&apos;t compare countries to your own in negative ways (&quot;In the U.S., we do it better...&quot;)</li>
            <li>Don&apos;t make jokes about sacred symbols or gods—even if you think it&apos;s harmless.</li>
            <li>Avoid public displays of affection, especially in conservative countries or religious areas where it may even get you arrested.</li>
          </ul>
        </TipsContentSection>

        <TipsContentSection title="Wearing Cultural or Traditional Clothing as a Visitor:">
          <p className="mb-6">Respectful appreciation—or cultural misstep?</p>
          <p className="mb-6">When you travel, you may be invited or tempted to wear local garments—whether it&apos;s a Moroccan kaftan, a Nigerian gele, a Middle Eastern abaya, or traditional desert robes. Here&apos;s how to know if it&apos;s appropriate—and how to do it respectfully.</p>

          <TipsSubsection title="When It's Generally Appropriate">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">If You&apos;re Invited or Hosted</p>
                <p className="mb-2">If locals offer or help you wear traditional clothing, it&apos;s a gesture of hospitality.</p>
                <p>Example: Being dressed in a boubou in West Africa or a dishdasha in Oman during a celebration or home visit is a sign of respect and inclusion.</p>
              </div>
              <div>
                <p className="font-bold mb-2">In Specific Cultural Contexts or Ceremonies</p>
                <p className="mb-2">Wearing modest local clothing at a temple, mosque, or religious site is often required—and seen as respectful, not appropriative.</p>
                <p>Example: Wearing an abaya or hijab in a Saudi mosque (often provided) or a sarong in a Balinese temple is expected.</p>
              </div>
              <div>
                <p className="font-bold mb-2">As a Practical Necessity</p>
                <p className="mb-2">In desert regions, wearing a keffiyeh or headscarf can help with sun and sand—and locals often help you tie it properly.</p>
                <p>If you&apos;re hiking, riding camels, or trekking, locals often recommend traditional garments for protection and comfort.</p>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="When It May Be Inappropriate">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">As a Costume or Photo Prop</p>
                <p className="mb-2">Wearing traditional clothing just for photos or as a novelty without understanding the meaning can be offensive.</p>
                <p>Example: Buying Maasai necklaces or Berber robes just to &quot;look exotic&quot; for Instagram, especially when paired with performative poses or hashtags, can come off as cultural exploitation.</p>
              </div>
              <div>
                <p className="font-bold mb-2">When Sacred or Ceremonial</p>
                <p className="mb-2">Certain items are spiritually significant, reserved for rites of passage, weddings, or religious leadership.</p>
                <p>Example: Wearing a chief&apos;s robe, religious amulet, or prayer shawl when not part of the faith or community can be deeply disrespectful.</p>
              </div>
              <div>
                <p className="font-bold mb-2">If It&apos;s Styled Out of Context or Disrespectfully</p>
                <p className="mb-2">Mixing sacred items with revealing clothing, mocking gestures, or inappropriate accessories can be very offensive.</p>
                <p>Avoid wearing traditional garments as fashion statements in bars, clubs, or casual settings outside the cultural context.</p>
              </div>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Cultural Insight & Considerations">
            <div className="space-y-2">
              <p>Ask permission or guidance when in doubt—locals are usually happy to share their traditions if you&apos;re respectful and curious.</p>
              <p>Buy garments from local artisans or markets and ask how they&apos;re worn, when, and why.</p>
              <p>Research the symbolism behind colors, styles, and accessories—some indicate social status, marital status, or religious role.</p>
            </div>
          </TipsSubsection>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">How to Be Respectful When Wearing Cultural Garb</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Don&apos;t rush to post photos—understand the meaning first.</li>
              <li>Avoid stereotypes and mockery—never imitate accents, dances, or gestures in jest.</li>
              <li>Appreciation = education + intention. Know the &quot;why&quot; behind what you&apos;re wearing.</li>
            </ul>
            <p className="mt-4">Being culturally aware doesn&apos;t mean walking on eggshells—it means walking with care, curiosity, and humility. The world opens up when you show up respectfully. And every small effort you make—covering your shoulders, learning &quot;hello,&quot; removing your shoes—becomes a passport to more meaningful, human connection.</p>
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

