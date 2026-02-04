# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T05:08:15.148Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T05:08:10.921Z] ========================================
[2026-02-04T05:08:10.923Z] Discord Bot Execution Log
[2026-02-04T05:08:10.923Z] Environment: GitHub Actions
[2026-02-04T05:08:10.923Z] Node Version: v20.20.0
[2026-02-04T05:08:10.923Z] ========================================
[2026-02-04T05:08:10.923Z] Environment Variables Check:
[2026-02-04T05:08:10.923Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T05:08:10.923Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T05:08:10.923Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T05:08:10.924Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T05:08:10.924Z] 
Multi-Channel Configuration:
[2026-02-04T05:08:10.924Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T05:08:10.924Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T05:08:10.924Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:08:10.924Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T05:08:10.924Z] 
Data Files Check:
[2026-02-04T05:08:10.926Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174564 bytes)
[2026-02-04T05:08:10.985Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T05:08:10.985Z] 
========================================
[2026-02-04T05:08:10.985Z] Starting Enhanced Discord Bot...
[2026-02-04T05:08:10.985Z] ========================================
[2026-02-04T05:08:11.557Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T05:08:12.112Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T05:08:12.113Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T05:08:12.113Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T05:08:12.134Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T05:08:12.134Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:08:12.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T05:08:12.135Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T05:08:12.135Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:08:12.136Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T05:08:12.136Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T05:08:12.154Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T05:08:12.154Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-04T05:08:12.154Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T05:08:12.154Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-04T05:08:12.155Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T05:08:12.156Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T05:08:12.183Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T05:08:12.217Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T05:08:12.217Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T05:08:12.217Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T05:08:12.217Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T05:08:12.218Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
[2026-02-04T05:08:12.218Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T05:08:12.218Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T05:08:12.219Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T05:08:12.219Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T05:08:12.265Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T05:08:12.266Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T05:08:12.271Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T05:08:12.271Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T05:08:12.273Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T05:08:12.424Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T05:08:12.424Z] [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T05:08:14.446Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*