# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T18:00:45.271Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:59:56.662Z] ========================================
[2026-02-01T17:59:56.663Z] Discord Bot Execution Log
[2026-02-01T17:59:56.664Z] Environment: GitHub Actions
[2026-02-01T17:59:56.664Z] Node Version: v20.20.0
[2026-02-01T17:59:56.664Z] ========================================
[2026-02-01T17:59:56.664Z] Environment Variables Check:
[2026-02-01T17:59:56.664Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:59:56.664Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:59:56.664Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:59:56.664Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:59:56.664Z] 
Multi-Channel Configuration:
[2026-02-01T17:59:56.664Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:59:56.665Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:59:56.665Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:59:56.665Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:59:56.665Z] 
Data Files Check:
[2026-02-01T17:59:56.666Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74479 bytes)
[2026-02-01T17:59:56.718Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10400265 bytes)
[2026-02-01T17:59:56.718Z] 
========================================
[2026-02-01T17:59:56.718Z] Starting Enhanced Discord Bot...
[2026-02-01T17:59:56.718Z] ========================================
[2026-02-01T17:59:57.308Z] [BOT] ✅ Loaded V2 database: 2087 jobs
[2026-02-01T17:59:57.929Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T17:59:57.929Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:59:57.930Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:59:58.041Z] [BOT] ✅ Loaded pending queue: 2948 total (821 pending, 50 enriched, 2077 posted)
[2026-02-01T17:59:58.041Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T17:59:58.042Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:59:58.043Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:59:58.043Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:59:58.043Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:59:58.043Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:59:58.044Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:59:58.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T17:59:58.044Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:59:58.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T17:59:58.045Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T17:59:58.045Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T17:59:58.045Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:59:58.045Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T17:59:58.046Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:59:58.046Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-02-01T17:59:58.046Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:59:58.046Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:59:58.061Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:59:58.062Z] [BOT] 🚫 Skipping blacklisted job: Senior Full-Stack Engineer - Product at railway
[2026-02-01T17:59:58.062Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
[2026-02-01T17:59:58.062Z] [BOT] 🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-01T17:59:58.062Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-01T17:59:58.062Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-01T17:59:58.180Z] [BOT] ✅ Loaded pending queue: 2948 total (821 pending, 50 enriched, 2077 posted)
[2026-02-01T17:59:58.388Z] [BOT] ✅ Saved pending queue: 2941 total (821 pending, 43 enriched, 2077 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-02-01T17:59:58.388Z] [BOT] 📋 After blacklist filter: 35 jobs (7 blacklisted)
📋 After data quality filter: 35 jobs (0 invalid)
[2026-02-01T17:59:58.389Z] [BOT] 📋 After multi-location grouping: 24 unique jobs to post
[2026-02-01T17:59:58.389Z] [BOT] (11 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Production Infrastructure @ Palantir: seattle, new york, washington, palo alto, denver
[2026-02-01T17:59:58.389Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:59:58.393Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T17:59:58.394Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Production Infrastructure" @ ORG_f56b7436
[2026-02-01T17:59:58.395Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:59:58.412Z] [BOT ERROR] (node:2747) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:59:58.831Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T17:59:58.831Z] [BOT] ✅ Industry: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436
[2026-02-01T17:59:58.832Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T17:59:58.832Z] [BOT] 💾 BEFORE MERGE: 2088 jobs in memory (cached)
[2026-02-01T17:59:58.870Z] [BOT] ✅ Loaded V2 database: 2087 jobs
💾 DISK STATE: 2087 jobs on disk
[2026-02-01T17:59:58.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2088
[2026-02-01T17:59:58.875Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:59:58.876Z] [BOT] 💾 AFTER MERGE: 2088 jobs (merged disk + memory)
[2026-02-01T17:59:58.877Z] [BOT] ✅ No jobs to archive (all 2088 jobs within 7-day window)
[2026-02-01T17:59:59.008Z] [BOT] 💾 Saved posted_jobs.json: 2088 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:00.832Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T18:00:00.833Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → location channel (2 total channels)
💾 BEFORE MERGE: 2088 jobs in memory (cached)
[2026-02-01T18:00:00.869Z] [BOT] ✅ Loaded V2 database: 2088 jobs
[2026-02-01T18:00:00.870Z] [BOT] 💾 DISK STATE: 2088 jobs on disk
[2026-02-01T18:00:00.870Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2088
[2026-02-01T18:00:00.878Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:00:00.879Z] [BOT] 💾 AFTER MERGE: 2088 jobs (merged disk + memory)
[2026-02-01T18:00:00.880Z] [BOT] ✅ No jobs to archive (all 2088 jobs within 7-day window)
[2026-02-01T18:00:00.983Z] [BOT] 💾 Saved posted_jobs.json: 2088 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:02.485Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer (Backend Rust)" @ N1
[2026-02-01T18:00:02.485Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:02.676Z] [BOT] ✅ Posted message: New Grad Software Engineer (Backend Rust) @ N1 in #💻・tech-jobs
  ✅ Industry: New Grad Software Engineer (Backend Rust) @ N1
[2026-02-01T18:00:02.677Z] [BOT] 💾 Added channel posting: New Grad Software Engineer (Backend Rust) @ N1 → category channel (1 total channels)
[2026-02-01T18:00:02.677Z] [BOT] 💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-01T18:00:02.712Z] [BOT] ✅ Loaded V2 database: 2088 jobs
💾 DISK STATE: 2088 jobs on disk
[2026-02-01T18:00:02.713Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-01T18:00:02.722Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:02.722Z] [BOT] 💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-01T18:00:02.723Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-02-01T18:00:02.825Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:04.608Z] [BOT] ✅ Posted message: New Grad Software Engineer (Backend Rust) @ N1 in #🗽・JID_98d4f0de
[2026-02-01T18:00:04.609Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:00:04.609Z] [BOT] 💾 Added channel posting: New Grad Software Engineer (Backend Rust) @ N1 → location channel (2 total channels)
[2026-02-01T18:00:04.609Z] [BOT] 💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-01T18:00:04.645Z] [BOT] ✅ Loaded V2 database: 2089 jobs
💾 DISK STATE: 2089 jobs on disk
[2026-02-01T18:00:04.645Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-01T18:00:04.654Z] [BOT] 🔀 Deep merged: New Grad Software Engineer (Backend Rust) @ N1 (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:00:04.655Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-01T18:00:04.656Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-02-01T18:00:04.756Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:06.257Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer (Full Stack)" @ N1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:06.443Z] [BOT] ✅ Posted message: New Grad Software Engineer (Full Stack) @ N1 in #💻・tech-jobs
  ✅ Industry: New Grad Software Engineer (Full Stack) @ N1
[2026-02-01T18:00:06.444Z] [BOT] 💾 Added channel posting: New Grad Software Engineer (Full Stack) @ N1 → category channel (1 total channels)
[2026-02-01T18:00:06.445Z] [BOT] 💾 BEFORE MERGE: 2090 jobs in memory (cached)
[2026-02-01T18:00:06.487Z] [BOT] ✅ Loaded V2 database: 2089 jobs
💾 DISK STATE: 2089 jobs on disk
[2026-02-01T18:00:06.488Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2090
[2026-02-01T18:00:06.492Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:06.492Z] [BOT] 💾 AFTER MERGE: 2090 jobs (merged disk + memory)
[2026-02-01T18:00:06.500Z] [BOT] ✅ No jobs to archive (all 2090 jobs within 7-day window)
[2026-02-01T18:00:06.617Z] [BOT] 💾 Saved posted_jobs.json: 2090 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:08.321Z] [BOT] ✅ Posted message: New Grad Software Engineer (Full Stack) @ N1 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:00:08.322Z] [BOT] 💾 Added channel posting: New Grad Software Engineer (Full Stack) @ N1 → location channel (2 total channels)
[2026-02-01T18:00:08.322Z] [BOT] 💾 BEFORE MERGE: 2090 jobs in memory (cached)
[2026-02-01T18:00:08.356Z] [BOT] ✅ Loaded V2 database: 2090 jobs
💾 DISK STATE: 2090 jobs on disk
[2026-02-01T18:00:08.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2090
[2026-02-01T18:00:08.360Z] [BOT] 🔀 Deep merged: New Grad Software Engineer (Full Stack) @ N1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:00:08.360Z] [BOT] 💾 AFTER MERGE: 2090 jobs (merged disk + memory)
[2026-02-01T18:00:08.362Z] [BOT] ✅ No jobs to archive (all 2090 jobs within 7-day window)
[2026-02-01T18:00:08.478Z] [BOT] 💾 Saved posted_jobs.json: 2090 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:09.975Z] [BOT] 📍 [ROUTING] "Multigres Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:10.140Z] [BOT] ✅ Posted message: Multigres Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Multigres Engineer @ supabase
[2026-02-01T18:00:10.141Z] [BOT] 💾 Added channel posting: Multigres Engineer @ supabase → category channel (1 total channels)
[2026-02-01T18:00:10.141Z] [BOT] 💾 BEFORE MERGE: 2091 jobs in memory (cached)
[2026-02-01T18:00:10.176Z] [BOT] ✅ Loaded V2 database: 2090 jobs
💾 DISK STATE: 2090 jobs on disk
[2026-02-01T18:00:10.177Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2091
[2026-02-01T18:00:10.180Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:10.180Z] [BOT] 💾 AFTER MERGE: 2091 jobs (merged disk + memory)
[2026-02-01T18:00:10.181Z] [BOT] ✅ No jobs to archive (all 2091 jobs within 7-day window)
[2026-02-01T18:00:10.278Z] [BOT] 💾 Saved posted_jobs.json: 2091 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:12.020Z] [BOT] ✅ Posted message: Multigres Engineer @ supabase in #🏠・JID_ead674af
[2026-02-01T18:00:12.020Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:00:12.020Z] [BOT] 💾 Added channel posting: Multigres Engineer @ supabase → location channel (2 total channels)
[2026-02-01T18:00:12.020Z] [BOT] 💾 BEFORE MERGE: 2091 jobs in memory (cached)
[2026-02-01T18:00:12.056Z] [BOT] ✅ Loaded V2 database: 2091 jobs
💾 DISK STATE: 2091 jobs on disk
[2026-02-01T18:00:12.056Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2091
[2026-02-01T18:00:12.064Z] [BOT] 🔀 Deep merged: Multigres Engineer @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:00:12.064Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2091 jobs (merged disk + memory)
[2026-02-01T18:00:12.065Z] [BOT] ✅ No jobs to archive (all 2091 jobs within 7-day window)
[2026-02-01T18:00:12.166Z] [BOT] 💾 Saved posted_jobs.json: 2091 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:13.667Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (APAC)" @ supabase
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:13.868Z] [BOT] ✅ Posted message: Customer Solution Architect (APAC) @ supabase in #💻・tech-jobs
[2026-02-01T18:00:13.868Z] [BOT] ✅ Industry: Customer Solution Architect (APAC) @ supabase
[2026-02-01T18:00:13.869Z] [BOT] 💾 Added channel posting: Customer Solution Architect (APAC) @ supabase → category channel (1 total channels)
[2026-02-01T18:00:13.869Z] [BOT] 💾 BEFORE MERGE: 2092 jobs in memory (cached)
[2026-02-01T18:00:13.905Z] [BOT] ✅ Loaded V2 database: 2091 jobs
💾 DISK STATE: 2091 jobs on disk
[2026-02-01T18:00:13.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2092
[2026-02-01T18:00:13.914Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:13.914Z] [BOT] 💾 AFTER MERGE: 2092 jobs (merged disk + memory)
[2026-02-01T18:00:13.915Z] [BOT] ✅ No jobs to archive (all 2092 jobs within 7-day window)
[2026-02-01T18:00:14.016Z] [BOT] 💾 Saved posted_jobs.json: 2092 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:15.659Z] [BOT] ✅ Posted message: Customer Solution Architect (APAC) @ supabase in #🏠・JID_ead674af
[2026-02-01T18:00:15.659Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:00:15.659Z] [BOT] 💾 Added channel posting: Customer Solution Architect (APAC) @ supabase → location channel (2 total channels)
[2026-02-01T18:00:15.659Z] [BOT] 💾 BEFORE MERGE: 2092 jobs in memory (cached)
[2026-02-01T18:00:15.696Z] [BOT] ✅ Loaded V2 database: 2092 jobs
💾 DISK STATE: 2092 jobs on disk
[2026-02-01T18:00:15.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2092
[2026-02-01T18:00:15.705Z] [BOT] 🔀 Deep merged: Customer Solution Architect (APAC) @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:00:15.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2092 jobs (merged disk + memory)
[2026-02-01T18:00:15.706Z] [BOT] ✅ No jobs to archive (all 2092 jobs within 7-day window)
[2026-02-01T18:00:15.808Z] [BOT] 💾 Saved posted_jobs.json: 2092 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:17.310Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:17.506Z] [BOT] ✅ Posted message: Support Engineer (EMEA) @ supabase in #💻・tech-jobs
[2026-02-01T18:00:17.506Z] [BOT] ✅ Industry: Support Engineer (EMEA) @ supabase
[2026-02-01T18:00:17.507Z] [BOT] 💾 Added channel posting: Support Engineer (EMEA) @ supabase → category channel (1 total channels)
[2026-02-01T18:00:17.507Z] [BOT] 💾 BEFORE MERGE: 2093 jobs in memory (cached)
[2026-02-01T18:00:17.543Z] [BOT] ✅ Loaded V2 database: 2092 jobs
💾 DISK STATE: 2092 jobs on disk
[2026-02-01T18:00:17.544Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2093
[2026-02-01T18:00:17.551Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:17.551Z] [BOT] 💾 AFTER MERGE: 2093 jobs (merged disk + memory)
[2026-02-01T18:00:17.552Z] [BOT] ✅ No jobs to archive (all 2093 jobs within 7-day window)
[2026-02-01T18:00:17.654Z] [BOT] 💾 Saved posted_jobs.json: 2093 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:19.280Z] [BOT] ✅ Posted message: Support Engineer (EMEA) @ supabase in #🏠・JID_ead674af
[2026-02-01T18:00:19.280Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:00:19.280Z] [BOT] 💾 Added channel posting: Support Engineer (EMEA) @ supabase → location channel (2 total channels)
[2026-02-01T18:00:19.280Z] [BOT] 💾 BEFORE MERGE: 2093 jobs in memory (cached)
[2026-02-01T18:00:19.316Z] [BOT] ✅ Loaded V2 database: 2093 jobs
💾 DISK STATE: 2093 jobs on disk
[2026-02-01T18:00:19.317Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2093
[2026-02-01T18:00:19.325Z] [BOT] 🔀 Deep merged: Support Engineer (EMEA) @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:00:19.325Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2093 jobs (merged disk + memory)
[2026-02-01T18:00:19.326Z] [BOT] ✅ No jobs to archive (all 2093 jobs within 7-day window)
[2026-02-01T18:00:19.432Z] [BOT] 💾 Saved posted_jobs.json: 2093 active jobs
[2026-02-01T18:00:19.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:20.934Z] [BOT] 📍 [ROUTING] "Business Development Representative (USA)" @ supabase
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:21.211Z] [BOT] ✅ Posted message: Business Development Representative (USA) @ supabase in #💻・tech-jobs
  ✅ Industry: Business Development Representative (USA) @ supabase
[2026-02-01T18:00:21.212Z] [BOT] 💾 Added channel posting: Business Development Representative (USA) @ supabase → category channel (1 total channels)
[2026-02-01T18:00:21.212Z] [BOT] 💾 BEFORE MERGE: 2094 jobs in memory (cached)
[2026-02-01T18:00:21.247Z] [BOT] ✅ Loaded V2 database: 2093 jobs
💾 DISK STATE: 2093 jobs on disk
[2026-02-01T18:00:21.248Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2094
[2026-02-01T18:00:21.251Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:21.251Z] [BOT] 💾 AFTER MERGE: 2094 jobs (merged disk + memory)
[2026-02-01T18:00:21.252Z] [BOT] ✅ No jobs to archive (all 2094 jobs within 7-day window)
[2026-02-01T18:00:21.345Z] [BOT] 💾 Saved posted_jobs.json: 2094 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:23.054Z] [BOT] ✅ Posted message: Business Development Representative (USA) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:00:23.055Z] [BOT] 💾 Added channel posting: Business Development Representative (USA) @ supabase → location channel (2 total channels)
[2026-02-01T18:00:23.055Z] [BOT] 💾 BEFORE MERGE: 2094 jobs in memory (cached)
[2026-02-01T18:00:23.090Z] [BOT] ✅ Loaded V2 database: 2094 jobs
💾 DISK STATE: 2094 jobs on disk
[2026-02-01T18:00:23.090Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2094
[2026-02-01T18:00:23.096Z] [BOT] 🔀 Deep merged: Business Development Representative (USA) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:00:23.096Z] [BOT] 💾 AFTER MERGE: 2094 jobs (merged disk + memory)
[2026-02-01T18:00:23.097Z] [BOT] ✅ No jobs to archive (all 2094 jobs within 7-day window)
[2026-02-01T18:00:23.190Z] [BOT] 💾 Saved posted_jobs.json: 2094 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:24.692Z] [BOT] 📍 [ROUTING] "Production Engineer (PE)" @ nominal
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:24.857Z] [BOT] ✅ Posted message: Production Engineer (PE) @ nominal in #💻・tech-jobs
  ✅ Industry: Production Engineer (PE) @ nominal
[2026-02-01T18:00:24.858Z] [BOT] 💾 Added channel posting: Production Engineer (PE) @ nominal → category channel (1 total channels)
[2026-02-01T18:00:24.858Z] [BOT] 💾 BEFORE MERGE: 2095 jobs in memory (cached)
[2026-02-01T18:00:24.892Z] [BOT] ✅ Loaded V2 database: 2094 jobs
[2026-02-01T18:00:24.893Z] [BOT] 💾 DISK STATE: 2094 jobs on disk
[2026-02-01T18:00:24.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2095
[2026-02-01T18:00:24.903Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:24.905Z] [BOT] 💾 AFTER MERGE: 2095 jobs (merged disk + memory)
✅ No jobs to archive (all 2095 jobs within 7-day window)
[2026-02-01T18:00:25.017Z] [BOT] 💾 Saved posted_jobs.json: 2095 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:26.678Z] [BOT] ✅ Posted message: Production Engineer (PE) @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:00:26.678Z] [BOT] 💾 Added channel posting: Production Engineer (PE) @ nominal → location channel (2 total channels)
[2026-02-01T18:00:26.679Z] [BOT] 💾 BEFORE MERGE: 2095 jobs in memory (cached)
[2026-02-01T18:00:26.714Z] [BOT] ✅ Loaded V2 database: 2095 jobs
💾 DISK STATE: 2095 jobs on disk
[2026-02-01T18:00:26.714Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2095
[2026-02-01T18:00:26.718Z] [BOT] 🔀 Deep merged: Production Engineer (PE) @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:00:26.718Z] [BOT] 💾 AFTER MERGE: 2095 jobs (merged disk + memory)
[2026-02-01T18:00:26.719Z] [BOT] ✅ No jobs to archive (all 2095 jobs within 7-day window)
[2026-02-01T18:00:26.821Z] [BOT] 💾 Saved posted_jobs.json: 2095 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:28.323Z] [BOT] 📍 [ROUTING] "Production Engineer" @ nominal
[2026-02-01T18:00:28.323Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:00:28.518Z] [BOT] ✅ Posted message: Production Engineer @ nominal in #💻・tech-jobs
  ✅ Industry: Production Engineer @ nominal
[2026-02-01T18:00:28.519Z] [BOT] 💾 Added channel posting: Production Engineer @ nominal → category channel (1 total channels)
[2026-02-01T18:00:28.519Z] [BOT] 💾 BEFORE MERGE: 2096 jobs in memory (cached)
[2026-02-01T18:00:28.554Z] [BOT] ✅ Loaded V2 database: 2095 jobs
💾 DISK STATE: 2095 jobs on disk
[2026-02-01T18:00:28.554Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2096
[2026-02-01T18:00:28.558Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:28.558Z] [BOT] 💾 AFTER MERGE: 2096 jobs (merged disk + memory)
[2026-02-01T18:00:28.559Z] [BOT] ✅ No jobs to archive (all 2096 jobs within 7-day window)
[2026-02-01T18:00:28.656Z] [BOT] 💾 Saved posted_jobs.json: 2096 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:30.308Z] [BOT] ✅ Posted message: Production Engineer @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:00:30.308Z] [BOT] 💾 Added channel posting: Production Engineer @ nominal → location channel (2 total channels)
[2026-02-01T18:00:30.308Z] [BOT] 💾 BEFORE MERGE: 2096 jobs in memory (cached)
[2026-02-01T18:00:30.345Z] [BOT] ✅ Loaded V2 database: 2096 jobs
💾 DISK STATE: 2096 jobs on disk
[2026-02-01T18:00:30.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2096
[2026-02-01T18:00:30.349Z] [BOT] 🔀 Deep merged: Production Engineer @ nominal (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:00:30.349Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2096 jobs (merged disk + memory)
[2026-02-01T18:00:30.350Z] [BOT] ✅ No jobs to archive (all 2096 jobs within 7-day window)
[2026-02-01T18:00:30.451Z] [BOT] 💾 Saved posted_jobs.json: 2096 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:34.953Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T18:00:34.954Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Training" @ ORG_08c9a13c
[2026-02-01T18:00:34.954Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:00:35.180Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c
[2026-02-01T18:00:35.181Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T18:00:35.181Z] [BOT] 💾 BEFORE MERGE: 2097 jobs in memory (cached)
[2026-02-01T18:00:35.229Z] [BOT] ✅ Loaded V2 database: 2096 jobs
💾 DISK STATE: 2096 jobs on disk
[2026-02-01T18:00:35.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2097
[2026-02-01T18:00:35.233Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:35.233Z] [BOT] 💾 AFTER MERGE: 2097 jobs (merged disk + memory)
[2026-02-01T18:00:35.234Z] [BOT] ✅ No jobs to archive (all 2097 jobs within 7-day window)
[2026-02-01T18:00:35.342Z] [BOT] 💾 Saved posted_jobs.json: 2097 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:37.075Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T18:00:37.076Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:00:37.076Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T18:00:37.076Z] [BOT] 💾 BEFORE MERGE: 2097 jobs in memory (cached)
[2026-02-01T18:00:37.119Z] [BOT] ✅ Loaded V2 database: 2097 jobs
💾 DISK STATE: 2097 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2097
[2026-02-01T18:00:37.129Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:00:37.129Z] [BOT] 💾 AFTER MERGE: 2097 jobs (merged disk + memory)
[2026-02-01T18:00:37.131Z] [BOT] ✅ No jobs to archive (all 2097 jobs within 7-day window)
[2026-02-01T18:00:37.224Z] [BOT] 💾 Saved posted_jobs.json: 2097 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:41.726Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T18:00:41.728Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1613df5..." not found, but found as SHA256 "119b41f9cbb8af3b"
[2026-02-01T18:00:41.728Z] [BOT] ⏭️  Skipping duplicate: JID_48f4c15f (posted within 7 days)
[2026-02-01T18:00:41.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7fd322b..." not found, but found as SHA256 "9d505c1a75f75bdd"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_afd421e9-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_17438e03..." not found, but found as SHA256 "19eb79bbce4534e9"
⏭️  Skipping duplicate: JID_ad406d50 (posted within 7 days)
[2026-02-01T18:00:41.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_675af00c..." not found, but found as SHA256 "88a488db2cb5c377"
⏭️  Skipping duplicate: JID_a9174489 (posted within 7 days)
[2026-02-01T18:00:41.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d2516bbb-..." not found, but found as SHA256 "89c112222a3ac988"
[2026-02-01T18:00:41.729Z] [BOT] ⏭️  Skipping duplicate: JID_c6c11003 (posted within 7 days)
[2026-02-01T18:00:41.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3a3f79f-..." not found, but found as SHA256 "7557de8acdcb6b28"
[2026-02-01T18:00:41.730Z] [BOT] ⏭️  Skipping duplicate: JID_d26bb4d7 (posted within 7 days)
[2026-02-01T18:00:41.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa1d7123-..." not found, but found as SHA256 "93e1f5db9d2c7ced"
⏭️  Skipping duplicate: JID_3ecc5e05 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_018c7dbf-..." not found, but found as SHA256 "aec126eccd9e85a9"
⏭️  Skipping duplicate: JID_18c96a34 (posted within 7 days)
[2026-02-01T18:00:41.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4ae78d3f..." not found, but found as SHA256 "23131c7f143c07e5"
[2026-02-01T18:00:41.730Z] [BOT] ⏭️  Skipping duplicate: JID_d93b8c9d (posted within 7 days)
[2026-02-01T18:00:41.731Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96028b11..." not found, but found as SHA256 "ec22d7083d6c7438"
[2026-02-01T18:00:41.731Z] [BOT] ⏭️  Skipping duplicate: JID_590d3304 (posted within 7 days)
[2026-02-01T18:00:41.830Z] [BOT] ✅ Loaded pending queue: 2941 total (821 pending, 43 enriched, 2077 posted)
[2026-02-01T18:00:42.030Z] [BOT] ✅ Saved pending queue: 2941 total (821 pending, 33 enriched, 2087 posted)
[2026-02-01T18:00:42.031Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T18:00:42.122Z] [BOT] 📂 Loaded 12168 existing routing entries
[2026-02-01T18:00:42.263Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12178
   Timestamp: 2026-02-01T18:00:42.214Z
[2026-02-01T18:00:42.264Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 35
[2026-02-01T18:00:42.264Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 15
[2026-02-01T18:00:42.264Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T18:00:42.264Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #🗽・JID_98d4f0de: 4 posts
[2026-02-01T18:00:42.264Z] [BOT] 3. #🏠・JID_ead674af: 4 posts
     4. #🌲・JID_efdf5921: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T18:00:42.264Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T18:00:42.265Z] [BOT] 💾 BEFORE MERGE: 2097 jobs in memory (cached)
[2026-02-01T18:00:42.307Z] [BOT] ✅ Loaded V2 database: 2097 jobs
💾 DISK STATE: 2097 jobs on disk
[2026-02-01T18:00:42.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2097
[2026-02-01T18:00:42.311Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:00:42.311Z] [BOT] 💾 AFTER MERGE: 2097 jobs (merged disk + memory)
[2026-02-01T18:00:42.313Z] [BOT] ✅ No jobs to archive (all 2097 jobs within 7-day window)
[2026-02-01T18:00:42.418Z] [BOT] 💾 Saved posted_jobs.json: 2097 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:00:42.418Z] [BOT] ✅ Database saved successfully
[2026-02-01T18:00:44.458Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2747) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*