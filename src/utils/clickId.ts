/**
 * Google Ads click-ID capture (PR-205) + first-touch attribution (PR-227).
 *
 * PR-205: captures gclid (plus gbraid/wbraid, the iOS-privacy variants) from
 * the landing URL, persists it for 90 days (Google's click-to-conversion
 * window), and appends it to every lead-form submission.
 *
 * PR-227: additionally persists FIRST-TOUCH attribution — utm parameters,
 * referrer, and landing page — and derives a human-readable traffic source
 * that is appended to the payload and to the Formspree `_subject`, so the
 * lead email itself says "— Google Ads (paid click)" vs "— Google Organic"
 * without anyone interpreting a raw gclid.
 *
 * First-touch means the ORIGINAL source is never overwritten during the
 * 90-day window: if someone clicks an ad Monday and comes back direct on
 * Wednesday to submit, the lead still credits the ad. A NEW paid click DOES
 * refresh attribution (a fresh gclid is a fresh journey).
 *
 * Storage failures (private browsing, blocked storage) are swallowed:
 * attribution must never break a page or block a lead.
 */
const STORAGE_KEY = 'apc_click_ids';
const ATTR_KEY = 'apc_attribution';
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

interface StoredAttribution {
  ts: number;
  utm: Record<string, string>;
  referrer: string;
  landing: string;
}

/** Read click IDs + first-touch attribution off the current URL and persist them. Call once on app mount. */
export function captureClickIds(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const p of CLICK_ID_PARAMS) {
      const v = params.get(p);
      if (v) found[p] = v;
    }
    const hasPaidClick = Object.keys(found).length > 0;
    if (hasPaidClick) {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ts: Date.now(), ids: found })
      );
    }

    // ---- PR-227: first-touch attribution ----
    const utm: Record<string, string> = {};
    for (const p of UTM_PARAMS) {
      const v = params.get(p);
      if (v) utm[p] = v;
    }
    const referrer = document.referrer || '';
    const existing = getStoredAttribution();
    // First-touch: keep the original journey unless (a) nothing stored yet,
    // or (b) this visit is a NEW paid/tagged click (fresh journey wins).
    const isTaggedVisit = hasPaidClick || Object.keys(utm).length > 0;
    if (!existing || isTaggedVisit) {
      const attr: StoredAttribution = {
        ts: Date.now(),
        utm,
        referrer,
        landing: window.location.pathname,
      };
      window.localStorage.setItem(ATTR_KEY, JSON.stringify(attr));
    }
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

/** Stored first-touch attribution, or null if none / expired. */
export function getStoredAttribution(): StoredAttribution | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(ATTR_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed || typeof parsed.ts !== 'number') return null;
    if (Date.now() - parsed.ts > NINETY_DAYS_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Human-readable traffic source for the lead email subject/body.
 * Priority: paid click evidence > utm campaign tagging > referrer > direct.
 */
export function deriveTrafficSource(): string {
  const ids = getStoredClickIds();
  const attr = getStoredAttribution();
  const utm = attr?.utm ?? {};
  if (Object.keys(ids).length > 0 || (utm.utm_medium || '').toLowerCase() === 'cpc') {
    return 'Google Ads (paid click)';
  }
  if (utm.utm_source) {
    const med = utm.utm_medium ? `/${utm.utm_medium}` : '';
    return `Campaign: ${utm.utm_source}${med}${utm.utm_campaign ? ` (${utm.utm_campaign})` : ''}`;
  }
  const ref = (attr?.referrer || '').toLowerCase();
  if (ref) {
    try {
      const host = new URL(attr!.referrer).hostname.replace(/^www\./, '');
      if (host.includes('google.')) return 'Google Organic';
      if (host.includes('bing.')) return 'Bing Organic';
      if (host.includes('duckduckgo.')) return 'DuckDuckGo Organic';
      if (host.includes('yahoo.')) return 'Yahoo Organic';
      if (host.includes('facebook.') || host.includes('fb.')) return 'Social — Facebook';
      if (host.includes('instagram.')) return 'Social — Instagram';
      if (host.includes('nextdoor.')) return 'Social — Nextdoor';
      if (host.includes('chatgpt.') || host.includes('openai.') || host.includes('perplexity.') || host.includes('claude.') || host.includes('gemini.google')) return 'AI Assistant Referral';
      return `Referral: ${host}`;
    } catch {
      /* unparseable referrer — fall through */
    }
  }
  return 'Direct / Bookmark';
}

/**
 * Append stored click IDs + attribution to an outgoing lead-form payload.
 * Safe to call on every submit; degrades to "Direct / Bookmark" for organic.
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

  // ---- PR-227: first-touch attribution on every lead ----
  const source = deriveTrafficSource();
  if (!fd.has('traffic_source')) fd.append('traffic_source', source);
  const attr = getStoredAttribution();
  if (attr) {
    for (const [k, v] of Object.entries(attr.utm)) {
      if (!fd.has(k)) fd.append(k, v);
    }
    if (attr.referrer && !fd.has('first_referrer')) fd.append('first_referrer', attr.referrer);
    if (attr.landing && !fd.has('first_landing_page')) fd.append('first_landing_page', attr.landing);
  }
  // Put the source in the subject line so it's visible at a glance in the
  // inbox: "New Lead — Roof Repair (Boca Raton) — Google Ads (paid click)".
  const subj = fd.get('_subject');
  if (typeof subj === 'string' && subj && !subj.includes(source)) {
    fd.set('_subject', `${subj} — ${source}`);
  }
  return fd;
}
