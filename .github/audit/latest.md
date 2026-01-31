# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T15:32:25.111Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T15:31:49.407Z] ========================================
[2026-01-31T15:31:49.409Z] Discord Bot Execution Log
[2026-01-31T15:31:49.409Z] Environment: GitHub Actions
[2026-01-31T15:31:49.409Z] Node Version: v20.20.0
[2026-01-31T15:31:49.409Z] ========================================
[2026-01-31T15:31:49.409Z] Environment Variables Check:
[2026-01-31T15:31:49.409Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T15:31:49.409Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.409Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T15:31:49.409Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T15:31:49.410Z] 
Multi-Channel Configuration:
[2026-01-31T15:31:49.410Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T15:31:49.410Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T15:31:49.410Z] 
Data Files Check:
[2026-01-31T15:31:49.411Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T15:31:49.446Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7471916 bytes)
[2026-01-31T15:31:49.447Z] 
========================================
[2026-01-31T15:31:49.447Z] Starting Enhanced Discord Bot...
[2026-01-31T15:31:49.447Z] ========================================
[2026-01-31T15:31:50.015Z] [BOT] ✅ Loaded V2 database: 1216 jobs
[2026-01-31T15:31:50.711Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T15:31:50.711Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T15:31:50.711Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T15:31:50.826Z] [BOT] ✅ Loaded pending queue: 2945 total (1708 pending, 50 enriched, 1187 posted)
[2026-01-31T15:31:50.827Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:31:50.828Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T15:31:50.828Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T15:31:50.828Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:31:50.828Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T15:31:50.828Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T15:31:50.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T15:31:50.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T15:31:50.829Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T15:31:50.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T15:31:50.830Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T15:31:50.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T15:31:50.830Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T15:31:50.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T15:31:50.830Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T15:31:50.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T15:31:50.830Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T15:31:50.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T15:31:50.831Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T15:31:50.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T15:31:50.831Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T15:31:50.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T15:31:50.831Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T15:31:50.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T15:31:50.832Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T15:31:50.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T15:31:50.832Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T15:31:50.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T15:31:50.832Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T15:31:50.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T15:31:50.832Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T15:31:50.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T15:31:50.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T15:31:50.833Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T15:31:50.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T15:31:50.833Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T15:31:50.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T15:31:50.833Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T15:31:50.834Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T15:31:50.834Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T15:31:50.834Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T15:31:50.834Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T15:31:50.843Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T15:31:50.843Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Billing at clerk
[2026-01-31T15:31:50.843Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Creation Engine at figma
[2026-01-31T15:31:50.844Z] [BOT] 🚫 Skipping blacklisted job: Manager, Solutions Consulting at figma
🚫 Skipping blacklisted job: Partner Manager, Scaled at figma
[2026-01-31T15:31:50.966Z] [BOT] ✅ Loaded pending queue: 2945 total (1708 pending, 50 enriched, 1187 posted)
[2026-01-31T15:31:51.171Z] [BOT] ✅ Saved pending queue: 2940 total (1708 pending, 45 enriched, 1187 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
📋 After blacklist filter: 24 jobs (5 blacklisted)
[2026-01-31T15:31:51.171Z] [BOT] 📋 After data quality filter: 24 jobs (0 invalid)
[2026-01-31T15:31:51.172Z] [BOT] 📋 After multi-location grouping: 23 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-31T15:31:51.172Z] [BOT] 📍 1 jobs with multiple locations:
   - AI Data Specialist @ RWS: illinois, tennessee
⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T15:31:51.172Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T15:31:51.176Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T15:31:51.177Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-31T15:31:51.177Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:31:51.194Z] [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T15:31:51.484Z] [BOT] ✅ Posted message: AI Data Specialist @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-31T15:31:51.484Z] [BOT] ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2026-01-31T15:31:51.485Z] [BOT] 💾 Added channel posting: AI Data Specialist @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T15:31:51.485Z] [BOT] 💾 BEFORE MERGE: 1217 jobs in memory (cached)
[2026-01-31T15:31:51.507Z] [BOT] ✅ Loaded V2 database: 1216 jobs
💾 DISK STATE: 1216 jobs on disk
[2026-01-31T15:31:51.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1217
[2026-01-31T15:31:51.510Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:31:51.510Z] [BOT] 💾 AFTER MERGE: 1217 jobs (merged disk + memory)
[2026-01-31T15:31:51.511Z] [BOT] ✅ No jobs to archive (all 1217 jobs within 7-day window)
[2026-01-31T15:31:51.590Z] [BOT] 💾 Saved posted_jobs.json: 1217 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:31:53.092Z] [BOT] 📍 [ROUTING] "Software Engineer Backend/Platform Systems 1" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T15:31:53.092Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:31:53.449Z] [BOT] ✅ Posted message: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-31T15:31:53.449Z] [BOT] ✅ Industry: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28
[2026-01-31T15:31:53.450Z] [BOT] 💾 Added channel posting: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 → category channel (1 total channels)
💾 BEFORE MERGE: 1218 jobs in memory (cached)
[2026-01-31T15:31:53.471Z] [BOT] ✅ Loaded V2 database: 1217 jobs
💾 DISK STATE: 1217 jobs on disk
[2026-01-31T15:31:53.471Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1218
[2026-01-31T15:31:53.474Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:31:53.474Z] [BOT] 💾 AFTER MERGE: 1218 jobs (merged disk + memory)
[2026-01-31T15:31:53.475Z] [BOT] ✅ No jobs to archive (all 1218 jobs within 7-day window)
[2026-01-31T15:31:53.546Z] [BOT] 💾 Saved posted_jobs.json: 1218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:31:55.275Z] [BOT] ✅ Posted message: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-01-31T15:31:55.275Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T15:31:55.276Z] [BOT] 💾 Added channel posting: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 → location channel (2 total channels)
[2026-01-31T15:31:55.276Z] [BOT] 💾 BEFORE MERGE: 1218 jobs in memory (cached)
[2026-01-31T15:31:55.297Z] [BOT] ✅ Loaded V2 database: 1218 jobs
💾 DISK STATE: 1218 jobs on disk
[2026-01-31T15:31:55.298Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1218
[2026-01-31T15:31:55.300Z] [BOT] 🔀 Deep merged: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T15:31:55.301Z] [BOT] 💾 AFTER MERGE: 1218 jobs (merged disk + memory)
[2026-01-31T15:31:55.302Z] [BOT] ✅ No jobs to archive (all 1218 jobs within 7-day window)
[2026-01-31T15:31:55.372Z] [BOT] 💾 Saved posted_jobs.json: 1218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:31:59.875Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T15:31:59.875Z] [BOT] 📍 [ROUTING] "Product Designer " @ figma
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:00.084Z] [BOT] ✅ Posted message: Product Designer  @ figma in #💻・tech-jobs
[2026-01-31T15:32:00.084Z] [BOT] ✅ Industry: Product Designer  @ figma
[2026-01-31T15:32:00.085Z] [BOT] 💾 Added channel posting: Product Designer  @ figma → category channel (1 total channels)
[2026-01-31T15:32:00.085Z] [BOT] 💾 BEFORE MERGE: 1219 jobs in memory (cached)
[2026-01-31T15:32:00.107Z] [BOT] ✅ Loaded V2 database: 1218 jobs
💾 DISK STATE: 1218 jobs on disk
[2026-01-31T15:32:00.107Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1219
[2026-01-31T15:32:00.110Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:00.110Z] [BOT] 💾 AFTER MERGE: 1219 jobs (merged disk + memory)
[2026-01-31T15:32:00.110Z] [BOT] ✅ No jobs to archive (all 1219 jobs within 7-day window)
[2026-01-31T15:32:00.180Z] [BOT] 💾 Saved posted_jobs.json: 1219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:01.683Z] [BOT] 📍 [ROUTING] "Entry Configuration Management Engineering Technician" @ ORG_f7a2cae4
[2026-01-31T15:32:01.683Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:01.886Z] [BOT] ✅ Posted message: Entry Configuration Management Engineering Technician @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-31T15:32:01.886Z] [BOT] ✅ Industry: Entry Configuration Management Engineering Technician @ ORG_f7a2cae4
[2026-01-31T15:32:01.887Z] [BOT] 💾 Added channel posting: Entry Configuration Management Engineering Technician @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-31T15:32:01.887Z] [BOT] 💾 BEFORE MERGE: 1220 jobs in memory (cached)
[2026-01-31T15:32:01.909Z] [BOT] ✅ Loaded V2 database: 1219 jobs
💾 DISK STATE: 1219 jobs on disk
[2026-01-31T15:32:01.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1220
[2026-01-31T15:32:01.912Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:01.912Z] [BOT] 💾 AFTER MERGE: 1220 jobs (merged disk + memory)
[2026-01-31T15:32:01.912Z] [BOT] ✅ No jobs to archive (all 1220 jobs within 7-day window)
[2026-01-31T15:32:01.995Z] [BOT] 💾 Saved posted_jobs.json: 1220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:03.496Z] [BOT] 📍 [ROUTING] "Analyst  Data Management - Fixed Income Indices" @ ORG_e82c1600 Global 
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:04.050Z] [BOT] ✅ Posted message: Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global  in #💻・tech-jobs
  ✅ Industry: Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global
[2026-01-31T15:32:04.051Z] [BOT] 💾 Added channel posting: Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global  → category channel (1 total channels)
💾 BEFORE MERGE: 1221 jobs in memory (cached)
[2026-01-31T15:32:04.072Z] [BOT] ✅ Loaded V2 database: 1220 jobs
💾 DISK STATE: 1220 jobs on disk
[2026-01-31T15:32:04.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1221
[2026-01-31T15:32:04.075Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:04.075Z] [BOT] 💾 AFTER MERGE: 1221 jobs (merged disk + memory)
[2026-01-31T15:32:04.076Z] [BOT] ✅ No jobs to archive (all 1221 jobs within 7-day window)
[2026-01-31T15:32:04.148Z] [BOT] 💾 Saved posted_jobs.json: 1221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:05.650Z] [BOT] 📍 [ROUTING] "Application Engineer - Drilling Solutions" @ ORG_dd730736
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T15:32:05.651Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:05.870Z] [BOT] ✅ Posted message: Application Engineer - Drilling Solutions @ ORG_dd730736 in #💻・tech-jobs
  ✅ Industry: Application Engineer - Drilling Solutions @ ORG_dd730736
[2026-01-31T15:32:05.871Z] [BOT] 💾 Added channel posting: Application Engineer - Drilling Solutions @ ORG_dd730736 → category channel (1 total channels)
[2026-01-31T15:32:05.871Z] [BOT] 💾 BEFORE MERGE: 1222 jobs in memory (cached)
[2026-01-31T15:32:05.892Z] [BOT] ✅ Loaded V2 database: 1221 jobs
💾 DISK STATE: 1221 jobs on disk
[2026-01-31T15:32:05.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1222
[2026-01-31T15:32:05.895Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:05.896Z] [BOT] 💾 AFTER MERGE: 1222 jobs (merged disk + memory)
[2026-01-31T15:32:05.896Z] [BOT] ✅ No jobs to archive (all 1222 jobs within 7-day window)
[2026-01-31T15:32:05.963Z] [BOT] 💾 Saved posted_jobs.json: 1222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:07.466Z] [BOT] 📍 [ROUTING] "Digital Design Engineer" @ ORG_f2de61aa
[2026-01-31T15:32:07.467Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:07.870Z] [BOT] ✅ Posted message: Digital Design Engineer @ ORG_f2de61aa in #💻・tech-jobs
[2026-01-31T15:32:07.870Z] [BOT] ✅ Industry: Digital Design Engineer @ ORG_f2de61aa
[2026-01-31T15:32:07.871Z] [BOT] 💾 Added channel posting: Digital Design Engineer @ ORG_f2de61aa → category channel (1 total channels)
[2026-01-31T15:32:07.871Z] [BOT] 💾 BEFORE MERGE: 1223 jobs in memory (cached)
[2026-01-31T15:32:07.892Z] [BOT] ✅ Loaded V2 database: 1222 jobs
💾 DISK STATE: 1222 jobs on disk
[2026-01-31T15:32:07.892Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1223
[2026-01-31T15:32:07.895Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1223 jobs (merged disk + memory)
[2026-01-31T15:32:07.896Z] [BOT] ✅ No jobs to archive (all 1223 jobs within 7-day window)
[2026-01-31T15:32:07.964Z] [BOT] 💾 Saved posted_jobs.json: 1223 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:09.467Z] [BOT] 📍 [ROUTING] "Media Operations Technical Associate - Java Development" @ ORG_b344d80e National Football League
[2026-01-31T15:32:09.467Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:09.741Z] [BOT] ✅ Posted message: Media Operations Technical Associate - Java Development @ ORG_b344d80e National Football League in #💻・tech-jobs
  ✅ Industry: Media Operations Technical Associate - Java Development @ ORG_b344d80e National Football League
[2026-01-31T15:32:09.742Z] [BOT] 💾 Added channel posting: Media Operations Technical Associate - Java Development @ ORG_b344d80e National Football League → category channel (1 total channels)
[2026-01-31T15:32:09.742Z] [BOT] 💾 BEFORE MERGE: 1224 jobs in memory (cached)
[2026-01-31T15:32:09.764Z] [BOT] ✅ Loaded V2 database: 1223 jobs
💾 DISK STATE: 1223 jobs on disk
[2026-01-31T15:32:09.764Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1224
[2026-01-31T15:32:09.767Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1224 jobs (merged disk + memory)
[2026-01-31T15:32:09.768Z] [BOT] ✅ No jobs to archive (all 1224 jobs within 7-day window)
[2026-01-31T15:32:09.833Z] [BOT] 💾 Saved posted_jobs.json: 1224 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:11.335Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:32:11.575Z] [BOT] ✅ Posted message: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 in #💻・tech-jobs
[2026-01-31T15:32:11.575Z] [BOT] ✅ Industry: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28
[2026-01-31T15:32:11.576Z] [BOT] 💾 Added channel posting: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-31T15:32:11.576Z] [BOT] 💾 BEFORE MERGE: 1225 jobs in memory (cached)
[2026-01-31T15:32:11.598Z] [BOT] ✅ Loaded V2 database: 1224 jobs
💾 DISK STATE: 1224 jobs on disk
[2026-01-31T15:32:11.598Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1225
[2026-01-31T15:32:11.601Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:11.601Z] [BOT] 💾 AFTER MERGE: 1225 jobs (merged disk + memory)
[2026-01-31T15:32:11.602Z] [BOT] ✅ No jobs to archive (all 1225 jobs within 7-day window)
[2026-01-31T15:32:11.684Z] [BOT] 💾 Saved posted_jobs.json: 1225 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:16.186Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T15:32:16.187Z] [BOT] 📍 [ROUTING] "Program Administrator - Community Centered Data Science" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T15:32:16.187Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T15:32:16.425Z] [BOT] ✅ Posted message: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago in #📊・JID_fb739488
  ✅ Industry: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago
[2026-01-31T15:32:16.426Z] [BOT] 💾 Added channel posting: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago → category channel (1 total channels)
💾 BEFORE MERGE: 1226 jobs in memory (cached)
[2026-01-31T15:32:16.447Z] [BOT] ✅ Loaded V2 database: 1225 jobs
💾 DISK STATE: 1225 jobs on disk
[2026-01-31T15:32:16.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1226
[2026-01-31T15:32:16.450Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:16.451Z] [BOT] 💾 AFTER MERGE: 1226 jobs (merged disk + memory)
[2026-01-31T15:32:16.451Z] [BOT] ✅ No jobs to archive (all 1226 jobs within 7-day window)
[2026-01-31T15:32:16.521Z] [BOT] 💾 Saved posted_jobs.json: 1226 active jobs
[2026-01-31T15:32:16.522Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:21.025Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T15:32:21.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3073d29a..." not found, but found as SHA256 "f7ad74b9fb7c3e75"
[2026-01-31T15:32:21.026Z] [BOT] ⏭️  Skipping duplicate: JID_019e179c (posted within 7 days)
[2026-01-31T15:32:21.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_468cb118..." not found, but found as SHA256 "438880e70e27add3"
⏭️  Skipping duplicate: JID_d39b2d94 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_639cb3fc..." not found, but found as SHA256 "c37934c7417b42f5"
⏭️  Skipping duplicate: JID_d65dab2e (posted within 7 days)
[2026-01-31T15:32:21.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa62ea1b-spgi_ca..." not found, but found as SHA256 "c9dea2b844fbca5d"
[2026-01-31T15:32:21.027Z] [BOT] ⏭️  Skipping duplicate: JID_fa62ea1b-spgi_careers-JID_33074506-indices_319188 (posted within 7 days)
[2026-01-31T15:32:21.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1feddfa..." not found, but found as SHA256 "8b0e89441d268a5b"
[2026-01-31T15:32:21.027Z] [BOT] ⏭️  Skipping duplicate: JID_322dc1e3-cx_4001-job-37785 (posted within 7 days)
[2026-01-31T15:32:21.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_792b79ca..." not found, but found as SHA256 "fc94d260eb3951d9"
⏭️  Skipping duplicate: JID_792b79ca (posted within 7 days)
[2026-01-31T15:32:21.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "f04cc1be6994681a"
⏭️  Skipping duplicate: JID_e1745d04-science_jr32069 (posted within 7 days)
[2026-01-31T15:32:21.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10dd0e5c..." not found, but found as SHA256 "8a31490e834c490e"
[2026-01-31T15:32:21.028Z] [BOT] ⏭️  Skipping duplicate: JID_e5e3640d (posted within 7 days)
[2026-01-31T15:32:21.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a63ff19..." not found, but found as SHA256 "eafb105d21e0fc39"
⏭️  Skipping duplicate: JID_0a63ff19 (posted within 7 days)
[2026-01-31T15:32:21.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e43f12d6..." not found, but found as SHA256 "1029a1ec7f47038c"
[2026-01-31T15:32:21.028Z] [BOT] ⏭️  Skipping duplicate: JID_e43f12d6 (posted within 7 days)
[2026-01-31T15:32:21.136Z] [BOT] ✅ Loaded pending queue: 2940 total (1708 pending, 45 enriched, 1187 posted)
[2026-01-31T15:32:21.323Z] [BOT] ✅ Saved pending queue: 2940 total (1708 pending, 35 enriched, 1197 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T15:32:21.324Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T15:32:21.408Z] [BOT] 📂 Loaded 11278 existing routing entries
[2026-01-31T15:32:21.536Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T15:32:21.537Z] [BOT] Total entries: 11288
   Timestamp: 2026-01-31T15:32:21.491Z
[2026-01-31T15:32:21.543Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 37
   Successful: 11
   Failed: 0
   Skipped: 26
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1226 jobs in memory (cached)
[2026-01-31T15:32:21.576Z] [BOT] ✅ Loaded V2 database: 1226 jobs
[2026-01-31T15:32:21.576Z] [BOT] 💾 DISK STATE: 1226 jobs on disk
[2026-01-31T15:32:21.576Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1226
[2026-01-31T15:32:21.580Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:32:21.581Z] [BOT] 💾 AFTER MERGE: 1226 jobs (merged disk + memory)
[2026-01-31T15:32:21.581Z] [BOT] ✅ No jobs to archive (all 1226 jobs within 7-day window)
[2026-01-31T15:32:21.660Z] [BOT] 💾 Saved posted_jobs.json: 1226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:32:21.660Z] [BOT] ✅ Database saved successfully
[2026-01-31T15:32:23.691Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*