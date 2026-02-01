# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T15:48:07.690Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T15:47:15.595Z] ========================================
[2026-02-01T15:47:15.596Z] Discord Bot Execution Log
[2026-02-01T15:47:15.597Z] Environment: GitHub Actions
[2026-02-01T15:47:15.597Z] Node Version: v20.20.0
[2026-02-01T15:47:15.597Z] ========================================
[2026-02-01T15:47:15.597Z] Environment Variables Check:
[2026-02-01T15:47:15.597Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T15:47:15.597Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T15:47:15.597Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T15:47:15.597Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T15:47:15.597Z] 
Multi-Channel Configuration:
[2026-02-01T15:47:15.597Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T15:47:15.597Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.597Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T15:47:15.598Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:47:15.598Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T15:47:15.598Z] 
Data Files Check:
[2026-02-01T15:47:15.599Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59416 bytes)
[2026-02-01T15:47:15.650Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10128825 bytes)
[2026-02-01T15:47:15.650Z] 
========================================
[2026-02-01T15:47:15.650Z] Starting Enhanced Discord Bot...
[2026-02-01T15:47:15.650Z] ========================================
[2026-02-01T15:47:16.229Z] [BOT] ✅ Loaded V2 database: 1977 jobs
[2026-02-01T15:47:16.894Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T15:47:16.894Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T15:47:16.895Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T15:47:17.007Z] [BOT] ✅ Loaded pending queue: 2948 total (931 pending, 50 enriched, 1967 posted)
[2026-02-01T15:47:17.007Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T15:47:17.007Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:47:17.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T15:47:17.008Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:47:17.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T15:47:17.009Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T15:47:17.009Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T15:47:17.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T15:47:17.010Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T15:47:17.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T15:47:17.010Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T15:47:17.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T15:47:17.011Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T15:47:17.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T15:47:17.011Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T15:47:17.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T15:47:17.011Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T15:47:17.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T15:47:17.027Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T15:47:17.027Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow in Water Systems - Ml at University of Texas - Austin
[2026-02-01T15:47:17.152Z] [BOT] ✅ Loaded pending queue: 2948 total (931 pending, 50 enriched, 1967 posted)
[2026-02-01T15:47:17.370Z] [BOT] ✅ Saved pending queue: 2947 total (931 pending, 49 enriched, 1967 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T15:47:17.370Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T15:47:17.371Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-02-01T15:47:17.371Z] [BOT] (12 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T15:47:17.371Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
   - Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok: seattle, san jose
   - Data Engineer Graduate - E-commerce @ TikTok: san jose, seattle
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T15:47:17.372Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T15:47:17.375Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-01T15:47:17.376Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T15:47:17.376Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:47:17.394Z] [BOT ERROR] (node:2687) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T15:47:17.810Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:47:17.812Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:47:17.812Z] [BOT] 💾 BEFORE MERGE: 1978 jobs in memory (cached)
[2026-02-01T15:47:17.854Z] [BOT] ✅ Loaded V2 database: 1977 jobs
💾 DISK STATE: 1977 jobs on disk
[2026-02-01T15:47:17.855Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1978
[2026-02-01T15:47:17.859Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:17.859Z] [BOT] 💾 AFTER MERGE: 1978 jobs (merged disk + memory)
[2026-02-01T15:47:17.861Z] [BOT] ✅ No jobs to archive (all 1978 jobs within 7-day window)
[2026-02-01T15:47:17.971Z] [BOT] 💾 Saved posted_jobs.json: 1978 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:19.475Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_1bb6fcfb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:47:19.687Z] [BOT] ✅ Posted message: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb
[2026-02-01T15:47:19.688Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:47:19.688Z] [BOT] 💾 BEFORE MERGE: 1979 jobs in memory (cached)
[2026-02-01T15:47:19.723Z] [BOT] ✅ Loaded V2 database: 1978 jobs
[2026-02-01T15:47:19.723Z] [BOT] 💾 DISK STATE: 1978 jobs on disk
[2026-02-01T15:47:19.723Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1979
[2026-02-01T15:47:19.727Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:19.727Z] [BOT] 💾 AFTER MERGE: 1979 jobs (merged disk + memory)
[2026-02-01T15:47:19.729Z] [BOT] ✅ No jobs to archive (all 1979 jobs within 7-day window)
[2026-02-01T15:47:19.835Z] [BOT] 💾 Saved posted_jobs.json: 1979 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:21.561Z] [BOT] ✅ Posted message: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:47:21.562Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:21.562Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:21.562Z] [BOT] 💾 BEFORE MERGE: 1979 jobs in memory (cached)
[2026-02-01T15:47:21.598Z] [BOT] ✅ Loaded V2 database: 1979 jobs
💾 DISK STATE: 1979 jobs on disk
[2026-02-01T15:47:21.599Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1979
[2026-02-01T15:47:21.603Z] [BOT] 🔀 Deep merged: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:21.603Z] [BOT] 💾 AFTER MERGE: 1979 jobs (merged disk + memory)
[2026-02-01T15:47:21.605Z] [BOT] ✅ No jobs to archive (all 1979 jobs within 7-day window)
[2026-02-01T15:47:21.717Z] [BOT] 💾 Saved posted_jobs.json: 1979 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:23.219Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD" @ ORG_1bb6fcfb
   Category: TECH (default)
[2026-02-01T15:47:23.219Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:47:23.729Z] [BOT] ✅ Posted message: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T15:47:23.730Z] [BOT] ✅ Industry: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb
[2026-02-01T15:47:23.731Z] [BOT] 💾 Added channel posting: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1980 jobs in memory (cached)
[2026-02-01T15:47:23.767Z] [BOT] ✅ Loaded V2 database: 1979 jobs
💾 DISK STATE: 1979 jobs on disk
[2026-02-01T15:47:23.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1980
[2026-02-01T15:47:23.771Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1980 jobs (merged disk + memory)
[2026-02-01T15:47:23.772Z] [BOT] ✅ No jobs to archive (all 1980 jobs within 7-day window)
[2026-02-01T15:47:23.884Z] [BOT] 💾 Saved posted_jobs.json: 1980 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:25.577Z] [BOT] ✅ Posted message: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:25.577Z] [BOT] 💾 Added channel posting: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:25.577Z] [BOT] 💾 BEFORE MERGE: 1980 jobs in memory (cached)
[2026-02-01T15:47:25.613Z] [BOT] ✅ Loaded V2 database: 1980 jobs
💾 DISK STATE: 1980 jobs on disk
[2026-02-01T15:47:25.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1980
[2026-02-01T15:47:25.617Z] [BOT] 🔀 Deep merged: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:25.617Z] [BOT] 💾 AFTER MERGE: 1980 jobs (merged disk + memory)
[2026-02-01T15:47:25.618Z] [BOT] ✅ No jobs to archive (all 1980 jobs within 7-day window)
[2026-02-01T15:47:25.736Z] [BOT] 💾 Saved posted_jobs.json: 1980 active jobs
[2026-02-01T15:47:25.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:30.239Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-02-01T15:47:30.240Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Inference" @ ORG_08c9a13c
[2026-02-01T15:47:30.240Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:30.536Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c
[2026-02-01T15:47:30.537Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T15:47:30.537Z] [BOT] 💾 BEFORE MERGE: 1981 jobs in memory (cached)
[2026-02-01T15:47:30.571Z] [BOT] ✅ Loaded V2 database: 1980 jobs
💾 DISK STATE: 1980 jobs on disk
[2026-02-01T15:47:30.571Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1981
[2026-02-01T15:47:30.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:30.575Z] [BOT] 💾 AFTER MERGE: 1981 jobs (merged disk + memory)
[2026-02-01T15:47:30.576Z] [BOT] ✅ No jobs to archive (all 1981 jobs within 7-day window)
[2026-02-01T15:47:30.677Z] [BOT] 💾 Saved posted_jobs.json: 1981 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:32.502Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T15:47:32.502Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:32.503Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T15:47:32.503Z] [BOT] 💾 BEFORE MERGE: 1981 jobs in memory (cached)
[2026-02-01T15:47:32.538Z] [BOT] ✅ Loaded V2 database: 1981 jobs
💾 DISK STATE: 1981 jobs on disk
[2026-02-01T15:47:32.538Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1981
[2026-02-01T15:47:32.542Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:32.542Z] [BOT] 💾 AFTER MERGE: 1981 jobs (merged disk + memory)
[2026-02-01T15:47:32.543Z] [BOT] ✅ No jobs to archive (all 1981 jobs within 7-day window)
[2026-02-01T15:47:32.649Z] [BOT] 💾 Saved posted_jobs.json: 1981 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:34.150Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer - Data Search TikTok" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T15:47:34.150Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:34.453Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:47:34.453Z] [BOT] ✅ Industry: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb
[2026-02-01T15:47:34.453Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:47:34.454Z] [BOT] 💾 BEFORE MERGE: 1982 jobs in memory (cached)
[2026-02-01T15:47:34.489Z] [BOT] ✅ Loaded V2 database: 1981 jobs
💾 DISK STATE: 1981 jobs on disk
[2026-02-01T15:47:34.489Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1982
[2026-02-01T15:47:34.493Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:34.493Z] [BOT] 💾 AFTER MERGE: 1982 jobs (merged disk + memory)
[2026-02-01T15:47:34.494Z] [BOT] ✅ No jobs to archive (all 1982 jobs within 7-day window)
[2026-02-01T15:47:34.591Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:36.288Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:47:36.288Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:36.288Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:36.289Z] [BOT] 💾 BEFORE MERGE: 1982 jobs in memory (cached)
[2026-02-01T15:47:36.324Z] [BOT] ✅ Loaded V2 database: 1982 jobs
💾 DISK STATE: 1982 jobs on disk
[2026-02-01T15:47:36.324Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1982
[2026-02-01T15:47:36.328Z] [BOT] 🔀 Deep merged: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:36.328Z] [BOT] 💾 AFTER MERGE: 1982 jobs (merged disk + memory)
[2026-02-01T15:47:36.329Z] [BOT] ✅ No jobs to archive (all 1982 jobs within 7-day window)
[2026-02-01T15:47:36.454Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:37.954Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:47:37.954Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:38.137Z] [BOT] ✅ Posted message: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:47:38.138Z] [BOT] ✅ Industry: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2026-02-01T15:47:38.139Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1983 jobs in memory (cached)
[2026-02-01T15:47:38.173Z] [BOT] ✅ Loaded V2 database: 1982 jobs
💾 DISK STATE: 1982 jobs on disk
[2026-02-01T15:47:38.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1983
[2026-02-01T15:47:38.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:38.177Z] [BOT] 💾 AFTER MERGE: 1983 jobs (merged disk + memory)
[2026-02-01T15:47:38.178Z] [BOT] ✅ No jobs to archive (all 1983 jobs within 7-day window)
[2026-02-01T15:47:38.273Z] [BOT] 💾 Saved posted_jobs.json: 1983 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:40.121Z] [BOT] ✅ Posted message: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:47:40.121Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:40.122Z] [BOT] 💾 BEFORE MERGE: 1983 jobs in memory (cached)
[2026-02-01T15:47:40.155Z] [BOT] ✅ Loaded V2 database: 1983 jobs
💾 DISK STATE: 1983 jobs on disk
[2026-02-01T15:47:40.155Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1983
[2026-02-01T15:47:40.158Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:47:40.159Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1983 jobs (merged disk + memory)
[2026-02-01T15:47:40.160Z] [BOT] ✅ No jobs to archive (all 1983 jobs within 7-day window)
[2026-02-01T15:47:40.264Z] [BOT] 💾 Saved posted_jobs.json: 1983 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:41.766Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD" @ ORG_1bb6fcfb
   Category: AI (matched: "AI specialization")
[2026-02-01T15:47:41.766Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:41.980Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:47:41.980Z] [BOT] ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb
[2026-02-01T15:47:41.981Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:47:41.981Z] [BOT] 💾 BEFORE MERGE: 1984 jobs in memory (cached)
[2026-02-01T15:47:42.017Z] [BOT] ✅ Loaded V2 database: 1983 jobs
💾 DISK STATE: 1983 jobs on disk
[2026-02-01T15:47:42.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1984
[2026-02-01T15:47:42.021Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:42.021Z] [BOT] 💾 AFTER MERGE: 1984 jobs (merged disk + memory)
[2026-02-01T15:47:42.022Z] [BOT] ✅ No jobs to archive (all 1984 jobs within 7-day window)
[2026-02-01T15:47:42.130Z] [BOT] 💾 Saved posted_jobs.json: 1984 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:43.916Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🌲・JID_efdf5921
[2026-02-01T15:47:43.917Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:47:43.917Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:43.917Z] [BOT] 💾 BEFORE MERGE: 1984 jobs in memory (cached)
[2026-02-01T15:47:43.951Z] [BOT] ✅ Loaded V2 database: 1984 jobs
💾 DISK STATE: 1984 jobs on disk
[2026-02-01T15:47:43.952Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1984
[2026-02-01T15:47:43.955Z] [BOT] 🔀 Deep merged: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:43.955Z] [BOT] 💾 AFTER MERGE: 1984 jobs (merged disk + memory)
[2026-02-01T15:47:43.957Z] [BOT] ✅ No jobs to archive (all 1984 jobs within 7-day window)
[2026-02-01T15:47:44.051Z] [BOT] 💾 Saved posted_jobs.json: 1984 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:45.553Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Monetization Technology - GenAI" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:47:45.553Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:45.801Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb
[2026-02-01T15:47:45.802Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:47:45.802Z] [BOT] 💾 BEFORE MERGE: 1985 jobs in memory (cached)
[2026-02-01T15:47:45.837Z] [BOT] ✅ Loaded V2 database: 1984 jobs
💾 DISK STATE: 1984 jobs on disk
[2026-02-01T15:47:45.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1985
[2026-02-01T15:47:45.840Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:45.840Z] [BOT] 💾 AFTER MERGE: 1985 jobs (merged disk + memory)
[2026-02-01T15:47:45.841Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-02-01T15:47:45.947Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:47.757Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:47:47.758Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:47.758Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:47.758Z] [BOT] 💾 BEFORE MERGE: 1985 jobs in memory (cached)
[2026-02-01T15:47:47.793Z] [BOT] ✅ Loaded V2 database: 1985 jobs
💾 DISK STATE: 1985 jobs on disk
[2026-02-01T15:47:47.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1985
[2026-02-01T15:47:47.797Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:47.797Z] [BOT] 💾 AFTER MERGE: 1985 jobs (merged disk + memory)
[2026-02-01T15:47:47.798Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-02-01T15:47:47.894Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:49.396Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:47:49.396Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:47:49.637Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2026-02-01T15:47:49.638Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1986 jobs in memory (cached)
[2026-02-01T15:47:49.673Z] [BOT] ✅ Loaded V2 database: 1985 jobs
[2026-02-01T15:47:49.673Z] [BOT] 💾 DISK STATE: 1985 jobs on disk
[2026-02-01T15:47:49.673Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1986
[2026-02-01T15:47:49.677Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:49.677Z] [BOT] 💾 AFTER MERGE: 1986 jobs (merged disk + memory)
[2026-02-01T15:47:49.678Z] [BOT] ✅ No jobs to archive (all 1986 jobs within 7-day window)
[2026-02-01T15:47:49.803Z] [BOT] 💾 Saved posted_jobs.json: 1986 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:51.616Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:47:51.616Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:51.616Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:51.616Z] [BOT] 💾 BEFORE MERGE: 1986 jobs in memory (cached)
[2026-02-01T15:47:51.650Z] [BOT] ✅ Loaded V2 database: 1986 jobs
💾 DISK STATE: 1986 jobs on disk
[2026-02-01T15:47:51.650Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1986
[2026-02-01T15:47:51.654Z] [BOT] 🔀 Deep merged: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:47:51.654Z] [BOT] 💾 AFTER MERGE: 1986 jobs (merged disk + memory)
[2026-02-01T15:47:51.655Z] [BOT] ✅ No jobs to archive (all 1986 jobs within 7-day window)
[2026-02-01T15:47:51.749Z] [BOT] 💾 Saved posted_jobs.json: 1986 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:56.249Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T15:47:56.250Z] [BOT] 📍 [ROUTING] "Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T15:47:57.047Z] [BOT] ✅ Posted message: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-02-01T15:47:57.047Z] [BOT] ✅ Industry: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb
[2026-02-01T15:47:57.048Z] [BOT] 💾 Added channel posting: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:47:57.049Z] [BOT] 💾 BEFORE MERGE: 1987 jobs in memory (cached)
[2026-02-01T15:47:57.083Z] [BOT] ✅ Loaded V2 database: 1986 jobs
💾 DISK STATE: 1986 jobs on disk
[2026-02-01T15:47:57.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1987
[2026-02-01T15:47:57.087Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:47:57.087Z] [BOT] 💾 AFTER MERGE: 1987 jobs (merged disk + memory)
[2026-02-01T15:47:57.088Z] [BOT] ✅ No jobs to archive (all 1987 jobs within 7-day window)
[2026-02-01T15:47:57.209Z] [BOT] 💾 Saved posted_jobs.json: 1987 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:47:58.917Z] [BOT] ✅ Posted message: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:47:58.918Z] [BOT] 💾 Added channel posting: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:47:58.918Z] [BOT] 💾 BEFORE MERGE: 1987 jobs in memory (cached)
[2026-02-01T15:47:58.952Z] [BOT] ✅ Loaded V2 database: 1987 jobs
💾 DISK STATE: 1987 jobs on disk
[2026-02-01T15:47:58.952Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1987
[2026-02-01T15:47:58.956Z] [BOT] 🔀 Deep merged: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:47:58.956Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1987 jobs (merged disk + memory)
[2026-02-01T15:47:58.957Z] [BOT] ✅ No jobs to archive (all 1987 jobs within 7-day window)
[2026-02-01T15:47:59.068Z] [BOT] 💾 Saved posted_jobs.json: 1987 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:48:03.569Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T15:48:03.571Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "2f8a9d02b85de08c"
[2026-02-01T15:48:03.571Z] [BOT] ⏭️  Skipping duplicate: JID_e539055d (posted within 7 days)
[2026-02-01T15:48:03.571Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4ef18232..." not found, but found as SHA256 "9ee3d35388a674d0"
[2026-02-01T15:48:03.571Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_14ccab99-detail (posted within 7 days)
[2026-02-01T15:48:03.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f022495..." not found, but found as SHA256 "4b06dd9c4cdfb78b"
⏭️  Skipping duplicate: JID_6796d1d6-CH_290e6a69 (posted within 7 days)
[2026-02-01T15:48:03.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8aa7b5b8..." not found, but found as SHA256 "24848808030cc4e8"
⏭️  Skipping duplicate: JID_6796d1d6-CH_1c0a49b5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4b8a8396..." not found, but found as SHA256 "c744ed8bbf7078d8"
⏭️  Skipping duplicate: JID_6796d1d6-CH_e6896b47 (posted within 7 days)
[2026-02-01T15:48:03.572Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d98a409e..." not found, but found as SHA256 "6ed68d57896d1bfd"
[2026-02-01T15:48:03.572Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_850f3060 (posted within 7 days)
[2026-02-01T15:48:03.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2eeafe1b..." not found, but found as SHA256 "ab06492718a702cf"
⏭️  Skipping duplicate: JID_6796d1d6-CH_e19e810b (posted within 7 days)
[2026-02-01T15:48:03.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e9b186b..." not found, but found as SHA256 "193baf77c2b7c311"
⏭️  Skipping duplicate: JID_6796d1d6-CH_c70b6a26 (posted within 7 days)
[2026-02-01T15:48:03.573Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_636a8f0f..." not found, but found as SHA256 "aa0747ea8347bcc6"
[2026-02-01T15:48:03.573Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f695f88b (posted within 7 days)
[2026-02-01T15:48:03.574Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fadad416..." not found, but found as SHA256 "1593f2edaf8e65aa"
[2026-02-01T15:48:03.574Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3e9658ab (posted within 7 days)
[2026-02-01T15:48:03.674Z] [BOT] ✅ Loaded pending queue: 2947 total (931 pending, 49 enriched, 1967 posted)
[2026-02-01T15:48:03.877Z] [BOT] ✅ Saved pending queue: 2947 total (931 pending, 39 enriched, 1977 posted)
[2026-02-01T15:48:03.878Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T15:48:03.976Z] [BOT] 📂 Loaded 12058 existing routing entries
[2026-02-01T15:48:04.110Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T15:48:04.110Z] [BOT] Total entries: 12068
   Timestamp: 2026-02-01T15:48:04.061Z
[2026-02-01T15:48:04.110Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T15:48:04.110Z] [BOT] Total attempts: 28
   Successful: 19
   Failed: 0
   Skipped: 9
[2026-02-01T15:48:04.111Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T15:48:04.111Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #🌉・JID_739bbc0b: 7 posts
[2026-02-01T15:48:04.111Z] [BOT] 2. #🤖・ai-jobs: 6 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌲・JID_efdf5921: 2 posts
     5. #📊・JID_fb739488: 1 posts
[2026-02-01T15:48:04.111Z] [BOT] [STATS] Channel stats saved
[2026-02-01T15:48:04.111Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1987 jobs in memory (cached)
[2026-02-01T15:48:04.153Z] [BOT] ✅ Loaded V2 database: 1987 jobs
💾 DISK STATE: 1987 jobs on disk
[2026-02-01T15:48:04.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1987
[2026-02-01T15:48:04.156Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:48:04.157Z] [BOT] 💾 AFTER MERGE: 1987 jobs (merged disk + memory)
[2026-02-01T15:48:04.158Z] [BOT] ✅ No jobs to archive (all 1987 jobs within 7-day window)
[2026-02-01T15:48:04.261Z] [BOT] 💾 Saved posted_jobs.json: 1987 active jobs
[2026-02-01T15:48:04.262Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T15:48:06.296Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2687) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*