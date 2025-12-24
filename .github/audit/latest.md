# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T19:04:08.117Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T19:03:58.392Z] ========================================
[2025-12-24T19:03:58.393Z] Discord Bot Execution Log
[2025-12-24T19:03:58.393Z] Environment: GitHub Actions
[2025-12-24T19:03:58.394Z] Node Version: v20.19.6
[2025-12-24T19:03:58.394Z] ========================================
[2025-12-24T19:03:58.394Z] Environment Variables Check:
[2025-12-24T19:03:58.394Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T19:03:58.394Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.394Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T19:03:58.394Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T19:03:58.394Z] 
Multi-Channel Configuration:
[2025-12-24T19:03:58.394Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.394Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.394Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T19:03:58.395Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T19:03:58.395Z] 
Data Files Check:
[2025-12-24T19:03:58.395Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5744 bytes)
[2025-12-24T19:03:58.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 391303 bytes)
[2025-12-24T19:03:58.398Z] 
========================================
[2025-12-24T19:03:58.398Z] Starting Enhanced Discord Bot...
[2025-12-24T19:03:58.398Z] ========================================
[2025-12-24T19:03:58.910Z] [BOT] ✅ Loaded V2 database: 674 jobs
[2025-12-24T19:03:59.761Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T19:03:59.762Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T19:03:59.762Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T19:03:59.762Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T19:03:59.817Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T19:03:59.876Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 151
[2025-12-24T19:03:59.877Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T19:03:59.877Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T19:03:59.878Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T19:03:59.878Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T19:03:59.878Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T19:03:59.881Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-24T19:03:59.882Z] [BOT] 📍 [ROUTING] "Product Support Representative 1" @ ORG_66279f04 National Information Services
[2025-12-24T19:03:59.882Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-24T19:03:59.887Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T19:04:00.236Z] [BOT] ✅ Created forum post: 🏢 Product Support Representative 1 @ ORG_66279f04 National Information Services in #📣・marketing-jobs
  ✅ Industry: Product Support Representative 1 @ ORG_66279f04 National Information Services
[2025-12-24T19:04:01.738Z] [BOT] 💾 Marked as posted: Product Support Representative 1 @ ORG_66279f04 National Information Services (instance #1)
[2025-12-24T19:04:01.739Z] [BOT] 💾 BEFORE ARCHIVING: 675 jobs in database
[2025-12-24T19:04:01.739Z] [BOT] ✅ No jobs to archive (all 675 jobs within 7-day window)
[2025-12-24T19:04:01.749Z] [BOT] 💾 Saved posted_jobs.json: 675 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T19:04:04.750Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T19:04:04.751Z] [BOT] ⏭️  Skipping duplicate: JID_78e37e7d-i_jr0303372 (posted within 7 days)
[2025-12-24T19:04:04.751Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T19:04:04.752Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T19:04:04.794Z] [BOT] 📂 Loaded 1067 existing routing entries
[2025-12-24T19:04:04.838Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1068
   Timestamp: 2025-12-24T19:04:04.833Z
[2025-12-24T19:04:04.839Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T19:04:04.839Z] [BOT] Total attempts: 2
   Successful: 1
   Failed: 0
   Skipped: 1
[2025-12-24T19:04:04.839Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-24T19:04:04.839Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
[2025-12-24T19:04:04.839Z] [BOT] 1. #📣・marketing-jobs: 1 posts
[2025-12-24T19:04:04.839Z] [BOT] [STATS] Channel stats saved
[2025-12-24T19:04:06.856Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*