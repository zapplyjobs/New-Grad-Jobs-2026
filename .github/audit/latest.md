# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T19:25:55.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T19:25:19.360Z] ========================================
[2026-01-29T19:25:19.362Z] Discord Bot Execution Log
[2026-01-29T19:25:19.362Z] Environment: GitHub Actions
[2026-01-29T19:25:19.362Z] Node Version: v20.20.0
[2026-01-29T19:25:19.362Z] ========================================
[2026-01-29T19:25:19.362Z] Environment Variables Check:
[2026-01-29T19:25:19.362Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T19:25:19.362Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.362Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T19:25:19.363Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T19:25:19.363Z] 
Multi-Channel Configuration:
[2026-01-29T19:25:19.363Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T19:25:19.363Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T19:25:19.364Z] 
Data Files Check:
[2026-01-29T19:25:19.364Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59286 bytes)
[2026-01-29T19:25:19.367Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 285006 bytes)
[2026-01-29T19:25:19.367Z] 
========================================
[2026-01-29T19:25:19.367Z] Starting Enhanced Discord Bot...
[2026-01-29T19:25:19.367Z] ========================================
[2026-01-29T19:25:19.907Z] [BOT] ✅ Loaded V2 database: 59 jobs
[2026-01-29T19:25:20.687Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T19:25:20.687Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T19:25:20.687Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T19:25:20.806Z] [BOT] ✅ Loaded pending queue: 2882 total (2802 pending, 50 enriched, 30 posted)
[2026-01-29T19:25:20.807Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T19:25:20.807Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer – Cybersecurity RL at anthropic
[2026-01-29T19:25:20.811Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T19:25:20.812Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
[2026-01-29T19:25:20.812Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
[2026-01-29T19:25:20.812Z] [BOT] 🚫 Skipping blacklisted job: Staff - Data Scientist at Walmart
[2026-01-29T19:25:20.812Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
[2026-01-29T19:25:20.934Z] [BOT] ✅ Loaded pending queue: 2882 total (2802 pending, 50 enriched, 30 posted)
[2026-01-29T19:25:21.115Z] [BOT] ✅ Saved pending queue: 2875 total (2802 pending, 43 enriched, 30 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-01-29T19:25:21.115Z] [BOT] 📋 After blacklist filter: 43 jobs (7 blacklisted)
📋 After data quality filter: 43 jobs (0 invalid)
[2026-01-29T19:25:21.116Z] [BOT] 📋 After multi-location grouping: 41 unique jobs to post
[2026-01-29T19:25:21.116Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Sales Recruiter (12-month contract) @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
[2026-01-29T19:25:21.117Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T19:25:21.119Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-29T19:25:21.120Z] [BOT] 📍 [ROUTING] "Research Engineer – Cybersecurity RL" @ anthropic
[2026-01-29T19:25:21.120Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T19:25:21.120Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T19:25:21.138Z] [BOT ERROR] (node:2846) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T19:25:21.416Z] [BOT] ✅ Posted message: Research Engineer – Cybersecurity RL @ anthropic in #🤖・ai-jobs
[2026-01-29T19:25:21.416Z] [BOT] ✅ Industry: Research Engineer – Cybersecurity RL @ anthropic
[2026-01-29T19:25:21.417Z] [BOT] 💾 Added channel posting: Research Engineer – Cybersecurity RL @ anthropic → category channel (1 total channels)
[2026-01-29T19:25:21.417Z] [BOT] 💾 BEFORE MERGE: 60 jobs in memory (cached)
[2026-01-29T19:25:21.419Z] [BOT] ✅ Loaded V2 database: 59 jobs
[2026-01-29T19:25:21.420Z] [BOT] 💾 DISK STATE: 59 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=60
[2026-01-29T19:25:21.420Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:21.420Z] [BOT] 💾 AFTER MERGE: 60 jobs (merged disk + memory)
[2026-01-29T19:25:21.420Z] [BOT] ✅ No jobs to archive (all 60 jobs within 7-day window)
[2026-01-29T19:25:21.429Z] [BOT] 💾 Saved posted_jobs.json: 60 active jobs
[2026-01-29T19:25:21.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:22.932Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
[2026-01-29T19:25:22.932Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T19:25:23.152Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
[2026-01-29T19:25:23.152Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → category channel (1 total channels)
[2026-01-29T19:25:23.152Z] [BOT] 💾 BEFORE MERGE: 61 jobs in memory (cached)
[2026-01-29T19:25:23.154Z] [BOT] ✅ Loaded V2 database: 60 jobs
[2026-01-29T19:25:23.154Z] [BOT] 💾 DISK STATE: 60 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=61
[2026-01-29T19:25:23.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:23.154Z] [BOT] 💾 AFTER MERGE: 61 jobs (merged disk + memory)
✅ No jobs to archive (all 61 jobs within 7-day window)
[2026-01-29T19:25:23.158Z] [BOT] 💾 Saved posted_jobs.json: 61 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:24.835Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🗽・JID_98d4f0de
[2026-01-29T19:25:24.836Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → location channel (2 total channels)
💾 BEFORE MERGE: 61 jobs in memory (cached)
[2026-01-29T19:25:24.837Z] [BOT] ✅ Loaded V2 database: 61 jobs
[2026-01-29T19:25:24.837Z] [BOT] 💾 DISK STATE: 61 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=61
[2026-01-29T19:25:24.837Z] [BOT] 🔀 Deep merged: Associate C++ Engineer @ ORG_0f5d983d Trading Company (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:25:24.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 61 jobs (merged disk + memory)
[2026-01-29T19:25:24.838Z] [BOT] ✅ No jobs to archive (all 61 jobs within 7-day window)
[2026-01-29T19:25:24.841Z] [BOT] 💾 Saved posted_jobs.json: 61 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:26.343Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_39417f32 Allen
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T19:25:26.343Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T19:25:26.578Z] [BOT] ✅ Posted message: Data Scientist @ ORG_39417f32 Allen in #🤖・ai-jobs
[2026-01-29T19:25:26.578Z] [BOT] ✅ Industry: Data Scientist @ ORG_39417f32 Allen
💾 Added channel posting: Data Scientist @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-29T19:25:26.578Z] [BOT] 💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-29T19:25:26.580Z] [BOT] ✅ Loaded V2 database: 61 jobs
💾 DISK STATE: 61 jobs on disk
[2026-01-29T19:25:26.580Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-29T19:25:26.580Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-29T19:25:26.580Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-29T19:25:26.584Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-29T19:25:26.584Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:28.085Z] [BOT] 📍 [ROUTING] "Engineer 1 - Software - FPGA Timing and Power" @ ORG_230fe79b Technology
[2026-01-29T19:25:28.085Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T19:25:28.474Z] [BOT] ✅ Posted message: Engineer 1 - Software - FPGA Timing and Power @ ORG_230fe79b Technology in #🤖・ai-jobs
  ✅ Industry: Engineer 1 - Software - FPGA Timing and Power @ ORG_230fe79b Technology
[2026-01-29T19:25:28.474Z] [BOT] 💾 Added channel posting: Engineer 1 - Software - FPGA Timing and Power @ ORG_230fe79b Technology → category channel (1 total channels)
💾 BEFORE MERGE: 63 jobs in memory (cached)
[2026-01-29T19:25:28.476Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
[2026-01-29T19:25:28.476Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=63
[2026-01-29T19:25:28.476Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 63 jobs (merged disk + memory)
[2026-01-29T19:25:28.477Z] [BOT] ✅ No jobs to archive (all 63 jobs within 7-day window)
[2026-01-29T19:25:28.482Z] [BOT] 💾 Saved posted_jobs.json: 63 active jobs
[2026-01-29T19:25:28.483Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:29.985Z] [BOT] 📍 [ROUTING] "Industrial Systems Engineer" @ ORG_b07295c1 Semiconductors
[2026-01-29T19:25:29.985Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T19:25:30.168Z] [BOT] ✅ Posted message: Industrial Systems Engineer @ ORG_b07295c1 Semiconductors in #🤖・ai-jobs
[2026-01-29T19:25:30.169Z] [BOT] ✅ Industry: Industrial Systems Engineer @ ORG_b07295c1 Semiconductors
[2026-01-29T19:25:30.169Z] [BOT] 💾 Added channel posting: Industrial Systems Engineer @ ORG_b07295c1 Semiconductors → category channel (1 total channels)
💾 BEFORE MERGE: 64 jobs in memory (cached)
[2026-01-29T19:25:30.170Z] [BOT] ✅ Loaded V2 database: 63 jobs
[2026-01-29T19:25:30.171Z] [BOT] 💾 DISK STATE: 63 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=64
[2026-01-29T19:25:30.172Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:30.172Z] [BOT] 💾 AFTER MERGE: 64 jobs (merged disk + memory)
[2026-01-29T19:25:30.172Z] [BOT] ✅ No jobs to archive (all 64 jobs within 7-day window)
[2026-01-29T19:25:30.176Z] [BOT] 💾 Saved posted_jobs.json: 64 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:34.680Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-29T19:25:34.680Z] [BOT] 📍 [ROUTING] "Data Visualization Specialist 1" @ ORG_0784470e
[2026-01-29T19:25:34.680Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:25:34.960Z] [BOT] ✅ Posted message: Data Visualization Specialist 1 @ ORG_0784470e in #💻・tech-jobs
[2026-01-29T19:25:34.961Z] [BOT] ✅ Industry: Data Visualization Specialist 1 @ ORG_0784470e
💾 Added channel posting: Data Visualization Specialist 1 @ ORG_0784470e → category channel (1 total channels)
💾 BEFORE MERGE: 65 jobs in memory (cached)
[2026-01-29T19:25:34.962Z] [BOT] ✅ Loaded V2 database: 64 jobs
[2026-01-29T19:25:34.962Z] [BOT] 💾 DISK STATE: 64 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=65
[2026-01-29T19:25:34.963Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:34.963Z] [BOT] 💾 AFTER MERGE: 65 jobs (merged disk + memory)
✅ No jobs to archive (all 65 jobs within 7-day window)
[2026-01-29T19:25:34.968Z] [BOT] 💾 Saved posted_jobs.json: 65 active jobs
[2026-01-29T19:25:34.968Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:36.470Z] [BOT] 📍 [ROUTING] "Regional Application Engineer" @ ORG_e8760198 Vernova
[2026-01-29T19:25:36.470Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:25:36.790Z] [BOT] ✅ Posted message: Regional Application Engineer @ ORG_e8760198 Vernova in #💻・tech-jobs
[2026-01-29T19:25:36.790Z] [BOT] ✅ Industry: Regional Application Engineer @ ORG_e8760198 Vernova
💾 Added channel posting: Regional Application Engineer @ ORG_e8760198 Vernova → category channel (1 total channels)
💾 BEFORE MERGE: 66 jobs in memory (cached)
[2026-01-29T19:25:36.793Z] [BOT] ✅ Loaded V2 database: 65 jobs
[2026-01-29T19:25:36.793Z] [BOT] 💾 DISK STATE: 65 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=66
[2026-01-29T19:25:36.793Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:36.794Z] [BOT] 💾 AFTER MERGE: 66 jobs (merged disk + memory)
[2026-01-29T19:25:36.794Z] [BOT] ✅ No jobs to archive (all 66 jobs within 7-day window)
[2026-01-29T19:25:36.798Z] [BOT] 💾 Saved posted_jobs.json: 66 active jobs
[2026-01-29T19:25:36.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:38.301Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Linux/Python/Bash/HTML/Cypress/Pytest/Gitlab" @ ORG_530743c3
[2026-01-29T19:25:38.301Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:25:38.550Z] [BOT] ✅ Posted message: Software Engineer 1 - Linux/Python/Bash/HTML/Cypress/Pytest/Gitlab @ ORG_530743c3 in #💻・tech-jobs
[2026-01-29T19:25:38.550Z] [BOT] ✅ Industry: Software Engineer 1 - Linux/Python/Bash/HTML/Cypress/Pytest/Gitlab @ ORG_530743c3
💾 Added channel posting: Software Engineer 1 - Linux/Python/Bash/HTML/Cypress/Pytest/Gitlab @ ORG_530743c3 → category channel (1 total channels)
💾 BEFORE MERGE: 67 jobs in memory (cached)
[2026-01-29T19:25:38.552Z] [BOT] ✅ Loaded V2 database: 66 jobs
[2026-01-29T19:25:38.552Z] [BOT] 💾 DISK STATE: 66 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=67
[2026-01-29T19:25:38.552Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:38.552Z] [BOT] 💾 AFTER MERGE: 67 jobs (merged disk + memory)
[2026-01-29T19:25:38.553Z] [BOT] ✅ No jobs to archive (all 67 jobs within 7-day window)
[2026-01-29T19:25:38.558Z] [BOT] 💾 Saved posted_jobs.json: 67 active jobs
[2026-01-29T19:25:38.558Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:40.060Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_3228d821
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:25:40.324Z] [BOT] ✅ Posted message: Software Engineer @ ORG_3228d821 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_3228d821
[2026-01-29T19:25:40.324Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_3228d821 → category channel (1 total channels)
💾 BEFORE MERGE: 68 jobs in memory (cached)
[2026-01-29T19:25:40.326Z] [BOT] ✅ Loaded V2 database: 67 jobs
💾 DISK STATE: 67 jobs on disk
[2026-01-29T19:25:40.326Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=68
[2026-01-29T19:25:40.327Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 68 jobs (merged disk + memory)
[2026-01-29T19:25:40.327Z] [BOT] ✅ No jobs to archive (all 68 jobs within 7-day window)
[2026-01-29T19:25:40.332Z] [BOT] 💾 Saved posted_jobs.json: 68 active jobs
[2026-01-29T19:25:40.332Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:44.834Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T19:25:44.834Z] [BOT] 📍 [ROUTING] "GTM Data Scientist" @ ORG_05947b7b
[2026-01-29T19:25:44.834Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T19:25:45.174Z] [BOT] ✅ Posted message: GTM Data Scientist @ ORG_05947b7b in #📊・JID_fb739488
  ✅ Industry: GTM Data Scientist @ ORG_05947b7b
[2026-01-29T19:25:45.174Z] [BOT] 💾 Added channel posting: GTM Data Scientist @ ORG_05947b7b → category channel (1 total channels)
💾 BEFORE MERGE: 69 jobs in memory (cached)
[2026-01-29T19:25:45.176Z] [BOT] ✅ Loaded V2 database: 68 jobs
💾 DISK STATE: 68 jobs on disk
[2026-01-29T19:25:45.176Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=69
[2026-01-29T19:25:45.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 69 jobs (merged disk + memory)
[2026-01-29T19:25:45.177Z] [BOT] ✅ No jobs to archive (all 69 jobs within 7-day window)
[2026-01-29T19:25:45.182Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2026-01-29T19:25:45.182Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:46.889Z] [BOT] ✅ Posted message: GTM Data Scientist @ ORG_05947b7b in #🗽・JID_98d4f0de
[2026-01-29T19:25:46.889Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: GTM Data Scientist @ ORG_05947b7b → location channel (2 total channels)
💾 BEFORE MERGE: 69 jobs in memory (cached)
[2026-01-29T19:25:46.891Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2026-01-29T19:25:46.891Z] [BOT] 💾 DISK STATE: 69 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=69
[2026-01-29T19:25:46.891Z] [BOT] 🔀 Deep merged: GTM Data Scientist @ ORG_05947b7b (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:25:46.892Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 69 jobs (merged disk + memory)
✅ No jobs to archive (all 69 jobs within 7-day window)
[2026-01-29T19:25:46.897Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:25:51.399Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T19:25:51.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9c30bc6e9763974a"
[2026-01-29T19:25:51.400Z] [BOT] ⏭️  Skipping duplicate: JID_3008de4b (posted within 7 days)
[2026-01-29T19:25:51.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2fe0682a..." not found, but found as SHA256 "12be5682372a2b44"
⏭️  Skipping duplicate: JID_a777069d-i_r261445-1 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_457168e7-only_con..." not found, but found as SHA256 "a0e3e5aae5196ee0"
⏭️  Skipping duplicate: JID_457168e7-only_confidential_executive_recruiting-JID_f18e5951-americas_r5031013-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a079a374..." not found, but found as SHA256 "d5429323d65230f9"
⏭️  Skipping duplicate: JID_f6e75282 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ec354861..." not found, but found as SHA256 "cc154ddd68f9dccc"
⏭️  Skipping duplicate: JID_b16ed256 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af14699c..." not found, but found as SHA256 "d008ea5f275c1200"
⏭️  Skipping duplicate: JID_9077ab25-engineer_r109950 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-m..." not found, but found as SHA256 "33dd41c7345b35e1"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_21ad12a5-scientist_r0233012 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9fc11bf..." not found, but found as SHA256 "dd9177af344c32e9"
⏭️  Skipping duplicate: JID_30fc5f8c-_r1912-25 (posted within 7 days)
[2026-01-29T19:25:51.401Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_01f79040-..." not found, but found as SHA256 "ac953bcf97efac55"
⏭️  Skipping duplicate: JID_c143f4ea-engineer_r-10059890 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9fd229cd-..." not found, but found as SHA256 "23e16cb3d9b587ef"
⏭️  Skipping duplicate: JID_7e1efafe (posted within 7 days)
[2026-01-29T19:25:51.533Z] [BOT] ✅ Loaded pending queue: 2875 total (2802 pending, 43 enriched, 30 posted)
[2026-01-29T19:25:51.700Z] [BOT] ✅ Saved pending queue: 2875 total (2802 pending, 33 enriched, 40 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T19:25:51.700Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T19:25:51.801Z] [BOT] 📂 Loaded 10121 existing routing entries
[2026-01-29T19:25:51.906Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T19:25:51.907Z] [BOT] Total entries: 10131
   Timestamp: 2026-01-29T19:25:51.864Z
[2026-01-29T19:25:51.907Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T19:25:51.907Z] [BOT] Total attempts: 19
   Successful: 12
   Failed: 0
   Skipped: 7
[2026-01-29T19:25:51.907Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T19:25:51.907Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-29T19:25:51.908Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-29T19:25:51.908Z] [BOT] [STATS] Channel stats saved
[2026-01-29T19:25:51.908Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 69 jobs in memory (cached)
[2026-01-29T19:25:51.909Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2026-01-29T19:25:51.909Z] [BOT] 💾 DISK STATE: 69 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=69
[2026-01-29T19:25:51.910Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:25:51.910Z] [BOT] 💾 AFTER MERGE: 69 jobs (merged disk + memory)
✅ No jobs to archive (all 69 jobs within 7-day window)
[2026-01-29T19:25:51.915Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2026-01-29T19:25:51.915Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T19:25:53.943Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2846) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*