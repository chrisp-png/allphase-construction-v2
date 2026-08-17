/**
 * Google Ads click-ID capture (PR-205).
 * Captures gclid (plus gbraid/wbraid, the iOS-privacy variants) from the
 * landing URL, persists it for 90 days (Google's click-to-conversion
 * window), and appends it to every lead-form submission. That lets a lead
 * worked in the CRM be traced back to the exact ad click that produced it —
 * true cost-per-lead (and eventually cost-per-job) by campaign.
 *
 * Storage failures (private browsing, blocked storage) are swallowed:
 * attribution must never break a page or block a lead.
 */
const STORAGE_KEY = 'apc_click_ids';
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;

/** Read click IDs off the current URL and persist them. Call once on app mount. */
export function captureClickIds(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const p of CLICK_ID_PARAMS) {
      const v = params.get(p);
      if (v) found[p] = v;
    }
    if (Object.keys(found).length === 0) return; // organic visit — keep any prior stored click
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ts: Date.now(), ids: found })
    );
  } catch {
    /* storage unavailable — never block the page */
  }
}

/** Stored click IDs, or {} if none / expired past the 90-day window. */
export function getStoredClickIds(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as { ts?: number; ids?: Record<string, string> };
    if (!parsed || typeof parsed.ts !== 'number' || !parsed.ids) return {};
    if (Date.now() - parsed.ts > NINETY_DAYS_MS) return {};
    return parsed.ids;
  } catch {
    return {};
  }
}

/**
 * Append stored click IDs to an outgoing lead-form payload.
 * Safe to call on every submit; no-op for organic leads.
 */
export function appendClickIds(fd: FormData): FormData {
  const ids = getStoredClickIds();
  for (const [k, v] of Object.entries(ids)) {
    if (!fd.has(k)) fd.append(k, v);
  }
  // PR-207: plain-English label so the lead email is readable without
  // interpreting a raw gclid. Only added when a click ID exists — organic
  // leads must not claim an ad source we didn't measure.
  if (Object.keys(ids).length > 0 && !fd.has('lead_source')) {
    fd.append('lead_source', 'Google Ads (paid click)');
  }
  return fd;
}
