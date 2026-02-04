# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T00:41:01.746Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T00:40:57.388Z] ========================================
[2026-02-04T00:40:57.390Z] Discord Bot Execution Log
[2026-02-04T00:40:57.390Z] Environment: GitHub Actions
[2026-02-04T00:40:57.390Z] Node Version: v20.20.0
[2026-02-04T00:40:57.390Z] ========================================
[2026-02-04T00:40:57.390Z] Environment Variables Check:
[2026-02-04T00:40:57.390Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T00:40:57.390Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T00:40:57.390Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T00:40:57.390Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T00:40:57.390Z] 
Multi-Channel Configuration:
[2026-02-04T00:40:57.391Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T00:40:57.391Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T00:40:57.391Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:40:57.391Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T00:40:57.391Z] 
Data Files Check:
[2026-02-04T00:40:57.392Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153568 bytes)
[2026-02-04T00:40:57.452Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11434202 bytes)
[2026-02-04T00:40:57.452Z] 
========================================
[2026-02-04T00:40:57.452Z] Starting Enhanced Discord Bot...
[2026-02-04T00:40:57.452Z] ========================================
[2026-02-04T00:40:58.062Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T00:40:58.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T00:40:58.544Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T00:40:58.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T00:40:58.574Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T00:40:58.575Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:40:58.576Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T00:40:58.576Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:40:58.577Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T00:40:58.595Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T00:40:58.596Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T00:40:58.596Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-04T00:40:58.596Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T00:40:58.596Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-04T00:40:58.597Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-04T00:40:58.627Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T00:40:58.659Z] [BOT] ✅ Saved pending queue: 268 total (266 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T00:40:58.660Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T00:40:58.660Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T00:40:58.660Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T00:40:58.661Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
[2026-02-04T00:40:58.661Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T00:40:58.661Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-04T00:40:58.661Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T00:40:58.661Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-04T00:40:58.705Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-04T00:40:58.705Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-04T00:40:58.710Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:40:58.710Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-04T00:40:58.712Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-04T00:40:58.852Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T00:40:58.853Z] [BOT ERROR] (node:2703) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T00:41:00.873Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2703) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*