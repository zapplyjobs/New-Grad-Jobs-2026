# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T04:31:11.287Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T04:30:35.930Z] ========================================
[2026-01-23T04:30:35.932Z] Discord Bot Execution Log
[2026-01-23T04:30:35.932Z] Environment: GitHub Actions
[2026-01-23T04:30:35.932Z] Node Version: v20.20.0
[2026-01-23T04:30:35.932Z] ========================================
[2026-01-23T04:30:35.933Z] Environment Variables Check:
[2026-01-23T04:30:35.933Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T04:30:35.933Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T04:30:35.933Z] 
Multi-Channel Configuration:
[2026-01-23T04:30:35.933Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.933Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.934Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.934Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.934Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.934Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T04:30:35.934Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T04:30:35.934Z] 
Data Files Check:
[2026-01-23T04:30:35.935Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T04:30:35.947Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1878240 bytes)
[2026-01-23T04:30:35.947Z] 
========================================
[2026-01-23T04:30:35.947Z] Starting Enhanced Discord Bot...
[2026-01-23T04:30:35.947Z] ========================================
[2026-01-23T04:30:36.468Z] [BOT] ✅ Loaded V2 database: 3220 jobs
[2026-01-23T04:30:37.030Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T04:30:37.031Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T04:30:37.031Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T04:30:37.154Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T04:30:37.158Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T04:30:37.158Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T04:30:37.159Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T04:30:37.159Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T04:30:37.160Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T04:30:37.160Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T04:30:37.161Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T04:30:37.162Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T04:30:37.162Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:30:37.179Z] [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T04:30:37.587Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T04:30:37.587Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T04:30:37.588Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T04:30:37.588Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T04:30:37.591Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T04:30:37.596Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-23T04:30:37.596Z] [BOT] ✅ Archiving complete: 2 archived, 3218 active
[2026-01-23T04:30:37.623Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
[2026-01-23T04:30:37.623Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:39.124Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:30:39.319Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T04:30:39.320Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T04:30:39.320Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:39.322Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:39.341Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:40.841Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:30:41.820Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T04:30:41.821Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T04:30:41.821Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T04:30:41.821Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:41.823Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:41.845Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:43.819Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T04:30:43.819Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T04:30:43.819Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:43.822Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:43.844Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:45.345Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T04:30:45.345Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:30:45.535Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T04:30:45.536Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:45.538Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:45.561Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:47.063Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T04:30:47.064Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:30:47.234Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T04:30:47.234Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T04:30:47.235Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T04:30:47.235Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:47.237Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:47.260Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:48.909Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T04:30:48.909Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T04:30:48.910Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T04:30:48.910Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:48.912Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:48.933Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
[2026-01-23T04:30:48.933Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:53.435Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T04:30:53.436Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T04:30:53.437Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T04:30:54.057Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T04:30:54.058Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T04:30:54.058Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T04:30:54.058Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:54.060Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:54.082Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:55.584Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T04:30:55.723Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T04:30:55.724Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T04:30:55.724Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:55.726Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:55.744Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:57.246Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T04:30:57.246Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T04:30:57.482Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T04:30:57.482Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T04:30:57.482Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T04:30:57.482Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:57.484Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:57.505Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
[2026-01-23T04:30:57.505Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T04:30:59.006Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T04:30:59.006Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T04:30:59.195Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T04:30:59.195Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T04:30:59.195Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T04:30:59.195Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:30:59.197Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:30:59.219Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:31:03.722Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T04:31:03.722Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T04:31:03.722Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T04:31:03.919Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T04:31:03.919Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T04:31:03.919Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T04:31:03.920Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:31:03.921Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-23T04:31:03.942Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:31:08.445Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T04:31:08.447Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T04:31:08.531Z] [BOT] 📂 Loaded 6971 existing routing entries
[2026-01-23T04:31:08.629Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T04:31:08.629Z] [BOT] Total entries: 6981
   Timestamp: 2026-01-23T04:31:08.596Z
[2026-01-23T04:31:08.630Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T04:31:08.630Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T04:31:08.631Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T04:31:10.648Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*