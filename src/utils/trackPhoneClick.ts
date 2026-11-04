/**
 * Fires a GA4 event when a user clicks a tel: link.
 * CallRail swap.js handles dynamic number insertion but doesn't
 * reliably push click_to_call events into GA4, so we fire our own.
 */
export function trackPhoneClick(location: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_to_call', {
      event_category: 'engagement',
      event_label: location,
      phone_number: '(754) 227-5605',
    });
  }
}
