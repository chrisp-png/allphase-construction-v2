/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This page renders the human-readable sitemap at /sitemap
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Verification that sheetSitemap.ts alignment is maintained
 * 3. QA audit verification (/qa/sitemap-audit)
 *
 * This page MUST stay synchronized with:
 * - src/data/sheetSitemap.ts (source of truth)
 * - public/sitemap.xml (XML version)
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { sheetSitemap, SitemapEntry } from '../data/sheetSitemap';

interface BlogPost {
  slug: string;
  title: string;
}

interface SectionGroup {
  section: string;
  entries: SitemapEntry[];
}

export default function SitemapPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionOrder = [
    'Home',
    'Roofing Services',
    'Locations',
    'Learning Center',
    'About & Contact',
  ];

  const groupedSections = useMemo(() => {
    const sections: SectionGroup[] = [];

    sectionOrder.forEach(sectionName => {
      if (sectionName === 'Locations') {
        const deerfieldBeach = sheetSitemap.find(
          entry => entry.path === '/locations/deerfield-beach'
        );
        const serviceAreasIndex = sheetSitemap.find(
          entry => entry.path === '/service-areas'
        );

        const palmBeachCities = sheetSitemap.filter(entry => {
          if (entry.section !== 'Palm Beach County Cities') return false;
          const pathParts = entry.path.split('/');
          return pathParts.length === 5 && pathParts[1] === 'locations' && pathParts[3] === 'service-area';
        });
        const browardCities = sheetSitemap.filter(entry => {
          if (entry.section !== 'Broward County Cities') return false;
          const pathParts = entry.path.split('/');
          return pathParts.length === 5 && pathParts[1] === 'locations' && pathParts[3] === 'service-area';
        });

        const allCities = [...palmBeachCities, ...browardCities].sort((a, b) =>
          a.label.localeCompare(b.label)
        );

        const locationEntries: SitemapEntry[] = [];
        if (deerfieldBeach) locationEntries.push(deerfieldBeach);
        if (serviceAreasIndex) locationEntries.push(serviceAreasIndex);
        locationEntries.push(...allCities);

        sections.push({
          section: sectionName,
          entries: locationEntries,
        });
      } else {
        const entries = sheetSitemap.filter(entry => entry.section === sectionName);
        if (entries.length > 0) {
          sections.push({
            section: sectionName,
            entries,
          });
        }
      }
    });

    return sections;
  }, []);

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
          {groupedSections.map((group) => (
            <div key={group.section}>
              <h2 className="text-xl font-semibold text-zinc-900 mb-4 border-b-2 border-red-600 pb-2">
                {group.section}
              </h2>
              <ul className="space-y-2">
                {group.entries.map((entry, index) => {
                  const isDeerfieldBeach = entry.path === '/locations/deerfield-beach';
                  const isServiceAreasIndex = entry.path === '/service-areas';
                  const isCityPage = entry.path.startsWith('/locations/deerfield-beach/service-area/');
                  const isRoofRepairCity = entry.parent === '/roof-repair';

                  let indentClass = '';
                  if (group.section === 'Locations') {
                    if (isServiceAreasIndex) {
                      indentClass = 'pl-4';
                    } else if (isCityPage) {
                      indentClass = 'pl-8';
                    }
                  } else if (group.section === 'Roofing Services' && isRoofRepairCity) {
                    indentClass = 'pl-4';
                  }

                  return (
                    <li key={entry.path} className={indentClass}>
                      <Link
                        to={entry.path}
                        className="text-zinc-600 hover:text-red-600 transition-colors"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  );
                })}
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
