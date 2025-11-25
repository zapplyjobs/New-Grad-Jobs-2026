# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T20:21:50.996Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T20:21:40.821Z] ========================================
[2025-11-25T20:21:40.822Z] Discord Bot Execution Log
[2025-11-25T20:21:40.822Z] Environment: GitHub Actions
[2025-11-25T20:21:40.823Z] Node Version: v20.19.5
[2025-11-25T20:21:40.823Z] ========================================
[2025-11-25T20:21:40.823Z] Environment Variables Check:
[2025-11-25T20:21:40.823Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T20:21:40.823Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T20:21:40.823Z] 
Multi-Channel Configuration:
[2025-11-25T20:21:40.823Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T20:21:40.823Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T20:21:40.823Z] 
Data Files Check:
[2025-11-25T20:21:40.824Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6458 bytes)
[2025-11-25T20:21:40.825Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327754 bytes)
[2025-11-25T20:21:40.825Z] 
========================================
[2025-11-25T20:21:40.825Z] Starting Enhanced Discord Bot...
[2025-11-25T20:21:40.825Z] ========================================
[2025-11-25T20:21:41.632Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T20:21:41.633Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T20:21:41.633Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T20:21:41.708Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-25T20:21:41.709Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T20:21:41.709Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T20:21:41.710Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T20:21:41.711Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T20:21:41.711Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T20:21:41.715Z] [BOT ERROR] (node:2340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T20:21:42.045Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T20:21:42.045Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T20:21:43.750Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T20:21:45.254Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T20:21:48.254Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T20:21:48.290Z] [BOT] 📂 Loaded 88 existing routing entries
[2025-11-25T20:21:48.326Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 89
   Timestamp: 2025-11-25T20:21:48.326Z
[2025-11-25T20:21:50.335Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*