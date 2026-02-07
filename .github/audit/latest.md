# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T07:54:23.459Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T07:54:18.854Z] ========================================
[2026-02-07T07:54:18.856Z] Discord Bot Execution Log
[2026-02-07T07:54:18.856Z] Environment: GitHub Actions
[2026-02-07T07:54:18.856Z] Node Version: v20.20.0
[2026-02-07T07:54:18.856Z] ========================================
[2026-02-07T07:54:18.856Z] Environment Variables Check:
[2026-02-07T07:54:18.856Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T07:54:18.856Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T07:54:18.856Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T07:54:18.856Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T07:54:18.857Z] 
Multi-Channel Configuration:
[2026-02-07T07:54:18.857Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T07:54:18.857Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T07:54:18.857Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:54:18.857Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T07:54:18.857Z] 
Data Files Check:
[2026-02-07T07:54:18.859Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145400 bytes)
[2026-02-07T07:54:18.898Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7334081 bytes)
[2026-02-07T07:54:18.898Z] 
========================================
[2026-02-07T07:54:18.898Z] Starting Enhanced Discord Bot...
[2026-02-07T07:54:18.898Z] ========================================
[2026-02-07T07:54:19.449Z] [BOT] ✅ Loaded V2 database: 1620 jobs
[2026-02-07T07:54:20.001Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T07:54:20.001Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T07:54:20.001Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T07:54:20.019Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T07:54:20.020Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:54:20.020Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T07:54:20.021Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T07:54:20.021Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:54:20.021Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T07:54:20.021Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T07:54:20.034Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T07:54:20.034Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-07T07:54:20.035Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-07T07:54:20.036Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-07T07:54:20.048Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T07:54:20.071Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T07:54:20.071Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T07:54:20.071Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T07:54:20.072Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T07:54:20.072Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T07:54:20.072Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T07:54:20.072Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T07:54:20.073Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T07:54:20.073Z] [BOT] 💾 BEFORE MERGE: 1620 jobs in memory (cached)
[2026-02-07T07:54:20.112Z] [BOT] ✅ Loaded V2 database: 1620 jobs
💾 DISK STATE: 1620 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1620
[2026-02-07T07:54:20.116Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T07:54:20.116Z] [BOT] 💾 AFTER MERGE: 1620 jobs (merged disk + memory)
[2026-02-07T07:54:20.117Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T07:54:20.123Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T07:54:20.123Z] [BOT] ✅ Archiving complete: 10 archived, 1610 active
[2026-02-07T07:54:20.201Z] [BOT] 💾 Saved posted_jobs.json: 1610 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:54:20.202Z] [BOT] ✅ Database saved successfully
[2026-02-07T07:54:20.202Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T07:54:22.222Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*