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
    const seoFiles = ["robots.txt", "sitemap.xml", "sitemap.html", "_headers"];
    seoFiles.forEach((file) => {
      const src = path.resolve(publicDir, file);
      if (fs.existsSync(src)) {
        const dest = path.resolve(distDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} from public to dist`);
      }
    });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgYXN5bmNDc3NQbHVnaW4gfSBmcm9tICcuL3ZpdGUtcGx1Z2luLWFzeW5jLWNzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFBsdWdpbiB0byBoYW5kbGUgcHVibGljIGRpcmVjdG9yeSB3aXRoIGNvcnJ1cHRlZCBmaWxlc1xuY29uc3QgbWFudWFsUHVibGljQ29weVBsdWdpbiA9ICgpID0+ICh7XG4gIG5hbWU6ICdtYW51YWwtcHVibGljLWNvcHknLFxuICBjbG9zZUJ1bmRsZSgpIHtcbiAgICBjb25zdCB2YWxpZEZpbGVzID0gW1xuICAgICAgJ2xvbmctdGVybS1waWVjZS1vZi1taW5kLWFsbC1waGFzZS1jb25zdHJ1Y3Rpb24tdXNhLnBuZycsXG4gICAgICAndGVhci1vZmYtcmVzcG9uc2libGUtZGlzcG9zYWwtYWxsLXBoYXNlLWNvbnN0cnVjdGlvbi11c2EuanBnJ1xuICAgIF07XG5cbiAgICBjb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKCdkaXN0Jyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzcGVjaWZpYyBmaWxlcyBmcm9tIHB1YmxpY19iYWNrdXBcbiAgICB2YWxpZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUoJ3B1YmxpY19iYWNrdXAnLCBmaWxlKTtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUoJ2Rpc3QnLCBmaWxlKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNyYykpIHtcbiAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyYywgZGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSB0byBkaXN0YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGFsbCBpbWFnZXMgYW5kIFNWRyBmcm9tIHB1YmxpYyBmb2xkZXIgZm9yIGJsb2cgcG9zdHNcbiAgICBjb25zdCBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoJ3B1YmxpYycpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGlmICgvXFwuKGpwZ3xqcGVnfHBuZ3x3ZWJwfGdpZnxzdmcpJC9pLnRlc3QoZmlsZSkpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBwYXRoLnJlc29sdmUocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb3BpZWQgJHtmaWxlfSBmcm9tIHB1YmxpYyB0byBkaXN0YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgU0VPIGZpbGVzIChyb2JvdHMudHh0LCBzaXRlbWFwLnhtbCwgc2l0ZW1hcC5odG1sLCBhbmQgX2hlYWRlcnMpXG4gICAgY29uc3Qgc2VvRmlsZXMgPSBbJ3JvYm90cy50eHQnLCAnc2l0ZW1hcC54bWwnLCAnc2l0ZW1hcC5odG1sJywgJ19oZWFkZXJzJ107XG4gICAgc2VvRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGNvbnN0IHNyYyA9IHBhdGgucmVzb2x2ZShwdWJsaWNEaXIsIGZpbGUpO1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoc3JjKSkge1xuICAgICAgICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKGRpc3REaXIsIGZpbGUpO1xuICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coYENvcGllZCAke2ZpbGV9IGZyb20gcHVibGljIHRvIGRpc3RgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgYXN5bmNDc3NQbHVnaW4oKSwgbWFudWFsUHVibGljQ29weVBsdWdpbigpXSxcbiAgcHVibGljRGlyOiBmYWxzZSwgLy8gRGlzYWJsZSBhdXRvbWF0aWMgcHVibGljIGNvcHkgZHVlIHRvIGNvcnJ1cHRlZCBmaWxlXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICdzdXBhYmFzZS12ZW5kb3InOiBbJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyddLFxuICAgICAgICB9LFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIC8vIE9yZ2FuaXplIGFzc2V0cyBieSB0eXBlIGZvciBiZXR0ZXIgY2FjaGluZ1xuICAgICAgICAgIGNvbnN0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGluZm9baW5mby5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvaW1hZ2VzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL3dvZmZ8d29mZjIvLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvZm9udHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tYXN5bmMtY3NzLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4sIEluZGV4SHRtbFRyYW5zZm9ybVJlc3VsdCB9IGZyb20gJ3ZpdGUnO1xuXG4vKipcbiAqIFZpdGUgcGx1Z2luIHRvIGxvYWQgQ1NTIGFzeW5jaHJvbm91c2x5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAqIEFkZHMgbWVkaWE9XCJwcmludFwiIHRyaWNrIHRvIGRlZmVyIENTUyBsb2FkaW5nIHdpdGhvdXQgYmxvY2tpbmcgcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3luY0Nzc1BsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1hc3luYy1jc3MnLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWw6IHtcbiAgICAgIG9yZGVyOiAncG9zdCcsXG4gICAgICBoYW5kbGVyKGh0bWwpOiBJbmRleEh0bWxUcmFuc2Zvcm1SZXN1bHQge1xuICAgICAgICAvLyBUcmFuc2Zvcm0gc3R5bGVzaGVldCBsaW5rcyB0byBsb2FkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gaHRtbC5yZXBsYWNlKFxuICAgICAgICAgIC88bGlua1xccytyZWw9XCJzdHlsZXNoZWV0XCIoW14+XSo/KT4vZ2ksXG4gICAgICAgICAgKG1hdGNoLCBhdHRycykgPT4ge1xuICAgICAgICAgICAgLy8gRXh0cmFjdCBocmVmIGZvciBwcmVsb2FkXG4gICAgICAgICAgICBjb25zdCBocmVmTWF0Y2ggPSBhdHRycy5tYXRjaCgvaHJlZj1cIihbXlwiXSspXCIvKTtcbiAgICAgICAgICAgIGlmICghaHJlZk1hdGNoKSByZXR1cm4gbWF0Y2g7XG5cbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBocmVmTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBjcm9zc29yaWdpbiA9IGF0dHJzLmluY2x1ZGVzKCdjcm9zc29yaWdpbicpID8gJyBjcm9zc29yaWdpbicgOiAnJztcblxuICAgICAgICAgICAgLy8gQWRkIHByZWxvYWQgYmVmb3JlIHRoZSByZWd1bGFyIGxpbmssIHRoZW4gYXN5bmMgbG9hZCB0aGUgc3R5bGVzaGVldFxuICAgICAgICAgICAgcmV0dXJuIGA8bGluayByZWw9XCJwcmVsb2FkXCIgYXM9XCJzdHlsZVwiIGhyZWY9XCIke2hyZWZ9XCIke2Nyb3Nzb3JpZ2lufT5gICtcbiAgICAgICAgICAgICAgICAgICBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiJHthdHRyc30gbWVkaWE9XCJwcmludFwiIG9ubG9hZD1cInRoaXMubWVkaWE9J2FsbCc7dGhpcy5vbmxvYWQ9bnVsbDtcIj5gICtcbiAgICAgICAgICAgICAgICAgICBgPG5vc2NyaXB0PjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiR7YXR0cnN9Pjwvbm9zY3JpcHQ+YDtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXOzs7QUNLWCxTQUFTLGlCQUF5QjtBQUN2QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxvQkFBb0I7QUFBQSxNQUNsQixPQUFPO0FBQUEsTUFDUCxRQUFRLE1BQWdDO0FBRXRDLGNBQU0sY0FBYyxLQUFLO0FBQUEsVUFDdkI7QUFBQSxVQUNBLENBQUMsT0FBTyxVQUFVO0FBRWhCLGtCQUFNLFlBQVksTUFBTSxNQUFNLGdCQUFnQjtBQUM5QyxnQkFBSSxDQUFDLFVBQVcsUUFBTztBQUV2QixrQkFBTSxPQUFPLFVBQVUsQ0FBQztBQUN4QixrQkFBTSxjQUFjLE1BQU0sU0FBUyxhQUFhLElBQUksaUJBQWlCO0FBR3JFLG1CQUFPLHdDQUF3QyxJQUFJLElBQUksV0FBVywwQkFDbEMsS0FBSyw4RkFDSyxLQUFLO0FBQUEsVUFD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
