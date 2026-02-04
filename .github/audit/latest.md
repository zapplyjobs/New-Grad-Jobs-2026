# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T17:56:01.652Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T17:55:57.383Z] ========================================
[2026-02-04T17:55:57.385Z] Discord Bot Execution Log
[2026-02-04T17:55:57.385Z] Environment: GitHub Actions
[2026-02-04T17:55:57.385Z] Node Version: v20.20.0
[2026-02-04T17:55:57.385Z] ========================================
[2026-02-04T17:55:57.385Z] Environment Variables Check:
[2026-02-04T17:55:57.385Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T17:55:57.385Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T17:55:57.385Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T17:55:57.385Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T17:55:57.385Z] 
Multi-Channel Configuration:
[2026-02-04T17:55:57.385Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T17:55:57.386Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T17:55:57.386Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:55:57.386Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T17:55:57.386Z] 
Data Files Check:
[2026-02-04T17:55:57.387Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137099 bytes)
[2026-02-04T17:55:57.444Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T17:55:57.445Z] 
========================================
[2026-02-04T17:55:57.445Z] Starting Enhanced Discord Bot...
[2026-02-04T17:55:57.445Z] ========================================
[2026-02-04T17:55:58.036Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T17:55:58.561Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T17:55:58.561Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T17:55:58.562Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T17:55:58.582Z] [BOT] ✅ Loaded pending queue: 313 total (263 pending, 50 enriched, 0 posted)
[2026-02-04T17:55:58.583Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T17:55:58.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T17:55:58.584Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T17:55:58.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T17:55:58.585Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T17:55:58.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T17:55:58.585Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T17:55:58.603Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T17:55:58.603Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-04T17:55:58.603Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-02-04T17:55:58.603Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T17:55:58.604Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-04T17:55:58.605Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-04T17:55:58.605Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-04T17:55:58.605Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-04T17:55:58.605Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-04T17:55:58.632Z] [BOT] ✅ Loaded pending queue: 313 total (263 pending, 50 enriched, 0 posted)
[2026-02-04T17:55:58.665Z] [BOT] ✅ Saved pending queue: 266 total (263 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T17:55:58.665Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T17:55:58.666Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T17:55:58.666Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T17:55:58.666Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T17:55:58.667Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T17:55:58.667Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T17:55:58.667Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T17:55:58.710Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T17:55:58.711Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T17:55:58.716Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T17:55:58.716Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T17:55:58.717Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T17:55:58.852Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T17:55:58.853Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T17:56:00.874Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*