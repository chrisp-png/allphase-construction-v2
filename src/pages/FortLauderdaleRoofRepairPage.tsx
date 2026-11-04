import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Plus, Minus, Phone, Droplets, Wind, Home, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import NearbyServiceAreas from '../components/NearbyServiceAreas';
import CityRepairLeadForm from '../components/CityRepairLeadForm';
import cities from '../data/cities.json';
import { getNearbyCities } from '../data/nearbyRoofRepairCities';

/**
 * Dedicated Fort Lauderdale roof-repair page (PR-227). Previously this
 * route fell through to GenericRoofRepairTemplate — the thinnest page of
 * the paid-traffic set, in the biggest Broward market. Written to the same
 * standard as the other hand-built city pages: distinct local content,
 * above-the-fold lead capture, FAQ schema, nearby-areas interlinks.
 */
export default function FortLauderdaleRoofRepairPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const nearbyCities = getNearbyCities('fort-lauderdale', cities);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: 'Do you repair roofs on older Fort Lauderdale homes, like the ones in Victoria Park or Croissant Park?',
      answer: 'Yes. Much of Fort Lauderdale’s housing stock dates to the 1950s–70s, and older roofs often mix original decking with decades of past repairs. Our inspection-first approach documents what is actually up there before any work is quoted, and our dual license (CCC-1331464 roofing + CGC-1526236 general contractor) lets us handle deteriorated decking or framing in-house if the tear-back reveals it.'
    },
    {
      question: 'My home is on a canal — does salt exposure change how a roof repair is done?',
      answer: 'It changes what we look for and what we install. Fort Lauderdale’s 165 miles of waterways mean many roofs live in a salt-air environment that corrodes exposed fasteners and flashing faster than inland. On waterfront repairs we use corrosion-resistant fasteners and metals appropriate for coastal exposure, and we pay extra attention to flashing, drip edge, and any metal already showing rust streaking.'
    },
    {
      question: 'Are roof repairs in Fort Lauderdale subject to HVHZ requirements?',
      answer: 'Fort Lauderdale sits inside Broward County’s High-Velocity Hurricane Zone, so materials and attachment methods must meet HVHZ standards, and repair scopes beyond a size threshold can trigger permit and code-upgrade requirements. We handle City of Fort Lauderdale permitting when a repair scope requires it and build every repair to the code the roof will be inspected under.'
    },
    {
      question: 'Can a leaking flat roof section be repaired without replacing the whole roof?',
      answer: 'Often, yes. Flat and low-slope sections — common on mid-century Fort Lauderdale homes and on additions — usually leak at seams, penetrations, and ponding areas. If the field membrane is otherwise sound, a targeted repair or partial recover is frequently viable. Infrared moisture scanning tells us whether water has traveled beneath the membrane before we recommend either path.'
    },
    {
      question: 'How fast can you get to a roof leak in Fort Lauderdale?',
      answer: 'A real person answers our phone 24/7, and we dispatch from our Deerfield Beach headquarters about 20 minutes up I-95. Active leaks get same-day response during business hours, including emergency tarping and leak mitigation to stop interior damage while the permanent repair is scheduled.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        schema={faqSchema}
        canonical="/roof-repair/fort-lauderdale"
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/roof-repair" className="hover:text-red-600 transition-colors">Roof Repair</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Fort Lauderdale</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in Fort Lauderdale, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Fort Lauderdale roofs work harder than most. Between salt air off the Atlantic and the canal network, summer heat cycling, and a housing stock where 1950s ranch homes sit next to new construction, the failure patterns here are specific — corroded fasteners on waterfront homes, cracked barrel tile on older Mediterranean revivals, and seam failures on the flat sections mid-century builders loved.
                </p>
                <p>
                  All Phase Construction USA provides inspection-first roof repair across Fort Lauderdale, from Victoria Park and Coral Ridge to Rio Vista, Tarpon River, and the Galt Mile corridor. A certified inspector documents what your roof actually needs — with photos — before anyone talks price, and most of what we inspect turns out to be a repair, not a replacement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Free Inspection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PR-227: above-the-fold lead capture for paid traffic */}
        <CityRepairLeadForm city="Fort Lauderdale" citySlug="fort-lauderdale" />

        {/* What Fort Lauderdale Does to Roofs */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What Fort Lauderdale Does to a Roof</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  The "Venice of America" nickname is not just marketing — it is a roofing condition. With roughly 165 miles of canals threading through the city, a large share of Fort Lauderdale homes sit directly on the water, where salt-laden air attacks exposed metal year-round. On inspections in Las Olas Isles, Coral Ridge, and Harbor Beach we routinely find rusted fasteners backing out of otherwise healthy roofs, corroded valley metal, and flashing that failed a decade before the roof around it.
                </p>
                <p>
                  Inland, the story is age. Neighborhoods like Croissant Park, Tarpon River, Poinsettia Heights, and much of Victoria Park were built out between the 1950s and 1970s. Roofs there have often been repaired several times across several ownerships, and the original decking — sometimes shiplap rather than plywood — hides beneath layers of history. That is why we open every repair with documentation instead of assumptions: what looks like a simple shingle repair on a 1958 ranch can involve decking the last three roofers worked around.
                </p>
                <p>
                  And everywhere in the city, the flat-roof problem: Fort Lauderdale’s mid-century builders used flat and low-slope sections generously — over Florida rooms, carports, and additions. Those sections fail at seams and penetrations long before the field membrane wears out, and they pond water in every summer downpour. Many of the "whole roof is shot" calls we get turn out to be one failed flat section that can be repaired or recovered on its own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Repairs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Roof Repairs We Perform Across Fort Lauderdale</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <Droplets className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Leak Detection &amp; Repair</h3>
                  <p className="text-zinc-300 leading-relaxed">Water rarely shows up on the ceiling below where it enters the roof — especially on flat sections where it can travel along the deck. We trace the actual entry point, with infrared moisture scanning on flat and low-slope roofs, and repair the cause rather than the symptom.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <Home className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Tile Repair &amp; Replacement</h3>
                  <p className="text-zinc-300 leading-relaxed">Cracked and slipped barrel tile on the city’s Mediterranean-style homes, underlayment repairs beneath sound tile, and source-matched replacements for discontinued profiles — including foam re-adhesion where uplift resistance has degraded.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <Wind className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Storm &amp; Wind Damage</h3>
                  <p className="text-zinc-300 leading-relaxed">Lifted shingles, displaced tile, and wind-driven rain intrusion after summer storms. Written assessment with photo documentation — the paperwork your insurer will ask for — and emergency tarping the same day on active leaks.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <Building2 className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Flat &amp; Low-Slope Sections</h3>
                  <p className="text-zinc-300 leading-relaxed">Seam failures, ponding areas, and penetration leaks on modified bitumen and membrane sections — the most common repair call in Fort Lauderdale’s mid-century neighborhoods, and on commercial properties along Federal Highway and downtown.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair-first + local credibility */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Repair First — Replacement Only When the Roof Has Actually Earned It</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Fort Lauderdale homeowners hear "you need a whole new roof" a lot — sometimes from companies that only sell whole new roofs. Our position is simpler: the inspection decides. If the leak is a failed pipe boot, that is a pipe-boot repair. If the underlayment under your tile is at end of life but the tile is sound, a lift-and-relay may save you tens of thousands over full replacement. And when a roof genuinely is done, we will show you the photos that prove it and put the recommendation in writing.
                </p>
                <p>
                  We are dual-licensed — Certified Roofing Contractor CCC-1331464 and Certified General Contractor CGC-1526236 — which matters most on exactly the older homes Fort Lauderdale is full of. When a repair uncovers rotted decking or framing, we handle the structural work in-house under one agreement instead of stopping the job to bring in a second contractor. Since 2006 we have installed or repaired more than 2,500 roofs across Broward and Palm Beach County from our Deerfield Beach headquarters, and we hold a 4.9-star average across 160+ Google reviews.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /><span>Free inspection with photo documentation — you see what we see</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /><span>City of Fort Lauderdale permits handled when the repair scope requires one</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /><span>HVHZ-compliant materials and fastening on every repair</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /><span>Corrosion-resistant metals and fasteners on waterfront and beachside homes</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PR-228: FTL condo corridor + insurance depth */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Condo Corridor, and Why Roof Repairs Now Carry Insurance Weight</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Fort Lauderdale&apos;s beachfront tells a different roofing story than its neighborhoods. Along the Galt Ocean Mile and the barrier island from Harbor Beach north, condo buildings face the double squeeze of Florida&apos;s milestone-inspection and SIRS reserve requirements on one side and hardening insurance carriers on the other. For associations, a documented roof repair program — with photos, scopes, and dated reports — is now part of staying insurable, not just staying dry. We work with boards and property managers on exactly that documentation, and when a building&apos;s roof has reached replacement scale, our <Link to="/hoa-condo-roof-financing" className="text-red-400 underline hover:text-red-300">association financing page</Link> covers how communities fund it without a five-figure special assessment.
                </p>
                <p>
                  For single-family homeowners the insurance math has changed too. Carriers across Broward increasingly decline or non-renew roofs past the 15-year mark unless an inspection shows remaining life. A properly documented repair — with a roof-condition report from a licensed contractor — is often the difference between keeping coverage and scrambling for it. When we inspect a Fort Lauderdale roof, the written report we leave behind is built to serve that purpose: your insurer, your future buyer, and your own planning all read from the same set of photos.
                </p>
                <p>
                  It is also why we tell homeowners not to wait out small leaks. In this insurance market, interior water damage claims draw scrutiny onto the roof itself — and a $600 flashing repair done this month is a very different conversation with your carrier than a stained ceiling next hurricane season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Fort Lauderdale Roof Repair FAQs</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="text-lg font-semibold">{item.question}</span>
                      {openFaqIndex === index ? <Minus className="w-5 h-5 text-red-500 shrink-0" /> : <Plus className="w-5 h-5 text-red-500 shrink-0" />}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 text-zinc-300 leading-relaxed">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get an Honest Answer About Your Fort Lauderdale Roof
              </h2>
              <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
                Whether it’s a stain on the ceiling, tile in the yard after a storm, or a flat section that ponds every afternoon in the rainy season — start with the free inspection. You’ll get photos, a straight repair-or-replace answer, and a written scope either way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Request Inspection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <Contact />
        </section>

        {/* Nearby Service Areas */}
        {nearbyCities.length > 0 && (
          <NearbyServiceAreas
            nearbyCities={nearbyCities} serviceType="roof-repair"
          />
        )}
      </div>
    </>
  );
}
