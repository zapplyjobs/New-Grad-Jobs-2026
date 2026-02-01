# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T13:54:18.054Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T13:53:30.951Z] ========================================
[2026-02-01T13:53:30.953Z] Discord Bot Execution Log
[2026-02-01T13:53:30.953Z] Environment: GitHub Actions
[2026-02-01T13:53:30.953Z] Node Version: v20.20.0
[2026-02-01T13:53:30.953Z] ========================================
[2026-02-01T13:53:30.953Z] Environment Variables Check:
[2026-02-01T13:53:30.953Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T13:53:30.954Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T13:53:30.954Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T13:53:30.954Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T13:53:30.954Z] 
Multi-Channel Configuration:
[2026-02-01T13:53:30.954Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T13:53:30.954Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.954Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.954Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T13:53:30.954Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.954Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.954Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.955Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.955Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:53:30.955Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T13:53:30.955Z] 
Data Files Check:
[2026-02-01T13:53:30.956Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60148 bytes)
[2026-02-01T13:53:31.005Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9886808 bytes)
[2026-02-01T13:53:31.005Z] 
========================================
[2026-02-01T13:53:31.005Z] Starting Enhanced Discord Bot...
[2026-02-01T13:53:31.005Z] ========================================
[2026-02-01T13:53:31.567Z] [BOT] ✅ Loaded V2 database: 1887 jobs
[2026-02-01T13:53:32.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T13:53:32.004Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T13:53:32.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T13:53:32.116Z] [BOT] ✅ Loaded pending queue: 2948 total (1021 pending, 50 enriched, 1877 posted)
[2026-02-01T13:53:32.116Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T13:53:32.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T13:53:32.118Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T13:53:32.118Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T13:53:32.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T13:53:32.118Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T13:53:32.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T13:53:32.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T13:53:32.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T13:53:32.120Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T13:53:32.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T13:53:32.120Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T13:53:32.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T13:53:32.121Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T13:53:32.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T13:53:32.121Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T13:53:32.135Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T13:53:32.135Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T13:53:32.136Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T13:53:32.136Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-02-01T13:53:32.136Z] [BOT] (10 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
[2026-02-01T13:53:32.137Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san francisco, san diego, dayton, new york, dallas, casa grande
   - Entry Level software engineer @ ORG_9af9eef3 Technologies: tampa, chesterfield
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T13:53:32.140Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T13:53:32.141Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:32.141Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:32.158Z] [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T13:53:32.490Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T13:53:32.490Z] [BOT] ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:32.491Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:53:32.492Z] [BOT] 💾 BEFORE MERGE: 1888 jobs in memory (cached)
[2026-02-01T13:53:32.532Z] [BOT] ✅ Loaded V2 database: 1887 jobs
💾 DISK STATE: 1887 jobs on disk
[2026-02-01T13:53:32.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1888
[2026-02-01T13:53:32.537Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:32.537Z] [BOT] 💾 AFTER MERGE: 1888 jobs (merged disk + memory)
[2026-02-01T13:53:32.539Z] [BOT] ✅ No jobs to archive (all 1888 jobs within 7-day window)
[2026-02-01T13:53:32.672Z] [BOT] 💾 Saved posted_jobs.json: 1888 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:34.316Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T13:53:34.316Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:53:34.316Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:53:34.316Z] [BOT] 💾 BEFORE MERGE: 1888 jobs in memory (cached)
[2026-02-01T13:53:34.353Z] [BOT] ✅ Loaded V2 database: 1888 jobs
[2026-02-01T13:53:34.353Z] [BOT] 💾 DISK STATE: 1888 jobs on disk
[2026-02-01T13:53:34.353Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1888
[2026-02-01T13:53:34.357Z] [BOT] 🔀 Deep merged: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:53:34.357Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1888 jobs (merged disk + memory)
[2026-02-01T13:53:34.359Z] [BOT] ✅ No jobs to archive (all 1888 jobs within 7-day window)
[2026-02-01T13:53:34.455Z] [BOT] 💾 Saved posted_jobs.json: 1888 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:35.956Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:35.956Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:36.336Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:36.337Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:53:36.337Z] [BOT] 💾 BEFORE MERGE: 1889 jobs in memory (cached)
[2026-02-01T13:53:36.371Z] [BOT] ✅ Loaded V2 database: 1888 jobs
💾 DISK STATE: 1888 jobs on disk
[2026-02-01T13:53:36.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1889
[2026-02-01T13:53:36.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:36.375Z] [BOT] 💾 AFTER MERGE: 1889 jobs (merged disk + memory)
[2026-02-01T13:53:36.376Z] [BOT] ✅ No jobs to archive (all 1889 jobs within 7-day window)
[2026-02-01T13:53:36.478Z] [BOT] 💾 Saved posted_jobs.json: 1889 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:38.148Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
[2026-02-01T13:53:38.148Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T13:53:38.149Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:53:38.149Z] [BOT] 💾 BEFORE MERGE: 1889 jobs in memory (cached)
[2026-02-01T13:53:38.197Z] [BOT] ✅ Loaded V2 database: 1889 jobs
💾 DISK STATE: 1889 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1889
[2026-02-01T13:53:38.202Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:53:38.202Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1889 jobs (merged disk + memory)
[2026-02-01T13:53:38.204Z] [BOT] ✅ No jobs to archive (all 1889 jobs within 7-day window)
[2026-02-01T13:53:38.294Z] [BOT] 💾 Saved posted_jobs.json: 1889 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:39.796Z] [BOT] 📍 [ROUTING] "Entry Level software engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:39.796Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:40.060Z] [BOT] ✅ Posted message: Entry Level software engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T13:53:40.060Z] [BOT] ✅ Industry: Entry Level software engineer @ ORG_9af9eef3 Technologies
[2026-02-01T13:53:40.061Z] [BOT] 💾 Added channel posting: Entry Level software engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:53:40.061Z] [BOT] 💾 BEFORE MERGE: 1890 jobs in memory (cached)
[2026-02-01T13:53:40.098Z] [BOT] ✅ Loaded V2 database: 1889 jobs
[2026-02-01T13:53:40.100Z] [BOT] 💾 DISK STATE: 1889 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1890
[2026-02-01T13:53:40.112Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:40.113Z] [BOT] 💾 AFTER MERGE: 1890 jobs (merged disk + memory)
[2026-02-01T13:53:40.114Z] [BOT] ✅ No jobs to archive (all 1890 jobs within 7-day window)
[2026-02-01T13:53:40.209Z] [BOT] 💾 Saved posted_jobs.json: 1890 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:42.167Z] [BOT] ✅ Posted message: Entry Level software engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:53:42.168Z] [BOT] 💾 Added channel posting: Entry Level software engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:53:42.168Z] [BOT] 💾 BEFORE MERGE: 1890 jobs in memory (cached)
[2026-02-01T13:53:42.202Z] [BOT] ✅ Loaded V2 database: 1890 jobs
💾 DISK STATE: 1890 jobs on disk
[2026-02-01T13:53:42.202Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1890
[2026-02-01T13:53:42.205Z] [BOT] 🔀 Deep merged: Entry Level software engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:53:42.205Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1890 jobs (merged disk + memory)
[2026-02-01T13:53:42.206Z] [BOT] ✅ No jobs to archive (all 1890 jobs within 7-day window)
[2026-02-01T13:53:42.320Z] [BOT] 💾 Saved posted_jobs.json: 1890 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:43.819Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:44.066Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
[2026-02-01T13:53:44.066Z] [BOT] ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-02-01T13:53:44.067Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → category channel (1 total channels)
[2026-02-01T13:53:44.067Z] [BOT] 💾 BEFORE MERGE: 1891 jobs in memory (cached)
[2026-02-01T13:53:44.100Z] [BOT] ✅ Loaded V2 database: 1890 jobs
💾 DISK STATE: 1890 jobs on disk
[2026-02-01T13:53:44.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1891
[2026-02-01T13:53:44.103Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:44.103Z] [BOT] 💾 AFTER MERGE: 1891 jobs (merged disk + memory)
[2026-02-01T13:53:44.104Z] [BOT] ✅ No jobs to archive (all 1891 jobs within 7-day window)
[2026-02-01T13:53:44.193Z] [BOT] 💾 Saved posted_jobs.json: 1891 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:45.862Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T13:53:45.862Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → location channel (2 total channels)
[2026-02-01T13:53:45.863Z] [BOT] 💾 BEFORE MERGE: 1891 jobs in memory (cached)
[2026-02-01T13:53:45.897Z] [BOT] ✅ Loaded V2 database: 1891 jobs
💾 DISK STATE: 1891 jobs on disk
[2026-02-01T13:53:45.897Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1891
[2026-02-01T13:53:45.900Z] [BOT] 🔀 Deep merged: Helix Data Creator @ ORG_1f5be668 (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:53:45.900Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1891 jobs (merged disk + memory)
[2026-02-01T13:53:45.901Z] [BOT] ✅ No jobs to archive (all 1891 jobs within 7-day window)
[2026-02-01T13:53:46.001Z] [BOT] 💾 Saved posted_jobs.json: 1891 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:47.502Z] [BOT] 📍 [ROUTING] "Software Engineer I (ALDP)" @ ORG_bdf03daa Fintech Solutions
[2026-02-01T13:53:47.502Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:47.637Z] [BOT] ✅ Posted message: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2026-02-01T13:53:47.637Z] [BOT] ✅ Industry: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions
[2026-02-01T13:53:47.637Z] [BOT] 💾 Added channel posting: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions → category channel (1 total channels)
[2026-02-01T13:53:47.637Z] [BOT] 💾 BEFORE MERGE: 1892 jobs in memory (cached)
[2026-02-01T13:53:47.671Z] [BOT] ✅ Loaded V2 database: 1891 jobs
💾 DISK STATE: 1891 jobs on disk
[2026-02-01T13:53:47.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1892
[2026-02-01T13:53:47.675Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:47.675Z] [BOT] 💾 AFTER MERGE: 1892 jobs (merged disk + memory)
[2026-02-01T13:53:47.676Z] [BOT] ✅ No jobs to archive (all 1892 jobs within 7-day window)
[2026-02-01T13:53:47.776Z] [BOT] 💾 Saved posted_jobs.json: 1892 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:49.581Z] [BOT] ✅ Posted message: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T13:53:49.581Z] [BOT] 💾 Added channel posting: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions → location channel (2 total channels)
[2026-02-01T13:53:49.582Z] [BOT] 💾 BEFORE MERGE: 1892 jobs in memory (cached)
[2026-02-01T13:53:49.614Z] [BOT] ✅ Loaded V2 database: 1892 jobs
[2026-02-01T13:53:49.614Z] [BOT] 💾 DISK STATE: 1892 jobs on disk
[2026-02-01T13:53:49.615Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1892
[2026-02-01T13:53:49.618Z] [BOT] 🔀 Deep merged: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:53:49.618Z] [BOT] 💾 AFTER MERGE: 1892 jobs (merged disk + memory)
[2026-02-01T13:53:49.620Z] [BOT] ✅ No jobs to archive (all 1892 jobs within 7-day window)
[2026-02-01T13:53:49.714Z] [BOT] 💾 Saved posted_jobs.json: 1892 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:51.216Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_30841378 Health
[2026-02-01T13:53:51.216Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:51.333Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_30841378 Health in #💻・tech-jobs
[2026-02-01T13:53:51.334Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_30841378 Health
[2026-02-01T13:53:51.334Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_30841378 Health → category channel (1 total channels)
[2026-02-01T13:53:51.334Z] [BOT] 💾 BEFORE MERGE: 1893 jobs in memory (cached)
[2026-02-01T13:53:51.368Z] [BOT] ✅ Loaded V2 database: 1892 jobs
💾 DISK STATE: 1892 jobs on disk
[2026-02-01T13:53:51.368Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1893
[2026-02-01T13:53:51.372Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:51.372Z] [BOT] 💾 AFTER MERGE: 1893 jobs (merged disk + memory)
[2026-02-01T13:53:51.373Z] [BOT] ✅ No jobs to archive (all 1893 jobs within 7-day window)
[2026-02-01T13:53:51.478Z] [BOT] 💾 Saved posted_jobs.json: 1893 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:53.209Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_30841378 Health in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:53:53.210Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_30841378 Health → location channel (2 total channels)
[2026-02-01T13:53:53.210Z] [BOT] 💾 BEFORE MERGE: 1893 jobs in memory (cached)
[2026-02-01T13:53:53.243Z] [BOT] ✅ Loaded V2 database: 1893 jobs
💾 DISK STATE: 1893 jobs on disk
[2026-02-01T13:53:53.243Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1893
[2026-02-01T13:53:53.246Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_30841378 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:53:53.247Z] [BOT] 💾 AFTER MERGE: 1893 jobs (merged disk + memory)
[2026-02-01T13:53:53.248Z] [BOT] ✅ No jobs to archive (all 1893 jobs within 7-day window)
[2026-02-01T13:53:53.336Z] [BOT] 💾 Saved posted_jobs.json: 1893 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:54.838Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_3429c666 United Home Loans
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:55.075Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_3429c666 United Home Loans in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_3429c666 United Home Loans
[2026-02-01T13:53:55.076Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_3429c666 United Home Loans → category channel (1 total channels)
[2026-02-01T13:53:55.076Z] [BOT] 💾 BEFORE MERGE: 1894 jobs in memory (cached)
[2026-02-01T13:53:55.109Z] [BOT] ✅ Loaded V2 database: 1893 jobs
💾 DISK STATE: 1893 jobs on disk
[2026-02-01T13:53:55.110Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1894
[2026-02-01T13:53:55.113Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:55.113Z] [BOT] 💾 AFTER MERGE: 1894 jobs (merged disk + memory)
[2026-02-01T13:53:55.114Z] [BOT] ✅ No jobs to archive (all 1894 jobs within 7-day window)
[2026-02-01T13:53:55.215Z] [BOT] 💾 Saved posted_jobs.json: 1894 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:56.877Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_3429c666 United Home Loans in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:53:56.878Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_3429c666 United Home Loans → location channel (2 total channels)
[2026-02-01T13:53:56.878Z] [BOT] 💾 BEFORE MERGE: 1894 jobs in memory (cached)
[2026-02-01T13:53:56.911Z] [BOT] ✅ Loaded V2 database: 1894 jobs
💾 DISK STATE: 1894 jobs on disk
[2026-02-01T13:53:56.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1894
[2026-02-01T13:53:56.914Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_3429c666 United Home Loans (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:53:56.914Z] [BOT] 💾 AFTER MERGE: 1894 jobs (merged disk + memory)
[2026-02-01T13:53:56.915Z] [BOT] ✅ No jobs to archive (all 1894 jobs within 7-day window)
[2026-02-01T13:53:57.009Z] [BOT] 💾 Saved posted_jobs.json: 1894 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:53:58.510Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ ORG_fe22cd40
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:53:58.792Z] [BOT] ✅ Posted message: Junior Software Developer @ ORG_fe22cd40 in #💻・tech-jobs
  ✅ Industry: Junior Software Developer @ ORG_fe22cd40
[2026-02-01T13:53:58.794Z] [BOT] 💾 Added channel posting: Junior Software Developer @ ORG_fe22cd40 → category channel (1 total channels)
💾 BEFORE MERGE: 1895 jobs in memory (cached)
[2026-02-01T13:53:58.827Z] [BOT] ✅ Loaded V2 database: 1894 jobs
💾 DISK STATE: 1894 jobs on disk
[2026-02-01T13:53:58.827Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1895
[2026-02-01T13:53:58.831Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:53:58.831Z] [BOT] 💾 AFTER MERGE: 1895 jobs (merged disk + memory)
[2026-02-01T13:53:58.832Z] [BOT] ✅ No jobs to archive (all 1895 jobs within 7-day window)
[2026-02-01T13:53:58.943Z] [BOT] 💾 Saved posted_jobs.json: 1895 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:00.445Z] [BOT] 📍 [ROUTING] "Systems Development Engineer I, Ops Tech Solution (OTS)" @ ORG_49d2dc07
[2026-02-01T13:54:00.446Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:54:00.781Z] [BOT] ✅ Posted message: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 in #💻・tech-jobs
[2026-02-01T13:54:00.781Z] [BOT] ✅ Industry: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07
[2026-02-01T13:54:00.782Z] [BOT] 💾 Added channel posting: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 → category channel (1 total channels)
[2026-02-01T13:54:00.782Z] [BOT] 💾 BEFORE MERGE: 1896 jobs in memory (cached)
[2026-02-01T13:54:00.815Z] [BOT] ✅ Loaded V2 database: 1895 jobs
💾 DISK STATE: 1895 jobs on disk
[2026-02-01T13:54:00.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1896
[2026-02-01T13:54:00.819Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:54:00.819Z] [BOT] 💾 AFTER MERGE: 1896 jobs (merged disk + memory)
[2026-02-01T13:54:00.820Z] [BOT] ✅ No jobs to archive (all 1896 jobs within 7-day window)
[2026-02-01T13:54:00.908Z] [BOT] 💾 Saved posted_jobs.json: 1896 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:03.092Z] [BOT] ✅ Posted message: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 in #📍・JID_6daed763
[2026-02-01T13:54:03.092Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:54:03.093Z] [BOT] 💾 Added channel posting: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 → location channel (2 total channels)
[2026-02-01T13:54:03.093Z] [BOT] 💾 BEFORE MERGE: 1896 jobs in memory (cached)
[2026-02-01T13:54:03.126Z] [BOT] ✅ Loaded V2 database: 1896 jobs
💾 DISK STATE: 1896 jobs on disk
[2026-02-01T13:54:03.127Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1896
[2026-02-01T13:54:03.130Z] [BOT] 🔀 Deep merged: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:54:03.130Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1896 jobs (merged disk + memory)
[2026-02-01T13:54:03.131Z] [BOT] ✅ No jobs to archive (all 1896 jobs within 7-day window)
[2026-02-01T13:54:03.233Z] [BOT] 💾 Saved posted_jobs.json: 1896 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:07.734Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T13:54:07.736Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_64923ce3
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T13:54:07.736Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T13:54:08.064Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_64923ce3 in #🤖・ai-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_64923ce3
[2026-02-01T13:54:08.065Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_64923ce3 → category channel (1 total channels)
💾 BEFORE MERGE: 1897 jobs in memory (cached)
[2026-02-01T13:54:08.100Z] [BOT] ✅ Loaded V2 database: 1896 jobs
💾 DISK STATE: 1896 jobs on disk
[2026-02-01T13:54:08.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1897
[2026-02-01T13:54:08.103Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:54:08.104Z] [BOT] 💾 AFTER MERGE: 1897 jobs (merged disk + memory)
[2026-02-01T13:54:08.104Z] [BOT] ✅ No jobs to archive (all 1897 jobs within 7-day window)
[2026-02-01T13:54:08.221Z] [BOT] 💾 Saved posted_jobs.json: 1897 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:10.012Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_64923ce3 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T13:54:10.012Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_64923ce3 → location channel (2 total channels)
[2026-02-01T13:54:10.012Z] [BOT] 💾 BEFORE MERGE: 1897 jobs in memory (cached)
[2026-02-01T13:54:10.045Z] [BOT] ✅ Loaded V2 database: 1897 jobs
💾 DISK STATE: 1897 jobs on disk
[2026-02-01T13:54:10.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1897
[2026-02-01T13:54:10.048Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_64923ce3 (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:54:10.048Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1897 jobs (merged disk + memory)
[2026-02-01T13:54:10.050Z] [BOT] ✅ No jobs to archive (all 1897 jobs within 7-day window)
[2026-02-01T13:54:10.139Z] [BOT] 💾 Saved posted_jobs.json: 1897 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:14.641Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T13:54:14.642Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "64b17795680ea085"
[2026-02-01T13:54:14.642Z] [BOT] ⏭️  Skipping duplicate: JID_d9e5a550 (posted within 7 days)
[2026-02-01T13:54:14.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "9ff14f05ca440f01"
[2026-02-01T13:54:14.643Z] [BOT] ⏭️  Skipping duplicate: JID_30440762 (posted within 7 days)
[2026-02-01T13:54:14.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "6ae65044bfbe1d44"
⏭️  Skipping duplicate: JID_1e88f393 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f3265b69..." not found, but found as SHA256 "58906b8d4feef95b"
⏭️  Skipping duplicate: JID_c7f330d7 (posted within 7 days)
[2026-02-01T13:54:14.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_118c9812..." not found, but found as SHA256 "54c24722402575a4"
[2026-02-01T13:54:14.644Z] [BOT] ⏭️  Skipping duplicate: JID_42693f82-_jr103414-1 (posted within 7 days)
[2026-02-01T13:54:14.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_913c0c06..." not found, but found as SHA256 "571b30b7532cbb59"
[2026-02-01T13:54:14.644Z] [BOT] ⏭️  Skipping duplicate: JID_67c95399 (posted within 7 days)
[2026-02-01T13:54:14.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3db13f84-..." not found, but found as SHA256 "78132fb154337cc1"
⏭️  Skipping duplicate: JID_5f600b66-engineer_r5288 (posted within 7 days)
[2026-02-01T13:54:14.645Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a46a1c5f..." not found, but found as SHA256 "85c918d066c4e0ee"
[2026-02-01T13:54:14.645Z] [BOT] ⏭️  Skipping duplicate: JID_f4109327 (posted within 7 days)
[2026-02-01T13:54:14.645Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f04c131-..." not found, but found as SHA256 "33ea329c5dcc0093"
[2026-02-01T13:54:14.645Z] [BOT] ⏭️  Skipping duplicate: JID_6b14a5e1 (posted within 7 days)
[2026-02-01T13:54:14.645Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ff09ba9e..." not found, but found as SHA256 "4c5dbc98644878a0"
⏭️  Skipping duplicate: JID_6cc37fe2 (posted within 7 days)
[2026-02-01T13:54:14.746Z] [BOT] ✅ Loaded pending queue: 2948 total (1021 pending, 50 enriched, 1877 posted)
[2026-02-01T13:54:14.945Z] [BOT] ✅ Saved pending queue: 2948 total (1021 pending, 40 enriched, 1887 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T13:54:15.039Z] [BOT] 📂 Loaded 11968 existing routing entries
[2026-02-01T13:54:15.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11978
[2026-02-01T13:54:15.174Z] [BOT] Timestamp: 2026-02-01T13:54:15.125Z
[2026-02-01T13:54:15.174Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T13:54:15.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #📍・JID_6daed763: 5 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T13:54:15.175Z] [BOT] 5. #🤖・ai-jobs: 1 posts
[2026-02-01T13:54:15.175Z] [BOT] [STATS] Channel stats saved
[2026-02-01T13:54:15.175Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1897 jobs in memory (cached)
[2026-02-01T13:54:15.216Z] [BOT] ✅ Loaded V2 database: 1897 jobs
💾 DISK STATE: 1897 jobs on disk
[2026-02-01T13:54:15.216Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1897
[2026-02-01T13:54:15.219Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:54:15.219Z] [BOT] 💾 AFTER MERGE: 1897 jobs (merged disk + memory)
[2026-02-01T13:54:15.221Z] [BOT] ✅ No jobs to archive (all 1897 jobs within 7-day window)
[2026-02-01T13:54:15.322Z] [BOT] 💾 Saved posted_jobs.json: 1897 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:54:15.322Z] [BOT] ✅ Database saved successfully
[2026-02-01T13:54:17.357Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*