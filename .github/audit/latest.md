# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T07:09:57.696Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T07:09:46.289Z] ========================================
[2026-01-02T07:09:46.291Z] Discord Bot Execution Log
[2026-01-02T07:09:46.291Z] Environment: GitHub Actions
[2026-01-02T07:09:46.291Z] Node Version: v20.19.6
[2026-01-02T07:09:46.292Z] ========================================
[2026-01-02T07:09:46.292Z] Environment Variables Check:
[2026-01-02T07:09:46.292Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T07:09:46.292Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T07:09:46.292Z] 
Multi-Channel Configuration:
[2026-01-02T07:09:46.292Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.292Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.293Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.293Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.293Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.293Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T07:09:46.293Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T07:09:46.293Z] 
Data Files Check:
[2026-01-02T07:09:46.293Z] .github/data/new_jobs.json: ✅ Exists (1 items, 686 bytes)
[2026-01-02T07:09:46.294Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 65570 bytes)
[2026-01-02T07:09:46.294Z] 
========================================
[2026-01-02T07:09:46.294Z] Starting Enhanced Discord Bot...
[2026-01-02T07:09:46.294Z] ========================================
[2026-01-02T07:09:46.805Z] [BOT] ✅ Loaded V2 database: 109 jobs
[2026-01-02T07:09:48.264Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T07:09:48.265Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T07:09:48.265Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T07:09:48.265Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T07:09:48.307Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T07:09:48.352Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T07:09:48.353Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T07:09:48.353Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T07:09:48.353Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T07:09:48.354Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T07:09:48.354Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T07:09:48.359Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T07:09:48.360Z] [BOT] 📍 [ROUTING] "Transportation Planner 1" @ ORG_f089eaef Baker International
[2026-01-02T07:09:48.361Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T07:09:48.377Z] [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T07:09:48.571Z] [BOT] ✅ Created forum post: 🏢 Transportation Planner 1 @ ORG_f089eaef Baker International in #💻・tech-jobs
[2026-01-02T07:09:48.572Z] [BOT] ✅ Industry: Transportation Planner 1 @ ORG_f089eaef Baker International
[2026-01-02T07:09:50.268Z] [BOT] ✅ Created forum post: 🏢 Transportation Planner 1 @ ORG_f089eaef Baker International in #💻・remote-usa
[2026-01-02T07:09:50.268Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T07:09:51.769Z] [BOT] 💾 Marked as posted: Transportation Planner 1 @ ORG_f089eaef Baker International (instance #1)
[2026-01-02T07:09:51.770Z] [BOT] 💾 BEFORE ARCHIVING: 110 jobs in database
[2026-01-02T07:09:51.770Z] [BOT] ✅ No jobs to archive (all 110 jobs within 7-day window)
[2026-01-02T07:09:51.782Z] [BOT] 💾 Saved posted_jobs.json: 110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T07:09:54.783Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T07:09:54.784Z] [BOT] ⏭️  Skipping duplicate: JID_5000e541-cx_2-job-308745 (posted within 7 days)
[2026-01-02T07:09:54.784Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T07:09:54.785Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T07:09:54.785Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T07:09:54.827Z] [BOT] 📂 Loaded 1181 existing routing entries
[2026-01-02T07:09:54.872Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1182
[2026-01-02T07:09:54.873Z] [BOT] Timestamp: 2026-01-02T07:09:54.867Z
[2026-01-02T07:09:54.873Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T07:09:54.873Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T07:09:54.873Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T07:09:54.873Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T07:09:54.874Z] [BOT] [STATS] Channel stats saved
[2026-01-02T07:09:56.886Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*