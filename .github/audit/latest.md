# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T15:26:04.756Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T15:25:15.347Z] ========================================
[2026-02-01T15:25:15.349Z] Discord Bot Execution Log
[2026-02-01T15:25:15.350Z] Environment: GitHub Actions
[2026-02-01T15:25:15.350Z] Node Version: v20.20.0
[2026-02-01T15:25:15.350Z] ========================================
[2026-02-01T15:25:15.350Z] Environment Variables Check:
[2026-02-01T15:25:15.350Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T15:25:15.350Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T15:25:15.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T15:25:15.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T15:25:15.350Z] 
Multi-Channel Configuration:
[2026-02-01T15:25:15.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T15:25:15.351Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T15:25:15.351Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:25:15.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T15:25:15.351Z] 
Data Files Check:
[2026-02-01T15:25:15.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59400 bytes)
[2026-02-01T15:25:15.403Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10103799 bytes)
[2026-02-01T15:25:15.403Z] 
========================================
[2026-02-01T15:25:15.403Z] Starting Enhanced Discord Bot...
[2026-02-01T15:25:15.403Z] ========================================
[2026-02-01T15:25:15.972Z] [BOT] ✅ Loaded V2 database: 1957 jobs
[2026-02-01T15:25:16.609Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T15:25:16.610Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T15:25:16.610Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T15:25:16.726Z] [BOT] ✅ Loaded pending queue: 2948 total (951 pending, 50 enriched, 1947 posted)
[2026-02-01T15:25:16.727Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:25:16.728Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T15:25:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T15:25:16.728Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:25:16.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T15:25:16.729Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T15:25:16.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T15:25:16.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T15:25:16.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T15:25:16.730Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T15:25:16.730Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T15:25:16.731Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T15:25:16.731Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T15:25:16.731Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T15:25:16.731Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T15:25:16.745Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T15:25:16.745Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T15:25:16.746Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T15:25:16.746Z] [BOT] 📋 After multi-location grouping: 28 unique jobs to post
[2026-02-01T15:25:16.747Z] [BOT] (14 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: dallas, san jose, san diego, san francisco, flower mound, new york
[2026-02-01T15:25:16.747Z] [BOT] - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
   - Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T15:25:16.749Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T15:25:16.750Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T15:25:16.750Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:16.767Z] [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T15:25:17.122Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:25:17.123Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:25:17.123Z] [BOT] 💾 BEFORE MERGE: 1958 jobs in memory (cached)
[2026-02-01T15:25:17.165Z] [BOT] ✅ Loaded V2 database: 1957 jobs
💾 DISK STATE: 1957 jobs on disk
[2026-02-01T15:25:17.165Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1958
[2026-02-01T15:25:17.170Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:17.170Z] [BOT] 💾 AFTER MERGE: 1958 jobs (merged disk + memory)
[2026-02-01T15:25:17.171Z] [BOT] ✅ No jobs to archive (all 1958 jobs within 7-day window)
[2026-02-01T15:25:17.314Z] [BOT] 💾 Saved posted_jobs.json: 1958 active jobs
[2026-02-01T15:25:17.317Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:19.031Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T15:25:19.031Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:19.032Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:25:19.032Z] [BOT] 💾 BEFORE MERGE: 1958 jobs in memory (cached)
[2026-02-01T15:25:19.070Z] [BOT] ✅ Loaded V2 database: 1958 jobs
[2026-02-01T15:25:19.070Z] [BOT] 💾 DISK STATE: 1958 jobs on disk
[2026-02-01T15:25:19.070Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1958
[2026-02-01T15:25:19.075Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:19.075Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1958 jobs (merged disk + memory)
[2026-02-01T15:25:19.076Z] [BOT] ✅ No jobs to archive (all 1958 jobs within 7-day window)
[2026-02-01T15:25:19.176Z] [BOT] 💾 Saved posted_jobs.json: 1958 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:20.679Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_7f4a1e5b Systems
[2026-02-01T15:25:20.679Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:20.873Z] [BOT] ✅ Posted message: Software Developer @ ORG_7f4a1e5b Systems in #💻・tech-jobs
[2026-02-01T15:25:20.874Z] [BOT] ✅ Industry: Software Developer @ ORG_7f4a1e5b Systems
[2026-02-01T15:25:20.874Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_7f4a1e5b Systems → category channel (1 total channels)
[2026-02-01T15:25:20.874Z] [BOT] 💾 BEFORE MERGE: 1959 jobs in memory (cached)
[2026-02-01T15:25:20.909Z] [BOT] ✅ Loaded V2 database: 1958 jobs
[2026-02-01T15:25:20.909Z] [BOT] 💾 DISK STATE: 1958 jobs on disk
[2026-02-01T15:25:20.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1959
[2026-02-01T15:25:20.913Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:20.913Z] [BOT] 💾 AFTER MERGE: 1959 jobs (merged disk + memory)
[2026-02-01T15:25:20.915Z] [BOT] ✅ No jobs to archive (all 1959 jobs within 7-day window)
[2026-02-01T15:25:21.022Z] [BOT] 💾 Saved posted_jobs.json: 1959 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:22.850Z] [BOT] ✅ Posted message: Software Developer @ ORG_7f4a1e5b Systems in #📍・JID_6daed763
[2026-02-01T15:25:22.850Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:22.850Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_7f4a1e5b Systems → location channel (2 total channels)
[2026-02-01T15:25:22.850Z] [BOT] 💾 BEFORE MERGE: 1959 jobs in memory (cached)
[2026-02-01T15:25:22.885Z] [BOT] ✅ Loaded V2 database: 1959 jobs
💾 DISK STATE: 1959 jobs on disk
[2026-02-01T15:25:22.886Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1959
[2026-02-01T15:25:22.890Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_7f4a1e5b Systems (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:22.890Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1959 jobs (merged disk + memory)
[2026-02-01T15:25:22.891Z] [BOT] ✅ No jobs to archive (all 1959 jobs within 7-day window)
[2026-02-01T15:25:22.996Z] [BOT] 💾 Saved posted_jobs.json: 1959 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:24.497Z] [BOT] 📍 [ROUTING] "Embedded Software Engineer" @ ORG_05d2f9ea
[2026-02-01T15:25:24.497Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:24.885Z] [BOT] ✅ Posted message: Embedded Software Engineer @ ORG_05d2f9ea in #💻・tech-jobs
[2026-02-01T15:25:24.886Z] [BOT] ✅ Industry: Embedded Software Engineer @ ORG_05d2f9ea
[2026-02-01T15:25:24.886Z] [BOT] 💾 Added channel posting: Embedded Software Engineer @ ORG_05d2f9ea → category channel (1 total channels)
[2026-02-01T15:25:24.887Z] [BOT] 💾 BEFORE MERGE: 1960 jobs in memory (cached)
[2026-02-01T15:25:24.922Z] [BOT] ✅ Loaded V2 database: 1959 jobs
💾 DISK STATE: 1959 jobs on disk
[2026-02-01T15:25:24.923Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1960
[2026-02-01T15:25:24.928Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:24.928Z] [BOT] 💾 AFTER MERGE: 1960 jobs (merged disk + memory)
[2026-02-01T15:25:24.929Z] [BOT] ✅ No jobs to archive (all 1960 jobs within 7-day window)
[2026-02-01T15:25:25.037Z] [BOT] 💾 Saved posted_jobs.json: 1960 active jobs
[2026-02-01T15:25:25.037Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:26.776Z] [BOT] ✅ Posted message: Embedded Software Engineer @ ORG_05d2f9ea in #📍・JID_6daed763
[2026-02-01T15:25:26.776Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:26.777Z] [BOT] 💾 Added channel posting: Embedded Software Engineer @ ORG_05d2f9ea → location channel (2 total channels)
[2026-02-01T15:25:26.777Z] [BOT] 💾 BEFORE MERGE: 1960 jobs in memory (cached)
[2026-02-01T15:25:26.812Z] [BOT] ✅ Loaded V2 database: 1960 jobs
💾 DISK STATE: 1960 jobs on disk
[2026-02-01T15:25:26.812Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1960
[2026-02-01T15:25:26.815Z] [BOT] 🔀 Deep merged: Embedded Software Engineer @ ORG_05d2f9ea (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:26.815Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1960 jobs (merged disk + memory)
[2026-02-01T15:25:26.816Z] [BOT] ✅ No jobs to archive (all 1960 jobs within 7-day window)
[2026-02-01T15:25:26.935Z] [BOT] 💾 Saved posted_jobs.json: 1960 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:28.437Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_6a4c3a44 Identity
[2026-02-01T15:25:28.438Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:28.729Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_6a4c3a44 Identity in #💻・tech-jobs
[2026-02-01T15:25:28.729Z] [BOT] ✅ Industry: Software Engineer I @ ORG_6a4c3a44 Identity
[2026-02-01T15:25:28.730Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_6a4c3a44 Identity → category channel (1 total channels)
[2026-02-01T15:25:28.730Z] [BOT] 💾 BEFORE MERGE: 1961 jobs in memory (cached)
[2026-02-01T15:25:28.764Z] [BOT] ✅ Loaded V2 database: 1960 jobs
💾 DISK STATE: 1960 jobs on disk
[2026-02-01T15:25:28.765Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1961
[2026-02-01T15:25:28.768Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:28.768Z] [BOT] 💾 AFTER MERGE: 1961 jobs (merged disk + memory)
[2026-02-01T15:25:28.769Z] [BOT] ✅ No jobs to archive (all 1961 jobs within 7-day window)
[2026-02-01T15:25:28.860Z] [BOT] 💾 Saved posted_jobs.json: 1961 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:30.583Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_6a4c3a44 Identity in #📍・JID_6daed763
[2026-02-01T15:25:30.583Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:30.583Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_6a4c3a44 Identity → location channel (2 total channels)
[2026-02-01T15:25:30.584Z] [BOT] 💾 BEFORE MERGE: 1961 jobs in memory (cached)
[2026-02-01T15:25:30.616Z] [BOT] ✅ Loaded V2 database: 1961 jobs
💾 DISK STATE: 1961 jobs on disk
[2026-02-01T15:25:30.617Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1961
[2026-02-01T15:25:30.620Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_6a4c3a44 Identity (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:30.620Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1961 jobs (merged disk + memory)
[2026-02-01T15:25:30.621Z] [BOT] ✅ No jobs to archive (all 1961 jobs within 7-day window)
[2026-02-01T15:25:30.713Z] [BOT] 💾 Saved posted_jobs.json: 1961 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:32.214Z] [BOT] 📍 [ROUTING] "Associate Engineer, Software" @ ORG_1c0f1132 Carribean Group
[2026-02-01T15:25:32.215Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:32.565Z] [BOT] ✅ Posted message: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group in #💻・tech-jobs
  ✅ Industry: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group
[2026-02-01T15:25:32.566Z] [BOT] 💾 Added channel posting: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group → category channel (1 total channels)
[2026-02-01T15:25:32.566Z] [BOT] 💾 BEFORE MERGE: 1962 jobs in memory (cached)
[2026-02-01T15:25:32.601Z] [BOT] ✅ Loaded V2 database: 1961 jobs
💾 DISK STATE: 1961 jobs on disk
[2026-02-01T15:25:32.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1962
[2026-02-01T15:25:32.605Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:32.605Z] [BOT] 💾 AFTER MERGE: 1962 jobs (merged disk + memory)
[2026-02-01T15:25:32.606Z] [BOT] ✅ No jobs to archive (all 1962 jobs within 7-day window)
[2026-02-01T15:25:32.709Z] [BOT] 💾 Saved posted_jobs.json: 1962 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:34.507Z] [BOT] ✅ Posted message: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:34.507Z] [BOT] 💾 Added channel posting: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group → location channel (2 total channels)
[2026-02-01T15:25:34.507Z] [BOT] 💾 BEFORE MERGE: 1962 jobs in memory (cached)
[2026-02-01T15:25:34.541Z] [BOT] ✅ Loaded V2 database: 1962 jobs
[2026-02-01T15:25:34.541Z] [BOT] 💾 DISK STATE: 1962 jobs on disk
[2026-02-01T15:25:34.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1962
[2026-02-01T15:25:34.544Z] [BOT] 🔀 Deep merged: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:34.545Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1962 jobs (merged disk + memory)
[2026-02-01T15:25:34.546Z] [BOT] ✅ No jobs to archive (all 1962 jobs within 7-day window)
[2026-02-01T15:25:34.639Z] [BOT] 💾 Saved posted_jobs.json: 1962 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:36.141Z] [BOT] 📍 [ROUTING] "Junior Full Stack Software Engineer" @ ORG_b891e1e7 Technologies
[2026-02-01T15:25:36.141Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:36.332Z] [BOT] ✅ Posted message: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・tech-jobs
[2026-02-01T15:25:36.332Z] [BOT] ✅ Industry: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies
[2026-02-01T15:25:36.333Z] [BOT] 💾 Added channel posting: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies → category channel (1 total channels)
[2026-02-01T15:25:36.333Z] [BOT] 💾 BEFORE MERGE: 1963 jobs in memory (cached)
[2026-02-01T15:25:36.367Z] [BOT] ✅ Loaded V2 database: 1962 jobs
💾 DISK STATE: 1962 jobs on disk
[2026-02-01T15:25:36.368Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1963
[2026-02-01T15:25:36.371Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1963 jobs (merged disk + memory)
[2026-02-01T15:25:36.372Z] [BOT] ✅ No jobs to archive (all 1963 jobs within 7-day window)
[2026-02-01T15:25:36.487Z] [BOT] 💾 Saved posted_jobs.json: 1963 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:38.160Z] [BOT] ✅ Posted message: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:38.161Z] [BOT] 💾 Added channel posting: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies → location channel (2 total channels)
[2026-02-01T15:25:38.161Z] [BOT] 💾 BEFORE MERGE: 1963 jobs in memory (cached)
[2026-02-01T15:25:38.195Z] [BOT] ✅ Loaded V2 database: 1963 jobs
💾 DISK STATE: 1963 jobs on disk
[2026-02-01T15:25:38.195Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1963
[2026-02-01T15:25:38.199Z] [BOT] 🔀 Deep merged: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:25:38.199Z] [BOT] 💾 AFTER MERGE: 1963 jobs (merged disk + memory)
[2026-02-01T15:25:38.201Z] [BOT] ✅ No jobs to archive (all 1963 jobs within 7-day window)
[2026-02-01T15:25:38.291Z] [BOT] 💾 Saved posted_jobs.json: 1963 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:39.794Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:39.991Z] [BOT] ✅ Posted message: Undergrad Software Engineer @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer @ ORG_dc7620eb
[2026-02-01T15:25:39.992Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-01T15:25:39.992Z] [BOT] 💾 BEFORE MERGE: 1964 jobs in memory (cached)
[2026-02-01T15:25:40.026Z] [BOT] ✅ Loaded V2 database: 1963 jobs
💾 DISK STATE: 1963 jobs on disk
[2026-02-01T15:25:40.027Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1964
[2026-02-01T15:25:40.030Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:40.030Z] [BOT] 💾 AFTER MERGE: 1964 jobs (merged disk + memory)
[2026-02-01T15:25:40.031Z] [BOT] ✅ No jobs to archive (all 1964 jobs within 7-day window)
[2026-02-01T15:25:40.135Z] [BOT] 💾 Saved posted_jobs.json: 1964 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:41.900Z] [BOT] ✅ Posted message: Undergrad Software Engineer @ ORG_dc7620eb in #🌲・JID_efdf5921
[2026-02-01T15:25:41.901Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:25:41.901Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer @ ORG_dc7620eb → location channel (2 total channels)
[2026-02-01T15:25:41.901Z] [BOT] 💾 BEFORE MERGE: 1964 jobs in memory (cached)
[2026-02-01T15:25:41.935Z] [BOT] ✅ Loaded V2 database: 1964 jobs
💾 DISK STATE: 1964 jobs on disk
[2026-02-01T15:25:41.936Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1964
[2026-02-01T15:25:41.939Z] [BOT] 🔀 Deep merged: Undergrad Software Engineer @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:41.939Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1964 jobs (merged disk + memory)
[2026-02-01T15:25:41.940Z] [BOT] ✅ No jobs to archive (all 1964 jobs within 7-day window)
[2026-02-01T15:25:42.054Z] [BOT] 💾 Saved posted_jobs.json: 1964 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:43.556Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer I" @ ORG_76725f91
[2026-02-01T15:25:43.556Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:25:43.816Z] [BOT] ✅ Posted message: Forward Deployed Software Engineer I @ ORG_76725f91 in #💻・tech-jobs
[2026-02-01T15:25:43.816Z] [BOT] ✅ Industry: Forward Deployed Software Engineer I @ ORG_76725f91
[2026-02-01T15:25:43.817Z] [BOT] 💾 Added channel posting: Forward Deployed Software Engineer I @ ORG_76725f91 → category channel (1 total channels)
[2026-02-01T15:25:43.817Z] [BOT] 💾 BEFORE MERGE: 1965 jobs in memory (cached)
[2026-02-01T15:25:43.850Z] [BOT] ✅ Loaded V2 database: 1964 jobs
💾 DISK STATE: 1964 jobs on disk
[2026-02-01T15:25:43.851Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1965
[2026-02-01T15:25:43.854Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1965 jobs (merged disk + memory)
[2026-02-01T15:25:43.855Z] [BOT] ✅ No jobs to archive (all 1965 jobs within 7-day window)
[2026-02-01T15:25:43.945Z] [BOT] 💾 Saved posted_jobs.json: 1965 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:45.631Z] [BOT] ✅ Posted message: Forward Deployed Software Engineer I @ ORG_76725f91 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:25:45.632Z] [BOT] 💾 Added channel posting: Forward Deployed Software Engineer I @ ORG_76725f91 → location channel (2 total channels)
[2026-02-01T15:25:45.632Z] [BOT] 💾 BEFORE MERGE: 1965 jobs in memory (cached)
[2026-02-01T15:25:45.666Z] [BOT] ✅ Loaded V2 database: 1965 jobs
[2026-02-01T15:25:45.667Z] [BOT] 💾 DISK STATE: 1965 jobs on disk
[2026-02-01T15:25:45.667Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1965
[2026-02-01T15:25:45.670Z] [BOT] 🔀 Deep merged: Forward Deployed Software Engineer I @ ORG_76725f91 (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:45.670Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1965 jobs (merged disk + memory)
[2026-02-01T15:25:45.671Z] [BOT] ✅ No jobs to archive (all 1965 jobs within 7-day window)
[2026-02-01T15:25:45.782Z] [BOT] 💾 Saved posted_jobs.json: 1965 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:50.281Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T15:25:50.283Z] [BOT] 📍 [ROUTING] "Software Developer I - AI Developer" @ ORG_722b29f2 State University
[2026-02-01T15:25:50.283Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:25:50.594Z] [BOT] ✅ Posted message: Software Developer I - AI Developer @ ORG_722b29f2 State University in #🤖・ai-jobs
[2026-02-01T15:25:50.594Z] [BOT] ✅ Industry: Software Developer I - AI Developer @ ORG_722b29f2 State University
[2026-02-01T15:25:50.595Z] [BOT] 💾 Added channel posting: Software Developer I - AI Developer @ ORG_722b29f2 State University → category channel (1 total channels)
[2026-02-01T15:25:50.595Z] [BOT] 💾 BEFORE MERGE: 1966 jobs in memory (cached)
[2026-02-01T15:25:50.629Z] [BOT] ✅ Loaded V2 database: 1965 jobs
💾 DISK STATE: 1965 jobs on disk
[2026-02-01T15:25:50.629Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1966
[2026-02-01T15:25:50.632Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:50.632Z] [BOT] 💾 AFTER MERGE: 1966 jobs (merged disk + memory)
[2026-02-01T15:25:50.634Z] [BOT] ✅ No jobs to archive (all 1966 jobs within 7-day window)
[2026-02-01T15:25:50.724Z] [BOT] 💾 Saved posted_jobs.json: 1966 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:52.420Z] [BOT] ✅ Posted message: Software Developer I - AI Developer @ ORG_722b29f2 State University in #🏠・JID_ead674af
[2026-02-01T15:25:52.420Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T15:25:52.421Z] [BOT] 💾 Added channel posting: Software Developer I - AI Developer @ ORG_722b29f2 State University → location channel (2 total channels)
[2026-02-01T15:25:52.421Z] [BOT] 💾 BEFORE MERGE: 1966 jobs in memory (cached)
[2026-02-01T15:25:52.456Z] [BOT] ✅ Loaded V2 database: 1966 jobs
💾 DISK STATE: 1966 jobs on disk
[2026-02-01T15:25:52.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1966
[2026-02-01T15:25:52.459Z] [BOT] 🔀 Deep merged: Software Developer I - AI Developer @ ORG_722b29f2 State University (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:25:52.460Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1966 jobs (merged disk + memory)
[2026-02-01T15:25:52.461Z] [BOT] ✅ No jobs to archive (all 1966 jobs within 7-day window)
[2026-02-01T15:25:52.561Z] [BOT] 💾 Saved posted_jobs.json: 1966 active jobs
[2026-02-01T15:25:52.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:54.063Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Search Local Services team" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:25:54.063Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:25:54.344Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb
[2026-02-01T15:25:54.345Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:25:54.345Z] [BOT] 💾 BEFORE MERGE: 1967 jobs in memory (cached)
[2026-02-01T15:25:54.380Z] [BOT] ✅ Loaded V2 database: 1966 jobs
💾 DISK STATE: 1966 jobs on disk
[2026-02-01T15:25:54.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1967
[2026-02-01T15:25:54.384Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:25:54.384Z] [BOT] 💾 AFTER MERGE: 1967 jobs (merged disk + memory)
[2026-02-01T15:25:54.385Z] [BOT] ✅ No jobs to archive (all 1967 jobs within 7-day window)
[2026-02-01T15:25:54.478Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:25:56.163Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:25:56.163Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:25:56.164Z] [BOT] 💾 BEFORE MERGE: 1967 jobs in memory (cached)
[2026-02-01T15:25:56.199Z] [BOT] ✅ Loaded V2 database: 1967 jobs
💾 DISK STATE: 1967 jobs on disk
[2026-02-01T15:25:56.199Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1967
[2026-02-01T15:25:56.202Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:25:56.203Z] [BOT] 💾 AFTER MERGE: 1967 jobs (merged disk + memory)
[2026-02-01T15:25:56.204Z] [BOT] ✅ No jobs to archive (all 1967 jobs within 7-day window)
[2026-02-01T15:25:56.307Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:26:00.809Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T15:26:00.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "0defcccd980ae93a"
[2026-02-01T15:26:00.811Z] [BOT] ⏭️  Skipping duplicate: JID_a3498d87 (posted within 7 days)
[2026-02-01T15:26:00.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_94af8f51..." not found, but found as SHA256 "56e323f5f77babcb"
[2026-02-01T15:26:00.812Z] [BOT] ⏭️  Skipping duplicate: JID_4a8fafd8 (posted within 7 days)
[2026-02-01T15:26:00.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45c085f2..." not found, but found as SHA256 "7f5a7b0fd6022d5a"
[2026-02-01T15:26:00.812Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25024266 (posted within 7 days)
[2026-02-01T15:26:00.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_039aa857..." not found, but found as SHA256 "70c6845660571fc1"
[2026-02-01T15:26:00.813Z] [BOT] ⏭️  Skipping duplicate: JID_2e9f037a (posted within 7 days)
[2026-02-01T15:26:00.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_378c3e2c..." not found, but found as SHA256 "36ae9ddff9e863ed"
[2026-02-01T15:26:00.813Z] [BOT] ⏭️  Skipping duplicate: JID_ce901b41 (posted within 7 days)
[2026-02-01T15:26:00.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6931ff2c..." not found, but found as SHA256 "048211c8770e61f8"
[2026-02-01T15:26:00.813Z] [BOT] ⏭️  Skipping duplicate: JID_2910a3c9-radiance_external-JID_ebfdace6-engineer_hr101733 (posted within 7 days)
[2026-02-01T15:26:00.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_706371fa..." not found, but found as SHA256 "7b1ca6e75e5d3ffe"
[2026-02-01T15:26:00.814Z] [BOT] ⏭️  Skipping duplicate: JID_6d625c58 (posted within 7 days)
[2026-02-01T15:26:00.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_885fec56-..." not found, but found as SHA256 "7d0ab4cfc82227fd"
[2026-02-01T15:26:00.814Z] [BOT] ⏭️  Skipping duplicate: JID_9f0a9a84-i_r22647-1 (posted within 7 days)
[2026-02-01T15:26:00.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7660a183..." not found, but found as SHA256 "58d92f6839e6051a"
[2026-02-01T15:26:00.814Z] [BOT] ⏭️  Skipping duplicate: JID_b80f8739-developer_r17481 (posted within 7 days)
[2026-02-01T15:26:00.815Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa341939..." not found, but found as SHA256 "e6d6bdac8d7b5eb4"
[2026-02-01T15:26:00.815Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2e2059fd (posted within 7 days)
[2026-02-01T15:26:00.935Z] [BOT] ✅ Loaded pending queue: 2948 total (951 pending, 50 enriched, 1947 posted)
[2026-02-01T15:26:01.123Z] [BOT] ✅ Saved pending queue: 2948 total (951 pending, 40 enriched, 1957 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T15:26:01.123Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T15:26:01.215Z] [BOT] 📂 Loaded 12038 existing routing entries
[2026-02-01T15:26:01.351Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12048
   Timestamp: 2026-02-01T15:26:01.302Z
[2026-02-01T15:26:01.355Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #📍・JID_6daed763: 7 posts
     3. #🌲・JID_efdf5921: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1967 jobs in memory (cached)
[2026-02-01T15:26:01.407Z] [BOT] ✅ Loaded V2 database: 1967 jobs
[2026-02-01T15:26:01.407Z] [BOT] 💾 DISK STATE: 1967 jobs on disk
[2026-02-01T15:26:01.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1967
[2026-02-01T15:26:01.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:26:01.414Z] [BOT] 💾 AFTER MERGE: 1967 jobs (merged disk + memory)
[2026-02-01T15:26:01.415Z] [BOT] ✅ No jobs to archive (all 1967 jobs within 7-day window)
[2026-02-01T15:26:01.515Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:26:01.516Z] [BOT] ✅ Database saved successfully
[2026-02-01T15:26:03.550Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*