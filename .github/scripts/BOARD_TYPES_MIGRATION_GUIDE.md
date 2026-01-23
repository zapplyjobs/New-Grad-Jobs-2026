# Board Types Migration Guide

**Created:** 2026-01-22 (Phase 2: Board Templates)
**Purpose:** Guide for migrating other job board repositories to use the board types system

---

## Overview

The board types system (`src/board-types.js`) makes the GitHub Discord integration portable across different job board repositories by providing configuration templates for:

- **NEW_GRAD**: Entry-level positions (4 industry + 5 location channels, text channels)
- **INTERNSHIPS**: Student internships (11 industry + 15 location + 1 category channel, forum channels)
- **REMOTE**: Remote-only jobs (11 industry + 12 location channels, auto-discovery mode)

## Benefits

✅ **Portability**: Deploy to new repos by changing one line
✅ **Consistency**: All repos use same channel structure
✅ **Documentation**: Self-documenting channel requirements
✅ **Maintainability**: Single source of truth for channel configs

---

## Migration Steps

### For New-Grad-Jobs-2026 (Already Migrated ✅)

**Status:** Complete
**Board Type:** `NEW_GRAD`
**Commit:** TBD

This repo is already using the board types system as the reference implementation.

---

### For Internships-2026

**Board Type:** `INTERNSHIPS`
**Estimated Time:** 15 minutes

#### Step 1: Copy board-types.js

```bash
cp New-Grad-Jobs-2026/.github/scripts/src/board-types.js \
   Internships-2026/.github/scripts/src/board-types.js
```

#### Step 2: Update config.js

Replace `Internships-2026/.github/scripts/src/discord/config.js` with:

```javascript
/**
 * Discord Channel Configuration - Internships-2026
 *
 * UPDATED 2026-01-22: Migrated to board types system
 * - Uses src/board-types.js for portable configuration
 * - Board type: INTERNSHIPS (full industry + location spread)
 * - Channel type: FORUM channels
 */

const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

// Generate channel configuration from board type template
const {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  CATEGORY_CHANNEL_CONFIG
} = generateLegacyConfig(BOARD_TYPES.INTERNSHIPS);

// Legacy single channel support
const LEGACY_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// Check if multi-channel mode is enabled
const MULTI_CHANNEL_MODE = Object.values(CHANNEL_CONFIG).some(id => id && id.trim() !== '');
const LOCATION_MODE_ENABLED = Object.values(LOCATION_CHANNEL_CONFIG).some(id => id && id.trim() !== '');

module.exports = {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  CATEGORY_CHANNEL_CONFIG,
  LEGACY_CHANNEL_ID,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
```

#### Step 3: Verify Environment Variables

```bash
cd Internships-2026/.github/scripts
node -e "
const { getRequiredEnvVars, BOARD_TYPES } = require('./src/board-types');
const envVars = getRequiredEnvVars(BOARD_TYPES.INTERNSHIPS);
console.log('Required environment variables:');
envVars.forEach(v => console.log(\`- \${v.envVar}: \${v.description}\`));
"
```

#### Step 4: Test Integration

```bash
# Test that config loads correctly
node -e "
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, CATEGORY_CHANNEL_CONFIG } = require('./src/discord/config');
console.log('Industry channels:', Object.keys(CHANNEL_CONFIG).length);
console.log('Location channels:', Object.keys(LOCATION_CHANNEL_CONFIG).length);
console.log('Category channels:', Object.keys(CATEGORY_CHANNEL_CONFIG).length);
"
```

Expected output:
```
Industry channels: 11
Location channels: 15
Category channels: 1
```

#### Step 5: Commit Changes

```bash
git add src/board-types.js src/discord/config.js
git commit -m "refactor: migrate to board types system

- Use board types template for INTERNSHIPS configuration
- Centralize channel definitions in src/board-types.js
- Improve maintainability and portability"
```

---

### For Remote-Jobs-2026

**Board Type:** `REMOTE`
**Estimated Time:** 20 minutes

#### Step 1: Copy board-types.js

```bash
cp New-Grad-Jobs-2026/.github/scripts/src/board-types.js \
   Remote-Jobs-2026/.github/scripts/src/board-types.js
```

#### Step 2: Update config.js

Remote-Jobs-2026 uses **discovery mode** (no environment variables, channels discovered by name).

Replace `Remote-Jobs-2026/.github/scripts/src/discord/config.js` with:

```javascript
/**
 * Discord Channel Configuration for Remote-Jobs-2026
 *
 * UPDATED 2026-01-22: Migrated to board types system
 * - Uses src/board-types.js for portable configuration
 * - Board type: REMOTE (channel name discovery)
 * - Channel type: TEXT channels
 * - No environment variables needed (auto-discovery)
 */

const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

// Generate channel configuration from board type template
const {
  FUNCTIONAL_CHANNELS,
  LOCATION_CHANNELS,
  ALL_REQUIRED_CHANNELS
} = generateLegacyConfig(BOARD_TYPES.REMOTE);

// Mode flags
const MULTI_CHANNEL_MODE = true;
const LOCATION_MODE_ENABLED = true;

module.exports = {
  FUNCTIONAL_CHANNELS,
  LOCATION_CHANNELS,
  ALL_REQUIRED_CHANNELS,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
```

#### Step 3: Test Integration

```bash
cd Remote-Jobs-2026/.github/scripts
node -e "
const { FUNCTIONAL_CHANNELS, LOCATION_CHANNELS } = require('./src/discord/config');
console.log('Functional channels:', FUNCTIONAL_CHANNELS.length);
console.log('Location channels:', LOCATION_CHANNELS.length);
console.log('First functional:', FUNCTIONAL_CHANNELS[0]);
console.log('First location:', LOCATION_CHANNELS[0]);
"
```

Expected output:
```
Functional channels: 11
Location channels: 12
First functional: remote-tech
First location: remote-usa
```

#### Step 4: Commit Changes

```bash
git add src/board-types.js src/discord/config.js
git commit -m "refactor: migrate to board types system

- Use board types template for REMOTE configuration
- Centralize channel definitions in src/board-types.js
- Maintain auto-discovery mode"
```

---

## Creating a New Board Type

If you need a new board type (e.g., `CONTRACTING`, `PART_TIME`):

### Step 1: Add to board-types.js

```javascript
const BOARD_TYPES = {
  // ... existing types
  CONTRACTING: 'contracting'
};

const BOARD_CONFIGS = {
  // ... existing configs
  [BOARD_TYPES.CONTRACTING]: {
    name: 'Contract Jobs 2026',
    description: 'Contract and freelance positions',
    channelMode: 'env',  // or 'discovery'
    channelType: 'text',  // or 'forum'
    envPrefix: 'DISCORD',

    industryChannels: [
      {
        key: 'tech',
        envVar: 'DISCORD_TECH_CHANNEL_ID',
        description: 'Tech contract roles'
      },
      // ... more channels
    ],

    locationChannels: [
      // ... location channels
    ],

    categoryChannels: []
  }
};
```

### Step 2: Use in config.js

```javascript
const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.CONTRACTING);
```

---

## Validation & Testing

### Test 1: Config Loads Without Errors

```bash
node -e "require('./src/discord/config')"
```

Should exit with code 0 (no output = success).

### Test 2: Channel Counts Match Expectations

```bash
node -e "
const { BOARD_TYPES, getBoardConfig } = require('./src/board-types');
const config = getBoardConfig(BOARD_TYPES.NEW_GRAD);
console.log('Board:', config.name);
console.log('Industry channels:', config.industryChannels.length);
console.log('Location channels:', config.locationChannels.length);
"
```

### Test 3: Environment Variables Documented

```bash
node -e "
const { BOARD_TYPES, getRequiredEnvVars } = require('./src/board-types');
const envVars = getRequiredEnvVars(BOARD_TYPES.NEW_GRAD);
console.log('Total env vars needed:', envVars.length);
console.log('First:', envVars[0]);
"
```

### Test 4: Bot Integration Works

Run the Discord bot with the new config:

```bash
DISCORD_TOKEN=xxx DISCORD_GUILD_ID=xxx node enhanced-discord-bot.js
```

Bot should start without errors and log channel routing correctly.

---

## Troubleshooting

### Error: "Unknown board type"

**Cause:** Typo in board type name

**Fix:** Use exact board type from `BOARD_TYPES` enum:
```javascript
BOARD_TYPES.NEW_GRAD  // ✅ Correct
BOARD_TYPES.new_grad  // ❌ Wrong (lowercase)
'new-grad'             // ❌ Wrong (string instead of enum)
```

### Error: "Cannot find module '../board-types'"

**Cause:** `board-types.js` not in correct location

**Fix:** Ensure file is at `.github/scripts/src/board-types.js`

### Channels Not Routing Correctly

**Cause:** Environment variables not set or board type mismatch

**Fix:**
1. Check `.env` or GitHub Secrets for all required env vars
2. Run `getRequiredEnvVars()` to see what's needed
3. Verify board type matches your repo (NEW_GRAD vs INTERNSHIPS vs REMOTE)

---

## Migration Checklist

Use this checklist when migrating a repo:

- [ ] Copy `src/board-types.js` to repo
- [ ] Update `src/discord/config.js` to use `generateLegacyConfig()`
- [ ] Choose correct board type (NEW_GRAD, INTERNSHIPS, REMOTE)
- [ ] Verify all environment variables are set
- [ ] Test config loads: `node -e "require('./src/discord/config')"`
- [ ] Test channel counts match expectations
- [ ] Run bot locally to verify routing works
- [ ] Commit changes with clear message
- [ ] Test in GitHub Actions workflow

---

## Benefits of Board Types System

### Before (Manual Config)

Each repo manually defined channels:

```javascript
// Internships-2026/src/discord/config.js
const CHANNEL_CONFIG = {
  'tech': process.env.DISCORD_TECH_CHANNEL_ID,
  'ai': process.env.DISCORD_AI_CHANNEL_ID,
  // ... 9 more manual entries
};

const LOCATION_CHANNEL_CONFIG = {
  'remote-usa': process.env.DISCORD_REMOTE_USA_INT_CHANNEL_ID,
  // ... 14 more manual entries
};
```

**Problems:**
- ❌ Easy to have drift between repos
- ❌ Hard to add new channel across all repos
- ❌ No documentation of channel coverage/purpose
- ❌ No validation of required env vars

### After (Board Types)

```javascript
const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.INTERNSHIPS);
```

**Benefits:**
- ✅ Single source of truth for all repos
- ✅ Self-documenting (coverage %, cities, descriptions)
- ✅ Easy to add new repos (just copy file + change board type)
- ✅ Built-in env var documentation via `getRequiredEnvVars()`
- ✅ Consistent across all repos

---

## Next Steps

After migrating all repos:

1. **Update INDEX.md** to reference board types system
2. **Create env var documentation** using `getRequiredEnvVars()` for each repo
3. **Update workflows** to validate board type on startup
4. **Consider:** Create GitHub Actions validation to ensure config.js uses board types

---

**Last Updated:** 2026-01-22
**Status:** New-Grad-Jobs-2026 migrated, Internships-2026 + Remote-Jobs-2026 ready to migrate
