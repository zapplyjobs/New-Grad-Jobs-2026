# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T08:42:55.404Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T08:42:45.015Z] ========================================
[2025-12-24T08:42:45.016Z] Discord Bot Execution Log
[2025-12-24T08:42:45.017Z] Environment: GitHub Actions
[2025-12-24T08:42:45.017Z] Node Version: v20.19.6
[2025-12-24T08:42:45.017Z] ========================================
[2025-12-24T08:42:45.017Z] Environment Variables Check:
[2025-12-24T08:42:45.017Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T08:42:45.017Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.017Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T08:42:45.017Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T08:42:45.017Z] 
Multi-Channel Configuration:
[2025-12-24T08:42:45.017Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T08:42:45.018Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T08:42:45.018Z] 
Data Files Check:
[2025-12-24T08:42:45.019Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7336 bytes)
[2025-12-24T08:42:45.021Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 387688 bytes)
[2025-12-24T08:42:45.021Z] 
========================================
[2025-12-24T08:42:45.021Z] Starting Enhanced Discord Bot...
[2025-12-24T08:42:45.021Z] ========================================
[2025-12-24T08:42:45.531Z] [BOT] ✅ Loaded V2 database: 668 jobs
[2025-12-24T08:42:46.219Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T08:42:46.220Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T08:42:46.220Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T08:42:46.220Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T08:42:46.275Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T08:42:46.333Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 160
[2025-12-24T08:42:46.335Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T08:42:46.335Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T08:42:46.335Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-24T08:42:46.336Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T08:42:46.336Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T08:42:46.336Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
[2025-12-24T08:42:46.336Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T08:42:46.337Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-24T08:42:46.339Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_d7d2f0ff Governors University
[2025-12-24T08:42:46.339Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T08:42:46.343Z] [BOT ERROR] (node:2403) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T08:42:46.489Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_d7d2f0ff Governors University in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_d7d2f0ff Governors University
[2025-12-24T08:42:48.202Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_d7d2f0ff Governors University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-24T08:42:49.702Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_d7d2f0ff Governors University (instance #1)
[2025-12-24T08:42:49.702Z] [BOT] 💾 BEFORE ARCHIVING: 669 jobs in database
[2025-12-24T08:42:49.703Z] [BOT] ✅ No jobs to archive (all 669 jobs within 7-day window)
[2025-12-24T08:42:49.712Z] [BOT] 💾 Saved posted_jobs.json: 669 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T08:42:52.713Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T08:42:52.713Z] [BOT] ⏭️  Skipping duplicate: JID_1f8ed3b8-engineer_jr-023918 (posted within 7 days)
[2025-12-24T08:42:52.714Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T08:42:52.714Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-24T08:42:52.714Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-24T08:42:52.757Z] [BOT] 📂 Loaded 1061 existing routing entries
[2025-12-24T08:42:52.800Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1062
   Timestamp: 2025-12-24T08:42:52.796Z
[2025-12-24T08:42:52.801Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T08:42:52.801Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T08:42:52.801Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-24T08:42:52.801Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-24T08:42:52.802Z] [BOT] [STATS] Channel stats saved
[2025-12-24T08:42:54.811Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2403) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*