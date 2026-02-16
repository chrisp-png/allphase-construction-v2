import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <img
                src="/allphase-logo-white.svg"
                alt="All Phase Construction USA logo"
                className="w-auto"
                style={{ width: '250px' }}
              />
              <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">CGC-1526236 • CCC-1331464</p>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/projects/" className="text-white hover:text-red-600 transition-colors font-medium">
              Projects
            </Link>
            <Link to="/blog/" className="text-white hover:text-red-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact/" className="text-white hover:text-red-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/projects/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/blog/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact/" className="block text-white hover:text-red-600 transition-colors py-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
