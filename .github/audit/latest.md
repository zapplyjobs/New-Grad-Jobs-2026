# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T10:39:19.771Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T10:39:09.284Z] ========================================
[2025-12-24T10:39:09.286Z] Discord Bot Execution Log
[2025-12-24T10:39:09.286Z] Environment: GitHub Actions
[2025-12-24T10:39:09.286Z] Node Version: v20.19.6
[2025-12-24T10:39:09.286Z] ========================================
[2025-12-24T10:39:09.286Z] Environment Variables Check:
[2025-12-24T10:39:09.286Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T10:39:09.286Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.286Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T10:39:09.286Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T10:39:09.286Z] 
Multi-Channel Configuration:
[2025-12-24T10:39:09.287Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T10:39:09.287Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T10:39:09.287Z] 
Data Files Check:
[2025-12-24T10:39:09.288Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1461 bytes)
[2025-12-24T10:39:09.290Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 388344 bytes)
[2025-12-24T10:39:09.290Z] 
========================================
[2025-12-24T10:39:09.290Z] Starting Enhanced Discord Bot...
[2025-12-24T10:39:09.290Z] ========================================
[2025-12-24T10:39:09.798Z] [BOT] ✅ Loaded V2 database: 669 jobs
[2025-12-24T10:39:10.217Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T10:39:10.217Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T10:39:10.217Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T10:39:10.218Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T10:39:10.273Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-24T10:39:10.333Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 161
[2025-12-24T10:39:10.334Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T10:39:10.335Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T10:39:10.335Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T10:39:10.335Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T10:39:10.336Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T10:39:10.336Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-24T10:39:10.338Z] [BOT] 📍 [ROUTING] "General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds" @ ORG_1bb6fcfb
[2025-12-24T10:39:10.338Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-24T10:39:10.355Z] [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T10:39:10.754Z] [BOT] ✅ Created forum post: 🏢 General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-24T10:39:10.754Z] [BOT] ✅ Industry: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb
[2025-12-24T10:39:12.403Z] [BOT] ✅ Created forum post: 🏢 General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-24T10:39:12.404Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-24T10:39:13.905Z] [BOT] 💾 Marked as posted: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb (instance #1)
[2025-12-24T10:39:13.905Z] [BOT] 💾 BEFORE ARCHIVING: 670 jobs in database
[2025-12-24T10:39:13.906Z] [BOT] ✅ No jobs to archive (all 670 jobs within 7-day window)
[2025-12-24T10:39:13.922Z] [BOT] 💾 Saved posted_jobs.json: 670 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T10:39:16.923Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T10:39:16.924Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_28a73263 (posted within 7 days)
[2025-12-24T10:39:16.924Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T10:39:16.925Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-24T10:39:16.925Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T10:39:16.971Z] [BOT] 📂 Loaded 1062 existing routing entries
[2025-12-24T10:39:17.016Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1063
[2025-12-24T10:39:17.016Z] [BOT] Timestamp: 2025-12-24T10:39:17.011Z
[2025-12-24T10:39:17.016Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
   Total attempts: 3
[2025-12-24T10:39:17.016Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T10:39:17.017Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-24T10:39:17.017Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2025-12-24T10:39:17.017Z] [BOT] [STATS] Channel stats saved
[2025-12-24T10:39:19.028Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*