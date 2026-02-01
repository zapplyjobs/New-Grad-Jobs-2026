# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T05:41:09.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T05:40:21.495Z] ========================================
[2026-02-01T05:40:21.497Z] Discord Bot Execution Log
[2026-02-01T05:40:21.497Z] Environment: GitHub Actions
[2026-02-01T05:40:21.497Z] Node Version: v20.20.0
[2026-02-01T05:40:21.497Z] ========================================
[2026-02-01T05:40:21.497Z] Environment Variables Check:
[2026-02-01T05:40:21.497Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T05:40:21.497Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T05:40:21.497Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T05:40:21.497Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T05:40:21.497Z] 
Multi-Channel Configuration:
[2026-02-01T05:40:21.497Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T05:40:21.498Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T05:40:21.498Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T05:40:21.498Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T05:40:21.498Z] 
Data Files Check:
[2026-02-01T05:40:21.499Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59919 bytes)
[2026-02-01T05:40:21.545Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8995896 bytes)
[2026-02-01T05:40:21.545Z] 
========================================
[2026-02-01T05:40:21.545Z] Starting Enhanced Discord Bot...
[2026-02-01T05:40:21.545Z] ========================================
[2026-02-01T05:40:22.111Z] [BOT] ✅ Loaded V2 database: 1617 jobs
[2026-02-01T05:40:22.899Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T05:40:22.900Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T05:40:22.900Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T05:40:23.022Z] [BOT] ✅ Loaded pending queue: 2944 total (1287 pending, 50 enriched, 1607 posted)
[2026-02-01T05:40:23.023Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T05:40:23.023Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T05:40:23.024Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T05:40:23.024Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T05:40:23.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T05:40:23.025Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T05:40:23.025Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T05:40:23.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T05:40:23.025Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T05:40:23.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T05:40:23.026Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T05:40:23.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T05:40:23.026Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T05:40:23.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T05:40:23.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-02-01T05:40:23.027Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T05:40:23.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T05:40:23.040Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T05:40:23.041Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T05:40:23.041Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T05:40:23.042Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-02-01T05:40:23.042Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Associate Software Engineer @ ORG_e5ca4df3 Group: nashville, san diego
[2026-02-01T05:40:23.042Z] [BOT] - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T05:40:23.045Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T05:40:23.046Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3 Group
[2026-02-01T05:40:23.046Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:40:23.063Z] [BOT ERROR] (node:3818) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T05:40:23.320Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
[2026-02-01T05:40:23.320Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3 Group
[2026-02-01T05:40:23.321Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_e5ca4df3 Group → category channel (1 total channels)
[2026-02-01T05:40:23.321Z] [BOT] 💾 BEFORE MERGE: 1618 jobs in memory (cached)
[2026-02-01T05:40:23.360Z] [BOT] ✅ Loaded V2 database: 1617 jobs
[2026-02-01T05:40:23.360Z] [BOT] 💾 DISK STATE: 1617 jobs on disk
[2026-02-01T05:40:23.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1618
[2026-02-01T05:40:23.365Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:23.365Z] [BOT] 💾 AFTER MERGE: 1618 jobs (merged disk + memory)
[2026-02-01T05:40:23.366Z] [BOT] ✅ No jobs to archive (all 1618 jobs within 7-day window)
[2026-02-01T05:40:23.467Z] [BOT] 💾 Saved posted_jobs.json: 1618 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:25.141Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_e5ca4df3 Group in #📍・JID_6daed763
[2026-02-01T05:40:25.141Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T05:40:25.141Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_e5ca4df3 Group → location channel (2 total channels)
[2026-02-01T05:40:25.141Z] [BOT] 💾 BEFORE MERGE: 1618 jobs in memory (cached)
[2026-02-01T05:40:25.172Z] [BOT] ✅ Loaded V2 database: 1618 jobs
[2026-02-01T05:40:25.172Z] [BOT] 💾 DISK STATE: 1618 jobs on disk
[2026-02-01T05:40:25.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1618
[2026-02-01T05:40:25.176Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_e5ca4df3 Group (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:25.176Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1618 jobs (merged disk + memory)
[2026-02-01T05:40:25.177Z] [BOT] ✅ No jobs to archive (all 1618 jobs within 7-day window)
[2026-02-01T05:40:25.268Z] [BOT] 💾 Saved posted_jobs.json: 1618 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:26.769Z] [BOT] 📍 [ROUTING] "Software Engineer 1 with AWS & Python" @ ORG_a35c6c02
   Category: TECH (matched: "software")
[2026-02-01T05:40:26.769Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:40:26.933Z] [BOT] ✅ Posted message: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 in #💻・tech-jobs
[2026-02-01T05:40:26.933Z] [BOT] ✅ Industry: Software Engineer 1 with AWS & Python @ ORG_a35c6c02
[2026-02-01T05:40:26.933Z] [BOT] 💾 Added channel posting: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 → category channel (1 total channels)
[2026-02-01T05:40:26.933Z] [BOT] 💾 BEFORE MERGE: 1619 jobs in memory (cached)
[2026-02-01T05:40:26.966Z] [BOT] ✅ Loaded V2 database: 1618 jobs
💾 DISK STATE: 1618 jobs on disk
[2026-02-01T05:40:26.967Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1619
[2026-02-01T05:40:26.970Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:26.970Z] [BOT] 💾 AFTER MERGE: 1619 jobs (merged disk + memory)
[2026-02-01T05:40:26.971Z] [BOT] ✅ No jobs to archive (all 1619 jobs within 7-day window)
[2026-02-01T05:40:27.062Z] [BOT] 💾 Saved posted_jobs.json: 1619 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:28.827Z] [BOT] ✅ Posted message: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T05:40:28.828Z] [BOT] 💾 Added channel posting: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 → location channel (2 total channels)
💾 BEFORE MERGE: 1619 jobs in memory (cached)
[2026-02-01T05:40:28.859Z] [BOT] ✅ Loaded V2 database: 1619 jobs
💾 DISK STATE: 1619 jobs on disk
[2026-02-01T05:40:28.859Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1619
[2026-02-01T05:40:28.863Z] [BOT] 🔀 Deep merged: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:28.863Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1619 jobs (merged disk + memory)
[2026-02-01T05:40:28.864Z] [BOT] ✅ No jobs to archive (all 1619 jobs within 7-day window)
[2026-02-01T05:40:28.951Z] [BOT] 💾 Saved posted_jobs.json: 1619 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:30.452Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - iOS - iOS" @ McDonald's
[2026-02-01T05:40:30.452Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:40:30.638Z] [BOT] ✅ Posted message: Software Engineer 1 - iOS - iOS @ McDonald's in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - iOS - iOS @ McDonald's
[2026-02-01T05:40:30.638Z] [BOT] 💾 Added channel posting: Software Engineer 1 - iOS - iOS @ McDonald's → category channel (1 total channels)
[2026-02-01T05:40:30.639Z] [BOT] 💾 BEFORE MERGE: 1620 jobs in memory (cached)
[2026-02-01T05:40:30.677Z] [BOT] ✅ Loaded V2 database: 1619 jobs
💾 DISK STATE: 1619 jobs on disk
[2026-02-01T05:40:30.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1620
[2026-02-01T05:40:30.681Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:30.681Z] [BOT] 💾 AFTER MERGE: 1620 jobs (merged disk + memory)
[2026-02-01T05:40:30.681Z] [BOT] ✅ No jobs to archive (all 1620 jobs within 7-day window)
[2026-02-01T05:40:30.786Z] [BOT] 💾 Saved posted_jobs.json: 1620 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:32.490Z] [BOT] ✅ Posted message: Software Engineer 1 - iOS - iOS @ McDonald's in #📍・JID_6daed763
[2026-02-01T05:40:32.490Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T05:40:32.490Z] [BOT] 💾 Added channel posting: Software Engineer 1 - iOS - iOS @ McDonald's → location channel (2 total channels)
💾 BEFORE MERGE: 1620 jobs in memory (cached)
[2026-02-01T05:40:32.521Z] [BOT] ✅ Loaded V2 database: 1620 jobs
💾 DISK STATE: 1620 jobs on disk
[2026-02-01T05:40:32.521Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1620
[2026-02-01T05:40:32.524Z] [BOT] 🔀 Deep merged: Software Engineer 1 - iOS - iOS @ McDonald's (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:32.524Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1620 jobs (merged disk + memory)
[2026-02-01T05:40:32.525Z] [BOT] ✅ No jobs to archive (all 1620 jobs within 7-day window)
[2026-02-01T05:40:32.605Z] [BOT] 💾 Saved posted_jobs.json: 1620 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:34.107Z] [BOT] 📍 [ROUTING] "Software Engineering, Associate" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:40:34.316Z] [BOT] ✅ Posted message: Software Engineering, Associate @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Software Engineering, Associate @ ORG_d6d2009d
[2026-02-01T05:40:34.317Z] [BOT] 💾 Added channel posting: Software Engineering, Associate @ ORG_d6d2009d → category channel (1 total channels)
💾 BEFORE MERGE: 1621 jobs in memory (cached)
[2026-02-01T05:40:34.348Z] [BOT] ✅ Loaded V2 database: 1620 jobs
💾 DISK STATE: 1620 jobs on disk
[2026-02-01T05:40:34.348Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1621
[2026-02-01T05:40:34.351Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:34.351Z] [BOT] 💾 AFTER MERGE: 1621 jobs (merged disk + memory)
[2026-02-01T05:40:34.352Z] [BOT] ✅ No jobs to archive (all 1621 jobs within 7-day window)
[2026-02-01T05:40:34.438Z] [BOT] 💾 Saved posted_jobs.json: 1621 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:36.134Z] [BOT] ✅ Posted message: Software Engineering, Associate @ ORG_d6d2009d in #🌉・JID_739bbc0b
[2026-02-01T05:40:36.134Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T05:40:36.134Z] [BOT] 💾 Added channel posting: Software Engineering, Associate @ ORG_d6d2009d → location channel (2 total channels)
💾 BEFORE MERGE: 1621 jobs in memory (cached)
[2026-02-01T05:40:36.165Z] [BOT] ✅ Loaded V2 database: 1621 jobs
💾 DISK STATE: 1621 jobs on disk
[2026-02-01T05:40:36.165Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1621
[2026-02-01T05:40:36.168Z] [BOT] 🔀 Deep merged: Software Engineering, Associate @ ORG_d6d2009d (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:36.168Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1621 jobs (merged disk + memory)
[2026-02-01T05:40:36.169Z] [BOT] ✅ No jobs to archive (all 1621 jobs within 7-day window)
[2026-02-01T05:40:36.264Z] [BOT] 💾 Saved posted_jobs.json: 1621 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:37.767Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate" @ ORG_1bb6fcfb
   Category: TECH (default)
[2026-02-01T05:40:37.767Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T05:40:38.062Z] [BOT] ✅ Posted message: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb
[2026-02-01T05:40:38.063Z] [BOT] 💾 Added channel posting: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T05:40:38.063Z] [BOT] 💾 BEFORE MERGE: 1622 jobs in memory (cached)
[2026-02-01T05:40:38.095Z] [BOT] ✅ Loaded V2 database: 1621 jobs
💾 DISK STATE: 1621 jobs on disk
[2026-02-01T05:40:38.095Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1622
[2026-02-01T05:40:38.098Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:38.098Z] [BOT] 💾 AFTER MERGE: 1622 jobs (merged disk + memory)
[2026-02-01T05:40:38.099Z] [BOT] ✅ No jobs to archive (all 1622 jobs within 7-day window)
[2026-02-01T05:40:38.187Z] [BOT] 💾 Saved posted_jobs.json: 1622 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:39.930Z] [BOT] ✅ Posted message: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T05:40:39.930Z] [BOT] 💾 Added channel posting: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T05:40:39.930Z] [BOT] 💾 BEFORE MERGE: 1622 jobs in memory (cached)
[2026-02-01T05:40:39.962Z] [BOT] ✅ Loaded V2 database: 1622 jobs
💾 DISK STATE: 1622 jobs on disk
[2026-02-01T05:40:39.962Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1622
[2026-02-01T05:40:39.965Z] [BOT] 🔀 Deep merged: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:39.965Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1622 jobs (merged disk + memory)
[2026-02-01T05:40:39.966Z] [BOT] ✅ No jobs to archive (all 1622 jobs within 7-day window)
[2026-02-01T05:40:40.064Z] [BOT] 💾 Saved posted_jobs.json: 1622 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:44.564Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T05:40:44.565Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - TikTok Recommendation" @ ORG_1bb6fcfb
[2026-02-01T05:40:44.565Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T05:40:44.919Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb
[2026-02-01T05:40:44.919Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T05:40:44.919Z] [BOT] 💾 BEFORE MERGE: 1623 jobs in memory (cached)
[2026-02-01T05:40:44.949Z] [BOT] ✅ Loaded V2 database: 1622 jobs
💾 DISK STATE: 1622 jobs on disk
[2026-02-01T05:40:44.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1623
[2026-02-01T05:40:44.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1623 jobs (merged disk + memory)
[2026-02-01T05:40:44.953Z] [BOT] ✅ No jobs to archive (all 1623 jobs within 7-day window)
[2026-02-01T05:40:45.049Z] [BOT] 💾 Saved posted_jobs.json: 1623 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:46.705Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T05:40:46.705Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T05:40:46.705Z] [BOT] 💾 BEFORE MERGE: 1623 jobs in memory (cached)
[2026-02-01T05:40:46.735Z] [BOT] ✅ Loaded V2 database: 1623 jobs
💾 DISK STATE: 1623 jobs on disk
[2026-02-01T05:40:46.735Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1623
[2026-02-01T05:40:46.738Z] [BOT] 🔀 Deep merged: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:46.738Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1623 jobs (merged disk + memory)
[2026-02-01T05:40:46.739Z] [BOT] ✅ No jobs to archive (all 1623 jobs within 7-day window)
[2026-02-01T05:40:46.838Z] [BOT] 💾 Saved posted_jobs.json: 1623 active jobs
[2026-02-01T05:40:46.838Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:48.340Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Agent" @ ORG_d5eef8ad
   Category: AI (matched: "AI/ML")
[2026-02-01T05:40:48.340Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T05:40:48.506Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad - Agent @ ORG_d5eef8ad
[2026-02-01T05:40:48.507Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Agent @ ORG_d5eef8ad → category channel (1 total channels)
[2026-02-01T05:40:48.507Z] [BOT] 💾 BEFORE MERGE: 1624 jobs in memory (cached)
[2026-02-01T05:40:48.540Z] [BOT] ✅ Loaded V2 database: 1623 jobs
💾 DISK STATE: 1623 jobs on disk
[2026-02-01T05:40:48.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1624
[2026-02-01T05:40:48.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:48.543Z] [BOT] 💾 AFTER MERGE: 1624 jobs (merged disk + memory)
[2026-02-01T05:40:48.544Z] [BOT] ✅ No jobs to archive (all 1624 jobs within 7-day window)
[2026-02-01T05:40:48.633Z] [BOT] 💾 Saved posted_jobs.json: 1624 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:50.418Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T05:40:50.418Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Agent @ ORG_d5eef8ad → location channel (2 total channels)
[2026-02-01T05:40:50.418Z] [BOT] 💾 BEFORE MERGE: 1624 jobs in memory (cached)
[2026-02-01T05:40:50.449Z] [BOT] ✅ Loaded V2 database: 1624 jobs
💾 DISK STATE: 1624 jobs on disk
[2026-02-01T05:40:50.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1624
[2026-02-01T05:40:50.452Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Agent @ ORG_d5eef8ad (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:50.452Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1624 jobs (merged disk + memory)
[2026-02-01T05:40:50.453Z] [BOT] ✅ No jobs to archive (all 1624 jobs within 7-day window)
[2026-02-01T05:40:50.540Z] [BOT] 💾 Saved posted_jobs.json: 1624 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:55.041Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-02-01T05:40:55.042Z] [BOT] 📍 [ROUTING] "Data Developer" @ ORG_a258b30f Lending Services
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T05:40:55.043Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T05:40:55.264Z] [BOT] ✅ Posted message: Data Developer @ ORG_a258b30f Lending Services in #📊・JID_fb739488
  ✅ Industry: Data Developer @ ORG_a258b30f Lending Services
[2026-02-01T05:40:55.264Z] [BOT] 💾 Added channel posting: Data Developer @ ORG_a258b30f Lending Services → category channel (1 total channels)
[2026-02-01T05:40:55.264Z] [BOT] 💾 BEFORE MERGE: 1625 jobs in memory (cached)
[2026-02-01T05:40:55.295Z] [BOT] ✅ Loaded V2 database: 1624 jobs
💾 DISK STATE: 1624 jobs on disk
[2026-02-01T05:40:55.295Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1625
[2026-02-01T05:40:55.298Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:40:55.298Z] [BOT] 💾 AFTER MERGE: 1625 jobs (merged disk + memory)
[2026-02-01T05:40:55.299Z] [BOT] ✅ No jobs to archive (all 1625 jobs within 7-day window)
[2026-02-01T05:40:55.396Z] [BOT] 💾 Saved posted_jobs.json: 1625 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:57.095Z] [BOT] ✅ Posted message: Data Developer @ ORG_a258b30f Lending Services in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T05:40:57.095Z] [BOT] 💾 Added channel posting: Data Developer @ ORG_a258b30f Lending Services → location channel (2 total channels)
[2026-02-01T05:40:57.095Z] [BOT] 💾 BEFORE MERGE: 1625 jobs in memory (cached)
[2026-02-01T05:40:57.129Z] [BOT] ✅ Loaded V2 database: 1625 jobs
💾 DISK STATE: 1625 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1625
[2026-02-01T05:40:57.134Z] [BOT] 🔀 Deep merged: Data Developer @ ORG_a258b30f Lending Services (disk: 1 channels → merged: 2 channels)
[2026-02-01T05:40:57.135Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T05:40:57.135Z] [BOT] 💾 AFTER MERGE: 1625 jobs (merged disk + memory)
[2026-02-01T05:40:57.137Z] [BOT] ✅ No jobs to archive (all 1625 jobs within 7-day window)
[2026-02-01T05:40:57.230Z] [BOT] 💾 Saved posted_jobs.json: 1625 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:40:58.732Z] [BOT] 📍 [ROUTING] "Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T05:40:58.732Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T05:40:58.732Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T05:40:59.248Z] [BOT] ✅ Posted message: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📊・JID_fb739488
  ✅ Industry: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2026-02-01T05:40:59.249Z] [BOT] 💾 Added channel posting: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b → category channel (1 total channels)
💾 BEFORE MERGE: 1626 jobs in memory (cached)
[2026-02-01T05:40:59.279Z] [BOT] ✅ Loaded V2 database: 1625 jobs
💾 DISK STATE: 1625 jobs on disk
[2026-02-01T05:40:59.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1626
[2026-02-01T05:40:59.282Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1626 jobs (merged disk + memory)
[2026-02-01T05:40:59.283Z] [BOT] ✅ No jobs to archive (all 1626 jobs within 7-day window)
[2026-02-01T05:40:59.368Z] [BOT] 💾 Saved posted_jobs.json: 1626 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:41:00.869Z] [BOT] 📍 [ROUTING] "Information Systems - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T05:41:00.870Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T05:41:01.002Z] [BOT] ✅ Posted message: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📊・JID_fb739488
  ✅ Industry: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2026-02-01T05:41:01.002Z] [BOT] 💾 Added channel posting: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b → category channel (1 total channels)
💾 BEFORE MERGE: 1627 jobs in memory (cached)
[2026-02-01T05:41:01.034Z] [BOT] ✅ Loaded V2 database: 1626 jobs
💾 DISK STATE: 1626 jobs on disk
[2026-02-01T05:41:01.034Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1627
[2026-02-01T05:41:01.037Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:41:01.037Z] [BOT] 💾 AFTER MERGE: 1627 jobs (merged disk + memory)
[2026-02-01T05:41:01.038Z] [BOT] ✅ No jobs to archive (all 1627 jobs within 7-day window)
[2026-02-01T05:41:01.125Z] [BOT] 💾 Saved posted_jobs.json: 1627 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:41:05.628Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T05:41:05.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7f93600c..." not found, but found as SHA256 "e17ddafc6cd0c756"
[2026-02-01T05:41:05.629Z] [BOT] ⏭️  Skipping duplicate: JID_56769918-tn_r37023-1 (posted within 7 days)
[2026-02-01T05:41:05.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_27853d36..." not found, but found as SHA256 "592e77d461bdfa64"
[2026-02-01T05:41:05.630Z] [BOT] ⏭️  Skipping duplicate: JID_27853d36 (posted within 7 days)
[2026-02-01T05:41:05.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a6b0eb7e-..." not found, but found as SHA256 "dfa9ff29fd6b0ddd"
[2026-02-01T05:41:05.630Z] [BOT] ⏭️  Skipping duplicate: JID_6e2c4eb6 (posted within 7 days)
[2026-02-01T05:41:05.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_56463eaa..." not found, but found as SHA256 "66c66e3653380be2"
[2026-02-01T05:41:05.630Z] [BOT] ⏭️  Skipping duplicate: JID_7cf8c7ec (posted within 7 days)
[2026-02-01T05:41:05.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cc84de06..." not found, but found as SHA256 "c58cbbf24a5548ae"
⏭️  Skipping duplicate: JID_6796d1d6-CH_9eb8de67 (posted within 7 days)
[2026-02-01T05:41:05.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5091db2..." not found, but found as SHA256 "14e04c318e2481c6"
[2026-02-01T05:41:05.631Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_583d1412 (posted within 7 days)
[2026-02-01T05:41:05.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_318011b4-..." not found, but found as SHA256 "f6e2d4ffc4b3f103"
[2026-02-01T05:41:05.631Z] [BOT] ⏭️  Skipping duplicate: JID_0a01ff65 (posted within 7 days)
[2026-02-01T05:41:05.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7f2f10af..." not found, but found as SHA256 "daa6d9bad5d7573c"
⏭️  Skipping duplicate: JID_9a99bb31 (posted within 7 days)
[2026-02-01T05:41:05.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf889592..." not found, but found as SHA256 "5f64aa9506082c69"
[2026-02-01T05:41:05.632Z] [BOT] ⏭️  Skipping duplicate: JID_b7bad0bf (posted within 7 days)
[2026-02-01T05:41:05.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf889592..." not found, but found as SHA256 "f3ea6d01ad86ce48"
[2026-02-01T05:41:05.632Z] [BOT] ⏭️  Skipping duplicate: JID_8760cf7f (posted within 7 days)
[2026-02-01T05:41:05.747Z] [BOT] ✅ Loaded pending queue: 2944 total (1287 pending, 50 enriched, 1607 posted)
[2026-02-01T05:41:05.926Z] [BOT] ✅ Saved pending queue: 2944 total (1287 pending, 40 enriched, 1617 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T05:41:05.926Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T05:41:06.013Z] [BOT] 📂 Loaded 11698 existing routing entries
[2026-02-01T05:41:06.160Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T05:41:06.160Z] [BOT] New entries: 10
   Total entries: 11708
   Timestamp: 2026-02-01T05:41:06.113Z
[2026-02-01T05:41:06.161Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T05:41:06.161Z] [BOT] Total attempts: 26
   Successful: 18
   Failed: 0
   Skipped: 8
[2026-02-01T05:41:06.161Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T05:41:06.161Z] [BOT] Total posts: 18
   Channels used: 6
   Top channels:
[2026-02-01T05:41:06.161Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #📍・JID_6daed763: 4 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #📊・JID_fb739488: 3 posts
[2026-02-01T05:41:06.162Z] [BOT] 5. #🤖・ai-jobs: 2 posts
[2026-02-01T05:41:06.162Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1627 jobs in memory (cached)
[2026-02-01T05:41:06.194Z] [BOT] ✅ Loaded V2 database: 1627 jobs
💾 DISK STATE: 1627 jobs on disk
[2026-02-01T05:41:06.194Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1627
[2026-02-01T05:41:06.197Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T05:41:06.199Z] [BOT] 💾 AFTER MERGE: 1627 jobs (merged disk + memory)
[2026-02-01T05:41:06.200Z] [BOT] ✅ No jobs to archive (all 1627 jobs within 7-day window)
[2026-02-01T05:41:06.284Z] [BOT] 💾 Saved posted_jobs.json: 1627 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T05:41:06.284Z] [BOT] ✅ Database saved successfully
[2026-02-01T05:41:08.316Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3818) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*