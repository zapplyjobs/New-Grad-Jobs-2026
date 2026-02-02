# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T23:16:19.021Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T23:16:13.769Z] ========================================
[2026-02-02T23:16:13.771Z] Discord Bot Execution Log
[2026-02-02T23:16:13.771Z] Environment: GitHub Actions
[2026-02-02T23:16:13.771Z] Node Version: v20.20.0
[2026-02-02T23:16:13.771Z] ========================================
[2026-02-02T23:16:13.771Z] Environment Variables Check:
[2026-02-02T23:16:13.771Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T23:16:13.771Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T23:16:13.771Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T23:16:13.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T23:16:13.772Z] 
Multi-Channel Configuration:
[2026-02-02T23:16:13.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T23:16:13.772Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T23:16:13.772Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:16:13.772Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T23:16:13.773Z] 
Data Files Check:
[2026-02-02T23:16:13.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154095 bytes)
[2026-02-02T23:16:13.834Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11243408 bytes)
[2026-02-02T23:16:13.834Z] 
========================================
[2026-02-02T23:16:13.834Z] Starting Enhanced Discord Bot...
[2026-02-02T23:16:13.834Z] ========================================
[2026-02-02T23:16:14.404Z] [BOT] ✅ Loaded V2 database: 2231 jobs
[2026-02-02T23:16:15.368Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T23:16:15.369Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T23:16:15.369Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T23:16:15.392Z] [BOT] ✅ Loaded pending queue: 361 total (311 pending, 50 enriched, 0 posted)
[2026-02-02T23:16:15.392Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T23:16:15.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T23:16:15.394Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T23:16:15.413Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Sentinel Systems Engineer/Principal Systems Engineer - STPA-Sec at Northrop Grumman
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
[2026-02-02T23:16:15.414Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-02-02T23:16:15.415Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-02T23:16:15.415Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-02T23:16:15.415Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff - Data Scientist at Walmart
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
[2026-02-02T23:16:15.415Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
[2026-02-02T23:16:15.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
[2026-02-02T23:16:15.416Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-02-02T23:16:15.416Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
[2026-02-02T23:16:15.416Z] [BOT] 🚫 Skipping blacklisted job: Manager, Commercial Promotion Partnerships at spotify
🚫 Skipping blacklisted job: Associate Director, Monetization Strategy at spotify
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-02T23:16:15.444Z] [BOT] ✅ Loaded pending queue: 361 total (311 pending, 50 enriched, 0 posted)
[2026-02-02T23:16:15.482Z] [BOT] ✅ Saved pending queue: 312 total (311 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T23:16:15.482Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T23:16:15.483Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T23:16:15.484Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T23:16:15.484Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T23:16:15.484Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-02T23:16:15.484Z] [BOT] Channels used: 0
[2026-02-02T23:16:15.484Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T23:16:15.484Z] [BOT] 💾 BEFORE MERGE: 2231 jobs in memory (cached)
[2026-02-02T23:16:15.526Z] [BOT] ✅ Loaded V2 database: 2231 jobs
💾 DISK STATE: 2231 jobs on disk
[2026-02-02T23:16:15.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2231
[2026-02-02T23:16:15.531Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T23:16:15.532Z] [BOT] 💾 AFTER MERGE: 2231 jobs (merged disk + memory)
[2026-02-02T23:16:15.533Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-02-02T23:16:15.664Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T23:16:15.664Z] [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T23:16:17.685Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*