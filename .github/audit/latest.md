# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T18:14:03.702Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T18:13:22.843Z] ========================================
[2026-01-22T18:13:22.845Z] Discord Bot Execution Log
[2026-01-22T18:13:22.845Z] Environment: GitHub Actions
[2026-01-22T18:13:22.845Z] Node Version: v20.19.6
[2026-01-22T18:13:22.845Z] ========================================
[2026-01-22T18:13:22.845Z] Environment Variables Check:
[2026-01-22T18:13:22.845Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T18:13:22.845Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.845Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T18:13:22.845Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T18:13:22.845Z] 
Multi-Channel Configuration:
[2026-01-22T18:13:22.845Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T18:13:22.846Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T18:13:22.846Z] 
Data Files Check:
[2026-01-22T18:13:22.847Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T18:13:22.862Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1994878 bytes)
[2026-01-22T18:13:22.862Z] 
========================================
[2026-01-22T18:13:22.862Z] Starting Enhanced Discord Bot...
[2026-01-22T18:13:22.862Z] ========================================
[2026-01-22T18:13:23.349Z] [BOT] ✅ Loaded V2 database: 3427 jobs
[2026-01-22T18:13:24.022Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T18:13:24.023Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T18:13:24.023Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T18:13:24.177Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T18:13:24.182Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T18:13:24.182Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T18:13:24.182Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T18:13:24.183Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T18:13:24.183Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T18:13:24.186Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T18:13:24.187Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T18:13:24.187Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:13:24.204Z] [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T18:13:24.403Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T18:13:24.404Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T18:13:24.404Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:24.407Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:24.432Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:25.934Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:13:26.194Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T18:13:26.194Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:26.197Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:26.219Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:28.309Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T18:13:28.309Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T18:13:28.310Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:28.312Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:28.335Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:29.836Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:13:30.012Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T18:13:30.012Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T18:13:30.013Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:30.015Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:30.038Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:32.049Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T18:13:32.049Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T18:13:32.049Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:32.051Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:32.073Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:33.575Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:13:33.828Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T18:13:33.828Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T18:13:33.829Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:33.831Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:33.856Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:35.359Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T18:13:35.359Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:13:35.910Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T18:13:35.911Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T18:13:35.911Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:35.913Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:35.935Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:37.809Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T18:13:37.809Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T18:13:37.809Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:37.811Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:37.833Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:42.336Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T18:13:42.337Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T18:13:42.337Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T18:13:42.528Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T18:13:42.529Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T18:13:42.529Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:42.531Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:42.552Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:44.054Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:13:44.332Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T18:13:44.332Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:13:44.332Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:44.334Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:44.355Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:46.129Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T18:13:46.129Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T18:13:46.129Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:13:46.129Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:46.131Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:46.152Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:47.653Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T18:13:47.853Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T18:13:47.853Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T18:13:47.853Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:47.855Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:47.876Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:49.377Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:13:49.678Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T18:13:49.678Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T18:13:49.679Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:13:49.679Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:49.681Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:49.702Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:51.441Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T18:13:51.442Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:13:51.442Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:51.444Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:51.465Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:13:55.966Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T18:13:55.966Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T18:13:55.967Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T18:13:56.265Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T18:13:56.266Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T18:13:56.266Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-22T18:13:56.268Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-22T18:13:56.289Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:14:00.792Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T18:14:00.793Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T18:14:00.883Z] [BOT] 📂 Loaded 6711 existing routing entries
[2026-01-22T18:14:00.973Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6721
   Timestamp: 2026-01-22T18:14:00.947Z
[2026-01-22T18:14:00.974Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
[2026-01-22T18:14:00.974Z] [BOT] Skipped: 0
[2026-01-22T18:14:00.974Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
[2026-01-22T18:14:00.974Z] [BOT] Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T18:14:00.975Z] [BOT] [STATS] Channel stats saved
[2026-01-22T18:14:02.988Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*