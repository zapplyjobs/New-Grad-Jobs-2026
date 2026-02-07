# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T09:14:43.921Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T09:14:39.781Z] ========================================
[2026-02-07T09:14:39.783Z] Discord Bot Execution Log
[2026-02-07T09:14:39.783Z] Environment: GitHub Actions
[2026-02-07T09:14:39.783Z] Node Version: v20.20.0
[2026-02-07T09:14:39.783Z] ========================================
[2026-02-07T09:14:39.783Z] Environment Variables Check:
[2026-02-07T09:14:39.783Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T09:14:39.784Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T09:14:39.784Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T09:14:39.784Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T09:14:39.784Z] 
Multi-Channel Configuration:
[2026-02-07T09:14:39.784Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T09:14:39.784Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.784Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.784Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T09:14:39.784Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.784Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.784Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.784Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.785Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:14:39.785Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T09:14:39.785Z] 
Data Files Check:
[2026-02-07T09:14:39.786Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149360 bytes)
[2026-02-07T09:14:39.820Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7128342 bytes)
[2026-02-07T09:14:39.820Z] 
========================================
[2026-02-07T09:14:39.820Z] Starting Enhanced Discord Bot...
[2026-02-07T09:14:39.820Z] ========================================
[2026-02-07T09:14:40.369Z] [BOT] ✅ Loaded V2 database: 1570 jobs
[2026-02-07T09:14:40.905Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T09:14:40.905Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T09:14:40.906Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T09:14:40.922Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T09:14:40.923Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:14:40.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T09:14:40.924Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:14:40.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T09:14:40.924Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T09:14:40.937Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T09:14:40.937Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-07T09:14:40.937Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-07T09:14:40.938Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-07T09:14:40.939Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-07T09:14:40.939Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-07T09:14:40.951Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T09:14:40.974Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T09:14:40.974Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T09:14:40.975Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T09:14:40.975Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T09:14:40.975Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T09:14:40.975Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T09:14:40.976Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T09:14:40.976Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T09:14:40.976Z] [BOT] 💾 BEFORE MERGE: 1570 jobs in memory (cached)
[2026-02-07T09:14:41.014Z] [BOT] ✅ Loaded V2 database: 1570 jobs
💾 DISK STATE: 1570 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1570
[2026-02-07T09:14:41.018Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:14:41.018Z] [BOT] 💾 AFTER MERGE: 1570 jobs (merged disk + memory)
[2026-02-07T09:14:41.019Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T09:14:41.025Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T09:14:41.025Z] [BOT] ✅ Archiving complete: 10 archived, 1560 active
[2026-02-07T09:14:41.109Z] [BOT] 💾 Saved posted_jobs.json: 1560 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T09:14:41.109Z] [BOT] ✅ Database saved successfully
[2026-02-07T09:14:41.109Z] [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T09:14:43.128Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*