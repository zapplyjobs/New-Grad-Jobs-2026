# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T19:26:40.940Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T19:26:13.762Z] ========================================
[2026-02-06T19:26:13.764Z] Discord Bot Execution Log
[2026-02-06T19:26:13.764Z] Environment: GitHub Actions
[2026-02-06T19:26:13.764Z] Node Version: v20.20.0
[2026-02-06T19:26:13.764Z] ========================================
[2026-02-06T19:26:13.764Z] Environment Variables Check:
[2026-02-06T19:26:13.764Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T19:26:13.764Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T19:26:13.764Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T19:26:13.764Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T19:26:13.764Z] 
Multi-Channel Configuration:
[2026-02-06T19:26:13.764Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T19:26:13.765Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T19:26:13.765Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:26:13.765Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T19:26:13.765Z] 
Data Files Check:
[2026-02-06T19:26:13.766Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177471 bytes)
[2026-02-06T19:26:13.827Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9053965 bytes)
[2026-02-06T19:26:13.827Z] 
========================================
[2026-02-06T19:26:13.827Z] Starting Enhanced Discord Bot...
[2026-02-06T19:26:13.827Z] ========================================
[2026-02-06T19:26:14.372Z] [BOT] ✅ Loaded V2 database: 1907 jobs
[2026-02-06T19:26:14.991Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T19:26:14.991Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T19:26:14.991Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T19:26:15.010Z] [BOT] ✅ Loaded pending queue: 224 total (174 pending, 50 enriched, 0 posted)
[2026-02-06T19:26:15.011Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:26:15.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T19:26:15.012Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T19:26:15.012Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:26:15.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T19:26:15.013Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-06T19:26:15.013Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T19:26:15.024Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T19:26:15.024Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T19:26:15.024Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-06T19:26:15.024Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-06T19:26:15.025Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T19:26:15.025Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-06T19:26:15.025Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
[2026-02-06T19:26:15.047Z] [BOT] ✅ Loaded pending queue: 224 total (174 pending, 50 enriched, 0 posted)
[2026-02-06T19:26:15.069Z] [BOT] ✅ Saved pending queue: 181 total (174 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (43 blacklisted)
[2026-02-06T19:26:15.069Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T19:26:15.069Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T19:26:15.070Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T19:26:15.073Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-02-06T19:26:15.074Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), New York City " @ verkada
[2026-02-06T19:26:15.074Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T19:26:15.090Z] [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T19:26:15.320Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #💰・finance-jobs
[2026-02-06T19:26:15.320Z] [BOT] ✅ Industry: Sales Development Representative (AAE), New York City  @ verkada
[2026-02-06T19:26:15.321Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → category channel (1 total channels)
[2026-02-06T19:26:15.322Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T19:26:15.369Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T19:26:15.370Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T19:26:15.379Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:26:15.379Z] [BOT] 💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T19:26:15.380Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T19:26:15.385Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 1904 active
[2026-02-06T19:26:15.499Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:17.247Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #🗽・JID_98d4f0de
[2026-02-06T19:26:17.247Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T19:26:17.247Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → location channel (2 total channels)
[2026-02-06T19:26:17.248Z] [BOT] 💾 BEFORE MERGE: 1904 jobs in memory (cached)
[2026-02-06T19:26:17.290Z] [BOT] ✅ Loaded V2 database: 1904 jobs
💾 DISK STATE: 1904 jobs on disk
[2026-02-06T19:26:17.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1904
[2026-02-06T19:26:17.298Z] [BOT] 🔀 Deep merged: Sales Development Representative (AAE), New York City  @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1904 jobs (merged disk + memory)
[2026-02-06T19:26:17.300Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-02-06T19:26:17.414Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:18.914Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Phoenix" @ verkada
   Category: FINANCE (matched: "tax")
[2026-02-06T19:26:18.914Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T19:26:19.139Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Phoenix @ verkada in #💰・finance-jobs
  ✅ Industry: Sales Development Representative (AAE), Phoenix @ verkada
[2026-02-06T19:26:19.140Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Phoenix @ verkada → category channel (1 total channels)
[2026-02-06T19:26:19.140Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-06T19:26:19.183Z] [BOT] ✅ Loaded V2 database: 1904 jobs
💾 DISK STATE: 1904 jobs on disk
[2026-02-06T19:26:19.183Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-06T19:26:19.190Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-06T19:26:19.191Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-06T19:26:19.303Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:20.805Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (Corp)" @ verkada
[2026-02-06T19:26:20.805Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T19:26:21.015Z] [BOT] ✅ Posted message: Strategic Account Executive (Corp) @ verkada in #💰・finance-jobs
[2026-02-06T19:26:21.016Z] [BOT] ✅ Industry: Strategic Account Executive (Corp) @ verkada
[2026-02-06T19:26:21.016Z] [BOT] 💾 Added channel posting: Strategic Account Executive (Corp) @ verkada → category channel (1 total channels)
[2026-02-06T19:26:21.017Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-06T19:26:21.060Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-06T19:26:21.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-06T19:26:21.067Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-06T19:26:21.069Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-06T19:26:21.166Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:25.668Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T19:26:25.669Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-02-06T19:26:25.669Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T19:26:25.900Z] [BOT] ✅ Posted message: Solutions Engineer @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineer @ verkada
[2026-02-06T19:26:25.901Z] [BOT] 💾 Added channel posting: Solutions Engineer @ verkada → category channel (1 total channels)
[2026-02-06T19:26:25.901Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T19:26:25.943Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
[2026-02-06T19:26:25.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T19:26:25.952Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:26:25.953Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T19:26:25.954Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T19:26:26.065Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:30.566Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T19:26:30.568Z] [BOT] 📍 [ROUTING] "Cloud Finance, R&D" @ datadog
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-06T19:26:30.568Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T19:26:30.754Z] [BOT] ✅ Posted message: Cloud Finance, R&D @ datadog in #📊・JID_fb739488
  ✅ Industry: Cloud Finance, R&D @ datadog
[2026-02-06T19:26:30.755Z] [BOT] 💾 Added channel posting: Cloud Finance, R&D @ datadog → category channel (1 total channels)
[2026-02-06T19:26:30.755Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T19:26:30.798Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T19:26:30.800Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T19:26:30.805Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:26:30.805Z] [BOT] 💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T19:26:30.806Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-06T19:26:30.920Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:33.030Z] [BOT] ✅ Posted message: Cloud Finance, R&D @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T19:26:33.030Z] [BOT] 💾 Added channel posting: Cloud Finance, R&D @ datadog → location channel (2 total channels)
[2026-02-06T19:26:33.030Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T19:26:33.073Z] [BOT] ✅ Loaded V2 database: 1908 jobs
💾 DISK STATE: 1908 jobs on disk
[2026-02-06T19:26:33.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T19:26:33.080Z] [BOT] 🔀 Deep merged: Cloud Finance, R&D @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T19:26:33.082Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-06T19:26:33.191Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:37.689Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T19:26:37.690Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdca6ad9..." not found, but found as SHA256 "c0e6517a4dcc8305"
[2026-02-06T19:26:37.690Z] [BOT] ⏭️  Skipping duplicate: JID_aa58a0bd (posted within 7 days)
[2026-02-06T19:26:37.691Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "c658bd2d6af65c70"
[2026-02-06T19:26:37.691Z] [BOT] ⏭️  Skipping duplicate: JID_f905c4bf (posted within 7 days)
[2026-02-06T19:26:37.691Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "911d9bdffc96172b"
[2026-02-06T19:26:37.691Z] [BOT] ⏭️  Skipping duplicate: JID_a1c0a588 (posted within 7 days)
[2026-02-06T19:26:37.691Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d7052a3..." not found, but found as SHA256 "7ec4629cd7373577"
[2026-02-06T19:26:37.692Z] [BOT] ⏭️  Skipping duplicate: JID_dce564fc (posted within 7 days)
[2026-02-06T19:26:37.692Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_254fa289..." not found, but found as SHA256 "c5a4a617d782af59"
⏭️  Skipping duplicate: JID_254fa289 (posted within 7 days)
[2026-02-06T19:26:37.706Z] [BOT] ✅ Loaded pending queue: 181 total (174 pending, 7 enriched, 0 posted)
[2026-02-06T19:26:37.723Z] [BOT] ✅ Saved pending queue: 181 total (174 pending, 2 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T19:26:37.851Z] [BOT] 📂 Loaded 12582 existing routing entries
[2026-02-06T19:26:37.969Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 12587
   Timestamp: 2026-02-06T19:26:37.923Z
[2026-02-06T19:26:37.970Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
   Successful: 7
   Failed: 0
   Skipped: 45
[2026-02-06T19:26:37.970Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 4
   Top channels:
     1. #💰・finance-jobs: 3 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #💻・tech-jobs: 1 posts
[2026-02-06T19:26:37.970Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T19:26:38.031Z] [BOT] ✅ Loaded V2 database: 1908 jobs
💾 DISK STATE: 1908 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T19:26:38.033Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T19:26:38.034Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-06T19:26:38.145Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:26:38.146Z] [BOT] ✅ Database saved successfully
[2026-02-06T19:26:40.161Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*