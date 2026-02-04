# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T20:24:46.121Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T20:24:41.124Z] ========================================
[2026-02-04T20:24:41.126Z] Discord Bot Execution Log
[2026-02-04T20:24:41.126Z] Environment: GitHub Actions
[2026-02-04T20:24:41.126Z] Node Version: v20.20.0
[2026-02-04T20:24:41.126Z] ========================================
[2026-02-04T20:24:41.126Z] Environment Variables Check:
[2026-02-04T20:24:41.126Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T20:24:41.126Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T20:24:41.126Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T20:24:41.126Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T20:24:41.127Z] 
Multi-Channel Configuration:
[2026-02-04T20:24:41.127Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T20:24:41.127Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T20:24:41.127Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T20:24:41.127Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T20:24:41.127Z] 
Data Files Check:
[2026-02-04T20:24:41.128Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121598 bytes)
[2026-02-04T20:24:41.205Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T20:24:41.205Z] 
========================================
[2026-02-04T20:24:41.205Z] Starting Enhanced Discord Bot...
[2026-02-04T20:24:41.205Z] ========================================
[2026-02-04T20:24:41.769Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T20:24:42.489Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T20:24:42.490Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T20:24:42.490Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T20:24:42.521Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-04T20:24:42.521Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T20:24:42.522Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T20:24:42.522Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T20:24:42.523Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T20:24:42.523Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T20:24:42.523Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T20:24:42.524Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T20:24:42.524Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T20:24:42.537Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T20:24:42.537Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-04T20:24:42.538Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
[2026-02-04T20:24:42.539Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-04T20:24:42.539Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T20:24:42.539Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-04T20:24:42.539Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-04T20:24:42.577Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-04T20:24:42.610Z] [BOT] ✅ Saved pending queue: 271 total (268 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T20:24:42.610Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T20:24:42.611Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T20:24:42.611Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T20:24:42.611Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
[2026-02-04T20:24:42.611Z] [BOT] Failed: 0
   Skipped: 50
[2026-02-04T20:24:42.611Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T20:24:42.612Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T20:24:42.612Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T20:24:42.674Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T20:24:42.674Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T20:24:42.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T20:24:42.680Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T20:24:42.682Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T20:24:42.835Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T20:24:42.836Z] [BOT ERROR] (node:2566) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T20:24:44.853Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2566) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*