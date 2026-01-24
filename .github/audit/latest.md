# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T15:11:58.577Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T15:11:24.000Z] ========================================
[2026-01-24T15:11:24.002Z] Discord Bot Execution Log
[2026-01-24T15:11:24.002Z] Environment: GitHub Actions
[2026-01-24T15:11:24.002Z] Node Version: v20.20.0
[2026-01-24T15:11:24.002Z] ========================================
[2026-01-24T15:11:24.002Z] Environment Variables Check:
[2026-01-24T15:11:24.002Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T15:11:24.002Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.002Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T15:11:24.002Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T15:11:24.002Z] 
Multi-Channel Configuration:
[2026-01-24T15:11:24.002Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T15:11:24.003Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T15:11:24.003Z] 
Data Files Check:
[2026-01-24T15:11:24.004Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T15:11:24.014Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562993 bytes)
[2026-01-24T15:11:24.014Z] 
========================================
[2026-01-24T15:11:24.014Z] Starting Enhanced Discord Bot...
[2026-01-24T15:11:24.014Z] ========================================
[2026-01-24T15:11:24.544Z] [BOT] ✅ Loaded V2 database: 2653 jobs
[2026-01-24T15:11:24.967Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T15:11:24.968Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T15:11:24.968Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T15:11:25.084Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-24T15:11:25.085Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T15:11:25.088Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T15:11:25.089Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T15:11:25.089Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T15:11:25.090Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T15:11:25.090Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T15:11:25.090Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T15:11:25.092Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T15:11:25.093Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T15:11:25.093Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:11:25.110Z] [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T15:11:25.411Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T15:11:25.411Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T15:11:25.412Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T15:11:25.412Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T15:11:25.414Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T15:11:25.420Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-24T15:11:25.421Z] [BOT] ✅ Archiving complete: 1 archived, 2652 active
[2026-01-24T15:11:25.445Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:26.947Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T15:11:26.947Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:11:27.229Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T15:11:27.230Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T15:11:27.230Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:27.231Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:27.248Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:28.749Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T15:11:28.749Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:11:28.944Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T15:11:28.945Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:28.947Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:28.966Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:30.731Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:11:30.732Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T15:11:30.733Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:30.735Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:30.757Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:32.258Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:11:32.523Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T15:11:32.524Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T15:11:32.524Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:32.525Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:32.545Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:34.047Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:11:34.207Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T15:11:34.208Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T15:11:34.208Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:34.210Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:34.230Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:36.083Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:11:36.084Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:36.085Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:36.105Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:40.607Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T15:11:40.609Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T15:11:40.609Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:11:40.806Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T15:11:40.806Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T15:11:40.807Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T15:11:40.807Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:40.809Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:40.827Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:42.330Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T15:11:42.330Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:11:42.675Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T15:11:42.676Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T15:11:42.676Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:42.678Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:42.696Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:44.198Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:11:44.198Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T15:11:44.471Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T15:11:44.471Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T15:11:44.472Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T15:11:44.472Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:44.474Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:44.492Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:45.993Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T15:11:45.993Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:11:46.179Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T15:11:46.180Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T15:11:46.180Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:46.181Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:46.198Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:50.700Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T15:11:50.700Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T15:11:51.052Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T15:11:51.052Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T15:11:51.052Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:11:51.054Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:11:51.073Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:11:55.575Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T15:11:55.579Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T15:11:55.701Z] [BOT] 📂 Loaded 8041 existing routing entries
[2026-01-24T15:11:55.812Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8051
[2026-01-24T15:11:55.813Z] [BOT] Timestamp: 2026-01-24T15:11:55.773Z
[2026-01-24T15:11:55.813Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T15:11:55.813Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T15:11:55.813Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T15:11:55.814Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T15:11:55.814Z] [BOT] [STATS] Channel stats saved
[2026-01-24T15:11:57.832Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*