# Discord Bot Execution Audit
**Timestamp:** 2025-12-25T10:39:10.956Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-25T10:38:59.443Z] ========================================
[2025-12-25T10:38:59.445Z] Discord Bot Execution Log
[2025-12-25T10:38:59.445Z] Environment: GitHub Actions
[2025-12-25T10:38:59.445Z] Node Version: v20.19.6
[2025-12-25T10:38:59.445Z] ========================================
[2025-12-25T10:38:59.445Z] Environment Variables Check:
[2025-12-25T10:38:59.445Z] DISCORD_TOKEN: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-25T10:38:59.446Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-25T10:38:59.446Z] 
Multi-Channel Configuration:
[2025-12-25T10:38:59.446Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.446Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.447Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-25T10:38:59.447Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-25T10:38:59.447Z] 
Data Files Check:
[2025-12-25T10:38:59.447Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4038 bytes)
[2025-12-25T10:38:59.449Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 395011 bytes)
[2025-12-25T10:38:59.450Z] 
========================================
[2025-12-25T10:38:59.450Z] Starting Enhanced Discord Bot...
[2025-12-25T10:38:59.450Z] ========================================
[2025-12-25T10:38:59.966Z] [BOT] ✅ Loaded V2 database: 680 jobs
[2025-12-25T10:39:00.849Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-25T10:39:00.849Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-25T10:39:00.850Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-25T10:39:00.850Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-25T10:39:00.899Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-25T10:39:00.958Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 132
[2025-12-25T10:39:00.959Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-25T10:39:00.960Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-25T10:39:00.960Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-25T10:39:00.960Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-25T10:39:00.960Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-25T10:39:00.960Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-25T10:39:00.961Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-25T10:39:00.962Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-25T10:39:00.964Z] [BOT] 📍 [ROUTING] "Night Security" @ ORG_861ac4a0 Hospitality
[2025-12-25T10:39:00.964Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-25T10:39:00.981Z] [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-25T10:39:01.150Z] [BOT] ✅ Created forum post: 🏢 Night Security @ ORG_861ac4a0 Hospitality in #💻・tech-jobs
  ✅ Industry: Night Security @ ORG_861ac4a0 Hospitality
[2025-12-25T10:39:03.165Z] [BOT] ✅ Created forum post: 🏢 Night Security @ ORG_861ac4a0 Hospitality in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-25T10:39:04.666Z] [BOT] 💾 Marked as posted: Night Security @ ORG_861ac4a0 Hospitality (instance #1)
[2025-12-25T10:39:04.666Z] [BOT] 💾 BEFORE ARCHIVING: 681 jobs in database
[2025-12-25T10:39:04.667Z] [BOT] ✅ No jobs to archive (all 681 jobs within 7-day window)
[2025-12-25T10:39:04.677Z] [BOT] 💾 Saved posted_jobs.json: 681 active jobs
[2025-12-25T10:39:04.677Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-25T10:39:07.678Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-25T10:39:07.678Z] [BOT] ⏭️  Skipping duplicate: JID_07cc80a7 (posted within 7 days)
[2025-12-25T10:39:07.679Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-25T10:39:07.680Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-25T10:39:07.680Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-25T10:39:07.722Z] [BOT] 📂 Loaded 1073 existing routing entries
[2025-12-25T10:39:07.766Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1074
   Timestamp: 2025-12-25T10:39:07.761Z
[2025-12-25T10:39:07.767Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9a8c61a9.jsonl
[2025-12-25T10:39:07.767Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-25T10:39:07.767Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-25T10:39:07.767Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2025-12-25T10:39:07.767Z] [BOT] 2. #💻・remote-usa: 1 posts
[2025-12-25T10:39:07.767Z] [BOT] [STATS] Channel stats saved
[2025-12-25T10:39:09.778Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*