import { Helmet } from 'react-helmet-async';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { BEST_ROOFERS_DATA } from '../data/bestRoofersData';

export default function GenericBestRoofersPage() {
  const location = useLocation();

  // Extract city slug from URL: /locations/{citySlug}/best-roofers-{citySlug}
  const pathSegments = location.pathname.split('/').filter(Boolean);
  // pathSegments = ["locations", "pompano-beach", "best-roofers-pompano-beach"]
  const slug = pathSegments[1] || '';

  const cityData = BEST_ROOFERS_DATA[slug];

  if (!cityData) {
    return <Navigate to="/locations" replace />;
  }

  const canonicalUrl = `https://allphaseconstructionfl.com/locations/${cityData.citySlug}/best-roofers-${slug}`;

  return (
    <>
      <Helmet>
        <title>{cityData.pageTitle}</title>
        <meta name="description" content={cityData.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": cityData.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Locations",
                "item": "https://allphaseconstructionfl.com/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": cityData.cityName,
                "item": `https://allphaseconstructionfl.com/locations/${cityData.citySlug}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": `Best Roofers in ${cityData.cityName}`,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6 flex items-center gap-2 text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <Link to={`/locations/${cityData.citySlug}`} className="hover:text-white transition-colors">{cityData.cityName}</Link>
              <span>/</span>
              <span className="text-white">Best Roofers</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Top 5 Best Rated Roofers in {cityData.cityName}, FL (2026)
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">
              Finding a roofer in {cityData.cityName} you can trust
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                (754) 227-5605
              </a>
              <Link
                to="/roof-inspection"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            {cityData.introParagraphs.map((para, idx) => (
              <p key={idx} className="text-lg text-slate-700 leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>

          {/* Top 5 List */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your List of the Top 5 Best Roofers in {cityData.cityName}, FL</h2>
            <ol className="space-y-3 text-lg">
              {cityData.competitors.map((company, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {idx === 0 ? (
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  ) : (
                    <span className="flex-shrink-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold">{idx + 1}</span>
                  )}
                  {idx === 0 ? (
                    <span className="font-semibold text-slate-900">All Phase Construction USA</span>
                  ) : (
                    <span className="text-slate-700">{company}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Local Expertise Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{cityData.localExpertiseTitle}</h2>
            <div className="space-y-6 text-lg text-slate-700">
              <p>{cityData.localExpertiseParagraph}</p>
              <p>{cityData.allPhaseDescription}</p>
              <p>
                Ready for a free roof assessment? Call <strong>(754) 227-5605</strong> or visit our{' '}
                <Link to={`/locations/${cityData.citySlug}`} className="text-red-600 hover:text-red-700">
                  {cityData.cityName} roofing page
                </Link>{' '}
                to learn more.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Roofing in {cityData.cityName}</h2>
            <div className="grid gap-6">
              {cityData.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready for a Roof Assessment in {cityData.cityName}?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Call All Phase Construction USA today for a free inspection and estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (754) 227-5605
              </a>
              <Link
                to="/roof-inspection"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule Inspection
              </Link>
            </div>
          </div>

          {/* Cross Links */}
          {cityData.crossLinks.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Best Roofers in Nearby Cities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cityData.crossLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    className="block p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 group-hover:text-red-600">{link.label}</span>
                      <span className="text-red-600">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
