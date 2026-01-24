# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T11:41:51.718Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T11:41:17.373Z] ========================================
[2026-01-24T11:41:17.375Z] Discord Bot Execution Log
[2026-01-24T11:41:17.375Z] Environment: GitHub Actions
[2026-01-24T11:41:17.375Z] Node Version: v20.20.0
[2026-01-24T11:41:17.375Z] ========================================
[2026-01-24T11:41:17.375Z] Environment Variables Check:
[2026-01-24T11:41:17.375Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T11:41:17.375Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.375Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T11:41:17.375Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T11:41:17.375Z] 
Multi-Channel Configuration:
[2026-01-24T11:41:17.376Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T11:41:17.376Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T11:41:17.376Z] 
Data Files Check:
[2026-01-24T11:41:17.377Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T11:41:17.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T11:41:17.389Z] 
========================================
[2026-01-24T11:41:17.389Z] Starting Enhanced Discord Bot...
[2026-01-24T11:41:17.389Z] ========================================
[2026-01-24T11:41:17.869Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T11:41:18.383Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T11:41:18.383Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T11:41:18.383Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T11:41:18.539Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T11:41:18.542Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T11:41:18.543Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T11:41:18.543Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T11:41:18.543Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T11:41:18.544Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T11:41:18.546Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T11:41:18.546Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T11:41:18.546Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:41:18.564Z] [BOT ERROR] (node:2861) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T11:41:18.801Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T11:41:18.801Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T11:41:18.802Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T11:41:18.803Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:18.805Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:18.829Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:20.331Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:41:20.501Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T11:41:20.501Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T11:41:20.502Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T11:41:20.502Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:20.504Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:20.522Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:22.023Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:41:22.179Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T11:41:22.180Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T11:41:22.180Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:22.182Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:22.202Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:23.955Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T11:41:23.955Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:41:23.956Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T11:41:23.956Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:23.958Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:23.976Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:25.477Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:41:25.732Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T11:41:25.732Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T11:41:25.732Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:25.734Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:25.752Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:27.254Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:41:27.453Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T11:41:27.454Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T11:41:27.454Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:27.456Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:27.476Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:29.188Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:41:29.189Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T11:41:29.189Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:29.190Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:29.210Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:33.714Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T11:41:33.715Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T11:41:33.715Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:41:33.915Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T11:41:33.916Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T11:41:33.916Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:33.918Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:33.935Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:35.438Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T11:41:35.438Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:41:35.682Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T11:41:35.682Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T11:41:35.682Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:35.684Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:35.703Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:37.205Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T11:41:37.205Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T11:41:37.406Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T11:41:37.406Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T11:41:37.406Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T11:41:37.407Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:37.408Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:37.427Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:38.929Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T11:41:38.929Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:41:39.431Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T11:41:39.431Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T11:41:39.432Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T11:41:39.432Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:39.434Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:39.452Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:43.953Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T11:41:43.953Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T11:41:44.225Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T11:41:44.226Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T11:41:44.226Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:41:44.227Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:41:44.245Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:41:48.747Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T11:41:48.749Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T11:41:48.846Z] [BOT] 📂 Loaded 7921 existing routing entries
[2026-01-24T11:41:48.955Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7931
   Timestamp: 2026-01-24T11:41:48.922Z
[2026-01-24T11:41:48.955Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T11:41:48.955Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T11:41:48.955Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T11:41:48.955Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T11:41:48.955Z] [BOT] [STATS] Channel stats saved
[2026-01-24T11:41:50.969Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2861) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*