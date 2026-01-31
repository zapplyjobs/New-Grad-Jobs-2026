# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T07:51:14.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T07:50:36.397Z] ========================================
[2026-01-31T07:50:36.399Z] Discord Bot Execution Log
[2026-01-31T07:50:36.399Z] Environment: GitHub Actions
[2026-01-31T07:50:36.399Z] Node Version: v20.20.0
[2026-01-31T07:50:36.399Z] ========================================
[2026-01-31T07:50:36.399Z] Environment Variables Check:
[2026-01-31T07:50:36.399Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T07:50:36.399Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.399Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T07:50:36.399Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T07:50:36.400Z] 
Multi-Channel Configuration:
[2026-01-31T07:50:36.400Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T07:50:36.400Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T07:50:36.400Z] 
Data Files Check:
[2026-01-31T07:50:36.401Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T07:50:36.432Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6028008 bytes)
[2026-01-31T07:50:36.432Z] 
========================================
[2026-01-31T07:50:36.432Z] Starting Enhanced Discord Bot...
[2026-01-31T07:50:36.432Z] ========================================
[2026-01-31T07:50:36.993Z] [BOT] ✅ Loaded V2 database: 938 jobs
[2026-01-31T07:50:38.030Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T07:50:38.030Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T07:50:38.031Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T07:50:38.146Z] [BOT] ✅ Loaded pending queue: 2959 total (2000 pending, 50 enriched, 909 posted)
[2026-01-31T07:50:38.147Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T07:50:38.147Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:50:38.148Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T07:50:38.148Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:50:38.148Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T07:50:38.148Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T07:50:38.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T07:50:38.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T07:50:38.149Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T07:50:38.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T07:50:38.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T07:50:38.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T07:50:38.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T07:50:38.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T07:50:38.151Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T07:50:38.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T07:50:38.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T07:50:38.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T07:50:38.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T07:50:38.160Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T07:50:38.160Z] [BOT] 🚫 Skipping blacklisted job: Legal Operations Lead, CLM & Technology at figma
[2026-01-31T07:50:38.160Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Music Label Deal Analysis - FP&A at spotify
🚫 Skipping blacklisted job: Senior Technical Revenue Manager at figma
[2026-01-31T07:50:38.160Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Walmart
[2026-01-31T07:50:38.287Z] [BOT] ✅ Loaded pending queue: 2959 total (2000 pending, 50 enriched, 909 posted)
[2026-01-31T07:50:38.467Z] [BOT] ✅ Saved pending queue: 2955 total (2000 pending, 46 enriched, 909 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-31T07:50:38.467Z] [BOT] 📋 After blacklist filter: 32 jobs (4 blacklisted)
[2026-01-31T07:50:38.467Z] [BOT] 📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-31T07:50:38.468Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T07:50:38.468Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T07:50:38.468Z] [BOT] - Helix Data Creator @ Figure: spartanburg, la
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T07:50:38.471Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T07:50:38.473Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-31T07:50:38.473Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:50:38.489Z] [BOT ERROR] (node:3850) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T07:50:38.851Z] [BOT] ✅ Posted message: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-31T07:50:38.851Z] [BOT] ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-31T07:50:38.852Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T07:50:38.852Z] [BOT] 💾 BEFORE MERGE: 939 jobs in memory (cached)
[2026-01-31T07:50:38.870Z] [BOT] ✅ Loaded V2 database: 938 jobs
💾 DISK STATE: 938 jobs on disk
[2026-01-31T07:50:38.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=939
[2026-01-31T07:50:38.873Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:38.873Z] [BOT] 💾 AFTER MERGE: 939 jobs (merged disk + memory)
[2026-01-31T07:50:38.874Z] [BOT] ✅ No jobs to archive (all 939 jobs within 7-day window)
[2026-01-31T07:50:38.943Z] [BOT] 💾 Saved posted_jobs.json: 939 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:40.446Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_c7bac469
[2026-01-31T07:50:40.446Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:50:40.657Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_c7bac469 in #🤖・ai-jobs
[2026-01-31T07:50:40.657Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_c7bac469
[2026-01-31T07:50:40.658Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-31T07:50:40.658Z] [BOT] 💾 BEFORE MERGE: 940 jobs in memory (cached)
[2026-01-31T07:50:40.677Z] [BOT] ✅ Loaded V2 database: 939 jobs
[2026-01-31T07:50:40.677Z] [BOT] 💾 DISK STATE: 939 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=940
[2026-01-31T07:50:40.679Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:40.679Z] [BOT] 💾 AFTER MERGE: 940 jobs (merged disk + memory)
[2026-01-31T07:50:40.680Z] [BOT] ✅ No jobs to archive (all 940 jobs within 7-day window)
[2026-01-31T07:50:40.738Z] [BOT] 💾 Saved posted_jobs.json: 940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:42.240Z] [BOT] 📍 [ROUTING] "GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering" @ ORG_36b77757
   Category: AI (matched: "machine learning")
[2026-01-31T07:50:42.240Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:50:42.410Z] [BOT] ✅ Posted message: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 in #🤖・ai-jobs
[2026-01-31T07:50:42.410Z] [BOT] ✅ Industry: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757
[2026-01-31T07:50:42.410Z] [BOT] 💾 Added channel posting: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 → category channel (1 total channels)
[2026-01-31T07:50:42.410Z] [BOT] 💾 BEFORE MERGE: 941 jobs in memory (cached)
[2026-01-31T07:50:42.430Z] [BOT] ✅ Loaded V2 database: 940 jobs
💾 DISK STATE: 940 jobs on disk
[2026-01-31T07:50:42.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=941
[2026-01-31T07:50:42.432Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:42.432Z] [BOT] 💾 AFTER MERGE: 941 jobs (merged disk + memory)
[2026-01-31T07:50:42.433Z] [BOT] ✅ No jobs to archive (all 941 jobs within 7-day window)
[2026-01-31T07:50:42.492Z] [BOT] 💾 Saved posted_jobs.json: 941 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:43.994Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
[2026-01-31T07:50:43.994Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:50:44.201Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
[2026-01-31T07:50:44.201Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-31T07:50:44.202Z] [BOT] 💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → category channel (1 total channels)
[2026-01-31T07:50:44.202Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory (cached)
[2026-01-31T07:50:44.220Z] [BOT] ✅ Loaded V2 database: 941 jobs
💾 DISK STATE: 941 jobs on disk
[2026-01-31T07:50:44.220Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=942
[2026-01-31T07:50:44.223Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:44.223Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-31T07:50:44.223Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-31T07:50:44.288Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-31T07:50:44.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:46.001Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🗽・JID_98d4f0de
[2026-01-31T07:50:46.001Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T07:50:46.001Z] [BOT] 💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → location channel (2 total channels)
💾 BEFORE MERGE: 942 jobs in memory (cached)
[2026-01-31T07:50:46.025Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-31T07:50:46.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=942
[2026-01-31T07:50:46.028Z] [BOT] 🔀 Deep merged: Associate C++ Engineer @ ORG_0f5d983d Trading Company (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T07:50:46.028Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-31T07:50:46.028Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-31T07:50:46.084Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:50.585Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T07:50:50.586Z] [BOT] 📍 [ROUTING] "Software Engineer 2 in Test" @ ORG_56d3dff7
   Category: TECH (matched: "software")
[2026-01-31T07:50:50.586Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:50:51.044Z] [BOT] ✅ Posted message: Software Engineer 2 in Test @ ORG_56d3dff7 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 in Test @ ORG_56d3dff7
[2026-01-31T07:50:51.045Z] [BOT] 💾 Added channel posting: Software Engineer 2 in Test @ ORG_56d3dff7 → category channel (1 total channels)
[2026-01-31T07:50:51.045Z] [BOT] 💾 BEFORE MERGE: 943 jobs in memory (cached)
[2026-01-31T07:50:51.064Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-31T07:50:51.064Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=943
[2026-01-31T07:50:51.066Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:51.066Z] [BOT] 💾 AFTER MERGE: 943 jobs (merged disk + memory)
[2026-01-31T07:50:51.066Z] [BOT] ✅ No jobs to archive (all 943 jobs within 7-day window)
[2026-01-31T07:50:51.123Z] [BOT] 💾 Saved posted_jobs.json: 943 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:52.626Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_086eec07 Mobile Telematics
[2026-01-31T07:50:52.626Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:50:52.899Z] [BOT] ✅ Posted message: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #💻・tech-jobs
[2026-01-31T07:50:52.899Z] [BOT] ✅ Industry: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics
[2026-01-31T07:50:52.900Z] [BOT] 💾 Added channel posting: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics → category channel (1 total channels)
💾 BEFORE MERGE: 944 jobs in memory (cached)
[2026-01-31T07:50:52.919Z] [BOT] ✅ Loaded V2 database: 943 jobs
💾 DISK STATE: 943 jobs on disk
[2026-01-31T07:50:52.919Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=944
[2026-01-31T07:50:52.921Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:52.921Z] [BOT] 💾 AFTER MERGE: 944 jobs (merged disk + memory)
[2026-01-31T07:50:52.922Z] [BOT] ✅ No jobs to archive (all 944 jobs within 7-day window)
[2026-01-31T07:50:52.987Z] [BOT] 💾 Saved posted_jobs.json: 944 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:54.490Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2026-01-31T07:50:54.490Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:50:54.744Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-31T07:50:54.745Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → category channel (1 total channels)
[2026-01-31T07:50:54.745Z] [BOT] 💾 BEFORE MERGE: 945 jobs in memory (cached)
[2026-01-31T07:50:54.762Z] [BOT] ✅ Loaded V2 database: 944 jobs
💾 DISK STATE: 944 jobs on disk
[2026-01-31T07:50:54.763Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=945
[2026-01-31T07:50:54.765Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:50:54.765Z] [BOT] 💾 AFTER MERGE: 945 jobs (merged disk + memory)
[2026-01-31T07:50:54.765Z] [BOT] ✅ No jobs to archive (all 945 jobs within 7-day window)
[2026-01-31T07:50:54.821Z] [BOT] 💾 Saved posted_jobs.json: 945 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:50:56.324Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Baseball Enterprise" @ ORG_2bc58fcc League Baseball
[2026-01-31T07:50:56.325Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:50:56.513Z] [BOT] ✅ Posted message: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2026-01-31T07:50:56.514Z] [BOT] ✅ Industry: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball
[2026-01-31T07:50:56.514Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
[2026-01-31T07:50:56.514Z] [BOT] 💾 BEFORE MERGE: 946 jobs in memory (cached)
[2026-01-31T07:50:56.532Z] [BOT] ✅ Loaded V2 database: 945 jobs
💾 DISK STATE: 945 jobs on disk
[2026-01-31T07:50:56.532Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=946
[2026-01-31T07:50:56.534Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 946 jobs (merged disk + memory)
[2026-01-31T07:50:56.535Z] [BOT] ✅ No jobs to archive (all 946 jobs within 7-day window)
[2026-01-31T07:50:56.592Z] [BOT] 💾 Saved posted_jobs.json: 946 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:51:01.094Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T07:51:01.095Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
   Category: FINANCE (matched: "tax")
[2026-01-31T07:51:01.095Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T07:51:01.312Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #💰・finance-jobs
  ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2026-01-31T07:51:01.312Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 → category channel (1 total channels)
[2026-01-31T07:51:01.312Z] [BOT] 💾 BEFORE MERGE: 947 jobs in memory (cached)
[2026-01-31T07:51:01.331Z] [BOT] ✅ Loaded V2 database: 946 jobs
💾 DISK STATE: 946 jobs on disk
[2026-01-31T07:51:01.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=947
[2026-01-31T07:51:01.333Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 947 jobs (merged disk + memory)
[2026-01-31T07:51:01.334Z] [BOT] ✅ No jobs to archive (all 947 jobs within 7-day window)
[2026-01-31T07:51:01.406Z] [BOT] 💾 Saved posted_jobs.json: 947 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:51:05.906Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T07:51:05.907Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_eead3632
[2026-01-31T07:51:05.907Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T07:51:06.131Z] [BOT] ✅ Posted message: Software Engineer @ ORG_eead3632 in #📊・JID_fb739488
[2026-01-31T07:51:06.131Z] [BOT] ✅ Industry: Software Engineer @ ORG_eead3632
[2026-01-31T07:51:06.131Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_eead3632 → category channel (1 total channels)
[2026-01-31T07:51:06.132Z] [BOT] 💾 BEFORE MERGE: 948 jobs in memory (cached)
[2026-01-31T07:51:06.149Z] [BOT] ✅ Loaded V2 database: 947 jobs
💾 DISK STATE: 947 jobs on disk
[2026-01-31T07:51:06.149Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=948
[2026-01-31T07:51:06.151Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 948 jobs (merged disk + memory)
[2026-01-31T07:51:06.152Z] [BOT] ✅ No jobs to archive (all 948 jobs within 7-day window)
[2026-01-31T07:51:06.218Z] [BOT] 💾 Saved posted_jobs.json: 948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:51:10.719Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T07:51:10.721Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "99b03dfb49d95b4e"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
[2026-01-31T07:51:10.721Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_761f2d30..." not found, but found as SHA256 "9a45b008d5dc394c"
[2026-01-31T07:51:10.721Z] [BOT] ⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2925 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_32e11206..." not found, but found as SHA256 "268df0a3931dcd0f"
⏭️  Skipping duplicate: JID_c7109edb-iv_r0014039 (posted within 7 days)
[2026-01-31T07:51:10.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cd838645..." not found, but found as SHA256 "a791c0d3c2b7fee9"
⏭️  Skipping duplicate: JID_1fe599b8 (posted within 7 days)
[2026-01-31T07:51:10.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfdafb45-..." not found, but found as SHA256 "b946d085f387c152"
[2026-01-31T07:51:10.722Z] [BOT] ⏭️  Skipping duplicate: JID_66fc9bc9 (posted within 7 days)
[2026-01-31T07:51:10.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4c36a9e..." not found, but found as SHA256 "f07e21f61f0a0d8e"
⏭️  Skipping duplicate: JID_a669bb44 (posted within 7 days)
[2026-01-31T07:51:10.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3265b69..." not found, but found as SHA256 "a8557082b0f31c75"
⏭️  Skipping duplicate: JID_19e9684f (posted within 7 days)
[2026-01-31T07:51:10.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ec45825-..." not found, but found as SHA256 "d772cea62ff6f4b0"
[2026-01-31T07:51:10.723Z] [BOT] ⏭️  Skipping duplicate: JID_0445e805 (posted within 7 days)
[2026-01-31T07:51:10.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d487342..." not found, but found as SHA256 "762e40606c908635"
⏭️  Skipping duplicate: JID_8475a274 (posted within 7 days)
[2026-01-31T07:51:10.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c2d21f32..." not found, but found as SHA256 "d5b1b92d7ae9f146"
⏭️  Skipping duplicate: JID_c2d21f32 (posted within 7 days)
[2026-01-31T07:51:10.844Z] [BOT] ✅ Loaded pending queue: 2955 total (2000 pending, 46 enriched, 909 posted)
[2026-01-31T07:51:11.038Z] [BOT] ✅ Saved pending queue: 2955 total (2000 pending, 36 enriched, 919 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T07:51:11.038Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T07:51:11.123Z] [BOT] 📂 Loaded 11000 existing routing entries
[2026-01-31T07:51:11.269Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T07:51:11.269Z] [BOT] New entries: 10
   Total entries: 11010
   Timestamp: 2026-01-31T07:51:11.225Z
[2026-01-31T07:51:11.270Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T07:51:11.270Z] [BOT] Total attempts: 29
   Successful: 11
   Failed: 0
   Skipped: 18
[2026-01-31T07:51:11.271Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-31T07:51:11.271Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #💰・finance-jobs: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-31T07:51:11.271Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 948 jobs in memory (cached)
[2026-01-31T07:51:11.291Z] [BOT] ✅ Loaded V2 database: 948 jobs
💾 DISK STATE: 948 jobs on disk
[2026-01-31T07:51:11.291Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=948
[2026-01-31T07:51:11.294Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:51:11.294Z] [BOT] 💾 AFTER MERGE: 948 jobs (merged disk + memory)
[2026-01-31T07:51:11.294Z] [BOT] ✅ No jobs to archive (all 948 jobs within 7-day window)
[2026-01-31T07:51:11.354Z] [BOT] 💾 Saved posted_jobs.json: 948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:51:11.354Z] [BOT] ✅ Database saved successfully
[2026-01-31T07:51:13.386Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3850) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*