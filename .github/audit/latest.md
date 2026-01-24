# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T16:12:22.120Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T16:11:47.440Z] ========================================
[2026-01-24T16:11:47.442Z] Discord Bot Execution Log
[2026-01-24T16:11:47.442Z] Environment: GitHub Actions
[2026-01-24T16:11:47.442Z] Node Version: v20.20.0
[2026-01-24T16:11:47.442Z] ========================================
[2026-01-24T16:11:47.442Z] Environment Variables Check:
[2026-01-24T16:11:47.442Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T16:11:47.442Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T16:11:47.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T16:11:47.443Z] 
Multi-Channel Configuration:
[2026-01-24T16:11:47.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.443Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T16:11:47.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T16:11:47.444Z] 
Data Files Check:
[2026-01-24T16:11:47.444Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T16:11:47.450Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661868 bytes)
[2026-01-24T16:11:47.450Z] 
========================================
[2026-01-24T16:11:47.450Z] Starting Enhanced Discord Bot...
[2026-01-24T16:11:47.450Z] ========================================
[2026-01-24T16:11:48.004Z] [BOT] ✅ Loaded V2 database: 1166 jobs
[2026-01-24T16:11:48.504Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T16:11:48.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T16:11:48.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T16:11:48.625Z] [BOT] ✅ Loaded pending queue: 2786 total (2766 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T16:11:48.627Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T16:11:48.627Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T16:11:48.628Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T16:11:48.628Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T16:11:48.628Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T16:11:48.629Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T16:11:48.631Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T16:11:48.631Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T16:11:48.631Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:11:48.649Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T16:11:48.992Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T16:11:48.992Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T16:11:48.993Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T16:11:48.993Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:48.994Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:49.013Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:11:49.013Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:50.515Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T16:11:50.515Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:11:50.844Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T16:11:50.844Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T16:11:50.844Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T16:11:50.844Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:50.846Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:50.855Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:11:50.855Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:52.356Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:11:52.506Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T16:11:52.507Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T16:11:52.507Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:52.508Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:52.516Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:54.456Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T16:11:54.456Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:11:54.456Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T16:11:54.456Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:54.458Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:54.465Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:55.966Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:11:56.162Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T16:11:56.162Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T16:11:56.163Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T16:11:56.163Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:56.164Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:56.172Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:57.674Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:11:57.994Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T16:11:57.994Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T16:11:57.994Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:57.995Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:58.005Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:11:59.790Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:11:59.790Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T16:11:59.790Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:11:59.791Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:11:59.801Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:11:59.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:04.302Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T16:12:04.303Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:12:04.485Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T16:12:04.486Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T16:12:04.486Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:12:04.487Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:12:04.496Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:05.998Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:12:06.253Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T16:12:06.254Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:12:06.254Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:12:06.255Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:12:06.265Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:07.767Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:12:07.767Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T16:12:08.067Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T16:12:08.067Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T16:12:08.067Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:12:08.068Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:12:08.078Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:09.579Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T16:12:09.579Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:12:09.755Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T16:12:09.755Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T16:12:09.755Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:12:09.755Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:12:09.756Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:12:09.765Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:14.267Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T16:12:14.267Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T16:12:14.267Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T16:12:14.560Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T16:12:14.561Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:12:14.562Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:12:14.572Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:12:14.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:12:19.074Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T16:12:19.076Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T16:12:19.165Z] [BOT] 📂 Loaded 8081 existing routing entries
[2026-01-24T16:12:19.279Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T16:12:19.279Z] [BOT] Total entries: 8091
   Timestamp: 2026-01-24T16:12:19.242Z
[2026-01-24T16:12:19.280Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T16:12:19.280Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T16:12:19.280Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-24T16:12:19.280Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T16:12:19.280Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T16:12:19.281Z] [BOT] [STATS] Channel stats saved
[2026-01-24T16:12:21.302Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*