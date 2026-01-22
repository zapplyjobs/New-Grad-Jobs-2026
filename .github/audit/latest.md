# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:43:35.398Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:43:00.033Z] ========================================
[2026-01-22T23:43:00.035Z] Discord Bot Execution Log
[2026-01-22T23:43:00.035Z] Environment: GitHub Actions
[2026-01-22T23:43:00.035Z] Node Version: v20.20.0
[2026-01-22T23:43:00.035Z] ========================================
[2026-01-22T23:43:00.036Z] Environment Variables Check:
[2026-01-22T23:43:00.036Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:43:00.036Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.036Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:43:00.036Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:43:00.036Z] 
Multi-Channel Configuration:
[2026-01-22T23:43:00.036Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:43:00.037Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:43:00.037Z] 
Data Files Check:
[2026-01-22T23:43:00.038Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-22T23:43:00.051Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1914046 bytes)
[2026-01-22T23:43:00.051Z] 
========================================
[2026-01-22T23:43:00.051Z] Starting Enhanced Discord Bot...
[2026-01-22T23:43:00.051Z] ========================================
[2026-01-22T23:43:00.635Z] [BOT] ✅ Loaded V2 database: 3285 jobs
[2026-01-22T23:43:01.350Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:43:01.350Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:43:01.350Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:43:01.468Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:43:01.473Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:43:01.474Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T23:43:01.474Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T23:43:01.475Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T23:43:01.475Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:43:01.477Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:43:01.478Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:43:01.478Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:43:01.495Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:43:01.826Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:43:01.827Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:43:01.827Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:43:01.830Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T23:43:01.835Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T23:43:01.835Z] [BOT] ✅ Archiving complete: 1 archived, 3284 active
[2026-01-22T23:43:01.860Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:03.362Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:43:03.549Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:43:03.550Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:03.552Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:03.572Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:05.073Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:43:05.231Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:43:05.232Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:43:05.232Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:05.234Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:05.257Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:06.968Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T23:43:06.969Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:43:06.969Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:06.971Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:06.994Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:08.496Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:43:08.683Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:43:08.684Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:43:08.684Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:08.687Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:08.709Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:10.210Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T23:43:10.210Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:43:10.522Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:43:10.522Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:43:10.522Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:10.525Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:10.550Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:12.236Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T23:43:12.237Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:43:12.237Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:43:12.237Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:12.239Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:12.262Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:16.764Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:43:16.765Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:43:16.765Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:43:16.968Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:43:16.969Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:43:16.969Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:16.971Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:17.005Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:18.506Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:43:19.042Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:43:19.042Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:43:19.043Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:19.045Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:19.066Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:20.567Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T23:43:20.567Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:43:20.831Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:43:20.832Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:43:20.832Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:20.834Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:20.855Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:22.355Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T23:43:22.355Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:43:22.658Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:43:22.658Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:43:22.658Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:22.660Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:22.682Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:27.184Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:43:27.185Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:43:27.423Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-22T23:43:27.423Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:43:27.423Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:43:27.423Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-22T23:43:27.426Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-22T23:43:27.446Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:43:31.949Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:43:31.952Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:43:32.034Z] [BOT] 📂 Loaded 6901 existing routing entries
[2026-01-22T23:43:32.129Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T23:43:32.129Z] [BOT] Total entries: 6911
   Timestamp: 2026-01-22T23:43:32.098Z
[2026-01-22T23:43:32.130Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 12
[2026-01-22T23:43:32.130Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T23:43:32.130Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T23:43:32.131Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-22T23:43:32.131Z] [BOT] [STATS] Channel stats saved
[2026-01-22T23:43:34.150Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*