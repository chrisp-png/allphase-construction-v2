import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteRoutes } from '../utils/routes';
import { supabase } from '../lib/supabase';

interface BlogPost {
  slug: string;
  title: string;
}

export default function SitemapBaseline() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sitemap | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse all pages on our website. Complete sitemap of All Phase Construction USA including roofing services, locations, and resources.');
    }

    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('slug, title')
        .eq('published', true)
        .order('published_date', { ascending: false });

      if (error) throw error;

      if (data) {
        setBlogPosts(data);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
          Sitemap
        </h1>
        <p className="text-lg text-zinc-600 mb-12">
          Browse all pages on our website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteRoutes.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-semibold text-zinc-900 mb-4 border-b-2 border-red-600 pb-2">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="text-zinc-600 hover:text-red-600 transition-colors"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {!loading && blogPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 mb-4 border-b-2 border-red-600 pb-2">
                Blog Articles
              </h2>
              <ul className="space-y-2">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-zinc-600 hover:text-red-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
