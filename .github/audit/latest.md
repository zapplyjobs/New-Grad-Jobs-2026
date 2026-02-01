# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T00:30:05.401Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T00:29:31.971Z] ========================================
[2026-02-01T00:29:31.973Z] Discord Bot Execution Log
[2026-02-01T00:29:31.973Z] Environment: GitHub Actions
[2026-02-01T00:29:31.973Z] Node Version: v20.20.0
[2026-02-01T00:29:31.973Z] ========================================
[2026-02-01T00:29:31.973Z] Environment Variables Check:
[2026-02-01T00:29:31.973Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T00:29:31.973Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.973Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T00:29:31.974Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T00:29:31.974Z] 
Multi-Channel Configuration:
[2026-02-01T00:29:31.974Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T00:29:31.974Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T00:29:31.975Z] 
Data Files Check:
[2026-02-01T00:29:31.975Z] .github/data/new_jobs.json: ✅ Exists (10 items, 67589 bytes)
[2026-02-01T00:29:32.022Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8718976 bytes)
[2026-02-01T00:29:32.022Z] 
========================================
[2026-02-01T00:29:32.022Z] Starting Enhanced Discord Bot...
[2026-02-01T00:29:32.022Z] ========================================
[2026-02-01T00:29:32.614Z] [BOT] ✅ Loaded V2 database: 1547 jobs
[2026-02-01T00:29:33.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T00:29:33.032Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T00:29:33.032Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T00:29:33.151Z] [BOT] ✅ Loaded pending queue: 2947 total (1360 pending, 50 enriched, 1537 posted)
[2026-02-01T00:29:33.151Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T00:29:33.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T00:29:33.153Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T00:29:33.153Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T00:29:33.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T00:29:33.153Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T00:29:33.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T00:29:33.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T00:29:33.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T00:29:33.155Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T00:29:33.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T00:29:33.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T00:29:33.155Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T00:29:33.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T00:29:33.156Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T00:29:33.168Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T00:29:33.169Z] [BOT] 🚫 Skipping blacklisted job: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation at Lawrence Berkeley National Laboratory
[2026-02-01T00:29:33.279Z] [BOT] ✅ Loaded pending queue: 2947 total (1360 pending, 50 enriched, 1537 posted)
[2026-02-01T00:29:33.472Z] [BOT] ✅ Saved pending queue: 2946 total (1360 pending, 49 enriched, 1537 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T00:29:33.472Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T00:29:33.473Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T00:29:33.473Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T00:29:33.477Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-02-01T00:29:33.478Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads" @ ORG_d0ca1d93 Systems
[2026-02-01T00:29:33.478Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T00:29:33.496Z] [BOT ERROR] (node:2920) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T00:29:33.830Z] [BOT] ✅ Posted message: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems
[2026-02-01T00:29:33.831Z] [BOT] 💾 Added channel posting: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-02-01T00:29:33.831Z] [BOT] 💾 BEFORE MERGE: 1548 jobs in memory (cached)
[2026-02-01T00:29:33.874Z] [BOT] ✅ Loaded V2 database: 1547 jobs
💾 DISK STATE: 1547 jobs on disk
[2026-02-01T00:29:33.875Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1548
[2026-02-01T00:29:33.878Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:33.879Z] [BOT] 💾 AFTER MERGE: 1548 jobs (merged disk + memory)
[2026-02-01T00:29:33.880Z] [BOT] ✅ No jobs to archive (all 1548 jobs within 7-day window)
[2026-02-01T00:29:33.984Z] [BOT] 💾 Saved posted_jobs.json: 1548 active jobs
[2026-02-01T00:29:33.984Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:35.486Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2026 Grads" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T00:29:35.486Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T00:29:35.807Z] [BOT] ✅ Posted message: Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
[2026-02-01T00:29:35.808Z] [BOT] ✅ Industry: Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems
[2026-02-01T00:29:35.808Z] [BOT] 💾 Added channel posting: Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-02-01T00:29:35.808Z] [BOT] 💾 BEFORE MERGE: 1549 jobs in memory (cached)
[2026-02-01T00:29:35.834Z] [BOT] ✅ Loaded V2 database: 1548 jobs
💾 DISK STATE: 1548 jobs on disk
[2026-02-01T00:29:35.841Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1549
[2026-02-01T00:29:35.844Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:35.845Z] [BOT] 💾 AFTER MERGE: 1549 jobs (merged disk + memory)
[2026-02-01T00:29:35.845Z] [BOT] ✅ No jobs to archive (all 1549 jobs within 7-day window)
[2026-02-01T00:29:35.931Z] [BOT] 💾 Saved posted_jobs.json: 1549 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:37.432Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-02-01T00:29:37.432Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T00:29:37.555Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-02-01T00:29:37.555Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-02-01T00:29:37.556Z] [BOT] 💾 BEFORE MERGE: 1550 jobs in memory (cached)
[2026-02-01T00:29:37.589Z] [BOT] ✅ Loaded V2 database: 1549 jobs
💾 DISK STATE: 1549 jobs on disk
[2026-02-01T00:29:37.589Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1550
[2026-02-01T00:29:37.592Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:37.592Z] [BOT] 💾 AFTER MERGE: 1550 jobs (merged disk + memory)
[2026-02-01T00:29:37.593Z] [BOT] ✅ No jobs to archive (all 1550 jobs within 7-day window)
[2026-02-01T00:29:37.684Z] [BOT] 💾 Saved posted_jobs.json: 1550 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:39.186Z] [BOT] 📍 [ROUTING] "Research Engineer - Cbrn" @ ORG_0418e87bind
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T00:29:39.186Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T00:29:39.410Z] [BOT] ✅ Posted message: Research Engineer - Cbrn @ ORG_0418e87bind in #🤖・ai-jobs
  ✅ Industry: Research Engineer - Cbrn @ ORG_0418e87bind
[2026-02-01T00:29:39.411Z] [BOT] 💾 Added channel posting: Research Engineer - Cbrn @ ORG_0418e87bind → category channel (1 total channels)
[2026-02-01T00:29:39.411Z] [BOT] 💾 BEFORE MERGE: 1551 jobs in memory (cached)
[2026-02-01T00:29:39.443Z] [BOT] ✅ Loaded V2 database: 1550 jobs
💾 DISK STATE: 1550 jobs on disk
[2026-02-01T00:29:39.443Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1551
[2026-02-01T00:29:39.447Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:39.447Z] [BOT] 💾 AFTER MERGE: 1551 jobs (merged disk + memory)
[2026-02-01T00:29:39.448Z] [BOT] ✅ No jobs to archive (all 1551 jobs within 7-day window)
[2026-02-01T00:29:39.550Z] [BOT] 💾 Saved posted_jobs.json: 1551 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:41.049Z] [BOT] 📍 [ROUTING] "AI Deployment Analyst" @ ORG_aa834d14 Health
   Category: AI (matched: "AI specialization")
[2026-02-01T00:29:41.049Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T00:29:41.280Z] [BOT] ✅ Posted message: AI Deployment Analyst @ ORG_aa834d14 Health in #🤖・ai-jobs
  ✅ Industry: AI Deployment Analyst @ ORG_aa834d14 Health
[2026-02-01T00:29:41.281Z] [BOT] 💾 Added channel posting: AI Deployment Analyst @ ORG_aa834d14 Health → category channel (1 total channels)
[2026-02-01T00:29:41.281Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-01T00:29:41.313Z] [BOT] ✅ Loaded V2 database: 1551 jobs
💾 DISK STATE: 1551 jobs on disk
[2026-02-01T00:29:41.313Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-01T00:29:41.316Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:41.316Z] [BOT] 💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-01T00:29:41.317Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-02-01T00:29:41.400Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:43.162Z] [BOT] ✅ Posted message: AI Deployment Analyst @ ORG_aa834d14 Health in #🗽・JID_98d4f0de
[2026-02-01T00:29:43.162Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T00:29:43.163Z] [BOT] 💾 Added channel posting: AI Deployment Analyst @ ORG_aa834d14 Health → location channel (2 total channels)
[2026-02-01T00:29:43.163Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-01T00:29:43.194Z] [BOT] ✅ Loaded V2 database: 1552 jobs
💾 DISK STATE: 1552 jobs on disk
[2026-02-01T00:29:43.194Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-01T00:29:43.197Z] [BOT] 🔀 Deep merged: AI Deployment Analyst @ ORG_aa834d14 Health (disk: 1 channels → merged: 2 channels)
[2026-02-01T00:29:43.197Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-01T00:29:43.198Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-02-01T00:29:43.282Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:47.783Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T00:29:47.784Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ ORG_d930a4d9
   Category: TECH (default)
[2026-02-01T00:29:47.784Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:29:48.080Z] [BOT] ✅ Posted message: Technical Consultant @ ORG_d930a4d9 in #💻・tech-jobs
  ✅ Industry: Technical Consultant @ ORG_d930a4d9
[2026-02-01T00:29:48.080Z] [BOT] 💾 Added channel posting: Technical Consultant @ ORG_d930a4d9 → category channel (1 total channels)
[2026-02-01T00:29:48.081Z] [BOT] 💾 BEFORE MERGE: 1553 jobs in memory (cached)
[2026-02-01T00:29:48.114Z] [BOT] ✅ Loaded V2 database: 1552 jobs
💾 DISK STATE: 1552 jobs on disk
[2026-02-01T00:29:48.114Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1553
[2026-02-01T00:29:48.117Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:48.118Z] [BOT] 💾 AFTER MERGE: 1553 jobs (merged disk + memory)
[2026-02-01T00:29:48.118Z] [BOT] ✅ No jobs to archive (all 1553 jobs within 7-day window)
[2026-02-01T00:29:48.210Z] [BOT] 💾 Saved posted_jobs.json: 1553 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:49.711Z] [BOT] 📍 [ROUTING] "Software Engineer 1 SAS Programmer" @ ORG_b93825c5 Bank
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:29:49.893Z] [BOT] ✅ Posted message: Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank
[2026-02-01T00:29:49.894Z] [BOT] 💾 Added channel posting: Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank → category channel (1 total channels)
[2026-02-01T00:29:49.894Z] [BOT] 💾 BEFORE MERGE: 1554 jobs in memory (cached)
[2026-02-01T00:29:49.928Z] [BOT] ✅ Loaded V2 database: 1553 jobs
💾 DISK STATE: 1553 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1554
[2026-02-01T00:29:49.935Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:49.935Z] [BOT] 💾 AFTER MERGE: 1554 jobs (merged disk + memory)
[2026-02-01T00:29:49.936Z] [BOT] ✅ No jobs to archive (all 1554 jobs within 7-day window)
[2026-02-01T00:29:50.032Z] [BOT] 💾 Saved posted_jobs.json: 1554 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:51.534Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
[2026-02-01T00:29:51.534Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:29:51.774Z] [BOT] ✅ Posted message: Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2026-02-01T00:29:51.775Z] [BOT] 💾 Added channel posting: Application Software Engineer @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T00:29:51.775Z] [BOT] 💾 BEFORE MERGE: 1555 jobs in memory (cached)
[2026-02-01T00:29:51.805Z] [BOT] ✅ Loaded V2 database: 1554 jobs
💾 DISK STATE: 1554 jobs on disk
[2026-02-01T00:29:51.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1555
[2026-02-01T00:29:51.809Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:51.809Z] [BOT] 💾 AFTER MERGE: 1555 jobs (merged disk + memory)
[2026-02-01T00:29:51.810Z] [BOT] ✅ No jobs to archive (all 1555 jobs within 7-day window)
[2026-02-01T00:29:51.893Z] [BOT] 💾 Saved posted_jobs.json: 1555 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:53.395Z] [BOT] 📍 [ROUTING] "Account Executive , USA " @ supabase
[2026-02-01T00:29:53.395Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:29:53.568Z] [BOT] ✅ Posted message: Account Executive , USA  @ supabase in #💻・tech-jobs
[2026-02-01T00:29:53.569Z] [BOT] ✅ Industry: Account Executive , USA  @ supabase
[2026-02-01T00:29:53.569Z] [BOT] 💾 Added channel posting: Account Executive , USA  @ supabase → category channel (1 total channels)
[2026-02-01T00:29:53.569Z] [BOT] 💾 BEFORE MERGE: 1556 jobs in memory (cached)
[2026-02-01T00:29:53.601Z] [BOT] ✅ Loaded V2 database: 1555 jobs
💾 DISK STATE: 1555 jobs on disk
[2026-02-01T00:29:53.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1556
[2026-02-01T00:29:53.604Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1556 jobs (merged disk + memory)
[2026-02-01T00:29:53.605Z] [BOT] ✅ No jobs to archive (all 1556 jobs within 7-day window)
[2026-02-01T00:29:53.690Z] [BOT] 💾 Saved posted_jobs.json: 1556 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:55.399Z] [BOT] ✅ Posted message: Account Executive , USA  @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T00:29:55.399Z] [BOT] 💾 Added channel posting: Account Executive , USA  @ supabase → location channel (2 total channels)
[2026-02-01T00:29:55.399Z] [BOT] 💾 BEFORE MERGE: 1556 jobs in memory (cached)
[2026-02-01T00:29:55.432Z] [BOT] ✅ Loaded V2 database: 1556 jobs
💾 DISK STATE: 1556 jobs on disk
[2026-02-01T00:29:55.432Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1556
[2026-02-01T00:29:55.435Z] [BOT] 🔀 Deep merged: Account Executive , USA  @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T00:29:55.435Z] [BOT] 💾 AFTER MERGE: 1556 jobs (merged disk + memory)
[2026-02-01T00:29:55.436Z] [BOT] ✅ No jobs to archive (all 1556 jobs within 7-day window)
[2026-02-01T00:29:55.524Z] [BOT] 💾 Saved posted_jobs.json: 1556 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:29:57.026Z] [BOT] 📍 [ROUTING] " Account Executive, EMEA" @ supabase
   Category: TECH (default)
[2026-02-01T00:29:57.026Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T00:29:57.277Z] [BOT] ✅ Posted message:  Account Executive, EMEA @ supabase in #💻・tech-jobs
  ✅ Industry:  Account Executive, EMEA @ supabase
[2026-02-01T00:29:57.277Z] [BOT] 💾 Added channel posting:  Account Executive, EMEA @ supabase → category channel (1 total channels)
[2026-02-01T00:29:57.277Z] [BOT] 💾 BEFORE MERGE: 1557 jobs in memory (cached)
[2026-02-01T00:29:57.309Z] [BOT] ✅ Loaded V2 database: 1556 jobs
💾 DISK STATE: 1556 jobs on disk
[2026-02-01T00:29:57.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1557
[2026-02-01T00:29:57.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:29:57.312Z] [BOT] 💾 AFTER MERGE: 1557 jobs (merged disk + memory)
[2026-02-01T00:29:57.313Z] [BOT] ✅ No jobs to archive (all 1557 jobs within 7-day window)
[2026-02-01T00:29:57.414Z] [BOT] 💾 Saved posted_jobs.json: 1557 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:30:01.914Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T00:30:01.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb0682dc..." not found, but found as SHA256 "e711ebe44bd94248"
[2026-02-01T00:30:01.915Z] [BOT] ⏭️  Skipping duplicate: JID_0385974a (posted within 7 days)
[2026-02-01T00:30:01.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_12ec5860..." not found, but found as SHA256 "01db66d10e759565"
[2026-02-01T00:30:01.916Z] [BOT] ⏭️  Skipping duplicate: JID_d2f18275 (posted within 7 days)
[2026-02-01T00:30:01.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9472b700..." not found, but found as SHA256 "99d803f0747c09ad"
⏭️  Skipping duplicate: JID_f045acf8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_460193a2..." not found, but found as SHA256 "42d931a20dc478c1"
⏭️  Skipping duplicate: JID_37aabcfc (posted within 7 days)
[2026-02-01T00:30:01.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6f3d0513..." not found, but found as SHA256 "1c61d8c187b76ba3"
[2026-02-01T00:30:01.917Z] [BOT] ⏭️  Skipping duplicate: JID_acba5c68-_jr100868 (posted within 7 days)
[2026-02-01T00:30:01.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cda91e67..." not found, but found as SHA256 "bd12b404b8d31b88"
⏭️  Skipping duplicate: JID_5aba4137 (posted within 7 days)
[2026-02-01T00:30:01.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c7a80b..." not found, but found as SHA256 "2d1e4254666d0b86"
[2026-02-01T00:30:01.917Z] [BOT] ⏭️  Skipping duplicate: JID_010527f2-i_r0107411 (posted within 7 days)
[2026-02-01T00:30:01.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96d6a21d..." not found, but found as SHA256 "4ff4370a8215f6f6"
[2026-02-01T00:30:01.918Z] [BOT] ⏭️  Skipping duplicate: JID_4d1ad586 (posted within 7 days)
[2026-02-01T00:30:01.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_516aaaef-..." not found, but found as SHA256 "c568d18ca0f509ae"
⏭️  Skipping duplicate: JID_8807d73b (posted within 7 days)
[2026-02-01T00:30:01.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_023b6f5d-..." not found, but found as SHA256 "22e5aa5df3557be1"
[2026-02-01T00:30:01.918Z] [BOT] ⏭️  Skipping duplicate: JID_f55550ba (posted within 7 days)
[2026-02-01T00:30:02.021Z] [BOT] ✅ Loaded pending queue: 2946 total (1360 pending, 49 enriched, 1537 posted)
[2026-02-01T00:30:02.215Z] [BOT] ✅ Saved pending queue: 2946 total (1360 pending, 39 enriched, 1547 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T00:30:02.304Z] [BOT] 📂 Loaded 11628 existing routing entries
[2026-02-01T00:30:02.457Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T00:30:02.458Z] [BOT] New entries: 10
   Total entries: 11638
   Timestamp: 2026-02-01T00:30:02.410Z
[2026-02-01T00:30:02.458Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T00:30:02.458Z] [BOT] Total attempts: 21
   Successful: 12
   Failed: 0
   Skipped: 9
[2026-02-01T00:30:02.459Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 5 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-02-01T00:30:02.459Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T00:30:02.459Z] [BOT] 💾 BEFORE MERGE: 1557 jobs in memory (cached)
[2026-02-01T00:30:02.490Z] [BOT] ✅ Loaded V2 database: 1557 jobs
💾 DISK STATE: 1557 jobs on disk
[2026-02-01T00:30:02.492Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1557
[2026-02-01T00:30:02.495Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T00:30:02.495Z] [BOT] 💾 AFTER MERGE: 1557 jobs (merged disk + memory)
[2026-02-01T00:30:02.496Z] [BOT] ✅ No jobs to archive (all 1557 jobs within 7-day window)
[2026-02-01T00:30:02.591Z] [BOT] 💾 Saved posted_jobs.json: 1557 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T00:30:02.591Z] [BOT] ✅ Database saved successfully
[2026-02-01T00:30:04.627Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2920) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*