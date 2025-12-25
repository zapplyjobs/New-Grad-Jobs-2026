# Discord Bot Execution Audit
**Timestamp:** 2025-12-25T00:42:24.658Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-25T00:42:13.687Z] ========================================
[2025-12-25T00:42:13.689Z] Discord Bot Execution Log
[2025-12-25T00:42:13.689Z] Environment: GitHub Actions
[2025-12-25T00:42:13.689Z] Node Version: v20.19.6
[2025-12-25T00:42:13.689Z] ========================================
[2025-12-25T00:42:13.689Z] Environment Variables Check:
[2025-12-25T00:42:13.689Z] DISCORD_TOKEN: ✅ Set
[2025-12-25T00:42:13.689Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.689Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-25T00:42:13.690Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-25T00:42:13.690Z] 
Multi-Channel Configuration:
[2025-12-25T00:42:13.690Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-25T00:42:13.690Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-25T00:42:13.690Z] 
Data Files Check:
[2025-12-25T00:42:13.691Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7162 bytes)
[2025-12-25T00:42:13.693Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 394289 bytes)
[2025-12-25T00:42:13.693Z] 
========================================
[2025-12-25T00:42:13.693Z] Starting Enhanced Discord Bot...
[2025-12-25T00:42:13.693Z] ========================================
[2025-12-25T00:42:14.147Z] [BOT] ✅ Loaded V2 database: 679 jobs
[2025-12-25T00:42:14.986Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-25T00:42:14.986Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-25T00:42:14.986Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-25T00:42:14.987Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-25T00:42:15.042Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-25T00:42:15.101Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 132
[2025-12-25T00:42:15.102Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-25T00:42:15.103Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-25T00:42:15.103Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-25T00:42:15.103Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-25T00:42:15.104Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-25T00:42:15.105Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-25T00:42:15.107Z] [BOT] 📍 [ROUTING] "Consulting Associate - Engineering or Geology" @ ORG_d41a2092
[2025-12-25T00:42:15.107Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-25T00:42:15.111Z] [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-25T00:42:15.306Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・tech-jobs
[2025-12-25T00:42:15.306Z] [BOT] ✅ Industry: Consulting Associate - Engineering or Geology @ ORG_d41a2092
[2025-12-25T00:42:17.012Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-25T00:42:18.512Z] [BOT] 💾 Marked as posted: Consulting Associate - Engineering or Geology @ ORG_d41a2092 (instance #1)
[2025-12-25T00:42:18.513Z] [BOT] 💾 BEFORE ARCHIVING: 680 jobs in database
[2025-12-25T00:42:18.513Z] [BOT] ✅ No jobs to archive (all 680 jobs within 7-day window)
[2025-12-25T00:42:18.522Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-25T00:42:21.523Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-25T00:42:21.523Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_535fdc6f-geology_r00028751-1 (posted within 7 days)
[2025-12-25T00:42:21.523Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-25T00:42:21.524Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-25T00:42:21.524Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-25T00:42:21.567Z] [BOT] 📂 Loaded 1072 existing routing entries
[2025-12-25T00:42:21.610Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1073
   Timestamp: 2025-12-25T00:42:21.606Z
[2025-12-25T00:42:21.610Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9a8c61a9.jsonl
[2025-12-25T00:42:21.610Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-25T00:42:21.610Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-25T00:42:21.611Z] [BOT] [STATS] Channel stats saved
[2025-12-25T00:42:23.621Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*