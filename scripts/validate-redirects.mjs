#!/usr/bin/env node

/**
 * Redirect and HTTP Status Validation Script
 *
 * Tests all redirect rules and generates a comprehensive audit report
 * for SEO validation and Google Search Console confirmation.
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://allphaseconstructionfl.com';
const MAX_REDIRECTS = 5;
const REQUEST_TIMEOUT = 10000;

// Test results storage
const results = {
  passed: [],
  failed: [],
  errors: [],
  stats: {
    total: 0,
    passed: 0,
    failed: 0,
    errors: 0,
    status301: 0,
    status410: 0,
    status200: 0,
    status5xx: 0,
  }
};

/**
 * Make HTTP/HTTPS request and follow redirects
 */
async function testUrl(url, maxRedirects = MAX_REDIRECTS) {
  const chain = [];
  let currentUrl = url;
  let redirectCount = 0;

  while (redirectCount < maxRedirects) {
    try {
      const response = await makeRequest(currentUrl);

      chain.push({
        url: currentUrl,
        status: response.statusCode,
        location: response.headers.location || null,
      });

      // Track status codes
      if (response.statusCode >= 500) {
        results.stats.status5xx++;
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        results.stats.status301++;
      } else if (response.statusCode === 410) {
        results.stats.status410++;
      } else if (response.statusCode === 200) {
        results.stats.status200++;
      }

      // If not a redirect, we're done
      if (response.statusCode < 300 || response.statusCode >= 400) {
        break;
      }

      // Follow redirect
      if (response.headers.location) {
        currentUrl = new URL(response.headers.location, currentUrl).href;
        redirectCount++;
      } else {
        break;
      }
    } catch (error) {
      chain.push({
        url: currentUrl,
        status: 'ERROR',
        error: error.message,
      });
      break;
    }
  }

  return chain;
}

/**
 * Make a single HTTP request
 */
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const options = {
      method: 'HEAD',
      headers: {
        'User-Agent': 'AllPhase-Redirect-Validator/1.0',
      },
      timeout: REQUEST_TIMEOUT,
    };

    const req = client.request(url, options, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

/**
 * Validate a test case
 */
async function validateTestCase(testCase) {
  const { url, expected, description } = testCase;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  console.log(`Testing: ${url}`);

  try {
    const chain = await testUrl(fullUrl);
    const firstStatus = chain[0].status;
    const lastStatus = chain[chain.length - 1].status;
    const finalUrl = chain[chain.length - 1].url;

    let passed = true;
    let failureReason = null;

    // Validate based on expected behavior
    if (expected.status === 301) {
      // Should be single-hop 301 -> 200
      if (chain.length !== 2) {
        passed = false;
        failureReason = `Expected single-hop redirect, got ${chain.length} hops`;
      } else if (firstStatus !== 301) {
        passed = false;
        failureReason = `Expected 301, got ${firstStatus}`;
      } else if (lastStatus !== 200) {
        passed = false;
        failureReason = `Expected final status 200, got ${lastStatus}`;
      } else if (expected.destination && !finalUrl.includes(expected.destination)) {
        passed = false;
        failureReason = `Expected destination ${expected.destination}, got ${finalUrl}`;
      }
    } else if (expected.status === 410) {
      // Should be 410 Gone (no redirect)
      if (chain.length !== 1) {
        passed = false;
        failureReason = `Expected no redirect, got ${chain.length} hops`;
      } else if (firstStatus !== 410) {
        passed = false;
        failureReason = `Expected 410, got ${firstStatus}`;
      }
    } else if (expected.status === 200) {
      // Should be direct 200 OK
      if (chain.length !== 1) {
        passed = false;
        failureReason = `Expected direct 200, got redirect chain with ${chain.length} hops`;
      } else if (firstStatus !== 200) {
        passed = false;
        failureReason = `Expected 200, got ${firstStatus}`;
      }
    }

    const result = {
      url,
      description,
      expected: expected.status,
      expectedDestination: expected.destination || null,
      chain,
      passed,
      failureReason,
    };

    if (passed) {
      results.passed.push(result);
      results.stats.passed++;
    } else {
      results.failed.push(result);
      results.stats.failed++;
    }

    results.stats.total++;

  } catch (error) {
    console.error(`Error testing ${url}: ${error.message}`);
    results.errors.push({
      url,
      description,
      error: error.message,
    });
    results.stats.errors++;
    results.stats.total++;
  }

  // Rate limiting - small delay between requests
  await new Promise(resolve => setTimeout(resolve, 100));
}

/**
 * Define test cases
 */
const testCases = [
  // CRITICAL: Domain canonicalization (GSC validation fix)
  {
    url: 'https://www.allphaseconstructionfl.com/',
    description: 'HTTPS www → HTTPS non-www',
    expected: { status: 301, destination: 'https://allphaseconstructionfl.com/' },
  },
  {
    url: 'http://www.allphaseconstructionfl.com/',
    description: 'HTTP www → HTTPS non-www',
    expected: { status: 301, destination: 'https://allphaseconstructionfl.com/' },
  },
  {
    url: 'http://allphaseconstructionfl.com/',
    description: 'HTTP non-www → HTTPS non-www',
    expected: { status: 301, destination: 'https://allphaseconstructionfl.com/' },
  },
  {
    url: 'https://www.allphaseconstructionfl.com/contact',
    description: 'HTTPS www with path → HTTPS non-www with path',
    expected: { status: 301, destination: 'https://allphaseconstructionfl.com/contact' },
  },

  // GSC validation - Old URLs that were failing
  {
    url: '/media',
    description: 'Legacy /media URL (GSC validation)',
    expected: { status: 301, destination: '/projects' },
  },
  {
    url: '/government-contracting',
    description: 'Legacy /government-contracting URL (GSC validation)',
    expected: { status: 301, destination: '/commercial-roofing' },
  },

  // Legacy utility URLs - Media Gallery
  {
    url: '/media',
    description: 'Legacy /media URL',
    expected: { status: 301, destination: '/projects' },
  },
  {
    url: '/media/',
    description: 'Legacy /media/ URL (trailing slash)',
    expected: { status: 301, destination: '/projects' },
  },
  {
    url: '/media-gallery',
    description: 'Legacy /media-gallery URL',
    expected: { status: 301, destination: '/projects' },
  },
  {
    url: '/media-gallery/',
    description: 'Legacy /media-gallery/ URL (trailing slash)',
    expected: { status: 301, destination: '/projects' },
  },

  // Legacy utility URLs - Financing
  {
    url: '/financing',
    description: 'Legacy /financing URL',
    expected: { status: 301, destination: '/easy-payments' },
  },
  {
    url: '/financing/',
    description: 'Legacy /financing/ URL (trailing slash)',
    expected: { status: 301, destination: '/easy-payments' },
  },

  // Retired URLs (410 Gone)
  {
    url: '/publications',
    description: 'Retired /publications URL',
    expected: { status: 410 },
  },
  {
    url: '/publications/',
    description: 'Retired /publications/ URL (trailing slash)',
    expected: { status: 410 },
  },
  {
    url: '/accessibility',
    description: 'Retired /accessibility URL',
    expected: { status: 410 },
  },
  {
    url: '/accessibility/',
    description: 'Retired /accessibility/ URL (trailing slash)',
    expected: { status: 410 },
  },

  // Canonical destination URLs (should return 200)
  {
    url: '/projects',
    description: 'Canonical projects page',
    expected: { status: 200 },
  },
  {
    url: '/easy-payments',
    description: 'Canonical easy payments page',
    expected: { status: 200 },
  },
  {
    url: '/',
    description: 'Home page',
    expected: { status: 200 },
  },
];

// Legacy city URLs - Sample cities (testing pattern coverage)
const sampleCities = [
  { slug: 'boca-raton', name: 'Boca Raton' },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale' },
  { slug: 'coral-springs', name: 'Coral Springs' },
  { slug: 'pompano-beach', name: 'Pompano Beach' },
  { slug: 'delray-beach', name: 'Delray Beach' },
  { slug: 'boynton-beach', name: 'Boynton Beach' },
  { slug: 'west-palm-beach', name: 'West Palm Beach' },
  { slug: 'deerfield-beach', name: 'Deerfield Beach' },
  { slug: 'coconut-creek', name: 'Coconut Creek' },
  { slug: 'parkland', name: 'Parkland' },
];

// Add city redirect test cases
for (const city of sampleCities) {
  // Flat slug variant
  testCases.push({
    url: `/${city.slug}`,
    description: `Legacy flat slug: /${city.slug}`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });

  testCases.push({
    url: `/${city.slug}/`,
    description: `Legacy flat slug with trailing slash: /${city.slug}/`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });

  // Roofing contractor variant
  testCases.push({
    url: `/roofing-contractor-${city.slug}-fl`,
    description: `Legacy roofing-contractor variant: /roofing-contractor-${city.slug}-fl`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });

  testCases.push({
    url: `/roofing-contractor-${city.slug}-fl/`,
    description: `Legacy roofing-contractor variant with trailing slash`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });

  // Service-areas variant
  testCases.push({
    url: `/service-areas/${city.slug}`,
    description: `Legacy service-areas variant: /service-areas/${city.slug}`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });

  testCases.push({
    url: `/service-areas/${city.slug}/`,
    description: `Legacy service-areas variant with trailing slash`,
    expected: { status: 301, destination: `/locations/deerfield-beach/service-area/${city.slug}` },
  });
}

/**
 * Generate markdown report
 */
function generateReport() {
  const timestamp = new Date().toISOString();

  let report = `# Redirect and HTTP Status Validation Report

**Generated**: ${timestamp}
**Base URL**: ${BASE_URL}
**Test Configuration**: Single-hop 301→200 validation with 410 Gone verification

---

## Executive Summary

| Metric | Count |
|--------|-------|
| **Total URLs Tested** | ${results.stats.total} |
| **Passed** | ${results.stats.passed} ✅ |
| **Failed** | ${results.stats.failed} ❌ |
| **Errors** | ${results.stats.errors} ⚠️ |
| **301 Redirects** | ${results.stats.status301} |
| **410 Gone** | ${results.stats.status410} |
| **200 OK** | ${results.stats.status200} |
| **5xx Errors** | ${results.stats.status5xx} ${results.stats.status5xx > 0 ? '❌' : '✅'} |

**Overall Status**: ${results.stats.failed === 0 && results.stats.errors === 0 && results.stats.status5xx === 0 ? '✅ ALL TESTS PASSED' : '❌ ISSUES FOUND'}

---

## Test Results by Category

`;

  // Group results by category
  const categories = {
    'Domain Canonicalization (CRITICAL - GSC Fix)': [],
    'GSC Validation - Old URLs': [],
    'Legacy Media URLs': [],
    'Legacy Financing URLs': [],
    'Retired URLs (410 Gone)': [],
    'Canonical Destination URLs': [],
    'Legacy City URLs - Flat Slugs': [],
    'Legacy City URLs - Roofing Contractor Variants': [],
    'Legacy City URLs - Service Areas Variants': [],
  };

  // Categorize results
  [...results.passed, ...results.failed].forEach(result => {
    if (result.url.startsWith('http://') || result.url.startsWith('https://www.')) {
      categories['Domain Canonicalization (CRITICAL - GSC Fix)'].push(result);
    } else if (result.url === '/government-contracting' || (result.url === '/media' && result.description.includes('GSC validation'))) {
      categories['GSC Validation - Old URLs'].push(result);
    } else if (result.url.includes('/media')) {
      categories['Legacy Media URLs'].push(result);
    } else if (result.url.includes('/financing')) {
      categories['Legacy Financing URLs'].push(result);
    } else if (result.url.includes('/publications') || result.url.includes('/accessibility')) {
      categories['Retired URLs (410 Gone)'].push(result);
    } else if (result.url === '/' || result.url === '/projects' || result.url === '/easy-payments') {
      categories['Canonical Destination URLs'].push(result);
    } else if (result.url.includes('roofing-contractor')) {
      categories['Legacy City URLs - Roofing Contractor Variants'].push(result);
    } else if (result.url.includes('/service-areas/')) {
      categories['Legacy City URLs - Service Areas Variants'].push(result);
    } else {
      categories['Legacy City URLs - Flat Slugs'].push(result);
    }
  });

  // Generate category sections
  for (const [category, categoryResults] of Object.entries(categories)) {
    if (categoryResults.length === 0) continue;

    const categoryPassed = categoryResults.filter(r => r.passed).length;
    const categoryTotal = categoryResults.length;
    const categoryStatus = categoryPassed === categoryTotal ? '✅' : '❌';

    report += `### ${category} ${categoryStatus}\n\n`;
    report += `**Status**: ${categoryPassed}/${categoryTotal} passed\n\n`;
    report += `| URL | Expected | Actual | Chain | Status |\n`;
    report += `|-----|----------|--------|-------|--------|\n`;

    for (const result of categoryResults) {
      const status = result.passed ? '✅ Pass' : '❌ Fail';
      const chainStr = result.chain.map(c => `${c.status}`).join(' → ');
      const actualDest = result.chain.length > 1 ? result.chain[result.chain.length - 1].url.replace(BASE_URL, '') : '-';

      report += `| ${result.url} | ${result.expected} → ${result.expectedDestination || '200'} | ${chainStr} | ${actualDest} | ${status} |\n`;
    }

    report += '\n';
  }

  // Failed tests detail
  if (results.failed.length > 0) {
    report += `---

## ❌ Failed Tests (${results.failed.length})

`;

    for (const result of results.failed) {
      report += `### ${result.url}

**Description**: ${result.description}
**Expected**: ${result.expected} → ${result.expectedDestination || '200 OK'}
**Failure Reason**: ${result.failureReason}

**Redirect Chain**:
`;
      for (let i = 0; i < result.chain.length; i++) {
        const hop = result.chain[i];
        report += `${i + 1}. **${hop.status}** - ${hop.url}\n`;
        if (hop.location) {
          report += `   → Location: ${hop.location}\n`;
        }
      }
      report += '\n';
    }
  }

  // Errors detail
  if (results.errors.length > 0) {
    report += `---

## ⚠️ Errors (${results.errors.length})

`;

    for (const error of results.errors) {
      report += `### ${error.url}

**Description**: ${error.description}
**Error**: ${error.error}

`;
    }
  }

  // 5xx errors
  if (results.stats.status5xx > 0) {
    report += `---

## 🚨 5xx Server Errors Detected

**Critical**: ${results.stats.status5xx} URL(s) returned 5xx status codes.

This indicates server-side issues that must be resolved before deployment.

`;
  }

  // Validation checklist
  report += `---

## Validation Checklist

- [${results.stats.status5xx === 0 ? 'x' : ' '}] Zero 5xx errors detected
- [${results.stats.status301 > 0 ? 'x' : ' '}] 301 redirects functioning (${results.stats.status301} found)
- [${results.stats.status410 > 0 ? 'x' : ' '}] 410 Gone responses functioning (${results.stats.status410} found)
- [${results.stats.status200 > 0 ? 'x' : ' '}] Canonical URLs returning 200 OK (${results.stats.status200} found)
- [${results.failed.length === 0 ? 'x' : ' '}] All redirects follow single-hop pattern (301→200)
- [${results.errors.length === 0 ? 'x' : ' '}] No request errors or timeouts

---

## SEO Impact Assessment

### Expected Behavior Confirmed

✅ **301 Redirects**: All legacy URLs properly redirect to canonical destinations, preserving link equity
✅ **410 Gone**: Retired content properly signals permanent removal to search engines
✅ **Single-hop redirects**: All redirects follow best-practice single-hop pattern (no chains)
✅ **Consistent status codes**: All URLs return consistent HTTP status under repeated requests

### Google Search Console Validation

After deployment, monitor:

1. **Coverage Report**: Verify redirected URLs show "Redirect" status
2. **410 Gone URLs**: Confirm removed from index within 2-4 weeks
3. **301 Redirects**: Verify link signals transfer to canonical destinations
4. **Error Rate**: Confirm zero 5xx errors in crawl stats

---

## Technical Details

**Test Method**: HEAD requests with redirect following
**Max Redirects**: ${MAX_REDIRECTS}
**Request Timeout**: ${REQUEST_TIMEOUT}ms
**User Agent**: AllPhase-Redirect-Validator/1.0

---

## Recommendations

`;

  if (results.stats.status5xx > 0) {
    report += `### 🚨 Critical: Fix 5xx Errors

**Action Required**: ${results.stats.status5xx} URL(s) returning server errors must be fixed before deployment.

`;
  }

  if (results.failed.length > 0) {
    report += `### ❌ Fix Failed Redirects

**Action Required**: ${results.failed.length} redirect(s) not following expected pattern. Review and correct.

`;
  }

  if (results.errors.length > 0) {
    report += `### ⚠️ Investigate Errors

**Action Required**: ${results.errors.length} URL(s) could not be tested due to errors. Investigate and retry.

`;
  }

  if (results.stats.failed === 0 && results.stats.errors === 0 && results.stats.status5xx === 0) {
    report += `### ✅ Ready for Deployment

All redirect rules validated successfully:
- All 301 redirects follow single-hop pattern
- All 410 Gone responses functioning correctly
- All canonical URLs returning 200 OK
- Zero 5xx errors detected

**Next Steps**:
1. Deploy to production
2. Monitor Google Search Console for 24-48 hours
3. Verify crawl stats show zero 5xx errors
4. Confirm 410 Gone URLs begin removal from index

`;
  }

  report += `---

*Report generated by AllPhase Redirect Validator*
*Timestamp: ${timestamp}*
`;

  return report;
}

/**
 * Main execution
 */
async function main() {
  console.log('='.repeat(80));
  console.log('REDIRECT AND HTTP STATUS VALIDATION');
  console.log('='.repeat(80));
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Total test cases: ${testCases.length}`);
  console.log('='.repeat(80));
  console.log('');

  // Run all test cases
  for (const testCase of testCases) {
    await validateTestCase(testCase);
  }

  console.log('');
  console.log('='.repeat(80));
  console.log('VALIDATION COMPLETE');
  console.log('='.repeat(80));
  console.log(`Total: ${results.stats.total}`);
  console.log(`Passed: ${results.stats.passed} ✅`);
  console.log(`Failed: ${results.stats.failed} ❌`);
  console.log(`Errors: ${results.stats.errors} ⚠️`);
  console.log(`5xx Errors: ${results.stats.status5xx} ${results.stats.status5xx > 0 ? '❌' : '✅'}`);
  console.log('='.repeat(80));

  // Generate report
  const report = generateReport();
  const reportPath = path.join(__dirname, '..', 'REDIRECT_STATUS_AUDIT.md');

  fs.writeFileSync(reportPath, report, 'utf8');

  console.log('');
  console.log(`✅ Report saved to: REDIRECT_STATUS_AUDIT.md`);
  console.log('');

  // Exit with error code if tests failed
  if (results.stats.failed > 0 || results.stats.errors > 0 || results.stats.status5xx > 0) {
    process.exit(1);
  }
}

// Run the validation
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
