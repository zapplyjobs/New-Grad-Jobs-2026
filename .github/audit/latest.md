# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T11:47:10.914Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T11:46:59.861Z] ========================================
[2026-02-07T11:46:59.863Z] Discord Bot Execution Log
[2026-02-07T11:46:59.863Z] Environment: GitHub Actions
[2026-02-07T11:46:59.863Z] Node Version: v20.20.0
[2026-02-07T11:46:59.863Z] ========================================
[2026-02-07T11:46:59.863Z] Environment Variables Check:
[2026-02-07T11:46:59.864Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T11:46:59.864Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T11:46:59.864Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T11:46:59.864Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T11:46:59.864Z] 
Multi-Channel Configuration:
[2026-02-07T11:46:59.864Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T11:46:59.864Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.864Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T11:46:59.865Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T11:46:59.865Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T11:46:59.865Z] 
Data Files Check:
[2026-02-07T11:46:59.866Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149360 bytes)
[2026-02-07T11:46:59.899Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6510668 bytes)
[2026-02-07T11:46:59.899Z] 
========================================
[2026-02-07T11:46:59.899Z] Starting Enhanced Discord Bot...
[2026-02-07T11:46:59.899Z] ========================================
[2026-02-07T11:47:00.496Z] [BOT] ✅ Loaded V2 database: 1465 jobs
[2026-02-07T11:47:00.876Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T11:47:00.876Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T11:47:00.876Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T11:47:00.891Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T11:47:00.891Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T11:47:00.892Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T11:47:00.892Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T11:47:00.893Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T11:47:00.893Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T11:47:00.904Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T11:47:00.905Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-07T11:47:00.905Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-07T11:47:00.905Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
[2026-02-07T11:47:00.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-07T11:47:00.907Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-07T11:47:00.907Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T11:47:00.907Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-07T11:47:00.907Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-07T11:47:00.907Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T11:47:00.925Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T11:47:00.948Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
[2026-02-07T11:47:00.948Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T11:47:00.949Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-07T11:47:00.949Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T11:47:00.951Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-07T11:47:00.952Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
[2026-02-07T11:47:00.952Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T11:47:00.970Z] [BOT ERROR] (node:2590) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T11:47:01.204Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #💰・finance-jobs
[2026-02-07T11:47:01.205Z] [BOT] ✅ Industry: Enterprise Account Executive @ brex
[2026-02-07T11:47:01.205Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → category channel (1 total channels)
[2026-02-07T11:47:01.206Z] [BOT] 💾 BEFORE MERGE: 1466 jobs in memory (cached)
[2026-02-07T11:47:01.228Z] [BOT] ✅ Loaded V2 database: 1465 jobs
💾 DISK STATE: 1465 jobs on disk
[2026-02-07T11:47:01.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1466
[2026-02-07T11:47:01.232Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T11:47:01.232Z] [BOT] 💾 AFTER MERGE: 1466 jobs (merged disk + memory)
[2026-02-07T11:47:01.233Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T11:47:01.239Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1456 active
[2026-02-07T11:47:01.329Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:47:03.218Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #🌉・JID_739bbc0b
[2026-02-07T11:47:03.219Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T11:47:03.219Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → location channel (2 total channels)
[2026-02-07T11:47:03.219Z] [BOT] 💾 BEFORE MERGE: 1456 jobs in memory (cached)
[2026-02-07T11:47:03.240Z] [BOT] ✅ Loaded V2 database: 1456 jobs
💾 DISK STATE: 1456 jobs on disk
[2026-02-07T11:47:03.241Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1456
[2026-02-07T11:47:03.244Z] [BOT] 🔀 Deep merged: Enterprise Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T11:47:03.244Z] [BOT] 💾 AFTER MERGE: 1456 jobs (merged disk + memory)
[2026-02-07T11:47:03.245Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-02-07T11:47:03.309Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:47:07.811Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T11:47:07.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f9a3a07..." not found, but found as SHA256 "c8e68582831dc93b"
⏭️  Skipping duplicate: JID_1f9a3a07 (posted within 7 days)
[2026-02-07T11:47:07.823Z] [BOT] ✅ Loaded pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-07T11:47:07.840Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T11:47:07.943Z] [BOT] 📂 Loaded 12623 existing routing entries
[2026-02-07T11:47:08.094Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12624
[2026-02-07T11:47:08.095Z] [BOT] Timestamp: 2026-02-07T11:47:08.040Z
[2026-02-07T11:47:08.095Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-07T11:47:08.095Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T11:47:08.095Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-07T11:47:08.096Z] [BOT] 1. #💰・finance-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-07T11:47:08.096Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1456 jobs in memory (cached)
[2026-02-07T11:47:08.117Z] [BOT] ✅ Loaded V2 database: 1456 jobs
💾 DISK STATE: 1456 jobs on disk
[2026-02-07T11:47:08.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1456
[2026-02-07T11:47:08.121Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1456 jobs (merged disk + memory)
[2026-02-07T11:47:08.122Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-02-07T11:47:08.183Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T11:47:08.184Z] [BOT] ✅ Database saved successfully
[2026-02-07T11:47:10.207Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2590) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*