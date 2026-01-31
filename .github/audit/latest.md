# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T09:50:01.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T09:49:27.402Z] ========================================
[2026-01-31T09:49:27.404Z] Discord Bot Execution Log
[2026-01-31T09:49:27.404Z] Environment: GitHub Actions
[2026-01-31T09:49:27.404Z] Node Version: v20.20.0
[2026-01-31T09:49:27.404Z] ========================================
[2026-01-31T09:49:27.404Z] Environment Variables Check:
[2026-01-31T09:49:27.404Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T09:49:27.404Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T09:49:27.405Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T09:49:27.405Z] 
Multi-Channel Configuration:
[2026-01-31T09:49:27.405Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.405Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T09:49:27.406Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T09:49:27.406Z] 
Data Files Check:
[2026-01-31T09:49:27.407Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T09:49:27.439Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6362637 bytes)
[2026-01-31T09:49:27.439Z] 
========================================
[2026-01-31T09:49:27.439Z] Starting Enhanced Discord Bot...
[2026-01-31T09:49:27.439Z] ========================================
[2026-01-31T09:49:27.993Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-31T09:49:28.440Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T09:49:28.441Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T09:49:28.441Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T09:49:28.562Z] [BOT] ✅ Loaded pending queue: 2956 total (1917 pending, 50 enriched, 989 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:49:28.562Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:49:28.563Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T09:49:28.563Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T09:49:28.563Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T09:49:28.563Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T09:49:28.563Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T09:49:28.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T09:49:28.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T09:49:28.564Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T09:49:28.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T09:49:28.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T09:49:28.565Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T09:49:28.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T09:49:28.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T09:49:28.566Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T09:49:28.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T09:49:28.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T09:49:28.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T09:49:28.573Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T09:49:28.573Z] [BOT] 🚫 Skipping blacklisted job: Director, Federal Sales at figma
🚫 Skipping blacklisted job: Associate Manager, EDD Compliance at coinbase
[2026-01-31T09:49:28.574Z] [BOT] 🚫 Skipping blacklisted job: Associate Manager, Quality Compliance at coinbase
🚫 Skipping blacklisted job: Associate Manager, Transaction Monitoring Compliance at coinbase
🚫 Skipping blacklisted job: Lead EDD Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Lead TMS Compliance Analyst  at coinbase
[2026-01-31T09:49:28.574Z] [BOT] 🚫 Skipping blacklisted job: Lead TMS Quality Compliance Analyst at coinbase
[2026-01-31T09:49:28.677Z] [BOT] ✅ Loaded pending queue: 2956 total (1917 pending, 50 enriched, 989 posted)
[2026-01-31T09:49:28.869Z] [BOT] ✅ Saved pending queue: 2949 total (1917 pending, 43 enriched, 989 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-01-31T09:49:28.869Z] [BOT] 📋 After blacklist filter: 29 jobs (7 blacklisted)
[2026-01-31T09:49:28.869Z] [BOT] 📋 After data quality filter: 29 jobs (0 invalid)
[2026-01-31T09:49:28.870Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-31T09:49:28.870Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T09:49:28.872Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T09:49:28.874Z] [BOT] 📍 [ROUTING] "Event Planner I - Sponsored Events" @ gohighlevel
[2026-01-31T09:49:28.874Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:49:28.892Z] [BOT ERROR] (node:2717) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T09:49:29.126Z] [BOT] ✅ Posted message: Event Planner I - Sponsored Events @ gohighlevel in #🤖・ai-jobs
[2026-01-31T09:49:29.127Z] [BOT] ✅ Industry: Event Planner I - Sponsored Events @ gohighlevel
[2026-01-31T09:49:29.127Z] [BOT] 💾 Added channel posting: Event Planner I - Sponsored Events @ gohighlevel → category channel (1 total channels)
[2026-01-31T09:49:29.128Z] [BOT] 💾 BEFORE MERGE: 1019 jobs in memory (cached)
[2026-01-31T09:49:29.146Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-31T09:49:29.146Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1019
[2026-01-31T09:49:29.149Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:29.149Z] [BOT] 💾 AFTER MERGE: 1019 jobs (merged disk + memory)
[2026-01-31T09:49:29.150Z] [BOT] ✅ No jobs to archive (all 1019 jobs within 7-day window)
[2026-01-31T09:49:29.224Z] [BOT] 💾 Saved posted_jobs.json: 1019 active jobs
[2026-01-31T09:49:29.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:30.728Z] [BOT] 📍 [ROUTING] "Power Analyst - Power" @ ORG_54f9eaef International Group (SIG)
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:49:31.007Z] [BOT] ✅ Posted message: Power Analyst - Power @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Power Analyst - Power @ ORG_54f9eaef International Group (SIG)
[2026-01-31T09:49:31.008Z] [BOT] 💾 Added channel posting: Power Analyst - Power @ ORG_54f9eaef International Group (SIG) → category channel (1 total channels)
[2026-01-31T09:49:31.008Z] [BOT] 💾 BEFORE MERGE: 1020 jobs in memory (cached)
[2026-01-31T09:49:31.027Z] [BOT] ✅ Loaded V2 database: 1019 jobs
💾 DISK STATE: 1019 jobs on disk
[2026-01-31T09:49:31.028Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1020
[2026-01-31T09:49:31.030Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:31.030Z] [BOT] 💾 AFTER MERGE: 1020 jobs (merged disk + memory)
[2026-01-31T09:49:31.031Z] [BOT] ✅ No jobs to archive (all 1020 jobs within 7-day window)
[2026-01-31T09:49:31.092Z] [BOT] 💾 Saved posted_jobs.json: 1020 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:32.593Z] [BOT] 📍 [ROUTING] "Product Analyst - Digital Advertising" @ ORG_162cc64c Tower
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:49:32.594Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T09:49:33.154Z] [BOT] ✅ Posted message: Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #🤖・ai-jobs
[2026-01-31T09:49:33.154Z] [BOT] ✅ Industry: Product Analyst - Digital Advertising @ ORG_162cc64c Tower
[2026-01-31T09:49:33.155Z] [BOT] 💾 Added channel posting: Product Analyst - Digital Advertising @ ORG_162cc64c Tower → category channel (1 total channels)
[2026-01-31T09:49:33.155Z] [BOT] 💾 BEFORE MERGE: 1021 jobs in memory (cached)
[2026-01-31T09:49:33.175Z] [BOT] ✅ Loaded V2 database: 1020 jobs
💾 DISK STATE: 1020 jobs on disk
[2026-01-31T09:49:33.175Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1021
[2026-01-31T09:49:33.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1021 jobs (merged disk + memory)
[2026-01-31T09:49:33.178Z] [BOT] ✅ No jobs to archive (all 1021 jobs within 7-day window)
[2026-01-31T09:49:33.239Z] [BOT] 💾 Saved posted_jobs.json: 1021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:34.741Z] [BOT] 📍 [ROUTING] "Applied Scientist" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:49:34.877Z] [BOT] ✅ Posted message: Applied Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-31T09:49:34.878Z] [BOT] ✅ Industry: Applied Scientist @ ORG_72fd3ae0
[2026-01-31T09:49:34.878Z] [BOT] 💾 Added channel posting: Applied Scientist @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T09:49:34.878Z] [BOT] 💾 BEFORE MERGE: 1022 jobs in memory (cached)
[2026-01-31T09:49:34.898Z] [BOT] ✅ Loaded V2 database: 1021 jobs
💾 DISK STATE: 1021 jobs on disk
[2026-01-31T09:49:34.898Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1022
[2026-01-31T09:49:34.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:34.900Z] [BOT] 💾 AFTER MERGE: 1022 jobs (merged disk + memory)
[2026-01-31T09:49:34.901Z] [BOT] ✅ No jobs to archive (all 1022 jobs within 7-day window)
[2026-01-31T09:49:34.963Z] [BOT] 💾 Saved posted_jobs.json: 1022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:36.464Z] [BOT] 📍 [ROUTING] "Research Scientist - Generalist Embodied Agent Research" @ ORG_0890f456
[2026-01-31T09:49:36.465Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:49:36.787Z] [BOT] ✅ Posted message: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456
[2026-01-31T09:49:36.788Z] [BOT] 💾 Added channel posting: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T09:49:36.788Z] [BOT] 💾 BEFORE MERGE: 1023 jobs in memory (cached)
[2026-01-31T09:49:36.815Z] [BOT] ✅ Loaded V2 database: 1022 jobs
💾 DISK STATE: 1022 jobs on disk
[2026-01-31T09:49:36.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1023
[2026-01-31T09:49:36.818Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:36.818Z] [BOT] 💾 AFTER MERGE: 1023 jobs (merged disk + memory)
[2026-01-31T09:49:36.819Z] [BOT] ✅ No jobs to archive (all 1023 jobs within 7-day window)
[2026-01-31T09:49:36.893Z] [BOT] 💾 Saved posted_jobs.json: 1023 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:41.395Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-31T09:49:41.396Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_360a4ee5
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T09:49:41.396Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:49:41.560Z] [BOT] ✅ Posted message: Data Analyst @ ORG_360a4ee5 in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_360a4ee5
[2026-01-31T09:49:41.560Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_360a4ee5 → category channel (1 total channels)
[2026-01-31T09:49:41.561Z] [BOT] 💾 BEFORE MERGE: 1024 jobs in memory (cached)
[2026-01-31T09:49:41.578Z] [BOT] ✅ Loaded V2 database: 1023 jobs
💾 DISK STATE: 1023 jobs on disk
[2026-01-31T09:49:41.579Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1024
[2026-01-31T09:49:41.581Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:41.581Z] [BOT] 💾 AFTER MERGE: 1024 jobs (merged disk + memory)
[2026-01-31T09:49:41.581Z] [BOT] ✅ No jobs to archive (all 1024 jobs within 7-day window)
[2026-01-31T09:49:41.639Z] [BOT] 💾 Saved posted_jobs.json: 1024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:43.328Z] [BOT] ✅ Posted message: Data Analyst @ ORG_360a4ee5 in #🗽・JID_98d4f0de
[2026-01-31T09:49:43.328Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T09:49:43.329Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_360a4ee5 → location channel (2 total channels)
[2026-01-31T09:49:43.329Z] [BOT] 💾 BEFORE MERGE: 1024 jobs in memory (cached)
[2026-01-31T09:49:43.348Z] [BOT] ✅ Loaded V2 database: 1024 jobs
💾 DISK STATE: 1024 jobs on disk
[2026-01-31T09:49:43.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1024
[2026-01-31T09:49:43.351Z] [BOT] 🔀 Deep merged: Data Analyst @ ORG_360a4ee5 (disk: 1 channels → merged: 2 channels)
[2026-01-31T09:49:43.351Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1024 jobs (merged disk + memory)
[2026-01-31T09:49:43.352Z] [BOT] ✅ No jobs to archive (all 1024 jobs within 7-day window)
[2026-01-31T09:49:43.423Z] [BOT] 💾 Saved posted_jobs.json: 1024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:44.923Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_692aa04a
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-31T09:49:44.923Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:49:45.170Z] [BOT] ✅ Posted message: Data Analyst @ ORG_692aa04a in #📊・JID_fb739488
[2026-01-31T09:49:45.170Z] [BOT] ✅ Industry: Data Analyst @ ORG_692aa04a
[2026-01-31T09:49:45.171Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_692aa04a → category channel (1 total channels)
[2026-01-31T09:49:45.171Z] [BOT] 💾 BEFORE MERGE: 1025 jobs in memory (cached)
[2026-01-31T09:49:45.189Z] [BOT] ✅ Loaded V2 database: 1024 jobs
💾 DISK STATE: 1024 jobs on disk
[2026-01-31T09:49:45.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1025
[2026-01-31T09:49:45.192Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1025 jobs (merged disk + memory)
[2026-01-31T09:49:45.193Z] [BOT] ✅ No jobs to archive (all 1025 jobs within 7-day window)
[2026-01-31T09:49:45.254Z] [BOT] 💾 Saved posted_jobs.json: 1025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:46.757Z] [BOT] 📍 [ROUTING] "Data Analytics Engineer" @ ORG_1292a8d0
[2026-01-31T09:49:46.757Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:49:47.037Z] [BOT] ✅ Posted message: Data Analytics Engineer @ ORG_1292a8d0 in #📊・JID_fb739488
[2026-01-31T09:49:47.037Z] [BOT] ✅ Industry: Data Analytics Engineer @ ORG_1292a8d0
[2026-01-31T09:49:47.038Z] [BOT] 💾 Added channel posting: Data Analytics Engineer @ ORG_1292a8d0 → category channel (1 total channels)
[2026-01-31T09:49:47.038Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory (cached)
[2026-01-31T09:49:47.058Z] [BOT] ✅ Loaded V2 database: 1025 jobs
💾 DISK STATE: 1025 jobs on disk
[2026-01-31T09:49:47.058Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1026
[2026-01-31T09:49:47.060Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:47.060Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-31T09:49:47.061Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-31T09:49:47.132Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
[2026-01-31T09:49:47.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:51.635Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-31T09:49:51.637Z] [BOT] 📍 [ROUTING] "Digital Marketing Analyst 1" @ ORG_83f14822
[2026-01-31T09:49:51.637Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:49:51.822Z] [BOT] ✅ Posted message: Digital Marketing Analyst 1 @ ORG_83f14822 in #💻・tech-jobs
[2026-01-31T09:49:51.822Z] [BOT] ✅ Industry: Digital Marketing Analyst 1 @ ORG_83f14822
[2026-01-31T09:49:51.822Z] [BOT] 💾 Added channel posting: Digital Marketing Analyst 1 @ ORG_83f14822 → category channel (1 total channels)
[2026-01-31T09:49:51.822Z] [BOT] 💾 BEFORE MERGE: 1027 jobs in memory (cached)
[2026-01-31T09:49:51.841Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-31T09:49:51.841Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1027
[2026-01-31T09:49:51.843Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1027 jobs (merged disk + memory)
[2026-01-31T09:49:51.844Z] [BOT] ✅ No jobs to archive (all 1027 jobs within 7-day window)
[2026-01-31T09:49:51.902Z] [BOT] 💾 Saved posted_jobs.json: 1027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:53.405Z] [BOT] 📍 [ROUTING] "Software Engineer - Ent" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:49:53.612Z] [BOT] ✅ Posted message: Software Engineer - Ent @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Ent @ ORG_f3f2248d Grumman
[2026-01-31T09:49:53.612Z] [BOT] 💾 Added channel posting: Software Engineer - Ent @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-31T09:49:53.612Z] [BOT] 💾 BEFORE MERGE: 1028 jobs in memory (cached)
[2026-01-31T09:49:53.632Z] [BOT] ✅ Loaded V2 database: 1027 jobs
💾 DISK STATE: 1027 jobs on disk
[2026-01-31T09:49:53.632Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1028
[2026-01-31T09:49:53.634Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:53.634Z] [BOT] 💾 AFTER MERGE: 1028 jobs (merged disk + memory)
[2026-01-31T09:49:53.635Z] [BOT] ✅ No jobs to archive (all 1028 jobs within 7-day window)
[2026-01-31T09:49:53.706Z] [BOT] 💾 Saved posted_jobs.json: 1028 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:49:58.207Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T09:49:58.208Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_67f5d2e5-..." not found, but found as SHA256 "b16ab50a118c53a9"
⏭️  Skipping duplicate: JID_5e31ce58 (posted within 7 days)
[2026-01-31T09:49:58.209Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ed688b48-..." not found, but found as SHA256 "fcd2bf81dd8b1629"
⏭️  Skipping duplicate: JID_49021814 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_319f4ddd..." not found, but found as SHA256 "d268201c21395254"
⏭️  Skipping duplicate: JID_319f4ddd (posted within 7 days)
[2026-01-31T09:49:58.210Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e099b532-..." not found, but found as SHA256 "bc566aaa8dbccd89"
⏭️  Skipping duplicate: JID_aed7440b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4a84ea12..." not found, but found as SHA256 "277e128e643bc007"
⏭️  Skipping duplicate: JID_5f6db3d5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_45633352..." not found, but found as SHA256 "eee2a93526af42c5"
⏭️  Skipping duplicate: JID_f18f7721-analyst_r105711 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a1307256..." not found, but found as SHA256 "cb6cd019c3c8c038"
⏭️  Skipping duplicate: JID_3826ac21 (posted within 7 days)
[2026-01-31T09:49:58.210Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e3128470-northrop_grumm..." not found, but found as SHA256 "6e96ccc47574d0b0"
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_d9435324-_r10216983 (posted within 7 days)
[2026-01-31T09:49:58.210Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "2cc448957d37492f"
[2026-01-31T09:49:58.210Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_c174e875-engineer_r157087 (posted within 7 days)
[2026-01-31T09:49:58.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "6abdc861ad76da92"
⏭️  Skipping duplicate: JID_1fa6454f-2026_jr2009294 (posted within 7 days)
[2026-01-31T09:49:58.323Z] [BOT] ✅ Loaded pending queue: 2949 total (1917 pending, 43 enriched, 989 posted)
[2026-01-31T09:49:58.485Z] [BOT] ✅ Saved pending queue: 2949 total (1917 pending, 33 enriched, 999 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T09:49:58.486Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T09:49:58.570Z] [BOT] 📂 Loaded 11080 existing routing entries
[2026-01-31T09:49:58.696Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11090
[2026-01-31T09:49:58.696Z] [BOT] Timestamp: 2026-01-31T09:49:58.652Z
[2026-01-31T09:49:58.696Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T09:49:58.697Z] [BOT] Total attempts: 32
   Successful: 11
   Failed: 0
   Skipped: 21
[2026-01-31T09:49:58.697Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T09:49:58.697Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #📊・JID_fb739488: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T09:49:58.697Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T09:49:58.697Z] [BOT] 💾 BEFORE MERGE: 1028 jobs in memory (cached)
[2026-01-31T09:49:58.720Z] [BOT] ✅ Loaded V2 database: 1028 jobs
💾 DISK STATE: 1028 jobs on disk
[2026-01-31T09:49:58.720Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1028
[2026-01-31T09:49:58.722Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:49:58.723Z] [BOT] 💾 AFTER MERGE: 1028 jobs (merged disk + memory)
[2026-01-31T09:49:58.723Z] [BOT] ✅ No jobs to archive (all 1028 jobs within 7-day window)
[2026-01-31T09:49:58.805Z] [BOT] 💾 Saved posted_jobs.json: 1028 active jobs
[2026-01-31T09:49:58.805Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T09:50:00.838Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2717) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*