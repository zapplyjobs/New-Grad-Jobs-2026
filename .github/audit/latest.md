# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T23:47:55.486Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T23:47:23.638Z] ========================================
[2026-01-30T23:47:23.640Z] Discord Bot Execution Log
[2026-01-30T23:47:23.640Z] Environment: GitHub Actions
[2026-01-30T23:47:23.640Z] Node Version: v20.20.0
[2026-01-30T23:47:23.640Z] ========================================
[2026-01-30T23:47:23.640Z] Environment Variables Check:
[2026-01-30T23:47:23.640Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T23:47:23.640Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.640Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T23:47:23.640Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T23:47:23.640Z] 
Multi-Channel Configuration:
[2026-01-30T23:47:23.640Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.640Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T23:47:23.641Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T23:47:23.641Z] 
Data Files Check:
[2026-01-30T23:47:23.642Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T23:47:23.670Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5141285 bytes)
[2026-01-30T23:47:23.670Z] 
========================================
[2026-01-30T23:47:23.670Z] Starting Enhanced Discord Bot...
[2026-01-30T23:47:23.670Z] ========================================
[2026-01-30T23:47:24.204Z] [BOT] ✅ Loaded V2 database: 778 jobs
[2026-01-30T23:47:25.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T23:47:25.146Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T23:47:25.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T23:47:25.259Z] [BOT] ✅ Loaded pending queue: 2944 total (2145 pending, 50 enriched, 749 posted)
[2026-01-30T23:47:25.260Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:47:25.260Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T23:47:25.261Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T23:47:25.261Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:47:25.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T23:47:25.261Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T23:47:25.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T23:47:25.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T23:47:25.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T23:47:25.262Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T23:47:25.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T23:47:25.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T23:47:25.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T23:47:25.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-30T23:47:25.263Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T23:47:25.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T23:47:25.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-30T23:47:25.264Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T23:47:25.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T23:47:25.271Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T23:47:25.271Z] [BOT] 🚫 Skipping blacklisted job: Corporate Tax Manager at gusto
[2026-01-30T23:47:25.272Z] [BOT] 🚫 Skipping blacklisted job: Process and Controls Financial Manager at gusto
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: Expansion Account Manager  at gusto
🚫 Skipping blacklisted job: Principal Software Engineer - Payroll at gusto
🚫 Skipping blacklisted job: Corporate Development & Partnerships Deal Lead at gusto
[2026-01-30T23:47:25.272Z] [BOT] 🚫 Skipping blacklisted job: Software Engineering Manager, Symmetry  at gusto
🚫 Skipping blacklisted job: Manager, Partner Product and Delivery at spotify
🚫 Skipping blacklisted job: Associate Product Manager Intern at coinbase
[2026-01-30T23:47:25.379Z] [BOT] ✅ Loaded pending queue: 2944 total (2145 pending, 50 enriched, 749 posted)
[2026-01-30T23:47:25.555Z] [BOT] ✅ Saved pending queue: 2935 total (2145 pending, 41 enriched, 749 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
📋 After blacklist filter: 27 jobs (9 blacklisted)
[2026-01-30T23:47:25.555Z] [BOT] 📋 After data quality filter: 27 jobs (0 invalid)
[2026-01-30T23:47:25.556Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-30T23:47:25.556Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T23:47:25.556Z] [BOT] - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: san bruno, waukegan, cambridge
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T23:47:25.560Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T23:47:25.560Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2026-01-30T23:47:25.560Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:25.578Z] [BOT ERROR] (node:2777) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T23:47:25.810Z] [BOT] ✅ Posted message: Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2026-01-30T23:47:25.811Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2026-01-30T23:47:25.811Z] [BOT] 💾 Added channel posting: Software Development Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-30T23:47:25.812Z] [BOT] 💾 BEFORE MERGE: 779 jobs in memory (cached)
[2026-01-30T23:47:25.830Z] [BOT] ✅ Loaded V2 database: 778 jobs
💾 DISK STATE: 778 jobs on disk
[2026-01-30T23:47:25.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=779
[2026-01-30T23:47:25.833Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:25.833Z] [BOT] 💾 AFTER MERGE: 779 jobs (merged disk + memory)
[2026-01-30T23:47:25.833Z] [BOT] ✅ No jobs to archive (all 779 jobs within 7-day window)
[2026-01-30T23:47:25.890Z] [BOT] 💾 Saved posted_jobs.json: 779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:27.393Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Video Agent" @ ORG_89070b6e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:27.603Z] [BOT] ✅ Posted message: Software Engineer - AI Video Agent @ ORG_89070b6e in #💻・tech-jobs
[2026-01-30T23:47:27.603Z] [BOT] ✅ Industry: Software Engineer - AI Video Agent @ ORG_89070b6e
[2026-01-30T23:47:27.603Z] [BOT] 💾 Added channel posting: Software Engineer - AI Video Agent @ ORG_89070b6e → category channel (1 total channels)
💾 BEFORE MERGE: 780 jobs in memory (cached)
[2026-01-30T23:47:27.618Z] [BOT] ✅ Loaded V2 database: 779 jobs
💾 DISK STATE: 779 jobs on disk
[2026-01-30T23:47:27.619Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=780
[2026-01-30T23:47:27.620Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 780 jobs (merged disk + memory)
[2026-01-30T23:47:27.621Z] [BOT] ✅ No jobs to archive (all 780 jobs within 7-day window)
[2026-01-30T23:47:27.671Z] [BOT] 💾 Saved posted_jobs.json: 780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:29.172Z] [BOT] 📍 [ROUTING] "Consulting Associate - Environmental Engineering - Geology / Scientist" @ ORG_d41a2092
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:29.333Z] [BOT] ✅ Posted message: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 in #💻・tech-jobs
  ✅ Industry: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092
[2026-01-30T23:47:29.333Z] [BOT] 💾 Added channel posting: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 → category channel (1 total channels)
[2026-01-30T23:47:29.333Z] [BOT] 💾 BEFORE MERGE: 781 jobs in memory (cached)
[2026-01-30T23:47:29.349Z] [BOT] ✅ Loaded V2 database: 780 jobs
💾 DISK STATE: 780 jobs on disk
[2026-01-30T23:47:29.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=781
[2026-01-30T23:47:29.351Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 781 jobs (merged disk + memory)
[2026-01-30T23:47:29.351Z] [BOT] ✅ No jobs to archive (all 781 jobs within 7-day window)
[2026-01-30T23:47:29.402Z] [BOT] 💾 Saved posted_jobs.json: 781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:30.903Z] [BOT] 📍 [ROUTING] "Technician" @ NV5 Global
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:31.154Z] [BOT] ✅ Posted message: Technician @ NV5 Global in #💻・tech-jobs
  ✅ Industry: Technician @ NV5 Global
[2026-01-30T23:47:31.154Z] [BOT] 💾 Added channel posting: Technician @ NV5 Global → category channel (1 total channels)
💾 BEFORE MERGE: 782 jobs in memory (cached)
[2026-01-30T23:47:31.170Z] [BOT] ✅ Loaded V2 database: 781 jobs
💾 DISK STATE: 781 jobs on disk
[2026-01-30T23:47:31.170Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=782
[2026-01-30T23:47:31.172Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:31.172Z] [BOT] 💾 AFTER MERGE: 782 jobs (merged disk + memory)
[2026-01-30T23:47:31.172Z] [BOT] ✅ No jobs to archive (all 782 jobs within 7-day window)
[2026-01-30T23:47:31.223Z] [BOT] 💾 Saved posted_jobs.json: 782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:32.724Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer" @ ORG_41a6741einghouse Electric Company
[2026-01-30T23:47:32.724Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:32.971Z] [BOT] ✅ Posted message: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
[2026-01-30T23:47:32.972Z] [BOT] ✅ Industry: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company
[2026-01-30T23:47:32.972Z] [BOT] 💾 Added channel posting: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
[2026-01-30T23:47:32.972Z] [BOT] 💾 BEFORE MERGE: 783 jobs in memory (cached)
[2026-01-30T23:47:32.987Z] [BOT] ✅ Loaded V2 database: 782 jobs
💾 DISK STATE: 782 jobs on disk
[2026-01-30T23:47:32.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=783
[2026-01-30T23:47:32.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:32.989Z] [BOT] 💾 AFTER MERGE: 783 jobs (merged disk + memory)
[2026-01-30T23:47:32.990Z] [BOT] ✅ No jobs to archive (all 783 jobs within 7-day window)
[2026-01-30T23:47:33.040Z] [BOT] 💾 Saved posted_jobs.json: 783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:34.542Z] [BOT] 📍 [ROUTING] "Retirement Account Executive" @ gusto
[2026-01-30T23:47:34.542Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:47:34.973Z] [BOT] ✅ Posted message: Retirement Account Executive @ gusto in #💻・tech-jobs
[2026-01-30T23:47:34.973Z] [BOT] ✅ Industry: Retirement Account Executive @ gusto
[2026-01-30T23:47:34.973Z] [BOT] 💾 Added channel posting: Retirement Account Executive @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 784 jobs in memory (cached)
[2026-01-30T23:47:35.003Z] [BOT] ✅ Loaded V2 database: 783 jobs
💾 DISK STATE: 783 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=784
[2026-01-30T23:47:35.006Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:35.006Z] [BOT] 💾 AFTER MERGE: 784 jobs (merged disk + memory)
[2026-01-30T23:47:35.007Z] [BOT] ✅ No jobs to archive (all 784 jobs within 7-day window)
[2026-01-30T23:47:35.068Z] [BOT] 💾 Saved posted_jobs.json: 784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:39.567Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T23:47:39.569Z] [BOT] 📍 [ROUTING] "Product Engineer - Multiple Levels Available" @ ORG_f5b4b427 Insurance Company
   Category: AI (matched: "AI/ML")
[2026-01-30T23:47:39.569Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:47:39.845Z] [BOT] ✅ Posted message: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company in #🤖・ai-jobs
  ✅ Industry: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company
[2026-01-30T23:47:39.846Z] [BOT] 💾 Added channel posting: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company → category channel (1 total channels)
💾 BEFORE MERGE: 785 jobs in memory (cached)
[2026-01-30T23:47:39.862Z] [BOT] ✅ Loaded V2 database: 784 jobs
💾 DISK STATE: 784 jobs on disk
[2026-01-30T23:47:39.862Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=785
[2026-01-30T23:47:39.864Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 785 jobs (merged disk + memory)
[2026-01-30T23:47:39.865Z] [BOT] ✅ No jobs to archive (all 785 jobs within 7-day window)
[2026-01-30T23:47:39.926Z] [BOT] 💾 Saved posted_jobs.json: 785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:41.429Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-30T23:47:41.429Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T23:47:41.629Z] [BOT] ✅ Posted message: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-30T23:47:41.629Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-30T23:47:41.630Z] [BOT] 💾 Added channel posting: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 → category channel (1 total channels)
💾 BEFORE MERGE: 786 jobs in memory (cached)
[2026-01-30T23:47:41.645Z] [BOT] ✅ Loaded V2 database: 785 jobs
💾 DISK STATE: 785 jobs on disk
[2026-01-30T23:47:41.645Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=786
[2026-01-30T23:47:41.647Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:41.647Z] [BOT] 💾 AFTER MERGE: 786 jobs (merged disk + memory)
[2026-01-30T23:47:41.648Z] [BOT] ✅ No jobs to archive (all 786 jobs within 7-day window)
[2026-01-30T23:47:41.697Z] [BOT] 💾 Saved posted_jobs.json: 786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:43.197Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starshield" @ ORG_afd623b1
[2026-01-30T23:47:43.197Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T23:47:43.429Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Full Stack Software Engineer - Starshield @ ORG_afd623b1
[2026-01-30T23:47:43.429Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Starshield @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-30T23:47:43.429Z] [BOT] 💾 BEFORE MERGE: 787 jobs in memory (cached)
[2026-01-30T23:47:43.445Z] [BOT] ✅ Loaded V2 database: 786 jobs
💾 DISK STATE: 786 jobs on disk
[2026-01-30T23:47:43.445Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=787
[2026-01-30T23:47:43.447Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:43.447Z] [BOT] 💾 AFTER MERGE: 787 jobs (merged disk + memory)
[2026-01-30T23:47:43.447Z] [BOT] ✅ No jobs to archive (all 787 jobs within 7-day window)
[2026-01-30T23:47:43.498Z] [BOT] 💾 Saved posted_jobs.json: 787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:45.000Z] [BOT] 📍 [ROUTING] "Research Scientist - Personalization" @ spotify
[2026-01-30T23:47:45.000Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-30T23:47:45.242Z] [BOT] ✅ Posted message: Research Scientist - Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Research Scientist - Personalization @ spotify
[2026-01-30T23:47:45.242Z] [BOT] 💾 Added channel posting: Research Scientist - Personalization @ spotify → category channel (1 total channels)
[2026-01-30T23:47:45.243Z] [BOT] 💾 BEFORE MERGE: 788 jobs in memory (cached)
[2026-01-30T23:47:45.258Z] [BOT] ✅ Loaded V2 database: 787 jobs
💾 DISK STATE: 787 jobs on disk
[2026-01-30T23:47:45.258Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=788
[2026-01-30T23:47:45.260Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:45.260Z] [BOT] 💾 AFTER MERGE: 788 jobs (merged disk + memory)
[2026-01-30T23:47:45.261Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2026-01-30T23:47:45.310Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:47.107Z] [BOT] ✅ Posted message: Research Scientist - Personalization @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:47:47.107Z] [BOT] 💾 Added channel posting: Research Scientist - Personalization @ spotify → location channel (2 total channels)
[2026-01-30T23:47:47.108Z] [BOT] 💾 BEFORE MERGE: 788 jobs in memory (cached)
[2026-01-30T23:47:47.123Z] [BOT] ✅ Loaded V2 database: 788 jobs
💾 DISK STATE: 788 jobs on disk
[2026-01-30T23:47:47.123Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=788
[2026-01-30T23:47:47.125Z] [BOT] 🔀 Deep merged: Research Scientist - Personalization @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 788 jobs (merged disk + memory)
[2026-01-30T23:47:47.126Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2026-01-30T23:47:47.176Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:51.679Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T23:47:51.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "9c1a78df330adbf3"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_44eaaa07-engineer_r161061 (posted within 7 days)
[2026-01-30T23:47:51.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8db7c3c4-..." not found, but found as SHA256 "b426af1259848cb0"
[2026-01-30T23:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-30T23:47:51.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32370a09-allstate_..." not found, but found as SHA256 "66ffd00878d5683d"
⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
[2026-01-30T23:47:51.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_74d11c99..." not found, but found as SHA256 "87caa3316d60ae95"
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d34981e4..." not found, but found as SHA256 "e345e47d30004e64"
⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
[2026-01-30T23:47:51.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "9a947e7de3bdd901"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e3eae60c..." not found, but found as SHA256 "843ffa9b8b6b70fe"
⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a93a4a10..." not found, but found as SHA256 "b85c975ee8849089"
⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
[2026-01-30T23:47:51.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60ee2693..." not found, but found as SHA256 "d5fd462a9297a0fb"
⏭️  Skipping duplicate: JID_5814f844 (posted within 7 days)
[2026-01-30T23:47:51.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a4594ea8..." not found, but found as SHA256 "e1181064f9ac26cb"
⏭️  Skipping duplicate: JID_2e16ccf1 (posted within 7 days)
[2026-01-30T23:47:51.789Z] [BOT] ✅ Loaded pending queue: 2935 total (2145 pending, 41 enriched, 749 posted)
[2026-01-30T23:47:51.968Z] [BOT] ✅ Saved pending queue: 2935 total (2145 pending, 31 enriched, 759 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T23:47:51.968Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T23:47:52.053Z] [BOT] 📂 Loaded 10840 existing routing entries
[2026-01-30T23:47:52.195Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T23:47:52.195Z] [BOT] New entries: 10
   Total entries: 10850
   Timestamp: 2026-01-30T23:47:52.136Z
[2026-01-30T23:47:52.196Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T23:47:52.196Z] [BOT] Total attempts: 34
   Successful: 11
   Failed: 0
   Skipped: 23
[2026-01-30T23:47:52.197Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
[2026-01-30T23:47:52.197Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T23:47:52.197Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 788 jobs in memory (cached)
[2026-01-30T23:47:52.214Z] [BOT] ✅ Loaded V2 database: 788 jobs
💾 DISK STATE: 788 jobs on disk
[2026-01-30T23:47:52.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=788
[2026-01-30T23:47:52.216Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:47:52.216Z] [BOT] 💾 AFTER MERGE: 788 jobs (merged disk + memory)
[2026-01-30T23:47:52.216Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2026-01-30T23:47:52.264Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:47:52.264Z] [BOT] ✅ Database saved successfully
[2026-01-30T23:47:54.297Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2777) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*