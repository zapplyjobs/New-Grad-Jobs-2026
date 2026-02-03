# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T18:28:01.729Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T18:27:56.503Z] ========================================
[2026-02-03T18:27:56.505Z] Discord Bot Execution Log
[2026-02-03T18:27:56.505Z] Environment: GitHub Actions
[2026-02-03T18:27:56.505Z] Node Version: v20.20.0
[2026-02-03T18:27:56.505Z] ========================================
[2026-02-03T18:27:56.505Z] Environment Variables Check:
[2026-02-03T18:27:56.505Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T18:27:56.505Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T18:27:56.505Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T18:27:56.505Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T18:27:56.505Z] 
Multi-Channel Configuration:
[2026-02-03T18:27:56.505Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T18:27:56.505Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T18:27:56.506Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:27:56.506Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T18:27:56.506Z] 
Data Files Check:
[2026-02-03T18:27:56.507Z] .github/data/new_jobs.json: ✅ Exists (10 items, 208915 bytes)
[2026-02-03T18:27:56.565Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11344780 bytes)
[2026-02-03T18:27:56.565Z] 
========================================
[2026-02-03T18:27:56.565Z] Starting Enhanced Discord Bot...
[2026-02-03T18:27:56.565Z] ========================================
[2026-02-03T18:27:57.132Z] [BOT] ✅ Loaded V2 database: 2247 jobs
[2026-02-03T18:27:57.951Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T18:27:57.952Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T18:27:57.952Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T18:27:57.974Z] [BOT] ✅ Loaded pending queue: 328 total (278 pending, 50 enriched, 0 posted)
[2026-02-03T18:27:57.974Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T18:27:57.975Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T18:27:57.975Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T18:27:57.975Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T18:27:57.994Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T18:27:57.994Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-03T18:27:57.995Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-03T18:27:57.996Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-03T18:27:58.023Z] [BOT] ✅ Loaded pending queue: 328 total (278 pending, 50 enriched, 0 posted)
[2026-02-03T18:27:58.057Z] [BOT] ✅ Saved pending queue: 279 total (278 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T18:27:58.057Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T18:27:58.058Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-03T18:27:58.058Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
   Successful: 0
[2026-02-03T18:27:58.058Z] [BOT] Failed: 0
   Skipped: 50
[2026-02-03T18:27:58.058Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T18:27:58.059Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T18:27:58.059Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-03T18:27:58.102Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-03T18:27:58.102Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-03T18:27:58.107Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T18:27:58.107Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-03T18:27:58.109Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-03T18:27:58.239Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T18:27:58.240Z] [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T18:28:00.260Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*