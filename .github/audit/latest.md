# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T09:37:34.080Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T09:36:59.152Z] ========================================
[2026-01-23T09:36:59.154Z] Discord Bot Execution Log
[2026-01-23T09:36:59.154Z] Environment: GitHub Actions
[2026-01-23T09:36:59.154Z] Node Version: v20.20.0
[2026-01-23T09:36:59.154Z] ========================================
[2026-01-23T09:36:59.154Z] Environment Variables Check:
[2026-01-23T09:36:59.154Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T09:36:59.154Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.154Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T09:36:59.155Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T09:36:59.155Z] 
Multi-Channel Configuration:
[2026-01-23T09:36:59.155Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T09:36:59.155Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T09:36:59.156Z] 
Data Files Check:
[2026-01-23T09:36:59.156Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T09:36:59.169Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806853 bytes)
[2026-01-23T09:36:59.169Z] 
========================================
[2026-01-23T09:36:59.169Z] Starting Enhanced Discord Bot...
[2026-01-23T09:36:59.169Z] ========================================
[2026-01-23T09:36:59.696Z] [BOT] ✅ Loaded V2 database: 3096 jobs
[2026-01-23T09:37:00.366Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T09:37:00.367Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T09:37:00.367Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T09:37:00.484Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T09:37:00.488Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T09:37:00.489Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T09:37:00.489Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T09:37:00.490Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T09:37:00.490Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T09:37:00.492Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T09:37:00.493Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T09:37:00.493Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:37:00.509Z] [BOT ERROR] (node:2451) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T09:37:00.820Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T09:37:00.821Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T09:37:00.821Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:00.824Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:00.849Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:02.351Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:37:02.606Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T09:37:02.606Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T09:37:02.607Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T09:37:02.607Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:02.609Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:02.629Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:04.130Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T09:37:04.130Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T09:37:04.289Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T09:37:04.289Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T09:37:04.290Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T09:37:04.290Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:04.292Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:04.314Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:06.033Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T09:37:06.033Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:37:06.034Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T09:37:06.034Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:06.036Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:06.056Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:07.557Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T09:37:07.558Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:37:07.743Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T09:37:07.744Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T09:37:07.744Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T09:37:07.744Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:07.746Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:07.767Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:09.268Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T09:37:09.269Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:37:09.586Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T09:37:09.586Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T09:37:09.586Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T09:37:09.586Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:09.588Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:09.611Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:11.384Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T09:37:11.384Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:37:11.384Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T09:37:11.384Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:11.386Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:11.406Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:15.910Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T09:37:15.911Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:37:16.253Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T09:37:16.253Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T09:37:16.253Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:16.255Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:16.276Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:17.779Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:37:18.099Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T09:37:18.100Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:37:18.100Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:18.102Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:18.121Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
[2026-01-23T09:37:18.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:19.622Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:37:19.623Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T09:37:19.818Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T09:37:19.818Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T09:37:19.818Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:19.820Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:19.839Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:21.340Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:37:21.654Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T09:37:21.655Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:37:21.655Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:21.657Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:21.676Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:26.178Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T09:37:26.178Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T09:37:26.178Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T09:37:26.444Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T09:37:26.445Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T09:37:26.445Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T09:37:26.445Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:37:26.447Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:37:26.466Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:37:30.968Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T09:37:30.971Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T09:37:31.052Z] [BOT] 📂 Loaded 7131 existing routing entries
[2026-01-23T09:37:31.145Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7141
[2026-01-23T09:37:31.145Z] [BOT] Timestamp: 2026-01-23T09:37:31.114Z
[2026-01-23T09:37:31.146Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T09:37:31.147Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T09:37:33.166Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2451) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*