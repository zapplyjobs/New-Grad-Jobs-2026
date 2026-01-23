# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T06:32:07.470Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T06:31:32.774Z] ========================================
[2026-01-23T06:31:32.776Z] Discord Bot Execution Log
[2026-01-23T06:31:32.776Z] Environment: GitHub Actions
[2026-01-23T06:31:32.776Z] Node Version: v20.20.0
[2026-01-23T06:31:32.776Z] ========================================
[2026-01-23T06:31:32.776Z] Environment Variables Check:
[2026-01-23T06:31:32.776Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T06:31:32.776Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.776Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T06:31:32.776Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T06:31:32.777Z] 
Multi-Channel Configuration:
[2026-01-23T06:31:32.777Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T06:31:32.777Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T06:31:32.777Z] 
Data Files Check:
[2026-01-23T06:31:32.778Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T06:31:32.791Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1858140 bytes)
[2026-01-23T06:31:32.791Z] 
========================================
[2026-01-23T06:31:32.791Z] Starting Enhanced Discord Bot...
[2026-01-23T06:31:32.791Z] ========================================
[2026-01-23T06:31:33.319Z] [BOT] ✅ Loaded V2 database: 3186 jobs
[2026-01-23T06:31:33.814Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T06:31:33.815Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T06:31:33.815Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T06:31:33.966Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T06:31:33.969Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T06:31:33.969Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T06:31:33.969Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T06:31:33.970Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T06:31:33.970Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T06:31:33.970Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T06:31:33.973Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T06:31:33.973Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T06:31:33.973Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T06:31:33.992Z] [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T06:31:34.274Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T06:31:34.274Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T06:31:34.275Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T06:31:34.275Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T06:31:34.278Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T06:31:34.283Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-23T06:31:34.283Z] [BOT] ✅ Archiving complete: 12 archived, 3174 active
[2026-01-23T06:31:34.309Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:35.811Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T06:31:36.036Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T06:31:36.036Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T06:31:36.037Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T06:31:36.037Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:36.039Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:36.058Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:37.559Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T06:31:37.559Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T06:31:37.832Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T06:31:37.833Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T06:31:37.833Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T06:31:37.833Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:37.835Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:37.857Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:39.560Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T06:31:39.561Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T06:31:39.561Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T06:31:39.561Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:39.564Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:39.584Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:41.085Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T06:31:41.237Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T06:31:41.238Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T06:31:41.238Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:41.240Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:41.260Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:42.761Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T06:31:43.012Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T06:31:43.013Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T06:31:43.013Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:43.015Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:43.037Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:44.803Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T06:31:44.803Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T06:31:44.804Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T06:31:44.804Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:44.806Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:44.826Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:49.328Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T06:31:49.330Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T06:31:49.330Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T06:31:49.711Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T06:31:49.711Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T06:31:49.712Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T06:31:49.712Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:49.714Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:49.734Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
[2026-01-23T06:31:49.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:51.236Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T06:31:51.236Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T06:31:51.473Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T06:31:51.473Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T06:31:51.473Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T06:31:51.474Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:51.476Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:51.496Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
[2026-01-23T06:31:51.496Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:52.998Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T06:31:52.998Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T06:31:53.284Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T06:31:53.285Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T06:31:53.285Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:53.287Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:53.307Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
[2026-01-23T06:31:53.307Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:54.807Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T06:31:55.085Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T06:31:55.086Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T06:31:55.086Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:55.088Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:31:55.107Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:31:59.609Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T06:31:59.609Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T06:31:59.993Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T06:31:59.993Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T06:31:59.994Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-23T06:31:59.995Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-23T06:32:00.015Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:32:04.517Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T06:32:04.519Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T06:32:04.599Z] [BOT] 📂 Loaded 7031 existing routing entries
[2026-01-23T06:32:04.691Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T06:32:04.692Z] [BOT] Total entries: 7041
   Timestamp: 2026-01-23T06:32:04.660Z
[2026-01-23T06:32:04.692Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T06:32:04.692Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T06:32:04.693Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T06:32:04.693Z] [BOT] [STATS] Channel stats saved
[2026-01-23T06:32:06.712Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*