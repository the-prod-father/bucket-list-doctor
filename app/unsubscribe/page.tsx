'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!email) {
      setStatus('error');
      setMessage('No email address provided');
      return;
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch('/api/unsubscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage('You have been successfully unsubscribed from our newsletter.');
        } else {
          setStatus('error');
          setMessage(data.error || 'Failed to unsubscribe. Please try again.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred. Please try again later.');
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {status === 'loading' && (
          <>
            <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Processing...</h1>
            <p className="text-gray-600">Unsubscribing your email address</p>
          </>
        )}

        {status === 'success' && (
          <>
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Unsubscribed</h1>
            <p className="text-gray-600 mb-2">{message}</p>
            <p className="text-sm text-gray-500 mb-6">
              Email: <span className="font-medium">{email}</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              We&apos;re sorry to see you go! You won&apos;t receive any more newsletters from us.
            </p>
            <Link
              href="/"
              className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Return to Homepage
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <FaTimesCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <Link
              href="/"
              className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Return to Homepage
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
