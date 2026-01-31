# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T01:01:23.851Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T01:00:45.478Z] ========================================
[2026-01-31T01:00:45.479Z] Discord Bot Execution Log
[2026-01-31T01:00:45.480Z] Environment: GitHub Actions
[2026-01-31T01:00:45.480Z] Node Version: v20.20.0
[2026-01-31T01:00:45.480Z] ========================================
[2026-01-31T01:00:45.480Z] Environment Variables Check:
[2026-01-31T01:00:45.480Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T01:00:45.480Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.480Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T01:00:45.480Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T01:00:45.480Z] 
Multi-Channel Configuration:
[2026-01-31T01:00:45.480Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T01:00:45.481Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T01:00:45.481Z] 
Data Files Check:
[2026-01-31T01:00:45.482Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T01:00:45.510Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5344494 bytes)
[2026-01-31T01:00:45.510Z] 
========================================
[2026-01-31T01:00:45.511Z] Starting Enhanced Discord Bot...
[2026-01-31T01:00:45.511Z] ========================================
[2026-01-31T01:00:46.077Z] [BOT] ✅ Loaded V2 database: 808 jobs
[2026-01-31T01:00:46.764Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T01:00:46.765Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T01:00:46.765Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T01:00:46.883Z] [BOT] ✅ Loaded pending queue: 2952 total (2123 pending, 50 enriched, 779 posted)
[2026-01-31T01:00:46.884Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T01:00:46.885Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T01:00:46.885Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T01:00:46.885Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T01:00:46.885Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T01:00:46.885Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T01:00:46.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T01:00:46.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T01:00:46.886Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T01:00:46.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T01:00:46.886Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T01:00:46.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T01:00:46.887Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T01:00:46.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T01:00:46.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T01:00:46.888Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T01:00:46.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T01:00:46.888Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T01:00:46.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T01:00:46.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T01:00:46.888Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T01:00:46.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T01:00:46.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T01:00:46.889Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T01:00:46.895Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T01:00:46.895Z] [BOT] 🚫 Skipping blacklisted job: Strategic Program Manager, Contingent Workforce at figma
[2026-01-31T01:00:47.003Z] [BOT] ✅ Loaded pending queue: 2952 total (2123 pending, 50 enriched, 779 posted)
[2026-01-31T01:00:47.193Z] [BOT] ✅ Saved pending queue: 2951 total (2123 pending, 49 enriched, 779 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T01:00:47.193Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T01:00:47.193Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T01:00:47.194Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T01:00:47.194Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T01:00:47.198Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T01:00:47.199Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T01:00:47.199Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:47.216Z] [BOT ERROR] (node:3262) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T01:00:47.421Z] [BOT] ✅ Posted message: Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-31T01:00:47.421Z] [BOT] ✅ Industry: Java Developer @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T01:00:47.422Z] [BOT] 💾 Added channel posting: Java Developer @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-31T01:00:47.422Z] [BOT] 💾 BEFORE MERGE: 809 jobs in memory (cached)
[2026-01-31T01:00:47.438Z] [BOT] ✅ Loaded V2 database: 808 jobs
💾 DISK STATE: 808 jobs on disk
[2026-01-31T01:00:47.439Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=809
[2026-01-31T01:00:47.441Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:00:47.441Z] [BOT] 💾 AFTER MERGE: 809 jobs (merged disk + memory)
[2026-01-31T01:00:47.442Z] [BOT] ✅ No jobs to archive (all 809 jobs within 7-day window)
[2026-01-31T01:00:47.502Z] [BOT] 💾 Saved posted_jobs.json: 809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:00:49.004Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws - Node" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:49.377Z] [BOT] ✅ Posted message: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-31T01:00:49.377Z] [BOT] ✅ Industry: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies
[2026-01-31T01:00:49.378Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-31T01:00:49.378Z] [BOT] 💾 BEFORE MERGE: 810 jobs in memory (cached)
[2026-01-31T01:00:49.394Z] [BOT] ✅ Loaded V2 database: 809 jobs
💾 DISK STATE: 809 jobs on disk
[2026-01-31T01:00:49.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=810
[2026-01-31T01:00:49.396Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:00:49.396Z] [BOT] 💾 AFTER MERGE: 810 jobs (merged disk + memory)
[2026-01-31T01:00:49.397Z] [BOT] ✅ No jobs to archive (all 810 jobs within 7-day window)
[2026-01-31T01:00:49.450Z] [BOT] 💾 Saved posted_jobs.json: 810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:00:50.952Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - .Net - Node.js','React" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-31T01:00:50.952Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:51.122Z] [BOT] ✅ Posted message: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-31T01:00:51.122Z] [BOT] ✅ Industry: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies
[2026-01-31T01:00:51.123Z] [BOT] 💾 Added channel posting: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-31T01:00:51.123Z] [BOT] 💾 BEFORE MERGE: 811 jobs in memory (cached)
[2026-01-31T01:00:51.139Z] [BOT] ✅ Loaded V2 database: 810 jobs
💾 DISK STATE: 810 jobs on disk
[2026-01-31T01:00:51.139Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=811
[2026-01-31T01:00:51.141Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:00:51.141Z] [BOT] 💾 AFTER MERGE: 811 jobs (merged disk + memory)
[2026-01-31T01:00:51.142Z] [BOT] ✅ No jobs to archive (all 811 jobs within 7-day window)
[2026-01-31T01:00:51.196Z] [BOT] 💾 Saved posted_jobs.json: 811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:00:52.698Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician - Engineering Techs - Physics Techs" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:52.998Z] [BOT] ✅ Posted message: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
[2026-01-31T01:00:52.998Z] [BOT] ✅ Industry: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company
[2026-01-31T01:00:52.998Z] [BOT] 💾 Added channel posting: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
💾 BEFORE MERGE: 812 jobs in memory (cached)
[2026-01-31T01:00:53.014Z] [BOT] ✅ Loaded V2 database: 811 jobs
💾 DISK STATE: 811 jobs on disk
[2026-01-31T01:00:53.015Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=812
[2026-01-31T01:00:53.017Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 812 jobs (merged disk + memory)
[2026-01-31T01:00:53.017Z] [BOT] ✅ No jobs to archive (all 812 jobs within 7-day window)
[2026-01-31T01:00:53.071Z] [BOT] 💾 Saved posted_jobs.json: 812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:00:54.573Z] [BOT] 📍 [ROUTING] "Research Assistant - Csd - School of Computer Science" @ ORG_15a5b314 Mellon University
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:55.041Z] [BOT] ✅ Posted message: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・tech-jobs
[2026-01-31T01:00:55.041Z] [BOT] ✅ Industry: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-31T01:00:55.041Z] [BOT] 💾 Added channel posting: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-31T01:00:55.041Z] [BOT] 💾 BEFORE MERGE: 813 jobs in memory (cached)
[2026-01-31T01:00:55.065Z] [BOT] ✅ Loaded V2 database: 812 jobs
💾 DISK STATE: 812 jobs on disk
[2026-01-31T01:00:55.065Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=813
[2026-01-31T01:00:55.068Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:00:55.068Z] [BOT] 💾 AFTER MERGE: 813 jobs (merged disk + memory)
[2026-01-31T01:00:55.068Z] [BOT] ✅ No jobs to archive (all 813 jobs within 7-day window)
[2026-01-31T01:00:55.130Z] [BOT] 💾 Saved posted_jobs.json: 813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:00:56.632Z] [BOT] 📍 [ROUTING] "Therapist-IOP/PHP" @ ORG_6a97f77a Behavioral Health
[2026-01-31T01:00:56.632Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:00:56.802Z] [BOT] ✅ Posted message: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health in #💻・tech-jobs
  ✅ Industry: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health
[2026-01-31T01:00:56.802Z] [BOT] 💾 Added channel posting: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health → category channel (1 total channels)
[2026-01-31T01:00:56.802Z] [BOT] 💾 BEFORE MERGE: 814 jobs in memory (cached)
[2026-01-31T01:00:56.825Z] [BOT] ✅ Loaded V2 database: 813 jobs
💾 DISK STATE: 813 jobs on disk
[2026-01-31T01:00:56.825Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=814
[2026-01-31T01:00:56.827Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:00:56.828Z] [BOT] 💾 AFTER MERGE: 814 jobs (merged disk + memory)
[2026-01-31T01:00:56.828Z] [BOT] ✅ No jobs to archive (all 814 jobs within 7-day window)
[2026-01-31T01:00:56.885Z] [BOT] 💾 Saved posted_jobs.json: 814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:01.389Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T01:01:01.390Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Aws - Python" @ ORG_b344d80e Travelers Companies
[2026-01-31T01:01:01.390Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T01:01:01.623Z] [BOT] ✅ Posted message: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies in #🤖・ai-jobs
[2026-01-31T01:01:01.623Z] [BOT] ✅ Industry: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies
[2026-01-31T01:01:01.624Z] [BOT] 💾 Added channel posting: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
💾 BEFORE MERGE: 815 jobs in memory (cached)
[2026-01-31T01:01:01.640Z] [BOT] ✅ Loaded V2 database: 814 jobs
💾 DISK STATE: 814 jobs on disk
[2026-01-31T01:01:01.640Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=815
[2026-01-31T01:01:01.642Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 815 jobs (merged disk + memory)
[2026-01-31T01:01:01.643Z] [BOT] ✅ No jobs to archive (all 815 jobs within 7-day window)
[2026-01-31T01:01:01.694Z] [BOT] 💾 Saved posted_jobs.json: 815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:03.197Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Direct Issuance" @ ORG_a10ae009
[2026-01-31T01:01:03.197Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T01:01:03.523Z] [BOT] ✅ Posted message: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 - Direct Issuance @ ORG_a10ae009
[2026-01-31T01:01:03.524Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 → category channel (1 total channels)
[2026-01-31T01:01:03.524Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-31T01:01:03.541Z] [BOT] ✅ Loaded V2 database: 815 jobs
💾 DISK STATE: 815 jobs on disk
[2026-01-31T01:01:03.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-31T01:01:03.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:01:03.543Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-31T01:01:03.544Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-31T01:01:03.596Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:08.097Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T01:01:08.098Z] [BOT] 📍 [ROUTING] "Data Analyst - Social Media & Video" @ ORG_d3baafac
[2026-01-31T01:01:08.098Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T01:01:08.386Z] [BOT] ✅ Posted message: Data Analyst - Social Media & Video @ ORG_d3baafac in #📊・JID_fb739488
[2026-01-31T01:01:08.386Z] [BOT] ✅ Industry: Data Analyst - Social Media & Video @ ORG_d3baafac
[2026-01-31T01:01:08.387Z] [BOT] 💾 Added channel posting: Data Analyst - Social Media & Video @ ORG_d3baafac → category channel (1 total channels)
[2026-01-31T01:01:08.387Z] [BOT] 💾 BEFORE MERGE: 817 jobs in memory (cached)
[2026-01-31T01:01:08.403Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-31T01:01:08.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=817
[2026-01-31T01:01:08.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 817 jobs (merged disk + memory)
[2026-01-31T01:01:08.406Z] [BOT] ✅ No jobs to archive (all 817 jobs within 7-day window)
[2026-01-31T01:01:08.458Z] [BOT] 💾 Saved posted_jobs.json: 817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:10.447Z] [BOT] ✅ Posted message: Data Analyst - Social Media & Video @ ORG_d3baafac in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T01:01:10.448Z] [BOT] 💾 Added channel posting: Data Analyst - Social Media & Video @ ORG_d3baafac → location channel (2 total channels)
[2026-01-31T01:01:10.448Z] [BOT] 💾 BEFORE MERGE: 817 jobs in memory (cached)
[2026-01-31T01:01:10.464Z] [BOT] ✅ Loaded V2 database: 817 jobs
💾 DISK STATE: 817 jobs on disk
[2026-01-31T01:01:10.464Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=817
[2026-01-31T01:01:10.466Z] [BOT] 🔀 Deep merged: Data Analyst - Social Media & Video @ ORG_d3baafac (disk: 1 channels → merged: 2 channels)
[2026-01-31T01:01:10.466Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 817 jobs (merged disk + memory)
[2026-01-31T01:01:10.467Z] [BOT] ✅ No jobs to archive (all 817 jobs within 7-day window)
[2026-01-31T01:01:10.520Z] [BOT] 💾 Saved posted_jobs.json: 817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:15.023Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T01:01:15.024Z] [BOT] 📍 [ROUTING] "FAST Configuration Analyst" @ ORG_da05efaa
[2026-01-31T01:01:15.024Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T01:01:15.286Z] [BOT] ✅ Posted message: FAST Configuration Analyst @ ORG_da05efaa in #💰・finance-jobs
  ✅ Industry: FAST Configuration Analyst @ ORG_da05efaa
[2026-01-31T01:01:15.286Z] [BOT] 💾 Added channel posting: FAST Configuration Analyst @ ORG_da05efaa → category channel (1 total channels)
💾 BEFORE MERGE: 818 jobs in memory (cached)
[2026-01-31T01:01:15.302Z] [BOT] ✅ Loaded V2 database: 817 jobs
💾 DISK STATE: 817 jobs on disk
[2026-01-31T01:01:15.302Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=818
[2026-01-31T01:01:15.304Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:01:15.304Z] [BOT] 💾 AFTER MERGE: 818 jobs (merged disk + memory)
[2026-01-31T01:01:15.305Z] [BOT] ✅ No jobs to archive (all 818 jobs within 7-day window)
[2026-01-31T01:01:15.358Z] [BOT] 💾 Saved posted_jobs.json: 818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:19.859Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T01:01:19.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "1e69eece846f4075"
[2026-01-31T01:01:19.860Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
[2026-01-31T01:01:19.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "f42e9a22c93c432d"
⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
[2026-01-31T01:01:19.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "6358bae06d3eef53"
[2026-01-31T01:01:19.860Z] [BOT] ⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
[2026-01-31T01:01:19.861Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "739ad14df0250abf"
[2026-01-31T01:01:19.861Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
[2026-01-31T01:01:19.862Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_454e7738..." not found, but found as SHA256 "8cd27bffa60d13d3"
⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0a687ddd..." not found, but found as SHA256 "91dc47e805122982"
⏭️  Skipping duplicate: JID_df77182b-cx_1-job-2025652 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a93a4a10..." not found, but found as SHA256 "21f1912e5a3def73"
⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b1fef101..." not found, but found as SHA256 "84bd5903322da3ee"
[2026-01-31T01:01:19.862Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_49ddc7b1..." not found, but found as SHA256 "6ae145b12aabdcab"
⏭️  Skipping duplicate: JID_b76486ed-php_r5976 (posted within 7 days)
[2026-01-31T01:01:19.862Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1ad0413e..." not found, but found as SHA256 "76e2b6a6ebb8b7c7"
[2026-01-31T01:01:19.862Z] [BOT] ⏭️  Skipping duplicate: JID_c4ab4833 (posted within 7 days)
[2026-01-31T01:01:19.974Z] [BOT] ✅ Loaded pending queue: 2951 total (2123 pending, 49 enriched, 779 posted)
[2026-01-31T01:01:20.157Z] [BOT] ✅ Saved pending queue: 2951 total (2123 pending, 39 enriched, 789 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T01:01:20.157Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T01:01:20.242Z] [BOT] 📂 Loaded 10870 existing routing entries
[2026-01-31T01:01:20.393Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T01:01:20.393Z] [BOT] New entries: 10
   Total entries: 10880
   Timestamp: 2026-01-31T01:01:20.349Z
[2026-01-31T01:01:20.395Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 26
[2026-01-31T01:01:20.395Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 15
[2026-01-31T01:01:20.395Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T01:01:20.395Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 2 posts
[2026-01-31T01:01:20.395Z] [BOT] 3. #📊・JID_fb739488: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-31T01:01:20.395Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 818 jobs in memory (cached)
[2026-01-31T01:01:20.414Z] [BOT] ✅ Loaded V2 database: 818 jobs
💾 DISK STATE: 818 jobs on disk
[2026-01-31T01:01:20.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=818
[2026-01-31T01:01:20.416Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:01:20.416Z] [BOT] 💾 AFTER MERGE: 818 jobs (merged disk + memory)
[2026-01-31T01:01:20.417Z] [BOT] ✅ No jobs to archive (all 818 jobs within 7-day window)
[2026-01-31T01:01:20.469Z] [BOT] 💾 Saved posted_jobs.json: 818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:01:20.469Z] [BOT] ✅ Database saved successfully
[2026-01-31T01:01:22.502Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3262) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*