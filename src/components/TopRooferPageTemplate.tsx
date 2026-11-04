import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export interface CityVariables {
  city_name: string;
  state: string;
  county: string;
  local_climate_notes: string[];
  local_risk_factors: string[];
  common_roof_types: string[];
  insurance_considerations: string[];
}

export interface CompanyProfile {
  rank: number;
  name: string;
  description: string;
  strengths: string[];
  bestFor: string;
  isTopRanked?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TopRooferPageData {
  cityVariables: CityVariables;
  rankedCompanies: CompanyProfile[];
  faqs: FAQ[];
  breadcrumbs: {
    homeOffice: string;
    homeOfficePath: string;
    city: string;
    cityPath: string;
  };
  uniqueContent: {
    subheadline: string;
    methodologyIntro: string;
    cityRealityCheckParagraphs: string[];
    buyersGuideParagraphs: string[];
    ctaCustomText?: string;
  };
  comparisonTable: {
    residential: string[];
    commercial: string[];
    tile: string[];
    metal: string[];
    flatLowSlope: string[];
    inspectionFocus: string[];
  };
  internalLinks: {
    cityServicePage?: string;
    roofInspectionPage?: string;
    tileRoofingPage?: string;
    metalRoofingPage?: string;
  };
  urlPath: string;
  datePublished: string;
  dateModified: string;
}

interface TopRooferPageTemplateProps {
  data: TopRooferPageData;
}

export default function TopRooferPageTemplate({ data }: TopRooferPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { cityVariables, rankedCompanies, faqs, breadcrumbs, uniqueContent, comparisonTable, internalLinks } = data;

  useEffect(() => {
    const pageTitle = `Top 5 Roofing Companies in ${cityVariables.city_name}, ${cityVariables.state} (2026 Rankings) | All Phase Construction USA`;
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = `Research-based rankings of the best roofing companies serving ${cityVariables.city_name}, FL. Compare licensing, roof systems, inspection approach, warranties, and homeowner decision factors.`;

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Top 5 Roofing Companies in ${cityVariables.city_name}, ${cityVariables.state} (2026 Rankings)`,
      "description": description,
      "author": {
        "@type": "Organization",
        "name": "All Phase Construction USA"
      },
      "publisher": {
        "@type": "Organization",
        "name": "All Phase Construction USA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://allphaseconstructionfl.com/allphase-logo-white.svg"
        }
      },
      "datePublished": data.datePublished,
      "dateModified": data.dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const breadcrumbSchema = {
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
          "name": breadcrumbs.homeOffice,
          "item": `https://allphaseconstructionfl.com${breadcrumbs.homeOfficePath}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": breadcrumbs.city,
          "item": `https://allphaseconstructionfl.com${breadcrumbs.cityPath}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Top 5 Roofer",
          "item": `https://allphaseconstructionfl.com${data.urlPath}`
        }
      ]
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, [cityVariables, faqs, breadcrumbs, data]);

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to={breadcrumbs.homeOfficePath} className="text-zinc-400 hover:text-red-600 transition-colors">
              {breadcrumbs.homeOffice}
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to={breadcrumbs.cityPath} className="text-zinc-400 hover:text-red-600 transition-colors">
              {breadcrumbs.city}
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Top 5 Roofer</span>
          </nav>

          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Award className="w-4 h-4" />
              2026 Rankings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Top 5 Roofing Companies in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                {cityVariables.city_name}, {cityVariables.state}
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              {uniqueContent.subheadline}
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              How We Selected the Top Roofing Companies in {cityVariables.city_name}
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              {uniqueContent.methodologyIntro}
            </p>

            <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-zinc-800">
                      Criteria
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-zinc-800">
                      What We Evaluated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="px-6 py-4 text-zinc-300 font-medium">Florida roofing license status</td>
                    <td className="px-6 py-4 text-zinc-400">Active license in good standing and appropriate local compliance practices</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-6 py-4 text-zinc-300 font-medium">Local experience</td>
                    <td className="px-6 py-4 text-zinc-400">Demonstrated experience serving {cityVariables.city_name} neighborhoods and typical roof systems</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-6 py-4 text-zinc-300 font-medium">Inspection & documentation</td>
                    <td className="px-6 py-4 text-zinc-400">Ability to produce clear photo documentation and written findings</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-6 py-4 text-zinc-300 font-medium">Roof system capability</td>
                    <td className="px-6 py-4 text-zinc-400">Competence across tile, shingle, and flat/low-slope systems where applicable</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-6 py-4 text-zinc-300 font-medium">Warranty transparency</td>
                    <td className="px-6 py-4 text-zinc-400">Clear workmanship terms and manufacturer warranty handling</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-medium">Homeowner reputation patterns</td>
                    <td className="px-6 py-4 text-zinc-400">Consistent quality signals (not isolated marketing claims)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {cityVariables.city_name} Roofing Reality Check
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {uniqueContent.cityRealityCheckParagraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Top 5 Roofing Companies Serving {cityVariables.city_name}, FL
            </h2>

            <div className="space-y-8">
              {rankedCompanies.map((company) => (
                <div
                  key={company.rank}
                  className={
                    company.isTopRanked
                      ? "bg-gradient-to-r from-red-600/10 to-red-500/10 border-2 border-red-600/30 rounded-2xl p-8"
                      : "bg-[#27272a] border border-zinc-800 rounded-2xl p-8"
                  }
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={
                        company.isTopRanked
                          ? "bg-red-600 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0"
                          : "bg-zinc-700 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0"
                      }
                    >
                      #{company.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
                      <p className="text-zinc-300 leading-relaxed mb-4">{company.description}</p>
                      <div
                        className={
                          company.isTopRanked
                            ? "bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-4"
                            : "bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4"
                        }
                      >
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 className={company.isTopRanked ? "w-5 h-5 text-red-500" : "w-5 h-5 text-zinc-500"} />
                          Key Strengths
                        </h4>
                        <ul className="space-y-2 text-zinc-400">
                          {company.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={company.isTopRanked ? "text-red-500 flex-shrink-0" : "text-zinc-500 flex-shrink-0"}>
                                •
                              </span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                        <p className="text-sm text-zinc-400">
                          <span className="text-white font-semibold">Best For:</span> {company.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {cityVariables.city_name} Roofer Comparison Snapshot
            </h2>

            <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-white border-b border-zinc-800">
                      Company
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Residential
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Commercial
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Tile
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Metal
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Flat/Low-Slope
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-white border-b border-zinc-800">
                      Inspection Focus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankedCompanies.map((company, idx) => (
                    <tr
                      key={company.rank}
                      className={
                        company.isTopRanked
                          ? "border-b border-zinc-800 bg-red-600/5"
                          : idx < rankedCompanies.length - 1
                          ? "border-b border-zinc-800"
                          : ""
                      }
                    >
                      <td className={company.isTopRanked ? "px-4 py-4 text-white font-semibold" : "px-4 py-4 text-zinc-300"}>
                        {company.name}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.residential[idx] === "Yes"
                              ? company.isTopRanked
                                ? "text-green-500 font-semibold"
                                : "text-green-500"
                              : "text-zinc-500"
                          }
                        >
                          {comparisonTable.residential[idx]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.commercial[idx] === "Yes"
                              ? company.isTopRanked
                                ? "text-green-500 font-semibold"
                                : "text-green-500"
                              : "text-zinc-500"
                          }
                        >
                          {comparisonTable.commercial[idx]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.tile[idx] === "Yes"
                              ? company.isTopRanked
                                ? "text-green-500 font-semibold"
                                : "text-green-500"
                              : "text-zinc-500"
                          }
                        >
                          {comparisonTable.tile[idx]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.metal[idx] === "Yes"
                              ? company.isTopRanked
                                ? "text-green-500 font-semibold"
                                : "text-green-500"
                              : "text-zinc-500"
                          }
                        >
                          {comparisonTable.metal[idx]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.flatLowSlope[idx] === "Yes"
                              ? company.isTopRanked
                                ? "text-green-500 font-semibold"
                                : "text-green-500"
                              : "text-zinc-500"
                          }
                        >
                          {comparisonTable.flatLowSlope[idx]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={
                            comparisonTable.inspectionFocus[idx] === "High"
                              ? company.isTopRanked
                                ? "text-red-500 font-semibold"
                                : "text-zinc-400"
                              : "text-zinc-400"
                          }
                        >
                          {comparisonTable.inspectionFocus[idx]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-zinc-500 mt-4 italic">
              Capabilities can vary by project type and crew availability. Confirm scope, permitting plan, and warranty
              terms in writing before contracting.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {cityVariables.city_name} Roofing Buyer's Guide
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {uniqueContent.buyersGuideParagraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Frequently Asked Questions About Roofing in {cityVariables.city_name}
            </h2>
            <div className="max-w-5xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Schedule a Professional Roof Inspection in {cityVariables.city_name}
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              {uniqueContent.ctaCustomText ||
                `If you want an inspection-first approach with clear documentation and permit-compliant execution, All Phase Construction USA is a verified option for ${cityVariables.city_name} homeowners. Request an evaluation below.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Request a Roof Evaluation
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                (754) 227-5605
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspection</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>No Obligation</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
