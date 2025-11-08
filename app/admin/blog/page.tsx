'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ImageUpload from '@/components/admin/ImageUpload';
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

function BlogPageContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
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

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchParams.get('new') === '1' && activeView === 'list') {
      handleNewPost();
    }
  }, [searchParams, activeView]);

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

              {/* Featured Image Upload */}
              <ImageUpload
                value={featuredImage}
                onChange={setFeaturedImage}
                label="Featured Image (Optional)"
                description="Upload an image to display at the top of your post and as a social sharing thumbnail"
              />

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

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading admin tools…</p>
          </div>
        </div>
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
