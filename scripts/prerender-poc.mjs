import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

console.log("🔥 PRERENDER SCRIPT STARTED");
console.log("ENV NETLIFY =", process.env.NETLIFY);
console.log("ENV CI =", process.env.CI);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const LIVE_ORIGIN = "https://allphaseconstructionfl.com";

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

console.log("✅ Reading base index.html");
const baseHtml = fs.readFileSync(indexPath, "utf8");

// Route configuration
const ROUTES = [
  {
    path: "/locations/deerfield-beach/service-area/boca-raton/",
    title: "Roof Inspection in Boca Raton for Repairs & Replacement | All Phase",
    description: "Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.",
  },
  {
    path: "/locations/deerfield-beach/service-area/boynton-beach/",
    title: "Roof Inspection in Boynton Beach for Repairs & Replacement | All Phase",
    description: "Get a professional roof inspection in Boynton Beach to determine repair needs, replacement options, and insurance documentation before you decide.",
  },
];

function injectSEO(html, route) {
  const { title, description, path } = route;
  const canonical = `${LIVE_ORIGIN}${path}`;
  const url = canonical;

  // Add marker comment at the very top
  let result = `<!-- PRERENDERED STATIC SEO FILE - DO NOT REMOVE -->\n${html}`;

  // Replace <title>
  result = result.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace or insert description meta tag
  if (result.includes('<meta name="description"')) {
    result = result.replace(
      /<meta name="description"[^>]*>/i,
      `<meta name="description" content="${description}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta name="description" content="${description}">\n</head>`
    );
  }

  // Replace or insert canonical
  if (result.includes('rel="canonical"')) {
    result = result.replace(
      /<link rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonical}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}">\n</head>`
    );
  }

  // Replace or insert og:title
  if (result.includes('property="og:title"')) {
    result = result.replace(
      /<meta property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${title}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta property="og:title" content="${title}">\n</head>`
    );
  }

  // Replace or insert og:description
  if (result.includes('property="og:description"')) {
    result = result.replace(
      /<meta property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${description}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta property="og:description" content="${description}">\n</head>`
    );
  }

  // Replace or insert og:url
  if (result.includes('property="og:url"')) {
    result = result.replace(
      /<meta property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${url}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta property="og:url" content="${url}">\n</head>`
    );
  }

  // Replace or insert twitter:title
  if (result.includes('name="twitter:title"')) {
    result = result.replace(
      /<meta name="twitter:title"[^>]*>/i,
      `<meta name="twitter:title" content="${title}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta name="twitter:title" content="${title}">\n</head>`
    );
  }

  // Replace or insert twitter:description
  if (result.includes('name="twitter:description"')) {
    result = result.replace(
      /<meta name="twitter:description"[^>]*>/i,
      `<meta name="twitter:description" content="${description}">`
    );
  } else {
    result = result.replace(
      "</head>",
      `  <meta name="twitter:description" content="${description}">\n</head>`
    );
  }

  return result;
}

console.log("🚀 Injecting static SEO metadata...");

for (const route of ROUTES) {
  console.log("Processing:", route.path);

  const html = injectSEO(baseHtml, route);

  // Remove trailing slash for path creation
  const routePath = route.path.replace(/\/$/, "");
  const outDir = path.join(distDir, routePath);

  fs.mkdirSync(outDir, { recursive: true });

  const outputPath = path.join(outDir, "index.html");
  fs.writeFileSync(outputPath, html, "utf8");

  console.log("✅ Generated:", route.path);
  console.log("📄 WROTE FILE:", outputPath);

  // List directory contents
  const dirContents = fs.readdirSync(outDir);
  console.log("📁 FILES IN DIR:", outDir);
  console.log("   Contents:", dirContents);
}

console.log("\n✅ Static SEO injection complete.");
console.log("🎉 PRERENDER SCRIPT FINISHED");
