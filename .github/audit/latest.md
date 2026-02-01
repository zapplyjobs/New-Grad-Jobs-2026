# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T10:53:34.073Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T10:52:44.237Z] ========================================
[2026-02-01T10:52:44.239Z] Discord Bot Execution Log
[2026-02-01T10:52:44.239Z] Environment: GitHub Actions
[2026-02-01T10:52:44.239Z] Node Version: v20.20.0
[2026-02-01T10:52:44.239Z] ========================================
[2026-02-01T10:52:44.239Z] Environment Variables Check:
[2026-02-01T10:52:44.239Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T10:52:44.240Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T10:52:44.240Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T10:52:44.240Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T10:52:44.240Z] 
Multi-Channel Configuration:
[2026-02-01T10:52:44.240Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T10:52:44.240Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.240Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.240Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T10:52:44.240Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.240Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.240Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.241Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.241Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:52:44.241Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T10:52:44.241Z] 
Data Files Check:
[2026-02-01T10:52:44.242Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66544 bytes)
[2026-02-01T10:52:44.291Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9487709 bytes)
[2026-02-01T10:52:44.291Z] 
========================================
[2026-02-01T10:52:44.291Z] Starting Enhanced Discord Bot...
[2026-02-01T10:52:44.291Z] ========================================
[2026-02-01T10:52:44.860Z] [BOT] ✅ Loaded V2 database: 1777 jobs
[2026-02-01T10:52:45.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T10:52:45.544Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T10:52:45.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T10:52:45.653Z] [BOT] ✅ Loaded pending queue: 2949 total (1132 pending, 50 enriched, 1767 posted)
[2026-02-01T10:52:45.653Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:52:45.654Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T10:52:45.654Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T10:52:45.654Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:52:45.655Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T10:52:45.655Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T10:52:45.655Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T10:52:45.656Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T10:52:45.656Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T10:52:45.656Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T10:52:45.656Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T10:52:45.657Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T10:52:45.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T10:52:45.657Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T10:52:45.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T10:52:45.671Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T10:52:45.671Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Fellow at Northeastern
[2026-02-01T10:52:45.672Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Aerosols and hydroclimate risk at University of Texas - Austin
[2026-02-01T10:52:45.807Z] [BOT] ✅ Loaded pending queue: 2949 total (1132 pending, 50 enriched, 1767 posted)
[2026-02-01T10:52:45.998Z] [BOT] ✅ Saved pending queue: 2947 total (1132 pending, 48 enriched, 1767 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-02-01T10:52:45.998Z] [BOT] 📋 After blacklist filter: 40 jobs (2 blacklisted)
[2026-02-01T10:52:45.998Z] [BOT] 📋 After data quality filter: 40 jobs (0 invalid)
[2026-02-01T10:52:45.999Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T10:52:45.999Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T10:52:45.999Z] [BOT] - Machine Learning Graduate - 2026 Start @ ByteDance: san jose, seattle
   - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
[2026-02-01T10:52:45.999Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T10:52:46.002Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T10:52:46.003Z] [BOT] 📍 [ROUTING] "Software Engineer, TensorRT Specialized Platforms" @ ORG_0890f456
[2026-02-01T10:52:46.003Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:52:46.020Z] [BOT ERROR] (node:4111) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T10:52:46.304Z] [BOT] ✅ Posted message: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 in #💻・tech-jobs
[2026-02-01T10:52:46.304Z] [BOT] ✅ Industry: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456
[2026-02-01T10:52:46.305Z] [BOT] 💾 Added channel posting: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T10:52:46.306Z] [BOT] 💾 BEFORE MERGE: 1778 jobs in memory (cached)
[2026-02-01T10:52:46.341Z] [BOT] ✅ Loaded V2 database: 1777 jobs
💾 DISK STATE: 1777 jobs on disk
[2026-02-01T10:52:46.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1778
[2026-02-01T10:52:46.345Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:52:46.345Z] [BOT] 💾 AFTER MERGE: 1778 jobs (merged disk + memory)
[2026-02-01T10:52:46.347Z] [BOT] ✅ No jobs to archive (all 1778 jobs within 7-day window)
[2026-02-01T10:52:46.452Z] [BOT] 💾 Saved posted_jobs.json: 1778 active jobs
[2026-02-01T10:52:46.452Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:48.291Z] [BOT] ✅ Posted message: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T10:52:48.291Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:52:48.292Z] [BOT] 💾 Added channel posting: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T10:52:48.292Z] [BOT] 💾 BEFORE MERGE: 1778 jobs in memory (cached)
[2026-02-01T10:52:48.324Z] [BOT] ✅ Loaded V2 database: 1778 jobs
💾 DISK STATE: 1778 jobs on disk
[2026-02-01T10:52:48.325Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1778
[2026-02-01T10:52:48.328Z] [BOT] 🔀 Deep merged: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:52:48.329Z] [BOT] 💾 AFTER MERGE: 1778 jobs (merged disk + memory)
[2026-02-01T10:52:48.330Z] [BOT] ✅ No jobs to archive (all 1778 jobs within 7-day window)
[2026-02-01T10:52:48.428Z] [BOT] 💾 Saved posted_jobs.json: 1778 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:49.929Z] [BOT] 📍 [ROUTING] "Software Engineer (Summer 2026 New Grad)" @ ORG_8f254c21
[2026-02-01T10:52:49.929Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:52:50.105Z] [BOT] ✅ Posted message: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 in #💻・tech-jobs
[2026-02-01T10:52:50.106Z] [BOT] ✅ Industry: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21
[2026-02-01T10:52:50.106Z] [BOT] 💾 Added channel posting: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 → category channel (1 total channels)
[2026-02-01T10:52:50.106Z] [BOT] 💾 BEFORE MERGE: 1779 jobs in memory (cached)
[2026-02-01T10:52:50.139Z] [BOT] ✅ Loaded V2 database: 1778 jobs
💾 DISK STATE: 1778 jobs on disk
[2026-02-01T10:52:50.139Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1779
[2026-02-01T10:52:50.143Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:52:50.143Z] [BOT] 💾 AFTER MERGE: 1779 jobs (merged disk + memory)
[2026-02-01T10:52:50.144Z] [BOT] ✅ No jobs to archive (all 1779 jobs within 7-day window)
[2026-02-01T10:52:50.235Z] [BOT] 💾 Saved posted_jobs.json: 1779 active jobs
[2026-02-01T10:52:50.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:51.929Z] [BOT] ✅ Posted message: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:52:51.929Z] [BOT] 💾 Added channel posting: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 → location channel (2 total channels)
💾 BEFORE MERGE: 1779 jobs in memory (cached)
[2026-02-01T10:52:51.964Z] [BOT] ✅ Loaded V2 database: 1779 jobs
💾 DISK STATE: 1779 jobs on disk
[2026-02-01T10:52:51.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1779
[2026-02-01T10:52:51.968Z] [BOT] 🔀 Deep merged: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:52:51.968Z] [BOT] 💾 AFTER MERGE: 1779 jobs (merged disk + memory)
[2026-02-01T10:52:51.969Z] [BOT] ✅ No jobs to archive (all 1779 jobs within 7-day window)
[2026-02-01T10:52:52.063Z] [BOT] 💾 Saved posted_jobs.json: 1779 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:53.567Z] [BOT] 📍 [ROUTING] "Developer Relations Engineer (San Francisco, CA)" @ supabase
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:52:53.785Z] [BOT] ✅ Posted message: Developer Relations Engineer (San Francisco, CA) @ supabase in #💻・tech-jobs
  ✅ Industry: Developer Relations Engineer (San Francisco, CA) @ supabase
[2026-02-01T10:52:53.786Z] [BOT] 💾 Added channel posting: Developer Relations Engineer (San Francisco, CA) @ supabase → category channel (1 total channels)
[2026-02-01T10:52:53.786Z] [BOT] 💾 BEFORE MERGE: 1780 jobs in memory (cached)
[2026-02-01T10:52:53.821Z] [BOT] ✅ Loaded V2 database: 1779 jobs
💾 DISK STATE: 1779 jobs on disk
[2026-02-01T10:52:53.821Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1780
[2026-02-01T10:52:53.825Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:52:53.825Z] [BOT] 💾 AFTER MERGE: 1780 jobs (merged disk + memory)
[2026-02-01T10:52:53.826Z] [BOT] ✅ No jobs to archive (all 1780 jobs within 7-day window)
[2026-02-01T10:52:53.926Z] [BOT] 💾 Saved posted_jobs.json: 1780 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:55.702Z] [BOT] ✅ Posted message: Developer Relations Engineer (San Francisco, CA) @ supabase in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:52:55.702Z] [BOT] 💾 Added channel posting: Developer Relations Engineer (San Francisco, CA) @ supabase → location channel (2 total channels)
[2026-02-01T10:52:55.702Z] [BOT] 💾 BEFORE MERGE: 1780 jobs in memory (cached)
[2026-02-01T10:52:55.740Z] [BOT] ✅ Loaded V2 database: 1780 jobs
💾 DISK STATE: 1780 jobs on disk
[2026-02-01T10:52:55.740Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1780
[2026-02-01T10:52:55.743Z] [BOT] 🔀 Deep merged: Developer Relations Engineer (San Francisco, CA) @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:52:55.743Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1780 jobs (merged disk + memory)
[2026-02-01T10:52:55.744Z] [BOT] ✅ No jobs to archive (all 1780 jobs within 7-day window)
[2026-02-01T10:52:55.837Z] [BOT] 💾 Saved posted_jobs.json: 1780 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:57.339Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_66279f04
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:52:57.548Z] [BOT] ✅ Posted message: Software Engineer @ ORG_66279f04 in #💻・tech-jobs
[2026-02-01T10:52:57.548Z] [BOT] ✅ Industry: Software Engineer @ ORG_66279f04
[2026-02-01T10:52:57.548Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_66279f04 → category channel (1 total channels)
[2026-02-01T10:52:57.548Z] [BOT] 💾 BEFORE MERGE: 1781 jobs in memory (cached)
[2026-02-01T10:52:57.581Z] [BOT] ✅ Loaded V2 database: 1780 jobs
💾 DISK STATE: 1780 jobs on disk
[2026-02-01T10:52:57.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1781
[2026-02-01T10:52:57.584Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:52:57.584Z] [BOT] 💾 AFTER MERGE: 1781 jobs (merged disk + memory)
[2026-02-01T10:52:57.585Z] [BOT] ✅ No jobs to archive (all 1781 jobs within 7-day window)
[2026-02-01T10:52:57.700Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:52:59.428Z] [BOT] ✅ Posted message: Software Engineer @ ORG_66279f04 in #📍・JID_6daed763
[2026-02-01T10:52:59.428Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:52:59.429Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_66279f04 → location channel (2 total channels)
[2026-02-01T10:52:59.429Z] [BOT] 💾 BEFORE MERGE: 1781 jobs in memory (cached)
[2026-02-01T10:52:59.460Z] [BOT] ✅ Loaded V2 database: 1781 jobs
💾 DISK STATE: 1781 jobs on disk
[2026-02-01T10:52:59.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1781
[2026-02-01T10:52:59.463Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_66279f04 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:52:59.463Z] [BOT] 💾 AFTER MERGE: 1781 jobs (merged disk + memory)
[2026-02-01T10:52:59.464Z] [BOT] ✅ No jobs to archive (all 1781 jobs within 7-day window)
[2026-02-01T10:52:59.548Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:01.051Z] [BOT] 📍 [ROUTING] "Product Applications Engineer" @ ORG_8f6fe0d8 Devices
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:53:01.231Z] [BOT] ✅ Posted message: Product Applications Engineer @ ORG_8f6fe0d8 Devices in #💻・tech-jobs
  ✅ Industry: Product Applications Engineer @ ORG_8f6fe0d8 Devices
[2026-02-01T10:53:01.232Z] [BOT] 💾 Added channel posting: Product Applications Engineer @ ORG_8f6fe0d8 Devices → category channel (1 total channels)
[2026-02-01T10:53:01.232Z] [BOT] 💾 BEFORE MERGE: 1782 jobs in memory (cached)
[2026-02-01T10:53:01.263Z] [BOT] ✅ Loaded V2 database: 1781 jobs
💾 DISK STATE: 1781 jobs on disk
[2026-02-01T10:53:01.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1782
[2026-02-01T10:53:01.266Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1782 jobs (merged disk + memory)
[2026-02-01T10:53:01.267Z] [BOT] ✅ No jobs to archive (all 1782 jobs within 7-day window)
[2026-02-01T10:53:01.355Z] [BOT] 💾 Saved posted_jobs.json: 1782 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:03.105Z] [BOT] ✅ Posted message: Product Applications Engineer @ ORG_8f6fe0d8 Devices in #🌉・JID_739bbc0b
[2026-02-01T10:53:03.105Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:53:03.105Z] [BOT] 💾 Added channel posting: Product Applications Engineer @ ORG_8f6fe0d8 Devices → location channel (2 total channels)
[2026-02-01T10:53:03.105Z] [BOT] 💾 BEFORE MERGE: 1782 jobs in memory (cached)
[2026-02-01T10:53:03.138Z] [BOT] ✅ Loaded V2 database: 1782 jobs
💾 DISK STATE: 1782 jobs on disk
[2026-02-01T10:53:03.138Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1782
[2026-02-01T10:53:03.142Z] [BOT] 🔀 Deep merged: Product Applications Engineer @ ORG_8f6fe0d8 Devices (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:53:03.142Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1782 jobs (merged disk + memory)
[2026-02-01T10:53:03.143Z] [BOT] ✅ No jobs to archive (all 1782 jobs within 7-day window)
[2026-02-01T10:53:03.232Z] [BOT] 💾 Saved posted_jobs.json: 1782 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:04.735Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Applications" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:53:05.012Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Applications @ ORG_08c9a13c
[2026-02-01T10:53:05.013Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Applications @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1783 jobs in memory (cached)
[2026-02-01T10:53:05.047Z] [BOT] ✅ Loaded V2 database: 1782 jobs
💾 DISK STATE: 1782 jobs on disk
[2026-02-01T10:53:05.048Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1783
[2026-02-01T10:53:05.051Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:53:05.051Z] [BOT] 💾 AFTER MERGE: 1783 jobs (merged disk + memory)
[2026-02-01T10:53:05.052Z] [BOT] ✅ No jobs to archive (all 1783 jobs within 7-day window)
[2026-02-01T10:53:05.162Z] [BOT] 💾 Saved posted_jobs.json: 1783 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:07.000Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:53:07.001Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Applications @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T10:53:07.001Z] [BOT] 💾 BEFORE MERGE: 1783 jobs in memory (cached)
[2026-02-01T10:53:07.032Z] [BOT] ✅ Loaded V2 database: 1783 jobs
💾 DISK STATE: 1783 jobs on disk
[2026-02-01T10:53:07.032Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1783
[2026-02-01T10:53:07.036Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - AI Applications @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:53:07.036Z] [BOT] 💾 AFTER MERGE: 1783 jobs (merged disk + memory)
[2026-02-01T10:53:07.037Z] [BOT] ✅ No jobs to archive (all 1783 jobs within 7-day window)
[2026-02-01T10:53:07.122Z] [BOT] 💾 Saved posted_jobs.json: 1783 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:11.624Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T10:53:11.625Z] [BOT] 📍 [ROUTING] "GE Vernova Advanced Research 2026 Edison Rotational Program" @ ORG_e8760198 Vernova
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T10:53:11.921Z] [BOT] ✅ Posted message: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova in #🤖・ai-jobs
  ✅ Industry: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova
[2026-02-01T10:53:11.921Z] [BOT] 💾 Added channel posting: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova → category channel (1 total channels)
💾 BEFORE MERGE: 1784 jobs in memory (cached)
[2026-02-01T10:53:11.952Z] [BOT] ✅ Loaded V2 database: 1783 jobs
💾 DISK STATE: 1783 jobs on disk
[2026-02-01T10:53:11.952Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1784
[2026-02-01T10:53:11.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1784 jobs (merged disk + memory)
[2026-02-01T10:53:11.956Z] [BOT] ✅ No jobs to archive (all 1784 jobs within 7-day window)
[2026-02-01T10:53:12.053Z] [BOT] 💾 Saved posted_jobs.json: 1784 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:13.736Z] [BOT] ✅ Posted message: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova in #🗽・JID_98d4f0de
[2026-02-01T10:53:13.736Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T10:53:13.737Z] [BOT] 💾 Added channel posting: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova → location channel (2 total channels)
[2026-02-01T10:53:13.737Z] [BOT] 💾 BEFORE MERGE: 1784 jobs in memory (cached)
[2026-02-01T10:53:13.769Z] [BOT] ✅ Loaded V2 database: 1784 jobs
💾 DISK STATE: 1784 jobs on disk
[2026-02-01T10:53:13.770Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1784
[2026-02-01T10:53:13.773Z] [BOT] 🔀 Deep merged: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:53:13.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1784 jobs (merged disk + memory)
[2026-02-01T10:53:13.774Z] [BOT] ✅ No jobs to archive (all 1784 jobs within 7-day window)
[2026-02-01T10:53:13.872Z] [BOT] 💾 Saved posted_jobs.json: 1784 active jobs
[2026-02-01T10:53:13.873Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:15.374Z] [BOT] 📍 [ROUTING] "Computer Vision & Machine Learning, Junior" @ ORG_1670f014 Control Systems
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T10:53:15.374Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:53:15.574Z] [BOT] ✅ Posted message: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems in #🤖・ai-jobs
  ✅ Industry: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems
[2026-02-01T10:53:15.575Z] [BOT] 💾 Added channel posting: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems → category channel (1 total channels)
💾 BEFORE MERGE: 1785 jobs in memory (cached)
[2026-02-01T10:53:15.604Z] [BOT] ✅ Loaded V2 database: 1784 jobs
💾 DISK STATE: 1784 jobs on disk
[2026-02-01T10:53:15.605Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1785
[2026-02-01T10:53:15.608Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:53:15.608Z] [BOT] 💾 AFTER MERGE: 1785 jobs (merged disk + memory)
[2026-02-01T10:53:15.609Z] [BOT] ✅ No jobs to archive (all 1785 jobs within 7-day window)
[2026-02-01T10:53:15.703Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:17.626Z] [BOT] ✅ Posted message: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T10:53:17.626Z] [BOT] 💾 Added channel posting: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems → location channel (2 total channels)
[2026-02-01T10:53:17.626Z] [BOT] 💾 BEFORE MERGE: 1785 jobs in memory (cached)
[2026-02-01T10:53:17.657Z] [BOT] ✅ Loaded V2 database: 1785 jobs
💾 DISK STATE: 1785 jobs on disk
[2026-02-01T10:53:17.657Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1785
[2026-02-01T10:53:17.660Z] [BOT] 🔀 Deep merged: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:53:17.661Z] [BOT] 💾 AFTER MERGE: 1785 jobs (merged disk + memory)
[2026-02-01T10:53:17.662Z] [BOT] ✅ No jobs to archive (all 1785 jobs within 7-day window)
[2026-02-01T10:53:17.753Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:19.256Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
[2026-02-01T10:53:19.256Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:53:19.691Z] [BOT] ✅ Posted message: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2026-02-01T10:53:19.692Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T10:53:19.692Z] [BOT] 💾 BEFORE MERGE: 1786 jobs in memory (cached)
[2026-02-01T10:53:19.725Z] [BOT] ✅ Loaded V2 database: 1785 jobs
💾 DISK STATE: 1785 jobs on disk
[2026-02-01T10:53:19.725Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1786
[2026-02-01T10:53:19.728Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:53:19.729Z] [BOT] 💾 AFTER MERGE: 1786 jobs (merged disk + memory)
[2026-02-01T10:53:19.730Z] [BOT] ✅ No jobs to archive (all 1786 jobs within 7-day window)
[2026-02-01T10:53:19.826Z] [BOT] 💾 Saved posted_jobs.json: 1786 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:21.517Z] [BOT] ✅ Posted message: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:53:21.517Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c → location channel (2 total channels)
💾 BEFORE MERGE: 1786 jobs in memory (cached)
[2026-02-01T10:53:21.550Z] [BOT] ✅ Loaded V2 database: 1786 jobs
💾 DISK STATE: 1786 jobs on disk
[2026-02-01T10:53:21.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1786
[2026-02-01T10:53:21.553Z] [BOT] 🔀 Deep merged: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:53:21.553Z] [BOT] 💾 AFTER MERGE: 1786 jobs (merged disk + memory)
[2026-02-01T10:53:21.554Z] [BOT] ✅ No jobs to archive (all 1786 jobs within 7-day window)
[2026-02-01T10:53:21.660Z] [BOT] 💾 Saved posted_jobs.json: 1786 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:23.160Z] [BOT] 📍 [ROUTING] "Support Engineer" @ ORG_c67ce9a6
[2026-02-01T10:53:23.160Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:53:23.536Z] [BOT] ✅ Posted message: Support Engineer @ ORG_c67ce9a6 in #🤖・ai-jobs
[2026-02-01T10:53:23.536Z] [BOT] ✅ Industry: Support Engineer @ ORG_c67ce9a6
[2026-02-01T10:53:23.537Z] [BOT] 💾 Added channel posting: Support Engineer @ ORG_c67ce9a6 → category channel (1 total channels)
[2026-02-01T10:53:23.537Z] [BOT] 💾 BEFORE MERGE: 1787 jobs in memory (cached)
[2026-02-01T10:53:23.569Z] [BOT] ✅ Loaded V2 database: 1786 jobs
💾 DISK STATE: 1786 jobs on disk
[2026-02-01T10:53:23.569Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1787
[2026-02-01T10:53:23.572Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:53:23.573Z] [BOT] 💾 AFTER MERGE: 1787 jobs (merged disk + memory)
[2026-02-01T10:53:23.574Z] [BOT] ✅ No jobs to archive (all 1787 jobs within 7-day window)
[2026-02-01T10:53:23.657Z] [BOT] 💾 Saved posted_jobs.json: 1787 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:25.463Z] [BOT] ✅ Posted message: Support Engineer @ ORG_c67ce9a6 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:53:25.463Z] [BOT] 💾 Added channel posting: Support Engineer @ ORG_c67ce9a6 → location channel (2 total channels)
[2026-02-01T10:53:25.463Z] [BOT] 💾 BEFORE MERGE: 1787 jobs in memory (cached)
[2026-02-01T10:53:25.494Z] [BOT] ✅ Loaded V2 database: 1787 jobs
💾 DISK STATE: 1787 jobs on disk
[2026-02-01T10:53:25.495Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1787
[2026-02-01T10:53:25.498Z] [BOT] 🔀 Deep merged: Support Engineer @ ORG_c67ce9a6 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:53:25.498Z] [BOT] 💾 AFTER MERGE: 1787 jobs (merged disk + memory)
[2026-02-01T10:53:25.499Z] [BOT] ✅ No jobs to archive (all 1787 jobs within 7-day window)
[2026-02-01T10:53:25.589Z] [BOT] 💾 Saved posted_jobs.json: 1787 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:30.091Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T10:53:30.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "13b0b84d496aead4"
[2026-02-01T10:53:30.093Z] [BOT] ⏭️  Skipping duplicate: JID_0a112c67-2025_jr2002870 (posted within 7 days)
[2026-02-01T10:53:30.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_457168e7-only_con..." not found, but found as SHA256 "4b8d0aa6575ecd55"
⏭️  Skipping duplicate: JID_457168e7-only_confidential_executive_recruiting-JID_b73e99e1-program_r5015939-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2e60bc4c..." not found, but found as SHA256 "f0ba6ddf4e6a1a09"
⏭️  Skipping duplicate: JID_2e60bc4c (posted within 7 days)
[2026-02-01T10:53:30.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7077a2be-..." not found, but found as SHA256 "378dcafbdb8bebbe"
[2026-02-01T10:53:30.094Z] [BOT] ⏭️  Skipping duplicate: JID_c8d334f4 (posted within 7 days)
[2026-02-01T10:53:30.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0603f43..." not found, but found as SHA256 "360ae57f32da3016"
⏭️  Skipping duplicate: JID_6e8eff51-engineer_2116586-1 (posted within 7 days)
[2026-02-01T10:53:30.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a2cdccb1..." not found, but found as SHA256 "ed3719199c7bf014"
[2026-02-01T10:53:30.094Z] [BOT] ⏭️  Skipping duplicate: JID_dfc492b4 (posted within 7 days)
[2026-02-01T10:53:30.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9545935e..." not found, but found as SHA256 "dff7acbb7b510ab7"
[2026-02-01T10:53:30.095Z] [BOT] ⏭️  Skipping duplicate: JID_784cf8b0-engineering_r255206-1 (posted within 7 days)
[2026-02-01T10:53:30.095Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_14fa4f2b..." not found, but found as SHA256 "6e6b07c6fa4adb80"
[2026-02-01T10:53:30.095Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_bf0b16a2-detail (posted within 7 days)
[2026-02-01T10:53:30.095Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c196b58a..." not found, but found as SHA256 "34ca572016c010c0"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_2e04d983-detail (posted within 7 days)
[2026-02-01T10:53:30.095Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8ee12738..." not found, but found as SHA256 "691bfacd56afbecd"
[2026-02-01T10:53:30.095Z] [BOT] ⏭️  Skipping duplicate: JID_c9a15e92 (posted within 7 days)
[2026-02-01T10:53:30.201Z] [BOT] ✅ Loaded pending queue: 2947 total (1132 pending, 48 enriched, 1767 posted)
[2026-02-01T10:53:30.394Z] [BOT] ✅ Saved pending queue: 2947 total (1132 pending, 38 enriched, 1777 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T10:53:30.395Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T10:53:30.484Z] [BOT] 📂 Loaded 11858 existing routing entries
[2026-02-01T10:53:30.611Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T10:53:30.611Z] [BOT] Total entries: 11868
   Timestamp: 2026-02-01T10:53:30.563Z
[2026-02-01T10:53:30.611Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T10:53:30.611Z] [BOT] Total attempts: 30
   Successful: 20
   Failed: 0
   Skipped: 10
[2026-02-01T10:53:30.612Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T10:53:30.612Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #🌉・JID_739bbc0b: 7 posts
     2. #💻・tech-jobs: 6 posts
[2026-02-01T10:53:30.612Z] [BOT] 3. #🤖・ai-jobs: 4 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T10:53:30.612Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1787 jobs in memory (cached)
[2026-02-01T10:53:30.665Z] [BOT] ✅ Loaded V2 database: 1787 jobs
💾 DISK STATE: 1787 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1787
[2026-02-01T10:53:30.669Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:53:30.669Z] [BOT] 💾 AFTER MERGE: 1787 jobs (merged disk + memory)
[2026-02-01T10:53:30.670Z] [BOT] ✅ No jobs to archive (all 1787 jobs within 7-day window)
[2026-02-01T10:53:30.758Z] [BOT] 💾 Saved posted_jobs.json: 1787 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:53:30.758Z] [BOT] ✅ Database saved successfully
[2026-02-01T10:53:32.794Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4111) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*