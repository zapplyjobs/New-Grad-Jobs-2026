# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T14:27:22.535Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T14:27:18.067Z] ========================================
[2026-02-03T14:27:18.069Z] Discord Bot Execution Log
[2026-02-03T14:27:18.069Z] Environment: GitHub Actions
[2026-02-03T14:27:18.069Z] Node Version: v20.20.0
[2026-02-03T14:27:18.069Z] ========================================
[2026-02-03T14:27:18.069Z] Environment Variables Check:
[2026-02-03T14:27:18.069Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T14:27:18.069Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T14:27:18.069Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T14:27:18.069Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T14:27:18.070Z] 
Multi-Channel Configuration:
[2026-02-03T14:27:18.070Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T14:27:18.070Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T14:27:18.070Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:27:18.070Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T14:27:18.070Z] 
Data Files Check:
[2026-02-03T14:27:18.072Z] .github/data/new_jobs.json: ✅ Exists (10 items, 206876 bytes)
[2026-02-03T14:27:18.130Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T14:27:18.130Z] 
========================================
[2026-02-03T14:27:18.130Z] Starting Enhanced Discord Bot...
[2026-02-03T14:27:18.130Z] ========================================
[2026-02-03T14:27:18.700Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T14:27:19.321Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T14:27:19.322Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T14:27:19.322Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T14:27:19.342Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T14:27:19.343Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T14:27:19.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T14:27:19.344Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T14:27:19.365Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T14:27:19.365Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-02-03T14:27:19.365Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-03T14:27:19.366Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-03T14:27:19.367Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-02-03T14:27:19.397Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T14:27:19.431Z] [BOT] ✅ Saved pending queue: 272 total (271 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T14:27:19.431Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T14:27:19.432Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T14:27:19.432Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T14:27:19.432Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T14:27:19.433Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T14:27:19.433Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T14:27:19.433Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T14:27:19.433Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T14:27:19.477Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T14:27:19.477Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T14:27:19.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T14:27:19.482Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T14:27:19.484Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T14:27:19.611Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T14:27:19.612Z] [BOT] ✅ Database saved successfully
[2026-02-03T14:27:19.612Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T14:27:21.635Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*