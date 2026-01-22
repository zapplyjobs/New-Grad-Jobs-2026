# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T11:45:01.521Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T11:44:19.705Z] ========================================
[2026-01-22T11:44:19.707Z] Discord Bot Execution Log
[2026-01-22T11:44:19.707Z] Environment: GitHub Actions
[2026-01-22T11:44:19.707Z] Node Version: v20.19.6
[2026-01-22T11:44:19.707Z] ========================================
[2026-01-22T11:44:19.708Z] Environment Variables Check:
[2026-01-22T11:44:19.708Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T11:44:19.708Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T11:44:19.708Z] 
Multi-Channel Configuration:
[2026-01-22T11:44:19.708Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.708Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.709Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.709Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.709Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.709Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T11:44:19.709Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T11:44:19.709Z] 
Data Files Check:
[2026-01-22T11:44:19.710Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T11:44:19.723Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T11:44:19.723Z] 
========================================
[2026-01-22T11:44:19.723Z] Starting Enhanced Discord Bot...
[2026-01-22T11:44:19.723Z] ========================================
[2026-01-22T11:44:20.260Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T11:44:20.962Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T11:44:20.963Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T11:44:20.963Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T11:44:21.080Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T11:44:21.086Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T11:44:21.086Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T11:44:21.087Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T11:44:21.088Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T11:44:21.088Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T11:44:21.091Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T11:44:21.091Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T11:44:21.092Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:44:21.109Z] [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T11:44:21.418Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T11:44:21.418Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T11:44:21.419Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T11:44:21.419Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:44:21.422Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T11:44:21.429Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-22T11:44:21.429Z] [BOT] ✅ Archiving complete: 5 archived, 3449 active
[2026-01-22T11:44:21.450Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:22.951Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T11:44:22.951Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:44:23.491Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T11:44:23.491Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T11:44:23.491Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T11:44:23.491Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:23.494Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:23.514Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:25.638Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T11:44:25.638Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T11:44:25.639Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T11:44:25.639Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:25.642Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:25.668Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:27.170Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T11:44:27.170Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:44:27.528Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T11:44:27.528Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T11:44:27.529Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:27.532Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:27.556Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:29.391Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:44:29.391Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T11:44:29.392Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:29.394Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:29.418Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:30.919Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T11:44:30.919Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:44:31.157Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T11:44:31.157Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T11:44:31.158Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:31.160Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:31.187Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:32.688Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T11:44:32.688Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T11:44:33.031Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T11:44:33.031Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T11:44:33.031Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:33.034Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:33.056Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:34.980Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:44:34.981Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T11:44:34.981Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:34.984Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:35.007Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:39.508Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T11:44:39.510Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:44:39.510Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:44:39.797Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:44:39.798Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T11:44:39.798Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:39.800Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:39.821Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:41.324Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:44:41.640Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T11:44:41.641Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:44:41.641Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:41.643Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:41.663Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:43.483Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T11:44:43.483Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T11:44:43.484Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:44:43.484Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:43.486Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:43.512Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:45.013Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T11:44:45.013Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T11:44:45.284Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T11:44:45.284Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T11:44:45.284Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T11:44:45.284Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:45.286Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:45.306Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:46.807Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T11:44:46.808Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:44:47.092Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T11:44:47.092Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T11:44:47.092Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:44:47.093Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:47.095Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:47.114Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T11:44:47.114Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:48.850Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:44:48.851Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:44:48.851Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:48.853Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:48.873Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:53.374Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T11:44:53.374Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T11:44:53.374Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T11:44:53.558Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T11:44:53.558Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T11:44:53.559Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T11:44:53.559Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:44:53.561Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:44:53.582Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:44:58.083Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T11:44:58.085Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T11:44:58.165Z] [BOT] 📂 Loaded 6521 existing routing entries
[2026-01-22T11:44:58.258Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T11:44:58.259Z] [BOT] Total entries: 6531
   Timestamp: 2026-01-22T11:44:58.228Z
[2026-01-22T11:44:58.259Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T11:44:58.259Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T11:44:58.259Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T11:44:58.260Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T11:44:58.260Z] [BOT] [STATS] Channel stats saved
[2026-01-22T11:45:00.279Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*