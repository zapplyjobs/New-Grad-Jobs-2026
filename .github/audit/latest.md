# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T14:30:07.131Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T14:29:32.832Z] ========================================
[2026-01-24T14:29:32.834Z] Discord Bot Execution Log
[2026-01-24T14:29:32.834Z] Environment: GitHub Actions
[2026-01-24T14:29:32.834Z] Node Version: v20.20.0
[2026-01-24T14:29:32.834Z] ========================================
[2026-01-24T14:29:32.834Z] Environment Variables Check:
[2026-01-24T14:29:32.834Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T14:29:32.834Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.834Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T14:29:32.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T14:29:32.835Z] 
Multi-Channel Configuration:
[2026-01-24T14:29:32.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T14:29:32.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T14:29:32.836Z] 
Data Files Check:
[2026-01-24T14:29:32.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T14:29:32.847Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562993 bytes)
[2026-01-24T14:29:32.847Z] 
========================================
[2026-01-24T14:29:32.847Z] Starting Enhanced Discord Bot...
[2026-01-24T14:29:32.847Z] ========================================
[2026-01-24T14:29:33.388Z] [BOT] ✅ Loaded V2 database: 2653 jobs
[2026-01-24T14:29:33.965Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T14:29:33.965Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T14:29:33.965Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T14:29:34.082Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T14:29:34.085Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T14:29:34.085Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T14:29:34.085Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T14:29:34.086Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T14:29:34.086Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T14:29:34.088Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T14:29:34.089Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T14:29:34.089Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:29:34.107Z] [BOT ERROR] (node:2474) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T14:29:34.456Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T14:29:34.458Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T14:29:34.458Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:34.460Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:34.481Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:29:34.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:35.982Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:29:36.110Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T14:29:36.111Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:36.113Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:36.129Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:37.630Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:29:37.852Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T14:29:37.853Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T14:29:37.853Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:37.855Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:37.875Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:39.552Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T14:29:39.552Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:29:39.553Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T14:29:39.553Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:39.555Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:39.574Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:41.075Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T14:29:41.075Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:29:41.271Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T14:29:41.272Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T14:29:41.272Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:41.274Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:41.292Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:42.794Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T14:29:42.795Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:29:43.014Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T14:29:43.015Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T14:29:43.015Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:43.017Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:43.038Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:44.729Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T14:29:44.729Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:29:44.729Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T14:29:44.730Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:44.732Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:44.752Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:49.254Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T14:29:49.255Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:29:49.255Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:29:49.434Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T14:29:49.434Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:29:49.434Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T14:29:49.434Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:49.436Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:49.455Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:29:49.456Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:50.958Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T14:29:50.958Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:29:51.149Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T14:29:51.149Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T14:29:51.150Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:29:51.150Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:51.152Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:51.169Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:52.670Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T14:29:52.670Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T14:29:52.795Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T14:29:52.795Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T14:29:52.796Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T14:29:52.796Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:52.797Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:52.814Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:29:52.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:54.315Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T14:29:54.315Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:29:55.021Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T14:29:55.021Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T14:29:55.021Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:29:55.021Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:55.023Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:55.040Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:29:55.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:29:59.542Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T14:29:59.542Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T14:29:59.542Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T14:29:59.758Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T14:29:59.758Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T14:29:59.759Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T14:29:59.759Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:29:59.761Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:29:59.778Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:30:04.279Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T14:30:04.281Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T14:30:04.367Z] [BOT] 📂 Loaded 8011 existing routing entries
[2026-01-24T14:30:04.479Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T14:30:04.480Z] [BOT] Total entries: 8021
   Timestamp: 2026-01-24T14:30:04.443Z
[2026-01-24T14:30:04.480Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T14:30:04.480Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T14:30:04.480Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T14:30:04.480Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T14:30:04.481Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T14:30:04.481Z] [BOT] [STATS] Channel stats saved
[2026-01-24T14:30:06.499Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2474) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*