# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T12:15:55.453Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T12:15:21.701Z] ========================================
[2026-01-31T12:15:21.703Z] Discord Bot Execution Log
[2026-01-31T12:15:21.703Z] Environment: GitHub Actions
[2026-01-31T12:15:21.703Z] Node Version: v20.20.0
[2026-01-31T12:15:21.703Z] ========================================
[2026-01-31T12:15:21.703Z] Environment Variables Check:
[2026-01-31T12:15:21.703Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T12:15:21.703Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T12:15:21.704Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T12:15:21.704Z] 
Multi-Channel Configuration:
[2026-01-31T12:15:21.704Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T12:15:21.704Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T12:15:21.705Z] 
Data Files Check:
[2026-01-31T12:15:21.706Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T12:15:21.739Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6985608 bytes)
[2026-01-31T12:15:21.739Z] 
========================================
[2026-01-31T12:15:21.740Z] Starting Enhanced Discord Bot...
[2026-01-31T12:15:21.740Z] ========================================
[2026-01-31T12:15:22.305Z] [BOT] ✅ Loaded V2 database: 1116 jobs
[2026-01-31T12:15:22.772Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T12:15:22.773Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T12:15:22.773Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T12:15:22.887Z] [BOT] ✅ Loaded pending queue: 2952 total (1815 pending, 50 enriched, 1087 posted)
[2026-01-31T12:15:22.887Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:15:22.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T12:15:22.888Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T12:15:22.888Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:15:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T12:15:22.889Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T12:15:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T12:15:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T12:15:22.889Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T12:15:22.890Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T12:15:22.890Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T12:15:22.890Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T12:15:22.890Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T12:15:22.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T12:15:22.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T12:15:22.891Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T12:15:22.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T12:15:22.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T12:15:22.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T12:15:22.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T12:15:22.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T12:15:22.900Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T12:15:22.901Z] [BOT] 🚫 Skipping blacklisted job: Revenue Analytics Lead at Formlabs
[2026-01-31T12:15:23.020Z] [BOT] ✅ Loaded pending queue: 2952 total (1815 pending, 50 enriched, 1087 posted)
[2026-01-31T12:15:23.199Z] [BOT] ✅ Saved pending queue: 2951 total (1815 pending, 49 enriched, 1087 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T12:15:23.200Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T12:15:23.200Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T12:15:23.201Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T12:15:23.201Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T12:15:23.205Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T12:15:23.206Z] [BOT] 📍 [ROUTING] "Analyst 1" @ ORG_742553d6 Entertainment
[2026-01-31T12:15:23.206Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:23.223Z] [BOT ERROR] (node:3414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T12:15:23.571Z] [BOT] ✅ Posted message: Analyst 1 @ ORG_742553d6 Entertainment in #💻・tech-jobs
[2026-01-31T12:15:23.571Z] [BOT] ✅ Industry: Analyst 1 @ ORG_742553d6 Entertainment
[2026-01-31T12:15:23.572Z] [BOT] 💾 Added channel posting: Analyst 1 @ ORG_742553d6 Entertainment → category channel (1 total channels)
[2026-01-31T12:15:23.572Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory (cached)
[2026-01-31T12:15:23.596Z] [BOT] ✅ Loaded V2 database: 1116 jobs
💾 DISK STATE: 1116 jobs on disk
[2026-01-31T12:15:23.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1117
[2026-01-31T12:15:23.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:23.599Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-31T12:15:23.600Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-31T12:15:23.684Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:25.187Z] [BOT] 📍 [ROUTING] "Entry Level Graphics Software Developer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:25.429Z] [BOT] ✅ Posted message: Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・tech-jobs
[2026-01-31T12:15:25.429Z] [BOT] ✅ Industry: Entry Level Graphics Software Developer @ ORG_d51736fa
[2026-01-31T12:15:25.429Z] [BOT] 💾 Added channel posting: Entry Level Graphics Software Developer @ ORG_d51736fa → category channel (1 total channels)
[2026-01-31T12:15:25.430Z] [BOT] 💾 BEFORE MERGE: 1118 jobs in memory (cached)
[2026-01-31T12:15:25.450Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-31T12:15:25.451Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1118
[2026-01-31T12:15:25.453Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1118 jobs (merged disk + memory)
[2026-01-31T12:15:25.454Z] [BOT] ✅ No jobs to archive (all 1118 jobs within 7-day window)
[2026-01-31T12:15:25.519Z] [BOT] 💾 Saved posted_jobs.json: 1118 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:27.021Z] [BOT] 📍 [ROUTING] "Technical Recruiter" @ figma
[2026-01-31T12:15:27.022Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:27.198Z] [BOT] ✅ Posted message: Technical Recruiter @ figma in #💻・tech-jobs
[2026-01-31T12:15:27.198Z] [BOT] ✅ Industry: Technical Recruiter @ figma
[2026-01-31T12:15:27.199Z] [BOT] 💾 Added channel posting: Technical Recruiter @ figma → category channel (1 total channels)
[2026-01-31T12:15:27.199Z] [BOT] 💾 BEFORE MERGE: 1119 jobs in memory (cached)
[2026-01-31T12:15:27.220Z] [BOT] ✅ Loaded V2 database: 1118 jobs
💾 DISK STATE: 1118 jobs on disk
[2026-01-31T12:15:27.220Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1119
[2026-01-31T12:15:27.223Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:27.223Z] [BOT] 💾 AFTER MERGE: 1119 jobs (merged disk + memory)
[2026-01-31T12:15:27.224Z] [BOT] ✅ No jobs to archive (all 1119 jobs within 7-day window)
[2026-01-31T12:15:27.307Z] [BOT] 💾 Saved posted_jobs.json: 1119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:28.806Z] [BOT] 📍 [ROUTING] "Research Technician" @ ORG_540647baing
[2026-01-31T12:15:28.806Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:28.999Z] [BOT] ✅ Posted message: Research Technician @ ORG_540647baing in #💻・tech-jobs
[2026-01-31T12:15:28.999Z] [BOT] ✅ Industry: Research Technician @ ORG_540647baing
[2026-01-31T12:15:28.999Z] [BOT] 💾 Added channel posting: Research Technician @ ORG_540647baing → category channel (1 total channels)
[2026-01-31T12:15:29.000Z] [BOT] 💾 BEFORE MERGE: 1120 jobs in memory (cached)
[2026-01-31T12:15:29.020Z] [BOT] ✅ Loaded V2 database: 1119 jobs
💾 DISK STATE: 1119 jobs on disk
[2026-01-31T12:15:29.021Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1120
[2026-01-31T12:15:29.023Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1120 jobs (merged disk + memory)
[2026-01-31T12:15:29.024Z] [BOT] ✅ No jobs to archive (all 1120 jobs within 7-day window)
[2026-01-31T12:15:29.088Z] [BOT] 💾 Saved posted_jobs.json: 1120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:30.752Z] [BOT] ✅ Posted message: Research Technician @ ORG_540647baing in #🗽・JID_98d4f0de
[2026-01-31T12:15:30.752Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T12:15:30.753Z] [BOT] 💾 Added channel posting: Research Technician @ ORG_540647baing → location channel (2 total channels)
[2026-01-31T12:15:30.753Z] [BOT] 💾 BEFORE MERGE: 1120 jobs in memory (cached)
[2026-01-31T12:15:30.774Z] [BOT] ✅ Loaded V2 database: 1120 jobs
💾 DISK STATE: 1120 jobs on disk
[2026-01-31T12:15:30.774Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1120
[2026-01-31T12:15:30.777Z] [BOT] 🔀 Deep merged: Research Technician @ ORG_540647baing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T12:15:30.777Z] [BOT] 💾 AFTER MERGE: 1120 jobs (merged disk + memory)
[2026-01-31T12:15:30.778Z] [BOT] ✅ No jobs to archive (all 1120 jobs within 7-day window)
[2026-01-31T12:15:30.842Z] [BOT] 💾 Saved posted_jobs.json: 1120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:32.343Z] [BOT] 📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:32.560Z] [BOT] ✅ Posted message: Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・tech-jobs
  ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2026-01-31T12:15:32.560Z] [BOT] 💾 Added channel posting: Condition Monitoring Engineer @ ORG_1640be31 Insight → category channel (1 total channels)
💾 BEFORE MERGE: 1121 jobs in memory (cached)
[2026-01-31T12:15:32.582Z] [BOT] ✅ Loaded V2 database: 1120 jobs
💾 DISK STATE: 1120 jobs on disk
[2026-01-31T12:15:32.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1121
[2026-01-31T12:15:32.586Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:32.586Z] [BOT] 💾 AFTER MERGE: 1121 jobs (merged disk + memory)
[2026-01-31T12:15:32.587Z] [BOT] ✅ No jobs to archive (all 1121 jobs within 7-day window)
[2026-01-31T12:15:32.653Z] [BOT] 💾 Saved posted_jobs.json: 1121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:34.155Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-31T12:15:34.155Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:15:34.285Z] [BOT] ✅ Posted message: Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-31T12:15:34.286Z] [BOT] ✅ Industry: Software Engineer @ ORG_afd623b1
[2026-01-31T12:15:34.286Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-31T12:15:34.287Z] [BOT] 💾 BEFORE MERGE: 1122 jobs in memory (cached)
[2026-01-31T12:15:34.307Z] [BOT] ✅ Loaded V2 database: 1121 jobs
💾 DISK STATE: 1121 jobs on disk
[2026-01-31T12:15:34.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1122
[2026-01-31T12:15:34.310Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:34.310Z] [BOT] 💾 AFTER MERGE: 1122 jobs (merged disk + memory)
[2026-01-31T12:15:34.311Z] [BOT] ✅ No jobs to archive (all 1122 jobs within 7-day window)
[2026-01-31T12:15:34.376Z] [BOT] 💾 Saved posted_jobs.json: 1122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:38.877Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T12:15:38.878Z] [BOT] 📍 [ROUTING] "Product Line Management Data Science" @ ORG_0c79a9c2 Materials
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T12:15:38.878Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T12:15:39.036Z] [BOT] ✅ Posted message: Product Line Management Data Science @ ORG_0c79a9c2 Materials in #📊・JID_fb739488
  ✅ Industry: Product Line Management Data Science @ ORG_0c79a9c2 Materials
[2026-01-31T12:15:39.036Z] [BOT] 💾 Added channel posting: Product Line Management Data Science @ ORG_0c79a9c2 Materials → category channel (1 total channels)
[2026-01-31T12:15:39.036Z] [BOT] 💾 BEFORE MERGE: 1123 jobs in memory (cached)
[2026-01-31T12:15:39.057Z] [BOT] ✅ Loaded V2 database: 1122 jobs
💾 DISK STATE: 1122 jobs on disk
[2026-01-31T12:15:39.057Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1123
[2026-01-31T12:15:39.060Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:39.060Z] [BOT] 💾 AFTER MERGE: 1123 jobs (merged disk + memory)
[2026-01-31T12:15:39.061Z] [BOT] ✅ No jobs to archive (all 1123 jobs within 7-day window)
[2026-01-31T12:15:39.126Z] [BOT] 💾 Saved posted_jobs.json: 1123 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:40.628Z] [BOT] 📍 [ROUTING] "Linux System Administrator" @ ORG_b344d80e Boeing Company
[2026-01-31T12:15:40.628Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T12:15:40.950Z] [BOT] ✅ Posted message: Linux System Administrator @ ORG_b344d80e Boeing Company in #📊・JID_fb739488
  ✅ Industry: Linux System Administrator @ ORG_b344d80e Boeing Company
[2026-01-31T12:15:40.951Z] [BOT] 💾 Added channel posting: Linux System Administrator @ ORG_b344d80e Boeing Company → category channel (1 total channels)
[2026-01-31T12:15:40.951Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory (cached)
[2026-01-31T12:15:40.972Z] [BOT] ✅ Loaded V2 database: 1123 jobs
💾 DISK STATE: 1123 jobs on disk
[2026-01-31T12:15:40.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1124
[2026-01-31T12:15:40.975Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:40.975Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-31T12:15:40.975Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-31T12:15:41.055Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:45.554Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T12:15:45.555Z] [BOT] 📍 [ROUTING] "Mission Integration Engineer - Applied Computing - Starshield" @ ORG_afd623b1
   Category: AI (matched: "machine learning")
[2026-01-31T12:15:45.555Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T12:15:45.798Z] [BOT] ✅ Posted message: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1
[2026-01-31T12:15:45.799Z] [BOT] 💾 Added channel posting: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 → category channel (1 total channels)
💾 BEFORE MERGE: 1125 jobs in memory (cached)
[2026-01-31T12:15:45.826Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-31T12:15:45.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1125
[2026-01-31T12:15:45.829Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:45.829Z] [BOT] 💾 AFTER MERGE: 1125 jobs (merged disk + memory)
[2026-01-31T12:15:45.829Z] [BOT] ✅ No jobs to archive (all 1125 jobs within 7-day window)
[2026-01-31T12:15:45.892Z] [BOT] 💾 Saved posted_jobs.json: 1125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:47.394Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy" @ ORG_ce770667
   Category: AI (matched: "artificial intelligence")
[2026-01-31T12:15:47.394Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T12:15:47.578Z] [BOT] ✅ Posted message: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 in #🤖・ai-jobs
[2026-01-31T12:15:47.578Z] [BOT] ✅ Industry: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667
[2026-01-31T12:15:47.579Z] [BOT] 💾 Added channel posting: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 → category channel (1 total channels)
[2026-01-31T12:15:47.579Z] [BOT] 💾 BEFORE MERGE: 1126 jobs in memory (cached)
[2026-01-31T12:15:47.600Z] [BOT] ✅ Loaded V2 database: 1125 jobs
💾 DISK STATE: 1125 jobs on disk
[2026-01-31T12:15:47.600Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1126
[2026-01-31T12:15:47.602Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:47.602Z] [BOT] 💾 AFTER MERGE: 1126 jobs (merged disk + memory)
[2026-01-31T12:15:47.603Z] [BOT] ✅ No jobs to archive (all 1126 jobs within 7-day window)
[2026-01-31T12:15:47.680Z] [BOT] 💾 Saved posted_jobs.json: 1126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:52.179Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T12:15:52.181Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_104bd934..." not found, but found as SHA256 "546292a4de27f586"
[2026-01-31T12:15:52.181Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-76888 (posted within 7 days)
[2026-01-31T12:15:52.181Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f35747b5..." not found, but found as SHA256 "b8a1437e3a3af24a"
⏭️  Skipping duplicate: JID_389ffced-developer_r-00171511 (posted within 7 days)
[2026-01-31T12:15:52.182Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0d19254d-..." not found, but found as SHA256 "be622f6ec29e0704"
⏭️  Skipping duplicate: JID_57ea17c9-_r2519079-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dc3f9b3c..." not found, but found as SHA256 "a22df244c51b7826"
⏭️  Skipping duplicate: JID_1c54387c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "acfc006c2104f94b"
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_3e21d42d-administrator_jr2025487641 (posted within 7 days)
[2026-01-31T12:15:52.182Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1fb909..." not found, but found as SHA256 "092fa1ec7c7ab8c6"
[2026-01-31T12:15:52.182Z] [BOT] ⏭️  Skipping duplicate: JID_2b60cefa (posted within 7 days)
[2026-01-31T12:15:52.182Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b96da84b..." not found, but found as SHA256 "965069123a36b112"
⏭️  Skipping duplicate: JID_c4b3a057 (posted within 7 days)
[2026-01-31T12:15:52.183Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb8adad6..." not found, but found as SHA256 "a111f649dd6fa394"
⏭️  Skipping duplicate: JID_5a465ac4 (posted within 7 days)
[2026-01-31T12:15:52.183Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_72856fa1-..." not found, but found as SHA256 "e0b7f27b3574a57f"
[2026-01-31T12:15:52.183Z] [BOT] ⏭️  Skipping duplicate: JID_bd0a79e9 (posted within 7 days)
[2026-01-31T12:15:52.183Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2c791680..." not found, but found as SHA256 "f01323fad324dc6e"
[2026-01-31T12:15:52.183Z] [BOT] ⏭️  Skipping duplicate: JID_ee1ee315 (posted within 7 days)
[2026-01-31T12:15:52.279Z] [BOT] ✅ Loaded pending queue: 2951 total (1815 pending, 49 enriched, 1087 posted)
[2026-01-31T12:15:52.462Z] [BOT] ✅ Saved pending queue: 2951 total (1815 pending, 39 enriched, 1097 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T12:15:52.462Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T12:15:52.547Z] [BOT] 📂 Loaded 11178 existing routing entries
[2026-01-31T12:15:52.669Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T12:15:52.669Z] [BOT] Total entries: 11188
   Timestamp: 2026-01-31T12:15:52.623Z
[2026-01-31T12:15:52.669Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T12:15:52.670Z] [BOT] Total attempts: 26
   Successful: 11
   Failed: 0
   Skipped: 15
[2026-01-31T12:15:52.670Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T12:15:52.670Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📊・JID_fb739488: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T12:15:52.670Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1126 jobs in memory (cached)
[2026-01-31T12:15:52.693Z] [BOT] ✅ Loaded V2 database: 1126 jobs
💾 DISK STATE: 1126 jobs on disk
[2026-01-31T12:15:52.693Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1126
[2026-01-31T12:15:52.695Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:15:52.696Z] [BOT] 💾 AFTER MERGE: 1126 jobs (merged disk + memory)
[2026-01-31T12:15:52.696Z] [BOT] ✅ No jobs to archive (all 1126 jobs within 7-day window)
[2026-01-31T12:15:52.762Z] [BOT] 💾 Saved posted_jobs.json: 1126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:15:52.762Z] [BOT] ✅ Database saved successfully
[2026-01-31T12:15:54.795Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*