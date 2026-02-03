# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T02:47:15.337Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T02:47:10.458Z] ========================================
[2026-02-03T02:47:10.460Z] Discord Bot Execution Log
[2026-02-03T02:47:10.460Z] Environment: GitHub Actions
[2026-02-03T02:47:10.460Z] Node Version: v20.20.0
[2026-02-03T02:47:10.460Z] ========================================
[2026-02-03T02:47:10.460Z] Environment Variables Check:
[2026-02-03T02:47:10.460Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T02:47:10.460Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T02:47:10.460Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T02:47:10.461Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T02:47:10.461Z] 
Multi-Channel Configuration:
[2026-02-03T02:47:10.461Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T02:47:10.461Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T02:47:10.461Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T02:47:10.461Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T02:47:10.461Z] 
Data Files Check:
[2026-02-03T02:47:10.463Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152038 bytes)
[2026-02-03T02:47:10.536Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11313471 bytes)
[2026-02-03T02:47:10.536Z] 
========================================
[2026-02-03T02:47:10.536Z] Starting Enhanced Discord Bot...
[2026-02-03T02:47:10.536Z] ========================================
[2026-02-03T02:47:11.072Z] [BOT] ✅ Loaded V2 database: 2242 jobs
[2026-02-03T02:47:11.704Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T02:47:11.705Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T02:47:11.705Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T02:47:11.735Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T02:47:11.735Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T02:47:11.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T02:47:11.737Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T02:47:11.737Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T02:47:11.751Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-03T02:47:11.752Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-03T02:47:11.753Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-03T02:47:11.790Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T02:47:11.824Z] [BOT] ✅ Saved pending queue: 282 total (281 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T02:47:11.824Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T02:47:11.825Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-03T02:47:11.825Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
[2026-02-03T02:47:11.825Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T02:47:11.825Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T02:47:11.825Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T02:47:11.826Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-03T02:47:11.886Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-03T02:47:11.887Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-03T02:47:11.892Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T02:47:11.892Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-03T02:47:11.894Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-03T02:47:12.051Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T02:47:12.052Z] [BOT] ✅ Database saved successfully
[2026-02-03T02:47:12.053Z] [BOT ERROR] (node:2739) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T02:47:14.069Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2739) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*