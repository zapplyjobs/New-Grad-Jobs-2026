# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T09:39:41.311Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T09:39:36.124Z] ========================================
[2026-02-03T09:39:36.126Z] Discord Bot Execution Log
[2026-02-03T09:39:36.126Z] Environment: GitHub Actions
[2026-02-03T09:39:36.126Z] Node Version: v20.20.0
[2026-02-03T09:39:36.126Z] ========================================
[2026-02-03T09:39:36.126Z] Environment Variables Check:
[2026-02-03T09:39:36.126Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T09:39:36.126Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T09:39:36.126Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T09:39:36.127Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T09:39:36.127Z] 
Multi-Channel Configuration:
[2026-02-03T09:39:36.127Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T09:39:36.127Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T09:39:36.127Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:39:36.127Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T09:39:36.127Z] 
Data Files Check:
[2026-02-03T09:39:36.129Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182981 bytes)
[2026-02-03T09:39:36.188Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T09:39:36.188Z] 
========================================
[2026-02-03T09:39:36.188Z] Starting Enhanced Discord Bot...
[2026-02-03T09:39:36.188Z] ========================================
[2026-02-03T09:39:36.765Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T09:39:37.454Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T09:39:37.455Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T09:39:37.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T09:39:37.476Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T09:39:37.477Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T09:39:37.478Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T09:39:37.478Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T09:39:37.497Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T09:39:37.498Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-03T09:39:37.498Z] [BOT] 🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-03T09:39:37.498Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-03T09:39:37.498Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-03T09:39:37.499Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-03T09:39:37.500Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-03T09:39:37.500Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-03T09:39:37.527Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T09:39:37.562Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T09:39:37.563Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T09:39:37.563Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T09:39:37.563Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T09:39:37.564Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T09:39:37.564Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T09:39:37.564Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T09:39:37.564Z] [BOT] [STATS] Channel stats saved
[2026-02-03T09:39:37.564Z] [BOT] 💾 Saving posted jobs database...
[2026-02-03T09:39:37.565Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T09:39:37.607Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T09:39:37.608Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T09:39:37.613Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T09:39:37.613Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T09:39:37.615Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T09:39:37.745Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T09:39:37.746Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T09:39:39.767Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*