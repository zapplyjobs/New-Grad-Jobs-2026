# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T00:11:01.858Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T00:10:44.318Z] ========================================
[2026-01-01T00:10:44.320Z] Discord Bot Execution Log
[2026-01-01T00:10:44.320Z] Environment: GitHub Actions
[2026-01-01T00:10:44.320Z] Node Version: v20.19.6
[2026-01-01T00:10:44.320Z] ========================================
[2026-01-01T00:10:44.320Z] Environment Variables Check:
[2026-01-01T00:10:44.320Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T00:10:44.320Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.320Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T00:10:44.320Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T00:10:44.321Z] 
Multi-Channel Configuration:
[2026-01-01T00:10:44.321Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T00:10:44.321Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T00:10:44.321Z] 
Data Files Check:
[2026-01-01T00:10:44.322Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12327 bytes)
[2026-01-01T00:10:44.322Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31570 bytes)
[2026-01-01T00:10:44.322Z] 
========================================
[2026-01-01T00:10:44.322Z] Starting Enhanced Discord Bot...
[2026-01-01T00:10:44.322Z] ========================================
[2026-01-01T00:10:44.781Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2026-01-01T00:10:45.575Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T00:10:45.576Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T00:10:45.576Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T00:10:45.577Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T00:10:45.620Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T00:10:45.662Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 32
[2026-01-01T00:10:45.663Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T00:10:45.663Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T00:10:45.664Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T00:10:45.664Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T00:10:45.664Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T00:10:45.665Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T00:10:45.667Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
   Category: AI (matched: "artificial intelligence")
[2026-01-01T00:10:45.667Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-01T00:10:45.674Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T00:10:45.941Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
[2026-01-01T00:10:45.941Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-01T00:10:47.637Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🌆・chicago
[2026-01-01T00:10:47.637Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-01T00:10:49.137Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2026-01-01T00:10:49.137Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2026-01-01T00:10:49.138Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-01T00:10:49.147Z] [BOT] 📦 Archived 3 jobs to 2025-12.json (3 total in archive)
✅ Archiving complete: 3 archived, 51 active
[2026-01-01T00:10:49.149Z] [BOT] 💾 Saved posted_jobs.json: 51 active jobs
[2026-01-01T00:10:49.149Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T00:10:52.150Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T00:10:52.150Z] [BOT] 📍 [ROUTING] "Data Governance Specialist" @ ORG_3442dbaa
[2026-01-01T00:10:52.150Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T00:10:52.510Z] [BOT] ✅ Created forum post: 🏢 Data Governance Specialist @ ORG_3442dbaa in #💻・tech-jobs
[2026-01-01T00:10:52.510Z] [BOT] ✅ Industry: Data Governance Specialist @ ORG_3442dbaa
[2026-01-01T00:10:54.284Z] [BOT] ✅ Created forum post: 🏢 Data Governance Specialist @ ORG_3442dbaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T00:10:55.785Z] [BOT] 💾 Marked as posted: Data Governance Specialist @ ORG_3442dbaa (instance #1)
💾 BEFORE ARCHIVING: 52 jobs in database
✅ No jobs to archive (all 52 jobs within 7-day window)
[2026-01-01T00:10:55.787Z] [BOT] 💾 Saved posted_jobs.json: 52 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T00:10:58.788Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T00:10:58.788Z] [BOT] ⏭️  Skipping duplicate: JID_273b1230 (posted within 7 days)
⏭️  Skipping duplicate: JID_6e3dc935 (posted within 7 days)
[2026-01-01T00:10:58.789Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T00:10:58.789Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-01T00:10:58.789Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T00:10:58.834Z] [BOT] 📂 Loaded 1122 existing routing entries
[2026-01-01T00:10:58.879Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1124
[2026-01-01T00:10:58.879Z] [BOT] Timestamp: 2026-01-01T00:10:58.874Z
[2026-01-01T00:10:58.879Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T00:10:58.880Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T00:10:58.880Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-01T00:10:58.880Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌆・chicago: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-01T00:10:58.880Z] [BOT] [STATS] Channel stats saved
[2026-01-01T00:11:00.890Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*