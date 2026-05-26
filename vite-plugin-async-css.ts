import type { Plugin, IndexHtmlTransformResult } from 'vite';

/**
 * Vite plugin: inline main entry CSS into HTML head.
 *
 * PR-62 — kills the render-blocking external CSS request that was costing
 * 70–210ms of LCP on every PSI run (Lighthouse "Render-blocking requests"
 * insight). With the main stylesheet inlined directly into <head>, the
 * browser paints text as soon as HTML parses; no second round-trip needed.
 *
 * Trade-off vs the previous (no-op) plugin behavior:
 *
 *   Before (render-blocking external <link>):
 *     - 1 extra HTTP request per first visit
 *     - 70–210ms LCP penalty (per PSI insights)
 *     - But: CSS file cached across page navigations
 *
 *   After (inlined <style>):
 *     - Zero render-blocking external CSS
 *     - LCP penalty eliminated
 *     - Cost: each prerendered HTML response grows by the size of the
 *       main entry CSS (Tailwind-purged, typically 30–80 KB unminified
 *       / 6–15 KB gzipped). Over the wire this is small; total transfer
 *       per cold visit is roughly neutral because the saved CSS request
 *       round-trip + connection setup recovers what the inline bytes cost.
 *
 * Why we can do this safely now:
 *   - cssCodeSplit: true means lazy-route CSS stays in separate files
 *     and still loads on-demand via <link> when those routes mount
 *   - Only the main entry's CSS is inlined — the always-visible-first-paint
 *     subset — so no behavior changes for code-split routes
 *   - No CLS risk because every above-fold rule is present at first paint
 *
 * Implementation:
 *   - transformIndexHtml runs after the bundle is built (ctx.bundle is set)
 *   - We pull the main CSS asset out of the bundle, find its <link> tag in
 *     the HTML by matching href, and swap the <link> for an inline <style>
 *   - If no CSS is found in the bundle or no matching <link> in HTML, we
 *     no-op and return HTML unchanged (defensive)
 */
export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx): IndexHtmlTransformResult {
        // In dev (`vite` command) ctx.bundle is undefined — skip transform.
        if (!ctx.bundle) return html;

        // Find the entry stylesheet <link> in the HTML. There may be other
        // <link rel="stylesheet"> tags (e.g., preconnect) — match on .css href.
        const linkMatch = html.match(
          /<link\s+rel="stylesheet"[^>]*href="\/([^"]+\.css)"[^>]*\/?>/i
        );
        if (!linkMatch) return html;

        const cssPath = linkMatch[1]; // e.g., "assets/index-Bv98Uu0m.css"
        const cssAsset = ctx.bundle[cssPath];
        if (!cssAsset || cssAsset.type !== 'asset') return html;

        const cssSource =
          typeof (cssAsset as { source?: unknown }).source === 'string'
            ? ((cssAsset as { source: string }).source)
            : null;
        if (!cssSource) return html;

        // Replace the <link> tag with an inline <style>. Drop the link entirely
        // so the browser never even attempts the external CSS fetch.
        const inlinedStyleTag = `<style data-inlined-from="${cssPath}">${cssSource}</style>`;
        return html.replace(linkMatch[0], inlinedStyleTag);
      },
    },
  };
}
