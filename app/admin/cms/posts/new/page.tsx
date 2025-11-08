'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminNewPostRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/blog?new=1');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-6 text-center space-y-3">
        <div className="text-lg font-semibold text-gray-900">Redirecting to new post editor</div>
        <p className="text-sm text-gray-600">
          Hang tight—opening the blog post editor so you can publish a fresh article.
        </p>
      </div>
    </div>
  );
}
