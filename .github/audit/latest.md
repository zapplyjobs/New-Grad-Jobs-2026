# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T00:38:41.140Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T00:38:29.869Z] ========================================
[2025-11-25T00:38:29.871Z] Discord Bot Execution Log
[2025-11-25T00:38:29.871Z] Environment: GitHub Actions
[2025-11-25T00:38:29.871Z] Node Version: v20.19.5
[2025-11-25T00:38:29.871Z] ========================================
[2025-11-25T00:38:29.871Z] Environment Variables Check:
[2025-11-25T00:38:29.871Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T00:38:29.871Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T00:38:29.871Z] 
Multi-Channel Configuration:
[2025-11-25T00:38:29.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T00:38:29.871Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T00:38:29.871Z] 
Data Files Check:
[2025-11-25T00:38:29.872Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6441 bytes)
[2025-11-25T00:38:29.873Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327530 bytes)
[2025-11-25T00:38:29.873Z] 
========================================
[2025-11-25T00:38:29.873Z] Starting Enhanced Discord Bot...
[2025-11-25T00:38:29.874Z] ========================================
[2025-11-25T00:38:30.964Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T00:38:30.964Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T00:38:30.965Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T00:38:31.003Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T00:38:31.004Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T00:38:31.004Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T00:38:31.005Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T00:38:31.005Z] [BOT] 📍 [ROUTING] "Data Science Analyst - LMS Support" @ ORG_9d38443e of Chicago
[2025-11-25T00:38:31.005Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T00:38:31.010Z] [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T00:38:31.356Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - LMS Support @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2025-11-25T00:38:31.357Z] [BOT] ✅ Industry: Data Science Analyst - LMS Support @ ORG_9d38443e of Chicago
[2025-11-25T00:38:33.255Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - LMS Support @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-25T00:38:34.757Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T00:38:37.758Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T00:38:37.796Z] [BOT] 📂 Loaded 9 existing routing entries
[2025-11-25T00:38:37.832Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 10
   Timestamp: 2025-11-25T00:38:37.832Z
[2025-11-25T00:38:39.841Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*