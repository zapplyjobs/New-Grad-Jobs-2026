# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T18:32:23.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T18:31:45.221Z] ========================================
[2026-01-23T18:31:45.223Z] Discord Bot Execution Log
[2026-01-23T18:31:45.223Z] Environment: GitHub Actions
[2026-01-23T18:31:45.223Z] Node Version: v20.20.0
[2026-01-23T18:31:45.223Z] ========================================
[2026-01-23T18:31:45.223Z] Environment Variables Check:
[2026-01-23T18:31:45.223Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T18:31:45.223Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.223Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T18:31:45.223Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T18:31:45.223Z] 
Multi-Channel Configuration:
[2026-01-23T18:31:45.224Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T18:31:45.224Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T18:31:45.224Z] 
Data Files Check:
[2026-01-23T18:31:45.225Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T18:31:45.237Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1792872 bytes)
[2026-01-23T18:31:45.237Z] 
========================================
[2026-01-23T18:31:45.237Z] Starting Enhanced Discord Bot...
[2026-01-23T18:31:45.237Z] ========================================
[2026-01-23T18:31:45.778Z] [BOT] ✅ Loaded V2 database: 3072 jobs
[2026-01-23T18:31:49.831Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T18:31:49.831Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T18:31:49.832Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T18:31:49.948Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[2026-01-23T18:31:49.949Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T18:31:49.954Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T18:31:49.954Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T18:31:49.954Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T18:31:49.955Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T18:31:49.955Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T18:31:49.955Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T18:31:49.957Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T18:31:49.958Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T18:31:49.958Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:31:49.975Z] [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T18:31:50.369Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T18:31:50.370Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T18:31:50.370Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:31:50.373Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T18:31:50.378Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-23T18:31:50.378Z] [BOT] ✅ Archiving complete: 7 archived, 3065 active
[2026-01-23T18:31:50.400Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:31:51.901Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T18:31:51.901Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:31:52.146Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T18:31:52.146Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T18:31:52.146Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T18:31:52.147Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:31:52.148Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:31:52.167Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:31:53.669Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:31:53.886Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T18:31:53.886Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T18:31:53.887Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T18:31:53.887Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:31:53.889Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:31:53.908Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:31:55.754Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T18:31:55.755Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T18:31:55.755Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:31:55.757Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:31:55.775Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:31:57.277Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:31:57.473Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T18:31:57.474Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T18:31:57.474Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:31:57.476Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:31:57.496Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:31:58.999Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:31:59.250Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T18:31:59.251Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T18:31:59.251Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:31:59.253Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:31:59.272Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:01.037Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T18:32:01.037Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T18:32:01.038Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:01.039Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:01.059Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:05.562Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T18:32:05.563Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T18:32:05.563Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T18:32:05.780Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:32:05.781Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T18:32:05.781Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:05.783Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:05.806Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:07.308Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T18:32:07.308Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T18:32:07.523Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T18:32:07.524Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:32:07.524Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:07.527Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:07.547Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:09.049Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:32:09.049Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T18:32:09.381Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T18:32:09.382Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T18:32:09.382Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:09.384Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:09.406Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:10.908Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:32:11.120Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T18:32:11.120Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:32:11.120Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:11.122Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:11.142Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:15.644Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T18:32:15.645Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T18:32:15.645Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T18:32:16.019Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T18:32:16.019Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T18:32:16.019Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T18:32:16.019Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:32:16.021Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:32:16.040Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:32:20.543Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T18:32:20.546Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T18:32:20.631Z] [BOT] 📂 Loaded 7391 existing routing entries
[2026-01-23T18:32:20.726Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7401
[2026-01-23T18:32:20.727Z] [BOT] Timestamp: 2026-01-23T18:32:20.694Z
[2026-01-23T18:32:20.727Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T18:32:20.727Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T18:32:20.728Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T18:32:20.728Z] [BOT] [STATS] Channel stats saved
[2026-01-23T18:32:22.746Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*