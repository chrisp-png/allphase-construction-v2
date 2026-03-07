// Conversion Event Tracking
document.addEventListener('DOMContentLoaded', function() {
  // Phone click tracking
  document.addEventListener('click', function(e) {
    var el = e.target.closest('a[href^="tel:"]');
    if (el) {
      gtag('event', 'phone_call', { event_category: 'engagement', event_label: 'phone_click' });
      gtag('event', 'conversion', { send_to: 'AW-10809361088' });
    }
  });
  // Form submission tracking
  document.addEventListener('submit', function(e) {
    gtag('event', 'generate_lead', { event_category: 'engagement', event_label: 'contact_form' });
    gtag('event', 'conversion', { send_to: 'AW-10809361088' });
  });
});
