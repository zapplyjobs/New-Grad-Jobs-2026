# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T21:24:09.114Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T21:23:45.304Z] ========================================
[2026-01-03T21:23:45.306Z] Discord Bot Execution Log
[2026-01-03T21:23:45.306Z] Environment: GitHub Actions
[2026-01-03T21:23:45.306Z] Node Version: v20.19.6
[2026-01-03T21:23:45.306Z] ========================================
[2026-01-03T21:23:45.306Z] Environment Variables Check:
[2026-01-03T21:23:45.306Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T21:23:45.307Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T21:23:45.307Z] 
Multi-Channel Configuration:
[2026-01-03T21:23:45.307Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.307Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.308Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T21:23:45.308Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T21:23:45.308Z] 
Data Files Check:
[2026-01-03T21:23:45.309Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160321 bytes)
[2026-01-03T21:23:45.312Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 408635 bytes)
[2026-01-03T21:23:45.312Z] 
========================================
[2026-01-03T21:23:45.312Z] Starting Enhanced Discord Bot...
[2026-01-03T21:23:45.312Z] ========================================
[2026-01-03T21:23:45.862Z] [BOT] ✅ Loaded V2 database: 803 jobs
[2026-01-03T21:23:46.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T21:23:46.407Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T21:23:46.407Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T21:23:46.411Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T21:23:46.479Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T21:23:46.566Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T21:23:46.568Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T21:23:46.568Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T21:23:46.569Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T21:23:46.569Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T21:23:46.570Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Outbound Sales Development Representative @ brex: seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states
   - Product and Regulatory Counsel @ brex: new york, new york, united states, seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states
   - Sales Manager, Startups @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-03T21:23:46.570Z] [BOT] ⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T21:23:46.574Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T21:23:46.574Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
[2026-01-03T21:23:46.575Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:23:46.579Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T21:23:46.713Z] [BOT] ✅ Created forum post: 🏢 Outbound Sales Development Representative @ brex in #💲・sales-jobs
[2026-01-03T21:23:46.713Z] [BOT] ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-03T21:23:48.421Z] [BOT] ✅ Created forum post: 🏢 Outbound Sales Development Representative @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T21:23:49.922Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-03T21:23:49.922Z] [BOT] 💾 BEFORE ARCHIVING: 804 jobs in database
[2026-01-03T21:23:49.923Z] [BOT] ✅ No jobs to archive (all 804 jobs within 7-day window)
[2026-01-03T21:23:49.933Z] [BOT] 💾 Saved posted_jobs.json: 804 active jobs
[2026-01-03T21:23:49.933Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:49.933Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-03T21:23:49.934Z] [BOT] 💾 BEFORE ARCHIVING: 805 jobs in database
[2026-01-03T21:23:49.934Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-03T21:23:49.940Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:49.941Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
💾 BEFORE ARCHIVING: 806 jobs in database
[2026-01-03T21:23:49.941Z] [BOT] ✅ No jobs to archive (all 806 jobs within 7-day window)
[2026-01-03T21:23:49.947Z] [BOT] 💾 Saved posted_jobs.json: 806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:49.947Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
[2026-01-03T21:23:49.947Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:23:50.241Z] [BOT] ✅ Created forum post: 🏢 Product and Regulatory Counsel @ brex in #💲・sales-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-03T21:23:51.937Z] [BOT] ✅ Created forum post: 🏢 Product and Regulatory Counsel @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T21:23:53.438Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-03T21:23:53.438Z] [BOT] 💾 BEFORE ARCHIVING: 807 jobs in database
[2026-01-03T21:23:53.439Z] [BOT] ✅ No jobs to archive (all 807 jobs within 7-day window)
[2026-01-03T21:23:53.444Z] [BOT] 💾 Saved posted_jobs.json: 807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:53.445Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
💾 BEFORE ARCHIVING: 808 jobs in database
[2026-01-03T21:23:53.445Z] [BOT] ✅ No jobs to archive (all 808 jobs within 7-day window)
[2026-01-03T21:23:53.450Z] [BOT] 💾 Saved posted_jobs.json: 808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:53.450Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
💾 BEFORE ARCHIVING: 809 jobs in database
[2026-01-03T21:23:53.451Z] [BOT] ✅ No jobs to archive (all 809 jobs within 7-day window)
[2026-01-03T21:23:53.456Z] [BOT] 💾 Saved posted_jobs.json: 809 active jobs
[2026-01-03T21:23:53.456Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:53.456Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
💾 BEFORE ARCHIVING: 810 jobs in database
[2026-01-03T21:23:53.456Z] [BOT] ✅ No jobs to archive (all 810 jobs within 7-day window)
[2026-01-03T21:23:53.461Z] [BOT] 💾 Saved posted_jobs.json: 810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:53.462Z] [BOT] 📍 [ROUTING] "Sales Manager, Startups" @ brex
[2026-01-03T21:23:53.462Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:23:53.649Z] [BOT] ✅ Created forum post: 🏢 Sales Manager, Startups @ brex in #💲・sales-jobs
  ✅ Industry: Sales Manager, Startups @ brex
[2026-01-03T21:23:55.331Z] [BOT] ✅ Created forum post: 🏢 Sales Manager, Startups @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T21:23:56.832Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
[2026-01-03T21:23:56.832Z] [BOT] 💾 BEFORE ARCHIVING: 811 jobs in database
[2026-01-03T21:23:56.833Z] [BOT] ✅ No jobs to archive (all 811 jobs within 7-day window)
[2026-01-03T21:23:56.838Z] [BOT] 💾 Saved posted_jobs.json: 811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:56.838Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
[2026-01-03T21:23:56.839Z] [BOT] 💾 BEFORE ARCHIVING: 812 jobs in database
[2026-01-03T21:23:56.839Z] [BOT] ✅ No jobs to archive (all 812 jobs within 7-day window)
[2026-01-03T21:23:56.845Z] [BOT] 💾 Saved posted_jobs.json: 812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:23:59.846Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-03T21:23:59.846Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (12-month Contract)" @ brex
[2026-01-03T21:23:59.846Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-03T21:24:00.160Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (12-month Contract) @ brex in #🏗️・JID_b7c6683f
[2026-01-03T21:24:00.160Z] [BOT] ✅ Industry: Recruiting Coordinator (12-month Contract) @ brex
[2026-01-03T21:24:01.811Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (12-month Contract) @ brex in #🗽・new-york
[2026-01-03T21:24:01.811Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T21:24:03.312Z] [BOT] 💾 Marked as posted: Recruiting Coordinator (12-month Contract) @ brex (instance #1)
[2026-01-03T21:24:03.312Z] [BOT] 💾 BEFORE ARCHIVING: 813 jobs in database
[2026-01-03T21:24:03.313Z] [BOT] ✅ No jobs to archive (all 813 jobs within 7-day window)
[2026-01-03T21:24:03.321Z] [BOT] 💾 Saved posted_jobs.json: 813 active jobs
[2026-01-03T21:24:03.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:24:06.322Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-03T21:24:06.322Z] [BOT] ⏭️  Skipping duplicate: JID_e5738f10 (posted within 7 days)
[2026-01-03T21:24:06.323Z] [BOT] ⏭️  Skipping duplicate: JID_6d46eb4d (posted within 7 days)
[2026-01-03T21:24:06.323Z] [BOT] ⏭️  Skipping duplicate: JID_2a66a10a (posted within 7 days)
[2026-01-03T21:24:06.323Z] [BOT] ⏭️  Skipping duplicate: JID_05fb0e2c (posted within 7 days)
[2026-01-03T21:24:06.365Z] [BOT] ✅ Loaded pending queue: 486 total (466 pending, 20 enriched, 0 posted)
[2026-01-03T21:24:06.412Z] [BOT] ✅ Saved pending queue: 486 total (466 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-03T21:24:06.412Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T21:24:06.460Z] [BOT] 📂 Loaded 1730 existing routing entries
[2026-01-03T21:24:06.509Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-03T21:24:06.509Z] [BOT] Total entries: 1734
   Timestamp: 2026-01-03T21:24:06.501Z
[2026-01-03T21:24:06.509Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T21:24:06.509Z] [BOT] Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-03T21:24:06.510Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T21:24:06.510Z] [BOT] Total posts: 8
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 3 posts
     2. #🗽・new-york: 2 posts
     3. #🌧️・seattle: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #🏗️・JID_b7c6683f: 1 posts
[2026-01-03T21:24:06.510Z] [BOT] [STATS] Channel stats saved
[2026-01-03T21:24:08.526Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*