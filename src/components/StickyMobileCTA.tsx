import { Phone, FileText } from 'lucide-react';
import { useAssessmentModal } from '../context/AssessmentModalContext';

export default function StickyMobileCTA() {
  const { openModal } = useAssessmentModal();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-white border-t-2 border-red-600 shadow-2xl pointer-events-auto" style={{ touchAction: 'manipulation' }}>
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <a
          href="tel:+17542275605"
          className="flex items-center justify-center gap-2 flex-1 bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
          style={{ touchAction: 'manipulation' }}
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Call: 754-227-5605</span>
        </a>
        <button
          onClick={handleQuoteClick}
          type="button"
          className="flex items-center justify-center gap-2 flex-1 bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
          style={{ touchAction: 'manipulation' }}
        >
          <FileText className="w-5 h-5" />
          <span className="text-sm">Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
