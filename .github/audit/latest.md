# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T16:36:18.316Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T16:35:28.200Z] ========================================
[2026-02-01T16:35:28.202Z] Discord Bot Execution Log
[2026-02-01T16:35:28.202Z] Environment: GitHub Actions
[2026-02-01T16:35:28.202Z] Node Version: v20.20.0
[2026-02-01T16:35:28.202Z] ========================================
[2026-02-01T16:35:28.202Z] Environment Variables Check:
[2026-02-01T16:35:28.203Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T16:35:28.203Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T16:35:28.203Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T16:35:28.203Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T16:35:28.203Z] 
Multi-Channel Configuration:
[2026-02-01T16:35:28.203Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T16:35:28.203Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.203Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.203Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T16:35:28.203Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.204Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.204Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.204Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.204Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:35:28.204Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T16:35:28.204Z] 
Data Files Check:
[2026-02-01T16:35:28.205Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59416 bytes)
[2026-02-01T16:35:28.257Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10176097 bytes)
[2026-02-01T16:35:28.257Z] 
========================================
[2026-02-01T16:35:28.257Z] Starting Enhanced Discord Bot...
[2026-02-01T16:35:28.257Z] ========================================
[2026-02-01T16:35:28.819Z] [BOT] ✅ Loaded V2 database: 2017 jobs
[2026-02-01T16:35:29.501Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T16:35:29.502Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T16:35:29.502Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T16:35:29.611Z] [BOT] ✅ Loaded pending queue: 2946 total (889 pending, 50 enriched, 2007 posted)
[2026-02-01T16:35:29.612Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:35:29.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T16:35:29.613Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:35:29.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T16:35:29.614Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T16:35:29.614Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T16:35:29.614Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T16:35:29.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T16:35:29.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-02-01T16:35:29.615Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T16:35:29.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T16:35:29.616Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-02-01T16:35:29.616Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T16:35:29.616Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T16:35:29.616Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T16:35:29.630Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T16:35:29.631Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T16:35:29.631Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T16:35:29.632Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T16:35:29.632Z] [BOT] (5 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T16:35:29.632Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: flower mound, dallas, new york
   - Junior Software Engineer @ mthree: salt lake, united states
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
[2026-02-01T16:35:29.632Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T16:35:29.634Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T16:35:29.635Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T16:35:29.635Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:29.653Z] [BOT ERROR] (node:2648) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T16:35:30.447Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T16:35:30.447Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T16:35:30.448Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T16:35:30.449Z] [BOT] 💾 BEFORE MERGE: 2018 jobs in memory (cached)
[2026-02-01T16:35:30.490Z] [BOT] ✅ Loaded V2 database: 2017 jobs
💾 DISK STATE: 2017 jobs on disk
[2026-02-01T16:35:30.490Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2018
[2026-02-01T16:35:30.495Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:30.495Z] [BOT] 💾 AFTER MERGE: 2018 jobs (merged disk + memory)
[2026-02-01T16:35:30.497Z] [BOT] ✅ No jobs to archive (all 2018 jobs within 7-day window)
[2026-02-01T16:35:30.625Z] [BOT] 💾 Saved posted_jobs.json: 2018 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:32.362Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:35:32.362Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T16:35:32.362Z] [BOT] 💾 BEFORE MERGE: 2018 jobs in memory (cached)
[2026-02-01T16:35:32.399Z] [BOT] ✅ Loaded V2 database: 2018 jobs
[2026-02-01T16:35:32.399Z] [BOT] 💾 DISK STATE: 2018 jobs on disk
[2026-02-01T16:35:32.400Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2018
[2026-02-01T16:35:32.404Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:32.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2018 jobs (merged disk + memory)
[2026-02-01T16:35:32.405Z] [BOT] ✅ No jobs to archive (all 2018 jobs within 7-day window)
[2026-02-01T16:35:32.511Z] [BOT] 💾 Saved posted_jobs.json: 2018 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:34.014Z] [BOT] 📍 [ROUTING] "AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd" @ ORG_08c9a13c
[2026-02-01T16:35:34.015Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:34.222Z] [BOT] ✅ Posted message: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T16:35:34.222Z] [BOT] ✅ Industry: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c
[2026-02-01T16:35:34.223Z] [BOT] 💾 Added channel posting: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T16:35:34.223Z] [BOT] 💾 BEFORE MERGE: 2019 jobs in memory (cached)
[2026-02-01T16:35:34.256Z] [BOT] ✅ Loaded V2 database: 2018 jobs
💾 DISK STATE: 2018 jobs on disk
[2026-02-01T16:35:34.256Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2019
[2026-02-01T16:35:34.261Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:34.261Z] [BOT] 💾 AFTER MERGE: 2019 jobs (merged disk + memory)
[2026-02-01T16:35:34.262Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-02-01T16:35:34.360Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
[2026-02-01T16:35:34.363Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:36.039Z] [BOT] ✅ Posted message: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T16:35:36.040Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:35:36.040Z] [BOT] 💾 Added channel posting: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c → location channel (2 total channels)
💾 BEFORE MERGE: 2019 jobs in memory (cached)
[2026-02-01T16:35:36.075Z] [BOT] ✅ Loaded V2 database: 2019 jobs
💾 DISK STATE: 2019 jobs on disk
[2026-02-01T16:35:36.075Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2019
[2026-02-01T16:35:36.079Z] [BOT] 🔀 Deep merged: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:36.079Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2019 jobs (merged disk + memory)
[2026-02-01T16:35:36.081Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-02-01T16:35:36.178Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:37.679Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Modeling & Simulation" @ ORG_528ee40d
[2026-02-01T16:35:37.680Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:38.117Z] [BOT] ✅ Posted message: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d
[2026-02-01T16:35:38.118Z] [BOT] 💾 Added channel posting: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d → category channel (1 total channels)
[2026-02-01T16:35:38.118Z] [BOT] 💾 BEFORE MERGE: 2020 jobs in memory (cached)
[2026-02-01T16:35:38.153Z] [BOT] ✅ Loaded V2 database: 2019 jobs
💾 DISK STATE: 2019 jobs on disk
[2026-02-01T16:35:38.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2020
[2026-02-01T16:35:38.157Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:38.157Z] [BOT] 💾 AFTER MERGE: 2020 jobs (merged disk + memory)
[2026-02-01T16:35:38.159Z] [BOT] ✅ No jobs to archive (all 2020 jobs within 7-day window)
[2026-02-01T16:35:38.275Z] [BOT] 💾 Saved posted_jobs.json: 2020 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:39.996Z] [BOT] ✅ Posted message: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:35:39.996Z] [BOT] 💾 Added channel posting: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d → location channel (2 total channels)
[2026-02-01T16:35:39.996Z] [BOT] 💾 BEFORE MERGE: 2020 jobs in memory (cached)
[2026-02-01T16:35:40.030Z] [BOT] ✅ Loaded V2 database: 2020 jobs
💾 DISK STATE: 2020 jobs on disk
[2026-02-01T16:35:40.030Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2020
[2026-02-01T16:35:40.035Z] [BOT] 🔀 Deep merged: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:40.035Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2020 jobs (merged disk + memory)
[2026-02-01T16:35:40.036Z] [BOT] ✅ No jobs to archive (all 2020 jobs within 7-day window)
[2026-02-01T16:35:40.143Z] [BOT] 💾 Saved posted_jobs.json: 2020 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:41.643Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Security-US" @ ORG_08c9a13c
[2026-02-01T16:35:41.643Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:41.907Z] [BOT] ✅ Posted message: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c
[2026-02-01T16:35:41.908Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T16:35:41.908Z] [BOT] 💾 BEFORE MERGE: 2021 jobs in memory (cached)
[2026-02-01T16:35:41.948Z] [BOT] ✅ Loaded V2 database: 2020 jobs
💾 DISK STATE: 2020 jobs on disk
[2026-02-01T16:35:41.948Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2021
[2026-02-01T16:35:41.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:41.954Z] [BOT] 💾 AFTER MERGE: 2021 jobs (merged disk + memory)
[2026-02-01T16:35:41.955Z] [BOT] ✅ No jobs to archive (all 2021 jobs within 7-day window)
[2026-02-01T16:35:42.052Z] [BOT] 💾 Saved posted_jobs.json: 2021 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:43.725Z] [BOT] ✅ Posted message: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T16:35:43.725Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:35:43.726Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T16:35:43.726Z] [BOT] 💾 BEFORE MERGE: 2021 jobs in memory (cached)
[2026-02-01T16:35:43.760Z] [BOT] ✅ Loaded V2 database: 2021 jobs
💾 DISK STATE: 2021 jobs on disk
[2026-02-01T16:35:43.761Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2021
[2026-02-01T16:35:43.764Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:43.764Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2021 jobs (merged disk + memory)
[2026-02-01T16:35:43.765Z] [BOT] ✅ No jobs to archive (all 2021 jobs within 7-day window)
[2026-02-01T16:35:43.881Z] [BOT] 💾 Saved posted_jobs.json: 2021 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:45.382Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ ORG_70a5ae4a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:45.582Z] [BOT] ✅ Posted message: Software Engineer - Frontend @ ORG_70a5ae4a in #💻・tech-jobs
  ✅ Industry: Software Engineer - Frontend @ ORG_70a5ae4a
[2026-02-01T16:35:45.583Z] [BOT] 💾 Added channel posting: Software Engineer - Frontend @ ORG_70a5ae4a → category channel (1 total channels)
[2026-02-01T16:35:45.583Z] [BOT] 💾 BEFORE MERGE: 2022 jobs in memory (cached)
[2026-02-01T16:35:45.617Z] [BOT] ✅ Loaded V2 database: 2021 jobs
💾 DISK STATE: 2021 jobs on disk
[2026-02-01T16:35:45.617Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2022
[2026-02-01T16:35:45.621Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:45.621Z] [BOT] 💾 AFTER MERGE: 2022 jobs (merged disk + memory)
[2026-02-01T16:35:45.622Z] [BOT] ✅ No jobs to archive (all 2022 jobs within 7-day window)
[2026-02-01T16:35:45.719Z] [BOT] 💾 Saved posted_jobs.json: 2022 active jobs
[2026-02-01T16:35:45.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:47.403Z] [BOT] ✅ Posted message: Software Engineer - Frontend @ ORG_70a5ae4a in #🗽・JID_98d4f0de
[2026-02-01T16:35:47.403Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T16:35:47.403Z] [BOT] 💾 Added channel posting: Software Engineer - Frontend @ ORG_70a5ae4a → location channel (2 total channels)
[2026-02-01T16:35:47.404Z] [BOT] 💾 BEFORE MERGE: 2022 jobs in memory (cached)
[2026-02-01T16:35:47.438Z] [BOT] ✅ Loaded V2 database: 2022 jobs
[2026-02-01T16:35:47.438Z] [BOT] 💾 DISK STATE: 2022 jobs on disk
[2026-02-01T16:35:47.438Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2022
[2026-02-01T16:35:47.442Z] [BOT] 🔀 Deep merged: Software Engineer - Frontend @ ORG_70a5ae4a (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:47.442Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2022 jobs (merged disk + memory)
[2026-02-01T16:35:47.443Z] [BOT] ✅ No jobs to archive (all 2022 jobs within 7-day window)
[2026-02-01T16:35:47.549Z] [BOT] 💾 Saved posted_jobs.json: 2022 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:49.051Z] [BOT] 📍 [ROUTING] "3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS)" @ ORG_08c9a13c
[2026-02-01T16:35:49.051Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:49.348Z] [BOT] ✅ Posted message: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T16:35:49.348Z] [BOT] ✅ Industry: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-02-01T16:35:49.349Z] [BOT] 💾 Added channel posting: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 2023 jobs in memory (cached)
[2026-02-01T16:35:49.383Z] [BOT] ✅ Loaded V2 database: 2022 jobs
💾 DISK STATE: 2022 jobs on disk
[2026-02-01T16:35:49.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2023
[2026-02-01T16:35:49.387Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:49.387Z] [BOT] 💾 AFTER MERGE: 2023 jobs (merged disk + memory)
[2026-02-01T16:35:49.388Z] [BOT] ✅ No jobs to archive (all 2023 jobs within 7-day window)
[2026-02-01T16:35:49.481Z] [BOT] 💾 Saved posted_jobs.json: 2023 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:51.234Z] [BOT] ✅ Posted message: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:35:51.234Z] [BOT] 💾 Added channel posting: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T16:35:51.234Z] [BOT] 💾 BEFORE MERGE: 2023 jobs in memory (cached)
[2026-02-01T16:35:51.278Z] [BOT] ✅ Loaded V2 database: 2023 jobs
💾 DISK STATE: 2023 jobs on disk
[2026-02-01T16:35:51.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2023
[2026-02-01T16:35:51.282Z] [BOT] 🔀 Deep merged: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:51.283Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2023 jobs (merged disk + memory)
[2026-02-01T16:35:51.284Z] [BOT] ✅ No jobs to archive (all 2023 jobs within 7-day window)
[2026-02-01T16:35:51.392Z] [BOT] 💾 Saved posted_jobs.json: 2023 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:52.894Z] [BOT] 📍 [ROUTING] "Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
[2026-02-01T16:35:52.894Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:53.303Z] [BOT] ✅ Posted message: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T16:35:53.303Z] [BOT] ✅ Industry: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-02-01T16:35:53.304Z] [BOT] 💾 Added channel posting: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:35:53.304Z] [BOT] 💾 BEFORE MERGE: 2024 jobs in memory (cached)
[2026-02-01T16:35:53.337Z] [BOT] ✅ Loaded V2 database: 2023 jobs
💾 DISK STATE: 2023 jobs on disk
[2026-02-01T16:35:53.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2024
[2026-02-01T16:35:53.341Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:53.341Z] [BOT] 💾 AFTER MERGE: 2024 jobs (merged disk + memory)
[2026-02-01T16:35:53.342Z] [BOT] ✅ No jobs to archive (all 2024 jobs within 7-day window)
[2026-02-01T16:35:53.443Z] [BOT] 💾 Saved posted_jobs.json: 2024 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:55.189Z] [BOT] ✅ Posted message: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T16:35:55.189Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:35:55.190Z] [BOT] 💾 Added channel posting: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → location channel (2 total channels)
💾 BEFORE MERGE: 2024 jobs in memory (cached)
[2026-02-01T16:35:55.236Z] [BOT] ✅ Loaded V2 database: 2024 jobs
[2026-02-01T16:35:55.236Z] [BOT] 💾 DISK STATE: 2024 jobs on disk
[2026-02-01T16:35:55.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2024
[2026-02-01T16:35:55.242Z] [BOT] 🔀 Deep merged: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:55.242Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2024 jobs (merged disk + memory)
[2026-02-01T16:35:55.244Z] [BOT] ✅ No jobs to archive (all 2024 jobs within 7-day window)
[2026-02-01T16:35:55.336Z] [BOT] 💾 Saved posted_jobs.json: 2024 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:56.838Z] [BOT] 📍 [ROUTING] "Software Engineer, Risk and Response - 2026 Start (BS/ MS)" @ ORG_1bb6fcfb
[2026-02-01T16:35:56.838Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:35:57.177Z] [BOT] ✅ Posted message: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T16:35:57.178Z] [BOT] ✅ Industry: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb
[2026-02-01T16:35:57.178Z] [BOT] 💾 Added channel posting: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:35:57.178Z] [BOT] 💾 BEFORE MERGE: 2025 jobs in memory (cached)
[2026-02-01T16:35:57.218Z] [BOT] ✅ Loaded V2 database: 2024 jobs
💾 DISK STATE: 2024 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2025
[2026-02-01T16:35:57.228Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:35:57.228Z] [BOT] 💾 AFTER MERGE: 2025 jobs (merged disk + memory)
[2026-02-01T16:35:57.229Z] [BOT] ✅ No jobs to archive (all 2025 jobs within 7-day window)
[2026-02-01T16:35:57.320Z] [BOT] 💾 Saved posted_jobs.json: 2025 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:35:59.025Z] [BOT] ✅ Posted message: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:35:59.025Z] [BOT] 💾 Added channel posting: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:35:59.025Z] [BOT] 💾 BEFORE MERGE: 2025 jobs in memory (cached)
[2026-02-01T16:35:59.060Z] [BOT] ✅ Loaded V2 database: 2025 jobs
💾 DISK STATE: 2025 jobs on disk
[2026-02-01T16:35:59.060Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2025
[2026-02-01T16:35:59.064Z] [BOT] 🔀 Deep merged: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:35:59.064Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2025 jobs (merged disk + memory)
[2026-02-01T16:35:59.065Z] [BOT] ✅ No jobs to archive (all 2025 jobs within 7-day window)
[2026-02-01T16:35:59.170Z] [BOT] 💾 Saved posted_jobs.json: 2025 active jobs
[2026-02-01T16:35:59.170Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:00.671Z] [BOT] 📍 [ROUTING] "Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:36:00.918Z] [BOT] ✅ Posted message: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T16:36:00.919Z] [BOT] ✅ Industry: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-02-01T16:36:00.919Z] [BOT] 💾 Added channel posting: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:36:00.919Z] [BOT] 💾 BEFORE MERGE: 2026 jobs in memory (cached)
[2026-02-01T16:36:00.952Z] [BOT] ✅ Loaded V2 database: 2025 jobs
💾 DISK STATE: 2025 jobs on disk
[2026-02-01T16:36:00.953Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2026
[2026-02-01T16:36:00.956Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:36:00.956Z] [BOT] 💾 AFTER MERGE: 2026 jobs (merged disk + memory)
[2026-02-01T16:36:00.957Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-02-01T16:36:01.056Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:03.282Z] [BOT] ✅ Posted message: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T16:36:03.282Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:36:03.282Z] [BOT] 💾 Added channel posting: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:36:03.282Z] [BOT] 💾 BEFORE MERGE: 2026 jobs in memory (cached)
[2026-02-01T16:36:03.317Z] [BOT] ✅ Loaded V2 database: 2026 jobs
💾 DISK STATE: 2026 jobs on disk
[2026-02-01T16:36:03.317Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2026
[2026-02-01T16:36:03.321Z] [BOT] 🔀 Deep merged: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:36:03.321Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2026 jobs (merged disk + memory)
[2026-02-01T16:36:03.322Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-02-01T16:36:03.424Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:07.926Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T16:36:07.927Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_64923ce3
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:36:07.927Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:36:08.235Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_64923ce3 in #🤖・ai-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_64923ce3
[2026-02-01T16:36:08.235Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_64923ce3 → category channel (1 total channels)
💾 BEFORE MERGE: 2027 jobs in memory (cached)
[2026-02-01T16:36:08.270Z] [BOT] ✅ Loaded V2 database: 2026 jobs
💾 DISK STATE: 2026 jobs on disk
[2026-02-01T16:36:08.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2027
[2026-02-01T16:36:08.274Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:36:08.274Z] [BOT] 💾 AFTER MERGE: 2027 jobs (merged disk + memory)
[2026-02-01T16:36:08.275Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-02-01T16:36:08.376Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:10.102Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_64923ce3 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:36:10.102Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_64923ce3 → location channel (2 total channels)
[2026-02-01T16:36:10.103Z] [BOT] 💾 BEFORE MERGE: 2027 jobs in memory (cached)
[2026-02-01T16:36:10.137Z] [BOT] ✅ Loaded V2 database: 2027 jobs
💾 DISK STATE: 2027 jobs on disk
[2026-02-01T16:36:10.137Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2027
[2026-02-01T16:36:10.141Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_64923ce3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:36:10.141Z] [BOT] 💾 AFTER MERGE: 2027 jobs (merged disk + memory)
[2026-02-01T16:36:10.142Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-02-01T16:36:10.257Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:14.757Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T16:36:14.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "1900034132109f01"
[2026-02-01T16:36:14.759Z] [BOT] ⏭️  Skipping duplicate: JID_0cb4a91e (posted within 7 days)
[2026-02-01T16:36:14.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6564bf36..." not found, but found as SHA256 "b98d4d354c4e32fd"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd747b4f-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ff09ba9e..." not found, but found as SHA256 "85d0444384c459f5"
⏭️  Skipping duplicate: JID_ea106f03 (posted within 7 days)
[2026-02-01T16:36:14.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_67f4001e..." not found, but found as SHA256 "3423de9bd3126fd8"
[2026-02-01T16:36:14.760Z] [BOT] ⏭️  Skipping duplicate: JID_0d10e4d3 (posted within 7 days)
[2026-02-01T16:36:14.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdedce68..." not found, but found as SHA256 "1e5da81b2a92c607"
[2026-02-01T16:36:14.761Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_40f1569e-detail (posted within 7 days)
[2026-02-01T16:36:14.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_78fc15d5..." not found, but found as SHA256 "40887d95f26f7436"
[2026-02-01T16:36:14.761Z] [BOT] ⏭️  Skipping duplicate: JID_4545fd68 (posted within 7 days)
[2026-02-01T16:36:14.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5959fe72..." not found, but found as SHA256 "7a7641f47c7f92e6"
[2026-02-01T16:36:14.761Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_852b8909-detail (posted within 7 days)
[2026-02-01T16:36:14.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c1753a..." not found, but found as SHA256 "73d47c698e80cd9d"
⏭️  Skipping duplicate: JID_6796d1d6-CH_a429130b (posted within 7 days)
[2026-02-01T16:36:14.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5a1aa7c..." not found, but found as SHA256 "d2f8de0a0d2b57ba"
[2026-02-01T16:36:14.762Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_654c67bb (posted within 7 days)
[2026-02-01T16:36:14.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7d9107b1..." not found, but found as SHA256 "72b48173036febeb"
[2026-02-01T16:36:14.762Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_bc68ad0e (posted within 7 days)
[2026-02-01T16:36:14.856Z] [BOT] ✅ Loaded pending queue: 2946 total (889 pending, 50 enriched, 2007 posted)
[2026-02-01T16:36:15.051Z] [BOT] ✅ Saved pending queue: 2946 total (889 pending, 40 enriched, 2017 posted)
[2026-02-01T16:36:15.051Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T16:36:15.141Z] [BOT] 📂 Loaded 12098 existing routing entries
[2026-02-01T16:36:15.274Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T16:36:15.275Z] [BOT] New entries: 10
   Total entries: 12108
   Timestamp: 2026-02-01T16:36:15.225Z
[2026-02-01T16:36:15.275Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T16:36:15.276Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T16:36:15.276Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-02-01T16:36:15.276Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #🌉・JID_739bbc0b: 6 posts
     3. #📍・JID_6daed763: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T16:36:15.276Z] [BOT] 5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T16:36:15.276Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T16:36:15.276Z] [BOT] 💾 BEFORE MERGE: 2027 jobs in memory (cached)
[2026-02-01T16:36:15.319Z] [BOT] ✅ Loaded V2 database: 2027 jobs
💾 DISK STATE: 2027 jobs on disk
[2026-02-01T16:36:15.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2027
[2026-02-01T16:36:15.323Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:36:15.323Z] [BOT] 💾 AFTER MERGE: 2027 jobs (merged disk + memory)
[2026-02-01T16:36:15.324Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-02-01T16:36:15.426Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:36:15.426Z] [BOT] ✅ Database saved successfully
[2026-02-01T16:36:17.460Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2648) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*