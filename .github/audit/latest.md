# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T15:33:53.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T15:33:20.152Z] ========================================
[2026-01-30T15:33:20.154Z] Discord Bot Execution Log
[2026-01-30T15:33:20.154Z] Environment: GitHub Actions
[2026-01-30T15:33:20.154Z] Node Version: v20.20.0
[2026-01-30T15:33:20.154Z] ========================================
[2026-01-30T15:33:20.154Z] Environment Variables Check:
[2026-01-30T15:33:20.154Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T15:33:20.154Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.154Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T15:33:20.154Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T15:33:20.155Z] 
Multi-Channel Configuration:
[2026-01-30T15:33:20.155Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T15:33:20.155Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T15:33:20.155Z] 
Data Files Check:
[2026-01-30T15:33:20.156Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T15:33:20.174Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3267926 bytes)
[2026-01-30T15:33:20.174Z] 
========================================
[2026-01-30T15:33:20.174Z] Starting Enhanced Discord Bot...
[2026-01-30T15:33:20.174Z] ========================================
[2026-01-30T15:33:20.719Z] [BOT] ✅ Loaded V2 database: 507 jobs
[2026-01-30T15:33:21.186Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T15:33:21.187Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T15:33:21.187Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T15:33:21.306Z] [BOT] ✅ Loaded pending queue: 2915 total (2387 pending, 50 enriched, 478 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:33:21.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:33:21.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T15:33:21.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T15:33:21.307Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T15:33:21.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T15:33:21.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T15:33:21.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T15:33:21.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T15:33:21.308Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T15:33:21.309Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T15:33:21.309Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T15:33:21.309Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T15:33:21.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T15:33:21.314Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T15:33:21.314Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Incident Management at datadog
[2026-01-30T15:33:21.314Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Software Delivery Suite at datadog
🚫 Skipping blacklisted job: Senior AI Engineer - APM Experiences at datadog
🚫 Skipping blacklisted job: Senior Associate, Sales Enablement Operations at datadog
[2026-01-30T15:33:21.314Z] [BOT] 🚫 Skipping blacklisted job: Senior Atlassian Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Senior Counsel, Corporate & M&A at datadog
[2026-01-30T15:33:21.314Z] [BOT] 🚫 Skipping blacklisted job: Senior Customer Data Scientist at datadog
🚫 Skipping blacklisted job: Senior Director, Product Design at datadog
🚫 Skipping blacklisted job: Senior Enablement Manager, Emerging Technology at datadog
🚫 Skipping blacklisted job: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-30T15:33:21.314Z] [BOT] 🚫 Skipping blacklisted job: Senior FP&A Analyst - NYC at datadog
🚫 Skipping blacklisted job: Senior Manager, People Business Partner - NYC at datadog
🚫 Skipping blacklisted job: Senior Partner Manager - Channels (Public Sector) at datadog
[2026-01-30T15:33:21.315Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Cost and Usage Experience at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Database AI Optimization at datadog
[2026-01-30T15:33:21.315Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager (AI Security) at datadog
[2026-01-30T15:33:21.410Z] [BOT] ✅ Loaded pending queue: 2915 total (2387 pending, 50 enriched, 478 posted)
[2026-01-30T15:33:21.582Z] [BOT] ✅ Saved pending queue: 2899 total (2387 pending, 34 enriched, 478 posted)
🗑️ Removed 16 blacklisted jobs from pending queue
[2026-01-30T15:33:21.582Z] [BOT] 📋 After blacklist filter: 20 jobs (16 blacklisted)
[2026-01-30T15:33:21.582Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-30T15:33:21.583Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-30T15:33:21.583Z] [BOT] (5 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Enterprise Sales Executive @ datadog: washington, district of columbia, usa, remote
[2026-01-30T15:33:21.583Z] [BOT] - Mid Market Account Executive @ datadog: denver, colorado, usa, new york, new york, usa
   - Premier Support Engineer 2 @ datadog: san francisco, california, usa, new york, new york, usa
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T15:33:21.587Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-01-30T15:33:21.588Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-30T15:33:21.588Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:21.606Z] [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T15:33:21.792Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T15:33:21.793Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:33:21.793Z] [BOT] 💾 BEFORE MERGE: 508 jobs in memory (cached)
[2026-01-30T15:33:21.804Z] [BOT] ✅ Loaded V2 database: 507 jobs
💾 DISK STATE: 507 jobs on disk
[2026-01-30T15:33:21.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=508
[2026-01-30T15:33:21.806Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:21.806Z] [BOT] 💾 AFTER MERGE: 508 jobs (merged disk + memory)
[2026-01-30T15:33:21.807Z] [BOT] ✅ No jobs to archive (all 508 jobs within 7-day window)
[2026-01-30T15:33:21.845Z] [BOT] 💾 Saved posted_jobs.json: 508 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:23.348Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:23.558Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:33:23.559Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T15:33:23.559Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:33:23.559Z] [BOT] 💾 BEFORE MERGE: 509 jobs in memory (cached)
[2026-01-30T15:33:23.573Z] [BOT] ✅ Loaded V2 database: 508 jobs
[2026-01-30T15:33:23.573Z] [BOT] 💾 DISK STATE: 508 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=509
[2026-01-30T15:33:23.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:23.574Z] [BOT] 💾 AFTER MERGE: 509 jobs (merged disk + memory)
[2026-01-30T15:33:23.575Z] [BOT] ✅ No jobs to archive (all 509 jobs within 7-day window)
[2026-01-30T15:33:23.607Z] [BOT] 💾 Saved posted_jobs.json: 509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:25.108Z] [BOT] 📍 [ROUTING] "Head of Sales Programs" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:25.307Z] [BOT] ✅ Posted message: Head of Sales Programs @ datadog in #💻・tech-jobs
  ✅ Industry: Head of Sales Programs @ datadog
[2026-01-30T15:33:25.307Z] [BOT] 💾 Added channel posting: Head of Sales Programs @ datadog → category channel (1 total channels)
[2026-01-30T15:33:25.307Z] [BOT] 💾 BEFORE MERGE: 510 jobs in memory (cached)
[2026-01-30T15:33:25.317Z] [BOT] ✅ Loaded V2 database: 509 jobs
💾 DISK STATE: 509 jobs on disk
[2026-01-30T15:33:25.318Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=510
[2026-01-30T15:33:25.319Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 510 jobs (merged disk + memory)
[2026-01-30T15:33:25.319Z] [BOT] ✅ No jobs to archive (all 510 jobs within 7-day window)
[2026-01-30T15:33:25.352Z] [BOT] 💾 Saved posted_jobs.json: 510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:26.853Z] [BOT] 📍 [ROUTING] "Information Security Analyst II" @ datadog
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:27.121Z] [BOT] ✅ Posted message: Information Security Analyst II @ datadog in #💻・tech-jobs
[2026-01-30T15:33:27.121Z] [BOT] ✅ Industry: Information Security Analyst II @ datadog
[2026-01-30T15:33:27.121Z] [BOT] 💾 Added channel posting: Information Security Analyst II @ datadog → category channel (1 total channels)
[2026-01-30T15:33:27.122Z] [BOT] 💾 BEFORE MERGE: 511 jobs in memory (cached)
[2026-01-30T15:33:27.132Z] [BOT] ✅ Loaded V2 database: 510 jobs
💾 DISK STATE: 510 jobs on disk
[2026-01-30T15:33:27.132Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=511
[2026-01-30T15:33:27.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 511 jobs (merged disk + memory)
[2026-01-30T15:33:27.134Z] [BOT] ✅ No jobs to archive (all 511 jobs within 7-day window)
[2026-01-30T15:33:27.167Z] [BOT] 💾 Saved posted_jobs.json: 511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:29.012Z] [BOT] ✅ Posted message: Information Security Analyst II @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:33:29.012Z] [BOT] 💾 Added channel posting: Information Security Analyst II @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 511 jobs in memory (cached)
[2026-01-30T15:33:29.022Z] [BOT] ✅ Loaded V2 database: 511 jobs
💾 DISK STATE: 511 jobs on disk
[2026-01-30T15:33:29.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=511
[2026-01-30T15:33:29.023Z] [BOT] 🔀 Deep merged: Information Security Analyst II @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 511 jobs (merged disk + memory)
[2026-01-30T15:33:29.024Z] [BOT] ✅ No jobs to archive (all 511 jobs within 7-day window)
[2026-01-30T15:33:29.058Z] [BOT] 💾 Saved posted_jobs.json: 511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:30.559Z] [BOT] 📍 [ROUTING] "Marketing Operations Coordinator" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:30.802Z] [BOT] ✅ Posted message: Marketing Operations Coordinator @ datadog in #💻・tech-jobs
  ✅ Industry: Marketing Operations Coordinator @ datadog
[2026-01-30T15:33:30.802Z] [BOT] 💾 Added channel posting: Marketing Operations Coordinator @ datadog → category channel (1 total channels)
[2026-01-30T15:33:30.802Z] [BOT] 💾 BEFORE MERGE: 512 jobs in memory (cached)
[2026-01-30T15:33:30.820Z] [BOT] ✅ Loaded V2 database: 511 jobs
💾 DISK STATE: 511 jobs on disk
[2026-01-30T15:33:30.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=512
[2026-01-30T15:33:30.821Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:30.822Z] [BOT] 💾 AFTER MERGE: 512 jobs (merged disk + memory)
[2026-01-30T15:33:30.822Z] [BOT] ✅ No jobs to archive (all 512 jobs within 7-day window)
[2026-01-30T15:33:30.864Z] [BOT] 💾 Saved posted_jobs.json: 512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:32.659Z] [BOT] ✅ Posted message: Marketing Operations Coordinator @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:33:32.659Z] [BOT] 💾 Added channel posting: Marketing Operations Coordinator @ datadog → location channel (2 total channels)
[2026-01-30T15:33:32.659Z] [BOT] 💾 BEFORE MERGE: 512 jobs in memory (cached)
[2026-01-30T15:33:32.669Z] [BOT] ✅ Loaded V2 database: 512 jobs
💾 DISK STATE: 512 jobs on disk
[2026-01-30T15:33:32.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=512
[2026-01-30T15:33:32.671Z] [BOT] 🔀 Deep merged: Marketing Operations Coordinator @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:33:32.671Z] [BOT] 💾 AFTER MERGE: 512 jobs (merged disk + memory)
[2026-01-30T15:33:32.672Z] [BOT] ✅ No jobs to archive (all 512 jobs within 7-day window)
[2026-01-30T15:33:32.708Z] [BOT] 💾 Saved posted_jobs.json: 512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:34.210Z] [BOT] 📍 [ROUTING] "Mid Market Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:33:34.210Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:35.779Z] [BOT] ✅ Posted message: Mid Market Account Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Mid Market Account Executive @ datadog
[2026-01-30T15:33:35.780Z] [BOT] 💾 Added channel posting: Mid Market Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:33:35.780Z] [BOT] 💾 BEFORE MERGE: 513 jobs in memory (cached)
[2026-01-30T15:33:35.794Z] [BOT] ✅ Loaded V2 database: 512 jobs
💾 DISK STATE: 512 jobs on disk
[2026-01-30T15:33:35.794Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=513
[2026-01-30T15:33:35.795Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:35.795Z] [BOT] 💾 AFTER MERGE: 513 jobs (merged disk + memory)
[2026-01-30T15:33:35.795Z] [BOT] ✅ No jobs to archive (all 513 jobs within 7-day window)
[2026-01-30T15:33:35.828Z] [BOT] 💾 Saved posted_jobs.json: 513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:37.329Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (Boston)" @ datadog
[2026-01-30T15:33:37.330Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:37.641Z] [BOT] ✅ Posted message: Mid-Market Account Executive (Boston) @ datadog in #💻・tech-jobs
[2026-01-30T15:33:37.641Z] [BOT] ✅ Industry: Mid-Market Account Executive (Boston) @ datadog
[2026-01-30T15:33:37.641Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive (Boston) @ datadog → category channel (1 total channels)
[2026-01-30T15:33:37.641Z] [BOT] 💾 BEFORE MERGE: 514 jobs in memory (cached)
[2026-01-30T15:33:37.651Z] [BOT] ✅ Loaded V2 database: 513 jobs
💾 DISK STATE: 513 jobs on disk
[2026-01-30T15:33:37.652Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=514
[2026-01-30T15:33:37.653Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:37.653Z] [BOT] 💾 AFTER MERGE: 514 jobs (merged disk + memory)
[2026-01-30T15:33:37.653Z] [BOT] ✅ No jobs to archive (all 514 jobs within 7-day window)
[2026-01-30T15:33:37.685Z] [BOT] 💾 Saved posted_jobs.json: 514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:39.187Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (San Francisco)" @ datadog
[2026-01-30T15:33:39.187Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:39.385Z] [BOT] ✅ Posted message: Mid-Market Account Executive (San Francisco) @ datadog in #💻・tech-jobs
[2026-01-30T15:33:39.385Z] [BOT] ✅ Industry: Mid-Market Account Executive (San Francisco) @ datadog
[2026-01-30T15:33:39.385Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive (San Francisco) @ datadog → category channel (1 total channels)
[2026-01-30T15:33:39.385Z] [BOT] 💾 BEFORE MERGE: 515 jobs in memory (cached)
[2026-01-30T15:33:39.399Z] [BOT] ✅ Loaded V2 database: 514 jobs
💾 DISK STATE: 514 jobs on disk
[2026-01-30T15:33:39.399Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=515
[2026-01-30T15:33:39.400Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:39.400Z] [BOT] 💾 AFTER MERGE: 515 jobs (merged disk + memory)
[2026-01-30T15:33:39.401Z] [BOT] ✅ No jobs to archive (all 515 jobs within 7-day window)
[2026-01-30T15:33:39.439Z] [BOT] 💾 Saved posted_jobs.json: 515 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:40.940Z] [BOT] 📍 [ROUTING] "People Analyst II" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:41.161Z] [BOT] ✅ Posted message: People Analyst II @ datadog in #💻・tech-jobs
  ✅ Industry: People Analyst II @ datadog
[2026-01-30T15:33:41.161Z] [BOT] 💾 Added channel posting: People Analyst II @ datadog → category channel (1 total channels)
[2026-01-30T15:33:41.161Z] [BOT] 💾 BEFORE MERGE: 516 jobs in memory (cached)
[2026-01-30T15:33:41.172Z] [BOT] ✅ Loaded V2 database: 515 jobs
💾 DISK STATE: 515 jobs on disk
[2026-01-30T15:33:41.172Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=516
[2026-01-30T15:33:41.173Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 516 jobs (merged disk + memory)
[2026-01-30T15:33:41.174Z] [BOT] ✅ No jobs to archive (all 516 jobs within 7-day window)
[2026-01-30T15:33:41.205Z] [BOT] 💾 Saved posted_jobs.json: 516 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:42.970Z] [BOT] ✅ Posted message: People Analyst II @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:33:42.971Z] [BOT] 💾 Added channel posting: People Analyst II @ datadog → location channel (2 total channels)
[2026-01-30T15:33:42.971Z] [BOT] 💾 BEFORE MERGE: 516 jobs in memory (cached)
[2026-01-30T15:33:42.984Z] [BOT] ✅ Loaded V2 database: 516 jobs
💾 DISK STATE: 516 jobs on disk
[2026-01-30T15:33:42.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=516
[2026-01-30T15:33:42.985Z] [BOT] 🔀 Deep merged: People Analyst II @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:33:42.985Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 516 jobs (merged disk + memory)
[2026-01-30T15:33:42.986Z] [BOT] ✅ No jobs to archive (all 516 jobs within 7-day window)
[2026-01-30T15:33:43.024Z] [BOT] 💾 Saved posted_jobs.json: 516 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:44.524Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T15:33:44.524Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:33:44.713Z] [BOT] ✅ Posted message: Premier Support Engineer 2 @ datadog in #💻・tech-jobs
  ✅ Industry: Premier Support Engineer 2 @ datadog
[2026-01-30T15:33:44.713Z] [BOT] 💾 Added channel posting: Premier Support Engineer 2 @ datadog → category channel (1 total channels)
[2026-01-30T15:33:44.713Z] [BOT] 💾 BEFORE MERGE: 517 jobs in memory (cached)
[2026-01-30T15:33:44.724Z] [BOT] ✅ Loaded V2 database: 516 jobs
💾 DISK STATE: 516 jobs on disk
[2026-01-30T15:33:44.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=517
[2026-01-30T15:33:44.725Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 517 jobs (merged disk + memory)
[2026-01-30T15:33:44.726Z] [BOT] ✅ No jobs to archive (all 517 jobs within 7-day window)
[2026-01-30T15:33:44.757Z] [BOT] 💾 Saved posted_jobs.json: 517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:49.258Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T15:33:49.259Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f21bbad0..." not found, but found as SHA256 "b1fce0024f3b6ce9"
[2026-01-30T15:33:49.259Z] [BOT] ⏭️  Skipping duplicate: JID_f21bbad0 (posted within 7 days)
[2026-01-30T15:33:49.259Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_986c19a5..." not found, but found as SHA256 "92ac541e4dc034e9"
⏭️  Skipping duplicate: JID_986c19a5 (posted within 7 days)
[2026-01-30T15:33:49.259Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_25a027c8..." not found, but found as SHA256 "a5f7ae5fd6361353"
[2026-01-30T15:33:49.259Z] [BOT] ⏭️  Skipping duplicate: JID_25a027c8 (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a21cfa1f..." not found, but found as SHA256 "a198383ad7c335b0"
[2026-01-30T15:33:49.260Z] [BOT] ⏭️  Skipping duplicate: JID_a21cfa1f (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90dd935f..." not found, but found as SHA256 "01467a5ec6c87926"
[2026-01-30T15:33:49.260Z] [BOT] ⏭️  Skipping duplicate: JID_90dd935f (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d6c3e041..." not found, but found as SHA256 "8a296d216a41c2bc"
⏭️  Skipping duplicate: JID_d6c3e041 (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a569c0c1..." not found, but found as SHA256 "52badf62125fa39d"
⏭️  Skipping duplicate: JID_a569c0c1 (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1fada6ce..." not found, but found as SHA256 "c31bd24d4b15af11"
[2026-01-30T15:33:49.260Z] [BOT] ⏭️  Skipping duplicate: JID_1fada6ce (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ef4c3a29..." not found, but found as SHA256 "4cdf6ee5a3f00ba7"
[2026-01-30T15:33:49.260Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-30T15:33:49.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a52a213..." not found, but found as SHA256 "cf7360c40ee772fd"
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-30T15:33:49.364Z] [BOT] ✅ Loaded pending queue: 2899 total (2387 pending, 34 enriched, 478 posted)
[2026-01-30T15:33:49.539Z] [BOT] ✅ Saved pending queue: 2899 total (2387 pending, 24 enriched, 488 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T15:33:49.539Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T15:33:49.642Z] [BOT] 📂 Loaded 10569 existing routing entries
[2026-01-30T15:33:49.749Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T15:33:49.749Z] [BOT] New entries: 10
   Total entries: 10579
   Timestamp: 2026-01-30T15:33:49.705Z
[2026-01-30T15:33:49.750Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T15:33:49.750Z] [BOT] Total attempts: 43
   Successful: 13
   Failed: 0
   Skipped: 30
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 10 posts
     2. #🗽・JID_98d4f0de: 3 posts
[2026-01-30T15:33:49.751Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 517 jobs in memory (cached)
[2026-01-30T15:33:49.762Z] [BOT] ✅ Loaded V2 database: 517 jobs
[2026-01-30T15:33:49.762Z] [BOT] 💾 DISK STATE: 517 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=517
[2026-01-30T15:33:49.764Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:33:49.764Z] [BOT] 💾 AFTER MERGE: 517 jobs (merged disk + memory)
[2026-01-30T15:33:49.764Z] [BOT] ✅ No jobs to archive (all 517 jobs within 7-day window)
[2026-01-30T15:33:49.794Z] [BOT] 💾 Saved posted_jobs.json: 517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:33:49.794Z] [BOT] ✅ Database saved successfully
[2026-01-30T15:33:51.822Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*