# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T16:31:18.979Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T16:31:13.907Z] ========================================
[2026-02-06T16:31:13.909Z] Discord Bot Execution Log
[2026-02-06T16:31:13.909Z] Environment: GitHub Actions
[2026-02-06T16:31:13.909Z] Node Version: v20.20.0
[2026-02-06T16:31:13.909Z] ========================================
[2026-02-06T16:31:13.909Z] Environment Variables Check:
[2026-02-06T16:31:13.909Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T16:31:13.909Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T16:31:13.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T16:31:13.909Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T16:31:13.910Z] 
Multi-Channel Configuration:
[2026-02-06T16:31:13.910Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T16:31:13.910Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T16:31:13.910Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:31:13.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T16:31:13.910Z] 
Data Files Check:
[2026-02-06T16:31:13.911Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111595 bytes)
[2026-02-06T16:31:13.963Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9466285 bytes)
[2026-02-06T16:31:13.963Z] 
========================================
[2026-02-06T16:31:13.963Z] Starting Enhanced Discord Bot...
[2026-02-06T16:31:13.963Z] ========================================
[2026-02-06T16:31:14.540Z] [BOT] ✅ Loaded V2 database: 1970 jobs
[2026-02-06T16:31:15.123Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T16:31:15.124Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T16:31:15.124Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T16:31:15.142Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T16:31:15.142Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:31:15.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T16:31:15.143Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:31:15.144Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T16:31:15.144Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T16:31:15.162Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T16:31:15.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-06T16:31:15.162Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-06T16:31:15.163Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-06T16:31:15.164Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
[2026-02-06T16:31:15.186Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T16:31:15.209Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-06T16:31:15.209Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T16:31:15.210Z] [BOT] 🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T16:31:15.210Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T16:31:15.210Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T16:31:15.210Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T16:31:15.211Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T16:31:15.211Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-06T16:31:15.211Z] [BOT] [STATS] Channel stats saved
[2026-02-06T16:31:15.211Z] [BOT] 💾 Saving posted jobs database...
[2026-02-06T16:31:15.211Z] [BOT] 💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-06T16:31:15.252Z] [BOT] ✅ Loaded V2 database: 1970 jobs
💾 DISK STATE: 1970 jobs on disk
[2026-02-06T16:31:15.253Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-06T16:31:15.257Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:31:15.257Z] [BOT] 💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-06T16:31:15.259Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T16:31:15.265Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T16:31:15.265Z] [BOT] ✅ Archiving complete: 10 archived, 1960 active
[2026-02-06T16:31:15.370Z] [BOT] 💾 Saved posted_jobs.json: 1960 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:31:15.371Z] [BOT] ✅ Database saved successfully
[2026-02-06T16:31:15.371Z] [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T16:31:17.394Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*