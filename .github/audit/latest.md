# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T13:51:14.286Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T13:50:39.725Z] ========================================
[2026-01-03T13:50:39.726Z] Discord Bot Execution Log
[2026-01-03T13:50:39.727Z] Environment: GitHub Actions
[2026-01-03T13:50:39.727Z] Node Version: v20.19.6
[2026-01-03T13:50:39.727Z] ========================================
[2026-01-03T13:50:39.727Z] Environment Variables Check:
[2026-01-03T13:50:39.727Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T13:50:39.727Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.727Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T13:50:39.727Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T13:50:39.727Z] 
Multi-Channel Configuration:
[2026-01-03T13:50:39.727Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T13:50:39.728Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T13:50:39.728Z] 
Data Files Check:
[2026-01-03T13:50:39.729Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159600 bytes)
[2026-01-03T13:50:39.732Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 262987 bytes)
[2026-01-03T13:50:39.732Z] 
========================================
[2026-01-03T13:50:39.732Z] Starting Enhanced Discord Bot...
[2026-01-03T13:50:39.732Z] ========================================
[2026-01-03T13:50:40.254Z] [BOT] ✅ Loaded V2 database: 503 jobs
[2026-01-03T13:50:40.730Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T13:50:40.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T13:50:40.731Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T13:50:40.732Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T13:50:40.801Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T13:50:40.899Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T13:50:40.901Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T13:50:40.901Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T13:50:40.901Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T13:50:40.902Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-03T13:50:40.902Z] [BOT] 📍 2 jobs with multiple locations:
   - Strategic Account Executive @ datadog: san francisco, california, usa, boston, massachusetts, usa
   - Strategic Account Executive (SLED) @ datadog: boston, massachusetts, usa; new york, new york, usa, remote
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T13:50:40.906Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-03T13:50:40.907Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-03T13:50:40.907Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:50:40.911Z] [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T13:50:41.145Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-03T13:50:42.862Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T13:50:44.364Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-03T13:50:44.364Z] [BOT] 💾 BEFORE ARCHIVING: 504 jobs in database
[2026-01-03T13:50:44.364Z] [BOT] ✅ No jobs to archive (all 504 jobs within 7-day window)
[2026-01-03T13:50:44.372Z] [BOT] 💾 Saved posted_jobs.json: 504 active jobs
[2026-01-03T13:50:44.373Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-03T13:50:44.373Z] [BOT] 💾 BEFORE ARCHIVING: 505 jobs in database
[2026-01-03T13:50:44.373Z] [BOT] ✅ No jobs to archive (all 505 jobs within 7-day window)
[2026-01-03T13:50:44.377Z] [BOT] 💾 Saved posted_jobs.json: 505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:50:44.378Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (FED)" @ datadog
[2026-01-03T13:50:44.378Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:50:44.618Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (FED) @ datadog in #💲・sales-jobs
[2026-01-03T13:50:44.618Z] [BOT] ✅ Industry: Strategic Account Executive (FED) @ datadog
[2026-01-03T13:50:46.365Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (FED) @ datadog in #💻・remote-usa
[2026-01-03T13:50:46.365Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T13:50:47.865Z] [BOT] 💾 Marked as posted: Strategic Account Executive (FED) @ datadog (instance #1)
[2026-01-03T13:50:47.865Z] [BOT] 💾 BEFORE ARCHIVING: 506 jobs in database
[2026-01-03T13:50:47.866Z] [BOT] ✅ No jobs to archive (all 506 jobs within 7-day window)
[2026-01-03T13:50:47.869Z] [BOT] 💾 Saved posted_jobs.json: 506 active jobs
[2026-01-03T13:50:47.870Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:50:47.870Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
[2026-01-03T13:50:47.870Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:50:48.060Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (SLED) @ datadog in #💲・sales-jobs
[2026-01-03T13:50:48.061Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-03T13:50:49.787Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (SLED) @ datadog in #🗽・new-york
[2026-01-03T13:50:49.787Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:50:51.288Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-03T13:50:51.289Z] [BOT] 💾 BEFORE ARCHIVING: 507 jobs in database
[2026-01-03T13:50:51.289Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2026-01-03T13:50:51.294Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
[2026-01-03T13:50:51.294Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-03T13:50:51.294Z] [BOT] 💾 BEFORE ARCHIVING: 508 jobs in database
[2026-01-03T13:50:51.295Z] [BOT] ✅ No jobs to archive (all 508 jobs within 7-day window)
[2026-01-03T13:50:51.299Z] [BOT] 💾 Saved posted_jobs.json: 508 active jobs
[2026-01-03T13:50:51.299Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-03T13:50:51.299Z] [BOT] 💾 BEFORE ARCHIVING: 509 jobs in database
[2026-01-03T13:50:51.300Z] [BOT] ✅ No jobs to archive (all 509 jobs within 7-day window)
[2026-01-03T13:50:51.304Z] [BOT] 💾 Saved posted_jobs.json: 509 active jobs
[2026-01-03T13:50:51.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:50:51.304Z] [BOT] 📍 [ROUTING] "Technical Account Manager 2 - New York" @ datadog
[2026-01-03T13:50:51.304Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:50:51.491Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - New York @ datadog in #💲・sales-jobs
  ✅ Industry: Technical Account Manager 2 - New York @ datadog
[2026-01-03T13:50:53.226Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:50:54.727Z] [BOT] 💾 Marked as posted: Technical Account Manager 2 - New York @ datadog (instance #1)
[2026-01-03T13:50:54.727Z] [BOT] 💾 BEFORE ARCHIVING: 510 jobs in database
[2026-01-03T13:50:54.727Z] [BOT] ✅ No jobs to archive (all 510 jobs within 7-day window)
[2026-01-03T13:50:54.731Z] [BOT] 💾 Saved posted_jobs.json: 510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:50:54.732Z] [BOT] 📍 [ROUTING] "Vice President, GTM Enablement & Business Value - NYC" @ datadog
[2026-01-03T13:50:54.732Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:50:54.929Z] [BOT] ✅ Created forum post: 🏢 Vice President, GTM Enablement & Business Value - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Vice President, GTM Enablement & Business Value - NYC @ datadog
[2026-01-03T13:50:56.609Z] [BOT] ✅ Created forum post: 🏢 Vice President, GTM Enablement & Business Value - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:50:58.109Z] [BOT] 💾 Marked as posted: Vice President, GTM Enablement & Business Value - NYC @ datadog (instance #1)
[2026-01-03T13:50:58.109Z] [BOT] 💾 BEFORE ARCHIVING: 511 jobs in database
[2026-01-03T13:50:58.109Z] [BOT] ✅ No jobs to archive (all 511 jobs within 7-day window)
[2026-01-03T13:50:58.114Z] [BOT] 💾 Saved posted_jobs.json: 511 active jobs
[2026-01-03T13:50:58.114Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:51:01.115Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T13:51:01.116Z] [BOT] 📍 [ROUTING] "Technical Content Writer" @ datadog
   Category: MARKETING (matched: "growth")
[2026-01-03T13:51:01.116Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T13:51:01.474Z] [BOT] ✅ Created forum post: 🏢 Technical Content Writer @ datadog in #📣・marketing-jobs
  ✅ Industry: Technical Content Writer @ datadog
[2026-01-03T13:51:03.145Z] [BOT] ✅ Created forum post: 🏢 Technical Content Writer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:51:04.645Z] [BOT] 💾 Marked as posted: Technical Content Writer @ datadog (instance #1)
[2026-01-03T13:51:04.645Z] [BOT] 💾 BEFORE ARCHIVING: 512 jobs in database
[2026-01-03T13:51:04.646Z] [BOT] ✅ No jobs to archive (all 512 jobs within 7-day window)
[2026-01-03T13:51:04.650Z] [BOT] 💾 Saved posted_jobs.json: 512 active jobs
[2026-01-03T13:51:04.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:51:04.650Z] [BOT] 📍 [ROUTING] "Senior Director, Corporate Development" @ discord
[2026-01-03T13:51:04.651Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T13:51:04.925Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Corporate Development @ discord in #📣・marketing-jobs
  ✅ Industry: Senior Director, Corporate Development @ discord
[2026-01-03T13:51:06.784Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Corporate Development @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T13:51:08.285Z] [BOT] 💾 Marked as posted: Senior Director, Corporate Development @ discord (instance #1)
[2026-01-03T13:51:08.285Z] [BOT] 💾 BEFORE ARCHIVING: 513 jobs in database
[2026-01-03T13:51:08.285Z] [BOT] ✅ No jobs to archive (all 513 jobs within 7-day window)
[2026-01-03T13:51:08.290Z] [BOT] 💾 Saved posted_jobs.json: 513 active jobs
[2026-01-03T13:51:08.290Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:51:11.290Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-03T13:51:11.290Z] [BOT] ⏭️  Skipping duplicate: JID_8b67a32e (posted within 7 days)
[2026-01-03T13:51:11.290Z] [BOT] ⏭️  Skipping duplicate: JID_40da89da (posted within 7 days)
[2026-01-03T13:51:11.291Z] [BOT] ⏭️  Skipping duplicate: JID_7eaa560a (posted within 7 days)
⏭️  Skipping duplicate: JID_02167180 (posted within 7 days)
[2026-01-03T13:51:11.291Z] [BOT] ⏭️  Skipping duplicate: JID_ea2b096f (posted within 7 days)
⏭️  Skipping duplicate: JID_602076ee (posted within 7 days)
[2026-01-03T13:51:11.291Z] [BOT] ⏭️  Skipping duplicate: JID_015a83de (posted within 7 days)
[2026-01-03T13:51:11.356Z] [BOT] ✅ Loaded pending queue: 786 total (766 pending, 20 enriched, 0 posted)
[2026-01-03T13:51:11.448Z] [BOT] ✅ Saved pending queue: 786 total (766 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-03T13:51:11.448Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T13:51:11.492Z] [BOT] 📂 Loaded 1481 existing routing entries
[2026-01-03T13:51:11.539Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2026-01-03T13:51:11.540Z] [BOT] Total entries: 1488
   Timestamp: 2026-01-03T13:51:11.532Z
[2026-01-03T13:51:11.540Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T13:51:11.540Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-03T13:51:11.540Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-01-03T13:51:11.541Z] [BOT] 1. #💲・sales-jobs: 5 posts
     2. #🗽・new-york: 4 posts
     3. #🌉・san-francisco: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-03T13:51:11.541Z] [BOT] [STATS] Channel stats saved
[2026-01-03T13:51:13.556Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*