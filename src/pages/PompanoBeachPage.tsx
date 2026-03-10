import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PompanoBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Pompano Beach Roofing Contractor | All Phase USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor in Pompano Beach, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor in Pompano Beach, FL. HVHZ-compliant metal, tile, shingle & flat roofing. Free inspections.';
      document.head.appendChild(meta);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://allphaseconstructionfl.com/locations/pompano-beach');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://allphaseconstructionfl.com/locations/pompano-beach';
      document.head.appendChild(link);
    }

    const coords = getCityCoordinates('pompano-beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      city: 'Pompano Beach',
      slug: 'pompano-beach',
      description: 'Dual-licensed roofing contractor serving Pompano Beach since 2006. HVHZ certified, salt air coastal specialists.',
      coordinates: coords
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Locations', url: 'https://allphaseconstructionfl.com/locations' },
      { name: 'Pompano Beach', url: 'https://allphaseconstructionfl.com/locations/pompano-beach' }
    ]);

    const existingSchemas = document.querySelectorAll('script[data-city-schema]');
    existingSchemas.forEach(s => s.remove());

    const schemaScript1 = document.createElement('script');
    schemaScript1.type = 'application/ld+json';
    schemaScript1.setAttribute('data-city-schema', 'true');
    schemaScript1.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(schemaScript1);

    const schemaScript2 = document.createElement('script');
    schemaScript2.type = 'application/ld+json';
    schemaScript2.setAttribute('data-city-schema', 'true');
    schemaScript2.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(schemaScript2);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How close are you to Pompano Beach?", "acceptedAnswer": { "@type": "Answer", "text": "Our headquarters is at 590 Goolsby Blvd in Deerfield Beach — minutes from Pompano Beach. We offer same-day response for emergencies throughout Pompano Beach and all of Broward County." }},
        { "@type": "Question", "name": "Do you handle salt air corrosion damage on Intracoastal properties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — waterfront and canal-adjacent properties in Hillsboro Shores, Cypress Harbor, Snug Harbor, and Garden Isles are a specialty. We assess existing corrosion damage and specify materials engineered for constant salt air exposure." }},
        { "@type": "Question", "name": "What are Pompano Beach HVHZ roofing requirements?", "acceptedAnswer": { "@type": "Answer", "text": "Every roofing installation in Pompano Beach must meet Broward County HVHZ standards — 175+ mph wind resistance, HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections." }},
        { "@type": "Question", "name": "Do you work with insurance companies for storm damage claims?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — comprehensive photo documentation, damage assessments, and detailed repair estimates. We meet with adjusters on-site and have nearly two decades of experience navigating Florida storm damage claims." }},
        { "@type": "Question", "name": "What roofing materials work best in Pompano Beach coastal environment?", "acceptedAnswer": { "@type": "Answer", "text": "Standing seam metal with Kynar coatings, concrete tile with protective sealants, and impact-resistant shingles rated for coastal environments." }}
      ]
    };
    const schemaScript3 = document.createElement('script');
    schemaScript3.type = 'application/ld+json';
    schemaScript3.setAttribute('data-city-schema', 'true');
    schemaScript3.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(schemaScript3);
  }, []);

  const faqs = [
    {
      question: 'How close are you to Pompano Beach?',
      answer: 'Our headquarters is at 590 Goolsby Blvd in Deerfield Beach — minutes from Pompano Beach. We offer same-day response for emergencies throughout Pompano Beach and all of Broward County.'
    },
    {
      question: 'Do you handle salt air corrosion damage on Intracoastal properties?',
      answer: 'Yes — waterfront and canal-adjacent properties in Hillsboro Shores, Cypress Harbor, Snug Harbor, and Garden Isles are a specialty. We assess existing corrosion damage and specify materials engineered for constant salt air exposure.'
    },
    {
      question: 'What are Pompano Beach HVHZ roofing requirements?',
      answer: 'Every roofing installation in Pompano Beach must meet Broward County High Velocity Hurricane Zone standards — 175+ mph wind resistance, HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections. All Phase handles all permitting and HVHZ compliance documentation.'
    },
    {
      question: 'Do you work with insurance companies for storm damage claims?',
      answer: 'Yes — comprehensive photo documentation, damage assessments, and detailed repair estimates. We meet with adjusters on-site and have nearly two decades of experience navigating Florida storm damage claims.'
    },
    {
      question: 'What roofing materials work best in Pompano Beach coastal environment?',
      answer: 'Standing seam metal with Kynar coatings, concrete tile with protective sealants, and impact-resistant shingles rated for coastal environments. We guide every Pompano Beach customer toward materials proven to withstand both salt air corrosion and HVHZ wind loads.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 flex items-center gap-1"><Home className="w-3 h-3" />Home</Link>
            <span>/</span>
            <Link to="/locations" className="hover:text-red-600">Service Areas</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Pompano Beach</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              <span>Dual-Licensed CCC-1331464 | CGC-1526236</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Roofing Contractor in Pompano Beach, FL</h1>
            <p className="text-xl text-gray-300 mb-8">All Phase Construction USA brings over 20 years of roofing excellence to Pompano Beach, serving residential and commercial property owners throughout Broward County. As a dual-licensed roofing contractor (CCC-1331464) and general contractor (CGC-1526236), we deliver comprehensive roofing solutions that meet South Florida's demanding building codes and withstand our region's intense weather conditions.</p>
            <p className="text-lg text-gray-300 mb-8">Operating from our Deerfield Beach headquarters, our team of certified roofing professionals serves Pompano Beach with a complete range of services including new roof installations, roof replacements, emergency repairs, preventative maintenance, and thorough inspections. We specialize in tile, shingle, metal, and flat roofing systems, with particular expertise in HVHZ (High Velocity Hurricane Zone) installations that provide maximum protection for coastal properties.</p>
            <p className="text-lg text-gray-300 mb-8">Every project we undertake in Pompano Beach reflects our commitment to craftsmanship, transparency, and customer satisfaction. From your initial consultation through final inspection and beyond, we maintain clear communication, respect your property, and deliver results that exceed expectations.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:7542275605" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />(754) 227-5605
              </a>
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Get Free Inspection <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* Dual License Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Dual-License Advantage for Pompano Beach Properties</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Most Pompano Beach roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. That means delays, split warranties, and cost overruns.</p>
              <p className="text-gray-700 text-lg leading-relaxed">All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability. We inspect deck fastening patterns, assess truss integrity, verify roof-to-wall connections, and confirm full Florida Building Code compliance before the first new material goes down.</p>
            </section>

            {/* Salt Air Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Salt Air and Coastal Corrosion Expertise</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Pompano Beach properties face dual salt air exposure — from the Atlantic Ocean to the east and the Intracoastal Waterway running through the city. Constant salt air accelerates fastener corrosion, flashing degradation, and underlayment failure on any roofing system not specifically specified for coastal environments.</p>
              <p className="text-gray-700 text-lg leading-relaxed">We specify salt-resistant, high-performance materials proven in Pompano Beach's demanding conditions. The Hillsboro Inlet Lighthouse, built in 1907, has stood at the northern tip of Pompano Beach for over a century — a reminder of how long coastal exposure has been the defining environmental challenge for every structure on this coastline.</p>
            </section>

            {/* HVHZ Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">HVHZ Compliance for Pompano Beach</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Pompano Beach is located in Broward County's High Velocity Hurricane Zone. Every roof installation must be engineered for 175+ mph wind resistance with HVHZ-approved materials, enhanced fastening schedules, and engineered roof-to-wall connections.</p>
              <p className="text-gray-700 text-lg leading-relaxed">Our dual licensure enables us to engineer the complete roofing system — surface and structure — for full HVHZ compliance in a single project. We handle all Broward County permitting and HVHZ compliance documentation in-house, preventing the delays that plague contractors unfamiliar with local requirements.</p>
            </section>

            {/* Neighborhoods Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All Pompano Beach Communities</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">All Phase Construction USA serves the full range of Pompano Beach neighborhoods. Hillsboro Shores and Cypress Harbor offer waterfront properties with direct Intracoastal exposure requiring salt-resistant specifications. Snug Harbor and Garden Isles are established canal-front communities where aging housing stock is entering replacement cycles. Boulevard Park Isles and Santa Barbara Estates represent mid-century residential areas with significant deferred maintenance.</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Palm Aire's golf course community demands HOA-compliant tile and metal installations. Cresthaven and the Highlands offer family neighborhoods with 1970s-80s construction. Old Pompano and Downtown Pompano Beach are experiencing revitalization with both residential and commercial roofing demand.</p>
              <p className="text-gray-700 text-lg leading-relaxed">Shipwreck Park's 17 artificial reefs and the Fisher Family Pier reflect the city's deep connection to the Atlantic — the same ocean exposure that makes coastal-grade roofing non-negotiable throughout Pompano Beach. The Bailey Contemporary Arts Center anchors a growing downtown arts district where commercial roofing demand continues to grow.</p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Roofing Services in Pompano Beach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <Home className="w-6 h-6" />, title: 'Residential Roofing', desc: 'Complete replacement and repair for all Pompano Beach home types. Tile, shingle, metal, and flat systems. HOA approval coordination for Palm Aire and golf communities.' },
                  { icon: <Building2 className="w-6 h-6" />, title: 'Commercial Roofing', desc: 'Flat, TPO, modified bitumen, and standing seam metal for Pompano Beach commercial properties. Energy-efficient systems for Broward County properties.' },
                  { icon: <Wrench className="w-6 h-6" />, title: 'Roof Repair', desc: 'Emergency and scheduled repairs for leaks, storm damage, salt air corrosion damage, and aging material failures. 24/7 response for active leaks.' },
                  { icon: <Shield className="w-6 h-6" />, title: 'Inspections & Permitting', desc: '21-point inspections for insurance claims, pre-purchase evaluations, and post-storm documentation. All Broward County permitting handled in-house.' }
                ].map((service, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-red-600 mb-3">{service.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Pompano Beach Customers Say</h2>
              <div className="space-y-6">
                {[
                  { text: 'Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!', author: 'Michael R.', location: 'Pompano Beach Homeowner' },
                  { text: 'We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship.', author: 'Jennifer L.', location: 'Broward County' },
                  { text: 'All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience.', author: 'David S.', location: 'Commercial Property Owner' }
                ].map((review, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}</div>
                    <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                    <p className="font-semibold text-gray-900">— {review.author}, <span className="text-gray-600 font-normal">{review.location}</span></p>
                  </div>
                ))}
              </div>
            </section>

            {/* Roof Replacement Cost Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Roof Replacement Cost in Pompano Beach (2026)</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Pompano Beach roof replacement costs reflect HVHZ material requirements, coastal-grade specifications, and Broward County permitting fees. The following estimates are based on a typical 2,000 sq ft home with standard roof complexity.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { material: 'Asphalt Shingles', range: '$12,000 – $18,000', note: 'Class H rated, 130+ mph wind resistance' },
                  { material: 'Concrete/Clay Tile', range: '$22,000 – $38,000', note: 'Engineered attachment for coastal HVHZ' },
                  { material: 'Standing Seam Metal', range: '$25,000 – $42,000', note: 'Kynar-coated for salt air protection' },
                  { material: 'Flat Roof (TPO/Mod Bit)', range: '$16,000 – $30,000', note: 'Commercial and low-slope residential' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-1">{item.material}</h3>
                    <p className="text-red-600 font-semibold text-lg">{item.range}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">Costs include HVHZ-compliant materials, permits, engineering calculations, and installation. Coastal properties near the Intracoastal or Atlantic may require upgraded fasteners and coatings, adding 5–15% to the total. Use our <Link to="/roof-cost-calculator/" className="text-red-600 hover:text-red-500 font-medium">free roof cost calculator</Link> for a personalized estimate, or call <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 font-medium">(754) 227-5605</a> for an on-site assessment.</p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-900 text-white rounded-xl p-8 sticky top-6">
              <h3 className="text-xl font-bold mb-2">Free Pompano Beach Roof Inspection</h3>
              <p className="text-gray-300 text-sm mb-6">Same-day response available. Licensed in Broward County.</p>
              <a href="tel:7542275605" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors mb-4">
                <Phone className="w-5 h-5" />(754) 227-5605
              </a>
              <Link to="/contact" className="w-full bg-white text-gray-900 hover:bg-gray-100 py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Request Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Licensed CCC-1331464 | CGC-1526236</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>HVHZ 175+ mph Certified</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Serving Pompano Beach Since 2006</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>24/7 Emergency Response</span></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link to="/roof-repair/pompano-beach" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"><ArrowRight className="w-4 h-4" />Pompano Beach Roof Repair</Link>
                <Link to="/roof-inspection/pompano-beach" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"><ArrowRight className="w-4 h-4" />Pompano Beach Roof Inspection</Link>
                <Link to="/metal-roofing" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"><ArrowRight className="w-4 h-4" />Metal Roofing</Link>
                <Link to="/tile-roofing" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"><ArrowRight className="w-4 h-4" />Tile Roofing</Link>
                <Link to="/flat-roofing" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"><ArrowRight className="w-4 h-4" />Flat Roofing</Link>
              </div>
            </div>

            <EmbeddedRoofCalculator />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Free Pompano Beach Roof Inspection?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">Serving all of Pompano Beach from our Deerfield Beach headquarters since 2006. Licenses CCC-1331464 | CGC-1526236.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7542275605" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
              <Phone className="w-5 h-5" />Call (754) 227-5605
            </a>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-red-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
              Request Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
