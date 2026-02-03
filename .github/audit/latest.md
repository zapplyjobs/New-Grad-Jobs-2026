# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T12:36:06.899Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T12:36:02.487Z] ========================================
[2026-02-03T12:36:02.489Z] Discord Bot Execution Log
[2026-02-03T12:36:02.489Z] Environment: GitHub Actions
[2026-02-03T12:36:02.489Z] Node Version: v20.20.0
[2026-02-03T12:36:02.489Z] ========================================
[2026-02-03T12:36:02.489Z] Environment Variables Check:
[2026-02-03T12:36:02.489Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T12:36:02.489Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T12:36:02.490Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T12:36:02.490Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T12:36:02.490Z] 
Multi-Channel Configuration:
[2026-02-03T12:36:02.490Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T12:36:02.490Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T12:36:02.490Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.490Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:36:02.491Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T12:36:02.491Z] 
Data Files Check:
[2026-02-03T12:36:02.492Z] .github/data/new_jobs.json: ✅ Exists (10 items, 194223 bytes)
[2026-02-03T12:36:02.561Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T12:36:02.561Z] 
========================================
[2026-02-03T12:36:02.561Z] Starting Enhanced Discord Bot...
[2026-02-03T12:36:02.561Z] ========================================
[2026-02-03T12:36:03.128Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T12:36:03.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T12:36:03.667Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T12:36:03.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T12:36:03.688Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T12:36:03.689Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:36:03.690Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T12:36:03.690Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:36:03.709Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T12:36:03.710Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-03T12:36:03.710Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-03T12:36:03.710Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
[2026-02-03T12:36:03.710Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-03T12:36:03.710Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-03T12:36:03.711Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-03T12:36:03.712Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T12:36:03.712Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-03T12:36:03.740Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T12:36:03.774Z] [BOT] ✅ Saved pending queue: 272 total (271 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T12:36:03.774Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T12:36:03.775Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T12:36:03.775Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T12:36:03.775Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
[2026-02-03T12:36:03.776Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T12:36:03.776Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T12:36:03.776Z] [BOT] [STATS] Channel stats saved
[2026-02-03T12:36:03.776Z] [BOT] 💾 Saving posted jobs database...
[2026-02-03T12:36:03.776Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T12:36:03.826Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T12:36:03.827Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T12:36:03.832Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T12:36:03.832Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T12:36:03.833Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T12:36:03.981Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T12:36:03.981Z] [BOT ERROR] (node:2633) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T12:36:06.003Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2633) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*