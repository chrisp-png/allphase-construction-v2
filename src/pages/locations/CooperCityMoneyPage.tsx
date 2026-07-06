/**
 * Cooper City Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function CooperCityMoneyPage() {
  const coordinates = getCityCoordinates('Cooper City');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Cooper City', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Cooper City?', a: "A roof replacement in Cooper City typically runs $11,000 to $30,000 in 2026. Architectural shingle sits at the lower end; concrete tile, common in the city's master-planned neighborhoods, runs higher." },
    { q: 'Do you handle HOA approval in Cooper City?', a: 'Yes. Many Cooper City neighborhoods like Rock Creek and Embassy Lakes have HOAs that govern roof profile and color. We manage the full architectural-review process and submit the documentation your HOA needs to approve the project.' },
    { q: 'My Cooper City home is from the 1980s — should I replace the roof?', a: 'Much of Cooper City was built between the 1970s and 1990s, so many homes are on aging roofs. If yours is past 15 to 20 years, roof age is now the top reason Florida insurers issue non-renewals. A free inspection tells you exactly where you stand.' },
    { q: 'Is Cooper City in the High-Velocity Hurricane Zone?', a: 'Yes. Cooper City is in Broward County, which is legally within the High-Velocity Hurricane Zone, so every roof must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job.' }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Cooper City, FL | All Phase USA</title>
        <meta name="description" content="Cooper City, FL roofer for family suburbs & gated communities — HVHZ-code tile & shingle, HOA review handled, dual-licensed since 2006. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/cooper-city" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Cooper City, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in Cooper City Florida for family homes and gated communities?" /></div>
              <AtomicAnswer>Cooper City, FL is a tightly-knit Broward County family suburb — its slogan is literally ’Someplace Special’ — founded in 1959 by developer Morris Cooper and known for top-rated schools and master-planned neighborhoods. Much of its housing dates to the 1970s through 1990s and is now reaching roof end-of-life. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs shingle, tile, and metal to Miami-Dade HVHZ code, legally required here in Broward. Roof replacements run $11,000 to $30,000.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="cooper-city" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The City’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">’Someplace Special’ Since 1959</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Cooper City was founded in 1959 by developer Morris Cooper as a planned family community, and it has leaned into that identity ever since — its official slogan is ’Someplace Special,’ and it’s consistently ranked among Broward’s safest, most family-friendly cities with some of the top-rated schools in the county.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That family-suburb character shapes the roofs. Cooper City is largely single-family neighborhoods built from the 1970s through the 1990s — Rock Creek, Embassy Lakes, Country Address, and newer Monterra — which means a large, steady wave of homes now hitting original-roof end-of-life.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Family Homes and HOA Communities</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Most Cooper City roofs are architectural shingle or concrete tile on single-family homes, and many of the city’s neighborhoods sit inside HOAs with guidelines on roof profile and color. We manage that architectural-review process end to end so your replacement gets approved without delays.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed roofing and general contractor, when a tear-off on a 1970s or 80s Cooper City home reveals worn decking or fascia, we handle it on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Broward’s Toughest Wind Code</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Cooper City is in Broward County, inside the legally-defined High-Velocity Hurricane Zone, so every roof here must meet Miami-Dade HVHZ code, the strictest wind standard in the country. We build to it on every job with reinforced attachment and a code-current secondary water barrier.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Meeting HVHZ code is also what earns your home wind-mitigation insurance credits, which we document for your insurer so the savings can be applied.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cooper City Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Rock Creek', 'Embassy Lakes', 'Country Address', 'Monterra', 'Flamingo Gardens area', 'Cooper Colony'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Cooper City Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Cooper City Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Cooper City and all of Broward County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Cooper City &amp; All of Broward County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Cooper City</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Cooper City across Broward County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/davie" className="hover:text-red-500 transition-colors font-semibold">Davie</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-pines" className="hover:text-red-500 transition-colors font-semibold">Pembroke Pines</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/southwest-ranches" className="hover:text-red-500 transition-colors font-semibold">Southwest Ranches</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/plantation" className="hover:text-red-500 transition-colors font-semibold">Plantation</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/miramar" className="hover:text-red-500 transition-colors font-semibold">Miramar</Link>
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
