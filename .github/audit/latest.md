# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T16:41:53.532Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T16:41:42.455Z] ========================================
[2025-12-23T16:41:42.457Z] Discord Bot Execution Log
[2025-12-23T16:41:42.457Z] Environment: GitHub Actions
[2025-12-23T16:41:42.457Z] Node Version: v20.19.6
[2025-12-23T16:41:42.457Z] ========================================
[2025-12-23T16:41:42.457Z] Environment Variables Check:
[2025-12-23T16:41:42.457Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T16:41:42.458Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T16:41:42.458Z] 
Multi-Channel Configuration:
[2025-12-23T16:41:42.458Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.458Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.459Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.459Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T16:41:42.459Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T16:41:42.459Z] 
Data Files Check:
[2025-12-23T16:41:42.459Z] .github/data/new_jobs.json: ✅ Exists (3 items, 6124 bytes)
[2025-12-23T16:41:42.462Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 371244 bytes)
[2025-12-23T16:41:42.462Z] 
========================================
[2025-12-23T16:41:42.462Z] Starting Enhanced Discord Bot...
[2025-12-23T16:41:42.462Z] ========================================
[2025-12-23T16:41:42.989Z] [BOT] ✅ Loaded V2 database: 642 jobs
[2025-12-23T16:41:43.636Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T16:41:43.637Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T16:41:43.637Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T16:41:43.637Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-23T16:41:43.750Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 158
[2025-12-23T16:41:43.752Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-23T16:41:43.752Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T16:41:43.752Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
[2025-12-23T16:41:43.753Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-23T16:41:43.753Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T16:41:43.753Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer 1/2 - SF @ Remi: sf, lehi
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
[2025-12-23T16:41:43.753Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T16:41:43.754Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T16:41:43.756Z] [BOT] 📍 [ROUTING] "Software Engineer 1/2 - SF" @ ORG_2d3c86e5
[2025-12-23T16:41:43.756Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T16:41:43.763Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T16:41:43.948Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 - SF @ ORG_2d3c86e5 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1/2 - SF @ ORG_2d3c86e5
[2025-12-23T16:41:45.707Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 - SF @ ORG_2d3c86e5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-23T16:41:47.208Z] [BOT] 💾 Marked as posted: Software Engineer 1/2 - SF @ ORG_2d3c86e5 (instance #1)
[2025-12-23T16:41:47.208Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2025-12-23T16:41:47.209Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2025-12-23T16:41:47.218Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
[2025-12-23T16:41:47.218Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T16:41:47.219Z] [BOT] 💾 Marked as posted: Software Engineer 1/2 @ ORG_2d3c86e5 (instance #1)
💾 BEFORE ARCHIVING: 644 jobs in database
[2025-12-23T16:41:47.219Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2025-12-23T16:41:47.225Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
[2025-12-23T16:41:47.225Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T16:41:50.225Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T16:41:50.226Z] [BOT] ⏭️  Skipping duplicate: JID_3f1c0ab8 (posted within 7 days)
[2025-12-23T16:41:50.226Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-23T16:41:50.227Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 2 enriched, 1 posted)
[2025-12-23T16:41:50.227Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T16:41:50.270Z] [BOT] 📂 Loaded 1036 existing routing entries
[2025-12-23T16:41:50.314Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1037
   Timestamp: 2025-12-23T16:41:50.309Z
[2025-12-23T16:41:50.314Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
[2025-12-23T16:41:50.314Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T16:41:50.315Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-23T16:41:50.315Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2025-12-23T16:41:50.315Z] [BOT] 2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-23T16:41:52.325Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*