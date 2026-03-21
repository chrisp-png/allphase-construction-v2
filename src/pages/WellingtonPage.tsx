import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

interface PhotoBreakProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

function PhotoBreak({ src, alt, loading = 'lazy' }: PhotoBreakProps) {
  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg hover:border-zinc-700 transition-all duration-300">
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default function WellingtonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // City configuration
  const citySlug = 'wellington';
  const cityName = 'Wellington';

  // SEO metadata
  const seoTitle = 'Wellington Roof Replacement | Tile & Metal Roofing | All Phase USA';
  const seoDescription = 'Wellington roof replacement specialist. Tile & metal roofing for estates & equestrian communities. HVHZ-certified, dual-licensed. Free estimate. (754) 227-5605.';

  // FAQ data for the page
  const faqData = [
    {
      question: 'How much does a roof replacement cost in Wellington, FL?',
      answer: 'Costs vary based on home size, roofing material, and repairs needed. Tile costs more than shingles or metal. We offer a free on-site estimate and an online calculator to help you budget.'
    },
    {
      question: 'Does All Phase Construction USA handle insurance claims for storm damage in Wellington?',
      answer: 'Yes, we do. We work with homeowners and insurance adjusters across Palm Beach County. Our 21-point inspection documents damage. We provide reports to support your claim.'
    },
    {
      question: 'How do I know if I need a roof repair or a full roof replacement?',
      answer: 'It depends on roof age, damage, and material. Minor issues often get repaired cheaply. If your roof is over 15-20 years old or has major damage, full replacement usually makes sense. We give you an honest assessment for free.'
    },
    {
      question: 'Are you licensed to work in Wellington and Palm Beach County?',
      answer: 'Yes. We hold a Florida Certified Roofing Contractor license (CCC-1331464) and a CGC license (CGC-1526236). Both are active in Palm Beach County, including Wellington. Our dual-license means we handle roofing and structural work under one contract and warranty.'
    },
    {
      question: 'What roofing materials work best for homes in Wellington, FL?',
      answer: 'Wellington\'s climate demands durable materials. Concrete and clay tile last long and look great. Metal roofing resists wind better and saves energy. Shingles cost less and perform well when installed to code.'
    }
  ];

  // Generate schemas
  const coordinates = getCityCoordinates(cityName);
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: cityName,
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '137'
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations' },
    { name: cityName, url: `https://allphaseconstructionfl.com/locations/${citySlug}` }
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/locations/${citySlug}`}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#09090b]">
        <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Wellington</span>
          </nav>

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Wellington Roof Replacement — Tile & Metal Specialists
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Dual-Licensed. Storm-Ready. Serving the Equestrian Capital of Florida.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg text-center"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Section 1 - Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Wellington is a growing village with unique roofing needs. All Phase Construction USA is dual-licensed with deep local expertise. We serve Wellington, Palm Beach, and all of Palm Beach County. We work with homes and businesses in Olympia, Versailles, Southfields, Binks Forest, and Palm Beach Point.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We're here for the long haul. We want you happy on every project. With over 20 years in Wellington, we hold two licenses. That's a Florida Certified Roofing Contractor license (CCC-1331464) and a CGC license (CGC-1526236). This gives us roofing and structural expertise other contractors can't match.
              </p>
            </div>

            {/* Section 2 - Introduction to Our Company */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Introduction to Our Company
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We take pride in serving Wellington's homeowners and businesses. Our team delivers quality work on every job. We understand what Wellington needs. We protect estates near the equestrian showgrounds. We safeguard homes along the National Polo Center.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We handle <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repairs</Link>, <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">new roofs</Link>, and full <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacements</Link>. We guide you every step. Trust us to keep your home safe and looking great all year.
              </p>
            </div>

            {/* Section 3 - The Dual-License Advantage */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Dual-License Advantage for Wellington Properties
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Our CGC license allows us to evaluate and repair your roof's structure. On every Wellington <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, we inspect the deck and fasteners. We check the trusses. We verify all connections are right. We make sure the system meets <Link to="/how-to-hire-roofing-contractor" className="text-red-500 hover:text-red-400 underline transition-colors">Florida Building Code</Link> standards.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                If we find structural problems, we fix them right away. Your project stays on schedule. One warranty covers it all. This matters most for Wellington's big estates in Southfields and Palm Beach Point. Their roofs are complex and need careful attention.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Regular inspections stop small problems from growing into big ones. We help Wellington owners protect their homes before costs get high.
              </p>
            </div>

            <PhotoBreak
              src="/step-01-inspection-optimized.jpg"
              alt="Professional roof inspection in Wellington FL by All Phase Construction USA"
              loading="eager"
            />

            {/* Section 4 - Hurricane Wind Zone Compliance */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Palm Beach County Wind Mitigation for Wellington Homes
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Wellington is in Palm Beach County's High-Wind Zone. Roofs must meet strict wind codes. Every roof we install handles strong winds and impacts. You'll be ready for hurricane season.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We use code-approved fasteners and underlayments. Your warranty stays good. Your home stays safe in storms. Wellington homeowners can get <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">wind mitigation</Link> reports to lower insurance costs.
              </p>
            </div>

            {/* Section 5 - Local Expertise */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Understanding Wellington's Unique Roofing Needs
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Wellington is special. It's the "Winter Equestrian Capital of the World." Wealthy owners want the best materials and careful work. Communities like Olympia, Versailles, and Southfields have big homes with <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofs</Link> and fine details. They need contractors who know the look and code.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We know Wellington's building department and permit process well. We've handled estates in Palm Beach Point and homes near the Mall at Wellington Green. We have the local knowledge to do it right.
              </p>
            </div>

            <PhotoBreak
              src="/deck-inspection.jpg"
              alt="Roof deck inspection during Wellington roof replacement"
            />

            {/* Section 6 - Comprehensive Roofing Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Comprehensive Roofing Services in Wellington, FL
              </h2>

              {/* Roof Replacement */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Roof Replacement</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Heat, humidity, and storms take their toll. Full replacement is often best. We handle the full <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement process</Link> — permits, materials, installation, and final check. We work with <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, and <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingles</Link>. Our dual-license means we handle repairs in-house with no delays.
                </p>
              </div>

              {/* Emergency Repairs */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Emergency Repairs</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Storm damage won't wait. We offer emergency repairs across Wellington and Palm Beach County. Wind damage near the Preserve or a fallen limb in Binks Forest? We respond fast to protect your home and document damage for insurance.
                </p>
              </div>

              {/* Professional Inspections */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Inspections</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Our <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">21-point roof inspections</Link> give you what you need. For insurance, pre-purchase checks, or maintenance. An inspection is your first step. You'll know your roof's condition and plan ahead.
                </p>
              </div>

              {/* All Roof Types */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">All Roof Types</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  We handle all roof types. Concrete and clay <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>, standing seam <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, flat systems, and <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingles</Link>. We have the crew, licenses, and certifications to do it right.
                </p>
              </div>
            </div>

            {/* Section 7 - Metal Roofing */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Metal Roofing Options for Wellington Homes
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Metal roofing is popular in Wellington. It lasts long and saves energy. It resists bad weather. We offer many <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing choices</Link> — standing seam, panels, and shingles. You pick the style and level you want.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                We use quality materials from trusted makers. Your new roof lasts and resists storms. Our team helps you pick the right metal roof for your budget and style. You get peace of mind and great curb appeal.
              </p>
            </div>

            <PhotoBreak
              src="/flashing-details.jpg"
              alt="Professional flashing installation on Wellington home"
            />

            {/* Section 8 - Commercial Roofing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Commercial Roofing Services in Wellington, FL
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Wellington businesses need reliable roofs with minimal disruption. Retail near the Mall, offices throughout the village. Our <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> covers repairs, replacements, new roofs, and maintenance.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                We work with each client to build a custom plan. We fit your schedule and budget. Your property stays safe and working. We help you maintain roofs well.
              </p>
            </div>

            {/* Section 9 - Roofing Process */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Roofing Process — Simple, Transparent, Stress-Free
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                From start to finish, we make roofing simple. We inspect your property. We give you a custom estimate. We walk you through each step. Material picks, permits, scheduling, and final checks. We keep you updated.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Our goal is to complete every Wellington project on time, within budget, and to your total satisfaction. With our dual-license advantage, structural repairs are handled in-house with no delays, no subcontractors, and no surprises.
              </p>
            </div>

            <PhotoBreak
              src="/step-06-tearoff.jpg"
              alt="Roof tear-off in progress at Wellington property"
            />

            {/* Section 10 - Reviews */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                What Wellington Homeowners Say
              </h2>

              <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-lg p-6 text-center">
                <p className="text-zinc-300 text-lg">
                  <strong className="text-white">Google Rating:</strong> 4.8★ based on 137 verified reviews
                </p>
                <p className="text-zinc-400 text-sm mt-2">
                  Read our authentic Google reviews to learn about Wellington homeowners' experiences with All Phase Construction USA
                </p>
              </div>
            </div>

            {/* Section 11 - FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Frequently Asked Questions — Roofing in Wellington, FL
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
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

            <PhotoBreak
              src="/step-09-installed.jpg"
              alt="Completed roof installation in Wellington FL"
            />

            {/* Section 13 - Closing CTA */}
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started in Wellington?
              </h2>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                Storm damage? Need a new roof? Want an inspection? We're ready. We serve all Wellington communities. Olympia, Versailles, Palm Beach Point, Southfields. Homeowners trust our dual-license expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
                >
                  Get Your Free Estimate
                </Link>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Also Serving Nearby Communities:</h3>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  <Link to="/boynton-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link> | <Link to="/boca-raton" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link> | <Link to="/west-palm-beach" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link> | <Link to="/fort-lauderdale" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
