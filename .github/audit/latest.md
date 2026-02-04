# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T19:26:27.688Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T19:26:22.958Z] ========================================
[2026-02-04T19:26:22.960Z] Discord Bot Execution Log
[2026-02-04T19:26:22.960Z] Environment: GitHub Actions
[2026-02-04T19:26:22.960Z] Node Version: v20.20.0
[2026-02-04T19:26:22.960Z] ========================================
[2026-02-04T19:26:22.960Z] Environment Variables Check:
[2026-02-04T19:26:22.960Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T19:26:22.960Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T19:26:22.960Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T19:26:22.960Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T19:26:22.960Z] 
Multi-Channel Configuration:
[2026-02-04T19:26:22.961Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T19:26:22.961Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T19:26:22.961Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:26:22.961Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T19:26:22.961Z] 
Data Files Check:
[2026-02-04T19:26:22.963Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163658 bytes)
[2026-02-04T19:26:23.024Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T19:26:23.024Z] 
========================================
[2026-02-04T19:26:23.024Z] Starting Enhanced Discord Bot...
[2026-02-04T19:26:23.024Z] ========================================
[2026-02-04T19:26:23.594Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T19:26:24.213Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T19:26:24.214Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T19:26:24.214Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T19:26:24.233Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T19:26:24.234Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T19:26:24.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T19:26:24.235Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T19:26:24.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T19:26:24.236Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T19:26:24.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T19:26:24.237Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T19:26:24.254Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T19:26:24.254Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-04T19:26:24.255Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-04T19:26:24.256Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-04T19:26:24.257Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-04T19:26:24.257Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-04T19:26:24.284Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T19:26:24.317Z] [BOT] ✅ Saved pending queue: 269 total (266 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-04T19:26:24.317Z] [BOT] 📋 After blacklist filter: 0 jobs (47 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T19:26:24.318Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T19:26:24.318Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T19:26:24.319Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T19:26:24.319Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T19:26:24.319Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T19:26:24.366Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T19:26:24.367Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T19:26:24.372Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T19:26:24.372Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T19:26:24.373Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T19:26:24.515Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T19:26:24.515Z] [BOT ERROR] (node:2562) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T19:26:26.538Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2562) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*