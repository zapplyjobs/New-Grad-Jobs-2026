# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T16:58:20.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T16:57:44.951Z] ========================================
[2026-01-24T16:57:44.953Z] Discord Bot Execution Log
[2026-01-24T16:57:44.953Z] Environment: GitHub Actions
[2026-01-24T16:57:44.953Z] Node Version: v20.20.0
[2026-01-24T16:57:44.953Z] ========================================
[2026-01-24T16:57:44.953Z] Environment Variables Check:
[2026-01-24T16:57:44.953Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T16:57:44.953Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.953Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T16:57:44.953Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T16:57:44.954Z] 
Multi-Channel Configuration:
[2026-01-24T16:57:44.954Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T16:57:44.954Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T16:57:44.954Z] 
Data Files Check:
[2026-01-24T16:57:44.955Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T16:57:44.960Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661868 bytes)
[2026-01-24T16:57:44.960Z] 
========================================
[2026-01-24T16:57:44.960Z] Starting Enhanced Discord Bot...
[2026-01-24T16:57:44.960Z] ========================================
[2026-01-24T16:57:45.488Z] [BOT] ✅ Loaded V2 database: 1166 jobs
[2026-01-24T16:57:46.120Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T16:57:46.121Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T16:57:46.121Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T16:57:46.238Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T16:57:46.240Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T16:57:46.241Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T16:57:46.241Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T16:57:46.242Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T16:57:46.242Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T16:57:46.244Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T16:57:46.245Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T16:57:46.245Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:57:46.263Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T16:57:46.432Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T16:57:46.432Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T16:57:46.432Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T16:57:46.432Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:57:46.434Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T16:57:46.439Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 1165 active
[2026-01-24T16:57:46.450Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:57:46.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:47.952Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:57:48.206Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T16:57:48.206Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T16:57:48.206Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:48.207Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:48.216Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:49.718Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:57:50.192Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T16:57:50.193Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:50.194Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:50.202Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:57:50.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:51.949Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:57:51.950Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:51.951Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:51.959Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:57:51.959Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:53.460Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T16:57:53.461Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:57:53.756Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T16:57:53.756Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T16:57:53.756Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T16:57:53.757Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:53.757Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:53.765Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:55.266Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T16:57:55.267Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:57:55.528Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T16:57:55.529Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T16:57:55.529Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:55.530Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:55.539Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:57:57.249Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T16:57:57.249Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:57:57.249Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:57:57.250Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:57:57.260Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:57:57.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:01.762Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T16:58:01.763Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:58:01.956Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T16:58:01.957Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T16:58:01.957Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:58:01.957Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:58:01.966Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:58:01.966Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:03.468Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T16:58:03.469Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:58:03.704Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T16:58:03.705Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T16:58:03.705Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:58:03.705Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:58:03.706Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:58:03.716Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:58:03.716Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:05.218Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T16:58:05.218Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T16:58:05.557Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T16:58:05.557Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T16:58:05.557Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T16:58:05.558Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:58:05.558Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:58:05.568Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:58:05.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:07.069Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T16:58:07.070Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:58:07.242Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T16:58:07.243Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:58:07.243Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:58:07.244Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:58:07.253Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:58:07.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:11.756Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T16:58:11.757Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T16:58:11.757Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T16:58:12.051Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T16:58:12.052Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T16:58:12.053Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T16:58:12.064Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T16:58:12.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:58:16.567Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T16:58:16.568Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T16:58:16.657Z] [BOT] 📂 Loaded 8111 existing routing entries
[2026-01-24T16:58:16.771Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T16:58:16.771Z] [BOT] Total entries: 8121
   Timestamp: 2026-01-24T16:58:16.734Z
[2026-01-24T16:58:16.772Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T16:58:16.772Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T16:58:16.772Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-24T16:58:16.772Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-24T16:58:16.773Z] [BOT] [STATS] Channel stats saved
[2026-01-24T16:58:18.792Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*