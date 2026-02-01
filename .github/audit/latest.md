# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T10:34:11.563Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T10:33:23.082Z] ========================================
[2026-02-01T10:33:23.084Z] Discord Bot Execution Log
[2026-02-01T10:33:23.084Z] Environment: GitHub Actions
[2026-02-01T10:33:23.084Z] Node Version: v20.20.0
[2026-02-01T10:33:23.084Z] ========================================
[2026-02-01T10:33:23.084Z] Environment Variables Check:
[2026-02-01T10:33:23.084Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T10:33:23.084Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T10:33:23.084Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T10:33:23.084Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T10:33:23.084Z] 
Multi-Channel Configuration:
[2026-02-01T10:33:23.084Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T10:33:23.085Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T10:33:23.085Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:33:23.085Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T10:33:23.085Z] 
Data Files Check:
[2026-02-01T10:33:23.086Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58391 bytes)
[2026-02-01T10:33:23.135Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9470588 bytes)
[2026-02-01T10:33:23.135Z] 
========================================
[2026-02-01T10:33:23.135Z] Starting Enhanced Discord Bot...
[2026-02-01T10:33:23.135Z] ========================================
[2026-02-01T10:33:23.732Z] [BOT] ✅ Loaded V2 database: 1767 jobs
[2026-02-01T10:33:24.110Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T10:33:24.111Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T10:33:24.111Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T10:33:24.222Z] [BOT] ✅ Loaded pending queue: 2942 total (1135 pending, 50 enriched, 1757 posted)
[2026-02-01T10:33:24.223Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T10:33:24.223Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:33:24.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T10:33:24.224Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:33:24.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T10:33:24.225Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T10:33:24.225Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T10:33:24.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T10:33:24.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T10:33:24.226Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T10:33:24.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T10:33:24.226Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T10:33:24.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T10:33:24.227Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T10:33:24.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T10:33:24.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T10:33:24.227Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T10:33:24.241Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T10:33:24.241Z] [BOT] 🚫 Skipping blacklisted job: Seismology Postdoctoral Fellow at University of Texas - Austin
[2026-02-01T10:33:24.241Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Associate at University of Miami
[2026-02-01T10:33:24.242Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Northeastern
🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Scholar - Department of Physics - Wissel Research Group at PennState University
🚫 Skipping blacklisted job: Postdoctoral Scholar at PennState University
🚫 Skipping blacklisted job: Physics Department - Postdoctoral Scholar - Ligo at PennState University
[2026-02-01T10:33:24.365Z] [BOT] ✅ Loaded pending queue: 2942 total (1135 pending, 50 enriched, 1757 posted)
[2026-02-01T10:33:24.571Z] [BOT] ✅ Saved pending queue: 2935 total (1135 pending, 43 enriched, 1757 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-02-01T10:33:24.571Z] [BOT] 📋 After blacklist filter: 35 jobs (7 blacklisted)
📋 After data quality filter: 35 jobs (0 invalid)
[2026-02-01T10:33:24.572Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-02-01T10:33:24.572Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T10:33:24.572Z] [BOT] - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T10:33:24.576Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T10:33:24.577Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI)" @ ORG_dc7620eb
[2026-02-01T10:33:24.577Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:24.595Z] [BOT ERROR] (node:3922) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T10:33:24.746Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb
[2026-02-01T10:33:24.747Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-01T10:33:24.748Z] [BOT] 💾 BEFORE MERGE: 1768 jobs in memory (cached)
[2026-02-01T10:33:24.788Z] [BOT] ✅ Loaded V2 database: 1767 jobs
💾 DISK STATE: 1767 jobs on disk
[2026-02-01T10:33:24.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1768
[2026-02-01T10:33:24.792Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:24.793Z] [BOT] 💾 AFTER MERGE: 1768 jobs (merged disk + memory)
[2026-02-01T10:33:24.794Z] [BOT] ✅ No jobs to archive (all 1768 jobs within 7-day window)
[2026-02-01T10:33:24.902Z] [BOT] 💾 Saved posted_jobs.json: 1768 active jobs
[2026-02-01T10:33:24.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:26.718Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #📍・JID_6daed763
[2026-02-01T10:33:26.718Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:33:26.718Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb → location channel (2 total channels)
[2026-02-01T10:33:26.719Z] [BOT] 💾 BEFORE MERGE: 1768 jobs in memory (cached)
[2026-02-01T10:33:26.751Z] [BOT] ✅ Loaded V2 database: 1768 jobs
[2026-02-01T10:33:26.752Z] [BOT] 💾 DISK STATE: 1768 jobs on disk
[2026-02-01T10:33:26.752Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1768
[2026-02-01T10:33:26.756Z] [BOT] 🔀 Deep merged: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:33:26.756Z] [BOT] 💾 AFTER MERGE: 1768 jobs (merged disk + memory)
[2026-02-01T10:33:26.757Z] [BOT] ✅ No jobs to archive (all 1768 jobs within 7-day window)
[2026-02-01T10:33:26.856Z] [BOT] 💾 Saved posted_jobs.json: 1768 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:28.357Z] [BOT] 📍 [ROUTING] "Software Integration Engineer, Factory Firmware" @ ORG_f89f8538
   Category: TECH (matched: "software")
[2026-02-01T10:33:28.357Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:28.580Z] [BOT] ✅ Posted message: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 in #💻・tech-jobs
[2026-02-01T10:33:28.580Z] [BOT] ✅ Industry: Software Integration Engineer, Factory Firmware @ ORG_f89f8538
[2026-02-01T10:33:28.581Z] [BOT] 💾 Added channel posting: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 → category channel (1 total channels)
[2026-02-01T10:33:28.581Z] [BOT] 💾 BEFORE MERGE: 1769 jobs in memory (cached)
[2026-02-01T10:33:28.613Z] [BOT] ✅ Loaded V2 database: 1768 jobs
💾 DISK STATE: 1768 jobs on disk
[2026-02-01T10:33:28.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1769
[2026-02-01T10:33:28.617Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:28.617Z] [BOT] 💾 AFTER MERGE: 1769 jobs (merged disk + memory)
[2026-02-01T10:33:28.618Z] [BOT] ✅ No jobs to archive (all 1769 jobs within 7-day window)
[2026-02-01T10:33:28.709Z] [BOT] 💾 Saved posted_jobs.json: 1769 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:30.424Z] [BOT] ✅ Posted message: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 in #🌉・JID_739bbc0b
[2026-02-01T10:33:30.425Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:33:30.425Z] [BOT] 💾 Added channel posting: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 → location channel (2 total channels)
[2026-02-01T10:33:30.425Z] [BOT] 💾 BEFORE MERGE: 1769 jobs in memory (cached)
[2026-02-01T10:33:30.461Z] [BOT] ✅ Loaded V2 database: 1769 jobs
💾 DISK STATE: 1769 jobs on disk
[2026-02-01T10:33:30.461Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1769
[2026-02-01T10:33:30.465Z] [BOT] 🔀 Deep merged: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:33:30.465Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1769 jobs (merged disk + memory)
[2026-02-01T10:33:30.466Z] [BOT] ✅ No jobs to archive (all 1769 jobs within 7-day window)
[2026-02-01T10:33:30.561Z] [BOT] 💾 Saved posted_jobs.json: 1769 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:32.062Z] [BOT] 📍 [ROUTING] "Kernel Software Engineer" @ ORG_f89f8538
[2026-02-01T10:33:32.062Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:32.238Z] [BOT] ✅ Posted message: Kernel Software Engineer @ ORG_f89f8538 in #💻・tech-jobs
[2026-02-01T10:33:32.238Z] [BOT] ✅ Industry: Kernel Software Engineer @ ORG_f89f8538
[2026-02-01T10:33:32.239Z] [BOT] 💾 Added channel posting: Kernel Software Engineer @ ORG_f89f8538 → category channel (1 total channels)
[2026-02-01T10:33:32.239Z] [BOT] 💾 BEFORE MERGE: 1770 jobs in memory (cached)
[2026-02-01T10:33:32.273Z] [BOT] ✅ Loaded V2 database: 1769 jobs
💾 DISK STATE: 1769 jobs on disk
[2026-02-01T10:33:32.273Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1770
[2026-02-01T10:33:32.277Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:32.277Z] [BOT] 💾 AFTER MERGE: 1770 jobs (merged disk + memory)
[2026-02-01T10:33:32.278Z] [BOT] ✅ No jobs to archive (all 1770 jobs within 7-day window)
[2026-02-01T10:33:32.401Z] [BOT] 💾 Saved posted_jobs.json: 1770 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:34.175Z] [BOT] ✅ Posted message: Kernel Software Engineer @ ORG_f89f8538 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:33:34.176Z] [BOT] 💾 Added channel posting: Kernel Software Engineer @ ORG_f89f8538 → location channel (2 total channels)
[2026-02-01T10:33:34.176Z] [BOT] 💾 BEFORE MERGE: 1770 jobs in memory (cached)
[2026-02-01T10:33:34.208Z] [BOT] ✅ Loaded V2 database: 1770 jobs
💾 DISK STATE: 1770 jobs on disk
[2026-02-01T10:33:34.208Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1770
[2026-02-01T10:33:34.211Z] [BOT] 🔀 Deep merged: Kernel Software Engineer @ ORG_f89f8538 (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:33:34.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1770 jobs (merged disk + memory)
[2026-02-01T10:33:34.212Z] [BOT] ✅ No jobs to archive (all 1770 jobs within 7-day window)
[2026-02-01T10:33:34.298Z] [BOT] 💾 Saved posted_jobs.json: 1770 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:35.800Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (AI Applications)" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:35.961Z] [BOT] ✅ Posted message: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c
[2026-02-01T10:33:35.962Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T10:33:35.962Z] [BOT] 💾 BEFORE MERGE: 1771 jobs in memory (cached)
[2026-02-01T10:33:35.993Z] [BOT] ✅ Loaded V2 database: 1770 jobs
💾 DISK STATE: 1770 jobs on disk
[2026-02-01T10:33:35.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1771
[2026-02-01T10:33:35.997Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:35.997Z] [BOT] 💾 AFTER MERGE: 1771 jobs (merged disk + memory)
[2026-02-01T10:33:35.998Z] [BOT] ✅ No jobs to archive (all 1771 jobs within 7-day window)
[2026-02-01T10:33:36.084Z] [BOT] 💾 Saved posted_jobs.json: 1771 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:37.987Z] [BOT] ✅ Posted message: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T10:33:37.987Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:33:37.987Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T10:33:37.987Z] [BOT] 💾 BEFORE MERGE: 1771 jobs in memory (cached)
[2026-02-01T10:33:38.019Z] [BOT] ✅ Loaded V2 database: 1771 jobs
💾 DISK STATE: 1771 jobs on disk
[2026-02-01T10:33:38.019Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1771
[2026-02-01T10:33:38.022Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:33:38.022Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1771 jobs (merged disk + memory)
[2026-02-01T10:33:38.023Z] [BOT] ✅ No jobs to archive (all 1771 jobs within 7-day window)
[2026-02-01T10:33:38.116Z] [BOT] 💾 Saved posted_jobs.json: 1771 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:39.618Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-02-01T10:33:39.618Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:39.985Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-02-01T10:33:39.985Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-02-01T10:33:39.985Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-01T10:33:39.986Z] [BOT] 💾 BEFORE MERGE: 1772 jobs in memory (cached)
[2026-02-01T10:33:40.021Z] [BOT] ✅ Loaded V2 database: 1771 jobs
💾 DISK STATE: 1771 jobs on disk
[2026-02-01T10:33:40.021Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1772
[2026-02-01T10:33:40.024Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:40.024Z] [BOT] 💾 AFTER MERGE: 1772 jobs (merged disk + memory)
[2026-02-01T10:33:40.025Z] [BOT] ✅ No jobs to archive (all 1772 jobs within 7-day window)
[2026-02-01T10:33:40.120Z] [BOT] 💾 Saved posted_jobs.json: 1772 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:41.811Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #🏠・JID_ead674af
[2026-02-01T10:33:41.811Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T10:33:41.811Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → location channel (2 total channels)
[2026-02-01T10:33:41.811Z] [BOT] 💾 BEFORE MERGE: 1772 jobs in memory (cached)
[2026-02-01T10:33:41.844Z] [BOT] ✅ Loaded V2 database: 1772 jobs
💾 DISK STATE: 1772 jobs on disk
[2026-02-01T10:33:41.844Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1772
[2026-02-01T10:33:41.847Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_c7bac469 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:33:41.848Z] [BOT] 💾 AFTER MERGE: 1772 jobs (merged disk + memory)
[2026-02-01T10:33:41.849Z] [BOT] ✅ No jobs to archive (all 1772 jobs within 7-day window)
[2026-02-01T10:33:41.948Z] [BOT] 💾 Saved posted_jobs.json: 1772 active jobs
[2026-02-01T10:33:41.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:43.451Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
[2026-02-01T10:33:43.452Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:43.663Z] [BOT] ✅ Posted message: Predoctoral Scholar @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2026-02-01T10:33:43.663Z] [BOT] ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2026-02-01T10:33:43.664Z] [BOT] 💾 Added channel posting: Predoctoral Scholar @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-02-01T10:33:43.664Z] [BOT] 💾 BEFORE MERGE: 1773 jobs in memory (cached)
[2026-02-01T10:33:43.695Z] [BOT] ✅ Loaded V2 database: 1772 jobs
💾 DISK STATE: 1772 jobs on disk
[2026-02-01T10:33:43.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1773
[2026-02-01T10:33:43.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:43.699Z] [BOT] 💾 AFTER MERGE: 1773 jobs (merged disk + memory)
[2026-02-01T10:33:43.700Z] [BOT] ✅ No jobs to archive (all 1773 jobs within 7-day window)
[2026-02-01T10:33:43.785Z] [BOT] 💾 Saved posted_jobs.json: 1773 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:45.537Z] [BOT] ✅ Posted message: Predoctoral Scholar @ ORG_9d38443e of Chicago in #📍・JID_6daed763
[2026-02-01T10:33:45.537Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:33:45.537Z] [BOT] 💾 Added channel posting: Predoctoral Scholar @ ORG_9d38443e of Chicago → location channel (2 total channels)
[2026-02-01T10:33:45.537Z] [BOT] 💾 BEFORE MERGE: 1773 jobs in memory (cached)
[2026-02-01T10:33:45.568Z] [BOT] ✅ Loaded V2 database: 1773 jobs
💾 DISK STATE: 1773 jobs on disk
[2026-02-01T10:33:45.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1773
[2026-02-01T10:33:45.571Z] [BOT] 🔀 Deep merged: Predoctoral Scholar @ ORG_9d38443e of Chicago (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:33:45.571Z] [BOT] 💾 AFTER MERGE: 1773 jobs (merged disk + memory)
[2026-02-01T10:33:45.572Z] [BOT] ✅ No jobs to archive (all 1773 jobs within 7-day window)
[2026-02-01T10:33:45.662Z] [BOT] 💾 Saved posted_jobs.json: 1773 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:47.164Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "machine learning")
[2026-02-01T10:33:47.165Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:47.461Z] [BOT] ✅ Posted message: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T10:33:47.461Z] [BOT] ✅ Industry: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T10:33:47.462Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T10:33:47.462Z] [BOT] 💾 BEFORE MERGE: 1774 jobs in memory (cached)
[2026-02-01T10:33:47.495Z] [BOT] ✅ Loaded V2 database: 1773 jobs
💾 DISK STATE: 1773 jobs on disk
[2026-02-01T10:33:47.495Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1774
[2026-02-01T10:33:47.498Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:47.498Z] [BOT] 💾 AFTER MERGE: 1774 jobs (merged disk + memory)
[2026-02-01T10:33:47.499Z] [BOT] ✅ No jobs to archive (all 1774 jobs within 7-day window)
[2026-02-01T10:33:47.589Z] [BOT] 💾 Saved posted_jobs.json: 1774 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:49.331Z] [BOT] ✅ Posted message: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:33:49.332Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T10:33:49.332Z] [BOT] 💾 BEFORE MERGE: 1774 jobs in memory (cached)
[2026-02-01T10:33:49.367Z] [BOT] ✅ Loaded V2 database: 1774 jobs
💾 DISK STATE: 1774 jobs on disk
[2026-02-01T10:33:49.368Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1774
[2026-02-01T10:33:49.371Z] [BOT] 🔀 Deep merged: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:33:49.371Z] [BOT] 💾 AFTER MERGE: 1774 jobs (merged disk + memory)
[2026-02-01T10:33:49.372Z] [BOT] ✅ No jobs to archive (all 1774 jobs within 7-day window)
[2026-02-01T10:33:49.467Z] [BOT] 💾 Saved posted_jobs.json: 1774 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:50.969Z] [BOT] 📍 [ROUTING] "Software Quality Engineer I" @ ORG_88a78b3d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:51.306Z] [BOT] ✅ Posted message: Software Quality Engineer I @ ORG_88a78b3d in #💻・tech-jobs
  ✅ Industry: Software Quality Engineer I @ ORG_88a78b3d
[2026-02-01T10:33:51.307Z] [BOT] 💾 Added channel posting: Software Quality Engineer I @ ORG_88a78b3d → category channel (1 total channels)
[2026-02-01T10:33:51.307Z] [BOT] 💾 BEFORE MERGE: 1775 jobs in memory (cached)
[2026-02-01T10:33:51.340Z] [BOT] ✅ Loaded V2 database: 1774 jobs
💾 DISK STATE: 1774 jobs on disk
[2026-02-01T10:33:51.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1775
[2026-02-01T10:33:51.344Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:51.344Z] [BOT] 💾 AFTER MERGE: 1775 jobs (merged disk + memory)
[2026-02-01T10:33:51.345Z] [BOT] ✅ No jobs to archive (all 1775 jobs within 7-day window)
[2026-02-01T10:33:51.443Z] [BOT] 💾 Saved posted_jobs.json: 1775 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:53.152Z] [BOT] ✅ Posted message: Software Quality Engineer I @ ORG_88a78b3d in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T10:33:53.153Z] [BOT] 💾 Added channel posting: Software Quality Engineer I @ ORG_88a78b3d → location channel (2 total channels)
[2026-02-01T10:33:53.153Z] [BOT] 💾 BEFORE MERGE: 1775 jobs in memory (cached)
[2026-02-01T10:33:53.184Z] [BOT] ✅ Loaded V2 database: 1775 jobs
💾 DISK STATE: 1775 jobs on disk
[2026-02-01T10:33:53.184Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1775
[2026-02-01T10:33:53.187Z] [BOT] 🔀 Deep merged: Software Quality Engineer I @ ORG_88a78b3d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:33:53.188Z] [BOT] 💾 AFTER MERGE: 1775 jobs (merged disk + memory)
[2026-02-01T10:33:53.189Z] [BOT] ✅ No jobs to archive (all 1775 jobs within 7-day window)
[2026-02-01T10:33:53.274Z] [BOT] 💾 Saved posted_jobs.json: 1775 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:54.776Z] [BOT] 📍 [ROUTING] "Security Software Engineer I" @ ORG_e9de098c
[2026-02-01T10:33:54.777Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:33:54.978Z] [BOT] ✅ Posted message: Security Software Engineer I @ ORG_e9de098c in #💻・tech-jobs
  ✅ Industry: Security Software Engineer I @ ORG_e9de098c
[2026-02-01T10:33:54.979Z] [BOT] 💾 Added channel posting: Security Software Engineer I @ ORG_e9de098c → category channel (1 total channels)
[2026-02-01T10:33:54.979Z] [BOT] 💾 BEFORE MERGE: 1776 jobs in memory (cached)
[2026-02-01T10:33:55.012Z] [BOT] ✅ Loaded V2 database: 1775 jobs
💾 DISK STATE: 1775 jobs on disk
[2026-02-01T10:33:55.013Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1776
[2026-02-01T10:33:55.016Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:33:55.016Z] [BOT] 💾 AFTER MERGE: 1776 jobs (merged disk + memory)
[2026-02-01T10:33:55.017Z] [BOT] ✅ No jobs to archive (all 1776 jobs within 7-day window)
[2026-02-01T10:33:55.116Z] [BOT] 💾 Saved posted_jobs.json: 1776 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:33:56.778Z] [BOT] ✅ Posted message: Security Software Engineer I @ ORG_e9de098c in #🌉・JID_739bbc0b
[2026-02-01T10:33:56.778Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:33:56.778Z] [BOT] 💾 Added channel posting: Security Software Engineer I @ ORG_e9de098c → location channel (2 total channels)
[2026-02-01T10:33:56.778Z] [BOT] 💾 BEFORE MERGE: 1776 jobs in memory (cached)
[2026-02-01T10:33:56.812Z] [BOT] ✅ Loaded V2 database: 1776 jobs
💾 DISK STATE: 1776 jobs on disk
[2026-02-01T10:33:56.812Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1776
[2026-02-01T10:33:56.815Z] [BOT] 🔀 Deep merged: Security Software Engineer I @ ORG_e9de098c (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:33:56.815Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1776 jobs (merged disk + memory)
[2026-02-01T10:33:56.816Z] [BOT] ✅ No jobs to archive (all 1776 jobs within 7-day window)
[2026-02-01T10:33:56.923Z] [BOT] 💾 Saved posted_jobs.json: 1776 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:34:01.422Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T10:34:01.423Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing)" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T10:34:01.423Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T10:34:01.590Z] [BOT] ✅ Posted message: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c
[2026-02-01T10:34:01.591Z] [BOT] 💾 Added channel posting: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T10:34:01.591Z] [BOT] 💾 BEFORE MERGE: 1777 jobs in memory (cached)
[2026-02-01T10:34:01.623Z] [BOT] ✅ Loaded V2 database: 1776 jobs
💾 DISK STATE: 1776 jobs on disk
[2026-02-01T10:34:01.623Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1777
[2026-02-01T10:34:01.626Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:34:01.627Z] [BOT] 💾 AFTER MERGE: 1777 jobs (merged disk + memory)
[2026-02-01T10:34:01.628Z] [BOT] ✅ No jobs to archive (all 1777 jobs within 7-day window)
[2026-02-01T10:34:01.737Z] [BOT] 💾 Saved posted_jobs.json: 1777 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:34:03.419Z] [BOT] ✅ Posted message: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:34:03.420Z] [BOT] 💾 Added channel posting: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T10:34:03.420Z] [BOT] 💾 BEFORE MERGE: 1777 jobs in memory (cached)
[2026-02-01T10:34:03.452Z] [BOT] ✅ Loaded V2 database: 1777 jobs
💾 DISK STATE: 1777 jobs on disk
[2026-02-01T10:34:03.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1777
[2026-02-01T10:34:03.455Z] [BOT] 🔀 Deep merged: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:34:03.455Z] [BOT] 💾 AFTER MERGE: 1777 jobs (merged disk + memory)
[2026-02-01T10:34:03.456Z] [BOT] ✅ No jobs to archive (all 1777 jobs within 7-day window)
[2026-02-01T10:34:03.564Z] [BOT] 💾 Saved posted_jobs.json: 1777 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:34:08.062Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T10:34:08.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_706371fa..." not found, but found as SHA256 "6f01a98f409ee118"
[2026-02-01T10:34:08.064Z] [BOT] ⏭️  Skipping duplicate: JID_4adb2e27 (posted within 7 days)
[2026-02-01T10:34:08.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8a7fde5f..." not found, but found as SHA256 "fd99b36a046cc7f1"
[2026-02-01T10:34:08.064Z] [BOT] ⏭️  Skipping duplicate: JID_30bcdf18 (posted within 7 days)
[2026-02-01T10:34:08.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f31bd15a..." not found, but found as SHA256 "ba2406eea0277d89"
[2026-02-01T10:34:08.065Z] [BOT] ⏭️  Skipping duplicate: JID_f31bd15a (posted within 7 days)
[2026-02-01T10:34:08.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c7a6430c..." not found, but found as SHA256 "cd3cd1296ab68d2a"
[2026-02-01T10:34:08.065Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_bf0b16a2 (posted within 7 days)
[2026-02-01T10:34:08.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0b528bf8..." not found, but found as SHA256 "de433619d6134418"
⏭️  Skipping duplicate: JID_9e797e73-CH_2e04d983 (posted within 7 days)
[2026-02-01T10:34:08.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c1ed441..." not found, but found as SHA256 "0c9506bcd22708ba"
[2026-02-01T10:34:08.066Z] [BOT] ⏭️  Skipping duplicate: JID_7a7d9d99 (posted within 7 days)
[2026-02-01T10:34:08.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "d491e1a1d62f1061"
[2026-02-01T10:34:08.066Z] [BOT] ⏭️  Skipping duplicate: JID_14105d80-scholar_jr31330 (posted within 7 days)
[2026-02-01T10:34:08.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6716ae21..." not found, but found as SHA256 "0055d0ea408470bc"
[2026-02-01T10:34:08.066Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_094ad39e (posted within 7 days)
[2026-02-01T10:34:08.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7723512..." not found, but found as SHA256 "44698e2ec607c16b"
[2026-02-01T10:34:08.066Z] [BOT] ⏭️  Skipping duplicate: JID_839428ba-i_31128083-1 (posted within 7 days)
[2026-02-01T10:34:08.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d0ea3f7..." not found, but found as SHA256 "bc8db8832bb50d78"
[2026-02-01T10:34:08.067Z] [BOT] ⏭️  Skipping duplicate: JID_9d0ea3f7 (posted within 7 days)
[2026-02-01T10:34:08.164Z] [BOT] ✅ Loaded pending queue: 2935 total (1135 pending, 43 enriched, 1757 posted)
[2026-02-01T10:34:08.362Z] [BOT] ✅ Saved pending queue: 2935 total (1135 pending, 33 enriched, 1767 posted)
[2026-02-01T10:34:08.362Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T10:34:08.451Z] [BOT] 📂 Loaded 11848 existing routing entries
[2026-02-01T10:34:08.587Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11858
   Timestamp: 2026-02-01T10:34:08.539Z
[2026-02-01T10:34:08.588Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T10:34:08.588Z] [BOT] Total attempts: 35
   Successful: 20
   Failed: 0
   Skipped: 15
[2026-02-01T10:34:08.588Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 9 posts
[2026-02-01T10:34:08.588Z] [BOT] 2. #🌉・JID_739bbc0b: 6 posts
     3. #📍・JID_6daed763: 3 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T10:34:08.588Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T10:34:08.589Z] [BOT] 💾 BEFORE MERGE: 1777 jobs in memory (cached)
[2026-02-01T10:34:08.623Z] [BOT] ✅ Loaded V2 database: 1777 jobs
💾 DISK STATE: 1777 jobs on disk
[2026-02-01T10:34:08.628Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1777
[2026-02-01T10:34:08.631Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:34:08.631Z] [BOT] 💾 AFTER MERGE: 1777 jobs (merged disk + memory)
[2026-02-01T10:34:08.632Z] [BOT] ✅ No jobs to archive (all 1777 jobs within 7-day window)
[2026-02-01T10:34:08.728Z] [BOT] 💾 Saved posted_jobs.json: 1777 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:34:08.728Z] [BOT] ✅ Database saved successfully
[2026-02-01T10:34:10.770Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3922) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*