# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T12:33:21.177Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T12:32:39.208Z] ========================================
[2026-01-22T12:32:39.210Z] Discord Bot Execution Log
[2026-01-22T12:32:39.210Z] Environment: GitHub Actions
[2026-01-22T12:32:39.210Z] Node Version: v20.19.6
[2026-01-22T12:32:39.210Z] ========================================
[2026-01-22T12:32:39.210Z] Environment Variables Check:
[2026-01-22T12:32:39.210Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T12:32:39.210Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.210Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T12:32:39.210Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T12:32:39.210Z] 
Multi-Channel Configuration:
[2026-01-22T12:32:39.211Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T12:32:39.211Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T12:32:39.211Z] 
Data Files Check:
[2026-01-22T12:32:39.212Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T12:32:39.226Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T12:32:39.226Z] 
========================================
[2026-01-22T12:32:39.226Z] Starting Enhanced Discord Bot...
[2026-01-22T12:32:39.226Z] ========================================
[2026-01-22T12:32:39.773Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T12:32:40.417Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T12:32:40.417Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T12:32:40.417Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T12:32:40.534Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T12:32:40.538Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T12:32:40.538Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T12:32:40.538Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T12:32:40.539Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T12:32:40.539Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T12:32:40.542Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T12:32:40.543Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T12:32:40.543Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:32:40.561Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T12:32:42.171Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T12:32:42.172Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T12:32:42.172Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:42.175Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:42.205Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:43.707Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:32:43.903Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T12:32:43.903Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T12:32:43.904Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T12:32:43.904Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:43.906Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:43.929Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:45.667Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:32:45.668Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T12:32:45.668Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:45.671Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:45.694Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:47.196Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T12:32:47.196Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T12:32:47.511Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T12:32:47.511Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T12:32:47.512Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:47.514Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:47.539Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:49.464Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T12:32:49.465Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T12:32:49.465Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:49.467Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:49.491Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:32:49.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:50.993Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:32:51.227Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T12:32:51.227Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T12:32:51.227Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:51.230Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:51.254Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:52.756Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T12:32:52.756Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:32:53.013Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T12:32:53.013Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T12:32:53.013Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T12:32:53.014Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:53.016Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:53.038Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:54.740Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T12:32:54.741Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T12:32:54.741Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:54.743Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:54.764Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:32:59.266Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T12:32:59.267Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T12:32:59.267Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:32:59.456Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T12:32:59.456Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T12:32:59.456Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T12:32:59.456Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:32:59.458Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:32:59.481Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:32:59.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:00.984Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:33:01.268Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T12:33:01.268Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T12:33:01.268Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:33:01.268Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:01.271Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:01.291Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:33:01.291Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:03.180Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:33:03.181Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:33:03.181Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:03.183Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:03.203Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:04.705Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T12:33:04.705Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T12:33:04.951Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T12:33:04.951Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T12:33:04.952Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T12:33:04.952Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:04.954Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:04.975Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:06.477Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:33:06.722Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T12:33:06.722Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:33:06.722Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:06.725Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:06.745Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:08.440Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T12:33:08.440Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T12:33:08.440Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:33:08.440Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:08.442Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:08.462Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:12.964Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T12:33:12.964Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T12:33:12.964Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T12:33:13.173Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T12:33:13.173Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T12:33:13.173Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:33:13.175Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:33:13.196Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:33:17.698Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T12:33:17.700Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T12:33:17.781Z] [BOT] 📂 Loaded 6551 existing routing entries
[2026-01-22T12:33:17.876Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T12:33:17.876Z] [BOT] Total entries: 6561
   Timestamp: 2026-01-22T12:33:17.844Z
[2026-01-22T12:33:17.876Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T12:33:17.877Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T12:33:17.877Z] [BOT] [STATS] Channel stats saved
[2026-01-22T12:33:19.895Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*