# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T12:35:08.938Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T12:35:03.692Z] ========================================
[2026-02-07T12:35:03.694Z] Discord Bot Execution Log
[2026-02-07T12:35:03.694Z] Environment: GitHub Actions
[2026-02-07T12:35:03.694Z] Node Version: v20.20.0
[2026-02-07T12:35:03.694Z] ========================================
[2026-02-07T12:35:03.694Z] Environment Variables Check:
[2026-02-07T12:35:03.694Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T12:35:03.694Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T12:35:03.694Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T12:35:03.695Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T12:35:03.695Z] 
Multi-Channel Configuration:
[2026-02-07T12:35:03.695Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T12:35:03.695Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T12:35:03.695Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:35:03.695Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T12:35:03.696Z] 
Data Files Check:
[2026-02-07T12:35:03.697Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158238 bytes)
[2026-02-07T12:35:03.729Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6367011 bytes)
[2026-02-07T12:35:03.729Z] 
========================================
[2026-02-07T12:35:03.729Z] Starting Enhanced Discord Bot...
[2026-02-07T12:35:03.729Z] ========================================
[2026-02-07T12:35:04.300Z] [BOT] ✅ Loaded V2 database: 1437 jobs
[2026-02-07T12:35:05.486Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T12:35:05.487Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T12:35:05.487Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T12:35:05.501Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T12:35:05.502Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:35:05.502Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T12:35:05.503Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:35:05.503Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T12:35:05.503Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T12:35:05.514Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-07T12:35:05.515Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-07T12:35:05.516Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T12:35:05.533Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T12:35:05.555Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T12:35:05.555Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T12:35:05.556Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T12:35:05.556Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T12:35:05.557Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T12:35:05.557Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T12:35:05.557Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T12:35:05.557Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T12:35:05.557Z] [BOT] 💾 BEFORE MERGE: 1437 jobs in memory (cached)
[2026-02-07T12:35:05.594Z] [BOT] ✅ Loaded V2 database: 1437 jobs
💾 DISK STATE: 1437 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1437
[2026-02-07T12:35:05.598Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T12:35:05.599Z] [BOT] 💾 AFTER MERGE: 1437 jobs (merged disk + memory)
[2026-02-07T12:35:05.600Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T12:35:05.605Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T12:35:05.606Z] [BOT] ✅ Archiving complete: 10 archived, 1427 active
[2026-02-07T12:35:05.686Z] [BOT] 💾 Saved posted_jobs.json: 1427 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T12:35:05.686Z] [BOT] ✅ Database saved successfully
[2026-02-07T12:35:05.686Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T12:35:07.705Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*