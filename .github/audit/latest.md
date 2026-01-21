# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T22:48:29.325Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T22:47:48.780Z] ========================================
[2026-01-21T22:47:48.782Z] Discord Bot Execution Log
[2026-01-21T22:47:48.782Z] Environment: GitHub Actions
[2026-01-21T22:47:48.782Z] Node Version: v20.19.6
[2026-01-21T22:47:48.783Z] ========================================
[2026-01-21T22:47:48.783Z] Environment Variables Check:
[2026-01-21T22:47:48.783Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T22:47:48.783Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.783Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T22:47:48.783Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T22:47:48.783Z] 
Multi-Channel Configuration:
[2026-01-21T22:47:48.783Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.783Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T22:47:48.784Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T22:47:48.784Z] 
Data Files Check:
[2026-01-21T22:47:48.785Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T22:47:48.799Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2187114 bytes)
[2026-01-21T22:47:48.799Z] 
========================================
[2026-01-21T22:47:48.799Z] Starting Enhanced Discord Bot...
[2026-01-21T22:47:48.799Z] ========================================
[2026-01-21T22:47:49.346Z] [BOT] ✅ Loaded V2 database: 3775 jobs
[2026-01-21T22:47:49.798Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T22:47:49.798Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T22:47:49.799Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T22:47:49.914Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T22:47:49.919Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T22:47:49.919Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T22:47:49.920Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T22:47:49.920Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T22:47:49.921Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T22:47:49.924Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T22:47:49.924Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T22:47:49.924Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:47:49.941Z] [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T22:47:50.161Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T22:47:50.162Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T22:47:50.162Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T22:47:50.163Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:47:50.166Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T22:47:50.228Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T22:47:50.228Z] [BOT] ✅ Archiving complete: 10 archived, 3765 active
[2026-01-21T22:47:50.251Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:47:51.753Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-21T22:47:51.753Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T22:47:52.078Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T22:47:52.078Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T22:47:52.079Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T22:47:52.079Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:47:52.081Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:47:52.103Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
[2026-01-21T22:47:52.103Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T22:47:53.883Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T22:47:53.884Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T22:47:53.884Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:47:53.887Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:47:53.911Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:47:55.412Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-21T22:47:55.413Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:47:55.610Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T22:47:55.610Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T22:47:55.611Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:47:55.614Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:47:55.640Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:47:57.290Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:47:57.291Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T22:47:57.291Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:47:57.293Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:47:57.315Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:47:58.816Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T22:47:58.816Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:47:59.018Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-21T22:47:59.018Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T22:47:59.019Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T22:47:59.019Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:47:59.022Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:47:59.047Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:00.548Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-21T22:48:00.549Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T22:48:00.775Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T22:48:00.776Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T22:48:00.776Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:00.778Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:00.802Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:02.506Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:48:02.507Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T22:48:02.507Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:02.510Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:02.535Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:07.037Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T22:48:07.038Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:48:07.431Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T22:48:07.432Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T22:48:07.432Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:07.435Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:07.457Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:08.959Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-21T22:48:08.959Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T22:48:09.378Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T22:48:09.378Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T22:48:09.379Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:48:09.379Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:09.381Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:09.406Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:11.079Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T22:48:11.080Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T22:48:11.080Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:48:11.080Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:11.083Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:11.105Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:12.605Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-21T22:48:12.606Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T22:48:12.780Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-21T22:48:12.780Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T22:48:12.781Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T22:48:12.781Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:12.783Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:12.808Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:14.310Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-21T22:48:14.310Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:48:14.541Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-21T22:48:14.541Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T22:48:14.542Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:48:14.542Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:14.544Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:14.566Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:16.282Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T22:48:16.282Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T22:48:16.283Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:48:16.283Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:16.286Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:16.307Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:20.809Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T22:48:20.809Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T22:48:20.809Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T22:48:21.876Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T22:48:21.877Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T22:48:21.877Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T22:48:21.879Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T22:48:21.902Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:48:26.402Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T22:48:26.404Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T22:48:26.470Z] [BOT] 📂 Loaded 6171 existing routing entries
[2026-01-21T22:48:26.559Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T22:48:26.559Z] [BOT] Total entries: 6181
   Timestamp: 2026-01-21T22:48:26.527Z
[2026-01-21T22:48:26.560Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T22:48:26.560Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T22:48:26.560Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T22:48:26.560Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-21T22:48:26.560Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T22:48:26.560Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T22:48:26.561Z] [BOT] [STATS] Channel stats saved
[2026-01-21T22:48:28.580Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*