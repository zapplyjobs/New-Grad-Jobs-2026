# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T21:47:54.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T21:47:15.110Z] ========================================
[2026-01-21T21:47:15.112Z] Discord Bot Execution Log
[2026-01-21T21:47:15.112Z] Environment: GitHub Actions
[2026-01-21T21:47:15.112Z] Node Version: v20.19.6
[2026-01-21T21:47:15.112Z] ========================================
[2026-01-21T21:47:15.112Z] Environment Variables Check:
[2026-01-21T21:47:15.112Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T21:47:15.112Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.112Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T21:47:15.113Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T21:47:15.113Z] 
Multi-Channel Configuration:
[2026-01-21T21:47:15.113Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T21:47:15.113Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T21:47:15.113Z] 
Data Files Check:
[2026-01-21T21:47:15.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T21:47:15.130Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2210240 bytes)
[2026-01-21T21:47:15.130Z] 
========================================
[2026-01-21T21:47:15.130Z] Starting Enhanced Discord Bot...
[2026-01-21T21:47:15.130Z] ========================================
[2026-01-21T21:47:15.663Z] [BOT] ✅ Loaded V2 database: 3817 jobs
[2026-01-21T21:47:16.227Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T21:47:16.227Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T21:47:16.227Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T21:47:16.342Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T21:47:16.346Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T21:47:16.347Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T21:47:16.347Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T21:47:16.348Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T21:47:16.348Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T21:47:16.351Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T21:47:16.351Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T21:47:16.352Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:47:16.368Z] [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T21:47:16.568Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T21:47:16.568Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T21:47:16.569Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T21:47:16.569Z] [BOT] 💾 BEFORE ARCHIVING: 3817 jobs in database
[2026-01-21T21:47:16.571Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T21:47:16.577Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T21:47:16.577Z] [BOT] ✅ Archiving complete: 10 archived, 3807 active
[2026-01-21T21:47:16.610Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:18.112Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-21T21:47:18.112Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:47:18.265Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T21:47:18.265Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T21:47:18.266Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T21:47:18.266Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:18.268Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:18.291Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
[2026-01-21T21:47:18.292Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:20.030Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T21:47:20.030Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T21:47:20.030Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T21:47:20.030Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:20.033Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:20.057Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:21.559Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-21T21:47:21.559Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:47:21.868Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T21:47:21.868Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T21:47:21.869Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:21.871Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:21.895Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:23.544Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T21:47:23.545Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T21:47:23.545Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:23.547Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:23.568Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
[2026-01-21T21:47:23.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:25.071Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:47:25.283Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T21:47:25.283Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T21:47:25.284Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:25.286Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:25.312Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:26.814Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-21T21:47:26.814Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:47:27.133Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-21T21:47:27.133Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T21:47:27.134Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T21:47:27.134Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:27.136Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:27.159Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:28.870Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T21:47:28.871Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T21:47:28.871Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:28.874Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:28.899Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:33.401Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T21:47:33.402Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:47:33.671Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T21:47:33.672Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T21:47:33.672Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:33.674Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:33.696Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:35.199Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-21T21:47:35.199Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T21:47:35.568Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T21:47:35.568Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T21:47:35.569Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T21:47:35.569Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:35.571Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:35.595Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
[2026-01-21T21:47:35.595Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:37.358Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:47:37.359Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:47:37.359Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:37.361Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:37.384Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:38.885Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-21T21:47:38.885Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T21:47:39.157Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T21:47:39.158Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T21:47:39.158Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:39.160Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:39.185Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:40.686Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-21T21:47:40.686Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T21:47:40.863Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-21T21:47:40.863Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T21:47:40.863Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T21:47:40.863Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:40.865Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:40.887Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:42.702Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:47:42.703Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:47:42.703Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:42.705Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:42.726Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:47.228Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T21:47:47.228Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T21:47:47.228Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T21:47:47.472Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T21:47:47.473Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:47:47.475Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:47:47.499Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:47:52.000Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T21:47:52.002Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T21:47:52.066Z] [BOT] 📂 Loaded 6131 existing routing entries
[2026-01-21T21:47:52.152Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T21:47:52.153Z] [BOT] Total entries: 6141
   Timestamp: 2026-01-21T21:47:52.121Z
[2026-01-21T21:47:52.153Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T21:47:52.153Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T21:47:52.153Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T21:47:52.154Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T21:47:52.154Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T21:47:52.154Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T21:47:52.154Z] [BOT] [STATS] Channel stats saved
[2026-01-21T21:47:54.173Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*