import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';
import { CITY_SERVICE_AREA_SEO_OVERRIDES } from '../config/cityServiceAreaSEO';

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

export default function BocaRatonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // City configuration
  const citySlug = 'boca-raton';
  const cityName = 'Boca Raton';

  // Get SEO data with override system
  const seoOverride = CITY_SERVICE_AREA_SEO_OVERRIDES[citySlug];
  const seoTitle = seoOverride?.title || `Roofer in ${cityName} FL | All Phase Construction USA`;
  const seoDescription = seoOverride?.description || `Licensed roofer in ${cityName} FL providing inspections, repairs, and roof replacement. Dual-licensed, permit-ready, hurricane-rated systems.`;

  // FAQ data for the page
  const faqData = [
    {
      question: 'What is the 25% reroofing rule in Florida?',
      answer: 'The 25% rule under the Florida Building Code states that if more than 25% of a roof area is repaired or replaced within a 12-month period, the entire roofing system may need to be brought into compliance with current code requirements. In Boca Raton and throughout Palm Beach County, this rule is reviewed during permitting to determine whether partial repair or full code compliance is required. Recent updates, including SB 4-D, allow certain repairs to remain limited in scope when structural and underlayment conditions meet code.'
    },
    {
      question: 'What is the average cost for a new roof in Florida?',
      answer: 'Roof replacement costs vary based on material type, roof complexity, and tear-off requirements. In Boca Raton, pricing is influenced by Florida Building Code standards, wind-load requirements, and permitting costs specific to Palm Beach County. Most full roof replacements fall within broad five-figure ranges depending on system selection, decking condition, and upgrade requirements. A professional inspection is required to provide an accurate scope and estimate.'
    },
    {
      question: 'How much does a 2,000 sq ft shingle roof cost?',
      answer: 'A "2,000 sq ft" home does not always equal 2,000 sq ft of roof area, as pitch and design increase actual roofing surface. In Boca Raton, asphalt shingle pricing is typically calculated per roofing square (100 sq ft) and adjusted for tear-off, deck repairs, ventilation upgrades, and code-required enhancements. A field measurement is necessary to determine accurate project cost.'
    },
    {
      question: 'What is the hourly rate for a roofer in Florida?',
      answer: 'Individual worker wages and contractor billing rates are different. While Florida roofer wages often average in the low-to-mid $20s per hour, professional roofing contractors in Boca Raton bill per project rather than hourly. Project pricing includes labor, supervision, insurance, equipment, permitting coordination, inspections, and warranty coverage — all required for compliant installation in Palm Beach County.'
    },
    {
      question: 'Do you handle permits and inspections in Boca Raton?',
      answer: 'Yes. All Phase Construction USA manages the permitting and inspection process for roof repairs and replacements in Boca Raton. We coordinate directly with local building departments to ensure compliance with Florida Building Code requirements and Palm Beach County regulations. This includes submitting documentation, scheduling inspections, and ensuring final approval.'
    },
    {
      question: 'How fast can you inspect a leak?',
      answer: 'We prioritize active leaks and storm-related damage. Call and we will schedule the fastest available inspection slot.'
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
            <span className="text-white">Boca Raton</span>
          </nav>

          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofer in Boca Raton FL
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              All Phase Construction USA | Roofing Contractor Serving Boca Raton, Palm Beach, and Broward County
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                If you're searching for a roofer in Boca Raton FL, you want one thing: a roof that passes inspection, survives storms, and does not turn into a "surprise leak" two months later. That is what we build. As a leading boca raton roofing company with deep local expertise, we understand the unique needs of homes and businesses in this area. Our commitment to quality, customer satisfaction, care, and safety standards sets us apart as a trusted member of the local community.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA is a licensed Florida roofing contractor—fully insured and bonded for your peace of mind. As your neighbors in the Boca Raton community, we value building strong local relationships and supporting our fellow residents. We are proud to have an expert team of professional roofers, and all roofing work is performed by our own employees to ensure consistent quality and reliability. With many years of experience, our team delivers reliable, high-quality workmanship that benefits every customer. Our team takes pride in serving the Boca Raton community and building lasting relationships with our customers.
              </p>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <p className="text-white text-lg mb-2">
                  <strong>Call 24/7:</strong> <a href="tel:+17542275605" className="text-red-500 hover:text-red-400">(754) 227-5605</a>
                </p>
                <p className="text-white text-lg mb-2">
                  <strong>Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442
                </p>
                <p className="text-white text-lg">
                  <strong>Google Rating:</strong> 4.8★ with 137 reviews
                </p>
              </div>

              <p className="text-lg text-zinc-300 leading-relaxed mb-12">
                As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage—crucial for maintaining the safety and comfort of your home. We are proud of our strong BBB rating (A+) and recent positive Google reviews. As licensed and insured roofing contractors, we treat every project with care and attention to detail to ensure your satisfaction. All Phase Construction USA has extensive experience in all types of roofing applications for both residential and commercial properties in Boca Raton and is committed to providing comprehensive roofing solutions tailored to your needs. When choosing a roofer in Boca Raton, always prioritize local, licensed, insured, and bonded contractors with a proven commitment to customer satisfaction and community trust.
              </p>
            </div>

            <PhotoBreak
              src="/step-01-inspection-optimized.jpg"
              alt="Roof inspection in Boca Raton FL documenting conditions before repair or replacement"
              loading="eager"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Boca Raton Homeowners Hire All Phase Construction USA
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                Not a "random crew with a ladder"
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                In Boca Raton, the roof that "looks fine" can still fail the moment wind-driven rain hits a weak transition. That's why we run our jobs like a code-and-inspection system, not a patch-and-pray operation.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Our experienced and trained contractors handle all aspects of roof installation and repair, ensuring every project meets the highest standards. We plan the build, document the condition, pull permits correctly, and execute with specialized crews by roofing system.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Built for permits, inspections, and hurricane reality
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                South Florida roofing is not only about materials. It is about details that pass inspection and hold up when storms start pushing water sideways.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-12">
                Boca Raton weather stresses edges, flashings, valleys, penetrations, and underlayment first. We focus there because that's where roofs usually lose. Our team follows strict safety protocols and ensures all work meets or exceeds safety standards.
              </p>

              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Proof Stack
                </h3>
                <p className="text-zinc-300 text-lg mb-6">Trust is not a slogan. It is receipts you can verify.</p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">BBB A+ rated</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">4.8★ Google rating (137 reviews)</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Dual-licensed: Roofing Contractor CCC-1331464 + General Contractor CGC-1526236</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Manufacturer certifications, including Tamko Platinum Preferred, plus multiple major system credentials</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Specialized crews by system</span>
                  </li>
                </ul>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Certified roofing solutions and quality work are provided to all customers, ensuring every project meets the highest standards.
              </p>

              <p className="text-zinc-300 leading-relaxed mb-6">
                Boca Raton storms create wind-driven rain that exposes weak flashing and underlayment. Different roof types fail in different ways. We assign the right crew to the right system so installs are cleaner, repairs are tighter, and callbacks drop.
              </p>

              <p className="text-zinc-300 leading-relaxed mb-6">
                Shingle crew for shingles. Tile crew for tile. Metal crew for metal. Flat crew for flat systems.
              </p>

              <p className="text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA installs code-compliant roofing systems in Boca Raton.
              </p>

              <p className="text-zinc-300 leading-relaxed mb-4">
                Our team handles permits and inspections for reroof projects.
              </p>
            </div>

            <PhotoBreak
              src="/deck-inspection.jpg"
              alt="Roof deck inspection during Boca Raton roof replacement by All Phase Construction USA"
            />

            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Roofing Company in Boca Raton FL with a "Show-You" Inspection Process
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                Most roof problems are invisible from the driveway. Our inspection is designed to reduce guesswork and help you make a clean decision.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What you get from a real roof inspection:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">Photos of key roof areas (edges, penetrations, valleys, transitions)</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">Clear notes on what is failed vs what is aging</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">A recommendation that matches the roof's condition and your timeline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Repair vs Replacement (how we decide):
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">A roof can be repaired when the system is stable and failures are isolated</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">A roof should be replaced when the system is at end-of-life or failing in multiple zones</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-4xl font-bold text-white mb-8">
                About All Phase Construction USA
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                All Phase Construction USA is a Florida roofing contractor based in Deerfield Beach, serving Boca Raton and the surrounding region with repairs, replacements, and inspections.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                We operate like a builder, not a sales script. You get direct oversight, clear scope, and a roof system designed for South Florida weather.
              </p>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 inline-block">
                <p className="text-zinc-300 text-lg">
                  <strong className="text-white">Find us:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Contractor in Boca Raton FL: What We Do
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We deliver permit-ready, inspection-ready, storm-ready roofing services for residential and commercial properties.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Core Services
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof inspections and leak investigations</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof repair (tile, shingle, metal, flat)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Full roof replacement and reroofing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Storm and hurricane damage assessments</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Preventive maintenance for aging roofs</span>
                </li>
              </ul>

            <div className="mb-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">
                Quick Service Fit Guide
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-5 px-6 text-lg font-semibold text-white">Service</th>
                      <th className="text-left py-5 px-6 text-lg font-semibold text-white">Best for</th>
                      <th className="text-left py-5 px-6 text-lg font-semibold text-red-500">Typical outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                      <td className="py-6 px-6">
                        <span className="text-lg font-medium text-white">Roof inspection</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">Leaks, stains, insurance letters, "something feels off"</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">Photos + options + next steps; well-managed project assessment with attention to detail throughout the project lifecycle</span>
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                      <td className="py-6 px-6">
                        <span className="text-lg font-medium text-white">Roof repair</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">Localized damage, flashing issues, minor storm damage</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">Stop leaks and extend roof life; each repair project is handled with expertise and careful project management</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/50 transition-colors">
                      <td className="py-6 px-6">
                        <span className="text-lg font-medium text-white">Roof replacement</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">Widespread wear, recurring leaks, failed underlayment</span>
                      </td>
                      <td className="py-6 px-6">
                        <span className="text-zinc-300">New system, updated code, warranty; comprehensive project oversight ensures customer satisfaction at every stage</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                What We Typically Find During Boca Raton Roof Inspections
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Boca Raton roofs take heat, UV, salt air, and storm-driven rain. The failures tend to repeat. Depending on the inspection findings, certain repairs or replacements may require more extensive work to address underlying issues. During the roofing process, the old roofing material is often removed to allow for proper installation of the new roof.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">
                Common inspection findings in Boca Raton
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cracked or slipped tiles exposing underlayment</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Nail pops and lifted shingles</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Failed pipe boots and vent flashings</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Valley and wall transition leaks</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roof seam and drainage issues</span>
                </li>
              </ul>
            </div>

            <PhotoBreak
              src="/flashing-details.jpg"
              alt="Flashing detail repair on Boca Raton home to prevent wind-driven rain leaks"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Repair in Boca Raton FL
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                If you need roof repair in Boca Raton, speed matters, but correctness matters more. Even leaving roof damage unaddressed for just one day can lead to more complex problems. A rushed patch often becomes a repeat leak.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Maintaining your roof is essential for ongoing protection against harsh weather and storm damage, especially in South Florida. Premium roofing materials can enhance your home's curb appeal. A comprehensive roofing project includes not only installation but also ongoing maintenance to ensure longevity. Regular maintenance allows homeowners to rest assured that their roof is in good condition, providing peace of mind and long-term security for your home.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Common Repairs We Handle in Boca Raton
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Leak detection and targeted sealing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flashing repair</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tile reset and replacement</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Shingle blow-off repair</span>
                </li>
              </ul>

              <div className="mt-6 bg-gradient-to-r from-red-900/30 to-red-800/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Critical Issue in Boca Raton</h4>
                    <p className="text-zinc-200 leading-relaxed">
                      Wind-driven rain finds weak flashing near roof penetrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <PhotoBreak
              src="/step-06-tearoff.jpg"
              alt="Roof tear-off in progress at Boca Raton residential roofing project"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Replacement in Boca Raton FL
              </h2>

              <h3 className="text-2xl font-bold text-white mb-6">
                Roof replacement in Boca Raton FL: systems, materials, and wind performance
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                A roof replacement is not "just shingles." In South Florida, the system details matter as much as the surface. All Phase Construction USA takes a unique approach to roof replacement by tailoring solutions to each property, ensuring optimal results. Professional installation is crucial to ensure the quality, durability, and energy efficiency of your new roof, providing long-lasting protection for your home. Compared to others, All Phase provides professional roof replacement services that enhance both property value and safety. Quality roofing installation also requires skilled professionals who are familiar with local building codes and regulations.
              </p>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                When selecting roofing materials, it's important to choose options that offer lasting protection and energy efficiency. Metal roofs are known for their exceptional durability and can enhance the strength of your home, providing value for decades. Tile roofing systems are commonly used in South Florida because they withstand harsh weather conditions, while concrete tiles are a top-rated material in Boca Raton, FL, thanks to their impressive 50+ year lifespan. Asphalt shingles remain one of the more affordable roofing options available, making them a popular choice for many homeowners.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-zinc-900/50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-800/80 border-b border-zinc-700">
                      <th className="text-left p-4 text-white font-bold text-lg">Roofing material</th>
                      <th className="text-left p-4 text-white font-bold text-lg">Best for</th>
                      <th className="text-left p-4 text-white font-bold text-lg">Strengths in Boca Raton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 text-red-400 font-semibold">Architectural shingles</td>
                      <td className="p-4 text-zinc-300">Budget-to-mid projects</td>
                      <td className="p-4 text-zinc-300">Fast installs, good value, broad color options</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 text-red-400 font-semibold">Tile (clay or concrete)</td>
                      <td className="p-4 text-zinc-300">Many South FL homes</td>
                      <td className="p-4 text-zinc-300">Long life, strong curb appeal, great heat performance</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 text-red-400 font-semibold">Metal roofing</td>
                      <td className="p-4 text-zinc-300">Storm-focused owners</td>
                      <td className="p-4 text-zinc-300">High wind performance, longevity, energy benefits</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 text-red-400 font-semibold">Flat roofing systems</td>
                      <td className="p-4 text-zinc-300">Commercial and modern homes</td>
                      <td className="p-4 text-zinc-300">Seam control, drainage solutions, durable membranes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed italic">
                High-wind-rated systems are available when appropriate.
              </p>

              <div className="mt-12 space-y-10">
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    160 MPH wind-rated shingles (when it fits the roof)
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    If your home is a good match for shingles, we can spec high wind-rated systems designed for severe weather performance. Ask about wind ratings, fastening patterns, and the full system build, not only the brand name.
                  </p>
                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Warranties and certifications
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Manufacturer certifications can unlock stronger warranty options when the full system is installed to spec. That is one reason certifications matter, beyond the logo.
                  </p>
                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Roof cost in Boca Raton: what drives price
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    Roof pricing in South Florida depends on the roof design and the code requirements, not just square footage. As a leading roofer in Boca Raton FL, we understand the importance of time in project scheduling and timely completion, ensuring your roofing project is completed efficiently and within the agreed timeline. Roofing costs can vary significantly based on the type of roofing service required, such as repairs or replacements. Many roofing companies in Boca Raton offer free estimates to help homeowners understand potential costs. Financing options are available from various roofing contractors to help manage the costs of roofing projects. Homeowners can also work with their insurance companies to cover some of the costs associated with roofing repairs or replacements. The total cost of a roofing project can be influenced by factors such as the size of the roof, the materials used, and the complexity of the installation.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We are committed to transparent pricing, ensuring you receive clear and upfront cost information for your roofing project. A professional quote should always be itemized and specify material brands, labor costs, permit fees, and timelines so you know exactly what to expect.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">
                    Big drivers of roof cost:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Roof size and pitch</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Material choice (shingle vs tile vs metal vs flat)</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Tear-off layers and deck condition</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Permits and inspections</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Ventilation upgrades and flashing complexity</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Hurricane-rated enhancements and fastening requirements</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-4">
                    Realistic Florida price context (ranges, not hype)
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Industry sources commonly cite Florida roof replacement pricing that varies widely by material and scope, and many calculators show higher statewide averages for full replacements on typical homes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Service areas: Boca Raton plus Palm Beach and Broward County
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-8">
                We serve Boca Raton and the surrounding region with the same process: inspect, document, scope, permit, install, and close out clean. Protecting your house with reliable roofing solutions is our priority in every community we serve, ensuring your home and its occupants are safe and secure.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                Palm Beach County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <a href="/locations/boca-raton/" className="text-red-600 hover:text-red-500 transition-colors">Boca Raton</a>, <a href="/locations/delray-beach/" className="text-red-600 hover:text-red-500 transition-colors">Delray Beach</a>, <a href="/locations/boynton-beach/" className="text-red-600 hover:text-red-500 transition-colors">Boynton Beach</a>, <a href="/locations/lake-worth/" className="text-red-600 hover:text-red-500 transition-colors">Lake Worth</a>, <a href="/locations/wellington/" className="text-red-600 hover:text-red-500 transition-colors">Wellington</a>, <a href="/locations/west-palm-beach/" className="text-red-600 hover:text-red-500 transition-colors">West Palm Beach</a>, <a href="/locations/palm-beach-gardens/" className="text-red-600 hover:text-red-500 transition-colors">Palm Beach Gardens</a>, <a href="/locations/jupiter/" className="text-red-600 hover:text-red-500 transition-colors">Jupiter</a>
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                Broward County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <a href="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500 transition-colors">Deerfield Beach</a>, <a href="/locations/pompano-beach/" className="text-red-600 hover:text-red-500 transition-colors">Pompano Beach</a>, <a href="/locations/fort-lauderdale/" className="text-red-600 hover:text-red-500 transition-colors">Fort Lauderdale</a>, <a href="/locations/coral-springs/" className="text-red-600 hover:text-red-500 transition-colors">Coral Springs</a>, <a href="/locations/coconut-creek/" className="text-red-600 hover:text-red-500 transition-colors">Coconut Creek</a>, <a href="/locations/parkland/" className="text-red-600 hover:text-red-500 transition-colors">Parkland</a>, <a href="/locations/oakland-park/" className="text-red-600 hover:text-red-500 transition-colors">Oakland Park</a>, <a href="/locations/sunrise/" className="text-red-600 hover:text-red-500 transition-colors">Sunrise</a>, <a href="/locations/weston/" className="text-red-600 hover:text-red-500 transition-colors">Weston</a>
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">
                County
              </h3>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-800">
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-700">County</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-700">Core cities we serve</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-700">Typical projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-red-600 font-semibold">Palm Beach</td>
                      <td className="px-6 py-4 text-zinc-300">
                        <a href="/locations/boca-raton/" className="text-red-600 hover:text-red-500 transition-colors">Boca Raton</a>, <a href="/locations/delray-beach/" className="text-red-600 hover:text-red-500 transition-colors">Delray</a>, <a href="/locations/boynton-beach/" className="text-red-600 hover:text-red-500 transition-colors">Boynton</a>, <a href="/locations/west-palm-beach/" className="text-red-600 hover:text-red-500 transition-colors">West Palm</a>
                      </td>
                      <td className="px-6 py-4 text-zinc-300">Tile resets, reroofs, leak repairs</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-red-600 font-semibold">Broward</td>
                      <td className="px-6 py-4 text-zinc-300">
                        <a href="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500 transition-colors">Deerfield</a>, <a href="/locations/pompano-beach/" className="text-red-600 hover:text-red-500 transition-colors">Pompano</a>, <a href="/locations/fort-lauderdale/" className="text-red-600 hover:text-red-500 transition-colors">Fort Lauderdale</a>, <a href="/locations/coral-springs/" className="text-red-600 hover:text-red-500 transition-colors">Coral Springs</a>
                      </td>
                      <td className="px-6 py-4 text-zinc-300">Repairs, replacements, commercial systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">
                Florida's "25% rule" and reroof decisions in plain English
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Homeowners ask this nonstop because it affects repair vs replacement.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Florida's older "25% rule" language appears in Florida Building Code references, but SB 4-D revised how this is applied for many roofs. In many cases, when 25% or more is repaired, only that portion must be brought up to current code if the existing roof complies with the 2007 Florida Building Code or later.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                Local enforcement can still vary, so we treat this as a permit-and-inspection conversation, not a guess.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                Palm Beach County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <a href="/locations/boca-raton/" className="text-red-600 hover:text-red-500 transition-colors">Boca Raton</a>, <a href="/locations/delray-beach/" className="text-red-600 hover:text-red-500 transition-colors">Delray Beach</a>, <a href="/locations/boynton-beach/" className="text-red-600 hover:text-red-500 transition-colors">Boynton Beach</a>, <a href="/locations/lake-worth/" className="text-red-600 hover:text-red-500 transition-colors">Lake Worth</a>, <a href="/locations/wellington/" className="text-red-600 hover:text-red-500 transition-colors">Wellington</a>, <a href="/locations/west-palm-beach/" className="text-red-600 hover:text-red-500 transition-colors">West Palm Beach</a>, <a href="/locations/palm-beach-gardens/" className="text-red-600 hover:text-red-500 transition-colors">Palm Beach Gardens</a>, <a href="/locations/jupiter/" className="text-red-600 hover:text-red-500 transition-colors">Jupiter</a>
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                Broward County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <a href="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500 transition-colors">Deerfield Beach</a>, <a href="/locations/pompano-beach/" className="text-red-600 hover:text-red-500 transition-colors">Pompano Beach</a>, <a href="/locations/fort-lauderdale/" className="text-red-600 hover:text-red-500 transition-colors">Fort Lauderdale</a>, <a href="/locations/coral-springs/" className="text-red-600 hover:text-red-500 transition-colors">Coral Springs</a>, <a href="/locations/coconut-creek/" className="text-red-600 hover:text-red-500 transition-colors">Coconut Creek</a>, <a href="/locations/parkland/" className="text-red-600 hover:text-red-500 transition-colors">Parkland</a>, <a href="/locations/oakland-park/" className="text-red-600 hover:text-red-500 transition-colors">Oakland Park</a>, <a href="/locations/sunrise/" className="text-red-600 hover:text-red-500 transition-colors">Sunrise</a>, <a href="/locations/weston/" className="text-red-600 hover:text-red-500 transition-colors">Weston</a>
              </p>
            </div>

            <PhotoBreak
              src="/step-09-installed.jpg"
              alt="Completed residential roof installation in Boca Raton FL by All Phase Construction USA"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                FAQ
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

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Schedule a Roof Inspection
              </h2>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                If you need a roofer in Boca Raton FL, start with an inspection that shows you what is happening and what it costs to fix correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call All Phase Construction USA 24/7: (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
