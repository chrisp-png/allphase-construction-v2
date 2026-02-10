import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function BocaRatonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Roofer in Boca Raton FL | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofer in Boca Raton FL providing inspections, repairs, and roof replacement. Dual-licensed, permit-ready, hurricane-rated systems.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofer in Boca Raton FL providing inspections, repairs, and roof replacement. Dual-licensed, permit-ready, hurricane-rated systems.';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Boca Raton');

    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Boca Raton',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.8',
        reviewCount: '137'
      }
    });

    const faqs = [
      {
        question: 'What is the 25% reroofing rule in Florida?',
        answer: 'It refers to code language about how much of a roof can be repaired or replaced within a 12-month period before additional code compliance may be required. SB 4-D revised application for many roofs, often allowing compliance work to be limited to the repaired portion when conditions are met.'
      },
      {
        question: 'What is the average cost for a new roof in Florida?',
        answer: 'It varies heavily by material and scope. Statewide averages published by remodeling and roofing cost sources commonly show broad ranges, with full replacements on typical homes often landing in the tens of thousands depending on system choice and tear-off needs.'
      },
      {
        question: 'How much does a 2,000 sq ft shingle roof cost?',
        answer: '"2,000 sq ft" can mean home size, not roof area, so pricing needs a measurement. Many pricing references estimate asphalt systems by cost per square foot or per square (100 sq ft), then adjust for pitch, tear-off, deck work, and code items.'
      },
      {
        question: 'What is the hourly rate for a roofer in Florida?',
        answer: 'Worker pay and contractor billing are different numbers. Wage datasets and salary aggregators often show Florida roofer wages around the low-to-mid $20s per hour on average, but contractor labor billed to a job is typically higher because it includes overhead, insurance, supervision, and warranty risk.'
      },
      {
        question: 'Do you handle permits and inspections in Boca Raton?',
        answer: 'Yes. We manage permits and coordinate inspections as part of a proper reroof process.'
      },
      {
        question: 'How fast can you inspect a leak?',
        answer: 'We prioritize active leaks and storm-related damage. Call and we will schedule the fastest available inspection slot.'
      }
    ];

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

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations' },
      { name: 'Boca Raton', url: 'https://allphaseconstructionfl.com/locations/boca-raton' }
    ]);

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, []);

  const faqData = [
    {
      question: 'What is the 25% reroofing rule in Florida?',
      answer: 'It refers to code language about how much of a roof can be repaired or replaced within a 12-month period before additional code compliance may be required. SB 4-D revised application for many roofs, often allowing compliance work to be limited to the repaired portion when conditions are met.'
    },
    {
      question: 'What is the average cost for a new roof in Florida?',
      answer: 'It varies heavily by material and scope. Statewide averages published by remodeling and roofing cost sources commonly show broad ranges, with full replacements on typical homes often landing in the tens of thousands depending on system choice and tear-off needs.'
    },
    {
      question: 'How much does a 2,000 sq ft shingle roof cost?',
      answer: '"2,000 sq ft" can mean home size, not roof area, so pricing needs a measurement. Many pricing references estimate asphalt systems by cost per square foot or per square (100 sq ft), then adjust for pitch, tear-off, deck work, and code items.'
    },
    {
      question: 'What is the hourly rate for a roofer in Florida?',
      answer: 'Worker pay and contractor billing are different numbers. Wage datasets and salary aggregators often show Florida roofer wages around the low-to-mid $20s per hour on average, but contractor labor billed to a job is typically higher because it includes overhead, insurance, supervision, and warranty risk.'
    },
    {
      question: 'Do you handle permits and inspections in Boca Raton?',
      answer: 'Yes. We manage permits and coordinate inspections as part of a proper reroof process.'
    },
    {
      question: 'How fast can you inspect a leak?',
      answer: 'We prioritize active leaks and storm-related damage. Call and we will schedule the fastest available inspection slot.'
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
            <Link to="/locations" className="text-zinc-400 hover:text-red-600 transition-colors">
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
                If you're searching for a roofer in Boca Raton FL, you want one thing: a roof that passes inspection, survives storms, and does not turn into a "surprise leak" two months later. That is what we build. Our commitment to quality, customer satisfaction, and safety standards sets us apart as a trusted member of the local community.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA is a licensed Florida roofing contractor—fully insured and bonded for your peace of mind. We are proud to have an expert team of professional roofers dedicated to delivering reliable, high-quality workmanship. Our team takes pride in serving the Boca Raton community and building lasting relationships with our customers.
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
                As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage—crucial for maintaining the safety and comfort of your home. We are proud of our strong BBB rating (A+) and recent positive Google reviews. When choosing a roofer in Boca Raton, always prioritize local, licensed, insured, and bonded contractors with a proven commitment to customer satisfaction and community trust.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Boca Raton homeowners hire All Phase Construction USA
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
                Boca Raton weather stresses edges, flashings, valleys, penetrations, and underlayment first. We focus there because that's where roofs usually lose. Our team is committed to strict safety protocols and ensures all work meets or exceeds safety standards to protect your home and everyone involved.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                The Proof Stack
              </h3>
              <p className="text-zinc-300 mb-4">Trust is not a slogan. It is receipts you can verify.</p>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>BBB A+ rated</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>4.8★ Google rating (137 reviews)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Dual-licensed: Roofing Contractor CCC-1331464 + General Contractor CGC-1526236</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Manufacturer certifications, including Tamko Platinum Preferred, plus multiple major system credentials</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Specialized crews by system</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                Different roof types fail in different ways. We assign the right crew to the right system so installs are cleaner, repairs are tighter, and callbacks drop.
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Our roofing contractors are skilled in the installation of various roofing systems, ensuring each project meets the highest standards. The installation process uses premium materials sourced from leading manufacturers to guarantee durability and protection. Boca Raton Roofing Company uses premium materials and proven techniques to ensure lasting protection and energy efficiency.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Shingle crew for shingles. Tile crew for tile. Metal crew for metal. Flat crew for flat systems.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                All Phase Construction USA installs code-compliant roofing systems in Boca Raton.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Our team handles permits and inspections for reroof projects.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Boca Raton storms create wind-driven rain that exposes weak flashing and underlayment
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing company in Boca Raton FL with a "show-you" inspection process
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Most roof problems are invisible from the driveway. Our inspection is designed to reduce guesswork and help you make a clean decision.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                What you get from a real roof inspection:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Photos of key roof areas (edges, penetrations, valleys, transitions)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Clear notes on what is failed vs what is aging</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>A recommendation that matches the roof's condition and your timeline</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                Repair vs replacement (how we decide):
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>A roof can be repaired when the system is stable and failures are isolated</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>A roof should be replaced when the system is at end-of-life or failing in multiple zones</span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                About All Phase Construction USA
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                All Phase Construction USA is a Florida roofing contractor based in Deerfield Beach, serving Boca Raton and the surrounding region with repairs, replacements, and inspections.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We operate like a builder, not a sales script. You get direct oversight, clear scope, and a roof system designed for South Florida weather.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <strong>Find us:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing contractor in Boca Raton FL: what we do
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We deliver roofing services that are permit-ready, inspection-ready, and storm-ready, including complete roof replacements and specialized commercial roofing solutions. Our roof repair services are designed to keep your home or business covered and protected from the elements. That includes residential and commercial projects.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Our core services
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof inspection and leak investigations</span>
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

              <h3 className="text-xl font-semibold text-white mb-4">
                Quick service fit guide
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                  <thead className="bg-[#27272a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Service</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Best for</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Typical outcome</th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-900/50">
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Roof inspection</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Leaks, stains, insurance letters, "something feels off"</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Photos + options + next steps; well-managed project assessment with attention to detail throughout the project lifecycle</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Roof repair</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Localized damage, flashing issues, minor storm damage</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Stop leaks and extend roof life; each repair project is handled with expertise and careful project management</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300">Roof replacement</td>
                      <td className="px-6 py-4 text-zinc-300">Widespread wear, recurring leaks, failed underlayment</td>
                      <td className="px-6 py-4 text-zinc-300">New system, updated code, warranty; comprehensive project oversight ensures customer satisfaction at every stage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                What we typically find during Boca Raton roof inspections
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Boca Raton roofs take heat, UV, salt air, and storm-driven rain. The failures tend to repeat.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Common inspection findings in Boca Raton:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cracked or slipped tiles that expose underlayment</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Nail pops, lifted shingles, and perimeter edge issues</span>
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
                  <span>Flat roof seam issues and ponding stress points</span>
                </li>
              </ul>

              <p className="text-zinc-300 leading-relaxed">
                At the first sign of roof leaks or a leaky roof, prompt professional intervention is crucial to prevent further damage and avoid costly repairs. A small leak can be a small fix, or it can be the symptom of a tired system. The inspection tells the truth.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof repair in Boca Raton FL
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                If you need roof repair in Boca Raton, speed matters, but correctness matters more. A rushed patch often becomes a repeat leak.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Maintaining your roof is essential for ongoing protection against harsh weather and storm damage, especially in South Florida. Regular maintenance allows homeowners to rest assured that their roof is in good condition, providing peace of mind and long-term security for your home.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Common roof repairs we handle
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Leak detection and targeted sealing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flashing repair at chimneys, walls, and transitions</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tile replacement and reset work</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Shingle repair, blow-off replacement, and edge reinforcement</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roof repairs (seams, penetrations, drains)</span>
                </li>
              </ul>

              <p className="text-zinc-300 leading-relaxed italic">
                Wind-driven rain finds weak flashing near roof penetrations.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof replacement in Boca Raton FL: systems, materials, and wind performance
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                A roof replacement is not "just shingles." In South Florida, the system details matter as much as the surface. Professional installation is crucial to ensure the quality, durability, and energy efficiency of your new roof, providing long-lasting protection for your home.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                When selecting roofing materials, it's important to choose options that offer lasting protection and energy efficiency. Metal roofs are known for their exceptional durability and can enhance the strength of your home, providing value for decades. Tile roofing systems are commonly used in South Florida because they withstand harsh weather conditions, while concrete tiles are a top-rated material in Boca Raton, FL, thanks to their impressive 50+ year lifespan. Asphalt shingles remain one of the more affordable roofing options available, making them a popular choice for many homeowners.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Roofing materials we install (match the roof to the building)
              </h3>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                  <thead className="bg-[#27272a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Roofing material</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Best for</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Strengths in Boca Raton</th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-900/50">
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Architectural shingles</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Budget-to-mid projects</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Fast installs, good value, broad color options</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Tile (clay or concrete)</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Many South FL homes</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Long life, strong curb appeal, great heat performance</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Metal roofing</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Storm-focused owners</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">High wind performance, longevity, energy benefits</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300">Flat roofing systems</td>
                      <td className="px-6 py-4 text-zinc-300">Commercial and modern homes</td>
                      <td className="px-6 py-4 text-zinc-300">Seam control, drainage solutions, durable membranes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                160 MPH wind-rated shingles (when it fits the roof)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                If your home is a good match for shingles, we can spec high wind-rated systems designed for severe weather performance. Ask about wind ratings, fastening patterns, and the full system build, not only the brand name.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Warranties and certifications
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Manufacturer certifications can unlock stronger warranty options when the full system is installed to spec. That is one reason certifications matter, beyond the logo.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof cost in Boca Raton: what drives price
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Roof pricing in South Florida depends on the roof design and the code requirements, not just square footage. As a leading roofer in Boca Raton FL, we are committed to transparent pricing, ensuring you receive clear and upfront cost information for your roofing project. A professional quote should always be itemized and specify material brands, labor costs, permit fees, and timelines so you know exactly what to expect.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
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

              <h3 className="text-xl font-semibold text-white mb-4">
                Realistic Florida price context (ranges, not hype)
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Industry sources commonly cite Florida roof replacement pricing that varies widely by material and scope, and many calculators show higher statewide averages for full replacements on typical homes.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Service areas: Boca Raton plus Palm Beach and Broward County
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-8">
                We serve Boca Raton and the surrounding region with the same process: inspect, document, scope, permit, install, and close out clean. Protecting your house with reliable roofing solutions is our priority in every community we serve, ensuring your home and its occupants are safe and secure.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Palm Beach County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Boca Raton, Delray Beach, Boynton Beach, Lake Worth, Wellington, West Palm Beach, Palm Beach Gardens, Jupiter
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Broward County (partial list)
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Coconut Creek, Parkland, Oakland Park, Sunrise, Weston
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                  <thead className="bg-[#27272a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">County</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Core cities we serve</th>
                      <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">Typical projects</th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-900/50">
                    <tr>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Palm Beach</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Boca Raton, Delray, Boynton, West Palm</td>
                      <td className="px-6 py-4 text-zinc-300 border-b border-zinc-800">Tile resets, reroofs, leak repairs</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300">Broward</td>
                      <td className="px-6 py-4 text-zinc-300">Deerfield, Pompano, Fort Lauderdale, Coral Springs</td>
                      <td className="px-6 py-4 text-zinc-300">Repairs, replacements, commercial systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Florida's "25% rule" and reroof decisions in plain English
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Homeowners ask this nonstop because it affects repair vs replacement.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Florida's older "25% rule" language appears in Florida Building Code references, but SB 4-D revised how this is applied for many roofs. In many cases, when 25% or more is repaired, only that portion must be brought up to current code if the existing roof complies with the 2007 Florida Building Code or later.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Local enforcement can still vary, so we treat this as a permit-and-inspection conversation, not a guess.
              </p>
            </div>

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
                CTA
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
  );
}
