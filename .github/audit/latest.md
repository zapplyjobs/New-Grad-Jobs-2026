# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T23:37:37.981Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T23:37:33.299Z] ========================================
[2026-02-03T23:37:33.301Z] Discord Bot Execution Log
[2026-02-03T23:37:33.301Z] Environment: GitHub Actions
[2026-02-03T23:37:33.301Z] Node Version: v20.20.0
[2026-02-03T23:37:33.301Z] ========================================
[2026-02-03T23:37:33.302Z] Environment Variables Check:
[2026-02-03T23:37:33.302Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T23:37:33.302Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T23:37:33.302Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T23:37:33.302Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T23:37:33.302Z] 
Multi-Channel Configuration:
[2026-02-03T23:37:33.302Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T23:37:33.302Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.302Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.302Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T23:37:33.302Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.303Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.303Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.303Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.303Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:37:33.303Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T23:37:33.303Z] 
Data Files Check:
[2026-02-03T23:37:33.304Z] .github/data/new_jobs.json: ✅ Exists (10 items, 184056 bytes)
[2026-02-03T23:37:33.367Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11427711 bytes)
[2026-02-03T23:37:33.367Z] 
========================================
[2026-02-03T23:37:33.367Z] Starting Enhanced Discord Bot...
[2026-02-03T23:37:33.367Z] ========================================
[2026-02-03T23:37:33.968Z] [BOT] ✅ Loaded V2 database: 2259 jobs
[2026-02-03T23:37:34.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T23:37:34.566Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T23:37:34.566Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T23:37:34.585Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T23:37:34.586Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T23:37:34.587Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T23:37:34.587Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T23:37:34.588Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T23:37:34.588Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T23:37:34.606Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T23:37:34.606Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-03T23:37:34.606Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
[2026-02-03T23:37:34.606Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-03T23:37:34.606Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-03T23:37:34.607Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-03T23:37:34.608Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-03T23:37:34.634Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T23:37:34.667Z] [BOT] ✅ Saved pending queue: 272 total (270 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T23:37:34.667Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T23:37:34.668Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-03T23:37:34.668Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T23:37:34.668Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T23:37:34.668Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T23:37:34.668Z] [BOT] [STATS] Channel stats saved
[2026-02-03T23:37:34.669Z] [BOT] 💾 Saving posted jobs database...
[2026-02-03T23:37:34.669Z] [BOT] 💾 BEFORE MERGE: 2259 jobs in memory (cached)
[2026-02-03T23:37:34.711Z] [BOT] ✅ Loaded V2 database: 2259 jobs
💾 DISK STATE: 2259 jobs on disk
[2026-02-03T23:37:34.712Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2259
[2026-02-03T23:37:34.717Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T23:37:34.717Z] [BOT] 💾 AFTER MERGE: 2259 jobs (merged disk + memory)
[2026-02-03T23:37:34.718Z] [BOT] ✅ No jobs to archive (all 2259 jobs within 7-day window)
[2026-02-03T23:37:34.867Z] [BOT] 💾 Saved posted_jobs.json: 2259 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T23:37:34.868Z] [BOT] ✅ Database saved successfully
[2026-02-03T23:37:34.868Z] [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T23:37:36.891Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*