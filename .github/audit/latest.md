# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T05:17:05.646Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T05:16:49.295Z] ========================================
[2025-12-01T05:16:49.297Z] Discord Bot Execution Log
[2025-12-01T05:16:49.297Z] Environment: GitHub Actions
[2025-12-01T05:16:49.297Z] Node Version: v20.19.5
[2025-12-01T05:16:49.297Z] ========================================
[2025-12-01T05:16:49.297Z] Environment Variables Check:
[2025-12-01T05:16:49.297Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T05:16:49.297Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.297Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T05:16:49.297Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T05:16:49.297Z] 
Multi-Channel Configuration:
[2025-12-01T05:16:49.298Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T05:16:49.298Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T05:16:49.298Z] 
Data Files Check:
[2025-12-01T05:16:49.299Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12306 bytes)
[2025-12-01T05:16:49.301Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331142 bytes)
[2025-12-01T05:16:49.301Z] 
========================================
[2025-12-01T05:16:49.301Z] Starting Enhanced Discord Bot...
[2025-12-01T05:16:49.301Z] ========================================
[2025-12-01T05:16:50.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T05:16:50.032Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-01T05:16:50.032Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T05:16:50.109Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-01T05:16:50.110Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-01T05:16:50.110Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-01T05:16:50.110Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T05:16:50.113Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T05:16:50.113Z] [BOT] 📍 [ROUTING] "People Data Analyst" @ ORG_c760c1c0int
[2025-12-01T05:16:50.113Z] [BOT] Category: TECH (matched: "data")
[2025-12-01T05:16:50.114Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T05:16:50.118Z] [BOT ERROR] (node:2448) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T05:16:50.255Z] [BOT] ✅ Created forum post: 🏢 People Data Analyst @ ORG_c760c1c0int in #💻・tech-jobs
[2025-12-01T05:16:50.255Z] [BOT] ✅ Industry: People Data Analyst @ ORG_c760c1c0int
[2025-12-01T05:16:52.071Z] [BOT] ✅ Created forum post: 🏢 People Data Analyst @ ORG_c760c1c0int in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-12-01T05:16:53.572Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T05:16:53.572Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T05:16:53.577Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-01T05:16:53.577Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T05:16:56.577Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-01T05:16:56.578Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_13e36faa Lab
   Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-01T05:16:56.763Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_13e36faa Lab in #📁・JID_e938df7b
[2025-12-01T05:16:56.763Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_13e36faa Lab
[2025-12-01T05:16:58.440Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_13e36faa Lab in #🗽・new-york
[2025-12-01T05:16:58.440Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-01T05:16:59.940Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T05:16:59.941Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T05:16:59.945Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T05:16:59.946Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T05:17:02.947Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-01T05:17:02.947Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-01T05:17:02.987Z] [BOT] 📂 Loaded 549 existing routing entries
[2025-12-01T05:17:03.026Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-01T05:17:03.026Z] [BOT] Total entries: 551
   Timestamp: 2025-12-01T05:17:03.024Z
[2025-12-01T05:17:05.036Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2448) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*