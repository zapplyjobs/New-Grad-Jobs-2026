# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T21:19:02.989Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T21:18:22.523Z] ========================================
[2026-01-22T21:18:22.525Z] Discord Bot Execution Log
[2026-01-22T21:18:22.525Z] Environment: GitHub Actions
[2026-01-22T21:18:22.525Z] Node Version: v20.19.6
[2026-01-22T21:18:22.525Z] ========================================
[2026-01-22T21:18:22.525Z] Environment Variables Check:
[2026-01-22T21:18:22.525Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T21:18:22.525Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.525Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T21:18:22.525Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T21:18:22.525Z] 
Multi-Channel Configuration:
[2026-01-22T21:18:22.525Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T21:18:22.526Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T21:18:22.526Z] 
Data Files Check:
[2026-01-22T21:18:22.527Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T21:18:22.542Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1952498 bytes)
[2026-01-22T21:18:22.542Z] 
========================================
[2026-01-22T21:18:22.542Z] Starting Enhanced Discord Bot...
[2026-01-22T21:18:22.542Z] ========================================
[2026-01-22T21:18:23.025Z] [BOT] ✅ Loaded V2 database: 3353 jobs
[2026-01-22T21:18:23.691Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T21:18:23.692Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T21:18:23.692Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T21:18:23.846Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[2026-01-22T21:18:23.847Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T21:18:23.851Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T21:18:23.852Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T21:18:23.852Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T21:18:23.853Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T21:18:23.853Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T21:18:23.853Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T21:18:23.856Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T21:18:23.857Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
[2026-01-22T21:18:23.857Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T21:18:23.873Z] [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T21:18:24.267Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T21:18:24.267Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T21:18:24.268Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T21:18:24.268Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:18:24.271Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T21:18:24.275Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-22T21:18:24.275Z] [BOT] ✅ Archiving complete: 9 archived, 3344 active
[2026-01-22T21:18:24.305Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:25.807Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:18:26.214Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T21:18:26.214Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T21:18:26.215Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T21:18:26.215Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:26.217Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:26.238Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:27.952Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:18:27.952Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T21:18:27.953Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:27.955Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:27.977Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:29.478Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T21:18:29.478Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T21:18:29.708Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T21:18:29.709Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T21:18:29.709Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T21:18:29.709Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:29.711Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:29.734Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:31.470Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T21:18:31.471Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T21:18:31.471Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:31.473Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:31.495Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:32.996Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T21:18:32.996Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:18:33.249Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T21:18:33.249Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T21:18:33.249Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T21:18:33.249Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:33.252Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:33.276Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:34.778Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T21:18:34.778Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:18:34.989Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T21:18:34.989Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T21:18:34.990Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T21:18:34.990Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:34.992Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:35.014Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:36.667Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T21:18:36.668Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T21:18:36.668Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T21:18:36.668Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:36.670Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:36.693Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:41.195Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T21:18:41.196Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T21:18:41.196Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T21:18:41.467Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T21:18:41.468Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T21:18:41.468Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:41.470Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:41.492Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:42.994Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:18:43.199Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T21:18:43.200Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:18:43.200Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:43.202Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:43.223Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:45.105Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:18:45.106Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:18:45.106Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:45.108Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:45.129Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:46.630Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:18:46.630Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T21:18:46.916Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T21:18:46.916Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T21:18:46.916Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:46.918Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:46.939Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:48.440Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T21:18:48.440Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:18:48.670Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T21:18:48.671Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:18:48.671Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:48.673Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:48.695Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:50.369Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:18:50.370Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:18:50.370Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:50.372Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:50.392Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:54.894Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T21:18:54.894Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T21:18:54.894Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T21:18:55.252Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T21:18:55.252Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T21:18:55.252Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:18:55.254Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:18:55.276Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:18:59.779Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T21:18:59.780Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T21:18:59.870Z] [BOT] 📂 Loaded 6801 existing routing entries
[2026-01-22T21:18:59.959Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6811
[2026-01-22T21:18:59.960Z] [BOT] Timestamp: 2026-01-22T21:18:59.933Z
[2026-01-22T21:18:59.960Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T21:18:59.960Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T21:18:59.961Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T21:18:59.961Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T21:19:01.974Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*