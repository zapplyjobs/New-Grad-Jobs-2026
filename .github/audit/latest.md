# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T07:48:47.565Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T07:48:36.813Z] ========================================
[2025-12-02T07:48:36.815Z] Discord Bot Execution Log
[2025-12-02T07:48:36.815Z] Environment: GitHub Actions
[2025-12-02T07:48:36.816Z] Node Version: v20.19.5
[2025-12-02T07:48:36.816Z] ========================================
[2025-12-02T07:48:36.816Z] Environment Variables Check:
[2025-12-02T07:48:36.816Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T07:48:36.816Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.816Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T07:48:36.816Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T07:48:36.816Z] 
Multi-Channel Configuration:
[2025-12-02T07:48:36.816Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.816Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T07:48:36.817Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T07:48:36.817Z] 
Data Files Check:
[2025-12-02T07:48:36.818Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T07:48:36.820Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332399 bytes)
[2025-12-02T07:48:36.820Z] 
========================================
[2025-12-02T07:48:36.820Z] Starting Enhanced Discord Bot...
[2025-12-02T07:48:36.820Z] ========================================
[2025-12-02T07:48:37.894Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T07:48:37.895Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T07:48:37.895Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T07:48:37.972Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T07:48:37.972Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T07:48:37.973Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T07:48:37.973Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T07:48:37.973Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T07:48:37.974Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T07:48:37.974Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T07:48:37.978Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T07:48:38.274Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T07:48:38.274Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T07:48:39.959Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T07:48:39.959Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T07:48:41.461Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T07:48:41.461Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T07:48:41.467Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T07:48:41.467Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T07:48:44.468Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T07:48:44.469Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T07:48:44.507Z] [BOT] 📂 Loaded 593 existing routing entries
[2025-12-02T07:48:44.547Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-02T07:48:44.547Z] [BOT] New entries: 1
   Total entries: 594
   Timestamp: 2025-12-02T07:48:44.545Z
[2025-12-02T07:48:46.555Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*