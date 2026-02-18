import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_date: string;
  categories: string[];
  tags: string[];
}

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post =>
        post.categories.includes(selectedCategory)
      ));
    }
    setPage(1);
  }, [selectedCategory, posts]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_date', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      if (data) {
        setPosts(data);
        setFilteredPosts(data);

        const allCategories = new Set<string>();
        data.forEach(post => {
          if (Array.isArray(post.categories)) {
            post.categories.forEach(cat => allCategories.add(cat));
          }
        });
        setCategories(Array.from(allCategories));
      }
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      console.error('Error fetching blog posts:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateExcerpt = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const paginatedPosts = filteredPosts.slice(0, page * postsPerPage);
  const hasMore = filteredPosts.length > paginatedPosts.length;

  return (
    <><main className="pt-36 pb-16">
        <div className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Insights & Industry News
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert advice, maintenance tips, and the latest trends in residential and commercial roofing
            </p>

            {/* Dual-License Badge */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#C5A572] rounded-lg p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-[#C5A572]" />
                  <h2 className="text-2xl font-bold text-white">Dual-Licensed Roofing Specialist</h2>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-lg text-gray-200">
                    <span className="font-semibold text-[#C5A572]">CCC-1331464</span> - Florida Certified Roofing Contractor
                  </p>
                  <p className="text-lg text-gray-200">
                    <span className="font-semibold text-[#C5A572]">CGC-1526236</span> - Certified General Contractor
                  </p>
                  <p className="text-sm text-gray-300 mt-3">
                    HVHZ Certified • Industry Expertise • Complete Permitting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {categories.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  All Posts
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error ? (
            <div className="text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Blog Posts</h3>
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => {
                    setError(null);
                    setLoading(true);
                    fetchPosts();
                  }}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <p className="mt-4 text-slate-600">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Tag className="w-16 h-16 mx-auto text-slate-300 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">No posts found</h3>
              <p className="text-slate-600">
                {selectedCategory === 'all'
                  ? 'Check back soon for new content!'
                  : 'Try selecting a different category.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map(post => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.categories.length > 0 && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {post.categories[0]}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.published_date}>
                              {formatDate(post.published_date)}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-slate-600 mb-4">
                          {truncateExcerpt(post.excerpt)}
                        </p>

                        <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage(page + 1)}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Load More Posts
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Roofing Advice?
            </h2>
            <p className="text-xl text-white mb-8">
              Get a free consultation and estimate for your roofing project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/roof-cost-calculator/"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-zinc-900 transition-all shadow-xl border border-white/20"
              >
                Request a Roofing Estimate
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
