# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T20:54:33.734Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T20:53:40.392Z] ========================================
[2026-01-12T20:53:40.394Z] Discord Bot Execution Log
[2026-01-12T20:53:40.394Z] Environment: GitHub Actions
[2026-01-12T20:53:40.395Z] Node Version: v20.19.6
[2026-01-12T20:53:40.395Z] ========================================
[2026-01-12T20:53:40.395Z] Environment Variables Check:
[2026-01-12T20:53:40.395Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T20:53:40.395Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.395Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T20:53:40.395Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T20:53:40.395Z] 
Multi-Channel Configuration:
[2026-01-12T20:53:40.395Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.395Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T20:53:40.396Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T20:53:40.396Z] 
Data Files Check:
[2026-01-12T20:53:40.397Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155281 bytes)
[2026-01-12T20:53:40.400Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 269097 bytes)
[2026-01-12T20:53:40.400Z] 
========================================
[2026-01-12T20:53:40.400Z] Starting Enhanced Discord Bot...
[2026-01-12T20:53:40.400Z] ========================================
[2026-01-12T20:53:40.930Z] [BOT] ✅ Loaded V2 database: 489 jobs
[2026-01-12T20:53:41.419Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T20:53:41.420Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T20:53:41.420Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T20:53:41.548Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mid Market Account Executive at datadog
[2026-01-12T20:53:41.550Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T20:53:41.551Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T20:53:41.551Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T20:53:41.552Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-12T20:53:41.552Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Mid Market Account Executive @ datadog: denver, colorado, usa, new york, new york, usa
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-12T20:53:41.552Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T20:53:41.557Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-12T20:53:41.557Z] [BOT] 📍 [ROUTING] "Mid Market Account Executive" @ datadog
[2026-01-12T20:53:41.557Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:53:41.562Z] [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T20:53:41.718Z] [BOT] ✅ Created forum post: 🏢 Mid Market Account Executive @ datadog in #💲・sales-jobs
[2026-01-12T20:53:41.718Z] [BOT] ✅ Industry: Mid Market Account Executive @ datadog
[2026-01-12T20:53:43.221Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
[2026-01-12T20:53:43.221Z] [BOT] 💾 BEFORE ARCHIVING: 490 jobs in database
[2026-01-12T20:53:43.222Z] [BOT] ✅ No jobs to archive (all 490 jobs within 7-day window)
[2026-01-12T20:53:43.230Z] [BOT] 💾 Saved posted_jobs.json: 490 active jobs
[2026-01-12T20:53:43.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:53:43.231Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 491 jobs in database
[2026-01-12T20:53:43.231Z] [BOT] ✅ No jobs to archive (all 491 jobs within 7-day window)
[2026-01-12T20:53:43.235Z] [BOT] 💾 Saved posted_jobs.json: 491 active jobs
[2026-01-12T20:53:43.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:53:43.235Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (Boston)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-12T20:53:43.235Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:53:43.758Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (Boston) @ datadog in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Executive (Boston) @ datadog
[2026-01-12T20:53:45.486Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T20:53:46.987Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (Boston) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 492 jobs in database
[2026-01-12T20:53:46.988Z] [BOT] ✅ No jobs to archive (all 492 jobs within 7-day window)
[2026-01-12T20:53:46.993Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:53:46.993Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (San Francisco)" @ datadog
[2026-01-12T20:53:46.993Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:53:47.294Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (San Francisco) @ datadog in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Executive (San Francisco) @ datadog
[2026-01-12T20:53:49.116Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (San Francisco) @ datadog in #🌉・san-francisco
[2026-01-12T20:53:49.116Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T20:53:50.616Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (San Francisco) @ datadog (instance #1)
[2026-01-12T20:53:50.617Z] [BOT] 💾 BEFORE ARCHIVING: 493 jobs in database
[2026-01-12T20:53:50.617Z] [BOT] ✅ No jobs to archive (all 493 jobs within 7-day window)
[2026-01-12T20:53:50.622Z] [BOT] 💾 Saved posted_jobs.json: 493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:53:53.623Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-12T20:53:53.623Z] [BOT] 📍 [ROUTING] "Office Operations Associate - NYC" @ datadog
[2026-01-12T20:53:53.623Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:53:53.923Z] [BOT] ✅ Created forum post: 🏢 Office Operations Associate - NYC @ datadog in #📣・marketing-jobs
[2026-01-12T20:53:53.924Z] [BOT] ✅ Industry: Office Operations Associate - NYC @ datadog
[2026-01-12T20:53:55.618Z] [BOT] ✅ Created forum post: 🏢 Office Operations Associate - NYC @ datadog in #🗽・new-york
[2026-01-12T20:53:55.618Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:53:57.118Z] [BOT] 💾 Marked as posted: Office Operations Associate - NYC @ datadog (instance #1)
[2026-01-12T20:53:57.118Z] [BOT] 💾 BEFORE ARCHIVING: 494 jobs in database
[2026-01-12T20:53:57.119Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2026-01-12T20:53:57.124Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
[2026-01-12T20:53:57.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:53:57.125Z] [BOT] 📍 [ROUTING] "Product Marketing Manager - Log Management" @ datadog
   Category: MARKETING (matched: "marketing")
[2026-01-12T20:53:57.125Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:53:57.321Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - Log Management @ datadog in #📣・marketing-jobs
  ✅ Industry: Product Marketing Manager - Log Management @ datadog
[2026-01-12T20:53:58.960Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - Log Management @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T20:54:00.460Z] [BOT] 💾 Marked as posted: Product Marketing Manager - Log Management @ datadog (instance #1)
[2026-01-12T20:54:00.460Z] [BOT] 💾 BEFORE ARCHIVING: 495 jobs in database
[2026-01-12T20:54:00.461Z] [BOT] ✅ No jobs to archive (all 495 jobs within 7-day window)
[2026-01-12T20:54:00.466Z] [BOT] 💾 Saved posted_jobs.json: 495 active jobs
[2026-01-12T20:54:00.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:03.466Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T20:54:03.467Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 3 - NYC" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-12T20:54:03.467Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:54:03.798Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 3 - NYC @ datadog in #💻・tech-jobs
[2026-01-12T20:54:03.798Z] [BOT] ✅ Industry: Premier Support Engineer 3 - NYC @ datadog
[2026-01-12T20:54:05.513Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 3 - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:54:07.014Z] [BOT] 💾 Marked as posted: Premier Support Engineer 3 - NYC @ datadog (instance #1)
[2026-01-12T20:54:07.015Z] [BOT] 💾 BEFORE ARCHIVING: 496 jobs in database
[2026-01-12T20:54:07.015Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2026-01-12T20:54:07.020Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
[2026-01-12T20:54:07.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:07.020Z] [BOT] 📍 [ROUTING] "Principal Partner Manager - Cloud Alliances" @ datadog
[2026-01-12T20:54:07.020Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:54:07.315Z] [BOT] ✅ Created forum post: 🏢 Principal Partner Manager - Cloud Alliances @ datadog in #💻・tech-jobs
  ✅ Industry: Principal Partner Manager - Cloud Alliances @ datadog
[2026-01-12T20:54:09.441Z] [BOT] ✅ Created forum post: 🏢 Principal Partner Manager - Cloud Alliances @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T20:54:10.943Z] [BOT] 💾 Marked as posted: Principal Partner Manager - Cloud Alliances @ datadog (instance #1)
[2026-01-12T20:54:10.943Z] [BOT] 💾 BEFORE ARCHIVING: 497 jobs in database
[2026-01-12T20:54:10.943Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2026-01-12T20:54:10.948Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
[2026-01-12T20:54:10.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:10.948Z] [BOT] 📍 [ROUTING] "Product Marketing Manager (Product Analytics)" @ datadog
[2026-01-12T20:54:10.948Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T20:54:11.235Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager (Product Analytics) @ datadog in #💻・tech-jobs
[2026-01-12T20:54:11.235Z] [BOT] ✅ Industry: Product Marketing Manager (Product Analytics) @ datadog
[2026-01-12T20:54:12.921Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager (Product Analytics) @ datadog in #🗽・new-york
[2026-01-12T20:54:12.921Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:54:14.421Z] [BOT] 💾 Marked as posted: Product Marketing Manager (Product Analytics) @ datadog (instance #1)
[2026-01-12T20:54:14.421Z] [BOT] 💾 BEFORE ARCHIVING: 498 jobs in database
[2026-01-12T20:54:14.421Z] [BOT] ✅ No jobs to archive (all 498 jobs within 7-day window)
[2026-01-12T20:54:14.427Z] [BOT] 💾 Saved posted_jobs.json: 498 active jobs
[2026-01-12T20:54:14.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:17.428Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-12T20:54:17.429Z] [BOT] 📍 [ROUTING] "Product Manager II - Incident Management" @ datadog
[2026-01-12T20:54:17.429Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-12T20:54:17.747Z] [BOT] ✅ Created forum post: 🏢 Product Manager II - Incident Management @ datadog in #📦・product-jobs
  ✅ Industry: Product Manager II - Incident Management @ datadog
[2026-01-12T20:54:19.508Z] [BOT] ✅ Created forum post: 🏢 Product Manager II - Incident Management @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:54:21.010Z] [BOT] 💾 Marked as posted: Product Manager II - Incident Management @ datadog (instance #1)
[2026-01-12T20:54:21.010Z] [BOT] 💾 BEFORE ARCHIVING: 499 jobs in database
[2026-01-12T20:54:21.010Z] [BOT] ✅ No jobs to archive (all 499 jobs within 7-day window)
[2026-01-12T20:54:21.015Z] [BOT] 💾 Saved posted_jobs.json: 499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:21.015Z] [BOT] 💾 Marked as posted: Product Manager II - Software Delivery Suite @ datadog (instance #1)
💾 BEFORE ARCHIVING: 500 jobs in database
[2026-01-12T20:54:21.015Z] [BOT] ✅ No jobs to archive (all 500 jobs within 7-day window)
[2026-01-12T20:54:21.022Z] [BOT] 💾 Saved posted_jobs.json: 500 active jobs
[2026-01-12T20:54:21.022Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:24.023Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-12T20:54:24.023Z] [BOT] 📍 [ROUTING] "Recruiter II, Business Recruiting" @ datadog
[2026-01-12T20:54:24.024Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-12T20:54:24.463Z] [BOT] ✅ Created forum post: 🏢 Recruiter II, Business Recruiting @ datadog in #📁・JID_e938df7b
  ✅ Industry: Recruiter II, Business Recruiting @ datadog
[2026-01-12T20:54:26.182Z] [BOT] ✅ Created forum post: 🏢 Recruiter II, Business Recruiting @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:54:27.682Z] [BOT] 💾 Marked as posted: Recruiter II, Business Recruiting @ datadog (instance #1)
[2026-01-12T20:54:27.683Z] [BOT] 💾 BEFORE ARCHIVING: 501 jobs in database
[2026-01-12T20:54:27.683Z] [BOT] ✅ No jobs to archive (all 501 jobs within 7-day window)
[2026-01-12T20:54:27.688Z] [BOT] 💾 Saved posted_jobs.json: 501 active jobs
[2026-01-12T20:54:27.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:54:30.688Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T20:54:30.688Z] [BOT] ⏭️  Skipping duplicate: JID_d6c3e041 (posted within 7 days)
[2026-01-12T20:54:30.688Z] [BOT] ⏭️  Skipping duplicate: JID_a569c0c1 (posted within 7 days)
⏭️  Skipping duplicate: JID_1fada6ce (posted within 7 days)
[2026-01-12T20:54:30.688Z] [BOT] ⏭️  Skipping duplicate: JID_8435b779 (posted within 7 days)
[2026-01-12T20:54:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_a75435be (posted within 7 days)
[2026-01-12T20:54:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_7d7c548c (posted within 7 days)
[2026-01-12T20:54:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_15c89ab7 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a6e32f3 (posted within 7 days)
[2026-01-12T20:54:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_46a204a3 (posted within 7 days)
[2026-01-12T20:54:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_984d2cad (posted within 7 days)
[2026-01-12T20:54:30.819Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[2026-01-12T20:54:30.974Z] [BOT] ✅ Saved pending queue: 2658 total (2638 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T20:54:30.974Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T20:54:31.025Z] [BOT] 📂 Loaded 2672 existing routing entries
[2026-01-12T20:54:31.080Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T20:54:31.081Z] [BOT] Total entries: 2682
   Timestamp: 2026-01-12T20:54:31.069Z
[2026-01-12T20:54:31.081Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T20:54:31.081Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
[2026-01-12T20:54:31.081Z] [BOT] Skipped: 0
[2026-01-12T20:54:31.082Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T20:54:31.082Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🗽・new-york: 5 posts
[2026-01-12T20:54:31.082Z] [BOT] 2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-12T20:54:31.082Z] [BOT] [STATS] Channel stats saved
[2026-01-12T20:54:33.107Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*