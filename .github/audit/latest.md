# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T05:49:09.730Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T05:48:59.010Z] ========================================
[2025-12-02T05:48:59.011Z] Discord Bot Execution Log
[2025-12-02T05:48:59.011Z] Environment: GitHub Actions
[2025-12-02T05:48:59.012Z] Node Version: v20.19.5
[2025-12-02T05:48:59.012Z] ========================================
[2025-12-02T05:48:59.012Z] Environment Variables Check:
[2025-12-02T05:48:59.012Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T05:48:59.012Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T05:48:59.012Z] 
Multi-Channel Configuration:
[2025-12-02T05:48:59.012Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.012Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.013Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.013Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.013Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T05:48:59.013Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T05:48:59.013Z] 
Data Files Check:
[2025-12-02T05:48:59.013Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T05:48:59.015Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332168 bytes)
[2025-12-02T05:48:59.015Z] 
========================================
[2025-12-02T05:48:59.015Z] Starting Enhanced Discord Bot...
[2025-12-02T05:48:59.015Z] ========================================
[2025-12-02T05:49:00.215Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T05:49:00.215Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T05:49:00.216Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T05:49:00.297Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T05:49:00.297Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T05:49:00.298Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T05:49:00.298Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T05:49:00.299Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T05:49:00.299Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T05:49:00.299Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T05:49:00.303Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T05:49:00.471Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T05:49:02.148Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T05:49:02.148Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T05:49:03.650Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T05:49:03.650Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T05:49:03.655Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T05:49:03.655Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T05:49:06.657Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T05:49:06.697Z] [BOT] 📂 Loaded 585 existing routing entries
[2025-12-02T05:49:06.736Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 586
   Timestamp: 2025-12-02T05:49:06.735Z
[2025-12-02T05:49:08.743Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*