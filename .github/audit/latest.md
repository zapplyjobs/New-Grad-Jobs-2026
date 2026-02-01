# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T07:52:01.402Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T07:51:15.209Z] ========================================
[2026-02-01T07:51:15.212Z] Discord Bot Execution Log
[2026-02-01T07:51:15.212Z] Environment: GitHub Actions
[2026-02-01T07:51:15.212Z] Node Version: v20.20.0
[2026-02-01T07:51:15.212Z] ========================================
[2026-02-01T07:51:15.212Z] Environment Variables Check:
[2026-02-01T07:51:15.212Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T07:51:15.212Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T07:51:15.212Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T07:51:15.212Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T07:51:15.212Z] 
Multi-Channel Configuration:
[2026-02-01T07:51:15.212Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T07:51:15.213Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T07:51:15.213Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:51:15.213Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T07:51:15.213Z] 
Data Files Check:
[2026-02-01T07:51:15.214Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61636 bytes)
[2026-02-01T07:51:15.262Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9174666 bytes)
[2026-02-01T07:51:15.262Z] 
========================================
[2026-02-01T07:51:15.262Z] Starting Enhanced Discord Bot...
[2026-02-01T07:51:15.262Z] ========================================
[2026-02-01T07:51:15.837Z] [BOT] ✅ Loaded V2 database: 1667 jobs
[2026-02-01T07:51:16.290Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T07:51:16.290Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T07:51:16.290Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T07:51:16.412Z] [BOT] ✅ Loaded pending queue: 2944 total (1237 pending, 50 enriched, 1657 posted)
[2026-02-01T07:51:16.412Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T07:51:16.412Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T07:51:16.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T07:51:16.414Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T07:51:16.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T07:51:16.414Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T07:51:16.414Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T07:51:16.415Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T07:51:16.415Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T07:51:16.415Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T07:51:16.416Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T07:51:16.416Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T07:51:16.416Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T07:51:16.416Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T07:51:16.416Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T07:51:16.417Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T07:51:16.417Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T07:51:16.430Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T07:51:16.430Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T07:51:16.431Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T07:51:16.432Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T07:51:16.432Z] [BOT] (5 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
   - Data Analyst @ Gartner: irving, stamford
   - Mission Operations Engineer @ nominal: new york, austin
[2026-02-01T07:51:16.432Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T07:51:16.435Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T07:51:16.436Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
[2026-02-01T07:51:16.436Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:16.454Z] [BOT ERROR] (node:2730) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T07:51:16.807Z] [BOT] ✅ Posted message: Enterprise Account Executive @ nominal in #💻・tech-jobs
[2026-02-01T07:51:16.807Z] [BOT] ✅ Industry: Enterprise Account Executive @ nominal
[2026-02-01T07:51:16.808Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ nominal → category channel (1 total channels)
[2026-02-01T07:51:16.808Z] [BOT] 💾 BEFORE MERGE: 1668 jobs in memory (cached)
[2026-02-01T07:51:16.849Z] [BOT] ✅ Loaded V2 database: 1667 jobs
💾 DISK STATE: 1667 jobs on disk
[2026-02-01T07:51:16.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1668
[2026-02-01T07:51:16.853Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:16.853Z] [BOT] 💾 AFTER MERGE: 1668 jobs (merged disk + memory)
[2026-02-01T07:51:16.855Z] [BOT] ✅ No jobs to archive (all 1668 jobs within 7-day window)
[2026-02-01T07:51:16.966Z] [BOT] 💾 Saved posted_jobs.json: 1668 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:18.469Z] [BOT] 📍 [ROUTING] "Macy's Tech Early Careers - Software Engineer" @ Macy's
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:18.648Z] [BOT] ✅ Posted message: Macy's Tech Early Careers - Software Engineer @ Macy's in #💻・tech-jobs
[2026-02-01T07:51:18.648Z] [BOT] ✅ Industry: Macy's Tech Early Careers - Software Engineer @ Macy's
[2026-02-01T07:51:18.649Z] [BOT] 💾 Added channel posting: Macy's Tech Early Careers - Software Engineer @ Macy's → category channel (1 total channels)
[2026-02-01T07:51:18.649Z] [BOT] 💾 BEFORE MERGE: 1669 jobs in memory (cached)
[2026-02-01T07:51:18.683Z] [BOT] ✅ Loaded V2 database: 1668 jobs
[2026-02-01T07:51:18.683Z] [BOT] 💾 DISK STATE: 1668 jobs on disk
[2026-02-01T07:51:18.684Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1669
[2026-02-01T07:51:18.687Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:18.687Z] [BOT] 💾 AFTER MERGE: 1669 jobs (merged disk + memory)
[2026-02-01T07:51:18.688Z] [BOT] ✅ No jobs to archive (all 1669 jobs within 7-day window)
[2026-02-01T07:51:18.782Z] [BOT] 💾 Saved posted_jobs.json: 1669 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:20.581Z] [BOT] ✅ Posted message: Macy's Tech Early Careers - Software Engineer @ Macy's in #📍・JID_6daed763
[2026-02-01T07:51:20.581Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T07:51:20.581Z] [BOT] 💾 Added channel posting: Macy's Tech Early Careers - Software Engineer @ Macy's → location channel (2 total channels)
[2026-02-01T07:51:20.581Z] [BOT] 💾 BEFORE MERGE: 1669 jobs in memory (cached)
[2026-02-01T07:51:20.614Z] [BOT] ✅ Loaded V2 database: 1669 jobs
💾 DISK STATE: 1669 jobs on disk
[2026-02-01T07:51:20.614Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1669
[2026-02-01T07:51:20.618Z] [BOT] 🔀 Deep merged: Macy's Tech Early Careers - Software Engineer @ Macy's (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:20.618Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1669 jobs (merged disk + memory)
[2026-02-01T07:51:20.619Z] [BOT] ✅ No jobs to archive (all 1669 jobs within 7-day window)
[2026-02-01T07:51:20.717Z] [BOT] 💾 Saved posted_jobs.json: 1669 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:22.219Z] [BOT] 📍 [ROUTING] "Product Support Engineer" @ nominal
[2026-02-01T07:51:22.219Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:22.490Z] [BOT] ✅ Posted message: Product Support Engineer @ nominal in #💻・tech-jobs
[2026-02-01T07:51:22.490Z] [BOT] ✅ Industry: Product Support Engineer @ nominal
[2026-02-01T07:51:22.491Z] [BOT] 💾 Added channel posting: Product Support Engineer @ nominal → category channel (1 total channels)
[2026-02-01T07:51:22.491Z] [BOT] 💾 BEFORE MERGE: 1670 jobs in memory (cached)
[2026-02-01T07:51:22.528Z] [BOT] ✅ Loaded V2 database: 1669 jobs
💾 DISK STATE: 1669 jobs on disk
[2026-02-01T07:51:22.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1670
[2026-02-01T07:51:22.532Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:22.533Z] [BOT] 💾 AFTER MERGE: 1670 jobs (merged disk + memory)
[2026-02-01T07:51:22.533Z] [BOT] ✅ No jobs to archive (all 1670 jobs within 7-day window)
[2026-02-01T07:51:22.645Z] [BOT] 💾 Saved posted_jobs.json: 1670 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:24.284Z] [BOT] ✅ Posted message: Product Support Engineer @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T07:51:24.285Z] [BOT] 💾 Added channel posting: Product Support Engineer @ nominal → location channel (2 total channels)
[2026-02-01T07:51:24.285Z] [BOT] 💾 BEFORE MERGE: 1670 jobs in memory (cached)
[2026-02-01T07:51:24.316Z] [BOT] ✅ Loaded V2 database: 1670 jobs
💾 DISK STATE: 1670 jobs on disk
[2026-02-01T07:51:24.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1670
[2026-02-01T07:51:24.319Z] [BOT] 🔀 Deep merged: Product Support Engineer @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:51:24.319Z] [BOT] 💾 AFTER MERGE: 1670 jobs (merged disk + memory)
[2026-02-01T07:51:24.320Z] [BOT] ✅ No jobs to archive (all 1670 jobs within 7-day window)
[2026-02-01T07:51:24.405Z] [BOT] 💾 Saved posted_jobs.json: 1670 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:25.907Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:26.245Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-02-01T07:51:26.245Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → category channel (1 total channels)
[2026-02-01T07:51:26.246Z] [BOT] 💾 BEFORE MERGE: 1671 jobs in memory (cached)
[2026-02-01T07:51:26.278Z] [BOT] ✅ Loaded V2 database: 1670 jobs
💾 DISK STATE: 1670 jobs on disk
[2026-02-01T07:51:26.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1671
[2026-02-01T07:51:26.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:26.281Z] [BOT] 💾 AFTER MERGE: 1671 jobs (merged disk + memory)
[2026-02-01T07:51:26.282Z] [BOT] ✅ No jobs to archive (all 1671 jobs within 7-day window)
[2026-02-01T07:51:26.372Z] [BOT] 💾 Saved posted_jobs.json: 1671 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:28.151Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T07:51:28.152Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → location channel (2 total channels)
[2026-02-01T07:51:28.152Z] [BOT] 💾 BEFORE MERGE: 1671 jobs in memory (cached)
[2026-02-01T07:51:28.186Z] [BOT] ✅ Loaded V2 database: 1671 jobs
💾 DISK STATE: 1671 jobs on disk
[2026-02-01T07:51:28.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1671
[2026-02-01T07:51:28.190Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_7b717950 (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:28.190Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1671 jobs (merged disk + memory)
[2026-02-01T07:51:28.191Z] [BOT] ✅ No jobs to archive (all 1671 jobs within 7-day window)
[2026-02-01T07:51:28.283Z] [BOT] 💾 Saved posted_jobs.json: 1671 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:29.785Z] [BOT] 📍 [ROUTING] "Sentinel Gatekeeper Associate Software Engineer/Software Engineer" @ ORG_f3f2248d Grumman
[2026-02-01T07:51:29.785Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:30.071Z] [BOT] ✅ Posted message: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-02-01T07:51:30.071Z] [BOT] ✅ Industry: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman
[2026-02-01T07:51:30.072Z] [BOT] 💾 Added channel posting: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-02-01T07:51:30.072Z] [BOT] 💾 BEFORE MERGE: 1672 jobs in memory (cached)
[2026-02-01T07:51:30.105Z] [BOT] ✅ Loaded V2 database: 1671 jobs
💾 DISK STATE: 1671 jobs on disk
[2026-02-01T07:51:30.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1672
[2026-02-01T07:51:30.108Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:30.108Z] [BOT] 💾 AFTER MERGE: 1672 jobs (merged disk + memory)
[2026-02-01T07:51:30.109Z] [BOT] ✅ No jobs to archive (all 1672 jobs within 7-day window)
[2026-02-01T07:51:30.202Z] [BOT] 💾 Saved posted_jobs.json: 1672 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:31.859Z] [BOT] ✅ Posted message: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T07:51:31.859Z] [BOT] 💾 Added channel posting: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-02-01T07:51:31.859Z] [BOT] 💾 BEFORE MERGE: 1672 jobs in memory (cached)
[2026-02-01T07:51:31.894Z] [BOT] ✅ Loaded V2 database: 1672 jobs
💾 DISK STATE: 1672 jobs on disk
[2026-02-01T07:51:31.894Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1672
[2026-02-01T07:51:31.897Z] [BOT] 🔀 Deep merged: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:31.897Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1672 jobs (merged disk + memory)
[2026-02-01T07:51:31.898Z] [BOT] ✅ No jobs to archive (all 1672 jobs within 7-day window)
[2026-02-01T07:51:31.993Z] [BOT] 💾 Saved posted_jobs.json: 1672 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:33.495Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_facb5814ingo
[2026-02-01T07:51:33.495Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:33.658Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_facb5814ingo in #💻・tech-jobs
[2026-02-01T07:51:33.658Z] [BOT] ✅ Industry: AI Research Engineer @ ORG_facb5814ingo
[2026-02-01T07:51:33.659Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_facb5814ingo → category channel (1 total channels)
[2026-02-01T07:51:33.659Z] [BOT] 💾 BEFORE MERGE: 1673 jobs in memory (cached)
[2026-02-01T07:51:33.692Z] [BOT] ✅ Loaded V2 database: 1672 jobs
💾 DISK STATE: 1672 jobs on disk
[2026-02-01T07:51:33.692Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1673
[2026-02-01T07:51:33.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:33.695Z] [BOT] 💾 AFTER MERGE: 1673 jobs (merged disk + memory)
[2026-02-01T07:51:33.696Z] [BOT] ✅ No jobs to archive (all 1673 jobs within 7-day window)
[2026-02-01T07:51:33.787Z] [BOT] 💾 Saved posted_jobs.json: 1673 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:35.441Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_facb5814ingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T07:51:35.442Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_facb5814ingo → location channel (2 total channels)
[2026-02-01T07:51:35.442Z] [BOT] 💾 BEFORE MERGE: 1673 jobs in memory (cached)
[2026-02-01T07:51:35.477Z] [BOT] ✅ Loaded V2 database: 1673 jobs
💾 DISK STATE: 1673 jobs on disk
[2026-02-01T07:51:35.478Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1673
[2026-02-01T07:51:35.481Z] [BOT] 🔀 Deep merged: AI Research Engineer @ ORG_facb5814ingo (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:35.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1673 jobs (merged disk + memory)
[2026-02-01T07:51:35.482Z] [BOT] ✅ No jobs to archive (all 1673 jobs within 7-day window)
[2026-02-01T07:51:35.594Z] [BOT] 💾 Saved posted_jobs.json: 1673 active jobs
[2026-02-01T07:51:35.594Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:37.097Z] [BOT] 📍 [ROUTING] "Early-Career Subsurface Modeler" @ ORG_77d789fe Consultants
[2026-02-01T07:51:37.097Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:51:37.367Z] [BOT] ✅ Posted message: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants in #💻・tech-jobs
[2026-02-01T07:51:37.367Z] [BOT] ✅ Industry: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants
[2026-02-01T07:51:37.368Z] [BOT] 💾 Added channel posting: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants → category channel (1 total channels)
[2026-02-01T07:51:37.368Z] [BOT] 💾 BEFORE MERGE: 1674 jobs in memory (cached)
[2026-02-01T07:51:37.399Z] [BOT] ✅ Loaded V2 database: 1673 jobs
💾 DISK STATE: 1673 jobs on disk
[2026-02-01T07:51:37.399Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1674
[2026-02-01T07:51:37.402Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1674 jobs (merged disk + memory)
[2026-02-01T07:51:37.403Z] [BOT] ✅ No jobs to archive (all 1674 jobs within 7-day window)
[2026-02-01T07:51:37.487Z] [BOT] 💾 Saved posted_jobs.json: 1674 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:39.154Z] [BOT] ✅ Posted message: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T07:51:39.155Z] [BOT] 💾 Added channel posting: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants → location channel (2 total channels)
[2026-02-01T07:51:39.155Z] [BOT] 💾 BEFORE MERGE: 1674 jobs in memory (cached)
[2026-02-01T07:51:39.187Z] [BOT] ✅ Loaded V2 database: 1674 jobs
💾 DISK STATE: 1674 jobs on disk
[2026-02-01T07:51:39.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1674
[2026-02-01T07:51:39.190Z] [BOT] 🔀 Deep merged: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:39.190Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1674 jobs (merged disk + memory)
[2026-02-01T07:51:39.191Z] [BOT] ✅ No jobs to archive (all 1674 jobs within 7-day window)
[2026-02-01T07:51:39.280Z] [BOT] 💾 Saved posted_jobs.json: 1674 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:43.782Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T07:51:43.783Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_0760d36d
[2026-02-01T07:51:43.783Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T07:51:44.047Z] [BOT] ✅ Posted message: Data Analyst @ ORG_0760d36d in #🤖・ai-jobs
[2026-02-01T07:51:44.047Z] [BOT] ✅ Industry: Data Analyst @ ORG_0760d36d
[2026-02-01T07:51:44.048Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_0760d36d → category channel (1 total channels)
[2026-02-01T07:51:44.048Z] [BOT] 💾 BEFORE MERGE: 1675 jobs in memory (cached)
[2026-02-01T07:51:44.082Z] [BOT] ✅ Loaded V2 database: 1674 jobs
💾 DISK STATE: 1674 jobs on disk
[2026-02-01T07:51:44.082Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1675
[2026-02-01T07:51:44.085Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:44.085Z] [BOT] 💾 AFTER MERGE: 1675 jobs (merged disk + memory)
[2026-02-01T07:51:44.086Z] [BOT] ✅ No jobs to archive (all 1675 jobs within 7-day window)
[2026-02-01T07:51:44.178Z] [BOT] 💾 Saved posted_jobs.json: 1675 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:45.836Z] [BOT] ✅ Posted message: Data Analyst @ ORG_0760d36d in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T07:51:45.837Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_0760d36d → location channel (2 total channels)
[2026-02-01T07:51:45.837Z] [BOT] 💾 BEFORE MERGE: 1675 jobs in memory (cached)
[2026-02-01T07:51:45.869Z] [BOT] ✅ Loaded V2 database: 1675 jobs
💾 DISK STATE: 1675 jobs on disk
[2026-02-01T07:51:45.869Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1675
[2026-02-01T07:51:45.872Z] [BOT] 🔀 Deep merged: Data Analyst @ ORG_0760d36d (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:45.873Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1675 jobs (merged disk + memory)
[2026-02-01T07:51:45.874Z] [BOT] ✅ No jobs to archive (all 1675 jobs within 7-day window)
[2026-02-01T07:51:45.965Z] [BOT] 💾 Saved posted_jobs.json: 1675 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:47.466Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
[2026-02-01T07:51:47.466Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:51:47.652Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T07:51:47.652Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-02-01T07:51:47.653Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T07:51:47.653Z] [BOT] 💾 BEFORE MERGE: 1676 jobs in memory (cached)
[2026-02-01T07:51:47.691Z] [BOT] ✅ Loaded V2 database: 1675 jobs
💾 DISK STATE: 1675 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1676
[2026-02-01T07:51:47.697Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:47.697Z] [BOT] 💾 AFTER MERGE: 1676 jobs (merged disk + memory)
[2026-02-01T07:51:47.699Z] [BOT] ✅ No jobs to archive (all 1676 jobs within 7-day window)
[2026-02-01T07:51:47.798Z] [BOT] 💾 Saved posted_jobs.json: 1676 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:49.460Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T07:51:49.460Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T07:51:49.461Z] [BOT] 💾 BEFORE MERGE: 1676 jobs in memory (cached)
[2026-02-01T07:51:49.493Z] [BOT] ✅ Loaded V2 database: 1676 jobs
💾 DISK STATE: 1676 jobs on disk
[2026-02-01T07:51:49.493Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1676
[2026-02-01T07:51:49.496Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:51:49.496Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1676 jobs (merged disk + memory)
[2026-02-01T07:51:49.497Z] [BOT] ✅ No jobs to archive (all 1676 jobs within 7-day window)
[2026-02-01T07:51:49.588Z] [BOT] 💾 Saved posted_jobs.json: 1676 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:51.090Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T07:51:51.090Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:51:51.339Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-02-01T07:51:51.340Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T07:51:51.340Z] [BOT] 💾 BEFORE MERGE: 1677 jobs in memory (cached)
[2026-02-01T07:51:51.372Z] [BOT] ✅ Loaded V2 database: 1676 jobs
💾 DISK STATE: 1676 jobs on disk
[2026-02-01T07:51:51.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1677
[2026-02-01T07:51:51.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:51.376Z] [BOT] 💾 AFTER MERGE: 1677 jobs (merged disk + memory)
[2026-02-01T07:51:51.376Z] [BOT] ✅ No jobs to archive (all 1677 jobs within 7-day window)
[2026-02-01T07:51:51.475Z] [BOT] 💾 Saved posted_jobs.json: 1677 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:53.181Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T07:51:53.181Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T07:51:53.181Z] [BOT] 💾 BEFORE MERGE: 1677 jobs in memory (cached)
[2026-02-01T07:51:53.213Z] [BOT] ✅ Loaded V2 database: 1677 jobs
💾 DISK STATE: 1677 jobs on disk
[2026-02-01T07:51:53.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1677
[2026-02-01T07:51:53.217Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:51:53.217Z] [BOT] 💾 AFTER MERGE: 1677 jobs (merged disk + memory)
[2026-02-01T07:51:53.218Z] [BOT] ✅ No jobs to archive (all 1677 jobs within 7-day window)
[2026-02-01T07:51:53.309Z] [BOT] 💾 Saved posted_jobs.json: 1677 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:57.811Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T07:51:57.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c3111cf..." not found, but found as SHA256 "0fc3e1378bd8d7a4"
[2026-02-01T07:51:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_c8803021 (posted within 7 days)
[2026-02-01T07:51:57.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_17b7c147..." not found, but found as SHA256 "a89597564739a222"
[2026-02-01T07:51:57.813Z] [BOT] ⏭️  Skipping duplicate: JID_161dae0c-cx_1001-JID_51fb64eb (posted within 7 days)
[2026-02-01T07:51:57.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e5ee917d..." not found, but found as SHA256 "36267e95be95f4ee"
⏭️  Skipping duplicate: JID_5a14ec1a (posted within 7 days)
[2026-02-01T07:51:57.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_15dd93f6-..." not found, but found as SHA256 "921c7a11c0a99df3"
[2026-02-01T07:51:57.814Z] [BOT] ⏭️  Skipping duplicate: JID_df5a25b8 (posted within 7 days)
[2026-02-01T07:51:57.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c6134fd3..." not found, but found as SHA256 "8afcca2b9e18629d"
[2026-02-01T07:51:57.814Z] [BOT] ⏭️  Skipping duplicate: JID_d93ab0bf-northrop_grumman_external_site-JID_b79e84b3-_r10207436 (posted within 7 days)
[2026-02-01T07:51:57.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5c56d68..." not found, but found as SHA256 "15ffdb69e69a8625"
[2026-02-01T07:51:57.814Z] [BOT] ⏭️  Skipping duplicate: JID_a5c56d68 (posted within 7 days)
[2026-02-01T07:51:57.815Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3fae81e8-..." not found, but found as SHA256 "055063dcd45bdd0c"
[2026-02-01T07:51:57.815Z] [BOT] ⏭️  Skipping duplicate: JID_7a032475-graduates_103573 (posted within 7 days)
[2026-02-01T07:51:57.815Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9a6b907a..." not found, but found as SHA256 "8abdb7480ccab3f6"
[2026-02-01T07:51:57.815Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f125be66 (posted within 7 days)
[2026-02-01T07:51:57.815Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fcf64a2a..." not found, but found as SHA256 "013c2001ffecc5f0"
[2026-02-01T07:51:57.815Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ede63458 (posted within 7 days)
[2026-02-01T07:51:57.816Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1164b4cd..." not found, but found as SHA256 "5e3da7e9c906e73b"
[2026-02-01T07:51:57.816Z] [BOT] ⏭️  Skipping duplicate: JID_7f8ffc9a (posted within 7 days)
[2026-02-01T07:51:57.942Z] [BOT] ✅ Loaded pending queue: 2944 total (1237 pending, 50 enriched, 1657 posted)
[2026-02-01T07:51:58.119Z] [BOT] ✅ Saved pending queue: 2944 total (1237 pending, 40 enriched, 1667 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T07:51:58.119Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T07:51:58.207Z] [BOT] 📂 Loaded 11748 existing routing entries
[2026-02-01T07:51:58.348Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11758
   Timestamp: 2026-02-01T07:51:58.293Z
[2026-02-01T07:51:58.349Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T07:51:58.349Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T07:51:58.349Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🌲・JID_efdf5921: 2 posts
[2026-02-01T07:51:58.349Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1677 jobs in memory (cached)
[2026-02-01T07:51:58.402Z] [BOT] ✅ Loaded V2 database: 1677 jobs
💾 DISK STATE: 1677 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1677
[2026-02-01T07:51:58.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:51:58.404Z] [BOT] 💾 AFTER MERGE: 1677 jobs (merged disk + memory)
[2026-02-01T07:51:58.405Z] [BOT] ✅ No jobs to archive (all 1677 jobs within 7-day window)
[2026-02-01T07:51:58.499Z] [BOT] 💾 Saved posted_jobs.json: 1677 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:51:58.500Z] [BOT] ✅ Database saved successfully
[2026-02-01T07:52:00.532Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2730) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*