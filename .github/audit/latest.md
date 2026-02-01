# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T16:52:40.630Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T16:51:49.727Z] ========================================
[2026-02-01T16:51:49.728Z] Discord Bot Execution Log
[2026-02-01T16:51:49.728Z] Environment: GitHub Actions
[2026-02-01T16:51:49.728Z] Node Version: v20.20.0
[2026-02-01T16:51:49.728Z] ========================================
[2026-02-01T16:51:49.728Z] Environment Variables Check:
[2026-02-01T16:51:49.728Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T16:51:49.729Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T16:51:49.729Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T16:51:49.729Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T16:51:49.729Z] 
Multi-Channel Configuration:
[2026-02-01T16:51:49.729Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T16:51:49.729Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T16:51:49.729Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:51:49.729Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T16:51:49.730Z] 
Data Files Check:
[2026-02-01T16:51:49.730Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59400 bytes)
[2026-02-01T16:51:49.793Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10196355 bytes)
[2026-02-01T16:51:49.793Z] 
========================================
[2026-02-01T16:51:49.793Z] Starting Enhanced Discord Bot...
[2026-02-01T16:51:49.793Z] ========================================
[2026-02-01T16:51:50.306Z] [BOT] ✅ Loaded V2 database: 2027 jobs
[2026-02-01T16:51:50.955Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T16:51:50.956Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T16:51:50.956Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T16:51:51.116Z] [BOT] ✅ Loaded pending queue: 2946 total (879 pending, 50 enriched, 2017 posted)
[2026-02-01T16:51:51.116Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:51:51.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T16:51:51.118Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:51:51.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T16:51:51.119Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T16:51:51.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T16:51:51.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T16:51:51.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T16:51:51.120Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T16:51:51.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T16:51:51.120Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T16:51:51.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T16:51:51.121Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T16:51:51.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T16:51:51.121Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T16:51:51.133Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T16:51:51.133Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T16:51:51.133Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T16:51:51.134Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
   (4 grouped as same job with different locations)
[2026-02-01T16:51:51.134Z] [BOT] 📍 3 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: dallas, new york
   - Junior Software Engineer @ mthree: salt lake, united states
[2026-02-01T16:51:51.134Z] [BOT] - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T16:51:51.138Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T16:51:51.139Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T16:51:51.139Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:51:51.156Z] [BOT ERROR] (node:2670) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T16:51:51.367Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T16:51:51.367Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T16:51:51.369Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T16:51:51.369Z] [BOT] 💾 BEFORE MERGE: 2028 jobs in memory (cached)
[2026-02-01T16:51:51.427Z] [BOT] ✅ Loaded V2 database: 2027 jobs
💾 DISK STATE: 2027 jobs on disk
[2026-02-01T16:51:51.428Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2028
[2026-02-01T16:51:51.433Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:51:51.433Z] [BOT] 💾 AFTER MERGE: 2028 jobs (merged disk + memory)
[2026-02-01T16:51:51.434Z] [BOT] ✅ No jobs to archive (all 2028 jobs within 7-day window)
[2026-02-01T16:51:51.583Z] [BOT] 💾 Saved posted_jobs.json: 2028 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:51:53.283Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T16:51:53.283Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T16:51:53.283Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T16:51:53.284Z] [BOT] 💾 BEFORE MERGE: 2028 jobs in memory (cached)
[2026-02-01T16:51:53.336Z] [BOT] ✅ Loaded V2 database: 2028 jobs
💾 DISK STATE: 2028 jobs on disk
[2026-02-01T16:51:53.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2028
[2026-02-01T16:51:53.341Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:51:53.341Z] [BOT] 💾 AFTER MERGE: 2028 jobs (merged disk + memory)
[2026-02-01T16:51:53.343Z] [BOT] ✅ No jobs to archive (all 2028 jobs within 7-day window)
[2026-02-01T16:51:53.454Z] [BOT] 💾 Saved posted_jobs.json: 2028 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:51:54.956Z] [BOT] 📍 [ROUTING] "Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
[2026-02-01T16:51:54.956Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:51:55.123Z] [BOT] ✅ Posted message: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-02-01T16:51:55.123Z] [BOT] 💾 Added channel posting: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:51:55.123Z] [BOT] 💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-01T16:51:55.173Z] [BOT] ✅ Loaded V2 database: 2028 jobs
💾 DISK STATE: 2028 jobs on disk
[2026-02-01T16:51:55.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-01T16:51:55.178Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:51:55.178Z] [BOT] 💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-01T16:51:55.180Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-02-01T16:51:55.299Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:51:57.009Z] [BOT] ✅ Posted message: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:51:57.009Z] [BOT] 💾 Added channel posting: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:51:57.009Z] [BOT] 💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-01T16:51:57.059Z] [BOT] ✅ Loaded V2 database: 2029 jobs
💾 DISK STATE: 2029 jobs on disk
[2026-02-01T16:51:57.060Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-01T16:51:57.064Z] [BOT] 🔀 Deep merged: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:51:57.064Z] [BOT] 💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-01T16:51:57.066Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-02-01T16:51:57.176Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:51:58.677Z] [BOT] 📍 [ROUTING] "Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:51:58.946Z] [BOT] ✅ Posted message: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-02-01T16:51:58.947Z] [BOT] 💾 Added channel posting: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:51:58.947Z] [BOT] 💾 BEFORE MERGE: 2030 jobs in memory (cached)
[2026-02-01T16:51:58.998Z] [BOT] ✅ Loaded V2 database: 2029 jobs
💾 DISK STATE: 2029 jobs on disk
[2026-02-01T16:51:58.999Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2030
[2026-02-01T16:51:59.004Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:51:59.004Z] [BOT] 💾 AFTER MERGE: 2030 jobs (merged disk + memory)
[2026-02-01T16:51:59.006Z] [BOT] ✅ No jobs to archive (all 2030 jobs within 7-day window)
[2026-02-01T16:51:59.143Z] [BOT] 💾 Saved posted_jobs.json: 2030 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:01.317Z] [BOT] ✅ Posted message: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌲・JID_efdf5921
[2026-02-01T16:52:01.317Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:52:01.318Z] [BOT] 💾 Added channel posting: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:52:01.318Z] [BOT] 💾 BEFORE MERGE: 2030 jobs in memory (cached)
[2026-02-01T16:52:01.368Z] [BOT] ✅ Loaded V2 database: 2030 jobs
💾 DISK STATE: 2030 jobs on disk
[2026-02-01T16:52:01.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2030
[2026-02-01T16:52:01.373Z] [BOT] 🔀 Deep merged: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:52:01.373Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2030 jobs (merged disk + memory)
[2026-02-01T16:52:01.374Z] [BOT] ✅ No jobs to archive (all 2030 jobs within 7-day window)
[2026-02-01T16:52:01.486Z] [BOT] 💾 Saved posted_jobs.json: 2030 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:02.988Z] [BOT] 📍 [ROUTING] "Software Engineer I - PAAS" @ ORG_28d3793c
[2026-02-01T16:52:02.988Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:03.227Z] [BOT] ✅ Posted message: Software Engineer I - PAAS @ ORG_28d3793c in #💻・tech-jobs
[2026-02-01T16:52:03.227Z] [BOT] ✅ Industry: Software Engineer I - PAAS @ ORG_28d3793c
[2026-02-01T16:52:03.228Z] [BOT] 💾 Added channel posting: Software Engineer I - PAAS @ ORG_28d3793c → category channel (1 total channels)
[2026-02-01T16:52:03.228Z] [BOT] 💾 BEFORE MERGE: 2031 jobs in memory (cached)
[2026-02-01T16:52:03.278Z] [BOT] ✅ Loaded V2 database: 2030 jobs
💾 DISK STATE: 2030 jobs on disk
[2026-02-01T16:52:03.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2031
[2026-02-01T16:52:03.283Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:03.283Z] [BOT] 💾 AFTER MERGE: 2031 jobs (merged disk + memory)
[2026-02-01T16:52:03.284Z] [BOT] ✅ No jobs to archive (all 2031 jobs within 7-day window)
[2026-02-01T16:52:03.421Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:05.178Z] [BOT] ✅ Posted message: Software Engineer I - PAAS @ ORG_28d3793c in #🌲・JID_efdf5921
[2026-02-01T16:52:05.178Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:52:05.179Z] [BOT] 💾 Added channel posting: Software Engineer I - PAAS @ ORG_28d3793c → location channel (2 total channels)
[2026-02-01T16:52:05.179Z] [BOT] 💾 BEFORE MERGE: 2031 jobs in memory (cached)
[2026-02-01T16:52:05.230Z] [BOT] ✅ Loaded V2 database: 2031 jobs
💾 DISK STATE: 2031 jobs on disk
[2026-02-01T16:52:05.230Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2031
[2026-02-01T16:52:05.234Z] [BOT] 🔀 Deep merged: Software Engineer I - PAAS @ ORG_28d3793c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:05.234Z] [BOT] 💾 AFTER MERGE: 2031 jobs (merged disk + memory)
[2026-02-01T16:52:05.235Z] [BOT] ✅ No jobs to archive (all 2031 jobs within 7-day window)
[2026-02-01T16:52:05.348Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:06.848Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_8e152e21
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:07.020Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_8e152e21 in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_8e152e21
[2026-02-01T16:52:07.021Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_8e152e21 → category channel (1 total channels)
[2026-02-01T16:52:07.021Z] [BOT] 💾 BEFORE MERGE: 2032 jobs in memory (cached)
[2026-02-01T16:52:07.071Z] [BOT] ✅ Loaded V2 database: 2031 jobs
💾 DISK STATE: 2031 jobs on disk
[2026-02-01T16:52:07.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2032
[2026-02-01T16:52:07.075Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:07.075Z] [BOT] 💾 AFTER MERGE: 2032 jobs (merged disk + memory)
[2026-02-01T16:52:07.076Z] [BOT] ✅ No jobs to archive (all 2032 jobs within 7-day window)
[2026-02-01T16:52:07.212Z] [BOT] 💾 Saved posted_jobs.json: 2032 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:08.880Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_8e152e21 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:52:08.881Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_8e152e21 → location channel (2 total channels)
[2026-02-01T16:52:08.881Z] [BOT] 💾 BEFORE MERGE: 2032 jobs in memory (cached)
[2026-02-01T16:52:08.930Z] [BOT] ✅ Loaded V2 database: 2032 jobs
[2026-02-01T16:52:08.931Z] [BOT] 💾 DISK STATE: 2032 jobs on disk
[2026-02-01T16:52:08.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2032
[2026-02-01T16:52:08.935Z] [BOT] 🔀 Deep merged: Associate Software Developer @ ORG_8e152e21 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:08.935Z] [BOT] 💾 AFTER MERGE: 2032 jobs (merged disk + memory)
[2026-02-01T16:52:08.936Z] [BOT] ✅ No jobs to archive (all 2032 jobs within 7-day window)
[2026-02-01T16:52:09.045Z] [BOT] 💾 Saved posted_jobs.json: 2032 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:10.548Z] [BOT] 📍 [ROUTING] "Software Engineer, Autonomy" @ ORG_4d802438
[2026-02-01T16:52:10.548Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:10.830Z] [BOT] ✅ Posted message: Software Engineer, Autonomy @ ORG_4d802438 in #💻・tech-jobs
[2026-02-01T16:52:10.831Z] [BOT] ✅ Industry: Software Engineer, Autonomy @ ORG_4d802438
[2026-02-01T16:52:10.831Z] [BOT] 💾 Added channel posting: Software Engineer, Autonomy @ ORG_4d802438 → category channel (1 total channels)
[2026-02-01T16:52:10.832Z] [BOT] 💾 BEFORE MERGE: 2033 jobs in memory (cached)
[2026-02-01T16:52:10.882Z] [BOT] ✅ Loaded V2 database: 2032 jobs
💾 DISK STATE: 2032 jobs on disk
[2026-02-01T16:52:10.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2033
[2026-02-01T16:52:10.886Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:10.886Z] [BOT] 💾 AFTER MERGE: 2033 jobs (merged disk + memory)
[2026-02-01T16:52:10.887Z] [BOT] ✅ No jobs to archive (all 2033 jobs within 7-day window)
[2026-02-01T16:52:10.998Z] [BOT] 💾 Saved posted_jobs.json: 2033 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:13.026Z] [BOT] ✅ Posted message: Software Engineer, Autonomy @ ORG_4d802438 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:52:13.027Z] [BOT] 💾 Added channel posting: Software Engineer, Autonomy @ ORG_4d802438 → location channel (2 total channels)
💾 BEFORE MERGE: 2033 jobs in memory (cached)
[2026-02-01T16:52:13.077Z] [BOT] ✅ Loaded V2 database: 2033 jobs
💾 DISK STATE: 2033 jobs on disk
[2026-02-01T16:52:13.078Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2033
[2026-02-01T16:52:13.081Z] [BOT] 🔀 Deep merged: Software Engineer, Autonomy @ ORG_4d802438 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:13.081Z] [BOT] 💾 AFTER MERGE: 2033 jobs (merged disk + memory)
[2026-02-01T16:52:13.083Z] [BOT] ✅ No jobs to archive (all 2033 jobs within 7-day window)
[2026-02-01T16:52:13.215Z] [BOT] 💾 Saved posted_jobs.json: 2033 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:14.715Z] [BOT] 📍 [ROUTING] "Product Security Engineer (University Grad)" @ ORG_4f749de7
[2026-02-01T16:52:14.715Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:14.945Z] [BOT] ✅ Posted message: Product Security Engineer (University Grad) @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: Product Security Engineer (University Grad) @ ORG_4f749de7
[2026-02-01T16:52:14.946Z] [BOT] 💾 Added channel posting: Product Security Engineer (University Grad) @ ORG_4f749de7 → category channel (1 total channels)
[2026-02-01T16:52:14.946Z] [BOT] 💾 BEFORE MERGE: 2034 jobs in memory (cached)
[2026-02-01T16:52:14.997Z] [BOT] ✅ Loaded V2 database: 2033 jobs
💾 DISK STATE: 2033 jobs on disk
[2026-02-01T16:52:14.997Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2034
[2026-02-01T16:52:15.001Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2034 jobs (merged disk + memory)
[2026-02-01T16:52:15.002Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-02-01T16:52:15.117Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:16.832Z] [BOT] ✅ Posted message: Product Security Engineer (University Grad) @ ORG_4f749de7 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:52:16.832Z] [BOT] 💾 Added channel posting: Product Security Engineer (University Grad) @ ORG_4f749de7 → location channel (2 total channels)
[2026-02-01T16:52:16.832Z] [BOT] 💾 BEFORE MERGE: 2034 jobs in memory (cached)
[2026-02-01T16:52:16.883Z] [BOT] ✅ Loaded V2 database: 2034 jobs
💾 DISK STATE: 2034 jobs on disk
[2026-02-01T16:52:16.883Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2034
[2026-02-01T16:52:16.887Z] [BOT] 🔀 Deep merged: Product Security Engineer (University Grad) @ ORG_4f749de7 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:16.887Z] [BOT] 💾 AFTER MERGE: 2034 jobs (merged disk + memory)
[2026-02-01T16:52:16.888Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-02-01T16:52:16.998Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:18.500Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Application Development" @ ORG_a258b30f Lending Services
   Category: TECH (default)
[2026-02-01T16:52:18.501Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:18.855Z] [BOT] ✅ Posted message: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #💻・tech-jobs
  ✅ Industry: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services
[2026-02-01T16:52:18.856Z] [BOT] 💾 Added channel posting: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services → category channel (1 total channels)
[2026-02-01T16:52:18.856Z] [BOT] 💾 BEFORE MERGE: 2035 jobs in memory (cached)
[2026-02-01T16:52:18.915Z] [BOT] ✅ Loaded V2 database: 2034 jobs
💾 DISK STATE: 2034 jobs on disk
[2026-02-01T16:52:18.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2035
[2026-02-01T16:52:18.920Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:18.920Z] [BOT] 💾 AFTER MERGE: 2035 jobs (merged disk + memory)
[2026-02-01T16:52:18.921Z] [BOT] ✅ No jobs to archive (all 2035 jobs within 7-day window)
[2026-02-01T16:52:19.046Z] [BOT] 💾 Saved posted_jobs.json: 2035 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:21.213Z] [BOT] ✅ Posted message: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:52:21.214Z] [BOT] 💾 Added channel posting: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services → location channel (2 total channels)
[2026-02-01T16:52:21.214Z] [BOT] 💾 BEFORE MERGE: 2035 jobs in memory (cached)
[2026-02-01T16:52:21.264Z] [BOT] ✅ Loaded V2 database: 2035 jobs
💾 DISK STATE: 2035 jobs on disk
[2026-02-01T16:52:21.264Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2035
[2026-02-01T16:52:21.268Z] [BOT] 🔀 Deep merged: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:21.268Z] [BOT] 💾 AFTER MERGE: 2035 jobs (merged disk + memory)
[2026-02-01T16:52:21.269Z] [BOT] ✅ No jobs to archive (all 2035 jobs within 7-day window)
[2026-02-01T16:52:21.383Z] [BOT] 💾 Saved posted_jobs.json: 2035 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:22.885Z] [BOT] 📍 [ROUTING] "New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-02-01T16:52:22.885Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:52:23.064Z] [BOT] ✅ Posted message: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb
[2026-02-01T16:52:23.064Z] [BOT] 💾 Added channel posting: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:52:23.065Z] [BOT] 💾 BEFORE MERGE: 2036 jobs in memory (cached)
[2026-02-01T16:52:23.132Z] [BOT] ✅ Loaded V2 database: 2035 jobs
💾 DISK STATE: 2035 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2036
[2026-02-01T16:52:23.138Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:23.139Z] [BOT] 💾 AFTER MERGE: 2036 jobs (merged disk + memory)
[2026-02-01T16:52:23.140Z] [BOT] ✅ No jobs to archive (all 2036 jobs within 7-day window)
[2026-02-01T16:52:23.247Z] [BOT] 💾 Saved posted_jobs.json: 2036 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:25.017Z] [BOT] ✅ Posted message: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:52:25.018Z] [BOT] 💾 Added channel posting: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:52:25.018Z] [BOT] 💾 BEFORE MERGE: 2036 jobs in memory (cached)
[2026-02-01T16:52:25.068Z] [BOT] ✅ Loaded V2 database: 2036 jobs
💾 DISK STATE: 2036 jobs on disk
[2026-02-01T16:52:25.069Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2036
[2026-02-01T16:52:25.072Z] [BOT] 🔀 Deep merged: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:25.072Z] [BOT] 💾 AFTER MERGE: 2036 jobs (merged disk + memory)
[2026-02-01T16:52:25.073Z] [BOT] ✅ No jobs to archive (all 2036 jobs within 7-day window)
[2026-02-01T16:52:25.202Z] [BOT] 💾 Saved posted_jobs.json: 2036 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:29.703Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T16:52:29.704Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_28d3793c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:52:29.704Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:52:30.131Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_28d3793c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_28d3793c
[2026-02-01T16:52:30.132Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_28d3793c → category channel (1 total channels)
[2026-02-01T16:52:30.132Z] [BOT] 💾 BEFORE MERGE: 2037 jobs in memory (cached)
[2026-02-01T16:52:30.183Z] [BOT] ✅ Loaded V2 database: 2036 jobs
💾 DISK STATE: 2036 jobs on disk
[2026-02-01T16:52:30.184Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2037
[2026-02-01T16:52:30.187Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:30.187Z] [BOT] 💾 AFTER MERGE: 2037 jobs (merged disk + memory)
[2026-02-01T16:52:30.189Z] [BOT] ✅ No jobs to archive (all 2037 jobs within 7-day window)
[2026-02-01T16:52:30.305Z] [BOT] 💾 Saved posted_jobs.json: 2037 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:32.067Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_28d3793c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:52:32.068Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_28d3793c → location channel (2 total channels)
[2026-02-01T16:52:32.068Z] [BOT] 💾 BEFORE MERGE: 2037 jobs in memory (cached)
[2026-02-01T16:52:32.120Z] [BOT] ✅ Loaded V2 database: 2037 jobs
💾 DISK STATE: 2037 jobs on disk
[2026-02-01T16:52:32.120Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2037
[2026-02-01T16:52:32.124Z] [BOT] 🔀 Deep merged: Machine Learning Engineer @ ORG_28d3793c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:52:32.124Z] [BOT] 💾 AFTER MERGE: 2037 jobs (merged disk + memory)
[2026-02-01T16:52:32.125Z] [BOT] ✅ No jobs to archive (all 2037 jobs within 7-day window)
[2026-02-01T16:52:32.238Z] [BOT] 💾 Saved posted_jobs.json: 2037 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:52:36.740Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T16:52:36.741Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "68332b6ceb85ddc3"
[2026-02-01T16:52:36.742Z] [BOT] ⏭️  Skipping duplicate: JID_e5f138cc (posted within 7 days)
[2026-02-01T16:52:36.742Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_22d12c5e..." not found, but found as SHA256 "124ddb1a72c850d6"
[2026-02-01T16:52:36.742Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_67095201 (posted within 7 days)
[2026-02-01T16:52:36.742Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8963fe53..." not found, but found as SHA256 "05d7acc8863b22a0"
[2026-02-01T16:52:36.742Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e3702d52 (posted within 7 days)
[2026-02-01T16:52:36.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4429f51..." not found, but found as SHA256 "1814be7a08f5055c"
[2026-02-01T16:52:36.743Z] [BOT] ⏭️  Skipping duplicate: JID_5ffad40c (posted within 7 days)
[2026-02-01T16:52:36.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4429f51..." not found, but found as SHA256 "c317b32a0ce812ec"
[2026-02-01T16:52:36.743Z] [BOT] ⏭️  Skipping duplicate: JID_56d6aa79 (posted within 7 days)
[2026-02-01T16:52:36.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a22e1a29..." not found, but found as SHA256 "5ebac0e8ff3290cd"
[2026-02-01T16:52:36.743Z] [BOT] ⏭️  Skipping duplicate: JID_a22e1a29 (posted within 7 days)
[2026-02-01T16:52:36.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b27f664a..." not found, but found as SHA256 "fb91706ec222735f"
[2026-02-01T16:52:36.744Z] [BOT] ⏭️  Skipping duplicate: JID_b27f664a (posted within 7 days)
[2026-02-01T16:52:36.744Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_22d97a8a..." not found, but found as SHA256 "6dbd2b5b3cb4f8b1"
[2026-02-01T16:52:36.744Z] [BOT] ⏭️  Skipping duplicate: JID_22d97a8a (posted within 7 days)
[2026-02-01T16:52:36.744Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5bedc79-..." not found, but found as SHA256 "b4a69045f015202b"
⏭️  Skipping duplicate: JID_aba714f4 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ce9498fb..." not found, but found as SHA256 "88c542cf408fb526"
[2026-02-01T16:52:36.744Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1ad6948f (posted within 7 days)
[2026-02-01T16:52:36.894Z] [BOT] ✅ Loaded pending queue: 2946 total (879 pending, 50 enriched, 2017 posted)
[2026-02-01T16:52:37.100Z] [BOT] ✅ Saved pending queue: 2946 total (879 pending, 40 enriched, 2027 posted)
[2026-02-01T16:52:37.101Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T16:52:37.206Z] [BOT] 📂 Loaded 12108 existing routing entries
[2026-02-01T16:52:37.341Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12118
[2026-02-01T16:52:37.342Z] [BOT] Timestamp: 2026-02-01T16:52:37.298Z
[2026-02-01T16:52:37.342Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T16:52:37.342Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T16:52:37.342Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-02-01T16:52:37.342Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #🌲・JID_efdf5921: 4 posts
     3. #📍・JID_6daed763: 3 posts
     4. #🌉・JID_739bbc0b: 3 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T16:52:37.343Z] [BOT] [STATS] Channel stats saved
[2026-02-01T16:52:37.343Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2037 jobs in memory (cached)
[2026-02-01T16:52:37.401Z] [BOT] ✅ Loaded V2 database: 2037 jobs
💾 DISK STATE: 2037 jobs on disk
[2026-02-01T16:52:37.402Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2037
[2026-02-01T16:52:37.406Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:52:37.406Z] [BOT] 💾 AFTER MERGE: 2037 jobs (merged disk + memory)
[2026-02-01T16:52:37.407Z] [BOT] ✅ No jobs to archive (all 2037 jobs within 7-day window)
[2026-02-01T16:52:37.524Z] [BOT] 💾 Saved posted_jobs.json: 2037 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T16:52:39.549Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2670) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*