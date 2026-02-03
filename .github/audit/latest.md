# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T12:18:49.277Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T12:18:44.258Z] ========================================
[2026-02-03T12:18:44.260Z] Discord Bot Execution Log
[2026-02-03T12:18:44.260Z] Environment: GitHub Actions
[2026-02-03T12:18:44.260Z] Node Version: v20.20.0
[2026-02-03T12:18:44.260Z] ========================================
[2026-02-03T12:18:44.260Z] Environment Variables Check:
[2026-02-03T12:18:44.260Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T12:18:44.260Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T12:18:44.260Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T12:18:44.260Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T12:18:44.261Z] 
Multi-Channel Configuration:
[2026-02-03T12:18:44.261Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T12:18:44.261Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T12:18:44.261Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:18:44.261Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T12:18:44.261Z] 
Data Files Check:
[2026-02-03T12:18:44.263Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178758 bytes)
[2026-02-03T12:18:44.320Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T12:18:44.320Z] 
========================================
[2026-02-03T12:18:44.320Z] Starting Enhanced Discord Bot...
[2026-02-03T12:18:44.320Z] ========================================
[2026-02-03T12:18:44.879Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T12:18:45.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T12:18:45.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T12:18:45.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T12:18:45.427Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T12:18:45.427Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:18:45.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T12:18:45.429Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T12:18:45.429Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:18:45.447Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T12:18:45.447Z] [BOT] 🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-03T12:18:45.447Z] [BOT] 🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-03T12:18:45.447Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-03T12:18:45.447Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-03T12:18:45.448Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-03T12:18:45.449Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-03T12:18:45.449Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-03T12:18:45.449Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-03T12:18:45.476Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T12:18:45.509Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T12:18:45.510Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T12:18:45.510Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T12:18:45.511Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T12:18:45.511Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T12:18:45.511Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T12:18:45.511Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-03T12:18:45.511Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T12:18:45.511Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T12:18:45.512Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T12:18:45.555Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T12:18:45.555Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T12:18:45.560Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T12:18:45.561Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T12:18:45.562Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T12:18:45.714Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T12:18:45.714Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T12:18:47.736Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*