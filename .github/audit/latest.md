# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T10:30:40.645Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T10:30:06.362Z] ========================================
[2026-01-24T10:30:06.364Z] Discord Bot Execution Log
[2026-01-24T10:30:06.364Z] Environment: GitHub Actions
[2026-01-24T10:30:06.364Z] Node Version: v20.20.0
[2026-01-24T10:30:06.364Z] ========================================
[2026-01-24T10:30:06.364Z] Environment Variables Check:
[2026-01-24T10:30:06.364Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T10:30:06.364Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T10:30:06.365Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T10:30:06.365Z] 
Multi-Channel Configuration:
[2026-01-24T10:30:06.365Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.365Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T10:30:06.366Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T10:30:06.366Z] 
Data Files Check:
[2026-01-24T10:30:06.366Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T10:30:06.376Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T10:30:06.376Z] 
========================================
[2026-01-24T10:30:06.376Z] Starting Enhanced Discord Bot...
[2026-01-24T10:30:06.376Z] ========================================
[2026-01-24T10:30:06.897Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T10:30:07.438Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T10:30:07.438Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T10:30:07.438Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T10:30:07.554Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T10:30:07.558Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T10:30:07.558Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T10:30:07.558Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T10:30:07.559Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T10:30:07.559Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T10:30:07.559Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T10:30:07.561Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T10:30:07.562Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T10:30:07.562Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:30:07.580Z] [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T10:30:08.120Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T10:30:08.120Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T10:30:08.121Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T10:30:08.122Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:08.124Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:08.147Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:08.147Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:09.649Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:30:09.780Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T10:30:09.780Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T10:30:09.781Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T10:30:09.781Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:09.783Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:09.801Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:09.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:11.302Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T10:30:11.302Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:30:11.581Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T10:30:11.582Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T10:30:11.582Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:11.584Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:11.604Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:13.312Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T10:30:13.313Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:30:13.313Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T10:30:13.313Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:13.315Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:13.333Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:14.835Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T10:30:14.835Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:30:15.056Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T10:30:15.057Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T10:30:15.057Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:15.059Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:15.077Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:16.579Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T10:30:16.579Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:30:16.792Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T10:30:16.792Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T10:30:16.793Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T10:30:16.793Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:16.795Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:16.818Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:18.535Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T10:30:18.536Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:30:18.536Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T10:30:18.536Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:18.538Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:18.557Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:18.557Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:23.059Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T10:30:23.060Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:30:23.255Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T10:30:23.256Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T10:30:23.256Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:23.258Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:23.275Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:23.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:24.778Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:30:25.084Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T10:30:25.085Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:25.086Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:25.105Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:26.608Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:30:26.608Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T10:30:26.800Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T10:30:26.801Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:26.803Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:26.821Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:28.323Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T10:30:28.323Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:30:28.537Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T10:30:28.537Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T10:30:28.538Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T10:30:28.538Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:28.540Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:28.558Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:28.558Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:33.060Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T10:30:33.060Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T10:30:33.060Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T10:30:33.261Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T10:30:33.261Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T10:30:33.261Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:30:33.263Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:30:33.282Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:30:33.282Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:30:37.785Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T10:30:37.787Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T10:30:37.872Z] [BOT] 📂 Loaded 7871 existing routing entries
[2026-01-24T10:30:37.980Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T10:30:37.980Z] [BOT] Total entries: 7881
   Timestamp: 2026-01-24T10:30:37.942Z
[2026-01-24T10:30:37.981Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T10:30:37.981Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T10:30:37.981Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T10:30:37.981Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T10:30:37.982Z] [BOT] [STATS] Channel stats saved
[2026-01-24T10:30:40.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*