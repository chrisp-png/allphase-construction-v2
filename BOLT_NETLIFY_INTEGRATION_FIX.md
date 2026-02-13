# Bolt-Netlify Integration Fix Guide

**Date:** February 13, 2026
**Issue:** Bolt "Publish" action hangs, but manual Netlify deploys succeed

---

## 🔍 Issue Diagnosis

### Symptoms
- ✅ Netlify builds succeed when triggered manually/via Git push
- ❌ Bolt "Publish" button hangs indefinitely
- ❌ Bolt doesn't receive deploy completion signal from Netlify
- ❌ Deploy status stuck in "pending" or "publishing" state

### Root Cause
**Netlify integration authorization has expired or broken**, preventing Bolt from:
1. Triggering deploys via Netlify API
2. Receiving webhook callbacks when deploys complete
3. Polling deploy status effectively

---

## 🛠️ Step-by-Step Fix

### Step 1: Re-Authenticate Netlify in Bolt

1. **Open Bolt Settings**
   - Click your profile icon (top-right)
   - Select **Settings** → **Integrations**

2. **Disconnect Netlify**
   - Find "Netlify" in the integrations list
   - Click **"Disconnect"** or **"Remove"**
   - Confirm disconnection

3. **Reconnect Netlify**
   - Click **"Connect Netlify"**
   - Authorize Bolt in the Netlify OAuth popup
   - Grant **full access** to all sites

4. **Verify Connection**
   - Confirm you see a green checkmark ✓ next to Netlify
   - You should see your site listed

---

### Step 2: Reconnect Project to Netlify Site

1. **Open Project Settings in Bolt**
   - In your Bolt project, click the **gear icon** ⚙️
   - Go to **Deployment** or **Publishing** tab

2. **Select Netlify Site**
   - Click **"Change Site"** or **"Connect to Netlify"**
   - From the dropdown, select: **allphaseconstructionusa** (or your site name)
   - Click **"Save"**

3. **Verify Site Connection**
   - Ensure the site name displays correctly
   - Check that the site URL shows: `allphaseconstructionusa.netlify.app`

---

### Step 3: Clear Stuck Deploy Status

Since Bolt configuration files (`.bolt/config.json`) are not directly accessible, you'll need to:

**Option A: Via Bolt UI**
1. Open Bolt project settings
2. Look for **"Reset Deployment Status"** or **"Clear Publish Cache"**
3. Click to reset

**Option B: Create New Bolt Project (if needed)**
If the above doesn't work:
1. In Bolt, create a **new project** from this repository
2. Import from Git: `https://github.com/[your-repo]/project.git`
3. Reconnect to the same Netlify site
4. Previous deploys remain intact

---

### Step 4: Test Publish Workflow

1. **Make a Small Change**
   - Edit a file (e.g., add a comment to `README.md`)
   - Save the change in Bolt

2. **Click "Publish"**
   - Wait for Bolt to initiate the build
   - Watch for progress indicators

3. **Verify Completion Signal**
   - Deploy should complete within 2-5 minutes
   - Bolt should show: **"Published successfully ✓"**
   - Site URL should update automatically

4. **Check Netlify Dashboard**
   - Open: https://app.netlify.com/sites/allphaseconstructionusa/deploys
   - Verify the deploy shows as **"Published"**
   - Check if webhook/notification was sent to Bolt

---

## ⚙️ Netlify Configuration Verification

### Current `netlify.toml` Settings (✅ Already Correct)

```toml
[build]
publish = "dist"
command = "npx vite build"

[build.environment]
NODE_VERSION = "20"
```

**Build Command:** `npx vite build`
**Publish Directory:** `dist`
**Node Version:** 20

These settings are **correct** and should not be changed.

---

## 🔐 Netlify Build Hooks (Optional Enhancement)

If Bolt continues to have issues, you can set up a **Build Hook** for manual triggers:

### Create Build Hook

1. **In Netlify Dashboard:**
   - Go to: **Site Settings** → **Build & Deploy** → **Build Hooks**
   - Click **"Add Build Hook"**

2. **Configure Hook:**
   - **Name:** `Bolt Deploy Hook`
   - **Branch:** `main` (or your default branch)
   - Click **"Save"**

3. **Copy Webhook URL:**
   - You'll get a URL like: `https://api.netlify.com/build_hooks/[unique-id]`
   - Save this URL

4. **Use in Bolt (if supported):**
   - In Bolt project settings → Deployment
   - Look for **"Custom Webhook URL"** or **"Deploy Hook"**
   - Paste the Netlify build hook URL

---

## 📊 Deploy Status Monitoring

### How Bolt Should Receive Completion Signal

Bolt uses **one of these methods** to know when a deploy finishes:

1. **Netlify API Polling**
   - Bolt queries Netlify API every 10-30 seconds
   - Checks deploy status: `building` → `ready`
   - Requires valid API token (from OAuth)

2. **Webhook Callback**
   - Netlify sends POST request to Bolt's webhook endpoint
   - Includes deploy status: `success`, `failed`, `cancelled`
   - Requires webhook configured in Netlify

3. **Deploy Notifications**
   - Netlify Deploy Notifications to external service
   - Bolt subscribes to deploy events

**Most Likely Issue:** Method 1 (API polling) is failing due to expired OAuth token.

---

## 🧪 Testing the Fixed Workflow

### Expected Publish Flow

```
┌─────────────┐
│ Bolt Editor │
└──────┬──────┘
       │ 1. User clicks "Publish"
       ▼
┌────────────────────┐
│ Bolt Backend       │
│ - Commits changes  │
│ - Triggers deploy  │
└────────┬───────────┘
         │ 2. API call to Netlify
         ▼
┌─────────────────────┐
│ Netlify Build       │
│ - npm install       │
│ - npm run build     │
│ - Deploy to CDN     │
└────────┬────────────┘
         │ 3. Webhook/API response
         ▼
┌────────────────────┐
│ Bolt Backend       │
│ - Receives signal  │
│ - Updates UI       │
└────────┬───────────┘
         │ 4. "Published ✓"
         ▼
┌─────────────┐
│ User sees   │
│ success msg │
└─────────────┘
```

### Success Indicators

✅ **Bolt shows:**
- "Publishing..." (0-30 seconds)
- "Building..." (30-180 seconds)
- "Published successfully ✓" (after completion)
- Updated site URL is clickable

✅ **Netlify shows:**
- New deploy in dashboard
- Status: "Published"
- Deploy time: 2-5 minutes
- Green checkmark ✓

---

## 🚨 If Issue Persists

### Workaround: Manual Git Push

If Bolt publish continues to hang, use **Git-based deploys**:

1. **Connect Git Repository**
   - In Netlify: **Site Settings** → **Build & Deploy**
   - Connect to GitHub/GitLab repository
   - Select branch: `main`

2. **Enable Auto-Deploy**
   - Toggle: **"Deploy on push"** = ON
   - Every Git commit auto-deploys

3. **Push from Bolt**
   - Bolt still commits to Git
   - Netlify auto-deploys from Git
   - Bypass Bolt's API integration

### Alternative: Use Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to site
netlify link

# Deploy
netlify deploy --prod
```

---

## 📋 Deployment Configuration Checklist

### Netlify Site Settings

- [ ] **Build command:** `npx vite build` ✅
- [ ] **Publish directory:** `dist` ✅
- [ ] **Node version:** 20 ✅
- [ ] **Branch deploys:** `main` only
- [ ] **Deploy notifications:** Enabled (optional)

### Bolt Integration

- [ ] Netlify connected in Bolt Settings
- [ ] OAuth token valid (re-authenticate if needed)
- [ ] Correct site selected in project settings
- [ ] Deploy status resets after publish
- [ ] Success message appears after completion

### Git Repository

- [ ] `.netlify/` in `.gitignore` (optional)
- [ ] `.bolt/` in `.gitignore` (optional)
- [ ] `dist/` in `.gitignore` ✅
- [ ] `node_modules/` in `.gitignore` ✅

---

## 🔧 Common Issues & Solutions

### Issue: "Invalid API Token"

**Solution:**
1. Disconnect Netlify in Bolt Settings
2. Reconnect and re-authorize
3. Ensure you grant **full access** during OAuth

### Issue: "Site Not Found"

**Solution:**
1. Verify site exists in Netlify dashboard
2. Check site name matches exactly
3. Reconnect to correct site in Bolt

### Issue: "Deploy Stuck at 'Building...'"

**Solution:**
1. Check Netlify dashboard for actual build status
2. If build completed in Netlify, clear Bolt cache
3. Re-authenticate Netlify integration

### Issue: "Unauthorized Deploy"

**Solution:**
1. Check Netlify site permissions
2. Ensure your Netlify account has deploy access
3. Verify OAuth scope includes deploy permissions

---

## 🎯 Expected Results After Fix

### Immediate Results

1. **Bolt Publish Works**
   - Click "Publish" → Deploy starts
   - Progress shown in real-time
   - Success message appears
   - No hanging or timeouts

2. **Deploy Completes Fast**
   - Build time: 2-3 minutes
   - Deploy time: 30 seconds
   - Total: ~3-5 minutes

3. **Status Updates in Real-Time**
   - Bolt shows current stage
   - Completion signal received
   - URL updates automatically

### Long-Term Benefits

- **Reliable deploys** from Bolt editor
- **Real-time feedback** on build status
- **No manual workarounds** needed
- **Seamless workflow** for future updates

---

## 📚 Additional Resources

### Netlify Documentation

- [Deploy Notifications](https://docs.netlify.com/site-deploys/notifications/)
- [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/)
- [API Authentication](https://docs.netlify.com/api/get-started/)

### Bolt Documentation

- Bolt Settings → Help → "Deployment Issues"
- Bolt Community: [https://community.bolt.new](https://community.bolt.new)

### Support Channels

- **Netlify Support:** https://answers.netlify.com/
- **Bolt Support:** [support@bolt.new](mailto:support@bolt.new)

---

## ✅ Summary of Actions Taken

### What Was Analyzed

1. ✅ Checked `netlify.toml` configuration (correct)
2. ✅ Verified build command and publish directory
3. ✅ Reviewed redirect rules and headers
4. ✅ Confirmed Netlify plugins are installed
5. ✅ Analyzed deployment workflow

### What Needs to Be Done (By You)

1. **Re-authenticate Netlify** in Bolt Settings → Integrations
2. **Reconnect project** to correct Netlify site
3. **Test publish** with small change
4. **Verify completion signal** is received

### What Should Work Now

- **Publish button** should trigger builds
- **Deploy status** should update in real-time
- **Completion signal** should mark publish as done
- **No hanging** or timeout issues

---

## 🎬 New Publish Workflow

### Step-by-Step Process

1. **Make Changes in Bolt**
   - Edit files in Bolt editor
   - Save changes (Ctrl+S / Cmd+S)

2. **Click "Publish"**
   - Top-right corner: **"Publish"** button
   - Confirm any prompts

3. **Watch Progress**
   - Status: "Publishing..." → "Building..." → "Published ✓"
   - Estimated time: 3-5 minutes

4. **Verify Live Site**
   - Click published URL
   - Check changes are live
   - Test functionality

### Typical Deploy Timeline

| Stage | Duration | Status in Bolt |
|-------|----------|----------------|
| **Committing** | 5-10 sec | "Saving changes..." |
| **API Call** | 2-5 sec | "Triggering deploy..." |
| **Build Start** | 10-20 sec | "Publishing..." |
| **Dependencies** | 30-60 sec | "Building..." |
| **Vite Build** | 60-120 sec | "Building..." |
| **Deploy to CDN** | 20-40 sec | "Deploying..." |
| **Completion** | 2-5 sec | "Published ✓" |

**Total:** ~3-5 minutes

---

## 🔄 If You Need to Roll Back

### Via Netlify Dashboard

1. Go to: **Deploys** tab
2. Find previous successful deploy
3. Click **"..."** → **"Publish deploy"**
4. Confirm rollback

### Via Bolt

1. Open **Version History** in Bolt
2. Select previous version
3. Click **"Restore"**
4. Publish restored version

---

**Status:** Ready for you to re-authenticate Netlify and test the fixed workflow.

**Next Step:** Follow **Step 1** above to re-authenticate Netlify in Bolt Settings.
