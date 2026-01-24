# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T19:11:35.479Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T19:11:00.840Z] ========================================
[2026-01-24T19:11:00.842Z] Discord Bot Execution Log
[2026-01-24T19:11:00.842Z] Environment: GitHub Actions
[2026-01-24T19:11:00.842Z] Node Version: v20.20.0
[2026-01-24T19:11:00.842Z] ========================================
[2026-01-24T19:11:00.842Z] Environment Variables Check:
[2026-01-24T19:11:00.842Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T19:11:00.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T19:11:00.843Z] 
Multi-Channel Configuration:
[2026-01-24T19:11:00.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.843Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.844Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T19:11:00.844Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T19:11:00.844Z] 
Data Files Check:
[2026-01-24T19:11:00.845Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T19:11:00.849Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 658933 bytes)
[2026-01-24T19:11:00.849Z] 
========================================
[2026-01-24T19:11:00.850Z] Starting Enhanced Discord Bot...
[2026-01-24T19:11:00.850Z] ========================================
[2026-01-24T19:11:01.388Z] [BOT] ✅ Loaded V2 database: 1160 jobs
[2026-01-24T19:11:01.925Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T19:11:01.926Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T19:11:01.926Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T19:11:02.044Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T19:11:02.046Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T19:11:02.046Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T19:11:02.047Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T19:11:02.047Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T19:11:02.048Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T19:11:02.048Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T19:11:02.050Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T19:11:02.050Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T19:11:02.051Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:11:02.067Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T19:11:02.412Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T19:11:02.412Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T19:11:02.413Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T19:11:02.413Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:02.414Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:02.429Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:11:02.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:03.930Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:11:04.141Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T19:11:04.141Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T19:11:04.142Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:04.143Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:04.151Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:11:04.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:05.653Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:11:05.885Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T19:11:05.885Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T19:11:05.886Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T19:11:05.886Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:05.887Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:05.895Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:11:05.895Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:07.647Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:11:07.648Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T19:11:07.648Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:07.649Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:07.657Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:09.157Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T19:11:09.157Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:11:09.330Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T19:11:09.330Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T19:11:09.331Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T19:11:09.331Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:09.332Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:09.342Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:10.844Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T19:11:10.844Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:11:11.029Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T19:11:11.029Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T19:11:11.029Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:11.030Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:11.039Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:12.775Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:11:12.775Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:12.776Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:12.786Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:11:12.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:17.289Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T19:11:17.290Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T19:11:17.290Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:11:17.602Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T19:11:17.603Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T19:11:17.603Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:17.604Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:17.612Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:11:17.612Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:19.112Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:11:19.313Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T19:11:19.314Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:11:19.314Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:19.315Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:19.324Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:20.827Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:11:20.827Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T19:11:21.174Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T19:11:21.175Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T19:11:21.175Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:21.176Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:21.185Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:22.686Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T19:11:22.687Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:11:23.020Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T19:11:23.020Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:11:23.020Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:23.022Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:23.030Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:27.532Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T19:11:27.532Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T19:11:27.532Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T19:11:27.940Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T19:11:27.940Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T19:11:27.940Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:11:27.941Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:11:27.951Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:11:32.452Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T19:11:32.454Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T19:11:32.544Z] [BOT] 📂 Loaded 8201 existing routing entries
[2026-01-24T19:11:32.661Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T19:11:32.661Z] [BOT] Total entries: 8211
   Timestamp: 2026-01-24T19:11:32.621Z
[2026-01-24T19:11:32.661Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T19:11:32.661Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T19:11:32.662Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T19:11:32.662Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T19:11:32.662Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T19:11:32.662Z] [BOT] [STATS] Channel stats saved
[2026-01-24T19:11:34.681Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*