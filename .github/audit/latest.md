# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T21:48:06.750Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T21:47:27.053Z] ========================================
[2026-01-30T21:47:27.055Z] Discord Bot Execution Log
[2026-01-30T21:47:27.055Z] Environment: GitHub Actions
[2026-01-30T21:47:27.055Z] Node Version: v20.20.0
[2026-01-30T21:47:27.055Z] ========================================
[2026-01-30T21:47:27.055Z] Environment Variables Check:
[2026-01-30T21:47:27.055Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T21:47:27.055Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.055Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T21:47:27.055Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T21:47:27.055Z] 
Multi-Channel Configuration:
[2026-01-30T21:47:27.056Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T21:47:27.056Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T21:47:27.056Z] 
Data Files Check:
[2026-01-30T21:47:27.057Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T21:47:27.092Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4618077 bytes)
[2026-01-30T21:47:27.092Z] 
========================================
[2026-01-30T21:47:27.092Z] Starting Enhanced Discord Bot...
[2026-01-30T21:47:27.092Z] ========================================
[2026-01-30T21:47:27.566Z] [BOT] ✅ Loaded V2 database: 698 jobs
[2026-01-30T21:47:28.449Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T21:47:28.450Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T21:47:28.450Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T21:47:28.607Z] [BOT] ✅ Loaded pending queue: 2935 total (2216 pending, 50 enriched, 669 posted)
[2026-01-30T21:47:28.608Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T21:47:28.608Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:47:28.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T21:47:28.609Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T21:47:28.609Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:47:28.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T21:47:28.609Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T21:47:28.610Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T21:47:28.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T21:47:28.610Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T21:47:28.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T21:47:28.610Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T21:47:28.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T21:47:28.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T21:47:28.611Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T21:47:28.611Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T21:47:28.611Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T21:47:28.612Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T21:47:28.612Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T21:47:28.612Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T21:47:28.612Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T21:47:28.617Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T21:47:28.617Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-30T21:47:28.617Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T21:47:28.618Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
   (7 grouped as same job with different locations)
[2026-01-30T21:47:28.618Z] [BOT] 📍 2 jobs with multiple locations:
   - Select Major Account Executive EST/CST - Miami, FL @ samsara: miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Account Executive, Mid Market @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-30T21:47:28.618Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T21:47:28.622Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T21:47:28.622Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Miami, FL" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T21:47:28.622Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:47:28.639Z] [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T21:47:28.942Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Miami, FL @ samsara in #💰・finance-jobs
[2026-01-30T21:47:28.943Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Miami, FL @ samsara
[2026-01-30T21:47:28.943Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Miami, FL @ samsara → category channel (1 total channels)
[2026-01-30T21:47:28.943Z] [BOT] 💾 BEFORE MERGE: 699 jobs in memory (cached)
[2026-01-30T21:47:28.968Z] [BOT] ✅ Loaded V2 database: 698 jobs
💾 DISK STATE: 698 jobs on disk
[2026-01-30T21:47:28.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=699
[2026-01-30T21:47:28.971Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:28.971Z] [BOT] 💾 AFTER MERGE: 699 jobs (merged disk + memory)
[2026-01-30T21:47:28.971Z] [BOT] ✅ No jobs to archive (all 699 jobs within 7-day window)
[2026-01-30T21:47:29.040Z] [BOT] 💾 Saved posted_jobs.json: 699 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:30.542Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:47:30.903Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
  ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-30T21:47:30.904Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-01-30T21:47:30.904Z] [BOT] 💾 BEFORE MERGE: 700 jobs in memory (cached)
[2026-01-30T21:47:30.927Z] [BOT] ✅ Loaded V2 database: 699 jobs
💾 DISK STATE: 699 jobs on disk
[2026-01-30T21:47:30.927Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=700
[2026-01-30T21:47:30.929Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:30.929Z] [BOT] 💾 AFTER MERGE: 700 jobs (merged disk + memory)
[2026-01-30T21:47:30.929Z] [BOT] ✅ No jobs to archive (all 700 jobs within 7-day window)
[2026-01-30T21:47:30.981Z] [BOT] 💾 Saved posted_jobs.json: 700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:35.483Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T21:47:35.484Z] [BOT] 📍 [ROUTING] "Software Engineer 1 – New Grad - Fullstack - Risk Engineering" @ ORG_c2a520b8
   Category: TECH (matched: "software")
[2026-01-30T21:47:35.484Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:47:35.811Z] [BOT] ✅ Posted message: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 in #💻・tech-jobs
[2026-01-30T21:47:35.811Z] [BOT] ✅ Industry: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8
[2026-01-30T21:47:35.811Z] [BOT] 💾 Added channel posting: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 → category channel (1 total channels)
[2026-01-30T21:47:35.811Z] [BOT] 💾 BEFORE MERGE: 701 jobs in memory (cached)
[2026-01-30T21:47:35.833Z] [BOT] ✅ Loaded V2 database: 700 jobs
💾 DISK STATE: 700 jobs on disk
[2026-01-30T21:47:35.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=701
[2026-01-30T21:47:35.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:35.835Z] [BOT] 💾 AFTER MERGE: 701 jobs (merged disk + memory)
[2026-01-30T21:47:35.835Z] [BOT] ✅ No jobs to archive (all 701 jobs within 7-day window)
[2026-01-30T21:47:35.886Z] [BOT] 💾 Saved posted_jobs.json: 701 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:37.662Z] [BOT] ✅ Posted message: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 in #🗽・JID_98d4f0de
[2026-01-30T21:47:37.662Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:47:37.663Z] [BOT] 💾 Added channel posting: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 → location channel (2 total channels)
[2026-01-30T21:47:37.663Z] [BOT] 💾 BEFORE MERGE: 701 jobs in memory (cached)
[2026-01-30T21:47:37.683Z] [BOT] ✅ Loaded V2 database: 701 jobs
💾 DISK STATE: 701 jobs on disk
[2026-01-30T21:47:37.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=701
[2026-01-30T21:47:37.685Z] [BOT] 🔀 Deep merged: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 701 jobs (merged disk + memory)
[2026-01-30T21:47:37.685Z] [BOT] ✅ No jobs to archive (all 701 jobs within 7-day window)
[2026-01-30T21:47:37.737Z] [BOT] 💾 Saved posted_jobs.json: 701 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:39.238Z] [BOT] 📍 [ROUTING] "Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States" @ ORG_3cfbdbc3
[2026-01-30T21:47:39.238Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:47:39.394Z] [BOT] ✅ Posted message: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3
[2026-01-30T21:47:39.394Z] [BOT] 💾 Added channel posting: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 → category channel (1 total channels)
[2026-01-30T21:47:39.394Z] [BOT] 💾 BEFORE MERGE: 702 jobs in memory (cached)
[2026-01-30T21:47:39.415Z] [BOT] ✅ Loaded V2 database: 701 jobs
💾 DISK STATE: 701 jobs on disk
[2026-01-30T21:47:39.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=702
[2026-01-30T21:47:39.417Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:39.417Z] [BOT] 💾 AFTER MERGE: 702 jobs (merged disk + memory)
[2026-01-30T21:47:39.418Z] [BOT] ✅ No jobs to archive (all 702 jobs within 7-day window)
[2026-01-30T21:47:39.471Z] [BOT] 💾 Saved posted_jobs.json: 702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:40.972Z] [BOT] 📍 [ROUTING] "Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift" @ ORG_66ea81b5 Health
[2026-01-30T21:47:40.972Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:47:41.238Z] [BOT] ✅ Posted message: Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health in #💻・tech-jobs
  ✅ Industry: Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health
[2026-01-30T21:47:41.239Z] [BOT] 💾 Added channel posting: Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health → category channel (1 total channels)
[2026-01-30T21:47:41.239Z] [BOT] 💾 BEFORE MERGE: 703 jobs in memory (cached)
[2026-01-30T21:47:41.259Z] [BOT] ✅ Loaded V2 database: 702 jobs
💾 DISK STATE: 702 jobs on disk
[2026-01-30T21:47:41.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=703
[2026-01-30T21:47:41.261Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:41.261Z] [BOT] 💾 AFTER MERGE: 703 jobs (merged disk + memory)
[2026-01-30T21:47:41.262Z] [BOT] ✅ No jobs to archive (all 703 jobs within 7-day window)
[2026-01-30T21:47:41.313Z] [BOT] 💾 Saved posted_jobs.json: 703 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:45.815Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T21:47:45.816Z] [BOT] 📍 [ROUTING] "Early Career AI/ML Engineer" @ ORG_86b8b6fdin Co.
   Category: AI (matched: "machine learning")
[2026-01-30T21:47:45.817Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T21:47:46.133Z] [BOT] ✅ Posted message: Early Career AI/ML Engineer @ ORG_86b8b6fdin Co. in #🤖・ai-jobs
[2026-01-30T21:47:46.133Z] [BOT] ✅ Industry: Early Career AI/ML Engineer @ ORG_86b8b6fdin Co.
[2026-01-30T21:47:46.133Z] [BOT] 💾 Added channel posting: Early Career AI/ML Engineer @ ORG_86b8b6fdin Co. → category channel (1 total channels)
[2026-01-30T21:47:46.134Z] [BOT] 💾 BEFORE MERGE: 704 jobs in memory (cached)
[2026-01-30T21:47:46.155Z] [BOT] ✅ Loaded V2 database: 703 jobs
💾 DISK STATE: 703 jobs on disk
[2026-01-30T21:47:46.156Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=704
[2026-01-30T21:47:46.158Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 704 jobs (merged disk + memory)
[2026-01-30T21:47:46.158Z] [BOT] ✅ No jobs to archive (all 704 jobs within 7-day window)
[2026-01-30T21:47:46.210Z] [BOT] 💾 Saved posted_jobs.json: 704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:47.713Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ airtable
[2026-01-30T21:47:47.713Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:47:48.051Z] [BOT] ✅ Posted message: Product Security Engineer @ airtable in #🤖・ai-jobs
[2026-01-30T21:47:48.051Z] [BOT] ✅ Industry: Product Security Engineer @ airtable
[2026-01-30T21:47:48.051Z] [BOT] 💾 Added channel posting: Product Security Engineer @ airtable → category channel (1 total channels)
[2026-01-30T21:47:48.051Z] [BOT] 💾 BEFORE MERGE: 705 jobs in memory (cached)
[2026-01-30T21:47:48.072Z] [BOT] ✅ Loaded V2 database: 704 jobs
[2026-01-30T21:47:48.072Z] [BOT] 💾 DISK STATE: 704 jobs on disk
[2026-01-30T21:47:48.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=705
[2026-01-30T21:47:48.074Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:48.074Z] [BOT] 💾 AFTER MERGE: 705 jobs (merged disk + memory)
[2026-01-30T21:47:48.075Z] [BOT] ✅ No jobs to archive (all 705 jobs within 7-day window)
[2026-01-30T21:47:48.126Z] [BOT] 💾 Saved posted_jobs.json: 705 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:49.627Z] [BOT] 📍 [ROUTING] "On‑Site IT Support Engineer (Residential Operations)" @ coinbase
[2026-01-30T21:47:49.627Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:47:49.851Z] [BOT] ✅ Posted message: On‑Site IT Support Engineer (Residential Operations) @ coinbase in #🤖・ai-jobs
  ✅ Industry: On‑Site IT Support Engineer (Residential Operations) @ coinbase
[2026-01-30T21:47:49.852Z] [BOT] 💾 Added channel posting: On‑Site IT Support Engineer (Residential Operations) @ coinbase → category channel (1 total channels)
[2026-01-30T21:47:49.852Z] [BOT] 💾 BEFORE MERGE: 706 jobs in memory (cached)
[2026-01-30T21:47:49.873Z] [BOT] ✅ Loaded V2 database: 705 jobs
💾 DISK STATE: 705 jobs on disk
[2026-01-30T21:47:49.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=706
[2026-01-30T21:47:49.875Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:49.875Z] [BOT] 💾 AFTER MERGE: 706 jobs (merged disk + memory)
[2026-01-30T21:47:49.876Z] [BOT] ✅ No jobs to archive (all 706 jobs within 7-day window)
[2026-01-30T21:47:49.926Z] [BOT] 💾 Saved posted_jobs.json: 706 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:51.428Z] [BOT] 📍 [ROUTING] "Business Controller Intern" @ coinbase
[2026-01-30T21:47:51.428Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-30T21:47:51.721Z] [BOT] ✅ Posted message: Business Controller Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Business Controller Intern @ coinbase
[2026-01-30T21:47:51.722Z] [BOT] 💾 Added channel posting: Business Controller Intern @ coinbase → category channel (1 total channels)
[2026-01-30T21:47:51.722Z] [BOT] 💾 BEFORE MERGE: 707 jobs in memory (cached)
[2026-01-30T21:47:51.744Z] [BOT] ✅ Loaded V2 database: 706 jobs
💾 DISK STATE: 706 jobs on disk
[2026-01-30T21:47:51.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=707
[2026-01-30T21:47:51.746Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:47:51.746Z] [BOT] 💾 AFTER MERGE: 707 jobs (merged disk + memory)
[2026-01-30T21:47:51.747Z] [BOT] ✅ No jobs to archive (all 707 jobs within 7-day window)
[2026-01-30T21:47:51.798Z] [BOT] 💾 Saved posted_jobs.json: 707 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:53.515Z] [BOT] ✅ Posted message: Business Controller Intern @ coinbase in #🗽・JID_98d4f0de
[2026-01-30T21:47:53.515Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:47:53.515Z] [BOT] 💾 Added channel posting: Business Controller Intern @ coinbase → location channel (2 total channels)
💾 BEFORE MERGE: 707 jobs in memory (cached)
[2026-01-30T21:47:53.536Z] [BOT] ✅ Loaded V2 database: 707 jobs
💾 DISK STATE: 707 jobs on disk
[2026-01-30T21:47:53.536Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=707
[2026-01-30T21:47:53.538Z] [BOT] 🔀 Deep merged: Business Controller Intern @ coinbase (disk: 1 channels → merged: 2 channels)
[2026-01-30T21:47:53.538Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 707 jobs (merged disk + memory)
[2026-01-30T21:47:53.539Z] [BOT] ✅ No jobs to archive (all 707 jobs within 7-day window)
[2026-01-30T21:47:53.589Z] [BOT] 💾 Saved posted_jobs.json: 707 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:47:58.092Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T21:47:58.093Z] [BOT] 📍 [ROUTING] "Data Engineer" @ brex
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T21:47:58.093Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:47:58.347Z] [BOT] ✅ Posted message: Data Engineer @ brex in #📊・JID_fb739488
[2026-01-30T21:47:58.348Z] [BOT] ✅ Industry: Data Engineer @ brex
[2026-01-30T21:47:58.348Z] [BOT] 💾 Added channel posting: Data Engineer @ brex → category channel (1 total channels)
[2026-01-30T21:47:58.348Z] [BOT] 💾 BEFORE MERGE: 708 jobs in memory (cached)
[2026-01-30T21:47:58.368Z] [BOT] ✅ Loaded V2 database: 707 jobs
💾 DISK STATE: 707 jobs on disk
[2026-01-30T21:47:58.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=708
[2026-01-30T21:47:58.370Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 708 jobs (merged disk + memory)
[2026-01-30T21:47:58.371Z] [BOT] ✅ No jobs to archive (all 708 jobs within 7-day window)
[2026-01-30T21:47:58.423Z] [BOT] 💾 Saved posted_jobs.json: 708 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:48:02.925Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T21:48:02.926Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "81901ab017832b1a"
[2026-01-30T21:48:02.926Z] [BOT] ⏭️  Skipping duplicate: JID_ef2146b7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f6565ad3..." not found, but found as SHA256 "35b189cd4c22b795"
[2026-01-30T21:48:02.926Z] [BOT] ⏭️  Skipping duplicate: JID_f6565ad3 (posted within 7 days)
[2026-01-30T21:48:02.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ebea71e..." not found, but found as SHA256 "b342328c8415bff5"
⏭️  Skipping duplicate: JID_4855d707 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f2fe25d0..." not found, but found as SHA256 "7d809cfdd338091e"
⏭️  Skipping duplicate: JID_75820c66 (posted within 7 days)
[2026-01-30T21:48:02.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b508037..." not found, but found as SHA256 "010f0c88850884ce"
⏭️  Skipping duplicate: JID_a6798459 (posted within 7 days)
[2026-01-30T21:48:02.928Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "f8c06a071ffafdde"
⏭️  Skipping duplicate: JID_4bba1742 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d7f5eacd..." not found, but found as SHA256 "55c2a82b5acda370"
⏭️  Skipping duplicate: JID_df37ce36 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0bd523c4..." not found, but found as SHA256 "196853b1dddd3185"
⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a458da21..." not found, but found as SHA256 "6cd751f2915643a2"
⏭️  Skipping duplicate: JID_bfdf3422 (posted within 7 days)
[2026-01-30T21:48:02.928Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_30a278fb..." not found, but found as SHA256 "1fc29ee0e13e1b61"
⏭️  Skipping duplicate: JID_b6fd54f5-shift_r37241 (posted within 7 days)
[2026-01-30T21:48:03.091Z] [BOT] ✅ Loaded pending queue: 2935 total (2216 pending, 50 enriched, 669 posted)
[2026-01-30T21:48:03.267Z] [BOT] ✅ Saved pending queue: 2935 total (2216 pending, 40 enriched, 679 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T21:48:03.365Z] [BOT] 📂 Loaded 10760 existing routing entries
[2026-01-30T21:48:03.502Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T21:48:03.502Z] [BOT] New entries: 10
   Total entries: 10770
   Timestamp: 2026-01-30T21:48:03.464Z
[2026-01-30T21:48:03.502Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T21:48:03.502Z] [BOT] Total attempts: 26
   Successful: 12
   Failed: 0
   Skipped: 14
[2026-01-30T21:48:03.502Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T21:48:03.503Z] [BOT] Total posts: 12
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 2 posts
[2026-01-30T21:48:03.503Z] [BOT] 5. #📊・JID_fb739488: 1 posts
[2026-01-30T21:48:03.503Z] [BOT] [STATS] Channel stats saved
[2026-01-30T21:48:03.503Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 708 jobs in memory (cached)
[2026-01-30T21:48:03.526Z] [BOT] ✅ Loaded V2 database: 708 jobs
💾 DISK STATE: 708 jobs on disk
[2026-01-30T21:48:03.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=708
[2026-01-30T21:48:03.528Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 708 jobs (merged disk + memory)
[2026-01-30T21:48:03.528Z] [BOT] ✅ No jobs to archive (all 708 jobs within 7-day window)
[2026-01-30T21:48:03.578Z] [BOT] 💾 Saved posted_jobs.json: 708 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:48:03.579Z] [BOT] ✅ Database saved successfully
[2026-01-30T21:48:05.599Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*