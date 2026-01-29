# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T20:04:24.434Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T20:03:50.056Z] ========================================
[2026-01-29T20:03:50.058Z] Discord Bot Execution Log
[2026-01-29T20:03:50.058Z] Environment: GitHub Actions
[2026-01-29T20:03:50.058Z] Node Version: v20.20.0
[2026-01-29T20:03:50.058Z] ========================================
[2026-01-29T20:03:50.058Z] Environment Variables Check:
[2026-01-29T20:03:50.058Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T20:03:50.058Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T20:03:50.059Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T20:03:50.059Z] 
Multi-Channel Configuration:
[2026-01-29T20:03:50.059Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T20:03:50.059Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T20:03:50.060Z] 
Data Files Check:
[2026-01-29T20:03:50.060Z] .github/data/new_jobs.json: ✅ Exists (10 items, 105898 bytes)
[2026-01-29T20:03:50.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 464981 bytes)
[2026-01-29T20:03:50.064Z] 
========================================
[2026-01-29T20:03:50.064Z] Starting Enhanced Discord Bot...
[2026-01-29T20:03:50.064Z] ========================================
[2026-01-29T20:03:50.582Z] [BOT] ✅ Loaded V2 database: 89 jobs
[2026-01-29T20:03:51.340Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T20:03:51.341Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T20:03:51.341Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T20:03:51.460Z] [BOT] ✅ Loaded pending queue: 2881 total (2771 pending, 50 enriched, 60 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Recruiter (12-month contract) at brex
[2026-01-29T20:03:51.464Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T20:03:51.464Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
[2026-01-29T20:03:51.565Z] [BOT] ✅ Loaded pending queue: 2881 total (2771 pending, 50 enriched, 60 posted)
[2026-01-29T20:03:51.753Z] [BOT] ✅ Saved pending queue: 2880 total (2771 pending, 49 enriched, 60 posted)
[2026-01-29T20:03:51.754Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 49 jobs (1 blacklisted)
📋 After data quality filter: 49 jobs (0 invalid)
[2026-01-29T20:03:51.755Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T20:03:51.755Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - 2026 Full-time - Software Engineer I @ RTX: mckinney, marlborough
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T20:03:51.759Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-29T20:03:51.760Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
[2026-01-29T20:03:51.760Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:03:51.776Z] [BOT ERROR] (node:3119) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T20:03:52.005Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #💻・tech-jobs
[2026-01-29T20:03:52.005Z] [BOT] ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-29T20:03:52.006Z] [BOT] 💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → category channel (1 total channels)
[2026-01-29T20:03:52.006Z] [BOT] 💾 BEFORE MERGE: 90 jobs in memory (cached)
[2026-01-29T20:03:52.010Z] [BOT] ✅ Loaded V2 database: 89 jobs
[2026-01-29T20:03:52.010Z] [BOT] 💾 DISK STATE: 89 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=90
[2026-01-29T20:03:52.011Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:03:52.011Z] [BOT] 💾 AFTER MERGE: 90 jobs (merged disk + memory)
[2026-01-29T20:03:52.011Z] [BOT] ✅ No jobs to archive (all 90 jobs within 7-day window)
[2026-01-29T20:03:52.022Z] [BOT] 💾 Saved posted_jobs.json: 90 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:03:53.524Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ vercel
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:03:53.896Z] [BOT] ✅ Posted message: Enterprise Account Executive @ vercel in #💻・tech-jobs
[2026-01-29T20:03:53.897Z] [BOT] ✅ Industry: Enterprise Account Executive @ vercel
💾 Added channel posting: Enterprise Account Executive @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 91 jobs in memory (cached)
[2026-01-29T20:03:53.899Z] [BOT] ✅ Loaded V2 database: 90 jobs
[2026-01-29T20:03:53.899Z] [BOT] 💾 DISK STATE: 90 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=91
[2026-01-29T20:03:53.899Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:03:53.899Z] [BOT] 💾 AFTER MERGE: 91 jobs (merged disk + memory)
[2026-01-29T20:03:53.899Z] [BOT] ✅ No jobs to archive (all 91 jobs within 7-day window)
[2026-01-29T20:03:53.905Z] [BOT] 💾 Saved posted_jobs.json: 91 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:03:55.406Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Commercial" @ vercel
[2026-01-29T20:03:55.406Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:03:55.621Z] [BOT] ✅ Posted message: Vercel Development Representative, Commercial @ vercel in #💻・tech-jobs
[2026-01-29T20:03:55.621Z] [BOT] ✅ Industry: Vercel Development Representative, Commercial @ vercel
💾 Added channel posting: Vercel Development Representative, Commercial @ vercel → category channel (1 total channels)
[2026-01-29T20:03:55.621Z] [BOT] 💾 BEFORE MERGE: 92 jobs in memory (cached)
[2026-01-29T20:03:55.623Z] [BOT] ✅ Loaded V2 database: 91 jobs
[2026-01-29T20:03:55.623Z] [BOT] 💾 DISK STATE: 91 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=92
[2026-01-29T20:03:55.624Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:03:55.624Z] [BOT] 💾 AFTER MERGE: 92 jobs (merged disk + memory)
[2026-01-29T20:03:55.624Z] [BOT] ✅ No jobs to archive (all 92 jobs within 7-day window)
[2026-01-29T20:03:55.629Z] [BOT] 💾 Saved posted_jobs.json: 92 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:03:57.131Z] [BOT] 📍 [ROUTING] "Head of Product Marketing " @ vercel
[2026-01-29T20:03:57.131Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:03:57.297Z] [BOT] ✅ Posted message: Head of Product Marketing  @ vercel in #💻・tech-jobs
[2026-01-29T20:03:57.297Z] [BOT] ✅ Industry: Head of Product Marketing  @ vercel
💾 Added channel posting: Head of Product Marketing  @ vercel → category channel (1 total channels)
[2026-01-29T20:03:57.297Z] [BOT] 💾 BEFORE MERGE: 93 jobs in memory (cached)
[2026-01-29T20:03:57.299Z] [BOT] ✅ Loaded V2 database: 92 jobs
💾 DISK STATE: 92 jobs on disk
[2026-01-29T20:03:57.300Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=93
[2026-01-29T20:03:57.300Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:03:57.300Z] [BOT] 💾 AFTER MERGE: 93 jobs (merged disk + memory)
✅ No jobs to archive (all 93 jobs within 7-day window)
[2026-01-29T20:03:57.306Z] [BOT] 💾 Saved posted_jobs.json: 93 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:03:58.807Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (Contract)" @ vercel
[2026-01-29T20:03:58.807Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:03:59.030Z] [BOT] ✅ Posted message: Recruiting Coordinator (Contract) @ vercel in #💻・tech-jobs
[2026-01-29T20:03:59.030Z] [BOT] ✅ Industry: Recruiting Coordinator (Contract) @ vercel
💾 Added channel posting: Recruiting Coordinator (Contract) @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 94 jobs in memory (cached)
[2026-01-29T20:03:59.032Z] [BOT] ✅ Loaded V2 database: 93 jobs
[2026-01-29T20:03:59.032Z] [BOT] 💾 DISK STATE: 93 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=94
[2026-01-29T20:03:59.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:03:59.033Z] [BOT] 💾 AFTER MERGE: 94 jobs (merged disk + memory)
[2026-01-29T20:03:59.033Z] [BOT] ✅ No jobs to archive (all 94 jobs within 7-day window)
[2026-01-29T20:03:59.039Z] [BOT] 💾 Saved posted_jobs.json: 94 active jobs
[2026-01-29T20:03:59.039Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:00.540Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ vercel
[2026-01-29T20:04:00.540Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:04:02.184Z] [BOT] ✅ Posted message: Software Engineer, Growth @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, Growth @ vercel
[2026-01-29T20:04:02.184Z] [BOT] 💾 Added channel posting: Software Engineer, Growth @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 95 jobs in memory (cached)
[2026-01-29T20:04:02.188Z] [BOT] ✅ Loaded V2 database: 94 jobs
💾 DISK STATE: 94 jobs on disk
[2026-01-29T20:04:02.188Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=95
[2026-01-29T20:04:02.188Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:04:02.188Z] [BOT] 💾 AFTER MERGE: 95 jobs (merged disk + memory)
[2026-01-29T20:04:02.189Z] [BOT] ✅ No jobs to archive (all 95 jobs within 7-day window)
[2026-01-29T20:04:02.196Z] [BOT] 💾 Saved posted_jobs.json: 95 active jobs
[2026-01-29T20:04:02.197Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:03.698Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ vercel
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:04:03.863Z] [BOT] ✅ Posted message: Startup Account Executive @ vercel in #💻・tech-jobs
[2026-01-29T20:04:03.863Z] [BOT] ✅ Industry: Startup Account Executive @ vercel
💾 Added channel posting: Startup Account Executive @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 96 jobs in memory (cached)
[2026-01-29T20:04:03.865Z] [BOT] ✅ Loaded V2 database: 95 jobs
💾 DISK STATE: 95 jobs on disk
[2026-01-29T20:04:03.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=96
[2026-01-29T20:04:03.866Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:04:03.866Z] [BOT] 💾 AFTER MERGE: 96 jobs (merged disk + memory)
[2026-01-29T20:04:03.866Z] [BOT] ✅ No jobs to archive (all 96 jobs within 7-day window)
[2026-01-29T20:04:03.872Z] [BOT] 💾 Saved posted_jobs.json: 96 active jobs
[2026-01-29T20:04:03.872Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:05.374Z] [BOT] 📍 [ROUTING] "Technical Support Engineer, Vercel Marketplaces " @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-29T20:04:05.374Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:04:06.878Z] [BOT] ✅ Posted message: Technical Support Engineer, Vercel Marketplaces  @ vercel in #💻・tech-jobs
[2026-01-29T20:04:06.878Z] [BOT] ✅ Industry: Technical Support Engineer, Vercel Marketplaces  @ vercel
💾 Added channel posting: Technical Support Engineer, Vercel Marketplaces  @ vercel → category channel (1 total channels)
[2026-01-29T20:04:06.878Z] [BOT] 💾 BEFORE MERGE: 97 jobs in memory (cached)
[2026-01-29T20:04:06.880Z] [BOT] ✅ Loaded V2 database: 96 jobs
[2026-01-29T20:04:06.880Z] [BOT] 💾 DISK STATE: 96 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=97
[2026-01-29T20:04:06.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:04:06.881Z] [BOT] 💾 AFTER MERGE: 97 jobs (merged disk + memory)
[2026-01-29T20:04:06.881Z] [BOT] ✅ No jobs to archive (all 97 jobs within 7-day window)
[2026-01-29T20:04:06.889Z] [BOT] 💾 Saved posted_jobs.json: 97 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:11.391Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T20:04:11.392Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_6bda74c9 Health
[2026-01-29T20:04:11.392Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:04:11.674Z] [BOT] ✅ Posted message: Associate Data Engineer @ ORG_6bda74c9 Health in #📊・JID_fb739488
[2026-01-29T20:04:11.674Z] [BOT] ✅ Industry: Associate Data Engineer @ ORG_6bda74c9 Health
💾 Added channel posting: Associate Data Engineer @ ORG_6bda74c9 Health → category channel (1 total channels)
[2026-01-29T20:04:11.674Z] [BOT] 💾 BEFORE MERGE: 98 jobs in memory (cached)
[2026-01-29T20:04:11.676Z] [BOT] ✅ Loaded V2 database: 97 jobs
💾 DISK STATE: 97 jobs on disk
[2026-01-29T20:04:11.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=98
[2026-01-29T20:04:11.677Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 98 jobs (merged disk + memory)
[2026-01-29T20:04:11.677Z] [BOT] ✅ No jobs to archive (all 98 jobs within 7-day window)
[2026-01-29T20:04:11.685Z] [BOT] 💾 Saved posted_jobs.json: 98 active jobs
[2026-01-29T20:04:11.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:16.187Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-29T20:04:16.187Z] [BOT] 📍 [ROUTING] "Fraud Specialist" @ vercel
[2026-01-29T20:04:16.187Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T20:04:16.442Z] [BOT] ✅ Posted message: Fraud Specialist @ vercel in #🤖・ai-jobs
[2026-01-29T20:04:16.442Z] [BOT] ✅ Industry: Fraud Specialist @ vercel
💾 Added channel posting: Fraud Specialist @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 99 jobs in memory (cached)
[2026-01-29T20:04:16.444Z] [BOT] ✅ Loaded V2 database: 98 jobs
[2026-01-29T20:04:16.444Z] [BOT] 💾 DISK STATE: 98 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=99
[2026-01-29T20:04:16.445Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:04:16.445Z] [BOT] 💾 AFTER MERGE: 99 jobs (merged disk + memory)
[2026-01-29T20:04:16.445Z] [BOT] ✅ No jobs to archive (all 99 jobs within 7-day window)
[2026-01-29T20:04:16.451Z] [BOT] 💾 Saved posted_jobs.json: 99 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:04:20.952Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T20:04:20.953Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3b3e149b..." not found, but found as SHA256 "38dec1fbc6db99ba"
[2026-01-29T20:04:20.953Z] [BOT] ⏭️  Skipping duplicate: JID_3b3e149b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_99a0338d..." not found, but found as SHA256 "2104bbb1e82153e6"
⏭️  Skipping duplicate: JID_14eae989 (posted within 7 days)
[2026-01-29T20:04:20.953Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6f208cde..." not found, but found as SHA256 "f572f12c823b44b0"
⏭️  Skipping duplicate: JID_8d9fe176 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_26efe88c-cvs_heal..." not found, but found as SHA256 "37ae4f9d5cb97a33"
[2026-01-29T20:04:20.953Z] [BOT] ⏭️  Skipping duplicate: JID_26efe88c-cvs_health_careers-JID_5f58a788-engineer_r0821166 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2c99c2f5..." not found, but found as SHA256 "a1033cf36e15fbe0"
⏭️  Skipping duplicate: JID_e4a172cc (posted within 7 days)
[2026-01-29T20:04:20.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_68f258fe..." not found, but found as SHA256 "2aa665d29423c6a7"
⏭️  Skipping duplicate: JID_658bcfb4 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_eeac3a12..." not found, but found as SHA256 "98ea5fb288943d08"
[2026-01-29T20:04:20.954Z] [BOT] ⏭️  Skipping duplicate: JID_30d38ce0 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7202e577..." not found, but found as SHA256 "4423ae9570a361f5"
⏭️  Skipping duplicate: JID_7f179bae (posted within 7 days)
[2026-01-29T20:04:20.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f61cab7b..." not found, but found as SHA256 "5d1187e67340a5b4"
⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-01-29T20:04:20.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f6bc47bd..." not found, but found as SHA256 "e34b04b33ef8a505"
⏭️  Skipping duplicate: JID_853a3ab6 (posted within 7 days)
[2026-01-29T20:04:21.086Z] [BOT] ✅ Loaded pending queue: 2880 total (2771 pending, 49 enriched, 60 posted)
[2026-01-29T20:04:21.253Z] [BOT] ✅ Saved pending queue: 2880 total (2771 pending, 39 enriched, 70 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T20:04:21.334Z] [BOT] 📂 Loaded 10151 existing routing entries
[2026-01-29T20:04:21.440Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10161
[2026-01-29T20:04:21.441Z] [BOT] Timestamp: 2026-01-29T20:04:21.397Z
[2026-01-29T20:04:21.441Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T20:04:21.441Z] [BOT] Total attempts: 11
   Successful: 10
   Failed: 0
   Skipped: 1
[2026-01-29T20:04:21.441Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-29T20:04:21.442Z] [BOT] Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #📊・JID_fb739488: 1 posts
     3. #🤖・ai-jobs: 1 posts
[2026-01-29T20:04:21.442Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 99 jobs in memory (cached)
[2026-01-29T20:04:21.445Z] [BOT] ✅ Loaded V2 database: 99 jobs
[2026-01-29T20:04:21.445Z] [BOT] 💾 DISK STATE: 99 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=99
[2026-01-29T20:04:21.445Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:04:21.446Z] [BOT] 💾 AFTER MERGE: 99 jobs (merged disk + memory)
[2026-01-29T20:04:21.446Z] [BOT] ✅ No jobs to archive (all 99 jobs within 7-day window)
[2026-01-29T20:04:21.452Z] [BOT] 💾 Saved posted_jobs.json: 99 active jobs
[2026-01-29T20:04:21.452Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T20:04:23.481Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3119) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*