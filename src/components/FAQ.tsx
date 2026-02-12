import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string[];
}

const faqs: FAQItem[] = [
  {
    question: 'How much does a new roof cost in South Florida?',
    answer: [
      'Roof replacement costs in South Florida typically range from $10,000 to $45,000+ depending on roof size, material (shingle, tile, metal, or flat systems), and code requirements. HVHZ compliance may require additional underlayment, fasteners, and inspections.',
      'Standard payment terms usually require a deposit of 10–30% upfront, with the balance due after project completion.',
      'We provide free, detailed written estimates so you know exactly what you\'re paying for—no hidden fees, no surprises.'
    ],
  },
  {
    question: 'How do I know if I need a roof repair or full replacement?',
    answer: [
      'If your roof has localized damage—a few missing shingles, a small leak, or minor flashing issues—a repair may be all you need. But if your roof is 15–20+ years old, has widespread damage, or has failed an inspection, replacement is usually the smarter long-term investment.',
      'Our inspectors will give you an honest assessment. We don\'t push replacements when a repair will do the job.'
    ],
  },
  {
    question: 'Do I need a permit for roofing work in Broward or Palm Beach County?',
    answer: [
      'Yes. Florida law requires permits for most roofing work, and both Broward and Palm Beach Counties enforce strict permitting and inspection processes—especially in the High Velocity Hurricane Zone. We handle all permit coordination for you.'
    ],
  },
  {
    question: 'How long does a typical roof replacement take?',
    answer: [
      'Roof installation typically takes 2–5 actual working days once permits, HOA approvals, and materials are ready. From contract signing to final inspection, most projects take 3–6 weeks, depending on permitting timelines, HOA approval, inspections, and material scheduling.'
    ],
  },
  {
    question: 'Does homeowner\'s insurance cover roof replacement in Florida?',
    answer: [
      'If your roof was damaged by a covered peril—such as a hurricane, hailstorm, or falling debris—your homeowner\'s insurance may cover part or all of the replacement cost. We assist with insurance documentation, damage assessments, and claims coordination.'
    ],
  },
  {
    question: 'What is the best roofing material for hurricane zones?',
    answer: [
      'In South Florida\'s HVHZ, the best roofing materials are those rated for high-wind performance. Concrete tile, metal roofing, and impact-rated shingle systems all perform well when installed to code. The right choice depends on your home\'s structure, budget, and aesthetic preference.'
    ],
  },
  {
    question: 'How do I choose the right roofing contractor in South Florida?',
    answer: [
      'Look for a roofing contractor who is Florida-licensed, properly insured, and holds manufacturer certifications. Check their BBB rating, Google reviews, and how long they\'ve been in business locally. Avoid storm chasers and companies that pressure you to sign over your insurance claim.'
    ],
  },
  {
    question: 'What is the My Safe Florida Home Program?',
    answer: [
      'The My Safe Florida Home Program provides free wind inspections and matching grants to help Florida homeowners strengthen their homes against hurricanes. As one of the original Certified MySafeFloridaHome Contractors, All Phase Construction USA is qualified to perform the recommended improvements.'
    ],
  },
  {
    question: 'What voids a roof warranty?',
    answer: [
      'Common warranty voidances include improper installation, unauthorized repairs by uncertified contractors, failure to maintain adequate attic ventilation, and walking on the roof without proper precautions. Our manufacturer certifications ensure your warranty stays intact from day one.'
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="roofing-faq-south-florida" className="faq-section py-16 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked Questions — Roofing in South Florida
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common roofing questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-3">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
