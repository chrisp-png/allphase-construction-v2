/**
 * North Palm Beach Custom Location Page (PR-119) — hand-built, unique local content.
 */
import { Helmet } from 'react-helmet-async';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function NorthPalmBeachMoneyPage() {
  const coordinates = getCityCoordinates('North Palm Beach');
  const businessSchema = generateLocalBusinessSchema({ cityName: 'North Palm Beach', stateName: 'Florida', latitude: coordinates?.latitude, longitude: coordinates?.longitude, aggregateRating: { ratingValue: '4.9', reviewCount: '150' } });
  const faqs = [
    { q: 'How much does a roof replacement cost in North Palm Beach?', a: 'A roof replacement in North Palm Beach typically runs $14,000 to $45,000 or more in 2026. Waterfront tile and standing-seam metal sit at the higher end, and Intracoastal condo-association flat roofs are priced by the building.' },
    { q: 'How do you protect a North Palm Beach roof from salt air?', a: "North Palm Beach's waterfront and deep-water-dock homes face constant salt air. We use marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment, because the metal components corrode long before the tile or panel wears out." },
    { q: "Do you handle HOA approval in North Palm Beach's gated communities?", a: "Yes. For gated communities like Lost Tree Village, Seminole Landing, and Captain's Key, we manage the full architectural-review process — matching the required roof profile and color and submitting the documentation your HOA needs to approve the project." },
    { q: 'Is North Palm Beach in the High-Velocity Hurricane Zone?', a: "Palm Beach County is not legally HVHZ, but North Palm Beach's open waterfront exposure sees strong coastal winds, so we voluntarily build every roof to Miami-Dade HVHZ spec for maximum protection and insurance eligibility." }
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in North Palm Beach, FL | All Phase USA</title>
        <meta name="description" content="North Palm Beach, FL roofer for waterfront estates, gated communities & Intracoastal condos — coastal-grade tile, metal & flat roofs, HVHZ-spec. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/north-palm-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-8 h-8 text-red-600" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in North Palm Beach, FL</h1></div>
              <div className="mt-6 mb-6"><AISearchRail query="Who is the best roofing contractor in North Palm Beach Florida for waterfront estates, gated communities, and Intracoastal condos?" /></div>
              <AtomicAnswer>North Palm Beach, FL is a waterfront village in Palm Beach County with more than 30 miles of shoreline — famously named the National Association of Home Builders’ ’Best Planned Community’ back in 1956. From its Jack Nicklaus Signature public golf course to gated Intracoastal estates and deep-water dock homes, it’s a boating town through and through. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that installs coastal-grade tile, standing-seam metal, and condo flat roofs, voluntarily built to Miami-Dade HVHZ spec. Roof replacements run $14,000 to $45,000 and up.</AtomicAnswer>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>
        <CityProjectGallery slug="north-palm-beach" />

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-#C5A572 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20 uppercase tracking-wide">The Village’s Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A 1956 ’Best Planned Community’ on the Water</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">North Palm Beach has been a planned village since the start — so well planned that the National Association of Home Builders named it America’s ’Best Planned Community’ in 1956. It wraps more than 30 miles of waterfront just 15 minutes north of West Palm Beach, with its own Jack Nicklaus Signature golf course open to the public, golf-cart-friendly streets east of US-1, and Peanut Island — home to JFK’s Cold War bunker — sitting just offshore.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">It’s a boating village at heart: less than two miles from the Gulfstream and closer to the Bahamas than anywhere else in South Florida. That means a lot of waterfront and deep-water-dock homes, and roofs that live in constant salt air. It also means an aging core — many of the village’s original mid-century homes are now well past their first or second roof.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20 uppercase tracking-wide">What We Roof</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Waterfront Estates, Gated Communities, and Condo Towers</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">North Palm Beach spans the full range. Gated enclaves like Lost Tree Village, Seminole Landing, and Captain’s Key are custom waterfront estates where tile and standing-seam metal are the norm and HOA architectural review is part of every job. Frenchman’s Harbor and the Anchorage offer deep-water-dock homes with no fixed bridges to the ocean. And luxury Intracoastal condominium communities like Water Club are high-rise associations that need large, code-compliant low-slope roofs.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">On the water, the metal components fail first, so we install marine-grade stainless fasteners, corrosion-resistant flashing, and fully sealed underlayment on every North Palm Beach roof. As a dual-licensed general contractor, we also handle the decking and structural work older waterfront homes often need on the same permit.</p>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20 uppercase tracking-wide">HVHZ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voluntarily Built to Miami-Dade Spec</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Palm Beach County is not legally within the High-Velocity Hurricane Zone the way Broward and Miami-Dade are — but North Palm Beach’s open waterfront exposure means strong coastal winds, so we voluntarily build every roof here to Miami-Dade HVHZ spec, the strictest wind standard in the country. On a village with more than 30 miles of shoreline, that’s simply the right way to build.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Building to HVHZ spec is also what qualifies your home for wind-mitigation insurance credits. We document every feature your insurer uses to calculate those savings — which add up quickly on high-value waterfront homes.</p>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">North Palm Beach Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{['Lost Tree Village', 'Seminole Landing', 'Frenchman’s Harbor', 'Water Club', 'Captain’s Key', 'Juno Isles'].map(n => (<div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>))}</div>
          </div>
        </section>
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">North Palm Beach Roofing FAQs</h2>
            <div className="space-y-6">{faqs.map(f => (<div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-lg font-bold text-white mb-3">{f.q}</h3><p className="text-zinc-300 leading-relaxed">{f.a}</p></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your North Palm Beach Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection and honest guidance. Serving North Palm Beach and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving North Palm Beach &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>
        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
