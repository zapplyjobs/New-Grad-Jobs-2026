# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T04:49:27.545Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T04:49:23.207Z] ========================================
[2026-02-05T04:49:23.209Z] Discord Bot Execution Log
[2026-02-05T04:49:23.209Z] Environment: GitHub Actions
[2026-02-05T04:49:23.209Z] Node Version: v20.20.0
[2026-02-05T04:49:23.209Z] ========================================
[2026-02-05T04:49:23.209Z] Environment Variables Check:
[2026-02-05T04:49:23.209Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T04:49:23.209Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T04:49:23.209Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T04:49:23.209Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T04:49:23.209Z] 
Multi-Channel Configuration:
[2026-02-05T04:49:23.209Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T04:49:23.210Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T04:49:23.210Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:49:23.210Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T04:49:23.210Z] 
Data Files Check:
[2026-02-05T04:49:23.212Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175039 bytes)
[2026-02-05T04:49:23.291Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11514248 bytes)
[2026-02-05T04:49:23.291Z] 
========================================
[2026-02-05T04:49:23.291Z] Starting Enhanced Discord Bot...
[2026-02-05T04:49:23.291Z] ========================================
[2026-02-05T04:49:23.826Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-05T04:49:24.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T04:49:24.308Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T04:49:24.308Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T04:49:24.334Z] [BOT] ✅ Loaded pending queue: 274 total (224 pending, 50 enriched, 0 posted)
[2026-02-05T04:49:24.334Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T04:49:24.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T04:49:24.336Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T04:49:24.336Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T04:49:24.337Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T04:49:24.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T04:49:24.337Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T04:49:24.338Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T04:49:24.351Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T04:49:24.351Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-05T04:49:24.352Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-05T04:49:24.352Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-05T04:49:24.384Z] [BOT] ✅ Loaded pending queue: 274 total (224 pending, 50 enriched, 0 posted)
[2026-02-05T04:49:24.408Z] [BOT] ✅ Saved pending queue: 228 total (224 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T04:49:24.408Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T04:49:24.408Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T04:49:24.409Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 50
[2026-02-05T04:49:24.409Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-05T04:49:24.409Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T04:49:24.409Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T04:49:24.474Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T04:49:24.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T04:49:24.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T04:49:24.481Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T04:49:24.483Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T04:49:24.634Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T04:49:24.635Z] [BOT] ✅ Database saved successfully
[2026-02-05T04:49:24.635Z] [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T04:49:26.651Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*