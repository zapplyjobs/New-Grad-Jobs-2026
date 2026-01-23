# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T20:46:59.414Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T20:46:24.213Z] ========================================
[2026-01-23T20:46:24.214Z] Discord Bot Execution Log
[2026-01-23T20:46:24.214Z] Environment: GitHub Actions
[2026-01-23T20:46:24.215Z] Node Version: v20.20.0
[2026-01-23T20:46:24.215Z] ========================================
[2026-01-23T20:46:24.215Z] Environment Variables Check:
[2026-01-23T20:46:24.215Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T20:46:24.215Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.215Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T20:46:24.215Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T20:46:24.215Z] 
Multi-Channel Configuration:
[2026-01-23T20:46:24.215Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.215Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.215Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T20:46:24.216Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T20:46:24.216Z] 
Data Files Check:
[2026-01-23T20:46:24.217Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T20:46:24.228Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1756434 bytes)
[2026-01-23T20:46:24.228Z] 
========================================
[2026-01-23T20:46:24.228Z] Starting Enhanced Discord Bot...
[2026-01-23T20:46:24.228Z] ========================================
[2026-01-23T20:46:24.750Z] [BOT] ✅ Loaded V2 database: 3010 jobs
[2026-01-23T20:46:25.379Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T20:46:25.380Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T20:46:25.380Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T20:46:25.493Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T20:46:25.498Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T20:46:25.499Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T20:46:25.499Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T20:46:25.499Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T20:46:25.500Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T20:46:25.502Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T20:46:25.502Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T20:46:25.503Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:46:25.519Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T20:46:25.873Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T20:46:25.873Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T20:46:25.874Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T20:46:25.874Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:46:25.876Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T20:46:25.881Z] [BOT] 📦 Archived 19 jobs to 2026-01.json (19 total in archive)
[2026-01-23T20:46:25.881Z] [BOT] ✅ Archiving complete: 19 archived, 2991 active
[2026-01-23T20:46:25.903Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:27.405Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T20:46:27.405Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:46:27.705Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T20:46:27.705Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T20:46:27.705Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:27.708Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:27.727Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:29.228Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T20:46:29.228Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T20:46:29.437Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T20:46:29.438Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:29.441Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:29.463Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
[2026-01-23T20:46:29.463Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:31.325Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T20:46:31.325Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T20:46:31.326Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T20:46:31.326Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:31.328Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:31.349Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:32.849Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T20:46:32.850Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:46:33.123Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T20:46:33.123Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T20:46:33.124Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T20:46:33.124Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:33.126Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:33.147Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:34.648Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T20:46:34.648Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:46:34.979Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T20:46:34.979Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T20:46:34.980Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T20:46:34.980Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:34.982Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:35.003Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
[2026-01-23T20:46:35.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:36.737Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T20:46:36.737Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T20:46:36.737Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:36.739Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:36.760Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:41.261Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T20:46:41.262Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T20:46:41.581Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T20:46:41.582Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T20:46:41.582Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:41.584Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:41.603Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
[2026-01-23T20:46:41.603Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:43.106Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T20:46:43.106Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T20:46:43.292Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T20:46:43.292Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T20:46:43.293Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T20:46:43.293Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:43.295Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:43.313Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:44.815Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T20:46:44.815Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T20:46:45.128Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T20:46:45.129Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T20:46:45.129Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T20:46:45.129Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:45.131Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:45.150Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:46.652Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T20:46:46.652Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T20:46:46.973Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T20:46:46.973Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T20:46:46.974Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T20:46:46.974Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:46.976Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:46.996Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
[2026-01-23T20:46:46.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:51.498Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T20:46:51.498Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T20:46:51.498Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T20:46:51.797Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T20:46:51.798Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T20:46:51.798Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T20:46:51.800Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-23T20:46:51.820Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:46:56.322Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T20:46:56.324Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T20:46:56.404Z] [BOT] 📂 Loaded 7481 existing routing entries
[2026-01-23T20:46:56.510Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T20:46:56.510Z] [BOT] New entries: 10
   Total entries: 7491
   Timestamp: 2026-01-23T20:46:56.462Z
[2026-01-23T20:46:56.511Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T20:46:56.511Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T20:46:56.511Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T20:46:56.511Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T20:46:56.511Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T20:46:56.511Z] [BOT] [STATS] Channel stats saved
[2026-01-23T20:46:58.530Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*