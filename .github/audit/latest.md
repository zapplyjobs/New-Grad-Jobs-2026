# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T09:41:51.405Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T09:41:46.440Z] ========================================
[2026-02-04T09:41:46.442Z] Discord Bot Execution Log
[2026-02-04T09:41:46.442Z] Environment: GitHub Actions
[2026-02-04T09:41:46.442Z] Node Version: v20.20.0
[2026-02-04T09:41:46.442Z] ========================================
[2026-02-04T09:41:46.442Z] Environment Variables Check:
[2026-02-04T09:41:46.442Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T09:41:46.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T09:41:46.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T09:41:46.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T09:41:46.443Z] 
Multi-Channel Configuration:
[2026-02-04T09:41:46.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T09:41:46.443Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.443Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T09:41:46.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.443Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.443Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.444Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.444Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:41:46.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T09:41:46.444Z] 
Data Files Check:
[2026-02-04T09:41:46.445Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142150 bytes)
[2026-02-04T09:41:46.504Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T09:41:46.504Z] 
========================================
[2026-02-04T09:41:46.504Z] Starting Enhanced Discord Bot...
[2026-02-04T09:41:46.504Z] ========================================
[2026-02-04T09:41:47.073Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T09:41:47.809Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T09:41:47.809Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T09:41:47.809Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T09:41:47.830Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T09:41:47.830Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T09:41:47.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T09:41:47.831Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T09:41:47.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T09:41:47.832Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T09:41:47.851Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T09:41:47.851Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-04T09:41:47.851Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-04T09:41:47.851Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-04T09:41:47.852Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-04T09:41:47.853Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-04T09:41:47.880Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T09:41:47.913Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T09:41:47.913Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T09:41:47.913Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T09:41:47.913Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T09:41:47.914Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
[2026-02-04T09:41:47.914Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T09:41:47.914Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T09:41:47.914Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T09:41:47.915Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T09:41:47.958Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T09:41:47.959Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T09:41:47.964Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T09:41:47.964Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T09:41:47.966Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T09:41:48.097Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T09:41:48.097Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T09:41:50.119Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*