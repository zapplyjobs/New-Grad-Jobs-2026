# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T06:26:30.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T06:25:38.512Z] ========================================
[2026-02-01T06:25:38.514Z] Discord Bot Execution Log
[2026-02-01T06:25:38.514Z] Environment: GitHub Actions
[2026-02-01T06:25:38.514Z] Node Version: v20.20.0
[2026-02-01T06:25:38.515Z] ========================================
[2026-02-01T06:25:38.515Z] Environment Variables Check:
[2026-02-01T06:25:38.515Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T06:25:38.515Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T06:25:38.515Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T06:25:38.515Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T06:25:38.515Z] 
Multi-Channel Configuration:
[2026-02-01T06:25:38.515Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T06:25:38.515Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.515Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.515Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T06:25:38.516Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.516Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.516Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.516Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.516Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:25:38.516Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T06:25:38.516Z] 
Data Files Check:
[2026-02-01T06:25:38.517Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58336 bytes)
[2026-02-01T06:25:38.563Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9063621 bytes)
[2026-02-01T06:25:38.563Z] 
========================================
[2026-02-01T06:25:38.563Z] Starting Enhanced Discord Bot...
[2026-02-01T06:25:38.563Z] ========================================
[2026-02-01T06:25:39.126Z] [BOT] ✅ Loaded V2 database: 1637 jobs
[2026-02-01T06:25:39.664Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T06:25:39.665Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T06:25:39.665Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T06:25:39.775Z] [BOT] ✅ Loaded pending queue: 2944 total (1267 pending, 50 enriched, 1627 posted)
[2026-02-01T06:25:39.775Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:25:39.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T06:25:39.776Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:25:39.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T06:25:39.777Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T06:25:39.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T06:25:39.778Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T06:25:39.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T06:25:39.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T06:25:39.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T06:25:39.779Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T06:25:39.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T06:25:39.781Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T06:25:39.793Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T06:25:39.793Z] [BOT] 🚫 Skipping blacklisted job: Manager, Digital Marketing at gohighlevel
[2026-02-01T06:25:39.940Z] [BOT] ✅ Loaded pending queue: 2944 total (1267 pending, 50 enriched, 1627 posted)
[2026-02-01T06:25:40.134Z] [BOT] ✅ Saved pending queue: 2943 total (1267 pending, 49 enriched, 1627 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T06:25:40.134Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T06:25:40.135Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-02-01T06:25:40.135Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T06:25:40.135Z] [BOT] - Enterprise Account Executive @ nominal: new york, austin
   - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T06:25:40.137Z] [BOT] 📌 Posting 5 jobs to #📊・JID_fb739488
[2026-02-01T06:25:40.139Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_89135357 Airlines
[2026-02-01T06:25:40.139Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:25:40.157Z] [BOT ERROR] (node:3207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T06:25:40.471Z] [BOT] ✅ Posted message: Associate Data Engineer @ ORG_89135357 Airlines in #📊・JID_fb739488
[2026-02-01T06:25:40.471Z] [BOT] ✅ Industry: Associate Data Engineer @ ORG_89135357 Airlines
[2026-02-01T06:25:40.472Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ ORG_89135357 Airlines → category channel (1 total channels)
[2026-02-01T06:25:40.472Z] [BOT] 💾 BEFORE MERGE: 1638 jobs in memory (cached)
[2026-02-01T06:25:40.510Z] [BOT] ✅ Loaded V2 database: 1637 jobs
💾 DISK STATE: 1637 jobs on disk
[2026-02-01T06:25:40.511Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1638
[2026-02-01T06:25:40.515Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:25:40.515Z] [BOT] 💾 AFTER MERGE: 1638 jobs (merged disk + memory)
[2026-02-01T06:25:40.516Z] [BOT] ✅ No jobs to archive (all 1638 jobs within 7-day window)
[2026-02-01T06:25:40.621Z] [BOT] 💾 Saved posted_jobs.json: 1638 active jobs
[2026-02-01T06:25:40.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:42.344Z] [BOT] ✅ Posted message: Associate Data Engineer @ ORG_89135357 Airlines in #📍・JID_6daed763
[2026-02-01T06:25:42.345Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:25:42.345Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ ORG_89135357 Airlines → location channel (2 total channels)
[2026-02-01T06:25:42.345Z] [BOT] 💾 BEFORE MERGE: 1638 jobs in memory (cached)
[2026-02-01T06:25:42.377Z] [BOT] ✅ Loaded V2 database: 1638 jobs
[2026-02-01T06:25:42.377Z] [BOT] 💾 DISK STATE: 1638 jobs on disk
[2026-02-01T06:25:42.377Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1638
[2026-02-01T06:25:42.381Z] [BOT] 🔀 Deep merged: Associate Data Engineer @ ORG_89135357 Airlines (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:25:42.381Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1638 jobs (merged disk + memory)
[2026-02-01T06:25:42.382Z] [BOT] ✅ No jobs to archive (all 1638 jobs within 7-day window)
[2026-02-01T06:25:42.470Z] [BOT] 💾 Saved posted_jobs.json: 1638 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:43.972Z] [BOT] 📍 [ROUTING] "Associate Business Applications Engineer" @ ORG_49005fd1
[2026-02-01T06:25:43.973Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:25:44.172Z] [BOT] ✅ Posted message: Associate Business Applications Engineer @ ORG_49005fd1 in #📊・JID_fb739488
[2026-02-01T06:25:44.172Z] [BOT] ✅ Industry: Associate Business Applications Engineer @ ORG_49005fd1
[2026-02-01T06:25:44.173Z] [BOT] 💾 Added channel posting: Associate Business Applications Engineer @ ORG_49005fd1 → category channel (1 total channels)
[2026-02-01T06:25:44.173Z] [BOT] 💾 BEFORE MERGE: 1639 jobs in memory (cached)
[2026-02-01T06:25:44.203Z] [BOT] ✅ Loaded V2 database: 1638 jobs
💾 DISK STATE: 1638 jobs on disk
[2026-02-01T06:25:44.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1639
[2026-02-01T06:25:44.207Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:25:44.207Z] [BOT] 💾 AFTER MERGE: 1639 jobs (merged disk + memory)
[2026-02-01T06:25:44.208Z] [BOT] ✅ No jobs to archive (all 1639 jobs within 7-day window)
[2026-02-01T06:25:44.304Z] [BOT] 💾 Saved posted_jobs.json: 1639 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:46.070Z] [BOT] ✅ Posted message: Associate Business Applications Engineer @ ORG_49005fd1 in #📍・JID_6daed763
[2026-02-01T06:25:46.070Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:25:46.071Z] [BOT] 💾 Added channel posting: Associate Business Applications Engineer @ ORG_49005fd1 → location channel (2 total channels)
[2026-02-01T06:25:46.071Z] [BOT] 💾 BEFORE MERGE: 1639 jobs in memory (cached)
[2026-02-01T06:25:46.103Z] [BOT] ✅ Loaded V2 database: 1639 jobs
💾 DISK STATE: 1639 jobs on disk
[2026-02-01T06:25:46.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1639
[2026-02-01T06:25:46.107Z] [BOT] 🔀 Deep merged: Associate Business Applications Engineer @ ORG_49005fd1 (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:25:46.107Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1639 jobs (merged disk + memory)
[2026-02-01T06:25:46.108Z] [BOT] ✅ No jobs to archive (all 1639 jobs within 7-day window)
[2026-02-01T06:25:46.197Z] [BOT] 💾 Saved posted_jobs.json: 1639 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:47.699Z] [BOT] 📍 [ROUTING] "Internal Technical Consultant" @ ORG_49005fd1
[2026-02-01T06:25:47.699Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T06:25:47.935Z] [BOT] ✅ Posted message: Internal Technical Consultant @ ORG_49005fd1 in #📊・JID_fb739488
  ✅ Industry: Internal Technical Consultant @ ORG_49005fd1
[2026-02-01T06:25:47.935Z] [BOT] 💾 Added channel posting: Internal Technical Consultant @ ORG_49005fd1 → category channel (1 total channels)
[2026-02-01T06:25:47.936Z] [BOT] 💾 BEFORE MERGE: 1640 jobs in memory (cached)
[2026-02-01T06:25:47.968Z] [BOT] ✅ Loaded V2 database: 1639 jobs
💾 DISK STATE: 1639 jobs on disk
[2026-02-01T06:25:47.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1640
[2026-02-01T06:25:47.972Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:25:47.972Z] [BOT] 💾 AFTER MERGE: 1640 jobs (merged disk + memory)
[2026-02-01T06:25:47.973Z] [BOT] ✅ No jobs to archive (all 1640 jobs within 7-day window)
[2026-02-01T06:25:48.077Z] [BOT] 💾 Saved posted_jobs.json: 1640 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:49.791Z] [BOT] ✅ Posted message: Internal Technical Consultant @ ORG_49005fd1 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:25:49.791Z] [BOT] 💾 Added channel posting: Internal Technical Consultant @ ORG_49005fd1 → location channel (2 total channels)
[2026-02-01T06:25:49.791Z] [BOT] 💾 BEFORE MERGE: 1640 jobs in memory (cached)
[2026-02-01T06:25:49.824Z] [BOT] ✅ Loaded V2 database: 1640 jobs
💾 DISK STATE: 1640 jobs on disk
[2026-02-01T06:25:49.824Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1640
[2026-02-01T06:25:49.827Z] [BOT] 🔀 Deep merged: Internal Technical Consultant @ ORG_49005fd1 (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:25:49.827Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1640 jobs (merged disk + memory)
[2026-02-01T06:25:49.828Z] [BOT] ✅ No jobs to archive (all 1640 jobs within 7-day window)
[2026-02-01T06:25:49.918Z] [BOT] 💾 Saved posted_jobs.json: 1640 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:51.419Z] [BOT] 📍 [ROUTING] "Associate Application Developer - Appian Platform" @ ORG_49005fd1
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T06:25:51.420Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:25:51.603Z] [BOT] ✅ Posted message: Associate Application Developer - Appian Platform @ ORG_49005fd1 in #📊・JID_fb739488
  ✅ Industry: Associate Application Developer - Appian Platform @ ORG_49005fd1
[2026-02-01T06:25:51.604Z] [BOT] 💾 Added channel posting: Associate Application Developer - Appian Platform @ ORG_49005fd1 → category channel (1 total channels)
[2026-02-01T06:25:51.604Z] [BOT] 💾 BEFORE MERGE: 1641 jobs in memory (cached)
[2026-02-01T06:25:51.635Z] [BOT] ✅ Loaded V2 database: 1640 jobs
💾 DISK STATE: 1640 jobs on disk
[2026-02-01T06:25:51.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1641
[2026-02-01T06:25:51.638Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:25:51.638Z] [BOT] 💾 AFTER MERGE: 1641 jobs (merged disk + memory)
[2026-02-01T06:25:51.639Z] [BOT] ✅ No jobs to archive (all 1641 jobs within 7-day window)
[2026-02-01T06:25:51.757Z] [BOT] 💾 Saved posted_jobs.json: 1641 active jobs
[2026-02-01T06:25:51.757Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:53.481Z] [BOT] ✅ Posted message: Associate Application Developer - Appian Platform @ ORG_49005fd1 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:25:53.481Z] [BOT] 💾 Added channel posting: Associate Application Developer - Appian Platform @ ORG_49005fd1 → location channel (2 total channels)
[2026-02-01T06:25:53.482Z] [BOT] 💾 BEFORE MERGE: 1641 jobs in memory (cached)
[2026-02-01T06:25:53.512Z] [BOT] ✅ Loaded V2 database: 1641 jobs
💾 DISK STATE: 1641 jobs on disk
[2026-02-01T06:25:53.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1641
[2026-02-01T06:25:53.515Z] [BOT] 🔀 Deep merged: Associate Application Developer - Appian Platform @ ORG_49005fd1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:25:53.515Z] [BOT] 💾 AFTER MERGE: 1641 jobs (merged disk + memory)
[2026-02-01T06:25:53.516Z] [BOT] ✅ No jobs to archive (all 1641 jobs within 7-day window)
[2026-02-01T06:25:53.600Z] [BOT] 💾 Saved posted_jobs.json: 1641 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:55.103Z] [BOT] 📍 [ROUTING] "Graduate Engineering Program" @ ORG_6ba43877 Strategies
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T06:25:55.103Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:25:56.829Z] [BOT] ✅ Posted message: Graduate Engineering Program @ ORG_6ba43877 Strategies in #📊・JID_fb739488
  ✅ Industry: Graduate Engineering Program @ ORG_6ba43877 Strategies
[2026-02-01T06:25:56.830Z] [BOT] 💾 Added channel posting: Graduate Engineering Program @ ORG_6ba43877 Strategies → category channel (1 total channels)
[2026-02-01T06:25:56.830Z] [BOT] 💾 BEFORE MERGE: 1642 jobs in memory (cached)
[2026-02-01T06:25:56.862Z] [BOT] ✅ Loaded V2 database: 1641 jobs
💾 DISK STATE: 1641 jobs on disk
[2026-02-01T06:25:56.862Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1642
[2026-02-01T06:25:56.865Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:25:56.865Z] [BOT] 💾 AFTER MERGE: 1642 jobs (merged disk + memory)
[2026-02-01T06:25:56.866Z] [BOT] ✅ No jobs to archive (all 1642 jobs within 7-day window)
[2026-02-01T06:25:56.969Z] [BOT] 💾 Saved posted_jobs.json: 1642 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:25:58.799Z] [BOT] ✅ Posted message: Graduate Engineering Program @ ORG_6ba43877 Strategies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:25:58.799Z] [BOT] 💾 Added channel posting: Graduate Engineering Program @ ORG_6ba43877 Strategies → location channel (2 total channels)
[2026-02-01T06:25:58.799Z] [BOT] 💾 BEFORE MERGE: 1642 jobs in memory (cached)
[2026-02-01T06:25:58.830Z] [BOT] ✅ Loaded V2 database: 1642 jobs
💾 DISK STATE: 1642 jobs on disk
[2026-02-01T06:25:58.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1642
[2026-02-01T06:25:58.834Z] [BOT] 🔀 Deep merged: Graduate Engineering Program @ ORG_6ba43877 Strategies (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:25:58.834Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1642 jobs (merged disk + memory)
[2026-02-01T06:25:58.835Z] [BOT] ✅ No jobs to archive (all 1642 jobs within 7-day window)
[2026-02-01T06:25:58.918Z] [BOT] 💾 Saved posted_jobs.json: 1642 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:03.420Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-01T06:26:03.421Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_89135357 Airlines
   Category: TECH (matched: "software")
[2026-02-01T06:26:03.421Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:26:03.726Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_89135357 Airlines in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_89135357 Airlines
[2026-02-01T06:26:03.726Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_89135357 Airlines → category channel (1 total channels)
[2026-02-01T06:26:03.727Z] [BOT] 💾 BEFORE MERGE: 1643 jobs in memory (cached)
[2026-02-01T06:26:03.760Z] [BOT] ✅ Loaded V2 database: 1642 jobs
[2026-02-01T06:26:03.763Z] [BOT] 💾 DISK STATE: 1642 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1643
[2026-02-01T06:26:03.767Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:03.767Z] [BOT] 💾 AFTER MERGE: 1643 jobs (merged disk + memory)
[2026-02-01T06:26:03.777Z] [BOT] ✅ No jobs to archive (all 1643 jobs within 7-day window)
[2026-02-01T06:26:03.863Z] [BOT] 💾 Saved posted_jobs.json: 1643 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:05.588Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_89135357 Airlines in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:26:05.588Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_89135357 Airlines → location channel (2 total channels)
[2026-02-01T06:26:05.588Z] [BOT] 💾 BEFORE MERGE: 1643 jobs in memory (cached)
[2026-02-01T06:26:05.623Z] [BOT] ✅ Loaded V2 database: 1643 jobs
💾 DISK STATE: 1643 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1643
[2026-02-01T06:26:05.628Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_89135357 Airlines (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:26:05.629Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:26:05.629Z] [BOT] 💾 AFTER MERGE: 1643 jobs (merged disk + memory)
[2026-02-01T06:26:05.631Z] [BOT] ✅ No jobs to archive (all 1643 jobs within 7-day window)
[2026-02-01T06:26:05.725Z] [BOT] 💾 Saved posted_jobs.json: 1643 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:07.227Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Java/Scala" @ mthree
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:26:07.409Z] [BOT] ✅ Posted message: Junior Software Developer - Java/Scala @ mthree in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Java/Scala @ mthree
[2026-02-01T06:26:07.410Z] [BOT] 💾 Added channel posting: Junior Software Developer - Java/Scala @ mthree → category channel (1 total channels)
[2026-02-01T06:26:07.410Z] [BOT] 💾 BEFORE MERGE: 1644 jobs in memory (cached)
[2026-02-01T06:26:07.443Z] [BOT] ✅ Loaded V2 database: 1643 jobs
💾 DISK STATE: 1643 jobs on disk
[2026-02-01T06:26:07.443Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1644
[2026-02-01T06:26:07.446Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:07.446Z] [BOT] 💾 AFTER MERGE: 1644 jobs (merged disk + memory)
[2026-02-01T06:26:07.447Z] [BOT] ✅ No jobs to archive (all 1644 jobs within 7-day window)
[2026-02-01T06:26:07.536Z] [BOT] 💾 Saved posted_jobs.json: 1644 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:09.038Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Graduate" @ ORG_2b380db8
[2026-02-01T06:26:09.038Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:26:09.298Z] [BOT] ✅ Posted message: Software Engineer – New College Graduate @ ORG_2b380db8 in #💻・tech-jobs
[2026-02-01T06:26:09.298Z] [BOT] ✅ Industry: Software Engineer – New College Graduate @ ORG_2b380db8
[2026-02-01T06:26:09.298Z] [BOT] 💾 Added channel posting: Software Engineer – New College Graduate @ ORG_2b380db8 → category channel (1 total channels)
[2026-02-01T06:26:09.298Z] [BOT] 💾 BEFORE MERGE: 1645 jobs in memory (cached)
[2026-02-01T06:26:09.333Z] [BOT] ✅ Loaded V2 database: 1644 jobs
💾 DISK STATE: 1644 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1645
[2026-02-01T06:26:09.337Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:09.338Z] [BOT] 💾 AFTER MERGE: 1645 jobs (merged disk + memory)
[2026-02-01T06:26:09.339Z] [BOT] ✅ No jobs to archive (all 1645 jobs within 7-day window)
[2026-02-01T06:26:09.434Z] [BOT] 💾 Saved posted_jobs.json: 1645 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:11.161Z] [BOT] ✅ Posted message: Software Engineer – New College Graduate @ ORG_2b380db8 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T06:26:11.161Z] [BOT] 💾 Added channel posting: Software Engineer – New College Graduate @ ORG_2b380db8 → location channel (2 total channels)
[2026-02-01T06:26:11.161Z] [BOT] 💾 BEFORE MERGE: 1645 jobs in memory (cached)
[2026-02-01T06:26:11.193Z] [BOT] ✅ Loaded V2 database: 1645 jobs
💾 DISK STATE: 1645 jobs on disk
[2026-02-01T06:26:11.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1645
[2026-02-01T06:26:11.196Z] [BOT] 🔀 Deep merged: Software Engineer – New College Graduate @ ORG_2b380db8 (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:26:11.196Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1645 jobs (merged disk + memory)
[2026-02-01T06:26:11.197Z] [BOT] ✅ No jobs to archive (all 1645 jobs within 7-day window)
[2026-02-01T06:26:11.285Z] [BOT] 💾 Saved posted_jobs.json: 1645 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:15.787Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T06:26:15.788Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T06:26:15.788Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T06:26:16.115Z] [BOT] ✅ Posted message: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-02-01T06:26:16.116Z] [BOT] 💾 Added channel posting: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-02-01T06:26:16.116Z] [BOT] 💾 BEFORE MERGE: 1646 jobs in memory (cached)
[2026-02-01T06:26:16.147Z] [BOT] ✅ Loaded V2 database: 1645 jobs
💾 DISK STATE: 1645 jobs on disk
[2026-02-01T06:26:16.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1646
[2026-02-01T06:26:16.151Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:16.151Z] [BOT] 💾 AFTER MERGE: 1646 jobs (merged disk + memory)
[2026-02-01T06:26:16.152Z] [BOT] ✅ No jobs to archive (all 1646 jobs within 7-day window)
[2026-02-01T06:26:16.239Z] [BOT] 💾 Saved posted_jobs.json: 1646 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:17.968Z] [BOT] ✅ Posted message: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T06:26:17.968Z] [BOT] 💾 Added channel posting: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → location channel (2 total channels)
[2026-02-01T06:26:17.969Z] [BOT] 💾 BEFORE MERGE: 1646 jobs in memory (cached)
[2026-02-01T06:26:18.003Z] [BOT] ✅ Loaded V2 database: 1646 jobs
💾 DISK STATE: 1646 jobs on disk
[2026-02-01T06:26:18.003Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1646
[2026-02-01T06:26:18.006Z] [BOT] 🔀 Deep merged: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:26:18.006Z] [BOT] 💾 AFTER MERGE: 1646 jobs (merged disk + memory)
[2026-02-01T06:26:18.007Z] [BOT] ✅ No jobs to archive (all 1646 jobs within 7-day window)
[2026-02-01T06:26:18.099Z] [BOT] 💾 Saved posted_jobs.json: 1646 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:19.601Z] [BOT] 📍 [ROUTING] "Data Science Engineer" @ ORG_c9453059 Berkley
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T06:26:19.601Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T06:26:19.877Z] [BOT] ✅ Posted message: Data Science Engineer @ ORG_c9453059 Berkley in #🤖・ai-jobs
[2026-02-01T06:26:19.877Z] [BOT] ✅ Industry: Data Science Engineer @ ORG_c9453059 Berkley
[2026-02-01T06:26:19.877Z] [BOT] 💾 Added channel posting: Data Science Engineer @ ORG_c9453059 Berkley → category channel (1 total channels)
[2026-02-01T06:26:19.877Z] [BOT] 💾 BEFORE MERGE: 1647 jobs in memory (cached)
[2026-02-01T06:26:19.909Z] [BOT] ✅ Loaded V2 database: 1646 jobs
💾 DISK STATE: 1646 jobs on disk
[2026-02-01T06:26:19.910Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1647
[2026-02-01T06:26:19.913Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:19.913Z] [BOT] 💾 AFTER MERGE: 1647 jobs (merged disk + memory)
[2026-02-01T06:26:19.914Z] [BOT] ✅ No jobs to archive (all 1647 jobs within 7-day window)
[2026-02-01T06:26:20.003Z] [BOT] 💾 Saved posted_jobs.json: 1647 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:21.745Z] [BOT] ✅ Posted message: Data Science Engineer @ ORG_c9453059 Berkley in #📍・JID_6daed763
[2026-02-01T06:26:21.745Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:26:21.746Z] [BOT] 💾 Added channel posting: Data Science Engineer @ ORG_c9453059 Berkley → location channel (2 total channels)
[2026-02-01T06:26:21.746Z] [BOT] 💾 BEFORE MERGE: 1647 jobs in memory (cached)
[2026-02-01T06:26:21.782Z] [BOT] ✅ Loaded V2 database: 1647 jobs
💾 DISK STATE: 1647 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1647
[2026-02-01T06:26:21.788Z] [BOT] 🔀 Deep merged: Data Science Engineer @ ORG_c9453059 Berkley (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:26:21.788Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:26:21.788Z] [BOT] 💾 AFTER MERGE: 1647 jobs (merged disk + memory)
[2026-02-01T06:26:21.797Z] [BOT] ✅ No jobs to archive (all 1647 jobs within 7-day window)
[2026-02-01T06:26:21.887Z] [BOT] 💾 Saved posted_jobs.json: 1647 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:26:26.390Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T06:26:26.391Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a305ddbc..." not found, but found as SHA256 "c3f694b9f34e2b8c"
[2026-02-01T06:26:26.391Z] [BOT] ⏭️  Skipping duplicate: JID_9a58246b-hire_r-2025-59813 (posted within 7 days)
[2026-02-01T06:26:26.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a305ddbc..." not found, but found as SHA256 "a574520d83ecbb5e"
⏭️  Skipping duplicate: JID_f3329f2c-hire_r-2025-59811 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "912fd1c8cbbe1e98"
⏭️  Skipping duplicate: JID_2b742579 (posted within 7 days)
[2026-02-01T06:26:26.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7c774527..." not found, but found as SHA256 "26380439e37a49b5"
[2026-02-01T06:26:26.392Z] [BOT] ⏭️  Skipping duplicate: JID_597c6c7c (posted within 7 days)
[2026-02-01T06:26:26.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd89dece..." not found, but found as SHA256 "f7c3058db14ecddf"
[2026-02-01T06:26:26.393Z] [BOT] ⏭️  Skipping duplicate: JID_a31f7865 (posted within 7 days)
[2026-02-01T06:26:26.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7c774527..." not found, but found as SHA256 "92b51cb9f2700d49"
[2026-02-01T06:26:26.393Z] [BOT] ⏭️  Skipping duplicate: JID_647cf8f2 (posted within 7 days)
[2026-02-01T06:26:26.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb81f872..." not found, but found as SHA256 "c45ed1b4d7431675"
[2026-02-01T06:26:26.393Z] [BOT] ⏭️  Skipping duplicate: JID_aa2bd70e (posted within 7 days)
[2026-02-01T06:26:26.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "66e0b770a6fce1ed"
[2026-02-01T06:26:26.394Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ced046c2-engineer_r160133 (posted within 7 days)
[2026-02-01T06:26:26.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_99c96627-..." not found, but found as SHA256 "96a610123fe76f8e"
[2026-02-01T06:26:26.394Z] [BOT] ⏭️  Skipping duplicate: JID_6e0739e9-program_r12714 (posted within 7 days)
[2026-02-01T06:26:26.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fd945994..." not found, but found as SHA256 "fd9773b16e720a64"
[2026-02-01T06:26:26.394Z] [BOT] ⏭️  Skipping duplicate: JID_fd945994 (posted within 7 days)
[2026-02-01T06:26:26.494Z] [BOT] ✅ Loaded pending queue: 2943 total (1267 pending, 49 enriched, 1627 posted)
[2026-02-01T06:26:26.687Z] [BOT] ✅ Saved pending queue: 2943 total (1267 pending, 39 enriched, 1637 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T06:26:26.776Z] [BOT] 📂 Loaded 11718 existing routing entries
[2026-02-01T06:26:26.910Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T06:26:26.910Z] [BOT] Total entries: 11728
   Timestamp: 2026-02-01T06:26:26.862Z
[2026-02-01T06:26:26.910Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T06:26:26.910Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 9
[2026-02-01T06:26:26.911Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
[2026-02-01T06:26:26.911Z] [BOT] 1. #📍・JID_6daed763: 8 posts
     2. #📊・JID_fb739488: 5 posts
     3. #💻・tech-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T06:26:26.911Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1647 jobs in memory (cached)
[2026-02-01T06:26:26.945Z] [BOT] ✅ Loaded V2 database: 1647 jobs
💾 DISK STATE: 1647 jobs on disk
[2026-02-01T06:26:26.945Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1647
[2026-02-01T06:26:26.952Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:26:26.953Z] [BOT] 💾 AFTER MERGE: 1647 jobs (merged disk + memory)
[2026-02-01T06:26:26.953Z] [BOT] ✅ No jobs to archive (all 1647 jobs within 7-day window)
[2026-02-01T06:26:27.064Z] [BOT] 💾 Saved posted_jobs.json: 1647 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T06:26:29.099Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*