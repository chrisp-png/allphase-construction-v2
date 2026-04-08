/**
 * DYNAMIC LANDMARK PAGE
 *
 * Renders /locations/:city/:landmark pages from src/data/landmarks.ts.
 * Part of the PR #2 geo-relevance push for palm-beach-county-roofing-contractor.
 */

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, ChevronRight, Shield } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import StickyConversionBar from '../components/StickyConversionBar';
import NotFoundPage from './NotFoundPage';
import { getLandmark } from '../data/landmarks';
import { getLocationBySlug } from '../data/locations';
import {
  buildLandmarkSeo,
  buildLandmarkFaqSchema,
  buildLandmarkBreadcrumbSchema,
} from '../lib/landmarkSeo';

export default function DynamicLandmarkPage() {
  const { city: citySlug, landmark: landmarkSlug } = useParams<{
    city: string;
    landmark: string;
  }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug, landmarkSlug]);

  if (!citySlug || !landmarkSlug) return <NotFoundPage />;
  const landmark = getLandmark(citySlug, landmarkSlug);
  if (!landmark) return <NotFoundPage />;

  const parentCity = getLocationBySlug(citySlug);
  const cityDisplay = parentCity?.city ?? citySlug;

  const seo = buildLandmarkSeo(landmark);
  const faqSchema = buildLandmarkFaqSchema(landmark);
  const breadcrumbSchema = buildLandmarkBreadcrumbSchema(landmark);

  const schemaArray: Record<string, unknown>[] = [
    breadcrumbSchema as Record<string, unknown>,
  ];
  if (faqSchema) schemaArray.push(faqSchema as Record<string, unknown>);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        schema={schemaArray}
        noindex={false}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <StickyConversionBar />
        <Header />

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-600 transition-colors">Locations</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/locations/${citySlug}`} className="hover:text-red-600 transition-colors">{cityDisplay}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{landmark.name}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                <span>Serving {landmark.name} & surrounding {cityDisplay}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Roof Replacement Near <span className="text-red-600">{landmark.name}</span>
              </h1>

              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                {landmark.shortDescriptor}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (754) 227-5605</span>
                </a>
                <Link
                  to={`/locations/${citySlug}`}
                  className="inline-flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <span>More about {cityDisplay}</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ Dual-Licensed CCC + CGC</span>
                <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ 2,500+ Roofs</span>
                <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ Since 2005</span>
                <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ Free Inspections</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">The {landmark.name} Area</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">{landmark.localContext}</p>

            <h2 className="text-3xl font-bold text-white mb-6">Roofing in This Part of {cityDisplay}</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">{landmark.roofingAngle}</p>

            {landmark.nearbyAreas.length > 0 && (
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-red-600 mr-2" />
                  Neighborhoods We Serve Near {landmark.name}
                </h3>
                <ul className="text-zinc-300 flex flex-wrap gap-x-6 gap-y-2">
                  {landmark.nearbyAreas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* FAQs */}
        {landmark.faqs.length > 0 && (
          <section className="py-16 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                {landmark.name} Roof Replacement FAQs
              </h2>
              <div className="space-y-4">
                {landmark.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 group"
                  >
                    <summary className="text-white font-bold cursor-pointer list-none flex justify-between items-start">
                      <span>{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-red-600 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                    </summary>
                    <p className="text-zinc-300 mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cross-links back to city + county */}
        <section className="py-12 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Continue Exploring</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to={`/locations/${citySlug}`}
                className="block bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg p-6 transition-colors"
              >
                <div className="text-red-500 text-sm font-semibold mb-1">CITY PAGE</div>
                <div className="text-white font-bold text-lg">Roof Replacement in {cityDisplay}</div>
                <div className="text-zinc-400 text-sm mt-1">Full city-wide roofing services and neighborhoods</div>
              </Link>
              {parentCity?.county === 'Palm Beach' && (
                <Link
                  to="/locations/palm-beach-county"
                  className="block bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg p-6 transition-colors"
                >
                  <div className="text-red-500 text-sm font-semibold mb-1">COUNTY HUB</div>
                  <div className="text-white font-bold text-lg">Palm Beach County Roof Replacement</div>
                  <div className="text-zinc-400 text-sm mt-1">County-wide service area, licensing, and coverage</div>
                </Link>
              )}
              {parentCity?.county === 'Broward' && (
                <Link
                  to="/locations/broward-county"
                  className="block bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg p-6 transition-colors"
                >
                  <div className="text-red-500 text-sm font-semibold mb-1">COUNTY HUB</div>
                  <div className="text-white font-bold text-lg">Broward County Roof Replacement</div>
                  <div className="text-zinc-400 text-sm mt-1">County-wide service area, licensing, and coverage</div>
                </Link>
              )}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}
