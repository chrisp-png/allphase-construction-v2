import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  published_date: string;
  updated_at?: string;
  categories: string[];
  tags: string[];
  meta_title: string;
  meta_description: string;
  faqs: { question: string; answer: string }[];
  related_post_ids: string[];
  view_count: number;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (slug) {
      fetchPost();
      window.scrollTo(0, 0);
    }
  }, [slug]);

  useEffect(() => {
    if (post) {
      updateMetaTags();
      incrementViewCount();
    }
  }, [post]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);
        if (data.related_post_ids && data.related_post_ids.length > 0) {
          fetchRelatedPosts(data.related_post_ids);
        } else {
          fetchRelatedPostsByCategory(data.categories);
        }
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (postIds: string[]) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image')
        .in('id', postIds)
        .eq('published', true)
        .limit(4);

      if (error) throw error;
      if (data) setRelatedPosts(data);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const fetchRelatedPostsByCategory = async (categories: string[]) => {
    if (!categories || categories.length === 0) return;

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, categories')
        .eq('published', true)
        .neq('slug', slug)
        .limit(10);

      if (error) throw error;

      if (data) {
        const filtered = data
          .filter(p => p.categories.some((cat: string) => categories.includes(cat)))
          .slice(0, 4);
        setRelatedPosts(filtered);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const incrementViewCount = async () => {
    if (!post) return;

    try {
      await supabase.rpc('increment', {
        row_id: post.id,
        table_name: 'blog_posts',
        column_name: 'view_count'
      }).catch(() => {
        supabase
          .from('blog_posts')
          .update({ view_count: post.view_count + 1 })
          .eq('id', post.id);
      });
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const updateMetaTags = () => {
    if (!post) return;

    document.title = post.meta_title || post.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.meta_description || post.excerpt);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return readTime;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getArticleSchema = () => {
    if (!post) return null;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: post.featured_image,
      datePublished: post.published_date,
      dateModified: post.updated_at || post.published_date,
      author: {
        '@type': 'Organization',
        name: 'All Phase Construction USA',
        url: 'https://allphaseusa.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'All Phase Construction USA',
        logo: {
          '@type': 'ImageObject',
          url: 'https://allphaseusa.com/allphase-logo-white.svg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://allphaseusa.com/blog/${post.slug}`
      },
      about: {
        '@type': 'Thing',
        name: 'Roofing'
      },
      mentions: [
        {
          '@type': 'Place',
          name: 'Broward County',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'FL'
          }
        },
        {
          '@type': 'Place',
          name: 'Palm Beach County',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'FL'
          }
        },
        {
          '@type': 'Place',
          name: 'Deerfield Beach',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Deerfield Beach',
            addressRegion: 'FL'
          }
        }
      ]
    };

    return schema;
  };


  const getFaqPageSchema = () => {
    if (!post || !post.faqs || post.faqs.length === 0) return null;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    return schema;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-36">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-36">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>{getArticleSchema() && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema()) }}
        />
      )}

      {getFaqPageSchema() && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema()) }}
        />
      )}

      <article className="pt-36">
        <div className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {post.categories.length > 0 && (
              <div className="mb-4">
                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {post.categories[0]}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.published_date}>
                  {formatDate(post.published_date)}
                </time>
              </div>
              {post.categories.length > 0 && (
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>{post.categories[0]}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{calculateReadTime(post.content)} min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <img
              src={post.featured_image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="bg-zinc-900 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-700 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group border border-zinc-800"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.featured_image}
                      alt={relatedPost.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-xl text-white mb-8">
              Get a free consultation and estimate from South Florida's trusted roofing experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator/"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                Request a Roofing Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
