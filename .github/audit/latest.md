# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T17:37:00.549Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T17:36:20.968Z] ========================================
[2026-01-22T17:36:20.970Z] Discord Bot Execution Log
[2026-01-22T17:36:20.970Z] Environment: GitHub Actions
[2026-01-22T17:36:20.970Z] Node Version: v20.19.6
[2026-01-22T17:36:20.971Z] ========================================
[2026-01-22T17:36:20.971Z] Environment Variables Check:
[2026-01-22T17:36:20.971Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T17:36:20.971Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.971Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T17:36:20.971Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T17:36:20.971Z] 
Multi-Channel Configuration:
[2026-01-22T17:36:20.971Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T17:36:20.972Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T17:36:20.972Z] 
Data Files Check:
[2026-01-22T17:36:20.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T17:36:20.986Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1998363 bytes)
[2026-01-22T17:36:20.986Z] 
========================================
[2026-01-22T17:36:20.986Z] Starting Enhanced Discord Bot...
[2026-01-22T17:36:20.986Z] ========================================
[2026-01-22T17:36:21.514Z] [BOT] ✅ Loaded V2 database: 3433 jobs
[2026-01-22T17:36:21.993Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T17:36:21.993Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T17:36:21.993Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T17:36:22.110Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T17:36:22.114Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T17:36:22.114Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T17:36:22.114Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T17:36:22.115Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T17:36:22.116Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T17:36:22.118Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T17:36:22.119Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T17:36:22.119Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:36:22.137Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T17:36:22.454Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T17:36:22.455Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T17:36:22.456Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:36:22.458Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T17:36:22.464Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-22T17:36:22.464Z] [BOT] ✅ Archiving complete: 6 archived, 3427 active
[2026-01-22T17:36:22.489Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:23.991Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T17:36:23.991Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:36:24.203Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T17:36:24.203Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T17:36:24.203Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T17:36:24.203Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:24.205Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:24.226Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
[2026-01-22T17:36:24.226Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:25.877Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:36:25.877Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T17:36:25.877Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:25.880Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:25.902Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:27.404Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:36:27.572Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T17:36:27.572Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T17:36:27.572Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T17:36:27.573Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:27.575Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:27.597Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:29.403Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T17:36:29.403Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T17:36:29.404Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:29.406Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:29.425Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:30.927Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T17:36:30.927Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T17:36:31.280Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T17:36:31.281Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T17:36:31.281Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:31.284Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:31.308Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
[2026-01-22T17:36:31.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:32.811Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T17:36:32.811Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T17:36:33.007Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T17:36:33.008Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T17:36:33.008Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T17:36:33.008Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:33.011Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:33.033Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:34.779Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T17:36:34.779Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T17:36:34.780Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T17:36:34.780Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:34.782Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:34.805Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:39.307Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T17:36:39.308Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T17:36:39.308Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:36:39.626Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T17:36:39.626Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T17:36:39.627Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T17:36:39.627Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:39.629Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:39.649Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:41.152Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:36:41.323Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T17:36:41.323Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T17:36:41.323Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:41.325Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:41.345Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:42.981Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:36:42.982Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:36:42.982Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:42.984Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:43.004Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:44.506Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:36:44.506Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T17:36:45.153Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T17:36:45.153Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T17:36:45.154Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T17:36:45.154Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:45.156Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:45.179Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:46.681Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T17:36:46.681Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T17:36:46.820Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T17:36:46.820Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T17:36:46.820Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:46.822Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:46.842Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:48.503Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:36:48.503Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:36:48.503Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:48.505Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:48.525Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:53.027Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T17:36:53.027Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T17:36:53.027Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T17:36:53.198Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T17:36:53.198Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T17:36:53.198Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T17:36:53.198Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T17:36:53.201Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T17:36:53.222Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:36:57.724Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T17:36:57.726Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T17:36:57.807Z] [BOT] 📂 Loaded 6691 existing routing entries
[2026-01-22T17:36:57.902Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T17:36:57.903Z] [BOT] Total entries: 6701
   Timestamp: 2026-01-22T17:36:57.871Z
[2026-01-22T17:36:57.903Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T17:36:57.903Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T17:36:57.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T17:36:57.904Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T17:36:57.904Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T17:36:57.904Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T17:36:57.904Z] [BOT] [STATS] Channel stats saved
[2026-01-22T17:36:59.923Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*