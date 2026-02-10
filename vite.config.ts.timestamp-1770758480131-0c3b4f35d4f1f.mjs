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
          fs.copyFileSync(src, dest);
          console.log(`Copied ${file} from public to dist`);
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
    const copyHtmlRecursive = (srcDir, destDir, isRoot = false) => {
      if (!fs.existsSync(srcDir)) return;
      const entries = fs.readdirSync(srcDir, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);
        const relativePath = path.relative(publicDir, srcPath);
        const spaRoutePrefixes = ["locations/", "roof-repair/", "roof-inspection/"];
        const isSpaRoute = spaRoutePrefixes.some(
          (prefix) => relativePath.startsWith(prefix) || entry.name === "locations" || entry.name === "roof-repair" || entry.name === "roof-inspection"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgYXN5bmNDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWFzeW5jLWNzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFBsdWdpbiB0byBoYW5kbGUgcHVibGljIGRpcmVjdG9yeSB3aXRoIGNvcnJ1cHRlZCBmaWxlc1xuY29uc3QgbWFudWFsUHVibGljQ29weVBsdWdpbiA9ICgpID0+ICh7XG4gIG5hbWU6ICdtYW51YWwtcHVibGljLWNvcHknLFxuICBjbG9zZUJ1bmRsZSgpIHtcbiAgICBjb25zdCB2YWxpZEZpbGVzID0gW1xuICAgICAgJ2xvbmctdGVybS1waWVjZS1vZi1taW5kLWFsbC1waGFzZS1jb25zdHJ1Y3Rpb24tdXNhLnBuZycsXG4gICAgICAndGVhci1vZmYtcmVzcG9uc2libGUtZGlzcG9zYWwtYWxsLXBoYXNlLWNvbnN0cnVjdGlvbi11c2EuanBnJ1xuICAgIF07XG5cbiAgICBjb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKCdkaXN0Jyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzcGVjaWZpYyBmaWxlcyBmcm9tIHB1YmxpY19iYWNrdXBcbiAgICB2YWxpZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoJ3B1YmxpY19iYWNrdXAnLCBmaWxlKTtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoJ2Rpc3QnLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGFsbCBpbWFnZXMgYW5kIFNWRyBmcm9tIHB1YmxpYyBmb2xkZXIgZm9yIGJsb2cgcG9zdHNcbiAgICBjb25zdCBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoJ3B1YmxpYycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGlmICgvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGdpZnxzdmcpJC9pLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgU0VPIGZpbGVzIChyb2JvdHMudHh0LCBzaXRlbWFwLnhtbCwgc2l0ZW1hcC5odG1sLCBfaGVhZGVycywgYW5kIF9yZWRpcmVjdHMpXG4gICAgY29uc3Qgc2VvRmlsZXMgPSBbJ3JvYm90cy50eHQnLCAnc2l0ZW1hcC54bWwnLCAnc2l0ZW1hcC5odG1sJywgJ19oZWFkZXJzJywgJ19yZWRpcmVjdHMnXTtcbiAgICBzZW9GaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKHB1YmxpY0RpciwgZmlsZSk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmMpKSB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgZmlsZSk7XG4gICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29waWVkICR7ZmlsZX0gZnJvbSBwdWJsaWMgdG8gZGlzdGApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29weSBhbGwgSFRNTCBmaWxlcyBmcm9tIHB1YmxpYy8gc3ViZGlyZWN0b3JpZXMgKHByZXJlbmRlcmVkIHBhZ2VzKVxuICAgIC8vIElNUE9SVEFOVDogU2tpcCByb290IGluZGV4Lmh0bWwgdG8gcHJlc2VydmUgVml0ZSdzIHByb2Nlc3NlZCB2ZXJzaW9uIHdpdGggYnVuZGxlZCBhc3NldHNcbiAgICAvLyBDUklUSUNBTDogU2tpcCBTUEEgcm91dGVzIChsb2NhdGlvbnMvKiwgcm9vZi1yZXBhaXIvKiwgcm9vZi1pbnNwZWN0aW9uLyopXG4gICAgY29uc3QgY29weUh0bWxSZWN1cnNpdmUgPSAoc3JjRGlyLCBkZXN0RGlyLCBpc1Jvb3QgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHNyY0RpcikpIHJldHVybjtcblxuICAgICAgY29uc3QgZW50cmllcyA9IGZzLnJlYWRkaXJTeW5jKHNyY0RpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3Qgc3JjUGF0aCA9IHBhdGguam9pbihzcmNEaXIsIGVudHJ5Lm5hbWUpO1xuICAgICAgICBjb25zdCBkZXN0UGF0aCA9IHBhdGguam9pbihkZXN0RGlyLCBlbnRyeS5uYW1lKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5yZWxhdGl2ZShwdWJsaWNEaXIsIHNyY1BhdGgpO1xuXG4gICAgICAgIC8vIERFTllMSVNUOiBTa2lwIFNQQSByb3V0ZXMgdGhhdCBtdXN0IGJlIGhhbmRsZWQgYnkgUmVhY3RcbiAgICAgICAgY29uc3Qgc3BhUm91dGVQcmVmaXhlcyA9IFsnbG9jYXRpb25zLycsICdyb29mLXJlcGFpci8nLCAncm9vZi1pbnNwZWN0aW9uLyddO1xuICAgICAgICBjb25zdCBpc1NwYVJvdXRlID0gc3BhUm91dGVQcmVmaXhlcy5zb21lKHByZWZpeCA9PlxuICAgICAgICAgIHJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHByZWZpeCkgfHwgZW50cnkubmFtZSA9PT0gJ2xvY2F0aW9ucycgfHwgZW50cnkubmFtZSA9PT0gJ3Jvb2YtcmVwYWlyJyB8fCBlbnRyeS5uYW1lID09PSAncm9vZi1pbnNwZWN0aW9uJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgLy8gU2tpcCBjcmVhdGluZyBTUEEgcm91dGUgZGlyZWN0b3JpZXMgZW50aXJlbHlcbiAgICAgICAgICBpZiAoaXNSb290ICYmIGlzU3BhUm91dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTa2lwcGVkIFNQQSByb3V0ZSBkaXJlY3Rvcnk6ICR7ZW50cnkubmFtZX0vIChSZWFjdCBoYW5kbGVzIHJvdXRpbmcpYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvcHkgbm9uLVNQQSBkaXJlY3Rvcmllc1xuICAgICAgICAgIGZzLm1rZGlyU3luYyhkZXN0UGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgICAgY29weUh0bWxSZWN1cnNpdmUoc3JjUGF0aCwgZGVzdFBhdGgsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0ZpbGUoKSAmJiBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuaHRtbCcpKSB7XG4gICAgICAgICAgLy8gU2tpcCByb290IGluZGV4Lmh0bWwgdG8gcHJlc2VydmUgVml0ZSdzIGJ1aWx0IHZlcnNpb24gd2l0aCBwcm9wZXIgYXNzZXQgbGlua3NcbiAgICAgICAgICBpZiAoaXNSb290ICYmIGVudHJ5Lm5hbWUgPT09ICdpbmRleC5odG1sJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNraXBwZWQgcm9vdCBpbmRleC5odG1sIChwcmVzZXJ2aW5nIFZpdGUgYnVpbGQpYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNraXAgSFRNTCBmaWxlcyB3aXRoaW4gU1BBIHJvdXRlc1xuICAgICAgICAgIGlmIChpc1NwYVJvdXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2tpcHBlZCBTUEEgcm91dGU6ICR7cmVsYXRpdmVQYXRofSAoUmVhY3QgaGFuZGxlcyByb3V0aW5nKWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb3B5IHN0YXRpYyBzZXJ2aWNlIHBhZ2VzIG9ubHlcbiAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjUGF0aCwgZGVzdFBhdGgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgcHJlcmVuZGVyZWQ6ICR7cmVsYXRpdmVQYXRofWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ29weSBhbGwgcHJlcmVuZGVyZWQgSFRNTCBwYWdlcyBmcm9tIHB1YmxpYy8gc3ViZGlyZWN0b3JpZXNcbiAgICAvLyBQYXNzIGlzUm9vdD10cnVlIHRvIHNraXAgY29weWluZyByb290IGluZGV4Lmh0bWxcbiAgICBjb3B5SHRtbFJlY3Vyc2l2ZShwdWJsaWNEaXIsIGRpc3REaXIsIHRydWUpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBhc3luY0Nzc1BsdWdpbigpLCBtYW51YWxQdWJsaWNDb3B5UGx1Z2luKCldLFxuICBwdWJsaWNEaXI6IGZhbHNlLCAvLyBEaXNhYmxlIGF1dG9tYXRpYyBwdWJsaWMgY29weSBkdWUgdG8gY29ycnVwdGVkIGZpbGVcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBjc3NNaW5pZnk6IHRydWUsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgJ3N1cGFiYXNlLXZlbmRvcic6IFsnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ10sXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgLy8gT3JnYW5pemUgYXNzZXRzIGJ5IHR5cGUgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgICAgY29uc3QgaW5mbyA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgY29uc3QgZXh0ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmICgvcG5nfGpwZT9nfHN2Z3xnaWZ8dGlmZnxibXB8aWNvL2kudGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9pbWFnZXMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgICAgfSBlbHNlIGlmICgvd29mZnx3b2ZmMi8udGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9mb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLXBsdWdpbi1hc3luYy1jc3MudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiwgSW5kZXhIdG1sVHJhbnNmb3JtUmVzdWx0IH0gZnJvbSAndml0ZSc7XG5cbi8qKlxuICogVml0ZSBwbHVnaW4gdG8gbG9hZCBDU1MgYXN5bmNocm9ub3VzbHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICogQWRkcyBtZWRpYT1cInByaW50XCIgdHJpY2sgdG8gZGVmZXIgQ1NTIGxvYWRpbmcgd2l0aG91dCBibG9ja2luZyByZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQ3NzUGx1Z2luKCk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWFzeW5jLWNzcycsXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbDoge1xuICAgICAgb3JkZXI6ICdwb3N0JyxcbiAgICAgIGhhbmRsZXIoaHRtbCk6IEluZGV4SHRtbFRyYW5zZm9ybVJlc3VsdCB7XG4gICAgICAgIC8vIFRyYW5zZm9ybSBzdHlsZXNoZWV0IGxpbmtzIHRvIGxvYWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWQgPSBodG1sLnJlcGxhY2UoXG4gICAgICAgICAgLzxsaW5rXFxzK3JlbD1cInN0eWxlc2hlZXRcIihbXj5dKj8pPi9naSxcbiAgICAgICAgICAobWF0Y2gsIGF0dHJzKSA9PiB7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IGhyZWYgZm9yIHByZWxvYWRcbiAgICAgICAgICAgIGNvbnN0IGhyZWZNYXRjaCA9IGF0dHJzLm1hdGNoKC9ocmVmPVwiKFteXCJdKylcIi8pO1xuICAgICAgICAgICAgaWYgKCFocmVmTWF0Y2gpIHJldHVybiBtYXRjaDtcblxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGhyZWZNYXRjaFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gYXR0cnMuaW5jbHVkZXMoJ2Nyb3Nzb3JpZ2luJykgPyAnIGNyb3Nzb3JpZ2luJyA6ICcnO1xuXG4gICAgICAgICAgICAvLyBBZGQgcHJlbG9hZCBiZWZvcmUgdGhlIHJlZ3VsYXIgbGluaywgdGhlbiBhc3luYyBsb2FkIHRoZSBzdHlsZXNoZWV0XG4gICAgICAgICAgICByZXR1cm4gYDxsaW5rIHJlbD1cInByZWxvYWRcIiBhcz1cInN0eWxlXCIgaHJlZj1cIiR7aHJlZn1cIiR7Y3Jvc3NvcmlnaW59PmAgK1xuICAgICAgICAgICAgICAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIke2F0dHJzfSBtZWRpYT1cInByaW50XCIgb25sb2FkPVwidGhpcy5tZWRpYT0nYWxsJzt0aGlzLm9ubG9hZD1udWxsO1wiPmAgK1xuICAgICAgICAgICAgICAgICAgIGA8bm9zY3JpcHQ+PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiJHthdHRyc30+PC9ub3NjcmlwdD5gO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7OztBQ0tYLFNBQVMsaUJBQXlCO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULG9CQUFvQjtBQUFBLE1BQ2xCLE9BQU87QUFBQSxNQUNQLFFBQVEsTUFBZ0M7QUFFdEMsY0FBTSxjQUFjLEtBQUs7QUFBQSxVQUN2QjtBQUFBLFVBQ0EsQ0FBQyxPQUFPLFVBQVU7QUFFaEIsa0JBQU0sWUFBWSxNQUFNLE1BQU0sZ0JBQWdCO0FBQzlDLGdCQUFJLENBQUMsVUFBVyxRQUFPO0FBRXZCLGtCQUFNLE9BQU8sVUFBVSxDQUFDO0FBQ3hCLGtCQUFNLGNBQWMsTUFBTSxTQUFTLGFBQWEsSUFBSSxpQkFBaUI7QUFHckUsbUJBQU8sd0NBQXdDLElBQUksSUFBSSxXQUFXLDBCQUNsQyxLQUFLLDhGQUNLLEtBQUs7QUFBQSxVQUNqRDtBQUFBLFFBQ0Y7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRGhDQSxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFHakIsSUFBTSx5QkFBeUIsT0FBTztBQUFBLEVBQ3BDLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFDWixVQUFNLGFBQWE7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBRUEsVUFBTSxVQUFVLEtBQUssUUFBUSxNQUFNO0FBQ25DLFFBQUksQ0FBQyxHQUFHLFdBQVcsT0FBTyxHQUFHO0FBQzNCLFNBQUcsVUFBVSxTQUFTLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFBQSxJQUMzQztBQUdBLGVB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
