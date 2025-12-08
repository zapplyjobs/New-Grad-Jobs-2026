# Channel Routing Analysis - December 8, 2025

**Issue:** Jobs piling into only 3 channels (tech-new-grad-jobs, ai-new-grad-jobs, data-science-new-grad-jobs)
**Root Cause:** Multiple factors - routing logic, channel availability, location diversity
**Priority:** HIGH - Fix before clearing Discord and reposting

---

## 🔍 Current Channel Configuration

### Category Channels (11 total)
```javascript
CHANNEL_CONFIG = {
  'tech': ✅ Configured (most jobs go here)
  'ai': ✅ Configured (second most common)
  'data-science': ✅ Configured (third most common)
  'sales': ⚠️ Configured but underutilized
  'marketing': ⚠️ Configured but underutilized
  'finance': ⚠️ Configured but underutilized
  'healthcare': ⚠️ Configured but underutilized
  'product': ⚠️ Configured but underutilized
  'supply-chain': ⚠️ Configured but underutilized
  'project-management': ⚠️ Configured but underutilized
  'hr': ⚠️ Configured but underutilized
}
```

### Location Channels (10 total)
```javascript
LOCATION_CHANNEL_CONFIG = {
  'remote-usa': ✅ Configured (MOST jobs go here - 80%+)
  'new-york': ✅ Configured
  'austin': ✅ Configured
  'chicago': ✅ Configured
  'seattle': ✅ Configured
  'redmond': ✅ Configured
  'mountain-view': ✅ Configured
  'san-francisco': ✅ Configured
  'sunnyvale': ✅ Configured
  'san-bruno': ✅ Configured
}
```

---

## 🚨 Problems Identified

### Problem 1: Non-Tech Channels Underutilized

**Issue:** Sales, marketing, finance, etc. channels exist but get almost no jobs

**Root Causes:**
1. **Too restrictive keyword matching**
   - Example: Sales channel only matches explicit titles like "Sales Manager", "Account Executive"
   - Misses: "Account Coordinator", "Business Development Intern", "Customer Success Associate"

2. **Title-first routing prioritizes tech**
   - 76%+ of job board positions are tech-related
   - Routing checks tech patterns BEFORE non-tech patterns
   - Even ambiguous titles (e.g., "Analyst") default to tech

3. **Job boards focus on tech**
   - Simplify/Ouckah primarily aggregate tech jobs
   - Very few pure sales/marketing/finance roles in source data

**Evidence:**
- Router logic (lines 275-305): Tech matching happens at Priority 1
- Non-tech matching happens at Priority 2 (only if title doesn't match tech)
- Description matching (Priority 3) requires NO tech keywords in title

### Problem 2: Location Channels Overwhelmed by remote-usa

**Issue:** 80%+ of jobs marked as "Remote" go to remote-usa channel, overwhelming it

**Root Causes:**
1. **Remote work dominance**
   - Post-COVID, most tech companies offer remote work
   - Jobs marked "Remote - USA" all go to one channel

2. **Insufficient location channel diversity**
   - 10 location channels exist, but 9 are hyper-specific cities
   - No regional channels (e.g., "bay-area", "east-coast", "west-coast")

3. **Location matching too narrow**
   - "San Francisco, CA" → san-francisco channel
   - "Palo Alto, CA" → ??? (no channel, doesn't get location routing)
   - "Boston, MA" → ??? (no channel, misses location routing)

**Current Location Channels:**
- ✅ remote-usa (80%+ of location-routed jobs)
- ✅ new-york (underutilized)
- ✅ austin (underutilized)
- ✅ chicago (underutilized)
- ✅ seattle (underutilized)
- ✅ 5x Bay Area cities (redmond, mountain-view, san-francisco, sunnyvale, san-bruno)

**Missing Common Locations:**
- ❌ Boston/Cambridge (major tech hub)
- ❌ Los Angeles (growing tech scene)
- ❌ Denver (tech hub)
- ❌ Remote - International (Canada, UK, etc. currently have no channel)

---

## 📊 Data Analysis Needed

**Before implementing fixes, we need to analyze actual job data:**

1. **Category Distribution** (last 500 jobs)
   - How many jobs per category? (tech, ai, data-science, sales, marketing, etc.)
   - What titles are being misclassified?
   - What keywords are we missing?

2. **Location Distribution** (last 500 jobs)
   - How many jobs per location?
   - Top 10 cities by job count?
   - Remote vs In-office breakdown?

3. **Routing Effectiveness**
   - How many jobs match category channels? (currently: ~90% go to tech/ai/ds)
   - How many jobs match location channels? (currently: ~80% go to remote-usa)
   - How many jobs fall through to defaults?

---

## 🎯 Proposed Solutions

### Solution 1: Add More Location Channels (4-6 new channels)

**Recommended New Channels:**
```javascript
LOCATION_CHANNEL_CONFIG = {
  // Existing
  'remote-usa': '...',
  'new-york': '...',
  'san-francisco': '...',
  // ... other existing channels

  // NEW - High-priority additions
  'boston': '...', // Boston/Cambridge metro area
  'los-angeles': '...', // LA metro area
  'remote-canada': '...', // International remote (Canada)
  'remote-international': '...', // International remote (EU/APAC)

  // NEW - Optional additions
  'denver': '...', // Denver/Boulder metro
  'portland': '...', // Portland metro
}
```

**Rationale:**
- **Boston:** Harvard, MIT, major biotech/tech hub, likely 5-10% of jobs
- **LA:** Growing tech scene, entertainment tech, 3-5% of jobs
- **Remote-Canada:** Many US companies hire in Canada, 2-3% of jobs
- **Remote-International:** EU/UK/APAC remote roles, 1-2% of jobs

**Impact:** Reduces remote-usa load from 80% → ~60-65%

### Solution 2: Improve Location Matching (Metro Area Grouping)

**Current Issue:** City-specific channels miss nearby cities

**Example:**
- Job in "Palo Alto" → No channel match → No location routing
- Job in "Cambridge" → No channel match → No location routing

**Solution:** Add metro area matching

```javascript
const METRO_AREA_MAPPING = {
  // San Francisco Bay Area
  'palo alto': 'san-francisco',
  'san jose': 'san-francisco',
  'oakland': 'san-francisco',
  'berkeley': 'san-francisco',
  'fremont': 'san-francisco',

  // Boston Metro
  'cambridge': 'boston',
  'somerville': 'boston',
  'brookline': 'boston',

  // NYC Metro
  'jersey city': 'new-york',
  'hoboken': 'new-york',
  'brooklyn': 'new-york',
  'queens': 'new-york',

  // LA Metro
  'santa monica': 'los-angeles',
  'pasadena': 'los-angeles',
  'long beach': 'los-angeles',
  'irvine': 'los-angeles'
};
```

**Implementation:** Update location router to check metro area mapping before exact city match

**Impact:** Increases location channel utilization from ~20% → ~35-40%

### Solution 3: Relax Non-Tech Category Matching (Optional)

**Current Issue:** Too strict keyword matching for non-tech roles

**Options:**

**Option A: Expand title matching keywords**
```javascript
// BEFORE (too restrictive)
regex: /\b(sales manager|account executive)\b/

// AFTER (more inclusive)
regex: /\b(sales|account|business development|customer success)\b/
```

**Option B: Lower priority threshold for non-tech**
- Allow description keywords to match even if title has weak tech indicators
- Example: "Analyst" title + "sales" in description → sales channel (not tech)

**Option C: Do nothing (recommended)**
- Job boards are 76%+ tech jobs by nature
- Non-tech channels will always be underutilized
- Focus on location diversity instead

**Recommendation:** **Option C** - Don't over-optimize for non-tech. Focus on location channels.

---

## 🔬 Testing Plan

### Phase 1: Analyze Current Data (30 minutes)
1. Query last 500 jobs from posted_jobs.json
2. Extract location distribution (top 20 cities)
3. Extract category distribution
4. Identify misrouted jobs

### Phase 2: Add Location Channels (1 hour)
1. Create 4 new Discord location channels:
   - boston
   - los-angeles
   - remote-canada
   - remote-international
2. Add channel IDs to .env (GitHub Secrets)
3. Update LOCATION_CHANNEL_CONFIG in config.js
4. Add metro area mapping to location router

### Phase 3: Test Routing Logic (30 minutes)
1. Run test suite with sample jobs
2. Verify location routing works for new channels
3. Check metro area mapping functionality

### Phase 4: Deploy & Monitor (24 hours)
1. Commit changes to main
2. Clear Discord channels + posted_jobs.json
3. Run catch-up workflow (last 48 hours)
4. Monitor job distribution across channels
5. Verify no jobs stuck in wrong channels

---

## 📋 Implementation Checklist

### Pre-Implementation
- [ ] Analyze last 500 jobs (location + category distribution)
- [ ] Decide which 4-6 location channels to add
- [ ] Create Discord channels (if needed)
- [ ] Get channel IDs ready

### Implementation
- [ ] Update LOCATION_CHANNEL_CONFIG (add 4-6 new channels)
- [ ] Add metro area mapping to location router
- [ ] Update .env with new channel IDs
- [ ] Add channel IDs to GitHub Secrets (both repos)
- [ ] Test routing logic locally
- [ ] Commit changes

### Post-Deployment
- [ ] Clear all Discord channels
- [ ] Clear posted_jobs.json
- [ ] Run catch-up workflow (48 hours)
- [ ] Monitor job distribution (check all channels)
- [ ] Verify location routing working
- [ ] Document any remaining issues

---

## 🎯 Expected Outcomes

**After Location Channel Improvements:**

**Category Channels:**
- tech-new-grad-jobs: 60-70% of jobs (down from 80%+)
- ai-new-grad-jobs: 10-15% of jobs (same)
- data-science-new-grad-jobs: 5-10% of jobs (same)
- Other channels: 5-10% of jobs total (slight increase)

**Location Channels:**
- remote-usa: 50-60% of location jobs (down from 80%+)
- boston: 5-10% of location jobs (new)
- los-angeles: 3-5% of location jobs (new)
- remote-canada: 2-3% of location jobs (new)
- remote-international: 1-2% of location jobs (new)
- Existing city channels: 20-25% of location jobs (increased utilization)

**Overall Impact:**
- More even job distribution across channels
- Reduced thread limit pressure on top 3 channels
- Better user experience (easier to find relevant jobs)
- Clearer channel organization

---

## 🚨 Risks & Mitigation

### Risk 1: Too Many Channels (User Confusion)

**Risk:** Adding 4-6 more location channels = 16-18 total channels
**Impact:** Users may feel overwhelmed
**Mitigation:**
- Add channels gradually (2-3 at a time)
- Monitor user feedback
- Archive underutilized channels after 30 days

### Risk 2: Routing Logic Errors

**Risk:** New metro area mapping causes misrouting
**Impact:** Jobs in wrong channels
**Mitigation:**
- Comprehensive local testing before deployment
- Test suite with sample jobs from each metro area
- Easy rollback (git revert)

### Risk 3: Channel ID Management

**Risk:** Managing 20+ channel IDs across 2 repos
**Impact:** Deployment complexity, potential misconfigurations
**Mitigation:**
- Document all channel IDs in spreadsheet
- Use consistent naming conventions
- Automated testing for missing channel IDs

---

## 📝 Next Steps

1. **User Decision Required:**
   - Which 4-6 location channels to add?
   - Do we want metro area mapping?
   - Do we want to touch non-tech category matching?

2. **Data Analysis:**
   - Run query on last 500 jobs to get actual distribution
   - Confirm which locations are most common
   - Validate assumptions with real data

3. **Implementation:**
   - Once approved, implement changes
   - Test locally
   - Deploy to both repos
   - Clear Discord + database
   - Run catch-up workflow

**Estimated Time:** 3-4 hours total (analysis + implementation + deployment)

---

**Status:** Draft - Awaiting user approval
**Last Updated:** December 8, 2025
