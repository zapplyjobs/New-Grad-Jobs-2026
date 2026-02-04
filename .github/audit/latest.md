# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T11:55:03.833Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T11:54:59.382Z] ========================================
[2026-02-04T11:54:59.384Z] Discord Bot Execution Log
[2026-02-04T11:54:59.384Z] Environment: GitHub Actions
[2026-02-04T11:54:59.384Z] Node Version: v20.20.0
[2026-02-04T11:54:59.385Z] ========================================
[2026-02-04T11:54:59.385Z] Environment Variables Check:
[2026-02-04T11:54:59.385Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T11:54:59.385Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T11:54:59.385Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T11:54:59.385Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T11:54:59.385Z] 
Multi-Channel Configuration:
[2026-02-04T11:54:59.385Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T11:54:59.385Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.385Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.385Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T11:54:59.386Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.386Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.386Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.386Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.386Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:54:59.386Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T11:54:59.386Z] 
Data Files Check:
[2026-02-04T11:54:59.388Z] .github/data/new_jobs.json: ✅ Exists (10 items, 212500 bytes)
[2026-02-04T11:54:59.445Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T11:54:59.445Z] 
========================================
[2026-02-04T11:54:59.445Z] Starting Enhanced Discord Bot...
[2026-02-04T11:54:59.445Z] ========================================
[2026-02-04T11:55:00.016Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T11:55:00.635Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T11:55:00.635Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T11:55:00.636Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T11:55:00.656Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:55:00.656Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:55:00.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T11:55:00.657Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T11:55:00.658Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:55:00.659Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T11:55:00.676Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T11:55:00.676Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
[2026-02-04T11:55:00.677Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-04T11:55:00.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-04T11:55:00.705Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:55:00.738Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T11:55:00.738Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T11:55:00.738Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T11:55:00.739Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T11:55:00.739Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T11:55:00.739Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T11:55:00.739Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T11:55:00.739Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-04T11:55:00.740Z] [BOT] [STATS] Channel stats saved
[2026-02-04T11:55:00.740Z] [BOT] 💾 Saving posted jobs database...
[2026-02-04T11:55:00.740Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T11:55:00.784Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T11:55:00.785Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T11:55:00.790Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T11:55:00.790Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T11:55:00.791Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T11:55:00.921Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T11:55:00.921Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T11:55:02.944Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*