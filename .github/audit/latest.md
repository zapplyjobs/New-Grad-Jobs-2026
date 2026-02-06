# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T18:13:31.737Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T18:13:08.839Z] ========================================
[2026-02-06T18:13:08.841Z] Discord Bot Execution Log
[2026-02-06T18:13:08.841Z] Environment: GitHub Actions
[2026-02-06T18:13:08.841Z] Node Version: v20.20.0
[2026-02-06T18:13:08.841Z] ========================================
[2026-02-06T18:13:08.841Z] Environment Variables Check:
[2026-02-06T18:13:08.841Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T18:13:08.841Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T18:13:08.841Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T18:13:08.841Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T18:13:08.841Z] 
Multi-Channel Configuration:
[2026-02-06T18:13:08.841Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T18:13:08.842Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T18:13:08.842Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:13:08.842Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T18:13:08.842Z] 
Data Files Check:
[2026-02-06T18:13:08.843Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152114 bytes)
[2026-02-06T18:13:08.912Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9194064 bytes)
[2026-02-06T18:13:08.912Z] 
========================================
[2026-02-06T18:13:08.912Z] Starting Enhanced Discord Bot...
[2026-02-06T18:13:08.912Z] ========================================
[2026-02-06T18:13:09.418Z] [BOT] ✅ Loaded V2 database: 1925 jobs
[2026-02-06T18:13:10.874Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T18:13:10.875Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T18:13:10.875Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T18:13:10.899Z] [BOT] ✅ Loaded pending queue: 236 total (186 pending, 50 enriched, 0 posted)
[2026-02-06T18:13:10.899Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T18:13:10.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T18:13:10.900Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T18:13:10.900Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T18:13:10.901Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T18:13:10.901Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T18:13:10.913Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T18:13:10.913Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T18:13:10.913Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T18:13:10.913Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-06T18:13:10.914Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-06T18:13:10.939Z] [BOT] ✅ Loaded pending queue: 236 total (186 pending, 50 enriched, 0 posted)
[2026-02-06T18:13:10.965Z] [BOT] ✅ Saved pending queue: 191 total (186 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (45 blacklisted)
[2026-02-06T18:13:10.965Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T18:13:10.966Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-06T18:13:10.966Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T18:13:10.969Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T18:13:10.969Z] [BOT] 📍 [ROUTING] "Data Analyst & System Support Internship" @ ORG_285075a0 Electronics Co., Ltd.
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-06T18:13:10.970Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T18:13:10.986Z] [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T18:13:11.385Z] [BOT] ✅ Posted message: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd. in #📊・JID_fb739488
[2026-02-06T18:13:11.385Z] [BOT] ✅ Industry: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd.
[2026-02-06T18:13:11.386Z] [BOT] 💾 Added channel posting: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd. → category channel (1 total channels)
[2026-02-06T18:13:11.387Z] [BOT] 💾 BEFORE MERGE: 1926 jobs in memory (cached)
[2026-02-06T18:13:11.437Z] [BOT] ✅ Loaded V2 database: 1925 jobs
💾 DISK STATE: 1925 jobs on disk
[2026-02-06T18:13:11.441Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1926
[2026-02-06T18:13:11.445Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:13:11.445Z] [BOT] 💾 AFTER MERGE: 1926 jobs (merged disk + memory)
[2026-02-06T18:13:11.446Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T18:13:11.451Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1916 active
[2026-02-06T18:13:11.560Z] [BOT] 💾 Saved posted_jobs.json: 1916 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:13.274Z] [BOT] ✅ Posted message: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd. in #📍・JID_6daed763
[2026-02-06T18:13:13.275Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T18:13:13.275Z] [BOT] 💾 Added channel posting: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd. → location channel (2 total channels)
[2026-02-06T18:13:13.275Z] [BOT] 💾 BEFORE MERGE: 1916 jobs in memory (cached)
[2026-02-06T18:13:13.318Z] [BOT] ✅ Loaded V2 database: 1916 jobs
💾 DISK STATE: 1916 jobs on disk
[2026-02-06T18:13:13.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1916
[2026-02-06T18:13:13.326Z] [BOT] 🔀 Deep merged: Data Analyst & System Support Internship @ ORG_285075a0 Electronics Co., Ltd. (disk: 1 channels → merged: 2 channels)
[2026-02-06T18:13:13.326Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1916 jobs (merged disk + memory)
[2026-02-06T18:13:13.327Z] [BOT] ✅ No jobs to archive (all 1916 jobs within 7-day window)
[2026-02-06T18:13:13.424Z] [BOT] 💾 Saved posted_jobs.json: 1916 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:17.927Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T18:13:17.928Z] [BOT] 📍 [ROUTING] "Graduate Nurse (GN)- Emergency Center Internship (7p-7a)" @ ORG_a6c9feb5 Health System
   Category: TECH (default)
[2026-02-06T18:13:17.928Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T18:13:18.142Z] [BOT] ✅ Posted message: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System in #💻・tech-jobs
[2026-02-06T18:13:18.142Z] [BOT] ✅ Industry: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System
[2026-02-06T18:13:18.143Z] [BOT] 💾 Added channel posting: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System → category channel (1 total channels)
[2026-02-06T18:13:18.143Z] [BOT] 💾 BEFORE MERGE: 1917 jobs in memory (cached)
[2026-02-06T18:13:18.186Z] [BOT] ✅ Loaded V2 database: 1916 jobs
💾 DISK STATE: 1916 jobs on disk
[2026-02-06T18:13:18.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1917
[2026-02-06T18:13:18.194Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:13:18.194Z] [BOT] 💾 AFTER MERGE: 1917 jobs (merged disk + memory)
[2026-02-06T18:13:18.195Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-02-06T18:13:18.303Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:20.088Z] [BOT] ✅ Posted message: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System in #📍・JID_6daed763
[2026-02-06T18:13:20.088Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T18:13:20.088Z] [BOT] 💾 Added channel posting: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System → location channel (2 total channels)
[2026-02-06T18:13:20.088Z] [BOT] 💾 BEFORE MERGE: 1917 jobs in memory (cached)
[2026-02-06T18:13:20.131Z] [BOT] ✅ Loaded V2 database: 1917 jobs
💾 DISK STATE: 1917 jobs on disk
[2026-02-06T18:13:20.134Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1917
[2026-02-06T18:13:20.138Z] [BOT] 🔀 Deep merged: Graduate Nurse (GN)- Emergency Center Internship (7p-7a) @ ORG_a6c9feb5 Health System (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T18:13:20.138Z] [BOT] 💾 AFTER MERGE: 1917 jobs (merged disk + memory)
[2026-02-06T18:13:20.139Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-02-06T18:13:20.232Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:21.735Z] [BOT] 📍 [ROUTING] "NURSE TECHNICIAN I - NURSE INTERN" @ ORG_1238c242 Health
[2026-02-06T18:13:21.735Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T18:13:22.013Z] [BOT] ✅ Posted message: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health in #💻・tech-jobs
  ✅ Industry: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health
[2026-02-06T18:13:22.014Z] [BOT] 💾 Added channel posting: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health → category channel (1 total channels)
[2026-02-06T18:13:22.014Z] [BOT] 💾 BEFORE MERGE: 1918 jobs in memory (cached)
[2026-02-06T18:13:22.060Z] [BOT] ✅ Loaded V2 database: 1917 jobs
💾 DISK STATE: 1917 jobs on disk
[2026-02-06T18:13:22.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1918
[2026-02-06T18:13:22.065Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:13:22.065Z] [BOT] 💾 AFTER MERGE: 1918 jobs (merged disk + memory)
[2026-02-06T18:13:22.066Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-02-06T18:13:22.163Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:23.824Z] [BOT] ✅ Posted message: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health in #📍・JID_6daed763
[2026-02-06T18:13:23.824Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T18:13:23.825Z] [BOT] 💾 Added channel posting: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health → location channel (2 total channels)
[2026-02-06T18:13:23.825Z] [BOT] 💾 BEFORE MERGE: 1918 jobs in memory (cached)
[2026-02-06T18:13:23.870Z] [BOT] ✅ Loaded V2 database: 1918 jobs
💾 DISK STATE: 1918 jobs on disk
[2026-02-06T18:13:23.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1918
[2026-02-06T18:13:23.877Z] [BOT] 🔀 Deep merged: NURSE TECHNICIAN I - NURSE INTERN @ ORG_1238c242 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T18:13:23.877Z] [BOT] 💾 AFTER MERGE: 1918 jobs (merged disk + memory)
[2026-02-06T18:13:23.878Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-02-06T18:13:23.974Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:13:28.475Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T18:13:28.477Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a6b17268..." not found, but found as SHA256 "4ff5d4af3d4eb435"
[2026-02-06T18:13:28.477Z] [BOT] ⏭️  Skipping duplicate: JID_72ffca12 (posted within 7 days)
[2026-02-06T18:13:28.477Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e54bc5a3..." not found, but found as SHA256 "6987d6290ff8d0d5"
[2026-02-06T18:13:28.477Z] [BOT] ⏭️  Skipping duplicate: JID_e54bc5a3 (posted within 7 days)
[2026-02-06T18:13:28.478Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b96968b8..." not found, but found as SHA256 "d3134c264bd6426a"
⏭️  Skipping duplicate: JID_9a97a4ca (posted within 7 days)
[2026-02-06T18:13:28.493Z] [BOT] ✅ Loaded pending queue: 191 total (186 pending, 5 enriched, 0 posted)
[2026-02-06T18:13:28.510Z] [BOT] ✅ Saved pending queue: 191 total (186 pending, 2 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-06T18:13:28.510Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T18:13:28.619Z] [BOT] 📂 Loaded 12564 existing routing entries
[2026-02-06T18:13:28.753Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12567
   Timestamp: 2026-02-06T18:13:28.707Z
[2026-02-06T18:13:28.754Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T18:13:28.754Z] [BOT] Total attempts: 53
   Successful: 6
[2026-02-06T18:13:28.754Z] [BOT] Failed: 0
   Skipped: 47
[2026-02-06T18:13:28.754Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2026-02-06T18:13:28.754Z] [BOT] 1. #📍・JID_6daed763: 3 posts
     2. #💻・tech-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
[2026-02-06T18:13:28.755Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1918 jobs in memory (cached)
[2026-02-06T18:13:28.801Z] [BOT] ✅ Loaded V2 database: 1918 jobs
💾 DISK STATE: 1918 jobs on disk
[2026-02-06T18:13:28.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1918
[2026-02-06T18:13:28.808Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:13:28.808Z] [BOT] 💾 AFTER MERGE: 1918 jobs (merged disk + memory)
[2026-02-06T18:13:28.809Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-02-06T18:13:28.920Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T18:13:30.936Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*