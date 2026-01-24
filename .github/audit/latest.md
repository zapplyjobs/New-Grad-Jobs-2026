# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T07:42:04.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T07:41:28.846Z] ========================================
[2026-01-24T07:41:28.848Z] Discord Bot Execution Log
[2026-01-24T07:41:28.848Z] Environment: GitHub Actions
[2026-01-24T07:41:28.848Z] Node Version: v20.20.0
[2026-01-24T07:41:28.848Z] ========================================
[2026-01-24T07:41:28.848Z] Environment Variables Check:
[2026-01-24T07:41:28.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T07:41:28.848Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T07:41:28.849Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T07:41:28.849Z] 
Multi-Channel Configuration:
[2026-01-24T07:41:28.849Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T07:41:28.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T07:41:28.850Z] 
Data Files Check:
[2026-01-24T07:41:28.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T07:41:28.862Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1609329 bytes)
[2026-01-24T07:41:28.862Z] 
========================================
[2026-01-24T07:41:28.862Z] Starting Enhanced Discord Bot...
[2026-01-24T07:41:28.862Z] ========================================
[2026-01-24T07:41:29.407Z] [BOT] ✅ Loaded V2 database: 2739 jobs
[2026-01-24T07:41:30.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T07:41:30.031Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T07:41:30.031Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T07:41:30.152Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T07:41:30.156Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T07:41:30.156Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T07:41:30.157Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T07:41:30.157Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T07:41:30.158Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T07:41:30.160Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T07:41:30.160Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T07:41:30.161Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:41:30.179Z] [BOT ERROR] (node:2580) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T07:41:30.435Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T07:41:30.435Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T07:41:30.437Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T07:41:30.437Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:41:30.439Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T07:41:30.445Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-24T07:41:30.445Z] [BOT] ✅ Archiving complete: 12 archived, 2727 active
[2026-01-24T07:41:30.469Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
[2026-01-24T07:41:30.470Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:31.972Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T07:41:31.972Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T07:41:32.122Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T07:41:32.122Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T07:41:32.123Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T07:41:32.123Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:32.125Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:32.142Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:33.643Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T07:41:33.643Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:41:33.848Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T07:41:33.849Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T07:41:33.850Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T07:41:33.850Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:33.851Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:33.871Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:35.524Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T07:41:35.525Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T07:41:35.525Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:35.527Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:35.545Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:37.047Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:41:37.283Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T07:41:37.284Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T07:41:37.284Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:37.286Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:37.306Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:38.807Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T07:41:38.808Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:41:38.972Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T07:41:38.972Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T07:41:38.973Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T07:41:38.973Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:38.975Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:38.996Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:40.794Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T07:41:40.794Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T07:41:40.795Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:40.797Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:40.815Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:45.316Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T07:41:45.318Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:41:45.552Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T07:41:45.553Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:45.555Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:45.574Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:47.077Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:41:47.315Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T07:41:47.316Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:47.318Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:47.336Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:48.837Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:41:48.837Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T07:41:49.218Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T07:41:49.219Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T07:41:49.219Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:49.220Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:49.237Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:50.739Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:41:51.846Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T07:41:51.846Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:41:51.847Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:51.848Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:51.866Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:41:56.367Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T07:41:56.367Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T07:41:56.367Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-24T07:41:56.728Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T07:41:56.729Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-24T07:41:56.731Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-24T07:41:56.749Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:42:01.250Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T07:42:01.252Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T07:42:01.340Z] [BOT] 📂 Loaded 7771 existing routing entries
[2026-01-24T07:42:01.452Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T07:42:01.452Z] [BOT] New entries: 10
   Total entries: 7781
   Timestamp: 2026-01-24T07:42:01.417Z
[2026-01-24T07:42:01.453Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T07:42:01.453Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T07:42:01.453Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T07:42:01.453Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-24T07:42:01.453Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T07:42:01.453Z] [BOT] [STATS] Channel stats saved
[2026-01-24T07:42:03.473Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2580) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*