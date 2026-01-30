# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T23:03:08.898Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T23:02:28.654Z] ========================================
[2026-01-30T23:02:28.656Z] Discord Bot Execution Log
[2026-01-30T23:02:28.656Z] Environment: GitHub Actions
[2026-01-30T23:02:28.656Z] Node Version: v20.20.0
[2026-01-30T23:02:28.656Z] ========================================
[2026-01-30T23:02:28.656Z] Environment Variables Check:
[2026-01-30T23:02:28.656Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T23:02:28.656Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T23:02:28.657Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T23:02:28.657Z] 
Multi-Channel Configuration:
[2026-01-30T23:02:28.657Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.657Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T23:02:28.658Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T23:02:28.658Z] 
Data Files Check:
[2026-01-30T23:02:28.659Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T23:02:28.685Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4945379 bytes)
[2026-01-30T23:02:28.685Z] 
========================================
[2026-01-30T23:02:28.685Z] Starting Enhanced Discord Bot...
[2026-01-30T23:02:28.685Z] ========================================
[2026-01-30T23:02:29.220Z] [BOT] ✅ Loaded V2 database: 748 jobs
[2026-01-30T23:02:29.915Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T23:02:29.915Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T23:02:29.915Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T23:02:30.037Z] [BOT] ✅ Loaded pending queue: 2939 total (2170 pending, 50 enriched, 719 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:02:30.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T23:02:30.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T23:02:30.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T23:02:30.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T23:02:30.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T23:02:30.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T23:02:30.041Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T23:02:30.041Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T23:02:30.041Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T23:02:30.041Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T23:02:30.046Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T23:02:30.047Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist - Product at gusto
[2026-01-30T23:02:30.145Z] [BOT] ✅ Loaded pending queue: 2939 total (2170 pending, 50 enriched, 719 posted)
[2026-01-30T23:02:30.322Z] [BOT] ✅ Saved pending queue: 2938 total (2170 pending, 49 enriched, 719 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-30T23:02:30.322Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-30T23:02:30.323Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-30T23:02:30.324Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T23:02:30.324Z] [BOT] - Select Major Account Executive EST/CST - Tallahassee, FL @ samsara: tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T23:02:30.328Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T23:02:30.329Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Tallahassee, FL" @ samsara
[2026-01-30T23:02:30.329Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T23:02:30.346Z] [BOT ERROR] (node:2944) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T23:02:30.705Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara in #💰・finance-jobs
[2026-01-30T23:02:30.705Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara
[2026-01-30T23:02:30.706Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara → category channel (1 total channels)
[2026-01-30T23:02:30.706Z] [BOT] 💾 BEFORE MERGE: 749 jobs in memory (cached)
[2026-01-30T23:02:30.722Z] [BOT] ✅ Loaded V2 database: 748 jobs
💾 DISK STATE: 748 jobs on disk
[2026-01-30T23:02:30.722Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=749
[2026-01-30T23:02:30.724Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:02:30.724Z] [BOT] 💾 AFTER MERGE: 749 jobs (merged disk + memory)
[2026-01-30T23:02:30.725Z] [BOT] ✅ No jobs to archive (all 749 jobs within 7-day window)
[2026-01-30T23:02:30.778Z] [BOT] 💾 Saved posted_jobs.json: 749 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:32.282Z] [BOT] 📍 [ROUTING] "Head of Legal Operations" @ brex
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T23:02:32.622Z] [BOT] ✅ Posted message: Head of Legal Operations @ brex in #💰・finance-jobs
  ✅ Industry: Head of Legal Operations @ brex
[2026-01-30T23:02:32.622Z] [BOT] 💾 Added channel posting: Head of Legal Operations @ brex → category channel (1 total channels)
[2026-01-30T23:02:32.622Z] [BOT] 💾 BEFORE MERGE: 750 jobs in memory (cached)
[2026-01-30T23:02:32.637Z] [BOT] ✅ Loaded V2 database: 749 jobs
[2026-01-30T23:02:32.637Z] [BOT] 💾 DISK STATE: 749 jobs on disk
[2026-01-30T23:02:32.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=750
[2026-01-30T23:02:32.639Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:02:32.639Z] [BOT] 💾 AFTER MERGE: 750 jobs (merged disk + memory)
[2026-01-30T23:02:32.640Z] [BOT] ✅ No jobs to archive (all 750 jobs within 7-day window)
[2026-01-30T23:02:32.689Z] [BOT] 💾 Saved posted_jobs.json: 750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:37.190Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T23:02:37.191Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_cae3b4b3
[2026-01-30T23:02:37.191Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:02:37.191Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T23:02:37.502Z] [BOT] ✅ Posted message: Data Engineer @ ORG_cae3b4b3 in #🤖・ai-jobs
[2026-01-30T23:02:37.502Z] [BOT] ✅ Industry: Data Engineer @ ORG_cae3b4b3
[2026-01-30T23:02:37.502Z] [BOT] 💾 Added channel posting: Data Engineer @ ORG_cae3b4b3 → category channel (1 total channels)
[2026-01-30T23:02:37.502Z] [BOT] 💾 BEFORE MERGE: 751 jobs in memory (cached)
[2026-01-30T23:02:37.517Z] [BOT] ✅ Loaded V2 database: 750 jobs
💾 DISK STATE: 750 jobs on disk
[2026-01-30T23:02:37.517Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=751
[2026-01-30T23:02:37.518Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 751 jobs (merged disk + memory)
[2026-01-30T23:02:37.519Z] [BOT] ✅ No jobs to archive (all 751 jobs within 7-day window)
[2026-01-30T23:02:37.569Z] [BOT] 💾 Saved posted_jobs.json: 751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:39.445Z] [BOT] ✅ Posted message: Data Engineer @ ORG_cae3b4b3 in #🏠・JID_ead674af
[2026-01-30T23:02:39.445Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T23:02:39.445Z] [BOT] 💾 Added channel posting: Data Engineer @ ORG_cae3b4b3 → location channel (2 total channels)
💾 BEFORE MERGE: 751 jobs in memory (cached)
[2026-01-30T23:02:39.475Z] [BOT] ✅ Loaded V2 database: 751 jobs
💾 DISK STATE: 751 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=751
[2026-01-30T23:02:39.477Z] [BOT] 🔀 Deep merged: Data Engineer @ ORG_cae3b4b3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:02:39.477Z] [BOT] 💾 AFTER MERGE: 751 jobs (merged disk + memory)
[2026-01-30T23:02:39.478Z] [BOT] ✅ No jobs to archive (all 751 jobs within 7-day window)
[2026-01-30T23:02:39.538Z] [BOT] 💾 Saved posted_jobs.json: 751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:44.039Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T23:02:44.040Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_c910d474 Atomics
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:02:44.327Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_c910d474 Atomics in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_c910d474 Atomics
[2026-01-30T23:02:44.327Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_c910d474 Atomics → category channel (1 total channels)
[2026-01-30T23:02:44.327Z] [BOT] 💾 BEFORE MERGE: 752 jobs in memory (cached)
[2026-01-30T23:02:44.342Z] [BOT] ✅ Loaded V2 database: 751 jobs
💾 DISK STATE: 751 jobs on disk
[2026-01-30T23:02:44.343Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=752
[2026-01-30T23:02:44.345Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 752 jobs (merged disk + memory)
[2026-01-30T23:02:44.345Z] [BOT] ✅ No jobs to archive (all 752 jobs within 7-day window)
[2026-01-30T23:02:44.402Z] [BOT] 💾 Saved posted_jobs.json: 752 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:45.905Z] [BOT] 📍 [ROUTING] "Hydrologist 1" @ ORG_5ff96fe0 Vegas Valley Water District
[2026-01-30T23:02:45.905Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:02:46.160Z] [BOT] ✅ Posted message: Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District in #💻・tech-jobs
  ✅ Industry: Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District
[2026-01-30T23:02:46.160Z] [BOT] 💾 Added channel posting: Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District → category channel (1 total channels)
[2026-01-30T23:02:46.160Z] [BOT] 💾 BEFORE MERGE: 753 jobs in memory (cached)
[2026-01-30T23:02:46.175Z] [BOT] ✅ Loaded V2 database: 752 jobs
💾 DISK STATE: 752 jobs on disk
[2026-01-30T23:02:46.175Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=753
[2026-01-30T23:02:46.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 753 jobs (merged disk + memory)
[2026-01-30T23:02:46.177Z] [BOT] ✅ No jobs to archive (all 753 jobs within 7-day window)
[2026-01-30T23:02:46.226Z] [BOT] 💾 Saved posted_jobs.json: 753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:47.727Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise - Figma Weave (New York, United States)" @ figma
[2026-01-30T23:02:47.727Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:02:48.043Z] [BOT] ✅ Posted message: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma in #💻・tech-jobs
[2026-01-30T23:02:48.043Z] [BOT] ✅ Industry: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma
[2026-01-30T23:02:48.043Z] [BOT] 💾 Added channel posting: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma → category channel (1 total channels)
[2026-01-30T23:02:48.043Z] [BOT] 💾 BEFORE MERGE: 754 jobs in memory (cached)
[2026-01-30T23:02:48.058Z] [BOT] ✅ Loaded V2 database: 753 jobs
💾 DISK STATE: 753 jobs on disk
[2026-01-30T23:02:48.058Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=754
[2026-01-30T23:02:48.060Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:02:48.060Z] [BOT] 💾 AFTER MERGE: 754 jobs (merged disk + memory)
[2026-01-30T23:02:48.060Z] [BOT] ✅ No jobs to archive (all 754 jobs within 7-day window)
[2026-01-30T23:02:48.110Z] [BOT] 💾 Saved posted_jobs.json: 754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:49.895Z] [BOT] ✅ Posted message: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma in #🗽・JID_98d4f0de
[2026-01-30T23:02:49.895Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:02:49.895Z] [BOT] 💾 Added channel posting: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma → location channel (2 total channels)
💾 BEFORE MERGE: 754 jobs in memory (cached)
[2026-01-30T23:02:49.911Z] [BOT] ✅ Loaded V2 database: 754 jobs
💾 DISK STATE: 754 jobs on disk
[2026-01-30T23:02:49.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=754
[2026-01-30T23:02:49.913Z] [BOT] 🔀 Deep merged: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:02:49.913Z] [BOT] 💾 AFTER MERGE: 754 jobs (merged disk + memory)
[2026-01-30T23:02:49.913Z] [BOT] ✅ No jobs to archive (all 754 jobs within 7-day window)
[2026-01-30T23:02:49.962Z] [BOT] 💾 Saved posted_jobs.json: 754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:51.463Z] [BOT] 📍 [ROUTING] "Benefits Technology Analyst" @ ORG_22fa11a5ingham & Butler
[2026-01-30T23:02:51.463Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:02:51.730Z] [BOT] ✅ Posted message: Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler in #💻・tech-jobs
  ✅ Industry: Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler
[2026-01-30T23:02:51.731Z] [BOT] 💾 Added channel posting: Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler → category channel (1 total channels)
💾 BEFORE MERGE: 755 jobs in memory (cached)
[2026-01-30T23:02:51.746Z] [BOT] ✅ Loaded V2 database: 754 jobs
💾 DISK STATE: 754 jobs on disk
[2026-01-30T23:02:51.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=755
[2026-01-30T23:02:51.748Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 755 jobs (merged disk + memory)
[2026-01-30T23:02:51.748Z] [BOT] ✅ No jobs to archive (all 755 jobs within 7-day window)
[2026-01-30T23:02:51.797Z] [BOT] 💾 Saved posted_jobs.json: 755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:53.299Z] [BOT] 📍 [ROUTING] "Personal Property Pricing Specialist" @ ORG_56d3dff7
[2026-01-30T23:02:53.299Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:02:53.551Z] [BOT] ✅ Posted message: Personal Property Pricing Specialist @ ORG_56d3dff7 in #💻・tech-jobs
[2026-01-30T23:02:53.551Z] [BOT] ✅ Industry: Personal Property Pricing Specialist @ ORG_56d3dff7
[2026-01-30T23:02:53.552Z] [BOT] 💾 Added channel posting: Personal Property Pricing Specialist @ ORG_56d3dff7 → category channel (1 total channels)
💾 BEFORE MERGE: 756 jobs in memory (cached)
[2026-01-30T23:02:53.566Z] [BOT] ✅ Loaded V2 database: 755 jobs
💾 DISK STATE: 755 jobs on disk
[2026-01-30T23:02:53.567Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=756
[2026-01-30T23:02:53.568Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 756 jobs (merged disk + memory)
[2026-01-30T23:02:53.569Z] [BOT] ✅ No jobs to archive (all 756 jobs within 7-day window)
[2026-01-30T23:02:53.617Z] [BOT] 💾 Saved posted_jobs.json: 756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:02:58.118Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T23:02:58.119Z] [BOT] 📍 [ROUTING] "Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-30T23:02:58.119Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T23:02:58.439Z] [BOT] ✅ Posted message: Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb
[2026-01-30T23:02:58.440Z] [BOT] 💾 Added channel posting: Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 757 jobs in memory (cached)
[2026-01-30T23:02:58.454Z] [BOT] ✅ Loaded V2 database: 756 jobs
💾 DISK STATE: 756 jobs on disk
[2026-01-30T23:02:58.455Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=757
[2026-01-30T23:02:58.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:02:58.457Z] [BOT] 💾 AFTER MERGE: 757 jobs (merged disk + memory)
[2026-01-30T23:02:58.457Z] [BOT] ✅ No jobs to archive (all 757 jobs within 7-day window)
[2026-01-30T23:02:58.507Z] [BOT] 💾 Saved posted_jobs.json: 757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:03:00.009Z] [BOT] 📍 [ROUTING] "Data Analyst - Lending" @ ORG_4cc4e63c
[2026-01-30T23:03:00.009Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T23:03:00.299Z] [BOT] ✅ Posted message: Data Analyst - Lending @ ORG_4cc4e63c in #📊・JID_fb739488
[2026-01-30T23:03:00.300Z] [BOT] ✅ Industry: Data Analyst - Lending @ ORG_4cc4e63c
[2026-01-30T23:03:00.300Z] [BOT] 💾 Added channel posting: Data Analyst - Lending @ ORG_4cc4e63c → category channel (1 total channels)
[2026-01-30T23:03:00.300Z] [BOT] 💾 BEFORE MERGE: 758 jobs in memory (cached)
[2026-01-30T23:03:00.315Z] [BOT] ✅ Loaded V2 database: 757 jobs
💾 DISK STATE: 757 jobs on disk
[2026-01-30T23:03:00.315Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=758
[2026-01-30T23:03:00.317Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:03:00.317Z] [BOT] 💾 AFTER MERGE: 758 jobs (merged disk + memory)
[2026-01-30T23:03:00.318Z] [BOT] ✅ No jobs to archive (all 758 jobs within 7-day window)
[2026-01-30T23:03:00.366Z] [BOT] 💾 Saved posted_jobs.json: 758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:03:04.868Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T23:03:04.869Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "18fd166114c9e0e5"
[2026-01-30T23:03:04.869Z] [BOT] ⏭️  Skipping duplicate: JID_7cc3f2a7 (posted within 7 days)
[2026-01-30T23:03:04.869Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7db3557d..." not found, but found as SHA256 "6e27ef9d91808270"
⏭️  Skipping duplicate: JID_03b4e370 (posted within 7 days)
[2026-01-30T23:03:04.870Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_598ebc0e-..." not found, but found as SHA256 "e87d8a25b79d9194"
[2026-01-30T23:03:04.870Z] [BOT] ⏭️  Skipping duplicate: JID_4e3533af (posted within 7 days)
[2026-01-30T23:03:04.870Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2ef6f49..." not found, but found as SHA256 "0855451e81865715"
⏭️  Skipping duplicate: JID_b6028d6a-i_r0003445 (posted within 7 days)
[2026-01-30T23:03:04.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d73a641..." not found, but found as SHA256 "0c1d0828750a04c2"
⏭️  Skipping duplicate: JID_6796d1d6-CH_bcc4694e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_35be777e..." not found, but found as SHA256 "1e51b6d30bc3b079"
⏭️  Skipping duplicate: JID_a8619621 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_db983d11..." not found, but found as SHA256 "2763b96c7a8f6b0c"
⏭️  Skipping duplicate: JID_c6d2118b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_761f2d30..." not found, but found as SHA256 "002d16df4ae644eb"
⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2908 (posted within 7 days)
[2026-01-30T23:03:04.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f30a76cc..." not found, but found as SHA256 "30b4002c9184ab7c"
⏭️  Skipping duplicate: JID_f30a76cc (posted within 7 days)
[2026-01-30T23:03:04.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9067cb88..." not found, but found as SHA256 "a2e179b60d71c514"
⏭️  Skipping duplicate: JID_e5c76e1a (posted within 7 days)
[2026-01-30T23:03:04.979Z] [BOT] ✅ Loaded pending queue: 2938 total (2170 pending, 49 enriched, 719 posted)
[2026-01-30T23:03:05.158Z] [BOT] ✅ Saved pending queue: 2938 total (2170 pending, 39 enriched, 729 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T23:03:05.158Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T23:03:05.242Z] [BOT] 📂 Loaded 10810 existing routing entries
[2026-01-30T23:03:05.366Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10820
   Timestamp: 2026-01-30T23:03:05.321Z
[2026-01-30T23:03:05.370Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 27
   Successful: 12
   Failed: 0
   Skipped: 15
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💰・finance-jobs: 2 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 758 jobs in memory (cached)
[2026-01-30T23:03:05.396Z] [BOT] ✅ Loaded V2 database: 758 jobs
💾 DISK STATE: 758 jobs on disk
[2026-01-30T23:03:05.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=758
[2026-01-30T23:03:05.399Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:03:05.399Z] [BOT] 💾 AFTER MERGE: 758 jobs (merged disk + memory)
[2026-01-30T23:03:05.399Z] [BOT] ✅ No jobs to archive (all 758 jobs within 7-day window)
[2026-01-30T23:03:05.446Z] [BOT] 💾 Saved posted_jobs.json: 758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:03:05.447Z] [BOT] ✅ Database saved successfully
[2026-01-30T23:03:07.475Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2944) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*