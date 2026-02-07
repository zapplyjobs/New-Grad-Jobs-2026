# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T09:55:59.047Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T09:55:54.530Z] ========================================
[2026-02-07T09:55:54.532Z] Discord Bot Execution Log
[2026-02-07T09:55:54.532Z] Environment: GitHub Actions
[2026-02-07T09:55:54.532Z] Node Version: v20.20.0
[2026-02-07T09:55:54.532Z] ========================================
[2026-02-07T09:55:54.533Z] Environment Variables Check:
[2026-02-07T09:55:54.533Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T09:55:54.533Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T09:55:54.533Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T09:55:54.533Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T09:55:54.533Z] 
Multi-Channel Configuration:
[2026-02-07T09:55:54.533Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T09:55:54.533Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.533Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.533Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T09:55:54.533Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.534Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.534Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.534Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.534Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:55:54.534Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T09:55:54.534Z] 
Data Files Check:
[2026-02-07T09:55:54.535Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160565 bytes)
[2026-02-07T09:55:54.572Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7013118 bytes)
[2026-02-07T09:55:54.572Z] 
========================================
[2026-02-07T09:55:54.572Z] Starting Enhanced Discord Bot...
[2026-02-07T09:55:54.572Z] ========================================
[2026-02-07T09:55:55.137Z] [BOT] ✅ Loaded V2 database: 1542 jobs
[2026-02-07T09:55:55.832Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T09:55:55.832Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T09:55:55.833Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T09:55:55.847Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T09:55:55.847Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:55:55.848Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T09:55:55.848Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:55:55.849Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T09:55:55.849Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T09:55:55.859Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-07T09:55:55.860Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-07T09:55:55.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-07T09:55:55.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-07T09:55:55.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-07T09:55:55.861Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T09:55:55.866Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-07T09:55:55.880Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T09:55:55.902Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T09:55:55.902Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T09:55:55.902Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T09:55:55.902Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T09:55:55.903Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T09:55:55.903Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T09:55:55.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T09:55:55.904Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T09:55:55.904Z] [BOT] 💾 BEFORE MERGE: 1542 jobs in memory (cached)
[2026-02-07T09:55:55.931Z] [BOT] ✅ Loaded V2 database: 1542 jobs
💾 DISK STATE: 1542 jobs on disk
[2026-02-07T09:55:55.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1542
[2026-02-07T09:55:55.935Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:55:55.935Z] [BOT] 💾 AFTER MERGE: 1542 jobs (merged disk + memory)
[2026-02-07T09:55:55.936Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T09:55:55.942Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T09:55:55.942Z] [BOT] ✅ Archiving complete: 10 archived, 1532 active
[2026-02-07T09:55:56.023Z] [BOT] 💾 Saved posted_jobs.json: 1532 active jobs
[2026-02-07T09:55:56.023Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-07T09:55:56.023Z] [BOT] ✅ Database saved successfully
[2026-02-07T09:55:56.024Z] [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T09:55:58.044Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*