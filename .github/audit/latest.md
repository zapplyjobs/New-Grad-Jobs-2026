# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:56:18.816Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:55:44.020Z] ========================================
[2026-01-22T23:55:44.022Z] Discord Bot Execution Log
[2026-01-22T23:55:44.022Z] Environment: GitHub Actions
[2026-01-22T23:55:44.022Z] Node Version: v20.20.0
[2026-01-22T23:55:44.022Z] ========================================
[2026-01-22T23:55:44.022Z] Environment Variables Check:
[2026-01-22T23:55:44.022Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:55:44.022Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.022Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:55:44.022Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:55:44.022Z] 
Multi-Channel Configuration:
[2026-01-22T23:55:44.022Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:55:44.023Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:55:44.023Z] 
Data Files Check:
[2026-01-22T23:55:44.024Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-22T23:55:44.036Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1913500 bytes)
[2026-01-22T23:55:44.037Z] 
========================================
[2026-01-22T23:55:44.037Z] Starting Enhanced Discord Bot...
[2026-01-22T23:55:44.037Z] ========================================
[2026-01-22T23:55:44.590Z] [BOT] ✅ Loaded V2 database: 3284 jobs
[2026-01-22T23:55:45.105Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:55:45.105Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:55:45.106Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:55:45.223Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:55:45.228Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:55:45.228Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T23:55:45.228Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T23:55:45.229Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T23:55:45.229Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:55:45.231Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:55:45.232Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:55:45.232Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:55:45.250Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:55:45.417Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T23:55:45.417Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:55:45.418Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:55:45.418Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:55:45.421Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T23:55:45.428Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T23:55:45.428Z] [BOT] ✅ Archiving complete: 10 archived, 3274 active
[2026-01-22T23:55:45.456Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
[2026-01-22T23:55:45.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:46.959Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T23:55:46.959Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:55:47.205Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T23:55:47.206Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:55:47.206Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T23:55:47.206Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:47.209Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:47.230Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:48.731Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:55:49.118Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:55:49.119Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:55:49.119Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:49.122Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:49.145Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:50.925Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T23:55:50.926Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:55:50.926Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:55:50.926Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:50.929Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:50.951Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:52.453Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T23:55:52.454Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:55:52.739Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T23:55:52.739Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:55:52.739Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:55:52.739Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:52.742Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:52.764Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:54.266Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T23:55:54.266Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:55:54.570Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T23:55:54.570Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:55:54.570Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:55:54.571Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:54.573Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:54.598Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:55:56.296Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T23:55:56.296Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:55:56.297Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:55:56.297Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:55:56.299Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:55:56.322Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:00.824Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:56:00.826Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T23:56:00.826Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T23:56:01.182Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:56:01.183Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:56:01.183Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:56:01.186Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:56:01.207Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:02.711Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:56:02.910Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T23:56:02.910Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:56:02.910Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:56:02.910Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:56:02.912Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:56:02.933Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:04.435Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T23:56:04.435Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:56:04.607Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:56:04.608Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:56:04.608Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:56:04.610Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:56:04.631Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:06.133Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T23:56:06.133Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:56:06.293Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T23:56:06.293Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:56:06.293Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:56:06.293Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:56:06.295Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:56:06.316Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:10.818Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:56:10.819Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-22T23:56:10.819Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:56:11.326Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-22T23:56:11.326Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:56:11.327Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:56:11.327Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-22T23:56:11.329Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-22T23:56:11.349Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:56:15.851Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:56:15.853Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:56:15.936Z] [BOT] 📂 Loaded 6911 existing routing entries
[2026-01-22T23:56:16.030Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T23:56:16.031Z] [BOT] Total entries: 6921
   Timestamp: 2026-01-22T23:56:15.999Z
[2026-01-22T23:56:16.031Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T23:56:16.031Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T23:56:16.031Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T23:56:16.032Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-22T23:56:16.032Z] [BOT] [STATS] Channel stats saved
[2026-01-22T23:56:18.050Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*