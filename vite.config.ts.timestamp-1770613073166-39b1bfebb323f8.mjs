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
        if (entry.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyHtmlRecursive(srcPath, destPath, false);
        } else if (entry.isFile() && entry.name.endsWith(".html")) {
          if (isRoot && entry.name === "index.html") {
            console.log(`Skipped root index.html (preserving Vite build)`);
            return;
          }
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied prerendered: ${path.relative(publicDir, srcPath)}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgYXN5bmNDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWFzeW5jLWNzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFBsdWdpbiB0byBoYW5kbGUgcHVibGljIGRpcmVjdG9yeSB3aXRoIGNvcnJ1cHRlZCBmaWxlc1xuY29uc3QgbWFudWFsUHVibGljQ29weVBsdWdpbiA9ICgpID0+ICh7XG4gIG5hbWU6ICdtYW51YWwtcHVibGljLWNvcHknLFxuICBjbG9zZUJ1bmRsZSgpIHtcbiAgICBjb25zdCB2YWxpZEZpbGVzID0gW1xuICAgICAgJ2xvbmctdGVybS1waWVjZS1vZi1taW5kLWFsbC1waGFzZS1jb25zdHJ1Y3Rpb24tdXNhLnBuZycsXG4gICAgICAndGVhci1vZmYtcmVzcG9uc2libGUtZGlzcG9zYWwtYWxsLXBoYXNlLWNvbnN0cnVjdGlvbi11c2EuanBnJ1xuICAgIF07XG5cbiAgICBjb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKCdkaXN0Jyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzcGVjaWZpYyBmaWxlcyBmcm9tIHB1YmxpY19iYWNrdXBcbiAgICB2YWxpZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoJ3B1YmxpY19iYWNrdXAnLCBmaWxlKTtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoJ2Rpc3QnLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGFsbCBpbWFnZXMgYW5kIFNWRyBmcm9tIHB1YmxpYyBmb2xkZXIgZm9yIGJsb2cgcG9zdHNcbiAgICBjb25zdCBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoJ3B1YmxpYycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGlmICgvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGdpZnxzdmcpJC9pLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgU0VPIGZpbGVzIChyb2JvdHMudHh0LCBzaXRlbWFwLnhtbCwgc2l0ZW1hcC5odG1sLCBfaGVhZGVycywgYW5kIF9yZWRpcmVjdHMpXG4gICAgY29uc3Qgc2VvRmlsZXMgPSBbJ3JvYm90cy50eHQnLCAnc2l0ZW1hcC54bWwnLCAnc2l0ZW1hcC5odG1sJywgJ19oZWFkZXJzJywgJ19yZWRpcmVjdHMnXTtcbiAgICBzZW9GaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gcGF0aC5yZXNvbHZlKHB1YmxpY0RpciwgZmlsZSk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmMpKSB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoZGlzdERpciwgZmlsZSk7XG4gICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29waWVkICR7ZmlsZX0gZnJvbSBwdWJsaWMgdG8gZGlzdGApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29weSBhbGwgSFRNTCBmaWxlcyBmcm9tIHB1YmxpYy8gc3ViZGlyZWN0b3JpZXMgKHByZXJlbmRlcmVkIHBhZ2VzKVxuICAgIC8vIElNUE9SVEFOVDogU2tpcCByb290IGluZGV4Lmh0bWwgdG8gcHJlc2VydmUgVml0ZSdzIHByb2Nlc3NlZCB2ZXJzaW9uIHdpdGggYnVuZGxlZCBhc3NldHNcbiAgICBjb25zdCBjb3B5SHRtbFJlY3Vyc2l2ZSA9IChzcmNEaXIsIGRlc3REaXIsIGlzUm9vdCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc3JjRGlyKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBlbnRyaWVzID0gZnMucmVhZGRpclN5bmMoc3JjRGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBjb25zdCBzcmNQYXRoID0gcGF0aC5qb2luKHNyY0RpciwgZW50cnkubmFtZSk7XG4gICAgICAgIGNvbnN0IGRlc3RQYXRoID0gcGF0aC5qb2luKGRlc3REaXIsIGVudHJ5Lm5hbWUpO1xuXG4gICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgLy8gUmVjdXJzaXZlbHkgY29weSBkaXJlY3RvcnlcbiAgICAgICAgICBmcy5ta2RpclN5bmMoZGVzdFBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgIGNvcHlIdG1sUmVjdXJzaXZlKHNyY1BhdGgsIGRlc3RQYXRoLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaXNGaWxlKCkgJiYgZW50cnkubmFtZS5lbmRzV2l0aCgnLmh0bWwnKSkge1xuICAgICAgICAgIC8vIFNraXAgcm9vdCBpbmRleC5odG1sIHRvIHByZXNlcnZlIFZpdGUncyBidWlsdCB2ZXJzaW9uIHdpdGggcHJvcGVyIGFzc2V0IGxpbmtzXG4gICAgICAgICAgaWYgKGlzUm9vdCAmJiBlbnRyeS5uYW1lID09PSAnaW5kZXguaHRtbCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTa2lwcGVkIHJvb3QgaW5kZXguaHRtbCAocHJlc2VydmluZyBWaXRlIGJ1aWxkKWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb3B5IEhUTUwgZmlsZXMgZnJvbSBzdWJkaXJlY3Rvcmllc1xuICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmNQYXRoLCBkZXN0UGF0aCk7XG4gICAgICAgICAgY29uc29sZS5sb2coYENvcGllZCBwcmVyZW5kZXJlZDogJHtwYXRoLnJlbGF0aXZlKHB1YmxpY0Rpciwgc3JjUGF0aCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBDb3B5IGFsbCBwcmVyZW5kZXJlZCBIVE1MIHBhZ2VzIGZyb20gcHVibGljLyBzdWJkaXJlY3Rvcmllc1xuICAgIC8vIFBhc3MgaXNSb290PXRydWUgdG8gc2tpcCBjb3B5aW5nIHJvb3QgaW5kZXguaHRtbFxuICAgIGNvcHlIdG1sUmVjdXJzaXZlKHB1YmxpY0RpciwgZGlzdERpciwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGFzeW5jQ3NzUGx1Z2luKCksIG1hbnVhbFB1YmxpY0NvcHlQbHVnaW4oKV0sXG4gIHB1YmxpY0RpcjogZmFsc2UsIC8vIERpc2FibGUgYXV0b21hdGljIHB1YmxpYyBjb3B5IGR1ZSB0byBjb3JydXB0ZWQgZmlsZVxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAnc3VwYWJhc2UtdmVuZG9yJzogWydAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXSxcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAvLyBPcmdhbml6ZSBhc3NldHMgYnkgdHlwZSBmb3IgYmV0dGVyIGNhY2hpbmdcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKC93b2ZmfHdvZmYyLy50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ZvbnRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUtcGx1Z2luLWFzeW5jLWNzcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUtcGx1Z2luLWFzeW5jLWNzcy50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luLCBJbmRleEh0bWxUcmFuc2Zvcm1SZXN1bHQgfSBmcm9tICd2aXRlJztcblxuLyoqXG4gKiBWaXRlIHBsdWdpbiB0byBsb2FkIENTUyBhc3luY2hyb25vdXNseSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gKiBBZGRzIG1lZGlhPVwicHJpbnRcIiB0cmljayB0byBkZWZlciBDU1MgbG9hZGluZyB3aXRob3V0IGJsb2NraW5nIHJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNDc3NQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tYXN5bmMtY3NzJyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7XG4gICAgICBvcmRlcjogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcihodG1sKTogSW5kZXhIdG1sVHJhbnNmb3JtUmVzdWx0IHtcbiAgICAgICAgLy8gVHJhbnNmb3JtIHN0eWxlc2hlZXQgbGlua3MgdG8gbG9hZCBhc3luY2hyb25vdXNseVxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZCA9IGh0bWwucmVwbGFjZShcbiAgICAgICAgICAvPGxpbmtcXHMrcmVsPVwic3R5bGVzaGVldFwiKFtePl0qPyk+L2dpLFxuICAgICAgICAgIChtYXRjaCwgYXR0cnMpID0+IHtcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgaHJlZiBmb3IgcHJlbG9hZFxuICAgICAgICAgICAgY29uc3QgaHJlZk1hdGNoID0gYXR0cnMubWF0Y2goL2hyZWY9XCIoW15cIl0rKVwiLyk7XG4gICAgICAgICAgICBpZiAoIWhyZWZNYXRjaCkgcmV0dXJuIG1hdGNoO1xuXG4gICAgICAgICAgICBjb25zdCBocmVmID0gaHJlZk1hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgY3Jvc3NvcmlnaW4gPSBhdHRycy5pbmNsdWRlcygnY3Jvc3NvcmlnaW4nKSA/ICcgY3Jvc3NvcmlnaW4nIDogJyc7XG5cbiAgICAgICAgICAgIC8vIEFkZCBwcmVsb2FkIGJlZm9yZSB0aGUgcmVndWxhciBsaW5rLCB0aGVuIGFzeW5jIGxvYWQgdGhlIHN0eWxlc2hlZXRcbiAgICAgICAgICAgIHJldHVybiBgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGFzPVwic3R5bGVcIiBocmVmPVwiJHtocmVmfVwiJHtjcm9zc29yaWdpbn0+YCArXG4gICAgICAgICAgICAgICAgICAgYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiR7YXR0cnN9IG1lZGlhPVwicHJpbnRcIiBvbmxvYWQ9XCJ0aGlzLm1lZGlhPSdhbGwnO3RoaXMub25sb2FkPW51bGw7XCI+YCArXG4gICAgICAgICAgICAgICAgICAgYDxub3NjcmlwdD48bGluayByZWw9XCJzdHlsZXNoZWV0XCIke2F0dHJzfT48L25vc2NyaXB0PmA7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lZDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVzs7O0FDS1gsU0FBUyxpQkFBeUI7QUFDdkMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1Qsb0JBQW9CO0FBQUEsTUFDbEIsT0FBTztBQUFBLE1BQ1AsUUFBUSxNQUFnQztBQUV0QyxjQUFNLGNBQWMsS0FBSztBQUFBLFVBQ3ZCO0FBQUEsVUFDQSxDQUFDLE9BQU8sVUFBVTtBQUVoQixrQkFBTSxZQUFZLE1BQU0sTUFBTSxnQkFBZ0I7QUFDOUMsZ0JBQUksQ0FBQyxVQUFXLFFBQU87QUFFdkIsa0JBQU0sT0FBTyxVQUFVLENBQUM7QUFDeEIsa0JBQU0sY0FBYyxNQUFNLFNBQVMsYUFBYSxJQUFJLGlCQUFpQjtBQUdyRSxtQkFBTyx3Q0FBd0MsSUFBSSxJQUFJLFdBQVcsMEJBQ2xDLEtBQUssOEZBQ0ssS0FBSztBQUFBLFVBQ2pEO0FBQUEsUUFDRjtBQUVBLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FEaENBLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUdqQixJQUFNLHlCQUF5QixPQUFPO0FBQUEsRUFDcEMsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUNaLFVBQU0sYUFBYTtBQUFBLE1BQ2pCO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQVUsS0FBSyxRQUFRLE1BQU07QUFDbkMsUUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLEdBQUc7QUFDM0IsU0FBRyxVQUFVLFNBQVMsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLElBQzNDO0FBR0EsZUFBVyxRQUFRLFVBQVE7QUFDekIsWUFBTSxNQUFNLEtBQUssUUFBUSxpQkFBaUIsSUFBSTtBQUM5QyxZQUFNLE9BQU8sS0FBSyxRQUFRLFFBQVEsSUFBSTtBQUN0QyxVQUFJLEdBQUcsV0FBVyxHQUFHLEdBQUc7QUFDdEIsV0FBRyxhQUFhLEtBQUssSUFBSTtBQUN6QixnQkFBUSxJQUFJLFVBQVUsSUFBSSxVQUFVO0FBQUEsTUFDdEM7QUFBQSxJQUNGLENBQUM7QUFHRCxVQUFNLFlBQVksS0FBSyxRQUFRLFFBQVE7QUFDdkMsUUFBSSxHQUFHLFdBQVcsU0FBUyxHQUFHO0FBQzVCLFlBQU0sUUFBUSxHQUFHLFlBQVksU0FBUztBQUN0QyxZQUFNLFFBQVEsVUFBUTtBQUNwQixZQUFJLGtDQUFrQyxLQUFLLElBQUksR0FBRztBQUNoRCxnQkFBTSxNQUFNLEtBQUssUUFBUSxXQUFXLElBQUk7QUFDeEMsZ0JBQU0sT0FBTyxLQUFLLFFBQVEsU0FBUyxJQUFJO0FBQ3ZDLGFBQUcsYUFBYSxLQUFLLElBQUk7QUFDekIsa0JBQVEsSUFBSSxVQUFVLElBQUksc0JBQXNCO0FBQUEsUUFDbEQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBR0EsVUFBTSxXQUFXLENBQUMsY0FBYyxlQUFlLGdCQUFnQixZQUFZLFlBQVk7QUFDdkYsYUFBUyxRQUFRLFVBQVE7QUFDdkIsWUFBTSxNQUFNLEtBQUssUUFBUSxXQUFXLElBQUk7QUFDeEMsVUFBSSxHQUFHLFdBQVcsR0FBRyxHQUFHO0FBQ3RCLGNBQU0sT0FBTyxLQUFLLFFBQVEsU0FBUyxJQUFJO0FBQ3ZDLFdBQUcsYUFBYSxLQUFLLElBQUk7QUFDekIsZ0JBQVEsSUFBSSxVQUFVLElBQUksc0JBQXNCO0FBQUEsTUFDbEQ7QUFBQSxJQUNGLENBQUM7QUFJRCxVQUFNLG9CQUFvQixDQUFDLFFBQVEsU0FBUyxTQUFTLFVBQVU7QUFDN0QsVUFBSSxDQUFDLEdBQUcsV0FBVyxNQUFNLEVBQUc7QUFFNUIsWUFBTSxVQUFVLEdBQUcsWUFBWSxRQUFRLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFDOUQsY0FBUSxRQUFRLFdBQVM7QUFDdkIsY0FBTSxVQUFVLEtBQUssS0FBSyxRQUFRLE1BQU0sSUFBSTtBQUM1QyxjQUFNLFdBQVcsS0FBSyxLQUFLLFNBQVMsTUFBTSxJQUFJO0FBRTlDLFlBQUksTUFBTSxZQUFZLEdBQUc7QUFFdkIsYUFBRyxVQUFVLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUMxQyw0QkFBa0IsU0FBUyxVQUFVLEtBQUs7QUFBQSxRQUM1QyxXQUFXLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxTQUFTLE9BQU8sR0FBRztBQUV6RCxjQUFJLFVBQVUsTUFBTSxTQUFTLGNBQWM7QUFDekMsb0JBQVEsSUFBSSxpREFBaUQ7QUFDN0Q7QUFBQSxVQUNGO0FBRUEsYUFBRyxhQUFhLFNBQVMsUUFBUTtBQUNqQyxrQkFBUSxJQUFJLHVCQUF1QixLQUFLLFNBQVMsV0FBVyxPQUFPLENBQUMsRUFBRTtBQUFBLFFBQ3hFO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUlBLHNCQUFrQixXQUFXLFNBQVMsSUFBSTtBQUFBLEVBQzVDO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztBQUFBLEVBQzdELFdBQVc7QUFBQTtBQUFBLEVBQ1gsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osZ0JBQWdCLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLFVBQ3pELG1CQUFtQixDQUFDLHVCQUF1QjtBQUFBLFFBQzdDO0FBQUEsUUFDQSxnQkFBZ0IsQ0FBQyxjQUFjO0FBRTdCLGdCQUFNLE9BQU8sVUFBVSxLQUFLLE1BQU0sR0FBRztBQUNyQyxnQkFBTSxNQUFNLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDaEMsY0FBSSxrQ0FBa0MsS0FBSyxHQUFHLEdBQUc7QUFDL0MsbUJBQU87QUFBQSxVQUNULFdBQVcsYUFBYSxLQUFLLEdBQUcsR0FBRztBQUNqQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
