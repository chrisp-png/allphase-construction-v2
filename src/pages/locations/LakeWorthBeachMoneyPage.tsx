/**
 * Lake Worth Beach Custom Location Page (PR-118)
 * Hand-built, unique local content — modeled on the Boca Raton page.
 * Overrides the generic GenericLocationTemplate for /locations/lake-worth-beach.
 */
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AISearchRail from '../../components/AISearchRail';
import AtomicAnswer from '../../components/AtomicAnswer';
import CityProjectGallery from '../../components/CityProjectGallery';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { MapPin, Phone, Shield, Clock, CheckCircle2, Palette, Building2, Waves, Home } from 'lucide-react';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function LakeWorthBeachMoneyPage() {
  const coordinates = getCityCoordinates('Lake Worth Beach');
  const businessSchema = generateLocalBusinessSchema({
    cityName: 'Lake Worth Beach',
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: { ratingValue: '4.9', reviewCount: '150' },
  });

  const faqs = [
    { q: 'Can you re-roof a home in a Lake Worth historic district?', a: 'Yes. Several Lake Worth Beach neighborhoods sit in districts on the National Register of Historic Places, with dozens of protected homes built in the 1920s. Re-roofing these homes often requires an architectural review and matching the original tile profile and color. We manage that approval process and source period-correct materials so your roof stays compliant and true to the home.' },
    { q: 'Is Lake Worth Beach in the High-Velocity Hurricane Zone (HVHZ)?', a: 'Palm Beach County is not legally HVHZ, but Lake Worth Beach sits right on the Atlantic. We voluntarily build every Lake Worth roof to Miami-Dade HVHZ wind specifications — the strictest in Florida — for maximum storm protection and insurance-discount eligibility.' },
    { q: 'How much does a roof replacement cost in Lake Worth?', a: 'A roof replacement in Lake Worth Beach typically runs $12,000 to $38,000 in 2026, depending on roof size, material, and whether an older home needs deck or framing repairs. Historic tile roofs sit at the higher end; architectural shingle at the lower end.' },
    { q: 'What should I know about roofing on Lake Worth’s older homes?', a: 'Much of Lake Worth Beach is pre-1960 cottage stock — original tongue-and-groove decking, dimensional framing, and roof systems at end of life. When we tear off, we often find conditions that need structural attention. Our dual license (roofing CCC plus general contractor CGC) means we can address the decking and framing, not just the roof surface.' },
    { q: 'Do you handle the coastal salt-air exposure near the beach and Intracoastal?', a: 'Yes. Homes from the oceanfront and the Lake Worth Pier across to the Intracoastal and Snook Islands face constant salt air. We install marine-grade stainless fasteners and a fully sealed, self-adhered underlayment so your roof holds up to the corrosion that shortens roof life on the coast.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

  return (
    <>
      <Helmet>
        <title>Roofing Contractor in Lake Worth, FL (Lake Worth Beach)</title>
        <meta name="description" content="Roofer in Lake Worth (officially Lake Worth Beach), FL. Historic-district re-roofs, coastal tile, shingle & metal — dual-licensed, HVHZ-spec since 2005. (754) 227-5605." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/lake-worth-beach" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Roofing Contractor in Lake Worth (Lake Worth Beach), FL</h1>
              </div>
              <div className="mt-6 mb-6">
                <AISearchRail query="Who is the best dual-licensed roofing contractor in Lake Worth Beach Florida, and how do you re-roof a home in a Lake Worth historic district?" />
              </div>
              <AtomicAnswer>Lake Worth (officially Lake Worth Beach) is a historic coastal city in Palm Beach County full of 1920s homes and National Register districts. All Phase Construction USA is a dual-licensed roofing and general contractor (CCC-1331464 and CGC-1526236) that has re-roofed Lake Worth homes since 2005 — handling historic-district architectural review, older-home structural repairs, and coastal salt-air installations to Miami-Dade HVHZ spec. Roof replacements run $12,000 to $38,000.</AtomicAnswer>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                Locals still call it <strong className="text-white">Lake Worth</strong> — the city only voted to add &ldquo;Beach&rdquo; to its name in 2019. Whether you&rsquo;re in a 1920s Mission home near downtown or a coastal cottage by the pier, we know how roofs work here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"><CheckCircle2 className="w-6 h-6" />Get a Free Inspection</a>
                <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"><Phone className="w-6 h-6" />Call (754) 227-5605</a>
              </div>
            </div>
          </div>
        </section>

        <CityProjectGallery slug="lake-worth-beach" />

        {/* History */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20"><Home className="w-4 h-4" />A City With Real History</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">One of Palm Beach County&rsquo;s Oldest Communities</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lake Worth Beach was founded in 1885 by Samuel and Fannie James, a pioneering African American couple who settled the area and ran the local post office they named &ldquo;Jewell.&rdquo; More than a century later, the city still carries that eclectic, historic &ldquo;Old Florida&rdquo; charm — and a housing stock to match.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">That history matters for your roof. A city this old is full of homes that have already outlived several roof systems. When a 1940s–1960s cottage comes up for a tear-off, we routinely find original tongue-and-groove decking and dimensional framing beneath the shingles — conditions a roofing-only contractor isn&rsquo;t licensed to repair. Our <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">dual license</Link> lets us handle both the roof and the structure underneath it.</p>
          </div>
        </section>

        {/* Historic districts */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20"><Building2 className="w-4 h-4" />Historic-District Roofing</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Re-Roofing in Lake Worth&rsquo;s Historic Districts</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lake Worth Beach contains multiple neighborhoods listed on the National Register of Historic Places, with dozens of protected homes built in the 1920s. If your home sits in one of these districts, you can&rsquo;t simply swap in any roof — the profile, material, and color often have to be reviewed and matched to preserve the home&rsquo;s character.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We handle that. We manage the architectural-review process, source period-correct tile and shingle profiles, and document everything so your re-roof clears approval the first time — while still meeting today&rsquo;s wind codes underneath the surface. Original 1920s Mission and Spanish-style homes get a roof that looks right and performs to modern HVHZ standards.</p>
          </div>
        </section>

        {/* Coastal geography */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-blue-500/20"><Waves className="w-4 h-4" />From the Atlantic to the Intracoastal</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Coastal Roofing, Ocean to Waterway</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">Lake Worth Beach packs a lot into seven square miles — from the surf near the South Jetty and the Lake Worth Pier, across to Bryant Park and the Snook Islands Natural Area on the Intracoastal. Homes on both sides live in salt air.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">Salt is hard on roofs. It corrodes fasteners and flashing long before the roofing material itself wears out. On every Lake Worth roof we install marine-grade stainless fasteners, a fully sealed self-adhered underlayment, and corrosion-resistant flashing — and we voluntarily build to Miami-Dade HVHZ wind spec even though Palm Beach County doesn&rsquo;t legally require it, for the strongest storm protection and insurance-discount eligibility.</p>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lake Worth Neighborhoods We Roof</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['College Park', 'Parrot Cove', 'Bryant Park', 'Tropical Ridge', 'South Palm Park', 'Downtown Lake Worth'].map(n => (
                <div key={n} className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4 text-center text-zinc-200 font-semibold">{n}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20"><Palette className="w-4 h-4" />Proud to Serve This Community</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Vibrant, Artsy Coastal Town</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">For a small city, Lake Worth Beach punches far above its weight culturally. Every February the downtown streets fill with 600 artists for the famous Street Painting Festival; the calendar also brings Palm Beach Pride and the Finnish-heritage Midnight Sun Festival, with an art-filled downtown of galleries, boutiques, and murals year-round.</p>
            <p className="text-zinc-300 leading-relaxed mb-4">We&rsquo;re a family-run South Florida roofer, and we take real pride in protecting homes in a community with this much character. When we put a new roof on a Lake Worth home, we&rsquo;re helping keep one of the area&rsquo;s most distinctive towns looking the way it should.</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Roofing Services in Lake Worth Beach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: 'Roof Replacement', d: 'Full tear-offs and re-roofs for Lake Worth homes — tile, metal, shingle, and flat — built to HVHZ spec.' },
                { t: 'Roof Repair', d: 'Leak detection and repair for older cottages, historic homes, and coastal properties.' },
                { t: 'Roof Inspection', d: 'Free inspection-first assessments, including 4-point and pre-listing certifications.' },
                { t: 'All Roof Types', d: 'Concrete and clay tile, standing-seam and metal, architectural shingle, and TPO/PVC flat roofs.' },
              ].map(s => (
                <div key={s.t} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Lake Worth Roofing FAQs</h2>
            <div className="space-y-6">
              {faqs.map(f => (
                <div key={f.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{f.q}</h3>
                  <p className="text-zinc-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold mb-4"><Clock className="w-4 h-4" />24/7 Emergency Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Straight Answer on Your Lake Worth Roof?</h2>
            <p className="text-zinc-300 mb-8">Free inspection, honest guidance, and a roof built for the coast and the code. Serving Lake Worth Beach and all of Palm Beach County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all">Schedule Free Inspection</a>
              <a href="tel:754-227-5605" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-900/40 transition-all">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-500 mt-6">Serving Lake Worth (Lake Worth Beach) &amp; All of Palm Beach County | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </div>
        </section>

        <Contact />
        <StickyConversionBar />
      </div>
    </>
  );
}
