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
 * PR-264: first touch is now STRICT once it is tagged. An untagged first
 * visit (direct / organic) is upgraded by the first tagged visit (utm or ad
 * click), but a tagged first touch is never overwritten; later tagged visits
 * are kept separately as the "latest ad click". Every lead also carries a
 * readable "---- SOURCE ----" block (appended LAST, so it sits at the bottom
 * of the Formspree email to leads@) with the JobNimbus lead-source value the
 * front desk should select, plus the CallRail visitor ID.
 * The gclid capture / append (PR-205) and the conversion path (PR-188) are
 * unchanged.
 *
 * Storage failures (private browsing, blocked storage) are swallowed:
 * attribution must never break a page or block a lead.
 */
const STORAGE_KEY = 'apc_click_ids';
const ATTR_KEY = 'apc_attribution';
const LATEST_KEY = 'apc_attribution_latest';
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

interface StoredAttribution {
  ts: number;
  utm: Record<string, string>;
  referrer: string;
  landing: string;
  /** PR-264: click IDs seen on THIS visit (absent on records from before PR-264). */
  clickIds?: Record<string, string>;
}

function isTagged(a: StoredAttribution | null): boolean {
  if (!a) return false;
  return Object.keys(a.utm || {}).length > 0 || Object.keys(a.clickIds || {}).length > 0;
}

/** External referrer only — a referrer from our own site is not a source. */
function externalReferrer(): string {
  const ref = document.referrer || '';
  if (!ref) return '';
  try {
    if (new URL(ref).hostname === window.location.hostname) return '';
  } catch {
    return '';
  }
  return ref;
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

    // ---- PR-227 / PR-264: first-touch attribution ----
    const utm: Record<string, string> = {};
    for (const p of UTM_PARAMS) {
      const v = params.get(p);
      if (v) utm[p] = v;
    }
    const existing = getStoredAttribution();
    const thisVisit: StoredAttribution = {
      ts: Date.now(),
      utm,
      referrer: externalReferrer(),
      landing: window.location.pathname,
      clickIds: found,
    };
    const isTaggedVisit = hasPaidClick || Object.keys(utm).length > 0;
    // First touch: written when nothing is stored, or when the stored first
    // touch is untagged and this visit is tagged. A tagged first touch is
    // never overwritten inside the 90-day window.
    if (!existing || (isTaggedVisit && !isTagged(existing))) {
      window.localStorage.setItem(ATTR_KEY, JSON.stringify(thisVisit));
    }
    // Latest tagged visit, reported alongside (never replaces) first touch.
    if (isTaggedVisit) {
      window.localStorage.setItem(LATEST_KEY, JSON.stringify(thisVisit));
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
export function getStoredAttribution(key: string = ATTR_KEY): StoredAttribution | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed || typeof parsed.ts !== 'number') return null;
    if (Date.now() - parsed.ts > NINETY_DAYS_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** The JobNimbus lead-source values the front desk selects (match exactly). */
export const JN_SOURCE = {
  chatgptAds: 'ChatGPT Ads (PPC)',
  googleAds: 'Google Ads (PPC)',
  googleOrganic: 'Google Organic',
  aiChat: 'AI Chat (ChatGPT, Claude, Perplexity, Gemini)',
  unknown: 'Website - Source Unknown',
} as const;

const PAID_MEDIUMS = ['cpc', 'ppc', 'paid', 'paidsearch', 'paid_search', 'paid-search', 'cpm'];
const AI_HOSTS = ['chatgpt.com', 'chat.openai.com', 'openai.com', 'perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com'];
const AI_UTM_SOURCES = /^(chatgpt(\.com)?|openai|perplexity(\.ai)?|claude(\.ai)?|gemini|copilot)$/i;

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return '';
  }
}

/**
 * Map a visit to the JobNimbus lead source. `label` is an exact JobNimbus
 * value when one applies; otherwise it starts with "No automatic match" and
 * `detail` says what we saw so the desk can choose.
 * Paid ChatGPT traffic is NEVER mapped to the organic "AI Chat" value.
 */
export function mapLeadSource(
  attr: StoredAttribution | null,
  fallbackClickIds: Record<string, string> = {}
): { label: string; detail: string } {
  const utm = attr?.utm ?? {};
  const src = (utm.utm_source || '').trim().toLowerCase();
  const med = (utm.utm_medium || '').trim().toLowerCase();
  const paid = PAID_MEDIUMS.includes(med);
  // Pre-PR-264 records have no clickIds of their own; fall back to the
  // separately stored gclid only when the journey itself carries no utm.
  const ids = attr?.clickIds ?? (Object.keys(utm).length ? {} : fallbackClickIds);
  const host = hostOf(attr?.referrer || '');

  if (src.startsWith('chatgpt') && paid) return { label: JN_SOURCE.chatgptAds, detail: 'ChatGPT ad click' };
  if (Object.keys(ids).length > 0) return { label: JN_SOURCE.googleAds, detail: 'Google Ads click ID present' };
  if (src === 'google' && paid) return { label: JN_SOURCE.googleAds, detail: 'google / cpc tagged link' };
  if ((src && AI_UTM_SOURCES.test(src) && !paid) || (!src && AI_HOSTS.some((h) => host === h || host.endsWith('.' + h)))) {
    return { label: JN_SOURCE.aiChat, detail: `organic AI referral (${src || host})` };
  }
  if (!src && host && (/^google\.[a-z.]+$/.test(host) || host.includes('googlequicksearchbox'))) return { label: JN_SOURCE.googleOrganic, detail: `organic search (${host})` };
  if (!src && !host) return { label: JN_SOURCE.unknown, detail: 'no tracking parameters and no referrer' };
  if (src) return { label: `No automatic match - pick in JobNimbus`, detail: `tagged link: ${src}${med ? ' / ' + med : ''}` };
  return { label: `No automatic match - pick in JobNimbus`, detail: `referred by ${host}` };
}

/** JobNimbus lead source for the stored first touch (used in subject + payload). */
export function deriveTrafficSource(): string {
  return mapLeadSource(getStoredAttribution(), getStoredClickIds()).label;
}

function readCookie(name: string): string {
  try {
    const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
    return m ? decodeURIComponent(m[1]) : '';
  } catch {
    return '';
  }
}

function fmtWhen(ts: number): string {
  try {
    return new Date(ts).toLocaleString('en-US', {
      timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit',
    });
  } catch {
    return new Date(ts).toISOString();
  }
}

/**
 * The readable block for the lead email, as ordered [label, value] rows.
 * Exported for tests.
 */
export function buildSourceBlock(
  first: StoredAttribution | null,
  latest: StoredAttribution | null,
  storedClickIds: Record<string, string>,
  submittedFrom: string,
  callrailId: string
): Array<[string, string]> {
  const none = '(none)';
  const m = mapLeadSource(first, storedClickIds);
  const utm = first?.utm ?? {};
  const srcLine = [utm.utm_source, utm.utm_medium, utm.utm_campaign].some(Boolean)
    ? [utm.utm_source || none, utm.utm_medium || none, utm.utm_campaign || none].join(' / ')
    : m.detail;
  // The first-touch visit's own click ID; pre-PR-264 records fall back to the
  // separately stored one. A later ad click shows on the "Latest ad click" row.
  const ids = first?.clickIds ?? storedClickIds;
  const gclid = ids.gclid || ids.gbraid || ids.wbraid || '';
  const rows: Array<[string, string]> = [
    ['---- SOURCE ----', `JobNimbus lead source: ${m.label}`],
    ['Source', srcLine],
    ['Ad / content (utm_content)', utm.utm_content || none],
    ['Keyword (utm_term)', utm.utm_term || none],
    ['Google click ID', gclid || none],
    ['Landing page', first?.landing || none],
    ['Referrer', first?.referrer || none],
    ['First visit', first ? fmtWhen(first.ts) : none],
    ['Submitted from', submittedFrom || none],
    ['CallRail visitor ID', callrailId || '(not available)'],
  ];
  if (latest && first && latest.ts !== first.ts) {
    const l = mapLeadSource(latest, {});
    const lu = latest.utm || {};
    const lsrc = [lu.utm_source, lu.utm_medium, lu.utm_campaign].filter(Boolean).join(' / ');
    rows.push(['Latest ad click', `${l.label}${lsrc ? ' (' + lsrc + ')' : ''}, ${fmtWhen(latest.ts)}`]);
  }
  return rows;
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
  // PR-264: the value is now the JobNimbus source for the first touch, so it
  // can never say "Google Ads" for a lead whose journey began on a ChatGPT ad.
  if (Object.keys(ids).length > 0 && !fd.has('lead_source')) {
    fd.append('lead_source', deriveTrafficSource());
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
  // ---- PR-264: raw CallRail visitor ID + the readable block, LAST ----
  const callrailId = readCookie('calltrk_session_id');
  if (callrailId && !fd.has('callrail_visitor_id')) fd.append('callrail_visitor_id', callrailId);
  if (!fd.has('---- SOURCE ----')) {
    try {
      const rows = buildSourceBlock(
        attr,
        getStoredAttribution(LATEST_KEY),
        ids,
        typeof window !== 'undefined' ? window.location.pathname : '',
        callrailId
      );
      for (const [k, v] of rows) fd.append(k, v);
    } catch {
      /* never block a lead */
    }
  }

  // Put the source in the subject line so it's visible at a glance in the
  // inbox: "New Lead — Roof Repair (Boca Raton) — Google Ads (paid click)".
  const subj = fd.get('_subject');
  if (typeof subj === 'string' && subj && !subj.includes(source)) {
    fd.set('_subject', `${subj} — ${source}`);
  }
  return fd;
}
