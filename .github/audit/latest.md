# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T20:36:09.422Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-30T20:35:59.414Z] ========================================
[2025-11-30T20:35:59.416Z] Discord Bot Execution Log
[2025-11-30T20:35:59.416Z] Environment: GitHub Actions
[2025-11-30T20:35:59.416Z] Node Version: v20.19.5
[2025-11-30T20:35:59.416Z] ========================================
[2025-11-30T20:35:59.416Z] Environment Variables Check:
[2025-11-30T20:35:59.416Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T20:35:59.416Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.416Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T20:35:59.416Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T20:35:59.416Z] 
Multi-Channel Configuration:
[2025-11-30T20:35:59.417Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T20:35:59.417Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T20:35:59.417Z] 
Data Files Check:
[2025-11-30T20:35:59.418Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5359 bytes)
[2025-11-30T20:35:59.420Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330837 bytes)
[2025-11-30T20:35:59.420Z] 
========================================
[2025-11-30T20:35:59.420Z] Starting Enhanced Discord Bot...
[2025-11-30T20:35:59.420Z] ========================================
[2025-11-30T20:36:00.240Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T20:36:00.241Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-30T20:36:00.241Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T20:36:00.317Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-30T20:36:00.318Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-30T20:36:00.318Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-30T20:36:00.319Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-30T20:36:00.319Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2025-11-30T20:36:00.319Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-30T20:36:00.323Z] [BOT ERROR] (node:2201) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-30T20:36:00.523Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2025-11-30T20:36:02.252Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-30T20:36:03.754Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T20:36:03.754Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T20:36:03.764Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-30T20:36:03.765Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T20:36:06.766Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-30T20:36:06.803Z] [BOT] 📂 Loaded 543 existing routing entries
[2025-11-30T20:36:06.843Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-11-30T20:36:06.843Z] [BOT] Total entries: 544
   Timestamp: 2025-11-30T20:36:06.841Z
[2025-11-30T20:36:08.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2201) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*