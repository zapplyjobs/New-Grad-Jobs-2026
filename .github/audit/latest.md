# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T11:54:43.364Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T11:54:09.609Z] ========================================
[2026-01-24T11:54:09.611Z] Discord Bot Execution Log
[2026-01-24T11:54:09.611Z] Environment: GitHub Actions
[2026-01-24T11:54:09.611Z] Node Version: v20.20.0
[2026-01-24T11:54:09.611Z] ========================================
[2026-01-24T11:54:09.611Z] Environment Variables Check:
[2026-01-24T11:54:09.611Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T11:54:09.611Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T11:54:09.612Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T11:54:09.612Z] 
Multi-Channel Configuration:
[2026-01-24T11:54:09.612Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.612Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T11:54:09.613Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T11:54:09.613Z] 
Data Files Check:
[2026-01-24T11:54:09.613Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T11:54:09.624Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T11:54:09.624Z] 
========================================
[2026-01-24T11:54:09.624Z] Starting Enhanced Discord Bot...
[2026-01-24T11:54:09.624Z] ========================================
[2026-01-24T11:54:10.182Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T11:54:10.864Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T11:54:10.865Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T11:54:10.865Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T11:54:10.987Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T11:54:10.991Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T11:54:10.991Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T11:54:10.992Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T11:54:10.992Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T11:54:10.993Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T11:54:10.993Z] [BOT] 📤 Posting 10 jobs...
[2026-01-24T11:54:10.993Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T11:54:10.995Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T11:54:10.996Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T11:54:10.996Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:54:11.015Z] [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T11:54:11.295Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T11:54:11.295Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T11:54:11.296Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T11:54:11.297Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:54:11.299Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T11:54:11.304Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-24T11:54:11.305Z] [BOT] ✅ Archiving complete: 2 archived, 2660 active
[2026-01-24T11:54:11.330Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:12.831Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T11:54:12.831Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:54:12.954Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T11:54:12.954Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T11:54:12.955Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T11:54:12.955Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:12.957Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:12.973Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:14.473Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T11:54:14.473Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:54:14.617Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T11:54:14.618Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T11:54:14.618Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T11:54:14.619Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:14.620Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:14.640Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:16.259Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:54:16.261Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T11:54:16.261Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:16.262Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:16.282Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:17.783Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T11:54:17.783Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:54:17.932Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T11:54:17.932Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T11:54:17.933Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T11:54:17.933Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:17.935Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:17.953Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:19.455Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T11:54:19.455Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:54:19.609Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T11:54:19.609Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T11:54:19.610Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T11:54:19.610Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:19.612Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:19.633Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:21.272Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T11:54:21.272Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:54:21.273Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T11:54:21.273Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:21.275Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:21.297Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:25.798Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T11:54:25.799Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:54:26.004Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T11:54:26.005Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:26.007Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:26.028Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:27.530Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:54:27.683Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T11:54:27.684Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T11:54:27.684Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:27.686Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:27.704Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:29.205Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T11:54:29.205Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T11:54:29.423Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T11:54:29.424Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T11:54:29.424Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:29.426Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:29.442Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:30.943Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T11:54:30.943Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:54:31.127Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T11:54:31.128Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:31.130Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:31.149Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:35.651Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T11:54:35.652Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T11:54:35.652Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T11:54:36.004Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T11:54:36.004Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T11:54:36.005Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T11:54:36.005Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T11:54:36.007Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T11:54:36.025Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:54:40.527Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T11:54:40.529Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T11:54:40.619Z] [BOT] 📂 Loaded 7931 existing routing entries
[2026-01-24T11:54:40.715Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T11:54:40.715Z] [BOT] Total entries: 7941
   Timestamp: 2026-01-24T11:54:40.677Z
[2026-01-24T11:54:40.716Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T11:54:40.716Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T11:54:40.716Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T11:54:40.716Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-24T11:54:40.716Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T11:54:40.716Z] [BOT] [STATS] Channel stats saved
[2026-01-24T11:54:42.735Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*