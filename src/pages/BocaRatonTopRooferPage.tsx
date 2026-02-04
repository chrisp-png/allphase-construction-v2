import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ChevronDown, ChevronUp, Shield, FileText, MapPin } from 'lucide-react';

export default function BocaRatonTopRooferPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Top Roofers Boca Raton FL 2026 | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research-based rankings of the best roofing companies serving Boca Raton, FL. Compare licensing, roof systems, inspection expertise, warranties, and homeowner decision factors.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Research-based rankings of the best roofing companies serving Boca Raton, FL. Compare licensing, roof systems, inspection expertise, warranties, and homeowner decision factors.';
      document.head.appendChild(meta);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 5 Roofing Companies in Boca Raton, Florida (2026 Rankings)",
      "description": "Research-based rankings of the best roofing companies serving Boca Raton, FL. Compare licensing, roof systems, inspection expertise, warranties, and homeowner decision factors.",
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
      "datePublished": "2026-01-24",
      "dateModified": "2026-01-24"
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I choose the best roofing company in Boca Raton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verify Florida licensing, ask for photo-based inspection documentation, and confirm how the contractor handles permits and inspections in Boca Raton. Then compare warranty terms in writing, including workmanship responsibility and manufacturer registration where applicable."
          }
        },
        {
          "@type": "Question",
          "name": "Are roofers required to be licensed in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Roofing is a regulated trade in Florida, and homeowners should verify that the contractor is properly licensed before signing a contract—especially for replacement projects that require permits and inspections."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing system tends to perform best in Boca Raton's climate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance depends on the building and detailing quality, but Boca Raton homes commonly succeed with properly installed tile systems, architectural shingles with strong underlayment strategy, and well-detailed metal or flat systems where appropriate. Installation quality and transition detailing often matter more than the material label."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a permit for a roof replacement in Boca Raton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. A roof replacement typically requires permits and inspections. A reputable contractor should explain the permitting workflow and what inspections are expected for your specific property and scope."
          }
        }
      ]
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
          "name": "Deerfield Beach",
          "item": "https://allphaseconstructionfl.com/locations/deerfield-beach"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Boca Raton",
          "item": "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Top 5 Roofer",
          "item": "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/top-5-roofer"
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
  }, []);

  const faqs = [
    {
      question: 'How do I choose the best roofing company in Boca Raton?',
      answer: "Verify Florida licensing, ask for photo-based inspection documentation, and confirm how the contractor handles permits and inspections in Boca Raton. Then compare warranty terms in writing, including workmanship responsibility and manufacturer registration where applicable."
    },
    {
      question: 'Are roofers required to be licensed in Florida?',
      answer: "Yes. Roofing is a regulated trade in Florida, and homeowners should verify that the contractor is properly licensed before signing a contract—especially for replacement projects that require permits and inspections."
    },
    {
      question: "What roofing system tends to perform best in Boca Raton's climate?",
      answer: "Performance depends on the building and detailing quality, but Boca Raton homes commonly succeed with properly installed tile systems, architectural shingles with strong underlayment strategy, and well-detailed metal or flat systems where appropriate. Installation quality and transition detailing often matter more than the material label."
    },
    {
      question: 'Do I need a permit for a roof replacement in Boca Raton?',
      answer: "In most cases, yes. A roof replacement typically requires permits and inspections. A reputable contractor should explain the permitting workflow and what inspections are expected for your specific property and scope."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/boca-raton" className="text-zinc-400 hover:text-red-600 transition-colors">
              Boca Raton
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Top 5 Roofer</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Award className="w-4 h-4" />
              2026 Rankings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Top 5 Roofing Companies in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Boca Raton, Florida
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              A research-based comparison for Boca Raton homeowners focused on licensing, inspection quality, roofing systems, warranty clarity, and long-term risk reduction.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              How We Selected the Top Roofing Companies in Boca Raton
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              This ranking uses transparent criteria designed for Boca Raton's roofing environment—high UV, coastal exposure, and hurricane-season wind and rain. The goal is to help homeowners choose a contractor who can deliver a code-compliant roofing system with clear warranty responsibility.
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
                    <td className="px-6 py-4 text-zinc-400">Demonstrated experience serving Boca Raton neighborhoods and typical roof systems</td>
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
              Boca Raton Roofing Reality Check
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Boca Raton roofs face a combination of high ultraviolet exposure, humidity, and seasonal storm risk. Over time, these conditions can accelerate aging in underlayments, sealants, and roof-to-wall transitions—areas where leaks often begin.
              </p>
              <p>
                Because many Boca Raton communities feature <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</Link> and HOA-driven aesthetics, contractor selection is not just about price. It's about systems knowledge, permit discipline, and the ability to document the roof's condition before and after work for long-term risk management.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Top 5 Roofing Companies Serving Boca Raton, FL
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border-2 border-red-600/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-600 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0">
                    #1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">All Phase Construction USA</h3>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      All Phase Construction USA sets the technical benchmark for Boca Raton homeowners who want inspection-first decision-making and code-compliant execution. The focus is on roofing system integrity—documentation, detailing at penetrations and transitions, and hurricane-aware installation standards.
                    </p>
                    <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          <span>Forensic-style inspection and photo documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          <span>Permit-compliant workflow and closeout discipline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          <span>Strong fit for tile, shingle, and flat/low-slope scenarios</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-zinc-400">
                        <span className="text-white font-semibold">Best For:</span> Homeowners who want defensible documentation, high standards of execution, and a roofing system designed to reduce long-term leak and storm risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-zinc-700 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0">
                    #2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Legacy Contracting Solutions</h3>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      Legacy Contracting Solutions is a strong option for Boca Raton homeowners who value responsiveness, straightforward communication, and dependable residential roofing service across common repair and replacement scenarios.
                    </p>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Residential focus and reliable scheduling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Clear customer communication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Good fit for repair-to-replacement transitions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-zinc-400">
                        <span className="text-white font-semibold">Best For:</span> Homeowners looking for a reliable residential roofing contractor with consistent service execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-zinc-700 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0">
                    #3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Kelly Roofing</h3>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      Kelly Roofing is known for established regional presence and a structured approach to production. Their scale and process orientation can be beneficial for homeowners who prefer predictable workflows and broad system capability.
                    </p>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Longstanding presence and structured operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Residential and commercial experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Broad roofing system exposure</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-zinc-400">
                        <span className="text-white font-semibold">Best For:</span> Homeowners who prefer a larger operator with repeatable processes and a proven track record.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-zinc-700 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0">
                    #4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Allied Roofing and Sheet Metal</h3>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      Allied Roofing and Sheet Metal is notable for sheet metal capability and strength in flat and specialized assemblies. This can be a major advantage where flashing complexity and drainage detailing drive performance.
                    </p>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Sheet metal and flashing expertise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Flat/low-slope system strength</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Comfort with complex roof detailing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-zinc-400">
                        <span className="text-white font-semibold">Best For:</span> Properties with non-standard roof geometry, flat roofs, or projects where detailing and metalwork are a priority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-zinc-700 text-white rounded-lg px-4 py-2 font-bold text-2xl flex-shrink-0">
                    #5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Tiger Team Roofing</h3>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      Tiger Team Roofing is often associated with storm response and inspection-led service. They can be a practical option when speed of assessment and clear documentation are priorities after weather events.
                    </p>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Storm response and rapid assessment orientation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Inspection and documentation support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-500 flex-shrink-0">•</span>
                          <span>Repair-focused execution</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-zinc-400">
                        <span className="text-white font-semibold">Best For:</span> Homeowners who want fast inspection turnaround and documentation after storms or suspected damage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Boca Raton Roofer Comparison Snapshot
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
                  <tr className="border-b border-zinc-800 bg-red-600/5">
                    <td className="px-4 py-4 text-white font-semibold">All Phase Construction USA</td>
                    <td className="px-4 py-4 text-center text-green-500 font-semibold">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500 font-semibold">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500 font-semibold">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500 font-semibold">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500 font-semibold">Yes</td>
                    <td className="px-4 py-4 text-center text-red-500 font-semibold">High</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-4 text-zinc-300">Legacy Contracting Solutions</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Limited/Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-400">Moderate</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-4 text-zinc-300">Kelly Roofing</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-zinc-400">Moderate</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-4 text-zinc-300">Allied Roofing and Sheet Metal</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Limited/Varies</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-zinc-400">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Tiger Team Roofing</td>
                    <td className="px-4 py-4 text-center text-green-500">Yes</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Limited/Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-500">Varies</td>
                    <td className="px-4 py-4 text-center text-zinc-400">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-zinc-500 mt-4 italic">
              Capabilities can vary by project type and crew availability. Confirm scope, permitting plan, and warranty terms in writing before contracting.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Boca Raton Roofing Buyer's Guide
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                In Boca Raton, the most expensive roof is often the one that fails early due to weak transitions—valleys, penetrations, roof-to-wall intersections, and drainage details. These areas should be inspected and documented before any <Link to="/locations/deerfield-beach/service-area/boca-raton" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement in Boca Raton</Link> decision is made.
              </p>
              <p>
                If your neighborhood has HOA requirements (common in Boca Raton), confirm material profiles, color rules, and submission timelines before ordering. A good contractor will anticipate these constraints rather than discovering them after materials are staged.
              </p>
              <p>
                Finally, do not treat permitting as optional. Permit discipline protects resale value, reduces insurance disputes, and creates a paper trail that clarifies responsibility if future issues arise. Learn more about <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">professional roof inspections</Link> and their role in protecting your investment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Frequently Asked Questions About Roofing in Boca Raton
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
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
              Schedule a Professional Roof Inspection in Boca Raton
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              If you want an inspection-first approach with clear documentation and permit-compliant execution, All Phase Construction USA is a verified option for Boca Raton homeowners. Request an evaluation below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
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
