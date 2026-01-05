# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T22:40:45.694Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T22:40:35.488Z] ========================================
[2026-01-05T22:40:35.490Z] Discord Bot Execution Log
[2026-01-05T22:40:35.490Z] Environment: GitHub Actions
[2026-01-05T22:40:35.490Z] Node Version: v20.19.6
[2026-01-05T22:40:35.490Z] ========================================
[2026-01-05T22:40:35.490Z] Environment Variables Check:
[2026-01-05T22:40:35.490Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T22:40:35.490Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.490Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T22:40:35.490Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T22:40:35.490Z] 
Multi-Channel Configuration:
[2026-01-05T22:40:35.490Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T22:40:35.491Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T22:40:35.491Z] 
Data Files Check:
[2026-01-05T22:40:35.492Z] .github/data/new_jobs.json: ✅ Exists (1 items, 16880 bytes)
[2026-01-05T22:40:35.496Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 671408 bytes)
[2026-01-05T22:40:35.497Z] 
========================================
[2026-01-05T22:40:35.497Z] Starting Enhanced Discord Bot...
[2026-01-05T22:40:35.497Z] ========================================
[2026-01-05T22:40:36.022Z] [BOT] ✅ Loaded V2 database: 1319 jobs
[2026-01-05T22:40:36.624Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T22:40:36.624Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T22:40:36.624Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T22:40:36.624Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Sales Programs at datadog
[2026-01-05T22:40:36.626Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T22:40:36.626Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T22:40:36.626Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T22:40:36.626Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T22:40:36.627Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T22:40:36.629Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T22:40:36.630Z] [BOT] 📍 [ROUTING] "Head of Sales Programs" @ datadog
[2026-01-05T22:40:36.630Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T22:40:36.634Z] [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T22:40:36.788Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Programs @ datadog in #💲・sales-jobs
[2026-01-05T22:40:36.788Z] [BOT] ✅ Industry: Head of Sales Programs @ datadog
[2026-01-05T22:40:38.450Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Programs @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T22:40:39.952Z] [BOT] 💾 Marked as posted: Head of Sales Programs @ datadog (instance #1)
[2026-01-05T22:40:39.952Z] [BOT] 💾 BEFORE ARCHIVING: 1320 jobs in database
[2026-01-05T22:40:39.953Z] [BOT] ✅ No jobs to archive (all 1320 jobs within 7-day window)
[2026-01-05T22:40:39.966Z] [BOT] 💾 Saved posted_jobs.json: 1320 active jobs
[2026-01-05T22:40:39.967Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T22:40:42.967Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T22:40:42.967Z] [BOT] ⏭️  Skipping duplicate: JID_25a027c8 (posted within 7 days)
[2026-01-05T22:40:42.967Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T22:40:42.968Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-05T22:40:42.968Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T22:40:43.021Z] [BOT] 📂 Loaded 2230 existing routing entries
[2026-01-05T22:40:43.076Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-05T22:40:43.077Z] [BOT] Total entries: 2231
   Timestamp: 2026-01-05T22:40:43.066Z
[2026-01-05T22:40:43.077Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T22:40:43.077Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T22:40:43.077Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-05T22:40:43.078Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-05T22:40:43.078Z] [BOT] [STATS] Channel stats saved
[2026-01-05T22:40:45.087Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*