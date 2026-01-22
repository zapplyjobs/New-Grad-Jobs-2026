# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T17:20:39.661Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T17:19:58.804Z] ========================================
[2026-01-22T17:19:58.806Z] Discord Bot Execution Log
[2026-01-22T17:19:58.806Z] Environment: GitHub Actions
[2026-01-22T17:19:58.806Z] Node Version: v20.19.6
[2026-01-22T17:19:58.806Z] ========================================
[2026-01-22T17:19:58.806Z] Environment Variables Check:
[2026-01-22T17:19:58.806Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T17:19:58.806Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.806Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T17:19:58.807Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T17:19:58.807Z] 
Multi-Channel Configuration:
[2026-01-22T17:19:58.807Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T17:19:58.807Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T17:19:58.808Z] 
Data Files Check:
[2026-01-22T17:19:58.808Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T17:19:58.821Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1999492 bytes)
[2026-01-22T17:19:58.822Z] 
========================================
[2026-01-22T17:19:58.822Z] Starting Enhanced Discord Bot...
[2026-01-22T17:19:58.822Z] ========================================
[2026-01-22T17:19:59.334Z] [BOT] ✅ Loaded V2 database: 3435 jobs
[2026-01-22T17:19:59.994Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T17:19:59.995Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T17:19:59.995Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T17:20:00.110Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T17:20:00.115Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T17:20:00.115Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T17:20:00.116Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T17:20:00.116Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T17:20:00.117Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T17:20:00.120Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T17:20:00.120Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T17:20:00.120Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:20:00.141Z] [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T17:20:00.499Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T17:20:00.499Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T17:20:00.499Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T17:20:00.499Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-22T17:20:00.502Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T17:20:00.507Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-22T17:20:00.507Z] [BOT] ✅ Archiving complete: 2 archived, 3433 active
[2026-01-22T17:20:00.528Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
[2026-01-22T17:20:00.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:02.030Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T17:20:02.031Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:20:02.419Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T17:20:02.419Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T17:20:02.420Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T17:20:02.420Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:02.422Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:02.443Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:04.322Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T17:20:04.322Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T17:20:04.322Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T17:20:04.322Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:04.325Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:04.347Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:05.847Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T17:20:05.847Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T17:20:06.186Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T17:20:06.186Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T17:20:06.186Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T17:20:06.186Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:06.189Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:06.211Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:08.002Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T17:20:08.002Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T17:20:08.002Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T17:20:08.003Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:08.004Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:08.024Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:09.525Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T17:20:09.525Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T17:20:09.796Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T17:20:09.796Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T17:20:09.797Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:09.799Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:09.823Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:11.324Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T17:20:11.324Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T17:20:11.583Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T17:20:11.583Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T17:20:11.583Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T17:20:11.584Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:11.586Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:11.608Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
[2026-01-22T17:20:11.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:13.303Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T17:20:13.304Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:13.306Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:13.328Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:17.830Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T17:20:17.831Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:20:18.264Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T17:20:18.265Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T17:20:18.265Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:18.267Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:18.287Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:19.789Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:20:19.953Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T17:20:19.954Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:19.956Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:19.975Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
[2026-01-22T17:20:19.975Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:21.675Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:20:21.675Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:20:21.675Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:21.677Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:21.696Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:23.197Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T17:20:23.198Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T17:20:23.435Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T17:20:23.435Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T17:20:23.435Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:23.437Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:23.457Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:24.958Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T17:20:24.958Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T17:20:25.262Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T17:20:25.262Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T17:20:25.263Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T17:20:25.263Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:25.265Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:25.284Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:27.031Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T17:20:27.031Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T17:20:27.031Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:27.033Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:27.053Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:31.554Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T17:20:31.554Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T17:20:31.554Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T17:20:31.801Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T17:20:31.801Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-22T17:20:31.803Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-22T17:20:31.823Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
[2026-01-22T17:20:31.823Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T17:20:36.324Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T17:20:36.326Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T17:20:36.406Z] [BOT] 📂 Loaded 6681 existing routing entries
[2026-01-22T17:20:36.500Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T17:20:36.500Z] [BOT] Total entries: 6691
   Timestamp: 2026-01-22T17:20:36.468Z
[2026-01-22T17:20:36.500Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T17:20:36.500Z] [BOT] Total attempts: 15
[2026-01-22T17:20:36.500Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T17:20:36.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T17:20:36.501Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T17:20:36.501Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T17:20:36.501Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T17:20:36.501Z] [BOT] [STATS] Channel stats saved
[2026-01-22T17:20:38.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*