# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T13:53:27.106Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T13:52:45.825Z] ========================================
[2026-01-22T13:52:45.827Z] Discord Bot Execution Log
[2026-01-22T13:52:45.827Z] Environment: GitHub Actions
[2026-01-22T13:52:45.827Z] Node Version: v20.19.6
[2026-01-22T13:52:45.827Z] ========================================
[2026-01-22T13:52:45.828Z] Environment Variables Check:
[2026-01-22T13:52:45.828Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T13:52:45.828Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.828Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T13:52:45.828Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T13:52:45.828Z] 
Multi-Channel Configuration:
[2026-01-22T13:52:45.828Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.828Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.828Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.828Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T13:52:45.829Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T13:52:45.829Z] 
Data Files Check:
[2026-01-22T13:52:45.830Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T13:52:45.843Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T13:52:45.843Z] 
========================================
[2026-01-22T13:52:45.843Z] Starting Enhanced Discord Bot...
[2026-01-22T13:52:45.843Z] ========================================
[2026-01-22T13:52:46.384Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T13:52:47.077Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T13:52:47.077Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T13:52:47.077Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T13:52:47.196Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T13:52:47.199Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T13:52:47.200Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T13:52:47.200Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T13:52:47.201Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T13:52:47.201Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T13:52:47.204Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T13:52:47.205Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T13:52:47.205Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:52:47.222Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T13:52:47.577Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T13:52:47.577Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T13:52:47.578Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T13:52:47.578Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:47.580Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:47.608Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:49.110Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T13:52:49.111Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:52:49.479Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T13:52:49.480Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T13:52:49.480Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T13:52:49.480Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:49.482Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:49.503Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:51.346Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T13:52:51.347Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T13:52:51.347Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:51.349Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:51.372Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:52.874Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:52:53.086Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T13:52:53.087Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T13:52:53.087Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:53.090Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:53.113Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:54.833Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T13:52:54.833Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T13:52:54.833Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:54.835Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:54.855Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:56.356Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T13:52:56.356Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:52:56.556Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T13:52:56.557Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T13:52:56.557Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:56.559Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:56.583Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:52:58.086Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:52:58.363Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T13:52:58.363Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T13:52:58.363Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:52:58.366Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:52:58.389Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:00.149Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T13:53:00.150Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T13:53:00.150Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:00.152Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:00.174Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:04.676Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T13:53:04.677Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T13:53:04.677Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T13:53:04.951Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T13:53:04.952Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T13:53:04.952Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:04.954Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:04.975Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:06.478Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T13:53:06.748Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T13:53:06.748Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T13:53:06.749Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T13:53:06.749Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:06.751Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:06.776Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:08.497Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T13:53:08.498Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T13:53:08.498Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T13:53:08.498Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:08.500Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:08.524Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:10.026Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T13:53:10.026Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T13:53:10.243Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T13:53:10.244Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T13:53:10.244Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:10.247Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:10.268Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:11.771Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T13:53:12.158Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T13:53:12.158Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T13:53:12.158Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:12.161Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:12.181Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:14.043Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T13:53:14.044Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T13:53:14.044Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:14.046Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:14.066Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:18.568Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T13:53:18.568Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T13:53:18.568Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T13:53:19.109Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T13:53:19.109Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T13:53:19.109Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:53:19.111Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:53:19.138Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:53:23.641Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T13:53:23.642Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T13:53:23.723Z] [BOT] 📂 Loaded 6581 existing routing entries
[2026-01-22T13:53:23.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T13:53:23.819Z] [BOT] Total entries: 6591
   Timestamp: 2026-01-22T13:53:23.787Z
[2026-01-22T13:53:23.819Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
[2026-01-22T13:53:23.820Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-22T13:53:23.820Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T13:53:23.820Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T13:53:23.820Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T13:53:23.820Z] [BOT] [STATS] Channel stats saved
[2026-01-22T13:53:25.838Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*