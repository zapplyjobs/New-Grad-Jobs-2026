# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T11:14:02.018Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:13:09.226Z] ========================================
[2026-02-01T11:13:09.228Z] Discord Bot Execution Log
[2026-02-01T11:13:09.228Z] Environment: GitHub Actions
[2026-02-01T11:13:09.228Z] Node Version: v20.20.0
[2026-02-01T11:13:09.228Z] ========================================
[2026-02-01T11:13:09.228Z] Environment Variables Check:
[2026-02-01T11:13:09.228Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:13:09.229Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:13:09.229Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:13:09.229Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:13:09.229Z] 
Multi-Channel Configuration:
[2026-02-01T11:13:09.229Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:13:09.229Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.229Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.229Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:13:09.229Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.229Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.229Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.230Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.230Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:13:09.230Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:13:09.230Z] 
Data Files Check:
[2026-02-01T11:13:09.231Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69256 bytes)
[2026-02-01T11:13:09.279Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9554069 bytes)
[2026-02-01T11:13:09.279Z] 
========================================
[2026-02-01T11:13:09.279Z] Starting Enhanced Discord Bot...
[2026-02-01T11:13:09.279Z] ========================================
[2026-02-01T11:13:09.854Z] [BOT] ✅ Loaded V2 database: 1797 jobs
[2026-02-01T11:13:10.456Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T11:13:10.456Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:13:10.457Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:13:10.564Z] [BOT] ✅ Loaded pending queue: 2949 total (1112 pending, 50 enriched, 1787 posted)
[2026-02-01T11:13:10.564Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:13:10.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:13:10.565Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T11:13:10.565Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:13:10.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:13:10.566Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:13:10.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T11:13:10.567Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T11:13:10.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-02-01T11:13:10.567Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:13:10.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-02-01T11:13:10.567Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:13:10.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:13:10.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T11:13:10.568Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:13:10.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T11:13:10.568Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:13:10.582Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:13:10.582Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer at spotify
[2026-02-01T11:13:10.696Z] [BOT] ✅ Loaded pending queue: 2949 total (1112 pending, 50 enriched, 1787 posted)
[2026-02-01T11:13:10.898Z] [BOT] ✅ Saved pending queue: 2948 total (1112 pending, 49 enriched, 1787 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T11:13:10.899Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T11:13:10.900Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T11:13:10.900Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T11:13:10.900Z] [BOT] - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
   - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T11:13:10.900Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:13:10.902Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T11:13:10.903Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
[2026-02-01T11:13:10.903Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:10.921Z] [BOT ERROR] (node:2707) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:13:11.313Z] [BOT] ✅ Posted message: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #💻・tech-jobs
[2026-02-01T11:13:11.313Z] [BOT] ✅ Industry: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank
[2026-02-01T11:13:11.314Z] [BOT] 💾 Added channel posting: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank → category channel (1 total channels)
[2026-02-01T11:13:11.314Z] [BOT] 💾 BEFORE MERGE: 1798 jobs in memory (cached)
[2026-02-01T11:13:11.349Z] [BOT] ✅ Loaded V2 database: 1797 jobs
💾 DISK STATE: 1797 jobs on disk
[2026-02-01T11:13:11.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1798
[2026-02-01T11:13:11.353Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:11.354Z] [BOT] 💾 AFTER MERGE: 1798 jobs (merged disk + memory)
[2026-02-01T11:13:11.355Z] [BOT] ✅ No jobs to archive (all 1798 jobs within 7-day window)
[2026-02-01T11:13:11.476Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
[2026-02-01T11:13:11.476Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:13.187Z] [BOT] ✅ Posted message: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #📍・JID_6daed763
[2026-02-01T11:13:13.188Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:13.188Z] [BOT] 💾 Added channel posting: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank → location channel (2 total channels)
[2026-02-01T11:13:13.188Z] [BOT] 💾 BEFORE MERGE: 1798 jobs in memory (cached)
[2026-02-01T11:13:13.221Z] [BOT] ✅ Loaded V2 database: 1798 jobs
[2026-02-01T11:13:13.222Z] [BOT] 💾 DISK STATE: 1798 jobs on disk
[2026-02-01T11:13:13.222Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1798
[2026-02-01T11:13:13.226Z] [BOT] 🔀 Deep merged: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:13:13.226Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1798 jobs (merged disk + memory)
[2026-02-01T11:13:13.227Z] [BOT] ✅ No jobs to archive (all 1798 jobs within 7-day window)
[2026-02-01T11:13:13.327Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:14.828Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Software Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
[2026-02-01T11:13:14.828Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:15.009Z] [BOT] ✅ Posted message: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2026-02-01T11:13:15.010Z] [BOT] ✅ Industry: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0
[2026-02-01T11:13:15.010Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-02-01T11:13:15.010Z] [BOT] 💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-01T11:13:15.043Z] [BOT] ✅ Loaded V2 database: 1798 jobs
💾 DISK STATE: 1798 jobs on disk
[2026-02-01T11:13:15.044Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-01T11:13:15.047Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:15.047Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-01T11:13:15.048Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-01T11:13:15.144Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:16.884Z] [BOT] ✅ Posted message: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:13:16.885Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 → location channel (2 total channels)
💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-01T11:13:16.920Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-01T11:13:16.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-01T11:13:16.924Z] [BOT] 🔀 Deep merged: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:16.924Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-01T11:13:16.925Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-01T11:13:17.023Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:18.525Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1bb5b63e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:18.717Z] [BOT] ✅ Posted message: Software Engineer @ ORG_1bb5b63e in #💻・tech-jobs
[2026-02-01T11:13:18.718Z] [BOT] ✅ Industry: Software Engineer @ ORG_1bb5b63e
[2026-02-01T11:13:18.718Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_1bb5b63e → category channel (1 total channels)
[2026-02-01T11:13:18.718Z] [BOT] 💾 BEFORE MERGE: 1800 jobs in memory (cached)
[2026-02-01T11:13:18.751Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-01T11:13:18.751Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1800
[2026-02-01T11:13:18.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:18.755Z] [BOT] 💾 AFTER MERGE: 1800 jobs (merged disk + memory)
[2026-02-01T11:13:18.756Z] [BOT] ✅ No jobs to archive (all 1800 jobs within 7-day window)
[2026-02-01T11:13:18.874Z] [BOT] 💾 Saved posted_jobs.json: 1800 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:20.585Z] [BOT] ✅ Posted message: Software Engineer @ ORG_1bb5b63e in #📍・JID_6daed763
[2026-02-01T11:13:20.585Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:20.585Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_1bb5b63e → location channel (2 total channels)
[2026-02-01T11:13:20.585Z] [BOT] 💾 BEFORE MERGE: 1800 jobs in memory (cached)
[2026-02-01T11:13:20.617Z] [BOT] ✅ Loaded V2 database: 1800 jobs
💾 DISK STATE: 1800 jobs on disk
[2026-02-01T11:13:20.617Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1800
[2026-02-01T11:13:20.620Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_1bb5b63e (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:20.620Z] [BOT] 💾 AFTER MERGE: 1800 jobs (merged disk + memory)
[2026-02-01T11:13:20.621Z] [BOT] ✅ No jobs to archive (all 1800 jobs within 7-day window)
[2026-02-01T11:13:20.706Z] [BOT] 💾 Saved posted_jobs.json: 1800 active jobs
[2026-02-01T11:13:20.707Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:22.209Z] [BOT] 📍 [ROUTING] "Cloud Engineer Graduate" @ ORG_a5257743 Packard Enterprise
   Category: TECH (matched: "DevOps/SRE")
[2026-02-01T11:13:22.209Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:22.477Z] [BOT] ✅ Posted message: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
[2026-02-01T11:13:22.477Z] [BOT] ✅ Industry: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise
[2026-02-01T11:13:22.477Z] [BOT] 💾 Added channel posting: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise → category channel (1 total channels)
💾 BEFORE MERGE: 1801 jobs in memory (cached)
[2026-02-01T11:13:22.509Z] [BOT] ✅ Loaded V2 database: 1800 jobs
💾 DISK STATE: 1800 jobs on disk
[2026-02-01T11:13:22.509Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1801
[2026-02-01T11:13:22.512Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:22.512Z] [BOT] 💾 AFTER MERGE: 1801 jobs (merged disk + memory)
[2026-02-01T11:13:22.513Z] [BOT] ✅ No jobs to archive (all 1801 jobs within 7-day window)
[2026-02-01T11:13:22.610Z] [BOT] 💾 Saved posted_jobs.json: 1801 active jobs
[2026-02-01T11:13:22.610Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:24.451Z] [BOT] ✅ Posted message: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:24.451Z] [BOT] 💾 Added channel posting: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise → location channel (2 total channels)
[2026-02-01T11:13:24.452Z] [BOT] 💾 BEFORE MERGE: 1801 jobs in memory (cached)
[2026-02-01T11:13:24.488Z] [BOT] ✅ Loaded V2 database: 1801 jobs
💾 DISK STATE: 1801 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1801
[2026-02-01T11:13:24.493Z] [BOT] 🔀 Deep merged: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:13:24.493Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:24.494Z] [BOT] 💾 AFTER MERGE: 1801 jobs (merged disk + memory)
[2026-02-01T11:13:24.501Z] [BOT] ✅ No jobs to archive (all 1801 jobs within 7-day window)
[2026-02-01T11:13:24.596Z] [BOT] 💾 Saved posted_jobs.json: 1801 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:26.097Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_61859c65 Learning
   Category: TECH (matched: "software")
[2026-02-01T11:13:26.097Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:26.535Z] [BOT] ✅ Posted message: Software Engineer @ ORG_61859c65 Learning in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_61859c65 Learning
[2026-02-01T11:13:26.536Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_61859c65 Learning → category channel (1 total channels)
💾 BEFORE MERGE: 1802 jobs in memory (cached)
[2026-02-01T11:13:26.569Z] [BOT] ✅ Loaded V2 database: 1801 jobs
💾 DISK STATE: 1801 jobs on disk
[2026-02-01T11:13:26.569Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1802
[2026-02-01T11:13:26.572Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:26.572Z] [BOT] 💾 AFTER MERGE: 1802 jobs (merged disk + memory)
[2026-02-01T11:13:26.573Z] [BOT] ✅ No jobs to archive (all 1802 jobs within 7-day window)
[2026-02-01T11:13:26.677Z] [BOT] 💾 Saved posted_jobs.json: 1802 active jobs
[2026-02-01T11:13:26.677Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:28.448Z] [BOT] ✅ Posted message: Software Engineer @ ORG_61859c65 Learning in #📍・JID_6daed763
[2026-02-01T11:13:28.449Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:28.449Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_61859c65 Learning → location channel (2 total channels)
💾 BEFORE MERGE: 1802 jobs in memory (cached)
[2026-02-01T11:13:28.481Z] [BOT] ✅ Loaded V2 database: 1802 jobs
💾 DISK STATE: 1802 jobs on disk
[2026-02-01T11:13:28.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1802
[2026-02-01T11:13:28.484Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_61859c65 Learning (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:28.484Z] [BOT] 💾 AFTER MERGE: 1802 jobs (merged disk + memory)
[2026-02-01T11:13:28.485Z] [BOT] ✅ No jobs to archive (all 1802 jobs within 7-day window)
[2026-02-01T11:13:28.576Z] [BOT] 💾 Saved posted_jobs.json: 1802 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:30.079Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ interface.ai
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:13:30.240Z] [BOT] ✅ Posted message: Software Engineer I @ interface.ai in #💻・tech-jobs
[2026-02-01T11:13:30.240Z] [BOT] ✅ Industry: Software Engineer I @ interface.ai
[2026-02-01T11:13:30.240Z] [BOT] 💾 Added channel posting: Software Engineer I @ interface.ai → category channel (1 total channels)
💾 BEFORE MERGE: 1803 jobs in memory (cached)
[2026-02-01T11:13:30.273Z] [BOT] ✅ Loaded V2 database: 1802 jobs
💾 DISK STATE: 1802 jobs on disk
[2026-02-01T11:13:30.273Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1803
[2026-02-01T11:13:30.276Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:30.276Z] [BOT] 💾 AFTER MERGE: 1803 jobs (merged disk + memory)
[2026-02-01T11:13:30.277Z] [BOT] ✅ No jobs to archive (all 1803 jobs within 7-day window)
[2026-02-01T11:13:30.376Z] [BOT] 💾 Saved posted_jobs.json: 1803 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:32.092Z] [BOT] ✅ Posted message: Software Engineer I @ interface.ai in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:13:32.093Z] [BOT] 💾 Added channel posting: Software Engineer I @ interface.ai → location channel (2 total channels)
[2026-02-01T11:13:32.093Z] [BOT] 💾 BEFORE MERGE: 1803 jobs in memory (cached)
[2026-02-01T11:13:32.126Z] [BOT] ✅ Loaded V2 database: 1803 jobs
💾 DISK STATE: 1803 jobs on disk
[2026-02-01T11:13:32.126Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1803
[2026-02-01T11:13:32.129Z] [BOT] 🔀 Deep merged: Software Engineer I @ interface.ai (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:13:32.129Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1803 jobs (merged disk + memory)
[2026-02-01T11:13:32.130Z] [BOT] ✅ No jobs to archive (all 1803 jobs within 7-day window)
[2026-02-01T11:13:32.242Z] [BOT] 💾 Saved posted_jobs.json: 1803 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:36.743Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T11:13:36.744Z] [BOT] 📍 [ROUTING] "Software Engineer - E" @ ORG_fb8c4aa0 Corporation
[2026-02-01T11:13:36.744Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:13:36.972Z] [BOT] ✅ Posted message: Software Engineer - E @ ORG_fb8c4aa0 Corporation in #🤖・ai-jobs
[2026-02-01T11:13:36.972Z] [BOT] ✅ Industry: Software Engineer - E @ ORG_fb8c4aa0 Corporation
[2026-02-01T11:13:36.973Z] [BOT] 💾 Added channel posting: Software Engineer - E @ ORG_fb8c4aa0 Corporation → category channel (1 total channels)
[2026-02-01T11:13:36.973Z] [BOT] 💾 BEFORE MERGE: 1804 jobs in memory (cached)
[2026-02-01T11:13:37.005Z] [BOT] ✅ Loaded V2 database: 1803 jobs
💾 DISK STATE: 1803 jobs on disk
[2026-02-01T11:13:37.005Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1804
[2026-02-01T11:13:37.008Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:37.008Z] [BOT] 💾 AFTER MERGE: 1804 jobs (merged disk + memory)
[2026-02-01T11:13:37.010Z] [BOT] ✅ No jobs to archive (all 1804 jobs within 7-day window)
[2026-02-01T11:13:37.100Z] [BOT] 💾 Saved posted_jobs.json: 1804 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:38.904Z] [BOT] ✅ Posted message: Software Engineer - E @ ORG_fb8c4aa0 Corporation in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:38.905Z] [BOT] 💾 Added channel posting: Software Engineer - E @ ORG_fb8c4aa0 Corporation → location channel (2 total channels)
[2026-02-01T11:13:38.905Z] [BOT] 💾 BEFORE MERGE: 1804 jobs in memory (cached)
[2026-02-01T11:13:38.938Z] [BOT] ✅ Loaded V2 database: 1804 jobs
💾 DISK STATE: 1804 jobs on disk
[2026-02-01T11:13:38.938Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1804
[2026-02-01T11:13:38.941Z] [BOT] 🔀 Deep merged: Software Engineer - E @ ORG_fb8c4aa0 Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:38.942Z] [BOT] 💾 AFTER MERGE: 1804 jobs (merged disk + memory)
[2026-02-01T11:13:38.943Z] [BOT] ✅ No jobs to archive (all 1804 jobs within 7-day window)
[2026-02-01T11:13:39.041Z] [BOT] 💾 Saved posted_jobs.json: 1804 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:40.541Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_c3f8be8b
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:13:40.541Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:13:40.924Z] [BOT] ✅ Posted message: Application Engineer @ ORG_c3f8be8b in #🤖・ai-jobs
  ✅ Industry: Application Engineer @ ORG_c3f8be8b
[2026-02-01T11:13:40.925Z] [BOT] 💾 Added channel posting: Application Engineer @ ORG_c3f8be8b → category channel (1 total channels)
[2026-02-01T11:13:40.925Z] [BOT] 💾 BEFORE MERGE: 1805 jobs in memory (cached)
[2026-02-01T11:13:40.958Z] [BOT] ✅ Loaded V2 database: 1804 jobs
💾 DISK STATE: 1804 jobs on disk
[2026-02-01T11:13:40.958Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1805
[2026-02-01T11:13:40.961Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:40.961Z] [BOT] 💾 AFTER MERGE: 1805 jobs (merged disk + memory)
[2026-02-01T11:13:40.962Z] [BOT] ✅ No jobs to archive (all 1805 jobs within 7-day window)
[2026-02-01T11:13:41.050Z] [BOT] 💾 Saved posted_jobs.json: 1805 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:42.768Z] [BOT] ✅ Posted message: Application Engineer @ ORG_c3f8be8b in #📍・JID_6daed763
[2026-02-01T11:13:42.769Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:42.769Z] [BOT] 💾 Added channel posting: Application Engineer @ ORG_c3f8be8b → location channel (2 total channels)
[2026-02-01T11:13:42.769Z] [BOT] 💾 BEFORE MERGE: 1805 jobs in memory (cached)
[2026-02-01T11:13:42.802Z] [BOT] ✅ Loaded V2 database: 1805 jobs
💾 DISK STATE: 1805 jobs on disk
[2026-02-01T11:13:42.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1805
[2026-02-01T11:13:42.805Z] [BOT] 🔀 Deep merged: Application Engineer @ ORG_c3f8be8b (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:13:42.805Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1805 jobs (merged disk + memory)
[2026-02-01T11:13:42.806Z] [BOT] ✅ No jobs to archive (all 1805 jobs within 7-day window)
[2026-02-01T11:13:42.905Z] [BOT] 💾 Saved posted_jobs.json: 1805 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:47.407Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T11:13:47.408Z] [BOT] 📍 [ROUTING] "Sales Data Analyst 1" @ ORG_c46dc795 Innovation
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T11:13:47.409Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:13:47.625Z] [BOT] ✅ Posted message: Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #📊・JID_fb739488
[2026-02-01T11:13:47.626Z] [BOT] ✅ Industry: Sales Data Analyst 1 @ ORG_c46dc795 Innovation
[2026-02-01T11:13:47.626Z] [BOT] 💾 Added channel posting: Sales Data Analyst 1 @ ORG_c46dc795 Innovation → category channel (1 total channels)
[2026-02-01T11:13:47.626Z] [BOT] 💾 BEFORE MERGE: 1806 jobs in memory (cached)
[2026-02-01T11:13:47.660Z] [BOT] ✅ Loaded V2 database: 1805 jobs
💾 DISK STATE: 1805 jobs on disk
[2026-02-01T11:13:47.660Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1806
[2026-02-01T11:13:47.663Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:47.663Z] [BOT] 💾 AFTER MERGE: 1806 jobs (merged disk + memory)
[2026-02-01T11:13:47.664Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-02-01T11:13:47.761Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:49.448Z] [BOT] ✅ Posted message: Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #🌉・JID_739bbc0b
[2026-02-01T11:13:49.448Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:13:49.448Z] [BOT] 💾 Added channel posting: Sales Data Analyst 1 @ ORG_c46dc795 Innovation → location channel (2 total channels)
[2026-02-01T11:13:49.448Z] [BOT] 💾 BEFORE MERGE: 1806 jobs in memory (cached)
[2026-02-01T11:13:49.480Z] [BOT] ✅ Loaded V2 database: 1806 jobs
💾 DISK STATE: 1806 jobs on disk
[2026-02-01T11:13:49.480Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1806
[2026-02-01T11:13:49.483Z] [BOT] 🔀 Deep merged: Sales Data Analyst 1 @ ORG_c46dc795 Innovation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:49.483Z] [BOT] 💾 AFTER MERGE: 1806 jobs (merged disk + memory)
[2026-02-01T11:13:49.485Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-02-01T11:13:49.592Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:51.091Z] [BOT] 📍 [ROUTING] "Data Scientist I" @ ORG_ab43fc6e
[2026-02-01T11:13:51.092Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:13:51.340Z] [BOT] ✅ Posted message: Data Scientist I @ ORG_ab43fc6e in #📊・JID_fb739488
[2026-02-01T11:13:51.341Z] [BOT] ✅ Industry: Data Scientist I @ ORG_ab43fc6e
[2026-02-01T11:13:51.341Z] [BOT] 💾 Added channel posting: Data Scientist I @ ORG_ab43fc6e → category channel (1 total channels)
[2026-02-01T11:13:51.341Z] [BOT] 💾 BEFORE MERGE: 1807 jobs in memory (cached)
[2026-02-01T11:13:51.373Z] [BOT] ✅ Loaded V2 database: 1806 jobs
💾 DISK STATE: 1806 jobs on disk
[2026-02-01T11:13:51.373Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1807
[2026-02-01T11:13:51.376Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:51.377Z] [BOT] 💾 AFTER MERGE: 1807 jobs (merged disk + memory)
[2026-02-01T11:13:51.377Z] [BOT] ✅ No jobs to archive (all 1807 jobs within 7-day window)
[2026-02-01T11:13:51.465Z] [BOT] 💾 Saved posted_jobs.json: 1807 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:53.267Z] [BOT] ✅ Posted message: Data Scientist I @ ORG_ab43fc6e in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:13:53.267Z] [BOT] 💾 Added channel posting: Data Scientist I @ ORG_ab43fc6e → location channel (2 total channels)
[2026-02-01T11:13:53.267Z] [BOT] 💾 BEFORE MERGE: 1807 jobs in memory (cached)
[2026-02-01T11:13:53.300Z] [BOT] ✅ Loaded V2 database: 1807 jobs
💾 DISK STATE: 1807 jobs on disk
[2026-02-01T11:13:53.301Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1807
[2026-02-01T11:13:53.304Z] [BOT] 🔀 Deep merged: Data Scientist I @ ORG_ab43fc6e (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:13:53.304Z] [BOT] 💾 AFTER MERGE: 1807 jobs (merged disk + memory)
[2026-02-01T11:13:53.305Z] [BOT] ✅ No jobs to archive (all 1807 jobs within 7-day window)
[2026-02-01T11:13:53.405Z] [BOT] 💾 Saved posted_jobs.json: 1807 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:57.907Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T11:13:57.908Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_80d478b6..." not found, but found as SHA256 "55b0f111979aded0"
[2026-02-01T11:13:57.908Z] [BOT] ⏭️  Skipping duplicate: JID_01af7ec5 (posted within 7 days)
[2026-02-01T11:13:57.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "be89a2cc9544e248"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_a8dc759f-engineer_r158684 (posted within 7 days)
[2026-02-01T11:13:57.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8e08bc5d..." not found, but found as SHA256 "f1bf10235abe743a"
[2026-02-01T11:13:57.910Z] [BOT] ⏭️  Skipping duplicate: JID_a7cac1a6-_2320007 (posted within 7 days)
[2026-02-01T11:13:57.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_affb5d98-onto_careers-..." not found, but found as SHA256 "cfac62d68e09f865"
[2026-02-01T11:13:57.910Z] [BOT] ⏭️  Skipping duplicate: JID_affb5d98-onto_careers-JID_2c92c356-1_r-4671 (posted within 7 days)
[2026-02-01T11:13:57.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_65bc3a45..." not found, but found as SHA256 "350e29488d6880c0"
[2026-02-01T11:13:57.910Z] [BOT] ⏭️  Skipping duplicate: JID_fff21582-engineer_r2700 (posted within 7 days)
[2026-02-01T11:13:57.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_735f7e4d..." not found, but found as SHA256 "cc32f4153f513ceb"
[2026-02-01T11:13:57.911Z] [BOT] ⏭️  Skipping duplicate: JID_17e7bfe6 (posted within 7 days)
[2026-02-01T11:13:57.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1fa485..." not found, but found as SHA256 "8a81ca2e5730622a"
[2026-02-01T11:13:57.911Z] [BOT] ⏭️  Skipping duplicate: JID_f4707d54-graduate_1192968-1 (posted within 7 days)
[2026-02-01T11:13:57.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0f927b80..." not found, but found as SHA256 "8bc334a9a8480b65"
[2026-02-01T11:13:57.911Z] [BOT] ⏭️  Skipping duplicate: JID_0f927b80 (posted within 7 days)
[2026-02-01T11:13:57.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b642893b..." not found, but found as SHA256 "6b7c830449d47a5f"
[2026-02-01T11:13:57.912Z] [BOT] ⏭️  Skipping duplicate: JID_5dcdee45 (posted within 7 days)
[2026-02-01T11:13:57.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e27b2485..." not found, but found as SHA256 "5dbe80ef9252fe25"
[2026-02-01T11:13:57.912Z] [BOT] ⏭️  Skipping duplicate: JID_af57084e-i_r0059612 (posted within 7 days)
[2026-02-01T11:13:58.035Z] [BOT] ✅ Loaded pending queue: 2948 total (1112 pending, 49 enriched, 1787 posted)
[2026-02-01T11:13:58.216Z] [BOT] ✅ Saved pending queue: 2948 total (1112 pending, 39 enriched, 1797 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T11:13:58.217Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T11:13:58.306Z] [BOT] 📂 Loaded 11878 existing routing entries
[2026-02-01T11:13:58.440Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T11:13:58.441Z] [BOT] Total entries: 11888
   Timestamp: 2026-02-01T11:13:58.392Z
[2026-02-01T11:13:58.447Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 29
   Successful: 20
   Failed: 0
   Skipped: 9
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #📍・JID_6daed763: 7 posts
     2. #💻・tech-jobs: 6 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📊・JID_fb739488: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1807 jobs in memory (cached)
[2026-02-01T11:13:58.493Z] [BOT] ✅ Loaded V2 database: 1807 jobs
💾 DISK STATE: 1807 jobs on disk
[2026-02-01T11:13:58.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1807
[2026-02-01T11:13:58.499Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:13:58.499Z] [BOT] 💾 AFTER MERGE: 1807 jobs (merged disk + memory)
[2026-02-01T11:13:58.500Z] [BOT] ✅ No jobs to archive (all 1807 jobs within 7-day window)
[2026-02-01T11:13:58.595Z] [BOT] 💾 Saved posted_jobs.json: 1807 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:13:58.595Z] [BOT] ✅ Database saved successfully
[2026-02-01T11:14:00.632Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2707) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*