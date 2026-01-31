# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T02:45:33.930Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T02:45:00.279Z] ========================================
[2026-01-31T02:45:00.281Z] Discord Bot Execution Log
[2026-01-31T02:45:00.281Z] Environment: GitHub Actions
[2026-01-31T02:45:00.281Z] Node Version: v20.20.0
[2026-01-31T02:45:00.281Z] ========================================
[2026-01-31T02:45:00.281Z] Environment Variables Check:
[2026-01-31T02:45:00.281Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T02:45:00.281Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.281Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T02:45:00.281Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T02:45:00.282Z] 
Multi-Channel Configuration:
[2026-01-31T02:45:00.282Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T02:45:00.282Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T02:45:00.282Z] 
Data Files Check:
[2026-01-31T02:45:00.283Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T02:45:00.312Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5437041 bytes)
[2026-01-31T02:45:00.312Z] 
========================================
[2026-01-31T02:45:00.312Z] Starting Enhanced Discord Bot...
[2026-01-31T02:45:00.312Z] ========================================
[2026-01-31T02:45:00.858Z] [BOT] ✅ Loaded V2 database: 828 jobs
[2026-01-31T02:45:01.667Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T02:45:01.668Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T02:45:01.668Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T02:45:01.788Z] [BOT] ✅ Loaded pending queue: 2957 total (2108 pending, 50 enriched, 799 posted)
[2026-01-31T02:45:01.788Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T02:45:01.788Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T02:45:01.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T02:45:01.789Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T02:45:01.789Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T02:45:01.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T02:45:01.790Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T02:45:01.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T02:45:01.790Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T02:45:01.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T02:45:01.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T02:45:01.790Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T02:45:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T02:45:01.791Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T02:45:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T02:45:01.791Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T02:45:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T02:45:01.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T02:45:01.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T02:45:01.793Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T02:45:01.798Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T02:45:01.799Z] [BOT] 🚫 Skipping blacklisted job: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
[2026-01-31T02:45:01.799Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer - Home at spotify
🚫 Skipping blacklisted job: Senior Contracts Manager, Procurement and AI at airtable
[2026-01-31T02:45:01.903Z] [BOT] ✅ Loaded pending queue: 2957 total (2108 pending, 50 enriched, 799 posted)
[2026-01-31T02:45:02.103Z] [BOT] ✅ Saved pending queue: 2954 total (2108 pending, 47 enriched, 799 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-31T02:45:02.104Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T02:45:02.104Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T02:45:02.105Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T02:45:02.105Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T02:45:02.105Z] [BOT] - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T02:45:02.105Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T02:45:02.109Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T02:45:02.110Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-31T02:45:02.110Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:02.127Z] [BOT ERROR] (node:3186) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T02:45:02.328Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
[2026-01-31T02:45:02.328Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_316d43c0 Design Systems
[2026-01-31T02:45:02.329Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_316d43c0 Design Systems → category channel (1 total channels)
[2026-01-31T02:45:02.329Z] [BOT] 💾 BEFORE MERGE: 829 jobs in memory (cached)
[2026-01-31T02:45:02.351Z] [BOT] ✅ Loaded V2 database: 828 jobs
💾 DISK STATE: 828 jobs on disk
[2026-01-31T02:45:02.352Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=829
[2026-01-31T02:45:02.354Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:02.354Z] [BOT] 💾 AFTER MERGE: 829 jobs (merged disk + memory)
[2026-01-31T02:45:02.354Z] [BOT] ✅ No jobs to archive (all 829 jobs within 7-day window)
[2026-01-31T02:45:02.417Z] [BOT] 💾 Saved posted_jobs.json: 829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:03.919Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:04.205Z] [BOT] ✅ Posted message: Geospatial Analyst @ ORG_eae683eb in #💻・tech-jobs
  ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-31T02:45:04.206Z] [BOT] 💾 Added channel posting: Geospatial Analyst @ ORG_eae683eb → category channel (1 total channels)
[2026-01-31T02:45:04.206Z] [BOT] 💾 BEFORE MERGE: 830 jobs in memory (cached)
[2026-01-31T02:45:04.223Z] [BOT] ✅ Loaded V2 database: 829 jobs
💾 DISK STATE: 829 jobs on disk
[2026-01-31T02:45:04.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=830
[2026-01-31T02:45:04.226Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 830 jobs (merged disk + memory)
[2026-01-31T02:45:04.226Z] [BOT] ✅ No jobs to archive (all 830 jobs within 7-day window)
[2026-01-31T02:45:04.281Z] [BOT] 💾 Saved posted_jobs.json: 830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:05.782Z] [BOT] 📍 [ROUTING] "Assoc Analyst Technology" @ ORG_4aef9434ine
[2026-01-31T02:45:05.782Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:06.045Z] [BOT] ✅ Posted message: Assoc Analyst Technology @ ORG_4aef9434ine in #💻・tech-jobs
[2026-01-31T02:45:06.045Z] [BOT] ✅ Industry: Assoc Analyst Technology @ ORG_4aef9434ine
[2026-01-31T02:45:06.046Z] [BOT] 💾 Added channel posting: Assoc Analyst Technology @ ORG_4aef9434ine → category channel (1 total channels)
[2026-01-31T02:45:06.046Z] [BOT] 💾 BEFORE MERGE: 831 jobs in memory (cached)
[2026-01-31T02:45:06.063Z] [BOT] ✅ Loaded V2 database: 830 jobs
💾 DISK STATE: 830 jobs on disk
[2026-01-31T02:45:06.063Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=831
[2026-01-31T02:45:06.065Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:06.065Z] [BOT] 💾 AFTER MERGE: 831 jobs (merged disk + memory)
[2026-01-31T02:45:06.066Z] [BOT] ✅ No jobs to archive (all 831 jobs within 7-day window)
[2026-01-31T02:45:06.121Z] [BOT] 💾 Saved posted_jobs.json: 831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:07.623Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
[2026-01-31T02:45:07.623Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:07.871Z] [BOT] ✅ Posted message: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-31T02:45:07.871Z] [BOT] ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-31T02:45:07.871Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
💾 BEFORE MERGE: 832 jobs in memory (cached)
[2026-01-31T02:45:07.888Z] [BOT] ✅ Loaded V2 database: 831 jobs
💾 DISK STATE: 831 jobs on disk
[2026-01-31T02:45:07.888Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=832
[2026-01-31T02:45:07.890Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:07.890Z] [BOT] 💾 AFTER MERGE: 832 jobs (merged disk + memory)
[2026-01-31T02:45:07.891Z] [BOT] ✅ No jobs to archive (all 832 jobs within 7-day window)
[2026-01-31T02:45:07.946Z] [BOT] 💾 Saved posted_jobs.json: 832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:09.447Z] [BOT] 📍 [ROUTING] "Associate Game Designer - Technical - Contingent" @ ORG_55030fed
[2026-01-31T02:45:09.448Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:09.689Z] [BOT] ✅ Posted message: Associate Game Designer - Technical - Contingent @ ORG_55030fed in #💻・tech-jobs
[2026-01-31T02:45:09.690Z] [BOT] ✅ Industry: Associate Game Designer - Technical - Contingent @ ORG_55030fed
[2026-01-31T02:45:09.690Z] [BOT] 💾 Added channel posting: Associate Game Designer - Technical - Contingent @ ORG_55030fed → category channel (1 total channels)
[2026-01-31T02:45:09.690Z] [BOT] 💾 BEFORE MERGE: 833 jobs in memory (cached)
[2026-01-31T02:45:09.705Z] [BOT] ✅ Loaded V2 database: 832 jobs
💾 DISK STATE: 832 jobs on disk
[2026-01-31T02:45:09.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=833
[2026-01-31T02:45:09.708Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 833 jobs (merged disk + memory)
[2026-01-31T02:45:09.708Z] [BOT] ✅ No jobs to archive (all 833 jobs within 7-day window)
[2026-01-31T02:45:09.759Z] [BOT] 💾 Saved posted_jobs.json: 833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:11.260Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant - ServiceNow" @ ORG_60d01372
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:11.513Z] [BOT] ✅ Posted message: Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #💻・tech-jobs
  ✅ Industry: Associate Technical Consultant - ServiceNow @ ORG_60d01372
[2026-01-31T02:45:11.513Z] [BOT] 💾 Added channel posting: Associate Technical Consultant - ServiceNow @ ORG_60d01372 → category channel (1 total channels)
[2026-01-31T02:45:11.513Z] [BOT] 💾 BEFORE MERGE: 834 jobs in memory (cached)
[2026-01-31T02:45:11.531Z] [BOT] ✅ Loaded V2 database: 833 jobs
💾 DISK STATE: 833 jobs on disk
[2026-01-31T02:45:11.531Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=834
[2026-01-31T02:45:11.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 834 jobs (merged disk + memory)
[2026-01-31T02:45:11.533Z] [BOT] ✅ No jobs to archive (all 834 jobs within 7-day window)
[2026-01-31T02:45:11.588Z] [BOT] 💾 Saved posted_jobs.json: 834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:13.373Z] [BOT] ✅ Posted message: Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #🏠・JID_ead674af
[2026-01-31T02:45:13.373Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T02:45:13.373Z] [BOT] 💾 Added channel posting: Associate Technical Consultant - ServiceNow @ ORG_60d01372 → location channel (2 total channels)
💾 BEFORE MERGE: 834 jobs in memory (cached)
[2026-01-31T02:45:13.389Z] [BOT] ✅ Loaded V2 database: 834 jobs
💾 DISK STATE: 834 jobs on disk
[2026-01-31T02:45:13.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=834
[2026-01-31T02:45:13.392Z] [BOT] 🔀 Deep merged: Associate Technical Consultant - ServiceNow @ ORG_60d01372 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 834 jobs (merged disk + memory)
[2026-01-31T02:45:13.392Z] [BOT] ✅ No jobs to archive (all 834 jobs within 7-day window)
[2026-01-31T02:45:13.444Z] [BOT] 💾 Saved posted_jobs.json: 834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:14.946Z] [BOT] 📍 [ROUTING] "Software Engineer Support Analyst Graduate" @ ORG_a5257743 Packard Enterprise
[2026-01-31T02:45:14.946Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:15.162Z] [BOT] ✅ Posted message: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
[2026-01-31T02:45:15.162Z] [BOT] ✅ Industry: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-31T02:45:15.163Z] [BOT] 💾 Added channel posting: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise → category channel (1 total channels)
💾 BEFORE MERGE: 835 jobs in memory (cached)
[2026-01-31T02:45:15.179Z] [BOT] ✅ Loaded V2 database: 834 jobs
💾 DISK STATE: 834 jobs on disk
[2026-01-31T02:45:15.179Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=835
[2026-01-31T02:45:15.181Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:15.181Z] [BOT] 💾 AFTER MERGE: 835 jobs (merged disk + memory)
[2026-01-31T02:45:15.182Z] [BOT] ✅ No jobs to archive (all 835 jobs within 7-day window)
[2026-01-31T02:45:15.248Z] [BOT] 💾 Saved posted_jobs.json: 835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:16.746Z] [BOT] 📍 [ROUTING] "Field Application Engineer – New College Graduate - Ncg" @ ORG_54360ad7
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T02:45:16.915Z] [BOT] ✅ Posted message: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 in #💻・tech-jobs
  ✅ Industry: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7
[2026-01-31T02:45:16.915Z] [BOT] 💾 Added channel posting: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 → category channel (1 total channels)
[2026-01-31T02:45:16.915Z] [BOT] 💾 BEFORE MERGE: 836 jobs in memory (cached)
[2026-01-31T02:45:16.931Z] [BOT] ✅ Loaded V2 database: 835 jobs
💾 DISK STATE: 835 jobs on disk
[2026-01-31T02:45:16.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=836
[2026-01-31T02:45:16.933Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:16.933Z] [BOT] 💾 AFTER MERGE: 836 jobs (merged disk + memory)
[2026-01-31T02:45:16.933Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2026-01-31T02:45:16.987Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:18.799Z] [BOT] ✅ Posted message: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 in #🗽・JID_98d4f0de
[2026-01-31T02:45:18.800Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T02:45:18.800Z] [BOT] 💾 Added channel posting: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 → location channel (2 total channels)
💾 BEFORE MERGE: 836 jobs in memory (cached)
[2026-01-31T02:45:18.815Z] [BOT] ✅ Loaded V2 database: 836 jobs
💾 DISK STATE: 836 jobs on disk
[2026-01-31T02:45:18.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=836
[2026-01-31T02:45:18.817Z] [BOT] 🔀 Deep merged: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 (disk: 1 channels → merged: 2 channels)
[2026-01-31T02:45:18.817Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 836 jobs (merged disk + memory)
[2026-01-31T02:45:18.818Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2026-01-31T02:45:18.868Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:23.370Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T02:45:23.372Z] [BOT] 📍 [ROUTING] "Contract Labeling Associate" @ ORG_b558a7ba
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T02:45:23.695Z] [BOT] ✅ Posted message: Contract Labeling Associate @ ORG_b558a7ba in #🤖・ai-jobs
  ✅ Industry: Contract Labeling Associate @ ORG_b558a7ba
[2026-01-31T02:45:23.696Z] [BOT] 💾 Added channel posting: Contract Labeling Associate @ ORG_b558a7ba → category channel (1 total channels)
[2026-01-31T02:45:23.696Z] [BOT] 💾 BEFORE MERGE: 837 jobs in memory (cached)
[2026-01-31T02:45:23.712Z] [BOT] ✅ Loaded V2 database: 836 jobs
💾 DISK STATE: 836 jobs on disk
[2026-01-31T02:45:23.712Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=837
[2026-01-31T02:45:23.714Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:23.714Z] [BOT] 💾 AFTER MERGE: 837 jobs (merged disk + memory)
[2026-01-31T02:45:23.715Z] [BOT] ✅ No jobs to archive (all 837 jobs within 7-day window)
[2026-01-31T02:45:23.771Z] [BOT] 💾 Saved posted_jobs.json: 837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:25.268Z] [BOT] 📍 [ROUTING] "Analyst - Government & Public Services - AI & Data Engineering" @ ORG_f3f5cc98
   Category: AI (matched: "machine learning")
[2026-01-31T02:45:25.269Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T02:45:25.553Z] [BOT] ✅ Posted message: Analyst - Government & Public Services - AI & Data Engineering @ ORG_f3f5cc98 in #🤖・ai-jobs
  ✅ Industry: Analyst - Government & Public Services - AI & Data Engineering @ ORG_f3f5cc98
[2026-01-31T02:45:25.554Z] [BOT] 💾 Added channel posting: Analyst - Government & Public Services - AI & Data Engineering @ ORG_f3f5cc98 → category channel (1 total channels)
[2026-01-31T02:45:25.554Z] [BOT] 💾 BEFORE MERGE: 838 jobs in memory (cached)
[2026-01-31T02:45:25.570Z] [BOT] ✅ Loaded V2 database: 837 jobs
💾 DISK STATE: 837 jobs on disk
[2026-01-31T02:45:25.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=838
[2026-01-31T02:45:25.572Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 838 jobs (merged disk + memory)
[2026-01-31T02:45:25.573Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2026-01-31T02:45:25.632Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:30.132Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T02:45:30.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1980d06d-univ_caree..." not found, but found as SHA256 "2971c9e9c62140e9"
⏭️  Skipping duplicate: JID_1980d06d-univ_careers-JID_ff8193b5-engineer_r50546-2 (posted within 7 days)
[2026-01-31T02:45:30.134Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2a5278c..." not found, but found as SHA256 "0d9bdbe090e0225f"
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
[2026-01-31T02:45:30.134Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bc3f43d9..." not found, but found as SHA256 "71ebecc97738a9a9"
⏭️  Skipping duplicate: JID_7ab69f24 (posted within 7 days)
[2026-01-31T02:45:30.134Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7dbfd774..." not found, but found as SHA256 "9fe4ae73555c6bad"
⏭️  Skipping duplicate: JID_960dfdf4-technology_r2521966 (posted within 7 days)
[2026-01-31T02:45:30.134Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_baea470b-en_us-careers-jobdeta..." not found, but found as SHA256 "867ca712c54d046a"
⏭️  Skipping duplicate: JID_baea470b-en_us-JID_8e09c83c (posted within 7 days)
[2026-01-31T02:45:30.134Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "11ea62eaa75f23e9"
[2026-01-31T02:45:30.135Z] [BOT] ⏭️  Skipping duplicate: JID_b1904fca-_r-48456 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_26cfdecf..." not found, but found as SHA256 "180d635026e868b1"
⏭️  Skipping duplicate: JID_dcc70510 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_01008d1c..." not found, but found as SHA256 "d030af9ec83298aa"
⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003905 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_87337af0-..." not found, but found as SHA256 "c7d2e232b6c07863"
[2026-01-31T02:45:30.136Z] [BOT] ⏭️  Skipping duplicate: JID_b11f9b73-graduate_1198373-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dbc3451c..." not found, but found as SHA256 "70c09c7f2bc59ee8"
⏭️  Skipping duplicate: JID_2179aa27 (posted within 7 days)
[2026-01-31T02:45:30.247Z] [BOT] ✅ Loaded pending queue: 2954 total (2108 pending, 47 enriched, 799 posted)
[2026-01-31T02:45:30.430Z] [BOT] ✅ Saved pending queue: 2954 total (2108 pending, 37 enriched, 809 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T02:45:30.513Z] [BOT] 📂 Loaded 10890 existing routing entries
[2026-01-31T02:45:30.638Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10900
[2026-01-31T02:45:30.638Z] [BOT] Timestamp: 2026-01-31T02:45:30.594Z
[2026-01-31T02:45:30.639Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 29
[2026-01-31T02:45:30.639Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 17
[2026-01-31T02:45:30.639Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T02:45:30.639Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-31T02:45:30.639Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T02:45:30.639Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T02:45:30.639Z] [BOT] 💾 BEFORE MERGE: 838 jobs in memory (cached)
[2026-01-31T02:45:30.674Z] [BOT] ✅ Loaded V2 database: 838 jobs
💾 DISK STATE: 838 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=838
[2026-01-31T02:45:30.674Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T02:45:30.674Z] [BOT] 💾 AFTER MERGE: 838 jobs (merged disk + memory)
[2026-01-31T02:45:30.675Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2026-01-31T02:45:30.726Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T02:45:30.727Z] [BOT] ✅ Database saved successfully
[2026-01-31T02:45:32.753Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3186) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*