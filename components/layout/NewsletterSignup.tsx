'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for a welcome message.');
        setEmail('');

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(result.error || result.message || 'Failed to subscribe. Please try again.');

        // Reset error message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again.');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
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

        {status === 'success' && message && (
          <p className="mt-4 text-green-400 font-medium">{message}</p>
        )}
        
        {status === 'error' && message && (
          <p className="mt-4 text-red-400 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
