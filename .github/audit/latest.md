# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T17:04:59.847Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T17:04:43.274Z] ========================================
[2026-01-01T17:04:43.276Z] Discord Bot Execution Log
[2026-01-01T17:04:43.276Z] Environment: GitHub Actions
[2026-01-01T17:04:43.276Z] Node Version: v20.19.6
[2026-01-01T17:04:43.276Z] ========================================
[2026-01-01T17:04:43.276Z] Environment Variables Check:
[2026-01-01T17:04:43.276Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T17:04:43.276Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.276Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T17:04:43.276Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T17:04:43.277Z] 
Multi-Channel Configuration:
[2026-01-01T17:04:43.277Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T17:04:43.277Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T17:04:43.277Z] 
Data Files Check:
[2026-01-01T17:04:43.278Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4708 bytes)
[2026-01-01T17:04:43.278Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 41177 bytes)
[2026-01-01T17:04:43.278Z] 
========================================
[2026-01-01T17:04:43.278Z] Starting Enhanced Discord Bot...
[2026-01-01T17:04:43.278Z] ========================================
[2026-01-01T17:04:43.793Z] [BOT] ✅ Loaded V2 database: 68 jobs
[2026-01-01T17:04:44.297Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T17:04:44.297Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T17:04:44.297Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T17:04:44.298Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T17:04:44.340Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T17:04:44.384Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 35
[2026-01-01T17:04:44.386Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T17:04:44.386Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T17:04:44.386Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T17:04:44.387Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T17:04:44.387Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T17:04:44.391Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-01T17:04:44.391Z] [BOT] 📍 [ROUTING] "Salesforce BA" @ 360 IT Professionals
   Category: HEALTHCARE (matched: "health")
[2026-01-01T17:04:44.391Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-01T17:04:44.410Z] [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T17:04:44.593Z] [BOT] ✅ Created forum post: 🏢 Salesforce BA @ 360 IT Professionals in #🩺・healthcare-jobs
[2026-01-01T17:04:44.593Z] [BOT] ✅ Industry: Salesforce BA @ 360 IT Professionals
[2026-01-01T17:04:46.246Z] [BOT] ✅ Created forum post: 🏢 Salesforce BA @ 360 IT Professionals in #💻・remote-usa
[2026-01-01T17:04:46.246Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T17:04:47.747Z] [BOT] 💾 Marked as posted: Salesforce BA @ 360 IT Professionals (instance #1)
[2026-01-01T17:04:47.747Z] [BOT] 💾 BEFORE ARCHIVING: 69 jobs in database
[2026-01-01T17:04:47.748Z] [BOT] ✅ No jobs to archive (all 69 jobs within 7-day window)
[2026-01-01T17:04:47.759Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T17:04:50.760Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T17:04:50.760Z] [BOT] 📍 [ROUTING] "SAP ERP Analyst" @ 360 IT Professionals
[2026-01-01T17:04:50.760Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T17:04:50.987Z] [BOT] ✅ Created forum post: 🏢 SAP ERP Analyst @ 360 IT Professionals in #💻・tech-jobs
[2026-01-01T17:04:50.987Z] [BOT] ✅ Industry: SAP ERP Analyst @ 360 IT Professionals
[2026-01-01T17:04:52.632Z] [BOT] ✅ Created forum post: 🏢 SAP ERP Analyst @ 360 IT Professionals in #💻・remote-usa
[2026-01-01T17:04:52.632Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T17:04:54.133Z] [BOT] 💾 Marked as posted: SAP ERP Analyst @ 360 IT Professionals (instance #1)
[2026-01-01T17:04:54.133Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
✅ No jobs to archive (all 70 jobs within 7-day window)
[2026-01-01T17:04:54.136Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
[2026-01-01T17:04:54.136Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T17:04:57.136Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T17:04:57.137Z] [BOT] ⏭️  Skipping duplicate: JID_ca6171f1 (posted within 7 days)
[2026-01-01T17:04:57.137Z] [BOT] ⏭️  Skipping duplicate: JID_d257b577 (posted within 7 days)
[2026-01-01T17:04:57.137Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T17:04:57.138Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-01T17:04:57.138Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T17:04:57.181Z] [BOT] 📂 Loaded 1142 existing routing entries
[2026-01-01T17:04:57.227Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T17:04:57.227Z] [BOT] Total entries: 1144
   Timestamp: 2026-01-01T17:04:57.221Z
[2026-01-01T17:04:57.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T17:04:57.228Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T17:04:57.228Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
[2026-01-01T17:04:57.228Z] [BOT] 2. #🩺・healthcare-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-01T17:04:57.228Z] [BOT] [STATS] Channel stats saved
[2026-01-01T17:04:59.240Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*