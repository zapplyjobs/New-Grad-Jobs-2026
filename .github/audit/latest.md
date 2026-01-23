# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T07:45:10.033Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T07:44:35.192Z] ========================================
[2026-01-23T07:44:35.195Z] Discord Bot Execution Log
[2026-01-23T07:44:35.195Z] Environment: GitHub Actions
[2026-01-23T07:44:35.195Z] Node Version: v20.20.0
[2026-01-23T07:44:35.195Z] ========================================
[2026-01-23T07:44:35.195Z] Environment Variables Check:
[2026-01-23T07:44:35.195Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T07:44:35.195Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.195Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T07:44:35.195Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T07:44:35.195Z] 
Multi-Channel Configuration:
[2026-01-23T07:44:35.196Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T07:44:35.196Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T07:44:35.196Z] 
Data Files Check:
[2026-01-23T07:44:35.197Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T07:44:35.209Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1837812 bytes)
[2026-01-23T07:44:35.209Z] 
========================================
[2026-01-23T07:44:35.209Z] Starting Enhanced Discord Bot...
[2026-01-23T07:44:35.209Z] ========================================
[2026-01-23T07:44:35.741Z] [BOT] ✅ Loaded V2 database: 3150 jobs
[2026-01-23T07:44:36.510Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T07:44:36.510Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T07:44:36.511Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T07:44:36.635Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T07:44:36.640Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T07:44:36.640Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T07:44:36.640Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T07:44:36.641Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T07:44:36.641Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T07:44:36.643Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T07:44:36.644Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T07:44:36.644Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:44:36.661Z] [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T07:44:36.950Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T07:44:36.950Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T07:44:36.951Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T07:44:36.951Z] [BOT] 💾 BEFORE ARCHIVING: 3150 jobs in database
[2026-01-23T07:44:36.953Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T07:44:36.958Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-23T07:44:36.959Z] [BOT] ✅ Archiving complete: 7 archived, 3143 active
[2026-01-23T07:44:36.981Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:38.482Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T07:44:38.482Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:44:38.811Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T07:44:38.811Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T07:44:38.812Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T07:44:38.812Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:38.814Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-23T07:44:38.832Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
[2026-01-23T07:44:38.832Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:40.333Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T07:44:40.333Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:44:40.586Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T07:44:40.586Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T07:44:40.587Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T07:44:40.587Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:40.589Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-23T07:44:40.611Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:42.273Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T07:44:42.274Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:44:42.274Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T07:44:42.274Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:42.276Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-23T07:44:42.297Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:43.798Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:44:44.035Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T07:44:44.036Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T07:44:44.036Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:44.038Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-23T07:44:44.058Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
[2026-01-23T07:44:44.058Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:45.560Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T07:44:45.561Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T07:44:45.762Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T07:44:45.762Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T07:44:45.762Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T07:44:45.763Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:45.765Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-23T07:44:45.787Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:47.717Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T07:44:47.717Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T07:44:47.718Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T07:44:47.718Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-23T07:44:47.721Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (8 total in archive)
[2026-01-23T07:44:47.721Z] [BOT] ✅ Archiving complete: 1 archived, 3142 active
[2026-01-23T07:44:47.741Z] [BOT] 💾 Saved posted_jobs.json: 3142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:52.244Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T07:44:52.245Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T07:44:52.245Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:44:52.480Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T07:44:52.480Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T07:44:52.480Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T07:44:52.480Z] [BOT] 💾 BEFORE ARCHIVING: 3142 jobs in database
[2026-01-23T07:44:52.484Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (10 total in archive)
[2026-01-23T07:44:52.484Z] [BOT] ✅ Archiving complete: 2 archived, 3140 active
[2026-01-23T07:44:52.505Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
[2026-01-23T07:44:52.505Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:54.008Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:44:54.380Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T07:44:54.381Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T07:44:54.381Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-23T07:44:54.383Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-23T07:44:54.402Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:55.904Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T07:44:55.904Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T07:44:56.052Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T07:44:56.053Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T07:44:56.053Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-23T07:44:56.055Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-23T07:44:56.075Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:44:57.575Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T07:44:57.730Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T07:44:57.731Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-23T07:44:57.733Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-23T07:44:57.751Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:45:02.253Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T07:45:02.253Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T07:45:02.253Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T07:45:02.485Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T07:45:02.486Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T07:45:02.486Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-23T07:45:02.488Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-23T07:45:02.507Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T07:45:07.009Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T07:45:07.011Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T07:45:07.091Z] [BOT] 📂 Loaded 7071 existing routing entries
[2026-01-23T07:45:07.184Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T07:45:07.185Z] [BOT] Total entries: 7081
   Timestamp: 2026-01-23T07:45:07.153Z
[2026-01-23T07:45:07.185Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T07:45:07.185Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T07:45:07.185Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T07:45:07.186Z] [BOT] [STATS] Channel stats saved
[2026-01-23T07:45:09.204Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*