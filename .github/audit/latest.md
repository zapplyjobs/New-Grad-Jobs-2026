# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T21:13:12.304Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T21:12:38.335Z] ========================================
[2026-01-23T21:12:38.338Z] Discord Bot Execution Log
[2026-01-23T21:12:38.338Z] Environment: GitHub Actions
[2026-01-23T21:12:38.338Z] Node Version: v20.20.0
[2026-01-23T21:12:38.338Z] ========================================
[2026-01-23T21:12:38.338Z] Environment Variables Check:
[2026-01-23T21:12:38.338Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T21:12:38.338Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T21:12:38.339Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T21:12:38.339Z] 
Multi-Channel Configuration:
[2026-01-23T21:12:38.339Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.339Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.340Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T21:12:38.340Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T21:12:38.340Z] 
Data Files Check:
[2026-01-23T21:12:38.341Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T21:12:38.353Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1744696 bytes)
[2026-01-23T21:12:38.353Z] 
========================================
[2026-01-23T21:12:38.353Z] Starting Enhanced Discord Bot...
[2026-01-23T21:12:38.353Z] ========================================
[2026-01-23T21:12:38.876Z] [BOT] ✅ Loaded V2 database: 2991 jobs
[2026-01-23T21:12:39.470Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T21:12:39.471Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T21:12:39.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T21:12:39.586Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T21:12:39.590Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T21:12:39.591Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T21:12:39.591Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T21:12:39.592Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T21:12:39.592Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T21:12:39.592Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T21:12:39.594Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T21:12:39.594Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T21:12:39.594Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:12:39.612Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T21:12:39.821Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T21:12:39.821Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T21:12:39.821Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T21:12:39.822Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-23T21:12:39.824Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T21:12:39.829Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T21:12:39.829Z] [BOT] ✅ Archiving complete: 11 archived, 2980 active
[2026-01-23T21:12:39.853Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
[2026-01-23T21:12:39.853Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:41.355Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T21:12:41.355Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:12:41.549Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T21:12:41.549Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T21:12:41.550Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T21:12:41.550Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:41.552Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:41.571Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:43.074Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:12:43.264Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T21:12:43.265Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T21:12:43.265Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:43.267Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:43.289Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:44.919Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T21:12:44.919Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T21:12:44.919Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:44.922Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:44.942Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
[2026-01-23T21:12:44.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:46.443Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:12:46.735Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T21:12:46.736Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T21:12:46.736Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:46.738Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:46.759Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:48.261Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T21:12:48.261Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T21:12:48.580Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T21:12:48.581Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T21:12:48.581Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:48.584Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:48.608Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:50.325Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T21:12:50.325Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:12:50.326Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T21:12:50.326Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:50.328Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:50.348Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:54.849Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T21:12:54.851Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:12:55.033Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T21:12:55.033Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T21:12:55.034Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T21:12:55.034Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:55.036Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:55.056Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:56.559Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:12:56.750Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T21:12:56.750Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T21:12:56.751Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:12:56.751Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:56.753Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:56.772Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:58.274Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T21:12:58.274Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T21:12:58.411Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T21:12:58.411Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T21:12:58.411Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T21:12:58.412Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:12:58.413Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:12:58.433Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:12:59.934Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T21:12:59.934Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:13:00.139Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T21:13:00.139Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:13:00.139Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:13:00.141Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:13:00.160Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:13:04.661Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T21:13:04.661Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T21:13:04.661Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T21:13:04.944Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T21:13:04.944Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T21:13:04.944Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T21:13:04.944Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:13:04.946Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-23T21:13:04.964Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:13:09.465Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T21:13:09.467Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T21:13:09.558Z] [BOT] 📂 Loaded 7491 existing routing entries
[2026-01-23T21:13:09.647Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7501
   Timestamp: 2026-01-23T21:13:09.614Z
[2026-01-23T21:13:09.647Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T21:13:09.647Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T21:13:09.648Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T21:13:09.648Z] [BOT] [STATS] Channel stats saved
[2026-01-23T21:13:11.665Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*