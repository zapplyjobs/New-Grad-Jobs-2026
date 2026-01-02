# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T16:05:21.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T16:04:50.121Z] ========================================
[2026-01-02T16:04:50.123Z] Discord Bot Execution Log
[2026-01-02T16:04:50.123Z] Environment: GitHub Actions
[2026-01-02T16:04:50.123Z] Node Version: v20.19.6
[2026-01-02T16:04:50.123Z] ========================================
[2026-01-02T16:04:50.123Z] Environment Variables Check:
[2026-01-02T16:04:50.123Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T16:04:50.124Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T16:04:50.124Z] 
Multi-Channel Configuration:
[2026-01-02T16:04:50.124Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.124Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.125Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.125Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T16:04:50.125Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T16:04:50.125Z] 
Data Files Check:
[2026-01-02T16:04:50.125Z] .github/data/new_jobs.json: ✅ Exists (4 items, 21647 bytes)
[2026-01-02T16:04:50.126Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 75812 bytes)
[2026-01-02T16:04:50.126Z] 
========================================
[2026-01-02T16:04:50.126Z] Starting Enhanced Discord Bot...
[2026-01-02T16:04:50.126Z] ========================================
[2026-01-02T16:04:50.653Z] [BOT] ✅ Loaded V2 database: 125 jobs
[2026-01-02T16:04:51.319Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T16:04:51.319Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T16:04:51.319Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T16:04:51.320Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2026-01-02T16:04:51.363Z] [BOT] 🧹 Cleaned up 4 jobs older than 7 days
[2026-01-02T16:04:51.412Z] [BOT] ✅ Export complete: Added 4, Skipped 0, Total 51
[2026-01-02T16:04:51.413Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2026-01-02T16:04:51.414Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-02T16:04:51.414Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-02T16:04:51.414Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-02T16:04:51.415Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T16:04:51.418Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T16:04:51.419Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
[2026-01-02T16:04:51.419Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T16:04:51.424Z] [BOT ERROR] (node:2719) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T16:04:51.636Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
[2026-01-02T16:04:51.636Z] [BOT] ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2026-01-02T16:04:53.411Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T16:04:54.911Z] [BOT] 💾 Marked as posted: Mining Application Specialist @ ORG_85937e82 Inc. (instance #1)
[2026-01-02T16:04:54.911Z] [BOT] 💾 BEFORE ARCHIVING: 126 jobs in database
[2026-01-02T16:04:54.912Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-02T16:04:54.916Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-02T16:04:54.916Z] [BOT] ✅ Archiving complete: 1 archived, 125 active
[2026-01-02T16:04:54.918Z] [BOT] 💾 Saved posted_jobs.json: 125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T16:04:57.920Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-02T16:04:57.920Z] [BOT] 📍 [ROUTING] "Right-of-Way Technician - Entry or Level I" @ ORG_fa328622 Power Cooperative
[2026-01-02T16:04:57.920Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-02T16:04:58.309Z] [BOT] ✅ Created forum post: 🏢 Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative in #💰・finance-jobs
  ✅ Industry: Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative
[2026-01-02T16:05:00.363Z] [BOT] ✅ Created forum post: 🏢 Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T16:05:01.864Z] [BOT] 💾 Marked as posted: Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative (instance #1)
[2026-01-02T16:05:01.864Z] [BOT] 💾 BEFORE ARCHIVING: 126 jobs in database
✅ No jobs to archive (all 126 jobs within 7-day window)
[2026-01-02T16:05:01.867Z] [BOT] 💾 Saved posted_jobs.json: 126 active jobs
[2026-01-02T16:05:01.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T16:05:04.867Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-02T16:05:04.869Z] [BOT] 📍 [ROUTING] "Lederman Fellow" @ ORG_af10f363
[2026-01-02T16:05:04.869Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T16:05:05.110Z] [BOT] ✅ Created forum post: 🏢 Lederman Fellow @ ORG_af10f363 in #🩺・healthcare-jobs
  ✅ Industry: Lederman Fellow @ ORG_af10f363
[2026-01-02T16:05:07.015Z] [BOT] ✅ Created forum post: 🏢 Lederman Fellow @ ORG_af10f363 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-02T16:05:08.516Z] [BOT] 💾 Marked as posted: Lederman Fellow @ ORG_af10f363 (instance #1)
[2026-01-02T16:05:08.516Z] [BOT] 💾 BEFORE ARCHIVING: 127 jobs in database
✅ No jobs to archive (all 127 jobs within 7-day window)
[2026-01-02T16:05:08.518Z] [BOT] 💾 Saved posted_jobs.json: 127 active jobs
[2026-01-02T16:05:08.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T16:05:11.518Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-02T16:05:11.520Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Electrocatalysis - Center for Nanoscale Materials" @ ORG_a867f63f National Laboratory
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-02T16:05:11.829Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Electrocatalysis - Center for Nanoscale Materials @ ORG_a867f63f National Lab in #📈・JID_fb739488
[2026-01-02T16:05:11.829Z] [BOT] ✅ Industry: Postdoctoral Appointee - Electrocatalysis - Center for Nanoscale Materials @ ORG_a867f63f National Laboratory
[2026-01-02T16:05:13.887Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Electrocatalysis - Center for Nanoscale Materials @ ORG_a867f63f National Lab in #🌆・chicago
[2026-01-02T16:05:13.887Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-02T16:05:15.387Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Electrocatalysis - Center for Nanoscale Materials @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-02T16:05:15.387Z] [BOT] 💾 BEFORE ARCHIVING: 128 jobs in database
[2026-01-02T16:05:15.387Z] [BOT] ✅ No jobs to archive (all 128 jobs within 7-day window)
[2026-01-02T16:05:15.389Z] [BOT] 💾 Saved posted_jobs.json: 128 active jobs
[2026-01-02T16:05:15.390Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T16:05:18.389Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-02T16:05:18.390Z] [BOT] ⏭️  Skipping duplicate: JID_cce64a94-career_r0000341182 (posted within 7 days)
[2026-01-02T16:05:18.390Z] [BOT] ⏭️  Skipping duplicate: JID_5fb92a4c-i_jr100804 (posted within 7 days)
[2026-01-02T16:05:18.390Z] [BOT] ⏭️  Skipping duplicate: JID_cd33f33b-fellow_r_008876 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_d2f1954f-_421178 (posted within 7 days)
[2026-01-02T16:05:18.390Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-01-02T16:05:18.391Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-02T16:05:18.391Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T16:05:18.435Z] [BOT] 📂 Loaded 1199 existing routing entries
[2026-01-02T16:05:18.482Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-02T16:05:18.482Z] [BOT] Total entries: 1203
   Timestamp: 2026-01-02T16:05:18.476Z
[2026-01-02T16:05:18.483Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T16:05:18.483Z] [BOT] Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-02T16:05:18.483Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T16:05:18.483Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 6
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #🌆・chicago: 2 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-02T16:05:18.484Z] [BOT] 4. #💰・finance-jobs: 1 posts
     5. #🩺・healthcare-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-02T16:05:20.496Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2719) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*