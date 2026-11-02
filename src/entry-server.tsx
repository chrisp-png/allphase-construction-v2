/**
 * Build-time server renderer (SSR prerender).
 *
 * Used ONLY by scripts/ssr-inject.mjs during the Netlify build — never shipped
 * to the browser. It renders the real React page for a URL so the full body
 * copy (H1, sections, FAQs) is present in the initial HTML response for
 * crawlers that do not execute JavaScript (GPTBot, PerplexityBot, ClaudeBot…).
 *
 * <head> is NOT taken from here: titles, meta, canonicals and JSON-LD stay
 * owned by scripts/prerender-static.mjs. Helmet output is collected and
 * discarded.
 *
 * renderToPipeableStream + onAllReady waits for every React.lazy() route chunk
 * to resolve, so lazy pages render fully (renderToString would emit the
 * Suspense fallback instead).
 */
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import { AppShell } from './App';

export function render(url: string, timeoutMs = 15000): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = '';
    let failed: unknown = null;
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        if (failed) reject(failed);
        else resolve(html);
        cb();
      },
    });

    const helmetContext = {};
    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          // Record and keep going; the caller rejects the page and keeps the
          // existing prerendered HTML for that URL.
          failed = err;
        },
      }
    );
    setTimeout(() => {
      abort();
      reject(new Error(`SSR timeout after ${timeoutMs}ms for ${url}`));
    }, timeoutMs).unref();
  });
}
