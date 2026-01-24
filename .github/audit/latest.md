# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T12:32:34.525Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T12:31:57.639Z] ========================================
[2026-01-24T12:31:57.641Z] Discord Bot Execution Log
[2026-01-24T12:31:57.641Z] Environment: GitHub Actions
[2026-01-24T12:31:57.641Z] Node Version: v20.20.0
[2026-01-24T12:31:57.641Z] ========================================
[2026-01-24T12:31:57.641Z] Environment Variables Check:
[2026-01-24T12:31:57.642Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T12:31:57.642Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T12:31:57.642Z] 
Multi-Channel Configuration:
[2026-01-24T12:31:57.642Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.642Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.643Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.643Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.643Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.643Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T12:31:57.643Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T12:31:57.643Z] 
Data Files Check:
[2026-01-24T12:31:57.643Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T12:31:57.654Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566596 bytes)
[2026-01-24T12:31:57.654Z] 
========================================
[2026-01-24T12:31:57.654Z] Starting Enhanced Discord Bot...
[2026-01-24T12:31:57.654Z] ========================================
[2026-01-24T12:31:58.219Z] [BOT] ✅ Loaded V2 database: 2660 jobs
[2026-01-24T12:31:58.900Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T12:31:58.901Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T12:31:58.901Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T12:31:59.020Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T12:31:59.024Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T12:31:59.024Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T12:31:59.024Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T12:31:59.025Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T12:31:59.025Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T12:31:59.025Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T12:31:59.027Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T12:31:59.028Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T12:31:59.028Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:31:59.048Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T12:31:59.280Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T12:31:59.280Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T12:31:59.281Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T12:31:59.282Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:31:59.284Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:31:59.308Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:00.809Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T12:32:00.810Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:32:01.030Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T12:32:01.031Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T12:32:01.032Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:01.034Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:01.052Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:02.552Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:32:02.804Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T12:32:02.804Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T12:32:02.805Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:02.807Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:02.827Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:04.594Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T12:32:04.594Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:32:04.594Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T12:32:04.595Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:04.596Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:04.615Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:06.116Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:32:06.354Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T12:32:06.355Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:06.357Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:06.376Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:07.878Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T12:32:07.878Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:32:08.157Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T12:32:08.158Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T12:32:08.158Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:08.160Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:08.181Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:09.885Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T12:32:09.886Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:32:09.886Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T12:32:09.886Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:09.889Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:09.908Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:14.410Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T12:32:14.411Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T12:32:14.411Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:32:14.604Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T12:32:14.605Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:14.607Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:14.626Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:16.128Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T12:32:16.128Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:32:16.357Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T12:32:16.358Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T12:32:16.358Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T12:32:16.358Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:16.360Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:16.379Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:17.880Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T12:32:17.881Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T12:32:18.352Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T12:32:18.353Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T12:32:18.353Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T12:32:18.354Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:18.355Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:18.374Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:19.874Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:32:20.146Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T12:32:20.147Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:20.148Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:20.165Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:24.667Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T12:32:24.668Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T12:32:24.668Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T12:32:26.405Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T12:32:26.405Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T12:32:26.406Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:32:26.407Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:32:26.427Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:32:30.930Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T12:32:30.933Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T12:32:31.026Z] [BOT] 📂 Loaded 7951 existing routing entries
[2026-01-24T12:32:31.126Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7961
   Timestamp: 2026-01-24T12:32:31.086Z
[2026-01-24T12:32:31.127Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T12:32:31.127Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T12:32:31.127Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T12:32:31.127Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T12:32:31.127Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T12:32:31.128Z] [BOT] [STATS] Channel stats saved
[2026-01-24T12:32:33.147Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*