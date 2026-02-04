# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T10:10:47.366Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T10:10:42.542Z] ========================================
[2026-02-04T10:10:42.544Z] Discord Bot Execution Log
[2026-02-04T10:10:42.544Z] Environment: GitHub Actions
[2026-02-04T10:10:42.544Z] Node Version: v20.20.0
[2026-02-04T10:10:42.544Z] ========================================
[2026-02-04T10:10:42.544Z] Environment Variables Check:
[2026-02-04T10:10:42.544Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T10:10:42.544Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T10:10:42.544Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T10:10:42.545Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T10:10:42.545Z] 
Multi-Channel Configuration:
[2026-02-04T10:10:42.545Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T10:10:42.545Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T10:10:42.545Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:10:42.545Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T10:10:42.545Z] 
Data Files Check:
[2026-02-04T10:10:42.547Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186119 bytes)
[2026-02-04T10:10:42.606Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T10:10:42.606Z] 
========================================
[2026-02-04T10:10:42.606Z] Starting Enhanced Discord Bot...
[2026-02-04T10:10:42.606Z] ========================================
[2026-02-04T10:10:43.195Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T10:10:44.311Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T10:10:44.311Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T10:10:44.312Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T10:10:44.332Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T10:10:44.333Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T10:10:44.334Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T10:10:44.334Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T10:10:44.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T10:10:44.335Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T10:10:44.353Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T10:10:44.354Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-04T10:10:44.354Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-04T10:10:44.354Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
[2026-02-04T10:10:44.354Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-04T10:10:44.354Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T10:10:44.355Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-04T10:10:44.382Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T10:10:44.415Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T10:10:44.415Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T10:10:44.416Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T10:10:44.416Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T10:10:44.416Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T10:10:44.416Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T10:10:44.416Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T10:10:44.416Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-04T10:10:44.417Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T10:10:44.417Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T10:10:44.460Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T10:10:44.461Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T10:10:44.466Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T10:10:44.466Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T10:10:44.468Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T10:10:44.595Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T10:10:44.595Z] [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T10:10:46.616Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*