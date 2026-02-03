# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T11:38:40.845Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T11:38:36.159Z] ========================================
[2026-02-03T11:38:36.161Z] Discord Bot Execution Log
[2026-02-03T11:38:36.161Z] Environment: GitHub Actions
[2026-02-03T11:38:36.161Z] Node Version: v20.20.0
[2026-02-03T11:38:36.161Z] ========================================
[2026-02-03T11:38:36.161Z] Environment Variables Check:
[2026-02-03T11:38:36.161Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T11:38:36.162Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T11:38:36.162Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T11:38:36.162Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T11:38:36.162Z] 
Multi-Channel Configuration:
[2026-02-03T11:38:36.162Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T11:38:36.162Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.162Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.162Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T11:38:36.162Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.162Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.163Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.163Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.163Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T11:38:36.163Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T11:38:36.163Z] 
Data Files Check:
[2026-02-03T11:38:36.165Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175353 bytes)
[2026-02-03T11:38:36.228Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T11:38:36.229Z] 
========================================
[2026-02-03T11:38:36.229Z] Starting Enhanced Discord Bot...
[2026-02-03T11:38:36.229Z] ========================================
[2026-02-03T11:38:36.808Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T11:38:37.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T11:38:37.480Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T11:38:37.481Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T11:38:37.502Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T11:38:37.502Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T11:38:37.504Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T11:38:37.504Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T11:38:37.523Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T11:38:37.523Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-03T11:38:37.523Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-02-03T11:38:37.524Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-03T11:38:37.525Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-02-03T11:38:37.526Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
[2026-02-03T11:38:37.526Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-03T11:38:37.553Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T11:38:37.592Z] [BOT] ✅ Saved pending queue: 272 total (271 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T11:38:37.592Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T11:38:37.593Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-03T11:38:37.593Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T11:38:37.594Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T11:38:37.594Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T11:38:37.637Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T11:38:37.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T11:38:37.643Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T11:38:37.643Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T11:38:37.645Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T11:38:37.777Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T11:38:37.777Z] [BOT ERROR] (node:2642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T11:38:39.797Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*