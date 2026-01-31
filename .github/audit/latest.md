# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T16:33:18.510Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T16:32:44.032Z] ========================================
[2026-01-31T16:32:44.034Z] Discord Bot Execution Log
[2026-01-31T16:32:44.034Z] Environment: GitHub Actions
[2026-01-31T16:32:44.034Z] Node Version: v20.20.0
[2026-01-31T16:32:44.034Z] ========================================
[2026-01-31T16:32:44.034Z] Environment Variables Check:
[2026-01-31T16:32:44.034Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T16:32:44.034Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.034Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T16:32:44.035Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T16:32:44.035Z] 
Multi-Channel Configuration:
[2026-01-31T16:32:44.035Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T16:32:44.035Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T16:32:44.035Z] 
Data Files Check:
[2026-01-31T16:32:44.036Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T16:32:44.072Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7735505 bytes)
[2026-01-31T16:32:44.072Z] 
========================================
[2026-01-31T16:32:44.072Z] Starting Enhanced Discord Bot...
[2026-01-31T16:32:44.072Z] ========================================
[2026-01-31T16:32:44.624Z] [BOT] ✅ Loaded V2 database: 1247 jobs
[2026-01-31T16:32:46.562Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T16:32:46.563Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T16:32:46.563Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T16:32:46.680Z] [BOT] ✅ Loaded pending queue: 2946 total (1669 pending, 50 enriched, 1227 posted)
[2026-01-31T16:32:46.680Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T16:32:46.680Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:32:46.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T16:32:46.681Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T16:32:46.682Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:32:46.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T16:32:46.682Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T16:32:46.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T16:32:46.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T16:32:46.683Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T16:32:46.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T16:32:46.684Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T16:32:46.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T16:32:46.684Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T16:32:46.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T16:32:46.684Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T16:32:46.684Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T16:32:46.685Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T16:32:46.685Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T16:32:46.685Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T16:32:46.686Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T16:32:46.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T16:32:46.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T16:32:46.695Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T16:32:46.695Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology at Johnson & Johnson
[2026-01-31T16:32:46.695Z] [BOT] 🚫 Skipping blacklisted job: Accounting Manager at nominal
[2026-01-31T16:32:46.800Z] [BOT] ✅ Loaded pending queue: 2946 total (1669 pending, 50 enriched, 1227 posted)
[2026-01-31T16:32:46.985Z] [BOT] ✅ Saved pending queue: 2944 total (1669 pending, 48 enriched, 1227 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T16:32:46.985Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T16:32:46.985Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T16:32:46.986Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T16:32:46.986Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T16:32:46.990Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-31T16:32:46.991Z] [BOT] 📍 [ROUTING] "Software Engineer, Graphics & Media" @ figma
[2026-01-31T16:32:46.991Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T16:32:47.009Z] [BOT ERROR] (node:3308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T16:32:47.372Z] [BOT] ✅ Posted message: Software Engineer, Graphics & Media @ figma in #📊・JID_fb739488
[2026-01-31T16:32:47.372Z] [BOT] ✅ Industry: Software Engineer, Graphics & Media @ figma
[2026-01-31T16:32:47.373Z] [BOT] 💾 Added channel posting: Software Engineer, Graphics & Media @ figma → category channel (1 total channels)
[2026-01-31T16:32:47.373Z] [BOT] 💾 BEFORE MERGE: 1248 jobs in memory (cached)
[2026-01-31T16:32:47.400Z] [BOT] ✅ Loaded V2 database: 1247 jobs
💾 DISK STATE: 1247 jobs on disk
[2026-01-31T16:32:47.400Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1248
[2026-01-31T16:32:47.403Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:32:47.403Z] [BOT] 💾 AFTER MERGE: 1248 jobs (merged disk + memory)
[2026-01-31T16:32:47.404Z] [BOT] ✅ No jobs to archive (all 1248 jobs within 7-day window)
[2026-01-31T16:32:47.485Z] [BOT] 💾 Saved posted_jobs.json: 1248 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:32:48.987Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth & Monetization" @ figma
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T16:32:48.988Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T16:32:49.363Z] [BOT] ✅ Posted message: Software Engineer, Growth & Monetization @ figma in #📊・JID_fb739488
[2026-01-31T16:32:49.363Z] [BOT] ✅ Industry: Software Engineer, Growth & Monetization @ figma
[2026-01-31T16:32:49.363Z] [BOT] 💾 Added channel posting: Software Engineer, Growth & Monetization @ figma → category channel (1 total channels)
[2026-01-31T16:32:49.364Z] [BOT] 💾 BEFORE MERGE: 1249 jobs in memory (cached)
[2026-01-31T16:32:49.385Z] [BOT] ✅ Loaded V2 database: 1248 jobs
💾 DISK STATE: 1248 jobs on disk
[2026-01-31T16:32:49.386Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1249
[2026-01-31T16:32:49.388Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1249 jobs (merged disk + memory)
[2026-01-31T16:32:49.389Z] [BOT] ✅ No jobs to archive (all 1249 jobs within 7-day window)
[2026-01-31T16:32:49.464Z] [BOT] 💾 Saved posted_jobs.json: 1249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:32:50.965Z] [BOT] 📍 [ROUTING] "Data Engineer" @ figma
[2026-01-31T16:32:50.966Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T16:32:51.204Z] [BOT] ✅ Posted message: Data Engineer @ figma in #📊・JID_fb739488
[2026-01-31T16:32:51.204Z] [BOT] ✅ Industry: Data Engineer @ figma
[2026-01-31T16:32:51.205Z] [BOT] 💾 Added channel posting: Data Engineer @ figma → category channel (1 total channels)
[2026-01-31T16:32:51.205Z] [BOT] 💾 BEFORE MERGE: 1250 jobs in memory (cached)
[2026-01-31T16:32:51.227Z] [BOT] ✅ Loaded V2 database: 1249 jobs
💾 DISK STATE: 1249 jobs on disk
[2026-01-31T16:32:51.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1250
[2026-01-31T16:32:51.231Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:32:51.231Z] [BOT] 💾 AFTER MERGE: 1250 jobs (merged disk + memory)
[2026-01-31T16:32:51.232Z] [BOT] ✅ No jobs to archive (all 1250 jobs within 7-day window)
[2026-01-31T16:32:51.307Z] [BOT] 💾 Saved posted_jobs.json: 1250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:32:55.808Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T16:32:55.808Z] [BOT] 📍 [ROUTING] "Software Engineer, AI Product" @ figma
[2026-01-31T16:32:55.809Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:32:56.088Z] [BOT] ✅ Posted message: Software Engineer, AI Product @ figma in #🤖・ai-jobs
[2026-01-31T16:32:56.088Z] [BOT] ✅ Industry: Software Engineer, AI Product @ figma
[2026-01-31T16:32:56.089Z] [BOT] 💾 Added channel posting: Software Engineer, AI Product @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 1251 jobs in memory (cached)
[2026-01-31T16:32:56.112Z] [BOT] ✅ Loaded V2 database: 1250 jobs
💾 DISK STATE: 1250 jobs on disk
[2026-01-31T16:32:56.112Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1251
[2026-01-31T16:32:56.114Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:32:56.115Z] [BOT] 💾 AFTER MERGE: 1251 jobs (merged disk + memory)
[2026-01-31T16:32:56.115Z] [BOT] ✅ No jobs to archive (all 1251 jobs within 7-day window)
[2026-01-31T16:32:56.209Z] [BOT] 💾 Saved posted_jobs.json: 1251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:32:57.710Z] [BOT] 📍 [ROUTING] "Software Engineer, Machine Learning" @ figma
[2026-01-31T16:32:57.710Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:32:57.978Z] [BOT] ✅ Posted message: Software Engineer, Machine Learning @ figma in #🤖・ai-jobs
[2026-01-31T16:32:57.978Z] [BOT] ✅ Industry: Software Engineer, Machine Learning @ figma
[2026-01-31T16:32:57.978Z] [BOT] 💾 Added channel posting: Software Engineer, Machine Learning @ figma → category channel (1 total channels)
[2026-01-31T16:32:57.979Z] [BOT] 💾 BEFORE MERGE: 1252 jobs in memory (cached)
[2026-01-31T16:32:58.007Z] [BOT] ✅ Loaded V2 database: 1251 jobs
💾 DISK STATE: 1251 jobs on disk
[2026-01-31T16:32:58.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1252
[2026-01-31T16:32:58.010Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:32:58.010Z] [BOT] 💾 AFTER MERGE: 1252 jobs (merged disk + memory)
[2026-01-31T16:32:58.011Z] [BOT] ✅ No jobs to archive (all 1252 jobs within 7-day window)
[2026-01-31T16:32:58.081Z] [BOT] 💾 Saved posted_jobs.json: 1252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:02.584Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T16:33:02.584Z] [BOT] 📍 [ROUTING] "Software Engineer, Production Engineering" @ figma
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:33:02.978Z] [BOT] ✅ Posted message: Software Engineer, Production Engineering @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer, Production Engineering @ figma
[2026-01-31T16:33:02.979Z] [BOT] 💾 Added channel posting: Software Engineer, Production Engineering @ figma → category channel (1 total channels)
[2026-01-31T16:33:02.979Z] [BOT] 💾 BEFORE MERGE: 1253 jobs in memory (cached)
[2026-01-31T16:33:03.002Z] [BOT] ✅ Loaded V2 database: 1252 jobs
💾 DISK STATE: 1252 jobs on disk
[2026-01-31T16:33:03.002Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1253
[2026-01-31T16:33:03.004Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1253 jobs (merged disk + memory)
[2026-01-31T16:33:03.005Z] [BOT] ✅ No jobs to archive (all 1253 jobs within 7-day window)
[2026-01-31T16:33:03.078Z] [BOT] 💾 Saved posted_jobs.json: 1253 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:04.581Z] [BOT] 📍 [ROUTING] "Security Engineer" @ figma
[2026-01-31T16:33:04.581Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:33:04.832Z] [BOT] ✅ Posted message: Security Engineer @ figma in #💻・tech-jobs
[2026-01-31T16:33:04.832Z] [BOT] ✅ Industry: Security Engineer @ figma
[2026-01-31T16:33:04.832Z] [BOT] 💾 Added channel posting: Security Engineer @ figma → category channel (1 total channels)
[2026-01-31T16:33:04.832Z] [BOT] 💾 BEFORE MERGE: 1254 jobs in memory (cached)
[2026-01-31T16:33:04.855Z] [BOT] ✅ Loaded V2 database: 1253 jobs
💾 DISK STATE: 1253 jobs on disk
[2026-01-31T16:33:04.855Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1254
[2026-01-31T16:33:04.858Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1254 jobs (merged disk + memory)
[2026-01-31T16:33:04.859Z] [BOT] ✅ No jobs to archive (all 1254 jobs within 7-day window)
[2026-01-31T16:33:04.946Z] [BOT] 💾 Saved posted_jobs.json: 1254 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:06.446Z] [BOT] 📍 [ROUTING] "Account Executive, Federal" @ figma
[2026-01-31T16:33:06.446Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:33:06.676Z] [BOT] ✅ Posted message: Account Executive, Federal @ figma in #💻・tech-jobs
[2026-01-31T16:33:06.676Z] [BOT] ✅ Industry: Account Executive, Federal @ figma
[2026-01-31T16:33:06.677Z] [BOT] 💾 Added channel posting: Account Executive, Federal @ figma → category channel (1 total channels)
[2026-01-31T16:33:06.677Z] [BOT] 💾 BEFORE MERGE: 1255 jobs in memory (cached)
[2026-01-31T16:33:06.700Z] [BOT] ✅ Loaded V2 database: 1254 jobs
💾 DISK STATE: 1254 jobs on disk
[2026-01-31T16:33:06.700Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1255
[2026-01-31T16:33:06.702Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1255 jobs (merged disk + memory)
[2026-01-31T16:33:06.703Z] [BOT] ✅ No jobs to archive (all 1255 jobs within 7-day window)
[2026-01-31T16:33:06.777Z] [BOT] 💾 Saved posted_jobs.json: 1255 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:08.279Z] [BOT] 📍 [ROUTING] "Account Executive, Mid-Market" @ figma
[2026-01-31T16:33:08.279Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:33:08.483Z] [BOT] ✅ Posted message: Account Executive, Mid-Market @ figma in #💻・tech-jobs
[2026-01-31T16:33:08.483Z] [BOT] ✅ Industry: Account Executive, Mid-Market @ figma
[2026-01-31T16:33:08.484Z] [BOT] 💾 Added channel posting: Account Executive, Mid-Market @ figma → category channel (1 total channels)
[2026-01-31T16:33:08.484Z] [BOT] 💾 BEFORE MERGE: 1256 jobs in memory (cached)
[2026-01-31T16:33:08.507Z] [BOT] ✅ Loaded V2 database: 1255 jobs
💾 DISK STATE: 1255 jobs on disk
[2026-01-31T16:33:08.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1256
[2026-01-31T16:33:08.509Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1256 jobs (merged disk + memory)
[2026-01-31T16:33:08.510Z] [BOT] ✅ No jobs to archive (all 1256 jobs within 7-day window)
[2026-01-31T16:33:08.603Z] [BOT] 💾 Saved posted_jobs.json: 1256 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:10.101Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2026-01-31T16:33:10.101Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:33:10.278Z] [BOT] ✅ Posted message: Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2026-01-31T16:33:10.279Z] [BOT] 💾 Added channel posting: Early Career Software Engineer @ ORG_2b147ca6 Health → category channel (1 total channels)
[2026-01-31T16:33:10.279Z] [BOT] 💾 BEFORE MERGE: 1257 jobs in memory (cached)
[2026-01-31T16:33:10.302Z] [BOT] ✅ Loaded V2 database: 1256 jobs
💾 DISK STATE: 1256 jobs on disk
[2026-01-31T16:33:10.302Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1257
[2026-01-31T16:33:10.304Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1257 jobs (merged disk + memory)
[2026-01-31T16:33:10.305Z] [BOT] ✅ No jobs to archive (all 1257 jobs within 7-day window)
[2026-01-31T16:33:10.376Z] [BOT] 💾 Saved posted_jobs.json: 1257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:33:14.878Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T16:33:14.879Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4344de0a..." not found, but found as SHA256 "43a19ec07b2678c7"
⏭️  Skipping duplicate: JID_ed15922f (posted within 7 days)
[2026-01-31T16:33:14.879Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_59ea8307..." not found, but found as SHA256 "fa177833c3f56d3d"
⏭️  Skipping duplicate: JID_706f4ec3 (posted within 7 days)
[2026-01-31T16:33:14.879Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1c09d6af..." not found, but found as SHA256 "d6ee5dc5285cde42"
[2026-01-31T16:33:14.879Z] [BOT] ⏭️  Skipping duplicate: JID_9f11100b (posted within 7 days)
[2026-01-31T16:33:14.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1c40a6de..." not found, but found as SHA256 "d8e4046228ddc1f0"
⏭️  Skipping duplicate: JID_d1705dde (posted within 7 days)
[2026-01-31T16:33:14.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1a27d0a..." not found, but found as SHA256 "77176bcd8e16c90d"
[2026-01-31T16:33:14.880Z] [BOT] ⏭️  Skipping duplicate: JID_b3ffe9c8 (posted within 7 days)
[2026-01-31T16:33:14.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_901ed81f..." not found, but found as SHA256 "675924a641ca7ca2"
⏭️  Skipping duplicate: JID_c9eca1fb (posted within 7 days)
[2026-01-31T16:33:14.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d86a686d..." not found, but found as SHA256 "9ecea6b24f5a496c"
[2026-01-31T16:33:14.881Z] [BOT] ⏭️  Skipping duplicate: JID_fc4f97d1 (posted within 7 days)
[2026-01-31T16:33:14.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a522cbb0..." not found, but found as SHA256 "b75a27297be8ec1e"
⏭️  Skipping duplicate: JID_64794b1b (posted within 7 days)
[2026-01-31T16:33:14.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_49a50592..." not found, but found as SHA256 "95c2490410f30829"
[2026-01-31T16:33:14.881Z] [BOT] ⏭️  Skipping duplicate: JID_c3b4db6b (posted within 7 days)
[2026-01-31T16:33:14.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ed85d4d..." not found, but found as SHA256 "f8dfdfb254a97143"
⏭️  Skipping duplicate: JID_55969b96 (posted within 7 days)
[2026-01-31T16:33:15.002Z] [BOT] ✅ Loaded pending queue: 2944 total (1669 pending, 48 enriched, 1227 posted)
[2026-01-31T16:33:15.174Z] [BOT] ✅ Saved pending queue: 2944 total (1669 pending, 38 enriched, 1237 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T16:33:15.174Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T16:33:15.261Z] [BOT] 📂 Loaded 11318 existing routing entries
[2026-01-31T16:33:15.385Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11328
   Timestamp: 2026-01-31T16:33:15.339Z
[2026-01-31T16:33:15.386Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 26
   Successful: 10
[2026-01-31T16:33:15.386Z] [BOT] Failed: 0
   Skipped: 16
[2026-01-31T16:33:15.386Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T16:33:15.386Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-31T16:33:15.386Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #📊・JID_fb739488: 3 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-31T16:33:15.386Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T16:33:15.386Z] [BOT] 💾 BEFORE MERGE: 1257 jobs in memory (cached)
[2026-01-31T16:33:15.411Z] [BOT] ✅ Loaded V2 database: 1257 jobs
💾 DISK STATE: 1257 jobs on disk
[2026-01-31T16:33:15.411Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1257
[2026-01-31T16:33:15.414Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:33:15.414Z] [BOT] 💾 AFTER MERGE: 1257 jobs (merged disk + memory)
[2026-01-31T16:33:15.415Z] [BOT] ✅ No jobs to archive (all 1257 jobs within 7-day window)
[2026-01-31T16:33:15.504Z] [BOT] 💾 Saved posted_jobs.json: 1257 active jobs
[2026-01-31T16:33:15.504Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T16:33:17.536Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*