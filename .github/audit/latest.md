# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T16:00:59.451Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T16:00:04.055Z] ========================================
[2026-02-01T16:00:04.057Z] Discord Bot Execution Log
[2026-02-01T16:00:04.057Z] Environment: GitHub Actions
[2026-02-01T16:00:04.057Z] Node Version: v20.20.0
[2026-02-01T16:00:04.057Z] ========================================
[2026-02-01T16:00:04.057Z] Environment Variables Check:
[2026-02-01T16:00:04.057Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T16:00:04.057Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T16:00:04.057Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T16:00:04.057Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T16:00:04.057Z] 
Multi-Channel Configuration:
[2026-02-01T16:00:04.058Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T16:00:04.058Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T16:00:04.058Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:00:04.058Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T16:00:04.058Z] 
Data Files Check:
[2026-02-01T16:00:04.059Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59420 bytes)
[2026-02-01T16:00:04.124Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10140363 bytes)
[2026-02-01T16:00:04.124Z] 
========================================
[2026-02-01T16:00:04.124Z] Starting Enhanced Discord Bot...
[2026-02-01T16:00:04.124Z] ========================================
[2026-02-01T16:00:04.648Z] [BOT] ✅ Loaded V2 database: 1987 jobs
[2026-02-01T16:00:05.426Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T16:00:05.426Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T16:00:05.426Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T16:00:05.585Z] [BOT] ✅ Loaded pending queue: 2948 total (921 pending, 50 enriched, 1977 posted)
[2026-02-01T16:00:05.586Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T16:00:05.586Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:00:05.587Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T16:00:05.587Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T16:00:05.587Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:00:05.588Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T16:00:05.588Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T16:00:05.588Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T16:00:05.589Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T16:00:05.589Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T16:00:05.589Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T16:00:05.589Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T16:00:05.590Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T16:00:05.590Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T16:00:05.590Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T16:00:05.590Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T16:00:05.590Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T16:00:05.591Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T16:00:05.602Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T16:00:05.602Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T16:00:05.603Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T16:00:05.603Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-02-01T16:00:05.604Z] [BOT] (8 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
   - Data Engineer Graduate - E-commerce @ TikTok: san jose, seattle
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T16:00:05.607Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T16:00:05.608Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T16:00:05.608Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:00:05.625Z] [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T16:00:07.948Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T16:00:07.949Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T16:00:07.950Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T16:00:07.950Z] [BOT] 💾 BEFORE MERGE: 1988 jobs in memory (cached)
[2026-02-01T16:00:08.010Z] [BOT] ✅ Loaded V2 database: 1987 jobs
💾 DISK STATE: 1987 jobs on disk
[2026-02-01T16:00:08.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1988
[2026-02-01T16:00:08.016Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:08.016Z] [BOT] 💾 AFTER MERGE: 1988 jobs (merged disk + memory)
[2026-02-01T16:00:08.018Z] [BOT] ✅ No jobs to archive (all 1988 jobs within 7-day window)
[2026-02-01T16:00:08.171Z] [BOT] 💾 Saved posted_jobs.json: 1988 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:09.671Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Monetization GenAI" @ ORG_1bb6fcfb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:00:10.362Z] [BOT] ✅ Posted message: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb
[2026-02-01T16:00:10.363Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:10.363Z] [BOT] 💾 BEFORE MERGE: 1989 jobs in memory (cached)
[2026-02-01T16:00:10.416Z] [BOT] ✅ Loaded V2 database: 1988 jobs
💾 DISK STATE: 1988 jobs on disk
[2026-02-01T16:00:10.417Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1989
[2026-02-01T16:00:10.421Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1989 jobs (merged disk + memory)
[2026-02-01T16:00:10.423Z] [BOT] ✅ No jobs to archive (all 1989 jobs within 7-day window)
[2026-02-01T16:00:10.543Z] [BOT] 💾 Saved posted_jobs.json: 1989 active jobs
[2026-02-01T16:00:10.546Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:12.477Z] [BOT] ✅ Posted message: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:12.478Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:12.478Z] [BOT] 💾 BEFORE MERGE: 1989 jobs in memory (cached)
[2026-02-01T16:00:12.529Z] [BOT] ✅ Loaded V2 database: 1989 jobs
💾 DISK STATE: 1989 jobs on disk
[2026-02-01T16:00:12.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1989
[2026-02-01T16:00:12.535Z] [BOT] 🔀 Deep merged: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:12.535Z] [BOT] 💾 AFTER MERGE: 1989 jobs (merged disk + memory)
[2026-02-01T16:00:12.537Z] [BOT] ✅ No jobs to archive (all 1989 jobs within 7-day window)
[2026-02-01T16:00:12.646Z] [BOT] 💾 Saved posted_jobs.json: 1989 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:14.148Z] [BOT] 📍 [ROUTING] "Software Design Assurance Engineer 1 - Engineering - Design Assurance" @ ORG_a06522bc Scientific
   Category: TECH (matched: "software")
[2026-02-01T16:00:14.148Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:00:14.378Z] [BOT] ✅ Posted message: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific in #💻・tech-jobs
[2026-02-01T16:00:14.378Z] [BOT] ✅ Industry: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific
[2026-02-01T16:00:14.379Z] [BOT] 💾 Added channel posting: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific → category channel (1 total channels)
[2026-02-01T16:00:14.379Z] [BOT] 💾 BEFORE MERGE: 1990 jobs in memory (cached)
[2026-02-01T16:00:14.429Z] [BOT] ✅ Loaded V2 database: 1989 jobs
💾 DISK STATE: 1989 jobs on disk
[2026-02-01T16:00:14.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1990
[2026-02-01T16:00:14.435Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:14.435Z] [BOT] 💾 AFTER MERGE: 1990 jobs (merged disk + memory)
[2026-02-01T16:00:14.437Z] [BOT] ✅ No jobs to archive (all 1990 jobs within 7-day window)
[2026-02-01T16:00:14.565Z] [BOT] 💾 Saved posted_jobs.json: 1990 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:16.294Z] [BOT] ✅ Posted message: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:00:16.294Z] [BOT] 💾 Added channel posting: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific → location channel (2 total channels)
[2026-02-01T16:00:16.295Z] [BOT] 💾 BEFORE MERGE: 1990 jobs in memory (cached)
[2026-02-01T16:00:16.344Z] [BOT] ✅ Loaded V2 database: 1990 jobs
💾 DISK STATE: 1990 jobs on disk
[2026-02-01T16:00:16.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1990
[2026-02-01T16:00:16.349Z] [BOT] 🔀 Deep merged: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:16.349Z] [BOT] 💾 AFTER MERGE: 1990 jobs (merged disk + memory)
[2026-02-01T16:00:16.350Z] [BOT] ✅ No jobs to archive (all 1990 jobs within 7-day window)
[2026-02-01T16:00:16.457Z] [BOT] 💾 Saved posted_jobs.json: 1990 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:17.961Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
[2026-02-01T16:00:17.961Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:00:18.224Z] [BOT] ✅ Posted message: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T16:00:18.225Z] [BOT] ✅ Industry: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2026-02-01T16:00:18.225Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:18.225Z] [BOT] 💾 BEFORE MERGE: 1991 jobs in memory (cached)
[2026-02-01T16:00:18.275Z] [BOT] ✅ Loaded V2 database: 1990 jobs
💾 DISK STATE: 1990 jobs on disk
[2026-02-01T16:00:18.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1991
[2026-02-01T16:00:18.280Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:18.280Z] [BOT] 💾 AFTER MERGE: 1991 jobs (merged disk + memory)
[2026-02-01T16:00:18.281Z] [BOT] ✅ No jobs to archive (all 1991 jobs within 7-day window)
[2026-02-01T16:00:18.400Z] [BOT] 💾 Saved posted_jobs.json: 1991 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:20.495Z] [BOT] ✅ Posted message: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:00:20.496Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:20.496Z] [BOT] 💾 BEFORE MERGE: 1991 jobs in memory (cached)
[2026-02-01T16:00:20.546Z] [BOT] ✅ Loaded V2 database: 1991 jobs
💾 DISK STATE: 1991 jobs on disk
[2026-02-01T16:00:20.546Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1991
[2026-02-01T16:00:20.550Z] [BOT] 🔀 Deep merged: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:20.551Z] [BOT] 💾 AFTER MERGE: 1991 jobs (merged disk + memory)
[2026-02-01T16:00:20.552Z] [BOT] ✅ No jobs to archive (all 1991 jobs within 7-day window)
[2026-02-01T16:00:20.679Z] [BOT] 💾 Saved posted_jobs.json: 1991 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:22.182Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Compute Platform - Database Acceleration" @ ORG_1bb6fcfb
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:00:22.404Z] [BOT] ✅ Posted message: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb
[2026-02-01T16:00:22.405Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:22.405Z] [BOT] 💾 BEFORE MERGE: 1992 jobs in memory (cached)
[2026-02-01T16:00:22.455Z] [BOT] ✅ Loaded V2 database: 1991 jobs
💾 DISK STATE: 1991 jobs on disk
[2026-02-01T16:00:22.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1992
[2026-02-01T16:00:22.461Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:22.461Z] [BOT] 💾 AFTER MERGE: 1992 jobs (merged disk + memory)
[2026-02-01T16:00:22.463Z] [BOT] ✅ No jobs to archive (all 1992 jobs within 7-day window)
[2026-02-01T16:00:22.572Z] [BOT] 💾 Saved posted_jobs.json: 1992 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:24.480Z] [BOT] ✅ Posted message: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:24.481Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:24.481Z] [BOT] 💾 BEFORE MERGE: 1992 jobs in memory (cached)
[2026-02-01T16:00:24.530Z] [BOT] ✅ Loaded V2 database: 1992 jobs
💾 DISK STATE: 1992 jobs on disk
[2026-02-01T16:00:24.531Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1992
[2026-02-01T16:00:24.534Z] [BOT] 🔀 Deep merged: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:24.534Z] [BOT] 💾 AFTER MERGE: 1992 jobs (merged disk + memory)
[2026-02-01T16:00:24.536Z] [BOT] ✅ No jobs to archive (all 1992 jobs within 7-day window)
[2026-02-01T16:00:24.652Z] [BOT] 💾 Saved posted_jobs.json: 1992 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:29.153Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T16:00:29.155Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose" @ ORG_1bb6fcfb
[2026-02-01T16:00:29.155Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:00:29.435Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb
[2026-02-01T16:00:29.436Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:29.436Z] [BOT] 💾 BEFORE MERGE: 1993 jobs in memory (cached)
[2026-02-01T16:00:29.485Z] [BOT] ✅ Loaded V2 database: 1992 jobs
💾 DISK STATE: 1992 jobs on disk
[2026-02-01T16:00:29.486Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1993
[2026-02-01T16:00:29.489Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:29.490Z] [BOT] 💾 AFTER MERGE: 1993 jobs (merged disk + memory)
[2026-02-01T16:00:29.491Z] [BOT] ✅ No jobs to archive (all 1993 jobs within 7-day window)
[2026-02-01T16:00:29.608Z] [BOT] 💾 Saved posted_jobs.json: 1993 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:31.428Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:31.428Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:31.429Z] [BOT] 💾 BEFORE MERGE: 1993 jobs in memory (cached)
[2026-02-01T16:00:31.483Z] [BOT] ✅ Loaded V2 database: 1993 jobs
[2026-02-01T16:00:31.486Z] [BOT] 💾 DISK STATE: 1993 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1993
[2026-02-01T16:00:31.491Z] [BOT] 🔀 Deep merged: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1993 jobs (merged disk + memory)
[2026-02-01T16:00:31.492Z] [BOT] ✅ No jobs to archive (all 1993 jobs within 7-day window)
[2026-02-01T16:00:31.632Z] [BOT] 💾 Saved posted_jobs.json: 1993 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:33.135Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS" @ ORG_1bb6fcfb
[2026-02-01T16:00:33.135Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:00:33.338Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T16:00:33.338Z] [BOT] ✅ Industry: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb
[2026-02-01T16:00:33.339Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:33.339Z] [BOT] 💾 BEFORE MERGE: 1994 jobs in memory (cached)
[2026-02-01T16:00:33.389Z] [BOT] ✅ Loaded V2 database: 1993 jobs
💾 DISK STATE: 1993 jobs on disk
[2026-02-01T16:00:33.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1994
[2026-02-01T16:00:33.393Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:33.393Z] [BOT] 💾 AFTER MERGE: 1994 jobs (merged disk + memory)
[2026-02-01T16:00:33.394Z] [BOT] ✅ No jobs to archive (all 1994 jobs within 7-day window)
[2026-02-01T16:00:33.506Z] [BOT] 💾 Saved posted_jobs.json: 1994 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:35.245Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:35.246Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:35.246Z] [BOT] 💾 BEFORE MERGE: 1994 jobs in memory (cached)
[2026-02-01T16:00:35.298Z] [BOT] ✅ Loaded V2 database: 1994 jobs
💾 DISK STATE: 1994 jobs on disk
[2026-02-01T16:00:35.299Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1994
[2026-02-01T16:00:35.302Z] [BOT] 🔀 Deep merged: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:35.302Z] [BOT] 💾 AFTER MERGE: 1994 jobs (merged disk + memory)
[2026-02-01T16:00:35.304Z] [BOT] ✅ No jobs to archive (all 1994 jobs within 7-day window)
[2026-02-01T16:00:35.418Z] [BOT] 💾 Saved posted_jobs.json: 1994 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:36.920Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:00:36.920Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:00:37.201Z] [BOT] ✅ Posted message: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2026-02-01T16:00:37.202Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:37.202Z] [BOT] 💾 BEFORE MERGE: 1995 jobs in memory (cached)
[2026-02-01T16:00:37.251Z] [BOT] ✅ Loaded V2 database: 1994 jobs
💾 DISK STATE: 1994 jobs on disk
[2026-02-01T16:00:37.252Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1995
[2026-02-01T16:00:37.260Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1995 jobs (merged disk + memory)
[2026-02-01T16:00:37.262Z] [BOT] ✅ No jobs to archive (all 1995 jobs within 7-day window)
[2026-02-01T16:00:37.385Z] [BOT] 💾 Saved posted_jobs.json: 1995 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:39.310Z] [BOT] ✅ Posted message: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:39.311Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:39.311Z] [BOT] 💾 BEFORE MERGE: 1995 jobs in memory (cached)
[2026-02-01T16:00:39.361Z] [BOT] ✅ Loaded V2 database: 1995 jobs
💾 DISK STATE: 1995 jobs on disk
[2026-02-01T16:00:39.362Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1995
[2026-02-01T16:00:39.366Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:39.366Z] [BOT] 💾 AFTER MERGE: 1995 jobs (merged disk + memory)
[2026-02-01T16:00:39.367Z] [BOT] ✅ No jobs to archive (all 1995 jobs within 7-day window)
[2026-02-01T16:00:39.476Z] [BOT] 💾 Saved posted_jobs.json: 1995 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:40.978Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ads Targeting" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:00:40.978Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:00:41.135Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb
[2026-02-01T16:00:41.136Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:41.136Z] [BOT] 💾 BEFORE MERGE: 1996 jobs in memory (cached)
[2026-02-01T16:00:41.187Z] [BOT] ✅ Loaded V2 database: 1995 jobs
[2026-02-01T16:00:41.187Z] [BOT] 💾 DISK STATE: 1995 jobs on disk
[2026-02-01T16:00:41.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1996
[2026-02-01T16:00:41.191Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:41.191Z] [BOT] 💾 AFTER MERGE: 1996 jobs (merged disk + memory)
[2026-02-01T16:00:41.192Z] [BOT] ✅ No jobs to archive (all 1996 jobs within 7-day window)
[2026-02-01T16:00:41.329Z] [BOT] 💾 Saved posted_jobs.json: 1996 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:42.998Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:42.999Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:42.999Z] [BOT] 💾 BEFORE MERGE: 1996 jobs in memory (cached)
[2026-02-01T16:00:43.050Z] [BOT] ✅ Loaded V2 database: 1996 jobs
💾 DISK STATE: 1996 jobs on disk
[2026-02-01T16:00:43.050Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1996
[2026-02-01T16:00:43.054Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:00:43.054Z] [BOT] 💾 AFTER MERGE: 1996 jobs (merged disk + memory)
[2026-02-01T16:00:43.056Z] [BOT] ✅ No jobs to archive (all 1996 jobs within 7-day window)
[2026-02-01T16:00:43.164Z] [BOT] 💾 Saved posted_jobs.json: 1996 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:47.666Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T16:00:47.667Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-02-01T16:00:47.667Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T16:00:48.224Z] [BOT] ✅ Posted message: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb
[2026-02-01T16:00:48.225Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:00:48.225Z] [BOT] 💾 BEFORE MERGE: 1997 jobs in memory (cached)
[2026-02-01T16:00:48.275Z] [BOT] ✅ Loaded V2 database: 1996 jobs
💾 DISK STATE: 1996 jobs on disk
[2026-02-01T16:00:48.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1997
[2026-02-01T16:00:48.279Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:48.279Z] [BOT] 💾 AFTER MERGE: 1997 jobs (merged disk + memory)
[2026-02-01T16:00:48.280Z] [BOT] ✅ No jobs to archive (all 1997 jobs within 7-day window)
[2026-02-01T16:00:48.414Z] [BOT] 💾 Saved posted_jobs.json: 1997 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:50.780Z] [BOT] ✅ Posted message: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:00:50.781Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:00:50.781Z] [BOT] 💾 BEFORE MERGE: 1997 jobs in memory (cached)
[2026-02-01T16:00:50.830Z] [BOT] ✅ Loaded V2 database: 1997 jobs
💾 DISK STATE: 1997 jobs on disk
[2026-02-01T16:00:50.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1997
[2026-02-01T16:00:50.834Z] [BOT] 🔀 Deep merged: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:00:50.834Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1997 jobs (merged disk + memory)
[2026-02-01T16:00:50.836Z] [BOT] ✅ No jobs to archive (all 1997 jobs within 7-day window)
[2026-02-01T16:00:50.964Z] [BOT] 💾 Saved posted_jobs.json: 1997 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:55.463Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T16:00:55.464Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "cd781a41c7f30c16"
[2026-02-01T16:00:55.464Z] [BOT] ⏭️  Skipping duplicate: JID_054cd16c (posted within 7 days)
[2026-02-01T16:00:55.465Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ddadfa04..." not found, but found as SHA256 "323a66e66393cc91"
[2026-02-01T16:00:55.465Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f9295537 (posted within 7 days)
[2026-02-01T16:00:55.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dbb64a8..." not found, but found as SHA256 "77ed8ff980947cfd"
⏭️  Skipping duplicate: JID_6796d1d6-CH_456c0766 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2d3e5fe0..." not found, but found as SHA256 "cd11172f6b6c9375"
⏭️  Skipping duplicate: JID_6796d1d6-CH_8cc0ebb3 (posted within 7 days)
[2026-02-01T16:00:55.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77e15319..." not found, but found as SHA256 "7d35c52f582844c9"
[2026-02-01T16:00:55.466Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b6f508de (posted within 7 days)
[2026-02-01T16:00:55.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f9e6f6c..." not found, but found as SHA256 "a14c6524c6607738"
[2026-02-01T16:00:55.466Z] [BOT] ⏭️  Skipping duplicate: JID_3c5fadf7 (posted within 7 days)
[2026-02-01T16:00:55.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2573719d..." not found, but found as SHA256 "859aa1ffc1e086f2"
[2026-02-01T16:00:55.467Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ee347799 (posted within 7 days)
[2026-02-01T16:00:55.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b76747c2..." not found, but found as SHA256 "96ef4a323e48c755"
[2026-02-01T16:00:55.467Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_841e3d8c (posted within 7 days)
[2026-02-01T16:00:55.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4b17ef38..." not found, but found as SHA256 "ac6fcdde605c5928"
[2026-02-01T16:00:55.468Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6748210c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_39e8d26b..." not found, but found as SHA256 "c22abf2c9d6f1d71"
⏭️  Skipping duplicate: JID_6796d1d6-CH_73de1a4f (posted within 7 days)
[2026-02-01T16:00:55.616Z] [BOT] ✅ Loaded pending queue: 2948 total (921 pending, 50 enriched, 1977 posted)
[2026-02-01T16:00:55.824Z] [BOT] ✅ Saved pending queue: 2948 total (921 pending, 40 enriched, 1987 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T16:00:55.824Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T16:00:55.928Z] [BOT] 📂 Loaded 12068 existing routing entries
[2026-02-01T16:00:56.058Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12078
   Timestamp: 2026-02-01T16:00:56.014Z
[2026-02-01T16:00:56.059Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 27
[2026-02-01T16:00:56.059Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T16:00:56.059Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T16:00:56.060Z] [BOT] Total posts: 19
   Channels used: 6
   Top channels:
     1. #🌉・JID_739bbc0b: 7 posts
     2. #💻・tech-jobs: 5 posts
[2026-02-01T16:00:56.060Z] [BOT] 3. #🤖・ai-jobs: 4 posts
     4. #📍・JID_6daed763: 1 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T16:00:56.060Z] [BOT] [STATS] Channel stats saved
[2026-02-01T16:00:56.060Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1997 jobs in memory (cached)
[2026-02-01T16:00:56.118Z] [BOT] ✅ Loaded V2 database: 1997 jobs
💾 DISK STATE: 1997 jobs on disk
[2026-02-01T16:00:56.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1997
[2026-02-01T16:00:56.122Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:00:56.122Z] [BOT] 💾 AFTER MERGE: 1997 jobs (merged disk + memory)
[2026-02-01T16:00:56.123Z] [BOT] ✅ No jobs to archive (all 1997 jobs within 7-day window)
[2026-02-01T16:00:56.241Z] [BOT] 💾 Saved posted_jobs.json: 1997 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:00:56.241Z] [BOT] ✅ Database saved successfully
[2026-02-01T16:00:58.267Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*