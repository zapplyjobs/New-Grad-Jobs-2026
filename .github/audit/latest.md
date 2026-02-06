# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T22:14:37.679Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T22:14:19.763Z] ========================================
[2026-02-06T22:14:19.765Z] Discord Bot Execution Log
[2026-02-06T22:14:19.765Z] Environment: GitHub Actions
[2026-02-06T22:14:19.765Z] Node Version: v20.20.0
[2026-02-06T22:14:19.765Z] ========================================
[2026-02-06T22:14:19.765Z] Environment Variables Check:
[2026-02-06T22:14:19.765Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T22:14:19.765Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T22:14:19.765Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T22:14:19.766Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T22:14:19.766Z] 
Multi-Channel Configuration:
[2026-02-06T22:14:19.766Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T22:14:19.766Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T22:14:19.766Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:14:19.766Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T22:14:19.766Z] 
Data Files Check:
[2026-02-06T22:14:19.768Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145041 bytes)
[2026-02-06T22:14:19.812Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8454511 bytes)
[2026-02-06T22:14:19.812Z] 
========================================
[2026-02-06T22:14:19.812Z] Starting Enhanced Discord Bot...
[2026-02-06T22:14:19.812Z] ========================================
[2026-02-06T22:14:20.405Z] [BOT] ✅ Loaded V2 database: 1822 jobs
[2026-02-06T22:14:20.755Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T22:14:20.755Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T22:14:20.756Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T22:14:20.775Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T22:14:20.775Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:14:20.776Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T22:14:20.776Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T22:14:20.777Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:14:20.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T22:14:20.777Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T22:14:20.794Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T22:14:20.794Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-06T22:14:20.794Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-06T22:14:20.795Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T22:14:20.796Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
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
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-06T22:14:20.796Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T22:14:20.815Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T22:14:20.841Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T22:14:20.842Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T22:14:20.842Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T22:14:20.845Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T22:14:20.846Z] [BOT] 📍 [ROUTING] "Sr. Sales Operations and Strategy Analyst" @ samsara
[2026-02-06T22:14:20.846Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T22:14:20.864Z] [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T22:14:21.146Z] [BOT] ✅ Posted message: Sr. Sales Operations and Strategy Analyst @ samsara in #💰・finance-jobs
  ✅ Industry: Sr. Sales Operations and Strategy Analyst @ samsara
[2026-02-06T22:14:21.148Z] [BOT] 💾 Added channel posting: Sr. Sales Operations and Strategy Analyst @ samsara → category channel (1 total channels)
[2026-02-06T22:14:21.148Z] [BOT] 💾 BEFORE MERGE: 1823 jobs in memory (cached)
[2026-02-06T22:14:21.184Z] [BOT] ✅ Loaded V2 database: 1822 jobs
💾 DISK STATE: 1822 jobs on disk
[2026-02-06T22:14:21.184Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1823
[2026-02-06T22:14:21.189Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:14:21.189Z] [BOT] 💾 AFTER MERGE: 1823 jobs (merged disk + memory)
[2026-02-06T22:14:21.195Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T22:14:21.201Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1813 active
[2026-02-06T22:14:21.309Z] [BOT] 💾 Saved posted_jobs.json: 1813 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:14:23.130Z] [BOT] ✅ Posted message: Sr. Sales Operations and Strategy Analyst @ samsara in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-06T22:14:23.131Z] [BOT] 💾 Added channel posting: Sr. Sales Operations and Strategy Analyst @ samsara → location channel (2 total channels)
💾 BEFORE MERGE: 1813 jobs in memory (cached)
[2026-02-06T22:14:23.159Z] [BOT] ✅ Loaded V2 database: 1813 jobs
💾 DISK STATE: 1813 jobs on disk
[2026-02-06T22:14:23.160Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1813
[2026-02-06T22:14:23.164Z] [BOT] 🔀 Deep merged: Sr. Sales Operations and Strategy Analyst @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:14:23.164Z] [BOT] 💾 AFTER MERGE: 1813 jobs (merged disk + memory)
[2026-02-06T22:14:23.169Z] [BOT] ✅ No jobs to archive (all 1813 jobs within 7-day window)
[2026-02-06T22:14:23.255Z] [BOT] 💾 Saved posted_jobs.json: 1813 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:14:27.757Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T22:14:27.758Z] [BOT] 📍 [ROUTING] "Vice President, GTM Enablement & Business Value - NYC" @ datadog
   Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T22:14:28.108Z] [BOT] ✅ Posted message: Vice President, GTM Enablement & Business Value - NYC @ datadog in #💻・tech-jobs
  ✅ Industry: Vice President, GTM Enablement & Business Value - NYC @ datadog
[2026-02-06T22:14:28.109Z] [BOT] 💾 Added channel posting: Vice President, GTM Enablement & Business Value - NYC @ datadog → category channel (1 total channels)
[2026-02-06T22:14:28.109Z] [BOT] 💾 BEFORE MERGE: 1814 jobs in memory (cached)
[2026-02-06T22:14:28.137Z] [BOT] ✅ Loaded V2 database: 1813 jobs
💾 DISK STATE: 1813 jobs on disk
[2026-02-06T22:14:28.138Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1814
[2026-02-06T22:14:28.142Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:14:28.142Z] [BOT] 💾 AFTER MERGE: 1814 jobs (merged disk + memory)
[2026-02-06T22:14:28.147Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-02-06T22:14:28.245Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:14:29.912Z] [BOT] ✅ Posted message: Vice President, GTM Enablement & Business Value - NYC @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T22:14:29.913Z] [BOT] 💾 Added channel posting: Vice President, GTM Enablement & Business Value - NYC @ datadog → location channel (2 total channels)
[2026-02-06T22:14:29.913Z] [BOT] 💾 BEFORE MERGE: 1814 jobs in memory (cached)
[2026-02-06T22:14:29.943Z] [BOT] ✅ Loaded V2 database: 1814 jobs
💾 DISK STATE: 1814 jobs on disk
[2026-02-06T22:14:29.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1814
[2026-02-06T22:14:29.947Z] [BOT] 🔀 Deep merged: Vice President, GTM Enablement & Business Value - NYC @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:14:29.947Z] [BOT] 💾 AFTER MERGE: 1814 jobs (merged disk + memory)
[2026-02-06T22:14:29.951Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-02-06T22:14:30.048Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:14:34.547Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T22:14:34.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c156d3d..." not found, but found as SHA256 "ba0149d360279443"
[2026-02-06T22:14:34.548Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-02-06T22:14:34.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_602076ee..." not found, but found as SHA256 "9aa2fdd396ffb95a"
⏭️  Skipping duplicate: JID_602076ee (posted within 7 days)
[2026-02-06T22:14:34.559Z] [BOT] ✅ Loaded pending queue: 174 total (170 pending, 4 enriched, 0 posted)
[2026-02-06T22:14:34.576Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T22:14:34.694Z] [BOT] 📂 Loaded 12602 existing routing entries
[2026-02-06T22:14:34.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-06T22:14:34.819Z] [BOT] New entries: 2
   Total entries: 12604
   Timestamp: 2026-02-06T22:14:34.764Z
[2026-02-06T22:14:34.819Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T22:14:34.820Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💰・finance-jobs: 1 posts
[2026-02-06T22:14:34.820Z] [BOT] 2. #🏠・JID_ead674af: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T22:14:34.820Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1814 jobs in memory (cached)
[2026-02-06T22:14:34.867Z] [BOT] ✅ Loaded V2 database: 1814 jobs
💾 DISK STATE: 1814 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1814
[2026-02-06T22:14:34.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:14:34.870Z] [BOT] 💾 AFTER MERGE: 1814 jobs (merged disk + memory)
[2026-02-06T22:14:34.871Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-02-06T22:14:34.980Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T22:14:37.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*