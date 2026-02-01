# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T12:00:03.523Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:59:15.833Z] ========================================
[2026-02-01T11:59:15.834Z] Discord Bot Execution Log
[2026-02-01T11:59:15.835Z] Environment: GitHub Actions
[2026-02-01T11:59:15.835Z] Node Version: v20.20.0
[2026-02-01T11:59:15.835Z] ========================================
[2026-02-01T11:59:15.835Z] Environment Variables Check:
[2026-02-01T11:59:15.835Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:59:15.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:59:15.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:59:15.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:59:15.835Z] 
Multi-Channel Configuration:
[2026-02-01T11:59:15.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:59:15.836Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:59:15.836Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:59:15.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:59:15.836Z] 
Data Files Check:
[2026-02-01T11:59:15.837Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58168 bytes)
[2026-02-01T11:59:15.887Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9761082 bytes)
[2026-02-01T11:59:15.887Z] 
========================================
[2026-02-01T11:59:15.887Z] Starting Enhanced Discord Bot...
[2026-02-01T11:59:15.887Z] ========================================
[2026-02-01T11:59:16.446Z] [BOT] ✅ Loaded V2 database: 1837 jobs
[2026-02-01T11:59:16.963Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T11:59:16.963Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:59:16.963Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:59:17.073Z] [BOT] ✅ Loaded pending queue: 2948 total (1071 pending, 50 enriched, 1827 posted)
[2026-02-01T11:59:17.073Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T11:59:17.073Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:59:17.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:59:17.074Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:59:17.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:59:17.075Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T11:59:17.075Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:59:17.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:59:17.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T11:59:17.076Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:59:17.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:59:17.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T11:59:17.077Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:59:17.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:59:17.092Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:59:17.092Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T11:59:17.092Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T11:59:17.093Z] [BOT] 📋 After multi-location grouping: 41 unique jobs to post
[2026-02-01T11:59:17.093Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T11:59:17.093Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:59:17.097Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T11:59:17.097Z] [BOT] 📍 [ROUTING] "Cloud Network Engineer Graduate(Physical Network Infra)" @ ORG_08c9a13c
[2026-02-01T11:59:17.098Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:17.114Z] [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:59:17.306Z] [BOT] ✅ Posted message: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c
[2026-02-01T11:59:17.307Z] [BOT] 💾 Added channel posting: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:59:17.307Z] [BOT] 💾 BEFORE MERGE: 1838 jobs in memory (cached)
[2026-02-01T11:59:17.343Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
[2026-02-01T11:59:17.343Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1838
[2026-02-01T11:59:17.347Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:17.348Z] [BOT] 💾 AFTER MERGE: 1838 jobs (merged disk + memory)
[2026-02-01T11:59:17.349Z] [BOT] ✅ No jobs to archive (all 1838 jobs within 7-day window)
[2026-02-01T11:59:17.470Z] [BOT] 💾 Saved posted_jobs.json: 1838 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:19.194Z] [BOT] ✅ Posted message: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T11:59:19.194Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:59:19.194Z] [BOT] 💾 Added channel posting: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:59:19.194Z] [BOT] 💾 BEFORE MERGE: 1838 jobs in memory (cached)
[2026-02-01T11:59:19.233Z] [BOT] ✅ Loaded V2 database: 1838 jobs
[2026-02-01T11:59:19.233Z] [BOT] 💾 DISK STATE: 1838 jobs on disk
[2026-02-01T11:59:19.233Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1838
[2026-02-01T11:59:19.238Z] [BOT] 🔀 Deep merged: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:59:19.238Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1838 jobs (merged disk + memory)
[2026-02-01T11:59:19.239Z] [BOT] ✅ No jobs to archive (all 1838 jobs within 7-day window)
[2026-02-01T11:59:19.334Z] [BOT] 💾 Saved posted_jobs.json: 1838 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:20.836Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ ORG_4cc4e63c
[2026-02-01T11:59:20.836Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:21.113Z] [BOT] ✅ Posted message: Product Security Engineer @ ORG_4cc4e63c in #💻・tech-jobs
[2026-02-01T11:59:21.114Z] [BOT] ✅ Industry: Product Security Engineer @ ORG_4cc4e63c
[2026-02-01T11:59:21.114Z] [BOT] 💾 Added channel posting: Product Security Engineer @ ORG_4cc4e63c → category channel (1 total channels)
[2026-02-01T11:59:21.114Z] [BOT] 💾 BEFORE MERGE: 1839 jobs in memory (cached)
[2026-02-01T11:59:21.147Z] [BOT] ✅ Loaded V2 database: 1838 jobs
💾 DISK STATE: 1838 jobs on disk
[2026-02-01T11:59:21.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1839
[2026-02-01T11:59:21.151Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:21.151Z] [BOT] 💾 AFTER MERGE: 1839 jobs (merged disk + memory)
[2026-02-01T11:59:21.153Z] [BOT] ✅ No jobs to archive (all 1839 jobs within 7-day window)
[2026-02-01T11:59:21.253Z] [BOT] 💾 Saved posted_jobs.json: 1839 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:22.942Z] [BOT] ✅ Posted message: Product Security Engineer @ ORG_4cc4e63c in #🌉・JID_739bbc0b
[2026-02-01T11:59:22.942Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:59:22.943Z] [BOT] 💾 Added channel posting: Product Security Engineer @ ORG_4cc4e63c → location channel (2 total channels)
[2026-02-01T11:59:22.943Z] [BOT] 💾 BEFORE MERGE: 1839 jobs in memory (cached)
[2026-02-01T11:59:22.974Z] [BOT] ✅ Loaded V2 database: 1839 jobs
💾 DISK STATE: 1839 jobs on disk
[2026-02-01T11:59:22.975Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1839
[2026-02-01T11:59:22.978Z] [BOT] 🔀 Deep merged: Product Security Engineer @ ORG_4cc4e63c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:59:22.979Z] [BOT] 💾 AFTER MERGE: 1839 jobs (merged disk + memory)
[2026-02-01T11:59:22.980Z] [BOT] ✅ No jobs to archive (all 1839 jobs within 7-day window)
[2026-02-01T11:59:23.071Z] [BOT] 💾 Saved posted_jobs.json: 1839 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:24.572Z] [BOT] 📍 [ROUTING] "Manufacturing Software Engineer, Test Program Applications & Automation" @ ORG_67830c77
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:24.870Z] [BOT] ✅ Posted message: Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77 in #💻・tech-jobs
  ✅ Industry: Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77
[2026-02-01T11:59:24.871Z] [BOT] 💾 Added channel posting: Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77 → category channel (1 total channels)
[2026-02-01T11:59:24.871Z] [BOT] 💾 BEFORE MERGE: 1840 jobs in memory (cached)
[2026-02-01T11:59:24.909Z] [BOT] ✅ Loaded V2 database: 1839 jobs
💾 DISK STATE: 1839 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1840
[2026-02-01T11:59:24.916Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:24.916Z] [BOT] 💾 AFTER MERGE: 1840 jobs (merged disk + memory)
[2026-02-01T11:59:24.917Z] [BOT] ✅ No jobs to archive (all 1840 jobs within 7-day window)
[2026-02-01T11:59:25.024Z] [BOT] 💾 Saved posted_jobs.json: 1840 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:26.524Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ qode.world
[2026-02-01T11:59:26.524Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:26.890Z] [BOT] ✅ Posted message: Junior Software Developer @ qode.world in #💻・tech-jobs
[2026-02-01T11:59:26.891Z] [BOT] ✅ Industry: Junior Software Developer @ qode.world
[2026-02-01T11:59:26.891Z] [BOT] 💾 Added channel posting: Junior Software Developer @ qode.world → category channel (1 total channels)
[2026-02-01T11:59:26.891Z] [BOT] 💾 BEFORE MERGE: 1841 jobs in memory (cached)
[2026-02-01T11:59:26.925Z] [BOT] ✅ Loaded V2 database: 1840 jobs
💾 DISK STATE: 1840 jobs on disk
[2026-02-01T11:59:26.925Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1841
[2026-02-01T11:59:26.929Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:26.929Z] [BOT] 💾 AFTER MERGE: 1841 jobs (merged disk + memory)
[2026-02-01T11:59:26.930Z] [BOT] ✅ No jobs to archive (all 1841 jobs within 7-day window)
[2026-02-01T11:59:27.023Z] [BOT] 💾 Saved posted_jobs.json: 1841 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:28.698Z] [BOT] ✅ Posted message: Junior Software Developer @ qode.world in #📍・JID_6daed763
[2026-02-01T11:59:28.698Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:59:28.699Z] [BOT] 💾 Added channel posting: Junior Software Developer @ qode.world → location channel (2 total channels)
[2026-02-01T11:59:28.699Z] [BOT] 💾 BEFORE MERGE: 1841 jobs in memory (cached)
[2026-02-01T11:59:28.732Z] [BOT] ✅ Loaded V2 database: 1841 jobs
💾 DISK STATE: 1841 jobs on disk
[2026-02-01T11:59:28.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1841
[2026-02-01T11:59:28.735Z] [BOT] 🔀 Deep merged: Junior Software Developer @ qode.world (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:59:28.735Z] [BOT] 💾 AFTER MERGE: 1841 jobs (merged disk + memory)
[2026-02-01T11:59:28.737Z] [BOT] ✅ No jobs to archive (all 1841 jobs within 7-day window)
[2026-02-01T11:59:28.843Z] [BOT] 💾 Saved posted_jobs.json: 1841 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:30.342Z] [BOT] 📍 [ROUTING] "Junior Computational Linguist" @ ORG_56d3e805
[2026-02-01T11:59:30.343Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:30.524Z] [BOT] ✅ Posted message: Junior Computational Linguist @ ORG_56d3e805 in #💻・tech-jobs
[2026-02-01T11:59:30.524Z] [BOT] ✅ Industry: Junior Computational Linguist @ ORG_56d3e805
[2026-02-01T11:59:30.525Z] [BOT] 💾 Added channel posting: Junior Computational Linguist @ ORG_56d3e805 → category channel (1 total channels)
[2026-02-01T11:59:30.525Z] [BOT] 💾 BEFORE MERGE: 1842 jobs in memory (cached)
[2026-02-01T11:59:30.558Z] [BOT] ✅ Loaded V2 database: 1841 jobs
💾 DISK STATE: 1841 jobs on disk
[2026-02-01T11:59:30.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1842
[2026-02-01T11:59:30.561Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:30.562Z] [BOT] 💾 AFTER MERGE: 1842 jobs (merged disk + memory)
[2026-02-01T11:59:30.563Z] [BOT] ✅ No jobs to archive (all 1842 jobs within 7-day window)
[2026-02-01T11:59:30.658Z] [BOT] 💾 Saved posted_jobs.json: 1842 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:32.160Z] [BOT] 📍 [ROUTING] "SAS Programmer" @ ORG_6675b3b7 Information System
   Category: TECH (matched: "software")
[2026-02-01T11:59:32.160Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:59:32.309Z] [BOT] ✅ Posted message: SAS Programmer @ ORG_6675b3b7 Information System in #💻・tech-jobs
  ✅ Industry: SAS Programmer @ ORG_6675b3b7 Information System
[2026-02-01T11:59:32.309Z] [BOT] 💾 Added channel posting: SAS Programmer @ ORG_6675b3b7 Information System → category channel (1 total channels)
[2026-02-01T11:59:32.309Z] [BOT] 💾 BEFORE MERGE: 1843 jobs in memory (cached)
[2026-02-01T11:59:32.350Z] [BOT] ✅ Loaded V2 database: 1842 jobs
💾 DISK STATE: 1842 jobs on disk
[2026-02-01T11:59:32.350Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1843
[2026-02-01T11:59:32.354Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:32.354Z] [BOT] 💾 AFTER MERGE: 1843 jobs (merged disk + memory)
[2026-02-01T11:59:32.355Z] [BOT] ✅ No jobs to archive (all 1843 jobs within 7-day window)
[2026-02-01T11:59:32.463Z] [BOT] 💾 Saved posted_jobs.json: 1843 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:34.123Z] [BOT] ✅ Posted message: SAS Programmer @ ORG_6675b3b7 Information System in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:59:34.123Z] [BOT] 💾 Added channel posting: SAS Programmer @ ORG_6675b3b7 Information System → location channel (2 total channels)
[2026-02-01T11:59:34.124Z] [BOT] 💾 BEFORE MERGE: 1843 jobs in memory (cached)
[2026-02-01T11:59:34.156Z] [BOT] ✅ Loaded V2 database: 1843 jobs
[2026-02-01T11:59:34.156Z] [BOT] 💾 DISK STATE: 1843 jobs on disk
[2026-02-01T11:59:34.157Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1843
[2026-02-01T11:59:34.160Z] [BOT] 🔀 Deep merged: SAS Programmer @ ORG_6675b3b7 Information System (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:59:34.160Z] [BOT] 💾 AFTER MERGE: 1843 jobs (merged disk + memory)
[2026-02-01T11:59:34.161Z] [BOT] ✅ No jobs to archive (all 1843 jobs within 7-day window)
[2026-02-01T11:59:34.254Z] [BOT] 💾 Saved posted_jobs.json: 1843 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:38.757Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T11:59:38.758Z] [BOT] 📍 [ROUTING] "Software Engineer - Python - Cloud" @ ORG_782621d0
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T11:59:38.758Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:59:38.982Z] [BOT] ✅ Posted message: Software Engineer - Python - Cloud @ ORG_782621d0 in #📊・JID_fb739488
  ✅ Industry: Software Engineer - Python - Cloud @ ORG_782621d0
[2026-02-01T11:59:38.983Z] [BOT] 💾 Added channel posting: Software Engineer - Python - Cloud @ ORG_782621d0 → category channel (1 total channels)
💾 BEFORE MERGE: 1844 jobs in memory (cached)
[2026-02-01T11:59:39.016Z] [BOT] ✅ Loaded V2 database: 1843 jobs
💾 DISK STATE: 1843 jobs on disk
[2026-02-01T11:59:39.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1844
[2026-02-01T11:59:39.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:39.019Z] [BOT] 💾 AFTER MERGE: 1844 jobs (merged disk + memory)
[2026-02-01T11:59:39.020Z] [BOT] ✅ No jobs to archive (all 1844 jobs within 7-day window)
[2026-02-01T11:59:39.136Z] [BOT] 💾 Saved posted_jobs.json: 1844 active jobs
[2026-02-01T11:59:39.137Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:40.852Z] [BOT] ✅ Posted message: Software Engineer - Python - Cloud @ ORG_782621d0 in #🏠・JID_ead674af
[2026-02-01T11:59:40.853Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T11:59:40.853Z] [BOT] 💾 Added channel posting: Software Engineer - Python - Cloud @ ORG_782621d0 → location channel (2 total channels)
[2026-02-01T11:59:40.853Z] [BOT] 💾 BEFORE MERGE: 1844 jobs in memory (cached)
[2026-02-01T11:59:40.887Z] [BOT] ✅ Loaded V2 database: 1844 jobs
💾 DISK STATE: 1844 jobs on disk
[2026-02-01T11:59:40.887Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1844
[2026-02-01T11:59:40.890Z] [BOT] 🔀 Deep merged: Software Engineer - Python - Cloud @ ORG_782621d0 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:59:40.890Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1844 jobs (merged disk + memory)
[2026-02-01T11:59:40.892Z] [BOT] ✅ No jobs to archive (all 1844 jobs within 7-day window)
[2026-02-01T11:59:41.003Z] [BOT] 💾 Saved posted_jobs.json: 1844 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:45.502Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T11:59:45.503Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:59:45.503Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:59:45.739Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2026-02-01T11:59:45.740Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1845 jobs in memory (cached)
[2026-02-01T11:59:45.773Z] [BOT] ✅ Loaded V2 database: 1844 jobs
💾 DISK STATE: 1844 jobs on disk
[2026-02-01T11:59:45.774Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1845
[2026-02-01T11:59:45.777Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:45.777Z] [BOT] 💾 AFTER MERGE: 1845 jobs (merged disk + memory)
[2026-02-01T11:59:45.778Z] [BOT] ✅ No jobs to archive (all 1845 jobs within 7-day window)
[2026-02-01T11:59:45.877Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:47.720Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T11:59:47.720Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:59:47.720Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:59:47.720Z] [BOT] 💾 BEFORE MERGE: 1845 jobs in memory (cached)
[2026-02-01T11:59:47.753Z] [BOT] ✅ Loaded V2 database: 1845 jobs
💾 DISK STATE: 1845 jobs on disk
[2026-02-01T11:59:47.753Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1845
[2026-02-01T11:59:47.756Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:59:47.756Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1845 jobs (merged disk + memory)
[2026-02-01T11:59:47.757Z] [BOT] ✅ No jobs to archive (all 1845 jobs within 7-day window)
[2026-02-01T11:59:47.851Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
[2026-02-01T11:59:47.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:49.353Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - E-Commerce Governance - BS/MS" @ ORG_08c9a13c
[2026-02-01T11:59:49.354Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:59:49.566Z] [BOT] ✅ Posted message: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c
[2026-02-01T11:59:49.567Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1846 jobs in memory (cached)
[2026-02-01T11:59:49.599Z] [BOT] ✅ Loaded V2 database: 1845 jobs
💾 DISK STATE: 1845 jobs on disk
[2026-02-01T11:59:49.600Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1846
[2026-02-01T11:59:49.603Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1846 jobs (merged disk + memory)
[2026-02-01T11:59:49.604Z] [BOT] ✅ No jobs to archive (all 1846 jobs within 7-day window)
[2026-02-01T11:59:49.698Z] [BOT] 💾 Saved posted_jobs.json: 1846 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:51.683Z] [BOT] ✅ Posted message: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:59:51.684Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:59:51.684Z] [BOT] 💾 BEFORE MERGE: 1846 jobs in memory (cached)
[2026-02-01T11:59:51.717Z] [BOT] ✅ Loaded V2 database: 1846 jobs
💾 DISK STATE: 1846 jobs on disk
[2026-02-01T11:59:51.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1846
[2026-02-01T11:59:51.721Z] [BOT] 🔀 Deep merged: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:59:51.721Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1846 jobs (merged disk + memory)
[2026-02-01T11:59:51.722Z] [BOT] ✅ No jobs to archive (all 1846 jobs within 7-day window)
[2026-02-01T11:59:51.820Z] [BOT] 💾 Saved posted_jobs.json: 1846 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:53.322Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - Ecommerce Recommendation - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T11:59:53.322Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:59:53.553Z] [BOT] ✅ Posted message: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T11:59:53.553Z] [BOT] ✅ Industry: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c
[2026-02-01T11:59:53.554Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:59:53.554Z] [BOT] 💾 BEFORE MERGE: 1847 jobs in memory (cached)
[2026-02-01T11:59:53.587Z] [BOT] ✅ Loaded V2 database: 1846 jobs
💾 DISK STATE: 1846 jobs on disk
[2026-02-01T11:59:53.587Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1847
[2026-02-01T11:59:53.590Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:59:53.590Z] [BOT] 💾 AFTER MERGE: 1847 jobs (merged disk + memory)
[2026-02-01T11:59:53.591Z] [BOT] ✅ No jobs to archive (all 1847 jobs within 7-day window)
[2026-02-01T11:59:53.694Z] [BOT] 💾 Saved posted_jobs.json: 1847 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:59:55.431Z] [BOT] ✅ Posted message: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T11:59:55.431Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:59:55.432Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:59:55.432Z] [BOT] 💾 BEFORE MERGE: 1847 jobs in memory (cached)
[2026-02-01T11:59:55.464Z] [BOT] ✅ Loaded V2 database: 1847 jobs
💾 DISK STATE: 1847 jobs on disk
[2026-02-01T11:59:55.465Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1847
[2026-02-01T11:59:55.468Z] [BOT] 🔀 Deep merged: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:59:55.468Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1847 jobs (merged disk + memory)
[2026-02-01T11:59:55.469Z] [BOT] ✅ No jobs to archive (all 1847 jobs within 7-day window)
[2026-02-01T11:59:55.570Z] [BOT] 💾 Saved posted_jobs.json: 1847 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:00:00.071Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T12:00:00.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d83948f6..." not found, but found as SHA256 "e413e7a771cda036"
[2026-02-01T12:00:00.073Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_d2c87d10 (posted within 7 days)
[2026-02-01T12:00:00.073Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_780ebf81..." not found, but found as SHA256 "e58366835f51154a"
[2026-02-01T12:00:00.073Z] [BOT] ⏭️  Skipping duplicate: JID_747b71b4 (posted within 7 days)
[2026-02-01T12:00:00.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8786413f-..." not found, but found as SHA256 "c44384c10096de57"
⏭️  Skipping duplicate: JID_d4e2cf85 (posted within 7 days)
[2026-02-01T12:00:00.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6565e42b..." not found, but found as SHA256 "4b6c3baa0b184f43"
[2026-02-01T12:00:00.074Z] [BOT] ⏭️  Skipping duplicate: JID_daa71cfa-graduate_jr-2502329 (posted within 7 days)
[2026-02-01T12:00:00.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_80a9f7c0..." not found, but found as SHA256 "2f585646d136aef1"
[2026-02-01T12:00:00.074Z] [BOT] ⏭️  Skipping duplicate: JID_2a174cfe (posted within 7 days)
[2026-02-01T12:00:00.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ffa906bd-..." not found, but found as SHA256 "95d9adbd68cb820a"
[2026-02-01T12:00:00.075Z] [BOT] ⏭️  Skipping duplicate: JID_10fa193e-linguist_r0031051-4 (posted within 7 days)
[2026-02-01T12:00:00.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_236ec14b..." not found, but found as SHA256 "b93b44c1687d8992"
[2026-02-01T12:00:00.075Z] [BOT] ⏭️  Skipping duplicate: JID_818720ae (posted within 7 days)
[2026-02-01T12:00:00.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42e7bc7d..." not found, but found as SHA256 "c3f358e46411c086"
[2026-02-01T12:00:00.075Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c43f7af2-detail (posted within 7 days)
[2026-02-01T12:00:00.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0aad4268..." not found, but found as SHA256 "3015ef2f43c07677"
[2026-02-01T12:00:00.075Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_91a528d1-detail (posted within 7 days)
[2026-02-01T12:00:00.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a72dc1b..." not found, but found as SHA256 "444c952c81d13d66"
[2026-02-01T12:00:00.076Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e31f99b5-detail (posted within 7 days)
[2026-02-01T12:00:00.203Z] [BOT] ✅ Loaded pending queue: 2948 total (1071 pending, 50 enriched, 1827 posted)
[2026-02-01T12:00:00.387Z] [BOT] ✅ Saved pending queue: 2948 total (1071 pending, 40 enriched, 1837 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T12:00:00.387Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T12:00:00.475Z] [BOT] 📂 Loaded 11918 existing routing entries
[2026-02-01T12:00:00.608Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11928
   Timestamp: 2026-02-01T12:00:00.560Z
[2026-02-01T12:00:00.609Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 26
   Successful: 18
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌲・JID_efdf5921: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・JID_739bbc0b: 2 posts
[2026-02-01T12:00:00.610Z] [BOT] 5. #📍・JID_6daed763: 2 posts
[2026-02-01T12:00:00.610Z] [BOT] [STATS] Channel stats saved
[2026-02-01T12:00:00.610Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1847 jobs in memory (cached)
[2026-02-01T12:00:00.659Z] [BOT] ✅ Loaded V2 database: 1847 jobs
[2026-02-01T12:00:00.659Z] [BOT] 💾 DISK STATE: 1847 jobs on disk
[2026-02-01T12:00:00.660Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1847
[2026-02-01T12:00:00.664Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:00:00.664Z] [BOT] 💾 AFTER MERGE: 1847 jobs (merged disk + memory)
[2026-02-01T12:00:00.666Z] [BOT] ✅ No jobs to archive (all 1847 jobs within 7-day window)
[2026-02-01T12:00:00.760Z] [BOT] 💾 Saved posted_jobs.json: 1847 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:00:00.760Z] [BOT] ✅ Database saved successfully
[2026-02-01T12:00:02.792Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*