/**
 * Google Ads lead-conversion tracking (PR-188).
 * Fires the "Get Your Estimate Form" conversion action
 * (AW-10809361088/cbljCMCBvvUaEMCFp6Io) exactly once per successful
 * lead-form submission. gtag itself is installed globally in index.html.
 */
import type { FormEvent } from 'react';
import { appendClickIds } from './clickId';

const CONVERSION_SEND_TO = 'AW-10809361088/cbljCMCBvvUaEMCFp6Io';

// Double-fire guard (re-renders, rapid re-submits). Keyed per form so two
// different forms on one pageview can each report once. Only set AFTER a
// confirmed fire, so a failed submit can still convert on retry.
const fired = new Set<string>();

/**
 * Enhanced-conversions user data (PR-206). Google's tag hashes these
 * client-side before transmission; we send them un-hashed per the gtag
 * enhanced conversions API. Only populated fields are included.
 */
export interface LeadUserData {
  email?: string;
  phone_number?: string;
  address?: { first_name?: string; last_name?: string };
}

/** E.164-normalize a US phone number; returns undefined if not normalizable. */
function toE164(raw: string): string | undefined {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return undefined;
}

/**
 * Pull enhanced-conversions user data out of a lead form / its FormData.
 * All lead forms use the field names email / phone / first_name /
 * last_name (one uses full_name). Returns undefined when nothing usable.
 */
export function extractLeadUserData(
  source: FormData | HTMLFormElement
): LeadUserData | undefined {
  const fd = source instanceof FormData ? source : new FormData(source);
  const get = (k: string): string => {
    const v = fd.get(k);
    return typeof v === 'string' ? v.trim() : '';
  };
  const data: LeadUserData = {};
  const email = get('email').toLowerCase();
  if (email && email.includes('@')) data.email = email;
  const phone = toE164(get('phone'));
  if (phone) data.phone_number = phone;
  let first = get('first_name');
  let last = get('last_name');
  if (!first && get('full_name')) {
    const parts = get('full_name').split(/\s+/);
    first = parts[0] ?? '';
    last = parts.slice(1).join(' ');
  }
  if (first || last) {
    data.address = {};
    if (first) data.address.first_name = first;
    if (last) data.address.last_name = last;
  }
  return Object.keys(data).length > 0 ? data : undefined;
}

export function trackLeadConversion(formId: string, userData?: LeadUserData): void {
  if (fired.has(formId)) return;
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  fired.add(formId);
  // Enhanced conversions: stage user_data so the Google tag attaches the
  // hashed identifiers to the conversion that follows.
  if (userData) window.gtag('set', 'user_data', userData);
  window.gtag('event', 'conversion', { send_to: CONVERSION_SEND_TO });
  // GA4 mirror so leads appear as standard lead events in Analytics
  // (G-PBMBD8QKK7), not only in Google Ads.
  window.gtag('event', 'generate_lead', { form_id: formId });
}

/**
 * Submit handler for lead forms that previously used a native HTML POST to
 * Formspree (hero form, assessment modal, exit popup, etc.). Intercepts the
 * submit, posts via fetch, fires the conversion ONLY on a confirmed 2xx
 * response, then sends the visitor to the on-site thank-you page.
 * If anything goes wrong (network error, non-OK response) it falls back to
 * the browser's native submit — tracking code must never block a lead.
 */
export async function interceptLeadSubmit(
  e: FormEvent<HTMLFormElement>,
  formId: string,
  thankYouUrl: string = '/roof-calculator-thank-you.html',
  // PR-221: endpoint passed in JS instead of a scrapeable action attribute.
  // Bots that scrape the DOM for formspree URLs find nothing to POST to.
  endpoint?: string
): Promise<void> {
  const form = e.currentTarget;
  e.preventDefault();
  if (form.dataset.submitting === 'true') return; // double-click guard
  form.dataset.submitting = 'true';
  try {
    const payload = appendClickIds(new FormData(form));
    const target = endpoint || form.action;
    const response = await fetch(target, {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`Formspree ${response.status}`);
    trackLeadConversion(formId, extractLeadUserData(payload));
    window.location.assign(thankYouUrl);
  } catch {
    form.dataset.submitting = 'false';
    if (endpoint) form.action = endpoint; // restore target for the native fallback
    form.submit(); // native fallback — never lose the lead to tracking
  }
}
