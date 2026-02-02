# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T14:01:22.406Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T14:01:18.091Z] ========================================
[2026-02-02T14:01:18.093Z] Discord Bot Execution Log
[2026-02-02T14:01:18.093Z] Environment: GitHub Actions
[2026-02-02T14:01:18.093Z] Node Version: v20.20.0
[2026-02-02T14:01:18.093Z] ========================================
[2026-02-02T14:01:18.093Z] Environment Variables Check:
[2026-02-02T14:01:18.094Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T14:01:18.094Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T14:01:18.094Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T14:01:18.094Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T14:01:18.094Z] 
Multi-Channel Configuration:
[2026-02-02T14:01:18.094Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T14:01:18.094Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.094Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.094Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T14:01:18.094Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.094Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.095Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.095Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.095Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:01:18.095Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T14:01:18.095Z] 
Data Files Check:
[2026-02-02T14:01:18.096Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123929 bytes)
[2026-02-02T14:01:18.154Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11214263 bytes)
[2026-02-02T14:01:18.154Z] 
========================================
[2026-02-02T14:01:18.154Z] Starting Enhanced Discord Bot...
[2026-02-02T14:01:18.154Z] ========================================
[2026-02-02T14:01:18.715Z] [BOT] ✅ Loaded V2 database: 2225 jobs
[2026-02-02T14:01:19.194Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T14:01:19.195Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T14:01:19.195Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T14:01:19.217Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-02T14:01:19.217Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T14:01:19.218Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T14:01:19.218Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T14:01:19.236Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T14:01:19.237Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-02T14:01:19.237Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-02T14:01:19.237Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-02T14:01:19.237Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Monetization at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Walmart
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-02T14:01:19.238Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-02T14:01:19.239Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-02-02T14:01:19.266Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-02T14:01:19.301Z] [BOT] ✅ Saved pending queue: 290 total (289 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T14:01:19.301Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T14:01:19.301Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T14:01:19.301Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T14:01:19.302Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T14:01:19.302Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T14:01:19.302Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-02T14:01:19.302Z] [BOT] Channels used: 0
[2026-02-02T14:01:19.302Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T14:01:19.303Z] [BOT] 💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T14:01:19.346Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T14:01:19.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T14:01:19.351Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T14:01:19.351Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T14:01:19.353Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T14:01:19.499Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T14:01:19.500Z] [BOT ERROR] (node:2645) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T14:01:21.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2645) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*