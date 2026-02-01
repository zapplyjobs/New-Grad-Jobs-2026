# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T09:53:10.792Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T09:52:20.539Z] ========================================
[2026-02-01T09:52:20.541Z] Discord Bot Execution Log
[2026-02-01T09:52:20.541Z] Environment: GitHub Actions
[2026-02-01T09:52:20.541Z] Node Version: v20.20.0
[2026-02-01T09:52:20.541Z] ========================================
[2026-02-01T09:52:20.541Z] Environment Variables Check:
[2026-02-01T09:52:20.541Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T09:52:20.541Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T09:52:20.541Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T09:52:20.541Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T09:52:20.542Z] 
Multi-Channel Configuration:
[2026-02-01T09:52:20.542Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T09:52:20.542Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T09:52:20.542Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T09:52:20.542Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T09:52:20.542Z] 
Data Files Check:
[2026-02-01T09:52:20.543Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58398 bytes)
[2026-02-01T09:52:20.602Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9378500 bytes)
[2026-02-01T09:52:20.602Z] 
========================================
[2026-02-01T09:52:20.602Z] Starting Enhanced Discord Bot...
[2026-02-01T09:52:20.602Z] ========================================
[2026-02-01T09:52:21.106Z] [BOT] ✅ Loaded V2 database: 1737 jobs
[2026-02-01T09:52:21.964Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T09:52:21.964Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T09:52:21.964Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T09:52:22.116Z] [BOT] ✅ Loaded pending queue: 2944 total (1167 pending, 50 enriched, 1727 posted)
[2026-02-01T09:52:22.116Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:52:22.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T09:52:22.117Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T09:52:22.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T09:52:22.118Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T09:52:22.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T09:52:22.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T09:52:22.119Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T09:52:22.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T09:52:22.120Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T09:52:22.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T09:52:22.120Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T09:52:22.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T09:52:22.120Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T09:52:22.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T09:52:22.121Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T09:52:22.130Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T09:52:22.130Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T09:52:22.131Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T09:52:22.131Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
   (2 grouped as same job with different locations)
[2026-02-01T09:52:22.132Z] [BOT] 📍 1 jobs with multiple locations:
   - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T09:52:22.134Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T09:52:22.135Z] [BOT] 📍 [ROUTING] "New Graduate Engineer, Software (Starlink)" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-02-01T09:52:22.135Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:22.152Z] [BOT ERROR] (node:3515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T09:52:22.338Z] [BOT] ✅ Posted message: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1 in #💻・tech-jobs
[2026-02-01T09:52:22.339Z] [BOT] ✅ Industry: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1
[2026-02-01T09:52:22.340Z] [BOT] 💾 Added channel posting: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T09:52:22.340Z] [BOT] 💾 BEFORE MERGE: 1738 jobs in memory (cached)
[2026-02-01T09:52:22.392Z] [BOT] ✅ Loaded V2 database: 1737 jobs
💾 DISK STATE: 1737 jobs on disk
[2026-02-01T09:52:22.393Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1738
[2026-02-01T09:52:22.397Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:22.397Z] [BOT] 💾 AFTER MERGE: 1738 jobs (merged disk + memory)
[2026-02-01T09:52:22.398Z] [BOT] ✅ No jobs to archive (all 1738 jobs within 7-day window)
[2026-02-01T09:52:22.534Z] [BOT] 💾 Saved posted_jobs.json: 1738 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:24.211Z] [BOT] ✅ Posted message: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T09:52:24.212Z] [BOT] 💾 Added channel posting: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1 → location channel (2 total channels)
💾 BEFORE MERGE: 1738 jobs in memory (cached)
[2026-02-01T09:52:24.262Z] [BOT] ✅ Loaded V2 database: 1738 jobs
💾 DISK STATE: 1738 jobs on disk
[2026-02-01T09:52:24.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1738
[2026-02-01T09:52:24.266Z] [BOT] 🔀 Deep merged: New Graduate Engineer, Software (Starlink) @ ORG_afd623b1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:24.266Z] [BOT] 💾 AFTER MERGE: 1738 jobs (merged disk + memory)
[2026-02-01T09:52:24.268Z] [BOT] ✅ No jobs to archive (all 1738 jobs within 7-day window)
[2026-02-01T09:52:24.373Z] [BOT] 💾 Saved posted_jobs.json: 1738 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:25.876Z] [BOT] 📍 [ROUTING] "Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track" @ ORG_b344d80e Cigna Group
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T09:52:25.876Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:26.337Z] [BOT] ✅ Posted message: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group in #💻・tech-jobs
  ✅ Industry: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group
[2026-02-01T09:52:26.337Z] [BOT] 💾 Added channel posting: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group → category channel (1 total channels)
[2026-02-01T09:52:26.338Z] [BOT] 💾 BEFORE MERGE: 1739 jobs in memory (cached)
[2026-02-01T09:52:26.383Z] [BOT] ✅ Loaded V2 database: 1738 jobs
💾 DISK STATE: 1738 jobs on disk
[2026-02-01T09:52:26.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1739
[2026-02-01T09:52:26.387Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:26.387Z] [BOT] 💾 AFTER MERGE: 1739 jobs (merged disk + memory)
[2026-02-01T09:52:26.389Z] [BOT] ✅ No jobs to archive (all 1739 jobs within 7-day window)
[2026-02-01T09:52:26.510Z] [BOT] 💾 Saved posted_jobs.json: 1739 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:28.317Z] [BOT] ✅ Posted message: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group in #📍・JID_6daed763
[2026-02-01T09:52:28.318Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T09:52:28.318Z] [BOT] 💾 Added channel posting: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group → location channel (2 total channels)
[2026-02-01T09:52:28.318Z] [BOT] 💾 BEFORE MERGE: 1739 jobs in memory (cached)
[2026-02-01T09:52:28.363Z] [BOT] ✅ Loaded V2 database: 1739 jobs
💾 DISK STATE: 1739 jobs on disk
[2026-02-01T09:52:28.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1739
[2026-02-01T09:52:28.367Z] [BOT] 🔀 Deep merged: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:28.367Z] [BOT] 💾 AFTER MERGE: 1739 jobs (merged disk + memory)
[2026-02-01T09:52:28.368Z] [BOT] ✅ No jobs to archive (all 1739 jobs within 7-day window)
[2026-02-01T09:52:28.466Z] [BOT] 💾 Saved posted_jobs.json: 1739 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:29.968Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_961a6062
[2026-02-01T09:52:29.969Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:30.230Z] [BOT] ✅ Posted message: Software Engineer @ ORG_961a6062 in #💻・tech-jobs
[2026-02-01T09:52:30.230Z] [BOT] ✅ Industry: Software Engineer @ ORG_961a6062
[2026-02-01T09:52:30.232Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_961a6062 → category channel (1 total channels)
💾 BEFORE MERGE: 1740 jobs in memory (cached)
[2026-02-01T09:52:30.279Z] [BOT] ✅ Loaded V2 database: 1739 jobs
💾 DISK STATE: 1739 jobs on disk
[2026-02-01T09:52:30.280Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1740
[2026-02-01T09:52:30.284Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:30.284Z] [BOT] 💾 AFTER MERGE: 1740 jobs (merged disk + memory)
[2026-02-01T09:52:30.285Z] [BOT] ✅ No jobs to archive (all 1740 jobs within 7-day window)
[2026-02-01T09:52:30.388Z] [BOT] 💾 Saved posted_jobs.json: 1740 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:32.103Z] [BOT] ✅ Posted message: Software Engineer @ ORG_961a6062 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:52:32.104Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_961a6062 → location channel (2 total channels)
[2026-02-01T09:52:32.104Z] [BOT] 💾 BEFORE MERGE: 1740 jobs in memory (cached)
[2026-02-01T09:52:32.155Z] [BOT] ✅ Loaded V2 database: 1740 jobs
💾 DISK STATE: 1740 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1740
[2026-02-01T09:52:32.160Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_961a6062 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:52:32.160Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:32.161Z] [BOT] 💾 AFTER MERGE: 1740 jobs (merged disk + memory)
[2026-02-01T09:52:32.163Z] [BOT] ✅ No jobs to archive (all 1740 jobs within 7-day window)
[2026-02-01T09:52:32.273Z] [BOT] 💾 Saved posted_jobs.json: 1740 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:33.771Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:33.939Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
[2026-02-01T09:52:33.939Z] [BOT] ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-02-01T09:52:33.940Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → category channel (1 total channels)
[2026-02-01T09:52:33.940Z] [BOT] 💾 BEFORE MERGE: 1741 jobs in memory (cached)
[2026-02-01T09:52:33.987Z] [BOT] ✅ Loaded V2 database: 1740 jobs
💾 DISK STATE: 1740 jobs on disk
[2026-02-01T09:52:33.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1741
[2026-02-01T09:52:33.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:33.991Z] [BOT] 💾 AFTER MERGE: 1741 jobs (merged disk + memory)
[2026-02-01T09:52:33.992Z] [BOT] ✅ No jobs to archive (all 1741 jobs within 7-day window)
[2026-02-01T09:52:34.099Z] [BOT] 💾 Saved posted_jobs.json: 1741 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:35.804Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_7b717950 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:52:35.805Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_7b717950 → location channel (2 total channels)
💾 BEFORE MERGE: 1741 jobs in memory (cached)
[2026-02-01T09:52:35.850Z] [BOT] ✅ Loaded V2 database: 1741 jobs
💾 DISK STATE: 1741 jobs on disk
[2026-02-01T09:52:35.851Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1741
[2026-02-01T09:52:35.854Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_7b717950 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:35.855Z] [BOT] 💾 AFTER MERGE: 1741 jobs (merged disk + memory)
[2026-02-01T09:52:35.856Z] [BOT] ✅ No jobs to archive (all 1741 jobs within 7-day window)
[2026-02-01T09:52:35.955Z] [BOT] 💾 Saved posted_jobs.json: 1741 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:37.456Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_961a6062
[2026-02-01T09:52:37.456Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:37.657Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_961a6062 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_961a6062
[2026-02-01T09:52:37.657Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_961a6062 → category channel (1 total channels)
[2026-02-01T09:52:37.658Z] [BOT] 💾 BEFORE MERGE: 1742 jobs in memory (cached)
[2026-02-01T09:52:37.708Z] [BOT] ✅ Loaded V2 database: 1741 jobs
💾 DISK STATE: 1741 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1742
[2026-02-01T09:52:37.716Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1742 jobs (merged disk + memory)
[2026-02-01T09:52:37.716Z] [BOT] ✅ No jobs to archive (all 1742 jobs within 7-day window)
[2026-02-01T09:52:37.825Z] [BOT] 💾 Saved posted_jobs.json: 1742 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:39.552Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_961a6062 in #🌲・JID_efdf5921
[2026-02-01T09:52:39.552Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T09:52:39.553Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_961a6062 → location channel (2 total channels)
[2026-02-01T09:52:39.553Z] [BOT] 💾 BEFORE MERGE: 1742 jobs in memory (cached)
[2026-02-01T09:52:39.601Z] [BOT] ✅ Loaded V2 database: 1742 jobs
💾 DISK STATE: 1742 jobs on disk
[2026-02-01T09:52:39.602Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1742
[2026-02-01T09:52:39.605Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_961a6062 (disk: 1 channels → merged: 2 channels)
[2026-02-01T09:52:39.605Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1742 jobs (merged disk + memory)
[2026-02-01T09:52:39.606Z] [BOT] ✅ No jobs to archive (all 1742 jobs within 7-day window)
[2026-02-01T09:52:39.706Z] [BOT] 💾 Saved posted_jobs.json: 1742 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:41.207Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
[2026-02-01T09:52:41.207Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:41.407Z] [BOT] ✅ Posted message: Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_afd623b1
[2026-02-01T09:52:41.408Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T09:52:41.408Z] [BOT] 💾 BEFORE MERGE: 1743 jobs in memory (cached)
[2026-02-01T09:52:41.453Z] [BOT] ✅ Loaded V2 database: 1742 jobs
💾 DISK STATE: 1742 jobs on disk
[2026-02-01T09:52:41.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1743
[2026-02-01T09:52:41.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:41.457Z] [BOT] 💾 AFTER MERGE: 1743 jobs (merged disk + memory)
[2026-02-01T09:52:41.458Z] [BOT] ✅ No jobs to archive (all 1743 jobs within 7-day window)
[2026-02-01T09:52:41.563Z] [BOT] 💾 Saved posted_jobs.json: 1743 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:43.300Z] [BOT] ✅ Posted message: Software Engineer @ ORG_afd623b1 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:52:43.300Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_afd623b1 → location channel (2 total channels)
[2026-02-01T09:52:43.300Z] [BOT] 💾 BEFORE MERGE: 1743 jobs in memory (cached)
[2026-02-01T09:52:43.347Z] [BOT] ✅ Loaded V2 database: 1743 jobs
💾 DISK STATE: 1743 jobs on disk
[2026-02-01T09:52:43.347Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1743
[2026-02-01T09:52:43.350Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_afd623b1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:43.350Z] [BOT] 💾 AFTER MERGE: 1743 jobs (merged disk + memory)
[2026-02-01T09:52:43.351Z] [BOT] ✅ No jobs to archive (all 1743 jobs within 7-day window)
[2026-02-01T09:52:43.452Z] [BOT] 💾 Saved posted_jobs.json: 1743 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:44.953Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_973a4a81
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T09:52:45.139Z] [BOT] ✅ Posted message: Software Developer @ ORG_973a4a81 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_973a4a81
[2026-02-01T09:52:45.140Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_973a4a81 → category channel (1 total channels)
[2026-02-01T09:52:45.140Z] [BOT] 💾 BEFORE MERGE: 1744 jobs in memory (cached)
[2026-02-01T09:52:45.187Z] [BOT] ✅ Loaded V2 database: 1743 jobs
💾 DISK STATE: 1743 jobs on disk
[2026-02-01T09:52:45.188Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1744
[2026-02-01T09:52:45.191Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:45.191Z] [BOT] 💾 AFTER MERGE: 1744 jobs (merged disk + memory)
[2026-02-01T09:52:45.192Z] [BOT] ✅ No jobs to archive (all 1744 jobs within 7-day window)
[2026-02-01T09:52:45.307Z] [BOT] 💾 Saved posted_jobs.json: 1744 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:47.158Z] [BOT] ✅ Posted message: Software Developer @ ORG_973a4a81 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T09:52:47.158Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_973a4a81 → location channel (2 total channels)
[2026-02-01T09:52:47.158Z] [BOT] 💾 BEFORE MERGE: 1744 jobs in memory (cached)
[2026-02-01T09:52:47.207Z] [BOT] ✅ Loaded V2 database: 1744 jobs
💾 DISK STATE: 1744 jobs on disk
[2026-02-01T09:52:47.207Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1744
[2026-02-01T09:52:47.210Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_973a4a81 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:47.211Z] [BOT] 💾 AFTER MERGE: 1744 jobs (merged disk + memory)
[2026-02-01T09:52:47.212Z] [BOT] ✅ No jobs to archive (all 1744 jobs within 7-day window)
[2026-02-01T09:52:47.314Z] [BOT] 💾 Saved posted_jobs.json: 1744 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:51.813Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T09:52:51.814Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ T-Mobile
   Category: AI (matched: "artificial intelligence")
[2026-02-01T09:52:51.815Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:52:52.442Z] [BOT] ✅ Posted message: Associate AI Engineer @ T-Mobile in #🤖・ai-jobs
  ✅ Industry: Associate AI Engineer @ T-Mobile
[2026-02-01T09:52:52.443Z] [BOT] 💾 Added channel posting: Associate AI Engineer @ T-Mobile → category channel (1 total channels)
[2026-02-01T09:52:52.443Z] [BOT] 💾 BEFORE MERGE: 1745 jobs in memory (cached)
[2026-02-01T09:52:52.489Z] [BOT] ✅ Loaded V2 database: 1744 jobs
💾 DISK STATE: 1744 jobs on disk
[2026-02-01T09:52:52.489Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1745
[2026-02-01T09:52:52.492Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:52.492Z] [BOT] 💾 AFTER MERGE: 1745 jobs (merged disk + memory)
[2026-02-01T09:52:52.493Z] [BOT] ✅ No jobs to archive (all 1745 jobs within 7-day window)
[2026-02-01T09:52:52.614Z] [BOT] 💾 Saved posted_jobs.json: 1745 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:54.279Z] [BOT] ✅ Posted message: Associate AI Engineer @ T-Mobile in #🌲・JID_efdf5921
[2026-02-01T09:52:54.279Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T09:52:54.280Z] [BOT] 💾 Added channel posting: Associate AI Engineer @ T-Mobile → location channel (2 total channels)
[2026-02-01T09:52:54.280Z] [BOT] 💾 BEFORE MERGE: 1745 jobs in memory (cached)
[2026-02-01T09:52:54.326Z] [BOT] ✅ Loaded V2 database: 1745 jobs
💾 DISK STATE: 1745 jobs on disk
[2026-02-01T09:52:54.326Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1745
[2026-02-01T09:52:54.329Z] [BOT] 🔀 Deep merged: Associate AI Engineer @ T-Mobile (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:54.329Z] [BOT] 💾 AFTER MERGE: 1745 jobs (merged disk + memory)
[2026-02-01T09:52:54.330Z] [BOT] ✅ No jobs to archive (all 1745 jobs within 7-day window)
[2026-02-01T09:52:54.443Z] [BOT] 💾 Saved posted_jobs.json: 1745 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:55.944Z] [BOT] 📍 [ROUTING] "Software Engineer – University Grad" @ ORG_30b5b45b
   Category: AI (matched: "machine learning")
[2026-02-01T09:52:55.944Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:52:56.445Z] [BOT] ✅ Posted message: Software Engineer – University Grad @ ORG_30b5b45b in #🤖・ai-jobs
  ✅ Industry: Software Engineer – University Grad @ ORG_30b5b45b
[2026-02-01T09:52:56.445Z] [BOT] 💾 Added channel posting: Software Engineer – University Grad @ ORG_30b5b45b → category channel (1 total channels)
[2026-02-01T09:52:56.446Z] [BOT] 💾 BEFORE MERGE: 1746 jobs in memory (cached)
[2026-02-01T09:52:56.492Z] [BOT] ✅ Loaded V2 database: 1745 jobs
💾 DISK STATE: 1745 jobs on disk
[2026-02-01T09:52:56.492Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1746
[2026-02-01T09:52:56.495Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:52:56.496Z] [BOT] 💾 AFTER MERGE: 1746 jobs (merged disk + memory)
[2026-02-01T09:52:56.497Z] [BOT] ✅ No jobs to archive (all 1746 jobs within 7-day window)
[2026-02-01T09:52:56.601Z] [BOT] 💾 Saved posted_jobs.json: 1746 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:58.302Z] [BOT] ✅ Posted message: Software Engineer – University Grad @ ORG_30b5b45b in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:52:58.303Z] [BOT] 💾 Added channel posting: Software Engineer – University Grad @ ORG_30b5b45b → location channel (2 total channels)
💾 BEFORE MERGE: 1746 jobs in memory (cached)
[2026-02-01T09:52:58.349Z] [BOT] ✅ Loaded V2 database: 1746 jobs
💾 DISK STATE: 1746 jobs on disk
[2026-02-01T09:52:58.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1746
[2026-02-01T09:52:58.352Z] [BOT] 🔀 Deep merged: Software Engineer – University Grad @ ORG_30b5b45b (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:52:58.352Z] [BOT] 💾 AFTER MERGE: 1746 jobs (merged disk + memory)
[2026-02-01T09:52:58.353Z] [BOT] ✅ No jobs to archive (all 1746 jobs within 7-day window)
[2026-02-01T09:52:58.463Z] [BOT] 💾 Saved posted_jobs.json: 1746 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:52:59.966Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_7a332bb8
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T09:53:00.293Z] [BOT] ✅ Posted message: Software Engineer @ ORG_7a332bb8 in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_7a332bb8
[2026-02-01T09:53:00.294Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_7a332bb8 → category channel (1 total channels)
[2026-02-01T09:53:00.294Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-01T09:53:00.340Z] [BOT] ✅ Loaded V2 database: 1746 jobs
💾 DISK STATE: 1746 jobs on disk
[2026-02-01T09:53:00.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-01T09:53:00.344Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T09:53:00.344Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-01T09:53:00.345Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-01T09:53:00.446Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:53:02.188Z] [BOT] ✅ Posted message: Software Engineer @ ORG_7a332bb8 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T09:53:02.189Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_7a332bb8 → location channel (2 total channels)
[2026-02-01T09:53:02.189Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-01T09:53:02.237Z] [BOT] ✅ Loaded V2 database: 1747 jobs
💾 DISK STATE: 1747 jobs on disk
[2026-02-01T09:53:02.238Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-01T09:53:02.241Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_7a332bb8 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T09:53:02.241Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-01T09:53:02.242Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-01T09:53:02.348Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:53:06.851Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T09:53:06.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_47e8b5eb..." not found, but found as SHA256 "f3423655b4ccf3f2"
[2026-02-01T09:53:06.852Z] [BOT] ⏭️  Skipping duplicate: JID_6afe6993 (posted within 7 days)
[2026-02-01T09:53:06.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09322a79..." not found, but found as SHA256 "3d45c9e5f8287439"
[2026-02-01T09:53:06.852Z] [BOT] ⏭️  Skipping duplicate: JID_be4d6e94-2026_25011438-1 (posted within 7 days)
[2026-02-01T09:53:06.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_41312350..." not found, but found as SHA256 "2f7bcb4bcd2b7a8b"
[2026-02-01T09:53:06.853Z] [BOT] ⏭️  Skipping duplicate: JID_ad2d598d-engineer_req329843-1 (posted within 7 days)
[2026-02-01T09:53:06.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_625bedb0..." not found, but found as SHA256 "755367370d247cfd"
⏭️  Skipping duplicate: JID_b4c2b9c8 (posted within 7 days)
[2026-02-01T09:53:06.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a46523c2-..." not found, but found as SHA256 "1c9a3c5111baa4ac"
[2026-02-01T09:53:06.853Z] [BOT] ⏭️  Skipping duplicate: JID_79d429ed (posted within 7 days)
[2026-02-01T09:53:06.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e3f9a0ae-..." not found, but found as SHA256 "42b9227e74d3f718"
[2026-02-01T09:53:06.854Z] [BOT] ⏭️  Skipping duplicate: JID_376a49f3 (posted within 7 days)
[2026-02-01T09:53:06.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c8bab0e..." not found, but found as SHA256 "a1702bd05d399c11"
[2026-02-01T09:53:06.854Z] [BOT] ⏭️  Skipping duplicate: JID_ef27b687 (posted within 7 days)
[2026-02-01T09:53:06.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bcb83e1f..." not found, but found as SHA256 "74687fce785a8088"
[2026-02-01T09:53:06.854Z] [BOT] ⏭️  Skipping duplicate: JID_bcb83e1f (posted within 7 days)
[2026-02-01T09:53:06.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c53e0f36..." not found, but found as SHA256 "c3a137ee0af71e56"
[2026-02-01T09:53:06.854Z] [BOT] ⏭️  Skipping duplicate: JID_1fc4090d (posted within 7 days)
[2026-02-01T09:53:06.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7e478f71-en_us-careers-jobd..." not found, but found as SHA256 "2e8b4b13a46c0bfd"
[2026-02-01T09:53:06.855Z] [BOT] ⏭️  Skipping duplicate: JID_7e478f71-en_us-careers-jobdetail (posted within 7 days)
[2026-02-01T09:53:07.020Z] [BOT] ✅ Loaded pending queue: 2944 total (1167 pending, 50 enriched, 1727 posted)
[2026-02-01T09:53:07.200Z] [BOT] ✅ Saved pending queue: 2944 total (1167 pending, 40 enriched, 1737 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T09:53:07.301Z] [BOT] 📂 Loaded 11818 existing routing entries
[2026-02-01T09:53:07.430Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11828
   Timestamp: 2026-02-01T09:53:07.388Z
[2026-02-01T09:53:07.430Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T09:53:07.431Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T09:53:07.431Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T09:53:07.431Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-02-01T09:53:07.431Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🌉・JID_739bbc0b: 4 posts
     3. #🌲・JID_efdf5921: 3 posts
     4. #📍・JID_6daed763: 3 posts
     5. #🤖・ai-jobs: 3 posts
[2026-02-01T09:53:07.431Z] [BOT] [STATS] Channel stats saved
[2026-02-01T09:53:07.431Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-01T09:53:07.499Z] [BOT] ✅ Loaded V2 database: 1747 jobs
💾 DISK STATE: 1747 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-01T09:53:07.503Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-01T09:53:07.504Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-01T09:53:07.615Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T09:53:07.616Z] [BOT] ✅ Database saved successfully
[2026-02-01T09:53:09.637Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*