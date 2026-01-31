# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T17:32:21.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T17:31:51.693Z] ========================================
[2026-01-31T17:31:51.695Z] Discord Bot Execution Log
[2026-01-31T17:31:51.695Z] Environment: GitHub Actions
[2026-01-31T17:31:51.695Z] Node Version: v20.20.0
[2026-01-31T17:31:51.695Z] ========================================
[2026-01-31T17:31:51.695Z] Environment Variables Check:
[2026-01-31T17:31:51.695Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T17:31:51.695Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.695Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T17:31:51.696Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T17:31:51.696Z] 
Multi-Channel Configuration:
[2026-01-31T17:31:51.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T17:31:51.696Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T17:31:51.697Z] 
Data Files Check:
[2026-01-31T17:31:51.697Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T17:31:51.735Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7909239 bytes)
[2026-01-31T17:31:51.735Z] 
========================================
[2026-01-31T17:31:51.735Z] Starting Enhanced Discord Bot...
[2026-01-31T17:31:51.735Z] ========================================
[2026-01-31T17:31:52.283Z] [BOT] ✅ Loaded V2 database: 1287 jobs
[2026-01-31T17:31:53.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T17:31:53.026Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T17:31:53.026Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T17:31:53.149Z] [BOT] ✅ Loaded pending queue: 2946 total (1629 pending, 50 enriched, 1267 posted)
[2026-01-31T17:31:53.150Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:31:53.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T17:31:53.151Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T17:31:53.151Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:31:53.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T17:31:53.152Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T17:31:53.152Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T17:31:53.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T17:31:53.152Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T17:31:53.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T17:31:53.152Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T17:31:53.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T17:31:53.153Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T17:31:53.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T17:31:53.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T17:31:53.154Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T17:31:53.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T17:31:53.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T17:31:53.154Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T17:31:53.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T17:31:53.155Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T17:31:53.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T17:31:53.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T17:31:53.155Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T17:31:53.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T17:31:53.156Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T17:31:53.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T17:31:53.166Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T17:31:53.167Z] [BOT] 🚫 Skipping blacklisted job: Senior Machine Learning Engineer at spotify
[2026-01-31T17:31:53.281Z] [BOT] ✅ Loaded pending queue: 2946 total (1629 pending, 50 enriched, 1267 posted)
[2026-01-31T17:31:53.471Z] [BOT] ✅ Saved pending queue: 2945 total (1629 pending, 49 enriched, 1267 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T17:31:53.471Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T17:31:53.471Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T17:31:53.472Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T17:31:53.473Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T17:31:53.476Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-31T17:31:53.477Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_fee50aac
[2026-01-31T17:31:53.477Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:31:53.495Z] [BOT ERROR] (node:2995) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T17:31:53.734Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_fee50aac in #💻・tech-jobs
[2026-01-31T17:31:53.734Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_fee50aac
[2026-01-31T17:31:53.735Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_fee50aac → category channel (1 total channels)
[2026-01-31T17:31:53.735Z] [BOT] 💾 BEFORE MERGE: 1288 jobs in memory (cached)
[2026-01-31T17:31:53.762Z] [BOT] ✅ Loaded V2 database: 1287 jobs
💾 DISK STATE: 1287 jobs on disk
[2026-01-31T17:31:53.763Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1288
[2026-01-31T17:31:53.766Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:31:53.766Z] [BOT] 💾 AFTER MERGE: 1288 jobs (merged disk + memory)
[2026-01-31T17:31:53.767Z] [BOT] ✅ No jobs to archive (all 1288 jobs within 7-day window)
[2026-01-31T17:31:53.846Z] [BOT] 💾 Saved posted_jobs.json: 1288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:31:55.348Z] [BOT] 📍 [ROUTING] "Junior Software Engineer - DST" @ ORG_3aea8160
[2026-01-31T17:31:55.349Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:31:55.553Z] [BOT] ✅ Posted message: Junior Software Engineer - DST @ ORG_3aea8160 in #💻・tech-jobs
[2026-01-31T17:31:55.553Z] [BOT] ✅ Industry: Junior Software Engineer - DST @ ORG_3aea8160
[2026-01-31T17:31:55.554Z] [BOT] 💾 Added channel posting: Junior Software Engineer - DST @ ORG_3aea8160 → category channel (1 total channels)
[2026-01-31T17:31:55.554Z] [BOT] 💾 BEFORE MERGE: 1289 jobs in memory (cached)
[2026-01-31T17:31:55.576Z] [BOT] ✅ Loaded V2 database: 1288 jobs
[2026-01-31T17:31:55.576Z] [BOT] 💾 DISK STATE: 1288 jobs on disk
[2026-01-31T17:31:55.576Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1289
[2026-01-31T17:31:55.579Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:31:55.579Z] [BOT] 💾 AFTER MERGE: 1289 jobs (merged disk + memory)
[2026-01-31T17:31:55.580Z] [BOT] ✅ No jobs to archive (all 1289 jobs within 7-day window)
[2026-01-31T17:31:55.655Z] [BOT] 💾 Saved posted_jobs.json: 1289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:31:57.157Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1" @ ORG_b3910ba4 financial
   Category: TECH (matched: "software")
[2026-01-31T17:31:57.157Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:31:57.273Z] [BOT] ✅ Posted message: Software Development Engineer 1 @ ORG_b3910ba4 financial in #💻・tech-jobs
[2026-01-31T17:31:57.274Z] [BOT] ✅ Industry: Software Development Engineer 1 @ ORG_b3910ba4 financial
[2026-01-31T17:31:57.274Z] [BOT] 💾 Added channel posting: Software Development Engineer 1 @ ORG_b3910ba4 financial → category channel (1 total channels)
[2026-01-31T17:31:57.274Z] [BOT] 💾 BEFORE MERGE: 1290 jobs in memory (cached)
[2026-01-31T17:31:57.297Z] [BOT] ✅ Loaded V2 database: 1289 jobs
💾 DISK STATE: 1289 jobs on disk
[2026-01-31T17:31:57.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1290
[2026-01-31T17:31:57.300Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1290 jobs (merged disk + memory)
[2026-01-31T17:31:57.301Z] [BOT] ✅ No jobs to archive (all 1290 jobs within 7-day window)
[2026-01-31T17:31:57.376Z] [BOT] 💾 Saved posted_jobs.json: 1290 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:31:58.878Z] [BOT] 📍 [ROUTING] "Graduate Developer Programme" @ ORG_966cc52a Securities
[2026-01-31T17:31:58.878Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:31:59.063Z] [BOT] ✅ Posted message: Graduate Developer Programme @ ORG_966cc52a Securities in #💻・tech-jobs
[2026-01-31T17:31:59.063Z] [BOT] ✅ Industry: Graduate Developer Programme @ ORG_966cc52a Securities
[2026-01-31T17:31:59.064Z] [BOT] 💾 Added channel posting: Graduate Developer Programme @ ORG_966cc52a Securities → category channel (1 total channels)
💾 BEFORE MERGE: 1291 jobs in memory (cached)
[2026-01-31T17:31:59.087Z] [BOT] ✅ Loaded V2 database: 1290 jobs
💾 DISK STATE: 1290 jobs on disk
[2026-01-31T17:31:59.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1291
[2026-01-31T17:31:59.090Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:31:59.090Z] [BOT] 💾 AFTER MERGE: 1291 jobs (merged disk + memory)
[2026-01-31T17:31:59.091Z] [BOT] ✅ No jobs to archive (all 1291 jobs within 7-day window)
[2026-01-31T17:31:59.160Z] [BOT] 💾 Saved posted_jobs.json: 1291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:00.661Z] [BOT] 📍 [ROUTING] "Software Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:32:00.944Z] [BOT] ✅ Posted message: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T17:32:00.944Z] [BOT] 💾 Added channel posting: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-31T17:32:00.944Z] [BOT] 💾 BEFORE MERGE: 1292 jobs in memory (cached)
[2026-01-31T17:32:00.975Z] [BOT] ✅ Loaded V2 database: 1291 jobs
💾 DISK STATE: 1291 jobs on disk
[2026-01-31T17:32:00.975Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1292
[2026-01-31T17:32:00.978Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1292 jobs (merged disk + memory)
[2026-01-31T17:32:00.979Z] [BOT] ✅ No jobs to archive (all 1292 jobs within 7-day window)
[2026-01-31T17:32:01.053Z] [BOT] 💾 Saved posted_jobs.json: 1292 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:02.554Z] [BOT] 📍 [ROUTING] "AI/ML Software Engineer" @ iTradeNetwork
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:32:02.893Z] [BOT] ✅ Posted message: AI/ML Software Engineer @ iTradeNetwork in #💻・tech-jobs
[2026-01-31T17:32:02.893Z] [BOT] ✅ Industry: AI/ML Software Engineer @ iTradeNetwork
[2026-01-31T17:32:02.893Z] [BOT] 💾 Added channel posting: AI/ML Software Engineer @ iTradeNetwork → category channel (1 total channels)
💾 BEFORE MERGE: 1293 jobs in memory (cached)
[2026-01-31T17:32:02.916Z] [BOT] ✅ Loaded V2 database: 1292 jobs
💾 DISK STATE: 1292 jobs on disk
[2026-01-31T17:32:02.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1293
[2026-01-31T17:32:02.918Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1293 jobs (merged disk + memory)
[2026-01-31T17:32:02.919Z] [BOT] ✅ No jobs to archive (all 1293 jobs within 7-day window)
[2026-01-31T17:32:03.010Z] [BOT] 💾 Saved posted_jobs.json: 1293 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:04.509Z] [BOT] 📍 [ROUTING] "Sales Pricing Analyst" @ ORG_9b9b6e44
[2026-01-31T17:32:04.509Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:32:04.778Z] [BOT] ✅ Posted message: Sales Pricing Analyst @ ORG_9b9b6e44 in #💻・tech-jobs
[2026-01-31T17:32:04.778Z] [BOT] ✅ Industry: Sales Pricing Analyst @ ORG_9b9b6e44
[2026-01-31T17:32:04.779Z] [BOT] 💾 Added channel posting: Sales Pricing Analyst @ ORG_9b9b6e44 → category channel (1 total channels)
💾 BEFORE MERGE: 1294 jobs in memory (cached)
[2026-01-31T17:32:04.802Z] [BOT] ✅ Loaded V2 database: 1293 jobs
💾 DISK STATE: 1293 jobs on disk
[2026-01-31T17:32:04.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1294
[2026-01-31T17:32:04.805Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1294 jobs (merged disk + memory)
[2026-01-31T17:32:04.806Z] [BOT] ✅ No jobs to archive (all 1294 jobs within 7-day window)
[2026-01-31T17:32:04.883Z] [BOT] 💾 Saved posted_jobs.json: 1294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:06.385Z] [BOT] 📍 [ROUTING] "Robotic Data Collection Operator - Tele-Op Systems" @ ORG_62fa5a5b Robotics
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:32:06.779Z] [BOT] ✅ Posted message: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics in #💻・tech-jobs
  ✅ Industry: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics
[2026-01-31T17:32:06.779Z] [BOT] 💾 Added channel posting: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics → category channel (1 total channels)
[2026-01-31T17:32:06.779Z] [BOT] 💾 BEFORE MERGE: 1295 jobs in memory (cached)
[2026-01-31T17:32:06.802Z] [BOT] ✅ Loaded V2 database: 1294 jobs
💾 DISK STATE: 1294 jobs on disk
[2026-01-31T17:32:06.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1295
[2026-01-31T17:32:06.804Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1295 jobs (merged disk + memory)
[2026-01-31T17:32:06.805Z] [BOT] ✅ No jobs to archive (all 1295 jobs within 7-day window)
[2026-01-31T17:32:06.879Z] [BOT] 💾 Saved posted_jobs.json: 1295 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:08.381Z] [BOT] 📍 [ROUTING] "Early-Career Geologist or Hydrogeologist" @ ORG_77d789fe Consultants
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:32:08.669Z] [BOT] ✅ Posted message: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants in #💻・tech-jobs
  ✅ Industry: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants
[2026-01-31T17:32:08.670Z] [BOT] 💾 Added channel posting: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants → category channel (1 total channels)
[2026-01-31T17:32:08.670Z] [BOT] 💾 BEFORE MERGE: 1296 jobs in memory (cached)
[2026-01-31T17:32:08.692Z] [BOT] ✅ Loaded V2 database: 1295 jobs
💾 DISK STATE: 1295 jobs on disk
[2026-01-31T17:32:08.693Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1296
[2026-01-31T17:32:08.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:32:08.695Z] [BOT] 💾 AFTER MERGE: 1296 jobs (merged disk + memory)
[2026-01-31T17:32:08.696Z] [BOT] ✅ No jobs to archive (all 1296 jobs within 7-day window)
[2026-01-31T17:32:08.769Z] [BOT] 💾 Saved posted_jobs.json: 1296 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:13.272Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T17:32:13.273Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_0a4b5d49 Holdings
[2026-01-31T17:32:13.273Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T17:32:13.510Z] [BOT] ✅ Posted message: Data Analyst @ ORG_0a4b5d49 Holdings in #📊・JID_fb739488
[2026-01-31T17:32:13.510Z] [BOT] ✅ Industry: Data Analyst @ ORG_0a4b5d49 Holdings
[2026-01-31T17:32:13.510Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_0a4b5d49 Holdings → category channel (1 total channels)
[2026-01-31T17:32:13.511Z] [BOT] 💾 BEFORE MERGE: 1297 jobs in memory (cached)
[2026-01-31T17:32:13.534Z] [BOT] ✅ Loaded V2 database: 1296 jobs
💾 DISK STATE: 1296 jobs on disk
[2026-01-31T17:32:13.534Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1297
[2026-01-31T17:32:13.536Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1297 jobs (merged disk + memory)
[2026-01-31T17:32:13.537Z] [BOT] ✅ No jobs to archive (all 1297 jobs within 7-day window)
[2026-01-31T17:32:13.631Z] [BOT] 💾 Saved posted_jobs.json: 1297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:18.130Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T17:32:18.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a7bd095-kbr_care..." not found, but found as SHA256 "4f7652baa919cf0f"
[2026-01-31T17:32:18.131Z] [BOT] ⏭️  Skipping duplicate: JID_3a7bd095-kbr_careers-JID_aa0e9bca-engineer_r2115179 (posted within 7 days)
[2026-01-31T17:32:18.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1a95186f..." not found, but found as SHA256 "0758bc407aad1172"
⏭️  Skipping duplicate: JID_1a203fbb (posted within 7 days)
[2026-01-31T17:32:18.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1636b37..." not found, but found as SHA256 "08807863d803c1b6"
[2026-01-31T17:32:18.132Z] [BOT] ⏭️  Skipping duplicate: JID_4a59af79-cx_1-job-1309 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b8a3f2d8-..." not found, but found as SHA256 "60f0ec0823e8ee92"
⏭️  Skipping duplicate: JID_329e3b16 (posted within 7 days)
[2026-01-31T17:32:18.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5194b526..." not found, but found as SHA256 "b7f50820ddc65fa4"
⏭️  Skipping duplicate: JID_5194b526 (posted within 7 days)
[2026-01-31T17:32:18.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_992ef08f..." not found, but found as SHA256 "f9164d935ebee4fc"
[2026-01-31T17:32:18.132Z] [BOT] ⏭️  Skipping duplicate: JID_992ef08f (posted within 7 days)
[2026-01-31T17:32:18.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af7c2683..." not found, but found as SHA256 "afc47147bb0eebeb"
⏭️  Skipping duplicate: JID_2903cb24 (posted within 7 days)
[2026-01-31T17:32:18.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ef31bfa-marmon_ca..." not found, but found as SHA256 "1a1693f8179fcb77"
⏭️  Skipping duplicate: JID_7ef31bfa-marmon_careers-JID_22178c5e-analyst_jr0000039156 (posted within 7 days)
[2026-01-31T17:32:18.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_30de39ed..." not found, but found as SHA256 "9e650d53e5b61073"
[2026-01-31T17:32:18.133Z] [BOT] ⏭️  Skipping duplicate: JID_c1fba773 (posted within 7 days)
[2026-01-31T17:32:18.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_15513b38..." not found, but found as SHA256 "1c1e883e9a1e892c"
[2026-01-31T17:32:18.133Z] [BOT] ⏭️  Skipping duplicate: JID_e95cc55e (posted within 7 days)
[2026-01-31T17:32:18.246Z] [BOT] ✅ Loaded pending queue: 2945 total (1629 pending, 49 enriched, 1267 posted)
[2026-01-31T17:32:18.438Z] [BOT] ✅ Saved pending queue: 2945 total (1629 pending, 39 enriched, 1277 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T17:32:18.439Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T17:32:18.525Z] [BOT] 📂 Loaded 11358 existing routing entries
[2026-01-31T17:32:18.650Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T17:32:18.650Z] [BOT] Total entries: 11368
   Timestamp: 2026-01-31T17:32:18.604Z
[2026-01-31T17:32:18.651Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T17:32:18.651Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T17:32:18.651Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T17:32:18.651Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-31T17:32:18.651Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #📊・JID_fb739488: 1 posts
[2026-01-31T17:32:18.651Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T17:32:18.652Z] [BOT] 💾 BEFORE MERGE: 1297 jobs in memory (cached)
[2026-01-31T17:32:18.694Z] [BOT] ✅ Loaded V2 database: 1297 jobs
💾 DISK STATE: 1297 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1297
[2026-01-31T17:32:18.695Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:32:18.696Z] [BOT] 💾 AFTER MERGE: 1297 jobs (merged disk + memory)
[2026-01-31T17:32:18.697Z] [BOT] ✅ No jobs to archive (all 1297 jobs within 7-day window)
[2026-01-31T17:32:18.775Z] [BOT] 💾 Saved posted_jobs.json: 1297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:32:18.775Z] [BOT] ✅ Database saved successfully
[2026-01-31T17:32:20.807Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2995) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*