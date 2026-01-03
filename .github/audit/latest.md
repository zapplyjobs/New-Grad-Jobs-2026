# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T00:09:30.948Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T00:09:09.800Z] ========================================
[2026-01-03T00:09:09.802Z] Discord Bot Execution Log
[2026-01-03T00:09:09.802Z] Environment: GitHub Actions
[2026-01-03T00:09:09.802Z] Node Version: v20.19.6
[2026-01-03T00:09:09.802Z] ========================================
[2026-01-03T00:09:09.802Z] Environment Variables Check:
[2026-01-03T00:09:09.802Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T00:09:09.802Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.802Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T00:09:09.802Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T00:09:09.803Z] 
Multi-Channel Configuration:
[2026-01-03T00:09:09.803Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T00:09:09.803Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T00:09:09.803Z] 
Data Files Check:
[2026-01-03T00:09:09.804Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19162 bytes)
[2026-01-03T00:09:09.804Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 83077 bytes)
[2026-01-03T00:09:09.804Z] 
========================================
[2026-01-03T00:09:09.804Z] Starting Enhanced Discord Bot...
[2026-01-03T00:09:09.805Z] ========================================
[2026-01-03T00:09:10.315Z] [BOT] ✅ Loaded V2 database: 136 jobs
[2026-01-03T00:09:10.868Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T00:09:10.868Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T00:09:10.869Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T00:09:10.869Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2026-01-03T00:09:10.912Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-03T00:09:10.958Z] [BOT] ✅ Export complete: Added 1, Skipped 2, Total 48
[2026-01-03T00:09:10.959Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2026-01-03T00:09:10.959Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-03T00:09:10.960Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-03T00:09:10.960Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-03T00:09:10.960Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T00:09:10.964Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T00:09:10.964Z] [BOT] 📍 [ROUTING] "Software Engineer 3" @ ORG_3eab285c
[2026-01-03T00:09:10.964Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:09:10.969Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T00:09:11.159Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 3 @ ORG_3eab285c in #💻・tech-jobs
[2026-01-03T00:09:11.159Z] [BOT] ✅ Industry: Software Engineer 3 @ ORG_3eab285c
[2026-01-03T00:09:13.359Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 3 @ ORG_3eab285c in #☀️・sunnyvale
[2026-01-03T00:09:13.360Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-03T00:09:14.860Z] [BOT] 💾 Marked as posted: Software Engineer 3 @ ORG_3eab285c (instance #1)
[2026-01-03T00:09:14.860Z] [BOT] 💾 BEFORE ARCHIVING: 137 jobs in database
[2026-01-03T00:09:14.861Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-03T00:09:14.865Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-03T00:09:14.865Z] [BOT] ✅ Archiving complete: 1 archived, 136 active
[2026-01-03T00:09:14.867Z] [BOT] 💾 Saved posted_jobs.json: 136 active jobs
[2026-01-03T00:09:14.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:09:17.868Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T00:09:17.868Z] [BOT] 📍 [ROUTING] "EDI Coordinator" @ ORG_22fa11a5ingham & Butler
[2026-01-03T00:09:17.868Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T00:09:18.404Z] [BOT] ✅ Created forum post: 🏢 EDI Coordinator @ ORG_22fa11a5ingham & Butler in #📣・marketing-jobs
[2026-01-03T00:09:18.404Z] [BOT] ✅ Industry: EDI Coordinator @ ORG_22fa11a5ingham & Butler
[2026-01-03T00:09:20.080Z] [BOT] ✅ Created forum post: 🏢 EDI Coordinator @ ORG_22fa11a5ingham & Butler in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T00:09:21.580Z] [BOT] 💾 Marked as posted: EDI Coordinator @ ORG_22fa11a5ingham & Butler (instance #1)
[2026-01-03T00:09:21.580Z] [BOT] 💾 BEFORE ARCHIVING: 137 jobs in database
[2026-01-03T00:09:21.582Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (2 total in archive)
[2026-01-03T00:09:21.582Z] [BOT] ✅ Archiving complete: 1 archived, 136 active
[2026-01-03T00:09:21.584Z] [BOT] 💾 Saved posted_jobs.json: 136 active jobs
[2026-01-03T00:09:21.584Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:09:21.586Z] [BOT] 📍 [ROUTING] "Geospatial Technician - 3D Stereo Compilation" @ NV5 Global
[2026-01-03T00:09:21.586Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T00:09:21.844Z] [BOT] ✅ Created forum post: 🏢 Geospatial Technician - 3D Stereo Compilation @ NV5 Global in #📣・marketing-jobs
  ✅ Industry: Geospatial Technician - 3D Stereo Compilation @ NV5 Global
[2026-01-03T00:09:23.538Z] [BOT] ✅ Created forum post: 🏢 Geospatial Technician - 3D Stereo Compilation @ NV5 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T00:09:25.039Z] [BOT] 💾 Marked as posted: Geospatial Technician - 3D Stereo Compilation @ NV5 Global (instance #1)
[2026-01-03T00:09:25.039Z] [BOT] 💾 BEFORE ARCHIVING: 137 jobs in database
✅ No jobs to archive (all 137 jobs within 7-day window)
[2026-01-03T00:09:25.042Z] [BOT] 💾 Saved posted_jobs.json: 137 active jobs
[2026-01-03T00:09:25.042Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:09:28.042Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-03T00:09:28.042Z] [BOT] ⏭️  Skipping duplicate: JID_3a39db73-iii_r-2347075 (posted within 7 days)
⏭️  Skipping duplicate: JID_9138a48f (posted within 7 days)
[2026-01-03T00:09:28.042Z] [BOT] ⏭️  Skipping duplicate: JID_34ee3a7a (posted within 7 days)
[2026-01-03T00:09:28.043Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2026-01-03T00:09:28.139Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2026-01-03T00:09:28.139Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T00:09:28.183Z] [BOT] 📂 Loaded 1212 existing routing entries
[2026-01-03T00:09:28.235Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-03T00:09:28.235Z] [BOT] New entries: 3
   Total entries: 1215
   Timestamp: 2026-01-03T00:09:28.226Z
[2026-01-03T00:09:28.236Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #💻・tech-jobs: 1 posts
     4. #☀️・sunnyvale: 1 posts
[STATS] Channel stats saved
[2026-01-03T00:09:30.247Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*