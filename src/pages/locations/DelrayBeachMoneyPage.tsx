import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, Clock, Users, Star, ExternalLink } from 'lucide-react';
import EmbeddedRoofCalculator from '../../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { EXTERNAL_LINKS } from '../../config/links';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function DelrayBeachMoneyPage() {
  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/delray-beach');
    document.title = seoMeta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoMeta.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoMeta.description;
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Delray Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Delray Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/service-areas' },
      { name: 'Delray Beach', url: 'https://allphaseconstructionfl.com/locations/delray-beach' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, breadcrumbSchema];
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

  const testimonials = [
    {
      name: 'Evelyn T.',
      location: 'Deerfield Beach, FL',
      rating: 5,
      text: 'From the beginning of the project to the end, I have nothing but praise for this team. Karl explained everything clearly, they were on time, and my roof is beautiful. I would recommend them 100%.',
    },
    {
      name: 'Howard M.',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'All Phase delivered on all their promises. All employees were extremely efficient and professional. I recommend them for any roof replacement job.',
    },
    {
      name: 'Ana B.',
      location: 'Palm Beach County, FL',
      rating: 5,
      text: 'Karl conducted a roof inspection and was thorough, honest, and reliable. He sent a detailed letter addressing all concerns. I highly recommend and look forward to working with him again.',
    },
  ];

  const blogResources = [
    {
      title: 'How Much Does a Roof Replacement Cost?',
      url: '/blog/roof-replacement-cost-broward-county-2026'
    },
    {
      title: 'Wind Mitigation: Save on Insurance',
      url: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
    },
    {
      title: 'Filing an Insurance Claim After Storm Damage',
      url: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage'
    },
    {
      title: 'Understanding Your Roofing Warranty',
      url: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not'
    },
    {
      title: 'Spotting Early Signs of Roof Damage',
      url: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive'
    },
    {
      title: 'How to Hire a Roofer in South Florida',
      url: '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid'
    }
  ];

  const nearbyCities = [
    { name: 'Boynton Beach', url: '/locations/boynton-beach' },
    { name: 'Boca Raton', url: '/locations/boca-raton' },
    { name: 'Lake Worth', url: '/locations/lake-worth' },
    { name: 'Wellington', url: '/locations/wellington' },
    { name: 'West Palm Beach', url: '/locations/west-palm-beach' },
    { name: 'Deerfield Beach', url: '/locations/deerfield-beach' },
    { name: 'Pompano Beach', url: '/locations/pompano-beach' }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Delray Beach</span>
          </nav>

          <div className="max-w-5xl mx-auto mb-16">
            {/* Hero Section */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Roofing Services in Delray Beach, FL
            </h1>
                <div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                  <span className="text-yellow-400">★ 4.8 Google</span>
                  <span className="text-red-400">·</span>
                  <span>2,500+ Roofs</span>
                  <span className="text-red-400">·</span>
                  <span>Dual-Licensed Since 2005</span>
                </div>
            <p className="text-xl text-zinc-400 mb-8 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>

            {/* Intro Section - EXPANDED */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Dispatched from our Deerfield Beach HQ to provide rapid roofing services in Delray Beach, All Phase Construction USA is a dual-licensed roofing contractor with unmatched structural authority. As expert roofers serving Delray Beach, we are dedicated to providing personalized service to every client. We work closely with our clients and customers to understand their needs and ensure complete satisfaction on every project. Our team offers expertise in both residential and commercial roofing projects, delivering tailored solutions and professional guidance. We have extensive experience in residential roofing, specializing in repairs, replacements, and upgrades for historic homes and coastal properties throughout Delray Beach. All Phase Construction USA offers expertise in various roofing types, including <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal</Link>, and <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">flat roofing</Link> systems, to meet the unique needs of every property.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We hold both Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses, providing comprehensive roofing and structural expertise that standard roofing contractors cannot match. Contractors in Delray Beach must hold a valid Florida roofing license and carry general liability and workers' compensation insurance, and All Phase Construction USA exceeds these requirements.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Our track record includes numerous successfully completed roofing jobs, demonstrating our reliability and commitment to quality. Regular <Link to="/roof-inspection/delray-beach" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspections</Link> are critical for homes to assess and address any issues early on, preventing further damage and costly repairs. Investing in regular inspections can save homeowners money in the long run by extending the lifespan of their roofs. The longer someone waits to address roof issues, the more time and expense it will take to fix the damage. Common roofing issues in Delray Beach include severe storm damage, high humidity causing algae growth, and degradation of roof materials. All Phase Construction USA provides these inspections to help homeowners protect their investment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg text-center"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>

            {/* NEW: Introduction to Roofing Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Introduction to Roofing Services
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                In Delray Beach, FL, safeguarding your home or business starts with a dependable roof. Whether you are a homeowner or a business owner, having access to professional roofing services is essential for maintaining your property's structural integrity and curb appeal. From routine <Link to="/roof-repair/delray-beach" className="text-red-500 hover:text-red-400 underline transition-colors">roof repair</Link> to complete <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement</Link>, All Phase Construction USA helps you protect your investment and ensure your building stands strong against South Florida's challenging weather.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA brings expertise to every roofing project, guiding you through the process from start to finish. Whether you are dealing with roof leaks, minor issues, or concerns about mold growth, our experienced roofing professionals assess your needs and recommend the best solutions for your property. With a wide range of roofing systems available — including <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingle roofing</Link>, and advanced <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing</Link> systems — you can choose the roofing materials that best fit your style, budget, and performance requirements.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Selecting the right roofing contractor means you will benefit from knowledgeable guidance, quality workmanship, and reliable service. All Phase Construction USA helps you navigate every step, from inspection and material selection to installation and final inspection, ensuring your new roof or repair job is completed to the highest standards.
              </p>
            </div>

            {/* Dual-License Advantage - EXPANDED */}
            <div className="mb-16">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      The Dual-License Advantage
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Most roofing contractors in Delray Beach operate with only a CCC (Certified Roofing Contractor) license, limiting their scope to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking, or load-bearing problems — they must stop and hire a separate general contractor. This creates delays, increases costs, and introduces coordination problems.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete structural system supporting your roof. During every Delray Beach roof replacement project, we guide owners through a clear process: we begin with a thorough inspection, assess roof deck fastening, evaluate truss integrity, verify proper connections between the roof structure and exterior walls, and ensure the entire system meets current Florida Building Code requirements. When we identify structural deficiencies, we repair them immediately — keeping your project on schedule under one comprehensive warranty and providing peace of mind through our comprehensive approach.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Cost Calculator</Link> for a preliminary estimate based on your roof type and size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HVHZ Mastery - EXPANDED */}
            <div className="mb-16">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      HVHZ Mastery
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Delray Beach is located in South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof installation in Delray Beach must withstand 175+ mph wind speeds — equivalent to a strong Category 5 hurricane making direct landfall. Standard roofing techniques acceptable in other states fail inspection in Delray Beach.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Our HVHZ certification and dual-licensing enable us to engineer and professionally install hurricane-rated roofing systems specifically for Delray Beach's extreme weather conditions. We use enhanced fastening schedules with ring-shank nails at 6-inch spacing (versus standard 12-inch), high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive application, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. Florida building codes require hurricane-rated materials and specific installation methods, which can potentially qualify homeowners for <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline transition-colors">insurance premium reductions through wind mitigation</Link>. Living in Florida presents unique challenges for roofs due to extreme weather conditions, high humidity, and aging materials.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Proper installation and thorough inspection are essential to prevent leaks during severe storms, which can cause significant damage if left unaddressed. Roof leaks are the most common reason for required roof repairs in Florida due to the state's weather conditions. Prompt leak detection and repair are crucial to prevent further damage and ensure the safety of your home. Preventing leaks also reduces the risk of mold growth, a serious concern in South Florida's humid climate, as unchecked moisture can lead to health hazards and further structural issues.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      This expertise ensures your Delray Beach roof passes building department inspection on the first attempt and protects your property when hurricanes strike. Many homeowners discover too late that their contractor's work doesn't meet Palm Beach County building codes, resulting in failed inspections, costly remediation, and compromised hurricane protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Expertise - EXPANDED */}
            <div className="mb-16">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Local Expertise
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Operating from our Deerfield Beach headquarters, we serve Delray Beach with intimate knowledge of Palm Beach County building codes, permit requirements, and inspection procedures. Every jurisdiction in South Florida maintains unique requirements beyond Florida Building Code minimums — specific engineering documentation, structural calculations, product approvals, and installation details that vary by location.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Our established relationships with Palm Beach County building officials and our proven track record of first-pass inspection approvals mean your Delray Beach roof replacement moves forward smoothly from permit application through final certificate of completion. Out-of-area contractors struggle with county-specific requirements, resulting in project delays of weeks or months. Our local expertise eliminates these costly delays.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      We get the roofing job done right and on time, thanks to our deep understanding of <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-500 hover:text-red-400 underline transition-colors">local permitting regulations</Link>. For Delray Beach property owners searching for reliable roofing solutions, All Phase Construction USA is the answer to your roofing needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Roofing Services - EXPANDED */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Comprehensive Roofing Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Roof Replacement</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Complete roof replacement for Delray Beach residential and commercial properties. All materials, all roof types, HVHZ compliant with manufacturer warranties. We offer a wide selection of high-quality <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingle options</Link>, including popular brands and styles, to ensure the best fit for your <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline transition-colors">roof replacement project</Link>.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Emergency Repairs</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    24/7 emergency roof repair service for Delray Beach. Active leaks, storm damage, missing shingles, and emergency tarping with same-day response. Delaying repairs can lead to mold growth, structural damage, and higher costs. Contact us immediately when you notice any <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline transition-colors">signs of roof damage</Link>.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Professional Inspections</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Comprehensive 21-point <Link to="/roof-inspection/delray-beach" className="text-red-500 hover:text-red-400 underline transition-colors">roof inspections</Link> for Delray Beach properties. Insurance documentation, pre-purchase evaluations, and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline transition-colors">maintenance assessments</Link>. Regular inspections save money by catching small issues before they become expensive problems.
                  </p>
                </div>

                <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">All Roof Types</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">flat roofing</Link> (TPO/PVC). Expert installation and repair for all roofing systems in Delray Beach. Each material offers unique benefits for South Florida's climate — our team helps you select the ideal option for your property and budget.
                  </p>
                </div>
              </div>
            </div>

            {/* NEW: Roofing Solutions for Delray Beach's Unique Architecture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Solutions for Delray Beach's Unique Architecture
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Delray Beach features a diverse mix of architectural styles that require specialized roofing expertise. From the historic homes along Swinton Avenue and the charming bungalows in the Del-Ida Park Historic District to the luxury waterfront properties along the Intracoastal Waterway and A1A, each neighborhood presents unique roofing challenges. Barrel tile roofs are prevalent throughout Delray Beach's Mediterranean Revival homes in communities like Tropic Isle, Seagate, and Lake Ida, while flat roofing systems are common on the commercial buildings along Atlantic Avenue and in the Pineapple Grove Arts District.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Coastal properties in Delray Beach face accelerated wear from salt air exposure, UV radiation, and wind-driven rain. Homes east of I-95 are especially vulnerable to corrosion on metal flashings and fasteners. Our roofing team understands these location-specific challenges and specifies corrosion-resistant materials rated for coastal environments, including stainless steel fasteners and Kynar-coated flashings that withstand Delray Beach's salt-laden atmosphere.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Whether you own a single-family home in Kings Point, a townhome in Delray Villas, a commercial property in the Congress Avenue corridor, or a waterfront estate in Gulf Stream, All Phase Construction USA delivers roofing solutions engineered for your specific property type and exposure conditions.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                All Phase Construction USA has extensive experience serving Delray Beach's large retirement communities, including High Point 1 and High Point 2, where we have completed full re-roofing projects. These multi-building communities require coordinated project management, minimal disruption to residents, and compliance with HOA specifications — expertise that sets us apart from contractors unfamiliar with large-scale community roofing in Delray Beach.
              </p>
            </div>

            {/* NEW: Commercial Roofing Systems */}
            <div className="mb-16">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Commercial Roofing Systems
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Protecting your business starts with a reliable roof. All Phase Construction USA specializes in <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial roofing systems</Link> designed to safeguard your property and ensure long-term durability for businesses throughout Delray Beach. We offer a comprehensive suite of commercial roofing services, including roof repair, roof replacement, and new roof installations tailored to your unique needs.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Our team of experienced roofing professionals handles every aspect of your commercial roofing project, whether you are dealing with minor issues like roof leaks or require a complete replacement. We work with a variety of roofing materials and systems, including <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">metal roofing</Link>, and <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">flat roofs</Link>, to provide solutions that match your business's structural integrity and aesthetic preferences.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      We understand that every business is different, which is why we assess your property and recommend the best roofing systems for your specific requirements and budget. Our commitment to quality means we use only top-grade materials and proven installation techniques, ensuring your new roof stands up to the demands of South Florida's climate, including high winds and heavy rain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW: Roof Financing Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Financing Options for Delray Beach Clients
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                All Phase Construction USA understands that investing in a new roof or tackling unexpected repairs can be a significant financial decision for Delray Beach homeowners. We offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline transition-colors">financing options</Link> designed to fit your budget and meet your unique roofing needs.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Our team will guide you through financing solutions that make sense for your situation — whether you are planning a roof replacement, urgent repair, or new installation. We offer both credit-based and non-credit-based financing options with competitive rates and flexible repayment terms, designed to help you protect your Delray Beach home without delay.
              </p>
            </div>

            {/* NEW: Roofing Education and Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Education and Resources
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                All Phase Construction USA is dedicated to empowering Delray Beach homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-500 hover:text-red-400 underline transition-colors">Learning Center</Link> provides in-depth guides on topics including roof replacement costs, wind mitigation savings, insurance claim processes, and selecting the right roofing materials.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogResources.map((resource, index) => (
                  <Link
                    key={index}
                    to={resource.url}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 hover:bg-zinc-900 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                    <span className="text-red-500 text-sm hover:text-red-400 transition-colors">
                      Read more
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* NEW: What Our Customers Say (Real Google Reviews) */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                      ))}
                    </div>
                    <p className="text-zinc-300 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-zinc-700 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-zinc-400 text-sm mb-3">{testimonial.location}</p>
                      <a
                        href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-500 text-sm font-medium transition-colors duration-200"
                      >
                        See this review on Google
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-zinc-400">
                  See all reviews on{' '}
                  <a
                    href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 underline transition-colors"
                  >
                    Google
                  </a>
                </p>
              </div>
            </div>

            {/* NEW: Serving Nearby Communities */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-4">
                Serving Nearby Communities:
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-zinc-400">
                {nearbyCities.map((city, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <Link
                      to={city.url}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      {city.name}
                    </Link>
                    {index < nearbyCities.length - 1 && (
                      <span className="text-zinc-600">•</span>
                    )}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/locations/service-areas"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  View all service areas
                </Link>
              </div>
            </div>

            {/* Ready to Get Started CTA */}
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Contact All Phase Construction USA today to schedule a free roof inspection in Delray Beach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-500" />
              <span className="text-zinc-300 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-500" />
              <span className="text-zinc-300 font-medium">HVHZ Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-500" />
              <span className="text-zinc-300 font-medium">Dual-Licensed Contractor</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-500" />
              <span className="text-zinc-300 font-medium">Free Inspections</span>
            </div>
          </div>

          {/* Roof Calculator */}
          <MoneyPageEnhancements cityName="Delray Beach" county="Palm Beach" hvhz={false} />
          <EmbeddedRoofCalculator
            city="Delray Beach"
            county="Palm Beach"
            isHVHZ={false}
          />
        </div>
      </div>
    </div>
  );
}
