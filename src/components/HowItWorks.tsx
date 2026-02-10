import { Star, ExternalLink, Quote } from 'lucide-react';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/All+Phase+Construction+USA/@26.3087535,-80.3291243,11z/data=!4m6!3m5!1s0x88d91d982b569be1:0xc298661959b65cbf!8m2!3d26.3107856!4d-80.1251381!16s%2Fg%2F11c5045_rv?entry=ttu';

const processSteps = [
  {
    number: '01',
    title: 'Call Answered & Inspection Scheduled',
    description: 'When you call, a real receptionist answers. Our team gathers the basics and schedules your roof inspection immediately — no phone tag, no delays, just clean scheduling.',
    review: {
      text: 'From the beginning of the project to the end I have nothing to say other than I love dealing with every member of that team.',
      name: 'Evelyn',
      fullName: 'Evelyn Tainsky',
    },
  },
  {
    number: '02',
    title: 'Roof Inspection & Documentation',
    description: 'Our consultants inspect the roof and attic, document conditions, and clearly explain what needs attention now versus later.',
    review: {
      text: 'Karl conducted a roof inspection and was thorough, honest and reliable. He sent a detailed letter addressing all concerns.',
      name: 'Ana',
      fullName: 'Ana Blanco-Smith',
    },
  },
  {
    number: '03',
    title: 'Estimate & Options That Make Sense',
    description: 'Your estimate is built to be comprehensive. We explain repair vs. replacement options clearly, without pressure.',
    review: {
      text: 'Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed.',
      name: 'Betty',
      fullName: 'Betty Fronizer',
    },
  },
  {
    number: '04',
    title: 'Permitting & Engineering',
    description: 'Our in-house team prepares permits and coordinates any required engineering or uplift calculations based on your city\'s requirements.',
    review: {
      text: 'From start to finish they did everything they said they would. Once I signed with them they were way more communicative than I expected.',
      name: 'Anthony',
      fullName: 'Anthony Colarusso',
    },
  },
  {
    number: '05',
    title: 'Production Handoff & Planning',
    description: 'Once approved, your project is handed to our production team for measurements, material ordering, and job planning.',
    review: {
      text: 'I got a call every week from Carissa letting me know where we were in the process. Matt was the project manager and kept on top of things.',
      name: 'Betty',
      fullName: 'Betty Fronizer',
    },
  },
  {
    number: '06',
    title: 'Install Day & Oversight',
    description: 'On install day, a site supervisor oversees the project to ensure safety, quality, and correct installation.',
    review: {
      text: 'Great attention paid to safety of our property and their own workers. Thanks Dylan and Graham, team leader Israel, for keeping things together.',
      name: 'Douglas',
      fullName: 'Douglas Dolphy',
    },
  },
  {
    number: '07',
    title: 'Photo Documentation',
    description: 'The entire process is documented with photos, which are shared with you for transparency and records.',
    review: {
      text: 'From start to finish, the communication was clear and thorough. The professionalism, quality, and peace of mind I got with All Phase made it absolutely worth it.',
      name: 'Mom',
      fullName: 'Mom',
    },
  },
  {
    number: '08',
    title: 'Cleanup & Final Walkthrough',
    description: 'We clean as we go, then complete a final walkthrough with you so you understand exactly what was installed and why.',
    review: {
      text: 'The crew covered all my plants and cleaned everything up at the end of the day.',
      name: 'Betty',
      fullName: 'Betty Fronizer',
    },
  },
  {
    number: '09',
    title: 'Final Paperwork & Closeout',
    description: 'We provide closed permits, wind mitigation documents, and warranty explanations so nothing is left unanswered.',
    review: {
      text: 'Matt in production kept me in the loop from start to finish and Charly was there to walk me through the tear off and answered all the questions I had.',
      name: 'Anthony',
      fullName: 'Anthony Colarusso',
    },
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/step-09-installed.jpg)',
            willChange: 'transform',
          }}
          role="presentation"
          aria-hidden="true"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
        {/* Additional vignette effect for edge depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How a Roof Project Actually Gets Done — Start to Finish
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A clear, documented process — built for South Florida roofing, permits, and inspections.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-7 border border-gray-700/60 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md"
            >
              {/* Step Number Badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/60 rounded-xl mb-5 shadow-lg shadow-red-900/30">
                <span className="text-red-500 font-bold text-xl">{step.number}</span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-500 transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Review Snippet */}
              <div className="relative bg-black/60 border border-gray-700/50 rounded-xl p-5 mb-4 hover:border-gray-600/70 transition-colors backdrop-blur-sm">
                {/* Quote Icon */}
                <Quote className="absolute top-3 right-3 w-5 h-5 text-red-600/20" />

                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-400 text-xs leading-relaxed italic line-clamp-3 mb-1">
                  &quot;{step.review.text}&quot;
                </p>
              </div>

              {/* Google Review Link */}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 transition-colors group/link"
              >
                <span>See this review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
