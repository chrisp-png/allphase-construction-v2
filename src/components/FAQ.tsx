import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a new roof cost in Broward or Palm Beach County?',
    answer: 'A new roof in South Florida varies based on size, material, and code requirements. Shingle roofs cost less than tile or metal systems. Pricing includes tear-off, underlayment, HVHZ fastening, permits, inspections, and disposal. A written estimate provides exact project cost.',
  },
  {
    question: 'How long does a roof replacement take from start to finish?',
    answer: 'Roof installation typically takes 2–5 working days once permits and materials are ready. From contract signing to final inspection, most projects take 4–6 weeks, depending on permitting timelines, HOA approval, inspections, and material scheduling.',
  },
  {
    question: 'Do you handle roofing permits and inspections?',
    answer: 'Yes. We handle all roofing permits, inspections, and code compliance requirements. Projects are submitted to the local building department and installed to Florida Building Code and High Velocity Hurricane Zone (HVHZ) standards for safety and approval.',
  },
  {
    question: 'Are you licensed and insured in South Florida?',
    answer: 'All Phase Construction USA is fully licensed and insured in Florida. Roofing License CCC-1331464 and General Contractor License CGC-1526236. We carry liability and workers\' compensation coverage and meet all state and local regulatory requirements.',
  },
  {
    question: 'How do I know if I need roof repair or full replacement?',
    answer: 'Roof replacement is recommended when underlayment fails, leaks occur in multiple areas, or the roof reaches the end of its service life. Isolated damage may qualify for repair. A professional inspection determines the correct solution.',
  },
  {
    question: 'What roofing materials work best in the High Velocity Hurricane Zone?',
    answer: 'In Broward County\'s High Velocity Hurricane Zone, roofing systems must meet strict wind uplift and fastening standards. Shingle, tile, and metal roofs require approved assemblies and secondary water resistance. Proper installation ensures hurricane performance and inspection approval.',
  },
  {
    question: 'Is roof replacement covered by homeowners insurance?',
    answer: 'Insurance may cover roof replacement if damage results from a covered peril such as wind or storm impact. Approval depends on policy terms, roof age, and documented damage. Inspection reports support the claims process.',
  },
  {
    question: 'Do you serve Deerfield Beach and surrounding cities?',
    answer: 'We are headquartered in Deerfield Beach and serve Broward and Palm Beach Counties, including Boca Raton, Fort Lauderdale, Pompano Beach, Coral Springs, Delray Beach, Boynton Beach, and surrounding communities throughout South Florida.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Deerfield Beach & HVHZ Roofing — Frequently Asked Questions
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
