# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T14:28:08.519Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T14:27:18.881Z] ========================================
[2026-02-01T14:27:18.883Z] Discord Bot Execution Log
[2026-02-01T14:27:18.883Z] Environment: GitHub Actions
[2026-02-01T14:27:18.883Z] Node Version: v20.20.0
[2026-02-01T14:27:18.883Z] ========================================
[2026-02-01T14:27:18.883Z] Environment Variables Check:
[2026-02-01T14:27:18.883Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T14:27:18.883Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T14:27:18.883Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T14:27:18.883Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T14:27:18.883Z] 
Multi-Channel Configuration:
[2026-02-01T14:27:18.883Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T14:27:18.884Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T14:27:18.884Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:27:18.884Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T14:27:18.884Z] 
Data Files Check:
[2026-02-01T14:27:18.885Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59785 bytes)
[2026-02-01T14:27:18.935Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9937913 bytes)
[2026-02-01T14:27:18.935Z] 
========================================
[2026-02-01T14:27:18.935Z] Starting Enhanced Discord Bot...
[2026-02-01T14:27:18.935Z] ========================================
[2026-02-01T14:27:19.519Z] [BOT] ✅ Loaded V2 database: 1907 jobs
[2026-02-01T14:27:19.958Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T14:27:19.958Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T14:27:19.959Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T14:27:20.070Z] [BOT] ✅ Loaded pending queue: 2948 total (1001 pending, 50 enriched, 1897 posted)
[2026-02-01T14:27:20.070Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:27:20.071Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T14:27:20.072Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T14:27:20.072Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:27:20.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T14:27:20.072Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T14:27:20.073Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T14:27:20.073Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T14:27:20.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T14:27:20.074Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T14:27:20.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T14:27:20.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T14:27:20.074Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T14:27:20.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T14:27:20.075Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T14:27:20.090Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T14:27:20.090Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T14:27:20.091Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T14:27:20.091Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-02-01T14:27:20.092Z] [BOT] (8 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T14:27:20.092Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: dayton, new york, dallas, casa grande, san francisco, san jose, san diego
   - PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting: washington, boulder
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T14:27:20.095Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T14:27:20.096Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:20.096Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:20.113Z] [BOT ERROR] (node:2900) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T14:27:20.434Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:20.435Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:27:20.435Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-01T14:27:20.471Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-01T14:27:20.472Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-01T14:27:20.476Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:20.476Z] [BOT] 💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-01T14:27:20.478Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-01T14:27:20.612Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:22.377Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T14:27:22.378Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:22.378Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → location channel (2 total channels)
💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-01T14:27:22.417Z] [BOT] ✅ Loaded V2 database: 1908 jobs
[2026-02-01T14:27:22.418Z] [BOT] 💾 DISK STATE: 1908 jobs on disk
[2026-02-01T14:27:22.418Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-01T14:27:22.422Z] [BOT] 🔀 Deep merged: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:27:22.422Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-01T14:27:22.423Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-01T14:27:22.522Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:24.024Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:24.024Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:24.240Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:24.241Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:27:24.241Z] [BOT] 💾 BEFORE MERGE: 1909 jobs in memory (cached)
[2026-02-01T14:27:24.275Z] [BOT] ✅ Loaded V2 database: 1908 jobs
💾 DISK STATE: 1908 jobs on disk
[2026-02-01T14:27:24.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1909
[2026-02-01T14:27:24.279Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:24.279Z] [BOT] 💾 AFTER MERGE: 1909 jobs (merged disk + memory)
[2026-02-01T14:27:24.280Z] [BOT] ✅ No jobs to archive (all 1909 jobs within 7-day window)
[2026-02-01T14:27:24.383Z] [BOT] 💾 Saved posted_jobs.json: 1909 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:26.038Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:26.038Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:27:26.039Z] [BOT] 💾 BEFORE MERGE: 1909 jobs in memory (cached)
[2026-02-01T14:27:26.074Z] [BOT] ✅ Loaded V2 database: 1909 jobs
💾 DISK STATE: 1909 jobs on disk
[2026-02-01T14:27:26.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1909
[2026-02-01T14:27:26.078Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:27:26.078Z] [BOT] 💾 AFTER MERGE: 1909 jobs (merged disk + memory)
[2026-02-01T14:27:26.079Z] [BOT] ✅ No jobs to archive (all 1909 jobs within 7-day window)
[2026-02-01T14:27:26.202Z] [BOT] 💾 Saved posted_jobs.json: 1909 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:27.700Z] [BOT] 📍 [ROUTING] "SAP ERP Analyst" @ 360 IT Professionals
[2026-02-01T14:27:27.700Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:28.036Z] [BOT] ✅ Posted message: SAP ERP Analyst @ 360 IT Professionals in #💻・tech-jobs
[2026-02-01T14:27:28.036Z] [BOT] ✅ Industry: SAP ERP Analyst @ 360 IT Professionals
[2026-02-01T14:27:28.037Z] [BOT] 💾 Added channel posting: SAP ERP Analyst @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T14:27:28.038Z] [BOT] 💾 BEFORE MERGE: 1910 jobs in memory (cached)
[2026-02-01T14:27:28.081Z] [BOT] ✅ Loaded V2 database: 1909 jobs
💾 DISK STATE: 1909 jobs on disk
[2026-02-01T14:27:28.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1910
[2026-02-01T14:27:28.086Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1910 jobs (merged disk + memory)
[2026-02-01T14:27:28.087Z] [BOT] ✅ No jobs to archive (all 1910 jobs within 7-day window)
[2026-02-01T14:27:28.176Z] [BOT] 💾 Saved posted_jobs.json: 1910 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:29.862Z] [BOT] ✅ Posted message: SAP ERP Analyst @ 360 IT Professionals in #📍・JID_6daed763
[2026-02-01T14:27:29.863Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:29.863Z] [BOT] 💾 Added channel posting: SAP ERP Analyst @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T14:27:29.863Z] [BOT] 💾 BEFORE MERGE: 1910 jobs in memory (cached)
[2026-02-01T14:27:29.896Z] [BOT] ✅ Loaded V2 database: 1910 jobs
💾 DISK STATE: 1910 jobs on disk
[2026-02-01T14:27:29.897Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1910
[2026-02-01T14:27:29.900Z] [BOT] 🔀 Deep merged: SAP ERP Analyst @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:27:29.900Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1910 jobs (merged disk + memory)
[2026-02-01T14:27:29.901Z] [BOT] ✅ No jobs to archive (all 1910 jobs within 7-day window)
[2026-02-01T14:27:30.002Z] [BOT] 💾 Saved posted_jobs.json: 1910 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:31.504Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:31.796Z] [BOT] ✅ Posted message: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T14:27:31.796Z] [BOT] ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:31.797Z] [BOT] 💾 Added channel posting: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:27:31.797Z] [BOT] 💾 BEFORE MERGE: 1911 jobs in memory (cached)
[2026-02-01T14:27:31.831Z] [BOT] ✅ Loaded V2 database: 1910 jobs
💾 DISK STATE: 1910 jobs on disk
[2026-02-01T14:27:31.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1911
[2026-02-01T14:27:31.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:31.835Z] [BOT] 💾 AFTER MERGE: 1911 jobs (merged disk + memory)
[2026-02-01T14:27:31.836Z] [BOT] ✅ No jobs to archive (all 1911 jobs within 7-day window)
[2026-02-01T14:27:31.946Z] [BOT] 💾 Saved posted_jobs.json: 1911 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:33.614Z] [BOT] ✅ Posted message: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:33.614Z] [BOT] 💾 Added channel posting: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:27:33.614Z] [BOT] 💾 BEFORE MERGE: 1911 jobs in memory (cached)
[2026-02-01T14:27:33.648Z] [BOT] ✅ Loaded V2 database: 1911 jobs
💾 DISK STATE: 1911 jobs on disk
[2026-02-01T14:27:33.648Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1911
[2026-02-01T14:27:33.651Z] [BOT] 🔀 Deep merged: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:27:33.652Z] [BOT] 💾 AFTER MERGE: 1911 jobs (merged disk + memory)
[2026-02-01T14:27:33.653Z] [BOT] ✅ No jobs to archive (all 1911 jobs within 7-day window)
[2026-02-01T14:27:33.741Z] [BOT] 💾 Saved posted_jobs.json: 1911 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:35.244Z] [BOT] 📍 [ROUTING] "Embedded Software Engineer" @ ORG_0c79a9c2 Intuition
   Category: TECH (matched: "software")
[2026-02-01T14:27:35.244Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:35.618Z] [BOT] ✅ Posted message: Embedded Software Engineer @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-02-01T14:27:35.618Z] [BOT] ✅ Industry: Embedded Software Engineer @ ORG_0c79a9c2 Intuition
[2026-02-01T14:27:35.619Z] [BOT] 💾 Added channel posting: Embedded Software Engineer @ ORG_0c79a9c2 Intuition → category channel (1 total channels)
[2026-02-01T14:27:35.619Z] [BOT] 💾 BEFORE MERGE: 1912 jobs in memory (cached)
[2026-02-01T14:27:35.652Z] [BOT] ✅ Loaded V2 database: 1911 jobs
💾 DISK STATE: 1911 jobs on disk
[2026-02-01T14:27:35.652Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1912
[2026-02-01T14:27:35.655Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1912 jobs (merged disk + memory)
[2026-02-01T14:27:35.656Z] [BOT] ✅ No jobs to archive (all 1912 jobs within 7-day window)
[2026-02-01T14:27:35.756Z] [BOT] 💾 Saved posted_jobs.json: 1912 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:37.461Z] [BOT] ✅ Posted message: Embedded Software Engineer @ ORG_0c79a9c2 Intuition in #🌉・JID_739bbc0b
[2026-02-01T14:27:37.461Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:27:37.461Z] [BOT] 💾 Added channel posting: Embedded Software Engineer @ ORG_0c79a9c2 Intuition → location channel (2 total channels)
[2026-02-01T14:27:37.461Z] [BOT] 💾 BEFORE MERGE: 1912 jobs in memory (cached)
[2026-02-01T14:27:37.496Z] [BOT] ✅ Loaded V2 database: 1912 jobs
💾 DISK STATE: 1912 jobs on disk
[2026-02-01T14:27:37.497Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1912
[2026-02-01T14:27:37.500Z] [BOT] 🔀 Deep merged: Embedded Software Engineer @ ORG_0c79a9c2 Intuition (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:27:37.500Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1912 jobs (merged disk + memory)
[2026-02-01T14:27:37.501Z] [BOT] ✅ No jobs to archive (all 1912 jobs within 7-day window)
[2026-02-01T14:27:37.616Z] [BOT] 💾 Saved posted_jobs.json: 1912 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:39.118Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_28592017 Fleming
   Category: TECH (matched: "software")
[2026-02-01T14:27:39.118Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:39.379Z] [BOT] ✅ Posted message: Entry Level Software Developer @ ORG_28592017 Fleming in #💻・tech-jobs
  ✅ Industry: Entry Level Software Developer @ ORG_28592017 Fleming
[2026-02-01T14:27:39.380Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ ORG_28592017 Fleming → category channel (1 total channels)
[2026-02-01T14:27:39.380Z] [BOT] 💾 BEFORE MERGE: 1913 jobs in memory (cached)
[2026-02-01T14:27:39.413Z] [BOT] ✅ Loaded V2 database: 1912 jobs
💾 DISK STATE: 1912 jobs on disk
[2026-02-01T14:27:39.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1913
[2026-02-01T14:27:39.417Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:39.417Z] [BOT] 💾 AFTER MERGE: 1913 jobs (merged disk + memory)
[2026-02-01T14:27:39.418Z] [BOT] ✅ No jobs to archive (all 1913 jobs within 7-day window)
[2026-02-01T14:27:39.514Z] [BOT] 💾 Saved posted_jobs.json: 1913 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:41.014Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Microstrategy Tableau" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:27:41.226Z] [BOT] ✅ Posted message: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies
[2026-02-01T14:27:41.227Z] [BOT] 💾 Added channel posting: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:27:41.227Z] [BOT] 💾 BEFORE MERGE: 1914 jobs in memory (cached)
[2026-02-01T14:27:41.261Z] [BOT] ✅ Loaded V2 database: 1913 jobs
💾 DISK STATE: 1913 jobs on disk
[2026-02-01T14:27:41.262Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1914
[2026-02-01T14:27:41.265Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:41.265Z] [BOT] 💾 AFTER MERGE: 1914 jobs (merged disk + memory)
[2026-02-01T14:27:41.266Z] [BOT] ✅ No jobs to archive (all 1914 jobs within 7-day window)
[2026-02-01T14:27:41.364Z] [BOT] 💾 Saved posted_jobs.json: 1914 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:43.134Z] [BOT] ✅ Posted message: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:43.134Z] [BOT] 💾 Added channel posting: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:27:43.135Z] [BOT] 💾 BEFORE MERGE: 1914 jobs in memory (cached)
[2026-02-01T14:27:43.177Z] [BOT] ✅ Loaded V2 database: 1914 jobs
💾 DISK STATE: 1914 jobs on disk
[2026-02-01T14:27:43.178Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1914
[2026-02-01T14:27:43.181Z] [BOT] 🔀 Deep merged: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:27:43.181Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1914 jobs (merged disk + memory)
[2026-02-01T14:27:43.182Z] [BOT] ✅ No jobs to archive (all 1914 jobs within 7-day window)
[2026-02-01T14:27:43.293Z] [BOT] 💾 Saved posted_jobs.json: 1914 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:47.794Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T14:27:47.796Z] [BOT] 📍 [ROUTING] "GIS Analyst - Environmental Consulting and Management Services" @ ORG_52575429 Consulting
[2026-02-01T14:27:47.796Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T14:27:48.013Z] [BOT] ✅ Posted message: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #💰・finance-jobs
[2026-02-01T14:27:48.013Z] [BOT] ✅ Industry: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting
[2026-02-01T14:27:48.014Z] [BOT] 💾 Added channel posting: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T14:27:48.014Z] [BOT] 💾 BEFORE MERGE: 1915 jobs in memory (cached)
[2026-02-01T14:27:48.047Z] [BOT] ✅ Loaded V2 database: 1914 jobs
💾 DISK STATE: 1914 jobs on disk
[2026-02-01T14:27:48.047Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1915
[2026-02-01T14:27:48.050Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:48.050Z] [BOT] 💾 AFTER MERGE: 1915 jobs (merged disk + memory)
[2026-02-01T14:27:48.051Z] [BOT] ✅ No jobs to archive (all 1915 jobs within 7-day window)
[2026-02-01T14:27:48.158Z] [BOT] 💾 Saved posted_jobs.json: 1915 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:49.867Z] [BOT] ✅ Posted message: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #📍・JID_6daed763
[2026-02-01T14:27:49.867Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:27:49.868Z] [BOT] 💾 Added channel posting: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T14:27:49.868Z] [BOT] 💾 BEFORE MERGE: 1915 jobs in memory (cached)
[2026-02-01T14:27:49.901Z] [BOT] ✅ Loaded V2 database: 1915 jobs
💾 DISK STATE: 1915 jobs on disk
[2026-02-01T14:27:49.902Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1915
[2026-02-01T14:27:49.905Z] [BOT] 🔀 Deep merged: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:27:49.905Z] [BOT] 💾 AFTER MERGE: 1915 jobs (merged disk + memory)
[2026-02-01T14:27:49.906Z] [BOT] ✅ No jobs to archive (all 1915 jobs within 7-day window)
[2026-02-01T14:27:50.011Z] [BOT] 💾 Saved posted_jobs.json: 1915 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:54.511Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T14:27:54.512Z] [BOT] 📍 [ROUTING] "SQL data analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T14:27:54.512Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:27:54.769Z] [BOT] ✅ Posted message: SQL data analyst @ 360 IT Professionals in #📊・JID_fb739488
  ✅ Industry: SQL data analyst @ 360 IT Professionals
[2026-02-01T14:27:54.769Z] [BOT] 💾 Added channel posting: SQL data analyst @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T14:27:54.770Z] [BOT] 💾 BEFORE MERGE: 1916 jobs in memory (cached)
[2026-02-01T14:27:54.803Z] [BOT] ✅ Loaded V2 database: 1915 jobs
💾 DISK STATE: 1915 jobs on disk
[2026-02-01T14:27:54.803Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1916
[2026-02-01T14:27:54.807Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:54.807Z] [BOT] 💾 AFTER MERGE: 1916 jobs (merged disk + memory)
[2026-02-01T14:27:54.808Z] [BOT] ✅ No jobs to archive (all 1916 jobs within 7-day window)
[2026-02-01T14:27:54.922Z] [BOT] 💾 Saved posted_jobs.json: 1916 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:56.614Z] [BOT] ✅ Posted message: SQL data analyst @ 360 IT Professionals in #🌉・JID_739bbc0b
[2026-02-01T14:27:56.614Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:27:56.614Z] [BOT] 💾 Added channel posting: SQL data analyst @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T14:27:56.615Z] [BOT] 💾 BEFORE MERGE: 1916 jobs in memory (cached)
[2026-02-01T14:27:56.648Z] [BOT] ✅ Loaded V2 database: 1916 jobs
💾 DISK STATE: 1916 jobs on disk
[2026-02-01T14:27:56.648Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1916
[2026-02-01T14:27:56.651Z] [BOT] 🔀 Deep merged: SQL data analyst @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:27:56.652Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1916 jobs (merged disk + memory)
[2026-02-01T14:27:56.653Z] [BOT] ✅ No jobs to archive (all 1916 jobs within 7-day window)
[2026-02-01T14:27:56.758Z] [BOT] 💾 Saved posted_jobs.json: 1916 active jobs
[2026-02-01T14:27:56.758Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:27:58.259Z] [BOT] 📍 [ROUTING] "MDM Data Analyst 1" @ ORG_9b202ecb Tech Solutions
[2026-02-01T14:27:58.259Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:27:58.460Z] [BOT] ✅ Posted message: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #📊・JID_fb739488
[2026-02-01T14:27:58.460Z] [BOT] ✅ Industry: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions
[2026-02-01T14:27:58.461Z] [BOT] 💾 Added channel posting: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions → category channel (1 total channels)
[2026-02-01T14:27:58.461Z] [BOT] 💾 BEFORE MERGE: 1917 jobs in memory (cached)
[2026-02-01T14:27:58.496Z] [BOT] ✅ Loaded V2 database: 1916 jobs
💾 DISK STATE: 1916 jobs on disk
[2026-02-01T14:27:58.496Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1917
[2026-02-01T14:27:58.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:27:58.500Z] [BOT] 💾 AFTER MERGE: 1917 jobs (merged disk + memory)
[2026-02-01T14:27:58.501Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-02-01T14:27:58.599Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:28:00.271Z] [BOT] ✅ Posted message: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #📍・JID_6daed763
[2026-02-01T14:28:00.271Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:28:00.272Z] [BOT] 💾 Added channel posting: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions → location channel (2 total channels)
[2026-02-01T14:28:00.272Z] [BOT] 💾 BEFORE MERGE: 1917 jobs in memory (cached)
[2026-02-01T14:28:00.308Z] [BOT] ✅ Loaded V2 database: 1917 jobs
💾 DISK STATE: 1917 jobs on disk
[2026-02-01T14:28:00.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1917
[2026-02-01T14:28:00.312Z] [BOT] 🔀 Deep merged: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:28:00.312Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1917 jobs (merged disk + memory)
[2026-02-01T14:28:00.313Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-02-01T14:28:00.409Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:28:04.911Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T14:28:04.913Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "4328dea3722ee0c7"
[2026-02-01T14:28:04.913Z] [BOT] ⏭️  Skipping duplicate: JID_b283c6fa (posted within 7 days)
[2026-02-01T14:28:04.913Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "6d8bf83cfa7e96a2"
[2026-02-01T14:28:04.914Z] [BOT] ⏭️  Skipping duplicate: JID_25039e8c (posted within 7 days)
[2026-02-01T14:28:04.914Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "3cafb5640fe39fd0"
⏭️  Skipping duplicate: JID_d257b577 (posted within 7 days)
[2026-02-01T14:28:04.914Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "496c98f3c28692c3"
[2026-02-01T14:28:04.914Z] [BOT] ⏭️  Skipping duplicate: JID_262654bb (posted within 7 days)
[2026-02-01T14:28:04.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "b9741757cf6922a1"
[2026-02-01T14:28:04.915Z] [BOT] ⏭️  Skipping duplicate: JID_e3b6160c (posted within 7 days)
[2026-02-01T14:28:04.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10b0e829..." not found, but found as SHA256 "be7ccd327d584e73"
[2026-02-01T14:28:04.915Z] [BOT] ⏭️  Skipping duplicate: JID_6307eea9 (posted within 7 days)
[2026-02-01T14:28:04.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16d35a92..." not found, but found as SHA256 "7b305287eb01e5ee"
[2026-02-01T14:28:04.915Z] [BOT] ⏭️  Skipping duplicate: JID_f8f7521f (posted within 7 days)
[2026-02-01T14:28:04.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "aee0021d2c647aaa"
[2026-02-01T14:28:04.916Z] [BOT] ⏭️  Skipping duplicate: JID_502a0023 (posted within 7 days)
[2026-02-01T14:28:04.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "1a00e79d54ef7487"
[2026-02-01T14:28:04.916Z] [BOT] ⏭️  Skipping duplicate: JID_d9176382 (posted within 7 days)
[2026-02-01T14:28:04.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d52d01f..." not found, but found as SHA256 "f9cf3518ba91c17e"
[2026-02-01T14:28:04.916Z] [BOT] ⏭️  Skipping duplicate: JID_44a6fa11 (posted within 7 days)
[2026-02-01T14:28:05.039Z] [BOT] ✅ Loaded pending queue: 2948 total (1001 pending, 50 enriched, 1897 posted)
[2026-02-01T14:28:05.218Z] [BOT] ✅ Saved pending queue: 2948 total (1001 pending, 40 enriched, 1907 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T14:28:05.218Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T14:28:05.307Z] [BOT] 📂 Loaded 11988 existing routing entries
[2026-02-01T14:28:05.443Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T14:28:05.444Z] [BOT] Total entries: 11998
   Timestamp: 2026-02-01T14:28:05.393Z
[2026-02-01T14:28:05.444Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T14:28:05.444Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T14:28:05.444Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 7 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #📊・JID_fb739488: 2 posts
     5. #💰・finance-jobs: 1 posts
[2026-02-01T14:28:05.445Z] [BOT] [STATS] Channel stats saved
[2026-02-01T14:28:05.445Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1917 jobs in memory (cached)
[2026-02-01T14:28:05.503Z] [BOT] ✅ Loaded V2 database: 1917 jobs
💾 DISK STATE: 1917 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1917
[2026-02-01T14:28:05.505Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:28:05.505Z] [BOT] 💾 AFTER MERGE: 1917 jobs (merged disk + memory)
[2026-02-01T14:28:05.506Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-02-01T14:28:05.603Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:28:05.603Z] [BOT] ✅ Database saved successfully
[2026-02-01T14:28:07.635Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2900) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*