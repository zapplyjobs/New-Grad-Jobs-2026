# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T03:13:59.650Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T03:13:24.891Z] ========================================
[2026-01-24T03:13:24.893Z] Discord Bot Execution Log
[2026-01-24T03:13:24.893Z] Environment: GitHub Actions
[2026-01-24T03:13:24.893Z] Node Version: v20.20.0
[2026-01-24T03:13:24.893Z] ========================================
[2026-01-24T03:13:24.893Z] Environment Variables Check:
[2026-01-24T03:13:24.893Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T03:13:24.893Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.893Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T03:13:24.893Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T03:13:24.893Z] 
Multi-Channel Configuration:
[2026-01-24T03:13:24.893Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T03:13:24.894Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T03:13:24.894Z] 
Data Files Check:
[2026-01-24T03:13:24.895Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T03:13:24.907Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1668952 bytes)
[2026-01-24T03:13:24.907Z] 
========================================
[2026-01-24T03:13:24.907Z] Starting Enhanced Discord Bot...
[2026-01-24T03:13:24.907Z] ========================================
[2026-01-24T03:13:25.435Z] [BOT] ✅ Loaded V2 database: 2852 jobs
[2026-01-24T03:13:26.061Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T03:13:26.062Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T03:13:26.062Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T03:13:26.181Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T03:13:26.183Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T03:13:26.184Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T03:13:26.184Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T03:13:26.185Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T03:13:26.185Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T03:13:26.187Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T03:13:26.188Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T03:13:26.188Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:13:26.206Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T03:13:26.408Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T03:13:26.408Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T03:13:26.409Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T03:13:26.409Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T03:13:26.412Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T03:13:26.417Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
[2026-01-24T03:13:26.417Z] [BOT] ✅ Archiving complete: 15 archived, 2837 active
[2026-01-24T03:13:26.442Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:27.944Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:13:28.179Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T03:13:28.179Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T03:13:28.180Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:28.182Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:28.199Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:29.700Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:13:29.880Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T03:13:29.880Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T03:13:29.881Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:29.883Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:29.903Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:31.826Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T03:13:31.828Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T03:13:31.828Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:31.831Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:31.853Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:33.355Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T03:13:33.355Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T03:13:33.580Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-24T03:13:33.581Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T03:13:33.582Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T03:13:33.582Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:33.584Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:33.604Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:35.106Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T03:13:35.106Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:13:35.339Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T03:13:35.339Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T03:13:35.340Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T03:13:35.340Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:35.342Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:35.364Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:37.121Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T03:13:37.122Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T03:13:37.123Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:37.124Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:37.144Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:41.647Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T03:13:41.648Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:13:41.926Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T03:13:41.927Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:41.929Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:41.948Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:43.450Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T03:13:43.451Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:13:43.798Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T03:13:43.799Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T03:13:43.799Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:43.801Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:43.818Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:45.319Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T03:13:45.319Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T03:13:45.542Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T03:13:45.542Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T03:13:45.542Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T03:13:45.542Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:45.544Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:45.564Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:47.066Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T03:13:47.066Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:13:47.255Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T03:13:47.255Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T03:13:47.256Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T03:13:47.256Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:47.258Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:47.276Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:51.778Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T03:13:51.778Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T03:13:51.778Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T03:13:52.068Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T03:13:52.068Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T03:13:52.068Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T03:13:52.068Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:13:52.070Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-24T03:13:52.090Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:13:56.593Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T03:13:56.596Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T03:13:56.670Z] [BOT] 📂 Loaded 7611 existing routing entries
[2026-01-24T03:13:56.778Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T03:13:56.778Z] [BOT] New entries: 10
   Total entries: 7621
   Timestamp: 2026-01-24T03:13:56.730Z
[2026-01-24T03:13:56.779Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T03:13:56.779Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T03:13:56.780Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-24T03:13:58.799Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*