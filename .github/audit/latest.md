# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T09:18:16.565Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T09:17:35.468Z] ========================================
[2026-01-22T09:17:35.469Z] Discord Bot Execution Log
[2026-01-22T09:17:35.470Z] Environment: GitHub Actions
[2026-01-22T09:17:35.470Z] Node Version: v20.19.6
[2026-01-22T09:17:35.470Z] ========================================
[2026-01-22T09:17:35.470Z] Environment Variables Check:
[2026-01-22T09:17:35.470Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T09:17:35.470Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.470Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T09:17:35.470Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T09:17:35.470Z] 
Multi-Channel Configuration:
[2026-01-22T09:17:35.470Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.470Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T09:17:35.471Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T09:17:35.471Z] 
Data Files Check:
[2026-01-22T09:17:35.472Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T09:17:35.485Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2022119 bytes)
[2026-01-22T09:17:35.485Z] 
========================================
[2026-01-22T09:17:35.485Z] Starting Enhanced Discord Bot...
[2026-01-22T09:17:35.485Z] ========================================
[2026-01-22T09:17:36.040Z] [BOT] ✅ Loaded V2 database: 3478 jobs
[2026-01-22T09:17:36.833Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T09:17:36.833Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T09:17:36.833Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T09:17:36.951Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T09:17:36.955Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T09:17:36.956Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T09:17:36.956Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T09:17:36.957Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T09:17:36.958Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T09:17:36.961Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T09:17:36.961Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T09:17:36.961Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:17:36.979Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T09:17:37.289Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T09:17:37.289Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T09:17:37.290Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T09:17:37.290Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T09:17:37.293Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T09:17:37.301Z] [BOT] 📦 Archived 23 jobs to 2026-01.json (23 total in archive)
✅ Archiving complete: 23 archived, 3455 active
[2026-01-22T09:17:37.332Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:38.835Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T09:17:38.835Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T09:17:39.118Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T09:17:39.118Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T09:17:39.119Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T09:17:39.119Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:39.121Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:39.143Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:40.923Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T09:17:40.923Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T09:17:40.924Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:40.927Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:40.950Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:42.452Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T09:17:42.452Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:17:42.799Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T09:17:42.799Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T09:17:42.800Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:42.802Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:42.827Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:44.638Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:17:44.639Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T09:17:44.639Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:44.642Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:44.662Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:46.163Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T09:17:46.164Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:17:46.441Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T09:17:46.441Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T09:17:46.442Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T09:17:46.442Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:46.445Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:46.470Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:47.972Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T09:17:47.973Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:17:48.294Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T09:17:48.294Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T09:17:48.295Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T09:17:48.295Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:48.297Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:48.320Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:50.042Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:17:50.043Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T09:17:50.043Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:50.045Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:50.070Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:54.573Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T09:17:54.574Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T09:17:54.574Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:17:54.929Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T09:17:54.929Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T09:17:54.930Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T09:17:54.930Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:54.932Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:54.953Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:56.454Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T09:17:56.455Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T09:17:56.718Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T09:17:56.718Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T09:17:56.718Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:17:56.718Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:56.720Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:56.741Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:58.418Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T09:17:58.419Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:17:58.419Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:17:58.421Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:17:58.442Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:17:59.943Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T09:17:59.943Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T09:18:00.266Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T09:18:00.266Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T09:18:00.266Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:18:00.269Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:18:00.290Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:18:01.790Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T09:18:01.790Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:18:02.042Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T09:18:02.043Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:18:02.043Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:18:02.045Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:18:02.069Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:18:03.775Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T09:18:03.776Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:18:03.776Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:18:03.778Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:18:03.798Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:18:08.301Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T09:18:08.301Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T09:18:08.302Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T09:18:08.547Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T09:18:08.548Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T09:18:08.548Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:18:08.550Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-22T09:18:08.573Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:18:13.074Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T09:18:13.076Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T09:18:13.160Z] [BOT] 📂 Loaded 6431 existing routing entries
[2026-01-22T09:18:13.256Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T09:18:13.257Z] [BOT] Total entries: 6441
   Timestamp: 2026-01-22T09:18:13.224Z
[2026-01-22T09:18:13.257Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T09:18:13.257Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T09:18:13.258Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T09:18:13.258Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T09:18:13.259Z] [BOT] [STATS] Channel stats saved
[2026-01-22T09:18:15.277Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*