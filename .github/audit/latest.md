# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T19:40:30.069Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T19:39:56.064Z] ========================================
[2026-01-24T19:39:56.065Z] Discord Bot Execution Log
[2026-01-24T19:39:56.065Z] Environment: GitHub Actions
[2026-01-24T19:39:56.066Z] Node Version: v20.20.0
[2026-01-24T19:39:56.066Z] ========================================
[2026-01-24T19:39:56.066Z] Environment Variables Check:
[2026-01-24T19:39:56.066Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T19:39:56.066Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T19:39:56.066Z] 
Multi-Channel Configuration:
[2026-01-24T19:39:56.066Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.066Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.067Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.067Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.067Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.067Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T19:39:56.067Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T19:39:56.067Z] 
Data Files Check:
[2026-01-24T19:39:56.067Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T19:39:56.072Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 658933 bytes)
[2026-01-24T19:39:56.072Z] 
========================================
[2026-01-24T19:39:56.072Z] Starting Enhanced Discord Bot...
[2026-01-24T19:39:56.072Z] ========================================
[2026-01-24T19:39:56.603Z] [BOT] ✅ Loaded V2 database: 1160 jobs
[2026-01-24T19:39:57.145Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T19:39:57.145Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T19:39:57.145Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T19:39:57.263Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T19:39:57.265Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T19:39:57.266Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T19:39:57.266Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T19:39:57.267Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T19:39:57.267Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T19:39:57.267Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T19:39:57.269Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T19:39:57.270Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T19:39:57.270Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:39:57.287Z] [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T19:39:57.550Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T19:39:57.551Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T19:39:57.551Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:39:57.553Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:39:57.568Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:39:59.070Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T19:39:59.071Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:39:59.293Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T19:39:59.293Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T19:39:59.293Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T19:39:59.293Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:39:59.294Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:39:59.303Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:00.805Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T19:40:00.805Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:40:00.969Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T19:40:00.969Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T19:40:00.970Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T19:40:00.970Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:00.971Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:00.979Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:00.979Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:02.606Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T19:40:02.606Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:40:02.607Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:02.607Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:02.615Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:04.116Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T19:40:04.117Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:40:04.295Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T19:40:04.295Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T19:40:04.295Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:04.296Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:04.304Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:04.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:05.805Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T19:40:05.805Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:40:06.058Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T19:40:06.058Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T19:40:06.059Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T19:40:06.059Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:06.060Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:06.069Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:06.069Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:07.739Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:40:07.740Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:07.741Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:07.751Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:12.253Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T19:40:12.255Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:40:12.558Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T19:40:12.559Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T19:40:12.559Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:12.559Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:12.568Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:12.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:14.070Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T19:40:14.070Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:40:14.390Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T19:40:14.390Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T19:40:14.391Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:40:14.391Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:14.391Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:14.401Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:14.401Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:15.903Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T19:40:15.903Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T19:40:16.181Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T19:40:16.181Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T19:40:16.181Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T19:40:16.181Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:16.182Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:16.191Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:16.191Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:17.693Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T19:40:17.693Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:40:18.013Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T19:40:18.013Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T19:40:18.014Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:40:18.014Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:18.015Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:18.023Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:18.023Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:22.525Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T19:40:22.526Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T19:40:22.526Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T19:40:22.721Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T19:40:22.721Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T19:40:22.721Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T19:40:22.721Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:40:22.723Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:40:22.733Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:40:22.733Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:40:27.235Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T19:40:27.237Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T19:40:27.325Z] [BOT] 📂 Loaded 8221 existing routing entries
[2026-01-24T19:40:27.439Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T19:40:27.440Z] [BOT] Total entries: 8231
   Timestamp: 2026-01-24T19:40:27.401Z
[2026-01-24T19:40:27.440Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T19:40:27.440Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T19:40:27.440Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T19:40:27.440Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-24T19:40:27.441Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T19:40:27.441Z] [BOT] [STATS] Channel stats saved
[2026-01-24T19:40:29.459Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*