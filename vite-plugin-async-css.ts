import type { Plugin, IndexHtmlTransformResult } from 'vite';

/**
 * Vite plugin to load CSS asynchronously for better performance
 * Adds media="print" trick to defer CSS loading without blocking render
 */
export function asyncCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html): IndexHtmlTransformResult {
        // Transform stylesheet links to load asynchronously
        const transformed = html.replace(
          /<link\s+rel="stylesheet"([^>]*?)>/gi,
          (match, attrs) => {
            // Extract href for preload
            const hrefMatch = attrs.match(/href="([^"]+)"/);
            if (!hrefMatch) return match;

            const href = hrefMatch[1];
            const crossorigin = attrs.includes('crossorigin') ? ' crossorigin' : '';

            // Add preload before the regular link, then async load the stylesheet
            return `<link rel="preload" as="style" href="${href}"${crossorigin}>` +
                   `<link rel="stylesheet"${attrs} media="print" onload="this.media='all';this.onload=null;">` +
                   `<noscript><link rel="stylesheet"${attrs}></noscript>`;
          }
        );

        return transformed;
      }
    }
  };
}
