# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T14:17:38.388Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T14:16:45.828Z] ========================================
[2026-02-01T14:16:45.830Z] Discord Bot Execution Log
[2026-02-01T14:16:45.830Z] Environment: GitHub Actions
[2026-02-01T14:16:45.830Z] Node Version: v20.20.0
[2026-02-01T14:16:45.830Z] ========================================
[2026-02-01T14:16:45.830Z] Environment Variables Check:
[2026-02-01T14:16:45.830Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T14:16:45.830Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T14:16:45.830Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T14:16:45.830Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T14:16:45.830Z] 
Multi-Channel Configuration:
[2026-02-01T14:16:45.831Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T14:16:45.831Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T14:16:45.831Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:16:45.831Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T14:16:45.831Z] 
Data Files Check:
[2026-02-01T14:16:45.832Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60154 bytes)
[2026-02-01T14:16:45.882Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9914542 bytes)
[2026-02-01T14:16:45.882Z] 
========================================
[2026-02-01T14:16:45.882Z] Starting Enhanced Discord Bot...
[2026-02-01T14:16:45.882Z] ========================================
[2026-02-01T14:16:46.463Z] [BOT] ✅ Loaded V2 database: 1897 jobs
[2026-02-01T14:16:47.006Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T14:16:47.007Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T14:16:47.007Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T14:16:47.115Z] [BOT] ✅ Loaded pending queue: 2948 total (1011 pending, 50 enriched, 1887 posted)
[2026-02-01T14:16:47.115Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:16:47.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T14:16:47.117Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T14:16:47.117Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:16:47.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T14:16:47.118Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T14:16:47.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T14:16:47.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-02-01T14:16:47.118Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T14:16:47.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T14:16:47.119Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T14:16:47.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T14:16:47.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T14:16:47.119Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T14:16:47.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T14:16:47.120Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T14:16:47.133Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T14:16:47.133Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T14:16:47.134Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T14:16:47.135Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-02-01T14:16:47.135Z] [BOT] (9 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T14:16:47.135Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, dayton, new york, dallas, casa grande, san francisco, san jose
   - PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting: washington, boulder
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T14:16:47.138Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T14:16:47.139Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2026-02-01T14:16:47.139Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:16:47.156Z] [BOT ERROR] (node:3060) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T14:16:47.439Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T14:16:47.439Z] [BOT] ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2026-02-01T14:16:47.440Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:16:47.441Z] [BOT] 💾 BEFORE MERGE: 1898 jobs in memory (cached)
[2026-02-01T14:16:47.477Z] [BOT] ✅ Loaded V2 database: 1897 jobs
💾 DISK STATE: 1897 jobs on disk
[2026-02-01T14:16:47.477Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1898
[2026-02-01T14:16:47.482Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:16:47.482Z] [BOT] 💾 AFTER MERGE: 1898 jobs (merged disk + memory)
[2026-02-01T14:16:47.483Z] [BOT] ✅ No jobs to archive (all 1898 jobs within 7-day window)
[2026-02-01T14:16:47.615Z] [BOT] 💾 Saved posted_jobs.json: 1898 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:49.306Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T14:16:49.306Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:16:49.307Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:16:49.307Z] [BOT] 💾 BEFORE MERGE: 1898 jobs in memory (cached)
[2026-02-01T14:16:49.345Z] [BOT] ✅ Loaded V2 database: 1898 jobs
[2026-02-01T14:16:49.345Z] [BOT] 💾 DISK STATE: 1898 jobs on disk
[2026-02-01T14:16:49.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1898
[2026-02-01T14:16:49.350Z] [BOT] 🔀 Deep merged: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:16:49.350Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1898 jobs (merged disk + memory)
[2026-02-01T14:16:49.351Z] [BOT] ✅ No jobs to archive (all 1898 jobs within 7-day window)
[2026-02-01T14:16:49.450Z] [BOT] 💾 Saved posted_jobs.json: 1898 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:50.952Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T14:16:50.952Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:16:51.439Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T14:16:51.439Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T14:16:51.440Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:16:51.440Z] [BOT] 💾 BEFORE MERGE: 1899 jobs in memory (cached)
[2026-02-01T14:16:51.473Z] [BOT] ✅ Loaded V2 database: 1898 jobs
💾 DISK STATE: 1898 jobs on disk
[2026-02-01T14:16:51.473Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1899
[2026-02-01T14:16:51.477Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:16:51.477Z] [BOT] 💾 AFTER MERGE: 1899 jobs (merged disk + memory)
[2026-02-01T14:16:51.479Z] [BOT] ✅ No jobs to archive (all 1899 jobs within 7-day window)
[2026-02-01T14:16:51.581Z] [BOT] 💾 Saved posted_jobs.json: 1899 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:53.083Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_e5deb41a Securities
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:16:54.143Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_e5deb41a Securities in #💻・tech-jobs
  ✅ Industry: C++ Software Engineer @ ORG_e5deb41a Securities
[2026-02-01T14:16:54.144Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_e5deb41a Securities → category channel (1 total channels)
[2026-02-01T14:16:54.144Z] [BOT] 💾 BEFORE MERGE: 1900 jobs in memory (cached)
[2026-02-01T14:16:54.179Z] [BOT] ✅ Loaded V2 database: 1899 jobs
💾 DISK STATE: 1899 jobs on disk
[2026-02-01T14:16:54.179Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1900
[2026-02-01T14:16:54.183Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:16:54.183Z] [BOT] 💾 AFTER MERGE: 1900 jobs (merged disk + memory)
[2026-02-01T14:16:54.184Z] [BOT] ✅ No jobs to archive (all 1900 jobs within 7-day window)
[2026-02-01T14:16:54.287Z] [BOT] 💾 Saved posted_jobs.json: 1900 active jobs
[2026-02-01T14:16:54.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:56.005Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_e5deb41a Securities in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:16:56.006Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_e5deb41a Securities → location channel (2 total channels)
[2026-02-01T14:16:56.006Z] [BOT] 💾 BEFORE MERGE: 1900 jobs in memory (cached)
[2026-02-01T14:16:56.050Z] [BOT] ✅ Loaded V2 database: 1900 jobs
💾 DISK STATE: 1900 jobs on disk
[2026-02-01T14:16:56.050Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1900
[2026-02-01T14:16:56.054Z] [BOT] 🔀 Deep merged: C++ Software Engineer @ ORG_e5deb41a Securities (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:16:56.054Z] [BOT] 💾 AFTER MERGE: 1900 jobs (merged disk + memory)
[2026-02-01T14:16:56.056Z] [BOT] ✅ No jobs to archive (all 1900 jobs within 7-day window)
[2026-02-01T14:16:56.154Z] [BOT] 💾 Saved posted_jobs.json: 1900 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:57.656Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_4c57d8f0
[2026-02-01T14:16:57.656Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:16:57.816Z] [BOT] ✅ Posted message: Software Engineer @ ORG_4c57d8f0 in #💻・tech-jobs
[2026-02-01T14:16:57.817Z] [BOT] ✅ Industry: Software Engineer @ ORG_4c57d8f0
[2026-02-01T14:16:57.817Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_4c57d8f0 → category channel (1 total channels)
[2026-02-01T14:16:57.817Z] [BOT] 💾 BEFORE MERGE: 1901 jobs in memory (cached)
[2026-02-01T14:16:57.852Z] [BOT] ✅ Loaded V2 database: 1900 jobs
💾 DISK STATE: 1900 jobs on disk
[2026-02-01T14:16:57.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1901
[2026-02-01T14:16:57.856Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:16:57.856Z] [BOT] 💾 AFTER MERGE: 1901 jobs (merged disk + memory)
[2026-02-01T14:16:57.857Z] [BOT] ✅ No jobs to archive (all 1901 jobs within 7-day window)
[2026-02-01T14:16:57.973Z] [BOT] 💾 Saved posted_jobs.json: 1901 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:16:59.850Z] [BOT] ✅ Posted message: Software Engineer @ ORG_4c57d8f0 in #📍・JID_6daed763
[2026-02-01T14:16:59.850Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:16:59.850Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_4c57d8f0 → location channel (2 total channels)
[2026-02-01T14:16:59.851Z] [BOT] 💾 BEFORE MERGE: 1901 jobs in memory (cached)
[2026-02-01T14:16:59.885Z] [BOT] ✅ Loaded V2 database: 1901 jobs
💾 DISK STATE: 1901 jobs on disk
[2026-02-01T14:16:59.885Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1901
[2026-02-01T14:16:59.889Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_4c57d8f0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:16:59.889Z] [BOT] 💾 AFTER MERGE: 1901 jobs (merged disk + memory)
[2026-02-01T14:16:59.891Z] [BOT] ✅ No jobs to archive (all 1901 jobs within 7-day window)
[2026-02-01T14:16:59.987Z] [BOT] 💾 Saved posted_jobs.json: 1901 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:01.488Z] [BOT] 📍 [ROUTING] "Application Software Developer" @ ORG_a3a09e18 Consulting
[2026-02-01T14:17:01.489Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:17:01.717Z] [BOT] ✅ Posted message: Application Software Developer @ ORG_a3a09e18 Consulting in #💻・tech-jobs
[2026-02-01T14:17:01.717Z] [BOT] ✅ Industry: Application Software Developer @ ORG_a3a09e18 Consulting
[2026-02-01T14:17:01.718Z] [BOT] 💾 Added channel posting: Application Software Developer @ ORG_a3a09e18 Consulting → category channel (1 total channels)
[2026-02-01T14:17:01.718Z] [BOT] 💾 BEFORE MERGE: 1902 jobs in memory (cached)
[2026-02-01T14:17:01.752Z] [BOT] ✅ Loaded V2 database: 1901 jobs
💾 DISK STATE: 1901 jobs on disk
[2026-02-01T14:17:01.752Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1902
[2026-02-01T14:17:01.756Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:01.756Z] [BOT] 💾 AFTER MERGE: 1902 jobs (merged disk + memory)
[2026-02-01T14:17:01.758Z] [BOT] ✅ No jobs to archive (all 1902 jobs within 7-day window)
[2026-02-01T14:17:01.854Z] [BOT] 💾 Saved posted_jobs.json: 1902 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:03.571Z] [BOT] ✅ Posted message: Application Software Developer @ ORG_a3a09e18 Consulting in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:17:03.572Z] [BOT] 💾 Added channel posting: Application Software Developer @ ORG_a3a09e18 Consulting → location channel (2 total channels)
[2026-02-01T14:17:03.572Z] [BOT] 💾 BEFORE MERGE: 1902 jobs in memory (cached)
[2026-02-01T14:17:03.606Z] [BOT] ✅ Loaded V2 database: 1902 jobs
[2026-02-01T14:17:03.606Z] [BOT] 💾 DISK STATE: 1902 jobs on disk
[2026-02-01T14:17:03.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1902
[2026-02-01T14:17:03.611Z] [BOT] 🔀 Deep merged: Application Software Developer @ ORG_a3a09e18 Consulting (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:17:03.611Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1902 jobs (merged disk + memory)
[2026-02-01T14:17:03.612Z] [BOT] ✅ No jobs to archive (all 1902 jobs within 7-day window)
[2026-02-01T14:17:03.709Z] [BOT] 💾 Saved posted_jobs.json: 1902 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:05.211Z] [BOT] 📍 [ROUTING] "Software Engineer I - Aldp" @ ORG_bdf03daa Fintech Solutions
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:17:05.366Z] [BOT] ✅ Posted message: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
  ✅ Industry: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions
[2026-02-01T14:17:05.367Z] [BOT] 💾 Added channel posting: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions → category channel (1 total channels)
[2026-02-01T14:17:05.367Z] [BOT] 💾 BEFORE MERGE: 1903 jobs in memory (cached)
[2026-02-01T14:17:05.402Z] [BOT] ✅ Loaded V2 database: 1902 jobs
💾 DISK STATE: 1902 jobs on disk
[2026-02-01T14:17:05.402Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1903
[2026-02-01T14:17:05.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:05.406Z] [BOT] 💾 AFTER MERGE: 1903 jobs (merged disk + memory)
[2026-02-01T14:17:05.407Z] [BOT] ✅ No jobs to archive (all 1903 jobs within 7-day window)
[2026-02-01T14:17:05.525Z] [BOT] 💾 Saved posted_jobs.json: 1903 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:07.167Z] [BOT] ✅ Posted message: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T14:17:07.168Z] [BOT] 💾 Added channel posting: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions → location channel (2 total channels)
[2026-02-01T14:17:07.168Z] [BOT] 💾 BEFORE MERGE: 1903 jobs in memory (cached)
[2026-02-01T14:17:07.203Z] [BOT] ✅ Loaded V2 database: 1903 jobs
💾 DISK STATE: 1903 jobs on disk
[2026-02-01T14:17:07.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1903
[2026-02-01T14:17:07.208Z] [BOT] 🔀 Deep merged: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:17:07.208Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1903 jobs (merged disk + memory)
[2026-02-01T14:17:07.209Z] [BOT] ✅ No jobs to archive (all 1903 jobs within 7-day window)
[2026-02-01T14:17:07.308Z] [BOT] 💾 Saved posted_jobs.json: 1903 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:08.810Z] [BOT] 📍 [ROUTING] "SAS Administrator" @ ORG_9b202ecb Tech Solutions
[2026-02-01T14:17:08.810Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:17:09.098Z] [BOT] ✅ Posted message: SAS Administrator @ ORG_9b202ecb Tech Solutions in #💻・tech-jobs
[2026-02-01T14:17:09.098Z] [BOT] ✅ Industry: SAS Administrator @ ORG_9b202ecb Tech Solutions
[2026-02-01T14:17:09.099Z] [BOT] 💾 Added channel posting: SAS Administrator @ ORG_9b202ecb Tech Solutions → category channel (1 total channels)
[2026-02-01T14:17:09.099Z] [BOT] 💾 BEFORE MERGE: 1904 jobs in memory (cached)
[2026-02-01T14:17:09.146Z] [BOT] ✅ Loaded V2 database: 1903 jobs
[2026-02-01T14:17:09.148Z] [BOT] 💾 DISK STATE: 1903 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1904
[2026-02-01T14:17:09.153Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:09.153Z] [BOT] 💾 AFTER MERGE: 1904 jobs (merged disk + memory)
[2026-02-01T14:17:09.154Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-02-01T14:17:09.251Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:13.319Z] [BOT] ✅ Posted message: SAS Administrator @ ORG_9b202ecb Tech Solutions in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:17:13.320Z] [BOT] 💾 Added channel posting: SAS Administrator @ ORG_9b202ecb Tech Solutions → location channel (2 total channels)
[2026-02-01T14:17:13.320Z] [BOT] 💾 BEFORE MERGE: 1904 jobs in memory (cached)
[2026-02-01T14:17:13.354Z] [BOT] ✅ Loaded V2 database: 1904 jobs
💾 DISK STATE: 1904 jobs on disk
[2026-02-01T14:17:13.354Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1904
[2026-02-01T14:17:13.357Z] [BOT] 🔀 Deep merged: SAS Administrator @ ORG_9b202ecb Tech Solutions (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:17:13.357Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1904 jobs (merged disk + memory)
[2026-02-01T14:17:13.358Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-02-01T14:17:13.468Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:17.966Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T14:17:17.967Z] [BOT] 📍 [ROUTING] "Campus ML Engineer (Full-Time)" @ ORG_9ee0ca3e Trading
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T14:17:17.967Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T14:17:18.178Z] [BOT] ✅ Posted message: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading in #🤖・ai-jobs
  ✅ Industry: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading
[2026-02-01T14:17:18.179Z] [BOT] 💾 Added channel posting: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading → category channel (1 total channels)
[2026-02-01T14:17:18.179Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-01T14:17:18.212Z] [BOT] ✅ Loaded V2 database: 1904 jobs
💾 DISK STATE: 1904 jobs on disk
[2026-02-01T14:17:18.213Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-01T14:17:18.216Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:18.216Z] [BOT] 💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-01T14:17:18.218Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-01T14:17:18.335Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:19.971Z] [BOT] ✅ Posted message: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:17:19.972Z] [BOT] 💾 Added channel posting: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading → location channel (2 total channels)
[2026-02-01T14:17:19.972Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-01T14:17:20.005Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-01T14:17:20.005Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-01T14:17:20.009Z] [BOT] 🔀 Deep merged: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:17:20.009Z] [BOT] 💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-01T14:17:20.010Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-01T14:17:20.101Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:21.603Z] [BOT] 📍 [ROUTING] "Campus AI Researcher (Full-Time)" @ ORG_9ee0ca3e Trading
[2026-02-01T14:17:21.603Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T14:17:21.782Z] [BOT] ✅ Posted message: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading in #🤖・ai-jobs
[2026-02-01T14:17:21.782Z] [BOT] ✅ Industry: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading
[2026-02-01T14:17:21.783Z] [BOT] 💾 Added channel posting: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading → category channel (1 total channels)
[2026-02-01T14:17:21.783Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-01T14:17:21.815Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-01T14:17:21.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-01T14:17:21.819Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:21.819Z] [BOT] 💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-01T14:17:21.820Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-01T14:17:21.915Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:23.612Z] [BOT] ✅ Posted message: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading in #📍・JID_6daed763
[2026-02-01T14:17:23.612Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:17:23.612Z] [BOT] 💾 Added channel posting: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading → location channel (2 total channels)
[2026-02-01T14:17:23.613Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-01T14:17:23.647Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
[2026-02-01T14:17:23.647Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-01T14:17:23.650Z] [BOT] 🔀 Deep merged: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:17:23.650Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-01T14:17:23.651Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-01T14:17:23.751Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:28.252Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T14:17:28.253Z] [BOT] 📍 [ROUTING] "Technology Analyst - Cocoa" @ ORG_a3a09e18 Consulting
   Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T14:17:28.464Z] [BOT] ✅ Posted message: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #💰・finance-jobs
  ✅ Industry: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting
[2026-02-01T14:17:28.465Z] [BOT] 💾 Added channel posting: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting → category channel (1 total channels)
[2026-02-01T14:17:28.465Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-01T14:17:28.502Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-01T14:17:28.508Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:28.508Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-01T14:17:28.509Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-01T14:17:28.621Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:30.300Z] [BOT] ✅ Posted message: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:17:30.300Z] [BOT] 💾 Added channel posting: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting → location channel (2 total channels)
[2026-02-01T14:17:30.300Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-01T14:17:30.332Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-01T14:17:30.332Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-01T14:17:30.336Z] [BOT] 🔀 Deep merged: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:17:30.336Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-01T14:17:30.337Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-01T14:17:30.443Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:34.942Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T14:17:34.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "18f557b4e4a5b5d2"
[2026-02-01T14:17:34.944Z] [BOT] ⏭️  Skipping duplicate: JID_66e6ef08 (posted within 7 days)
[2026-02-01T14:17:34.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "74cf9b8368d8684b"
[2026-02-01T14:17:34.944Z] [BOT] ⏭️  Skipping duplicate: JID_c76743ce (posted within 7 days)
[2026-02-01T14:17:34.945Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98f8205d..." not found, but found as SHA256 "f5967b1e5900663b"
⏭️  Skipping duplicate: JID_40eb513f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_88599b59..." not found, but found as SHA256 "c61300391e9cf9a5"
⏭️  Skipping duplicate: JID_88599b59 (posted within 7 days)
[2026-02-01T14:17:34.945Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5f75ebe3..." not found, but found as SHA256 "5ec57e677d7fc646"
[2026-02-01T14:17:34.945Z] [BOT] ⏭️  Skipping duplicate: JID_5f75ebe3 (posted within 7 days)
[2026-02-01T14:17:34.946Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_25f5ffaa..." not found, but found as SHA256 "afc08e2feb7e0c4d"
[2026-02-01T14:17:34.946Z] [BOT] ⏭️  Skipping duplicate: JID_56e3f148 (posted within 7 days)
[2026-02-01T14:17:34.946Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8f73bad9..." not found, but found as SHA256 "37144c81e238b86e"
[2026-02-01T14:17:34.946Z] [BOT] ⏭️  Skipping duplicate: JID_9514ccaa (posted within 7 days)
[2026-02-01T14:17:34.946Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9b7ae55..." not found, but found as SHA256 "eb375ad554d9d17f"
[2026-02-01T14:17:34.946Z] [BOT] ⏭️  Skipping duplicate: JID_1006dc77-_jr103414-1 (posted within 7 days)
[2026-02-01T14:17:34.946Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d52d01f..." not found, but found as SHA256 "4560752799a4fc98"
[2026-02-01T14:17:34.947Z] [BOT] ⏭️  Skipping duplicate: JID_09d84b0c (posted within 7 days)
[2026-02-01T14:17:34.947Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8f73bad9..." not found, but found as SHA256 "2d17f7763b94e497"
[2026-02-01T14:17:34.947Z] [BOT] ⏭️  Skipping duplicate: JID_a7166556 (posted within 7 days)
[2026-02-01T14:17:35.063Z] [BOT] ✅ Loaded pending queue: 2948 total (1011 pending, 50 enriched, 1887 posted)
[2026-02-01T14:17:35.246Z] [BOT] ✅ Saved pending queue: 2948 total (1011 pending, 40 enriched, 1897 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T14:17:35.246Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T14:17:35.335Z] [BOT] 📂 Loaded 11978 existing routing entries
[2026-02-01T14:17:35.468Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T14:17:35.469Z] [BOT] Total entries: 11988
   Timestamp: 2026-02-01T14:17:35.420Z
[2026-02-01T14:17:35.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T14:17:35.469Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T14:17:35.469Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T14:17:35.470Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 7 posts
[2026-02-01T14:17:35.470Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-02-01T14:17:35.470Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-01T14:17:35.528Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-01T14:17:35.532Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:17:35.532Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-01T14:17:35.533Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-01T14:17:35.629Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:17:35.629Z] [BOT] ✅ Database saved successfully
[2026-02-01T14:17:37.659Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3060) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*