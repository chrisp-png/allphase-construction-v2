import { useState, useEffect } from 'react';
import { supabase, type Project } from '../lib/supabase';
import { Trash2, Edit, Save, X, Upload, LogOut, Plus, BookOpen, Image } from 'lucide-react';
import NoIndexMeta from '../components/NoIndexMeta';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  published_date: string;
  categories: string[];
  tags: string[];
  meta_title: string;
  meta_description: string;
  faqs?: { question: string; answer: string }[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('blog');
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    caption: '',
    alt_text: '',
    city: '',
    county: '',
    roof_type: '',
    project_type: 'Residential',
    description: '',
    featured: false,
    completed_date: '',
    image: null as File | null,
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    caption: '',
    alt_text: '',
    city: '',
    county: '',
    roof_type: '',
    project_type: 'Residential',
    description: '',
    featured: false,
    completed_date: new Date().toISOString().split('T')[0],
    image: null as File | null,
  });
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    author: 'All Phase Construction USA',
    published_date: new Date().toISOString().split('T')[0],
    categories: '',
    tags: '',
    meta_title: '',
    meta_description: '',
    published: true,
    faqs: [] as { question: string; answer: string }[],
  });

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
      loadBlogPosts();
    }
  }, [isAuthenticated]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setIsAuthenticated(!!user);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      setIsAuthenticated(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoginError(error.message);
      } else {
        setLoginError('Failed to login');
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      if (data) setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const loadBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      if (data) setBlogPosts(data);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setEditForm({
      title: project.title || '',
      caption: project.caption,
      alt_text: project.alt_text,
      city: project.city || '',
      county: project.county || '',
      roof_type: project.roof_type || '',
      project_type: project.project_type || 'Residential',
      description: project.description || '',
      featured: project.featured || false,
      completed_date: project.completed_date || '',
      image: null,
    });
  };

  const handleSaveEdit = async (id: string) => {
    try {
      let imageUrl = undefined;

      if (editForm.image) {
        const fileExt = editForm.image.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = fileName;

        const { error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(filePath, editForm.image);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

      const slug = editForm.title
        ? editForm.title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        : undefined;

      const updateData: Record<string, unknown> = {
        title: editForm.title || null,
        slug: slug || null,
        caption: editForm.caption,
        alt_text: editForm.alt_text,
        city: editForm.city || null,
        county: editForm.county || null,
        roof_type: editForm.roof_type || null,
        project_type: editForm.project_type || null,
        description: editForm.description || null,
        featured: editForm.featured,
        completed_date: editForm.completed_date || null,
        updated_at: new Date().toISOString(),
      };

      if (imageUrl) {
        updateData.image_url = imageUrl;
      }

      const { error } = await supabase
        .from('projects')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;
      setEditingId(null);
      loadProjects();
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project');
    }
  };

  const handleUploadImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.image || !newProject.title) {
      alert('Please fill in at least title and image');
      return;
    }

    setUploadingImage(true);

    try {
      const fileExt = newProject.image.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, newProject.image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      const maxOrder = projects.length > 0
        ? Math.max(...projects.map(p => p.display_order))
        : 0;

      const slug = newProject.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const { error: insertError } = await supabase
        .from('projects')
        .insert({
          image_url: publicUrl,
          title: newProject.title,
          slug: slug,
          caption: newProject.caption || newProject.title,
          alt_text: newProject.alt_text || newProject.title,
          city: newProject.city || null,
          county: newProject.county || null,
          roof_type: newProject.roof_type || null,
          project_type: newProject.project_type || 'Residential',
          description: newProject.description || null,
          featured: newProject.featured,
          completed_date: newProject.completed_date || null,
          display_order: maxOrder + 1,
          is_published: true,
        });

      if (insertError) throw insertError;

      setNewProject({
        title: '',
        caption: '',
        alt_text: '',
        city: '',
        county: '',
        roof_type: '',
        project_type: 'Residential',
        description: '',
        featured: false,
        completed_date: new Date().toISOString().split('T')[0],
        image: null,
      });
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      loadProjects();
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('Failed to upload project');
    } finally {
      setUploadingImage(false);
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      loadProjects();
    } catch (error) {
      console.error('Error updating project status:', error);
      alert('Failed to update project status');
    }
  };

  const handleBlogFormChange = (field: string, value: string | boolean) => {
    setBlogForm({ ...blogForm, [field]: value });
    if (field === 'title' && !editingBlogId) {
      const slug = value.toString().toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setBlogForm(prev => ({ ...prev, slug }));
    }
  };

  const addFaq = () => {
    setBlogForm({
      ...blogForm,
      faqs: [...blogForm.faqs, { question: '', answer: '' }],
    });
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updatedFaqs = [...blogForm.faqs];
    updatedFaqs[index][field] = value;
    setBlogForm({ ...blogForm, faqs: updatedFaqs });
  };

  const removeFaq = (index: number) => {
    const updatedFaqs = blogForm.faqs.filter((_, i) => i !== index);
    setBlogForm({ ...blogForm, faqs: updatedFaqs });
  };

  const resetBlogForm = () => {
    setBlogForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      author: 'All Phase Construction USA',
      published_date: new Date().toISOString().split('T')[0],
      categories: '',
      tags: '',
      meta_title: '',
      meta_description: '',
      published: true,
      faqs: [],
    });
    setEditingBlogId(null);
    setShowBlogForm(false);
  };

  const handleSaveBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const postData = {
        title: blogForm.title,
        slug: blogForm.slug,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        featured_image: blogForm.featured_image,
        author: blogForm.author,
        published_date: blogForm.published_date,
        categories: blogForm.categories.split(',').map(c => c.trim()).filter(c => c),
        tags: blogForm.tags.split(',').map(t => t.trim()).filter(t => t),
        meta_title: blogForm.meta_title,
        meta_description: blogForm.meta_description,
        published: blogForm.published,
        faqs: blogForm.faqs.length > 0 ? blogForm.faqs : null,
      };

      if (editingBlogId) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', editingBlogId);

        if (error) throw error;
        alert('Blog post updated successfully!');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert(postData);

        if (error) throw error;
        alert('Blog post created successfully!');
      }

      resetBlogForm();
      loadBlogPosts();
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Failed to save blog post');
    }
  };

  const handleEditBlogPost = (post: BlogPost) => {
    setBlogForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      author: post.author,
      published_date: post.published_date.split('T')[0],
      categories: post.categories.join(', '),
      tags: post.tags.join(', '),
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      published: post.published,
      faqs: post.faqs || [],
    });
    setEditingBlogId(post.id);
    setShowBlogForm(true);
  };

  const handleDeleteBlogPost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      loadBlogPosts();
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('Failed to delete blog post');
    }
  };

  const toggleBlogPublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      loadBlogPosts();
    } catch (error) {
      console.error('Error updating blog post status:', error);
      alert('Failed to update blog post status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-36 pb-16 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black pt-36 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Admin Login
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <NoIndexMeta />
      <div className="min-h-screen bg-black pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'blog'
                ? 'bg-red-600 text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'projects'
                ? 'bg-red-600 text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            <Image className="w-5 h-5" />
            Project Gallery
          </button>
        </div>

        {activeTab === 'blog' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  {editingBlogId ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                {!showBlogForm && (
                  <button
                    onClick={() => setShowBlogForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    New Post
                  </button>
                )}
              </div>

              {showBlogForm && (
                <form onSubmit={handleSaveBlogPost} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={blogForm.title}
                        onChange={(e) => handleBlogFormChange('title', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Slug (URL)
                      </label>
                      <input
                        type="text"
                        value={blogForm.slug}
                        onChange={(e) => handleBlogFormChange('slug', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Excerpt
                    </label>
                    <textarea
                      value={blogForm.excerpt}
                      onChange={(e) => handleBlogFormChange('excerpt', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Content (HTML)
                    </label>
                    <textarea
                      value={blogForm.content}
                      onChange={(e) => handleBlogFormChange('content', e.target.value)}
                      rows={12}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Featured Image URL
                      </label>
                      <input
                        type="text"
                        value={blogForm.featured_image}
                        onChange={(e) => handleBlogFormChange('featured_image', e.target.value)}
                        placeholder="/image.jpg"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        value={blogForm.author}
                        onChange={(e) => handleBlogFormChange('author', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Published Date
                      </label>
                      <input
                        type="date"
                        value={blogForm.published_date}
                        onChange={(e) => handleBlogFormChange('published_date', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Categories (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={blogForm.categories}
                        onChange={(e) => handleBlogFormChange('categories', e.target.value)}
                        placeholder="Roofing Tips, Hurricane Protection"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={blogForm.tags}
                      onChange={(e) => handleBlogFormChange('tags', e.target.value)}
                      placeholder="hurricane-resistant, roof-safety, south-florida"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Meta Title (SEO)
                    </label>
                    <input
                      type="text"
                      value={blogForm.meta_title}
                      onChange={(e) => handleBlogFormChange('meta_title', e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Meta Description (SEO)
                    </label>
                    <textarea
                      value={blogForm.meta_description}
                      onChange={(e) => handleBlogFormChange('meta_description', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>

                  <div className="border-t border-zinc-700 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <label className="block text-sm font-medium text-gray-300">
                        FAQs (for FAQPage Schema)
                      </label>
                      <button
                        type="button"
                        onClick={addFaq}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        Add FAQ
                      </button>
                    </div>

                    {blogForm.faqs.length === 0 ? (
                      <p className="text-gray-500 text-sm italic">No FAQs added yet. Add FAQs to enable FAQPage structured data for better SEO.</p>
                    ) : (
                      <div className="space-y-4">
                        {blogForm.faqs.map((faq, index) => (
                          <div key={index} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-sm font-medium text-gray-400">FAQ #{index + 1}</span>
                              <button
                                type="button"
                                onClick={() => removeFaq(index)}
                                className="text-red-500 hover:text-red-400 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                  Question
                                </label>
                                <input
                                  type="text"
                                  value={faq.question}
                                  onChange={(e) => updateFaq(index, 'question', e.target.value)}
                                  placeholder="How often should I replace my roof?"
                                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                  Answer
                                </label>
                                <textarea
                                  value={faq.answer}
                                  onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                                  placeholder="In South Florida, asphalt shingles last 15-20 years..."
                                  rows={3}
                                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={blogForm.published}
                      onChange={(e) => handleBlogFormChange('published', e.target.checked)}
                      className="w-4 h-4 rounded bg-zinc-800 border-zinc-700"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-gray-300">
                      Publish immediately
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      {editingBlogId ? 'Update Post' : 'Create Post'}
                    </button>
                    <button
                      type="button"
                      onClick={resetBlogForm}
                      className="flex items-center gap-2 px-6 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">All Blog Posts</h2>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">{post.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                          <span>Slug: {post.slug}</span>
                          <span>•</span>
                          <span>{new Date(post.published_date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span className={post.published ? 'text-green-400' : 'text-yellow-400'}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditBlogPost(post)}
                          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleBlogPublished(post.id, post.published)}
                          className={`px-3 py-2 rounded-lg text-white text-sm transition-colors ${
                            post.published
                              ? 'bg-yellow-600 hover:bg-yellow-700'
                              : 'bg-green-600 hover:bg-green-700'
                          }`}
                          title={post.published ? 'Unpublish' : 'Publish'}
                        >
                          {post.published ? 'Hide' : 'Show'}
                        </button>
                        <button
                          onClick={() => handleDeleteBlogPost(post.id)}
                          className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'projects' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Add New Project
              </h2>
          <form onSubmit={handleUploadImage} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="e.g., Tile Roof Replacement"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="image-upload" className="block text-sm font-medium text-gray-300 mb-2">
                  Image *
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.files?.[0] || null })}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={newProject.city}
                  onChange={(e) => setNewProject({ ...newProject, city: e.target.value })}
                  placeholder="e.g., Boca Raton"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label htmlFor="county" className="block text-sm font-medium text-gray-300 mb-2">
                  County
                </label>
                <select
                  id="county"
                  value={newProject.county}
                  onChange={(e) => setNewProject({ ...newProject, county: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select County</option>
                  <option value="Broward">Broward</option>
                  <option value="Palm Beach">Palm Beach</option>
                  <option value="Miami-Dade">Miami-Dade</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="roof-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Roof Type
                </label>
                <select
                  id="roof-type"
                  value={newProject.roof_type}
                  onChange={(e) => setNewProject({ ...newProject, roof_type: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select Type</option>
                  <option value="Barrel Tile">Barrel Tile</option>
                  <option value="Flat Tile">Flat Tile</option>
                  <option value="Shingle">Shingle</option>
                  <option value="Metal">Metal</option>
                  <option value="Flat/TPO">Flat/TPO</option>
                  <option value="Modified Bitumen">Modified Bitumen</option>
                </select>
              </div>

              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="project-type"
                  value={newProject.project_type}
                  onChange={(e) => setNewProject({ ...newProject, project_type: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Brief description of the project (1-2 sentences)"
                rows={3}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="caption" className="block text-sm font-medium text-gray-300 mb-2">
                  Caption
                </label>
                <input
                  id="caption"
                  type="text"
                  value={newProject.caption}
                  onChange={(e) => setNewProject({ ...newProject, caption: e.target.value })}
                  placeholder="Optional - defaults to title"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label htmlFor="alt-text" className="block text-sm font-medium text-gray-300 mb-2">
                  Alt Text
                </label>
                <input
                  id="alt-text"
                  type="text"
                  value={newProject.alt_text}
                  onChange={(e) => setNewProject({ ...newProject, alt_text: e.target.value })}
                  placeholder="Optional - defaults to title"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="completed-date" className="block text-sm font-medium text-gray-300 mb-2">
                  Completed Date
                </label>
                <input
                  id="completed-date"
                  type="date"
                  value={newProject.completed_date}
                  onChange={(e) => setNewProject({ ...newProject, completed_date: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="flex items-end">
                <div className="flex items-center gap-2 pb-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={newProject.featured}
                    onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                    className="w-4 h-4 rounded bg-zinc-800 border-zinc-700"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-300">
                    Feature on homepage
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={uploadingImage}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Upload className="w-4 h-4" />
              {uploadingImage ? 'Uploading...' : 'Upload Project'}
            </button>
          </form>
        </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Existing Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 flex items-center gap-4"
              >
                <img
                  src={project.image_url}
                  alt={project.alt_text}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  {editingId === project.id ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                          placeholder="Title"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.files?.[0] || null })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={editForm.city}
                          onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                          placeholder="City"
                        />
                        <select
                          value={editForm.county}
                          onChange={(e) => setEditForm({ ...editForm, county: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                        >
                          <option value="">Select County</option>
                          <option value="Broward">Broward</option>
                          <option value="Palm Beach">Palm Beach</option>
                          <option value="Miami-Dade">Miami-Dade</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select
                          value={editForm.roof_type}
                          onChange={(e) => setEditForm({ ...editForm, roof_type: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                        >
                          <option value="">Select Roof Type</option>
                          <option value="Barrel Tile">Barrel Tile</option>
                          <option value="Flat Tile">Flat Tile</option>
                          <option value="Shingle">Shingle</option>
                          <option value="Metal">Metal</option>
                          <option value="Flat/TPO">Flat/TPO</option>
                          <option value="Modified Bitumen">Modified Bitumen</option>
                        </select>
                        <select
                          value={editForm.project_type}
                          onChange={(e) => setEditForm({ ...editForm, project_type: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                        >
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                      </div>
                      <textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                        placeholder="Description"
                        rows={2}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={editForm.caption}
                          onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                          placeholder="Caption"
                        />
                        <input
                          type="text"
                          value={editForm.alt_text}
                          onChange={(e) => setEditForm({ ...editForm, alt_text: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                          placeholder="Alt Text"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="date"
                          value={editForm.completed_date}
                          onChange={(e) => setEditForm({ ...editForm, completed_date: e.target.value })}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded text-white"
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={`featured-${project.id}`}
                            checked={editForm.featured}
                            onChange={(e) => setEditForm({ ...editForm, featured: e.target.checked })}
                            className="w-4 h-4 rounded bg-zinc-800 border-zinc-700"
                          />
                          <label htmlFor={`featured-${project.id}`} className="text-sm text-gray-300">
                            Featured
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-white font-semibold">{project.title || project.caption}</h3>
                      <p className="text-gray-400 text-sm">{project.city && project.county ? `${project.city}, ${project.county}` : project.city || project.county || 'No location'}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.roof_type && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{project.roof_type}</span>
                        )}
                        {project.project_type && (
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">{project.project_type}</span>
                        )}
                        {project.featured && (
                          <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Featured</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs mt-2">
                        Order: {project.display_order} | Status: {project.is_published ? 'Published' : 'Draft'}
                      </p>
                    </>
                  )}
                </div>
                <div className="flex gap-2">
                  {editingId === project.id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(project.id)}
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        title="Save"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => togglePublished(project.id, project.is_published)}
                        className={`px-3 py-2 rounded-lg text-white text-sm transition-colors ${
                          project.is_published
                            ? 'bg-yellow-600 hover:bg-yellow-700'
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                        title={project.is_published ? 'Unpublish' : 'Publish'}
                      >
                        {project.is_published ? 'Hide' : 'Show'}
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
