'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import { FaEnvelope, FaBlog, FaUsers, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

interface Subscriber {
  email: string;
  created_at: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  view_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

interface DashboardStats {
  subscribers: number;
  posts: number;
  views: number;
  users: number;
  subscribersList: Subscriber[];
  postsList: BlogPost[];
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
      const response = await fetch('/api/admin/stats', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else {
        console.error('Failed to fetch stats:', response.status, response.statusText);
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

          {/* Newsletter Subscribers List */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Newsletter Subscribers</h2>
              <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                {stats?.subscribers || 0} Total
              </span>
            </div>
            {loading ? (
              <div className="text-center text-gray-500 py-8">Loading subscribers...</div>
            ) : stats?.subscribersList && stats.subscribersList.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subscribed Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stats.subscribersList.map((subscriber, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {subscriber.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(subscriber.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No subscribers yet.</p>
                <p className="text-sm mt-2">Subscribers will appear here once people sign up.</p>
              </div>
            )}
          </div>

          {/* Blog Posts List */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Your Blog Posts</h2>
              <Link
                href="/admin/blog"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Create New Post
              </Link>
            </div>
            {loading ? (
              <div className="text-center text-gray-500 py-8">Loading posts...</div>
            ) : stats?.postsList && stats.postsList.length > 0 ? (
              <div className="space-y-3">
                {stats.postsList.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              post.status === 'published'
                                ? 'bg-green-100 text-green-800'
                                : post.status === 'draft'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <FaChartLine className="w-4 h-4" />
                            {post.view_count.toLocaleString()} views
                          </span>
                          <span>
                            {post.published_at
                              ? `Published ${new Date(post.published_at).toLocaleDateString()}`
                              : `Created ${new Date(post.created_at).toLocaleDateString()}`}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {post.status === 'published' && (
                          <Link
                            href={`/newsletter/${post.slug}`}
                            target="_blank"
                            className="text-brand-blue hover:text-brand-blue/80 text-sm font-medium px-3 py-1.5 border border-brand-blue rounded-lg transition-colors"
                          >
                            View
                          </Link>
                        )}
                        <Link
                          href={`/admin/blog?edit=${post.id}`}
                          className="bg-brand-purple hover:bg-brand-purple/90 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No posts yet.</p>
                <p className="text-sm mt-2">Create your first blog post to get started!</p>
              </div>
            )}
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
