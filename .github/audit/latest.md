# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T20:50:53.688Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T20:50:29.216Z] ========================================
[2026-01-03T20:50:29.218Z] Discord Bot Execution Log
[2026-01-03T20:50:29.218Z] Environment: GitHub Actions
[2026-01-03T20:50:29.218Z] Node Version: v20.19.6
[2026-01-03T20:50:29.218Z] ========================================
[2026-01-03T20:50:29.218Z] Environment Variables Check:
[2026-01-03T20:50:29.218Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T20:50:29.218Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.218Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T20:50:29.219Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T20:50:29.219Z] 
Multi-Channel Configuration:
[2026-01-03T20:50:29.219Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T20:50:29.219Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T20:50:29.219Z] 
Data Files Check:
[2026-01-03T20:50:29.221Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152697 bytes)
[2026-01-03T20:50:29.224Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 399708 bytes)
[2026-01-03T20:50:29.224Z] 
========================================
[2026-01-03T20:50:29.224Z] Starting Enhanced Discord Bot...
[2026-01-03T20:50:29.224Z] ========================================
[2026-01-03T20:50:29.769Z] [BOT] ✅ Loaded V2 database: 783 jobs
[2026-01-03T20:50:30.215Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T20:50:30.216Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T20:50:30.216Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T20:50:30.217Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T20:50:30.289Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T20:50:30.380Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T20:50:30.382Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T20:50:30.382Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T20:50:30.383Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T20:50:30.383Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T20:50:30.383Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Enterprise Implementation Consultant, Financial Saas @ brex: seattle, washington, united states, san francisco, california, united states
   - Growth Client Sales Executive @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
   - Implementation Consultant II @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
[2026-01-03T20:50:30.384Z] [BOT] ⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T20:50:30.388Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T20:50:30.388Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
[2026-01-03T20:50:30.389Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:50:30.393Z] [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T20:50:30.777Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #💲・sales-jobs
  ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-03T20:50:32.429Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T20:50:33.930Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-03T20:50:33.930Z] [BOT] 💾 BEFORE ARCHIVING: 784 jobs in database
[2026-01-03T20:50:33.931Z] [BOT] ✅ No jobs to archive (all 784 jobs within 7-day window)
[2026-01-03T20:50:33.941Z] [BOT] 💾 Saved posted_jobs.json: 784 active jobs
[2026-01-03T20:50:33.941Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:33.941Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
💾 BEFORE ARCHIVING: 785 jobs in database
[2026-01-03T20:50:33.942Z] [BOT] ✅ No jobs to archive (all 785 jobs within 7-day window)
[2026-01-03T20:50:33.950Z] [BOT] 💾 Saved posted_jobs.json: 785 active jobs
[2026-01-03T20:50:33.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:33.951Z] [BOT] 📍 [ROUTING] "Growth Client Sales Executive" @ brex
[2026-01-03T20:50:33.951Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:50:34.399Z] [BOT] ✅ Created forum post: 🏢 Growth Client Sales Executive @ brex in #💲・sales-jobs
[2026-01-03T20:50:34.399Z] [BOT] ✅ Industry: Growth Client Sales Executive @ brex
[2026-01-03T20:50:36.178Z] [BOT] ✅ Created forum post: 🏢 Growth Client Sales Executive @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T20:50:37.678Z] [BOT] 💾 Marked as posted: Growth Client Sales Executive @ brex (instance #1)
[2026-01-03T20:50:37.678Z] [BOT] 💾 BEFORE ARCHIVING: 786 jobs in database
[2026-01-03T20:50:37.679Z] [BOT] ✅ No jobs to archive (all 786 jobs within 7-day window)
[2026-01-03T20:50:37.684Z] [BOT] 💾 Saved posted_jobs.json: 786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:37.684Z] [BOT] 💾 Marked as posted: Growth Client Sales Executive @ brex (instance #1)
[2026-01-03T20:50:37.685Z] [BOT] 💾 BEFORE ARCHIVING: 787 jobs in database
[2026-01-03T20:50:37.685Z] [BOT] ✅ No jobs to archive (all 787 jobs within 7-day window)
[2026-01-03T20:50:37.690Z] [BOT] 💾 Saved posted_jobs.json: 787 active jobs
[2026-01-03T20:50:37.690Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Growth Client Sales Executive @ brex (instance #1)
[2026-01-03T20:50:37.691Z] [BOT] 💾 BEFORE ARCHIVING: 788 jobs in database
[2026-01-03T20:50:37.691Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2026-01-03T20:50:37.700Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:37.700Z] [BOT] 💾 Marked as posted: Growth Client Sales Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 789 jobs in database
[2026-01-03T20:50:37.701Z] [BOT] ✅ No jobs to archive (all 789 jobs within 7-day window)
[2026-01-03T20:50:37.708Z] [BOT] 💾 Saved posted_jobs.json: 789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:37.708Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:50:37.883Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #💲・sales-jobs
  ✅ Industry: Implementation Consultant II @ brex
[2026-01-03T20:50:39.573Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #🌉・san-francisco
[2026-01-03T20:50:39.573Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T20:50:41.074Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-03T20:50:41.075Z] [BOT] 💾 BEFORE ARCHIVING: 790 jobs in database
[2026-01-03T20:50:41.075Z] [BOT] ✅ No jobs to archive (all 790 jobs within 7-day window)
[2026-01-03T20:50:41.082Z] [BOT] 💾 Saved posted_jobs.json: 790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:41.083Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-03T20:50:41.083Z] [BOT] 💾 BEFORE ARCHIVING: 791 jobs in database
[2026-01-03T20:50:41.083Z] [BOT] ✅ No jobs to archive (all 791 jobs within 7-day window)
[2026-01-03T20:50:41.089Z] [BOT] 💾 Saved posted_jobs.json: 791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:41.090Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
💾 BEFORE ARCHIVING: 792 jobs in database
[2026-01-03T20:50:41.090Z] [BOT] ✅ No jobs to archive (all 792 jobs within 7-day window)
[2026-01-03T20:50:41.096Z] [BOT] 💾 Saved posted_jobs.json: 792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:44.097Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T20:50:44.098Z] [BOT] 📍 [ROUTING] "Head of Internal Communications" @ brex
[2026-01-03T20:50:44.098Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T20:50:44.481Z] [BOT] ✅ Created forum post: 🏢 Head of Internal Communications @ brex in #📣・marketing-jobs
[2026-01-03T20:50:44.481Z] [BOT] ✅ Industry: Head of Internal Communications @ brex
[2026-01-03T20:50:46.227Z] [BOT] ✅ Created forum post: 🏢 Head of Internal Communications @ brex in #🌉・san-francisco
[2026-01-03T20:50:46.227Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T20:50:47.728Z] [BOT] 💾 Marked as posted: Head of Internal Communications @ brex (instance #1)
[2026-01-03T20:50:47.728Z] [BOT] 💾 BEFORE ARCHIVING: 793 jobs in database
[2026-01-03T20:50:47.729Z] [BOT] ✅ No jobs to archive (all 793 jobs within 7-day window)
[2026-01-03T20:50:47.735Z] [BOT] 💾 Saved posted_jobs.json: 793 active jobs
[2026-01-03T20:50:47.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:50:50.736Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-03T20:50:50.737Z] [BOT] ⏭️  Skipping duplicate: JID_10bdb21c (posted within 7 days)
[2026-01-03T20:50:50.737Z] [BOT] ⏭️  Skipping duplicate: JID_20e96f35 (posted within 7 days)
[2026-01-03T20:50:50.737Z] [BOT] ⏭️  Skipping duplicate: JID_7f254d06 (posted within 7 days)
[2026-01-03T20:50:50.737Z] [BOT] ⏭️  Skipping duplicate: JID_f4474f7a (posted within 7 days)
[2026-01-03T20:50:50.781Z] [BOT] ✅ Loaded pending queue: 506 total (486 pending, 20 enriched, 0 posted)
[2026-01-03T20:50:50.830Z] [BOT] ✅ Saved pending queue: 506 total (486 pending, 16 enriched, 4 posted)
[2026-01-03T20:50:50.830Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T20:50:50.882Z] [BOT] 📂 Loaded 1722 existing routing entries
[2026-01-03T20:50:50.932Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 1726
[2026-01-03T20:50:50.932Z] [BOT] Timestamp: 2026-01-03T20:50:50.924Z
[2026-01-03T20:50:50.933Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T20:50:50.933Z] [BOT] Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-03T20:50:50.933Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
[2026-01-03T20:50:50.933Z] [BOT] Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 3 posts
     2. #🌉・san-francisco: 3 posts
     3. #🌧️・seattle: 1 posts
     4. #📣・marketing-jobs: 1 posts
[2026-01-03T20:50:50.934Z] [BOT] [STATS] Channel stats saved
[2026-01-03T20:50:52.949Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*