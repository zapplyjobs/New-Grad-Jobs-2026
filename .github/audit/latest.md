# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T07:14:32.136Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T07:14:26.969Z] ========================================
[2026-02-03T07:14:26.971Z] Discord Bot Execution Log
[2026-02-03T07:14:26.971Z] Environment: GitHub Actions
[2026-02-03T07:14:26.971Z] Node Version: v20.20.0
[2026-02-03T07:14:26.971Z] ========================================
[2026-02-03T07:14:26.971Z] Environment Variables Check:
[2026-02-03T07:14:26.971Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T07:14:26.972Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T07:14:26.972Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T07:14:26.972Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T07:14:26.972Z] 
Multi-Channel Configuration:
[2026-02-03T07:14:26.972Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T07:14:26.972Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.972Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.972Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T07:14:26.972Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.972Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.973Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.973Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.973Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:14:26.973Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T07:14:26.973Z] 
Data Files Check:
[2026-02-03T07:14:26.974Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176335 bytes)
[2026-02-03T07:14:27.034Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T07:14:27.034Z] 
========================================
[2026-02-03T07:14:27.034Z] Starting Enhanced Discord Bot...
[2026-02-03T07:14:27.034Z] ========================================
[2026-02-03T07:14:27.652Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T07:14:28.427Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T07:14:28.428Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T07:14:28.428Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T07:14:28.450Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T07:14:28.450Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T07:14:28.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T07:14:28.452Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T07:14:28.452Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T07:14:28.472Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T07:14:28.472Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-03T07:14:28.472Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
[2026-02-03T07:14:28.473Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
[2026-02-03T07:14:28.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-03T07:14:28.474Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-03T07:14:28.474Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-03T07:14:28.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
[2026-02-03T07:14:28.504Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T07:14:28.540Z] [BOT] ✅ Saved pending queue: 274 total (273 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T07:14:28.540Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T07:14:28.540Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T07:14:28.540Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T07:14:28.541Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T07:14:28.541Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T07:14:28.541Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T07:14:28.541Z] [BOT] Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T07:14:28.542Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T07:14:28.585Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T07:14:28.586Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T07:14:28.592Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T07:14:28.592Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T07:14:28.593Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T07:14:28.719Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T07:14:28.720Z] [BOT ERROR] (node:2644) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T07:14:30.740Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2644) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*