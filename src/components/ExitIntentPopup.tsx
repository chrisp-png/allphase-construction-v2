import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { X, CheckCircle } from 'lucide-react';

/**
 * Helper: returns true on mobile / touch devices.
 * Uses pointer:coarse (touch) OR viewport < 1024 px.
 */
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return true;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const isNarrow = window.innerWidth < 1024;
  return isTouch || isNarrow;
}

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const location = useLocation();

  // ---- scroll-lock helpers ----
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  // ---- close handler ----
  const handleClose = useCallback(() => {
    setIsVisible(false);
    unlockScroll();
  }, [unlockScroll]);

  // ---- close modal on route change ----
  useEffect(() => {
    if (isVisible) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // ---- apply / remove scroll lock when visibility changes ----
  useEffect(() => {
    if (isVisible) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isVisible, lockScroll, unlockScroll]);

  // ---- exit-intent listener (desktop only) ----
  useEffect(() => {
    // HARD MOBILE GUARD: never attach listeners on mobile / touch
    if (isMobileDevice()) return;
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // ---- safety cleanup: always reset overflow & remove listener ----
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.overflow = '';
    };
  }, [hasShown]);

  // ---- final safety: reset overflow on unmount no matter what ----
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Exit intent offer"
    >
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
              Grab our free Insider's Guide to Hiring a Roofer in South Florida — includes a 15-point checklist, red flags to watch for, and insurance savings tips.
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
              Get My Free Guide
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
