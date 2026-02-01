# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T07:27:17.928Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T07:26:30.521Z] ========================================
[2026-02-01T07:26:30.523Z] Discord Bot Execution Log
[2026-02-01T07:26:30.523Z] Environment: GitHub Actions
[2026-02-01T07:26:30.523Z] Node Version: v20.20.0
[2026-02-01T07:26:30.523Z] ========================================
[2026-02-01T07:26:30.523Z] Environment Variables Check:
[2026-02-01T07:26:30.523Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T07:26:30.523Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T07:26:30.523Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T07:26:30.524Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T07:26:30.524Z] 
Multi-Channel Configuration:
[2026-02-01T07:26:30.524Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T07:26:30.524Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T07:26:30.524Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T07:26:30.524Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T07:26:30.524Z] 
Data Files Check:
[2026-02-01T07:26:30.525Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58351 bytes)
[2026-02-01T07:26:30.572Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9148146 bytes)
[2026-02-01T07:26:30.572Z] 
========================================
[2026-02-01T07:26:30.572Z] Starting Enhanced Discord Bot...
[2026-02-01T07:26:30.572Z] ========================================
[2026-02-01T07:26:31.143Z] [BOT] ✅ Loaded V2 database: 1657 jobs
[2026-02-01T07:26:31.523Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T07:26:31.523Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T07:26:31.524Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T07:26:31.634Z] [BOT] ✅ Loaded pending queue: 2944 total (1247 pending, 50 enriched, 1647 posted)
[2026-02-01T07:26:31.635Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T07:26:31.635Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T07:26:31.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T07:26:31.636Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T07:26:31.636Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T07:26:31.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T07:26:31.637Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T07:26:31.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T07:26:31.637Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T07:26:31.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T07:26:31.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T07:26:31.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T07:26:31.638Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T07:26:31.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T07:26:31.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T07:26:31.639Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T07:26:31.653Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T07:26:31.653Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T07:26:31.654Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T07:26:31.654Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-02-01T07:26:31.655Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-02-01T07:26:31.655Z] [BOT] - Enterprise Account Executive @ nominal: new york, austin
   - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
   - Data Analyst @ Gartner: irving, stamford
   - Mission Operations Engineer @ nominal: new york, austin
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T07:26:31.658Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-02-01T07:26:31.659Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD" @ ORG_08c9a13c
[2026-02-01T07:26:31.659Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:26:31.677Z] [BOT ERROR] (node:3991) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T07:26:31.955Z] [BOT] ✅ Posted message: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T07:26:31.955Z] [BOT] ✅ Industry: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c
[2026-02-01T07:26:31.956Z] [BOT] 💾 Added channel posting: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T07:26:31.956Z] [BOT] 💾 BEFORE MERGE: 1658 jobs in memory (cached)
[2026-02-01T07:26:31.994Z] [BOT] ✅ Loaded V2 database: 1657 jobs
💾 DISK STATE: 1657 jobs on disk
[2026-02-01T07:26:31.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1658
[2026-02-01T07:26:31.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:31.998Z] [BOT] 💾 AFTER MERGE: 1658 jobs (merged disk + memory)
[2026-02-01T07:26:31.999Z] [BOT] ✅ No jobs to archive (all 1658 jobs within 7-day window)
[2026-02-01T07:26:32.108Z] [BOT] 💾 Saved posted_jobs.json: 1658 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:33.778Z] [BOT] ✅ Posted message: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T07:26:33.778Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T07:26:33.779Z] [BOT] 💾 Added channel posting: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T07:26:33.779Z] [BOT] 💾 BEFORE MERGE: 1658 jobs in memory (cached)
[2026-02-01T07:26:33.815Z] [BOT] ✅ Loaded V2 database: 1658 jobs
[2026-02-01T07:26:33.815Z] [BOT] 💾 DISK STATE: 1658 jobs on disk
[2026-02-01T07:26:33.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1658
[2026-02-01T07:26:33.820Z] [BOT] 🔀 Deep merged: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:33.820Z] [BOT] 💾 AFTER MERGE: 1658 jobs (merged disk + memory)
[2026-02-01T07:26:33.821Z] [BOT] ✅ No jobs to archive (all 1658 jobs within 7-day window)
[2026-02-01T07:26:33.912Z] [BOT] 💾 Saved posted_jobs.json: 1658 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:35.413Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Inference-US - PhD" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T07:26:35.413Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:26:35.644Z] [BOT] ✅ Posted message: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T07:26:35.645Z] [BOT] ✅ Industry: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c
[2026-02-01T07:26:35.645Z] [BOT] 💾 Added channel posting: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T07:26:35.645Z] [BOT] 💾 BEFORE MERGE: 1659 jobs in memory (cached)
[2026-02-01T07:26:35.677Z] [BOT] ✅ Loaded V2 database: 1658 jobs
💾 DISK STATE: 1658 jobs on disk
[2026-02-01T07:26:35.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1659
[2026-02-01T07:26:35.681Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:35.681Z] [BOT] 💾 AFTER MERGE: 1659 jobs (merged disk + memory)
[2026-02-01T07:26:35.682Z] [BOT] ✅ No jobs to archive (all 1659 jobs within 7-day window)
[2026-02-01T07:26:35.773Z] [BOT] 💾 Saved posted_jobs.json: 1659 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:37.568Z] [BOT] ✅ Posted message: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T07:26:37.568Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T07:26:37.568Z] [BOT] 💾 Added channel posting: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T07:26:37.568Z] [BOT] 💾 BEFORE MERGE: 1659 jobs in memory (cached)
[2026-02-01T07:26:37.598Z] [BOT] ✅ Loaded V2 database: 1659 jobs
💾 DISK STATE: 1659 jobs on disk
[2026-02-01T07:26:37.598Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1659
[2026-02-01T07:26:37.602Z] [BOT] 🔀 Deep merged: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:37.602Z] [BOT] 💾 AFTER MERGE: 1659 jobs (merged disk + memory)
[2026-02-01T07:26:37.603Z] [BOT] ✅ No jobs to archive (all 1659 jobs within 7-day window)
[2026-02-01T07:26:37.693Z] [BOT] 💾 Saved posted_jobs.json: 1659 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:39.195Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
[2026-02-01T07:26:39.195Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:26:39.378Z] [BOT] ✅ Posted message: Enterprise Account Executive @ nominal in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive @ nominal
[2026-02-01T07:26:39.379Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ nominal → category channel (1 total channels)
[2026-02-01T07:26:39.379Z] [BOT] 💾 BEFORE MERGE: 1660 jobs in memory (cached)
[2026-02-01T07:26:39.419Z] [BOT] ✅ Loaded V2 database: 1659 jobs
💾 DISK STATE: 1659 jobs on disk
[2026-02-01T07:26:39.419Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1660
[2026-02-01T07:26:39.422Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:39.423Z] [BOT] 💾 AFTER MERGE: 1660 jobs (merged disk + memory)
[2026-02-01T07:26:39.424Z] [BOT] ✅ No jobs to archive (all 1660 jobs within 7-day window)
[2026-02-01T07:26:39.515Z] [BOT] 💾 Saved posted_jobs.json: 1660 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:41.120Z] [BOT] ✅ Posted message: Enterprise Account Executive @ nominal in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T07:26:41.121Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ nominal → location channel (2 total channels)
[2026-02-01T07:26:41.121Z] [BOT] 💾 BEFORE MERGE: 1660 jobs in memory (cached)
[2026-02-01T07:26:41.153Z] [BOT] ✅ Loaded V2 database: 1660 jobs
💾 DISK STATE: 1660 jobs on disk
[2026-02-01T07:26:41.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1660
[2026-02-01T07:26:41.156Z] [BOT] 🔀 Deep merged: Enterprise Account Executive @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:41.156Z] [BOT] 💾 AFTER MERGE: 1660 jobs (merged disk + memory)
[2026-02-01T07:26:41.157Z] [BOT] ✅ No jobs to archive (all 1660 jobs within 7-day window)
[2026-02-01T07:26:41.260Z] [BOT] 💾 Saved posted_jobs.json: 1660 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:42.760Z] [BOT] 📍 [ROUTING] "Technical Account Executive" @ clerk
   Category: TECH (default)
[2026-02-01T07:26:42.760Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T07:26:42.971Z] [BOT] ✅ Posted message: Technical Account Executive @ clerk in #💻・tech-jobs
[2026-02-01T07:26:42.971Z] [BOT] ✅ Industry: Technical Account Executive @ clerk
[2026-02-01T07:26:42.971Z] [BOT] 💾 Added channel posting: Technical Account Executive @ clerk → category channel (1 total channels)
[2026-02-01T07:26:42.971Z] [BOT] 💾 BEFORE MERGE: 1661 jobs in memory (cached)
[2026-02-01T07:26:43.002Z] [BOT] ✅ Loaded V2 database: 1660 jobs
💾 DISK STATE: 1660 jobs on disk
[2026-02-01T07:26:43.002Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1661
[2026-02-01T07:26:43.005Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:43.006Z] [BOT] 💾 AFTER MERGE: 1661 jobs (merged disk + memory)
[2026-02-01T07:26:43.007Z] [BOT] ✅ No jobs to archive (all 1661 jobs within 7-day window)
[2026-02-01T07:26:43.100Z] [BOT] 💾 Saved posted_jobs.json: 1661 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:44.762Z] [BOT] ✅ Posted message: Technical Account Executive @ clerk in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T07:26:44.762Z] [BOT] 💾 Added channel posting: Technical Account Executive @ clerk → location channel (2 total channels)
[2026-02-01T07:26:44.762Z] [BOT] 💾 BEFORE MERGE: 1661 jobs in memory (cached)
[2026-02-01T07:26:44.792Z] [BOT] ✅ Loaded V2 database: 1661 jobs
💾 DISK STATE: 1661 jobs on disk
[2026-02-01T07:26:44.792Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1661
[2026-02-01T07:26:44.796Z] [BOT] 🔀 Deep merged: Technical Account Executive @ clerk (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:44.796Z] [BOT] 💾 AFTER MERGE: 1661 jobs (merged disk + memory)
[2026-02-01T07:26:44.797Z] [BOT] ✅ No jobs to archive (all 1661 jobs within 7-day window)
[2026-02-01T07:26:44.887Z] [BOT] 💾 Saved posted_jobs.json: 1661 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:49.389Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-02-01T07:26:49.391Z] [BOT] 📍 [ROUTING] "Graduate Research Engineer" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T07:26:49.391Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:26:49.556Z] [BOT] ✅ Posted message: Graduate Research Engineer @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Engineer @ ORG_08c9a13c
[2026-02-01T07:26:49.557Z] [BOT] 💾 Added channel posting: Graduate Research Engineer @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1662 jobs in memory (cached)
[2026-02-01T07:26:49.591Z] [BOT] ✅ Loaded V2 database: 1661 jobs
💾 DISK STATE: 1661 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1662
[2026-02-01T07:26:49.597Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:49.598Z] [BOT] 💾 AFTER MERGE: 1662 jobs (merged disk + memory)
[2026-02-01T07:26:49.599Z] [BOT] ✅ No jobs to archive (all 1662 jobs within 7-day window)
[2026-02-01T07:26:49.697Z] [BOT] 💾 Saved posted_jobs.json: 1662 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:51.519Z] [BOT] ✅ Posted message: Graduate Research Engineer @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T07:26:51.519Z] [BOT] 💾 Added channel posting: Graduate Research Engineer @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T07:26:51.519Z] [BOT] 💾 BEFORE MERGE: 1662 jobs in memory (cached)
[2026-02-01T07:26:51.550Z] [BOT] ✅ Loaded V2 database: 1662 jobs
💾 DISK STATE: 1662 jobs on disk
[2026-02-01T07:26:51.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1662
[2026-02-01T07:26:51.553Z] [BOT] 🔀 Deep merged: Graduate Research Engineer @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:51.553Z] [BOT] 💾 AFTER MERGE: 1662 jobs (merged disk + memory)
[2026-02-01T07:26:51.554Z] [BOT] ✅ No jobs to archive (all 1662 jobs within 7-day window)
[2026-02-01T07:26:51.653Z] [BOT] 💾 Saved posted_jobs.json: 1662 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:53.154Z] [BOT] 📍 [ROUTING] "New Grads 2026 - Software Engineer - Computer Vision" @ ORG_eb3a28ce
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T07:26:53.154Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:26:53.300Z] [BOT] ✅ Posted message: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce in #🤖・ai-jobs
  ✅ Industry: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce
[2026-02-01T07:26:53.300Z] [BOT] 💾 Added channel posting: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce → category channel (1 total channels)
[2026-02-01T07:26:53.300Z] [BOT] 💾 BEFORE MERGE: 1663 jobs in memory (cached)
[2026-02-01T07:26:53.331Z] [BOT] ✅ Loaded V2 database: 1662 jobs
💾 DISK STATE: 1662 jobs on disk
[2026-02-01T07:26:53.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1663
[2026-02-01T07:26:53.334Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:53.334Z] [BOT] 💾 AFTER MERGE: 1663 jobs (merged disk + memory)
[2026-02-01T07:26:53.335Z] [BOT] ✅ No jobs to archive (all 1663 jobs within 7-day window)
[2026-02-01T07:26:53.432Z] [BOT] 💾 Saved posted_jobs.json: 1663 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:55.328Z] [BOT] ✅ Posted message: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T07:26:55.329Z] [BOT] 💾 Added channel posting: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce → location channel (2 total channels)
💾 BEFORE MERGE: 1663 jobs in memory (cached)
[2026-02-01T07:26:55.360Z] [BOT] ✅ Loaded V2 database: 1663 jobs
💾 DISK STATE: 1663 jobs on disk
[2026-02-01T07:26:55.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1663
[2026-02-01T07:26:55.363Z] [BOT] 🔀 Deep merged: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:55.363Z] [BOT] 💾 AFTER MERGE: 1663 jobs (merged disk + memory)
[2026-02-01T07:26:55.364Z] [BOT] ✅ No jobs to archive (all 1663 jobs within 7-day window)
[2026-02-01T07:26:55.452Z] [BOT] 💾 Saved posted_jobs.json: 1663 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:56.953Z] [BOT] 📍 [ROUTING] "New Grads 2026 - General Software Engineer" @ ORG_eb3a28ce
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T07:26:56.954Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:26:57.149Z] [BOT] ✅ Posted message: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce in #🤖・ai-jobs
  ✅ Industry: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce
[2026-02-01T07:26:57.149Z] [BOT] 💾 Added channel posting: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce → category channel (1 total channels)
[2026-02-01T07:26:57.150Z] [BOT] 💾 BEFORE MERGE: 1664 jobs in memory (cached)
[2026-02-01T07:26:57.183Z] [BOT] ✅ Loaded V2 database: 1663 jobs
💾 DISK STATE: 1663 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1664
[2026-02-01T07:26:57.189Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:26:57.189Z] [BOT] 💾 AFTER MERGE: 1664 jobs (merged disk + memory)
[2026-02-01T07:26:57.191Z] [BOT] ✅ No jobs to archive (all 1664 jobs within 7-day window)
[2026-02-01T07:26:57.282Z] [BOT] 💾 Saved posted_jobs.json: 1664 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:26:58.911Z] [BOT] ✅ Posted message: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T07:26:58.911Z] [BOT] 💾 Added channel posting: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce → location channel (2 total channels)
[2026-02-01T07:26:58.912Z] [BOT] 💾 BEFORE MERGE: 1664 jobs in memory (cached)
[2026-02-01T07:26:58.948Z] [BOT] ✅ Loaded V2 database: 1664 jobs
💾 DISK STATE: 1664 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1664
[2026-02-01T07:26:58.952Z] [BOT] 🔀 Deep merged: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:26:58.953Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:26:58.953Z] [BOT] 💾 AFTER MERGE: 1664 jobs (merged disk + memory)
[2026-02-01T07:26:58.960Z] [BOT] ✅ No jobs to archive (all 1664 jobs within 7-day window)
[2026-02-01T07:26:59.043Z] [BOT] 💾 Saved posted_jobs.json: 1664 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:00.545Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_64dba1b4
   Category: AI (matched: "machine learning")
[2026-02-01T07:27:00.545Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T07:27:00.765Z] [BOT] ✅ Posted message: Research Assistant @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: Research Assistant @ ORG_64dba1b4
[2026-02-01T07:27:00.766Z] [BOT] 💾 Added channel posting: Research Assistant @ ORG_64dba1b4 → category channel (1 total channels)
[2026-02-01T07:27:00.766Z] [BOT] 💾 BEFORE MERGE: 1665 jobs in memory (cached)
[2026-02-01T07:27:00.798Z] [BOT] ✅ Loaded V2 database: 1664 jobs
💾 DISK STATE: 1664 jobs on disk
[2026-02-01T07:27:00.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1665
[2026-02-01T07:27:00.801Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:27:00.801Z] [BOT] 💾 AFTER MERGE: 1665 jobs (merged disk + memory)
[2026-02-01T07:27:00.802Z] [BOT] ✅ No jobs to archive (all 1665 jobs within 7-day window)
[2026-02-01T07:27:00.894Z] [BOT] 💾 Saved posted_jobs.json: 1665 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:02.502Z] [BOT] ✅ Posted message: Research Assistant @ ORG_64dba1b4 in #📍・JID_6daed763
[2026-02-01T07:27:02.503Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T07:27:02.503Z] [BOT] 💾 Added channel posting: Research Assistant @ ORG_64dba1b4 → location channel (2 total channels)
💾 BEFORE MERGE: 1665 jobs in memory (cached)
[2026-02-01T07:27:02.534Z] [BOT] ✅ Loaded V2 database: 1665 jobs
[2026-02-01T07:27:02.534Z] [BOT] 💾 DISK STATE: 1665 jobs on disk
[2026-02-01T07:27:02.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1665
[2026-02-01T07:27:02.537Z] [BOT] 🔀 Deep merged: Research Assistant @ ORG_64dba1b4 (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:27:02.537Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1665 jobs (merged disk + memory)
[2026-02-01T07:27:02.538Z] [BOT] ✅ No jobs to archive (all 1665 jobs within 7-day window)
[2026-02-01T07:27:02.645Z] [BOT] 💾 Saved posted_jobs.json: 1665 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:04.145Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – Entry Level" @ ORG_abf215e6 Connected
[2026-02-01T07:27:04.146Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T07:27:04.146Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:27:04.474Z] [BOT] ✅ Posted message: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected in #🤖・ai-jobs
[2026-02-01T07:27:04.474Z] [BOT] ✅ Industry: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected
[2026-02-01T07:27:04.475Z] [BOT] 💾 Added channel posting: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected → category channel (1 total channels)
[2026-02-01T07:27:04.475Z] [BOT] 💾 BEFORE MERGE: 1666 jobs in memory (cached)
[2026-02-01T07:27:04.505Z] [BOT] ✅ Loaded V2 database: 1665 jobs
💾 DISK STATE: 1665 jobs on disk
[2026-02-01T07:27:04.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1666
[2026-02-01T07:27:04.508Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1666 jobs (merged disk + memory)
[2026-02-01T07:27:04.509Z] [BOT] ✅ No jobs to archive (all 1666 jobs within 7-day window)
[2026-02-01T07:27:04.594Z] [BOT] 💾 Saved posted_jobs.json: 1666 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:06.224Z] [BOT] ✅ Posted message: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T07:27:06.224Z] [BOT] 💾 Added channel posting: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected → location channel (2 total channels)
[2026-02-01T07:27:06.224Z] [BOT] 💾 BEFORE MERGE: 1666 jobs in memory (cached)
[2026-02-01T07:27:06.255Z] [BOT] ✅ Loaded V2 database: 1666 jobs
💾 DISK STATE: 1666 jobs on disk
[2026-02-01T07:27:06.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1666
[2026-02-01T07:27:06.258Z] [BOT] 🔀 Deep merged: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected (disk: 1 channels → merged: 2 channels)
[2026-02-01T07:27:06.258Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1666 jobs (merged disk + memory)
[2026-02-01T07:27:06.259Z] [BOT] ✅ No jobs to archive (all 1666 jobs within 7-day window)
[2026-02-01T07:27:06.349Z] [BOT] 💾 Saved posted_jobs.json: 1666 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:07.850Z] [BOT] 📍 [ROUTING] "Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer" @ ORG_8bc2a0e9ind
   Category: AI (matched: "machine learning")
[2026-02-01T07:27:07.850Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T07:27:08.033Z] [BOT] ✅ Posted message: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind in #🤖・ai-jobs
  ✅ Industry: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind
[2026-02-01T07:27:08.034Z] [BOT] 💾 Added channel posting: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind → category channel (1 total channels)
[2026-02-01T07:27:08.034Z] [BOT] 💾 BEFORE MERGE: 1667 jobs in memory (cached)
[2026-02-01T07:27:08.069Z] [BOT] ✅ Loaded V2 database: 1666 jobs
💾 DISK STATE: 1666 jobs on disk
[2026-02-01T07:27:08.069Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1667
[2026-02-01T07:27:08.072Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:27:08.072Z] [BOT] 💾 AFTER MERGE: 1667 jobs (merged disk + memory)
[2026-02-01T07:27:08.073Z] [BOT] ✅ No jobs to archive (all 1667 jobs within 7-day window)
[2026-02-01T07:27:08.184Z] [BOT] 💾 Saved posted_jobs.json: 1667 active jobs
[2026-02-01T07:27:08.184Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:09.863Z] [BOT] ✅ Posted message: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T07:27:09.863Z] [BOT] 💾 Added channel posting: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind → location channel (2 total channels)
[2026-02-01T07:27:09.864Z] [BOT] 💾 BEFORE MERGE: 1667 jobs in memory (cached)
[2026-02-01T07:27:09.894Z] [BOT] ✅ Loaded V2 database: 1667 jobs
💾 DISK STATE: 1667 jobs on disk
[2026-02-01T07:27:09.894Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1667
[2026-02-01T07:27:09.897Z] [BOT] 🔀 Deep merged: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T07:27:09.897Z] [BOT] 💾 AFTER MERGE: 1667 jobs (merged disk + memory)
[2026-02-01T07:27:09.898Z] [BOT] ✅ No jobs to archive (all 1667 jobs within 7-day window)
[2026-02-01T07:27:09.987Z] [BOT] 💾 Saved posted_jobs.json: 1667 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:14.489Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T07:27:14.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ad97b028..." not found, but found as SHA256 "bbeed1e85e4632b2"
[2026-02-01T07:27:14.491Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b8c6c876-detail (posted within 7 days)
[2026-02-01T07:27:14.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_78661f38..." not found, but found as SHA256 "cfb05456e045ab95"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_19a0ff0c-detail (posted within 7 days)
[2026-02-01T07:27:14.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e4f6a62..." not found, but found as SHA256 "352b726114ab53d9"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_9b1ea507-detail (posted within 7 days)
[2026-02-01T07:27:14.492Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0dbd0e50-..." not found, but found as SHA256 "b979d22790549418"
[2026-02-01T07:27:14.492Z] [BOT] ⏭️  Skipping duplicate: JID_644a60ec (posted within 7 days)
[2026-02-01T07:27:14.492Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32c09189-..." not found, but found as SHA256 "4b4179147143d35e"
⏭️  Skipping duplicate: JID_3a2ab7c9 (posted within 7 days)
[2026-02-01T07:27:14.492Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f24309e2..." not found, but found as SHA256 "f9802153fc3abb6c"
[2026-02-01T07:27:14.492Z] [BOT] ⏭️  Skipping duplicate: JID_ea76c2ba-assistant_r136132-1 (posted within 7 days)
[2026-02-01T07:27:14.492Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bd4b2be-job_app..." not found, but found as SHA256 "2606aa0cea0b21dc"
[2026-02-01T07:27:14.492Z] [BOT] ⏭️  Skipping duplicate: JID_0bd4b2be-job_app (posted within 7 days)
[2026-02-01T07:27:14.493Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae6a857..." not found, but found as SHA256 "b9a319dca719b5d5"
[2026-02-01T07:27:14.493Z] [BOT] ⏭️  Skipping duplicate: JID_be56f432 (posted within 7 days)
[2026-02-01T07:27:14.493Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5d35d09..." not found, but found as SHA256 "72c1f2df0cd706c4"
[2026-02-01T07:27:14.493Z] [BOT] ⏭️  Skipping duplicate: JID_278f1ad3 (posted within 7 days)
[2026-02-01T07:27:14.493Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf72ecc0..." not found, but found as SHA256 "9dab3640c19f727c"
[2026-02-01T07:27:14.493Z] [BOT] ⏭️  Skipping duplicate: JID_110a55cc (posted within 7 days)
[2026-02-01T07:27:14.595Z] [BOT] ✅ Loaded pending queue: 2944 total (1247 pending, 50 enriched, 1647 posted)
[2026-02-01T07:27:14.784Z] [BOT] ✅ Saved pending queue: 2944 total (1247 pending, 40 enriched, 1657 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T07:27:14.784Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T07:27:14.872Z] [BOT] 📂 Loaded 11738 existing routing entries
[2026-02-01T07:27:15.005Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11748
[2026-02-01T07:27:15.005Z] [BOT] Timestamp: 2026-02-01T07:27:14.958Z
[2026-02-01T07:27:15.009Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #🌲・JID_efdf5921: 3 posts
     4. #🌉・JID_739bbc0b: 3 posts
     5. #📍・JID_6daed763: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1667 jobs in memory (cached)
[2026-02-01T07:27:15.052Z] [BOT] ✅ Loaded V2 database: 1667 jobs
[2026-02-01T07:27:15.052Z] [BOT] 💾 DISK STATE: 1667 jobs on disk
[2026-02-01T07:27:15.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1667
[2026-02-01T07:27:15.057Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T07:27:15.057Z] [BOT] 💾 AFTER MERGE: 1667 jobs (merged disk + memory)
[2026-02-01T07:27:15.059Z] [BOT] ✅ No jobs to archive (all 1667 jobs within 7-day window)
[2026-02-01T07:27:15.150Z] [BOT] 💾 Saved posted_jobs.json: 1667 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T07:27:15.150Z] [BOT] ✅ Database saved successfully
[2026-02-01T07:27:17.182Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3991) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*