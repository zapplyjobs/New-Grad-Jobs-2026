# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T16:16:05.032Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T16:15:31.200Z] ========================================
[2026-01-31T16:15:31.202Z] Discord Bot Execution Log
[2026-01-31T16:15:31.202Z] Environment: GitHub Actions
[2026-01-31T16:15:31.202Z] Node Version: v20.20.0
[2026-01-31T16:15:31.202Z] ========================================
[2026-01-31T16:15:31.202Z] Environment Variables Check:
[2026-01-31T16:15:31.202Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T16:15:31.202Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T16:15:31.202Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T16:15:31.203Z] 
Multi-Channel Configuration:
[2026-01-31T16:15:31.203Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T16:15:31.203Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T16:15:31.203Z] 
Data Files Check:
[2026-01-31T16:15:31.204Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T16:15:31.240Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7668510 bytes)
[2026-01-31T16:15:31.240Z] 
========================================
[2026-01-31T16:15:31.240Z] Starting Enhanced Discord Bot...
[2026-01-31T16:15:31.240Z] ========================================
[2026-01-31T16:15:31.794Z] [BOT] ✅ Loaded V2 database: 1237 jobs
[2026-01-31T16:15:32.248Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T16:15:32.248Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T16:15:32.248Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T16:15:32.369Z] [BOT] ✅ Loaded pending queue: 2946 total (1679 pending, 50 enriched, 1217 posted)
[2026-01-31T16:15:32.370Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T16:15:32.370Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:15:32.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T16:15:32.371Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:15:32.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T16:15:32.371Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T16:15:32.372Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T16:15:32.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T16:15:32.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T16:15:32.372Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T16:15:32.373Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T16:15:32.373Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T16:15:32.373Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T16:15:32.373Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T16:15:32.373Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T16:15:32.373Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T16:15:32.374Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T16:15:32.374Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T16:15:32.374Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T16:15:32.374Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T16:15:32.374Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T16:15:32.374Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T16:15:32.375Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T16:15:32.375Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T16:15:32.375Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T16:15:32.375Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T16:15:32.375Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T16:15:32.385Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T16:15:32.385Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Texas A&M University - Corpus Christi
[2026-01-31T16:15:32.385Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC at Argonne National Laboratory
[2026-01-31T16:15:32.493Z] [BOT] ✅ Loaded pending queue: 2946 total (1679 pending, 50 enriched, 1217 posted)
[2026-01-31T16:15:32.685Z] [BOT] ✅ Saved pending queue: 2944 total (1679 pending, 48 enriched, 1217 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T16:15:32.685Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T16:15:32.685Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T16:15:32.686Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T16:15:32.686Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T16:15:32.690Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T16:15:32.691Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-31T16:15:32.691Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:32.709Z] [BOT ERROR] (node:4087) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T16:15:32.949Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-31T16:15:32.949Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-31T16:15:32.950Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-31T16:15:32.950Z] [BOT] 💾 BEFORE MERGE: 1238 jobs in memory (cached)
[2026-01-31T16:15:32.977Z] [BOT] ✅ Loaded V2 database: 1237 jobs
💾 DISK STATE: 1237 jobs on disk
[2026-01-31T16:15:32.977Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1238
[2026-01-31T16:15:32.980Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:15:32.980Z] [BOT] 💾 AFTER MERGE: 1238 jobs (merged disk + memory)
[2026-01-31T16:15:32.981Z] [BOT] ✅ No jobs to archive (all 1238 jobs within 7-day window)
[2026-01-31T16:15:33.060Z] [BOT] 💾 Saved posted_jobs.json: 1238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:34.562Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:34.794Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-31T16:15:34.795Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-31T16:15:34.795Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-31T16:15:34.795Z] [BOT] 💾 BEFORE MERGE: 1239 jobs in memory (cached)
[2026-01-31T16:15:34.817Z] [BOT] ✅ Loaded V2 database: 1238 jobs
💾 DISK STATE: 1238 jobs on disk
[2026-01-31T16:15:34.817Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1239
[2026-01-31T16:15:34.820Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1239 jobs (merged disk + memory)
[2026-01-31T16:15:34.821Z] [BOT] ✅ No jobs to archive (all 1239 jobs within 7-day window)
[2026-01-31T16:15:34.895Z] [BOT] 💾 Saved posted_jobs.json: 1239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:36.396Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-31T16:15:36.397Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:36.613Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-31T16:15:36.613Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-31T16:15:36.613Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-31T16:15:36.614Z] [BOT] 💾 BEFORE MERGE: 1240 jobs in memory (cached)
[2026-01-31T16:15:36.636Z] [BOT] ✅ Loaded V2 database: 1239 jobs
💾 DISK STATE: 1239 jobs on disk
[2026-01-31T16:15:36.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1240
[2026-01-31T16:15:36.639Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:15:36.639Z] [BOT] 💾 AFTER MERGE: 1240 jobs (merged disk + memory)
[2026-01-31T16:15:36.640Z] [BOT] ✅ No jobs to archive (all 1240 jobs within 7-day window)
[2026-01-31T16:15:36.716Z] [BOT] 💾 Saved posted_jobs.json: 1240 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:38.434Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-31T16:15:38.434Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T16:15:38.434Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-31T16:15:38.434Z] [BOT] 💾 BEFORE MERGE: 1240 jobs in memory (cached)
[2026-01-31T16:15:38.457Z] [BOT] ✅ Loaded V2 database: 1240 jobs
💾 DISK STATE: 1240 jobs on disk
[2026-01-31T16:15:38.457Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1240
[2026-01-31T16:15:38.460Z] [BOT] 🔀 Deep merged: Software Engineer – Early Career @ ORG_07b9fafa (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T16:15:38.460Z] [BOT] 💾 AFTER MERGE: 1240 jobs (merged disk + memory)
[2026-01-31T16:15:38.460Z] [BOT] ✅ No jobs to archive (all 1240 jobs within 7-day window)
[2026-01-31T16:15:38.557Z] [BOT] 💾 Saved posted_jobs.json: 1240 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:40.056Z] [BOT] 📍 [ROUTING] "Associate Solutions Consultant" @ figma
   Category: TECH (default)
[2026-01-31T16:15:40.056Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:40.221Z] [BOT] ✅ Posted message: Associate Solutions Consultant @ figma in #💻・tech-jobs
  ✅ Industry: Associate Solutions Consultant @ figma
[2026-01-31T16:15:40.222Z] [BOT] 💾 Added channel posting: Associate Solutions Consultant @ figma → category channel (1 total channels)
[2026-01-31T16:15:40.222Z] [BOT] 💾 BEFORE MERGE: 1241 jobs in memory (cached)
[2026-01-31T16:15:40.252Z] [BOT] ✅ Loaded V2 database: 1240 jobs
💾 DISK STATE: 1240 jobs on disk
[2026-01-31T16:15:40.252Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1241
[2026-01-31T16:15:40.255Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1241 jobs (merged disk + memory)
[2026-01-31T16:15:40.256Z] [BOT] ✅ No jobs to archive (all 1241 jobs within 7-day window)
[2026-01-31T16:15:40.326Z] [BOT] 💾 Saved posted_jobs.json: 1241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:41.828Z] [BOT] 📍 [ROUTING] "Account Executive, Strategic" @ figma
   Category: TECH (default)
[2026-01-31T16:15:41.828Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:42.060Z] [BOT] ✅ Posted message: Account Executive, Strategic @ figma in #💻・tech-jobs
  ✅ Industry: Account Executive, Strategic @ figma
[2026-01-31T16:15:42.061Z] [BOT] 💾 Added channel posting: Account Executive, Strategic @ figma → category channel (1 total channels)
[2026-01-31T16:15:42.061Z] [BOT] 💾 BEFORE MERGE: 1242 jobs in memory (cached)
[2026-01-31T16:15:42.083Z] [BOT] ✅ Loaded V2 database: 1241 jobs
💾 DISK STATE: 1241 jobs on disk
[2026-01-31T16:15:42.084Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1242
[2026-01-31T16:15:42.086Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1242 jobs (merged disk + memory)
[2026-01-31T16:15:42.087Z] [BOT] ✅ No jobs to archive (all 1242 jobs within 7-day window)
[2026-01-31T16:15:42.159Z] [BOT] 💾 Saved posted_jobs.json: 1242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:43.661Z] [BOT] 📍 [ROUTING] "Software Engineer, C++" @ figma
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:15:43.964Z] [BOT] ✅ Posted message: Software Engineer, C++ @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer, C++ @ figma
[2026-01-31T16:15:43.965Z] [BOT] 💾 Added channel posting: Software Engineer, C++ @ figma → category channel (1 total channels)
[2026-01-31T16:15:43.965Z] [BOT] 💾 BEFORE MERGE: 1243 jobs in memory (cached)
[2026-01-31T16:15:43.987Z] [BOT] ✅ Loaded V2 database: 1242 jobs
💾 DISK STATE: 1242 jobs on disk
[2026-01-31T16:15:43.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1243
[2026-01-31T16:15:43.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1243 jobs (merged disk + memory)
[2026-01-31T16:15:43.990Z] [BOT] ✅ No jobs to archive (all 1243 jobs within 7-day window)
[2026-01-31T16:15:44.064Z] [BOT] 💾 Saved posted_jobs.json: 1243 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:48.566Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T16:15:48.567Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-31T16:15:48.567Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T16:15:48.701Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-31T16:15:48.702Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-31T16:15:48.702Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-31T16:15:48.702Z] [BOT] 💾 BEFORE MERGE: 1244 jobs in memory (cached)
[2026-01-31T16:15:48.748Z] [BOT] ✅ Loaded V2 database: 1243 jobs
💾 DISK STATE: 1243 jobs on disk
[2026-01-31T16:15:48.748Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1244
[2026-01-31T16:15:48.751Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:15:48.752Z] [BOT] 💾 AFTER MERGE: 1244 jobs (merged disk + memory)
[2026-01-31T16:15:48.752Z] [BOT] ✅ No jobs to archive (all 1244 jobs within 7-day window)
[2026-01-31T16:15:48.840Z] [BOT] 💾 Saved posted_jobs.json: 1244 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:50.343Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-31T16:15:50.343Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:15:50.499Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-31T16:15:50.500Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T16:15:50.500Z] [BOT] 💾 BEFORE MERGE: 1245 jobs in memory (cached)
[2026-01-31T16:15:50.523Z] [BOT] ✅ Loaded V2 database: 1244 jobs
💾 DISK STATE: 1244 jobs on disk
[2026-01-31T16:15:50.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1245
[2026-01-31T16:15:50.526Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1245 jobs (merged disk + memory)
[2026-01-31T16:15:50.526Z] [BOT] ✅ No jobs to archive (all 1245 jobs within 7-day window)
[2026-01-31T16:15:50.616Z] [BOT] 💾 Saved posted_jobs.json: 1245 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:52.114Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T16:15:52.317Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-31T16:15:52.318Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-31T16:15:52.318Z] [BOT] 💾 BEFORE MERGE: 1246 jobs in memory (cached)
[2026-01-31T16:15:52.340Z] [BOT] ✅ Loaded V2 database: 1245 jobs
💾 DISK STATE: 1245 jobs on disk
[2026-01-31T16:15:52.340Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1246
[2026-01-31T16:15:52.343Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1246 jobs (merged disk + memory)
[2026-01-31T16:15:52.343Z] [BOT] ✅ No jobs to archive (all 1246 jobs within 7-day window)
[2026-01-31T16:15:52.414Z] [BOT] 💾 Saved posted_jobs.json: 1246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:15:56.916Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T16:15:56.917Z] [BOT] 📍 [ROUTING] "Data Scientist  " @ figma
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T16:15:56.917Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T16:15:57.068Z] [BOT] ✅ Posted message: Data Scientist   @ figma in #📊・JID_fb739488
[2026-01-31T16:15:57.069Z] [BOT] ✅ Industry: Data Scientist   @ figma
[2026-01-31T16:15:57.069Z] [BOT] 💾 Added channel posting: Data Scientist   @ figma → category channel (1 total channels)
[2026-01-31T16:15:57.069Z] [BOT] 💾 BEFORE MERGE: 1247 jobs in memory (cached)
[2026-01-31T16:15:57.092Z] [BOT] ✅ Loaded V2 database: 1246 jobs
💾 DISK STATE: 1246 jobs on disk
[2026-01-31T16:15:57.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1247
[2026-01-31T16:15:57.095Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:15:57.096Z] [BOT] 💾 AFTER MERGE: 1247 jobs (merged disk + memory)
[2026-01-31T16:15:57.096Z] [BOT] ✅ No jobs to archive (all 1247 jobs within 7-day window)
[2026-01-31T16:15:57.183Z] [BOT] 💾 Saved posted_jobs.json: 1247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:16:01.684Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T16:16:01.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T16:16:01.686Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
[2026-01-31T16:16:01.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
[2026-01-31T16:16:01.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
[2026-01-31T16:16:01.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T16:16:01.687Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
[2026-01-31T16:16:01.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T16:16:01.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9bf5a1a0..." not found, but found as SHA256 "5ea042d0c83e7cb5"
[2026-01-31T16:16:01.687Z] [BOT] ⏭️  Skipping duplicate: JID_9c8a6ec2 (posted within 7 days)
[2026-01-31T16:16:01.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_685b9a1f..." not found, but found as SHA256 "fa9000ba6d208039"
⏭️  Skipping duplicate: JID_030688b3 (posted within 7 days)
[2026-01-31T16:16:01.688Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b41d3f7f..." not found, but found as SHA256 "7d3a23fe8184259e"
[2026-01-31T16:16:01.688Z] [BOT] ⏭️  Skipping duplicate: JID_201c391a (posted within 7 days)
[2026-01-31T16:16:01.688Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b2d0c57a..." not found, but found as SHA256 "2eeabc4d5e81621c"
[2026-01-31T16:16:01.689Z] [BOT] ⏭️  Skipping duplicate: JID_f5b2af2c (posted within 7 days)
[2026-01-31T16:16:01.806Z] [BOT] ✅ Loaded pending queue: 2944 total (1679 pending, 48 enriched, 1217 posted)
[2026-01-31T16:16:01.989Z] [BOT] ✅ Saved pending queue: 2944 total (1679 pending, 38 enriched, 1227 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T16:16:01.990Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T16:16:02.093Z] [BOT] 📂 Loaded 11308 existing routing entries
[2026-01-31T16:16:02.206Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T16:16:02.207Z] [BOT] Total entries: 11318
   Timestamp: 2026-01-31T16:16:02.160Z
[2026-01-31T16:16:02.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 27
   Successful: 11
   Failed: 0
   Skipped: 16
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-31T16:16:02.208Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-31T16:16:02.209Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1247 jobs in memory (cached)
[2026-01-31T16:16:02.238Z] [BOT] ✅ Loaded V2 database: 1247 jobs
💾 DISK STATE: 1247 jobs on disk
[2026-01-31T16:16:02.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1247
[2026-01-31T16:16:02.242Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:16:02.242Z] [BOT] 💾 AFTER MERGE: 1247 jobs (merged disk + memory)
[2026-01-31T16:16:02.243Z] [BOT] ✅ No jobs to archive (all 1247 jobs within 7-day window)
[2026-01-31T16:16:02.314Z] [BOT] 💾 Saved posted_jobs.json: 1247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:16:02.314Z] [BOT] ✅ Database saved successfully
[2026-01-31T16:16:04.345Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4087) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*