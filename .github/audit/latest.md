# Discord Bot Execution Audit
**Timestamp:** 2025-12-26T10:39:27.550Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-26T10:39:09.734Z] ========================================
[2025-12-26T10:39:09.736Z] Discord Bot Execution Log
[2025-12-26T10:39:09.736Z] Environment: GitHub Actions
[2025-12-26T10:39:09.736Z] Node Version: v20.19.6
[2025-12-26T10:39:09.736Z] ========================================
[2025-12-26T10:39:09.736Z] Environment Variables Check:
[2025-12-26T10:39:09.736Z] DISCORD_TOKEN: ✅ Set
[2025-12-26T10:39:09.736Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.736Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-26T10:39:09.736Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-26T10:39:09.736Z] 
Multi-Channel Configuration:
[2025-12-26T10:39:09.736Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.736Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.736Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.736Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-26T10:39:09.737Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-26T10:39:09.737Z] 
Data Files Check:
[2025-12-26T10:39:09.737Z] .github/data/new_jobs.json: ✅ Exists (3 items, 8600 bytes)
[2025-12-26T10:39:09.740Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 395544 bytes)
[2025-12-26T10:39:09.740Z] 
========================================
[2025-12-26T10:39:09.740Z] Starting Enhanced Discord Bot...
[2025-12-26T10:39:09.740Z] ========================================
[2025-12-26T10:39:10.171Z] [BOT] ✅ Loaded V2 database: 681 jobs
[2025-12-26T10:39:10.978Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-26T10:39:10.978Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-26T10:39:10.979Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-26T10:39:10.979Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-26T10:39:11.035Z] [BOT] 🧹 Cleaned up 3 jobs older than 7 days
[2025-12-26T10:39:11.088Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 88
[2025-12-26T10:39:11.089Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-26T10:39:11.089Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-26T10:39:11.090Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-26T10:39:11.090Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-26T10:39:11.091Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-26T10:39:11.094Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-26T10:39:11.095Z] [BOT] 📍 [ROUTING] "Metal Machine Operator" @ ORG_ce7b2c92
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-26T10:39:11.112Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-26T10:39:11.460Z] [BOT] ✅ Created forum post: 🏢 Metal Machine Operator @ ORG_ce7b2c92 in #📣・marketing-jobs
[2025-12-26T10:39:11.461Z] [BOT] ✅ Industry: Metal Machine Operator @ ORG_ce7b2c92
[2025-12-26T10:39:13.295Z] [BOT] ✅ Created forum post: 🏢 Metal Machine Operator @ ORG_ce7b2c92 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-26T10:39:14.795Z] [BOT] 💾 Marked as posted: Metal Machine Operator @ ORG_ce7b2c92 (instance #1)
[2025-12-26T10:39:14.795Z] [BOT] 💾 BEFORE ARCHIVING: 682 jobs in database
[2025-12-26T10:39:14.796Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-26T10:39:14.802Z] [BOT] 📦 Archived 190 jobs to 2025-12.json (190 total in archive)
[2025-12-26T10:39:14.802Z] [BOT] ✅ Archiving complete: 190 archived, 492 active
[2025-12-26T10:39:14.806Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-26T10:39:17.806Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-26T10:39:17.807Z] [BOT] 📍 [ROUTING] "Driver – Washington" @ ORG_3cdb4ad6
[2025-12-26T10:39:17.807Z] [BOT] Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-26T10:39:18.186Z] [BOT] ✅ Created forum post: 🏢 Driver – Washington @ ORG_3cdb4ad6 in #📁・JID_e938df7b
[2025-12-26T10:39:18.187Z] [BOT] ✅ Industry: Driver – Washington @ ORG_3cdb4ad6
[2025-12-26T10:39:19.861Z] [BOT] ✅ Created forum post: 🏢 Driver – Washington @ ORG_3cdb4ad6 in #💻・remote-usa
[2025-12-26T10:39:19.861Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-26T10:39:21.361Z] [BOT] 💾 Marked as posted: Driver – Washington @ ORG_3cdb4ad6 (instance #1)
[2025-12-26T10:39:21.361Z] [BOT] 💾 BEFORE ARCHIVING: 493 jobs in database
[2025-12-26T10:39:21.362Z] [BOT] ✅ No jobs to archive (all 493 jobs within 7-day window)
[2025-12-26T10:39:21.366Z] [BOT] 💾 Saved posted_jobs.json: 493 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-26T10:39:24.368Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-26T10:39:24.368Z] [BOT] ⏭️  Skipping duplicate: JID_3f2ad7f3 (posted within 7 days)
⏭️  Skipping duplicate: JID_e173bbe5 (posted within 7 days)
[2025-12-26T10:39:24.368Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-26T10:39:24.369Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-26T10:39:24.369Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-26T10:39:24.413Z] [BOT] 📂 Loaded 1074 existing routing entries
[2025-12-26T10:39:24.456Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-26T10:39:24.456Z] [BOT] Total entries: 1076
   Timestamp: 2025-12-26T10:39:24.452Z
[2025-12-26T10:39:24.457Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bda0a545.jsonl
[2025-12-26T10:39:24.457Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-26T10:39:24.457Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2025-12-26T10:39:24.457Z] [BOT] 1. #💻・remote-usa: 2 posts
     2. #📣・marketing-jobs: 1 posts
     3. #📁・JID_e938df7b: 1 posts
[2025-12-26T10:39:24.457Z] [BOT] [STATS] Channel stats saved
[2025-12-26T10:39:26.467Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*