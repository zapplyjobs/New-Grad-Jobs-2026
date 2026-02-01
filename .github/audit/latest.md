# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T08:23:14.653Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T08:22:24.276Z] ========================================
[2026-02-01T08:22:24.278Z] Discord Bot Execution Log
[2026-02-01T08:22:24.278Z] Environment: GitHub Actions
[2026-02-01T08:22:24.278Z] Node Version: v20.20.0
[2026-02-01T08:22:24.278Z] ========================================
[2026-02-01T08:22:24.278Z] Environment Variables Check:
[2026-02-01T08:22:24.278Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T08:22:24.278Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T08:22:24.278Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T08:22:24.278Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T08:22:24.278Z] 
Multi-Channel Configuration:
[2026-02-01T08:22:24.278Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T08:22:24.279Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T08:22:24.279Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:22:24.279Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T08:22:24.279Z] 
Data Files Check:
[2026-02-01T08:22:24.280Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61679 bytes)
[2026-02-01T08:22:24.338Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9228532 bytes)
[2026-02-01T08:22:24.338Z] 
========================================
[2026-02-01T08:22:24.338Z] Starting Enhanced Discord Bot...
[2026-02-01T08:22:24.338Z] ========================================
[2026-02-01T08:22:24.838Z] [BOT] ✅ Loaded V2 database: 1687 jobs
[2026-02-01T08:22:25.667Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T08:22:25.668Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T08:22:25.668Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T08:22:25.820Z] [BOT] ✅ Loaded pending queue: 2944 total (1217 pending, 50 enriched, 1677 posted)
[2026-02-01T08:22:25.820Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:22:25.821Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T08:22:25.821Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T08:22:25.821Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:22:25.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T08:22:25.822Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T08:22:25.822Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T08:22:25.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-02-01T08:22:25.823Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T08:22:25.823Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T08:22:25.824Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T08:22:25.824Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T08:22:25.824Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T08:22:25.824Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T08:22:25.825Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T08:22:25.834Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T08:22:25.834Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T08:22:25.834Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T08:22:25.835Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
   (2 grouped as same job with different locations)
[2026-02-01T08:22:25.835Z] [BOT] 📍 2 jobs with multiple locations:
   - Mission Operations Engineer @ nominal: new york, austin
   - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T08:22:25.835Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T08:22:25.838Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T08:22:25.839Z] [BOT] 📍 [ROUTING] "BNY Analyst Program-Engineering - Data Science" @ ORG_01d9a8c4
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T08:22:25.839Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T08:22:25.856Z] [BOT ERROR] (node:3541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T08:22:26.149Z] [BOT] ✅ Posted message: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 in #📊・JID_fb739488
[2026-02-01T08:22:26.150Z] [BOT] ✅ Industry: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4
[2026-02-01T08:22:26.150Z] [BOT] 💾 Added channel posting: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 → category channel (1 total channels)
[2026-02-01T08:22:26.151Z] [BOT] 💾 BEFORE MERGE: 1688 jobs in memory (cached)
[2026-02-01T08:22:26.202Z] [BOT] ✅ Loaded V2 database: 1687 jobs
💾 DISK STATE: 1687 jobs on disk
[2026-02-01T08:22:26.203Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1688
[2026-02-01T08:22:26.207Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:26.207Z] [BOT] 💾 AFTER MERGE: 1688 jobs (merged disk + memory)
[2026-02-01T08:22:26.208Z] [BOT] ✅ No jobs to archive (all 1688 jobs within 7-day window)
[2026-02-01T08:22:26.327Z] [BOT] 💾 Saved posted_jobs.json: 1688 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:28.039Z] [BOT] ✅ Posted message: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 in #🗽・JID_98d4f0de
[2026-02-01T08:22:28.039Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:22:28.039Z] [BOT] 💾 Added channel posting: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 → location channel (2 total channels)
[2026-02-01T08:22:28.039Z] [BOT] 💾 BEFORE MERGE: 1688 jobs in memory (cached)
[2026-02-01T08:22:28.089Z] [BOT] ✅ Loaded V2 database: 1688 jobs
💾 DISK STATE: 1688 jobs on disk
[2026-02-01T08:22:28.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1688
[2026-02-01T08:22:28.093Z] [BOT] 🔀 Deep merged: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:28.093Z] [BOT] 💾 AFTER MERGE: 1688 jobs (merged disk + memory)
[2026-02-01T08:22:28.094Z] [BOT] ✅ No jobs to archive (all 1688 jobs within 7-day window)
[2026-02-01T08:22:28.197Z] [BOT] 💾 Saved posted_jobs.json: 1688 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:29.699Z] [BOT] 📍 [ROUTING] "Reference Data Analyst Junior" @ ORG_e9591c52
[2026-02-01T08:22:29.699Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T08:22:29.872Z] [BOT] ✅ Posted message: Reference Data Analyst Junior @ ORG_e9591c52 in #📊・JID_fb739488
  ✅ Industry: Reference Data Analyst Junior @ ORG_e9591c52
[2026-02-01T08:22:29.873Z] [BOT] 💾 Added channel posting: Reference Data Analyst Junior @ ORG_e9591c52 → category channel (1 total channels)
[2026-02-01T08:22:29.873Z] [BOT] 💾 BEFORE MERGE: 1689 jobs in memory (cached)
[2026-02-01T08:22:29.924Z] [BOT] ✅ Loaded V2 database: 1688 jobs
💾 DISK STATE: 1688 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1689
[2026-02-01T08:22:29.930Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:29.931Z] [BOT] 💾 AFTER MERGE: 1689 jobs (merged disk + memory)
[2026-02-01T08:22:29.938Z] [BOT] ✅ No jobs to archive (all 1689 jobs within 7-day window)
[2026-02-01T08:22:30.042Z] [BOT] 💾 Saved posted_jobs.json: 1689 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:31.867Z] [BOT] ✅ Posted message: Reference Data Analyst Junior @ ORG_e9591c52 in #🗽・JID_98d4f0de
[2026-02-01T08:22:31.867Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:22:31.867Z] [BOT] 💾 Added channel posting: Reference Data Analyst Junior @ ORG_e9591c52 → location channel (2 total channels)
💾 BEFORE MERGE: 1689 jobs in memory (cached)
[2026-02-01T08:22:31.912Z] [BOT] ✅ Loaded V2 database: 1689 jobs
💾 DISK STATE: 1689 jobs on disk
[2026-02-01T08:22:31.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1689
[2026-02-01T08:22:31.916Z] [BOT] 🔀 Deep merged: Reference Data Analyst Junior @ ORG_e9591c52 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:31.917Z] [BOT] 💾 AFTER MERGE: 1689 jobs (merged disk + memory)
[2026-02-01T08:22:31.917Z] [BOT] ✅ No jobs to archive (all 1689 jobs within 7-day window)
[2026-02-01T08:22:32.019Z] [BOT] 💾 Saved posted_jobs.json: 1689 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:36.522Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T08:22:36.523Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3
[2026-02-01T08:22:36.523Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:36.962Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_e5ca4df3 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3
[2026-02-01T08:22:36.963Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_e5ca4df3 → category channel (1 total channels)
[2026-02-01T08:22:36.963Z] [BOT] 💾 BEFORE MERGE: 1690 jobs in memory (cached)
[2026-02-01T08:22:37.009Z] [BOT] ✅ Loaded V2 database: 1689 jobs
💾 DISK STATE: 1689 jobs on disk
[2026-02-01T08:22:37.009Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1690
[2026-02-01T08:22:37.012Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:37.013Z] [BOT] 💾 AFTER MERGE: 1690 jobs (merged disk + memory)
[2026-02-01T08:22:37.013Z] [BOT] ✅ No jobs to archive (all 1690 jobs within 7-day window)
[2026-02-01T08:22:37.130Z] [BOT] 💾 Saved posted_jobs.json: 1690 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:38.631Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_42413a38
   Category: TECH (matched: "software")
[2026-02-01T08:22:38.631Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:38.895Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_42413a38 in #💻・tech-jobs
[2026-02-01T08:22:38.895Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_42413a38
[2026-02-01T08:22:38.896Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_42413a38 → category channel (1 total channels)
[2026-02-01T08:22:38.896Z] [BOT] 💾 BEFORE MERGE: 1691 jobs in memory (cached)
[2026-02-01T08:22:38.941Z] [BOT] ✅ Loaded V2 database: 1690 jobs
💾 DISK STATE: 1690 jobs on disk
[2026-02-01T08:22:38.942Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1691
[2026-02-01T08:22:38.945Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:38.945Z] [BOT] 💾 AFTER MERGE: 1691 jobs (merged disk + memory)
[2026-02-01T08:22:38.946Z] [BOT] ✅ No jobs to archive (all 1691 jobs within 7-day window)
[2026-02-01T08:22:39.062Z] [BOT] 💾 Saved posted_jobs.json: 1691 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:40.900Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_42413a38 in #🌉・JID_739bbc0b
[2026-02-01T08:22:40.901Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T08:22:40.901Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_42413a38 → location channel (2 total channels)
[2026-02-01T08:22:40.901Z] [BOT] 💾 BEFORE MERGE: 1691 jobs in memory (cached)
[2026-02-01T08:22:40.947Z] [BOT] ✅ Loaded V2 database: 1691 jobs
💾 DISK STATE: 1691 jobs on disk
[2026-02-01T08:22:40.947Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1691
[2026-02-01T08:22:40.951Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_42413a38 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:40.951Z] [BOT] 💾 AFTER MERGE: 1691 jobs (merged disk + memory)
[2026-02-01T08:22:40.952Z] [BOT] ✅ No jobs to archive (all 1691 jobs within 7-day window)
[2026-02-01T08:22:41.052Z] [BOT] 💾 Saved posted_jobs.json: 1691 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:42.554Z] [BOT] 📍 [ROUTING] "Application Development Engineer I" @ ORG_441f2234
[2026-02-01T08:22:42.555Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:42.763Z] [BOT] ✅ Posted message: Application Development Engineer I @ ORG_441f2234 in #💻・tech-jobs
[2026-02-01T08:22:42.764Z] [BOT] ✅ Industry: Application Development Engineer I @ ORG_441f2234
[2026-02-01T08:22:42.764Z] [BOT] 💾 Added channel posting: Application Development Engineer I @ ORG_441f2234 → category channel (1 total channels)
[2026-02-01T08:22:42.765Z] [BOT] 💾 BEFORE MERGE: 1692 jobs in memory (cached)
[2026-02-01T08:22:42.810Z] [BOT] ✅ Loaded V2 database: 1691 jobs
💾 DISK STATE: 1691 jobs on disk
[2026-02-01T08:22:42.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1692
[2026-02-01T08:22:42.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:42.813Z] [BOT] 💾 AFTER MERGE: 1692 jobs (merged disk + memory)
[2026-02-01T08:22:42.814Z] [BOT] ✅ No jobs to archive (all 1692 jobs within 7-day window)
[2026-02-01T08:22:42.914Z] [BOT] 💾 Saved posted_jobs.json: 1692 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:44.417Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Engineering - Development" @ ORG_a06522bc Scientific
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:44.689Z] [BOT] ✅ Posted message: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific
[2026-02-01T08:22:44.690Z] [BOT] 💾 Added channel posting: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific → category channel (1 total channels)
[2026-02-01T08:22:44.690Z] [BOT] 💾 BEFORE MERGE: 1693 jobs in memory (cached)
[2026-02-01T08:22:44.736Z] [BOT] ✅ Loaded V2 database: 1692 jobs
💾 DISK STATE: 1692 jobs on disk
[2026-02-01T08:22:44.737Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1693
[2026-02-01T08:22:44.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:44.740Z] [BOT] 💾 AFTER MERGE: 1693 jobs (merged disk + memory)
[2026-02-01T08:22:44.741Z] [BOT] ✅ No jobs to archive (all 1693 jobs within 7-day window)
[2026-02-01T08:22:44.844Z] [BOT] 💾 Saved posted_jobs.json: 1693 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:46.686Z] [BOT] ✅ Posted message: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #📍・JID_6daed763
[2026-02-01T08:22:46.687Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:22:46.687Z] [BOT] 💾 Added channel posting: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific → location channel (2 total channels)
[2026-02-01T08:22:46.687Z] [BOT] 💾 BEFORE MERGE: 1693 jobs in memory (cached)
[2026-02-01T08:22:46.732Z] [BOT] ✅ Loaded V2 database: 1693 jobs
💾 DISK STATE: 1693 jobs on disk
[2026-02-01T08:22:46.733Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1693
[2026-02-01T08:22:46.736Z] [BOT] 🔀 Deep merged: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:46.736Z] [BOT] 💾 AFTER MERGE: 1693 jobs (merged disk + memory)
[2026-02-01T08:22:46.737Z] [BOT] ✅ No jobs to archive (all 1693 jobs within 7-day window)
[2026-02-01T08:22:46.836Z] [BOT] 💾 Saved posted_jobs.json: 1693 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:48.338Z] [BOT] 📍 [ROUTING] "Associate Software Software Engineer" @ ORG_ba19e9c3 Hat
   Category: TECH (matched: "software")
[2026-02-01T08:22:48.338Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:48.541Z] [BOT] ✅ Posted message: Associate Software Software Engineer @ ORG_ba19e9c3 Hat in #💻・tech-jobs
[2026-02-01T08:22:48.541Z] [BOT] ✅ Industry: Associate Software Software Engineer @ ORG_ba19e9c3 Hat
[2026-02-01T08:22:48.542Z] [BOT] 💾 Added channel posting: Associate Software Software Engineer @ ORG_ba19e9c3 Hat → category channel (1 total channels)
[2026-02-01T08:22:48.542Z] [BOT] 💾 BEFORE MERGE: 1694 jobs in memory (cached)
[2026-02-01T08:22:48.589Z] [BOT] ✅ Loaded V2 database: 1693 jobs
💾 DISK STATE: 1693 jobs on disk
[2026-02-01T08:22:48.590Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1694
[2026-02-01T08:22:48.593Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1694 jobs (merged disk + memory)
[2026-02-01T08:22:48.594Z] [BOT] ✅ No jobs to archive (all 1694 jobs within 7-day window)
[2026-02-01T08:22:48.698Z] [BOT] 💾 Saved posted_jobs.json: 1694 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:50.481Z] [BOT] ✅ Posted message: Associate Software Software Engineer @ ORG_ba19e9c3 Hat in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:22:50.481Z] [BOT] 💾 Added channel posting: Associate Software Software Engineer @ ORG_ba19e9c3 Hat → location channel (2 total channels)
[2026-02-01T08:22:50.482Z] [BOT] 💾 BEFORE MERGE: 1694 jobs in memory (cached)
[2026-02-01T08:22:50.527Z] [BOT] ✅ Loaded V2 database: 1694 jobs
💾 DISK STATE: 1694 jobs on disk
[2026-02-01T08:22:50.528Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1694
[2026-02-01T08:22:50.531Z] [BOT] 🔀 Deep merged: Associate Software Software Engineer @ ORG_ba19e9c3 Hat (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:50.531Z] [BOT] 💾 AFTER MERGE: 1694 jobs (merged disk + memory)
[2026-02-01T08:22:50.532Z] [BOT] ✅ No jobs to archive (all 1694 jobs within 7-day window)
[2026-02-01T08:22:50.633Z] [BOT] 💾 Saved posted_jobs.json: 1694 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:52.135Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
[2026-02-01T08:22:52.136Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:52.329Z] [BOT] ✅ Posted message: Mission Operations Engineer @ nominal in #💻・tech-jobs
[2026-02-01T08:22:52.329Z] [BOT] ✅ Industry: Mission Operations Engineer @ nominal
[2026-02-01T08:22:52.329Z] [BOT] 💾 Added channel posting: Mission Operations Engineer @ nominal → category channel (1 total channels)
[2026-02-01T08:22:52.330Z] [BOT] 💾 BEFORE MERGE: 1695 jobs in memory (cached)
[2026-02-01T08:22:52.382Z] [BOT] ✅ Loaded V2 database: 1694 jobs
💾 DISK STATE: 1694 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1695
[2026-02-01T08:22:52.388Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:52.388Z] [BOT] 💾 AFTER MERGE: 1695 jobs (merged disk + memory)
[2026-02-01T08:22:52.395Z] [BOT] ✅ No jobs to archive (all 1695 jobs within 7-day window)
[2026-02-01T08:22:52.498Z] [BOT] 💾 Saved posted_jobs.json: 1695 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:54.305Z] [BOT] ✅ Posted message: Mission Operations Engineer @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:22:54.305Z] [BOT] 💾 Added channel posting: Mission Operations Engineer @ nominal → location channel (2 total channels)
[2026-02-01T08:22:54.305Z] [BOT] 💾 BEFORE MERGE: 1695 jobs in memory (cached)
[2026-02-01T08:22:54.349Z] [BOT] ✅ Loaded V2 database: 1695 jobs
💾 DISK STATE: 1695 jobs on disk
[2026-02-01T08:22:54.350Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1695
[2026-02-01T08:22:54.353Z] [BOT] 🔀 Deep merged: Mission Operations Engineer @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:54.353Z] [BOT] 💾 AFTER MERGE: 1695 jobs (merged disk + memory)
[2026-02-01T08:22:54.354Z] [BOT] ✅ No jobs to archive (all 1695 jobs within 7-day window)
[2026-02-01T08:22:54.449Z] [BOT] 💾 Saved posted_jobs.json: 1695 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:55.951Z] [BOT] 📍 [ROUTING] "Multilingual Tutor" @ xAI
[2026-02-01T08:22:55.951Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:22:56.188Z] [BOT] ✅ Posted message: Multilingual Tutor @ xAI in #💻・tech-jobs
[2026-02-01T08:22:56.188Z] [BOT] ✅ Industry: Multilingual Tutor @ xAI
[2026-02-01T08:22:56.188Z] [BOT] 💾 Added channel posting: Multilingual Tutor @ xAI → category channel (1 total channels)
[2026-02-01T08:22:56.189Z] [BOT] 💾 BEFORE MERGE: 1696 jobs in memory (cached)
[2026-02-01T08:22:56.234Z] [BOT] ✅ Loaded V2 database: 1695 jobs
💾 DISK STATE: 1695 jobs on disk
[2026-02-01T08:22:56.234Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1696
[2026-02-01T08:22:56.237Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:22:56.237Z] [BOT] 💾 AFTER MERGE: 1696 jobs (merged disk + memory)
[2026-02-01T08:22:56.238Z] [BOT] ✅ No jobs to archive (all 1696 jobs within 7-day window)
[2026-02-01T08:22:56.360Z] [BOT] 💾 Saved posted_jobs.json: 1696 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:22:58.176Z] [BOT] ✅ Posted message: Multilingual Tutor @ xAI in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T08:22:58.176Z] [BOT] 💾 Added channel posting: Multilingual Tutor @ xAI → location channel (2 total channels)
[2026-02-01T08:22:58.176Z] [BOT] 💾 BEFORE MERGE: 1696 jobs in memory (cached)
[2026-02-01T08:22:58.222Z] [BOT] ✅ Loaded V2 database: 1696 jobs
💾 DISK STATE: 1696 jobs on disk
[2026-02-01T08:22:58.222Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1696
[2026-02-01T08:22:58.225Z] [BOT] 🔀 Deep merged: Multilingual Tutor @ xAI (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:22:58.225Z] [BOT] 💾 AFTER MERGE: 1696 jobs (merged disk + memory)
[2026-02-01T08:22:58.226Z] [BOT] ✅ No jobs to archive (all 1696 jobs within 7-day window)
[2026-02-01T08:22:58.325Z] [BOT] 💾 Saved posted_jobs.json: 1696 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:23:02.828Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T08:23:02.830Z] [BOT] 📍 [ROUTING] "Data Analyst - Insights and Product Analytics" @ ORG_0760d36d
   Category: AI (matched: "machine learning")
[2026-02-01T08:23:02.830Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T08:23:04.029Z] [BOT] ✅ Posted message: Data Analyst - Insights and Product Analytics @ ORG_0760d36d in #🤖・ai-jobs
  ✅ Industry: Data Analyst - Insights and Product Analytics @ ORG_0760d36d
[2026-02-01T08:23:04.029Z] [BOT] 💾 Added channel posting: Data Analyst - Insights and Product Analytics @ ORG_0760d36d → category channel (1 total channels)
[2026-02-01T08:23:04.030Z] [BOT] 💾 BEFORE MERGE: 1697 jobs in memory (cached)
[2026-02-01T08:23:04.075Z] [BOT] ✅ Loaded V2 database: 1696 jobs
💾 DISK STATE: 1696 jobs on disk
[2026-02-01T08:23:04.076Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1697
[2026-02-01T08:23:04.078Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:23:04.079Z] [BOT] 💾 AFTER MERGE: 1697 jobs (merged disk + memory)
[2026-02-01T08:23:04.080Z] [BOT] ✅ No jobs to archive (all 1697 jobs within 7-day window)
[2026-02-01T08:23:04.198Z] [BOT] 💾 Saved posted_jobs.json: 1697 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:23:05.921Z] [BOT] ✅ Posted message: Data Analyst - Insights and Product Analytics @ ORG_0760d36d in #📍・JID_6daed763
[2026-02-01T08:23:05.921Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T08:23:05.921Z] [BOT] 💾 Added channel posting: Data Analyst - Insights and Product Analytics @ ORG_0760d36d → location channel (2 total channels)
[2026-02-01T08:23:05.921Z] [BOT] 💾 BEFORE MERGE: 1697 jobs in memory (cached)
[2026-02-01T08:23:05.968Z] [BOT] ✅ Loaded V2 database: 1697 jobs
💾 DISK STATE: 1697 jobs on disk
[2026-02-01T08:23:05.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1697
[2026-02-01T08:23:05.971Z] [BOT] 🔀 Deep merged: Data Analyst - Insights and Product Analytics @ ORG_0760d36d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:23:05.971Z] [BOT] 💾 AFTER MERGE: 1697 jobs (merged disk + memory)
[2026-02-01T08:23:05.972Z] [BOT] ✅ No jobs to archive (all 1697 jobs within 7-day window)
[2026-02-01T08:23:06.088Z] [BOT] 💾 Saved posted_jobs.json: 1697 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:23:10.589Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T08:23:10.590Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ebdfa283..." not found, but found as SHA256 "d266bf5984375ad8"
[2026-02-01T08:23:10.590Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-JID_c07beaa6 (posted within 7 days)
[2026-02-01T08:23:10.591Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf35e57b-costar_camp..." not found, but found as SHA256 "986b8c4f0ae297b5"
⏭️  Skipping duplicate: JID_bf35e57b-costar_campus-JID_c6957ea8-ca_r37014 (posted within 7 days)
[2026-02-01T08:23:10.591Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e9d5cb3a..." not found, but found as SHA256 "7aa53a1ae4df0f30"
⏭️  Skipping duplicate: JID_ba2460f5 (posted within 7 days)
[2026-02-01T08:23:10.592Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6f58f2a4-centene_ex..." not found, but found as SHA256 "bd179346956fd475"
[2026-02-01T08:23:10.592Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_3db5fdbf-i_1592119-1 (posted within 7 days)
[2026-02-01T08:23:10.592Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f9e6f6c..." not found, but found as SHA256 "3f7640184bc3f022"
[2026-02-01T08:23:10.592Z] [BOT] ⏭️  Skipping duplicate: JID_06576a8b (posted within 7 days)
[2026-02-01T08:23:10.592Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f5e74117-..." not found, but found as SHA256 "bebf72de68465bcb"
[2026-02-01T08:23:10.592Z] [BOT] ⏭️  Skipping duplicate: JID_39a66154-engineer_r-050446-1 (posted within 7 days)
[2026-02-01T08:23:10.592Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_481b6d38..." not found, but found as SHA256 "7f3a56e1f83e574d"
[2026-02-01T08:23:10.592Z] [BOT] ⏭️  Skipping duplicate: JID_ae0ea2d7-junior_25905888 (posted within 7 days)
[2026-02-01T08:23:10.592Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45c0306a..." not found, but found as SHA256 "5939d7b4f9d5569a"
[2026-02-01T08:23:10.593Z] [BOT] ⏭️  Skipping duplicate: JID_c35b1f84-graduates_103573 (posted within 7 days)
[2026-02-01T08:23:10.593Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_53a6f01e..." not found, but found as SHA256 "827a1344bd768a15"
[2026-02-01T08:23:10.593Z] [BOT] ⏭️  Skipping duplicate: JID_47c4946b (posted within 7 days)
[2026-02-01T08:23:10.593Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_955f2c8c..." not found, but found as SHA256 "52da0813bec53143"
[2026-02-01T08:23:10.593Z] [BOT] ⏭️  Skipping duplicate: JID_133ef313 (posted within 7 days)
[2026-02-01T08:23:10.757Z] [BOT] ✅ Loaded pending queue: 2944 total (1217 pending, 50 enriched, 1677 posted)
[2026-02-01T08:23:10.935Z] [BOT] ✅ Saved pending queue: 2944 total (1217 pending, 40 enriched, 1687 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T08:23:11.035Z] [BOT] 📂 Loaded 11768 existing routing entries
[2026-02-01T08:23:11.160Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T08:23:11.160Z] [BOT] Total entries: 11778
   Timestamp: 2026-02-01T08:23:11.120Z
[2026-02-01T08:23:11.161Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 26
   Successful: 18
[2026-02-01T08:23:11.161Z] [BOT] Failed: 0
   Skipped: 8
[2026-02-01T08:23:11.161Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T08:23:11.161Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
[2026-02-01T08:23:11.161Z] [BOT] Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 3 posts
     3. #📍・JID_6daed763: 3 posts
     4. #📊・JID_fb739488: 2 posts
     5. #🌉・JID_739bbc0b: 2 posts
[2026-02-01T08:23:11.161Z] [BOT] [STATS] Channel stats saved
[2026-02-01T08:23:11.162Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1697 jobs in memory (cached)
[2026-02-01T08:23:11.228Z] [BOT] ✅ Loaded V2 database: 1697 jobs
💾 DISK STATE: 1697 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1697
[2026-02-01T08:23:11.232Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1697 jobs (merged disk + memory)
[2026-02-01T08:23:11.233Z] [BOT] ✅ No jobs to archive (all 1697 jobs within 7-day window)
[2026-02-01T08:23:11.338Z] [BOT] 💾 Saved posted_jobs.json: 1697 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:23:11.338Z] [BOT] ✅ Database saved successfully
[2026-02-01T08:23:13.360Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*