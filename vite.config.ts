import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { asyncCssPlugin } from './vite-plugin-async-css';
import fs from 'fs';
import path from 'path';

// Plugin to handle public directory with corrupted files
const manualPublicCopyPlugin = () => ({
  name: 'manual-public-copy',
  closeBundle() {
    const validFiles = [
      'long-term-piece-of-mind-all-phase-construction-usa.png',
      'tear-off-responsible-disposal-all-phase-construction-usa.jpg'
    ];

    const distDir = path.resolve('dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Copy specific files from public_backup
    validFiles.forEach(file => {
      const src = path.resolve('public_backup', file);
      const dest = path.resolve('dist', file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to dist`);
      }
    });

    // Copy all images and SVG from public folder for blog posts
    const publicDir = path.resolve('public');
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      files.forEach(file => {
        if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)) {
          const src = path.resolve(publicDir, file);
          const dest = path.resolve(distDir, file);
          fs.copyFileSync(src, dest);
          console.log(`Copied ${file} from public to dist`);
        }
      });
    }

    // Copy SEO files (robots.txt, sitemap.xml, sitemap.html, _headers, and _redirects)
    const seoFiles = ['robots.txt', 'sitemap.xml', 'sitemap.html', '_headers', '_redirects'];
    seoFiles.forEach(file => {
      const src = path.resolve(publicDir, file);
      if (fs.existsSync(src)) {
        const dest = path.resolve(distDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} from public to dist`);
      }
    });

    // Recursively copy all HTML files from public/ subdirectories (prerendered pages)
    const copyHtmlRecursive = (srcDir, destDir) => {
      if (!fs.existsSync(srcDir)) return;

      const entries = fs.readdirSync(srcDir, { withFileTypes: true });
      entries.forEach(entry => {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
          // Recursively copy directory
          fs.mkdirSync(destPath, { recursive: true });
          copyHtmlRecursive(srcPath, destPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
          // Copy HTML files
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied prerendered: ${path.relative(publicDir, srcPath)}`);
        }
      });
    };

    // Copy all prerendered HTML pages from public/ subdirectories
    copyHtmlRecursive(publicDir, distDir);
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), asyncCssPlugin(), manualPublicCopyPlugin()],
  publicDir: false, // Disable automatic public copy due to corrupted file
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'supabase-vendor': ['@supabase/supabase-js'],
        },
        assetFileNames: (assetInfo) => {
          // Organize assets by type for better caching
          const info = assetInfo.name.split('.');
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
