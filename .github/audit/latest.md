# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T08:00:59.960Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T08:00:25.944Z] ========================================
[2026-01-31T08:00:25.945Z] Discord Bot Execution Log
[2026-01-31T08:00:25.946Z] Environment: GitHub Actions
[2026-01-31T08:00:25.946Z] Node Version: v20.20.0
[2026-01-31T08:00:25.946Z] ========================================
[2026-01-31T08:00:25.946Z] Environment Variables Check:
[2026-01-31T08:00:25.946Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T08:00:25.946Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.946Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T08:00:25.946Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T08:00:25.946Z] 
Multi-Channel Configuration:
[2026-01-31T08:00:25.946Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.946Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T08:00:25.947Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T08:00:25.947Z] 
Data Files Check:
[2026-01-31T08:00:25.948Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T08:00:25.978Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6072699 bytes)
[2026-01-31T08:00:25.978Z] 
========================================
[2026-01-31T08:00:25.978Z] Starting Enhanced Discord Bot...
[2026-01-31T08:00:25.978Z] ========================================
[2026-01-31T08:00:26.531Z] [BOT] ✅ Loaded V2 database: 948 jobs
[2026-01-31T08:00:26.954Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T08:00:26.955Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T08:00:26.955Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T08:00:27.072Z] [BOT] ✅ Loaded pending queue: 2959 total (1990 pending, 50 enriched, 919 posted)
[2026-01-31T08:00:27.072Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:00:27.073Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T08:00:27.073Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T08:00:27.073Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:00:27.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T08:00:27.074Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T08:00:27.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T08:00:27.074Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T08:00:27.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T08:00:27.074Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T08:00:27.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T08:00:27.075Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T08:00:27.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T08:00:27.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T08:00:27.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T08:00:27.076Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T08:00:27.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T08:00:27.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T08:00:27.076Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T08:00:27.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T08:00:27.077Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T08:00:27.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T08:00:27.077Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T08:00:27.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T08:00:27.083Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T08:00:27.083Z] [BOT] 🚫 Skipping blacklisted job: Data Insight Analyst - Principal Data Insight Analyst at Northrop Grumman
[2026-01-31T08:00:27.186Z] [BOT] ✅ Loaded pending queue: 2959 total (1990 pending, 50 enriched, 919 posted)
[2026-01-31T08:00:27.360Z] [BOT] ✅ Saved pending queue: 2958 total (1990 pending, 49 enriched, 919 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T08:00:27.360Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T08:00:27.360Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T08:00:27.361Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T08:00:27.361Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T08:00:27.365Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T08:00:27.366Z] [BOT] 📍 [ROUTING] "Analytics Associate 1" @ ORG_75e49207 Analytics
   Category: TECH (matched: "analytics")
[2026-01-31T08:00:27.366Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:27.383Z] [BOT ERROR] (node:3283) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T08:00:27.676Z] [BOT] ✅ Posted message: Analytics Associate 1 @ ORG_75e49207 Analytics in #💻・tech-jobs
[2026-01-31T08:00:27.676Z] [BOT] ✅ Industry: Analytics Associate 1 @ ORG_75e49207 Analytics
[2026-01-31T08:00:27.677Z] [BOT] 💾 Added channel posting: Analytics Associate 1 @ ORG_75e49207 Analytics → category channel (1 total channels)
[2026-01-31T08:00:27.677Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory (cached)
[2026-01-31T08:00:27.698Z] [BOT] ✅ Loaded V2 database: 948 jobs
💾 DISK STATE: 948 jobs on disk
[2026-01-31T08:00:27.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=949
[2026-01-31T08:00:27.701Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:27.701Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-31T08:00:27.702Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-31T08:00:27.767Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:29.269Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
   Category: TECH (matched: "software")
[2026-01-31T08:00:29.269Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:29.560Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #💻・tech-jobs
[2026-01-31T08:00:29.560Z] [BOT] ✅ Industry: Software Engineer @ Q2
[2026-01-31T08:00:29.561Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → category channel (1 total channels)
[2026-01-31T08:00:29.561Z] [BOT] 💾 BEFORE MERGE: 950 jobs in memory (cached)
[2026-01-31T08:00:29.579Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-31T08:00:29.580Z] [BOT] 💾 DISK STATE: 949 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=950
[2026-01-31T08:00:29.582Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:29.582Z] [BOT] 💾 AFTER MERGE: 950 jobs (merged disk + memory)
[2026-01-31T08:00:29.583Z] [BOT] ✅ No jobs to archive (all 950 jobs within 7-day window)
[2026-01-31T08:00:29.641Z] [BOT] 💾 Saved posted_jobs.json: 950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:31.398Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #🗽・JID_98d4f0de
[2026-01-31T08:00:31.398Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:00:31.398Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → location channel (2 total channels)
💾 BEFORE MERGE: 950 jobs in memory (cached)
[2026-01-31T08:00:31.417Z] [BOT] ✅ Loaded V2 database: 950 jobs
💾 DISK STATE: 950 jobs on disk
[2026-01-31T08:00:31.417Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=950
[2026-01-31T08:00:31.419Z] [BOT] 🔀 Deep merged: Software Engineer @ Q2 (disk: 1 channels → merged: 2 channels)
[2026-01-31T08:00:31.419Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 950 jobs (merged disk + memory)
[2026-01-31T08:00:31.420Z] [BOT] ✅ No jobs to archive (all 950 jobs within 7-day window)
[2026-01-31T08:00:31.479Z] [BOT] 💾 Saved posted_jobs.json: 950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:32.981Z] [BOT] 📍 [ROUTING] "Product Designer - DeepSky" @ airtable
   Category: TECH (default)
[2026-01-31T08:00:32.981Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:33.192Z] [BOT] ✅ Posted message: Product Designer - DeepSky @ airtable in #💻・tech-jobs
[2026-01-31T08:00:33.192Z] [BOT] ✅ Industry: Product Designer - DeepSky @ airtable
[2026-01-31T08:00:33.192Z] [BOT] 💾 Added channel posting: Product Designer - DeepSky @ airtable → category channel (1 total channels)
[2026-01-31T08:00:33.192Z] [BOT] 💾 BEFORE MERGE: 951 jobs in memory (cached)
[2026-01-31T08:00:33.211Z] [BOT] ✅ Loaded V2 database: 950 jobs
💾 DISK STATE: 950 jobs on disk
[2026-01-31T08:00:33.211Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=951
[2026-01-31T08:00:33.214Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:33.214Z] [BOT] 💾 AFTER MERGE: 951 jobs (merged disk + memory)
[2026-01-31T08:00:33.214Z] [BOT] ✅ No jobs to archive (all 951 jobs within 7-day window)
[2026-01-31T08:00:33.272Z] [BOT] 💾 Saved posted_jobs.json: 951 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:34.773Z] [BOT] 📍 [ROUTING] "Renewals Associate" @ airtable
[2026-01-31T08:00:34.773Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:34.998Z] [BOT] ✅ Posted message: Renewals Associate @ airtable in #💻・tech-jobs
[2026-01-31T08:00:34.998Z] [BOT] ✅ Industry: Renewals Associate @ airtable
[2026-01-31T08:00:34.998Z] [BOT] 💾 Added channel posting: Renewals Associate @ airtable → category channel (1 total channels)
[2026-01-31T08:00:34.998Z] [BOT] 💾 BEFORE MERGE: 952 jobs in memory (cached)
[2026-01-31T08:00:35.017Z] [BOT] ✅ Loaded V2 database: 951 jobs
💾 DISK STATE: 951 jobs on disk
[2026-01-31T08:00:35.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=952
[2026-01-31T08:00:35.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:35.020Z] [BOT] 💾 AFTER MERGE: 952 jobs (merged disk + memory)
[2026-01-31T08:00:35.020Z] [BOT] ✅ No jobs to archive (all 952 jobs within 7-day window)
[2026-01-31T08:00:35.086Z] [BOT] 💾 Saved posted_jobs.json: 952 active jobs
[2026-01-31T08:00:35.090Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:36.589Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ airtable
[2026-01-31T08:00:36.589Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:36.758Z] [BOT] ✅ Posted message: Software Engineer, Android @ airtable in #💻・tech-jobs
[2026-01-31T08:00:36.758Z] [BOT] ✅ Industry: Software Engineer, Android @ airtable
[2026-01-31T08:00:36.759Z] [BOT] 💾 Added channel posting: Software Engineer, Android @ airtable → category channel (1 total channels)
💾 BEFORE MERGE: 953 jobs in memory (cached)
[2026-01-31T08:00:36.776Z] [BOT] ✅ Loaded V2 database: 952 jobs
💾 DISK STATE: 952 jobs on disk
[2026-01-31T08:00:36.777Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=953
[2026-01-31T08:00:36.779Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 953 jobs (merged disk + memory)
[2026-01-31T08:00:36.780Z] [BOT] ✅ No jobs to archive (all 953 jobs within 7-day window)
[2026-01-31T08:00:36.835Z] [BOT] 💾 Saved posted_jobs.json: 953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:38.338Z] [BOT] 📍 [ROUTING] "GIS Technician" @ NV5 Global
[2026-01-31T08:00:38.338Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:38.564Z] [BOT] ✅ Posted message: GIS Technician @ NV5 Global in #💻・tech-jobs
[2026-01-31T08:00:38.564Z] [BOT] ✅ Industry: GIS Technician @ NV5 Global
[2026-01-31T08:00:38.564Z] [BOT] 💾 Added channel posting: GIS Technician @ NV5 Global → category channel (1 total channels)
💾 BEFORE MERGE: 954 jobs in memory (cached)
[2026-01-31T08:00:38.591Z] [BOT] ✅ Loaded V2 database: 953 jobs
💾 DISK STATE: 953 jobs on disk
[2026-01-31T08:00:38.592Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=954
[2026-01-31T08:00:38.594Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 954 jobs (merged disk + memory)
[2026-01-31T08:00:38.594Z] [BOT] ✅ No jobs to archive (all 954 jobs within 7-day window)
[2026-01-31T08:00:38.657Z] [BOT] 💾 Saved posted_jobs.json: 954 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:40.158Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2026-01-31T08:00:40.158Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:40.479Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
[2026-01-31T08:00:40.479Z] [BOT] ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-31T08:00:40.479Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → category channel (1 total channels)
💾 BEFORE MERGE: 955 jobs in memory (cached)
[2026-01-31T08:00:40.497Z] [BOT] ✅ Loaded V2 database: 954 jobs
💾 DISK STATE: 954 jobs on disk
[2026-01-31T08:00:40.498Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=955
[2026-01-31T08:00:40.499Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-31T08:00:40.500Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-31T08:00:40.556Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:42.057Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_4893d237 Technologies
   Category: TECH (matched: "software")
[2026-01-31T08:00:42.058Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:00:42.266Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_4893d237 Technologies in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_4893d237 Technologies
[2026-01-31T08:00:42.267Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_4893d237 Technologies → category channel (1 total channels)
[2026-01-31T08:00:42.267Z] [BOT] 💾 BEFORE MERGE: 956 jobs in memory (cached)
[2026-01-31T08:00:42.286Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-31T08:00:42.286Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=956
[2026-01-31T08:00:42.288Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:42.288Z] [BOT] 💾 AFTER MERGE: 956 jobs (merged disk + memory)
[2026-01-31T08:00:42.289Z] [BOT] ✅ No jobs to archive (all 956 jobs within 7-day window)
[2026-01-31T08:00:42.347Z] [BOT] 💾 Saved posted_jobs.json: 956 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:46.848Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T08:00:46.849Z] [BOT] 📍 [ROUTING] "Data Engineer" @ airtable
[2026-01-31T08:00:46.849Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T08:00:47.128Z] [BOT] ✅ Posted message: Data Engineer @ airtable in #📊・JID_fb739488
  ✅ Industry: Data Engineer @ airtable
[2026-01-31T08:00:47.128Z] [BOT] 💾 Added channel posting: Data Engineer @ airtable → category channel (1 total channels)
[2026-01-31T08:00:47.129Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory (cached)
[2026-01-31T08:00:47.147Z] [BOT] ✅ Loaded V2 database: 956 jobs
💾 DISK STATE: 956 jobs on disk
[2026-01-31T08:00:47.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=957
[2026-01-31T08:00:47.149Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:47.149Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-31T08:00:47.150Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-31T08:00:47.207Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:51.710Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T08:00:51.711Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
[2026-01-31T08:00:51.711Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T08:00:51.948Z] [BOT] ✅ Posted message:  People Systems Engineer, Airtable Specialist @ airtable in #🤖・ai-jobs
  ✅ Industry:  People Systems Engineer, Airtable Specialist @ airtable
[2026-01-31T08:00:51.949Z] [BOT] 💾 Added channel posting:  People Systems Engineer, Airtable Specialist @ airtable → category channel (1 total channels)
[2026-01-31T08:00:51.949Z] [BOT] 💾 BEFORE MERGE: 958 jobs in memory (cached)
[2026-01-31T08:00:51.966Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-31T08:00:51.966Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=958
[2026-01-31T08:00:51.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:51.968Z] [BOT] 💾 AFTER MERGE: 958 jobs (merged disk + memory)
[2026-01-31T08:00:51.969Z] [BOT] ✅ No jobs to archive (all 958 jobs within 7-day window)
[2026-01-31T08:00:52.024Z] [BOT] 💾 Saved posted_jobs.json: 958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:56.528Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T08:00:56.529Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d97f619..." not found, but found as SHA256 "eb70db15b78449ff"
⏭️  Skipping duplicate: JID_96301371 (posted within 7 days)
[2026-01-31T08:00:56.529Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64a28ffa-..." not found, but found as SHA256 "ad28b13361c45f6d"
⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11939 (posted within 7 days)
[2026-01-31T08:00:56.530Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "4eaec1286e5e3e99"
[2026-01-31T08:00:56.530Z] [BOT] ⏭️  Skipping duplicate: JID_7548c722 (posted within 7 days)
[2026-01-31T08:00:56.531Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "1f6ee511bbfd1973"
⏭️  Skipping duplicate: JID_ba7988a5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "5edf4cc601304702"
⏭️  Skipping duplicate: JID_e20e3bf0 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "b947fed152935433"
⏭️  Skipping duplicate: JID_4b569989 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "ec2ef1342356b6c4"
⏭️  Skipping duplicate: JID_7382d413 (posted within 7 days)
[2026-01-31T08:00:56.531Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c313cfe5..." not found, but found as SHA256 "bd60e89398ebadbb"
⏭️  Skipping duplicate: JID_c313cfe5 (posted within 7 days)
[2026-01-31T08:00:56.531Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3265b69..." not found, but found as SHA256 "e2a7148a7532ec74"
⏭️  Skipping duplicate: JID_1163d0da (posted within 7 days)
[2026-01-31T08:00:56.531Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a3ef2a1..." not found, but found as SHA256 "0784e77cda238dc8"
⏭️  Skipping duplicate: JID_bc250026 (posted within 7 days)
[2026-01-31T08:00:56.641Z] [BOT] ✅ Loaded pending queue: 2958 total (1990 pending, 49 enriched, 919 posted)
[2026-01-31T08:00:56.823Z] [BOT] ✅ Saved pending queue: 2958 total (1990 pending, 39 enriched, 929 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T08:00:56.823Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T08:00:56.908Z] [BOT] 📂 Loaded 11010 existing routing entries
[2026-01-31T08:00:57.045Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T08:00:57.045Z] [BOT] New entries: 10
   Total entries: 11020
   Timestamp: 2026-01-31T08:00:57.002Z
[2026-01-31T08:00:57.046Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T08:00:57.046Z] [BOT] Total attempts: 26
   Successful: 11
   Failed: 0
   Skipped: 15
[2026-01-31T08:00:57.046Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
[2026-01-31T08:00:57.046Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 1 posts
     3. #📊・JID_fb739488: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-31T08:00:57.047Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T08:00:57.047Z] [BOT] 💾 BEFORE MERGE: 958 jobs in memory (cached)
[2026-01-31T08:00:57.066Z] [BOT] ✅ Loaded V2 database: 958 jobs
💾 DISK STATE: 958 jobs on disk
[2026-01-31T08:00:57.067Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=958
[2026-01-31T08:00:57.068Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:00:57.068Z] [BOT] 💾 AFTER MERGE: 958 jobs (merged disk + memory)
[2026-01-31T08:00:57.069Z] [BOT] ✅ No jobs to archive (all 958 jobs within 7-day window)
[2026-01-31T08:00:57.125Z] [BOT] 💾 Saved posted_jobs.json: 958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:00:57.125Z] [BOT] ✅ Database saved successfully
[2026-01-31T08:00:59.154Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3283) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*