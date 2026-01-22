# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T22:34:48.239Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T22:34:14.258Z] ========================================
[2026-01-22T22:34:14.260Z] Discord Bot Execution Log
[2026-01-22T22:34:14.260Z] Environment: GitHub Actions
[2026-01-22T22:34:14.260Z] Node Version: v20.19.6
[2026-01-22T22:34:14.260Z] ========================================
[2026-01-22T22:34:14.260Z] Environment Variables Check:
[2026-01-22T22:34:14.260Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T22:34:14.260Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.260Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T22:34:14.260Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T22:34:14.261Z] 
Multi-Channel Configuration:
[2026-01-22T22:34:14.261Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T22:34:14.261Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T22:34:14.261Z] 
Data Files Check:
[2026-01-22T22:34:14.262Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T22:34:14.275Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1930635 bytes)
[2026-01-22T22:34:14.275Z] 
========================================
[2026-01-22T22:34:14.275Z] Starting Enhanced Discord Bot...
[2026-01-22T22:34:14.275Z] ========================================
[2026-01-22T22:34:14.812Z] [BOT] ✅ Loaded V2 database: 3315 jobs
[2026-01-22T22:34:15.442Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T22:34:15.443Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T22:34:15.443Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T22:34:15.562Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T22:34:15.565Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T22:34:15.566Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T22:34:15.566Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T22:34:15.567Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T22:34:15.567Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T22:34:15.570Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T22:34:15.571Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T22:34:15.571Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:34:15.588Z] [BOT ERROR] (node:2434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T22:34:15.762Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T22:34:15.763Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T22:34:15.763Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:15.766Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:15.792Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:17.294Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:34:17.499Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T22:34:17.500Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T22:34:17.500Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T22:34:17.500Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:17.503Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:17.523Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:19.024Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T22:34:19.024Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:34:19.216Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T22:34:19.216Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T22:34:19.217Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T22:34:19.217Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:19.219Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:19.242Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:20.924Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T22:34:20.924Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:34:20.925Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T22:34:20.925Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:20.927Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:20.949Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:22.450Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T22:34:22.450Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T22:34:22.613Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T22:34:22.613Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T22:34:22.613Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T22:34:22.613Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:22.616Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:22.636Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:24.138Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T22:34:24.138Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T22:34:24.295Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:24.298Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:24.323Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:26.048Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T22:34:26.048Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:34:26.049Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T22:34:26.049Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:26.052Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:26.073Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:30.576Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T22:34:30.577Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T22:34:30.578Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T22:34:30.779Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T22:34:30.779Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T22:34:30.780Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:30.782Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:30.803Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:32.305Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T22:34:32.305Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T22:34:32.493Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T22:34:32.494Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T22:34:32.494Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:32.496Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:32.517Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:34.018Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T22:34:34.018Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T22:34:34.218Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T22:34:34.219Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T22:34:34.219Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:34.221Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:34.241Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:35.741Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T22:34:35.742Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T22:34:35.997Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T22:34:35.997Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T22:34:35.997Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:35.999Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:36.020Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:40.523Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T22:34:40.523Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T22:34:40.523Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T22:34:40.751Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T22:34:40.752Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T22:34:40.752Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:34:40.754Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-22T22:34:40.774Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:34:45.276Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T22:34:45.278Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T22:34:45.357Z] [BOT] 📂 Loaded 6831 existing routing entries
[2026-01-22T22:34:45.449Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T22:34:45.449Z] [BOT] Total entries: 6841
   Timestamp: 2026-01-22T22:34:45.419Z
[2026-01-22T22:34:45.449Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T22:34:45.449Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T22:34:45.450Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T22:34:45.450Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-22T22:34:45.450Z] [BOT] [STATS] Channel stats saved
[2026-01-22T22:34:47.468Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*