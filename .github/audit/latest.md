# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T01:11:09.168Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T01:10:58.229Z] ========================================
[2025-12-23T01:10:58.231Z] Discord Bot Execution Log
[2025-12-23T01:10:58.231Z] Environment: GitHub Actions
[2025-12-23T01:10:58.231Z] Node Version: v20.19.6
[2025-12-23T01:10:58.231Z] ========================================
[2025-12-23T01:10:58.231Z] Environment Variables Check:
[2025-12-23T01:10:58.231Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T01:10:58.231Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.231Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T01:10:58.231Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T01:10:58.231Z] 
Multi-Channel Configuration:
[2025-12-23T01:10:58.232Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T01:10:58.232Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T01:10:58.232Z] 
Data Files Check:
[2025-12-23T01:10:58.233Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5906 bytes)
[2025-12-23T01:10:58.237Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 534785 bytes)
[2025-12-23T01:10:58.237Z] 
========================================
[2025-12-23T01:10:58.237Z] Starting Enhanced Discord Bot...
[2025-12-23T01:10:58.237Z] ========================================
[2025-12-23T01:10:58.771Z] [BOT] ✅ Loaded V2 database: 913 jobs
[2025-12-23T01:10:59.791Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T01:10:59.792Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T01:10:59.792Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T01:10:59.792Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T01:10:59.900Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 163
[2025-12-23T01:10:59.902Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T01:10:59.902Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T01:10:59.902Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-23T01:10:59.902Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T01:10:59.903Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T01:10:59.903Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T01:10:59.904Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T01:10:59.905Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack Entry - Mid" @ ORG_fee50aac
[2025-12-23T01:10:59.905Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T01:10:59.910Z] [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T01:11:00.265Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #💻・tech-jobs
[2025-12-23T01:11:00.266Z] [BOT] ✅ Industry: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac
[2025-12-23T01:11:01.954Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #💻・remote-usa
[2025-12-23T01:11:01.954Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-23T01:11:03.455Z] [BOT] 💾 Marked as posted: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac (instance #1)
[2025-12-23T01:11:03.455Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2025-12-23T01:11:03.456Z] [BOT] ✅ No jobs to archive (all 914 jobs within 7-day window)
[2025-12-23T01:11:03.467Z] [BOT] 💾 Saved posted_jobs.json: 914 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T01:11:06.468Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T01:11:06.469Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_8424b0e0-mid_r2116871 (posted within 7 days)
[2025-12-23T01:11:06.469Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T01:11:06.470Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-23T01:11:06.470Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T01:11:06.513Z] [BOT] 📂 Loaded 1027 existing routing entries
[2025-12-23T01:11:06.557Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1028
[2025-12-23T01:11:06.557Z] [BOT] Timestamp: 2025-12-23T01:11:06.552Z
[2025-12-23T01:11:06.558Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 3
[2025-12-23T01:11:06.558Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T01:11:06.558Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2025-12-23T01:11:06.558Z] [BOT] Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-23T01:11:06.558Z] [BOT] [STATS] Channel stats saved
[2025-12-23T01:11:08.568Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*