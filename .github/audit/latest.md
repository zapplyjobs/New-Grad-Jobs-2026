# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T02:37:18.744Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T02:36:43.637Z] ========================================
[2026-01-23T02:36:43.639Z] Discord Bot Execution Log
[2026-01-23T02:36:43.639Z] Environment: GitHub Actions
[2026-01-23T02:36:43.639Z] Node Version: v20.20.0
[2026-01-23T02:36:43.639Z] ========================================
[2026-01-23T02:36:43.639Z] Environment Variables Check:
[2026-01-23T02:36:43.639Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T02:36:43.639Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.639Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T02:36:43.639Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T02:36:43.640Z] 
Multi-Channel Configuration:
[2026-01-23T02:36:43.640Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T02:36:43.640Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T02:36:43.640Z] 
Data Files Check:
[2026-01-23T02:36:43.641Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T02:36:43.654Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1895437 bytes)
[2026-01-23T02:36:43.654Z] 
========================================
[2026-01-23T02:36:43.654Z] Starting Enhanced Discord Bot...
[2026-01-23T02:36:43.654Z] ========================================
[2026-01-23T02:36:44.180Z] [BOT] ✅ Loaded V2 database: 3251 jobs
[2026-01-23T02:36:45.166Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T02:36:45.167Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T02:36:45.167Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T02:36:45.283Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T02:36:45.287Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T02:36:45.287Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T02:36:45.287Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T02:36:45.288Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T02:36:45.288Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T02:36:45.290Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T02:36:45.290Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T02:36:45.291Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T02:36:45.307Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T02:36:45.612Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T02:36:45.612Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T02:36:45.613Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T02:36:45.613Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T02:36:45.616Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T02:36:45.623Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-23T02:36:45.623Z] [BOT] ✅ Archiving complete: 10 archived, 3241 active
[2026-01-23T02:36:45.645Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:47.146Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T02:36:47.146Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T02:36:47.328Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T02:36:47.328Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T02:36:47.329Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T02:36:47.329Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:47.331Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:47.351Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:48.851Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T02:36:48.852Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T02:36:49.050Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T02:36:49.051Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T02:36:49.051Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:49.053Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:49.076Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:51.001Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T02:36:51.001Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T02:36:51.001Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T02:36:51.001Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:51.004Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:51.025Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:52.526Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T02:36:52.737Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T02:36:52.738Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T02:36:52.738Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:52.740Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:52.761Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:54.262Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T02:36:54.262Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T02:36:54.432Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T02:36:54.432Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T02:36:54.432Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T02:36:54.432Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:54.435Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:54.458Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:36:56.243Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T02:36:56.243Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T02:36:56.243Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T02:36:56.244Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:36:56.245Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:36:56.267Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:00.768Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T02:37:00.770Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T02:37:01.062Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T02:37:01.063Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T02:37:01.063Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:37:01.065Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:37:01.087Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:02.589Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T02:37:02.589Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T02:37:02.747Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T02:37:02.747Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T02:37:02.747Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T02:37:02.747Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:37:02.749Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:37:02.769Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:04.272Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T02:37:04.272Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T02:37:04.511Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T02:37:04.511Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T02:37:04.511Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:37:04.513Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:37:04.534Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:06.035Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T02:37:06.035Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T02:37:06.476Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T02:37:06.476Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T02:37:06.476Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T02:37:06.476Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:37:06.478Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:37:06.499Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:11.001Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T02:37:11.002Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T02:37:11.002Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T02:37:11.201Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T02:37:11.201Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T02:37:11.201Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T02:37:11.201Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T02:37:11.203Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-23T02:37:11.223Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T02:37:15.725Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T02:37:15.727Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T02:37:15.808Z] [BOT] 📂 Loaded 6951 existing routing entries
[2026-01-23T02:37:15.899Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T02:37:15.899Z] [BOT] Total entries: 6961
   Timestamp: 2026-01-23T02:37:15.868Z
[2026-01-23T02:37:15.900Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T02:37:15.900Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T02:37:15.900Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T02:37:15.900Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-23T02:37:15.900Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T02:37:15.900Z] [BOT] [STATS] Channel stats saved
[2026-01-23T02:37:17.918Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*