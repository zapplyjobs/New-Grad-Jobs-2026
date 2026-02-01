# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T09:18:46.402Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T09:17:58.810Z] ========================================
[2026-02-01T09:17:58.812Z] Discord Bot Execution Log
[2026-02-01T09:17:58.812Z] Environment: GitHub Actions
[2026-02-01T09:17:58.812Z] Node Version: v20.20.0
[2026-02-01T09:17:58.812Z] ========================================
[2026-02-01T09:17:58.812Z] Environment Variables Check:
[2026-02-01T09:17:58.812Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T09:17:58.812Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T09:17:58.813Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T09:17:58.813Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T09:17:58.813Z] 
Multi-Channel Configuration:
[2026-02-01T09:17:58.813Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T09:17:58.813Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T09:17:58.813Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:17:58.813Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T09:17:58.814Z] 
Data Files Check:
[2026-02-01T09:17:58.814Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58106 bytes)
[2026-02-01T09:17:58.862Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9312473 bytes)
[2026-02-01T09:17:58.862Z] 
========================================
[2026-02-01T09:17:58.862Z] Starting Enhanced Discord Bot...
[2026-02-01T09:17:58.862Z] ========================================
[2026-02-01T09:17:59.450Z] [BOT] ✅ Loaded V2 database: 1717 jobs
[2026-02-01T09:17:59.856Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T09:17:59.856Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T09:17:59.856Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T09:17:59.965Z] [BOT] ✅ Loaded pending queue: 2944 total (1187 pending, 50 enriched, 1707 posted)
[2026-02-01T09:17:59.965Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T09:17:59.966Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:17:59.967Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T09:17:59.967Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:17:59.967Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T09:17:59.967Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T09:17:59.968Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T09:17:59.968Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T09:17:59.968Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T09:17:59.968Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T09:17:59.968Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T09:17:59.969Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T09:17:59.969Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-02-01T09:17:59.969Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T09:17:59.969Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T09:17:59.969Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T09:17:59.970Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T09:17:59.984Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T09:17:59.984Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T09:17:59.985Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T09:17:59.986Z] [BOT] 📋 After multi-location grouping: 41 unique jobs to post
[2026-02-01T09:17:59.986Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T09:17:59.988Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T09:17:59.989Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer" @ ORG_b1e645a8
[2026-02-01T09:17:59.989Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:00.008Z] [BOT ERROR] (node:3234) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T09:18:00.237Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #💻・tech-jobs
  ✅ Industry: Associate, Software Engineer @ ORG_b1e645a8
[2026-02-01T09:18:00.238Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → category channel (1 total channels)
[2026-02-01T09:18:00.239Z] [BOT] 💾 BEFORE MERGE: 1718 jobs in memory (cached)
[2026-02-01T09:18:00.277Z] [BOT] ✅ Loaded V2 database: 1717 jobs
💾 DISK STATE: 1717 jobs on disk
[2026-02-01T09:18:00.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1718
[2026-02-01T09:18:00.282Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:00.282Z] [BOT] 💾 AFTER MERGE: 1718 jobs (merged disk + memory)
[2026-02-01T09:18:00.283Z] [BOT] ✅ No jobs to archive (all 1718 jobs within 7-day window)
[2026-02-01T09:18:00.401Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:02.222Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:02.222Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → location channel (2 total channels)
💾 BEFORE MERGE: 1718 jobs in memory (cached)
[2026-02-01T09:18:02.260Z] [BOT] ✅ Loaded V2 database: 1718 jobs
[2026-02-01T09:18:02.260Z] [BOT] 💾 DISK STATE: 1718 jobs on disk
[2026-02-01T09:18:02.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1718
[2026-02-01T09:18:02.264Z] [BOT] 🔀 Deep merged: Associate, Software Engineer @ ORG_b1e645a8 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:02.264Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1718 jobs (merged disk + memory)
[2026-02-01T09:18:02.266Z] [BOT] ✅ No jobs to archive (all 1718 jobs within 7-day window)
[2026-02-01T09:18:02.360Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:03.861Z] [BOT] 📍 [ROUTING] "Graduate Software Applications Engineer" @ ORG_d5cb9682 Limited
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:04.008Z] [BOT] ✅ Posted message: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited in #💻・tech-jobs
  ✅ Industry: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited
[2026-02-01T09:18:04.009Z] [BOT] 💾 Added channel posting: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited → category channel (1 total channels)
[2026-02-01T09:18:04.009Z] [BOT] 💾 BEFORE MERGE: 1719 jobs in memory (cached)
[2026-02-01T09:18:04.042Z] [BOT] ✅ Loaded V2 database: 1718 jobs
💾 DISK STATE: 1718 jobs on disk
[2026-02-01T09:18:04.042Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1719
[2026-02-01T09:18:04.046Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:04.046Z] [BOT] 💾 AFTER MERGE: 1719 jobs (merged disk + memory)
[2026-02-01T09:18:04.047Z] [BOT] ✅ No jobs to archive (all 1719 jobs within 7-day window)
[2026-02-01T09:18:04.137Z] [BOT] 💾 Saved posted_jobs.json: 1719 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:05.853Z] [BOT] ✅ Posted message: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited in #📍・JID_6daed763
[2026-02-01T09:18:05.853Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:05.853Z] [BOT] 💾 Added channel posting: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited → location channel (2 total channels)
[2026-02-01T09:18:05.854Z] [BOT] 💾 BEFORE MERGE: 1719 jobs in memory (cached)
[2026-02-01T09:18:05.889Z] [BOT] ✅ Loaded V2 database: 1719 jobs
💾 DISK STATE: 1719 jobs on disk
[2026-02-01T09:18:05.889Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1719
[2026-02-01T09:18:05.893Z] [BOT] 🔀 Deep merged: Graduate Software Applications Engineer @ ORG_d5cb9682 Limited (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:05.893Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1719 jobs (merged disk + memory)
[2026-02-01T09:18:05.894Z] [BOT] ✅ No jobs to archive (all 1719 jobs within 7-day window)
[2026-02-01T09:18:06.009Z] [BOT] 💾 Saved posted_jobs.json: 1719 active jobs
[2026-02-01T09:18:06.009Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:07.513Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer" @ ORG_a93d3898
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:07.788Z] [BOT] ✅ Posted message: Infrastructure Engineer @ ORG_a93d3898 in #💻・tech-jobs
  ✅ Industry: Infrastructure Engineer @ ORG_a93d3898
[2026-02-01T09:18:07.789Z] [BOT] 💾 Added channel posting: Infrastructure Engineer @ ORG_a93d3898 → category channel (1 total channels)
[2026-02-01T09:18:07.789Z] [BOT] 💾 BEFORE MERGE: 1720 jobs in memory (cached)
[2026-02-01T09:18:07.821Z] [BOT] ✅ Loaded V2 database: 1719 jobs
💾 DISK STATE: 1719 jobs on disk
[2026-02-01T09:18:07.822Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1720
[2026-02-01T09:18:07.826Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:07.826Z] [BOT] 💾 AFTER MERGE: 1720 jobs (merged disk + memory)
[2026-02-01T09:18:07.827Z] [BOT] ✅ No jobs to archive (all 1720 jobs within 7-day window)
[2026-02-01T09:18:07.917Z] [BOT] 💾 Saved posted_jobs.json: 1720 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:09.755Z] [BOT] ✅ Posted message: Infrastructure Engineer @ ORG_a93d3898 in #📍・JID_6daed763
[2026-02-01T09:18:09.756Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:09.756Z] [BOT] 💾 Added channel posting: Infrastructure Engineer @ ORG_a93d3898 → location channel (2 total channels)
[2026-02-01T09:18:09.756Z] [BOT] 💾 BEFORE MERGE: 1720 jobs in memory (cached)
[2026-02-01T09:18:09.788Z] [BOT] ✅ Loaded V2 database: 1720 jobs
💾 DISK STATE: 1720 jobs on disk
[2026-02-01T09:18:09.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1720
[2026-02-01T09:18:09.792Z] [BOT] 🔀 Deep merged: Infrastructure Engineer @ ORG_a93d3898 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:09.792Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1720 jobs (merged disk + memory)
[2026-02-01T09:18:09.793Z] [BOT] ✅ No jobs to archive (all 1720 jobs within 7-day window)
[2026-02-01T09:18:09.903Z] [BOT] 💾 Saved posted_jobs.json: 1720 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:11.404Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_b6b226b3 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:11.560Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_b6b226b3 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_b6b226b3 Health
[2026-02-01T09:18:11.561Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_b6b226b3 Health → category channel (1 total channels)
[2026-02-01T09:18:11.562Z] [BOT] 💾 BEFORE MERGE: 1721 jobs in memory (cached)
[2026-02-01T09:18:11.592Z] [BOT] ✅ Loaded V2 database: 1720 jobs
💾 DISK STATE: 1720 jobs on disk
[2026-02-01T09:18:11.593Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1721
[2026-02-01T09:18:11.596Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:11.596Z] [BOT] 💾 AFTER MERGE: 1721 jobs (merged disk + memory)
[2026-02-01T09:18:11.597Z] [BOT] ✅ No jobs to archive (all 1721 jobs within 7-day window)
[2026-02-01T09:18:11.681Z] [BOT] 💾 Saved posted_jobs.json: 1721 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:13.394Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_b6b226b3 Health in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T09:18:13.394Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_b6b226b3 Health → location channel (2 total channels)
[2026-02-01T09:18:13.394Z] [BOT] 💾 BEFORE MERGE: 1721 jobs in memory (cached)
[2026-02-01T09:18:13.427Z] [BOT] ✅ Loaded V2 database: 1721 jobs
💾 DISK STATE: 1721 jobs on disk
[2026-02-01T09:18:13.427Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1721
[2026-02-01T09:18:13.430Z] [BOT] 🔀 Deep merged: Associate Software Developer @ ORG_b6b226b3 Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:13.431Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1721 jobs (merged disk + memory)
[2026-02-01T09:18:13.431Z] [BOT] ✅ No jobs to archive (all 1721 jobs within 7-day window)
[2026-02-01T09:18:13.522Z] [BOT] 💾 Saved posted_jobs.json: 1721 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:15.023Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_2e4aaf05 Space Storage
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:15.194Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_2e4aaf05 Space Storage in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_2e4aaf05 Space Storage
[2026-02-01T09:18:15.195Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_2e4aaf05 Space Storage → category channel (1 total channels)
[2026-02-01T09:18:15.195Z] [BOT] 💾 BEFORE MERGE: 1722 jobs in memory (cached)
[2026-02-01T09:18:15.229Z] [BOT] ✅ Loaded V2 database: 1721 jobs
💾 DISK STATE: 1721 jobs on disk
[2026-02-01T09:18:15.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1722
[2026-02-01T09:18:15.233Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:15.233Z] [BOT] 💾 AFTER MERGE: 1722 jobs (merged disk + memory)
[2026-02-01T09:18:15.234Z] [BOT] ✅ No jobs to archive (all 1722 jobs within 7-day window)
[2026-02-01T09:18:15.327Z] [BOT] 💾 Saved posted_jobs.json: 1722 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:16.997Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_2e4aaf05 Space Storage in #📍・JID_6daed763
[2026-02-01T09:18:16.997Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:16.998Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_2e4aaf05 Space Storage → location channel (2 total channels)
[2026-02-01T09:18:16.998Z] [BOT] 💾 BEFORE MERGE: 1722 jobs in memory (cached)
[2026-02-01T09:18:17.031Z] [BOT] ✅ Loaded V2 database: 1722 jobs
💾 DISK STATE: 1722 jobs on disk
[2026-02-01T09:18:17.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1722
[2026-02-01T09:18:17.034Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_2e4aaf05 Space Storage (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:17.035Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:18:17.035Z] [BOT] 💾 AFTER MERGE: 1722 jobs (merged disk + memory)
[2026-02-01T09:18:17.036Z] [BOT] ✅ No jobs to archive (all 1722 jobs within 7-day window)
[2026-02-01T09:18:17.142Z] [BOT] 💾 Saved posted_jobs.json: 1722 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:18.643Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_b074f340
[2026-02-01T09:18:18.643Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:18.858Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_b074f340 in #💻・tech-jobs
[2026-02-01T09:18:18.858Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_b074f340
[2026-02-01T09:18:18.859Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_b074f340 → category channel (1 total channels)
[2026-02-01T09:18:18.859Z] [BOT] 💾 BEFORE MERGE: 1723 jobs in memory (cached)
[2026-02-01T09:18:18.890Z] [BOT] ✅ Loaded V2 database: 1722 jobs
💾 DISK STATE: 1722 jobs on disk
[2026-02-01T09:18:18.890Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1723
[2026-02-01T09:18:18.893Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:18.893Z] [BOT] 💾 AFTER MERGE: 1723 jobs (merged disk + memory)
[2026-02-01T09:18:18.895Z] [BOT] ✅ No jobs to archive (all 1723 jobs within 7-day window)
[2026-02-01T09:18:18.979Z] [BOT] 💾 Saved posted_jobs.json: 1723 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:20.702Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_b074f340 in #📍・JID_6daed763
[2026-02-01T09:18:20.702Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:20.703Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_b074f340 → location channel (2 total channels)
[2026-02-01T09:18:20.703Z] [BOT] 💾 BEFORE MERGE: 1723 jobs in memory (cached)
[2026-02-01T09:18:20.736Z] [BOT] ✅ Loaded V2 database: 1723 jobs
💾 DISK STATE: 1723 jobs on disk
[2026-02-01T09:18:20.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1723
[2026-02-01T09:18:20.739Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_b074f340 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:18:20.739Z] [BOT] 💾 AFTER MERGE: 1723 jobs (merged disk + memory)
[2026-02-01T09:18:20.740Z] [BOT] ✅ No jobs to archive (all 1723 jobs within 7-day window)
[2026-02-01T09:18:20.830Z] [BOT] 💾 Saved posted_jobs.json: 1723 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:22.332Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry-Level - C++" @ ORG_6c71f4eb Capital
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:18:22.494Z] [BOT] ✅ Posted message: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital in #💻・tech-jobs
  ✅ Industry: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital
[2026-02-01T09:18:22.495Z] [BOT] 💾 Added channel posting: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital → category channel (1 total channels)
[2026-02-01T09:18:22.495Z] [BOT] 💾 BEFORE MERGE: 1724 jobs in memory (cached)
[2026-02-01T09:18:22.530Z] [BOT] ✅ Loaded V2 database: 1723 jobs
💾 DISK STATE: 1723 jobs on disk
[2026-02-01T09:18:22.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1724
[2026-02-01T09:18:22.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:22.533Z] [BOT] 💾 AFTER MERGE: 1724 jobs (merged disk + memory)
[2026-02-01T09:18:22.534Z] [BOT] ✅ No jobs to archive (all 1724 jobs within 7-day window)
[2026-02-01T09:18:22.645Z] [BOT] 💾 Saved posted_jobs.json: 1724 active jobs
[2026-02-01T09:18:22.645Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:24.277Z] [BOT] ✅ Posted message: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:24.278Z] [BOT] 💾 Added channel posting: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital → location channel (2 total channels)
[2026-02-01T09:18:24.278Z] [BOT] 💾 BEFORE MERGE: 1724 jobs in memory (cached)
[2026-02-01T09:18:24.310Z] [BOT] ✅ Loaded V2 database: 1724 jobs
💾 DISK STATE: 1724 jobs on disk
[2026-02-01T09:18:24.310Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1724
[2026-02-01T09:18:24.313Z] [BOT] 🔀 Deep merged: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:18:24.313Z] [BOT] 💾 AFTER MERGE: 1724 jobs (merged disk + memory)
[2026-02-01T09:18:24.314Z] [BOT] ✅ No jobs to archive (all 1724 jobs within 7-day window)
[2026-02-01T09:18:24.407Z] [BOT] 💾 Saved posted_jobs.json: 1724 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:28.908Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T09:18:28.909Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_f102986b AI
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T09:18:28.909Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:18:29.198Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f102986b AI in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_f102986b AI
[2026-02-01T09:18:29.198Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f102986b AI → category channel (1 total channels)
[2026-02-01T09:18:29.198Z] [BOT] 💾 BEFORE MERGE: 1725 jobs in memory (cached)
[2026-02-01T09:18:29.231Z] [BOT] ✅ Loaded V2 database: 1724 jobs
💾 DISK STATE: 1724 jobs on disk
[2026-02-01T09:18:29.231Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1725
[2026-02-01T09:18:29.234Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:29.235Z] [BOT] 💾 AFTER MERGE: 1725 jobs (merged disk + memory)
[2026-02-01T09:18:29.235Z] [BOT] ✅ No jobs to archive (all 1725 jobs within 7-day window)
[2026-02-01T09:18:29.335Z] [BOT] 💾 Saved posted_jobs.json: 1725 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:31.005Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f102986b AI in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:18:31.005Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f102986b AI → location channel (2 total channels)
[2026-02-01T09:18:31.006Z] [BOT] 💾 BEFORE MERGE: 1725 jobs in memory (cached)
[2026-02-01T09:18:31.039Z] [BOT] ✅ Loaded V2 database: 1725 jobs
💾 DISK STATE: 1725 jobs on disk
[2026-02-01T09:18:31.039Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1725
[2026-02-01T09:18:31.043Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_f102986b AI (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:31.043Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1725 jobs (merged disk + memory)
[2026-02-01T09:18:31.044Z] [BOT] ✅ No jobs to archive (all 1725 jobs within 7-day window)
[2026-02-01T09:18:31.150Z] [BOT] 💾 Saved posted_jobs.json: 1725 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:32.650Z] [BOT] 📍 [ROUTING] "Systems Engineer" @ ORG_05ce0396 Meter
[2026-02-01T09:18:32.650Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T09:18:32.837Z] [BOT] ✅ Posted message: Systems Engineer @ ORG_05ce0396 Meter in #🤖・ai-jobs
[2026-02-01T09:18:32.838Z] [BOT] ✅ Industry: Systems Engineer @ ORG_05ce0396 Meter
[2026-02-01T09:18:32.838Z] [BOT] 💾 Added channel posting: Systems Engineer @ ORG_05ce0396 Meter → category channel (1 total channels)
[2026-02-01T09:18:32.838Z] [BOT] 💾 BEFORE MERGE: 1726 jobs in memory (cached)
[2026-02-01T09:18:32.870Z] [BOT] ✅ Loaded V2 database: 1725 jobs
💾 DISK STATE: 1725 jobs on disk
[2026-02-01T09:18:32.870Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1726
[2026-02-01T09:18:32.873Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:32.875Z] [BOT] 💾 AFTER MERGE: 1726 jobs (merged disk + memory)
[2026-02-01T09:18:32.875Z] [BOT] ✅ No jobs to archive (all 1726 jobs within 7-day window)
[2026-02-01T09:18:32.960Z] [BOT] 💾 Saved posted_jobs.json: 1726 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:34.689Z] [BOT] ✅ Posted message: Systems Engineer @ ORG_05ce0396 Meter in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:34.689Z] [BOT] 💾 Added channel posting: Systems Engineer @ ORG_05ce0396 Meter → location channel (2 total channels)
[2026-02-01T09:18:34.690Z] [BOT] 💾 BEFORE MERGE: 1726 jobs in memory (cached)
[2026-02-01T09:18:34.721Z] [BOT] ✅ Loaded V2 database: 1726 jobs
💾 DISK STATE: 1726 jobs on disk
[2026-02-01T09:18:34.721Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1726
[2026-02-01T09:18:34.724Z] [BOT] 🔀 Deep merged: Systems Engineer @ ORG_05ce0396 Meter (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:34.724Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1726 jobs (merged disk + memory)
[2026-02-01T09:18:34.725Z] [BOT] ✅ No jobs to archive (all 1726 jobs within 7-day window)
[2026-02-01T09:18:34.813Z] [BOT] 💾 Saved posted_jobs.json: 1726 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:36.315Z] [BOT] 📍 [ROUTING] "R&D Machine Learning Engineer - Engineering Scientist Associate" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "machine learning")
[2026-02-01T09:18:36.315Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T09:18:36.525Z] [BOT] ✅ Posted message: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2026-02-01T09:18:36.525Z] [BOT] ✅ Industry: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-02-01T09:18:36.526Z] [BOT] 💾 Added channel posting: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
💾 BEFORE MERGE: 1727 jobs in memory (cached)
[2026-02-01T09:18:36.561Z] [BOT] ✅ Loaded V2 database: 1726 jobs
💾 DISK STATE: 1726 jobs on disk
[2026-02-01T09:18:36.561Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1727
[2026-02-01T09:18:36.564Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:18:36.565Z] [BOT] 💾 AFTER MERGE: 1727 jobs (merged disk + memory)
[2026-02-01T09:18:36.565Z] [BOT] ✅ No jobs to archive (all 1727 jobs within 7-day window)
[2026-02-01T09:18:36.658Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:38.363Z] [BOT] ✅ Posted message: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #📍・JID_6daed763
[2026-02-01T09:18:38.363Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:18:38.364Z] [BOT] 💾 Added channel posting: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin → location channel (2 total channels)
[2026-02-01T09:18:38.364Z] [BOT] 💾 BEFORE MERGE: 1727 jobs in memory (cached)
[2026-02-01T09:18:38.399Z] [BOT] ✅ Loaded V2 database: 1727 jobs
[2026-02-01T09:18:38.402Z] [BOT] 💾 DISK STATE: 1727 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1727
[2026-02-01T09:18:38.406Z] [BOT] 🔀 Deep merged: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:18:38.406Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:18:38.407Z] [BOT] 💾 AFTER MERGE: 1727 jobs (merged disk + memory)
[2026-02-01T09:18:38.414Z] [BOT] ✅ No jobs to archive (all 1727 jobs within 7-day window)
[2026-02-01T09:18:38.501Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:43.002Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T09:18:43.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2ac90c3c..." not found, but found as SHA256 "a3515697f41c3d28"
[2026-02-01T09:18:43.004Z] [BOT] ⏭️  Skipping duplicate: JID_2ac90c3c (posted within 7 days)
[2026-02-01T09:18:43.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ce5dce88..." not found, but found as SHA256 "4a425be3fff947b1"
[2026-02-01T09:18:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_26b9c054 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_60acc179..." not found, but found as SHA256 "68abfadd05e5dac9"
⏭️  Skipping duplicate: JID_797865dd (posted within 7 days)
[2026-02-01T09:18:43.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_21a460ff..." not found, but found as SHA256 "19215e2e2c39415d"
[2026-02-01T09:18:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_4a4a766a (posted within 7 days)
[2026-02-01T09:18:43.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b573b29..." not found, but found as SHA256 "27b74852297129c1"
[2026-02-01T09:18:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_6b573b29 (posted within 7 days)
[2026-02-01T09:18:43.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_74facb32..." not found, but found as SHA256 "3c7c54242d4ce09e"
⏭️  Skipping duplicate: JID_c96b8e6e-ess_external-JID_c3c7d92c-engineer_r-72920 (posted within 7 days)
[2026-02-01T09:18:43.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3125eb0c..." not found, but found as SHA256 "1dcb719e7e6baf12"
[2026-02-01T09:18:43.006Z] [BOT] ⏭️  Skipping duplicate: JID_0442db92-engineer_2526628 (posted within 7 days)
[2026-02-01T09:18:43.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9926bfb5-us_car..." not found, but found as SHA256 "e5aa399b22c5819a"
⏭️  Skipping duplicate: JID_9926bfb5-us_careersite-JID_d04b27b8-engineer_4003 (posted within 7 days)
[2026-02-01T09:18:43.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cc4688d0..." not found, but found as SHA256 "2fc215545bd80d35"
[2026-02-01T09:18:43.006Z] [BOT] ⏭️  Skipping duplicate: JID_cc4688d0 (posted within 7 days)
[2026-02-01T09:18:43.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "aa84578c56a98c44"
⏭️  Skipping duplicate: JID_35ef4d31-_r_00041479 (posted within 7 days)
[2026-02-01T09:18:43.107Z] [BOT] ✅ Loaded pending queue: 2944 total (1187 pending, 50 enriched, 1707 posted)
[2026-02-01T09:18:43.306Z] [BOT] ✅ Saved pending queue: 2944 total (1187 pending, 40 enriched, 1717 posted)
[2026-02-01T09:18:43.306Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T09:18:43.397Z] [BOT] 📂 Loaded 11798 existing routing entries
[2026-02-01T09:18:43.526Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11808
   Timestamp: 2026-02-01T09:18:43.478Z
[2026-02-01T09:18:43.527Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T09:18:43.527Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T09:18:43.528Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #📍・JID_6daed763: 8 posts
     2. #💻・tech-jobs: 7 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T09:18:43.528Z] [BOT] 💾 BEFORE MERGE: 1727 jobs in memory (cached)
[2026-02-01T09:18:43.562Z] [BOT] ✅ Loaded V2 database: 1727 jobs
💾 DISK STATE: 1727 jobs on disk
[2026-02-01T09:18:43.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1727
[2026-02-01T09:18:43.568Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1727 jobs (merged disk + memory)
[2026-02-01T09:18:43.569Z] [BOT] ✅ No jobs to archive (all 1727 jobs within 7-day window)
[2026-02-01T09:18:43.664Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:18:43.665Z] [BOT] ✅ Database saved successfully
[2026-02-01T09:18:45.702Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3234) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*