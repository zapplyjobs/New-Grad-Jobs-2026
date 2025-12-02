# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T11:23:15.220Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T11:23:05.311Z] ========================================
[2025-12-02T11:23:05.313Z] Discord Bot Execution Log
[2025-12-02T11:23:05.313Z] Environment: GitHub Actions
[2025-12-02T11:23:05.313Z] Node Version: v20.19.5
[2025-12-02T11:23:05.313Z] ========================================
[2025-12-02T11:23:05.313Z] Environment Variables Check:
[2025-12-02T11:23:05.313Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T11:23:05.313Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.313Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T11:23:05.313Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T11:23:05.313Z] 
Multi-Channel Configuration:
[2025-12-02T11:23:05.313Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T11:23:05.314Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T11:23:05.314Z] 
Data Files Check:
[2025-12-02T11:23:05.315Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T11:23:05.317Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332690 bytes)
[2025-12-02T11:23:05.317Z] 
========================================
[2025-12-02T11:23:05.317Z] Starting Enhanced Discord Bot...
[2025-12-02T11:23:05.317Z] ========================================
[2025-12-02T11:23:06.029Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T11:23:06.030Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T11:23:06.030Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T11:23:06.105Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T11:23:06.105Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T11:23:06.106Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T11:23:06.106Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T11:23:06.106Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T11:23:06.107Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T11:23:06.107Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T11:23:06.107Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T11:23:06.112Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T11:23:06.380Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T11:23:06.380Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T11:23:08.041Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T11:23:09.541Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T11:23:09.542Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T11:23:09.548Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T11:23:09.548Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T11:23:12.549Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T11:23:12.549Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T11:23:12.591Z] [BOT] 📂 Loaded 597 existing routing entries
[2025-12-02T11:23:12.630Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T11:23:12.630Z] [BOT] Total entries: 598
   Timestamp: 2025-12-02T11:23:12.628Z
[2025-12-02T11:23:14.639Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*