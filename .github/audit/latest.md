# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T05:04:32.030Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T05:03:58.610Z] ========================================
[2026-01-24T05:03:58.612Z] Discord Bot Execution Log
[2026-01-24T05:03:58.612Z] Environment: GitHub Actions
[2026-01-24T05:03:58.612Z] Node Version: v20.20.0
[2026-01-24T05:03:58.612Z] ========================================
[2026-01-24T05:03:58.613Z] Environment Variables Check:
[2026-01-24T05:03:58.613Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T05:03:58.613Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.613Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T05:03:58.613Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T05:03:58.613Z] 
Multi-Channel Configuration:
[2026-01-24T05:03:58.613Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.613Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.613Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.613Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T05:03:58.614Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T05:03:58.614Z] 
Data Files Check:
[2026-01-24T05:03:58.615Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T05:03:58.627Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1649078 bytes)
[2026-01-24T05:03:58.627Z] 
========================================
[2026-01-24T05:03:58.627Z] Starting Enhanced Discord Bot...
[2026-01-24T05:03:58.627Z] ========================================
[2026-01-24T05:03:59.184Z] [BOT] ✅ Loaded V2 database: 2816 jobs
[2026-01-24T05:03:59.545Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T05:03:59.545Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T05:03:59.546Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T05:03:59.663Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T05:03:59.667Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T05:03:59.667Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T05:03:59.667Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T05:03:59.668Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T05:03:59.668Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T05:03:59.668Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T05:03:59.670Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T05:03:59.671Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T05:03:59.671Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:03:59.689Z] [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T05:03:59.850Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T05:03:59.850Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T05:03:59.851Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T05:03:59.851Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-24T05:03:59.854Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T05:03:59.859Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
✅ Archiving complete: 5 archived, 2811 active
[2026-01-24T05:03:59.884Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
[2026-01-24T05:03:59.884Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:01.386Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T05:04:01.387Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:04:01.519Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T05:04:01.520Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T05:04:01.521Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T05:04:01.521Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:01.523Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:01.540Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:03.041Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:04:03.233Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T05:04:03.234Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:03.237Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:03.259Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:05.009Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T05:04:05.010Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T05:04:05.010Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:05.012Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:05.033Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:06.533Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:04:06.756Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-24T05:04:06.757Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T05:04:06.757Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T05:04:06.758Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:06.759Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:06.780Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:08.282Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T05:04:08.282Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T05:04:08.427Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T05:04:08.427Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T05:04:08.428Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T05:04:08.428Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:08.430Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:08.450Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:10.234Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T05:04:10.235Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:10.237Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:10.258Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:14.761Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T05:04:14.762Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:04:14.762Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:04:14.962Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-24T05:04:14.963Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:04:14.963Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T05:04:14.963Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:14.965Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:14.983Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
[2026-01-24T05:04:14.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:16.485Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T05:04:16.485Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T05:04:16.604Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T05:04:16.604Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T05:04:16.605Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:04:16.605Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:16.607Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:16.626Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
[2026-01-24T05:04:16.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:18.128Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:04:18.128Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T05:04:18.254Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T05:04:18.255Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T05:04:18.255Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:18.256Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:18.275Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:19.776Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T05:04:19.776Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T05:04:19.979Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T05:04:19.979Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T05:04:19.979Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:04:19.980Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:19.981Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:19.999Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:24.502Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T05:04:24.502Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T05:04:24.502Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-24T05:04:24.695Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T05:04:24.696Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T05:04:24.696Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:04:24.698Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-24T05:04:24.716Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:04:29.218Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T05:04:29.220Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T05:04:29.312Z] [BOT] 📂 Loaded 7661 existing routing entries
[2026-01-24T05:04:29.408Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T05:04:29.409Z] [BOT] Total entries: 7671
   Timestamp: 2026-01-24T05:04:29.371Z
[2026-01-24T05:04:29.409Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T05:04:29.409Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T05:04:29.409Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-24T05:04:29.410Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-24T05:04:29.410Z] [BOT] [STATS] Channel stats saved
[2026-01-24T05:04:31.429Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*