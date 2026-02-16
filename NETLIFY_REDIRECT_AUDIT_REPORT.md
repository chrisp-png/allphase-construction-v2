# Netlify Redirect Configuration Audit

## Executive Summary
Configuration exists in **TWO locations** with the primary rules in `netlify.toml` and a fallback in `public/_redirects`. A rule for `/locations/*/service-area/*` already exists but uses generic `:splat` syntax instead of named parameters.

---

## 1. PRIMARY SOURCE: netlify.toml

**Location:** `/tmp/cc-agent/61908077/project/netlify.toml`

### Redirect Rules (in order of priority):

#### Line 102-105: Deerfield Beach Service Area Redirect
```toml
[[redirects]]
from = "/locations/deerfield-beach/service-area/*"
to = "/locations/:splat"
status = 301
force = true
```

#### Line 108-111: Roofing Services Legacy Redirect
```toml
[[redirects]]
from = "/roofing-services/*"
to = "/roof-repair/:splat"
status = 301
force = true
```

#### Line 114-117: Generic Service Area Redirect
```toml
[[redirects]]
from = "/service-area/*"
to = "/locations/:splat"
status = 301
force = true
```

#### Line 120-123: **BROAD LOCATION SERVICE AREA REDIRECT** ⚠️
```toml
[[redirects]]
from = "/locations/*/service-area/*"
to = "/locations/:splat"
status = 301
force = true
```
**This is the rule you want to replace/improve!**

Current behavior:
- `/locations/deerfield-beach/service-area/boca-raton` → `/locations/boca-raton` ✓
- Uses generic `:splat` which captures the LAST wildcard segment
- Works correctly but is not self-documenting

#### Line 126-129: Deerfield Beach Legacy URL
```toml
[[redirects]]
from = "/roofing-contractor-deerfield-beach-fl"
to = "/locations/deerfield-beach"
status = 301
force = true
```

#### Line 133-136: Deerfield Beach Static HTML Serve
```toml
[[redirects]]
from = "/locations/deerfield-beach"
to = "/locations/deerfield-beach/index.html"
status = 200
```

#### Line 140-143: All Location Pages Static HTML Serve
```toml
[[redirects]]
from = "/locations/*"
to = "/locations/:splat/index.html"
status = 200
```

#### Line 146-148: **SPA CATCH-ALL** (LOWEST PRIORITY)
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```
**This is the catch-all that must be overridden by specific rules above it.**

---

## 2. SECONDARY SOURCE: public/_redirects

**Location:** `/tmp/cc-agent/61908077/project/public/_redirects`

### Rules:
```
/roofing-contractor-deerfield-beach-fl  /locations/deerfield-beach  301!

/*    /index.html   200
```

**Note:** This file is COPIED to `dist/_redirects` during build (see vite.config.ts line 51).

---

## 3. Build Process

**vite.config.ts** (Lines 50-59):
```typescript
// Copy SEO files (robots.txt, sitemap.xml, sitemap.html, _headers, and _redirects)
const seoFiles = ['robots.txt', 'sitemap.xml', 'sitemap.html', '_headers', '_redirects'];
seoFiles.forEach(file => {
  const src = path.resolve(publicDir, file);
  if (fs.existsSync(src)) {
    const dest = path.resolve(distDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} from public to dist`);
  }
});
```

The `_redirects` file is copied from `public/` to `dist/` during build.

---

## 4. Findings

### SPA Catch-All Location
- **File:** `netlify.toml` (line 146-148) and `public/_redirects` (line 3)
- **Rule:** `/* → /index.html` (status 200)
- **Priority:** LAST (lowest priority, can be overridden by rules above it)

### Existing Service Area Rules
Three rules handle service area redirects:

1. **Specific:** `/locations/deerfield-beach/service-area/*` (line 102)
2. **Generic:** `/service-area/*` (line 114)
3. **Broad Location Pattern:** `/locations/*/service-area/*` (line 120) ⚠️

### The Rule in Question (Line 120-123)
```toml
from = "/locations/*/service-area/*"
to = "/locations/:splat"
status = 301
force = true
```

**Current Behavior:**
- Redirects: `/locations/{parent}/service-area/{city}` → `/locations/{city}`
- Uses `:splat` to capture the last wildcard segment (the city)
- **Functionally correct but syntactically unclear**

**Proposed Improvement:**
```toml
from = "/locations/:parent/service-area/:city"
to = "/locations/:city"
status = 301
force = true
```

**Benefits:**
- Self-documenting: clearly shows what each segment represents
- Same functionality but more maintainable
- Explicit named parameters vs implicit splat capture

---

## 5. Netlify Redirect Processing Order

Netlify processes redirects in **file order**:

1. Rules in `netlify.toml` [[redirects]] sections are processed FIRST (top to bottom)
2. Rules in `_redirects` file are processed AFTER netlify.toml
3. Catch-all rules (like `/*`) should always be LAST

**Current Order is CORRECT:**
✅ Specific redirects (301) come first  
✅ Static HTML serving (200) comes next  
✅ SPA catch-all (200) comes last  

---

## 6. Recommendation

### Option A: Update Existing Rule (SAFEST)
**Replace line 120-123 in netlify.toml** with named parameters:

```toml
[[redirects]]
from = "/locations/:parent/service-area/:city"
to = "/locations/:city"
status = 301
force = true
```

**Why this is safest:**
- Same position in redirect order (line 120)
- Same priority relative to other rules
- Clearer, more maintainable syntax
- No risk of conflicts

### Option B: Keep Both (NOT RECOMMENDED)
Adding a new rule while keeping the old one creates redundancy and confusion.

### Option C: Add to _redirects File (NOT RECOMMENDED)
The `_redirects` file is processed AFTER `netlify.toml`, so the existing rule in netlify.toml would match first anyway.

---

## 7. Where to Make the Change

**RECOMMENDED LOCATION:**
- **File:** `netlify.toml`
- **Line:** 120-123 (replace existing rule)
- **Priority:** Perfect position - after specific redirects, before static serves

**DO NOT:**
- Add to `public/_redirects` (would be redundant)
- Place after the SPA catch-all (would never match)
- Add as a new rule (creates duplication)

---

## 8. Implementation Plan (When Ready)

1. Open `netlify.toml`
2. Navigate to line 120-123
3. Replace the existing rule with the named parameter version
4. Test locally with `netlify dev` (if available)
5. Deploy and verify redirect behavior

**Test URLs:**
- `/locations/deerfield-beach/service-area/boca-raton` → should 301 to `/locations/boca-raton`
- `/locations/fort-lauderdale/service-area/coral-springs` → should 301 to `/locations/coral-springs`

---

## Summary

✅ Configuration exists in `netlify.toml` (primary) and `public/_redirects` (fallback)  
✅ SPA catch-all at lowest priority (correct)  
✅ A rule for `/locations/*/service-area/*` already exists (line 120)  
⚠️ Existing rule uses generic `:splat` instead of named parameters  
🎯 **Recommendation:** Replace line 120-123 in `netlify.toml` with named parameter syntax  
