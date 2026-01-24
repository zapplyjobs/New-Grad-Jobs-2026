# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T03:51:43.768Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T03:51:09.102Z] ========================================
[2026-01-24T03:51:09.104Z] Discord Bot Execution Log
[2026-01-24T03:51:09.104Z] Environment: GitHub Actions
[2026-01-24T03:51:09.104Z] Node Version: v20.20.0
[2026-01-24T03:51:09.105Z] ========================================
[2026-01-24T03:51:09.105Z] Environment Variables Check:
[2026-01-24T03:51:09.105Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T03:51:09.105Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.105Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T03:51:09.105Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T03:51:09.105Z] 
Multi-Channel Configuration:
[2026-01-24T03:51:09.105Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.105Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.105Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.105Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T03:51:09.106Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T03:51:09.106Z] 
Data Files Check:
[2026-01-24T03:51:09.107Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T03:51:09.118Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1660870 bytes)
[2026-01-24T03:51:09.118Z] 
========================================
[2026-01-24T03:51:09.118Z] Starting Enhanced Discord Bot...
[2026-01-24T03:51:09.118Z] ========================================
[2026-01-24T03:51:09.687Z] [BOT] ✅ Loaded V2 database: 2837 jobs
[2026-01-24T03:51:10.269Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T03:51:10.270Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T03:51:10.270Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T03:51:10.388Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T03:51:10.392Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T03:51:10.393Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T03:51:10.393Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T03:51:10.394Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T03:51:10.394Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T03:51:10.394Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T03:51:10.396Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T03:51:10.397Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T03:51:10.397Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:51:10.415Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T03:51:10.755Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T03:51:10.756Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T03:51:10.757Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T03:51:10.757Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-24T03:51:10.760Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T03:51:10.765Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-24T03:51:10.765Z] [BOT] ✅ Archiving complete: 11 archived, 2826 active
[2026-01-24T03:51:10.789Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:12.291Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:51:12.479Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T03:51:12.479Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T03:51:12.480Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:12.483Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:12.500Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:14.001Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T03:51:14.001Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:51:14.211Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T03:51:14.211Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T03:51:14.212Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:14.214Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:14.233Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:14.233Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:16.015Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T03:51:16.015Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T03:51:16.016Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T03:51:16.017Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:16.019Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:16.042Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:17.543Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T03:51:17.752Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T03:51:17.753Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T03:51:17.753Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:17.755Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:17.775Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:19.276Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T03:51:19.277Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T03:51:19.614Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T03:51:19.615Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:19.617Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:19.637Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:21.331Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T03:51:21.331Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T03:51:21.332Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:21.333Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:21.355Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:21.355Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:25.857Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T03:51:25.858Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:51:26.128Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T03:51:26.129Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:26.130Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:26.150Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:26.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:27.652Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T03:51:27.653Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:51:27.815Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T03:51:27.816Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:27.818Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:27.834Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:27.834Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:29.336Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:51:29.336Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T03:51:29.493Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T03:51:29.494Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T03:51:29.495Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:29.496Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:29.515Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:29.515Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:31.016Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T03:51:31.016Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T03:51:31.190Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T03:51:31.191Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:31.193Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:31.211Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:35.712Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T03:51:35.712Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T03:51:35.712Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T03:51:36.006Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T03:51:36.006Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T03:51:36.007Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T03:51:36.007Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T03:51:36.008Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-24T03:51:36.027Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
[2026-01-24T03:51:36.027Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T03:51:40.529Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T03:51:40.532Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T03:51:40.607Z] [BOT] 📂 Loaded 7621 existing routing entries
[2026-01-24T03:51:40.713Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T03:51:40.713Z] [BOT] New entries: 10
   Total entries: 7631
   Timestamp: 2026-01-24T03:51:40.666Z
[2026-01-24T03:51:40.714Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T03:51:40.714Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T03:51:40.714Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T03:51:40.714Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T03:51:40.715Z] [BOT] [STATS] Channel stats saved
[2026-01-24T03:51:42.735Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*