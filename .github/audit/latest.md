# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T19:43:41.201Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T19:43:05.967Z] ========================================
[2026-01-23T19:43:05.969Z] Discord Bot Execution Log
[2026-01-23T19:43:05.969Z] Environment: GitHub Actions
[2026-01-23T19:43:05.969Z] Node Version: v20.20.0
[2026-01-23T19:43:05.969Z] ========================================
[2026-01-23T19:43:05.969Z] Environment Variables Check:
[2026-01-23T19:43:05.969Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T19:43:05.969Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T19:43:05.969Z] 
Multi-Channel Configuration:
[2026-01-23T19:43:05.969Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.969Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.970Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.970Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T19:43:05.970Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T19:43:05.970Z] 
Data Files Check:
[2026-01-23T19:43:05.970Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T19:43:05.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1775653 bytes)
[2026-01-23T19:43:05.983Z] 
========================================
[2026-01-23T19:43:05.983Z] Starting Enhanced Discord Bot...
[2026-01-23T19:43:05.983Z] ========================================
[2026-01-23T19:43:06.451Z] [BOT] ✅ Loaded V2 database: 3042 jobs
[2026-01-23T19:43:07.563Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T19:43:07.563Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T19:43:07.563Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T19:43:07.720Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T19:43:07.723Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T19:43:07.724Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T19:43:07.724Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T19:43:07.724Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T19:43:07.725Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T19:43:07.727Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T19:43:07.727Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
[2026-01-23T19:43:07.727Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:43:07.743Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T19:43:07.974Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T19:43:07.974Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T19:43:07.975Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T19:43:07.975Z] [BOT] 💾 BEFORE ARCHIVING: 3042 jobs in database
[2026-01-23T19:43:07.978Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T19:43:07.982Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-23T19:43:07.982Z] [BOT] ✅ Archiving complete: 10 archived, 3032 active
[2026-01-23T19:43:08.004Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:09.506Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T19:43:09.506Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:43:09.708Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T19:43:09.708Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T19:43:09.709Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T19:43:09.709Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:09.711Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:09.730Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:11.232Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T19:43:11.232Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:43:11.402Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T19:43:11.402Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T19:43:11.402Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:11.404Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:11.425Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:13.254Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T19:43:13.255Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:13.257Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:13.278Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:14.779Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:43:15.163Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T19:43:15.164Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T19:43:15.164Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:15.166Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:15.186Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:16.688Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T19:43:16.688Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:43:16.929Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T19:43:16.929Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T19:43:16.930Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T19:43:16.930Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:16.932Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:16.955Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:18.666Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T19:43:18.667Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T19:43:18.667Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:18.669Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:18.689Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:23.191Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T19:43:23.193Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T19:43:23.193Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T19:43:23.497Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T19:43:23.498Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T19:43:23.498Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:23.500Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:23.521Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:25.024Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T19:43:25.024Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T19:43:25.405Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T19:43:25.405Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T19:43:25.406Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:43:25.406Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:25.408Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:25.428Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:26.930Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T19:43:26.930Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T19:43:27.274Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T19:43:27.274Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T19:43:27.274Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T19:43:27.274Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:27.276Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:27.296Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:28.797Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T19:43:28.797Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T19:43:28.952Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T19:43:28.953Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T19:43:28.953Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:43:28.953Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:28.955Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:28.975Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:33.476Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T19:43:33.477Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T19:43:33.477Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T19:43:33.692Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T19:43:33.692Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T19:43:33.693Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T19:43:33.693Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:43:33.695Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-23T19:43:33.715Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:43:38.217Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T19:43:38.220Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T19:43:38.312Z] [BOT] 📂 Loaded 7441 existing routing entries
[2026-01-23T19:43:38.407Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7451
   Timestamp: 2026-01-23T19:43:38.378Z
[2026-01-23T19:43:38.407Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T19:43:38.407Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T19:43:38.408Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T19:43:38.408Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T19:43:38.408Z] [BOT] [STATS] Channel stats saved
[2026-01-23T19:43:40.422Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*