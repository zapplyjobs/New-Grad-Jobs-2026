# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T08:53:33.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T08:53:29.471Z] ========================================
[2026-02-07T08:53:29.473Z] Discord Bot Execution Log
[2026-02-07T08:53:29.473Z] Environment: GitHub Actions
[2026-02-07T08:53:29.473Z] Node Version: v20.20.0
[2026-02-07T08:53:29.473Z] ========================================
[2026-02-07T08:53:29.473Z] Environment Variables Check:
[2026-02-07T08:53:29.473Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T08:53:29.473Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T08:53:29.473Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T08:53:29.473Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T08:53:29.473Z] 
Multi-Channel Configuration:
[2026-02-07T08:53:29.473Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T08:53:29.474Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T08:53:29.474Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:53:29.474Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T08:53:29.474Z] 
Data Files Check:
[2026-02-07T08:53:29.476Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130027 bytes)
[2026-02-07T08:53:29.510Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7161975 bytes)
[2026-02-07T08:53:29.510Z] 
========================================
[2026-02-07T08:53:29.510Z] Starting Enhanced Discord Bot...
[2026-02-07T08:53:29.510Z] ========================================
[2026-02-07T08:53:30.079Z] [BOT] ✅ Loaded V2 database: 1580 jobs
[2026-02-07T08:53:30.575Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T08:53:30.576Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T08:53:30.576Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T08:53:30.588Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T08:53:30.588Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T08:53:30.589Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T08:53:30.590Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T08:53:30.590Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T08:53:30.590Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T08:53:30.602Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T08:53:30.602Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-07T08:53:30.602Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T08:53:30.602Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-07T08:53:30.603Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-07T08:53:30.604Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-07T08:53:30.621Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T08:53:30.643Z] [BOT] ✅ Saved pending queue: 171 total (169 pending, 2 enriched, 0 posted)
[2026-02-07T08:53:30.643Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T08:53:30.644Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T08:53:30.644Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T08:53:30.644Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T08:53:30.644Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T08:53:30.645Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T08:53:30.645Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T08:53:30.645Z] [BOT] 💾 BEFORE MERGE: 1580 jobs in memory (cached)
[2026-02-07T08:53:30.683Z] [BOT] ✅ Loaded V2 database: 1580 jobs
💾 DISK STATE: 1580 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1580
[2026-02-07T08:53:30.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T08:53:30.687Z] [BOT] 💾 AFTER MERGE: 1580 jobs (merged disk + memory)
[2026-02-07T08:53:30.689Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T08:53:30.694Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T08:53:30.694Z] [BOT] ✅ Archiving complete: 10 archived, 1570 active
[2026-02-07T08:53:30.785Z] [BOT] 💾 Saved posted_jobs.json: 1570 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T08:53:30.786Z] [BOT] ✅ Database saved successfully
[2026-02-07T08:53:30.786Z] [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T08:53:32.804Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*