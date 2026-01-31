# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T06:36:04.359Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T06:35:22.421Z] ========================================
[2026-01-31T06:35:22.423Z] Discord Bot Execution Log
[2026-01-31T06:35:22.423Z] Environment: GitHub Actions
[2026-01-31T06:35:22.423Z] Node Version: v20.20.0
[2026-01-31T06:35:22.423Z] ========================================
[2026-01-31T06:35:22.423Z] Environment Variables Check:
[2026-01-31T06:35:22.423Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T06:35:22.423Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.423Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T06:35:22.423Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T06:35:22.423Z] 
Multi-Channel Configuration:
[2026-01-31T06:35:22.424Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T06:35:22.424Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T06:35:22.424Z] 
Data Files Check:
[2026-01-31T06:35:22.425Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T06:35:22.455Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5828922 bytes)
[2026-01-31T06:35:22.455Z] 
========================================
[2026-01-31T06:35:22.455Z] Starting Enhanced Discord Bot...
[2026-01-31T06:35:22.455Z] ========================================
[2026-01-31T06:35:22.997Z] [BOT] ✅ Loaded V2 database: 898 jobs
[2026-01-31T06:35:23.805Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T06:35:23.806Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T06:35:23.806Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T06:35:23.922Z] [BOT] ✅ Loaded pending queue: 2958 total (2039 pending, 50 enriched, 869 posted)
[2026-01-31T06:35:23.923Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T06:35:23.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T06:35:23.924Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T06:35:23.925Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T06:35:23.925Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T06:35:23.925Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T06:35:23.925Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T06:35:23.926Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T06:35:23.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T06:35:23.927Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T06:35:23.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T06:35:23.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T06:35:23.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T06:35:23.928Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T06:35:23.928Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T06:35:23.928Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T06:35:23.928Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T06:35:23.934Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T06:35:23.935Z] [BOT] 🚫 Skipping blacklisted job: Director of Sales, Scaled Vendor Sales at spotify
[2026-01-31T06:35:24.043Z] [BOT] ✅ Loaded pending queue: 2958 total (2039 pending, 50 enriched, 869 posted)
[2026-01-31T06:35:24.230Z] [BOT] ✅ Saved pending queue: 2957 total (2039 pending, 49 enriched, 869 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T06:35:24.231Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T06:35:24.231Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T06:35:24.232Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T06:35:24.232Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Technical Consultant @ brex: new york, new york, united states, salt lake city, utah, united states
   - Android Sales Expert @ 2020 Companies: sf, alameda
[2026-01-31T06:35:24.232Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T06:35:24.235Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-31T06:35:24.236Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-31T06:35:24.236Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T06:35:24.255Z] [BOT ERROR] (node:4084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T06:35:24.488Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #💰・finance-jobs
[2026-01-31T06:35:24.488Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-31T06:35:24.489Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T06:35:24.489Z] [BOT] 💾 BEFORE MERGE: 899 jobs in memory (cached)
[2026-01-31T06:35:24.510Z] [BOT] ✅ Loaded V2 database: 898 jobs
💾 DISK STATE: 898 jobs on disk
[2026-01-31T06:35:24.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=899
[2026-01-31T06:35:24.513Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:24.513Z] [BOT] 💾 AFTER MERGE: 899 jobs (merged disk + memory)
[2026-01-31T06:35:24.514Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2026-01-31T06:35:24.583Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:26.230Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #🗽・JID_98d4f0de
[2026-01-31T06:35:26.230Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:35:26.230Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → location channel (2 total channels)
[2026-01-31T06:35:26.230Z] [BOT] 💾 BEFORE MERGE: 899 jobs in memory (cached)
[2026-01-31T06:35:26.248Z] [BOT] ✅ Loaded V2 database: 899 jobs
💾 DISK STATE: 899 jobs on disk
[2026-01-31T06:35:26.248Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=899
[2026-01-31T06:35:26.250Z] [BOT] 🔀 Deep merged: Technical Consultant @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:35:26.251Z] [BOT] 💾 AFTER MERGE: 899 jobs (merged disk + memory)
[2026-01-31T06:35:26.251Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2026-01-31T06:35:26.307Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:27.808Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T06:35:27.969Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-31T06:35:27.969Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 900 jobs in memory (cached)
[2026-01-31T06:35:27.987Z] [BOT] ✅ Loaded V2 database: 899 jobs
💾 DISK STATE: 899 jobs on disk
[2026-01-31T06:35:27.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=900
[2026-01-31T06:35:27.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:27.989Z] [BOT] 💾 AFTER MERGE: 900 jobs (merged disk + memory)
[2026-01-31T06:35:27.990Z] [BOT] ✅ No jobs to archive (all 900 jobs within 7-day window)
[2026-01-31T06:35:28.046Z] [BOT] 💾 Saved posted_jobs.json: 900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:32.548Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T06:35:32.549Z] [BOT] 📍 [ROUTING] "Software Engineer - Starlink Ground Network" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-31T06:35:32.549Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:35:32.798Z] [BOT] ✅ Posted message: Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-31T06:35:32.798Z] [BOT] ✅ Industry: Software Engineer - Starlink Ground Network @ ORG_afd623b1
[2026-01-31T06:35:32.799Z] [BOT] 💾 Added channel posting: Software Engineer - Starlink Ground Network @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-31T06:35:32.799Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory (cached)
[2026-01-31T06:35:32.817Z] [BOT] ✅ Loaded V2 database: 900 jobs
💾 DISK STATE: 900 jobs on disk
[2026-01-31T06:35:32.818Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=901
[2026-01-31T06:35:32.820Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:32.820Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-31T06:35:32.820Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-31T06:35:32.877Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:34.379Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b344d80e Job Sauce
   Category: TECH (matched: "software")
[2026-01-31T06:35:34.379Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:35:34.610Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b344d80e Job Sauce in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_b344d80e Job Sauce
[2026-01-31T06:35:34.610Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b344d80e Job Sauce → category channel (1 total channels)
[2026-01-31T06:35:34.611Z] [BOT] 💾 BEFORE MERGE: 902 jobs in memory (cached)
[2026-01-31T06:35:34.628Z] [BOT] ✅ Loaded V2 database: 901 jobs
💾 DISK STATE: 901 jobs on disk
[2026-01-31T06:35:34.629Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=902
[2026-01-31T06:35:34.631Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:34.631Z] [BOT] 💾 AFTER MERGE: 902 jobs (merged disk + memory)
[2026-01-31T06:35:34.631Z] [BOT] ✅ No jobs to archive (all 902 jobs within 7-day window)
[2026-01-31T06:35:34.695Z] [BOT] 💾 Saved posted_jobs.json: 902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:36.196Z] [BOT] 📍 [ROUTING] "Applications Development Intermediate Programmer Analyst" @ ORG_e9591c52
[2026-01-31T06:35:36.197Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:35:36.435Z] [BOT] ✅ Posted message: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #💻・tech-jobs
  ✅ Industry: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52
[2026-01-31T06:35:36.435Z] [BOT] 💾 Added channel posting: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-31T06:35:36.435Z] [BOT] 💾 BEFORE MERGE: 903 jobs in memory (cached)
[2026-01-31T06:35:36.452Z] [BOT] ✅ Loaded V2 database: 902 jobs
💾 DISK STATE: 902 jobs on disk
[2026-01-31T06:35:36.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=903
[2026-01-31T06:35:36.454Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:36.454Z] [BOT] 💾 AFTER MERGE: 903 jobs (merged disk + memory)
[2026-01-31T06:35:36.455Z] [BOT] ✅ No jobs to archive (all 903 jobs within 7-day window)
[2026-01-31T06:35:36.509Z] [BOT] 💾 Saved posted_jobs.json: 903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:38.011Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend" @ ORG_b18a8c08
[2026-01-31T06:35:38.011Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:35:38.167Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend @ ORG_b18a8c08 in #💻・tech-jobs
[2026-01-31T06:35:38.167Z] [BOT] ✅ Industry: Software Engineer 1 - Backend @ ORG_b18a8c08
[2026-01-31T06:35:38.168Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend @ ORG_b18a8c08 → category channel (1 total channels)
💾 BEFORE MERGE: 904 jobs in memory (cached)
[2026-01-31T06:35:38.185Z] [BOT] ✅ Loaded V2 database: 903 jobs
💾 DISK STATE: 903 jobs on disk
[2026-01-31T06:35:38.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=904
[2026-01-31T06:35:38.187Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:38.187Z] [BOT] 💾 AFTER MERGE: 904 jobs (merged disk + memory)
[2026-01-31T06:35:38.188Z] [BOT] ✅ No jobs to archive (all 904 jobs within 7-day window)
[2026-01-31T06:35:38.242Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:40.001Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend @ ORG_b18a8c08 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T06:35:40.001Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend @ ORG_b18a8c08 → location channel (2 total channels)
[2026-01-31T06:35:40.001Z] [BOT] 💾 BEFORE MERGE: 904 jobs in memory (cached)
[2026-01-31T06:35:40.019Z] [BOT] ✅ Loaded V2 database: 904 jobs
💾 DISK STATE: 904 jobs on disk
[2026-01-31T06:35:40.019Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=904
[2026-01-31T06:35:40.021Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Backend @ ORG_b18a8c08 (disk: 1 channels → merged: 2 channels)
[2026-01-31T06:35:40.021Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 904 jobs (merged disk + memory)
[2026-01-31T06:35:40.022Z] [BOT] ✅ No jobs to archive (all 904 jobs within 7-day window)
[2026-01-31T06:35:40.086Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:41.589Z] [BOT] 📍 [ROUTING] "Junior RUST Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:35:41.953Z] [BOT] ✅ Posted message: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T06:35:41.955Z] [BOT] 💾 Added channel posting: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-31T06:35:41.955Z] [BOT] 💾 BEFORE MERGE: 905 jobs in memory (cached)
[2026-01-31T06:35:41.981Z] [BOT] ✅ Loaded V2 database: 904 jobs
💾 DISK STATE: 904 jobs on disk
[2026-01-31T06:35:41.982Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=905
[2026-01-31T06:35:41.987Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 905 jobs (merged disk + memory)
[2026-01-31T06:35:41.988Z] [BOT] ✅ No jobs to archive (all 905 jobs within 7-day window)
[2026-01-31T06:35:42.098Z] [BOT] 💾 Saved posted_jobs.json: 905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:46.599Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T06:35:46.600Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Data Pipelines" @ ORG_4709bc89
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T06:35:46.600Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T06:35:46.909Z] [BOT] ✅ Posted message: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 in #🤖・ai-jobs
[2026-01-31T06:35:46.909Z] [BOT] ✅ Industry: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89
[2026-01-31T06:35:46.909Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 → category channel (1 total channels)
[2026-01-31T06:35:46.910Z] [BOT] 💾 BEFORE MERGE: 906 jobs in memory (cached)
[2026-01-31T06:35:46.928Z] [BOT] ✅ Loaded V2 database: 905 jobs
💾 DISK STATE: 905 jobs on disk
[2026-01-31T06:35:46.928Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=906
[2026-01-31T06:35:46.931Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:46.931Z] [BOT] 💾 AFTER MERGE: 906 jobs (merged disk + memory)
[2026-01-31T06:35:46.931Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2026-01-31T06:35:47.008Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:48.701Z] [BOT] ✅ Posted message: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 in #🗽・JID_98d4f0de
[2026-01-31T06:35:48.701Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:35:48.701Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 → location channel (2 total channels)
[2026-01-31T06:35:48.701Z] [BOT] 💾 BEFORE MERGE: 906 jobs in memory (cached)
[2026-01-31T06:35:48.720Z] [BOT] ✅ Loaded V2 database: 906 jobs
💾 DISK STATE: 906 jobs on disk
[2026-01-31T06:35:48.720Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=906
[2026-01-31T06:35:48.722Z] [BOT] 🔀 Deep merged: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:35:48.722Z] [BOT] 💾 AFTER MERGE: 906 jobs (merged disk + memory)
[2026-01-31T06:35:48.723Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2026-01-31T06:35:48.780Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:50.283Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_d31dc978
[2026-01-31T06:35:50.283Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T06:35:50.461Z] [BOT] ✅ Posted message: Business Data Analyst @ ORG_d31dc978 in #🤖・ai-jobs
  ✅ Industry: Business Data Analyst @ ORG_d31dc978
[2026-01-31T06:35:50.462Z] [BOT] 💾 Added channel posting: Business Data Analyst @ ORG_d31dc978 → category channel (1 total channels)
[2026-01-31T06:35:50.462Z] [BOT] 💾 BEFORE MERGE: 907 jobs in memory (cached)
[2026-01-31T06:35:50.479Z] [BOT] ✅ Loaded V2 database: 906 jobs
💾 DISK STATE: 906 jobs on disk
[2026-01-31T06:35:50.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=907
[2026-01-31T06:35:50.481Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:50.481Z] [BOT] 💾 AFTER MERGE: 907 jobs (merged disk + memory)
[2026-01-31T06:35:50.482Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2026-01-31T06:35:50.536Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:52.362Z] [BOT] ✅ Posted message: Business Data Analyst @ ORG_d31dc978 in #🗽・JID_98d4f0de
[2026-01-31T06:35:52.362Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:35:52.362Z] [BOT] 💾 Added channel posting: Business Data Analyst @ ORG_d31dc978 → location channel (2 total channels)
[2026-01-31T06:35:52.362Z] [BOT] 💾 BEFORE MERGE: 907 jobs in memory (cached)
[2026-01-31T06:35:52.380Z] [BOT] ✅ Loaded V2 database: 907 jobs
💾 DISK STATE: 907 jobs on disk
[2026-01-31T06:35:52.380Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=907
[2026-01-31T06:35:52.382Z] [BOT] 🔀 Deep merged: Business Data Analyst @ ORG_d31dc978 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:35:52.382Z] [BOT] 💾 AFTER MERGE: 907 jobs (merged disk + memory)
[2026-01-31T06:35:52.383Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2026-01-31T06:35:52.439Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:53.941Z] [BOT] 📍 [ROUTING] "Backend Engineer  - Data Infrastructure" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-31T06:35:53.941Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T06:35:54.166Z] [BOT] ✅ Posted message: Backend Engineer  - Data Infrastructure @ spotify in #🤖・ai-jobs
  ✅ Industry: Backend Engineer  - Data Infrastructure @ spotify
[2026-01-31T06:35:54.167Z] [BOT] 💾 Added channel posting: Backend Engineer  - Data Infrastructure @ spotify → category channel (1 total channels)
[2026-01-31T06:35:54.167Z] [BOT] 💾 BEFORE MERGE: 908 jobs in memory (cached)
[2026-01-31T06:35:54.184Z] [BOT] ✅ Loaded V2 database: 907 jobs
💾 DISK STATE: 907 jobs on disk
[2026-01-31T06:35:54.184Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=908
[2026-01-31T06:35:54.186Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:35:54.186Z] [BOT] 💾 AFTER MERGE: 908 jobs (merged disk + memory)
[2026-01-31T06:35:54.187Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2026-01-31T06:35:54.241Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:35:56.003Z] [BOT] ✅ Posted message: Backend Engineer  - Data Infrastructure @ spotify in #🗽・JID_98d4f0de
[2026-01-31T06:35:56.003Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:35:56.003Z] [BOT] 💾 Added channel posting: Backend Engineer  - Data Infrastructure @ spotify → location channel (2 total channels)
[2026-01-31T06:35:56.003Z] [BOT] 💾 BEFORE MERGE: 908 jobs in memory (cached)
[2026-01-31T06:35:56.021Z] [BOT] ✅ Loaded V2 database: 908 jobs
💾 DISK STATE: 908 jobs on disk
[2026-01-31T06:35:56.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=908
[2026-01-31T06:35:56.024Z] [BOT] 🔀 Deep merged: Backend Engineer  - Data Infrastructure @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 908 jobs (merged disk + memory)
[2026-01-31T06:35:56.024Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2026-01-31T06:35:56.081Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:36:00.583Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T06:36:00.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26f50726..." not found, but found as SHA256 "eee9c6ee0cf3d957"
⏭️  Skipping duplicate: JID_26f50726 (posted within 7 days)
[2026-01-31T06:36:00.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb4fb33d..." not found, but found as SHA256 "0c8cad67d126641e"
[2026-01-31T06:36:00.585Z] [BOT] ⏭️  Skipping duplicate: JID_cb4fb33d (posted within 7 days)
[2026-01-31T06:36:00.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_46f66538..." not found, but found as SHA256 "2dc54d92e2b3a3bf"
[2026-01-31T06:36:00.585Z] [BOT] ⏭️  Skipping duplicate: JID_55a87b9c (posted within 7 days)
[2026-01-31T06:36:00.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a165e4ab..." not found, but found as SHA256 "45b173dde499fbf1"
⏭️  Skipping duplicate: JID_1bb13100 (posted within 7 days)
[2026-01-31T06:36:00.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ab793c3c..." not found, but found as SHA256 "8c695a7f82eb486f"
⏭️  Skipping duplicate: JID_5612b53d-analyst_10074067-wd (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "98896e338b433f79"
⏭️  Skipping duplicate: JID_5982c0f1-officer_25926282 (posted within 7 days)
[2026-01-31T06:36:00.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98cef1a2..." not found, but found as SHA256 "3207ebb8af5e0a7d"
⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25910 (posted within 7 days)
[2026-01-31T06:36:00.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf5f8de9-..." not found, but found as SHA256 "2c55805654a54a82"
⏭️  Skipping duplicate: JID_6c5ec1fe (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_02c568b0..." not found, but found as SHA256 "92ecf37f2d658936"
⏭️  Skipping duplicate: JID_0b329593 (posted within 7 days)
[2026-01-31T06:36:00.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a83eb8ff..." not found, but found as SHA256 "a0a4e4472596def1"
⏭️  Skipping duplicate: JID_fe3ddf49 (posted within 7 days)
[2026-01-31T06:36:00.688Z] [BOT] ✅ Loaded pending queue: 2957 total (2039 pending, 49 enriched, 869 posted)
[2026-01-31T06:36:00.879Z] [BOT] ✅ Saved pending queue: 2957 total (2039 pending, 39 enriched, 879 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T06:36:00.879Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T06:36:00.963Z] [BOT] 📂 Loaded 10960 existing routing entries
[2026-01-31T06:36:01.083Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10970
   Timestamp: 2026-01-31T06:36:01.040Z
[2026-01-31T06:36:01.084Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 30
[2026-01-31T06:36:01.084Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 15
[2026-01-31T06:36:01.084Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T06:36:01.084Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・JID_98d4f0de: 4 posts
[2026-01-31T06:36:01.085Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #💰・finance-jobs: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-31T06:36:01.085Z] [BOT] [STATS] Channel stats saved
[2026-01-31T06:36:01.085Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 908 jobs in memory (cached)
[2026-01-31T06:36:01.104Z] [BOT] ✅ Loaded V2 database: 908 jobs
💾 DISK STATE: 908 jobs on disk
[2026-01-31T06:36:01.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=908
[2026-01-31T06:36:01.107Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:36:01.107Z] [BOT] 💾 AFTER MERGE: 908 jobs (merged disk + memory)
[2026-01-31T06:36:01.108Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2026-01-31T06:36:01.170Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T06:36:03.203Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*