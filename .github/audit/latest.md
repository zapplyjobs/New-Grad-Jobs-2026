# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T07:04:29.642Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T07:03:53.851Z] ========================================
[2026-01-24T07:03:53.853Z] Discord Bot Execution Log
[2026-01-24T07:03:53.853Z] Environment: GitHub Actions
[2026-01-24T07:03:53.853Z] Node Version: v20.20.0
[2026-01-24T07:03:53.853Z] ========================================
[2026-01-24T07:03:53.853Z] Environment Variables Check:
[2026-01-24T07:03:53.853Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T07:03:53.853Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.853Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T07:03:53.853Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T07:03:53.853Z] 
Multi-Channel Configuration:
[2026-01-24T07:03:53.853Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T07:03:53.854Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T07:03:53.854Z] 
Data Files Check:
[2026-01-24T07:03:53.855Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T07:03:53.867Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1623991 bytes)
[2026-01-24T07:03:53.867Z] 
========================================
[2026-01-24T07:03:53.867Z] Starting Enhanced Discord Bot...
[2026-01-24T07:03:53.867Z] ========================================
[2026-01-24T07:03:54.403Z] [BOT] ✅ Loaded V2 database: 2767 jobs
[2026-01-24T07:03:54.997Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T07:03:54.997Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T07:03:54.998Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T07:03:55.120Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-24T07:03:55.121Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T07:03:55.125Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T07:03:55.126Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T07:03:55.126Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T07:03:55.127Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T07:03:55.127Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T07:03:55.129Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T07:03:55.129Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T07:03:55.129Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:03:55.148Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T07:03:55.395Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T07:03:55.395Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T07:03:55.396Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T07:03:55.396Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T07:03:55.399Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T07:03:55.404Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-24T07:03:55.404Z] [BOT] ✅ Archiving complete: 7 archived, 2760 active
[2026-01-24T07:03:55.431Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:03:56.934Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:03:57.096Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T07:03:57.096Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T07:03:57.097Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T07:03:57.097Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:03:57.100Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:03:57.117Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:03:58.618Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:03:58.777Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T07:03:58.777Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T07:03:58.778Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T07:03:58.778Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:03:58.780Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:03:58.800Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:00.509Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T07:04:00.510Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T07:04:00.510Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:00.512Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:00.531Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
[2026-01-24T07:04:00.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:02.033Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:04:02.182Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T07:04:02.184Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T07:04:02.184Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:02.186Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:02.206Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:03.707Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T07:04:03.708Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T07:04:03.924Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T07:04:03.925Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:03.927Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:03.948Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:05.624Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T07:04:05.624Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T07:04:05.625Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T07:04:05.625Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:05.627Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:05.646Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:10.148Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T07:04:10.149Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:04:10.317Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T07:04:10.318Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:10.319Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:10.339Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:11.841Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:04:12.106Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T07:04:12.107Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:04:12.107Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:12.109Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:12.127Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:13.628Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:04:13.628Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T07:04:15.123Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T07:04:15.123Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T07:04:15.124Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:15.126Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:15.144Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:16.644Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T07:04:16.645Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:04:16.799Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T07:04:16.800Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T07:04:16.800Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:04:16.800Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:16.802Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:16.819Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:21.321Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T07:04:21.321Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T07:04:21.321Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-24T07:04:22.110Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T07:04:22.110Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T07:04:22.110Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:04:22.112Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-24T07:04:22.129Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:04:26.631Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T07:04:26.633Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T07:04:26.722Z] [BOT] 📂 Loaded 7741 existing routing entries
[2026-01-24T07:04:26.832Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T07:04:26.832Z] [BOT] Total entries: 7751
   Timestamp: 2026-01-24T07:04:26.797Z
[2026-01-24T07:04:26.833Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T07:04:26.833Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T07:04:26.833Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-24T07:04:26.833Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T07:04:26.834Z] [BOT] [STATS] Channel stats saved
[2026-01-24T07:04:28.852Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*