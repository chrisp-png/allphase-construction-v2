import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface CustomerPhoto {
  src: string;
  alt: string;
  city: string;
  citySlug: string;
  linkTo: string;
}

// CUSTOMER PHOTOS WITH CITY-SPECIFIC ROUTING
const customerPhotos: CustomerPhoto[] = [
  {
    src: '/social-proof/all-phase-construction-happy-customer-broward-county.JPG',
    alt: 'Happy roofing customer in Broward County, FL with All Phase Construction USA',
    city: 'Broward County',
    citySlug: 'broward-county',
    linkTo: '/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-fort-lauderdale-roofing.JPEG',
    alt: 'Happy roofing customer in Fort Lauderdale, FL with All Phase Construction USA',
    city: 'Fort Lauderdale',
    citySlug: 'fort-lauderdale',
    linkTo: '/locations/fort-lauderdale'
  },
  {
    src: '/social-proof/all-phase-customer-luxury-home-boca-raton.JPG',
    alt: 'Happy roofing customer in Boca Raton, FL with All Phase Construction USA',
    city: 'Boca Raton',
    citySlug: 'boca-raton',
    linkTo: '/locations/boca-raton'
  },
  {
    src: '/social-proof/all-phase-customer-new-roof-pompano-beach.JPEG',
    alt: 'Happy roofing customer in Pompano Beach, FL with All Phase Construction USA',
    city: 'Pompano Beach',
    citySlug: 'pompano-beach',
    linkTo: '/locations/pompano-beach'
  },
  {
    src: '/social-proof/all-phase-customer-roof-installation-delray-beach.JPEG',
    alt: 'Happy roofing customer in Delray Beach, FL with All Phase Construction USA',
    city: 'Delray Beach',
    citySlug: 'delray-beach',
    linkTo: '/locations/delray-beach'
  },
  {
    src: '/social-proof/all-phase-customer-shingle-roof-deerfield-beach.JPEG',
    alt: 'Happy roofing customer in Deerfield Beach, FL with All Phase Construction USA',
    city: 'Deerfield Beach',
    citySlug: 'deerfield-beach',
    linkTo: '/locations/deerfield-beach'
  },
  {
    src: '/social-proof/all-phase-customer-standing-seam-metal-roof-loxahatchee.JPEG',
    alt: 'Happy roofing customer in Loxahatchee, FL with All Phase Construction USA',
    city: 'Loxahatchee',
    citySlug: 'loxahatchee-groves',
    linkTo: '/locations/loxahatchee-groves'
  },
  {
    src: '/social-proof/all-phase-roofing-satisfied-customers-palm-beach.jpg',
    alt: 'Happy roofing customer in Palm Beach, FL with All Phase Construction USA',
    city: 'Palm Beach',
    citySlug: 'palm-beach',
    linkTo: '/locations/palm-beach'
  },
  {
    src: '/social-proof/all-phase-roofing-satisified-customers-coralsprings.jpg',
    alt: 'Happy roofing customer in Coral Springs, FL with All Phase Construction USA',
    city: 'Coral Springs',
    citySlug: 'coral-springs',
    linkTo: '/locations/coral-springs'
  },
  {
    src: '/social-proof/all-phase-satisfied-customer-coral-springs.JPEG',
    alt: 'Roofing customer and consultant in Coral Springs, FL — All Phase Construction USA',
    city: 'Coral Springs',
    citySlug: 'coral-springs',
    linkTo: '/locations/coral-springs'
  },
  {
    src: '/social-proof/Karl_at_Valencia_pointe_homeowner_event.JPEG',
    alt: 'Happy roofing customer in South Florida with All Phase Construction USA',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/service-areas'
  },
  {
    src: '/social-proof/all-phase-roofing-happy-homeowner-south-florida.JPEG',
    alt: 'Happy roofing customer in South Florida with All Phase Construction USA',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-luxury-home-palm-beach-county.JPEG',
    alt: 'Happy homeowner with luxury home in Palm Beach County after roof completion',
    city: 'Palm Beach County',
    citySlug: 'palm-beach-county',
    linkTo: '/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-roof-replacement-broward.JPEG',
    alt: 'Satisfied homeowner in Broward County after roof replacement by All Phase Construction USA',
    city: 'Broward County',
    citySlug: 'broward-county',
    linkTo: '/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-shingle-roof-south-florida.jpg',
    alt: 'Happy homeowner in South Florida after shingle roof installation',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/service-areas'
  }
];

export default function HappyCustomers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  // Diagnostic: Log first 3 image URLs on mount
  useEffect(() => {
    console.log('=== Happy Customers Image URLs ===');
    customerPhotos.slice(0, 3).forEach((photo, index) => {
      console.log(`Image ${index + 1}: ${photo.src}`);
      console.log(`  Alt: ${photo.alt}`);
      console.log(`  City: ${photo.city}`);
    });
    console.log('==================================');
  }, []);

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (!isHovering && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;

        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 4000);

    return () => clearInterval(autoScrollInterval);
  }, [isHovering]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      'name': 'Our Happy Customers',
      'description': 'Real homeowners. Real roofs. Real results.',
      'image': customerPhotos.map(photo => ({
        '@type': 'ImageObject',
        'url': `https://allphaseconstructionfl.com${photo.src}`,
        'description': photo.alt,
        'contentLocation': {
          '@type': 'Place',
          'name': photo.city
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Happy Customers
          </h2>
          <p className="text-gray-400 text-lg">
            Real homeowners. Real roofs. Real results.
          </p>
        </div>

        <div
          className="relative mb-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/90 hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/90 hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {customerPhotos.map((photo, index) => (
              <a
                key={index}
                href={photo.linkTo}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[280px] aspect-square rounded-2xl overflow-hidden group relative border border-gray-700/40 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width="280"
                  height="280"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay with City Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm drop-shadow-lg">
                      {photo.city}
                    </span>
                    <div className="bg-red-600 text-white p-1.5 rounded-full">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Top-right "View" badge - Always visible on hover */}
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  View
                </div>

                {/* Subtle red glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/0 group-hover:ring-red-600/40 transition-all duration-300 pointer-events-none" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/projects/"
            className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
