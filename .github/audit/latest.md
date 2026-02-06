# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T13:00:36.635Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T13:00:31.703Z] ========================================
[2026-02-06T13:00:31.705Z] Discord Bot Execution Log
[2026-02-06T13:00:31.705Z] Environment: GitHub Actions
[2026-02-06T13:00:31.705Z] Node Version: v20.20.0
[2026-02-06T13:00:31.705Z] ========================================
[2026-02-06T13:00:31.705Z] Environment Variables Check:
[2026-02-06T13:00:31.705Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T13:00:31.705Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T13:00:31.705Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T13:00:31.706Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T13:00:31.706Z] 
Multi-Channel Configuration:
[2026-02-06T13:00:31.706Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T13:00:31.706Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T13:00:31.706Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:00:31.706Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T13:00:31.706Z] 
Data Files Check:
[2026-02-06T13:00:31.708Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175247 bytes)
[2026-02-06T13:00:31.762Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9846323 bytes)
[2026-02-06T13:00:31.762Z] 
========================================
[2026-02-06T13:00:31.762Z] Starting Enhanced Discord Bot...
[2026-02-06T13:00:31.762Z] ========================================
[2026-02-06T13:00:32.325Z] [BOT] ✅ Loaded V2 database: 2029 jobs
[2026-02-06T13:00:33.013Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T13:00:33.014Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T13:00:33.014Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T13:00:33.028Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T13:00:33.028Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T13:00:33.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T13:00:33.029Z] [BOT] ⏭️  Skipping old job: JID_c9b660b0 (original posting 15 days ago, max is 7)
[2026-02-06T13:00:33.030Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T13:00:33.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T13:00:33.030Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T13:00:33.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T13:00:33.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping old job: JID_0a4dca01 (original posting 15 days ago, max is 7)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T13:00:33.048Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-06T13:00:33.048Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-06T13:00:33.049Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T13:00:33.050Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-06T13:00:33.050Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-06T13:00:33.050Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-06T13:00:33.050Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T13:00:33.050Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T13:00:33.062Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T13:00:33.086Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T13:00:33.086Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T13:00:33.086Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T13:00:33.087Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T13:00:33.087Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
[2026-02-06T13:00:33.087Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T13:00:33.087Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-06T13:00:33.088Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T13:00:33.088Z] [BOT] 💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-06T13:00:33.127Z] [BOT] ✅ Loaded V2 database: 2029 jobs
💾 DISK STATE: 2029 jobs on disk
[2026-02-06T13:00:33.128Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-06T13:00:33.132Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:00:33.132Z] [BOT] 💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-06T13:00:33.134Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T13:00:33.141Z] [BOT] 📦 Archived 18 jobs to 2026-01.json (18 total in archive)
[2026-02-06T13:00:33.141Z] [BOT] ✅ Archiving complete: 18 archived, 2011 active
[2026-02-06T13:00:33.245Z] [BOT] 💾 Saved posted_jobs.json: 2011 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:00:33.245Z] [BOT] ✅ Database saved successfully
[2026-02-06T13:00:33.246Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T13:00:35.268Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*