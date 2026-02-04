# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T08:57:49.669Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T08:57:44.619Z] ========================================
[2026-02-04T08:57:44.621Z] Discord Bot Execution Log
[2026-02-04T08:57:44.621Z] Environment: GitHub Actions
[2026-02-04T08:57:44.621Z] Node Version: v20.20.0
[2026-02-04T08:57:44.622Z] ========================================
[2026-02-04T08:57:44.622Z] Environment Variables Check:
[2026-02-04T08:57:44.622Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T08:57:44.622Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T08:57:44.622Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T08:57:44.622Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T08:57:44.622Z] 
Multi-Channel Configuration:
[2026-02-04T08:57:44.622Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T08:57:44.622Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.622Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.622Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T08:57:44.623Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.623Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.623Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.623Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.623Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:57:44.623Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T08:57:44.623Z] 
Data Files Check:
[2026-02-04T08:57:44.624Z] .github/data/new_jobs.json: ✅ Exists (10 items, 196078 bytes)
[2026-02-04T08:57:44.683Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T08:57:44.683Z] 
========================================
[2026-02-04T08:57:44.683Z] Starting Enhanced Discord Bot...
[2026-02-04T08:57:44.683Z] ========================================
[2026-02-04T08:57:45.256Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T08:57:45.835Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T08:57:45.835Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T08:57:45.836Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T08:57:45.857Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T08:57:45.857Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:57:45.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T08:57:45.859Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:57:45.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T08:57:45.860Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T08:57:45.878Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T08:57:45.878Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-04T08:57:45.878Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
[2026-02-04T08:57:45.878Z] [BOT] 🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-04T08:57:45.878Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-04T08:57:45.878Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-04T08:57:45.879Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-04T08:57:45.880Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-04T08:57:45.880Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-04T08:57:45.880Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-04T08:57:45.880Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-04T08:57:45.908Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T08:57:45.941Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T08:57:45.941Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T08:57:45.942Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T08:57:45.942Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T08:57:45.942Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T08:57:45.943Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T08:57:45.943Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T08:57:45.943Z] [BOT] [STATS] Channel stats saved
[2026-02-04T08:57:45.943Z] [BOT] 💾 Saving posted jobs database...
[2026-02-04T08:57:45.943Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T08:57:45.986Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T08:57:45.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T08:57:45.992Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T08:57:45.992Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T08:57:45.994Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T08:57:46.143Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T08:57:46.144Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T08:57:48.166Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*