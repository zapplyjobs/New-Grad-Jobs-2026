# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T10:31:57.830Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T10:31:21.211Z] ========================================
[2026-01-31T10:31:21.213Z] Discord Bot Execution Log
[2026-01-31T10:31:21.213Z] Environment: GitHub Actions
[2026-01-31T10:31:21.213Z] Node Version: v20.20.0
[2026-01-31T10:31:21.213Z] ========================================
[2026-01-31T10:31:21.213Z] Environment Variables Check:
[2026-01-31T10:31:21.213Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T10:31:21.213Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.213Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T10:31:21.214Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T10:31:21.214Z] 
Multi-Channel Configuration:
[2026-01-31T10:31:21.214Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T10:31:21.214Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T10:31:21.214Z] 
Data Files Check:
[2026-01-31T10:31:21.215Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T10:31:21.247Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6529868 bytes)
[2026-01-31T10:31:21.247Z] 
========================================
[2026-01-31T10:31:21.247Z] Starting Enhanced Discord Bot...
[2026-01-31T10:31:21.247Z] ========================================
[2026-01-31T10:31:21.799Z] [BOT] ✅ Loaded V2 database: 1048 jobs
[2026-01-31T10:31:22.640Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T10:31:22.641Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T10:31:22.641Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T10:31:22.764Z] [BOT] ✅ Loaded pending queue: 2954 total (1885 pending, 50 enriched, 1019 posted)
[2026-01-31T10:31:22.764Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T10:31:22.764Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:31:22.765Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T10:31:22.765Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:31:22.765Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T10:31:22.766Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T10:31:22.766Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T10:31:22.766Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T10:31:22.766Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-31T10:31:22.766Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T10:31:22.767Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T10:31:22.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T10:31:22.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T10:31:22.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T10:31:22.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T10:31:22.768Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T10:31:22.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T10:31:22.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T10:31:22.769Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T10:31:22.769Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T10:31:22.769Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T10:31:22.769Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T10:31:22.777Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T10:31:22.777Z] [BOT] 🚫 Skipping blacklisted job: Manager, Recruiting Coordination and Programs at brex
[2026-01-31T10:31:22.777Z] [BOT] 🚫 Skipping blacklisted job: Manager, Recruiting Coordination and Programs at brex
[2026-01-31T10:31:22.901Z] [BOT] ✅ Loaded pending queue: 2954 total (1885 pending, 50 enriched, 1019 posted)
[2026-01-31T10:31:23.109Z] [BOT] ✅ Saved pending queue: 2952 total (1885 pending, 48 enriched, 1019 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T10:31:23.109Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T10:31:23.109Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T10:31:23.110Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-31T10:31:23.111Z] [BOT] (15 grouped as same job with different locations)
📍 8 jobs with multiple locations:
[2026-01-31T10:31:23.111Z] [BOT] - Software Engineer I, Frontend @ Twitch: san francisco, irvine
   - Banking Specialist @ brex: new york, new york, united states, san francisco, california, united states
   - Commercial Account Executive @ brex: salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Enterprise Account Executive @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-31T10:31:23.111Z] [BOT] - Enterprise Implementation Consultant, Financial Saas @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states
   - Implementation Consultant II @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Outbound Sales Development Representative @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
   - Product and Regulatory Counsel @ brex: seattle, washington, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
[2026-01-31T10:31:23.111Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T10:31:23.113Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T10:31:23.115Z] [BOT] 📍 [ROUTING] "TMS Compliance Analyst III" @ coinbase
[2026-01-31T10:31:23.115Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:31:23.133Z] [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T10:31:23.549Z] [BOT] ✅ Posted message: TMS Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Compliance Analyst III @ coinbase
[2026-01-31T10:31:23.550Z] [BOT] 💾 Added channel posting: TMS Compliance Analyst III @ coinbase → category channel (1 total channels)
[2026-01-31T10:31:23.550Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory (cached)
[2026-01-31T10:31:23.574Z] [BOT] ✅ Loaded V2 database: 1048 jobs
💾 DISK STATE: 1048 jobs on disk
[2026-01-31T10:31:23.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1049
[2026-01-31T10:31:23.577Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-31T10:31:23.577Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-31T10:31:23.647Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:25.151Z] [BOT] 📍 [ROUTING] "TMS Quality Compliance Analyst III" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:31:25.308Z] [BOT] ✅ Posted message: TMS Quality Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Quality Compliance Analyst III @ coinbase
[2026-01-31T10:31:25.309Z] [BOT] 💾 Added channel posting: TMS Quality Compliance Analyst III @ coinbase → category channel (1 total channels)
[2026-01-31T10:31:25.309Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory (cached)
[2026-01-31T10:31:25.331Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-31T10:31:25.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1050
[2026-01-31T10:31:25.334Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:25.334Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-31T10:31:25.334Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-31T10:31:25.398Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:26.901Z] [BOT] 📍 [ROUTING] "User Researcher Intern" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:31:27.151Z] [BOT] ✅ Posted message: User Researcher Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: User Researcher Intern @ coinbase
[2026-01-31T10:31:27.151Z] [BOT] 💾 Added channel posting: User Researcher Intern @ coinbase → category channel (1 total channels)
[2026-01-31T10:31:27.151Z] [BOT] 💾 BEFORE MERGE: 1051 jobs in memory (cached)
[2026-01-31T10:31:27.174Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-31T10:31:27.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1051
[2026-01-31T10:31:27.176Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:27.176Z] [BOT] 💾 AFTER MERGE: 1051 jobs (merged disk + memory)
[2026-01-31T10:31:27.177Z] [BOT] ✅ No jobs to archive (all 1051 jobs within 7-day window)
[2026-01-31T10:31:27.240Z] [BOT] 💾 Saved posted_jobs.json: 1051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:28.742Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ spotify
[2026-01-31T10:31:28.742Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T10:31:28.940Z] [BOT] ✅ Posted message: Machine Learning Engineer @ spotify in #🤖・ai-jobs
[2026-01-31T10:31:28.940Z] [BOT] ✅ Industry: Machine Learning Engineer @ spotify
[2026-01-31T10:31:28.940Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ spotify → category channel (1 total channels)
[2026-01-31T10:31:28.940Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory (cached)
[2026-01-31T10:31:28.962Z] [BOT] ✅ Loaded V2 database: 1051 jobs
💾 DISK STATE: 1051 jobs on disk
[2026-01-31T10:31:28.963Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1052
[2026-01-31T10:31:28.965Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-31T10:31:28.966Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-31T10:31:29.028Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:30.747Z] [BOT] ✅ Posted message: Machine Learning Engineer @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:31:30.748Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ spotify → location channel (2 total channels)
[2026-01-31T10:31:30.748Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory (cached)
[2026-01-31T10:31:30.770Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-31T10:31:30.771Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1052
[2026-01-31T10:31:30.773Z] [BOT] 🔀 Deep merged: Machine Learning Engineer @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:31:30.773Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-31T10:31:30.774Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-31T10:31:30.864Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-31T10:31:30.864Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:35.366Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T10:31:35.367Z] [BOT] 📍 [ROUTING] "Market Risk Analytics Associate, Stress Testing and AI Integration" @ ORG_02281b3b Stanley
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:31:35.666Z] [BOT] ✅ Posted message: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley
[2026-01-31T10:31:35.667Z] [BOT] 💾 Added channel posting: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley → category channel (1 total channels)
💾 BEFORE MERGE: 1053 jobs in memory (cached)
[2026-01-31T10:31:35.688Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-31T10:31:35.689Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1053
[2026-01-31T10:31:35.691Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1053 jobs (merged disk + memory)
[2026-01-31T10:31:35.692Z] [BOT] ✅ No jobs to archive (all 1053 jobs within 7-day window)
[2026-01-31T10:31:35.752Z] [BOT] 💾 Saved posted_jobs.json: 1053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:37.432Z] [BOT] ✅ Posted message: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-31T10:31:37.433Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:31:37.433Z] [BOT] 💾 Added channel posting: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-31T10:31:37.433Z] [BOT] 💾 BEFORE MERGE: 1053 jobs in memory (cached)
[2026-01-31T10:31:37.455Z] [BOT] ✅ Loaded V2 database: 1053 jobs
[2026-01-31T10:31:37.456Z] [BOT] 💾 DISK STATE: 1053 jobs on disk
[2026-01-31T10:31:37.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1053
[2026-01-31T10:31:37.459Z] [BOT] 🔀 Deep merged: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:31:37.459Z] [BOT] 💾 AFTER MERGE: 1053 jobs (merged disk + memory)
[2026-01-31T10:31:37.460Z] [BOT] ✅ No jobs to archive (all 1053 jobs within 7-day window)
[2026-01-31T10:31:37.534Z] [BOT] 💾 Saved posted_jobs.json: 1053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:39.035Z] [BOT] 📍 [ROUTING] "Applied Scientist - AI & Robotics (PhD) - Early Career" @ ORG_c910d474 Motors
[2026-01-31T10:31:39.035Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:31:39.289Z] [BOT] ✅ Posted message: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #💻・tech-jobs
  ✅ Industry: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors
[2026-01-31T10:31:39.290Z] [BOT] 💾 Added channel posting: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors → category channel (1 total channels)
💾 BEFORE MERGE: 1054 jobs in memory (cached)
[2026-01-31T10:31:39.311Z] [BOT] ✅ Loaded V2 database: 1053 jobs
💾 DISK STATE: 1053 jobs on disk
[2026-01-31T10:31:39.311Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1054
[2026-01-31T10:31:39.313Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:39.313Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-31T10:31:39.314Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-31T10:31:39.378Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:40.880Z] [BOT] 📍 [ROUTING] "Data Dictionary Software Engineer 1" @ ORG_1954b120
[2026-01-31T10:31:40.880Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:31:41.146Z] [BOT] ✅ Posted message: Data Dictionary Software Engineer 1 @ ORG_1954b120 in #💻・tech-jobs
[2026-01-31T10:31:41.146Z] [BOT] ✅ Industry: Data Dictionary Software Engineer 1 @ ORG_1954b120
[2026-01-31T10:31:41.146Z] [BOT] 💾 Added channel posting: Data Dictionary Software Engineer 1 @ ORG_1954b120 → category channel (1 total channels)
[2026-01-31T10:31:41.147Z] [BOT] 💾 BEFORE MERGE: 1055 jobs in memory (cached)
[2026-01-31T10:31:41.168Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-31T10:31:41.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1055
[2026-01-31T10:31:41.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1055 jobs (merged disk + memory)
[2026-01-31T10:31:41.172Z] [BOT] ✅ No jobs to archive (all 1055 jobs within 7-day window)
[2026-01-31T10:31:41.232Z] [BOT] 💾 Saved posted_jobs.json: 1055 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:42.734Z] [BOT] 📍 [ROUTING] "Junior Backend Engineer" @ ORG_81885e17
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:31:42.895Z] [BOT] ✅ Posted message: Junior Backend Engineer @ ORG_81885e17 in #💻・tech-jobs
  ✅ Industry: Junior Backend Engineer @ ORG_81885e17
[2026-01-31T10:31:42.896Z] [BOT] 💾 Added channel posting: Junior Backend Engineer @ ORG_81885e17 → category channel (1 total channels)
[2026-01-31T10:31:42.896Z] [BOT] 💾 BEFORE MERGE: 1056 jobs in memory (cached)
[2026-01-31T10:31:42.926Z] [BOT] ✅ Loaded V2 database: 1055 jobs
💾 DISK STATE: 1055 jobs on disk
[2026-01-31T10:31:42.926Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1056
[2026-01-31T10:31:42.928Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:42.928Z] [BOT] 💾 AFTER MERGE: 1056 jobs (merged disk + memory)
[2026-01-31T10:31:42.929Z] [BOT] ✅ No jobs to archive (all 1056 jobs within 7-day window)
[2026-01-31T10:31:42.997Z] [BOT] 💾 Saved posted_jobs.json: 1056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:44.500Z] [BOT] 📍 [ROUTING] "Software Engineer I, Frontend" @ ORG_a731a58c
[2026-01-31T10:31:44.500Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:31:44.782Z] [BOT] ✅ Posted message: Software Engineer I, Frontend @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Software Engineer I, Frontend @ ORG_a731a58c
[2026-01-31T10:31:44.783Z] [BOT] 💾 Added channel posting: Software Engineer I, Frontend @ ORG_a731a58c → category channel (1 total channels)
[2026-01-31T10:31:44.783Z] [BOT] 💾 BEFORE MERGE: 1057 jobs in memory (cached)
[2026-01-31T10:31:44.803Z] [BOT] ✅ Loaded V2 database: 1056 jobs
💾 DISK STATE: 1056 jobs on disk
[2026-01-31T10:31:44.803Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1057
[2026-01-31T10:31:44.805Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:44.805Z] [BOT] 💾 AFTER MERGE: 1057 jobs (merged disk + memory)
[2026-01-31T10:31:44.806Z] [BOT] ✅ No jobs to archive (all 1057 jobs within 7-day window)
[2026-01-31T10:31:44.865Z] [BOT] 💾 Saved posted_jobs.json: 1057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:49.367Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T10:31:49.368Z] [BOT] 📍 [ROUTING] "Junior Business & Technology Analyst" @ ORG_dac437fc Bank
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-31T10:31:49.368Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T10:31:49.573Z] [BOT] ✅ Posted message: Junior Business & Technology Analyst @ ORG_dac437fc Bank in #📊・JID_fb739488
  ✅ Industry: Junior Business & Technology Analyst @ ORG_dac437fc Bank
[2026-01-31T10:31:49.574Z] [BOT] 💾 Added channel posting: Junior Business & Technology Analyst @ ORG_dac437fc Bank → category channel (1 total channels)
[2026-01-31T10:31:49.574Z] [BOT] 💾 BEFORE MERGE: 1058 jobs in memory (cached)
[2026-01-31T10:31:49.596Z] [BOT] ✅ Loaded V2 database: 1057 jobs
💾 DISK STATE: 1057 jobs on disk
[2026-01-31T10:31:49.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1058
[2026-01-31T10:31:49.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:49.599Z] [BOT] 💾 AFTER MERGE: 1058 jobs (merged disk + memory)
[2026-01-31T10:31:49.600Z] [BOT] ✅ No jobs to archive (all 1058 jobs within 7-day window)
[2026-01-31T10:31:49.675Z] [BOT] 💾 Saved posted_jobs.json: 1058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:54.174Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T10:31:54.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e045e32a..." not found, but found as SHA256 "7e28a26fbcd49d84"
⏭️  Skipping duplicate: JID_75495f4b (posted within 7 days)
[2026-01-31T10:31:54.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6c04291c..." not found, but found as SHA256 "943d5973d06f4b74"
[2026-01-31T10:31:54.176Z] [BOT] ⏭️  Skipping duplicate: JID_e4b7e01a (posted within 7 days)
[2026-01-31T10:31:54.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a43ddcc0..." not found, but found as SHA256 "7de1b279c08f5225"
[2026-01-31T10:31:54.176Z] [BOT] ⏭️  Skipping duplicate: JID_d8c1abef (posted within 7 days)
[2026-01-31T10:31:54.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_54e4070a-..." not found, but found as SHA256 "ff03fafb9dd60780"
⏭️  Skipping duplicate: JID_6804755e-integration_pt-jr025318 (posted within 7 days)
[2026-01-31T10:31:54.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aab2cd8d..." not found, but found as SHA256 "23941b51c15e47a1"
⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_c402ef7f-career_jr-202523975 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f170a54e..." not found, but found as SHA256 "72407fd53ccb7e18"
⏭️  Skipping duplicate: JID_e7388d16-1_320288 (posted within 7 days)
[2026-01-31T10:31:54.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6ecb41bc-..." not found, but found as SHA256 "0f21e5b788f2030e"
⏭️  Skipping duplicate: JID_9ff5d674 (posted within 7 days)
[2026-01-31T10:31:54.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c08c77b1..." not found, but found as SHA256 "4f8727aeba737b1a"
⏭️  Skipping duplicate: JID_74713f9b (posted within 7 days)
[2026-01-31T10:31:54.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d9a09daf..." not found, but found as SHA256 "9fa7d080b2bd0794"
[2026-01-31T10:31:54.178Z] [BOT] ⏭️  Skipping duplicate: JID_51162df5-engineer_jr3704 (posted within 7 days)
[2026-01-31T10:31:54.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_01eae611..." not found, but found as SHA256 "c604f9681424f37f"
[2026-01-31T10:31:54.178Z] [BOT] ⏭️  Skipping duplicate: JID_bf3e2eb6 (posted within 7 days)
[2026-01-31T10:31:54.293Z] [BOT] ✅ Loaded pending queue: 2952 total (1885 pending, 48 enriched, 1019 posted)
[2026-01-31T10:31:54.485Z] [BOT] ✅ Saved pending queue: 2952 total (1885 pending, 38 enriched, 1029 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T10:31:54.485Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T10:31:54.569Z] [BOT] 📂 Loaded 11110 existing routing entries
[2026-01-31T10:31:54.714Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T10:31:54.714Z] [BOT] New entries: 10
   Total entries: 11120
   Timestamp: 2026-01-31T10:31:54.651Z
[2026-01-31T10:31:54.715Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 28
   Successful: 12
[2026-01-31T10:31:54.715Z] [BOT] Failed: 0
   Skipped: 16
[2026-01-31T10:31:54.715Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-31T10:31:54.716Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1058 jobs in memory (cached)
[2026-01-31T10:31:54.735Z] [BOT] ✅ Loaded V2 database: 1058 jobs
💾 DISK STATE: 1058 jobs on disk
[2026-01-31T10:31:54.735Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1058
[2026-01-31T10:31:54.738Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:31:54.738Z] [BOT] 💾 AFTER MERGE: 1058 jobs (merged disk + memory)
[2026-01-31T10:31:54.739Z] [BOT] ✅ No jobs to archive (all 1058 jobs within 7-day window)
[2026-01-31T10:31:54.804Z] [BOT] 💾 Saved posted_jobs.json: 1058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:31:54.804Z] [BOT] ✅ Database saved successfully
[2026-01-31T10:31:56.836Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*