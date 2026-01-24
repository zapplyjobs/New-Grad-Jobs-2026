# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T14:12:31.520Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T14:11:56.347Z] ========================================
[2026-01-24T14:11:56.349Z] Discord Bot Execution Log
[2026-01-24T14:11:56.349Z] Environment: GitHub Actions
[2026-01-24T14:11:56.349Z] Node Version: v20.20.0
[2026-01-24T14:11:56.349Z] ========================================
[2026-01-24T14:11:56.349Z] Environment Variables Check:
[2026-01-24T14:11:56.349Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T14:11:56.349Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.349Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T14:11:56.349Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T14:11:56.349Z] 
Multi-Channel Configuration:
[2026-01-24T14:11:56.349Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T14:11:56.350Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T14:11:56.350Z] 
Data Files Check:
[2026-01-24T14:11:56.351Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T14:11:56.362Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562993 bytes)
[2026-01-24T14:11:56.362Z] 
========================================
[2026-01-24T14:11:56.362Z] Starting Enhanced Discord Bot...
[2026-01-24T14:11:56.362Z] ========================================
[2026-01-24T14:11:56.908Z] [BOT] ✅ Loaded V2 database: 2653 jobs
[2026-01-24T14:11:57.528Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T14:11:57.529Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T14:11:57.529Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T14:11:57.645Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-24T14:11:57.648Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T14:11:57.651Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T14:11:57.651Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T14:11:57.652Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T14:11:57.652Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T14:11:57.653Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T14:11:57.653Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T14:11:57.655Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T14:11:57.655Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T14:11:57.656Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:11:57.674Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T14:11:57.914Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T14:11:57.914Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T14:11:57.915Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T14:11:57.916Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:11:57.917Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:11:57.950Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:11:57.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:11:59.453Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T14:11:59.453Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:11:59.636Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T14:11:59.636Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T14:11:59.637Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:11:59.639Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:11:59.656Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:01.157Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T14:12:01.157Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:12:01.416Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T14:12:01.417Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:01.419Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:01.438Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:03.215Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T14:12:03.215Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:12:03.216Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T14:12:03.216Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:03.218Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:03.236Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:04.737Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T14:12:04.737Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:12:04.969Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T14:12:04.969Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T14:12:04.970Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T14:12:04.970Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:04.972Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:04.991Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:06.493Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T14:12:06.493Z] [BOT] Category: TECH (matched: "software")
[2026-01-24T14:12:06.493Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:12:06.728Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T14:12:06.728Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T14:12:06.729Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T14:12:06.729Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:06.731Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:06.751Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:08.932Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:12:08.933Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T14:12:08.933Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:08.934Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:08.953Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:13.455Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T14:12:13.457Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T14:12:13.457Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:12:13.799Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:12:13.800Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:13.802Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:13.821Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:15.324Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:12:15.519Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T14:12:15.520Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:15.521Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:15.540Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:17.041Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T14:12:17.042Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T14:12:17.368Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T14:12:17.368Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:17.370Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:17.389Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:18.890Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T14:12:18.890Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:12:19.147Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T14:12:19.148Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:12:19.148Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:19.150Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:19.169Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:23.670Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T14:12:23.670Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T14:12:23.670Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T14:12:23.884Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T14:12:23.885Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T14:12:23.885Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:12:23.887Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:12:23.904Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:12:28.407Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T14:12:28.409Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T14:12:28.501Z] [BOT] 📂 Loaded 8001 existing routing entries
[2026-01-24T14:12:28.596Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T14:12:28.597Z] [BOT] Total entries: 8011
   Timestamp: 2026-01-24T14:12:28.558Z
[2026-01-24T14:12:28.597Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T14:12:28.597Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T14:12:28.597Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T14:12:28.598Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T14:12:28.598Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T14:12:28.598Z] [BOT] [STATS] Channel stats saved
[2026-01-24T14:12:30.616Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*