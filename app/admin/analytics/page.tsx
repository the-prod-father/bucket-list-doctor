'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import { FaChartLine, FaUsers, FaEye, FaMousePointer, FaCalendar } from 'react-icons/fa';

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  pageViews: {
    path: string;
    views: number;
  }[];
  referrers: {
    source: string;
    visits: number;
  }[];
  recentActivity: {
    date: string;
    views: number;
  }[];
}

export default function AnalyticsPage() {
  const { data: session } = useSession();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/admin/analytics');
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      } else {
        setError('Failed to load analytics data');
      }
    } catch (err) {
      setError('Error loading analytics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading analytics...</div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800">{error}</p>
            <p className="text-sm text-red-600 mt-2">
              Analytics tracking requires Google Analytics setup. Add NEXT_PUBLIC_GA_ID to environment variables.
            </p>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">
              Track website performance and ROI from media appearances
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Page Views</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics?.totalViews.toLocaleString() || '0'}
                  </p>
                </div>
                <FaEye className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Unique Visitors</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics?.uniqueVisitors.toLocaleString() || '0'}
                  </p>
                </div>
                <FaUsers className="w-12 h-12 text-purple-500 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Top Referrer</p>
                  <p className="text-lg font-bold text-gray-900">
                    {analytics?.referrers[0]?.source || 'Direct'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {analytics?.referrers[0]?.visits || 0} visits
                  </p>
                </div>
                <FaMousePointer className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </div>
          </div>

          {/* Top Pages */}
          {analytics?.pageViews && analytics.pageViews.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Pages</h2>
              <div className="space-y-3">
                {analytics.pageViews.slice(0, 10).map((page, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{page.path}</span>
                    <span className="font-semibold text-gray-900">{page.views.toLocaleString()} views</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Top Referrers */}
          {analytics?.referrers && analytics.referrers.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Traffic Sources</h2>
              <p className="text-sm text-gray-600 mb-4">
                Track where your visitors come from - useful for measuring ROI from radio/TV appearances
              </p>
              <div className="space-y-3">
                {analytics.referrers.slice(0, 10).map((referrer, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{referrer.source || 'Direct'}</span>
                    <span className="font-semibold text-gray-900">{referrer.visits.toLocaleString()} visits</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Setup Instructions */}
          {(!analytics || analytics.totalViews === 0) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Analytics Setup Required</h3>
              <p className="text-yellow-800 mb-4">
                To track ROI from media appearances, set up Google Analytics:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                <li>Create a Google Analytics 4 property</li>
                <li>Get your Measurement ID (G-XXXXXXXXXX)</li>
                <li>Add NEXT_PUBLIC_GA_ID to Vercel environment variables</li>
                <li>Redeploy the site</li>
              </ol>
              <p className="text-sm text-yellow-700 mt-4">
                Once set up, you'll be able to see traffic spikes around show dates and track which media appearances drive the most traffic.
              </p>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}

