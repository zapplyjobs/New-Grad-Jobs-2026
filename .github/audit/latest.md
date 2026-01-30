# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T10:17:59.365Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T10:17:24.117Z] ========================================
[2026-01-30T10:17:24.119Z] Discord Bot Execution Log
[2026-01-30T10:17:24.119Z] Environment: GitHub Actions
[2026-01-30T10:17:24.119Z] Node Version: v20.20.0
[2026-01-30T10:17:24.119Z] ========================================
[2026-01-30T10:17:24.119Z] Environment Variables Check:
[2026-01-30T10:17:24.119Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T10:17:24.119Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.119Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T10:17:24.119Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T10:17:24.120Z] 
Multi-Channel Configuration:
[2026-01-30T10:17:24.120Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T10:17:24.120Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T10:17:24.120Z] 
Data Files Check:
[2026-01-30T10:17:24.122Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149667 bytes)
[2026-01-30T10:17:24.139Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2472160 bytes)
[2026-01-30T10:17:24.139Z] 
========================================
[2026-01-30T10:17:24.139Z] Starting Enhanced Discord Bot...
[2026-01-30T10:17:24.139Z] ========================================
[2026-01-30T10:17:24.613Z] [BOT] ✅ Loaded V2 database: 379 jobs
[2026-01-30T10:17:25.221Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T10:17:25.221Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T10:17:25.221Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T10:17:25.385Z] [BOT] ✅ Loaded pending queue: 2920 total (2520 pending, 50 enriched, 350 posted)
[2026-01-30T10:17:25.385Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T10:17:25.385Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T10:17:25.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T10:17:25.386Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T10:17:25.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T10:17:25.386Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T10:17:25.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T10:17:25.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T10:17:25.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-30T10:17:25.387Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T10:17:25.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T10:17:25.391Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T10:17:25.391Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T10:17:25.391Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T10:17:25.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T10:17:25.392Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T10:17:25.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T10:17:25.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T10:17:25.393Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T10:17:25.393Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
[2026-01-30T10:17:25.393Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-01-30T10:17:25.393Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Interaction Design at figma
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Health Insurance at gusto
[2026-01-30T10:17:25.393Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-30T10:17:25.546Z] [BOT] ✅ Loaded pending queue: 2920 total (2520 pending, 50 enriched, 350 posted)
[2026-01-30T10:17:25.718Z] [BOT] ✅ Saved pending queue: 2914 total (2520 pending, 44 enriched, 350 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T10:17:25.718Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T10:17:25.719Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-30T10:17:25.719Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: new york city, ny united states, salt lake city, ut united states, atlanta, ga united states, los angeles, ca united states
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-30T10:17:25.719Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T10:17:25.723Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T10:17:25.724Z] [BOT] 📍 [ROUTING] "Software Engineer, Observability" @ airtable
[2026-01-30T10:17:25.724Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T10:17:25.742Z] [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T10:17:26.008Z] [BOT] ✅ Posted message: Software Engineer, Observability @ airtable in #🤖・ai-jobs
[2026-01-30T10:17:26.008Z] [BOT] ✅ Industry: Software Engineer, Observability @ airtable
[2026-01-30T10:17:26.009Z] [BOT] 💾 Added channel posting: Software Engineer, Observability @ airtable → category channel (1 total channels)
[2026-01-30T10:17:26.009Z] [BOT] 💾 BEFORE MERGE: 380 jobs in memory (cached)
[2026-01-30T10:17:26.022Z] [BOT] ✅ Loaded V2 database: 379 jobs
💾 DISK STATE: 379 jobs on disk
[2026-01-30T10:17:26.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=380
[2026-01-30T10:17:26.023Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:17:26.023Z] [BOT] 💾 AFTER MERGE: 380 jobs (merged disk + memory)
[2026-01-30T10:17:26.024Z] [BOT] ✅ No jobs to archive (all 380 jobs within 7-day window)
[2026-01-30T10:17:26.057Z] [BOT] 💾 Saved posted_jobs.json: 380 active jobs
[2026-01-30T10:17:26.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:30.560Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T10:17:30.560Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ airtable
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:30.719Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ airtable in #💻・tech-jobs
[2026-01-30T10:17:30.719Z] [BOT] ✅ Industry: Account Executive, Mid Market @ airtable
[2026-01-30T10:17:30.719Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ airtable → category channel (1 total channels)
💾 BEFORE MERGE: 381 jobs in memory (cached)
[2026-01-30T10:17:30.731Z] [BOT] ✅ Loaded V2 database: 380 jobs
💾 DISK STATE: 380 jobs on disk
[2026-01-30T10:17:30.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=381
[2026-01-30T10:17:30.732Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 381 jobs (merged disk + memory)
[2026-01-30T10:17:30.732Z] [BOT] ✅ No jobs to archive (all 381 jobs within 7-day window)
[2026-01-30T10:17:30.762Z] [BOT] 💾 Saved posted_jobs.json: 381 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:32.264Z] [BOT] 📍 [ROUTING] "Emerging Small Business, Account Executive" @ airtable
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:32.457Z] [BOT] ✅ Posted message: Emerging Small Business, Account Executive @ airtable in #💻・tech-jobs
  ✅ Industry: Emerging Small Business, Account Executive @ airtable
[2026-01-30T10:17:32.457Z] [BOT] 💾 Added channel posting: Emerging Small Business, Account Executive @ airtable → category channel (1 total channels)
[2026-01-30T10:17:32.457Z] [BOT] 💾 BEFORE MERGE: 382 jobs in memory (cached)
[2026-01-30T10:17:32.469Z] [BOT] ✅ Loaded V2 database: 381 jobs
[2026-01-30T10:17:32.469Z] [BOT] 💾 DISK STATE: 381 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=382
[2026-01-30T10:17:32.470Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 382 jobs (merged disk + memory)
✅ No jobs to archive (all 382 jobs within 7-day window)
[2026-01-30T10:17:32.500Z] [BOT] 💾 Saved posted_jobs.json: 382 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:34.003Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
[2026-01-30T10:17:34.003Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:34.216Z] [BOT] ✅ Posted message: Account Executive, Commercial Accounts @ airtable in #💻・tech-jobs
[2026-01-30T10:17:34.216Z] [BOT] ✅ Industry: Account Executive, Commercial Accounts @ airtable
[2026-01-30T10:17:34.216Z] [BOT] 💾 Added channel posting: Account Executive, Commercial Accounts @ airtable → category channel (1 total channels)
[2026-01-30T10:17:34.216Z] [BOT] 💾 BEFORE MERGE: 383 jobs in memory (cached)
[2026-01-30T10:17:34.232Z] [BOT] ✅ Loaded V2 database: 382 jobs
💾 DISK STATE: 382 jobs on disk
[2026-01-30T10:17:34.232Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=383
[2026-01-30T10:17:34.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:17:34.235Z] [BOT] 💾 AFTER MERGE: 383 jobs (merged disk + memory)
[2026-01-30T10:17:34.236Z] [BOT] ✅ No jobs to archive (all 383 jobs within 7-day window)
[2026-01-30T10:17:34.270Z] [BOT] 💾 Saved posted_jobs.json: 383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:35.772Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:35.993Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T10:17:35.993Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T10:17:35.993Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T10:17:35.993Z] [BOT] 💾 BEFORE MERGE: 384 jobs in memory (cached)
[2026-01-30T10:17:36.005Z] [BOT] ✅ Loaded V2 database: 383 jobs
💾 DISK STATE: 383 jobs on disk
[2026-01-30T10:17:36.005Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=384
[2026-01-30T10:17:36.006Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 384 jobs (merged disk + memory)
[2026-01-30T10:17:36.006Z] [BOT] ✅ No jobs to archive (all 384 jobs within 7-day window)
[2026-01-30T10:17:36.034Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:37.685Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T10:17:37.685Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
[2026-01-30T10:17:37.685Z] [BOT] 💾 BEFORE MERGE: 384 jobs in memory (cached)
[2026-01-30T10:17:37.699Z] [BOT] ✅ Loaded V2 database: 384 jobs
💾 DISK STATE: 384 jobs on disk
[2026-01-30T10:17:37.699Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=384
[2026-01-30T10:17:37.700Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T10:17:37.700Z] [BOT] 💾 AFTER MERGE: 384 jobs (merged disk + memory)
[2026-01-30T10:17:37.701Z] [BOT] ✅ No jobs to archive (all 384 jobs within 7-day window)
[2026-01-30T10:17:37.732Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:39.233Z] [BOT] 📍 [ROUTING] "Creative Producer" @ airtable
[2026-01-30T10:17:39.233Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:39.393Z] [BOT] ✅ Posted message: Creative Producer @ airtable in #💻・tech-jobs
[2026-01-30T10:17:39.394Z] [BOT] ✅ Industry: Creative Producer @ airtable
[2026-01-30T10:17:39.394Z] [BOT] 💾 Added channel posting: Creative Producer @ airtable → category channel (1 total channels)
💾 BEFORE MERGE: 385 jobs in memory (cached)
[2026-01-30T10:17:39.405Z] [BOT] ✅ Loaded V2 database: 384 jobs
💾 DISK STATE: 384 jobs on disk
[2026-01-30T10:17:39.405Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=385
[2026-01-30T10:17:39.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 385 jobs (merged disk + memory)
[2026-01-30T10:17:39.406Z] [BOT] ✅ No jobs to archive (all 385 jobs within 7-day window)
[2026-01-30T10:17:39.432Z] [BOT] 💾 Saved posted_jobs.json: 385 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:40.933Z] [BOT] 📍 [ROUTING] "Head of Technical Recruiting" @ gusto
[2026-01-30T10:17:40.933Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:17:41.148Z] [BOT] ✅ Posted message: Head of Technical Recruiting @ gusto in #💻・tech-jobs
  ✅ Industry: Head of Technical Recruiting @ gusto
[2026-01-30T10:17:41.148Z] [BOT] 💾 Added channel posting: Head of Technical Recruiting @ gusto → category channel (1 total channels)
[2026-01-30T10:17:41.148Z] [BOT] 💾 BEFORE MERGE: 386 jobs in memory (cached)
[2026-01-30T10:17:41.159Z] [BOT] ✅ Loaded V2 database: 385 jobs
💾 DISK STATE: 385 jobs on disk
[2026-01-30T10:17:41.160Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=386
[2026-01-30T10:17:41.161Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:17:41.161Z] [BOT] 💾 AFTER MERGE: 386 jobs (merged disk + memory)
[2026-01-30T10:17:41.161Z] [BOT] ✅ No jobs to archive (all 386 jobs within 7-day window)
[2026-01-30T10:17:41.190Z] [BOT] 💾 Saved posted_jobs.json: 386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:45.693Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-30T10:17:45.693Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-30T10:17:45.693Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:17:45.937Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T10:17:45.937Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T10:17:45.937Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-30T10:17:45.949Z] [BOT] ✅ Loaded V2 database: 386 jobs
💾 DISK STATE: 386 jobs on disk
[2026-01-30T10:17:45.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-30T10:17:45.950Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-30T10:17:45.951Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-30T10:17:45.976Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:47.785Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #🗽・JID_98d4f0de
[2026-01-30T10:17:47.785Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → location channel (2 total channels)
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-30T10:17:47.797Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-30T10:17:47.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-30T10:17:47.798Z] [BOT] 🔀 Deep merged: Account Executive, Territory (Mid-Market) @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-30T10:17:47.798Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-30T10:17:47.826Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:49.327Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Indiana  - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:17:49.530Z] [BOT] ✅ Posted message: Enterprise Account Executive (Indiana  - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Indiana  - SLED) @ verkada
[2026-01-30T10:17:49.531Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Indiana  - SLED) @ verkada → category channel (1 total channels)
[2026-01-30T10:17:49.531Z] [BOT] 💾 BEFORE MERGE: 388 jobs in memory (cached)
[2026-01-30T10:17:49.543Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-30T10:17:49.543Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=388
[2026-01-30T10:17:49.544Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 388 jobs (merged disk + memory)
[2026-01-30T10:17:49.544Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2026-01-30T10:17:49.576Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:51.079Z] [BOT] 📍 [ROUTING] "Account Executive, Embedded Finance" @ brex
[2026-01-30T10:17:51.080Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:17:51.237Z] [BOT] ✅ Posted message: Account Executive, Embedded Finance @ brex in #💰・finance-jobs
  ✅ Industry: Account Executive, Embedded Finance @ brex
[2026-01-30T10:17:51.237Z] [BOT] 💾 Added channel posting: Account Executive, Embedded Finance @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 389 jobs in memory (cached)
[2026-01-30T10:17:51.250Z] [BOT] ✅ Loaded V2 database: 388 jobs
💾 DISK STATE: 388 jobs on disk
[2026-01-30T10:17:51.250Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=389
[2026-01-30T10:17:51.251Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 389 jobs (merged disk + memory)
[2026-01-30T10:17:51.251Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2026-01-30T10:17:51.281Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:55.783Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T10:17:55.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "00375e0f062d7a51"
[2026-01-30T10:17:55.785Z] [BOT] ⏭️  Skipping duplicate: JID_b19de4e6 (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "dd029216efa67f15"
⏭️  Skipping duplicate: JID_33779413 (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "f67910f6f9128aca"
⏭️  Skipping duplicate: JID_e90b6644 (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "0c3e20032c216ece"
[2026-01-30T10:17:55.785Z] [BOT] ⏭️  Skipping duplicate: JID_2a1eeff5 (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c8cdda1d..." not found, but found as SHA256 "3cc5453773fce780"
⏭️  Skipping duplicate: JID_c8cdda1d (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "a91e9d4f45c729fe"
⏭️  Skipping duplicate: JID_14de94c8 (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "710f958fe13dd501"
⏭️  Skipping duplicate: JID_26eca0ce (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "6dd033c796c0e72d"
[2026-01-30T10:17:55.785Z] [BOT] ⏭️  Skipping duplicate: JID_70112c6f (posted within 7 days)
[2026-01-30T10:17:55.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d5d07e23..." not found, but found as SHA256 "8d4d264764f0cae5"
⏭️  Skipping duplicate: JID_d5d07e23 (posted within 7 days)
[2026-01-30T10:17:55.786Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f3640b2..." not found, but found as SHA256 "cc7cc073d0faa3d1"
⏭️  Skipping duplicate: JID_4d64b10f (posted within 7 days)
[2026-01-30T10:17:55.935Z] [BOT] ✅ Loaded pending queue: 2914 total (2520 pending, 44 enriched, 350 posted)
[2026-01-30T10:17:56.123Z] [BOT] ✅ Saved pending queue: 2914 total (2520 pending, 34 enriched, 360 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T10:17:56.224Z] [BOT] 📂 Loaded 10441 existing routing entries
[2026-01-30T10:17:56.357Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T10:17:56.357Z] [BOT] New entries: 10
   Total entries: 10451
   Timestamp: 2026-01-30T10:17:56.307Z
[2026-01-30T10:17:56.357Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T10:17:56.358Z] [BOT] Total attempts: 32
   Successful: 12
   Failed: 0
   Skipped: 20
[2026-01-30T10:17:56.358Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
[2026-01-30T10:17:56.358Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 3 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T10:17:56.358Z] [BOT] [STATS] Channel stats saved
[2026-01-30T10:17:56.358Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 389 jobs in memory (cached)
[2026-01-30T10:17:56.369Z] [BOT] ✅ Loaded V2 database: 389 jobs
💾 DISK STATE: 389 jobs on disk
[2026-01-30T10:17:56.370Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=389
[2026-01-30T10:17:56.371Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 389 jobs (merged disk + memory)
[2026-01-30T10:17:56.371Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2026-01-30T10:17:56.396Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:17:56.396Z] [BOT] ✅ Database saved successfully
[2026-01-30T10:17:58.419Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*