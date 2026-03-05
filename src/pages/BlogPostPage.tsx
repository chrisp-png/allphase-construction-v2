import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Clock, ExternalLink } from 'lucide-react';
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
  published_date?: string;
  categories?: string[];
}

interface ServiceLink {
  path: string;
  title: string;
  description: string;
}

const SERVICE_LINKS: Record<string, ServiceLink> = {
  'tile-roofing': {
    path: '/tile-roofing',
    title: 'Tile Roofing',
    description: 'Expert tile roof installation and restoration'
  },
  'metal-roofing': {
    path: '/metal-roofing',
    title: 'Metal Roofing',
    description: 'Durable standing seam metal roof systems'
  },
  'shingle-roofing': {
    path: '/shingle-roofing',
    title: 'Shingle Roofing',
    description: 'High-quality asphalt shingle installations'
  },
  'flat-roofing': {
    path: '/flat-roofing',
    title: 'Flat Roofing',
    description: 'Commercial flat roof systems and repairs'
  },
  'commercial-roofing': {
    path: '/commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Complete commercial roofing solutions'
  },
  'residential-roofing': {
    path: '/residential-roofing',
    title: 'Residential Roofing',
    description: 'Trusted home roofing services'
  },
  'roof-inspection': {
    path: '/roof-inspection',
    title: 'Free Roof Inspection',
    description: 'Professional roof assessments at no cost'
  },
  'roof-repair': {
    path: '/roof-repair',
    title: 'Roof Repair',
    description: 'Fast and reliable roof repair services'
  },
  'calculator': {
    path: '/calculator',
    title: 'Roof Cost Calculator',
    description: 'Get an instant estimate for your roof'
  },
  'easy-payments': {
    path: '/easy-payments',
    title: 'Financing Options',
    description: 'Flexible payment plans available'
  },
  'pricing-guide': {
    path: '/pricing-guide',
    title: 'Pricing Guide',
    description: 'Transparent roofing cost breakdown'
  },
  'roof-maintenance': {
    path: '/roof-maintenance-programs',
    title: 'Roof Maintenance',
    description: 'Preventive maintenance programs'
  },
  'roof-replacement': {
    path: '/roof-replacement-process',
    title: 'Roof Replacement Process',
    description: 'Step-by-step guide to your new roof'
  },
  'roofing-services': {
    path: '/roofing-services',
    title: 'All Roofing Services',
    description: 'Complete range of roofing solutions'
  },
  'contact': {
    path: '/contact',
    title: 'Request Free Assessment',
    description: 'Get started with a free consultation'
  }
};

const DEFAULT_SERVICES = ['roofing-services', 'roof-inspection', 'calculator', 'contact'];

function getMatchedServices(post: BlogPost): ServiceLink[] {
  const matched = new Set<string>();
  const allText = `${post.title} ${post.categories.join(' ')} ${post.tags.join(' ')}`.toLowerCase();

  if (allText.includes('tile')) matched.add('tile-roofing');
  if (allText.includes('metal')) matched.add('metal-roofing');
  if (allText.includes('shingle') || allText.includes('asphalt')) matched.add('shingle-roofing');
  if (allText.includes('flat') || allText.includes('bur') || allText.includes('tpo')) matched.add('flat-roofing');
  if (allText.includes('commercial') || allText.includes('hoa') || allText.includes('multi-family') || allText.includes('condo')) {
    matched.add('commercial-roofing');
  }
  if (allText.includes('residential')) matched.add('residential-roofing');
  if (allText.includes('inspection') || allText.includes('storm')) matched.add('roof-inspection');
  if (allText.includes('repair') || allText.includes('leak') || allText.includes('damage')) matched.add('roof-repair');
  if (allText.includes('cost') || allText.includes('price') || allText.includes('budget') || allText.includes('financing')) {
    matched.add('calculator');
    matched.add('easy-payments');
    matched.add('pricing-guide');
  }
  if (allText.includes('maintenance')) matched.add('roof-maintenance');
  if (allText.includes('replacement') || allText.includes('process')) matched.add('roof-replacement');
  if (allText.includes('hurricane') || allText.includes('wind') || allText.includes('hvhz')) {
    matched.add('roof-inspection');
    matched.add('residential-roofing');
  }
  if (allText.includes('insurance') || allText.includes('claim')) {
    matched.add('roof-inspection');
    matched.add('contact');
  }
  if (allText.includes('solar') || allText.includes('energy')) {
    matched.add('residential-roofing');
    matched.add('commercial-roofing');
  }
  if (allText.includes('warranty') || allText.includes('owens corning') || allText.includes('certainteed')) {
    matched.add('roofing-services');
  }

  const matchedArray = Array.from(matched).slice(0, 4);

  while (matchedArray.length < 4) {
    const nextDefault = DEFAULT_SERVICES.find(s => !matchedArray.includes(s));
    if (nextDefault) {
      matchedArray.push(nextDefault);
    } else {
      break;
    }
  }

  return matchedArray.map(key => SERVICE_LINKS[key]).filter(Boolean);
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
        .select('id, title, slug, excerpt, featured_image, published_date, categories')
        .in('id', postIds)
        .eq('published', true)
        .limit(4);

      if (error) throw error;

      if (data && data.length >= 3) {
        setRelatedPosts(data);
      } else {
        await fetchRelatedPostsByCategory(post?.categories || []);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
      await fetchRelatedPostsByCategory(post?.categories || []);
    }
  };

  const fetchRelatedPostsByCategory = async (categories: string[]) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, published_date, categories')
        .eq('published', true)
        .neq('slug', slug)
        .order('published_date', { ascending: false })
        .limit(20);

      if (error) throw error;

      if (data && data.length > 0) {
        let selectedPosts: RelatedPost[] = [];

        if (categories && categories.length > 0) {
          const categoryMatches = data.filter(p =>
            p.categories && p.categories.some((cat: string) => categories.includes(cat))
          );
          selectedPosts = categoryMatches.slice(0, 4);
        }

        if (selectedPosts.length < 3) {
          const titleKeywords = post?.title.toLowerCase().split(' ').filter(w => w.length > 4) || [];
          const keywordMatches = data.filter(p => {
            const postTitle = p.title.toLowerCase();
            return titleKeywords.some(keyword => postTitle.includes(keyword)) &&
                   !selectedPosts.some(sp => sp.id === p.id);
          });

          selectedPosts = [...selectedPosts, ...keywordMatches].slice(0, 4);
        }

        if (selectedPosts.length < 3) {
          const remaining = data.filter(p => !selectedPosts.some(sp => sp.id === p.id));
          selectedPosts = [...selectedPosts, ...remaining].slice(0, 4);
        }

        console.log(`Related posts for "${post?.title}": Found ${selectedPosts.length} posts`);
        setRelatedPosts(selectedPosts);
      } else {
        console.warn('No published blog posts found for related articles');
      }
    } catch (error) {
      console.error('Error fetching related posts by category:', error);
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

    // Normalize blog titles: strip verbose suffix, keep under 60 chars for SEO
    const rawTitle = post.meta_title || post.title;
    const stripped = rawTitle.replace(/\s*\|\s*All Phase USA Blog\s*$/i, '').trim();
    document.title = stripped.length <= 47
      ? stripped + ' | All Phase'
      : stripped.substring(0, 47).trim() + ' | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.meta_description || post.excerpt);
    }

        let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://allphaseconstructionfl.com/blog/${post.slug}`);
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
        url: 'https://allphaseconstructionfl.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'All Phase Construction USA',
        logo: {
          '@type': 'ImageObject',
          url: 'https://allphaseconstructionfl.com/allphase-logo-white.svg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://allphaseconstructionfl.com/blog/${post.slug}`
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
                  <span>â¢</span>
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

        <div className="bg-gradient-to-br from-black via-zinc-900 to-black">
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
              className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-200 prose-li:text-gray-200 prose-strong:text-white prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-red-400 prose-img:rounded-lg prose-img:shadow-lg"
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

        <div className="bg-zinc-950 py-16 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-3">Our Roofing Services</h2>
            <p className="text-gray-400 mb-8">Explore our professional roofing solutions</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getMatchedServices(post).map(service => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-red-600 hover:bg-zinc-800 transition-all group"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-600 font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black py-16 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-3">Related Articles</h2>
            <p className="text-gray-400 mb-8">Continue learning about roofing</p>
            {relatedPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-zinc-900 rounded-xl overflow-hidden hover:shadow-xl transition-all group border border-zinc-800 hover:border-red-600"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {relatedPost.categories && relatedPost.categories.length > 0 && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {relatedPost.categories[0]}
                          </span>
                        </div>
                      )}
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">Loading related articles...</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-zinc-950 py-12 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <Link
                to="/learning-center"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Learning Center
              </Link>
              <span className="text-zinc-700">|</span>
              <Link
                to="/blog"
                className="hover:text-white transition-colors"
              >
                All Articles
              </Link>
              <span className="text-zinc-700">|</span>
              <Link
                to="/roofing-services"
                className="hover:text-white transition-colors"
              >
                Roofing Services
              </Link>
            </div>
          </div>
        </div>

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
