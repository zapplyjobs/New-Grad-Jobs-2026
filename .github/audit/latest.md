# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T21:43:36.482Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T21:43:01.888Z] ========================================
[2026-01-23T21:43:01.890Z] Discord Bot Execution Log
[2026-01-23T21:43:01.890Z] Environment: GitHub Actions
[2026-01-23T21:43:01.890Z] Node Version: v20.20.0
[2026-01-23T21:43:01.890Z] ========================================
[2026-01-23T21:43:01.890Z] Environment Variables Check:
[2026-01-23T21:43:01.890Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T21:43:01.891Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T21:43:01.891Z] 
Multi-Channel Configuration:
[2026-01-23T21:43:01.891Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.891Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.892Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T21:43:01.892Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T21:43:01.892Z] 
Data Files Check:
[2026-01-23T21:43:01.892Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T21:43:01.904Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1732286 bytes)
[2026-01-23T21:43:01.904Z] 
========================================
[2026-01-23T21:43:01.904Z] Starting Enhanced Discord Bot...
[2026-01-23T21:43:01.904Z] ========================================
[2026-01-23T21:43:02.456Z] [BOT] ✅ Loaded V2 database: 2969 jobs
[2026-01-23T21:43:03.073Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T21:43:03.073Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T21:43:03.073Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T21:43:03.190Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[2026-01-23T21:43:03.192Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T21:43:03.196Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T21:43:03.196Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T21:43:03.196Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T21:43:03.197Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T21:43:03.197Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T21:43:03.197Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T21:43:03.199Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T21:43:03.200Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T21:43:03.200Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:43:03.216Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T21:43:03.512Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T21:43:03.513Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T21:43:03.513Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T21:43:03.513Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:43:03.516Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T21:43:03.521Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T21:43:03.521Z] [BOT] ✅ Archiving complete: 11 archived, 2958 active
[2026-01-23T21:43:03.543Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:05.044Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T21:43:05.044Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:43:05.287Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T21:43:05.287Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T21:43:05.287Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:05.290Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:05.307Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:06.808Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T21:43:06.809Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:43:07.054Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T21:43:07.054Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T21:43:07.054Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T21:43:07.054Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:07.057Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:07.078Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:08.841Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T21:43:08.842Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:43:08.842Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:08.844Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:08.864Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:10.365Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T21:43:10.366Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T21:43:10.544Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T21:43:10.544Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T21:43:10.544Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:10.546Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:10.567Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:12.068Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:43:12.203Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T21:43:12.204Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T21:43:12.204Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:12.206Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:12.228Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:14.394Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T21:43:14.394Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:43:14.395Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T21:43:14.395Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:14.397Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:14.417Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:18.921Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T21:43:18.922Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:43:19.212Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T21:43:19.212Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T21:43:19.212Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:19.214Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:19.233Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
[2026-01-23T21:43:19.233Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:20.736Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T21:43:20.736Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:43:20.906Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T21:43:20.906Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T21:43:20.907Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:43:20.907Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:20.909Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:20.928Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:22.433Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T21:43:22.434Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T21:43:22.597Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T21:43:22.597Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T21:43:22.598Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T21:43:22.598Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:22.600Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:22.619Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:24.121Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T21:43:24.122Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:43:24.287Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T21:43:24.288Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:43:24.288Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:24.290Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:24.309Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:28.811Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T21:43:28.811Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T21:43:28.811Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T21:43:29.125Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T21:43:29.125Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T21:43:29.125Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T21:43:29.125Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:43:29.127Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-23T21:43:29.146Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:43:33.648Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T21:43:33.651Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T21:43:33.723Z] [BOT] 📂 Loaded 7511 existing routing entries
[2026-01-23T21:43:33.830Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T21:43:33.831Z] [BOT] New entries: 10
   Total entries: 7521
   Timestamp: 2026-01-23T21:43:33.782Z
[2026-01-23T21:43:33.831Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T21:43:33.831Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T21:43:33.831Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T21:43:33.831Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T21:43:33.832Z] [BOT] [STATS] Channel stats saved
[2026-01-23T21:43:35.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*