# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T20:07:47.391Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T20:07:43.027Z] ========================================
[2026-02-04T20:07:43.029Z] Discord Bot Execution Log
[2026-02-04T20:07:43.029Z] Environment: GitHub Actions
[2026-02-04T20:07:43.029Z] Node Version: v20.20.0
[2026-02-04T20:07:43.029Z] ========================================
[2026-02-04T20:07:43.029Z] Environment Variables Check:
[2026-02-04T20:07:43.029Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T20:07:43.030Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T20:07:43.030Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T20:07:43.030Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T20:07:43.030Z] 
Multi-Channel Configuration:
[2026-02-04T20:07:43.030Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T20:07:43.030Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.030Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.030Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T20:07:43.030Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.030Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.030Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.030Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.031Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:07:43.031Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T20:07:43.031Z] 
Data Files Check:
[2026-02-04T20:07:43.032Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139055 bytes)
[2026-02-04T20:07:43.091Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T20:07:43.091Z] 
========================================
[2026-02-04T20:07:43.091Z] Starting Enhanced Discord Bot...
[2026-02-04T20:07:43.091Z] ========================================
[2026-02-04T20:07:43.683Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T20:07:44.202Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T20:07:44.202Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T20:07:44.203Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T20:07:44.224Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-04T20:07:44.225Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T20:07:44.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T20:07:44.226Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T20:07:44.226Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T20:07:44.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-04T20:07:44.227Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T20:07:44.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T20:07:44.227Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T20:07:44.245Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T20:07:44.245Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-04T20:07:44.245Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-04T20:07:44.245Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-04T20:07:44.245Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T20:07:44.246Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-04T20:07:44.247Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-04T20:07:44.276Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-04T20:07:44.310Z] [BOT] ✅ Saved pending queue: 270 total (267 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-04T20:07:44.311Z] [BOT] 📋 After blacklist filter: 0 jobs (47 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T20:07:44.311Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T20:07:44.311Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T20:07:44.312Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T20:07:44.312Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T20:07:44.312Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T20:07:44.312Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T20:07:44.313Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T20:07:44.357Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T20:07:44.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T20:07:44.362Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T20:07:44.362Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T20:07:44.364Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T20:07:44.503Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T20:07:44.503Z] [BOT ERROR] (node:3249) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T20:07:46.525Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3249) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*