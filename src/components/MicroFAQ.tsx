import { MapPin } from 'lucide-react';

const microFaqs = [
  {
    question: 'Can a roofer do my wind mitigation report?',
    answer: 'Usually, no — a wind mitigation report generally must be completed by a properly licensed inspector (often a home inspector, engineer, architect, or a Florida-licensed general contractor, depending on the credential). Many roofing contractors can\'t sign that form unless they also hold the appropriate license. If your roofer is also a GC, it can simplify coordination because the same firm can evaluate roofing + related structural mitigation opportunities.',
  },
  {
    question: 'Is Palm Beach County part of Florida\'s HVHZ?',
    answer: 'No. Florida\'s HVHZ designation applies to Miami-Dade and Broward counties. Palm Beach County is outside the HVHZ, but many Palm Beach jurisdictions follow very strict high-wind standards and product approval requirements that can be close to HVHZ-level intent, especially for uplift resistance and opening protection.',
  },
  {
    question: 'Will a new roof help lower my insurance?',
    answer: 'Yes — a new roof can reduce insurance costs, especially when paired with documented wind mitigation features (improved roof-to-deck attachment, secondary water barrier, enhanced fastening patterns, and approved assemblies). If your roofing contractor also holds a GC license, you may be able to address certain structural upgrades more efficiently, which can unlock additional mitigation credits depending on your home and insurer.',
  },
];

export default function MicroFAQ() {
  return (
    <section className="hv-hurricane-section py-16 bg-neutral-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Deerfield Beach & High Velocity Hurricane Zone — Common Questions
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {microFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-6 border border-neutral-700"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
