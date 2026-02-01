# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T11:04:23.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:03:30.090Z] ========================================
[2026-02-01T11:03:30.092Z] Discord Bot Execution Log
[2026-02-01T11:03:30.092Z] Environment: GitHub Actions
[2026-02-01T11:03:30.092Z] Node Version: v20.20.0
[2026-02-01T11:03:30.092Z] ========================================
[2026-02-01T11:03:30.092Z] Environment Variables Check:
[2026-02-01T11:03:30.092Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:03:30.092Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:03:30.092Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:03:30.093Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:03:30.093Z] 
Multi-Channel Configuration:
[2026-02-01T11:03:30.093Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:03:30.093Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:03:30.093Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:03:30.093Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:03:30.094Z] 
Data Files Check:
[2026-02-01T11:03:30.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70301 bytes)
[2026-02-01T11:03:30.145Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9521455 bytes)
[2026-02-01T11:03:30.145Z] 
========================================
[2026-02-01T11:03:30.145Z] Starting Enhanced Discord Bot...
[2026-02-01T11:03:30.145Z] ========================================
[2026-02-01T11:03:30.750Z] [BOT] ✅ Loaded V2 database: 1787 jobs
[2026-02-01T11:03:31.255Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T11:03:31.256Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:03:31.256Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:03:31.368Z] [BOT] ✅ Loaded pending queue: 2949 total (1122 pending, 50 enriched, 1777 posted)
[2026-02-01T11:03:31.368Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T11:03:31.369Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:03:31.370Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:03:31.370Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T11:03:31.370Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:03:31.370Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:03:31.371Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:03:31.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T11:03:31.371Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T11:03:31.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:03:31.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T11:03:31.372Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:03:31.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T11:03:31.372Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:03:31.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:03:31.373Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:03:31.387Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:03:31.387Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T11:03:31.388Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T11:03:31.388Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T11:03:31.389Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T11:03:31.389Z] [BOT] - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
   - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:03:31.391Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T11:03:31.392Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
[2026-02-01T11:03:31.392Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:31.409Z] [BOT ERROR] (node:2758) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:03:31.610Z] [BOT] ✅ Posted message: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #💻・tech-jobs
[2026-02-01T11:03:31.610Z] [BOT] ✅ Industry: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank
[2026-02-01T11:03:31.611Z] [BOT] 💾 Added channel posting: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank → category channel (1 total channels)
[2026-02-01T11:03:31.611Z] [BOT] 💾 BEFORE MERGE: 1788 jobs in memory (cached)
[2026-02-01T11:03:31.647Z] [BOT] ✅ Loaded V2 database: 1787 jobs
💾 DISK STATE: 1787 jobs on disk
[2026-02-01T11:03:31.647Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1788
[2026-02-01T11:03:31.652Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:31.652Z] [BOT] 💾 AFTER MERGE: 1788 jobs (merged disk + memory)
[2026-02-01T11:03:31.653Z] [BOT] ✅ No jobs to archive (all 1788 jobs within 7-day window)
[2026-02-01T11:03:31.768Z] [BOT] 💾 Saved posted_jobs.json: 1788 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:33.463Z] [BOT] ✅ Posted message: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T11:03:33.463Z] [BOT] 💾 Added channel posting: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank → location channel (2 total channels)
[2026-02-01T11:03:33.463Z] [BOT] 💾 BEFORE MERGE: 1788 jobs in memory (cached)
[2026-02-01T11:03:33.501Z] [BOT] ✅ Loaded V2 database: 1788 jobs
[2026-02-01T11:03:33.501Z] [BOT] 💾 DISK STATE: 1788 jobs on disk
[2026-02-01T11:03:33.502Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1788
[2026-02-01T11:03:33.505Z] [BOT] 🔀 Deep merged: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:03:33.505Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1788 jobs (merged disk + memory)
[2026-02-01T11:03:33.507Z] [BOT] ✅ No jobs to archive (all 1788 jobs within 7-day window)
[2026-02-01T11:03:33.602Z] [BOT] 💾 Saved posted_jobs.json: 1788 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:35.103Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (Industrial Engineering & AI Applications)" @ ORG_5c4c8ca4
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:36.611Z] [BOT] ✅ Posted message: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 in #💻・tech-jobs
  ✅ Industry: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4
[2026-02-01T11:03:36.612Z] [BOT] 💾 Added channel posting: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 → category channel (1 total channels)
[2026-02-01T11:03:36.612Z] [BOT] 💾 BEFORE MERGE: 1789 jobs in memory (cached)
[2026-02-01T11:03:36.645Z] [BOT] ✅ Loaded V2 database: 1788 jobs
💾 DISK STATE: 1788 jobs on disk
[2026-02-01T11:03:36.646Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1789
[2026-02-01T11:03:36.649Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:36.649Z] [BOT] 💾 AFTER MERGE: 1789 jobs (merged disk + memory)
[2026-02-01T11:03:36.651Z] [BOT] ✅ No jobs to archive (all 1789 jobs within 7-day window)
[2026-02-01T11:03:36.751Z] [BOT] 💾 Saved posted_jobs.json: 1789 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:38.440Z] [BOT] ✅ Posted message: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T11:03:38.440Z] [BOT] 💾 Added channel posting: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 → location channel (2 total channels)
💾 BEFORE MERGE: 1789 jobs in memory (cached)
[2026-02-01T11:03:38.474Z] [BOT] ✅ Loaded V2 database: 1789 jobs
💾 DISK STATE: 1789 jobs on disk
[2026-02-01T11:03:38.474Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1789
[2026-02-01T11:03:38.478Z] [BOT] 🔀 Deep merged: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:03:38.478Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1789 jobs (merged disk + memory)
[2026-02-01T11:03:38.479Z] [BOT] ✅ No jobs to archive (all 1789 jobs within 7-day window)
[2026-02-01T11:03:38.584Z] [BOT] 💾 Saved posted_jobs.json: 1789 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:40.086Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI for Supply Chain)" @ ORG_5c4c8ca4
[2026-02-01T11:03:40.087Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:40.466Z] [BOT] ✅ Posted message: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 in #💻・tech-jobs
  ✅ Industry: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4
[2026-02-01T11:03:40.467Z] [BOT] 💾 Added channel posting: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 → category channel (1 total channels)
[2026-02-01T11:03:40.467Z] [BOT] 💾 BEFORE MERGE: 1790 jobs in memory (cached)
[2026-02-01T11:03:40.502Z] [BOT] ✅ Loaded V2 database: 1789 jobs
💾 DISK STATE: 1789 jobs on disk
[2026-02-01T11:03:40.502Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1790
[2026-02-01T11:03:40.506Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:40.506Z] [BOT] 💾 AFTER MERGE: 1790 jobs (merged disk + memory)
[2026-02-01T11:03:40.507Z] [BOT] ✅ No jobs to archive (all 1790 jobs within 7-day window)
[2026-02-01T11:03:40.602Z] [BOT] 💾 Saved posted_jobs.json: 1790 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:42.249Z] [BOT] ✅ Posted message: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 in #🗽・JID_98d4f0de
[2026-02-01T11:03:42.249Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T11:03:42.250Z] [BOT] 💾 Added channel posting: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 → location channel (2 total channels)
[2026-02-01T11:03:42.250Z] [BOT] 💾 BEFORE MERGE: 1790 jobs in memory (cached)
[2026-02-01T11:03:42.284Z] [BOT] ✅ Loaded V2 database: 1790 jobs
💾 DISK STATE: 1790 jobs on disk
[2026-02-01T11:03:42.284Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1790
[2026-02-01T11:03:42.287Z] [BOT] 🔀 Deep merged: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:03:42.287Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1790 jobs (merged disk + memory)
[2026-02-01T11:03:42.288Z] [BOT] ✅ No jobs to archive (all 1790 jobs within 7-day window)
[2026-02-01T11:03:42.394Z] [BOT] 💾 Saved posted_jobs.json: 1790 active jobs
[2026-02-01T11:03:42.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:43.897Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer" @ ORG_b1e645a8
[2026-02-01T11:03:43.897Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:44.238Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #💻・tech-jobs
[2026-02-01T11:03:44.238Z] [BOT] ✅ Industry: Associate, Software Engineer @ ORG_b1e645a8
[2026-02-01T11:03:44.239Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → category channel (1 total channels)
[2026-02-01T11:03:44.239Z] [BOT] 💾 BEFORE MERGE: 1791 jobs in memory (cached)
[2026-02-01T11:03:44.272Z] [BOT] ✅ Loaded V2 database: 1790 jobs
💾 DISK STATE: 1790 jobs on disk
[2026-02-01T11:03:44.272Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1791
[2026-02-01T11:03:44.276Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:44.276Z] [BOT] 💾 AFTER MERGE: 1791 jobs (merged disk + memory)
[2026-02-01T11:03:44.277Z] [BOT] ✅ No jobs to archive (all 1791 jobs within 7-day window)
[2026-02-01T11:03:44.370Z] [BOT] 💾 Saved posted_jobs.json: 1791 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:46.054Z] [BOT] ✅ Posted message: Associate, Software Engineer @ ORG_b1e645a8 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T11:03:46.054Z] [BOT] 💾 Added channel posting: Associate, Software Engineer @ ORG_b1e645a8 → location channel (2 total channels)
[2026-02-01T11:03:46.054Z] [BOT] 💾 BEFORE MERGE: 1791 jobs in memory (cached)
[2026-02-01T11:03:46.088Z] [BOT] ✅ Loaded V2 database: 1791 jobs
💾 DISK STATE: 1791 jobs on disk
[2026-02-01T11:03:46.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1791
[2026-02-01T11:03:46.092Z] [BOT] 🔀 Deep merged: Associate, Software Engineer @ ORG_b1e645a8 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:03:46.092Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1791 jobs (merged disk + memory)
[2026-02-01T11:03:46.093Z] [BOT] ✅ No jobs to archive (all 1791 jobs within 7-day window)
[2026-02-01T11:03:46.193Z] [BOT] 💾 Saved posted_jobs.json: 1791 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:47.694Z] [BOT] 📍 [ROUTING] "Software Engineer - Identity" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
[2026-02-01T11:03:47.694Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:48.084Z] [BOT] ✅ Posted message: Software Engineer - Identity @ ORG_7bc88ebb in #💻・tech-jobs
[2026-02-01T11:03:48.084Z] [BOT] ✅ Industry: Software Engineer - Identity @ ORG_7bc88ebb
[2026-02-01T11:03:48.084Z] [BOT] 💾 Added channel posting: Software Engineer - Identity @ ORG_7bc88ebb → category channel (1 total channels)
[2026-02-01T11:03:48.085Z] [BOT] 💾 BEFORE MERGE: 1792 jobs in memory (cached)
[2026-02-01T11:03:48.119Z] [BOT] ✅ Loaded V2 database: 1791 jobs
💾 DISK STATE: 1791 jobs on disk
[2026-02-01T11:03:48.119Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1792
[2026-02-01T11:03:48.123Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:48.123Z] [BOT] 💾 AFTER MERGE: 1792 jobs (merged disk + memory)
[2026-02-01T11:03:48.124Z] [BOT] ✅ No jobs to archive (all 1792 jobs within 7-day window)
[2026-02-01T11:03:48.218Z] [BOT] 💾 Saved posted_jobs.json: 1792 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:49.903Z] [BOT] ✅ Posted message: Software Engineer - Identity @ ORG_7bc88ebb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:03:49.904Z] [BOT] 💾 Added channel posting: Software Engineer - Identity @ ORG_7bc88ebb → location channel (2 total channels)
[2026-02-01T11:03:49.904Z] [BOT] 💾 BEFORE MERGE: 1792 jobs in memory (cached)
[2026-02-01T11:03:49.940Z] [BOT] ✅ Loaded V2 database: 1792 jobs
[2026-02-01T11:03:49.940Z] [BOT] 💾 DISK STATE: 1792 jobs on disk
[2026-02-01T11:03:49.941Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1792
[2026-02-01T11:03:49.944Z] [BOT] 🔀 Deep merged: Software Engineer - Identity @ ORG_7bc88ebb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:03:49.945Z] [BOT] 💾 AFTER MERGE: 1792 jobs (merged disk + memory)
[2026-02-01T11:03:49.946Z] [BOT] ✅ No jobs to archive (all 1792 jobs within 7-day window)
[2026-02-01T11:03:50.049Z] [BOT] 💾 Saved posted_jobs.json: 1792 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:51.552Z] [BOT] 📍 [ROUTING] "AI System Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:03:51.705Z] [BOT] ✅ Posted message: AI System Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI System Engineer @ ORG_0890f456
[2026-02-01T11:03:51.706Z] [BOT] 💾 Added channel posting: AI System Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1793 jobs in memory (cached)
[2026-02-01T11:03:51.739Z] [BOT] ✅ Loaded V2 database: 1792 jobs
💾 DISK STATE: 1792 jobs on disk
[2026-02-01T11:03:51.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1793
[2026-02-01T11:03:51.742Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1793 jobs (merged disk + memory)
[2026-02-01T11:03:51.744Z] [BOT] ✅ No jobs to archive (all 1793 jobs within 7-day window)
[2026-02-01T11:03:51.834Z] [BOT] 💾 Saved posted_jobs.json: 1793 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:53.646Z] [BOT] ✅ Posted message: AI System Engineer @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T11:03:53.646Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:03:53.647Z] [BOT] 💾 Added channel posting: AI System Engineer @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T11:03:53.647Z] [BOT] 💾 BEFORE MERGE: 1793 jobs in memory (cached)
[2026-02-01T11:03:53.681Z] [BOT] ✅ Loaded V2 database: 1793 jobs
💾 DISK STATE: 1793 jobs on disk
[2026-02-01T11:03:53.681Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1793
[2026-02-01T11:03:53.685Z] [BOT] 🔀 Deep merged: AI System Engineer @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:03:53.685Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1793 jobs (merged disk + memory)
[2026-02-01T11:03:53.686Z] [BOT] ✅ No jobs to archive (all 1793 jobs within 7-day window)
[2026-02-01T11:03:53.785Z] [BOT] 💾 Saved posted_jobs.json: 1793 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:03:58.286Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T11:03:58.288Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career - PhD - Infrastructure" @ ORG_ce770667
   Category: AI (matched: "machine learning")
[2026-02-01T11:03:58.288Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:03:58.607Z] [BOT] ✅ Posted message: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🤖・ai-jobs
[2026-02-01T11:03:58.607Z] [BOT] ✅ Industry: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667
[2026-02-01T11:03:58.608Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 → category channel (1 total channels)
[2026-02-01T11:03:58.608Z] [BOT] 💾 BEFORE MERGE: 1794 jobs in memory (cached)
[2026-02-01T11:03:58.642Z] [BOT] ✅ Loaded V2 database: 1793 jobs
💾 DISK STATE: 1793 jobs on disk
[2026-02-01T11:03:58.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1794
[2026-02-01T11:03:58.647Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:03:58.647Z] [BOT] 💾 AFTER MERGE: 1794 jobs (merged disk + memory)
[2026-02-01T11:03:58.648Z] [BOT] ✅ No jobs to archive (all 1794 jobs within 7-day window)
[2026-02-01T11:03:58.744Z] [BOT] 💾 Saved posted_jobs.json: 1794 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:00.711Z] [BOT] ✅ Posted message: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:04:00.712Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 → location channel (2 total channels)
[2026-02-01T11:04:00.712Z] [BOT] 💾 BEFORE MERGE: 1794 jobs in memory (cached)
[2026-02-01T11:04:00.748Z] [BOT] ✅ Loaded V2 database: 1794 jobs
💾 DISK STATE: 1794 jobs on disk
[2026-02-01T11:04:00.749Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1794
[2026-02-01T11:04:00.752Z] [BOT] 🔀 Deep merged: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:04:00.753Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1794 jobs (merged disk + memory)
[2026-02-01T11:04:00.754Z] [BOT] ✅ No jobs to archive (all 1794 jobs within 7-day window)
[2026-02-01T11:04:00.856Z] [BOT] 💾 Saved posted_jobs.json: 1794 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:02.359Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:04:02.359Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:04:02.580Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T11:04:02.581Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:04:02.581Z] [BOT] 💾 BEFORE MERGE: 1795 jobs in memory (cached)
[2026-02-01T11:04:02.613Z] [BOT] ✅ Loaded V2 database: 1794 jobs
💾 DISK STATE: 1794 jobs on disk
[2026-02-01T11:04:02.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1795
[2026-02-01T11:04:02.616Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1795 jobs (merged disk + memory)
[2026-02-01T11:04:02.618Z] [BOT] ✅ No jobs to archive (all 1795 jobs within 7-day window)
[2026-02-01T11:04:02.708Z] [BOT] 💾 Saved posted_jobs.json: 1795 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:04.478Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T11:04:04.478Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:04:04.478Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:04:04.478Z] [BOT] 💾 BEFORE MERGE: 1795 jobs in memory (cached)
[2026-02-01T11:04:04.512Z] [BOT] ✅ Loaded V2 database: 1795 jobs
[2026-02-01T11:04:04.512Z] [BOT] 💾 DISK STATE: 1795 jobs on disk
[2026-02-01T11:04:04.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1795
[2026-02-01T11:04:04.515Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:04:04.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1795 jobs (merged disk + memory)
[2026-02-01T11:04:04.516Z] [BOT] ✅ No jobs to archive (all 1795 jobs within 7-day window)
[2026-02-01T11:04:04.615Z] [BOT] 💾 Saved posted_jobs.json: 1795 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:06.117Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:04:06.118Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:04:06.265Z] [BOT] ✅ Posted message: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-02-01T11:04:06.266Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-02-01T11:04:06.266Z] [BOT] 💾 BEFORE MERGE: 1796 jobs in memory (cached)
[2026-02-01T11:04:06.300Z] [BOT] ✅ Loaded V2 database: 1795 jobs
💾 DISK STATE: 1795 jobs on disk
[2026-02-01T11:04:06.301Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1796
[2026-02-01T11:04:06.304Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:04:06.304Z] [BOT] 💾 AFTER MERGE: 1796 jobs (merged disk + memory)
[2026-02-01T11:04:06.305Z] [BOT] ✅ No jobs to archive (all 1796 jobs within 7-day window)
[2026-02-01T11:04:06.416Z] [BOT] 💾 Saved posted_jobs.json: 1796 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:08.102Z] [BOT] ✅ Posted message: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:04:08.102Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → location channel (2 total channels)
[2026-02-01T11:04:08.102Z] [BOT] 💾 BEFORE MERGE: 1796 jobs in memory (cached)
[2026-02-01T11:04:08.135Z] [BOT] ✅ Loaded V2 database: 1796 jobs
💾 DISK STATE: 1796 jobs on disk
[2026-02-01T11:04:08.135Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1796
[2026-02-01T11:04:08.138Z] [BOT] 🔀 Deep merged: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:04:08.139Z] [BOT] 💾 AFTER MERGE: 1796 jobs (merged disk + memory)
[2026-02-01T11:04:08.140Z] [BOT] ✅ No jobs to archive (all 1796 jobs within 7-day window)
[2026-02-01T11:04:08.230Z] [BOT] 💾 Saved posted_jobs.json: 1796 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:12.732Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T11:04:12.733Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered)" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T11:04:12.733Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T11:04:13.069Z] [BOT] ✅ Posted message: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb
[2026-02-01T11:04:13.070Z] [BOT] 💾 Added channel posting: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:04:13.070Z] [BOT] 💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-01T11:04:13.104Z] [BOT] ✅ Loaded V2 database: 1796 jobs
💾 DISK STATE: 1796 jobs on disk
[2026-02-01T11:04:13.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-01T11:04:13.107Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:04:13.107Z] [BOT] 💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-01T11:04:13.108Z] [BOT] ✅ No jobs to archive (all 1797 jobs within 7-day window)
[2026-02-01T11:04:13.227Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:14.895Z] [BOT] ✅ Posted message: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T11:04:14.896Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:04:14.896Z] [BOT] 💾 Added channel posting: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:04:14.896Z] [BOT] 💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-01T11:04:14.929Z] [BOT] ✅ Loaded V2 database: 1797 jobs
💾 DISK STATE: 1797 jobs on disk
[2026-02-01T11:04:14.929Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-01T11:04:14.932Z] [BOT] 🔀 Deep merged: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:04:14.932Z] [BOT] 💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-01T11:04:14.933Z] [BOT] ✅ No jobs to archive (all 1797 jobs within 7-day window)
[2026-02-01T11:04:15.025Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:19.525Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T11:04:19.526Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a01b0e03..." not found, but found as SHA256 "653a1bc572ad38d1"
[2026-02-01T11:04:19.526Z] [BOT] ⏭️  Skipping duplicate: JID_1fc27256 (posted within 7 days)
[2026-02-01T11:04:19.527Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1fb909..." not found, but found as SHA256 "0f4d159c8a6a5cca"
⏭️  Skipping duplicate: JID_ff4b39dc (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8941d0b5..." not found, but found as SHA256 "2723acdcbbad6e36"
[2026-02-01T11:04:19.527Z] [BOT] ⏭️  Skipping duplicate: JID_14691329 (posted within 7 days)
[2026-02-01T11:04:19.528Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8941d0b5..." not found, but found as SHA256 "39381e1163556946"
[2026-02-01T11:04:19.528Z] [BOT] ⏭️  Skipping duplicate: JID_52ecca7b (posted within 7 days)
[2026-02-01T11:04:19.528Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9af22df3..." not found, but found as SHA256 "115b9eab48e2ce6c"
[2026-02-01T11:04:19.528Z] [BOT] ⏭️  Skipping duplicate: JID_9af22df3 (posted within 7 days)
[2026-02-01T11:04:19.528Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cec58b9f..." not found, but found as SHA256 "c083a0d54b6a3f43"
[2026-02-01T11:04:19.528Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0946fb2d (posted within 7 days)
[2026-02-01T11:04:19.528Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_30d54f4d..." not found, but found as SHA256 "62b9b23b5bfa74ed"
[2026-02-01T11:04:19.529Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_991f3f20 (posted within 7 days)
[2026-02-01T11:04:19.529Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "4a5cd0282882dfd8"
[2026-02-01T11:04:19.529Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r158682 (posted within 7 days)
[2026-02-01T11:04:19.529Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fc61ef75-..." not found, but found as SHA256 "ae73e5a12a3d4396"
[2026-02-01T11:04:19.529Z] [BOT] ⏭️  Skipping duplicate: JID_45123982 (posted within 7 days)
[2026-02-01T11:04:19.530Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "a4c9c51a1d52c3ea"
[2026-02-01T11:04:19.530Z] [BOT] ⏭️  Skipping duplicate: JID_ec909e8f-2025_jr2001318 (posted within 7 days)
[2026-02-01T11:04:19.635Z] [BOT] ✅ Loaded pending queue: 2949 total (1122 pending, 50 enriched, 1777 posted)
[2026-02-01T11:04:19.841Z] [BOT] ✅ Saved pending queue: 2949 total (1122 pending, 40 enriched, 1787 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T11:04:19.935Z] [BOT] 📂 Loaded 11868 existing routing entries
[2026-02-01T11:04:20.065Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11878
   Timestamp: 2026-02-01T11:04:20.016Z
[2026-02-01T11:04:20.066Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
[2026-02-01T11:04:20.066Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T11:04:20.066Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-02-01T11:04:20.066Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・JID_739bbc0b: 5 posts
[2026-02-01T11:04:20.066Z] [BOT] 3. #🗽・JID_98d4f0de: 3 posts
     4. #🤖・ai-jobs: 3 posts
     5. #📍・JID_6daed763: 1 posts
[2026-02-01T11:04:20.067Z] [BOT] [STATS] Channel stats saved
[2026-02-01T11:04:20.067Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-01T11:04:20.106Z] [BOT] ✅ Loaded V2 database: 1797 jobs
💾 DISK STATE: 1797 jobs on disk
[2026-02-01T11:04:20.106Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-01T11:04:20.110Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:04:20.110Z] [BOT] 💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-01T11:04:20.111Z] [BOT] ✅ No jobs to archive (all 1797 jobs within 7-day window)
[2026-02-01T11:04:20.210Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:04:20.210Z] [BOT] ✅ Database saved successfully
[2026-02-01T11:04:22.245Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2758) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*