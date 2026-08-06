/**
 * Google Ads lead-conversion tracking (PR-188).
 * Fires the "Get Your Estimate Form" conversion action
 * (AW-10809361088/cbljCMCBvvUaEMCFp6Io) exactly once per successful
 * lead-form submission. gtag itself is installed globally in index.html.
 */
import type { FormEvent } from 'react';

const CONVERSION_SEND_TO = 'AW-10809361088/cbljCMCBvvUaEMCFp6Io';

// Double-fire guard (re-renders, rapid re-submits). Keyed per form so two
// different forms on one pageview can each report once. Only set AFTER a
// confirmed fire, so a failed submit can still convert on retry.
const fired = new Set<string>();

export function trackLeadConversion(formId: string): void {
  if (fired.has(formId)) return;
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  fired.add(formId);
  window.gtag('event', 'conversion', { send_to: CONVERSION_SEND_TO });
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
  formId: string
): Promise<void> {
  const form = e.currentTarget;
  e.preventDefault();
  if (form.dataset.submitting === 'true') return; // double-click guard
  form.dataset.submitting = 'true';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`Formspree ${response.status}`);
    trackLeadConversion(formId);
    window.location.assign('/roof-calculator-thank-you.html');
  } catch {
    form.dataset.submitting = 'false';
    form.submit(); // native fallback — never lose the lead to tracking
  }
}
