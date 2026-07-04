/**
 * Jupiter Custom Location Page (PR-119) — hand-built, unique local content.
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

export default function JupiterMoneyPage() {
  const coordinates = getCityCoordinates('Jupiter');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'Jupiter', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.8', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in Jupiter?', a: "A roof replacement in Jupiter typically runs $14,000 to $45,000 or more in 2026, depending on roof size and material. Coastal tile and standing-seam metal, common on Jupiter's waterfront homes, sit at the higher end." },
    { q: 'How do you protect a Jupiter roof from salt air?', a: "On Jupiter's coastal and waterfront homes we use marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed self-adhered underlayment. Because Jupiter is the farthest-east point on Florida's coast, salt exposure is severe, and the metal components corrode long before the roofing material wears out." },
    { q: 'What roofing works best on Jupiter waterfront homes?', a: "Tile and standing-seam metal are the go-to choices for Jupiter's coastal exposure. We install both to HVHZ spec with reinforced ridge attachment engineered for direct Atlantic wind." },
    { q: 'Is Jupiter in the High-Velocity Hurricane Zone?', a: "Palm Beach County is not legally HVHZ, but Jupiter's position as Florida's farthest-east coastal point means strong ocean winds, so we voluntarily build every Jupiter roof to Miami-Dade HVHZ spec for maximum protection and insurance eligibility." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Jupiter, FL | All Phase USA</title>
        <meta name="description" content="Jupiter, FL coastal & waterfront roofer. Tile & standing-seam metal built for Atlantic salt air and the wind at Florida's farthest-east point, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/jupiter" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Jupiter, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor for Jupiter Florida waterfront and coastal homes exposed to salt air and Atlantic wind?" /></div>
              <AtomicAnswer>Jupiter, FL is a coastal Palm Beach County town built around the iconic 1860 Jupiter Inlet Lighthouse, and it juts farther into the Atlantic than any other point on Florida’s coast, which means direct salt-air and open-ocean wind exposure on every roof. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs tile and standing-seam metal built for that exposure, to Miami-Dade HVHZ spec. Roof replacements run $14,000 to $45,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="jupiter" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Town’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Roofing at Florida’s Farthest-East Point</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Jupiter has one of the most unusual names in Florida, and it’s the result of a centuries-old mistake. Early Spanish mapmakers misread the local Native American Hobe (or Jobe) tribe’s name as ’Jove’ — the Latin name for the Roman god — and the celestial version stuck, leaving the town with a cosmic name it was never actually given.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Geography makes it just as distinctive: Jupiter sticks out into the Atlantic farther than any other point on Florida’s coast, and from the top of the historic 1860 Jupiter Inlet Lighthouse you can see four bodies of water at once — the Atlantic, the Jupiter Inlet, the Loxahatchee River, and the Indian River. That farthest-east position also means Jupiter roofs take the ocean’s full force: relentless salt air and open Atlantic wind that inland homes never see.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">Waterfront</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Roofing Jupiter’s Luxury Waterfront</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Long before it was a haven for championship golf and luxury real estate, Jupiter’s soil made it a major pineapple producer — and today that same coastline draws a quiet celebrity crowd, from Tiger Woods to Michael Jordan, who co-owns the waterfront club and restaurant 1000 North.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Its marquee communities — Admirals Cove, Jonathan’s Landing, and Jupiter Inlet Colony — sit directly on the water, where salt exposure is relentless and a roof failure gets expensive fast. On these homes we install marine-grade stainless fasteners, corrosion-resistant flashing, and a fully sealed self-adhered underlayment, because on the water it’s the metal components that corrode and fail first, long before the tile or panel itself wears out.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">Materials</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Coastal-Grade Tile & Metal, Engineered for Wind</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Every Jupiter roof we install goes in to Miami-Dade HVHZ spec with reinforced ridge attachment — the standard that keeps tile and metal panels in place when open-coast hurricane winds hit this exposed stretch of the Atlantic.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">As a dual-licensed roofing and general contractor, we also handle the structural side: on Jupiter’s older and waterfront homes, a tear-off sometimes reveals decking or framing that needs attention, and we address it on the same permit instead of stopping the job.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Jupiter Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Admirals Cove', 'Jonathan’s Landing', 'Abacoa', 'Jupiter Inlet Colony', 'Jupiter Farms', 'Tequesta border'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Jupiter Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Jupiter Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving Jupiter and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Jupiter &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <section className="py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Roofing Near Jupiter</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">All Phase Construction USA also serves the communities around Jupiter across Palm Beach County:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-zinc-300">
              <Link to="/locations/jupiter-inlet-colony" className="hover:text-red-500 transition-colors font-semibold">Jupiter Inlet Colony</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-gardens" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Gardens</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/north-palm-beach" className="hover:text-red-500 transition-colors font-semibold">North Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-shores" className="hover:text-red-500 transition-colors font-semibold">Palm Beach Shores</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors font-semibold">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-county" className="text-[#C5A572] hover:text-white transition-colors font-semibold">All Palm Beach County</Link>
            </div>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
