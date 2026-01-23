# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T17:34:55.248Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T17:34:21.136Z] ========================================
[2026-01-23T17:34:21.138Z] Discord Bot Execution Log
[2026-01-23T17:34:21.138Z] Environment: GitHub Actions
[2026-01-23T17:34:21.138Z] Node Version: v20.20.0
[2026-01-23T17:34:21.138Z] ========================================
[2026-01-23T17:34:21.138Z] Environment Variables Check:
[2026-01-23T17:34:21.138Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T17:34:21.138Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.138Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T17:34:21.139Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T17:34:21.139Z] 
Multi-Channel Configuration:
[2026-01-23T17:34:21.139Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T17:34:21.139Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T17:34:21.139Z] 
Data Files Check:
[2026-01-23T17:34:21.140Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T17:34:21.152Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1797404 bytes)
[2026-01-23T17:34:21.152Z] 
========================================
[2026-01-23T17:34:21.152Z] Starting Enhanced Discord Bot...
[2026-01-23T17:34:21.152Z] ========================================
[2026-01-23T17:34:21.689Z] [BOT] ✅ Loaded V2 database: 3079 jobs
[2026-01-23T17:34:22.272Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T17:34:22.273Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T17:34:22.273Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T17:34:22.392Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T17:34:22.396Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T17:34:22.396Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T17:34:22.396Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T17:34:22.397Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T17:34:22.397Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T17:34:22.397Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T17:34:22.399Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T17:34:22.400Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T17:34:22.400Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:34:22.417Z] [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T17:34:22.700Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T17:34:22.700Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T17:34:22.701Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T17:34:22.701Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-23T17:34:22.704Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T17:34:22.709Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-23T17:34:22.709Z] [BOT] ✅ Archiving complete: 7 archived, 3072 active
[2026-01-23T17:34:22.729Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:24.231Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T17:34:24.231Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:34:24.409Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T17:34:24.409Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T17:34:24.409Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T17:34:24.409Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:24.412Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:24.430Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:25.930Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T17:34:25.930Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:34:26.125Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T17:34:26.125Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T17:34:26.126Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:26.128Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:26.150Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:27.777Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T17:34:27.777Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T17:34:27.777Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:27.780Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:27.801Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:29.302Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T17:34:29.302Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:34:29.441Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T17:34:29.442Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T17:34:29.443Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:29.445Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:29.465Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:30.966Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T17:34:30.967Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:34:31.143Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T17:34:31.143Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T17:34:31.144Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T17:34:31.144Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:31.146Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:31.168Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:32.863Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T17:34:32.863Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T17:34:32.863Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T17:34:32.863Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:32.865Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:32.885Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:37.387Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T17:34:37.389Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T17:34:37.389Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:34:37.626Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T17:34:37.626Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T17:34:37.627Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T17:34:37.627Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:37.629Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:37.649Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:39.152Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:34:39.608Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T17:34:39.609Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:34:39.609Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:39.611Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:39.632Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:41.134Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T17:34:41.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T17:34:41.338Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T17:34:41.338Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T17:34:41.338Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T17:34:41.338Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:41.340Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:41.358Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:42.859Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:34:43.058Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T17:34:43.058Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:34:43.059Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:43.060Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:43.080Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:47.582Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T17:34:47.583Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T17:34:47.583Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T17:34:47.876Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T17:34:47.876Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T17:34:47.876Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:34:47.878Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:34:47.898Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:34:52.400Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T17:34:52.402Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T17:34:52.486Z] [BOT] 📂 Loaded 7351 existing routing entries
[2026-01-23T17:34:52.584Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T17:34:52.584Z] [BOT] Total entries: 7361
   Timestamp: 2026-01-23T17:34:52.550Z
[2026-01-23T17:34:52.585Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T17:34:52.585Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T17:34:52.585Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T17:34:52.585Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T17:34:52.585Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T17:34:52.585Z] [BOT] [STATS] Channel stats saved
[2026-01-23T17:34:54.605Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*