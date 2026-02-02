# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T13:36:28.711Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T13:36:23.770Z] ========================================
[2026-02-02T13:36:23.772Z] Discord Bot Execution Log
[2026-02-02T13:36:23.772Z] Environment: GitHub Actions
[2026-02-02T13:36:23.772Z] Node Version: v20.20.0
[2026-02-02T13:36:23.772Z] ========================================
[2026-02-02T13:36:23.772Z] Environment Variables Check:
[2026-02-02T13:36:23.772Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T13:36:23.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T13:36:23.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T13:36:23.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T13:36:23.773Z] 
Multi-Channel Configuration:
[2026-02-02T13:36:23.773Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T13:36:23.773Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T13:36:23.773Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T13:36:23.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T13:36:23.773Z] 
Data Files Check:
[2026-02-02T13:36:23.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124284 bytes)
[2026-02-02T13:36:23.832Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11214263 bytes)
[2026-02-02T13:36:23.832Z] 
========================================
[2026-02-02T13:36:23.832Z] Starting Enhanced Discord Bot...
[2026-02-02T13:36:23.832Z] ========================================
[2026-02-02T13:36:24.407Z] [BOT] ✅ Loaded V2 database: 2225 jobs
[2026-02-02T13:36:24.954Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-02T13:36:24.954Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T13:36:24.955Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T13:36:24.977Z] [BOT] ✅ Loaded pending queue: 338 total (288 pending, 50 enriched, 0 posted)
[2026-02-02T13:36:24.977Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T13:36:24.978Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T13:36:24.978Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T13:36:24.997Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T13:36:24.997Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
[2026-02-02T13:36:24.998Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-02T13:36:24.999Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-02T13:36:24.999Z] [BOT] 🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-02T13:36:24.999Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
[2026-02-02T13:36:24.999Z] [BOT] 🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
[2026-02-02T13:36:24.999Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
[2026-02-02T13:36:25.000Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
[2026-02-02T13:36:25.000Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-02-02T13:36:25.000Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
🚫 Skipping blacklisted job: Manager, Commercial Promotion Partnerships at spotify
🚫 Skipping blacklisted job: Associate Director, Monetization Strategy at spotify
[2026-02-02T13:36:25.000Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-02T13:36:25.037Z] [BOT] ✅ Loaded pending queue: 338 total (288 pending, 50 enriched, 0 posted)
[2026-02-02T13:36:25.071Z] [BOT] ✅ Saved pending queue: 289 total (288 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T13:36:25.071Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T13:36:25.072Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T13:36:25.072Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T13:36:25.072Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T13:36:25.072Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T13:36:25.073Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-02T13:36:25.073Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-02T13:36:25.073Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T13:36:25.073Z] [BOT] 💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T13:36:25.119Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T13:36:25.120Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T13:36:25.125Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T13:36:25.125Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T13:36:25.126Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T13:36:25.277Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T13:36:25.277Z] [BOT] ✅ Database saved successfully
[2026-02-02T13:36:25.277Z] [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T13:36:27.302Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*