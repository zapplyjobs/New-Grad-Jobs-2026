# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T16:26:58.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T16:26:03.027Z] ========================================
[2026-02-01T16:26:03.029Z] Discord Bot Execution Log
[2026-02-01T16:26:03.029Z] Environment: GitHub Actions
[2026-02-01T16:26:03.029Z] Node Version: v20.20.0
[2026-02-01T16:26:03.029Z] ========================================
[2026-02-01T16:26:03.029Z] Environment Variables Check:
[2026-02-01T16:26:03.029Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T16:26:03.029Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T16:26:03.030Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T16:26:03.030Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T16:26:03.030Z] 
Multi-Channel Configuration:
[2026-02-01T16:26:03.030Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T16:26:03.030Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T16:26:03.030Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:26:03.030Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T16:26:03.031Z] 
Data Files Check:
[2026-02-01T16:26:03.031Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59423 bytes)
[2026-02-01T16:26:03.082Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10163267 bytes)
[2026-02-01T16:26:03.082Z] 
========================================
[2026-02-01T16:26:03.082Z] Starting Enhanced Discord Bot...
[2026-02-01T16:26:03.082Z] ========================================
[2026-02-01T16:26:03.683Z] [BOT] ✅ Loaded V2 database: 2007 jobs
[2026-02-01T16:26:04.393Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T16:26:04.393Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T16:26:04.394Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T16:26:04.531Z] [BOT] ✅ Loaded pending queue: 2947 total (900 pending, 50 enriched, 1997 posted)
[2026-02-01T16:26:04.531Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:26:04.532Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T16:26:04.533Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T16:26:04.533Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:26:04.533Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T16:26:04.533Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T16:26:04.534Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T16:26:04.534Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T16:26:04.534Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T16:26:04.535Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T16:26:04.535Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T16:26:04.535Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T16:26:04.535Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T16:26:04.536Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T16:26:04.551Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T16:26:04.551Z] [BOT] 🚫 Skipping blacklisted job: Graduate Leadership Program - AI & Software Engineering at PMG
[2026-02-01T16:26:04.674Z] [BOT] ✅ Loaded pending queue: 2947 total (900 pending, 50 enriched, 1997 posted)
[2026-02-01T16:26:04.881Z] [BOT] ✅ Saved pending queue: 2946 total (900 pending, 49 enriched, 1997 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T16:26:04.882Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T16:26:04.883Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T16:26:04.883Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T16:26:04.883Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T16:26:04.885Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-01T16:26:04.886Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T16:26:04.886Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:26:04.904Z] [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T16:26:05.316Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T16:26:05.317Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T16:26:05.318Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T16:26:05.318Z] [BOT] 💾 BEFORE MERGE: 2008 jobs in memory (cached)
[2026-02-01T16:26:05.360Z] [BOT] ✅ Loaded V2 database: 2007 jobs
💾 DISK STATE: 2007 jobs on disk
[2026-02-01T16:26:05.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2008
[2026-02-01T16:26:05.365Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:05.365Z] [BOT] 💾 AFTER MERGE: 2008 jobs (merged disk + memory)
[2026-02-01T16:26:05.366Z] [BOT] ✅ No jobs to archive (all 2008 jobs within 7-day window)
[2026-02-01T16:26:05.472Z] [BOT] 💾 Saved posted_jobs.json: 2008 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:07.165Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
[2026-02-01T16:26:07.165Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:26:07.166Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T16:26:07.166Z] [BOT] 💾 BEFORE MERGE: 2008 jobs in memory (cached)
[2026-02-01T16:26:07.201Z] [BOT] ✅ Loaded V2 database: 2008 jobs
[2026-02-01T16:26:07.201Z] [BOT] 💾 DISK STATE: 2008 jobs on disk
[2026-02-01T16:26:07.202Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2008
[2026-02-01T16:26:07.206Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:07.206Z] [BOT] 💾 AFTER MERGE: 2008 jobs (merged disk + memory)
[2026-02-01T16:26:07.207Z] [BOT] ✅ No jobs to archive (all 2008 jobs within 7-day window)
[2026-02-01T16:26:07.311Z] [BOT] 💾 Saved posted_jobs.json: 2008 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:08.813Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6ab523c5 Rings
   Category: TECH (matched: "software")
[2026-02-01T16:26:08.813Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:26:08.980Z] [BOT] ✅ Posted message: Software Developer @ ORG_6ab523c5 Rings in #💻・tech-jobs
[2026-02-01T16:26:08.980Z] [BOT] ✅ Industry: Software Developer @ ORG_6ab523c5 Rings
[2026-02-01T16:26:08.981Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6ab523c5 Rings → category channel (1 total channels)
[2026-02-01T16:26:08.981Z] [BOT] 💾 BEFORE MERGE: 2009 jobs in memory (cached)
[2026-02-01T16:26:09.017Z] [BOT] ✅ Loaded V2 database: 2008 jobs
💾 DISK STATE: 2008 jobs on disk
[2026-02-01T16:26:09.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2009
[2026-02-01T16:26:09.021Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:09.021Z] [BOT] 💾 AFTER MERGE: 2009 jobs (merged disk + memory)
[2026-02-01T16:26:09.022Z] [BOT] ✅ No jobs to archive (all 2009 jobs within 7-day window)
[2026-02-01T16:26:09.126Z] [BOT] 💾 Saved posted_jobs.json: 2009 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:10.837Z] [BOT] ✅ Posted message: Software Developer @ ORG_6ab523c5 Rings in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T16:26:10.838Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6ab523c5 Rings → location channel (2 total channels)
[2026-02-01T16:26:10.838Z] [BOT] 💾 BEFORE MERGE: 2009 jobs in memory (cached)
[2026-02-01T16:26:10.873Z] [BOT] ✅ Loaded V2 database: 2009 jobs
💾 DISK STATE: 2009 jobs on disk
[2026-02-01T16:26:10.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2009
[2026-02-01T16:26:10.877Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_6ab523c5 Rings (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:26:10.877Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2009 jobs (merged disk + memory)
[2026-02-01T16:26:10.878Z] [BOT] ✅ No jobs to archive (all 2009 jobs within 7-day window)
[2026-02-01T16:26:10.984Z] [BOT] 💾 Saved posted_jobs.json: 2009 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:12.485Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_eb0050f7
   Category: TECH (matched: "software")
[2026-02-01T16:26:12.486Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:26:12.715Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_eb0050f7 in #💻・tech-jobs
  ✅ Industry: Software Engineer - New Grad @ ORG_eb0050f7
[2026-02-01T16:26:12.716Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_eb0050f7 → category channel (1 total channels)
[2026-02-01T16:26:12.716Z] [BOT] 💾 BEFORE MERGE: 2010 jobs in memory (cached)
[2026-02-01T16:26:12.757Z] [BOT] ✅ Loaded V2 database: 2009 jobs
💾 DISK STATE: 2009 jobs on disk
[2026-02-01T16:26:12.757Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2010
[2026-02-01T16:26:12.761Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:12.761Z] [BOT] 💾 AFTER MERGE: 2010 jobs (merged disk + memory)
[2026-02-01T16:26:12.763Z] [BOT] ✅ No jobs to archive (all 2010 jobs within 7-day window)
[2026-02-01T16:26:12.878Z] [BOT] 💾 Saved posted_jobs.json: 2010 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:14.711Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_eb0050f7 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T16:26:14.712Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_eb0050f7 → location channel (2 total channels)
[2026-02-01T16:26:14.712Z] [BOT] 💾 BEFORE MERGE: 2010 jobs in memory (cached)
[2026-02-01T16:26:14.746Z] [BOT] ✅ Loaded V2 database: 2010 jobs
💾 DISK STATE: 2010 jobs on disk
[2026-02-01T16:26:14.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2010
[2026-02-01T16:26:14.749Z] [BOT] 🔀 Deep merged: Software Engineer - New Grad @ ORG_eb0050f7 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:14.749Z] [BOT] 💾 AFTER MERGE: 2010 jobs (merged disk + memory)
[2026-02-01T16:26:14.751Z] [BOT] ✅ No jobs to archive (all 2010 jobs within 7-day window)
[2026-02-01T16:26:14.862Z] [BOT] 💾 Saved posted_jobs.json: 2010 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:19.359Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-02-01T16:26:19.361Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:26:19.361Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:26:19.626Z] [BOT] ✅ Posted message: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb
[2026-02-01T16:26:19.627Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:19.627Z] [BOT] 💾 BEFORE MERGE: 2011 jobs in memory (cached)
[2026-02-01T16:26:19.661Z] [BOT] ✅ Loaded V2 database: 2010 jobs
💾 DISK STATE: 2010 jobs on disk
[2026-02-01T16:26:19.661Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2011
[2026-02-01T16:26:19.665Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:19.665Z] [BOT] 💾 AFTER MERGE: 2011 jobs (merged disk + memory)
[2026-02-01T16:26:19.666Z] [BOT] ✅ No jobs to archive (all 2011 jobs within 7-day window)
[2026-02-01T16:26:19.759Z] [BOT] 💾 Saved posted_jobs.json: 2011 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:21.776Z] [BOT] ✅ Posted message: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:26:21.777Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:21.777Z] [BOT] 💾 BEFORE MERGE: 2011 jobs in memory (cached)
[2026-02-01T16:26:21.828Z] [BOT] ✅ Loaded V2 database: 2011 jobs
💾 DISK STATE: 2011 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2011
[2026-02-01T16:26:21.831Z] [BOT] 🔀 Deep merged: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:26:21.831Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2011 jobs (merged disk + memory)
[2026-02-01T16:26:21.832Z] [BOT] ✅ No jobs to archive (all 2011 jobs within 7-day window)
[2026-02-01T16:26:21.925Z] [BOT] 💾 Saved posted_jobs.json: 2011 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:23.428Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T16:26:23.428Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:26:23.680Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb
[2026-02-01T16:26:23.681Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:23.681Z] [BOT] 💾 BEFORE MERGE: 2012 jobs in memory (cached)
[2026-02-01T16:26:23.716Z] [BOT] ✅ Loaded V2 database: 2011 jobs
💾 DISK STATE: 2011 jobs on disk
[2026-02-01T16:26:23.716Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2012
[2026-02-01T16:26:23.719Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:23.719Z] [BOT] 💾 AFTER MERGE: 2012 jobs (merged disk + memory)
[2026-02-01T16:26:23.720Z] [BOT] ✅ No jobs to archive (all 2012 jobs within 7-day window)
[2026-02-01T16:26:23.831Z] [BOT] 💾 Saved posted_jobs.json: 2012 active jobs
[2026-02-01T16:26:23.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:25.547Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T16:26:25.548Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:26:25.548Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:25.548Z] [BOT] 💾 BEFORE MERGE: 2012 jobs in memory (cached)
[2026-02-01T16:26:25.582Z] [BOT] ✅ Loaded V2 database: 2012 jobs
💾 DISK STATE: 2012 jobs on disk
[2026-02-01T16:26:25.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2012
[2026-02-01T16:26:25.586Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:25.586Z] [BOT] 💾 AFTER MERGE: 2012 jobs (merged disk + memory)
[2026-02-01T16:26:25.587Z] [BOT] ✅ No jobs to archive (all 2012 jobs within 7-day window)
[2026-02-01T16:26:25.685Z] [BOT] 💾 Saved posted_jobs.json: 2012 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:27.187Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:26:27.187Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:26:27.382Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2026-02-01T16:26:27.383Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:27.383Z] [BOT] 💾 BEFORE MERGE: 2013 jobs in memory (cached)
[2026-02-01T16:26:27.418Z] [BOT] ✅ Loaded V2 database: 2012 jobs
💾 DISK STATE: 2012 jobs on disk
[2026-02-01T16:26:27.418Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2013
[2026-02-01T16:26:27.421Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:27.421Z] [BOT] 💾 AFTER MERGE: 2013 jobs (merged disk + memory)
[2026-02-01T16:26:27.422Z] [BOT] ✅ No jobs to archive (all 2013 jobs within 7-day window)
[2026-02-01T16:26:27.526Z] [BOT] 💾 Saved posted_jobs.json: 2013 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:29.469Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🌲・JID_efdf5921
[2026-02-01T16:26:29.469Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:26:29.469Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:29.469Z] [BOT] 💾 BEFORE MERGE: 2013 jobs in memory (cached)
[2026-02-01T16:26:29.505Z] [BOT] ✅ Loaded V2 database: 2013 jobs
💾 DISK STATE: 2013 jobs on disk
[2026-02-01T16:26:29.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2013
[2026-02-01T16:26:29.509Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:29.509Z] [BOT] 💾 AFTER MERGE: 2013 jobs (merged disk + memory)
[2026-02-01T16:26:29.510Z] [BOT] ✅ No jobs to archive (all 2013 jobs within 7-day window)
[2026-02-01T16:26:29.615Z] [BOT] 💾 Saved posted_jobs.json: 2013 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:31.118Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:26:31.118Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:26:31.401Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb
[2026-02-01T16:26:31.402Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:31.402Z] [BOT] 💾 BEFORE MERGE: 2014 jobs in memory (cached)
[2026-02-01T16:26:31.437Z] [BOT] ✅ Loaded V2 database: 2013 jobs
💾 DISK STATE: 2013 jobs on disk
[2026-02-01T16:26:31.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2014
[2026-02-01T16:26:31.441Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:31.441Z] [BOT] 💾 AFTER MERGE: 2014 jobs (merged disk + memory)
[2026-02-01T16:26:31.442Z] [BOT] ✅ No jobs to archive (all 2014 jobs within 7-day window)
[2026-02-01T16:26:31.546Z] [BOT] 💾 Saved posted_jobs.json: 2014 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:35.120Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:26:35.121Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:35.121Z] [BOT] 💾 BEFORE MERGE: 2014 jobs in memory (cached)
[2026-02-01T16:26:35.156Z] [BOT] ✅ Loaded V2 database: 2014 jobs
💾 DISK STATE: 2014 jobs on disk
[2026-02-01T16:26:35.156Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2014
[2026-02-01T16:26:35.160Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:26:35.160Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2014 jobs (merged disk + memory)
[2026-02-01T16:26:35.161Z] [BOT] ✅ No jobs to archive (all 2014 jobs within 7-day window)
[2026-02-01T16:26:35.268Z] [BOT] 💾 Saved posted_jobs.json: 2014 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:36.769Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T16:26:36.769Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:26:36.966Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c
[2026-02-01T16:26:36.967Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T16:26:36.967Z] [BOT] 💾 BEFORE MERGE: 2015 jobs in memory (cached)
[2026-02-01T16:26:37.003Z] [BOT] ✅ Loaded V2 database: 2014 jobs
💾 DISK STATE: 2014 jobs on disk
[2026-02-01T16:26:37.003Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2015
[2026-02-01T16:26:37.007Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:37.007Z] [BOT] 💾 AFTER MERGE: 2015 jobs (merged disk + memory)
[2026-02-01T16:26:37.008Z] [BOT] ✅ No jobs to archive (all 2015 jobs within 7-day window)
[2026-02-01T16:26:37.114Z] [BOT] 💾 Saved posted_jobs.json: 2015 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:38.839Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:26:38.839Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T16:26:38.839Z] [BOT] 💾 BEFORE MERGE: 2015 jobs in memory (cached)
[2026-02-01T16:26:38.873Z] [BOT] ✅ Loaded V2 database: 2015 jobs
💾 DISK STATE: 2015 jobs on disk
[2026-02-01T16:26:38.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2015
[2026-02-01T16:26:38.877Z] [BOT] 🔀 Deep merged: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:38.877Z] [BOT] 💾 AFTER MERGE: 2015 jobs (merged disk + memory)
[2026-02-01T16:26:38.879Z] [BOT] ✅ No jobs to archive (all 2015 jobs within 7-day window)
[2026-02-01T16:26:38.969Z] [BOT] 💾 Saved posted_jobs.json: 2015 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:43.470Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T16:26:43.471Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - BS/MS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T16:26:43.471Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T16:26:43.732Z] [BOT] ✅ Posted message: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-02-01T16:26:43.733Z] [BOT] ✅ Industry: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb
[2026-02-01T16:26:43.733Z] [BOT] 💾 Added channel posting: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:43.733Z] [BOT] 💾 BEFORE MERGE: 2016 jobs in memory (cached)
[2026-02-01T16:26:43.767Z] [BOT] ✅ Loaded V2 database: 2015 jobs
💾 DISK STATE: 2015 jobs on disk
[2026-02-01T16:26:43.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2016
[2026-02-01T16:26:43.770Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:43.770Z] [BOT] 💾 AFTER MERGE: 2016 jobs (merged disk + memory)
[2026-02-01T16:26:43.771Z] [BOT] ✅ No jobs to archive (all 2016 jobs within 7-day window)
[2026-02-01T16:26:43.866Z] [BOT] 💾 Saved posted_jobs.json: 2016 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:45.602Z] [BOT] ✅ Posted message: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:26:45.603Z] [BOT] 💾 Added channel posting: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:45.603Z] [BOT] 💾 BEFORE MERGE: 2016 jobs in memory (cached)
[2026-02-01T16:26:45.637Z] [BOT] ✅ Loaded V2 database: 2016 jobs
💾 DISK STATE: 2016 jobs on disk
[2026-02-01T16:26:45.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2016
[2026-02-01T16:26:45.641Z] [BOT] 🔀 Deep merged: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:26:45.641Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2016 jobs (merged disk + memory)
[2026-02-01T16:26:45.642Z] [BOT] ✅ No jobs to archive (all 2016 jobs within 7-day window)
[2026-02-01T16:26:45.744Z] [BOT] 💾 Saved posted_jobs.json: 2016 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:47.243Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-02-01T16:26:47.243Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T16:26:47.505Z] [BOT] ✅ Posted message: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-02-01T16:26:47.505Z] [BOT] ✅ Industry: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T16:26:47.506Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:26:47.506Z] [BOT] 💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-01T16:26:47.541Z] [BOT] ✅ Loaded V2 database: 2016 jobs
💾 DISK STATE: 2016 jobs on disk
[2026-02-01T16:26:47.542Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-01T16:26:47.545Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:47.545Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-01T16:26:47.547Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-01T16:26:47.642Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:49.365Z] [BOT] ✅ Posted message: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:26:49.366Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:26:49.366Z] [BOT] 💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-01T16:26:49.401Z] [BOT] ✅ Loaded V2 database: 2017 jobs
💾 DISK STATE: 2017 jobs on disk
[2026-02-01T16:26:49.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-01T16:26:49.404Z] [BOT] 🔀 Deep merged: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:26:49.404Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-01T16:26:49.405Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-01T16:26:49.508Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:54.011Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T16:26:54.013Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "38e6689caace0707"
[2026-02-01T16:26:54.013Z] [BOT] ⏭️  Skipping duplicate: JID_5c12bd95 (posted within 7 days)
[2026-02-01T16:26:54.013Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_14a9c95a..." not found, but found as SHA256 "d0898f3c9886c268"
[2026-02-01T16:26:54.013Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_4edc014c (posted within 7 days)
[2026-02-01T16:26:54.013Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_02bef08f..." not found, but found as SHA256 "ea38a29e83173363"
[2026-02-01T16:26:54.013Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05d72209 (posted within 7 days)
[2026-02-01T16:26:54.014Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2671be32..." not found, but found as SHA256 "21c9fcd74f60cd29"
⏭️  Skipping duplicate: JID_6796d1d6-CH_3e50c48f (posted within 7 days)
[2026-02-01T16:26:54.014Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0f7298b1..." not found, but found as SHA256 "f5a8b63e203a7d0b"
[2026-02-01T16:26:54.014Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c5f835f9 (posted within 7 days)
[2026-02-01T16:26:54.014Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f51c9228..." not found, but found as SHA256 "50d8a1c847dd6fdf"
⏭️  Skipping duplicate: JID_6796d1d6-CH_a0cb7d9e (posted within 7 days)
[2026-02-01T16:26:54.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_878b89f2..." not found, but found as SHA256 "43a2ebbb6f9ad95f"
[2026-02-01T16:26:54.015Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a77f3e49 (posted within 7 days)
[2026-02-01T16:26:54.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a4350fc2..." not found, but found as SHA256 "f541fef2035a10bd"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_eae81305-detail (posted within 7 days)
[2026-02-01T16:26:54.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_829ebc53..." not found, but found as SHA256 "15b72d6131883762"
[2026-02-01T16:26:54.015Z] [BOT] ⏭️  Skipping duplicate: JID_586e44dd (posted within 7 days)
[2026-02-01T16:26:54.016Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77a74504..." not found, but found as SHA256 "aa8606d4e7dc18ad"
[2026-02-01T16:26:54.016Z] [BOT] ⏭️  Skipping duplicate: JID_dac17d8d (posted within 7 days)
[2026-02-01T16:26:54.112Z] [BOT] ✅ Loaded pending queue: 2946 total (900 pending, 49 enriched, 1997 posted)
[2026-02-01T16:26:54.316Z] [BOT] ✅ Saved pending queue: 2946 total (900 pending, 39 enriched, 2007 posted)
[2026-02-01T16:26:54.317Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T16:26:54.407Z] [BOT] 📂 Loaded 12088 existing routing entries
[2026-02-01T16:26:54.543Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T16:26:54.543Z] [BOT] Total entries: 12098
   Timestamp: 2026-02-01T16:26:54.494Z
[2026-02-01T16:26:54.544Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 29
   Successful: 20
   Failed: 0
   Skipped: 9
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-02-01T16:26:54.544Z] [BOT] 1. #🌉・JID_739bbc0b: 5 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌲・JID_efdf5921: 3 posts
     5. #📊・JID_fb739488: 2 posts
[2026-02-01T16:26:54.546Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-01T16:26:54.587Z] [BOT] ✅ Loaded V2 database: 2017 jobs
💾 DISK STATE: 2017 jobs on disk
[2026-02-01T16:26:54.587Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-01T16:26:54.591Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:26:54.591Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-01T16:26:54.592Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-01T16:26:54.694Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:26:54.695Z] [BOT] ✅ Database saved successfully
[2026-02-01T16:26:56.735Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*