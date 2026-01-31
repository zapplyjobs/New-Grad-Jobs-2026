# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T21:14:19.560Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T21:13:49.730Z] ========================================
[2026-01-31T21:13:49.732Z] Discord Bot Execution Log
[2026-01-31T21:13:49.733Z] Environment: GitHub Actions
[2026-01-31T21:13:49.733Z] Node Version: v20.20.0
[2026-01-31T21:13:49.733Z] ========================================
[2026-01-31T21:13:49.733Z] Environment Variables Check:
[2026-01-31T21:13:49.733Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T21:13:49.733Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.733Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T21:13:49.733Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T21:13:49.733Z] 
Multi-Channel Configuration:
[2026-01-31T21:13:49.733Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.733Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.733Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T21:13:49.734Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T21:13:49.734Z] 
Data Files Check:
[2026-01-31T21:13:49.735Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T21:13:49.779Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8326113 bytes)
[2026-01-31T21:13:49.779Z] 
========================================
[2026-01-31T21:13:49.779Z] Starting Enhanced Discord Bot...
[2026-01-31T21:13:49.779Z] ========================================
[2026-01-31T21:13:50.353Z] [BOT] ✅ Loaded V2 database: 1437 jobs
[2026-01-31T21:13:50.778Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T21:13:50.779Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T21:13:50.779Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T21:13:50.901Z] [BOT] ✅ Loaded pending queue: 2944 total (1477 pending, 50 enriched, 1417 posted)
[2026-01-31T21:13:50.901Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:13:50.902Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T21:13:50.902Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:13:50.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T21:13:50.903Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T21:13:50.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T21:13:50.904Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T21:13:50.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T21:13:50.904Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T21:13:50.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T21:13:50.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T21:13:50.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T21:13:50.905Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T21:13:50.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T21:13:50.906Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T21:13:50.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T21:13:50.906Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T21:13:50.906Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T21:13:50.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T21:13:50.906Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T21:13:50.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T21:13:50.907Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-31T21:13:50.907Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T21:13:50.907Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T21:13:50.907Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T21:13:50.907Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T21:13:50.907Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T21:13:50.908Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T21:13:50.919Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T21:13:50.919Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
[2026-01-31T21:13:51.026Z] [BOT] ✅ Loaded pending queue: 2944 total (1477 pending, 50 enriched, 1417 posted)
[2026-01-31T21:13:51.226Z] [BOT] ✅ Saved pending queue: 2943 total (1477 pending, 49 enriched, 1417 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T21:13:51.226Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T21:13:51.226Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T21:13:51.227Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T21:13:51.227Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
[2026-01-31T21:13:51.227Z] [BOT] - Undergrad Software Engineer - Global Industries @ Oracle: united states, san carlos
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T21:13:51.231Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T21:13:51.232Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
[2026-01-31T21:13:51.232Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:13:51.250Z] [BOT ERROR] (node:3189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T21:13:51.559Z] [BOT] ✅ Posted message: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T21:13:51.559Z] [BOT] ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2026-01-31T21:13:51.560Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:13:51.561Z] [BOT] 💾 BEFORE MERGE: 1438 jobs in memory (cached)
[2026-01-31T21:13:51.586Z] [BOT] ✅ Loaded V2 database: 1437 jobs
💾 DISK STATE: 1437 jobs on disk
[2026-01-31T21:13:51.586Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1438
[2026-01-31T21:13:51.592Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:13:51.592Z] [BOT] 💾 AFTER MERGE: 1438 jobs (merged disk + memory)
[2026-01-31T21:13:51.593Z] [BOT] ✅ No jobs to archive (all 1438 jobs within 7-day window)
[2026-01-31T21:13:51.696Z] [BOT] 💾 Saved posted_jobs.json: 1438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:13:53.199Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:13:53.418Z] [BOT] ✅ Posted message: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T21:13:53.418Z] [BOT] ✅ Industry: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c
[2026-01-31T21:13:53.419Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:13:53.420Z] [BOT] 💾 BEFORE MERGE: 1439 jobs in memory (cached)
[2026-01-31T21:13:53.444Z] [BOT] ✅ Loaded V2 database: 1438 jobs
💾 DISK STATE: 1438 jobs on disk
[2026-01-31T21:13:53.444Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1439
[2026-01-31T21:13:53.449Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:13:53.449Z] [BOT] 💾 AFTER MERGE: 1439 jobs (merged disk + memory)
[2026-01-31T21:13:53.450Z] [BOT] ✅ No jobs to archive (all 1439 jobs within 7-day window)
[2026-01-31T21:13:53.537Z] [BOT] 💾 Saved posted_jobs.json: 1439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:13:55.039Z] [BOT] 📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:13:55.229Z] [BOT] ✅ Posted message: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c
[2026-01-31T21:13:55.230Z] [BOT] 💾 Added channel posting: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:13:55.230Z] [BOT] 💾 BEFORE MERGE: 1440 jobs in memory (cached)
[2026-01-31T21:13:55.254Z] [BOT] ✅ Loaded V2 database: 1439 jobs
💾 DISK STATE: 1439 jobs on disk
[2026-01-31T21:13:55.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1440
[2026-01-31T21:13:55.259Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:13:55.260Z] [BOT] 💾 AFTER MERGE: 1440 jobs (merged disk + memory)
[2026-01-31T21:13:55.260Z] [BOT] ✅ No jobs to archive (all 1440 jobs within 7-day window)
[2026-01-31T21:13:55.347Z] [BOT] 💾 Saved posted_jobs.json: 1440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:13:56.849Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-31T21:13:56.849Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:13:57.011Z] [BOT] ✅ Posted message: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c
[2026-01-31T21:13:57.013Z] [BOT] 💾 Added channel posting: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1441 jobs in memory (cached)
[2026-01-31T21:13:57.037Z] [BOT] ✅ Loaded V2 database: 1440 jobs
💾 DISK STATE: 1440 jobs on disk
[2026-01-31T21:13:57.037Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1441
[2026-01-31T21:13:57.042Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:13:57.043Z] [BOT] 💾 AFTER MERGE: 1441 jobs (merged disk + memory)
[2026-01-31T21:13:57.043Z] [BOT] ✅ No jobs to archive (all 1441 jobs within 7-day window)
[2026-01-31T21:13:57.133Z] [BOT] 💾 Saved posted_jobs.json: 1441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:13:58.635Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
[2026-01-31T21:13:58.636Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:13:59.002Z] [BOT] ✅ Posted message: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T21:13:59.002Z] [BOT] ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2026-01-31T21:13:59.003Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:13:59.003Z] [BOT] 💾 BEFORE MERGE: 1442 jobs in memory (cached)
[2026-01-31T21:13:59.027Z] [BOT] ✅ Loaded V2 database: 1441 jobs
💾 DISK STATE: 1441 jobs on disk
[2026-01-31T21:13:59.027Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1442
[2026-01-31T21:13:59.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1442 jobs (merged disk + memory)
[2026-01-31T21:13:59.033Z] [BOT] ✅ No jobs to archive (all 1442 jobs within 7-day window)
[2026-01-31T21:13:59.108Z] [BOT] 💾 Saved posted_jobs.json: 1442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:03.611Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T21:14:03.612Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
[2026-01-31T21:14:03.612Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:14:03.849Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c
[2026-01-31T21:14:03.850Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:14:03.850Z] [BOT] 💾 BEFORE MERGE: 1443 jobs in memory (cached)
[2026-01-31T21:14:03.874Z] [BOT] ✅ Loaded V2 database: 1442 jobs
💾 DISK STATE: 1442 jobs on disk
[2026-01-31T21:14:03.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1443
[2026-01-31T21:14:03.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:03.879Z] [BOT] 💾 AFTER MERGE: 1443 jobs (merged disk + memory)
[2026-01-31T21:14:03.880Z] [BOT] ✅ No jobs to archive (all 1443 jobs within 7-day window)
[2026-01-31T21:14:03.968Z] [BOT] 💾 Saved posted_jobs.json: 1443 active jobs
[2026-01-31T21:14:03.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:05.472Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T21:14:05.473Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:14:06.123Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c
[2026-01-31T21:14:06.123Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:14:06.123Z] [BOT] 💾 BEFORE MERGE: 1444 jobs in memory (cached)
[2026-01-31T21:14:06.147Z] [BOT] ✅ Loaded V2 database: 1443 jobs
💾 DISK STATE: 1443 jobs on disk
[2026-01-31T21:14:06.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1444
[2026-01-31T21:14:06.152Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:06.152Z] [BOT] 💾 AFTER MERGE: 1444 jobs (merged disk + memory)
[2026-01-31T21:14:06.153Z] [BOT] ✅ No jobs to archive (all 1444 jobs within 7-day window)
[2026-01-31T21:14:06.233Z] [BOT] 💾 Saved posted_jobs.json: 1444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:07.735Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-31T21:14:07.736Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:14:07.736Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:14:07.938Z] [BOT] ✅ Posted message: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c
[2026-01-31T21:14:07.939Z] [BOT] 💾 Added channel posting: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1445 jobs in memory (cached)
[2026-01-31T21:14:07.963Z] [BOT] ✅ Loaded V2 database: 1444 jobs
💾 DISK STATE: 1444 jobs on disk
[2026-01-31T21:14:07.964Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1445
[2026-01-31T21:14:07.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:07.968Z] [BOT] 💾 AFTER MERGE: 1445 jobs (merged disk + memory)
[2026-01-31T21:14:07.969Z] [BOT] ✅ No jobs to archive (all 1445 jobs within 7-day window)
[2026-01-31T21:14:08.055Z] [BOT] 💾 Saved posted_jobs.json: 1445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:09.557Z] [BOT] 📍 [ROUTING] "AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-31T21:14:09.557Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:14:09.558Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:14:09.790Z] [BOT] ✅ Posted message: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c
[2026-01-31T21:14:09.790Z] [BOT] 💾 Added channel posting: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:14:09.790Z] [BOT] 💾 BEFORE MERGE: 1446 jobs in memory (cached)
[2026-01-31T21:14:09.814Z] [BOT] ✅ Loaded V2 database: 1445 jobs
💾 DISK STATE: 1445 jobs on disk
[2026-01-31T21:14:09.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1446
[2026-01-31T21:14:09.819Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:09.819Z] [BOT] 💾 AFTER MERGE: 1446 jobs (merged disk + memory)
[2026-01-31T21:14:09.820Z] [BOT] ✅ No jobs to archive (all 1446 jobs within 7-day window)
[2026-01-31T21:14:09.903Z] [BOT] 💾 Saved posted_jobs.json: 1446 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:11.405Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T21:14:11.405Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:14:11.557Z] [BOT] ✅ Posted message: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c
[2026-01-31T21:14:11.557Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:14:11.558Z] [BOT] 💾 BEFORE MERGE: 1447 jobs in memory (cached)
[2026-01-31T21:14:11.581Z] [BOT] ✅ Loaded V2 database: 1446 jobs
💾 DISK STATE: 1446 jobs on disk
[2026-01-31T21:14:11.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1447
[2026-01-31T21:14:11.586Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:11.586Z] [BOT] 💾 AFTER MERGE: 1447 jobs (merged disk + memory)
[2026-01-31T21:14:11.587Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-01-31T21:14:11.687Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:16.189Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T21:14:16.190Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5ad55cb..." not found, but found as SHA256 "9e2237b652130a37"
[2026-01-31T21:14:16.190Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_fc928a70-detail (posted within 7 days)
[2026-01-31T21:14:16.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1bc8047c..." not found, but found as SHA256 "2419cf7d277abda8"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_54578dbe-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f24cc326..." not found, but found as SHA256 "6e4c92b894978202"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_939e32e4-detail (posted within 7 days)
[2026-01-31T21:14:16.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c958699..." not found, but found as SHA256 "e04ab1f5d8cc040f"
[2026-01-31T21:14:16.192Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_05246c05-detail (posted within 7 days)
[2026-01-31T21:14:16.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2e364f8..." not found, but found as SHA256 "80ff938bdb905dc5"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_6d5dc855-detail (posted within 7 days)
[2026-01-31T21:14:16.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f24cc326..." not found, but found as SHA256 "27ea6b85a54d2f83"
[2026-01-31T21:14:16.192Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b81708ef-detail (posted within 7 days)
[2026-01-31T21:14:16.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e5a04fc..." not found, but found as SHA256 "a873263623451950"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_a9aa0f74-detail (posted within 7 days)
[2026-01-31T21:14:16.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1a561cba..." not found, but found as SHA256 "30510f7332117210"
[2026-01-31T21:14:16.193Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9b71f9e2-detail (posted within 7 days)
[2026-01-31T21:14:16.193Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1d5466d..." not found, but found as SHA256 "8259e5c84e8e57ca"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_44c705ca-detail (posted within 7 days)
[2026-01-31T21:14:16.193Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_33f03d5a..." not found, but found as SHA256 "cfe9212896cfe037"
[2026-01-31T21:14:16.193Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5dbbf4c2-detail (posted within 7 days)
[2026-01-31T21:14:16.297Z] [BOT] ✅ Loaded pending queue: 2943 total (1477 pending, 49 enriched, 1417 posted)
[2026-01-31T21:14:16.483Z] [BOT] ✅ Saved pending queue: 2943 total (1477 pending, 39 enriched, 1427 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T21:14:16.483Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T21:14:16.570Z] [BOT] 📂 Loaded 11508 existing routing entries
[2026-01-31T21:14:16.714Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T21:14:16.714Z] [BOT] New entries: 10
   Total entries: 11518
   Timestamp: 2026-01-31T21:14:16.651Z
[2026-01-31T21:14:16.714Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T21:14:16.715Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T21:14:16.715Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 5 posts
[2026-01-31T21:14:16.715Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1447 jobs in memory (cached)
[2026-01-31T21:14:16.739Z] [BOT] ✅ Loaded V2 database: 1447 jobs
💾 DISK STATE: 1447 jobs on disk
[2026-01-31T21:14:16.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1447
[2026-01-31T21:14:16.742Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:14:16.742Z] [BOT] 💾 AFTER MERGE: 1447 jobs (merged disk + memory)
[2026-01-31T21:14:16.746Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-01-31T21:14:16.827Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:14:16.827Z] [BOT] ✅ Database saved successfully
[2026-01-31T21:14:18.862Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*