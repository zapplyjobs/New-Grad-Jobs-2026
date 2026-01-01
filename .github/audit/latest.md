# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T16:04:25.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T16:04:14.463Z] ========================================
[2026-01-01T16:04:14.465Z] Discord Bot Execution Log
[2026-01-01T16:04:14.465Z] Environment: GitHub Actions
[2026-01-01T16:04:14.465Z] Node Version: v20.19.6
[2026-01-01T16:04:14.465Z] ========================================
[2026-01-01T16:04:14.465Z] Environment Variables Check:
[2026-01-01T16:04:14.465Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T16:04:14.466Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T16:04:14.466Z] 
Multi-Channel Configuration:
[2026-01-01T16:04:14.466Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.466Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.467Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T16:04:14.467Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T16:04:14.467Z] 
Data Files Check:
[2026-01-01T16:04:14.467Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5657 bytes)
[2026-01-01T16:04:14.468Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 40492 bytes)
[2026-01-01T16:04:14.468Z] 
========================================
[2026-01-01T16:04:14.468Z] Starting Enhanced Discord Bot...
[2026-01-01T16:04:14.468Z] ========================================
[2026-01-01T16:04:14.983Z] [BOT] ✅ Loaded V2 database: 67 jobs
[2026-01-01T16:04:15.541Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T16:04:15.541Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T16:04:15.541Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T16:04:15.542Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T16:04:15.583Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T16:04:15.627Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 34
[2026-01-01T16:04:15.628Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T16:04:15.628Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T16:04:15.628Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T16:04:15.629Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T16:04:15.629Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T16:04:15.629Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T16:04:15.632Z] [BOT] 📍 [ROUTING] "Assistant Programmatic" @ ORG_ae835968 media
[2026-01-01T16:04:15.632Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-01T16:04:15.649Z] [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T16:04:15.837Z] [BOT] ✅ Created forum post: 🏢 Assistant Programmatic @ ORG_ae835968 media in #🤖・ai-jobs
[2026-01-01T16:04:15.837Z] [BOT] ✅ Industry: Assistant Programmatic @ ORG_ae835968 media
[2026-01-01T16:04:17.846Z] [BOT] ✅ Created forum post: 🏢 Assistant Programmatic @ ORG_ae835968 media in #🗽・new-york
[2026-01-01T16:04:17.846Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-01T16:04:19.345Z] [BOT] 💾 Marked as posted: Assistant Programmatic @ ORG_ae835968 media (instance #1)
[2026-01-01T16:04:19.346Z] [BOT] 💾 BEFORE ARCHIVING: 68 jobs in database
[2026-01-01T16:04:19.346Z] [BOT] ✅ No jobs to archive (all 68 jobs within 7-day window)
[2026-01-01T16:04:19.351Z] [BOT] 💾 Saved posted_jobs.json: 68 active jobs
[2026-01-01T16:04:19.351Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T16:04:22.352Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T16:04:22.353Z] [BOT] ⏭️  Skipping duplicate: JID_3b236781-programmatic_r0015427 (posted within 7 days)
[2026-01-01T16:04:22.353Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T16:04:22.354Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T16:04:22.396Z] [BOT] 📂 Loaded 1141 existing routing entries
[2026-01-01T16:04:22.440Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1142
   Timestamp: 2026-01-01T16:04:22.435Z
[2026-01-01T16:04:22.440Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T16:04:22.441Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T16:04:22.441Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-01T16:04:22.441Z] [BOT] [STATS] Channel stats saved
[2026-01-01T16:04:24.451Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*