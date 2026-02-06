import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');

// Load cities data
const citiesPath = path.join(__dirname, 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

// Generate routes from cities data
const routes = cities.map(city => ({
  path: `/locations/${city.parent}/service-area/${city.slug}/`,
  title: `${city.city} Roofing Services | All Phase Construction USA`,
  description: `Professional roofing services in ${city.city}, FL. Licensed, insured roofing contractor specializing in repairs, replacements, and inspections.`,
  canonical: `https://allphaseconstructionfl.com/locations/${city.parent}/service-area/${city.slug}`
}));

function injectMetaTags(html, metadata) {
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${metadata.title}</title>`
  );

  // Replace or inject meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${metadata.description}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${metadata.description}" />\n  </head>`
    );
  }

  // Replace or inject canonical
  const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/;
  if (html.match(canonicalRegex)) {
    html = html.replace(
      canonicalRegex,
      `<link rel="canonical" href="${metadata.canonical}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${metadata.canonical}" />\n  </head>`
    );
  }

  // Replace or inject Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metadata.title },
    { property: 'og:description', content: metadata.description },
    { property: 'og:url', content: metadata.canonical }
  ];

  ogTags.forEach(tag => {
    const pattern = new RegExp(`<meta\\s+property="${tag.property}"\\s+content="[^"]*"\\s*\/?>`, 'g');
    if (html.match(pattern)) {
      html = html.replace(pattern, `<meta property="${tag.property}" content="${tag.content}" />`);
    } else {
      html = html.replace(
        '</head>',
        `  <meta property="${tag.property}" content="${tag.content}" />\n  </head>`
      );
    }
  });

  // Replace or inject Twitter Card tags
  const twitterTags = [
    { name: 'twitter:title', content: metadata.title },
    { name: 'twitter:description', content: metadata.description }
  ];

  twitterTags.forEach(tag => {
    const pattern = new RegExp(`<meta\\s+name="${tag.name}"\\s+content="[^"]*"\\s*\/?>`, 'g');
    if (html.match(pattern)) {
      html = html.replace(pattern, `<meta name="${tag.name}" content="${tag.content}" />`);
    } else {
      html = html.replace(
        '</head>',
        `  <meta name="${tag.name}" content="${tag.content}" />\n  </head>`
      );
    }
  });

  return html;
}

async function prerenderStaticPages() {
  console.log('\n🔧 Starting static HTML prerendering...\n');

  // Read the base index.html
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  console.log('✓ Read base index.html');

  // Generate static HTML for each route
  routes.forEach(route => {
    const routePath = route.path.replace(/^\//, '').replace(/\/$/, '');
    const targetDir = path.join(distDir, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    fs.mkdirSync(targetDir, { recursive: true });

    // Inject metadata
    const htmlWithMeta = injectMetaTags(baseHtml, route);

    // Write file
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✓ Generated: ${routePath}/index.html`);
    console.log(`  Title: ${route.title}`);
  });

  console.log('\n✅ Static prerendering complete!\n');
}

prerenderStaticPages().catch(err => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
