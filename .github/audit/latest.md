# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T00:03:30.902Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T00:03:14.827Z] ========================================
[2026-02-06T00:03:14.830Z] Discord Bot Execution Log
[2026-02-06T00:03:14.830Z] Environment: GitHub Actions
[2026-02-06T00:03:14.830Z] Node Version: v20.20.0
[2026-02-06T00:03:14.830Z] ========================================
[2026-02-06T00:03:14.830Z] Environment Variables Check:
[2026-02-06T00:03:14.830Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T00:03:14.830Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T00:03:14.830Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T00:03:14.830Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T00:03:14.830Z] 
Multi-Channel Configuration:
[2026-02-06T00:03:14.831Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T00:03:14.831Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T00:03:14.831Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:03:14.831Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T00:03:14.831Z] 
Data Files Check:
[2026-02-06T00:03:14.833Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178299 bytes)
[2026-02-06T00:03:14.917Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11350634 bytes)
[2026-02-06T00:03:14.917Z] 
========================================
[2026-02-06T00:03:14.917Z] Starting Enhanced Discord Bot...
[2026-02-06T00:03:14.917Z] ========================================
[2026-02-06T00:03:15.499Z] [BOT] ✅ Loaded V2 database: 2242 jobs
[2026-02-06T00:03:16.126Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T00:03:16.127Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T00:03:16.127Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T00:03:16.148Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T00:03:16.149Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T00:03:16.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T00:03:16.151Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T00:03:16.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T00:03:16.151Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T00:03:16.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T00:03:16.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T00:03:16.153Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T00:03:16.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T00:03:16.153Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T00:03:16.166Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-06T00:03:16.166Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T00:03:16.166Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T00:03:16.166Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-06T00:03:16.166Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T00:03:16.167Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-06T00:03:16.187Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T00:03:16.216Z] [BOT] ✅ Saved pending queue: 177 total (170 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (43 blacklisted)
[2026-02-06T00:03:16.216Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T00:03:16.216Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T00:03:16.216Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T00:03:16.219Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T00:03:16.220Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Temporary)" @ discord
   Category: TECH (default)
[2026-02-06T00:03:16.221Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T00:03:16.238Z] [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T00:03:16.479Z] [BOT] ✅ Posted message: Technical Sourcer (Temporary) @ discord in #💻・tech-jobs
[2026-02-06T00:03:16.480Z] [BOT] ✅ Industry: Technical Sourcer (Temporary) @ discord
[2026-02-06T00:03:16.481Z] [BOT] 💾 Added channel posting: Technical Sourcer (Temporary) @ discord → category channel (1 total channels)
[2026-02-06T00:03:16.481Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-06T00:03:16.553Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-06T00:03:16.554Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-06T00:03:16.560Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T00:03:16.560Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-06T00:03:16.562Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-06T00:03:16.711Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:03:18.464Z] [BOT] ✅ Posted message: Technical Sourcer (Temporary) @ discord in #🌉・JID_739bbc0b
[2026-02-06T00:03:18.464Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T00:03:18.465Z] [BOT] 💾 Added channel posting: Technical Sourcer (Temporary) @ discord → location channel (2 total channels)
[2026-02-06T00:03:18.465Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-06T00:03:18.538Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-06T00:03:18.547Z] [BOT] 🔀 Deep merged: Technical Sourcer (Temporary) @ discord (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-06T00:03:18.548Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-06T00:03:18.707Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:03:20.210Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_58441e58 Consultancy Services
[2026-02-06T00:03:20.210Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T00:03:20.460Z] [BOT] ✅ Posted message: Software Engineer @ ORG_58441e58 Consultancy Services in #💻・tech-jobs
[2026-02-06T00:03:20.460Z] [BOT] ✅ Industry: Software Engineer @ ORG_58441e58 Consultancy Services
[2026-02-06T00:03:20.461Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_58441e58 Consultancy Services → category channel (1 total channels)
[2026-02-06T00:03:20.462Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-06T00:03:20.524Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-06T00:03:20.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-06T00:03:20.531Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T00:03:20.531Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-06T00:03:20.532Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-06T00:03:20.683Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:03:22.667Z] [BOT] ✅ Posted message: Software Engineer @ ORG_58441e58 Consultancy Services in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T00:03:22.668Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_58441e58 Consultancy Services → location channel (2 total channels)
[2026-02-06T00:03:22.668Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-06T00:03:22.731Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-06T00:03:22.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-06T00:03:22.737Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_58441e58 Consultancy Services (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T00:03:22.737Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-06T00:03:22.739Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-06T00:03:22.889Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:03:27.390Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T00:03:27.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "9aa96f297553d5b9"
[2026-02-06T00:03:27.392Z] [BOT] ⏭️  Skipping duplicate: JID_2700bf9a (posted within 7 days)
[2026-02-06T00:03:27.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "a0553103b2ff0fee"
[2026-02-06T00:03:27.393Z] [BOT] ⏭️  Skipping duplicate: JID_9ec77a47 (posted within 7 days)
[2026-02-06T00:03:27.408Z] [BOT] ✅ Loaded pending queue: 177 total (170 pending, 7 enriched, 0 posted)
[2026-02-06T00:03:27.427Z] [BOT] ✅ Saved pending queue: 177 total (170 pending, 5 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T00:03:27.571Z] [BOT] 📂 Loaded 12483 existing routing entries
[2026-02-06T00:03:27.700Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12485
   Timestamp: 2026-02-06T00:03:27.646Z
[2026-02-06T00:03:27.700Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
[2026-02-06T00:03:27.701Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T00:03:27.701Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 1 posts
     3. #📍・JID_6daed763: 1 posts
[2026-02-06T00:03:27.701Z] [BOT] [STATS] Channel stats saved
[2026-02-06T00:03:27.701Z] [BOT] 💾 Saving posted jobs database...
[2026-02-06T00:03:27.701Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-06T00:03:27.766Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-06T00:03:27.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-06T00:03:27.775Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T00:03:27.776Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-06T00:03:27.778Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-06T00:03:27.926Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
[2026-02-06T00:03:27.927Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T00:03:29.946Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*