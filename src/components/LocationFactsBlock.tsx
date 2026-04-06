/**
 * LocationFactsBlock
 * ─────────────────────────────────────────────────────────────────────────
 * Drop-in component that renders a structured "City at a Glance" facts panel
 * for any /locations/[city]/ page. Pulls from src/data/locations.ts so the
 * data flows through prerender and runtime SSR identically.
 *
 * Designed for AI / GEO snippet relevance: declarative facts, named entities
 * (ZIPs, landmarks, neighborhoods), short parseable sentences. Renders a
 * compact card with neighborhoods, landmarks, ZIP codes, county, code
 * jurisdiction, and a single-sentence local hook.
 */

import { MapPin, Building2, Hash, ShieldCheck } from 'lucide-react';
import type { Location } from '../data/locations';

interface LocationFactsBlockProps {
  location: Location;
  className?: string;
}

export default function LocationFactsBlock({ location, className = '' }: LocationFactsBlockProps) {
  const { city, neighborhoods, zips, landmarks, county, hvhz, localHook } = location;
  if (!neighborhoods?.length && !zips?.length && !landmarks?.length && !localHook) return null;

  const jurisdiction = hvhz
    ? 'HVHZ jurisdiction (FBC Chapter 16/44, OIR-B1-1802)'
    : county === 'Palm Beach'
      ? 'Palm Beach County jurisdiction; voluntarily built to Miami-Dade HVHZ spec'
      : 'Wind-borne debris region';

  return (
    <section
      aria-labelledby={`facts-${location.slug}`}
      className={`bg-zinc-900 border border-[#C5A572]/30 rounded-2xl p-6 md:p-8 my-8 ${className}`}
    >
      <h2
        id={`facts-${location.slug}`}
        className="text-2xl md:text-3xl font-bold text-white mb-2"
      >
        {city} Roof Replacement at a Glance
      </h2>
      {localHook && (
        <p className="text-zinc-300 italic mb-6">{localHook}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        {county && (
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white">County &amp; Code</div>
              <div className="text-zinc-300">{county} County — {jurisdiction}</div>
            </div>
          </div>
        )}

        {zips?.length ? (
          <div className="flex items-start gap-3">
            <Hash className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white">ZIP Codes Served</div>
              <div className="text-zinc-300">{zips.join(', ')}</div>
            </div>
          </div>
        ) : null}

        {landmarks?.length ? (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white">Local Landmarks</div>
              <div className="text-zinc-300">{landmarks.join(' · ')}</div>
            </div>
          </div>
        ) : null}

        {neighborhoods?.length ? (
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white">Neighborhoods We Reroof</div>
              <div className="text-zinc-300">{neighborhoods.join(' · ')}</div>
            </div>
          </div>
        ) : null}
      </div>

      <p className="mt-6 text-xs text-zinc-500">
        Dual-licensed: CCC-1331464 (Florida Certified Roofing Contractor) &middot; CGC-1526236 (Certified General Contractor). 2,500+ South Florida roofs since 2005.
      </p>
    </section>
  );
}
