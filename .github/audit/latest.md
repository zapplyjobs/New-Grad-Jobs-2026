# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T14:27:09.265Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T14:26:48.949Z] ========================================
[2026-02-06T14:26:48.951Z] Discord Bot Execution Log
[2026-02-06T14:26:48.951Z] Environment: GitHub Actions
[2026-02-06T14:26:48.951Z] Node Version: v20.20.0
[2026-02-06T14:26:48.951Z] ========================================
[2026-02-06T14:26:48.951Z] Environment Variables Check:
[2026-02-06T14:26:48.951Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T14:26:48.951Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T14:26:48.951Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T14:26:48.952Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T14:26:48.952Z] 
Multi-Channel Configuration:
[2026-02-06T14:26:48.952Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T14:26:48.952Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T14:26:48.952Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:26:48.952Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T14:26:48.952Z] 
Data Files Check:
[2026-02-06T14:26:48.954Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104102 bytes)
[2026-02-06T14:26:49.011Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9780084 bytes)
[2026-02-06T14:26:49.012Z] 
========================================
[2026-02-06T14:26:49.012Z] Starting Enhanced Discord Bot...
[2026-02-06T14:26:49.012Z] ========================================
[2026-02-06T14:26:49.592Z] [BOT] ✅ Loaded V2 database: 2019 jobs
[2026-02-06T14:26:50.309Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T14:26:50.310Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T14:26:50.310Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T14:26:50.324Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T14:26:50.324Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:26:50.325Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T14:26:50.325Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:26:50.326Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T14:26:50.326Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T14:26:50.343Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T14:26:50.343Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-06T14:26:50.344Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T14:26:50.345Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-06T14:26:50.357Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T14:26:50.381Z] [BOT] ✅ Saved pending queue: 170 total (166 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (46 blacklisted)
[2026-02-06T14:26:50.382Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T14:26:50.382Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T14:26:50.382Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T14:26:50.384Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T14:26:50.386Z] [BOT] 📍 [ROUTING] "Jr Data Engineer" @ ORG_6cd9e83c Federal Services
[2026-02-06T14:26:50.386Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T14:26:50.386Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T14:26:50.403Z] [BOT ERROR] (node:2510) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T14:26:50.766Z] [BOT] ✅ Posted message: Jr Data Engineer @ ORG_6cd9e83c Federal Services in #📊・JID_fb739488
[2026-02-06T14:26:50.766Z] [BOT] ✅ Industry: Jr Data Engineer @ ORG_6cd9e83c Federal Services
[2026-02-06T14:26:50.767Z] [BOT] 💾 Added channel posting: Jr Data Engineer @ ORG_6cd9e83c Federal Services → category channel (1 total channels)
[2026-02-06T14:26:50.768Z] [BOT] 💾 BEFORE MERGE: 2020 jobs in memory (cached)
[2026-02-06T14:26:50.807Z] [BOT] ✅ Loaded V2 database: 2019 jobs
💾 DISK STATE: 2019 jobs on disk
[2026-02-06T14:26:50.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2020
[2026-02-06T14:26:50.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:26:50.813Z] [BOT] 💾 AFTER MERGE: 2020 jobs (merged disk + memory)
[2026-02-06T14:26:50.814Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T14:26:50.820Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T14:26:50.821Z] [BOT] ✅ Archiving complete: 20 archived, 2000 active
[2026-02-06T14:26:50.954Z] [BOT] 💾 Saved posted_jobs.json: 2000 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:26:52.734Z] [BOT] ✅ Posted message: Jr Data Engineer @ ORG_6cd9e83c Federal Services in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T14:26:52.735Z] [BOT] 💾 Added channel posting: Jr Data Engineer @ ORG_6cd9e83c Federal Services → location channel (2 total channels)
[2026-02-06T14:26:52.735Z] [BOT] 💾 BEFORE MERGE: 2000 jobs in memory (cached)
[2026-02-06T14:26:52.776Z] [BOT] ✅ Loaded V2 database: 2000 jobs
💾 DISK STATE: 2000 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2000
[2026-02-06T14:26:52.783Z] [BOT] 🔀 Deep merged: Jr Data Engineer @ ORG_6cd9e83c Federal Services (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T14:26:52.783Z] [BOT] 💾 AFTER MERGE: 2000 jobs (merged disk + memory)
[2026-02-06T14:26:52.785Z] [BOT] ✅ No jobs to archive (all 2000 jobs within 7-day window)
[2026-02-06T14:26:52.892Z] [BOT] 💾 Saved posted_jobs.json: 2000 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:26:57.392Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T14:26:57.394Z] [BOT] 📍 [ROUTING] "Hiring | CSV Validation Engineer | Hillsboro, OR | Contract" @ ORG_2f17a0f8 via Dice
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T14:26:58.907Z] [BOT] ✅ Posted message: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice in #💻・tech-jobs
  ✅ Industry: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice
[2026-02-06T14:26:58.908Z] [BOT] 💾 Added channel posting: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-06T14:26:58.908Z] [BOT] 💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-06T14:26:58.942Z] [BOT] ✅ Loaded V2 database: 2000 jobs
💾 DISK STATE: 2000 jobs on disk
[2026-02-06T14:26:58.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-06T14:26:58.947Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:26:58.947Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-06T14:26:58.948Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-06T14:26:59.061Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:27:00.811Z] [BOT] ✅ Posted message: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T14:27:00.811Z] [BOT] 💾 Added channel posting: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-06T14:27:00.812Z] [BOT] 💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-06T14:27:00.846Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
[2026-02-06T14:27:00.847Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-06T14:27:00.851Z] [BOT] 🔀 Deep merged: Hiring | CSV Validation Engineer | Hillsboro, OR | Contract @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T14:27:00.851Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-06T14:27:00.852Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-06T14:27:00.968Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
[2026-02-06T14:27:00.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T14:27:05.472Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T14:27:05.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f67fc64f..." not found, but found as SHA256 "c8513008154ced8b"
⏭️  Skipping duplicate: JID_87a675ee (posted within 7 days)
[2026-02-06T14:27:05.474Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c0a11b6e..." not found, but found as SHA256 "d511781c1eb063cb"
[2026-02-06T14:27:05.474Z] [BOT] ⏭️  Skipping duplicate: JID_f2f11584 (posted within 7 days)
[2026-02-06T14:27:05.483Z] [BOT] ✅ Loaded pending queue: 170 total (166 pending, 4 enriched, 0 posted)
[2026-02-06T14:27:05.499Z] [BOT] ✅ Saved pending queue: 170 total (166 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T14:27:05.614Z] [BOT] 📂 Loaded 12548 existing routing entries
[2026-02-06T14:27:05.734Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12550
   Timestamp: 2026-02-06T14:27:05.682Z
[2026-02-06T14:27:05.734Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
[2026-02-06T14:27:05.735Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T14:27:05.735Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #📊・JID_fb739488: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #📍・JID_6daed763: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-06T14:27:05.779Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-06T14:27:05.785Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:27:05.785Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-06T14:27:05.790Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-06T14:27:05.907Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:27:05.908Z] [BOT] ✅ Database saved successfully
[2026-02-06T14:27:07.932Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2510) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*