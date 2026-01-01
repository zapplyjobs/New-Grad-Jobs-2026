# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T02:36:03.197Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T02:35:52.598Z] ========================================
[2026-01-01T02:35:52.600Z] Discord Bot Execution Log
[2026-01-01T02:35:52.600Z] Environment: GitHub Actions
[2026-01-01T02:35:52.600Z] Node Version: v20.19.6
[2026-01-01T02:35:52.600Z] ========================================
[2026-01-01T02:35:52.600Z] Environment Variables Check:
[2026-01-01T02:35:52.600Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T02:35:52.601Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T02:35:52.601Z] 
Multi-Channel Configuration:
[2026-01-01T02:35:52.601Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.601Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.602Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T02:35:52.602Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T02:35:52.602Z] 
Data Files Check:
[2026-01-01T02:35:52.602Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4971 bytes)
[2026-01-01T02:35:52.603Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 30723 bytes)
[2026-01-01T02:35:52.603Z] 
========================================
[2026-01-01T02:35:52.603Z] Starting Enhanced Discord Bot...
[2026-01-01T02:35:52.603Z] ========================================
[2026-01-01T02:35:53.124Z] [BOT] ✅ Loaded V2 database: 52 jobs
[2026-01-01T02:35:53.757Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T02:35:53.757Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T02:35:53.757Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T02:35:53.757Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T02:35:53.845Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 32
[2026-01-01T02:35:53.846Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T02:35:53.846Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T02:35:53.846Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T02:35:53.846Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T02:35:53.847Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T02:35:53.848Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T02:35:53.849Z] [BOT] 📍 [ROUTING] "Medical Informatics Analyst" @ ORG_03419b97
[2026-01-01T02:35:53.849Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-01T02:35:53.854Z] [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T02:35:54.012Z] [BOT] ✅ Created forum post: 🏢 Medical Informatics Analyst @ ORG_03419b97 in #🤖・ai-jobs
  ✅ Industry: Medical Informatics Analyst @ ORG_03419b97
[2026-01-01T02:35:55.777Z] [BOT] ✅ Created forum post: 🏢 Medical Informatics Analyst @ ORG_03419b97 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T02:35:57.279Z] [BOT] 💾 Marked as posted: Medical Informatics Analyst @ ORG_03419b97 (instance #1)
[2026-01-01T02:35:57.279Z] [BOT] 💾 BEFORE ARCHIVING: 53 jobs in database
[2026-01-01T02:35:57.280Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-01T02:35:57.285Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-01T02:35:57.285Z] [BOT] ✅ Archiving complete: 1 archived, 52 active
[2026-01-01T02:35:57.286Z] [BOT] 💾 Saved posted_jobs.json: 52 active jobs
[2026-01-01T02:35:57.286Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T02:36:00.287Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T02:36:00.288Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_80438d00-_r0435017 (posted within 7 days)
[2026-01-01T02:36:00.288Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T02:36:00.288Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-01T02:36:00.289Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T02:36:00.331Z] [BOT] 📂 Loaded 1124 existing routing entries
[2026-01-01T02:36:00.376Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1125
   Timestamp: 2026-01-01T02:36:00.371Z
[2026-01-01T02:36:00.377Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T02:36:00.377Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T02:36:00.377Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-01T02:36:00.378Z] [BOT] Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[STATS] Channel stats saved
[2026-01-01T02:36:02.386Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*