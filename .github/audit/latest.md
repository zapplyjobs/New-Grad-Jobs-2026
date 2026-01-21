# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T22:33:15.515Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T22:32:34.311Z] ========================================
[2026-01-21T22:32:34.312Z] Discord Bot Execution Log
[2026-01-21T22:32:34.312Z] Environment: GitHub Actions
[2026-01-21T22:32:34.313Z] Node Version: v20.19.6
[2026-01-21T22:32:34.313Z] ========================================
[2026-01-21T22:32:34.313Z] Environment Variables Check:
[2026-01-21T22:32:34.313Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T22:32:34.313Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.313Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T22:32:34.313Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T22:32:34.313Z] 
Multi-Channel Configuration:
[2026-01-21T22:32:34.313Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.313Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.313Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T22:32:34.314Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T22:32:34.314Z] 
Data Files Check:
[2026-01-21T22:32:34.315Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T22:32:34.329Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2192931 bytes)
[2026-01-21T22:32:34.329Z] 
========================================
[2026-01-21T22:32:34.329Z] Starting Enhanced Discord Bot...
[2026-01-21T22:32:34.329Z] ========================================
[2026-01-21T22:32:34.853Z] [BOT] ✅ Loaded V2 database: 3785 jobs
[2026-01-21T22:32:35.688Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T22:32:35.688Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T22:32:35.688Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T22:32:35.803Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T22:32:35.807Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T22:32:35.808Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T22:32:35.808Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T22:32:35.809Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T22:32:35.809Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T22:32:35.812Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T22:32:35.813Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T22:32:35.813Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:32:35.829Z] [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T22:32:36.372Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T22:32:36.373Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T22:32:36.373Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:32:36.376Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T22:32:36.381Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T22:32:36.381Z] [BOT] ✅ Archiving complete: 10 archived, 3775 active
[2026-01-21T22:32:36.407Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
[2026-01-21T22:32:36.407Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:37.908Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-21T22:32:37.908Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:32:38.151Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T22:32:38.152Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T22:32:38.152Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T22:32:38.152Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:38.155Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:38.178Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:39.982Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T22:32:39.983Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T22:32:39.983Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:39.985Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:40.010Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:41.512Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:32:41.924Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T22:32:41.925Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T22:32:41.925Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T22:32:41.926Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:41.928Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:41.952Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:43.718Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:32:43.719Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T22:32:43.719Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:43.721Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:43.743Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:45.245Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T22:32:45.245Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:32:45.443Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T22:32:45.444Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T22:32:45.444Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:45.447Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:45.473Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:46.975Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-21T22:32:46.975Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:32:47.205Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T22:32:47.206Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T22:32:47.206Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:47.208Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:47.231Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:49.057Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:32:49.058Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T22:32:49.058Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:49.060Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:49.086Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:53.588Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T22:32:53.589Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T22:32:53.589Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:32:53.779Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-21T22:32:53.780Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T22:32:53.780Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T22:32:53.780Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:53.783Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:53.804Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:55.306Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T22:32:55.306Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:32:55.628Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T22:32:55.628Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T22:32:55.629Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:32:55.629Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:55.631Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:55.656Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:57.571Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T22:32:57.572Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:32:57.572Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:57.575Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:57.597Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:32:59.098Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-21T22:32:59.098Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T22:32:59.300Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T22:32:59.301Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T22:32:59.301Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:32:59.303Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:32:59.328Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:33:00.830Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-21T22:33:00.830Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T22:33:00.998Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T22:33:00.998Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:33:00.998Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:33:01.001Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:33:01.023Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:33:02.836Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T22:33:02.836Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T22:33:02.837Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:33:02.837Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:33:02.839Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:33:02.861Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:33:07.363Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T22:33:07.363Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T22:33:07.364Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T22:33:07.601Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-21T22:33:07.601Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T22:33:07.601Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T22:33:07.601Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T22:33:07.604Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T22:33:07.627Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
[2026-01-21T22:33:07.627Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T22:33:12.130Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T22:33:12.132Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T22:33:12.197Z] [BOT] 📂 Loaded 6161 existing routing entries
[2026-01-21T22:33:12.300Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T22:33:12.300Z] [BOT] Total entries: 6171
   Timestamp: 2026-01-21T22:33:12.254Z
[2026-01-21T22:33:12.300Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T22:33:12.300Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T22:33:12.301Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T22:33:12.301Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T22:33:12.301Z] [BOT] [STATS] Channel stats saved
[2026-01-21T22:33:14.321Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*