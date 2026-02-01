# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T13:27:23.149Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T13:26:35.846Z] ========================================
[2026-02-01T13:26:35.847Z] Discord Bot Execution Log
[2026-02-01T13:26:35.847Z] Environment: GitHub Actions
[2026-02-01T13:26:35.848Z] Node Version: v20.20.0
[2026-02-01T13:26:35.848Z] ========================================
[2026-02-01T13:26:35.848Z] Environment Variables Check:
[2026-02-01T13:26:35.848Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T13:26:35.848Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T13:26:35.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T13:26:35.848Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T13:26:35.848Z] 
Multi-Channel Configuration:
[2026-02-01T13:26:35.848Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T13:26:35.848Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.848Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.848Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T13:26:35.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.849Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.849Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.849Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.849Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T13:26:35.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T13:26:35.849Z] 
Data Files Check:
[2026-02-01T13:26:35.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60149 bytes)
[2026-02-01T13:26:35.898Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9868001 bytes)
[2026-02-01T13:26:35.898Z] 
========================================
[2026-02-01T13:26:35.898Z] Starting Enhanced Discord Bot...
[2026-02-01T13:26:35.898Z] ========================================
[2026-02-01T13:26:36.464Z] [BOT] ✅ Loaded V2 database: 1877 jobs
[2026-02-01T13:26:36.895Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T13:26:36.896Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T13:26:36.896Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T13:26:37.005Z] [BOT] ✅ Loaded pending queue: 2948 total (1031 pending, 50 enriched, 1867 posted)
[2026-02-01T13:26:37.005Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T13:26:37.005Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T13:26:37.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T13:26:37.006Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T13:26:37.007Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T13:26:37.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T13:26:37.007Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T13:26:37.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T13:26:37.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T13:26:37.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T13:26:37.009Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T13:26:37.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T13:26:37.009Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T13:26:37.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T13:26:37.009Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T13:26:37.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T13:26:37.010Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T13:26:37.023Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T13:26:37.023Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T13:26:37.024Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T13:26:37.024Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-02-01T13:26:37.025Z] [BOT] (12 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies: dallas, chesterfield
[2026-02-01T13:26:37.025Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego, dayton, new york, dallas, casa grande
   - Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san antonio, tampa
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T13:26:37.028Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-02-01T13:26:37.029Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:37.029Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:37.046Z] [BOT ERROR] (node:2642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T13:26:37.411Z] [BOT] ✅ Posted message: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T13:26:37.411Z] [BOT] ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:37.412Z] [BOT] 💾 Added channel posting: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:37.413Z] [BOT] 💾 BEFORE MERGE: 1878 jobs in memory (cached)
[2026-02-01T13:26:37.453Z] [BOT] ✅ Loaded V2 database: 1877 jobs
💾 DISK STATE: 1877 jobs on disk
[2026-02-01T13:26:37.453Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1878
[2026-02-01T13:26:37.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:37.457Z] [BOT] 💾 AFTER MERGE: 1878 jobs (merged disk + memory)
[2026-02-01T13:26:37.459Z] [BOT] ✅ No jobs to archive (all 1878 jobs within 7-day window)
[2026-02-01T13:26:37.571Z] [BOT] 💾 Saved posted_jobs.json: 1878 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:39.437Z] [BOT] ✅ Posted message: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T13:26:39.437Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:26:39.437Z] [BOT] 💾 Added channel posting: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:39.437Z] [BOT] 💾 BEFORE MERGE: 1878 jobs in memory (cached)
[2026-02-01T13:26:39.474Z] [BOT] ✅ Loaded V2 database: 1878 jobs
[2026-02-01T13:26:39.474Z] [BOT] 💾 DISK STATE: 1878 jobs on disk
[2026-02-01T13:26:39.474Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1878
[2026-02-01T13:26:39.479Z] [BOT] 🔀 Deep merged: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:26:39.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1878 jobs (merged disk + memory)
[2026-02-01T13:26:39.480Z] [BOT] ✅ No jobs to archive (all 1878 jobs within 7-day window)
[2026-02-01T13:26:39.578Z] [BOT] 💾 Saved posted_jobs.json: 1878 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:41.080Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:41.080Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:41.220Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:41.221Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:41.221Z] [BOT] 💾 BEFORE MERGE: 1879 jobs in memory (cached)
[2026-02-01T13:26:41.255Z] [BOT] ✅ Loaded V2 database: 1878 jobs
💾 DISK STATE: 1878 jobs on disk
[2026-02-01T13:26:41.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1879
[2026-02-01T13:26:41.259Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:41.259Z] [BOT] 💾 AFTER MERGE: 1879 jobs (merged disk + memory)
[2026-02-01T13:26:41.260Z] [BOT] ✅ No jobs to archive (all 1879 jobs within 7-day window)
[2026-02-01T13:26:41.378Z] [BOT] 💾 Saved posted_jobs.json: 1879 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:43.042Z] [BOT] ✅ Posted message: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T13:26:43.042Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:26:43.043Z] [BOT] 💾 Added channel posting: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:43.043Z] [BOT] 💾 BEFORE MERGE: 1879 jobs in memory (cached)
[2026-02-01T13:26:43.077Z] [BOT] ✅ Loaded V2 database: 1879 jobs
💾 DISK STATE: 1879 jobs on disk
[2026-02-01T13:26:43.077Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1879
[2026-02-01T13:26:43.082Z] [BOT] 🔀 Deep merged: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:26:43.082Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1879 jobs (merged disk + memory)
[2026-02-01T13:26:43.083Z] [BOT] ✅ No jobs to archive (all 1879 jobs within 7-day window)
[2026-02-01T13:26:43.178Z] [BOT] 💾 Saved posted_jobs.json: 1879 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:44.679Z] [BOT] 📍 [ROUTING] "Software Engineer openings for OPT/GC/EAD" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T13:26:44.679Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:45.033Z] [BOT] ✅ Posted message: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:45.034Z] [BOT] 💾 Added channel posting: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:45.034Z] [BOT] 💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-01T13:26:45.076Z] [BOT] ✅ Loaded V2 database: 1879 jobs
💾 DISK STATE: 1879 jobs on disk
[2026-02-01T13:26:45.077Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-01T13:26:45.081Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:45.081Z] [BOT] 💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-01T13:26:45.082Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-02-01T13:26:45.187Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
[2026-02-01T13:26:45.188Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:46.860Z] [BOT] ✅ Posted message: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T13:26:46.860Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:26:46.860Z] [BOT] 💾 Added channel posting: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:46.860Z] [BOT] 💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-01T13:26:46.893Z] [BOT] ✅ Loaded V2 database: 1880 jobs
💾 DISK STATE: 1880 jobs on disk
[2026-02-01T13:26:46.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-01T13:26:46.896Z] [BOT] 🔀 Deep merged: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:26:46.896Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-01T13:26:46.898Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-02-01T13:26:46.984Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:48.485Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Fullstack" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:48.781Z] [BOT] ✅ Posted message: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:48.782Z] [BOT] 💾 Added channel posting: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:48.782Z] [BOT] 💾 BEFORE MERGE: 1881 jobs in memory (cached)
[2026-02-01T13:26:48.815Z] [BOT] ✅ Loaded V2 database: 1880 jobs
💾 DISK STATE: 1880 jobs on disk
[2026-02-01T13:26:48.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1881
[2026-02-01T13:26:48.819Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:48.819Z] [BOT] 💾 AFTER MERGE: 1881 jobs (merged disk + memory)
[2026-02-01T13:26:48.820Z] [BOT] ✅ No jobs to archive (all 1881 jobs within 7-day window)
[2026-02-01T13:26:48.920Z] [BOT] 💾 Saved posted_jobs.json: 1881 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:51.954Z] [BOT] ✅ Posted message: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:26:51.955Z] [BOT] 💾 Added channel posting: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:51.955Z] [BOT] 💾 BEFORE MERGE: 1881 jobs in memory (cached)
[2026-02-01T13:26:51.989Z] [BOT] ✅ Loaded V2 database: 1881 jobs
💾 DISK STATE: 1881 jobs on disk
[2026-02-01T13:26:51.990Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1881
[2026-02-01T13:26:51.993Z] [BOT] 🔀 Deep merged: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:26:51.993Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1881 jobs (merged disk + memory)
[2026-02-01T13:26:51.994Z] [BOT] ✅ No jobs to archive (all 1881 jobs within 7-day window)
[2026-02-01T13:26:52.095Z] [BOT] 💾 Saved posted_jobs.json: 1881 active jobs
[2026-02-01T13:26:52.096Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:53.597Z] [BOT] 📍 [ROUTING] "OBIEE Salesforce Training and Placement" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2026-02-01T13:26:53.597Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:54.078Z] [BOT] ✅ Posted message: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:54.078Z] [BOT] 💾 Added channel posting: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:54.079Z] [BOT] 💾 BEFORE MERGE: 1882 jobs in memory (cached)
[2026-02-01T13:26:54.113Z] [BOT] ✅ Loaded V2 database: 1881 jobs
💾 DISK STATE: 1881 jobs on disk
[2026-02-01T13:26:54.114Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1882
[2026-02-01T13:26:54.117Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:54.117Z] [BOT] 💾 AFTER MERGE: 1882 jobs (merged disk + memory)
[2026-02-01T13:26:54.118Z] [BOT] ✅ No jobs to archive (all 1882 jobs within 7-day window)
[2026-02-01T13:26:54.234Z] [BOT] 💾 Saved posted_jobs.json: 1882 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:56.087Z] [BOT] ✅ Posted message: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:26:56.087Z] [BOT] 💾 Added channel posting: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:56.088Z] [BOT] 💾 BEFORE MERGE: 1882 jobs in memory (cached)
[2026-02-01T13:26:56.120Z] [BOT] ✅ Loaded V2 database: 1882 jobs
[2026-02-01T13:26:56.121Z] [BOT] 💾 DISK STATE: 1882 jobs on disk
[2026-02-01T13:26:56.121Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1882
[2026-02-01T13:26:56.124Z] [BOT] 🔀 Deep merged: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:26:56.124Z] [BOT] 💾 AFTER MERGE: 1882 jobs (merged disk + memory)
[2026-02-01T13:26:56.126Z] [BOT] ✅ No jobs to archive (all 1882 jobs within 7-day window)
[2026-02-01T13:26:56.212Z] [BOT] 💾 Saved posted_jobs.json: 1882 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:57.715Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:57.715Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:26:57.983Z] [BOT] ✅ Posted message: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T13:26:57.983Z] [BOT] ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2026-02-01T13:26:57.984Z] [BOT] 💾 Added channel posting: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:26:57.984Z] [BOT] 💾 BEFORE MERGE: 1883 jobs in memory (cached)
[2026-02-01T13:26:58.016Z] [BOT] ✅ Loaded V2 database: 1882 jobs
💾 DISK STATE: 1882 jobs on disk
[2026-02-01T13:26:58.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1883
[2026-02-01T13:26:58.020Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:26:58.020Z] [BOT] 💾 AFTER MERGE: 1883 jobs (merged disk + memory)
[2026-02-01T13:26:58.021Z] [BOT] ✅ No jobs to archive (all 1883 jobs within 7-day window)
[2026-02-01T13:26:58.122Z] [BOT] 💾 Saved posted_jobs.json: 1883 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:26:59.898Z] [BOT] ✅ Posted message: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T13:26:59.899Z] [BOT] 💾 Added channel posting: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:26:59.899Z] [BOT] 💾 BEFORE MERGE: 1883 jobs in memory (cached)
[2026-02-01T13:26:59.933Z] [BOT] ✅ Loaded V2 database: 1883 jobs
💾 DISK STATE: 1883 jobs on disk
[2026-02-01T13:26:59.933Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1883
[2026-02-01T13:26:59.937Z] [BOT] 🔀 Deep merged: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:26:59.937Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1883 jobs (merged disk + memory)
[2026-02-01T13:26:59.938Z] [BOT] ✅ No jobs to archive (all 1883 jobs within 7-day window)
[2026-02-01T13:27:00.051Z] [BOT] 💾 Saved posted_jobs.json: 1883 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:01.551Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:27:01.797Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:01.798Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:27:01.798Z] [BOT] 💾 BEFORE MERGE: 1884 jobs in memory (cached)
[2026-02-01T13:27:01.831Z] [BOT] ✅ Loaded V2 database: 1883 jobs
💾 DISK STATE: 1883 jobs on disk
[2026-02-01T13:27:01.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1884
[2026-02-01T13:27:01.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:27:01.835Z] [BOT] 💾 AFTER MERGE: 1884 jobs (merged disk + memory)
[2026-02-01T13:27:01.836Z] [BOT] ✅ No jobs to archive (all 1884 jobs within 7-day window)
[2026-02-01T13:27:01.943Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:03.617Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:27:03.617Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:27:03.618Z] [BOT] 💾 BEFORE MERGE: 1884 jobs in memory (cached)
[2026-02-01T13:27:03.650Z] [BOT] ✅ Loaded V2 database: 1884 jobs
💾 DISK STATE: 1884 jobs on disk
[2026-02-01T13:27:03.650Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1884
[2026-02-01T13:27:03.654Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:27:03.654Z] [BOT] 💾 AFTER MERGE: 1884 jobs (merged disk + memory)
[2026-02-01T13:27:03.655Z] [BOT] ✅ No jobs to archive (all 1884 jobs within 7-day window)
[2026-02-01T13:27:03.753Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:05.255Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:05.255Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:27:05.548Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:05.549Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 1885 jobs in memory (cached)
[2026-02-01T13:27:05.581Z] [BOT] ✅ Loaded V2 database: 1884 jobs
💾 DISK STATE: 1884 jobs on disk
[2026-02-01T13:27:05.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1885
[2026-02-01T13:27:05.585Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1885 jobs (merged disk + memory)
[2026-02-01T13:27:05.586Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-02-01T13:27:05.675Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:07.507Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T13:27:07.507Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T13:27:07.508Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:27:07.508Z] [BOT] 💾 BEFORE MERGE: 1885 jobs in memory (cached)
[2026-02-01T13:27:07.546Z] [BOT] ✅ Loaded V2 database: 1885 jobs
💾 DISK STATE: 1885 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1885
[2026-02-01T13:27:07.551Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:27:07.552Z] [BOT] 💾 AFTER MERGE: 1885 jobs (merged disk + memory)
[2026-02-01T13:27:07.553Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-02-01T13:27:07.662Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:09.161Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer - " @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T13:27:09.161Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:27:09.400Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T13:27:09.400Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:09.401Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:27:09.401Z] [BOT] 💾 BEFORE MERGE: 1886 jobs in memory (cached)
[2026-02-01T13:27:09.434Z] [BOT] ✅ Loaded V2 database: 1885 jobs
💾 DISK STATE: 1885 jobs on disk
[2026-02-01T13:27:09.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1886
[2026-02-01T13:27:09.438Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:27:09.438Z] [BOT] 💾 AFTER MERGE: 1886 jobs (merged disk + memory)
[2026-02-01T13:27:09.439Z] [BOT] ✅ No jobs to archive (all 1886 jobs within 7-day window)
[2026-02-01T13:27:09.549Z] [BOT] 💾 Saved posted_jobs.json: 1886 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:11.231Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:27:11.232Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:27:11.232Z] [BOT] 💾 BEFORE MERGE: 1886 jobs in memory (cached)
[2026-02-01T13:27:11.264Z] [BOT] ✅ Loaded V2 database: 1886 jobs
💾 DISK STATE: 1886 jobs on disk
[2026-02-01T13:27:11.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1886
[2026-02-01T13:27:11.268Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T13:27:11.268Z] [BOT] 💾 AFTER MERGE: 1886 jobs (merged disk + memory)
[2026-02-01T13:27:11.269Z] [BOT] ✅ No jobs to archive (all 1886 jobs within 7-day window)
[2026-02-01T13:27:11.369Z] [BOT] 💾 Saved posted_jobs.json: 1886 active jobs
[2026-02-01T13:27:11.369Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:12.872Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineers" @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:12.872Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T13:27:13.135Z] [BOT] ✅ Posted message: Entry Level Software Engineers @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineers @ ORG_9af9eef3 Technologies
[2026-02-01T13:27:13.136Z] [BOT] 💾 Added channel posting: Entry Level Software Engineers @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T13:27:13.136Z] [BOT] 💾 BEFORE MERGE: 1887 jobs in memory (cached)
[2026-02-01T13:27:13.169Z] [BOT] ✅ Loaded V2 database: 1886 jobs
💾 DISK STATE: 1886 jobs on disk
[2026-02-01T13:27:13.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1887
[2026-02-01T13:27:13.172Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:27:13.172Z] [BOT] 💾 AFTER MERGE: 1887 jobs (merged disk + memory)
[2026-02-01T13:27:13.173Z] [BOT] ✅ No jobs to archive (all 1887 jobs within 7-day window)
[2026-02-01T13:27:13.266Z] [BOT] 💾 Saved posted_jobs.json: 1887 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:14.950Z] [BOT] ✅ Posted message: Entry Level Software Engineers @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T13:27:14.951Z] [BOT] 💾 Added channel posting: Entry Level Software Engineers @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T13:27:14.951Z] [BOT] 💾 BEFORE MERGE: 1887 jobs in memory (cached)
[2026-02-01T13:27:14.988Z] [BOT] ✅ Loaded V2 database: 1887 jobs
💾 DISK STATE: 1887 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1887
[2026-02-01T13:27:14.994Z] [BOT] 🔀 Deep merged: Entry Level Software Engineers @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T13:27:14.994Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1887 jobs (merged disk + memory)
[2026-02-01T13:27:14.995Z] [BOT] ✅ No jobs to archive (all 1887 jobs within 7-day window)
[2026-02-01T13:27:15.107Z] [BOT] 💾 Saved posted_jobs.json: 1887 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:19.606Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T13:27:19.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "f06146c7dbdec198"
[2026-02-01T13:27:19.607Z] [BOT] ⏭️  Skipping duplicate: JID_8924f07e (posted within 7 days)
[2026-02-01T13:27:19.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "adc582f16c1651f9"
[2026-02-01T13:27:19.608Z] [BOT] ⏭️  Skipping duplicate: JID_c114392d (posted within 7 days)
[2026-02-01T13:27:19.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "733678369ef80434"
[2026-02-01T13:27:19.608Z] [BOT] ⏭️  Skipping duplicate: JID_3278d02d (posted within 7 days)
[2026-02-01T13:27:19.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "d4dede0c2d90b80d"
[2026-02-01T13:27:19.609Z] [BOT] ⏭️  Skipping duplicate: JID_e33c64fd (posted within 7 days)
[2026-02-01T13:27:19.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "8768c32b84d5088b"
[2026-02-01T13:27:19.609Z] [BOT] ⏭️  Skipping duplicate: JID_747d14a2 (posted within 7 days)
[2026-02-01T13:27:19.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "b423a2e0c6d633cf"
[2026-02-01T13:27:19.609Z] [BOT] ⏭️  Skipping duplicate: JID_59cfe0ef (posted within 7 days)
[2026-02-01T13:27:19.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "4c17049af66df71e"
⏭️  Skipping duplicate: JID_72644321 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "869664af7afe0d9b"
⏭️  Skipping duplicate: JID_72590c33 (posted within 7 days)
[2026-02-01T13:27:19.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "a02c83262fd18fe6"
[2026-02-01T13:27:19.610Z] [BOT] ⏭️  Skipping duplicate: JID_a9dbdeb6 (posted within 7 days)
[2026-02-01T13:27:19.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "965a9e3f5056bdb9"
[2026-02-01T13:27:19.611Z] [BOT] ⏭️  Skipping duplicate: JID_ae20f0cf (posted within 7 days)
[2026-02-01T13:27:19.719Z] [BOT] ✅ Loaded pending queue: 2948 total (1031 pending, 50 enriched, 1867 posted)
[2026-02-01T13:27:19.900Z] [BOT] ✅ Saved pending queue: 2948 total (1031 pending, 40 enriched, 1877 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T13:27:19.901Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T13:27:19.988Z] [BOT] 📂 Loaded 11958 existing routing entries
[2026-02-01T13:27:20.143Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T13:27:20.144Z] [BOT] New entries: 10
   Total entries: 11968
   Timestamp: 2026-02-01T13:27:20.095Z
[2026-02-01T13:27:20.144Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T13:27:20.144Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T13:27:20.144Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T13:27:20.144Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 3
   Top channels:
[2026-02-01T13:27:20.144Z] [BOT] 1. #💻・tech-jobs: 10 posts
     2. #📍・JID_6daed763: 9 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T13:27:20.145Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T13:27:20.145Z] [BOT] 💾 BEFORE MERGE: 1887 jobs in memory (cached)
[2026-02-01T13:27:20.181Z] [BOT] ✅ Loaded V2 database: 1887 jobs
💾 DISK STATE: 1887 jobs on disk
[2026-02-01T13:27:20.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1887
[2026-02-01T13:27:20.184Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T13:27:20.184Z] [BOT] 💾 AFTER MERGE: 1887 jobs (merged disk + memory)
[2026-02-01T13:27:20.186Z] [BOT] ✅ No jobs to archive (all 1887 jobs within 7-day window)
[2026-02-01T13:27:20.283Z] [BOT] 💾 Saved posted_jobs.json: 1887 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T13:27:20.283Z] [BOT] ✅ Database saved successfully
[2026-02-01T13:27:22.314Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*