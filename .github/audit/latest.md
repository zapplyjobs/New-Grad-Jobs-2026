# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T05:04:39.843Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T05:03:46.277Z] ========================================
[2026-02-01T05:03:46.279Z] Discord Bot Execution Log
[2026-02-01T05:03:46.279Z] Environment: GitHub Actions
[2026-02-01T05:03:46.279Z] Node Version: v20.20.0
[2026-02-01T05:03:46.279Z] ========================================
[2026-02-01T05:03:46.279Z] Environment Variables Check:
[2026-02-01T05:03:46.279Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T05:03:46.279Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T05:03:46.279Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T05:03:46.279Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T05:03:46.280Z] 
Multi-Channel Configuration:
[2026-02-01T05:03:46.280Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T05:03:46.280Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T05:03:46.280Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:03:46.280Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T05:03:46.280Z] 
Data Files Check:
[2026-02-01T05:03:46.281Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58435 bytes)
[2026-02-01T05:03:46.328Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8960347 bytes)
[2026-02-01T05:03:46.328Z] 
========================================
[2026-02-01T05:03:46.328Z] Starting Enhanced Discord Bot...
[2026-02-01T05:03:46.328Z] ========================================
[2026-02-01T05:03:46.900Z] [BOT] ✅ Loaded V2 database: 1607 jobs
[2026-02-01T05:03:47.521Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T05:03:47.522Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T05:03:47.522Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T05:03:47.660Z] [BOT] ✅ Loaded pending queue: 2944 total (1297 pending, 50 enriched, 1597 posted)
[2026-02-01T05:03:47.661Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T05:03:47.661Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T05:03:47.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T05:03:47.662Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T05:03:47.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T05:03:47.663Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T05:03:47.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-02-01T05:03:47.665Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T05:03:47.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T05:03:47.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T05:03:47.665Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T05:03:47.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T05:03:47.665Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T05:03:47.680Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T05:03:47.681Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T05:03:47.681Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T05:03:47.682Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T05:03:47.682Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Associate Software Engineer @ ORG_e5ca4df3 Group: nashville, san diego
   - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T05:03:47.686Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T05:03:47.686Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd" @ ORG_08c9a13c
[2026-02-01T05:03:47.687Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:03:47.705Z] [BOT ERROR] (node:2947) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T05:03:48.433Z] [BOT] ✅ Posted message: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T05:03:48.433Z] [BOT] ✅ Industry: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c
[2026-02-01T05:03:48.434Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T05:03:48.435Z] [BOT] 💾 BEFORE MERGE: 1608 jobs in memory (cached)
[2026-02-01T05:03:48.472Z] [BOT] ✅ Loaded V2 database: 1607 jobs
💾 DISK STATE: 1607 jobs on disk
[2026-02-01T05:03:48.473Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1608
[2026-02-01T05:03:48.477Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:03:48.477Z] [BOT] 💾 AFTER MERGE: 1608 jobs (merged disk + memory)
[2026-02-01T05:03:48.478Z] [BOT] ✅ No jobs to archive (all 1608 jobs within 7-day window)
[2026-02-01T05:03:48.575Z] [BOT] 💾 Saved posted_jobs.json: 1608 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:50.340Z] [BOT] ✅ Posted message: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T05:03:50.340Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T05:03:50.340Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T05:03:50.340Z] [BOT] 💾 BEFORE MERGE: 1608 jobs in memory (cached)
[2026-02-01T05:03:50.373Z] [BOT] ✅ Loaded V2 database: 1608 jobs
[2026-02-01T05:03:50.373Z] [BOT] 💾 DISK STATE: 1608 jobs on disk
[2026-02-01T05:03:50.374Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1608
[2026-02-01T05:03:50.377Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:03:50.377Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1608 jobs (merged disk + memory)
[2026-02-01T05:03:50.378Z] [BOT] ✅ No jobs to archive (all 1608 jobs within 7-day window)
[2026-02-01T05:03:50.469Z] [BOT] 💾 Saved posted_jobs.json: 1608 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:51.971Z] [BOT] 📍 [ROUTING] "Associate Embedded Software Engineer" @ ORG_f3f2248d Grumman
[2026-02-01T05:03:51.971Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:03:52.245Z] [BOT] ✅ Posted message: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-02-01T05:03:52.245Z] [BOT] ✅ Industry: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman
[2026-02-01T05:03:52.245Z] [BOT] 💾 Added channel posting: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-02-01T05:03:52.246Z] [BOT] 💾 BEFORE MERGE: 1609 jobs in memory (cached)
[2026-02-01T05:03:52.277Z] [BOT] ✅ Loaded V2 database: 1608 jobs
💾 DISK STATE: 1608 jobs on disk
[2026-02-01T05:03:52.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1609
[2026-02-01T05:03:52.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:03:52.281Z] [BOT] 💾 AFTER MERGE: 1609 jobs (merged disk + memory)
[2026-02-01T05:03:52.282Z] [BOT] ✅ No jobs to archive (all 1609 jobs within 7-day window)
[2026-02-01T05:03:52.372Z] [BOT] 💾 Saved posted_jobs.json: 1609 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:54.199Z] [BOT] ✅ Posted message: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T05:03:54.199Z] [BOT] 💾 Added channel posting: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
💾 BEFORE MERGE: 1609 jobs in memory (cached)
[2026-02-01T05:03:54.230Z] [BOT] ✅ Loaded V2 database: 1609 jobs
💾 DISK STATE: 1609 jobs on disk
[2026-02-01T05:03:54.231Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1609
[2026-02-01T05:03:54.234Z] [BOT] 🔀 Deep merged: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:03:54.234Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1609 jobs (merged disk + memory)
[2026-02-01T05:03:54.235Z] [BOT] ✅ No jobs to archive (all 1609 jobs within 7-day window)
[2026-02-01T05:03:54.329Z] [BOT] 💾 Saved posted_jobs.json: 1609 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:55.831Z] [BOT] 📍 [ROUTING] "University Grad - Product Engineer - 2026" @ ORG_b7d7c983 Labs
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T05:03:55.831Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:03:56.048Z] [BOT] ✅ Posted message: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs in #💻・tech-jobs
  ✅ Industry: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs
[2026-02-01T05:03:56.049Z] [BOT] 💾 Added channel posting: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs → category channel (1 total channels)
[2026-02-01T05:03:56.049Z] [BOT] 💾 BEFORE MERGE: 1610 jobs in memory (cached)
[2026-02-01T05:03:56.082Z] [BOT] ✅ Loaded V2 database: 1609 jobs
💾 DISK STATE: 1609 jobs on disk
[2026-02-01T05:03:56.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1610
[2026-02-01T05:03:56.086Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:03:56.086Z] [BOT] 💾 AFTER MERGE: 1610 jobs (merged disk + memory)
[2026-02-01T05:03:56.087Z] [BOT] ✅ No jobs to archive (all 1610 jobs within 7-day window)
[2026-02-01T05:03:56.191Z] [BOT] 💾 Saved posted_jobs.json: 1610 active jobs
[2026-02-01T05:03:56.191Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:57.994Z] [BOT] ✅ Posted message: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T05:03:57.995Z] [BOT] 💾 Added channel posting: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs → location channel (2 total channels)
[2026-02-01T05:03:57.995Z] [BOT] 💾 BEFORE MERGE: 1610 jobs in memory (cached)
[2026-02-01T05:03:58.027Z] [BOT] ✅ Loaded V2 database: 1610 jobs
💾 DISK STATE: 1610 jobs on disk
[2026-02-01T05:03:58.027Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1610
[2026-02-01T05:03:58.030Z] [BOT] 🔀 Deep merged: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:03:58.030Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1610 jobs (merged disk + memory)
[2026-02-01T05:03:58.031Z] [BOT] ✅ No jobs to archive (all 1610 jobs within 7-day window)
[2026-02-01T05:03:58.123Z] [BOT] 💾 Saved posted_jobs.json: 1610 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:03:59.625Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer" @ ORG_60cbfc1e Health
[2026-02-01T05:03:59.625Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:03:59.932Z] [BOT] ✅ Posted message: Fullstack Software Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-02-01T05:03:59.932Z] [BOT] ✅ Industry: Fullstack Software Engineer @ ORG_60cbfc1e Health
[2026-02-01T05:03:59.933Z] [BOT] 💾 Added channel posting: Fullstack Software Engineer @ ORG_60cbfc1e Health → category channel (1 total channels)
💾 BEFORE MERGE: 1611 jobs in memory (cached)
[2026-02-01T05:03:59.965Z] [BOT] ✅ Loaded V2 database: 1610 jobs
💾 DISK STATE: 1610 jobs on disk
[2026-02-01T05:03:59.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1611
[2026-02-01T05:03:59.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:03:59.968Z] [BOT] 💾 AFTER MERGE: 1611 jobs (merged disk + memory)
[2026-02-01T05:03:59.969Z] [BOT] ✅ No jobs to archive (all 1611 jobs within 7-day window)
[2026-02-01T05:04:00.062Z] [BOT] 💾 Saved posted_jobs.json: 1611 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:01.881Z] [BOT] ✅ Posted message: Fullstack Software Engineer @ ORG_60cbfc1e Health in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T05:04:01.882Z] [BOT] 💾 Added channel posting: Fullstack Software Engineer @ ORG_60cbfc1e Health → location channel (2 total channels)
[2026-02-01T05:04:01.882Z] [BOT] 💾 BEFORE MERGE: 1611 jobs in memory (cached)
[2026-02-01T05:04:01.912Z] [BOT] ✅ Loaded V2 database: 1611 jobs
💾 DISK STATE: 1611 jobs on disk
[2026-02-01T05:04:01.912Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1611
[2026-02-01T05:04:01.915Z] [BOT] 🔀 Deep merged: Fullstack Software Engineer @ ORG_60cbfc1e Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T05:04:01.915Z] [BOT] 💾 AFTER MERGE: 1611 jobs (merged disk + memory)
[2026-02-01T05:04:01.916Z] [BOT] ✅ No jobs to archive (all 1611 jobs within 7-day window)
[2026-02-01T05:04:02.001Z] [BOT] 💾 Saved posted_jobs.json: 1611 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:03.502Z] [BOT] 📍 [ROUTING] "Design Engineer" @ ORG_60cbfc1e Health
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:04:03.754Z] [BOT] ✅ Posted message: Design Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Design Engineer @ ORG_60cbfc1e Health
[2026-02-01T05:04:03.755Z] [BOT] 💾 Added channel posting: Design Engineer @ ORG_60cbfc1e Health → category channel (1 total channels)
[2026-02-01T05:04:03.755Z] [BOT] 💾 BEFORE MERGE: 1612 jobs in memory (cached)
[2026-02-01T05:04:03.787Z] [BOT] ✅ Loaded V2 database: 1611 jobs
💾 DISK STATE: 1611 jobs on disk
[2026-02-01T05:04:03.787Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1612
[2026-02-01T05:04:03.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:03.790Z] [BOT] 💾 AFTER MERGE: 1612 jobs (merged disk + memory)
[2026-02-01T05:04:03.791Z] [BOT] ✅ No jobs to archive (all 1612 jobs within 7-day window)
[2026-02-01T05:04:03.879Z] [BOT] 💾 Saved posted_jobs.json: 1612 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:05.639Z] [BOT] ✅ Posted message: Design Engineer @ ORG_60cbfc1e Health in #🗽・JID_98d4f0de
[2026-02-01T05:04:05.639Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T05:04:05.639Z] [BOT] 💾 Added channel posting: Design Engineer @ ORG_60cbfc1e Health → location channel (2 total channels)
[2026-02-01T05:04:05.640Z] [BOT] 💾 BEFORE MERGE: 1612 jobs in memory (cached)
[2026-02-01T05:04:05.671Z] [BOT] ✅ Loaded V2 database: 1612 jobs
💾 DISK STATE: 1612 jobs on disk
[2026-02-01T05:04:05.671Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1612
[2026-02-01T05:04:05.674Z] [BOT] 🔀 Deep merged: Design Engineer @ ORG_60cbfc1e Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:04:05.674Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1612 jobs (merged disk + memory)
[2026-02-01T05:04:05.675Z] [BOT] ✅ No jobs to archive (all 1612 jobs within 7-day window)
[2026-02-01T05:04:05.786Z] [BOT] 💾 Saved posted_jobs.json: 1612 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:07.286Z] [BOT] 📍 [ROUTING] "Pricing Engineer" @ ORG_60cbfc1e Health
[2026-02-01T05:04:07.286Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:04:07.486Z] [BOT] ✅ Posted message: Pricing Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-02-01T05:04:07.486Z] [BOT] ✅ Industry: Pricing Engineer @ ORG_60cbfc1e Health
[2026-02-01T05:04:07.487Z] [BOT] 💾 Added channel posting: Pricing Engineer @ ORG_60cbfc1e Health → category channel (1 total channels)
[2026-02-01T05:04:07.487Z] [BOT] 💾 BEFORE MERGE: 1613 jobs in memory (cached)
[2026-02-01T05:04:07.517Z] [BOT] ✅ Loaded V2 database: 1612 jobs
💾 DISK STATE: 1612 jobs on disk
[2026-02-01T05:04:07.518Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1613
[2026-02-01T05:04:07.521Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:07.521Z] [BOT] 💾 AFTER MERGE: 1613 jobs (merged disk + memory)
[2026-02-01T05:04:07.522Z] [BOT] ✅ No jobs to archive (all 1613 jobs within 7-day window)
[2026-02-01T05:04:07.609Z] [BOT] 💾 Saved posted_jobs.json: 1613 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:09.372Z] [BOT] ✅ Posted message: Pricing Engineer @ ORG_60cbfc1e Health in #🗽・JID_98d4f0de
[2026-02-01T05:04:09.372Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T05:04:09.372Z] [BOT] 💾 Added channel posting: Pricing Engineer @ ORG_60cbfc1e Health → location channel (2 total channels)
[2026-02-01T05:04:09.372Z] [BOT] 💾 BEFORE MERGE: 1613 jobs in memory (cached)
[2026-02-01T05:04:09.404Z] [BOT] ✅ Loaded V2 database: 1613 jobs
💾 DISK STATE: 1613 jobs on disk
[2026-02-01T05:04:09.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1613
[2026-02-01T05:04:09.407Z] [BOT] 🔀 Deep merged: Pricing Engineer @ ORG_60cbfc1e Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:04:09.407Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1613 jobs (merged disk + memory)
[2026-02-01T05:04:09.408Z] [BOT] ✅ No jobs to archive (all 1613 jobs within 7-day window)
[2026-02-01T05:04:09.499Z] [BOT] 💾 Saved posted_jobs.json: 1613 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:11.000Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_60cbfc1e Health
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T05:04:11.001Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:04:11.631Z] [BOT] ✅ Posted message: Product Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_60cbfc1e Health
[2026-02-01T05:04:11.632Z] [BOT] 💾 Added channel posting: Product Engineer @ ORG_60cbfc1e Health → category channel (1 total channels)
[2026-02-01T05:04:11.632Z] [BOT] 💾 BEFORE MERGE: 1614 jobs in memory (cached)
[2026-02-01T05:04:11.663Z] [BOT] ✅ Loaded V2 database: 1613 jobs
💾 DISK STATE: 1613 jobs on disk
[2026-02-01T05:04:11.663Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1614
[2026-02-01T05:04:11.666Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:11.666Z] [BOT] 💾 AFTER MERGE: 1614 jobs (merged disk + memory)
[2026-02-01T05:04:11.667Z] [BOT] ✅ No jobs to archive (all 1614 jobs within 7-day window)
[2026-02-01T05:04:11.757Z] [BOT] 💾 Saved posted_jobs.json: 1614 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:13.481Z] [BOT] ✅ Posted message: Product Engineer @ ORG_60cbfc1e Health in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T05:04:13.481Z] [BOT] 💾 Added channel posting: Product Engineer @ ORG_60cbfc1e Health → location channel (2 total channels)
[2026-02-01T05:04:13.482Z] [BOT] 💾 BEFORE MERGE: 1614 jobs in memory (cached)
[2026-02-01T05:04:13.513Z] [BOT] ✅ Loaded V2 database: 1614 jobs
💾 DISK STATE: 1614 jobs on disk
[2026-02-01T05:04:13.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1614
[2026-02-01T05:04:13.516Z] [BOT] 🔀 Deep merged: Product Engineer @ ORG_60cbfc1e Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:04:13.516Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1614 jobs (merged disk + memory)
[2026-02-01T05:04:13.517Z] [BOT] ✅ No jobs to archive (all 1614 jobs within 7-day window)
[2026-02-01T05:04:13.608Z] [BOT] 💾 Saved posted_jobs.json: 1614 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:18.111Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T05:04:18.112Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ T-Mobile
   Category: AI (matched: "artificial intelligence")
[2026-02-01T05:04:18.112Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T05:04:18.482Z] [BOT] ✅ Posted message: Associate AI Engineer @ T-Mobile in #🤖・ai-jobs
  ✅ Industry: Associate AI Engineer @ T-Mobile
[2026-02-01T05:04:18.483Z] [BOT] 💾 Added channel posting: Associate AI Engineer @ T-Mobile → category channel (1 total channels)
[2026-02-01T05:04:18.483Z] [BOT] 💾 BEFORE MERGE: 1615 jobs in memory (cached)
[2026-02-01T05:04:18.517Z] [BOT] ✅ Loaded V2 database: 1614 jobs
💾 DISK STATE: 1614 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1615
[2026-02-01T05:04:18.522Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:18.523Z] [BOT] 💾 AFTER MERGE: 1615 jobs (merged disk + memory)
[2026-02-01T05:04:18.524Z] [BOT] ✅ No jobs to archive (all 1615 jobs within 7-day window)
[2026-02-01T05:04:18.621Z] [BOT] 💾 Saved posted_jobs.json: 1615 active jobs
[2026-02-01T05:04:18.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:20.454Z] [BOT] ✅ Posted message: Associate AI Engineer @ T-Mobile in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T05:04:20.454Z] [BOT] 💾 Added channel posting: Associate AI Engineer @ T-Mobile → location channel (2 total channels)
[2026-02-01T05:04:20.454Z] [BOT] 💾 BEFORE MERGE: 1615 jobs in memory (cached)
[2026-02-01T05:04:20.484Z] [BOT] ✅ Loaded V2 database: 1615 jobs
💾 DISK STATE: 1615 jobs on disk
[2026-02-01T05:04:20.484Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1615
[2026-02-01T05:04:20.487Z] [BOT] 🔀 Deep merged: Associate AI Engineer @ T-Mobile (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T05:04:20.487Z] [BOT] 💾 AFTER MERGE: 1615 jobs (merged disk + memory)
[2026-02-01T05:04:20.488Z] [BOT] ✅ No jobs to archive (all 1615 jobs within 7-day window)
[2026-02-01T05:04:20.586Z] [BOT] 💾 Saved posted_jobs.json: 1615 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:22.085Z] [BOT] 📍 [ROUTING] "Software Engineer, Agent" @ ORG_d5eef8ad
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T05:04:22.085Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T05:04:22.340Z] [BOT] ✅ Posted message: Software Engineer, Agent @ ORG_d5eef8ad in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Agent @ ORG_d5eef8ad
[2026-02-01T05:04:22.341Z] [BOT] 💾 Added channel posting: Software Engineer, Agent @ ORG_d5eef8ad → category channel (1 total channels)
[2026-02-01T05:04:22.341Z] [BOT] 💾 BEFORE MERGE: 1616 jobs in memory (cached)
[2026-02-01T05:04:22.371Z] [BOT] ✅ Loaded V2 database: 1615 jobs
💾 DISK STATE: 1615 jobs on disk
[2026-02-01T05:04:22.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1616
[2026-02-01T05:04:22.374Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:22.374Z] [BOT] 💾 AFTER MERGE: 1616 jobs (merged disk + memory)
[2026-02-01T05:04:22.375Z] [BOT] ✅ No jobs to archive (all 1616 jobs within 7-day window)
[2026-02-01T05:04:22.479Z] [BOT] 💾 Saved posted_jobs.json: 1616 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:24.302Z] [BOT] ✅ Posted message: Software Engineer, Agent @ ORG_d5eef8ad in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T05:04:24.303Z] [BOT] 💾 Added channel posting: Software Engineer, Agent @ ORG_d5eef8ad → location channel (2 total channels)
[2026-02-01T05:04:24.303Z] [BOT] 💾 BEFORE MERGE: 1616 jobs in memory (cached)
[2026-02-01T05:04:24.332Z] [BOT] ✅ Loaded V2 database: 1616 jobs
💾 DISK STATE: 1616 jobs on disk
[2026-02-01T05:04:24.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1616
[2026-02-01T05:04:24.335Z] [BOT] 🔀 Deep merged: Software Engineer, Agent @ ORG_d5eef8ad (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T05:04:24.336Z] [BOT] 💾 AFTER MERGE: 1616 jobs (merged disk + memory)
[2026-02-01T05:04:24.337Z] [BOT] ✅ No jobs to archive (all 1616 jobs within 7-day window)
[2026-02-01T05:04:24.422Z] [BOT] 💾 Saved posted_jobs.json: 1616 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:28.923Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T05:04:28.924Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
   Category: FINANCE (matched: "investment")
[2026-02-01T05:04:28.924Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T05:04:29.262Z] [BOT] ✅ Posted message: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #💰・finance-jobs
  ✅ Industry: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics
[2026-02-01T05:04:29.263Z] [BOT] 💾 Added channel posting: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics → category channel (1 total channels)
[2026-02-01T05:04:29.263Z] [BOT] 💾 BEFORE MERGE: 1617 jobs in memory (cached)
[2026-02-01T05:04:29.294Z] [BOT] ✅ Loaded V2 database: 1616 jobs
💾 DISK STATE: 1616 jobs on disk
[2026-02-01T05:04:29.295Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1617
[2026-02-01T05:04:29.298Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:04:29.298Z] [BOT] 💾 AFTER MERGE: 1617 jobs (merged disk + memory)
[2026-02-01T05:04:29.298Z] [BOT] ✅ No jobs to archive (all 1617 jobs within 7-day window)
[2026-02-01T05:04:29.400Z] [BOT] 💾 Saved posted_jobs.json: 1617 active jobs
[2026-02-01T05:04:29.400Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:31.128Z] [BOT] ✅ Posted message: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T05:04:31.128Z] [BOT] 💾 Added channel posting: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics → location channel (2 total channels)
[2026-02-01T05:04:31.129Z] [BOT] 💾 BEFORE MERGE: 1617 jobs in memory (cached)
[2026-02-01T05:04:31.159Z] [BOT] ✅ Loaded V2 database: 1617 jobs
💾 DISK STATE: 1617 jobs on disk
[2026-02-01T05:04:31.159Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1617
[2026-02-01T05:04:31.162Z] [BOT] 🔀 Deep merged: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T05:04:31.162Z] [BOT] 💾 AFTER MERGE: 1617 jobs (merged disk + memory)
[2026-02-01T05:04:31.164Z] [BOT] ✅ No jobs to archive (all 1617 jobs within 7-day window)
[2026-02-01T05:04:31.258Z] [BOT] 💾 Saved posted_jobs.json: 1617 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:04:35.758Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T05:04:35.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5c7a92d9..." not found, but found as SHA256 "72155fe011ee2af3"
[2026-02-01T05:04:35.760Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_781ffd84-detail (posted within 7 days)
[2026-02-01T05:04:35.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c6134fd3..." not found, but found as SHA256 "787c6e858b61977e"
⏭️  Skipping duplicate: JID_d93ab0bf-northrop_grumman_external_site-JID_1a29c647-engineer_r10208121-1 (posted within 7 days)
[2026-02-01T05:04:35.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_41312350..." not found, but found as SHA256 "b45ac21fd3c7685e"
⏭️  Skipping duplicate: JID_ad2d598d-engineer_req333189 (posted within 7 days)
[2026-02-01T05:04:35.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e40e7655..." not found, but found as SHA256 "37734b5f33e874d8"
[2026-02-01T05:04:35.761Z] [BOT] ⏭️  Skipping duplicate: JID_5595c1be (posted within 7 days)
[2026-02-01T05:04:35.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ccdd0a4..." not found, but found as SHA256 "74ddd21136dbe9e8"
[2026-02-01T05:04:35.761Z] [BOT] ⏭️  Skipping duplicate: JID_4ec87338 (posted within 7 days)
[2026-02-01T05:04:35.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_365fe8c9..." not found, but found as SHA256 "72faa78f8290c8b4"
[2026-02-01T05:04:35.761Z] [BOT] ⏭️  Skipping duplicate: JID_f7ac97f2 (posted within 7 days)
[2026-02-01T05:04:35.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d0a55de..." not found, but found as SHA256 "03958775db27f077"
[2026-02-01T05:04:35.762Z] [BOT] ⏭️  Skipping duplicate: JID_fdb28f9e (posted within 7 days)
[2026-02-01T05:04:35.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf5b0061..." not found, but found as SHA256 "6cd973da5e35b966"
⏭️  Skipping duplicate: JID_dbc5ca0f (posted within 7 days)
[2026-02-01T05:04:35.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7aec037..." not found, but found as SHA256 "e43d5d9c3f38f471"
[2026-02-01T05:04:35.762Z] [BOT] ⏭️  Skipping duplicate: JID_811bbf1a (posted within 7 days)
[2026-02-01T05:04:35.763Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eab10343..." not found, but found as SHA256 "cc196dbddf01f18d"
[2026-02-01T05:04:35.763Z] [BOT] ⏭️  Skipping duplicate: JID_f7f7997d (posted within 7 days)
[2026-02-01T05:04:35.863Z] [BOT] ✅ Loaded pending queue: 2944 total (1297 pending, 50 enriched, 1597 posted)
[2026-02-01T05:04:36.059Z] [BOT] ✅ Saved pending queue: 2944 total (1297 pending, 40 enriched, 1607 posted)
[2026-02-01T05:04:36.060Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T05:04:36.147Z] [BOT] 📂 Loaded 11688 existing routing entries
[2026-02-01T05:04:36.281Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11698
   Timestamp: 2026-02-01T05:04:36.233Z
[2026-02-01T05:04:36.281Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T05:04:36.281Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T05:04:36.281Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T05:04:36.282Z] [BOT] Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-02-01T05:04:36.282Z] [BOT] 2. #🗽・JID_98d4f0de: 4 posts
     3. #🌲・JID_efdf5921: 2 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🌉・JID_739bbc0b: 2 posts
[2026-02-01T05:04:36.282Z] [BOT] [STATS] Channel stats saved
[2026-02-01T05:04:36.282Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1617 jobs in memory (cached)
[2026-02-01T05:04:36.316Z] [BOT] ✅ Loaded V2 database: 1617 jobs
💾 DISK STATE: 1617 jobs on disk
[2026-02-01T05:04:36.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1617
[2026-02-01T05:04:36.319Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1617 jobs (merged disk + memory)
[2026-02-01T05:04:36.324Z] [BOT] ✅ No jobs to archive (all 1617 jobs within 7-day window)
[2026-02-01T05:04:36.422Z] [BOT] 💾 Saved posted_jobs.json: 1617 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T05:04:38.455Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2947) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*