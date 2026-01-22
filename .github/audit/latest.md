# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T10:50:03.147Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T10:49:22.380Z] ========================================
[2026-01-22T10:49:22.382Z] Discord Bot Execution Log
[2026-01-22T10:49:22.382Z] Environment: GitHub Actions
[2026-01-22T10:49:22.383Z] Node Version: v20.19.6
[2026-01-22T10:49:22.383Z] ========================================
[2026-01-22T10:49:22.383Z] Environment Variables Check:
[2026-01-22T10:49:22.383Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T10:49:22.383Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.383Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T10:49:22.383Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T10:49:22.383Z] 
Multi-Channel Configuration:
[2026-01-22T10:49:22.383Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.383Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.383Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.383Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T10:49:22.384Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T10:49:22.384Z] 
Data Files Check:
[2026-01-22T10:49:22.385Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T10:49:22.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T10:49:22.398Z] 
========================================
[2026-01-22T10:49:22.398Z] Starting Enhanced Discord Bot...
[2026-01-22T10:49:22.398Z] ========================================
[2026-01-22T10:49:22.958Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T10:49:23.683Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T10:49:23.683Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T10:49:23.683Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T10:49:23.803Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T10:49:23.807Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T10:49:23.808Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T10:49:23.808Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T10:49:23.809Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T10:49:23.809Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T10:49:23.813Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T10:49:23.813Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T10:49:23.813Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:49:23.831Z] [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T10:49:24.089Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T10:49:24.090Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T10:49:24.090Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:24.093Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:24.124Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T10:49:24.125Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:25.627Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:49:25.817Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T10:49:25.818Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T10:49:25.818Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T10:49:25.818Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:25.820Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:25.842Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:27.631Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T10:49:27.631Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T10:49:27.632Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T10:49:27.632Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:27.634Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:27.658Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:29.159Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:49:29.330Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T10:49:29.331Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T10:49:29.332Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:29.334Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:29.358Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:31.127Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T10:49:31.127Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T10:49:31.127Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T10:49:31.128Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:31.130Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:31.150Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:32.652Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T10:49:32.652Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:49:32.881Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T10:49:32.882Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T10:49:32.882Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:32.884Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:32.909Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:34.411Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T10:49:34.411Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:49:34.634Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T10:49:34.634Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T10:49:34.634Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T10:49:34.635Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:34.637Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:34.660Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:36.521Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T10:49:36.522Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T10:49:36.522Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:36.524Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:36.548Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:41.050Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T10:49:41.051Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T10:49:41.051Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:49:41.241Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T10:49:41.241Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T10:49:41.242Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T10:49:41.242Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:41.244Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:41.265Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:42.767Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:49:43.025Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T10:49:43.026Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:49:43.026Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:43.028Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:43.048Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:44.853Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T10:49:44.853Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:49:44.853Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:44.855Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:44.875Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:46.376Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T10:49:46.376Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T10:49:46.671Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T10:49:46.672Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T10:49:46.672Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T10:49:46.672Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:46.674Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:46.695Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:48.196Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T10:49:48.196Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:49:48.616Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T10:49:48.616Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T10:49:48.616Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:49:48.617Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:48.619Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:48.639Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:50.431Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T10:49:50.432Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T10:49:50.432Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:49:50.432Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:50.434Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:50.454Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:54.955Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T10:49:54.956Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T10:49:54.956Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T10:49:55.194Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T10:49:55.194Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T10:49:55.194Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T10:49:55.194Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:49:55.196Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:49:55.218Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:49:59.720Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T10:49:59.722Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T10:49:59.805Z] [BOT] 📂 Loaded 6481 existing routing entries
[2026-01-22T10:49:59.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T10:49:59.900Z] [BOT] Total entries: 6491
   Timestamp: 2026-01-22T10:49:59.868Z
[2026-01-22T10:49:59.900Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
[2026-01-22T10:49:59.901Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-22T10:49:59.901Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T10:49:59.901Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T10:49:59.902Z] [BOT] [STATS] Channel stats saved
[2026-01-22T10:50:01.920Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*