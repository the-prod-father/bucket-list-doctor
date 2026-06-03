'use client';

import { useState } from 'react';
import Image from 'next/image';

const PDF_URL = '/bucket-list-brain-starter-kit.pdf';

export default function StarterKitCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function triggerDownload(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bucket-List-Brain-Starter-Kit.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/starter-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage("Success! Your Starter Kit is on its way — if it doesn't open automatically, grab it below. 🎉");
      triggerDownload(data.downloadUrl || PDF_URL);
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-purple text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Starter Kit Cover */}
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[700/906] drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:-rotate-1">
              <Image
                src="/images/starter-kit/cover.png"
                alt="The Bucket List Brain Starter Kit cover"
                fill
                sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
                className="object-contain rounded-lg"
                priority={false}
              />
            </div>
          </div>

          {/* Copy + Form */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-brand-yellow text-brand-navy font-extrabold text-sm uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
              Free · 33 Pages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Get Your Free Bucket List Brain Starter Kit
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              A neuroscience-based guide to help you start building a more meaningful,
              intentional, and fulfilling life. Inside you&apos;ll find guided worksheets,
              self-reflection exercises, and practical tools to design your own
              personalized bucket list system.
            </p>

            {status === 'success' ? (
              <div className="bg-white/10 border border-white/30 rounded-xl p-6">
                <p className="text-lg font-semibold mb-3">{message}</p>
                <a
                  href={PDF_URL}
                  download="Bucket-List-Brain-Starter-Kit.pdf"
                  className="inline-block text-brand-yellow font-bold underline underline-offset-4 hover:text-yellow-300 transition-colors"
                >
                  Didn&apos;t download? Click here to get it.
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto md:mx-0">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'starter-kit-error' : undefined}
                  className="flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                >
                  {status === 'loading' ? 'Sending…' : 'Get the Free Kit'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <p id="starter-kit-error" className="mt-3 text-brand-yellow font-medium" role="alert">
                {message}
              </p>
            )}

            <p className="mt-4 text-sm text-white/60">
              We&apos;ll email you occasional brain-health insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
