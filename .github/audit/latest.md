# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T23:02:23.337Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T23:01:52.561Z] ========================================
[2026-01-31T23:01:52.563Z] Discord Bot Execution Log
[2026-01-31T23:01:52.563Z] Environment: GitHub Actions
[2026-01-31T23:01:52.563Z] Node Version: v20.20.0
[2026-01-31T23:01:52.563Z] ========================================
[2026-01-31T23:01:52.563Z] Environment Variables Check:
[2026-01-31T23:01:52.563Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T23:01:52.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T23:01:52.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T23:01:52.563Z] 
Multi-Channel Configuration:
[2026-01-31T23:01:52.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T23:01:52.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T23:01:52.564Z] 
Data Files Check:
[2026-01-31T23:01:52.565Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T23:01:52.621Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8509888 bytes)
[2026-01-31T23:01:52.621Z] 
========================================
[2026-01-31T23:01:52.621Z] Starting Enhanced Discord Bot...
[2026-01-31T23:01:52.621Z] ========================================
[2026-01-31T23:01:53.133Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-31T23:01:53.683Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T23:01:53.683Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T23:01:53.683Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T23:01:53.847Z] [BOT] ✅ Loaded pending queue: 2950 total (1413 pending, 50 enriched, 1487 posted)
[2026-01-31T23:01:53.847Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T23:01:53.848Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T23:01:53.850Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T23:01:53.851Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:01:53.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T23:01:53.852Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T23:01:53.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T23:01:53.852Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T23:01:53.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T23:01:53.853Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T23:01:53.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T23:01:53.853Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T23:01:53.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T23:01:53.853Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T23:01:53.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T23:01:53.854Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T23:01:53.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T23:01:53.854Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T23:01:53.861Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-01-31T23:01:53.861Z] [BOT] 🚫 Skipping blacklisted job: Customer Solution Architect Team Lead (EMEA) at supabase
[2026-01-31T23:01:53.861Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer - Music at spotify
[2026-01-31T23:01:53.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Engineer - Music at spotify
🚫 Skipping blacklisted job: Principal Research Scientist - Music at spotify
🚫 Skipping blacklisted job: Staff Research Scientist - Music at spotify
[2026-01-31T23:01:53.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist - Music at spotify
🚫 Skipping blacklisted job: Senior Content Accountant at spotify
[2026-01-31T23:01:54.015Z] [BOT] ✅ Loaded pending queue: 2950 total (1413 pending, 50 enriched, 1487 posted)
[2026-01-31T23:01:54.204Z] [BOT] ✅ Saved pending queue: 2943 total (1413 pending, 43 enriched, 1487 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (7 blacklisted)
[2026-01-31T23:01:54.204Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T23:01:54.205Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-31T23:01:54.205Z] [BOT] 📍 3 jobs with multiple locations:
   - Advanced Degree Software Engineer - Fusion @ Oracle: san carlos, seattle
   - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
   - Software Engineer – Forward Deployed AI (New Grad) @ Promise: oakland, washington
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T23:01:54.208Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T23:01:54.209Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-31T23:01:54.210Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:01:54.226Z] [BOT ERROR] (node:3914) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T23:01:54.533Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-31T23:01:54.534Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-31T23:01:54.534Z] [BOT] 💾 BEFORE MERGE: 1498 jobs in memory (cached)
[2026-01-31T23:01:54.577Z] [BOT] ✅ Loaded V2 database: 1497 jobs
💾 DISK STATE: 1497 jobs on disk
[2026-01-31T23:01:54.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1498
[2026-01-31T23:01:54.589Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:01:54.589Z] [BOT] 💾 AFTER MERGE: 1498 jobs (merged disk + memory)
[2026-01-31T23:01:54.591Z] [BOT] ✅ No jobs to archive (all 1498 jobs within 7-day window)
[2026-01-31T23:01:54.690Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:01:56.192Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:01:56.376Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-31T23:01:56.376Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-31T23:01:56.377Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T23:01:56.377Z] [BOT] 💾 BEFORE MERGE: 1499 jobs in memory (cached)
[2026-01-31T23:01:56.414Z] [BOT] ✅ Loaded V2 database: 1498 jobs
💾 DISK STATE: 1498 jobs on disk
[2026-01-31T23:01:56.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1499
[2026-01-31T23:01:56.426Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1499 jobs (merged disk + memory)
[2026-01-31T23:01:56.428Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-31T23:01:56.523Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:01:58.024Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:01:58.024Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:01:58.322Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-31T23:01:58.322Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-31T23:01:58.323Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-31T23:01:58.323Z] [BOT] 💾 BEFORE MERGE: 1500 jobs in memory (cached)
[2026-01-31T23:01:58.360Z] [BOT] ✅ Loaded V2 database: 1499 jobs
💾 DISK STATE: 1499 jobs on disk
[2026-01-31T23:01:58.361Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1500
[2026-01-31T23:01:58.371Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:01:58.372Z] [BOT] 💾 AFTER MERGE: 1500 jobs (merged disk + memory)
[2026-01-31T23:01:58.372Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-31T23:01:58.474Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:01:59.976Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-31T23:01:59.976Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:02:00.158Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-31T23:02:00.159Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-31T23:02:00.159Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-31T23:02:00.162Z] [BOT] 💾 BEFORE MERGE: 1501 jobs in memory (cached)
[2026-01-31T23:02:00.199Z] [BOT] ✅ Loaded V2 database: 1500 jobs
💾 DISK STATE: 1500 jobs on disk
[2026-01-31T23:02:00.202Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1501
[2026-01-31T23:02:00.208Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1501 jobs (merged disk + memory)
[2026-01-31T23:02:00.209Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-31T23:02:00.300Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:01.803Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-31T23:02:01.803Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:02:01.977Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-31T23:02:01.977Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-31T23:02:01.979Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-31T23:02:01.979Z] [BOT] 💾 BEFORE MERGE: 1502 jobs in memory (cached)
[2026-01-31T23:02:02.016Z] [BOT] ✅ Loaded V2 database: 1501 jobs
💾 DISK STATE: 1501 jobs on disk
[2026-01-31T23:02:02.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1502
[2026-01-31T23:02:02.027Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1502 jobs (merged disk + memory)
[2026-01-31T23:02:02.027Z] [BOT] ✅ No jobs to archive (all 1502 jobs within 7-day window)
[2026-01-31T23:02:02.124Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:06.626Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T23:02:06.627Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-31T23:02:06.628Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:02:06.980Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-31T23:02:06.980Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-31T23:02:06.981Z] [BOT] 💾 BEFORE MERGE: 1503 jobs in memory (cached)
[2026-01-31T23:02:07.018Z] [BOT] ✅ Loaded V2 database: 1502 jobs
💾 DISK STATE: 1502 jobs on disk
[2026-01-31T23:02:07.021Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1503
[2026-01-31T23:02:07.027Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1503 jobs (merged disk + memory)
[2026-01-31T23:02:07.028Z] [BOT] ✅ No jobs to archive (all 1503 jobs within 7-day window)
[2026-01-31T23:02:07.129Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
[2026-01-31T23:02:07.129Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:08.632Z] [BOT] 📍 [ROUTING] "Minor League Affiliate Technology Coordinator" @ ORG_2bc58fcc League Baseball
   Category: TECH (default)
[2026-01-31T23:02:08.632Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:02:08.892Z] [BOT] ✅ Posted message: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball
[2026-01-31T23:02:08.893Z] [BOT] 💾 Added channel posting: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
[2026-01-31T23:02:08.893Z] [BOT] 💾 BEFORE MERGE: 1504 jobs in memory (cached)
[2026-01-31T23:02:08.931Z] [BOT] ✅ Loaded V2 database: 1503 jobs
💾 DISK STATE: 1503 jobs on disk
[2026-01-31T23:02:08.937Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1504
[2026-01-31T23:02:08.941Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:02:08.941Z] [BOT] 💾 AFTER MERGE: 1504 jobs (merged disk + memory)
[2026-01-31T23:02:08.942Z] [BOT] ✅ No jobs to archive (all 1504 jobs within 7-day window)
[2026-01-31T23:02:09.044Z] [BOT] 💾 Saved posted_jobs.json: 1504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:10.547Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f30b244b
[2026-01-31T23:02:10.548Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:02:10.843Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_f30b244b in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_f30b244b
[2026-01-31T23:02:10.844Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_f30b244b → category channel (1 total channels)
[2026-01-31T23:02:10.844Z] [BOT] 💾 BEFORE MERGE: 1505 jobs in memory (cached)
[2026-01-31T23:02:10.882Z] [BOT] ✅ Loaded V2 database: 1504 jobs
💾 DISK STATE: 1504 jobs on disk
[2026-01-31T23:02:10.885Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1505
[2026-01-31T23:02:10.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:02:10.891Z] [BOT] 💾 AFTER MERGE: 1505 jobs (merged disk + memory)
[2026-01-31T23:02:10.892Z] [BOT] ✅ No jobs to archive (all 1505 jobs within 7-day window)
[2026-01-31T23:02:10.988Z] [BOT] 💾 Saved posted_jobs.json: 1505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:12.491Z] [BOT] 📍 [ROUTING] "Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned)" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T23:02:12.491Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:02:12.659Z] [BOT] ✅ Posted message: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c
[2026-01-31T23:02:12.660Z] [BOT] 💾 Added channel posting: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T23:02:12.660Z] [BOT] 💾 BEFORE MERGE: 1506 jobs in memory (cached)
[2026-01-31T23:02:12.698Z] [BOT] ✅ Loaded V2 database: 1505 jobs
💾 DISK STATE: 1505 jobs on disk
[2026-01-31T23:02:12.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1506
[2026-01-31T23:02:12.709Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:02:12.710Z] [BOT] 💾 AFTER MERGE: 1506 jobs (merged disk + memory)
[2026-01-31T23:02:12.710Z] [BOT] ✅ No jobs to archive (all 1506 jobs within 7-day window)
[2026-01-31T23:02:12.822Z] [BOT] 💾 Saved posted_jobs.json: 1506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:14.324Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Fusion" @ ORG_dc7620eb
[2026-01-31T23:02:14.324Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:02:14.699Z] [BOT] ✅ Posted message: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb
[2026-01-31T23:02:14.699Z] [BOT] 💾 Added channel posting: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T23:02:14.700Z] [BOT] 💾 BEFORE MERGE: 1507 jobs in memory (cached)
[2026-01-31T23:02:14.738Z] [BOT] ✅ Loaded V2 database: 1506 jobs
💾 DISK STATE: 1506 jobs on disk
[2026-01-31T23:02:14.743Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1507
[2026-01-31T23:02:14.749Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1507 jobs (merged disk + memory)
[2026-01-31T23:02:14.750Z] [BOT] ✅ No jobs to archive (all 1507 jobs within 7-day window)
[2026-01-31T23:02:14.844Z] [BOT] 💾 Saved posted_jobs.json: 1507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:02:19.345Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T23:02:19.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T23:02:19.347Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T23:02:19.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T23:02:19.347Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T23:02:19.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-31T23:02:19.349Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7846274c..." not found, but found as SHA256 "dbdfa9eec3c1c783"
⏭️  Skipping duplicate: JID_5b77bff1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_def02bfd..." not found, but found as SHA256 "0883cd8583ddb7c6"
⏭️  Skipping duplicate: JID_105b504b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_87d97b7b..." not found, but found as SHA256 "27202554263f1815"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_c36d4464-detail (posted within 7 days)
[2026-01-31T23:02:19.349Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "1b9c96ae99f36736"
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311889 (posted within 7 days)
[2026-01-31T23:02:19.521Z] [BOT] ✅ Loaded pending queue: 2943 total (1413 pending, 43 enriched, 1487 posted)
[2026-01-31T23:02:19.694Z] [BOT] ✅ Saved pending queue: 2943 total (1413 pending, 33 enriched, 1497 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T23:02:19.796Z] [BOT] 📂 Loaded 11578 existing routing entries
[2026-01-31T23:02:19.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11588
   Timestamp: 2026-01-31T23:02:19.883Z
[2026-01-31T23:02:19.925Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T23:02:19.925Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T23:02:19.926Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T23:02:19.926Z] [BOT] Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-31T23:02:19.926Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 5 posts
[2026-01-31T23:02:19.926Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1507 jobs in memory (cached)
[2026-01-31T23:02:19.972Z] [BOT] ✅ Loaded V2 database: 1507 jobs
💾 DISK STATE: 1507 jobs on disk
[2026-01-31T23:02:19.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1507
[2026-01-31T23:02:19.978Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1507 jobs (merged disk + memory)
[2026-01-31T23:02:19.979Z] [BOT] ✅ No jobs to archive (all 1507 jobs within 7-day window)
[2026-01-31T23:02:20.101Z] [BOT] 💾 Saved posted_jobs.json: 1507 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T23:02:22.130Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3914) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*