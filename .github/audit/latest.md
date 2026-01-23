# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T11:58:26.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T11:57:50.968Z] ========================================
[2026-01-23T11:57:50.969Z] Discord Bot Execution Log
[2026-01-23T11:57:50.970Z] Environment: GitHub Actions
[2026-01-23T11:57:50.970Z] Node Version: v20.20.0
[2026-01-23T11:57:50.970Z] ========================================
[2026-01-23T11:57:50.970Z] Environment Variables Check:
[2026-01-23T11:57:50.970Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T11:57:50.970Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.970Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T11:57:50.970Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T11:57:50.970Z] 
Multi-Channel Configuration:
[2026-01-23T11:57:50.971Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T11:57:50.971Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T11:57:50.971Z] 
Data Files Check:
[2026-01-23T11:57:50.972Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T11:57:50.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806037 bytes)
[2026-01-23T11:57:50.984Z] 
========================================
[2026-01-23T11:57:50.984Z] Starting Enhanced Discord Bot...
[2026-01-23T11:57:50.984Z] ========================================
[2026-01-23T11:57:51.516Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-23T11:57:52.147Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T11:57:52.147Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T11:57:52.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T11:57:52.268Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T11:57:52.271Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T11:57:52.272Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T11:57:52.272Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T11:57:52.273Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T11:57:52.273Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T11:57:52.273Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T11:57:52.275Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T11:57:52.276Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T11:57:52.276Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:57:52.292Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T11:57:52.657Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T11:57:52.657Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T11:57:52.658Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T11:57:52.658Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:57:52.660Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T11:57:52.665Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-23T11:57:52.666Z] [BOT] ✅ Archiving complete: 2 archived, 3093 active
[2026-01-23T11:57:52.690Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:57:54.192Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T11:57:54.192Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:57:54.500Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T11:57:54.500Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T11:57:54.501Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T11:57:54.501Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:57:54.503Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:57:54.521Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:57:56.021Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T11:57:56.022Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T11:57:56.352Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T11:57:56.353Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T11:57:56.353Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:57:56.355Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:57:56.377Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:57:58.125Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T11:57:58.125Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T11:57:58.125Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T11:57:58.125Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:57:58.127Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:57:58.148Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:57:59.649Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T11:57:59.649Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T11:57:59.896Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T11:57:59.897Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T11:57:59.897Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:57:59.899Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:57:59.920Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:01.422Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T11:58:01.422Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:58:01.727Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T11:58:01.727Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T11:58:01.728Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:01.730Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:01.752Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:03.437Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T11:58:03.437Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T11:58:03.438Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T11:58:03.438Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:03.440Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:03.461Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:07.963Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T11:58:07.965Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T11:58:07.965Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:58:08.590Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T11:58:08.591Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T11:58:08.591Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:08.593Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:08.613Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:10.115Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T11:58:10.115Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T11:58:10.297Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T11:58:10.298Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T11:58:10.298Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:58:10.298Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:10.301Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:10.321Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:11.823Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T11:58:11.823Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T11:58:12.011Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T11:58:12.012Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T11:58:12.012Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:12.014Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:12.033Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:13.534Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:58:13.705Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T11:58:13.705Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T11:58:13.705Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:58:13.705Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:13.707Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:13.726Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:18.228Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T11:58:18.228Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T11:58:18.228Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T11:58:18.577Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T11:58:18.578Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T11:58:18.578Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T11:58:18.580Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T11:58:18.599Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:58:23.101Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T11:58:23.104Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T11:58:23.185Z] [BOT] 📂 Loaded 7191 existing routing entries
[2026-01-23T11:58:23.280Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7201
[2026-01-23T11:58:23.280Z] [BOT] Timestamp: 2026-01-23T11:58:23.248Z
[2026-01-23T11:58:23.281Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T11:58:23.281Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T11:58:23.281Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T11:58:23.282Z] [BOT] [STATS] Channel stats saved
[2026-01-23T11:58:25.299Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*