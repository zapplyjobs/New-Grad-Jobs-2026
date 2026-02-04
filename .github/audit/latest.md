# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T15:25:04.717Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T15:25:00.169Z] ========================================
[2026-02-04T15:25:00.171Z] Discord Bot Execution Log
[2026-02-04T15:25:00.171Z] Environment: GitHub Actions
[2026-02-04T15:25:00.171Z] Node Version: v20.20.0
[2026-02-04T15:25:00.171Z] ========================================
[2026-02-04T15:25:00.171Z] Environment Variables Check:
[2026-02-04T15:25:00.171Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T15:25:00.171Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T15:25:00.171Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T15:25:00.171Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T15:25:00.171Z] 
Multi-Channel Configuration:
[2026-02-04T15:25:00.172Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T15:25:00.172Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T15:25:00.172Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:25:00.172Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T15:25:00.172Z] 
Data Files Check:
[2026-02-04T15:25:00.174Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186890 bytes)
[2026-02-04T15:25:00.231Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T15:25:00.231Z] 
========================================
[2026-02-04T15:25:00.231Z] Starting Enhanced Discord Bot...
[2026-02-04T15:25:00.231Z] ========================================
[2026-02-04T15:25:00.801Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T15:25:01.387Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T15:25:01.388Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T15:25:01.388Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T15:25:01.409Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T15:25:01.409Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T15:25:01.410Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T15:25:01.410Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T15:25:01.411Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T15:25:01.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T15:25:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T15:25:01.430Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T15:25:01.430Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-04T15:25:01.430Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-04T15:25:01.430Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-04T15:25:01.431Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T15:25:01.432Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-04T15:25:01.432Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T15:25:01.461Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T15:25:01.495Z] [BOT] ✅ Saved pending queue: 266 total (264 pending, 2 enriched, 0 posted)
[2026-02-04T15:25:01.496Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T15:25:01.496Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T15:25:01.496Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T15:25:01.497Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T15:25:01.497Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T15:25:01.497Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T15:25:01.497Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T15:25:01.498Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T15:25:01.540Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T15:25:01.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T15:25:01.546Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T15:25:01.546Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T15:25:01.548Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T15:25:01.692Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T15:25:01.693Z] [BOT] ✅ Database saved successfully
[2026-02-04T15:25:01.693Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T15:25:03.715Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*