# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T22:48:17.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T22:47:37.808Z] ========================================
[2026-01-31T22:47:37.809Z] Discord Bot Execution Log
[2026-01-31T22:47:37.809Z] Environment: GitHub Actions
[2026-01-31T22:47:37.810Z] Node Version: v20.20.0
[2026-01-31T22:47:37.810Z] ========================================
[2026-01-31T22:47:37.810Z] Environment Variables Check:
[2026-01-31T22:47:37.810Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T22:47:37.810Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T22:47:37.810Z] 
Multi-Channel Configuration:
[2026-01-31T22:47:37.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.810Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T22:47:37.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T22:47:37.811Z] 
Data Files Check:
[2026-01-31T22:47:37.812Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T22:47:37.867Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8491737 bytes)
[2026-01-31T22:47:37.867Z] 
========================================
[2026-01-31T22:47:37.867Z] Starting Enhanced Discord Bot...
[2026-01-31T22:47:37.867Z] ========================================
[2026-01-31T22:47:38.415Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-31T22:47:39.140Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T22:47:39.140Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T22:47:39.140Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T22:47:39.299Z] [BOT] ✅ Loaded pending queue: 2951 total (1424 pending, 50 enriched, 1477 posted)
[2026-01-31T22:47:39.299Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T22:47:39.299Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:47:39.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T22:47:39.300Z] [BOT] ⏭️  Skipping old job: JID_848dc8c3 (original posting 7 days ago, max is 7)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:47:39.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T22:47:39.301Z] [BOT] ⏭️  Skipping old job: JID_424b6201 (original posting 7 days ago, max is 7)
[2026-01-31T22:47:39.301Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T22:47:39.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T22:47:39.301Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T22:47:39.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T22:47:39.302Z] [BOT] ⏭️  Skipping old job: JID_039c2721-2026_jr2011172 (original posting 7 days ago, max is 7)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T22:47:39.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T22:47:39.303Z] [BOT] ⏭️  Skipping old job: JID_44f5b1e5 (original posting 7 days ago, max is 7)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T22:47:39.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T22:47:39.303Z] [BOT] ⏭️  Skipping old job: JID_bd982bf9 (original posting 7 days ago, max is 7)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T22:47:39.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping old job: JID_5fee43a6 (original posting 7 days ago, max is 7)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T22:47:39.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T22:47:39.304Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T22:47:39.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T22:47:39.304Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T22:47:39.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T22:47:39.304Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T22:47:39.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T22:47:39.304Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T22:47:39.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T22:47:39.305Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T22:47:39.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T22:47:39.305Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T22:47:39.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T22:47:39.305Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T22:47:39.315Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T22:47:39.315Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Argonne National Laboratory
[2026-01-31T22:47:39.531Z] [BOT] ✅ Loaded pending queue: 2951 total (1424 pending, 50 enriched, 1477 posted)
[2026-01-31T22:47:39.709Z] [BOT] ✅ Saved pending queue: 2950 total (1424 pending, 49 enriched, 1477 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T22:47:39.709Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T22:47:39.710Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T22:47:39.710Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Advanced Degree Software Engineer - Fusion @ Oracle: san carlos, seattle
[2026-01-31T22:47:39.710Z] [BOT] - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T22:47:39.714Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T22:47:39.715Z] [BOT] 📍 [ROUTING] "Programmer Analyst" @ ORG_39509385 Systems Integrators
[2026-01-31T22:47:39.715Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:39.731Z] [BOT ERROR] (node:3068) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T22:47:40.275Z] [BOT] ✅ Posted message: Programmer Analyst @ ORG_39509385 Systems Integrators in #💻・tech-jobs
[2026-01-31T22:47:40.275Z] [BOT] ✅ Industry: Programmer Analyst @ ORG_39509385 Systems Integrators
[2026-01-31T22:47:40.276Z] [BOT] 💾 Added channel posting: Programmer Analyst @ ORG_39509385 Systems Integrators → category channel (1 total channels)
[2026-01-31T22:47:40.276Z] [BOT] 💾 BEFORE MERGE: 1498 jobs in memory (cached)
[2026-01-31T22:47:40.313Z] [BOT] ✅ Loaded V2 database: 1497 jobs
💾 DISK STATE: 1497 jobs on disk
[2026-01-31T22:47:40.313Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1498
[2026-01-31T22:47:40.324Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:47:40.325Z] [BOT] 💾 AFTER MERGE: 1498 jobs (merged disk + memory)
[2026-01-31T22:47:40.326Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-31T22:47:40.330Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-31T22:47:40.330Z] [BOT] ✅ Archiving complete: 10 archived, 1488 active
[2026-01-31T22:47:40.435Z] [BOT] 💾 Saved posted_jobs.json: 1488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:41.938Z] [BOT] 📍 [ROUTING] "Account Executive (USA)" @ supabase
   Category: TECH (default)
[2026-01-31T22:47:41.938Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:42.204Z] [BOT] ✅ Posted message: Account Executive (USA) @ supabase in #💻・tech-jobs
[2026-01-31T22:47:42.204Z] [BOT] ✅ Industry: Account Executive (USA) @ supabase
[2026-01-31T22:47:42.205Z] [BOT] 💾 Added channel posting: Account Executive (USA) @ supabase → category channel (1 total channels)
[2026-01-31T22:47:42.205Z] [BOT] 💾 BEFORE MERGE: 1489 jobs in memory (cached)
[2026-01-31T22:47:42.242Z] [BOT] ✅ Loaded V2 database: 1488 jobs
💾 DISK STATE: 1488 jobs on disk
[2026-01-31T22:47:42.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1489
[2026-01-31T22:47:42.253Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1489 jobs (merged disk + memory)
[2026-01-31T22:47:42.254Z] [BOT] ✅ No jobs to archive (all 1489 jobs within 7-day window)
[2026-01-31T22:47:42.346Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:44.096Z] [BOT] ✅ Posted message: Account Executive (USA) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T22:47:44.097Z] [BOT] 💾 Added channel posting: Account Executive (USA) @ supabase → location channel (2 total channels)
[2026-01-31T22:47:44.097Z] [BOT] 💾 BEFORE MERGE: 1489 jobs in memory (cached)
[2026-01-31T22:47:44.134Z] [BOT] ✅ Loaded V2 database: 1489 jobs
💾 DISK STATE: 1489 jobs on disk
[2026-01-31T22:47:44.134Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1489
[2026-01-31T22:47:44.145Z] [BOT] 🔀 Deep merged: Account Executive (USA) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:47:44.145Z] [BOT] 💾 AFTER MERGE: 1489 jobs (merged disk + memory)
[2026-01-31T22:47:44.146Z] [BOT] ✅ No jobs to archive (all 1489 jobs within 7-day window)
[2026-01-31T22:47:44.240Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:45.741Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Productization" @ ORG_acec4064
   Category: TECH (matched: "software")
[2026-01-31T22:47:45.741Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:45.904Z] [BOT] ✅ Posted message: Software Engineer - AI Productization @ ORG_acec4064 in #💻・tech-jobs
  ✅ Industry: Software Engineer - AI Productization @ ORG_acec4064
[2026-01-31T22:47:45.904Z] [BOT] 💾 Added channel posting: Software Engineer - AI Productization @ ORG_acec4064 → category channel (1 total channels)
[2026-01-31T22:47:45.905Z] [BOT] 💾 BEFORE MERGE: 1490 jobs in memory (cached)
[2026-01-31T22:47:45.942Z] [BOT] ✅ Loaded V2 database: 1489 jobs
💾 DISK STATE: 1489 jobs on disk
[2026-01-31T22:47:45.942Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1490
[2026-01-31T22:47:45.949Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:47:45.949Z] [BOT] 💾 AFTER MERGE: 1490 jobs (merged disk + memory)
[2026-01-31T22:47:45.954Z] [BOT] ✅ No jobs to archive (all 1490 jobs within 7-day window)
[2026-01-31T22:47:46.048Z] [BOT] 💾 Saved posted_jobs.json: 1490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:47.549Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator" @ nominal
   Category: TECH (default)
[2026-01-31T22:47:47.550Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:47.863Z] [BOT] ✅ Posted message: Recruiting Coordinator @ nominal in #💻・tech-jobs
[2026-01-31T22:47:47.864Z] [BOT] ✅ Industry: Recruiting Coordinator @ nominal
[2026-01-31T22:47:47.864Z] [BOT] 💾 Added channel posting: Recruiting Coordinator @ nominal → category channel (1 total channels)
[2026-01-31T22:47:47.865Z] [BOT] 💾 BEFORE MERGE: 1491 jobs in memory (cached)
[2026-01-31T22:47:47.902Z] [BOT] ✅ Loaded V2 database: 1490 jobs
💾 DISK STATE: 1490 jobs on disk
[2026-01-31T22:47:47.903Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1491
[2026-01-31T22:47:47.913Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1491 jobs (merged disk + memory)
[2026-01-31T22:47:47.914Z] [BOT] ✅ No jobs to archive (all 1491 jobs within 7-day window)
[2026-01-31T22:47:48.008Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:49.777Z] [BOT] ✅ Posted message: Recruiting Coordinator @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T22:47:49.778Z] [BOT] 💾 Added channel posting: Recruiting Coordinator @ nominal → location channel (2 total channels)
[2026-01-31T22:47:49.778Z] [BOT] 💾 BEFORE MERGE: 1491 jobs in memory (cached)
[2026-01-31T22:47:49.817Z] [BOT] ✅ Loaded V2 database: 1491 jobs
💾 DISK STATE: 1491 jobs on disk
[2026-01-31T22:47:49.817Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1491
[2026-01-31T22:47:49.829Z] [BOT] 🔀 Deep merged: Recruiting Coordinator @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:47:49.829Z] [BOT] 💾 AFTER MERGE: 1491 jobs (merged disk + memory)
[2026-01-31T22:47:49.830Z] [BOT] ✅ No jobs to archive (all 1491 jobs within 7-day window)
[2026-01-31T22:47:49.939Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:51.440Z] [BOT] 📍 [ROUTING] "Software Developer - Asset Management - SWE I','Government" @ ORG_d1aff162
[2026-01-31T22:47:51.440Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:51.677Z] [BOT] ✅ Posted message: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 in #💻・tech-jobs
  ✅ Industry: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162
[2026-01-31T22:47:51.678Z] [BOT] 💾 Added channel posting: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 → category channel (1 total channels)
[2026-01-31T22:47:51.678Z] [BOT] 💾 BEFORE MERGE: 1492 jobs in memory (cached)
[2026-01-31T22:47:51.716Z] [BOT] ✅ Loaded V2 database: 1491 jobs
💾 DISK STATE: 1491 jobs on disk
[2026-01-31T22:47:51.716Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1492
[2026-01-31T22:47:51.727Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1492 jobs (merged disk + memory)
[2026-01-31T22:47:51.728Z] [BOT] ✅ No jobs to archive (all 1492 jobs within 7-day window)
[2026-01-31T22:47:51.823Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:53.325Z] [BOT] 📍 [ROUTING] "Japanese Speaker - AI Trainer" @ ORG_4ee447c5 Technologies
[2026-01-31T22:47:53.325Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:47:53.489Z] [BOT] ✅ Posted message: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
  ✅ Industry: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-31T22:47:53.489Z] [BOT] 💾 Added channel posting: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies → category channel (1 total channels)
[2026-01-31T22:47:53.489Z] [BOT] 💾 BEFORE MERGE: 1493 jobs in memory (cached)
[2026-01-31T22:47:53.526Z] [BOT] ✅ Loaded V2 database: 1492 jobs
[2026-01-31T22:47:53.526Z] [BOT] 💾 DISK STATE: 1492 jobs on disk
[2026-01-31T22:47:53.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1493
[2026-01-31T22:47:53.534Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1493 jobs (merged disk + memory)
[2026-01-31T22:47:53.535Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-31T22:47:53.623Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:47:55.351Z] [BOT] ✅ Posted message: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T22:47:55.351Z] [BOT] 💾 Added channel posting: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies → location channel (2 total channels)
[2026-01-31T22:47:55.351Z] [BOT] 💾 BEFORE MERGE: 1493 jobs in memory (cached)
[2026-01-31T22:47:55.390Z] [BOT] ✅ Loaded V2 database: 1493 jobs
💾 DISK STATE: 1493 jobs on disk
[2026-01-31T22:47:55.391Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1493
[2026-01-31T22:47:55.396Z] [BOT] 🔀 Deep merged: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:47:55.396Z] [BOT] 💾 AFTER MERGE: 1493 jobs (merged disk + memory)
[2026-01-31T22:47:55.401Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-31T22:47:55.499Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:00.002Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T22:48:00.003Z] [BOT] 📍 [ROUTING] "Perception and Autonomy Engineer" @ ORG_1bff266d
[2026-01-31T22:48:00.004Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:48:00.275Z] [BOT] ✅ Posted message: Perception and Autonomy Engineer @ ORG_1bff266d in #🤖・ai-jobs
  ✅ Industry: Perception and Autonomy Engineer @ ORG_1bff266d
[2026-01-31T22:48:00.276Z] [BOT] 💾 Added channel posting: Perception and Autonomy Engineer @ ORG_1bff266d → category channel (1 total channels)
[2026-01-31T22:48:00.276Z] [BOT] 💾 BEFORE MERGE: 1494 jobs in memory (cached)
[2026-01-31T22:48:00.313Z] [BOT] ✅ Loaded V2 database: 1493 jobs
💾 DISK STATE: 1493 jobs on disk
[2026-01-31T22:48:00.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1494
[2026-01-31T22:48:00.321Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1494 jobs (merged disk + memory)
[2026-01-31T22:48:00.322Z] [BOT] ✅ No jobs to archive (all 1494 jobs within 7-day window)
[2026-01-31T22:48:00.419Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:04.922Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-31T22:48:04.923Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Shop AMS Data Science" @ ORG_1bb6fcfb
[2026-01-31T22:48:04.923Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T22:48:05.388Z] [BOT] ✅ Posted message: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb
[2026-01-31T22:48:05.388Z] [BOT] 💾 Added channel posting: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T22:48:05.388Z] [BOT] 💾 BEFORE MERGE: 1495 jobs in memory (cached)
[2026-01-31T22:48:05.426Z] [BOT] ✅ Loaded V2 database: 1494 jobs
💾 DISK STATE: 1494 jobs on disk
[2026-01-31T22:48:05.428Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1495
[2026-01-31T22:48:05.434Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1495 jobs (merged disk + memory)
[2026-01-31T22:48:05.435Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-31T22:48:05.532Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:07.035Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-31T22:48:07.035Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T22:48:07.180Z] [BOT] ✅ Posted message: Data Engineer I @ ORG_5d46ba90 in #📊・JID_fb739488
[2026-01-31T22:48:07.180Z] [BOT] ✅ Industry: Data Engineer I @ ORG_5d46ba90
[2026-01-31T22:48:07.181Z] [BOT] 💾 Added channel posting: Data Engineer I @ ORG_5d46ba90 → category channel (1 total channels)
[2026-01-31T22:48:07.181Z] [BOT] 💾 BEFORE MERGE: 1496 jobs in memory (cached)
[2026-01-31T22:48:07.219Z] [BOT] ✅ Loaded V2 database: 1495 jobs
💾 DISK STATE: 1495 jobs on disk
[2026-01-31T22:48:07.219Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1496
[2026-01-31T22:48:07.226Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1496 jobs (merged disk + memory)
[2026-01-31T22:48:07.228Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-31T22:48:07.324Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:08.824Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_5f7f16bb Engineering
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-31T22:48:08.824Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T22:48:09.215Z] [BOT] ✅ Posted message: Data Analyst 1 @ ORG_5f7f16bb Engineering in #📊・JID_fb739488
  ✅ Industry: Data Analyst 1 @ ORG_5f7f16bb Engineering
[2026-01-31T22:48:09.216Z] [BOT] 💾 Added channel posting: Data Analyst 1 @ ORG_5f7f16bb Engineering → category channel (1 total channels)
[2026-01-31T22:48:09.216Z] [BOT] 💾 BEFORE MERGE: 1497 jobs in memory (cached)
[2026-01-31T22:48:09.253Z] [BOT] ✅ Loaded V2 database: 1496 jobs
💾 DISK STATE: 1496 jobs on disk
[2026-01-31T22:48:09.256Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1497
[2026-01-31T22:48:09.261Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:48:09.262Z] [BOT] 💾 AFTER MERGE: 1497 jobs (merged disk + memory)
[2026-01-31T22:48:09.262Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-31T22:48:09.355Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:13.857Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T22:48:13.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_afa2d455..." not found, but found as SHA256 "b02796054d42dde0"
[2026-01-31T22:48:13.858Z] [BOT] ⏭️  Skipping duplicate: JID_afa2d455 (posted within 7 days)
[2026-01-31T22:48:13.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb9aa836..." not found, but found as SHA256 "cff2d9c11b0318dd"
[2026-01-31T22:48:13.858Z] [BOT] ⏭️  Skipping duplicate: JID_557ded04 (posted within 7 days)
[2026-01-31T22:48:13.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_947408ca..." not found, but found as SHA256 "75815b79c47979fb"
⏭️  Skipping duplicate: JID_6796d1d6-CH_11f30fcc (posted within 7 days)
[2026-01-31T22:48:13.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2efda6c-..." not found, but found as SHA256 "f4e29bb5988b77d7"
⏭️  Skipping duplicate: JID_f5ef0997 (posted within 7 days)
[2026-01-31T22:48:13.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c2156082-en_us-careers-jobdetail-..." not found, but found as SHA256 "842e14601afb5f15"
[2026-01-31T22:48:13.859Z] [BOT] ⏭️  Skipping duplicate: JID_c2156082-en_us-JID_6ea61ba3 (posted within 7 days)
[2026-01-31T22:48:13.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5ec3cc89..." not found, but found as SHA256 "79810f049c9d7f6f"
⏭️  Skipping duplicate: JID_260b6884 (posted within 7 days)
[2026-01-31T22:48:13.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_82c27bdc..." not found, but found as SHA256 "226ef20c2ddfd491"
[2026-01-31T22:48:13.859Z] [BOT] ⏭️  Skipping duplicate: JID_3cb37a2a-_r-88334 (posted within 7 days)
[2026-01-31T22:48:13.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_50957674..." not found, but found as SHA256 "360398fa0fcce78c"
[2026-01-31T22:48:13.860Z] [BOT] ⏭️  Skipping duplicate: JID_a01ad792-cx_1-job-21012997 (posted within 7 days)
[2026-01-31T22:48:13.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a07644e5-..." not found, but found as SHA256 "fe2e5ffb4e9a3d7d"
[2026-01-31T22:48:13.860Z] [BOT] ⏭️  Skipping duplicate: JID_0c057f97 (posted within 7 days)
[2026-01-31T22:48:13.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "9377290890d45289"
[2026-01-31T22:48:13.860Z] [BOT] ⏭️  Skipping duplicate: JID_85bf06af (posted within 7 days)
[2026-01-31T22:48:14.019Z] [BOT] ✅ Loaded pending queue: 2950 total (1424 pending, 49 enriched, 1477 posted)
[2026-01-31T22:48:14.200Z] [BOT] ✅ Saved pending queue: 2950 total (1424 pending, 39 enriched, 1487 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T22:48:14.301Z] [BOT] 📂 Loaded 11568 existing routing entries
[2026-01-31T22:48:14.426Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11578
   Timestamp: 2026-01-31T22:48:14.386Z
[2026-01-31T22:48:14.427Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T22:48:14.427Z] [BOT] Total attempts: 28
   Successful: 13
   Failed: 0
   Skipped: 15
[2026-01-31T22:48:14.427Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-31T22:48:14.427Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #📊・JID_fb739488: 3 posts
     3. #🏠・JID_ead674af: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-31T22:48:14.428Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T22:48:14.428Z] [BOT] 💾 BEFORE MERGE: 1497 jobs in memory (cached)
[2026-01-31T22:48:14.489Z] [BOT] ✅ Loaded V2 database: 1497 jobs
💾 DISK STATE: 1497 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1497
[2026-01-31T22:48:14.492Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:48:14.492Z] [BOT] 💾 AFTER MERGE: 1497 jobs (merged disk + memory)
[2026-01-31T22:48:14.493Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-31T22:48:14.590Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:48:14.590Z] [BOT] ✅ Database saved successfully
[2026-01-31T22:48:16.614Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3068) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*