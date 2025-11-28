'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import { FaEnvelope, FaDownload, FaTrash, FaPaperPlane, FaEye } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Import ReactQuill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface Subscriber {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
  source: string;
}

export default function NewsletterPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<'subscribers' | 'compose'>('subscribers');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [counts, setCounts] = useState({ total: 0, active: 0 });
  const [loading, setLoading] = useState(true);

  // Newsletter compose state
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/admin/subscribers');
      const data = await response.json();
      setSubscribers(data.subscribers);
      setCounts(data.counts);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Subscribed', 'Source', 'Created At'],
      ...subscribers.map(s => [
        s.email,
        s.subscribed ? 'Yes' : 'No',
        s.source,
        new Date(s.created_at).toLocaleDateString(),
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleSendNewsletter = async () => {
    if (!subject.trim() || !content.trim()) {
      alert('Please enter both subject and content');
      return;
    }

    if (!confirm(`Send newsletter to ${counts.active} subscribers?`)) {
      return;
    }

    setSending(true);
    try {
      const response = await fetch('/api/admin/send-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, content }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Newsletter sent successfully to ${data.sent} subscribers!`);
        setSubject('');
        setContent('');
        setActiveTab('subscribers');
      } else {
        alert(`Failed to send newsletter: ${data.error}`);
      }
    } catch (error) {
      console.error('Error sending newsletter:', error);
      alert('Failed to send newsletter');
    } finally {
      setSending(false);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Newsletter Management</h1>
                <p className="text-gray-600 text-sm sm:text-base">Manage subscribers and send newsletters</p>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="text-center bg-brand-blue text-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 flex-1 sm:flex-none">
                  <div className="text-xl sm:text-2xl font-bold">{counts.active}</div>
                  <div className="text-xs sm:text-sm">Active</div>
                </div>
                <div className="text-center bg-gray-500 text-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 flex-1 sm:flex-none">
                  <div className="text-xl sm:text-2xl font-bold">{counts.total}</div>
                  <div className="text-xs sm:text-sm">Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="flex flex-col sm:flex-row sm:space-x-1 p-2 gap-2 sm:gap-0">
                <button
                  onClick={() => setActiveTab('subscribers')}
                  className={`flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'subscribers'
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Subscribers ({counts.total})</span>
                </button>
                <button
                  onClick={() => setActiveTab('compose')}
                  className={`flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'compose'
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Compose Newsletter</span>
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'subscribers' && (
                <div className="space-y-4">
                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">All Subscribers</h2>
                    <button
                      onClick={exportToCSV}
                      className="flex items-center space-x-2 bg-brand-teal text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      <FaDownload />
                      <span>Export CSV</span>
                    </button>
                  </div>

                  {/* Subscribers Table */}
                  {loading ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading subscribers...</p>
                    </div>
                  ) : subscribers.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <FaEnvelope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 text-lg">No subscribers yet</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Subscribers will appear here when people sign up for your newsletter
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Source
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Subscribed
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {subscribers.map((subscriber) => (
                            <tr key={subscriber.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                  {subscriber.email}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {subscriber.subscribed ? (
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                  </span>
                                ) : (
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                    Unsubscribed
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {subscriber.source}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(subscriber.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'compose' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Compose Newsletter</h2>

                  {/* Subject Line */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject Line *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Enter newsletter subject..."
                    />
                  </div>

                  {/* Content Editor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content *
                    </label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        style={{ height: '400px', marginBottom: '42px' }}
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link', 'image'],
                            ['clean'],
                          ],
                        }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 pt-4">
                    <button
                      onClick={handleSendNewsletter}
                      disabled={sending || !subject.trim() || !content.trim()}
                      className="flex items-center space-x-2 bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      <FaPaperPlane />
                      <span>{sending ? 'Sending...' : `Send to ${counts.active} Subscribers`}</span>
                    </button>
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                    >
                      <FaEye />
                      <span>{showPreview ? 'Hide' : 'Preview'}</span>
                    </button>
                  </div>

                  {/* Preview */}
                  {showPreview && (
                    <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                      <h3 className="text-lg font-bold mb-4">Email Preview</h3>
                      <div className="bg-white rounded p-6 shadow">
                        <h4 className="text-xl font-bold mb-4">{subject || '(No subject)'}</h4>
                        <div
                          className="prose max-w-none"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
