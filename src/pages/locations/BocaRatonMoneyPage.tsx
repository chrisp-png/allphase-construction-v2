/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Boca Raton Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Uses CityMoneyPage template with original gold/light design
 */

import CityMoneyPage from './CityMoneyPage';

export default function BocaRatonMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'Boca Raton',
        slug: 'boca-raton',
        county: 'Palm Beach County',
        description: 'All Phase Construction USA is a dual-licensed roofing contractor serving Boca Raton, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair.'
      }}
    />
  );
}
