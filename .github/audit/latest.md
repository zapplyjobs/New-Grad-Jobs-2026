# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T07:33:55.704Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T07:33:22.179Z] ========================================
[2026-01-31T07:33:22.181Z] Discord Bot Execution Log
[2026-01-31T07:33:22.181Z] Environment: GitHub Actions
[2026-01-31T07:33:22.181Z] Node Version: v20.20.0
[2026-01-31T07:33:22.182Z] ========================================
[2026-01-31T07:33:22.182Z] Environment Variables Check:
[2026-01-31T07:33:22.182Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T07:33:22.182Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.182Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T07:33:22.182Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T07:33:22.182Z] 
Multi-Channel Configuration:
[2026-01-31T07:33:22.182Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.182Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.182Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.182Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T07:33:22.183Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T07:33:22.183Z] 
Data Files Check:
[2026-01-31T07:33:22.184Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T07:33:22.214Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5989056 bytes)
[2026-01-31T07:33:22.214Z] 
========================================
[2026-01-31T07:33:22.214Z] Starting Enhanced Discord Bot...
[2026-01-31T07:33:22.214Z] ========================================
[2026-01-31T07:33:22.757Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-31T07:33:23.263Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T07:33:23.263Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T07:33:23.263Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T07:33:23.395Z] [BOT] ✅ Loaded pending queue: 2958 total (2009 pending, 50 enriched, 899 posted)
[2026-01-31T07:33:23.396Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:33:23.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T07:33:23.397Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:33:23.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T07:33:23.398Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T07:33:23.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T07:33:23.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T07:33:23.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T07:33:23.399Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T07:33:23.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T07:33:23.402Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T07:33:23.407Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T07:33:23.407Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, AI at airtable
[2026-01-31T07:33:23.407Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Omni Analysis & Q&A at airtable
🚫 Skipping blacklisted job: Scaled Customer Success Manager at airtable
🚫 Skipping blacklisted job: Senior Enterprise Marketing Manager at airtable
🚫 Skipping blacklisted job: Senior Manager, Finance Systems at airtable
🚫 Skipping blacklisted job: Senior Manager, People Systems at airtable
[2026-01-31T07:33:23.514Z] [BOT] ✅ Loaded pending queue: 2958 total (2009 pending, 50 enriched, 899 posted)
[2026-01-31T07:33:23.694Z] [BOT] ✅ Saved pending queue: 2952 total (2009 pending, 44 enriched, 899 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-31T07:33:23.695Z] [BOT] 📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-31T07:33:23.695Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-31T07:33:23.696Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-31T07:33:23.696Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T07:33:23.696Z] [BOT] - Helix Data Creator @ Figure: spartanburg, la
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T07:33:23.698Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T07:33:23.700Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-31T07:33:23.700Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:23.717Z] [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T07:33:23.932Z] [BOT] ✅ Posted message: Android Sales Expert @ 2020 Companies in #💻・tech-jobs
[2026-01-31T07:33:23.932Z] [BOT] ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-31T07:33:23.933Z] [BOT] 💾 Added channel posting: Android Sales Expert @ 2020 Companies → category channel (1 total channels)
[2026-01-31T07:33:23.933Z] [BOT] 💾 BEFORE MERGE: 929 jobs in memory (cached)
[2026-01-31T07:33:23.953Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-31T07:33:23.954Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=929
[2026-01-31T07:33:23.956Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:23.956Z] [BOT] 💾 AFTER MERGE: 929 jobs (merged disk + memory)
[2026-01-31T07:33:23.957Z] [BOT] ✅ No jobs to archive (all 929 jobs within 7-day window)
[2026-01-31T07:33:24.021Z] [BOT] 💾 Saved posted_jobs.json: 929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:25.524Z] [BOT] 📍 [ROUTING] "Software Developer, Network Software Associate" @ ORG_9ee5b96f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:25.796Z] [BOT] ✅ Posted message: Software Developer, Network Software Associate @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Developer, Network Software Associate @ ORG_9ee5b96f
[2026-01-31T07:33:25.797Z] [BOT] 💾 Added channel posting: Software Developer, Network Software Associate @ ORG_9ee5b96f → category channel (1 total channels)
[2026-01-31T07:33:25.797Z] [BOT] 💾 BEFORE MERGE: 930 jobs in memory (cached)
[2026-01-31T07:33:25.815Z] [BOT] ✅ Loaded V2 database: 929 jobs
💾 DISK STATE: 929 jobs on disk
[2026-01-31T07:33:25.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=930
[2026-01-31T07:33:25.818Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 930 jobs (merged disk + memory)
[2026-01-31T07:33:25.818Z] [BOT] ✅ No jobs to archive (all 930 jobs within 7-day window)
[2026-01-31T07:33:25.878Z] [BOT] 💾 Saved posted_jobs.json: 930 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:27.379Z] [BOT] 📍 [ROUTING] "Junior Product Software Engineer" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:27.809Z] [BOT] ✅ Posted message: Junior Product Software Engineer @ ORG_d6d2009d in #💻・tech-jobs
[2026-01-31T07:33:27.809Z] [BOT] ✅ Industry: Junior Product Software Engineer @ ORG_d6d2009d
[2026-01-31T07:33:27.810Z] [BOT] 💾 Added channel posting: Junior Product Software Engineer @ ORG_d6d2009d → category channel (1 total channels)
[2026-01-31T07:33:27.810Z] [BOT] 💾 BEFORE MERGE: 931 jobs in memory (cached)
[2026-01-31T07:33:27.829Z] [BOT] ✅ Loaded V2 database: 930 jobs
💾 DISK STATE: 930 jobs on disk
[2026-01-31T07:33:27.829Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=931
[2026-01-31T07:33:27.831Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:27.831Z] [BOT] 💾 AFTER MERGE: 931 jobs (merged disk + memory)
[2026-01-31T07:33:27.832Z] [BOT] ✅ No jobs to archive (all 931 jobs within 7-day window)
[2026-01-31T07:33:27.891Z] [BOT] 💾 Saved posted_jobs.json: 931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:29.395Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_a0299599
   Category: TECH (matched: "software")
[2026-01-31T07:33:29.395Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:29.573Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_a0299599 in #💻・tech-jobs
[2026-01-31T07:33:29.573Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_a0299599
[2026-01-31T07:33:29.574Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_a0299599 → category channel (1 total channels)
[2026-01-31T07:33:29.574Z] [BOT] 💾 BEFORE MERGE: 932 jobs in memory (cached)
[2026-01-31T07:33:29.592Z] [BOT] ✅ Loaded V2 database: 931 jobs
💾 DISK STATE: 931 jobs on disk
[2026-01-31T07:33:29.593Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=932
[2026-01-31T07:33:29.596Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:29.596Z] [BOT] 💾 AFTER MERGE: 932 jobs (merged disk + memory)
[2026-01-31T07:33:29.597Z] [BOT] ✅ No jobs to archive (all 932 jobs within 7-day window)
[2026-01-31T07:33:29.658Z] [BOT] 💾 Saved posted_jobs.json: 932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:31.159Z] [BOT] 📍 [ROUTING] "Clinical Analytics Analyst - IS Analytic Health" @ ORG_0f4848d3ing Health
   Category: TECH (matched: "analytics")
[2026-01-31T07:33:31.159Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:31.428Z] [BOT] ✅ Posted message: Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health in #💻・tech-jobs
  ✅ Industry: Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health
[2026-01-31T07:33:31.429Z] [BOT] 💾 Added channel posting: Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health → category channel (1 total channels)
[2026-01-31T07:33:31.429Z] [BOT] 💾 BEFORE MERGE: 933 jobs in memory (cached)
[2026-01-31T07:33:31.449Z] [BOT] ✅ Loaded V2 database: 932 jobs
💾 DISK STATE: 932 jobs on disk
[2026-01-31T07:33:31.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=933
[2026-01-31T07:33:31.451Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:31.451Z] [BOT] 💾 AFTER MERGE: 933 jobs (merged disk + memory)
[2026-01-31T07:33:31.452Z] [BOT] ✅ No jobs to archive (all 933 jobs within 7-day window)
[2026-01-31T07:33:31.519Z] [BOT] 💾 Saved posted_jobs.json: 933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:33.021Z] [BOT] 📍 [ROUTING] "Platform Engineer: General Compute" @ supabase
[2026-01-31T07:33:33.022Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:33.206Z] [BOT] ✅ Posted message: Platform Engineer: General Compute @ supabase in #💻・tech-jobs
[2026-01-31T07:33:33.206Z] [BOT] ✅ Industry: Platform Engineer: General Compute @ supabase
[2026-01-31T07:33:33.206Z] [BOT] 💾 Added channel posting: Platform Engineer: General Compute @ supabase → category channel (1 total channels)
[2026-01-31T07:33:33.206Z] [BOT] 💾 BEFORE MERGE: 934 jobs in memory (cached)
[2026-01-31T07:33:33.224Z] [BOT] ✅ Loaded V2 database: 933 jobs
💾 DISK STATE: 933 jobs on disk
[2026-01-31T07:33:33.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=934
[2026-01-31T07:33:33.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:33.227Z] [BOT] 💾 AFTER MERGE: 934 jobs (merged disk + memory)
[2026-01-31T07:33:33.227Z] [BOT] ✅ No jobs to archive (all 934 jobs within 7-day window)
[2026-01-31T07:33:33.283Z] [BOT] 💾 Saved posted_jobs.json: 934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:34.786Z] [BOT] 📍 [ROUTING] "Support Engineer - Entry-Level" @ ORG_ed077f3d Asset
[2026-01-31T07:33:34.786Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:33:34.967Z] [BOT] ✅ Posted message: Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #💻・tech-jobs
[2026-01-31T07:33:34.968Z] [BOT] ✅ Industry: Support Engineer - Entry-Level @ ORG_ed077f3d Asset
[2026-01-31T07:33:34.968Z] [BOT] 💾 Added channel posting: Support Engineer - Entry-Level @ ORG_ed077f3d Asset → category channel (1 total channels)
💾 BEFORE MERGE: 935 jobs in memory (cached)
[2026-01-31T07:33:34.986Z] [BOT] ✅ Loaded V2 database: 934 jobs
💾 DISK STATE: 934 jobs on disk
[2026-01-31T07:33:34.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=935
[2026-01-31T07:33:34.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:34.988Z] [BOT] 💾 AFTER MERGE: 935 jobs (merged disk + memory)
[2026-01-31T07:33:34.989Z] [BOT] ✅ No jobs to archive (all 935 jobs within 7-day window)
[2026-01-31T07:33:35.046Z] [BOT] 💾 Saved posted_jobs.json: 935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:36.812Z] [BOT] ✅ Posted message: Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T07:33:36.812Z] [BOT] 💾 Added channel posting: Support Engineer - Entry-Level @ ORG_ed077f3d Asset → location channel (2 total channels)
[2026-01-31T07:33:36.812Z] [BOT] 💾 BEFORE MERGE: 935 jobs in memory (cached)
[2026-01-31T07:33:36.830Z] [BOT] ✅ Loaded V2 database: 935 jobs
💾 DISK STATE: 935 jobs on disk
[2026-01-31T07:33:36.830Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=935
[2026-01-31T07:33:36.832Z] [BOT] 🔀 Deep merged: Support Engineer - Entry-Level @ ORG_ed077f3d Asset (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T07:33:36.833Z] [BOT] 💾 AFTER MERGE: 935 jobs (merged disk + memory)
[2026-01-31T07:33:36.833Z] [BOT] ✅ No jobs to archive (all 935 jobs within 7-day window)
[2026-01-31T07:33:36.889Z] [BOT] 💾 Saved posted_jobs.json: 935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:41.392Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T07:33:41.392Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
   Category: AI (matched: "machine learning")
[2026-01-31T07:33:41.393Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:33:41.658Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
  ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2026-01-31T07:33:41.659Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_44ebd2cb → category channel (1 total channels)
💾 BEFORE MERGE: 936 jobs in memory (cached)
[2026-01-31T07:33:41.679Z] [BOT] ✅ Loaded V2 database: 935 jobs
💾 DISK STATE: 935 jobs on disk
[2026-01-31T07:33:41.680Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=936
[2026-01-31T07:33:41.682Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:41.682Z] [BOT] 💾 AFTER MERGE: 936 jobs (merged disk + memory)
[2026-01-31T07:33:41.683Z] [BOT] ✅ No jobs to archive (all 936 jobs within 7-day window)
[2026-01-31T07:33:41.746Z] [BOT] 💾 Saved posted_jobs.json: 936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:43.250Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_7a9c8205
   Category: AI (matched: "machine learning")
[2026-01-31T07:33:43.250Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T07:33:43.553Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_7a9c8205 in #🤖・ai-jobs
  ✅ Industry: Junior Data Engineer @ ORG_7a9c8205
[2026-01-31T07:33:43.554Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_7a9c8205 → category channel (1 total channels)
[2026-01-31T07:33:43.554Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory (cached)
[2026-01-31T07:33:43.571Z] [BOT] ✅ Loaded V2 database: 936 jobs
💾 DISK STATE: 936 jobs on disk
[2026-01-31T07:33:43.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=937
[2026-01-31T07:33:43.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:43.574Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-31T07:33:43.575Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-31T07:33:43.639Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-31T07:33:43.641Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:45.343Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_7a9c8205 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T07:33:45.343Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_7a9c8205 → location channel (2 total channels)
[2026-01-31T07:33:45.344Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory (cached)
[2026-01-31T07:33:45.361Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-31T07:33:45.362Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=937
[2026-01-31T07:33:45.364Z] [BOT] 🔀 Deep merged: Junior Data Engineer @ ORG_7a9c8205 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-31T07:33:45.364Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-31T07:33:45.426Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:46.927Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_180876eb
[2026-01-31T07:33:46.928Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:33:47.091Z] [BOT] ✅ Posted message: Software Engineer @ ORG_180876eb in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_180876eb
[2026-01-31T07:33:47.091Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_180876eb → category channel (1 total channels)
[2026-01-31T07:33:47.092Z] [BOT] 💾 BEFORE MERGE: 938 jobs in memory (cached)
[2026-01-31T07:33:47.109Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-31T07:33:47.109Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=938
[2026-01-31T07:33:47.111Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 938 jobs (merged disk + memory)
[2026-01-31T07:33:47.112Z] [BOT] ✅ No jobs to archive (all 938 jobs within 7-day window)
[2026-01-31T07:33:47.167Z] [BOT] 💾 Saved posted_jobs.json: 938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:51.669Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T07:33:51.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_71e5b25e..." not found, but found as SHA256 "d3e00c70864e6201"
[2026-01-31T07:33:51.671Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
[2026-01-31T07:33:51.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eb63af55..." not found, but found as SHA256 "31e7ae2d27d4489d"
⏭️  Skipping duplicate: JID_7b79f1e0 (posted within 7 days)
[2026-01-31T07:33:51.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e42fe1e0..." not found, but found as SHA256 "1eeae0783732b3ff"
[2026-01-31T07:33:51.671Z] [BOT] ⏭️  Skipping duplicate: JID_672289ac (posted within 7 days)
[2026-01-31T07:33:51.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6e856800..." not found, but found as SHA256 "7786cb998eef33d1"
⏭️  Skipping duplicate: JID_f3e2390a (posted within 7 days)
[2026-01-31T07:33:51.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4f4f2aff..." not found, but found as SHA256 "d9d10a9202b09206"
⏭️  Skipping duplicate: JID_0b7b19a5 (posted within 7 days)
[2026-01-31T07:33:51.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_553e6679..." not found, but found as SHA256 "00384d38a70be243"
[2026-01-31T07:33:51.672Z] [BOT] ⏭️  Skipping duplicate: JID_404c57a4 (posted within 7 days)
[2026-01-31T07:33:51.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba7c169d..." not found, but found as SHA256 "ecfa4e9580aeb44d"
[2026-01-31T07:33:51.672Z] [BOT] ⏭️  Skipping duplicate: JID_6ff14097 (posted within 7 days)
[2026-01-31T07:33:51.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ca23c61-..." not found, but found as SHA256 "afd01fa14f8ce066"
⏭️  Skipping duplicate: JID_9d3fd4cc (posted within 7 days)
[2026-01-31T07:33:51.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_438103c6-..." not found, but found as SHA256 "84460b60b8fe2798"
[2026-01-31T07:33:51.673Z] [BOT] ⏭️  Skipping duplicate: JID_f0befb2a (posted within 7 days)
[2026-01-31T07:33:51.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39e50ca8..." not found, but found as SHA256 "33b113cda7c7d96a"
⏭️  Skipping duplicate: JID_39e50ca8 (posted within 7 days)
[2026-01-31T07:33:51.783Z] [BOT] ✅ Loaded pending queue: 2952 total (2009 pending, 44 enriched, 899 posted)
[2026-01-31T07:33:51.960Z] [BOT] ✅ Saved pending queue: 2952 total (2009 pending, 34 enriched, 909 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T07:33:51.960Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T07:33:52.044Z] [BOT] 📂 Loaded 10990 existing routing entries
[2026-01-31T07:33:52.186Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T07:33:52.187Z] [BOT] New entries: 10
   Total entries: 11000
   Timestamp: 2026-01-31T07:33:52.126Z
[2026-01-31T07:33:52.187Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T07:33:52.187Z] [BOT] Total attempts: 32
   Successful: 12
   Failed: 0
   Skipped: 20
[2026-01-31T07:33:52.188Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T07:33:52.189Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 938 jobs in memory (cached)
[2026-01-31T07:33:52.206Z] [BOT] ✅ Loaded V2 database: 938 jobs
💾 DISK STATE: 938 jobs on disk
[2026-01-31T07:33:52.206Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=938
[2026-01-31T07:33:52.208Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:33:52.208Z] [BOT] 💾 AFTER MERGE: 938 jobs (merged disk + memory)
[2026-01-31T07:33:52.209Z] [BOT] ✅ No jobs to archive (all 938 jobs within 7-day window)
[2026-01-31T07:33:52.267Z] [BOT] 💾 Saved posted_jobs.json: 938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:33:52.267Z] [BOT] ✅ Database saved successfully
[2026-01-31T07:33:54.299Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*