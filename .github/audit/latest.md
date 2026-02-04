# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T23:15:52.567Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T23:15:40.815Z] ========================================
[2026-02-04T23:15:40.817Z] Discord Bot Execution Log
[2026-02-04T23:15:40.817Z] Environment: GitHub Actions
[2026-02-04T23:15:40.817Z] Node Version: v20.20.0
[2026-02-04T23:15:40.817Z] ========================================
[2026-02-04T23:15:40.817Z] Environment Variables Check:
[2026-02-04T23:15:40.817Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T23:15:40.817Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T23:15:40.817Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T23:15:40.817Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T23:15:40.818Z] 
Multi-Channel Configuration:
[2026-02-04T23:15:40.818Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T23:15:40.818Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T23:15:40.818Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:15:40.818Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T23:15:40.818Z] 
Data Files Check:
[2026-02-04T23:15:40.820Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160497 bytes)
[2026-02-04T23:15:40.880Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11479648 bytes)
[2026-02-04T23:15:40.880Z] 
========================================
[2026-02-04T23:15:40.880Z] Starting Enhanced Discord Bot...
[2026-02-04T23:15:40.880Z] ========================================
[2026-02-04T23:15:41.461Z] [BOT] ✅ Loaded V2 database: 2263 jobs
[2026-02-04T23:15:42.124Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T23:15:42.124Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T23:15:42.125Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T23:15:42.146Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:15:42.147Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:15:42.148Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T23:15:42.148Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T23:15:42.148Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:15:42.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T23:15:42.149Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T23:15:42.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T23:15:42.150Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T23:15:42.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T23:15:42.150Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T23:15:42.168Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T23:15:42.168Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-04T23:15:42.168Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-04T23:15:42.168Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T23:15:42.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-04T23:15:42.170Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
[2026-02-04T23:15:42.199Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:15:42.234Z] [BOT] ✅ Saved pending queue: 279 total (274 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (45 blacklisted)
[2026-02-04T23:15:42.235Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T23:15:42.235Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T23:15:42.236Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-04T23:15:42.237Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-02-04T23:15:42.238Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-04T23:15:42.238Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-04T23:15:42.263Z] [BOT ERROR] (node:2583) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T23:15:42.605Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-02-04T23:15:42.605Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-02-04T23:15:42.607Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
[2026-02-04T23:15:42.607Z] [BOT] 💾 BEFORE MERGE: 2264 jobs in memory (cached)
[2026-02-04T23:15:42.651Z] [BOT] ✅ Loaded V2 database: 2263 jobs
💾 DISK STATE: 2263 jobs on disk
[2026-02-04T23:15:42.652Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2264
[2026-02-04T23:15:42.657Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:15:42.657Z] [BOT] 💾 AFTER MERGE: 2264 jobs (merged disk + memory)
[2026-02-04T23:15:42.658Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-02-04T23:15:42.799Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:15:44.483Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T23:15:44.484Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T23:15:44.484Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → location channel (2 total channels)
[2026-02-04T23:15:44.484Z] [BOT] 💾 BEFORE MERGE: 2264 jobs in memory (cached)
[2026-02-04T23:15:44.522Z] [BOT] ✅ Loaded V2 database: 2264 jobs
💾 DISK STATE: 2264 jobs on disk
[2026-02-04T23:15:44.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2264
[2026-02-04T23:15:44.528Z] [BOT] 🔀 Deep merged: Solutions Architect, Applied AI (National Security) @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-04T23:15:44.528Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2264 jobs (merged disk + memory)
[2026-02-04T23:15:44.529Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-02-04T23:15:44.639Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:15:49.140Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T23:15:49.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-04T23:15:49.142Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-04T23:15:49.158Z] [BOT] ✅ Loaded pending queue: 279 total (274 pending, 5 enriched, 0 posted)
[2026-02-04T23:15:49.193Z] [BOT] ✅ Saved pending queue: 279 total (274 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-04T23:15:49.193Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T23:15:49.288Z] [BOT] 📂 Loaded 12354 existing routing entries
[2026-02-04T23:15:49.430Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-04T23:15:49.430Z] [BOT] Total entries: 12355
   Timestamp: 2026-02-04T23:15:49.377Z
[2026-02-04T23:15:49.431Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T23:15:49.431Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-04T23:15:49.431Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T23:15:49.431Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-02-04T23:15:49.431Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T23:15:49.431Z] [BOT] [STATS] Channel stats saved
[2026-02-04T23:15:49.432Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2264 jobs in memory (cached)
[2026-02-04T23:15:49.477Z] [BOT] ✅ Loaded V2 database: 2264 jobs
💾 DISK STATE: 2264 jobs on disk
[2026-02-04T23:15:49.477Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2264
[2026-02-04T23:15:49.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:15:49.482Z] [BOT] 💾 AFTER MERGE: 2264 jobs (merged disk + memory)
[2026-02-04T23:15:49.483Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-02-04T23:15:49.609Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T23:15:51.635Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2583) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*