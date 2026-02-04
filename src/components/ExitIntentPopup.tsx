import { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const timer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true);
          setHasShown(true);
        }
      }, 45000);

      return () => clearTimeout(timer);
    } else {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full relative animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Before You Go...
            </h3>
            <p className="text-lg text-gray-600">
              Get your free roof assessment — no obligation, no pressure
            </p>
          </div>

          <form
            action="https://formspree.io/f/mregrayb"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="source" value="exit-intent-popup" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="popup-first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="popup-first-name"
                  name="first_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="popup-last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="popup-last-name"
                  name="last_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                placeholder="(754) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                placeholder="john@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule My Free Inspection
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4">
            We respect your privacy. Your information is never shared.
          </p>
        </div>
      </div>
    </div>
  );
}
