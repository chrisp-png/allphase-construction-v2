import { MapPin } from 'lucide-react';

const microFaqs = [
  {
    question: 'Where is All Phase Construction USA located?',
    answer: 'We are headquartered in Deerfield Beach, Florida and serve Broward and Palm Beach Counties.',
  },
  {
    question: 'Do you work throughout both Broward and Palm Beach County?',
    answer: 'Yes. Our crews operate daily across both counties for residential and commercial roofing projects.',
  },
  {
    question: 'Are you licensed to perform roofing work across South Florida?',
    answer: 'Yes. We are fully licensed in Florida and authorized to work throughout Broward and Palm Beach County.',
  },
];

export default function MicroFAQ() {
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
