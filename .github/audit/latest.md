# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T12:17:15.232Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T12:16:42.032Z] ========================================
[2026-01-30T12:16:42.034Z] Discord Bot Execution Log
[2026-01-30T12:16:42.034Z] Environment: GitHub Actions
[2026-01-30T12:16:42.034Z] Node Version: v20.20.0
[2026-01-30T12:16:42.034Z] ========================================
[2026-01-30T12:16:42.034Z] Environment Variables Check:
[2026-01-30T12:16:42.034Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T12:16:42.034Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T12:16:42.035Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T12:16:42.035Z] 
Multi-Channel Configuration:
[2026-01-30T12:16:42.035Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T12:16:42.035Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T12:16:42.035Z] 
Data Files Check:
[2026-01-30T12:16:42.036Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T12:16:42.056Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2862029 bytes)
[2026-01-30T12:16:42.056Z] 
========================================
[2026-01-30T12:16:42.056Z] Starting Enhanced Discord Bot...
[2026-01-30T12:16:42.056Z] ========================================
[2026-01-30T12:16:42.548Z] [BOT] ✅ Loaded V2 database: 439 jobs
[2026-01-30T12:16:43.315Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T12:16:43.315Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T12:16:43.315Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T12:16:43.467Z] [BOT] ✅ Loaded pending queue: 2920 total (2460 pending, 50 enriched, 410 posted)
[2026-01-30T12:16:43.467Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T12:16:43.468Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:16:43.468Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T12:16:43.468Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:16:43.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T12:16:43.469Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T12:16:43.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T12:16:43.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T12:16:43.469Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T12:16:43.470Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T12:16:43.470Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T12:16:43.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T12:16:43.471Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T12:16:43.471Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T12:16:43.472Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T12:16:43.475Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T12:16:43.475Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Director, Enterprise Select-South East US at samsara
[2026-01-30T12:16:43.475Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-01-30T12:16:43.619Z] [BOT] ✅ Loaded pending queue: 2920 total (2460 pending, 50 enriched, 410 posted)
[2026-01-30T12:16:43.787Z] [BOT] ✅ Saved pending queue: 2918 total (2460 pending, 48 enriched, 410 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T12:16:43.787Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T12:16:43.788Z] [BOT] 📋 After multi-location grouping: 22 unique jobs to post
[2026-01-30T12:16:43.788Z] [BOT] (12 grouped as same job with different locations)
📍 5 jobs with multiple locations:
   - Strategic Account Executive (SLED) @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
   - Strategic Account Executive @ datadog: san francisco, california, usa, remote, new york, new york, usa, boston, massachusetts, usa, chicago, illinois, usa
   - Key Accounts Executive @ datadog: chicago, illinois, usa; dallas, texas, usa; san francisco, california, usa, boston, massachusetts, usa; new york, new york, usa
[2026-01-30T12:16:43.788Z] [BOT] - Enterprise Sales Executive (SLED) @ datadog: san francisco, california, usa, remote
   - Enterprise Sales Executive  @ datadog: new york, new york, usa, remote, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T12:16:43.792Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-30T12:16:43.793Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
   Category: TECH (default)
[2026-01-30T12:16:43.793Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:43.809Z] [BOT ERROR] (node:2717) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T12:16:44.016Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #💻・tech-jobs
[2026-01-30T12:16:44.016Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-30T12:16:44.017Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-30T12:16:44.017Z] [BOT] 💾 BEFORE MERGE: 440 jobs in memory (cached)
[2026-01-30T12:16:44.030Z] [BOT] ✅ Loaded V2 database: 439 jobs
💾 DISK STATE: 439 jobs on disk
[2026-01-30T12:16:44.030Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=440
[2026-01-30T12:16:44.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:16:44.032Z] [BOT] 💾 AFTER MERGE: 440 jobs (merged disk + memory)
[2026-01-30T12:16:44.032Z] [BOT] ✅ No jobs to archive (all 440 jobs within 7-day window)
[2026-01-30T12:16:44.068Z] [BOT] 💾 Saved posted_jobs.json: 440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:46.002Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:16:46.003Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 440 jobs in memory (cached)
[2026-01-30T12:16:46.019Z] [BOT] ✅ Loaded V2 database: 440 jobs
💾 DISK STATE: 440 jobs on disk
[2026-01-30T12:16:46.019Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=440
[2026-01-30T12:16:46.020Z] [BOT] 🔀 Deep merged: Strategic Account Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:16:46.020Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 440 jobs (merged disk + memory)
[2026-01-30T12:16:46.021Z] [BOT] ✅ No jobs to archive (all 440 jobs within 7-day window)
[2026-01-30T12:16:46.051Z] [BOT] 💾 Saved posted_jobs.json: 440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:47.553Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:47.965Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T12:16:47.965Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T12:16:47.965Z] [BOT] 💾 BEFORE MERGE: 441 jobs in memory (cached)
[2026-01-30T12:16:47.978Z] [BOT] ✅ Loaded V2 database: 440 jobs
💾 DISK STATE: 440 jobs on disk
[2026-01-30T12:16:47.978Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=441
[2026-01-30T12:16:47.979Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 441 jobs (merged disk + memory)
[2026-01-30T12:16:47.979Z] [BOT] ✅ No jobs to archive (all 441 jobs within 7-day window)
[2026-01-30T12:16:48.014Z] [BOT] 💾 Saved posted_jobs.json: 441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:49.516Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (FED)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:49.704Z] [BOT] ✅ Posted message: Strategic Account Executive (FED) @ datadog in #💻・tech-jobs
[2026-01-30T12:16:49.705Z] [BOT] ✅ Industry: Strategic Account Executive (FED) @ datadog
[2026-01-30T12:16:49.705Z] [BOT] 💾 Added channel posting: Strategic Account Executive (FED) @ datadog → category channel (1 total channels)
[2026-01-30T12:16:49.705Z] [BOT] 💾 BEFORE MERGE: 442 jobs in memory (cached)
[2026-01-30T12:16:49.718Z] [BOT] ✅ Loaded V2 database: 441 jobs
💾 DISK STATE: 441 jobs on disk
[2026-01-30T12:16:49.718Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=442
[2026-01-30T12:16:49.719Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:16:49.719Z] [BOT] 💾 AFTER MERGE: 442 jobs (merged disk + memory)
[2026-01-30T12:16:49.720Z] [BOT] ✅ No jobs to archive (all 442 jobs within 7-day window)
[2026-01-30T12:16:49.753Z] [BOT] 💾 Saved posted_jobs.json: 442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:51.440Z] [BOT] ✅ Posted message: Strategic Account Executive (FED) @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:16:51.440Z] [BOT] 💾 Added channel posting: Strategic Account Executive (FED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 442 jobs in memory (cached)
[2026-01-30T12:16:51.453Z] [BOT] ✅ Loaded V2 database: 442 jobs
💾 DISK STATE: 442 jobs on disk
[2026-01-30T12:16:51.453Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=442
[2026-01-30T12:16:51.454Z] [BOT] 🔀 Deep merged: Strategic Account Executive (FED) @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T12:16:51.455Z] [BOT] 💾 AFTER MERGE: 442 jobs (merged disk + memory)
[2026-01-30T12:16:51.455Z] [BOT] ✅ No jobs to archive (all 442 jobs within 7-day window)
[2026-01-30T12:16:51.489Z] [BOT] 💾 Saved posted_jobs.json: 442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:52.990Z] [BOT] 📍 [ROUTING] "Security Product Engineer 1 - ArcGIS Enterprise" @ ORG_0fb6ee9c
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:53.228Z] [BOT] ✅ Posted message: Security Product Engineer 1 - ArcGIS Enterprise @ ORG_0fb6ee9c in #💻・tech-jobs
  ✅ Industry: Security Product Engineer 1 - ArcGIS Enterprise @ ORG_0fb6ee9c
[2026-01-30T12:16:53.228Z] [BOT] 💾 Added channel posting: Security Product Engineer 1 - ArcGIS Enterprise @ ORG_0fb6ee9c → category channel (1 total channels)
[2026-01-30T12:16:53.228Z] [BOT] 💾 BEFORE MERGE: 443 jobs in memory (cached)
[2026-01-30T12:16:53.247Z] [BOT] ✅ Loaded V2 database: 442 jobs
💾 DISK STATE: 442 jobs on disk
[2026-01-30T12:16:53.247Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=443
[2026-01-30T12:16:53.248Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:16:53.248Z] [BOT] 💾 AFTER MERGE: 443 jobs (merged disk + memory)
[2026-01-30T12:16:53.248Z] [BOT] ✅ No jobs to archive (all 443 jobs within 7-day window)
[2026-01-30T12:16:53.289Z] [BOT] 💾 Saved posted_jobs.json: 443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:54.790Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_3bcc9251in
   Category: TECH (matched: "software")
[2026-01-30T12:16:54.791Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:55.031Z] [BOT] ✅ Posted message: Software Developer 1 @ ORG_3bcc9251in in #💻・tech-jobs
  ✅ Industry: Software Developer 1 @ ORG_3bcc9251in
[2026-01-30T12:16:55.032Z] [BOT] 💾 Added channel posting: Software Developer 1 @ ORG_3bcc9251in → category channel (1 total channels)
💾 BEFORE MERGE: 444 jobs in memory (cached)
[2026-01-30T12:16:55.045Z] [BOT] ✅ Loaded V2 database: 443 jobs
💾 DISK STATE: 443 jobs on disk
[2026-01-30T12:16:55.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=444
[2026-01-30T12:16:55.046Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:16:55.046Z] [BOT] 💾 AFTER MERGE: 444 jobs (merged disk + memory)
[2026-01-30T12:16:55.047Z] [BOT] ✅ No jobs to archive (all 444 jobs within 7-day window)
[2026-01-30T12:16:55.083Z] [BOT] 💾 Saved posted_jobs.json: 444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:56.584Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Applications" @ ORG_d01167bb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:56.771Z] [BOT] ✅ Posted message: Software Engineer 1 - Applications @ ORG_d01167bb in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Applications @ ORG_d01167bb
[2026-01-30T12:16:56.771Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Applications @ ORG_d01167bb → category channel (1 total channels)
[2026-01-30T12:16:56.771Z] [BOT] 💾 BEFORE MERGE: 445 jobs in memory (cached)
[2026-01-30T12:16:56.788Z] [BOT] ✅ Loaded V2 database: 444 jobs
💾 DISK STATE: 444 jobs on disk
[2026-01-30T12:16:56.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=445
[2026-01-30T12:16:56.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:16:56.790Z] [BOT] 💾 AFTER MERGE: 445 jobs (merged disk + memory)
[2026-01-30T12:16:56.790Z] [BOT] ✅ No jobs to archive (all 445 jobs within 7-day window)
[2026-01-30T12:16:56.824Z] [BOT] 💾 Saved posted_jobs.json: 445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:16:58.326Z] [BOT] 📍 [ROUTING] "Associate Specialist - Engineering" @ ORG_90475804
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T12:16:58.326Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:16:58.472Z] [BOT] ✅ Posted message: Associate Specialist - Engineering @ ORG_90475804 in #💻・tech-jobs
  ✅ Industry: Associate Specialist - Engineering @ ORG_90475804
[2026-01-30T12:16:58.472Z] [BOT] 💾 Added channel posting: Associate Specialist - Engineering @ ORG_90475804 → category channel (1 total channels)
💾 BEFORE MERGE: 446 jobs in memory (cached)
[2026-01-30T12:16:58.485Z] [BOT] ✅ Loaded V2 database: 445 jobs
💾 DISK STATE: 445 jobs on disk
[2026-01-30T12:16:58.485Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=446
[2026-01-30T12:16:58.486Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 446 jobs (merged disk + memory)
[2026-01-30T12:16:58.487Z] [BOT] ✅ No jobs to archive (all 446 jobs within 7-day window)
[2026-01-30T12:16:58.518Z] [BOT] 💾 Saved posted_jobs.json: 446 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:17:00.020Z] [BOT] 📍 [ROUTING] "Engineering Administrator" @ ORG_18df751a
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T12:17:00.020Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:17:00.605Z] [BOT] ✅ Posted message: Engineering Administrator @ ORG_18df751a in #💻・tech-jobs
  ✅ Industry: Engineering Administrator @ ORG_18df751a
[2026-01-30T12:17:00.605Z] [BOT] 💾 Added channel posting: Engineering Administrator @ ORG_18df751a → category channel (1 total channels)
[2026-01-30T12:17:00.605Z] [BOT] 💾 BEFORE MERGE: 447 jobs in memory (cached)
[2026-01-30T12:17:00.621Z] [BOT] ✅ Loaded V2 database: 446 jobs
💾 DISK STATE: 446 jobs on disk
[2026-01-30T12:17:00.621Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=447
[2026-01-30T12:17:00.622Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:17:00.622Z] [BOT] 💾 AFTER MERGE: 447 jobs (merged disk + memory)
[2026-01-30T12:17:00.622Z] [BOT] ✅ No jobs to archive (all 447 jobs within 7-day window)
[2026-01-30T12:17:00.654Z] [BOT] 💾 Saved posted_jobs.json: 447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:17:05.156Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T12:17:05.157Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_0fb6ee9c
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T12:17:05.157Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T12:17:05.361Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_0fb6ee9c in #📊・JID_fb739488
[2026-01-30T12:17:05.361Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_0fb6ee9c
[2026-01-30T12:17:05.361Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_0fb6ee9c → category channel (1 total channels)
[2026-01-30T12:17:05.361Z] [BOT] 💾 BEFORE MERGE: 448 jobs in memory (cached)
[2026-01-30T12:17:05.374Z] [BOT] ✅ Loaded V2 database: 447 jobs
💾 DISK STATE: 447 jobs on disk
[2026-01-30T12:17:05.374Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=448
[2026-01-30T12:17:05.376Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 448 jobs (merged disk + memory)
[2026-01-30T12:17:05.376Z] [BOT] ✅ No jobs to archive (all 448 jobs within 7-day window)
[2026-01-30T12:17:05.407Z] [BOT] 💾 Saved posted_jobs.json: 448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:17:06.909Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Dpus - Global Live" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T12:17:07.155Z] [BOT] ✅ Posted message: Data Engineer Graduate - Dpus - Global Live @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-01-30T12:17:07.155Z] [BOT] ✅ Industry: Data Engineer Graduate - Dpus - Global Live @ ORG_1bb6fcfb
[2026-01-30T12:17:07.155Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - Dpus - Global Live @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 449 jobs in memory (cached)
[2026-01-30T12:17:07.172Z] [BOT] ✅ Loaded V2 database: 448 jobs
💾 DISK STATE: 448 jobs on disk
[2026-01-30T12:17:07.172Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=449
[2026-01-30T12:17:07.173Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 449 jobs (merged disk + memory)
[2026-01-30T12:17:07.173Z] [BOT] ✅ No jobs to archive (all 449 jobs within 7-day window)
[2026-01-30T12:17:07.206Z] [BOT] 💾 Saved posted_jobs.json: 449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:17:11.707Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_235e4f93..." not found, but found as SHA256 "dd04af1d3ca5599d"
[2026-01-30T12:17:11.709Z] [BOT] ⏭️  Skipping duplicate: JID_235e4f93 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8b67a32e..." not found, but found as SHA256 "789957eaddbdc707"
⏭️  Skipping duplicate: JID_8b67a32e (posted within 7 days)
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_40da89da..." not found, but found as SHA256 "c48cfbbf03dc82ae"
⏭️  Skipping duplicate: JID_40da89da (posted within 7 days)
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e96ccfe..." not found, but found as SHA256 "879ec20fb73e7b85"
[2026-01-30T12:17:11.709Z] [BOT] ⏭️  Skipping duplicate: JID_4e96ccfe (posted within 7 days)
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76787229..." not found, but found as SHA256 "2358a0a13b538419"
⏭️  Skipping duplicate: JID_76787229 (posted within 7 days)
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0f7195dd-redfin_care..." not found, but found as SHA256 "8b135844c5e0f367"
⏭️  Skipping duplicate: JID_0f7195dd-redfin_careers-JID_dc0e9ca8-i_59686 (posted within 7 days)
[2026-01-30T12:17:11.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_787cd3f3..." not found, but found as SHA256 "6b7fd78b517f6cc1"
⏭️  Skipping duplicate: JID_d0d0a7da-_6541 (posted within 7 days)
[2026-01-30T12:17:11.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c29b7207..." not found, but found as SHA256 "f55463d659ea11ba"
⏭️  Skipping duplicate: JID_383c717b-engineering_r379447-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_54768320..." not found, but found as SHA256 "976676c50bb42f14"
⏭️  Skipping duplicate: JID_50e628b3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a4de6b05..." not found, but found as SHA256 "68c3b4bab8623f61"
⏭️  Skipping duplicate: JID_6796d1d6-CH_49936106 (posted within 7 days)
[2026-01-30T12:17:11.859Z] [BOT] ✅ Loaded pending queue: 2918 total (2460 pending, 48 enriched, 410 posted)
[2026-01-30T12:17:12.048Z] [BOT] ✅ Saved pending queue: 2918 total (2460 pending, 38 enriched, 420 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T12:17:12.149Z] [BOT] 📂 Loaded 10501 existing routing entries
[2026-01-30T12:17:12.286Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T12:17:12.287Z] [BOT] New entries: 10
   Total entries: 10511
   Timestamp: 2026-01-30T12:17:12.231Z
[2026-01-30T12:17:12.287Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 28
[2026-01-30T12:17:12.287Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 16
[2026-01-30T12:17:12.287Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T12:17:12.288Z] [BOT] Total posts: 12
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #📊・JID_fb739488: 2 posts
[2026-01-30T12:17:12.288Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T12:17:12.288Z] [BOT] 💾 BEFORE MERGE: 449 jobs in memory (cached)
[2026-01-30T12:17:12.301Z] [BOT] ✅ Loaded V2 database: 449 jobs
💾 DISK STATE: 449 jobs on disk
[2026-01-30T12:17:12.301Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=449
[2026-01-30T12:17:12.302Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 449 jobs (merged disk + memory)
[2026-01-30T12:17:12.302Z] [BOT] ✅ No jobs to archive (all 449 jobs within 7-day window)
[2026-01-30T12:17:12.334Z] [BOT] 💾 Saved posted_jobs.json: 449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:17:12.335Z] [BOT] ✅ Database saved successfully
[2026-01-30T12:17:14.358Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2717) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*