# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T12:36:37.070Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T12:36:32.731Z] ========================================
[2026-02-04T12:36:32.733Z] Discord Bot Execution Log
[2026-02-04T12:36:32.733Z] Environment: GitHub Actions
[2026-02-04T12:36:32.733Z] Node Version: v20.20.0
[2026-02-04T12:36:32.733Z] ========================================
[2026-02-04T12:36:32.733Z] Environment Variables Check:
[2026-02-04T12:36:32.733Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T12:36:32.733Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T12:36:32.733Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T12:36:32.734Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T12:36:32.734Z] 
Multi-Channel Configuration:
[2026-02-04T12:36:32.734Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T12:36:32.734Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T12:36:32.734Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:36:32.734Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T12:36:32.734Z] 
Data Files Check:
[2026-02-04T12:36:32.736Z] .github/data/new_jobs.json: ✅ Exists (10 items, 189796 bytes)
[2026-02-04T12:36:32.793Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T12:36:32.794Z] 
========================================
[2026-02-04T12:36:32.794Z] Starting Enhanced Discord Bot...
[2026-02-04T12:36:32.794Z] ========================================
[2026-02-04T12:36:33.358Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T12:36:33.852Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T12:36:33.853Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T12:36:33.853Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T12:36:33.874Z] [BOT] ✅ Loaded pending queue: 309 total (259 pending, 50 enriched, 0 posted)
[2026-02-04T12:36:33.875Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T12:36:33.876Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T12:36:33.876Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T12:36:33.876Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T12:36:33.877Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-04T12:36:33.877Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T12:36:33.895Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T12:36:33.895Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T12:36:33.895Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-04T12:36:33.896Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T12:36:33.897Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-04T12:36:33.925Z] [BOT] ✅ Loaded pending queue: 309 total (259 pending, 50 enriched, 0 posted)
[2026-02-04T12:36:33.963Z] [BOT] ✅ Saved pending queue: 261 total (259 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T12:36:33.963Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T12:36:33.964Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T12:36:33.965Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T12:36:33.965Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T12:36:33.965Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T12:36:33.966Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T12:36:34.039Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T12:36:34.039Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T12:36:34.045Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T12:36:34.045Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T12:36:34.047Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T12:36:34.178Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T12:36:34.178Z] [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T12:36:36.199Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*