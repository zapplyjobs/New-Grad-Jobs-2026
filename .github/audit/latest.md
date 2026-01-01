# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T10:04:23.314Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T10:04:13.077Z] ========================================
[2026-01-01T10:04:13.079Z] Discord Bot Execution Log
[2026-01-01T10:04:13.079Z] Environment: GitHub Actions
[2026-01-01T10:04:13.079Z] Node Version: v20.19.6
[2026-01-01T10:04:13.079Z] ========================================
[2026-01-01T10:04:13.079Z] Environment Variables Check:
[2026-01-01T10:04:13.079Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T10:04:13.080Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T10:04:13.080Z] 
Multi-Channel Configuration:
[2026-01-01T10:04:13.080Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.080Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.081Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T10:04:13.081Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T10:04:13.081Z] 
Data Files Check:
[2026-01-01T10:04:13.081Z] .github/data/new_jobs.json: ✅ Exists (1 items, 537 bytes)
[2026-01-01T10:04:13.082Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31785 bytes)
[2026-01-01T10:04:13.082Z] 
========================================
[2026-01-01T10:04:13.082Z] Starting Enhanced Discord Bot...
[2026-01-01T10:04:13.082Z] ========================================
[2026-01-01T10:04:13.596Z] [BOT] ✅ Loaded V2 database: 54 jobs
[2026-01-01T10:04:14.009Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T10:04:14.010Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T10:04:14.010Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T10:04:14.052Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T10:04:14.098Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2026-01-01T10:04:14.099Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T10:04:14.099Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T10:04:14.099Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T10:04:14.099Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T10:04:14.100Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T10:04:14.103Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T10:04:14.104Z] [BOT] 📍 [ROUTING] "Migration Specialist" @ ORG_7aa292c2
[2026-01-01T10:04:14.104Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T10:04:14.121Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T10:04:14.307Z] [BOT] ✅ Created forum post: 🏢 Migration Specialist @ ORG_7aa292c2 in #💻・tech-jobs
[2026-01-01T10:04:14.307Z] [BOT] ✅ Industry: Migration Specialist @ ORG_7aa292c2
[2026-01-01T10:04:16.009Z] [BOT] ✅ Created forum post: 🏢 Migration Specialist @ ORG_7aa292c2 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T10:04:17.511Z] [BOT] 💾 Marked as posted: Migration Specialist @ ORG_7aa292c2 (instance #1)
[2026-01-01T10:04:17.511Z] [BOT] 💾 BEFORE ARCHIVING: 55 jobs in database
[2026-01-01T10:04:17.512Z] [BOT] ✅ No jobs to archive (all 55 jobs within 7-day window)
[2026-01-01T10:04:17.526Z] [BOT] 💾 Saved posted_jobs.json: 55 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T10:04:20.527Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T10:04:20.527Z] [BOT] ⏭️  Skipping duplicate: JID_b6d91bd5 (posted within 7 days)
[2026-01-01T10:04:20.528Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T10:04:20.528Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T10:04:20.571Z] [BOT] 📂 Loaded 1127 existing routing entries
[2026-01-01T10:04:20.614Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1128
   Timestamp: 2026-01-01T10:04:20.609Z
[2026-01-01T10:04:20.615Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T10:04:20.615Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-01T10:04:20.615Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-01T10:04:20.615Z] [BOT] [STATS] Channel stats saved
[2026-01-01T10:04:22.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*