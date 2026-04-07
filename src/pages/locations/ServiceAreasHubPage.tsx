/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Service Areas Hub Page
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * CANONICAL Service Areas Hub - This is the primary service areas listing page.
 * Footer link "View All Service Areas" points here.
 *
 * Clean directory-style listing grouped by county.
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ServiceAreasHubPage() {
  useEffect(() => {
    document.title = 'Roofing Service Areas | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete list of service areas in Broward & Palm Beach Counties. All cities served from our Deerfield Beach office with consistent supervision and code-compliant roofing.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Complete list of service areas in Broward & Palm Beach Counties. All cities served from our Deerfield Beach office with consistent supervision and code-compliant roofing.';
      document.head.appendChild(meta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://allphaseconstructionfl.com/locations/service-areas/');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://allphaseconstructionfl.com/locations/service-areas/';
      document.head.appendChild(link);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://allphaseconstructionfl.com/locations/service-areas/#collectionpage",
        "url": "https://allphaseconstructionfl.com/locations/service-areas/",
        "name": "Roofing Service Areas | All Phase Construction USA",
        "description": "All service areas listed below are served from our Deerfield Beach office and warehouse, with consistent standards, supervision, and code-compliant workmanship.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://allphaseconstructionfl.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service Areas",
              "item": "https://allphaseconstructionfl.com/locations/service-areas/"
            }
          ]
        }
      }
    ];

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(s => s.remove());

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(s => s.remove());
    };
  }, []);

  const browardCountyAreas = [
    { name: 'Broward County', path: '/locations/broward-county/' },
    { name: 'Coconut Creek', path: '/locations/coconut-creek/' },
    { name: 'Cooper City', path: '/locations/cooper-city/' },
    { name: 'Coral Springs', path: '/locations/coral-springs/' },
    { name: 'Dania Beach', path: '/locations/dania-beach/' },
    { name: 'Davie', path: '/locations/davie/' },
    { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale/' },
    { name: 'Hallandale Beach', path: '/locations/hallandale-beach/' },
    { name: 'Hillsboro Beach', path: '/locations/hillsboro-beach/' },
    { name: 'Hollywood', path: '/locations/hollywood/' },
    { name: 'Lauderdale-by-the-Sea', path: '/locations/lauderdale-by-the-sea/' },
    { name: 'Lauderdale Lakes', path: '/locations/lauderdale-lakes/' },
    { name: 'Lauderhill', path: '/locations/lauderhill/' },
    { name: 'Lighthouse Point', path: '/locations/lighthouse-point/' },
    { name: 'Margate', path: '/locations/margate/' },
    { name: 'Miramar', path: '/locations/miramar/' },
    { name: 'North Lauderdale', path: '/locations/north-lauderdale/' },
    { name: 'Oakland Park', path: '/locations/oakland-park/' },
    { name: 'Parkland', path: '/locations/parkland/' },
    { name: 'Pembroke Park', path: '/locations/pembroke-park/' },
    { name: 'Pembroke Pines', path: '/locations/pembroke-pines/' },
    { name: 'Plantation', path: '/locations/plantation/' },
    { name: 'Pompano Beach', path: '/locations/pompano-beach/' },
    { name: 'Sea Ranch Lakes', path: '/locations/sea-ranch-lakes/' },
    { name: 'Southwest Ranches', path: '/locations/southwest-ranches/' },
    { name: 'Sunrise', path: '/locations/sunrise/' },
    { name: 'Tamarac', path: '/locations/tamarac/' },
    { name: 'Weston', path: '/locations/weston/' },
    { name: 'Wilton Manors', path: '/locations/wilton-manors/' }
  ];

  const palmBeachCountyAreas = [
    { name: 'Palm Beach County', path: '/locations/palm-beach-county/' },
    { name: 'Boca Raton', path: '/locations/boca-raton/' },
    { name: 'Boynton Beach', path: '/locations/boynton-beach/' },
    { name: 'Delray Beach', path: '/locations/delray-beach/' },
    { name: 'Greenacres', path: '/locations/greenacres/' },
    { name: 'Haverhill', path: '/locations/haverhill/' },
    { name: 'Highland Beach', path: '/locations/highland-beach/' },
    { name: 'Hypoluxo', path: '/locations/hypoluxo/' },
    { name: 'Jupiter', path: '/locations/jupiter/' },
    { name: 'Jupiter Inlet Colony', path: '/locations/jupiter-inlet-colony/' },
    { name: 'Lake Worth Beach', path: '/locations/lake-worth-beach/' },
    { name: 'Lantana', path: '/locations/lantana/' },
    { name: 'Loxahatchee Groves', path: '/locations/loxahatchee-groves/' },
    { name: 'North Palm Beach', path: '/locations/north-palm-beach/' },
    { name: 'Ocean Ridge', path: '/locations/ocean-ridge/' },
    { name: 'Palm Beach', path: '/locations/palm-beach/' },
    { name: 'Palm Beach Gardens', path: '/locations/palm-beach-gardens/' },
    { name: 'Palm Beach Shores', path: '/locations/palm-beach-shores/' },
    { name: 'Royal Palm Beach', path: '/locations/royal-palm-beach/' },
    { name: 'Wellington', path: '/locations/wellington/' },
    { name: 'West Palm Beach', path: '/locations/west-palm-beach/' },
    { name: 'Westlake', path: '/locations/westlake/' }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/" className="text-zinc-500 hover:text-white transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Service Areas</span>
          </nav>

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <MapPin className="w-4 h-4" />
              Service Coverage
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Service Areas
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Select your county or city to view local roofing services and coverage details.
            </p>
          </div>

          {/* Service Area Map */}
          <div className="mb-16">
            <div className="bg-[#27272a] border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Our Service Coverage Area
                </h2>
                <p className="text-zinc-400">
                  The dual-licensed roofing specialist serving Broward & Palm Beach Counties from the Deerfield Beach headquarters at 590 Goolsby Blvd.
                  Leveraging General Contracting expertise (CGC-1526236) and Roofing License (CCC-1331464) to provide superior HVHZ-compliant roofing solutions throughout South Florida.
                </p>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14306.933203564446!2d-80.131692!3d26.302744549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x88d91d982b569be1%3A0xc298661959b65cbf!2sAll%20Phase%20Construction%20USA%2C%20LLC%2C%20590%20Goolsby%20Blvd%2C%20Deerfield%20Beach%2C%20FL%2033442!3m2!1d26.3107856!2d-80.1251381!5e0!3m2!1sen!2sus!4v1769952692459!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All Phase Construction USA, LLC - 590 Goolsby Blvd, Deerfield Beach, FL 33442"
                />
              </div>
              <div className="p-6 bg-[#1a1a1d] border-t border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-white font-semibold mb-1">Headquarters</h3>
                    <p className="text-zinc-400 text-sm">590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-white font-semibold mb-1">Coverage Area</h3>
                    <p className="text-zinc-400 text-sm">Broward & Palm Beach Counties</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-white font-semibold mb-1">Response Time</h3>
                    <p className="text-zinc-400 text-sm">Same-day inspections available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Broward County Service Areas */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Broward County Service Areas
            </h2>
                                <Link
            to="/locations/deerfield-beach/"
            className="mb-6 p-4 bg-red-950/30 border border-red-800/50 rounded-lg flex items-center justify-between group hover:bg-red-950/50 hover:border-red-600 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl mt-0.5">📍</span>
              <p className="text-zinc-300 text-sm">
                <span className="text-red-500 font-semibold group-hover:text-red-400 transition-colors">Deerfield Beach</span>
                {' '}is our headquarters — it has its own dedicated page with full service details, reviews, and local info. The grid below covers all other Broward County service areas.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-all ml-4 shrink-0" />
          </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {browardCountyAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-4 hover:border-red-600 transition-all duration-300 text-center group"
                >
                  <span className="text-zinc-300 group-hover:text-red-600 transition-colors font-medium">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Palm Beach County Service Areas */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Palm Beach County Service Areas
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {palmBeachCountyAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-4 hover:border-red-600 transition-all duration-300 text-center group"
                >
                  <span className="text-zinc-300 group-hover:text-red-600 transition-colors font-medium">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need Professional Roof Repair or Replacement?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact the dual-licensed roofing specialist today for a professional inspection and estimate. The contractor provides superior HVHZ-compliant roofing solutions throughout South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Call (754) 227-5605
              </a>
              <Link
                to="/contact/"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg border border-zinc-700"
              >
                Request a Roofing Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
