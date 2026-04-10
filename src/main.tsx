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

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
