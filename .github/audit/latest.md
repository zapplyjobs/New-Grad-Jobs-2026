# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T23:30:36.548Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T23:29:53.541Z] ========================================
[2026-01-21T23:29:53.543Z] Discord Bot Execution Log
[2026-01-21T23:29:53.543Z] Environment: GitHub Actions
[2026-01-21T23:29:53.543Z] Node Version: v20.19.6
[2026-01-21T23:29:53.543Z] ========================================
[2026-01-21T23:29:53.543Z] Environment Variables Check:
[2026-01-21T23:29:53.543Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T23:29:53.543Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T23:29:53.544Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T23:29:53.544Z] 
Multi-Channel Configuration:
[2026-01-21T23:29:53.544Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T23:29:53.544Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T23:29:53.545Z] 
Data Files Check:
[2026-01-21T23:29:53.545Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T23:29:53.560Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2171707 bytes)
[2026-01-21T23:29:53.560Z] 
========================================
[2026-01-21T23:29:53.560Z] Starting Enhanced Discord Bot...
[2026-01-21T23:29:53.560Z] ========================================
[2026-01-21T23:29:54.116Z] [BOT] ✅ Loaded V2 database: 3745 jobs
[2026-01-21T23:29:54.921Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T23:29:54.921Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T23:29:54.922Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T23:29:55.037Z] [BOT] ✅ Loaded pending queue: 2758 total (2738 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T23:29:55.044Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T23:29:55.044Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T23:29:55.045Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T23:29:55.045Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T23:29:55.046Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T23:29:55.049Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T23:29:55.049Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T23:29:55.050Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:29:55.067Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T23:29:55.313Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T23:29:55.313Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T23:29:55.314Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T23:29:55.314Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:29:55.317Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T23:29:55.324Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 3735 active
[2026-01-21T23:29:55.353Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:29:56.855Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-21T23:29:56.856Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:29:57.168Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T23:29:57.168Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T23:29:57.169Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T23:29:57.169Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:29:57.172Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:29:57.195Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
[2026-01-21T23:29:57.196Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T23:29:58.871Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T23:29:58.871Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:29:58.871Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T23:29:58.871Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:29:58.874Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:29:58.899Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:00.401Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-21T23:30:00.401Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:30:00.634Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T23:30:00.635Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T23:30:00.635Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T23:30:00.635Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:00.638Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:00.664Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:02.401Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:30:02.402Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T23:30:02.402Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:02.404Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:02.426Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:03.927Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T23:30:03.927Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:30:04.135Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T23:30:04.136Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T23:30:04.136Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:04.139Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:04.165Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:05.666Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-21T23:30:05.666Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:30:06.218Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T23:30:06.219Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T23:30:06.219Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:06.222Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:06.245Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:08.156Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:30:08.157Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T23:30:08.157Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:08.159Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:08.185Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:12.687Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T23:30:12.688Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:30:13.049Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T23:30:13.050Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T23:30:13.050Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:13.052Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:13.075Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:14.576Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T23:30:14.577Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:30:14.781Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T23:30:14.782Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:30:14.782Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:14.784Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:14.808Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:16.599Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:30:16.600Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:30:16.600Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:16.603Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:16.625Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:18.126Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-21T23:30:18.126Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T23:30:18.480Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-21T23:30:18.480Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T23:30:18.481Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T23:30:18.481Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:18.483Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:18.508Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:20.009Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-21T23:30:20.009Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:30:22.111Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T23:30:22.111Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:30:22.112Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:22.114Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:22.135Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:23.940Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T23:30:23.940Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:30:23.941Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:30:23.941Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:23.944Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:23.967Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:28.468Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T23:30:28.468Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T23:30:28.469Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T23:30:28.728Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-21T23:30:28.728Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T23:30:28.729Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T23:30:28.729Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:30:28.731Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T23:30:28.753Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:30:33.256Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T23:30:33.258Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T23:30:33.325Z] [BOT] 📂 Loaded 6201 existing routing entries
[2026-01-21T23:30:33.412Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T23:30:33.412Z] [BOT] Total entries: 6211
   Timestamp: 2026-01-21T23:30:33.380Z
[2026-01-21T23:30:33.412Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T23:30:33.412Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T23:30:33.413Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T23:30:33.413Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T23:30:33.413Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T23:30:33.413Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T23:30:33.413Z] [BOT] [STATS] Channel stats saved
[2026-01-21T23:30:35.432Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*