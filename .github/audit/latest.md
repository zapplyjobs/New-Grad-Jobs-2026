# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T07:09:02.943Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T07:08:52.545Z] ========================================
[2025-12-02T07:08:52.547Z] Discord Bot Execution Log
[2025-12-02T07:08:52.547Z] Environment: GitHub Actions
[2025-12-02T07:08:52.547Z] Node Version: v20.19.5
[2025-12-02T07:08:52.547Z] ========================================
[2025-12-02T07:08:52.547Z] Environment Variables Check:
[2025-12-02T07:08:52.547Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T07:08:52.547Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.547Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T07:08:52.547Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T07:08:52.548Z] 
Multi-Channel Configuration:
[2025-12-02T07:08:52.548Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T07:08:52.548Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T07:08:52.548Z] 
Data Files Check:
[2025-12-02T07:08:52.549Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5671 bytes)
[2025-12-02T07:08:52.551Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332348 bytes)
[2025-12-02T07:08:52.551Z] 
========================================
[2025-12-02T07:08:52.551Z] Starting Enhanced Discord Bot...
[2025-12-02T07:08:52.551Z] ========================================
[2025-12-02T07:08:53.454Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T07:08:53.455Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T07:08:53.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T07:08:53.532Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T07:08:53.533Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T07:08:53.533Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T07:08:53.534Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T07:08:53.534Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T07:08:53.534Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Machine Learning" @ ORG_d9bc2c87
[2025-12-02T07:08:53.535Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T07:08:53.535Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T07:08:53.540Z] [BOT ERROR] (node:2294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T07:08:53.778Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #💻・tech-jobs
[2025-12-02T07:08:53.778Z] [BOT] ✅ Industry: Software Engineer 1 - Machine Learning @ ORG_d9bc2c87
[2025-12-02T07:08:55.428Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-02T07:08:56.930Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T07:08:56.931Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T07:08:56.936Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T07:08:56.936Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T07:08:59.937Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T07:08:59.975Z] [BOT] 📂 Loaded 590 existing routing entries
[2025-12-02T07:09:00.016Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 591
   Timestamp: 2025-12-02T07:09:00.014Z
[2025-12-02T07:09:02.024Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*