# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T15:13:21.049Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T15:12:50.019Z] ========================================
[2026-01-31T15:12:50.021Z] Discord Bot Execution Log
[2026-01-31T15:12:50.021Z] Environment: GitHub Actions
[2026-01-31T15:12:50.021Z] Node Version: v20.20.0
[2026-01-31T15:12:50.021Z] ========================================
[2026-01-31T15:12:50.021Z] Environment Variables Check:
[2026-01-31T15:12:50.021Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T15:12:50.021Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.021Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T15:12:50.022Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T15:12:50.022Z] 
Multi-Channel Configuration:
[2026-01-31T15:12:50.022Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T15:12:50.022Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T15:12:50.023Z] 
Data Files Check:
[2026-01-31T15:12:50.024Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T15:12:50.058Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7434474 bytes)
[2026-01-31T15:12:50.058Z] 
========================================
[2026-01-31T15:12:50.058Z] Starting Enhanced Discord Bot...
[2026-01-31T15:12:50.058Z] ========================================
[2026-01-31T15:12:50.603Z] [BOT] ✅ Loaded V2 database: 1206 jobs
[2026-01-31T15:12:51.062Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T15:12:51.062Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T15:12:51.062Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T15:12:51.185Z] [BOT] ✅ Loaded pending queue: 2945 total (1718 pending, 50 enriched, 1177 posted)
[2026-01-31T15:12:51.185Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:12:51.186Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T15:12:51.186Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T15:12:51.186Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:12:51.187Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T15:12:51.187Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T15:12:51.187Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T15:12:51.187Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T15:12:51.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T15:12:51.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T15:12:51.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T15:12:51.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T15:12:51.188Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T15:12:51.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T15:12:51.189Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T15:12:51.189Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T15:12:51.189Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T15:12:51.189Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T15:12:51.189Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T15:12:51.189Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T15:12:51.190Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T15:12:51.190Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T15:12:51.190Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T15:12:51.190Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T15:12:51.190Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T15:12:51.190Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T15:12:51.190Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T15:12:51.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
[2026-01-31T15:12:51.191Z] [BOT] ⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T15:12:51.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T15:12:51.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
[2026-01-31T15:12:51.191Z] [BOT] ⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T15:12:51.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T15:12:51.191Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T15:12:51.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T15:12:51.192Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T15:12:51.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T15:12:51.192Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
[2026-01-31T15:12:51.192Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T15:12:51.201Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T15:12:51.201Z] [BOT] 🚫 Skipping blacklisted job: Manager, Field Marketing at figma
[2026-01-31T15:12:51.324Z] [BOT] ✅ Loaded pending queue: 2945 total (1718 pending, 50 enriched, 1177 posted)
[2026-01-31T15:12:51.512Z] [BOT] ✅ Saved pending queue: 2944 total (1718 pending, 49 enriched, 1177 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 28 jobs (1 blacklisted)
[2026-01-31T15:12:51.512Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-31T15:12:51.514Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-31T15:12:51.514Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T15:12:51.514Z] [BOT] - AI Data Specialist @ RWS: arizona, illinois, tennessee
⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T15:12:51.518Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T15:12:51.518Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English" @ ORG_f3ae3598
[2026-01-31T15:12:51.518Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:12:51.536Z] [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T15:12:51.708Z] [BOT] ✅ Posted message: Search Quality Rater - English @ ORG_f3ae3598 in #💻・tech-jobs
[2026-01-31T15:12:51.708Z] [BOT] ✅ Industry: Search Quality Rater - English @ ORG_f3ae3598
[2026-01-31T15:12:51.709Z] [BOT] 💾 Added channel posting: Search Quality Rater - English @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T15:12:51.709Z] [BOT] 💾 BEFORE MERGE: 1207 jobs in memory (cached)
[2026-01-31T15:12:51.731Z] [BOT] ✅ Loaded V2 database: 1206 jobs
💾 DISK STATE: 1206 jobs on disk
[2026-01-31T15:12:51.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1207
[2026-01-31T15:12:51.735Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:12:51.735Z] [BOT] 💾 AFTER MERGE: 1207 jobs (merged disk + memory)
[2026-01-31T15:12:51.736Z] [BOT] ✅ No jobs to archive (all 1207 jobs within 7-day window)
[2026-01-31T15:12:51.816Z] [BOT] 💾 Saved posted_jobs.json: 1207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:12:53.581Z] [BOT] ✅ Posted message: Search Quality Rater - English @ ORG_f3ae3598 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T15:12:53.582Z] [BOT] 💾 Added channel posting: Search Quality Rater - English @ ORG_f3ae3598 → location channel (2 total channels)
[2026-01-31T15:12:53.582Z] [BOT] 💾 BEFORE MERGE: 1207 jobs in memory (cached)
[2026-01-31T15:12:53.603Z] [BOT] ✅ Loaded V2 database: 1207 jobs
💾 DISK STATE: 1207 jobs on disk
[2026-01-31T15:12:53.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1207
[2026-01-31T15:12:53.606Z] [BOT] 🔀 Deep merged: Search Quality Rater - English @ ORG_f3ae3598 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1207 jobs (merged disk + memory)
[2026-01-31T15:12:53.607Z] [BOT] ✅ No jobs to archive (all 1207 jobs within 7-day window)
[2026-01-31T15:12:53.677Z] [BOT] 💾 Saved posted_jobs.json: 1207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:12:55.179Z] [BOT] 📍 [ROUTING] "AV Engineer (Contractor)" @ instacart
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:12:55.314Z] [BOT] ✅ Posted message: AV Engineer (Contractor) @ instacart in #💻・tech-jobs
  ✅ Industry: AV Engineer (Contractor) @ instacart
[2026-01-31T15:12:55.315Z] [BOT] 💾 Added channel posting: AV Engineer (Contractor) @ instacart → category channel (1 total channels)
[2026-01-31T15:12:55.315Z] [BOT] 💾 BEFORE MERGE: 1208 jobs in memory (cached)
[2026-01-31T15:12:55.336Z] [BOT] ✅ Loaded V2 database: 1207 jobs
💾 DISK STATE: 1207 jobs on disk
[2026-01-31T15:12:55.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1208
[2026-01-31T15:12:55.339Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:12:55.339Z] [BOT] 💾 AFTER MERGE: 1208 jobs (merged disk + memory)
[2026-01-31T15:12:55.340Z] [BOT] ✅ No jobs to archive (all 1208 jobs within 7-day window)
[2026-01-31T15:12:55.409Z] [BOT] 💾 Saved posted_jobs.json: 1208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:12:56.910Z] [BOT] 📍 [ROUTING] "Product Designer, AI Models" @ figma
[2026-01-31T15:12:56.911Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:12:57.077Z] [BOT] ✅ Posted message: Product Designer, AI Models @ figma in #💻・tech-jobs
[2026-01-31T15:12:57.077Z] [BOT] ✅ Industry: Product Designer, AI Models @ figma
[2026-01-31T15:12:57.077Z] [BOT] 💾 Added channel posting: Product Designer, AI Models @ figma → category channel (1 total channels)
[2026-01-31T15:12:57.077Z] [BOT] 💾 BEFORE MERGE: 1209 jobs in memory (cached)
[2026-01-31T15:12:57.099Z] [BOT] ✅ Loaded V2 database: 1208 jobs
💾 DISK STATE: 1208 jobs on disk
[2026-01-31T15:12:57.099Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1209
[2026-01-31T15:12:57.102Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:12:57.102Z] [BOT] 💾 AFTER MERGE: 1209 jobs (merged disk + memory)
[2026-01-31T15:12:57.102Z] [BOT] ✅ No jobs to archive (all 1209 jobs within 7-day window)
[2026-01-31T15:12:57.187Z] [BOT] 💾 Saved posted_jobs.json: 1209 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:12:58.687Z] [BOT] 📍 [ROUTING] "Product Designer - Design, Dev, & AI Tools" @ figma
[2026-01-31T15:12:58.687Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:12:58.918Z] [BOT] ✅ Posted message: Product Designer - Design, Dev, & AI Tools @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer - Design, Dev, & AI Tools @ figma
[2026-01-31T15:12:58.918Z] [BOT] 💾 Added channel posting: Product Designer - Design, Dev, & AI Tools @ figma → category channel (1 total channels)
[2026-01-31T15:12:58.919Z] [BOT] 💾 BEFORE MERGE: 1210 jobs in memory (cached)
[2026-01-31T15:12:58.940Z] [BOT] ✅ Loaded V2 database: 1209 jobs
💾 DISK STATE: 1209 jobs on disk
[2026-01-31T15:12:58.940Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1210
[2026-01-31T15:12:58.943Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1210 jobs (merged disk + memory)
[2026-01-31T15:12:58.944Z] [BOT] ✅ No jobs to archive (all 1210 jobs within 7-day window)
[2026-01-31T15:12:59.010Z] [BOT] 💾 Saved posted_jobs.json: 1210 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:00.512Z] [BOT] 📍 [ROUTING] "Product Designer, Growth & Monetization" @ figma
   Category: TECH (matched: "pm")
[2026-01-31T15:13:00.512Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:13:00.989Z] [BOT] ✅ Posted message: Product Designer, Growth & Monetization @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer, Growth & Monetization @ figma
[2026-01-31T15:13:00.989Z] [BOT] 💾 Added channel posting: Product Designer, Growth & Monetization @ figma → category channel (1 total channels)
[2026-01-31T15:13:00.989Z] [BOT] 💾 BEFORE MERGE: 1211 jobs in memory (cached)
[2026-01-31T15:13:01.011Z] [BOT] ✅ Loaded V2 database: 1210 jobs
💾 DISK STATE: 1210 jobs on disk
[2026-01-31T15:13:01.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1211
[2026-01-31T15:13:01.014Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:13:01.014Z] [BOT] 💾 AFTER MERGE: 1211 jobs (merged disk + memory)
[2026-01-31T15:13:01.015Z] [BOT] ✅ No jobs to archive (all 1211 jobs within 7-day window)
[2026-01-31T15:13:01.082Z] [BOT] 💾 Saved posted_jobs.json: 1211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:02.584Z] [BOT] 📍 [ROUTING] "Systems Software Engineer" @ ORG_f223faa9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:13:02.855Z] [BOT] ✅ Posted message: Systems Software Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2026-01-31T15:13:02.855Z] [BOT] ✅ Industry: Systems Software Engineer @ ORG_f223faa9
[2026-01-31T15:13:02.856Z] [BOT] 💾 Added channel posting: Systems Software Engineer @ ORG_f223faa9 → category channel (1 total channels)
[2026-01-31T15:13:02.856Z] [BOT] 💾 BEFORE MERGE: 1212 jobs in memory (cached)
[2026-01-31T15:13:02.878Z] [BOT] ✅ Loaded V2 database: 1211 jobs
💾 DISK STATE: 1211 jobs on disk
[2026-01-31T15:13:02.878Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1212
[2026-01-31T15:13:02.880Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1212 jobs (merged disk + memory)
[2026-01-31T15:13:02.881Z] [BOT] ✅ No jobs to archive (all 1212 jobs within 7-day window)
[2026-01-31T15:13:02.951Z] [BOT] 💾 Saved posted_jobs.json: 1212 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:04.453Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
[2026-01-31T15:13:04.454Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:13:04.765Z] [BOT] ✅ Posted message: Software Engineer 1 @ T-Rex Solutions in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ T-Rex Solutions
[2026-01-31T15:13:04.766Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ T-Rex Solutions → category channel (1 total channels)
[2026-01-31T15:13:04.766Z] [BOT] 💾 BEFORE MERGE: 1213 jobs in memory (cached)
[2026-01-31T15:13:04.787Z] [BOT] ✅ Loaded V2 database: 1212 jobs
💾 DISK STATE: 1212 jobs on disk
[2026-01-31T15:13:04.787Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1213
[2026-01-31T15:13:04.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:13:04.790Z] [BOT] 💾 AFTER MERGE: 1213 jobs (merged disk + memory)
[2026-01-31T15:13:04.791Z] [BOT] ✅ No jobs to archive (all 1213 jobs within 7-day window)
[2026-01-31T15:13:04.857Z] [BOT] 💾 Saved posted_jobs.json: 1213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:06.360Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_877b2190
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:13:06.517Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_877b2190 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_877b2190
[2026-01-31T15:13:06.518Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_877b2190 → category channel (1 total channels)
[2026-01-31T15:13:06.518Z] [BOT] 💾 BEFORE MERGE: 1214 jobs in memory (cached)
[2026-01-31T15:13:06.540Z] [BOT] ✅ Loaded V2 database: 1213 jobs
💾 DISK STATE: 1213 jobs on disk
[2026-01-31T15:13:06.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1214
[2026-01-31T15:13:06.542Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:13:06.542Z] [BOT] 💾 AFTER MERGE: 1214 jobs (merged disk + memory)
[2026-01-31T15:13:06.543Z] [BOT] ✅ No jobs to archive (all 1214 jobs within 7-day window)
[2026-01-31T15:13:06.625Z] [BOT] 💾 Saved posted_jobs.json: 1214 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:11.126Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T15:13:11.127Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Maryland - US" @ ORG_f3ae3598
[2026-01-31T15:13:11.127Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:13:11.304Z] [BOT] ✅ Posted message: AI Data Specialist - Maryland - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-31T15:13:11.304Z] [BOT] ✅ Industry: AI Data Specialist - Maryland - US @ ORG_f3ae3598
[2026-01-31T15:13:11.305Z] [BOT] 💾 Added channel posting: AI Data Specialist - Maryland - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T15:13:11.305Z] [BOT] 💾 BEFORE MERGE: 1215 jobs in memory (cached)
[2026-01-31T15:13:11.326Z] [BOT] ✅ Loaded V2 database: 1214 jobs
💾 DISK STATE: 1214 jobs on disk
[2026-01-31T15:13:11.326Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1215
[2026-01-31T15:13:11.329Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1215 jobs (merged disk + memory)
[2026-01-31T15:13:11.329Z] [BOT] ✅ No jobs to archive (all 1215 jobs within 7-day window)
[2026-01-31T15:13:11.396Z] [BOT] 💾 Saved posted_jobs.json: 1215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:12.899Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-31T15:13:12.899Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:13:13.066Z] [BOT] ✅ Posted message: AI Data Specialist @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2026-01-31T15:13:13.066Z] [BOT] 💾 Added channel posting: AI Data Specialist @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T15:13:13.066Z] [BOT] 💾 BEFORE MERGE: 1216 jobs in memory (cached)
[2026-01-31T15:13:13.088Z] [BOT] ✅ Loaded V2 database: 1215 jobs
💾 DISK STATE: 1215 jobs on disk
[2026-01-31T15:13:13.088Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1216
[2026-01-31T15:13:13.091Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:13:13.091Z] [BOT] 💾 AFTER MERGE: 1216 jobs (merged disk + memory)
[2026-01-31T15:13:13.091Z] [BOT] ✅ No jobs to archive (all 1216 jobs within 7-day window)
[2026-01-31T15:13:13.159Z] [BOT] 💾 Saved posted_jobs.json: 1216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:17.662Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T15:13:17.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4bf6b275..." not found, but found as SHA256 "85ded0e1efc10a7a"
[2026-01-31T15:13:17.663Z] [BOT] ⏭️  Skipping duplicate: JID_83cd810e (posted within 7 days)
[2026-01-31T15:13:17.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_47f09ed6..." not found, but found as SHA256 "0f1ea6a5816d1195"
[2026-01-31T15:13:17.664Z] [BOT] ⏭️  Skipping duplicate: JID_d38de5ae (posted within 7 days)
[2026-01-31T15:13:17.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a8cc3bf..." not found, but found as SHA256 "e8497eb4376047fb"
⏭️  Skipping duplicate: JID_72796aa9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ca830686..." not found, but found as SHA256 "f33216ce0fbb7171"
⏭️  Skipping duplicate: JID_ca830686 (posted within 7 days)
[2026-01-31T15:13:17.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_820b17c5..." not found, but found as SHA256 "e10172da905a77e2"
⏭️  Skipping duplicate: JID_731a6fae (posted within 7 days)
[2026-01-31T15:13:17.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1798d1e..." not found, but found as SHA256 "b63070d744f8c531"
⏭️  Skipping duplicate: JID_685300d8 (posted within 7 days)
[2026-01-31T15:13:17.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4d2ec28..." not found, but found as SHA256 "2f60886187a965d7"
[2026-01-31T15:13:17.665Z] [BOT] ⏭️  Skipping duplicate: JID_6a802f99 (posted within 7 days)
[2026-01-31T15:13:17.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_15cacb35..." not found, but found as SHA256 "e7f0fc04c621ba85"
⏭️  Skipping duplicate: JID_15cacb35 (posted within 7 days)
[2026-01-31T15:13:17.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7626697..." not found, but found as SHA256 "e97fca399e81c067"
⏭️  Skipping duplicate: JID_da01aa07 (posted within 7 days)
[2026-01-31T15:13:17.665Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e696f85b..." not found, but found as SHA256 "09957feeebb285bf"
[2026-01-31T15:13:17.666Z] [BOT] ⏭️  Skipping duplicate: JID_e696f85b (posted within 7 days)
[2026-01-31T15:13:17.782Z] [BOT] ✅ Loaded pending queue: 2944 total (1718 pending, 49 enriched, 1177 posted)
[2026-01-31T15:13:17.977Z] [BOT] ✅ Saved pending queue: 2944 total (1718 pending, 39 enriched, 1187 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T15:13:17.977Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T15:13:18.066Z] [BOT] 📂 Loaded 11268 existing routing entries
[2026-01-31T15:13:18.192Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11278
   Timestamp: 2026-01-31T15:13:18.146Z
[2026-01-31T15:13:18.193Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 33
   Successful: 11
   Failed: 0
   Skipped: 22
[2026-01-31T15:13:18.194Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1216 jobs in memory (cached)
[2026-01-31T15:13:18.230Z] [BOT] ✅ Loaded V2 database: 1216 jobs
💾 DISK STATE: 1216 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1216
[2026-01-31T15:13:18.233Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:13:18.233Z] [BOT] 💾 AFTER MERGE: 1216 jobs (merged disk + memory)
[2026-01-31T15:13:18.234Z] [BOT] ✅ No jobs to archive (all 1216 jobs within 7-day window)
[2026-01-31T15:13:18.311Z] [BOT] 💾 Saved posted_jobs.json: 1216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:13:18.312Z] [BOT] ✅ Database saved successfully
[2026-01-31T15:13:20.344Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*