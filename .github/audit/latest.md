# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T08:06:32.173Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T08:05:45.780Z] ========================================
[2026-02-01T08:05:45.782Z] Discord Bot Execution Log
[2026-02-01T08:05:45.782Z] Environment: GitHub Actions
[2026-02-01T08:05:45.782Z] Node Version: v20.20.0
[2026-02-01T08:05:45.782Z] ========================================
[2026-02-01T08:05:45.782Z] Environment Variables Check:
[2026-02-01T08:05:45.782Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T08:05:45.783Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T08:05:45.783Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T08:05:45.783Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T08:05:45.783Z] 
Multi-Channel Configuration:
[2026-02-01T08:05:45.783Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T08:05:45.783Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.783Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.783Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T08:05:45.783Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.783Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.783Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.783Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.784Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:05:45.784Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T08:05:45.784Z] 
Data Files Check:
[2026-02-01T08:05:45.784Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59086 bytes)
[2026-02-01T08:05:45.831Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9200231 bytes)
[2026-02-01T08:05:45.831Z] 
========================================
[2026-02-01T08:05:45.831Z] Starting Enhanced Discord Bot...
[2026-02-01T08:05:45.831Z] ========================================
[2026-02-01T08:05:46.381Z] [BOT] ✅ Loaded V2 database: 1677 jobs
[2026-02-01T08:05:46.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T08:05:46.927Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T08:05:46.927Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T08:05:47.033Z] [BOT] ✅ Loaded pending queue: 2944 total (1227 pending, 50 enriched, 1667 posted)
[2026-02-01T08:05:47.033Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T08:05:47.033Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:05:47.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T08:05:47.034Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:05:47.035Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T08:05:47.035Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T08:05:47.035Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T08:05:47.036Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T08:05:47.036Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T08:05:47.036Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T08:05:47.036Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T08:05:47.036Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T08:05:47.036Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T08:05:47.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T08:05:47.037Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T08:05:47.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T08:05:47.037Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T08:05:47.049Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T08:05:47.050Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager  at supabase
[2026-02-01T08:05:47.169Z] [BOT] ✅ Loaded pending queue: 2944 total (1227 pending, 50 enriched, 1667 posted)
[2026-02-01T08:05:47.363Z] [BOT] ✅ Saved pending queue: 2943 total (1227 pending, 49 enriched, 1667 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T08:05:47.364Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T08:05:47.365Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T08:05:47.365Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T08:05:47.365Z] [BOT] - Mission Operations Engineer @ nominal: new york, austin
   - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T08:05:47.367Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T08:05:47.369Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_facb5814ingo
[2026-02-01T08:05:47.369Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:05:47.385Z] [BOT ERROR] (node:3110) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T08:05:47.836Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_facb5814ingo in #💻・tech-jobs
[2026-02-01T08:05:47.836Z] [BOT] ✅ Industry: AI Research Engineer @ ORG_facb5814ingo
[2026-02-01T08:05:47.837Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_facb5814ingo → category channel (1 total channels)
[2026-02-01T08:05:47.837Z] [BOT] 💾 BEFORE MERGE: 1678 jobs in memory (cached)
[2026-02-01T08:05:47.871Z] [BOT] ✅ Loaded V2 database: 1677 jobs
💾 DISK STATE: 1677 jobs on disk
[2026-02-01T08:05:47.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1678
[2026-02-01T08:05:47.875Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:05:47.875Z] [BOT] 💾 AFTER MERGE: 1678 jobs (merged disk + memory)
[2026-02-01T08:05:47.876Z] [BOT] ✅ No jobs to archive (all 1678 jobs within 7-day window)
[2026-02-01T08:05:47.980Z] [BOT] 💾 Saved posted_jobs.json: 1678 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:49.720Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_facb5814ingo in #📍・JID_6daed763
[2026-02-01T08:05:49.721Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:05:49.721Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_facb5814ingo → location channel (2 total channels)
💾 BEFORE MERGE: 1678 jobs in memory (cached)
[2026-02-01T08:05:49.753Z] [BOT] ✅ Loaded V2 database: 1678 jobs
[2026-02-01T08:05:49.753Z] [BOT] 💾 DISK STATE: 1678 jobs on disk
[2026-02-01T08:05:49.753Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1678
[2026-02-01T08:05:49.757Z] [BOT] 🔀 Deep merged: AI Research Engineer @ ORG_facb5814ingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:05:49.757Z] [BOT] 💾 AFTER MERGE: 1678 jobs (merged disk + memory)
[2026-02-01T08:05:49.758Z] [BOT] ✅ No jobs to archive (all 1678 jobs within 7-day window)
[2026-02-01T08:05:49.847Z] [BOT] 💾 Saved posted_jobs.json: 1678 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:51.349Z] [BOT] 📍 [ROUTING] "BNY Analyst Program-Engineering - Developer" @ ORG_01d9a8c4
[2026-02-01T08:05:51.349Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:05:51.589Z] [BOT] ✅ Posted message: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #💻・tech-jobs
  ✅ Industry: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4
[2026-02-01T08:05:51.590Z] [BOT] 💾 Added channel posting: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 → category channel (1 total channels)
[2026-02-01T08:05:51.590Z] [BOT] 💾 BEFORE MERGE: 1679 jobs in memory (cached)
[2026-02-01T08:05:51.625Z] [BOT] ✅ Loaded V2 database: 1678 jobs
💾 DISK STATE: 1678 jobs on disk
[2026-02-01T08:05:51.625Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1679
[2026-02-01T08:05:51.629Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:05:51.629Z] [BOT] 💾 AFTER MERGE: 1679 jobs (merged disk + memory)
[2026-02-01T08:05:51.630Z] [BOT] ✅ No jobs to archive (all 1679 jobs within 7-day window)
[2026-02-01T08:05:51.739Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:53.390Z] [BOT] ✅ Posted message: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #🗽・JID_98d4f0de
[2026-02-01T08:05:53.390Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:05:53.390Z] [BOT] 💾 Added channel posting: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 → location channel (2 total channels)
[2026-02-01T08:05:53.390Z] [BOT] 💾 BEFORE MERGE: 1679 jobs in memory (cached)
[2026-02-01T08:05:53.422Z] [BOT] ✅ Loaded V2 database: 1679 jobs
💾 DISK STATE: 1679 jobs on disk
[2026-02-01T08:05:53.422Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1679
[2026-02-01T08:05:53.426Z] [BOT] 🔀 Deep merged: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:05:53.426Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1679 jobs (merged disk + memory)
[2026-02-01T08:05:53.427Z] [BOT] ✅ No jobs to archive (all 1679 jobs within 7-day window)
[2026-02-01T08:05:53.516Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:55.018Z] [BOT] 📍 [ROUTING] "Engineering Assistant I – Software" @ ORG_b1b059ca Systems
[2026-02-01T08:05:55.018Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:05:55.252Z] [BOT] ✅ Posted message: Engineering Assistant I – Software @ ORG_b1b059ca Systems in #💻・tech-jobs
[2026-02-01T08:05:55.252Z] [BOT] ✅ Industry: Engineering Assistant I – Software @ ORG_b1b059ca Systems
[2026-02-01T08:05:55.253Z] [BOT] 💾 Added channel posting: Engineering Assistant I – Software @ ORG_b1b059ca Systems → category channel (1 total channels)
[2026-02-01T08:05:55.253Z] [BOT] 💾 BEFORE MERGE: 1680 jobs in memory (cached)
[2026-02-01T08:05:55.286Z] [BOT] ✅ Loaded V2 database: 1679 jobs
💾 DISK STATE: 1679 jobs on disk
[2026-02-01T08:05:55.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1680
[2026-02-01T08:05:55.290Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:05:55.290Z] [BOT] 💾 AFTER MERGE: 1680 jobs (merged disk + memory)
[2026-02-01T08:05:55.291Z] [BOT] ✅ No jobs to archive (all 1680 jobs within 7-day window)
[2026-02-01T08:05:55.405Z] [BOT] 💾 Saved posted_jobs.json: 1680 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:57.117Z] [BOT] ✅ Posted message: Engineering Assistant I – Software @ ORG_b1b059ca Systems in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:05:57.117Z] [BOT] 💾 Added channel posting: Engineering Assistant I – Software @ ORG_b1b059ca Systems → location channel (2 total channels)
[2026-02-01T08:05:57.117Z] [BOT] 💾 BEFORE MERGE: 1680 jobs in memory (cached)
[2026-02-01T08:05:57.148Z] [BOT] ✅ Loaded V2 database: 1680 jobs
💾 DISK STATE: 1680 jobs on disk
[2026-02-01T08:05:57.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1680
[2026-02-01T08:05:57.151Z] [BOT] 🔀 Deep merged: Engineering Assistant I – Software @ ORG_b1b059ca Systems (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:05:57.151Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1680 jobs (merged disk + memory)
[2026-02-01T08:05:57.152Z] [BOT] ✅ No jobs to archive (all 1680 jobs within 7-day window)
[2026-02-01T08:05:57.234Z] [BOT] 💾 Saved posted_jobs.json: 1680 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:05:58.735Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3
[2026-02-01T08:05:58.736Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:05:58.914Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_e5ca4df3 in #💻・tech-jobs
[2026-02-01T08:05:58.914Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3
[2026-02-01T08:05:58.915Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_e5ca4df3 → category channel (1 total channels)
💾 BEFORE MERGE: 1681 jobs in memory (cached)
[2026-02-01T08:05:58.944Z] [BOT] ✅ Loaded V2 database: 1680 jobs
💾 DISK STATE: 1680 jobs on disk
[2026-02-01T08:05:58.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1681
[2026-02-01T08:05:58.947Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1681 jobs (merged disk + memory)
[2026-02-01T08:05:58.948Z] [BOT] ✅ No jobs to archive (all 1681 jobs within 7-day window)
[2026-02-01T08:05:59.031Z] [BOT] 💾 Saved posted_jobs.json: 1681 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:00.532Z] [BOT] 📍 [ROUTING] "Analyst, Data & Software Engineering" @ ORG_82e4502a Group
   Category: TECH (matched: "software")
[2026-02-01T08:06:00.533Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:06:00.771Z] [BOT] ✅ Posted message: Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・tech-jobs
  ✅ Industry: Analyst, Data & Software Engineering @ ORG_82e4502a Group
[2026-02-01T08:06:00.772Z] [BOT] 💾 Added channel posting: Analyst, Data & Software Engineering @ ORG_82e4502a Group → category channel (1 total channels)
[2026-02-01T08:06:00.772Z] [BOT] 💾 BEFORE MERGE: 1682 jobs in memory (cached)
[2026-02-01T08:06:00.805Z] [BOT] ✅ Loaded V2 database: 1681 jobs
💾 DISK STATE: 1681 jobs on disk
[2026-02-01T08:06:00.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1682
[2026-02-01T08:06:00.808Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:06:00.808Z] [BOT] 💾 AFTER MERGE: 1682 jobs (merged disk + memory)
[2026-02-01T08:06:00.809Z] [BOT] ✅ No jobs to archive (all 1682 jobs within 7-day window)
[2026-02-01T08:06:00.899Z] [BOT] 💾 Saved posted_jobs.json: 1682 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:02.711Z] [BOT] ✅ Posted message: Analyst, Data & Software Engineering @ ORG_82e4502a Group in #📍・JID_6daed763
[2026-02-01T08:06:02.711Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:06:02.711Z] [BOT] 💾 Added channel posting: Analyst, Data & Software Engineering @ ORG_82e4502a Group → location channel (2 total channels)
[2026-02-01T08:06:02.711Z] [BOT] 💾 BEFORE MERGE: 1682 jobs in memory (cached)
[2026-02-01T08:06:02.743Z] [BOT] ✅ Loaded V2 database: 1682 jobs
💾 DISK STATE: 1682 jobs on disk
[2026-02-01T08:06:02.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1682
[2026-02-01T08:06:02.747Z] [BOT] 🔀 Deep merged: Analyst, Data & Software Engineering @ ORG_82e4502a Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:06:02.747Z] [BOT] 💾 AFTER MERGE: 1682 jobs (merged disk + memory)
[2026-02-01T08:06:02.748Z] [BOT] ✅ No jobs to archive (all 1682 jobs within 7-day window)
[2026-02-01T08:06:02.836Z] [BOT] 💾 Saved posted_jobs.json: 1682 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:04.338Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_1940d70c
   Category: TECH (matched: "software")
[2026-02-01T08:06:04.338Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:06:04.567Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_1940d70c in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_1940d70c
[2026-02-01T08:06:04.568Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_1940d70c → category channel (1 total channels)
💾 BEFORE MERGE: 1683 jobs in memory (cached)
[2026-02-01T08:06:04.617Z] [BOT] ✅ Loaded V2 database: 1682 jobs
💾 DISK STATE: 1682 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1683
[2026-02-01T08:06:04.620Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:06:04.620Z] [BOT] 💾 AFTER MERGE: 1683 jobs (merged disk + memory)
[2026-02-01T08:06:04.621Z] [BOT] ✅ No jobs to archive (all 1683 jobs within 7-day window)
[2026-02-01T08:06:04.708Z] [BOT] 💾 Saved posted_jobs.json: 1683 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:06.357Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_1940d70c in #📍・JID_6daed763
[2026-02-01T08:06:06.357Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:06:06.357Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_1940d70c → location channel (2 total channels)
[2026-02-01T08:06:06.357Z] [BOT] 💾 BEFORE MERGE: 1683 jobs in memory (cached)
[2026-02-01T08:06:06.387Z] [BOT] ✅ Loaded V2 database: 1683 jobs
💾 DISK STATE: 1683 jobs on disk
[2026-02-01T08:06:06.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1683
[2026-02-01T08:06:06.390Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_1940d70c (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:06:06.390Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1683 jobs (merged disk + memory)
[2026-02-01T08:06:06.391Z] [BOT] ✅ No jobs to archive (all 1683 jobs within 7-day window)
[2026-02-01T08:06:06.476Z] [BOT] 💾 Saved posted_jobs.json: 1683 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:07.977Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_dbcd5e7b & Wonder
[2026-02-01T08:06:07.977Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:06:08.122Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_dbcd5e7b & Wonder in #💻・tech-jobs
[2026-02-01T08:06:08.122Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_dbcd5e7b & Wonder
[2026-02-01T08:06:08.122Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_dbcd5e7b & Wonder → category channel (1 total channels)
[2026-02-01T08:06:08.123Z] [BOT] 💾 BEFORE MERGE: 1684 jobs in memory (cached)
[2026-02-01T08:06:08.154Z] [BOT] ✅ Loaded V2 database: 1683 jobs
💾 DISK STATE: 1683 jobs on disk
[2026-02-01T08:06:08.154Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1684
[2026-02-01T08:06:08.157Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:06:08.157Z] [BOT] 💾 AFTER MERGE: 1684 jobs (merged disk + memory)
[2026-02-01T08:06:08.158Z] [BOT] ✅ No jobs to archive (all 1684 jobs within 7-day window)
[2026-02-01T08:06:08.269Z] [BOT] 💾 Saved posted_jobs.json: 1684 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:10.159Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_dbcd5e7b & Wonder in #📍・JID_6daed763
[2026-02-01T08:06:10.159Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:06:10.159Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_dbcd5e7b & Wonder → location channel (2 total channels)
[2026-02-01T08:06:10.159Z] [BOT] 💾 BEFORE MERGE: 1684 jobs in memory (cached)
[2026-02-01T08:06:10.189Z] [BOT] ✅ Loaded V2 database: 1684 jobs
💾 DISK STATE: 1684 jobs on disk
[2026-02-01T08:06:10.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1684
[2026-02-01T08:06:10.193Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_dbcd5e7b & Wonder (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:06:10.193Z] [BOT] 💾 AFTER MERGE: 1684 jobs (merged disk + memory)
[2026-02-01T08:06:10.194Z] [BOT] ✅ No jobs to archive (all 1684 jobs within 7-day window)
[2026-02-01T08:06:10.275Z] [BOT] 💾 Saved posted_jobs.json: 1684 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:11.777Z] [BOT] 📍 [ROUTING] "CLI Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:06:11.984Z] [BOT] ✅ Posted message: CLI Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: CLI Engineer @ supabase
[2026-02-01T08:06:11.985Z] [BOT] 💾 Added channel posting: CLI Engineer @ supabase → category channel (1 total channels)
💾 BEFORE MERGE: 1685 jobs in memory (cached)
[2026-02-01T08:06:12.016Z] [BOT] ✅ Loaded V2 database: 1684 jobs
💾 DISK STATE: 1684 jobs on disk
[2026-02-01T08:06:12.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1685
[2026-02-01T08:06:12.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1685 jobs (merged disk + memory)
[2026-02-01T08:06:12.020Z] [BOT] ✅ No jobs to archive (all 1685 jobs within 7-day window)
[2026-02-01T08:06:12.108Z] [BOT] 💾 Saved posted_jobs.json: 1685 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:13.771Z] [BOT] ✅ Posted message: CLI Engineer @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T08:06:13.771Z] [BOT] 💾 Added channel posting: CLI Engineer @ supabase → location channel (2 total channels)
[2026-02-01T08:06:13.772Z] [BOT] 💾 BEFORE MERGE: 1685 jobs in memory (cached)
[2026-02-01T08:06:13.806Z] [BOT] ✅ Loaded V2 database: 1685 jobs
💾 DISK STATE: 1685 jobs on disk
[2026-02-01T08:06:13.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1685
[2026-02-01T08:06:13.809Z] [BOT] 🔀 Deep merged: CLI Engineer @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:06:13.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1685 jobs (merged disk + memory)
[2026-02-01T08:06:13.810Z] [BOT] ✅ No jobs to archive (all 1685 jobs within 7-day window)
[2026-02-01T08:06:13.900Z] [BOT] 💾 Saved posted_jobs.json: 1685 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:18.404Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T08:06:18.404Z] [BOT] 📍 [ROUTING] "Artificial Intelligence Graduate" @ ORG_09b26be7
   Category: AI (matched: "machine learning")
[2026-02-01T08:06:18.405Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T08:06:18.610Z] [BOT] ✅ Posted message: Artificial Intelligence Graduate @ ORG_09b26be7 in #🤖・ai-jobs
  ✅ Industry: Artificial Intelligence Graduate @ ORG_09b26be7
[2026-02-01T08:06:18.611Z] [BOT] 💾 Added channel posting: Artificial Intelligence Graduate @ ORG_09b26be7 → category channel (1 total channels)
[2026-02-01T08:06:18.611Z] [BOT] 💾 BEFORE MERGE: 1686 jobs in memory (cached)
[2026-02-01T08:06:18.643Z] [BOT] ✅ Loaded V2 database: 1685 jobs
[2026-02-01T08:06:18.643Z] [BOT] 💾 DISK STATE: 1685 jobs on disk
[2026-02-01T08:06:18.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1686
[2026-02-01T08:06:18.646Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:06:18.646Z] [BOT] 💾 AFTER MERGE: 1686 jobs (merged disk + memory)
[2026-02-01T08:06:18.647Z] [BOT] ✅ No jobs to archive (all 1686 jobs within 7-day window)
[2026-02-01T08:06:18.736Z] [BOT] 💾 Saved posted_jobs.json: 1686 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:20.519Z] [BOT] ✅ Posted message: Artificial Intelligence Graduate @ ORG_09b26be7 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:06:20.520Z] [BOT] 💾 Added channel posting: Artificial Intelligence Graduate @ ORG_09b26be7 → location channel (2 total channels)
💾 BEFORE MERGE: 1686 jobs in memory (cached)
[2026-02-01T08:06:20.554Z] [BOT] ✅ Loaded V2 database: 1686 jobs
💾 DISK STATE: 1686 jobs on disk
[2026-02-01T08:06:20.554Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1686
[2026-02-01T08:06:20.557Z] [BOT] 🔀 Deep merged: Artificial Intelligence Graduate @ ORG_09b26be7 (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:06:20.557Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1686 jobs (merged disk + memory)
[2026-02-01T08:06:20.558Z] [BOT] ✅ No jobs to archive (all 1686 jobs within 7-day window)
[2026-02-01T08:06:20.650Z] [BOT] 💾 Saved posted_jobs.json: 1686 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:22.152Z] [BOT] 📍 [ROUTING] "Founder in Residence - Embedfi - SMB Hardware Leasing" @ ORG_11fb682b Fund
   Category: AI (matched: "artificial intelligence")
[2026-02-01T08:06:22.153Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T08:06:22.322Z] [BOT] ✅ Posted message: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🤖・ai-jobs
  ✅ Industry: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund
[2026-02-01T08:06:22.323Z] [BOT] 💾 Added channel posting: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund → category channel (1 total channels)
[2026-02-01T08:06:22.323Z] [BOT] 💾 BEFORE MERGE: 1687 jobs in memory (cached)
[2026-02-01T08:06:22.353Z] [BOT] ✅ Loaded V2 database: 1686 jobs
💾 DISK STATE: 1686 jobs on disk
[2026-02-01T08:06:22.353Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1687
[2026-02-01T08:06:22.356Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:06:22.356Z] [BOT] 💾 AFTER MERGE: 1687 jobs (merged disk + memory)
[2026-02-01T08:06:22.357Z] [BOT] ✅ No jobs to archive (all 1687 jobs within 7-day window)
[2026-02-01T08:06:22.439Z] [BOT] 💾 Saved posted_jobs.json: 1687 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:24.124Z] [BOT] ✅ Posted message: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T08:06:24.124Z] [BOT] 💾 Added channel posting: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund → location channel (2 total channels)
[2026-02-01T08:06:24.124Z] [BOT] 💾 BEFORE MERGE: 1687 jobs in memory (cached)
[2026-02-01T08:06:24.154Z] [BOT] ✅ Loaded V2 database: 1687 jobs
💾 DISK STATE: 1687 jobs on disk
[2026-02-01T08:06:24.154Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1687
[2026-02-01T08:06:24.157Z] [BOT] 🔀 Deep merged: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:06:24.157Z] [BOT] 💾 AFTER MERGE: 1687 jobs (merged disk + memory)
[2026-02-01T08:06:24.158Z] [BOT] ✅ No jobs to archive (all 1687 jobs within 7-day window)
[2026-02-01T08:06:24.245Z] [BOT] 💾 Saved posted_jobs.json: 1687 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:28.748Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T08:06:28.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_554fcc86..." not found, but found as SHA256 "f94a5d094bdb49ec"
⏭️  Skipping duplicate: JID_554fcc86 (posted within 7 days)
[2026-02-01T08:06:28.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ebdfa283..." not found, but found as SHA256 "4aafc0019c0cbd15"
⏭️  Skipping duplicate: JID_a3f17800-cx_1001-JID_0788be3f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_42553b2f..." not found, but found as SHA256 "d6da4b6c6534cd2c"
⏭️  Skipping duplicate: JID_e0e8d951 (posted within 7 days)
[2026-02-01T08:06:28.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7f93600c..." not found, but found as SHA256 "b795cc12bfba91a1"
[2026-02-01T08:06:28.750Z] [BOT] ⏭️  Skipping duplicate: JID_f70ba3d0-costar_campus-JID_c6957ea8-ca_r37014 (posted within 7 days)
[2026-02-01T08:06:28.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6fe9d7cd..." not found, but found as SHA256 "83b03400b471e19a"
[2026-02-01T08:06:28.750Z] [BOT] ⏭️  Skipping duplicate: JID_c71e4b07-date_jr100105 (posted within 7 days)
[2026-02-01T08:06:28.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_92656f77-..." not found, but found as SHA256 "aa5cd9ba61777d33"
[2026-02-01T08:06:28.751Z] [BOT] ⏭️  Skipping duplicate: JID_77cb80d2-engineer_r6157 (posted within 7 days)
[2026-02-01T08:06:28.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76a92bf0..." not found, but found as SHA256 "1bccc08b1ffb7fa6"
[2026-02-01T08:06:28.751Z] [BOT] ⏭️  Skipping duplicate: JID_2065982b-engineer_r320511 (posted within 7 days)
[2026-02-01T08:06:28.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_165b6c5e-aveva_..." not found, but found as SHA256 "199750a442582541"
[2026-02-01T08:06:28.751Z] [BOT] ⏭️  Skipping duplicate: JID_165b6c5e-aveva_careers-JID_e98af70d-us_r011630 (posted within 7 days)
[2026-02-01T08:06:28.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_360d570e-..." not found, but found as SHA256 "3eca60b66677840e"
[2026-02-01T08:06:28.752Z] [BOT] ⏭️  Skipping duplicate: JID_8db734ba (posted within 7 days)
[2026-02-01T08:06:28.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8e08c5cd-..." not found, but found as SHA256 "932665f86092e42e"
[2026-02-01T08:06:28.752Z] [BOT] ⏭️  Skipping duplicate: JID_afadcbd6 (posted within 7 days)
[2026-02-01T08:06:28.866Z] [BOT] ✅ Loaded pending queue: 2943 total (1227 pending, 49 enriched, 1667 posted)
[2026-02-01T08:06:29.038Z] [BOT] ✅ Saved pending queue: 2943 total (1227 pending, 39 enriched, 1677 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T08:06:29.039Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T08:06:29.126Z] [BOT] 📂 Loaded 11758 existing routing entries
[2026-02-01T08:06:29.256Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T08:06:29.257Z] [BOT] New entries: 10
   Total entries: 11768
   Timestamp: 2026-02-01T08:06:29.210Z
[2026-02-01T08:06:29.259Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
   Successful: 19
   Failed: 0
   Skipped: 9
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #📍・JID_6daed763: 6 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1687 jobs in memory (cached)
[2026-02-01T08:06:29.304Z] [BOT] ✅ Loaded V2 database: 1687 jobs
💾 DISK STATE: 1687 jobs on disk
[2026-02-01T08:06:29.305Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1687
[2026-02-01T08:06:29.309Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1687 jobs (merged disk + memory)
[2026-02-01T08:06:29.310Z] [BOT] ✅ No jobs to archive (all 1687 jobs within 7-day window)
[2026-02-01T08:06:29.404Z] [BOT] 💾 Saved posted_jobs.json: 1687 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:06:29.404Z] [BOT] ✅ Database saved successfully
[2026-02-01T08:06:31.441Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3110) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*