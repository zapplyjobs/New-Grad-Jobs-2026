# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T23:56:04.594Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T23:55:29.106Z] ========================================
[2026-01-23T23:55:29.108Z] Discord Bot Execution Log
[2026-01-23T23:55:29.108Z] Environment: GitHub Actions
[2026-01-23T23:55:29.108Z] Node Version: v20.20.0
[2026-01-23T23:55:29.108Z] ========================================
[2026-01-23T23:55:29.108Z] Environment Variables Check:
[2026-01-23T23:55:29.109Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T23:55:29.109Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T23:55:29.109Z] 
Multi-Channel Configuration:
[2026-01-23T23:55:29.109Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.109Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.110Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.110Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.110Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T23:55:29.110Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T23:55:29.110Z] 
Data Files Check:
[2026-01-23T23:55:29.110Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T23:55:29.122Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1678582 bytes)
[2026-01-23T23:55:29.122Z] 
========================================
[2026-01-23T23:55:29.122Z] Starting Enhanced Discord Bot...
[2026-01-23T23:55:29.122Z] ========================================
[2026-01-23T23:55:29.663Z] [BOT] ✅ Loaded V2 database: 2870 jobs
[2026-01-23T23:55:30.205Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-23T23:55:30.206Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T23:55:30.206Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T23:55:30.318Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-23T23:55:30.318Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-23T23:55:30.319Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T23:55:30.323Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T23:55:30.323Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T23:55:30.323Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T23:55:30.324Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T23:55:30.324Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T23:55:30.324Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T23:55:30.326Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T23:55:30.327Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T23:55:30.327Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:55:30.344Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T23:55:30.644Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T23:55:30.644Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T23:55:30.645Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T23:55:30.645Z] [BOT] 💾 BEFORE ARCHIVING: 2870 jobs in database
[2026-01-23T23:55:30.648Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T23:55:30.655Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T23:55:30.655Z] [BOT] ✅ Archiving complete: 11 archived, 2859 active
[2026-01-23T23:55:30.678Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
[2026-01-23T23:55:30.678Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:32.179Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T23:55:32.179Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:55:32.594Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T23:55:32.594Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T23:55:32.595Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T23:55:32.595Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:32.597Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:32.616Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:34.116Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T23:55:34.117Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:55:34.402Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T23:55:34.403Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T23:55:34.403Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T23:55:34.403Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:34.405Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:34.424Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:36.318Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T23:55:36.318Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T23:55:36.319Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T23:55:36.319Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:36.321Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:36.340Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:37.840Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T23:55:37.841Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:55:38.053Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T23:55:38.054Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T23:55:38.054Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:38.056Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:38.075Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:39.577Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T23:55:39.577Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:55:39.789Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T23:55:39.790Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T23:55:39.790Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:39.792Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:39.814Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:41.587Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T23:55:41.587Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T23:55:41.588Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T23:55:41.588Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:41.590Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:41.611Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
[2026-01-23T23:55:41.612Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:46.113Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T23:55:46.115Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:55:46.310Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T23:55:46.310Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T23:55:46.310Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T23:55:46.310Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:46.312Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:46.331Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:47.833Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T23:55:47.833Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:55:48.044Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T23:55:48.044Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T23:55:48.044Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:48.047Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:48.065Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:49.567Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:55:49.568Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T23:55:49.979Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T23:55:49.980Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T23:55:49.980Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:49.982Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:50.002Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:51.503Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:55:51.743Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T23:55:51.744Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T23:55:51.744Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:51.746Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:51.765Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:55:56.267Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T23:55:56.267Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T23:55:56.268Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T23:55:56.539Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T23:55:56.539Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T23:55:56.539Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-23T23:55:56.541Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-23T23:55:56.560Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:56:01.063Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T23:56:01.065Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T23:56:01.140Z] [BOT] 📂 Loaded 7581 existing routing entries
[2026-01-23T23:56:01.244Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T23:56:01.245Z] [BOT] New entries: 10
   Total entries: 7591
   Timestamp: 2026-01-23T23:56:01.197Z
[2026-01-23T23:56:01.245Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T23:56:01.245Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T23:56:01.245Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T23:56:01.245Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T23:56:01.246Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T23:56:01.246Z] [BOT] [STATS] Channel stats saved
[2026-01-23T23:56:03.265Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*