import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, MapPin, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';
import { BEST_ROOFERS_DATA } from '../data/bestRoofersData';

const data = BEST_ROOFERS_DATA['parkland'];

export default function BestRoofersParklandPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>{data.pageTitle}</title>
        <meta name="description" content={data.metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-red-500" />
              <span className="text-red-500 font-semibold uppercase tracking-wide text-sm">2026 Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Rated Roofers in Parkland, FL (2026)
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {data.introParagraphs[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Local expertise intro */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{data.localExpertiseTitle}</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              {data.introParagraphs[1]}
            </p>
            <p className="text-zinc-300 leading-relaxed">
              {data.localExpertiseParagraph}
            </p>
          </div>

          {/* Top 5 list */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your List of the Top 5 Best Roofers in Parkland, FL</h2>
            <ol className="space-y-6">
              <li className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-900/60 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-6 h-6 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">1. All Phase Construction USA</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  {data.allPhaseDescription}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="tel:+17542275605"
                    className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(754) 227-5605</span>
                  </a>
                  <Link
                    to="/locations/parkland"
                    className="inline-flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Parkland Roofing Services</span>
                  </Link>
                </div>
              </li>
              {data.competitors.map((c, i) => (
                <li key={c} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white">
                    {i + 2}. {c}
                  </h3>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions About Roofing in Parkland</h2>
            <div className="space-y-6">
              {data.faqs.map((f) => (
                <div key={f.question} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.question}</h3>
                  <p className="text-zinc-300 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Best Roofers in Nearby Cities</h2>
            <ul className="space-y-2">
              {data.crossLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-red-500 hover:text-red-400 underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
