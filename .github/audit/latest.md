# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T20:38:30.963Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T20:38:00.348Z] ========================================
[2026-01-03T20:38:00.349Z] Discord Bot Execution Log
[2026-01-03T20:38:00.349Z] Environment: GitHub Actions
[2026-01-03T20:38:00.349Z] Node Version: v20.19.6
[2026-01-03T20:38:00.350Z] ========================================
[2026-01-03T20:38:00.350Z] Environment Variables Check:
[2026-01-03T20:38:00.350Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T20:38:00.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T20:38:00.350Z] 
Multi-Channel Configuration:
[2026-01-03T20:38:00.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.350Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.351Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.351Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T20:38:00.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T20:38:00.351Z] 
Data Files Check:
[2026-01-03T20:38:00.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156059 bytes)
[2026-01-03T20:38:00.355Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 395206 bytes)
[2026-01-03T20:38:00.355Z] 
========================================
[2026-01-03T20:38:00.355Z] Starting Enhanced Discord Bot...
[2026-01-03T20:38:00.355Z] ========================================
[2026-01-03T20:38:00.879Z] [BOT] ✅ Loaded V2 database: 773 jobs
[2026-01-03T20:38:01.688Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T20:38:01.688Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T20:38:01.689Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T20:38:01.689Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T20:38:01.763Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T20:38:01.849Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T20:38:01.851Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T20:38:01.851Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T20:38:01.851Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T20:38:01.852Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T20:38:01.852Z] [BOT] (5 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Director, Mid Market Sales @ brex: san francisco, california, united states, new york, new york, united states, salt lake city, utah, united states
   - Engineering Manager, Security Engineering  @ brex: new york, new york, united states, san francisco, california, united states
   - Enterprise Account Executive @ brex: new york, new york, united states, san francisco, california, united states
   - Enterprise Implementation Consultant, Financial Saas @ brex: new york, new york, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T20:38:01.857Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T20:38:01.858Z] [BOT] 📍 [ROUTING] "Compliance Manager (Card & Rewards)" @ brex
[2026-01-03T20:38:01.858Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T20:38:01.862Z] [BOT ERROR] (node:2331) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T20:38:02.101Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #💰・finance-jobs
  ✅ Industry: Compliance Manager (Card & Rewards) @ brex
[2026-01-03T20:38:03.741Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #🌉・san-francisco
[2026-01-03T20:38:03.742Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T20:38:05.242Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-03T20:38:05.243Z] [BOT] 💾 BEFORE ARCHIVING: 774 jobs in database
[2026-01-03T20:38:05.243Z] [BOT] ✅ No jobs to archive (all 774 jobs within 7-day window)
[2026-01-03T20:38:05.253Z] [BOT] 💾 Saved posted_jobs.json: 774 active jobs
[2026-01-03T20:38:05.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:08.254Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T20:38:08.256Z] [BOT] 📍 [ROUTING] "Director, Mid Market Sales" @ brex
[2026-01-03T20:38:08.256Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:38:08.490Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #💲・sales-jobs
  ✅ Industry: Director, Mid Market Sales @ brex
[2026-01-03T20:38:10.159Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T20:38:11.660Z] [BOT] 💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
[2026-01-03T20:38:11.660Z] [BOT] 💾 BEFORE ARCHIVING: 775 jobs in database
[2026-01-03T20:38:11.661Z] [BOT] ✅ No jobs to archive (all 775 jobs within 7-day window)
[2026-01-03T20:38:11.669Z] [BOT] 💾 Saved posted_jobs.json: 775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:11.669Z] [BOT] 💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
[2026-01-03T20:38:11.669Z] [BOT] 💾 BEFORE ARCHIVING: 776 jobs in database
[2026-01-03T20:38:11.670Z] [BOT] ✅ No jobs to archive (all 776 jobs within 7-day window)
[2026-01-03T20:38:11.675Z] [BOT] 💾 Saved posted_jobs.json: 776 active jobs
[2026-01-03T20:38:11.676Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
💾 BEFORE ARCHIVING: 777 jobs in database
[2026-01-03T20:38:11.676Z] [BOT] ✅ No jobs to archive (all 777 jobs within 7-day window)
[2026-01-03T20:38:11.682Z] [BOT] 💾 Saved posted_jobs.json: 777 active jobs
[2026-01-03T20:38:11.682Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:11.683Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
[2026-01-03T20:38:11.683Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:38:11.928Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ brex in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive @ brex
[2026-01-03T20:38:13.676Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:38:15.177Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
[2026-01-03T20:38:15.177Z] [BOT] 💾 BEFORE ARCHIVING: 778 jobs in database
[2026-01-03T20:38:15.178Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2026-01-03T20:38:15.184Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:15.184Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
[2026-01-03T20:38:15.184Z] [BOT] 💾 BEFORE ARCHIVING: 779 jobs in database
[2026-01-03T20:38:15.185Z] [BOT] ✅ No jobs to archive (all 779 jobs within 7-day window)
[2026-01-03T20:38:15.190Z] [BOT] 💾 Saved posted_jobs.json: 779 active jobs
[2026-01-03T20:38:15.190Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:15.191Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
[2026-01-03T20:38:15.191Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:38:15.448Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #💲・sales-jobs
  ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-03T20:38:17.106Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:38:18.607Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-03T20:38:18.607Z] [BOT] 💾 BEFORE ARCHIVING: 780 jobs in database
[2026-01-03T20:38:18.608Z] [BOT] ✅ No jobs to archive (all 780 jobs within 7-day window)
[2026-01-03T20:38:18.613Z] [BOT] 💾 Saved posted_jobs.json: 780 active jobs
[2026-01-03T20:38:18.613Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-03T20:38:18.613Z] [BOT] 💾 BEFORE ARCHIVING: 781 jobs in database
[2026-01-03T20:38:18.614Z] [BOT] ✅ No jobs to archive (all 781 jobs within 7-day window)
[2026-01-03T20:38:18.619Z] [BOT] 💾 Saved posted_jobs.json: 781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:21.620Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T20:38:21.621Z] [BOT] 📍 [ROUTING] "Engineering Manager, Security Engineering " @ brex
[2026-01-03T20:38:21.621Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T20:38:21.907Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Security Engineering  @ brex in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Security Engineering  @ brex
[2026-01-03T20:38:23.639Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Security Engineering  @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:38:25.140Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
[2026-01-03T20:38:25.140Z] [BOT] 💾 BEFORE ARCHIVING: 782 jobs in database
[2026-01-03T20:38:25.141Z] [BOT] ✅ No jobs to archive (all 782 jobs within 7-day window)
[2026-01-03T20:38:25.147Z] [BOT] 💾 Saved posted_jobs.json: 782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:25.147Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
[2026-01-03T20:38:25.147Z] [BOT] 💾 BEFORE ARCHIVING: 783 jobs in database
[2026-01-03T20:38:25.148Z] [BOT] ✅ No jobs to archive (all 783 jobs within 7-day window)
[2026-01-03T20:38:25.154Z] [BOT] 💾 Saved posted_jobs.json: 783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:38:28.154Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T20:38:28.155Z] [BOT] ⏭️  Skipping duplicate: JID_6f0569a5 (posted within 7 days)
[2026-01-03T20:38:28.155Z] [BOT] ⏭️  Skipping duplicate: JID_bb2ada43 (posted within 7 days)
⏭️  Skipping duplicate: JID_5c1c3125 (posted within 7 days)
[2026-01-03T20:38:28.155Z] [BOT] ⏭️  Skipping duplicate: JID_628e7251 (posted within 7 days)
[2026-01-03T20:38:28.155Z] [BOT] ⏭️  Skipping duplicate: JID_7a0083e6 (posted within 7 days)
[2026-01-03T20:38:28.201Z] [BOT] ✅ Loaded pending queue: 516 total (496 pending, 20 enriched, 0 posted)
[2026-01-03T20:38:28.248Z] [BOT] ✅ Saved pending queue: 516 total (496 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-03T20:38:28.248Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T20:38:28.302Z] [BOT] 📂 Loaded 1717 existing routing entries
[2026-01-03T20:38:28.353Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-03T20:38:28.353Z] [BOT] Total entries: 1722
   Timestamp: 2026-01-03T20:38:28.347Z
[2026-01-03T20:38:28.354Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 10
[2026-01-03T20:38:28.354Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-03T20:38:28.354Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 5
[2026-01-03T20:38:28.354Z] [BOT] Top channels:
     1. #💲・sales-jobs: 3 posts
     2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #💰・finance-jobs: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-03T20:38:28.355Z] [BOT] [STATS] Channel stats saved
[2026-01-03T20:38:30.371Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2331) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*