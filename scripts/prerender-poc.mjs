import fs from "fs";
import path from "path";
import http from "http";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

console.log("🔥 PRERENDER SCRIPT STARTED");
console.log("ENV NETLIFY =", process.env.NETLIFY);
console.log("ENV CI =", process.env.CI);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const LIVE_ORIGIN = "https://allphaseconstructionfl.com";
const ROUTES = [
  "/locations/deerfield-beach/service-area/boca-raton",
  "/locations/deerfield-beach/service-area/boynton-beach",
];

const isNetlify = process.env.NETLIFY === "true" || process.env.CI === "true";
if (!isNetlify) {
  console.log("Skipping prerender: not running in Netlify CI.");
  process.exit(0);
}

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run build first.");
  process.exit(1);
}

function serveFromDist(req, res) {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = path.join(distDir, urlPath);
  if (urlPath.endsWith("/")) filePath = path.join(filePath, "index.html");
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = indexPath; // SPA fallback
  }
  const data = fs.readFileSync(filePath);
  const type = filePath.endsWith(".js")
    ? "text/javascript"
    : filePath.endsWith(".css")
      ? "text/css"
      : "text/html; charset=utf-8";
  res.writeHead(200, { "Content-Type": type });
  res.end(data);
}

const server = http.createServer(serveFromDist);
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

let browser;
try {
  console.log("🚀 Launching Puppeteer...");
  browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  console.log("✅ Puppeteer launched");
} catch (err) {
  console.error("❌ Puppeteer failed to launch");
  console.error(err);
  process.exit(1);
}
const page = await browser.newPage();
page.setDefaultNavigationTimeout(120000);

for (const route of ROUTES) {
  const url = base + route;
  console.log("Prerendering:", route);
  await page.goto(url, { waitUntil: "networkidle0" });
  console.log("✅ Page loaded:", route);
  await page.waitForTimeout(300);

  let html = await page.content();

  const canonical = `${LIVE_ORIGIN}${route}`;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}"/>\n</head>`
    );
  }

  const outDir = path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

await browser.close();
server.close();

console.log("Prerender POC complete.");
console.log("🎉 PRERENDER SCRIPT FINISHED");
