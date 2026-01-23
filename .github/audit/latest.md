# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T05:31:58.367Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T05:31:17.965Z] ========================================
[2026-01-23T05:31:17.967Z] Discord Bot Execution Log
[2026-01-23T05:31:17.967Z] Environment: GitHub Actions
[2026-01-23T05:31:17.967Z] Node Version: v20.20.0
[2026-01-23T05:31:17.967Z] ========================================
[2026-01-23T05:31:17.967Z] Environment Variables Check:
[2026-01-23T05:31:17.967Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T05:31:17.967Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.967Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T05:31:17.967Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T05:31:17.968Z] 
Multi-Channel Configuration:
[2026-01-23T05:31:17.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T05:31:17.968Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T05:31:17.968Z] 
Data Files Check:
[2026-01-23T05:31:17.969Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T05:31:17.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1866392 bytes)
[2026-01-23T05:31:17.983Z] 
========================================
[2026-01-23T05:31:17.983Z] Starting Enhanced Discord Bot...
[2026-01-23T05:31:17.983Z] ========================================
[2026-01-23T05:31:18.433Z] [BOT] ✅ Loaded V2 database: 3199 jobs
[2026-01-23T05:31:24.669Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T05:31:24.669Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T05:31:24.669Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T05:31:24.812Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[2026-01-23T05:31:24.813Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-23T05:31:24.813Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T05:31:24.817Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T05:31:24.817Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T05:31:24.818Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T05:31:24.818Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T05:31:24.818Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T05:31:24.829Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T05:31:24.830Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T05:31:24.830Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:31:24.847Z] [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T05:31:25.394Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T05:31:25.394Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T05:31:25.395Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T05:31:25.395Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:25.398Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:25.424Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:26.925Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:31:27.115Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T05:31:27.115Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T05:31:27.116Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T05:31:27.116Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:27.118Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:27.137Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:28.639Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T05:31:28.639Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T05:31:28.837Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T05:31:28.837Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T05:31:28.837Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T05:31:28.837Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:28.840Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:28.860Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:30.554Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T05:31:30.554Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T05:31:30.554Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T05:31:30.555Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:30.556Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:30.576Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:32.077Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T05:31:32.077Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T05:31:32.317Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T05:31:32.318Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T05:31:32.318Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:32.320Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:32.339Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:33.840Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T05:31:33.841Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T05:31:34.022Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T05:31:34.023Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T05:31:34.023Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T05:31:34.023Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:34.025Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:34.044Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:35.715Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T05:31:35.715Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T05:31:35.716Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T05:31:35.716Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:35.718Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:35.740Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:40.242Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T05:31:40.243Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T05:31:40.243Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:31:40.513Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T05:31:40.514Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T05:31:40.514Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:40.516Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:40.537Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:42.039Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T05:31:42.040Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T05:31:42.200Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T05:31:42.200Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:31:42.201Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:42.202Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:42.223Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:43.725Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T05:31:43.726Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T05:31:44.000Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T05:31:44.000Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T05:31:44.001Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T05:31:44.001Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:44.003Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:44.022Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:45.523Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T05:31:45.523Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T05:31:45.711Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T05:31:45.711Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T05:31:45.712Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:31:45.712Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:45.714Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:45.734Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:50.236Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T05:31:50.236Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T05:31:50.236Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T05:31:50.584Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T05:31:50.585Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T05:31:50.585Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T05:31:50.585Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:31:50.587Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-23T05:31:50.607Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:31:55.110Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T05:31:55.112Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T05:31:55.198Z] [BOT] 📂 Loaded 7001 existing routing entries
[2026-01-23T05:31:55.288Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7011
[2026-01-23T05:31:55.288Z] [BOT] Timestamp: 2026-01-23T05:31:55.261Z
[2026-01-23T05:31:55.288Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T05:31:55.289Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T05:31:55.289Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T05:31:55.289Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T05:31:55.289Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T05:31:55.289Z] [BOT] [STATS] Channel stats saved
[2026-01-23T05:31:57.303Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*