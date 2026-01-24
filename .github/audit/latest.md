# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T18:49:58.024Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T18:49:23.461Z] ========================================
[2026-01-24T18:49:23.463Z] Discord Bot Execution Log
[2026-01-24T18:49:23.463Z] Environment: GitHub Actions
[2026-01-24T18:49:23.463Z] Node Version: v20.20.0
[2026-01-24T18:49:23.463Z] ========================================
[2026-01-24T18:49:23.463Z] Environment Variables Check:
[2026-01-24T18:49:23.463Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T18:49:23.463Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.463Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T18:49:23.463Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T18:49:23.463Z] 
Multi-Channel Configuration:
[2026-01-24T18:49:23.464Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T18:49:23.464Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T18:49:23.464Z] 
Data Files Check:
[2026-01-24T18:49:23.465Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T18:49:23.470Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661383 bytes)
[2026-01-24T18:49:23.470Z] 
========================================
[2026-01-24T18:49:23.470Z] Starting Enhanced Discord Bot...
[2026-01-24T18:49:23.470Z] ========================================
[2026-01-24T18:49:24.017Z] [BOT] ✅ Loaded V2 database: 1165 jobs
[2026-01-24T18:49:24.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T18:49:24.527Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T18:49:24.527Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T18:49:24.644Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T18:49:24.646Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T18:49:24.646Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T18:49:24.647Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T18:49:24.648Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T18:49:24.648Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T18:49:24.648Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T18:49:24.650Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T18:49:24.650Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T18:49:24.651Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:49:24.668Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T18:49:25.070Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T18:49:25.070Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T18:49:25.071Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T18:49:25.071Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:49:25.072Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T18:49:25.078Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-24T18:49:25.078Z] [BOT] ✅ Archiving complete: 1 archived, 1164 active
[2026-01-24T18:49:25.088Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-24T18:49:25.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:26.590Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T18:49:26.590Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:49:26.894Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T18:49:26.894Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T18:49:26.894Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:26.895Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:26.905Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:28.406Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:49:29.151Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T18:49:29.151Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T18:49:29.152Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T18:49:29.152Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:29.153Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:29.161Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:30.939Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T18:49:30.940Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:30.941Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:30.949Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-24T18:49:30.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:32.450Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T18:49:32.450Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:49:32.567Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T18:49:32.567Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T18:49:32.567Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T18:49:32.567Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:32.568Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:32.576Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:34.079Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T18:49:34.079Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:49:34.222Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T18:49:34.222Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T18:49:34.223Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:34.224Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:34.235Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:35.974Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T18:49:35.974Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T18:49:35.974Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T18:49:35.975Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:35.975Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:35.986Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:40.487Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T18:49:40.489Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:49:40.668Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T18:49:40.669Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T18:49:40.669Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:40.670Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:40.679Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:42.180Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T18:49:42.180Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:49:42.484Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T18:49:42.485Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:42.486Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:42.496Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:43.998Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T18:49:43.999Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T18:49:44.241Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T18:49:44.242Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T18:49:44.242Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T18:49:44.242Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:44.243Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:44.252Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:45.754Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T18:49:45.755Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:49:45.950Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T18:49:45.950Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T18:49:45.950Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T18:49:45.950Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:45.951Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:45.960Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-24T18:49:45.961Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:50.463Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T18:49:50.463Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T18:49:50.463Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T18:49:50.632Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T18:49:50.632Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T18:49:50.633Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T18:49:50.633Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T18:49:50.634Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T18:49:50.643Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-24T18:49:50.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:49:55.146Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T18:49:55.148Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T18:49:55.242Z] [BOT] 📂 Loaded 8181 existing routing entries
[2026-01-24T18:49:55.352Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8191
[2026-01-24T18:49:55.352Z] [BOT] Timestamp: 2026-01-24T18:49:55.314Z
[2026-01-24T18:49:55.353Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T18:49:55.353Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T18:49:55.353Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T18:49:55.353Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T18:49:55.353Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T18:49:55.354Z] [BOT] [STATS] Channel stats saved
[2026-01-24T18:49:57.372Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*