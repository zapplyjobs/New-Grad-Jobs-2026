# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T11:34:34.787Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:33:43.919Z] ========================================
[2026-02-01T11:33:43.920Z] Discord Bot Execution Log
[2026-02-01T11:33:43.920Z] Environment: GitHub Actions
[2026-02-01T11:33:43.920Z] Node Version: v20.20.0
[2026-02-01T11:33:43.920Z] ========================================
[2026-02-01T11:33:43.921Z] Environment Variables Check:
[2026-02-01T11:33:43.921Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:33:43.921Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:33:43.921Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:33:43.921Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:33:43.921Z] 
Multi-Channel Configuration:
[2026-02-01T11:33:43.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:33:43.921Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.921Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.921Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:33:43.921Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.921Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.921Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.921Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.922Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:33:43.922Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:33:43.922Z] 
Data Files Check:
[2026-02-01T11:33:43.922Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61865 bytes)
[2026-02-01T11:33:43.984Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9620579 bytes)
[2026-02-01T11:33:43.984Z] 
========================================
[2026-02-01T11:33:43.984Z] Starting Enhanced Discord Bot...
[2026-02-01T11:33:43.984Z] ========================================
[2026-02-01T11:33:44.510Z] [BOT] ✅ Loaded V2 database: 1817 jobs
[2026-02-01T11:33:45.181Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T11:33:45.181Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:33:45.181Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:33:45.337Z] [BOT] ✅ Loaded pending queue: 2948 total (1091 pending, 50 enriched, 1807 posted)
[2026-02-01T11:33:45.338Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:33:45.339Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:33:45.339Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T11:33:45.339Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:33:45.340Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:33:45.340Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T11:33:45.340Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:33:45.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T11:33:45.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T11:33:45.341Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:33:45.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T11:33:45.341Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:33:45.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T11:33:45.342Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:33:45.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T11:33:45.342Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:33:45.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T11:33:45.342Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:33:45.353Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:33:45.353Z] [BOT] 🚫 Skipping blacklisted job: Computer Science Postdoctoral Fellow at American University
[2026-02-01T11:33:45.517Z] [BOT] ✅ Loaded pending queue: 2948 total (1091 pending, 50 enriched, 1807 posted)
[2026-02-01T11:33:45.725Z] [BOT] ✅ Saved pending queue: 2947 total (1091 pending, 49 enriched, 1807 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-02-01T11:33:45.725Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T11:33:45.726Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-01T11:33:45.726Z] [BOT] (4 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
[2026-02-01T11:33:45.726Z] [BOT] - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
   - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:33:45.731Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T11:33:45.732Z] [BOT] 📍 [ROUTING] "Software Engineer, Notifications Platform" @ ORG_871f17ec
[2026-02-01T11:33:45.732Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:33:45.749Z] [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:33:45.956Z] [BOT] ✅ Posted message: Software Engineer, Notifications Platform @ ORG_871f17ec in #💻・tech-jobs
[2026-02-01T11:33:45.956Z] [BOT] ✅ Industry: Software Engineer, Notifications Platform @ ORG_871f17ec
[2026-02-01T11:33:45.957Z] [BOT] 💾 Added channel posting: Software Engineer, Notifications Platform @ ORG_871f17ec → category channel (1 total channels)
[2026-02-01T11:33:45.958Z] [BOT] 💾 BEFORE MERGE: 1818 jobs in memory (cached)
[2026-02-01T11:33:46.008Z] [BOT] ✅ Loaded V2 database: 1817 jobs
💾 DISK STATE: 1817 jobs on disk
[2026-02-01T11:33:46.009Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1818
[2026-02-01T11:33:46.013Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:33:46.013Z] [BOT] 💾 AFTER MERGE: 1818 jobs (merged disk + memory)
[2026-02-01T11:33:46.014Z] [BOT] ✅ No jobs to archive (all 1818 jobs within 7-day window)
[2026-02-01T11:33:46.131Z] [BOT] 💾 Saved posted_jobs.json: 1818 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:47.797Z] [BOT] ✅ Posted message: Software Engineer, Notifications Platform @ ORG_871f17ec in #🌉・JID_739bbc0b
[2026-02-01T11:33:47.797Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:33:47.798Z] [BOT] 💾 Added channel posting: Software Engineer, Notifications Platform @ ORG_871f17ec → location channel (2 total channels)
[2026-02-01T11:33:47.798Z] [BOT] 💾 BEFORE MERGE: 1818 jobs in memory (cached)
[2026-02-01T11:33:47.846Z] [BOT] ✅ Loaded V2 database: 1818 jobs
💾 DISK STATE: 1818 jobs on disk
[2026-02-01T11:33:47.847Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1818
[2026-02-01T11:33:47.851Z] [BOT] 🔀 Deep merged: Software Engineer, Notifications Platform @ ORG_871f17ec (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:33:47.851Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1818 jobs (merged disk + memory)
[2026-02-01T11:33:47.852Z] [BOT] ✅ No jobs to archive (all 1818 jobs within 7-day window)
[2026-02-01T11:33:47.966Z] [BOT] 💾 Saved posted_jobs.json: 1818 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:49.468Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Video-on-Demand Algorithm)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:33:49.766Z] [BOT] ✅ Posted message: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb
[2026-02-01T11:33:49.767Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:33:49.767Z] [BOT] 💾 BEFORE MERGE: 1819 jobs in memory (cached)
[2026-02-01T11:33:49.816Z] [BOT] ✅ Loaded V2 database: 1818 jobs
💾 DISK STATE: 1818 jobs on disk
[2026-02-01T11:33:49.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1819
[2026-02-01T11:33:49.820Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:33:49.820Z] [BOT] 💾 AFTER MERGE: 1819 jobs (merged disk + memory)
[2026-02-01T11:33:49.821Z] [BOT] ✅ No jobs to archive (all 1819 jobs within 7-day window)
[2026-02-01T11:33:49.935Z] [BOT] 💾 Saved posted_jobs.json: 1819 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:51.687Z] [BOT] ✅ Posted message: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T11:33:51.688Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:33:51.688Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:33:51.688Z] [BOT] 💾 BEFORE MERGE: 1819 jobs in memory (cached)
[2026-02-01T11:33:51.736Z] [BOT] ✅ Loaded V2 database: 1819 jobs
💾 DISK STATE: 1819 jobs on disk
[2026-02-01T11:33:51.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1819
[2026-02-01T11:33:51.740Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:33:51.740Z] [BOT] 💾 AFTER MERGE: 1819 jobs (merged disk + memory)
[2026-02-01T11:33:51.742Z] [BOT] ✅ No jobs to archive (all 1819 jobs within 7-day window)
[2026-02-01T11:33:51.856Z] [BOT] 💾 Saved posted_jobs.json: 1819 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:53.357Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Arch - E-commerce)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:33:53.622Z] [BOT] ✅ Posted message: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb
[2026-02-01T11:33:53.623Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:33:53.623Z] [BOT] 💾 BEFORE MERGE: 1820 jobs in memory (cached)
[2026-02-01T11:33:53.671Z] [BOT] ✅ Loaded V2 database: 1819 jobs
💾 DISK STATE: 1819 jobs on disk
[2026-02-01T11:33:53.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1820
[2026-02-01T11:33:53.675Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:33:53.675Z] [BOT] 💾 AFTER MERGE: 1820 jobs (merged disk + memory)
[2026-02-01T11:33:53.677Z] [BOT] ✅ No jobs to archive (all 1820 jobs within 7-day window)
[2026-02-01T11:33:53.820Z] [BOT] 💾 Saved posted_jobs.json: 1820 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:55.575Z] [BOT] ✅ Posted message: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:33:55.575Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:33:55.575Z] [BOT] 💾 BEFORE MERGE: 1820 jobs in memory (cached)
[2026-02-01T11:33:55.623Z] [BOT] ✅ Loaded V2 database: 1820 jobs
💾 DISK STATE: 1820 jobs on disk
[2026-02-01T11:33:55.623Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1820
[2026-02-01T11:33:55.627Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:33:55.627Z] [BOT] 💾 AFTER MERGE: 1820 jobs (merged disk + memory)
[2026-02-01T11:33:55.628Z] [BOT] ✅ No jobs to archive (all 1820 jobs within 7-day window)
[2026-02-01T11:33:55.730Z] [BOT] 💾 Saved posted_jobs.json: 1820 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:57.233Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:33:57.490Z] [BOT] ✅ Posted message: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c
[2026-02-01T11:33:57.491Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:33:57.492Z] [BOT] 💾 BEFORE MERGE: 1821 jobs in memory (cached)
[2026-02-01T11:33:57.539Z] [BOT] ✅ Loaded V2 database: 1820 jobs
💾 DISK STATE: 1820 jobs on disk
[2026-02-01T11:33:57.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1821
[2026-02-01T11:33:57.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:33:57.543Z] [BOT] 💾 AFTER MERGE: 1821 jobs (merged disk + memory)
[2026-02-01T11:33:57.544Z] [BOT] ✅ No jobs to archive (all 1821 jobs within 7-day window)
[2026-02-01T11:33:57.649Z] [BOT] 💾 Saved posted_jobs.json: 1821 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:33:59.510Z] [BOT] ✅ Posted message: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:33:59.511Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:33:59.511Z] [BOT] 💾 BEFORE MERGE: 1821 jobs in memory (cached)
[2026-02-01T11:33:59.559Z] [BOT] ✅ Loaded V2 database: 1821 jobs
💾 DISK STATE: 1821 jobs on disk
[2026-02-01T11:33:59.559Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1821
[2026-02-01T11:33:59.563Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:33:59.563Z] [BOT] 💾 AFTER MERGE: 1821 jobs (merged disk + memory)
[2026-02-01T11:33:59.564Z] [BOT] ✅ No jobs to archive (all 1821 jobs within 7-day window)
[2026-02-01T11:33:59.676Z] [BOT] 💾 Saved posted_jobs.json: 1821 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:01.178Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Cloud Native Infrastructure" @ ORG_08c9a13c
[2026-02-01T11:34:01.179Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:34:01.372Z] [BOT] ✅ Posted message: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c
[2026-02-01T11:34:01.372Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:34:01.373Z] [BOT] 💾 BEFORE MERGE: 1822 jobs in memory (cached)
[2026-02-01T11:34:01.426Z] [BOT] ✅ Loaded V2 database: 1821 jobs
💾 DISK STATE: 1821 jobs on disk
[2026-02-01T11:34:01.427Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1822
[2026-02-01T11:34:01.430Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:01.430Z] [BOT] 💾 AFTER MERGE: 1822 jobs (merged disk + memory)
[2026-02-01T11:34:01.431Z] [BOT] ✅ No jobs to archive (all 1822 jobs within 7-day window)
[2026-02-01T11:34:01.543Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:03.323Z] [BOT] ✅ Posted message: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #🌲・JID_efdf5921
[2026-02-01T11:34:03.323Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:34:03.324Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:34:03.324Z] [BOT] 💾 BEFORE MERGE: 1822 jobs in memory (cached)
[2026-02-01T11:34:03.372Z] [BOT] ✅ Loaded V2 database: 1822 jobs
💾 DISK STATE: 1822 jobs on disk
[2026-02-01T11:34:03.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1822
[2026-02-01T11:34:03.376Z] [BOT] 🔀 Deep merged: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:34:03.376Z] [BOT] 💾 AFTER MERGE: 1822 jobs (merged disk + memory)
[2026-02-01T11:34:03.377Z] [BOT] ✅ No jobs to archive (all 1822 jobs within 7-day window)
[2026-02-01T11:34:03.491Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:04.995Z] [BOT] 📍 [ROUTING] "Software Engineer, New Grad - Infrastructure" @ ORG_f56b7436
[2026-02-01T11:34:04.995Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:34:05.373Z] [BOT] ✅ Posted message: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T11:34:05.373Z] [BOT] ✅ Industry: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436
[2026-02-01T11:34:05.374Z] [BOT] 💾 Added channel posting: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T11:34:05.374Z] [BOT] 💾 BEFORE MERGE: 1823 jobs in memory (cached)
[2026-02-01T11:34:05.423Z] [BOT] ✅ Loaded V2 database: 1822 jobs
💾 DISK STATE: 1822 jobs on disk
[2026-02-01T11:34:05.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1823
[2026-02-01T11:34:05.426Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1823 jobs (merged disk + memory)
[2026-02-01T11:34:05.427Z] [BOT] ✅ No jobs to archive (all 1823 jobs within 7-day window)
[2026-02-01T11:34:05.543Z] [BOT] 💾 Saved posted_jobs.json: 1823 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:07.219Z] [BOT] ✅ Posted message: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:34:07.220Z] [BOT] 💾 Added channel posting: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T11:34:07.220Z] [BOT] 💾 BEFORE MERGE: 1823 jobs in memory (cached)
[2026-02-01T11:34:07.269Z] [BOT] ✅ Loaded V2 database: 1823 jobs
💾 DISK STATE: 1823 jobs on disk
[2026-02-01T11:34:07.269Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1823
[2026-02-01T11:34:07.272Z] [BOT] 🔀 Deep merged: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
[2026-02-01T11:34:07.273Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1823 jobs (merged disk + memory)
[2026-02-01T11:34:07.274Z] [BOT] ✅ No jobs to archive (all 1823 jobs within 7-day window)
[2026-02-01T11:34:07.406Z] [BOT] 💾 Saved posted_jobs.json: 1823 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:08.908Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-02-01T11:34:08.908Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:34:09.268Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T11:34:09.268Z] [BOT] ✅ Industry: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c
[2026-02-01T11:34:09.269Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:34:09.269Z] [BOT] 💾 BEFORE MERGE: 1824 jobs in memory (cached)
[2026-02-01T11:34:09.317Z] [BOT] ✅ Loaded V2 database: 1823 jobs
💾 DISK STATE: 1823 jobs on disk
[2026-02-01T11:34:09.318Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1824
[2026-02-01T11:34:09.321Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:09.321Z] [BOT] 💾 AFTER MERGE: 1824 jobs (merged disk + memory)
[2026-02-01T11:34:09.322Z] [BOT] ✅ No jobs to archive (all 1824 jobs within 7-day window)
[2026-02-01T11:34:09.426Z] [BOT] 💾 Saved posted_jobs.json: 1824 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:11.179Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:34:11.180Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:34:11.180Z] [BOT] 💾 BEFORE MERGE: 1824 jobs in memory (cached)
[2026-02-01T11:34:11.227Z] [BOT] ✅ Loaded V2 database: 1824 jobs
💾 DISK STATE: 1824 jobs on disk
[2026-02-01T11:34:11.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1824
[2026-02-01T11:34:11.231Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:34:11.231Z] [BOT] 💾 AFTER MERGE: 1824 jobs (merged disk + memory)
[2026-02-01T11:34:11.232Z] [BOT] ✅ No jobs to archive (all 1824 jobs within 7-day window)
[2026-02-01T11:34:11.338Z] [BOT] 💾 Saved posted_jobs.json: 1824 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:15.840Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T11:34:15.841Z] [BOT] 📍 [ROUTING] "Deep Learning Software Engineer, FlashInfer" @ ORG_0890f456
[2026-02-01T11:34:15.841Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:34:16.063Z] [BOT] ✅ Posted message: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456
[2026-02-01T11:34:16.063Z] [BOT] 💾 Added channel posting: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T11:34:16.064Z] [BOT] 💾 BEFORE MERGE: 1825 jobs in memory (cached)
[2026-02-01T11:34:16.111Z] [BOT] ✅ Loaded V2 database: 1824 jobs
💾 DISK STATE: 1824 jobs on disk
[2026-02-01T11:34:16.111Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1825
[2026-02-01T11:34:16.114Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:16.115Z] [BOT] 💾 AFTER MERGE: 1825 jobs (merged disk + memory)
[2026-02-01T11:34:16.115Z] [BOT] ✅ No jobs to archive (all 1825 jobs within 7-day window)
[2026-02-01T11:34:16.231Z] [BOT] 💾 Saved posted_jobs.json: 1825 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:17.963Z] [BOT] ✅ Posted message: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T11:34:17.963Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:34:17.963Z] [BOT] 💾 Added channel posting: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T11:34:17.963Z] [BOT] 💾 BEFORE MERGE: 1825 jobs in memory (cached)
[2026-02-01T11:34:18.013Z] [BOT] ✅ Loaded V2 database: 1825 jobs
💾 DISK STATE: 1825 jobs on disk
[2026-02-01T11:34:18.014Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1825
[2026-02-01T11:34:18.017Z] [BOT] 🔀 Deep merged: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:34:18.017Z] [BOT] 💾 AFTER MERGE: 1825 jobs (merged disk + memory)
[2026-02-01T11:34:18.018Z] [BOT] ✅ No jobs to archive (all 1825 jobs within 7-day window)
[2026-02-01T11:34:18.134Z] [BOT] 💾 Saved posted_jobs.json: 1825 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:19.638Z] [BOT] 📍 [ROUTING] "Machine Learning Researcher" @ ORG_e5deb41a Securities
[2026-02-01T11:34:19.638Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:34:19.638Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:34:20.104Z] [BOT] ✅ Posted message: Machine Learning Researcher @ ORG_e5deb41a Securities in #🤖・ai-jobs
  ✅ Industry: Machine Learning Researcher @ ORG_e5deb41a Securities
[2026-02-01T11:34:20.106Z] [BOT] 💾 Added channel posting: Machine Learning Researcher @ ORG_e5deb41a Securities → category channel (1 total channels)
[2026-02-01T11:34:20.106Z] [BOT] 💾 BEFORE MERGE: 1826 jobs in memory (cached)
[2026-02-01T11:34:20.153Z] [BOT] ✅ Loaded V2 database: 1825 jobs
💾 DISK STATE: 1825 jobs on disk
[2026-02-01T11:34:20.154Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1826
[2026-02-01T11:34:20.157Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:20.157Z] [BOT] 💾 AFTER MERGE: 1826 jobs (merged disk + memory)
[2026-02-01T11:34:20.159Z] [BOT] ✅ No jobs to archive (all 1826 jobs within 7-day window)
[2026-02-01T11:34:20.262Z] [BOT] 💾 Saved posted_jobs.json: 1826 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:22.020Z] [BOT] ✅ Posted message: Machine Learning Researcher @ ORG_e5deb41a Securities in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T11:34:22.021Z] [BOT] 💾 Added channel posting: Machine Learning Researcher @ ORG_e5deb41a Securities → location channel (2 total channels)
[2026-02-01T11:34:22.021Z] [BOT] 💾 BEFORE MERGE: 1826 jobs in memory (cached)
[2026-02-01T11:34:22.068Z] [BOT] ✅ Loaded V2 database: 1826 jobs
💾 DISK STATE: 1826 jobs on disk
[2026-02-01T11:34:22.069Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1826
[2026-02-01T11:34:22.072Z] [BOT] 🔀 Deep merged: Machine Learning Researcher @ ORG_e5deb41a Securities (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:34:22.072Z] [BOT] 💾 AFTER MERGE: 1826 jobs (merged disk + memory)
[2026-02-01T11:34:22.073Z] [BOT] ✅ No jobs to archive (all 1826 jobs within 7-day window)
[2026-02-01T11:34:22.187Z] [BOT] 💾 Saved posted_jobs.json: 1826 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:23.690Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T11:34:23.690Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T11:34:24.161Z] [BOT] ✅ Posted message: Software Engineer in ML Systems Graduate @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer in ML Systems Graduate @ ORG_08c9a13c
[2026-02-01T11:34:24.162Z] [BOT] 💾 Added channel posting: Software Engineer in ML Systems Graduate @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:34:24.162Z] [BOT] 💾 BEFORE MERGE: 1827 jobs in memory (cached)
[2026-02-01T11:34:24.211Z] [BOT] ✅ Loaded V2 database: 1826 jobs
💾 DISK STATE: 1826 jobs on disk
[2026-02-01T11:34:24.212Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1827
[2026-02-01T11:34:24.215Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:24.215Z] [BOT] 💾 AFTER MERGE: 1827 jobs (merged disk + memory)
[2026-02-01T11:34:24.216Z] [BOT] ✅ No jobs to archive (all 1827 jobs within 7-day window)
[2026-02-01T11:34:24.349Z] [BOT] 💾 Saved posted_jobs.json: 1827 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:26.049Z] [BOT] ✅ Posted message: Software Engineer in ML Systems Graduate @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:34:26.050Z] [BOT] 💾 Added channel posting: Software Engineer in ML Systems Graduate @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:34:26.050Z] [BOT] 💾 BEFORE MERGE: 1827 jobs in memory (cached)
[2026-02-01T11:34:26.099Z] [BOT] ✅ Loaded V2 database: 1827 jobs
💾 DISK STATE: 1827 jobs on disk
[2026-02-01T11:34:26.099Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1827
[2026-02-01T11:34:26.103Z] [BOT] 🔀 Deep merged: Software Engineer in ML Systems Graduate @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:34:26.103Z] [BOT] 💾 AFTER MERGE: 1827 jobs (merged disk + memory)
[2026-02-01T11:34:26.104Z] [BOT] ✅ No jobs to archive (all 1827 jobs within 7-day window)
[2026-02-01T11:34:26.207Z] [BOT] 💾 Saved posted_jobs.json: 1827 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:30.709Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T11:34:30.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6c1f06a3..." not found, but found as SHA256 "03706b24a40ff964"
[2026-02-01T11:34:30.710Z] [BOT] ⏭️  Skipping duplicate: JID_71241c50 (posted within 7 days)
[2026-02-01T11:34:30.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "079e848e49b62ffb"
[2026-02-01T11:34:30.711Z] [BOT] ⏭️  Skipping duplicate: JID_2a053543-2025_jr2002086 (posted within 7 days)
[2026-02-01T11:34:30.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98f8205d..." not found, but found as SHA256 "3124d693f85ca82f"
[2026-02-01T11:34:30.711Z] [BOT] ⏭️  Skipping duplicate: JID_7dd98b4e (posted within 7 days)
[2026-02-01T11:34:30.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_961fbe72..." not found, but found as SHA256 "2a150c103cace5dc"
[2026-02-01T11:34:30.711Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ca8884d9 (posted within 7 days)
[2026-02-01T11:34:30.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eff2782a..." not found, but found as SHA256 "535d1c8128977581"
[2026-02-01T11:34:30.712Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8a2bed2e (posted within 7 days)
[2026-02-01T11:34:30.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b8c340a9..." not found, but found as SHA256 "bbb2197847a654a9"
[2026-02-01T11:34:30.712Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_5d75fef3 (posted within 7 days)
[2026-02-01T11:34:30.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_108abe06..." not found, but found as SHA256 "036ff24e83f0302d"
[2026-02-01T11:34:30.712Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_59828f46-detail (posted within 7 days)
[2026-02-01T11:34:30.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8e4f271c..." not found, but found as SHA256 "7cf09cd750ba744a"
[2026-02-01T11:34:30.712Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd5b89ca-detail (posted within 7 days)
[2026-02-01T11:34:30.713Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_983dc330..." not found, but found as SHA256 "24f9d5ad7927a932"
[2026-02-01T11:34:30.713Z] [BOT] ⏭️  Skipping duplicate: JID_217519ad (posted within 7 days)
[2026-02-01T11:34:30.713Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_459435c0..." not found, but found as SHA256 "885fe3e5532e9c12"
[2026-02-01T11:34:30.713Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_74fc3db8-detail (posted within 7 days)
[2026-02-01T11:34:30.859Z] [BOT] ✅ Loaded pending queue: 2947 total (1091 pending, 49 enriched, 1807 posted)
[2026-02-01T11:34:31.057Z] [BOT] ✅ Saved pending queue: 2947 total (1091 pending, 39 enriched, 1817 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T11:34:31.057Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T11:34:31.160Z] [BOT] 📂 Loaded 11898 existing routing entries
[2026-02-01T11:34:31.284Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11908
   Timestamp: 2026-02-01T11:34:31.243Z
[2026-02-01T11:34:31.285Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 29
[2026-02-01T11:34:31.285Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 9
[2026-02-01T11:34:31.285Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T11:34:31.285Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-02-01T11:34:31.285Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🌉・JID_739bbc0b: 7 posts
[2026-02-01T11:34:31.286Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #🌲・JID_efdf5921: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T11:34:31.286Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1827 jobs in memory (cached)
[2026-02-01T11:34:31.341Z] [BOT] ✅ Loaded V2 database: 1827 jobs
💾 DISK STATE: 1827 jobs on disk
[2026-02-01T11:34:31.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1827
[2026-02-01T11:34:31.345Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:34:31.345Z] [BOT] 💾 AFTER MERGE: 1827 jobs (merged disk + memory)
[2026-02-01T11:34:31.346Z] [BOT] ✅ No jobs to archive (all 1827 jobs within 7-day window)
[2026-02-01T11:34:31.458Z] [BOT] 💾 Saved posted_jobs.json: 1827 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:34:31.458Z] [BOT] ✅ Database saved successfully
[2026-02-01T11:34:33.485Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*