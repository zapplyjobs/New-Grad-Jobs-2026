# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T06:28:10.339Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T06:27:21.609Z] ========================================
[2026-01-13T06:27:21.611Z] Discord Bot Execution Log
[2026-01-13T06:27:21.611Z] Environment: GitHub Actions
[2026-01-13T06:27:21.611Z] Node Version: v20.19.6
[2026-01-13T06:27:21.611Z] ========================================
[2026-01-13T06:27:21.611Z] Environment Variables Check:
[2026-01-13T06:27:21.611Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T06:27:21.611Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.611Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T06:27:21.611Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T06:27:21.611Z] 
Multi-Channel Configuration:
[2026-01-13T06:27:21.612Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T06:27:21.612Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T06:27:21.612Z] 
Data Files Check:
[2026-01-13T06:27:21.613Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157977 bytes)
[2026-01-13T06:27:21.617Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 417003 bytes)
[2026-01-13T06:27:21.617Z] 
========================================
[2026-01-13T06:27:21.617Z] Starting Enhanced Discord Bot...
[2026-01-13T06:27:21.617Z] ========================================
[2026-01-13T06:27:22.129Z] [BOT] ✅ Loaded V2 database: 793 jobs
[2026-01-13T06:27:22.723Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T06:27:22.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T06:27:22.724Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T06:27:22.839Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Solutions Engineer, West Coast at verkada
[2026-01-13T06:27:22.841Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T06:27:22.841Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T06:27:22.841Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T06:27:22.842Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-13T06:27:22.842Z] [BOT] (5 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Project Engineer, Global Services @ verkada: austin, tx united states, austin, tx united states; new york city, ny united states; philadelphia, pa united states; tampa, fl united states, philadelphia, pa united states, tampa, fl united states, new york city, ny united states, chicago, il united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T06:27:22.842Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T06:27:22.847Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T06:27:22.848Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, West Coast" @ verkada
[2026-01-13T06:27:22.848Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:27:22.852Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T06:27:23.003Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, West Coast @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, West Coast @ verkada
[2026-01-13T06:27:24.648Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, West Coast @ verkada in #🌧️・seattle
[2026-01-13T06:27:24.648Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-13T06:27:26.150Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, West Coast @ verkada (instance #1)
[2026-01-13T06:27:26.150Z] [BOT] 💾 BEFORE ARCHIVING: 794 jobs in database
[2026-01-13T06:27:26.151Z] [BOT] ✅ No jobs to archive (all 794 jobs within 7-day window)
[2026-01-13T06:27:26.161Z] [BOT] 💾 Saved posted_jobs.json: 794 active jobs
[2026-01-13T06:27:26.161Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:26.161Z] [BOT] 📍 [ROUTING] "Senior Project Engineer, Global Services" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T06:27:26.161Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:27:26.298Z] [BOT] ✅ Created forum post: 🏢 Senior Project Engineer, Global Services @ verkada in #💻・tech-jobs
  ✅ Industry: Senior Project Engineer, Global Services @ verkada
[2026-01-13T06:27:28.239Z] [BOT] ✅ Created forum post: 🏢 Senior Project Engineer, Global Services @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T06:27:29.739Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-13T06:27:29.739Z] [BOT] 💾 BEFORE ARCHIVING: 795 jobs in database
[2026-01-13T06:27:29.740Z] [BOT] ✅ No jobs to archive (all 795 jobs within 7-day window)
[2026-01-13T06:27:29.745Z] [BOT] 💾 Saved posted_jobs.json: 795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.746Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-13T06:27:29.746Z] [BOT] 💾 BEFORE ARCHIVING: 796 jobs in database
[2026-01-13T06:27:29.746Z] [BOT] ✅ No jobs to archive (all 796 jobs within 7-day window)
[2026-01-13T06:27:29.751Z] [BOT] 💾 Saved posted_jobs.json: 796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.752Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-13T06:27:29.752Z] [BOT] 💾 BEFORE ARCHIVING: 797 jobs in database
[2026-01-13T06:27:29.752Z] [BOT] ✅ No jobs to archive (all 797 jobs within 7-day window)
[2026-01-13T06:27:29.757Z] [BOT] 💾 Saved posted_jobs.json: 797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.757Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
💾 BEFORE ARCHIVING: 798 jobs in database
[2026-01-13T06:27:29.758Z] [BOT] ✅ No jobs to archive (all 798 jobs within 7-day window)
[2026-01-13T06:27:29.762Z] [BOT] 💾 Saved posted_jobs.json: 798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.763Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-13T06:27:29.763Z] [BOT] 💾 BEFORE ARCHIVING: 799 jobs in database
[2026-01-13T06:27:29.763Z] [BOT] ✅ No jobs to archive (all 799 jobs within 7-day window)
[2026-01-13T06:27:29.768Z] [BOT] 💾 Saved posted_jobs.json: 799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.768Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-13T06:27:29.769Z] [BOT] 💾 BEFORE ARCHIVING: 800 jobs in database
[2026-01-13T06:27:29.769Z] [BOT] ✅ No jobs to archive (all 800 jobs within 7-day window)
[2026-01-13T06:27:29.774Z] [BOT] 💾 Saved posted_jobs.json: 800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:29.774Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T06:27:29.774Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:27:29.922Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineer @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineer @ verkada
[2026-01-13T06:27:31.424Z] [BOT] 💾 Marked as posted: Solutions Engineer @ verkada (instance #1)
[2026-01-13T06:27:31.424Z] [BOT] 💾 BEFORE ARCHIVING: 801 jobs in database
[2026-01-13T06:27:31.425Z] [BOT] ✅ No jobs to archive (all 801 jobs within 7-day window)
[2026-01-13T06:27:31.431Z] [BOT] 💾 Saved posted_jobs.json: 801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:31.431Z] [BOT] 📍 [ROUTING] "Solutions Engineering Manager, Select & Territory" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T06:27:31.432Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:27:31.666Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineering Manager, Select & Territory @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineering Manager, Select & Territory @ verkada
[2026-01-13T06:27:33.406Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineering Manager, Select & Territory @ verkada in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T06:27:34.906Z] [BOT] 💾 Marked as posted: Solutions Engineering Manager, Select & Territory @ verkada (instance #1)
[2026-01-13T06:27:34.907Z] [BOT] 💾 BEFORE ARCHIVING: 802 jobs in database
[2026-01-13T06:27:34.907Z] [BOT] ✅ No jobs to archive (all 802 jobs within 7-day window)
[2026-01-13T06:27:34.914Z] [BOT] 💾 Saved posted_jobs.json: 802 active jobs
[2026-01-13T06:27:34.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:37.915Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T06:27:37.915Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Midwest" @ verkada
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-13T06:27:37.915Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-13T06:27:38.213Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Midwest @ verkada in #📈・JID_fb739488
  ✅ Industry: National Channel Sales Manager, Midwest @ verkada
[2026-01-13T06:27:39.876Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Midwest @ verkada in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T06:27:41.377Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Midwest @ verkada (instance #1)
[2026-01-13T06:27:41.377Z] [BOT] 💾 BEFORE ARCHIVING: 803 jobs in database
[2026-01-13T06:27:41.377Z] [BOT] ✅ No jobs to archive (all 803 jobs within 7-day window)
[2026-01-13T06:27:41.384Z] [BOT] 💾 Saved posted_jobs.json: 803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:44.385Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T06:27:44.385Z] [BOT] 📍 [ROUTING] "Regional Sales Manager, Mid-Market" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:27:44.561Z] [BOT] ✅ Created forum post: 🏢 Regional Sales Manager, Mid-Market @ verkada in #💲・sales-jobs
  ✅ Industry: Regional Sales Manager, Mid-Market @ verkada
[2026-01-13T06:27:46.062Z] [BOT] 💾 Marked as posted: Regional Sales Manager, Mid-Market @ verkada (instance #1)
[2026-01-13T06:27:46.063Z] [BOT] 💾 BEFORE ARCHIVING: 804 jobs in database
[2026-01-13T06:27:46.063Z] [BOT] ✅ No jobs to archive (all 804 jobs within 7-day window)
[2026-01-13T06:27:46.070Z] [BOT] 💾 Saved posted_jobs.json: 804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:46.070Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), New York City " @ verkada
[2026-01-13T06:27:46.070Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:27:46.215Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), New York City  @ verkada in #💲・sales-jobs
  ✅ Industry: Sales Development Representative (AAE), New York City  @ verkada
[2026-01-13T06:27:47.934Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), New York City  @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T06:27:49.436Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), New York City  @ verkada (instance #1)
[2026-01-13T06:27:49.436Z] [BOT] 💾 BEFORE ARCHIVING: 805 jobs in database
[2026-01-13T06:27:49.436Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-13T06:27:49.443Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:52.443Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-13T06:27:52.444Z] [BOT] 📍 [ROUTING] "Sales Recruiter, Salt Lake City" @ verkada
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T06:27:52.774Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter, Salt Lake City @ verkada in #📁・JID_e938df7b
  ✅ Industry: Sales Recruiter, Salt Lake City @ verkada
[2026-01-13T06:27:54.276Z] [BOT] 💾 Marked as posted: Sales Recruiter, Salt Lake City @ verkada (instance #1)
[2026-01-13T06:27:54.276Z] [BOT] 💾 BEFORE ARCHIVING: 806 jobs in database
[2026-01-13T06:27:54.277Z] [BOT] ✅ No jobs to archive (all 806 jobs within 7-day window)
[2026-01-13T06:27:54.283Z] [BOT] 💾 Saved posted_jobs.json: 806 active jobs
[2026-01-13T06:27:54.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:27:57.284Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-13T06:27:57.285Z] [BOT] 📍 [ROUTING] "Senior Channel Marketing Manager, Northeast (Remote)" @ verkada
   Category: MARKETING (matched: "marketing")
[2026-01-13T06:27:57.285Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T06:27:57.700Z] [BOT] ✅ Created forum post: 🏢 Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #📣・marketing-jobs
  ✅ Industry: Senior Channel Marketing Manager, Northeast (Remote) @ verkada
[2026-01-13T06:27:59.393Z] [BOT] ✅ Created forum post: 🏢 Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T06:28:00.894Z] [BOT] 💾 Marked as posted: Senior Channel Marketing Manager, Northeast (Remote) @ verkada (instance #1)
[2026-01-13T06:28:00.894Z] [BOT] 💾 BEFORE ARCHIVING: 807 jobs in database
[2026-01-13T06:28:00.895Z] [BOT] ✅ No jobs to archive (all 807 jobs within 7-day window)
[2026-01-13T06:28:00.902Z] [BOT] 💾 Saved posted_jobs.json: 807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:28:00.903Z] [BOT] 📍 [ROUTING] "Sr. Tradeshow and Event Marketing Manager" @ verkada
[2026-01-13T06:28:00.903Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T06:28:01.102Z] [BOT] ✅ Created forum post: 🏢 Sr. Tradeshow and Event Marketing Manager @ verkada in #📣・marketing-jobs
  ✅ Industry: Sr. Tradeshow and Event Marketing Manager @ verkada
[2026-01-13T06:28:02.803Z] [BOT] ✅ Created forum post: 🏢 Sr. Tradeshow and Event Marketing Manager @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T06:28:04.304Z] [BOT] 💾 Marked as posted: Sr. Tradeshow and Event Marketing Manager @ verkada (instance #1)
[2026-01-13T06:28:04.305Z] [BOT] 💾 BEFORE ARCHIVING: 808 jobs in database
[2026-01-13T06:28:04.305Z] [BOT] ✅ No jobs to archive (all 808 jobs within 7-day window)
[2026-01-13T06:28:04.312Z] [BOT] 💾 Saved posted_jobs.json: 808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:28:07.313Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T06:28:07.313Z] [BOT] ⏭️  Skipping duplicate: JID_d5432eed (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_3e27f1f0 (posted within 7 days)
⏭️  Skipping duplicate: JID_81e4bb0d (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_aa58a0bd (posted within 7 days)
⏭️  Skipping duplicate: JID_d3455369 (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_655e3681 (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_2d34a6fd (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_a1c0a588 (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_6b30789d (posted within 7 days)
[2026-01-13T06:28:07.314Z] [BOT] ⏭️  Skipping duplicate: JID_77ee8e7b (posted within 7 days)
[2026-01-13T06:28:07.437Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[2026-01-13T06:28:07.596Z] [BOT] ✅ Saved pending queue: 2700 total (2680 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T06:28:07.597Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T06:28:07.655Z] [BOT] 📂 Loaded 2935 existing routing entries
[2026-01-13T06:28:07.715Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2945
   Timestamp: 2026-01-13T06:28:07.704Z
[2026-01-13T06:28:07.715Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 17
   Successful: 17
[2026-01-13T06:28:07.715Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-13T06:28:07.716Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 10
   Top channels:
[2026-01-13T06:28:07.716Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🗽・new-york: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-13T06:28:07.716Z] [BOT] [STATS] Channel stats saved
[2026-01-13T06:28:09.742Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*