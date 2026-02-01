# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T12:57:01.131Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T12:56:13.565Z] ========================================
[2026-02-01T12:56:13.567Z] Discord Bot Execution Log
[2026-02-01T12:56:13.567Z] Environment: GitHub Actions
[2026-02-01T12:56:13.568Z] Node Version: v20.20.0
[2026-02-01T12:56:13.568Z] ========================================
[2026-02-01T12:56:13.568Z] Environment Variables Check:
[2026-02-01T12:56:13.568Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T12:56:13.568Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T12:56:13.568Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T12:56:13.568Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T12:56:13.568Z] 
Multi-Channel Configuration:
[2026-02-01T12:56:13.568Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T12:56:13.568Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T12:56:13.569Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:56:13.569Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T12:56:13.569Z] 
Data Files Check:
[2026-02-01T12:56:13.570Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58394 bytes)
[2026-02-01T12:56:13.619Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9849336 bytes)
[2026-02-01T12:56:13.619Z] 
========================================
[2026-02-01T12:56:13.619Z] Starting Enhanced Discord Bot...
[2026-02-01T12:56:13.619Z] ========================================
[2026-02-01T12:56:14.184Z] [BOT] ✅ Loaded V2 database: 1867 jobs
[2026-02-01T12:56:14.590Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T12:56:14.591Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T12:56:14.591Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T12:56:14.701Z] [BOT] ✅ Loaded pending queue: 2948 total (1041 pending, 50 enriched, 1857 posted)
[2026-02-01T12:56:14.701Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T12:56:14.702Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:56:14.703Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T12:56:14.703Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:56:14.703Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T12:56:14.703Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T12:56:14.704Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T12:56:14.704Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T12:56:14.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T12:56:14.705Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T12:56:14.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T12:56:14.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T12:56:14.705Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T12:56:14.706Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T12:56:14.706Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T12:56:14.719Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T12:56:14.719Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T12:56:14.720Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T12:56:14.720Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-02-01T12:56:14.721Z] [BOT] (10 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T12:56:14.721Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego, dayton, new york, dallas, casa grande
   - Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san antonio, tampa
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T12:56:14.723Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T12:56:14.724Z] [BOT] 📍 [ROUTING] "Software Engineer I - Embedded Devices" @ ORG_aea5fbb0
[2026-02-01T12:56:14.724Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:14.742Z] [BOT ERROR] (node:2924) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T12:56:15.057Z] [BOT] ✅ Posted message: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I - Embedded Devices @ ORG_aea5fbb0
[2026-02-01T12:56:15.058Z] [BOT] 💾 Added channel posting: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 → category channel (1 total channels)
[2026-02-01T12:56:15.058Z] [BOT] 💾 BEFORE MERGE: 1868 jobs in memory (cached)
[2026-02-01T12:56:15.098Z] [BOT] ✅ Loaded V2 database: 1867 jobs
💾 DISK STATE: 1867 jobs on disk
[2026-02-01T12:56:15.098Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1868
[2026-02-01T12:56:15.103Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:15.103Z] [BOT] 💾 AFTER MERGE: 1868 jobs (merged disk + memory)
[2026-02-01T12:56:15.104Z] [BOT] ✅ No jobs to archive (all 1868 jobs within 7-day window)
[2026-02-01T12:56:15.222Z] [BOT] 💾 Saved posted_jobs.json: 1868 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:16.892Z] [BOT] ✅ Posted message: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:56:16.892Z] [BOT] 💾 Added channel posting: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 → location channel (2 total channels)
[2026-02-01T12:56:16.892Z] [BOT] 💾 BEFORE MERGE: 1868 jobs in memory (cached)
[2026-02-01T12:56:16.928Z] [BOT] ✅ Loaded V2 database: 1868 jobs
[2026-02-01T12:56:16.928Z] [BOT] 💾 DISK STATE: 1868 jobs on disk
[2026-02-01T12:56:16.928Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1868
[2026-02-01T12:56:16.932Z] [BOT] 🔀 Deep merged: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:16.932Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1868 jobs (merged disk + memory)
[2026-02-01T12:56:16.933Z] [BOT] ✅ No jobs to archive (all 1868 jobs within 7-day window)
[2026-02-01T12:56:17.029Z] [BOT] 💾 Saved posted_jobs.json: 1868 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:18.530Z] [BOT] 📍 [ROUTING] "Software Engineer: Microsoft AI Development Acceleration Program" @ ORG_c7bac469
[2026-02-01T12:56:18.531Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:18.663Z] [BOT] ✅ Posted message: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 in #💻・tech-jobs
[2026-02-01T12:56:18.663Z] [BOT] ✅ Industry: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469
[2026-02-01T12:56:18.664Z] [BOT] 💾 Added channel posting: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-01T12:56:18.664Z] [BOT] 💾 BEFORE MERGE: 1869 jobs in memory (cached)
[2026-02-01T12:56:18.697Z] [BOT] ✅ Loaded V2 database: 1868 jobs
💾 DISK STATE: 1868 jobs on disk
[2026-02-01T12:56:18.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1869
[2026-02-01T12:56:18.702Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:18.702Z] [BOT] 💾 AFTER MERGE: 1869 jobs (merged disk + memory)
[2026-02-01T12:56:18.703Z] [BOT] ✅ No jobs to archive (all 1869 jobs within 7-day window)
[2026-02-01T12:56:18.818Z] [BOT] 💾 Saved posted_jobs.json: 1869 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:20.475Z] [BOT] ✅ Posted message: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 in #🌲・JID_efdf5921
[2026-02-01T12:56:20.475Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T12:56:20.475Z] [BOT] 💾 Added channel posting: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 → location channel (2 total channels)
[2026-02-01T12:56:20.475Z] [BOT] 💾 BEFORE MERGE: 1869 jobs in memory (cached)
[2026-02-01T12:56:20.507Z] [BOT] ✅ Loaded V2 database: 1869 jobs
💾 DISK STATE: 1869 jobs on disk
[2026-02-01T12:56:20.508Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1869
[2026-02-01T12:56:20.512Z] [BOT] 🔀 Deep merged: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:56:20.512Z] [BOT] 💾 AFTER MERGE: 1869 jobs (merged disk + memory)
[2026-02-01T12:56:20.513Z] [BOT] ✅ No jobs to archive (all 1869 jobs within 7-day window)
[2026-02-01T12:56:20.600Z] [BOT] 💾 Saved posted_jobs.json: 1869 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:22.102Z] [BOT] 📍 [ROUTING] "Algorithm Developer (Quant Researcher) – 2026 Grads" @ ORG_ccdc7d45 River Trading
   Category: TECH (matched: "software")
[2026-02-01T12:56:22.103Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:22.227Z] [BOT] ✅ Posted message: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading in #💻・tech-jobs
[2026-02-01T12:56:22.227Z] [BOT] ✅ Industry: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading
[2026-02-01T12:56:22.227Z] [BOT] 💾 Added channel posting: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading → category channel (1 total channels)
[2026-02-01T12:56:22.227Z] [BOT] 💾 BEFORE MERGE: 1870 jobs in memory (cached)
[2026-02-01T12:56:22.261Z] [BOT] ✅ Loaded V2 database: 1869 jobs
💾 DISK STATE: 1869 jobs on disk
[2026-02-01T12:56:22.261Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1870
[2026-02-01T12:56:22.265Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:22.265Z] [BOT] 💾 AFTER MERGE: 1870 jobs (merged disk + memory)
[2026-02-01T12:56:22.266Z] [BOT] ✅ No jobs to archive (all 1870 jobs within 7-day window)
[2026-02-01T12:56:22.366Z] [BOT] 💾 Saved posted_jobs.json: 1870 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:24.042Z] [BOT] ✅ Posted message: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading in #🗽・JID_98d4f0de
[2026-02-01T12:56:24.043Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T12:56:24.043Z] [BOT] 💾 Added channel posting: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading → location channel (2 total channels)
[2026-02-01T12:56:24.043Z] [BOT] 💾 BEFORE MERGE: 1870 jobs in memory (cached)
[2026-02-01T12:56:24.076Z] [BOT] ✅ Loaded V2 database: 1870 jobs
💾 DISK STATE: 1870 jobs on disk
[2026-02-01T12:56:24.076Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1870
[2026-02-01T12:56:24.080Z] [BOT] 🔀 Deep merged: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:24.080Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1870 jobs (merged disk + memory)
[2026-02-01T12:56:24.081Z] [BOT] ✅ No jobs to archive (all 1870 jobs within 7-day window)
[2026-02-01T12:56:24.171Z] [BOT] 💾 Saved posted_jobs.json: 1870 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:25.674Z] [BOT] 📍 [ROUTING] "Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS)" @ ORG_08c9a13c
[2026-02-01T12:56:25.674Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:25.937Z] [BOT] ✅ Posted message: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T12:56:25.937Z] [BOT] ✅ Industry: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c
[2026-02-01T12:56:25.938Z] [BOT] 💾 Added channel posting: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1871 jobs in memory (cached)
[2026-02-01T12:56:25.971Z] [BOT] ✅ Loaded V2 database: 1870 jobs
💾 DISK STATE: 1870 jobs on disk
[2026-02-01T12:56:25.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1871
[2026-02-01T12:56:25.975Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:25.975Z] [BOT] 💾 AFTER MERGE: 1871 jobs (merged disk + memory)
[2026-02-01T12:56:25.976Z] [BOT] ✅ No jobs to archive (all 1871 jobs within 7-day window)
[2026-02-01T12:56:26.076Z] [BOT] 💾 Saved posted_jobs.json: 1871 active jobs
[2026-02-01T12:56:26.077Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:27.729Z] [BOT] ✅ Posted message: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:27.729Z] [BOT] 💾 Added channel posting: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:56:27.730Z] [BOT] 💾 BEFORE MERGE: 1871 jobs in memory (cached)
[2026-02-01T12:56:27.771Z] [BOT] ✅ Loaded V2 database: 1871 jobs
💾 DISK STATE: 1871 jobs on disk
[2026-02-01T12:56:27.772Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1871
[2026-02-01T12:56:27.776Z] [BOT] 🔀 Deep merged: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:27.776Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1871 jobs (merged disk + memory)
[2026-02-01T12:56:27.777Z] [BOT] ✅ No jobs to archive (all 1871 jobs within 7-day window)
[2026-02-01T12:56:27.881Z] [BOT] 💾 Saved posted_jobs.json: 1871 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:29.384Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS)" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-02-01T12:56:29.384Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:29.632Z] [BOT] ✅ Posted message: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-02-01T12:56:29.632Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1872 jobs in memory (cached)
[2026-02-01T12:56:29.665Z] [BOT] ✅ Loaded V2 database: 1871 jobs
💾 DISK STATE: 1871 jobs on disk
[2026-02-01T12:56:29.665Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1872
[2026-02-01T12:56:29.669Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1872 jobs (merged disk + memory)
[2026-02-01T12:56:29.670Z] [BOT] ✅ No jobs to archive (all 1872 jobs within 7-day window)
[2026-02-01T12:56:29.764Z] [BOT] 💾 Saved posted_jobs.json: 1872 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:31.569Z] [BOT] ✅ Posted message: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:31.570Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:56:31.570Z] [BOT] 💾 BEFORE MERGE: 1872 jobs in memory (cached)
[2026-02-01T12:56:31.606Z] [BOT] ✅ Loaded V2 database: 1872 jobs
[2026-02-01T12:56:31.606Z] [BOT] 💾 DISK STATE: 1872 jobs on disk
[2026-02-01T12:56:31.606Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1872
[2026-02-01T12:56:31.609Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:56:31.610Z] [BOT] 💾 AFTER MERGE: 1872 jobs (merged disk + memory)
[2026-02-01T12:56:31.611Z] [BOT] ✅ No jobs to archive (all 1872 jobs within 7-day window)
[2026-02-01T12:56:31.721Z] [BOT] 💾 Saved posted_jobs.json: 1872 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:33.220Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T12:56:33.221Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:56:33.420Z] [BOT] ✅ Posted message: Java Developer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T12:56:33.420Z] [BOT] ✅ Industry: Java Developer @ ORG_9af9eef3 Technologies
[2026-02-01T12:56:33.421Z] [BOT] 💾 Added channel posting: Java Developer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 1873 jobs in memory (cached)
[2026-02-01T12:56:33.453Z] [BOT] ✅ Loaded V2 database: 1872 jobs
[2026-02-01T12:56:33.453Z] [BOT] 💾 DISK STATE: 1872 jobs on disk
[2026-02-01T12:56:33.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1873
[2026-02-01T12:56:33.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:33.457Z] [BOT] 💾 AFTER MERGE: 1873 jobs (merged disk + memory)
[2026-02-01T12:56:33.458Z] [BOT] ✅ No jobs to archive (all 1873 jobs within 7-day window)
[2026-02-01T12:56:33.545Z] [BOT] 💾 Saved posted_jobs.json: 1873 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:35.172Z] [BOT] ✅ Posted message: Java Developer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:56:35.173Z] [BOT] 💾 Added channel posting: Java Developer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
💾 BEFORE MERGE: 1873 jobs in memory (cached)
[2026-02-01T12:56:35.206Z] [BOT] ✅ Loaded V2 database: 1873 jobs
💾 DISK STATE: 1873 jobs on disk
[2026-02-01T12:56:35.206Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1873
[2026-02-01T12:56:35.209Z] [BOT] 🔀 Deep merged: Java Developer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:35.209Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1873 jobs (merged disk + memory)
[2026-02-01T12:56:35.210Z] [BOT] ✅ No jobs to archive (all 1873 jobs within 7-day window)
[2026-02-01T12:56:35.320Z] [BOT] 💾 Saved posted_jobs.json: 1873 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:39.822Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T12:56:39.823Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T12:56:39.823Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:56:40.054Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-02-01T12:56:40.055Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T12:56:40.055Z] [BOT] 💾 BEFORE MERGE: 1874 jobs in memory (cached)
[2026-02-01T12:56:40.088Z] [BOT] ✅ Loaded V2 database: 1873 jobs
💾 DISK STATE: 1873 jobs on disk
[2026-02-01T12:56:40.088Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1874
[2026-02-01T12:56:40.091Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:40.091Z] [BOT] 💾 AFTER MERGE: 1874 jobs (merged disk + memory)
[2026-02-01T12:56:40.093Z] [BOT] ✅ No jobs to archive (all 1874 jobs within 7-day window)
[2026-02-01T12:56:40.183Z] [BOT] 💾 Saved posted_jobs.json: 1874 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:41.955Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:41.955Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T12:56:41.955Z] [BOT] 💾 BEFORE MERGE: 1874 jobs in memory (cached)
[2026-02-01T12:56:41.991Z] [BOT] ✅ Loaded V2 database: 1874 jobs
💾 DISK STATE: 1874 jobs on disk
[2026-02-01T12:56:41.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1874
[2026-02-01T12:56:41.994Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:56:41.994Z] [BOT] 💾 AFTER MERGE: 1874 jobs (merged disk + memory)
[2026-02-01T12:56:41.996Z] [BOT] ✅ No jobs to archive (all 1874 jobs within 7-day window)
[2026-02-01T12:56:42.094Z] [BOT] 💾 Saved posted_jobs.json: 1874 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:43.595Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS)" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T12:56:43.595Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:56:43.786Z] [BOT] ✅ Posted message: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T12:56:43.786Z] [BOT] ✅ Industry: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-02-01T12:56:43.787Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:56:43.787Z] [BOT] 💾 BEFORE MERGE: 1875 jobs in memory (cached)
[2026-02-01T12:56:43.820Z] [BOT] ✅ Loaded V2 database: 1874 jobs
💾 DISK STATE: 1874 jobs on disk
[2026-02-01T12:56:43.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1875
[2026-02-01T12:56:43.823Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1875 jobs (merged disk + memory)
[2026-02-01T12:56:43.824Z] [BOT] ✅ No jobs to archive (all 1875 jobs within 7-day window)
[2026-02-01T12:56:43.911Z] [BOT] 💾 Saved posted_jobs.json: 1875 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:45.651Z] [BOT] ✅ Posted message: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T12:56:45.651Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:45.652Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:56:45.652Z] [BOT] 💾 BEFORE MERGE: 1875 jobs in memory (cached)
[2026-02-01T12:56:45.684Z] [BOT] ✅ Loaded V2 database: 1875 jobs
[2026-02-01T12:56:45.684Z] [BOT] 💾 DISK STATE: 1875 jobs on disk
[2026-02-01T12:56:45.684Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1875
[2026-02-01T12:56:45.687Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:45.688Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1875 jobs (merged disk + memory)
[2026-02-01T12:56:45.689Z] [BOT] ✅ No jobs to archive (all 1875 jobs within 7-day window)
[2026-02-01T12:56:45.788Z] [BOT] 💾 Saved posted_jobs.json: 1875 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:47.289Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS)" @ ORG_08c9a13c
[2026-02-01T12:56:47.289Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:56:47.488Z] [BOT] ✅ Posted message: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-02-01T12:56:47.488Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:56:47.488Z] [BOT] 💾 BEFORE MERGE: 1876 jobs in memory (cached)
[2026-02-01T12:56:47.527Z] [BOT] ✅ Loaded V2 database: 1875 jobs
💾 DISK STATE: 1875 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1876
[2026-02-01T12:56:47.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:47.533Z] [BOT] 💾 AFTER MERGE: 1876 jobs (merged disk + memory)
[2026-02-01T12:56:47.534Z] [BOT] ✅ No jobs to archive (all 1876 jobs within 7-day window)
[2026-02-01T12:56:47.644Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:49.376Z] [BOT] ✅ Posted message: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:49.377Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:56:49.377Z] [BOT] 💾 BEFORE MERGE: 1876 jobs in memory (cached)
[2026-02-01T12:56:49.409Z] [BOT] ✅ Loaded V2 database: 1876 jobs
💾 DISK STATE: 1876 jobs on disk
[2026-02-01T12:56:49.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1876
[2026-02-01T12:56:49.413Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:56:49.413Z] [BOT] 💾 AFTER MERGE: 1876 jobs (merged disk + memory)
[2026-02-01T12:56:49.414Z] [BOT] ✅ No jobs to archive (all 1876 jobs within 7-day window)
[2026-02-01T12:56:49.505Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:51.007Z] [BOT] 📍 [ROUTING] "Machine Learning Research Scientist - Hsu & Konermann Labs" @ ORG_7291b1b6 Institute
   Category: AI (matched: "machine learning")
[2026-02-01T12:56:51.008Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:56:51.159Z] [BOT] ✅ Posted message: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute in #🤖・ai-jobs
[2026-02-01T12:56:51.159Z] [BOT] ✅ Industry: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute
[2026-02-01T12:56:51.160Z] [BOT] 💾 Added channel posting: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute → category channel (1 total channels)
[2026-02-01T12:56:51.160Z] [BOT] 💾 BEFORE MERGE: 1877 jobs in memory (cached)
[2026-02-01T12:56:51.192Z] [BOT] ✅ Loaded V2 database: 1876 jobs
💾 DISK STATE: 1876 jobs on disk
[2026-02-01T12:56:51.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1877
[2026-02-01T12:56:51.196Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:51.196Z] [BOT] 💾 AFTER MERGE: 1877 jobs (merged disk + memory)
[2026-02-01T12:56:51.197Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-02-01T12:56:51.295Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
[2026-02-01T12:56:51.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:52.980Z] [BOT] ✅ Posted message: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:56:52.980Z] [BOT] 💾 Added channel posting: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute → location channel (2 total channels)
[2026-02-01T12:56:52.981Z] [BOT] 💾 BEFORE MERGE: 1877 jobs in memory (cached)
[2026-02-01T12:56:53.013Z] [BOT] ✅ Loaded V2 database: 1877 jobs
💾 DISK STATE: 1877 jobs on disk
[2026-02-01T12:56:53.013Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1877
[2026-02-01T12:56:53.017Z] [BOT] 🔀 Deep merged: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:56:53.017Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1877 jobs (merged disk + memory)
[2026-02-01T12:56:53.018Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-02-01T12:56:53.105Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:57.607Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T12:56:57.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6995dcd7..." not found, but found as SHA256 "894fe42031103bcd"
[2026-02-01T12:56:57.608Z] [BOT] ⏭️  Skipping duplicate: JID_e34c8ab9-devices_r16418 (posted within 7 days)
[2026-02-01T12:56:57.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_93421a41..." not found, but found as SHA256 "a1792ae1024eb699"
⏭️  Skipping duplicate: JID_6796d1d6-CH_efd35e0a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8c1ed441..." not found, but found as SHA256 "6cb786fb8540fa43"
⏭️  Skipping duplicate: JID_5639f003 (posted within 7 days)
[2026-02-01T12:56:57.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c33bd6ea..." not found, but found as SHA256 "001ee6a40d7e1cb0"
[2026-02-01T12:56:57.609Z] [BOT] ⏭️  Skipping duplicate: JID_620d4a22 (posted within 7 days)
[2026-02-01T12:56:57.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eab828de..." not found, but found as SHA256 "aacd89e996319d57"
⏭️  Skipping duplicate: JID_9e797e73-CH_77b0f5d6 (posted within 7 days)
[2026-02-01T12:56:57.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba968395..." not found, but found as SHA256 "1207beed771fba32"
[2026-02-01T12:56:57.610Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_a186c8e3 (posted within 7 days)
[2026-02-01T12:56:57.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3cccf2ae..." not found, but found as SHA256 "c8b7902e9c36c5d8"
[2026-02-01T12:56:57.610Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_c2df5284 (posted within 7 days)
[2026-02-01T12:56:57.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d8e481cf..." not found, but found as SHA256 "9f6b638604ccf38e"
⏭️  Skipping duplicate: JID_9e797e73-CH_7860474a (posted within 7 days)
[2026-02-01T12:56:57.611Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e83d444..." not found, but found as SHA256 "45b306e7f48b5d02"
[2026-02-01T12:56:57.611Z] [BOT] ⏭️  Skipping duplicate: JID_fecf8658 (posted within 7 days)
[2026-02-01T12:56:57.611Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "c44977f041ea8a0a"
⏭️  Skipping duplicate: JID_aa3587dd (posted within 7 days)
[2026-02-01T12:56:57.727Z] [BOT] ✅ Loaded pending queue: 2948 total (1041 pending, 50 enriched, 1857 posted)
[2026-02-01T12:56:57.913Z] [BOT] ✅ Saved pending queue: 2948 total (1041 pending, 40 enriched, 1867 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T12:56:57.913Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T12:56:58.002Z] [BOT] 📂 Loaded 11948 existing routing entries
[2026-02-01T12:56:58.153Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T12:56:58.153Z] [BOT] New entries: 10
   Total entries: 11958
   Timestamp: 2026-02-01T12:56:58.091Z
[2026-02-01T12:56:58.154Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T12:56:58.154Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T12:56:58.154Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・JID_739bbc0b: 6 posts
[2026-02-01T12:56:58.154Z] [BOT] 3. #🤖・ai-jobs: 4 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🌲・JID_efdf5921: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T12:56:58.154Z] [BOT] 💾 BEFORE MERGE: 1877 jobs in memory (cached)
[2026-02-01T12:56:58.191Z] [BOT] ✅ Loaded V2 database: 1877 jobs
💾 DISK STATE: 1877 jobs on disk
[2026-02-01T12:56:58.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1877
[2026-02-01T12:56:58.194Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:56:58.194Z] [BOT] 💾 AFTER MERGE: 1877 jobs (merged disk + memory)
[2026-02-01T12:56:58.196Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-02-01T12:56:58.288Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:56:58.288Z] [BOT] ✅ Database saved successfully
[2026-02-01T12:57:00.322Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2924) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*