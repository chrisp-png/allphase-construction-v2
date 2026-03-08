// All Phase Construction USA — Conversion Tracking
// Uses event delegation so it works with React's rendered DOM automatically.
// Matches the exact Key Event names already starred in GA4.

(function () {
  'use strict';

  function fireGtag(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  }

  function fireAdsConversion() {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', { send_to: 'AW-10809361088' });
    }
  }

  // ── Phone call tracking ──────────────────────────────────────────────────
  // Walks up the DOM from the clicked element to catch clicks on any child
  // of a tel: link (e.g. icon + text wrapped in <a href="tel:...">).
  document.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el !== document) {
      if (el.tagName === 'A' && typeof el.href === 'string' && el.href.indexOf('tel:') === 0) {
        var number = el.href.replace('tel:', '');
        fireGtag('click_to_call', { event_category: 'engagement', event_label: number });
        fireGtag('all_calls',     { event_category: 'engagement', event_label: number });
        fireAdsConversion();
        break;
      }
      el = el.parentElement;
    }
  }, true); // capture phase — fires before React handlers

  // ── Form / estimate submission tracking ─────────────────────────────────
  // Catches React form submits that have no real <form> element.
  // Looks for type=submit buttons whose visible text matches contact/estimate intent.
  var INTENT_WORDS = ['submit', 'send', 'request', 'estimate', 'assessment', 'contact', 'get', 'quote', 'inspect'];

  document.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el !== document) {
      var tag  = (el.tagName || '').toUpperCase();
      var type = (el.type   || '').toLowerCase();
      if ((tag === 'BUTTON' || tag === 'INPUT') && type === 'submit') {
        var text = ((tag === 'INPUT' ? el.value : el.textContent) || '').toLowerCase();
        var isContactBtn = INTENT_WORDS.some(function (w) { return text.indexOf(w) !== -1; });
        if (isContactBtn) {
          var label = (tag === 'INPUT' ? el.value : el.textContent).trim().substring(0, 60);
          fireGtag('get_your_estimate_form_submit', { event_category: 'engagement', event_label: label });
          fireGtag('contact_forms',                 { event_category: 'engagement', event_label: label });
          fireAdsConversion();
          break;
        }
      }
      el = el.parentElement;
    }
  }, true); // capture phase

})();
