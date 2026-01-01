# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T14:04:16.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T14:03:59.698Z] ========================================
[2026-01-01T14:03:59.700Z] Discord Bot Execution Log
[2026-01-01T14:03:59.700Z] Environment: GitHub Actions
[2026-01-01T14:03:59.700Z] Node Version: v20.19.6
[2026-01-01T14:03:59.700Z] ========================================
[2026-01-01T14:03:59.700Z] Environment Variables Check:
[2026-01-01T14:03:59.700Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T14:03:59.700Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.700Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T14:03:59.701Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T14:03:59.701Z] 
Multi-Channel Configuration:
[2026-01-01T14:03:59.701Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T14:03:59.701Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T14:03:59.701Z] 
Data Files Check:
[2026-01-01T14:03:59.702Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7088 bytes)
[2026-01-01T14:03:59.702Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 38544 bytes)
[2026-01-01T14:03:59.702Z] 
========================================
[2026-01-01T14:03:59.702Z] Starting Enhanced Discord Bot...
[2026-01-01T14:03:59.703Z] ========================================
[2026-01-01T14:04:00.237Z] [BOT] ✅ Loaded V2 database: 64 jobs
[2026-01-01T14:04:00.773Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T14:04:00.773Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T14:04:00.773Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T14:04:00.774Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T14:04:00.818Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T14:04:00.863Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 34
[2026-01-01T14:04:00.864Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T14:04:00.864Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T14:04:00.865Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T14:04:00.865Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T14:04:00.865Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T14:04:00.867Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T14:04:00.868Z] [BOT] 📍 [ROUTING] "Automotive Mobile ADAS Technician" @ ORG_b344d80e Boyd Group
[2026-01-01T14:04:00.869Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-01T14:04:00.873Z] [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T14:04:01.103Z] [BOT] ✅ Created forum post: 🏢 Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #🤖・ai-jobs
[2026-01-01T14:04:01.104Z] [BOT] ✅ Industry: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group
[2026-01-01T14:04:02.866Z] [BOT] ✅ Created forum post: 🏢 Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T14:04:04.367Z] [BOT] 💾 Marked as posted: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group (instance #1)
[2026-01-01T14:04:04.367Z] [BOT] 💾 BEFORE ARCHIVING: 65 jobs in database
[2026-01-01T14:04:04.367Z] [BOT] ✅ No jobs to archive (all 65 jobs within 7-day window)
[2026-01-01T14:04:04.372Z] [BOT] 💾 Saved posted_jobs.json: 65 active jobs
[2026-01-01T14:04:04.373Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T14:04:07.374Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T14:04:07.375Z] [BOT] 📍 [ROUTING] "R&D Engineering Analyst" @ ORG_d6d2009d
   Category: TECH (matched: "engineer/engineering")
[2026-01-01T14:04:07.375Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T14:04:07.649Z] [BOT] ✅ Created forum post: 🏢 R&D Engineering Analyst @ ORG_d6d2009d in #💻・tech-jobs
[2026-01-01T14:04:07.649Z] [BOT] ✅ Industry: R&D Engineering Analyst @ ORG_d6d2009d
[2026-01-01T14:04:09.400Z] [BOT] ✅ Created forum post: 🏢 R&D Engineering Analyst @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T14:04:10.902Z] [BOT] 💾 Marked as posted: R&D Engineering Analyst @ ORG_d6d2009d (instance #1)
[2026-01-01T14:04:10.902Z] [BOT] 💾 BEFORE ARCHIVING: 66 jobs in database
[2026-01-01T14:04:10.902Z] [BOT] ✅ No jobs to archive (all 66 jobs within 7-day window)
[2026-01-01T14:04:10.904Z] [BOT] 💾 Saved posted_jobs.json: 66 active jobs
[2026-01-01T14:04:10.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T14:04:13.905Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T14:04:13.905Z] [BOT] ⏭️  Skipping duplicate: JID_a53de753-technician_r055451 (posted within 7 days)
[2026-01-01T14:04:13.906Z] [BOT] ⏭️  Skipping duplicate: JID_5d8339ab (posted within 7 days)
[2026-01-01T14:04:13.906Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T14:04:13.907Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-01T14:04:13.907Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T14:04:13.950Z] [BOT] 📂 Loaded 1138 existing routing entries
[2026-01-01T14:04:13.998Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T14:04:13.998Z] [BOT] Total entries: 1140
   Timestamp: 2026-01-01T14:04:13.992Z
[2026-01-01T14:04:13.998Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T14:04:13.999Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-01T14:04:13.999Z] [BOT] 1. #💻・remote-usa: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-01T14:04:13.999Z] [BOT] [STATS] Channel stats saved
[2026-01-01T14:04:16.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*