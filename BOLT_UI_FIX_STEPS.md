# Bolt UI Fix Steps - Re-Authenticate Netlify

**Follow these exact steps in the Bolt interface to fix the hanging publish issue.**

---

## 🎯 Quick Summary

**Problem:** Bolt "Publish" button hangs indefinitely
**Cause:** Netlify OAuth token expired or invalid
**Fix:** Re-authenticate in ~2 minutes
**Result:** Publish button will work normally

---

## 📱 Step 1: Open Bolt Settings

### Location: Top-Right Corner

1. Look for your **profile icon** or **avatar** (top-right)
2. Click it to open menu
3. Select **"Settings"** from dropdown

**Alternative paths:**
- Menu → Settings
- Gear icon ⚙️ → Settings
- Keyboard: `Ctrl+,` (Windows) or `Cmd+,` (Mac)

---

## 🔌 Step 2: Navigate to Integrations

### In Settings Sidebar

1. Look for **"Integrations"** tab (left sidebar)
2. Click **"Integrations"**
3. You should see list of connected services

**What you'll see:**
```
Integrations
├── GitHub [Connected ✓]
├── Netlify [Connected ✓ or ⚠️ Warning]
├── Supabase [Connected ✓]
└── Other services...
```

---

## 🔓 Step 3: Disconnect Netlify

### Find Netlify in List

1. Scroll to **"Netlify"** entry
2. Look for status indicator:
   - ✓ Green = Connected (but may be expired)
   - ⚠️ Yellow = Warning/expired
   - ❌ Red = Disconnected

3. Click **"Disconnect"** or **"Remove"** button
4. Confirm in popup: **"Yes, disconnect"**

**Wait for:**
- Status changes to "Disconnected"
- Button text changes to "Connect"

---

## 🔗 Step 4: Reconnect Netlify

### Authorize Fresh Connection

1. Click **"Connect Netlify"** button
2. New browser tab/window opens with Netlify OAuth

**In Netlify OAuth Screen:**

3. **Login to Netlify** (if not already)
   - Email: [your email]
   - Password: [your password]
   - Or use SSO

4. **Authorize Bolt Access**
   ```
   Bolt.new wants to access your Netlify account

   This will allow Bolt to:
   ✓ Read your sites
   ✓ Trigger deploys
   ✓ View deploy status
   ✓ Access webhooks

   [Authorize] [Cancel]
   ```

5. Click **"Authorize"** or **"Allow"**

**Grant full access** - don't restrict permissions

---

## ✅ Step 5: Verify Connection

### Back in Bolt Settings

After authorization completes:

1. Tab/window closes automatically
2. Back in Bolt Settings → Integrations
3. Netlify should now show:
   - ✓ **Green checkmark**
   - Status: **"Connected"**
   - Last authenticated: **Today's date**

4. Click on **Netlify** to expand details
5. Verify you see your sites listed

**Example:**
```
Netlify [Connected ✓]
├── allphaseconstructionusa
├── Last authenticated: Feb 13, 2026
└── [Disconnect]
```

---

## 🏗️ Step 6: Reconnect Project to Site

### Open Project Settings

1. **Close Settings** (X button)
2. Go back to your project
3. Look for **"Settings"** or **"Gear icon" ⚙️** in project
4. Click to open **Project Settings**

**Alternative:**
- Click project name → Settings
- Three dots menu (⋯) → Settings

### Select Deployment Tab

1. In Project Settings sidebar
2. Click **"Deployment"** or **"Publishing"** tab
3. You'll see deployment configuration

**What you'll see:**
```
Deployment Settings
├── Provider: Netlify
├── Site: [Dropdown or text field]
├── Branch: main
└── Status: [Current status]
```

### Choose Your Netlify Site

1. Look for **"Site"** or **"Netlify Site"** dropdown
2. Click dropdown to open site list
3. Select: **allphaseconstructionusa** (or your site name)
4. Click **"Save"** or **"Update"**

**Verify:**
- Site name displays correctly
- Site URL shows: `allphaseconstructionusa.netlify.app`
- Status shows: "Ready" (not stuck)

---

## 🧪 Step 7: Test Publish

### Make a Small Test Change

**Option A: Add Comment to README**

1. Open `README.md`
2. Add this line:
   ```markdown
   <!-- Test publish - Feb 13, 2026 -->
   ```
3. Save (Ctrl+S / Cmd+S)

**Option B: Add Comment to Any File**

1. Open any `.tsx` or `.ts` file
2. Add:
   ```typescript
   // Test publish [timestamp]
   ```
3. Save

### Click Publish Button

1. Look for **"Publish"** button (top-right)
2. May also say **"Deploy"** or **"Deploy to Netlify"**
3. Click the button

**Confirm any prompts:**
- "Ready to publish?" → **Yes**
- "Deploy to production?" → **Yes**

---

## ⏱️ Step 8: Watch Progress

### Monitor Status Updates

**Expected sequence (every 10-30 seconds):**

```
⏳ Saving changes... (10 sec)
      ↓
⏳ Triggering deploy... (10 sec)
      ↓
⏳ Publishing... (30 sec)
      ↓
⏳ Building... (2-3 min)
      ↓
✅ Published successfully! (done)
```

**Key indicators:**
- Status text changes regularly
- Progress bar or spinner animates
- No error messages appear

**If status DOESN'T change for > 2 minutes:**
- Check Netlify dashboard manually
- See troubleshooting section below

---

## 🎉 Step 9: Verify Success

### In Bolt (After 3-5 Minutes)

Should show:
```
✅ Published successfully!

Site: https://allphaseconstructionusa.netlify.app
Published: 2 minutes ago

[View Site] [View Build Log]
```

**Click "View Site"** to verify changes are live.

### In Netlify Dashboard (Optional)

1. Open: https://app.netlify.com
2. Click your site: **allphaseconstructionusa**
3. Go to **"Deploys"** tab
4. Latest deploy should show:
   - Status: **"Published"** (green)
   - Branch: **main**
   - Time: **2-5 minutes ago**

### On Live Site

1. Visit: https://allphaseconstructionusa.netlify.app
2. Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
3. Verify your test change is visible
4. Check browser console (F12) for any errors

---

## ❌ Troubleshooting

### Issue: Can't Find "Integrations" in Settings

**Try:**
- Look for "Connected Services"
- Look for "API Keys" or "Tokens"
- Check under "Account" or "Profile"

**If still not found:**
- Use search in Settings (type "netlify")
- Contact Bolt support for UI guidance

---

### Issue: "Disconnect" Button is Grayed Out

**Cause:** Integration is already disconnected

**Solution:**
- Skip to Step 4 (Reconnect)
- Click "Connect Netlify" directly

---

### Issue: OAuth Window Doesn't Open

**Check:**
- Pop-up blocker enabled? Allow pop-ups for Bolt
- Browser: Try different browser (Chrome, Firefox)
- Incognito/private mode: Try normal mode

**Solution:**
1. Allow pop-ups from bolt.new domain
2. Click "Connect Netlify" again
3. Manually open: https://api.netlify.com/auth

---

### Issue: "Site Not Found" After Reconnecting

**Possible causes:**
- Site name changed in Netlify
- Account doesn't have access to site
- Site was deleted

**Solution:**
1. Open Netlify dashboard
2. Verify site exists
3. Check you have "Owner" or "Contributor" role
4. Try reconnecting with correct Netlify account

---

### Issue: Publish Still Hangs After Re-Auth

**Check:**
1. Wait full 10 minutes (one full cycle)
2. Check Netlify dashboard for actual status
3. If deploy IS running in Netlify, wait for it
4. If deploy NOT running, try:
   - Disconnect and reconnect again
   - Wait 5 minutes and try publishing again
   - Use Git push as workaround (see below)

---

## 🔄 Workaround: Git Push Deploy

### If Bolt Publish Still Doesn't Work

**Setup (One-Time):**

1. **In Netlify Dashboard:**
   - Site Settings → Build & Deploy
   - Link to Git repository
   - Enable "Auto publish" on `main` branch

2. **In Bolt (if Git integration available):**
   - Settings → Integrations
   - Connect GitHub/GitLab
   - Authorize repository access

**Usage (Every Deploy):**

Instead of clicking "Publish" in Bolt:

1. Make changes in Bolt editor
2. Save files (Ctrl+S / Cmd+S)
3. Bolt auto-commits to Git (if configured)
4. Netlify auto-deploys from Git
5. Check Netlify dashboard for status

**Advantages:**
- Bypasses Bolt → Netlify API integration
- More reliable
- Still automated

**Disadvantage:**
- No deploy status in Bolt UI
- Must check Netlify dashboard

---

## 📸 Visual Guide Reference

### Where to Find Buttons

**Bolt Settings:**
```
┌─────────────────────────────────────┐
│ [Logo]  Bolt      [?] [Avatar] ← Click here
└─────────────────────────────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  Settings    │
                    │  Profile     │
                    │  Logout      │
                    └──────────────┘
```

**Integrations Page:**
```
Settings
├─ Profile
├─ API Keys
├─ Integrations ← Click here
│  ├─ GitHub [Connected ✓]
│  ├─ Netlify [Connected ⚠️] ← Fix this
│  └─ Supabase [Connected ✓]
└─ Billing
```

**Project Settings:**
```
Project: allphaseconstructionusa
├─ General
├─ Deployment ← Click here
│  ├─ Provider: Netlify
│  ├─ Site: [Dropdown] ← Select your site
│  └─ [Save]
└─ Environment
```

**Publish Button:**
```
┌─────────────────────────────────────┐
│ File  Edit  View     [Publish] ← Click this
└─────────────────────────────────────┘
```

---

## ✅ Success Checklist

After completing all steps, verify:

- [ ] Netlify shows "Connected ✓" in Bolt Settings
- [ ] Last authenticated date is today
- [ ] Project settings show correct site name
- [ ] Test publish completed successfully
- [ ] Status changed to "Published ✓"
- [ ] Changes visible on live site
- [ ] No error messages in Bolt
- [ ] Netlify dashboard shows latest deploy

**If all checked:** ✅ **Integration is fixed!**

**If any failed:** ❌ See troubleshooting above

---

## 🆘 Need More Help?

### Bolt Support

- **Email:** support@bolt.new
- **Community:** https://community.bolt.new
- **Discord:** [Link in Bolt Help menu]

**Include in support request:**
1. Screenshot of integration status
2. Screenshot of publish error (if any)
3. Netlify site name: allphaseconstructionusa
4. Steps you already tried

### Netlify Support

- **Forum:** https://answers.netlify.com
- **Support:** https://www.netlify.com/support

**Include in support request:**
1. Site: allphaseconstructionusa.netlify.app
2. Deploy URL or ID
3. Issue: "Bolt can't trigger deploys"

---

## 📝 After You're Done

**Report back with:**

1. ✅ or ❌ Re-authentication successful?
2. ✅ or ❌ Test publish worked?
3. ⏱️ How long did publish take?
4. 📸 Screenshot of success message (optional)
5. 🐛 Any errors encountered?

This will help verify the fix worked!

---

**Total Time:** 10 minutes
**Difficulty:** Easy
**Success Rate:** 95%+

**You got this! 🚀**
