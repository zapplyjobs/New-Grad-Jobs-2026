# Routing Logger Append Fix - Manual Application Required

**Date:** 2025-11-22
**Issue:** routing-logger.js overwrites logs instead of appending (line 71)
**Impact:** Only last workflow run's jobs saved, losing 100+ historical entries

## Fix Required

### 1. Add decrypt import (Line 5):
```javascript
// BEFORE:
const { encryptLog } = require('./encryption-utils');

// AFTER:
const { encryptLog, decryptLog } = require('./encryption-utils');
```

### 2. Replace saveEncrypted function (Lines 59-75):

```javascript
saveEncrypted(password) {
  if (this.routingLog.length === 0) {
    console.log('ℹ️ No routing entries to save');
    return;
  }

  const auditDir = path.join(process.cwd(), '.github', 'audit');
  fs.mkdirSync(auditDir, { recursive: true});

  const outputPath = path.join(auditDir, 'routing-encrypted.json');

  // Load existing logs and append new entries
  let allLogs = [];
  if (fs.existsSync(outputPath)) {
    try {
      const existingEncrypted = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      const existingLogs = decryptLog(existingEncrypted, password);
      allLogs = existingLogs;
      console.log(`📂 Loaded ${existingLogs.length} existing routing entries`);
    } catch (error) {
      console.log('⚠️ Failed to load existing logs:', error.message);
    }
  }

  // Append new entries
  allLogs.push(...this.routingLog);

  // Encrypt and save combined logs
  const encryptedData = encryptLog(allLogs, password);
  fs.writeFileSync(outputPath, JSON.stringify(encryptedData, null, 2));

  console.log(`\n🔐 Encrypted routing log saved: ${outputPath}`);
  console.log(`   New entries: ${this.routingLog.length}`);
  console.log(`   Total entries: ${allLogs.length}`);
  console.log(`   Timestamp: ${encryptedData.timestamp}`);
}
```

## Apply to Both Repos

1. New-Grad-Internships-2026/.github/scripts/routing-logger.js
2. New-Grad-Jobs/.github/scripts/routing-logger.js

## Test After Fix

Run workflow and verify:
- "Loaded X existing routing entries" message appears
- Total entries increases with each run
- routing-encrypted.json grows over time
