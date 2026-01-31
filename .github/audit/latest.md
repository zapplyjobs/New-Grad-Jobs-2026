# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T23:31:53.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T23:31:23.248Z] ========================================
[2026-01-31T23:31:23.249Z] Discord Bot Execution Log
[2026-01-31T23:31:23.249Z] Environment: GitHub Actions
[2026-01-31T23:31:23.250Z] Node Version: v20.20.0
[2026-01-31T23:31:23.250Z] ========================================
[2026-01-31T23:31:23.250Z] Environment Variables Check:
[2026-01-31T23:31:23.250Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T23:31:23.250Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.250Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T23:31:23.250Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T23:31:23.250Z] 
Multi-Channel Configuration:
[2026-01-31T23:31:23.250Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.250Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.250Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T23:31:23.251Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T23:31:23.251Z] 
Data Files Check:
[2026-01-31T23:31:23.252Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64775 bytes)
[2026-01-31T23:31:23.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8604838 bytes)
[2026-01-31T23:31:23.297Z] 
========================================
[2026-01-31T23:31:23.297Z] Starting Enhanced Discord Bot...
[2026-01-31T23:31:23.297Z] ========================================
[2026-01-31T23:31:23.865Z] [BOT] ✅ Loaded V2 database: 1517 jobs
[2026-01-31T23:31:24.313Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T23:31:24.314Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T23:31:24.314Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T23:31:24.435Z] [BOT] ✅ Loaded pending queue: 2947 total (1390 pending, 50 enriched, 1507 posted)
[2026-01-31T23:31:24.436Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T23:31:24.436Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:31:24.437Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T23:31:24.437Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:31:24.437Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T23:31:24.438Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T23:31:24.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T23:31:24.438Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T23:31:24.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T23:31:24.439Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T23:31:24.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T23:31:24.439Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T23:31:24.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T23:31:24.439Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T23:31:24.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T23:31:24.440Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T23:31:24.440Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-01-31T23:31:24.440Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T23:31:24.452Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-01-31T23:31:24.453Z] [BOT] 🚫 Skipping blacklisted job: Finance Program Manager at spotify
[2026-01-31T23:31:24.574Z] [BOT] ✅ Loaded pending queue: 2947 total (1390 pending, 50 enriched, 1507 posted)
[2026-01-31T23:31:24.768Z] [BOT] ✅ Saved pending queue: 2946 total (1390 pending, 49 enriched, 1507 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-01-31T23:31:24.769Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-01-31T23:31:24.769Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-01-31T23:31:24.769Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
[2026-01-31T23:31:24.770Z] [BOT] - Software Engineer – Forward Deployed AI (New Grad) @ Promise: oakland, washington
   - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T23:31:24.773Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T23:31:24.774Z] [BOT] 📍 [ROUTING] "Technology Associate" @ ORG_f0945c53
[2026-01-31T23:31:24.774Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:24.791Z] [BOT ERROR] (node:3657) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T23:31:25.050Z] [BOT] ✅ Posted message: Technology Associate @ ORG_f0945c53 in #💻・tech-jobs
[2026-01-31T23:31:25.050Z] [BOT] ✅ Industry: Technology Associate @ ORG_f0945c53
[2026-01-31T23:31:25.051Z] [BOT] 💾 Added channel posting: Technology Associate @ ORG_f0945c53 → category channel (1 total channels)
[2026-01-31T23:31:25.051Z] [BOT] 💾 BEFORE MERGE: 1518 jobs in memory (cached)
[2026-01-31T23:31:25.082Z] [BOT] ✅ Loaded V2 database: 1517 jobs
💾 DISK STATE: 1517 jobs on disk
[2026-01-31T23:31:25.082Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1518
[2026-01-31T23:31:25.093Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:25.093Z] [BOT] 💾 AFTER MERGE: 1518 jobs (merged disk + memory)
[2026-01-31T23:31:25.094Z] [BOT] ✅ No jobs to archive (all 1518 jobs within 7-day window)
[2026-01-31T23:31:25.182Z] [BOT] 💾 Saved posted_jobs.json: 1518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:26.685Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
[2026-01-31T23:31:26.685Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:26.887Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-01-31T23:31:26.887Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T23:31:26.887Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-31T23:31:26.887Z] [BOT] 💾 BEFORE MERGE: 1519 jobs in memory (cached)
[2026-01-31T23:31:26.913Z] [BOT] ✅ Loaded V2 database: 1518 jobs
💾 DISK STATE: 1518 jobs on disk
[2026-01-31T23:31:26.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1519
[2026-01-31T23:31:26.923Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:26.923Z] [BOT] 💾 AFTER MERGE: 1519 jobs (merged disk + memory)
[2026-01-31T23:31:26.924Z] [BOT] ✅ No jobs to archive (all 1519 jobs within 7-day window)
[2026-01-31T23:31:27.008Z] [BOT] 💾 Saved posted_jobs.json: 1519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:28.508Z] [BOT] 📍 [ROUTING] "Java DevSecOps Software Engineer" @ Trace3
[2026-01-31T23:31:28.509Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:28.699Z] [BOT] ✅ Posted message: Java DevSecOps Software Engineer @ Trace3 in #💻・tech-jobs
[2026-01-31T23:31:28.699Z] [BOT] ✅ Industry: Java DevSecOps Software Engineer @ Trace3
[2026-01-31T23:31:28.700Z] [BOT] 💾 Added channel posting: Java DevSecOps Software Engineer @ Trace3 → category channel (1 total channels)
[2026-01-31T23:31:28.700Z] [BOT] 💾 BEFORE MERGE: 1520 jobs in memory (cached)
[2026-01-31T23:31:28.725Z] [BOT] ✅ Loaded V2 database: 1519 jobs
💾 DISK STATE: 1519 jobs on disk
[2026-01-31T23:31:28.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1520
[2026-01-31T23:31:28.735Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:28.735Z] [BOT] 💾 AFTER MERGE: 1520 jobs (merged disk + memory)
[2026-01-31T23:31:28.736Z] [BOT] ✅ No jobs to archive (all 1520 jobs within 7-day window)
[2026-01-31T23:31:28.826Z] [BOT] 💾 Saved posted_jobs.json: 1520 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:30.329Z] [BOT] 📍 [ROUTING] "Material Handler" @ ORG_10a0c5f8 General Brigham
[2026-01-31T23:31:30.329Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:30.529Z] [BOT] ✅ Posted message: Material Handler @ ORG_10a0c5f8 General Brigham in #💻・tech-jobs
[2026-01-31T23:31:30.529Z] [BOT] ✅ Industry: Material Handler @ ORG_10a0c5f8 General Brigham
[2026-01-31T23:31:30.529Z] [BOT] 💾 Added channel posting: Material Handler @ ORG_10a0c5f8 General Brigham → category channel (1 total channels)
💾 BEFORE MERGE: 1521 jobs in memory (cached)
[2026-01-31T23:31:30.554Z] [BOT] ✅ Loaded V2 database: 1520 jobs
💾 DISK STATE: 1520 jobs on disk
[2026-01-31T23:31:30.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1521
[2026-01-31T23:31:30.561Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:30.561Z] [BOT] 💾 AFTER MERGE: 1521 jobs (merged disk + memory)
[2026-01-31T23:31:30.562Z] [BOT] ✅ No jobs to archive (all 1521 jobs within 7-day window)
[2026-01-31T23:31:30.637Z] [BOT] 💾 Saved posted_jobs.json: 1521 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:32.138Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:32.394Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-31T23:31:32.394Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-31T23:31:32.394Z] [BOT] 💾 BEFORE MERGE: 1522 jobs in memory (cached)
[2026-01-31T23:31:32.420Z] [BOT] ✅ Loaded V2 database: 1521 jobs
💾 DISK STATE: 1521 jobs on disk
[2026-01-31T23:31:32.420Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1522
[2026-01-31T23:31:32.428Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:32.429Z] [BOT] 💾 AFTER MERGE: 1522 jobs (merged disk + memory)
[2026-01-31T23:31:32.429Z] [BOT] ✅ No jobs to archive (all 1522 jobs within 7-day window)
[2026-01-31T23:31:32.512Z] [BOT] 💾 Saved posted_jobs.json: 1522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:34.015Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Oracle Health and Analytics" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-01-31T23:31:34.015Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:34.332Z] [BOT] ✅ Posted message: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-31T23:31:34.332Z] [BOT] ✅ Industry: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb
[2026-01-31T23:31:34.332Z] [BOT] 💾 Added channel posting: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T23:31:34.332Z] [BOT] 💾 BEFORE MERGE: 1523 jobs in memory (cached)
[2026-01-31T23:31:34.358Z] [BOT] ✅ Loaded V2 database: 1522 jobs
💾 DISK STATE: 1522 jobs on disk
[2026-01-31T23:31:34.358Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1523
[2026-01-31T23:31:34.368Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1523 jobs (merged disk + memory)
[2026-01-31T23:31:34.369Z] [BOT] ✅ No jobs to archive (all 1523 jobs within 7-day window)
[2026-01-31T23:31:34.451Z] [BOT] 💾 Saved posted_jobs.json: 1523 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:35.954Z] [BOT] 📍 [ROUTING] "Software Engineer I - C++ and Payments Systems" @ ORG_66279f04 National Information Services
[2026-01-31T23:31:35.954Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:31:36.170Z] [BOT] ✅ Posted message: Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services in #💻・tech-jobs
[2026-01-31T23:31:36.170Z] [BOT] ✅ Industry: Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services
[2026-01-31T23:31:36.171Z] [BOT] 💾 Added channel posting: Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services → category channel (1 total channels)
💾 BEFORE MERGE: 1524 jobs in memory (cached)
[2026-01-31T23:31:36.196Z] [BOT] ✅ Loaded V2 database: 1523 jobs
💾 DISK STATE: 1523 jobs on disk
[2026-01-31T23:31:36.197Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1524
[2026-01-31T23:31:36.207Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:36.207Z] [BOT] 💾 AFTER MERGE: 1524 jobs (merged disk + memory)
[2026-01-31T23:31:36.208Z] [BOT] ✅ No jobs to archive (all 1524 jobs within 7-day window)
[2026-01-31T23:31:36.291Z] [BOT] 💾 Saved posted_jobs.json: 1524 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:40.793Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T23:31:40.794Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Forward Deployed AI" @ ORG_1eec97a0
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:31:40.794Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:31:41.019Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0
[2026-01-31T23:31:41.020Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 → category channel (1 total channels)
[2026-01-31T23:31:41.020Z] [BOT] 💾 BEFORE MERGE: 1525 jobs in memory (cached)
[2026-01-31T23:31:41.045Z] [BOT] ✅ Loaded V2 database: 1524 jobs
💾 DISK STATE: 1524 jobs on disk
[2026-01-31T23:31:41.052Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1525
[2026-01-31T23:31:41.055Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:41.055Z] [BOT] 💾 AFTER MERGE: 1525 jobs (merged disk + memory)
[2026-01-31T23:31:41.056Z] [BOT] ✅ No jobs to archive (all 1525 jobs within 7-day window)
[2026-01-31T23:31:41.157Z] [BOT] 💾 Saved posted_jobs.json: 1525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:42.655Z] [BOT] 📍 [ROUTING] "Database Engineer 0" @ ORG_8b09cf05
[2026-01-31T23:31:42.655Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:31:43.298Z] [BOT] ✅ Posted message: Database Engineer 0 @ ORG_8b09cf05 in #🤖・ai-jobs
[2026-01-31T23:31:43.298Z] [BOT] ✅ Industry: Database Engineer 0 @ ORG_8b09cf05
[2026-01-31T23:31:43.299Z] [BOT] 💾 Added channel posting: Database Engineer 0 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-01-31T23:31:43.299Z] [BOT] 💾 BEFORE MERGE: 1526 jobs in memory (cached)
[2026-01-31T23:31:43.324Z] [BOT] ✅ Loaded V2 database: 1525 jobs
💾 DISK STATE: 1525 jobs on disk
[2026-01-31T23:31:43.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1526
[2026-01-31T23:31:43.335Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:43.335Z] [BOT] 💾 AFTER MERGE: 1526 jobs (merged disk + memory)
[2026-01-31T23:31:43.336Z] [BOT] ✅ No jobs to archive (all 1526 jobs within 7-day window)
[2026-01-31T23:31:43.418Z] [BOT] 💾 Saved posted_jobs.json: 1526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:44.920Z] [BOT] 📍 [ROUTING] "Software Engineer – Forward Deployed AI (New Grad)" @ ORG_1eec97a0
[2026-01-31T23:31:44.920Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:31:45.068Z] [BOT] ✅ Posted message: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 in #🤖・ai-jobs
[2026-01-31T23:31:45.068Z] [BOT] ✅ Industry: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0
[2026-01-31T23:31:45.069Z] [BOT] 💾 Added channel posting: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 → category channel (1 total channels)
[2026-01-31T23:31:45.069Z] [BOT] 💾 BEFORE MERGE: 1527 jobs in memory (cached)
[2026-01-31T23:31:45.094Z] [BOT] ✅ Loaded V2 database: 1526 jobs
💾 DISK STATE: 1526 jobs on disk
[2026-01-31T23:31:45.098Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1527
[2026-01-31T23:31:45.101Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:45.101Z] [BOT] 💾 AFTER MERGE: 1527 jobs (merged disk + memory)
[2026-01-31T23:31:45.102Z] [BOT] ✅ No jobs to archive (all 1527 jobs within 7-day window)
[2026-01-31T23:31:45.181Z] [BOT] 💾 Saved posted_jobs.json: 1527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:49.683Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T23:31:49.685Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77fb58a1..." not found, but found as SHA256 "93d9957aeddf901c"
⏭️  Skipping duplicate: JID_84b54c84-cx_2001-job-26148 (posted within 7 days)
[2026-01-31T23:31:49.685Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4dd0db97..." not found, but found as SHA256 "d395a5f2fde88c5e"
[2026-01-31T23:31:49.685Z] [BOT] ⏭️  Skipping duplicate: JID_4dd0db97 (posted within 7 days)
[2026-01-31T23:31:49.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1bac24d6..." not found, but found as SHA256 "67e32855fcd091ec"
⏭️  Skipping duplicate: JID_b096e5ab (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_052d497a..." not found, but found as SHA256 "e15bab50a4de2fe3"
⏭️  Skipping duplicate: JID_1d0abbb2-handler_rq4039209 (posted within 7 days)
[2026-01-31T23:31:49.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "298ac7c7d5bd293a"
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0148259 (posted within 7 days)
[2026-01-31T23:31:49.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "784336d974ba4dcc"
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311345 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fd6b083b..." not found, but found as SHA256 "dc9b55c3e4762a16"
⏭️  Skipping duplicate: JID_b38dfe84 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_38ba3dc4..." not found, but found as SHA256 "fc0860d4a1f2c02f"
⏭️  Skipping duplicate: JID_a08866a2 (posted within 7 days)
[2026-01-31T23:31:49.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_df4bfddb..." not found, but found as SHA256 "993cc34a04e18bd0"
[2026-01-31T23:31:49.687Z] [BOT] ⏭️  Skipping duplicate: JID_992aeaa6-_jr0300399 (posted within 7 days)
[2026-01-31T23:31:49.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fd6b083b..." not found, but found as SHA256 "67c71abb25b5d873"
[2026-01-31T23:31:49.687Z] [BOT] ⏭️  Skipping duplicate: JID_7cb5fafe (posted within 7 days)
[2026-01-31T23:31:49.801Z] [BOT] ✅ Loaded pending queue: 2946 total (1390 pending, 49 enriched, 1507 posted)
[2026-01-31T23:31:49.986Z] [BOT] ✅ Saved pending queue: 2946 total (1390 pending, 39 enriched, 1517 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T23:31:49.987Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T23:31:50.074Z] [BOT] 📂 Loaded 11598 existing routing entries
[2026-01-31T23:31:50.202Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11608
   Timestamp: 2026-01-31T23:31:50.156Z
[2026-01-31T23:31:50.206Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 19
   Successful: 10
   Failed: 0
   Skipped: 9
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1527 jobs in memory (cached)
[2026-01-31T23:31:50.246Z] [BOT] ✅ Loaded V2 database: 1527 jobs
[2026-01-31T23:31:50.246Z] [BOT] 💾 DISK STATE: 1527 jobs on disk
[2026-01-31T23:31:50.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1527
[2026-01-31T23:31:50.251Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:31:50.252Z] [BOT] 💾 AFTER MERGE: 1527 jobs (merged disk + memory)
[2026-01-31T23:31:50.253Z] [BOT] ✅ No jobs to archive (all 1527 jobs within 7-day window)
[2026-01-31T23:31:50.336Z] [BOT] 💾 Saved posted_jobs.json: 1527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:31:50.336Z] [BOT] ✅ Database saved successfully
[2026-01-31T23:31:52.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3657) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*