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
const allCustomerPhotos: CustomerPhoto[] = [
  {
    src: '/social-proof/all-phase-construction-happy-customer-broward-county.JPG',
    alt: 'Happy roofing customer in Broward County, FL with All Phase Construction USA',
    city: 'Broward County',
    citySlug: 'broward-county',
    linkTo: '/locations/fort-lauderdale'
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
    linkTo: '/locations/boynton-beach'
  },
  {
    src: '/social-proof/all-phase-roofing-satisified-customers-coralsprings.jpg',
    alt: 'Happy roofing customer in Coral Springs, FL with All Phase Construction USA',
    city: 'Coral Springs',
    citySlug: 'coral-springs',
    linkTo: '/locations/delray-beach'
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
    linkTo: '/locations/service-areas'
  },
  {
    src: '/social-proof/all-phase-roofing-happy-homeowner-south-florida.JPEG',
    alt: 'Happy roofing customer in South Florida with All Phase Construction USA',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/locations/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-luxury-home-palm-beach-county.JPEG',
    alt: 'Happy homeowner with luxury home in Palm Beach County after roof completion',
    city: 'Palm Beach County',
    citySlug: 'palm-beach-county',
    linkTo: '/locations/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-roof-replacement-broward.JPEG',
    alt: 'Satisfied homeowner in Broward County after roof replacement by All Phase Construction USA',
    city: 'Broward County',
    citySlug: 'broward-county',
    linkTo: '/locations/service-areas'
  },
  {
    src: '/social-proof/all-phase-customer-shingle-roof-south-florida.jpg',
    alt: 'Happy homeowner in South Florida after shingle roof installation',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/locations/pompano-beach'
  },
  {
    src: '/social-proof/graham-with-happy-customer-all-phase-usa.jpg',
    alt: 'All Phase Construction representative Graham with happy customer holding new roof sign in South Florida',
    city: 'South Florida',
    citySlug: 'service-areas',
    linkTo: '/locations/service-areas'
  }
];

// DEFENSIVE FILTER: Validate and fix entries before rendering
// Apply fallbacks for invalid data to ensure images always render
const customerPhotos = allCustomerPhotos
  .filter((photo): photo is CustomerPhoto => {
    // Only reject if src is completely missing or invalid
    if (!photo || typeof photo.src !== 'string' || photo.src.trim().length === 0) {
      console.warn('⚠️ Carousel: Rejected photo (missing or empty src)', photo);
      return false;
    }

    // Validate has proper image extension
    const validExtensions = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG', '.webp', '.WEBP'];
    const hasValidExtension = validExtensions.some(ext => photo.src.endsWith(ext));
    if (!hasValidExtension) {
      console.warn('⚠️ Carousel: Rejected photo with invalid extension', photo.src);
      return false;
    }

    return true;
  })
  .map((photo): CustomerPhoto => {
    // Apply fallback for missing alt text
    const alt = photo.alt || 'Happy roofing customer with All Phase Construction USA';

    // Apply fallback for missing city
    const city = photo.city || 'South Florida';

    // HARD OVERRIDES FOR NON-CITY LOCATION LABELS
    // Override routing for county/region labels to valid pages
    let linkTo = photo.linkTo;

    if (city === 'South Florida') {
      // South Florida → Boca Raton city page
      linkTo = '/locations/boca-raton';
    } else if (city === 'Broward County') {
      // Broward County → Keep county page
      linkTo = '/locations/broward-county';
    } else if (city === 'Palm Beach County') {
      // Palm Beach County → Keep county page
      linkTo = '/locations/palm-beach-county';
    } else if (!linkTo || typeof linkTo !== 'string' || linkTo.trim().length === 0 || !linkTo.startsWith('/')) {
      // Global fallback for missing or invalid linkTo → Service Areas Hub
      console.warn('⚠️ Carousel: Applied fallback linkTo for photo', photo.src, 'original:', linkTo);
      linkTo = '/locations';
    }

    return {
      ...photo,
      linkTo,
      alt,
      city
    };
  });

// Diagnostic log to track carousel health
if (typeof window !== 'undefined') {
  console.log('=== Happy Customers Carousel Diagnostic ===');
  console.log(`Total photos after filtering: ${customerPhotos.length}/${allCustomerPhotos.length}`);
  console.log('All carousel images:', customerPhotos.map((p, i) => `\n  [${i+1}] ${p.src} → ${p.linkTo}`).join(''));
  console.log('==========================================');
}

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

  // Diagnostic: Log full carousel array on mount
  useEffect(() => {
    console.log('=== Happy Customers Carousel Diagnostic ===');
    console.log(`Total photos after filtering: ${customerPhotos.length}/${allCustomerPhotos.length}`);
    console.log('\nAll carousel images:');
    customerPhotos.forEach((photo, index) => {
      console.log(`  [${index + 1}] ${photo.src}`);
    });
    console.log('\nFirst 3 images (detailed):');
    customerPhotos.slice(0, 3).forEach((photo, index) => {
      console.log(`  Image ${index + 1}:`);
      console.log(`    src: ${photo.src}`);
      console.log(`    alt: ${photo.alt}`);
      console.log(`    city: ${photo.city}`);
      console.log(`    linkTo: ${photo.linkTo}`);
    });
    console.log('==========================================');
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
                key={`${photo.src}-${index}`}
                href={photo.linkTo}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[280px] rounded-2xl overflow-hidden group relative border border-gray-700/40 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{
                  aspectRatio: '1/1',
                  minHeight: '280px',
                  height: '280px'
                }}
              >
                {/* Image - Always render for desktop */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width="280"
                  height="280"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    console.error('❌ Carousel: Failed to load image', photo.src);
                    e.currentTarget.style.display = 'none';
                  }}
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
