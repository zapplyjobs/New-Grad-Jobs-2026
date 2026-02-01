# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T04:23:22.495Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T04:22:31.005Z] ========================================
[2026-02-01T04:22:31.007Z] Discord Bot Execution Log
[2026-02-01T04:22:31.007Z] Environment: GitHub Actions
[2026-02-01T04:22:31.007Z] Node Version: v20.20.0
[2026-02-01T04:22:31.007Z] ========================================
[2026-02-01T04:22:31.007Z] Environment Variables Check:
[2026-02-01T04:22:31.007Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T04:22:31.008Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T04:22:31.008Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T04:22:31.008Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T04:22:31.008Z] 
Multi-Channel Configuration:
[2026-02-01T04:22:31.008Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T04:22:31.008Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.008Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.008Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T04:22:31.008Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.008Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.008Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.009Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.009Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T04:22:31.009Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T04:22:31.009Z] 
Data Files Check:
[2026-02-01T04:22:31.009Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59219 bytes)
[2026-02-01T04:22:31.056Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8931520 bytes)
[2026-02-01T04:22:31.056Z] 
========================================
[2026-02-01T04:22:31.056Z] Starting Enhanced Discord Bot...
[2026-02-01T04:22:31.056Z] ========================================
[2026-02-01T04:22:31.632Z] [BOT] ✅ Loaded V2 database: 1597 jobs
[2026-02-01T04:22:32.238Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T04:22:32.238Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T04:22:32.238Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T04:22:32.359Z] [BOT] ✅ Loaded pending queue: 2944 total (1307 pending, 50 enriched, 1587 posted)
[2026-02-01T04:22:32.359Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T04:22:32.360Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T04:22:32.360Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T04:22:32.360Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T04:22:32.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T04:22:32.361Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T04:22:32.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T04:22:32.361Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T04:22:32.362Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T04:22:32.362Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T04:22:32.362Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T04:22:32.363Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T04:22:32.363Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T04:22:32.363Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T04:22:32.363Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T04:22:32.363Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T04:22:32.363Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T04:22:32.375Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T04:22:32.376Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T04:22:32.376Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T04:22:32.377Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T04:22:32.377Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
   - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T04:22:32.377Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T04:22:32.380Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T04:22:32.381Z] [BOT] 📍 [ROUTING] "Data Analyst I - Consumer Loan Analytics" @ ORG_8c28bf8a
[2026-02-01T04:22:32.381Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T04:22:32.398Z] [BOT ERROR] (node:5189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T04:22:32.666Z] [BOT] ✅ Posted message: Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a in #📊・JID_fb739488
  ✅ Industry: Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a
[2026-02-01T04:22:32.667Z] [BOT] 💾 Added channel posting: Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a → category channel (1 total channels)
[2026-02-01T04:22:32.667Z] [BOT] 💾 BEFORE MERGE: 1598 jobs in memory (cached)
[2026-02-01T04:22:32.700Z] [BOT] ✅ Loaded V2 database: 1597 jobs
💾 DISK STATE: 1597 jobs on disk
[2026-02-01T04:22:32.700Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1598
[2026-02-01T04:22:32.704Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:32.704Z] [BOT] 💾 AFTER MERGE: 1598 jobs (merged disk + memory)
[2026-02-01T04:22:32.705Z] [BOT] ✅ No jobs to archive (all 1598 jobs within 7-day window)
[2026-02-01T04:22:32.800Z] [BOT] 💾 Saved posted_jobs.json: 1598 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:37.303Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T04:22:37.304Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_b18a8c08
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T04:22:37.551Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_b18a8c08 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_b18a8c08
[2026-02-01T04:22:37.552Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_b18a8c08 → category channel (1 total channels)
[2026-02-01T04:22:37.552Z] [BOT] 💾 BEFORE MERGE: 1599 jobs in memory (cached)
[2026-02-01T04:22:37.586Z] [BOT] ✅ Loaded V2 database: 1598 jobs
[2026-02-01T04:22:37.586Z] [BOT] 💾 DISK STATE: 1598 jobs on disk
[2026-02-01T04:22:37.586Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1599
[2026-02-01T04:22:37.589Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:37.590Z] [BOT] 💾 AFTER MERGE: 1599 jobs (merged disk + memory)
[2026-02-01T04:22:37.591Z] [BOT] ✅ No jobs to archive (all 1599 jobs within 7-day window)
[2026-02-01T04:22:37.684Z] [BOT] 💾 Saved posted_jobs.json: 1599 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:40.650Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_b18a8c08 in #🏠・JID_ead674af
[2026-02-01T04:22:40.651Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T04:22:40.651Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_b18a8c08 → location channel (2 total channels)
[2026-02-01T04:22:40.651Z] [BOT] 💾 BEFORE MERGE: 1599 jobs in memory (cached)
[2026-02-01T04:22:40.682Z] [BOT] ✅ Loaded V2 database: 1599 jobs
💾 DISK STATE: 1599 jobs on disk
[2026-02-01T04:22:40.682Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1599
[2026-02-01T04:22:40.686Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_b18a8c08 (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:22:40.686Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1599 jobs (merged disk + memory)
[2026-02-01T04:22:40.687Z] [BOT] ✅ No jobs to archive (all 1599 jobs within 7-day window)
[2026-02-01T04:22:40.776Z] [BOT] 💾 Saved posted_jobs.json: 1599 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:42.278Z] [BOT] 📍 [ROUTING] "Graduate Geoscientist" @ ORG_65eedb45
[2026-02-01T04:22:42.278Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T04:22:42.516Z] [BOT] ✅ Posted message: Graduate Geoscientist @ ORG_65eedb45 in #💻・tech-jobs
[2026-02-01T04:22:42.516Z] [BOT] ✅ Industry: Graduate Geoscientist @ ORG_65eedb45
[2026-02-01T04:22:42.516Z] [BOT] 💾 Added channel posting: Graduate Geoscientist @ ORG_65eedb45 → category channel (1 total channels)
[2026-02-01T04:22:42.517Z] [BOT] 💾 BEFORE MERGE: 1600 jobs in memory (cached)
[2026-02-01T04:22:42.554Z] [BOT] ✅ Loaded V2 database: 1599 jobs
💾 DISK STATE: 1599 jobs on disk
[2026-02-01T04:22:42.554Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1600
[2026-02-01T04:22:42.557Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:42.557Z] [BOT] 💾 AFTER MERGE: 1600 jobs (merged disk + memory)
[2026-02-01T04:22:42.558Z] [BOT] ✅ No jobs to archive (all 1600 jobs within 7-day window)
[2026-02-01T04:22:42.658Z] [BOT] 💾 Saved posted_jobs.json: 1600 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:44.375Z] [BOT] ✅ Posted message: Graduate Geoscientist @ ORG_65eedb45 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T04:22:44.375Z] [BOT] 💾 Added channel posting: Graduate Geoscientist @ ORG_65eedb45 → location channel (2 total channels)
[2026-02-01T04:22:44.375Z] [BOT] 💾 BEFORE MERGE: 1600 jobs in memory (cached)
[2026-02-01T04:22:44.408Z] [BOT] ✅ Loaded V2 database: 1600 jobs
💾 DISK STATE: 1600 jobs on disk
[2026-02-01T04:22:44.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1600
[2026-02-01T04:22:44.412Z] [BOT] 🔀 Deep merged: Graduate Geoscientist @ ORG_65eedb45 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T04:22:44.412Z] [BOT] 💾 AFTER MERGE: 1600 jobs (merged disk + memory)
[2026-02-01T04:22:44.413Z] [BOT] ✅ No jobs to archive (all 1600 jobs within 7-day window)
[2026-02-01T04:22:44.503Z] [BOT] 💾 Saved posted_jobs.json: 1600 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:46.004Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd" @ ORG_08c9a13c
[2026-02-01T04:22:46.005Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T04:22:46.302Z] [BOT] ✅ Posted message: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T04:22:46.303Z] [BOT] ✅ Industry: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c
[2026-02-01T04:22:46.303Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T04:22:46.303Z] [BOT] 💾 BEFORE MERGE: 1601 jobs in memory (cached)
[2026-02-01T04:22:46.334Z] [BOT] ✅ Loaded V2 database: 1600 jobs
💾 DISK STATE: 1600 jobs on disk
[2026-02-01T04:22:46.335Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1601
[2026-02-01T04:22:46.338Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:46.338Z] [BOT] 💾 AFTER MERGE: 1601 jobs (merged disk + memory)
[2026-02-01T04:22:46.339Z] [BOT] ✅ No jobs to archive (all 1601 jobs within 7-day window)
[2026-02-01T04:22:46.429Z] [BOT] 💾 Saved posted_jobs.json: 1601 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:48.121Z] [BOT] ✅ Posted message: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T04:22:48.121Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T04:22:48.122Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T04:22:48.122Z] [BOT] 💾 BEFORE MERGE: 1601 jobs in memory (cached)
[2026-02-01T04:22:48.153Z] [BOT] ✅ Loaded V2 database: 1601 jobs
💾 DISK STATE: 1601 jobs on disk
[2026-02-01T04:22:48.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1601
[2026-02-01T04:22:48.156Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:22:48.156Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1601 jobs (merged disk + memory)
[2026-02-01T04:22:48.157Z] [BOT] ✅ No jobs to archive (all 1601 jobs within 7-day window)
[2026-02-01T04:22:48.240Z] [BOT] 💾 Saved posted_jobs.json: 1601 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:49.742Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Technology" @ ORG_0baaf6f2 Express
[2026-02-01T04:22:49.742Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T04:22:49.974Z] [BOT] ✅ Posted message: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-02-01T04:22:49.974Z] [BOT] ✅ Industry: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express
[2026-02-01T04:22:49.974Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express → category channel (1 total channels)
[2026-02-01T04:22:49.974Z] [BOT] 💾 BEFORE MERGE: 1602 jobs in memory (cached)
[2026-02-01T04:22:50.008Z] [BOT] ✅ Loaded V2 database: 1601 jobs
💾 DISK STATE: 1601 jobs on disk
[2026-02-01T04:22:50.009Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1602
[2026-02-01T04:22:50.012Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:50.012Z] [BOT] 💾 AFTER MERGE: 1602 jobs (merged disk + memory)
[2026-02-01T04:22:50.013Z] [BOT] ✅ No jobs to archive (all 1602 jobs within 7-day window)
[2026-02-01T04:22:50.105Z] [BOT] 💾 Saved posted_jobs.json: 1602 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:51.835Z] [BOT] ✅ Posted message: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T04:22:51.836Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express → location channel (2 total channels)
[2026-02-01T04:22:51.836Z] [BOT] 💾 BEFORE MERGE: 1602 jobs in memory (cached)
[2026-02-01T04:22:51.868Z] [BOT] ✅ Loaded V2 database: 1602 jobs
💾 DISK STATE: 1602 jobs on disk
[2026-02-01T04:22:51.869Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1602
[2026-02-01T04:22:51.871Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:22:51.872Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1602 jobs (merged disk + memory)
[2026-02-01T04:22:51.872Z] [BOT] ✅ No jobs to archive (all 1602 jobs within 7-day window)
[2026-02-01T04:22:51.963Z] [BOT] 💾 Saved posted_jobs.json: 1602 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:53.465Z] [BOT] 📍 [ROUTING] "Campus Graduate - Software Engineer II - Technology" @ ORG_0baaf6f2 Express
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T04:22:53.760Z] [BOT] ✅ Posted message: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-02-01T04:22:53.761Z] [BOT] ✅ Industry: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express
[2026-02-01T04:22:53.761Z] [BOT] 💾 Added channel posting: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express → category channel (1 total channels)
[2026-02-01T04:22:53.761Z] [BOT] 💾 BEFORE MERGE: 1603 jobs in memory (cached)
[2026-02-01T04:22:53.793Z] [BOT] ✅ Loaded V2 database: 1602 jobs
💾 DISK STATE: 1602 jobs on disk
[2026-02-01T04:22:53.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1603
[2026-02-01T04:22:53.796Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:22:53.796Z] [BOT] 💾 AFTER MERGE: 1603 jobs (merged disk + memory)
[2026-02-01T04:22:53.797Z] [BOT] ✅ No jobs to archive (all 1603 jobs within 7-day window)
[2026-02-01T04:22:53.881Z] [BOT] 💾 Saved posted_jobs.json: 1603 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:22:55.615Z] [BOT] ✅ Posted message: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T04:22:55.615Z] [BOT] 💾 Added channel posting: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express → location channel (2 total channels)
[2026-02-01T04:22:55.615Z] [BOT] 💾 BEFORE MERGE: 1603 jobs in memory (cached)
[2026-02-01T04:22:55.649Z] [BOT] ✅ Loaded V2 database: 1603 jobs
💾 DISK STATE: 1603 jobs on disk
[2026-02-01T04:22:55.649Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1603
[2026-02-01T04:22:55.652Z] [BOT] 🔀 Deep merged: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:22:55.652Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1603 jobs (merged disk + memory)
[2026-02-01T04:22:55.653Z] [BOT] ✅ No jobs to archive (all 1603 jobs within 7-day window)
[2026-02-01T04:22:55.752Z] [BOT] 💾 Saved posted_jobs.json: 1603 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:00.253Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T04:23:00.255Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad - Summer 2026" @ ORG_601a2965
[2026-02-01T04:23:00.255Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T04:23:00.541Z] [BOT] ✅ Posted message: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 in #🤖・ai-jobs
[2026-02-01T04:23:00.541Z] [BOT] ✅ Industry: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965
[2026-02-01T04:23:00.542Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 → category channel (1 total channels)
[2026-02-01T04:23:00.542Z] [BOT] 💾 BEFORE MERGE: 1604 jobs in memory (cached)
[2026-02-01T04:23:00.571Z] [BOT] ✅ Loaded V2 database: 1603 jobs
💾 DISK STATE: 1603 jobs on disk
[2026-02-01T04:23:00.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1604
[2026-02-01T04:23:00.575Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:23:00.575Z] [BOT] 💾 AFTER MERGE: 1604 jobs (merged disk + memory)
[2026-02-01T04:23:00.576Z] [BOT] ✅ No jobs to archive (all 1604 jobs within 7-day window)
[2026-02-01T04:23:00.672Z] [BOT] 💾 Saved posted_jobs.json: 1604 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:02.546Z] [BOT] ✅ Posted message: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T04:23:02.546Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 → location channel (2 total channels)
[2026-02-01T04:23:02.546Z] [BOT] 💾 BEFORE MERGE: 1604 jobs in memory (cached)
[2026-02-01T04:23:02.576Z] [BOT] ✅ Loaded V2 database: 1604 jobs
💾 DISK STATE: 1604 jobs on disk
[2026-02-01T04:23:02.577Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1604
[2026-02-01T04:23:02.579Z] [BOT] 🔀 Deep merged: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:23:02.579Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1604 jobs (merged disk + memory)
[2026-02-01T04:23:02.581Z] [BOT] ✅ No jobs to archive (all 1604 jobs within 7-day window)
[2026-02-01T04:23:02.674Z] [BOT] 💾 Saved posted_jobs.json: 1604 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:04.174Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Summer 2026" @ ORG_601a2965
   Category: AI (matched: "AI specialization")
[2026-02-01T04:23:04.174Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T04:23:04.482Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965
[2026-02-01T04:23:04.483Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 → category channel (1 total channels)
[2026-02-01T04:23:04.483Z] [BOT] 💾 BEFORE MERGE: 1605 jobs in memory (cached)
[2026-02-01T04:23:04.512Z] [BOT] ✅ Loaded V2 database: 1604 jobs
💾 DISK STATE: 1604 jobs on disk
[2026-02-01T04:23:04.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1605
[2026-02-01T04:23:04.515Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:23:04.516Z] [BOT] 💾 AFTER MERGE: 1605 jobs (merged disk + memory)
[2026-02-01T04:23:04.516Z] [BOT] ✅ No jobs to archive (all 1605 jobs within 7-day window)
[2026-02-01T04:23:04.598Z] [BOT] 💾 Saved posted_jobs.json: 1605 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:06.354Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T04:23:06.354Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 → location channel (2 total channels)
[2026-02-01T04:23:06.354Z] [BOT] 💾 BEFORE MERGE: 1605 jobs in memory (cached)
[2026-02-01T04:23:06.386Z] [BOT] ✅ Loaded V2 database: 1605 jobs
💾 DISK STATE: 1605 jobs on disk
[2026-02-01T04:23:06.386Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1605
[2026-02-01T04:23:06.389Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 (disk: 1 channels → merged: 2 channels)
[2026-02-01T04:23:06.389Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1605 jobs (merged disk + memory)
[2026-02-01T04:23:06.390Z] [BOT] ✅ No jobs to archive (all 1605 jobs within 7-day window)
[2026-02-01T04:23:06.478Z] [BOT] 💾 Saved posted_jobs.json: 1605 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:07.980Z] [BOT] 📍 [ROUTING] "New Grads 2026 - Data Engineer" @ ORG_eb3a28ce
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T04:23:07.981Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T04:23:08.164Z] [BOT] ✅ Posted message: New Grads 2026 - Data Engineer @ ORG_eb3a28ce in #🤖・ai-jobs
  ✅ Industry: New Grads 2026 - Data Engineer @ ORG_eb3a28ce
[2026-02-01T04:23:08.165Z] [BOT] 💾 Added channel posting: New Grads 2026 - Data Engineer @ ORG_eb3a28ce → category channel (1 total channels)
[2026-02-01T04:23:08.165Z] [BOT] 💾 BEFORE MERGE: 1606 jobs in memory (cached)
[2026-02-01T04:23:08.196Z] [BOT] ✅ Loaded V2 database: 1605 jobs
💾 DISK STATE: 1605 jobs on disk
[2026-02-01T04:23:08.197Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1606
[2026-02-01T04:23:08.200Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:23:08.200Z] [BOT] 💾 AFTER MERGE: 1606 jobs (merged disk + memory)
[2026-02-01T04:23:08.201Z] [BOT] ✅ No jobs to archive (all 1606 jobs within 7-day window)
[2026-02-01T04:23:08.310Z] [BOT] 💾 Saved posted_jobs.json: 1606 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:10.007Z] [BOT] ✅ Posted message: New Grads 2026 - Data Engineer @ ORG_eb3a28ce in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T04:23:10.007Z] [BOT] 💾 Added channel posting: New Grads 2026 - Data Engineer @ ORG_eb3a28ce → location channel (2 total channels)
[2026-02-01T04:23:10.008Z] [BOT] 💾 BEFORE MERGE: 1606 jobs in memory (cached)
[2026-02-01T04:23:10.038Z] [BOT] ✅ Loaded V2 database: 1606 jobs
💾 DISK STATE: 1606 jobs on disk
[2026-02-01T04:23:10.038Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1606
[2026-02-01T04:23:10.041Z] [BOT] 🔀 Deep merged: New Grads 2026 - Data Engineer @ ORG_eb3a28ce (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T04:23:10.041Z] [BOT] 💾 AFTER MERGE: 1606 jobs (merged disk + memory)
[2026-02-01T04:23:10.042Z] [BOT] ✅ No jobs to archive (all 1606 jobs within 7-day window)
[2026-02-01T04:23:10.145Z] [BOT] 💾 Saved posted_jobs.json: 1606 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:11.644Z] [BOT] 📍 [ROUTING] "Data Scientist - Growth Analytics (Performance Marketing)" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T04:23:11.644Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T04:23:11.850Z] [BOT] ✅ Posted message: Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist - Growth Analytics (Performance Marketing) @ spotify
[2026-02-01T04:23:11.851Z] [BOT] 💾 Added channel posting: Data Scientist - Growth Analytics (Performance Marketing) @ spotify → category channel (1 total channels)
[2026-02-01T04:23:11.851Z] [BOT] 💾 BEFORE MERGE: 1607 jobs in memory (cached)
[2026-02-01T04:23:11.881Z] [BOT] ✅ Loaded V2 database: 1606 jobs
💾 DISK STATE: 1606 jobs on disk
[2026-02-01T04:23:11.881Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1607
[2026-02-01T04:23:11.884Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1607 jobs (merged disk + memory)
[2026-02-01T04:23:11.885Z] [BOT] ✅ No jobs to archive (all 1607 jobs within 7-day window)
[2026-02-01T04:23:11.987Z] [BOT] 💾 Saved posted_jobs.json: 1607 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:13.900Z] [BOT] ✅ Posted message: Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T04:23:13.901Z] [BOT] 💾 Added channel posting: Data Scientist - Growth Analytics (Performance Marketing) @ spotify → location channel (2 total channels)
[2026-02-01T04:23:13.901Z] [BOT] 💾 BEFORE MERGE: 1607 jobs in memory (cached)
[2026-02-01T04:23:13.931Z] [BOT] ✅ Loaded V2 database: 1607 jobs
💾 DISK STATE: 1607 jobs on disk
[2026-02-01T04:23:13.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1607
[2026-02-01T04:23:13.934Z] [BOT] 🔀 Deep merged: Data Scientist - Growth Analytics (Performance Marketing) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T04:23:13.934Z] [BOT] 💾 AFTER MERGE: 1607 jobs (merged disk + memory)
[2026-02-01T04:23:13.935Z] [BOT] ✅ No jobs to archive (all 1607 jobs within 7-day window)
[2026-02-01T04:23:14.017Z] [BOT] 💾 Saved posted_jobs.json: 1607 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:18.519Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T04:23:18.521Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2567802..." not found, but found as SHA256 "1b52d4df2b2a8094"
[2026-02-01T04:23:18.521Z] [BOT] ⏭️  Skipping duplicate: JID_c9ba7f33-analytics_r21677-1 (posted within 7 days)
[2026-02-01T04:23:18.521Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98cef1a2..." not found, but found as SHA256 "f83af2f6c3b936da"
[2026-02-01T04:23:18.521Z] [BOT] ⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25033 (posted within 7 days)
[2026-02-01T04:23:18.522Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0baf6a90..." not found, but found as SHA256 "eff865ddc38a41cd"
⏭️  Skipping duplicate: JID_105a5de9 (posted within 7 days)
[2026-02-01T04:23:18.522Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55433c4e..." not found, but found as SHA256 "8b0bc47c8c7bbdfa"
⏭️  Skipping duplicate: JID_2f3e5182 (posted within 7 days)
[2026-02-01T04:23:18.522Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_27aa5211..." not found, but found as SHA256 "74a946a2aabdbdf6"
[2026-02-01T04:23:18.522Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ce0b3f57-detail (posted within 7 days)
[2026-02-01T04:23:18.522Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55433c4e..." not found, but found as SHA256 "073cbebf6dcc4858"
⏭️  Skipping duplicate: JID_819bcbe2 (posted within 7 days)
[2026-02-01T04:23:18.523Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0b240926-..." not found, but found as SHA256 "d1a233a17357aaab"
[2026-02-01T04:23:18.523Z] [BOT] ⏭️  Skipping duplicate: JID_d0781909 (posted within 7 days)
[2026-02-01T04:23:18.523Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_73f5962b..." not found, but found as SHA256 "0b5895dfc2ddd521"
[2026-02-01T04:23:18.523Z] [BOT] ⏭️  Skipping duplicate: JID_73f5962b (posted within 7 days)
[2026-02-01T04:23:18.523Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4c93aa9..." not found, but found as SHA256 "7af9ece5e3153fb6"
[2026-02-01T04:23:18.523Z] [BOT] ⏭️  Skipping duplicate: JID_f4c93aa9 (posted within 7 days)
[2026-02-01T04:23:18.524Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_201edde7..." not found, but found as SHA256 "4ec8f0929e1c043d"
[2026-02-01T04:23:18.524Z] [BOT] ⏭️  Skipping duplicate: JID_5e295372 (posted within 7 days)
[2026-02-01T04:23:18.630Z] [BOT] ✅ Loaded pending queue: 2944 total (1307 pending, 50 enriched, 1587 posted)
[2026-02-01T04:23:18.828Z] [BOT] ✅ Saved pending queue: 2944 total (1307 pending, 40 enriched, 1597 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T04:23:18.828Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T04:23:18.915Z] [BOT] 📂 Loaded 11678 existing routing entries
[2026-02-01T04:23:19.047Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11688
   Timestamp: 2026-02-01T04:23:19.000Z
[2026-02-01T04:23:19.048Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 27
[2026-02-01T04:23:19.048Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T04:23:19.048Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T04:23:19.048Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
[2026-02-01T04:23:19.048Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #📍・JID_6daed763: 4 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🌉・JID_739bbc0b: 2 posts
[2026-02-01T04:23:19.048Z] [BOT] 5. #🗽・JID_98d4f0de: 2 posts
[2026-02-01T04:23:19.049Z] [BOT] [STATS] Channel stats saved
[2026-02-01T04:23:19.049Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1607 jobs in memory (cached)
[2026-02-01T04:23:19.099Z] [BOT] ✅ Loaded V2 database: 1607 jobs
💾 DISK STATE: 1607 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1607
[2026-02-01T04:23:19.101Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T04:23:19.101Z] [BOT] 💾 AFTER MERGE: 1607 jobs (merged disk + memory)
[2026-02-01T04:23:19.103Z] [BOT] ✅ No jobs to archive (all 1607 jobs within 7-day window)
[2026-02-01T04:23:19.195Z] [BOT] 💾 Saved posted_jobs.json: 1607 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T04:23:19.195Z] [BOT] ✅ Database saved successfully
[2026-02-01T04:23:21.224Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:5189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*