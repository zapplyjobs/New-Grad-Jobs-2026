# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T11:48:44.434Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T11:48:11.092Z] ========================================
[2026-01-30T11:48:11.094Z] Discord Bot Execution Log
[2026-01-30T11:48:11.094Z] Environment: GitHub Actions
[2026-01-30T11:48:11.094Z] Node Version: v20.20.0
[2026-01-30T11:48:11.094Z] ========================================
[2026-01-30T11:48:11.094Z] Environment Variables Check:
[2026-01-30T11:48:11.094Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T11:48:11.094Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.094Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T11:48:11.095Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T11:48:11.095Z] 
Multi-Channel Configuration:
[2026-01-30T11:48:11.095Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T11:48:11.095Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T11:48:11.095Z] 
Data Files Check:
[2026-01-30T11:48:11.096Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T11:48:11.112Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2757637 bytes)
[2026-01-30T11:48:11.112Z] 
========================================
[2026-01-30T11:48:11.112Z] Starting Enhanced Discord Bot...
[2026-01-30T11:48:11.112Z] ========================================
[2026-01-30T11:48:11.650Z] [BOT] ✅ Loaded V2 database: 419 jobs
[2026-01-30T11:48:12.447Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T11:48:12.447Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T11:48:12.448Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T11:48:12.570Z] [BOT] ✅ Loaded pending queue: 2920 total (2480 pending, 50 enriched, 390 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:48:12.570Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T11:48:12.570Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:48:12.571Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T11:48:12.571Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T11:48:12.571Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T11:48:12.571Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T11:48:12.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T11:48:12.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T11:48:12.572Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T11:48:12.572Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T11:48:12.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T11:48:12.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T11:48:12.573Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T11:48:12.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-30T11:48:12.573Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T11:48:12.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T11:48:12.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T11:48:12.574Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T11:48:12.577Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T11:48:12.578Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Recruiting at samsara
[2026-01-30T11:48:12.687Z] [BOT] ✅ Loaded pending queue: 2920 total (2480 pending, 50 enriched, 390 posted)
[2026-01-30T11:48:12.862Z] [BOT] ✅ Saved pending queue: 2919 total (2480 pending, 49 enriched, 390 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-30T11:48:12.862Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-30T11:48:12.863Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
   (10 grouped as same job with different locations)
[2026-01-30T11:48:12.863Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-30T11:48:12.863Z] [BOT] - Strategic Account Executive (SLED) @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
   - Strategic Account Executive @ datadog: remote, san francisco, california, usa, new york, new york, usa, boston, massachusetts, usa, chicago, illinois, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T11:48:12.868Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T11:48:12.868Z] [BOT] 📍 [ROUTING] "Technical Support Engineer - Android/iOS SDK" @ ORG_1bb6fcfb
[2026-01-30T11:48:12.869Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:12.886Z] [BOT ERROR] (node:2913) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T11:48:13.286Z] [BOT] ✅ Posted message: Technical Support Engineer - Android/iOS SDK @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-30T11:48:13.287Z] [BOT] ✅ Industry: Technical Support Engineer - Android/iOS SDK @ ORG_1bb6fcfb
[2026-01-30T11:48:13.287Z] [BOT] 💾 Added channel posting: Technical Support Engineer - Android/iOS SDK @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-30T11:48:13.287Z] [BOT] 💾 BEFORE MERGE: 420 jobs in memory (cached)
[2026-01-30T11:48:13.299Z] [BOT] ✅ Loaded V2 database: 419 jobs
💾 DISK STATE: 419 jobs on disk
[2026-01-30T11:48:13.299Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=420
[2026-01-30T11:48:13.300Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:13.301Z] [BOT] 💾 AFTER MERGE: 420 jobs (merged disk + memory)
[2026-01-30T11:48:13.301Z] [BOT] ✅ No jobs to archive (all 420 jobs within 7-day window)
[2026-01-30T11:48:13.335Z] [BOT] 💾 Saved posted_jobs.json: 420 active jobs
[2026-01-30T11:48:13.335Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:14.838Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_68339b13
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:15.120Z] [BOT] ✅ Posted message: Software Engineer @ ORG_68339b13 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_68339b13
[2026-01-30T11:48:15.120Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_68339b13 → category channel (1 total channels)
[2026-01-30T11:48:15.120Z] [BOT] 💾 BEFORE MERGE: 421 jobs in memory (cached)
[2026-01-30T11:48:15.130Z] [BOT] ✅ Loaded V2 database: 420 jobs
💾 DISK STATE: 420 jobs on disk
[2026-01-30T11:48:15.130Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=421
[2026-01-30T11:48:15.131Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 421 jobs (merged disk + memory)
[2026-01-30T11:48:15.131Z] [BOT] ✅ No jobs to archive (all 421 jobs within 7-day window)
[2026-01-30T11:48:15.159Z] [BOT] 💾 Saved posted_jobs.json: 421 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:16.661Z] [BOT] 📍 [ROUTING] "Asset & Wealth Management Tech Graduate Solutions Analyst Program" @ ORG_b1a96dd6 FMC
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:17.147Z] [BOT] ✅ Posted message: Asset & Wealth Management Tech Graduate Solutions Analyst Program @ ORG_b1a96dd6 FMC in #💻・tech-jobs
  ✅ Industry: Asset & Wealth Management Tech Graduate Solutions Analyst Program @ ORG_b1a96dd6 FMC
[2026-01-30T11:48:17.148Z] [BOT] 💾 Added channel posting: Asset & Wealth Management Tech Graduate Solutions Analyst Program @ ORG_b1a96dd6 FMC → category channel (1 total channels)
💾 BEFORE MERGE: 422 jobs in memory (cached)
[2026-01-30T11:48:17.156Z] [BOT] ✅ Loaded V2 database: 421 jobs
💾 DISK STATE: 421 jobs on disk
[2026-01-30T11:48:17.156Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=422
[2026-01-30T11:48:17.158Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 422 jobs (merged disk + memory)
[2026-01-30T11:48:17.158Z] [BOT] ✅ No jobs to archive (all 422 jobs within 7-day window)
[2026-01-30T11:48:17.184Z] [BOT] 💾 Saved posted_jobs.json: 422 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:18.686Z] [BOT] 📍 [ROUTING] "Software Engineer - Agentic AI Systems" @ ORG_3906eec1
[2026-01-30T11:48:18.686Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:18.953Z] [BOT] ✅ Posted message: Software Engineer - Agentic AI Systems @ ORG_3906eec1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Agentic AI Systems @ ORG_3906eec1
[2026-01-30T11:48:18.954Z] [BOT] 💾 Added channel posting: Software Engineer - Agentic AI Systems @ ORG_3906eec1 → category channel (1 total channels)
💾 BEFORE MERGE: 423 jobs in memory (cached)
[2026-01-30T11:48:18.962Z] [BOT] ✅ Loaded V2 database: 422 jobs
[2026-01-30T11:48:18.962Z] [BOT] 💾 DISK STATE: 422 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=423
[2026-01-30T11:48:18.963Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:18.963Z] [BOT] 💾 AFTER MERGE: 423 jobs (merged disk + memory)
[2026-01-30T11:48:18.967Z] [BOT] ✅ No jobs to archive (all 423 jobs within 7-day window)
[2026-01-30T11:48:18.992Z] [BOT] 💾 Saved posted_jobs.json: 423 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:20.494Z] [BOT] 📍 [ROUTING] "Consulting Associate - Air Quality" @ ORG_d41a2092
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:20.832Z] [BOT] ✅ Posted message: Consulting Associate - Air Quality @ ORG_d41a2092 in #💻・tech-jobs
  ✅ Industry: Consulting Associate - Air Quality @ ORG_d41a2092
[2026-01-30T11:48:20.832Z] [BOT] 💾 Added channel posting: Consulting Associate - Air Quality @ ORG_d41a2092 → category channel (1 total channels)
[2026-01-30T11:48:20.832Z] [BOT] 💾 BEFORE MERGE: 424 jobs in memory (cached)
[2026-01-30T11:48:20.846Z] [BOT] ✅ Loaded V2 database: 423 jobs
💾 DISK STATE: 423 jobs on disk
[2026-01-30T11:48:20.846Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=424
[2026-01-30T11:48:20.847Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:20.847Z] [BOT] 💾 AFTER MERGE: 424 jobs (merged disk + memory)
[2026-01-30T11:48:20.847Z] [BOT] ✅ No jobs to archive (all 424 jobs within 7-day window)
[2026-01-30T11:48:20.877Z] [BOT] 💾 Saved posted_jobs.json: 424 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:22.378Z] [BOT] 📍 [ROUTING] "Software Engineer - Apps - I" @ ORG_d01167bb
   Category: TECH (matched: "software")
[2026-01-30T11:48:22.379Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:22.600Z] [BOT] ✅ Posted message: Software Engineer - Apps - I @ ORG_d01167bb in #💻・tech-jobs
[2026-01-30T11:48:22.600Z] [BOT] ✅ Industry: Software Engineer - Apps - I @ ORG_d01167bb
[2026-01-30T11:48:22.600Z] [BOT] 💾 Added channel posting: Software Engineer - Apps - I @ ORG_d01167bb → category channel (1 total channels)
[2026-01-30T11:48:22.600Z] [BOT] 💾 BEFORE MERGE: 425 jobs in memory (cached)
[2026-01-30T11:48:22.609Z] [BOT] ✅ Loaded V2 database: 424 jobs
💾 DISK STATE: 424 jobs on disk
[2026-01-30T11:48:22.610Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=425
[2026-01-30T11:48:22.611Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:22.611Z] [BOT] 💾 AFTER MERGE: 425 jobs (merged disk + memory)
[2026-01-30T11:48:22.611Z] [BOT] ✅ No jobs to archive (all 425 jobs within 7-day window)
[2026-01-30T11:48:22.643Z] [BOT] 💾 Saved posted_jobs.json: 425 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:24.144Z] [BOT] 📍 [ROUTING] "Applied Scientist 1 - SPB Advertiser Guidance" @ ORG_49d2dc07
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:48:24.512Z] [BOT] ✅ Posted message: Applied Scientist 1 - SPB Advertiser Guidance @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Applied Scientist 1 - SPB Advertiser Guidance @ ORG_49d2dc07
[2026-01-30T11:48:24.512Z] [BOT] 💾 Added channel posting: Applied Scientist 1 - SPB Advertiser Guidance @ ORG_49d2dc07 → category channel (1 total channels)
[2026-01-30T11:48:24.512Z] [BOT] 💾 BEFORE MERGE: 426 jobs in memory (cached)
[2026-01-30T11:48:24.523Z] [BOT] ✅ Loaded V2 database: 425 jobs
💾 DISK STATE: 425 jobs on disk
[2026-01-30T11:48:24.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=426
[2026-01-30T11:48:24.528Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:24.528Z] [BOT] 💾 AFTER MERGE: 426 jobs (merged disk + memory)
[2026-01-30T11:48:24.528Z] [BOT] ✅ No jobs to archive (all 426 jobs within 7-day window)
[2026-01-30T11:48:24.560Z] [BOT] 💾 Saved posted_jobs.json: 426 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:29.059Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T11:48:29.060Z] [BOT] 📍 [ROUTING] "Associate EDI Analyst" @ ORG_c9453059 Berkley
   Category: FINANCE (matched: "audit")
[2026-01-30T11:48:29.060Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:48:29.458Z] [BOT] ✅ Posted message: Associate EDI Analyst @ ORG_c9453059 Berkley in #💰・finance-jobs
  ✅ Industry: Associate EDI Analyst @ ORG_c9453059 Berkley
[2026-01-30T11:48:29.458Z] [BOT] 💾 Added channel posting: Associate EDI Analyst @ ORG_c9453059 Berkley → category channel (1 total channels)
[2026-01-30T11:48:29.458Z] [BOT] 💾 BEFORE MERGE: 427 jobs in memory (cached)
[2026-01-30T11:48:29.467Z] [BOT] ✅ Loaded V2 database: 426 jobs
💾 DISK STATE: 426 jobs on disk
[2026-01-30T11:48:29.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=427
[2026-01-30T11:48:29.468Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:29.468Z] [BOT] 💾 AFTER MERGE: 427 jobs (merged disk + memory)
[2026-01-30T11:48:29.468Z] [BOT] ✅ No jobs to archive (all 427 jobs within 7-day window)
[2026-01-30T11:48:29.496Z] [BOT] 💾 Saved posted_jobs.json: 427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:30.998Z] [BOT] 📍 [ROUTING] "Sales Recruiter, EDR" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T11:48:30.998Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:48:31.283Z] [BOT] ✅ Posted message: Sales Recruiter, EDR @ verkada in #💰・finance-jobs
[2026-01-30T11:48:31.283Z] [BOT] ✅ Industry: Sales Recruiter, EDR @ verkada
[2026-01-30T11:48:31.283Z] [BOT] 💾 Added channel posting: Sales Recruiter, EDR @ verkada → category channel (1 total channels)
[2026-01-30T11:48:31.283Z] [BOT] 💾 BEFORE MERGE: 428 jobs in memory (cached)
[2026-01-30T11:48:31.292Z] [BOT] ✅ Loaded V2 database: 427 jobs
💾 DISK STATE: 427 jobs on disk
[2026-01-30T11:48:31.292Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=428
[2026-01-30T11:48:31.296Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:31.296Z] [BOT] 💾 AFTER MERGE: 428 jobs (merged disk + memory)
[2026-01-30T11:48:31.296Z] [BOT] ✅ No jobs to archive (all 428 jobs within 7-day window)
[2026-01-30T11:48:31.325Z] [BOT] 💾 Saved posted_jobs.json: 428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:35.826Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T11:48:35.827Z] [BOT] 📍 [ROUTING] "Associate Content Author" @ ORG_427dd296 Mass
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T11:48:36.168Z] [BOT] ✅ Posted message: Associate Content Author @ ORG_427dd296 Mass in #🤖・ai-jobs
  ✅ Industry: Associate Content Author @ ORG_427dd296 Mass
[2026-01-30T11:48:36.169Z] [BOT] 💾 Added channel posting: Associate Content Author @ ORG_427dd296 Mass → category channel (1 total channels)
[2026-01-30T11:48:36.169Z] [BOT] 💾 BEFORE MERGE: 429 jobs in memory (cached)
[2026-01-30T11:48:36.178Z] [BOT] ✅ Loaded V2 database: 428 jobs
💾 DISK STATE: 428 jobs on disk
[2026-01-30T11:48:36.178Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=429
[2026-01-30T11:48:36.179Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:48:36.179Z] [BOT] 💾 AFTER MERGE: 429 jobs (merged disk + memory)
[2026-01-30T11:48:36.180Z] [BOT] ✅ No jobs to archive (all 429 jobs within 7-day window)
[2026-01-30T11:48:36.206Z] [BOT] 💾 Saved posted_jobs.json: 429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:40.708Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T11:48:40.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63a9b7bd..." not found, but found as SHA256 "0a5ddd2435d2a4cf"
⏭️  Skipping duplicate: JID_6796d1d6-CH_574a9020 (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2be79075..." not found, but found as SHA256 "a88e44122e470523"
⏭️  Skipping duplicate: JID_2be79075 (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "69e95e7c5bfaeaa8"
⏭️  Skipping duplicate: JID_d03588b0 (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5ce330f..." not found, but found as SHA256 "231088c807daa1fa"
⏭️  Skipping duplicate: JID_252de685-external_career_site-JID_6512a281-engineer_26-0007 (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6ba322f0..." not found, but found as SHA256 "d1ac54b6dc50d0fb"
⏭️  Skipping duplicate: JID_50fcbe11 (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9a5cc81c..." not found, but found as SHA256 "91798fbf6cac7dad"
⏭️  Skipping duplicate: JID_82f37ddd (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_68fd1279-..." not found, but found as SHA256 "a652d243f78281a4"
⏭️  Skipping duplicate: JID_e42d350d (posted within 7 days)
[2026-01-30T11:48:40.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "83cf9198d9d8346c"
[2026-01-30T11:48:40.710Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_48b4c19e-quality_r00028962-1 (posted within 7 days)
[2026-01-30T11:48:40.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_787cd3f3..." not found, but found as SHA256 "f515b3dfb255e67a"
⏭️  Skipping duplicate: JID_36efaac8-i_6567 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_16bf2187..." not found, but found as SHA256 "7b664da16ff5f52d"
⏭️  Skipping duplicate: JID_e67c5465 (posted within 7 days)
[2026-01-30T11:48:40.847Z] [BOT] ✅ Loaded pending queue: 2919 total (2480 pending, 49 enriched, 390 posted)
[2026-01-30T11:48:41.017Z] [BOT] ✅ Saved pending queue: 2919 total (2480 pending, 39 enriched, 400 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T11:48:41.017Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T11:48:41.103Z] [BOT] 📂 Loaded 10481 existing routing entries
[2026-01-30T11:48:41.222Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10491
   Timestamp: 2026-01-30T11:48:41.180Z
[2026-01-30T11:48:41.223Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T11:48:41.223Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-30T11:48:41.223Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T11:48:41.223Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #💰・finance-jobs: 2 posts
     3. #🤖・ai-jobs: 1 posts
[2026-01-30T11:48:41.223Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T11:48:41.223Z] [BOT] 💾 BEFORE MERGE: 429 jobs in memory (cached)
[2026-01-30T11:48:41.240Z] [BOT] ✅ Loaded V2 database: 429 jobs
💾 DISK STATE: 429 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=429
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 429 jobs (merged disk + memory)
✅ No jobs to archive (all 429 jobs within 7-day window)
[2026-01-30T11:48:41.282Z] [BOT] 💾 Saved posted_jobs.json: 429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:48:41.283Z] [BOT] ✅ Database saved successfully
[2026-01-30T11:48:43.311Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2913) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*