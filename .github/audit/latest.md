# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T14:38:27.090Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T14:38:16.212Z] ========================================
[2026-01-02T14:38:16.213Z] Discord Bot Execution Log
[2026-01-02T14:38:16.214Z] Environment: GitHub Actions
[2026-01-02T14:38:16.214Z] Node Version: v20.19.6
[2026-01-02T14:38:16.214Z] ========================================
[2026-01-02T14:38:16.214Z] Environment Variables Check:
[2026-01-02T14:38:16.214Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T14:38:16.214Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.214Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T14:38:16.214Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T14:38:16.214Z] 
Multi-Channel Configuration:
[2026-01-02T14:38:16.214Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.214Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T14:38:16.215Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T14:38:16.215Z] 
Data Files Check:
[2026-01-02T14:38:16.215Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7608 bytes)
[2026-01-02T14:38:16.216Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 71847 bytes)
[2026-01-02T14:38:16.216Z] 
========================================
[2026-01-02T14:38:16.216Z] Starting Enhanced Discord Bot...
[2026-01-02T14:38:16.216Z] ========================================
[2026-01-02T14:38:16.743Z] [BOT] ✅ Loaded V2 database: 119 jobs
[2026-01-02T14:38:17.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T14:38:17.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T14:38:17.528Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T14:38:17.528Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T14:38:17.571Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T14:38:17.618Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 49
[2026-01-02T14:38:17.619Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T14:38:17.619Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T14:38:17.619Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T14:38:17.620Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T14:38:17.620Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T14:38:17.621Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-02T14:38:17.623Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-02T14:38:17.623Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-02T14:38:17.640Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T14:38:17.897Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📈・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-02T14:38:19.582Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-02T14:38:21.083Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California (instance #1)
[2026-01-02T14:38:21.083Z] [BOT] 💾 BEFORE ARCHIVING: 120 jobs in database
[2026-01-02T14:38:21.083Z] [BOT] ✅ No jobs to archive (all 120 jobs within 7-day window)
[2026-01-02T14:38:21.156Z] [BOT] 💾 Saved posted_jobs.json: 120 active jobs
[2026-01-02T14:38:21.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T14:38:24.157Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T14:38:24.157Z] [BOT] ⏭️  Skipping duplicate: JID_370896c8-associate_req20165823 (posted within 7 days)
[2026-01-02T14:38:24.157Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T14:38:24.158Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-02T14:38:24.158Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T14:38:24.200Z] [BOT] 📂 Loaded 1193 existing routing entries
[2026-01-02T14:38:24.245Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1194
[2026-01-02T14:38:24.245Z] [BOT] Timestamp: 2026-01-02T14:38:24.239Z
[2026-01-02T14:38:24.246Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T14:38:24.246Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #🦢・los-angeles: 1 posts
[2026-01-02T14:38:24.246Z] [BOT] [STATS] Channel stats saved
[2026-01-02T14:38:26.257Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*