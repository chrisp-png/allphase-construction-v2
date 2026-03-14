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
          try {
            fs.copyFileSync(src, dest);
            console.log(`Copied ${file} from public to dist`);
          } catch (error) {
            // Skip files that are temporarily locked or inaccessible
            console.warn(`Skipped ${file}: ${error.message}`);
          }
        }
      });
    }

    // Copy SEO files (robots.txt, sitemap.xml, sitemap.html, _headers, and _redirects)
    const seoFiles = ['robots.txt', 'sitemap.xml', 'sitemap.html', '_headers', '_redirects', 'llms.txt', 'llms-full.txt'];
    seoFiles.forEach(file => {
      const src = path.resolve(publicDir, file);
      if (fs.existsSync(src)) {
        const dest = path.resolve(distDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} from public to dist`);
      }
    });

    // Copy social-proof directory recursively
    const socialProofSrc = path.resolve(publicDir, 'social-proof');
    const socialProofDest = path.resolve(distDir, 'social-proof');
    if (fs.existsSync(socialProofSrc)) {
      if (!fs.existsSync(socialProofDest)) {
        fs.mkdirSync(socialProofDest, { recursive: true });
      }
      const socialProofFiles = fs.readdirSync(socialProofSrc);
      socialProofFiles.forEach(file => {
        const src = path.resolve(socialProofSrc, file);
        const dest = path.resolve(socialProofDest, file);
        try {
          if (fs.statSync(src).isFile()) {
            fs.copyFileSync(src, dest);
            console.log(`Copied social-proof/${file}`);
          }
        } catch (error) {
          console.warn(`Skipped social-proof/${file}: ${error.message}`);
        }
      });
    }

    // Copy projects directory recursively
    const projectsSrc = path.resolve(publicDir, 'projects');
    const projectsDest = path.resolve(distDir, 'projects');
    if (fs.existsSync(projectsSrc)) {
      if (!fs.existsSync(projectsDest)) {
        fs.mkdirSync(projectsDest, { recursive: true });
      }
      const projectsFiles = fs.readdirSync(projectsSrc);
      projectsFiles.forEach(file => {
        const src = path.resolve(projectsSrc, file);
        const dest = path.resolve(projectsDest, file);
        try {
          if (fs.statSync(src).isFile()) {
            fs.copyFileSync(src, dest);
            console.log(`Copied projects/${file}`);
          }
        } catch (error) {
          console.warn(`Skipped projects/${file}: ${error.message}`);
        }
      });
    }

    // Copy case-studies directory recursively
    const caseStudiesSrc = path.resolve(publicDir, 'case-studies');
    const caseStudiesDest = path.resolve(distDir, 'case-studies');
    if (fs.existsSync(caseStudiesSrc)) {
      if (!fs.existsSync(caseStudiesDest)) {
        fs.mkdirSync(caseStudiesDest, { recursive: true });
      }
      const caseStudiesFiles = fs.readdirSync(caseStudiesSrc);
      caseStudiesFiles.forEach(file => {
        const src = path.resolve(caseStudiesSrc, file);
        const dest = path.resolve(caseStudiesDest, file);
        try {
          if (fs.statSync(src).isFile()) {
            fs.copyFileSync(src, dest);
            console.log(`Copied case-studies/${file}`);
          }
        } catch (error) {
          console.warn(`Skipped case-studies/${file}: ${error.message}`);
        }
      });
    }

    // Copy downloads directory (PDF guides, etc.)
    const downloadsSrc = path.resolve(publicDir, 'downloads');
    const downloadsDest = path.resolve(distDir, 'downloads');
    if (fs.existsSync(downloadsSrc)) {
      if (!fs.existsSync(downloadsDest)) {
        fs.mkdirSync(downloadsDest, { recursive: true });
      }
      const downloadsFiles = fs.readdirSync(downloadsSrc);
      downloadsFiles.forEach(file => {
        const src = path.resolve(downloadsSrc, file);
        const dest = path.resolve(downloadsDest, file);
        try {
          if (fs.statSync(src).isFile()) {
            fs.copyFileSync(src, dest);
            console.log(`Copied downloads/${file}`);
          }
        } catch (error) {
          console.warn(`Skipped downloads/${file}: ${error.message}`);
        }
      });
    }

    // Recursively copy all HTML files from public/ subdirectories (prerendered pages)
    // IMPORTANT: Skip root index.html to preserve Vite's processed version with bundled assets
    // CRITICAL: Skip SPA routes (locations/*, roof-repair/*, roof-inspection/*)
    const copyHtmlRecursive = (srcDir, destDir, isRoot = false) => {
      if (!fs.existsSync(srcDir)) return;

      const entries = fs.readdirSync(srcDir, { withFileTypes: true });
      entries.forEach(entry => {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);
        const relativePath = path.relative(publicDir, srcPath);

        // DENYLIST: Skip SPA routes that must be handled by React
        // NOTE: 'locations/' is NOT in this list - we have prerendered static HTML for location pages
        const spaRoutePrefixes = ['roof-repair/', 'roof-inspection/'];
        const isSpaRoute = spaRoutePrefixes.some(prefix =>
          relativePath.startsWith(prefix) || entry.name === 'roof-repair' || entry.name === 'roof-inspection'
        );

        if (entry.isDirectory()) {
          // Skip creating SPA route directories entirely
          if (isRoot && isSpaRoute) {
            console.log(`Skipped SPA route directory: ${entry.name}/ (React handles routing)`);
            return;
          }
          // Recursively copy non-SPA directories
          fs.mkdirSync(destPath, { recursive: true });
          copyHtmlRecursive(srcPath, destPath, false);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
          // Skip root index.html to preserve Vite's built version with proper asset links
          if (isRoot && entry.name === 'index.html') {
            console.log(`Skipped root index.html (preserving Vite build)`);
            return;
          }
          // Skip HTML files within SPA routes
          if (isSpaRoute) {
            console.log(`Skipped SPA route: ${relativePath} (React handles routing)`);
            return;
          }
          // Copy static service pages only
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied prerendered: ${relativePath}`);
        }
      });
    };

    // Copy all prerendered HTML pages from public/ subdirectories
    // Pass isRoot=true to skip copying root index.html
    copyHtmlRecursive(publicDir, distDir, true);
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), asyncCssPlugin(), manualPublicCopyPlugin()],
  publicDir: false, // Disable automatic public copy due to corrupted file
  optimizeDeps: {
    include: ['lucide-react'],
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
