# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T06:14:19.288Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T06:14:14.750Z] ========================================
[2026-02-05T06:14:14.752Z] Discord Bot Execution Log
[2026-02-05T06:14:14.752Z] Environment: GitHub Actions
[2026-02-05T06:14:14.752Z] Node Version: v20.20.0
[2026-02-05T06:14:14.753Z] ========================================
[2026-02-05T06:14:14.753Z] Environment Variables Check:
[2026-02-05T06:14:14.753Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T06:14:14.753Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T06:14:14.753Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T06:14:14.753Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T06:14:14.753Z] 
Multi-Channel Configuration:
[2026-02-05T06:14:14.753Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T06:14:14.753Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.753Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.753Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T06:14:14.754Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.754Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.754Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.754Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.754Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:14:14.754Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T06:14:14.754Z] 
Data Files Check:
[2026-02-05T06:14:14.755Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163966 bytes)
[2026-02-05T06:14:14.813Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11521285 bytes)
[2026-02-05T06:14:14.813Z] 
========================================
[2026-02-05T06:14:14.813Z] Starting Enhanced Discord Bot...
[2026-02-05T06:14:14.813Z] ========================================
[2026-02-05T06:14:15.390Z] [BOT] ✅ Loaded V2 database: 2268 jobs
[2026-02-05T06:14:15.986Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T06:14:15.986Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T06:14:15.987Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T06:14:15.994Z] [BOT] ✅ Loaded pending queue: 160 total (110 pending, 50 enriched, 0 posted)
[2026-02-05T06:14:15.995Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T06:14:15.996Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T06:14:15.996Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T06:14:15.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T06:14:15.997Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T06:14:15.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T06:14:15.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T06:14:16.016Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-05T06:14:16.016Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-05T06:14:16.017Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-05T06:14:16.017Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-05T06:14:16.017Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-02-05T06:14:16.017Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-05T06:14:16.017Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-05T06:14:16.027Z] [BOT] ✅ Loaded pending queue: 160 total (110 pending, 50 enriched, 0 posted)
[2026-02-05T06:14:16.035Z] [BOT] ✅ Saved pending queue: 114 total (110 pending, 4 enriched, 0 posted)
[2026-02-05T06:14:16.035Z] [BOT] 🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T06:14:16.036Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T06:14:16.036Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T06:14:16.036Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T06:14:16.036Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-05T06:14:16.037Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-05T06:14:16.037Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T06:14:16.037Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T06:14:16.086Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-05T06:14:16.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T06:14:16.092Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:14:16.092Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T06:14:16.093Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T06:14:16.218Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:14:16.218Z] [BOT] ✅ Database saved successfully
[2026-02-05T06:14:16.218Z] [BOT ERROR] (node:2587) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T06:14:18.240Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2587) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*