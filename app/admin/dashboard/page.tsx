'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import { FaEnvelope, FaBlog, FaUsers, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

interface DashboardStats {
  subscribers: number;
  posts: number;
  views: number;
  users: number;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      name: 'Newsletter Subscribers',
      value: loading ? '...' : (stats?.subscribers || 0).toString(),
      icon: FaEnvelope,
      href: '/admin/newsletter',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Blog Posts',
      value: loading ? '...' : (stats?.posts || 0).toString(),
      icon: FaBlog,
      href: '/admin/blog',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Active Users',
      value: loading ? '...' : (stats?.users || 0).toString(),
      icon: FaUsers,
      href: '#',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      name: 'Total Views',
      value: loading ? '...' : (stats?.views || 0).toLocaleString(),
      icon: FaChartLine,
      href: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const quickActions = [
    {
      name: 'Send Newsletter',
      description: 'Compose and send email to all subscribers',
      href: '/admin/newsletter',
      color: 'bg-brand-blue',
    },
    {
      name: 'Create Blog Post',
      description: 'Write a new blog post or article',
      href: '/admin/blog',
      color: 'bg-brand-purple',
    },
    {
      name: 'View Subscribers',
      description: 'Manage newsletter subscriber list',
      href: '/admin/newsletter',
      color: 'bg-brand-teal',
    },
  ];

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {session?.user?.name}! 👋
            </h1>
            <p className="text-white/90">
              Here&apos;s what&apos;s happening with your Bucket List Doctor site.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={stat.name}
                  href={stat.href}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-brand-blue transition-all hover:shadow-md"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{action.name}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="text-center text-gray-500 py-8">
              <p>No recent activity yet.</p>
              <p className="text-sm mt-2">Activity will appear here as you use the CMS.</p>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-3">System Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Your Role:</span>
                <span className="ml-2 font-medium text-gray-900 capitalize">{session?.user?.role}</span>
              </div>
              <div>
                <span className="text-gray-600">Username:</span>
                <span className="ml-2 font-medium text-gray-900">{session?.user?.username}</span>
              </div>
              <div>
                <span className="text-gray-600">Email:</span>
                <span className="ml-2 font-medium text-gray-900">{session?.user?.email}</span>
              </div>
              <div>
                <span className="text-gray-600">CMS Version:</span>
                <span className="ml-2 font-medium text-gray-900">1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
