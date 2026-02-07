# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T14:33:55.200Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T14:33:43.747Z] ========================================
[2026-02-07T14:33:43.749Z] Discord Bot Execution Log
[2026-02-07T14:33:43.749Z] Environment: GitHub Actions
[2026-02-07T14:33:43.749Z] Node Version: v20.20.0
[2026-02-07T14:33:43.749Z] ========================================
[2026-02-07T14:33:43.749Z] Environment Variables Check:
[2026-02-07T14:33:43.749Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T14:33:43.749Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T14:33:43.749Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T14:33:43.750Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T14:33:43.750Z] 
Multi-Channel Configuration:
[2026-02-07T14:33:43.750Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T14:33:43.750Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T14:33:43.750Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:33:43.750Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T14:33:43.750Z] 
Data Files Check:
[2026-02-07T14:33:43.752Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129535 bytes)
[2026-02-07T14:33:43.783Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6117979 bytes)
[2026-02-07T14:33:43.783Z] 
========================================
[2026-02-07T14:33:43.783Z] Starting Enhanced Discord Bot...
[2026-02-07T14:33:43.783Z] ========================================
[2026-02-07T14:33:44.351Z] [BOT] ✅ Loaded V2 database: 1387 jobs
[2026-02-07T14:33:44.945Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T14:33:44.945Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T14:33:44.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T14:33:44.974Z] [BOT] ✅ Loaded pending queue: 406 total (356 pending, 50 enriched, 0 posted)
[2026-02-07T14:33:44.974Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:33:44.975Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T14:33:44.976Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T14:33:44.976Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:33:44.976Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T14:33:44.976Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T14:33:44.988Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-07T14:33:44.989Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-07T14:33:44.990Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-07T14:33:44.991Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-07T14:33:44.991Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-07T14:33:44.991Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-07T14:33:44.991Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T14:33:44.991Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-07T14:33:45.040Z] [BOT] ✅ Loaded pending queue: 406 total (356 pending, 50 enriched, 0 posted)
[2026-02-07T14:33:45.073Z] [BOT] ✅ Saved pending queue: 359 total (356 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-07T14:33:45.074Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T14:33:45.074Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-07T14:33:45.074Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T14:33:45.075Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-07T14:33:45.076Z] [BOT] 📍 [ROUTING] "Software Engineer, AI Reliability" @ anthropic
[2026-02-07T14:33:45.076Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T14:33:45.077Z] [BOT] 🔢 Initialized channel CH_fff0e4bf counter at 371 (active: 371, archive: 0)
[2026-02-07T14:33:45.094Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T14:33:45.562Z] [BOT] ✅ Posted message: Software Engineer, AI Reliability @ anthropic in #🤖・ai-jobs
[2026-02-07T14:33:45.562Z] [BOT] ✅ Industry: Software Engineer, AI Reliability @ anthropic
[2026-02-07T14:33:45.563Z] [BOT] 💾 Added channel posting: Software Engineer, AI Reliability @ anthropic → category channel (1 total channels)
[2026-02-07T14:33:45.563Z] [BOT] 💾 BEFORE MERGE: 1388 jobs in memory (cached)
[2026-02-07T14:33:45.588Z] [BOT] ✅ Loaded V2 database: 1387 jobs
💾 DISK STATE: 1387 jobs on disk
[2026-02-07T14:33:45.589Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1388
[2026-02-07T14:33:45.593Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:33:45.593Z] [BOT] 💾 AFTER MERGE: 1388 jobs (merged disk + memory)
[2026-02-07T14:33:45.594Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T14:33:45.600Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T14:33:45.600Z] [BOT] ✅ Archiving complete: 10 archived, 1378 active
[2026-02-07T14:33:45.685Z] [BOT] 💾 Saved posted_jobs.json: 1378 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:33:47.187Z] [BOT] 🔢 Initialized channel CH_67225533 counter at 316 (active: 316, archive: 0)
[2026-02-07T14:33:47.381Z] [BOT] ✅ Posted message: Software Engineer, AI Reliability @ anthropic in #🌉・JID_739bbc0b
[2026-02-07T14:33:47.381Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T14:33:47.381Z] [BOT] 💾 Added channel posting: Software Engineer, AI Reliability @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 1378 jobs in memory (cached)
[2026-02-07T14:33:47.402Z] [BOT] ✅ Loaded V2 database: 1378 jobs
💾 DISK STATE: 1378 jobs on disk
[2026-02-07T14:33:47.402Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1378
[2026-02-07T14:33:47.405Z] [BOT] 🔀 Deep merged: Software Engineer, AI Reliability @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-07T14:33:47.405Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1378 jobs (merged disk + memory)
[2026-02-07T14:33:47.406Z] [BOT] ✅ No jobs to archive (all 1378 jobs within 7-day window)
[2026-02-07T14:33:47.465Z] [BOT] 💾 Saved posted_jobs.json: 1378 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:33:51.967Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T14:33:51.968Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e5e541a213193fcb"
[2026-02-07T14:33:51.968Z] [BOT] ⏭️  Skipping duplicate: JID_6b890eae (posted within 7 days)
[2026-02-07T14:33:51.988Z] [BOT] ✅ Loaded pending queue: 359 total (356 pending, 3 enriched, 0 posted)
[2026-02-07T14:33:52.028Z] [BOT] ✅ Saved pending queue: 359 total (356 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-07T14:33:52.028Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T14:33:52.141Z] [BOT] 📂 Loaded 12625 existing routing entries
[2026-02-07T14:33:52.262Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12626
   Timestamp: 2026-02-07T14:33:52.209Z
[2026-02-07T14:33:52.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T14:33:52.263Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-07T14:33:52.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T14:33:52.263Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-07T14:33:52.264Z] [BOT] [STATS] Channel stats saved
[2026-02-07T14:33:52.264Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1378 jobs in memory (cached)
[2026-02-07T14:33:52.284Z] [BOT] ✅ Loaded V2 database: 1378 jobs
💾 DISK STATE: 1378 jobs on disk
[2026-02-07T14:33:52.284Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1378
[2026-02-07T14:33:52.287Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:33:52.287Z] [BOT] 💾 AFTER MERGE: 1378 jobs (merged disk + memory)
[2026-02-07T14:33:52.288Z] [BOT] ✅ No jobs to archive (all 1378 jobs within 7-day window)
[2026-02-07T14:33:52.345Z] [BOT] 💾 Saved posted_jobs.json: 1378 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:33:52.345Z] [BOT] ✅ Database saved successfully
[2026-02-07T14:33:54.368Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*