import { Phone, Search, Clipboard, Wrench, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Phone,
    title: 'Contact & Consultation',
    description: 'Call us or request a quote online. We\'ll listen, ask the right questions, and schedule a time that works for you.',
  },
  {
    icon: Search,
    title: 'Inspection & Estimate',
    description: 'Our team performs a thorough on-site assessment. You\'ll receive honest recommendations and a detailed written estimate with no surprises.',
  },
  {
    icon: Clipboard,
    title: 'Pre-Production',
    description: 'Materials ordered, permits pulled with Broward or Palm Beach County, crew scheduled. You\'re kept in the loop at every step.',
  },
  {
    icon: Wrench,
    title: 'Production Day',
    description: 'Professional crew on site, work done to manufacturer spec and Florida Building Code. Jobsite kept clean throughout.',
  },
  {
    icon: CheckCircle,
    title: 'Final Walkthrough & Aftercare',
    description: 'We walk you through the finished work, hand over all warranty documentation, and follow up to make sure everything is right.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed brightness-110 contrast-90 saturate-90"
          style={{
            backgroundImage: 'url(/step-09-installed.jpg)',
            willChange: 'transform',
          }}
          role="presentation"
          aria-hidden="true"
        />
        {/* Lighter gradient overlay for enhanced background visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65" />
        {/* Subtle vignette effect for edge depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What to Expect When You Hire All Phase Construction USA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We've designed our process to keep you informed and stress-free from the first phone call to the final inspection. Here's how it works:
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 border border-gray-700/60 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md"
              >
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
