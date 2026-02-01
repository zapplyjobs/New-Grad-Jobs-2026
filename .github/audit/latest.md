# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T06:58:19.312Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T06:57:27.978Z] ========================================
[2026-02-01T06:57:27.980Z] Discord Bot Execution Log
[2026-02-01T06:57:27.980Z] Environment: GitHub Actions
[2026-02-01T06:57:27.980Z] Node Version: v20.20.0
[2026-02-01T06:57:27.980Z] ========================================
[2026-02-01T06:57:27.980Z] Environment Variables Check:
[2026-02-01T06:57:27.980Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T06:57:27.980Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T06:57:27.980Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T06:57:27.980Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T06:57:27.980Z] 
Multi-Channel Configuration:
[2026-02-01T06:57:27.980Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T06:57:27.980Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.980Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.980Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T06:57:27.980Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.980Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.981Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.981Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.981Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T06:57:27.981Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T06:57:27.981Z] 
Data Files Check:
[2026-02-01T06:57:27.981Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63728 bytes)
[2026-02-01T06:57:28.040Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9118125 bytes)
[2026-02-01T06:57:28.040Z] 
========================================
[2026-02-01T06:57:28.040Z] Starting Enhanced Discord Bot...
[2026-02-01T06:57:28.040Z] ========================================
[2026-02-01T06:57:28.551Z] [BOT] ✅ Loaded V2 database: 1647 jobs
[2026-02-01T06:57:29.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T06:57:29.146Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T06:57:29.146Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T06:57:29.302Z] [BOT] ✅ Loaded pending queue: 2944 total (1257 pending, 50 enriched, 1637 posted)
[2026-02-01T06:57:29.302Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:57:29.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T06:57:29.304Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T06:57:29.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T06:57:29.304Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T06:57:29.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T06:57:29.305Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T06:57:29.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T06:57:29.305Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T06:57:29.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T06:57:29.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T06:57:29.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-02-01T06:57:29.307Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T06:57:29.316Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T06:57:29.316Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T06:57:29.316Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T06:57:29.317Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
   (5 grouped as same job with different locations)
[2026-02-01T06:57:29.317Z] [BOT] 📍 2 jobs with multiple locations:
   - Enterprise Account Executive @ nominal: new york, austin
   - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T06:57:29.319Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T06:57:29.320Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3 Group
   Category: TECH (matched: "software")
[2026-02-01T06:57:29.320Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:29.337Z] [BOT ERROR] (node:4171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T06:57:29.894Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
[2026-02-01T06:57:29.895Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3 Group
[2026-02-01T06:57:29.896Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_e5ca4df3 Group → category channel (1 total channels)
[2026-02-01T06:57:29.896Z] [BOT] 💾 BEFORE MERGE: 1648 jobs in memory (cached)
[2026-02-01T06:57:29.949Z] [BOT] ✅ Loaded V2 database: 1647 jobs
💾 DISK STATE: 1647 jobs on disk
[2026-02-01T06:57:29.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1648
[2026-02-01T06:57:29.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1648 jobs (merged disk + memory)
[2026-02-01T06:57:29.954Z] [BOT] ✅ No jobs to archive (all 1648 jobs within 7-day window)
[2026-02-01T06:57:30.080Z] [BOT] 💾 Saved posted_jobs.json: 1648 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:31.580Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5b56d21e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:31.881Z] [BOT] ✅ Posted message: Software Engineer @ ORG_5b56d21e in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_5b56d21e
[2026-02-01T06:57:31.882Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_5b56d21e → category channel (1 total channels)
[2026-02-01T06:57:31.882Z] [BOT] 💾 BEFORE MERGE: 1649 jobs in memory (cached)
[2026-02-01T06:57:31.930Z] [BOT] ✅ Loaded V2 database: 1648 jobs
💾 DISK STATE: 1648 jobs on disk
[2026-02-01T06:57:31.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1649
[2026-02-01T06:57:31.934Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:57:31.934Z] [BOT] 💾 AFTER MERGE: 1649 jobs (merged disk + memory)
[2026-02-01T06:57:31.936Z] [BOT] ✅ No jobs to archive (all 1649 jobs within 7-day window)
[2026-02-01T06:57:32.041Z] [BOT] 💾 Saved posted_jobs.json: 1649 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:33.731Z] [BOT] ✅ Posted message: Software Engineer @ ORG_5b56d21e in #📍・JID_6daed763
[2026-02-01T06:57:33.731Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:57:33.731Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_5b56d21e → location channel (2 total channels)
[2026-02-01T06:57:33.731Z] [BOT] 💾 BEFORE MERGE: 1649 jobs in memory (cached)
[2026-02-01T06:57:33.776Z] [BOT] ✅ Loaded V2 database: 1649 jobs
💾 DISK STATE: 1649 jobs on disk
[2026-02-01T06:57:33.777Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1649
[2026-02-01T06:57:33.780Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_5b56d21e (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:33.780Z] [BOT] 💾 AFTER MERGE: 1649 jobs (merged disk + memory)
[2026-02-01T06:57:33.781Z] [BOT] ✅ No jobs to archive (all 1649 jobs within 7-day window)
[2026-02-01T06:57:33.884Z] [BOT] 💾 Saved posted_jobs.json: 1649 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:35.387Z] [BOT] 📍 [ROUTING] "Cloud Support Engineer I (Support Response)" @ ORG_862a3f0f
[2026-02-01T06:57:35.387Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:35.716Z] [BOT] ✅ Posted message: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f in #💻・tech-jobs
[2026-02-01T06:57:35.716Z] [BOT] ✅ Industry: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f
[2026-02-01T06:57:35.717Z] [BOT] 💾 Added channel posting: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f → category channel (1 total channels)
[2026-02-01T06:57:35.717Z] [BOT] 💾 BEFORE MERGE: 1650 jobs in memory (cached)
[2026-02-01T06:57:35.762Z] [BOT] ✅ Loaded V2 database: 1649 jobs
💾 DISK STATE: 1649 jobs on disk
[2026-02-01T06:57:35.763Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1650
[2026-02-01T06:57:35.766Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1650 jobs (merged disk + memory)
[2026-02-01T06:57:35.767Z] [BOT] ✅ No jobs to archive (all 1650 jobs within 7-day window)
[2026-02-01T06:57:35.870Z] [BOT] 💾 Saved posted_jobs.json: 1650 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:37.609Z] [BOT] ✅ Posted message: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T06:57:37.609Z] [BOT] 💾 Added channel posting: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f → location channel (2 total channels)
[2026-02-01T06:57:37.609Z] [BOT] 💾 BEFORE MERGE: 1650 jobs in memory (cached)
[2026-02-01T06:57:37.660Z] [BOT] ✅ Loaded V2 database: 1650 jobs
💾 DISK STATE: 1650 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1650
[2026-02-01T06:57:37.667Z] [BOT] 🔀 Deep merged: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:57:37.667Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:37.667Z] [BOT] 💾 AFTER MERGE: 1650 jobs (merged disk + memory)
[2026-02-01T06:57:37.669Z] [BOT] ✅ No jobs to archive (all 1650 jobs within 7-day window)
[2026-02-01T06:57:37.785Z] [BOT] 💾 Saved posted_jobs.json: 1650 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:39.281Z] [BOT] 📍 [ROUTING] "Analyst, Data & Software Engineering" @ ORG_82e4502a Group
[2026-02-01T06:57:39.282Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:39.606Z] [BOT] ✅ Posted message: Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・tech-jobs
  ✅ Industry: Analyst, Data & Software Engineering @ ORG_82e4502a Group
[2026-02-01T06:57:39.608Z] [BOT] 💾 Added channel posting: Analyst, Data & Software Engineering @ ORG_82e4502a Group → category channel (1 total channels)
💾 BEFORE MERGE: 1651 jobs in memory (cached)
[2026-02-01T06:57:39.653Z] [BOT] ✅ Loaded V2 database: 1650 jobs
💾 DISK STATE: 1650 jobs on disk
[2026-02-01T06:57:39.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1651
[2026-02-01T06:57:39.657Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:57:39.657Z] [BOT] 💾 AFTER MERGE: 1651 jobs (merged disk + memory)
[2026-02-01T06:57:39.658Z] [BOT] ✅ No jobs to archive (all 1651 jobs within 7-day window)
[2026-02-01T06:57:39.775Z] [BOT] 💾 Saved posted_jobs.json: 1651 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:41.523Z] [BOT] ✅ Posted message: Analyst, Data & Software Engineering @ ORG_82e4502a Group in #📍・JID_6daed763
[2026-02-01T06:57:41.523Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:57:41.524Z] [BOT] 💾 Added channel posting: Analyst, Data & Software Engineering @ ORG_82e4502a Group → location channel (2 total channels)
[2026-02-01T06:57:41.524Z] [BOT] 💾 BEFORE MERGE: 1651 jobs in memory (cached)
[2026-02-01T06:57:41.574Z] [BOT] ✅ Loaded V2 database: 1651 jobs
💾 DISK STATE: 1651 jobs on disk
[2026-02-01T06:57:41.575Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1651
[2026-02-01T06:57:41.579Z] [BOT] 🔀 Deep merged: Analyst, Data & Software Engineering @ ORG_82e4502a Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:41.579Z] [BOT] 💾 AFTER MERGE: 1651 jobs (merged disk + memory)
[2026-02-01T06:57:41.580Z] [BOT] ✅ No jobs to archive (all 1651 jobs within 7-day window)
[2026-02-01T06:57:41.682Z] [BOT] 💾 Saved posted_jobs.json: 1651 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:43.183Z] [BOT] 📍 [ROUTING] "Analyst Rotational Program – Software Engineering" @ ORG_b6a51c2a
   Category: TECH (matched: "software")
[2026-02-01T06:57:43.183Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:43.534Z] [BOT] ✅ Posted message: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a in #💻・tech-jobs
[2026-02-01T06:57:43.534Z] [BOT] ✅ Industry: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a
[2026-02-01T06:57:43.535Z] [BOT] 💾 Added channel posting: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a → category channel (1 total channels)
[2026-02-01T06:57:43.535Z] [BOT] 💾 BEFORE MERGE: 1652 jobs in memory (cached)
[2026-02-01T06:57:43.589Z] [BOT] ✅ Loaded V2 database: 1651 jobs
💾 DISK STATE: 1651 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1652
[2026-02-01T06:57:43.595Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:57:43.595Z] [BOT] 💾 AFTER MERGE: 1652 jobs (merged disk + memory)
[2026-02-01T06:57:43.596Z] [BOT] ✅ No jobs to archive (all 1652 jobs within 7-day window)
[2026-02-01T06:57:43.707Z] [BOT] 💾 Saved posted_jobs.json: 1652 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:45.398Z] [BOT] ✅ Posted message: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T06:57:45.399Z] [BOT] 💾 Added channel posting: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a → location channel (2 total channels)
[2026-02-01T06:57:45.399Z] [BOT] 💾 BEFORE MERGE: 1652 jobs in memory (cached)
[2026-02-01T06:57:45.444Z] [BOT] ✅ Loaded V2 database: 1652 jobs
💾 DISK STATE: 1652 jobs on disk
[2026-02-01T06:57:45.445Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1652
[2026-02-01T06:57:45.448Z] [BOT] 🔀 Deep merged: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a (disk: 1 channels → merged: 2 channels)
[2026-02-01T06:57:45.448Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1652 jobs (merged disk + memory)
[2026-02-01T06:57:45.449Z] [BOT] ✅ No jobs to archive (all 1652 jobs within 7-day window)
[2026-02-01T06:57:45.551Z] [BOT] 💾 Saved posted_jobs.json: 1652 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:47.052Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_0c79a9c2 Intuition
[2026-02-01T06:57:47.052Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T06:57:47.236Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-02-01T06:57:47.236Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition
[2026-02-01T06:57:47.237Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition → category channel (1 total channels)
[2026-02-01T06:57:47.237Z] [BOT] 💾 BEFORE MERGE: 1653 jobs in memory (cached)
[2026-02-01T06:57:47.281Z] [BOT] ✅ Loaded V2 database: 1652 jobs
💾 DISK STATE: 1652 jobs on disk
[2026-02-01T06:57:47.282Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1653
[2026-02-01T06:57:47.285Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:57:47.285Z] [BOT] 💾 AFTER MERGE: 1653 jobs (merged disk + memory)
[2026-02-01T06:57:47.286Z] [BOT] ✅ No jobs to archive (all 1653 jobs within 7-day window)
[2026-02-01T06:57:47.402Z] [BOT] 💾 Saved posted_jobs.json: 1653 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:49.165Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T06:57:49.166Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition → location channel (2 total channels)
[2026-02-01T06:57:49.166Z] [BOT] 💾 BEFORE MERGE: 1653 jobs in memory (cached)
[2026-02-01T06:57:49.211Z] [BOT] ✅ Loaded V2 database: 1653 jobs
💾 DISK STATE: 1653 jobs on disk
[2026-02-01T06:57:49.211Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1653
[2026-02-01T06:57:49.214Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:49.214Z] [BOT] 💾 AFTER MERGE: 1653 jobs (merged disk + memory)
[2026-02-01T06:57:49.215Z] [BOT] ✅ No jobs to archive (all 1653 jobs within 7-day window)
[2026-02-01T06:57:49.314Z] [BOT] 💾 Saved posted_jobs.json: 1653 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:53.816Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T06:57:53.817Z] [BOT] 📍 [ROUTING] "Data/Ai Engineer Intern" @ ORG_9fbbe982 Global
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T06:57:53.817Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T06:57:54.077Z] [BOT] ✅ Posted message: Data/Ai Engineer Intern @ ORG_9fbbe982 Global in #🤖・ai-jobs
[2026-02-01T06:57:54.077Z] [BOT] ✅ Industry: Data/Ai Engineer Intern @ ORG_9fbbe982 Global
[2026-02-01T06:57:54.077Z] [BOT] 💾 Added channel posting: Data/Ai Engineer Intern @ ORG_9fbbe982 Global → category channel (1 total channels)
[2026-02-01T06:57:54.078Z] [BOT] 💾 BEFORE MERGE: 1654 jobs in memory (cached)
[2026-02-01T06:57:54.123Z] [BOT] ✅ Loaded V2 database: 1653 jobs
💾 DISK STATE: 1653 jobs on disk
[2026-02-01T06:57:54.123Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1654
[2026-02-01T06:57:54.126Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1654 jobs (merged disk + memory)
[2026-02-01T06:57:54.127Z] [BOT] ✅ No jobs to archive (all 1654 jobs within 7-day window)
[2026-02-01T06:57:54.244Z] [BOT] 💾 Saved posted_jobs.json: 1654 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:56.025Z] [BOT] ✅ Posted message: Data/Ai Engineer Intern @ ORG_9fbbe982 Global in #📍・JID_6daed763
[2026-02-01T06:57:56.025Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:57:56.025Z] [BOT] 💾 Added channel posting: Data/Ai Engineer Intern @ ORG_9fbbe982 Global → location channel (2 total channels)
[2026-02-01T06:57:56.025Z] [BOT] 💾 BEFORE MERGE: 1654 jobs in memory (cached)
[2026-02-01T06:57:56.071Z] [BOT] ✅ Loaded V2 database: 1654 jobs
💾 DISK STATE: 1654 jobs on disk
[2026-02-01T06:57:56.071Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1654
[2026-02-01T06:57:56.074Z] [BOT] 🔀 Deep merged: Data/Ai Engineer Intern @ ORG_9fbbe982 Global (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:56.074Z] [BOT] 💾 AFTER MERGE: 1654 jobs (merged disk + memory)
[2026-02-01T06:57:56.075Z] [BOT] ✅ No jobs to archive (all 1654 jobs within 7-day window)
[2026-02-01T06:57:56.176Z] [BOT] 💾 Saved posted_jobs.json: 1654 active jobs
[2026-02-01T06:57:56.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:57.679Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Brand Ads" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T06:57:57.679Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T06:57:57.866Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb
[2026-02-01T06:57:57.867Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T06:57:57.867Z] [BOT] 💾 BEFORE MERGE: 1655 jobs in memory (cached)
[2026-02-01T06:57:57.911Z] [BOT] ✅ Loaded V2 database: 1654 jobs
💾 DISK STATE: 1654 jobs on disk
[2026-02-01T06:57:57.912Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1655
[2026-02-01T06:57:57.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1655 jobs (merged disk + memory)
[2026-02-01T06:57:57.916Z] [BOT] ✅ No jobs to archive (all 1655 jobs within 7-day window)
[2026-02-01T06:57:58.017Z] [BOT] 💾 Saved posted_jobs.json: 1655 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:57:59.718Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T06:57:59.719Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T06:57:59.719Z] [BOT] 💾 BEFORE MERGE: 1655 jobs in memory (cached)
[2026-02-01T06:57:59.764Z] [BOT] ✅ Loaded V2 database: 1655 jobs
💾 DISK STATE: 1655 jobs on disk
[2026-02-01T06:57:59.764Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1655
[2026-02-01T06:57:59.767Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:57:59.767Z] [BOT] 💾 AFTER MERGE: 1655 jobs (merged disk + memory)
[2026-02-01T06:57:59.768Z] [BOT] ✅ No jobs to archive (all 1655 jobs within 7-day window)
[2026-02-01T06:57:59.868Z] [BOT] 💾 Saved posted_jobs.json: 1655 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:01.371Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-02-01T06:58:01.371Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T06:58:01.630Z] [BOT] ✅ Posted message: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-02-01T06:58:01.630Z] [BOT] ✅ Industry: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-02-01T06:58:01.630Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-02-01T06:58:01.631Z] [BOT] 💾 BEFORE MERGE: 1656 jobs in memory (cached)
[2026-02-01T06:58:01.677Z] [BOT] ✅ Loaded V2 database: 1655 jobs
💾 DISK STATE: 1655 jobs on disk
[2026-02-01T06:58:01.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1656
[2026-02-01T06:58:01.680Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:58:01.681Z] [BOT] 💾 AFTER MERGE: 1656 jobs (merged disk + memory)
[2026-02-01T06:58:01.681Z] [BOT] ✅ No jobs to archive (all 1656 jobs within 7-day window)
[2026-02-01T06:58:01.791Z] [BOT] 💾 Saved posted_jobs.json: 1656 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:03.506Z] [BOT] ✅ Posted message: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌲・JID_efdf5921
[2026-02-01T06:58:03.506Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T06:58:03.506Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → location channel (2 total channels)
[2026-02-01T06:58:03.506Z] [BOT] 💾 BEFORE MERGE: 1656 jobs in memory (cached)
[2026-02-01T06:58:03.551Z] [BOT] ✅ Loaded V2 database: 1656 jobs
💾 DISK STATE: 1656 jobs on disk
[2026-02-01T06:58:03.551Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1656
[2026-02-01T06:58:03.554Z] [BOT] 🔀 Deep merged: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:58:03.554Z] [BOT] 💾 AFTER MERGE: 1656 jobs (merged disk + memory)
[2026-02-01T06:58:03.555Z] [BOT] ✅ No jobs to archive (all 1656 jobs within 7-day window)
[2026-02-01T06:58:03.654Z] [BOT] 💾 Saved posted_jobs.json: 1656 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:08.155Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T06:58:08.157Z] [BOT] 📍 [ROUTING] "Data Scientist I - (DSAP)" @ ORG_692aa04a
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T06:58:08.465Z] [BOT] ✅ Posted message: Data Scientist I - (DSAP) @ ORG_692aa04a in #📊・JID_fb739488
  ✅ Industry: Data Scientist I - (DSAP) @ ORG_692aa04a
[2026-02-01T06:58:08.466Z] [BOT] 💾 Added channel posting: Data Scientist I - (DSAP) @ ORG_692aa04a → category channel (1 total channels)
[2026-02-01T06:58:08.466Z] [BOT] 💾 BEFORE MERGE: 1657 jobs in memory (cached)
[2026-02-01T06:58:08.512Z] [BOT] ✅ Loaded V2 database: 1656 jobs
💾 DISK STATE: 1656 jobs on disk
[2026-02-01T06:58:08.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1657
[2026-02-01T06:58:08.515Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:58:08.515Z] [BOT] 💾 AFTER MERGE: 1657 jobs (merged disk + memory)
[2026-02-01T06:58:08.516Z] [BOT] ✅ No jobs to archive (all 1657 jobs within 7-day window)
[2026-02-01T06:58:08.620Z] [BOT] 💾 Saved posted_jobs.json: 1657 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:10.483Z] [BOT] ✅ Posted message: Data Scientist I - (DSAP) @ ORG_692aa04a in #📍・JID_6daed763
[2026-02-01T06:58:10.483Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T06:58:10.484Z] [BOT] 💾 Added channel posting: Data Scientist I - (DSAP) @ ORG_692aa04a → location channel (2 total channels)
[2026-02-01T06:58:10.484Z] [BOT] 💾 BEFORE MERGE: 1657 jobs in memory (cached)
[2026-02-01T06:58:10.531Z] [BOT] ✅ Loaded V2 database: 1657 jobs
💾 DISK STATE: 1657 jobs on disk
[2026-02-01T06:58:10.531Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1657
[2026-02-01T06:58:10.534Z] [BOT] 🔀 Deep merged: Data Scientist I - (DSAP) @ ORG_692aa04a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T06:58:10.534Z] [BOT] 💾 AFTER MERGE: 1657 jobs (merged disk + memory)
[2026-02-01T06:58:10.535Z] [BOT] ✅ No jobs to archive (all 1657 jobs within 7-day window)
[2026-02-01T06:58:10.656Z] [BOT] 💾 Saved posted_jobs.json: 1657 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:15.155Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T06:58:15.157Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_23e996e1..." not found, but found as SHA256 "985911f21f91ef75"
[2026-02-01T06:58:15.157Z] [BOT] ⏭️  Skipping duplicate: JID_30b1dfd1-ca_r37014-1 (posted within 7 days)
[2026-02-01T06:58:15.157Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_687f5d4f..." not found, but found as SHA256 "3337d26ba6c7a8f6"
[2026-02-01T06:58:15.157Z] [BOT] ⏭️  Skipping duplicate: JID_c9acf132-jade_careers-JID_74480211-intern_r-103685 (posted within 7 days)
[2026-02-01T06:58:15.158Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb81f872..." not found, but found as SHA256 "45b231e1a449a778"
[2026-02-01T06:58:15.158Z] [BOT] ⏭️  Skipping duplicate: JID_a62d7775 (posted within 7 days)
[2026-02-01T06:58:15.158Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9b5dbbb..." not found, but found as SHA256 "0596049a5e34ebc7"
[2026-02-01T06:58:15.158Z] [BOT] ⏭️  Skipping duplicate: JID_3182d2ed (posted within 7 days)
[2026-02-01T06:58:15.158Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6fe9d7cd..." not found, but found as SHA256 "55000d4d1a8d922c"
[2026-02-01T06:58:15.159Z] [BOT] ⏭️  Skipping duplicate: JID_c6d53b25-date_jr100120 (posted within 7 days)
[2026-02-01T06:58:15.159Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a8b22bb-td_bank_c..." not found, but found as SHA256 "b6e29d7342ed3633"
[2026-02-01T06:58:15.159Z] [BOT] ⏭️  Skipping duplicate: JID_2a8b22bb-td_bank_careers-JID_fe9e45f5-engineering_r_1446300 (posted within 7 days)
[2026-02-01T06:58:15.159Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45633352..." not found, but found as SHA256 "6b4f0265de22630c"
[2026-02-01T06:58:15.160Z] [BOT] ⏭️  Skipping duplicate: JID_a900c709-i_r101296-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_262596d3..." not found, but found as SHA256 "f969f4c238312c3f"
⏭️  Skipping duplicate: JID_6796d1d6-CH_19b344a9 (posted within 7 days)
[2026-02-01T06:58:15.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c59bfde8..." not found, but found as SHA256 "25b900d9cac3b99b"
[2026-02-01T06:58:15.160Z] [BOT] ⏭️  Skipping duplicate: JID_6f020520 (posted within 7 days)
[2026-02-01T06:58:15.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "00f0a8636dcaf1b3"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160134 (posted within 7 days)
[2026-02-01T06:58:15.319Z] [BOT] ✅ Loaded pending queue: 2944 total (1257 pending, 50 enriched, 1637 posted)
[2026-02-01T06:58:15.510Z] [BOT] ✅ Saved pending queue: 2944 total (1257 pending, 40 enriched, 1647 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T06:58:15.610Z] [BOT] 📂 Loaded 11728 existing routing entries
[2026-02-01T06:58:15.738Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11738
   Timestamp: 2026-02-01T06:58:15.697Z
[2026-02-01T06:58:15.738Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T06:58:15.738Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T06:58:15.739Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T06:58:15.739Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📍・JID_6daed763: 4 posts
[2026-02-01T06:58:15.739Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #🌉・JID_739bbc0b: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-02-01T06:58:15.739Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T06:58:15.739Z] [BOT] 💾 BEFORE MERGE: 1657 jobs in memory (cached)
[2026-02-01T06:58:15.808Z] [BOT] ✅ Loaded V2 database: 1657 jobs
💾 DISK STATE: 1657 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1657
[2026-02-01T06:58:15.811Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T06:58:15.811Z] [BOT] 💾 AFTER MERGE: 1657 jobs (merged disk + memory)
[2026-02-01T06:58:15.812Z] [BOT] ✅ No jobs to archive (all 1657 jobs within 7-day window)
[2026-02-01T06:58:15.918Z] [BOT] 💾 Saved posted_jobs.json: 1657 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T06:58:15.918Z] [BOT] ✅ Database saved successfully
[2026-02-01T06:58:17.940Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*