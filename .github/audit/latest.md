# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:12:24.925Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:11:50.333Z] ========================================
[2026-01-22T23:11:50.335Z] Discord Bot Execution Log
[2026-01-22T23:11:50.335Z] Environment: GitHub Actions
[2026-01-22T23:11:50.336Z] Node Version: v20.20.0
[2026-01-22T23:11:50.336Z] ========================================
[2026-01-22T23:11:50.336Z] Environment Variables Check:
[2026-01-22T23:11:50.336Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:11:50.336Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.336Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:11:50.336Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:11:50.336Z] 
Multi-Channel Configuration:
[2026-01-22T23:11:50.336Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.336Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.336Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:11:50.337Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:11:50.337Z] 
Data Files Check:
[2026-01-22T23:11:50.338Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-22T23:11:50.350Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1925209 bytes)
[2026-01-22T23:11:50.350Z] 
========================================
[2026-01-22T23:11:50.350Z] Starting Enhanced Discord Bot...
[2026-01-22T23:11:50.350Z] ========================================
[2026-01-22T23:11:50.879Z] [BOT] ✅ Loaded V2 database: 3305 jobs
[2026-01-22T23:11:51.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:11:51.567Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:11:51.567Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:11:51.681Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:11:51.686Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:11:51.686Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Mid-Market (B2B Services)  at reddit
[2026-01-22T23:11:51.686Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, v0 at vercel
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
[2026-01-22T23:11:51.812Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-22T23:11:52.005Z] [BOT] ✅ Saved pending queue: 2768 total (2752 pending, 16 enriched, 0 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-22T23:11:52.005Z] [BOT] 📋 After blacklist filter: 16 jobs (4 blacklisted)
📋 After data quality filter: 16 jobs (0 invalid)
[2026-01-22T23:11:52.006Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-22T23:11:52.006Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:11:52.008Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:11:52.009Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:11:52.009Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:11:52.026Z] [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:11:52.596Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:11:52.597Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:11:52.597Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T23:11:52.600Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T23:11:52.605Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-22T23:11:52.606Z] [BOT] ✅ Archiving complete: 11 archived, 3294 active
[2026-01-22T23:11:52.633Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:11:54.134Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:11:54.365Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T23:11:54.365Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:11:54.365Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T23:11:54.365Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:11:54.368Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:11:54.387Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:11:55.889Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T23:11:55.889Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:11:56.058Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:11:56.059Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:11:56.059Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:11:56.061Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:11:56.081Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:11:57.691Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T23:11:57.692Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:11:57.692Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:11:57.694Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:11:57.713Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:11:59.214Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:11:59.346Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:11:59.347Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:11:59.347Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:11:59.349Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:11:59.369Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:00.871Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T23:12:00.871Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:12:01.124Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:12:01.125Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:12:01.125Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:01.127Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:01.151Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:02.843Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T23:12:02.843Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:12:02.844Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:02.847Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:02.870Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:07.372Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:12:07.373Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T23:12:07.373Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T23:12:07.616Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:12:07.617Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:12:07.617Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:07.620Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:07.640Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:09.143Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:12:09.386Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:12:09.387Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:12:09.387Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:09.389Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:09.409Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:10.911Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:12:10.911Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:12:11.134Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:12:11.134Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:12:11.135Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:11.137Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:11.157Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:12.658Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:12:12.813Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:12:12.814Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:12:12.814Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:12.816Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:12.836Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:17.338Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:12:17.338Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-22T23:12:17.338Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:12:17.591Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-22T23:12:17.591Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:12:17.592Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:12:17.592Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:12:17.594Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-22T23:12:17.614Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:12:22.117Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:12:22.119Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:12:22.190Z] [BOT] 📂 Loaded 6871 existing routing entries
[2026-01-22T23:12:22.285Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T23:12:22.285Z] [BOT] Total entries: 6881
   Timestamp: 2026-01-22T23:12:22.247Z
[2026-01-22T23:12:22.286Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 16
[2026-01-22T23:12:22.286Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 4
[2026-01-22T23:12:22.286Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T23:12:22.286Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-22T23:12:22.286Z] [BOT] [STATS] Channel stats saved
[2026-01-22T23:12:24.310Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*