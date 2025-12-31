# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T19:04:07.496Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T19:03:56.339Z] ========================================
[2025-12-31T19:03:56.340Z] Discord Bot Execution Log
[2025-12-31T19:03:56.340Z] Environment: GitHub Actions
[2025-12-31T19:03:56.340Z] Node Version: v20.19.6
[2025-12-31T19:03:56.340Z] ========================================
[2025-12-31T19:03:56.340Z] Environment Variables Check:
[2025-12-31T19:03:56.340Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T19:03:56.341Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T19:03:56.341Z] 
Multi-Channel Configuration:
[2025-12-31T19:03:56.341Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T19:03:56.341Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T19:03:56.341Z] 
Data Files Check:
[2025-12-31T19:03:56.342Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6840 bytes)
[2025-12-31T19:03:56.342Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31990 bytes)
[2025-12-31T19:03:56.342Z] 
========================================
[2025-12-31T19:03:56.342Z] Starting Enhanced Discord Bot...
[2025-12-31T19:03:56.342Z] ========================================
[2025-12-31T19:03:56.815Z] [BOT] ✅ Loaded V2 database: 54 jobs
[2025-12-31T19:03:57.594Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T19:03:57.594Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T19:03:57.594Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T19:03:57.595Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T19:03:57.679Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 32
[2025-12-31T19:03:57.680Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T19:03:57.681Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
📋 After multi-location grouping: 1 unique jobs to post
[2025-12-31T19:03:57.681Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T19:03:57.682Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-31T19:03:57.684Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – College Grad" @ ORG_33a7935d
[2025-12-31T19:03:57.684Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T19:03:57.688Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T19:03:57.897Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – College Grad @ ORG_33a7935d in #💻・tech-jobs
  ✅ Industry: Software Engineering AMTS – College Grad @ ORG_33a7935d
[2025-12-31T19:03:59.842Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – College Grad @ ORG_33a7935d in #💻・remote-usa
[2025-12-31T19:03:59.843Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-31T19:04:01.344Z] [BOT] 💾 Marked as posted: Software Engineering AMTS – College Grad @ ORG_33a7935d (instance #1)
[2025-12-31T19:04:01.344Z] [BOT] 💾 BEFORE ARCHIVING: 55 jobs in database
[2025-12-31T19:04:01.345Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T19:04:01.348Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
✅ Archiving complete: 2 archived, 53 active
[2025-12-31T19:04:01.349Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
[2025-12-31T19:04:01.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T19:04:04.350Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T19:04:04.350Z] [BOT] ⏭️  Skipping duplicate: JID_edadfe67-external_career_site-JID_ba958958-_jr322433-1 (posted within 7 days)
[2025-12-31T19:04:04.350Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T19:04:04.351Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-31T19:04:04.351Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-31T19:04:04.395Z] [BOT] 📂 Loaded 1119 existing routing entries
[2025-12-31T19:04:04.440Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1120
   Timestamp: 2025-12-31T19:04:04.436Z
[2025-12-31T19:04:04.440Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 2
   Successful: 2
[2025-12-31T19:04:04.441Z] [BOT] Failed: 0
   Skipped: 0
[2025-12-31T19:04:04.441Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-31T19:04:04.441Z] [BOT] [STATS] Channel stats saved
[2025-12-31T19:04:06.450Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*