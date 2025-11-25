# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T17:02:42.328Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T17:02:31.213Z] ========================================
[2025-11-25T17:02:31.214Z] Discord Bot Execution Log
[2025-11-25T17:02:31.214Z] Environment: GitHub Actions
[2025-11-25T17:02:31.214Z] Node Version: v20.19.5
[2025-11-25T17:02:31.214Z] ========================================
[2025-11-25T17:02:31.214Z] Environment Variables Check:
[2025-11-25T17:02:31.214Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T17:02:31.214Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.214Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T17:02:31.214Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T17:02:31.214Z] 
Multi-Channel Configuration:
[2025-11-25T17:02:31.214Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.214Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.214Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T17:02:31.215Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T17:02:31.215Z] 
Data Files Check:
[2025-11-25T17:02:31.215Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6458 bytes)
[2025-11-25T17:02:31.216Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327754 bytes)
[2025-11-25T17:02:31.216Z] 
========================================
[2025-11-25T17:02:31.216Z] Starting Enhanced Discord Bot...
[2025-11-25T17:02:31.217Z] ========================================
[2025-11-25T17:02:32.484Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T17:02:32.484Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T17:02:32.485Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T17:02:32.525Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T17:02:32.525Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T17:02:32.525Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T17:02:32.526Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T17:02:32.527Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T17:02:32.527Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T17:02:32.531Z] [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T17:02:32.769Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T17:02:34.583Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-25T17:02:34.584Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-25T17:02:36.086Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T17:02:39.087Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T17:02:39.127Z] [BOT] 📂 Loaded 75 existing routing entries
[2025-11-25T17:02:39.163Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 76
   Timestamp: 2025-11-25T17:02:39.163Z
[2025-11-25T17:02:41.170Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*