# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T14:02:34.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T14:02:29.946Z] ========================================
[2026-02-03T14:02:29.948Z] Discord Bot Execution Log
[2026-02-03T14:02:29.948Z] Environment: GitHub Actions
[2026-02-03T14:02:29.948Z] Node Version: v20.20.0
[2026-02-03T14:02:29.948Z] ========================================
[2026-02-03T14:02:29.948Z] Environment Variables Check:
[2026-02-03T14:02:29.948Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T14:02:29.948Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T14:02:29.948Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T14:02:29.949Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T14:02:29.949Z] 
Multi-Channel Configuration:
[2026-02-03T14:02:29.949Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T14:02:29.949Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T14:02:29.949Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T14:02:29.949Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T14:02:29.949Z] 
Data Files Check:
[2026-02-03T14:02:29.951Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173697 bytes)
[2026-02-03T14:02:30.009Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T14:02:30.009Z] 
========================================
[2026-02-03T14:02:30.009Z] Starting Enhanced Discord Bot...
[2026-02-03T14:02:30.009Z] ========================================
[2026-02-03T14:02:30.580Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T14:02:31.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T14:02:31.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T14:02:31.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T14:02:31.273Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T14:02:31.273Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T14:02:31.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T14:02:31.274Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T14:02:31.274Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T14:02:31.293Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T14:02:31.293Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-03T14:02:31.294Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-03T14:02:31.295Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T14:02:31.295Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-03T14:02:31.295Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-03T14:02:31.295Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-03T14:02:31.325Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T14:02:31.359Z] [BOT] ✅ Saved pending queue: 272 total (271 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T14:02:31.359Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T14:02:31.360Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T14:02:31.360Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T14:02:31.360Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T14:02:31.360Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T14:02:31.361Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T14:02:31.361Z] [BOT] Channels used: 0
[2026-02-03T14:02:31.361Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T14:02:31.361Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T14:02:31.404Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T14:02:31.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T14:02:31.410Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T14:02:31.410Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T14:02:31.411Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T14:02:31.541Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T14:02:31.541Z] [BOT ERROR] (node:2665) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T14:02:33.562Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2665) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*