import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

// Before React mounts and replaces the DOM, save any prerendered
// static content so the catch-all route can re-inject it inside
// the full site layout (Header, Footer, Nav) instead of showing 404.
const seoStatic = rootElement.querySelector('#seo-static');
if (seoStatic) {
  (window as any).__PRERENDERED_HTML__ = seoStatic.innerHTML;
  (window as any).__PRERENDERED_TITLE__ = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  (window as any).__PRERENDERED_DESC__ = metaDesc?.getAttribute('content') || '';
}

// Add js-ready class to hide SEO static content when React loads
document.documentElement.classList.add('js-ready');

// Dedupe runtime meta tags appended by react-helmet-async.
//
// Every HTML page is prerendered (scripts/prerender-static.mjs) with the
// correct <meta name="description"> and <meta name="robots"> already in
// <head>. When React hydrates, react-helmet-async re-emits duplicate tags
// marked with data-rh="true", which Screaming Frog detected as post-JS-render
// duplicates (129 robots, 78 descriptions in the v2.10.3 crawl).
//
// NuclearMetadata.tsx is the single owner of the prerendered <meta name="description">
// (it upserts via setAttribute). Robots is owned entirely by the prerender.
// Any data-rh="true" description/robots tag added later is therefore redundant
// and must be removed.
if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
  const cleanupDupe = (node: Node) => {
    if (node.nodeType !== 1) return;
    const el = node as HTMLElement;
    if (el.tagName !== 'META') return;
    if (el.getAttribute('data-rh') !== 'true') return;
    const name = el.getAttribute('name');
    if (name === 'description' || name === 'robots') {
      el.remove();
    }
  };
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach(cleanupDupe);
    }
  });
  observer.observe(document.head, { childList: true });
  // Also run once after mount in case tags were already added before the observer attached.
  queueMicrotask(() => {
    document
      .querySelectorAll('meta[name="description"][data-rh="true"], meta[name="robots"][data-rh="true"]')
      .forEach((el) => el.remove());
  });
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
