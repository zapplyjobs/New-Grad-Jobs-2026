# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T09:50:21.701Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T09:49:28.427Z] ========================================
[2026-01-03T09:49:28.428Z] Discord Bot Execution Log
[2026-01-03T09:49:28.428Z] Environment: GitHub Actions
[2026-01-03T09:49:28.428Z] Node Version: v20.19.6
[2026-01-03T09:49:28.429Z] ========================================
[2026-01-03T09:49:28.429Z] Environment Variables Check:
[2026-01-03T09:49:28.429Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T09:49:28.429Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T09:49:28.429Z] 
Multi-Channel Configuration:
[2026-01-03T09:49:28.429Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.429Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.430Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T09:49:28.430Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T09:49:28.430Z] 
Data Files Check:
[2026-01-03T09:49:28.431Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148150 bytes)
[2026-01-03T09:49:28.433Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 192133 bytes)
[2026-01-03T09:49:28.433Z] 
========================================
[2026-01-03T09:49:28.433Z] Starting Enhanced Discord Bot...
[2026-01-03T09:49:28.433Z] ========================================
[2026-01-03T09:49:28.877Z] [BOT] ✅ Loaded V2 database: 354 jobs
[2026-01-03T09:49:29.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T09:49:29.569Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T09:49:29.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T09:49:29.570Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T09:49:29.650Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T09:49:29.739Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T09:49:29.741Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T09:49:29.741Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T09:49:29.742Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T09:49:29.742Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T09:49:29.742Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T09:49:29.747Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-03T09:49:29.748Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (Corp)" @ verkada
[2026-01-03T09:49:29.748Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:29.752Z] [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T09:49:29.961Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (Corp) @ verkada in #💲・sales-jobs
[2026-01-03T09:49:29.961Z] [BOT] ✅ Industry: Strategic Account Executive (Corp) @ verkada
[2026-01-03T09:49:31.463Z] [BOT] 💾 Marked as posted: Strategic Account Executive (Corp) @ verkada (instance #1)
[2026-01-03T09:49:31.463Z] [BOT] 💾 BEFORE ARCHIVING: 355 jobs in database
[2026-01-03T09:49:31.463Z] [BOT] ✅ No jobs to archive (all 355 jobs within 7-day window)
[2026-01-03T09:49:31.469Z] [BOT] 💾 Saved posted_jobs.json: 355 active jobs
[2026-01-03T09:49:31.469Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:31.469Z] [BOT] 📍 [ROUTING] "Tradeshow Associate" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:32.014Z] [BOT] ✅ Created forum post: 🏢 Tradeshow Associate @ verkada in #💲・sales-jobs
[2026-01-03T09:49:32.014Z] [BOT] ✅ Industry: Tradeshow Associate @ verkada
[2026-01-03T09:49:33.714Z] [BOT] ✅ Created forum post: 🏢 Tradeshow Associate @ verkada in #🗽・new-york
[2026-01-03T09:49:33.714Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T09:49:35.214Z] [BOT] 💾 Marked as posted: Tradeshow Associate @ verkada (instance #1)
💾 BEFORE ARCHIVING: 356 jobs in database
[2026-01-03T09:49:35.214Z] [BOT] ✅ No jobs to archive (all 356 jobs within 7-day window)
[2026-01-03T09:49:35.217Z] [BOT] 💾 Saved posted_jobs.json: 356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:35.217Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston (Portuguese-speaking)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T09:49:35.217Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:35.542Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston (Portuguese-speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Manager - Boston (Portuguese-speaking) @ datadog
[2026-01-03T09:49:37.238Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston (Portuguese-speaking) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T09:49:38.739Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston (Portuguese-speaking) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 357 jobs in database
[2026-01-03T09:49:38.739Z] [BOT] ✅ No jobs to archive (all 357 jobs within 7-day window)
[2026-01-03T09:49:38.743Z] [BOT] 💾 Saved posted_jobs.json: 357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:38.744Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Portuguese-speaking)" @ datadog
[2026-01-03T09:49:38.744Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:39.193Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Associate - Boston (Portuguese-speaking) @ datadog
[2026-01-03T09:49:40.873Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T09:49:42.373Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston (Portuguese-speaking) @ datadog (instance #1)
[2026-01-03T09:49:42.373Z] [BOT] 💾 BEFORE ARCHIVING: 358 jobs in database
[2026-01-03T09:49:42.373Z] [BOT] ✅ No jobs to archive (all 358 jobs within 7-day window)
[2026-01-03T09:49:42.377Z] [BOT] 💾 Saved posted_jobs.json: 358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:42.377Z] [BOT] 📍 [ROUTING] "Strategic Finance Manager, GTM" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:42.609Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance Manager, GTM @ vercel in #💲・sales-jobs
  ✅ Industry: Strategic Finance Manager, GTM @ vercel
[2026-01-03T09:49:44.559Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance Manager, GTM @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T09:49:46.059Z] [BOT] 💾 Marked as posted: Strategic Finance Manager, GTM @ vercel (instance #1)
💾 BEFORE ARCHIVING: 359 jobs in database
[2026-01-03T09:49:46.060Z] [BOT] ✅ No jobs to archive (all 359 jobs within 7-day window)
[2026-01-03T09:49:46.063Z] [BOT] 💾 Saved posted_jobs.json: 359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:46.063Z] [BOT] 📍 [ROUTING] "Mid-Market Sales Engineer (Boston)" @ datadog
[2026-01-03T09:49:46.064Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:49:46.221Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Sales Engineer (Boston) @ datadog in #💲・sales-jobs
  ✅ Industry: Mid-Market Sales Engineer (Boston) @ datadog
[2026-01-03T09:49:47.944Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Sales Engineer (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T09:49:49.445Z] [BOT] 💾 Marked as posted: Mid-Market Sales Engineer (Boston) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 360 jobs in database
[2026-01-03T09:49:49.445Z] [BOT] ✅ No jobs to archive (all 360 jobs within 7-day window)
[2026-01-03T09:49:49.448Z] [BOT] 💾 Saved posted_jobs.json: 360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:52.448Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T09:49:52.448Z] [BOT] 📍 [ROUTING] "Senior Manager, People Business Partner - NYC" @ datadog
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T09:49:52.714Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Business Partner - NYC @ datadog in #📣・marketing-jobs
[2026-01-03T09:49:52.714Z] [BOT] ✅ Industry: Senior Manager, People Business Partner - NYC @ datadog
[2026-01-03T09:49:54.448Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Business Partner - NYC @ datadog in #🗽・new-york
[2026-01-03T09:49:54.448Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T09:49:55.949Z] [BOT] 💾 Marked as posted: Senior Manager, People Business Partner - NYC @ datadog (instance #1)
[2026-01-03T09:49:55.950Z] [BOT] 💾 BEFORE ARCHIVING: 361 jobs in database
[2026-01-03T09:49:55.950Z] [BOT] ✅ No jobs to archive (all 361 jobs within 7-day window)
[2026-01-03T09:49:55.953Z] [BOT] 💾 Saved posted_jobs.json: 361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:49:58.953Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T09:49:58.953Z] [BOT] 📍 [ROUTING] "Senior Privacy Counsel" @ discord
   Category: HR (matched: "recruiter")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T09:49:59.208Z] [BOT] ✅ Created forum post: 🏢 Senior Privacy Counsel @ discord in #📁・JID_e938df7b
[2026-01-03T09:49:59.208Z] [BOT] ✅ Industry: Senior Privacy Counsel @ discord
[2026-01-03T09:50:00.922Z] [BOT] ✅ Created forum post: 🏢 Senior Privacy Counsel @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T09:50:02.423Z] [BOT] 💾 Marked as posted: Senior Privacy Counsel @ discord (instance #1)
[2026-01-03T09:50:02.424Z] [BOT] 💾 BEFORE ARCHIVING: 362 jobs in database
[2026-01-03T09:50:02.424Z] [BOT] ✅ No jobs to archive (all 362 jobs within 7-day window)
[2026-01-03T09:50:02.428Z] [BOT] 💾 Saved posted_jobs.json: 362 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:50:05.428Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T09:50:05.428Z] [BOT] 📍 [ROUTING] "Software Engineer, Consumer Revenue " @ discord
[2026-01-03T09:50:05.429Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T09:50:05.812Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Consumer Revenue  @ discord in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Consumer Revenue  @ discord
[2026-01-03T09:50:07.583Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Consumer Revenue  @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T09:50:09.084Z] [BOT] 💾 Marked as posted: Software Engineer, Consumer Revenue  @ discord (instance #1)
[2026-01-03T09:50:09.085Z] [BOT] 💾 BEFORE ARCHIVING: 363 jobs in database
[2026-01-03T09:50:09.085Z] [BOT] ✅ No jobs to archive (all 363 jobs within 7-day window)
[2026-01-03T09:50:09.088Z] [BOT] 💾 Saved posted_jobs.json: 363 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:50:12.089Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T09:50:12.090Z] [BOT] 📍 [ROUTING] "Manager, People Analytics Data Platform" @ datadog
[2026-01-03T09:50:12.090Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:50:12.318Z] [BOT] ✅ Created forum post: 🏢 Manager, People Analytics Data Platform @ datadog in #💻・tech-jobs
  ✅ Industry: Manager, People Analytics Data Platform @ datadog
[2026-01-03T09:50:14.146Z] [BOT] ✅ Created forum post: 🏢 Manager, People Analytics Data Platform @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T09:50:15.647Z] [BOT] 💾 Marked as posted: Manager, People Analytics Data Platform @ datadog (instance #1)
[2026-01-03T09:50:15.647Z] [BOT] 💾 BEFORE ARCHIVING: 364 jobs in database
[2026-01-03T09:50:15.647Z] [BOT] ✅ No jobs to archive (all 364 jobs within 7-day window)
[2026-01-03T09:50:15.651Z] [BOT] 💾 Saved posted_jobs.json: 364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:50:18.652Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_dce564fc (posted within 7 days)
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_297ef683 (posted within 7 days)
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_e5a693b8 (posted within 7 days)
⏭️  Skipping duplicate: JID_4625054f (posted within 7 days)
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_5aed90fd (posted within 7 days)
⏭️  Skipping duplicate: JID_a65e0bad (posted within 7 days)
⏭️  Skipping duplicate: JID_61aeb04f (posted within 7 days)
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_b286e46f (posted within 7 days)
⏭️  Skipping duplicate: JID_9ad24dae (posted within 7 days)
[2026-01-03T09:50:18.652Z] [BOT] ⏭️  Skipping duplicate: JID_6c4823a9 (posted within 7 days)
[2026-01-03T09:50:18.750Z] [BOT] ✅ Loaded pending queue: 935 total (915 pending, 20 enriched, 0 posted)
[2026-01-03T09:50:18.860Z] [BOT] ✅ Saved pending queue: 935 total (915 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T09:50:18.905Z] [BOT] 📂 Loaded 1358 existing routing entries
[2026-01-03T09:50:18.950Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1368
   Timestamp: 2026-01-03T09:50:18.945Z
[2026-01-03T09:50:18.950Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T09:50:18.950Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-03T09:50:18.950Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-03T09:50:18.950Z] [BOT] Channels used: 8
   Top channels:
     1. #💲・sales-jobs: 6 posts
     2. #🌉・san-francisco: 4 posts
     3. #🚌・boston: 3 posts
     4. #🗽・new-york: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T09:50:18.951Z] [BOT] [STATS] Channel stats saved
[2026-01-03T09:50:20.963Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*