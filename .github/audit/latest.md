# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T17:58:10.518Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T17:58:05.707Z] ========================================
[2026-02-03T17:58:05.709Z] Discord Bot Execution Log
[2026-02-03T17:58:05.709Z] Environment: GitHub Actions
[2026-02-03T17:58:05.709Z] Node Version: v20.20.0
[2026-02-03T17:58:05.709Z] ========================================
[2026-02-03T17:58:05.709Z] Environment Variables Check:
[2026-02-03T17:58:05.709Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T17:58:05.710Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T17:58:05.710Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T17:58:05.710Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T17:58:05.710Z] 
Multi-Channel Configuration:
[2026-02-03T17:58:05.710Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T17:58:05.710Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T17:58:05.710Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:58:05.710Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T17:58:05.711Z] 
Data Files Check:
[2026-02-03T17:58:05.712Z] .github/data/new_jobs.json: ✅ Exists (10 items, 206876 bytes)
[2026-02-03T17:58:05.771Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11344780 bytes)
[2026-02-03T17:58:05.771Z] 
========================================
[2026-02-03T17:58:05.771Z] Starting Enhanced Discord Bot...
[2026-02-03T17:58:05.771Z] ========================================
[2026-02-03T17:58:06.338Z] [BOT] ✅ Loaded V2 database: 2247 jobs
[2026-02-03T17:58:07.047Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T17:58:07.048Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T17:58:07.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T17:58:07.069Z] [BOT] ✅ Loaded pending queue: 327 total (277 pending, 50 enriched, 0 posted)
[2026-02-03T17:58:07.070Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T17:58:07.071Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T17:58:07.071Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T17:58:07.090Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T17:58:07.090Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-02-03T17:58:07.090Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-03T17:58:07.090Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
[2026-02-03T17:58:07.090Z] [BOT] 🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-03T17:58:07.091Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T17:58:07.092Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-03T17:58:07.120Z] [BOT] ✅ Loaded pending queue: 327 total (277 pending, 50 enriched, 0 posted)
[2026-02-03T17:58:07.153Z] [BOT] ✅ Saved pending queue: 278 total (277 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T17:58:07.153Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T17:58:07.154Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T17:58:07.154Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T17:58:07.154Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T17:58:07.154Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T17:58:07.155Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T17:58:07.155Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T17:58:07.155Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-03T17:58:07.196Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-03T17:58:07.197Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-03T17:58:07.202Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T17:58:07.202Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-03T17:58:07.203Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-03T17:58:07.336Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T17:58:07.339Z] [BOT] ✅ Database saved successfully
[2026-02-03T17:58:07.339Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T17:58:09.359Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*