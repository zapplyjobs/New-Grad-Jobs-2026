# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T05:45:48.649Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T05:45:14.232Z] ========================================
[2026-01-24T05:45:14.234Z] Discord Bot Execution Log
[2026-01-24T05:45:14.234Z] Environment: GitHub Actions
[2026-01-24T05:45:14.234Z] Node Version: v20.20.0
[2026-01-24T05:45:14.234Z] ========================================
[2026-01-24T05:45:14.235Z] Environment Variables Check:
[2026-01-24T05:45:14.235Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T05:45:14.235Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T05:45:14.235Z] 
Multi-Channel Configuration:
[2026-01-24T05:45:14.235Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.235Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.236Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T05:45:14.236Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T05:45:14.236Z] 
Data Files Check:
[2026-01-24T05:45:14.236Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T05:45:14.248Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1634498 bytes)
[2026-01-24T05:45:14.248Z] 
========================================
[2026-01-24T05:45:14.248Z] Starting Enhanced Discord Bot...
[2026-01-24T05:45:14.248Z] ========================================
[2026-01-24T05:45:14.813Z] [BOT] ✅ Loaded V2 database: 2787 jobs
[2026-01-24T05:45:15.486Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T05:45:15.486Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T05:45:15.486Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T05:45:15.605Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T05:45:15.608Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T05:45:15.609Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T05:45:15.609Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T05:45:15.610Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T05:45:15.610Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T05:45:15.612Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T05:45:15.612Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T05:45:15.613Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:45:15.631Z] [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T05:45:15.838Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T05:45:15.838Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T05:45:15.839Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T05:45:15.840Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:45:15.842Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T05:45:15.844Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-24T05:45:15.844Z] [BOT] ✅ Archiving complete: 10 archived, 2777 active
[2026-01-24T05:45:15.862Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:17.365Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T05:45:17.365Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:45:17.527Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T05:45:17.527Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T05:45:17.528Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T05:45:17.528Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:17.530Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:17.548Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:19.049Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T05:45:19.050Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:45:19.269Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T05:45:19.269Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T05:45:19.270Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T05:45:19.270Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:19.272Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:19.292Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:20.983Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T05:45:20.983Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T05:45:20.985Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T05:45:20.985Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:20.988Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:21.010Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:22.511Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:45:22.730Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T05:45:22.731Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T05:45:22.731Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:22.733Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:22.754Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:24.256Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T05:45:24.256Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:45:24.415Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T05:45:24.415Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T05:45:24.416Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T05:45:24.416Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:24.419Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:24.439Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:26.094Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T05:45:26.095Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:26.097Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:26.116Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:30.618Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T05:45:30.620Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:45:30.791Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:45:30.792Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:30.795Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:30.812Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:32.315Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:45:32.551Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T05:45:32.551Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T05:45:32.552Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:45:32.552Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:32.554Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:32.572Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:34.074Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T05:45:34.074Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T05:45:34.286Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T05:45:34.287Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T05:45:34.288Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:34.289Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:34.307Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:35.808Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:45:36.156Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T05:45:36.156Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:45:36.157Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:36.158Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:36.175Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:40.677Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T05:45:40.678Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T05:45:40.678Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T05:45:41.000Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T05:45:41.000Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T05:45:41.001Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T05:45:41.001Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-24T05:45:41.003Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-24T05:45:41.020Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:45:45.521Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T05:45:45.523Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T05:45:45.617Z] [BOT] 📂 Loaded 7691 existing routing entries
[2026-01-24T05:45:45.711Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7701
[2026-01-24T05:45:45.712Z] [BOT] Timestamp: 2026-01-24T05:45:45.674Z
[2026-01-24T05:45:45.712Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T05:45:45.712Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T05:45:45.712Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T05:45:45.713Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T05:45:45.713Z] [BOT] [STATS] Channel stats saved
[2026-01-24T05:45:47.731Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*