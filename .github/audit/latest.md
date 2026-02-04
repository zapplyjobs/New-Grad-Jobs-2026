# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T14:27:03.384Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T14:26:58.404Z] ========================================
[2026-02-04T14:26:58.405Z] Discord Bot Execution Log
[2026-02-04T14:26:58.405Z] Environment: GitHub Actions
[2026-02-04T14:26:58.405Z] Node Version: v20.20.0
[2026-02-04T14:26:58.405Z] ========================================
[2026-02-04T14:26:58.406Z] Environment Variables Check:
[2026-02-04T14:26:58.406Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T14:26:58.406Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T14:26:58.406Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T14:26:58.406Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T14:26:58.406Z] 
Multi-Channel Configuration:
[2026-02-04T14:26:58.406Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T14:26:58.406Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.406Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.406Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T14:26:58.406Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.406Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.406Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.406Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.407Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T14:26:58.407Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T14:26:58.407Z] 
Data Files Check:
[2026-02-04T14:26:58.408Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190653 bytes)
[2026-02-04T14:26:58.492Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T14:26:58.492Z] 
========================================
[2026-02-04T14:26:58.492Z] Starting Enhanced Discord Bot...
[2026-02-04T14:26:58.492Z] ========================================
[2026-02-04T14:26:59.047Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T14:26:59.620Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T14:26:59.621Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T14:26:59.652Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T14:26:59.653Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T14:26:59.654Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T14:26:59.654Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T14:26:59.655Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T14:26:59.655Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T14:26:59.669Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T14:26:59.669Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
[2026-02-04T14:26:59.669Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-02-04T14:26:59.670Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-04T14:26:59.670Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T14:26:59.670Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-04T14:26:59.670Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-04T14:26:59.709Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T14:26:59.746Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T14:26:59.746Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T14:26:59.747Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T14:26:59.747Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T14:26:59.747Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T14:26:59.748Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T14:26:59.748Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T14:26:59.748Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T14:26:59.817Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T14:26:59.818Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T14:26:59.824Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T14:26:59.824Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T14:26:59.827Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T14:27:00.001Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
[2026-02-04T14:27:00.004Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T14:27:00.004Z] [BOT ERROR] (node:2567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T14:27:02.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*