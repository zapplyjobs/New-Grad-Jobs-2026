# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T00:01:14.189Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T00:00:39.119Z] ========================================
[2026-02-01T00:00:39.121Z] Discord Bot Execution Log
[2026-02-01T00:00:39.121Z] Environment: GitHub Actions
[2026-02-01T00:00:39.121Z] Node Version: v20.20.0
[2026-02-01T00:00:39.121Z] ========================================
[2026-02-01T00:00:39.121Z] Environment Variables Check:
[2026-02-01T00:00:39.121Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T00:00:39.121Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.121Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T00:00:39.122Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T00:00:39.122Z] 
Multi-Channel Configuration:
[2026-02-01T00:00:39.122Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T00:00:39.122Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T00:00:39.123Z] 
Data Files Check:
[2026-02-01T00:00:39.123Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60607 bytes)
[2026-02-01T00:00:39.170Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8688343 bytes)
[2026-02-01T00:00:39.170Z] 
========================================
[2026-02-01T00:00:39.170Z] Starting Enhanced Discord Bot...
[2026-02-01T00:00:39.170Z] ========================================
[2026-02-01T00:00:39.748Z] [BOT] ✅ Loaded V2 database: 1537 jobs
[2026-02-01T00:00:40.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T00:00:40.153Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T00:00:40.153Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T00:00:40.279Z] [BOT] ✅ Loaded pending queue: 2947 total (1370 pending, 50 enriched, 1527 posted)
[2026-02-01T00:00:40.279Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T00:00:40.279Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T00:00:40.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T00:00:40.281Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T00:00:40.281Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T00:00:40.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T00:00:40.282Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T00:00:40.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-02-01T00:00:40.282Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T00:00:40.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T00:00:40.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T00:00:40.283Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T00:00:40.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T00:00:40.284Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T00:00:40.284Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T00:00:40.298Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T00:00:40.298Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T00:00:40.299Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T00:00:40.299Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T00:00:40.300Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T00:00:40.300Z] [BOT] - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
   - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T00:00:40.303Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T00:00:40.304Z] [BOT] 📍 [ROUTING] "Junior Software QA Engineer" @ ORG_8697f6f3
[2026-02-01T00:00:40.304Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:40.322Z] [BOT ERROR] (node:3992) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T00:00:40.657Z] [BOT] ✅ Posted message: Junior Software QA Engineer @ ORG_8697f6f3 in #💻・tech-jobs
  ✅ Industry: Junior Software QA Engineer @ ORG_8697f6f3
[2026-02-01T00:00:40.658Z] [BOT] 💾 Added channel posting: Junior Software QA Engineer @ ORG_8697f6f3 → category channel (1 total channels)
[2026-02-01T00:00:40.658Z] [BOT] 💾 BEFORE MERGE: 1538 jobs in memory (cached)
[2026-02-01T00:00:40.695Z] [BOT] ✅ Loaded V2 database: 1537 jobs
💾 DISK STATE: 1537 jobs on disk
[2026-02-01T00:00:40.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1538
[2026-02-01T00:00:40.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:40.700Z] [BOT] 💾 AFTER MERGE: 1538 jobs (merged disk + memory)
[2026-02-01T00:00:40.701Z] [BOT] ✅ No jobs to archive (all 1538 jobs within 7-day window)
[2026-02-01T00:00:40.807Z] [BOT] 💾 Saved posted_jobs.json: 1538 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:42.309Z] [BOT] 📍 [ROUTING] "Graduate Environmental Engineer" @ ORG_65eedb45
[2026-02-01T00:00:42.309Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:42.486Z] [BOT] ✅ Posted message: Graduate Environmental Engineer @ ORG_65eedb45 in #💻・tech-jobs
[2026-02-01T00:00:42.487Z] [BOT] ✅ Industry: Graduate Environmental Engineer @ ORG_65eedb45
[2026-02-01T00:00:42.487Z] [BOT] 💾 Added channel posting: Graduate Environmental Engineer @ ORG_65eedb45 → category channel (1 total channels)
[2026-02-01T00:00:42.487Z] [BOT] 💾 BEFORE MERGE: 1539 jobs in memory (cached)
[2026-02-01T00:00:42.513Z] [BOT] ✅ Loaded V2 database: 1538 jobs
💾 DISK STATE: 1538 jobs on disk
[2026-02-01T00:00:42.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1539
[2026-02-01T00:00:42.523Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:42.524Z] [BOT] 💾 AFTER MERGE: 1539 jobs (merged disk + memory)
[2026-02-01T00:00:42.525Z] [BOT] ✅ No jobs to archive (all 1539 jobs within 7-day window)
[2026-02-01T00:00:42.613Z] [BOT] 💾 Saved posted_jobs.json: 1539 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:44.115Z] [BOT] 📍 [ROUTING] "Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T00:00:44.115Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:44.332Z] [BOT] ✅ Posted message: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T00:00:44.333Z] [BOT] ✅ Industry: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c
[2026-02-01T00:00:44.333Z] [BOT] 💾 Added channel posting: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T00:00:44.333Z] [BOT] 💾 BEFORE MERGE: 1540 jobs in memory (cached)
[2026-02-01T00:00:44.359Z] [BOT] ✅ Loaded V2 database: 1539 jobs
💾 DISK STATE: 1539 jobs on disk
[2026-02-01T00:00:44.367Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1540
[2026-02-01T00:00:44.370Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:44.370Z] [BOT] 💾 AFTER MERGE: 1540 jobs (merged disk + memory)
[2026-02-01T00:00:44.371Z] [BOT] ✅ No jobs to archive (all 1540 jobs within 7-day window)
[2026-02-01T00:00:44.456Z] [BOT] 💾 Saved posted_jobs.json: 1540 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:45.957Z] [BOT] 📍 [ROUTING] "Marketing Science Analyst - February 16th - 2026 Start" @ ORG_a7dddf79 Partners
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:46.305Z] [BOT] ✅ Posted message: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #💻・tech-jobs
  ✅ Industry: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners
[2026-02-01T00:00:46.306Z] [BOT] 💾 Added channel posting: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners → category channel (1 total channels)
[2026-02-01T00:00:46.306Z] [BOT] 💾 BEFORE MERGE: 1541 jobs in memory (cached)
[2026-02-01T00:00:46.331Z] [BOT] ✅ Loaded V2 database: 1540 jobs
💾 DISK STATE: 1540 jobs on disk
[2026-02-01T00:00:46.338Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1541
[2026-02-01T00:00:46.342Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:46.342Z] [BOT] 💾 AFTER MERGE: 1541 jobs (merged disk + memory)
[2026-02-01T00:00:46.343Z] [BOT] ✅ No jobs to archive (all 1541 jobs within 7-day window)
[2026-02-01T00:00:46.428Z] [BOT] 💾 Saved posted_jobs.json: 1541 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:47.928Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_74f80925 & Tango
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:48.230Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_74f80925 & Tango in #💻・tech-jobs
  ✅ Industry: Jr. Software Engineer @ ORG_74f80925 & Tango
[2026-02-01T00:00:48.231Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_74f80925 & Tango → category channel (1 total channels)
💾 BEFORE MERGE: 1542 jobs in memory (cached)
[2026-02-01T00:00:48.257Z] [BOT] ✅ Loaded V2 database: 1541 jobs
💾 DISK STATE: 1541 jobs on disk
[2026-02-01T00:00:48.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1542
[2026-02-01T00:00:48.267Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:48.268Z] [BOT] 💾 AFTER MERGE: 1542 jobs (merged disk + memory)
[2026-02-01T00:00:48.268Z] [BOT] ✅ No jobs to archive (all 1542 jobs within 7-day window)
[2026-02-01T00:00:48.362Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:50.025Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_74f80925 & Tango in #🗽・JID_98d4f0de
[2026-02-01T00:00:50.025Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T00:00:50.026Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_74f80925 & Tango → location channel (2 total channels)
[2026-02-01T00:00:50.026Z] [BOT] 💾 BEFORE MERGE: 1542 jobs in memory (cached)
[2026-02-01T00:00:50.055Z] [BOT] ✅ Loaded V2 database: 1542 jobs
💾 DISK STATE: 1542 jobs on disk
[2026-02-01T00:00:50.055Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1542
[2026-02-01T00:00:50.058Z] [BOT] 🔀 Deep merged: Jr. Software Engineer @ ORG_74f80925 & Tango (disk: 1 channels → merged: 2 channels)
[2026-02-01T00:00:50.058Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1542 jobs (merged disk + memory)
[2026-02-01T00:00:50.060Z] [BOT] ✅ No jobs to archive (all 1542 jobs within 7-day window)
[2026-02-01T00:00:50.139Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:51.641Z] [BOT] 📍 [ROUTING] "Learning Technology Specialist" @ ORG_e5fcdd7e
[2026-02-01T00:00:51.641Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:51.824Z] [BOT] ✅ Posted message: Learning Technology Specialist @ ORG_e5fcdd7e in #💻・tech-jobs
  ✅ Industry: Learning Technology Specialist @ ORG_e5fcdd7e
[2026-02-01T00:00:51.824Z] [BOT] 💾 Added channel posting: Learning Technology Specialist @ ORG_e5fcdd7e → category channel (1 total channels)
[2026-02-01T00:00:51.824Z] [BOT] 💾 BEFORE MERGE: 1543 jobs in memory (cached)
[2026-02-01T00:00:51.850Z] [BOT] ✅ Loaded V2 database: 1542 jobs
💾 DISK STATE: 1542 jobs on disk
[2026-02-01T00:00:51.856Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1543
[2026-02-01T00:00:51.859Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:51.859Z] [BOT] 💾 AFTER MERGE: 1543 jobs (merged disk + memory)
[2026-02-01T00:00:51.860Z] [BOT] ✅ No jobs to archive (all 1543 jobs within 7-day window)
[2026-02-01T00:00:51.950Z] [BOT] 💾 Saved posted_jobs.json: 1543 active jobs
[2026-02-01T00:00:51.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:53.453Z] [BOT] 📍 [ROUTING] "Demo Engineer, Software Development" @ ORG_5e875bc9
   Category: TECH (matched: "software")
[2026-02-01T00:00:53.454Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:53.670Z] [BOT] ✅ Posted message: Demo Engineer, Software Development @ ORG_5e875bc9 in #💻・tech-jobs
  ✅ Industry: Demo Engineer, Software Development @ ORG_5e875bc9
[2026-02-01T00:00:53.671Z] [BOT] 💾 Added channel posting: Demo Engineer, Software Development @ ORG_5e875bc9 → category channel (1 total channels)
[2026-02-01T00:00:53.671Z] [BOT] 💾 BEFORE MERGE: 1544 jobs in memory (cached)
[2026-02-01T00:00:53.700Z] [BOT] ✅ Loaded V2 database: 1543 jobs
💾 DISK STATE: 1543 jobs on disk
[2026-02-01T00:00:53.700Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1544
[2026-02-01T00:00:53.703Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:53.703Z] [BOT] 💾 AFTER MERGE: 1544 jobs (merged disk + memory)
[2026-02-01T00:00:53.704Z] [BOT] ✅ No jobs to archive (all 1544 jobs within 7-day window)
[2026-02-01T00:00:53.790Z] [BOT] 💾 Saved posted_jobs.json: 1544 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:55.783Z] [BOT] ✅ Posted message: Demo Engineer, Software Development @ ORG_5e875bc9 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T00:00:55.783Z] [BOT] 💾 Added channel posting: Demo Engineer, Software Development @ ORG_5e875bc9 → location channel (2 total channels)
[2026-02-01T00:00:55.783Z] [BOT] 💾 BEFORE MERGE: 1544 jobs in memory (cached)
[2026-02-01T00:00:55.810Z] [BOT] ✅ Loaded V2 database: 1544 jobs
💾 DISK STATE: 1544 jobs on disk
[2026-02-01T00:00:55.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1544
[2026-02-01T00:00:55.818Z] [BOT] 🔀 Deep merged: Demo Engineer, Software Development @ ORG_5e875bc9 (disk: 1 channels → merged: 2 channels)
[2026-02-01T00:00:55.818Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1544 jobs (merged disk + memory)
[2026-02-01T00:00:55.819Z] [BOT] ✅ No jobs to archive (all 1544 jobs within 7-day window)
[2026-02-01T00:00:55.911Z] [BOT] 💾 Saved posted_jobs.json: 1544 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:00:57.414Z] [BOT] 📍 [ROUTING] "Java Developer" @ 360 IT Professionals
   Category: TECH (matched: "software")
[2026-02-01T00:00:57.414Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:00:57.681Z] [BOT] ✅ Posted message: Java Developer @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Java Developer @ 360 IT Professionals
[2026-02-01T00:00:57.682Z] [BOT] 💾 Added channel posting: Java Developer @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T00:00:57.682Z] [BOT] 💾 BEFORE MERGE: 1545 jobs in memory (cached)
[2026-02-01T00:00:57.712Z] [BOT] ✅ Loaded V2 database: 1544 jobs
💾 DISK STATE: 1544 jobs on disk
[2026-02-01T00:00:57.712Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1545
[2026-02-01T00:00:57.716Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:00:57.716Z] [BOT] 💾 AFTER MERGE: 1545 jobs (merged disk + memory)
[2026-02-01T00:00:57.717Z] [BOT] ✅ No jobs to archive (all 1545 jobs within 7-day window)
[2026-02-01T00:00:57.797Z] [BOT] 💾 Saved posted_jobs.json: 1545 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:01:02.298Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T00:01:02.299Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
[2026-02-01T00:01:02.300Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T00:01:02.496Z] [BOT] ✅ Posted message: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems
[2026-02-01T00:01:02.497Z] [BOT] 💾 Added channel posting: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-02-01T00:01:02.497Z] [BOT] 💾 BEFORE MERGE: 1546 jobs in memory (cached)
[2026-02-01T00:01:02.529Z] [BOT] ✅ Loaded V2 database: 1545 jobs
💾 DISK STATE: 1545 jobs on disk
[2026-02-01T00:01:02.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1546
[2026-02-01T00:01:02.532Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:01:02.532Z] [BOT] 💾 AFTER MERGE: 1546 jobs (merged disk + memory)
[2026-02-01T00:01:02.533Z] [BOT] ✅ No jobs to archive (all 1546 jobs within 7-day window)
[2026-02-01T00:01:02.625Z] [BOT] 💾 Saved posted_jobs.json: 1546 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:01:04.126Z] [BOT] 📍 [ROUTING] "Marketing Analytics - Data Analyst - Adp" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
[2026-02-01T00:01:04.126Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T00:01:04.290Z] [BOT] ✅ Posted message: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems
[2026-02-01T00:01:04.291Z] [BOT] 💾 Added channel posting: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-02-01T00:01:04.291Z] [BOT] 💾 BEFORE MERGE: 1547 jobs in memory (cached)
[2026-02-01T00:01:04.320Z] [BOT] ✅ Loaded V2 database: 1546 jobs
💾 DISK STATE: 1546 jobs on disk
[2026-02-01T00:01:04.320Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1547
[2026-02-01T00:01:04.323Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:01:04.324Z] [BOT] 💾 AFTER MERGE: 1547 jobs (merged disk + memory)
[2026-02-01T00:01:04.324Z] [BOT] ✅ No jobs to archive (all 1547 jobs within 7-day window)
[2026-02-01T00:01:04.408Z] [BOT] 💾 Saved posted_jobs.json: 1547 active jobs
[2026-02-01T00:01:04.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T00:01:06.068Z] [BOT] ✅ Posted message: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T00:01:06.069Z] [BOT] 💾 Added channel posting: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems → location channel (2 total channels)
[2026-02-01T00:01:06.069Z] [BOT] 💾 BEFORE MERGE: 1547 jobs in memory (cached)
[2026-02-01T00:01:06.101Z] [BOT] ✅ Loaded V2 database: 1547 jobs
💾 DISK STATE: 1547 jobs on disk
[2026-02-01T00:01:06.102Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1547
[2026-02-01T00:01:06.105Z] [BOT] 🔀 Deep merged: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems (disk: 1 channels → merged: 2 channels)
[2026-02-01T00:01:06.105Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1547 jobs (merged disk + memory)
[2026-02-01T00:01:06.106Z] [BOT] ✅ No jobs to archive (all 1547 jobs within 7-day window)
[2026-02-01T00:01:06.194Z] [BOT] 💾 Saved posted_jobs.json: 1547 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:01:10.696Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T00:01:10.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d061bb4..." not found, but found as SHA256 "e8957d7f012c1364"
⏭️  Skipping duplicate: JID_2f5acd9a-engineer_144324 (posted within 7 days)
[2026-02-01T00:01:10.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0baf6a90..." not found, but found as SHA256 "05bedcaff886294b"
⏭️  Skipping duplicate: JID_80af21aa (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_037812e7..." not found, but found as SHA256 "cc0f3137368a6045"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_4f8514a9-detail (posted within 7 days)
[2026-02-01T00:01:10.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_589c7a2c-..." not found, but found as SHA256 "e7e1e729f3e9b841"
⏭️  Skipping duplicate: JID_1defcaff (posted within 7 days)
[2026-02-01T00:01:10.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6d29dced..." not found, but found as SHA256 "06edaede43684216"
[2026-02-01T00:01:10.699Z] [BOT] ⏭️  Skipping duplicate: JID_6d29dced (posted within 7 days)
[2026-02-01T00:01:10.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8b9be5db..." not found, but found as SHA256 "bd4f977e36115c06"
⏭️  Skipping duplicate: JID_783a782c (posted within 7 days)
[2026-02-01T00:01:10.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_afa773a5..." not found, but found as SHA256 "2d9ad150af9c343e"
[2026-02-01T00:01:10.700Z] [BOT] ⏭️  Skipping duplicate: JID_fc37d849-development_a6126bad-JID_12861abc (posted within 7 days)
[2026-02-01T00:01:10.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "f1a9e40c1b5c025d"
[2026-02-01T00:01:10.700Z] [BOT] ⏭️  Skipping duplicate: JID_ea1316a0 (posted within 7 days)
[2026-02-01T00:01:10.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bedaa559..." not found, but found as SHA256 "1815cf6721324498"
[2026-02-01T00:01:10.700Z] [BOT] ⏭️  Skipping duplicate: JID_4feb6c11 (posted within 7 days)
[2026-02-01T00:01:10.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4b874c0..." not found, but found as SHA256 "e6ce64f3505e9353"
⏭️  Skipping duplicate: JID_87f71e81 (posted within 7 days)
[2026-02-01T00:01:10.818Z] [BOT] ✅ Loaded pending queue: 2947 total (1370 pending, 50 enriched, 1527 posted)
[2026-02-01T00:01:11.009Z] [BOT] ✅ Saved pending queue: 2947 total (1370 pending, 40 enriched, 1537 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T00:01:11.009Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T00:01:11.098Z] [BOT] 📂 Loaded 11618 existing routing entries
[2026-02-01T00:01:11.231Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T00:01:11.231Z] [BOT] New entries: 10
   Total entries: 11628
   Timestamp: 2026-02-01T00:01:11.183Z
[2026-02-01T00:01:11.232Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T00:01:11.232Z] [BOT] Total attempts: 21
   Successful: 13
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T00:01:11.232Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
[2026-02-01T00:01:11.232Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-02-01T00:01:11.233Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1547 jobs in memory (cached)
[2026-02-01T00:01:11.288Z] [BOT] ✅ Loaded V2 database: 1547 jobs
💾 DISK STATE: 1547 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1547
[2026-02-01T00:01:11.292Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:01:11.293Z] [BOT] 💾 AFTER MERGE: 1547 jobs (merged disk + memory)
[2026-02-01T00:01:11.294Z] [BOT] ✅ No jobs to archive (all 1547 jobs within 7-day window)
[2026-02-01T00:01:11.387Z] [BOT] 💾 Saved posted_jobs.json: 1547 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:01:11.388Z] [BOT] ✅ Database saved successfully
[2026-02-01T00:01:13.418Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3992) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*