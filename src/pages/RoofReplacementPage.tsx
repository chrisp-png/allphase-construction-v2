import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Clock, DollarSign, Shield, FileText, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function RoofReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        "@id": "https://allphaseconstructionfl.com/#roofingcontractor",
        "name": "All Phase Construction USA",
        "url": "https://allphaseconstructionfl.com",
        "telephone": "+1-754-227-5605",
        "priceRange": "$$-$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "590 Goolsby Blvd",
          "addressLocality": "Deerfield Beach",
          "addressRegion": "FL",
          "postalCode": "33442",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.3184",
          "longitude": "-80.0998"
        },
        "areaServed": [
          {
            "@type": "State",
            "name": "Florida"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Broward County"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Palm Beach County"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "138",
          "bestRating": "5",
          "worstRating": "1"
        },
        "license": "CCC-1331464, CGC-1526236",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "State Certified Roofing Contractor",
            "identifier": "CCC-1331464"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certified General Contractor",
            "identifier": "CGC-1526236"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does roof replacement cost in South Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof replacement costs in South Florida typically range from $8,000 to $45,000+ depending on roof size, material choice, and complexity. Asphalt shingle roofs cost $5-$8 per square foot installed, concrete tile roofs run $10-$18 per square foot, metal roofing costs $12-$20 per square foot, and flat roof systems range $8-$15 per square foot. These prices include materials, labor, permits, and HVHZ-compliant installation in Broward and Palm Beach Counties."
            }
          },
          {
            "@type": "Question",
            "name": "How long does roof replacement take in South Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential roof replacements in South Florida take 3-7 days from tear-off to completion. Timeline varies by roof size, material type, weather conditions, and permit inspection schedules. Asphalt shingle roofs typically take 2-4 days, tile roofs require 4-7 days, metal roofs take 3-5 days, and flat roofs need 3-6 days. Permit processing adds 1-3 weeks before work begins."
            }
          },
          {
            "@type": "Question",
            "name": "What is HVHZ certification and why does it matter for roof replacement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVHZ (High Velocity Hurricane Zone) certification means roofing systems are engineered and tested to withstand 175+ mph wind speeds. All roof replacements in Broward and Palm Beach Counties must meet HVHZ standards including enhanced fastening schedules, secondary water barriers, and approved materials. Only licensed contractors like All Phase Construction USA (CCC-1331464) can pull permits and install HVHZ-compliant roof systems that protect your home during hurricanes and maintain insurance eligibility."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a permit for roof replacement in Broward or Palm Beach County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all roof replacements in Broward and Palm Beach Counties require building permits. The permitting process includes engineering drawings, product approvals, NOA (Notice of Acceptance) documentation for HVHZ compliance, and multiple inspections. Licensed contractors handle all permit applications, engineering coordination, and inspection scheduling. Permit costs typically range $500-$2,000 depending on project scope and jurisdiction."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best roofing material for South Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best roofing material for South Florida depends on your budget, architectural style, and priorities. Concrete tile offers 50+ year lifespan and superior hurricane performance. Metal roofing provides excellent wind resistance, 40-50 year durability, and energy efficiency. Architectural shingles are most affordable with 25-30 year warranties. All materials must be HVHZ-rated for Broward and Palm Beach Counties. All Phase Construction USA installs all major roofing systems with manufacturer-backed warranties and proper HVHZ certification."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-300">Dual-Licensed CCC & CGC Contractor</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Replacement Contractor in South Florida | All Phase Construction USA
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert roof replacement services for Broward and Palm Beach County. HVHZ-certified installation,
                licensed CCC-1331464 & CGC-1526236, and 20+ years protecting South Florida homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Estimate
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Free Inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Lifetime Workmanship Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>HVHZ Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    When your roof reaches the end of its serviceable life, proper replacement isn't optional—it's essential
                    for protecting your property investment, maintaining insurance coverage, and ensuring occupant safety.
                    All Phase Construction USA provides complete roof replacement services throughout Broward and Palm Beach
                    Counties with dual-licensed expertise (State Certified Roofing Contractor CCC-1331464 and Certified
                    General Contractor CGC-1526236) that standard roofing companies cannot match.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive roof replacement process includes professional inspection and documentation, accurate
                    material estimates, permit coordination, HVHZ-compliant installation, manufacturer warranty registration,
                    and final inspection sign-off. We serve Boca Raton, Fort Lauderdale, Coral Springs, Pompano Beach,
                    Delray Beach, Boynton Beach, West Palm Beach, Wellington, Deerfield Beach, and all surrounding South
                    Florida communities from our centrally-located Deerfield Beach headquarters.
                  </p>
                </div>

                {/* Cost Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-red-600" />
                    Roof Replacement Costs in South Florida (2026)
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Roof replacement costs in Broward and Palm Beach Counties vary significantly based on roof size,
                    material selection, structural complexity, and HVHZ compliance requirements. Here are realistic
                    2026 price ranges for complete tear-off and replacement projects:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Asphalt Shingle Roofing</h3>
                      <div className="text-3xl font-bold text-red-600 mb-2">$5-$8<span className="text-lg text-gray-600">/sq ft</span></div>
                      <p className="text-gray-600 text-sm mb-4">Installed with HVHZ fastening</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Architectural shingles (25-30 year warranty)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Synthetic underlayment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>HVHZ wind rating 130-150 mph</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Most affordable option</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Concrete Tile Roofing</h3>
                      <div className="text-3xl font-bold text-red-600 mb-2">$10-$18<span className="text-lg text-gray-600">/sq ft</span></div>
                      <p className="text-gray-600 text-sm mb-4">Foam-set HVHZ installation</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>50+ year lifespan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Superior hurricane performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Foam adhesive + mechanical fastening</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Traditional South Florida aesthetic</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Metal Roofing Systems</h3>
                      <div className="text-3xl font-bold text-red-600 mb-2">$12-$20<span className="text-lg text-gray-600">/sq ft</span></div>
                      <p className="text-gray-600 text-sm mb-4">Standing seam or R-panel</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>40-50 year manufacturer warranties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Highest wind resistance (175+ mph)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Energy-efficient cool roof options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Modern architectural appeal</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Flat Roof Systems</h3>
                      <div className="text-3xl font-bold text-red-600 mb-2">$8-$15<span className="text-lg text-gray-600">/sq ft</span></div>
                      <p className="text-gray-600 text-sm mb-4">TPO, PVC, or modified bitumen</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>20-30 year commercial-grade systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Mechanically attached or fully adhered</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Reflective white membrane options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Ideal for commercial buildings</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-2">Total Project Cost Factors</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Your final roof replacement investment includes more than material costs:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li><strong>Tear-off and disposal:</strong> $1-$2 per square foot for complete removal of existing roofing</li>
                      <li><strong>Decking repairs:</strong> $3-$6 per square foot for damaged plywood or OSB replacement</li>
                      <li><strong>Permits and engineering:</strong> $500-$2,000 depending on jurisdiction and project complexity</li>
                      <li><strong>HVHZ compliance:</strong> Enhanced fastening, secondary water barriers, and approved underlayment</li>
                      <li><strong>Flashing and penetrations:</strong> Proper detailing around chimneys, vents, skylights, and valleys</li>
                      <li><strong>Warranty registration:</strong> Manufacturer and workmanship warranty documentation</li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="w-8 h-8 text-red-600" />
                    How Long Does Roof Replacement Take?
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Most residential roof replacement projects in South Florida take 3-7 days from tear-off to final
                    inspection, though timeline varies based on roof size, material complexity, weather conditions, and
                    permit inspection schedules. Here's what to expect:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Initial Inspection & Estimate (1-2 Days)</h4>
                        <p className="text-gray-700 text-sm">
                          Professional roof inspection, photo documentation, measurements, material selection consultation,
                          and detailed written estimate with scope of work.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Permit Processing (1-3 Weeks)</h4>
                        <p className="text-gray-700 text-sm">
                          Building permit application, engineering drawings (if required), NOA documentation submission,
                          and permit approval from local building department. We handle all permitting.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Material Delivery & Staging (1 Day)</h4>
                        <p className="text-gray-700 text-sm">
                          Roofing materials delivered to job site, staging area prepared with property protection,
                          dumpster placement for tear-off debris, and crew mobilization.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Tear-Off & Decking Inspection (1-2 Days)</h4>
                        <p className="text-gray-700 text-sm">
                          Complete removal of existing roofing materials, disposal of debris, structural decking
                          inspection, and replacement of damaged plywood or OSB sheathing.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Underlayment & Flashing Installation (1 Day)</h4>
                        <p className="text-gray-700 text-sm">
                          HVHZ-approved underlayment installation, secondary water barrier application, valley metal
                          fabrication, penetration flashing, and drip edge trim work.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Roof System Installation (2-5 Days)</h4>
                        <p className="text-gray-700 text-sm">
                          New roofing material installation following manufacturer specifications and HVHZ fastening
                          requirements. Timeline varies: shingles 2-3 days, tile 4-5 days, metal 3-4 days.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Final Inspection & Closeout (1-2 Days)</h4>
                        <p className="text-gray-700 text-sm">
                          Building department final inspection, correction of any noted deficiencies, site cleanup,
                          warranty registration, and documentation delivery to homeowner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HVHZ Compliance Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-600" />
                    HVHZ Compliance for South Florida Roof Replacement
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    All roof replacements in Broward and Palm Beach Counties must meet High Velocity Hurricane Zone (HVHZ)
                    building code requirements. HVHZ certification ensures your new roof system can withstand 175+ mph wind
                    speeds during hurricane events—a critical requirement that affects insurance coverage, property value,
                    and occupant safety.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-red-600" />
                      Critical HVHZ Requirements for Roof Replacement
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 mt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Enhanced Fastening Schedules:</strong> Increased nail/screw density in perimeter zones and field areas per engineered specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Approved Materials:</strong> All products must have Florida Product Approval with valid NOA (Notice of Acceptance) numbers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Secondary Water Barrier:</strong> Self-adhering modified bitumen underlayment in critical areas including eaves, valleys, and penetrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Sealed Roof Decks:</strong> H-clips or tongue-and-groove OSB/plywood with proper edge support and attachment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Impact Resistance:</strong> Class 3 or 4 impact rating for insurance discounts and hail protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Licensed Installation:</strong> Only State Certified Roofing Contractors (CCC license) can pull permits and install HVHZ roof systems</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    All Phase Construction USA holds both State Certified Roofing Contractor (CCC-1331464) and Certified
                    General Contractor (CGC-1526236) licenses, providing dual-licensed expertise that ensures your roof
                    replacement meets all HVHZ requirements, passes building department inspections, and maintains full
                    insurance eligibility. We provide complete NOA documentation and warranty registration with every installation.
                  </p>
                </div>

                {/* Choosing a Contractor Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-red-600" />
                    How to Choose a Roof Replacement Contractor
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Selecting the right roofing contractor is as important as choosing quality materials. Roof replacement
                    is a major investment that requires proper licensing, insurance, technical expertise, and accountability.
                    Here's what to verify before signing any contract:
                  </p>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">1. Verify State Licensing</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Confirm active State Certified Roofing Contractor (CCC) license through the Florida Department of
                        Business and Professional Regulation. Only CCC-licensed contractors can legally pull roofing permits
                        in Broward and Palm Beach Counties. Unlicensed contractors cannot provide valid warranties and leave
                        you liable for injuries and code violations.
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        All Phase Construction USA: CCC-1331464 (Roofing) & CGC-1526236 (General Contractor)
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">2. Confirm Insurance Coverage</h4>
                      <p className="text-gray-700 text-sm">
                        Request certificates of insurance for both general liability ($1M+ coverage) and workers' compensation.
                        Without proper insurance, you're personally liable if a worker is injured on your property or if damage
                        occurs during installation. Verify coverage directly with the insurance carrier.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">3. Review Local References</h4>
                      <p className="text-gray-700 text-sm">
                        Ask for recent project references in your specific area with similar roof types. Contact previous
                        customers about quality, timeline adherence, communication, cleanup, and warranty service. Online
                        reviews matter, but verified local references provide better insight into actual performance.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">4. Compare Detailed Written Estimates</h4>
                      <p className="text-gray-700 text-sm">
                        Obtain at least three written estimates with identical specifications: roof area calculations, material
                        brands and grades, warranty terms, permit costs, and payment schedules. Extremely low bids often indicate
                        substandard materials, inadequate fastening, unlicensed labor, or hidden costs that emerge mid-project.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">5. Understand Warranty Coverage</h4>
                      <p className="text-gray-700 text-sm">
                        Differentiate between manufacturer material warranties (20-50 years) and contractor workmanship warranties
                        (typically 2-10 years). Get both in writing. Manufacturer warranties only cover material defects—not
                        installation errors. Your contractor's workmanship warranty protects against leaks caused by improper installation.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">6. Verify Permit Handling</h4>
                      <p className="text-gray-700 text-sm">
                        Confirm that the contractor pulls all required building permits in their company name and schedules
                        inspections. If a contractor suggests skipping permits to "save money," walk away immediately—you'll
                        face fines, insurance claim denials, and potential re-roofing requirements when discovered.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Choose All Phase Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose All Phase Construction USA for Roof Replacement
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    All Phase Construction USA has protected South Florida properties since 2006 with dual-licensed expertise,
                    manufacturer-certified installation, and owner-operator accountability that large franchise operations cannot match.
                    Here's what sets us apart:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Dual-Licensed Authority</h3>
                      <p className="text-gray-700 text-sm">
                        State Certified Roofing Contractor (CCC-1331464) AND Certified General Contractor (CGC-1526236)
                        licenses provide structural engineering insight and legal authority that standard roofing companies lack.
                        This means proper decking repairs, load calculations, and code-compliant installation.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">HVHZ Specialist Certification</h3>
                      <p className="text-gray-700 text-sm">
                        Every All Phase roof replacement meets High Velocity Hurricane Zone standards with 175+ mph wind
                        ratings, enhanced fastening schedules, and approved materials. We provide complete NOA documentation
                        and building department approval for insurance compliance.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Owner-Operator Accountability</h3>
                      <p className="text-gray-700 text-sm">
                        Direct contractor involvement on every project ensures quality control and precision that franchise
                        operations with high-turnover crews cannot match. Your roof replacement is supervised by licensed
                        professionals—not subcontracted to the lowest bidder.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Permitting</h3>
                      <p className="text-gray-700 text-sm">
                        We handle all building permit applications, engineering coordination, NOA documentation, and inspection
                        scheduling for every roof replacement. No shortcuts, no permit skipping—just legal, code-compliant
                        installation that protects your insurance coverage and property value.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Workmanship Warranty</h3>
                      <p className="text-gray-700 text-sm">
                        Our lifetime workmanship warranty covers installation defects for as long as you own the property—not
                        just 2-5 years like most contractors. Combined with manufacturer material warranties up to 50 years,
                        your investment is comprehensively protected.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Local Deerfield Beach Headquarters</h3>
                      <p className="text-gray-700 text-sm">
                        Based at 590 Goolsby Blvd in Deerfield Beach, we serve all of Broward and Palm Beach Counties with
                        rapid response times, local building department relationships, and 20+ years of South Florida market
                        knowledge. We're here before, during, and after your roof replacement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Roof Replacement Service Area
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    All Phase Construction USA provides professional roof replacement services throughout Broward and Palm Beach
                    Counties from our centrally-located Deerfield Beach headquarters. We serve:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Broward County</h3>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Coconut Creek, Parkland,
                        Margate, Tamarac, Sunrise, Plantation, Davie, Weston, Pembroke Pines, Miramar, Hollywood,
                        Hallandale Beach, and all surrounding communities</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Palm Beach County</h3>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>Boca Raton, Delray Beach, Boynton Beach, Lake Worth, Wellington, West Palm Beach,
                        Palm Beach Gardens, Jupiter, Royal Palm Beach, Greenacres, and all surrounding communities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Contact CTA */}
                  <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Get Your Free Roof Replacement Estimate</h3>
                    <p className="text-red-100 mb-6 text-sm">
                      Professional inspection, detailed written estimate, material recommendations, and HVHZ compliance review.
                    </p>
                    <a
                      href="tel:7542275605"
                      className="block w-full bg-white text-red-600 text-center py-4 px-6 rounded-lg font-bold text-lg mb-4 hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-5 h-5 inline mr-2" />
                      (754) 227-5605
                    </a>
                    <a
                      href="/contact"
                      className="block w-full bg-red-800 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-red-900 transition-colors"
                    >
                      Request Estimate Online
                    </a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Why Trust All Phase</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">20+ Years in Business</div>
                          <div className="text-gray-600">Serving South Florida since 2006</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">4.8/5 Average Rating</div>
                          <div className="text-gray-600">138+ verified customer reviews</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Dual-Licensed CCC & CGC</div>
                          <div className="text-gray-600">CCC-1331464 & CGC-1526236</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">HVHZ Certified</div>
                          <div className="text-gray-600">175+ mph wind-rated systems</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Lifetime Workmanship Warranty</div>
                          <div className="text-gray-600">Full protection on all installations</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Related Services</h4>
                    <div className="space-y-2">
                      <a href="/roof-inspection" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Professional Roof Inspection
                      </a>
                      <a href="/roof-repair" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Emergency Roof Repair
                      </a>
                      <a href="/tile-roofing" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Tile Roofing Installation
                      </a>
                      <a href="/metal-roofing" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Metal Roofing Systems
                      </a>
                      <a href="/flat-roofing" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Commercial Flat Roofing
                      </a>
                      <a href="/roof-cost-calculator" className="block text-red-600 hover:text-red-700 font-medium text-sm">
                        → Roof Cost Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Roof Replacement
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How much does roof replacement cost in South Florida?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Roof replacement costs in South Florida typically range from $8,000 to $45,000+ depending on roof size,
                  material choice, and complexity. Asphalt shingle roofs cost $5-$8 per square foot installed, concrete tile
                  roofs run $10-$18 per square foot, metal roofing costs $12-$20 per square foot, and flat roof systems range
                  $8-$15 per square foot. These prices include materials, labor, permits, and HVHZ-compliant installation in
                  Broward and Palm Beach Counties.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How long does roof replacement take in South Florida?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Most residential roof replacements in South Florida take 3-7 days from tear-off to completion. Timeline
                  varies by roof size, material type, weather conditions, and permit inspection schedules. Asphalt shingle
                  roofs typically take 2-4 days, tile roofs require 4-7 days, metal roofs take 3-5 days, and flat roofs need
                  3-6 days. Permit processing adds 1-3 weeks before work begins.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What is HVHZ certification and why does it matter for roof replacement?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  HVHZ (High Velocity Hurricane Zone) certification means roofing systems are engineered and tested to withstand
                  175+ mph wind speeds. All roof replacements in Broward and Palm Beach Counties must meet HVHZ standards
                  including enhanced fastening schedules, secondary water barriers, and approved materials. Only licensed
                  contractors like All Phase Construction USA (CCC-1331464) can pull permits and install HVHZ-compliant roof
                  systems that protect your home during hurricanes and maintain insurance eligibility.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do I need a permit for roof replacement in Broward or Palm Beach County?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yes, all roof replacements in Broward and Palm Beach Counties require building permits. The permitting process
                  includes engineering drawings, product approvals, NOA (Notice of Acceptance) documentation for HVHZ compliance,
                  and multiple inspections. Licensed contractors handle all permit applications, engineering coordination, and
                  inspection scheduling. Permit costs typically range $500-$2,000 depending on project scope and jurisdiction.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What is the best roofing material for South Florida?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The best roofing material for South Florida depends on your budget, architectural style, and priorities.
                  Concrete tile offers 50+ year lifespan and superior hurricane performance. Metal roofing provides excellent
                  wind resistance, 40-50 year durability, and energy efficiency. Architectural shingles are most affordable with
                  25-30 year warranties. All materials must be HVHZ-rated for Broward and Palm Beach Counties. All Phase
                  Construction USA installs all major roofing systems with manufacturer-backed warranties and proper HVHZ certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Roofing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/roof-replacement-process/" className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Replacement Process</h3>
                <p className="text-sm text-gray-600">Step-by-step guide from contract to final inspection.</p>
              </Link>
              <Link to="/roof-cost-calculator/" className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Cost Calculator</h3>
                <p className="text-sm text-gray-600">Get an instant estimate for your roof replacement.</p>
              </Link>
              <Link to="/pricing-guide/" className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Pricing Guide</h3>
                <p className="text-sm text-gray-600">Detailed cost breakdowns by material and roof size.</p>
              </Link>
              <Link to="/roof-inspection/" className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Free Inspection</h3>
                <p className="text-sm text-gray-600">Professional assessment to determine replacement needs.</p>
              </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <Link to="/shingle-roofing/" className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm">Shingle Roofing</h3>
              </Link>
              <Link to="/tile-roofing/" className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm">Tile Roofing</h3>
              </Link>
              <Link to="/metal-roofing/" className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm">Metal Roofing</h3>
              </Link>
              <Link to="/flat-roofing/" className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm">Flat Roofing</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Replace Your South Florida Roof?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a professional inspection and detailed written estimate from dual-licensed CCC & CGC contractor
              All Phase Construction USA. Free consultations, HVHZ-compliant installation, lifetime workmanship warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7542275605"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (754) 227-5605
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Request Free Estimate
              </a>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              All Phase Construction USA | 590 Goolsby Blvd, Deerfield Beach, FL 33442<br />
              Licensed CCC-1331464 (Roofing Contractor) & CGC-1526236 (General Contractor)
            </p>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    </>
  );
}
