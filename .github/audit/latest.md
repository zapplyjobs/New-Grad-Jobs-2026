# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T05:26:03.900Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T05:25:22.115Z] ========================================
[2026-01-31T05:25:22.117Z] Discord Bot Execution Log
[2026-01-31T05:25:22.117Z] Environment: GitHub Actions
[2026-01-31T05:25:22.117Z] Node Version: v20.20.0
[2026-01-31T05:25:22.117Z] ========================================
[2026-01-31T05:25:22.117Z] Environment Variables Check:
[2026-01-31T05:25:22.117Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T05:25:22.117Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.117Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T05:25:22.117Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T05:25:22.117Z] 
Multi-Channel Configuration:
[2026-01-31T05:25:22.117Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.117Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.117Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.117Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T05:25:22.118Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T05:25:22.118Z] 
Data Files Check:
[2026-01-31T05:25:22.119Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T05:25:22.154Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5671575 bytes)
[2026-01-31T05:25:22.154Z] 
========================================
[2026-01-31T05:25:22.154Z] Starting Enhanced Discord Bot...
[2026-01-31T05:25:22.154Z] ========================================
[2026-01-31T05:25:22.627Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-31T05:25:23.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T05:25:23.295Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T05:25:23.295Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T05:25:23.481Z] [BOT] ✅ Loaded pending queue: 2956 total (2067 pending, 50 enriched, 839 posted)
[2026-01-31T05:25:23.481Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:25:23.483Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T05:25:23.483Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:25:23.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T05:25:23.484Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T05:25:23.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T05:25:23.484Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T05:25:23.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T05:25:23.484Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T05:25:23.485Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T05:25:23.485Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T05:25:23.485Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T05:25:23.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T05:25:23.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T05:25:23.487Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T05:25:23.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T05:25:23.487Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T05:25:23.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
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
[2026-01-31T05:25:23.498Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T05:25:23.498Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Director's Fellowship Postdoctoral Researcher at National Renewable Energy Laboratory
[2026-01-31T05:25:23.641Z] [BOT] ✅ Loaded pending queue: 2956 total (2067 pending, 50 enriched, 839 posted)
[2026-01-31T05:25:23.808Z] [BOT] ✅ Saved pending queue: 2953 total (2067 pending, 47 enriched, 839 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T05:25:23.808Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T05:25:23.809Z] [BOT] 📋 After multi-location grouping: 28 unique jobs to post
[2026-01-31T05:25:23.809Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T05:25:23.813Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T05:25:23.814Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_563af4c1
[2026-01-31T05:25:23.814Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T05:25:23.831Z] [BOT ERROR] (node:3043) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T05:25:24.262Z] [BOT] ✅ Posted message: Data Engineer @ ORG_563af4c1 in #📊・JID_fb739488
  ✅ Industry: Data Engineer @ ORG_563af4c1
[2026-01-31T05:25:24.263Z] [BOT] 💾 Added channel posting: Data Engineer @ ORG_563af4c1 → category channel (1 total channels)
[2026-01-31T05:25:24.263Z] [BOT] 💾 BEFORE MERGE: 869 jobs in memory (cached)
[2026-01-31T05:25:24.290Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-31T05:25:24.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=869
[2026-01-31T05:25:24.292Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:24.293Z] [BOT] 💾 AFTER MERGE: 869 jobs (merged disk + memory)
[2026-01-31T05:25:24.293Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2026-01-31T05:25:24.361Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:26.080Z] [BOT] ✅ Posted message: Data Engineer @ ORG_563af4c1 in #🏠・JID_ead674af
[2026-01-31T05:25:26.080Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T05:25:26.080Z] [BOT] 💾 Added channel posting: Data Engineer @ ORG_563af4c1 → location channel (2 total channels)
💾 BEFORE MERGE: 869 jobs in memory (cached)
[2026-01-31T05:25:26.106Z] [BOT] ✅ Loaded V2 database: 869 jobs
💾 DISK STATE: 869 jobs on disk
[2026-01-31T05:25:26.106Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=869
[2026-01-31T05:25:26.108Z] [BOT] 🔀 Deep merged: Data Engineer @ ORG_563af4c1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T05:25:26.108Z] [BOT] 💾 AFTER MERGE: 869 jobs (merged disk + memory)
[2026-01-31T05:25:26.109Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2026-01-31T05:25:26.171Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:27.672Z] [BOT] 📍 [ROUTING] "Data Scientist, Product Analytics" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T05:25:27.672Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T05:25:27.879Z] [BOT] ✅ Posted message: Data Scientist, Product Analytics @ airtable in #📊・JID_fb739488
  ✅ Industry: Data Scientist, Product Analytics @ airtable
[2026-01-31T05:25:27.880Z] [BOT] 💾 Added channel posting: Data Scientist, Product Analytics @ airtable → category channel (1 total channels)
[2026-01-31T05:25:27.880Z] [BOT] 💾 BEFORE MERGE: 870 jobs in memory (cached)
[2026-01-31T05:25:27.905Z] [BOT] ✅ Loaded V2 database: 869 jobs
💾 DISK STATE: 869 jobs on disk
[2026-01-31T05:25:27.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=870
[2026-01-31T05:25:27.907Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:27.908Z] [BOT] 💾 AFTER MERGE: 870 jobs (merged disk + memory)
[2026-01-31T05:25:27.908Z] [BOT] ✅ No jobs to archive (all 870 jobs within 7-day window)
[2026-01-31T05:25:27.969Z] [BOT] 💾 Saved posted_jobs.json: 870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:32.471Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T05:25:32.472Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_1550f0e6 ABLOY
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:32.735Z] [BOT] ✅ Posted message: Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
  ✅ Industry: Associate Product Engineer @ ORG_1550f0e6 ABLOY
[2026-01-31T05:25:32.736Z] [BOT] 💾 Added channel posting: Associate Product Engineer @ ORG_1550f0e6 ABLOY → category channel (1 total channels)
💾 BEFORE MERGE: 871 jobs in memory (cached)
[2026-01-31T05:25:32.761Z] [BOT] ✅ Loaded V2 database: 870 jobs
💾 DISK STATE: 870 jobs on disk
[2026-01-31T05:25:32.761Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=871
[2026-01-31T05:25:32.763Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:32.763Z] [BOT] 💾 AFTER MERGE: 871 jobs (merged disk + memory)
[2026-01-31T05:25:32.764Z] [BOT] ✅ No jobs to archive (all 871 jobs within 7-day window)
[2026-01-31T05:25:32.825Z] [BOT] 💾 Saved posted_jobs.json: 871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:34.327Z] [BOT] 📍 [ROUTING] "Database Administrator 1" @ ORG_1954b120
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:34.701Z] [BOT] ✅ Posted message: Database Administrator 1 @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Database Administrator 1 @ ORG_1954b120
[2026-01-31T05:25:34.702Z] [BOT] 💾 Added channel posting: Database Administrator 1 @ ORG_1954b120 → category channel (1 total channels)
[2026-01-31T05:25:34.702Z] [BOT] 💾 BEFORE MERGE: 872 jobs in memory (cached)
[2026-01-31T05:25:34.728Z] [BOT] ✅ Loaded V2 database: 871 jobs
💾 DISK STATE: 871 jobs on disk
[2026-01-31T05:25:34.728Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=872
[2026-01-31T05:25:34.730Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:34.730Z] [BOT] 💾 AFTER MERGE: 872 jobs (merged disk + memory)
[2026-01-31T05:25:34.730Z] [BOT] ✅ No jobs to archive (all 872 jobs within 7-day window)
[2026-01-31T05:25:34.802Z] [BOT] 💾 Saved posted_jobs.json: 872 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:36.303Z] [BOT] 📍 [ROUTING] "Financial Crimes Investigator" @ brex
[2026-01-31T05:25:36.303Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:36.614Z] [BOT] ✅ Posted message: Financial Crimes Investigator @ brex in #💻・tech-jobs
[2026-01-31T05:25:36.615Z] [BOT] ✅ Industry: Financial Crimes Investigator @ brex
[2026-01-31T05:25:36.615Z] [BOT] 💾 Added channel posting: Financial Crimes Investigator @ brex → category channel (1 total channels)
[2026-01-31T05:25:36.615Z] [BOT] 💾 BEFORE MERGE: 873 jobs in memory (cached)
[2026-01-31T05:25:36.639Z] [BOT] ✅ Loaded V2 database: 872 jobs
💾 DISK STATE: 872 jobs on disk
[2026-01-31T05:25:36.639Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=873
[2026-01-31T05:25:36.641Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 873 jobs (merged disk + memory)
[2026-01-31T05:25:36.642Z] [BOT] ✅ No jobs to archive (all 873 jobs within 7-day window)
[2026-01-31T05:25:36.702Z] [BOT] 💾 Saved posted_jobs.json: 873 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:38.452Z] [BOT] ✅ Posted message: Financial Crimes Investigator @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T05:25:38.453Z] [BOT] 💾 Added channel posting: Financial Crimes Investigator @ brex → location channel (2 total channels)
[2026-01-31T05:25:38.453Z] [BOT] 💾 BEFORE MERGE: 873 jobs in memory (cached)
[2026-01-31T05:25:38.479Z] [BOT] ✅ Loaded V2 database: 873 jobs
💾 DISK STATE: 873 jobs on disk
[2026-01-31T05:25:38.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=873
[2026-01-31T05:25:38.481Z] [BOT] 🔀 Deep merged: Financial Crimes Investigator @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T05:25:38.481Z] [BOT] 💾 AFTER MERGE: 873 jobs (merged disk + memory)
[2026-01-31T05:25:38.482Z] [BOT] ✅ No jobs to archive (all 873 jobs within 7-day window)
[2026-01-31T05:25:38.543Z] [BOT] 💾 Saved posted_jobs.json: 873 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:40.044Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Network Global Engineering - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-31T05:25:40.044Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:40.252Z] [BOT] ✅ Posted message: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c
[2026-01-31T05:25:40.252Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T05:25:40.253Z] [BOT] 💾 BEFORE MERGE: 874 jobs in memory (cached)
[2026-01-31T05:25:40.279Z] [BOT] ✅ Loaded V2 database: 873 jobs
💾 DISK STATE: 873 jobs on disk
[2026-01-31T05:25:40.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=874
[2026-01-31T05:25:40.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 874 jobs (merged disk + memory)
[2026-01-31T05:25:40.281Z] [BOT] ✅ No jobs to archive (all 874 jobs within 7-day window)
[2026-01-31T05:25:40.347Z] [BOT] 💾 Saved posted_jobs.json: 874 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:41.848Z] [BOT] 📍 [ROUTING] "Software Engineer 3" @ ORG_3eab285c
[2026-01-31T05:25:41.848Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:42.022Z] [BOT] ✅ Posted message: Software Engineer 3 @ ORG_3eab285c in #💻・tech-jobs
  ✅ Industry: Software Engineer 3 @ ORG_3eab285c
[2026-01-31T05:25:42.022Z] [BOT] 💾 Added channel posting: Software Engineer 3 @ ORG_3eab285c → category channel (1 total channels)
[2026-01-31T05:25:42.023Z] [BOT] 💾 BEFORE MERGE: 875 jobs in memory (cached)
[2026-01-31T05:25:42.047Z] [BOT] ✅ Loaded V2 database: 874 jobs
💾 DISK STATE: 874 jobs on disk
[2026-01-31T05:25:42.047Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=875
[2026-01-31T05:25:42.049Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 875 jobs (merged disk + memory)
[2026-01-31T05:25:42.050Z] [BOT] ✅ No jobs to archive (all 875 jobs within 7-day window)
[2026-01-31T05:25:42.109Z] [BOT] 💾 Saved posted_jobs.json: 875 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:43.610Z] [BOT] 📍 [ROUTING] "EDI Coordinator" @ ORG_22fa11a5ingham & Butler
[2026-01-31T05:25:43.611Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:25:43.803Z] [BOT] ✅ Posted message: EDI Coordinator @ ORG_22fa11a5ingham & Butler in #💻・tech-jobs
[2026-01-31T05:25:43.803Z] [BOT] ✅ Industry: EDI Coordinator @ ORG_22fa11a5ingham & Butler
[2026-01-31T05:25:43.804Z] [BOT] 💾 Added channel posting: EDI Coordinator @ ORG_22fa11a5ingham & Butler → category channel (1 total channels)
[2026-01-31T05:25:43.804Z] [BOT] 💾 BEFORE MERGE: 876 jobs in memory (cached)
[2026-01-31T05:25:43.830Z] [BOT] ✅ Loaded V2 database: 875 jobs
💾 DISK STATE: 875 jobs on disk
[2026-01-31T05:25:43.830Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=876
[2026-01-31T05:25:43.832Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 876 jobs (merged disk + memory)
[2026-01-31T05:25:43.832Z] [BOT] ✅ No jobs to archive (all 876 jobs within 7-day window)
[2026-01-31T05:25:43.894Z] [BOT] 💾 Saved posted_jobs.json: 876 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:48.396Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T05:25:48.396Z] [BOT] 📍 [ROUTING] "Analytics Engineer, Product Analytics" @ airtable
   Category: AI (matched: "AI/ML")
[2026-01-31T05:25:48.396Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T05:25:50.401Z] [BOT] ✅ Posted message: Analytics Engineer, Product Analytics @ airtable in #🤖・ai-jobs
  ✅ Industry: Analytics Engineer, Product Analytics @ airtable
[2026-01-31T05:25:50.402Z] [BOT] 💾 Added channel posting: Analytics Engineer, Product Analytics @ airtable → category channel (1 total channels)
[2026-01-31T05:25:50.402Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory (cached)
[2026-01-31T05:25:50.427Z] [BOT] ✅ Loaded V2 database: 876 jobs
💾 DISK STATE: 876 jobs on disk
[2026-01-31T05:25:50.427Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=877
[2026-01-31T05:25:50.429Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:50.429Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-31T05:25:50.430Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-31T05:25:50.498Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:25:54.999Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T05:25:55.000Z] [BOT] 📍 [ROUTING] "NetSuite Implementation Consultant" @ ORG_efa4a8df
[2026-01-31T05:25:55.000Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T05:25:55.412Z] [BOT] ✅ Posted message: NetSuite Implementation Consultant @ ORG_efa4a8df in #💰・finance-jobs
[2026-01-31T05:25:55.412Z] [BOT] ✅ Industry: NetSuite Implementation Consultant @ ORG_efa4a8df
[2026-01-31T05:25:55.413Z] [BOT] 💾 Added channel posting: NetSuite Implementation Consultant @ ORG_efa4a8df → category channel (1 total channels)
[2026-01-31T05:25:55.413Z] [BOT] 💾 BEFORE MERGE: 878 jobs in memory (cached)
[2026-01-31T05:25:55.437Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-31T05:25:55.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=878
[2026-01-31T05:25:55.439Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:25:55.439Z] [BOT] 💾 AFTER MERGE: 878 jobs (merged disk + memory)
[2026-01-31T05:25:55.440Z] [BOT] ✅ No jobs to archive (all 878 jobs within 7-day window)
[2026-01-31T05:25:55.502Z] [BOT] 💾 Saved posted_jobs.json: 878 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:26:00.005Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T05:26:00.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_30e0e7e9..." not found, but found as SHA256 "18a951f989f88e7d"
[2026-01-31T05:26:00.007Z] [BOT] ⏭️  Skipping duplicate: JID_9b925359 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d0277267..." not found, but found as SHA256 "f4b799d5bf03b447"
[2026-01-31T05:26:00.007Z] [BOT] ⏭️  Skipping duplicate: JID_12858b9a (posted within 7 days)
[2026-01-31T05:26:00.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f88fd0c9-..." not found, but found as SHA256 "a445ba13b750c694"
[2026-01-31T05:26:00.007Z] [BOT] ⏭️  Skipping duplicate: JID_0b2184bb-i_313857 (posted within 7 days)
[2026-01-31T05:26:00.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "9d2d5d3e83591d07"
⏭️  Skipping duplicate: JID_c4ad9978 (posted within 7 days)
[2026-01-31T05:26:00.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d5a1a21c..." not found, but found as SHA256 "a3eb69aa2e36b4b8"
[2026-01-31T05:26:00.008Z] [BOT] ⏭️  Skipping duplicate: JID_51a4bf73-external_careers-JID_e041c4ce-consultant_r-50086 (posted within 7 days)
[2026-01-31T05:26:00.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "cd17edfa6a30656f"
[2026-01-31T05:26:00.008Z] [BOT] ⏭️  Skipping duplicate: JID_669502c0 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b8727a6a..." not found, but found as SHA256 "0885475f4a7a218b"
⏭️  Skipping duplicate: JID_b8727a6a (posted within 7 days)
[2026-01-31T05:26:00.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4a91e479..." not found, but found as SHA256 "29cfaf1fb17c1795"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_9c80e33d-detail (posted within 7 days)
[2026-01-31T05:26:00.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f6e5019b..." not found, but found as SHA256 "403096c16bc2dcba"
⏭️  Skipping duplicate: JID_3a39db73-iii_r-2347075 (posted within 7 days)
[2026-01-31T05:26:00.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_db983d11..." not found, but found as SHA256 "824613ca3d8b3f16"
⏭️  Skipping duplicate: JID_9138a48f (posted within 7 days)
[2026-01-31T05:26:00.162Z] [BOT] ✅ Loaded pending queue: 2953 total (2067 pending, 47 enriched, 839 posted)
[2026-01-31T05:26:00.342Z] [BOT] ✅ Saved pending queue: 2953 total (2067 pending, 37 enriched, 849 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T05:26:00.436Z] [BOT] 📂 Loaded 10930 existing routing entries
[2026-01-31T05:26:00.573Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T05:26:00.573Z] [BOT] Total entries: 10940
   Timestamp: 2026-01-31T05:26:00.518Z
[2026-01-31T05:26:00.574Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 29
[2026-01-31T05:26:00.574Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 17
[2026-01-31T05:26:00.574Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-31T05:26:00.574Z] [BOT] Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📊・JID_fb739488: 2 posts
     3. #🏠・JID_ead674af: 2 posts
     4. #🤖・ai-jobs: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-31T05:26:00.574Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T05:26:00.574Z] [BOT] 💾 BEFORE MERGE: 878 jobs in memory (cached)
[2026-01-31T05:26:00.599Z] [BOT] ✅ Loaded V2 database: 878 jobs
💾 DISK STATE: 878 jobs on disk
[2026-01-31T05:26:00.599Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=878
[2026-01-31T05:26:00.601Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:26:00.601Z] [BOT] 💾 AFTER MERGE: 878 jobs (merged disk + memory)
[2026-01-31T05:26:00.602Z] [BOT] ✅ No jobs to archive (all 878 jobs within 7-day window)
[2026-01-31T05:26:00.665Z] [BOT] 💾 Saved posted_jobs.json: 878 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:26:00.665Z] [BOT] ✅ Database saved successfully
[2026-01-31T05:26:02.687Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3043) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*