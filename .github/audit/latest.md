# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T02:47:07.434Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T02:46:55.758Z] ========================================
[2026-02-05T02:46:55.760Z] Discord Bot Execution Log
[2026-02-05T02:46:55.760Z] Environment: GitHub Actions
[2026-02-05T02:46:55.760Z] Node Version: v20.20.0
[2026-02-05T02:46:55.760Z] ========================================
[2026-02-05T02:46:55.760Z] Environment Variables Check:
[2026-02-05T02:46:55.761Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T02:46:55.761Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T02:46:55.761Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T02:46:55.761Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T02:46:55.761Z] 
Multi-Channel Configuration:
[2026-02-05T02:46:55.761Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T02:46:55.761Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.761Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.761Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T02:46:55.761Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.761Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.762Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.762Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.762Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T02:46:55.762Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T02:46:55.762Z] 
Data Files Check:
[2026-02-05T02:46:55.763Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171853 bytes)
[2026-02-05T02:46:55.821Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11504429 bytes)
[2026-02-05T02:46:55.822Z] 
========================================
[2026-02-05T02:46:55.822Z] Starting Enhanced Discord Bot...
[2026-02-05T02:46:55.822Z] ========================================
[2026-02-05T02:46:56.398Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-05T02:46:56.849Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T02:46:56.850Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T02:46:56.850Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T02:46:56.872Z] [BOT] ✅ Loaded pending queue: 319 total (269 pending, 50 enriched, 0 posted)
[2026-02-05T02:46:56.872Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T02:46:56.873Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T02:46:56.873Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T02:46:56.873Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T02:46:56.874Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T02:46:56.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T02:46:56.875Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T02:46:56.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T02:46:56.892Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-05T02:46:56.893Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-05T02:46:56.894Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-05T02:46:56.924Z] [BOT] ✅ Loaded pending queue: 319 total (269 pending, 50 enriched, 0 posted)
[2026-02-05T02:46:56.959Z] [BOT] ✅ Saved pending queue: 274 total (269 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-05T02:46:56.959Z] [BOT] 📋 After blacklist filter: 1 jobs (45 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T02:46:56.960Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T02:46:56.960Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T02:46:56.962Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T02:46:56.964Z] [BOT] 📍 [ROUTING] "External Affairs, US Federal" @ anthropic
   Category: TECH (default)
[2026-02-05T02:46:56.964Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T02:46:56.981Z] [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T02:46:57.456Z] [BOT] ✅ Posted message: External Affairs, US Federal @ anthropic in #💻・tech-jobs
[2026-02-05T02:46:57.456Z] [BOT] ✅ Industry: External Affairs, US Federal @ anthropic
[2026-02-05T02:46:57.457Z] [BOT] 💾 Added channel posting: External Affairs, US Federal @ anthropic → category channel (1 total channels)
[2026-02-05T02:46:57.458Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T02:46:57.502Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-05T02:46:57.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T02:46:57.508Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T02:46:57.508Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T02:46:57.510Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T02:46:57.649Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T02:46:59.344Z] [BOT] ✅ Posted message: External Affairs, US Federal @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T02:46:59.344Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T02:46:59.345Z] [BOT] 💾 Added channel posting: External Affairs, US Federal @ anthropic → location channel (2 total channels)
[2026-02-05T02:46:59.345Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T02:46:59.382Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T02:46:59.383Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T02:46:59.388Z] [BOT] 🔀 Deep merged: External Affairs, US Federal @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-05T02:46:59.388Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T02:46:59.389Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T02:46:59.498Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T02:47:04.001Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T02:47:04.002Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "79d3f90b12a37b45"
[2026-02-05T02:47:04.003Z] [BOT] ⏭️  Skipping duplicate: JID_003a3927 (posted within 7 days)
[2026-02-05T02:47:04.019Z] [BOT] ✅ Loaded pending queue: 274 total (269 pending, 5 enriched, 0 posted)
[2026-02-05T02:47:04.052Z] [BOT] ✅ Saved pending queue: 274 total (269 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T02:47:04.146Z] [BOT] 📂 Loaded 12357 existing routing entries
[2026-02-05T02:47:04.291Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-05T02:47:04.291Z] [BOT] Total entries: 12358
   Timestamp: 2026-02-05T02:47:04.235Z
[2026-02-05T02:47:04.291Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T02:47:04.291Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T02:47:04.292Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T02:47:04.292Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-02-05T02:47:04.292Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T02:47:04.292Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T02:47:04.292Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T02:47:04.336Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T02:47:04.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T02:47:04.341Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T02:47:04.341Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T02:47:04.343Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T02:47:04.462Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T02:47:06.486Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*