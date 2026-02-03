# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T15:25:49.652Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T15:25:44.560Z] ========================================
[2026-02-03T15:25:44.562Z] Discord Bot Execution Log
[2026-02-03T15:25:44.562Z] Environment: GitHub Actions
[2026-02-03T15:25:44.562Z] Node Version: v20.20.0
[2026-02-03T15:25:44.563Z] ========================================
[2026-02-03T15:25:44.563Z] Environment Variables Check:
[2026-02-03T15:25:44.563Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T15:25:44.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T15:25:44.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T15:25:44.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T15:25:44.563Z] 
Multi-Channel Configuration:
[2026-02-03T15:25:44.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T15:25:44.563Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.563Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.563Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T15:25:44.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.564Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.564Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.564Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.564Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T15:25:44.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T15:25:44.564Z] 
Data Files Check:
[2026-02-03T15:25:44.565Z] .github/data/new_jobs.json: ✅ Exists (10 items, 185216 bytes)
[2026-02-03T15:25:44.623Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T15:25:44.623Z] 
========================================
[2026-02-03T15:25:44.623Z] Starting Enhanced Discord Bot...
[2026-02-03T15:25:44.623Z] ========================================
[2026-02-03T15:25:45.199Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T15:25:46.103Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T15:25:46.103Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T15:25:46.103Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T15:25:46.124Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T15:25:46.125Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T15:25:46.126Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T15:25:46.126Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T15:25:46.126Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T15:25:46.145Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T15:25:46.145Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
[2026-02-03T15:25:46.146Z] [BOT] 🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-03T15:25:46.147Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-03T15:25:46.148Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-03T15:25:46.148Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T15:25:46.148Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-03T15:25:46.148Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-03T15:25:46.175Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T15:25:46.209Z] [BOT] ✅ Saved pending queue: 274 total (273 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T15:25:46.209Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T15:25:46.210Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T15:25:46.210Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T15:25:46.210Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T15:25:46.211Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T15:25:46.211Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T15:25:46.211Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T15:25:46.211Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T15:25:46.253Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T15:25:46.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T15:25:46.259Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T15:25:46.259Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T15:25:46.261Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T15:25:46.399Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T15:25:46.400Z] [BOT] ✅ Database saved successfully
[2026-02-03T15:25:46.400Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T15:25:48.424Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*