# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T15:54:19.892Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T15:53:36.485Z] ========================================
[2026-01-30T15:53:36.487Z] Discord Bot Execution Log
[2026-01-30T15:53:36.487Z] Environment: GitHub Actions
[2026-01-30T15:53:36.487Z] Node Version: v20.20.0
[2026-01-30T15:53:36.487Z] ========================================
[2026-01-30T15:53:36.487Z] Environment Variables Check:
[2026-01-30T15:53:36.487Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T15:53:36.488Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T15:53:36.488Z] 
Multi-Channel Configuration:
[2026-01-30T15:53:36.488Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.488Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.489Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.489Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T15:53:36.489Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T15:53:36.489Z] 
Data Files Check:
[2026-01-30T15:53:36.490Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T15:53:36.508Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3330525 bytes)
[2026-01-30T15:53:36.508Z] 
========================================
[2026-01-30T15:53:36.508Z] Starting Enhanced Discord Bot...
[2026-01-30T15:53:36.508Z] ========================================
[2026-01-30T15:53:37.070Z] [BOT] ✅ Loaded V2 database: 517 jobs
[2026-01-30T15:53:37.722Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T15:53:37.722Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T15:53:37.723Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T15:53:37.841Z] [BOT] ✅ Loaded pending queue: 2917 total (2379 pending, 50 enriched, 488 posted)
[2026-01-30T15:53:37.842Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:53:37.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:53:37.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T15:53:37.843Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T15:53:37.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T15:53:37.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T15:53:37.844Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T15:53:37.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T15:53:37.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T15:53:37.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T15:53:37.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T15:53:37.845Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T15:53:37.845Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T15:53:37.845Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T15:53:37.845Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T15:53:37.845Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T15:53:37.846Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T15:53:37.846Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T15:53:37.851Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T15:53:37.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager (Cloud Cost Management) at datadog
[2026-01-30T15:53:37.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts (West) at datadog
🚫 Skipping blacklisted job: Senior Security Engineer, Data Security at datadog
🚫 Skipping blacklisted job: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-30T15:53:37.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - AI Code Gen - Agent Engineer at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - IDE AI Experiences - LLM Engineer at datadog
[2026-01-30T15:53:37.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
🚫 Skipping blacklisted job: Senior Staff Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Tax Accountant - NYC at datadog
[2026-01-30T15:53:37.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Knowledge Systems at datadog
🚫 Skipping blacklisted job: Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
🚫 Skipping blacklisted job: Staff Software Engineer at datadog
[2026-01-30T15:53:37.852Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - ML Observability at datadog
[2026-01-30T15:53:37.852Z] [BOT] 🚫 Skipping blacklisted job: Staff Statistics Engineer - Feature Flagging and Experimentation at datadog
[2026-01-30T15:53:37.959Z] [BOT] ✅ Loaded pending queue: 2917 total (2379 pending, 50 enriched, 488 posted)
[2026-01-30T15:53:38.128Z] [BOT] ✅ Saved pending queue: 2900 total (2379 pending, 33 enriched, 488 posted)
🗑️ Removed 17 blacklisted jobs from pending queue
📋 After blacklist filter: 19 jobs (17 blacklisted)
[2026-01-30T15:53:38.128Z] [BOT] 📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-30T15:53:38.129Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-30T15:53:38.129Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, boston, massachusetts, usa; new york, new york, usa
[2026-01-30T15:53:38.129Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T15:53:38.134Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-30T15:53:38.134Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:53:38.134Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:38.153Z] [BOT ERROR] (node:2792) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T15:53:38.334Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:53:38.334Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T15:53:38.335Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:53:38.335Z] [BOT] 💾 BEFORE MERGE: 518 jobs in memory (cached)
[2026-01-30T15:53:38.348Z] [BOT] ✅ Loaded V2 database: 517 jobs
💾 DISK STATE: 517 jobs on disk
[2026-01-30T15:53:38.348Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=518
[2026-01-30T15:53:38.349Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:53:38.350Z] [BOT] 💾 AFTER MERGE: 518 jobs (merged disk + memory)
[2026-01-30T15:53:38.350Z] [BOT] ✅ No jobs to archive (all 518 jobs within 7-day window)
[2026-01-30T15:53:38.393Z] [BOT] 💾 Saved posted_jobs.json: 518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:40.106Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T15:53:40.106Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T15:53:40.106Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → location channel (2 total channels)
[2026-01-30T15:53:40.106Z] [BOT] 💾 BEFORE MERGE: 518 jobs in memory (cached)
[2026-01-30T15:53:40.120Z] [BOT] ✅ Loaded V2 database: 518 jobs
💾 DISK STATE: 518 jobs on disk
[2026-01-30T15:53:40.120Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=518
[2026-01-30T15:53:40.121Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:53:40.121Z] [BOT] 💾 AFTER MERGE: 518 jobs (merged disk + memory)
[2026-01-30T15:53:40.122Z] [BOT] ✅ No jobs to archive (all 518 jobs within 7-day window)
[2026-01-30T15:53:40.156Z] [BOT] 💾 Saved posted_jobs.json: 518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:41.657Z] [BOT] 📍 [ROUTING] "Mid Market Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:53:41.657Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:41.815Z] [BOT] ✅ Posted message: Mid Market Account Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Mid Market Account Executive @ datadog
[2026-01-30T15:53:41.816Z] [BOT] 💾 Added channel posting: Mid Market Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:53:41.816Z] [BOT] 💾 BEFORE MERGE: 519 jobs in memory (cached)
[2026-01-30T15:53:41.826Z] [BOT] ✅ Loaded V2 database: 518 jobs
💾 DISK STATE: 518 jobs on disk
[2026-01-30T15:53:41.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=519
[2026-01-30T15:53:41.827Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:53:41.827Z] [BOT] 💾 AFTER MERGE: 519 jobs (merged disk + memory)
[2026-01-30T15:53:41.828Z] [BOT] ✅ No jobs to archive (all 519 jobs within 7-day window)
[2026-01-30T15:53:41.864Z] [BOT] 💾 Saved posted_jobs.json: 519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:43.625Z] [BOT] ✅ Posted message: Mid Market Account Executive @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:53:43.625Z] [BOT] 💾 Added channel posting: Mid Market Account Executive @ datadog → location channel (2 total channels)
[2026-01-30T15:53:43.626Z] [BOT] 💾 BEFORE MERGE: 519 jobs in memory (cached)
[2026-01-30T15:53:43.636Z] [BOT] ✅ Loaded V2 database: 519 jobs
💾 DISK STATE: 519 jobs on disk
[2026-01-30T15:53:43.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=519
[2026-01-30T15:53:43.637Z] [BOT] 🔀 Deep merged: Mid Market Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:53:43.637Z] [BOT] 💾 AFTER MERGE: 519 jobs (merged disk + memory)
[2026-01-30T15:53:43.638Z] [BOT] ✅ No jobs to archive (all 519 jobs within 7-day window)
[2026-01-30T15:53:43.672Z] [BOT] 💾 Saved posted_jobs.json: 519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:45.174Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2 - New York" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:45.370Z] [BOT] ✅ Posted message: Premier Support Engineer 2 - New York @ datadog in #💻・tech-jobs
  ✅ Industry: Premier Support Engineer 2 - New York @ datadog
[2026-01-30T15:53:45.370Z] [BOT] 💾 Added channel posting: Premier Support Engineer 2 - New York @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 520 jobs in memory (cached)
[2026-01-30T15:53:45.380Z] [BOT] ✅ Loaded V2 database: 519 jobs
💾 DISK STATE: 519 jobs on disk
[2026-01-30T15:53:45.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=520
[2026-01-30T15:53:45.382Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 520 jobs (merged disk + memory)
[2026-01-30T15:53:45.382Z] [BOT] ✅ No jobs to archive (all 520 jobs within 7-day window)
[2026-01-30T15:53:45.417Z] [BOT] 💾 Saved posted_jobs.json: 520 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:47.083Z] [BOT] ✅ Posted message: Premier Support Engineer 2 - New York @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:53:47.083Z] [BOT] 💾 Added channel posting: Premier Support Engineer 2 - New York @ datadog → location channel (2 total channels)
[2026-01-30T15:53:47.083Z] [BOT] 💾 BEFORE MERGE: 520 jobs in memory (cached)
[2026-01-30T15:53:47.102Z] [BOT] ✅ Loaded V2 database: 520 jobs
💾 DISK STATE: 520 jobs on disk
[2026-01-30T15:53:47.102Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=520
[2026-01-30T15:53:47.103Z] [BOT] 🔀 Deep merged: Premier Support Engineer 2 - New York @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:53:47.103Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 520 jobs (merged disk + memory)
[2026-01-30T15:53:47.104Z] [BOT] ✅ No jobs to archive (all 520 jobs within 7-day window)
[2026-01-30T15:53:47.147Z] [BOT] 💾 Saved posted_jobs.json: 520 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:48.649Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 3 - NYC" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:48.911Z] [BOT] ✅ Posted message: Premier Support Engineer 3 - NYC @ datadog in #💻・tech-jobs
[2026-01-30T15:53:48.911Z] [BOT] ✅ Industry: Premier Support Engineer 3 - NYC @ datadog
[2026-01-30T15:53:48.912Z] [BOT] 💾 Added channel posting: Premier Support Engineer 3 - NYC @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 521 jobs in memory (cached)
[2026-01-30T15:53:48.922Z] [BOT] ✅ Loaded V2 database: 520 jobs
💾 DISK STATE: 520 jobs on disk
[2026-01-30T15:53:48.922Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=521
[2026-01-30T15:53:48.924Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 521 jobs (merged disk + memory)
[2026-01-30T15:53:48.924Z] [BOT] ✅ No jobs to archive (all 521 jobs within 7-day window)
[2026-01-30T15:53:48.961Z] [BOT] 💾 Saved posted_jobs.json: 521 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:50.809Z] [BOT] ✅ Posted message: Premier Support Engineer 3 - NYC @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:53:50.809Z] [BOT] 💾 Added channel posting: Premier Support Engineer 3 - NYC @ datadog → location channel (2 total channels)
[2026-01-30T15:53:50.809Z] [BOT] 💾 BEFORE MERGE: 521 jobs in memory (cached)
[2026-01-30T15:53:50.823Z] [BOT] ✅ Loaded V2 database: 521 jobs
💾 DISK STATE: 521 jobs on disk
[2026-01-30T15:53:50.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=521
[2026-01-30T15:53:50.825Z] [BOT] 🔀 Deep merged: Premier Support Engineer 3 - NYC @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:53:50.825Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 521 jobs (merged disk + memory)
[2026-01-30T15:53:50.825Z] [BOT] ✅ No jobs to archive (all 521 jobs within 7-day window)
[2026-01-30T15:53:50.858Z] [BOT] 💾 Saved posted_jobs.json: 521 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:52.360Z] [BOT] 📍 [ROUTING] "Product Solutions Architect 3 - Synthetics" @ datadog
[2026-01-30T15:53:52.360Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:52.570Z] [BOT] ✅ Posted message: Product Solutions Architect 3 - Synthetics @ datadog in #💻・tech-jobs
[2026-01-30T15:53:52.570Z] [BOT] ✅ Industry: Product Solutions Architect 3 - Synthetics @ datadog
[2026-01-30T15:53:52.570Z] [BOT] 💾 Added channel posting: Product Solutions Architect 3 - Synthetics @ datadog → category channel (1 total channels)
[2026-01-30T15:53:52.570Z] [BOT] 💾 BEFORE MERGE: 522 jobs in memory (cached)
[2026-01-30T15:53:52.580Z] [BOT] ✅ Loaded V2 database: 521 jobs
💾 DISK STATE: 521 jobs on disk
[2026-01-30T15:53:52.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=522
[2026-01-30T15:53:52.582Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:53:52.582Z] [BOT] 💾 AFTER MERGE: 522 jobs (merged disk + memory)
[2026-01-30T15:53:52.582Z] [BOT] ✅ No jobs to archive (all 522 jobs within 7-day window)
[2026-01-30T15:53:52.613Z] [BOT] 💾 Saved posted_jobs.json: 522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:54.299Z] [BOT] ✅ Posted message: Product Solutions Architect 3 - Synthetics @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:53:54.299Z] [BOT] 💾 Added channel posting: Product Solutions Architect 3 - Synthetics @ datadog → location channel (2 total channels)
[2026-01-30T15:53:54.299Z] [BOT] 💾 BEFORE MERGE: 522 jobs in memory (cached)
[2026-01-30T15:53:54.311Z] [BOT] ✅ Loaded V2 database: 522 jobs
💾 DISK STATE: 522 jobs on disk
[2026-01-30T15:53:54.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=522
[2026-01-30T15:53:54.313Z] [BOT] 🔀 Deep merged: Product Solutions Architect 3 - Synthetics @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:53:54.313Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 522 jobs (merged disk + memory)
[2026-01-30T15:53:54.313Z] [BOT] ✅ No jobs to archive (all 522 jobs within 7-day window)
[2026-01-30T15:53:54.346Z] [BOT] 💾 Saved posted_jobs.json: 522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:55.848Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking)" @ datadog
[2026-01-30T15:53:55.848Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:56.034Z] [BOT] ✅ Posted message: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #💻・tech-jobs
  ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog
[2026-01-30T15:53:56.035Z] [BOT] 💾 Added channel posting: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog → category channel (1 total channels)
[2026-01-30T15:53:56.035Z] [BOT] 💾 BEFORE MERGE: 523 jobs in memory (cached)
[2026-01-30T15:53:56.045Z] [BOT] ✅ Loaded V2 database: 522 jobs
💾 DISK STATE: 522 jobs on disk
[2026-01-30T15:53:56.046Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=523
[2026-01-30T15:53:56.047Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 523 jobs (merged disk + memory)
[2026-01-30T15:53:56.047Z] [BOT] ✅ No jobs to archive (all 523 jobs within 7-day window)
[2026-01-30T15:53:56.079Z] [BOT] 💾 Saved posted_jobs.json: 523 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:57.582Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success) - Boston" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:57.755Z] [BOT] ✅ Posted message: Sales Engineer (Customer Success) - Boston @ datadog in #💻・tech-jobs
  ✅ Industry: Sales Engineer (Customer Success) - Boston @ datadog
[2026-01-30T15:53:57.755Z] [BOT] 💾 Added channel posting: Sales Engineer (Customer Success) - Boston @ datadog → category channel (1 total channels)
[2026-01-30T15:53:57.755Z] [BOT] 💾 BEFORE MERGE: 524 jobs in memory (cached)
[2026-01-30T15:53:57.767Z] [BOT] ✅ Loaded V2 database: 523 jobs
💾 DISK STATE: 523 jobs on disk
[2026-01-30T15:53:57.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=524
[2026-01-30T15:53:57.768Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:53:57.769Z] [BOT] 💾 AFTER MERGE: 524 jobs (merged disk + memory)
[2026-01-30T15:53:57.769Z] [BOT] ✅ No jobs to archive (all 524 jobs within 7-day window)
[2026-01-30T15:53:57.801Z] [BOT] 💾 Saved posted_jobs.json: 524 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:53:59.303Z] [BOT] 📍 [ROUTING] "Security Engineer II, Risk Engineering" @ datadog
[2026-01-30T15:53:59.303Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:53:59.553Z] [BOT] ✅ Posted message: Security Engineer II, Risk Engineering @ datadog in #💻・tech-jobs
[2026-01-30T15:53:59.553Z] [BOT] ✅ Industry: Security Engineer II, Risk Engineering @ datadog
[2026-01-30T15:53:59.553Z] [BOT] 💾 Added channel posting: Security Engineer II, Risk Engineering @ datadog → category channel (1 total channels)
[2026-01-30T15:53:59.553Z] [BOT] 💾 BEFORE MERGE: 525 jobs in memory (cached)
[2026-01-30T15:53:59.563Z] [BOT] ✅ Loaded V2 database: 524 jobs
💾 DISK STATE: 524 jobs on disk
[2026-01-30T15:53:59.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=525
[2026-01-30T15:53:59.564Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 525 jobs (merged disk + memory)
[2026-01-30T15:53:59.565Z] [BOT] ✅ No jobs to archive (all 525 jobs within 7-day window)
[2026-01-30T15:53:59.597Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:01.277Z] [BOT] ✅ Posted message: Security Engineer II, Risk Engineering @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:54:01.277Z] [BOT] 💾 Added channel posting: Security Engineer II, Risk Engineering @ datadog → location channel (2 total channels)
[2026-01-30T15:54:01.277Z] [BOT] 💾 BEFORE MERGE: 525 jobs in memory (cached)
[2026-01-30T15:54:01.290Z] [BOT] ✅ Loaded V2 database: 525 jobs
💾 DISK STATE: 525 jobs on disk
[2026-01-30T15:54:01.291Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=525
[2026-01-30T15:54:01.292Z] [BOT] 🔀 Deep merged: Security Engineer II, Risk Engineering @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:54:01.292Z] [BOT] 💾 AFTER MERGE: 525 jobs (merged disk + memory)
[2026-01-30T15:54:01.292Z] [BOT] ✅ No jobs to archive (all 525 jobs within 7-day window)
[2026-01-30T15:54:01.325Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:02.825Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
   Category: TECH (default)
[2026-01-30T15:54:02.826Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:54:03.029Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-30T15:54:03.029Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-30T15:54:03.029Z] [BOT] 💾 BEFORE MERGE: 526 jobs in memory (cached)
[2026-01-30T15:54:03.039Z] [BOT] ✅ Loaded V2 database: 525 jobs
💾 DISK STATE: 525 jobs on disk
[2026-01-30T15:54:03.039Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=526
[2026-01-30T15:54:03.041Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:54:03.041Z] [BOT] 💾 AFTER MERGE: 526 jobs (merged disk + memory)
[2026-01-30T15:54:03.041Z] [BOT] ✅ No jobs to archive (all 526 jobs within 7-day window)
[2026-01-30T15:54:03.075Z] [BOT] 💾 Saved posted_jobs.json: 526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:04.825Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #🏠・JID_ead674af
[2026-01-30T15:54:04.826Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
[2026-01-30T15:54:04.826Z] [BOT] 💾 BEFORE MERGE: 526 jobs in memory (cached)
[2026-01-30T15:54:04.838Z] [BOT] ✅ Loaded V2 database: 526 jobs
[2026-01-30T15:54:04.838Z] [BOT] 💾 DISK STATE: 526 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=526
[2026-01-30T15:54:04.839Z] [BOT] 🔀 Deep merged: Strategic Account Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:54:04.840Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 526 jobs (merged disk + memory)
[2026-01-30T15:54:04.840Z] [BOT] ✅ No jobs to archive (all 526 jobs within 7-day window)
[2026-01-30T15:54:04.871Z] [BOT] 💾 Saved posted_jobs.json: 526 active jobs
[2026-01-30T15:54:04.871Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:09.375Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T15:54:09.375Z] [BOT] 📍 [ROUTING] "Services Architect 3 - New York" @ datadog
[2026-01-30T15:54:09.375Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:54:09.720Z] [BOT] ✅ Posted message: Services Architect 3 - New York @ datadog in #💰・finance-jobs
[2026-01-30T15:54:09.721Z] [BOT] ✅ Industry: Services Architect 3 - New York @ datadog
[2026-01-30T15:54:09.721Z] [BOT] 💾 Added channel posting: Services Architect 3 - New York @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 527 jobs in memory (cached)
[2026-01-30T15:54:09.732Z] [BOT] ✅ Loaded V2 database: 526 jobs
💾 DISK STATE: 526 jobs on disk
[2026-01-30T15:54:09.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=527
[2026-01-30T15:54:09.733Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 527 jobs (merged disk + memory)
[2026-01-30T15:54:09.734Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2026-01-30T15:54:09.766Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:11.728Z] [BOT] ✅ Posted message: Services Architect 3 - New York @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:54:11.728Z] [BOT] 💾 Added channel posting: Services Architect 3 - New York @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 527 jobs in memory (cached)
[2026-01-30T15:54:11.740Z] [BOT] ✅ Loaded V2 database: 527 jobs
💾 DISK STATE: 527 jobs on disk
[2026-01-30T15:54:11.741Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=527
[2026-01-30T15:54:11.742Z] [BOT] 🔀 Deep merged: Services Architect 3 - New York @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:54:11.742Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 527 jobs (merged disk + memory)
[2026-01-30T15:54:11.742Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2026-01-30T15:54:11.781Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:16.282Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T15:54:16.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90d51a18..." not found, but found as SHA256 "c4fec89b6ce0a078"
⏭️  Skipping duplicate: JID_90d51a18 (posted within 7 days)
[2026-01-30T15:54:16.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_baa77441..." not found, but found as SHA256 "aa421259a2f91452"
[2026-01-30T15:54:16.283Z] [BOT] ⏭️  Skipping duplicate: JID_baa77441 (posted within 7 days)
[2026-01-30T15:54:16.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8311b1b4..." not found, but found as SHA256 "7ce27b3602faebe3"
⏭️  Skipping duplicate: JID_8311b1b4 (posted within 7 days)
[2026-01-30T15:54:16.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a75435be..." not found, but found as SHA256 "99aaa8142b5ac957"
⏭️  Skipping duplicate: JID_a75435be (posted within 7 days)
[2026-01-30T15:54:16.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e8b8312..." not found, but found as SHA256 "08d3918e39adfad5"
⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
[2026-01-30T15:54:16.284Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_932a4860..." not found, but found as SHA256 "bd868f785e2f57d4"
⏭️  Skipping duplicate: JID_932a4860 (posted within 7 days)
[2026-01-30T15:54:16.284Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_594f09b2..." not found, but found as SHA256 "59565802f14d2f85"
⏭️  Skipping duplicate: JID_594f09b2 (posted within 7 days)
[2026-01-30T15:54:16.284Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c74a7c8..." not found, but found as SHA256 "f33574306fc73002"
⏭️  Skipping duplicate: JID_3c74a7c8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_bedfae36..." not found, but found as SHA256 "9e2c0ba7d9af32d7"
⏭️  Skipping duplicate: JID_bedfae36 (posted within 7 days)
[2026-01-30T15:54:16.284Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a2e3f0d..." not found, but found as SHA256 "fd8b015e4a6dd685"
⏭️  Skipping duplicate: JID_5a2e3f0d (posted within 7 days)
[2026-01-30T15:54:16.388Z] [BOT] ✅ Loaded pending queue: 2900 total (2379 pending, 33 enriched, 488 posted)
[2026-01-30T15:54:16.564Z] [BOT] ✅ Saved pending queue: 2900 total (2379 pending, 23 enriched, 498 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T15:54:16.647Z] [BOT] 📂 Loaded 10579 existing routing entries
[2026-01-30T15:54:16.786Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T15:54:16.786Z] [BOT] New entries: 10
   Total entries: 10589
   Timestamp: 2026-01-30T15:54:16.727Z
[2026-01-30T15:54:16.787Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T15:54:16.787Z] [BOT] Total attempts: 49
   Successful: 18
   Failed: 0
   Skipped: 31
[2026-01-30T15:54:16.787Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T15:54:16.787Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 4
   Top channels:
[2026-01-30T15:54:16.787Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #🗽・JID_98d4f0de: 6 posts
     3. #🏠・JID_ead674af: 2 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T15:54:16.788Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 527 jobs in memory (cached)
[2026-01-30T15:54:16.798Z] [BOT] ✅ Loaded V2 database: 527 jobs
💾 DISK STATE: 527 jobs on disk
[2026-01-30T15:54:16.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=527
[2026-01-30T15:54:16.800Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 527 jobs (merged disk + memory)
[2026-01-30T15:54:16.800Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2026-01-30T15:54:16.832Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:54:16.833Z] [BOT] ✅ Database saved successfully
[2026-01-30T15:54:18.862Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2792) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*