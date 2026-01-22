# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T08:32:12.709Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T08:31:32.883Z] ========================================
[2026-01-22T08:31:32.885Z] Discord Bot Execution Log
[2026-01-22T08:31:32.885Z] Environment: GitHub Actions
[2026-01-22T08:31:32.885Z] Node Version: v20.19.6
[2026-01-22T08:31:32.885Z] ========================================
[2026-01-22T08:31:32.885Z] Environment Variables Check:
[2026-01-22T08:31:32.885Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T08:31:32.886Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T08:31:32.886Z] 
Multi-Channel Configuration:
[2026-01-22T08:31:32.886Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.886Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.887Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T08:31:32.887Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T08:31:32.887Z] 
Data Files Check:
[2026-01-22T08:31:32.887Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T08:31:32.900Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2028102 bytes)
[2026-01-22T08:31:32.900Z] 
========================================
[2026-01-22T08:31:32.901Z] Starting Enhanced Discord Bot...
[2026-01-22T08:31:32.901Z] ========================================
[2026-01-22T08:31:33.431Z] [BOT] ✅ Loaded V2 database: 3489 jobs
[2026-01-22T08:31:33.883Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T08:31:33.883Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T08:31:33.884Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T08:31:34.001Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T08:31:34.006Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T08:31:34.007Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T08:31:34.007Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T08:31:34.008Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T08:31:34.008Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T08:31:34.011Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T08:31:34.012Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T08:31:34.012Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T08:31:34.029Z] [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T08:31:34.735Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T08:31:34.735Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T08:31:34.736Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T08:31:34.736Z] [BOT] 💾 BEFORE ARCHIVING: 3489 jobs in database
[2026-01-22T08:31:34.738Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T08:31:34.743Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-22T08:31:34.744Z] [BOT] ✅ Archiving complete: 11 archived, 3478 active
[2026-01-22T08:31:34.775Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:36.278Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T08:31:36.487Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T08:31:36.487Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T08:31:36.488Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T08:31:36.488Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:36.490Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:36.511Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:38.277Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T08:31:38.277Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T08:31:38.277Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:38.280Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:38.302Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:39.804Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T08:31:39.804Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T08:31:39.964Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T08:31:39.964Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T08:31:39.965Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:39.967Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:39.990Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:41.759Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T08:31:41.759Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T08:31:41.759Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:41.761Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:41.781Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:43.283Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T08:31:43.283Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T08:31:43.728Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T08:31:43.729Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T08:31:43.729Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:43.731Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:43.755Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:45.257Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T08:31:45.257Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T08:31:45.436Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T08:31:45.437Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T08:31:45.437Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:45.440Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:45.462Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:47.107Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T08:31:47.107Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T08:31:47.108Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T08:31:47.108Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:47.110Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:47.132Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:51.632Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T08:31:51.633Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T08:31:51.633Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T08:31:51.834Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T08:31:51.834Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T08:31:51.835Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T08:31:51.835Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:51.837Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:51.857Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:53.359Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T08:31:53.568Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T08:31:53.569Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T08:31:53.569Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:53.571Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:53.591Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:55.508Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T08:31:55.508Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T08:31:55.508Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:55.511Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:55.531Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:57.032Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T08:31:57.032Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T08:31:57.223Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T08:31:57.223Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T08:31:57.223Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:57.225Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:57.245Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:31:58.747Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T08:31:58.747Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T08:31:59.014Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T08:31:59.015Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T08:31:59.015Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:31:59.017Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:31:59.037Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:32:00.678Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T08:32:00.678Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T08:32:00.678Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:32:00.680Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:32:00.700Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:32:05.202Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T08:32:05.202Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T08:32:05.202Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T08:32:05.357Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T08:32:05.357Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T08:32:05.358Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T08:32:05.358Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-22T08:32:05.360Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-22T08:32:05.381Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T08:32:09.882Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T08:32:09.884Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T08:32:09.965Z] [BOT] 📂 Loaded 6421 existing routing entries
[2026-01-22T08:32:10.057Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T08:32:10.058Z] [BOT] Total entries: 6431
   Timestamp: 2026-01-22T08:32:10.027Z
[2026-01-22T08:32:10.058Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T08:32:10.058Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T08:32:10.059Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T08:32:10.059Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T08:32:12.075Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*