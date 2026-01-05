# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T17:25:48.220Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T17:25:36.871Z] ========================================
[2026-01-05T17:25:36.872Z] Discord Bot Execution Log
[2026-01-05T17:25:36.873Z] Environment: GitHub Actions
[2026-01-05T17:25:36.873Z] Node Version: v20.19.6
[2026-01-05T17:25:36.873Z] ========================================
[2026-01-05T17:25:36.873Z] Environment Variables Check:
[2026-01-05T17:25:36.873Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T17:25:36.873Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.873Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T17:25:36.873Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T17:25:36.873Z] 
Multi-Channel Configuration:
[2026-01-05T17:25:36.873Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.873Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T17:25:36.874Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T17:25:36.874Z] 
Data Files Check:
[2026-01-05T17:25:36.874Z] .github/data/new_jobs.json: ✅ Exists (10 items, 17829 bytes)
[2026-01-05T17:25:36.879Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 659532 bytes)
[2026-01-05T17:25:36.879Z] 
========================================
[2026-01-05T17:25:36.879Z] Starting Enhanced Discord Bot...
[2026-01-05T17:25:36.879Z] ========================================
[2026-01-05T17:25:37.392Z] [BOT] ✅ Loaded V2 database: 1295 jobs
[2026-01-05T17:25:38.037Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T17:25:38.037Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T17:25:38.037Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T17:25:38.038Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:25:38.038Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T17:25:38.038Z] [BOT] [BOT] 🔍 Sample enriched job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-05T17:25:38.040Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T17:25:38.041Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T17:25:38.041Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T17:25:38.041Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
⏭️ Skipping already posted: Applied Scientist 1 - Amazon at Amazon
[2026-01-05T17:25:38.041Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
📬 Found 15 new jobs (5 already posted)...
[2026-01-05T17:25:38.041Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-05T17:25:38.041Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:25:38.042Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:25:38.042Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:25:38.042Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:25:38.043Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:25:38.044Z] [BOT] ✅ Saved pending queue: 36 total (30 pending, 6 enriched, 0 posted)
[2026-01-05T17:25:38.045Z] [BOT] 🗑️ Removed 14 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (14 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T17:25:38.045Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T17:25:38.045Z] [BOT] ⏸️ Limiting to 10 jobs this run, 14 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T17:25:38.047Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T17:25:38.048Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ vercel
[2026-01-05T17:25:38.048Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T17:25:38.052Z] [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T17:25:38.353Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ vercel in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive @ vercel
[2026-01-05T17:25:40.215Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ vercel in #🌉・san-francisco
[2026-01-05T17:25:40.216Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T17:25:41.715Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ vercel (instance #1)
[2026-01-05T17:25:41.715Z] [BOT] 💾 BEFORE ARCHIVING: 1296 jobs in database
[2026-01-05T17:25:41.717Z] [BOT] ✅ No jobs to archive (all 1296 jobs within 7-day window)
[2026-01-05T17:25:41.730Z] [BOT] 💾 Saved posted_jobs.json: 1296 active jobs
[2026-01-05T17:25:41.730Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:25:44.731Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T17:25:44.731Z] [BOT] ⏭️  Skipping duplicate: JID_14eae989 (posted within 7 days)
[2026-01-05T17:25:44.732Z] [BOT] ✅ Loaded pending queue: 36 total (30 pending, 6 enriched, 0 posted)
[2026-01-05T17:25:44.733Z] [BOT] ✅ Saved pending queue: 36 total (30 pending, 5 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T17:25:44.785Z] [BOT] 📂 Loaded 2203 existing routing entries
[2026-01-05T17:25:44.840Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2204
   Timestamp: 2026-01-05T17:25:44.830Z
[2026-01-05T17:25:44.840Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T17:25:44.840Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-05T17:25:44.841Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-05T17:25:46.850Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*