# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T08:59:12.963Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T08:58:39.100Z] ========================================
[2026-01-24T08:58:39.102Z] Discord Bot Execution Log
[2026-01-24T08:58:39.102Z] Environment: GitHub Actions
[2026-01-24T08:58:39.102Z] Node Version: v20.20.0
[2026-01-24T08:58:39.102Z] ========================================
[2026-01-24T08:58:39.102Z] Environment Variables Check:
[2026-01-24T08:58:39.102Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T08:58:39.102Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.102Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T08:58:39.103Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T08:58:39.103Z] 
Multi-Channel Configuration:
[2026-01-24T08:58:39.103Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T08:58:39.103Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T08:58:39.104Z] 
Data Files Check:
[2026-01-24T08:58:39.104Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T08:58:39.115Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1575812 bytes)
[2026-01-24T08:58:39.115Z] 
========================================
[2026-01-24T08:58:39.115Z] Starting Enhanced Discord Bot...
[2026-01-24T08:58:39.115Z] ========================================
[2026-01-24T08:58:39.649Z] [BOT] ✅ Loaded V2 database: 2677 jobs
[2026-01-24T08:58:40.152Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T08:58:40.153Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T08:58:40.153Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T08:58:40.279Z] [BOT] ✅ Loaded pending queue: 2776 total (2756 pending, 20 enriched, 0 posted)
[2026-01-24T08:58:40.280Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T08:58:40.285Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T08:58:40.286Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T08:58:40.286Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T08:58:40.287Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T08:58:40.287Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T08:58:40.287Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T08:58:40.289Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T08:58:40.289Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T08:58:40.290Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:58:40.309Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T08:58:40.546Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T08:58:40.546Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T08:58:40.548Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T08:58:40.548Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:58:40.550Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T08:58:40.555Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-24T08:58:40.555Z] [BOT] ✅ Archiving complete: 9 archived, 2668 active
[2026-01-24T08:58:40.573Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:42.076Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T08:58:42.076Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:58:42.225Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T08:58:42.225Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T08:58:42.226Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T08:58:42.226Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:42.228Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:42.244Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:43.746Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T08:58:43.746Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:58:43.948Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T08:58:43.948Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T08:58:43.949Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:43.951Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:43.970Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:45.687Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T08:58:45.688Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:58:45.689Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T08:58:45.689Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:45.690Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:45.708Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:47.209Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:58:47.415Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T08:58:47.416Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:47.418Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:47.435Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:48.937Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T08:58:48.937Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:58:49.073Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T08:58:49.074Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T08:58:49.074Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:49.076Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:49.096Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:50.775Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:58:50.776Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T08:58:50.776Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:50.777Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:50.797Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:55.299Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T08:58:55.301Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T08:58:55.301Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:58:55.540Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T08:58:55.540Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T08:58:55.540Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:55.542Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:55.559Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:57.061Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:58:57.216Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T08:58:57.217Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:57.218Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:57.235Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
[2026-01-24T08:58:57.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T08:58:58.737Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T08:58:58.737Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T08:58:59.010Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T08:58:59.010Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T08:58:59.011Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T08:58:59.011Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:58:59.012Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:58:59.030Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:59:00.531Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:59:00.673Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T08:59:00.674Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T08:59:00.674Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:59:00.675Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:59:00.691Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:59:05.193Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T08:59:05.193Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T08:59:05.193Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T08:59:05.642Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T08:59:05.643Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-24T08:59:05.645Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-24T08:59:05.661Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:59:10.162Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T08:59:10.164Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T08:59:10.251Z] [BOT] 📂 Loaded 7811 existing routing entries
[2026-01-24T08:59:10.361Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7821
[2026-01-24T08:59:10.361Z] [BOT] Timestamp: 2026-01-24T08:59:10.326Z
[2026-01-24T08:59:10.362Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T08:59:10.362Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T08:59:10.362Z] [BOT] [STATS] Channel stats saved
[2026-01-24T08:59:12.380Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*