import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");

console.log("=== PRERENDER DIAGNOSTIC ===");
console.log("Step 1: Script started");

// Check dist exists
if (!fs.existsSync(dist)) {
  console.log("❌ FAIL: dist/ directory does not exist");
  console.log("   → vite build did NOT complete successfully");
  process.exit(1);
}
console.log("✅ PASS: dist/ directory exists");

// Check dist/index.html exists
const indexPath = path.join(dist, "index.html");
if (!fs.existsSync(indexPath)) {
  console.log("❌ FAIL: dist/index.html does not exist");
  console.log("   → vite build incomplete");
  process.exit(1);
}
console.log("✅ PASS: dist/index.html exists");

// Check dist/assets exists
const assetsPath = path.join(dist, "assets");
if (!fs.existsSync(assetsPath)) {
  console.log("❌ FAIL: dist/assets/ directory does not exist");
  console.log("   → vite build incomplete");
  process.exit(1);
}
console.log("✅ PASS: dist/assets/ directory exists");

console.log("\nStep 2: Testing Puppeteer availability");

try {
  // Try to import puppeteer
  const puppeteerModule = await import("puppeteer");
  console.log("✅ PASS: Puppeteer module imported successfully");

  // Check if we can get the executable path
  console.log("\nStep 3: Testing Puppeteer browser availability");

  // This will hang if Puppeteer tries to download browser
  console.log("Attempting to launch browser (5 second timeout)...");

  const launchPromise = puppeteerModule.default.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    timeout: 5000
  });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("TIMEOUT: Browser launch took >5 seconds")), 5000);
  });

  try {
    const browser = await Promise.race([launchPromise, timeoutPromise]);
    console.log("✅ PASS: Browser launched successfully");
    await browser.close();
    console.log("✅ PASS: Browser closed successfully");
  } catch (err) {
    if (err.message.includes("TIMEOUT")) {
      console.log("❌ FAIL: Browser launch TIMEOUT");
      console.log("   → Puppeteer is hanging during browser launch");
      console.log("   → Likely cause: Browser download or sandbox issues");
      process.exit(1);
    }
    throw err;
  }

} catch (err) {
  console.log("❌ FAIL: Puppeteer error");
  console.log("   Error:", err.message);

  if (err.message.includes("Cannot find module")) {
    console.log("   → Puppeteer not installed");
    console.log("   → Run: npm install --save-dev puppeteer");
  } else if (err.message.includes("Could not find Chrome")) {
    console.log("   → Chrome browser not found");
    console.log("   → Puppeteer may need to download browser");
  } else if (err.message.includes("TIMEOUT")) {
    console.log("   → Browser launch is hanging");
  } else {
    console.log("   → Unknown Puppeteer issue");
  }

  process.exit(1);
}

console.log("\nStep 4: Testing HTTP server");

try {
  const http = await import("http");

  const server = http.default.createServer((req, res) => {
    res.writeHead(200);
    res.end("OK");
  });

  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  console.log(`✅ PASS: HTTP server started on port ${port}`);

  server.close();
  console.log("✅ PASS: HTTP server closed");

} catch (err) {
  console.log("❌ FAIL: HTTP server error");
  console.log("   Error:", err.message);
  process.exit(1);
}

console.log("\n=== DIAGNOSTIC COMPLETE ===");
console.log("All checks passed!");
console.log("\nConclusion: Build environment is ready for prerendering");
console.log("Next step: Run full prerender script");
