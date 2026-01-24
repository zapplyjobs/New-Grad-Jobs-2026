# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T14:56:24.321Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T14:55:50.309Z] ========================================
[2026-01-24T14:55:50.310Z] Discord Bot Execution Log
[2026-01-24T14:55:50.311Z] Environment: GitHub Actions
[2026-01-24T14:55:50.311Z] Node Version: v20.20.0
[2026-01-24T14:55:50.311Z] ========================================
[2026-01-24T14:55:50.311Z] Environment Variables Check:
[2026-01-24T14:55:50.311Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T14:55:50.311Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T14:55:50.311Z] 
Multi-Channel Configuration:
[2026-01-24T14:55:50.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T14:55:50.312Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T14:55:50.312Z] 
Data Files Check:
[2026-01-24T14:55:50.312Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T14:55:50.324Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562993 bytes)
[2026-01-24T14:55:50.324Z] 
========================================
[2026-01-24T14:55:50.324Z] Starting Enhanced Discord Bot...
[2026-01-24T14:55:50.324Z] ========================================
[2026-01-24T14:55:50.782Z] [BOT] ✅ Loaded V2 database: 2653 jobs
[2026-01-24T14:55:51.171Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T14:55:51.171Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T14:55:51.171Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T14:55:51.322Z] [BOT] ✅ Loaded pending queue: 2776 total (2756 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T14:55:51.325Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T14:55:51.326Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T14:55:51.326Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T14:55:51.326Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T14:55:51.327Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T14:55:51.327Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T14:55:51.329Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T14:55:51.329Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
[2026-01-24T14:55:51.329Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:55:51.346Z] [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T14:55:51.667Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T14:55:51.668Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T14:55:51.669Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:55:51.671Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:55:51.692Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:55:53.194Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T14:55:53.195Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:55:53.408Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T14:55:53.409Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T14:55:53.409Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:55:53.411Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:55:53.429Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:55:54.930Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T14:55:54.930Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:55:55.173Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T14:55:55.174Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:55:55.176Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:55:55.194Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:55:56.888Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T14:55:56.888Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:55:56.889Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T14:55:56.889Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:55:56.891Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:55:56.908Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:55:58.410Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T14:55:58.410Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:55:58.793Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T14:55:58.794Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T14:55:58.794Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:55:58.795Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:55:58.814Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:00.315Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T14:56:00.315Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:56:00.519Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T14:56:00.520Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T14:56:00.520Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:00.522Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:00.542Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:02.252Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T14:56:02.252Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:56:02.252Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T14:56:02.253Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:02.255Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:02.272Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:06.774Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T14:56:06.776Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:56:06.776Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:56:06.994Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:56:06.995Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T14:56:06.995Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:06.997Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:07.015Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:08.518Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:56:08.744Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T14:56:08.744Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T14:56:08.744Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:56:08.744Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:08.746Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:08.764Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:10.266Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T14:56:10.267Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T14:56:10.450Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T14:56:10.450Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T14:56:10.451Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T14:56:10.451Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:10.453Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:10.470Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:11.972Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:56:12.143Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T14:56:12.143Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T14:56:12.143Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:56:12.144Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:12.145Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:12.163Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:16.666Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T14:56:16.667Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T14:56:16.667Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T14:56:16.875Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T14:56:16.875Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T14:56:16.875Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T14:56:16.876Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:56:16.877Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:56:16.894Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:56:21.396Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T14:56:21.398Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T14:56:21.491Z] [BOT] 📂 Loaded 8031 existing routing entries
[2026-01-24T14:56:21.594Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8041
[2026-01-24T14:56:21.594Z] [BOT] Timestamp: 2026-01-24T14:56:21.562Z
[2026-01-24T14:56:21.594Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T14:56:21.595Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T14:56:21.595Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T14:56:21.595Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T14:56:21.595Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T14:56:21.595Z] [BOT] [STATS] Channel stats saved
[2026-01-24T14:56:23.610Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*