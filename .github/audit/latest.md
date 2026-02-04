# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T05:35:59.469Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T05:35:55.086Z] ========================================
[2026-02-04T05:35:55.088Z] Discord Bot Execution Log
[2026-02-04T05:35:55.088Z] Environment: GitHub Actions
[2026-02-04T05:35:55.088Z] Node Version: v20.20.0
[2026-02-04T05:35:55.088Z] ========================================
[2026-02-04T05:35:55.088Z] Environment Variables Check:
[2026-02-04T05:35:55.088Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T05:35:55.088Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T05:35:55.089Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T05:35:55.089Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T05:35:55.089Z] 
Multi-Channel Configuration:
[2026-02-04T05:35:55.089Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T05:35:55.089Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T05:35:55.089Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.089Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:35:55.090Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T05:35:55.090Z] 
Data Files Check:
[2026-02-04T05:35:55.091Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171784 bytes)
[2026-02-04T05:35:55.150Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T05:35:55.150Z] 
========================================
[2026-02-04T05:35:55.150Z] Starting Enhanced Discord Bot...
[2026-02-04T05:35:55.150Z] ========================================
[2026-02-04T05:35:55.721Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T05:35:56.168Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T05:35:56.169Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T05:35:56.169Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T05:35:56.190Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T05:35:56.190Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:35:56.191Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T05:35:56.192Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T05:35:56.192Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:35:56.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T05:35:56.192Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T05:35:56.210Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T05:35:56.211Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-04T05:35:56.212Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-02-04T05:35:56.240Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T05:35:56.273Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T05:35:56.274Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T05:35:56.274Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T05:35:56.274Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T05:35:56.275Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T05:35:56.275Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T05:35:56.275Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-04T05:35:56.275Z] [BOT] Channels used: 0
[2026-02-04T05:35:56.275Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T05:35:56.276Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T05:35:56.319Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T05:35:56.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T05:35:56.324Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T05:35:56.324Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T05:35:56.326Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T05:35:56.457Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
[2026-02-04T05:35:56.459Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T05:35:56.459Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T05:35:58.480Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*