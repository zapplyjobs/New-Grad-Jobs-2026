# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T06:28:34.769Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T06:27:37.529Z] ========================================
[2026-01-14T06:27:37.531Z] Discord Bot Execution Log
[2026-01-14T06:27:37.531Z] Environment: GitHub Actions
[2026-01-14T06:27:37.531Z] Node Version: v20.19.6
[2026-01-14T06:27:37.531Z] ========================================
[2026-01-14T06:27:37.531Z] Environment Variables Check:
[2026-01-14T06:27:37.531Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T06:27:37.531Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.531Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T06:27:37.532Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T06:27:37.532Z] 
Multi-Channel Configuration:
[2026-01-14T06:27:37.532Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T06:27:37.532Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T06:27:37.532Z] 
Data Files Check:
[2026-01-14T06:27:37.533Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108374 bytes)
[2026-01-14T06:27:37.538Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 663539 bytes)
[2026-01-14T06:27:37.538Z] 
========================================
[2026-01-14T06:27:37.538Z] Starting Enhanced Discord Bot...
[2026-01-14T06:27:37.538Z] ========================================
[2026-01-14T06:27:37.988Z] [BOT] ✅ Loaded V2 database: 1255 jobs
[2026-01-14T06:27:38.799Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T06:27:38.799Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T06:27:38.800Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T06:27:38.962Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mission Integration Engineer - Applied Computing - Starshield at SpaceX
[2026-01-14T06:27:38.965Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T06:27:38.965Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T06:27:38.965Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T06:27:38.966Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T06:27:38.966Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T06:27:38.971Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T06:27:38.971Z] [BOT] 📍 [ROUTING] "Mission Integration Engineer - Applied Computing - Starshield" @ ORG_afd623b1
[2026-01-14T06:27:38.971Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T06:27:38.988Z] [BOT ERROR] (node:3096) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T06:27:39.299Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
[2026-01-14T06:27:39.299Z] [BOT] ✅ Industry: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1
[2026-01-14T06:27:41.012Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #🦢・los-angeles
[2026-01-14T06:27:41.013Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-14T06:27:42.513Z] [BOT] 💾 Marked as posted: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 (instance #1)
💾 BEFORE ARCHIVING: 1256 jobs in database
[2026-01-14T06:27:42.515Z] [BOT] ✅ No jobs to archive (all 1256 jobs within 7-day window)
[2026-01-14T06:27:42.523Z] [BOT] 💾 Saved posted_jobs.json: 1256 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:27:42.523Z] [BOT] 📍 [ROUTING] "Corporate Communications Manager " @ anthropic
[2026-01-14T06:27:42.524Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T06:27:42.791Z] [BOT] ✅ Created forum post: 🏢 Corporate Communications Manager  @ anthropic in #🤖・ai-jobs
[2026-01-14T06:27:42.791Z] [BOT] ✅ Industry: Corporate Communications Manager  @ anthropic
[2026-01-14T06:27:44.590Z] [BOT] ✅ Created forum post: 🏢 Corporate Communications Manager  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:27:46.092Z] [BOT] 💾 Marked as posted: Corporate Communications Manager  @ anthropic (instance #1)
[2026-01-14T06:27:46.092Z] [BOT] 💾 BEFORE ARCHIVING: 1257 jobs in database
[2026-01-14T06:27:46.093Z] [BOT] ✅ No jobs to archive (all 1257 jobs within 7-day window)
[2026-01-14T06:27:46.101Z] [BOT] 💾 Saved posted_jobs.json: 1257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:27:49.102Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T06:27:49.103Z] [BOT] 📍 [ROUTING] "Security Engineer, Operating Systems" @ anthropic
[2026-01-14T06:27:49.103Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:27:49.319Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Operating Systems @ anthropic in #💻・tech-jobs
  ✅ Industry: Security Engineer, Operating Systems @ anthropic
[2026-01-14T06:27:51.043Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Operating Systems @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:27:52.545Z] [BOT] 💾 Marked as posted: Security Engineer, Operating Systems @ anthropic (instance #1)
[2026-01-14T06:27:52.545Z] [BOT] 💾 BEFORE ARCHIVING: 1258 jobs in database
[2026-01-14T06:27:52.546Z] [BOT] ✅ No jobs to archive (all 1258 jobs within 7-day window)
[2026-01-14T06:27:52.556Z] [BOT] 💾 Saved posted_jobs.json: 1258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:27:52.556Z] [BOT] 📍 [ROUTING] "Systems Integrity Security Architect" @ anthropic
   Category: TECH (matched: "security")
[2026-01-14T06:27:52.556Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:27:52.740Z] [BOT] ✅ Created forum post: 🏢 Systems Integrity Security Architect @ anthropic in #💻・tech-jobs
[2026-01-14T06:27:52.740Z] [BOT] ✅ Industry: Systems Integrity Security Architect @ anthropic
[2026-01-14T06:27:54.464Z] [BOT] ✅ Created forum post: 🏢 Systems Integrity Security Architect @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:27:55.965Z] [BOT] 💾 Marked as posted: Systems Integrity Security Architect @ anthropic (instance #1)
[2026-01-14T06:27:55.965Z] [BOT] 💾 BEFORE ARCHIVING: 1259 jobs in database
[2026-01-14T06:27:55.967Z] [BOT] ✅ No jobs to archive (all 1259 jobs within 7-day window)
[2026-01-14T06:27:55.976Z] [BOT] 💾 Saved posted_jobs.json: 1259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:27:55.976Z] [BOT] 📍 [ROUTING] "Software Engineer - Performance and Observability" @ ORG_cc7e1d22
[2026-01-14T06:27:55.977Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:27:56.201Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Performance and Observability @ ORG_cc7e1d22
[2026-01-14T06:27:57.917Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:27:59.418Z] [BOT] 💾 Marked as posted: Software Engineer - Performance and Observability @ ORG_cc7e1d22 (instance #1)
[2026-01-14T06:27:59.418Z] [BOT] 💾 BEFORE ARCHIVING: 1260 jobs in database
[2026-01-14T06:27:59.419Z] [BOT] ✅ No jobs to archive (all 1260 jobs within 7-day window)
[2026-01-14T06:27:59.428Z] [BOT] 💾 Saved posted_jobs.json: 1260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:27:59.428Z] [BOT] 📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
[2026-01-14T06:27:59.429Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:27:59.842Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・tech-jobs
  ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2026-01-14T06:28:01.558Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:28:03.059Z] [BOT] 💾 Marked as posted: Condition Monitoring Engineer @ ORG_1640be31 Insight (instance #1)
💾 BEFORE ARCHIVING: 1261 jobs in database
[2026-01-14T06:28:03.059Z] [BOT] ✅ No jobs to archive (all 1261 jobs within 7-day window)
[2026-01-14T06:28:03.069Z] [BOT] 💾 Saved posted_jobs.json: 1261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:28:06.070Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T06:28:06.070Z] [BOT] 📍 [ROUTING] "Linux System Administrator" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-14T06:28:06.071Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T06:28:06.301Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
  ✅ Industry: Linux System Administrator @ ORG_b344d80e Boeing Company
[2026-01-14T06:28:07.990Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-14T06:28:09.492Z] [BOT] 💾 Marked as posted: Linux System Administrator @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-14T06:28:09.492Z] [BOT] 💾 BEFORE ARCHIVING: 1262 jobs in database
[2026-01-14T06:28:09.493Z] [BOT] ✅ No jobs to archive (all 1262 jobs within 7-day window)
[2026-01-14T06:28:09.501Z] [BOT] 💾 Saved posted_jobs.json: 1262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:28:09.502Z] [BOT] 📍 [ROUTING] "Business Intelligence & Analytics Senior Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-14T06:28:09.502Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T06:28:11.593Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #📈・JID_fb739488
[2026-01-14T06:28:11.594Z] [BOT] ✅ Industry: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago
[2026-01-14T06:28:13.310Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-14T06:28:13.311Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T06:28:14.812Z] [BOT] 💾 Marked as posted: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago (instance #1)
[2026-01-14T06:28:14.812Z] [BOT] 💾 BEFORE ARCHIVING: 1263 jobs in database
[2026-01-14T06:28:14.813Z] [BOT] ✅ No jobs to archive (all 1263 jobs within 7-day window)
[2026-01-14T06:28:14.824Z] [BOT] 💾 Saved posted_jobs.json: 1263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:28:17.825Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-14T06:28:17.825Z] [BOT] 📍 [ROUTING] "Technical Recruiter" @ figma
[2026-01-14T06:28:17.825Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T06:28:18.156Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter @ figma in #📁・JID_e938df7b
  ✅ Industry: Technical Recruiter @ figma
[2026-01-14T06:28:20.055Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:28:21.557Z] [BOT] 💾 Marked as posted: Technical Recruiter @ figma (instance #1)
[2026-01-14T06:28:21.557Z] [BOT] 💾 BEFORE ARCHIVING: 1264 jobs in database
[2026-01-14T06:28:21.558Z] [BOT] ✅ No jobs to archive (all 1264 jobs within 7-day window)
[2026-01-14T06:28:21.568Z] [BOT] 💾 Saved posted_jobs.json: 1264 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:28:24.569Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T06:28:24.569Z] [BOT] 📍 [ROUTING] "Research Technician" @ ORG_540647baing
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T06:28:24.815Z] [BOT] ✅ Created forum post: 🏢 Research Technician @ ORG_540647baing in #🩺・healthcare-jobs
  ✅ Industry: Research Technician @ ORG_540647baing
[2026-01-14T06:28:26.514Z] [BOT] ✅ Created forum post: 🏢 Research Technician @ ORG_540647baing in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T06:28:28.015Z] [BOT] 💾 Marked as posted: Research Technician @ ORG_540647baing (instance #1)
[2026-01-14T06:28:28.015Z] [BOT] 💾 BEFORE ARCHIVING: 1265 jobs in database
[2026-01-14T06:28:28.017Z] [BOT] ✅ No jobs to archive (all 1265 jobs within 7-day window)
[2026-01-14T06:28:28.027Z] [BOT] 💾 Saved posted_jobs.json: 1265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:28:31.026Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_1c54387c (posted within 7 days)
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_9f32d073 (posted within 7 days)
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_1dcfc3bd (posted within 7 days)
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_3e21d42d-administrator_jr2025487641 (posted within 7 days)
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_d7a00349-analyst_jr32249 (posted within 7 days)
[2026-01-14T06:28:31.027Z] [BOT] ⏭️  Skipping duplicate: JID_b14d77b9 (posted within 7 days)
[2026-01-14T06:28:31.028Z] [BOT] ⏭️  Skipping duplicate: JID_479f288f (posted within 7 days)
[2026-01-14T06:28:31.028Z] [BOT] ⏭️  Skipping duplicate: JID_c4b3a057 (posted within 7 days)
⏭️  Skipping duplicate: JID_5a465ac4 (posted within 7 days)
⏭️  Skipping duplicate: JID_bd0a79e9 (posted within 7 days)
[2026-01-14T06:28:31.180Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T06:28:31.348Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T06:28:31.348Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T06:28:31.405Z] [BOT] 📂 Loaded 3375 existing routing entries
[2026-01-14T06:28:31.462Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3385
   Timestamp: 2026-01-14T06:28:31.450Z
[2026-01-14T06:28:31.462Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T06:28:31.462Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T06:28:31.463Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T06:28:31.463Z] [BOT] Total posts: 20
   Channels used: 10
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-14T06:28:31.463Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🦢・los-angeles: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-14T06:28:31.463Z] [BOT] [STATS] Channel stats saved
[2026-01-14T06:28:33.480Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3096) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*