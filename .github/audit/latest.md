# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T16:51:51.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T16:51:15.395Z] ========================================
[2026-01-23T16:51:15.397Z] Discord Bot Execution Log
[2026-01-23T16:51:15.397Z] Environment: GitHub Actions
[2026-01-23T16:51:15.397Z] Node Version: v20.20.0
[2026-01-23T16:51:15.397Z] ========================================
[2026-01-23T16:51:15.397Z] Environment Variables Check:
[2026-01-23T16:51:15.397Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T16:51:15.397Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.397Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T16:51:15.398Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T16:51:15.398Z] 
Multi-Channel Configuration:
[2026-01-23T16:51:15.398Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T16:51:15.398Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T16:51:15.399Z] 
Data Files Check:
[2026-01-23T16:51:15.399Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T16:51:15.411Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1800091 bytes)
[2026-01-23T16:51:15.411Z] 
========================================
[2026-01-23T16:51:15.412Z] Starting Enhanced Discord Bot...
[2026-01-23T16:51:15.412Z] ========================================
[2026-01-23T16:51:15.960Z] [BOT] ✅ Loaded V2 database: 3084 jobs
[2026-01-23T16:51:16.656Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T16:51:16.657Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T16:51:16.657Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T16:51:16.772Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T16:51:16.775Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T16:51:16.776Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T16:51:16.776Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T16:51:16.777Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T16:51:16.777Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T16:51:16.779Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T16:51:16.779Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T16:51:16.779Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:51:16.796Z] [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T16:51:17.014Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T16:51:17.014Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T16:51:17.015Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T16:51:17.015Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:51:17.018Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T16:51:17.025Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T16:51:17.025Z] [BOT] ✅ Archiving complete: 1 archived, 3083 active
[2026-01-23T16:51:17.048Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:18.550Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T16:51:18.550Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:51:18.808Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T16:51:18.808Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T16:51:18.809Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T16:51:18.809Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:18.811Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:18.829Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:20.330Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T16:51:20.330Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:51:20.865Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T16:51:20.865Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T16:51:20.866Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T16:51:20.866Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:20.868Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:20.891Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:22.661Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T16:51:22.661Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T16:51:22.661Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T16:51:22.662Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:22.664Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:22.685Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:24.185Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T16:51:24.185Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T16:51:24.669Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T16:51:24.669Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T16:51:24.670Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:24.672Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:24.692Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:26.194Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T16:51:26.195Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:51:26.342Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T16:51:26.343Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T16:51:26.343Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:26.345Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:26.369Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:28.186Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T16:51:28.186Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T16:51:28.186Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T16:51:28.186Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:28.189Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:28.210Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:32.711Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T16:51:32.712Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:51:33.142Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T16:51:33.143Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T16:51:33.143Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:33.145Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:33.166Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
[2026-01-23T16:51:33.166Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:34.668Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T16:51:34.668Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T16:51:35.095Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T16:51:35.096Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:51:35.096Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:35.098Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:35.118Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:36.619Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:51:36.619Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T16:51:36.879Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T16:51:36.879Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T16:51:36.880Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T16:51:36.880Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:36.881Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:36.900Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:38.401Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T16:51:38.401Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:51:38.887Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T16:51:38.887Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T16:51:38.888Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:51:38.888Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:38.890Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:38.909Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:43.410Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T16:51:43.410Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T16:51:43.411Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T16:51:43.742Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T16:51:43.742Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T16:51:43.743Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T16:51:43.743Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T16:51:43.744Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-23T16:51:43.764Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:51:48.266Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T16:51:48.269Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T16:51:48.351Z] [BOT] 📂 Loaded 7321 existing routing entries
[2026-01-23T16:51:48.446Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T16:51:48.447Z] [BOT] Total entries: 7331
   Timestamp: 2026-01-23T16:51:48.414Z
[2026-01-23T16:51:48.447Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T16:51:48.447Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T16:51:48.448Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-23T16:51:48.448Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T16:51:48.448Z] [BOT] [STATS] Channel stats saved
[2026-01-23T16:51:50.467Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*