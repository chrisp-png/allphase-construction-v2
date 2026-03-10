import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

interface MidPageCTAProps {
  headline?: string;
  subtext?: string;
}

export default function MidPageCTA({
  headline = 'Ready to Get Started?',
  subtext = 'Schedule your free 21-point roof inspection with a dual-licensed contractor.',
}: MidPageCTAProps) {
  return (
    <div className="my-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/60 p-8 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">{headline}</h3>
          <p className="text-gray-300">{subtext}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:+17542275605"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (754) 227-5605
          </a>
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
