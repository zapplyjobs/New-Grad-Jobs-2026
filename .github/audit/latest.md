# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T13:06:13.330Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T13:05:55.385Z] ========================================
[2026-01-01T13:05:55.387Z] Discord Bot Execution Log
[2026-01-01T13:05:55.387Z] Environment: GitHub Actions
[2026-01-01T13:05:55.387Z] Node Version: v20.19.6
[2026-01-01T13:05:55.387Z] ========================================
[2026-01-01T13:05:55.387Z] Environment Variables Check:
[2026-01-01T13:05:55.387Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T13:05:55.387Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.387Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T13:05:55.387Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T13:05:55.387Z] 
Multi-Channel Configuration:
[2026-01-01T13:05:55.388Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T13:05:55.388Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T13:05:55.388Z] 
Data Files Check:
[2026-01-01T13:05:55.388Z] .github/data/new_jobs.json: ✅ Exists (2 items, 9529 bytes)
[2026-01-01T13:05:55.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 35736 bytes)
[2026-01-01T13:05:55.389Z] 
========================================
[2026-01-01T13:05:55.389Z] Starting Enhanced Discord Bot...
[2026-01-01T13:05:55.389Z] ========================================
[2026-01-01T13:05:55.851Z] [BOT] ✅ Loaded V2 database: 60 jobs
[2026-01-01T13:05:56.316Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T13:05:56.317Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T13:05:56.317Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T13:05:56.318Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T13:05:56.360Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T13:05:56.405Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 34
[2026-01-01T13:05:56.406Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T13:05:56.406Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T13:05:56.406Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T13:05:56.407Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T13:05:56.407Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T13:05:56.409Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T13:05:56.410Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development" @ ORG_977ad75f
[2026-01-01T13:05:56.410Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-01T13:05:56.414Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T13:05:56.836Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f in #🤖・ai-jobs
[2026-01-01T13:05:56.836Z] [BOT] ✅ Industry: Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f
[2026-01-01T13:05:58.593Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-01T13:06:00.094Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f (instance #1)
💾 BEFORE ARCHIVING: 61 jobs in database
[2026-01-01T13:06:00.095Z] [BOT] ✅ No jobs to archive (all 61 jobs within 7-day window)
[2026-01-01T13:06:00.099Z] [BOT] 💾 Saved posted_jobs.json: 61 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T13:06:03.100Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-01T13:06:03.100Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
[2026-01-01T13:06:03.100Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-01T13:06:03.646Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #💲・sales-jobs
[2026-01-01T13:06:03.646Z] [BOT] ✅ Industry: Operations Analyst @ ORG_ad6fabcb
[2026-01-01T13:06:05.360Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #🤠・austin
[2026-01-01T13:06:05.360Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T13:06:06.861Z] [BOT] 💾 Marked as posted: Operations Analyst @ ORG_ad6fabcb (instance #1)
[2026-01-01T13:06:06.861Z] [BOT] 💾 BEFORE ARCHIVING: 62 jobs in database
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-01T13:06:06.862Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-01T13:06:06.862Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T13:06:09.864Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T13:06:09.864Z] [BOT] ⏭️  Skipping duplicate: JID_eabefd27-development_4948673-2 (posted within 7 days)
⏭️  Skipping duplicate: JID_59941b58-cx_2001-job-8088 (posted within 7 days)
[2026-01-01T13:06:09.864Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T13:06:09.865Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-01T13:06:09.865Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T13:06:09.910Z] [BOT] 📂 Loaded 1134 existing routing entries
[2026-01-01T13:06:09.956Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1136
[2026-01-01T13:06:09.956Z] [BOT] Timestamp: 2026-01-01T13:06:09.951Z
[2026-01-01T13:06:09.956Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T13:06:09.956Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T13:06:09.956Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T13:06:09.956Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-01T13:06:09.957Z] [BOT] 2. #🗽・new-york: 1 posts
     3. #💲・sales-jobs: 1 posts
     4. #🤠・austin: 1 posts
[2026-01-01T13:06:09.957Z] [BOT] [STATS] Channel stats saved
[2026-01-01T13:06:11.967Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*