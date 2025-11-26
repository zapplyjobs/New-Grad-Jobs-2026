# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T01:07:55.225Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T01:07:41.714Z] ========================================
[2025-11-26T01:07:41.715Z] Discord Bot Execution Log
[2025-11-26T01:07:41.715Z] Environment: GitHub Actions
[2025-11-26T01:07:41.715Z] Node Version: v20.19.5
[2025-11-26T01:07:41.715Z] ========================================
[2025-11-26T01:07:41.715Z] Environment Variables Check:
[2025-11-26T01:07:41.715Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T01:07:41.715Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.715Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T01:07:41.716Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T01:07:41.716Z] 
Multi-Channel Configuration:
[2025-11-26T01:07:41.716Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T01:07:41.716Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T01:07:41.716Z] 
Data Files Check:
[2025-11-26T01:07:41.716Z] .github/data/new_jobs.json: ✅ Exists (2 items, 13304 bytes)
[2025-11-26T01:07:41.718Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327897 bytes)
[2025-11-26T01:07:41.718Z] 
========================================
[2025-11-26T01:07:41.719Z] Starting Enhanced Discord Bot...
[2025-11-26T01:07:41.719Z] ========================================
[2025-11-26T01:07:42.715Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T01:07:42.715Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-26T01:07:42.716Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T01:07:42.792Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-11-26T01:07:42.793Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-26T01:07:42.793Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T01:07:42.794Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T01:07:42.794Z] [BOT] 📍 [ROUTING] "Associate CRM Systems Developer" @ ORG_b344d80e Museum of Science
[2025-11-26T01:07:42.794Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T01:07:42.799Z] [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T01:07:43.008Z] [BOT] ✅ Created forum post: 🏢 Associate CRM Systems Developer @ ORG_b344d80e Museum of Science in #💻・tech-jobs
[2025-11-26T01:07:43.008Z] [BOT] ✅ Industry: Associate CRM Systems Developer @ ORG_b344d80e Museum of Science
[2025-11-26T01:07:44.627Z] [BOT] ✅ Created forum post: 🏢 Associate CRM Systems Developer @ ORG_b344d80e Museum of Science in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T01:07:46.130Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T01:07:46.130Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T01:07:46.367Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T01:07:46.367Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T01:07:48.027Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T01:07:48.028Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T01:07:49.530Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T01:07:52.531Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-26T01:07:52.531Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T01:07:52.568Z] [BOT] 📂 Loaded 113 existing routing entries
[2025-11-26T01:07:52.606Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-26T01:07:52.606Z] [BOT] Total entries: 115
   Timestamp: 2025-11-26T01:07:52.605Z
[2025-11-26T01:07:54.615Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*