# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T03:56:11.125Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T03:56:00.892Z] ========================================
[2026-01-02T03:56:00.894Z] Discord Bot Execution Log
[2026-01-02T03:56:00.894Z] Environment: GitHub Actions
[2026-01-02T03:56:00.894Z] Node Version: v20.19.6
[2026-01-02T03:56:00.894Z] ========================================
[2026-01-02T03:56:00.894Z] Environment Variables Check:
[2026-01-02T03:56:00.894Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T03:56:00.894Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.894Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T03:56:00.894Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T03:56:00.894Z] 
Multi-Channel Configuration:
[2026-01-02T03:56:00.895Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T03:56:00.895Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T03:56:00.895Z] 
Data Files Check:
[2026-01-02T03:56:00.896Z] .github/data/new_jobs.json: ✅ Exists (1 items, 1562 bytes)
[2026-01-02T03:56:00.896Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 61920 bytes)
[2026-01-02T03:56:00.896Z] 
========================================
[2026-01-02T03:56:00.896Z] Starting Enhanced Discord Bot...
[2026-01-02T03:56:00.896Z] ========================================
[2026-01-02T03:56:01.455Z] [BOT] ✅ Loaded V2 database: 103 jobs
[2026-01-02T03:56:01.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T03:56:01.927Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T03:56:01.927Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T03:56:01.927Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T03:56:01.972Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T03:56:02.018Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T03:56:02.019Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T03:56:02.019Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T03:56:02.020Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T03:56:02.020Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T03:56:02.020Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T03:56:02.022Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T03:56:02.023Z] [BOT] 📍 [ROUTING] "Graduate Environmental Engineer" @ ORG_65eedb45
[2026-01-02T03:56:02.023Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T03:56:02.043Z] [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T03:56:02.215Z] [BOT] ✅ Created forum post: 🏢 Graduate Environmental Engineer @ ORG_65eedb45 in #💻・tech-jobs
  ✅ Industry: Graduate Environmental Engineer @ ORG_65eedb45
[2026-01-02T03:56:03.907Z] [BOT] ✅ Created forum post: 🏢 Graduate Environmental Engineer @ ORG_65eedb45 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T03:56:05.407Z] [BOT] 💾 Marked as posted: Graduate Environmental Engineer @ ORG_65eedb45 (instance #1)
[2026-01-02T03:56:05.408Z] [BOT] 💾 BEFORE ARCHIVING: 104 jobs in database
[2026-01-02T03:56:05.408Z] [BOT] ✅ No jobs to archive (all 104 jobs within 7-day window)
[2026-01-02T03:56:05.423Z] [BOT] 💾 Saved posted_jobs.json: 104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T03:56:08.424Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T03:56:08.424Z] [BOT] ⏭️  Skipping duplicate: JID_80af21aa (posted within 7 days)
[2026-01-02T03:56:08.424Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T03:56:08.425Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T03:56:08.425Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T03:56:08.469Z] [BOT] 📂 Loaded 1175 existing routing entries
[2026-01-02T03:56:08.513Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1176
[2026-01-02T03:56:08.513Z] [BOT] Timestamp: 2026-01-02T03:56:08.508Z
[2026-01-02T03:56:08.514Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 2
[2026-01-02T03:56:08.514Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T03:56:08.514Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T03:56:08.514Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T03:56:08.514Z] [BOT] [STATS] Channel stats saved
[2026-01-02T03:56:10.524Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*