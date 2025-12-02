# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T05:05:24.810Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T05:05:13.538Z] ========================================
[2025-12-02T05:05:13.540Z] Discord Bot Execution Log
[2025-12-02T05:05:13.540Z] Environment: GitHub Actions
[2025-12-02T05:05:13.540Z] Node Version: v20.19.5
[2025-12-02T05:05:13.540Z] ========================================
[2025-12-02T05:05:13.540Z] Environment Variables Check:
[2025-12-02T05:05:13.540Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T05:05:13.541Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T05:05:13.541Z] 
Multi-Channel Configuration:
[2025-12-02T05:05:13.541Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.541Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.542Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.542Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T05:05:13.542Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T05:05:13.542Z] 
Data Files Check:
[2025-12-02T05:05:13.542Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4803 bytes)
[2025-12-02T05:05:13.544Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332146 bytes)
[2025-12-02T05:05:13.544Z] 
========================================
[2025-12-02T05:05:13.545Z] Starting Enhanced Discord Bot...
[2025-12-02T05:05:13.545Z] ========================================
[2025-12-02T05:05:14.639Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T05:05:14.640Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T05:05:14.640Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T05:05:14.717Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T05:05:14.717Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T05:05:14.718Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T05:05:14.718Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T05:05:14.718Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T05:05:14.719Z] [BOT] 📍 [ROUTING] "Associate Report Developer" @ ORG_044baaec Logistics
[2025-12-02T05:05:14.719Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T05:05:14.724Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T05:05:15.036Z] [BOT] ✅ Created forum post: 🏢 Associate Report Developer @ ORG_044baaec Logistics in #💻・tech-jobs
[2025-12-02T05:05:15.036Z] [BOT] ✅ Industry: Associate Report Developer @ ORG_044baaec Logistics
[2025-12-02T05:05:16.983Z] [BOT] ✅ Created forum post: 🏢 Associate Report Developer @ ORG_044baaec Logistics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T05:05:18.483Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T05:05:18.483Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T05:05:18.489Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T05:05:18.489Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T05:05:21.489Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T05:05:21.530Z] [BOT] 📂 Loaded 582 existing routing entries
[2025-12-02T05:05:21.570Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 583
   Timestamp: 2025-12-02T05:05:21.568Z
[2025-12-02T05:05:23.579Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*