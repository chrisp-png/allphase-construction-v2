import type { Plugin, IndexHtmlTransformResult } from 'vite';

/**
 * Vite plugin for CSS loading
 * Loads CSS render-blocking to prevent CLS (Cumulative Layout Shift).
 * CSS is small enough that render-blocking is preferable to layout shift.
 */
export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html): IndexHtmlTransformResult {
        // No transformation — load CSS normally (render-blocking)
        // This prevents CLS from styles applying after first paint
        return html;
      }
    }
  };
}
