# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T13:26:00.934Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T13:25:18.429Z] ========================================
[2026-01-31T13:25:18.430Z] Discord Bot Execution Log
[2026-01-31T13:25:18.430Z] Environment: GitHub Actions
[2026-01-31T13:25:18.431Z] Node Version: v20.20.0
[2026-01-31T13:25:18.431Z] ========================================
[2026-01-31T13:25:18.431Z] Environment Variables Check:
[2026-01-31T13:25:18.431Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T13:25:18.431Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.431Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T13:25:18.431Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T13:25:18.431Z] 
Multi-Channel Configuration:
[2026-01-31T13:25:18.431Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T13:25:18.432Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T13:25:18.432Z] 
Data Files Check:
[2026-01-31T13:25:18.433Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T13:25:18.467Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7156407 bytes)
[2026-01-31T13:25:18.467Z] 
========================================
[2026-01-31T13:25:18.467Z] Starting Enhanced Discord Bot...
[2026-01-31T13:25:18.467Z] ========================================
[2026-01-31T13:25:19.029Z] [BOT] ✅ Loaded V2 database: 1146 jobs
[2026-01-31T13:25:21.035Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T13:25:21.036Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T13:25:21.036Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T13:25:21.150Z] [BOT] ✅ Loaded pending queue: 2948 total (1781 pending, 50 enriched, 1117 posted)
[2026-01-31T13:25:21.151Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T13:25:21.151Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T13:25:21.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T13:25:21.152Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T13:25:21.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T13:25:21.152Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T13:25:21.153Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T13:25:21.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T13:25:21.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T13:25:21.153Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T13:25:21.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T13:25:21.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T13:25:21.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T13:25:21.155Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T13:25:21.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T13:25:21.155Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T13:25:21.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T13:25:21.155Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T13:25:21.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T13:25:21.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T13:25:21.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T13:25:21.156Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T13:25:21.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T13:25:21.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T13:25:21.161Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T13:25:21.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T13:25:21.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T13:25:21.161Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T13:25:21.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T13:25:21.162Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T13:25:21.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T13:25:21.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T13:25:21.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T13:25:21.163Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T13:25:21.164Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T13:25:21.164Z] [BOT] 🚫 Skipping blacklisted job: Manager, GTM Finance at figma
[2026-01-31T13:25:21.165Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar-Neutrino Physics at PennState University
[2026-01-31T13:25:21.275Z] [BOT] ✅ Loaded pending queue: 2948 total (1781 pending, 50 enriched, 1117 posted)
[2026-01-31T13:25:21.466Z] [BOT] ✅ Saved pending queue: 2946 total (1781 pending, 48 enriched, 1117 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T13:25:21.466Z] [BOT] 📋 After blacklist filter: 27 jobs (2 blacklisted)
[2026-01-31T13:25:21.467Z] [BOT] 📋 After data quality filter: 27 jobs (0 invalid)
[2026-01-31T13:25:21.467Z] [BOT] 📋 After multi-location grouping: 27 unique jobs to post
[2026-01-31T13:25:21.467Z] [BOT] ⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T13:25:21.467Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T13:25:21.471Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T13:25:21.472Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Space
[2026-01-31T13:25:21.472Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T13:25:21.472Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T13:25:21.489Z] [BOT ERROR] (node:3367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T13:25:21.861Z] [BOT] ✅ Posted message: Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #📊・JID_fb739488
[2026-01-31T13:25:21.862Z] [BOT] ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Space
[2026-01-31T13:25:21.862Z] [BOT] 💾 Added channel posting: Business Intelligence Developer 1 @ ORG_d5eef8ad Space → category channel (1 total channels)
[2026-01-31T13:25:21.863Z] [BOT] 💾 BEFORE MERGE: 1147 jobs in memory (cached)
[2026-01-31T13:25:21.888Z] [BOT] ✅ Loaded V2 database: 1146 jobs
💾 DISK STATE: 1146 jobs on disk
[2026-01-31T13:25:21.889Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1147
[2026-01-31T13:25:21.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:21.891Z] [BOT] 💾 AFTER MERGE: 1147 jobs (merged disk + memory)
[2026-01-31T13:25:21.892Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-31T13:25:21.968Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:23.470Z] [BOT] 📍 [ROUTING] "Associate Data Analyst" @ ORG_578d5e7d
[2026-01-31T13:25:23.470Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T13:25:23.699Z] [BOT] ✅ Posted message: Associate Data Analyst @ ORG_578d5e7d in #📊・JID_fb739488
[2026-01-31T13:25:23.699Z] [BOT] ✅ Industry: Associate Data Analyst @ ORG_578d5e7d
[2026-01-31T13:25:23.700Z] [BOT] 💾 Added channel posting: Associate Data Analyst @ ORG_578d5e7d → category channel (1 total channels)
[2026-01-31T13:25:23.700Z] [BOT] 💾 BEFORE MERGE: 1148 jobs in memory (cached)
[2026-01-31T13:25:23.720Z] [BOT] ✅ Loaded V2 database: 1147 jobs
💾 DISK STATE: 1147 jobs on disk
[2026-01-31T13:25:23.721Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1148
[2026-01-31T13:25:23.723Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:23.723Z] [BOT] 💾 AFTER MERGE: 1148 jobs (merged disk + memory)
[2026-01-31T13:25:23.724Z] [BOT] ✅ No jobs to archive (all 1148 jobs within 7-day window)
[2026-01-31T13:25:23.794Z] [BOT] 💾 Saved posted_jobs.json: 1148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:25.720Z] [BOT] ✅ Posted message: Associate Data Analyst @ ORG_578d5e7d in #🗽・JID_98d4f0de
[2026-01-31T13:25:25.721Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T13:25:25.721Z] [BOT] 💾 Added channel posting: Associate Data Analyst @ ORG_578d5e7d → location channel (2 total channels)
[2026-01-31T13:25:25.721Z] [BOT] 💾 BEFORE MERGE: 1148 jobs in memory (cached)
[2026-01-31T13:25:25.741Z] [BOT] ✅ Loaded V2 database: 1148 jobs
💾 DISK STATE: 1148 jobs on disk
[2026-01-31T13:25:25.742Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1148
[2026-01-31T13:25:25.744Z] [BOT] 🔀 Deep merged: Associate Data Analyst @ ORG_578d5e7d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T13:25:25.745Z] [BOT] 💾 AFTER MERGE: 1148 jobs (merged disk + memory)
[2026-01-31T13:25:25.745Z] [BOT] ✅ No jobs to archive (all 1148 jobs within 7-day window)
[2026-01-31T13:25:25.812Z] [BOT] 💾 Saved posted_jobs.json: 1148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:30.313Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T13:25:30.314Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_8a40e6ae Architects
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:25:30.587Z] [BOT] ✅ Posted message: Software Engineer @ ORG_8a40e6ae Architects in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_8a40e6ae Architects
[2026-01-31T13:25:30.588Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_8a40e6ae Architects → category channel (1 total channels)
[2026-01-31T13:25:30.588Z] [BOT] 💾 BEFORE MERGE: 1149 jobs in memory (cached)
[2026-01-31T13:25:30.610Z] [BOT] ✅ Loaded V2 database: 1148 jobs
💾 DISK STATE: 1148 jobs on disk
[2026-01-31T13:25:30.610Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1149
[2026-01-31T13:25:30.612Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:30.612Z] [BOT] 💾 AFTER MERGE: 1149 jobs (merged disk + memory)
[2026-01-31T13:25:30.613Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-31T13:25:30.681Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:32.185Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
[2026-01-31T13:25:32.185Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:25:32.527Z] [BOT] ✅ Posted message: Inside Sales Representative - Early Career (2026) @ figma in #💻・tech-jobs
[2026-01-31T13:25:32.528Z] [BOT] ✅ Industry: Inside Sales Representative - Early Career (2026) @ figma
[2026-01-31T13:25:32.528Z] [BOT] 💾 Added channel posting: Inside Sales Representative - Early Career (2026) @ figma → category channel (1 total channels)
[2026-01-31T13:25:32.528Z] [BOT] 💾 BEFORE MERGE: 1150 jobs in memory (cached)
[2026-01-31T13:25:32.549Z] [BOT] ✅ Loaded V2 database: 1149 jobs
💾 DISK STATE: 1149 jobs on disk
[2026-01-31T13:25:32.549Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1150
[2026-01-31T13:25:32.552Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:32.552Z] [BOT] 💾 AFTER MERGE: 1150 jobs (merged disk + memory)
[2026-01-31T13:25:32.552Z] [BOT] ✅ No jobs to archive (all 1150 jobs within 7-day window)
[2026-01-31T13:25:32.626Z] [BOT] 💾 Saved posted_jobs.json: 1150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:34.313Z] [BOT] ✅ Posted message: Inside Sales Representative - Early Career (2026) @ figma in #🗽・JID_98d4f0de
[2026-01-31T13:25:34.313Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T13:25:34.313Z] [BOT] 💾 Added channel posting: Inside Sales Representative - Early Career (2026) @ figma → location channel (2 total channels)
[2026-01-31T13:25:34.313Z] [BOT] 💾 BEFORE MERGE: 1150 jobs in memory (cached)
[2026-01-31T13:25:34.334Z] [BOT] ✅ Loaded V2 database: 1150 jobs
💾 DISK STATE: 1150 jobs on disk
[2026-01-31T13:25:34.334Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1150
[2026-01-31T13:25:34.337Z] [BOT] 🔀 Deep merged: Inside Sales Representative - Early Career (2026) @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1150 jobs (merged disk + memory)
[2026-01-31T13:25:34.338Z] [BOT] ✅ No jobs to archive (all 1150 jobs within 7-day window)
[2026-01-31T13:25:34.408Z] [BOT] 💾 Saved posted_jobs.json: 1150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:35.909Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer Graduate" @ ORG_f5f00f52
[2026-01-31T13:25:35.909Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:25:36.202Z] [BOT] ✅ Posted message: Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #💻・tech-jobs
[2026-01-31T13:25:36.203Z] [BOT] ✅ Industry: Full Stack Software Engineer Graduate @ ORG_f5f00f52
[2026-01-31T13:25:36.203Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer Graduate @ ORG_f5f00f52 → category channel (1 total channels)
💾 BEFORE MERGE: 1151 jobs in memory (cached)
[2026-01-31T13:25:36.224Z] [BOT] ✅ Loaded V2 database: 1150 jobs
💾 DISK STATE: 1150 jobs on disk
[2026-01-31T13:25:36.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1151
[2026-01-31T13:25:36.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:36.227Z] [BOT] 💾 AFTER MERGE: 1151 jobs (merged disk + memory)
[2026-01-31T13:25:36.228Z] [BOT] ✅ No jobs to archive (all 1151 jobs within 7-day window)
[2026-01-31T13:25:36.292Z] [BOT] 💾 Saved posted_jobs.json: 1151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:38.087Z] [BOT] ✅ Posted message: Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #🗽・JID_98d4f0de
[2026-01-31T13:25:38.087Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T13:25:38.087Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer Graduate @ ORG_f5f00f52 → location channel (2 total channels)
[2026-01-31T13:25:38.088Z] [BOT] 💾 BEFORE MERGE: 1151 jobs in memory (cached)
[2026-01-31T13:25:38.108Z] [BOT] ✅ Loaded V2 database: 1151 jobs
💾 DISK STATE: 1151 jobs on disk
[2026-01-31T13:25:38.108Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1151
[2026-01-31T13:25:38.111Z] [BOT] 🔀 Deep merged: Full Stack Software Engineer Graduate @ ORG_f5f00f52 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T13:25:38.111Z] [BOT] 💾 AFTER MERGE: 1151 jobs (merged disk + memory)
[2026-01-31T13:25:38.112Z] [BOT] ✅ No jobs to archive (all 1151 jobs within 7-day window)
[2026-01-31T13:25:38.177Z] [BOT] 💾 Saved posted_jobs.json: 1151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:39.680Z] [BOT] 📍 [ROUTING] "Tech 1 – Mapping" @ ORG_6f8a62f0 Hathaway Energy
[2026-01-31T13:25:39.680Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:25:39.909Z] [BOT] ✅ Posted message: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
  ✅ Industry: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy
[2026-01-31T13:25:39.910Z] [BOT] 💾 Added channel posting: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy → category channel (1 total channels)
💾 BEFORE MERGE: 1152 jobs in memory (cached)
[2026-01-31T13:25:39.932Z] [BOT] ✅ Loaded V2 database: 1151 jobs
💾 DISK STATE: 1151 jobs on disk
[2026-01-31T13:25:39.932Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1152
[2026-01-31T13:25:39.934Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:39.934Z] [BOT] 💾 AFTER MERGE: 1152 jobs (merged disk + memory)
[2026-01-31T13:25:39.935Z] [BOT] ✅ No jobs to archive (all 1152 jobs within 7-day window)
[2026-01-31T13:25:39.999Z] [BOT] 💾 Saved posted_jobs.json: 1152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:41.501Z] [BOT] 📍 [ROUTING] "Associate Full Stack Engineer" @ ORG_66279f04 Investments
[2026-01-31T13:25:41.501Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T13:25:41.726Z] [BOT] ✅ Posted message: Associate Full Stack Engineer @ ORG_66279f04 Investments in #💻・tech-jobs
  ✅ Industry: Associate Full Stack Engineer @ ORG_66279f04 Investments
[2026-01-31T13:25:41.727Z] [BOT] 💾 Added channel posting: Associate Full Stack Engineer @ ORG_66279f04 Investments → category channel (1 total channels)
[2026-01-31T13:25:41.727Z] [BOT] 💾 BEFORE MERGE: 1153 jobs in memory (cached)
[2026-01-31T13:25:41.748Z] [BOT] ✅ Loaded V2 database: 1152 jobs
💾 DISK STATE: 1152 jobs on disk
[2026-01-31T13:25:41.748Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1153
[2026-01-31T13:25:41.750Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:41.751Z] [BOT] 💾 AFTER MERGE: 1153 jobs (merged disk + memory)
[2026-01-31T13:25:41.751Z] [BOT] ✅ No jobs to archive (all 1153 jobs within 7-day window)
[2026-01-31T13:25:41.817Z] [BOT] 💾 Saved posted_jobs.json: 1153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:46.320Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T13:25:46.320Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Prediction" @ ORG_9eb7abc4
[2026-01-31T13:25:46.321Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T13:25:46.686Z] [BOT] ✅ Posted message: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #🤖・ai-jobs
[2026-01-31T13:25:46.686Z] [BOT] ✅ Industry: Machine Learning Engineer - Prediction @ ORG_9eb7abc4
[2026-01-31T13:25:46.687Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 → category channel (1 total channels)
[2026-01-31T13:25:46.687Z] [BOT] 💾 BEFORE MERGE: 1154 jobs in memory (cached)
[2026-01-31T13:25:46.708Z] [BOT] ✅ Loaded V2 database: 1153 jobs
💾 DISK STATE: 1153 jobs on disk
[2026-01-31T13:25:46.709Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1154
[2026-01-31T13:25:46.711Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1154 jobs (merged disk + memory)
[2026-01-31T13:25:46.712Z] [BOT] ✅ No jobs to archive (all 1154 jobs within 7-day window)
[2026-01-31T13:25:46.793Z] [BOT] 💾 Saved posted_jobs.json: 1154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:48.290Z] [BOT] 📍 [ROUTING] "AI Product Specialist" @ ORG_a0a5b7ba
   Category: AI (matched: "artificial intelligence")
[2026-01-31T13:25:48.291Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T13:25:48.560Z] [BOT] ✅ Posted message: AI Product Specialist @ ORG_a0a5b7ba in #🤖・ai-jobs
  ✅ Industry: AI Product Specialist @ ORG_a0a5b7ba
[2026-01-31T13:25:48.560Z] [BOT] 💾 Added channel posting: AI Product Specialist @ ORG_a0a5b7ba → category channel (1 total channels)
[2026-01-31T13:25:48.561Z] [BOT] 💾 BEFORE MERGE: 1155 jobs in memory (cached)
[2026-01-31T13:25:48.581Z] [BOT] ✅ Loaded V2 database: 1154 jobs
💾 DISK STATE: 1154 jobs on disk
[2026-01-31T13:25:48.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1155
[2026-01-31T13:25:48.584Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1155 jobs (merged disk + memory)
[2026-01-31T13:25:48.585Z] [BOT] ✅ No jobs to archive (all 1155 jobs within 7-day window)
[2026-01-31T13:25:48.662Z] [BOT] 💾 Saved posted_jobs.json: 1155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:50.554Z] [BOT] ✅ Posted message: AI Product Specialist @ ORG_a0a5b7ba in #🗽・JID_98d4f0de
[2026-01-31T13:25:50.554Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T13:25:50.555Z] [BOT] 💾 Added channel posting: AI Product Specialist @ ORG_a0a5b7ba → location channel (2 total channels)
[2026-01-31T13:25:50.555Z] [BOT] 💾 BEFORE MERGE: 1155 jobs in memory (cached)
[2026-01-31T13:25:50.575Z] [BOT] ✅ Loaded V2 database: 1155 jobs
💾 DISK STATE: 1155 jobs on disk
[2026-01-31T13:25:50.576Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1155
[2026-01-31T13:25:50.578Z] [BOT] 🔀 Deep merged: AI Product Specialist @ ORG_a0a5b7ba (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1155 jobs (merged disk + memory)
[2026-01-31T13:25:50.579Z] [BOT] ✅ No jobs to archive (all 1155 jobs within 7-day window)
[2026-01-31T13:25:50.652Z] [BOT] 💾 Saved posted_jobs.json: 1155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:52.154Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
[2026-01-31T13:25:52.154Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T13:25:52.315Z] [BOT] ✅ Posted message: Internship Program Coordinator @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Internship Program Coordinator @ gohighlevel
[2026-01-31T13:25:52.316Z] [BOT] 💾 Added channel posting: Internship Program Coordinator @ gohighlevel → category channel (1 total channels)
[2026-01-31T13:25:52.316Z] [BOT] 💾 BEFORE MERGE: 1156 jobs in memory (cached)
[2026-01-31T13:25:52.336Z] [BOT] ✅ Loaded V2 database: 1155 jobs
💾 DISK STATE: 1155 jobs on disk
[2026-01-31T13:25:52.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1156
[2026-01-31T13:25:52.339Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:52.340Z] [BOT] 💾 AFTER MERGE: 1156 jobs (merged disk + memory)
[2026-01-31T13:25:52.340Z] [BOT] ✅ No jobs to archive (all 1156 jobs within 7-day window)
[2026-01-31T13:25:52.414Z] [BOT] 💾 Saved posted_jobs.json: 1156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:56.916Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T13:25:56.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_154d0a16-..." not found, but found as SHA256 "58db3b829ad1ac45"
⏭️  Skipping duplicate: JID_154d0a16-sierra_space_external_career_site-JID_756c755e-co_ara-JID_0276b17a-i_r25115-1 (posted within 7 days)
[2026-01-31T13:25:56.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2046ea1..." not found, but found as SHA256 "3349348c3dc8eda2"
⏭️  Skipping duplicate: JID_b2086fb7 (posted within 7 days)
[2026-01-31T13:25:56.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ad2d7e11..." not found, but found as SHA256 "03c8b7dbdaa3d9de"
⏭️  Skipping duplicate: JID_cb0e6e14 (posted within 7 days)
[2026-01-31T13:25:56.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_439acf1e..." not found, but found as SHA256 "562454cec2b487f7"
⏭️  Skipping duplicate: JID_b7215b2b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d86c1432..." not found, but found as SHA256 "4e690d59fcf33a05"
⏭️  Skipping duplicate: JID_d86c1432 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c15675c0..." not found, but found as SHA256 "d25682443af2da58"
⏭️  Skipping duplicate: JID_64fd6385 (posted within 7 days)
[2026-01-31T13:25:56.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d61e44dd..." not found, but found as SHA256 "ffa671d7c67d2217"
⏭️  Skipping duplicate: JID_3f2874e7 (posted within 7 days)
[2026-01-31T13:25:56.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_543485ee..." not found, but found as SHA256 "ee0a9f4badcfaeb8"
⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003893 (posted within 7 days)
[2026-01-31T13:25:56.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e3e92d6-..." not found, but found as SHA256 "50e6078d0e2aebfd"
[2026-01-31T13:25:56.920Z] [BOT] ⏭️  Skipping duplicate: JID_766dbf9e (posted within 7 days)
[2026-01-31T13:25:56.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b0915196..." not found, but found as SHA256 "ee85147ecf10152d"
⏭️  Skipping duplicate: JID_13ccb65e-engineer_2120832-1 (posted within 7 days)
[2026-01-31T13:25:57.033Z] [BOT] ✅ Loaded pending queue: 2946 total (1781 pending, 48 enriched, 1117 posted)
[2026-01-31T13:25:57.221Z] [BOT] ✅ Saved pending queue: 2946 total (1781 pending, 38 enriched, 1127 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T13:25:57.307Z] [BOT] 📂 Loaded 11208 existing routing entries
[2026-01-31T13:25:57.431Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T13:25:57.431Z] [BOT] Total entries: 11218
   Timestamp: 2026-01-31T13:25:57.386Z
[2026-01-31T13:25:57.437Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 37
   Successful: 14
   Failed: 0
   Skipped: 23
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・JID_98d4f0de: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #📊・JID_fb739488: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1156 jobs in memory (cached)
[2026-01-31T13:25:57.467Z] [BOT] ✅ Loaded V2 database: 1156 jobs
[2026-01-31T13:25:57.467Z] [BOT] 💾 DISK STATE: 1156 jobs on disk
[2026-01-31T13:25:57.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1156
[2026-01-31T13:25:57.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T13:25:57.471Z] [BOT] 💾 AFTER MERGE: 1156 jobs (merged disk + memory)
[2026-01-31T13:25:57.472Z] [BOT] ✅ No jobs to archive (all 1156 jobs within 7-day window)
[2026-01-31T13:25:57.537Z] [BOT] 💾 Saved posted_jobs.json: 1156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T13:25:57.537Z] [BOT] ✅ Database saved successfully
[2026-01-31T13:25:59.569Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*