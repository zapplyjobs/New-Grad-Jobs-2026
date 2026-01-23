# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T07:31:05.257Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T07:30:31.458Z] ========================================
[2026-01-23T07:30:31.460Z] Discord Bot Execution Log
[2026-01-23T07:30:31.460Z] Environment: GitHub Actions
[2026-01-23T07:30:31.460Z] Node Version: v20.20.0
[2026-01-23T07:30:31.460Z] ========================================
[2026-01-23T07:30:31.460Z] Environment Variables Check:
[2026-01-23T07:30:31.460Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T07:30:31.460Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T07:30:31.461Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T07:30:31.461Z] 
Multi-Channel Configuration:
[2026-01-23T07:30:31.461Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.461Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.462Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T07:30:31.462Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T07:30:31.462Z] 
Data Files Check:
[2026-01-23T07:30:31.462Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T07:30:31.474Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1839843 bytes)
[2026-01-23T07:30:31.474Z] 
========================================
[2026-01-23T07:30:31.474Z] Starting Enhanced Discord Bot...
[2026-01-23T07:30:31.474Z] ========================================
[2026-01-23T07:30:32.032Z] [BOT] ✅ Loaded V2 database: 3154 jobs
[2026-01-23T07:30:32.485Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T07:30:32.485Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T07:30:32.485Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T07:30:32.602Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T07:30:32.607Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T07:30:32.607Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T07:30:32.607Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T07:30:32.608Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T07:30:32.608Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T07:30:32.609Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T07:30:32.610Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T07:30:32.611Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T07:30:32.611Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:30:32.628Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T07:30:32.766Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T07:30:32.767Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T07:30:32.767Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T07:30:32.768Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:32.770Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:32.806Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:34.307Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:30:34.433Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T07:30:34.434Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T07:30:34.434Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:34.436Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:34.455Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:35.956Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:30:36.067Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T07:30:36.068Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T07:30:36.068Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:36.070Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:36.092Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:37.821Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T07:30:37.821Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:30:37.822Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T07:30:37.822Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:37.824Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:37.845Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:39.346Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T07:30:39.346Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:30:39.493Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T07:30:39.494Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T07:30:39.494Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T07:30:39.494Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:39.497Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:39.519Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:41.021Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T07:30:41.021Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T07:30:41.221Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T07:30:41.222Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:41.224Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:41.246Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:43.025Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T07:30:43.025Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:30:43.025Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T07:30:43.025Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:43.028Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:43.051Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
[2026-01-23T07:30:43.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:47.553Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T07:30:47.555Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:30:47.940Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T07:30:47.940Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T07:30:47.940Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:47.942Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:30:47.963Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:49.466Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T07:30:49.466Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T07:30:49.692Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T07:30:49.693Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:30:49.693Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:30:49.696Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T07:30:49.697Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T07:30:49.697Z] [BOT] ✅ Archiving complete: 1 archived, 3153 active
[2026-01-23T07:30:49.718Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:51.220Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T07:30:51.220Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T07:30:51.426Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T07:30:51.427Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T07:30:51.427Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-23T07:30:51.429Z] [BOT] ✅ No jobs to archive (all 3153 jobs within 7-day window)
[2026-01-23T07:30:51.449Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:52.950Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:30:53.096Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T07:30:53.096Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:30:53.096Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-23T07:30:53.100Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (3 total in archive)
[2026-01-23T07:30:53.100Z] [BOT] ✅ Archiving complete: 2 archived, 3151 active
[2026-01-23T07:30:53.120Z] [BOT] 💾 Saved posted_jobs.json: 3151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:30:57.622Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T07:30:57.622Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T07:30:57.622Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T07:30:57.802Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T07:30:57.802Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T07:30:57.803Z] [BOT] 💾 BEFORE ARCHIVING: 3151 jobs in database
[2026-01-23T07:30:57.806Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
[2026-01-23T07:30:57.806Z] [BOT] ✅ Archiving complete: 1 archived, 3150 active
[2026-01-23T07:30:57.826Z] [BOT] 💾 Saved posted_jobs.json: 3150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:31:02.328Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T07:31:02.330Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T07:31:02.414Z] [BOT] 📂 Loaded 7061 existing routing entries
[2026-01-23T07:31:02.511Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T07:31:02.513Z] [BOT] Total entries: 7071
   Timestamp: 2026-01-23T07:31:02.479Z
[2026-01-23T07:31:02.513Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T07:31:04.531Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*