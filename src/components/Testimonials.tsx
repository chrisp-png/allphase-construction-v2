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
    <section className="relative py-16 overflow-hidden">
      {/* Background Image with Overlay - SAME PATTERN AS HOWITWORKS */}
      <div className="absolute inset-0 z-0">
        {/* Photo Collage Background */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">
          {/* Top Row */}
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/step-01-inspection-optimized.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/step-10-piece-of-mind-optimized.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/step-02-planning-optimized.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />

          {/* Bottom Row */}
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/step-08-install.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/step-09-installed.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center brightness-110 contrast-90 saturate-90"
            style={{ backgroundImage: 'url(/images.jpg)' }}
            role="presentation"
            aria-hidden="true"
          />
        </div>
        {/* Lighter gradient overlay for enhanced background visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65" />
        {/* Subtle vignette effect for edge depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
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
              className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-7 border border-gray-700/60 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-700/50 pt-4">
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
