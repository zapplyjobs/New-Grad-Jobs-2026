# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T21:36:06.869Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T21:35:55.752Z] ========================================
[2026-01-01T21:35:55.754Z] Discord Bot Execution Log
[2026-01-01T21:35:55.754Z] Environment: GitHub Actions
[2026-01-01T21:35:55.754Z] Node Version: v20.19.6
[2026-01-01T21:35:55.754Z] ========================================
[2026-01-01T21:35:55.754Z] Environment Variables Check:
[2026-01-01T21:35:55.754Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T21:35:55.754Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.754Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T21:35:55.754Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T21:35:55.754Z] 
Multi-Channel Configuration:
[2026-01-01T21:35:55.754Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T21:35:55.755Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T21:35:55.755Z] 
Data Files Check:
[2026-01-01T21:35:55.756Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5200 bytes)
[2026-01-01T21:35:55.756Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 51263 bytes)
[2026-01-01T21:35:55.756Z] 
========================================
[2026-01-01T21:35:55.756Z] Starting Enhanced Discord Bot...
[2026-01-01T21:35:55.756Z] ========================================
[2026-01-01T21:35:56.269Z] [BOT] ✅ Loaded V2 database: 85 jobs
[2026-01-01T21:35:56.885Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T21:35:56.886Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T21:35:56.886Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T21:35:56.886Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T21:35:56.928Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T21:35:56.976Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 37
[2026-01-01T21:35:56.977Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T21:35:56.977Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T21:35:56.977Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T21:35:56.977Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T21:35:56.978Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T21:35:56.980Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T21:35:56.981Z] [BOT] 📍 [ROUTING] "SCA Telecommunications Mechanic 1" @ ORG_7efd3259
[2026-01-01T21:35:56.981Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T21:35:56.998Z] [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T21:35:57.203Z] [BOT] ✅ Created forum post: 🏢 SCA Telecommunications Mechanic 1 @ ORG_7efd3259 in #💻・tech-jobs
[2026-01-01T21:35:57.203Z] [BOT] ✅ Industry: SCA Telecommunications Mechanic 1 @ ORG_7efd3259
[2026-01-01T21:35:59.000Z] [BOT] ✅ Created forum post: 🏢 SCA Telecommunications Mechanic 1 @ ORG_7efd3259 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-01T21:36:00.501Z] [BOT] 💾 Marked as posted: SCA Telecommunications Mechanic 1 @ ORG_7efd3259 (instance #1)
[2026-01-01T21:36:00.501Z] [BOT] 💾 BEFORE ARCHIVING: 86 jobs in database
[2026-01-01T21:36:00.501Z] [BOT] ✅ No jobs to archive (all 86 jobs within 7-day window)
[2026-01-01T21:36:00.514Z] [BOT] 💾 Saved posted_jobs.json: 86 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T21:36:03.515Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T21:36:03.516Z] [BOT] ⏭️  Skipping duplicate: JID_4caa57dd (posted within 7 days)
[2026-01-01T21:36:03.516Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T21:36:03.517Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-01T21:36:03.517Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T21:36:03.559Z] [BOT] 📂 Loaded 1159 existing routing entries
[2026-01-01T21:36:03.604Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1160
[2026-01-01T21:36:03.604Z] [BOT] Timestamp: 2026-01-01T21:36:03.599Z
[2026-01-01T21:36:03.605Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 2
   Successful: 2
[2026-01-01T21:36:03.605Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-01T21:36:03.605Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-01T21:36:03.605Z] [BOT] Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🦢・los-angeles: 1 posts
[2026-01-01T21:36:03.606Z] [BOT] [STATS] Channel stats saved
[2026-01-01T21:36:05.615Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*