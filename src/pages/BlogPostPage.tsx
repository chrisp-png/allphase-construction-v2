import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Clock, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import { enrichBlogContent } from '../utils/blogContentEnricher';

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
    path: '/roof-cost-calculator',
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
    path: '/residential-roofing',
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

  // Static fallback metadata for posts missing from Supabase.
  // Hoisted so the static-synthesis path can be reached from multiple branches
  // (Supabase returned null OR Supabase threw).
  const staticPostMeta: Record<string, Partial<BlogPost>> = {
    'our-roofing-company-is-proud-to-be-a-family-owned-business': {
      title: 'Our Roofing Company Is Proud to Be a Family-Owned Business',
      excerpt: 'All Phase Construction USA is a family-owned roofing company in Deerfield Beach, FL with over 20 years of experience serving South Florida homeowners.',
      author: 'All Phase Construction USA Team',
      published_date: '2026-03-29',
      categories: ['Roofing Education'],
      tags: ['Family Business', 'About Us', 'Deerfield Beach', 'South Florida', 'Licensed Contractor'],
      featured_image: '/blog-images/our-roofing-company-is-proud-to-be-a-family-owned-business.jpg',
      meta_title: 'Family-Owned Roofing Company in Deerfield Beach | All Phase Construction USA',
      meta_description: 'All Phase Construction USA is a family-owned roofing company in Deerfield Beach, FL. Dual-licensed CGC & CCC contractor with 20+ years serving Broward & Palm Beach Counties.',
      faqs: [],
    },
    'how-to-hire-a-roofer-in-south-florida': {
      title: 'How to Hire a Roofer in South Florida: What to Look For and What to Avoid',
      excerpt: 'Complete guide to hiring a licensed roofing contractor in South Florida. Learn what credentials to verify, red flags to watch for, and how to protect your investment.',
      author: 'All Phase Construction USA Team',
      published_date: '2026-03-29',
      categories: ['Roofing Education'],
      tags: ['Hiring Contractor', 'South Florida', 'Licensed Roofer', 'Roofing Tips'],
      featured_image: '/shingle-roof-completion-broward-county-all-phase-construction-usa.jpg',
      meta_title: 'How to Hire a Roofer in South Florida | What to Look For & Avoid',
      meta_description: 'Expert guide to hiring a licensed roofing contractor in South Florida. Verify credentials, avoid scams, and protect your roofing investment in Broward &',
      faqs: [],
    },
    'how-much-does-a-screen-enclosure-cost': {
      title: 'How Much Does a Screen Enclosure Cost in South Florida?',
      excerpt: 'Complete cost guide for screen enclosures in South Florida. Learn about pricing factors, materials, permits, and what to expect for your patio or pool enclosure project.',
      author: 'All Phase Construction USA Team',
      published_date: '2026-03-29',
      categories: ['Home Improvement'],
      tags: ['Screen Enclosure', 'Cost Guide', 'South Florida', 'Pool Enclosure', 'Patio Screen'],
      featured_image: '/blog-images/how-much-does-a-screen-enclosure-cost.jpg',
      meta_title: 'Screen Enclosure Cost in South Florida (2026) | Complete Price Guide',
      meta_description: 'How much does a screen enclosure cost in South Florida? Complete pricing guide for pool and patio enclosures in Broward & Palm Beach Counties.',
      faqs: [],
    },
  };

  // Convert a slug to Title Case (e.g. "roof-replacement" -> "Roof Replacement").
  const slugToTitle = (s: string) =>
    s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Try to load a BlogPost from the build-time Supabase cache written by
  // scripts/prerender-static.mjs at /blog-supabase-cache.json. Serves as the
  // tertiary fallback when the runtime Supabase call fails (RLS hiccup, CORS
  // edge case, transient DNS) — the cache contains every published row as of
  // build-time, so the 28 KNOWN_SUPABASE_SLUGS entries survive a Supabase
  // outage and the visitor still sees a full article (pinned to whatever was
  // in the DB when this deploy was built). Returns null on miss or fetch error.
  const tryLoadFromBuildCache = async (
    targetSlug: string,
  ): Promise<BlogPost | null> => {
    try {
      const response = await fetch('/blog-supabase-cache.json');
      if (!response.ok) return null;
      const cache = await response.json();
      const row = cache?.posts?.[targetSlug];
      if (!row) return null;
      return row as BlogPost;
    } catch (e) {
      console.warn('Could not load build-time Supabase cache:', e);
      return null;
    }
  };

  // Try to synthesize a BlogPost from public/blog-content.json + staticPostMeta.
  // Returns null if the slug is not present in blog-content.json or the fetch fails.
  const trySynthesizeFromStaticContent = async (
    targetSlug: string,
  ): Promise<BlogPost | null> => {
    try {
      const response = await fetch('/blog-content.json');
      if (!response.ok) return null;
      const blogContent = await response.json();
      const entry = blogContent[targetSlug];
      if (!entry) return null;

      const staticContent = typeof entry === 'string' ? entry : entry.content;
      const staticTitle = typeof entry === 'object' ? entry.title : '';
      if (!staticContent) return null;

      const meta = staticPostMeta[targetSlug] || {};
      // Title priority: explicit staticPostMeta > markdown H1 > slug-case fallback.
      const syntheticTitle =
        meta.title || staticTitle || slugToTitle(targetSlug);

      return {
        id: `static-${targetSlug}`,
        title: syntheticTitle,
        slug: targetSlug,
        excerpt: meta.excerpt || '',
        content: staticContent,
        featured_image: meta.featured_image || '',
        author: meta.author || 'All Phase Construction USA Team',
        published_date: meta.published_date || '2026-03-29',
        categories: meta.categories || ['Roofing Education'],
        tags: meta.tags || [],
        meta_title: meta.meta_title || syntheticTitle,
        meta_description: meta.meta_description || meta.excerpt || '',
        faqs: meta.faqs || [],
        related_post_ids: [],
        view_count: 0,
      };
    } catch (e) {
      console.warn('Could not load static blog content:', e);
      return null;
    }
  };

  // Last-resort stub when neither Supabase nor blog-content.json has content.
  // Any slug that reaches BlogPostPage has survived the blog-redirects edge
  // function, so we assume it's a known/legitimate slug and render a minimal
  // authority page instead of "Post Not Found". Preserves SEO signals and
  // keeps crawled pages from being flagged as soft-404 in GSC.
  const buildSlugStubPost = (targetSlug: string): BlogPost => {
    const title = slugToTitle(targetSlug);
    const stubContent = `
      <p>This article is being updated. For the most current information on
      <strong>${title.toLowerCase()}</strong>, please
      <a href="/blog">browse our full blog archive</a> or
      <a href="/contact">contact All Phase Construction USA</a> directly.</p>
      <p>As a dual-licensed South Florida roofing contractor
      (CCC-1331464 &amp; CGC-1526236) serving Broward and Palm Beach Counties,
      we're happy to answer questions about roof replacement, repair, inspection,
      or maintenance. Call <a href="tel:7542275605">(754) 227-5605</a> or
      <a href="/roof-cost-calculator">estimate your roof cost</a> online.</p>
    `;
    return {
      id: `stub-${targetSlug}`,
      title,
      slug: targetSlug,
      excerpt: `${title} — expert roofing insights from All Phase Construction USA.`,
      content: stubContent,
      featured_image: '',
      author: 'All Phase Construction USA Team',
      published_date: '2026-04-20',
      categories: ['Roofing Education'],
      tags: [],
      meta_title: `${title} | All Phase`,
      meta_description: `${title} — expert insights from All Phase USA, South Florida's dual-licensed roofer.`,
      faqs: [],
      related_post_ids: [],
      view_count: 0,
    };
  };

  const fetchPost = async () => {
    if (!slug) {
      setLoading(false);
      return;
    }

    // Step 1: Try Supabase. Swallow errors so we always fall through to the
    // static fallback chain below — prevents the hydration wipe that turned
    // all 37 sitemap'd blog posts into "Post Not Found" under JS-render
    // crawlers (Screaming Frog 2026-04-20).
    let supabaseData: BlogPost | null = null;
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      if (error) throw error;
      supabaseData = (data as BlogPost) || null;
    } catch (supabaseErr) {
      console.warn('Supabase blog fetch failed; using static fallback:', supabaseErr);
    }

    // Step 2: If Supabase returned a record, render it (with blog-content.json
    // content swap if Supabase content is a placeholder).
    if (supabaseData) {
      if (
        !supabaseData.content
        || supabaseData.content.startsWith('See blog/')
        || supabaseData.content.length < 500
      ) {
        try {
          const response = await fetch('/blog-content.json');
          const blogContent = await response.json();
          const entry = blogContent[slug];
          if (entry) {
            const loadedContent = typeof entry === 'string' ? entry : entry.content;
            const loadedTitle = typeof entry === 'object' ? entry.title : '';
            if (loadedContent) {
              supabaseData.content = loadedContent;
              if (
                loadedTitle
                && (!supabaseData.title
                  || supabaseData.title.toLowerCase() === slug.replace(/-/g, ' '))
              ) {
                supabaseData.title = loadedTitle;
              }
              console.log(`Loaded static content for blog post: ${slug}`);
            }
          }
        } catch (e) {
          console.warn('Could not load static blog content:', e);
        }
      }

      setPost(supabaseData);
      if (supabaseData.related_post_ids && supabaseData.related_post_ids.length > 0) {
        fetchRelatedPosts(supabaseData.related_post_ids);
      } else {
        fetchRelatedPostsByCategory(supabaseData.categories);
      }
      setLoading(false);
      return;
    }

    // Step 3: No Supabase record (or Supabase failed). Try the build-time
    // Supabase cache written by scripts/prerender-static.mjs. This is the
    // highest-fidelity fallback — it's the same row Supabase would return,
    // pinned to build-time. Added in PR-17 so the 28 KNOWN_SUPABASE_SLUGS
    // entries survive a Supabase outage with full content + FAQs + images.
    const cached = await tryLoadFromBuildCache(slug);
    if (cached) {
      setPost(cached);
      if (cached.related_post_ids && cached.related_post_ids.length > 0) {
        fetchRelatedPosts(cached.related_post_ids);
      } else {
        fetchRelatedPostsByCategory(cached.categories);
      }
      console.log(`Loaded blog post from build cache: ${slug}`);
      setLoading(false);
      return;
    }

    // Step 4: Try blog-content.json (markdown-backed posts that aren't in
    // Supabase and thus aren't in the build cache above).
    const synthesized = await trySynthesizeFromStaticContent(slug);
    if (synthesized) {
      setPost(synthesized);
      fetchRelatedPostsByCategory(synthesized.categories);
      console.log(`Loaded static-only blog post: ${slug}`);
      setLoading(false);
      return;
    }

    // Step 5: Last resort — build a stub post from the slug so we never render
    // "Post Not Found" for URLs that reached this component. Any slug here has
    // already survived the blog-redirects edge function, so it's a known slug.
    setPost(buildSlugStubPost(slug));
    console.log(`Rendered slug-stub for blog post: ${slug}`);
    setLoading(false);
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

    // Title: hard cap at 60 chars including " | All Phase" suffix (48-char body).
    // Previously used a 52-char body cap which produced 64-char titles that SF
    // flagged as over-limit. Also caps post.meta_title so a too-long Supabase
    // value cannot leak through.
    const TITLE_SUFFIX = ' | All Phase';
    const MAX_TITLE_BODY = 60 - TITLE_SUFFIX.length; // 48
    const trimForTitle = (t: string, keepSuffix: boolean) => {
      const max = keepSuffix ? MAX_TITLE_BODY : 60;
      if (t.length <= max) return t;
      return t.substring(0, max).replace(/\s+\S*$/, '').trim();
    };
    if (post.meta_title) {
      // If Supabase meta_title is already ≤60, use as-is; otherwise hard-cap.
      document.title = post.meta_title.length <= 60
        ? post.meta_title
        : trimForTitle(post.meta_title, false);
    } else {
      const rawTitle = post.title.replace(/\s*\|.*$/, '').trim();
      const cleanTitle = trimForTitle(rawTitle, true);
      document.title = cleanTitle + TITLE_SUFFIX;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      let desc = post.meta_description || post.excerpt || '';
      // If description is too short (<70 chars), generate a better one from post content
      if (desc.length < 70 && post.content) {
        const stripped = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        const sentences = stripped.match(/[^.!?]+[.!?]+/g) || [];
        desc = sentences.slice(0, 3).join(' ').trim();
        if (desc.length > 155) desc = desc.substring(0, 155).replace(/\s+\S*$/, '') + '.';
        if (desc.length < 70) desc = `${post.title}. Expert roofing insights from a dual-licensed South Florida contractor. Read the full guide at All Phase Construction USA.`;
      }
      // Hard-cap at 160 whether or not meta_description was set in Supabase.
      // Prior logic trusted Supabase values unconditionally and let 15 long
      // meta_descriptions leak through on the Friday SF crawl.
      if (desc.length > 160) {
        desc = desc.substring(0, 157).replace(/\s+\S*$/, '').trim() + '...';
      }
      metaDescription.setAttribute('content', desc);
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

  // BlogPostPage renders post.title as the page H1 in its own hero. If the
  // body content (from Supabase or blog-content.json) leads with another
  // <h1>, strip it so the page has exactly one H1. Defense-in-depth — the
  // build step already removes leading H1 from markdown, this covers
  // Supabase-authored posts that ship their own H1 in the content field.
  const stripLeadingH1 = (html: string): string => {
    if (!html) return html;
    return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
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

    const plainText = post.content.replace(/<[^>]*>/g, '');
    const wordCount = plainText.split(/\s+/).length;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt || post.meta_description,
      image: post.featured_image || 'https://allphaseconstructionfl.com/allphase-logo-white.svg',
      datePublished: post.published_date,
      dateModified: post.updated_at || post.published_date,
      wordCount,
      inLanguage: 'en-US',
      keywords: post.tags?.join(', ') || post.categories?.join(', ') || 'roofing, South Florida',
      articleSection: post.categories?.[0] || 'Roofing',
      author: {
        '@type': 'Organization',
        name: 'All Phase Construction USA',
        url: 'https://allphaseconstructionfl.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://allphaseconstructionfl.com/allphase-logo-white.svg'
        },
        sameAs: [
          'https://www.facebook.com/AllPhaseConstructionUsA',
          'https://www.instagram.com/all_phase_construction_usa/',
          'https://www.linkedin.com/company/all-phase-construction-usa-llc',
          'https://www.youtube.com/@allphaseconstructionusa5626'
        ]
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
      isPartOf: {
        '@type': 'Blog',
        name: 'All Phase Construction USA Roofing Blog',
        url: 'https://allphaseconstructionfl.com/blog'
      },
      about: [
        { '@type': 'Thing', name: 'Roofing' },
        { '@type': 'Thing', name: 'Home Improvement' }
      ],
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

  // Build FAQPage schema for blog posts that have FAQs
  // Blog posts are NOT prerendered — they render client-side from Supabase
  const getFaqSchema = () => {
    if (!post?.faqs || post.faqs.length === 0) return null;
    return {
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

  // Safety net: fetchPost() is designed to always call setPost() (Supabase →
  // blog-content.json → slug stub), so this branch should be unreachable.
  // Render a neutral "article loading" state instead of a negative "not found"
  // signal so Googlebot never sees a soft-404 H1 even if something regresses.
  if (!post) {
    const fallbackTitle = slug
      ? slug
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ')
      : 'Roofing Article';
    return (
      <div className="min-h-screen flex items-center justify-center pt-36">
        <div className="text-center max-w-md px-4">
          <h1 className="text-4xl font-bold text-white mb-4">{fallbackTitle}</h1>
          <p className="text-gray-400 mb-8">
            We're loading this article. If it doesn't appear shortly, browse our
            latest roofing guides below.
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
      {getFaqSchema() && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
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

        <div className="bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {post.featured_image && (
              <div className="mb-12">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            )}

            <div
              className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-200 prose-li:text-gray-200 prose-strong:text-white prose-a:text-white prose-a:underline hover:prose-a:text-gray-300 prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: enrichBlogContent(stripLeadingH1(post.content), post.slug) }}
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
                        width={800}
                        height={600}
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
