# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T09:59:04.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 11
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T09:58:29.901Z] ========================================
[2026-01-30T09:58:29.903Z] Discord Bot Execution Log
[2026-01-30T09:58:29.903Z] Environment: GitHub Actions
[2026-01-30T09:58:29.903Z] Node Version: v20.20.0
[2026-01-30T09:58:29.903Z] ========================================
[2026-01-30T09:58:29.903Z] Environment Variables Check:
[2026-01-30T09:58:29.903Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T09:58:29.903Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.903Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T09:58:29.903Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T09:58:29.904Z] 
Multi-Channel Configuration:
[2026-01-30T09:58:29.904Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T09:58:29.904Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T09:58:29.904Z] 
Data Files Check:
[2026-01-30T09:58:29.905Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104657 bytes)
[2026-01-30T09:58:29.919Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2426697 bytes)
[2026-01-30T09:58:29.919Z] 
========================================
[2026-01-30T09:58:29.919Z] Starting Enhanced Discord Bot...
[2026-01-30T09:58:29.919Z] ========================================
[2026-01-30T09:58:30.463Z] [BOT] ✅ Loaded V2 database: 369 jobs
[2026-01-30T09:58:30.899Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T09:58:30.900Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T09:58:30.900Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T09:58:31.031Z] [BOT] ✅ Loaded pending queue: 2921 total (2531 pending, 50 enriched, 340 posted)
[2026-01-30T09:58:31.031Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T09:58:31.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T09:58:31.035Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T09:58:31.041Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T09:58:31.042Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T09:58:31.042Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T09:58:31.042Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
📬 Found 39 new jobs (11 already posted)...
[2026-01-30T09:58:31.043Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Fabric at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Postdoctoral Researcher at Prairie View A&M University
[2026-01-30T09:58:31.158Z] [BOT] ✅ Loaded pending queue: 2921 total (2531 pending, 50 enriched, 340 posted)
[2026-01-30T09:58:31.328Z] [BOT] ✅ Saved pending queue: 2918 total (2531 pending, 47 enriched, 340 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 36 jobs (3 blacklisted)
[2026-01-30T09:58:31.329Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T09:58:31.330Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-30T09:58:31.330Z] [BOT] 📍 2 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: new york city, ny united states, salt lake city, ut united states
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 29 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T09:58:31.334Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T09:58:31.335Z] [BOT] 📍 [ROUTING] "Power and Performance Engineer" @ ORG_9dbe1a97
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T09:58:31.335Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:31.352Z] [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T09:58:31.565Z] [BOT] ✅ Posted message: Power and Performance Engineer @ ORG_9dbe1a97 in #💻・tech-jobs
  ✅ Industry: Power and Performance Engineer @ ORG_9dbe1a97
[2026-01-30T09:58:31.565Z] [BOT] 💾 Added channel posting: Power and Performance Engineer @ ORG_9dbe1a97 → category channel (1 total channels)
[2026-01-30T09:58:31.566Z] [BOT] 💾 BEFORE MERGE: 370 jobs in memory (cached)
[2026-01-30T09:58:31.574Z] [BOT] ✅ Loaded V2 database: 369 jobs
[2026-01-30T09:58:31.574Z] [BOT] 💾 DISK STATE: 369 jobs on disk
[2026-01-30T09:58:31.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=370
[2026-01-30T09:58:31.575Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:31.575Z] [BOT] 💾 AFTER MERGE: 370 jobs (merged disk + memory)
[2026-01-30T09:58:31.576Z] [BOT] ✅ No jobs to archive (all 370 jobs within 7-day window)
[2026-01-30T09:58:31.610Z] [BOT] 💾 Saved posted_jobs.json: 370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:33.111Z] [BOT] 📍 [ROUTING] "Research Statistician 1" @ ORG_05f00f61 Board
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:33.362Z] [BOT] ✅ Posted message: Research Statistician 1 @ ORG_05f00f61 Board in #💻・tech-jobs
[2026-01-30T09:58:33.362Z] [BOT] ✅ Industry: Research Statistician 1 @ ORG_05f00f61 Board
[2026-01-30T09:58:33.362Z] [BOT] 💾 Added channel posting: Research Statistician 1 @ ORG_05f00f61 Board → category channel (1 total channels)
💾 BEFORE MERGE: 371 jobs in memory (cached)
[2026-01-30T09:58:33.370Z] [BOT] ✅ Loaded V2 database: 370 jobs
[2026-01-30T09:58:33.370Z] [BOT] 💾 DISK STATE: 370 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=371
[2026-01-30T09:58:33.371Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:33.371Z] [BOT] 💾 AFTER MERGE: 371 jobs (merged disk + memory)
[2026-01-30T09:58:33.371Z] [BOT] ✅ No jobs to archive (all 371 jobs within 7-day window)
[2026-01-30T09:58:33.398Z] [BOT] 💾 Saved posted_jobs.json: 371 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:35.080Z] [BOT] ✅ Posted message: Research Statistician 1 @ ORG_05f00f61 Board in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T09:58:35.080Z] [BOT] 💾 Added channel posting: Research Statistician 1 @ ORG_05f00f61 Board → location channel (2 total channels)
[2026-01-30T09:58:35.080Z] [BOT] 💾 BEFORE MERGE: 371 jobs in memory (cached)
[2026-01-30T09:58:35.089Z] [BOT] ✅ Loaded V2 database: 371 jobs
💾 DISK STATE: 371 jobs on disk
[2026-01-30T09:58:35.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=371
[2026-01-30T09:58:35.090Z] [BOT] 🔀 Deep merged: Research Statistician 1 @ ORG_05f00f61 Board (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T09:58:35.090Z] [BOT] 💾 AFTER MERGE: 371 jobs (merged disk + memory)
[2026-01-30T09:58:35.090Z] [BOT] ✅ No jobs to archive (all 371 jobs within 7-day window)
[2026-01-30T09:58:35.116Z] [BOT] 💾 Saved posted_jobs.json: 371 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:36.617Z] [BOT] 📍 [ROUTING] "Early Career Geologist" @ ORG_b01859ad
   Category: TECH (default)
[2026-01-30T09:58:36.617Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:37.285Z] [BOT] ✅ Posted message: Early Career Geologist @ ORG_b01859ad in #💻・tech-jobs
[2026-01-30T09:58:37.286Z] [BOT] ✅ Industry: Early Career Geologist @ ORG_b01859ad
💾 Added channel posting: Early Career Geologist @ ORG_b01859ad → category channel (1 total channels)
[2026-01-30T09:58:37.286Z] [BOT] 💾 BEFORE MERGE: 372 jobs in memory (cached)
[2026-01-30T09:58:37.294Z] [BOT] ✅ Loaded V2 database: 371 jobs
💾 DISK STATE: 371 jobs on disk
[2026-01-30T09:58:37.294Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=372
[2026-01-30T09:58:37.295Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 372 jobs (merged disk + memory)
[2026-01-30T09:58:37.295Z] [BOT] ✅ No jobs to archive (all 372 jobs within 7-day window)
[2026-01-30T09:58:37.317Z] [BOT] 💾 Saved posted_jobs.json: 372 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:38.818Z] [BOT] 📍 [ROUTING] "Data Visualization Analyst / Associate" @ ORG_569ec613 Morgan Chase
   Category: TECH (matched: "data")
[2026-01-30T09:58:38.818Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:39.192Z] [BOT] ✅ Posted message: Data Visualization Analyst / Associate @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
[2026-01-30T09:58:39.193Z] [BOT] ✅ Industry: Data Visualization Analyst / Associate @ ORG_569ec613 Morgan Chase
[2026-01-30T09:58:39.193Z] [BOT] 💾 Added channel posting: Data Visualization Analyst / Associate @ ORG_569ec613 Morgan Chase → category channel (1 total channels)
[2026-01-30T09:58:39.193Z] [BOT] 💾 BEFORE MERGE: 373 jobs in memory (cached)
[2026-01-30T09:58:39.204Z] [BOT] ✅ Loaded V2 database: 372 jobs
💾 DISK STATE: 372 jobs on disk
[2026-01-30T09:58:39.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=373
[2026-01-30T09:58:39.205Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:39.205Z] [BOT] 💾 AFTER MERGE: 373 jobs (merged disk + memory)
[2026-01-30T09:58:39.207Z] [BOT] ✅ No jobs to archive (all 373 jobs within 7-day window)
[2026-01-30T09:58:39.239Z] [BOT] 💾 Saved posted_jobs.json: 373 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:40.737Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Contract)" @ airtable
[2026-01-30T09:58:40.737Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:40.872Z] [BOT] ✅ Posted message: Technical Sourcer (Contract) @ airtable in #💻・tech-jobs
  ✅ Industry: Technical Sourcer (Contract) @ airtable
[2026-01-30T09:58:40.872Z] [BOT] 💾 Added channel posting: Technical Sourcer (Contract) @ airtable → category channel (1 total channels)
[2026-01-30T09:58:40.872Z] [BOT] 💾 BEFORE MERGE: 374 jobs in memory (cached)
[2026-01-30T09:58:40.880Z] [BOT] ✅ Loaded V2 database: 373 jobs
💾 DISK STATE: 373 jobs on disk
[2026-01-30T09:58:40.880Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=374
[2026-01-30T09:58:40.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:40.881Z] [BOT] 💾 AFTER MERGE: 374 jobs (merged disk + memory)
[2026-01-30T09:58:40.882Z] [BOT] ✅ No jobs to archive (all 374 jobs within 7-day window)
[2026-01-30T09:58:40.909Z] [BOT] 💾 Saved posted_jobs.json: 374 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:42.410Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (8+ YOE)" @ airtable
   Category: TECH (matched: "software")
[2026-01-30T09:58:42.411Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:42.630Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (8+ YOE) @ airtable in #💻・tech-jobs
[2026-01-30T09:58:42.630Z] [BOT] ✅ Industry: Software Engineer, Infrastructure (8+ YOE) @ airtable
[2026-01-30T09:58:42.631Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (8+ YOE) @ airtable → category channel (1 total channels)
[2026-01-30T09:58:42.631Z] [BOT] 💾 BEFORE MERGE: 375 jobs in memory (cached)
[2026-01-30T09:58:42.640Z] [BOT] ✅ Loaded V2 database: 374 jobs
💾 DISK STATE: 374 jobs on disk
[2026-01-30T09:58:42.640Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=375
[2026-01-30T09:58:42.641Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 375 jobs (merged disk + memory)
[2026-01-30T09:58:42.641Z] [BOT] ✅ No jobs to archive (all 375 jobs within 7-day window)
[2026-01-30T09:58:42.668Z] [BOT] 💾 Saved posted_jobs.json: 375 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:44.170Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (2-8 YOE)" @ airtable
[2026-01-30T09:58:44.170Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:58:44.418Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (2-8 YOE) @ airtable in #💻・tech-jobs
[2026-01-30T09:58:44.418Z] [BOT] ✅ Industry: Software Engineer, Infrastructure (2-8 YOE) @ airtable
[2026-01-30T09:58:44.418Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-01-30T09:58:44.418Z] [BOT] 💾 BEFORE MERGE: 376 jobs in memory (cached)
[2026-01-30T09:58:44.426Z] [BOT] ✅ Loaded V2 database: 375 jobs
[2026-01-30T09:58:44.426Z] [BOT] 💾 DISK STATE: 375 jobs on disk
[2026-01-30T09:58:44.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=376
[2026-01-30T09:58:44.427Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 376 jobs (merged disk + memory)
[2026-01-30T09:58:44.428Z] [BOT] ✅ No jobs to archive (all 376 jobs within 7-day window)
[2026-01-30T09:58:44.450Z] [BOT] 💾 Saved posted_jobs.json: 376 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:48.952Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T09:58:48.953Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_f5c0adc3
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T09:58:48.953Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T09:58:49.302Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f5c0adc3 in #📊・JID_fb739488
  ✅ Industry: Software Engineer – New Grad @ ORG_f5c0adc3
[2026-01-30T09:58:49.302Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f5c0adc3 → category channel (1 total channels)
[2026-01-30T09:58:49.302Z] [BOT] 💾 BEFORE MERGE: 377 jobs in memory (cached)
[2026-01-30T09:58:49.310Z] [BOT] ✅ Loaded V2 database: 376 jobs
💾 DISK STATE: 376 jobs on disk
[2026-01-30T09:58:49.311Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=377
[2026-01-30T09:58:49.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:49.312Z] [BOT] 💾 AFTER MERGE: 377 jobs (merged disk + memory)
[2026-01-30T09:58:49.312Z] [BOT] ✅ No jobs to archive (all 377 jobs within 7-day window)
[2026-01-30T09:58:49.337Z] [BOT] 💾 Saved posted_jobs.json: 377 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:50.838Z] [BOT] 📍 [ROUTING] "Data Engineer 3" @ Yum! Brands
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-30T09:58:50.838Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T09:58:51.021Z] [BOT] ✅ Posted message: Data Engineer 3 @ Yum! Brands in #📊・JID_fb739488
[2026-01-30T09:58:51.021Z] [BOT] ✅ Industry: Data Engineer 3 @ Yum! Brands
[2026-01-30T09:58:51.021Z] [BOT] 💾 Added channel posting: Data Engineer 3 @ Yum! Brands → category channel (1 total channels)
[2026-01-30T09:58:51.022Z] [BOT] 💾 BEFORE MERGE: 378 jobs in memory (cached)
[2026-01-30T09:58:51.030Z] [BOT] ✅ Loaded V2 database: 377 jobs
💾 DISK STATE: 377 jobs on disk
[2026-01-30T09:58:51.030Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=378
[2026-01-30T09:58:51.031Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:51.031Z] [BOT] 💾 AFTER MERGE: 378 jobs (merged disk + memory)
[2026-01-30T09:58:51.031Z] [BOT] ✅ No jobs to archive (all 378 jobs within 7-day window)
[2026-01-30T09:58:51.054Z] [BOT] 💾 Saved posted_jobs.json: 378 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:58:55.556Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T09:58:55.557Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Salt Lake City - SLED)" @ verkada
[2026-01-30T09:58:55.557Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T09:58:56.108Z] [BOT] ✅ Posted message: Enterprise Account Executive (Salt Lake City - SLED) @ verkada in #💰・finance-jobs
[2026-01-30T09:58:56.108Z] [BOT] ✅ Industry: Enterprise Account Executive (Salt Lake City - SLED) @ verkada
[2026-01-30T09:58:56.108Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Salt Lake City - SLED) @ verkada → category channel (1 total channels)
[2026-01-30T09:58:56.108Z] [BOT] 💾 BEFORE MERGE: 379 jobs in memory (cached)
[2026-01-30T09:58:56.116Z] [BOT] ✅ Loaded V2 database: 378 jobs
💾 DISK STATE: 378 jobs on disk
[2026-01-30T09:58:56.116Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=379
[2026-01-30T09:58:56.117Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:58:56.117Z] [BOT] 💾 AFTER MERGE: 379 jobs (merged disk + memory)
[2026-01-30T09:58:56.117Z] [BOT] ✅ No jobs to archive (all 379 jobs within 7-day window)
[2026-01-30T09:58:56.142Z] [BOT] 💾 Saved posted_jobs.json: 379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:59:00.642Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T09:59:00.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c871a8e3..." not found, but found as SHA256 "0800b0f4be99fd60"
⏭️  Skipping duplicate: JID_5a4341d0-engineer_jr0280289 (posted within 7 days)
[2026-01-30T09:59:00.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_657d4510..." not found, but found as SHA256 "15d72323aee81faf"
⏭️  Skipping duplicate: JID_b78cc1e5 (posted within 7 days)
[2026-01-30T09:59:00.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b6405e37..." not found, but found as SHA256 "c096bab07faeb095"
⏭️  Skipping duplicate: JID_ff56d5f2-i_req002391 (posted within 7 days)
[2026-01-30T09:59:00.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ccf6e742..." not found, but found as SHA256 "eb0239b0c2781f42"
⏭️  Skipping duplicate: JID_113f9ae5-cx_2001-job-79003 (posted within 7 days)
[2026-01-30T09:59:00.643Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2896735f..." not found, but found as SHA256 "6a83028478ecf71b"
⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210702366 (posted within 7 days)
[2026-01-30T09:59:00.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42d3ea95..." not found, but found as SHA256 "8620aad8b39f161b"
⏭️  Skipping duplicate: JID_79f936b0-cx_1-job-4689 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "5f4e93982b353630"
⏭️  Skipping duplicate: JID_f0594628 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "ea32ca942f876689"
[2026-01-30T09:59:00.644Z] [BOT] ⏭️  Skipping duplicate: JID_e81b6402 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "1548e840fb7dcf86"
[2026-01-30T09:59:00.644Z] [BOT] ⏭️  Skipping duplicate: JID_f67c90ef (posted within 7 days)
[2026-01-30T09:59:00.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "14dc091d5a0bc2ad"
⏭️  Skipping duplicate: JID_36d204f3 (posted within 7 days)
[2026-01-30T09:59:00.749Z] [BOT] ✅ Loaded pending queue: 2918 total (2531 pending, 47 enriched, 340 posted)
[2026-01-30T09:59:00.951Z] [BOT] ✅ Saved pending queue: 2918 total (2531 pending, 37 enriched, 350 posted)
[2026-01-30T09:59:00.951Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T09:59:01.035Z] [BOT] 📂 Loaded 10431 existing routing entries
[2026-01-30T09:59:01.155Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T09:59:01.155Z] [BOT] New entries: 10
   Total entries: 10441
   Timestamp: 2026-01-30T09:59:01.112Z
[2026-01-30T09:59:01.156Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T09:59:01.156Z] [BOT] Total attempts: 25
   Successful: 11
   Failed: 0
   Skipped: 14
[2026-01-30T09:59:01.156Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📊・JID_fb739488: 2 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T09:59:01.156Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 379 jobs in memory (cached)
[2026-01-30T09:59:01.165Z] [BOT] ✅ Loaded V2 database: 379 jobs
💾 DISK STATE: 379 jobs on disk
[2026-01-30T09:59:01.165Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=379
[2026-01-30T09:59:01.166Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:59:01.166Z] [BOT] 💾 AFTER MERGE: 379 jobs (merged disk + memory)
[2026-01-30T09:59:01.166Z] [BOT] ✅ No jobs to archive (all 379 jobs within 7-day window)
[2026-01-30T09:59:01.189Z] [BOT] 💾 Saved posted_jobs.json: 379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:59:01.190Z] [BOT] ✅ Database saved successfully
[2026-01-30T09:59:03.223Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*