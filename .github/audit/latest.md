# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T06:14:36.819Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T06:14:02.112Z] ========================================
[2026-01-24T06:14:02.113Z] Discord Bot Execution Log
[2026-01-24T06:14:02.113Z] Environment: GitHub Actions
[2026-01-24T06:14:02.113Z] Node Version: v20.20.0
[2026-01-24T06:14:02.113Z] ========================================
[2026-01-24T06:14:02.113Z] Environment Variables Check:
[2026-01-24T06:14:02.113Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T06:14:02.114Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T06:14:02.114Z] 
Multi-Channel Configuration:
[2026-01-24T06:14:02.114Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T06:14:02.114Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T06:14:02.115Z] 
Data Files Check:
[2026-01-24T06:14:02.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T06:14:02.127Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1628370 bytes)
[2026-01-24T06:14:02.127Z] 
========================================
[2026-01-24T06:14:02.127Z] Starting Enhanced Discord Bot...
[2026-01-24T06:14:02.127Z] ========================================
[2026-01-24T06:14:02.582Z] [BOT] ✅ Loaded V2 database: 2775 jobs
[2026-01-24T06:14:03.287Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T06:14:03.287Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T06:14:03.288Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T06:14:03.441Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T06:14:03.444Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T06:14:03.444Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T06:14:03.445Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T06:14:03.445Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T06:14:03.446Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T06:14:03.446Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T06:14:03.448Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T06:14:03.448Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T06:14:03.449Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:14:03.467Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T06:14:03.638Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T06:14:03.638Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T06:14:03.639Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T06:14:03.639Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:03.641Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:03.667Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:05.169Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T06:14:05.170Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T06:14:05.412Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T06:14:05.413Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T06:14:05.414Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T06:14:05.414Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:05.416Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:05.434Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:06.935Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:14:07.369Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T06:14:07.369Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T06:14:07.369Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T06:14:07.370Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:07.371Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:07.391Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:09.168Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T06:14:09.168Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T06:14:09.169Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T06:14:09.169Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:09.171Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:09.188Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:10.689Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:14:10.838Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T06:14:10.839Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:10.841Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:10.861Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
[2026-01-24T06:14:10.861Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:12.363Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T06:14:12.363Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:14:12.596Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T06:14:12.596Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T06:14:12.597Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T06:14:12.597Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:12.599Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:12.619Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:14.269Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T06:14:14.270Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T06:14:14.270Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T06:14:14.270Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:14.272Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:14.292Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:18.794Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T06:14:18.795Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T06:14:18.796Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T06:14:19.080Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T06:14:19.081Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T06:14:19.081Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:19.083Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:19.101Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:20.604Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T06:14:20.604Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T06:14:20.838Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T06:14:20.839Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T06:14:20.839Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:20.841Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:20.860Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:22.362Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T06:14:22.362Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T06:14:22.582Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T06:14:22.583Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T06:14:22.583Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:22.584Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:22.603Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:24.104Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T06:14:24.104Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T06:14:24.281Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T06:14:24.282Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T06:14:24.282Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:24.284Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:24.301Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:28.803Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T06:14:28.804Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T06:14:28.804Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-24T06:14:29.063Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T06:14:29.063Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T06:14:29.064Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T06:14:29.064Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-24T06:14:29.066Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-24T06:14:29.084Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:14:33.587Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T06:14:33.589Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T06:14:33.667Z] [BOT] 📂 Loaded 7711 existing routing entries
[2026-01-24T06:14:33.769Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T06:14:33.769Z] [BOT] Total entries: 7721
   Timestamp: 2026-01-24T06:14:33.724Z
[2026-01-24T06:14:33.769Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T06:14:33.769Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T06:14:33.769Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T06:14:33.769Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T06:14:33.770Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T06:14:33.770Z] [BOT] [STATS] Channel stats saved
[2026-01-24T06:14:35.785Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*