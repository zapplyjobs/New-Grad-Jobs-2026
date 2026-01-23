# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T16:14:32.979Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T16:13:57.962Z] ========================================
[2026-01-23T16:13:57.964Z] Discord Bot Execution Log
[2026-01-23T16:13:57.964Z] Environment: GitHub Actions
[2026-01-23T16:13:57.964Z] Node Version: v20.20.0
[2026-01-23T16:13:57.964Z] ========================================
[2026-01-23T16:13:57.964Z] Environment Variables Check:
[2026-01-23T16:13:57.964Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T16:13:57.965Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T16:13:57.965Z] 
Multi-Channel Configuration:
[2026-01-23T16:13:57.965Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.965Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.966Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T16:13:57.966Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T16:13:57.966Z] 
Data Files Check:
[2026-01-23T16:13:57.966Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T16:13:57.978Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1800604 bytes)
[2026-01-23T16:13:57.978Z] 
========================================
[2026-01-23T16:13:57.978Z] Starting Enhanced Discord Bot...
[2026-01-23T16:13:57.978Z] ========================================
[2026-01-23T16:13:58.519Z] [BOT] ✅ Loaded V2 database: 3085 jobs
[2026-01-23T16:13:59.118Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T16:13:59.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T16:13:59.118Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T16:13:59.237Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T16:13:59.240Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T16:13:59.241Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T16:13:59.241Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T16:13:59.242Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T16:13:59.242Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T16:13:59.244Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T16:13:59.244Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T16:13:59.244Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:13:59.261Z] [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T16:13:59.564Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T16:13:59.565Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T16:13:59.565Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T16:13:59.566Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:13:59.568Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:13:59.592Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:01.094Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T16:14:01.095Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T16:14:01.359Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T16:14:01.360Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T16:14:01.360Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T16:14:01.360Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:01.362Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:01.380Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:02.881Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T16:14:02.881Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:14:03.038Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T16:14:03.039Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T16:14:03.039Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:03.041Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:03.064Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:05.022Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T16:14:05.023Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T16:14:05.023Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:05.025Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:05.046Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:06.548Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:14:06.732Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T16:14:06.732Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T16:14:06.732Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:06.735Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:06.755Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:08.256Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T16:14:08.257Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:14:08.645Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T16:14:08.645Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T16:14:08.646Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T16:14:08.646Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:08.648Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:08.670Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:10.424Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T16:14:10.424Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T16:14:10.425Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T16:14:10.425Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:10.427Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:10.447Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:14.951Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T16:14:14.953Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:14:15.202Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T16:14:15.202Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T16:14:15.202Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:15.204Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:15.225Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:16.727Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T16:14:16.728Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T16:14:16.893Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T16:14:16.894Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:14:16.894Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:16.896Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:16.916Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:18.417Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T16:14:18.417Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T16:14:18.640Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T16:14:18.640Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T16:14:18.640Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:18.642Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:18.661Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:20.161Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T16:14:20.162Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:14:20.373Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T16:14:20.373Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T16:14:20.373Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:14:20.374Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:20.375Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:20.395Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:24.897Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T16:14:24.897Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T16:14:24.897Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T16:14:25.403Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T16:14:25.403Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T16:14:25.404Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T16:14:25.404Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:14:25.405Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T16:14:25.425Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:14:29.926Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T16:14:29.928Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T16:14:30.010Z] [BOT] 📂 Loaded 7301 existing routing entries
[2026-01-23T16:14:30.107Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7311
   Timestamp: 2026-01-23T16:14:30.074Z
[2026-01-23T16:14:30.108Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
[2026-01-23T16:14:30.108Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-23T16:14:30.108Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T16:14:30.108Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T16:14:30.108Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T16:14:30.109Z] [BOT] [STATS] Channel stats saved
[2026-01-23T16:14:32.127Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*