# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T18:32:05.462Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T18:31:24.028Z] ========================================
[2026-01-22T18:31:24.030Z] Discord Bot Execution Log
[2026-01-22T18:31:24.030Z] Environment: GitHub Actions
[2026-01-22T18:31:24.030Z] Node Version: v20.19.6
[2026-01-22T18:31:24.030Z] ========================================
[2026-01-22T18:31:24.030Z] Environment Variables Check:
[2026-01-22T18:31:24.030Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T18:31:24.030Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.030Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T18:31:24.030Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T18:31:24.031Z] 
Multi-Channel Configuration:
[2026-01-22T18:31:24.031Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T18:31:24.031Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T18:31:24.031Z] 
Data Files Check:
[2026-01-22T18:31:24.032Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T18:31:24.045Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1994878 bytes)
[2026-01-22T18:31:24.045Z] 
========================================
[2026-01-22T18:31:24.045Z] Starting Enhanced Discord Bot...
[2026-01-22T18:31:24.045Z] ========================================
[2026-01-22T18:31:24.664Z] [BOT] ✅ Loaded V2 database: 3427 jobs
[2026-01-22T18:31:25.529Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T18:31:25.530Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T18:31:25.530Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T18:31:25.651Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T18:31:25.655Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T18:31:25.655Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T18:31:25.656Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T18:31:25.657Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T18:31:25.657Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T18:31:25.660Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T18:31:25.660Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T18:31:25.661Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:31:25.677Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T18:31:25.907Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T18:31:25.907Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T18:31:25.908Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T18:31:25.908Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:31:25.911Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T18:31:25.916Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-22T18:31:25.916Z] [BOT] ✅ Archiving complete: 9 archived, 3418 active
[2026-01-22T18:31:25.939Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:27.441Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T18:31:27.441Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:31:27.717Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T18:31:27.717Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T18:31:27.718Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T18:31:27.718Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:27.720Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:27.741Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
[2026-01-22T18:31:27.741Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:29.568Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T18:31:29.568Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T18:31:29.569Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T18:31:29.569Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:29.571Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:29.594Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:31.096Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T18:31:31.096Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T18:31:31.327Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T18:31:31.327Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T18:31:31.328Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T18:31:31.329Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:31.330Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:31.353Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:33.401Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T18:31:33.402Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T18:31:33.402Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:33.404Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:33.424Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:34.925Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T18:31:34.926Z] [BOT] Category: TECH (matched: "software")
[2026-01-22T18:31:34.926Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T18:31:35.166Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T18:31:35.166Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T18:31:35.166Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T18:31:35.166Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:35.169Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:35.193Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
[2026-01-22T18:31:35.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:36.694Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T18:31:36.694Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:31:36.957Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T18:31:36.957Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T18:31:36.958Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T18:31:36.958Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:36.960Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:36.983Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:38.748Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T18:31:38.748Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T18:31:38.749Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T18:31:38.749Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:38.751Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:38.773Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:43.275Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T18:31:43.276Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:31:43.519Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T18:31:43.520Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T18:31:43.520Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:43.522Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:43.542Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:45.045Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:31:45.433Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T18:31:45.434Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:31:45.434Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:45.436Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:45.456Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:47.189Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T18:31:47.189Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:31:47.190Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:47.192Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:47.212Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:48.713Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T18:31:48.713Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T18:31:49.159Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T18:31:49.160Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T18:31:49.160Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:49.162Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:49.182Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:50.682Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T18:31:50.683Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T18:31:50.910Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T18:31:50.911Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:31:50.911Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:50.913Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:50.933Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:52.777Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T18:31:52.778Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:31:52.778Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:52.780Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:52.803Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:31:57.304Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T18:31:57.304Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T18:31:57.305Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T18:31:57.583Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T18:31:57.584Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T18:31:57.584Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:31:57.586Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-22T18:31:57.606Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:32:02.108Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T18:32:02.109Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T18:32:02.191Z] [BOT] 📂 Loaded 6721 existing routing entries
[2026-01-22T18:32:02.285Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T18:32:02.285Z] [BOT] Total entries: 6731
   Timestamp: 2026-01-22T18:32:02.253Z
[2026-01-22T18:32:02.286Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T18:32:02.286Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T18:32:02.286Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T18:32:02.287Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T18:32:02.287Z] [BOT] [STATS] Channel stats saved
[2026-01-22T18:32:04.305Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*