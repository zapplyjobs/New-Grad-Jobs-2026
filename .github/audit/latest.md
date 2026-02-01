# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T11:25:07.490Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:24:15.558Z] ========================================
[2026-02-01T11:24:15.560Z] Discord Bot Execution Log
[2026-02-01T11:24:15.560Z] Environment: GitHub Actions
[2026-02-01T11:24:15.560Z] Node Version: v20.20.0
[2026-02-01T11:24:15.560Z] ========================================
[2026-02-01T11:24:15.560Z] Environment Variables Check:
[2026-02-01T11:24:15.560Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:24:15.560Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:24:15.560Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:24:15.561Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:24:15.561Z] 
Multi-Channel Configuration:
[2026-02-01T11:24:15.561Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:24:15.561Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:24:15.561Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:24:15.561Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:24:15.562Z] 
Data Files Check:
[2026-02-01T11:24:15.562Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64992 bytes)
[2026-02-01T11:24:15.611Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9595596 bytes)
[2026-02-01T11:24:15.611Z] 
========================================
[2026-02-01T11:24:15.611Z] Starting Enhanced Discord Bot...
[2026-02-01T11:24:15.611Z] ========================================
[2026-02-01T11:24:16.213Z] [BOT] ✅ Loaded V2 database: 1807 jobs
[2026-02-01T11:24:16.674Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T11:24:16.675Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:24:16.675Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:24:16.787Z] [BOT] ✅ Loaded pending queue: 2948 total (1101 pending, 50 enriched, 1797 posted)
[2026-02-01T11:24:16.787Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:24:16.788Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:24:16.789Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T11:24:16.789Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:24:16.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:24:16.789Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:24:16.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T11:24:16.790Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T11:24:16.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T11:24:16.790Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:24:16.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:24:16.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T11:24:16.791Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:24:16.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T11:24:16.791Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:24:16.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T11:24:16.792Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:24:16.805Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:24:16.805Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T11:24:16.806Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T11:24:16.806Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T11:24:16.806Z] [BOT] (4 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-02-01T11:24:16.807Z] [BOT] - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
   - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T11:24:16.807Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:24:16.809Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T11:24:16.810Z] [BOT] 📍 [ROUTING] "Data Science Graduate" @ ORG_a5257743 Packard Enterprise
[2026-02-01T11:24:16.810Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T11:24:16.828Z] [BOT ERROR] (node:3310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:24:17.064Z] [BOT] ✅ Posted message: Data Science Graduate @ ORG_a5257743 Packard Enterprise in #🤖・ai-jobs
[2026-02-01T11:24:17.064Z] [BOT] ✅ Industry: Data Science Graduate @ ORG_a5257743 Packard Enterprise
[2026-02-01T11:24:17.065Z] [BOT] 💾 Added channel posting: Data Science Graduate @ ORG_a5257743 Packard Enterprise → category channel (1 total channels)
[2026-02-01T11:24:17.065Z] [BOT] 💾 BEFORE MERGE: 1808 jobs in memory (cached)
[2026-02-01T11:24:17.104Z] [BOT] ✅ Loaded V2 database: 1807 jobs
💾 DISK STATE: 1807 jobs on disk
[2026-02-01T11:24:17.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1808
[2026-02-01T11:24:17.109Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:17.109Z] [BOT] 💾 AFTER MERGE: 1808 jobs (merged disk + memory)
[2026-02-01T11:24:17.110Z] [BOT] ✅ No jobs to archive (all 1808 jobs within 7-day window)
[2026-02-01T11:24:17.236Z] [BOT] 💾 Saved posted_jobs.json: 1808 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:18.946Z] [BOT] ✅ Posted message: Data Science Graduate @ ORG_a5257743 Packard Enterprise in #📍・JID_6daed763
[2026-02-01T11:24:18.947Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:24:18.947Z] [BOT] 💾 Added channel posting: Data Science Graduate @ ORG_a5257743 Packard Enterprise → location channel (2 total channels)
💾 BEFORE MERGE: 1808 jobs in memory (cached)
[2026-02-01T11:24:18.985Z] [BOT] ✅ Loaded V2 database: 1808 jobs
[2026-02-01T11:24:18.985Z] [BOT] 💾 DISK STATE: 1808 jobs on disk
[2026-02-01T11:24:18.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1808
[2026-02-01T11:24:18.989Z] [BOT] 🔀 Deep merged: Data Science Graduate @ ORG_a5257743 Packard Enterprise (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:18.990Z] [BOT] 💾 AFTER MERGE: 1808 jobs (merged disk + memory)
[2026-02-01T11:24:18.991Z] [BOT] ✅ No jobs to archive (all 1808 jobs within 7-day window)
[2026-02-01T11:24:19.086Z] [BOT] 💾 Saved posted_jobs.json: 1808 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:20.588Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T11:24:20.589Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:24:20.844Z] [BOT] ✅ Posted message: Machine Learning Graduate @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate @ ORG_08c9a13c
[2026-02-01T11:24:20.845Z] [BOT] 💾 Added channel posting: Machine Learning Graduate @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:24:20.845Z] [BOT] 💾 BEFORE MERGE: 1809 jobs in memory (cached)
[2026-02-01T11:24:20.879Z] [BOT] ✅ Loaded V2 database: 1808 jobs
💾 DISK STATE: 1808 jobs on disk
[2026-02-01T11:24:20.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1809
[2026-02-01T11:24:20.883Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:20.883Z] [BOT] 💾 AFTER MERGE: 1809 jobs (merged disk + memory)
[2026-02-01T11:24:20.885Z] [BOT] ✅ No jobs to archive (all 1809 jobs within 7-day window)
[2026-02-01T11:24:20.990Z] [BOT] 💾 Saved posted_jobs.json: 1809 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:22.838Z] [BOT] ✅ Posted message: Machine Learning Graduate @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T11:24:22.838Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:24:22.838Z] [BOT] 💾 Added channel posting: Machine Learning Graduate @ ORG_08c9a13c → location channel (2 total channels)
💾 BEFORE MERGE: 1809 jobs in memory (cached)
[2026-02-01T11:24:22.884Z] [BOT] ✅ Loaded V2 database: 1809 jobs
[2026-02-01T11:24:22.884Z] [BOT] 💾 DISK STATE: 1809 jobs on disk
[2026-02-01T11:24:22.886Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1809
[2026-02-01T11:24:22.890Z] [BOT] 🔀 Deep merged: Machine Learning Graduate @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:22.890Z] [BOT] 💾 AFTER MERGE: 1809 jobs (merged disk + memory)
[2026-02-01T11:24:22.892Z] [BOT] ✅ No jobs to archive (all 1809 jobs within 7-day window)
[2026-02-01T11:24:22.983Z] [BOT] 💾 Saved posted_jobs.json: 1809 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:24.484Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Research - Generative AI" @ ORG_b49e6eb0
[2026-02-01T11:24:24.484Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:24:24.703Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0 in #🤖・ai-jobs
[2026-02-01T11:24:24.704Z] [BOT] ✅ Industry: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0
[2026-02-01T11:24:24.704Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0 → category channel (1 total channels)
[2026-02-01T11:24:24.704Z] [BOT] 💾 BEFORE MERGE: 1810 jobs in memory (cached)
[2026-02-01T11:24:24.738Z] [BOT] ✅ Loaded V2 database: 1809 jobs
💾 DISK STATE: 1809 jobs on disk
[2026-02-01T11:24:24.738Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1810
[2026-02-01T11:24:24.742Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:24.742Z] [BOT] 💾 AFTER MERGE: 1810 jobs (merged disk + memory)
[2026-02-01T11:24:24.743Z] [BOT] ✅ No jobs to archive (all 1810 jobs within 7-day window)
[2026-02-01T11:24:24.840Z] [BOT] 💾 Saved posted_jobs.json: 1810 active jobs
[2026-02-01T11:24:24.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:26.546Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0 in #🌉・JID_739bbc0b
[2026-02-01T11:24:26.546Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:24:26.546Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0 → location channel (2 total channels)
[2026-02-01T11:24:26.546Z] [BOT] 💾 BEFORE MERGE: 1810 jobs in memory (cached)
[2026-02-01T11:24:26.578Z] [BOT] ✅ Loaded V2 database: 1810 jobs
💾 DISK STATE: 1810 jobs on disk
[2026-02-01T11:24:26.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1810
[2026-02-01T11:24:26.581Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Research - Generative AI @ ORG_b49e6eb0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:26.581Z] [BOT] 💾 AFTER MERGE: 1810 jobs (merged disk + memory)
[2026-02-01T11:24:26.582Z] [BOT] ✅ No jobs to archive (all 1810 jobs within 7-day window)
[2026-02-01T11:24:26.693Z] [BOT] 💾 Saved posted_jobs.json: 1810 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:31.193Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T11:24:31.194Z] [BOT] 📍 [ROUTING] "Software Engineer, Communications Platform" @ ORG_f89f8538
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:24:31.447Z] [BOT] ✅ Posted message: Software Engineer, Communications Platform @ ORG_f89f8538 in #💻・tech-jobs
[2026-02-01T11:24:31.447Z] [BOT] ✅ Industry: Software Engineer, Communications Platform @ ORG_f89f8538
[2026-02-01T11:24:31.448Z] [BOT] 💾 Added channel posting: Software Engineer, Communications Platform @ ORG_f89f8538 → category channel (1 total channels)
[2026-02-01T11:24:31.448Z] [BOT] 💾 BEFORE MERGE: 1811 jobs in memory (cached)
[2026-02-01T11:24:31.480Z] [BOT] ✅ Loaded V2 database: 1810 jobs
💾 DISK STATE: 1810 jobs on disk
[2026-02-01T11:24:31.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1811
[2026-02-01T11:24:31.484Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:31.484Z] [BOT] 💾 AFTER MERGE: 1811 jobs (merged disk + memory)
[2026-02-01T11:24:31.485Z] [BOT] ✅ No jobs to archive (all 1811 jobs within 7-day window)
[2026-02-01T11:24:31.579Z] [BOT] 💾 Saved posted_jobs.json: 1811 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:33.312Z] [BOT] ✅ Posted message: Software Engineer, Communications Platform @ ORG_f89f8538 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:24:33.313Z] [BOT] 💾 Added channel posting: Software Engineer, Communications Platform @ ORG_f89f8538 → location channel (2 total channels)
💾 BEFORE MERGE: 1811 jobs in memory (cached)
[2026-02-01T11:24:33.346Z] [BOT] ✅ Loaded V2 database: 1811 jobs
💾 DISK STATE: 1811 jobs on disk
[2026-02-01T11:24:33.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1811
[2026-02-01T11:24:33.349Z] [BOT] 🔀 Deep merged: Software Engineer, Communications Platform @ ORG_f89f8538 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:33.349Z] [BOT] 💾 AFTER MERGE: 1811 jobs (merged disk + memory)
[2026-02-01T11:24:33.350Z] [BOT] ✅ No jobs to archive (all 1811 jobs within 7-day window)
[2026-02-01T11:24:33.446Z] [BOT] 💾 Saved posted_jobs.json: 1811 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:34.948Z] [BOT] 📍 [ROUTING] "Hydrogeologist" @ ORG_a7c3f52e
[2026-02-01T11:24:34.948Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:24:35.152Z] [BOT] ✅ Posted message: Hydrogeologist @ ORG_a7c3f52e in #💻・tech-jobs
[2026-02-01T11:24:35.152Z] [BOT] ✅ Industry: Hydrogeologist @ ORG_a7c3f52e
[2026-02-01T11:24:35.153Z] [BOT] 💾 Added channel posting: Hydrogeologist @ ORG_a7c3f52e → category channel (1 total channels)
[2026-02-01T11:24:35.153Z] [BOT] 💾 BEFORE MERGE: 1812 jobs in memory (cached)
[2026-02-01T11:24:35.185Z] [BOT] ✅ Loaded V2 database: 1811 jobs
💾 DISK STATE: 1811 jobs on disk
[2026-02-01T11:24:35.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1812
[2026-02-01T11:24:35.188Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:35.188Z] [BOT] 💾 AFTER MERGE: 1812 jobs (merged disk + memory)
[2026-02-01T11:24:35.189Z] [BOT] ✅ No jobs to archive (all 1812 jobs within 7-day window)
[2026-02-01T11:24:35.278Z] [BOT] 💾 Saved posted_jobs.json: 1812 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:36.939Z] [BOT] ✅ Posted message: Hydrogeologist @ ORG_a7c3f52e in #📍・JID_6daed763
[2026-02-01T11:24:36.940Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:24:36.940Z] [BOT] 💾 Added channel posting: Hydrogeologist @ ORG_a7c3f52e → location channel (2 total channels)
[2026-02-01T11:24:36.940Z] [BOT] 💾 BEFORE MERGE: 1812 jobs in memory (cached)
[2026-02-01T11:24:36.973Z] [BOT] ✅ Loaded V2 database: 1812 jobs
💾 DISK STATE: 1812 jobs on disk
[2026-02-01T11:24:36.974Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1812
[2026-02-01T11:24:36.977Z] [BOT] 🔀 Deep merged: Hydrogeologist @ ORG_a7c3f52e (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:24:36.977Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1812 jobs (merged disk + memory)
[2026-02-01T11:24:36.978Z] [BOT] ✅ No jobs to archive (all 1812 jobs within 7-day window)
[2026-02-01T11:24:37.077Z] [BOT] 💾 Saved posted_jobs.json: 1812 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:38.580Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_0c79a9c2 Intuition
[2026-02-01T11:24:38.580Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:24:38.777Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition
[2026-02-01T11:24:38.778Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition → category channel (1 total channels)
[2026-02-01T11:24:38.778Z] [BOT] 💾 BEFORE MERGE: 1813 jobs in memory (cached)
[2026-02-01T11:24:38.810Z] [BOT] ✅ Loaded V2 database: 1812 jobs
💾 DISK STATE: 1812 jobs on disk
[2026-02-01T11:24:38.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1813
[2026-02-01T11:24:38.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1813 jobs (merged disk + memory)
[2026-02-01T11:24:38.814Z] [BOT] ✅ No jobs to archive (all 1813 jobs within 7-day window)
[2026-02-01T11:24:38.904Z] [BOT] 💾 Saved posted_jobs.json: 1813 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:40.823Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:24:40.824Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition → location channel (2 total channels)
[2026-02-01T11:24:40.824Z] [BOT] 💾 BEFORE MERGE: 1813 jobs in memory (cached)
[2026-02-01T11:24:40.857Z] [BOT] ✅ Loaded V2 database: 1813 jobs
💾 DISK STATE: 1813 jobs on disk
[2026-02-01T11:24:40.857Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1813
[2026-02-01T11:24:40.860Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:24:40.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1813 jobs (merged disk + memory)
[2026-02-01T11:24:40.861Z] [BOT] ✅ No jobs to archive (all 1813 jobs within 7-day window)
[2026-02-01T11:24:40.973Z] [BOT] 💾 Saved posted_jobs.json: 1813 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:42.473Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b2c12453inal
[2026-02-01T11:24:42.473Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:24:43.256Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b2c12453inal in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_b2c12453inal
[2026-02-01T11:24:43.256Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b2c12453inal → category channel (1 total channels)
[2026-02-01T11:24:43.257Z] [BOT] 💾 BEFORE MERGE: 1814 jobs in memory (cached)
[2026-02-01T11:24:43.289Z] [BOT] ✅ Loaded V2 database: 1813 jobs
💾 DISK STATE: 1813 jobs on disk
[2026-02-01T11:24:43.289Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1814
[2026-02-01T11:24:43.292Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:43.292Z] [BOT] 💾 AFTER MERGE: 1814 jobs (merged disk + memory)
[2026-02-01T11:24:43.293Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-02-01T11:24:43.380Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:45.108Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b2c12453inal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T11:24:45.109Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b2c12453inal → location channel (2 total channels)
[2026-02-01T11:24:45.109Z] [BOT] 💾 BEFORE MERGE: 1814 jobs in memory (cached)
[2026-02-01T11:24:45.142Z] [BOT] ✅ Loaded V2 database: 1814 jobs
💾 DISK STATE: 1814 jobs on disk
[2026-02-01T11:24:45.142Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1814
[2026-02-01T11:24:45.146Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_b2c12453inal (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:24:45.146Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1814 jobs (merged disk + memory)
[2026-02-01T11:24:45.147Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-02-01T11:24:45.245Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:46.747Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-02-01T11:24:46.747Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:24:46.914Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-02-01T11:24:46.915Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → category channel (1 total channels)
[2026-02-01T11:24:46.915Z] [BOT] 💾 BEFORE MERGE: 1815 jobs in memory (cached)
[2026-02-01T11:24:46.946Z] [BOT] ✅ Loaded V2 database: 1814 jobs
💾 DISK STATE: 1814 jobs on disk
[2026-02-01T11:24:46.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1815
[2026-02-01T11:24:46.949Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:46.949Z] [BOT] 💾 AFTER MERGE: 1815 jobs (merged disk + memory)
[2026-02-01T11:24:46.951Z] [BOT] ✅ No jobs to archive (all 1815 jobs within 7-day window)
[2026-02-01T11:24:47.042Z] [BOT] 💾 Saved posted_jobs.json: 1815 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:48.709Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:24:48.709Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → location channel (2 total channels)
[2026-02-01T11:24:48.709Z] [BOT] 💾 BEFORE MERGE: 1815 jobs in memory (cached)
[2026-02-01T11:24:48.743Z] [BOT] ✅ Loaded V2 database: 1815 jobs
[2026-02-01T11:24:48.743Z] [BOT] 💾 DISK STATE: 1815 jobs on disk
[2026-02-01T11:24:48.743Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1815
[2026-02-01T11:24:48.746Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_7b717950 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:24:48.746Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1815 jobs (merged disk + memory)
[2026-02-01T11:24:48.747Z] [BOT] ✅ No jobs to archive (all 1815 jobs within 7-day window)
[2026-02-01T11:24:48.847Z] [BOT] 💾 Saved posted_jobs.json: 1815 active jobs
[2026-02-01T11:24:48.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:53.350Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T11:24:53.351Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_144d4f9a Sales
[2026-02-01T11:24:53.351Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:24:53.619Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_144d4f9a Sales in #📊・JID_fb739488
[2026-02-01T11:24:53.619Z] [BOT] ✅ Industry: Junior Data Engineer @ ORG_144d4f9a Sales
[2026-02-01T11:24:53.620Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_144d4f9a Sales → category channel (1 total channels)
[2026-02-01T11:24:53.620Z] [BOT] 💾 BEFORE MERGE: 1816 jobs in memory (cached)
[2026-02-01T11:24:53.661Z] [BOT] ✅ Loaded V2 database: 1815 jobs
💾 DISK STATE: 1815 jobs on disk
[2026-02-01T11:24:53.662Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1816
[2026-02-01T11:24:53.665Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:53.666Z] [BOT] 💾 AFTER MERGE: 1816 jobs (merged disk + memory)
[2026-02-01T11:24:53.667Z] [BOT] ✅ No jobs to archive (all 1816 jobs within 7-day window)
[2026-02-01T11:24:53.766Z] [BOT] 💾 Saved posted_jobs.json: 1816 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:55.429Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_144d4f9a Sales in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:24:55.430Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_144d4f9a Sales → location channel (2 total channels)
[2026-02-01T11:24:55.430Z] [BOT] 💾 BEFORE MERGE: 1816 jobs in memory (cached)
[2026-02-01T11:24:55.462Z] [BOT] ✅ Loaded V2 database: 1816 jobs
💾 DISK STATE: 1816 jobs on disk
[2026-02-01T11:24:55.462Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1816
[2026-02-01T11:24:55.466Z] [BOT] 🔀 Deep merged: Junior Data Engineer @ ORG_144d4f9a Sales (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:55.466Z] [BOT] 💾 AFTER MERGE: 1816 jobs (merged disk + memory)
[2026-02-01T11:24:55.467Z] [BOT] ✅ No jobs to archive (all 1816 jobs within 7-day window)
[2026-02-01T11:24:55.575Z] [BOT] 💾 Saved posted_jobs.json: 1816 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:57.074Z] [BOT] 📍 [ROUTING] "Data Scientist III" @ ORG_3eab285c
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T11:24:57.074Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:24:57.334Z] [BOT] ✅ Posted message: Data Scientist III @ ORG_3eab285c in #📊・JID_fb739488
  ✅ Industry: Data Scientist III @ ORG_3eab285c
[2026-02-01T11:24:57.335Z] [BOT] 💾 Added channel posting: Data Scientist III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-01T11:24:57.335Z] [BOT] 💾 BEFORE MERGE: 1817 jobs in memory (cached)
[2026-02-01T11:24:57.367Z] [BOT] ✅ Loaded V2 database: 1816 jobs
💾 DISK STATE: 1816 jobs on disk
[2026-02-01T11:24:57.367Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1817
[2026-02-01T11:24:57.370Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:24:57.371Z] [BOT] 💾 AFTER MERGE: 1817 jobs (merged disk + memory)
[2026-02-01T11:24:57.372Z] [BOT] ✅ No jobs to archive (all 1817 jobs within 7-day window)
[2026-02-01T11:24:57.461Z] [BOT] 💾 Saved posted_jobs.json: 1817 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:24:59.261Z] [BOT] ✅ Posted message: Data Scientist III @ ORG_3eab285c in #🌉・JID_739bbc0b
[2026-02-01T11:24:59.261Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:24:59.262Z] [BOT] 💾 Added channel posting: Data Scientist III @ ORG_3eab285c → location channel (2 total channels)
[2026-02-01T11:24:59.262Z] [BOT] 💾 BEFORE MERGE: 1817 jobs in memory (cached)
[2026-02-01T11:24:59.295Z] [BOT] ✅ Loaded V2 database: 1817 jobs
💾 DISK STATE: 1817 jobs on disk
[2026-02-01T11:24:59.296Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1817
[2026-02-01T11:24:59.299Z] [BOT] 🔀 Deep merged: Data Scientist III @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:24:59.299Z] [BOT] 💾 AFTER MERGE: 1817 jobs (merged disk + memory)
[2026-02-01T11:24:59.300Z] [BOT] ✅ No jobs to archive (all 1817 jobs within 7-day window)
[2026-02-01T11:24:59.399Z] [BOT] 💾 Saved posted_jobs.json: 1817 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:25:03.902Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T11:25:03.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c62ae52c..." not found, but found as SHA256 "1428b32f4408b1da"
[2026-02-01T11:25:03.904Z] [BOT] ⏭️  Skipping duplicate: JID_d31f57a6-graduate_1192963 (posted within 7 days)
[2026-02-01T11:25:03.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_66b32441..." not found, but found as SHA256 "5add7717b31a197a"
[2026-02-01T11:25:03.904Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ad7587c0-detail (posted within 7 days)
[2026-02-01T11:25:03.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_accb44e8..." not found, but found as SHA256 "ae57f7f6665906aa"
[2026-02-01T11:25:03.905Z] [BOT] ⏭️  Skipping duplicate: JID_accb44e8 (posted within 7 days)
[2026-02-01T11:25:03.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b41c201a..." not found, but found as SHA256 "32e905a1f28d4f8f"
⏭️  Skipping duplicate: JID_a8545e6d (posted within 7 days)
[2026-02-01T11:25:03.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f93da892..." not found, but found as SHA256 "c26fae79481f3423"
⏭️  Skipping duplicate: JID_fd336081-ca_r-2251073 (posted within 7 days)
[2026-02-01T11:25:03.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d597812f..." not found, but found as SHA256 "bb44f1b987050dc4"
⏭️  Skipping duplicate: JID_c75afa22-cx_1-job-1001997 (posted within 7 days)
[2026-02-01T11:25:03.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c59bfde8..." not found, but found as SHA256 "34e79f3c16a2ac5c"
[2026-02-01T11:25:03.906Z] [BOT] ⏭️  Skipping duplicate: JID_8423e1ff (posted within 7 days)
[2026-02-01T11:25:03.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_41fcda72..." not found, but found as SHA256 "05a1b2ac0dfe0945"
⏭️  Skipping duplicate: JID_e8b5d888 (posted within 7 days)
[2026-02-01T11:25:03.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dfbe0da6..." not found, but found as SHA256 "38dbfa584b43e918"
[2026-02-01T11:25:03.906Z] [BOT] ⏭️  Skipping duplicate: JID_81691056 (posted within 7 days)
[2026-02-01T11:25:03.907Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a75023a5-..." not found, but found as SHA256 "2ff71617eceffe1c"
[2026-02-01T11:25:03.907Z] [BOT] ⏭️  Skipping duplicate: JID_b66a2d0c (posted within 7 days)
[2026-02-01T11:25:04.029Z] [BOT] ✅ Loaded pending queue: 2948 total (1101 pending, 50 enriched, 1797 posted)
[2026-02-01T11:25:04.201Z] [BOT] ✅ Saved pending queue: 2948 total (1101 pending, 40 enriched, 1807 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T11:25:04.201Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T11:25:04.290Z] [BOT] 📂 Loaded 11888 existing routing entries
[2026-02-01T11:25:04.424Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T11:25:04.424Z] [BOT] Total entries: 11898
   Timestamp: 2026-02-01T11:25:04.376Z
[2026-02-01T11:25:04.425Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T11:25:04.425Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T11:25:04.425Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・JID_739bbc0b: 5 posts
[2026-02-01T11:25:04.425Z] [BOT] 2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #📍・JID_6daed763: 3 posts
     5. #📊・JID_fb739488: 2 posts
[2026-02-01T11:25:04.425Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1817 jobs in memory (cached)
[2026-02-01T11:25:04.485Z] [BOT] ✅ Loaded V2 database: 1817 jobs
💾 DISK STATE: 1817 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1817
[2026-02-01T11:25:04.486Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:25:04.486Z] [BOT] 💾 AFTER MERGE: 1817 jobs (merged disk + memory)
[2026-02-01T11:25:04.487Z] [BOT] ✅ No jobs to archive (all 1817 jobs within 7-day window)
[2026-02-01T11:25:04.582Z] [BOT] 💾 Saved posted_jobs.json: 1817 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:25:04.582Z] [BOT] ✅ Database saved successfully
[2026-02-01T11:25:06.615Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*