import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Star, Award, Shield } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { EXTERNAL_LINKS } from '../config/links';

export default function DeerfieldBeachCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Deerfield Beach Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this roof cost calculator to get a fast ballpark estimate for Deerfield Beach roofing projects. Final pricing depends on inspection, roof complexity, and material selection.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this roof cost calculator to get a fast ballpark estimate for Deerfield Beach roofing projects. Final pricing depends on inspection, roof complexity, and material selection.';
      document.head.appendChild(meta);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Deerfield Beach Roof Cost Calculator",
        "description": "Calculate roof replacement costs for Deerfield Beach with detailed pricing ranges for shingle, tile, metal, and flat roofs. HVHZ-compliant installation estimates.",
        "url": window.location.href,
        "about": {
          "@type": "Service",
          "serviceType": "Roof Cost Estimation",
          "areaServed": {
            "@type": "City",
            "name": "Deerfield Beach",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Florida",
              "containedInPlace": {
                "@type": "Country",
                "name": "US"
              }
            }
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a roof replacement cost in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof replacement costs in Deerfield Beach vary based on roof size, material type, and code requirements, with most projects falling within predictable ranges once inspected."
            }
          },
          {
            "@type": "Question",
            "name": "Why are roofing costs higher in Deerfield Beach than other areas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roofing costs in Deerfield Beach are higher due to High Velocity Hurricane Zone (HVHZ) requirements, stricter attachment standards, and enhanced wind-mitigation details required by code."
            }
          },
          {
            "@type": "Question",
            "name": "Does this roof cost calculator reflect Deerfield Beach building codes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, this roof cost calculator is designed around typical Deerfield Beach code requirements, including HVHZ standards, but final pricing is confirmed after an on-site inspection."
            }
          },
          {
            "@type": "Question",
            "name": "What roofing material is most affordable in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Asphalt shingles are generally the most affordable roofing option in Deerfield Beach, while tile, metal, and flat roofing systems cost more due to materials and installation complexity."
            }
          },
          {
            "@type": "Question",
            "name": "Why do tile roofs cost more in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tile roofs cost more in Deerfield Beach because they require enhanced underlayment systems, stricter fastening methods, and additional labor to meet wind and code requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Is PVC roofing more expensive than TPO in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, PVC roofing is typically more expensive than TPO in Deerfield Beach due to its premium material properties, welded seam strength, and longer service life."
            }
          },
          {
            "@type": "Question",
            "name": "Do these roof cost estimates include permits in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof cost estimates shown here account for typical Deerfield Beach permitting and code considerations, but exact permit costs are finalized during the inspection and permitting process."
            }
          },
          {
            "@type": "Question",
            "name": "Can this calculator estimate monthly payments for a Deerfield Beach roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This calculator provides project cost ranges, and monthly payment estimates are available through financing options after a site inspection confirms final pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Does roof replacement pricing include wood replacement in Deerfield Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof replacement pricing does not automatically include wood replacement in Deerfield Beach, as decking conditions can only be verified after the roof system is opened and inspected."
            }
          },
          {
            "@type": "Question",
            "name": "Is this roof cost calculator accurate for Deerfield Beach homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This roof cost calculator provides accurate budget ranges for Deerfield Beach homes, but final pricing depends on roof condition, material selection, and inspection findings."
            }
          }
        ]
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

  const faqs = [
    {
      question: 'How much does a roof replacement cost in Deerfield Beach?',
      answer: "Roof replacement costs in Deerfield Beach vary based on roof size, material type, and code requirements, with most projects falling within predictable ranges once inspected."
    },
    {
      question: 'Why are roofing costs higher in Deerfield Beach than other areas?',
      answer: "Roofing costs in Deerfield Beach are higher due to High Velocity Hurricane Zone (HVHZ) requirements, stricter attachment standards, and enhanced wind-mitigation details required by code."
    },
    {
      question: 'Does this roof cost calculator reflect Deerfield Beach building codes?',
      answer: "Yes, this roof cost calculator is designed around typical Deerfield Beach code requirements, including HVHZ standards, but final pricing is confirmed after an on-site inspection."
    },
    {
      question: 'What roofing material is most affordable in Deerfield Beach?',
      answer: "Asphalt shingles are generally the most affordable roofing option in Deerfield Beach, while tile, metal, and flat roofing systems cost more due to materials and installation complexity."
    },
    {
      question: 'Why do tile roofs cost more in Deerfield Beach?',
      answer: "Tile roofs cost more in Deerfield Beach because they require enhanced underlayment systems, stricter fastening methods, and additional labor to meet wind and code requirements."
    },
    {
      question: 'Is PVC roofing more expensive than TPO in Deerfield Beach?',
      answer: "Yes, PVC roofing is typically more expensive than TPO in Deerfield Beach due to its premium material properties, welded seam strength, and longer service life."
    },
    {
      question: 'Do these roof cost estimates include permits in Deerfield Beach?',
      answer: "Roof cost estimates shown here account for typical Deerfield Beach permitting and code considerations, but exact permit costs are finalized during the inspection and permitting process."
    },
    {
      question: 'Can this calculator estimate monthly payments for a Deerfield Beach roof?',
      answer: "This calculator provides project cost ranges, and monthly payment estimates are available through financing options after a site inspection confirms final pricing."
    },
    {
      question: 'Does roof replacement pricing include wood replacement in Deerfield Beach?',
      answer: "Roof replacement pricing does not automatically include wood replacement in Deerfield Beach, as decking conditions can only be verified after the roof system is opened and inspected."
    },
    {
      question: 'Is this roof cost calculator accurate for Deerfield Beach homes?',
      answer: "This roof cost calculator provides accurate budget ranges for Deerfield Beach homes, but final pricing depends on roof condition, material selection, and inspection findings."
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
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Calculator className="w-4 h-4" />
              Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Deerfield Beach{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this roof cost calculator to get a fast ballpark estimate based on roof size and roof type. Final pricing depends on a site inspection, roof complexity, material selection, and code requirements.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Deerfield Beach"
            county="Broward"
            isHVHZ={true}
          />

          {/* Pricing Tables Section */}
          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                Deerfield Beach
              </Link>{' '}
              Roof Replacement Cost Ranges
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Below are realistic, code-aware budget ranges for a roof replacement served from our{' '}
              <Link to="/locations/deerfield-beach/service-area" className="text-red-500 hover:text-red-400 underline transition-colors">
                Deerfield Beach
              </Link>{' '}
              office and warehouse. These ranges help homeowners understand typical costs before using the calculator, and they may vary based on roof size, complexity, materials, permit requirements, and any decking (wood) replacement.
            </p>

            {/* Shingle Roofing */}
            <div className="max-w-6xl mx-auto mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Asphalt Shingle Roof Cost Ranges in{' '}
                <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                  Deerfield Beach
                </Link>
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Shingle Type</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Low Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Typical Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">High Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Architectural Shingles</td>
                      <td className="py-4 px-6">$8–$11/sq ft<br /><span className="text-xs text-zinc-500">($800–$1,100/square)</span></td>
                      <td className="py-4 px-6">$11–$14/sq ft<br /><span className="text-xs text-zinc-500">($1,100–$1,400/square)</span></td>
                      <td className="py-4 px-6">$14–$18/sq ft<br /><span className="text-xs text-zinc-500">($1,400–$1,800/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Most common in Deerfield Beach<br />
                        • 6-nail HVHZ installation<br />
                        • Includes synthetic underlayment
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Impact-Rated Shingles</td>
                      <td className="py-4 px-6">$10–$13/sq ft<br /><span className="text-xs text-zinc-500">($1,000–$1,300/square)</span></td>
                      <td className="py-4 px-6">$13–$16/sq ft<br /><span className="text-xs text-zinc-500">($1,300–$1,600/square)</span></td>
                      <td className="py-4 px-6">$16–$20/sq ft<br /><span className="text-xs text-zinc-500">($1,600–$2,000/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • UL 2218 Class 4 rated<br />
                        • Insurance discounts available<br />
                        • Enhanced hail protection
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-white">High-Wind Enhanced Package</td>
                      <td className="py-4 px-6">$12–$15/sq ft<br /><span className="text-xs text-zinc-500">($1,200–$1,500/square)</span></td>
                      <td className="py-4 px-6">$15–$18/sq ft<br /><span className="text-xs text-zinc-500">($1,500–$1,800/square)</span></td>
                      <td className="py-4 px-6">$18–$22/sq ft<br /><span className="text-xs text-zinc-500">($1,800–$2,200/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • HVHZ-compliant installation<br />
                        • Upgraded starter/hip-ridge<br />
                        • Enhanced ventilation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-zinc-500 mb-4 italic">Final pricing requires on-site inspection.</p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">What Moves Shingle Pricing:</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Number of tear-off layers (1 vs 2+ layers)</li>
                  <li>• Roof pitch and slope complexity</li>
                  <li>• Valley and flashing configuration</li>
                  <li>• Ventilation requirements (ridge vent, solar fans)</li>
                  <li>• Broward County permitting and HVHZ compliance</li>
                  <li>• Decking condition and replacement needs</li>
                </ul>
              </div>
            </div>

            {/* Tile Roofing */}
            <div className="max-w-6xl mx-auto mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Tile Roof Cost Ranges in{' '}
                <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                  Deerfield Beach
                </Link>
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Tile Type</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Low Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Typical Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">High Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Concrete Tile (Re-Roof)</td>
                      <td className="py-4 px-6">$14–$17/sq ft<br /><span className="text-xs text-zinc-500">($1,400–$1,700/square)</span></td>
                      <td className="py-4 px-6">$17–$22/sq ft<br /><span className="text-xs text-zinc-500">($1,700–$2,200/square)</span></td>
                      <td className="py-4 px-6">$22–$28/sq ft<br /><span className="text-xs text-zinc-500">($2,200–$2,800/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • High-temp underlayment required<br />
                        • Foam/adhesive HVHZ fastening<br />
                        • 50+ year lifespan
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Clay Tile (Re-Roof)</td>
                      <td className="py-4 px-6">$18–$22/sq ft<br /><span className="text-xs text-zinc-500">($1,800–$2,200/square)</span></td>
                      <td className="py-4 px-6">$22–$28/sq ft<br /><span className="text-xs text-zinc-500">($2,200–$2,800/square)</span></td>
                      <td className="py-4 px-6">$28–$35/sq ft<br /><span className="text-xs text-zinc-500">($2,800–$3,500/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Premium material cost<br />
                        • Natural clay aesthetics<br />
                        • Enhanced durability
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-white">Flat vs Profile Tile</td>
                      <td className="py-4 px-6 text-zinc-500" colSpan={3}>Complexity note</td>
                      <td className="py-4 px-6 text-xs">
                        • Flat tile typically lower cost<br />
                        • Profile/barrel tile higher labor
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-zinc-500 mb-4 italic">Final pricing requires on-site inspection.</p>
              <p className="text-sm text-zinc-400">
                Tile roof underlayment and fastening compliance are critical for HVHZ standards. All installations include proper foam adhesive and mechanical fastening per Florida Building Code.
              </p>
            </div>

            {/* Metal Roofing */}
            <div className="max-w-6xl mx-auto mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Metal Roof Cost Ranges in{' '}
                <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                  Deerfield Beach
                </Link>
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Metal System</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Low Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Typical Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">High Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Exposed Fastener (R-Panel / 5V)</td>
                      <td className="py-4 px-6">$7–$10/sq ft<br /><span className="text-xs text-zinc-500">($700–$1,000/square)</span></td>
                      <td className="py-4 px-6">$10–$13/sq ft<br /><span className="text-xs text-zinc-500">($1,000–$1,300/square)</span></td>
                      <td className="py-4 px-6">$13–$16/sq ft<br /><span className="text-xs text-zinc-500">($1,300–$1,600/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Budget-friendly metal option<br />
                        • Fasteners penetrate panel<br />
                        • 20-30 year lifespan
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Standing Seam (Snap-Lock)</td>
                      <td className="py-4 px-6">$12–$16/sq ft<br /><span className="text-xs text-zinc-500">($1,200–$1,600/square)</span></td>
                      <td className="py-4 px-6">$16–$20/sq ft<br /><span className="text-xs text-zinc-500">($1,600–$2,000/square)</span></td>
                      <td className="py-4 px-6">$20–$25/sq ft<br /><span className="text-xs text-zinc-500">($2,000–$2,500/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Concealed clip fastening<br />
                        • Clean aesthetic lines<br />
                        • 40+ year lifespan
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-white">Mechanically Seamed (Premium)</td>
                      <td className="py-4 px-6">$18–$22/sq ft<br /><span className="text-xs text-zinc-500">($1,800–$2,200/square)</span></td>
                      <td className="py-4 px-6">$22–$28/sq ft<br /><span className="text-xs text-zinc-500">($2,200–$2,800/square)</span></td>
                      <td className="py-4 px-6">$28–$35/sq ft<br /><span className="text-xs text-zinc-500">($2,800–$3,500/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Field-seamed double-lock<br />
                        • Maximum wind performance<br />
                        • 50+ year durability
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-zinc-500 italic">Final pricing requires on-site inspection.</p>
            </div>

            {/* Flat Roofing */}
            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Flat Roof Cost Ranges in{' '}
                <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                  Deerfield Beach
                </Link>
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Flat Roof System</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Low Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Typical Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">High Range</th>
                      <th className="text-left py-4 px-6 text-zinc-300 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Modified Bitumen</td>
                      <td className="py-4 px-6">$6–$8/sq ft<br /><span className="text-xs text-zinc-500">($600–$800/square)</span></td>
                      <td className="py-4 px-6">$8–$11/sq ft<br /><span className="text-xs text-zinc-500">($800–$1,100/square)</span></td>
                      <td className="py-4 px-6">$11–$14/sq ft<br /><span className="text-xs text-zinc-500">($1,100–$1,400/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Torch-applied or cold-applied<br />
                        • Multi-layer system<br />
                        • 15-20 year lifespan
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">TPO (Single-Ply)</td>
                      <td className="py-4 px-6">$6–$9/sq ft<br /><span className="text-xs text-zinc-500">($600–$900/square)</span></td>
                      <td className="py-4 px-6">$9–$12/sq ft<br /><span className="text-xs text-zinc-500">($900–$1,200/square)</span></td>
                      <td className="py-4 px-6">$12–$16/sq ft<br /><span className="text-xs text-zinc-500">($1,200–$1,600/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • 60-80 mil membrane<br />
                        • Mechanically attached or adhered<br />
                        • UV and heat reflective
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">PVC Single-Ply (Premium)</td>
                      <td className="py-4 px-6">$7–$10/sq ft<br /><span className="text-xs text-zinc-500">($700–$1,000/square)</span></td>
                      <td className="py-4 px-6">$10–$14/sq ft<br /><span className="text-xs text-zinc-500">($1,000–$1,400/square)</span></td>
                      <td className="py-4 px-6">$14–$18/sq ft<br /><span className="text-xs text-zinc-500">($1,400–$1,800/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Premium single-ply option with strong seam performance when properly welded and detailed<br />
                        • Final pricing depends on insulation/tapered systems, drains/scuppers, penetrations, and perimeter details
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-white">Self-Adhered Membrane</td>
                      <td className="py-4 px-6">$8–$11/sq ft<br /><span className="text-xs text-zinc-500">($800–$1,100/square)</span></td>
                      <td className="py-4 px-6">$11–$14/sq ft<br /><span className="text-xs text-zinc-500">($1,100–$1,400/square)</span></td>
                      <td className="py-4 px-6">$14–$18/sq ft<br /><span className="text-xs text-zinc-500">($1,400–$1,800/square)</span></td>
                      <td className="py-4 px-6 text-xs">
                        • Peel-and-stick application<br />
                        • No torch/heat required<br />
                        • Clean installation process
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-zinc-500 mb-4 italic">Final pricing requires on-site inspection.</p>
              <p className="text-sm text-zinc-400 mb-4">
                PVC single-ply roofing is typically the highest-priced flat roofing option in Deerfield Beach, positioned above TPO due to its premium material performance, welded seam strength, and long-term durability when properly specified and installed. TPO remains a cost-effective single-ply option, while PVC is selected for projects where higher performance, chemical resistance, or longer service life is prioritized.
              </p>
              <p className="text-sm text-zinc-400">
                Flat roof pricing in Deerfield Beach varies based on insulation type, tapered systems for drainage, perimeter edge details, penetrations, and code-required attachment methods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" style={{display: 'none'}}>
              {/* Tile Roofing Pricing */}
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Concrete Tile Roofing</h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 text-zinc-300 font-semibold">Roof Size</th>
                        <th className="text-right py-3 text-zinc-300 font-semibold">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">1,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$21,000 - $28,500</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$28,000 - $38,000</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$35,000 - $47,500</td>
                      </tr>
                      <tr>
                        <td className="py-3">3,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$42,000 - $57,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                      Includes HVHZ installation, underlayment, flashing, and permitting for{' '}
                      <Link to="/locations/deerfield-beach/service-area" className="text-red-500 hover:text-red-400 underline">
                        Deerfield Beach
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Metal Roofing Pricing */}
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Standing Seam Metal Roofing</h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 text-zinc-300 font-semibold">Roof Size</th>
                        <th className="text-right py-3 text-zinc-300 font-semibold">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">1,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$22,500 - $30,000</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$30,000 - $40,000</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$37,500 - $50,000</td>
                      </tr>
                      <tr>
                        <td className="py-3">3,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$45,000 - $60,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                      24-gauge steel, mechanically seamed, HVHZ-rated fasteners and clips.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shingle Roofing Pricing */}
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Architectural Shingle Roofing</h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 text-zinc-300 font-semibold">Roof Size</th>
                        <th className="text-right py-3 text-zinc-300 font-semibold">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">1,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$12,000 - $16,500</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$16,000 - $22,000</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$20,000 - $27,500</td>
                      </tr>
                      <tr>
                        <td className="py-3">3,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$24,000 - $33,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                      Premium architectural shingles, synthetic underlayment, 6-nail HVHZ installation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flat/Single-Ply Roofing Pricing */}
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Single-Ply TPO/PVC Roofing</h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 text-zinc-300 font-semibold">Roof Size</th>
                        <th className="text-right py-3 text-zinc-300 font-semibold">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">1,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$9,000 - $12,750</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$12,000 - $17,000</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3">2,500 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$15,000 - $21,250</td>
                      </tr>
                      <tr>
                        <td className="py-3">3,000 sq ft</td>
                        <td className="text-right py-3 text-white font-semibold">$18,000 - $25,500</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                      60-80 mil membrane, mechanically attached or fully adhered system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-6 max-w-4xl mx-auto mb-16">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                What's Included in Every{' '}
                <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-400 transition-colors underline">
                  Deerfield Beach
                </Link>{' '}
                Roof Replacement
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>HVHZ-compliant installation per Florida Building Code</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Broward County permitting and inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Complete tear-off and disposal of existing roof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Deck inspection and renailing (repairs if needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Premium underlayment and flashing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Manufacturer and workmanship warranties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Property protection and daily cleanup</span>
                </li>
              </ul>
            </div>

            {/* Global Cost Disclaimer */}
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-center text-zinc-300 text-lg leading-relaxed bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                All roof cost ranges shown on this page reflect typical Deerfield Beach pricing based on roof size and material type; final project pricing is confirmed after an on-site inspection and permit-ready scope review.
              </p>
            </div>

            {/* Decking Replacement Transparency Section */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Decking (Wood) Replacement Pricing — Upfront & Documented
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <p className="text-zinc-300 mb-4 leading-relaxed font-semibold">
                  Decking (wood) replacement is not included in base roof pricing and is only determined after the existing roof system is opened and inspected. Any required decking replacement in Deerfield Beach is documented with photos and added as a clearly defined line item before work proceeds.
                </p>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  If decking replacement is needed during your{' '}
                  <Link to="/locations/deerfield-beach/service-area" className="text-red-500 hover:text-red-400 underline transition-colors">
                    Deerfield Beach
                  </Link>{' '}
                  roof replacement, it must be priced in advance as a clearly defined per-sheet or per-linear-foot rate in the contract. Transparent pricing eliminates surprises and ensures you understand exactly what you're paying for.
                </p>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  Any decking change order must include clear, non-ambiguous photos showing the replaced areas. We document every sheet or section replaced with high-resolution images that capture the work before, during, and after installation.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Clear photo documentation supports permit close-out and gives homeowners an unambiguous record of what was replaced.
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <h4 className="text-white font-semibold mb-3">Standard Decking Replacement Rates:</h4>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• OSB/Plywood sheets (4'x8'): Typically $125–$175 per sheet installed</li>
                    <li>• 1x6 or 1x8 wood decking: Typically $8–$12 per linear foot installed</li>
                    <li>• Rates include material, labor, fastening to code, and disposal</li>
                    <li>• All decking work documented with photos for your records</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Credentials Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Why{' '}
              <Link to="/locations/deerfield-beach/service-area" className="hover:text-red-500 transition-colors">
                Deerfield Beach
              </Link>{' '}
              Homeowners Choose All Phase Construction
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We're a dual-licensed roofing contractor serving{' '}
              <Link to="/locations/deerfield-beach/service-area" className="text-red-500 hover:text-red-400 underline transition-colors">
                Deerfield Beach
              </Link>{' '}
              with over 25 years of experience. Our certifications, ratings, and local expertise deliver exceptional results.
            </p>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <a
                href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-sm">
                    <span className="text-blue-500 font-bold text-lg">G</span>
                  </div>
                  <span className="text-2xl font-bold text-white">4.8</span>
                </div>
                <div className="flex gap-0.5 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  500+ Google Reviews
                </p>
              </a>

              <a
                href={EXTERNAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded">
                    <span className="text-white font-bold text-lg">f</span>
                  </div>
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <div className="flex gap-0.5 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Facebook Reviews
                </p>
              </a>

              <a
                href={EXTERNAL_LINKS.BBB}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group text-center flex flex-col items-center justify-center"
              >
                <img
                  src="https://seal-seflorida.bbb.org/seals/black-seal-200-65-bbb-90537640.png"
                  alt="All Phase Construction USA LLC BBB Business Review"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto mb-2"
                  style={{ border: 0 }}
                />
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  BBB Accredited
                </p>
              </a>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
                <Shield className="w-12 h-12 text-red-500 mb-3" />
                <p className="text-xl font-bold text-white mb-1">25+ Years</p>
                <p className="text-sm text-zinc-400">
                  Serving South Florida
                </p>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="w-6 h-6 text-red-600" />
                <h3 className="text-2xl font-bold text-white">
                  Factory-Certified Installer
                </h3>
              </div>
              <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
                We're certified by every major roofing manufacturer, ensuring proper installation and full warranty coverage.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  'Tamko Pro Platinum',
                  'Owens Corning Platinum',
                  'CertainTeed Master',
                  'GAF Certified',
                  'Metal Alliance',
                  'IB Roof Systems',
                  'Carlisle',
                  'Soprema',
                  'Englert',
                  'Brava',
                ].map((cert) => (
                  <div
                    key={cert}
                    className="bg-[#27272a] px-4 py-4 rounded-lg border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-center"
                  >
                    <span className="text-white font-medium text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual Licensing */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 max-w-4xl mx-auto mt-12">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Dual-Licensed Roofing Contractor
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-zinc-400 text-sm mb-2">Certified General Contractor</p>
                  <p className="text-2xl font-bold text-white font-mono">CGC-1526236</p>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-2">Certified Roofing Contractor</p>
                  <p className="text-2xl font-bold text-white font-mono">CCC-1331464</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm text-center mt-6">
                Fully insured, licensed, and bonded in the State of Florida
              </p>
            </div>
          </div>

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Monthly payment estimates for roof replacement in Deerfield Beach depend on final project scope and are available through approved financing options once an inspection is completed.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <p className="text-zinc-300 mb-6">
                Contact us to discuss financing options and payment plans for your roofing project.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Request Financing Information
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <p className="text-zinc-300 text-center max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
              This Deerfield Beach roof cost calculator provides budget ranges, not final pricing, and is designed to help homeowners understand typical roofing costs before scheduling an inspection.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Deerfield Beach Roof Cost Calculator
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
                    <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
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
              Ready for an Accurate Quote?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Get a detailed, site-specific estimate. Schedule your free roof inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection
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
                <span>Same-Week Scheduling Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
