# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T15:37:42.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T15:37:31.201Z] ========================================
[2026-01-01T15:37:31.203Z] Discord Bot Execution Log
[2026-01-01T15:37:31.203Z] Environment: GitHub Actions
[2026-01-01T15:37:31.203Z] Node Version: v20.19.6
[2026-01-01T15:37:31.203Z] ========================================
[2026-01-01T15:37:31.203Z] Environment Variables Check:
[2026-01-01T15:37:31.203Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T15:37:31.203Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.203Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T15:37:31.203Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T15:37:31.203Z] 
Multi-Channel Configuration:
[2026-01-01T15:37:31.203Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.203Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T15:37:31.204Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T15:37:31.204Z] 
Data Files Check:
[2026-01-01T15:37:31.204Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5094 bytes)
[2026-01-01T15:37:31.205Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 39749 bytes)
[2026-01-01T15:37:31.205Z] 
========================================
[2026-01-01T15:37:31.205Z] Starting Enhanced Discord Bot...
[2026-01-01T15:37:31.205Z] ========================================
[2026-01-01T15:37:31.664Z] [BOT] ✅ Loaded V2 database: 66 jobs
[2026-01-01T15:37:32.488Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T15:37:32.489Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T15:37:32.489Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T15:37:32.489Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T15:37:32.533Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T15:37:32.577Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 34
[2026-01-01T15:37:32.578Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T15:37:32.578Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T15:37:32.578Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T15:37:32.578Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T15:37:32.579Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T15:37:32.579Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T15:37:32.581Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - AI Driven Precision Oncology" @ ORG_9d38443e of Texas - Austin
[2026-01-01T15:37:32.581Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-01T15:37:32.585Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T15:37:32.747Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin
[2026-01-01T15:37:34.453Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-01T15:37:34.453Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T15:37:35.954Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-01T15:37:35.955Z] [BOT] 💾 BEFORE ARCHIVING: 67 jobs in database
[2026-01-01T15:37:35.955Z] [BOT] ✅ No jobs to archive (all 67 jobs within 7-day window)
[2026-01-01T15:37:35.959Z] [BOT] 💾 Saved posted_jobs.json: 67 active jobs
[2026-01-01T15:37:35.959Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T15:37:38.960Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T15:37:38.961Z] [BOT] ⏭️  Skipping duplicate: JID_18690460-oncology_r_00039870-1 (posted within 7 days)
[2026-01-01T15:37:38.961Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T15:37:38.961Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-01T15:37:38.962Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T15:37:39.005Z] [BOT] 📂 Loaded 1140 existing routing entries
[2026-01-01T15:37:39.050Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1141
   Timestamp: 2026-01-01T15:37:39.045Z
[2026-01-01T15:37:39.050Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T15:37:39.050Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T15:37:39.050Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2026-01-01T15:37:39.050Z] [BOT] [STATS] Channel stats saved
[2026-01-01T15:37:41.057Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*