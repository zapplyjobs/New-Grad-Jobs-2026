# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T08:56:41.275Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T08:55:58.009Z] ========================================
[2026-02-01T08:55:58.011Z] Discord Bot Execution Log
[2026-02-01T08:55:58.011Z] Environment: GitHub Actions
[2026-02-01T08:55:58.011Z] Node Version: v20.20.0
[2026-02-01T08:55:58.011Z] ========================================
[2026-02-01T08:55:58.011Z] Environment Variables Check:
[2026-02-01T08:55:58.011Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T08:55:58.011Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T08:55:58.011Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T08:55:58.012Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T08:55:58.012Z] 
Multi-Channel Configuration:
[2026-02-01T08:55:58.012Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T08:55:58.012Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T08:55:58.012Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:55:58.012Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T08:55:58.012Z] 
Data Files Check:
[2026-02-01T08:55:58.013Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60606 bytes)
[2026-02-01T08:55:58.060Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9295919 bytes)
[2026-02-01T08:55:58.060Z] 
========================================
[2026-02-01T08:55:58.060Z] Starting Enhanced Discord Bot...
[2026-02-01T08:55:58.060Z] ========================================
[2026-02-01T08:55:58.626Z] [BOT] ✅ Loaded V2 database: 1707 jobs
[2026-02-01T08:55:59.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T08:55:59.032Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T08:55:59.032Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T08:55:59.139Z] [BOT] ✅ Loaded pending queue: 2944 total (1197 pending, 50 enriched, 1697 posted)
[2026-02-01T08:55:59.139Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:55:59.140Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T08:55:59.140Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T08:55:59.141Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:55:59.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T08:55:59.141Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T08:55:59.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T08:55:59.142Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T08:55:59.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T08:55:59.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T08:55:59.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-02-01T08:55:59.143Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T08:55:59.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T08:55:59.143Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T08:55:59.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T08:55:59.143Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T08:55:59.157Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T08:55:59.157Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T08:55:59.157Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T08:55:59.158Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-02-01T08:55:59.158Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T08:55:59.159Z] [BOT] - Software Engineer I @ Jerry: palo alto, san francisco
   - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T08:55:59.162Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-02-01T08:55:59.163Z] [BOT] 📍 [ROUTING] "Product Designer" @ nominal
[2026-02-01T08:55:59.163Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:55:59.179Z] [BOT ERROR] (node:3326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T08:55:59.424Z] [BOT] ✅ Posted message: Product Designer @ nominal in #💻・tech-jobs
[2026-02-01T08:55:59.425Z] [BOT] ✅ Industry: Product Designer @ nominal
[2026-02-01T08:55:59.425Z] [BOT] 💾 Added channel posting: Product Designer @ nominal → category channel (1 total channels)
[2026-02-01T08:55:59.426Z] [BOT] 💾 BEFORE MERGE: 1708 jobs in memory (cached)
[2026-02-01T08:55:59.459Z] [BOT] ✅ Loaded V2 database: 1707 jobs
💾 DISK STATE: 1707 jobs on disk
[2026-02-01T08:55:59.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1708
[2026-02-01T08:55:59.464Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:55:59.464Z] [BOT] 💾 AFTER MERGE: 1708 jobs (merged disk + memory)
[2026-02-01T08:55:59.465Z] [BOT] ✅ No jobs to archive (all 1708 jobs within 7-day window)
[2026-02-01T08:55:59.577Z] [BOT] 💾 Saved posted_jobs.json: 1708 active jobs
[2026-02-01T08:55:59.577Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:01.080Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer" @ ORG_12af02bd
[2026-02-01T08:56:01.080Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:01.261Z] [BOT] ✅ Posted message: Entry-Level Software Engineer @ ORG_12af02bd in #💻・tech-jobs
[2026-02-01T08:56:01.261Z] [BOT] ✅ Industry: Entry-Level Software Engineer @ ORG_12af02bd
[2026-02-01T08:56:01.262Z] [BOT] 💾 Added channel posting: Entry-Level Software Engineer @ ORG_12af02bd → category channel (1 total channels)
[2026-02-01T08:56:01.262Z] [BOT] 💾 BEFORE MERGE: 1709 jobs in memory (cached)
[2026-02-01T08:56:01.297Z] [BOT] ✅ Loaded V2 database: 1708 jobs
[2026-02-01T08:56:01.297Z] [BOT] 💾 DISK STATE: 1708 jobs on disk
[2026-02-01T08:56:01.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1709
[2026-02-01T08:56:01.301Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:01.301Z] [BOT] 💾 AFTER MERGE: 1709 jobs (merged disk + memory)
[2026-02-01T08:56:01.302Z] [BOT] ✅ No jobs to archive (all 1709 jobs within 7-day window)
[2026-02-01T08:56:01.396Z] [BOT] 💾 Saved posted_jobs.json: 1709 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:03.062Z] [BOT] ✅ Posted message: Entry-Level Software Engineer @ ORG_12af02bd in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:03.062Z] [BOT] 💾 Added channel posting: Entry-Level Software Engineer @ ORG_12af02bd → location channel (2 total channels)
[2026-02-01T08:56:03.063Z] [BOT] 💾 BEFORE MERGE: 1709 jobs in memory (cached)
[2026-02-01T08:56:03.094Z] [BOT] ✅ Loaded V2 database: 1709 jobs
💾 DISK STATE: 1709 jobs on disk
[2026-02-01T08:56:03.095Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1709
[2026-02-01T08:56:03.098Z] [BOT] 🔀 Deep merged: Entry-Level Software Engineer @ ORG_12af02bd (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:03.098Z] [BOT] 💾 AFTER MERGE: 1709 jobs (merged disk + memory)
[2026-02-01T08:56:03.099Z] [BOT] ✅ No jobs to archive (all 1709 jobs within 7-day window)
[2026-02-01T08:56:03.187Z] [BOT] 💾 Saved posted_jobs.json: 1709 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:04.689Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
   Category: TECH (matched: "software")
[2026-02-01T08:56:04.690Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:04.945Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
[2026-02-01T08:56:04.946Z] [BOT] ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-02-01T08:56:04.946Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → category channel (1 total channels)
[2026-02-01T08:56:04.946Z] [BOT] 💾 BEFORE MERGE: 1710 jobs in memory (cached)
[2026-02-01T08:56:04.982Z] [BOT] ✅ Loaded V2 database: 1709 jobs
💾 DISK STATE: 1709 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1710
[2026-02-01T08:56:04.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:04.989Z] [BOT] 💾 AFTER MERGE: 1710 jobs (merged disk + memory)
[2026-02-01T08:56:04.991Z] [BOT] ✅ No jobs to archive (all 1710 jobs within 7-day window)
[2026-02-01T08:56:05.084Z] [BOT] 💾 Saved posted_jobs.json: 1710 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:06.970Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #🌉・JID_739bbc0b
[2026-02-01T08:56:06.970Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T08:56:06.970Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → location channel (2 total channels)
[2026-02-01T08:56:06.970Z] [BOT] 💾 BEFORE MERGE: 1710 jobs in memory (cached)
[2026-02-01T08:56:07.000Z] [BOT] ✅ Loaded V2 database: 1710 jobs
💾 DISK STATE: 1710 jobs on disk
[2026-02-01T08:56:07.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1710
[2026-02-01T08:56:07.004Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_7b717950 (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:56:07.004Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1710 jobs (merged disk + memory)
[2026-02-01T08:56:07.005Z] [BOT] ✅ No jobs to archive (all 1710 jobs within 7-day window)
[2026-02-01T08:56:07.095Z] [BOT] 💾 Saved posted_jobs.json: 1710 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:08.597Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
   Category: TECH (matched: "software")
[2026-02-01T08:56:08.597Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:08.827Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_2c6b11e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2026-02-01T08:56:08.828Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_2c6b11e0 → category channel (1 total channels)
[2026-02-01T08:56:08.828Z] [BOT] 💾 BEFORE MERGE: 1711 jobs in memory (cached)
[2026-02-01T08:56:08.860Z] [BOT] ✅ Loaded V2 database: 1710 jobs
💾 DISK STATE: 1710 jobs on disk
[2026-02-01T08:56:08.861Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1711
[2026-02-01T08:56:08.864Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:08.864Z] [BOT] 💾 AFTER MERGE: 1711 jobs (merged disk + memory)
[2026-02-01T08:56:08.865Z] [BOT] ✅ No jobs to archive (all 1711 jobs within 7-day window)
[2026-02-01T08:56:08.955Z] [BOT] 💾 Saved posted_jobs.json: 1711 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:10.631Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_2c6b11e0 in #📍・JID_6daed763
[2026-02-01T08:56:10.631Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:10.631Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_2c6b11e0 → location channel (2 total channels)
[2026-02-01T08:56:10.631Z] [BOT] 💾 BEFORE MERGE: 1711 jobs in memory (cached)
[2026-02-01T08:56:10.662Z] [BOT] ✅ Loaded V2 database: 1711 jobs
[2026-02-01T08:56:10.662Z] [BOT] 💾 DISK STATE: 1711 jobs on disk
[2026-02-01T08:56:10.662Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1711
[2026-02-01T08:56:10.665Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_2c6b11e0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:10.665Z] [BOT] 💾 AFTER MERGE: 1711 jobs (merged disk + memory)
[2026-02-01T08:56:10.666Z] [BOT] ✅ No jobs to archive (all 1711 jobs within 7-day window)
[2026-02-01T08:56:10.756Z] [BOT] 💾 Saved posted_jobs.json: 1711 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:12.258Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer, AI" @ ORG_0890f456
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:12.408Z] [BOT] ✅ Posted message: Developer Technology Engineer, AI @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Developer Technology Engineer, AI @ ORG_0890f456
[2026-02-01T08:56:12.409Z] [BOT] 💾 Added channel posting: Developer Technology Engineer, AI @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T08:56:12.409Z] [BOT] 💾 BEFORE MERGE: 1712 jobs in memory (cached)
[2026-02-01T08:56:12.441Z] [BOT] ✅ Loaded V2 database: 1711 jobs
💾 DISK STATE: 1711 jobs on disk
[2026-02-01T08:56:12.441Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1712
[2026-02-01T08:56:12.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:12.445Z] [BOT] 💾 AFTER MERGE: 1712 jobs (merged disk + memory)
[2026-02-01T08:56:12.445Z] [BOT] ✅ No jobs to archive (all 1712 jobs within 7-day window)
[2026-02-01T08:56:12.548Z] [BOT] 💾 Saved posted_jobs.json: 1712 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:14.246Z] [BOT] ✅ Posted message: Developer Technology Engineer, AI @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T08:56:14.246Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T08:56:14.246Z] [BOT] 💾 Added channel posting: Developer Technology Engineer, AI @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T08:56:14.246Z] [BOT] 💾 BEFORE MERGE: 1712 jobs in memory (cached)
[2026-02-01T08:56:14.277Z] [BOT] ✅ Loaded V2 database: 1712 jobs
💾 DISK STATE: 1712 jobs on disk
[2026-02-01T08:56:14.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1712
[2026-02-01T08:56:14.280Z] [BOT] 🔀 Deep merged: Developer Technology Engineer, AI @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:56:14.281Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1712 jobs (merged disk + memory)
[2026-02-01T08:56:14.282Z] [BOT] ✅ No jobs to archive (all 1712 jobs within 7-day window)
[2026-02-01T08:56:14.377Z] [BOT] 💾 Saved posted_jobs.json: 1712 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:15.876Z] [BOT] 📍 [ROUTING] "Assistant Scientist - Cnm" @ ORG_a867f63f National Laboratory
[2026-02-01T08:56:15.876Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:16.046Z] [BOT] ✅ Posted message: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #💻・tech-jobs
[2026-02-01T08:56:16.047Z] [BOT] ✅ Industry: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory
[2026-02-01T08:56:16.047Z] [BOT] 💾 Added channel posting: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory → category channel (1 total channels)
[2026-02-01T08:56:16.047Z] [BOT] 💾 BEFORE MERGE: 1713 jobs in memory (cached)
[2026-02-01T08:56:16.078Z] [BOT] ✅ Loaded V2 database: 1712 jobs
💾 DISK STATE: 1712 jobs on disk
[2026-02-01T08:56:16.078Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1713
[2026-02-01T08:56:16.081Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:16.081Z] [BOT] 💾 AFTER MERGE: 1713 jobs (merged disk + memory)
[2026-02-01T08:56:16.082Z] [BOT] ✅ No jobs to archive (all 1713 jobs within 7-day window)
[2026-02-01T08:56:16.170Z] [BOT] 💾 Saved posted_jobs.json: 1713 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:17.942Z] [BOT] ✅ Posted message: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:17.942Z] [BOT] 💾 Added channel posting: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory → location channel (2 total channels)
[2026-02-01T08:56:17.942Z] [BOT] 💾 BEFORE MERGE: 1713 jobs in memory (cached)
[2026-02-01T08:56:17.972Z] [BOT] ✅ Loaded V2 database: 1713 jobs
💾 DISK STATE: 1713 jobs on disk
[2026-02-01T08:56:17.973Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1713
[2026-02-01T08:56:17.976Z] [BOT] 🔀 Deep merged: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:17.976Z] [BOT] 💾 AFTER MERGE: 1713 jobs (merged disk + memory)
[2026-02-01T08:56:17.977Z] [BOT] ✅ No jobs to archive (all 1713 jobs within 7-day window)
[2026-02-01T08:56:18.066Z] [BOT] 💾 Saved posted_jobs.json: 1713 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:19.568Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_346f8710
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:19.825Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_346f8710 in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_346f8710
[2026-02-01T08:56:19.826Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_346f8710 → category channel (1 total channels)
[2026-02-01T08:56:19.826Z] [BOT] 💾 BEFORE MERGE: 1714 jobs in memory (cached)
[2026-02-01T08:56:19.862Z] [BOT] ✅ Loaded V2 database: 1713 jobs
💾 DISK STATE: 1713 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1714
[2026-02-01T08:56:19.867Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:19.867Z] [BOT] 💾 AFTER MERGE: 1714 jobs (merged disk + memory)
[2026-02-01T08:56:19.868Z] [BOT] ✅ No jobs to archive (all 1714 jobs within 7-day window)
[2026-02-01T08:56:19.963Z] [BOT] 💾 Saved posted_jobs.json: 1714 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:21.745Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_346f8710 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:21.745Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_346f8710 → location channel (2 total channels)
[2026-02-01T08:56:21.746Z] [BOT] 💾 BEFORE MERGE: 1714 jobs in memory (cached)
[2026-02-01T08:56:21.776Z] [BOT] ✅ Loaded V2 database: 1714 jobs
💾 DISK STATE: 1714 jobs on disk
[2026-02-01T08:56:21.776Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1714
[2026-02-01T08:56:21.779Z] [BOT] 🔀 Deep merged: Software Engineer – Early Career @ ORG_346f8710 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:21.780Z] [BOT] 💾 AFTER MERGE: 1714 jobs (merged disk + memory)
[2026-02-01T08:56:21.780Z] [BOT] ✅ No jobs to archive (all 1714 jobs within 7-day window)
[2026-02-01T08:56:21.882Z] [BOT] 💾 Saved posted_jobs.json: 1714 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:23.381Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c5cf5d7d Group
[2026-02-01T08:56:23.381Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:23.592Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_c5cf5d7d Group in #💻・tech-jobs
[2026-02-01T08:56:23.592Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c5cf5d7d Group
[2026-02-01T08:56:23.593Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_c5cf5d7d Group → category channel (1 total channels)
[2026-02-01T08:56:23.593Z] [BOT] 💾 BEFORE MERGE: 1715 jobs in memory (cached)
[2026-02-01T08:56:23.624Z] [BOT] ✅ Loaded V2 database: 1714 jobs
💾 DISK STATE: 1714 jobs on disk
[2026-02-01T08:56:23.624Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1715
[2026-02-01T08:56:23.627Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:23.628Z] [BOT] 💾 AFTER MERGE: 1715 jobs (merged disk + memory)
[2026-02-01T08:56:23.629Z] [BOT] ✅ No jobs to archive (all 1715 jobs within 7-day window)
[2026-02-01T08:56:23.734Z] [BOT] 💾 Saved posted_jobs.json: 1715 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:25.468Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_c5cf5d7d Group in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:56:25.468Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_c5cf5d7d Group → location channel (2 total channels)
[2026-02-01T08:56:25.468Z] [BOT] 💾 BEFORE MERGE: 1715 jobs in memory (cached)
[2026-02-01T08:56:25.500Z] [BOT] ✅ Loaded V2 database: 1715 jobs
💾 DISK STATE: 1715 jobs on disk
[2026-02-01T08:56:25.500Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1715
[2026-02-01T08:56:25.503Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_c5cf5d7d Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:25.503Z] [BOT] 💾 AFTER MERGE: 1715 jobs (merged disk + memory)
[2026-02-01T08:56:25.504Z] [BOT] ✅ No jobs to archive (all 1715 jobs within 7-day window)
[2026-02-01T08:56:25.587Z] [BOT] 💾 Saved posted_jobs.json: 1715 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:27.088Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer" @ ORG_b1e645a8
   Category: TECH (matched: "software")
[2026-02-01T08:56:27.089Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:27.290Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #💻・tech-jobs
  ✅ Industry: Associate, Software Engineer @ ORG_b1e645a8
[2026-02-01T08:56:27.290Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → category channel (1 total channels)
[2026-02-01T08:56:27.290Z] [BOT] 💾 BEFORE MERGE: 1716 jobs in memory (cached)
[2026-02-01T08:56:27.322Z] [BOT] ✅ Loaded V2 database: 1715 jobs
💾 DISK STATE: 1715 jobs on disk
[2026-02-01T08:56:27.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1716
[2026-02-01T08:56:27.325Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:27.325Z] [BOT] 💾 AFTER MERGE: 1716 jobs (merged disk + memory)
[2026-02-01T08:56:27.326Z] [BOT] ✅ No jobs to archive (all 1716 jobs within 7-day window)
[2026-02-01T08:56:27.421Z] [BOT] 💾 Saved posted_jobs.json: 1716 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:29.212Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:29.212Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → location channel (2 total channels)
💾 BEFORE MERGE: 1716 jobs in memory (cached)
[2026-02-01T08:56:29.243Z] [BOT] ✅ Loaded V2 database: 1716 jobs
💾 DISK STATE: 1716 jobs on disk
[2026-02-01T08:56:29.243Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1716
[2026-02-01T08:56:29.246Z] [BOT] 🔀 Deep merged: Associate, Software Engineer @ ORG_b1e645a8 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:29.247Z] [BOT] 💾 AFTER MERGE: 1716 jobs (merged disk + memory)
[2026-02-01T08:56:29.248Z] [BOT] ✅ No jobs to archive (all 1716 jobs within 7-day window)
[2026-02-01T08:56:29.352Z] [BOT] 💾 Saved posted_jobs.json: 1716 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:30.851Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_2786613c Engineering
   Category: TECH (matched: "software")
[2026-02-01T08:56:30.851Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:56:31.198Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_2786613c Engineering in #💻・tech-jobs
  ✅ Industry: Jr. Software Engineer @ ORG_2786613c Engineering
[2026-02-01T08:56:31.199Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_2786613c Engineering → category channel (1 total channels)
[2026-02-01T08:56:31.199Z] [BOT] 💾 BEFORE MERGE: 1717 jobs in memory (cached)
[2026-02-01T08:56:31.232Z] [BOT] ✅ Loaded V2 database: 1716 jobs
💾 DISK STATE: 1716 jobs on disk
[2026-02-01T08:56:31.232Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1717
[2026-02-01T08:56:31.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:56:31.235Z] [BOT] 💾 AFTER MERGE: 1717 jobs (merged disk + memory)
[2026-02-01T08:56:31.236Z] [BOT] ✅ No jobs to archive (all 1717 jobs within 7-day window)
[2026-02-01T08:56:31.334Z] [BOT] 💾 Saved posted_jobs.json: 1717 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:33.059Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_2786613c Engineering in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:56:33.060Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_2786613c Engineering → location channel (2 total channels)
[2026-02-01T08:56:33.060Z] [BOT] 💾 BEFORE MERGE: 1717 jobs in memory (cached)
[2026-02-01T08:56:33.091Z] [BOT] ✅ Loaded V2 database: 1717 jobs
💾 DISK STATE: 1717 jobs on disk
[2026-02-01T08:56:33.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1717
[2026-02-01T08:56:33.095Z] [BOT] 🔀 Deep merged: Jr. Software Engineer @ ORG_2786613c Engineering (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:56:33.095Z] [BOT] 💾 AFTER MERGE: 1717 jobs (merged disk + memory)
[2026-02-01T08:56:33.096Z] [BOT] ✅ No jobs to archive (all 1717 jobs within 7-day window)
[2026-02-01T08:56:33.180Z] [BOT] 💾 Saved posted_jobs.json: 1717 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:37.681Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T08:56:37.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_302c7d46..." not found, but found as SHA256 "922933710b4afd38"
[2026-02-01T08:56:37.682Z] [BOT] ⏭️  Skipping duplicate: JID_b8e1326e (posted within 7 days)
[2026-02-01T08:56:37.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b697acb9..." not found, but found as SHA256 "3f3ca27589281f2f"
[2026-02-01T08:56:37.683Z] [BOT] ⏭️  Skipping duplicate: JID_4b7fae1b (posted within 7 days)
[2026-02-01T08:56:37.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_51f5780a-..." not found, but found as SHA256 "9ada02a6206b8677"
⏭️  Skipping duplicate: JID_1efeee05 (posted within 7 days)
[2026-02-01T08:56:37.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f1ccda0..." not found, but found as SHA256 "0639ddd5b3da0e76"
[2026-02-01T08:56:37.683Z] [BOT] ⏭️  Skipping duplicate: JID_1f1ccda0 (posted within 7 days)
[2026-02-01T08:56:37.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "929b50c775759f65"
[2026-02-01T08:56:37.684Z] [BOT] ⏭️  Skipping duplicate: JID_67340486-2025_jr2003035 (posted within 7 days)
[2026-02-01T08:56:37.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ce2c0c1d-argonne_ca..." not found, but found as SHA256 "9f4c0f522b1c5aba"
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_698aa5c9-_421023 (posted within 7 days)
[2026-02-01T08:56:37.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_270f8d13..." not found, but found as SHA256 "26605a34d3ee0fdc"
[2026-02-01T08:56:37.684Z] [BOT] ⏭️  Skipping duplicate: JID_823c1036 (posted within 7 days)
[2026-02-01T08:56:37.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aecec8b5..." not found, but found as SHA256 "7f04b9fd4244745b"
[2026-02-01T08:56:37.684Z] [BOT] ⏭️  Skipping duplicate: JID_aecec8b5 (posted within 7 days)
[2026-02-01T08:56:37.685Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_94a33323..." not found, but found as SHA256 "c6a4fabd37f556f9"
[2026-02-01T08:56:37.685Z] [BOT] ⏭️  Skipping duplicate: JID_94a33323 (posted within 7 days)
[2026-02-01T08:56:37.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_acbd555e..." not found, but found as SHA256 "9d2739a544282814"
⏭️  Skipping duplicate: JID_44d618c5 (posted within 7 days)
[2026-02-01T08:56:37.790Z] [BOT] ✅ Loaded pending queue: 2944 total (1197 pending, 50 enriched, 1697 posted)
[2026-02-01T08:56:37.986Z] [BOT] ✅ Saved pending queue: 2944 total (1197 pending, 40 enriched, 1707 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T08:56:37.987Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T08:56:38.079Z] [BOT] 📂 Loaded 11788 existing routing entries
[2026-02-01T08:56:38.211Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11798
   Timestamp: 2026-02-01T08:56:38.164Z
[2026-02-01T08:56:38.212Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T08:56:38.212Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T08:56:38.212Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-02-01T08:56:38.212Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 10 posts
     2. #📍・JID_6daed763: 6 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T08:56:38.213Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T08:56:38.213Z] [BOT] 💾 BEFORE MERGE: 1717 jobs in memory (cached)
[2026-02-01T08:56:38.245Z] [BOT] ✅ Loaded V2 database: 1717 jobs
💾 DISK STATE: 1717 jobs on disk
[2026-02-01T08:56:38.245Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1717
[2026-02-01T08:56:38.259Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1717 jobs (merged disk + memory)
✅ No jobs to archive (all 1717 jobs within 7-day window)
[2026-02-01T08:56:38.357Z] [BOT] 💾 Saved posted_jobs.json: 1717 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:56:38.357Z] [BOT] ✅ Database saved successfully
[2026-02-01T08:56:40.391Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*