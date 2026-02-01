# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T18:15:49.919Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T18:15:12.045Z] ========================================
[2026-02-01T18:15:12.047Z] Discord Bot Execution Log
[2026-02-01T18:15:12.047Z] Environment: GitHub Actions
[2026-02-01T18:15:12.047Z] Node Version: v20.20.0
[2026-02-01T18:15:12.047Z] ========================================
[2026-02-01T18:15:12.047Z] Environment Variables Check:
[2026-02-01T18:15:12.047Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T18:15:12.047Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T18:15:12.047Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T18:15:12.047Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T18:15:12.047Z] 
Multi-Channel Configuration:
[2026-02-01T18:15:12.047Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T18:15:12.048Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T18:15:12.048Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:15:12.048Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T18:15:12.048Z] 
Data Files Check:
[2026-02-01T18:15:12.049Z] .github/data/new_jobs.json: ✅ Exists (10 items, 75385 bytes)
[2026-02-01T18:15:12.114Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10441562 bytes)
[2026-02-01T18:15:12.114Z] 
========================================
[2026-02-01T18:15:12.114Z] Starting Enhanced Discord Bot...
[2026-02-01T18:15:12.114Z] ========================================
[2026-02-01T18:15:12.623Z] [BOT] ✅ Loaded V2 database: 2097 jobs
[2026-02-01T18:15:13.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T18:15:13.480Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T18:15:13.481Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T18:15:13.636Z] [BOT] ✅ Loaded pending queue: 2948 total (811 pending, 50 enriched, 2087 posted)
[2026-02-01T18:15:13.636Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T18:15:13.636Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T18:15:13.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T18:15:13.637Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T18:15:13.638Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T18:15:13.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T18:15:13.638Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T18:15:13.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T18:15:13.639Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T18:15:13.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T18:15:13.640Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T18:15:13.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T18:15:13.640Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T18:15:13.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T18:15:13.640Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T18:15:13.641Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T18:15:13.641Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T18:15:13.641Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T18:15:13.641Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T18:15:13.652Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T18:15:13.653Z] [BOT] 🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Partnership Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-01T18:15:13.653Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Brookhaven Lab
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-01T18:15:13.653Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-02-01T18:15:13.820Z] [BOT] ✅ Loaded pending queue: 2948 total (811 pending, 50 enriched, 2087 posted)
[2026-02-01T18:15:14.021Z] [BOT] ✅ Saved pending queue: 2933 total (811 pending, 35 enriched, 2087 posted)
🗑️ Removed 15 blacklisted jobs from pending queue
📋 After blacklist filter: 27 jobs (15 blacklisted)
[2026-02-01T18:15:14.022Z] [BOT] 📋 After data quality filter: 27 jobs (0 invalid)
[2026-02-01T18:15:14.022Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-02-01T18:15:14.023Z] [BOT] (9 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Defense @ Palantir: new york, washington, palo alto, seattle, denver
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
[2026-02-01T18:15:14.023Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T18:15:14.026Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T18:15:14.027Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Defense" @ ORG_f56b7436
   Category: TECH (matched: "software")
[2026-02-01T18:15:14.027Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:14.044Z] [BOT ERROR] (node:2723) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T18:15:14.760Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T18:15:14.760Z] [BOT] ✅ Industry: Software Engineer – New Grad - Defense @ ORG_f56b7436
[2026-02-01T18:15:14.761Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T18:15:14.762Z] [BOT] 💾 BEFORE MERGE: 2098 jobs in memory (cached)
[2026-02-01T18:15:14.819Z] [BOT] ✅ Loaded V2 database: 2097 jobs
💾 DISK STATE: 2097 jobs on disk
[2026-02-01T18:15:14.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2098
[2026-02-01T18:15:14.825Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:14.825Z] [BOT] 💾 AFTER MERGE: 2098 jobs (merged disk + memory)
[2026-02-01T18:15:14.826Z] [BOT] ✅ No jobs to archive (all 2098 jobs within 7-day window)
[2026-02-01T18:15:14.945Z] [BOT] 💾 Saved posted_jobs.json: 2098 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:16.733Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:15:16.734Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T18:15:16.734Z] [BOT] 💾 BEFORE MERGE: 2098 jobs in memory (cached)
[2026-02-01T18:15:16.788Z] [BOT] ✅ Loaded V2 database: 2098 jobs
💾 DISK STATE: 2098 jobs on disk
[2026-02-01T18:15:16.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2098
[2026-02-01T18:15:16.793Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Defense @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:15:16.793Z] [BOT] 💾 AFTER MERGE: 2098 jobs (merged disk + memory)
[2026-02-01T18:15:16.795Z] [BOT] ✅ No jobs to archive (all 2098 jobs within 7-day window)
[2026-02-01T18:15:16.910Z] [BOT] 💾 Saved posted_jobs.json: 2098 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:18.412Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
   Category: TECH (default)
[2026-02-01T18:15:18.413Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:18.660Z] [BOT] ✅ Posted message: Enterprise Account Executive @ nominal in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive @ nominal
[2026-02-01T18:15:18.661Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ nominal → category channel (1 total channels)
[2026-02-01T18:15:18.661Z] [BOT] 💾 BEFORE MERGE: 2099 jobs in memory (cached)
[2026-02-01T18:15:18.712Z] [BOT] ✅ Loaded V2 database: 2098 jobs
💾 DISK STATE: 2098 jobs on disk
[2026-02-01T18:15:18.713Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2099
[2026-02-01T18:15:18.722Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2099 jobs (merged disk + memory)
[2026-02-01T18:15:18.723Z] [BOT] ✅ No jobs to archive (all 2099 jobs within 7-day window)
[2026-02-01T18:15:18.839Z] [BOT] 💾 Saved posted_jobs.json: 2099 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:20.341Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive" @ nominal
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:20.550Z] [BOT] ✅ Posted message: Mid-Market Account Executive @ nominal in #💻・tech-jobs
[2026-02-01T18:15:20.551Z] [BOT] ✅ Industry: Mid-Market Account Executive @ nominal
[2026-02-01T18:15:20.552Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive @ nominal → category channel (1 total channels)
[2026-02-01T18:15:20.552Z] [BOT] 💾 BEFORE MERGE: 2100 jobs in memory (cached)
[2026-02-01T18:15:20.602Z] [BOT] ✅ Loaded V2 database: 2099 jobs
💾 DISK STATE: 2099 jobs on disk
[2026-02-01T18:15:20.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2100
[2026-02-01T18:15:20.612Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2100 jobs (merged disk + memory)
[2026-02-01T18:15:20.613Z] [BOT] ✅ No jobs to archive (all 2100 jobs within 7-day window)
[2026-02-01T18:15:20.748Z] [BOT] 💾 Saved posted_jobs.json: 2100 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:22.249Z] [BOT] 📍 [ROUTING] "Roboticist In Residence" @ nominal
[2026-02-01T18:15:22.249Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:22.493Z] [BOT] ✅ Posted message: Roboticist In Residence @ nominal in #💻・tech-jobs
[2026-02-01T18:15:22.493Z] [BOT] ✅ Industry: Roboticist In Residence @ nominal
[2026-02-01T18:15:22.494Z] [BOT] 💾 Added channel posting: Roboticist In Residence @ nominal → category channel (1 total channels)
[2026-02-01T18:15:22.494Z] [BOT] 💾 BEFORE MERGE: 2101 jobs in memory (cached)
[2026-02-01T18:15:22.546Z] [BOT] ✅ Loaded V2 database: 2100 jobs
💾 DISK STATE: 2100 jobs on disk
[2026-02-01T18:15:22.546Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2101
[2026-02-01T18:15:22.552Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:22.552Z] [BOT] 💾 AFTER MERGE: 2101 jobs (merged disk + memory)
[2026-02-01T18:15:22.554Z] [BOT] ✅ No jobs to archive (all 2101 jobs within 7-day window)
[2026-02-01T18:15:22.665Z] [BOT] 💾 Saved posted_jobs.json: 2101 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:24.167Z] [BOT] 📍 [ROUTING] "Software Engineer - Mission Dev" @ nominal
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:24.434Z] [BOT] ✅ Posted message: Software Engineer - Mission Dev @ nominal in #💻・tech-jobs
  ✅ Industry: Software Engineer - Mission Dev @ nominal
[2026-02-01T18:15:24.435Z] [BOT] 💾 Added channel posting: Software Engineer - Mission Dev @ nominal → category channel (1 total channels)
[2026-02-01T18:15:24.435Z] [BOT] 💾 BEFORE MERGE: 2102 jobs in memory (cached)
[2026-02-01T18:15:24.485Z] [BOT] ✅ Loaded V2 database: 2101 jobs
💾 DISK STATE: 2101 jobs on disk
[2026-02-01T18:15:24.486Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2102
[2026-02-01T18:15:24.490Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2102 jobs (merged disk + memory)
[2026-02-01T18:15:24.491Z] [BOT] ✅ No jobs to archive (all 2102 jobs within 7-day window)
[2026-02-01T18:15:24.599Z] [BOT] 💾 Saved posted_jobs.json: 2102 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:26.101Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer - USG/DoD" @ nominal
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:26.329Z] [BOT] ✅ Posted message: Mission Operations Engineer - USG/DoD @ nominal in #💻・tech-jobs
  ✅ Industry: Mission Operations Engineer - USG/DoD @ nominal
[2026-02-01T18:15:26.330Z] [BOT] 💾 Added channel posting: Mission Operations Engineer - USG/DoD @ nominal → category channel (1 total channels)
[2026-02-01T18:15:26.330Z] [BOT] 💾 BEFORE MERGE: 2103 jobs in memory (cached)
[2026-02-01T18:15:26.380Z] [BOT] ✅ Loaded V2 database: 2102 jobs
💾 DISK STATE: 2102 jobs on disk
[2026-02-01T18:15:26.380Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2103
[2026-02-01T18:15:26.388Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:26.388Z] [BOT] 💾 AFTER MERGE: 2103 jobs (merged disk + memory)
[2026-02-01T18:15:26.389Z] [BOT] ✅ No jobs to archive (all 2103 jobs within 7-day window)
[2026-02-01T18:15:26.504Z] [BOT] 💾 Saved posted_jobs.json: 2103 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:28.006Z] [BOT] 📍 [ROUTING] "Instrumentation Engineer" @ nominal
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T18:15:28.006Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:28.386Z] [BOT] ✅ Posted message: Instrumentation Engineer @ nominal in #💻・tech-jobs
  ✅ Industry: Instrumentation Engineer @ nominal
[2026-02-01T18:15:28.387Z] [BOT] 💾 Added channel posting: Instrumentation Engineer @ nominal → category channel (1 total channels)
[2026-02-01T18:15:28.387Z] [BOT] 💾 BEFORE MERGE: 2104 jobs in memory (cached)
[2026-02-01T18:15:28.438Z] [BOT] ✅ Loaded V2 database: 2103 jobs
💾 DISK STATE: 2103 jobs on disk
[2026-02-01T18:15:28.438Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2104
[2026-02-01T18:15:28.446Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:28.446Z] [BOT] 💾 AFTER MERGE: 2104 jobs (merged disk + memory)
[2026-02-01T18:15:28.448Z] [BOT] ✅ No jobs to archive (all 2104 jobs within 7-day window)
[2026-02-01T18:15:28.564Z] [BOT] 💾 Saved posted_jobs.json: 2104 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:30.066Z] [BOT] 📍 [ROUTING] "Support Engineer (APAC)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:30.312Z] [BOT] ✅ Posted message: Support Engineer (APAC) @ supabase in #💻・tech-jobs
[2026-02-01T18:15:30.312Z] [BOT] ✅ Industry: Support Engineer (APAC) @ supabase
[2026-02-01T18:15:30.313Z] [BOT] 💾 Added channel posting: Support Engineer (APAC) @ supabase → category channel (1 total channels)
[2026-02-01T18:15:30.313Z] [BOT] 💾 BEFORE MERGE: 2105 jobs in memory (cached)
[2026-02-01T18:15:30.364Z] [BOT] ✅ Loaded V2 database: 2104 jobs
💾 DISK STATE: 2104 jobs on disk
[2026-02-01T18:15:30.365Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2105
[2026-02-01T18:15:30.382Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2105 jobs (merged disk + memory)
[2026-02-01T18:15:30.393Z] [BOT] ✅ No jobs to archive (all 2105 jobs within 7-day window)
[2026-02-01T18:15:30.507Z] [BOT] 💾 Saved posted_jobs.json: 2105 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:32.364Z] [BOT] ✅ Posted message: Support Engineer (APAC) @ supabase in #🏠・JID_ead674af
[2026-02-01T18:15:32.364Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:15:32.364Z] [BOT] 💾 Added channel posting: Support Engineer (APAC) @ supabase → location channel (2 total channels)
[2026-02-01T18:15:32.364Z] [BOT] 💾 BEFORE MERGE: 2105 jobs in memory (cached)
[2026-02-01T18:15:32.415Z] [BOT] ✅ Loaded V2 database: 2105 jobs
💾 DISK STATE: 2105 jobs on disk
[2026-02-01T18:15:32.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2105
[2026-02-01T18:15:32.419Z] [BOT] 🔀 Deep merged: Support Engineer (APAC) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:15:32.419Z] [BOT] 💾 AFTER MERGE: 2105 jobs (merged disk + memory)
[2026-02-01T18:15:32.420Z] [BOT] ✅ No jobs to archive (all 2105 jobs within 7-day window)
[2026-02-01T18:15:32.537Z] [BOT] 💾 Saved posted_jobs.json: 2105 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:34.040Z] [BOT] 📍 [ROUTING] "Cloud Infrastructure Engineer" @ nominal
[2026-02-01T18:15:34.040Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:15:34.368Z] [BOT] ✅ Posted message: Cloud Infrastructure Engineer @ nominal in #💻・tech-jobs
  ✅ Industry: Cloud Infrastructure Engineer @ nominal
[2026-02-01T18:15:34.369Z] [BOT] 💾 Added channel posting: Cloud Infrastructure Engineer @ nominal → category channel (1 total channels)
[2026-02-01T18:15:34.369Z] [BOT] 💾 BEFORE MERGE: 2106 jobs in memory (cached)
[2026-02-01T18:15:34.419Z] [BOT] ✅ Loaded V2 database: 2105 jobs
💾 DISK STATE: 2105 jobs on disk
[2026-02-01T18:15:34.420Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2106
[2026-02-01T18:15:34.424Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:34.424Z] [BOT] 💾 AFTER MERGE: 2106 jobs (merged disk + memory)
[2026-02-01T18:15:34.425Z] [BOT] ✅ No jobs to archive (all 2106 jobs within 7-day window)
[2026-02-01T18:15:34.537Z] [BOT] 💾 Saved posted_jobs.json: 2106 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:39.040Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T18:15:39.041Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Mldev" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T18:15:39.041Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:15:39.335Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c
[2026-02-01T18:15:39.336Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T18:15:39.336Z] [BOT] 💾 BEFORE MERGE: 2107 jobs in memory (cached)
[2026-02-01T18:15:39.389Z] [BOT] ✅ Loaded V2 database: 2106 jobs
💾 DISK STATE: 2106 jobs on disk
[2026-02-01T18:15:39.389Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2107
[2026-02-01T18:15:39.393Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:39.393Z] [BOT] 💾 AFTER MERGE: 2107 jobs (merged disk + memory)
[2026-02-01T18:15:39.394Z] [BOT] ✅ No jobs to archive (all 2107 jobs within 7-day window)
[2026-02-01T18:15:39.528Z] [BOT] 💾 Saved posted_jobs.json: 2107 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:41.224Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:15:41.225Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T18:15:41.225Z] [BOT] 💾 BEFORE MERGE: 2107 jobs in memory (cached)
[2026-02-01T18:15:41.276Z] [BOT] ✅ Loaded V2 database: 2107 jobs
💾 DISK STATE: 2107 jobs on disk
[2026-02-01T18:15:41.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2107
[2026-02-01T18:15:41.280Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:15:41.280Z] [BOT] 💾 AFTER MERGE: 2107 jobs (merged disk + memory)
[2026-02-01T18:15:41.281Z] [BOT] ✅ No jobs to archive (all 2107 jobs within 7-day window)
[2026-02-01T18:15:41.390Z] [BOT] 💾 Saved posted_jobs.json: 2107 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:15:45.891Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T18:15:45.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_526c2242..." not found, but found as SHA256 "50ecdf9a7757b5a2"
[2026-02-01T18:15:45.892Z] [BOT] ⏭️  Skipping duplicate: JID_178672ec (posted within 7 days)
[2026-02-01T18:15:45.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6cc0a807..." not found, but found as SHA256 "d7623c2902728d44"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_c5bcf7a3-detail (posted within 7 days)
[2026-02-01T18:15:45.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd6d7396..." not found, but found as SHA256 "690db82e824225de"
[2026-02-01T18:15:45.893Z] [BOT] ⏭️  Skipping duplicate: JID_a2242605 (posted within 7 days)
[2026-02-01T18:15:45.894Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_33c84c96..." not found, but found as SHA256 "1f765e34b627da42"
⏭️  Skipping duplicate: JID_5e59fbea (posted within 7 days)
[2026-02-01T18:15:45.894Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4973c64c..." not found, but found as SHA256 "aabb1679ef1cf97a"
[2026-02-01T18:15:45.894Z] [BOT] ⏭️  Skipping duplicate: JID_8a19e16c (posted within 7 days)
[2026-02-01T18:15:45.894Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e7900843..." not found, but found as SHA256 "54ece3ee0616feb5"
[2026-02-01T18:15:45.894Z] [BOT] ⏭️  Skipping duplicate: JID_202cb693 (posted within 7 days)
[2026-02-01T18:15:45.895Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7197a52b..." not found, but found as SHA256 "2e245511a8d553e4"
[2026-02-01T18:15:45.895Z] [BOT] ⏭️  Skipping duplicate: JID_ef12ceb1 (posted within 7 days)
[2026-02-01T18:15:45.895Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c3217c0d..." not found, but found as SHA256 "b01a70cfdd117d74"
[2026-02-01T18:15:45.895Z] [BOT] ⏭️  Skipping duplicate: JID_ced21c5b (posted within 7 days)
[2026-02-01T18:15:45.895Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fda9bcbc-..." not found, but found as SHA256 "c6870a60a57d7f8a"
[2026-02-01T18:15:45.896Z] [BOT] ⏭️  Skipping duplicate: JID_fc164e2c (posted within 7 days)
[2026-02-01T18:15:45.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bfcbe112..." not found, but found as SHA256 "ddb4e7bd012d2522"
[2026-02-01T18:15:45.896Z] [BOT] ⏭️  Skipping duplicate: JID_01033c04 (posted within 7 days)
[2026-02-01T18:15:46.070Z] [BOT] ✅ Loaded pending queue: 2933 total (811 pending, 35 enriched, 2087 posted)
[2026-02-01T18:15:46.247Z] [BOT] ✅ Saved pending queue: 2933 total (811 pending, 25 enriched, 2097 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T18:15:46.349Z] [BOT] 📂 Loaded 12178 existing routing entries
[2026-02-01T18:15:46.478Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12188
   Timestamp: 2026-02-01T18:15:46.435Z
[2026-02-01T18:15:46.479Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T18:15:46.479Z] [BOT] Total attempts: 36
   Successful: 13
   Failed: 0
   Skipped: 23
[2026-02-01T18:15:46.479Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T18:15:46.479Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-02-01T18:15:46.479Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #🗽・JID_98d4f0de: 1 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🌉・JID_739bbc0b: 1 posts
[2026-02-01T18:15:46.479Z] [BOT] [STATS] Channel stats saved
[2026-02-01T18:15:46.479Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2107 jobs in memory (cached)
[2026-02-01T18:15:46.538Z] [BOT] ✅ Loaded V2 database: 2107 jobs
💾 DISK STATE: 2107 jobs on disk
[2026-02-01T18:15:46.539Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2107
[2026-02-01T18:15:46.542Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:15:46.543Z] [BOT] 💾 AFTER MERGE: 2107 jobs (merged disk + memory)
[2026-02-01T18:15:46.544Z] [BOT] ✅ No jobs to archive (all 2107 jobs within 7-day window)
[2026-02-01T18:15:46.686Z] [BOT] 💾 Saved posted_jobs.json: 2107 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T18:15:48.709Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2723) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*