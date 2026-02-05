# Dynamic SSR - Quick Test Guide

## 🚀 Post-Deployment Quick Verification

### Test These 5 URLs in Incognito Mode

Open in browser, right-click → "View Page Source"

1. **Boca Raton**
   ```
   view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/?cb=10
   ```
   Look for: `<title>Roof Inspection in Boca Raton`

2. **Boynton Beach**
   ```
   view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boynton-beach/?cb=11
   ```
   Look for: `<title>Roof Inspection in Boynton Beach`

3. **Fort Lauderdale**
   ```
   view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/fort-lauderdale/?cb=12
   ```
   Look for: `<title>Roof Inspection in Fort Lauderdale`

4. **Coral Springs**
   ```
   view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/coral-springs/?cb=13
   ```
   Look for: `<title>Roof Inspection in Coral Springs`

5. **West Palm Beach**
   ```
   view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/west-palm-beach/?cb=14
   ```
   Look for: `<title>Roof Inspection in West Palm Beach`

---

## ✅ Success Checklist

For EACH city above, verify in view-source:

```html
<!-- ✅ Title -->
<title>Roof Inspection in {CITY} for Repairs & Replacement | All Phase</title>

<!-- ✅ Meta Description -->
<meta name="description" content="Get a professional roof inspection in {CITY} to determine repair needs, replacement options, and insurance documentation before you decide." />

<!-- ✅ Open Graph Title -->
<meta property="og:title" content="Roof Inspection in {CITY} for Repairs & Replacement | All Phase" />

<!-- ✅ Open Graph Description -->
<meta property="og:description" content="Get a professional roof inspection in {CITY} to determine repair needs, replacement options, and insurance documentation before you decide." />

<!-- ✅ Twitter Title -->
<meta name="twitter:title" content="Roof Inspection in {CITY} for Repairs & Replacement | All Phase" />

<!-- ✅ Twitter Description -->
<meta name="twitter:description" content="Get a professional roof inspection in {CITY} to determine repair needs, replacement options, and insurance documentation before you decide." />
```

---

## ❌ Should NOT See

```html
<!-- ❌ Global defaults -->
<title>Roofing Contractor Broward & Palm Beach | All Phase Construction</title>
<meta name="description" content="Dual-licensed roofing contractor serving South Florida..." />

<!-- ❌ Missing city name -->
<title>Roof Inspection for Repairs & Replacement | All Phase</title>

<!-- ❌ Wrong city name -->
<title>Roof Inspection in Miami for Repairs & Replacement | All Phase</title>
```

---

## 🔍 Quick Search Test

In view-source, use browser search (Ctrl+F / Cmd+F):

**Boca Raton** page:
- Search for: `Boca Raton` → Should find **6 matches** (title + 5 meta tags)
- Search for: `Roofing Contractor Broward` → Should find **0 matches**

**Boynton Beach** page:
- Search for: `Boynton Beach` → Should find **6 matches**
- Search for: `Roofing Contractor Broward` → Should find **0 matches**

**Fort Lauderdale** page:
- Search for: `Fort Lauderdale` → Should find **6 matches**
- Search for: `Roofing Contractor Broward` → Should find **0 matches**

---

## 🧪 Curl Test (for developers)

```bash
# Test Boca Raton
curl -s "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/?cb=10" | grep -i "boca raton"

# Test Boynton Beach
curl -s "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boynton-beach/?cb=11" | grep -i "boynton beach"

# Test Fort Lauderdale
curl -s "https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/fort-lauderdale/?cb=12" | grep -i "fort lauderdale"
```

Expected: Each command should return **6 lines** with the city name.

---

## 📊 Social Media Debuggers

Test OG tags are working:

**Facebook Debugger**:
```
https://developers.facebook.com/tools/debug/
```
Paste: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/`

**Twitter Card Validator**:
```
https://cards-dev.twitter.com/validator
```
Paste: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/`

**LinkedIn Inspector**:
```
https://www.linkedin.com/post-inspector/
```
Paste: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/`

✅ All should show: "Roof Inspection in Boca Raton for Repairs & Replacement | All Phase"

---

## 🎯 Random City Test

Pick any city from the list and test:

**All 40 Cities**:
- boca-raton
- boynton-beach
- coconut-creek
- cooper-city
- coral-springs
- davie
- delray-beach
- fort-lauderdale
- greenacres
- gulf-stream
- hallandale-beach
- haverhill
- highland-beach
- hollywood
- hypoluxo
- jupiter
- lake-worth-beach
- lantana
- lauderdale-by-the-sea
- lauderhill
- lighthouse-point
- loxahatchee-groves
- margate
- miramar
- oakland-park
- ocean-ridge
- palm-beach
- palm-beach-gardens
- parkland
- pembroke-park
- pembroke-pines
- plantation
- pompano-beach
- royal-palm-beach
- sunrise
- tamarac
- wellington
- west-palm-beach
- weston
- wilton-manors

**URL Pattern**:
```
view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/{CITY-SLUG}/?cb=15
```

**Expected**: Unique metadata with correct city name in all 6 tags.

---

## ⚡ 30-Second Test

1. Open: `view-source:https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boca-raton/?cb=10`
2. Search for: `Boca Raton` (Ctrl+F / Cmd+F)
3. Count matches: Should be **6**
4. Verify: No "Roofing Contractor Broward & Palm Beach" in title/description

✅ **If these pass → Deployment successful!**

---

## 📝 Success Confirmation

After testing 5 URLs above, confirm:

- [ ] All 5 cities show unique titles in view-source
- [ ] All 5 cities show unique descriptions in view-source
- [ ] All OG tags show correct city names
- [ ] All Twitter tags show correct city names
- [ ] No global defaults visible
- [ ] Social media debuggers show correct OG tags

**When all checked → 🎉 Dynamic SSR is working!**

---

**Total Time**: ~2-3 minutes to verify
**Cities Covered**: 40+
**Meta Tags Generated**: 240+ (6 per city)
