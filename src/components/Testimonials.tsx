import { Star, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { EXTERNAL_LINKS } from '../config/links';

// CUSTOMER PHOTOS FOR COLLAGE BACKGROUND
// Explicit list to ensure NO DUPLICATES - ONLY photos showing customers with sales reps/team
const collageImages = [
  '/social-proof/all-phase-construction-happy-customer-broward-county.JPG', // Happy customer with team
  '/social-proof/all-phase-roofing-satisfied-customers-palm-beach.jpg', // Satisfied customers Palm Beach
  '/social-proof/all-phase-roofing-happy-homeowner-south-florida.JPEG', // Happy homeowner South Florida
  '/social-proof/all-phase-satisfied-customer-coral-springs.JPEG', // Satisfied customer Coral Springs
  '/social-proof/Karl_at_Valencia_pointe_homeowner_event.JPEG', // Karl at homeowner event
  '/social-proof/all-phase-customer-fort-lauderdale-roofing.JPEG', // Customer Fort Lauderdale
  '/social-proof/all-phase-roofing-satisified-customers-coralsprings.jpg', // Satisfied customers Coral Springs
  '/social-proof/all-phase-customer-new-roof-pompano-beach.JPEG', // Customer new roof Pompano Beach
  '/social-proof/all-phase-customer-luxury-home-boca-raton.JPG', // Customer luxury home Boca Raton
];

// Deduplication helper (safety check)
const uniqueCollageImages = Array.from(new Set(collageImages));

// Ensure we have no duplicates
if (uniqueCollageImages.length !== collageImages.length) {
  console.error('Duplicate images detected in testimonials collage!');
}

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
      {/* Background Image with Overlay - CUSTOMER PHOTOS ONLY */}
      <div className="absolute inset-0 z-0">
        {/* Photo Collage Background - 9 UNIQUE CUSTOMER PHOTOS with 40% opacity and 60% saturation */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 opacity-40">
          {/* Row 1 - Customer Photos */}
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[0]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[1]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[2]})` }}
            role="presentation"
            aria-hidden="true"
          />

          {/* Row 2 - Customer Photos */}
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[3]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[4]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[5]})` }}
            role="presentation"
            aria-hidden="true"
          />

          {/* Row 3 - Customer Photos */}
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[6]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[7]})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div
            className="bg-cover bg-center saturate-[60%]"
            style={{ backgroundImage: `url(${uniqueCollageImages[8]})` }}
            role="presentation"
            aria-hidden="true"
          />
        </div>
        {/* Dark overlay at 85% to maintain readability while showing collage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/85 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
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
                <p className="text-gray-400 text-sm mb-3">{testimonial.location}</p>
                <a
                  href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-500 text-sm font-medium transition-colors duration-200"
                >
                  See this review on Google
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/reviews/"
            className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
