// PR-263: Google "Add to preferred sources" button.
//
// Deliberately NOT the two-line embed (publisher.js in <head> + auto-scanned div):
//  - No third-party script on page load. Every third-party script on this site waits
//    for window.load (gtag, CallRail, Meta pixel); this one waits for an actual click.
//  - Nothing for Google's script to mutate inside #root before hydrateRoot, so SSR
//    pages hydrate cleanly and the prerendered HTML / head parity are untouched.
//
// What renders is a plain link to Google's documented deeplink, so it works with no
// JavaScript at all. On click we load publisher.js in manual mode
// (preferred-sources-control="manual") and open Google's in-page flow; if the script
// fails or is slow, we fall back to the deeplink.
//
// Effect (per Google): only the person who clicks gets our site badged "preferred" in
// Top Stories and AI Overviews / AI Mode. It does not change rankings for anyone else.
import type { MouseEvent } from 'react';

const DEEPLINK = 'https://www.google.com/preferences/source?q=allphaseconstructionfl.com';
const SCRIPT_SRC = 'https://news.google.com/swg/js/v1/publisher.js';

type PreferredSourceApi = {
  init: (opts: { theme?: 'light' | 'dark'; lang?: string }) => void;
  addPreferredSource: () => void;
};

let loader: Promise<PreferredSourceApi> | null = null;

function loadPreferredSource(): Promise<PreferredSourceApi> {
  if (loader) return loader;
  loader = new Promise<PreferredSourceApi>((resolve, reject) => {
    const w = window as unknown as { PREFERRED_SOURCE?: Array<(api: PreferredSourceApi) => void> };
    (w.PREFERRED_SOURCE = w.PREFERRED_SOURCE || []).push((api) => {
      try { api.init({ theme: 'dark', lang: 'en' }); } catch { /* init is optional */ }
      resolve(api);
    });
    const s = document.createElement('script');
    s.async = true;
    s.src = SCRIPT_SRC;
    s.setAttribute('preferred-sources-control', 'manual');
    s.onerror = () => { loader = null; reject(new Error('publisher.js failed')); };
    document.head.appendChild(s);
    window.setTimeout(() => reject(new Error('publisher.js timeout')), 4000);
  });
  return loader;
}

export default function PreferredSourceButton({ className = '' }: { className?: string }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    loadPreferredSource()
      .then((api) => api.addPreferredSource())
      .catch(() => { window.location.href = DEEPLINK; });
  };

  return (
    <a
      href={DEEPLINK}
      onClick={onClick}
      rel="noopener"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
        <path d="M12 2l2.9 6.9L22 9.6l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.6L2 9.6l7.1-.7z" />
      </svg>
      Add All Phase as a preferred source on Google
    </a>
  );
}
