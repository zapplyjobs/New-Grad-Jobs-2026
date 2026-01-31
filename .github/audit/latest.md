# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T05:00:47.180Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T05:00:12.929Z] ========================================
[2026-01-31T05:00:12.931Z] Discord Bot Execution Log
[2026-01-31T05:00:12.931Z] Environment: GitHub Actions
[2026-01-31T05:00:12.931Z] Node Version: v20.20.0
[2026-01-31T05:00:12.931Z] ========================================
[2026-01-31T05:00:12.931Z] Environment Variables Check:
[2026-01-31T05:00:12.931Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T05:00:12.931Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.931Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T05:00:12.932Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T05:00:12.932Z] 
Multi-Channel Configuration:
[2026-01-31T05:00:12.932Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T05:00:12.932Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T05:00:12.933Z] 
Data Files Check:
[2026-01-31T05:00:12.934Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T05:00:12.963Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5602352 bytes)
[2026-01-31T05:00:12.963Z] 
========================================
[2026-01-31T05:00:12.963Z] Starting Enhanced Discord Bot...
[2026-01-31T05:00:12.963Z] ========================================
[2026-01-31T05:00:13.514Z] [BOT] ✅ Loaded V2 database: 858 jobs
[2026-01-31T05:00:14.101Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T05:00:14.102Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T05:00:14.102Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T05:00:14.221Z] [BOT] ✅ Loaded pending queue: 2961 total (2082 pending, 50 enriched, 829 posted)
[2026-01-31T05:00:14.221Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:00:14.222Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T05:00:14.222Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T05:00:14.223Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T05:00:14.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T05:00:14.223Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T05:00:14.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T05:00:14.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T05:00:14.224Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T05:00:14.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T05:00:14.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T05:00:14.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T05:00:14.225Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T05:00:14.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T05:00:14.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T05:00:14.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T05:00:14.226Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T05:00:14.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T05:00:14.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T05:00:14.231Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T05:00:14.232Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-31T05:00:14.232Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-31T05:00:14.337Z] [BOT] ✅ Loaded pending queue: 2961 total (2082 pending, 50 enriched, 829 posted)
[2026-01-31T05:00:14.514Z] [BOT] ✅ Saved pending queue: 2956 total (2082 pending, 45 enriched, 829 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
📋 After blacklist filter: 31 jobs (5 blacklisted)
[2026-01-31T05:00:14.514Z] [BOT] 📋 After data quality filter: 31 jobs (0 invalid)
[2026-01-31T05:00:14.515Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-01-31T05:00:14.515Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
[2026-01-31T05:00:14.516Z] [BOT] - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T05:00:14.520Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T05:00:14.521Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
[2026-01-31T05:00:14.521Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T05:00:14.538Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T05:00:15.113Z] [BOT] ✅ Posted message: Litigation and Risk Counsel @ brex in #💰・finance-jobs
  ✅ Industry: Litigation and Risk Counsel @ brex
[2026-01-31T05:00:15.114Z] [BOT] 💾 Added channel posting: Litigation and Risk Counsel @ brex → category channel (1 total channels)
[2026-01-31T05:00:15.114Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-31T05:00:15.134Z] [BOT] ✅ Loaded V2 database: 858 jobs
💾 DISK STATE: 858 jobs on disk
[2026-01-31T05:00:15.134Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-31T05:00:15.136Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:15.136Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-31T05:00:15.137Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-31T05:00:15.209Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-31T05:00:15.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:19.713Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T05:00:19.713Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
[2026-01-31T05:00:19.713Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:19.969Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_a731a58c in #💻・tech-jobs
[2026-01-31T05:00:19.969Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_a731a58c
[2026-01-31T05:00:19.970Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_a731a58c → category channel (1 total channels)
[2026-01-31T05:00:19.970Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-31T05:00:19.988Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-31T05:00:19.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-31T05:00:19.990Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:19.990Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-31T05:00:19.990Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-31T05:00:20.048Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:21.550Z] [BOT] 📍 [ROUTING] "Research Engineer – PhD New College Grad - Architecture" @ ORG_0890f456
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T05:00:21.550Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:21.704Z] [BOT] ✅ Posted message: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456
[2026-01-31T05:00:21.704Z] [BOT] 💾 Added channel posting: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T05:00:21.705Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-31T05:00:21.721Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-31T05:00:21.722Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-31T05:00:21.724Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:21.724Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-31T05:00:21.724Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-31T05:00:21.778Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:23.280Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-31T05:00:23.280Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:23.556Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-31T05:00:23.556Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-31T05:00:23.557Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-31T05:00:23.557Z] [BOT] 💾 BEFORE MERGE: 862 jobs in memory (cached)
[2026-01-31T05:00:23.574Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-31T05:00:23.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=862
[2026-01-31T05:00:23.576Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:23.576Z] [BOT] 💾 AFTER MERGE: 862 jobs (merged disk + memory)
[2026-01-31T05:00:23.577Z] [BOT] ✅ No jobs to archive (all 862 jobs within 7-day window)
[2026-01-31T05:00:23.634Z] [BOT] 💾 Saved posted_jobs.json: 862 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:25.136Z] [BOT] 📍 [ROUTING] "ATS Technology Development Program" @ ORG_f5b4b427 Insurance Company
[2026-01-31T05:00:25.136Z] [BOT] Category: TECH (matched: "product manager")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:25.303Z] [BOT] ✅ Posted message: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company in #💻・tech-jobs
[2026-01-31T05:00:25.303Z] [BOT] ✅ Industry: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company
[2026-01-31T05:00:25.303Z] [BOT] 💾 Added channel posting: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company → category channel (1 total channels)
[2026-01-31T05:00:25.303Z] [BOT] 💾 BEFORE MERGE: 863 jobs in memory (cached)
[2026-01-31T05:00:25.320Z] [BOT] ✅ Loaded V2 database: 862 jobs
💾 DISK STATE: 862 jobs on disk
[2026-01-31T05:00:25.320Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=863
[2026-01-31T05:00:25.323Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:25.323Z] [BOT] 💾 AFTER MERGE: 863 jobs (merged disk + memory)
[2026-01-31T05:00:25.323Z] [BOT] ✅ No jobs to archive (all 863 jobs within 7-day window)
[2026-01-31T05:00:25.378Z] [BOT] 💾 Saved posted_jobs.json: 863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:26.881Z] [BOT] 📍 [ROUTING] "Alternative Data Management - Analyst" @ iCapital Network
[2026-01-31T05:00:26.881Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:27.052Z] [BOT] ✅ Posted message: Alternative Data Management - Analyst @ iCapital Network in #💻・tech-jobs
[2026-01-31T05:00:27.052Z] [BOT] ✅ Industry: Alternative Data Management - Analyst @ iCapital Network
[2026-01-31T05:00:27.053Z] [BOT] 💾 Added channel posting: Alternative Data Management - Analyst @ iCapital Network → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory (cached)
[2026-01-31T05:00:27.070Z] [BOT] ✅ Loaded V2 database: 863 jobs
💾 DISK STATE: 863 jobs on disk
[2026-01-31T05:00:27.070Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=864
[2026-01-31T05:00:27.072Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-31T05:00:27.072Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-31T05:00:27.127Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:28.629Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
   Category: TECH (matched: "software")
[2026-01-31T05:00:28.629Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:28.793Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2026-01-31T05:00:28.794Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory (cached)
[2026-01-31T05:00:28.811Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-31T05:00:28.811Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=865
[2026-01-31T05:00:28.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:28.813Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-31T05:00:28.813Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-31T05:00:28.868Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:30.370Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
[2026-01-31T05:00:30.371Z] [BOT] Category: TECH (default)
[2026-01-31T05:00:30.371Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:30.571Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-31T05:00:30.571Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_066855bc → category channel (1 total channels)
[2026-01-31T05:00:30.572Z] [BOT] 💾 BEFORE MERGE: 866 jobs in memory (cached)
[2026-01-31T05:00:30.589Z] [BOT] ✅ Loaded V2 database: 865 jobs
💾 DISK STATE: 865 jobs on disk
[2026-01-31T05:00:30.589Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=866
[2026-01-31T05:00:30.591Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:30.591Z] [BOT] 💾 AFTER MERGE: 866 jobs (merged disk + memory)
[2026-01-31T05:00:30.592Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2026-01-31T05:00:30.646Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:32.419Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_066855bc in #🏠・JID_ead674af
[2026-01-31T05:00:32.419Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T05:00:32.419Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_066855bc → location channel (2 total channels)
[2026-01-31T05:00:32.419Z] [BOT] 💾 BEFORE MERGE: 866 jobs in memory (cached)
[2026-01-31T05:00:32.436Z] [BOT] ✅ Loaded V2 database: 866 jobs
💾 DISK STATE: 866 jobs on disk
[2026-01-31T05:00:32.436Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=866
[2026-01-31T05:00:32.438Z] [BOT] 🔀 Deep merged: Search Quality Rater @ ORG_066855bc (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T05:00:32.438Z] [BOT] 💾 AFTER MERGE: 866 jobs (merged disk + memory)
[2026-01-31T05:00:32.439Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2026-01-31T05:00:32.495Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:33.998Z] [BOT] 📍 [ROUTING] "Developer 2 - Programming" @ ORG_d7d2f0ff Digital
   Category: TECH (matched: "software")
[2026-01-31T05:00:33.998Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T05:00:34.222Z] [BOT] ✅ Posted message: Developer 2 - Programming @ ORG_d7d2f0ff Digital in #💻・tech-jobs
  ✅ Industry: Developer 2 - Programming @ ORG_d7d2f0ff Digital
[2026-01-31T05:00:34.222Z] [BOT] 💾 Added channel posting: Developer 2 - Programming @ ORG_d7d2f0ff Digital → category channel (1 total channels)
[2026-01-31T05:00:34.222Z] [BOT] 💾 BEFORE MERGE: 867 jobs in memory (cached)
[2026-01-31T05:00:34.239Z] [BOT] ✅ Loaded V2 database: 866 jobs
💾 DISK STATE: 866 jobs on disk
[2026-01-31T05:00:34.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=867
[2026-01-31T05:00:34.241Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 867 jobs (merged disk + memory)
[2026-01-31T05:00:34.242Z] [BOT] ✅ No jobs to archive (all 867 jobs within 7-day window)
[2026-01-31T05:00:34.299Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:38.802Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T05:00:38.803Z] [BOT] 📍 [ROUTING] "Research Analyst" @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-31T05:00:38.803Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T05:00:39.065Z] [BOT] ✅ Posted message: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-31T05:00:39.066Z] [BOT] 💾 Added channel posting: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) → category channel (1 total channels)
[2026-01-31T05:00:39.066Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory (cached)
[2026-01-31T05:00:39.083Z] [BOT] ✅ Loaded V2 database: 867 jobs
💾 DISK STATE: 867 jobs on disk
[2026-01-31T05:00:39.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=868
[2026-01-31T05:00:39.085Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-31T05:00:39.086Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-31T05:00:39.146Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:43.648Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T05:00:43.649Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_634a9e21..." not found, but found as SHA256 "7b15732f93176cff"
[2026-01-31T05:00:43.649Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-31T05:00:43.649Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c167f511..." not found, but found as SHA256 "4d5ded6dde6ae299"
⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
[2026-01-31T05:00:43.650Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "319df094d552d8e2"
[2026-01-31T05:00:43.650Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-31T05:00:43.650Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9472b700..." not found, but found as SHA256 "e1969aa729767fea"
⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3637cf46..." not found, but found as SHA256 "97457f968cb7babf"
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_32370a09-sourcing_..." not found, but found as SHA256 "f17fa5801ef49df2"
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
[2026-01-31T05:00:43.651Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f03cc28..." not found, but found as SHA256 "63ebc9441b3a83e9"
[2026-01-31T05:00:43.651Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
[2026-01-31T05:00:43.651Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64a28ffa-..." not found, but found as SHA256 "3d42034bc7d9cbfc"
⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
[2026-01-31T05:00:43.651Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f1c0291c..." not found, but found as SHA256 "06825d7f5cfb9327"
⏭️  Skipping duplicate: JID_0940be93-rater_r0007321 (posted within 7 days)
[2026-01-31T05:00:43.651Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c856ca52-..." not found, but found as SHA256 "ae6f8b7099e54d2c"
⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
[2026-01-31T05:00:43.766Z] [BOT] ✅ Loaded pending queue: 2956 total (2082 pending, 45 enriched, 829 posted)
[2026-01-31T05:00:43.950Z] [BOT] ✅ Saved pending queue: 2956 total (2082 pending, 35 enriched, 839 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T05:00:43.950Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T05:00:44.036Z] [BOT] 📂 Loaded 10920 existing routing entries
[2026-01-31T05:00:44.179Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T05:00:44.180Z] [BOT] New entries: 10
   Total entries: 10930
   Timestamp: 2026-01-31T05:00:44.118Z
[2026-01-31T05:00:44.180Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T05:00:44.180Z] [BOT] Total attempts: 30
   Successful: 11
   Failed: 0
   Skipped: 19
[2026-01-31T05:00:44.180Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T05:00:44.181Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-31T05:00:44.181Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #💰・finance-jobs: 1 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-31T05:00:44.181Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T05:00:44.181Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory (cached)
[2026-01-31T05:00:44.199Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-31T05:00:44.199Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=868
[2026-01-31T05:00:44.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T05:00:44.201Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-31T05:00:44.201Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-31T05:00:44.259Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T05:00:44.259Z] [BOT] ✅ Database saved successfully
[2026-01-31T05:00:46.290Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*