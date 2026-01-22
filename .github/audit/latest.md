# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T19:44:42.538Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T19:44:01.850Z] ========================================
[2026-01-22T19:44:01.852Z] Discord Bot Execution Log
[2026-01-22T19:44:01.852Z] Environment: GitHub Actions
[2026-01-22T19:44:01.852Z] Node Version: v20.19.6
[2026-01-22T19:44:01.852Z] ========================================
[2026-01-22T19:44:01.852Z] Environment Variables Check:
[2026-01-22T19:44:01.852Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T19:44:01.852Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.852Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T19:44:01.852Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T19:44:01.852Z] 
Multi-Channel Configuration:
[2026-01-22T19:44:01.853Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T19:44:01.853Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T19:44:01.853Z] 
Data Files Check:
[2026-01-22T19:44:01.854Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T19:44:01.868Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1976238 bytes)
[2026-01-22T19:44:01.868Z] 
========================================
[2026-01-22T19:44:01.868Z] Starting Enhanced Discord Bot...
[2026-01-22T19:44:01.868Z] ========================================
[2026-01-22T19:44:02.425Z] [BOT] ✅ Loaded V2 database: 3396 jobs
[2026-01-22T19:44:03.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T19:44:03.027Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T19:44:03.027Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T19:44:03.153Z] [BOT] ✅ Loaded pending queue: 2786 total (2766 pending, 20 enriched, 0 posted)
[2026-01-22T19:44:03.154Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T19:44:03.159Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T19:44:03.159Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T19:44:03.160Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T19:44:03.161Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-22T19:44:03.161Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T19:44:03.164Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T19:44:03.165Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T19:44:03.165Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:44:03.184Z] [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T19:44:03.616Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T19:44:03.616Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T19:44:03.617Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T19:44:03.617Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:44:03.620Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T19:44:03.625Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T19:44:03.626Z] [BOT] ✅ Archiving complete: 10 archived, 3386 active
[2026-01-22T19:44:03.661Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
[2026-01-22T19:44:03.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:05.164Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T19:44:05.164Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:44:05.344Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T19:44:05.344Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T19:44:05.345Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T19:44:05.345Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:05.347Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:05.367Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:07.028Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:44:07.029Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T19:44:07.029Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:07.031Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:07.055Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:08.557Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T19:44:08.557Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:44:08.764Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T19:44:08.765Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T19:44:08.765Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:08.768Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:08.792Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:10.566Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T19:44:10.567Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T19:44:10.567Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:10.569Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:10.594Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:12.095Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T19:44:12.095Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:44:12.302Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T19:44:12.303Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T19:44:12.303Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T19:44:12.303Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:12.306Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:12.332Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:13.834Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T19:44:13.835Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:44:14.423Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T19:44:14.423Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T19:44:14.423Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T19:44:14.423Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:14.426Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:14.449Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:16.311Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T19:44:16.312Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T19:44:16.312Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:16.314Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:16.337Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:20.839Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T19:44:20.840Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T19:44:20.840Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:44:21.056Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T19:44:21.057Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T19:44:21.057Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:21.059Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:21.080Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:22.582Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:44:22.805Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T19:44:22.806Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:44:22.806Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:22.808Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:22.829Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:24.483Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:44:24.484Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:44:24.484Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:24.486Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:24.507Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:26.008Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:44:26.008Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T19:44:26.186Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T19:44:26.186Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T19:44:26.187Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:26.189Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:26.210Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:27.711Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T19:44:27.711Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T19:44:28.661Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T19:44:28.662Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:44:28.662Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:28.664Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:28.684Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:30.427Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:44:30.427Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:44:30.428Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:30.430Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:30.451Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:34.953Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T19:44:34.953Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T19:44:35.192Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T19:44:35.193Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T19:44:35.193Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T19:44:35.195Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-22T19:44:35.217Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:44:39.719Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T19:44:39.721Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T19:44:39.809Z] [BOT] 📂 Loaded 6761 existing routing entries
[2026-01-22T19:44:39.905Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6771
[2026-01-22T19:44:39.905Z] [BOT] Timestamp: 2026-01-22T19:44:39.879Z
[2026-01-22T19:44:39.906Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T19:44:39.906Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T19:44:39.906Z] [BOT] [STATS] Channel stats saved
[2026-01-22T19:44:41.925Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*