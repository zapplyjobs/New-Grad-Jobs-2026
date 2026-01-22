# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:05:26.798Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:04:52.930Z] ========================================
[2026-01-22T23:04:52.932Z] Discord Bot Execution Log
[2026-01-22T23:04:52.932Z] Environment: GitHub Actions
[2026-01-22T23:04:52.932Z] Node Version: v20.20.0
[2026-01-22T23:04:52.932Z] ========================================
[2026-01-22T23:04:52.932Z] Environment Variables Check:
[2026-01-22T23:04:52.932Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:04:52.932Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.932Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:04:52.933Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:04:52.933Z] 
Multi-Channel Configuration:
[2026-01-22T23:04:52.933Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:04:52.933Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:04:52.933Z] 
Data Files Check:
[2026-01-22T23:04:52.934Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T23:04:52.947Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1924512 bytes)
[2026-01-22T23:04:52.947Z] 
========================================
[2026-01-22T23:04:52.947Z] Starting Enhanced Discord Bot...
[2026-01-22T23:04:52.947Z] ========================================
[2026-01-22T23:04:53.477Z] [BOT] ✅ Loaded V2 database: 3304 jobs
[2026-01-22T23:04:53.944Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:04:53.945Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:04:53.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:04:54.061Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:04:54.065Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:04:54.065Z] [BOT] 🚫 Skipping blacklisted job: Manager, GTM Finance at figma
[2026-01-22T23:04:54.066Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Flex Logs at datadog
🚫 Skipping blacklisted job: Director of Engineering, v0 at vercel
[2026-01-22T23:04:54.066Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Serverless Monitoring) at datadog
[2026-01-22T23:04:54.066Z] [BOT] 🚫 Skipping blacklisted job: Manager, Trial Experience- SaaS at gohighlevel
🚫 Skipping blacklisted job: Manager II, Engineering - Runtime at datadog
[2026-01-22T23:04:54.174Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-22T23:04:54.349Z] [BOT] ✅ Saved pending queue: 2763 total (2749 pending, 14 enriched, 0 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-22T23:04:54.349Z] [BOT] 📋 After blacklist filter: 14 jobs (6 blacklisted)
[2026-01-22T23:04:54.350Z] [BOT] 📋 After data quality filter: 14 jobs (0 invalid)
[2026-01-22T23:04:54.351Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-22T23:04:54.351Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T23:04:54.351Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:04:54.353Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:04:54.354Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:04:54.355Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:04:54.373Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:04:54.529Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T23:04:54.529Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:04:54.530Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:04:54.530Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:04:54.533Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:04:54.564Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
[2026-01-22T23:04:54.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:04:56.067Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:04:56.257Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T23:04:56.257Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:04:56.258Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T23:04:56.258Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:04:56.260Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:04:56.280Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:04:57.781Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T23:04:57.782Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:04:57.990Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T23:04:57.990Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:04:57.991Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:04:57.991Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:04:57.993Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:04:58.014Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:04:59.657Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T23:04:59.658Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:04:59.658Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:04:59.658Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:04:59.660Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:04:59.680Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:01.181Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T23:05:01.182Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:05:01.473Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:05:01.474Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:05:01.474Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:01.476Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:01.497Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:02.999Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T23:05:03.000Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:05:03.115Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:05:03.116Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:05:03.116Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:03.118Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:03.142Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:04.794Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T23:05:04.794Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:05:04.794Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:05:04.794Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:04.796Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:04.820Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:09.321Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:05:09.323Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:05:09.489Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:05:09.489Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:05:09.490Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:09.492Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:09.514Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:11.018Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T23:05:11.018Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:05:11.228Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:05:11.229Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:05:11.229Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:11.231Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:11.252Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:12.754Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:05:12.755Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:05:12.903Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T23:05:12.903Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:05:12.904Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:05:12.904Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:12.906Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:12.926Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:14.428Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T23:05:14.428Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:05:14.598Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T23:05:14.598Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:05:14.598Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:05:14.598Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T23:05:14.600Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T23:05:14.621Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:19.123Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:05:19.123Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-22T23:05:19.123Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:05:19.430Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:05:19.431Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:05:19.431Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T23:05:19.433Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T23:05:19.453Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:05:23.955Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:05:23.956Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:05:24.027Z] [BOT] 📂 Loaded 6861 existing routing entries
[2026-01-22T23:05:24.121Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T23:05:24.122Z] [BOT] Total entries: 6871
   Timestamp: 2026-01-22T23:05:24.083Z
[2026-01-22T23:05:24.122Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 18
[2026-01-22T23:05:24.123Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 6
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T23:05:24.123Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-22T23:05:24.123Z] [BOT] [STATS] Channel stats saved
[2026-01-22T23:05:26.145Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*