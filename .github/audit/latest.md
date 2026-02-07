# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T12:01:04.375Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T12:00:52.353Z] ========================================
[2026-02-07T12:00:52.355Z] Discord Bot Execution Log
[2026-02-07T12:00:52.355Z] Environment: GitHub Actions
[2026-02-07T12:00:52.355Z] Node Version: v20.20.0
[2026-02-07T12:00:52.355Z] ========================================
[2026-02-07T12:00:52.355Z] Environment Variables Check:
[2026-02-07T12:00:52.355Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T12:00:52.355Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T12:00:52.355Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T12:00:52.355Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T12:00:52.355Z] 
Multi-Channel Configuration:
[2026-02-07T12:00:52.355Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T12:00:52.356Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T12:00:52.356Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:00:52.356Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T12:00:52.356Z] 
Data Files Check:
[2026-02-07T12:00:52.357Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151724 bytes)
[2026-02-07T12:00:52.390Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6469179 bytes)
[2026-02-07T12:00:52.390Z] 
========================================
[2026-02-07T12:00:52.390Z] Starting Enhanced Discord Bot...
[2026-02-07T12:00:52.390Z] ========================================
[2026-02-07T12:00:52.970Z] [BOT] ✅ Loaded V2 database: 1456 jobs
[2026-02-07T12:00:53.951Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T12:00:53.952Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T12:00:53.952Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T12:00:53.970Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T12:00:53.971Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:00:53.971Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T12:00:53.972Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T12:00:53.972Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:00:53.972Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T12:00:53.972Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T12:00:53.983Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-07T12:00:53.984Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T12:00:53.985Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T12:00:53.998Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T12:00:54.023Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-07T12:00:54.023Z] [BOT] 🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T12:00:54.024Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
[2026-02-07T12:00:54.024Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T12:00:54.026Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-07T12:00:54.027Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
[2026-02-07T12:00:54.027Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T12:00:54.044Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T12:00:54.280Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #💰・finance-jobs
[2026-02-07T12:00:54.280Z] [BOT] ✅ Industry: Enterprise Account Executive @ brex
[2026-02-07T12:00:54.281Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → category channel (1 total channels)
[2026-02-07T12:00:54.281Z] [BOT] 💾 BEFORE MERGE: 1457 jobs in memory (cached)
[2026-02-07T12:00:54.303Z] [BOT] ✅ Loaded V2 database: 1456 jobs
💾 DISK STATE: 1456 jobs on disk
[2026-02-07T12:00:54.303Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1457
[2026-02-07T12:00:54.307Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T12:00:54.307Z] [BOT] 💾 AFTER MERGE: 1457 jobs (merged disk + memory)
[2026-02-07T12:00:54.308Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T12:00:54.313Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1447 active
[2026-02-07T12:00:54.384Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T12:00:56.061Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #🗽・JID_98d4f0de
[2026-02-07T12:00:56.061Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-07T12:00:56.061Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 1447 jobs in memory (cached)
[2026-02-07T12:00:56.082Z] [BOT] ✅ Loaded V2 database: 1447 jobs
💾 DISK STATE: 1447 jobs on disk
[2026-02-07T12:00:56.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1447
[2026-02-07T12:00:56.086Z] [BOT] 🔀 Deep merged: Enterprise Account Executive @ brex (disk: 1 channels → merged: 2 channels)
[2026-02-07T12:00:56.086Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1447 jobs (merged disk + memory)
[2026-02-07T12:00:56.087Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-02-07T12:00:56.148Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T12:01:00.649Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T12:01:00.651Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_628e7251..." not found, but found as SHA256 "8eec4559ef5cb6bd"
[2026-02-07T12:01:00.651Z] [BOT] ⏭️  Skipping duplicate: JID_628e7251 (posted within 7 days)
[2026-02-07T12:01:00.661Z] [BOT] ✅ Loaded pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-07T12:01:00.678Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-07T12:01:00.678Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T12:01:00.775Z] [BOT] 📂 Loaded 12624 existing routing entries
[2026-02-07T12:01:00.921Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-07T12:01:00.921Z] [BOT] Total entries: 12625
   Timestamp: 2026-02-07T12:01:00.868Z
[2026-02-07T12:01:00.922Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T12:01:00.922Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-07T12:01:00.922Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T12:01:00.922Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-07T12:01:00.922Z] [BOT] 1. #💰・finance-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-07T12:01:00.923Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1447 jobs in memory (cached)
[2026-02-07T12:01:00.943Z] [BOT] ✅ Loaded V2 database: 1447 jobs
💾 DISK STATE: 1447 jobs on disk
[2026-02-07T12:01:00.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1447
[2026-02-07T12:01:00.946Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T12:01:00.946Z] [BOT] 💾 AFTER MERGE: 1447 jobs (merged disk + memory)
[2026-02-07T12:01:00.947Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-02-07T12:01:01.005Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T12:01:01.006Z] [BOT] ✅ Database saved successfully
[2026-02-07T12:01:03.026Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*