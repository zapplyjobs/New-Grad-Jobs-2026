# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T00:56:03.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T00:55:22.204Z] ========================================
[2026-01-22T00:55:22.206Z] Discord Bot Execution Log
[2026-01-22T00:55:22.206Z] Environment: GitHub Actions
[2026-01-22T00:55:22.206Z] Node Version: v20.19.6
[2026-01-22T00:55:22.206Z] ========================================
[2026-01-22T00:55:22.206Z] Environment Variables Check:
[2026-01-22T00:55:22.206Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T00:55:22.206Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.206Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T00:55:22.207Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T00:55:22.207Z] 
Multi-Channel Configuration:
[2026-01-22T00:55:22.207Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T00:55:22.207Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T00:55:22.207Z] 
Data Files Check:
[2026-01-22T00:55:22.208Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T00:55:22.223Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2151808 bytes)
[2026-01-22T00:55:22.223Z] 
========================================
[2026-01-22T00:55:22.223Z] Starting Enhanced Discord Bot...
[2026-01-22T00:55:22.223Z] ========================================
[2026-01-22T00:55:22.758Z] [BOT] ✅ Loaded V2 database: 3704 jobs
[2026-01-22T00:55:23.665Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T00:55:23.665Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T00:55:23.666Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T00:55:23.779Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T00:55:23.783Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T00:55:23.784Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T00:55:23.784Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T00:55:23.785Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T00:55:23.785Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T00:55:23.788Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T00:55:23.789Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T00:55:23.789Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:55:23.806Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T00:55:24.187Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T00:55:24.188Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T00:55:24.188Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:55:24.191Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T00:55:24.196Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T00:55:24.197Z] [BOT] ✅ Archiving complete: 10 archived, 3694 active
[2026-01-22T00:55:24.224Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
[2026-01-22T00:55:24.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:25.726Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:55:26.041Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T00:55:26.042Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T00:55:26.042Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:26.044Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:26.068Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:27.865Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:55:27.866Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T00:55:27.866Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:27.868Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:27.893Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:29.395Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:55:29.572Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T00:55:29.572Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T00:55:29.573Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:29.575Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:29.599Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:31.639Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T00:55:31.639Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T00:55:31.640Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:31.642Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:31.663Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:33.165Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T00:55:33.165Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:55:33.479Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T00:55:33.479Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T00:55:33.479Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:33.482Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:33.510Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:35.012Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T00:55:35.013Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:55:35.281Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T00:55:35.281Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T00:55:35.282Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:35.284Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:35.307Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:37.019Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T00:55:37.020Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T00:55:37.020Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:37.023Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:37.050Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:41.552Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T00:55:41.554Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T00:55:41.932Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T00:55:41.933Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T00:55:41.933Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:41.935Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:41.957Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:43.461Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T00:55:43.704Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T00:55:43.705Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T00:55:43.705Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:43.708Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:43.731Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:45.542Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:55:45.543Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T00:55:45.543Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:45.545Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:45.567Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:47.069Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T00:55:47.069Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T00:55:47.229Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T00:55:47.230Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T00:55:47.230Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:47.233Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:47.257Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:48.759Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T00:55:48.759Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T00:55:49.039Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T00:55:49.039Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T00:55:49.039Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:49.041Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:49.064Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:50.743Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:55:50.744Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T00:55:50.744Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:50.746Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:50.768Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
[2026-01-22T00:55:50.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T00:55:55.270Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T00:55:55.270Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T00:55:55.271Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T00:55:55.482Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T00:55:55.483Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T00:55:55.483Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T00:55:55.485Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-22T00:55:55.508Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:56:00.010Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T00:56:00.012Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T00:56:00.079Z] [BOT] 📂 Loaded 6241 existing routing entries
[2026-01-22T00:56:00.168Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T00:56:00.168Z] [BOT] Total entries: 6251
   Timestamp: 2026-01-22T00:56:00.136Z
[2026-01-22T00:56:00.168Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T00:56:00.169Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T00:56:00.169Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T00:56:00.169Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T00:56:00.169Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T00:56:00.169Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T00:56:00.169Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T00:56:00.170Z] [BOT] [STATS] Channel stats saved
[2026-01-22T00:56:02.189Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*