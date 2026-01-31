# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T05:53:48.666Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T05:53:11.263Z] ========================================
[2026-01-31T05:53:11.265Z] Discord Bot Execution Log
[2026-01-31T05:53:11.265Z] Environment: GitHub Actions
[2026-01-31T05:53:11.265Z] Node Version: v20.20.0
[2026-01-31T05:53:11.265Z] ========================================
[2026-01-31T05:53:11.265Z] Environment Variables Check:
[2026-01-31T05:53:11.265Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T05:53:11.265Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.265Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T05:53:11.265Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T05:53:11.266Z] 
Multi-Channel Configuration:
[2026-01-31T05:53:11.266Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T05:53:11.266Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T05:53:11.266Z] 
Data Files Check:
[2026-01-31T05:53:11.267Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T05:53:11.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5720703 bytes)
[2026-01-31T05:53:11.297Z] 
========================================
[2026-01-31T05:53:11.297Z] Starting Enhanced Discord Bot...
[2026-01-31T05:53:11.297Z] ========================================
[2026-01-31T05:53:11.855Z] [BOT] ✅ Loaded V2 database: 878 jobs
[2026-01-31T05:53:12.336Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T05:53:12.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T05:53:12.337Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T05:53:12.451Z] [BOT] ✅ Loaded pending queue: 2959 total (2060 pending, 50 enriched, 849 posted)
[2026-01-31T05:53:12.452Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:53:12.453Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T05:53:12.453Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T05:53:12.453Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:53:12.453Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T05:53:12.453Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T05:53:12.454Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T05:53:12.454Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T05:53:12.454Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T05:53:12.454Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T05:53:12.454Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T05:53:12.455Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T05:53:12.455Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T05:53:12.455Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T05:53:12.455Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T05:53:12.455Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T05:53:12.455Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T05:53:12.456Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T05:53:12.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T05:53:12.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T05:53:12.456Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T05:53:12.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T05:53:12.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T05:53:12.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T05:53:12.465Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T05:53:12.465Z] [BOT] 🚫 Skipping blacklisted job: Senior Backend Developer at Gallup
[2026-01-31T05:53:12.572Z] [BOT] ✅ Loaded pending queue: 2959 total (2060 pending, 50 enriched, 849 posted)
[2026-01-31T05:53:12.760Z] [BOT] ✅ Saved pending queue: 2958 total (2060 pending, 49 enriched, 849 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T05:53:12.761Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T05:53:12.761Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T05:53:12.762Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T05:53:12.762Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-31T05:53:12.762Z] [BOT] - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T05:53:12.766Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T05:53:12.767Z] [BOT] 📍 [ROUTING] "Software Engineer Associate" @ ORG_be6c1969 Financial Services
[2026-01-31T05:53:12.767Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:12.785Z] [BOT ERROR] (node:3235) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T05:53:13.041Z] [BOT] ✅ Posted message: Software Engineer Associate @ ORG_be6c1969 Financial Services in #💻・tech-jobs
[2026-01-31T05:53:13.041Z] [BOT] ✅ Industry: Software Engineer Associate @ ORG_be6c1969 Financial Services
[2026-01-31T05:53:13.042Z] [BOT] 💾 Added channel posting: Software Engineer Associate @ ORG_be6c1969 Financial Services → category channel (1 total channels)
[2026-01-31T05:53:13.042Z] [BOT] 💾 BEFORE MERGE: 879 jobs in memory (cached)
[2026-01-31T05:53:13.063Z] [BOT] ✅ Loaded V2 database: 878 jobs
💾 DISK STATE: 878 jobs on disk
[2026-01-31T05:53:13.063Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=879
[2026-01-31T05:53:13.065Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:13.065Z] [BOT] 💾 AFTER MERGE: 879 jobs (merged disk + memory)
[2026-01-31T05:53:13.066Z] [BOT] ✅ No jobs to archive (all 879 jobs within 7-day window)
[2026-01-31T05:53:13.126Z] [BOT] 💾 Saved posted_jobs.json: 879 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:14.629Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English - Florida" @ ORG_f3ae3598
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:14.870Z] [BOT] ✅ Posted message: Search Quality Rater - English - Florida @ ORG_f3ae3598 in #💻・tech-jobs
[2026-01-31T05:53:14.871Z] [BOT] ✅ Industry: Search Quality Rater - English - Florida @ ORG_f3ae3598
[2026-01-31T05:53:14.871Z] [BOT] 💾 Added channel posting: Search Quality Rater - English - Florida @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T05:53:14.871Z] [BOT] 💾 BEFORE MERGE: 880 jobs in memory (cached)
[2026-01-31T05:53:14.889Z] [BOT] ✅ Loaded V2 database: 879 jobs
💾 DISK STATE: 879 jobs on disk
[2026-01-31T05:53:14.890Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=880
[2026-01-31T05:53:14.892Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:14.892Z] [BOT] 💾 AFTER MERGE: 880 jobs (merged disk + memory)
[2026-01-31T05:53:14.892Z] [BOT] ✅ No jobs to archive (all 880 jobs within 7-day window)
[2026-01-31T05:53:14.950Z] [BOT] 💾 Saved posted_jobs.json: 880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:16.634Z] [BOT] ✅ Posted message: Search Quality Rater - English - Florida @ ORG_f3ae3598 in #🏠・JID_ead674af
[2026-01-31T05:53:16.634Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T05:53:16.635Z] [BOT] 💾 Added channel posting: Search Quality Rater - English - Florida @ ORG_f3ae3598 → location channel (2 total channels)
[2026-01-31T05:53:16.635Z] [BOT] 💾 BEFORE MERGE: 880 jobs in memory (cached)
[2026-01-31T05:53:16.652Z] [BOT] ✅ Loaded V2 database: 880 jobs
💾 DISK STATE: 880 jobs on disk
[2026-01-31T05:53:16.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=880
[2026-01-31T05:53:16.655Z] [BOT] 🔀 Deep merged: Search Quality Rater - English - Florida @ ORG_f3ae3598 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T05:53:16.655Z] [BOT] 💾 AFTER MERGE: 880 jobs (merged disk + memory)
[2026-01-31T05:53:16.656Z] [BOT] ✅ No jobs to archive (all 880 jobs within 7-day window)
[2026-01-31T05:53:16.713Z] [BOT] 💾 Saved posted_jobs.json: 880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:18.215Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_f3ae3598
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:18.465Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_f3ae3598 in #💻・tech-jobs
[2026-01-31T05:53:18.465Z] [BOT] ✅ Industry: Search Quality Rater @ ORG_f3ae3598
[2026-01-31T05:53:18.465Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T05:53:18.465Z] [BOT] 💾 BEFORE MERGE: 881 jobs in memory (cached)
[2026-01-31T05:53:18.484Z] [BOT] ✅ Loaded V2 database: 880 jobs
💾 DISK STATE: 880 jobs on disk
[2026-01-31T05:53:18.484Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=881
[2026-01-31T05:53:18.486Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:18.486Z] [BOT] 💾 AFTER MERGE: 881 jobs (merged disk + memory)
[2026-01-31T05:53:18.486Z] [BOT] ✅ No jobs to archive (all 881 jobs within 7-day window)
[2026-01-31T05:53:18.544Z] [BOT] 💾 Saved posted_jobs.json: 881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:20.045Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2026-01-31T05:53:20.046Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:20.237Z] [BOT] ✅ Posted message: Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2026-01-31T05:53:20.238Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2026-01-31T05:53:20.238Z] [BOT] 💾 Added channel posting: Early Career Software Engineer @ ORG_2b147ca6 Health → category channel (1 total channels)
[2026-01-31T05:53:20.238Z] [BOT] 💾 BEFORE MERGE: 882 jobs in memory (cached)
[2026-01-31T05:53:20.254Z] [BOT] ✅ Loaded V2 database: 881 jobs
💾 DISK STATE: 881 jobs on disk
[2026-01-31T05:53:20.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=882
[2026-01-31T05:53:20.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:20.257Z] [BOT] 💾 AFTER MERGE: 882 jobs (merged disk + memory)
[2026-01-31T05:53:20.258Z] [BOT] ✅ No jobs to archive (all 882 jobs within 7-day window)
[2026-01-31T05:53:20.312Z] [BOT] 💾 Saved posted_jobs.json: 882 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:21.814Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – College Grad 2026" @ ORG_06fec48a Health
[2026-01-31T05:53:21.814Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:22.053Z] [BOT] ✅ Posted message: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health
[2026-01-31T05:53:22.054Z] [BOT] 💾 Added channel posting: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health → category channel (1 total channels)
[2026-01-31T05:53:22.054Z] [BOT] 💾 BEFORE MERGE: 883 jobs in memory (cached)
[2026-01-31T05:53:22.071Z] [BOT] ✅ Loaded V2 database: 882 jobs
💾 DISK STATE: 882 jobs on disk
[2026-01-31T05:53:22.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=883
[2026-01-31T05:53:22.074Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:22.074Z] [BOT] 💾 AFTER MERGE: 883 jobs (merged disk + memory)
[2026-01-31T05:53:22.074Z] [BOT] ✅ No jobs to archive (all 883 jobs within 7-day window)
[2026-01-31T05:53:22.136Z] [BOT] 💾 Saved posted_jobs.json: 883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:23.636Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – College Grad" @ ORG_33a7935d
[2026-01-31T05:53:23.637Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:53:23.790Z] [BOT] ✅ Posted message: Software Engineering AMTS – College Grad @ ORG_33a7935d in #💻・tech-jobs
[2026-01-31T05:53:23.790Z] [BOT] ✅ Industry: Software Engineering AMTS – College Grad @ ORG_33a7935d
[2026-01-31T05:53:23.791Z] [BOT] 💾 Added channel posting: Software Engineering AMTS – College Grad @ ORG_33a7935d → category channel (1 total channels)
💾 BEFORE MERGE: 884 jobs in memory (cached)
[2026-01-31T05:53:23.808Z] [BOT] ✅ Loaded V2 database: 883 jobs
💾 DISK STATE: 883 jobs on disk
[2026-01-31T05:53:23.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=884
[2026-01-31T05:53:23.810Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:23.811Z] [BOT] 💾 AFTER MERGE: 884 jobs (merged disk + memory)
[2026-01-31T05:53:23.811Z] [BOT] ✅ No jobs to archive (all 884 jobs within 7-day window)
[2026-01-31T05:53:23.865Z] [BOT] 💾 Saved posted_jobs.json: 884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:28.367Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T05:53:28.368Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model Graduate - Seed-LLM" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-31T05:53:28.368Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T05:53:28.588Z] [BOT] ✅ Posted message: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c
[2026-01-31T05:53:28.588Z] [BOT] 💾 Added channel posting: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T05:53:28.589Z] [BOT] 💾 BEFORE MERGE: 885 jobs in memory (cached)
[2026-01-31T05:53:28.606Z] [BOT] ✅ Loaded V2 database: 884 jobs
💾 DISK STATE: 884 jobs on disk
[2026-01-31T05:53:28.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=885
[2026-01-31T05:53:28.609Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:28.609Z] [BOT] 💾 AFTER MERGE: 885 jobs (merged disk + memory)
[2026-01-31T05:53:28.609Z] [BOT] ✅ No jobs to archive (all 885 jobs within 7-day window)
[2026-01-31T05:53:28.671Z] [BOT] 💾 Saved posted_jobs.json: 885 active jobs
[2026-01-31T05:53:28.674Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:30.172Z] [BOT] 📍 [ROUTING] "Accounting Intern" @ coinbase
[2026-01-31T05:53:30.172Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T05:53:30.711Z] [BOT] ✅ Posted message: Accounting Intern @ coinbase in #🤖・ai-jobs
[2026-01-31T05:53:30.711Z] [BOT] ✅ Industry: Accounting Intern @ coinbase
[2026-01-31T05:53:30.711Z] [BOT] 💾 Added channel posting: Accounting Intern @ coinbase → category channel (1 total channels)
[2026-01-31T05:53:30.711Z] [BOT] 💾 BEFORE MERGE: 886 jobs in memory (cached)
[2026-01-31T05:53:30.729Z] [BOT] ✅ Loaded V2 database: 885 jobs
💾 DISK STATE: 885 jobs on disk
[2026-01-31T05:53:30.729Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=886
[2026-01-31T05:53:30.731Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:30.731Z] [BOT] 💾 AFTER MERGE: 886 jobs (merged disk + memory)
[2026-01-31T05:53:30.732Z] [BOT] ✅ No jobs to archive (all 886 jobs within 7-day window)
[2026-01-31T05:53:30.785Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:32.463Z] [BOT] ✅ Posted message: Accounting Intern @ coinbase in #🗽・JID_98d4f0de
[2026-01-31T05:53:32.464Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T05:53:32.464Z] [BOT] 💾 Added channel posting: Accounting Intern @ coinbase → location channel (2 total channels)
[2026-01-31T05:53:32.464Z] [BOT] 💾 BEFORE MERGE: 886 jobs in memory (cached)
[2026-01-31T05:53:32.481Z] [BOT] ✅ Loaded V2 database: 886 jobs
💾 DISK STATE: 886 jobs on disk
[2026-01-31T05:53:32.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=886
[2026-01-31T05:53:32.483Z] [BOT] 🔀 Deep merged: Accounting Intern @ coinbase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T05:53:32.483Z] [BOT] 💾 AFTER MERGE: 886 jobs (merged disk + memory)
[2026-01-31T05:53:32.484Z] [BOT] ✅ No jobs to archive (all 886 jobs within 7-day window)
[2026-01-31T05:53:32.540Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:37.041Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-31T05:53:37.042Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
[2026-01-31T05:53:37.042Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T05:53:37.246Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #💰・finance-jobs
[2026-01-31T05:53:37.247Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-31T05:53:37.247Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T05:53:37.248Z] [BOT] 💾 BEFORE MERGE: 887 jobs in memory (cached)
[2026-01-31T05:53:37.264Z] [BOT] ✅ Loaded V2 database: 886 jobs
💾 DISK STATE: 886 jobs on disk
[2026-01-31T05:53:37.264Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=887
[2026-01-31T05:53:37.266Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:37.267Z] [BOT] 💾 AFTER MERGE: 887 jobs (merged disk + memory)
[2026-01-31T05:53:37.267Z] [BOT] ✅ No jobs to archive (all 887 jobs within 7-day window)
[2026-01-31T05:53:37.326Z] [BOT] 💾 Saved posted_jobs.json: 887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:38.828Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-31T05:53:38.828Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T05:53:39.039Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-31T05:53:39.040Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T05:53:39.040Z] [BOT] 💾 BEFORE MERGE: 888 jobs in memory (cached)
[2026-01-31T05:53:39.057Z] [BOT] ✅ Loaded V2 database: 887 jobs
💾 DISK STATE: 887 jobs on disk
[2026-01-31T05:53:39.057Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=888
[2026-01-31T05:53:39.059Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 888 jobs (merged disk + memory)
[2026-01-31T05:53:39.060Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-31T05:53:39.122Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:40.784Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T05:53:40.785Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → location channel (2 total channels)
[2026-01-31T05:53:40.785Z] [BOT] 💾 BEFORE MERGE: 888 jobs in memory (cached)
[2026-01-31T05:53:40.802Z] [BOT] ✅ Loaded V2 database: 888 jobs
💾 DISK STATE: 888 jobs on disk
[2026-01-31T05:53:40.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=888
[2026-01-31T05:53:40.804Z] [BOT] 🔀 Deep merged: Associate Technical Consultant @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 888 jobs (merged disk + memory)
[2026-01-31T05:53:40.805Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-31T05:53:40.861Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:45.362Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T05:53:45.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f83bf1ed..." not found, but found as SHA256 "826ba9c118c720e1"
[2026-01-31T05:53:45.364Z] [BOT] ⏭️  Skipping duplicate: JID_2a91c054-associate_r200033-1 (posted within 7 days)
[2026-01-31T05:53:45.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb35850b..." not found, but found as SHA256 "3ac8d2fdc59353b8"
⏭️  Skipping duplicate: JID_ea891334 (posted within 7 days)
[2026-01-31T05:53:45.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa77eb40..." not found, but found as SHA256 "260d163fd17cb9f7"
⏭️  Skipping duplicate: JID_59128a5e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e81646e9..." not found, but found as SHA256 "ec1d517051ed6f0a"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_6deadf27-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_027996fc..." not found, but found as SHA256 "ba5cc96531fffe2b"
⏭️  Skipping duplicate: JID_027996fc (posted within 7 days)
[2026-01-31T05:53:45.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b2d91260..." not found, but found as SHA256 "2ffd60db5d353b4c"
⏭️  Skipping duplicate: JID_b2d91260 (posted within 7 days)
[2026-01-31T05:53:45.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d3ba017..." not found, but found as SHA256 "2419f2f2cf46a801"
⏭️  Skipping duplicate: JID_1a00b3ad (posted within 7 days)
[2026-01-31T05:53:45.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4987302..." not found, but found as SHA256 "de8b478cc6b3c225"
[2026-01-31T05:53:45.366Z] [BOT] ⏭️  Skipping duplicate: JID_b9af3f81 (posted within 7 days)
[2026-01-31T05:53:45.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_24c71a05..." not found, but found as SHA256 "cc943f152da303ef"
[2026-01-31T05:53:45.366Z] [BOT] ⏭️  Skipping duplicate: JID_7689d913 (posted within 7 days)
[2026-01-31T05:53:45.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb01922c..." not found, but found as SHA256 "9bb459002e6c6696"
[2026-01-31T05:53:45.366Z] [BOT] ⏭️  Skipping duplicate: JID_edadfe67-external_career_site-JID_ba958958-_jr322433-1 (posted within 7 days)
[2026-01-31T05:53:45.469Z] [BOT] ✅ Loaded pending queue: 2958 total (2060 pending, 49 enriched, 849 posted)
[2026-01-31T05:53:45.663Z] [BOT] ✅ Saved pending queue: 2958 total (2060 pending, 39 enriched, 859 posted)
[2026-01-31T05:53:45.663Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T05:53:45.749Z] [BOT] 📂 Loaded 10940 existing routing entries
[2026-01-31T05:53:45.873Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T05:53:45.873Z] [BOT] Total entries: 10950
   Timestamp: 2026-01-31T05:53:45.828Z
[2026-01-31T05:53:45.874Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T05:53:45.874Z] [BOT] Total attempts: 28
   Successful: 13
   Failed: 0
   Skipped: 15
[2026-01-31T05:53:45.874Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T05:53:45.874Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-31T05:53:45.875Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💰・finance-jobs: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 888 jobs in memory (cached)
[2026-01-31T05:53:45.893Z] [BOT] ✅ Loaded V2 database: 888 jobs
💾 DISK STATE: 888 jobs on disk
[2026-01-31T05:53:45.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=888
[2026-01-31T05:53:45.895Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:53:45.895Z] [BOT] 💾 AFTER MERGE: 888 jobs (merged disk + memory)
[2026-01-31T05:53:45.896Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-31T05:53:45.956Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:53:45.956Z] [BOT] ✅ Database saved successfully
[2026-01-31T05:53:47.992Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3235) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*