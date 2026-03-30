import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import cities from '../data/cities.json';

interface BlogPost {
  slug: string;
  title: string;
}

export default function SitemapPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sitemap | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete sitemap of All Phase Construction USA including roofing services, locations, and resources.');
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

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  // Define top cities
  const topCities = [
    'boca-raton',
    'fort-lauderdale',
    'west-palm-beach',
    'deerfield-beach',
    'coral-springs',
    'delray-beach',
    'boynton-beach',
    'pompano-beach'
  ];

  // Filter and sort cities
  const topCityList = cities.filter(city =>
    topCities.includes(city.slug) && !city.slug.includes('county')
  ).sort((a, b) => topCities.indexOf(a.slug) - topCities.indexOf(b.slug));

  const otherCities = cities.filter(city =>
    !topCities.includes(city.slug) && !city.slug.includes('county')
  ).sort((a, b) => a.city.localeCompare(b.city));

  const allCities = [...topCityList, ...otherCities];

  // Split cities into columns for desktop
  const citiesPerColumn = Math.ceil(allCities.length / 4);
  const cityColumns = [
    allCities.slice(0, citiesPerColumn),
    allCities.slice(citiesPerColumn, citiesPerColumn * 2),
    allCities.slice(citiesPerColumn * 2, citiesPerColumn * 3),
    allCities.slice(citiesPerColumn * 3)
  ];

  const sections = [
    {
      id: 'core',
      title: 'Core Pages',
      links: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
        { to: '/blog', label: 'Learning Center' },
        { to: '/locations', label: 'Locations' }
      ]
    },
    {
      id: 'roofing-services',
      title: 'Roofing Services',
      links: [
        { to: '/roof-inspection', label: 'Roof Inspection' },
        { to: '/roof-repair', label: 'Roof Repair' },
        { to: '/residential-roofing', label: 'Residential Roofing' },
        { to: '/commercial-roofing', label: 'Commercial Roofing' },
        { to: '/roof-maintenance-programs', label: 'Roof Maintenance Programs' },
        { to: '/roof-replacement-process', label: 'Roof Replacement Process' }
      ]
    },
    {
      id: 'material-specific',
      title: 'Material-Specific Roofing',
      links: [
        { to: '/tile-roofing', label: 'Tile Roofing' },
        { to: '/metal-roofing', label: 'Metal Roofing' },
        { to: '/shingle-roofing', label: 'Shingle Roofing' },
        { to: '/flat-roofing', label: 'Flat Roofing' },
        { to: '/single-ply-roofing', label: 'Single-Ply Roofing' }
      ]
    },
    {
      id: 'counties',
      title: 'Counties',
      links: [
        { to: '/locations/broward-county', label: 'Broward County' },
        { to: '/locations/palm-beach-county', label: 'Palm Beach County' }
      ]
    },
    {
      id: 'best-roofers',
      title: 'Best Roofers',
      links: [
        { to: '/locations/deerfield-beach/best-roofers-deerfield-beach', label: 'Best Roofers in Deerfield Beach' },
        { to: '/locations/fort-lauderdale/best-roofers-fort-lauderdale', label: 'Best Roofers in Fort Lauderdale' },
        { to: '/locations/west-palm-beach/best-roofers-west-palm-beach', label: 'Best Roofers in West Palm Beach' },
        { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Best Roofers in Boca Raton' },
        { to: '/locations/coral-springs/best-roofers-coral-springs', label: 'Best Roofers in Coral Springs' },
        { to: '/locations/wellington/best-roofers-wellington', label: 'Best Roofers in Wellington' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-32">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Sitemap
            </span>
          </h1>
          <p className="text-lg text-zinc-400 mb-4">
            Browse all pages on our website organized by category for easy navigation.
          </p>
          <p className="text-sm text-zinc-500">
            Looking for the XML sitemap?{' '}
            <a
              href="/sitemap.xml/"
              className="text-red-500 hover:text-red-400 inline-flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View sitemap.xml
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-red-600">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-zinc-400 hover:text-red-500 transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Blog Section */}
          {!loading && blogPosts.length > 0 && (
            <div id="blog" className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-red-600">
                Blog Articles
              </h2>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-zinc-400 hover:text-red-500 transition-colors block py-1"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Cities Section */}
        <div id="cities" className="bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-red-600">
            Cities We Serve
          </h2>

          {/* Desktop View - 4 Columns */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {cityColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-2">
                  {column.map((city, index) => {
                    const isTopCity = topCities.includes(city.slug);
                    return (
                      <li key={city.slug}>
                        <Link
                          to={`/locations/${city.slug}`}
                          className={`transition-colors block py-1 ${
                            isTopCity
                              ? 'text-red-500 hover:text-red-400 font-medium'
                              : 'text-zinc-400 hover:text-red-500'
                          }`}
                        >
                          {city.city}
                        </Link>
                        {index === topCityList.length - 1 && columnIndex === 0 && (
                          <div className="border-t border-zinc-700 my-2 pt-1" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile View - Accordion Groups */}
          <div className="md:hidden space-y-3">
            {/* Top Cities */}
            <div className="border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileSection('top-cities')}
                className="w-full flex items-center justify-between p-4 bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <span className="font-semibold text-red-500">Top Cities ({topCityList.length})</span>
                {openMobileSection === 'top-cities' ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openMobileSection === 'top-cities' && (
                <div className="p-4 space-y-2">
                  {topCityList.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/locations/${city.slug}`}
                      className="block text-red-500 hover:text-red-400 py-1 transition-colors"
                    >
                      {city.city}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Cities */}
            <div className="border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileSection('other-cities')}
                className="w-full flex items-center justify-between p-4 bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <span className="font-semibold">All Other Cities ({otherCities.length})</span>
                {openMobileSection === 'other-cities' ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openMobileSection === 'other-cities' && (
                <div className="p-4 space-y-2">
                  {otherCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/locations/${city.slug}`}
                      className="block text-zinc-400 hover:text-red-500 py-1 transition-colors"
                    >
                      {city.city}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
            Quick Jump
          </h3>
          <div className="flex flex-wrap gap-3">
            <a href="#core" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Core Pages
            </a>
            <a href="#roofing-services" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Roofing Services
            </a>
            <a href="#material-specific" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Material-Specific
            </a>
            <a href="#counties" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Counties
            </a>
            <a href="#cities" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Cities
            </a>
            <a href="#blog" className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-zinc-300 hover:border-red-600 hover:text-red-500 transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
