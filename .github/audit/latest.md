# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T18:43:59.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T18:43:41.084Z] ========================================
[2026-01-01T18:43:41.086Z] Discord Bot Execution Log
[2026-01-01T18:43:41.086Z] Environment: GitHub Actions
[2026-01-01T18:43:41.086Z] Node Version: v20.19.6
[2026-01-01T18:43:41.086Z] ========================================
[2026-01-01T18:43:41.086Z] Environment Variables Check:
[2026-01-01T18:43:41.086Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T18:43:41.086Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.086Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T18:43:41.086Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T18:43:41.087Z] 
Multi-Channel Configuration:
[2026-01-01T18:43:41.087Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T18:43:41.087Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T18:43:41.087Z] 
Data Files Check:
[2026-01-01T18:43:41.088Z] .github/data/new_jobs.json: ✅ Exists (2 items, 31804 bytes)
[2026-01-01T18:43:41.088Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 44895 bytes)
[2026-01-01T18:43:41.088Z] 
========================================
[2026-01-01T18:43:41.088Z] Starting Enhanced Discord Bot...
[2026-01-01T18:43:41.089Z] ========================================
[2026-01-01T18:43:41.596Z] [BOT] ✅ Loaded V2 database: 74 jobs
[2026-01-01T18:43:42.337Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T18:43:42.338Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T18:43:42.338Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T18:43:42.338Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T18:43:42.381Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T18:43:42.429Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 36
[2026-01-01T18:43:42.430Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T18:43:42.430Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T18:43:42.430Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T18:43:42.431Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T18:43:42.431Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T18:43:42.434Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T18:43:42.435Z] [BOT] 📍 [ROUTING] "Java City – Hhs - AM Food Service Worker - Western Carolina University" @ ORG_e93b6c76
[2026-01-01T18:43:42.435Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T18:43:42.440Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T18:43:42.915Z] [BOT] ✅ Created forum post: 🏢 Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #💻・tech-jobs
[2026-01-01T18:43:42.915Z] [BOT] ✅ Industry: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76
[2026-01-01T18:43:44.750Z] [BOT] ✅ Created forum post: 🏢 Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #💻・remote-usa
[2026-01-01T18:43:44.750Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T18:43:46.250Z] [BOT] 💾 Marked as posted: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 (instance #1)
[2026-01-01T18:43:46.250Z] [BOT] 💾 BEFORE ARCHIVING: 75 jobs in database
[2026-01-01T18:43:46.251Z] [BOT] ✅ No jobs to archive (all 75 jobs within 7-day window)
[2026-01-01T18:43:46.261Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2026-01-01T18:43:46.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T18:43:49.262Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T18:43:49.263Z] [BOT] 📍 [ROUTING] "Associate Scientist or Geoscientist - Emergency Response Team" @ ORG_48266817 Solutions
[2026-01-01T18:43:49.263Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T18:43:49.638Z] [BOT] ✅ Created forum post: 🏢 Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions in #📣・marketing-jobs
  ✅ Industry: Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions
[2026-01-01T18:43:51.428Z] [BOT] ✅ Created forum post: 🏢 Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T18:43:52.929Z] [BOT] 💾 Marked as posted: Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions (instance #1)
[2026-01-01T18:43:52.929Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
✅ No jobs to archive (all 76 jobs within 7-day window)
[2026-01-01T18:43:52.932Z] [BOT] 💾 Saved posted_jobs.json: 76 active jobs
[2026-01-01T18:43:52.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T18:43:55.933Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T18:43:55.933Z] [BOT] ⏭️  Skipping duplicate: JID_3cfbf2c4 (posted within 7 days)
[2026-01-01T18:43:55.933Z] [BOT] ⏭️  Skipping duplicate: JID_be0fbb97 (posted within 7 days)
[2026-01-01T18:43:55.934Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T18:43:55.935Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-01T18:43:55.935Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T18:43:55.978Z] [BOT] 📂 Loaded 1148 existing routing entries
[2026-01-01T18:43:56.024Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T18:43:56.024Z] [BOT] Total entries: 1150
   Timestamp: 2026-01-01T18:43:56.018Z
[2026-01-01T18:43:56.025Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T18:43:56.025Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T18:43:56.025Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #💻・tech-jobs: 1 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-01T18:43:56.026Z] [BOT] [STATS] Channel stats saved
[2026-01-01T18:43:58.037Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*