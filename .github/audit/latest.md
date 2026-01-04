# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T17:05:52.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T17:05:37.642Z] ========================================
[2026-01-04T17:05:37.644Z] Discord Bot Execution Log
[2026-01-04T17:05:37.644Z] Environment: GitHub Actions
[2026-01-04T17:05:37.644Z] Node Version: v20.19.6
[2026-01-04T17:05:37.644Z] ========================================
[2026-01-04T17:05:37.644Z] Environment Variables Check:
[2026-01-04T17:05:37.644Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T17:05:37.644Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.644Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T17:05:37.645Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T17:05:37.645Z] 
Multi-Channel Configuration:
[2026-01-04T17:05:37.645Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T17:05:37.645Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T17:05:37.645Z] 
Data Files Check:
[2026-01-04T17:05:37.646Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24456 bytes)
[2026-01-04T17:05:37.650Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 622684 bytes)
[2026-01-04T17:05:37.650Z] 
========================================
[2026-01-04T17:05:37.650Z] Starting Enhanced Discord Bot...
[2026-01-04T17:05:37.650Z] ========================================
[2026-01-04T17:05:38.169Z] [BOT] ✅ Loaded V2 database: 1236 jobs
[2026-01-04T17:05:38.903Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T17:05:38.903Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T17:05:38.903Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T17:05:38.903Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T17:05:38.972Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-04T17:05:39.061Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 208
[2026-01-04T17:05:39.063Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T17:05:39.064Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T17:05:39.064Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T17:05:39.064Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T17:05:39.064Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T17:05:39.064Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T17:05:39.066Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-04T17:05:39.067Z] [BOT] ✅ Saved pending queue: 46 total (34 pending, 12 enriched, 0 posted)
[2026-01-04T17:05:39.067Z] [BOT] 🗑️ Removed 8 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (8 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-04T17:05:39.068Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-04T17:05:39.068Z] [BOT] ⏸️ Limiting to 10 jobs this run, 8 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T17:05:39.070Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T17:05:39.071Z] [BOT] 📍 [ROUTING] "Atc – Software and Platform Analyst" @ ORG_6cd9e83c
[2026-01-04T17:05:39.071Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:05:39.076Z] [BOT ERROR] (node:3192) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T17:05:39.298Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #💻・tech-jobs
[2026-01-04T17:05:39.298Z] [BOT] ✅ Industry: Atc – Software and Platform Analyst @ ORG_6cd9e83c
[2026-01-04T17:05:41.042Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #🗽・new-york
[2026-01-04T17:05:41.042Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T17:05:42.543Z] [BOT] 💾 Marked as posted: Atc – Software and Platform Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-04T17:05:42.543Z] [BOT] 💾 BEFORE ARCHIVING: 1237 jobs in database
[2026-01-04T17:05:42.544Z] [BOT] ✅ No jobs to archive (all 1237 jobs within 7-day window)
[2026-01-04T17:05:42.556Z] [BOT] 💾 Saved posted_jobs.json: 1237 active jobs
[2026-01-04T17:05:42.556Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:05:42.557Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-04T17:05:42.557Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:05:42.855Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #💻・tech-jobs
[2026-01-04T17:05:42.855Z] [BOT] ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-04T17:05:44.667Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #🌉・san-francisco
[2026-01-04T17:05:44.667Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T17:05:46.168Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-04T17:05:46.168Z] [BOT] 💾 BEFORE ARCHIVING: 1238 jobs in database
[2026-01-04T17:05:46.169Z] [BOT] ✅ No jobs to archive (all 1238 jobs within 7-day window)
[2026-01-04T17:05:46.176Z] [BOT] 💾 Saved posted_jobs.json: 1238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:05:49.177Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-04T17:05:49.178Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-04T17:05:49.178Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
[2026-01-04T17:05:49.179Z] [BOT] ✅ Loaded pending queue: 46 total (34 pending, 12 enriched, 0 posted)
[2026-01-04T17:05:49.180Z] [BOT] ✅ Saved pending queue: 46 total (34 pending, 10 enriched, 2 posted)
[2026-01-04T17:05:49.180Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T17:05:49.229Z] [BOT] 📂 Loaded 2151 existing routing entries
[2026-01-04T17:05:49.288Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2153
   Timestamp: 2026-01-04T17:05:49.275Z
📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 12
   Successful: 4
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🗽・new-york: 1 posts
     3. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-04T17:05:51.298Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3192) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*