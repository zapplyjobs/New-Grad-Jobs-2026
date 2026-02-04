# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T18:56:41.384Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T18:56:37.200Z] ========================================
[2026-02-04T18:56:37.202Z] Discord Bot Execution Log
[2026-02-04T18:56:37.202Z] Environment: GitHub Actions
[2026-02-04T18:56:37.202Z] Node Version: v20.20.0
[2026-02-04T18:56:37.202Z] ========================================
[2026-02-04T18:56:37.202Z] Environment Variables Check:
[2026-02-04T18:56:37.202Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T18:56:37.202Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T18:56:37.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T18:56:37.203Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T18:56:37.203Z] 
Multi-Channel Configuration:
[2026-02-04T18:56:37.203Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T18:56:37.203Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T18:56:37.203Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.203Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:56:37.204Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T18:56:37.204Z] 
Data Files Check:
[2026-02-04T18:56:37.205Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169936 bytes)
[2026-02-04T18:56:37.271Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T18:56:37.271Z] 
========================================
[2026-02-04T18:56:37.271Z] Starting Enhanced Discord Bot...
[2026-02-04T18:56:37.271Z] ========================================
[2026-02-04T18:56:37.840Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T18:56:38.342Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T18:56:38.343Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T18:56:38.343Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T18:56:38.364Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-04T18:56:38.365Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T18:56:38.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T18:56:38.366Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T18:56:38.366Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T18:56:38.367Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T18:56:38.367Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T18:56:38.367Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T18:56:38.368Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T18:56:38.390Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T18:56:38.391Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-04T18:56:38.391Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T18:56:38.391Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T18:56:38.391Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-04T18:56:38.392Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-04T18:56:38.393Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T18:56:38.438Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-04T18:56:38.474Z] [BOT] ✅ Saved pending queue: 270 total (267 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T18:56:38.475Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-02-04T18:56:38.475Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T18:56:38.476Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T18:56:38.476Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T18:56:38.476Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T18:56:38.476Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T18:56:38.476Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T18:56:38.520Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T18:56:38.521Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T18:56:38.526Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T18:56:38.526Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T18:56:38.528Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T18:56:38.670Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T18:56:38.671Z] [BOT] ✅ Database saved successfully
[2026-02-04T18:56:38.671Z] [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T18:56:40.695Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*