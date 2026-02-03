# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T17:28:47.004Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T17:28:42.193Z] ========================================
[2026-02-03T17:28:42.195Z] Discord Bot Execution Log
[2026-02-03T17:28:42.195Z] Environment: GitHub Actions
[2026-02-03T17:28:42.195Z] Node Version: v20.20.0
[2026-02-03T17:28:42.196Z] ========================================
[2026-02-03T17:28:42.196Z] Environment Variables Check:
[2026-02-03T17:28:42.196Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T17:28:42.196Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T17:28:42.196Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T17:28:42.196Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T17:28:42.196Z] 
Multi-Channel Configuration:
[2026-02-03T17:28:42.196Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T17:28:42.196Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.196Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.196Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T17:28:42.197Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.197Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.197Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.197Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.197Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T17:28:42.197Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T17:28:42.197Z] 
Data Files Check:
[2026-02-03T17:28:42.199Z] .github/data/new_jobs.json: ✅ Exists (10 items, 179003 bytes)
[2026-02-03T17:28:42.257Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11344780 bytes)
[2026-02-03T17:28:42.257Z] 
========================================
[2026-02-03T17:28:42.257Z] Starting Enhanced Discord Bot...
[2026-02-03T17:28:42.257Z] ========================================
[2026-02-03T17:28:42.839Z] [BOT] ✅ Loaded V2 database: 2247 jobs
[2026-02-03T17:28:43.397Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T17:28:43.397Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T17:28:43.398Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T17:28:43.419Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-03T17:28:43.420Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T17:28:43.421Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T17:28:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T17:28:43.421Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T17:28:43.439Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T17:28:43.439Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
[2026-02-03T17:28:43.439Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-03T17:28:43.440Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-03T17:28:43.441Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-03T17:28:43.468Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-03T17:28:43.502Z] [BOT] ✅ Saved pending queue: 277 total (276 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T17:28:43.502Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T17:28:43.503Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T17:28:43.503Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T17:28:43.504Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T17:28:43.504Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T17:28:43.504Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T17:28:43.504Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T17:28:43.505Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-03T17:28:43.547Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-03T17:28:43.547Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-03T17:28:43.552Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T17:28:43.553Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-03T17:28:43.554Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-03T17:28:43.688Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T17:28:43.688Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T17:28:45.709Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*