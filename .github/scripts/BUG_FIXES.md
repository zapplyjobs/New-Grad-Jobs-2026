# Bug Fixes - Phase 2B Refactoring

**Date:** December 7, 2025
**Branch:** refactor/phase-2b-full-refactoring
**Context:** Bugs discovered and fixed during Phase 2B integration

---

## Bug #1: companies.json Path Resolution Error

**Discovered:** During Phase 2B-2 integration testing
**Severity:** Critical (causes runtime failure)
**Status:** ✅ Fixed

### Problem

**Location:** `enhanced-discord-bot.js` line 34

**Original Code:**
```javascript
const companies = JSON.parse(fs.readFileSync('./.github/scripts/job-fetcher/companies.json', 'utf8'));
```

**Issue:**
- Used relative path `./.github/scripts/...` which assumes `cwd` is repo root
- If bot runs from `.github/scripts/` directory, path becomes doubled: `.github/scripts/.github/scripts/...`
- Caused `ENOENT` error at runtime

**Error Message:**
```
Error: ENOENT: no such file or directory, open 'C:\Users\jarra\Videos\Work\Business\Job_Listings\New-Grad-Jobs\.github\scripts\.github\scripts\job-fetcher\companies.json'
```

Notice the doubled `.github\scripts\` in the path.

### Root Cause

The bot file is located at `.github/scripts/enhanced-discord-bot.js`. When it tries to read a file using a relative path starting with `./`, it resolves relative to the **current working directory** (cwd), not relative to the script's location.

If the bot is executed from the `.github/scripts/` directory (which is common), the path resolution becomes:
- cwd: `.github/scripts/`
- relative path: `./.github/scripts/job-fetcher/companies.json`
- resolved: `.github/scripts/.github/scripts/job-fetcher/companies.json` ❌

### Solution

**Fixed Code:**
```javascript
const companies = JSON.parse(fs.readFileSync(path.join(__dirname, 'job-fetcher', 'companies.json'), 'utf8'));
```

**Why This Works:**
- `__dirname` is the directory containing the current script (`.github/scripts/`)
- `path.join(__dirname, 'job-fetcher', 'companies.json')` resolves to `.github/scripts/job-fetcher/companies.json`
- Works regardless of current working directory ✅

### Verification

**Before Fix:**
```bash
$ node -e "require('./enhanced-discord-bot.js')"
Error: ENOENT: no such file or directory, open '...\.github\scripts\.github\scripts\job-fetcher\companies.json'
```

**After Fix:**
```bash
$ node -e "require('./enhanced-discord-bot.js')"
✓ Bot file loads successfully with fixed path
Error [TokenInvalid]: An invalid token was provided.
```

The error changed from `ENOENT` (file not found) to `TokenInvalid` (Discord login), proving:
- ✅ companies.json now loads successfully
- ✅ Bot gets far enough to attempt Discord login
- ✅ Path resolution works correctly

### Impact

**Before Fix:**
- Bot would crash immediately on startup
- Runtime error before any Discord functionality

**After Fix:**
- Bot loads successfully
- companies.json data available for tier detection
- No runtime path errors

### Related Files

- `enhanced-discord-bot.js` - Line 34 fixed
- `job-fetcher/companies.json` - File being loaded

### Commit

**Commit:** TBD (will be committed next)
**Files Changed:** 1 file, 1 line
**Type:** Bug fix (pre-existing issue, not caused by refactoring)

---

## Path Audit Results

**Audited:** All `fs.readFileSync()` and `require()` calls in `enhanced-discord-bot.js`

**Results:**
- ✅ Lines 20-25: Module imports (`./src/...`) - Correct (relative to script location)
- ✅ Lines 37-38: Job fetcher utils (`./job-fetcher/...`) - Correct (relative to script location)
- ✅ Lines 41-42: Logger/exporter (`./routing-logger`, `./jobs-data-exporter`) - Correct
- ❌ Line 34: companies.json - **FIXED** (was using `./` relative to cwd)
- ✅ Lines 417, 485: new_jobs.json - Correct (uses `path.join(dataDir, ...)`)

**Total Issues Found:** 1
**Total Issues Fixed:** 1

---

## Testing Checklist

**Syntax Validation:**
- ✅ `node --check enhanced-discord-bot.js` - Passed

**Module Loading:**
- ✅ Bot file requires successfully
- ✅ companies.json loads without ENOENT error
- ✅ All module imports resolve correctly

**Pending (Requires Discord API):**
- ⏳ Full bot startup with valid token
- ⏳ Job posting workflow
- ⏳ Deduplication/archiving functionality

---

## Lessons Learned

1. **Always use `__dirname` for script-relative paths** - Never assume cwd location
2. **Test module loading, not just syntax** - `node --check` doesn't catch runtime path errors
3. **Integration testing surfaces pre-existing bugs** - Refactoring is an opportunity to find and fix hidden issues
4. **Error message changes indicate progress** - Changing from ENOENT to TokenInvalid proved the fix worked

---

**Last Updated:** December 7, 2025
