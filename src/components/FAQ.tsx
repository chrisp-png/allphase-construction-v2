import { useState, useEffect, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs: Array<{ question: string; answer: string | ReactNode; answerText?: string }> = [
  {
    question: 'How long does the actual roof installation take?',
    answer: 'Most residential roof replacements take 2-5 working days depending on size, complexity, and roof type. Tile roofs typically take longer than shingle or metal. We\'ll provide a specific timeline during your estimate.',
  },
  {
    question: 'What\'s the total timeline for a roof replacement project?',
    answer: 'From contract to completion, expect 2-6 weeks. The installation itself is quick (2-5 days), but permitting, HOA approval, engineering (if required), and inspections add time. We manage the entire process so you don\'t have to.',
  },
  {
    question: 'What approvals are needed before replacing a roof?',
    answer: 'Before we can submit for a permit, we typically need: HOA/COA approval (if applicable), engineering documents (for certain roof types), and an asbestos survey (required for older homes). These are usually the biggest factors affecting your project timeline.',
  },
  {
    question: 'Do you handle permits and inspections?',
    answer: 'Yes. We handle all permitting and inspections in-house. Our team manages the entire process from permit application through final inspection approval — one point of contact from start to finish.',
  },
  {
    question: 'Which roof type lasts the longest?',
    answer: 'Metal roofing lasts the longest — typically 40-70 years with minimal maintenance. Tile roofs last 30-50 years, while high-quality architectural shingles last 20-30 years. Lifespan depends on proper installation, materials, and South Florida\'s harsh weather conditions.',
  },
  {
    question: 'What roof type performs best in hurricanes?',
    answer: 'A standing seam metal roof offers the best hurricane performance. Standing seam metal roofs are rated for winds up to 225 mph — higher than any other residential roofing system. The concealed fastener design and interlocking seams prevent water intrusion even in extreme conditions, meaning water rarely reaches the underlayment. Tile roofs also perform well with proper foam adhesive attachment, but tiles can crack under impact. Metal may dent, but it stays intact and keeps water out. Important: this applies to standing seam metal roofs, not exposed fastener metal roofs, which have lower wind ratings.',
  },
  {
    question: 'Does the type of foam adhesive matter for tile roofs?',
    answer: 'Absolutely. The size, pattern, and manufacturer of foam adhesive directly affects wind uplift performance. We use only premium foam systems and proper application techniques to ensure your tile roof meets or exceeds HVHZ requirements. Not all tile roof installations are equal.',
  },
  {
    question: 'Do different shingle brands have different wind ratings?',
    answer: 'Yes. Wind ratings vary significantly by manufacturer and product line. Standard architectural shingles are typically rated for 110-130 mph. However, premium impact-resistant shingles offer much higher protection — the Tamko Titan shingle now boasts an industry-leading 160 mph wind warranty. Owens Corning, CertainTeed, and GAF also offer high-wind products rated for 130 mph or higher. We help you choose the right product for your needs, budget, and insurance requirements.',
  },
  {
    question: 'What\'s the best roof for South Florida?',
    answer: 'The \'best\' roof depends on your priorities. Standing seam metal roofs offer the highest wind ratings (up to 225 mph), longest lifespan (40-70 years), and excellent energy efficiency. Tile roofs provide a classic Florida aesthetic and strong wind performance — though ratings vary based on tile profile and the amount of foam adhesive used in installation. Shingles offer the lowest upfront cost with solid performance, especially premium options like the Tamko Titan rated at 160 mph. All can be installed to meet HVHZ hurricane codes when done correctly by a qualified contractor.',
  },
  {
    question: 'How much does a new roof cost in South Florida?',
    answer: (
      <>
        Roof costs vary significantly based on size, material, complexity, underlayment system, and installation method. Typical ranges: Shingle roofs $15,000-$35,000, Tile roofs $25,000-$55,000, Metal roofs $30,000-$65,000. However, South Florida's strict building codes mean there are many ways to install a roof correctly — each with different price points. For a more accurate estimate based on your specific area and needs, try our{' '}
        <a href="/roof-cost-calculator" className="text-red-600 hover:text-red-500 underline">
          Roof Cost Calculator
        </a>{' '}
        or contact us for a free on-site assessment.
      </>
    ),
    answerText: 'Roof costs vary significantly based on size, material, complexity, underlayment system, and installation method. Typical ranges: Shingle roofs $15,000-$35,000, Tile roofs $25,000-$55,000, Metal roofs $30,000-$65,000. However, South Florida\'s strict building codes mean there are many ways to install a roof correctly — each with different price points. For a more accurate estimate based on your specific area and needs, try our Roof Cost Calculator or contact us for a free on-site assessment.',
  },
  {
    question: 'Will a new roof lower my insurance premiums?',
    answer: 'Yes. A new roof with proper wind mitigation features can save South Florida homeowners $500-$6,500 annually on insurance premiums. We ensure all installations qualify for maximum wind mitigation credits on your Form 1802.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We are dual-licensed as a Roofing Contractor (CCC1331464) with General Contractor Certification (CGC1526236) in the State of Florida. We carry full liability insurance and workers\' compensation coverage. Being dual-licensed means one company handles everything — no subcontractor runaround.',
  },
  {
    question: 'How do I know if I\'m hiring the right roofing contractor?',
    answer: (
      <>
        Look for dual licensing (both CCC and CGC), HVHZ expertise, proper insurance, and a track record of passing inspections in Broward or Palm Beach County. Verify they pull permits, provide detailed documentation, and complete wind mitigation reports. For a complete guide on what to look for when hiring a roofer in South Florida, read our{' '}
        <a href="/locations/deerfield-beach/how-to-hire-a-roofing-contractor" className="text-red-600 hover:text-red-500 underline">
          comprehensive hiring guide
        </a>
        {' '}covering HVHZ requirements, questions to ask, and what to verify for different roof types.
      </>
    ),
    answerText: 'Look for dual licensing (both CCC and CGC), HVHZ expertise, proper insurance, and a track record of passing inspections in Broward or Palm Beach County. Verify they pull permits, provide detailed documentation, and complete wind mitigation reports. For a complete guide on what to look for when hiring a roofer in South Florida, read our comprehensive hiring guide covering HVHZ requirements, questions to ask, and what to verify for different roof types.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answerText || faq.answer,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common roofing questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
