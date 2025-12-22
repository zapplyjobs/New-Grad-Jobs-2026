# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T23:35:30.607Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T23:35:13.368Z] ========================================
[2025-12-22T23:35:13.370Z] Discord Bot Execution Log
[2025-12-22T23:35:13.370Z] Environment: GitHub Actions
[2025-12-22T23:35:13.370Z] Node Version: v20.19.6
[2025-12-22T23:35:13.370Z] ========================================
[2025-12-22T23:35:13.370Z] Environment Variables Check:
[2025-12-22T23:35:13.370Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T23:35:13.371Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T23:35:13.371Z] 
Multi-Channel Configuration:
[2025-12-22T23:35:13.371Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.371Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.372Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T23:35:13.372Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T23:35:13.372Z] 
Data Files Check:
[2025-12-22T23:35:13.372Z] .github/data/new_jobs.json: ✅ Exists (3 items, 9961 bytes)
[2025-12-22T23:35:13.376Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 537410 bytes)
[2025-12-22T23:35:13.376Z] 
========================================
[2025-12-22T23:35:13.376Z] Starting Enhanced Discord Bot...
[2025-12-22T23:35:13.376Z] ========================================
[2025-12-22T23:35:13.882Z] [BOT] ✅ Loaded V2 database: 917 jobs
[2025-12-22T23:35:14.355Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T23:35:14.356Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T23:35:14.356Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T23:35:14.356Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-22T23:35:14.423Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-22T23:35:14.481Z] [BOT] ✅ Export complete: Added 1, Skipped 2, Total 158
[2025-12-22T23:35:14.483Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-22T23:35:14.483Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T23:35:14.483Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
[2025-12-22T23:35:14.483Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-22T23:35:14.484Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T23:35:14.485Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-22T23:35:14.486Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_1954b120
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-22T23:35:14.487Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-22T23:35:14.491Z] [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T23:35:14.778Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_1954b120 in #📈・JID_fb739488
  ✅ Industry: Data Scientist @ ORG_1954b120
[2025-12-22T23:35:16.481Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T23:35:17.981Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_1954b120 (instance #1)
[2025-12-22T23:35:17.982Z] [BOT] 💾 BEFORE ARCHIVING: 918 jobs in database
[2025-12-22T23:35:17.983Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-22T23:35:17.987Z] [BOT] 📦 Archived 6 jobs to 2025-12.json (6 total in archive)
[2025-12-22T23:35:17.988Z] [BOT] ✅ Archiving complete: 6 archived, 912 active
[2025-12-22T23:35:17.994Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
[2025-12-22T23:35:17.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T23:35:20.995Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-22T23:35:20.995Z] [BOT] 📍 [ROUTING] "Junior IT Software Developer" @ ORG_32d13e4c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T23:35:21.279Z] [BOT] ✅ Created forum post: 🏢 Junior IT Software Developer @ ORG_32d13e4c in #💻・tech-jobs
[2025-12-22T23:35:21.280Z] [BOT] ✅ Industry: Junior IT Software Developer @ ORG_32d13e4c
[2025-12-22T23:35:23.420Z] [BOT] ✅ Created forum post: 🏢 Junior IT Software Developer @ ORG_32d13e4c in #💻・remote-usa
[2025-12-22T23:35:23.421Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-22T23:35:24.921Z] [BOT] 💾 Marked as posted: Junior IT Software Developer @ ORG_32d13e4c (instance #1)
[2025-12-22T23:35:24.921Z] [BOT] 💾 BEFORE ARCHIVING: 913 jobs in database
[2025-12-22T23:35:24.922Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2025-12-22T23:35:24.931Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
[2025-12-22T23:35:24.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T23:35:27.930Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-22T23:35:27.931Z] [BOT] ⏭️  Skipping duplicate: JID_f5db701e-scientist_320662 (posted within 7 days)
[2025-12-22T23:35:27.931Z] [BOT] ⏭️  Skipping duplicate: JID_4b2b9d6a (posted within 7 days)
[2025-12-22T23:35:27.931Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-22T23:35:27.932Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
[2025-12-22T23:35:27.932Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T23:35:27.974Z] [BOT] 📂 Loaded 1012 existing routing entries
[2025-12-22T23:35:28.020Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-22T23:35:28.020Z] [BOT] Total entries: 1014
   Timestamp: 2025-12-22T23:35:28.015Z
[2025-12-22T23:35:28.020Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T23:35:28.020Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-22T23:35:28.020Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-22T23:35:28.021Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
[2025-12-22T23:35:28.021Z] [BOT] 2. #📈・JID_fb739488: 1 posts
     3. #💻・tech-jobs: 1 posts
[2025-12-22T23:35:28.021Z] [BOT] [STATS] Channel stats saved
[2025-12-22T23:35:30.033Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*