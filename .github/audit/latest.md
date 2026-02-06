# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T23:33:46.679Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T23:33:42.453Z] ========================================
[2026-02-06T23:33:42.455Z] Discord Bot Execution Log
[2026-02-06T23:33:42.455Z] Environment: GitHub Actions
[2026-02-06T23:33:42.455Z] Node Version: v20.20.0
[2026-02-06T23:33:42.455Z] ========================================
[2026-02-06T23:33:42.455Z] Environment Variables Check:
[2026-02-06T23:33:42.455Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T23:33:42.455Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T23:33:42.455Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T23:33:42.455Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T23:33:42.456Z] 
Multi-Channel Configuration:
[2026-02-06T23:33:42.456Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T23:33:42.456Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T23:33:42.456Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:33:42.456Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T23:33:42.456Z] 
Data Files Check:
[2026-02-06T23:33:42.458Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142270 bytes)
[2026-02-06T23:33:42.496Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8212057 bytes)
[2026-02-06T23:33:42.496Z] 
========================================
[2026-02-06T23:33:42.496Z] Starting Enhanced Discord Bot...
[2026-02-06T23:33:42.496Z] ========================================
[2026-02-06T23:33:43.051Z] [BOT] ✅ Loaded V2 database: 1781 jobs
[2026-02-06T23:33:43.532Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T23:33:43.533Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T23:33:43.533Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T23:33:43.550Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T23:33:43.551Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:33:43.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T23:33:43.552Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T23:33:43.552Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:33:43.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T23:33:43.552Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T23:33:43.568Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T23:33:43.568Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-06T23:33:43.568Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-06T23:33:43.568Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-06T23:33:43.568Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-06T23:33:43.568Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
[2026-02-06T23:33:43.569Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-06T23:33:43.570Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-06T23:33:43.583Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T23:33:43.612Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-06T23:33:43.612Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T23:33:43.612Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T23:33:43.613Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T23:33:43.613Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T23:33:43.614Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T23:33:43.614Z] [BOT] 💾 BEFORE MERGE: 1781 jobs in memory (cached)
[2026-02-06T23:33:43.646Z] [BOT] ✅ Loaded V2 database: 1781 jobs
💾 DISK STATE: 1781 jobs on disk
[2026-02-06T23:33:43.649Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1781
[2026-02-06T23:33:43.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:33:43.651Z] [BOT] 💾 AFTER MERGE: 1781 jobs (merged disk + memory)
[2026-02-06T23:33:43.653Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T23:33:43.659Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T23:33:43.659Z] [BOT] ✅ Archiving complete: 10 archived, 1771 active
[2026-02-06T23:33:43.758Z] [BOT] 💾 Saved posted_jobs.json: 1771 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:33:43.759Z] [BOT] ✅ Database saved successfully
[2026-02-06T23:33:43.759Z] [BOT ERROR] (node:2786) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T23:33:45.779Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2786) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*