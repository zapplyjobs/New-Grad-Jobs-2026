# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T20:04:54.670Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T20:04:19.502Z] ========================================
[2026-01-30T20:04:19.504Z] Discord Bot Execution Log
[2026-01-30T20:04:19.504Z] Environment: GitHub Actions
[2026-01-30T20:04:19.504Z] Node Version: v20.20.0
[2026-01-30T20:04:19.504Z] ========================================
[2026-01-30T20:04:19.504Z] Environment Variables Check:
[2026-01-30T20:04:19.504Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T20:04:19.505Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T20:04:19.505Z] 
Multi-Channel Configuration:
[2026-01-30T20:04:19.505Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.505Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.506Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T20:04:19.506Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T20:04:19.506Z] 
Data Files Check:
[2026-01-30T20:04:19.507Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T20:04:19.531Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4165558 bytes)
[2026-01-30T20:04:19.531Z] 
========================================
[2026-01-30T20:04:19.531Z] Starting Enhanced Discord Bot...
[2026-01-30T20:04:19.531Z] ========================================
[2026-01-30T20:04:20.061Z] [BOT] ✅ Loaded V2 database: 632 jobs
[2026-01-30T20:04:20.660Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T20:04:20.660Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T20:04:20.661Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T20:04:20.773Z] [BOT] ✅ Loaded pending queue: 2931 total (2278 pending, 50 enriched, 603 posted)
[2026-01-30T20:04:20.774Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T20:04:20.774Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:04:20.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T20:04:20.775Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T20:04:20.775Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:04:20.775Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T20:04:20.775Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T20:04:20.775Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T20:04:20.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T20:04:20.776Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T20:04:20.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T20:04:20.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-30T20:04:20.776Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T20:04:20.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T20:04:20.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T20:04:20.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-30T20:04:20.778Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T20:04:20.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T20:04:20.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T20:04:20.783Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T20:04:20.783Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-30T20:04:20.784Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T20:04:20.784Z] [BOT] 📋 After multi-location grouping: 13 unique jobs to post
[2026-01-30T20:04:20.784Z] [BOT] (23 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-01-30T20:04:20.785Z] [BOT] - Account Executive, Commercial @ samsara: denver, boston, phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: chicago, houston, texas, charleston, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST - Charlotte, NC @ samsara: charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Android Software Engineer, Ad Formats @ reddit: san francisco, new york, chicago
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T20:04:20.788Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T20:04:20.789Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
   Category: TECH (default)
[2026-01-30T20:04:20.789Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:04:20.806Z] [BOT ERROR] (node:2714) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T20:04:21.198Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
[2026-01-30T20:04:21.198Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T20:04:21.199Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T20:04:21.200Z] [BOT] 💾 BEFORE MERGE: 633 jobs in memory (cached)
[2026-01-30T20:04:21.225Z] [BOT] ✅ Loaded V2 database: 632 jobs
💾 DISK STATE: 632 jobs on disk
[2026-01-30T20:04:21.226Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=633
[2026-01-30T20:04:21.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:21.228Z] [BOT] 💾 AFTER MERGE: 633 jobs (merged disk + memory)
[2026-01-30T20:04:21.228Z] [BOT] ✅ No jobs to archive (all 633 jobs within 7-day window)
[2026-01-30T20:04:21.279Z] [BOT] 💾 Saved posted_jobs.json: 633 active jobs
[2026-01-30T20:04:21.280Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:22.781Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T20:04:22.781Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:04:23.074Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T20:04:23.074Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T20:04:23.075Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T20:04:23.075Z] [BOT] 💾 BEFORE MERGE: 634 jobs in memory (cached)
[2026-01-30T20:04:23.090Z] [BOT] ✅ Loaded V2 database: 633 jobs
[2026-01-30T20:04:23.090Z] [BOT] 💾 DISK STATE: 633 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=634
[2026-01-30T20:04:23.091Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:23.091Z] [BOT] 💾 AFTER MERGE: 634 jobs (merged disk + memory)
[2026-01-30T20:04:23.092Z] [BOT] ✅ No jobs to archive (all 634 jobs within 7-day window)
[2026-01-30T20:04:23.131Z] [BOT] 💾 Saved posted_jobs.json: 634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:24.633Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_be3702e3inal Health
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T20:04:24.633Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:04:24.853Z] [BOT] ✅ Posted message: Product Engineer @ ORG_be3702e3inal Health in #💻・tech-jobs
[2026-01-30T20:04:24.853Z] [BOT] ✅ Industry: Product Engineer @ ORG_be3702e3inal Health
[2026-01-30T20:04:24.853Z] [BOT] 💾 Added channel posting: Product Engineer @ ORG_be3702e3inal Health → category channel (1 total channels)
[2026-01-30T20:04:24.853Z] [BOT] 💾 BEFORE MERGE: 635 jobs in memory (cached)
[2026-01-30T20:04:24.865Z] [BOT] ✅ Loaded V2 database: 634 jobs
💾 DISK STATE: 634 jobs on disk
[2026-01-30T20:04:24.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=635
[2026-01-30T20:04:24.867Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 635 jobs (merged disk + memory)
[2026-01-30T20:04:24.868Z] [BOT] ✅ No jobs to archive (all 635 jobs within 7-day window)
[2026-01-30T20:04:24.908Z] [BOT] 💾 Saved posted_jobs.json: 635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:26.409Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ mthree
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:04:26.572Z] [BOT] ✅ Posted message: Entry Level Software Developer @ mthree in #💻・tech-jobs
[2026-01-30T20:04:26.573Z] [BOT] ✅ Industry: Entry Level Software Developer @ mthree
[2026-01-30T20:04:26.573Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ mthree → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-30T20:04:26.585Z] [BOT] ✅ Loaded V2 database: 635 jobs
💾 DISK STATE: 635 jobs on disk
[2026-01-30T20:04:26.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-30T20:04:26.588Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:26.588Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-30T20:04:26.589Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-30T20:04:26.628Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:28.130Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_1d45ae99
[2026-01-30T20:04:28.130Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:04:29.701Z] [BOT] ✅ Posted message: Software Developer @ ORG_1d45ae99 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_1d45ae99
[2026-01-30T20:04:29.701Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_1d45ae99 → category channel (1 total channels)
[2026-01-30T20:04:29.701Z] [BOT] 💾 BEFORE MERGE: 637 jobs in memory (cached)
[2026-01-30T20:04:29.729Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=637
[2026-01-30T20:04:29.730Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:29.730Z] [BOT] 💾 AFTER MERGE: 637 jobs (merged disk + memory)
[2026-01-30T20:04:29.730Z] [BOT] ✅ No jobs to archive (all 637 jobs within 7-day window)
[2026-01-30T20:04:29.777Z] [BOT] 💾 Saved posted_jobs.json: 637 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:34.278Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T20:04:34.279Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Charlotte, NC" @ samsara
[2026-01-30T20:04:34.279Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T20:04:34.512Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Charlotte, NC @ samsara in #💰・finance-jobs
[2026-01-30T20:04:34.512Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Charlotte, NC @ samsara
[2026-01-30T20:04:34.512Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Charlotte, NC @ samsara → category channel (1 total channels)
[2026-01-30T20:04:34.512Z] [BOT] 💾 BEFORE MERGE: 638 jobs in memory (cached)
[2026-01-30T20:04:34.525Z] [BOT] ✅ Loaded V2 database: 637 jobs
💾 DISK STATE: 637 jobs on disk
[2026-01-30T20:04:34.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=638
[2026-01-30T20:04:34.527Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:34.527Z] [BOT] 💾 AFTER MERGE: 638 jobs (merged disk + memory)
[2026-01-30T20:04:34.527Z] [BOT] ✅ No jobs to archive (all 638 jobs within 7-day window)
[2026-01-30T20:04:34.578Z] [BOT] 💾 Saved posted_jobs.json: 638 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:39.081Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T20:04:39.082Z] [BOT] 📍 [ROUTING] "Applied Researcher 1 - AI Foundations" @ ORG_1a1cf792 One
[2026-01-30T20:04:39.082Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:04:39.510Z] [BOT] ✅ Posted message: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One in #🤖・ai-jobs
[2026-01-30T20:04:39.510Z] [BOT] ✅ Industry: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One
[2026-01-30T20:04:39.510Z] [BOT] 💾 Added channel posting: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One → category channel (1 total channels)
[2026-01-30T20:04:39.510Z] [BOT] 💾 BEFORE MERGE: 639 jobs in memory (cached)
[2026-01-30T20:04:39.522Z] [BOT] ✅ Loaded V2 database: 638 jobs
💾 DISK STATE: 638 jobs on disk
[2026-01-30T20:04:39.522Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=639
[2026-01-30T20:04:39.524Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:39.524Z] [BOT] 💾 AFTER MERGE: 639 jobs (merged disk + memory)
[2026-01-30T20:04:39.525Z] [BOT] ✅ No jobs to archive (all 639 jobs within 7-day window)
[2026-01-30T20:04:39.564Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:41.244Z] [BOT] ✅ Posted message: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:04:41.244Z] [BOT] 💾 Added channel posting: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One → location channel (2 total channels)
💾 BEFORE MERGE: 639 jobs in memory (cached)
[2026-01-30T20:04:41.257Z] [BOT] ✅ Loaded V2 database: 639 jobs
[2026-01-30T20:04:41.257Z] [BOT] 💾 DISK STATE: 639 jobs on disk
[2026-01-30T20:04:41.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=639
[2026-01-30T20:04:41.259Z] [BOT] 🔀 Deep merged: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 639 jobs (merged disk + memory)
[2026-01-30T20:04:41.259Z] [BOT] ✅ No jobs to archive (all 639 jobs within 7-day window)
[2026-01-30T20:04:41.303Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:42.803Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer – University Graduate 2026" @ ORG_175f350d
   Category: AI (matched: "AI specialization")
[2026-01-30T20:04:42.803Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:04:43.064Z] [BOT] ✅ Posted message: Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d in #🤖・ai-jobs
  ✅ Industry: Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d
[2026-01-30T20:04:43.064Z] [BOT] 💾 Added channel posting: Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d → category channel (1 total channels)
[2026-01-30T20:04:43.064Z] [BOT] 💾 BEFORE MERGE: 640 jobs in memory (cached)
[2026-01-30T20:04:43.076Z] [BOT] ✅ Loaded V2 database: 639 jobs
💾 DISK STATE: 639 jobs on disk
[2026-01-30T20:04:43.076Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=640
[2026-01-30T20:04:43.078Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:43.078Z] [BOT] 💾 AFTER MERGE: 640 jobs (merged disk + memory)
[2026-01-30T20:04:43.079Z] [BOT] ✅ No jobs to archive (all 640 jobs within 7-day window)
[2026-01-30T20:04:43.120Z] [BOT] 💾 Saved posted_jobs.json: 640 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:44.623Z] [BOT] 📍 [ROUTING] "Security Software Engineer – University Graduate 2026" @ ORG_175f350d
   Category: AI (matched: "AI specialization")
[2026-01-30T20:04:44.623Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:04:44.786Z] [BOT] ✅ Posted message: Security Software Engineer – University Graduate 2026 @ ORG_175f350d in #🤖・ai-jobs
[2026-01-30T20:04:44.786Z] [BOT] ✅ Industry: Security Software Engineer – University Graduate 2026 @ ORG_175f350d
[2026-01-30T20:04:44.786Z] [BOT] 💾 Added channel posting: Security Software Engineer – University Graduate 2026 @ ORG_175f350d → category channel (1 total channels)
[2026-01-30T20:04:44.786Z] [BOT] 💾 BEFORE MERGE: 641 jobs in memory (cached)
[2026-01-30T20:04:44.799Z] [BOT] ✅ Loaded V2 database: 640 jobs
💾 DISK STATE: 640 jobs on disk
[2026-01-30T20:04:44.799Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=641
[2026-01-30T20:04:44.800Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:44.800Z] [BOT] 💾 AFTER MERGE: 641 jobs (merged disk + memory)
[2026-01-30T20:04:44.801Z] [BOT] ✅ No jobs to archive (all 641 jobs within 7-day window)
[2026-01-30T20:04:44.844Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:46.344Z] [BOT] 📍 [ROUTING] "Backend Software Engineer – University Graduate" @ ORG_175f350d
[2026-01-30T20:04:46.344Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:04:46.599Z] [BOT] ✅ Posted message: Backend Software Engineer – University Graduate @ ORG_175f350d in #🤖・ai-jobs
  ✅ Industry: Backend Software Engineer – University Graduate @ ORG_175f350d
[2026-01-30T20:04:46.599Z] [BOT] 💾 Added channel posting: Backend Software Engineer – University Graduate @ ORG_175f350d → category channel (1 total channels)
[2026-01-30T20:04:46.600Z] [BOT] 💾 BEFORE MERGE: 642 jobs in memory (cached)
[2026-01-30T20:04:46.612Z] [BOT] ✅ Loaded V2 database: 641 jobs
💾 DISK STATE: 641 jobs on disk
[2026-01-30T20:04:46.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=642
[2026-01-30T20:04:46.614Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 642 jobs (merged disk + memory)
[2026-01-30T20:04:46.615Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-30T20:04:46.657Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:51.159Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T20:04:51.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "a1d807130c32aeab"
⏭️  Skipping duplicate: JID_490b9e8b (posted within 7 days)
[2026-01-30T20:04:51.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "f2960aba76947ad5"
⏭️  Skipping duplicate: JID_e0a8e872 (posted within 7 days)
[2026-01-30T20:04:51.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "a602ab5679924f27"
⏭️  Skipping duplicate: JID_3ee89460 (posted within 7 days)
[2026-01-30T20:04:51.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_817db28e..." not found, but found as SHA256 "77acfa8ac77f9268"
[2026-01-30T20:04:51.161Z] [BOT] ⏭️  Skipping duplicate: JID_86b6b588-engineer_20173691-1 (posted within 7 days)
[2026-01-30T20:04:51.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2598835e..." not found, but found as SHA256 "256f69e4dcd45a96"
⏭️  Skipping duplicate: JID_b4bd9f8e-capital_one-JID_e0a63d19-_r229418-1 (posted within 7 days)
[2026-01-30T20:04:51.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "a6c4ab6df45bc6b2"
⏭️  Skipping duplicate: JID_944fc5fc (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "e85a0df011c2e576"
⏭️  Skipping duplicate: JID_334ea64d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "2e805bcc6f1d1618"
⏭️  Skipping duplicate: JID_47f128e5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "1a72ff756bd9b880"
⏭️  Skipping duplicate: JID_9219b453 (posted within 7 days)
[2026-01-30T20:04:51.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a688d4f..." not found, but found as SHA256 "7eddc2c9a30f7f6c"
⏭️  Skipping duplicate: JID_580649eb-cx_1-job-30513 (posted within 7 days)
[2026-01-30T20:04:51.262Z] [BOT] ✅ Loaded pending queue: 2931 total (2278 pending, 50 enriched, 603 posted)
[2026-01-30T20:04:51.455Z] [BOT] ✅ Saved pending queue: 2931 total (2278 pending, 40 enriched, 613 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T20:04:51.455Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T20:04:51.537Z] [BOT] 📂 Loaded 10694 existing routing entries
[2026-01-30T20:04:51.672Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T20:04:51.672Z] [BOT] New entries: 10
   Total entries: 10704
   Timestamp: 2026-01-30T20:04:51.629Z
[2026-01-30T20:04:51.673Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 25
[2026-01-30T20:04:51.673Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 14
[2026-01-30T20:04:51.673Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-30T20:04:51.673Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T20:04:51.674Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 642 jobs in memory (cached)
[2026-01-30T20:04:51.688Z] [BOT] ✅ Loaded V2 database: 642 jobs
💾 DISK STATE: 642 jobs on disk
[2026-01-30T20:04:51.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=642
[2026-01-30T20:04:51.689Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:04:51.690Z] [BOT] 💾 AFTER MERGE: 642 jobs (merged disk + memory)
[2026-01-30T20:04:51.690Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-30T20:04:51.728Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:04:51.729Z] [BOT] ✅ Database saved successfully
[2026-01-30T20:04:53.754Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2714) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*