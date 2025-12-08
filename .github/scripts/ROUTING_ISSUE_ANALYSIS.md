# Location Routing Issue - Root Cause Analysis

**Date:** December 8, 2025
**Issue:** 80%+ of jobs going to remote-usa channel

---

## 🔍 Root Cause Found

**File:** `enhanced-discord-bot.js`
**Function:** `getJobLocationChannel()` (lines 62-195)

### The Problem: Over-Aggressive Fallback

**Lines 186-191: Default Fallback**
```javascript
// 6. Default fallback: US jobs without specific location channels → remote-usa
const usStates = ['al', 'ak', 'az', ... all 50 states];

if (state && usStates.includes(state)) {
  return LOCATION_CHANNEL_CONFIG['remote-usa'];  // ← THE PROBLEM
}
```

**What This Does:**
- ANY job with a US state (Boston, LA, Denver, Phoenix, Miami, etc.)
- That doesn't match existing city channels (SF, NYC, Seattle, Austin, Chicago)
- **Automatically goes to remote-usa**

**Result:** 80%+ of location-routed jobs go to remote-usa

---

## 📊 Example Job Flow

### Job 1: Boston Software Engineer
```
City: "Boston, MA"
State: "MA"

Routing Logic:
1. Line 133-137: Check cityMatches → No match (Boston not in list)
2. Line 155-175: Check state fallback → No match (MA not specifically handled)
3. Line 178-181: Check remote keywords → No match (not remote)
4. Line 186-191: Check US state fallback → MATCH (MA is in usStates list)
5. Result: → remote-usa ❌ WRONG
```

### Job 2: Los Angeles Data Scientist
```
City: "Los Angeles, CA"
State: "CA"

Routing Logic:
1. Line 133-137: Check cityMatches → No match (LA not in list)
2. Line 155-158: Check CA state fallback → MATCH → san-francisco ❌ WRONG
3. Result: → san-francisco (or remote-usa if CA fallback removed)
```

### Job 3: Phoenix Engineer
```
City: "Phoenix, AZ"
State: "AZ"

Routing Logic:
1. Line 133-137: Check cityMatches → No match (Phoenix not in list)
2. Line 155-175: Check state fallback → No match (AZ not specifically handled)
3. Line 186-191: Check US state fallback → MATCH → remote-usa
4. Result: → remote-usa ✅ CORRECT (no Phoenix channel exists)
```

---

## 💡 The Fix

### Step 1: Add Boston and LA to cityMatches

**Add after line 123:**
```javascript
// Boston Metro Area
'boston': 'boston',
'cambridge': 'boston',
'somerville': 'boston',
'brookline': 'boston',
'quincy': 'boston',
'newton': 'boston',

// Los Angeles Metro Area
'los angeles': 'los-angeles',
'santa monica': 'los-angeles',
'pasadena': 'los-angeles',
'long beach': 'los-angeles',
'glendale': 'los-angeles',
'irvine': 'los-angeles',
'anaheim': 'los-angeles'
```

### Step 2: Add state-level fallbacks

**Add after line 174:**
```javascript
if (state === 'ma' || state === 'massachusetts') {
  return LOCATION_CHANNEL_CONFIG['boston'];
}
if (state === 'ca' || state === 'california') {
  // CA jobs without specific city go to LA (second largest CA channel)
  // SF area already caught by city matching
  return LOCATION_CHANNEL_CONFIG['los-angeles'];
}
```

### Step 3: Update config.js

**Add to LOCATION_CHANNEL_CONFIG:**
```javascript
const LOCATION_CHANNEL_CONFIG = {
  'remote-usa': process.env.DISCORD_REMOTE_USA_CHANNEL_ID,
  'new-york': process.env.DISCORD_NY_CHANNEL_ID,
  'austin': process.env.DISCORD_AUSTIN_CHANNEL_ID,
  'chicago': process.env.DISCORD_CHICAGO_CHANNEL_ID,
  'seattle': process.env.DISCORD_SEATTLE_CHANNEL_ID,
  'redmond': process.env.DISCORD_REDMOND_CHANNEL_ID,
  'mountain-view': process.env.DISCORD_MV_CHANNEL_ID,
  'san-francisco': process.env.DISCORD_SF_CHANNEL_ID,
  'sunnyvale': process.env.DISCORD_SUNNYVALE_CHANNEL_ID,
  'san-bruno': process.env.DISCORD_SAN_BRUNO_CHANNEL_ID,

  // NEW - User provided channel IDs
  'boston': process.env.DISCORD_BOSTON_CHANNEL_ID,  // 1447609098353774772
  'los-angeles': process.env.DISCORD_LA_CHANNEL_ID  // 1447609408505905214
};
```

### Step 4: Update GitHub Secrets

**Add to repository secrets:**
- `DISCORD_BOSTON_CHANNEL_ID` = `1447609098353774772`
- `DISCORD_LA_CHANNEL_ID` = `1447609408505905214`

---

## 📈 Expected Impact

### Before Fix
- remote-usa: 80%+ of location jobs
- SF/NYC/Seattle/Austin/Chicago: ~15% combined
- Boston jobs: → remote-usa ❌
- LA jobs: → san-francisco ❌

### After Fix
- remote-usa: ~50-60% (actual remote jobs + unlisted cities)
- boston: ~8-12% of location jobs ✅
- los-angeles: ~5-8% of location jobs ✅
- SF/NYC/Seattle/Austin/Chicago: ~15-20% combined ✅
- Other cities (Denver, Phoenix, etc.): → remote-usa (acceptable)

---

## 🎯 Additional Improvement (Optional)

### Remove Aggressive Default Fallback

**Current (lines 186-191):**
```javascript
// ANY US state → remote-usa
if (state && usStates.includes(state)) {
  return LOCATION_CHANNEL_CONFIG['remote-usa'];
}
```

**Proposed:**
```javascript
// Only ACTUAL remote jobs → remote-usa
// Jobs from unlisted cities → No location channel (category only)
// This prevents remote-usa from becoming a catch-all

// REMOVE lines 186-191 entirely
// Or replace with more specific logic
```

**Trade-off:**
- ✅ remote-usa becomes less cluttered (only actual remote jobs)
- ❌ Jobs from Denver/Phoenix/etc. won't have location channel
- ⚠️ Users must search category channels for those cities

**Recommendation:** Keep fallback for now, revisit after monitoring

---

## 🧪 Testing Plan

1. **Local Test:**
   ```javascript
   // Test Boston routing
   const bostonJob = {
     job_title: 'Software Engineer',
     employer_name: 'Test Co',
     job_city: 'Boston',
     job_state: 'MA'
   };
   console.log(getJobLocationChannel(bostonJob)); // Should return boston channel ID

   // Test LA routing
   const laJob = {
     job_title: 'Data Scientist',
     employer_name: 'Test Co',
     job_city: 'Los Angeles',
     job_state: 'CA'
   };
   console.log(getJobLocationChannel(laJob)); // Should return LA channel ID

   // Test Cambridge (Boston metro)
   const cambridgeJob = {
     job_title: 'ML Engineer',
     employer_name: 'Test Co',
     job_city: 'Cambridge',
     job_state: 'MA'
   };
   console.log(getJobLocationChannel(cambridgeJob)); // Should return boston channel ID
   ```

2. **Production Test:**
   - Clear Discord + database
   - Run catch-up workflow (48 hours)
   - Check job distribution:
     - remote-usa should have ~50-60% (down from 80%)
     - boston should have jobs (if any exist in source)
     - los-angeles should have jobs (if any exist in source)

---

## 🚨 Important Notes

1. **Internships Repo:**
   - Same fix needed for internships repo
   - Copy changes to both repos
   - Same channel IDs (shared Discord channels)

2. **State-Level Fallback Conflict:**
   - Current: CA state → san-francisco
   - After fix: CA state → los-angeles
   - Bay Area cities still caught by city matching (Palo Alto, etc.)
   - This might need adjustment based on job distribution

3. **Monitoring:**
   - After deployment, check actual job counts per channel
   - If Boston/LA channels remain empty, investigate source data
   - May need to adjust city matching keywords

---

**Status:** Ready for implementation
**Estimated Time:** 30 minutes (both repos)
**Risk:** Low (easy rollback, location-only changes)
