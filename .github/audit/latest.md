# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T20:52:03.561Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T20:51:26.869Z] ========================================
[2026-01-30T20:51:26.871Z] Discord Bot Execution Log
[2026-01-30T20:51:26.871Z] Environment: GitHub Actions
[2026-01-30T20:51:26.871Z] Node Version: v20.20.0
[2026-01-30T20:51:26.871Z] ========================================
[2026-01-30T20:51:26.871Z] Environment Variables Check:
[2026-01-30T20:51:26.871Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T20:51:26.872Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T20:51:26.872Z] 
Multi-Channel Configuration:
[2026-01-30T20:51:26.872Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.872Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.873Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T20:51:26.873Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T20:51:26.873Z] 
Data Files Check:
[2026-01-30T20:51:26.874Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T20:51:26.900Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4352282 bytes)
[2026-01-30T20:51:26.900Z] 
========================================
[2026-01-30T20:51:26.900Z] Starting Enhanced Discord Bot...
[2026-01-30T20:51:26.900Z] ========================================
[2026-01-30T20:51:27.440Z] [BOT] ✅ Loaded V2 database: 658 jobs
[2026-01-30T20:51:28.130Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T20:51:28.130Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T20:51:28.131Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T20:51:28.243Z] [BOT] ✅ Loaded pending queue: 2933 total (2254 pending, 50 enriched, 629 posted)
[2026-01-30T20:51:28.244Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:51:28.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T20:51:28.245Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T20:51:28.245Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:51:28.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T20:51:28.245Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T20:51:28.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T20:51:28.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T20:51:28.246Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T20:51:28.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T20:51:28.246Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T20:51:28.246Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T20:51:28.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T20:51:28.247Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T20:51:28.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-30T20:51:28.247Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T20:51:28.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T20:51:28.248Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T20:51:28.248Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T20:51:28.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T20:51:28.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T20:51:28.248Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T20:51:28.254Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T20:51:28.254Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-01-30T20:51:28.255Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Data Engineer at SoFi
[2026-01-30T20:51:28.385Z] [BOT] ✅ Loaded pending queue: 2933 total (2254 pending, 50 enriched, 629 posted)
[2026-01-30T20:51:28.583Z] [BOT] ✅ Saved pending queue: 2923 total (2254 pending, 40 enriched, 629 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
[2026-01-30T20:51:28.583Z] [BOT] 📋 After blacklist filter: 26 jobs (10 blacklisted)
📋 After data quality filter: 26 jobs (0 invalid)
[2026-01-30T20:51:28.584Z] [BOT] 📋 After multi-location grouping: 13 unique jobs to post
   (13 grouped as same job with different locations)
[2026-01-30T20:51:28.584Z] [BOT] 📍 3 jobs with multiple locations:
   - Mid-Market Account Executive - PubSec @ samsara: dallas, san antonio, louisville
   - Select Major Account Executive EST/CST - Hartford, CT @ samsara: hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: san francisco, los angeles
[2026-01-30T20:51:28.584Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T20:51:28.588Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T20:51:28.589Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial - (Portland, OR)" @ samsara
[2026-01-30T20:51:28.589Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:51:28.606Z] [BOT ERROR] (node:3280) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T20:51:29.064Z] [BOT] ✅ Posted message: Account Executive, Commercial - (Portland, OR) @ samsara in #💻・tech-jobs
  ✅ Industry: Account Executive, Commercial - (Portland, OR) @ samsara
[2026-01-30T20:51:29.065Z] [BOT] 💾 Added channel posting: Account Executive, Commercial - (Portland, OR) @ samsara → category channel (1 total channels)
[2026-01-30T20:51:29.065Z] [BOT] 💾 BEFORE MERGE: 659 jobs in memory (cached)
[2026-01-30T20:51:29.082Z] [BOT] ✅ Loaded V2 database: 658 jobs
💾 DISK STATE: 658 jobs on disk
[2026-01-30T20:51:29.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=659
[2026-01-30T20:51:29.084Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:29.085Z] [BOT] 💾 AFTER MERGE: 659 jobs (merged disk + memory)
[2026-01-30T20:51:29.085Z] [BOT] ✅ No jobs to archive (all 659 jobs within 7-day window)
[2026-01-30T20:51:29.143Z] [BOT] 💾 Saved posted_jobs.json: 659 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:30.646Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:51:32.365Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T20:51:32.366Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 660 jobs in memory (cached)
[2026-01-30T20:51:32.381Z] [BOT] ✅ Loaded V2 database: 659 jobs
💾 DISK STATE: 659 jobs on disk
[2026-01-30T20:51:32.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=660
[2026-01-30T20:51:32.382Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:32.382Z] [BOT] 💾 AFTER MERGE: 660 jobs (merged disk + memory)
[2026-01-30T20:51:32.383Z] [BOT] ✅ No jobs to archive (all 660 jobs within 7-day window)
[2026-01-30T20:51:32.426Z] [BOT] 💾 Saved posted_jobs.json: 660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:33.929Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Frontend" @ ORG_ba59014a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:51:34.107Z] [BOT] ✅ Posted message: Software Development Engineer 1 - Frontend @ ORG_ba59014a in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Frontend @ ORG_ba59014a
[2026-01-30T20:51:34.107Z] [BOT] 💾 Added channel posting: Software Development Engineer 1 - Frontend @ ORG_ba59014a → category channel (1 total channels)
[2026-01-30T20:51:34.107Z] [BOT] 💾 BEFORE MERGE: 661 jobs in memory (cached)
[2026-01-30T20:51:34.122Z] [BOT] ✅ Loaded V2 database: 660 jobs
💾 DISK STATE: 660 jobs on disk
[2026-01-30T20:51:34.123Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=661
[2026-01-30T20:51:34.124Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:34.124Z] [BOT] 💾 AFTER MERGE: 661 jobs (merged disk + memory)
[2026-01-30T20:51:34.125Z] [BOT] ✅ No jobs to archive (all 661 jobs within 7-day window)
[2026-01-30T20:51:34.167Z] [BOT] 💾 Saved posted_jobs.json: 661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:35.669Z] [BOT] 📍 [ROUTING] "Analyst – Data & Software Engineering - February 2026 Start Date" @ ORG_82e4502a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:51:36.135Z] [BOT] ✅ Posted message: Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a in #💻・tech-jobs
[2026-01-30T20:51:36.135Z] [BOT] ✅ Industry: Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a
[2026-01-30T20:51:36.135Z] [BOT] 💾 Added channel posting: Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a → category channel (1 total channels)
[2026-01-30T20:51:36.136Z] [BOT] 💾 BEFORE MERGE: 662 jobs in memory (cached)
[2026-01-30T20:51:36.150Z] [BOT] ✅ Loaded V2 database: 661 jobs
💾 DISK STATE: 661 jobs on disk
[2026-01-30T20:51:36.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=662
[2026-01-30T20:51:36.152Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:36.152Z] [BOT] 💾 AFTER MERGE: 662 jobs (merged disk + memory)
[2026-01-30T20:51:36.153Z] [BOT] ✅ No jobs to archive (all 662 jobs within 7-day window)
[2026-01-30T20:51:36.200Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:37.701Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_bf9b9a09
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:51:37.918Z] [BOT] ✅ Posted message: GIS Technician @ ORG_bf9b9a09 in #💻・tech-jobs
  ✅ Industry: GIS Technician @ ORG_bf9b9a09
[2026-01-30T20:51:37.918Z] [BOT] 💾 Added channel posting: GIS Technician @ ORG_bf9b9a09 → category channel (1 total channels)
[2026-01-30T20:51:37.918Z] [BOT] 💾 BEFORE MERGE: 663 jobs in memory (cached)
[2026-01-30T20:51:37.932Z] [BOT] ✅ Loaded V2 database: 662 jobs
💾 DISK STATE: 662 jobs on disk
[2026-01-30T20:51:37.932Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=663
[2026-01-30T20:51:37.934Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:37.934Z] [BOT] 💾 AFTER MERGE: 663 jobs (merged disk + memory)
[2026-01-30T20:51:37.934Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2026-01-30T20:51:37.979Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:42.480Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T20:51:42.481Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Hartford, CT" @ samsara
[2026-01-30T20:51:42.481Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T20:51:42.828Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Hartford, CT @ samsara in #💰・finance-jobs
[2026-01-30T20:51:42.829Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Hartford, CT @ samsara
[2026-01-30T20:51:42.829Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Hartford, CT @ samsara → category channel (1 total channels)
[2026-01-30T20:51:42.829Z] [BOT] 💾 BEFORE MERGE: 664 jobs in memory (cached)
[2026-01-30T20:51:42.845Z] [BOT] ✅ Loaded V2 database: 663 jobs
💾 DISK STATE: 663 jobs on disk
[2026-01-30T20:51:42.845Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=664
[2026-01-30T20:51:42.846Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:42.847Z] [BOT] 💾 AFTER MERGE: 664 jobs (merged disk + memory)
[2026-01-30T20:51:42.847Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2026-01-30T20:51:42.897Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:47.399Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T20:51:47.400Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
[2026-01-30T20:51:47.400Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:51:47.915Z] [BOT] ✅ Posted message: Android Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-30T20:51:47.916Z] [BOT] ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-30T20:51:47.916Z] [BOT] 💾 Added channel posting: Android Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-30T20:51:47.916Z] [BOT] 💾 BEFORE MERGE: 665 jobs in memory (cached)
[2026-01-30T20:51:47.929Z] [BOT] ✅ Loaded V2 database: 664 jobs
[2026-01-30T20:51:47.930Z] [BOT] 💾 DISK STATE: 664 jobs on disk
[2026-01-30T20:51:47.930Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=665
[2026-01-30T20:51:47.931Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:47.932Z] [BOT] 💾 AFTER MERGE: 665 jobs (merged disk + memory)
[2026-01-30T20:51:47.932Z] [BOT] ✅ No jobs to archive (all 665 jobs within 7-day window)
[2026-01-30T20:51:47.973Z] [BOT] 💾 Saved posted_jobs.json: 665 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:49.475Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, Ad Formats" @ reddit
[2026-01-30T20:51:49.475Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:51:49.687Z] [BOT] ✅ Posted message: iOS Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-30T20:51:49.687Z] [BOT] ✅ Industry: iOS Software Engineer, Ad Formats @ reddit
[2026-01-30T20:51:49.688Z] [BOT] 💾 Added channel posting: iOS Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-30T20:51:49.701Z] [BOT] ✅ Loaded V2 database: 665 jobs
💾 DISK STATE: 665 jobs on disk
[2026-01-30T20:51:49.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-30T20:51:49.702Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:49.703Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-30T20:51:49.703Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-30T20:51:49.747Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:51.443Z] [BOT] ✅ Posted message: iOS Software Engineer, Ad Formats @ reddit in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:51:51.443Z] [BOT] 💾 Added channel posting: iOS Software Engineer, Ad Formats @ reddit → location channel (2 total channels)
[2026-01-30T20:51:51.443Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-30T20:51:51.456Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-30T20:51:51.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-30T20:51:51.458Z] [BOT] 🔀 Deep merged: iOS Software Engineer, Ad Formats @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T20:51:51.458Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-30T20:51:51.458Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-30T20:51:51.501Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:53.002Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-30T20:51:53.003Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:51:53.287Z] [BOT] ✅ Posted message: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🤖・ai-jobs
  ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-30T20:51:53.288Z] [BOT] 💾 Added channel posting: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit → category channel (1 total channels)
💾 BEFORE MERGE: 667 jobs in memory (cached)
[2026-01-30T20:51:53.301Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-30T20:51:53.301Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=667
[2026-01-30T20:51:53.302Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:53.302Z] [BOT] 💾 AFTER MERGE: 667 jobs (merged disk + memory)
[2026-01-30T20:51:53.303Z] [BOT] ✅ No jobs to archive (all 667 jobs within 7-day window)
[2026-01-30T20:51:53.347Z] [BOT] 💾 Saved posted_jobs.json: 667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:54.848Z] [BOT] 📍 [ROUTING] "IT Software Engineering - Data Engineer" @ ORG_66279f04 Investments
[2026-01-30T20:51:54.849Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T20:51:55.044Z] [BOT] ✅ Posted message: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments in #🤖・ai-jobs
  ✅ Industry: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments
[2026-01-30T20:51:55.045Z] [BOT] 💾 Added channel posting: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments → category channel (1 total channels)
[2026-01-30T20:51:55.045Z] [BOT] 💾 BEFORE MERGE: 668 jobs in memory (cached)
[2026-01-30T20:51:55.058Z] [BOT] ✅ Loaded V2 database: 667 jobs
💾 DISK STATE: 667 jobs on disk
[2026-01-30T20:51:55.058Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=668
[2026-01-30T20:51:55.059Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:51:55.060Z] [BOT] 💾 AFTER MERGE: 668 jobs (merged disk + memory)
[2026-01-30T20:51:55.060Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2026-01-30T20:51:55.103Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:51:59.605Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T20:51:59.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "f3a42442a8a29fcc"
[2026-01-30T20:51:59.607Z] [BOT] ⏭️  Skipping duplicate: JID_e3f8f768 (posted within 7 days)
[2026-01-30T20:51:59.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "7878f6bd1c2a4c68"
⏭️  Skipping duplicate: JID_21058fad (posted within 7 days)
[2026-01-30T20:51:59.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "3b1f5f7332ddd3cf"
[2026-01-30T20:51:59.607Z] [BOT] ⏭️  Skipping duplicate: JID_1c77b7cd (posted within 7 days)
[2026-01-30T20:51:59.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "57f742b7224c1c0a"
⏭️  Skipping duplicate: JID_301322c4 (posted within 7 days)
[2026-01-30T20:51:59.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "eb031f60c64fee14"
[2026-01-30T20:51:59.607Z] [BOT] ⏭️  Skipping duplicate: JID_93d99d6b (posted within 7 days)
[2026-01-30T20:51:59.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "43f33bf6b35e76e1"
[2026-01-30T20:51:59.608Z] [BOT] ⏭️  Skipping duplicate: JID_8c8d5448 (posted within 7 days)
[2026-01-30T20:51:59.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_68c7b807-..." not found, but found as SHA256 "fda7f583267b4e74"
⏭️  Skipping duplicate: JID_fcdc7c78 (posted within 7 days)
[2026-01-30T20:51:59.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37bfa70e..." not found, but found as SHA256 "0a729562f0b6e24b"
[2026-01-30T20:51:59.608Z] [BOT] ⏭️  Skipping duplicate: JID_ef6e297f-engineer_2123335-1 (posted within 7 days)
[2026-01-30T20:51:59.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6fe9d7cd..." not found, but found as SHA256 "5b4b5dc072856db2"
⏭️  Skipping duplicate: JID_52d5dba1-date_jr100158-1 (posted within 7 days)
[2026-01-30T20:51:59.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ebf079ba-..." not found, but found as SHA256 "643a4e39a1b5d1f0"
⏭️  Skipping duplicate: JID_386de6fc-technician_r00941773 (posted within 7 days)
[2026-01-30T20:51:59.710Z] [BOT] ✅ Loaded pending queue: 2923 total (2254 pending, 40 enriched, 629 posted)
[2026-01-30T20:51:59.895Z] [BOT] ✅ Saved pending queue: 2923 total (2254 pending, 30 enriched, 639 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T20:51:59.895Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T20:51:59.981Z] [BOT] 📂 Loaded 10720 existing routing entries
[2026-01-30T20:52:00.124Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T20:52:00.124Z] [BOT] New entries: 10
   Total entries: 10730
   Timestamp: 2026-01-30T20:52:00.080Z
[2026-01-30T20:52:00.125Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T20:52:00.126Z] [BOT] Total attempts: 35
   Successful: 11
   Failed: 0
   Skipped: 24
[2026-01-30T20:52:00.126Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T20:52:00.126Z] [BOT] Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-30T20:52:00.126Z] [BOT] 3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T20:52:00.126Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T20:52:00.126Z] [BOT] 💾 BEFORE MERGE: 668 jobs in memory (cached)
[2026-01-30T20:52:00.141Z] [BOT] ✅ Loaded V2 database: 668 jobs
💾 DISK STATE: 668 jobs on disk
[2026-01-30T20:52:00.141Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=668
[2026-01-30T20:52:00.143Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:52:00.143Z] [BOT] 💾 AFTER MERGE: 668 jobs (merged disk + memory)
[2026-01-30T20:52:00.143Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2026-01-30T20:52:00.187Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:52:00.188Z] [BOT] ✅ Database saved successfully
[2026-01-30T20:52:02.218Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3280) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*