/**
 * PALM BEACH COUNTY ROOF REPLACEMENT HUB
 *
 * Dedicated county-level hub page targeting
 * palm-beach-county-roofing-contractor (currently avg rank 6.26 in LeadSnap).
 *
 * Part of PR #2 geo-relevance push. Links out to the Boca Raton landmark
 * cluster (Mizner Park, Town Center, FAU) to reinforce county-level
 * geographic entity anchors.
 *
 * Topical positioning: ROOF REPLACEMENT (post-April-6 pivot). Do NOT
 * introduce pre-pivot "roofing contractor" H1 copy.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ChevronRight, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import StickyConversionBar from '../../components/StickyConversionBar';
import { getLandmarksByCity } from '../../data/landmarks';

const PALM_BEACH_CITIES: Array<{ slug: string; name: string }> = [
  { slug: 'boca-raton', name: 'Boca Raton' },
  { slug: 'delray-beach', name: 'Delray Beach' },
  { slug: 'boynton-beach', name: 'Boynton Beach' },
  { slug: 'west-palm-beach', name: 'West Palm Beach' },
  { slug: 'palm-beach-gardens', name: 'Palm Beach Gardens' },
  { slug: 'jupiter', name: 'Jupiter' },
  { slug: 'wellington', name: 'Wellington' },
  { slug: 'lake-worth', name: 'Lake Worth' },
  { slug: 'palm-beach', name: 'Palm Beach' },
  { slug: 'greenacres', name: 'Greenacres' },
  { slug: 'lantana', name: 'Lantana' },
  { slug: 'highland-beach', name: 'Highland Beach' },
];

export default function PalmBeachCountyHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bocaLandmarks = getLandmarksByCity('boca-raton');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: 'All Phase Construction USA',
      telephone: '+17542275605',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County, Florida',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1590 SW 13th Ct',
        addressLocality: 'Deerfield Beach',
        addressRegion: 'FL',
        postalCode: '33442',
        addressCountry: 'US',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com/' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
        { '@type': 'ListItem', position: 3, name: 'Palm Beach County', item: 'https://allphaseconstructionfl.com/locations/palm-beach-county' },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Palm Beach County Roof Replacement | All Phase USA"
        description="Roof replacement throughout Palm Beach County, FL. Tile, metal, shingle & flat. Palm Beach County wind-compliant, dual-licensed CCC + CGC. Free estimate. (754) 227-5605."
        canonicalPath="/locations/palm-beach-county"
        schema={schema}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <StickyConversionBar />
        <Header />

        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              <span>Serving all of Palm Beach County, FL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Palm Beach County <span className="text-red-600">Roof Replacement</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-3xl">
              Dual-licensed roof replacement throughout Palm Beach County — from Boca Raton north to Jupiter and west to Wellington. Tile, metal, architectural shingle, and flat-roof systems built to Palm Beach County wind-compliant standards. Over 2,500 roofs since 2005.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7542275605"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call (754) 227-5605</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ Dual-Licensed CCC + CGC</span>
              <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ 2,500+ Roofs</span>
              <span className="bg-red-950/50 border border-red-900/50 text-red-300 px-3 py-1.5 rounded-full font-semibold">✓ Since 2005</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Palm Beach County Cities We Serve</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              We handle roof replacement projects throughout Palm Beach County, coordinating HOA architectural review, permits, and inspections from our Deerfield Beach headquarters. Our dual CCC + CGC licensing lets us assess structural conditions under the roof deck before any tear-off begins — critical on the 1970s through 1990s housing stock that dominates much of the county.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PALM_BEACH_CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/locations/${c.slug}`}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg px-4 py-3 text-white font-semibold transition-colors flex items-center justify-between"
                >
                  <span>{c.name}</span>
                  <ChevronRight className="w-4 h-4 text-red-600" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {bocaLandmarks.length > 0 && (
          <section className="py-16 bg-zinc-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-red-600 mr-3" />
                Featured Service Areas in Boca Raton
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Detailed landmark-level pages covering the distinct roofing environments around Boca Raton&rsquo;s most recognizable locations.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {bocaLandmarks.map((lm) => (
                  <Link
                    key={lm.slug}
                    to={`/locations/${lm.citySlug}/${lm.slug}`}
                    className="block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg p-6 transition-colors"
                  >
                    <div className="text-red-500 text-sm font-semibold mb-1">LANDMARK</div>
                    <div className="text-white font-bold text-lg mb-2">{lm.name}</div>
                    <div className="text-zinc-400 text-sm">Roof replacement near {lm.name}, Boca Raton</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </div>
    </>
  );
}
