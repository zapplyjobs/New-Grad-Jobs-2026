# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T01:02:23.580Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T01:02:19.341Z] ========================================
[2026-02-07T01:02:19.342Z] Discord Bot Execution Log
[2026-02-07T01:02:19.342Z] Environment: GitHub Actions
[2026-02-07T01:02:19.342Z] Node Version: v20.20.0
[2026-02-07T01:02:19.342Z] ========================================
[2026-02-07T01:02:19.343Z] Environment Variables Check:
[2026-02-07T01:02:19.343Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T01:02:19.343Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T01:02:19.343Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T01:02:19.343Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T01:02:19.343Z] 
Multi-Channel Configuration:
[2026-02-07T01:02:19.343Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T01:02:19.343Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T01:02:19.343Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.343Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:02:19.344Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T01:02:19.344Z] 
Data Files Check:
[2026-02-07T01:02:19.345Z] .github/data/new_jobs.json: ✅ Exists (10 items, 185588 bytes)
[2026-02-07T01:02:19.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7996708 bytes)
[2026-02-07T01:02:19.389Z] 
========================================
[2026-02-07T01:02:19.389Z] Starting Enhanced Discord Bot...
[2026-02-07T01:02:19.390Z] ========================================
[2026-02-07T01:02:19.983Z] [BOT] ✅ Loaded V2 database: 1747 jobs
[2026-02-07T01:02:20.650Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T01:02:20.651Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T01:02:20.651Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T01:02:20.671Z] [BOT] ✅ Loaded pending queue: 213 total (163 pending, 50 enriched, 0 posted)
[2026-02-07T01:02:20.672Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T01:02:20.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T01:02:20.673Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T01:02:20.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T01:02:20.673Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T01:02:20.684Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T01:02:20.684Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-07T01:02:20.684Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-07T01:02:20.684Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-07T01:02:20.685Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-07T01:02:20.700Z] [BOT] ✅ Loaded pending queue: 213 total (163 pending, 50 enriched, 0 posted)
[2026-02-07T01:02:20.732Z] [BOT] ✅ Saved pending queue: 165 total (163 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T01:02:20.732Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T01:02:20.732Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T01:02:20.732Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T01:02:20.733Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T01:02:20.733Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T01:02:20.733Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T01:02:20.733Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T01:02:20.733Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T01:02:20.733Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-07T01:02:20.766Z] [BOT] ✅ Loaded V2 database: 1747 jobs
💾 DISK STATE: 1747 jobs on disk
[2026-02-07T01:02:20.766Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-07T01:02:20.771Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T01:02:20.771Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-07T01:02:20.773Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T01:02:20.778Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T01:02:20.779Z] [BOT] ✅ Archiving complete: 10 archived, 1737 active
[2026-02-07T01:02:20.861Z] [BOT] 💾 Saved posted_jobs.json: 1737 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T01:02:20.861Z] [BOT] ✅ Database saved successfully
[2026-02-07T01:02:20.862Z] [BOT ERROR] (node:2827) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T01:02:22.881Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2827) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*