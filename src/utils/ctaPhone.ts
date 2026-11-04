import { useLocation } from 'react-router-dom';

/**
 * PR-256: tap-to-call CTA number, route-aware.
 *
 * (754) 227-5605 is the main/NAP number (Google Business Profile, JSON-LD,
 * listed-contact blocks) and stays everywhere as such. It is a landline and
 * cannot receive texts, so on AD DESTINATIONS the tap-to-call CTAs carry the
 * textable static fallback (754) 258-6135 instead. Both are registered
 * CallRail swap targets; JS visitors see a tracking number either way.
 *
 * Scope: CTA links only (hero buttons, sticky bar, header/footer call bars,
 * inline "call" links). NEVER use this for NAP / contact-information blocks
 * or schema. Ad routes rendered statically are handled at build time by
 * applyStaticFallbackPhone; this hook covers server-rendered ad routes.
 */
const CTA_FALLBACK_PATHS = new Set<string>([
  '/', // Performance Max final URL since Nov 4, 2026
]);

export interface CtaPhone {
  href: string; // tel: link
  display: string; // (754) xxx-xxxx
  dashed: string; // 754-xxx-xxxx
}

const MAIN: CtaPhone = { href: 'tel:+17542275605', display: '(754) 227-5605', dashed: '754-227-5605' };
const FALLBACK: CtaPhone = { href: 'tel:+17542586135', display: '(754) 258-6135', dashed: '754-258-6135' };

export function useCtaPhone(): CtaPhone {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return CTA_FALLBACK_PATHS.has(path) ? FALLBACK : MAIN;
}
