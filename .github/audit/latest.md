# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T06:51:34.202Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T06:51:00.242Z] ========================================
[2026-01-24T06:51:00.244Z] Discord Bot Execution Log
[2026-01-24T06:51:00.244Z] Environment: GitHub Actions
[2026-01-24T06:51:00.244Z] Node Version: v20.20.0
[2026-01-24T06:51:00.244Z] ========================================
[2026-01-24T06:51:00.244Z] Environment Variables Check:
[2026-01-24T06:51:00.244Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T06:51:00.245Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T06:51:00.245Z] 
Multi-Channel Configuration:
[2026-01-24T06:51:00.245Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.245Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.246Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.246Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T06:51:00.246Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T06:51:00.246Z] 
Data Files Check:
[2026-01-24T06:51:00.247Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T06:51:00.258Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1627847 bytes)
[2026-01-24T06:51:00.258Z] 
========================================
[2026-01-24T06:51:00.258Z] Starting Enhanced Discord Bot...
[2026-01-24T06:51:00.258Z] ========================================
[2026-01-24T06:51:00.811Z] [BOT] ✅ Loaded V2 database: 2774 jobs
[2026-01-24T06:51:01.608Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T06:51:01.609Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T06:51:01.609Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T06:51:01.720Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-24T06:51:01.721Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T06:51:01.725Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T06:51:01.725Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T06:51:01.725Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T06:51:01.726Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T06:51:01.726Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T06:51:01.727Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T06:51:01.728Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T06:51:01.729Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T06:51:01.729Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:51:01.747Z] [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T06:51:01.911Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T06:51:01.911Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T06:51:01.912Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T06:51:01.913Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-24T06:51:01.915Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T06:51:01.920Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-24T06:51:01.921Z] [BOT] ✅ Archiving complete: 7 archived, 2767 active
[2026-01-24T06:51:01.944Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
[2026-01-24T06:51:01.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:03.446Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T06:51:03.446Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T06:51:03.621Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T06:51:03.621Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T06:51:03.622Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:03.624Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:03.641Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:05.142Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:51:05.457Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T06:51:05.458Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:05.460Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:05.479Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:07.235Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T06:51:07.236Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T06:51:07.237Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:07.239Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:07.258Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
[2026-01-24T06:51:07.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:08.759Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T06:51:08.759Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T06:51:08.956Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-24T06:51:08.956Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T06:51:08.957Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T06:51:08.957Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:08.959Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:08.976Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:10.478Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T06:51:10.478Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T06:51:10.592Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T06:51:10.593Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:10.595Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:10.616Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:12.296Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T06:51:12.296Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T06:51:12.297Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T06:51:12.297Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:12.298Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:12.317Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:16.820Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T06:51:16.821Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T06:51:17.067Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T06:51:17.067Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:17.069Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:17.087Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:18.590Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T06:51:18.590Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T06:51:18.812Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T06:51:18.812Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T06:51:18.812Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T06:51:18.812Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:18.814Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:18.831Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:20.333Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T06:51:20.333Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T06:51:20.515Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T06:51:20.516Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T06:51:20.516Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T06:51:20.517Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:20.518Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:20.537Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
[2026-01-24T06:51:20.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:22.038Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T06:51:22.039Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T06:51:22.180Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T06:51:22.180Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T06:51:22.181Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T06:51:22.181Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:22.183Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:22.201Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
[2026-01-24T06:51:22.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:26.702Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T06:51:26.702Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T06:51:26.847Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T06:51:26.848Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T06:51:26.848Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-24T06:51:26.850Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-24T06:51:26.869Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T06:51:31.371Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T06:51:31.373Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T06:51:31.446Z] [BOT] 📂 Loaded 7731 existing routing entries
[2026-01-24T06:51:31.552Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T06:51:31.552Z] [BOT] New entries: 10
   Total entries: 7741
   Timestamp: 2026-01-24T06:51:31.504Z
[2026-01-24T06:51:31.553Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T06:51:31.553Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T06:51:31.553Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T06:51:31.553Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-24T06:51:31.553Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-24T06:51:31.553Z] [BOT] [STATS] Channel stats saved
[2026-01-24T06:51:33.572Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*