# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T17:04:59.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T17:04:49.110Z] ========================================
[2025-12-23T17:04:49.112Z] Discord Bot Execution Log
[2025-12-23T17:04:49.112Z] Environment: GitHub Actions
[2025-12-23T17:04:49.112Z] Node Version: v20.19.6
[2025-12-23T17:04:49.112Z] ========================================
[2025-12-23T17:04:49.112Z] Environment Variables Check:
[2025-12-23T17:04:49.112Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T17:04:49.112Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T17:04:49.113Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T17:04:49.113Z] 
Multi-Channel Configuration:
[2025-12-23T17:04:49.113Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T17:04:49.113Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T17:04:49.113Z] 
Data Files Check:
[2025-12-23T17:04:49.114Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5538 bytes)
[2025-12-23T17:04:49.116Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 372288 bytes)
[2025-12-23T17:04:49.116Z] 
========================================
[2025-12-23T17:04:49.116Z] Starting Enhanced Discord Bot...
[2025-12-23T17:04:49.116Z] ========================================
[2025-12-23T17:04:49.633Z] [BOT] ✅ Loaded V2 database: 644 jobs
[2025-12-23T17:04:50.273Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T17:04:50.274Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T17:04:50.274Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T17:04:50.274Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T17:04:50.385Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 158
[2025-12-23T17:04:50.387Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T17:04:50.387Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T17:04:50.387Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-23T17:04:50.387Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T17:04:50.387Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T17:04:50.388Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T17:04:50.389Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T17:04:50.390Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a23d95bc Network Holdings
[2025-12-23T17:04:50.390Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T17:04:50.394Z] [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T17:04:50.598Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a23d95bc Network Holdings in #💻・tech-jobs
[2025-12-23T17:04:50.598Z] [BOT] ✅ Industry: Software Engineer @ ORG_a23d95bc Network Holdings
[2025-12-23T17:04:52.586Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a23d95bc Network Holdings in #🌉・san-francisco
[2025-12-23T17:04:52.586Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-23T17:04:54.085Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a23d95bc Network Holdings (instance #1)
[2025-12-23T17:04:54.086Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2025-12-23T17:04:54.087Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2025-12-23T17:04:54.092Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T17:04:57.092Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T17:04:57.092Z] [BOT] ⏭️  Skipping duplicate: JID_50a9794b (posted within 7 days)
[2025-12-23T17:04:57.093Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T17:04:57.093Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-23T17:04:57.094Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T17:04:57.136Z] [BOT] 📂 Loaded 1037 existing routing entries
[2025-12-23T17:04:57.179Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-23T17:04:57.179Z] [BOT] Total entries: 1038
   Timestamp: 2025-12-23T17:04:57.174Z
[2025-12-23T17:04:57.180Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
[2025-12-23T17:04:57.180Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T17:04:57.180Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-23T17:04:57.180Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-23T17:04:59.190Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*