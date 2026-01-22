# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T05:05:54.692Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T05:05:15.814Z] ========================================
[2026-01-22T05:05:15.816Z] Discord Bot Execution Log
[2026-01-22T05:05:15.816Z] Environment: GitHub Actions
[2026-01-22T05:05:15.816Z] Node Version: v20.19.6
[2026-01-22T05:05:15.816Z] ========================================
[2026-01-22T05:05:15.816Z] Environment Variables Check:
[2026-01-22T05:05:15.816Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T05:05:15.816Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T05:05:15.817Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T05:05:15.817Z] 
Multi-Channel Configuration:
[2026-01-22T05:05:15.817Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.817Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T05:05:15.818Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T05:05:15.818Z] 
Data Files Check:
[2026-01-22T05:05:15.818Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T05:05:15.832Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2114087 bytes)
[2026-01-22T05:05:15.832Z] 
========================================
[2026-01-22T05:05:15.833Z] Starting Enhanced Discord Bot...
[2026-01-22T05:05:15.833Z] ========================================
[2026-01-22T05:05:16.378Z] [BOT] ✅ Loaded V2 database: 3635 jobs
[2026-01-22T05:05:17.038Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T05:05:17.038Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T05:05:17.038Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T05:05:17.152Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T05:05:17.158Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T05:05:17.158Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T05:05:17.158Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T05:05:17.159Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T05:05:17.159Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T05:05:17.162Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T05:05:17.163Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T05:05:17.163Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:05:17.180Z] [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T05:05:17.436Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T05:05:17.436Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T05:05:17.437Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T05:05:17.437Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T05:05:17.440Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T05:05:17.445Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-22T05:05:17.445Z] [BOT] ✅ Archiving complete: 20 archived, 3615 active
[2026-01-22T05:05:17.469Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:18.970Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:05:19.123Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T05:05:19.123Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T05:05:19.124Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T05:05:19.124Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:19.127Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:19.150Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:20.813Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:05:20.813Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T05:05:20.813Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:20.816Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:20.840Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:22.341Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:05:22.462Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T05:05:22.462Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T05:05:22.462Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T05:05:22.463Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:22.465Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:22.489Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:24.216Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T05:05:24.217Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T05:05:24.217Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:24.219Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:24.239Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:25.741Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T05:05:25.742Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:05:25.919Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T05:05:25.919Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T05:05:25.919Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T05:05:25.919Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:25.922Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:25.946Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:27.448Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T05:05:27.449Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:05:27.681Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T05:05:27.681Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T05:05:27.682Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T05:05:27.682Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:27.685Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:27.706Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:29.410Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T05:05:29.410Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T05:05:29.410Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:29.413Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:29.438Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:33.940Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T05:05:33.942Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:05:34.094Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T05:05:34.095Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T05:05:34.095Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:34.098Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:34.120Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:35.622Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:05:35.767Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T05:05:35.767Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:05:35.768Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:35.770Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:35.794Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:37.431Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T05:05:37.431Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T05:05:37.432Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:05:37.432Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:37.434Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:37.456Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:38.957Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T05:05:38.958Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T05:05:39.140Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T05:05:39.140Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T05:05:39.140Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:39.143Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:39.167Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:40.668Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T05:05:40.668Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T05:05:40.915Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T05:05:40.915Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:05:40.915Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:40.918Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:40.939Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:42.585Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:05:42.586Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:05:42.586Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:42.589Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:42.610Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:47.112Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T05:05:47.113Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T05:05:47.113Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T05:05:47.349Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T05:05:47.350Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T05:05:47.350Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:05:47.352Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-22T05:05:47.374Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:05:51.876Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T05:05:51.878Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T05:05:51.945Z] [BOT] 📂 Loaded 6301 existing routing entries
[2026-01-22T05:05:52.034Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T05:05:52.035Z] [BOT] Total entries: 6311
   Timestamp: 2026-01-22T05:05:52.002Z
[2026-01-22T05:05:52.035Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T05:05:52.035Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T05:05:52.036Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T05:05:52.036Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T05:05:52.036Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T05:05:52.036Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T05:05:52.036Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T05:05:52.036Z] [BOT] [STATS] Channel stats saved
[2026-01-22T05:05:54.056Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*