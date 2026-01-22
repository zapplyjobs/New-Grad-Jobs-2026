# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T04:42:08.693Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T04:41:29.740Z] ========================================
[2026-01-22T04:41:29.742Z] Discord Bot Execution Log
[2026-01-22T04:41:29.742Z] Environment: GitHub Actions
[2026-01-22T04:41:29.742Z] Node Version: v20.19.6
[2026-01-22T04:41:29.742Z] ========================================
[2026-01-22T04:41:29.742Z] Environment Variables Check:
[2026-01-22T04:41:29.742Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T04:41:29.743Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T04:41:29.743Z] 
Multi-Channel Configuration:
[2026-01-22T04:41:29.743Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.743Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.744Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.744Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T04:41:29.744Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T04:41:29.744Z] 
Data Files Check:
[2026-01-22T04:41:29.745Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T04:41:29.758Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2119093 bytes)
[2026-01-22T04:41:29.758Z] 
========================================
[2026-01-22T04:41:29.758Z] Starting Enhanced Discord Bot...
[2026-01-22T04:41:29.758Z] ========================================
[2026-01-22T04:41:30.278Z] [BOT] ✅ Loaded V2 database: 3645 jobs
[2026-01-22T04:41:30.797Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T04:41:30.797Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T04:41:30.798Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T04:41:30.912Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T04:41:30.916Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T04:41:30.916Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T04:41:30.917Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T04:41:30.917Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T04:41:30.918Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T04:41:30.921Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T04:41:30.921Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T04:41:30.921Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:41:30.938Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T04:41:31.202Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T04:41:31.202Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T04:41:31.202Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T04:41:31.203Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:41:31.205Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T04:41:31.211Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T04:41:31.211Z] [BOT] ✅ Archiving complete: 10 archived, 3635 active
[2026-01-22T04:41:31.247Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
[2026-01-22T04:41:31.248Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:32.750Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T04:41:32.750Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T04:41:33.034Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T04:41:33.035Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T04:41:33.035Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:33.037Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:33.058Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:34.755Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T04:41:34.756Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T04:41:34.756Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:34.758Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:34.782Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:36.285Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:41:36.420Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T04:41:36.421Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T04:41:36.421Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T04:41:36.422Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:36.424Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:36.447Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:38.136Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T04:41:38.137Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T04:41:38.137Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:38.139Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:38.160Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:39.661Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T04:41:39.662Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:41:39.845Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T04:41:39.845Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T04:41:39.845Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:39.848Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:39.873Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:41.375Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T04:41:41.375Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T04:41:41.576Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T04:41:41.576Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T04:41:41.577Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T04:41:41.577Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:41.579Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:41.602Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:43.219Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T04:41:43.220Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T04:41:43.220Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:43.223Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:43.249Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:47.751Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T04:41:47.752Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:41:47.914Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T04:41:47.914Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T04:41:47.915Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:47.917Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:47.939Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:49.441Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:41:49.614Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T04:41:49.615Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T04:41:49.615Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:49.618Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:49.641Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:51.338Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T04:41:51.338Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T04:41:51.338Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:51.340Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:51.362Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:52.863Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:41:52.863Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T04:41:53.150Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T04:41:53.150Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T04:41:53.151Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T04:41:53.151Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:53.153Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:53.177Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:54.678Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T04:41:54.679Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T04:41:54.901Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T04:41:54.901Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T04:41:54.901Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:54.903Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:54.925Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:41:56.600Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T04:41:56.600Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T04:41:56.601Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T04:41:56.601Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:41:56.603Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:41:56.624Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
[2026-01-22T04:41:56.624Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T04:42:01.125Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T04:42:01.126Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T04:42:01.126Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T04:42:01.348Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T04:42:01.348Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T04:42:01.348Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-22T04:42:01.351Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-22T04:42:01.373Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
[2026-01-22T04:42:01.374Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T04:42:05.875Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T04:42:05.877Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T04:42:05.943Z] [BOT] 📂 Loaded 6291 existing routing entries
[2026-01-22T04:42:06.031Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T04:42:06.032Z] [BOT] Total entries: 6301
   Timestamp: 2026-01-22T04:42:05.999Z
[2026-01-22T04:42:06.033Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T04:42:06.033Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T04:42:06.033Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T04:42:06.033Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T04:42:06.033Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T04:42:06.033Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T04:42:06.033Z] [BOT] [STATS] Channel stats saved
[2026-01-22T04:42:08.054Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*