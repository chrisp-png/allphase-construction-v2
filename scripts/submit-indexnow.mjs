#!/usr/bin/env node

/**
 * IndexNow Submission Script
 * Submits URLs to Bing and other IndexNow-compatible search engines
 * Run: node scripts/submit-indexnow.mjs [url1] [url2] ...
 * Or: node scripts/submit-indexnow.mjs --all (submits all URLs from sitemap)
 */

import https from 'https';
import { sheetSitemap } from '../src/data/sheetSitemap.ts';

const INDEXNOW_KEY = '8f9a2b3c4d5e6f7a8b9c0d1e2f3a4b5c';
const HOST = 'allphaseconstructionfl.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submit URLs to IndexNow API
 */
async function submitToIndexNow(urls) {
  // IndexNow supports max 10,000 URLs per request, but let's batch in groups of 100
  const batchSize = 100;
  const batches = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  console.log(`\nSubmitting ${urls.length} URLs in ${batches.length} batch(es)...\n`);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    };

    try {
      await submitBatch(payload, i + 1, batches.length);
      // Rate limit: wait 1 second between batches
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`❌ Batch ${i + 1} failed:`, error.message);
    }
  }
}

/**
 * Submit a single batch to IndexNow
 */
function submitBatch(payload, batchNum, totalBatches) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);

    const options = {
      hostname: 'api.indexnow.org',
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ Batch ${batchNum}/${totalBatches}: ${payload.urlList.length} URLs submitted successfully`);
          resolve();
        } else if (res.statusCode === 202) {
          console.log(`✅ Batch ${batchNum}/${totalBatches}: ${payload.urlList.length} URLs accepted (202)`);
          resolve();
        } else {
          console.error(`⚠️  Batch ${batchNum}/${totalBatches}: Unexpected status ${res.statusCode}`);
          console.error(`Response: ${responseData}`);
          reject(new Error(`Status ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

/**
 * Get all URLs from sitemap
 */
function getAllUrls() {
  const indexableEntries = sheetSitemap.filter((entry) =>
    entry.indexed !== false && entry.status !== 'Gone (410)'
  );

  return indexableEntries.map(entry => `https://${HOST}${entry.path}`);
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  let urls = [];

  if (args.length === 0 || (args.length === 1 && args[0] === '--all')) {
    // Submit all URLs from sitemap
    urls = getAllUrls();
    console.log(`📋 Submitting all ${urls.length} URLs from sitemap to IndexNow...`);
  } else {
    // Submit specific URLs provided as arguments
    urls = args.map(url => {
      // If just a path is provided, make it a full URL
      if (url.startsWith('/')) {
        return `https://${HOST}${url}`;
      }
      return url;
    });
    console.log(`📋 Submitting ${urls.length} specific URL(s) to IndexNow...`);
  }

  if (urls.length === 0) {
    console.error('❌ No URLs to submit');
    process.exit(1);
  }

  await submitToIndexNow(urls);

  console.log('\n✨ IndexNow submission complete!');
  console.log('Note: IndexNow notifies Bing, Yandex, and other participating search engines.');
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
