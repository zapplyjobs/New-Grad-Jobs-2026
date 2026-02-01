# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T10:04:30.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T10:03:37.911Z] ========================================
[2026-02-01T10:03:37.913Z] Discord Bot Execution Log
[2026-02-01T10:03:37.913Z] Environment: GitHub Actions
[2026-02-01T10:03:37.913Z] Node Version: v20.20.0
[2026-02-01T10:03:37.913Z] ========================================
[2026-02-01T10:03:37.913Z] Environment Variables Check:
[2026-02-01T10:03:37.913Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T10:03:37.913Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T10:03:37.913Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T10:03:37.913Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T10:03:37.913Z] 
Multi-Channel Configuration:
[2026-02-01T10:03:37.914Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T10:03:37.914Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T10:03:37.914Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:03:37.914Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T10:03:37.914Z] 
Data Files Check:
[2026-02-01T10:03:37.915Z] .github/data/new_jobs.json: ✅ Exists (10 items, 62167 bytes)
[2026-02-01T10:03:37.963Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9402743 bytes)
[2026-02-01T10:03:37.963Z] 
========================================
[2026-02-01T10:03:37.963Z] Starting Enhanced Discord Bot...
[2026-02-01T10:03:37.963Z] ========================================
[2026-02-01T10:03:38.545Z] [BOT] ✅ Loaded V2 database: 1747 jobs
[2026-02-01T10:03:39.132Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T10:03:39.132Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T10:03:39.133Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T10:03:39.244Z] [BOT] ✅ Loaded pending queue: 2944 total (1157 pending, 50 enriched, 1737 posted)
[2026-02-01T10:03:39.245Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:03:39.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T10:03:39.246Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:03:39.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T10:03:39.247Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T10:03:39.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T10:03:39.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-02-01T10:03:39.247Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T10:03:39.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T10:03:39.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T10:03:39.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T10:03:39.262Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T10:03:39.262Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
[2026-02-01T10:03:39.388Z] [BOT] ✅ Loaded pending queue: 2944 total (1157 pending, 50 enriched, 1737 posted)
[2026-02-01T10:03:39.598Z] [BOT] ✅ Saved pending queue: 2943 total (1157 pending, 49 enriched, 1737 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T10:03:39.598Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T10:03:39.599Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
   (1 grouped as same job with different locations)
[2026-02-01T10:03:39.599Z] [BOT] 📍 1 jobs with multiple locations:
   - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T10:03:39.603Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T10:03:39.604Z] [BOT] 📍 [ROUTING] "Technology Development Program (TECDP) - Artificial Intelligence" @ ORG_b344d80e Cigna Group
[2026-02-01T10:03:39.604Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:03:39.622Z] [BOT ERROR] (node:3215) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T10:03:39.934Z] [BOT] ✅ Posted message: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group in #🤖・ai-jobs
[2026-02-01T10:03:39.935Z] [BOT] ✅ Industry: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group
[2026-02-01T10:03:39.935Z] [BOT] 💾 Added channel posting: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group → category channel (1 total channels)
[2026-02-01T10:03:39.936Z] [BOT] 💾 BEFORE MERGE: 1748 jobs in memory (cached)
[2026-02-01T10:03:39.975Z] [BOT] ✅ Loaded V2 database: 1747 jobs
💾 DISK STATE: 1747 jobs on disk
[2026-02-01T10:03:39.975Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1748
[2026-02-01T10:03:39.979Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:03:39.980Z] [BOT] 💾 AFTER MERGE: 1748 jobs (merged disk + memory)
[2026-02-01T10:03:39.981Z] [BOT] ✅ No jobs to archive (all 1748 jobs within 7-day window)
[2026-02-01T10:03:40.087Z] [BOT] 💾 Saved posted_jobs.json: 1748 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:41.903Z] [BOT] ✅ Posted message: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T10:03:41.904Z] [BOT] 💾 Added channel posting: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group → location channel (2 total channels)
[2026-02-01T10:03:41.904Z] [BOT] 💾 BEFORE MERGE: 1748 jobs in memory (cached)
[2026-02-01T10:03:41.936Z] [BOT] ✅ Loaded V2 database: 1748 jobs
[2026-02-01T10:03:41.937Z] [BOT] 💾 DISK STATE: 1748 jobs on disk
[2026-02-01T10:03:41.937Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1748
[2026-02-01T10:03:41.941Z] [BOT] 🔀 Deep merged: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:03:41.941Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1748 jobs (merged disk + memory)
[2026-02-01T10:03:41.942Z] [BOT] ✅ No jobs to archive (all 1748 jobs within 7-day window)
[2026-02-01T10:03:42.036Z] [BOT] 💾 Saved posted_jobs.json: 1748 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:43.538Z] [BOT] 📍 [ROUTING] "AI Trainer for Thermodynamics - Freelance - Remote" @ ORG_ef39485b
   Category: AI (matched: "machine learning")
[2026-02-01T10:03:43.538Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:03:43.712Z] [BOT] ✅ Posted message: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #🤖・ai-jobs
[2026-02-01T10:03:43.712Z] [BOT] ✅ Industry: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b
[2026-02-01T10:03:43.713Z] [BOT] 💾 Added channel posting: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b → category channel (1 total channels)
[2026-02-01T10:03:43.713Z] [BOT] 💾 BEFORE MERGE: 1749 jobs in memory (cached)
[2026-02-01T10:03:43.747Z] [BOT] ✅ Loaded V2 database: 1748 jobs
💾 DISK STATE: 1748 jobs on disk
[2026-02-01T10:03:43.747Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1749
[2026-02-01T10:03:43.751Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:03:43.751Z] [BOT] 💾 AFTER MERGE: 1749 jobs (merged disk + memory)
[2026-02-01T10:03:43.752Z] [BOT] ✅ No jobs to archive (all 1749 jobs within 7-day window)
[2026-02-01T10:03:43.846Z] [BOT] 💾 Saved posted_jobs.json: 1749 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:45.567Z] [BOT] ✅ Posted message: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #🏠・JID_ead674af
[2026-02-01T10:03:45.567Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T10:03:45.567Z] [BOT] 💾 Added channel posting: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b → location channel (2 total channels)
💾 BEFORE MERGE: 1749 jobs in memory (cached)
[2026-02-01T10:03:45.601Z] [BOT] ✅ Loaded V2 database: 1749 jobs
💾 DISK STATE: 1749 jobs on disk
[2026-02-01T10:03:45.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1749
[2026-02-01T10:03:45.605Z] [BOT] 🔀 Deep merged: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:03:45.605Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1749 jobs (merged disk + memory)
[2026-02-01T10:03:45.606Z] [BOT] ✅ No jobs to archive (all 1749 jobs within 7-day window)
[2026-02-01T10:03:45.703Z] [BOT] 💾 Saved posted_jobs.json: 1749 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:47.205Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Agent" @ ORG_d5eef8ad
   Category: AI (matched: "AI/ML")
[2026-02-01T10:03:47.205Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:03:47.399Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🤖・ai-jobs
[2026-02-01T10:03:47.399Z] [BOT] ✅ Industry: Software Engineer – New Grad - Agent @ ORG_d5eef8ad
[2026-02-01T10:03:47.400Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Agent @ ORG_d5eef8ad → category channel (1 total channels)
[2026-02-01T10:03:47.400Z] [BOT] 💾 BEFORE MERGE: 1750 jobs in memory (cached)
[2026-02-01T10:03:47.436Z] [BOT] ✅ Loaded V2 database: 1749 jobs
💾 DISK STATE: 1749 jobs on disk
[2026-02-01T10:03:47.436Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1750
[2026-02-01T10:03:47.440Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:03:47.440Z] [BOT] 💾 AFTER MERGE: 1750 jobs (merged disk + memory)
[2026-02-01T10:03:47.441Z] [BOT] ✅ No jobs to archive (all 1750 jobs within 7-day window)
[2026-02-01T10:03:47.567Z] [BOT] 💾 Saved posted_jobs.json: 1750 active jobs
[2026-02-01T10:03:47.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:49.356Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🌉・JID_739bbc0b
[2026-02-01T10:03:49.356Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:03:49.357Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Agent @ ORG_d5eef8ad → location channel (2 total channels)
[2026-02-01T10:03:49.357Z] [BOT] 💾 BEFORE MERGE: 1750 jobs in memory (cached)
[2026-02-01T10:03:49.388Z] [BOT] ✅ Loaded V2 database: 1750 jobs
💾 DISK STATE: 1750 jobs on disk
[2026-02-01T10:03:49.388Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1750
[2026-02-01T10:03:49.391Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Agent @ ORG_d5eef8ad (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:03:49.391Z] [BOT] 💾 AFTER MERGE: 1750 jobs (merged disk + memory)
[2026-02-01T10:03:49.393Z] [BOT] ✅ No jobs to archive (all 1750 jobs within 7-day window)
[2026-02-01T10:03:49.478Z] [BOT] 💾 Saved posted_jobs.json: 1750 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:50.980Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – New Grad" @ ORG_931a39c9
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T10:03:50.980Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:03:51.161Z] [BOT] ✅ Posted message: Machine Learning Engineer – New Grad @ ORG_931a39c9 in #🤖・ai-jobs
[2026-02-01T10:03:51.161Z] [BOT] ✅ Industry: Machine Learning Engineer – New Grad @ ORG_931a39c9
[2026-02-01T10:03:51.162Z] [BOT] 💾 Added channel posting: Machine Learning Engineer – New Grad @ ORG_931a39c9 → category channel (1 total channels)
💾 BEFORE MERGE: 1751 jobs in memory (cached)
[2026-02-01T10:03:51.193Z] [BOT] ✅ Loaded V2 database: 1750 jobs
[2026-02-01T10:03:51.193Z] [BOT] 💾 DISK STATE: 1750 jobs on disk
[2026-02-01T10:03:51.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1751
[2026-02-01T10:03:51.196Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1751 jobs (merged disk + memory)
[2026-02-01T10:03:51.197Z] [BOT] ✅ No jobs to archive (all 1751 jobs within 7-day window)
[2026-02-01T10:03:51.293Z] [BOT] 💾 Saved posted_jobs.json: 1751 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:53.011Z] [BOT] ✅ Posted message: Machine Learning Engineer – New Grad @ ORG_931a39c9 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:03:53.012Z] [BOT] 💾 Added channel posting: Machine Learning Engineer – New Grad @ ORG_931a39c9 → location channel (2 total channels)
💾 BEFORE MERGE: 1751 jobs in memory (cached)
[2026-02-01T10:03:53.045Z] [BOT] ✅ Loaded V2 database: 1751 jobs
💾 DISK STATE: 1751 jobs on disk
[2026-02-01T10:03:53.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1751
[2026-02-01T10:03:53.048Z] [BOT] 🔀 Deep merged: Machine Learning Engineer – New Grad @ ORG_931a39c9 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:03:53.049Z] [BOT] 💾 AFTER MERGE: 1751 jobs (merged disk + memory)
[2026-02-01T10:03:53.050Z] [BOT] ✅ No jobs to archive (all 1751 jobs within 7-day window)
[2026-02-01T10:03:53.141Z] [BOT] 💾 Saved posted_jobs.json: 1751 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:57.642Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T10:03:57.643Z] [BOT] 📍 [ROUTING] "Data Operations Associate" @ ORG_73571e71
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T10:03:57.644Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T10:03:57.856Z] [BOT] ✅ Posted message: Data Operations Associate @ ORG_73571e71 in #📊・JID_fb739488
  ✅ Industry: Data Operations Associate @ ORG_73571e71
[2026-02-01T10:03:57.857Z] [BOT] 💾 Added channel posting: Data Operations Associate @ ORG_73571e71 → category channel (1 total channels)
[2026-02-01T10:03:57.857Z] [BOT] 💾 BEFORE MERGE: 1752 jobs in memory (cached)
[2026-02-01T10:03:57.892Z] [BOT] ✅ Loaded V2 database: 1751 jobs
💾 DISK STATE: 1751 jobs on disk
[2026-02-01T10:03:57.892Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1752
[2026-02-01T10:03:57.896Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:03:57.896Z] [BOT] 💾 AFTER MERGE: 1752 jobs (merged disk + memory)
[2026-02-01T10:03:57.897Z] [BOT] ✅ No jobs to archive (all 1752 jobs within 7-day window)
[2026-02-01T10:03:57.990Z] [BOT] 💾 Saved posted_jobs.json: 1752 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:03:59.733Z] [BOT] ✅ Posted message: Data Operations Associate @ ORG_73571e71 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T10:03:59.733Z] [BOT] 💾 Added channel posting: Data Operations Associate @ ORG_73571e71 → location channel (2 total channels)
[2026-02-01T10:03:59.733Z] [BOT] 💾 BEFORE MERGE: 1752 jobs in memory (cached)
[2026-02-01T10:03:59.766Z] [BOT] ✅ Loaded V2 database: 1752 jobs
💾 DISK STATE: 1752 jobs on disk
[2026-02-01T10:03:59.766Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1752
[2026-02-01T10:03:59.769Z] [BOT] 🔀 Deep merged: Data Operations Associate @ ORG_73571e71 (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:03:59.769Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1752 jobs (merged disk + memory)
[2026-02-01T10:03:59.770Z] [BOT] ✅ No jobs to archive (all 1752 jobs within 7-day window)
[2026-02-01T10:03:59.877Z] [BOT] 💾 Saved posted_jobs.json: 1752 active jobs
[2026-02-01T10:03:59.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:04.378Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T10:04:04.380Z] [BOT] 📍 [ROUTING] "F-22 Pilot Training Entry-Level Software Engineer – Simulation" @ ORG_6181447bing
[2026-02-01T10:04:04.380Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:04:06.434Z] [BOT] ✅ Posted message: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing in #💻・tech-jobs
  ✅ Industry: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing
[2026-02-01T10:04:06.435Z] [BOT] 💾 Added channel posting: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing → category channel (1 total channels)
💾 BEFORE MERGE: 1753 jobs in memory (cached)
[2026-02-01T10:04:06.465Z] [BOT] ✅ Loaded V2 database: 1752 jobs
💾 DISK STATE: 1752 jobs on disk
[2026-02-01T10:04:06.466Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1753
[2026-02-01T10:04:06.469Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:06.469Z] [BOT] 💾 AFTER MERGE: 1753 jobs (merged disk + memory)
[2026-02-01T10:04:06.470Z] [BOT] ✅ No jobs to archive (all 1753 jobs within 7-day window)
[2026-02-01T10:04:06.568Z] [BOT] 💾 Saved posted_jobs.json: 1753 active jobs
[2026-02-01T10:04:06.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:08.489Z] [BOT] ✅ Posted message: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:04:08.490Z] [BOT] 💾 Added channel posting: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing → location channel (2 total channels)
[2026-02-01T10:04:08.490Z] [BOT] 💾 BEFORE MERGE: 1753 jobs in memory (cached)
[2026-02-01T10:04:08.524Z] [BOT] ✅ Loaded V2 database: 1753 jobs
💾 DISK STATE: 1753 jobs on disk
[2026-02-01T10:04:08.524Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1753
[2026-02-01T10:04:08.527Z] [BOT] 🔀 Deep merged: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:04:08.527Z] [BOT] 💾 AFTER MERGE: 1753 jobs (merged disk + memory)
[2026-02-01T10:04:08.528Z] [BOT] ✅ No jobs to archive (all 1753 jobs within 7-day window)
[2026-02-01T10:04:08.636Z] [BOT] 💾 Saved posted_jobs.json: 1753 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:10.134Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5b5fea64
[2026-02-01T10:04:10.135Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:04:10.403Z] [BOT] ✅ Posted message: Software Engineer @ ORG_5b5fea64 in #💻・tech-jobs
[2026-02-01T10:04:10.404Z] [BOT] ✅ Industry: Software Engineer @ ORG_5b5fea64
[2026-02-01T10:04:10.404Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_5b5fea64 → category channel (1 total channels)
[2026-02-01T10:04:10.404Z] [BOT] 💾 BEFORE MERGE: 1754 jobs in memory (cached)
[2026-02-01T10:04:10.437Z] [BOT] ✅ Loaded V2 database: 1753 jobs
💾 DISK STATE: 1753 jobs on disk
[2026-02-01T10:04:10.438Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1754
[2026-02-01T10:04:10.441Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:10.441Z] [BOT] 💾 AFTER MERGE: 1754 jobs (merged disk + memory)
[2026-02-01T10:04:10.442Z] [BOT] ✅ No jobs to archive (all 1754 jobs within 7-day window)
[2026-02-01T10:04:10.530Z] [BOT] 💾 Saved posted_jobs.json: 1754 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:12.347Z] [BOT] ✅ Posted message: Software Engineer @ ORG_5b5fea64 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T10:04:12.347Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_5b5fea64 → location channel (2 total channels)
[2026-02-01T10:04:12.347Z] [BOT] 💾 BEFORE MERGE: 1754 jobs in memory (cached)
[2026-02-01T10:04:12.380Z] [BOT] ✅ Loaded V2 database: 1754 jobs
💾 DISK STATE: 1754 jobs on disk
[2026-02-01T10:04:12.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1754
[2026-02-01T10:04:12.384Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_5b5fea64 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:04:12.384Z] [BOT] 💾 AFTER MERGE: 1754 jobs (merged disk + memory)
[2026-02-01T10:04:12.385Z] [BOT] ✅ No jobs to archive (all 1754 jobs within 7-day window)
[2026-02-01T10:04:12.483Z] [BOT] 💾 Saved posted_jobs.json: 1754 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:13.984Z] [BOT] 📍 [ROUTING] "Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe" @ ORG_31ce6e79 Turbines
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:04:14.156Z] [BOT] ✅ Posted message: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines in #💻・tech-jobs
  ✅ Industry: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines
[2026-02-01T10:04:14.157Z] [BOT] 💾 Added channel posting: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines → category channel (1 total channels)
[2026-02-01T10:04:14.157Z] [BOT] 💾 BEFORE MERGE: 1755 jobs in memory (cached)
[2026-02-01T10:04:14.192Z] [BOT] ✅ Loaded V2 database: 1754 jobs
💾 DISK STATE: 1754 jobs on disk
[2026-02-01T10:04:14.192Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1755
[2026-02-01T10:04:14.196Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:14.196Z] [BOT] 💾 AFTER MERGE: 1755 jobs (merged disk + memory)
[2026-02-01T10:04:14.197Z] [BOT] ✅ No jobs to archive (all 1755 jobs within 7-day window)
[2026-02-01T10:04:14.318Z] [BOT] 💾 Saved posted_jobs.json: 1755 active jobs
[2026-02-01T10:04:14.318Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:15.820Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-02-01T10:04:15.820Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:04:16.005Z] [BOT] ✅ Posted message: Customer Solution Architect (EMEA) @ supabase in #💻・tech-jobs
[2026-02-01T10:04:16.005Z] [BOT] ✅ Industry: Customer Solution Architect (EMEA) @ supabase
[2026-02-01T10:04:16.006Z] [BOT] 💾 Added channel posting: Customer Solution Architect (EMEA) @ supabase → category channel (1 total channels)
[2026-02-01T10:04:16.006Z] [BOT] 💾 BEFORE MERGE: 1756 jobs in memory (cached)
[2026-02-01T10:04:16.038Z] [BOT] ✅ Loaded V2 database: 1755 jobs
💾 DISK STATE: 1755 jobs on disk
[2026-02-01T10:04:16.038Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1756
[2026-02-01T10:04:16.041Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:16.042Z] [BOT] 💾 AFTER MERGE: 1756 jobs (merged disk + memory)
[2026-02-01T10:04:16.043Z] [BOT] ✅ No jobs to archive (all 1756 jobs within 7-day window)
[2026-02-01T10:04:16.134Z] [BOT] 💾 Saved posted_jobs.json: 1756 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:17.878Z] [BOT] ✅ Posted message: Customer Solution Architect (EMEA) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T10:04:17.878Z] [BOT] 💾 Added channel posting: Customer Solution Architect (EMEA) @ supabase → location channel (2 total channels)
[2026-02-01T10:04:17.878Z] [BOT] 💾 BEFORE MERGE: 1756 jobs in memory (cached)
[2026-02-01T10:04:17.911Z] [BOT] ✅ Loaded V2 database: 1756 jobs
💾 DISK STATE: 1756 jobs on disk
[2026-02-01T10:04:17.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1756
[2026-02-01T10:04:17.914Z] [BOT] 🔀 Deep merged: Customer Solution Architect (EMEA) @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:04:17.914Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1756 jobs (merged disk + memory)
[2026-02-01T10:04:17.915Z] [BOT] ✅ No jobs to archive (all 1756 jobs within 7-day window)
[2026-02-01T10:04:18.014Z] [BOT] 💾 Saved posted_jobs.json: 1756 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:19.514Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:04:19.778Z] [BOT] ✅ Posted message: Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2026-02-01T10:04:19.778Z] [BOT] ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2026-02-01T10:04:19.779Z] [BOT] 💾 Added channel posting: Associate Software Development Engineer @ ORG_6bda74c9 Health → category channel (1 total channels)
[2026-02-01T10:04:19.779Z] [BOT] 💾 BEFORE MERGE: 1757 jobs in memory (cached)
[2026-02-01T10:04:19.811Z] [BOT] ✅ Loaded V2 database: 1756 jobs
💾 DISK STATE: 1756 jobs on disk
[2026-02-01T10:04:19.811Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1757
[2026-02-01T10:04:19.814Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:19.815Z] [BOT] 💾 AFTER MERGE: 1757 jobs (merged disk + memory)
[2026-02-01T10:04:19.815Z] [BOT] ✅ No jobs to archive (all 1757 jobs within 7-day window)
[2026-02-01T10:04:19.906Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:21.666Z] [BOT] ✅ Posted message: Associate Software Development Engineer @ ORG_6bda74c9 Health in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T10:04:21.666Z] [BOT] 💾 Added channel posting: Associate Software Development Engineer @ ORG_6bda74c9 Health → location channel (2 total channels)
[2026-02-01T10:04:21.666Z] [BOT] 💾 BEFORE MERGE: 1757 jobs in memory (cached)
[2026-02-01T10:04:21.701Z] [BOT] ✅ Loaded V2 database: 1757 jobs
💾 DISK STATE: 1757 jobs on disk
[2026-02-01T10:04:21.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1757
[2026-02-01T10:04:21.705Z] [BOT] 🔀 Deep merged: Associate Software Development Engineer @ ORG_6bda74c9 Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:04:21.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1757 jobs (merged disk + memory)
[2026-02-01T10:04:21.706Z] [BOT] ✅ No jobs to archive (all 1757 jobs within 7-day window)
[2026-02-01T10:04:21.797Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:26.298Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T10:04:26.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09322a79..." not found, but found as SHA256 "98369b4b17c3e364"
[2026-02-01T10:04:26.300Z] [BOT] ⏭️  Skipping duplicate: JID_94b408fa-2026_25011433 (posted within 7 days)
[2026-02-01T10:04:26.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0b0fba3d..." not found, but found as SHA256 "0de22e818d7074ab"
⏭️  Skipping duplicate: JID_cc398c47 (posted within 7 days)
[2026-02-01T10:04:26.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b29001f..." not found, but found as SHA256 "789386e9934d52fb"
[2026-02-01T10:04:26.301Z] [BOT] ⏭️  Skipping duplicate: JID_10eefdf5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_28a5b952..." not found, but found as SHA256 "8d82bab05f5ddefa"
⏭️  Skipping duplicate: JID_bb1d3179-external_careers-JID_2bcb1c43-simulation_jr2025457113-1 (posted within 7 days)
[2026-02-01T10:04:26.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2edcf4df..." not found, but found as SHA256 "92df9e5213d131f1"
⏭️  Skipping duplicate: JID_2d74207a (posted within 7 days)
[2026-02-01T10:04:26.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eab10343..." not found, but found as SHA256 "4763ae49578425cd"
[2026-02-01T10:04:26.302Z] [BOT] ⏭️  Skipping duplicate: JID_8cdfe60a (posted within 7 days)
[2026-02-01T10:04:26.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5d7605b8..." not found, but found as SHA256 "84e9def876ecae34"
[2026-02-01T10:04:26.302Z] [BOT] ⏭️  Skipping duplicate: JID_c699d302-program_r0000316308 (posted within 7 days)
[2026-02-01T10:04:26.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c7f13e9a..." not found, but found as SHA256 "68edebda45059429"
[2026-02-01T10:04:26.302Z] [BOT] ⏭️  Skipping duplicate: JID_8eccd242 (posted within 7 days)
[2026-02-01T10:04:26.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_232e088a-..." not found, but found as SHA256 "997711078f4def83"
[2026-02-01T10:04:26.303Z] [BOT] ⏭️  Skipping duplicate: JID_b067a36b (posted within 7 days)
[2026-02-01T10:04:26.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_69cf824b..." not found, but found as SHA256 "571343088974ad3a"
[2026-02-01T10:04:26.303Z] [BOT] ⏭️  Skipping duplicate: JID_b2951129-cvs_health_careers-JID_9262b276-engineer_r0699201-1 (posted within 7 days)
[2026-02-01T10:04:26.406Z] [BOT] ✅ Loaded pending queue: 2943 total (1157 pending, 49 enriched, 1737 posted)
[2026-02-01T10:04:26.614Z] [BOT] ✅ Saved pending queue: 2943 total (1157 pending, 39 enriched, 1747 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T10:04:26.614Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T10:04:26.704Z] [BOT] 📂 Loaded 11828 existing routing entries
[2026-02-01T10:04:26.837Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T10:04:26.837Z] [BOT] New entries: 10
   Total entries: 11838
   Timestamp: 2026-02-01T10:04:26.789Z
[2026-02-01T10:04:26.838Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T10:04:26.838Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 9
[2026-02-01T10:04:26.838Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T10:04:26.838Z] [BOT] Total posts: 19
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #📍・JID_6daed763: 2 posts
[2026-02-01T10:04:26.838Z] [BOT] 5. #🏠・JID_ead674af: 2 posts
[2026-02-01T10:04:26.839Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1757 jobs in memory (cached)
[2026-02-01T10:04:26.897Z] [BOT] ✅ Loaded V2 database: 1757 jobs
💾 DISK STATE: 1757 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1757
[2026-02-01T10:04:26.897Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:04:26.897Z] [BOT] 💾 AFTER MERGE: 1757 jobs (merged disk + memory)
[2026-02-01T10:04:26.899Z] [BOT] ✅ No jobs to archive (all 1757 jobs within 7-day window)
[2026-02-01T10:04:26.994Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:04:26.995Z] [BOT] ✅ Database saved successfully
[2026-02-01T10:04:29.030Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3215) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*