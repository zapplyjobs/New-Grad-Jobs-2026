# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T22:44:25.534Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T22:43:51.128Z] ========================================
[2026-01-23T22:43:51.130Z] Discord Bot Execution Log
[2026-01-23T22:43:51.130Z] Environment: GitHub Actions
[2026-01-23T22:43:51.130Z] Node Version: v20.20.0
[2026-01-23T22:43:51.130Z] ========================================
[2026-01-23T22:43:51.130Z] Environment Variables Check:
[2026-01-23T22:43:51.130Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T22:43:51.131Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T22:43:51.131Z] 
Multi-Channel Configuration:
[2026-01-23T22:43:51.131Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.131Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.132Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.132Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.132Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.132Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T22:43:51.132Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T22:43:51.132Z] 
Data Files Check:
[2026-01-23T22:43:51.133Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T22:43:51.144Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1711918 bytes)
[2026-01-23T22:43:51.144Z] 
========================================
[2026-01-23T22:43:51.144Z] Starting Enhanced Discord Bot...
[2026-01-23T22:43:51.144Z] ========================================
[2026-01-23T22:43:51.712Z] [BOT] ✅ Loaded V2 database: 2932 jobs
[2026-01-23T22:43:52.049Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T22:43:52.050Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T22:43:52.050Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T22:43:52.170Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[2026-01-23T22:43:52.172Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T22:43:52.175Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T22:43:52.176Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T22:43:52.176Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T22:43:52.177Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T22:43:52.177Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T22:43:52.177Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T22:43:52.179Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T22:43:52.180Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T22:43:52.180Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:43:52.198Z] [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T22:43:52.434Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T22:43:52.434Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T22:43:52.435Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T22:43:52.435Z] [BOT] 💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-23T22:43:52.438Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T22:43:52.443Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T22:43:52.443Z] [BOT] ✅ Archiving complete: 11 archived, 2921 active
[2026-01-23T22:43:52.468Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:43:53.970Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T22:43:53.970Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:43:54.428Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T22:43:54.429Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T22:43:54.429Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:43:54.431Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:43:54.449Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:43:55.950Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:43:56.069Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T22:43:56.069Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T22:43:56.070Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:43:56.071Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:43:56.092Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:43:57.915Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T22:43:57.915Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T22:43:57.915Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T22:43:57.915Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:43:57.917Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:43:57.937Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:43:59.439Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:43:59.663Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T22:43:59.664Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T22:43:59.664Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:43:59.666Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:43:59.688Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:01.190Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T22:44:01.190Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:44:01.543Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T22:44:01.544Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T22:44:01.544Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:01.546Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:01.569Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:03.476Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T22:44:03.476Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T22:44:03.477Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T22:44:03.477Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:03.479Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:03.500Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:08.002Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T22:44:08.004Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:44:08.159Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T22:44:08.159Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T22:44:08.159Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:08.161Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:08.181Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:09.682Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T22:44:09.682Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:44:09.818Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T22:44:09.819Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T22:44:09.819Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:09.821Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:09.841Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:11.342Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T22:44:11.342Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T22:44:11.516Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T22:44:11.516Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T22:44:11.516Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T22:44:11.516Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:11.518Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:11.538Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:13.039Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T22:44:13.039Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:44:13.297Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T22:44:13.297Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T22:44:13.297Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T22:44:13.297Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:13.299Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:13.319Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:17.820Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T22:44:17.820Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T22:44:17.820Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T22:44:18.085Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T22:44:18.085Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T22:44:18.085Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T22:44:18.086Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T22:44:18.087Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-23T22:44:18.107Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:44:22.609Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T22:44:22.611Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T22:44:22.686Z] [BOT] 📂 Loaded 7551 existing routing entries
[2026-01-23T22:44:22.795Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T22:44:22.795Z] [BOT] Total entries: 7561
   Timestamp: 2026-01-23T22:44:22.746Z
[2026-01-23T22:44:22.795Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T22:44:22.795Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T22:44:22.796Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T22:44:22.796Z] [BOT] [STATS] Channel stats saved
[2026-01-23T22:44:24.816Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*