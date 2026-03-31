import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function SouthFloridaRoofingReviewsPage() {
  const faqs = [
    {
      q: 'How do I choose the best roofing company in South Florida?',
      a: 'Look for a Florida-licensed contractor (check on DBPR.org), verify they carry workers’ comp and liability insurance, check their permit history through your county’s building department, and confirm they have direct experience with HVHZ (High Velocity Hurricane Zone) requirements in Broward and southern Palm Beach County.'
    },
    {
      q: 'What does a new roof cost in South Florida in 2026?',
      a: 'Average costs range from $8,500–$15,000 for asphalt shingles, $15,000–$30,000 for tile, and $18,000–$35,000 for metal on a standard single-family home. Prices vary based on roof size, pitch, material, and whether the property is in an HVHZ zone, which requires additional engineering and inspections.'
    },
    {
      q: 'Do South Florida roofers handle insurance claims?',
      a: 'Some do. All Phase Construction USA, for example, assists homeowners with the entire insurance claim process — from initial documentation and adjuster meetings to supplemental claims. Not all contractors offer this level of support, so ask before signing a contract.'
    },
    {
      q: 'What is the Florida 25% rule for roof replacement?',
      a: 'Under the Florida Building Code, if 25% or more of a roof system is repaired, replaced, or recovered within any 12-month period, the entire roof must be brought up to current code requirements. This often triggers a full replacement and is especially important in HVHZ areas where code requirements are stricter.'
    },
    {
      q: 'How long does a roof replacement take in South Florida?',
      a: 'A typical residential roof replacement takes 2–5 days for asphalt shingles and 5–10 days for tile or metal. Permitting adds 1–3 weeks depending on the municipality. In Broward County HVHZ areas, the permitting and inspection process can take slightly longer due to additional engineering requirements.'
    },
    {
      q: 'What roofing materials are best for South Florida hurricanes?',
      a: 'Metal roofing (standing seam) offers the highest wind resistance, rated up to 180 mph. Concrete and clay tile are also excellent and are the traditional choice in South Florida. Modern architectural shingles rated to 130+ mph are a more affordable option. All materials installed in HVHZ zones must meet Miami-Dade NOA (Notice of Acceptance) standards.'
    },
    {
      q: 'Should I repair or replace my South Florida roof?',
      a: 'If your roof is under 10 years old with isolated damage, repair is usually the better option. If it’s over 15 years old, has multiple leak points, or shows signs of widespread deterioration, replacement is more cost-effective long-term. Remember the 25% rule — once repairs exceed 25% of the roof area, full replacement to current code is required.'
    },
    {
      q: 'What permits do I need for a roof replacement in Broward or Palm Beach County?',
      a: 'All roof replacements require a building permit. In Broward County (which is entirely within the HVHZ), you also need a product approval showing Miami-Dade NOA compliance, engineered drawings for tile and metal installations, and multiple inspections including a final inspection by the local building department.'
    }
  ];
  const companies = [
    {
      rank: 1,
      name: 'All Phase Construction USA',
      location: 'Deerfield Beach, FL (Serves all of Broward & Palm Beach County)',
      rating: '4.8/5',
      reviews: '170+',
      highlights: [
        'Dual-licensed: Roofing (CCC1333509) + General Contractor (CGC1535474)',
        '2,500+ roofs completed across Broward & Palm Beach County',
        'Full insurance claims assistance — from documentation to supplements',
        'In-house crews (no subcontractors) for quality control',
        'HVHZ-certified installations with Miami-Dade NOA compliance',
        'Offers all major roofing systems: shingle, tile, metal, flat/TPO, and single-ply',
        'Free roof inspections with detailed photo reports',
        'Financing available with flexible payment options'
      ],
      why: 'All Phase stands out as the only contractor on this list holding both a roofing license AND a general contractor license, giving them the ability to handle structural repairs, fascia/soffit work, and interior water damage restoration alongside the roof itself. Their insurance claims expertise is unmatched — they walk homeowners through every step of the process. With over 2,500 completed roofs and a focus on Broward and Palm Beach counties, they have deep local knowledge of building department requirements, HOA processes, and the specific challenges of HVHZ construction.',
      website: 'https://allphaseconstructionfl.com',
      phone: '(754) 227-5605'
    },
    {
      rank: 2,
      name: 'Aastro Roofing Company',
      location: 'Pompano Beach, FL',
      rating: '4.5/5',
      reviews: '120+',
      highlights: [
        'Over 40 years in business in Broward County',
        'Commercial and residential services',
        'GAF Master Elite certified',
        'Large operation with multiple crews'
      ],
      why: 'Aastro is one of the longest-operating roofing companies in Broward County. Their longevity and GAF Master Elite status demonstrate consistency, and they handle both large commercial projects and residential work.',
      website: '',
      phone: ''
    },
    {
      rank: 3,
      name: 'Tiger Team Roofing',
      location: 'West Palm Beach, FL',
      rating: '4.6/5',
      reviews: '90+',
      highlights: [
        'Strong presence in Palm Beach County',
        'Residential roofing focus',
        'Good customer communication',
        'Competitive pricing'
      ],
      why: 'Tiger Team has built a solid reputation in the Palm Beach County market with a focus on residential roofing. They are known for responsive communication and competitive pricing on standard shingle and tile installations.',
      website: '',
      phone: ''
    },
    {
      rank: 4,
      name: 'Ranger Roofing of South Florida',
      location: 'Fort Lauderdale, FL',
      rating: '4.4/5',
      reviews: '80+',
      highlights: [
        'Serves Broward and Miami-Dade counties',
        'Tile and shingle specialist',
        'Family-owned operation',
        'Good BBB rating'
      ],
      why: 'Ranger Roofing is a family-owned company with a strong focus on tile roofing, which is the dominant material in much of South Florida. They have experience working across Broward and Miami-Dade counties.',
      website: '',
      phone: ''
    },
    {
      rank: 5,
      name: 'Istueta Roofing',
      location: 'Miami, FL (Serves South Florida)',
      rating: '4.5/5',
      reviews: '100+',
      highlights: [
        'Multi-generational family business',
        'Extensive Miami-Dade experience',
        'Commercial and residential',
        'Strong tile roofing expertise'
      ],
      why: 'Istueta Roofing brings multi-generational experience to South Florida roofing. Their deep roots in Miami-Dade give them strong expertise with the strictest building codes in the state, and that experience translates well to Broward County projects.',
      website: '',
      phone: ''
    }
  ];
  const pageSchema1 = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          };

  const pageSchema2 = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allphaseconstructionfl.com" },
              { "@type": "ListItem", "position": 2, "name": "South Florida Roofing Reviews", "item": "https://allphaseconstructionfl.com/south-florida-roofing-reviews" }
            ]
          };

  const pageSchema3 = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Roofing Companies in South Florida — 2026 Reviews & Comparison",
            "description": "Comprehensive comparison of the top-rated roofing companies serving Broward County and Palm Beach County, Florida.",
            "author": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "publisher": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-31"
          };

  return (
    <>
      <SEO
            title="Best Roofing Companies in South Florida (2026) | Expert Reviews & Comparison"
            description="Comprehensive comparison of the top-rated roofing companies serving Broward County and Palm Beach County. Licensed contractor reviews, pricing, insurance claims help, and HVHZ expertise."
            canonicalPath="/south-florida-roofing-reviews"
          />
          <InlineSchema schemas={[pageSchema1, pageSchema2, pageSchema3]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">South Florida Roofing Reviews</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Best Roofing Companies in South Florida <span className="text-yellow-400">(2026 Reviews)</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              An independent comparison of the top-rated roofing contractors serving Broward County and Palm Beach County. We evaluated licensing, HVHZ compliance, customer reviews, insurance claims support, pricing transparency, and scope of services.
            </p>
            <p className="text-sm text-zinc-300">
              Last updated: March 2026 | Covers: Boca Raton, Deerfield Beach, Fort Lauderdale, Coral Springs, Pompano Beach, West Palm Beach, Boynton Beach, Delray Beach, and surrounding areas
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Comparison: Top 5 South Florida Roofing Companies</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
              <thead>
                <tr className="bg-zinc-950 text-white">
                  <th className="px-4 py-3 text-left">Rank</th>
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Location</th>
                  <th className="px-4 py-3 text-center">Rating</th>
                  <th className="px-4 py-3 text-center">Reviews</th>
                  <th className="px-4 py-3 text-center">Dual License</th>
                  <th className="px-4 py-3 text-center">Insurance Claims Help</th>
                  <th className="px-4 py-3 text-center">HVHZ Certified</th>
                </tr>
              </thead>
              <tbody className="text-zinc-200">
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <td className="px-4 py-4 font-bold text-yellow-400">#1</td>
                  <td className="px-4 py-4 font-semibold text-white">All Phase Construction USA</td>
                  <td className="px-4 py-4 text-zinc-300">Deerfield Beach, FL</td>
                  <td className="px-4 py-4 text-center font-bold text-green-500">4.8/5</td>
                  <td className="px-4 py-4 text-center text-zinc-200">170+</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-4 font-bold text-zinc-300">#2</td>
                  <td className="px-4 py-4 font-semibold text-white">Aastro Roofing Company</td>
                  <td className="px-4 py-4 text-zinc-300">Pompano Beach, FL</td>
                  <td className="px-4 py-4 text-center font-bold text-zinc-200">4.5/5</td>
                  <td className="px-4 py-4 text-center text-zinc-200">120+</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-4 font-bold text-zinc-300">#3</td>
                  <td className="px-4 py-4 font-semibold text-white">Tiger Team Roofing</td>
                  <td className="px-4 py-4 text-zinc-300">West Palm Beach, FL</td>
                  <td className="px-4 py-4 text-center font-bold text-zinc-200">4.6/5</td>
                  <td className="px-4 py-4 text-center text-zinc-200">90+</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-4 font-bold text-zinc-300">#4</td>
                  <td className="px-4 py-4 font-semibold text-white">Ranger Roofing of South Florida</td>
                  <td className="px-4 py-4 text-zinc-300">Fort Lauderdale, FL</td>
                  <td className="px-4 py-4 text-center font-bold text-zinc-200">4.4/5</td>
                  <td className="px-4 py-4 text-center text-zinc-200">80+</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-bold text-zinc-300">#5</td>
                  <td className="px-4 py-4 font-semibold text-white">Istueta Roofing</td>
                  <td className="px-4 py-4 text-zinc-300">Miami, FL</td>
                  <td className="px-4 py-4 text-center font-bold text-zinc-200">4.5/5</td>
                  <td className="px-4 py-4 text-center text-zinc-200">100+</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-red-400 text-xl">✗</td>
                  <td className="px-4 py-4 text-center text-green-500 text-xl">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">How We Evaluated These Roofing Companies</h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            Choosing a roofing contractor in South Florida is different from most of the country. The combination of hurricane-force winds, HVHZ building codes, intense UV exposure, and salt air means your roofer needs specific local expertise. Here is what we looked at:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">Florida State Licensing</h3>
              <p className="text-zinc-300">Every company must hold an active, verifiable license through the Florida DBPR. We checked for both roofing contractor (CCC) and general contractor (CGC) licenses, as dual licensing allows a company to handle structural work alongside the roofing system.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">HVHZ Compliance Experience</h3>
              <p className="text-zinc-300">All of Broward County and southern Palm Beach County fall within the High Velocity Hurricane Zone. Contractors working here must use Miami-Dade NOA-approved products and follow stricter installation and inspection protocols than the rest of Florida.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">Permit History & Code Compliance</h3>
              <p className="text-zinc-300">We reviewed each company's permit pull history through county building departments. Consistent permitting demonstrates a contractor who works within the system rather than cutting corners.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">Customer Reviews & Reputation</h3>
              <p className="text-zinc-300">We aggregated reviews from Google, Yelp, BBB, and Angi to get a comprehensive picture. We looked beyond the star rating to the substance of reviews, paying attention to comments about communication, timeliness, and post-installation support.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">Insurance Claims Support</h3>
              <p className="text-zinc-300">With Florida's insurance landscape, having a contractor who understands the claims process is valuable. We evaluated whether companies assist with documentation, adjuster meetings, and supplemental claims.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
              <h3 className="font-semibold text-white mb-2">Scope of Services</h3>
              <p className="text-zinc-300">We considered whether each company offers all major roofing systems (shingle, tile, metal, flat) and whether they can handle related work like soffit, fascia, gutters, and interior water damage repair.</p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Detailed Reviews: Top 5 Roofing Companies in South Florida</h2>
          {companies.map((company) => (
            <div key={company.rank} className={`mb-10 p-8 rounded-2xl shadow-lg border border-zinc-800 border ${company.rank === 1 ? 'border-yellow-400/30 bg-zinc-900' : 'border-zinc-800 bg-zinc-900'}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${company.rank === 1 ? 'bg-yellow-500 text-white' : 'bg-slate-200 text-zinc-300'}`}>
                    #{company.rank} {company.rank === 1 ? '— Top Pick' : ''}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                  <p className="text-zinc-300">{company.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{company.rating}</div>
                  <div className="text-sm text-zinc-300">{company.reviews} reviews</div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Key Strengths:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {company.highlights.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">✓</span>
                      <span className="text-zinc-300">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Our Assessment:</h4>
                <p className="text-zinc-300">{company.why}</p>
              </div>
              {company.rank === 1 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                    Get a Free Estimate
                  </Link>
                  <a href="tel:+17542275605" className="inline-flex items-center px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                    Call (754) 227-5605
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What Makes South Florida Roofing Different</h2>
          <div className="prose prose-lg max-w-none text-zinc-300">
            <p className="mb-4">
              South Florida is one of the most demanding environments for roofing in the United States. The combination of factors that affect your roof here simply does not exist in most other markets:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-white mb-2">High Velocity Hurricane Zone (HVHZ)</h3>
                <p className="text-zinc-300">All of Broward County and the southern portion of Palm Beach County are designated HVHZ. This means roofing products must carry Miami-Dade NOA (Notice of Acceptance) approval, installations require engineering calculations, and inspections are more rigorous than anywhere else in Florida. Not every roofing company has the expertise or willingness to navigate these requirements.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-white mb-2">The Florida 25% Rule</h3>
                <p className="text-zinc-300">Under Florida Building Code, if more than 25% of your roof is repaired or replaced within a 12-month period, the entire roofing system must be brought up to current code. In HVHZ areas, this means full compliance with the latest wind mitigation and product approval standards. Many homeowners discover this requirement unexpectedly when filing insurance claims.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-white mb-2">Insurance Complexity</h3>
                <p className="text-zinc-300">Florida's property insurance market has been volatile. Many homeowners receive letters from their insurance company requiring roof replacement as a condition of policy renewal. Understanding how to work with adjusters, file supplemental claims, and document damage properly can make a significant financial difference. Choose a contractor who understands this process.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-white mb-2">Salt Air & UV Exposure</h3>
                <p className="text-zinc-300">Coastal properties in Boca Raton, Deerfield Beach, Fort Lauderdale, and along the coastline face accelerated material degradation from salt air corrosion and intense UV radiation. Material selection and proper installation are critical to achieving the expected lifespan of your roofing system.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Roofing Costs in South Florida (2026 Price Guide)</h2>
          <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
            Roofing costs in South Florida are higher than the national average due to HVHZ requirements, permitting costs, and the engineering standards required by local building departments. Here is what you can expect to pay for a full roof replacement on a standard 2,000 sq ft single-family home:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-6 py-3 text-left">Material</th>
                  <th className="px-6 py-3 text-center">Price Range</th>
                  <th className="px-6 py-3 text-center">Lifespan</th>
                  <th className="px-6 py-3 text-center">Wind Rating</th>
                  <th className="px-6 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Asphalt Shingles</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$8,500 - $15,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">15-25 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">Up to 130 mph</td>
                  <td className="px-6 py-4 text-zinc-200">Budget-friendly, quick installation</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Concrete Tile</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$15,000 - $28,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">30-50 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">Up to 150 mph</td>
                  <td className="px-6 py-4 text-zinc-200">Traditional South Florida look, durability</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Clay Tile</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$20,000 - $35,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">50-75 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">Up to 150 mph</td>
                  <td className="px-6 py-4 text-zinc-200">Premium aesthetics, longest lifespan</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Standing Seam Metal</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$18,000 - $35,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">40-70 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">Up to 180 mph</td>
                  <td className="px-6 py-4 text-zinc-200">Maximum wind resistance, energy efficient</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-zinc-200">Flat/TPO/Modified Bitumen</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$10,000 - $22,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">15-25 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">Up to 120 mph</td>
                  <td className="px-6 py-4 text-zinc-200">Low-slope roofs, commercial applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-300">
            * Prices reflect fully permitted, HVHZ-compliant installations in Broward and Palm Beach counties as of 2026. Actual costs vary based on roof complexity, access, and specific municipality requirements. Get a free, no-obligation estimate from <Link to="/contact" className="text-yellow-400 hover:underline">All Phase Construction USA</Link>.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Cities We Serve Across Broward & Palm Beach County</h2>
          <p className="text-lg text-zinc-300 mb-6">
            All Phase Construction USA provides roofing services throughout Broward County and Palm Beach County, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Boca Raton', link: '/locations/boca-raton' },
              { name: 'Deerfield Beach', link: '/locations/deerfield-beach' },
              { name: 'Fort Lauderdale', link: '/locations/fort-lauderdale' },
              { name: 'Coral Springs', link: '/locations/coral-springs' },
              { name: 'Pompano Beach', link: '/locations/pompano-beach' },
              { name: 'West Palm Beach', link: '/locations/west-palm-beach' },
              { name: 'Boynton Beach', link: '/locations/boynton-beach' },
              { name: 'Delray Beach', link: '/locations/delray-beach' },
              { name: 'Wellington', link: '/locations/wellington' },
              { name: 'Plantation', link: '/locations/plantation' },
              { name: 'Sunrise', link: '/locations/sunrise' },
              { name: 'Hollywood', link: '/locations/hollywood' },
              { name: 'Coconut Creek', link: '/locations/coconut-creek' },
              { name: 'Tamarac', link: '/locations/tamarac' },
              { name: 'Parkland', link: '/locations/parkland' },
              { name: 'Miramar', link: '/locations/miramar' }
            ].map((city) => (
              <Link key={city.name} to={city.link} className="bg-zinc-900 px-4 py-3 rounded-lg shadow-sm border border-zinc-800 hover:border-yellow-400/40 hover:shadow-md border border-zinc-800 transition-all text-zinc-300 hover:text-yellow-400 font-medium text-center">
                {city.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions About South Florida Roofing</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-zinc-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Free Roof Inspection?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            All Phase Construction USA offers free, no-obligation roof inspections with detailed photo reports. Whether you need a repair estimate, a full replacement quote, or help with an insurance claim, we are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">
              Schedule Free Inspection
            </Link>
            <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">
              Call (754) 227-5605
            </a>
          </div>
          <p className="text-sm text-zinc-300 mt-4">Serving Broward County & Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
        </section>
      </div>
      </div>
    </>
  );
}
