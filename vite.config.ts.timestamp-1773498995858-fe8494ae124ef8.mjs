// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";

// vite-plugin-async-css.ts
function asyncCssPlugin() {
  return {
    name: "vite-plugin-async-css",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        const transformed = html.replace(
          /<link\s+rel="stylesheet"([^>]*?)>/gi,
          (match, attrs) => {
            const hrefMatch = attrs.match(/href="([^"]+)"/);
            if (!hrefMatch) return match;
            const href = hrefMatch[1];
            const crossorigin = attrs.includes("crossorigin") ? " crossorigin" : "";
            return `<link rel="preload" as="style" href="${href}"${crossorigin}><link rel="stylesheet"${attrs} media="print" onload="this.media='all';this.onload=null;"><noscript><link rel="stylesheet"${attrs}></noscript>`;
          }
        );
        return transformed;
      }
    }
  };
}

// vite.config.ts
import fs from "fs";
import path from "path";
var manualPublicCopyPlugin = () => ({
  name: "manual-public-copy",
  closeBundle() {
    const validFiles = [
      "long-term-piece-of-mind-all-phase-construction-usa.png",
      "tear-off-responsible-disposal-all-phase-construction-usa.jpg"
    ];
    const distDir = path.resolve("dist");
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    validFiles.forEach((file) => {
      const src = path.resolve("public_backup", file);
      const dest = path.resolve("dist", file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to dist`);
      }
    });
    const publicDir = path.resolve("public");
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      files.forEach((file) => {
        if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)) {
          const src = path.resolve(publicDir, file);
          const dest = path.resolve(distDir, file);
          try {
            fs.copyFileSync(src, dest);
            console.log(`Copied ${file} from public to dist`);
          } catch (error) {
            console.warn(`Skipped ${file}: ${error.message}`);
          }
        }
      });
    }
    const seoFiles = ["robots.txt", "sitemap.xml", "sitemap.html", "_headers", "_redirects", "llms.txt", "llms-full.txt"];
    seoFiles.forEach((file) => {
      const src = path.resolve(publicDir, file);
      if (fs.existsSync(src)) {
        const dest = path.resolve(distDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} from public to dist`);
      }
    });
    const socialProofSrc = path.resolve(publicDir, "social-proof");
    const socialProofDest = path.resolve(distDir, "social-proof");
    if (fs.existsSync(socialProofSrc)) {
      if (!fs.existsSync(socialProofDest)) {
        fs.mkdirSync(socialProofDest, { recursive: true });
      }
      const socialProofFiles = fs.readdirSync(socialProofSrc);
      socialProofFiles.forEach((file) => {
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
    const projectsSrc = path.resolve(publicDir, "projects");
    const projectsDest = path.resolve(distDir, "projects");
    if (fs.existsSync(projectsSrc)) {
      if (!fs.existsSync(projectsDest)) {
        fs.mkdirSync(projectsDest, { recursive: true });
      }
      const projectsFiles = fs.readdirSync(projectsSrc);
      projectsFiles.forEach((file) => {
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
    const caseStudiesSrc = path.resolve(publicDir, "case-studies");
    const caseStudiesDest = path.resolve(distDir, "case-studies");
    if (fs.existsSync(caseStudiesSrc)) {
      if (!fs.existsSync(caseStudiesDest)) {
        fs.mkdirSync(caseStudiesDest, { recursive: true });
      }
      const caseStudiesFiles = fs.readdirSync(caseStudiesSrc);
      caseStudiesFiles.forEach((file) => {
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
    const downloadsSrc = path.resolve(publicDir, "downloads");
    const downloadsDest = path.resolve(distDir, "downloads");
    if (fs.existsSync(downloadsSrc)) {
      if (!fs.existsSync(downloadsDest)) {
        fs.mkdirSync(downloadsDest, { recursive: true });
      }
      const downloadsFiles = fs.readdirSync(downloadsSrc);
      downloadsFiles.forEach((file) => {
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
    const copyHtmlRecursive = (srcDir, destDir, isRoot = false) => {
      if (!fs.existsSync(srcDir)) return;
      const entries = fs.readdirSync(srcDir, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);
        const relativePath = path.relative(publicDir, srcPath);
        const spaRoutePrefixes = ["roof-repair/", "roof-inspection/"];
        const isSpaRoute = spaRoutePrefixes.some(
          (prefix) => relativePath.startsWith(prefix) || entry.name === "roof-repair" || entry.name === "roof-inspection"
        );
        if (entry.isDirectory()) {
          if (isRoot && isSpaRoute) {
            console.log(`Skipped SPA route directory: ${entry.name}/ (React handles routing)`);
            return;
          }
          fs.mkdirSync(destPath, { recursive: true });
          copyHtmlRecursive(srcPath, destPath, false);
        } else if (entry.isFile() && entry.name.endsWith(".html")) {
          if (isRoot && entry.name === "index.html") {
            console.log(`Skipped root index.html (preserving Vite build)`);
            return;
          }
          if (isSpaRoute) {
            console.log(`Skipped SPA route: ${relativePath} (React handles routing)`);
            return;
          }
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied prerendered: ${relativePath}`);
        }
      });
    };
    copyHtmlRecursive(publicDir, distDir, true);
  }
});
var vite_config_default = defineConfig({
  plugins: [react(), asyncCssPlugin(), manualPublicCopyPlugin()],
  publicDir: false,
  // Disable automatic public copy due to corrupted file
  optimizeDeps: {
    include: ["lucide-react"]
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    cssMinify: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "supabase-vendor": ["@supabase/supabase-js"]
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2/.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgYXN5bmNDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWFzeW5jLWNzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFBsdWdpbiB0byBoYW5kbGUgcHVibGljIGRpcmVjdG9yeSB3aXRoIGNvcnJ1cHRlZCBmaWxlc1xuY29uc3QgbWFudWFsUHVibGljQ29weVBsdWdpbiA9ICgpID0+ICh7XG4gIG5hbWU6ICdtYW51YWwtcHVibGljLWNvcHknLFxuICBjbG9zZUJ1bmRsZSgpIHtcbiAgICBjb25zdCB2YWxpZEZpbGVzID0gW1xuICAgICAgJ2xvbmctdGVybS1waWVjZS1vZi1taW5kLWFsbC1waGFzZS1jb25zdHJ1Y3Rpb24tdXNhLnBuZycsXG4gICAgICAndGVhci1vZmYtcmVzcG9uc2libGUtZGlzcG9zYWwtYWxsLXBoYXNlLWNvbnN0cnVjdGlvbi11c2EuanBnJ1xuICAgIF07XG5cbiAgICBjb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKCdkaXN0Jyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzcGVjaWZpYyBmaWxlcyBmcm9tIHB1YmxpY19iYWNrdXBcbiAgICB2YWxpZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoJ3B1YmxpY19iYWNrdXAnLCBmaWxlKTtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoJ2Rpc3QnLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGFsbCBpbWFnZXMgYW5kIFNWRyBmcm9tIHB1YmxpYyBmb2xkZXIgZm9yIGJsb2cgcG9zdHNcbiAgICBjb25zdCBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoJ3B1YmxpYycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGlmICgvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGdpZnxzdmcpJC9pLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFNraXAgZmlsZXMgdGhhdCBhcmUgdGVtcG9yYXJpbHkgbG9ja2VkIG9yIGluYWNjZXNzaWJsZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkICR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgU0VPIGZpbGVzIChyb2JvdHMudHh0LCBzaXRlbWFwLnhtbCwgc2l0ZW1hcC5odG1sLCBfaGVhZGVycywgYW5kIF9yZWRpcmVjdHMpXG4gICAgY29uc3Qgc2VvRmlsZXMgPSBbJ3JvYm90cy50eHQnLCAnc2l0ZW1hcC54bWwnLCAnc2l0ZW1hcC5odG1sJywgJ19oZWFkZXJzJywgJ19yZWRpcmVjdHMnLCAnbGxtcy50eHQnLCAnbGxtcy1mdWxsLnR4dCddO1xuICAgIHNlb0ZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgY29uc3QgZGVzdCA9IHBhdGgucmVzb2x2ZShkaXN0RGlyLCBmaWxlKTtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IHNvY2lhbC1wcm9vZiBkaXJlY3RvcnkgcmVjdXJzaXZlbHlcbiAgICBjb25zdCBzb2NpYWxQcm9vZlNyYyA9IHBhdGgucmVzb2x2ZShwdWJsaWNEaXIsICdzb2NpYWwtcHJvb2YnKTtcbiAgICBjb25zdCBzb2NpYWxQcm9vZkRlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgJ3NvY2lhbC1wcm9vZicpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHNvY2lhbFByb29mU3JjKSkge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHNvY2lhbFByb29mRGVzdCkpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKHNvY2lhbFByb29mRGVzdCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBzb2NpYWxQcm9vZkZpbGVzID0gZnMucmVhZGRpclN5bmMoc29jaWFsUHJvb2ZTcmMpO1xuICAgICAgc29jaWFsUHJvb2ZGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoc29jaWFsUHJvb2ZTcmMsIGZpbGUpO1xuICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKHNvY2lhbFByb29mRGVzdCwgZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGZzLnN0YXRTeW5jKHNyYykuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENvcGllZCBzb2NpYWwtcHJvb2YvJHtmaWxlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgc29jaWFsLXByb29mLyR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBwcm9qZWN0cyBkaXJlY3RvcnkgcmVjdXJzaXZlbHlcbiAgICBjb25zdCBwcm9qZWN0c1NyYyA9IHBhdGgucmVzb2x2ZShwdWJsaWNEaXIsICdwcm9qZWN0cycpO1xuICAgIGNvbnN0IHByb2plY3RzRGVzdCA9IHBhdGgucmVzb2x2ZShkaXN0RGlyLCAncHJvamVjdHMnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwcm9qZWN0c1NyYykpIHtcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwcm9qZWN0c0Rlc3QpKSB7XG4gICAgICAgIGZzLm1rZGlyU3luYyhwcm9qZWN0c0Rlc3QsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvamVjdHNGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHByb2plY3RzU3JjKTtcbiAgICAgIHByb2plY3RzRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKHByb2plY3RzU3JjLCBmaWxlKTtcbiAgICAgICAgY29uc3QgZGVzdCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0c0Rlc3QsIGZpbGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhzcmMpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgcHJvamVjdHMvJHtmaWxlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgcHJvamVjdHMvJHtmaWxlfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDb3B5IGNhc2Utc3R1ZGllcyBkaXJlY3RvcnkgcmVjdXJzaXZlbHlcbiAgICBjb25zdCBjYXNlU3R1ZGllc1NyYyA9IHBhdGgucmVzb2x2ZShwdWJsaWNEaXIsICdjYXNlLXN0dWRpZXMnKTtcbiAgICBjb25zdCBjYXNlU3R1ZGllc0Rlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgJ2Nhc2Utc3R1ZGllcycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGNhc2VTdHVkaWVzU3JjKSkge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGNhc2VTdHVkaWVzRGVzdCkpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKGNhc2VTdHVkaWVzRGVzdCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBjYXNlU3R1ZGllc0ZpbGVzID0gZnMucmVhZGRpclN5bmMoY2FzZVN0dWRpZXNTcmMpO1xuICAgICAgY2FzZVN0dWRpZXNGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoY2FzZVN0dWRpZXNTcmMsIGZpbGUpO1xuICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGNhc2VTdHVkaWVzRGVzdCwgZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGZzLnN0YXRTeW5jKHNyYykuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENvcGllZCBjYXNlLXN0dWRpZXMvJHtmaWxlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgY2FzZS1zdHVkaWVzLyR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBkb3dubG9hZHMgZGlyZWN0b3J5IChQREYgZ3VpZGVzLCBldGMuKVxuICAgIGNvbnN0IGRvd25sb2Fkc1NyYyA9IHBhdGgucmVzb2x2ZShwdWJsaWNEaXIsICdkb3dubG9hZHMnKTtcbiAgICBjb25zdCBkb3dubG9hZHNEZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsICdkb3dubG9hZHMnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhkb3dubG9hZHNTcmMpKSB7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZG93bmxvYWRzRGVzdCkpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKGRvd25sb2Fkc0Rlc3QsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZG93bmxvYWRzRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkb3dubG9hZHNTcmMpO1xuICAgICAgZG93bmxvYWRzRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKGRvd25sb2Fkc1NyYywgZmlsZSk7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoZG93bmxvYWRzRGVzdCwgZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGZzLnN0YXRTeW5jKHNyYykuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENvcGllZCBkb3dubG9hZHMvJHtmaWxlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgZG93bmxvYWRzLyR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29weSBhbGwgSFRNTCBmaWxlcyBmcm9tIHB1YmxpYy8gc3ViZGlyZWN0b3JpZXMgKHByZXJlbmRlcmVkIHBhZ2VzKVxuICAgIC8vIElNUE9SVEFOVDogU2tpcCByb290IGluZGV4Lmh0bWwgdG8gcHJlc2VydmUgVml0ZSdzIHByb2Nlc3NlZCB2ZXJzaW9uIHdpdGggYnVuZGxlZCBhc3NldHNcbiAgICAvLyBDUklUSUNBTDogU2tpcCBTUEEgcm91dGVzIChsb2NhdGlvbnMvKiwgcm9vZi1yZXBhaXIvKiwgcm9vZi1pbnNwZWN0aW9uLyopXG4gICAgY29uc3QgY29weUh0bWxSZWN1cnNpdmUgPSAoc3JjRGlyLCBkZXN0RGlyLCBpc1Jvb3QgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHNyY0RpcikpIHJldHVybjtcblxuICAgICAgY29uc3QgZW50cmllcyA9IGZzLnJlYWRkaXJTeW5jKHNyY0RpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3Qgc3JjUGF0aCA9IHBhdGguam9pbihzcmNEaXIsIGVudHJ5Lm5hbWUpO1xuICAgICAgICBjb25zdCBkZXN0UGF0aCA9IHBhdGguam9pbihkZXN0RGlyLCBlbnRyeS5uYW1lKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5yZWxhdGl2ZShwdWJsaWNEaXIsIHNyY1BhdGgpO1xuXG4gICAgICAgIC8vIERFTllMSVNUOiBTa2lwIFNQQSByb3V0ZXMgdGhhdCBtdXN0IGJlIGhhbmRsZWQgYnkgUmVhY3RcbiAgICAgICAgLy8gTk9URTogJ2xvY2F0aW9ucy8nIGlzIE5PVCBpbiB0aGlzIGxpc3QgLSB3ZSBoYXZlIHByZXJlbmRlcmVkIHN0YXRpYyBIVE1MIGZvciBsb2NhdGlvbiBwYWdlc1xuICAgICAgICBjb25zdCBzcGFSb3V0ZVByZWZpeGVzID0gWydyb29mLXJlcGFpci8nLCAncm9vZi1pbnNwZWN0aW9uLyddO1xuICAgICAgICBjb25zdCBpc1NwYVJvdXRlID0gc3BhUm91dGVQcmVmaXhlcy5zb21lKHByZWZpeCA9PlxuICAgICAgICAgIHJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHByZWZpeCkgfHwgZW50cnkubmFtZSA9PT0gJ3Jvb2YtcmVwYWlyJyB8fCBlbnRyeS5uYW1lID09PSAncm9vZi1pbnNwZWN0aW9uJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgLy8gU2tpcCBjcmVhdGluZyBTUEEgcm91dGUgZGlyZWN0b3JpZXMgZW50aXJlbHlcbiAgICAgICAgICBpZiAoaXNSb290ICYmIGlzU3BhUm91dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTa2lwcGVkIFNQQSByb3V0ZSBkaXJlY3Rvcnk6ICR7ZW50cnkubmFtZX0vIChSZWFjdCBoYW5kbGVzIHJvdXRpbmcpYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvcHkgbm9uLVNQQSBkaXJlY3Rvcmllc1xuICAgICAgICAgIGZzLm1rZGlyU3luYyhkZXN0UGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgICAgY29weUh0bWxSZWN1cnNpdmUoc3JjUGF0aCwgZGVzdFBhdGgsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0ZpbGUoKSAmJiBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuaHRtbCcpKSB7XG4gICAgICAgICAgLy8gU2tpcCByb290IGluZGV4Lmh0bWwgdG8gcHJlc2VydmUgVml0ZSdzIGJ1aWx0IHZlcnNpb24gd2l0aCBwcm9wZXIgYXNzZXQgbGlua3NcbiAgICAgICAgICBpZiAoaXNSb290ICYmIGVudHJ5Lm5hbWUgPT09ICdpbmRleC5odG1sJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNraXBwZWQgcm9vdCBpbmRleC5odG1sIChwcmVzZXJ2aW5nIFZpdGUgYnVpbGQpYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNraXAgSFRNTCBmaWxlcyB3aXRoaW4gU1BBIHJvdXRlc1xuICAgICAgICAgIGlmIChpc1NwYVJvdXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2tpcHBlZCBTUEEgcm91dGU6ICR7cmVsYXRpdmVQYXRofSAoUmVhY3QgaGFuZGxlcyByb3V0aW5nKWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb3B5IHN0YXRpYyBzZXJ2aWNlIHBhZ2VzIG9ubHlcbiAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjUGF0aCwgZGVzdFBhdGgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgcHJlcmVuZGVyZWQ6ICR7cmVsYXRpdmVQYXRofWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ29weSBhbGwgcHJlcmVuZGVyZWQgSFRNTCBwYWdlcyBmcm9tIHB1YmxpYy8gc3ViZGlyZWN0b3JpZXNcbiAgICAvLyBQYXNzIGlzUm9vdD10cnVlIHRvIHNraXAgY29weWluZyByb290IGluZGV4Lmh0bWxcbiAgICBjb3B5SHRtbFJlY3Vyc2l2ZShwdWJsaWNEaXIsIGRpc3REaXIsIHRydWUpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBhc3luY0Nzc1BsdWdpbigpLCBtYW51YWxQdWJsaWNDb3B5UGx1Z2luKCldLFxuICBwdWJsaWNEaXI6IGZhbHNlLCAvLyBEaXNhYmxlIGF1dG9tYXRpYyBwdWJsaWMgY29weSBkdWUgdG8gY29ycnVwdGVkIGZpbGVcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBjc3NNaW5pZnk6IHRydWUsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgJ3N1cGFiYXNlLXZlbmRvcic6IFsnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ10sXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgLy8gT3JnYW5pemUgYXNzZXRzIGJ5IHR5cGUgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgICAgY29uc3QgaW5mbyA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgY29uc3QgZXh0ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmICgvcG5nfGpwZT9nfHN2Z3xnaWZ8dGlmZnxibXB8aWNvL2kudGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9pbWFnZXMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgICAgfSBlbHNlIGlmICgvd29mZnx3b2ZmMi8udGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9mb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiwgSW5kZXhIdG1sVHJhbnNmb3JtUmVzdWx0IH0gZnJvbSAndml0ZSc7XG5cbi8qKlxuICogVml0ZSBwbHVnaW4gdG8gbG9hZCBDU1MgYXN5bmNocm9ub3VzbHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICogQWRkcyBtZWRpYT1cInByaW50XCIgdHJpY2sgdG8gZGVmZXIgQ1NTIGxvYWRpbmcgd2l0aG91dCBibG9ja2luZyByZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQ3NzUGx1Z2luKCk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWFzeW5jLWNzcycsXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbDoge1xuICAgICAgb3JkZXI6ICdwb3N0JyxcbiAgICAgIGhhbmRsZXIoaHRtbCk6IEluZGV4SHRtbFRyYW5zZm9ybVJlc3VsdCB7XG4gICAgICAgIC8vIFRyYW5zZm9ybSBzdHlsZXNoZWV0IGxpbmtzIHRvIGxvYWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWQgPSBodG1sLnJlcGxhY2UoXG4gICAgICAgICAgLzxsaW5rXFxzK3JlbD1cInN0eWxlc2hlZXRcIihbXj5dKj8pPi9naSxcbiAgICAgICAgICAobWF0Y2gsIGF0dHJzKSA9PiB7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IGhyZWYgZm9yIHByZWxvYWRcbiAgICAgICAgICAgIGNvbnN0IGhyZWZNYXRjaCA9IGF0dHJzLm1hdGNoKC9ocmVmPVwiKFteXCJdKylcIi8pO1xuICAgICAgICAgICAgaWYgKCFocmVmTWF0Y2gpIHJldHVybiBtYXRjaDtcblxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGhyZWZNYXRjaFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gYXR0cnMuaW5jbHVkZXMoJ2Nyb3Nzb3JpZ2luJykgPyAnIGNyb3Nzb3JpZ2luJyA6ICcnO1xuXG4gICAgICAgICAgICAvLyBBZGQgcHJlbG9hZCBiZWZvcmUgdGhlIHJlZ3VsYXIgbGluaywgdGhlbiBhc3luYyBsb2FkIHRoZSBzdHlsZXNoZWV0XG4gICAgICAgICAgICByZXR1cm4gYDxsaW5rIHJlbD1cInByZWxvYWRcIiBhcz1cInN0eWxlXCIgaHJlZj1cIiR7aHJlZn1cIiR7Y3Jvc3NvcmlnaW59PmAgK1xuICAgICAgICAgICAgICAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIke2F0dHJzfSBtZWRpYT1cInByaW50XCIgb25sb2FkPVwidGhpcy5tZWRpYT0nYWxsJzt0aGlzLm9ubG9hZD1udWxsO1wiPmAgK1xuICAgICAgICAgICAgICAgICAgIGA8bm9zY3JpcHQ+PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiJHthdHRyc30+PC9ub3NjcmlwdD5gO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7OztBQ0tYLFNBQVMsaUJBQXlCO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULG9CQUFvQjtBQUFBLE1BQ2xCLE9BQU87QUFBQSxNQUNQLFFBQVEsTUFBZ0M7QUFFdEMsY0FBTSxjQUFjLEtBQUs7QUFBQSxVQUN2QjtBQUFBLFVBQ0EsQ0FBQyxPQUFPLFVBQVU7QUFFaEIsa0JBQU0sWUFBWSxNQUFNLE1BQU0sZ0JBQWdCO0FBQzlDLGdCQUFJLENBQUMsVUFBVyxRQUFPO0FBRXZCLGtCQUFNLE9BQU8sVUFBVSxDQUFDO0FBQ3hCLGtCQUFNLGNBQWMsTUFBTSxTQUFTLGFBQWEsSUFBSSxpQkFBaUI7QUFHckUsbUJBQU8sd0NBQXdDLElBQUksSUFBSSxXQUFXLDBCQUNsQyxLQUFLLDhGQUNLLEtBQUs7QUFBQSxVQUNqRDtBQUFBLFFBQ0Y7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRGhDQSxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFHakIsSUFBTSx5QkFBeUIsT0FBTztBQUFBLEVBQ3BDLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFDWixVQUFNLGFBQWE7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBRUEsVUFBTSxVQUFVLEtBQUssUUFBUSxNQUFNO0FBQ25DLFFBQUksQ0FB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QkFBUSxJQUFJLGdDQUFnQyxNQUFNLElBQUksMkJBQTJCO0FBQ2pGO0FBQUEsVUFDRjtBQUVBLGFBQUcsVUFBVSxVQUFVLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDMUMsNEJBQWtCLFNBQVMsVUFBVSxLQUFLO0FBQUEsUUFDNUMsV0FBVyxNQUFNLE9BQU8sS0FBSyxNQUFNLEtBQUssU0FBUyxPQUFPLEdBQUc7QUFFekQsY0FBSSxVQUFVLE1BQU0sU0FBUyxjQUFjO0FBQ3pDLG9CQUFRLElBQUksaURBQWlEO0FBQzdEO0FBQUEsVUFDRjtBQUVBLGNBQUksWUFBWTtBQUNkLG9CQUFRLElBQUksc0JBQXNCLFlBQVksMEJBQTBCO0FBQ3hFO0FBQUEsVUFDRjtBQUVBLGFBQUcsYUFBYSxTQUFTLFFBQVE7QUFDakMsa0JBQVEsSUFBSSx1QkFBdUIsWUFBWSxFQUFFO0FBQUEsUUFDbkQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBSUEsc0JBQWtCLFdBQVcsU0FBUyxJQUFJO0FBQUEsRUFDNUM7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxHQUFHLHVCQUF1QixDQUFDO0FBQUEsRUFDN0QsV0FBVztBQUFBO0FBQUEsRUFDWCxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixnQkFBZ0IsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsVUFDekQsbUJBQW1CLENBQUMsdUJBQXVCO0FBQUEsUUFDN0M7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFFN0IsZ0JBQU0sT0FBTyxVQUFVLEtBQUssTUFBTSxHQUFHO0FBQ3JDLGdCQUFNLE1BQU0sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUNoQyxjQUFJLGtDQUFrQyxLQUFLLEdBQUcsR0FBRztBQUMvQyxtQkFBTztBQUFBLFVBQ1QsV0FBVyxhQUFhLEtBQUssR0FBRyxHQUFHO0FBQ2pDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
