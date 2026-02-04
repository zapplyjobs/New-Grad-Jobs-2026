# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T07:28:20.795Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T07:28:16.661Z] ========================================
[2026-02-04T07:28:16.663Z] Discord Bot Execution Log
[2026-02-04T07:28:16.663Z] Environment: GitHub Actions
[2026-02-04T07:28:16.663Z] Node Version: v20.20.0
[2026-02-04T07:28:16.663Z] ========================================
[2026-02-04T07:28:16.663Z] Environment Variables Check:
[2026-02-04T07:28:16.663Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T07:28:16.664Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T07:28:16.664Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T07:28:16.664Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T07:28:16.664Z] 
Multi-Channel Configuration:
[2026-02-04T07:28:16.664Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T07:28:16.664Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.664Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.664Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T07:28:16.664Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.664Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.664Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.665Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.665Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:28:16.665Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T07:28:16.665Z] 
Data Files Check:
[2026-02-04T07:28:16.666Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156740 bytes)
[2026-02-04T07:28:16.727Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11480581 bytes)
[2026-02-04T07:28:16.727Z] 
========================================
[2026-02-04T07:28:16.727Z] Starting Enhanced Discord Bot...
[2026-02-04T07:28:16.727Z] ========================================
[2026-02-04T07:28:17.329Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-04T07:28:17.750Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T07:28:17.750Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T07:28:17.750Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T07:28:17.772Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T07:28:17.772Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T07:28:17.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T07:28:17.773Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T07:28:17.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T07:28:17.775Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T07:28:17.793Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-04T07:28:17.794Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-04T07:28:17.795Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-04T07:28:17.797Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T07:28:17.825Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T07:28:17.859Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
[2026-02-04T07:28:17.859Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T07:28:17.860Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T07:28:17.860Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T07:28:17.860Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T07:28:17.861Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T07:28:17.861Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T07:28:17.861Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T07:28:17.861Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T07:28:17.904Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-04T07:28:17.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T07:28:17.911Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T07:28:17.911Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T07:28:17.912Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T07:28:18.046Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T07:28:18.046Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T07:28:20.069Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*