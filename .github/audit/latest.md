# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T00:31:03.458Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T00:30:28.007Z] ========================================
[2026-01-23T00:30:28.009Z] Discord Bot Execution Log
[2026-01-23T00:30:28.009Z] Environment: GitHub Actions
[2026-01-23T00:30:28.009Z] Node Version: v20.20.0
[2026-01-23T00:30:28.009Z] ========================================
[2026-01-23T00:30:28.009Z] Environment Variables Check:
[2026-01-23T00:30:28.009Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T00:30:28.009Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.009Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T00:30:28.010Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T00:30:28.010Z] 
Multi-Channel Configuration:
[2026-01-23T00:30:28.010Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T00:30:28.010Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T00:30:28.011Z] 
Data Files Check:
[2026-01-23T00:30:28.011Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T00:30:28.024Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1908327 bytes)
[2026-01-23T00:30:28.024Z] 
========================================
[2026-01-23T00:30:28.024Z] Starting Enhanced Discord Bot...
[2026-01-23T00:30:28.024Z] ========================================
[2026-01-23T00:30:28.556Z] [BOT] ✅ Loaded V2 database: 3274 jobs
[2026-01-23T00:30:29.252Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T00:30:29.252Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T00:30:29.252Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T00:30:29.375Z] [BOT] ✅ Loaded pending queue: 2776 total (2756 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T00:30:29.380Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T00:30:29.380Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T00:30:29.381Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T00:30:29.381Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T00:30:29.383Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T00:30:29.384Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T00:30:29.384Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:30:29.402Z] [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T00:30:29.909Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T00:30:29.910Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T00:30:29.910Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-23T00:30:29.913Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T00:30:29.919Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-23T00:30:29.919Z] [BOT] ✅ Archiving complete: 13 archived, 3261 active
[2026-01-23T00:30:29.943Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:31.446Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:30:31.814Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T00:30:31.815Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T00:30:31.815Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:31.817Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:31.838Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:33.339Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:30:33.534Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T00:30:33.534Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T00:30:33.535Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:33.537Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:33.559Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:35.372Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T00:30:35.372Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T00:30:35.373Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T00:30:35.373Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:35.375Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:35.399Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:36.900Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:30:37.074Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T00:30:37.075Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:37.077Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:37.097Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:38.599Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T00:30:38.599Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:30:38.838Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T00:30:38.838Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T00:30:38.838Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:38.841Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:38.866Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
[2026-01-23T00:30:38.866Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:40.552Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T00:30:40.552Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T00:30:40.553Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T00:30:40.553Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:40.555Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:40.577Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:45.078Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T00:30:45.080Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T00:30:45.080Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T00:30:45.321Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T00:30:45.321Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T00:30:45.322Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:45.324Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:45.345Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:46.846Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T00:30:47.055Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T00:30:47.056Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T00:30:47.056Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:47.058Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:47.078Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:48.579Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T00:30:48.579Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T00:30:48.799Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T00:30:48.799Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T00:30:48.799Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T00:30:48.799Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:48.801Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:48.821Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:50.322Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T00:30:50.323Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T00:30:50.737Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T00:30:50.737Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T00:30:50.737Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T00:30:50.738Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:50.739Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:50.759Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:55.261Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T00:30:55.261Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T00:30:55.261Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T00:30:55.460Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T00:30:55.461Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T00:30:55.461Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:30:55.463Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-23T00:30:55.482Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:30:59.985Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T00:30:59.989Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T00:31:00.078Z] [BOT] 📂 Loaded 6921 existing routing entries
[2026-01-23T00:31:00.177Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T00:31:00.177Z] [BOT] Total entries: 6931
   Timestamp: 2026-01-23T00:31:00.146Z
[2026-01-23T00:31:00.178Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T00:31:00.178Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T00:31:00.178Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T00:31:00.178Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-23T00:31:00.178Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T00:31:00.178Z] [BOT] [STATS] Channel stats saved
[2026-01-23T00:31:02.196Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*