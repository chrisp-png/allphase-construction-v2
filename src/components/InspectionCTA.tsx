import { Phone } from 'lucide-react';
import { useAssessmentModal } from '../context/AssessmentModalContext';

export default function InspectionCTA() {
  const { openModal } = useAssessmentModal();
  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-normal mb-8 text-center text-zinc-200">
          Request a Roof Inspection
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded p-8 mb-8">
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-zinc-500 mt-0.5">•</span>
              <span>Inspections are performed to document existing roof conditions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-500 mt-0.5">•</span>
              <span>Findings are based on observed conditions at the time of inspection</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-500 mt-0.5">•</span>
              <span>Written summaries and photo documentation are provided when applicable</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-500 mt-0.5">•</span>
              <span>Inspections do not assume or require repair or replacement</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-base text-zinc-400 mb-6">
            Request an inspection appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="px-6 py-3 bg-zinc-800 text-zinc-200 rounded border border-zinc-700 hover:bg-zinc-750 cursor-pointer"
            >
              Request Inspection
            </button>
            <a
              href="tel:+17542275605"
              className="px-6 py-3 bg-zinc-800 text-zinc-200 rounded border border-zinc-700 hover:bg-zinc-750 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Schedule Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
