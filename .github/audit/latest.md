# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T02:06:03.441Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T02:05:25.802Z] ========================================
[2026-02-01T02:05:25.804Z] Discord Bot Execution Log
[2026-02-01T02:05:25.804Z] Environment: GitHub Actions
[2026-02-01T02:05:25.805Z] Node Version: v20.20.0
[2026-02-01T02:05:25.805Z] ========================================
[2026-02-01T02:05:25.805Z] Environment Variables Check:
[2026-02-01T02:05:25.805Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T02:05:25.805Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.805Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T02:05:25.805Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T02:05:25.805Z] 
Multi-Channel Configuration:
[2026-02-01T02:05:25.805Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.805Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.805Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.805Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T02:05:25.806Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T02:05:25.806Z] 
Data Files Check:
[2026-02-01T02:05:25.807Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61242 bytes)
[2026-02-01T02:05:25.854Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8823941 bytes)
[2026-02-01T02:05:25.854Z] 
========================================
[2026-02-01T02:05:25.854Z] Starting Enhanced Discord Bot...
[2026-02-01T02:05:25.855Z] ========================================
[2026-02-01T02:05:26.427Z] [BOT] ✅ Loaded V2 database: 1567 jobs
[2026-02-01T02:05:27.160Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T02:05:27.160Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T02:05:27.160Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T02:05:27.285Z] [BOT] ✅ Loaded pending queue: 2942 total (1335 pending, 50 enriched, 1557 posted)
[2026-02-01T02:05:27.285Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T02:05:27.286Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T02:05:27.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T02:05:27.287Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T02:05:27.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T02:05:27.287Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T02:05:27.288Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T02:05:27.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T02:05:27.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T02:05:27.289Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T02:05:27.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T02:05:27.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T02:05:27.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T02:05:27.290Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T02:05:27.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T02:05:27.290Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T02:05:27.303Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T02:05:27.303Z] [BOT] 🚫 Skipping blacklisted job: Postdoc – Machine Learning at Brookhaven Lab
[2026-02-01T02:05:27.416Z] [BOT] ✅ Loaded pending queue: 2942 total (1335 pending, 50 enriched, 1557 posted)
[2026-02-01T02:05:27.612Z] [BOT] ✅ Saved pending queue: 2941 total (1335 pending, 49 enriched, 1557 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T02:05:27.613Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T02:05:27.614Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T02:05:27.614Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
[2026-02-01T02:05:27.614Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T02:05:27.618Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T02:05:27.619Z] [BOT] 📍 [ROUTING] "Software Engineer I - Remote Assist" @ ORG_e9de098c Innovation
[2026-02-01T02:05:27.619Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:27.637Z] [BOT ERROR] (node:3683) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T02:05:27.960Z] [BOT] ✅ Posted message: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation in #💻・tech-jobs
  ✅ Industry: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation
[2026-02-01T02:05:27.961Z] [BOT] 💾 Added channel posting: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation → category channel (1 total channels)
[2026-02-01T02:05:27.962Z] [BOT] 💾 BEFORE MERGE: 1568 jobs in memory (cached)
[2026-02-01T02:05:28.001Z] [BOT] ✅ Loaded V2 database: 1567 jobs
💾 DISK STATE: 1567 jobs on disk
[2026-02-01T02:05:28.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1568
[2026-02-01T02:05:28.005Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:28.005Z] [BOT] 💾 AFTER MERGE: 1568 jobs (merged disk + memory)
[2026-02-01T02:05:28.006Z] [BOT] ✅ No jobs to archive (all 1568 jobs within 7-day window)
[2026-02-01T02:05:28.107Z] [BOT] 💾 Saved posted_jobs.json: 1568 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:29.610Z] [BOT] 📍 [ROUTING] "Software Engineer - Rust / Bevy / WebGPU" @ nominal
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:29.865Z] [BOT] ✅ Posted message: Software Engineer - Rust / Bevy / WebGPU @ nominal in #💻・tech-jobs
[2026-02-01T02:05:29.866Z] [BOT] ✅ Industry: Software Engineer - Rust / Bevy / WebGPU @ nominal
[2026-02-01T02:05:29.866Z] [BOT] 💾 Added channel posting: Software Engineer - Rust / Bevy / WebGPU @ nominal → category channel (1 total channels)
[2026-02-01T02:05:29.867Z] [BOT] 💾 BEFORE MERGE: 1569 jobs in memory (cached)
[2026-02-01T02:05:29.898Z] [BOT] ✅ Loaded V2 database: 1568 jobs
[2026-02-01T02:05:29.899Z] [BOT] 💾 DISK STATE: 1568 jobs on disk
[2026-02-01T02:05:29.899Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1569
[2026-02-01T02:05:29.902Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:29.902Z] [BOT] 💾 AFTER MERGE: 1569 jobs (merged disk + memory)
[2026-02-01T02:05:29.903Z] [BOT] ✅ No jobs to archive (all 1569 jobs within 7-day window)
[2026-02-01T02:05:29.997Z] [BOT] 💾 Saved posted_jobs.json: 1569 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:31.499Z] [BOT] 📍 [ROUTING] "Software Engineer – Systems & Real-Time (RTOS / HIL)" @ nominal
[2026-02-01T02:05:31.499Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:31.663Z] [BOT] ✅ Posted message: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal in #💻・tech-jobs
[2026-02-01T02:05:31.663Z] [BOT] ✅ Industry: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal
[2026-02-01T02:05:31.664Z] [BOT] 💾 Added channel posting: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal → category channel (1 total channels)
[2026-02-01T02:05:31.664Z] [BOT] 💾 BEFORE MERGE: 1570 jobs in memory (cached)
[2026-02-01T02:05:31.693Z] [BOT] ✅ Loaded V2 database: 1569 jobs
💾 DISK STATE: 1569 jobs on disk
[2026-02-01T02:05:31.694Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1570
[2026-02-01T02:05:31.697Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:31.697Z] [BOT] 💾 AFTER MERGE: 1570 jobs (merged disk + memory)
[2026-02-01T02:05:31.698Z] [BOT] ✅ No jobs to archive (all 1570 jobs within 7-day window)
[2026-02-01T02:05:31.781Z] [BOT] 💾 Saved posted_jobs.json: 1570 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:33.283Z] [BOT] 📍 [ROUTING] "Product Designer - Early Career" @ nominal
[2026-02-01T02:05:33.283Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:33.613Z] [BOT] ✅ Posted message: Product Designer - Early Career @ nominal in #💻・tech-jobs
[2026-02-01T02:05:33.613Z] [BOT] ✅ Industry: Product Designer - Early Career @ nominal
[2026-02-01T02:05:33.614Z] [BOT] 💾 Added channel posting: Product Designer - Early Career @ nominal → category channel (1 total channels)
💾 BEFORE MERGE: 1571 jobs in memory (cached)
[2026-02-01T02:05:33.646Z] [BOT] ✅ Loaded V2 database: 1570 jobs
💾 DISK STATE: 1570 jobs on disk
[2026-02-01T02:05:33.646Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1571
[2026-02-01T02:05:33.649Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:33.649Z] [BOT] 💾 AFTER MERGE: 1571 jobs (merged disk + memory)
[2026-02-01T02:05:33.650Z] [BOT] ✅ No jobs to archive (all 1571 jobs within 7-day window)
[2026-02-01T02:05:33.739Z] [BOT] 💾 Saved posted_jobs.json: 1571 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:35.665Z] [BOT] ✅ Posted message: Product Designer - Early Career @ nominal in #🗽・JID_98d4f0de
[2026-02-01T02:05:35.665Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T02:05:35.666Z] [BOT] 💾 Added channel posting: Product Designer - Early Career @ nominal → location channel (2 total channels)
[2026-02-01T02:05:35.666Z] [BOT] 💾 BEFORE MERGE: 1571 jobs in memory (cached)
[2026-02-01T02:05:35.698Z] [BOT] ✅ Loaded V2 database: 1571 jobs
💾 DISK STATE: 1571 jobs on disk
[2026-02-01T02:05:35.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1571
[2026-02-01T02:05:35.701Z] [BOT] 🔀 Deep merged: Product Designer - Early Career @ nominal (disk: 1 channels → merged: 2 channels)
[2026-02-01T02:05:35.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1571 jobs (merged disk + memory)
[2026-02-01T02:05:35.702Z] [BOT] ✅ No jobs to archive (all 1571 jobs within 7-day window)
[2026-02-01T02:05:35.785Z] [BOT] 💾 Saved posted_jobs.json: 1571 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:37.288Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_49005fd1
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T02:05:37.288Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:37.549Z] [BOT] ✅ Posted message: Product Engineer @ ORG_49005fd1 in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_49005fd1
[2026-02-01T02:05:37.550Z] [BOT] 💾 Added channel posting: Product Engineer @ ORG_49005fd1 → category channel (1 total channels)
[2026-02-01T02:05:37.550Z] [BOT] 💾 BEFORE MERGE: 1572 jobs in memory (cached)
[2026-02-01T02:05:37.579Z] [BOT] ✅ Loaded V2 database: 1571 jobs
💾 DISK STATE: 1571 jobs on disk
[2026-02-01T02:05:37.580Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1572
[2026-02-01T02:05:37.583Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:37.583Z] [BOT] 💾 AFTER MERGE: 1572 jobs (merged disk + memory)
[2026-02-01T02:05:37.584Z] [BOT] ✅ No jobs to archive (all 1572 jobs within 7-day window)
[2026-02-01T02:05:37.670Z] [BOT] 💾 Saved posted_jobs.json: 1572 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:39.171Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Clinical Systems (Lab Ops)" @ ORG_ba2089ca
[2026-02-01T02:05:39.171Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:39.370Z] [BOT] ✅ Posted message: Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca in #💻・tech-jobs
[2026-02-01T02:05:39.371Z] [BOT] ✅ Industry: Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca
[2026-02-01T02:05:39.371Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca → category channel (1 total channels)
[2026-02-01T02:05:39.371Z] [BOT] 💾 BEFORE MERGE: 1573 jobs in memory (cached)
[2026-02-01T02:05:39.403Z] [BOT] ✅ Loaded V2 database: 1572 jobs
💾 DISK STATE: 1572 jobs on disk
[2026-02-01T02:05:39.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1573
[2026-02-01T02:05:39.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:39.407Z] [BOT] 💾 AFTER MERGE: 1573 jobs (merged disk + memory)
[2026-02-01T02:05:39.408Z] [BOT] ✅ No jobs to archive (all 1573 jobs within 7-day window)
[2026-02-01T02:05:39.513Z] [BOT] 💾 Saved posted_jobs.json: 1573 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:41.013Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_a5257743 Packard (HP)
   Category: TECH (matched: "software")
[2026-02-01T02:05:41.013Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:41.194Z] [BOT] ✅ Posted message: Software Development @ ORG_a5257743 Packard (HP) in #💻・tech-jobs
  ✅ Industry: Software Development @ ORG_a5257743 Packard (HP)
[2026-02-01T02:05:41.195Z] [BOT] 💾 Added channel posting: Software Development @ ORG_a5257743 Packard (HP) → category channel (1 total channels)
[2026-02-01T02:05:41.195Z] [BOT] 💾 BEFORE MERGE: 1574 jobs in memory (cached)
[2026-02-01T02:05:41.226Z] [BOT] ✅ Loaded V2 database: 1573 jobs
💾 DISK STATE: 1573 jobs on disk
[2026-02-01T02:05:41.226Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1574
[2026-02-01T02:05:41.230Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:41.230Z] [BOT] 💾 AFTER MERGE: 1574 jobs (merged disk + memory)
[2026-02-01T02:05:41.231Z] [BOT] ✅ No jobs to archive (all 1574 jobs within 7-day window)
[2026-02-01T02:05:41.321Z] [BOT] 💾 Saved posted_jobs.json: 1574 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:42.822Z] [BOT] 📍 [ROUTING] "Cloud Support Engineer I (Support Response) - Weekend Shift" @ ORG_862a3f0f
[2026-02-01T02:05:42.822Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T02:05:42.985Z] [BOT] ✅ Posted message: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f in #💻・tech-jobs
[2026-02-01T02:05:42.985Z] [BOT] ✅ Industry: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f
[2026-02-01T02:05:42.985Z] [BOT] 💾 Added channel posting: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f → category channel (1 total channels)
[2026-02-01T02:05:42.985Z] [BOT] 💾 BEFORE MERGE: 1575 jobs in memory (cached)
[2026-02-01T02:05:43.023Z] [BOT] ✅ Loaded V2 database: 1574 jobs
💾 DISK STATE: 1574 jobs on disk
[2026-02-01T02:05:43.023Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1575
[2026-02-01T02:05:43.027Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:43.027Z] [BOT] 💾 AFTER MERGE: 1575 jobs (merged disk + memory)
[2026-02-01T02:05:43.028Z] [BOT] ✅ No jobs to archive (all 1575 jobs within 7-day window)
[2026-02-01T02:05:43.113Z] [BOT] 💾 Saved posted_jobs.json: 1575 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:45.140Z] [BOT] ✅ Posted message: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f in #🏠・JID_ead674af
[2026-02-01T02:05:45.140Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T02:05:45.140Z] [BOT] 💾 Added channel posting: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f → location channel (2 total channels)
[2026-02-01T02:05:45.140Z] [BOT] 💾 BEFORE MERGE: 1575 jobs in memory (cached)
[2026-02-01T02:05:45.174Z] [BOT] ✅ Loaded V2 database: 1575 jobs
💾 DISK STATE: 1575 jobs on disk
[2026-02-01T02:05:45.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1575
[2026-02-01T02:05:45.177Z] [BOT] 🔀 Deep merged: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f (disk: 1 channels → merged: 2 channels)
[2026-02-01T02:05:45.177Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1575 jobs (merged disk + memory)
[2026-02-01T02:05:45.178Z] [BOT] ✅ No jobs to archive (all 1575 jobs within 7-day window)
[2026-02-01T02:05:45.267Z] [BOT] 💾 Saved posted_jobs.json: 1575 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:49.771Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T02:05:49.772Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T02:05:49.772Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T02:05:50.026Z] [BOT] ✅ Posted message: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T02:05:50.027Z] [BOT] 💾 Added channel posting: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T02:05:50.027Z] [BOT] 💾 BEFORE MERGE: 1576 jobs in memory (cached)
[2026-02-01T02:05:50.059Z] [BOT] ✅ Loaded V2 database: 1575 jobs
💾 DISK STATE: 1575 jobs on disk
[2026-02-01T02:05:50.059Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1576
[2026-02-01T02:05:50.062Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:50.062Z] [BOT] 💾 AFTER MERGE: 1576 jobs (merged disk + memory)
[2026-02-01T02:05:50.063Z] [BOT] ✅ No jobs to archive (all 1576 jobs within 7-day window)
[2026-02-01T02:05:50.153Z] [BOT] 💾 Saved posted_jobs.json: 1576 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:54.655Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T02:05:54.656Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career - Cloud Infrastructure" @ ORG_f9896d55 AI
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T02:05:54.656Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T02:05:54.917Z] [BOT] ✅ Posted message: Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI in #🤖・ai-jobs
  ✅ Industry: Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI
[2026-02-01T02:05:54.918Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI → category channel (1 total channels)
[2026-02-01T02:05:54.918Z] [BOT] 💾 BEFORE MERGE: 1577 jobs in memory (cached)
[2026-02-01T02:05:54.951Z] [BOT] ✅ Loaded V2 database: 1576 jobs
💾 DISK STATE: 1576 jobs on disk
[2026-02-01T02:05:54.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1577
[2026-02-01T02:05:54.954Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:05:54.954Z] [BOT] 💾 AFTER MERGE: 1577 jobs (merged disk + memory)
[2026-02-01T02:05:54.955Z] [BOT] ✅ No jobs to archive (all 1577 jobs within 7-day window)
[2026-02-01T02:05:55.039Z] [BOT] 💾 Saved posted_jobs.json: 1577 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T02:05:59.542Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T02:05:59.543Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1afdd813..." not found, but found as SHA256 "c91652187c70cdd9"
⏭️  Skipping duplicate: JID_1afdd813 (posted within 7 days)
[2026-02-01T02:05:59.543Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1a3411a4..." not found, but found as SHA256 "40378fef85eabc89"
[2026-02-01T02:05:59.544Z] [BOT] ⏭️  Skipping duplicate: JID_3796b931 (posted within 7 days)
[2026-02-01T02:05:59.544Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c47cf550..." not found, but found as SHA256 "e686255ec022be38"
[2026-02-01T02:05:59.544Z] [BOT] ⏭️  Skipping duplicate: JID_4bc2d6bd (posted within 7 days)
[2026-02-01T02:05:59.545Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1c4387f2..." not found, but found as SHA256 "afa2ef3149d0027f"
⏭️  Skipping duplicate: JID_6796d1d6-CH_b142e3fa (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_776b5bfe..." not found, but found as SHA256 "9449a3598db0d112"
⏭️  Skipping duplicate: JID_0346ba48 (posted within 7 days)
[2026-02-01T02:05:59.545Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fc3bb7ce..." not found, but found as SHA256 "8df8ff215d359266"
⏭️  Skipping duplicate: JID_814fa0f7 (posted within 7 days)
[2026-02-01T02:05:59.545Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_21a869ee..." not found, but found as SHA256 "40beaf6d537fe2fb"
⏭️  Skipping duplicate: JID_6fad8774 (posted within 7 days)
[2026-02-01T02:05:59.545Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d8c94354..." not found, but found as SHA256 "6ee3e17a13b75535"
[2026-02-01T02:05:59.545Z] [BOT] ⏭️  Skipping duplicate: JID_e96c3a0f-_jr104012-1 (posted within 7 days)
[2026-02-01T02:05:59.546Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_94c02a54..." not found, but found as SHA256 "f87e8e28bf65c445"
⏭️  Skipping duplicate: JID_f81d1599-graduate_3152963 (posted within 7 days)
[2026-02-01T02:05:59.546Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5adf782d..." not found, but found as SHA256 "514c96736cf865c8"
[2026-02-01T02:05:59.546Z] [BOT] ⏭️  Skipping duplicate: JID_d8b0f893 (posted within 7 days)
[2026-02-01T02:05:59.648Z] [BOT] ✅ Loaded pending queue: 2941 total (1335 pending, 49 enriched, 1557 posted)
[2026-02-01T02:05:59.849Z] [BOT] ✅ Saved pending queue: 2941 total (1335 pending, 39 enriched, 1567 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T02:05:59.850Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T02:05:59.938Z] [BOT] 📂 Loaded 11648 existing routing entries
[2026-02-01T02:06:00.071Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11658
[2026-02-01T02:06:00.071Z] [BOT] Timestamp: 2026-02-01T02:06:00.024Z
[2026-02-01T02:06:00.072Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T02:06:00.072Z] [BOT] Total attempts: 21
   Successful: 12
   Failed: 0
   Skipped: 9
[2026-02-01T02:06:00.072Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T02:06:00.072Z] [BOT] Total posts: 12
   Channels used: 5
   Top channels:
[2026-02-01T02:06:00.072Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 1 posts
     3. #🏠・JID_ead674af: 1 posts
[2026-02-01T02:06:00.073Z] [BOT] 4. #📊・JID_fb739488: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T02:06:00.073Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1577 jobs in memory (cached)
[2026-02-01T02:06:00.104Z] [BOT] ✅ Loaded V2 database: 1577 jobs
💾 DISK STATE: 1577 jobs on disk
[2026-02-01T02:06:00.107Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1577
[2026-02-01T02:06:00.110Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T02:06:00.110Z] [BOT] 💾 AFTER MERGE: 1577 jobs (merged disk + memory)
[2026-02-01T02:06:00.112Z] [BOT] ✅ No jobs to archive (all 1577 jobs within 7-day window)
[2026-02-01T02:06:00.217Z] [BOT] 💾 Saved posted_jobs.json: 1577 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T02:06:02.254Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3683) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*