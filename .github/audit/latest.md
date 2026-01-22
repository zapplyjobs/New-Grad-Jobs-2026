# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:24:57.023Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:24:19.913Z] ========================================
[2026-01-22T23:24:19.914Z] Discord Bot Execution Log
[2026-01-22T23:24:19.915Z] Environment: GitHub Actions
[2026-01-22T23:24:19.915Z] Node Version: v20.20.0
[2026-01-22T23:24:19.915Z] ========================================
[2026-01-22T23:24:19.915Z] Environment Variables Check:
[2026-01-22T23:24:19.915Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:24:19.915Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.915Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:24:19.915Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:24:19.915Z] 
Multi-Channel Configuration:
[2026-01-22T23:24:19.915Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:24:19.916Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:24:19.916Z] 
Data Files Check:
[2026-01-22T23:24:19.917Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-22T23:24:19.929Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1919056 bytes)
[2026-01-22T23:24:19.929Z] 
========================================
[2026-01-22T23:24:19.929Z] Starting Enhanced Discord Bot...
[2026-01-22T23:24:19.929Z] ========================================
[2026-01-22T23:24:20.475Z] [BOT] ✅ Loaded V2 database: 3294 jobs
[2026-01-22T23:24:22.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:24:22.628Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:24:22.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:24:22.744Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:24:22.749Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:24:22.749Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T23:24:22.749Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T23:24:22.750Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T23:24:22.750Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T23:24:22.750Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:24:22.752Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:24:22.753Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:24:22.753Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:24:22.770Z] [BOT ERROR] (node:2675) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:24:23.133Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T23:24:23.133Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:24:23.134Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:24:23.134Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:23.136Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:23.161Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:24.662Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T23:24:24.662Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:24:24.968Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T23:24:24.968Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:24:24.968Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T23:24:24.969Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:24.971Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:24.991Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:26.493Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:24:26.692Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T23:24:26.692Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:24:26.693Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:24:26.693Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:26.695Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:26.717Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:28.422Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T23:24:28.423Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:24:28.423Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:28.426Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:28.447Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:29.949Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:24:30.343Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:24:30.343Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:24:30.344Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:30.346Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:30.367Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:31.868Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T23:24:31.868Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:24:32.046Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:24:32.047Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:24:32.047Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:32.050Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:32.073Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:33.866Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T23:24:33.867Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:24:33.867Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:24:33.867Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:33.870Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:33.892Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:38.394Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:24:38.396Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:24:38.616Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:24:38.617Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:24:38.617Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:38.619Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:38.641Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:40.143Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:24:40.592Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:24:40.593Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:24:40.593Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:40.595Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:40.615Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:42.117Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T23:24:42.117Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:24:42.425Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:24:42.426Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:24:42.426Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:42.428Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:42.448Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:43.950Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:24:44.259Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:24:44.259Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:24:44.260Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:44.262Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:44.283Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:48.784Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:24:48.784Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-22T23:24:48.785Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:24:49.033Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:24:49.033Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:24:49.033Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:24:49.035Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:24:49.056Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:24:53.558Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:24:53.561Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:24:53.642Z] [BOT] 📂 Loaded 6881 existing routing entries
[2026-01-22T23:24:53.735Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6891
[2026-01-22T23:24:53.735Z] [BOT] Timestamp: 2026-01-22T23:24:53.704Z
[2026-01-22T23:24:53.735Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 12
[2026-01-22T23:24:53.735Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T23:24:53.736Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-22T23:24:55.754Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2675) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*