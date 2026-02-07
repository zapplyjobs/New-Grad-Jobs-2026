# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T07:23:12.560Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T07:23:00.868Z] ========================================
[2026-02-07T07:23:00.870Z] Discord Bot Execution Log
[2026-02-07T07:23:00.870Z] Environment: GitHub Actions
[2026-02-07T07:23:00.870Z] Node Version: v20.20.0
[2026-02-07T07:23:00.870Z] ========================================
[2026-02-07T07:23:00.870Z] Environment Variables Check:
[2026-02-07T07:23:00.870Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T07:23:00.870Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T07:23:00.870Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T07:23:00.870Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T07:23:00.871Z] 
Multi-Channel Configuration:
[2026-02-07T07:23:00.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T07:23:00.871Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T07:23:00.871Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:23:00.871Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T07:23:00.871Z] 
Data Files Check:
[2026-02-07T07:23:00.873Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156673 bytes)
[2026-02-07T07:23:00.908Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7406968 bytes)
[2026-02-07T07:23:00.908Z] 
========================================
[2026-02-07T07:23:00.908Z] Starting Enhanced Discord Bot...
[2026-02-07T07:23:00.908Z] ========================================
[2026-02-07T07:23:01.459Z] [BOT] ✅ Loaded V2 database: 1639 jobs
[2026-02-07T07:23:02.041Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T07:23:02.041Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T07:23:02.041Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T07:23:02.059Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T07:23:02.059Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:23:02.060Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T07:23:02.060Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:23:02.061Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T07:23:02.061Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T07:23:02.073Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-07T07:23:02.074Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-07T07:23:02.075Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-07T07:23:02.089Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T07:23:02.111Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-07T07:23:02.111Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T07:23:02.112Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T07:23:02.112Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-07T07:23:02.114Z] [BOT] 📍 [ROUTING] "Analytics Engineer, Product Analytics" @ airtable
[2026-02-07T07:23:02.114Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-07T07:23:02.131Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T07:23:02.538Z] [BOT] ✅ Posted message: Analytics Engineer, Product Analytics @ airtable in #🤖・ai-jobs
[2026-02-07T07:23:02.538Z] [BOT] ✅ Industry: Analytics Engineer, Product Analytics @ airtable
[2026-02-07T07:23:02.539Z] [BOT] 💾 Added channel posting: Analytics Engineer, Product Analytics @ airtable → category channel (1 total channels)
[2026-02-07T07:23:02.539Z] [BOT] 💾 BEFORE MERGE: 1640 jobs in memory (cached)
[2026-02-07T07:23:02.564Z] [BOT] ✅ Loaded V2 database: 1639 jobs
💾 DISK STATE: 1639 jobs on disk
[2026-02-07T07:23:02.565Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1640
[2026-02-07T07:23:02.569Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T07:23:02.569Z] [BOT] 💾 AFTER MERGE: 1640 jobs (merged disk + memory)
[2026-02-07T07:23:02.570Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T07:23:02.573Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T07:23:02.573Z] [BOT] ✅ Archiving complete: 10 archived, 1630 active
[2026-02-07T07:23:02.649Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:23:04.353Z] [BOT] ✅ Posted message: Analytics Engineer, Product Analytics @ airtable in #🌉・JID_739bbc0b
[2026-02-07T07:23:04.354Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T07:23:04.354Z] [BOT] 💾 Added channel posting: Analytics Engineer, Product Analytics @ airtable → location channel (2 total channels)
[2026-02-07T07:23:04.354Z] [BOT] 💾 BEFORE MERGE: 1630 jobs in memory (cached)
[2026-02-07T07:23:04.377Z] [BOT] ✅ Loaded V2 database: 1630 jobs
💾 DISK STATE: 1630 jobs on disk
[2026-02-07T07:23:04.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1630
[2026-02-07T07:23:04.381Z] [BOT] 🔀 Deep merged: Analytics Engineer, Product Analytics @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T07:23:04.382Z] [BOT] 💾 AFTER MERGE: 1630 jobs (merged disk + memory)
[2026-02-07T07:23:04.383Z] [BOT] ✅ No jobs to archive (all 1630 jobs within 7-day window)
[2026-02-07T07:23:04.451Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:23:08.953Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T07:23:08.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "9d2d5d3e83591d07"
[2026-02-07T07:23:08.954Z] [BOT] ⏭️  Skipping duplicate: JID_c4ad9978 (posted within 7 days)
[2026-02-07T07:23:08.964Z] [BOT] ✅ Loaded pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-07T07:23:08.982Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T07:23:09.084Z] [BOT] 📂 Loaded 12619 existing routing entries
[2026-02-07T07:23:09.222Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-07T07:23:09.222Z] [BOT] Total entries: 12620
   Timestamp: 2026-02-07T07:23:09.166Z
[2026-02-07T07:23:09.223Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-07T07:23:09.223Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1630 jobs in memory (cached)
[2026-02-07T07:23:09.253Z] [BOT] ✅ Loaded V2 database: 1630 jobs
💾 DISK STATE: 1630 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1630
[2026-02-07T07:23:09.256Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T07:23:09.256Z] [BOT] 💾 AFTER MERGE: 1630 jobs (merged disk + memory)
[2026-02-07T07:23:09.257Z] [BOT] ✅ No jobs to archive (all 1630 jobs within 7-day window)
[2026-02-07T07:23:09.327Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:23:09.327Z] [BOT] ✅ Database saved successfully
[2026-02-07T07:23:11.346Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*