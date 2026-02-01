# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T14:52:03.570Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T14:51:17.528Z] ========================================
[2026-02-01T14:51:17.530Z] Discord Bot Execution Log
[2026-02-01T14:51:17.530Z] Environment: GitHub Actions
[2026-02-01T14:51:17.530Z] Node Version: v20.20.0
[2026-02-01T14:51:17.530Z] ========================================
[2026-02-01T14:51:17.530Z] Environment Variables Check:
[2026-02-01T14:51:17.530Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T14:51:17.530Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T14:51:17.530Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T14:51:17.531Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T14:51:17.531Z] 
Multi-Channel Configuration:
[2026-02-01T14:51:17.531Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T14:51:17.531Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T14:51:17.531Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:51:17.531Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T14:51:17.532Z] 
Data Files Check:
[2026-02-01T14:51:17.532Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59415 bytes)
[2026-02-01T14:51:17.582Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10010149 bytes)
[2026-02-01T14:51:17.582Z] 
========================================
[2026-02-01T14:51:17.582Z] Starting Enhanced Discord Bot...
[2026-02-01T14:51:17.582Z] ========================================
[2026-02-01T14:51:18.171Z] [BOT] ✅ Loaded V2 database: 1927 jobs
[2026-02-01T14:51:18.653Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T14:51:18.653Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T14:51:18.653Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T14:51:18.768Z] [BOT] ✅ Loaded pending queue: 2948 total (981 pending, 50 enriched, 1917 posted)
[2026-02-01T14:51:18.768Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T14:51:18.769Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:51:18.770Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T14:51:18.770Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:51:18.770Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T14:51:18.771Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T14:51:18.771Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T14:51:18.771Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T14:51:18.771Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T14:51:18.772Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T14:51:18.772Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T14:51:18.772Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T14:51:18.772Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T14:51:18.772Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T14:51:18.772Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T14:51:18.773Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T14:51:18.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T14:51:18.773Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T14:51:18.787Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T14:51:18.787Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T14:51:18.788Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T14:51:18.788Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-02-01T14:51:18.789Z] [BOT] (11 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T14:51:18.789Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: dallas, casa grande, san francisco, san jose, san diego, flower mound, new york
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T14:51:18.791Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T14:51:18.792Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T14:51:18.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:18.809Z] [BOT ERROR] (node:3347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T14:51:19.175Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T14:51:19.177Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:51:19.177Z] [BOT] 💾 BEFORE MERGE: 1928 jobs in memory (cached)
[2026-02-01T14:51:19.214Z] [BOT] ✅ Loaded V2 database: 1927 jobs
💾 DISK STATE: 1927 jobs on disk
[2026-02-01T14:51:19.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1928
[2026-02-01T14:51:19.219Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:19.219Z] [BOT] 💾 AFTER MERGE: 1928 jobs (merged disk + memory)
[2026-02-01T14:51:19.220Z] [BOT] ✅ No jobs to archive (all 1928 jobs within 7-day window)
[2026-02-01T14:51:19.349Z] [BOT] 💾 Saved posted_jobs.json: 1928 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:21.055Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T14:51:21.056Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:51:21.056Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:51:21.056Z] [BOT] 💾 BEFORE MERGE: 1928 jobs in memory (cached)
[2026-02-01T14:51:21.093Z] [BOT] ✅ Loaded V2 database: 1928 jobs
[2026-02-01T14:51:21.093Z] [BOT] 💾 DISK STATE: 1928 jobs on disk
[2026-02-01T14:51:21.093Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1928
[2026-02-01T14:51:21.097Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:51:21.097Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1928 jobs (merged disk + memory)
[2026-02-01T14:51:21.098Z] [BOT] ✅ No jobs to archive (all 1928 jobs within 7-day window)
[2026-02-01T14:51:21.199Z] [BOT] 💾 Saved posted_jobs.json: 1928 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:22.701Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – New Grad" @ ORG_33a7935d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:22.966Z] [BOT] ✅ Posted message: Software Engineering AMTS – New Grad @ ORG_33a7935d in #💻・tech-jobs
[2026-02-01T14:51:22.966Z] [BOT] ✅ Industry: Software Engineering AMTS – New Grad @ ORG_33a7935d
[2026-02-01T14:51:22.967Z] [BOT] 💾 Added channel posting: Software Engineering AMTS – New Grad @ ORG_33a7935d → category channel (1 total channels)
[2026-02-01T14:51:22.967Z] [BOT] 💾 BEFORE MERGE: 1929 jobs in memory (cached)
[2026-02-01T14:51:23.002Z] [BOT] ✅ Loaded V2 database: 1928 jobs
💾 DISK STATE: 1928 jobs on disk
[2026-02-01T14:51:23.002Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1929
[2026-02-01T14:51:23.006Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:23.006Z] [BOT] 💾 AFTER MERGE: 1929 jobs (merged disk + memory)
[2026-02-01T14:51:23.007Z] [BOT] ✅ No jobs to archive (all 1929 jobs within 7-day window)
[2026-02-01T14:51:23.127Z] [BOT] 💾 Saved posted_jobs.json: 1929 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:24.868Z] [BOT] ✅ Posted message: Software Engineering AMTS – New Grad @ ORG_33a7935d in #🌉・JID_739bbc0b
[2026-02-01T14:51:24.868Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:51:24.868Z] [BOT] 💾 Added channel posting: Software Engineering AMTS – New Grad @ ORG_33a7935d → location channel (2 total channels)
[2026-02-01T14:51:24.869Z] [BOT] 💾 BEFORE MERGE: 1929 jobs in memory (cached)
[2026-02-01T14:51:24.902Z] [BOT] ✅ Loaded V2 database: 1929 jobs
💾 DISK STATE: 1929 jobs on disk
[2026-02-01T14:51:24.902Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1929
[2026-02-01T14:51:24.907Z] [BOT] 🔀 Deep merged: Software Engineering AMTS – New Grad @ ORG_33a7935d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:51:24.907Z] [BOT] 💾 AFTER MERGE: 1929 jobs (merged disk + memory)
[2026-02-01T14:51:24.908Z] [BOT] ✅ No jobs to archive (all 1929 jobs within 7-day window)
[2026-02-01T14:51:24.999Z] [BOT] 💾 Saved posted_jobs.json: 1929 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:26.501Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Developer Infra - BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:26.791Z] [BOT] ✅ Posted message: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c
[2026-02-01T14:51:26.791Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T14:51:26.791Z] [BOT] 💾 BEFORE MERGE: 1930 jobs in memory (cached)
[2026-02-01T14:51:26.826Z] [BOT] ✅ Loaded V2 database: 1929 jobs
💾 DISK STATE: 1929 jobs on disk
[2026-02-01T14:51:26.827Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1930
[2026-02-01T14:51:26.831Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:26.831Z] [BOT] 💾 AFTER MERGE: 1930 jobs (merged disk + memory)
[2026-02-01T14:51:26.833Z] [BOT] ✅ No jobs to archive (all 1930 jobs within 7-day window)
[2026-02-01T14:51:26.952Z] [BOT] 💾 Saved posted_jobs.json: 1930 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:28.768Z] [BOT] ✅ Posted message: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:51:28.769Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T14:51:28.769Z] [BOT] 💾 BEFORE MERGE: 1930 jobs in memory (cached)
[2026-02-01T14:51:28.802Z] [BOT] ✅ Loaded V2 database: 1930 jobs
💾 DISK STATE: 1930 jobs on disk
[2026-02-01T14:51:28.803Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1930
[2026-02-01T14:51:28.806Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:51:28.806Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1930 jobs (merged disk + memory)
[2026-02-01T14:51:28.807Z] [BOT] ✅ No jobs to archive (all 1930 jobs within 7-day window)
[2026-02-01T14:51:28.898Z] [BOT] 💾 Saved posted_jobs.json: 1930 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:30.401Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_6675b3b7 Information System
[2026-02-01T14:51:30.401Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:30.666Z] [BOT] ✅ Posted message: Java Developer @ ORG_6675b3b7 Information System in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_6675b3b7 Information System
[2026-02-01T14:51:30.667Z] [BOT] 💾 Added channel posting: Java Developer @ ORG_6675b3b7 Information System → category channel (1 total channels)
[2026-02-01T14:51:30.667Z] [BOT] 💾 BEFORE MERGE: 1931 jobs in memory (cached)
[2026-02-01T14:51:30.701Z] [BOT] ✅ Loaded V2 database: 1930 jobs
💾 DISK STATE: 1930 jobs on disk
[2026-02-01T14:51:30.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1931
[2026-02-01T14:51:30.705Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:30.705Z] [BOT] 💾 AFTER MERGE: 1931 jobs (merged disk + memory)
[2026-02-01T14:51:30.706Z] [BOT] ✅ No jobs to archive (all 1931 jobs within 7-day window)
[2026-02-01T14:51:30.809Z] [BOT] 💾 Saved posted_jobs.json: 1931 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:32.544Z] [BOT] ✅ Posted message: Java Developer @ ORG_6675b3b7 Information System in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:51:32.545Z] [BOT] 💾 Added channel posting: Java Developer @ ORG_6675b3b7 Information System → location channel (2 total channels)
[2026-02-01T14:51:32.545Z] [BOT] 💾 BEFORE MERGE: 1931 jobs in memory (cached)
[2026-02-01T14:51:32.581Z] [BOT] ✅ Loaded V2 database: 1931 jobs
💾 DISK STATE: 1931 jobs on disk
[2026-02-01T14:51:32.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1931
[2026-02-01T14:51:32.584Z] [BOT] 🔀 Deep merged: Java Developer @ ORG_6675b3b7 Information System (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:51:32.585Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1931 jobs (merged disk + memory)
[2026-02-01T14:51:32.586Z] [BOT] ✅ No jobs to archive (all 1931 jobs within 7-day window)
[2026-02-01T14:51:32.693Z] [BOT] 💾 Saved posted_jobs.json: 1931 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:34.195Z] [BOT] 📍 [ROUTING] "Entry Level Controls & Software Test Engineer" @ ORG_31ce6e79 Turbines
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:34.560Z] [BOT] ✅ Posted message: Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines in #💻・tech-jobs
  ✅ Industry: Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines
[2026-02-01T14:51:34.561Z] [BOT] 💾 Added channel posting: Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines → category channel (1 total channels)
💾 BEFORE MERGE: 1932 jobs in memory (cached)
[2026-02-01T14:51:34.595Z] [BOT] ✅ Loaded V2 database: 1931 jobs
💾 DISK STATE: 1931 jobs on disk
[2026-02-01T14:51:34.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1932
[2026-02-01T14:51:34.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:34.599Z] [BOT] 💾 AFTER MERGE: 1932 jobs (merged disk + memory)
[2026-02-01T14:51:34.600Z] [BOT] ✅ No jobs to archive (all 1932 jobs within 7-day window)
[2026-02-01T14:51:34.730Z] [BOT] 💾 Saved posted_jobs.json: 1932 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:36.230Z] [BOT] 📍 [ROUTING] "Junior AI-Assisted Software Engineer" @ ORG_0115175c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:51:36.487Z] [BOT] ✅ Posted message: Junior AI-Assisted Software Engineer @ ORG_0115175c in #💻・tech-jobs
  ✅ Industry: Junior AI-Assisted Software Engineer @ ORG_0115175c
[2026-02-01T14:51:36.488Z] [BOT] 💾 Added channel posting: Junior AI-Assisted Software Engineer @ ORG_0115175c → category channel (1 total channels)
[2026-02-01T14:51:36.488Z] [BOT] 💾 BEFORE MERGE: 1933 jobs in memory (cached)
[2026-02-01T14:51:36.523Z] [BOT] ✅ Loaded V2 database: 1932 jobs
[2026-02-01T14:51:36.523Z] [BOT] 💾 DISK STATE: 1932 jobs on disk
[2026-02-01T14:51:36.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1933
[2026-02-01T14:51:36.527Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:36.527Z] [BOT] 💾 AFTER MERGE: 1933 jobs (merged disk + memory)
[2026-02-01T14:51:36.528Z] [BOT] ✅ No jobs to archive (all 1933 jobs within 7-day window)
[2026-02-01T14:51:36.625Z] [BOT] 💾 Saved posted_jobs.json: 1933 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:38.328Z] [BOT] ✅ Posted message: Junior AI-Assisted Software Engineer @ ORG_0115175c in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:51:38.328Z] [BOT] 💾 Added channel posting: Junior AI-Assisted Software Engineer @ ORG_0115175c → location channel (2 total channels)
[2026-02-01T14:51:38.329Z] [BOT] 💾 BEFORE MERGE: 1933 jobs in memory (cached)
[2026-02-01T14:51:38.362Z] [BOT] ✅ Loaded V2 database: 1933 jobs
💾 DISK STATE: 1933 jobs on disk
[2026-02-01T14:51:38.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1933
[2026-02-01T14:51:38.366Z] [BOT] 🔀 Deep merged: Junior AI-Assisted Software Engineer @ ORG_0115175c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:51:38.366Z] [BOT] 💾 AFTER MERGE: 1933 jobs (merged disk + memory)
[2026-02-01T14:51:38.368Z] [BOT] ✅ No jobs to archive (all 1933 jobs within 7-day window)
[2026-02-01T14:51:38.465Z] [BOT] 💾 Saved posted_jobs.json: 1933 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:42.967Z] [BOT] 📌 Posting 4 jobs to #📊・JID_fb739488
[2026-02-01T14:51:42.969Z] [BOT] 📍 [ROUTING] "Data analyst - Applications L1" @ ORG_6675b3b7 Information System
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T14:51:42.969Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:51:43.365Z] [BOT] ✅ Posted message: Data analyst - Applications L1 @ ORG_6675b3b7 Information System in #📊・JID_fb739488
  ✅ Industry: Data analyst - Applications L1 @ ORG_6675b3b7 Information System
[2026-02-01T14:51:43.366Z] [BOT] 💾 Added channel posting: Data analyst - Applications L1 @ ORG_6675b3b7 Information System → category channel (1 total channels)
[2026-02-01T14:51:43.366Z] [BOT] 💾 BEFORE MERGE: 1934 jobs in memory (cached)
[2026-02-01T14:51:43.400Z] [BOT] ✅ Loaded V2 database: 1933 jobs
💾 DISK STATE: 1933 jobs on disk
[2026-02-01T14:51:43.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1934
[2026-02-01T14:51:43.404Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:43.404Z] [BOT] 💾 AFTER MERGE: 1934 jobs (merged disk + memory)
[2026-02-01T14:51:43.405Z] [BOT] ✅ No jobs to archive (all 1934 jobs within 7-day window)
[2026-02-01T14:51:43.513Z] [BOT] 💾 Saved posted_jobs.json: 1934 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:45.016Z] [BOT] 📍 [ROUTING] ".Net Developer" @ ORG_6675b3b7 Information System
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T14:51:45.016Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:51:45.268Z] [BOT] ✅ Posted message: .Net Developer @ ORG_6675b3b7 Information System in #📊・JID_fb739488
  ✅ Industry: .Net Developer @ ORG_6675b3b7 Information System
[2026-02-01T14:51:45.269Z] [BOT] 💾 Added channel posting: .Net Developer @ ORG_6675b3b7 Information System → category channel (1 total channels)
[2026-02-01T14:51:45.269Z] [BOT] 💾 BEFORE MERGE: 1935 jobs in memory (cached)
[2026-02-01T14:51:45.303Z] [BOT] ✅ Loaded V2 database: 1934 jobs
💾 DISK STATE: 1934 jobs on disk
[2026-02-01T14:51:45.304Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1935
[2026-02-01T14:51:45.307Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:45.307Z] [BOT] 💾 AFTER MERGE: 1935 jobs (merged disk + memory)
[2026-02-01T14:51:45.308Z] [BOT] ✅ No jobs to archive (all 1935 jobs within 7-day window)
[2026-02-01T14:51:45.417Z] [BOT] 💾 Saved posted_jobs.json: 1935 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:47.175Z] [BOT] ✅ Posted message: .Net Developer @ ORG_6675b3b7 Information System in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:51:47.176Z] [BOT] 💾 Added channel posting: .Net Developer @ ORG_6675b3b7 Information System → location channel (2 total channels)
[2026-02-01T14:51:47.176Z] [BOT] 💾 BEFORE MERGE: 1935 jobs in memory (cached)
[2026-02-01T14:51:47.209Z] [BOT] ✅ Loaded V2 database: 1935 jobs
💾 DISK STATE: 1935 jobs on disk
[2026-02-01T14:51:47.210Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1935
[2026-02-01T14:51:47.213Z] [BOT] 🔀 Deep merged: .Net Developer @ ORG_6675b3b7 Information System (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:51:47.213Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1935 jobs (merged disk + memory)
[2026-02-01T14:51:47.215Z] [BOT] ✅ No jobs to archive (all 1935 jobs within 7-day window)
[2026-02-01T14:51:47.328Z] [BOT] 💾 Saved posted_jobs.json: 1935 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:48.831Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1" @ ORG_52575429 Consulting
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T14:51:48.831Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:51:49.039Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📊・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting
[2026-02-01T14:51:49.040Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting → category channel (1 total channels)
💾 BEFORE MERGE: 1936 jobs in memory (cached)
[2026-02-01T14:51:49.074Z] [BOT] ✅ Loaded V2 database: 1935 jobs
💾 DISK STATE: 1935 jobs on disk
[2026-02-01T14:51:49.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1936
[2026-02-01T14:51:49.078Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1936 jobs (merged disk + memory)
[2026-02-01T14:51:49.079Z] [BOT] ✅ No jobs to archive (all 1936 jobs within 7-day window)
[2026-02-01T14:51:49.174Z] [BOT] 💾 Saved posted_jobs.json: 1936 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:51.007Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📍・JID_6daed763
[2026-02-01T14:51:51.008Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:51:51.008Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T14:51:51.008Z] [BOT] 💾 BEFORE MERGE: 1936 jobs in memory (cached)
[2026-02-01T14:51:51.042Z] [BOT] ✅ Loaded V2 database: 1936 jobs
💾 DISK STATE: 1936 jobs on disk
[2026-02-01T14:51:51.042Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1936
[2026-02-01T14:51:51.045Z] [BOT] 🔀 Deep merged: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:51:51.045Z] [BOT] 💾 AFTER MERGE: 1936 jobs (merged disk + memory)
[2026-02-01T14:51:51.047Z] [BOT] ✅ No jobs to archive (all 1936 jobs within 7-day window)
[2026-02-01T14:51:51.146Z] [BOT] 💾 Saved posted_jobs.json: 1936 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:52.648Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T14:51:52.648Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:51:52.894Z] [BOT] ✅ Posted message: Entry Level Business/Data Analyst @ 360 IT Professionals in #📊・JID_fb739488
  ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2026-02-01T14:51:52.895Z] [BOT] 💾 Added channel posting: Entry Level Business/Data Analyst @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T14:51:52.895Z] [BOT] 💾 BEFORE MERGE: 1937 jobs in memory (cached)
[2026-02-01T14:51:52.933Z] [BOT] ✅ Loaded V2 database: 1936 jobs
[2026-02-01T14:51:52.936Z] [BOT] 💾 DISK STATE: 1936 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1937
[2026-02-01T14:51:52.941Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:51:52.941Z] [BOT] 💾 AFTER MERGE: 1937 jobs (merged disk + memory)
[2026-02-01T14:51:52.942Z] [BOT] ✅ No jobs to archive (all 1937 jobs within 7-day window)
[2026-02-01T14:51:53.055Z] [BOT] 💾 Saved posted_jobs.json: 1937 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:54.769Z] [BOT] ✅ Posted message: Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:51:54.770Z] [BOT] 💾 Added channel posting: Entry Level Business/Data Analyst @ 360 IT Professionals → location channel (2 total channels)
💾 BEFORE MERGE: 1937 jobs in memory (cached)
[2026-02-01T14:51:54.805Z] [BOT] ✅ Loaded V2 database: 1937 jobs
💾 DISK STATE: 1937 jobs on disk
[2026-02-01T14:51:54.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1937
[2026-02-01T14:51:54.809Z] [BOT] 🔀 Deep merged: Entry Level Business/Data Analyst @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:51:54.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1937 jobs (merged disk + memory)
[2026-02-01T14:51:54.810Z] [BOT] ✅ No jobs to archive (all 1937 jobs within 7-day window)
[2026-02-01T14:51:54.907Z] [BOT] 💾 Saved posted_jobs.json: 1937 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:51:59.409Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T14:51:59.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "8284ccf76d242985"
[2026-02-01T14:51:59.411Z] [BOT] ⏭️  Skipping duplicate: JID_ae1ed03d (posted within 7 days)
[2026-02-01T14:51:59.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6098fed3-..." not found, but found as SHA256 "89f6946ef1d8fe10"
[2026-02-01T14:51:59.412Z] [BOT] ⏭️  Skipping duplicate: JID_6098fed3-external_career_site-JID_5d8714f1-_jr307625-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7d15e5cd..." not found, but found as SHA256 "db2c220827bcef5c"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_a186c8e3-detail (posted within 7 days)
[2026-02-01T14:51:59.412Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_236ec14b..." not found, but found as SHA256 "fe1b836d5bde0c12"
[2026-02-01T14:51:59.413Z] [BOT] ⏭️  Skipping duplicate: JID_a5ba30d6 (posted within 7 days)
[2026-02-01T14:51:59.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_236ec14b..." not found, but found as SHA256 "0e4f28a93e0059d4"
[2026-02-01T14:51:59.413Z] [BOT] ⏭️  Skipping duplicate: JID_8e1accd4 (posted within 7 days)
[2026-02-01T14:51:59.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_236ec14b..." not found, but found as SHA256 "ca3325ec87d3509d"
[2026-02-01T14:51:59.413Z] [BOT] ⏭️  Skipping duplicate: JID_ee7a279e (posted within 7 days)
[2026-02-01T14:51:59.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "468b878c271ef832"
[2026-02-01T14:51:59.413Z] [BOT] ⏭️  Skipping duplicate: JID_eaabcec1 (posted within 7 days)
[2026-02-01T14:51:59.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5d7605b8..." not found, but found as SHA256 "f2db20563111cf3d"
[2026-02-01T14:51:59.414Z] [BOT] ⏭️  Skipping duplicate: JID_52a54f67-engineer_r0000318546 (posted within 7 days)
[2026-02-01T14:51:59.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1ea95904..." not found, but found as SHA256 "0f08ad90023b7e6a"
[2026-02-01T14:51:59.414Z] [BOT] ⏭️  Skipping duplicate: JID_10ebbaf6-engineer_r36039 (posted within 7 days)
[2026-02-01T14:51:59.415Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "dce8400d39561314"
⏭️  Skipping duplicate: JID_26ed61c5 (posted within 7 days)
[2026-02-01T14:51:59.537Z] [BOT] ✅ Loaded pending queue: 2948 total (981 pending, 50 enriched, 1917 posted)
[2026-02-01T14:51:59.719Z] [BOT] ✅ Saved pending queue: 2948 total (981 pending, 40 enriched, 1927 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T14:51:59.719Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T14:51:59.809Z] [BOT] 📂 Loaded 12008 existing routing entries
[2026-02-01T14:51:59.945Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T14:51:59.946Z] [BOT] Total entries: 12018
   Timestamp: 2026-02-01T14:51:59.896Z
[2026-02-01T14:51:59.952Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 26
   Successful: 18
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📍・JID_6daed763: 5 posts
     3. #📊・JID_fb739488: 4 posts
     4. #🌉・JID_739bbc0b: 3 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1937 jobs in memory (cached)
[2026-02-01T14:52:00.000Z] [BOT] ✅ Loaded V2 database: 1937 jobs
💾 DISK STATE: 1937 jobs on disk
[2026-02-01T14:52:00.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1937
[2026-02-01T14:52:00.006Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1937 jobs (merged disk + memory)
[2026-02-01T14:52:00.007Z] [BOT] ✅ No jobs to archive (all 1937 jobs within 7-day window)
[2026-02-01T14:52:00.108Z] [BOT] 💾 Saved posted_jobs.json: 1937 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:52:00.109Z] [BOT] ✅ Database saved successfully
[2026-02-01T14:52:02.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*