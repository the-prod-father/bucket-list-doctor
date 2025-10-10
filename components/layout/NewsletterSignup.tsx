'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with email service (Mailchimp/ConvertKit)
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
        <p className="text-gray-400 mb-6">
          Get brain science insights, bucket list inspiration, and updates on new projects.
          No spam, ever. Unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-brand-blue"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-brand-yellow text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-400">Thanks for subscribing!</p>
        )}
      </div>
    </div>
  );
}
