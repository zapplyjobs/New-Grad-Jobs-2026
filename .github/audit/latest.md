# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T08:31:17.920Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T08:30:43.203Z] ========================================
[2026-01-24T08:30:43.205Z] Discord Bot Execution Log
[2026-01-24T08:30:43.205Z] Environment: GitHub Actions
[2026-01-24T08:30:43.205Z] Node Version: v20.20.0
[2026-01-24T08:30:43.205Z] ========================================
[2026-01-24T08:30:43.206Z] Environment Variables Check:
[2026-01-24T08:30:43.206Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T08:30:43.206Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.206Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T08:30:43.206Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T08:30:43.206Z] 
Multi-Channel Configuration:
[2026-01-24T08:30:43.206Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.206Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.206Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.206Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T08:30:43.207Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T08:30:43.207Z] 
Data Files Check:
[2026-01-24T08:30:43.208Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T08:30:43.219Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1598024 bytes)
[2026-01-24T08:30:43.219Z] 
========================================
[2026-01-24T08:30:43.219Z] Starting Enhanced Discord Bot...
[2026-01-24T08:30:43.219Z] ========================================
[2026-01-24T08:30:43.746Z] [BOT] ✅ Loaded V2 database: 2718 jobs
[2026-01-24T08:30:44.576Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T08:30:44.577Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T08:30:44.577Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T08:30:44.695Z] [BOT] ✅ Loaded pending queue: 2788 total (2768 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T08:30:44.698Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T08:30:44.699Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T08:30:44.699Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T08:30:44.700Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T08:30:44.700Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T08:30:44.700Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T08:30:44.702Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T08:30:44.703Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T08:30:44.703Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:30:44.721Z] [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T08:30:45.148Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T08:30:45.148Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T08:30:45.149Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T08:30:45.149Z] [BOT] 💾 BEFORE ARCHIVING: 2718 jobs in database
[2026-01-24T08:30:45.152Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T08:30:45.157Z] [BOT] 📦 Archived 31 jobs to 2026-01.json (31 total in archive)
[2026-01-24T08:30:45.157Z] [BOT] ✅ Archiving complete: 31 archived, 2687 active
[2026-01-24T08:30:45.188Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:46.690Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T08:30:46.690Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:30:47.100Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T08:30:47.101Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T08:30:47.102Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:47.104Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:47.121Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:48.623Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T08:30:48.623Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:30:48.755Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T08:30:48.757Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:48.759Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:48.778Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
[2026-01-24T08:30:48.778Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:50.458Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T08:30:50.459Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:30:50.460Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T08:30:50.460Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:50.461Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:50.480Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:51.980Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T08:30:51.981Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:30:52.158Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T08:30:52.159Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:52.160Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:52.180Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:53.682Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T08:30:53.682Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:30:53.821Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T08:30:53.822Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T08:30:53.822Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:53.824Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:53.845Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:30:55.739Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T08:30:55.740Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:30:55.740Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T08:30:55.740Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:30:55.742Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:30:55.761Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:00.263Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T08:31:00.264Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:31:00.476Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T08:31:00.477Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:31:00.479Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:31:00.497Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:02.000Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T08:31:02.000Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:31:02.232Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T08:31:02.232Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T08:31:02.233Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T08:31:02.233Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:31:02.235Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:31:02.255Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:03.757Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T08:31:03.757Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T08:31:03.949Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T08:31:03.950Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:31:03.952Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:31:03.970Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:05.472Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:31:05.787Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T08:31:05.788Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T08:31:05.789Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:31:05.791Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:31:05.808Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:10.311Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T08:31:10.311Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T08:31:10.311Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T08:31:10.564Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T08:31:10.565Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:31:10.567Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-24T08:31:10.585Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:31:15.087Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T08:31:15.089Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T08:31:15.164Z] [BOT] 📂 Loaded 7791 existing routing entries
[2026-01-24T08:31:15.273Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T08:31:15.273Z] [BOT] New entries: 10
   Total entries: 7801
   Timestamp: 2026-01-24T08:31:15.223Z
[2026-01-24T08:31:15.274Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T08:31:15.274Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T08:31:15.274Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T08:31:15.274Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-24T08:31:15.274Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T08:31:15.274Z] [BOT] [STATS] Channel stats saved
[2026-01-24T08:31:17.294Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*