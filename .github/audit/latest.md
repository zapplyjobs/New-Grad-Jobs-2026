# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T08:37:04.300Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T08:36:16.485Z] ========================================
[2026-02-01T08:36:16.487Z] Discord Bot Execution Log
[2026-02-01T08:36:16.487Z] Environment: GitHub Actions
[2026-02-01T08:36:16.487Z] Node Version: v20.20.0
[2026-02-01T08:36:16.487Z] ========================================
[2026-02-01T08:36:16.487Z] Environment Variables Check:
[2026-02-01T08:36:16.487Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T08:36:16.487Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T08:36:16.487Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T08:36:16.488Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T08:36:16.488Z] 
Multi-Channel Configuration:
[2026-02-01T08:36:16.488Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T08:36:16.488Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T08:36:16.488Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T08:36:16.488Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T08:36:16.488Z] 
Data Files Check:
[2026-02-01T08:36:16.489Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60512 bytes)
[2026-02-01T08:36:16.536Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9257524 bytes)
[2026-02-01T08:36:16.536Z] 
========================================
[2026-02-01T08:36:16.536Z] Starting Enhanced Discord Bot...
[2026-02-01T08:36:16.536Z] ========================================
[2026-02-01T08:36:17.092Z] [BOT] ✅ Loaded V2 database: 1697 jobs
[2026-02-01T08:36:17.562Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T08:36:17.563Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T08:36:17.563Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T08:36:17.670Z] [BOT] ✅ Loaded pending queue: 2944 total (1207 pending, 50 enriched, 1687 posted)
[2026-02-01T08:36:17.671Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T08:36:17.671Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:36:17.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T08:36:17.672Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T08:36:17.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T08:36:17.673Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T08:36:17.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T08:36:17.673Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T08:36:17.674Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T08:36:17.674Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T08:36:17.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T08:36:17.687Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T08:36:17.688Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T08:36:17.688Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T08:36:17.689Z] [BOT] 📋 After multi-location grouping: 41 unique jobs to post
[2026-02-01T08:36:17.689Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T08:36:17.689Z] [BOT] - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T08:36:17.693Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T08:36:17.694Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
[2026-02-01T08:36:17.694Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:17.710Z] [BOT ERROR] (node:3076) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T08:36:17.931Z] [BOT] ✅ Posted message: Mission Operations Engineer @ nominal in #💻・tech-jobs
[2026-02-01T08:36:17.931Z] [BOT] ✅ Industry: Mission Operations Engineer @ nominal
[2026-02-01T08:36:17.932Z] [BOT] 💾 Added channel posting: Mission Operations Engineer @ nominal → category channel (1 total channels)
[2026-02-01T08:36:17.932Z] [BOT] 💾 BEFORE MERGE: 1698 jobs in memory (cached)
[2026-02-01T08:36:17.966Z] [BOT] ✅ Loaded V2 database: 1697 jobs
💾 DISK STATE: 1697 jobs on disk
[2026-02-01T08:36:17.966Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1698
[2026-02-01T08:36:17.970Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:17.970Z] [BOT] 💾 AFTER MERGE: 1698 jobs (merged disk + memory)
[2026-02-01T08:36:17.971Z] [BOT] ✅ No jobs to archive (all 1698 jobs within 7-day window)
[2026-02-01T08:36:18.090Z] [BOT] 💾 Saved posted_jobs.json: 1698 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:19.592Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_19887ac7
   Category: TECH (matched: "software")
[2026-02-01T08:36:19.592Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:19.914Z] [BOT] ✅ Posted message: Software Engineer @ ORG_19887ac7 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_19887ac7
[2026-02-01T08:36:19.915Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_19887ac7 → category channel (1 total channels)
[2026-02-01T08:36:19.915Z] [BOT] 💾 BEFORE MERGE: 1699 jobs in memory (cached)
[2026-02-01T08:36:19.951Z] [BOT] ✅ Loaded V2 database: 1698 jobs
[2026-02-01T08:36:19.951Z] [BOT] 💾 DISK STATE: 1698 jobs on disk
[2026-02-01T08:36:19.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1699
[2026-02-01T08:36:19.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:19.955Z] [BOT] 💾 AFTER MERGE: 1699 jobs (merged disk + memory)
[2026-02-01T08:36:19.956Z] [BOT] ✅ No jobs to archive (all 1699 jobs within 7-day window)
[2026-02-01T08:36:20.048Z] [BOT] 💾 Saved posted_jobs.json: 1699 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:21.750Z] [BOT] ✅ Posted message: Software Engineer @ ORG_19887ac7 in #🗽・JID_98d4f0de
[2026-02-01T08:36:21.750Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:36:21.750Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_19887ac7 → location channel (2 total channels)
[2026-02-01T08:36:21.750Z] [BOT] 💾 BEFORE MERGE: 1699 jobs in memory (cached)
[2026-02-01T08:36:21.783Z] [BOT] ✅ Loaded V2 database: 1699 jobs
💾 DISK STATE: 1699 jobs on disk
[2026-02-01T08:36:21.783Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1699
[2026-02-01T08:36:21.787Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_19887ac7 (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:21.787Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1699 jobs (merged disk + memory)
[2026-02-01T08:36:21.788Z] [BOT] ✅ No jobs to archive (all 1699 jobs within 7-day window)
[2026-02-01T08:36:21.877Z] [BOT] 💾 Saved posted_jobs.json: 1699 active jobs
[2026-02-01T08:36:21.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:23.381Z] [BOT] 📍 [ROUTING] "Engineer 1 - Full Stack, Store POS+" @ ORG_2d67c3be
[2026-02-01T08:36:23.381Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:23.636Z] [BOT] ✅ Posted message: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be in #💻・tech-jobs
[2026-02-01T08:36:23.636Z] [BOT] ✅ Industry: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be
[2026-02-01T08:36:23.637Z] [BOT] 💾 Added channel posting: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be → category channel (1 total channels)
[2026-02-01T08:36:23.637Z] [BOT] 💾 BEFORE MERGE: 1700 jobs in memory (cached)
[2026-02-01T08:36:23.668Z] [BOT] ✅ Loaded V2 database: 1699 jobs
💾 DISK STATE: 1699 jobs on disk
[2026-02-01T08:36:23.669Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1700
[2026-02-01T08:36:23.672Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:23.672Z] [BOT] 💾 AFTER MERGE: 1700 jobs (merged disk + memory)
[2026-02-01T08:36:23.673Z] [BOT] ✅ No jobs to archive (all 1700 jobs within 7-day window)
[2026-02-01T08:36:23.764Z] [BOT] 💾 Saved posted_jobs.json: 1700 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:25.530Z] [BOT] ✅ Posted message: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T08:36:25.530Z] [BOT] 💾 Added channel posting: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be → location channel (2 total channels)
[2026-02-01T08:36:25.530Z] [BOT] 💾 BEFORE MERGE: 1700 jobs in memory (cached)
[2026-02-01T08:36:25.562Z] [BOT] ✅ Loaded V2 database: 1700 jobs
💾 DISK STATE: 1700 jobs on disk
[2026-02-01T08:36:25.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1700
[2026-02-01T08:36:25.565Z] [BOT] 🔀 Deep merged: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:25.565Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1700 jobs (merged disk + memory)
[2026-02-01T08:36:25.566Z] [BOT] ✅ No jobs to archive (all 1700 jobs within 7-day window)
[2026-02-01T08:36:25.669Z] [BOT] 💾 Saved posted_jobs.json: 1700 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:27.168Z] [BOT] 📍 [ROUTING] "Cybersecurity Analyst" @ ORG_4f23798d Street
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:27.366Z] [BOT] ✅ Posted message: Cybersecurity Analyst @ ORG_4f23798d Street in #💻・tech-jobs
  ✅ Industry: Cybersecurity Analyst @ ORG_4f23798d Street
[2026-02-01T08:36:27.367Z] [BOT] 💾 Added channel posting: Cybersecurity Analyst @ ORG_4f23798d Street → category channel (1 total channels)
[2026-02-01T08:36:27.367Z] [BOT] 💾 BEFORE MERGE: 1701 jobs in memory (cached)
[2026-02-01T08:36:27.398Z] [BOT] ✅ Loaded V2 database: 1700 jobs
💾 DISK STATE: 1700 jobs on disk
[2026-02-01T08:36:27.398Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1701
[2026-02-01T08:36:27.401Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1701 jobs (merged disk + memory)
[2026-02-01T08:36:27.403Z] [BOT] ✅ No jobs to archive (all 1701 jobs within 7-day window)
[2026-02-01T08:36:27.491Z] [BOT] 💾 Saved posted_jobs.json: 1701 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:29.263Z] [BOT] ✅ Posted message: Cybersecurity Analyst @ ORG_4f23798d Street in #🗽・JID_98d4f0de
[2026-02-01T08:36:29.263Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T08:36:29.264Z] [BOT] 💾 Added channel posting: Cybersecurity Analyst @ ORG_4f23798d Street → location channel (2 total channels)
💾 BEFORE MERGE: 1701 jobs in memory (cached)
[2026-02-01T08:36:29.297Z] [BOT] ✅ Loaded V2 database: 1701 jobs
💾 DISK STATE: 1701 jobs on disk
[2026-02-01T08:36:29.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1701
[2026-02-01T08:36:29.300Z] [BOT] 🔀 Deep merged: Cybersecurity Analyst @ ORG_4f23798d Street (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:29.301Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1701 jobs (merged disk + memory)
[2026-02-01T08:36:29.302Z] [BOT] ✅ No jobs to archive (all 1701 jobs within 7-day window)
[2026-02-01T08:36:29.389Z] [BOT] 💾 Saved posted_jobs.json: 1701 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:30.892Z] [BOT] 📍 [ROUTING] "Geoint Analyst – Entry Level" @ ORG_84877948 Enterprises, LLC
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:31.062Z] [BOT] ✅ Posted message: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC in #💻・tech-jobs
[2026-02-01T08:36:31.063Z] [BOT] ✅ Industry: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC
[2026-02-01T08:36:31.063Z] [BOT] 💾 Added channel posting: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC → category channel (1 total channels)
[2026-02-01T08:36:31.063Z] [BOT] 💾 BEFORE MERGE: 1702 jobs in memory (cached)
[2026-02-01T08:36:31.098Z] [BOT] ✅ Loaded V2 database: 1701 jobs
💾 DISK STATE: 1701 jobs on disk
[2026-02-01T08:36:31.098Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1702
[2026-02-01T08:36:31.101Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:31.101Z] [BOT] 💾 AFTER MERGE: 1702 jobs (merged disk + memory)
[2026-02-01T08:36:31.102Z] [BOT] ✅ No jobs to archive (all 1702 jobs within 7-day window)
[2026-02-01T08:36:31.214Z] [BOT] 💾 Saved posted_jobs.json: 1702 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:32.944Z] [BOT] ✅ Posted message: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:32.944Z] [BOT] 💾 Added channel posting: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC → location channel (2 total channels)
[2026-02-01T08:36:32.945Z] [BOT] 💾 BEFORE MERGE: 1702 jobs in memory (cached)
[2026-02-01T08:36:32.975Z] [BOT] ✅ Loaded V2 database: 1702 jobs
💾 DISK STATE: 1702 jobs on disk
[2026-02-01T08:36:32.976Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1702
[2026-02-01T08:36:32.979Z] [BOT] 🔀 Deep merged: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:36:32.979Z] [BOT] 💾 AFTER MERGE: 1702 jobs (merged disk + memory)
[2026-02-01T08:36:32.980Z] [BOT] ✅ No jobs to archive (all 1702 jobs within 7-day window)
[2026-02-01T08:36:33.065Z] [BOT] 💾 Saved posted_jobs.json: 1702 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:34.567Z] [BOT] 📍 [ROUTING] "Solutions Analyst - Enterprise Asset Management - Eam" @ ORG_4db4f14a Technologies
[2026-02-01T08:36:34.567Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:34.782Z] [BOT] ✅ Posted message: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #💻・tech-jobs
[2026-02-01T08:36:34.782Z] [BOT] ✅ Industry: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies
[2026-02-01T08:36:34.783Z] [BOT] 💾 Added channel posting: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies → category channel (1 total channels)
[2026-02-01T08:36:34.783Z] [BOT] 💾 BEFORE MERGE: 1703 jobs in memory (cached)
[2026-02-01T08:36:34.815Z] [BOT] ✅ Loaded V2 database: 1702 jobs
[2026-02-01T08:36:34.815Z] [BOT] 💾 DISK STATE: 1702 jobs on disk
[2026-02-01T08:36:34.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1703
[2026-02-01T08:36:34.818Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:34.818Z] [BOT] 💾 AFTER MERGE: 1703 jobs (merged disk + memory)
[2026-02-01T08:36:34.819Z] [BOT] ✅ No jobs to archive (all 1703 jobs within 7-day window)
[2026-02-01T08:36:34.908Z] [BOT] 💾 Saved posted_jobs.json: 1703 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:36.584Z] [BOT] ✅ Posted message: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:36.584Z] [BOT] 💾 Added channel posting: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies → location channel (2 total channels)
💾 BEFORE MERGE: 1703 jobs in memory (cached)
[2026-02-01T08:36:36.619Z] [BOT] ✅ Loaded V2 database: 1703 jobs
💾 DISK STATE: 1703 jobs on disk
[2026-02-01T08:36:36.619Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1703
[2026-02-01T08:36:36.622Z] [BOT] 🔀 Deep merged: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:36.622Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1703 jobs (merged disk + memory)
[2026-02-01T08:36:36.623Z] [BOT] ✅ No jobs to archive (all 1703 jobs within 7-day window)
[2026-02-01T08:36:36.714Z] [BOT] 💾 Saved posted_jobs.json: 1703 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:38.216Z] [BOT] 📍 [ROUTING] "Technical Advisor" @ ORG_84877948 Enterprises, LLC
[2026-02-01T08:36:38.217Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:38.411Z] [BOT] ✅ Posted message: Technical Advisor @ ORG_84877948 Enterprises, LLC in #💻・tech-jobs
[2026-02-01T08:36:38.411Z] [BOT] ✅ Industry: Technical Advisor @ ORG_84877948 Enterprises, LLC
[2026-02-01T08:36:38.412Z] [BOT] 💾 Added channel posting: Technical Advisor @ ORG_84877948 Enterprises, LLC → category channel (1 total channels)
[2026-02-01T08:36:38.412Z] [BOT] 💾 BEFORE MERGE: 1704 jobs in memory (cached)
[2026-02-01T08:36:38.444Z] [BOT] ✅ Loaded V2 database: 1703 jobs
💾 DISK STATE: 1703 jobs on disk
[2026-02-01T08:36:38.444Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1704
[2026-02-01T08:36:38.447Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:38.447Z] [BOT] 💾 AFTER MERGE: 1704 jobs (merged disk + memory)
[2026-02-01T08:36:38.448Z] [BOT] ✅ No jobs to archive (all 1704 jobs within 7-day window)
[2026-02-01T08:36:38.537Z] [BOT] 💾 Saved posted_jobs.json: 1704 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:40.303Z] [BOT] ✅ Posted message: Technical Advisor @ ORG_84877948 Enterprises, LLC in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:40.303Z] [BOT] 💾 Added channel posting: Technical Advisor @ ORG_84877948 Enterprises, LLC → location channel (2 total channels)
[2026-02-01T08:36:40.304Z] [BOT] 💾 BEFORE MERGE: 1704 jobs in memory (cached)
[2026-02-01T08:36:40.337Z] [BOT] ✅ Loaded V2 database: 1704 jobs
💾 DISK STATE: 1704 jobs on disk
[2026-02-01T08:36:40.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1704
[2026-02-01T08:36:40.341Z] [BOT] 🔀 Deep merged: Technical Advisor @ ORG_84877948 Enterprises, LLC (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:40.341Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1704 jobs (merged disk + memory)
[2026-02-01T08:36:40.342Z] [BOT] ✅ No jobs to archive (all 1704 jobs within 7-day window)
[2026-02-01T08:36:40.434Z] [BOT] 💾 Saved posted_jobs.json: 1704 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:41.935Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_e3033671 Freight Lines
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:42.100Z] [BOT] ✅ Posted message: Entry Level Software Developer @ ORG_e3033671 Freight Lines in #💻・tech-jobs
[2026-02-01T08:36:42.100Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_e3033671 Freight Lines
[2026-02-01T08:36:42.101Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ ORG_e3033671 Freight Lines → category channel (1 total channels)
[2026-02-01T08:36:42.101Z] [BOT] 💾 BEFORE MERGE: 1705 jobs in memory (cached)
[2026-02-01T08:36:42.134Z] [BOT] ✅ Loaded V2 database: 1704 jobs
💾 DISK STATE: 1704 jobs on disk
[2026-02-01T08:36:42.134Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1705
[2026-02-01T08:36:42.137Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:42.137Z] [BOT] 💾 AFTER MERGE: 1705 jobs (merged disk + memory)
[2026-02-01T08:36:42.138Z] [BOT] ✅ No jobs to archive (all 1705 jobs within 7-day window)
[2026-02-01T08:36:42.243Z] [BOT] 💾 Saved posted_jobs.json: 1705 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:43.957Z] [BOT] ✅ Posted message: Entry Level Software Developer @ ORG_e3033671 Freight Lines in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:43.957Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ ORG_e3033671 Freight Lines → location channel (2 total channels)
[2026-02-01T08:36:43.958Z] [BOT] 💾 BEFORE MERGE: 1705 jobs in memory (cached)
[2026-02-01T08:36:43.989Z] [BOT] ✅ Loaded V2 database: 1705 jobs
💾 DISK STATE: 1705 jobs on disk
[2026-02-01T08:36:43.989Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1705
[2026-02-01T08:36:43.992Z] [BOT] 🔀 Deep merged: Entry Level Software Developer @ ORG_e3033671 Freight Lines (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:36:43.993Z] [BOT] 💾 AFTER MERGE: 1705 jobs (merged disk + memory)
[2026-02-01T08:36:43.994Z] [BOT] ✅ No jobs to archive (all 1705 jobs within 7-day window)
[2026-02-01T08:36:44.077Z] [BOT] 💾 Saved posted_jobs.json: 1705 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:45.577Z] [BOT] 📍 [ROUTING] "IT Data Solutions Developer Associate" @ ORG_810ace5b Health Care
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T08:36:45.752Z] [BOT] ✅ Posted message: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care in #💻・tech-jobs
  ✅ Industry: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care
[2026-02-01T08:36:45.753Z] [BOT] 💾 Added channel posting: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care → category channel (1 total channels)
[2026-02-01T08:36:45.753Z] [BOT] 💾 BEFORE MERGE: 1706 jobs in memory (cached)
[2026-02-01T08:36:45.784Z] [BOT] ✅ Loaded V2 database: 1705 jobs
[2026-02-01T08:36:45.784Z] [BOT] 💾 DISK STATE: 1705 jobs on disk
[2026-02-01T08:36:45.784Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1706
[2026-02-01T08:36:45.787Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1706 jobs (merged disk + memory)
[2026-02-01T08:36:45.788Z] [BOT] ✅ No jobs to archive (all 1706 jobs within 7-day window)
[2026-02-01T08:36:45.872Z] [BOT] 💾 Saved posted_jobs.json: 1706 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:47.661Z] [BOT] ✅ Posted message: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:47.661Z] [BOT] 💾 Added channel posting: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care → location channel (2 total channels)
[2026-02-01T08:36:47.662Z] [BOT] 💾 BEFORE MERGE: 1706 jobs in memory (cached)
[2026-02-01T08:36:47.695Z] [BOT] ✅ Loaded V2 database: 1706 jobs
💾 DISK STATE: 1706 jobs on disk
[2026-02-01T08:36:47.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1706
[2026-02-01T08:36:47.699Z] [BOT] 🔀 Deep merged: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care (disk: 1 channels → merged: 2 channels)
[2026-02-01T08:36:47.699Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1706 jobs (merged disk + memory)
[2026-02-01T08:36:47.700Z] [BOT] ✅ No jobs to archive (all 1706 jobs within 7-day window)
[2026-02-01T08:36:47.812Z] [BOT] 💾 Saved posted_jobs.json: 1706 active jobs
[2026-02-01T08:36:47.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:52.314Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T08:36:52.315Z] [BOT] 📍 [ROUTING] "Faculty Fellow" @ ORG_54f9eaef International Group (SIG)
[2026-02-01T08:36:52.315Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T08:36:54.136Z] [BOT] ✅ Posted message: Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
[2026-02-01T08:36:54.136Z] [BOT] ✅ Industry: Faculty Fellow @ ORG_54f9eaef International Group (SIG)
[2026-02-01T08:36:54.137Z] [BOT] 💾 Added channel posting: Faculty Fellow @ ORG_54f9eaef International Group (SIG) → category channel (1 total channels)
[2026-02-01T08:36:54.137Z] [BOT] 💾 BEFORE MERGE: 1707 jobs in memory (cached)
[2026-02-01T08:36:54.168Z] [BOT] ✅ Loaded V2 database: 1706 jobs
💾 DISK STATE: 1706 jobs on disk
[2026-02-01T08:36:54.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1707
[2026-02-01T08:36:54.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:36:54.171Z] [BOT] 💾 AFTER MERGE: 1707 jobs (merged disk + memory)
[2026-02-01T08:36:54.172Z] [BOT] ✅ No jobs to archive (all 1707 jobs within 7-day window)
[2026-02-01T08:36:54.276Z] [BOT] 💾 Saved posted_jobs.json: 1707 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:36:56.049Z] [BOT] ✅ Posted message: Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T08:36:56.050Z] [BOT] 💾 Added channel posting: Faculty Fellow @ ORG_54f9eaef International Group (SIG) → location channel (2 total channels)
[2026-02-01T08:36:56.050Z] [BOT] 💾 BEFORE MERGE: 1707 jobs in memory (cached)
[2026-02-01T08:36:56.081Z] [BOT] ✅ Loaded V2 database: 1707 jobs
💾 DISK STATE: 1707 jobs on disk
[2026-02-01T08:36:56.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1707
[2026-02-01T08:36:56.084Z] [BOT] 🔀 Deep merged: Faculty Fellow @ ORG_54f9eaef International Group (SIG) (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T08:36:56.084Z] [BOT] 💾 AFTER MERGE: 1707 jobs (merged disk + memory)
[2026-02-01T08:36:56.086Z] [BOT] ✅ No jobs to archive (all 1707 jobs within 7-day window)
[2026-02-01T08:36:56.187Z] [BOT] 💾 Saved posted_jobs.json: 1707 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:37:00.687Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T08:37:00.688Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2e345a6b..." not found, but found as SHA256 "eb7cbe19b8bfe949"
[2026-02-01T08:37:00.688Z] [BOT] ⏭️  Skipping duplicate: JID_d47e3554 (posted within 7 days)
[2026-02-01T08:37:00.689Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9b642c72..." not found, but found as SHA256 "308f2f3f62288ac5"
⏭️  Skipping duplicate: JID_f451c4d9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6d16f412..." not found, but found as SHA256 "3af85540998f1fc1"
⏭️  Skipping duplicate: JID_68ae8249 (posted within 7 days)
[2026-02-01T08:37:00.689Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4de9345f..." not found, but found as SHA256 "5c70eaa2de07eb70"
[2026-02-01T08:37:00.689Z] [BOT] ⏭️  Skipping duplicate: JID_939a38e1 (posted within 7 days)
[2026-02-01T08:37:00.689Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_efc35887..." not found, but found as SHA256 "75db6c977c095440"
⏭️  Skipping duplicate: JID_85edbc51 (posted within 7 days)
[2026-02-01T08:37:00.690Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_df4c2a4c..." not found, but found as SHA256 "aac4ddc81a672ebf"
[2026-02-01T08:37:00.690Z] [BOT] ⏭️  Skipping duplicate: JID_df4c2a4c (posted within 7 days)
[2026-02-01T08:37:00.690Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c658ec4..." not found, but found as SHA256 "c698191143392ea2"
[2026-02-01T08:37:00.690Z] [BOT] ⏭️  Skipping duplicate: JID_9c658ec4 (posted within 7 days)
[2026-02-01T08:37:00.690Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_efc35887..." not found, but found as SHA256 "05f5215a95a4d060"
[2026-02-01T08:37:00.690Z] [BOT] ⏭️  Skipping duplicate: JID_4497394c (posted within 7 days)
[2026-02-01T08:37:00.691Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb434e90..." not found, but found as SHA256 "03f7bb224e18162d"
[2026-02-01T08:37:00.691Z] [BOT] ⏭️  Skipping duplicate: JID_6c657feb (posted within 7 days)
[2026-02-01T08:37:00.691Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37b40715..." not found, but found as SHA256 "ab7890b8151ac497"
[2026-02-01T08:37:00.691Z] [BOT] ⏭️  Skipping duplicate: JID_09934be7-associate_r178892 (posted within 7 days)
[2026-02-01T08:37:00.789Z] [BOT] ✅ Loaded pending queue: 2944 total (1207 pending, 50 enriched, 1687 posted)
[2026-02-01T08:37:00.987Z] [BOT] ✅ Saved pending queue: 2944 total (1207 pending, 40 enriched, 1697 posted)
[2026-02-01T08:37:00.987Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T08:37:01.075Z] [BOT] 📂 Loaded 11778 existing routing entries
[2026-02-01T08:37:01.206Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T08:37:01.207Z] [BOT] Total entries: 11788
   Timestamp: 2026-02-01T08:37:01.159Z
[2026-02-01T08:37:01.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T08:37:01.207Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T08:37:01.207Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T08:37:01.208Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #📍・JID_6daed763: 6 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-02-01T08:37:01.208Z] [BOT] 4. #🌲・JID_efdf5921: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T08:37:01.208Z] [BOT] [STATS] Channel stats saved
[2026-02-01T08:37:01.208Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1707 jobs in memory (cached)
[2026-02-01T08:37:01.242Z] [BOT] ✅ Loaded V2 database: 1707 jobs
💾 DISK STATE: 1707 jobs on disk
[2026-02-01T08:37:01.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1707
[2026-02-01T08:37:01.249Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T08:37:01.249Z] [BOT] 💾 AFTER MERGE: 1707 jobs (merged disk + memory)
[2026-02-01T08:37:01.250Z] [BOT] ✅ No jobs to archive (all 1707 jobs within 7-day window)
[2026-02-01T08:37:01.345Z] [BOT] 💾 Saved posted_jobs.json: 1707 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T08:37:01.345Z] [BOT] ✅ Database saved successfully
[2026-02-01T08:37:03.381Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3076) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*