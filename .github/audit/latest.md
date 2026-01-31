# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T13:53:39.763Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T13:53:05.670Z] ========================================
[2026-01-31T13:53:05.672Z] Discord Bot Execution Log
[2026-01-31T13:53:05.672Z] Environment: GitHub Actions
[2026-01-31T13:53:05.672Z] Node Version: v20.20.0
[2026-01-31T13:53:05.672Z] ========================================
[2026-01-31T13:53:05.672Z] Environment Variables Check:
[2026-01-31T13:53:05.672Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T13:53:05.672Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T13:53:05.673Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T13:53:05.673Z] 
Multi-Channel Configuration:
[2026-01-31T13:53:05.673Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.673Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T13:53:05.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T13:53:05.674Z] 
Data Files Check:
[2026-01-31T13:53:05.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T13:53:05.709Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7203054 bytes)
[2026-01-31T13:53:05.709Z] 
========================================
[2026-01-31T13:53:05.710Z] Starting Enhanced Discord Bot...
[2026-01-31T13:53:05.710Z] ========================================
[2026-01-31T13:53:06.252Z] [BOT] ✅ Loaded V2 database: 1156 jobs
[2026-01-31T13:53:06.764Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T13:53:06.765Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T13:53:06.765Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T13:53:06.882Z] [BOT] ✅ Loaded pending queue: 2949 total (1772 pending, 50 enriched, 1127 posted)
[2026-01-31T13:53:06.882Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T13:53:06.883Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T13:53:06.884Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T13:53:06.884Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T13:53:06.884Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T13:53:06.884Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T13:53:06.885Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T13:53:06.885Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T13:53:06.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T13:53:06.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T13:53:06.886Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T13:53:06.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T13:53:06.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T13:53:06.887Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T13:53:06.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T13:53:06.887Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T13:53:06.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T13:53:06.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T13:53:06.887Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T13:53:06.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T13:53:06.888Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T13:53:06.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T13:53:06.888Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T13:53:06.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T13:53:06.891Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T13:53:06.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T13:53:06.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T13:53:06.892Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T13:53:06.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T13:53:06.892Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T13:53:06.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T13:53:06.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
[2026-01-31T13:53:06.893Z] [BOT] ⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T13:53:06.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T13:53:06.893Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T13:53:06.896Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T13:53:06.896Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow - Agentic AI at University of Texas - Austin
[2026-01-31T13:53:07.003Z] [BOT] ✅ Loaded pending queue: 2949 total (1772 pending, 50 enriched, 1127 posted)
[2026-01-31T13:53:07.200Z] [BOT] ✅ Saved pending queue: 2948 total (1772 pending, 49 enriched, 1127 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T13:53:07.200Z] [BOT] 📋 After blacklist filter: 28 jobs (1 blacklisted)
[2026-01-31T13:53:07.200Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-31T13:53:07.201Z] [BOT] 📋 After multi-location grouping: 28 unique jobs to post
[2026-01-31T13:53:07.201Z] [BOT] ⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T13:53:07.203Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T13:53:07.205Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_e5ca4df3 Group
[2026-01-31T13:53:07.205Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T13:53:07.223Z] [BOT ERROR] (node:2890) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T13:53:07.387Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #🤖・ai-jobs
[2026-01-31T13:53:07.387Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group
[2026-01-31T13:53:07.388Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group → category channel (1 total channels)
[2026-01-31T13:53:07.388Z] [BOT] 💾 BEFORE MERGE: 1157 jobs in memory (cached)
[2026-01-31T13:53:07.415Z] [BOT] ✅ Loaded V2 database: 1156 jobs
💾 DISK STATE: 1156 jobs on disk
[2026-01-31T13:53:07.416Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1157
[2026-01-31T13:53:07.418Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:07.419Z] [BOT] 💾 AFTER MERGE: 1157 jobs (merged disk + memory)
[2026-01-31T13:53:07.419Z] [BOT] ✅ No jobs to archive (all 1157 jobs within 7-day window)
[2026-01-31T13:53:07.496Z] [BOT] 💾 Saved posted_jobs.json: 1157 active jobs
[2026-01-31T13:53:07.496Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:11.997Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T13:53:11.998Z] [BOT] 📍 [ROUTING] "Associate Report Developer" @ ORG_044baaec Logistics
[2026-01-31T13:53:11.999Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:12.193Z] [BOT] ✅ Posted message: Associate Report Developer @ ORG_044baaec Logistics in #💻・tech-jobs
[2026-01-31T13:53:12.193Z] [BOT] ✅ Industry: Associate Report Developer @ ORG_044baaec Logistics
[2026-01-31T13:53:12.194Z] [BOT] 💾 Added channel posting: Associate Report Developer @ ORG_044baaec Logistics → category channel (1 total channels)
[2026-01-31T13:53:12.194Z] [BOT] 💾 BEFORE MERGE: 1158 jobs in memory (cached)
[2026-01-31T13:53:12.215Z] [BOT] ✅ Loaded V2 database: 1157 jobs
💾 DISK STATE: 1157 jobs on disk
[2026-01-31T13:53:12.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1158
[2026-01-31T13:53:12.218Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:12.218Z] [BOT] 💾 AFTER MERGE: 1158 jobs (merged disk + memory)
[2026-01-31T13:53:12.219Z] [BOT] ✅ No jobs to archive (all 1158 jobs within 7-day window)
[2026-01-31T13:53:12.287Z] [BOT] 💾 Saved posted_jobs.json: 1158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:13.790Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Warehouse" @ ORG_af20d304
   Category: TECH (matched: "software")
[2026-01-31T13:53:13.790Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:14.029Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Warehouse @ ORG_af20d304 in #💻・tech-jobs
[2026-01-31T13:53:14.029Z] [BOT] ✅ Industry: Software Engineer 1 - Data Warehouse @ ORG_af20d304
[2026-01-31T13:53:14.030Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Warehouse @ ORG_af20d304 → category channel (1 total channels)
[2026-01-31T13:53:14.030Z] [BOT] 💾 BEFORE MERGE: 1159 jobs in memory (cached)
[2026-01-31T13:53:14.051Z] [BOT] ✅ Loaded V2 database: 1158 jobs
💾 DISK STATE: 1158 jobs on disk
[2026-01-31T13:53:14.051Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1159
[2026-01-31T13:53:14.054Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:14.054Z] [BOT] 💾 AFTER MERGE: 1159 jobs (merged disk + memory)
[2026-01-31T13:53:14.055Z] [BOT] ✅ No jobs to archive (all 1159 jobs within 7-day window)
[2026-01-31T13:53:14.134Z] [BOT] 💾 Saved posted_jobs.json: 1159 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:15.636Z] [BOT] 📍 [ROUTING] "Associate – Data Cloud Solutions" @ ORG_f0ac255c Global
[2026-01-31T13:53:15.636Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:15.851Z] [BOT] ✅ Posted message: Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #💻・tech-jobs
[2026-01-31T13:53:15.851Z] [BOT] ✅ Industry: Associate – Data Cloud Solutions @ ORG_f0ac255c Global
[2026-01-31T13:53:15.852Z] [BOT] 💾 Added channel posting: Associate – Data Cloud Solutions @ ORG_f0ac255c Global → category channel (1 total channels)
[2026-01-31T13:53:15.852Z] [BOT] 💾 BEFORE MERGE: 1160 jobs in memory (cached)
[2026-01-31T13:53:15.873Z] [BOT] ✅ Loaded V2 database: 1159 jobs
💾 DISK STATE: 1159 jobs on disk
[2026-01-31T13:53:15.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1160
[2026-01-31T13:53:15.876Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1160 jobs (merged disk + memory)
[2026-01-31T13:53:15.877Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-31T13:53:15.949Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:17.612Z] [BOT] ✅ Posted message: Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #🏠・JID_ead674af
[2026-01-31T13:53:17.613Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T13:53:17.613Z] [BOT] 💾 Added channel posting: Associate – Data Cloud Solutions @ ORG_f0ac255c Global → location channel (2 total channels)
[2026-01-31T13:53:17.613Z] [BOT] 💾 BEFORE MERGE: 1160 jobs in memory (cached)
[2026-01-31T13:53:17.634Z] [BOT] ✅ Loaded V2 database: 1160 jobs
💾 DISK STATE: 1160 jobs on disk
[2026-01-31T13:53:17.634Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1160
[2026-01-31T13:53:17.637Z] [BOT] 🔀 Deep merged: Associate – Data Cloud Solutions @ ORG_f0ac255c Global (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T13:53:17.638Z] [BOT] 💾 AFTER MERGE: 1160 jobs (merged disk + memory)
[2026-01-31T13:53:17.638Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-31T13:53:17.705Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:19.207Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_44c4dab8
[2026-01-31T13:53:19.207Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:19.458Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_44c4dab8 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_44c4dab8
[2026-01-31T13:53:19.458Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_44c4dab8 → category channel (1 total channels)
[2026-01-31T13:53:19.459Z] [BOT] 💾 BEFORE MERGE: 1161 jobs in memory (cached)
[2026-01-31T13:53:19.480Z] [BOT] ✅ Loaded V2 database: 1160 jobs
💾 DISK STATE: 1160 jobs on disk
[2026-01-31T13:53:19.480Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1161
[2026-01-31T13:53:19.483Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:19.483Z] [BOT] 💾 AFTER MERGE: 1161 jobs (merged disk + memory)
[2026-01-31T13:53:19.483Z] [BOT] ✅ No jobs to archive (all 1161 jobs within 7-day window)
[2026-01-31T13:53:19.548Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:21.050Z] [BOT] 📍 [ROUTING] "Software Engineer Full Stack & Application Development 1" @ ORG_aa669b28
[2026-01-31T13:53:21.050Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:21.361Z] [BOT] ✅ Posted message: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #💻・tech-jobs
[2026-01-31T13:53:21.361Z] [BOT] ✅ Industry: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28
[2026-01-31T13:53:21.362Z] [BOT] 💾 Added channel posting: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-31T13:53:21.362Z] [BOT] 💾 BEFORE MERGE: 1162 jobs in memory (cached)
[2026-01-31T13:53:21.383Z] [BOT] ✅ Loaded V2 database: 1161 jobs
💾 DISK STATE: 1161 jobs on disk
[2026-01-31T13:53:21.383Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1162
[2026-01-31T13:53:21.386Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1162 jobs (merged disk + memory)
[2026-01-31T13:53:21.387Z] [BOT] ✅ No jobs to archive (all 1162 jobs within 7-day window)
[2026-01-31T13:53:21.453Z] [BOT] 💾 Saved posted_jobs.json: 1162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:22.954Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_05d2f9ea Electric
[2026-01-31T13:53:22.955Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:23.111Z] [BOT] ✅ Posted message: Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2026-01-31T13:53:23.112Z] [BOT] ✅ Industry: Software Engineer @ ORG_05d2f9ea Electric
[2026-01-31T13:53:23.112Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_05d2f9ea Electric → category channel (1 total channels)
[2026-01-31T13:53:23.112Z] [BOT] 💾 BEFORE MERGE: 1163 jobs in memory (cached)
[2026-01-31T13:53:23.135Z] [BOT] ✅ Loaded V2 database: 1162 jobs
💾 DISK STATE: 1162 jobs on disk
[2026-01-31T13:53:23.136Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1163
[2026-01-31T13:53:23.138Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:23.138Z] [BOT] 💾 AFTER MERGE: 1163 jobs (merged disk + memory)
[2026-01-31T13:53:23.139Z] [BOT] ✅ No jobs to archive (all 1163 jobs within 7-day window)
[2026-01-31T13:53:23.203Z] [BOT] 💾 Saved posted_jobs.json: 1163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:24.706Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_07b9fafa
[2026-01-31T13:53:24.706Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:53:24.847Z] [BOT] ✅ Posted message: Software Engineer, Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer, Early Career @ ORG_07b9fafa
[2026-01-31T13:53:24.848Z] [BOT] 💾 Added channel posting: Software Engineer, Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-31T13:53:24.848Z] [BOT] 💾 BEFORE MERGE: 1164 jobs in memory (cached)
[2026-01-31T13:53:24.869Z] [BOT] ✅ Loaded V2 database: 1163 jobs
💾 DISK STATE: 1163 jobs on disk
[2026-01-31T13:53:24.870Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1164
[2026-01-31T13:53:24.872Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1164 jobs (merged disk + memory)
[2026-01-31T13:53:24.873Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-31T13:53:24.939Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:29.441Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T13:53:29.442Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_7f1f7a12
[2026-01-31T13:53:29.442Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T13:53:29.890Z] [BOT] ✅ Posted message: Data Analyst @ ORG_7f1f7a12 in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_7f1f7a12
[2026-01-31T13:53:29.890Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-31T13:53:29.891Z] [BOT] 💾 BEFORE MERGE: 1165 jobs in memory (cached)
[2026-01-31T13:53:29.912Z] [BOT] ✅ Loaded V2 database: 1164 jobs
💾 DISK STATE: 1164 jobs on disk
[2026-01-31T13:53:29.912Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1165
[2026-01-31T13:53:29.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1165 jobs (merged disk + memory)
[2026-01-31T13:53:29.916Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-31T13:53:29.989Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:31.492Z] [BOT] 📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2026-01-31T13:53:31.492Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T13:53:31.788Z] [BOT] ✅ Posted message: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #📊・JID_fb739488
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2026-01-31T13:53:31.788Z] [BOT] 💾 Added channel posting: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 → category channel (1 total channels)
[2026-01-31T13:53:31.788Z] [BOT] 💾 BEFORE MERGE: 1166 jobs in memory (cached)
[2026-01-31T13:53:31.810Z] [BOT] ✅ Loaded V2 database: 1165 jobs
💾 DISK STATE: 1165 jobs on disk
[2026-01-31T13:53:31.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1166
[2026-01-31T13:53:31.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:31.813Z] [BOT] 💾 AFTER MERGE: 1166 jobs (merged disk + memory)
[2026-01-31T13:53:31.814Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-31T13:53:31.894Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:36.396Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T13:53:36.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf35e57b-costar_camp..." not found, but found as SHA256 "962524f76a03a2e1"
⏭️  Skipping duplicate: JID_bf35e57b-costar_campus-JID_280988fc-engineer_r37862 (posted within 7 days)
[2026-01-31T13:53:36.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1b9cee5f..." not found, but found as SHA256 "c5719e4cfc4d53c4"
[2026-01-31T13:53:36.398Z] [BOT] ⏭️  Skipping duplicate: JID_0c5571aa-developer_r0097857 (posted within 7 days)
[2026-01-31T13:53:36.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d647d9c-..." not found, but found as SHA256 "6ef960f5dd3ce945"
⏭️  Skipping duplicate: JID_4b752833 (posted within 7 days)
[2026-01-31T13:53:36.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "e182a05ff27e8581"
[2026-01-31T13:53:36.398Z] [BOT] ⏭️  Skipping duplicate: JID_eed10ef9-analyst_r00221046 (posted within 7 days)
[2026-01-31T13:53:36.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6af95455..." not found, but found as SHA256 "7ee5606f6e309c91"
[2026-01-31T13:53:36.399Z] [BOT] ⏭️  Skipping duplicate: JID_106ff1f8 (posted within 7 days)
[2026-01-31T13:53:36.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cea08a83..." not found, but found as SHA256 "19ba5a4c33925e18"
[2026-01-31T13:53:36.399Z] [BOT] ⏭️  Skipping duplicate: JID_cea08a83 (posted within 7 days)
[2026-01-31T13:53:36.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e8b2684..." not found, but found as SHA256 "3fff20b069dc0041"
⏭️  Skipping duplicate: JID_5e8b2684 (posted within 7 days)
[2026-01-31T13:53:36.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60c63ce8..." not found, but found as SHA256 "04d20acd3731aa02"
[2026-01-31T13:53:36.400Z] [BOT] ⏭️  Skipping duplicate: JID_60c63ce8 (posted within 7 days)
[2026-01-31T13:53:36.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45c085f2..." not found, but found as SHA256 "f9f902148fe3233e"
⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25028581 (posted within 7 days)
[2026-01-31T13:53:36.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "7dff7088293c4eb6"
[2026-01-31T13:53:36.400Z] [BOT] ⏭️  Skipping duplicate: JID_efe0ae10 (posted within 7 days)
[2026-01-31T13:53:36.517Z] [BOT] ✅ Loaded pending queue: 2948 total (1772 pending, 49 enriched, 1127 posted)
[2026-01-31T13:53:36.701Z] [BOT] ✅ Saved pending queue: 2948 total (1772 pending, 39 enriched, 1137 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T13:53:36.702Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T13:53:36.788Z] [BOT] 📂 Loaded 11218 existing routing entries
[2026-01-31T13:53:36.912Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T13:53:36.912Z] [BOT] Total entries: 11228
   Timestamp: 2026-01-31T13:53:36.866Z
[2026-01-31T13:53:36.912Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T13:53:36.912Z] [BOT] Total attempts: 33
   Successful: 11
   Failed: 0
   Skipped: 22
[2026-01-31T13:53:36.913Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-31T13:53:36.913Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #📊・JID_fb739488: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-31T13:53:36.913Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T13:53:36.913Z] [BOT] 💾 BEFORE MERGE: 1166 jobs in memory (cached)
[2026-01-31T13:53:36.950Z] [BOT] ✅ Loaded V2 database: 1166 jobs
💾 DISK STATE: 1166 jobs on disk
[2026-01-31T13:53:36.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1166
[2026-01-31T13:53:36.955Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:53:36.955Z] [BOT] 💾 AFTER MERGE: 1166 jobs (merged disk + memory)
[2026-01-31T13:53:36.956Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-31T13:53:37.021Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:53:37.021Z] [BOT] ✅ Database saved successfully
[2026-01-31T13:53:39.054Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2890) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*