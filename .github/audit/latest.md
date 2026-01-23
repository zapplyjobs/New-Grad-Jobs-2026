# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T18:59:04.721Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T18:58:29.111Z] ========================================
[2026-01-23T18:58:29.112Z] Discord Bot Execution Log
[2026-01-23T18:58:29.112Z] Environment: GitHub Actions
[2026-01-23T18:58:29.113Z] Node Version: v20.20.0
[2026-01-23T18:58:29.113Z] ========================================
[2026-01-23T18:58:29.113Z] Environment Variables Check:
[2026-01-23T18:58:29.113Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T18:58:29.113Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.113Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T18:58:29.113Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T18:58:29.113Z] 
Multi-Channel Configuration:
[2026-01-23T18:58:29.113Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.113Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.113Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T18:58:29.114Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T18:58:29.114Z] 
Data Files Check:
[2026-01-23T18:58:29.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T18:58:29.126Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1789351 bytes)
[2026-01-23T18:58:29.126Z] 
========================================
[2026-01-23T18:58:29.126Z] Starting Enhanced Discord Bot...
[2026-01-23T18:58:29.126Z] ========================================
[2026-01-23T18:58:29.648Z] [BOT] ✅ Loaded V2 database: 3065 jobs
[2026-01-23T18:58:30.242Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T18:58:30.243Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T18:58:30.243Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T18:58:30.359Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T18:58:30.363Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T18:58:30.363Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T18:58:30.364Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T18:58:30.364Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T18:58:30.365Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T18:58:30.366Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T18:58:30.367Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T18:58:30.367Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:58:30.384Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T18:58:30.753Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T18:58:30.753Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T18:58:30.754Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T18:58:30.754Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:58:30.757Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T18:58:30.763Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-23T18:58:30.763Z] [BOT] ✅ Archiving complete: 7 archived, 3058 active
[2026-01-23T18:58:30.787Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:32.289Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T18:58:32.290Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:58:32.589Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T18:58:32.589Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T18:58:32.590Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T18:58:32.590Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:32.592Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:32.610Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:34.111Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T18:58:34.111Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:58:34.410Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T18:58:34.410Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T18:58:34.411Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T18:58:34.411Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:34.413Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:34.437Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:36.095Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T18:58:36.095Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T18:58:36.096Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T18:58:36.096Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:36.098Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:36.118Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:37.620Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T18:58:37.620Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:58:37.914Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T18:58:37.915Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T18:58:37.915Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T18:58:37.915Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:37.917Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:37.939Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
[2026-01-23T18:58:37.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:39.441Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T18:58:39.442Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:58:39.629Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T18:58:39.630Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T18:58:39.630Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:39.632Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:39.654Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:41.466Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T18:58:41.466Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T18:58:41.466Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T18:58:41.466Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:41.469Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:41.489Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:45.990Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T18:58:45.991Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:58:45.992Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:58:46.299Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T18:58:46.300Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:58:46.300Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T18:58:46.300Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:46.302Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:46.323Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:47.826Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T18:58:47.826Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T18:58:48.064Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T18:58:48.064Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T18:58:48.065Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:58:48.065Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:48.067Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:48.087Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:49.590Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T18:58:49.590Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T18:58:50.153Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T18:58:50.154Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T18:58:50.154Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:50.156Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:50.175Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:51.677Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:58:51.940Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T18:58:51.940Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:58:51.941Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:51.943Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:51.962Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:58:56.465Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T18:58:56.465Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T18:58:56.465Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T18:58:56.756Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T18:58:56.756Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T18:58:56.756Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T18:58:56.758Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-23T18:58:56.779Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:59:01.281Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T18:59:01.284Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T18:59:01.370Z] [BOT] 📂 Loaded 7411 existing routing entries
[2026-01-23T18:59:01.469Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7421
[2026-01-23T18:59:01.469Z] [BOT] Timestamp: 2026-01-23T18:59:01.435Z
[2026-01-23T18:59:01.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T18:59:01.470Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T18:59:01.470Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T18:59:01.470Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T18:59:01.470Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T18:59:01.470Z] [BOT] [STATS] Channel stats saved
[2026-01-23T18:59:03.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*