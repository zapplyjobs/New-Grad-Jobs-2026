# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T20:55:00.310Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T20:54:56.148Z] ========================================
[2026-02-03T20:54:56.150Z] Discord Bot Execution Log
[2026-02-03T20:54:56.151Z] Environment: GitHub Actions
[2026-02-03T20:54:56.151Z] Node Version: v20.20.0
[2026-02-03T20:54:56.151Z] ========================================
[2026-02-03T20:54:56.151Z] Environment Variables Check:
[2026-02-03T20:54:56.151Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T20:54:56.151Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T20:54:56.151Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T20:54:56.151Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T20:54:56.151Z] 
Multi-Channel Configuration:
[2026-02-03T20:54:56.151Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T20:54:56.151Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T20:54:56.152Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:54:56.152Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T20:54:56.152Z] 
Data Files Check:
[2026-02-03T20:54:56.153Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164714 bytes)
[2026-02-03T20:54:56.216Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11401246 bytes)
[2026-02-03T20:54:56.216Z] 
========================================
[2026-02-03T20:54:56.216Z] Starting Enhanced Discord Bot...
[2026-02-03T20:54:56.216Z] ========================================
[2026-02-03T20:54:56.775Z] [BOT] ✅ Loaded V2 database: 2254 jobs
[2026-02-03T20:54:57.249Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T20:54:57.249Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T20:54:57.249Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T20:54:57.271Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-03T20:54:57.271Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T20:54:57.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T20:54:57.273Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T20:54:57.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T20:54:57.296Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T20:54:57.296Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-03T20:54:57.297Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
[2026-02-03T20:54:57.297Z] [BOT] 🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-03T20:54:57.297Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-03T20:54:57.298Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-03T20:54:57.298Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-03T20:54:57.329Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-03T20:54:57.364Z] [BOT] ✅ Saved pending queue: 270 total (268 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T20:54:57.364Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T20:54:57.364Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T20:54:57.365Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T20:54:57.365Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T20:54:57.365Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T20:54:57.366Z] [BOT] Channels used: 0
[2026-02-03T20:54:57.366Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T20:54:57.366Z] [BOT] 💾 BEFORE MERGE: 2254 jobs in memory (cached)
[2026-02-03T20:54:57.410Z] [BOT] ✅ Loaded V2 database: 2254 jobs
💾 DISK STATE: 2254 jobs on disk
[2026-02-03T20:54:57.410Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2254
[2026-02-03T20:54:57.415Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T20:54:57.416Z] [BOT] 💾 AFTER MERGE: 2254 jobs (merged disk + memory)
[2026-02-03T20:54:57.417Z] [BOT] ✅ No jobs to archive (all 2254 jobs within 7-day window)
[2026-02-03T20:54:57.564Z] [BOT] 💾 Saved posted_jobs.json: 2254 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T20:54:57.564Z] [BOT] ✅ Database saved successfully
[2026-02-03T20:54:57.565Z] [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T20:54:59.587Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*