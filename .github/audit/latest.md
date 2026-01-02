# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T06:04:53.875Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T06:04:38.880Z] ========================================
[2026-01-02T06:04:38.882Z] Discord Bot Execution Log
[2026-01-02T06:04:38.882Z] Environment: GitHub Actions
[2026-01-02T06:04:38.882Z] Node Version: v20.19.6
[2026-01-02T06:04:38.882Z] ========================================
[2026-01-02T06:04:38.882Z] Environment Variables Check:
[2026-01-02T06:04:38.882Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T06:04:38.882Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.882Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T06:04:38.883Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T06:04:38.883Z] 
Multi-Channel Configuration:
[2026-01-02T06:04:38.883Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T06:04:38.883Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T06:04:38.884Z] 
Data Files Check:
[2026-01-02T06:04:38.884Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4598 bytes)
[2026-01-02T06:04:38.885Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 63785 bytes)
[2026-01-02T06:04:38.885Z] 
========================================
[2026-01-02T06:04:38.885Z] Starting Enhanced Discord Bot...
[2026-01-02T06:04:38.885Z] ========================================
[2026-01-02T06:04:39.392Z] [BOT] ✅ Loaded V2 database: 106 jobs
[2026-01-02T06:04:40.275Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T06:04:40.275Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T06:04:40.276Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T06:04:40.276Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T06:04:40.318Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-02T06:04:40.365Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 40
[2026-01-02T06:04:40.367Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T06:04:40.367Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T06:04:40.367Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-02T06:04:40.368Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-02T06:04:40.368Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T06:04:40.369Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-02T06:04:40.371Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer 1" @ ORG_41a6741einghouse Electric Company
[2026-01-02T06:04:40.371Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T06:04:40.375Z] [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T06:04:40.696Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company
[2026-01-02T06:04:42.410Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #🤠・austin
[2026-01-02T06:04:42.410Z] [BOT] ✅ Location: 🤠・austin
[2026-01-02T06:04:43.910Z] [BOT] 💾 Marked as posted: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-02T06:04:43.910Z] [BOT] 💾 BEFORE ARCHIVING: 107 jobs in database
[2026-01-02T06:04:43.910Z] [BOT] ✅ No jobs to archive (all 107 jobs within 7-day window)
[2026-01-02T06:04:43.946Z] [BOT] 💾 Saved posted_jobs.json: 107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T06:04:43.947Z] [BOT] 📍 [ROUTING] "Associate – Data Cloud Solutions" @ ORG_f0ac255c Global
[2026-01-02T06:04:43.947Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T06:04:44.199Z] [BOT] ✅ Created forum post: 🏢 Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #💻・tech-jobs
[2026-01-02T06:04:44.199Z] [BOT] ✅ Industry: Associate – Data Cloud Solutions @ ORG_f0ac255c Global
[2026-01-02T06:04:46.061Z] [BOT] ✅ Created forum post: 🏢 Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #💻・remote-usa
[2026-01-02T06:04:46.062Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T06:04:47.561Z] [BOT] 💾 Marked as posted: Associate – Data Cloud Solutions @ ORG_f0ac255c Global (instance #1)
[2026-01-02T06:04:47.562Z] [BOT] 💾 BEFORE ARCHIVING: 108 jobs in database
✅ No jobs to archive (all 108 jobs within 7-day window)
[2026-01-02T06:04:47.563Z] [BOT] 💾 Saved posted_jobs.json: 108 active jobs
[2026-01-02T06:04:47.563Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T06:04:50.564Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-02T06:04:50.564Z] [BOT] ⏭️  Skipping duplicate: JID_292d0ae8 (posted within 7 days)
[2026-01-02T06:04:50.564Z] [BOT] ⏭️  Skipping duplicate: JID_cea08a83 (posted within 7 days)
[2026-01-02T06:04:50.565Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T06:04:50.565Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-02T06:04:50.565Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T06:04:50.608Z] [BOT] 📂 Loaded 1178 existing routing entries
[2026-01-02T06:04:50.655Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-02T06:04:50.656Z] [BOT] Total entries: 1180
   Timestamp: 2026-01-02T06:04:50.649Z
[2026-01-02T06:04:50.656Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T06:04:50.656Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-02T06:04:50.656Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T06:04:50.657Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
[2026-01-02T06:04:50.657Z] [BOT] 2. #🤠・austin: 1 posts
     3. #💻・remote-usa: 1 posts
[2026-01-02T06:04:50.657Z] [BOT] [STATS] Channel stats saved
[2026-01-02T06:04:52.669Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*