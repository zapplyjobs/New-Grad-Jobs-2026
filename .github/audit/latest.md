# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T06:15:18.114Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T06:14:35.940Z] ========================================
[2026-01-22T06:14:35.942Z] Discord Bot Execution Log
[2026-01-22T06:14:35.942Z] Environment: GitHub Actions
[2026-01-22T06:14:35.942Z] Node Version: v20.19.6
[2026-01-22T06:14:35.942Z] ========================================
[2026-01-22T06:14:35.942Z] Environment Variables Check:
[2026-01-22T06:14:35.942Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T06:14:35.942Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.942Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T06:14:35.943Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T06:14:35.943Z] 
Multi-Channel Configuration:
[2026-01-22T06:14:35.943Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T06:14:35.943Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T06:14:35.943Z] 
Data Files Check:
[2026-01-22T06:14:35.944Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T06:14:35.959Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2085488 bytes)
[2026-01-22T06:14:35.959Z] 
========================================
[2026-01-22T06:14:35.959Z] Starting Enhanced Discord Bot...
[2026-01-22T06:14:35.959Z] ========================================
[2026-01-22T06:14:36.432Z] [BOT] ✅ Loaded V2 database: 3585 jobs
[2026-01-22T06:14:37.219Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T06:14:37.219Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T06:14:37.220Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T06:14:37.372Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T06:14:37.376Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T06:14:37.376Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T06:14:37.376Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T06:14:37.377Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T06:14:37.377Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T06:14:37.380Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T06:14:37.381Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T06:14:37.381Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:14:37.397Z] [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T06:14:37.704Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T06:14:37.704Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T06:14:37.705Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T06:14:37.705Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:14:37.707Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T06:14:37.712Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T06:14:37.712Z] [BOT] ✅ Archiving complete: 10 archived, 3575 active
[2026-01-22T06:14:37.736Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:39.238Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T06:14:39.238Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:14:39.428Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T06:14:39.429Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T06:14:39.430Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:39.432Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:39.454Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:41.201Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T06:14:41.201Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T06:14:41.201Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T06:14:41.201Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:41.204Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:41.227Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:42.729Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T06:14:42.729Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:14:43.028Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T06:14:43.028Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T06:14:43.029Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:43.031Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:43.055Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:44.878Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:14:44.879Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T06:14:44.879Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:44.881Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:44.903Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:46.404Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T06:14:46.404Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:14:46.699Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T06:14:46.700Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T06:14:46.700Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:46.703Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:46.728Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:48.231Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T06:14:48.231Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:14:48.451Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T06:14:48.451Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T06:14:48.451Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T06:14:48.451Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:48.454Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:48.477Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:50.235Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:14:50.235Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T06:14:50.235Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:50.237Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:50.264Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:54.766Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T06:14:54.767Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T06:14:54.767Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T06:14:55.067Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T06:14:55.067Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:14:55.068Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T06:14:55.068Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:55.071Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:55.092Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:56.594Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T06:14:56.594Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T06:14:56.807Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T06:14:56.808Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:14:56.808Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:56.810Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:56.832Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:14:58.529Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:14:58.529Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:14:58.529Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:14:58.531Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:14:58.553Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:15:00.055Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T06:15:00.316Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T06:15:00.316Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T06:15:00.317Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:15:00.319Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:15:00.340Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:15:01.842Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T06:15:01.842Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:15:02.049Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T06:15:02.050Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T06:15:02.050Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:15:02.050Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:15:02.052Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:15:02.073Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:15:05.118Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:15:05.118Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:15:05.119Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:15:05.121Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:15:05.142Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:15:09.642Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T06:15:09.643Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T06:15:09.643Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T06:15:10.265Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T06:15:10.266Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T06:15:10.266Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:15:10.268Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-22T06:15:10.290Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:15:14.792Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T06:15:14.794Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T06:15:14.884Z] [BOT] 📂 Loaded 6341 existing routing entries
[2026-01-22T06:15:14.973Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6351
[2026-01-22T06:15:14.974Z] [BOT] Timestamp: 2026-01-22T06:15:14.948Z
[2026-01-22T06:15:14.974Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T06:15:14.974Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T06:15:14.974Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T06:15:14.975Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T06:15:14.975Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T06:15:14.975Z] [BOT] [STATS] Channel stats saved
[2026-01-22T06:15:16.988Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*