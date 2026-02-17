# Canonical Race Condition Diagnosis

## Problem Found

You have **TWO components** managing canonical URLs, and they're creating a race condition:

### Component 1: NuclearMetadata (Line 244 in App.tsx)
```tsx
<NuclearMetadata />
```

**What it does:**
- Uses `generateSEOMetadata(path)` from `seoTitles.ts`
- Has explicit entries for `/contact`, `/about-us`, `/blog`, etc.
- Sets canonical to the proper URL from the configuration
- Runs in a `useEffect` hook that triggers on `location.pathname` change

### Component 2: CanonicalManager (Line 260 in App.tsx)
```tsx
<CanonicalManager />
```

**What it does:**
- **OVERWRITES** the canonical with simple logic: `origin + pathname`
- Does NOT use the seoTitles configuration
- Also runs in a `useEffect` hook on `location.pathname` change
- **Renders AFTER NuclearMetadata in the component tree**

## The Race Condition

Both components have `useEffect` hooks that depend on `location.pathname`:

```typescript
// NuclearMetadata.tsx line 186
useEffect(() => {
  // ... sets canonical from seoTitles
}, [location.pathname]);

// CanonicalManager.tsx line 54
useEffect(() => {
  // ... overwrites canonical with simple logic
}, [location.pathname]); // This runs AFTER NuclearMetadata
```

React's useEffect execution order is not guaranteed across different components, BUT since CanonicalManager is rendered later in the tree (line 260 vs line 244), its useEffect is likely running after NuclearMetadata's useEffect and **overwriting** the correct canonical.

## Example Flow for /contact

1. User navigates to `/contact`
2. `location.pathname` changes to `/contact`
3. **NuclearMetadata useEffect fires:**
   - Calls `generateSEOMetadata('/contact')`
   - Finds `/contact` in SEO_TITLES
   - Sets canonical to `https://allphaseconstructionfl.com/contact` ✅
4. **CanonicalManager useEffect fires (milliseconds later):**
   - Checks `pathname === "/" ? ... : origin + pathname`
   - Sets canonical to `https://allphaseconstructionfl.com/contact` ✅
   - **OVERWRITES** the previous value (happens to be the same)

## Example Flow for /blog/some-post

1. User navigates to `/blog/hurricane-resistant-roofing`
2. `location.pathname` changes to `/blog/hurricane-resistant-roofing`
3. **NuclearMetadata useEffect fires:**
   - Calls `generateSEOMetadata('/blog/hurricane-resistant-roofing')`
   - Detects blog post pattern
   - Sets canonical to `https://allphaseconstructionfl.com/blog/hurricane-resistant-roofing` ✅
4. **CanonicalManager useEffect fires:**
   - Uses simple logic: `origin + pathname`
   - Sets canonical to `https://allphaseconstructionfl.com/blog/hurricane-resistant-roofing` ✅
   - **OVERWRITES** (happens to be same)

## Why It "Works" Most of the Time

For simple cases like `/contact` and blog posts, both components produce the SAME canonical URL by coincidence:

- NuclearMetadata: Uses configured URL or generates from path
- CanonicalManager: Uses `origin + pathname`

Both produce the same result for paths like:
- `/contact` → `https://allphaseconstructionfl.com/contact`
- `/about-us` → `https://allphaseconstructionfl.com/about-us`
- `/blog/post-slug` → `https://allphaseconstructionfl.com/blog/post-slug`

## The Actual Problem

If you're seeing canonicals pointing to the homepage, it could be:

1. **Timing issue**: CanonicalManager might be running before NuclearMetadata in some cases
2. **Build-time vs Runtime**: Prerendered pages have one canonical (from build), then JavaScript loads and both components fight over it
3. **Order of execution varies**: Different pages/routes might trigger the effects in different order

## Solution

**Remove CanonicalManager completely.** It's redundant and creates race conditions.

NuclearMetadata already:
- ✅ Strips query strings (line 26: normalizes path)
- ✅ Removes trailing slashes (line 26-37)
- ✅ Sets canonical from centralized configuration
- ✅ Has fallback logic for unmatched routes (seoTitles.ts line 237-242)
- ✅ Updates og:url to match canonical (line 69)

CanonicalManager does:
- ❌ Simple origin + pathname (no configuration awareness)
- ❌ Overwrites NuclearMetadata's work
- ❌ Creates race conditions

## Recommended Fix

**Delete CanonicalManager.tsx and remove it from App.tsx**

The NuclearMetadata component already handles everything CanonicalManager does, plus much more.
