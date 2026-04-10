import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

// Prerendered static-only pages (geo/community landing pages) set
// data-static-only="true" on the root div.  Skip React mount so the
// server-rendered HTML stays visible instead of being replaced by
// React Router's catch-all NotFoundPage.
if (rootElement.dataset.staticOnly === 'true') {
  // nothing to do — static HTML is already rendered
} else {
  // Add js-ready class to hide SEO static content when React loads
  document.documentElement.classList.add('js-ready');

  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}
