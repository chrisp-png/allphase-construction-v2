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
  const seoTitle = 'Wellington Roofer | All Phase Construction USA';
  const seoDescription = 'All Phase Construction USA is a dual-licensed roofing contractor serving Wellington, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair.';

  // FAQ data for the page
  const faqData = [
    {
      question: 'How much does a roof replacement cost in Wellington, FL?',
      answer: 'The cost of a roof replacement in Wellington varies based on home size, roofing material, and any structural repairs needed. Tile roofing typically costs more than shingle or metal. All Phase Construction USA offers a free on-site estimate and an online roof cost calculator to help you plan your budget.'
    },
    {
      question: 'Does All Phase Construction USA handle insurance claims for storm damage in Wellington?',
      answer: 'Yes. We work directly with homeowners and their insurance adjusters throughout Palm Beach County. Our team documents all storm damage during our 21-point inspection and provides detailed reports to support your claim.'
    },
    {
      question: 'How do I know if I need a roof repair or a full roof replacement?',
      answer: 'It depends on the age of your roof, extent of damage, and roofing material. Minor issues can often be repaired cost-effectively, but if your roof is over 15-20 years old or has widespread damage, a full replacement is usually the smarter long-term investment. Our free inspection gives you an honest assessment.'
    },
    {
      question: 'Are you licensed to work in Wellington and Palm Beach County?',
      answer: 'Yes. All Phase Construction USA holds a Florida Certified Roofing Contractor license (CCC-1331464) and a Certified General Contractor license (CGC-1526236), both active and valid throughout Palm Beach County including Wellington. Our dual-license means we handle roofing and structural work under one contract and one warranty.'
    },
    {
      question: 'What roofing materials work best for homes in Wellington, FL?',
      answer: 'Wellington\'s climate demands materials built for South Florida conditions. Concrete and clay tile are popular for longevity and curb appeal. Metal roofing offers superior wind resistance and energy efficiency. Architectural shingles provide a cost-effective option with good storm performance when installed to Florida Building Code standards.'
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
              Wellington's Trusted Roofing Contractor
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
                Wellington, FL is a rapidly growing village that requires durable roofing solutions tailored to its unique climate. All Phase Construction USA is a dual-licensed roofing contractor with unmatched structural authority, proudly serving Wellington, Palm Beach, and the greater Palm Beach County area. Our expertise in this region allows us to deliver high-quality roofing services to both commercial and residential customers, including homeowners in communities like Olympia, Versailles, Southfields, Binks Forest, and Palm Beach Point.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We are dedicated to building long-term relationships with our customers and strive to achieve complete customer satisfaction on every project. With over twenty years of experience serving the Wellington community, we hold both a Florida Certified Roofing Contractor license (CCC-1331464) and a Certified General Contractor license (CGC-1526236) — providing comprehensive roofing and structural expertise that standard roofing contractors simply cannot match.
              </p>
            </div>

            {/* Section 2 - Introduction to Our Company */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Introduction to Our Company
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                At All Phase Construction USA, we take pride in delivering exceptional roofing services to homeowners and businesses throughout Wellington, FL. Our experienced team is dedicated to providing top-quality workmanship and ensuring complete customer satisfaction on every project. We understand the unique roofing needs of Wellington residents — from protecting estate homes near the Wellington International equestrian showgrounds to safeguarding luxury communities along the National Polo Center corridor.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Whether you require a <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline transition-colors">roof repair</Link>, <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">new roof</Link>, or a full <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, our team will guide you through every step of the process. Trust our expertise to keep your Wellington property safe, secure, and looking its best year-round.
              </p>
            </div>

            {/* Section 3 - The Dual-License Advantage */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Dual-License Advantage for Wellington Properties
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete structural system supporting your roof. During every Wellington <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, we inspect roof deck fastening, assess truss integrity, verify proper connections between the roof structure and exterior walls, and ensure the entire system meets current <Link to="/how-to-hire-roofing-contractor" className="text-red-500 hover:text-red-400 underline transition-colors">Florida Building Code</Link> requirements.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                When we identify structural deficiencies, we repair them immediately — keeping your project on schedule under one comprehensive warranty. This is especially critical for Wellington's larger estate properties in communities like Southfields and Palm Beach Point, where roof systems are more complex and require a higher level of structural oversight.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Routine inspections and maintenance are crucial for preventing small issues from escalating into costly repairs. Our comprehensive approach helps Wellington property owners protect their investment before minor problems become major expenses.
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
                Wellington sits in Palm Beach County's High-Wind Zone, where roofing systems must be engineered and installed to meet strict Florida Building Code wind resistance standards. Every roof we install in Wellington is designed to handle the sustained winds and impact conditions that South Florida homeowners face each hurricane season.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Our installation teams use FBC-approved fastening patterns, code-compliant underlayments, and manufacturer-certified installation methods that preserve your warranty and protect your home when storms hit. For homeowners in Wellington's equestrian communities and estate neighborhoods, we also provide <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">wind mitigation</Link> reports that can significantly reduce your homeowner's insurance premiums.
              </p>
            </div>

            {/* Section 5 - Local Expertise */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Understanding Wellington's Unique Roofing Needs
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Wellington is unlike any other South Florida community. As the recognized "Winter Equestrian Capital of the World," it attracts high-net-worth seasonal and year-round residents who demand premium materials and meticulous workmanship. The village's upscale residential communities — including Olympia, Versailles, and Southfields — feature larger homes, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</Link> systems, and architectural details that require experienced contractors who understand the local aesthetic and code requirements.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We know Wellington's building department, permit process, and inspection requirements inside and out. From the rural equestrian estates of Palm Beach Point to the Mediterranean-style homes near the Mall at Wellington Green, All Phase Construction USA has the local knowledge and licensing to handle every roofing project the right way.
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
                  When Wellington's extreme heat, humidity, and storm exposure take their toll, a full roof replacement is often the most cost-effective long-term solution. All Phase Construction USA manages the entire <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement process</Link> — from permit pulling and material selection to installation and final inspection. We work with all major roofing systems including <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, and <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingle</Link>, and our dual-license means structural repairs are handled in-house without delays or subcontractors.
                </p>
              </div>

              {/* Emergency Repairs */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Emergency Repairs</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Storm damage doesn't wait for business hours. All Phase Construction USA provides emergency roof repair services throughout Wellington and Palm Beach County. Whether you've experienced wind damage near the Wellington Environmental Preserve or a fallen limb in Binks Forest, our team responds quickly to protect your home and document damage for your insurance claim.
                </p>
              </div>

              {/* Professional Inspections */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Inspections</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Our comprehensive <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">21-point roof inspections</Link> give Wellington homeowners the documentation they need — whether for insurance purposes, pre-purchase evaluations, or routine maintenance assessments. A thorough inspection is the first step to understanding your roof's condition and planning ahead.
                </p>
              </div>

              {/* All Roof Types */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">All Roof Types</h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  We install and repair all major roofing systems common to Wellington's residential and commercial properties — including concrete and clay <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>, standing seam <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, flat/low-slope systems, and architectural <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingles</Link>. Whatever your home or building requires, we have the crew, the licensing, and the manufacturer certifications to do it right.
                </p>
              </div>
            </div>

            {/* Section 7 - Metal Roofing */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Metal Roofing Options for Wellington Homes
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Metal roofing has become an increasingly popular choice for Wellington homes, thanks to its outstanding durability, energy efficiency, and ability to withstand severe weather conditions. We offer a variety of <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing options</Link> — including standing seam, corrugated panels, and metal shingles — allowing homeowners to select the perfect style and performance level for their property.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                We use only high-quality materials from trusted manufacturers, ensuring your new metal roof delivers long-lasting protection and superior resistance to storm damage. Our experienced team will help you choose the best metal roofing solution to match your budget and aesthetic preferences, so you can enjoy peace of mind and enhanced curb appeal for years to come.
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
                We understand that Wellington businesses — from retail centers near the Mall at Wellington Green to professional offices throughout the village — need reliable roofing solutions that minimize disruption and protect their investments. Our <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> services cover everything from repair and replacement to new installation and ongoing maintenance.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Our team works closely with each commercial client to develop a customized plan that fits your schedule and budget, ensuring your property remains safe and operational. With a full range of commercial roofing services and a commitment to quality workmanship, we help Wellington businesses maintain their roofs efficiently and effectively.
              </p>
            </div>

            {/* Section 9 - Roofing Process */}
            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Roofing Process — Simple, Transparent, Stress-Free
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                From your initial consultation to final inspection, All Phase Construction USA makes the roofing process straightforward for Wellington homeowners and business owners. Our team conducts a thorough on-site inspection and provides a detailed estimate tailored to your specific needs. We walk you through every step — material selection, permitting, installation scheduling, and final walkthrough — keeping you informed with regular updates throughout.
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
                  <strong className="text-white">Google Rating:</strong> 4.8â based on 137 verified reviews
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
                Whether you're dealing with storm damage, planning a roof replacement, or simply want a professional inspection, All Phase Construction USA is ready to help. We serve all of Wellington's communities — from Olympia and Versailles to Palm Beach Point and Southfields — with the dual-licensed expertise that South Florida's most discerning homeowners trust.
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
