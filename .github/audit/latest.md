# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T15:00:37.330Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T14:59:57.148Z] ========================================
[2026-01-31T14:59:57.150Z] Discord Bot Execution Log
[2026-01-31T14:59:57.150Z] Environment: GitHub Actions
[2026-01-31T14:59:57.150Z] Node Version: v20.20.0
[2026-01-31T14:59:57.150Z] ========================================
[2026-01-31T14:59:57.150Z] Environment Variables Check:
[2026-01-31T14:59:57.150Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T14:59:57.150Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.150Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T14:59:57.151Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T14:59:57.151Z] 
Multi-Channel Configuration:
[2026-01-31T14:59:57.151Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T14:59:57.151Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T14:59:57.152Z] 
Data Files Check:
[2026-01-31T14:59:57.153Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T14:59:57.188Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7388058 bytes)
[2026-01-31T14:59:57.188Z] 
========================================
[2026-01-31T14:59:57.188Z] Starting Enhanced Discord Bot...
[2026-01-31T14:59:57.188Z] ========================================
[2026-01-31T14:59:57.747Z] [BOT] ✅ Loaded V2 database: 1196 jobs
[2026-01-31T14:59:58.633Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T14:59:58.634Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T14:59:58.634Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T14:59:58.753Z] [BOT] ✅ Loaded pending queue: 2947 total (1730 pending, 50 enriched, 1167 posted)
[2026-01-31T14:59:58.753Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T14:59:58.753Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:59:58.754Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T14:59:58.754Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:59:58.755Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T14:59:58.755Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T14:59:58.755Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T14:59:58.755Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T14:59:58.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T14:59:58.756Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T14:59:58.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T14:59:58.756Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T14:59:58.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T14:59:58.756Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T14:59:58.757Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T14:59:58.757Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T14:59:58.757Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T14:59:58.758Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T14:59:58.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T14:59:58.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T14:59:58.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T14:59:58.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T14:59:58.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T14:59:58.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T14:59:58.760Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T14:59:58.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T14:59:58.766Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T14:59:58.766Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Louisiana State University (LSU)
[2026-01-31T14:59:58.766Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Louisiana State University (LSU)
🚫 Skipping blacklisted job: Postdoctoral Appointee - Coastal-urban Flooding at Argonne National Laboratory
[2026-01-31T14:59:58.871Z] [BOT] ✅ Loaded pending queue: 2947 total (1730 pending, 50 enriched, 1167 posted)
[2026-01-31T14:59:59.052Z] [BOT] ✅ Saved pending queue: 2944 total (1730 pending, 47 enriched, 1167 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 26 jobs (3 blacklisted)
[2026-01-31T14:59:59.052Z] [BOT] 📋 After data quality filter: 26 jobs (0 invalid)
[2026-01-31T14:59:59.053Z] [BOT] 📋 After multi-location grouping: 23 unique jobs to post
[2026-01-31T14:59:59.053Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T14:59:59.053Z] [BOT] - AI Data Specialist @ RWS: arizona, illinois, tennessee
⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T14:59:59.054Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T14:59:59.057Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T14:59:59.058Z] [BOT] 📍 [ROUTING] "Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD" @ ORG_988ceb7c Pharmaceuticals
[2026-01-31T14:59:59.058Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:59:59.076Z] [BOT ERROR] (node:2936) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T14:59:59.477Z] [BOT] ✅ Posted message: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals in #💻・tech-jobs
[2026-01-31T14:59:59.477Z] [BOT] ✅ Industry: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals
[2026-01-31T14:59:59.478Z] [BOT] 💾 Added channel posting: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals → category channel (1 total channels)
[2026-01-31T14:59:59.478Z] [BOT] 💾 BEFORE MERGE: 1197 jobs in memory (cached)
[2026-01-31T14:59:59.503Z] [BOT] ✅ Loaded V2 database: 1196 jobs
💾 DISK STATE: 1196 jobs on disk
[2026-01-31T14:59:59.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1197
[2026-01-31T14:59:59.506Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:59:59.506Z] [BOT] 💾 AFTER MERGE: 1197 jobs (merged disk + memory)
[2026-01-31T14:59:59.507Z] [BOT] ✅ No jobs to archive (all 1197 jobs within 7-day window)
[2026-01-31T14:59:59.586Z] [BOT] 💾 Saved posted_jobs.json: 1197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:01.373Z] [BOT] ✅ Posted message: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T15:00:01.374Z] [BOT] 💾 Added channel posting: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals → location channel (2 total channels)
💾 BEFORE MERGE: 1197 jobs in memory (cached)
[2026-01-31T15:00:01.395Z] [BOT] ✅ Loaded V2 database: 1197 jobs
💾 DISK STATE: 1197 jobs on disk
[2026-01-31T15:00:01.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1197
[2026-01-31T15:00:01.398Z] [BOT] 🔀 Deep merged: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1197 jobs (merged disk + memory)
[2026-01-31T15:00:01.399Z] [BOT] ✅ No jobs to archive (all 1197 jobs within 7-day window)
[2026-01-31T15:00:01.469Z] [BOT] 💾 Saved posted_jobs.json: 1197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:02.970Z] [BOT] 📍 [ROUTING] "Mathematician" @ ORG_dbcd5e7b & Wonder
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:03.573Z] [BOT] ✅ Posted message: Mathematician @ ORG_dbcd5e7b & Wonder in #💻・tech-jobs
  ✅ Industry: Mathematician @ ORG_dbcd5e7b & Wonder
[2026-01-31T15:00:03.573Z] [BOT] 💾 Added channel posting: Mathematician @ ORG_dbcd5e7b & Wonder → category channel (1 total channels)
[2026-01-31T15:00:03.574Z] [BOT] 💾 BEFORE MERGE: 1198 jobs in memory (cached)
[2026-01-31T15:00:03.595Z] [BOT] ✅ Loaded V2 database: 1197 jobs
💾 DISK STATE: 1197 jobs on disk
[2026-01-31T15:00:03.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1198
[2026-01-31T15:00:03.598Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:00:03.598Z] [BOT] 💾 AFTER MERGE: 1198 jobs (merged disk + memory)
[2026-01-31T15:00:03.599Z] [BOT] ✅ No jobs to archive (all 1198 jobs within 7-day window)
[2026-01-31T15:00:03.668Z] [BOT] 💾 Saved posted_jobs.json: 1198 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:05.170Z] [BOT] 📍 [ROUTING] "Operations Research Analyst-Foundational" @ ORG_fee50aac
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:05.450Z] [BOT] ✅ Posted message: Operations Research Analyst-Foundational @ ORG_fee50aac in #💻・tech-jobs
  ✅ Industry: Operations Research Analyst-Foundational @ ORG_fee50aac
[2026-01-31T15:00:05.451Z] [BOT] 💾 Added channel posting: Operations Research Analyst-Foundational @ ORG_fee50aac → category channel (1 total channels)
[2026-01-31T15:00:05.451Z] [BOT] 💾 BEFORE MERGE: 1199 jobs in memory (cached)
[2026-01-31T15:00:05.472Z] [BOT] ✅ Loaded V2 database: 1198 jobs
💾 DISK STATE: 1198 jobs on disk
[2026-01-31T15:00:05.472Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1199
[2026-01-31T15:00:05.475Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1199 jobs (merged disk + memory)
[2026-01-31T15:00:05.476Z] [BOT] ✅ No jobs to archive (all 1199 jobs within 7-day window)
[2026-01-31T15:00:05.569Z] [BOT] 💾 Saved posted_jobs.json: 1199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:07.068Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-31T15:00:07.069Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:07.475Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-31T15:00:07.475Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-31T15:00:07.475Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-31T15:00:07.476Z] [BOT] 💾 BEFORE MERGE: 1200 jobs in memory (cached)
[2026-01-31T15:00:07.497Z] [BOT] ✅ Loaded V2 database: 1199 jobs
💾 DISK STATE: 1199 jobs on disk
[2026-01-31T15:00:07.497Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1200
[2026-01-31T15:00:07.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:00:07.500Z] [BOT] 💾 AFTER MERGE: 1200 jobs (merged disk + memory)
[2026-01-31T15:00:07.501Z] [BOT] ✅ No jobs to archive (all 1200 jobs within 7-day window)
[2026-01-31T15:00:07.568Z] [BOT] 💾 Saved posted_jobs.json: 1200 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:09.070Z] [BOT] 📍 [ROUTING] "Mandarin Language Specialist (USA-based)" @ ORG_0f2833f9
[2026-01-31T15:00:09.070Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:09.316Z] [BOT] ✅ Posted message: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #💻・tech-jobs
[2026-01-31T15:00:09.317Z] [BOT] ✅ Industry: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9
[2026-01-31T15:00:09.317Z] [BOT] 💾 Added channel posting: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 → category channel (1 total channels)
[2026-01-31T15:00:09.317Z] [BOT] 💾 BEFORE MERGE: 1201 jobs in memory (cached)
[2026-01-31T15:00:09.339Z] [BOT] ✅ Loaded V2 database: 1200 jobs
💾 DISK STATE: 1200 jobs on disk
[2026-01-31T15:00:09.339Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1201
[2026-01-31T15:00:09.342Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:00:09.342Z] [BOT] 💾 AFTER MERGE: 1201 jobs (merged disk + memory)
[2026-01-31T15:00:09.343Z] [BOT] ✅ No jobs to archive (all 1201 jobs within 7-day window)
[2026-01-31T15:00:09.412Z] [BOT] 💾 Saved posted_jobs.json: 1201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:11.214Z] [BOT] ✅ Posted message: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #🏠・JID_ead674af
[2026-01-31T15:00:11.215Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T15:00:11.215Z] [BOT] 💾 Added channel posting: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 → location channel (2 total channels)
💾 BEFORE MERGE: 1201 jobs in memory (cached)
[2026-01-31T15:00:11.236Z] [BOT] ✅ Loaded V2 database: 1201 jobs
💾 DISK STATE: 1201 jobs on disk
[2026-01-31T15:00:11.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1201
[2026-01-31T15:00:11.239Z] [BOT] 🔀 Deep merged: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1201 jobs (merged disk + memory)
[2026-01-31T15:00:11.240Z] [BOT] ✅ No jobs to archive (all 1201 jobs within 7-day window)
[2026-01-31T15:00:11.309Z] [BOT] 💾 Saved posted_jobs.json: 1201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:12.810Z] [BOT] 📍 [ROUTING] "Farsi Language Specialist" @ ORG_0f2833f9
[2026-01-31T15:00:12.810Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:13.107Z] [BOT] ✅ Posted message: Farsi Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
[2026-01-31T15:00:13.107Z] [BOT] ✅ Industry: Farsi Language Specialist @ ORG_0f2833f9
[2026-01-31T15:00:13.107Z] [BOT] 💾 Added channel posting: Farsi Language Specialist @ ORG_0f2833f9 → category channel (1 total channels)
[2026-01-31T15:00:13.108Z] [BOT] 💾 BEFORE MERGE: 1202 jobs in memory (cached)
[2026-01-31T15:00:13.129Z] [BOT] ✅ Loaded V2 database: 1201 jobs
💾 DISK STATE: 1201 jobs on disk
[2026-01-31T15:00:13.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1202
[2026-01-31T15:00:13.131Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1202 jobs (merged disk + memory)
[2026-01-31T15:00:13.132Z] [BOT] ✅ No jobs to archive (all 1202 jobs within 7-day window)
[2026-01-31T15:00:13.198Z] [BOT] 💾 Saved posted_jobs.json: 1202 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:14.906Z] [BOT] ✅ Posted message: Farsi Language Specialist @ ORG_0f2833f9 in #🏠・JID_ead674af
[2026-01-31T15:00:14.906Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T15:00:14.906Z] [BOT] 💾 Added channel posting: Farsi Language Specialist @ ORG_0f2833f9 → location channel (2 total channels)
[2026-01-31T15:00:14.906Z] [BOT] 💾 BEFORE MERGE: 1202 jobs in memory (cached)
[2026-01-31T15:00:14.928Z] [BOT] ✅ Loaded V2 database: 1202 jobs
💾 DISK STATE: 1202 jobs on disk
[2026-01-31T15:00:14.928Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1202
[2026-01-31T15:00:14.930Z] [BOT] 🔀 Deep merged: Farsi Language Specialist @ ORG_0f2833f9 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T15:00:14.930Z] [BOT] 💾 AFTER MERGE: 1202 jobs (merged disk + memory)
[2026-01-31T15:00:14.931Z] [BOT] ✅ No jobs to archive (all 1202 jobs within 7-day window)
[2026-01-31T15:00:15.015Z] [BOT] 💾 Saved posted_jobs.json: 1202 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:16.514Z] [BOT] 📍 [ROUTING] "Security Engineer" @ nominal
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T15:00:16.514Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:00:17.080Z] [BOT] ✅ Posted message: Security Engineer @ nominal in #💻・tech-jobs
  ✅ Industry: Security Engineer @ nominal
[2026-01-31T15:00:17.080Z] [BOT] 💾 Added channel posting: Security Engineer @ nominal → category channel (1 total channels)
[2026-01-31T15:00:17.081Z] [BOT] 💾 BEFORE MERGE: 1203 jobs in memory (cached)
[2026-01-31T15:00:17.103Z] [BOT] ✅ Loaded V2 database: 1202 jobs
💾 DISK STATE: 1202 jobs on disk
[2026-01-31T15:00:17.103Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1203
[2026-01-31T15:00:17.105Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1203 jobs (merged disk + memory)
[2026-01-31T15:00:17.106Z] [BOT] ✅ No jobs to archive (all 1203 jobs within 7-day window)
[2026-01-31T15:00:17.173Z] [BOT] 💾 Saved posted_jobs.json: 1203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:21.676Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T15:00:21.677Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f186449d University
[2026-01-31T15:00:21.677Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-31T15:00:21.949Z] [BOT] ✅ Posted message: Assistant Professor @ ORG_f186449d University in #🤖・ai-jobs
  ✅ Industry: Assistant Professor @ ORG_f186449d University
[2026-01-31T15:00:21.949Z] [BOT] 💾 Added channel posting: Assistant Professor @ ORG_f186449d University → category channel (1 total channels)
[2026-01-31T15:00:21.949Z] [BOT] 💾 BEFORE MERGE: 1204 jobs in memory (cached)
[2026-01-31T15:00:21.971Z] [BOT] ✅ Loaded V2 database: 1203 jobs
💾 DISK STATE: 1203 jobs on disk
[2026-01-31T15:00:21.971Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1204
[2026-01-31T15:00:21.973Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1204 jobs (merged disk + memory)
[2026-01-31T15:00:21.974Z] [BOT] ✅ No jobs to archive (all 1204 jobs within 7-day window)
[2026-01-31T15:00:22.059Z] [BOT] 💾 Saved posted_jobs.json: 1204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:23.558Z] [BOT] 📍 [ROUTING] "Assistant or Associate Research Professor" @ ORG_478e100e University
   Category: AI (matched: "artificial intelligence")
[2026-01-31T15:00:23.558Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T15:00:23.882Z] [BOT] ✅ Posted message: Assistant or Associate Research Professor @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Assistant or Associate Research Professor @ ORG_478e100e University
[2026-01-31T15:00:23.883Z] [BOT] 💾 Added channel posting: Assistant or Associate Research Professor @ ORG_478e100e University → category channel (1 total channels)
💾 BEFORE MERGE: 1205 jobs in memory (cached)
[2026-01-31T15:00:23.905Z] [BOT] ✅ Loaded V2 database: 1204 jobs
💾 DISK STATE: 1204 jobs on disk
[2026-01-31T15:00:23.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1205
[2026-01-31T15:00:23.907Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1205 jobs (merged disk + memory)
[2026-01-31T15:00:23.909Z] [BOT] ✅ No jobs to archive (all 1205 jobs within 7-day window)
[2026-01-31T15:00:23.975Z] [BOT] 💾 Saved posted_jobs.json: 1205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:28.477Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T15:00:28.478Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2026-01-31T15:00:28.478Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T15:00:28.747Z] [BOT] ✅ Posted message: Research Professional @ ORG_9d38443e of Chicago in #💰・finance-jobs
[2026-01-31T15:00:28.747Z] [BOT] ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-31T15:00:28.748Z] [BOT] 💾 Added channel posting: Research Professional @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-31T15:00:28.748Z] [BOT] 💾 BEFORE MERGE: 1206 jobs in memory (cached)
[2026-01-31T15:00:28.770Z] [BOT] ✅ Loaded V2 database: 1205 jobs
💾 DISK STATE: 1205 jobs on disk
[2026-01-31T15:00:28.770Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1206
[2026-01-31T15:00:28.772Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1206 jobs (merged disk + memory)
[2026-01-31T15:00:28.773Z] [BOT] ✅ No jobs to archive (all 1206 jobs within 7-day window)
[2026-01-31T15:00:28.840Z] [BOT] 💾 Saved posted_jobs.json: 1206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:33.341Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T15:00:33.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9cf0ef03..." not found, but found as SHA256 "b2f389041cc2db22"
[2026-01-31T15:00:33.342Z] [BOT] ⏭️  Skipping duplicate: JID_d089d358-_r43767 (posted within 7 days)
[2026-01-31T15:00:33.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76a92bf0..." not found, but found as SHA256 "149d086e90b892af"
[2026-01-31T15:00:33.342Z] [BOT] ⏭️  Skipping duplicate: JID_e824c1e0-mathematician_r320859 (posted within 7 days)
[2026-01-31T15:00:33.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7f3f284c..." not found, but found as SHA256 "947009eb60a0ea04"
[2026-01-31T15:00:33.343Z] [BOT] ⏭️  Skipping duplicate: JID_efc4dd0b-professor_jr107320-1 (posted within 7 days)
[2026-01-31T15:00:33.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28954219-psu_academic-j..." not found, but found as SHA256 "c2602e4752474030"
⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_48d156cc-institute_req_0000073124-2 (posted within 7 days)
[2026-01-31T15:00:33.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "69322013fb0168cb"
⏭️  Skipping duplicate: JID_32cb8765-professional_jr31451 (posted within 7 days)
[2026-01-31T15:00:33.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3b6de877-kbr_careers-jo..." not found, but found as SHA256 "43820924839a03ed"
[2026-01-31T15:00:33.344Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_89d20214-foundational_r2111121 (posted within 7 days)
[2026-01-31T15:00:33.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "25b46d6265a165d1"
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_075f104c-1_r0149307 (posted within 7 days)
[2026-01-31T15:00:33.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bca55f1..." not found, but found as SHA256 "07e0590c0df6d7ed"
⏭️  Skipping duplicate: JID_85302569 (posted within 7 days)
[2026-01-31T15:00:33.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_475c1d43..." not found, but found as SHA256 "2e1bc31299ef8fd9"
⏭️  Skipping duplicate: JID_4ae9a1c4 (posted within 7 days)
[2026-01-31T15:00:33.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_52aaa9f5..." not found, but found as SHA256 "52e16732fd1d0e2d"
⏭️  Skipping duplicate: JID_d8cb55fd (posted within 7 days)
[2026-01-31T15:00:33.461Z] [BOT] ✅ Loaded pending queue: 2944 total (1730 pending, 47 enriched, 1167 posted)
[2026-01-31T15:00:33.653Z] [BOT] ✅ Saved pending queue: 2944 total (1730 pending, 37 enriched, 1177 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T15:00:33.653Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T15:00:33.741Z] [BOT] 📂 Loaded 11258 existing routing entries
[2026-01-31T15:00:33.860Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11268
[2026-01-31T15:00:33.861Z] [BOT] Timestamp: 2026-01-31T15:00:33.819Z
[2026-01-31T15:00:33.865Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 37
   Successful: 13
   Failed: 0
   Skipped: 24
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1206 jobs in memory (cached)
[2026-01-31T15:00:33.898Z] [BOT] ✅ Loaded V2 database: 1206 jobs
[2026-01-31T15:00:33.898Z] [BOT] 💾 DISK STATE: 1206 jobs on disk
[2026-01-31T15:00:33.899Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1206
[2026-01-31T15:00:33.902Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:00:33.902Z] [BOT] 💾 AFTER MERGE: 1206 jobs (merged disk + memory)
[2026-01-31T15:00:33.903Z] [BOT] ✅ No jobs to archive (all 1206 jobs within 7-day window)
[2026-01-31T15:00:33.977Z] [BOT] 💾 Saved posted_jobs.json: 1206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:00:33.978Z] [BOT] ✅ Database saved successfully
[2026-01-31T15:00:36.008Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2936) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*