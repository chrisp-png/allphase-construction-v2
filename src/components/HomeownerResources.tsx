import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  title: string;
  href: string;
  excerpt: string;
  category: string;
}

const featuredPosts: BlogPost[] = [
  {
    title: 'How Much Does a Roof Replacement Cost in Broward County? (2026 Guide)',
    href: '/blog/roof-replacement-cost-broward-county-2026',
    excerpt: 'Material costs, labor rates, and what to budget for a full roof replacement in South Florida.',
    category: 'Cost Guide'
  },
  {
    title: 'What Makes a Roof Hurricane Resistant?',
    href: '/blog/what-makes-a-roof-hurricane-resistant',
    excerpt: 'Impact-resistant materials, proper installation methods, and HVHZ code requirements that protect your home.',
    category: 'Hurricane Prep'
  },
  {
    title: 'Wind Mitigation for South Florida Roofs',
    href: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home',
    excerpt: 'How wind mitigation upgrades can lower your insurance premiums by 20-45% while strengthening your roof.',
    category: 'Insurance Savings'
  },
  {
    title: 'Metal Roof vs. Tile Roof: Which Is Better for Hurricanes?',
    href: '/blog/metal-roof-vs-tile-roof-south-florida-hurricanes',
    excerpt: 'Side-by-side comparison of performance, cost, lifespan, and wind resistance for South Florida homes.',
    category: 'Comparison'
  },
  {
    title: 'How to File a Roof Insurance Claim After Storm Damage',
    href: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage',
    excerpt: 'Step-by-step guide to documenting damage, filing your claim, and working with your insurance adjuster.',
    category: 'Insurance Guide'
  }
];

export default function HomeownerResources() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Homeowner Resources</h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Expert roofing guides, cost breakdowns, and storm preparation tips for South Florida homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              to={post.href}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-200 group flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-600/10 text-red-500 text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/learning-center"
            className="inline-flex items-center text-lg font-semibold text-red-600 hover:text-red-500 transition-colors"
          >
            Explore All Guides
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
