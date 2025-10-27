'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import { FaBlog, FaPlus, FaEdit, FaTrash, FaEye, FaSave, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  published_at: string | null;
  view_count: number;
  featured_image_url: string | null;
  meta_description: string | null;
}

export default function BlogPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const editPostId = searchParams.get('edit');

  const [activeView, setActiveView] = useState<'list' | 'edit'>('list');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [counts, setCounts] = useState({ total: 0, published: 0, draft: 0, archived: 0 });
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>('draft');
  const [saving, setSaving] = useState(false);

  // Image upload state
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  // Auto-load post for editing if URL parameter is present
  useEffect(() => {
    if (editPostId && posts.length > 0) {
      const postToEdit = posts.find(p => p.id === editPostId);
      if (postToEdit) {
        handleEditPost(postToEdit);
      }
    }
  }, [editPostId, posts]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog');
      const data = await response.json();
      setPosts(data.posts);
      setCounts(data.counts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setTitle('');
    setExcerpt('');
    setContent('');
    setFeaturedImage('');
    setMetaDescription('');
    setStatus('draft');
    setActiveView('edit');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt || '');
    setContent(post.content);
    setFeaturedImage(post.featured_image_url || '');
    setMetaDescription(post.meta_description || '');
    setStatus(post.status);
    setActiveView('edit');
  };

  const handleSavePost = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Title and content are required');
      return;
    }

    setSaving(true);
    try {
      const postData = {
        title,
        excerpt: excerpt || null,
        content,
        featured_image_url: featuredImage || null,
        meta_description: metaDescription || null,
        status,
      };

      let response;
      if (editingPost) {
        // Update existing post
        response = await fetch(`/api/admin/blog/${editingPost.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        });
      } else {
        // Create new post
        response = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        });
      }

      if (response.ok) {
        alert(editingPost ? 'Post updated!' : 'Post created!');
        setActiveView('list');
        fetchPosts();
      } else {
        const error = await response.json();
        alert(`Failed to save post: ${error.error}`);
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Post deleted!');
        fetchPosts();
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image must be less than 5MB');
      return;
    }

    setUploading(true);
    setUploadError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFeaturedImage(data.url);
      } else {
        setUploadError(data.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h1>
                <p className="text-gray-600">Create and manage blog posts</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center bg-brand-purple text-white rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold">{counts.published}</div>
                  <div className="text-sm">Published</div>
                </div>
                <div className="text-center bg-brand-yellow text-gray-900 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold">{counts.draft}</div>
                  <div className="text-sm">Drafts</div>
                </div>
              </div>
            </div>
          </div>

          {/* List View */}
          {activeView === 'list' && (
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">All Posts</h2>
                <button
                  onClick={handleNewPost}
                  className="flex items-center space-x-2 bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaPlus />
                  <span>New Post</span>
                </button>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading posts...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <FaBlog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No blog posts yet</p>
                  <p className="text-gray-500 text-sm mt-2">Create your first post to get started</p>
                  <button
                    onClick={handleNewPost}
                    className="mt-4 inline-flex items-center space-x-2 bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaPlus />
                    <span>Create First Post</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{post.title}</h3>
                          {post.excerpt && (
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                post.status === 'published'
                                  ? 'bg-green-100 text-green-800'
                                  : post.status === 'draft'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {post.status}
                            </span>
                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            <span>{post.view_count} views</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEditPost(post)}
                            className="p-2 text-brand-blue hover:bg-blue-50 rounded transition-colors"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Edit View */}
          {activeView === 'edit' && (
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingPost ? 'Edit Post' : 'New Post'}
                </h2>
                <button
                  onClick={() => setActiveView('list')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Enter post title..."
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt (Optional)
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Short description for preview..."
                />
              </div>

              {/* Content */}
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
                  />
                </div>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image
                </label>

                {/* Image Preview */}
                {featuredImage && (
                  <div className="mb-4 relative">
                    <img
                      src={featuredImage}
                      alt="Featured"
                      className="max-w-md h-48 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setFeaturedImage('')}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      title="Remove image"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}

                {/* Upload Button */}
                <div className="flex gap-4 mb-3">
                  <label className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                    <div className="cursor-pointer bg-brand-blue hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors text-center font-medium">
                      {uploading ? (
                        <span className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Uploading...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                          </svg>
                          Upload Image
                        </span>
                      )}
                    </div>
                  </label>
                </div>

                {/* Upload Error */}
                {uploadError && (
                  <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {uploadError}
                  </div>
                )}

                {/* URL Input (alternative) */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm mb-3">
                    <span className="px-2 bg-white text-gray-500">Or enter image URL</span>
                  </div>
                </div>
                <input
                  type="text"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description (SEO)
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Description for search engines..."
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'draft' | 'published' | 'archived')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <button
                  onClick={handleSavePost}
                  disabled={saving || !title.trim() || !content.trim()}
                  className="flex items-center space-x-2 bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  <FaSave />
                  <span>{saving ? 'Saving...' : editingPost ? 'Update Post' : 'Create Post'}</span>
                </button>
                <button
                  onClick={() => setActiveView('list')}
                  className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
