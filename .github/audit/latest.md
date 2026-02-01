# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T06:03:48.017Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T06:02:56.971Z] ========================================
[2026-02-01T06:02:56.973Z] Discord Bot Execution Log
[2026-02-01T06:02:56.973Z] Environment: GitHub Actions
[2026-02-01T06:02:56.973Z] Node Version: v20.20.0
[2026-02-01T06:02:56.973Z] ========================================
[2026-02-01T06:02:56.973Z] Environment Variables Check:
[2026-02-01T06:02:56.973Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T06:02:56.974Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T06:02:56.974Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T06:02:56.974Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T06:02:56.974Z] 
Multi-Channel Configuration:
[2026-02-01T06:02:56.974Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T06:02:56.974Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.974Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.974Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T06:02:56.974Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.974Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.974Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.974Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.975Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:02:56.975Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T06:02:56.975Z] 
Data Files Check:
[2026-02-01T06:02:56.975Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58324 bytes)
[2026-02-01T06:02:57.023Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9030325 bytes)
[2026-02-01T06:02:57.023Z] 
========================================
[2026-02-01T06:02:57.023Z] Starting Enhanced Discord Bot...
[2026-02-01T06:02:57.023Z] ========================================
[2026-02-01T06:02:57.614Z] [BOT] ✅ Loaded V2 database: 1627 jobs
[2026-02-01T06:02:57.984Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T06:02:57.985Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T06:02:57.985Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T06:02:58.110Z] [BOT] ✅ Loaded pending queue: 2944 total (1277 pending, 50 enriched, 1617 posted)
[2026-02-01T06:02:58.110Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T06:02:58.111Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:02:58.112Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T06:02:58.112Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T06:02:58.112Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:02:58.112Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T06:02:58.113Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T06:02:58.113Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T06:02:58.113Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T06:02:58.113Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T06:02:58.114Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T06:02:58.114Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T06:02:58.114Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-02-01T06:02:58.114Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T06:02:58.115Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T06:02:58.115Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T06:02:58.129Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T06:02:58.129Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Specialist 1 at Princeton University
[2026-02-01T06:02:58.238Z] [BOT] ✅ Loaded pending queue: 2944 total (1277 pending, 50 enriched, 1617 posted)
[2026-02-01T06:02:58.451Z] [BOT] ✅ Saved pending queue: 2943 total (1277 pending, 49 enriched, 1617 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T06:02:58.451Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T06:02:58.452Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T06:02:58.452Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
[2026-02-01T06:02:58.452Z] [BOT] - Enterprise Account Executive @ nominal: new york, austin
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T06:02:58.454Z] [BOT] 📌 Posting 4 jobs to #📊・JID_fb739488
[2026-02-01T06:02:58.456Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_89135357 Airlines
[2026-02-01T06:02:58.456Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T06:02:58.456Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:02:58.473Z] [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T06:02:58.753Z] [BOT] ✅ Posted message: Associate Data Engineer @ ORG_89135357 Airlines in #📊・JID_fb739488
  ✅ Industry: Associate Data Engineer @ ORG_89135357 Airlines
[2026-02-01T06:02:58.754Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ ORG_89135357 Airlines → category channel (1 total channels)
[2026-02-01T06:02:58.754Z] [BOT] 💾 BEFORE MERGE: 1628 jobs in memory (cached)
[2026-02-01T06:02:58.791Z] [BOT] ✅ Loaded V2 database: 1627 jobs
💾 DISK STATE: 1627 jobs on disk
[2026-02-01T06:02:58.792Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1628
[2026-02-01T06:02:58.796Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:02:58.796Z] [BOT] 💾 AFTER MERGE: 1628 jobs (merged disk + memory)
[2026-02-01T06:02:58.797Z] [BOT] ✅ No jobs to archive (all 1628 jobs within 7-day window)
[2026-02-01T06:02:58.899Z] [BOT] 💾 Saved posted_jobs.json: 1628 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:00.728Z] [BOT] ✅ Posted message: Associate Data Engineer @ ORG_89135357 Airlines in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:00.728Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ ORG_89135357 Airlines → location channel (2 total channels)
[2026-02-01T06:03:00.729Z] [BOT] 💾 BEFORE MERGE: 1628 jobs in memory (cached)
[2026-02-01T06:03:00.761Z] [BOT] ✅ Loaded V2 database: 1628 jobs
[2026-02-01T06:03:00.761Z] [BOT] 💾 DISK STATE: 1628 jobs on disk
[2026-02-01T06:03:00.761Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1628
[2026-02-01T06:03:00.765Z] [BOT] 🔀 Deep merged: Associate Data Engineer @ ORG_89135357 Airlines (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:00.765Z] [BOT] 💾 AFTER MERGE: 1628 jobs (merged disk + memory)
[2026-02-01T06:03:00.766Z] [BOT] ✅ No jobs to archive (all 1628 jobs within 7-day window)
[2026-02-01T06:03:00.855Z] [BOT] 💾 Saved posted_jobs.json: 1628 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:02.357Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_89135357 Airlines
[2026-02-01T06:03:02.358Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:03:02.574Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_89135357 Airlines in #📊・JID_fb739488
[2026-02-01T06:03:02.574Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_89135357 Airlines
[2026-02-01T06:03:02.575Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_89135357 Airlines → category channel (1 total channels)
[2026-02-01T06:03:02.575Z] [BOT] 💾 BEFORE MERGE: 1629 jobs in memory (cached)
[2026-02-01T06:03:02.606Z] [BOT] ✅ Loaded V2 database: 1628 jobs
💾 DISK STATE: 1628 jobs on disk
[2026-02-01T06:03:02.606Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1629
[2026-02-01T06:03:02.610Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:02.610Z] [BOT] 💾 AFTER MERGE: 1629 jobs (merged disk + memory)
[2026-02-01T06:03:02.611Z] [BOT] ✅ No jobs to archive (all 1629 jobs within 7-day window)
[2026-02-01T06:03:02.701Z] [BOT] 💾 Saved posted_jobs.json: 1629 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:04.475Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_89135357 Airlines in #📍・JID_6daed763
[2026-02-01T06:03:04.475Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:04.475Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_89135357 Airlines → location channel (2 total channels)
[2026-02-01T06:03:04.475Z] [BOT] 💾 BEFORE MERGE: 1629 jobs in memory (cached)
[2026-02-01T06:03:04.507Z] [BOT] ✅ Loaded V2 database: 1629 jobs
💾 DISK STATE: 1629 jobs on disk
[2026-02-01T06:03:04.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1629
[2026-02-01T06:03:04.511Z] [BOT] 🔀 Deep merged: Associate Data Scientist @ ORG_89135357 Airlines (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:04.511Z] [BOT] 💾 AFTER MERGE: 1629 jobs (merged disk + memory)
[2026-02-01T06:03:04.512Z] [BOT] ✅ No jobs to archive (all 1629 jobs within 7-day window)
[2026-02-01T06:03:04.601Z] [BOT] 💾 Saved posted_jobs.json: 1629 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:06.102Z] [BOT] 📍 [ROUTING] "Software Engineer, Fullstack" @ ORG_73bcfe98
[2026-02-01T06:03:06.102Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:03:06.264Z] [BOT] ✅ Posted message: Software Engineer, Fullstack @ ORG_73bcfe98 in #📊・JID_fb739488
[2026-02-01T06:03:06.264Z] [BOT] ✅ Industry: Software Engineer, Fullstack @ ORG_73bcfe98
[2026-02-01T06:03:06.264Z] [BOT] 💾 Added channel posting: Software Engineer, Fullstack @ ORG_73bcfe98 → category channel (1 total channels)
[2026-02-01T06:03:06.264Z] [BOT] 💾 BEFORE MERGE: 1630 jobs in memory (cached)
[2026-02-01T06:03:06.296Z] [BOT] ✅ Loaded V2 database: 1629 jobs
💾 DISK STATE: 1629 jobs on disk
[2026-02-01T06:03:06.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1630
[2026-02-01T06:03:06.300Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:06.300Z] [BOT] 💾 AFTER MERGE: 1630 jobs (merged disk + memory)
[2026-02-01T06:03:06.301Z] [BOT] ✅ No jobs to archive (all 1630 jobs within 7-day window)
[2026-02-01T06:03:06.407Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:08.062Z] [BOT] ✅ Posted message: Software Engineer, Fullstack @ ORG_73bcfe98 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T06:03:08.062Z] [BOT] 💾 Added channel posting: Software Engineer, Fullstack @ ORG_73bcfe98 → location channel (2 total channels)
[2026-02-01T06:03:08.062Z] [BOT] 💾 BEFORE MERGE: 1630 jobs in memory (cached)
[2026-02-01T06:03:08.093Z] [BOT] ✅ Loaded V2 database: 1630 jobs
💾 DISK STATE: 1630 jobs on disk
[2026-02-01T06:03:08.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1630
[2026-02-01T06:03:08.097Z] [BOT] 🔀 Deep merged: Software Engineer, Fullstack @ ORG_73bcfe98 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:08.097Z] [BOT] 💾 AFTER MERGE: 1630 jobs (merged disk + memory)
[2026-02-01T06:03:08.098Z] [BOT] ✅ No jobs to archive (all 1630 jobs within 7-day window)
[2026-02-01T06:03:08.183Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
[2026-02-01T06:03:08.183Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:09.685Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_ce460410
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T06:03:09.686Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:03:09.905Z] [BOT] ✅ Posted message: Software Engineer @ ORG_ce460410 in #📊・JID_fb739488
[2026-02-01T06:03:09.905Z] [BOT] ✅ Industry: Software Engineer @ ORG_ce460410
[2026-02-01T06:03:09.906Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_ce460410 → category channel (1 total channels)
[2026-02-01T06:03:09.906Z] [BOT] 💾 BEFORE MERGE: 1631 jobs in memory (cached)
[2026-02-01T06:03:09.939Z] [BOT] ✅ Loaded V2 database: 1630 jobs
💾 DISK STATE: 1630 jobs on disk
[2026-02-01T06:03:09.939Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1631
[2026-02-01T06:03:09.943Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:09.943Z] [BOT] 💾 AFTER MERGE: 1631 jobs (merged disk + memory)
[2026-02-01T06:03:09.943Z] [BOT] ✅ No jobs to archive (all 1631 jobs within 7-day window)
[2026-02-01T06:03:10.033Z] [BOT] 💾 Saved posted_jobs.json: 1631 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:11.733Z] [BOT] ✅ Posted message: Software Engineer @ ORG_ce460410 in #🌉・JID_739bbc0b
[2026-02-01T06:03:11.733Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T06:03:11.733Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_ce460410 → location channel (2 total channels)
[2026-02-01T06:03:11.733Z] [BOT] 💾 BEFORE MERGE: 1631 jobs in memory (cached)
[2026-02-01T06:03:11.764Z] [BOT] ✅ Loaded V2 database: 1631 jobs
💾 DISK STATE: 1631 jobs on disk
[2026-02-01T06:03:11.765Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1631
[2026-02-01T06:03:11.768Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_ce460410 (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:03:11.768Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1631 jobs (merged disk + memory)
[2026-02-01T06:03:11.769Z] [BOT] ✅ No jobs to archive (all 1631 jobs within 7-day window)
[2026-02-01T06:03:11.867Z] [BOT] 💾 Saved posted_jobs.json: 1631 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:16.370Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-02-01T06:03:16.371Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_89135357 Airlines
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:03:16.606Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_89135357 Airlines in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_89135357 Airlines
[2026-02-01T06:03:16.607Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_89135357 Airlines → category channel (1 total channels)
[2026-02-01T06:03:16.607Z] [BOT] 💾 BEFORE MERGE: 1632 jobs in memory (cached)
[2026-02-01T06:03:16.640Z] [BOT] ✅ Loaded V2 database: 1631 jobs
💾 DISK STATE: 1631 jobs on disk
[2026-02-01T06:03:16.640Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1632
[2026-02-01T06:03:16.643Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:16.643Z] [BOT] 💾 AFTER MERGE: 1632 jobs (merged disk + memory)
[2026-02-01T06:03:16.644Z] [BOT] ✅ No jobs to archive (all 1632 jobs within 7-day window)
[2026-02-01T06:03:16.736Z] [BOT] 💾 Saved posted_jobs.json: 1632 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:18.455Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_89135357 Airlines in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:18.456Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_89135357 Airlines → location channel (2 total channels)
[2026-02-01T06:03:18.456Z] [BOT] 💾 BEFORE MERGE: 1632 jobs in memory (cached)
[2026-02-01T06:03:18.488Z] [BOT] ✅ Loaded V2 database: 1632 jobs
💾 DISK STATE: 1632 jobs on disk
[2026-02-01T06:03:18.488Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1632
[2026-02-01T06:03:18.492Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_89135357 Airlines (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:03:18.492Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1632 jobs (merged disk + memory)
[2026-02-01T06:03:18.493Z] [BOT] ✅ No jobs to archive (all 1632 jobs within 7-day window)
[2026-02-01T06:03:18.591Z] [BOT] 💾 Saved posted_jobs.json: 1632 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:20.093Z] [BOT] 📍 [ROUTING] "Software Operations Engineer I" @ ORG_fa31032b
[2026-02-01T06:03:20.093Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:03:20.241Z] [BOT] ✅ Posted message: Software Operations Engineer I @ ORG_fa31032b in #💻・tech-jobs
[2026-02-01T06:03:20.241Z] [BOT] ✅ Industry: Software Operations Engineer I @ ORG_fa31032b
[2026-02-01T06:03:20.242Z] [BOT] 💾 Added channel posting: Software Operations Engineer I @ ORG_fa31032b → category channel (1 total channels)
[2026-02-01T06:03:20.242Z] [BOT] 💾 BEFORE MERGE: 1633 jobs in memory (cached)
[2026-02-01T06:03:20.278Z] [BOT] ✅ Loaded V2 database: 1632 jobs
💾 DISK STATE: 1632 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1633
[2026-02-01T06:03:20.283Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:20.284Z] [BOT] 💾 AFTER MERGE: 1633 jobs (merged disk + memory)
[2026-02-01T06:03:20.285Z] [BOT] ✅ No jobs to archive (all 1633 jobs within 7-day window)
[2026-02-01T06:03:20.385Z] [BOT] 💾 Saved posted_jobs.json: 1633 active jobs
[2026-02-01T06:03:20.385Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:22.191Z] [BOT] ✅ Posted message: Software Operations Engineer I @ ORG_fa31032b in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:22.191Z] [BOT] 💾 Added channel posting: Software Operations Engineer I @ ORG_fa31032b → location channel (2 total channels)
[2026-02-01T06:03:22.192Z] [BOT] 💾 BEFORE MERGE: 1633 jobs in memory (cached)
[2026-02-01T06:03:22.222Z] [BOT] ✅ Loaded V2 database: 1633 jobs
💾 DISK STATE: 1633 jobs on disk
[2026-02-01T06:03:22.223Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1633
[2026-02-01T06:03:22.226Z] [BOT] 🔀 Deep merged: Software Operations Engineer I @ ORG_fa31032b (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:22.226Z] [BOT] 💾 AFTER MERGE: 1633 jobs (merged disk + memory)
[2026-02-01T06:03:22.227Z] [BOT] ✅ No jobs to archive (all 1633 jobs within 7-day window)
[2026-02-01T06:03:22.315Z] [BOT] 💾 Saved posted_jobs.json: 1633 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:23.816Z] [BOT] 📍 [ROUTING] "Engineer I - AI Business Engineer" @ ORG_d7d2f0ff Alliance Bancorporation
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:03:24.067Z] [BOT] ✅ Posted message: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation in #💻・tech-jobs
  ✅ Industry: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation
[2026-02-01T06:03:24.068Z] [BOT] 💾 Added channel posting: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation → category channel (1 total channels)
[2026-02-01T06:03:24.068Z] [BOT] 💾 BEFORE MERGE: 1634 jobs in memory (cached)
[2026-02-01T06:03:24.099Z] [BOT] ✅ Loaded V2 database: 1633 jobs
💾 DISK STATE: 1633 jobs on disk
[2026-02-01T06:03:24.099Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1634
[2026-02-01T06:03:24.102Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:24.102Z] [BOT] 💾 AFTER MERGE: 1634 jobs (merged disk + memory)
[2026-02-01T06:03:24.103Z] [BOT] ✅ No jobs to archive (all 1634 jobs within 7-day window)
[2026-02-01T06:03:24.195Z] [BOT] 💾 Saved posted_jobs.json: 1634 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:25.898Z] [BOT] ✅ Posted message: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:25.898Z] [BOT] 💾 Added channel posting: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation → location channel (2 total channels)
[2026-02-01T06:03:25.898Z] [BOT] 💾 BEFORE MERGE: 1634 jobs in memory (cached)
[2026-02-01T06:03:25.929Z] [BOT] ✅ Loaded V2 database: 1634 jobs
💾 DISK STATE: 1634 jobs on disk
[2026-02-01T06:03:25.929Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1634
[2026-02-01T06:03:25.932Z] [BOT] 🔀 Deep merged: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:25.932Z] [BOT] 💾 AFTER MERGE: 1634 jobs (merged disk + memory)
[2026-02-01T06:03:25.933Z] [BOT] ✅ No jobs to archive (all 1634 jobs within 7-day window)
[2026-02-01T06:03:26.025Z] [BOT] 💾 Saved posted_jobs.json: 1634 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:27.527Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Go Lang" @ mthree
   Category: TECH (matched: "software")
[2026-02-01T06:03:27.527Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:03:27.696Z] [BOT] ✅ Posted message: Junior Software Developer - Go Lang @ mthree in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Go Lang @ mthree
[2026-02-01T06:03:27.697Z] [BOT] 💾 Added channel posting: Junior Software Developer - Go Lang @ mthree → category channel (1 total channels)
💾 BEFORE MERGE: 1635 jobs in memory (cached)
[2026-02-01T06:03:27.733Z] [BOT] ✅ Loaded V2 database: 1634 jobs
💾 DISK STATE: 1634 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1635
[2026-02-01T06:03:27.738Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:27.739Z] [BOT] 💾 AFTER MERGE: 1635 jobs (merged disk + memory)
[2026-02-01T06:03:27.741Z] [BOT] ✅ No jobs to archive (all 1635 jobs within 7-day window)
[2026-02-01T06:03:27.841Z] [BOT] 💾 Saved posted_jobs.json: 1635 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:32.340Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T06:03:32.341Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_096a7f3dine Trading
[2026-02-01T06:03:32.341Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T06:03:32.542Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_096a7f3dine Trading in #🤖・ai-jobs
[2026-02-01T06:03:32.542Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_096a7f3dine Trading
[2026-02-01T06:03:32.543Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_096a7f3dine Trading → category channel (1 total channels)
[2026-02-01T06:03:32.543Z] [BOT] 💾 BEFORE MERGE: 1636 jobs in memory (cached)
[2026-02-01T06:03:32.574Z] [BOT] ✅ Loaded V2 database: 1635 jobs
💾 DISK STATE: 1635 jobs on disk
[2026-02-01T06:03:32.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1636
[2026-02-01T06:03:32.577Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1636 jobs (merged disk + memory)
[2026-02-01T06:03:32.578Z] [BOT] ✅ No jobs to archive (all 1636 jobs within 7-day window)
[2026-02-01T06:03:32.682Z] [BOT] 💾 Saved posted_jobs.json: 1636 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:35.834Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_096a7f3dine Trading in #📍・JID_6daed763
[2026-02-01T06:03:35.834Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:03:35.834Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_096a7f3dine Trading → location channel (2 total channels)
💾 BEFORE MERGE: 1636 jobs in memory (cached)
[2026-02-01T06:03:35.865Z] [BOT] ✅ Loaded V2 database: 1636 jobs
💾 DISK STATE: 1636 jobs on disk
[2026-02-01T06:03:35.866Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1636
[2026-02-01T06:03:35.868Z] [BOT] 🔀 Deep merged: C++ Software Engineer @ ORG_096a7f3dine Trading (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:35.868Z] [BOT] 💾 AFTER MERGE: 1636 jobs (merged disk + memory)
[2026-02-01T06:03:35.870Z] [BOT] ✅ No jobs to archive (all 1636 jobs within 7-day window)
[2026-02-01T06:03:35.973Z] [BOT] 💾 Saved posted_jobs.json: 1636 active jobs
[2026-02-01T06:03:35.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:37.475Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_8b7d1a31
[2026-02-01T06:03:37.476Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T06:03:37.873Z] [BOT] ✅ Posted message: Software Engineer - Backend @ ORG_8b7d1a31 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Backend @ ORG_8b7d1a31
[2026-02-01T06:03:37.873Z] [BOT] 💾 Added channel posting: Software Engineer - Backend @ ORG_8b7d1a31 → category channel (1 total channels)
[2026-02-01T06:03:37.873Z] [BOT] 💾 BEFORE MERGE: 1637 jobs in memory (cached)
[2026-02-01T06:03:37.906Z] [BOT] ✅ Loaded V2 database: 1636 jobs
💾 DISK STATE: 1636 jobs on disk
[2026-02-01T06:03:37.906Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1637
[2026-02-01T06:03:37.909Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:03:37.909Z] [BOT] 💾 AFTER MERGE: 1637 jobs (merged disk + memory)
[2026-02-01T06:03:37.910Z] [BOT] ✅ No jobs to archive (all 1637 jobs within 7-day window)
[2026-02-01T06:03:38.015Z] [BOT] 💾 Saved posted_jobs.json: 1637 active jobs
[2026-02-01T06:03:38.015Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:39.744Z] [BOT] ✅ Posted message: Software Engineer - Backend @ ORG_8b7d1a31 in #🌉・JID_739bbc0b
[2026-02-01T06:03:39.744Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T06:03:39.745Z] [BOT] 💾 Added channel posting: Software Engineer - Backend @ ORG_8b7d1a31 → location channel (2 total channels)
[2026-02-01T06:03:39.745Z] [BOT] 💾 BEFORE MERGE: 1637 jobs in memory (cached)
[2026-02-01T06:03:39.777Z] [BOT] ✅ Loaded V2 database: 1637 jobs
💾 DISK STATE: 1637 jobs on disk
[2026-02-01T06:03:39.777Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1637
[2026-02-01T06:03:39.780Z] [BOT] 🔀 Deep merged: Software Engineer - Backend @ ORG_8b7d1a31 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:03:39.780Z] [BOT] 💾 AFTER MERGE: 1637 jobs (merged disk + memory)
[2026-02-01T06:03:39.781Z] [BOT] ✅ No jobs to archive (all 1637 jobs within 7-day window)
[2026-02-01T06:03:39.874Z] [BOT] 💾 Saved posted_jobs.json: 1637 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:44.376Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T06:03:44.377Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a305ddbc..." not found, but found as SHA256 "3c03a4a44a1e44c7"
[2026-02-01T06:03:44.378Z] [BOT] ⏭️  Skipping duplicate: JID_9a58246b-hire_r-2025-59816 (posted within 7 days)
[2026-02-01T06:03:44.378Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a305ddbc..." not found, but found as SHA256 "a7d75d6e7f1771ae"
⏭️  Skipping duplicate: JID_f3329f2c-hire_r-2025-59810 (posted within 7 days)
[2026-02-01T06:03:44.378Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a305ddbc..." not found, but found as SHA256 "d47fe2240a18f5db"
⏭️  Skipping duplicate: JID_667df36a-hire_r-2025-59817 (posted within 7 days)
[2026-02-01T06:03:44.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_57cb8cc3..." not found, but found as SHA256 "c96ce7d505434781"
[2026-02-01T06:03:44.379Z] [BOT] ⏭️  Skipping duplicate: JID_74ba5cff-i_r46476 (posted within 7 days)
[2026-02-01T06:03:44.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_72599e6b..." not found, but found as SHA256 "dd45340c23e2154f"
[2026-02-01T06:03:44.379Z] [BOT] ⏭️  Skipping duplicate: JID_0c7a7ae3 (posted within 7 days)
[2026-02-01T06:03:44.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_352f2ae2..." not found, but found as SHA256 "29a350944642d150"
[2026-02-01T06:03:44.379Z] [BOT] ⏭️  Skipping duplicate: JID_a78b48a3-engineer_r11486 (posted within 7 days)
[2026-02-01T06:03:44.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ff0662bf..." not found, but found as SHA256 "e3a6676bd7d9e9d1"
⏭️  Skipping duplicate: JID_cf4a1b14 (posted within 7 days)
[2026-02-01T06:03:44.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4cfc7274..." not found, but found as SHA256 "29ed58ed6c5ba107"
[2026-02-01T06:03:44.380Z] [BOT] ⏭️  Skipping duplicate: JID_ce28c345 (posted within 7 days)
[2026-02-01T06:03:44.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "23947d33b5dae77b"
[2026-02-01T06:03:44.380Z] [BOT] ⏭️  Skipping duplicate: JID_6f99e3fb (posted within 7 days)
[2026-02-01T06:03:44.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8fdce211..." not found, but found as SHA256 "ac5714c4476808e9"
[2026-02-01T06:03:44.381Z] [BOT] ⏭️  Skipping duplicate: JID_da347662 (posted within 7 days)
[2026-02-01T06:03:44.483Z] [BOT] ✅ Loaded pending queue: 2943 total (1277 pending, 49 enriched, 1617 posted)
[2026-02-01T06:03:44.679Z] [BOT] ✅ Saved pending queue: 2943 total (1277 pending, 39 enriched, 1627 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T06:03:44.680Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T06:03:44.769Z] [BOT] 📂 Loaded 11708 existing routing entries
[2026-02-01T06:03:44.922Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T06:03:44.923Z] [BOT] New entries: 10
   Total entries: 11718
   Timestamp: 2026-02-01T06:03:44.875Z
[2026-02-01T06:03:44.923Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T06:03:44.923Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 9
[2026-02-01T06:03:44.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
[2026-02-01T06:03:44.924Z] [BOT] 1. #📍・JID_6daed763: 6 posts
     2. #📊・JID_fb739488: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #🌉・JID_739bbc0b: 3 posts
     5. #🤖・ai-jobs: 2 posts
[2026-02-01T06:03:44.924Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T06:03:44.924Z] [BOT] 💾 BEFORE MERGE: 1637 jobs in memory (cached)
[2026-02-01T06:03:44.957Z] [BOT] ✅ Loaded V2 database: 1637 jobs
💾 DISK STATE: 1637 jobs on disk
[2026-02-01T06:03:44.957Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1637
[2026-02-01T06:03:44.960Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1637 jobs (merged disk + memory)
[2026-02-01T06:03:44.961Z] [BOT] ✅ No jobs to archive (all 1637 jobs within 7-day window)
[2026-02-01T06:03:45.049Z] [BOT] 💾 Saved posted_jobs.json: 1637 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:03:45.049Z] [BOT] ✅ Database saved successfully
[2026-02-01T06:03:47.087Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*