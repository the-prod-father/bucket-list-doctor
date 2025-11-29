'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ImageUpload from '@/components/admin/ImageUpload';
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';

interface MediaAppearance {
  id: string;
  name: string;
  logo_url: string;
  type: 'radio' | 'tv' | 'print' | 'online' | 'podcast';
  gradient: string;
  display_order: number;
  is_active: boolean;
}

export default function MediaPage() {
  const { data: session } = useSession();
  const [media, setMedia] = useState<MediaAppearance[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingMedia, setEditingMedia] = useState<Partial<MediaAppearance>>({});
  const [showNewForm, setShowNewForm] = useState(false);
  const [newMedia, setNewMedia] = useState<Partial<MediaAppearance>>({
    name: '',
    logo_url: '',
    type: 'radio',
    gradient: 'from-gray-500 to-gray-600',
    display_order: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/admin/media');
      const data = await response.json();
      setMedia(data.media || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: MediaAppearance) => {
    setEditingId(item.id);
    setEditingMedia({ ...item });
  };

  const handleSave = async () => {
    if (!editingId) return;

    try {
      const response = await fetch(`/api/admin/media/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingMedia),
      });

      if (response.ok) {
        await fetchMedia();
        setEditingId(null);
        setEditingMedia({});
      } else {
        alert('Failed to update media appearance');
      }
    } catch (error) {
      console.error('Error updating media:', error);
      alert('Failed to update media appearance');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this media appearance?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchMedia();
      } else {
        alert('Failed to delete media appearance');
      }
    } catch (error) {
      console.error('Error deleting media:', error);
      alert('Failed to delete media appearance');
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMedia),
      });

      if (response.ok) {
        await fetchMedia();
        setShowNewForm(false);
        setNewMedia({
          name: '',
          logo_url: '',
          type: 'radio',
          gradient: 'from-gray-500 to-gray-600',
          display_order: 0,
          is_active: true,
        });
      } else {
        alert('Failed to create media appearance');
      }
    } catch (error) {
      console.error('Error creating media:', error);
      alert('Failed to create media appearance');
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !currentStatus }),
      });

      if (response.ok) {
        await fetchMedia();
      }
    } catch (error) {
      console.error('Error toggling media status:', error);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading...</div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Media Appearances</h1>
              <p className="text-gray-600">
                Manage station call letters and media outlet appearances
              </p>
            </div>
            <button
              onClick={() => setShowNewForm(!showNewForm)}
              className="flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <FaPlus />
              <span>Add Media</span>
            </button>
          </div>

          {/* New Media Form */}
          {showNewForm && (
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Media Appearance</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={newMedia.name || ''}
                    onChange={(e) => setNewMedia({ ...newMedia, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Newsday, WJR Radio"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={newMedia.type || 'radio'}
                    onChange={(e) => setNewMedia({ ...newMedia, type: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="radio">Radio</option>
                    <option value="tv">TV</option>
                    <option value="print">Print</option>
                    <option value="online">Online</option>
                    <option value="podcast">Podcast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                  <input
                    type="text"
                    value={newMedia.logo_url || ''}
                    onChange={(e) => setNewMedia({ ...newMedia, logo_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="/images/speaker/logo.png"
                  />
                  <ImageUpload
                    value={newMedia.logo_url || ''}
                    onChange={(url) => setNewMedia({ ...newMedia, logo_url: url })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gradient</label>
                  <input
                    type="text"
                    value={newMedia.gradient || ''}
                    onChange={(e) => setNewMedia({ ...newMedia, gradient: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="from-blue-500 to-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                  <input
                    type="number"
                    value={newMedia.display_order || 0}
                    onChange={(e) => setNewMedia({ ...newMedia, display_order: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCreate}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  <FaSave />
                  <span>Create</span>
                </button>
                <button
                  onClick={() => setShowNewForm(false)}
                  className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          )}

          {/* Media List */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Logo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {media.map((item) => (
                  <tr key={item.id} className={!item.is_active ? 'opacity-50' : ''}>
                    {editingId === item.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editingMedia.name || ''}
                            onChange={(e) => setEditingMedia({ ...editingMedia, name: e.target.value })}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={editingMedia.type || 'radio'}
                            onChange={(e) => setEditingMedia({ ...editingMedia, type: e.target.value as any })}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                          >
                            <option value="radio">Radio</option>
                            <option value="tv">TV</option>
                            <option value="print">Print</option>
                            <option value="online">Online</option>
                            <option value="podcast">Podcast</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editingMedia.logo_url || ''}
                            onChange={(e) => setEditingMedia({ ...editingMedia, logo_url: e.target.value })}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            value={editingMedia.display_order || 0}
                            onChange={(e) => setEditingMedia({ ...editingMedia, display_order: parseInt(e.target.value) })}
                            className="w-full px-2 py-1 border border-gray-300 rounded w-20"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleActive(item.id, item.is_active)}
                            className={`px-3 py-1 rounded text-sm font-medium ${
                              item.is_active
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.is_active ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={handleSave}
                              className="text-green-600 hover:text-green-800"
                            >
                              <FaSave />
                            </button>
                            <button
                              onClick={() => {
                                setEditingId(null);
                                setEditingMedia({});
                              }}
                              className="text-gray-600 hover:text-gray-800"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600 capitalize">{item.type}</td>
                        <td className="px-6 py-4">
                          <div className="w-16 h-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                            {item.logo_url ? (
                              <Image src={item.logo_url} alt={item.name} width={64} height={40} className="object-contain" unoptimized />
                            ) : (
                              <span className="text-xs text-gray-400">No logo</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.display_order}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleActive(item.id, item.is_active)}
                            className={`px-3 py-1 rounded text-sm font-medium ${
                              item.is_active
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.is_active ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {media.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No media appearances yet. Click &quot;Add Media&quot; to create one.
              </div>
            )}
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}

