# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T21:00:18.782Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T20:59:38.680Z] ========================================
[2026-01-22T20:59:38.682Z] Discord Bot Execution Log
[2026-01-22T20:59:38.682Z] Environment: GitHub Actions
[2026-01-22T20:59:38.682Z] Node Version: v20.19.6
[2026-01-22T20:59:38.682Z] ========================================
[2026-01-22T20:59:38.682Z] Environment Variables Check:
[2026-01-22T20:59:38.682Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T20:59:38.682Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.682Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T20:59:38.682Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T20:59:38.682Z] 
Multi-Channel Configuration:
[2026-01-22T20:59:38.683Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T20:59:38.683Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T20:59:38.683Z] 
Data Files Check:
[2026-01-22T20:59:38.684Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T20:59:38.697Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1954825 bytes)
[2026-01-22T20:59:38.697Z] 
========================================
[2026-01-22T20:59:38.697Z] Starting Enhanced Discord Bot...
[2026-01-22T20:59:38.697Z] ========================================
[2026-01-22T20:59:39.261Z] [BOT] ✅ Loaded V2 database: 3357 jobs
[2026-01-22T20:59:39.934Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T20:59:39.934Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T20:59:39.934Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T20:59:40.055Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T20:59:40.059Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T20:59:40.060Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T20:59:40.061Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T20:59:40.061Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T20:59:40.062Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T20:59:40.065Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T20:59:40.065Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T20:59:40.065Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:59:40.083Z] [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T20:59:40.248Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T20:59:40.249Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T20:59:40.249Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:59:40.252Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T20:59:40.258Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 3353 active
[2026-01-22T20:59:40.286Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:41.787Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T20:59:41.787Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:59:42.023Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T20:59:42.023Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T20:59:42.023Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T20:59:42.024Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:42.026Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:42.048Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:43.734Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T20:59:43.735Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T20:59:43.735Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:43.737Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:43.762Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:45.263Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:59:45.607Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T20:59:45.608Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T20:59:45.608Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:45.610Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:45.633Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:47.514Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T20:59:47.515Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T20:59:47.515Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:47.517Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:47.539Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:49.040Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T20:59:49.040Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:59:49.288Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T20:59:49.289Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T20:59:49.289Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T20:59:49.289Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:49.292Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:49.316Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:50.817Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T20:59:50.817Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:59:51.057Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T20:59:51.057Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T20:59:51.058Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T20:59:51.058Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:51.060Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:51.084Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:52.817Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T20:59:52.817Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T20:59:52.817Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T20:59:52.817Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:52.819Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:52.842Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:57.343Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T20:59:57.345Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T20:59:57.345Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:59:57.538Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T20:59:57.539Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T20:59:57.539Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:57.541Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:57.562Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:59:59.065Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T20:59:59.065Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:59:59.235Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T20:59:59.235Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T20:59:59.236Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T20:59:59.236Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T20:59:59.238Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T20:59:59.258Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:00.933Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:00:00.933Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:00:00.934Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:00:00.936Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T21:00:00.956Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:02.457Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:00:02.457Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T21:00:02.744Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T21:00:02.744Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T21:00:02.744Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:00:02.746Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T21:00:02.768Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:04.268Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:00:04.621Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T21:00:04.622Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:00:04.622Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:00:04.624Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T21:00:04.645Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:06.404Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:00:06.405Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:00:06.405Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:00:06.407Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T21:00:06.427Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:10.929Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T21:00:10.930Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T21:00:10.930Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T21:00:11.234Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T21:00:11.234Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T21:00:11.234Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-22T21:00:11.236Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-22T21:00:11.257Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:00:15.761Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T21:00:15.762Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T21:00:15.844Z] [BOT] 📂 Loaded 6791 existing routing entries
[2026-01-22T21:00:15.940Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6801
[2026-01-22T21:00:15.940Z] [BOT] Timestamp: 2026-01-22T21:00:15.909Z
[2026-01-22T21:00:15.941Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T21:00:15.941Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T21:00:15.941Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T21:00:15.941Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T21:00:15.941Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T21:00:15.942Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T21:00:15.942Z] [BOT] [STATS] Channel stats saved
[2026-01-22T21:00:17.960Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*