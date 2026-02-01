# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T12:34:16.034Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T12:33:25.505Z] ========================================
[2026-02-01T12:33:25.507Z] Discord Bot Execution Log
[2026-02-01T12:33:25.507Z] Environment: GitHub Actions
[2026-02-01T12:33:25.507Z] Node Version: v20.20.0
[2026-02-01T12:33:25.507Z] ========================================
[2026-02-01T12:33:25.507Z] Environment Variables Check:
[2026-02-01T12:33:25.507Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T12:33:25.507Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T12:33:25.507Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T12:33:25.507Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T12:33:25.507Z] 
Multi-Channel Configuration:
[2026-02-01T12:33:25.507Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T12:33:25.508Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T12:33:25.508Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:33:25.508Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T12:33:25.508Z] 
Data Files Check:
[2026-02-01T12:33:25.509Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69445 bytes)
[2026-02-01T12:33:25.559Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9825417 bytes)
[2026-02-01T12:33:25.559Z] 
========================================
[2026-02-01T12:33:25.559Z] Starting Enhanced Discord Bot...
[2026-02-01T12:33:25.559Z] ========================================
[2026-02-01T12:33:26.141Z] [BOT] ✅ Loaded V2 database: 1857 jobs
[2026-02-01T12:33:26.789Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T12:33:26.789Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T12:33:26.789Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T12:33:26.901Z] [BOT] ✅ Loaded pending queue: 2948 total (1051 pending, 50 enriched, 1847 posted)
[2026-02-01T12:33:26.901Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:33:26.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T12:33:26.903Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:33:26.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T12:33:26.904Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T12:33:26.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T12:33:26.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T12:33:26.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T12:33:26.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T12:33:26.905Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T12:33:26.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T12:33:26.906Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T12:33:26.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T12:33:26.906Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T12:33:26.921Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T12:33:26.921Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T12:33:26.921Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T12:33:26.922Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-02-01T12:33:26.922Z] [BOT] (10 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
[2026-02-01T12:33:26.922Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego, dayton, new york, dallas, casa grande
   - Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san antonio, tampa
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T12:33:26.926Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T12:33:26.927Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 2" @ ORG_52575429 Consulting
[2026-02-01T12:33:26.927Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T12:33:26.945Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T12:33:27.228Z] [BOT] ✅ Posted message: Geospatial Analyst 2 @ ORG_52575429 Consulting in #💰・finance-jobs
[2026-02-01T12:33:27.228Z] [BOT] ✅ Industry: Geospatial Analyst 2 @ ORG_52575429 Consulting
[2026-02-01T12:33:27.230Z] [BOT] 💾 Added channel posting: Geospatial Analyst 2 @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T12:33:27.230Z] [BOT] 💾 BEFORE MERGE: 1858 jobs in memory (cached)
[2026-02-01T12:33:27.270Z] [BOT] ✅ Loaded V2 database: 1857 jobs
💾 DISK STATE: 1857 jobs on disk
[2026-02-01T12:33:27.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1858
[2026-02-01T12:33:27.275Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:27.275Z] [BOT] 💾 AFTER MERGE: 1858 jobs (merged disk + memory)
[2026-02-01T12:33:27.276Z] [BOT] ✅ No jobs to archive (all 1858 jobs within 7-day window)
[2026-02-01T12:33:27.411Z] [BOT] 💾 Saved posted_jobs.json: 1858 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:29.157Z] [BOT] ✅ Posted message: Geospatial Analyst 2 @ ORG_52575429 Consulting in #📍・JID_6daed763
[2026-02-01T12:33:29.157Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T12:33:29.158Z] [BOT] 💾 Added channel posting: Geospatial Analyst 2 @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T12:33:29.158Z] [BOT] 💾 BEFORE MERGE: 1858 jobs in memory (cached)
[2026-02-01T12:33:29.194Z] [BOT] ✅ Loaded V2 database: 1858 jobs
[2026-02-01T12:33:29.195Z] [BOT] 💾 DISK STATE: 1858 jobs on disk
[2026-02-01T12:33:29.195Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1858
[2026-02-01T12:33:29.199Z] [BOT] 🔀 Deep merged: Geospatial Analyst 2 @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:33:29.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1858 jobs (merged disk + memory)
[2026-02-01T12:33:29.200Z] [BOT] ✅ No jobs to archive (all 1858 jobs within 7-day window)
[2026-02-01T12:33:29.298Z] [BOT] 💾 Saved posted_jobs.json: 1858 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:33.799Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T12:33:33.800Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-02-01T12:33:33.800Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:34.212Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T12:33:34.212Z] [BOT] ✅ Industry: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c
[2026-02-01T12:33:34.212Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:33:34.213Z] [BOT] 💾 BEFORE MERGE: 1859 jobs in memory (cached)
[2026-02-01T12:33:34.246Z] [BOT] ✅ Loaded V2 database: 1858 jobs
💾 DISK STATE: 1858 jobs on disk
[2026-02-01T12:33:34.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1859
[2026-02-01T12:33:34.250Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1859 jobs (merged disk + memory)
[2026-02-01T12:33:34.252Z] [BOT] ✅ No jobs to archive (all 1859 jobs within 7-day window)
[2026-02-01T12:33:34.371Z] [BOT] 💾 Saved posted_jobs.json: 1859 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:36.315Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T12:33:36.315Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:33:36.315Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:33:36.316Z] [BOT] 💾 BEFORE MERGE: 1859 jobs in memory (cached)
[2026-02-01T12:33:36.349Z] [BOT] ✅ Loaded V2 database: 1859 jobs
💾 DISK STATE: 1859 jobs on disk
[2026-02-01T12:33:36.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1859
[2026-02-01T12:33:36.353Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:33:36.353Z] [BOT] 💾 AFTER MERGE: 1859 jobs (merged disk + memory)
[2026-02-01T12:33:36.355Z] [BOT] ✅ No jobs to archive (all 1859 jobs within 7-day window)
[2026-02-01T12:33:36.458Z] [BOT] 💾 Saved posted_jobs.json: 1859 active jobs
[2026-02-01T12:33:36.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:37.960Z] [BOT] 📍 [ROUTING] "Sales Development Representative" @ nominal
   Category: TECH (default)
[2026-02-01T12:33:37.960Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:38.111Z] [BOT] ✅ Posted message: Sales Development Representative @ nominal in #💻・tech-jobs
[2026-02-01T12:33:38.111Z] [BOT] ✅ Industry: Sales Development Representative @ nominal
[2026-02-01T12:33:38.112Z] [BOT] 💾 Added channel posting: Sales Development Representative @ nominal → category channel (1 total channels)
💾 BEFORE MERGE: 1860 jobs in memory (cached)
[2026-02-01T12:33:38.147Z] [BOT] ✅ Loaded V2 database: 1859 jobs
💾 DISK STATE: 1859 jobs on disk
[2026-02-01T12:33:38.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1860
[2026-02-01T12:33:38.152Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:38.152Z] [BOT] 💾 AFTER MERGE: 1860 jobs (merged disk + memory)
[2026-02-01T12:33:38.154Z] [BOT] ✅ No jobs to archive (all 1860 jobs within 7-day window)
[2026-02-01T12:33:38.251Z] [BOT] 💾 Saved posted_jobs.json: 1860 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:39.753Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_efa0389a Hotels
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:39.995Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_efa0389a Hotels in #💻・tech-jobs
[2026-02-01T12:33:39.995Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_efa0389a Hotels
[2026-02-01T12:33:39.996Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_efa0389a Hotels → category channel (1 total channels)
[2026-02-01T12:33:39.996Z] [BOT] 💾 BEFORE MERGE: 1861 jobs in memory (cached)
[2026-02-01T12:33:40.031Z] [BOT] ✅ Loaded V2 database: 1860 jobs
💾 DISK STATE: 1860 jobs on disk
[2026-02-01T12:33:40.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1861
[2026-02-01T12:33:40.035Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:40.035Z] [BOT] 💾 AFTER MERGE: 1861 jobs (merged disk + memory)
[2026-02-01T12:33:40.036Z] [BOT] ✅ No jobs to archive (all 1861 jobs within 7-day window)
[2026-02-01T12:33:40.133Z] [BOT] 💾 Saved posted_jobs.json: 1861 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:41.918Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_efa0389a Hotels in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:33:41.919Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_efa0389a Hotels → location channel (2 total channels)
[2026-02-01T12:33:41.919Z] [BOT] 💾 BEFORE MERGE: 1861 jobs in memory (cached)
[2026-02-01T12:33:41.953Z] [BOT] ✅ Loaded V2 database: 1861 jobs
💾 DISK STATE: 1861 jobs on disk
[2026-02-01T12:33:41.954Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1861
[2026-02-01T12:33:41.957Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_efa0389a Hotels (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:33:41.957Z] [BOT] 💾 AFTER MERGE: 1861 jobs (merged disk + memory)
[2026-02-01T12:33:41.959Z] [BOT] ✅ No jobs to archive (all 1861 jobs within 7-day window)
[2026-02-01T12:33:42.064Z] [BOT] 💾 Saved posted_jobs.json: 1861 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:43.566Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_8004e881
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:43.802Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_8004e881 in #💻・tech-jobs
[2026-02-01T12:33:43.803Z] [BOT] ✅ Industry: Software Engineer I @ ORG_8004e881
[2026-02-01T12:33:43.804Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_8004e881 → category channel (1 total channels)
[2026-02-01T12:33:43.804Z] [BOT] 💾 BEFORE MERGE: 1862 jobs in memory (cached)
[2026-02-01T12:33:43.841Z] [BOT] ✅ Loaded V2 database: 1861 jobs
[2026-02-01T12:33:43.843Z] [BOT] 💾 DISK STATE: 1861 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1862
[2026-02-01T12:33:43.855Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:43.856Z] [BOT] 💾 AFTER MERGE: 1862 jobs (merged disk + memory)
[2026-02-01T12:33:43.857Z] [BOT] ✅ No jobs to archive (all 1862 jobs within 7-day window)
[2026-02-01T12:33:43.949Z] [BOT] 💾 Saved posted_jobs.json: 1862 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:45.693Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_8004e881 in #🌲・JID_efdf5921
[2026-02-01T12:33:45.693Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T12:33:45.693Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_8004e881 → location channel (2 total channels)
[2026-02-01T12:33:45.693Z] [BOT] 💾 BEFORE MERGE: 1862 jobs in memory (cached)
[2026-02-01T12:33:45.727Z] [BOT] ✅ Loaded V2 database: 1862 jobs
💾 DISK STATE: 1862 jobs on disk
[2026-02-01T12:33:45.727Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1862
[2026-02-01T12:33:45.730Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_8004e881 (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:33:45.730Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1862 jobs (merged disk + memory)
[2026-02-01T12:33:45.731Z] [BOT] ✅ No jobs to archive (all 1862 jobs within 7-day window)
[2026-02-01T12:33:45.828Z] [BOT] 💾 Saved posted_jobs.json: 1862 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:47.330Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
[2026-02-01T12:33:47.330Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:47.569Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-02-01T12:33:47.569Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-02-01T12:33:47.569Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-02-01T12:33:47.570Z] [BOT] 💾 BEFORE MERGE: 1863 jobs in memory (cached)
[2026-02-01T12:33:47.606Z] [BOT] ✅ Loaded V2 database: 1862 jobs
💾 DISK STATE: 1862 jobs on disk
[2026-02-01T12:33:47.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1863
[2026-02-01T12:33:47.610Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:47.610Z] [BOT] 💾 AFTER MERGE: 1863 jobs (merged disk + memory)
[2026-02-01T12:33:47.611Z] [BOT] ✅ No jobs to archive (all 1863 jobs within 7-day window)
[2026-02-01T12:33:47.722Z] [BOT] 💾 Saved posted_jobs.json: 1863 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:49.380Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:33:49.380Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems → location channel (2 total channels)
[2026-02-01T12:33:49.380Z] [BOT] 💾 BEFORE MERGE: 1863 jobs in memory (cached)
[2026-02-01T12:33:49.413Z] [BOT] ✅ Loaded V2 database: 1863 jobs
💾 DISK STATE: 1863 jobs on disk
[2026-02-01T12:33:49.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1863
[2026-02-01T12:33:49.417Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:33:49.417Z] [BOT] 💾 AFTER MERGE: 1863 jobs (merged disk + memory)
[2026-02-01T12:33:49.419Z] [BOT] ✅ No jobs to archive (all 1863 jobs within 7-day window)
[2026-02-01T12:33:49.506Z] [BOT] 💾 Saved posted_jobs.json: 1863 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:51.008Z] [BOT] 📍 [ROUTING] "Entry Level Flight Simulation Software Engineer" @ ORG_6181447bing
   Category: TECH (matched: "software")
[2026-02-01T12:33:51.008Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:51.371Z] [BOT] ✅ Posted message: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing in #💻・tech-jobs
[2026-02-01T12:33:51.371Z] [BOT] ✅ Industry: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing
[2026-02-01T12:33:51.372Z] [BOT] 💾 Added channel posting: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing → category channel (1 total channels)
[2026-02-01T12:33:51.372Z] [BOT] 💾 BEFORE MERGE: 1864 jobs in memory (cached)
[2026-02-01T12:33:51.407Z] [BOT] ✅ Loaded V2 database: 1863 jobs
💾 DISK STATE: 1863 jobs on disk
[2026-02-01T12:33:51.407Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1864
[2026-02-01T12:33:51.410Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:51.411Z] [BOT] 💾 AFTER MERGE: 1864 jobs (merged disk + memory)
[2026-02-01T12:33:51.412Z] [BOT] ✅ No jobs to archive (all 1864 jobs within 7-day window)
[2026-02-01T12:33:51.515Z] [BOT] 💾 Saved posted_jobs.json: 1864 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:53.269Z] [BOT] ✅ Posted message: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing in #🌉・JID_739bbc0b
[2026-02-01T12:33:53.269Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:33:53.269Z] [BOT] 💾 Added channel posting: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing → location channel (2 total channels)
[2026-02-01T12:33:53.269Z] [BOT] 💾 BEFORE MERGE: 1864 jobs in memory (cached)
[2026-02-01T12:33:53.304Z] [BOT] ✅ Loaded V2 database: 1864 jobs
💾 DISK STATE: 1864 jobs on disk
[2026-02-01T12:33:53.304Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1864
[2026-02-01T12:33:53.307Z] [BOT] 🔀 Deep merged: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:33:53.307Z] [BOT] 💾 AFTER MERGE: 1864 jobs (merged disk + memory)
[2026-02-01T12:33:53.308Z] [BOT] ✅ No jobs to archive (all 1864 jobs within 7-day window)
[2026-02-01T12:33:53.410Z] [BOT] 💾 Saved posted_jobs.json: 1864 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:54.913Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-02-01T12:33:54.913Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:55.121Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
[2026-02-01T12:33:55.121Z] [BOT] ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-02-01T12:33:55.122Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → category channel (1 total channels)
[2026-02-01T12:33:55.122Z] [BOT] 💾 BEFORE MERGE: 1865 jobs in memory (cached)
[2026-02-01T12:33:55.156Z] [BOT] ✅ Loaded V2 database: 1864 jobs
💾 DISK STATE: 1864 jobs on disk
[2026-02-01T12:33:55.157Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1865
[2026-02-01T12:33:55.160Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1865 jobs (merged disk + memory)
[2026-02-01T12:33:55.161Z] [BOT] ✅ No jobs to archive (all 1865 jobs within 7-day window)
[2026-02-01T12:33:55.264Z] [BOT] 💾 Saved posted_jobs.json: 1865 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:56.960Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #🌉・JID_739bbc0b
[2026-02-01T12:33:56.960Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:33:56.961Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → location channel (2 total channels)
[2026-02-01T12:33:56.961Z] [BOT] 💾 BEFORE MERGE: 1865 jobs in memory (cached)
[2026-02-01T12:33:56.995Z] [BOT] ✅ Loaded V2 database: 1865 jobs
💾 DISK STATE: 1865 jobs on disk
[2026-02-01T12:33:56.995Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1865
[2026-02-01T12:33:56.998Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_7b717950 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:33:56.998Z] [BOT] 💾 AFTER MERGE: 1865 jobs (merged disk + memory)
[2026-02-01T12:33:56.999Z] [BOT] ✅ No jobs to archive (all 1865 jobs within 7-day window)
[2026-02-01T12:33:57.110Z] [BOT] 💾 Saved posted_jobs.json: 1865 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:33:58.612Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_fee50aac
   Category: TECH (matched: "software")
[2026-02-01T12:33:58.612Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:33:58.929Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_fee50aac in #💻・tech-jobs
[2026-02-01T12:33:58.929Z] [BOT] ✅ Industry: Software Engineer I @ ORG_fee50aac
[2026-02-01T12:33:58.930Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_fee50aac → category channel (1 total channels)
[2026-02-01T12:33:58.931Z] [BOT] 💾 BEFORE MERGE: 1866 jobs in memory (cached)
[2026-02-01T12:33:58.964Z] [BOT] ✅ Loaded V2 database: 1865 jobs
💾 DISK STATE: 1865 jobs on disk
[2026-02-01T12:33:58.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1866
[2026-02-01T12:33:58.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:33:58.968Z] [BOT] 💾 AFTER MERGE: 1866 jobs (merged disk + memory)
[2026-02-01T12:33:58.969Z] [BOT] ✅ No jobs to archive (all 1866 jobs within 7-day window)
[2026-02-01T12:33:59.061Z] [BOT] 💾 Saved posted_jobs.json: 1866 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:34:00.885Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_fee50aac in #📍・JID_6daed763
[2026-02-01T12:34:00.886Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T12:34:00.886Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_fee50aac → location channel (2 total channels)
💾 BEFORE MERGE: 1866 jobs in memory (cached)
[2026-02-01T12:34:00.921Z] [BOT] ✅ Loaded V2 database: 1866 jobs
💾 DISK STATE: 1866 jobs on disk
[2026-02-01T12:34:00.921Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1866
[2026-02-01T12:34:00.925Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_fee50aac (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:34:00.925Z] [BOT] 💾 AFTER MERGE: 1866 jobs (merged disk + memory)
[2026-02-01T12:34:00.926Z] [BOT] ✅ No jobs to archive (all 1866 jobs within 7-day window)
[2026-02-01T12:34:01.028Z] [BOT] 💾 Saved posted_jobs.json: 1866 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:34:05.531Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T12:34:05.531Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Applied Machine Learning - Mldev" @ ORG_08c9a13c
[2026-02-01T12:34:05.532Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:34:05.849Z] [BOT] ✅ Posted message: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T12:34:05.849Z] [BOT] ✅ Industry: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c
[2026-02-01T12:34:05.850Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:34:05.850Z] [BOT] 💾 BEFORE MERGE: 1867 jobs in memory (cached)
[2026-02-01T12:34:05.883Z] [BOT] ✅ Loaded V2 database: 1866 jobs
💾 DISK STATE: 1866 jobs on disk
[2026-02-01T12:34:05.884Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1867
[2026-02-01T12:34:05.887Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:34:05.887Z] [BOT] 💾 AFTER MERGE: 1867 jobs (merged disk + memory)
[2026-02-01T12:34:05.888Z] [BOT] ✅ No jobs to archive (all 1867 jobs within 7-day window)
[2026-02-01T12:34:06.005Z] [BOT] 💾 Saved posted_jobs.json: 1867 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:34:07.764Z] [BOT] ✅ Posted message: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T12:34:07.764Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:34:07.765Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:34:07.765Z] [BOT] 💾 BEFORE MERGE: 1867 jobs in memory (cached)
[2026-02-01T12:34:07.798Z] [BOT] ✅ Loaded V2 database: 1867 jobs
💾 DISK STATE: 1867 jobs on disk
[2026-02-01T12:34:07.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1867
[2026-02-01T12:34:07.802Z] [BOT] 🔀 Deep merged: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:34:07.802Z] [BOT] 💾 AFTER MERGE: 1867 jobs (merged disk + memory)
[2026-02-01T12:34:07.803Z] [BOT] ✅ No jobs to archive (all 1867 jobs within 7-day window)
[2026-02-01T12:34:07.894Z] [BOT] 💾 Saved posted_jobs.json: 1867 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:34:12.396Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T12:34:12.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "eec77954bddfab32"
[2026-02-01T12:34:12.397Z] [BOT] ⏭️  Skipping duplicate: JID_73d69676 (posted within 7 days)
[2026-02-01T12:34:12.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb3fd213..." not found, but found as SHA256 "5aa17b9a8f1fb3ad"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_a56de89c-detail (posted within 7 days)
[2026-02-01T12:34:12.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d626b83..." not found, but found as SHA256 "c07e849fc10a2ebb"
[2026-02-01T12:34:12.398Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_7860474a-detail (posted within 7 days)
[2026-02-01T12:34:12.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_36450d73..." not found, but found as SHA256 "46ef7a764640ce6f"
[2026-02-01T12:34:12.399Z] [BOT] ⏭️  Skipping duplicate: JID_fe7b93db (posted within 7 days)
[2026-02-01T12:34:12.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3bd91836..." not found, but found as SHA256 "76057341aedaea4e"
[2026-02-01T12:34:12.399Z] [BOT] ⏭️  Skipping duplicate: JID_3337dfd1-1_r20319 (posted within 7 days)
[2026-02-01T12:34:12.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_106a7e57..." not found, but found as SHA256 "43417e80d17ce718"
[2026-02-01T12:34:12.399Z] [BOT] ⏭️  Skipping duplicate: JID_a83753c7-i_10125661 (posted within 7 days)
[2026-02-01T12:34:12.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e675e841-..." not found, but found as SHA256 "098e54b653e5c03f"
[2026-02-01T12:34:12.400Z] [BOT] ⏭️  Skipping duplicate: JID_f64103af (posted within 7 days)
[2026-02-01T12:34:12.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28a5b952..." not found, but found as SHA256 "4afbd56cd9373c05"
[2026-02-01T12:34:12.400Z] [BOT] ⏭️  Skipping duplicate: JID_bb1d3179-external_careers-JID_22ee5b0a-engineer_jr2025454088 (posted within 7 days)
[2026-02-01T12:34:12.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_caaf4000-..." not found, but found as SHA256 "9f0a2bedef1c5a48"
[2026-02-01T12:34:12.400Z] [BOT] ⏭️  Skipping duplicate: JID_1d9fa0cb (posted within 7 days)
[2026-02-01T12:34:12.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a7bd095-kbr_care..." not found, but found as SHA256 "7fc1866ff04a1a19"
[2026-02-01T12:34:12.401Z] [BOT] ⏭️  Skipping duplicate: JID_3a7bd095-kbr_careers-JID_92201714-i_r2110482 (posted within 7 days)
[2026-02-01T12:34:12.520Z] [BOT] ✅ Loaded pending queue: 2948 total (1051 pending, 50 enriched, 1847 posted)
[2026-02-01T12:34:12.699Z] [BOT] ✅ Saved pending queue: 2948 total (1051 pending, 40 enriched, 1857 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T12:34:12.700Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T12:34:12.788Z] [BOT] 📂 Loaded 11938 existing routing entries
[2026-02-01T12:34:12.921Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T12:34:12.922Z] [BOT] Total entries: 11948
   Timestamp: 2026-02-01T12:34:12.873Z
[2026-02-01T12:34:12.922Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T12:34:12.923Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T12:34:12.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
[2026-02-01T12:34:12.923Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #📍・JID_6daed763: 4 posts
     3. #🌉・JID_739bbc0b: 4 posts
     4. #💰・finance-jobs: 1 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T12:34:12.923Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T12:34:12.923Z] [BOT] 💾 BEFORE MERGE: 1867 jobs in memory (cached)
[2026-02-01T12:34:12.964Z] [BOT] ✅ Loaded V2 database: 1867 jobs
💾 DISK STATE: 1867 jobs on disk
[2026-02-01T12:34:12.964Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1867
[2026-02-01T12:34:12.967Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:34:12.967Z] [BOT] 💾 AFTER MERGE: 1867 jobs (merged disk + memory)
[2026-02-01T12:34:12.968Z] [BOT] ✅ No jobs to archive (all 1867 jobs within 7-day window)
[2026-02-01T12:34:13.085Z] [BOT] 💾 Saved posted_jobs.json: 1867 active jobs
[2026-02-01T12:34:13.085Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T12:34:15.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*