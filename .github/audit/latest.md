# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T09:04:31.702Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T09:03:56.746Z] ========================================
[2026-01-23T09:03:56.748Z] Discord Bot Execution Log
[2026-01-23T09:03:56.748Z] Environment: GitHub Actions
[2026-01-23T09:03:56.748Z] Node Version: v20.20.0
[2026-01-23T09:03:56.748Z] ========================================
[2026-01-23T09:03:56.748Z] Environment Variables Check:
[2026-01-23T09:03:56.748Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T09:03:56.749Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T09:03:56.749Z] 
Multi-Channel Configuration:
[2026-01-23T09:03:56.749Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.749Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.750Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T09:03:56.750Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T09:03:56.750Z] 
Data Files Check:
[2026-01-23T09:03:56.750Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T09:03:56.763Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1807462 bytes)
[2026-01-23T09:03:56.763Z] 
========================================
[2026-01-23T09:03:56.763Z] Starting Enhanced Discord Bot...
[2026-01-23T09:03:56.763Z] ========================================
[2026-01-23T09:03:57.331Z] [BOT] ✅ Loaded V2 database: 3097 jobs
[2026-01-23T09:03:57.942Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T09:03:57.943Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T09:03:57.943Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T09:03:58.063Z] [BOT] ✅ Loaded pending queue: 2760 total (2740 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T09:03:58.068Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T09:03:58.069Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T09:03:58.069Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T09:03:58.070Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T09:03:58.070Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T09:03:58.072Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T09:03:58.073Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T09:03:58.073Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:03:58.090Z] [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T09:03:58.738Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T09:03:58.739Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T09:03:58.739Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:03:58.742Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:03:58.770Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T09:03:58.771Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:00.272Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T09:04:00.272Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:04:00.504Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T09:04:00.505Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T09:04:00.505Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T09:04:00.505Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:00.507Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:00.528Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:02.029Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:04:02.208Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T09:04:02.208Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T09:04:02.208Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:02.211Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:02.235Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:03.938Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T09:04:03.938Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:04:03.939Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T09:04:03.939Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:03.941Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:03.964Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:05.465Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:04:05.670Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T09:04:05.671Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T09:04:05.671Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:05.673Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:05.694Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:07.195Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T09:04:07.195Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:04:07.565Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T09:04:07.566Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T09:04:07.566Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:07.569Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:07.593Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:09.364Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T09:04:09.365Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T09:04:09.365Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:09.367Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:09.391Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:13.893Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T09:04:13.895Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:04:14.163Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T09:04:14.164Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T09:04:14.164Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:14.166Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:14.188Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:15.691Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T09:04:15.691Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:04:15.866Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T09:04:15.866Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T09:04:15.867Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:04:15.867Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:15.869Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:15.889Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:17.391Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:04:17.391Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T09:04:17.567Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T09:04:17.567Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T09:04:17.568Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T09:04:17.568Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:17.570Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:17.594Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:19.096Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T09:04:19.096Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:04:19.295Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T09:04:19.295Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T09:04:19.295Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:04:19.296Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:19.298Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:19.320Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:23.823Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T09:04:23.823Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T09:04:23.823Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T09:04:24.013Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T09:04:24.013Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T09:04:24.014Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T09:04:24.014Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:04:24.016Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T09:04:24.036Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:04:28.538Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T09:04:28.541Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T09:04:28.630Z] [BOT] 📂 Loaded 7111 existing routing entries
[2026-01-23T09:04:28.732Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T09:04:28.732Z] [BOT] Total entries: 7121
   Timestamp: 2026-01-23T09:04:28.698Z
[2026-01-23T09:04:28.733Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T09:04:28.733Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T09:04:28.734Z] [BOT] [STATS] Channel stats saved
[2026-01-23T09:04:30.752Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*