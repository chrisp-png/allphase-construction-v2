import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ADD NEW CUSTOMER PHOTOS TO THIS ARRAY
const customerPhotos = [
  {
    src: '/all-phase-construction-happy-customer-broward-county.jpg',
    alt: 'Happy customer after roof installation in Broward County by All Phase Construction'
  },
  {
    src: '/all-phase-customer-fort-lauderdale-roofing.jpeg',
    alt: 'Satisfied homeowner with new roof in Fort Lauderdale, Florida'
  },
  {
    src: '/all-phase-customer-luxury-home-boca-raton.jpg',
    alt: 'All Phase Construction customer at luxury home in Boca Raton'
  },
  {
    src: '/all-phase-customer-new-roof-pompano-beach.jpeg',
    alt: 'Happy customer after new roof installation in Pompano Beach'
  },
  {
    src: '/all-phase-customer-roof-installation-delray-beach.jpeg',
    alt: 'Satisfied customer after roof installation in Delray Beach'
  },
  {
    src: '/all-phase-customer-roof-replacement-broward.jpeg',
    alt: 'Happy homeowner after roof replacement in Broward County'
  },
  {
    src: '/all-phase-customer-shingle-roof-deerfield-beach.jpeg',
    alt: 'Customer with new shingle roof in Deerfield Beach, Florida'
  },
  {
    src: '/all-phase-customer-shingle-roof-south-florida.jpg',
    alt: 'Happy customer with shingle roof in South Florida'
  },
  {
    src: '/all-phase-customer-standing-seam-metal-roof-loxahatchee.jpeg',
    alt: 'Customer with new standing seam metal roof in Loxahatchee, Florida'
  },
  {
    src: '/all-phase-roofing-happy-homeowner-south-florida.jpeg',
    alt: 'Happy homeowner after roof replacement in South Florida'
  },
  {
    src: '/all-phase-roofing-satisfied-customers-palm-beach.jpg',
    alt: 'Satisfied roofing customers in Palm Beach County'
  },
  {
    src: '/all-phase-roofing-satisified-customers-coralsprings.jpg',
    alt: 'Happy customer after roof installation in Coral Springs'
  },
  {
    src: '/all-phase-satisfied-customer-coral-springs.jpeg',
    alt: 'Satisfied customer with new roof in Coral Springs, Florida'
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
        'url': `https://allphase.com${photo.src}`,
        'description': photo.alt
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
              <div
                key={index}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[280px] aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width="280"
                  height="280"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
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
