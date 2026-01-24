# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T16:31:09.378Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T16:30:34.106Z] ========================================
[2026-01-24T16:30:34.107Z] Discord Bot Execution Log
[2026-01-24T16:30:34.107Z] Environment: GitHub Actions
[2026-01-24T16:30:34.107Z] Node Version: v20.20.0
[2026-01-24T16:30:34.107Z] ========================================
[2026-01-24T16:30:34.107Z] Environment Variables Check:
[2026-01-24T16:30:34.108Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T16:30:34.108Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T16:30:34.108Z] 
Multi-Channel Configuration:
[2026-01-24T16:30:34.108Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T16:30:34.108Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T16:30:34.108Z] 
Data Files Check:
[2026-01-24T16:30:34.109Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T16:30:34.114Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661868 bytes)
[2026-01-24T16:30:34.114Z] 
========================================
[2026-01-24T16:30:34.114Z] Starting Enhanced Discord Bot...
[2026-01-24T16:30:34.114Z] ========================================
[2026-01-24T16:30:34.558Z] [BOT] ✅ Loaded V2 database: 1166 jobs
[2026-01-24T16:30:35.251Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T16:30:35.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T16:30:35.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T16:30:35.405Z] [BOT] ✅ Loaded pending queue: 2786 total (2766 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T16:30:35.409Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T16:30:35.409Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T16:30:35.409Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T16:30:35.410Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T16:30:35.410Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T16:30:35.410Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T16:30:35.412Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T16:30:35.413Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T16:30:35.413Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:30:35.429Z] [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T16:30:35.629Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T16:30:35.629Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T16:30:35.630Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T16:30:35.630Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:35.631Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:35.643Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:30:35.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:37.146Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T16:30:37.146Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:30:37.382Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T16:30:37.382Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T16:30:37.382Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:37.383Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:37.392Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:38.892Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:30:39.227Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T16:30:39.227Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T16:30:39.227Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T16:30:39.228Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:39.228Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:39.237Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:41.064Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:30:41.064Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T16:30:41.064Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:41.065Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:41.073Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:42.574Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:30:42.806Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T16:30:42.807Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T16:30:42.807Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:42.808Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:42.818Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:44.319Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T16:30:44.320Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:30:44.563Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T16:30:44.564Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T16:30:44.564Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T16:30:44.564Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:44.565Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:44.576Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:46.379Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T16:30:46.379Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:30:46.379Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:46.381Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:46.390Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:50.891Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T16:30:50.893Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T16:30:50.893Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:30:51.144Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T16:30:51.144Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T16:30:51.144Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:51.145Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:51.154Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:52.656Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:30:53.015Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T16:30:53.015Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:30:53.015Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:53.016Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:53.026Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:54.528Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T16:30:54.528Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T16:30:54.892Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T16:30:54.892Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T16:30:54.893Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T16:30:54.893Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:54.893Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:54.903Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:30:56.404Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:30:56.636Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T16:30:56.637Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T16:30:56.637Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:30:56.637Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:30:56.638Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:30:56.647Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:31:01.150Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T16:31:01.150Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T16:31:01.150Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T16:31:01.446Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T16:31:01.447Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:31:01.448Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:31:01.458Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:31:05.961Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T16:31:05.962Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T16:31:06.056Z] [BOT] 📂 Loaded 8091 existing routing entries
[2026-01-24T16:31:06.163Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8101
[2026-01-24T16:31:06.163Z] [BOT] Timestamp: 2026-01-24T16:31:06.131Z
[2026-01-24T16:31:06.164Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T16:31:06.164Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T16:31:06.164Z] [BOT] [STATS] Channel stats saved
[2026-01-24T16:31:08.178Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*