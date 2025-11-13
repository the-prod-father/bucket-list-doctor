import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/tips-ideas/Breadcrumb';
import TipsContentSection from '@/components/tips-ideas/TipsContentSection';
import { TipsSubsection } from '@/components/tips-ideas/TipsContentSection';

export const metadata: Metadata = {
  title: 'Currencies & Payment Methods | Bucket List Doctor',
  description: 'Smart money moves for bucket list travel. Currency exchange, payment methods, and financial travel tips.',
  openGraph: {
    title: 'Currencies & Payment Methods',
    description: 'Smart money moves for bucket list travel.',
  },
};

export default function CurrenciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Breadcrumb categoryName="Currencies & Trade Practices" />

        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
            <Image
              src="/images/tips/money.png"
              alt="Currencies & Trade Practices"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Currencies & Payment Methods: Tips & Advice for Bucket List Travel
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            Smart money moves make for smoother, safer adventures.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            When you&apos;re checking off bucket list experiences, the last thing you want to worry about is how to pay for them—or worse, being stuck without the means to pay at all. From currency exchange hacks to obscure money-saving tricks, here&apos;s how to stay financially prepared wherever your journey takes you.
          </p>
        </div>

        {/* Content Sections */}
        <TipsContentSection title="General Currency Exchange Advice">
          <TipsSubsection title="Where to Get the Best Rates:">
            <div className="space-y-3">
              <p>Use ATMs in the destination country for the most favorable exchange rates. Local bank ATMs usually offer better rates than currency exchange counters or airport kiosks.</p>
              <p>Avoid airport exchange desks unless absolutely necessary—they often charge the highest fees and offer poor rates.</p>
              <p>Withdraw larger amounts (within safety limits) to minimize ATM fees per transaction.</p>
              <p>Use currency converter apps like XE or Wise to check the real exchange rate and know if you&apos;re getting a fair deal.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Alert Your Bank Before You Travel:">
            <div className="space-y-3">
              <p>Let them know the countries and dates of your travel to avoid frozen cards due to suspicious activity.</p>
              <p>Enable international transaction use on your cards through your bank&apos;s app or website.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Choosing the Right Cards for Travel">
          <TipsSubsection title="Credit Cards:">
            <div className="space-y-3">
              <p>Bring at least two major cards (Visa or Mastercard)—one as a backup. Many people prefer American Express but this card is not as widely accepted.</p>
              <p>Use a card with no foreign transaction fees to avoid hidden charges (e.g., Chase Sapphire, Capital One Venture, Amex Platinum).</p>
              <p>Keep one card in a separate location (like your suitcase or hotel safe) in case your wallet is lost or stolen.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Debit Cards:">
            <div className="space-y-3">
              <p>Use a bank that reimburses ATM fees (e.g., Charles Schwab, Fidelity).</p>
              <p>Some banks partner with global ATM networks for fee-free withdrawals abroad.</p>
            </div>
          </TipsSubsection>

          <TipsSubsection title="Apple Pay & Digital Wallets">
            <div className="space-y-3">
              <p>Using your cell phone wallet offers enhanced security as your actual credit or debit card number is never shared with merchants.</p>
              <p>Every transaction uses a unique, encrypted code—making it extremely difficult to hack or skim.</p>
              <p>Your device usually requires biometric verification (Face ID, fingerprint) before completing a payment.</p>
              <p>Worldwide acceptance in most regions.</p>
            </div>
          </TipsSubsection>
        </TipsContentSection>

        <TipsContentSection title="Payment Preferences Vary by Country">
          <div className="space-y-3">
            <p>In countries like Sweden, Norway, and South Korea, cards and mobile payments (Apple Pay, Google Pay) are widely accepted—even for small purchases.</p>
            <p>In countries like Japan, Germany, and many parts of Africa or South America, cash is still king, especially in rural areas or with small businesses.</p>
            <p>In Southeast Asia, cards are less accepted in street markets or local shops—carry small-denomination cash.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Often-Forgotten (But Brilliant) Currency & Payment Tips">
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">Diversify How You Carry Money:</p>
              <p className="mb-2">Carry a mix of methods: one credit card, one debit card, and a few hundred USD or Euros in cash (many places accept USD in emergencies).</p>
              <p className="mb-2">Use money belts or hidden pouches in high-risk areas to deter pickpockets.</p>
              <p>Consider a dummy wallet with expired cards and a small amount of cash as a decoy.</p>
            </div>
            <p><strong className="text-brand-teal">Use Local Currency When Paying:</strong> When asked, always choose to pay in the local currency (not your home currency)—dynamic currency conversion often adds 5–10% to your bill.</p>
            <p><strong className="text-brand-teal">Keep All Currency Exchange Receipts:</strong> If you don&apos;t spend all your foreign currency, you may need a receipt to exchange it back—especially in airports or government-regulated countries.</p>
            <div>
              <p className="font-bold mb-2">Use Up Small Change Before Departure (or Not):</p>
              <p className="mb-2">Airport shops, vending machines, or tipping are great ways to spend leftover coins—they can&apos;t be exchanged at banks.</p>
              <p>Consider saving coins and bills from foreign destinations as a bucket list item. Foreign currencies can be beautiful and reflect cultural history. Get a currency album to hold your collection.</p>
            </div>
            <p><strong className="text-brand-teal">Budget Daily Spending in Local Currency:</strong> If you mentally calculate everything in your home currency, you might miss how quickly small costs add up. Round up to the nearest 5 or 10 in local currency to keep it simple.</p>
            <p><strong className="text-brand-teal">Convert Your Home Currency at Your Bank (if needed):</strong> If you must bring foreign cash with you, order currency from your local bank 1–2 weeks before your trip—rates are often better than airport or hotel exchanges.</p>
          </div>
        </TipsContentSection>

        <TipsContentSection title="Travel Money Apps & Tools">
          <div className="space-y-3">
            <p><strong className="text-brand-teal">Wise (formerly TransferWise):</strong> Great for sending money between countries or holding multiple currencies in one account.</p>
            <p><strong className="text-brand-teal">Revolut / N26 / Monzo:</strong> App-based banks with low international fees, real exchange rates, and instant spending alerts.</p>
            <p><strong className="text-brand-teal">Splitwise:</strong> Perfect for group travel to track shared expenses.</p>
            <p><strong className="text-brand-teal">XE / Currency+ / OANDA:</strong> Live exchange rate tools for real-time price comparisons.</p>
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

