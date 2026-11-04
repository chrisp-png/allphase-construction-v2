import { Phone } from 'lucide-react';
import { useAssessmentModal } from '../context/AssessmentModalContext';

export default function StickyConversionBar() {
  const { openModal } = useAssessmentModal();

  return (
    <>
      {/* Desktop: Top sticky bar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">
                Need an Expert? Call{' '}
                <a
                  href="tel:+17542275605"
                  onClick={() => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'click_to_call', { event_category: 'engagement', event_label: 'sticky_bar_desktop' }); }}
                  className="font-bold hover:text-yellow-300 transition-colors"
                >
                  (754) 227-5605
                </a>
              </span>
            </div>
            <button
              onClick={openModal}
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
            >
              Free 21-Point Inspection
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <a
              href="tel:+17542275605"
              onClick={() => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'click_to_call', { event_category: 'engagement', event_label: 'sticky_bar_mobile' }); }}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-all flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>(754) 227-5605</span>
            </a>
            <button
              onClick={openModal}
              className="bg-yellow-400 text-gray-900 px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-all flex-1 whitespace-nowrap"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind sticky bars */}
      <div className="hidden md:block h-12" />
      <div className="md:hidden h-16" />
    </>
  );
}
