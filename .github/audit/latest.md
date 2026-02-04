# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T03:38:52.584Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T03:38:47.575Z] ========================================
[2026-02-04T03:38:47.577Z] Discord Bot Execution Log
[2026-02-04T03:38:47.577Z] Environment: GitHub Actions
[2026-02-04T03:38:47.577Z] Node Version: v20.20.0
[2026-02-04T03:38:47.577Z] ========================================
[2026-02-04T03:38:47.577Z] Environment Variables Check:
[2026-02-04T03:38:47.577Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T03:38:47.577Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T03:38:47.577Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T03:38:47.577Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T03:38:47.577Z] 
Multi-Channel Configuration:
[2026-02-04T03:38:47.577Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T03:38:47.578Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T03:38:47.578Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:38:47.578Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T03:38:47.578Z] 
Data Files Check:
[2026-02-04T03:38:47.580Z] .github/data/new_jobs.json: ✅ Exists (10 items, 136202 bytes)
[2026-02-04T03:38:47.650Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T03:38:47.650Z] 
========================================
[2026-02-04T03:38:47.650Z] Starting Enhanced Discord Bot...
[2026-02-04T03:38:47.650Z] ========================================
[2026-02-04T03:38:48.268Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T03:38:48.862Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T03:38:48.863Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T03:38:48.863Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T03:38:48.882Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T03:38:48.883Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T03:38:48.884Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T03:38:48.884Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T03:38:48.885Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T03:38:48.885Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T03:38:48.903Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T03:38:48.904Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-04T03:38:48.904Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-04T03:38:48.904Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-04T03:38:48.904Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-04T03:38:48.904Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-04T03:38:48.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-04T03:38:48.933Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T03:38:48.968Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T03:38:48.968Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T03:38:48.968Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T03:38:48.969Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T03:38:48.969Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T03:38:48.969Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T03:38:48.969Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T03:38:48.970Z] [BOT] Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T03:38:48.970Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T03:38:49.013Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T03:38:49.014Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T03:38:49.019Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T03:38:49.019Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T03:38:49.021Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T03:38:49.164Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T03:38:49.164Z] [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T03:38:51.185Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*