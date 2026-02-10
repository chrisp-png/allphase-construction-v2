import { Star } from 'lucide-react';
import { useEffect } from 'react';

const testimonials = [
  {
    name: 'Evelyn T.',
    location: 'Deerfield Beach, FL',
    rating: 5,
    text: 'From the beginning of the project to the end, I have nothing but praise for this team. Karl explained everything clearly, they were on time, and my roof is beautiful. I would recommend them 100%.',
  },
  {
    name: 'Howard M.',
    location: 'Boca Raton, FL',
    rating: 5,
    text: 'All Phase delivered on all their promises. All employees were extremely efficient and professional. I recommend them for any roof replacement job.',
  },
  {
    name: 'Ana B.',
    location: 'Palm Beach County, FL',
    rating: 5,
    text: 'Karl conducted a roof inspection and was thorough, honest, and reliable. He sent a detailed letter addressing all concerns. I highly recommend and look forward to working with him again.',
  },
];

export default function Testimonials() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'All Phase Construction USA',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '108',
        bestRating: '5',
        worstRating: '1',
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-[#0a0a0a]">
      {/* Real Customer Photo Collage Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Photo Grid with Slow Drift Animation */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 animate-[drift_60s_ease-in-out_infinite]">
          {/* Top Row */}
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/step-01-inspection-optimized.jpg)' }}
          />
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/step-10-piece-of-mind-optimized.jpg)' }}
          />
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/step-02-planning-optimized.jpg)' }}
          />

          {/* Bottom Row */}
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/step-08-install.jpg)' }}
          />
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/step-09-installed.jpg)' }}
          />
          <div
            className="bg-cover bg-center grayscale-[70%] blur-[2px]"
            style={{ backgroundImage: 'url(/tear-off-responsible-disposal-all-phase-construction-usa.jpg)' }}
          />
        </div>
      </div>

      {/* Dark Gradient Overlay - Darkest in center, lighter at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/98 to-[#0a0a0a]/95" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.6)_70%,rgba(10,10,10,0.9)_100%)]" />

      {/* Film Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Content Layer - Above Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-red-600 text-lg font-semibold">
            108+ Five-Star Google Reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-900/95 backdrop-blur-sm rounded-lg p-6 border border-neutral-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="border-t border-neutral-800 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/reviews"
            className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
