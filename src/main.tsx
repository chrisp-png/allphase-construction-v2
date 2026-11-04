import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

// Before React mounts and replaces the DOM, save any prerendered
// static content so the catch-all route can re-inject it inside
// the full site layout (Header, Footer, Nav) instead of showing 404.
const seoStatic = rootElement.querySelector('#seo-static');
// PR-254: SSR pages (data-ssr="1") no longer carry #seo-static — the full
// server-rendered page IS the root content. Save it as the chunk-failure
// fallback too, or PR-252's Soft 404 protection silently stops working.
if (!seoStatic && rootElement.dataset.ssr === '1' && rootElement.innerHTML.length > 500) {
  (window as any).__PRERENDERED_HTML__ = rootElement.innerHTML;
}
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

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// SSR: pages whose #root was filled with server-rendered React markup by
// scripts/ssr-inject.mjs carry data-ssr="1". Hydrate those in place (no
// flash, no re-render of the whole page). Every other page mounts exactly as
// before.
if (rootElement.dataset.ssr === '1') {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
