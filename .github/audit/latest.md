# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T10:15:09.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T10:15:04.784Z] ========================================
[2026-02-07T10:15:04.786Z] Discord Bot Execution Log
[2026-02-07T10:15:04.786Z] Environment: GitHub Actions
[2026-02-07T10:15:04.786Z] Node Version: v20.20.0
[2026-02-07T10:15:04.786Z] ========================================
[2026-02-07T10:15:04.786Z] Environment Variables Check:
[2026-02-07T10:15:04.786Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T10:15:04.786Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T10:15:04.786Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T10:15:04.787Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T10:15:04.787Z] 
Multi-Channel Configuration:
[2026-02-07T10:15:04.787Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T10:15:04.787Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T10:15:04.787Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:15:04.787Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T10:15:04.788Z] 
Data Files Check:
[2026-02-07T10:15:04.789Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147700 bytes)
[2026-02-07T10:15:04.824Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6960740 bytes)
[2026-02-07T10:15:04.824Z] 
========================================
[2026-02-07T10:15:04.824Z] Starting Enhanced Discord Bot...
[2026-02-07T10:15:04.824Z] ========================================
[2026-02-07T10:15:05.379Z] [BOT] ✅ Loaded V2 database: 1532 jobs
[2026-02-07T10:15:06.449Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T10:15:06.449Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T10:15:06.450Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T10:15:06.468Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T10:15:06.468Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T10:15:06.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T10:15:06.469Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T10:15:06.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T10:15:06.470Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T10:15:06.482Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
[2026-02-07T10:15:06.483Z] [BOT] 🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
[2026-02-07T10:15:06.484Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-07T10:15:06.484Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-07T10:15:06.484Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-07T10:15:06.484Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-07T10:15:06.484Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-07T10:15:06.498Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T10:15:06.525Z] [BOT] ✅ Saved pending queue: 168 total (166 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T10:15:06.525Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T10:15:06.525Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T10:15:06.525Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T10:15:06.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T10:15:06.526Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T10:15:06.526Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T10:15:06.527Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T10:15:06.527Z] [BOT] 💾 BEFORE MERGE: 1532 jobs in memory (cached)
[2026-02-07T10:15:06.557Z] [BOT] ✅ Loaded V2 database: 1532 jobs
💾 DISK STATE: 1532 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1532
[2026-02-07T10:15:06.561Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T10:15:06.561Z] [BOT] 💾 AFTER MERGE: 1532 jobs (merged disk + memory)
[2026-02-07T10:15:06.563Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T10:15:06.568Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-07T10:15:06.569Z] [BOT] ✅ Archiving complete: 20 archived, 1512 active
[2026-02-07T10:15:06.659Z] [BOT] 💾 Saved posted_jobs.json: 1512 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T10:15:06.660Z] [BOT] ✅ Database saved successfully
[2026-02-07T10:15:06.660Z] [BOT ERROR] (node:2906) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T10:15:08.678Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2906) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*