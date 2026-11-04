import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EXTERNAL_LINKS } from '../../config/links';

export default function JupiterRoofRepairPage() {
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Roof repair in Jupiter FL — Admiral\'s Cove, The Bear\'s Club, Ranch Colony. Coastal salt-air assemblies. Free inspection (754) 227-5605.');
    }
  }, []);

  const testimonials = [
    {
      name: 'Betty Fronizer',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'Recently I had a roof put on my house by All Phase USA. I cannot say enough good about this company. Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed. I got a call every week from Carissa letting me know where we were in the process. The crew covered all my plants and cleaned everything up at the end of the day. If you need a new roof call All Phase USA.'
    },
    {
      name: 'Anthony Colarusso',
      location: 'Palm Beach County, FL',
      rating: 5,
      text: 'Just had my roof completed by All Phase. From start to finish they did everything they said they would. Once I signed with them they were way more communicative than I expected. Matt in production kept me in the loop from start to finish and Charly was there to walk me through the tear off and answered all the questions I had. Highly recommend.'
    },
    {
      name: 'Ana Ramirez',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'All Phase Construction recently did my roof. From the start to the finish they did everything they said they were going to do. The project manager Matt was very communicative and answered any questions that I had the entire time. Would highly recommend.'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if my Jupiter roof needs repair or replacement?',
      answer: 'If damage covers less than 25% of your roof surface, repair typically offers the best value. During your free inspection we honestly assess whether restoration makes sense or if replacement is the smarter investment. Most Jupiter homeowners are surprised to learn repair is appropriate for their situation.'
    },
    {
      question: 'What roof problems are most common in Jupiter\'s climate?',
      answer: 'Damaged shingles and flashing failures from storms top the list. Salt air corrosion, UV degradation of sealants, and humidity-induced wood rot in attics are also prevalent. Our inspections address all of these Jupiter-specific concerns.'
    },
    {
      question: 'How quickly can you respond to emergency roof leaks in Jupiter?',
      answer: 'Same-day response for Jupiter area emergencies. Every hour of water intrusion increases damage exponentially. Tarping services prevent interior damage that costs far more to repair.'
    },
    {
      question: 'Do you help with insurance claims for storm damage in Jupiter?',
      answer: 'Absolutely. We document all damage thoroughly, provide detailed repair estimates, and work directly with adjusters when needed. Florida statutes require licensed contractor work for valid claims — our fully licensed status protects your coverage.'
    },
    {
      question: 'What is the typical cost difference between roof repair and replacement in Jupiter?',
      answer: 'Repairs average $2,000–8,000 while complete roof replacement runs $10,000–25,000 for a typical 2,000 square foot home. That is 60–80% savings when repair is appropriate. We only recommend replacement when it is truly necessary.'
    },
    {
      question: 'How long do roof repairs last in Florida\'s harsh weather conditions?',
      answer: 'Quality repairs using proper materials extend roof life by 5–15 years depending on your roofing system and maintenance. Regular maintenance maximizes durability in Jupiter\'s coastal environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      {/* Breadcrumb */}
      <nav className="px-6 py-4 text-sm text-gray-400">
        <Link to="/" className="hover:text-white">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/roof-repair" className="hover:text-white">Roof Repair</Link>
        <span className="mx-2">/</span>
        <span className="text-white">Jupiter</span>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Roof Repair in Jupiter, FL — Restore Your Roof, Save Your Money</h1>
        <p className="text-xl text-gray-300 mb-6">Why replace your entire roof when professional repair can return it to peak performance at a fraction of the cost?</p>
        <p className="text-gray-300 mb-4">Living in Jupiter, FL means your roof faces relentless challenges — hurricane-force winds, 60 inches of annual rainfall, intense UV radiation, and corrosive salt air from the Atlantic. When damage strikes, choosing the smartest path forward protects both your home and your budget.</p>
        <p className="text-gray-300 mb-8">Here is what many Jupiter homeowners do not realize: 60–70% of roof damage cases do not require complete replacement. A quality repair restores your roofing system to its original protective capacity, saving you $8,000 to $17,000 compared to full replacement while extending your roof's service life by 5 to 15 years.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold text-center">Schedule Free Inspection</Link>
          <a href="tel:7542275605" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded font-semibold text-center">754-227-5605</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Jupiter Roof Repair Services?</h2>
        <ul className="space-y-4 text-gray-300">
          <li><span className="text-white font-semibold">Expert Storm Damage Restoration</span> — We return roofs to pre-damage condition using durable materials engineered for Florida's demanding climate, including impact-resistant shingles rated for 130 mph winds.</li>
          <li><span className="text-white font-semibold">Local Jupiter Expertise</span> — Decades of experience understanding Florida Building Code requirements, salt air corrosion patterns, and the specific challenges facing coastal roofing systems in communities like Admiral's Cove, The Bear's Club, Ranch Colony, and Jonathan's Landing.</li>
          <li><span className="text-white font-semibold">Cost Effective Solutions</span> — Repairs typically cost $2,000 to $8,000 compared to $10,000 to $25,000 for complete replacement — saving you 60–80% while achieving the same protective result.</li>
          <li><span className="text-white font-semibold">Emergency Leak Repair</span> — Same-day response for Jupiter area homes because water intrusion costs far more when ignored.</li>
          <li><span className="text-white font-semibold">Fully Licensed and Insured</span> — Licenses CGC-1526236 and CCC-1331464. Serving Palm Beach County with all required certifications, protecting you from liability and ensuring insurance claim eligibility.</li>
        </ul>
      </section>

      {/* Roofing Materials */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Roofing Materials for Jupiter Homes</h2>
        <p className="text-gray-300 mb-4">Tile roofing remains a favorite among Jupiter homeowners for its exceptional durability and classic curb appeal. Tile roofs resist rot and insect damage, making them a smart investment for coastal properties.</p>
        <p className="text-gray-300 mb-4">Metal roofing offers maximum protection against severe weather. It stands up to high winds and heavy rain, reflects sunlight to lower cooling costs, and is ideal for Jupiter's storm-prone environment.</p>
        <p className="text-gray-300 mb-4">Asphalt shingles provide a cost-effective and versatile solution. Modern shingles are engineered for improved durability and can withstand the elements while providing reliable protection at a lower upfront cost.</p>
        <p className="text-gray-300">We will help you weigh the pros and cons of each material, considering your budget, the style of your home, and the specific demands of Jupiter's coastal climate.</p>
      </section>

      {/* Process */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">How Our Jupiter Roof Repair Process Works</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 1: Free Comprehensive Roof Inspection</h3>
            <p className="text-gray-300">Schedule your inspection and our team arrives within 24 hours. We inspect every inch of your roof — including flashing, soffit, and ventilation systems — to identify problems invisible from ground level. Free estimates with zero obligation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 2: Detailed Repair Plan with Transparent Pricing</h3>
            <p className="text-gray-300">You receive a complete breakdown of needed repairs, materials, timeline, and cost. No surprises, no hidden fees. We explain exactly what we found and how our repairs will protect your Jupiter home for years to come.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Professional Repair Execution</h3>
            <p className="text-gray-300">Our licensed contractors perform all work using high-quality materials specifically selected for Florida weather resistance — from Class H wind-rated shingles to UV-resistant silicone sealants with 20+ year durability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 4: Final Inspection and Warranty Documentation</h3>
            <p className="text-gray-300">Every job concludes with a thorough final inspection and complete warranty documentation. Manufacturer warranties extend 25–50 years on premium materials.</p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Jupiter Roof Repair Services</h2>
        <div className="space-y-4 text-gray-300">
          <p><span className="text-white font-semibold">Emergency Leak Repair</span> — Immediate tarping and temporary fixes with permanent repairs scheduled within 48 hours. Prevents interior damage that costs far more when ignored.</p>
          <p><span className="text-white font-semibold">Tile and Shingle Repair</span> — Precise matching for clay, barrel, cement tile, and asphalt shingle systems. Includes corrosion-resistant fasteners essential for salt air environments. Typical repairs $2,000–$5,000.</p>
          <p><span className="text-white font-semibold">Storm Damage Restoration</span> — Complete assessment, insurance claim documentation, and professional restoration. We handle everything from missing shingles to compromised flashing.</p>
          <p><span className="text-white font-semibold">Preventive Maintenance Plans</span> — Biannual inspections recommended for Jupiter homes due to salt air accelerating wear. Proactive maintenance cuts lifetime costs and prevents small leaks from becoming major repairs.</p>
          <p><span className="text-white font-semibold">Commercial Roofing Repair</span> — Serving Jupiter businesses with the same quality and responsiveness we bring to residential projects.</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, s) => (
                  <span key={s} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm">“{t.text}”</p>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs">{t.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={EXTERNAL_LINKS.GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-semibold">See All Our Google Reviews</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions About Jupiter Roof Repair</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Related Jupiter Roofing Services</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/locations/jupiter" className="text-red-400 hover:text-red-300 font-semibold">Jupiter Roofing Contractor</Link>
          <Link to="/roof-inspection/jupiter" className="text-red-400 hover:text-red-300 font-semibold">Jupiter Roof Inspection</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Your Jupiter Roof Repaired Today</h2>
        <p className="text-gray-300 mb-8">Every day you wait, small problems grow into expensive emergencies. Salt air continues corroding fasteners, small leaks spread into wood rot, and that minor flashing gap becomes a major water intrusion event during the next storm.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold">Schedule Free Inspection</Link>
          <a href="tel:7542275605" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded font-semibold">754-227-5605</a>
        </div>
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white">All Phase Construction USA</p>
          <p>590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
          <p>📞 <a href="tel:7542275605" className="text-red-400 hover:text-red-300">754-227-5605</a></p>
          <p>✉️ <a href="mailto:leads@allphaseusa.com" className="text-red-400 hover:text-red-300">leads@allphaseusa.com</a></p>
        </div>
        <p className="mt-6 text-xs text-gray-500">🔒 Fully Licensed | Insured | Family Owned | Serving Jupiter and Palm Beach County</p>
      </section>

    </div>
  );
}
