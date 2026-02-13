# Bolt Publish Quick Checklist

**Use this checklist after re-authenticating Netlify to verify everything works.**

---

## 🔍 Pre-Publish Verification

### 1. Netlify Integration Status

Open Bolt → Settings → Integrations

- [ ] Netlify shows **green checkmark ✓**
- [ ] Netlify status: **"Connected"**
- [ ] Last authenticated: **Today's date**
- [ ] Available sites: **Your site is listed**

**If not:**
1. Click "Disconnect Netlify"
2. Click "Connect Netlify"
3. Complete OAuth authorization
4. Grant full access

---

### 2. Project Site Connection

Open Project → Settings → Deployment

- [ ] Site name: **allphaseconstructionusa** (or your site)
- [ ] Site URL: **allphaseconstructionusa.netlify.app**
- [ ] Branch: **main**
- [ ] Deploy status: **Ready** (not stuck)

**If incorrect:**
1. Click "Change Site"
2. Select correct site from dropdown
3. Click "Save"

---

### 3. Netlify Build Configuration

Check in Netlify Dashboard:

- [ ] Build command: **`npx vite build`**
- [ ] Publish directory: **`dist`**
- [ ] Node version: **20**
- [ ] Branch to deploy: **main**
- [ ] Auto publishing: **Enabled**

**Access:** https://app.netlify.com/sites/[your-site]/settings/deploys

---

## 🧪 Test Publish

### 4. Make a Test Change

**Option A: Edit README**
```markdown
<!-- Add this line to README.md -->
Last published: [Today's date]
```

**Option B: Add a Comment**
```tsx
// Test publish - [timestamp]
```

**Option C: Edit Environment Variable**
```env
# Test comment added [date]
```

---

### 5. Initiate Publish

1. **Save Changes**
   - Ctrl+S (Windows) or Cmd+S (Mac)
   - Wait for "Saved" indicator

2. **Click "Publish" Button**
   - Top-right corner of Bolt
   - May say "Deploy" or "Publish"

3. **Watch Status Updates**
   - Should change every 10-30 seconds
   - Expected statuses:
     - ⏳ "Saving changes..."
     - ⏳ "Triggering deploy..."
     - ⏳ "Publishing..."
     - ⏳ "Building..."
     - ✅ "Published successfully!"

---

### 6. Verify Completion (Within 5 Minutes)

**In Bolt:**
- [ ] Status changed to **"Published ✓"**
- [ ] No error messages
- [ ] Site URL is clickable
- [ ] Timestamp updated

**In Netlify:**
- [ ] New deploy appears in dashboard
- [ ] Deploy status: **"Published"**
- [ ] Build completed successfully
- [ ] No errors in build log

**On Live Site:**
- [ ] Visit site URL
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Verify change is visible
- [ ] Check console for errors (F12)

---

## ❌ If Publish Hangs (After 10 Minutes)

### Immediate Actions

1. **Don't Click "Publish" Again**
   - Wait at least 10 minutes first
   - Multiple clicks can cause conflicts

2. **Check Netlify Dashboard**
   - Visit: https://app.netlify.com/sites/[your-site]/deploys
   - Look for "Building" or "Queued" deploy
   - **If deploy IS running:** Wait for it to finish
   - **If NO deploy running:** Integration is broken

3. **Force Cancel in Bolt**
   - Look for "Cancel" or "Stop" button
   - Click to stop the stuck publish
   - Wait 2 minutes before trying again

---

## 🔧 Troubleshooting Steps

### Issue: "Publishing..." Hangs Forever

**Quick Fix:**
1. Open Netlify dashboard in new tab
2. Manually trigger deploy: **"Trigger deploy" → "Deploy site"**
3. Wait for manual deploy to complete
4. Return to Bolt and try publishing again

**Root Cause:** Bolt → Netlify API call failed

**Solution:** Re-authenticate (see main fix guide)

---

### Issue: "Build failed" in Bolt

**Check Netlify Build Log:**
1. Open Netlify deploy details
2. Check "Deploy log" for errors
3. Common issues:
   - Missing dependencies: `npm install` failed
   - Build script error: `vite build` failed
   - Environment variables missing

**If Build Succeeds in Netlify but Fails in Bolt:**
- Webhook/callback not reaching Bolt
- Re-authenticate Netlify integration

---

### Issue: Deploy Completes but Bolt Still Shows "Publishing..."

**This means:**
- Netlify finished deploy successfully
- Bolt didn't receive completion signal
- **Callback webhook is broken**

**Fix:**
1. Manually refresh Bolt
2. Check deploy status in project settings
3. Re-authenticate Netlify integration
4. Test again

---

## ✅ Success Indicators

### Bolt Should Show:

```
✓ Published successfully
  Site: https://allphaseconstructionusa.netlify.app
  Published 2 minutes ago

  [View Site] [View Build Log]
```

### Netlify Should Show:

```
✓ Published
  Production: main@a1b2c3d
  2 minutes ago
  Build time: 2m 34s
```

### Browser Should Show:

- Your changes are live
- No 404 or 500 errors
- Assets load correctly
- Cache cleared automatically

---

## 🚀 Ongoing Workflow

### After Fix is Confirmed

**For every future publish:**

1. **Make changes** in Bolt editor
2. **Save** (Ctrl+S / Cmd+S)
3. **Click "Publish"**
4. **Wait 3-5 minutes**
5. **Verify success** message
6. **Test live site**

**Expected behavior:**
- No hanging
- Status updates in real-time
- Completion signal received
- Publish button ready for next deploy

---

## 📊 Deploy Metrics (Reference)

### Healthy Deploy Times

| Metric | Expected Time |
|--------|---------------|
| Commit & trigger | 10-20 seconds |
| Build queue | 0-30 seconds |
| npm install | 30-90 seconds |
| vite build | 60-120 seconds |
| Deploy to CDN | 20-40 seconds |
| **Total** | **2-5 minutes** |

### Warning Signs

⚠️ **If any of these occur:**
- Deploy takes > 10 minutes
- Status stuck for > 5 minutes
- No status updates for > 2 minutes
- Error messages appear

**Action:** Check Netlify dashboard for actual status

---

## 🔄 Alternative Deploy Methods

### If Bolt Publish Doesn't Work

**Method 1: Git Push (Recommended)**
```bash
git add .
git commit -m "Your changes"
git push origin main
```
- Netlify auto-deploys from Git
- Bypasses Bolt API
- More reliable

**Method 2: Netlify CLI**
```bash
netlify deploy --prod
```
- Direct deploy to Netlify
- No Git commit needed
- Good for testing

**Method 3: Netlify Dashboard**
- Click "Trigger deploy"
- Select "Deploy site"
- Uses last Git commit
- Manual but reliable

---

## 📝 Record Your Results

After testing, note:

**Test Date:** _______________

**Publish Success:** [ ] Yes [ ] No

**Time to Complete:** ___ minutes

**Issues Encountered:** _______________

**Solution Applied:** _______________

**Status After Fix:** _______________

---

## 🎯 Final Verification

**All systems working when:**

✅ Bolt publish completes in 3-5 minutes
✅ Status updates appear in real-time
✅ Success message shows after deploy
✅ Live site reflects changes immediately
✅ No manual intervention needed

**If all checked, integration is fixed! 🎉**

---

**Need help?** See full guide: `BOLT_NETLIFY_INTEGRATION_FIX.md`
