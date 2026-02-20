import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useAssessmentModal } from '../context/AssessmentModalContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Roof Replacement',
    question: 'How long does a roof replacement take in South Florida?',
    answer: 'Most residential roof replacements in Broward and Palm Beach counties take 2-5 days depending on roof size, complexity, and material type. Tile roofs typically take longer than shingle roofs. Weather delays are factored into the timeline, especially during summer months.'
  },
  {
    category: 'Roof Replacement',
    question: 'When should I replace my roof vs. repair it?',
    answer: 'Generally, if repairs exceed 25-30% of replacement cost, or if your roof is over 20 years old with widespread damage, replacement is more cost-effective. Our inspectors provide detailed assessments comparing repair vs. replacement options with long-term value analysis.'
  },
  {
    category: 'Roof Replacement',
    question: 'Do I need a permit for roof replacement in Broward or Palm Beach County?',
    answer: 'Yes, roof replacements require building permits in both counties. All Phase Construction USA handles all permitting, inspections, and compliance documentation as part of our service. We ensure your project meets Florida Building Code and HVHZ requirements.'
  },
  {
    category: 'Roof Repair',
    question: 'How quickly can you respond to emergency roof repairs?',
    answer: 'We prioritize emergency leak repairs and storm damage. In most cases, we can provide temporary protection within 24-48 hours and schedule permanent repairs within a week, depending on material availability and weather conditions.'
  },
  {
    category: 'Roof Repair',
    question: 'Will my homeowners insurance cover roof repairs?',
    answer: 'Coverage depends on your policy and the cause of damage. Storm damage and sudden events are typically covered, while wear-and-tear or maintenance issues are not. We provide detailed documentation and work directly with insurance adjusters to support your claim.'
  },
  {
    category: 'Costs & Pricing',
    question: 'How much does a new roof cost in South Florida?',
    answer: 'Roof replacement costs vary based on material, size, and complexity. Typical ranges: shingle roofs ($8-$12/sq ft), tile roofs ($15-$25/sq ft), metal roofs ($12-$18/sq ft). Use our roof cost calculator for a detailed estimate based on your specific property.'
  },
  {
    category: 'Costs & Pricing',
    question: 'Do you offer financing options?',
    answer: 'Yes, we partner with multiple financing providers to offer flexible payment plans. Most homeowners qualify for same-as-cash options or low-interest financing. Visit our financing page or ask during your consultation for current offers.'
  },
  {
    category: 'Materials & Products',
    question: 'What roofing materials do you recommend for hurricane protection?',
    answer: 'For maximum hurricane protection, we recommend concrete tile, metal roofing, or HVHZ-rated impact-resistant shingles with enhanced fastening systems. All materials must meet Miami-Dade NOA requirements for wind uplift resistance in High Velocity Hurricane Zones.'
  },
  {
    category: 'Materials & Products',
    question: 'What is the best roofing material for South Florida climate?',
    answer: 'Concrete tile and standing seam metal roofs perform best in South Florida heat and humidity. Tile offers superior thermal mass and longevity (50+ years), while metal reflects heat and provides excellent wind resistance. Both materials qualify for insurance discounts.'
  },
  {
    category: 'Inspections',
    question: 'How often should I have my roof inspected?',
    answer: 'We recommend professional roof inspections annually and after major storms. Regular inspections catch minor issues before they become expensive problems. Many insurance companies require documented maintenance for coverage eligibility.'
  },
  {
    category: 'Inspections',
    question: 'What does a roof inspection include?',
    answer: 'Our comprehensive inspections evaluate roof covering condition, flashing integrity, penetration seals, underlayment visible from attic, ventilation adequacy, and structural concerns. You receive a detailed report with photos, repair recommendations, and remaining lifespan estimates.'
  },
  {
    category: 'Insurance & Warranty',
    question: 'What warranties do you provide?',
    answer: 'We provide workmanship warranties (typically 10 years) and coordinate manufacturer material warranties (15-50 years depending on product). All warranties are transferable to new owners, adding value when selling your home.'
  },
  {
    category: 'Insurance & Warranty',
    question: 'Can a new roof reduce my insurance premiums?',
    answer: 'Yes! New roofs with impact-resistant materials, proper installation documentation, and favorable wind mitigation inspection results often qualify for 20-45% insurance discounts. We provide all documentation needed for your insurance company.'
  },
  {
    category: 'Process & Timeline',
    question: 'Will I need to leave my home during roof replacement?',
    answer: 'No, you can remain in your home during most roof replacements. The process is noisy, especially during tear-off. We recommend planning accordingly if you work from home or have young children. Interior access is typically not needed.'
  },
  {
    category: 'Process & Timeline',
    question: 'What happens if it rains during my roof replacement?',
    answer: 'We monitor weather closely and protect your home with tarps if unexpected rain occurs. In most cases, we install underlayment quickly to establish a watertight barrier. We never leave an open roof overnight.'
  },
  {
    category: 'Service Areas',
    question: 'Do you service my area?',
    answer: 'We serve all of Broward County and Palm Beach County including Boca Raton, Deerfield Beach, Fort Lauderdale, Pompano Beach, Delray Beach, Boynton Beach, West Palm Beach, and surrounding communities. Contact us to confirm service availability for your specific location.'
  },
  {
    category: 'Company & Credentials',
    question: 'Are you licensed and insured?',
    answer: 'Yes, All Phase Construction USA is fully licensed (State Certified Roofing Contractor), bonded, and insured with comprehensive general liability and workers compensation coverage. We provide proof of insurance upon request and for all permit applications.'
  },
  {
    category: 'Company & Credentials',
    question: 'How long have you been in business?',
    answer: 'All Phase Construction USA has been serving Broward and Palm Beach counties for over 15 years. We are based in Deerfield Beach and maintain an A+ BBB rating. Our longevity ensures we will be here to honor our warranties and serve your future roofing needs.'
  }
];

export default function FrequentlyAskedQuestionsPage() {
  const { openModal } = useAssessmentModal();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1]));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];

  const filteredFAQs = selectedCategory === 'All'
    ? faqData
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | All Phase Construction USA</title>
        <meta name="description" content="Get answers to common questions about roof replacement, repairs, costs, materials, insurance, and our roofing services in Broward and Palm Beach counties." />
        <link rel="canonical" href="https://allphaseconstructionfl.com/frequently-asked-questions/" />
      </Helmet>

      <div className="min-h-screen bg-black pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">FAQs</span>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about roof replacement, repairs, materials, costs, and our services in Broward and Palm Beach counties.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-16">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-6 h-6 text-red-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Resources */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/roof-cost-calculator/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Roof Cost Calculator
                  </h3>
                  <p className="text-sm text-gray-400">Get an instant estimate</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/pricing-guide/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Pricing Guide
                  </h3>
                  <p className="text-sm text-gray-400">Detailed cost breakdown</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/roof-replacement-process/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Replacement Process
                  </h3>
                  <p className="text-sm text-gray-400">Step-by-step guide</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/how-to-hire-roofing-contractor/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Hiring Guide
                  </h3>
                  <p className="text-sm text-gray-400">Choosing the right contractor</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team is ready to answer your specific questions and provide a free roof assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Request Free Assessment
              </button>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300"
              >
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
