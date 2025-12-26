# Discord Bot Execution Audit
**Timestamp:** 2025-12-26T17:36:08.121Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-26T17:35:50.178Z] ========================================
[2025-12-26T17:35:50.180Z] Discord Bot Execution Log
[2025-12-26T17:35:50.180Z] Environment: GitHub Actions
[2025-12-26T17:35:50.180Z] Node Version: v20.19.6
[2025-12-26T17:35:50.180Z] ========================================
[2025-12-26T17:35:50.180Z] Environment Variables Check:
[2025-12-26T17:35:50.180Z] DISCORD_TOKEN: ✅ Set
[2025-12-26T17:35:50.180Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.180Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-26T17:35:50.180Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-26T17:35:50.181Z] 
Multi-Channel Configuration:
[2025-12-26T17:35:50.181Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-26T17:35:50.181Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-26T17:35:50.181Z] 
Data Files Check:
[2025-12-26T17:35:50.182Z] .github/data/new_jobs.json: ✅ Exists (3 items, 6901 bytes)
[2025-12-26T17:35:50.184Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 288528 bytes)
[2025-12-26T17:35:50.184Z] 
========================================
[2025-12-26T17:35:50.184Z] Starting Enhanced Discord Bot...
[2025-12-26T17:35:50.184Z] ========================================
[2025-12-26T17:35:50.700Z] [BOT] ✅ Loaded V2 database: 494 jobs
[2025-12-26T17:35:51.479Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-26T17:35:51.479Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-26T17:35:51.479Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-26T17:35:51.480Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-26T17:35:51.528Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-26T17:35:51.580Z] [BOT] ✅ Export complete: Added 1, Skipped 2, Total 84
[2025-12-26T17:35:51.582Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-26T17:35:51.582Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-26T17:35:51.582Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
[2025-12-26T17:35:51.582Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-26T17:35:51.583Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-26T17:35:51.583Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-26T17:35:51.586Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-26T17:35:51.587Z] [BOT] 📍 [ROUTING] "Research IS Business Systems Analyst" @ Children's Hospital of Philadelphia
[2025-12-26T17:35:51.587Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-26T17:35:51.591Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-26T17:35:51.786Z] [BOT] ✅ Created forum post: 🏢 Research IS Business Systems Analyst @ Children's Hospital of Philadelphia in #🩺・healthcare-jobs
  ✅ Industry: Research IS Business Systems Analyst @ Children's Hospital of Philadelphia
[2025-12-26T17:35:53.666Z] [BOT] ✅ Created forum post: 🏢 Research IS Business Systems Analyst @ Children's Hospital of Philadelphia in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-26T17:35:55.165Z] [BOT] 💾 Marked as posted: Research IS Business Systems Analyst @ Children's Hospital of Philadelphia (instance #1)
[2025-12-26T17:35:55.166Z] [BOT] 💾 BEFORE ARCHIVING: 495 jobs in database
[2025-12-26T17:35:55.166Z] [BOT] ✅ No jobs to archive (all 495 jobs within 7-day window)
[2025-12-26T17:35:55.174Z] [BOT] 💾 Saved posted_jobs.json: 495 active jobs
[2025-12-26T17:35:55.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-26T17:35:58.175Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-26T17:35:58.176Z] [BOT] 📍 [ROUTING] "Senior Backend Developer" @ ORG_976dbfca
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-26T17:35:58.176Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-26T17:35:58.691Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Developer @ ORG_976dbfca in #🤖・ai-jobs
[2025-12-26T17:35:58.691Z] [BOT] ✅ Industry: Senior Backend Developer @ ORG_976dbfca
[2025-12-26T17:36:00.374Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Developer @ ORG_976dbfca in #💻・remote-usa
[2025-12-26T17:36:00.375Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-26T17:36:01.875Z] [BOT] 💾 Marked as posted: Senior Backend Developer @ ORG_976dbfca (instance #1)
[2025-12-26T17:36:01.875Z] [BOT] 💾 BEFORE ARCHIVING: 496 jobs in database
[2025-12-26T17:36:01.876Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2025-12-26T17:36:01.882Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
[2025-12-26T17:36:01.882Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-26T17:36:04.882Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-26T17:36:04.882Z] [BOT] ⏭️  Skipping duplicate: JID_f8426aa3-analyst_1021184-1 (posted within 7 days)
[2025-12-26T17:36:04.882Z] [BOT] ⏭️  Skipping duplicate: JID_15f49163 (posted within 7 days)
[2025-12-26T17:36:04.883Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-26T17:36:04.883Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
[2025-12-26T17:36:04.884Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-26T17:36:04.927Z] [BOT] 📂 Loaded 1077 existing routing entries
[2025-12-26T17:36:04.974Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-26T17:36:04.974Z] [BOT] Total entries: 1079
   Timestamp: 2025-12-26T17:36:04.968Z
[2025-12-26T17:36:04.974Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bda0a545.jsonl
[2025-12-26T17:36:04.974Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-26T17:36:04.975Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-26T17:36:04.975Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #🩺・healthcare-jobs: 1 posts
[2025-12-26T17:36:04.975Z] [BOT] 3. #🤖・ai-jobs: 1 posts
[2025-12-26T17:36:04.975Z] [BOT] [STATS] Channel stats saved
[2025-12-26T17:36:06.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*