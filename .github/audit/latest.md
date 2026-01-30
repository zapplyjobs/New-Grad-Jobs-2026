# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T16:34:08.202Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T16:33:36.203Z] ========================================
[2026-01-30T16:33:36.205Z] Discord Bot Execution Log
[2026-01-30T16:33:36.205Z] Environment: GitHub Actions
[2026-01-30T16:33:36.205Z] Node Version: v20.20.0
[2026-01-30T16:33:36.205Z] ========================================
[2026-01-30T16:33:36.205Z] Environment Variables Check:
[2026-01-30T16:33:36.205Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T16:33:36.205Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.205Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T16:33:36.205Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T16:33:36.206Z] 
Multi-Channel Configuration:
[2026-01-30T16:33:36.206Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T16:33:36.206Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T16:33:36.206Z] 
Data Files Check:
[2026-01-30T16:33:36.207Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T16:33:36.226Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3452125 bytes)
[2026-01-30T16:33:36.226Z] 
========================================
[2026-01-30T16:33:36.226Z] Starting Enhanced Discord Bot...
[2026-01-30T16:33:36.226Z] ========================================
[2026-01-30T16:33:36.779Z] [BOT] ✅ Loaded V2 database: 537 jobs
[2026-01-30T16:33:37.170Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T16:33:37.170Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T16:33:37.170Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T16:33:37.289Z] [BOT] ✅ Loaded pending queue: 2921 total (2363 pending, 50 enriched, 508 posted)
[2026-01-30T16:33:37.289Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T16:33:37.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T16:33:37.290Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T16:33:37.290Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T16:33:37.291Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T16:33:37.291Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T16:33:37.291Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T16:33:37.291Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T16:33:37.291Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T16:33:37.291Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T16:33:37.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T16:33:37.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T16:33:37.292Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T16:33:37.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T16:33:37.292Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T16:33:37.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T16:33:37.292Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T16:33:37.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-30T16:33:37.293Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T16:33:37.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T16:33:37.293Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T16:33:37.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T16:33:37.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T16:33:37.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-01-30T16:33:37.293Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T16:33:37.300Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T16:33:37.300Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-01-30T16:33:37.300Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-01-30T16:33:37.300Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-01-30T16:33:37.410Z] [BOT] ✅ Loaded pending queue: 2921 total (2363 pending, 50 enriched, 508 posted)
[2026-01-30T16:33:37.592Z] [BOT] ✅ Saved pending queue: 2907 total (2363 pending, 36 enriched, 508 posted)
🗑️ Removed 14 blacklisted jobs from pending queue
[2026-01-30T16:33:37.592Z] [BOT] 📋 After blacklist filter: 22 jobs (14 blacklisted)
[2026-01-30T16:33:37.592Z] [BOT] 📋 After data quality filter: 22 jobs (0 invalid)
[2026-01-30T16:33:37.593Z] [BOT] 📋 After multi-location grouping: 22 unique jobs to post
[2026-01-30T16:33:37.593Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T16:33:37.598Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T16:33:37.598Z] [BOT] 📍 [ROUTING] "Applications Development Engineer - Bbp" @ ORG_fb8c4aa0
[2026-01-30T16:33:37.599Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:33:37.620Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T16:33:37.883Z] [BOT] ✅ Posted message: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 in #💻・tech-jobs
[2026-01-30T16:33:37.883Z] [BOT] ✅ Industry: Applications Development Engineer - Bbp @ ORG_fb8c4aa0
[2026-01-30T16:33:37.884Z] [BOT] 💾 Added channel posting: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 → category channel (1 total channels)
[2026-01-30T16:33:37.884Z] [BOT] 💾 BEFORE MERGE: 538 jobs in memory (cached)
[2026-01-30T16:33:37.896Z] [BOT] ✅ Loaded V2 database: 537 jobs
💾 DISK STATE: 537 jobs on disk
[2026-01-30T16:33:37.896Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=538
[2026-01-30T16:33:37.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:37.898Z] [BOT] 💾 AFTER MERGE: 538 jobs (merged disk + memory)
[2026-01-30T16:33:37.899Z] [BOT] ✅ No jobs to archive (all 538 jobs within 7-day window)
[2026-01-30T16:33:37.934Z] [BOT] 💾 Saved posted_jobs.json: 538 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:39.436Z] [BOT] 📍 [ROUTING] "Salesforce Engineer 1" @ ORG_742553d6 Entertainment
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:33:39.826Z] [BOT] ✅ Posted message: Salesforce Engineer 1 @ ORG_742553d6 Entertainment in #💻・tech-jobs
  ✅ Industry: Salesforce Engineer 1 @ ORG_742553d6 Entertainment
[2026-01-30T16:33:39.827Z] [BOT] 💾 Added channel posting: Salesforce Engineer 1 @ ORG_742553d6 Entertainment → category channel (1 total channels)
[2026-01-30T16:33:39.827Z] [BOT] 💾 BEFORE MERGE: 539 jobs in memory (cached)
[2026-01-30T16:33:39.841Z] [BOT] ✅ Loaded V2 database: 538 jobs
[2026-01-30T16:33:39.842Z] [BOT] 💾 DISK STATE: 538 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=539
[2026-01-30T16:33:39.843Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:39.843Z] [BOT] 💾 AFTER MERGE: 539 jobs (merged disk + memory)
[2026-01-30T16:33:39.843Z] [BOT] ✅ No jobs to archive (all 539 jobs within 7-day window)
[2026-01-30T16:33:39.876Z] [BOT] 💾 Saved posted_jobs.json: 539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:44.378Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T16:33:44.378Z] [BOT] 📍 [ROUTING] "Software Engineer - AI & Full Stack Development" @ ORG_fb8c4aa0
   Category: AI (matched: "AI/ML")
[2026-01-30T16:33:44.378Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T16:33:44.689Z] [BOT] ✅ Posted message: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0
[2026-01-30T16:33:44.690Z] [BOT] 💾 Added channel posting: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 → category channel (1 total channels)
[2026-01-30T16:33:44.690Z] [BOT] 💾 BEFORE MERGE: 540 jobs in memory (cached)
[2026-01-30T16:33:44.703Z] [BOT] ✅ Loaded V2 database: 539 jobs
💾 DISK STATE: 539 jobs on disk
[2026-01-30T16:33:44.704Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=540
[2026-01-30T16:33:44.705Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:44.705Z] [BOT] 💾 AFTER MERGE: 540 jobs (merged disk + memory)
[2026-01-30T16:33:44.705Z] [BOT] ✅ No jobs to archive (all 540 jobs within 7-day window)
[2026-01-30T16:33:44.740Z] [BOT] 💾 Saved posted_jobs.json: 540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:49.241Z] [BOT] 📌 Posting 7 jobs to #💰・finance-jobs
[2026-01-30T16:33:49.241Z] [BOT] 📍 [ROUTING] "Entry Level Bridge Inspector" @ ORG_28592017 Fleming
[2026-01-30T16:33:49.242Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:49.406Z] [BOT] ✅ Posted message: Entry Level Bridge Inspector @ ORG_28592017 Fleming in #💰・finance-jobs
  ✅ Industry: Entry Level Bridge Inspector @ ORG_28592017 Fleming
[2026-01-30T16:33:49.407Z] [BOT] 💾 Added channel posting: Entry Level Bridge Inspector @ ORG_28592017 Fleming → category channel (1 total channels)
💾 BEFORE MERGE: 541 jobs in memory (cached)
[2026-01-30T16:33:49.426Z] [BOT] ✅ Loaded V2 database: 540 jobs
💾 DISK STATE: 540 jobs on disk
[2026-01-30T16:33:49.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=541
[2026-01-30T16:33:49.427Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:49.427Z] [BOT] 💾 AFTER MERGE: 541 jobs (merged disk + memory)
[2026-01-30T16:33:49.428Z] [BOT] ✅ No jobs to archive (all 541 jobs within 7-day window)
[2026-01-30T16:33:49.473Z] [BOT] 💾 Saved posted_jobs.json: 541 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:50.975Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (West - State)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:51.213Z] [BOT] ✅ Posted message: Enterprise Account Executive (West - State) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (West - State) @ verkada
[2026-01-30T16:33:51.213Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (West - State) @ verkada → category channel (1 total channels)
[2026-01-30T16:33:51.213Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-30T16:33:51.225Z] [BOT] ✅ Loaded V2 database: 541 jobs
💾 DISK STATE: 541 jobs on disk
[2026-01-30T16:33:51.225Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-30T16:33:51.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-30T16:33:51.227Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-30T16:33:51.267Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:52.769Z] [BOT] 📍 [ROUTING] "Account Executive, Select, Austin" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:52.961Z] [BOT] ✅ Posted message: Account Executive, Select, Austin @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Select, Austin @ verkada
[2026-01-30T16:33:52.962Z] [BOT] 💾 Added channel posting: Account Executive, Select, Austin @ verkada → category channel (1 total channels)
[2026-01-30T16:33:52.962Z] [BOT] 💾 BEFORE MERGE: 543 jobs in memory (cached)
[2026-01-30T16:33:52.976Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
[2026-01-30T16:33:52.976Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=543
[2026-01-30T16:33:52.977Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:52.977Z] [BOT] 💾 AFTER MERGE: 543 jobs (merged disk + memory)
[2026-01-30T16:33:52.978Z] [BOT] ✅ No jobs to archive (all 543 jobs within 7-day window)
[2026-01-30T16:33:53.013Z] [BOT] 💾 Saved posted_jobs.json: 543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:54.515Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-30T16:33:54.515Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:54.728Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T16:33:54.728Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T16:33:54.728Z] [BOT] 💾 BEFORE MERGE: 544 jobs in memory (cached)
[2026-01-30T16:33:54.738Z] [BOT] ✅ Loaded V2 database: 543 jobs
💾 DISK STATE: 543 jobs on disk
[2026-01-30T16:33:54.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=544
[2026-01-30T16:33:54.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:54.740Z] [BOT] 💾 AFTER MERGE: 544 jobs (merged disk + memory)
[2026-01-30T16:33:54.741Z] [BOT] ✅ No jobs to archive (all 544 jobs within 7-day window)
[2026-01-30T16:33:54.776Z] [BOT] 💾 Saved posted_jobs.json: 544 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:56.279Z] [BOT] 📍 [ROUTING] "Channel Development Representative, South East (Tampa)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:56.793Z] [BOT] ✅ Posted message: Channel Development Representative, South East (Tampa) @ verkada in #💰・finance-jobs
[2026-01-30T16:33:56.793Z] [BOT] ✅ Industry: Channel Development Representative, South East (Tampa) @ verkada
[2026-01-30T16:33:56.793Z] [BOT] 💾 Added channel posting: Channel Development Representative, South East (Tampa) @ verkada → category channel (1 total channels)
[2026-01-30T16:33:56.793Z] [BOT] 💾 BEFORE MERGE: 545 jobs in memory (cached)
[2026-01-30T16:33:56.804Z] [BOT] ✅ Loaded V2 database: 544 jobs
💾 DISK STATE: 544 jobs on disk
[2026-01-30T16:33:56.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=545
[2026-01-30T16:33:56.806Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:56.806Z] [BOT] 💾 AFTER MERGE: 545 jobs (merged disk + memory)
[2026-01-30T16:33:56.806Z] [BOT] ✅ No jobs to archive (all 545 jobs within 7-day window)
[2026-01-30T16:33:56.839Z] [BOT] 💾 Saved posted_jobs.json: 545 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:33:58.341Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Phoenix) " @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T16:33:58.341Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:33:58.614Z] [BOT] ✅ Posted message: Channel Development Representative, West (Phoenix)  @ verkada in #💰・finance-jobs
  ✅ Industry: Channel Development Representative, West (Phoenix)  @ verkada
[2026-01-30T16:33:58.615Z] [BOT] 💾 Added channel posting: Channel Development Representative, West (Phoenix)  @ verkada → category channel (1 total channels)
[2026-01-30T16:33:58.615Z] [BOT] 💾 BEFORE MERGE: 546 jobs in memory (cached)
[2026-01-30T16:33:58.627Z] [BOT] ✅ Loaded V2 database: 545 jobs
💾 DISK STATE: 545 jobs on disk
[2026-01-30T16:33:58.627Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=546
[2026-01-30T16:33:58.628Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:33:58.628Z] [BOT] 💾 AFTER MERGE: 546 jobs (merged disk + memory)
[2026-01-30T16:33:58.629Z] [BOT] ✅ No jobs to archive (all 546 jobs within 7-day window)
[2026-01-30T16:33:58.662Z] [BOT] 💾 Saved posted_jobs.json: 546 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:34:00.164Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Salt Lake City)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T16:34:00.165Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:34:00.341Z] [BOT] ✅ Posted message: Channel Development Representative, West (Salt Lake City) @ verkada in #💰・finance-jobs
  ✅ Industry: Channel Development Representative, West (Salt Lake City) @ verkada
[2026-01-30T16:34:00.341Z] [BOT] 💾 Added channel posting: Channel Development Representative, West (Salt Lake City) @ verkada → category channel (1 total channels)
[2026-01-30T16:34:00.342Z] [BOT] 💾 BEFORE MERGE: 547 jobs in memory (cached)
[2026-01-30T16:34:00.352Z] [BOT] ✅ Loaded V2 database: 546 jobs
💾 DISK STATE: 546 jobs on disk
[2026-01-30T16:34:00.353Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=547
[2026-01-30T16:34:00.354Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:34:00.354Z] [BOT] 💾 AFTER MERGE: 547 jobs (merged disk + memory)
[2026-01-30T16:34:00.354Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2026-01-30T16:34:00.388Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:34:04.890Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T16:34:04.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_00215b22..." not found, but found as SHA256 "9c6d4b5e5d3180d1"
⏭️  Skipping duplicate: JID_03417608-bbp_2531350-2 (posted within 7 days)
[2026-01-30T16:34:04.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d3d0ea4..." not found, but found as SHA256 "ed8c64ba89ab6b70"
⏭️  Skipping duplicate: JID_7e87f1bd-development_2531265-1 (posted within 7 days)
[2026-01-30T16:34:04.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_104bd934..." not found, but found as SHA256 "c1905f2e104ed8fe"
⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78686 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0a58bd28..." not found, but found as SHA256 "d3b2fe4a453d574d"
⏭️  Skipping duplicate: JID_d58bd40e (posted within 7 days)
[2026-01-30T16:34:04.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "3aae5f780ebf437d"
⏭️  Skipping duplicate: JID_e54c34e3 (posted within 7 days)
[2026-01-30T16:34:04.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ddd7bef8..." not found, but found as SHA256 "dda5eae8b78fde99"
⏭️  Skipping duplicate: JID_9601d5e9 (posted within 7 days)
[2026-01-30T16:34:04.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "aa922a8b8071ea92"
⏭️  Skipping duplicate: JID_1d4d6326 (posted within 7 days)
[2026-01-30T16:34:04.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "a9a3c1247563d8b4"
[2026-01-30T16:34:04.892Z] [BOT] ⏭️  Skipping duplicate: JID_f59a87c2 (posted within 7 days)
[2026-01-30T16:34:04.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "9edbb467e9393434"
[2026-01-30T16:34:04.892Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
[2026-01-30T16:34:04.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "d193a08215df2c0d"
⏭️  Skipping duplicate: JID_1c4bcafd (posted within 7 days)
[2026-01-30T16:34:04.995Z] [BOT] ✅ Loaded pending queue: 2907 total (2363 pending, 36 enriched, 508 posted)
[2026-01-30T16:34:05.188Z] [BOT] ✅ Saved pending queue: 2907 total (2363 pending, 26 enriched, 518 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T16:34:05.188Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T16:34:05.274Z] [BOT] 📂 Loaded 10599 existing routing entries
[2026-01-30T16:34:05.414Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T16:34:05.414Z] [BOT] Total entries: 10609
   Timestamp: 2026-01-30T16:34:05.370Z
[2026-01-30T16:34:05.414Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T16:34:05.415Z] [BOT] Total attempts: 38
   Successful: 10
   Failed: 0
   Skipped: 28
[2026-01-30T16:34:05.415Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T16:34:05.415Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 7 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-30T16:34:05.415Z] [BOT] 3. #🤖・ai-jobs: 1 posts
[2026-01-30T16:34:05.415Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T16:34:05.415Z] [BOT] 💾 BEFORE MERGE: 547 jobs in memory (cached)
[2026-01-30T16:34:05.428Z] [BOT] ✅ Loaded V2 database: 547 jobs
💾 DISK STATE: 547 jobs on disk
[2026-01-30T16:34:05.429Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=547
[2026-01-30T16:34:05.430Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:34:05.430Z] [BOT] 💾 AFTER MERGE: 547 jobs (merged disk + memory)
[2026-01-30T16:34:05.431Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2026-01-30T16:34:05.465Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:34:05.465Z] [BOT] ✅ Database saved successfully
[2026-01-30T16:34:07.494Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*