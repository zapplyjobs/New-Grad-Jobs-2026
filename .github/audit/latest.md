# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T07:56:22.759Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T07:55:47.523Z] ========================================
[2026-01-23T07:55:47.525Z] Discord Bot Execution Log
[2026-01-23T07:55:47.525Z] Environment: GitHub Actions
[2026-01-23T07:55:47.525Z] Node Version: v20.20.0
[2026-01-23T07:55:47.525Z] ========================================
[2026-01-23T07:55:47.525Z] Environment Variables Check:
[2026-01-23T07:55:47.525Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T07:55:47.525Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.525Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T07:55:47.525Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T07:55:47.525Z] 
Multi-Channel Configuration:
[2026-01-23T07:55:47.525Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.525Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.525Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.525Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T07:55:47.526Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T07:55:47.526Z] 
Data Files Check:
[2026-01-23T07:55:47.527Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T07:55:47.540Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1832356 bytes)
[2026-01-23T07:55:47.540Z] 
========================================
[2026-01-23T07:55:47.540Z] Starting Enhanced Discord Bot...
[2026-01-23T07:55:47.540Z] ========================================
[2026-01-23T07:55:48.006Z] [BOT] ✅ Loaded V2 database: 3140 jobs
[2026-01-23T07:55:48.862Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T07:55:48.863Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T07:55:48.863Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T07:55:49.016Z] [BOT] ✅ Loaded pending queue: 2760 total (2740 pending, 20 enriched, 0 posted)
[2026-01-23T07:55:49.018Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T07:55:49.022Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T07:55:49.022Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T07:55:49.022Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T07:55:49.023Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T07:55:49.023Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T07:55:49.023Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T07:55:49.025Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T07:55:49.026Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T07:55:49.026Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:55:49.042Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T07:55:49.291Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T07:55:49.291Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T07:55:49.291Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T07:55:49.292Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-23T07:55:49.294Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T07:55:49.298Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T07:55:49.298Z] [BOT] ✅ Archiving complete: 11 archived, 3129 active
[2026-01-23T07:55:49.322Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:50.823Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T07:55:50.823Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T07:55:51.058Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T07:55:51.058Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:51.061Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:51.081Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:52.581Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:55:52.895Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T07:55:52.896Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T07:55:52.896Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:52.898Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:52.920Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:54.583Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T07:55:54.583Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:55:54.583Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T07:55:54.583Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:54.585Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:54.609Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:56.111Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:55:56.323Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T07:55:56.324Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T07:55:56.324Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:56.326Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:56.347Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:57.848Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:55:58.141Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T07:55:58.141Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T07:55:58.141Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:58.143Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:58.163Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:55:59.867Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T07:55:59.867Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T07:55:59.867Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:55:59.869Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:55:59.890Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:04.391Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T07:56:04.392Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T07:56:04.392Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T07:56:04.618Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T07:56:04.619Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T07:56:04.619Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:56:04.621Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:56:04.644Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:06.147Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:56:06.524Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T07:56:06.524Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:56:06.524Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:56:06.527Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:56:06.551Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:08.052Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T07:56:08.256Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T07:56:08.257Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T07:56:08.257Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:56:08.259Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:56:08.279Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:09.780Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:56:10.159Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T07:56:10.160Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T07:56:10.160Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:56:10.160Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:56:10.162Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:56:10.184Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:14.686Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T07:56:14.686Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T07:56:14.950Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T07:56:14.950Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T07:56:14.950Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T07:56:14.952Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-23T07:56:14.973Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
[2026-01-23T07:56:14.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:56:19.476Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T07:56:19.477Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T07:56:19.567Z] [BOT] 📂 Loaded 7081 existing routing entries
[2026-01-23T07:56:19.658Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7091
[2026-01-23T07:56:19.659Z] [BOT] Timestamp: 2026-01-23T07:56:19.632Z
[2026-01-23T07:56:19.659Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T07:56:19.660Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T07:56:19.660Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T07:56:19.660Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T07:56:19.660Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T07:56:19.660Z] [BOT] [STATS] Channel stats saved
[2026-01-23T07:56:21.673Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*