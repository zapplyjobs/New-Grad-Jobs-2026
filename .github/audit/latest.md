# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T22:46:13.712Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T22:45:38.345Z] ========================================
[2026-01-22T22:45:38.347Z] Discord Bot Execution Log
[2026-01-22T22:45:38.347Z] Environment: GitHub Actions
[2026-01-22T22:45:38.347Z] Node Version: v20.20.0
[2026-01-22T22:45:38.347Z] ========================================
[2026-01-22T22:45:38.347Z] Environment Variables Check:
[2026-01-22T22:45:38.347Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T22:45:38.347Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.347Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T22:45:38.348Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T22:45:38.348Z] 
Multi-Channel Configuration:
[2026-01-22T22:45:38.348Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T22:45:38.348Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T22:45:38.348Z] 
Data Files Check:
[2026-01-22T22:45:38.349Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T22:45:38.362Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1930635 bytes)
[2026-01-22T22:45:38.362Z] 
========================================
[2026-01-22T22:45:38.362Z] Starting Enhanced Discord Bot...
[2026-01-22T22:45:38.362Z] ========================================
[2026-01-22T22:45:38.907Z] [BOT] ✅ Loaded V2 database: 3315 jobs
[2026-01-22T22:45:39.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T22:45:39.545Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T22:45:39.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T22:45:39.683Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T22:45:39.688Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T22:45:39.688Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T22:45:39.689Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T22:45:39.690Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T22:45:39.690Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T22:45:39.693Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T22:45:39.694Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T22:45:39.694Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:45:39.710Z] [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T22:45:39.968Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T22:45:39.968Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T22:45:39.969Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T22:45:39.969Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-22T22:45:39.972Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T22:45:39.977Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T22:45:39.977Z] [BOT] ✅ Archiving complete: 10 archived, 3305 active
[2026-01-22T22:45:40.002Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
[2026-01-22T22:45:40.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:41.505Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T22:45:41.505Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T22:45:41.792Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T22:45:41.792Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T22:45:41.792Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T22:45:41.792Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:41.795Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:41.814Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:43.315Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T22:45:43.315Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:45:44.191Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T22:45:44.191Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T22:45:44.192Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T22:45:44.192Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:44.195Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:44.216Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:45.875Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T22:45:45.876Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:45:45.876Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:45.878Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:45.900Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:47.399Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T22:45:47.399Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T22:45:47.551Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T22:45:47.551Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T22:45:47.551Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:47.553Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:47.574Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:49.075Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T22:45:49.075Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:45:49.339Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T22:45:49.339Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T22:45:49.339Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:49.342Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:49.364Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:51.131Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T22:45:51.131Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:45:51.132Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T22:45:51.132Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:51.134Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:51.155Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
[2026-01-22T22:45:51.155Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:55.658Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T22:45:55.659Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T22:45:55.876Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T22:45:55.876Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T22:45:55.877Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:55.879Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:55.900Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:57.402Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T22:45:57.633Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T22:45:57.633Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T22:45:57.634Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:57.635Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:57.656Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:45:59.156Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T22:45:59.156Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T22:45:59.548Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T22:45:59.549Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T22:45:59.549Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:45:59.551Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:45:59.571Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:46:01.071Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T22:46:01.071Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T22:46:01.309Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T22:46:01.310Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T22:46:01.310Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:46:01.312Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:46:01.332Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:46:05.834Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T22:46:05.834Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T22:46:05.834Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T22:46:06.198Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T22:46:06.199Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T22:46:06.199Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:46:06.201Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-22T22:46:06.220Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
[2026-01-22T22:46:06.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T22:46:10.723Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T22:46:10.725Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T22:46:10.803Z] [BOT] 📂 Loaded 6841 existing routing entries
[2026-01-22T22:46:10.893Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T22:46:10.893Z] [BOT] Total entries: 6851
   Timestamp: 2026-01-22T22:46:10.863Z
[2026-01-22T22:46:10.894Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T22:46:10.894Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T22:46:10.894Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T22:46:10.894Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T22:46:10.894Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-22T22:46:10.894Z] [BOT] [STATS] Channel stats saved
[2026-01-22T22:46:12.912Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*