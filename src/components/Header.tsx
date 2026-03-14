import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { useAssessmentModal } from '../context/AssessmentModalContext';
import { EXTERNAL_LINKS } from '../config/links';

export default function Header() {
  const { openModal } = useAssessmentModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoofTypesOpen, setIsRoofTypesOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isSinglePlyOpen, setIsSinglePlyOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isCommercialSinglePlyOpen, setIsCommercialSinglePlyOpen] = useState(false);
  const [isRoofRepairOpen, setIsRoofRepairOpen] = useState(false);
  const [isLearningCenterOpen, setIsLearningCenterOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Residential-specific services (includes Roof Replacement Process)
  const residentialServices = [
    { name: 'Roof Replacement Process', path: '/roof-replacement-process/' },
    { name: 'Tile Roofing', path: '/tile-roofing/' },
    { name: 'Metal Roofing', path: '/metal-roofing/' },
    { name: 'Shingle Roofing', path: '/shingle-roofing/' },
    { name: 'Built-Up Roofing (BUR)', path: '/flat-roofing/' },
    {
      name: 'Single-Ply Roofing',
      path: '/single-ply-roofing/',
      hasSubmenu: false
    },
  ];

  // Material-based services that appear under Commercial
  const materialBasedServices = [
    { name: 'Tile Roofing', path: '/tile-roofing/' },
    { name: 'Metal Roofing', path: '/metal-roofing/' },
    { name: 'Shingle Roofing', path: '/shingle-roofing/' },
    { name: 'Built-Up Roofing (BUR)', path: '/flat-roofing/' },
    {
      name: 'Single-Ply Roofing',
      path: '/single-ply-roofing/',
      hasSubmenu: false
    },
  ];

  const roofTypes = [
    { name: 'Roof Inspection', path: '/roof-inspection/' },
    {
      name: 'Roof Repair',
      path: '/roof-repair/',
      hasSubmenu: true,
      submenu: [
        { name: 'Boca Raton', path: '/roof-repair/boca-raton/' },
        { name: 'Boynton Beach', path: '/roof-repair/boynton-beach/' },
        { name: 'Broward County', path: '/roof-repair/broward-county/' },
        { name: 'Coconut Creek', path: '/roof-repair/coconut-creek/' },
        { name: 'Cooper City', path: '/roof-repair/cooper-city/' },
        { name: 'Coral Springs', path: '/roof-repair/coral-springs/' },
        { name: 'Dania Beach', path: '/roof-repair/dania-beach/' },
        { name: 'Davie', path: '/roof-repair/davie/' },
        { name: 'Deerfield Beach', path: '/roof-repair/deerfield-beach/' },
        { name: 'Delray Beach', path: '/roof-repair/delray-beach/' },
        { name: 'Fort Lauderdale', path: '/roof-repair/fort-lauderdale/' },
        { name: 'Greenacres', path: '/roof-repair/greenacres/' },
        { name: 'Hallandale Beach', path: '/roof-repair/hallandale-beach/' },
        { name: 'Haverhill', path: '/roof-repair/haverhill/' },
        { name: 'Hollywood', path: '/roof-repair/hollywood/' },
        { name: 'Lake Worth Beach', path: '/roof-repair/lake-worth/' },
        { name: 'Lantana', path: '/roof-repair/lantana/' },
        { name: 'Palm Beach', path: '/roof-repair/palm-beach/' },
        { name: 'Palm Beach County', path: '/roof-repair/palm-beach-county/' },
        { name: 'Palm Beach County Unincorporated', path: '/roof-repair/palm-beach-county-unincorporated/' },
        { name: 'Parkland', path: '/roof-repair/parkland/' },
        { name: 'Pompano Beach', path: '/roof-repair/pompano-beach/' },
        { name: 'Sunrise', path: '/roof-repair/sunrise/' },
        { name: 'Wellington', path: '/roof-repair/wellington/' },
        { name: 'West Palm Beach', path: '/roof-repair/west-palm-beach/' },
        { name: 'Wilton Manors', path: '/roof-repair/wilton-manors/' },
      ]
    },
    {
      name: 'Residential Roofing',
      path: '/residential-roofing/',
      hasSubmenu: true,
      submenu: residentialServices
    },
    {
      name: 'Commercial Roofing',
      path: '/commercial-roofing/',
      hasSubmenu: true,
      submenu: materialBasedServices
    },
    { name: 'Roof Maintenance Programs', path: '/roof-maintenance-programs/' },
  ];

  const learningCenter = [
    { name: 'Roof Cost Calculator', path: '/roof-cost-calculator/' },
    { name: 'Pricing Guide', path: '/pricing-guide/' },
    { name: 'Financing Options', path: '/easy-payments/' },
    { name: 'Frequently Asked Questions', path: '/frequently-asked-questions/' },
    { name: 'All Articles', path: '/blog/' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-xl' : 'bg-black/95'
      }`}
    >
      {/* Utility Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-gray-300 font-medium">OPEN 24/7 / 365 DAYS</span>
              <span className="hidden md:inline text-gray-400">
                Dual Licensed Certified Roofing Contractor — CGC-1526236 | CCC-1331464
              </span>
              <span className="hidden sm:inline md:hidden text-gray-400">
                Dual Licensed Contractor
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium text-xs"
                aria-label="Read our 4.8 star Google reviews"
              >
                <span className="hidden sm:inline">4.8 <span className="text-yellow-400">★</span> Google Reviews</span>
                <span className="sm:hidden">4.8<span className="text-yellow-400">★</span> Reviews</span>
              </a>
              <a
                href={EXTERNAL_LINKS.GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium text-xs"
                aria-label="Get directions to our office"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Get Directions</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Call Now:</span>
                <a
                  href="tel:+17542275605"
                  className="text-white hover:text-red-400 transition-colors font-bold text-sm"
                  aria-label="Call us at 754-227-5605"
                >
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[70px] sm:min-h-[80px] lg:min-h-[100px] py-4 sm:py-5 lg:py-6">
          <div className="flex items-center lg:min-w-[280px]">
            <Link to="/" className="flex items-center gap-3" aria-label="All Phase Construction USA - Home">
              <img
                src="/ui-logo-320.webp"
                srcSet="/ui-logo-240.webp 240w, /ui-logo-320.webp 320w, /ui-logo-480.webp 480w"
                sizes="(max-width: 640px) 160px, 280px"
                alt="All Phase Construction USA"
                className="h-14 sm:h-[72px] md:h-[84px] lg:h-[100px] w-auto object-contain"
                width="320"
                height="213"
                loading="eager"
                fetchPriority="high"
              />
              <div className="flex flex-col">
                <span className="hidden lg:block text-white font-bold text-base xl:text-lg whitespace-nowrap leading-tight">
                  All Phase Construction USA
                </span>
                <span className="text-red-600 font-semibold text-xs sm:text-sm whitespace-nowrap">
                  Dual Licensed Roofing Contractor
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap">
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/roofing-services"
                className="text-white hover:text-red-600 transition-colors font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-3 text-base whitespace-nowrap"
                aria-label="Roofing services menu"
                aria-haspopup="true"
              >
                Roofing
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {roofTypes.map((type) => (
                  <div key={type.name} className="relative group/item">
                    {type.hasSubmenu ? (
                      <>
                        <Link
                          to={type.path}
                          className="flex items-center justify-between px-4 py-3 text-white hover:bg-red-600 transition-colors cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                        >
                          <span>{type.name}</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                        <div className="absolute left-full top-0 ml-1 w-56 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 max-h-[70vh] overflow-y-auto">
                          {type.submenu?.map((subItem) => (
                            <div key={subItem.name} className="relative group/subitem">
                              {subItem.hasSubmenu ? (
                                <>
                                  <div className="flex items-center justify-between px-4 py-3 text-white hover:bg-red-600 transition-colors cursor-pointer first:rounded-t-lg last:rounded-b-lg">
                                    <span>{subItem.name}</span>
                                    <ChevronRight className="w-4 h-4" />
                                  </div>
                                  <div className="absolute left-full top-0 ml-1 w-48 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-200 max-h-[70vh] overflow-y-auto">
                                    {subItem.submenu?.map((thirdItem) => (
                                      <Link
                                        key={thirdItem.name}
                                        to={thirdItem.path}
                                        className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                      >
                                        {thirdItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={type.path}
                        className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {type.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-white hover:text-red-600 transition-colors font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-3 text-base whitespace-nowrap"
                aria-label="Locations menu"
                aria-haspopup="true"
              >
                Locations
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
              to="/locations/deerfield-beach/"
              className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              Deerfield Beach
            </Link>
            <Link
              to="/locations/service-areas/"
              className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              Service Areas
            </Link>
            <Link
              to="/locations/deerfield-beach/best-roofers-deerfield-beach/"
              className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              Best Roofers in Deerfield Beach
            </Link>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/learning-center/"
                className="text-white hover:text-red-600 transition-colors font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-3 text-base whitespace-nowrap"
                aria-label="Learning Center menu"
                aria-haspopup="true"
              >
                Learning Center
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {learningCenter.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-white hover:bg-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about-us/" className="text-white hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap">
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center ml-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="px-4 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 whitespace-nowrap text-base focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
            >
              Request Assessment
            </button>
          </div>

          <button
            className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsRoofTypesOpen(!isRoofTypesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-red-600 transition-colors py-3 font-medium focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2"
                aria-expanded={isRoofTypesOpen}
                aria-label="Toggle roofing services menu"
              >
                Roofing
                <ChevronDown className={`w-4 h-4 transition-transform ${isRoofTypesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isRoofTypesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {roofTypes.map((type) => (
                    <div key={type.name}>
                      {type.hasSubmenu ? (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <Link
                              to={type.path}
                              className="flex-1 text-gray-400 hover:text-red-600 transition-colors py-3"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {type.name}
                            </Link>
                            <button
                              onClick={() => {
                                if (type.name === 'Residential Roofing') {
                                  setIsResidentialOpen(!isResidentialOpen);
                                } else if (type.name === 'Commercial Roofing') {
                                  setIsCommercialOpen(!isCommercialOpen);
                                } else if (type.name === 'Roof Repair') {
                                  setIsRoofRepairOpen(!isRoofRepairOpen);
                                }
                              }}
                              className="px-2 text-gray-400 hover:text-red-600 transition-colors py-3 focus:outline-none"
                              aria-label={`Toggle ${type.name} submenu`}
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform ${
                                (type.name === 'Residential Roofing' && isResidentialOpen) ||
                                (type.name === 'Commercial Roofing' && isCommercialOpen) ||
                                (type.name === 'Roof Repair' && isRoofRepairOpen)
                                  ? 'rotate-180'
                                  : ''
                              }`} />
                            </button>
                          </div>
                          {((type.name === 'Residential Roofing' && isResidentialOpen) ||
                            (type.name === 'Commercial Roofing' && isCommercialOpen) ||
                            (type.name === 'Roof Repair' && isRoofRepairOpen)) && (
                            <div className="pl-4 mt-2 space-y-2">
                              {type.submenu?.map((subItem) => (
                                <div key={subItem.name}>
                                  {subItem.hasSubmenu ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (type.name === 'Residential Roofing') {
                                            setIsSinglePlyOpen(!isSinglePlyOpen);
                                          } else if (type.name === 'Commercial Roofing') {
                                            setIsCommercialSinglePlyOpen(!isCommercialSinglePlyOpen);
                                          }
                                        }}
                                        className="flex items-center justify-between w-full text-gray-500 hover:text-red-600 transition-colors py-3 focus:outline-none"
                                      >
                                        {subItem.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${
                                          (type.name === 'Residential Roofing' && isSinglePlyOpen) ||
                                          (type.name === 'Commercial Roofing' && isCommercialSinglePlyOpen)
                                            ? 'rotate-180'
                                            : ''
                                        }`} />
                                      </button>
                                      {((type.name === 'Residential Roofing' && isSinglePlyOpen) ||
                                        (type.name === 'Commercial Roofing' && isCommercialSinglePlyOpen)) && (
                                        <div className="pl-4 mt-2 space-y-2">
                                          {subItem.submenu?.map((thirdItem) => (
                                            <Link
                                              key={thirdItem.name}
                                              to={thirdItem.path}
                                              className="block text-gray-500 hover:text-red-600 transition-colors py-3"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {thirdItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <Link
                                      to={subItem.path}
                                      className="block text-gray-500 hover:text-red-600 transition-colors py-3"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={type.path}
                          className="block text-gray-400 hover:text-red-600 transition-colors py-3"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {type.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className="flex items-center justify-between w-full text-white hover:text-red-600 transition-colors py-3 font-medium focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2"
                aria-expanded={isLocationsOpen}
                aria-label="Toggle locations menu"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/locations/deerfield-beach/"
                    className="block text-gray-400 hover:text-red-600 transition-colors py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Deerfield Beach
                  </Link>
                  <Link
                    to="/locations/service-areas/"
                    className="block text-gray-400 hover:text-red-600 transition-colors py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Service Areas
                  </Link>
                  <Link
                    to="/locations/deerfield-beach/best-roofers-deerfield-beach/"
                    className="block text-gray-400 hover:text-red-600 transition-colors py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Best Roofers in Deerfield Beach
                  </Link>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between w-full">
                <Link
                  to="/learning-center/"
                  className="flex-1 text-white hover:text-red-600 transition-colors py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learning Center
                </Link>
                <button
                  onClick={() => setIsLearningCenterOpen(!isLearningCenterOpen)}
                  className="px-2 text-white hover:text-red-600 transition-colors py-3 focus:outline-none"
                  aria-expanded={isLearningCenterOpen}
                  aria-label="Toggle learning center menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLearningCenterOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isLearningCenterOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {learningCenter.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-gray-400 hover:text-red-600 transition-colors py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about-us/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>

            <div className="pt-4 space-y-3 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-4 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Read our 4.8 star Google reviews"
                >
                  4.8<span className="text-yellow-400">★</span> Reviews
                </a>
                <a
                  href={EXTERNAL_LINKS.GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Get directions to our office"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="block w-full px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-black text-center cursor-pointer"
              >
                Request Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
