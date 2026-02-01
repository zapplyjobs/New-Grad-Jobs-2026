# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T09:35:07.503Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T09:34:17.806Z] ========================================
[2026-02-01T09:34:17.808Z] Discord Bot Execution Log
[2026-02-01T09:34:17.808Z] Environment: GitHub Actions
[2026-02-01T09:34:17.808Z] Node Version: v20.20.0
[2026-02-01T09:34:17.808Z] ========================================
[2026-02-01T09:34:17.808Z] Environment Variables Check:
[2026-02-01T09:34:17.808Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T09:34:17.808Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T09:34:17.808Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T09:34:17.808Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T09:34:17.808Z] 
Multi-Channel Configuration:
[2026-02-01T09:34:17.809Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T09:34:17.809Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T09:34:17.809Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:34:17.809Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T09:34:17.809Z] 
Data Files Check:
[2026-02-01T09:34:17.810Z] .github/data/new_jobs.json: ✅ Exists (10 items, 62282 bytes)
[2026-02-01T09:34:17.859Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9344050 bytes)
[2026-02-01T09:34:17.859Z] 
========================================
[2026-02-01T09:34:17.859Z] Starting Enhanced Discord Bot...
[2026-02-01T09:34:17.859Z] ========================================
[2026-02-01T09:34:18.437Z] [BOT] ✅ Loaded V2 database: 1727 jobs
[2026-02-01T09:34:18.890Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T09:34:18.891Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T09:34:18.891Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T09:34:19.018Z] [BOT] ✅ Loaded pending queue: 2944 total (1177 pending, 50 enriched, 1717 posted)
[2026-02-01T09:34:19.018Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:34:19.019Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T09:34:19.019Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T09:34:19.019Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:34:19.020Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T09:34:19.020Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T09:34:19.020Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T09:34:19.021Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T09:34:19.021Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T09:34:19.021Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T09:34:19.021Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T09:34:19.022Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T09:34:19.022Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T09:34:19.024Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T09:34:19.036Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T09:34:19.036Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T09:34:19.037Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T09:34:19.038Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
[2026-02-01T09:34:19.038Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T09:34:19.038Z] [BOT] - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T09:34:19.041Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T09:34:19.042Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_964fffee
[2026-02-01T09:34:19.042Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:19.059Z] [BOT ERROR] (node:3575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T09:34:19.571Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_964fffee in #💻・tech-jobs
[2026-02-01T09:34:19.571Z] [BOT] ✅ Industry: Software Engineer - New Grad @ ORG_964fffee
[2026-02-01T09:34:19.572Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_964fffee → category channel (1 total channels)
[2026-02-01T09:34:19.572Z] [BOT] 💾 BEFORE MERGE: 1728 jobs in memory (cached)
[2026-02-01T09:34:19.607Z] [BOT] ✅ Loaded V2 database: 1727 jobs
💾 DISK STATE: 1727 jobs on disk
[2026-02-01T09:34:19.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1728
[2026-02-01T09:34:19.611Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:19.612Z] [BOT] 💾 AFTER MERGE: 1728 jobs (merged disk + memory)
[2026-02-01T09:34:19.613Z] [BOT] ✅ No jobs to archive (all 1728 jobs within 7-day window)
[2026-02-01T09:34:19.735Z] [BOT] 💾 Saved posted_jobs.json: 1728 active jobs
[2026-02-01T09:34:19.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:21.423Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_964fffee in #🌉・JID_739bbc0b
[2026-02-01T09:34:21.423Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:34:21.423Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_964fffee → location channel (2 total channels)
[2026-02-01T09:34:21.423Z] [BOT] 💾 BEFORE MERGE: 1728 jobs in memory (cached)
[2026-02-01T09:34:21.460Z] [BOT] ✅ Loaded V2 database: 1728 jobs
[2026-02-01T09:34:21.460Z] [BOT] 💾 DISK STATE: 1728 jobs on disk
[2026-02-01T09:34:21.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1728
[2026-02-01T09:34:21.464Z] [BOT] 🔀 Deep merged: Software Engineer - New Grad @ ORG_964fffee (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:21.464Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1728 jobs (merged disk + memory)
[2026-02-01T09:34:21.465Z] [BOT] ✅ No jobs to archive (all 1728 jobs within 7-day window)
[2026-02-01T09:34:21.558Z] [BOT] 💾 Saved posted_jobs.json: 1728 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:23.060Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T09:34:23.060Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:23.334Z] [BOT] ✅ Posted message: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping in #💻・tech-jobs
[2026-02-01T09:34:23.334Z] [BOT] ✅ Industry: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping
[2026-02-01T09:34:23.335Z] [BOT] 💾 Added channel posting: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping → category channel (1 total channels)
[2026-02-01T09:34:23.335Z] [BOT] 💾 BEFORE MERGE: 1729 jobs in memory (cached)
[2026-02-01T09:34:23.372Z] [BOT] ✅ Loaded V2 database: 1728 jobs
💾 DISK STATE: 1728 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1729
[2026-02-01T09:34:23.377Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:23.383Z] [BOT] 💾 AFTER MERGE: 1729 jobs (merged disk + memory)
[2026-02-01T09:34:23.384Z] [BOT] ✅ No jobs to archive (all 1729 jobs within 7-day window)
[2026-02-01T09:34:23.478Z] [BOT] 💾 Saved posted_jobs.json: 1729 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:25.261Z] [BOT] ✅ Posted message: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping in #📍・JID_6daed763
[2026-02-01T09:34:25.261Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:34:25.261Z] [BOT] 💾 Added channel posting: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping → location channel (2 total channels)
[2026-02-01T09:34:25.261Z] [BOT] 💾 BEFORE MERGE: 1729 jobs in memory (cached)
[2026-02-01T09:34:25.293Z] [BOT] ✅ Loaded V2 database: 1729 jobs
💾 DISK STATE: 1729 jobs on disk
[2026-02-01T09:34:25.293Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1729
[2026-02-01T09:34:25.296Z] [BOT] 🔀 Deep merged: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:25.297Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1729 jobs (merged disk + memory)
[2026-02-01T09:34:25.298Z] [BOT] ✅ No jobs to archive (all 1729 jobs within 7-day window)
[2026-02-01T09:34:25.391Z] [BOT] 💾 Saved posted_jobs.json: 1729 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:26.893Z] [BOT] 📍 [ROUTING] "Government Contracts Strategist" @ nominal
[2026-02-01T09:34:26.893Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:27.123Z] [BOT] ✅ Posted message: Government Contracts Strategist @ nominal in #💻・tech-jobs
[2026-02-01T09:34:27.123Z] [BOT] ✅ Industry: Government Contracts Strategist @ nominal
[2026-02-01T09:34:27.124Z] [BOT] 💾 Added channel posting: Government Contracts Strategist @ nominal → category channel (1 total channels)
[2026-02-01T09:34:27.124Z] [BOT] 💾 BEFORE MERGE: 1730 jobs in memory (cached)
[2026-02-01T09:34:27.156Z] [BOT] ✅ Loaded V2 database: 1729 jobs
💾 DISK STATE: 1729 jobs on disk
[2026-02-01T09:34:27.157Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1730
[2026-02-01T09:34:27.160Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:27.160Z] [BOT] 💾 AFTER MERGE: 1730 jobs (merged disk + memory)
[2026-02-01T09:34:27.161Z] [BOT] ✅ No jobs to archive (all 1730 jobs within 7-day window)
[2026-02-01T09:34:27.260Z] [BOT] 💾 Saved posted_jobs.json: 1730 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:28.764Z] [BOT] 📍 [ROUTING] "Software Engineer – 2026 New Grad" @ ORG_3be2d18e
[2026-02-01T09:34:28.764Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:29.071Z] [BOT] ✅ Posted message: Software Engineer – 2026 New Grad @ ORG_3be2d18e in #💻・tech-jobs
[2026-02-01T09:34:29.071Z] [BOT] ✅ Industry: Software Engineer – 2026 New Grad @ ORG_3be2d18e
[2026-02-01T09:34:29.072Z] [BOT] 💾 Added channel posting: Software Engineer – 2026 New Grad @ ORG_3be2d18e → category channel (1 total channels)
[2026-02-01T09:34:29.072Z] [BOT] 💾 BEFORE MERGE: 1731 jobs in memory (cached)
[2026-02-01T09:34:29.103Z] [BOT] ✅ Loaded V2 database: 1730 jobs
💾 DISK STATE: 1730 jobs on disk
[2026-02-01T09:34:29.103Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1731
[2026-02-01T09:34:29.107Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:29.107Z] [BOT] 💾 AFTER MERGE: 1731 jobs (merged disk + memory)
[2026-02-01T09:34:29.108Z] [BOT] ✅ No jobs to archive (all 1731 jobs within 7-day window)
[2026-02-01T09:34:29.196Z] [BOT] 💾 Saved posted_jobs.json: 1731 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:30.951Z] [BOT] ✅ Posted message: Software Engineer – 2026 New Grad @ ORG_3be2d18e in #🌉・JID_739bbc0b
[2026-02-01T09:34:30.951Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:34:30.952Z] [BOT] 💾 Added channel posting: Software Engineer – 2026 New Grad @ ORG_3be2d18e → location channel (2 total channels)
[2026-02-01T09:34:30.952Z] [BOT] 💾 BEFORE MERGE: 1731 jobs in memory (cached)
[2026-02-01T09:34:30.985Z] [BOT] ✅ Loaded V2 database: 1731 jobs
💾 DISK STATE: 1731 jobs on disk
[2026-02-01T09:34:30.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1731
[2026-02-01T09:34:30.989Z] [BOT] 🔀 Deep merged: Software Engineer – 2026 New Grad @ ORG_3be2d18e (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:30.989Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1731 jobs (merged disk + memory)
[2026-02-01T09:34:30.991Z] [BOT] ✅ No jobs to archive (all 1731 jobs within 7-day window)
[2026-02-01T09:34:31.083Z] [BOT] 💾 Saved posted_jobs.json: 1731 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:32.585Z] [BOT] 📍 [ROUTING] "Founding Full Stack Engineer" @ ORG_15ceb830
   Category: TECH (matched: "web engineer")
[2026-02-01T09:34:32.585Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:32.790Z] [BOT] ✅ Posted message: Founding Full Stack Engineer @ ORG_15ceb830 in #💻・tech-jobs
  ✅ Industry: Founding Full Stack Engineer @ ORG_15ceb830
[2026-02-01T09:34:32.791Z] [BOT] 💾 Added channel posting: Founding Full Stack Engineer @ ORG_15ceb830 → category channel (1 total channels)
[2026-02-01T09:34:32.791Z] [BOT] 💾 BEFORE MERGE: 1732 jobs in memory (cached)
[2026-02-01T09:34:32.827Z] [BOT] ✅ Loaded V2 database: 1731 jobs
[2026-02-01T09:34:32.830Z] [BOT] 💾 DISK STATE: 1731 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1732
[2026-02-01T09:34:32.834Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:32.834Z] [BOT] 💾 AFTER MERGE: 1732 jobs (merged disk + memory)
[2026-02-01T09:34:32.836Z] [BOT] ✅ No jobs to archive (all 1732 jobs within 7-day window)
[2026-02-01T09:34:32.933Z] [BOT] 💾 Saved posted_jobs.json: 1732 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:34.814Z] [BOT] ✅ Posted message: Founding Full Stack Engineer @ ORG_15ceb830 in #🗽・JID_98d4f0de
[2026-02-01T09:34:34.814Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T09:34:34.814Z] [BOT] 💾 Added channel posting: Founding Full Stack Engineer @ ORG_15ceb830 → location channel (2 total channels)
[2026-02-01T09:34:34.815Z] [BOT] 💾 BEFORE MERGE: 1732 jobs in memory (cached)
[2026-02-01T09:34:34.846Z] [BOT] ✅ Loaded V2 database: 1732 jobs
💾 DISK STATE: 1732 jobs on disk
[2026-02-01T09:34:34.847Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1732
[2026-02-01T09:34:34.850Z] [BOT] 🔀 Deep merged: Founding Full Stack Engineer @ ORG_15ceb830 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:34:34.850Z] [BOT] 💾 AFTER MERGE: 1732 jobs (merged disk + memory)
[2026-02-01T09:34:34.851Z] [BOT] ✅ No jobs to archive (all 1732 jobs within 7-day window)
[2026-02-01T09:34:34.973Z] [BOT] 💾 Saved posted_jobs.json: 1732 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:36.473Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_352dd990
[2026-02-01T09:34:36.473Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:36.657Z] [BOT] ✅ Posted message: Software Engineer @ ORG_352dd990 in #💻・tech-jobs
[2026-02-01T09:34:36.657Z] [BOT] ✅ Industry: Software Engineer @ ORG_352dd990
[2026-02-01T09:34:36.658Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_352dd990 → category channel (1 total channels)
[2026-02-01T09:34:36.658Z] [BOT] 💾 BEFORE MERGE: 1733 jobs in memory (cached)
[2026-02-01T09:34:36.689Z] [BOT] ✅ Loaded V2 database: 1732 jobs
💾 DISK STATE: 1732 jobs on disk
[2026-02-01T09:34:36.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1733
[2026-02-01T09:34:36.693Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:36.693Z] [BOT] 💾 AFTER MERGE: 1733 jobs (merged disk + memory)
[2026-02-01T09:34:36.694Z] [BOT] ✅ No jobs to archive (all 1733 jobs within 7-day window)
[2026-02-01T09:34:36.783Z] [BOT] 💾 Saved posted_jobs.json: 1733 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:40.255Z] [BOT] ✅ Posted message: Software Engineer @ ORG_352dd990 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T09:34:40.255Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_352dd990 → location channel (2 total channels)
[2026-02-01T09:34:40.256Z] [BOT] 💾 BEFORE MERGE: 1733 jobs in memory (cached)
[2026-02-01T09:34:40.297Z] [BOT] ✅ Loaded V2 database: 1733 jobs
💾 DISK STATE: 1733 jobs on disk
[2026-02-01T09:34:40.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1733
[2026-02-01T09:34:40.301Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_352dd990 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:40.301Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1733 jobs (merged disk + memory)
[2026-02-01T09:34:40.303Z] [BOT] ✅ No jobs to archive (all 1733 jobs within 7-day window)
[2026-02-01T09:34:40.406Z] [BOT] 💾 Saved posted_jobs.json: 1733 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:41.906Z] [BOT] 📍 [ROUTING] "New Graduate Engineer, Software (Starship)" @ ORG_afd623b1
[2026-02-01T09:34:41.906Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:34:42.107Z] [BOT] ✅ Posted message: New Graduate Engineer, Software (Starship) @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: New Graduate Engineer, Software (Starship) @ ORG_afd623b1
[2026-02-01T09:34:42.108Z] [BOT] 💾 Added channel posting: New Graduate Engineer, Software (Starship) @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T09:34:42.108Z] [BOT] 💾 BEFORE MERGE: 1734 jobs in memory (cached)
[2026-02-01T09:34:42.139Z] [BOT] ✅ Loaded V2 database: 1733 jobs
💾 DISK STATE: 1733 jobs on disk
[2026-02-01T09:34:42.140Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1734
[2026-02-01T09:34:42.143Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:42.143Z] [BOT] 💾 AFTER MERGE: 1734 jobs (merged disk + memory)
[2026-02-01T09:34:42.144Z] [BOT] ✅ No jobs to archive (all 1734 jobs within 7-day window)
[2026-02-01T09:34:42.232Z] [BOT] 💾 Saved posted_jobs.json: 1734 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:43.941Z] [BOT] ✅ Posted message: New Graduate Engineer, Software (Starship) @ ORG_afd623b1 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:34:43.941Z] [BOT] 💾 Added channel posting: New Graduate Engineer, Software (Starship) @ ORG_afd623b1 → location channel (2 total channels)
[2026-02-01T09:34:43.942Z] [BOT] 💾 BEFORE MERGE: 1734 jobs in memory (cached)
[2026-02-01T09:34:43.972Z] [BOT] ✅ Loaded V2 database: 1734 jobs
💾 DISK STATE: 1734 jobs on disk
[2026-02-01T09:34:43.973Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1734
[2026-02-01T09:34:43.976Z] [BOT] 🔀 Deep merged: New Graduate Engineer, Software (Starship) @ ORG_afd623b1 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:43.976Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1734 jobs (merged disk + memory)
[2026-02-01T09:34:43.977Z] [BOT] ✅ No jobs to archive (all 1734 jobs within 7-day window)
[2026-02-01T09:34:44.070Z] [BOT] 💾 Saved posted_jobs.json: 1734 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:48.572Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T09:34:48.573Z] [BOT] 📍 [ROUTING] "Junior Data Analyst" @ ORG_eb5350fc
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T09:34:48.573Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T09:34:48.861Z] [BOT] ✅ Posted message: Junior Data Analyst @ ORG_eb5350fc in #📊・JID_fb739488
  ✅ Industry: Junior Data Analyst @ ORG_eb5350fc
[2026-02-01T09:34:48.862Z] [BOT] 💾 Added channel posting: Junior Data Analyst @ ORG_eb5350fc → category channel (1 total channels)
[2026-02-01T09:34:48.862Z] [BOT] 💾 BEFORE MERGE: 1735 jobs in memory (cached)
[2026-02-01T09:34:48.895Z] [BOT] ✅ Loaded V2 database: 1734 jobs
💾 DISK STATE: 1734 jobs on disk
[2026-02-01T09:34:48.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1735
[2026-02-01T09:34:48.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:48.898Z] [BOT] 💾 AFTER MERGE: 1735 jobs (merged disk + memory)
[2026-02-01T09:34:48.899Z] [BOT] ✅ No jobs to archive (all 1735 jobs within 7-day window)
[2026-02-01T09:34:48.989Z] [BOT] 💾 Saved posted_jobs.json: 1735 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:53.492Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T09:34:53.493Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_b26219beina
[2026-02-01T09:34:53.493Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:34:53.730Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_b26219beina in #🤖・ai-jobs
[2026-02-01T09:34:53.730Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_b26219beina
[2026-02-01T09:34:53.731Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_b26219beina → category channel (1 total channels)
[2026-02-01T09:34:53.731Z] [BOT] 💾 BEFORE MERGE: 1736 jobs in memory (cached)
[2026-02-01T09:34:53.763Z] [BOT] ✅ Loaded V2 database: 1735 jobs
💾 DISK STATE: 1735 jobs on disk
[2026-02-01T09:34:53.763Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1736
[2026-02-01T09:34:53.766Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:53.766Z] [BOT] 💾 AFTER MERGE: 1736 jobs (merged disk + memory)
[2026-02-01T09:34:53.767Z] [BOT] ✅ No jobs to archive (all 1736 jobs within 7-day window)
[2026-02-01T09:34:53.871Z] [BOT] 💾 Saved posted_jobs.json: 1736 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:55.544Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_b26219beina in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T09:34:55.545Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_b26219beina → location channel (2 total channels)
[2026-02-01T09:34:55.545Z] [BOT] 💾 BEFORE MERGE: 1736 jobs in memory (cached)
[2026-02-01T09:34:55.576Z] [BOT] ✅ Loaded V2 database: 1736 jobs
💾 DISK STATE: 1736 jobs on disk
[2026-02-01T09:34:55.577Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1736
[2026-02-01T09:34:55.580Z] [BOT] 🔀 Deep merged: Machine Learning Engineer @ ORG_b26219beina (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:34:55.580Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1736 jobs (merged disk + memory)
[2026-02-01T09:34:55.581Z] [BOT] ✅ No jobs to archive (all 1736 jobs within 7-day window)
[2026-02-01T09:34:55.691Z] [BOT] 💾 Saved posted_jobs.json: 1736 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:57.189Z] [BOT] 📍 [ROUTING] "OSTP Software Developer" @ ORG_85d40353
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T09:34:57.190Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:34:57.449Z] [BOT] ✅ Posted message: OSTP Software Developer @ ORG_85d40353 in #🤖・ai-jobs
  ✅ Industry: OSTP Software Developer @ ORG_85d40353
[2026-02-01T09:34:57.450Z] [BOT] 💾 Added channel posting: OSTP Software Developer @ ORG_85d40353 → category channel (1 total channels)
[2026-02-01T09:34:57.450Z] [BOT] 💾 BEFORE MERGE: 1737 jobs in memory (cached)
[2026-02-01T09:34:57.482Z] [BOT] ✅ Loaded V2 database: 1736 jobs
💾 DISK STATE: 1736 jobs on disk
[2026-02-01T09:34:57.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1737
[2026-02-01T09:34:57.485Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:34:57.485Z] [BOT] 💾 AFTER MERGE: 1737 jobs (merged disk + memory)
[2026-02-01T09:34:57.486Z] [BOT] ✅ No jobs to archive (all 1737 jobs within 7-day window)
[2026-02-01T09:34:57.575Z] [BOT] 💾 Saved posted_jobs.json: 1737 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:34:59.253Z] [BOT] ✅ Posted message: OSTP Software Developer @ ORG_85d40353 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T09:34:59.253Z] [BOT] 💾 Added channel posting: OSTP Software Developer @ ORG_85d40353 → location channel (2 total channels)
[2026-02-01T09:34:59.253Z] [BOT] 💾 BEFORE MERGE: 1737 jobs in memory (cached)
[2026-02-01T09:34:59.287Z] [BOT] ✅ Loaded V2 database: 1737 jobs
💾 DISK STATE: 1737 jobs on disk
[2026-02-01T09:34:59.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1737
[2026-02-01T09:34:59.290Z] [BOT] 🔀 Deep merged: OSTP Software Developer @ ORG_85d40353 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:34:59.290Z] [BOT] 💾 AFTER MERGE: 1737 jobs (merged disk + memory)
[2026-02-01T09:34:59.291Z] [BOT] ✅ No jobs to archive (all 1737 jobs within 7-day window)
[2026-02-01T09:34:59.382Z] [BOT] 💾 Saved posted_jobs.json: 1737 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:35:03.884Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T09:35:03.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0f28acae..." not found, but found as SHA256 "bd4dd9d76aec7bab"
[2026-02-01T09:35:03.886Z] [BOT] ⏭️  Skipping duplicate: JID_b387d0a5 (posted within 7 days)
[2026-02-01T09:35:03.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8ab9aa4c..." not found, but found as SHA256 "d5f565da67f2981e"
⏭️  Skipping duplicate: JID_4d58c0b7-cx_1001-job-12967 (posted within 7 days)
[2026-02-01T09:35:03.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_308276c9-..." not found, but found as SHA256 "88cb8d384ee92003"
⏭️  Skipping duplicate: JID_58099246 (posted within 7 days)
[2026-02-01T09:35:03.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d7c99c3..." not found, but found as SHA256 "2d5f2f4b39cfd66e"
[2026-02-01T09:35:03.887Z] [BOT] ⏭️  Skipping duplicate: JID_1c1f6075 (posted within 7 days)
[2026-02-01T09:35:03.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_613501ca..." not found, but found as SHA256 "101c37ccf633bd6c"
[2026-02-01T09:35:03.887Z] [BOT] ⏭️  Skipping duplicate: JID_0cbe1638-cx_1-job-3499 (posted within 7 days)
[2026-02-01T09:35:03.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9afc9e5..." not found, but found as SHA256 "5658dcd098726423"
[2026-02-01T09:35:03.888Z] [BOT] ⏭️  Skipping duplicate: JID_b4a39376 (posted within 7 days)
[2026-02-01T09:35:03.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e19dac4c..." not found, but found as SHA256 "b949aad22af5fbae"
[2026-02-01T09:35:03.888Z] [BOT] ⏭️  Skipping duplicate: JID_0a2c675b (posted within 7 days)
[2026-02-01T09:35:03.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_81ae9300..." not found, but found as SHA256 "7a6e06a2e16523d2"
[2026-02-01T09:35:03.888Z] [BOT] ⏭️  Skipping duplicate: JID_0d147246 (posted within 7 days)
[2026-02-01T09:35:03.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90d944b5-..." not found, but found as SHA256 "566ceb14245f2f14"
[2026-02-01T09:35:03.888Z] [BOT] ⏭️  Skipping duplicate: JID_9f81c82f (posted within 7 days)
[2026-02-01T09:35:03.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c53e0f36..." not found, but found as SHA256 "ad8059fc2493a067"
[2026-02-01T09:35:03.889Z] [BOT] ⏭️  Skipping duplicate: JID_645dd70f (posted within 7 days)
[2026-02-01T09:35:03.993Z] [BOT] ✅ Loaded pending queue: 2944 total (1177 pending, 50 enriched, 1717 posted)
[2026-02-01T09:35:04.209Z] [BOT] ✅ Saved pending queue: 2944 total (1177 pending, 40 enriched, 1727 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T09:35:04.305Z] [BOT] 📂 Loaded 11808 existing routing entries
[2026-02-01T09:35:04.435Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T09:35:04.436Z] [BOT] Total entries: 11818
   Timestamp: 2026-02-01T09:35:04.387Z
[2026-02-01T09:35:04.436Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T09:35:04.436Z] [BOT] Total attempts: 26
   Successful: 18
   Failed: 0
   Skipped: 8
[2026-02-01T09:35:04.436Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2026-02-01T09:35:04.437Z] [BOT] Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 4 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-02-01T09:35:04.437Z] [BOT] [STATS] Channel stats saved
[2026-02-01T09:35:04.437Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1737 jobs in memory (cached)
[2026-02-01T09:35:04.471Z] [BOT] ✅ Loaded V2 database: 1737 jobs
💾 DISK STATE: 1737 jobs on disk
[2026-02-01T09:35:04.471Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1737
[2026-02-01T09:35:04.477Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1737 jobs (merged disk + memory)
[2026-02-01T09:35:04.478Z] [BOT] ✅ No jobs to archive (all 1737 jobs within 7-day window)
[2026-02-01T09:35:04.575Z] [BOT] 💾 Saved posted_jobs.json: 1737 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:35:04.575Z] [BOT] ✅ Database saved successfully
[2026-02-01T09:35:06.612Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*