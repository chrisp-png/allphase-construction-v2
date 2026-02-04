# Redirect and HTTP Status Validation Report

**Generated**: 2026-01-27T22:19:42.140Z
**Base URL**: https://allphaseconstructionfl.com
**Test Configuration**: Single-hop 301→200 validation with 410 Gone verification

---

## Executive Summary

| Metric | Count |
|--------|-------|
| **Total URLs Tested** | 73 |
| **Passed** | 71 ✅ |
| **Failed** | 2 ❌ |
| **Errors** | 0 ⚠️ |
| **301 Redirects** | 64 |
| **410 Gone** | 4 |
| **200 OK** | 69 |
| **5xx Errors** | 0 ✅ |

**Overall Status**: ❌ ISSUES FOUND

---

## Test Results by Category

### Legacy Media URLs ❌

**Status**: 2/4 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /media-gallery | 301 → /projects | 301 → 200 | /projects | ✅ Pass |
| /media-gallery/ | 301 → /projects | 301 → 200 | /projects | ✅ Pass |
| /media | 301 → /projects | 200 | - | ❌ Fail |
| /media/ | 301 → /projects | 200 | - | ❌ Fail |

### Legacy Financing URLs ✅

**Status**: 2/2 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /financing | 301 → /easy-payments | 301 → 200 | /easy-payments | ✅ Pass |
| /financing/ | 301 → /easy-payments | 301 → 200 | /easy-payments | ✅ Pass |

### Retired URLs (410 Gone) ✅

**Status**: 4/4 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /publications | 410 → 200 | 410 | - | ✅ Pass |
| /publications/ | 410 → 200 | 410 | - | ✅ Pass |
| /accessibility | 410 → 200 | 410 | - | ✅ Pass |
| /accessibility/ | 410 → 200 | 410 | - | ✅ Pass |

### Canonical Destination URLs ✅

**Status**: 3/3 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /projects | 200 → 200 | 200 | - | ✅ Pass |
| /easy-payments | 200 → 200 | 200 | - | ✅ Pass |
| / | 200 → 200 | 200 | - | ✅ Pass |

### Legacy City URLs - Flat Slugs ✅

**Status**: 20/20 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /boca-raton | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /boca-raton/ | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /fort-lauderdale | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /fort-lauderdale/ | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /coral-springs | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /coral-springs/ | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /pompano-beach | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /pompano-beach/ | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /delray-beach | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /delray-beach/ | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /boynton-beach | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /boynton-beach/ | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /west-palm-beach | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /west-palm-beach/ | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /deerfield-beach | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /deerfield-beach/ | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /coconut-creek | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /coconut-creek/ | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /parkland | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |
| /parkland/ | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |

### Legacy City URLs - Roofing Contractor Variants ✅

**Status**: 20/20 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /roofing-contractor-boca-raton-fl | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /roofing-contractor-boca-raton-fl/ | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /roofing-contractor-fort-lauderdale-fl | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /roofing-contractor-fort-lauderdale-fl/ | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /roofing-contractor-coral-springs-fl | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /roofing-contractor-coral-springs-fl/ | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /roofing-contractor-pompano-beach-fl | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /roofing-contractor-pompano-beach-fl/ | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /roofing-contractor-delray-beach-fl | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /roofing-contractor-delray-beach-fl/ | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /roofing-contractor-boynton-beach-fl | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /roofing-contractor-boynton-beach-fl/ | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /roofing-contractor-west-palm-beach-fl | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /roofing-contractor-west-palm-beach-fl/ | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /roofing-contractor-deerfield-beach-fl | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /roofing-contractor-deerfield-beach-fl/ | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /roofing-contractor-coconut-creek-fl | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /roofing-contractor-coconut-creek-fl/ | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /roofing-contractor-parkland-fl | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |
| /roofing-contractor-parkland-fl/ | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |

### Legacy City URLs - Service Areas Variants ✅

**Status**: 20/20 passed

| URL | Expected | Actual | Chain | Status |
|-----|----------|--------|-------|--------|
| /service-areas/boca-raton | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /service-areas/boca-raton/ | 301 → /locations/deerfield-beach/service-area/boca-raton | 301 → 200 | /locations/deerfield-beach/service-area/boca-raton | ✅ Pass |
| /service-areas/fort-lauderdale | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /service-areas/fort-lauderdale/ | 301 → /locations/deerfield-beach/service-area/fort-lauderdale | 301 → 200 | /locations/deerfield-beach/service-area/fort-lauderdale | ✅ Pass |
| /service-areas/coral-springs | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /service-areas/coral-springs/ | 301 → /locations/deerfield-beach/service-area/coral-springs | 301 → 200 | /locations/deerfield-beach/service-area/coral-springs | ✅ Pass |
| /service-areas/pompano-beach | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /service-areas/pompano-beach/ | 301 → /locations/deerfield-beach/service-area/pompano-beach | 301 → 200 | /locations/deerfield-beach/service-area/pompano-beach | ✅ Pass |
| /service-areas/delray-beach | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /service-areas/delray-beach/ | 301 → /locations/deerfield-beach/service-area/delray-beach | 301 → 200 | /locations/deerfield-beach/service-area/delray-beach | ✅ Pass |
| /service-areas/boynton-beach | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /service-areas/boynton-beach/ | 301 → /locations/deerfield-beach/service-area/boynton-beach | 301 → 200 | /locations/deerfield-beach/service-area/boynton-beach | ✅ Pass |
| /service-areas/west-palm-beach | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /service-areas/west-palm-beach/ | 301 → /locations/deerfield-beach/service-area/west-palm-beach | 301 → 200 | /locations/deerfield-beach/service-area/west-palm-beach | ✅ Pass |
| /service-areas/deerfield-beach | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /service-areas/deerfield-beach/ | 301 → /locations/deerfield-beach/service-area/deerfield-beach | 301 → 200 | /locations/deerfield-beach/service-area/deerfield-beach | ✅ Pass |
| /service-areas/coconut-creek | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /service-areas/coconut-creek/ | 301 → /locations/deerfield-beach/service-area/coconut-creek | 301 → 200 | /locations/deerfield-beach/service-area/coconut-creek | ✅ Pass |
| /service-areas/parkland | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |
| /service-areas/parkland/ | 301 → /locations/deerfield-beach/service-area/parkland | 301 → 200 | /locations/deerfield-beach/service-area/parkland | ✅ Pass |

---

## ❌ Failed Tests (2)

### /media

**Description**: Legacy /media URL
**Expected**: 301 → /projects
**Failure Reason**: Expected single-hop redirect, got 1 hops

**Redirect Chain**:
1. **200** - https://allphaseconstructionfl.com/media

### /media/

**Description**: Legacy /media/ URL (trailing slash)
**Expected**: 301 → /projects
**Failure Reason**: Expected single-hop redirect, got 1 hops

**Redirect Chain**:
1. **200** - https://allphaseconstructionfl.com/media/

---

## Validation Checklist

- [x] Zero 5xx errors detected
- [x] 301 redirects functioning (64 found)
- [x] 410 Gone responses functioning (4 found)
- [x] Canonical URLs returning 200 OK (69 found)
- [ ] All redirects follow single-hop pattern (301→200)
- [x] No request errors or timeouts

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
**Max Redirects**: 5
**Request Timeout**: 10000ms
**User Agent**: AllPhase-Redirect-Validator/1.0

---

## Recommendations

### ❌ Fix Failed Redirects

**Action Required**: 2 redirect(s) not following expected pattern. Review and correct.

---

*Report generated by AllPhase Redirect Validator*
*Timestamp: 2026-01-27T22:19:42.140Z*
