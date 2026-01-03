# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T09:25:23.133Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T09:24:39.268Z] ========================================
[2026-01-03T09:24:39.270Z] Discord Bot Execution Log
[2026-01-03T09:24:39.270Z] Environment: GitHub Actions
[2026-01-03T09:24:39.270Z] Node Version: v20.19.6
[2026-01-03T09:24:39.270Z] ========================================
[2026-01-03T09:24:39.270Z] Environment Variables Check:
[2026-01-03T09:24:39.270Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T09:24:39.270Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T09:24:39.271Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T09:24:39.271Z] 
Multi-Channel Configuration:
[2026-01-03T09:24:39.271Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T09:24:39.271Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T09:24:39.271Z] 
Data Files Check:
[2026-01-03T09:24:39.272Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153942 bytes)
[2026-01-03T09:24:39.274Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 182241 bytes)
[2026-01-03T09:24:39.274Z] 
========================================
[2026-01-03T09:24:39.274Z] Starting Enhanced Discord Bot...
[2026-01-03T09:24:39.274Z] ========================================
[2026-01-03T09:24:39.795Z] [BOT] ✅ Loaded V2 database: 334 jobs
[2026-01-03T09:24:40.722Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T09:24:40.722Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T09:24:40.723Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T09:24:40.723Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T09:24:40.793Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T09:24:40.888Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T09:24:40.890Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T09:24:40.890Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T09:24:40.890Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T09:24:40.891Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T09:24:40.891Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T09:24:40.896Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T09:24:40.896Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Rocky Mountains" @ verkada
[2026-01-03T09:24:40.896Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:24:40.901Z] [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T09:24:41.103Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Rocky Mountains @ verkada in #💻・tech-jobs
[2026-01-03T09:24:41.103Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Rocky Mountains @ verkada
[2026-01-03T09:24:42.606Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Rocky Mountains @ verkada (instance #1)
[2026-01-03T09:24:42.606Z] [BOT] 💾 BEFORE ARCHIVING: 335 jobs in database
[2026-01-03T09:24:42.606Z] [BOT] ✅ No jobs to archive (all 335 jobs within 7-day window)
[2026-01-03T09:24:42.613Z] [BOT] 💾 Saved posted_jobs.json: 335 active jobs
[2026-01-03T09:24:42.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:24:42.614Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southeast" @ verkada
[2026-01-03T09:24:42.614Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:24:42.883Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southeast @ verkada in #💻・tech-jobs
[2026-01-03T09:24:42.883Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Southeast @ verkada
[2026-01-03T09:24:44.384Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southeast @ verkada (instance #1)
[2026-01-03T09:24:44.384Z] [BOT] 💾 BEFORE ARCHIVING: 336 jobs in database
[2026-01-03T09:24:44.384Z] [BOT] ✅ No jobs to archive (all 336 jobs within 7-day window)
[2026-01-03T09:24:44.388Z] [BOT] 💾 Saved posted_jobs.json: 336 active jobs
[2026-01-03T09:24:44.388Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:24:44.389Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southern California" @ verkada
[2026-01-03T09:24:44.389Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:24:44.898Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southern California @ verkada in #💻・tech-jobs
[2026-01-03T09:24:44.898Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Southern California @ verkada
[2026-01-03T09:24:46.583Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southern California @ verkada in #🦢・los-angeles
[2026-01-03T09:24:46.583Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T09:24:48.084Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southern California @ verkada (instance #1)
[2026-01-03T09:24:48.084Z] [BOT] 💾 BEFORE ARCHIVING: 337 jobs in database
[2026-01-03T09:24:48.084Z] [BOT] ✅ No jobs to archive (all 337 jobs within 7-day window)
[2026-01-03T09:24:48.087Z] [BOT] 💾 Saved posted_jobs.json: 337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:24:48.088Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, West Coast" @ verkada
[2026-01-03T09:24:48.088Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:24:48.497Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, West Coast @ verkada in #💻・tech-jobs
[2026-01-03T09:24:48.497Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, West Coast @ verkada
[2026-01-03T09:24:50.205Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, West Coast @ verkada in #🌧️・seattle
[2026-01-03T09:24:50.205Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-03T09:24:51.706Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, West Coast @ verkada (instance #1)
[2026-01-03T09:24:51.706Z] [BOT] 💾 BEFORE ARCHIVING: 338 jobs in database
[2026-01-03T09:24:51.706Z] [BOT] ✅ No jobs to archive (all 338 jobs within 7-day window)
[2026-01-03T09:24:51.710Z] [BOT] 💾 Saved posted_jobs.json: 338 active jobs
[2026-01-03T09:24:51.710Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:24:54.711Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T09:24:54.711Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Midwest" @ verkada
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T09:24:54.939Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Midwest @ verkada in #📈・JID_fb739488
[2026-01-03T09:24:54.939Z] [BOT] ✅ Industry: National Channel Sales Manager, Midwest @ verkada
[2026-01-03T09:24:56.634Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Midwest @ verkada in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T09:24:58.135Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Midwest @ verkada (instance #1)
[2026-01-03T09:24:58.136Z] [BOT] 💾 BEFORE ARCHIVING: 339 jobs in database
[2026-01-03T09:24:58.136Z] [BOT] ✅ No jobs to archive (all 339 jobs within 7-day window)
[2026-01-03T09:24:58.139Z] [BOT] 💾 Saved posted_jobs.json: 339 active jobs
[2026-01-03T09:24:58.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:01.141Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T09:25:01.141Z] [BOT] 📍 [ROUTING] "Regional Sales Manager, Mid-Market" @ verkada
[2026-01-03T09:25:01.141Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:25:01.358Z] [BOT] ✅ Created forum post: 🏢 Regional Sales Manager, Mid-Market @ verkada in #💲・sales-jobs
[2026-01-03T09:25:01.358Z] [BOT] ✅ Industry: Regional Sales Manager, Mid-Market @ verkada
[2026-01-03T09:25:02.860Z] [BOT] 💾 Marked as posted: Regional Sales Manager, Mid-Market @ verkada (instance #1)
[2026-01-03T09:25:02.860Z] [BOT] 💾 BEFORE ARCHIVING: 340 jobs in database
[2026-01-03T09:25:02.860Z] [BOT] ✅ No jobs to archive (all 340 jobs within 7-day window)
[2026-01-03T09:25:02.863Z] [BOT] 💾 Saved posted_jobs.json: 340 active jobs
[2026-01-03T09:25:02.864Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:02.864Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), New York City " @ verkada
[2026-01-03T09:25:02.864Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:25:03.126Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), New York City  @ verkada in #💲・sales-jobs
[2026-01-03T09:25:03.126Z] [BOT] ✅ Industry: Sales Development Representative (AAE), New York City  @ verkada
[2026-01-03T09:25:04.931Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), New York City  @ verkada in #🗽・new-york
[2026-01-03T09:25:04.931Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T09:25:06.433Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), New York City  @ verkada (instance #1)
[2026-01-03T09:25:06.433Z] [BOT] 💾 BEFORE ARCHIVING: 341 jobs in database
[2026-01-03T09:25:06.434Z] [BOT] ✅ No jobs to archive (all 341 jobs within 7-day window)
[2026-01-03T09:25:06.437Z] [BOT] 💾 Saved posted_jobs.json: 341 active jobs
[2026-01-03T09:25:06.437Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:06.437Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Phoenix" @ verkada
[2026-01-03T09:25:06.437Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:25:06.737Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), Phoenix @ verkada in #💲・sales-jobs
  ✅ Industry: Sales Development Representative (AAE), Phoenix @ verkada
[2026-01-03T09:25:08.239Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Phoenix @ verkada (instance #1)
[2026-01-03T09:25:08.239Z] [BOT] 💾 BEFORE ARCHIVING: 342 jobs in database
[2026-01-03T09:25:08.239Z] [BOT] ✅ No jobs to archive (all 342 jobs within 7-day window)
[2026-01-03T09:25:08.242Z] [BOT] 💾 Saved posted_jobs.json: 342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:11.244Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-03T09:25:11.244Z] [BOT] 📍 [ROUTING] "Sales Recruiter" @ verkada
[2026-01-03T09:25:11.244Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T09:25:11.556Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter @ verkada in #📁・JID_e938df7b
[2026-01-03T09:25:11.556Z] [BOT] ✅ Industry: Sales Recruiter @ verkada
[2026-01-03T09:25:13.256Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter @ verkada in #🗽・new-york
[2026-01-03T09:25:13.257Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T09:25:14.758Z] [BOT] 💾 Marked as posted: Sales Recruiter @ verkada (instance #1)
[2026-01-03T09:25:14.758Z] [BOT] 💾 BEFORE ARCHIVING: 343 jobs in database
[2026-01-03T09:25:14.758Z] [BOT] ✅ No jobs to archive (all 343 jobs within 7-day window)
[2026-01-03T09:25:14.762Z] [BOT] 💾 Saved posted_jobs.json: 343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:14.762Z] [BOT] 📍 [ROUTING] "Sales Recruiter, Salt Lake City" @ verkada
[2026-01-03T09:25:14.763Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T09:25:15.030Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter, Salt Lake City @ verkada in #📁・JID_e938df7b
  ✅ Industry: Sales Recruiter, Salt Lake City @ verkada
[2026-01-03T09:25:16.532Z] [BOT] 💾 Marked as posted: Sales Recruiter, Salt Lake City @ verkada (instance #1)
[2026-01-03T09:25:16.532Z] [BOT] 💾 BEFORE ARCHIVING: 344 jobs in database
[2026-01-03T09:25:16.532Z] [BOT] ✅ No jobs to archive (all 344 jobs within 7-day window)
[2026-01-03T09:25:16.535Z] [BOT] 💾 Saved posted_jobs.json: 344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:25:19.536Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_b75dc978 (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_64e076e0 (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_3fa8d492 (posted within 7 days)
⏭️  Skipping duplicate: JID_d5432eed (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_3e27f1f0 (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_81e4bb0d (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_aa58a0bd (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_f905c4bf (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_18d5239c (posted within 7 days)
[2026-01-03T09:25:19.537Z] [BOT] ⏭️  Skipping duplicate: JID_d3455369 (posted within 7 days)
[2026-01-03T09:25:19.615Z] [BOT] ✅ Loaded pending queue: 955 total (935 pending, 20 enriched, 0 posted)
[2026-01-03T09:25:19.731Z] [BOT] ✅ Saved pending queue: 955 total (935 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T09:25:19.731Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T09:25:19.774Z] [BOT] 📂 Loaded 1343 existing routing entries
[2026-01-03T09:25:19.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1353
   Timestamp: 2026-01-03T09:25:19.814Z
[2026-01-03T09:25:19.820Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 15
[2026-01-03T09:25:19.820Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💲・sales-jobs: 3 posts
     3. #🗽・new-york: 2 posts
     4. #📁・JID_e938df7b: 2 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-03T09:25:19.821Z] [BOT] [STATS] Channel stats saved
[2026-01-03T09:25:21.838Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*