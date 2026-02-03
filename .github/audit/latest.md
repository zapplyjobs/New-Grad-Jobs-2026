# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T11:56:53.683Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T11:56:48.840Z] ========================================
[2026-02-03T11:56:48.842Z] Discord Bot Execution Log
[2026-02-03T11:56:48.842Z] Environment: GitHub Actions
[2026-02-03T11:56:48.842Z] Node Version: v20.20.0
[2026-02-03T11:56:48.842Z] ========================================
[2026-02-03T11:56:48.842Z] Environment Variables Check:
[2026-02-03T11:56:48.842Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T11:56:48.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T11:56:48.842Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T11:56:48.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T11:56:48.843Z] 
Multi-Channel Configuration:
[2026-02-03T11:56:48.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T11:56:48.843Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T11:56:48.843Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:56:48.843Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T11:56:48.843Z] 
Data Files Check:
[2026-02-03T11:56:48.845Z] .github/data/new_jobs.json: ✅ Exists (10 items, 202423 bytes)
[2026-02-03T11:56:48.905Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T11:56:48.906Z] 
========================================
[2026-02-03T11:56:48.906Z] Starting Enhanced Discord Bot...
[2026-02-03T11:56:48.906Z] ========================================
[2026-02-03T11:56:49.482Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T11:56:50.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T11:56:50.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T11:56:50.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T11:56:50.430Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T11:56:50.430Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T11:56:50.431Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T11:56:50.431Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T11:56:50.450Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T11:56:50.450Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-03T11:56:50.450Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-03T11:56:50.451Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-03T11:56:50.452Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
[2026-02-03T11:56:50.481Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T11:56:50.514Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T11:56:50.515Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T11:56:50.515Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-03T11:56:50.515Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T11:56:50.516Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T11:56:50.516Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T11:56:50.516Z] [BOT] Channels used: 0
[2026-02-03T11:56:50.516Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T11:56:50.516Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T11:56:50.559Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T11:56:50.560Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T11:56:50.565Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T11:56:50.565Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T11:56:50.566Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T11:56:50.706Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T11:56:50.706Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T11:56:52.726Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*