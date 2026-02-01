# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T10:15:01.317Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T10:14:02.896Z] ========================================
[2026-02-01T10:14:02.898Z] Discord Bot Execution Log
[2026-02-01T10:14:02.898Z] Environment: GitHub Actions
[2026-02-01T10:14:02.898Z] Node Version: v20.20.0
[2026-02-01T10:14:02.898Z] ========================================
[2026-02-01T10:14:02.898Z] Environment Variables Check:
[2026-02-01T10:14:02.898Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T10:14:02.898Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T10:14:02.899Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T10:14:02.899Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T10:14:02.899Z] 
Multi-Channel Configuration:
[2026-02-01T10:14:02.899Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T10:14:02.899Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T10:14:02.899Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T10:14:02.899Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T10:14:02.899Z] 
Data Files Check:
[2026-02-01T10:14:02.900Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58354 bytes)
[2026-02-01T10:14:02.959Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9442377 bytes)
[2026-02-01T10:14:02.959Z] 
========================================
[2026-02-01T10:14:02.959Z] Starting Enhanced Discord Bot...
[2026-02-01T10:14:02.959Z] ========================================
[2026-02-01T10:14:03.459Z] [BOT] ✅ Loaded V2 database: 1757 jobs
[2026-02-01T10:14:04.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T10:14:04.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T10:14:04.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T10:14:04.419Z] [BOT] ✅ Loaded pending queue: 2943 total (1146 pending, 50 enriched, 1747 posted)
[2026-02-01T10:14:04.419Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T10:14:04.419Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:14:04.421Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T10:14:04.421Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T10:14:04.421Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T10:14:04.422Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T10:14:04.422Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T10:14:04.423Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T10:14:04.423Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T10:14:04.424Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T10:14:04.424Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T10:14:04.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T10:14:04.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T10:14:04.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T10:14:04.426Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T10:14:04.446Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T10:14:04.447Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering at University of Texas - Austin
[2026-02-01T10:14:04.447Z] [BOT] 🚫 Skipping blacklisted job: Senior Machine Learning Engineer - Ads R&D at spotify
[2026-02-01T10:14:04.606Z] [BOT] ✅ Loaded pending queue: 2943 total (1146 pending, 50 enriched, 1747 posted)
[2026-02-01T10:14:04.806Z] [BOT] ✅ Saved pending queue: 2941 total (1146 pending, 48 enriched, 1747 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 40 jobs (2 blacklisted)
[2026-02-01T10:14:04.806Z] [BOT] 📋 After data quality filter: 40 jobs (0 invalid)
[2026-02-01T10:14:04.807Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
   (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T10:14:04.807Z] [BOT] - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
   - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T10:14:04.811Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T10:14:04.812Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics
[2026-02-01T10:14:04.812Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:04.828Z] [BOT ERROR] (node:3020) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T10:14:05.429Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_c910d474 Dynamics in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics
[2026-02-01T10:14:05.430Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_c910d474 Dynamics → category channel (1 total channels)
[2026-02-01T10:14:05.431Z] [BOT] 💾 BEFORE MERGE: 1758 jobs in memory (cached)
[2026-02-01T10:14:05.480Z] [BOT] ✅ Loaded V2 database: 1757 jobs
💾 DISK STATE: 1757 jobs on disk
[2026-02-01T10:14:05.480Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1758
[2026-02-01T10:14:05.484Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:05.484Z] [BOT] 💾 AFTER MERGE: 1758 jobs (merged disk + memory)
[2026-02-01T10:14:05.485Z] [BOT] ✅ No jobs to archive (all 1758 jobs within 7-day window)
[2026-02-01T10:14:05.594Z] [BOT] 💾 Saved posted_jobs.json: 1758 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:07.312Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_c910d474 Dynamics in #📍・JID_6daed763
[2026-02-01T10:14:07.312Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:14:07.313Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_c910d474 Dynamics → location channel (2 total channels)
[2026-02-01T10:14:07.313Z] [BOT] 💾 BEFORE MERGE: 1758 jobs in memory (cached)
[2026-02-01T10:14:07.359Z] [BOT] ✅ Loaded V2 database: 1758 jobs
💾 DISK STATE: 1758 jobs on disk
[2026-02-01T10:14:07.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1758
[2026-02-01T10:14:07.364Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_c910d474 Dynamics (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:07.364Z] [BOT] 💾 AFTER MERGE: 1758 jobs (merged disk + memory)
[2026-02-01T10:14:07.365Z] [BOT] ✅ No jobs to archive (all 1758 jobs within 7-day window)
[2026-02-01T10:14:07.473Z] [BOT] 💾 Saved posted_jobs.json: 1758 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:08.976Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI)" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-02-01T10:14:08.976Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:09.224Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb
[2026-02-01T10:14:09.225Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-01T10:14:09.225Z] [BOT] 💾 BEFORE MERGE: 1759 jobs in memory (cached)
[2026-02-01T10:14:09.272Z] [BOT] ✅ Loaded V2 database: 1758 jobs
💾 DISK STATE: 1758 jobs on disk
[2026-02-01T10:14:09.273Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1759
[2026-02-01T10:14:09.276Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:09.276Z] [BOT] 💾 AFTER MERGE: 1759 jobs (merged disk + memory)
[2026-02-01T10:14:09.277Z] [BOT] ✅ No jobs to archive (all 1759 jobs within 7-day window)
[2026-02-01T10:14:09.380Z] [BOT] 💾 Saved posted_jobs.json: 1759 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:11.117Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #🌲・JID_efdf5921
[2026-02-01T10:14:11.117Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T10:14:11.117Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb → location channel (2 total channels)
[2026-02-01T10:14:11.118Z] [BOT] 💾 BEFORE MERGE: 1759 jobs in memory (cached)
[2026-02-01T10:14:11.166Z] [BOT] ✅ Loaded V2 database: 1759 jobs
💾 DISK STATE: 1759 jobs on disk
[2026-02-01T10:14:11.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1759
[2026-02-01T10:14:11.170Z] [BOT] 🔀 Deep merged: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:11.170Z] [BOT] 💾 AFTER MERGE: 1759 jobs (merged disk + memory)
[2026-02-01T10:14:11.172Z] [BOT] ✅ No jobs to archive (all 1759 jobs within 7-day window)
[2026-02-01T10:14:11.276Z] [BOT] 💾 Saved posted_jobs.json: 1759 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:12.777Z] [BOT] 📍 [ROUTING] "Applications Development Engineer - Bbp" @ ORG_fb8c4aa0 Corporation
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T10:14:12.778Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:14.260Z] [BOT] ✅ Posted message: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #💻・tech-jobs
  ✅ Industry: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation
[2026-02-01T10:14:14.261Z] [BOT] 💾 Added channel posting: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation → category channel (1 total channels)
[2026-02-01T10:14:14.261Z] [BOT] 💾 BEFORE MERGE: 1760 jobs in memory (cached)
[2026-02-01T10:14:14.310Z] [BOT] ✅ Loaded V2 database: 1759 jobs
💾 DISK STATE: 1759 jobs on disk
[2026-02-01T10:14:14.311Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1760
[2026-02-01T10:14:14.314Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:14.314Z] [BOT] 💾 AFTER MERGE: 1760 jobs (merged disk + memory)
[2026-02-01T10:14:14.315Z] [BOT] ✅ No jobs to archive (all 1760 jobs within 7-day window)
[2026-02-01T10:14:14.445Z] [BOT] 💾 Saved posted_jobs.json: 1760 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:16.321Z] [BOT] ✅ Posted message: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #🌉・JID_739bbc0b
[2026-02-01T10:14:16.321Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:14:16.321Z] [BOT] 💾 Added channel posting: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation → location channel (2 total channels)
[2026-02-01T10:14:16.322Z] [BOT] 💾 BEFORE MERGE: 1760 jobs in memory (cached)
[2026-02-01T10:14:16.368Z] [BOT] ✅ Loaded V2 database: 1760 jobs
💾 DISK STATE: 1760 jobs on disk
[2026-02-01T10:14:16.368Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1760
[2026-02-01T10:14:16.371Z] [BOT] 🔀 Deep merged: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:16.371Z] [BOT] 💾 AFTER MERGE: 1760 jobs (merged disk + memory)
[2026-02-01T10:14:16.372Z] [BOT] ✅ No jobs to archive (all 1760 jobs within 7-day window)
[2026-02-01T10:14:16.469Z] [BOT] 💾 Saved posted_jobs.json: 1760 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:17.971Z] [BOT] 📍 [ROUTING] "System Dev Engineer I, Analytics ADC" @ ORG_49d2dc07
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:18.207Z] [BOT] ✅ Posted message: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07
[2026-02-01T10:14:18.208Z] [BOT] 💾 Added channel posting: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 → category channel (1 total channels)
[2026-02-01T10:14:18.208Z] [BOT] 💾 BEFORE MERGE: 1761 jobs in memory (cached)
[2026-02-01T10:14:18.253Z] [BOT] ✅ Loaded V2 database: 1760 jobs
💾 DISK STATE: 1760 jobs on disk
[2026-02-01T10:14:18.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1761
[2026-02-01T10:14:18.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:18.257Z] [BOT] 💾 AFTER MERGE: 1761 jobs (merged disk + memory)
[2026-02-01T10:14:18.258Z] [BOT] ✅ No jobs to archive (all 1761 jobs within 7-day window)
[2026-02-01T10:14:18.376Z] [BOT] 💾 Saved posted_jobs.json: 1761 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:20.237Z] [BOT] ✅ Posted message: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 in #📍・JID_6daed763
[2026-02-01T10:14:20.238Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:14:20.238Z] [BOT] 💾 Added channel posting: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 → location channel (2 total channels)
[2026-02-01T10:14:20.238Z] [BOT] 💾 BEFORE MERGE: 1761 jobs in memory (cached)
[2026-02-01T10:14:20.284Z] [BOT] ✅ Loaded V2 database: 1761 jobs
💾 DISK STATE: 1761 jobs on disk
[2026-02-01T10:14:20.284Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1761
[2026-02-01T10:14:20.287Z] [BOT] 🔀 Deep merged: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:20.287Z] [BOT] 💾 AFTER MERGE: 1761 jobs (merged disk + memory)
[2026-02-01T10:14:20.288Z] [BOT] ✅ No jobs to archive (all 1761 jobs within 7-day window)
[2026-02-01T10:14:20.394Z] [BOT] 💾 Saved posted_jobs.json: 1761 active jobs
[2026-02-01T10:14:20.398Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:21.897Z] [BOT] 📍 [ROUTING] "GPU Architecture Engineer" @ ORG_0890f456
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:22.204Z] [BOT] ✅ Posted message: GPU Architecture Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: GPU Architecture Engineer @ ORG_0890f456
[2026-02-01T10:14:22.204Z] [BOT] 💾 Added channel posting: GPU Architecture Engineer @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T10:14:22.204Z] [BOT] 💾 BEFORE MERGE: 1762 jobs in memory (cached)
[2026-02-01T10:14:22.251Z] [BOT] ✅ Loaded V2 database: 1761 jobs
💾 DISK STATE: 1761 jobs on disk
[2026-02-01T10:14:22.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1762
[2026-02-01T10:14:22.254Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:22.254Z] [BOT] 💾 AFTER MERGE: 1762 jobs (merged disk + memory)
[2026-02-01T10:14:22.255Z] [BOT] ✅ No jobs to archive (all 1762 jobs within 7-day window)
[2026-02-01T10:14:22.354Z] [BOT] 💾 Saved posted_jobs.json: 1762 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:24.070Z] [BOT] ✅ Posted message: GPU Architecture Engineer @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T10:14:24.070Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:14:24.071Z] [BOT] 💾 Added channel posting: GPU Architecture Engineer @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T10:14:24.071Z] [BOT] 💾 BEFORE MERGE: 1762 jobs in memory (cached)
[2026-02-01T10:14:24.117Z] [BOT] ✅ Loaded V2 database: 1762 jobs
💾 DISK STATE: 1762 jobs on disk
[2026-02-01T10:14:24.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1762
[2026-02-01T10:14:24.120Z] [BOT] 🔀 Deep merged: GPU Architecture Engineer @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:24.120Z] [BOT] 💾 AFTER MERGE: 1762 jobs (merged disk + memory)
[2026-02-01T10:14:24.121Z] [BOT] ✅ No jobs to archive (all 1762 jobs within 7-day window)
[2026-02-01T10:14:24.225Z] [BOT] 💾 Saved posted_jobs.json: 1762 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:25.727Z] [BOT] 📍 [ROUTING] "OEM Account Applications Engineer" @ ORG_0890f456
[2026-02-01T10:14:25.727Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:26.034Z] [BOT] ✅ Posted message: OEM Account Applications Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-02-01T10:14:26.035Z] [BOT] ✅ Industry: OEM Account Applications Engineer @ ORG_0890f456
[2026-02-01T10:14:26.035Z] [BOT] 💾 Added channel posting: OEM Account Applications Engineer @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T10:14:26.035Z] [BOT] 💾 BEFORE MERGE: 1763 jobs in memory (cached)
[2026-02-01T10:14:26.083Z] [BOT] ✅ Loaded V2 database: 1762 jobs
💾 DISK STATE: 1762 jobs on disk
[2026-02-01T10:14:26.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1763
[2026-02-01T10:14:26.086Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:26.086Z] [BOT] 💾 AFTER MERGE: 1763 jobs (merged disk + memory)
[2026-02-01T10:14:26.087Z] [BOT] ✅ No jobs to archive (all 1763 jobs within 7-day window)
[2026-02-01T10:14:26.207Z] [BOT] 💾 Saved posted_jobs.json: 1763 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:27.886Z] [BOT] ✅ Posted message: OEM Account Applications Engineer @ ORG_0890f456 in #🌉・JID_739bbc0b
[2026-02-01T10:14:27.886Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:14:27.886Z] [BOT] 💾 Added channel posting: OEM Account Applications Engineer @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T10:14:27.887Z] [BOT] 💾 BEFORE MERGE: 1763 jobs in memory (cached)
[2026-02-01T10:14:27.932Z] [BOT] ✅ Loaded V2 database: 1763 jobs
💾 DISK STATE: 1763 jobs on disk
[2026-02-01T10:14:27.933Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1763
[2026-02-01T10:14:27.936Z] [BOT] 🔀 Deep merged: OEM Account Applications Engineer @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:27.936Z] [BOT] 💾 AFTER MERGE: 1763 jobs (merged disk + memory)
[2026-02-01T10:14:27.937Z] [BOT] ✅ No jobs to archive (all 1763 jobs within 7-day window)
[2026-02-01T10:14:28.057Z] [BOT] 💾 Saved posted_jobs.json: 1763 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:29.557Z] [BOT] 📍 [ROUTING] "AI/ML Software Engineer Graduate (Data Platform TikTok BP)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T10:14:29.891Z] [BOT] ✅ Posted message: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb
[2026-02-01T10:14:29.892Z] [BOT] 💾 Added channel posting: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T10:14:29.892Z] [BOT] 💾 BEFORE MERGE: 1764 jobs in memory (cached)
[2026-02-01T10:14:29.939Z] [BOT] ✅ Loaded V2 database: 1763 jobs
💾 DISK STATE: 1763 jobs on disk
[2026-02-01T10:14:29.939Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1764
[2026-02-01T10:14:29.942Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:29.942Z] [BOT] 💾 AFTER MERGE: 1764 jobs (merged disk + memory)
[2026-02-01T10:14:29.943Z] [BOT] ✅ No jobs to archive (all 1764 jobs within 7-day window)
[2026-02-01T10:14:30.046Z] [BOT] 💾 Saved posted_jobs.json: 1764 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:31.799Z] [BOT] ✅ Posted message: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:14:31.799Z] [BOT] 💾 Added channel posting: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T10:14:31.800Z] [BOT] 💾 BEFORE MERGE: 1764 jobs in memory (cached)
[2026-02-01T10:14:31.846Z] [BOT] ✅ Loaded V2 database: 1764 jobs
💾 DISK STATE: 1764 jobs on disk
[2026-02-01T10:14:31.847Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1764
[2026-02-01T10:14:31.850Z] [BOT] 🔀 Deep merged: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:31.850Z] [BOT] 💾 AFTER MERGE: 1764 jobs (merged disk + memory)
[2026-02-01T10:14:31.851Z] [BOT] ✅ No jobs to archive (all 1764 jobs within 7-day window)
[2026-02-01T10:14:31.960Z] [BOT] 💾 Saved posted_jobs.json: 1764 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:36.462Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T10:14:36.463Z] [BOT] 📍 [ROUTING] "Workday Payroll Specialist" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-02-01T10:14:36.463Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T10:14:36.803Z] [BOT] ✅ Posted message: Workday Payroll Specialist @ spotify in #🤖・ai-jobs
[2026-02-01T10:14:36.803Z] [BOT] ✅ Industry: Workday Payroll Specialist @ spotify
[2026-02-01T10:14:36.804Z] [BOT] 💾 Added channel posting: Workday Payroll Specialist @ spotify → category channel (1 total channels)
[2026-02-01T10:14:36.804Z] [BOT] 💾 BEFORE MERGE: 1765 jobs in memory (cached)
[2026-02-01T10:14:36.851Z] [BOT] ✅ Loaded V2 database: 1764 jobs
💾 DISK STATE: 1764 jobs on disk
[2026-02-01T10:14:36.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1765
[2026-02-01T10:14:36.855Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:36.855Z] [BOT] 💾 AFTER MERGE: 1765 jobs (merged disk + memory)
[2026-02-01T10:14:36.856Z] [BOT] ✅ No jobs to archive (all 1765 jobs within 7-day window)
[2026-02-01T10:14:36.959Z] [BOT] 💾 Saved posted_jobs.json: 1765 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:38.751Z] [BOT] ✅ Posted message: Workday Payroll Specialist @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T10:14:38.751Z] [BOT] 💾 Added channel posting: Workday Payroll Specialist @ spotify → location channel (2 total channels)
[2026-02-01T10:14:38.751Z] [BOT] 💾 BEFORE MERGE: 1765 jobs in memory (cached)
[2026-02-01T10:14:38.800Z] [BOT] ✅ Loaded V2 database: 1765 jobs
💾 DISK STATE: 1765 jobs on disk
[2026-02-01T10:14:38.800Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1765
[2026-02-01T10:14:38.804Z] [BOT] 🔀 Deep merged: Workday Payroll Specialist @ spotify (disk: 1 channels → merged: 2 channels)
[2026-02-01T10:14:38.804Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1765 jobs (merged disk + memory)
[2026-02-01T10:14:38.805Z] [BOT] ✅ No jobs to archive (all 1765 jobs within 7-day window)
[2026-02-01T10:14:38.915Z] [BOT] 💾 Saved posted_jobs.json: 1765 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:43.415Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T10:14:43.416Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - PhD" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T10:14:43.416Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T10:14:43.734Z] [BOT] ✅ Posted message: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb
[2026-02-01T10:14:43.735Z] [BOT] 💾 Added channel posting: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T10:14:43.735Z] [BOT] 💾 BEFORE MERGE: 1766 jobs in memory (cached)
[2026-02-01T10:14:43.781Z] [BOT] ✅ Loaded V2 database: 1765 jobs
💾 DISK STATE: 1765 jobs on disk
[2026-02-01T10:14:43.781Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1766
[2026-02-01T10:14:43.784Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:43.784Z] [BOT] 💾 AFTER MERGE: 1766 jobs (merged disk + memory)
[2026-02-01T10:14:43.785Z] [BOT] ✅ No jobs to archive (all 1766 jobs within 7-day window)
[2026-02-01T10:14:43.891Z] [BOT] 💾 Saved posted_jobs.json: 1766 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:45.568Z] [BOT] ✅ Posted message: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T10:14:45.568Z] [BOT] 💾 Added channel posting: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T10:14:45.568Z] [BOT] 💾 BEFORE MERGE: 1766 jobs in memory (cached)
[2026-02-01T10:14:45.615Z] [BOT] ✅ Loaded V2 database: 1766 jobs
💾 DISK STATE: 1766 jobs on disk
[2026-02-01T10:14:45.616Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1766
[2026-02-01T10:14:45.619Z] [BOT] 🔀 Deep merged: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:45.619Z] [BOT] 💾 AFTER MERGE: 1766 jobs (merged disk + memory)
[2026-02-01T10:14:45.620Z] [BOT] ✅ No jobs to archive (all 1766 jobs within 7-day window)
[2026-02-01T10:14:45.724Z] [BOT] 💾 Saved posted_jobs.json: 1766 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:50.226Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T10:14:50.226Z] [BOT] 📍 [ROUTING] "Implementation Analyst" @ ORG_53b59486 Financial Software
[2026-02-01T10:14:50.227Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T10:14:50.491Z] [BOT] ✅ Posted message: Implementation Analyst @ ORG_53b59486 Financial Software  in #💰・finance-jobs
  ✅ Industry: Implementation Analyst @ ORG_53b59486 Financial Software
[2026-02-01T10:14:50.492Z] [BOT] 💾 Added channel posting: Implementation Analyst @ ORG_53b59486 Financial Software  → category channel (1 total channels)
[2026-02-01T10:14:50.492Z] [BOT] 💾 BEFORE MERGE: 1767 jobs in memory (cached)
[2026-02-01T10:14:50.544Z] [BOT] ✅ Loaded V2 database: 1766 jobs
💾 DISK STATE: 1766 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1767
[2026-02-01T10:14:50.550Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:50.550Z] [BOT] 💾 AFTER MERGE: 1767 jobs (merged disk + memory)
[2026-02-01T10:14:50.552Z] [BOT] ✅ No jobs to archive (all 1767 jobs within 7-day window)
[2026-02-01T10:14:50.674Z] [BOT] 💾 Saved posted_jobs.json: 1767 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:52.566Z] [BOT] ✅ Posted message: Implementation Analyst @ ORG_53b59486 Financial Software  in #📍・JID_6daed763
[2026-02-01T10:14:52.566Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T10:14:52.566Z] [BOT] 💾 Added channel posting: Implementation Analyst @ ORG_53b59486 Financial Software  → location channel (2 total channels)
[2026-02-01T10:14:52.567Z] [BOT] 💾 BEFORE MERGE: 1767 jobs in memory (cached)
[2026-02-01T10:14:52.613Z] [BOT] ✅ Loaded V2 database: 1767 jobs
💾 DISK STATE: 1767 jobs on disk
[2026-02-01T10:14:52.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1767
[2026-02-01T10:14:52.617Z] [BOT] 🔀 Deep merged: Implementation Analyst @ ORG_53b59486 Financial Software  (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T10:14:52.617Z] [BOT] 💾 AFTER MERGE: 1767 jobs (merged disk + memory)
[2026-02-01T10:14:52.618Z] [BOT] ✅ No jobs to archive (all 1767 jobs within 7-day window)
[2026-02-01T10:14:52.736Z] [BOT] 💾 Saved posted_jobs.json: 1767 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:57.234Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T10:14:57.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5ec75d5c-..." not found, but found as SHA256 "e9c43e5f9da5e2b2"
[2026-02-01T10:14:57.236Z] [BOT] ⏭️  Skipping duplicate: JID_8bb23850 (posted within 7 days)
[2026-02-01T10:14:57.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_706371fa..." not found, but found as SHA256 "7d40e176dc1ae50c"
[2026-02-01T10:14:57.237Z] [BOT] ⏭️  Skipping duplicate: JID_b263e2b3 (posted within 7 days)
[2026-02-01T10:14:57.237Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09242d96..." not found, but found as SHA256 "32c1fe54b5dc793e"
⏭️  Skipping duplicate: JID_75c19651 (posted within 7 days)
[2026-02-01T10:14:57.237Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55b7f60d..." not found, but found as SHA256 "c64c3ee0fa2b078a"
⏭️  Skipping duplicate: JID_6796d1d6-CH_a50ea67b (posted within 7 days)
[2026-02-01T10:14:57.238Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c444260a..." not found, but found as SHA256 "4ec74a5eaf9f2ce3"
[2026-02-01T10:14:57.238Z] [BOT] ⏭️  Skipping duplicate: JID_12411879-2026_r170 (posted within 7 days)
[2026-02-01T10:14:57.238Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_320be629..." not found, but found as SHA256 "6e5aaceaccb6a053"
[2026-02-01T10:14:57.238Z] [BOT] ⏭️  Skipping duplicate: JID_67b76248-bbp_2531350 (posted within 7 days)
[2026-02-01T10:14:57.238Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5de9a693..." not found, but found as SHA256 "4df143142b79f795"
[2026-02-01T10:14:57.238Z] [BOT] ⏭️  Skipping duplicate: JID_2e34dc7c (posted within 7 days)
[2026-02-01T10:14:57.238Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "15e2a7f0c5ec213b"
[2026-02-01T10:14:57.238Z] [BOT] ⏭️  Skipping duplicate: JID_ccaa0764-2025_jr2002495 (posted within 7 days)
[2026-02-01T10:14:57.239Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "63fad1de1acfa8ab"
[2026-02-01T10:14:57.239Z] [BOT] ⏭️  Skipping duplicate: JID_b099875f-2025_jr2002780 (posted within 7 days)
[2026-02-01T10:14:57.239Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e7867d43..." not found, but found as SHA256 "4416a588331536a3"
⏭️  Skipping duplicate: JID_6796d1d6-CH_d2a1334e (posted within 7 days)
[2026-02-01T10:14:57.383Z] [BOT] ✅ Loaded pending queue: 2941 total (1146 pending, 48 enriched, 1747 posted)
[2026-02-01T10:14:57.576Z] [BOT] ✅ Saved pending queue: 2941 total (1146 pending, 38 enriched, 1757 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T10:14:57.677Z] [BOT] 📂 Loaded 11838 existing routing entries
[2026-02-01T10:14:57.805Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11848
   Timestamp: 2026-02-01T10:14:57.763Z
[2026-02-01T10:14:57.806Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T10:14:57.806Z] [BOT] Total attempts: 30
   Successful: 20
   Failed: 0
   Skipped: 10
[2026-02-01T10:14:57.806Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T10:14:57.806Z] [BOT] Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・JID_739bbc0b: 5 posts
     3. #📍・JID_6daed763: 3 posts
[2026-02-01T10:14:57.806Z] [BOT] 4. #🌲・JID_efdf5921: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T10:14:57.807Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1767 jobs in memory (cached)
[2026-02-01T10:14:57.857Z] [BOT] ✅ Loaded V2 database: 1767 jobs
💾 DISK STATE: 1767 jobs on disk
[2026-02-01T10:14:57.862Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1767
[2026-02-01T10:14:57.865Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T10:14:57.865Z] [BOT] 💾 AFTER MERGE: 1767 jobs (merged disk + memory)
[2026-02-01T10:14:57.866Z] [BOT] ✅ No jobs to archive (all 1767 jobs within 7-day window)
[2026-02-01T10:14:58.000Z] [BOT] 💾 Saved posted_jobs.json: 1767 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T10:14:58.000Z] [BOT] ✅ Database saved successfully
[2026-02-01T10:15:00.027Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3020) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*