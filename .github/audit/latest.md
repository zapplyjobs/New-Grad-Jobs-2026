# Discord Bot Execution Audit
**Timestamp:** 2025-12-27T07:35:01.339Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-27T07:34:50.764Z] ========================================
[2025-12-27T07:34:50.766Z] Discord Bot Execution Log
[2025-12-27T07:34:50.766Z] Environment: GitHub Actions
[2025-12-27T07:34:50.766Z] Node Version: v20.19.6
[2025-12-27T07:34:50.766Z] ========================================
[2025-12-27T07:34:50.766Z] Environment Variables Check:
[2025-12-27T07:34:50.766Z] DISCORD_TOKEN: ✅ Set
[2025-12-27T07:34:50.766Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.766Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-27T07:34:50.767Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-27T07:34:50.767Z] 
Multi-Channel Configuration:
[2025-12-27T07:34:50.767Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.767Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-27T07:34:50.768Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-27T07:34:50.768Z] 
Data Files Check:
[2025-12-27T07:34:50.768Z] .github/data/new_jobs.json: ✅ Exists (2 items, 2364 bytes)
[2025-12-27T07:34:50.769Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 230593 bytes)
[2025-12-27T07:34:50.770Z] 
========================================
[2025-12-27T07:34:50.770Z] Starting Enhanced Discord Bot...
[2025-12-27T07:34:50.770Z] ========================================
[2025-12-27T07:34:51.295Z] [BOT] ✅ Loaded V2 database: 392 jobs
[2025-12-27T07:34:51.876Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-27T07:34:51.877Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-27T07:34:51.877Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-27T07:34:51.877Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-27T07:34:51.924Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-27T07:34:51.978Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 73
[2025-12-27T07:34:51.979Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-27T07:34:51.979Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-27T07:34:51.980Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-27T07:34:51.980Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-27T07:34:51.980Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-27T07:34:51.980Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
[2025-12-27T07:34:51.981Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-27T07:34:51.981Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-27T07:34:51.982Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend" @ ORG_b18a8c08
[2025-12-27T07:34:51.983Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-27T07:34:51.987Z] [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-27T07:34:52.145Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_b18a8c08 in #💻・tech-jobs
[2025-12-27T07:34:52.145Z] [BOT] ✅ Industry: Software Engineer 1 - Backend @ ORG_b18a8c08
[2025-12-27T07:34:53.947Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_b18a8c08 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-27T07:34:55.448Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend @ ORG_b18a8c08 (instance #1)
[2025-12-27T07:34:55.448Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2025-12-27T07:34:55.448Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2025-12-27T07:34:55.460Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
[2025-12-27T07:34:55.460Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-27T07:34:58.460Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-27T07:34:58.460Z] [BOT] ⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25910 (posted within 7 days)
[2025-12-27T07:34:58.461Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-27T07:34:58.462Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-27T07:34:58.462Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-27T07:34:58.505Z] [BOT] 📂 Loaded 1083 existing routing entries
[2025-12-27T07:34:58.550Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1084
   Timestamp: 2025-12-27T07:34:58.545Z
[2025-12-27T07:34:58.551Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_22bd1254.jsonl
   Total attempts: 3
[2025-12-27T07:34:58.551Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-27T07:34:58.551Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-27T07:34:58.551Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-27T07:34:58.552Z] [BOT] [STATS] Channel stats saved
[2025-12-27T07:35:00.562Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*