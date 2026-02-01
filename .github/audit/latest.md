# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T12:16:15.844Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T12:15:20.474Z] ========================================
[2026-02-01T12:15:20.476Z] Discord Bot Execution Log
[2026-02-01T12:15:20.476Z] Environment: GitHub Actions
[2026-02-01T12:15:20.476Z] Node Version: v20.20.0
[2026-02-01T12:15:20.476Z] ========================================
[2026-02-01T12:15:20.476Z] Environment Variables Check:
[2026-02-01T12:15:20.476Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T12:15:20.477Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T12:15:20.477Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T12:15:20.477Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T12:15:20.477Z] 
Multi-Channel Configuration:
[2026-02-01T12:15:20.477Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T12:15:20.477Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.477Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.477Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T12:15:20.477Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.477Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.477Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.477Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.478Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T12:15:20.478Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T12:15:20.478Z] 
Data Files Check:
[2026-02-01T12:15:20.479Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61747 bytes)
[2026-02-01T12:15:20.529Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9779045 bytes)
[2026-02-01T12:15:20.529Z] 
========================================
[2026-02-01T12:15:20.529Z] Starting Enhanced Discord Bot...
[2026-02-01T12:15:20.529Z] ========================================
[2026-02-01T12:15:21.106Z] [BOT] ✅ Loaded V2 database: 1847 jobs
[2026-02-01T12:15:21.539Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T12:15:21.539Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T12:15:21.539Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T12:15:21.655Z] [BOT] ✅ Loaded pending queue: 2948 total (1061 pending, 50 enriched, 1837 posted)
[2026-02-01T12:15:21.655Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:15:21.656Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T12:15:21.657Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T12:15:21.657Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T12:15:21.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T12:15:21.657Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T12:15:21.658Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T12:15:21.658Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T12:15:21.658Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T12:15:21.658Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T12:15:21.659Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T12:15:21.659Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T12:15:21.659Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T12:15:21.659Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T12:15:21.659Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T12:15:21.673Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T12:15:21.674Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T12:15:21.674Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T12:15:21.675Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T12:15:21.675Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T12:15:21.675Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T12:15:21.678Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T12:15:21.679Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - Ecommerce Recommendation - BS/MS" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T12:15:21.679Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:15:21.697Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T12:15:22.006Z] [BOT] ✅ Posted message: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c
[2026-02-01T12:15:22.007Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:15:22.007Z] [BOT] 💾 BEFORE MERGE: 1848 jobs in memory (cached)
[2026-02-01T12:15:22.048Z] [BOT] ✅ Loaded V2 database: 1847 jobs
💾 DISK STATE: 1847 jobs on disk
[2026-02-01T12:15:22.049Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1848
[2026-02-01T12:15:22.053Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:22.053Z] [BOT] 💾 AFTER MERGE: 1848 jobs (merged disk + memory)
[2026-02-01T12:15:22.055Z] [BOT] ✅ No jobs to archive (all 1848 jobs within 7-day window)
[2026-02-01T12:15:22.193Z] [BOT] 💾 Saved posted_jobs.json: 1848 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:24.014Z] [BOT] ✅ Posted message: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:15:24.015Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:15:24.015Z] [BOT] 💾 BEFORE MERGE: 1848 jobs in memory (cached)
[2026-02-01T12:15:24.052Z] [BOT] ✅ Loaded V2 database: 1848 jobs
[2026-02-01T12:15:24.052Z] [BOT] 💾 DISK STATE: 1848 jobs on disk
[2026-02-01T12:15:24.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1848
[2026-02-01T12:15:24.057Z] [BOT] 🔀 Deep merged: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:15:24.057Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1848 jobs (merged disk + memory)
[2026-02-01T12:15:24.058Z] [BOT] ✅ No jobs to archive (all 1848 jobs within 7-day window)
[2026-02-01T12:15:24.158Z] [BOT] 💾 Saved posted_jobs.json: 1848 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:25.660Z] [BOT] 📍 [ROUTING] "Data Analyst - Product & Marketing" @ ORG_b344d80e League
[2026-02-01T12:15:25.660Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T12:15:25.899Z] [BOT] ✅ Posted message: Data Analyst - Product & Marketing @ ORG_b344d80e League in #🤖・ai-jobs
[2026-02-01T12:15:25.899Z] [BOT] ✅ Industry: Data Analyst - Product & Marketing @ ORG_b344d80e League
[2026-02-01T12:15:25.900Z] [BOT] 💾 Added channel posting: Data Analyst - Product & Marketing @ ORG_b344d80e League → category channel (1 total channels)
[2026-02-01T12:15:25.900Z] [BOT] 💾 BEFORE MERGE: 1849 jobs in memory (cached)
[2026-02-01T12:15:25.933Z] [BOT] ✅ Loaded V2 database: 1848 jobs
💾 DISK STATE: 1848 jobs on disk
[2026-02-01T12:15:25.934Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1849
[2026-02-01T12:15:25.937Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:25.937Z] [BOT] 💾 AFTER MERGE: 1849 jobs (merged disk + memory)
[2026-02-01T12:15:25.939Z] [BOT] ✅ No jobs to archive (all 1849 jobs within 7-day window)
[2026-02-01T12:15:26.045Z] [BOT] 💾 Saved posted_jobs.json: 1849 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:27.740Z] [BOT] ✅ Posted message: Data Analyst - Product & Marketing @ ORG_b344d80e League in #🏠・JID_ead674af
[2026-02-01T12:15:27.740Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T12:15:27.741Z] [BOT] 💾 Added channel posting: Data Analyst - Product & Marketing @ ORG_b344d80e League → location channel (2 total channels)
[2026-02-01T12:15:27.741Z] [BOT] 💾 BEFORE MERGE: 1849 jobs in memory (cached)
[2026-02-01T12:15:27.774Z] [BOT] ✅ Loaded V2 database: 1849 jobs
💾 DISK STATE: 1849 jobs on disk
[2026-02-01T12:15:27.775Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1849
[2026-02-01T12:15:27.779Z] [BOT] 🔀 Deep merged: Data Analyst - Product & Marketing @ ORG_b344d80e League (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:15:27.779Z] [BOT] 💾 AFTER MERGE: 1849 jobs (merged disk + memory)
[2026-02-01T12:15:27.780Z] [BOT] ✅ No jobs to archive (all 1849 jobs within 7-day window)
[2026-02-01T12:15:27.870Z] [BOT] 💾 Saved posted_jobs.json: 1849 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:29.372Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T12:15:29.372Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T12:15:29.644Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2026-02-01T12:15:29.645Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T12:15:29.645Z] [BOT] 💾 BEFORE MERGE: 1850 jobs in memory (cached)
[2026-02-01T12:15:29.679Z] [BOT] ✅ Loaded V2 database: 1849 jobs
💾 DISK STATE: 1849 jobs on disk
[2026-02-01T12:15:29.679Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1850
[2026-02-01T12:15:29.683Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1850 jobs (merged disk + memory)
[2026-02-01T12:15:29.684Z] [BOT] ✅ No jobs to archive (all 1850 jobs within 7-day window)
[2026-02-01T12:15:29.788Z] [BOT] 💾 Saved posted_jobs.json: 1850 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:31.522Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:15:31.522Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T12:15:31.522Z] [BOT] 💾 BEFORE MERGE: 1850 jobs in memory (cached)
[2026-02-01T12:15:31.556Z] [BOT] ✅ Loaded V2 database: 1850 jobs
💾 DISK STATE: 1850 jobs on disk
[2026-02-01T12:15:31.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1850
[2026-02-01T12:15:31.560Z] [BOT] 🔀 Deep merged: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:15:31.560Z] [BOT] 💾 AFTER MERGE: 1850 jobs (merged disk + memory)
[2026-02-01T12:15:31.561Z] [BOT] ✅ No jobs to archive (all 1850 jobs within 7-day window)
[2026-02-01T12:15:31.656Z] [BOT] 💾 Saved posted_jobs.json: 1850 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:36.158Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-02-01T12:15:36.159Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T12:15:36.159Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T12:15:36.689Z] [BOT] ✅ Posted message: Entry Level Business/Data Analyst @ 360 IT Professionals in #📊・JID_fb739488
  ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2026-02-01T12:15:36.690Z] [BOT] 💾 Added channel posting: Entry Level Business/Data Analyst @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T12:15:36.690Z] [BOT] 💾 BEFORE MERGE: 1851 jobs in memory (cached)
[2026-02-01T12:15:36.725Z] [BOT] ✅ Loaded V2 database: 1850 jobs
💾 DISK STATE: 1850 jobs on disk
[2026-02-01T12:15:36.725Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1851
[2026-02-01T12:15:36.728Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1851 jobs (merged disk + memory)
[2026-02-01T12:15:36.729Z] [BOT] ✅ No jobs to archive (all 1851 jobs within 7-day window)
[2026-02-01T12:15:36.850Z] [BOT] 💾 Saved posted_jobs.json: 1851 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:38.617Z] [BOT] ✅ Posted message: Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:15:38.617Z] [BOT] 💾 Added channel posting: Entry Level Business/Data Analyst @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T12:15:38.618Z] [BOT] 💾 BEFORE MERGE: 1851 jobs in memory (cached)
[2026-02-01T12:15:38.651Z] [BOT] ✅ Loaded V2 database: 1851 jobs
💾 DISK STATE: 1851 jobs on disk
[2026-02-01T12:15:38.652Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1851
[2026-02-01T12:15:38.655Z] [BOT] 🔀 Deep merged: Entry Level Business/Data Analyst @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:15:38.655Z] [BOT] 💾 AFTER MERGE: 1851 jobs (merged disk + memory)
[2026-02-01T12:15:38.656Z] [BOT] ✅ No jobs to archive (all 1851 jobs within 7-day window)
[2026-02-01T12:15:38.766Z] [BOT] 💾 Saved posted_jobs.json: 1851 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:40.266Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1 - WA" @ ORG_52575429 Consulting
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T12:15:40.266Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T12:15:40.555Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #📊・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting
[2026-02-01T12:15:40.555Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T12:15:40.556Z] [BOT] 💾 BEFORE MERGE: 1852 jobs in memory (cached)
[2026-02-01T12:15:40.591Z] [BOT] ✅ Loaded V2 database: 1851 jobs
💾 DISK STATE: 1851 jobs on disk
[2026-02-01T12:15:40.591Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1852
[2026-02-01T12:15:40.594Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:40.594Z] [BOT] 💾 AFTER MERGE: 1852 jobs (merged disk + memory)
[2026-02-01T12:15:40.596Z] [BOT] ✅ No jobs to archive (all 1852 jobs within 7-day window)
[2026-02-01T12:15:40.692Z] [BOT] 💾 Saved posted_jobs.json: 1852 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:42.431Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T12:15:42.432Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T12:15:42.432Z] [BOT] 💾 BEFORE MERGE: 1852 jobs in memory (cached)
[2026-02-01T12:15:42.470Z] [BOT] ✅ Loaded V2 database: 1852 jobs
💾 DISK STATE: 1852 jobs on disk
[2026-02-01T12:15:42.470Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1852
[2026-02-01T12:15:42.475Z] [BOT] 🔀 Deep merged: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:15:42.475Z] [BOT] 💾 AFTER MERGE: 1852 jobs (merged disk + memory)
[2026-02-01T12:15:42.476Z] [BOT] ✅ No jobs to archive (all 1852 jobs within 7-day window)
[2026-02-01T12:15:42.586Z] [BOT] 💾 Saved posted_jobs.json: 1852 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:44.088Z] [BOT] 📍 [ROUTING] "Data Analyst" @ 360 IT Professionals
[2026-02-01T12:15:44.088Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T12:15:44.473Z] [BOT] ✅ Posted message: Data Analyst @ 360 IT Professionals in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ 360 IT Professionals
[2026-02-01T12:15:44.474Z] [BOT] 💾 Added channel posting: Data Analyst @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T12:15:44.474Z] [BOT] 💾 BEFORE MERGE: 1853 jobs in memory (cached)
[2026-02-01T12:15:44.509Z] [BOT] ✅ Loaded V2 database: 1852 jobs
💾 DISK STATE: 1852 jobs on disk
[2026-02-01T12:15:44.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1853
[2026-02-01T12:15:44.513Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:44.514Z] [BOT] 💾 AFTER MERGE: 1853 jobs (merged disk + memory)
[2026-02-01T12:15:44.514Z] [BOT] ✅ No jobs to archive (all 1853 jobs within 7-day window)
[2026-02-01T12:15:44.620Z] [BOT] 💾 Saved posted_jobs.json: 1853 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:46.322Z] [BOT] ✅ Posted message: Data Analyst @ 360 IT Professionals in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:15:46.323Z] [BOT] 💾 Added channel posting: Data Analyst @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T12:15:46.323Z] [BOT] 💾 BEFORE MERGE: 1853 jobs in memory (cached)
[2026-02-01T12:15:46.358Z] [BOT] ✅ Loaded V2 database: 1853 jobs
💾 DISK STATE: 1853 jobs on disk
[2026-02-01T12:15:46.358Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1853
[2026-02-01T12:15:46.361Z] [BOT] 🔀 Deep merged: Data Analyst @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:15:46.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1853 jobs (merged disk + memory)
[2026-02-01T12:15:46.362Z] [BOT] ✅ No jobs to archive (all 1853 jobs within 7-day window)
[2026-02-01T12:15:46.482Z] [BOT] 💾 Saved posted_jobs.json: 1853 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:50.982Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-01T12:15:50.984Z] [BOT] 📍 [ROUTING] "Data Security Analyst - Cisco Certified - Linux" @ 360 IT Professionals
   Category: TECH (matched: "data")
[2026-02-01T12:15:50.984Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:15:51.337Z] [BOT] ✅ Posted message: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals
[2026-02-01T12:15:51.338Z] [BOT] 💾 Added channel posting: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T12:15:51.338Z] [BOT] 💾 BEFORE MERGE: 1854 jobs in memory (cached)
[2026-02-01T12:15:51.372Z] [BOT] ✅ Loaded V2 database: 1853 jobs
💾 DISK STATE: 1853 jobs on disk
[2026-02-01T12:15:51.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1854
[2026-02-01T12:15:51.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:51.376Z] [BOT] 💾 AFTER MERGE: 1854 jobs (merged disk + memory)
[2026-02-01T12:15:51.377Z] [BOT] ✅ No jobs to archive (all 1854 jobs within 7-day window)
[2026-02-01T12:15:51.467Z] [BOT] 💾 Saved posted_jobs.json: 1854 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:53.144Z] [BOT] ✅ Posted message: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T12:15:53.144Z] [BOT] 💾 Added channel posting: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T12:15:53.145Z] [BOT] 💾 BEFORE MERGE: 1854 jobs in memory (cached)
[2026-02-01T12:15:53.180Z] [BOT] ✅ Loaded V2 database: 1854 jobs
💾 DISK STATE: 1854 jobs on disk
[2026-02-01T12:15:53.180Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1854
[2026-02-01T12:15:53.183Z] [BOT] 🔀 Deep merged: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:15:53.183Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1854 jobs (merged disk + memory)
[2026-02-01T12:15:53.184Z] [BOT] ✅ No jobs to archive (all 1854 jobs within 7-day window)
[2026-02-01T12:15:53.288Z] [BOT] 💾 Saved posted_jobs.json: 1854 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:54.790Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:15:54.982Z] [BOT] ✅ Posted message: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c
[2026-02-01T12:15:54.983Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T12:15:54.983Z] [BOT] 💾 BEFORE MERGE: 1855 jobs in memory (cached)
[2026-02-01T12:15:55.019Z] [BOT] ✅ Loaded V2 database: 1854 jobs
💾 DISK STATE: 1854 jobs on disk
[2026-02-01T12:15:55.019Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1855
[2026-02-01T12:15:55.022Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:55.022Z] [BOT] 💾 AFTER MERGE: 1855 jobs (merged disk + memory)
[2026-02-01T12:15:55.023Z] [BOT] ✅ No jobs to archive (all 1855 jobs within 7-day window)
[2026-02-01T12:15:55.117Z] [BOT] 💾 Saved posted_jobs.json: 1855 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:56.888Z] [BOT] ✅ Posted message: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T12:15:56.889Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T12:15:56.889Z] [BOT] 💾 BEFORE MERGE: 1855 jobs in memory (cached)
[2026-02-01T12:15:56.924Z] [BOT] ✅ Loaded V2 database: 1855 jobs
[2026-02-01T12:15:56.924Z] [BOT] 💾 DISK STATE: 1855 jobs on disk
[2026-02-01T12:15:56.924Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1855
[2026-02-01T12:15:56.927Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:15:56.927Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1855 jobs (merged disk + memory)
[2026-02-01T12:15:56.928Z] [BOT] ✅ No jobs to archive (all 1855 jobs within 7-day window)
[2026-02-01T12:15:57.030Z] [BOT] 💾 Saved posted_jobs.json: 1855 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:15:58.533Z] [BOT] 📍 [ROUTING] "Salesforce BA" @ 360 IT Professionals
   Category: TECH (matched: "project manager")
[2026-02-01T12:15:58.534Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T12:15:58.912Z] [BOT] ✅ Posted message: Salesforce BA @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Salesforce BA @ 360 IT Professionals
[2026-02-01T12:15:58.913Z] [BOT] 💾 Added channel posting: Salesforce BA @ 360 IT Professionals → category channel (1 total channels)
💾 BEFORE MERGE: 1856 jobs in memory (cached)
[2026-02-01T12:15:58.948Z] [BOT] ✅ Loaded V2 database: 1855 jobs
💾 DISK STATE: 1855 jobs on disk
[2026-02-01T12:15:58.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1856
[2026-02-01T12:15:58.952Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:15:58.952Z] [BOT] 💾 AFTER MERGE: 1856 jobs (merged disk + memory)
[2026-02-01T12:15:58.953Z] [BOT] ✅ No jobs to archive (all 1856 jobs within 7-day window)
[2026-02-01T12:15:59.056Z] [BOT] 💾 Saved posted_jobs.json: 1856 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:16:00.773Z] [BOT] ✅ Posted message: Salesforce BA @ 360 IT Professionals in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:16:00.774Z] [BOT] 💾 Added channel posting: Salesforce BA @ 360 IT Professionals → location channel (2 total channels)
💾 BEFORE MERGE: 1856 jobs in memory (cached)
[2026-02-01T12:16:00.808Z] [BOT] ✅ Loaded V2 database: 1856 jobs
💾 DISK STATE: 1856 jobs on disk
[2026-02-01T12:16:00.809Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1856
[2026-02-01T12:16:00.812Z] [BOT] 🔀 Deep merged: Salesforce BA @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T12:16:00.812Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1856 jobs (merged disk + memory)
[2026-02-01T12:16:00.813Z] [BOT] ✅ No jobs to archive (all 1856 jobs within 7-day window)
[2026-02-01T12:16:00.915Z] [BOT] 💾 Saved posted_jobs.json: 1856 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:16:05.418Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T12:16:05.419Z] [BOT] 📍 [ROUTING] "Analyst 2 - Technical Analysis" @ ORG_52575429 Consulting
   Category: FINANCE (matched: "tax")
[2026-02-01T12:16:05.419Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T12:16:05.620Z] [BOT] ✅ Posted message: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #💰・finance-jobs
  ✅ Industry: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting
[2026-02-01T12:16:05.621Z] [BOT] 💾 Added channel posting: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T12:16:05.621Z] [BOT] 💾 BEFORE MERGE: 1857 jobs in memory (cached)
[2026-02-01T12:16:05.655Z] [BOT] ✅ Loaded V2 database: 1856 jobs
💾 DISK STATE: 1856 jobs on disk
[2026-02-01T12:16:05.655Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1857
[2026-02-01T12:16:05.659Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:16:05.659Z] [BOT] 💾 AFTER MERGE: 1857 jobs (merged disk + memory)
[2026-02-01T12:16:05.660Z] [BOT] ✅ No jobs to archive (all 1857 jobs within 7-day window)
[2026-02-01T12:16:05.777Z] [BOT] 💾 Saved posted_jobs.json: 1857 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:16:07.548Z] [BOT] ✅ Posted message: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T12:16:07.549Z] [BOT] 💾 Added channel posting: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T12:16:07.549Z] [BOT] 💾 BEFORE MERGE: 1857 jobs in memory (cached)
[2026-02-01T12:16:07.582Z] [BOT] ✅ Loaded V2 database: 1857 jobs
💾 DISK STATE: 1857 jobs on disk
[2026-02-01T12:16:07.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1857
[2026-02-01T12:16:07.585Z] [BOT] 🔀 Deep merged: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T12:16:07.585Z] [BOT] 💾 AFTER MERGE: 1857 jobs (merged disk + memory)
[2026-02-01T12:16:07.587Z] [BOT] ✅ No jobs to archive (all 1857 jobs within 7-day window)
[2026-02-01T12:16:07.695Z] [BOT] 💾 Saved posted_jobs.json: 1857 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:16:12.194Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T12:16:12.196Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2b3bb4bf..." not found, but found as SHA256 "1a64de5d6de8b1d6"
[2026-02-01T12:16:12.196Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_add847e0-detail (posted within 7 days)
[2026-02-01T12:16:12.196Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1e79b366..." not found, but found as SHA256 "111ccab8d73c0470"
[2026-02-01T12:16:12.197Z] [BOT] ⏭️  Skipping duplicate: JID_69e1bbf2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dc9de2da..." not found, but found as SHA256 "80c6492640a8a050"
⏭️  Skipping duplicate: JID_6796d1d6-CH_f2b79517 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "871754ac9ea10874"
⏭️  Skipping duplicate: JID_731e0868 (posted within 7 days)
[2026-02-01T12:16:12.197Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "14ec0c1b70867b7f"
[2026-02-01T12:16:12.197Z] [BOT] ⏭️  Skipping duplicate: JID_033a2d3b (posted within 7 days)
[2026-02-01T12:16:12.198Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "761c73dd161fe413"
[2026-02-01T12:16:12.198Z] [BOT] ⏭️  Skipping duplicate: JID_46e0260f (posted within 7 days)
[2026-02-01T12:16:12.198Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "8d83c8c77631ba72"
⏭️  Skipping duplicate: JID_147cd798 (posted within 7 days)
[2026-02-01T12:16:12.198Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c6cc73b..." not found, but found as SHA256 "50f27332076adff9"
[2026-02-01T12:16:12.198Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2afd3302-detail (posted within 7 days)
[2026-02-01T12:16:12.198Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "a01157c6bc8ebec5"
⏭️  Skipping duplicate: JID_84048b2c (posted within 7 days)
[2026-02-01T12:16:12.199Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "bd9da85c4ff7b7fd"
[2026-02-01T12:16:12.199Z] [BOT] ⏭️  Skipping duplicate: JID_ca6171f1 (posted within 7 days)
[2026-02-01T12:16:12.316Z] [BOT] ✅ Loaded pending queue: 2948 total (1061 pending, 50 enriched, 1837 posted)
[2026-02-01T12:16:12.509Z] [BOT] ✅ Saved pending queue: 2948 total (1061 pending, 40 enriched, 1847 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T12:16:12.509Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T12:16:12.599Z] [BOT] 📂 Loaded 11928 existing routing entries
[2026-02-01T12:16:12.737Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T12:16:12.738Z] [BOT] Total entries: 11938
   Timestamp: 2026-02-01T12:16:12.689Z
[2026-02-01T12:16:12.738Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T12:16:12.738Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T12:16:12.739Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #🌉・JID_739bbc0b: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 3 posts
[2026-02-01T12:16:12.739Z] [BOT] 4. #💻・tech-jobs: 3 posts
     5. #🌲・JID_efdf5921: 2 posts
[2026-02-01T12:16:12.739Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1857 jobs in memory (cached)
[2026-02-01T12:16:12.782Z] [BOT] ✅ Loaded V2 database: 1857 jobs
💾 DISK STATE: 1857 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1857
[2026-02-01T12:16:12.790Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T12:16:12.790Z] [BOT] 💾 AFTER MERGE: 1857 jobs (merged disk + memory)
[2026-02-01T12:16:12.801Z] [BOT] ✅ No jobs to archive (all 1857 jobs within 7-day window)
[2026-02-01T12:16:12.900Z] [BOT] 💾 Saved posted_jobs.json: 1857 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T12:16:12.901Z] [BOT] ✅ Database saved successfully
[2026-02-01T12:16:14.937Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*