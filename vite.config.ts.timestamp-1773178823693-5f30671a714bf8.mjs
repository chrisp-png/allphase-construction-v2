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
    const seoFiles = ["robots.txt", "sitemap.xml", "sitemap.html", "_headers", "_redirects"];
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
    exclude: ["lucide-react"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgYXN5bmNDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWFzeW5jLWNzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFBsdWdpbiB0byBoYW5kbGUgcHVibGljIGRpcmVjdG9yeSB3aXRoIGNvcnJ1cHRlZCBmaWxlc1xuY29uc3QgbWFudWFsUHVibGljQ29weVBsdWdpbiA9ICgpID0+ICh7XG4gIG5hbWU6ICdtYW51YWwtcHVibGljLWNvcHknLFxuICBjbG9zZUJ1bmRsZSgpIHtcbiAgICBjb25zdCB2YWxpZEZpbGVzID0gW1xuICAgICAgJ2xvbmctdGVybS1waWVjZS1vZi1taW5kLWFsbC1waGFzZS1jb25zdHJ1Y3Rpb24tdXNhLnBuZycsXG4gICAgICAndGVhci1vZmYtcmVzcG9uc2libGUtZGlzcG9zYWwtYWxsLXBoYXNlLWNvbnN0cnVjdGlvbi11c2EuanBnJ1xuICAgIF07XG5cbiAgICBjb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKCdkaXN0Jyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzcGVjaWZpYyBmaWxlcyBmcm9tIHB1YmxpY19iYWNrdXBcbiAgICB2YWxpZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoJ3B1YmxpY19iYWNrdXAnLCBmaWxlKTtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoJ2Rpc3QnLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGFsbCBpbWFnZXMgYW5kIFNWRyBmcm9tIHB1YmxpYyBmb2xkZXIgZm9yIGJsb2cgcG9zdHNcbiAgICBjb25zdCBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoJ3B1YmxpYycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGlmICgvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGdpZnxzdmcpJC9pLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFNraXAgZmlsZXMgdGhhdCBhcmUgdGVtcG9yYXJpbHkgbG9ja2VkIG9yIGluYWNjZXNzaWJsZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkICR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgU0VPIGZpbGVzIChyb2JvdHMudHh0LCBzaXRlbWFwLnhtbCwgc2l0ZW1hcC5odG1sLCBfaGVhZGVycywgYW5kIF9yZWRpcmVjdHMpXG4gICAgY29uc3Qgc2VvRmlsZXMgPSBbJ3JvYm90cy50eHQnLCAnc2l0ZW1hcC54bWwnLCAnc2l0ZW1hcC5odG1sJywgJ19oZWFkZXJzJywgJ19yZWRpcmVjdHMnXTtcbiAgICBzZW9GaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKHB1YmxpY0RpciwgZmlsZSk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmMpKSB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgZmlsZSk7XG4gICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29waWVkICR7ZmlsZX0gZnJvbSBwdWJsaWMgdG8gZGlzdGApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29weSBzb2NpYWwtcHJvb2YgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gICAgY29uc3Qgc29jaWFsUHJvb2ZTcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCAnc29jaWFsLXByb29mJyk7XG4gICAgY29uc3Qgc29jaWFsUHJvb2ZEZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsICdzb2NpYWwtcHJvb2YnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzb2NpYWxQcm9vZlNyYykpIHtcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhzb2NpYWxQcm9vZkRlc3QpKSB7XG4gICAgICAgIGZzLm1rZGlyU3luYyhzb2NpYWxQcm9vZkRlc3QsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgY29uc3Qgc29jaWFsUHJvb2ZGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHNvY2lhbFByb29mU3JjKTtcbiAgICAgIHNvY2lhbFByb29mRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKHNvY2lhbFByb29mU3JjLCBmaWxlKTtcbiAgICAgICAgY29uc3QgZGVzdCA9IHBhdGgucmVzb2x2ZShzb2NpYWxQcm9vZkRlc3QsIGZpbGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhzcmMpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgc29jaWFsLXByb29mLyR7ZmlsZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIHNvY2lhbC1wcm9vZi8ke2ZpbGV9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgcHJvamVjdHMgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcHJvamVjdHNTcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCAncHJvamVjdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0c0Rlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgJ3Byb2plY3RzJyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocHJvamVjdHNTcmMpKSB7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocHJvamVjdHNEZXN0KSkge1xuICAgICAgICBmcy5ta2RpclN5bmMocHJvamVjdHNEZXN0LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3RzRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwcm9qZWN0c1NyYyk7XG4gICAgICBwcm9qZWN0c0ZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHBhdGgucmVzb2x2ZShwcm9qZWN0c1NyYywgZmlsZSk7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUocHJvamVjdHNEZXN0LCBmaWxlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZnMuc3RhdFN5bmMoc3JjKS5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29waWVkIHByb2plY3RzLyR7ZmlsZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIHByb2plY3RzLyR7ZmlsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBjYXNlLXN0dWRpZXMgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgY2FzZVN0dWRpZXNTcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCAnY2FzZS1zdHVkaWVzJyk7XG4gICAgY29uc3QgY2FzZVN0dWRpZXNEZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsICdjYXNlLXN0dWRpZXMnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhjYXNlU3R1ZGllc1NyYykpIHtcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhjYXNlU3R1ZGllc0Rlc3QpKSB7XG4gICAgICAgIGZzLm1rZGlyU3luYyhjYXNlU3R1ZGllc0Rlc3QsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgY2FzZVN0dWRpZXNGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGNhc2VTdHVkaWVzU3JjKTtcbiAgICAgIGNhc2VTdHVkaWVzRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKGNhc2VTdHVkaWVzU3JjLCBmaWxlKTtcbiAgICAgICAgY29uc3QgZGVzdCA9IHBhdGgucmVzb2x2ZShjYXNlU3R1ZGllc0Rlc3QsIGZpbGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhzcmMpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgY2FzZS1zdHVkaWVzLyR7ZmlsZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIGNhc2Utc3R1ZGllcy8ke2ZpbGV9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvcHkgYWxsIEhUTUwgZmlsZXMgZnJvbSBwdWJsaWMvIHN1YmRpcmVjdG9yaWVzIChwcmVyZW5kZXJlZCBwYWdlcylcbiAgICAvLyBJTVBPUlRBTlQ6IFNraXAgcm9vdCBpbmRleC5odG1sIHRvIHByZXNlcnZlIFZpdGUncyBwcm9jZXNzZWQgdmVyc2lvbiB3aXRoIGJ1bmRsZWQgYXNzZXRzXG4gICAgLy8gQ1JJVElDQUw6IFNraXAgU1BBIHJvdXRlcyAobG9jYXRpb25zLyosIHJvb2YtcmVwYWlyLyosIHJvb2YtaW5zcGVjdGlvbi8qKVxuICAgIGNvbnN0IGNvcHlIdG1sUmVjdXJzaXZlID0gKHNyY0RpciwgZGVzdERpciwgaXNSb290ID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhzcmNEaXIpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGVudHJpZXMgPSBmcy5yZWFkZGlyU3luYyhzcmNEaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IHNyY1BhdGggPSBwYXRoLmpvaW4oc3JjRGlyLCBlbnRyeS5uYW1lKTtcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4oZGVzdERpciwgZW50cnkubmFtZSk7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUocHVibGljRGlyLCBzcmNQYXRoKTtcblxuICAgICAgICAvLyBERU5ZTElTVDogU2tpcCBTUEEgcm91dGVzIHRoYXQgbXVzdCBiZSBoYW5kbGVkIGJ5IFJlYWN0XG4gICAgICAgIC8vIE5PVEU6ICdsb2NhdGlvbnMvJyBpcyBOT1QgaW4gdGhpcyBsaXN0IC0gd2UgaGF2ZSBwcmVyZW5kZXJlZCBzdGF0aWMgSFRNTCBmb3IgbG9jYXRpb24gcGFnZXNcbiAgICAgICAgY29uc3Qgc3BhUm91dGVQcmVmaXhlcyA9IFsncm9vZi1yZXBhaXIvJywgJ3Jvb2YtaW5zcGVjdGlvbi8nXTtcbiAgICAgICAgY29uc3QgaXNTcGFSb3V0ZSA9IHNwYVJvdXRlUHJlZml4ZXMuc29tZShwcmVmaXggPT5cbiAgICAgICAgICByZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChwcmVmaXgpIHx8IGVudHJ5Lm5hbWUgPT09ICdyb29mLXJlcGFpcicgfHwgZW50cnkubmFtZSA9PT0gJ3Jvb2YtaW5zcGVjdGlvbidcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgIC8vIFNraXAgY3JlYXRpbmcgU1BBIHJvdXRlIGRpcmVjdG9yaWVzIGVudGlyZWx5XG4gICAgICAgICAgaWYgKGlzUm9vdCAmJiBpc1NwYVJvdXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2tpcHBlZCBTUEEgcm91dGUgZGlyZWN0b3J5OiAke2VudHJ5Lm5hbWV9LyAoUmVhY3QgaGFuZGxlcyByb3V0aW5nKWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZWN1cnNpdmVseSBjb3B5IG5vbi1TUEEgZGlyZWN0b3JpZXNcbiAgICAgICAgICBmcy5ta2RpclN5bmMoZGVzdFBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgIGNvcHlIdG1sUmVjdXJzaXZlKHNyY1BhdGgsIGRlc3RQYXRoLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaXNGaWxlKCkgJiYgZW50cnkubmFtZS5lbmRzV2l0aCgnLmh0bWwnKSkge1xuICAgICAgICAgIC8vIFNraXAgcm9vdCBpbmRleC5odG1sIHRvIHByZXNlcnZlIFZpdGUncyBidWlsdCB2ZXJzaW9uIHdpdGggcHJvcGVyIGFzc2V0IGxpbmtzXG4gICAgICAgICAgaWYgKGlzUm9vdCAmJiBlbnRyeS5uYW1lID09PSAnaW5kZXguaHRtbCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTa2lwcGVkIHJvb3QgaW5kZXguaHRtbCAocHJlc2VydmluZyBWaXRlIGJ1aWxkKWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTa2lwIEhUTUwgZmlsZXMgd2l0aGluIFNQQSByb3V0ZXNcbiAgICAgICAgICBpZiAoaXNTcGFSb3V0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNraXBwZWQgU1BBIHJvdXRlOiAke3JlbGF0aXZlUGF0aH0gKFJlYWN0IGhhbmRsZXMgcm91dGluZylgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ29weSBzdGF0aWMgc2VydmljZSBwYWdlcyBvbmx5XG4gICAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyY1BhdGgsIGRlc3RQYXRoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ29waWVkIHByZXJlbmRlcmVkOiAke3JlbGF0aXZlUGF0aH1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIENvcHkgYWxsIHByZXJlbmRlcmVkIEhUTUwgcGFnZXMgZnJvbSBwdWJsaWMvIHN1YmRpcmVjdG9yaWVzXG4gICAgLy8gUGFzcyBpc1Jvb3Q9dHJ1ZSB0byBza2lwIGNvcHlpbmcgcm9vdCBpbmRleC5odG1sXG4gICAgY29weUh0bWxSZWN1cnNpdmUocHVibGljRGlyLCBkaXN0RGlyLCB0cnVlKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgYXN5bmNDc3NQbHVnaW4oKSwgbWFudWFsUHVibGljQ29weVBsdWdpbigpXSxcbiAgcHVibGljRGlyOiBmYWxzZSwgLy8gRGlzYWJsZSBhdXRvbWF0aWMgcHVibGljIGNvcHkgZHVlIHRvIGNvcnJ1cHRlZCBmaWxlXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICdzdXBhYmFzZS12ZW5kb3InOiBbJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyddLFxuICAgICAgICB9LFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIC8vIE9yZ2FuaXplIGFzc2V0cyBieSB0eXBlIGZvciBiZXR0ZXIgY2FjaGluZ1xuICAgICAgICAgIGNvbnN0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGluZm9baW5mby5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvaW1hZ2VzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL3dvZmZ8d29mZjIvLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvZm9udHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4sIEluZGV4SHRtbFRyYW5zZm9ybVJlc3VsdCB9IGZyb20gJ3ZpdGUnO1xuXG4vKipcbiAqIFZpdGUgcGx1Z2luIHRvIGxvYWQgQ1NTIGFzeW5jaHJvbm91c2x5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAqIEFkZHMgbWVkaWE9XCJwcmludFwiIHRyaWNrIHRvIGRlZmVyIENTUyBsb2FkaW5nIHdpdGhvdXQgYmxvY2tpbmcgcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3luY0Nzc1BsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1hc3luYy1jc3MnLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWw6IHtcbiAgICAgIG9yZGVyOiAncG9zdCcsXG4gICAgICBoYW5kbGVyKGh0bWwpOiBJbmRleEh0bWxUcmFuc2Zvcm1SZXN1bHQge1xuICAgICAgICAvLyBUcmFuc2Zvcm0gc3R5bGVzaGVldCBsaW5rcyB0byBsb2FkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gaHRtbC5yZXBsYWNlKFxuICAgICAgICAgIC88bGlua1xccytyZWw9XCJzdHlsZXNoZWV0XCIoW14+XSo/KT4vZ2ksXG4gICAgICAgICAgKG1hdGNoLCBhdHRycykgPT4ge1xuICAgICAgICAgICAgLy8gRXh0cmFjdCBocmVmIGZvciBwcmVsb2FkXG4gICAgICAgICAgICBjb25zdCBocmVmTWF0Y2ggPSBhdHRycy5tYXRjaCgvaHJlZj1cIihbXlwiXSspXCIvKTtcbiAgICAgICAgICAgIGlmICghaHJlZk1hdGNoKSByZXR1cm4gbWF0Y2g7XG5cbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBocmVmTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBjcm9zc29yaWdpbiA9IGF0dHJzLmluY2x1ZGVzKCdjcm9zc29yaWdpbicpID8gJyBjcm9zc29yaWdpbicgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHByZWxvYWQgYmVmb3JlIHRoZSByZWd1bGFyIGxpbmssIHRoZW4gYXN5bmMgbG9hZCB0aGUgc3R5bGVzaGVldFxuICAgICAgICAgICAgcmV0dXJuIGA8bGluayByZWw9XCJwcmVsb2FkXCIgYXM9XCJzdHlsZVwiIGhyZWY9XCIke2hyZWZ9XCIke2Nyb3Nzb3JpZ2lufT5gICtcbiAgICAgICAgICAgICAgICAgICBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiJHthdHRyc30gbWVkaWE9XCJwcmludFwiIG9ubG9hZD1cInRoaXMubWVkaWE9J2FsbCc7dGhpcy5vbmxvYWQ9bnVsbDtcIj5gICtcbiAgICAgICAgICAgICAgICAgICBgPG5vc2NyaXB0PjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiR7YXR0cnN9Pjwvbm9zY3JpcHQ+YDtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXOzs7QUNLWCxTQUFTLGlCQUF5QjtBQUN2QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxvQkFBb0I7QUFBQSxNQUNsQixPQUFPO0FBQUEsTUFDUCxRQUFRLE1BQWdDO0FBRXRDLGNBQU0sY0FBYyxLQUFLO0FBQUEsVUFDdkI7QUFBQSxVQUNBLENBQUMsT0FBTyxVQUFVO0FBRWhCLGtCQUFNLFlBQVksTUFBTSxNQUFNLGdCQUFnQjtBQUM5QyxnQkFBSSxDQUFDLFVBQVcsUUFBTztBQUV2QixrQkFBTSxPQUFPLFVBQVUsQ0FBQztBQUN4QixrQkFBTSxjQUFjLE1BQU0sU0FBUyxhQUFhLElBQUksaUJBQWlCO0FBR3JFLG1CQUFPLHdDQUF3QyxJQUFJLElBQUksV0FBVywwQkFDbEMsS0FBSyw4RkFDSyxLQUFLO0FBQUEsVUFDakQ7QUFBQSxRQUNGO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QURoQ0EsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBR2pCLElBQU0seUJBQXlCLE9BQU87QUFBQSxFQUNwQyxNQUFNO0FBQUEsRUFDTixjQUFjO0FBQ1osVUFBTSxhQUFhO0FBQUEsTUFDakI7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxLQUFLLFFBQVEsTUFBTTtBQUNuQyxRQUFJLENBQUMsR0FBRyxXQUFXLE9BQU8sR0FBRztBQUMzQixTQUFHLFVBQVUsU0FBUyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQUEsSUFDM0M7QUFHQSxlQUFXLFFBQVEsVUFBUTtBQUN6QixZQUFNLE1BQU0sS0FBSyxRQUFRLGlCQUFpQixJQUFJO0FBQzlDLFlBQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxJQUFJO0FBQ3RDLFVBQUksR0FBRyxXQUFXLEdBQUcsR0FBRztBQUN0QixXQUFHLGFBQWEsS0FBSyxJQUFJO0FBQ3pCLGdCQUFRLElBQUksVUFBVSxJQUFJLFVBQVU7QUFBQSxNQUN0QztBQUFBLElBQ0YsQ0FBQztBQUdELFVBQU0sWUFBWSxLQUFLLFFBQVEsUUFBUTtBQUN2QyxRQUFJLEdBQUcsV0FBVyxTQUFTLEdBQUc7QUFDNUIsWUFBTSxRQUFRLEdBQUcsWUFBWSxTQUFTO0FBQ3RDLFlBQU0sUUFBUSxVQUFRO0FBQ3BCLFlBQUksa0NBQWtDLEtBQUssSUFBSSxHQUFHO0FBQ2hELGdCQUFNLE1BQU0sS0FBSyxRQUFRLFdBQVcsSUFBSTtBQUN4QyxnQkFBTSxPQUFPLEtBQUssUUFBUSxTQUFTLElBQUk7QUFDdkMsY0FBSTtBQUNGLGVBQUcsYUFBYSxLQUFLLElBQUk7QUFDekIsb0JBQVEsSUFBSSxVQUFVLElBQUksc0JBQXNCO0FBQUEsVUFDbEQsU0FBUyxPQUFPO0FBRWQsb0JBQVEsS0FBSyxXQUFXLElBQUksS0FBSyxNQUFNLE9BQU8sRUFBRTtBQUFBLFVBQ2xEO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxVQUFNLFdBQVcsQ0FBQyxjQUFjLGVBQWUsZ0JBQWdCLFlBQVksWUFBWTtBQUN2RixhQUFTLFFBQVEsVUFBUTtBQUN2QixZQUFNLE1BQU0sS0FBSyxRQUFRLFdBQVcsSUFBSTtBQUN4QyxVQUFJLEdBQUcsV0FBVyxHQUFHLEdBQUc7QUFDdEIsY0FBTSxPQUFPLEtBQUssUUFBUSxTQUFTLElBQUk7QUFDdkMsV0FBRyxhQUFhLEtBQUssSUFBSTtBQUN6QixnQkFBUSxJQUFJLFVBQVUsSUFBSSxzQkFBc0I7QUFBQSxNQUNsRDtBQUFBLElBQ0YsQ0FBQztBQUdELFVBQU0saUJBQWlCLEtBQUssUUFBUSxXQUFXLGNBQWM7QUFDN0QsVUFBTSxrQkFBa0IsS0FBSyxRQUFRLFNBQVMsY0FBYztBQUM1RCxRQUFJLEdBQUcsV0FBVyxjQUFjLEdBQUc7QUFDakMsVUFBSSxDQUFDLEdBQUcsV0FBVyxlQUFlLEdBQUc7QUFDbkMsV0FBRyxVQUFVLGlCQUFpQixFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQUEsTUFDbkQ7QUFDQSxZQUFNLG1CQUFtQixHQUFHLFlBQVksY0FBYztBQUN0RCx1QkFBaUIsUUFBUSxVQUFRO0FBQy9CLGNBQU0sTUFBTSxLQUFLLFFBQVEsZ0JBQWdCLElBQUk7QUFDN0MsY0FBTSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsSUFBSTtBQUMvQyxZQUFJO0FBQ0YsY0FBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLE9BQU8sR0FBRztBQUM3QixlQUFHLGFBQWEsS0FBSyxJQUFJO0FBQ3pCLG9CQUFRLElBQUksdUJBQXVCLElBQUksRUFBRTtBQUFBLFVBQzNDO0FBQUEsUUFDRixTQUFTLE9BQU87QUFDZCxrQkFBUSxLQUFLLHdCQUF3QixJQUFJLEtBQUssTUFBTSxPQUFPLEVBQUU7QUFBQSxRQUMvRDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxVQUFNLGNBQWMsS0FBSyxRQUFRLFdBQVcsVUFBVTtBQUN0RCxVQUFNLGVBQWUsS0FBSyxRQUFRLFNBQVMsVUFBVTtBQUNyRCxRQUFJLEdBQUcsV0FBVyxXQUFXLEdBQUc7QUFDOUIsVUFBSSxDQUFDLEdBQUcsV0FBVyxZQUFZLEdBQUc7QUFDaEMsV0FBRyxVQUFVLGNBQWMsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLE1BQ2hEO0FBQ0EsWUFBTSxnQkFBZ0IsR0FBRyxZQUFZLFdBQVc7QUFDaEQsb0JBQWMsUUFBUSxVQUFRO0FBQzVCLGNBQU0sTUFBTSxLQUFLLFFBQVEsYUFBYSxJQUFJO0FBQzFDLGNBQU0sT0FBTyxLQUFLLFFBQVEsY0FBYyxJQUFJO0FBQzVDLFlBQUk7QUFDRixjQUFJLEdBQUcsU0FBUyxHQUFHLEVBQUUsT0FBTyxHQUFHO0FBQzdCLGVBQUcsYUFBYSxLQUFLLElBQUk7QUFDekIsb0JBQVEsSUFBSSxtQkFBbUIsSUFBSSxFQUFFO0FBQUEsVUFDdkM7QUFBQSxRQUNGLFNBQVMsT0FBTztBQUNkLGtCQUFRLEtBQUssb0JBQW9CLElBQUksS0FBSyxNQUFNLE9BQU8sRUFBRTtBQUFBLFFBQzNEO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUdBLFVBQU0saUJBQWlCLEtBQUssUUFBUSxXQUFXLGNBQWM7QUFDN0QsVUFBTSxrQkFBa0IsS0FBSyxRQUFRLFNBQVMsY0FBYztBQUM1RCxRQUFJLEdBQUcsV0FBVyxjQUFjLEdBQUc7QUFDakMsVUFBSSxDQUFDLEdBQUcsV0FBVyxlQUFlLEdBQUc7QUFDbkMsV0FBRyxVQUFVLGlCQUFpQixFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQUEsTUFDbkQ7QUFDQSxZQUFNLG1CQUFtQixHQUFHLFlBQVksY0FBYztBQUN0RCx1QkFBaUIsUUFBUSxVQUFRO0FBQy9CLGNBQU0sTUFBTSxLQUFLLFFBQVEsZ0JBQWdCLElBQUk7QUFDN0MsY0FBTSxPQUFPLEtBQUssUUFBUSxpQkFBaUIsSUFBSTtBQUMvQyxZQUFJO0FBQ0YsY0FBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLE9BQU8sR0FBRztBQUM3QixlQUFHLGFBQWEsS0FBSyxJQUFJO0FBQ3pCLG9CQUFRLElBQUksdUJBQXVCLElBQUksRUFBRTtBQUFBLFVBQzNDO0FBQUEsUUFDRixTQUFTLE9BQU87QUFDZCxrQkFBUSxLQUFLLHdCQUF3QixJQUFJLEtBQUssTUFBTSxPQUFPLEVBQUU7QUFBQSxRQUMvRDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFLQSxVQUFNLG9CQUFvQixDQUFDLFFBQVEsU0FBUyxTQUFTLFVBQVU7QUFDN0QsVUFBSSxDQUFDLEdBQUcsV0FBVyxNQUFNLEVBQUc7QUFFNUIsWUFBTSxVQUFVLEdBQUcsWUFBWSxRQUFRLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFDOUQsY0FBUSxRQUFRLFdBQVM7QUFDdkIsY0FBTSxVQUFVLEtBQUssS0FBSyxRQUFRLE1BQU0sSUFBSTtBQUM1QyxjQUFNLFdBQVcsS0FBSyxLQUFLLFNBQVMsTUFBTSxJQUFJO0FBQzlDLGNBQU0sZUFBZSxLQUFLLFNBQVMsV0FBVyxPQUFPO0FBSXJELGNBQU0sbUJBQW1CLENBQUMsZ0JBQWdCLGtCQUFrQjtBQUM1RCxjQUFNLGFBQWEsaUJBQWlCO0FBQUEsVUFBSyxZQUN2QyxhQUFhLFdBQVcsTUFBTSxLQUFLLE1BQU0sU0FBUyxpQkFBaUIsTUFBTSxTQUFTO0FBQUEsUUFDcEY7QUFFQSxZQUFJLE1BQU0sWUFBWSxHQUFHO0FBRXZCLGNBQUksVUFBVSxZQUFZO0FBQ3hCLG9CQUFRLElBQUksZ0NBQWdDLE1BQU0sSUFBSSwyQkFBMkI7QUFDakY7QUFBQSxVQUNGO0FBRUEsYUFBRyxVQUFVLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUMxQyw0QkFBa0IsU0FBUyxVQUFVLEtBQUs7QUFBQSxRQUM1QyxXQUFXLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxTQUFTLE9BQU8sR0FBRztBQUV6RCxjQUFJLFVBQVUsTUFBTSxTQUFTLGNBQWM7QUFDekMsb0JBQVEsSUFBSSxpREFBaUQ7QUFDN0Q7QUFBQSxVQUNGO0FBRUEsY0FBSSxZQUFZO0FBQ2Qsb0JBQVEsSUFBSSxzQkFBc0IsWUFBWSwwQkFBMEI7QUFDeEU7QUFBQSxVQUNGO0FBRUEsYUFBRyxhQUFhLFNBQVMsUUFBUTtBQUNqQyxrQkFBUSxJQUFJLHVCQUF1QixZQUFZLEVBQUU7QUFBQSxRQUNuRDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFJQSxzQkFBa0IsV0FBVyxTQUFTLElBQUk7QUFBQSxFQUM1QztBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLEdBQUcsdUJBQXVCLENBQUM7QUFBQSxFQUM3RCxXQUFXO0FBQUE7QUFBQSxFQUNYLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLGdCQUFnQixDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxVQUN6RCxtQkFBbUIsQ0FBQyx1QkFBdUI7QUFBQSxRQUM3QztBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUU3QixnQkFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFDckMsZ0JBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQ2hDLGNBQUksa0NBQWtDLEtBQUssR0FBRyxHQUFHO0FBQy9DLG1CQUFPO0FBQUEsVUFDVCxXQUFXLGFBQWEsS0FBSyxHQUFHLEdBQUc7QUFDakMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
