# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T17:03:30.891Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T17:02:50.688Z] ========================================
[2026-01-22T17:02:50.690Z] Discord Bot Execution Log
[2026-01-22T17:02:50.690Z] Environment: GitHub Actions
[2026-01-22T17:02:50.690Z] Node Version: v20.19.6
[2026-01-22T17:02:50.690Z] ========================================
[2026-01-22T17:02:50.690Z] Environment Variables Check:
[2026-01-22T17:02:50.690Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T17:02:50.690Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.690Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T17:02:50.690Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T17:02:50.690Z] 
Multi-Channel Configuration:
[2026-01-22T17:02:50.690Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.690Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T17:02:50.691Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T17:02:50.691Z] 
Data Files Check:
[2026-01-22T17:02:50.692Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T17:02:50.705Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2000582 bytes)
[2026-01-22T17:02:50.705Z] 
========================================
[2026-01-22T17:02:50.705Z] Starting Enhanced Discord Bot...
[2026-01-22T17:02:50.705Z] ========================================
[2026-01-22T17:02:51.252Z] [BOT] ✅ Loaded V2 database: 3437 jobs
[2026-01-22T17:02:51.842Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T17:02:51.843Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T17:02:51.843Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T17:02:51.957Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[2026-01-22T17:02:51.957Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T17:02:51.962Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T17:02:51.962Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T17:02:51.963Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T17:02:51.963Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T17:02:51.964Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T17:02:51.964Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T17:02:51.967Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T17:02:51.967Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T17:02:51.967Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:02:51.984Z] [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T17:02:52.381Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T17:02:52.381Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T17:02:52.382Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T17:02:52.382Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T17:02:52.385Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T17:02:52.390Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-22T17:02:52.390Z] [BOT] ✅ Archiving complete: 2 archived, 3435 active
[2026-01-22T17:02:52.413Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
[2026-01-22T17:02:52.413Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:02:53.915Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T17:02:53.916Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:02:54.379Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T17:02:54.379Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T17:02:54.380Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T17:02:54.380Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:02:54.382Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:02:54.405Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:02:56.160Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:02:56.161Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T17:02:56.161Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:02:56.164Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:02:56.186Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:02:57.688Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:02:58.039Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T17:02:58.040Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T17:02:58.040Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:02:58.043Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:02:58.066Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:02:59.926Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T17:02:59.927Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T17:02:59.927Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:02:59.929Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:02:59.948Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:01.449Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T17:03:01.450Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:03:01.702Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T17:03:01.702Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T17:03:01.703Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T17:03:01.703Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:01.705Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:01.729Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:03.232Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T17:03:03.232Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:03:03.504Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T17:03:03.505Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T17:03:03.505Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:03.507Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:03.529Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:05.223Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T17:03:05.224Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T17:03:05.224Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T17:03:05.224Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:05.226Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:05.249Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:09.751Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T17:03:09.752Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T17:03:09.752Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:03:10.058Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T17:03:10.058Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T17:03:10.059Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T17:03:10.059Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:10.061Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:10.081Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:11.584Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T17:03:11.584Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T17:03:11.751Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T17:03:11.751Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T17:03:11.752Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T17:03:11.752Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:11.754Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:11.774Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:13.452Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T17:03:13.452Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T17:03:13.452Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:03:13.453Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:13.455Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:13.474Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:14.976Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T17:03:14.976Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T17:03:15.167Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T17:03:15.167Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T17:03:15.167Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T17:03:15.167Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:15.169Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:15.189Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:16.690Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T17:03:16.690Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T17:03:16.914Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T17:03:16.914Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T17:03:16.914Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:16.916Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:16.936Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:18.636Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:03:18.636Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:03:18.636Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:18.638Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:18.658Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:23.160Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T17:03:23.160Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T17:03:23.160Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T17:03:23.483Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T17:03:23.483Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T17:03:23.483Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:03:23.485Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-22T17:03:23.506Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:03:28.008Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T17:03:28.010Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T17:03:28.092Z] [BOT] 📂 Loaded 6671 existing routing entries
[2026-01-22T17:03:28.188Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T17:03:28.189Z] [BOT] Total entries: 6681
   Timestamp: 2026-01-22T17:03:28.156Z
[2026-01-22T17:03:28.189Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T17:03:28.189Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T17:03:28.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T17:03:28.190Z] [BOT] [STATS] Channel stats saved
[2026-01-22T17:03:30.207Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*