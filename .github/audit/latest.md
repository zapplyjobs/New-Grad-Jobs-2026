# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T19:48:36.451Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T19:48:21.367Z] ========================================
[2025-12-02T19:48:21.369Z] Discord Bot Execution Log
[2025-12-02T19:48:21.369Z] Environment: GitHub Actions
[2025-12-02T19:48:21.369Z] Node Version: v20.19.5
[2025-12-02T19:48:21.370Z] ========================================
[2025-12-02T19:48:21.370Z] Environment Variables Check:
[2025-12-02T19:48:21.370Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T19:48:21.370Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.370Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T19:48:21.370Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T19:48:21.370Z] 
Multi-Channel Configuration:
[2025-12-02T19:48:21.370Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.370Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.370Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.370Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T19:48:21.371Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T19:48:21.371Z] 
Data Files Check:
[2025-12-02T19:48:21.371Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10694 bytes)
[2025-12-02T19:48:21.373Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333126 bytes)
[2025-12-02T19:48:21.373Z] 
========================================
[2025-12-02T19:48:21.373Z] Starting Enhanced Discord Bot...
[2025-12-02T19:48:21.373Z] ========================================
[2025-12-02T19:48:22.117Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T19:48:22.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T19:48:22.118Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T19:48:22.195Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T19:48:22.196Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T19:48:22.196Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
[2025-12-02T19:48:22.196Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T19:48:22.196Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T19:48:22.197Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T19:48:22.197Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T19:48:22.197Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T19:48:22.202Z] [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T19:48:22.545Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T19:48:22.545Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T19:48:24.198Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T19:48:24.199Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T19:48:25.699Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:48:25.700Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:48:25.705Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T19:48:25.705Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:48:28.706Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T19:48:28.706Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T19:48:28.745Z] [BOT] 📂 Loaded 614 existing routing entries
[2025-12-02T19:48:28.784Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-02T19:48:28.784Z] [BOT] New entries: 1
   Total entries: 615
   Timestamp: 2025-12-02T19:48:28.782Z
[2025-12-02T19:48:30.792Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*