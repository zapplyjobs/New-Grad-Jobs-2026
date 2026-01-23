# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T07:16:59.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T07:16:23.868Z] ========================================
[2026-01-23T07:16:23.870Z] Discord Bot Execution Log
[2026-01-23T07:16:23.871Z] Environment: GitHub Actions
[2026-01-23T07:16:23.871Z] Node Version: v20.20.0
[2026-01-23T07:16:23.871Z] ========================================
[2026-01-23T07:16:23.871Z] Environment Variables Check:
[2026-01-23T07:16:23.871Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T07:16:23.871Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.871Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T07:16:23.871Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T07:16:23.871Z] 
Multi-Channel Configuration:
[2026-01-23T07:16:23.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.871Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T07:16:23.872Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T07:16:23.872Z] 
Data Files Check:
[2026-01-23T07:16:23.873Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T07:16:23.885Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1845502 bytes)
[2026-01-23T07:16:23.885Z] 
========================================
[2026-01-23T07:16:23.885Z] Starting Enhanced Discord Bot...
[2026-01-23T07:16:23.885Z] ========================================
[2026-01-23T07:16:24.434Z] [BOT] ✅ Loaded V2 database: 3164 jobs
[2026-01-23T07:16:24.965Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T07:16:24.965Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T07:16:24.965Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T07:16:25.084Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T07:16:25.088Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T07:16:25.088Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T07:16:25.088Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T07:16:25.089Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T07:16:25.089Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T07:16:25.091Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T07:16:25.092Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T07:16:25.094Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:16:25.116Z] [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T07:16:25.537Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T07:16:25.537Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T07:16:25.538Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T07:16:25.538Z] [BOT] 💾 BEFORE ARCHIVING: 3164 jobs in database
[2026-01-23T07:16:25.541Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T07:16:25.546Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-23T07:16:25.546Z] [BOT] ✅ Archiving complete: 10 archived, 3154 active
[2026-01-23T07:16:25.571Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:27.072Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T07:16:27.072Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:16:27.308Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T07:16:27.308Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T07:16:27.308Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T07:16:27.309Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:27.311Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:27.329Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:28.830Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T07:16:28.830Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:16:29.047Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T07:16:29.047Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T07:16:29.048Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T07:16:29.048Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:29.050Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:29.071Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:30.975Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T07:16:30.976Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:16:30.976Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T07:16:30.976Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:30.979Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:31.000Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
[2026-01-23T07:16:31.000Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:32.502Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T07:16:32.502Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T07:16:32.716Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T07:16:32.716Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T07:16:32.717Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T07:16:32.717Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:32.719Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:32.740Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:34.241Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T07:16:34.241Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:16:34.795Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T07:16:34.795Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T07:16:34.796Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T07:16:34.796Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:34.798Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:34.821Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:36.545Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T07:16:36.545Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:16:36.546Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T07:16:36.546Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:36.548Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:36.568Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:41.070Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T07:16:41.072Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T07:16:41.072Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T07:16:41.294Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T07:16:41.295Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T07:16:41.295Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:41.297Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:41.318Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:42.820Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T07:16:42.820Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:16:43.068Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T07:16:43.069Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:16:43.069Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:43.071Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:43.090Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
[2026-01-23T07:16:43.090Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:44.592Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:16:44.593Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T07:16:44.909Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T07:16:44.910Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T07:16:44.910Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:44.912Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:44.931Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:46.432Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T07:16:46.433Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T07:16:46.842Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T07:16:46.843Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:16:46.843Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:46.845Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:46.863Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
[2026-01-23T07:16:46.863Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:51.366Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T07:16:51.366Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T07:16:51.366Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T07:16:51.596Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T07:16:51.596Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T07:16:51.596Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-23T07:16:51.598Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-23T07:16:51.617Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:16:56.119Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T07:16:56.121Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T07:16:56.201Z] [BOT] 📂 Loaded 7051 existing routing entries
[2026-01-23T07:16:56.293Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7061
[2026-01-23T07:16:56.293Z] [BOT] Timestamp: 2026-01-23T07:16:56.262Z
[2026-01-23T07:16:56.294Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T07:16:56.294Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T07:16:56.294Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-23T07:16:56.294Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T07:16:56.294Z] [BOT] [STATS] Channel stats saved
[2026-01-23T07:16:58.312Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*