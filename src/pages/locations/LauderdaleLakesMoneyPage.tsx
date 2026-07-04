/**
 * Lauderdale Lakes Custom Location Page (PR-119) — hand-built, unique local content.
 */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function LauderdaleLakesMoneyPage() {
  const coordinates = getCityCoordinates('Lauderdale Lakes');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Lauderdale Lakes', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Lauderdale Lakes?', a: "A roof replacement in Lauderdale Lakes typically runs $10,000 to $28,000 in 2026 for single-family homes; the city's 1960s homes are often straightforward shingle at the lower end. Condo-association and multi-unit roofs are priced by the building." },
    { q: 'Do you handle condo-association roofing in Lauderdale Lakes?', a: 'Yes. With so many 1960s condominium communities like Hawaiian Gardens, much of our Lauderdale Lakes work is association roofing. We coordinate the board approvals and handle the full multi-unit tear-off and replacement, including flat-roof sections.' },
    { q: 'Is Lauderdale Lakes in the High-Velocity Hurricane Zone?', a: 'Yes. Lauderdale Lakes is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code — the strictest wind standard in the country. We build to it on every job.' },
    { q: 'My Lauderdale Lakes home was built in the 1960s — should I replace the roof?', a: 'Most Lauderdale Lakes homes and condos were built in the 1960s. If yours is still on an original or second roof, it is very likely past service life — and roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Lauderdale Lakes, FL | All Phase USA</title>
        <meta name="description" content="Lauderdale Lakes, FL roofer for 1960s homes & condo communities — HVHZ-code shingle, tile & flat roofs, association approvals handled, dual-licensed. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/lauderdale-lakes" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Lauderdale Lakes, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Lauderdale Lakes Florida for 1960s homes and condominium associations?" /></div>
              <AtomicAnswer>Lauderdale Lakes, FL is a compact 3.7-square-mile Broward County city known as the ’Heart of Broward’ — geographically central and just under 10 miles from Fort Lauderdale’s beaches. Incorporated in 1961 as a snowbird retirement haven, it is now a vibrant Caribbean community where most homes and condos date to the 1960s, giving it one of Broward’s densest concentrations of aging roofs. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that builds every Lauderdale Lakes roof to Miami-Dade HVHZ code — legally required here in Broward County. Roof replacements run $10,000 to $28,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="lauderdale-lakes" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Snowbird Haven to the Heart of Broward</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderdale Lakes started small — incorporated in 1961 as a rural farming area and ’snowbird’ retirement haven with only about 300 residents. Today this 3.7-square-mile city is the ’Heart of Broward,’ geographically central and less than 10 miles from Fort Lauderdale’s beaches, with a big Caribbean soul: it hosts Unifest, the oldest multicultural festival in Broward County, and even has netball courts alongside the tennis and basketball at Vincent Torres Memorial Park.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That history shows up on the rooftops. Most of the city’s homes and condominiums were built in the 1960s — charming midcentury architecture, often with pastel facades — which means a very large share of Lauderdale Lakes roofs are now decades past their original service life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">The Housing Stock</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">1960s Homes, Canal Lots, and Condo Associations</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderdale Lakes is a mix of single-family neighborhoods and condominium communities. Oakland Estates is a walkable, beautifully landscaped area of affordable single-family homes; Oriole Estates has 1960s and 70s homes on spacious, canal-view lots; and Lauderdale Oaks, Boyd Anderson, and Northgate round out the established residential core.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">With so many 1960s condos, a big part of roofing here is association work — full multi-unit tear-offs priced by the building, with board approvals to coordinate. We handle both the single-family replacements and the condo-association projects in communities like Hawaiian Gardens, and we manage the approvals either way.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lauderdale Lakes is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code — the strictest wind standard in the country. On the city’s 1960s homes and condos, a tear-off often reveals aged decking or a failing flat-roof section that needs attention, and our dual license lets us handle it on the same permit.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ code is also what earns your home wind-mitigation insurance credits. We document every qualifying feature so your insurer can apply the savings.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lauderdale Lakes Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Oakland Estates', 'Oriole Estates', 'Lauderdale Oaks', 'Boyd Anderson', 'Northgate', 'Hawaiian Gardens'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Lauderdale Lakes Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Lauderdale Lakes Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Lauderdale Lakes and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Lauderdale Lakes &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Lauderdale Lakes</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Lauderdale Lakes across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/lauderhill" className="hover:text-red-500 transition-colors font-semibold">Lauderhill</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/north-lauderdale" className="hover:text-red-500 transition-colors font-semibold">North Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-500 transition-colors font-semibold">Oakland Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/tamarac" className="hover:text-red-500 transition-colors font-semibold">Tamarac</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors font-semibold">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/broward-county" className="text-[#C5A572] hover:text-white transition-colors font-semibold">All Broward County</Link>
            </div>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
