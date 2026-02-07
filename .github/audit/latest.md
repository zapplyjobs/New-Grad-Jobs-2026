# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T11:15:35.589Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T11:15:24.245Z] ========================================
[2026-02-07T11:15:24.247Z] Discord Bot Execution Log
[2026-02-07T11:15:24.247Z] Environment: GitHub Actions
[2026-02-07T11:15:24.247Z] Node Version: v20.20.0
[2026-02-07T11:15:24.247Z] ========================================
[2026-02-07T11:15:24.247Z] Environment Variables Check:
[2026-02-07T11:15:24.247Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T11:15:24.247Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T11:15:24.247Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T11:15:24.247Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T11:15:24.247Z] 
Multi-Channel Configuration:
[2026-02-07T11:15:24.247Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T11:15:24.248Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T11:15:24.248Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:15:24.248Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T11:15:24.248Z] 
Data Files Check:
[2026-02-07T11:15:24.249Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155474 bytes)
[2026-02-07T11:15:24.282Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6642422 bytes)
[2026-02-07T11:15:24.282Z] 
========================================
[2026-02-07T11:15:24.282Z] Starting Enhanced Discord Bot...
[2026-02-07T11:15:24.282Z] ========================================
[2026-02-07T11:15:24.843Z] [BOT] ✅ Loaded V2 database: 1484 jobs
[2026-02-07T11:15:25.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T11:15:25.374Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T11:15:25.374Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T11:15:25.388Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T11:15:25.389Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T11:15:25.390Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T11:15:25.390Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T11:15:25.390Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T11:15:25.390Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T11:15:25.390Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T11:15:25.402Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-07T11:15:25.402Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
[2026-02-07T11:15:25.403Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-07T11:15:25.404Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-07T11:15:25.420Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T11:15:25.442Z] [BOT] ✅ Saved pending queue: 172 total (169 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-07T11:15:25.442Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T11:15:25.442Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-07T11:15:25.443Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T11:15:25.443Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-07T11:15:25.445Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Intern" @ coinbase
[2026-02-07T11:15:25.445Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T11:15:25.462Z] [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T11:15:25.840Z] [BOT] ✅ Posted message: Machine Learning Engineer Intern @ coinbase in #🤖・ai-jobs
[2026-02-07T11:15:25.841Z] [BOT] ✅ Industry: Machine Learning Engineer Intern @ coinbase
[2026-02-07T11:15:25.841Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Intern @ coinbase → category channel (1 total channels)
[2026-02-07T11:15:25.842Z] [BOT] 💾 BEFORE MERGE: 1485 jobs in memory (cached)
[2026-02-07T11:15:25.864Z] [BOT] ✅ Loaded V2 database: 1484 jobs
💾 DISK STATE: 1484 jobs on disk
[2026-02-07T11:15:25.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1485
[2026-02-07T11:15:25.868Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T11:15:25.868Z] [BOT] 💾 AFTER MERGE: 1485 jobs (merged disk + memory)
[2026-02-07T11:15:25.870Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T11:15:25.875Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T11:15:25.876Z] [BOT] ✅ Archiving complete: 10 archived, 1475 active
[2026-02-07T11:15:25.961Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:15:27.746Z] [BOT] ✅ Posted message: Machine Learning Engineer Intern @ coinbase in #🌉・JID_739bbc0b
[2026-02-07T11:15:27.746Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T11:15:27.746Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Intern @ coinbase → location channel (2 total channels)
💾 BEFORE MERGE: 1475 jobs in memory (cached)
[2026-02-07T11:15:27.768Z] [BOT] ✅ Loaded V2 database: 1475 jobs
💾 DISK STATE: 1475 jobs on disk
[2026-02-07T11:15:27.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1475
[2026-02-07T11:15:27.772Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Intern @ coinbase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T11:15:27.772Z] [BOT] 💾 AFTER MERGE: 1475 jobs (merged disk + memory)
[2026-02-07T11:15:27.773Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-02-07T11:15:27.837Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:15:32.339Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T11:15:32.340Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60e3caf6..." not found, but found as SHA256 "314049a8e23f1f63"
⏭️  Skipping duplicate: JID_07d75074 (posted within 7 days)
[2026-02-07T11:15:32.351Z] [BOT] ✅ Loaded pending queue: 172 total (169 pending, 3 enriched, 0 posted)
[2026-02-07T11:15:32.367Z] [BOT] ✅ Saved pending queue: 172 total (169 pending, 2 enriched, 1 posted)
[2026-02-07T11:15:32.367Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T11:15:32.470Z] [BOT] 📂 Loaded 12622 existing routing entries
[2026-02-07T11:15:32.618Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-07T11:15:32.618Z] [BOT] New entries: 1
   Total entries: 12623
   Timestamp: 2026-02-07T11:15:32.564Z
[2026-02-07T11:15:32.618Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 51
   Successful: 2
[2026-02-07T11:15:32.619Z] [BOT] Failed: 0
   Skipped: 49
[2026-02-07T11:15:32.619Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-07T11:15:32.619Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-07T11:15:32.619Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T11:15:32.619Z] [BOT] 💾 BEFORE MERGE: 1475 jobs in memory (cached)
[2026-02-07T11:15:32.641Z] [BOT] ✅ Loaded V2 database: 1475 jobs
💾 DISK STATE: 1475 jobs on disk
[2026-02-07T11:15:32.641Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1475
[2026-02-07T11:15:32.644Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T11:15:32.645Z] [BOT] 💾 AFTER MERGE: 1475 jobs (merged disk + memory)
[2026-02-07T11:15:32.645Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-02-07T11:15:32.705Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:15:32.706Z] [BOT] ✅ Database saved successfully
[2026-02-07T11:15:34.727Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*