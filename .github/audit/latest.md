# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T14:55:34.655Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T14:55:30.685Z] ========================================
[2026-02-06T14:55:30.687Z] Discord Bot Execution Log
[2026-02-06T14:55:30.687Z] Environment: GitHub Actions
[2026-02-06T14:55:30.687Z] Node Version: v20.20.0
[2026-02-06T14:55:30.687Z] ========================================
[2026-02-06T14:55:30.687Z] Environment Variables Check:
[2026-02-06T14:55:30.687Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T14:55:30.687Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T14:55:30.687Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T14:55:30.687Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T14:55:30.687Z] 
Multi-Channel Configuration:
[2026-02-06T14:55:30.688Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T14:55:30.688Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T14:55:30.688Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:55:30.688Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T14:55:30.688Z] 
Data Files Check:
[2026-02-06T14:55:30.690Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162986 bytes)
[2026-02-06T14:55:30.743Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9670882 bytes)
[2026-02-06T14:55:30.743Z] 
========================================
[2026-02-06T14:55:30.743Z] Starting Enhanced Discord Bot...
[2026-02-06T14:55:30.743Z] ========================================
[2026-02-06T14:55:31.330Z] [BOT] ✅ Loaded V2 database: 2001 jobs
[2026-02-06T14:55:31.724Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T14:55:31.724Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T14:55:31.724Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T14:55:31.744Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T14:55:31.745Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:55:31.746Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T14:55:31.746Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:55:31.747Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T14:55:31.747Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T14:55:31.765Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T14:55:31.766Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T14:55:31.766Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T14:55:31.766Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-06T14:55:31.766Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T14:55:31.767Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-06T14:55:31.793Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T14:55:31.814Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-06T14:55:31.815Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-02-06T14:55:31.815Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T14:55:31.816Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-06T14:55:31.817Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-06T14:55:31.864Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
[2026-02-06T14:55:31.864Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-06T14:55:31.869Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:55:31.869Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-06T14:55:31.870Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-06T14:55:31.971Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:55:31.971Z] [BOT] ✅ Database saved successfully
[2026-02-06T14:55:31.971Z] [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T14:55:33.994Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*