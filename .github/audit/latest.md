# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T01:09:46.803Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T01:09:08.629Z] ========================================
[2026-02-01T01:09:08.631Z] Discord Bot Execution Log
[2026-02-01T01:09:08.631Z] Environment: GitHub Actions
[2026-02-01T01:09:08.632Z] Node Version: v20.20.0
[2026-02-01T01:09:08.632Z] ========================================
[2026-02-01T01:09:08.632Z] Environment Variables Check:
[2026-02-01T01:09:08.632Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T01:09:08.632Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.632Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T01:09:08.632Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T01:09:08.632Z] 
Multi-Channel Configuration:
[2026-02-01T01:09:08.632Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.632Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T01:09:08.633Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T01:09:08.633Z] 
Data Files Check:
[2026-02-01T01:09:08.634Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69182 bytes)
[2026-02-01T01:09:08.682Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8777728 bytes)
[2026-02-01T01:09:08.682Z] 
========================================
[2026-02-01T01:09:08.682Z] Starting Enhanced Discord Bot...
[2026-02-01T01:09:08.682Z] ========================================
[2026-02-01T01:09:09.276Z] [BOT] ✅ Loaded V2 database: 1557 jobs
[2026-02-01T01:09:10.047Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T01:09:10.047Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T01:09:10.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T01:09:10.173Z] [BOT] ✅ Loaded pending queue: 2947 total (1350 pending, 50 enriched, 1547 posted)
[2026-02-01T01:09:10.174Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T01:09:10.175Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T01:09:10.175Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T01:09:10.175Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T01:09:10.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T01:09:10.176Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T01:09:10.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T01:09:10.177Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T01:09:10.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T01:09:10.177Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T01:09:10.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T01:09:10.178Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T01:09:10.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T01:09:10.178Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T01:09:10.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T01:09:10.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T01:09:10.179Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T01:09:10.192Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T01:09:10.192Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow - Department of Computer Science at University of Texas - Austin
[2026-02-01T01:09:10.193Z] [BOT] 🚫 Skipping blacklisted job: Area Director - Sales at nominal
[2026-02-01T01:09:10.193Z] [BOT] 🚫 Skipping blacklisted job: Area Director - Sales at nominal
🚫 Skipping blacklisted job: Area Director - Sales at nominal
🚫 Skipping blacklisted job: Lead Sales Engineer at nominal
[2026-02-01T01:09:10.328Z] [BOT] ✅ Loaded pending queue: 2947 total (1350 pending, 50 enriched, 1547 posted)
[2026-02-01T01:09:10.523Z] [BOT] ✅ Saved pending queue: 2942 total (1350 pending, 45 enriched, 1547 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-02-01T01:09:10.523Z] [BOT] 📋 After blacklist filter: 37 jobs (5 blacklisted)
📋 After data quality filter: 37 jobs (0 invalid)
[2026-02-01T01:09:10.524Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-02-01T01:09:10.524Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
[2026-02-01T01:09:10.524Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T01:09:10.526Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T01:09:10.528Z] [BOT] 📍 [ROUTING] "Payroll Specialist" @ spotify
[2026-02-01T01:09:10.528Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T01:09:10.545Z] [BOT ERROR] (node:3221) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T01:09:10.713Z] [BOT] ✅ Posted message: Payroll Specialist @ spotify in #🤖・ai-jobs
[2026-02-01T01:09:10.713Z] [BOT] ✅ Industry: Payroll Specialist @ spotify
[2026-02-01T01:09:10.714Z] [BOT] 💾 Added channel posting: Payroll Specialist @ spotify → category channel (1 total channels)
[2026-02-01T01:09:10.714Z] [BOT] 💾 BEFORE MERGE: 1558 jobs in memory (cached)
[2026-02-01T01:09:10.748Z] [BOT] ✅ Loaded V2 database: 1557 jobs
💾 DISK STATE: 1557 jobs on disk
[2026-02-01T01:09:10.749Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1558
[2026-02-01T01:09:10.753Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:10.753Z] [BOT] 💾 AFTER MERGE: 1558 jobs (merged disk + memory)
[2026-02-01T01:09:10.754Z] [BOT] ✅ No jobs to archive (all 1558 jobs within 7-day window)
[2026-02-01T01:09:10.858Z] [BOT] 💾 Saved posted_jobs.json: 1558 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:12.519Z] [BOT] ✅ Posted message: Payroll Specialist @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T01:09:12.519Z] [BOT] 💾 Added channel posting: Payroll Specialist @ spotify → location channel (2 total channels)
[2026-02-01T01:09:12.520Z] [BOT] 💾 BEFORE MERGE: 1558 jobs in memory (cached)
[2026-02-01T01:09:12.552Z] [BOT] ✅ Loaded V2 database: 1558 jobs
[2026-02-01T01:09:12.552Z] [BOT] 💾 DISK STATE: 1558 jobs on disk
[2026-02-01T01:09:12.552Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1558
[2026-02-01T01:09:12.556Z] [BOT] 🔀 Deep merged: Payroll Specialist @ spotify (disk: 1 channels → merged: 2 channels)
[2026-02-01T01:09:12.556Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1558 jobs (merged disk + memory)
[2026-02-01T01:09:12.557Z] [BOT] ✅ No jobs to archive (all 1558 jobs within 7-day window)
[2026-02-01T01:09:12.645Z] [BOT] 💾 Saved posted_jobs.json: 1558 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:14.146Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grads: Fall 2025/Spring 2026" @ ORG_2e5592d2 Technologies
[2026-02-01T01:09:14.146Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T01:09:14.296Z] [BOT] ✅ Posted message: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies in #🤖・ai-jobs
[2026-02-01T01:09:14.296Z] [BOT] ✅ Industry: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies
[2026-02-01T01:09:14.297Z] [BOT] 💾 Added channel posting: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies → category channel (1 total channels)
[2026-02-01T01:09:14.297Z] [BOT] 💾 BEFORE MERGE: 1559 jobs in memory (cached)
[2026-02-01T01:09:14.331Z] [BOT] ✅ Loaded V2 database: 1558 jobs
💾 DISK STATE: 1558 jobs on disk
[2026-02-01T01:09:14.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1559
[2026-02-01T01:09:14.335Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:14.335Z] [BOT] 💾 AFTER MERGE: 1559 jobs (merged disk + memory)
[2026-02-01T01:09:14.336Z] [BOT] ✅ No jobs to archive (all 1559 jobs within 7-day window)
[2026-02-01T01:09:14.430Z] [BOT] 💾 Saved posted_jobs.json: 1559 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:15.932Z] [BOT] 📍 [ROUTING] "Scientific Data Engineer" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T01:09:15.932Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T01:09:16.190Z] [BOT] ✅ Posted message: Scientific Data Engineer @ ORG_6a1ef406 in #🤖・ai-jobs
  ✅ Industry: Scientific Data Engineer @ ORG_6a1ef406
[2026-02-01T01:09:16.191Z] [BOT] 💾 Added channel posting: Scientific Data Engineer @ ORG_6a1ef406 → category channel (1 total channels)
[2026-02-01T01:09:16.191Z] [BOT] 💾 BEFORE MERGE: 1560 jobs in memory (cached)
[2026-02-01T01:09:16.227Z] [BOT] ✅ Loaded V2 database: 1559 jobs
💾 DISK STATE: 1559 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1560
[2026-02-01T01:09:16.234Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:16.234Z] [BOT] 💾 AFTER MERGE: 1560 jobs (merged disk + memory)
[2026-02-01T01:09:16.236Z] [BOT] ✅ No jobs to archive (all 1560 jobs within 7-day window)
[2026-02-01T01:09:16.328Z] [BOT] 💾 Saved posted_jobs.json: 1560 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:20.830Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T01:09:20.831Z] [BOT] 📍 [ROUTING] "Software Engineer - Kernels" @ ORG_cdec6f53
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:21.026Z] [BOT] ✅ Posted message: Software Engineer - Kernels @ ORG_cdec6f53 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Kernels @ ORG_cdec6f53
[2026-02-01T01:09:21.027Z] [BOT] 💾 Added channel posting: Software Engineer - Kernels @ ORG_cdec6f53 → category channel (1 total channels)
[2026-02-01T01:09:21.027Z] [BOT] 💾 BEFORE MERGE: 1561 jobs in memory (cached)
[2026-02-01T01:09:21.058Z] [BOT] ✅ Loaded V2 database: 1560 jobs
💾 DISK STATE: 1560 jobs on disk
[2026-02-01T01:09:21.058Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1561
[2026-02-01T01:09:21.061Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:21.062Z] [BOT] 💾 AFTER MERGE: 1561 jobs (merged disk + memory)
[2026-02-01T01:09:21.062Z] [BOT] ✅ No jobs to archive (all 1561 jobs within 7-day window)
[2026-02-01T01:09:21.142Z] [BOT] 💾 Saved posted_jobs.json: 1561 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:22.645Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_02281b3b Stanley
[2026-02-01T01:09:22.645Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:22.950Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-02-01T01:09:22.950Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_02281b3b Stanley
[2026-02-01T01:09:22.950Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_02281b3b Stanley → category channel (1 total channels)
[2026-02-01T01:09:22.951Z] [BOT] 💾 BEFORE MERGE: 1562 jobs in memory (cached)
[2026-02-01T01:09:22.981Z] [BOT] ✅ Loaded V2 database: 1561 jobs
💾 DISK STATE: 1561 jobs on disk
[2026-02-01T01:09:22.981Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1562
[2026-02-01T01:09:22.984Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:22.984Z] [BOT] 💾 AFTER MERGE: 1562 jobs (merged disk + memory)
[2026-02-01T01:09:22.985Z] [BOT] ✅ No jobs to archive (all 1562 jobs within 7-day window)
[2026-02-01T01:09:23.079Z] [BOT] 💾 Saved posted_jobs.json: 1562 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:24.826Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-02-01T01:09:24.827Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T01:09:24.827Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-02-01T01:09:24.827Z] [BOT] 💾 BEFORE MERGE: 1562 jobs in memory (cached)
[2026-02-01T01:09:24.858Z] [BOT] ✅ Loaded V2 database: 1562 jobs
💾 DISK STATE: 1562 jobs on disk
[2026-02-01T01:09:24.858Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1562
[2026-02-01T01:09:24.861Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_02281b3b Stanley (disk: 1 channels → merged: 2 channels)
[2026-02-01T01:09:24.861Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1562 jobs (merged disk + memory)
[2026-02-01T01:09:24.862Z] [BOT] ✅ No jobs to archive (all 1562 jobs within 7-day window)
[2026-02-01T01:09:24.951Z] [BOT] 💾 Saved posted_jobs.json: 1562 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:26.453Z] [BOT] 📍 [ROUTING] "Software Engineer - Hardware Test & Automation - Optical Payloads" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-02-01T01:09:26.453Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:26.631Z] [BOT] ✅ Posted message: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 in #💻・tech-jobs
[2026-02-01T01:09:26.631Z] [BOT] ✅ Industry: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1
[2026-02-01T01:09:26.632Z] [BOT] 💾 Added channel posting: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T01:09:26.632Z] [BOT] 💾 BEFORE MERGE: 1563 jobs in memory (cached)
[2026-02-01T01:09:26.664Z] [BOT] ✅ Loaded V2 database: 1562 jobs
💾 DISK STATE: 1562 jobs on disk
[2026-02-01T01:09:26.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1563
[2026-02-01T01:09:26.667Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:26.667Z] [BOT] 💾 AFTER MERGE: 1563 jobs (merged disk + memory)
[2026-02-01T01:09:26.668Z] [BOT] ✅ No jobs to archive (all 1563 jobs within 7-day window)
[2026-02-01T01:09:26.758Z] [BOT] 💾 Saved posted_jobs.json: 1563 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:28.259Z] [BOT] 📍 [ROUTING] "Frontend Engineer – New Grad" @ D3
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:28.404Z] [BOT] ✅ Posted message: Frontend Engineer – New Grad @ D3 in #💻・tech-jobs
  ✅ Industry: Frontend Engineer – New Grad @ D3
[2026-02-01T01:09:28.405Z] [BOT] 💾 Added channel posting: Frontend Engineer – New Grad @ D3 → category channel (1 total channels)
[2026-02-01T01:09:28.405Z] [BOT] 💾 BEFORE MERGE: 1564 jobs in memory (cached)
[2026-02-01T01:09:28.439Z] [BOT] ✅ Loaded V2 database: 1563 jobs
💾 DISK STATE: 1563 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1564
[2026-02-01T01:09:28.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:28.445Z] [BOT] 💾 AFTER MERGE: 1564 jobs (merged disk + memory)
[2026-02-01T01:09:28.446Z] [BOT] ✅ No jobs to archive (all 1564 jobs within 7-day window)
[2026-02-01T01:09:28.540Z] [BOT] 💾 Saved posted_jobs.json: 1564 active jobs
[2026-02-01T01:09:28.541Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:30.043Z] [BOT] 📍 [ROUTING] "Full Stack Engineer – Early Career" @ ORG_f27752c0
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:30.233Z] [BOT] ✅ Posted message: Full Stack Engineer – Early Career @ ORG_f27752c0 in #💻・tech-jobs
  ✅ Industry: Full Stack Engineer – Early Career @ ORG_f27752c0
[2026-02-01T01:09:30.234Z] [BOT] 💾 Added channel posting: Full Stack Engineer – Early Career @ ORG_f27752c0 → category channel (1 total channels)
[2026-02-01T01:09:30.234Z] [BOT] 💾 BEFORE MERGE: 1565 jobs in memory (cached)
[2026-02-01T01:09:30.264Z] [BOT] ✅ Loaded V2 database: 1564 jobs
💾 DISK STATE: 1564 jobs on disk
[2026-02-01T01:09:30.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1565
[2026-02-01T01:09:30.268Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:30.268Z] [BOT] 💾 AFTER MERGE: 1565 jobs (merged disk + memory)
[2026-02-01T01:09:30.269Z] [BOT] ✅ No jobs to archive (all 1565 jobs within 7-day window)
[2026-02-01T01:09:30.356Z] [BOT] 💾 Saved posted_jobs.json: 1565 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:32.041Z] [BOT] ✅ Posted message: Full Stack Engineer – Early Career @ ORG_f27752c0 in #🗽・JID_98d4f0de
[2026-02-01T01:09:32.042Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T01:09:32.042Z] [BOT] 💾 Added channel posting: Full Stack Engineer – Early Career @ ORG_f27752c0 → location channel (2 total channels)
[2026-02-01T01:09:32.042Z] [BOT] 💾 BEFORE MERGE: 1565 jobs in memory (cached)
[2026-02-01T01:09:32.073Z] [BOT] ✅ Loaded V2 database: 1565 jobs
💾 DISK STATE: 1565 jobs on disk
[2026-02-01T01:09:32.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1565
[2026-02-01T01:09:32.076Z] [BOT] 🔀 Deep merged: Full Stack Engineer – Early Career @ ORG_f27752c0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T01:09:32.076Z] [BOT] 💾 AFTER MERGE: 1565 jobs (merged disk + memory)
[2026-02-01T01:09:32.077Z] [BOT] ✅ No jobs to archive (all 1565 jobs within 7-day window)
[2026-02-01T01:09:32.164Z] [BOT] 💾 Saved posted_jobs.json: 1565 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:33.665Z] [BOT] 📍 [ROUTING] "Software Engineer I - Remote Assist" @ ORG_e9de098c Innovation
[2026-02-01T01:09:33.665Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T01:09:33.833Z] [BOT] ✅ Posted message: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation in #💻・tech-jobs
[2026-02-01T01:09:33.834Z] [BOT] ✅ Industry: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation
[2026-02-01T01:09:33.834Z] [BOT] 💾 Added channel posting: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation → category channel (1 total channels)
[2026-02-01T01:09:33.834Z] [BOT] 💾 BEFORE MERGE: 1566 jobs in memory (cached)
[2026-02-01T01:09:33.865Z] [BOT] ✅ Loaded V2 database: 1565 jobs
💾 DISK STATE: 1565 jobs on disk
[2026-02-01T01:09:33.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1566
[2026-02-01T01:09:33.868Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:33.868Z] [BOT] 💾 AFTER MERGE: 1566 jobs (merged disk + memory)
[2026-02-01T01:09:33.869Z] [BOT] ✅ No jobs to archive (all 1566 jobs within 7-day window)
[2026-02-01T01:09:33.956Z] [BOT] 💾 Saved posted_jobs.json: 1566 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:38.458Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T01:09:38.458Z] [BOT] 📍 [ROUTING] "Junior Software Engineer - Software Engineer" @ ORG_ce460410
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T01:09:38.459Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T01:09:38.692Z] [BOT] ✅ Posted message: Junior Software Engineer - Software Engineer @ ORG_ce460410 in #📊・JID_fb739488
  ✅ Industry: Junior Software Engineer - Software Engineer @ ORG_ce460410
[2026-02-01T01:09:38.692Z] [BOT] 💾 Added channel posting: Junior Software Engineer - Software Engineer @ ORG_ce460410 → category channel (1 total channels)
[2026-02-01T01:09:38.692Z] [BOT] 💾 BEFORE MERGE: 1567 jobs in memory (cached)
[2026-02-01T01:09:38.727Z] [BOT] ✅ Loaded V2 database: 1566 jobs
💾 DISK STATE: 1566 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1567
[2026-02-01T01:09:38.733Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:38.734Z] [BOT] 💾 AFTER MERGE: 1567 jobs (merged disk + memory)
[2026-02-01T01:09:38.736Z] [BOT] ✅ No jobs to archive (all 1567 jobs within 7-day window)
[2026-02-01T01:09:38.832Z] [BOT] 💾 Saved posted_jobs.json: 1567 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:43.333Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T01:09:43.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_558aba59..." not found, but found as SHA256 "921cfb32a6f89b2f"
[2026-02-01T01:09:43.335Z] [BOT] ⏭️  Skipping duplicate: JID_8612d4b2 (posted within 7 days)
[2026-02-01T01:09:43.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3593b687..." not found, but found as SHA256 "4a5686cb13cf1b33"
[2026-02-01T01:09:43.335Z] [BOT] ⏭️  Skipping duplicate: JID_74032a0e (posted within 7 days)
[2026-02-01T01:09:43.336Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ac75b0ce..." not found, but found as SHA256 "2b480db9c2262d8d"
⏭️  Skipping duplicate: JID_cbfee1f8-engineer_pt-jr021580 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_22f464e7..." not found, but found as SHA256 "6a876634dfb837f9"
⏭️  Skipping duplicate: JID_83c2739e (posted within 7 days)
[2026-02-01T01:09:43.336Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45e86e5d..." not found, but found as SHA256 "80849431039182b0"
[2026-02-01T01:09:43.336Z] [BOT] ⏭️  Skipping duplicate: JID_fafdd972 (posted within 7 days)
[2026-02-01T01:09:43.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63864911..." not found, but found as SHA256 "8d7c7cf91a4c5c05"
[2026-02-01T01:09:43.337Z] [BOT] ⏭️  Skipping duplicate: JID_63864911 (posted within 7 days)
[2026-02-01T01:09:43.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e79bec0..." not found, but found as SHA256 "c26ea0bd8c442fce"
[2026-02-01T01:09:43.337Z] [BOT] ⏭️  Skipping duplicate: JID_b92b1652 (posted within 7 days)
[2026-02-01T01:09:43.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08e041d9-..." not found, but found as SHA256 "6c8004b2b9116b80"
⏭️  Skipping duplicate: JID_8ee30c28 (posted within 7 days)
[2026-02-01T01:09:43.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b5408d87..." not found, but found as SHA256 "4c1f8c6deb91a594"
[2026-02-01T01:09:43.337Z] [BOT] ⏭️  Skipping duplicate: JID_b5408d87 (posted within 7 days)
[2026-02-01T01:09:43.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_56cd3275-..." not found, but found as SHA256 "4518d073b49f7183"
[2026-02-01T01:09:43.338Z] [BOT] ⏭️  Skipping duplicate: JID_625785e1 (posted within 7 days)
[2026-02-01T01:09:43.456Z] [BOT] ✅ Loaded pending queue: 2942 total (1350 pending, 45 enriched, 1547 posted)
[2026-02-01T01:09:43.645Z] [BOT] ✅ Saved pending queue: 2942 total (1350 pending, 35 enriched, 1557 posted)
[2026-02-01T01:09:43.645Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T01:09:43.734Z] [BOT] 📂 Loaded 11638 existing routing entries
[2026-02-01T01:09:43.886Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T01:09:43.887Z] [BOT] New entries: 10
   Total entries: 11648
   Timestamp: 2026-02-01T01:09:43.839Z
[2026-02-01T01:09:43.888Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T01:09:43.888Z] [BOT] Total attempts: 26
   Successful: 13
   Failed: 0
   Skipped: 13
[2026-02-01T01:09:43.888Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
[2026-02-01T01:09:43.888Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #📊・JID_fb739488: 1 posts
[2026-02-01T01:09:43.890Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1567 jobs in memory (cached)
[2026-02-01T01:09:43.919Z] [BOT] ✅ Loaded V2 database: 1567 jobs
💾 DISK STATE: 1567 jobs on disk
[2026-02-01T01:09:43.921Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1567
[2026-02-01T01:09:43.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T01:09:43.924Z] [BOT] 💾 AFTER MERGE: 1567 jobs (merged disk + memory)
[2026-02-01T01:09:43.925Z] [BOT] ✅ No jobs to archive (all 1567 jobs within 7-day window)
[2026-02-01T01:09:44.023Z] [BOT] 💾 Saved posted_jobs.json: 1567 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T01:09:44.024Z] [BOT] ✅ Database saved successfully
[2026-02-01T01:09:46.061Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3221) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*