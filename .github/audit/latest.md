# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T02:34:08.715Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T02:34:03.688Z] ========================================
[2026-02-07T02:34:03.690Z] Discord Bot Execution Log
[2026-02-07T02:34:03.690Z] Environment: GitHub Actions
[2026-02-07T02:34:03.690Z] Node Version: v20.20.0
[2026-02-07T02:34:03.691Z] ========================================
[2026-02-07T02:34:03.691Z] Environment Variables Check:
[2026-02-07T02:34:03.691Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T02:34:03.691Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T02:34:03.691Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T02:34:03.691Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T02:34:03.691Z] 
Multi-Channel Configuration:
[2026-02-07T02:34:03.691Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T02:34:03.691Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.691Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.691Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T02:34:03.691Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.692Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.692Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.692Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.692Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:34:03.692Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T02:34:03.692Z] 
Data Files Check:
[2026-02-07T02:34:03.694Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156925 bytes)
[2026-02-07T02:34:03.731Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7904161 bytes)
[2026-02-07T02:34:03.731Z] 
========================================
[2026-02-07T02:34:03.731Z] Starting Enhanced Discord Bot...
[2026-02-07T02:34:03.732Z] ========================================
[2026-02-07T02:34:04.282Z] [BOT] ✅ Loaded V2 database: 1727 jobs
[2026-02-07T02:34:05.118Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T02:34:05.119Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T02:34:05.119Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T02:34:05.137Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T02:34:05.138Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T02:34:05.139Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T02:34:05.139Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T02:34:05.139Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T02:34:05.139Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T02:34:05.139Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-07T02:34:05.140Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T02:34:05.153Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T02:34:05.153Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-07T02:34:05.153Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-07T02:34:05.153Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-07T02:34:05.153Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-07T02:34:05.154Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T02:34:05.155Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-07T02:34:05.167Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T02:34:05.189Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
[2026-02-07T02:34:05.189Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T02:34:05.189Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T02:34:05.189Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T02:34:05.190Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T02:34:05.190Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T02:34:05.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T02:34:05.190Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T02:34:05.191Z] [BOT] 💾 BEFORE MERGE: 1727 jobs in memory (cached)
[2026-02-07T02:34:05.231Z] [BOT] ✅ Loaded V2 database: 1727 jobs
💾 DISK STATE: 1727 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1727
[2026-02-07T02:34:05.236Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T02:34:05.236Z] [BOT] 💾 AFTER MERGE: 1727 jobs (merged disk + memory)
[2026-02-07T02:34:05.237Z] [BOT] ✅ No jobs to archive (all 1727 jobs within 7-day window)
[2026-02-07T02:34:05.323Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T02:34:05.323Z] [BOT] ✅ Database saved successfully
[2026-02-07T02:34:05.324Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T02:34:07.343Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*