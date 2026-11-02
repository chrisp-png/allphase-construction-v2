import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Server-render bundle for the build-time SSR prerender (scripts/ssr-inject.mjs).
 *
 * Kept separate from vite.config.ts on purpose: the client config's
 * manualPublicCopyPlugin / asyncCssPlugin write into dist/ and must not run a
 * second time. This build writes only to dist-ssr/ (never published).
 *
 * assetFileNames mirrors the client config so imported image URLs in the
 * server-rendered markup resolve to the same /assets/images/... files the
 * client build emits.
 */
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  ssr: {
    // Bundle every dependency so Node never has to resolve CJS/ESM interop
    // for lucide-react, react-helmet-async, etc.
    noExternal: true,
  },
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    emptyOutDir: true,
    target: 'node20',
    minify: false,
    copyPublicDir: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'entry-server.mjs',
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          const info = (assetInfo.name || '').split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2/.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
