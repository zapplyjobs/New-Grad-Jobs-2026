# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T06:08:52.519Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T06:08:15.516Z] ========================================
[2026-01-31T06:08:15.517Z] Discord Bot Execution Log
[2026-01-31T06:08:15.518Z] Environment: GitHub Actions
[2026-01-31T06:08:15.518Z] Node Version: v20.20.0
[2026-01-31T06:08:15.518Z] ========================================
[2026-01-31T06:08:15.518Z] Environment Variables Check:
[2026-01-31T06:08:15.518Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T06:08:15.518Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.518Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T06:08:15.518Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T06:08:15.518Z] 
Multi-Channel Configuration:
[2026-01-31T06:08:15.518Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T06:08:15.519Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T06:08:15.519Z] 
Data Files Check:
[2026-01-31T06:08:15.520Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T06:08:15.550Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5775815 bytes)
[2026-01-31T06:08:15.550Z] 
========================================
[2026-01-31T06:08:15.550Z] Starting Enhanced Discord Bot...
[2026-01-31T06:08:15.550Z] ========================================
[2026-01-31T06:08:16.109Z] [BOT] ✅ Loaded V2 database: 888 jobs
[2026-01-31T06:08:16.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T06:08:16.456Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T06:08:16.456Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T06:08:16.581Z] [BOT] ✅ Loaded pending queue: 2959 total (2050 pending, 50 enriched, 859 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T06:08:16.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T06:08:16.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T06:08:16.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T06:08:16.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T06:08:16.583Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T06:08:16.583Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T06:08:16.583Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T06:08:16.583Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T06:08:16.583Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T06:08:16.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T06:08:16.584Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T06:08:16.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T06:08:16.584Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T06:08:16.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T06:08:16.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T06:08:16.584Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T06:08:16.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T06:08:16.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T06:08:16.593Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T06:08:16.594Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Experimental AI at Argonne National Laboratory
[2026-01-31T06:08:16.702Z] [BOT] ✅ Loaded pending queue: 2959 total (2050 pending, 50 enriched, 859 posted)
[2026-01-31T06:08:16.880Z] [BOT] ✅ Saved pending queue: 2958 total (2050 pending, 49 enriched, 859 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T06:08:16.880Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T06:08:16.880Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T06:08:16.881Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T06:08:16.881Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-31T06:08:16.881Z] [BOT] - Technical Consultant @ brex: seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: new york, new york, united states, san francisco, california, united states
   - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T06:08:16.882Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T06:08:16.885Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-31T06:08:16.886Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
[2026-01-31T06:08:16.886Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T06:08:16.903Z] [BOT ERROR] (node:3206) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T06:08:17.118Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #💰・finance-jobs
[2026-01-31T06:08:17.118Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-31T06:08:17.119Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T06:08:17.119Z] [BOT] 💾 BEFORE MERGE: 889 jobs in memory (cached)
[2026-01-31T06:08:17.138Z] [BOT] ✅ Loaded V2 database: 888 jobs
💾 DISK STATE: 888 jobs on disk
[2026-01-31T06:08:17.138Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=889
[2026-01-31T06:08:17.140Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:17.140Z] [BOT] 💾 AFTER MERGE: 889 jobs (merged disk + memory)
[2026-01-31T06:08:17.141Z] [BOT] ✅ No jobs to archive (all 889 jobs within 7-day window)
[2026-01-31T06:08:17.213Z] [BOT] 💾 Saved posted_jobs.json: 889 active jobs
[2026-01-31T06:08:17.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:18.716Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
[2026-01-31T06:08:18.716Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T06:08:18.850Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #💰・finance-jobs
[2026-01-31T06:08:18.850Z] [BOT] ✅ Industry: Associate Technical Consultant @ brex
[2026-01-31T06:08:18.851Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T06:08:18.851Z] [BOT] 💾 BEFORE MERGE: 890 jobs in memory (cached)
[2026-01-31T06:08:18.869Z] [BOT] ✅ Loaded V2 database: 889 jobs
[2026-01-31T06:08:18.869Z] [BOT] 💾 DISK STATE: 889 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=890
[2026-01-31T06:08:18.871Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:18.872Z] [BOT] 💾 AFTER MERGE: 890 jobs (merged disk + memory)
[2026-01-31T06:08:18.872Z] [BOT] ✅ No jobs to archive (all 890 jobs within 7-day window)
[2026-01-31T06:08:18.931Z] [BOT] 💾 Saved posted_jobs.json: 890 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:20.730Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:08:20.730Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → location channel (2 total channels)
[2026-01-31T06:08:20.730Z] [BOT] 💾 BEFORE MERGE: 890 jobs in memory (cached)
[2026-01-31T06:08:20.748Z] [BOT] ✅ Loaded V2 database: 890 jobs
💾 DISK STATE: 890 jobs on disk
[2026-01-31T06:08:20.748Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=890
[2026-01-31T06:08:20.750Z] [BOT] 🔀 Deep merged: Associate Technical Consultant @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T06:08:20.750Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 890 jobs (merged disk + memory)
[2026-01-31T06:08:20.751Z] [BOT] ✅ No jobs to archive (all 890 jobs within 7-day window)
[2026-01-31T06:08:20.810Z] [BOT] 💾 Saved posted_jobs.json: 890 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:25.313Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
📍 [ROUTING] "Regulatory Operations Specialist" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T06:08:25.612Z] [BOT] ✅ Posted message: Regulatory Operations Specialist @ spotify in #🤖・ai-jobs
[2026-01-31T06:08:25.613Z] [BOT] ✅ Industry: Regulatory Operations Specialist @ spotify
[2026-01-31T06:08:25.613Z] [BOT] 💾 Added channel posting: Regulatory Operations Specialist @ spotify → category channel (1 total channels)
[2026-01-31T06:08:25.613Z] [BOT] 💾 BEFORE MERGE: 891 jobs in memory (cached)
[2026-01-31T06:08:25.647Z] [BOT] ✅ Loaded V2 database: 890 jobs
💾 DISK STATE: 890 jobs on disk
[2026-01-31T06:08:25.647Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=891
[2026-01-31T06:08:25.649Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:25.649Z] [BOT] 💾 AFTER MERGE: 891 jobs (merged disk + memory)
[2026-01-31T06:08:25.651Z] [BOT] ✅ No jobs to archive (all 891 jobs within 7-day window)
[2026-01-31T06:08:25.719Z] [BOT] 💾 Saved posted_jobs.json: 891 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:27.366Z] [BOT] ✅ Posted message: Regulatory Operations Specialist @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:08:27.367Z] [BOT] 💾 Added channel posting: Regulatory Operations Specialist @ spotify → location channel (2 total channels)
[2026-01-31T06:08:27.367Z] [BOT] 💾 BEFORE MERGE: 891 jobs in memory (cached)
[2026-01-31T06:08:27.384Z] [BOT] ✅ Loaded V2 database: 891 jobs
💾 DISK STATE: 891 jobs on disk
[2026-01-31T06:08:27.385Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=891
[2026-01-31T06:08:27.387Z] [BOT] 🔀 Deep merged: Regulatory Operations Specialist @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:08:27.387Z] [BOT] 💾 AFTER MERGE: 891 jobs (merged disk + memory)
[2026-01-31T06:08:27.387Z] [BOT] ✅ No jobs to archive (all 891 jobs within 7-day window)
[2026-01-31T06:08:27.452Z] [BOT] 💾 Saved posted_jobs.json: 891 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:28.955Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - AI Enablement" @ ORG_a10ae009
[2026-01-31T06:08:28.955Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T06:08:29.199Z] [BOT] ✅ Posted message: Software Engineer 2 - AI Enablement @ ORG_a10ae009 in #🤖・ai-jobs
[2026-01-31T06:08:29.199Z] [BOT] ✅ Industry: Software Engineer 2 - AI Enablement @ ORG_a10ae009
[2026-01-31T06:08:29.199Z] [BOT] 💾 Added channel posting: Software Engineer 2 - AI Enablement @ ORG_a10ae009 → category channel (1 total channels)
[2026-01-31T06:08:29.200Z] [BOT] 💾 BEFORE MERGE: 892 jobs in memory (cached)
[2026-01-31T06:08:29.217Z] [BOT] ✅ Loaded V2 database: 891 jobs
💾 DISK STATE: 891 jobs on disk
[2026-01-31T06:08:29.218Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=892
[2026-01-31T06:08:29.220Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:29.220Z] [BOT] 💾 AFTER MERGE: 892 jobs (merged disk + memory)
[2026-01-31T06:08:29.220Z] [BOT] ✅ No jobs to archive (all 892 jobs within 7-day window)
[2026-01-31T06:08:29.276Z] [BOT] 💾 Saved posted_jobs.json: 892 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:30.779Z] [BOT] 📍 [ROUTING] "Automotive Mobile ADAS Technician" @ ORG_b344d80e Boyd Group
[2026-01-31T06:08:30.779Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T06:08:30.989Z] [BOT] ✅ Posted message: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #🤖・ai-jobs
[2026-01-31T06:08:30.989Z] [BOT] ✅ Industry: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group
[2026-01-31T06:08:30.990Z] [BOT] 💾 Added channel posting: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group → category channel (1 total channels)
[2026-01-31T06:08:30.990Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory (cached)
[2026-01-31T06:08:31.008Z] [BOT] ✅ Loaded V2 database: 892 jobs
💾 DISK STATE: 892 jobs on disk
[2026-01-31T06:08:31.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=893
[2026-01-31T06:08:31.010Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:31.010Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-31T06:08:31.010Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-31T06:08:31.074Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:35.577Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T06:08:35.578Z] [BOT] 📍 [ROUTING] "Materials Lab Technician" @ ORG_2fa25ffb
[2026-01-31T06:08:35.578Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:08:35.859Z] [BOT] ✅ Posted message: Materials Lab Technician @ ORG_2fa25ffb in #💻・tech-jobs
  ✅ Industry: Materials Lab Technician @ ORG_2fa25ffb
[2026-01-31T06:08:35.859Z] [BOT] 💾 Added channel posting: Materials Lab Technician @ ORG_2fa25ffb → category channel (1 total channels)
[2026-01-31T06:08:35.860Z] [BOT] 💾 BEFORE MERGE: 894 jobs in memory (cached)
[2026-01-31T06:08:35.876Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-31T06:08:35.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=894
[2026-01-31T06:08:35.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 894 jobs (merged disk + memory)
[2026-01-31T06:08:35.879Z] [BOT] ✅ No jobs to archive (all 894 jobs within 7-day window)
[2026-01-31T06:08:35.935Z] [BOT] 💾 Saved posted_jobs.json: 894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:37.437Z] [BOT] 📍 [ROUTING] "Associate Software Support - Java" @ DuCharme, McMillen & Associates
[2026-01-31T06:08:37.437Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:08:37.578Z] [BOT] ✅ Posted message: Associate Software Support - Java @ DuCharme, McMillen & Associates in #💻・tech-jobs
[2026-01-31T06:08:37.578Z] [BOT] ✅ Industry: Associate Software Support - Java @ DuCharme, McMillen & Associates
[2026-01-31T06:08:37.578Z] [BOT] 💾 Added channel posting: Associate Software Support - Java @ DuCharme, McMillen & Associates → category channel (1 total channels)
[2026-01-31T06:08:37.578Z] [BOT] 💾 BEFORE MERGE: 895 jobs in memory (cached)
[2026-01-31T06:08:37.595Z] [BOT] ✅ Loaded V2 database: 894 jobs
💾 DISK STATE: 894 jobs on disk
[2026-01-31T06:08:37.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=895
[2026-01-31T06:08:37.598Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:37.598Z] [BOT] 💾 AFTER MERGE: 895 jobs (merged disk + memory)
[2026-01-31T06:08:37.599Z] [BOT] ✅ No jobs to archive (all 895 jobs within 7-day window)
[2026-01-31T06:08:37.653Z] [BOT] 💾 Saved posted_jobs.json: 895 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:39.157Z] [BOT] 📍 [ROUTING] "Software Engineer: Platform Services" @ supabase
[2026-01-31T06:08:39.157Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:08:39.304Z] [BOT] ✅ Posted message: Software Engineer: Platform Services @ supabase in #💻・tech-jobs
  ✅ Industry: Software Engineer: Platform Services @ supabase
[2026-01-31T06:08:39.305Z] [BOT] 💾 Added channel posting: Software Engineer: Platform Services @ supabase → category channel (1 total channels)
[2026-01-31T06:08:39.305Z] [BOT] 💾 BEFORE MERGE: 896 jobs in memory (cached)
[2026-01-31T06:08:39.322Z] [BOT] ✅ Loaded V2 database: 895 jobs
💾 DISK STATE: 895 jobs on disk
[2026-01-31T06:08:39.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=896
[2026-01-31T06:08:39.324Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:39.324Z] [BOT] 💾 AFTER MERGE: 896 jobs (merged disk + memory)
[2026-01-31T06:08:39.325Z] [BOT] ✅ No jobs to archive (all 896 jobs within 7-day window)
[2026-01-31T06:08:39.381Z] [BOT] 💾 Saved posted_jobs.json: 896 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:40.883Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_4288ade7 Data
[2026-01-31T06:08:40.883Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:08:41.150Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_4288ade7 Data in #💻・tech-jobs
[2026-01-31T06:08:41.150Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_4288ade7 Data
[2026-01-31T06:08:41.151Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_4288ade7 Data → category channel (1 total channels)
[2026-01-31T06:08:41.151Z] [BOT] 💾 BEFORE MERGE: 897 jobs in memory (cached)
[2026-01-31T06:08:41.168Z] [BOT] ✅ Loaded V2 database: 896 jobs
💾 DISK STATE: 896 jobs on disk
[2026-01-31T06:08:41.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=897
[2026-01-31T06:08:41.170Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:41.170Z] [BOT] 💾 AFTER MERGE: 897 jobs (merged disk + memory)
[2026-01-31T06:08:41.171Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2026-01-31T06:08:41.224Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:42.891Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_4288ade7 Data in #🏠・JID_ead674af
[2026-01-31T06:08:42.891Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T06:08:42.891Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_4288ade7 Data → location channel (2 total channels)
[2026-01-31T06:08:42.891Z] [BOT] 💾 BEFORE MERGE: 897 jobs in memory (cached)
[2026-01-31T06:08:42.909Z] [BOT] ✅ Loaded V2 database: 897 jobs
💾 DISK STATE: 897 jobs on disk
[2026-01-31T06:08:42.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=897
[2026-01-31T06:08:42.911Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_4288ade7 Data (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:08:42.911Z] [BOT] 💾 AFTER MERGE: 897 jobs (merged disk + memory)
[2026-01-31T06:08:42.912Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2026-01-31T06:08:42.968Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:44.470Z] [BOT] 📍 [ROUTING] "Software Engineer - Distributed Systems - Platform Software" @ ORG_8f1bec75
   Category: TECH (matched: "software")
[2026-01-31T06:08:44.470Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:08:44.596Z] [BOT] ✅ Posted message: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75
[2026-01-31T06:08:44.597Z] [BOT] 💾 Added channel posting: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 → category channel (1 total channels)
[2026-01-31T06:08:44.597Z] [BOT] 💾 BEFORE MERGE: 898 jobs in memory (cached)
[2026-01-31T06:08:44.614Z] [BOT] ✅ Loaded V2 database: 897 jobs
💾 DISK STATE: 897 jobs on disk
[2026-01-31T06:08:44.614Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=898
[2026-01-31T06:08:44.616Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:44.616Z] [BOT] 💾 AFTER MERGE: 898 jobs (merged disk + memory)
[2026-01-31T06:08:44.617Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2026-01-31T06:08:44.673Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:49.175Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T06:08:49.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dc64b88b..." not found, but found as SHA256 "1aed4239a21e72f8"
[2026-01-31T06:08:49.176Z] [BOT] ⏭️  Skipping duplicate: JID_dc64b88b (posted within 7 days)
[2026-01-31T06:08:49.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8551953a..." not found, but found as SHA256 "9a6e9592e77db8a5"
⏭️  Skipping duplicate: JID_8551953a (posted within 7 days)
[2026-01-31T06:08:49.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a28a0fa..." not found, but found as SHA256 "6752bd03842e36c6"
⏭️  Skipping duplicate: JID_2ad527aa (posted within 7 days)
[2026-01-31T06:08:49.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_454e7738..." not found, but found as SHA256 "9bfeaaded63dd816"
⏭️  Skipping duplicate: JID_e8ecb4c9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7b149edb..." not found, but found as SHA256 "9ce0a948c7bc962a"
⏭️  Skipping duplicate: JID_a53de753-technician_r055451 (posted within 7 days)
[2026-01-31T06:08:49.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da65a335..." not found, but found as SHA256 "e12d057e5815145e"
⏭️  Skipping duplicate: JID_6dabd0c4 (posted within 7 days)
[2026-01-31T06:08:49.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_733d1781..." not found, but found as SHA256 "9baeec1348508610"
⏭️  Skipping duplicate: JID_7f95c4dc-_req293 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5f845b9c-..." not found, but found as SHA256 "91906a7857995d28"
⏭️  Skipping duplicate: JID_3b55c255 (posted within 7 days)
[2026-01-31T06:08:49.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bacc2622..." not found, but found as SHA256 "2e44a2bb4b516fc8"
⏭️  Skipping duplicate: JID_44dfe28d (posted within 7 days)
[2026-01-31T06:08:49.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d2541302..." not found, but found as SHA256 "d1d6208d9c5234e7"
⏭️  Skipping duplicate: JID_ade9d0d9 (posted within 7 days)
[2026-01-31T06:08:49.289Z] [BOT] ✅ Loaded pending queue: 2958 total (2050 pending, 49 enriched, 859 posted)
[2026-01-31T06:08:49.476Z] [BOT] ✅ Saved pending queue: 2958 total (2050 pending, 39 enriched, 869 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T06:08:49.477Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T06:08:49.562Z] [BOT] 📂 Loaded 10950 existing routing entries
[2026-01-31T06:08:49.710Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T06:08:49.710Z] [BOT] New entries: 10
   Total entries: 10960
   Timestamp: 2026-01-31T06:08:49.650Z
[2026-01-31T06:08:49.712Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T06:08:49.712Z] [BOT] Total attempts: 28
   Successful: 13
   Failed: 0
   Skipped: 15
[2026-01-31T06:08:49.712Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T06:08:49.712Z] [BOT] Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-31T06:08:49.712Z] [BOT] 3. #💰・finance-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-31T06:08:49.712Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T06:08:49.712Z] [BOT] 💾 BEFORE MERGE: 898 jobs in memory (cached)
[2026-01-31T06:08:49.731Z] [BOT] ✅ Loaded V2 database: 898 jobs
💾 DISK STATE: 898 jobs on disk
[2026-01-31T06:08:49.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=898
[2026-01-31T06:08:49.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:08:49.733Z] [BOT] 💾 AFTER MERGE: 898 jobs (merged disk + memory)
[2026-01-31T06:08:49.734Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2026-01-31T06:08:49.790Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:08:49.791Z] [BOT] ✅ Database saved successfully
[2026-01-31T06:08:51.822Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3206) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*