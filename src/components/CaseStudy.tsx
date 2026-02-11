import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ADD NEW CASE STUDIES TO THIS ARRAY
const caseStudies = [
  {
    id: 1,
    subtitle: 'How a Boca Raton homeowner turned a $49,999 roof into $109,000+ in savings',
    image: '/all-phase-customer-luxury-home-boca-raton.jpg',
    imageAlt: 'Maria T. Boca Raton barrel tile roof replacement',
    customerName: 'Maria T. — Boca Raton, FL',
    title: 'Barrel Tile Roof Replacement',
    badges: ['Barrel Tile', 'HVHZ Compliant', 'Wind Mitigation Maximized'],
    challenge: '25-year-old tile roof was no longer being accepted by her insurance company. She was forced to replace it or lose coverage — with premiums already at $9,200/year. She faced a choice: find a new carrier willing to insure an aging roof, or invest in a roof that pays for itself.',
    solution: {
      text: 'Complete tear-off and replacement with premium barrel tile system, including:',
      items: [
        'Foam-adhered tile attachment for maximum wind uplift resistance',
        'Secondary Water Resistance (SWR) underlayment',
        'Full deck re-nailing to current HVHZ code',
        'Double hurricane straps on all trusses',
        'Upgraded ventilation with a solar-powered attic fan'
      ]
    },
    investment: '$49,999',
    quote: '"Maria didn\'t just buy a roof — she made an investment that will return over $109,000 in savings over 20 years. That\'s not marketing. That\'s math."',
    schema: {
      headline: 'Barrel Tile Roof Replacement ROI Case Study — Boca Raton',
      description: 'How a Boca Raton homeowner turned a $49,999 roof into $109,000+ in savings through insurance reductions, energy efficiency, and wind mitigation.',
      datePublished: '2025-01-15'
    }
  },
  {
    id: 2,
    subtitle: 'How a Fort Lauderdale homeowner turned a $24,999 roof into $42,000+ in savings',
    image: '/all-phase-customer-shingle-roof-south-florida.jpg',
    imageAlt: 'Robert M. Fort Lauderdale shingle roof replacement',
    customerName: 'Robert M. — Fort Lauderdale, FL',
    title: 'Shingle Roof Replacement',
    badges: ['Tamko Titan XT', '160 MPH Wind Rated', 'Wind Mitigation Maximized'],
    challenge: 'Aging 3-tab shingle roof was 18 years old with visible wear and no impact resistance. Insurance company required replacement to maintain coverage. Homeowner wanted the best value without overspending.',
    solution: {
      text: null,
      items: [
        'Tamko Titan XT impact-resistant shingles with 160 mph wind warranty',
        'Secondary Water Resistance (SWR) underlayment',
        'Full deck re-nailing to current HVHZ code',
        'Added third nail to existing trusses to maximize wind mitigation credits',
        'Replaced passive vents with solar-powered attic fan'
      ]
    },
    investment: '$24,999',
    quote: '"Robert didn\'t need the most expensive roof — he needed the smartest investment. His $24,999 shingle roof will return over $42,000 in savings over 20 years. Sometimes the practical choice is the profitable one."',
    schema: {
      headline: 'Shingle Roof Replacement ROI Case Study — Fort Lauderdale',
      description: 'How a Fort Lauderdale homeowner turned a $24,999 roof into $42,000+ in savings through insurance reductions, energy efficiency, and impact resistance.',
      datePublished: '2025-01-15'
    }
  }
];

export default function CaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scripts = caseStudies.map((study) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: study.schema.headline,
        description: study.schema.description,
        datePublished: study.schema.datePublished,
        author: {
          '@type': 'Organization',
          name: 'All Phase Construction USA',
          url: 'https://allphaseusa.com'
        },
        publisher: {
          '@type': 'Organization',
          name: 'All Phase Construction USA',
          url: 'https://allphaseusa.com'
        }
      });
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach(script => document.head.removeChild(script));
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentStudy = caseStudies[currentSlide];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Project: The Numbers Don't Lie
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {currentStudy.subtitle}
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto mb-12 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-neutral-800 hover:bg-neutral-700 text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-neutral-800 hover:bg-neutral-700 text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="bg-neutral-900 rounded-lg overflow-hidden border-l-4 border-red-600 shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col">
                <div className="h-64 md:h-auto md:flex-1">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.imageAlt}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-neutral-800 p-4 text-center">
                  <p className="text-white font-semibold text-sm">{currentStudy.customerName}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {currentStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentStudy.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`inline-block px-3 py-1 ${
                          index === 0 ? 'bg-red-600' : 'bg-neutral-700'
                        } text-white text-xs font-semibold rounded-full`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-white font-bold mb-2">The Challenge:</h4>
                    <p className="text-sm leading-relaxed">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-2">Our Solution:</h4>
                    {currentStudy.solution.text && (
                      <p className="text-sm mb-2">{currentStudy.solution.text}</p>
                    )}
                    <ul className="text-sm space-y-1 ml-4 list-disc list-inside">
                      {currentStudy.solution.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-neutral-700">
                    <h4 className="text-white font-bold mb-1">Investment:</h4>
                    <p className="text-2xl font-bold text-red-600">{currentStudy.investment}</p>
                  </div>

                  <div className="pt-2 border-t border-neutral-700">
                    <h4 className="text-white font-bold mb-2">Results:</h4>
                    <p className="text-sm leading-relaxed">
                      {currentStudy.id === 1 ? (
                        <>
                          Passed inspection. Insurance dropped from $9,200 to $4,400/year — saving{' '}
                          <span className="font-bold text-red-600">$4,800 annually</span>. Solar attic fan cuts $55/month from electric bills. Total savings over 20 years:{' '}
                          <span className="font-bold text-red-600">$109,200</span>.
                        </>
                      ) : (
                        <>
                          Insurance renewed with{' '}
                          <span className="font-bold text-red-600">$1,600/year</span> savings. Solar attic fan saves $45/month on cooling. Total savings over 20 years:{' '}
                          <span className="font-bold text-red-600">$42,800</span>.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-red-600 w-8'
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-neutral-900 rounded-lg p-8 border-2 border-red-600 text-center">
            <p className="text-white text-lg leading-relaxed italic">
              {currentStudy.quote}
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/roof-cost-calculator"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
          >
            Calculate Your Roof's ROI
          </a>
          <a
            href="/roof-replacement-process"
            className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            See Our 10-Step Roof Replacement Process
          </a>
          <a
            href="/projects/"
            className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
