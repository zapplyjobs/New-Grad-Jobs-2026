# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T01:43:51.018Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T01:43:38.944Z] ========================================
[2026-02-05T01:43:38.946Z] Discord Bot Execution Log
[2026-02-05T01:43:38.946Z] Environment: GitHub Actions
[2026-02-05T01:43:38.946Z] Node Version: v20.20.0
[2026-02-05T01:43:38.947Z] ========================================
[2026-02-05T01:43:38.947Z] Environment Variables Check:
[2026-02-05T01:43:38.947Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T01:43:38.947Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T01:43:38.947Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T01:43:38.947Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T01:43:38.947Z] 
Multi-Channel Configuration:
[2026-02-05T01:43:38.947Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T01:43:38.947Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.947Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.947Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T01:43:38.948Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.948Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.948Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.948Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.948Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:43:38.948Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T01:43:38.948Z] 
Data Files Check:
[2026-02-05T01:43:38.949Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161974 bytes)
[2026-02-05T01:43:39.009Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11495862 bytes)
[2026-02-05T01:43:39.009Z] 
========================================
[2026-02-05T01:43:39.009Z] Starting Enhanced Discord Bot...
[2026-02-05T01:43:39.009Z] ========================================
[2026-02-05T01:43:39.601Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-05T01:43:40.138Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T01:43:40.138Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T01:43:40.139Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T01:43:40.160Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-05T01:43:40.160Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T01:43:40.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T01:43:40.162Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T01:43:40.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T01:43:40.163Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T01:43:40.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T01:43:40.163Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T01:43:40.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T01:43:40.180Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-05T01:43:40.181Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-05T01:43:40.182Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-05T01:43:40.182Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-05T01:43:40.182Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-05T01:43:40.210Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-05T01:43:40.244Z] [BOT] ✅ Saved pending queue: 276 total (271 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-05T01:43:40.244Z] [BOT] 📋 After blacklist filter: 1 jobs (45 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T01:43:40.245Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T01:43:40.245Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T01:43:40.248Z] [BOT] 📍 [ROUTING] "[P] Compute Efficiency Engineer" @ anthropic
[2026-02-05T01:43:40.248Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T01:43:40.248Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T01:43:40.265Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T01:43:40.644Z] [BOT] ✅ Posted message: [P] Compute Efficiency Engineer @ anthropic in #🤖・ai-jobs
[2026-02-05T01:43:40.645Z] [BOT] ✅ Industry: [P] Compute Efficiency Engineer @ anthropic
[2026-02-05T01:43:40.646Z] [BOT] 💾 Added channel posting: [P] Compute Efficiency Engineer @ anthropic → category channel (1 total channels)
[2026-02-05T01:43:40.646Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-05T01:43:40.690Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-05T01:43:40.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-05T01:43:40.696Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T01:43:40.696Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-05T01:43:40.698Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-05T01:43:40.826Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T01:43:42.574Z] [BOT] ✅ Posted message: [P] Compute Efficiency Engineer @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T01:43:42.574Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T01:43:42.575Z] [BOT] 💾 Added channel posting: [P] Compute Efficiency Engineer @ anthropic → location channel (2 total channels)
[2026-02-05T01:43:42.575Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-05T01:43:42.613Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-05T01:43:42.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-05T01:43:42.618Z] [BOT] 🔀 Deep merged: [P] Compute Efficiency Engineer @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T01:43:42.619Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-05T01:43:42.620Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-05T01:43:42.732Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T01:43:47.232Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T01:43:47.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "0ab4398b8f649d13"
[2026-02-05T01:43:47.234Z] [BOT] ⏭️  Skipping duplicate: JID_bc16035e (posted within 7 days)
[2026-02-05T01:43:47.250Z] [BOT] ✅ Loaded pending queue: 276 total (271 pending, 5 enriched, 0 posted)
[2026-02-05T01:43:47.284Z] [BOT] ✅ Saved pending queue: 276 total (271 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-05T01:43:47.284Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T01:43:47.377Z] [BOT] 📂 Loaded 12356 existing routing entries
[2026-02-05T01:43:47.518Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-05T01:43:47.518Z] [BOT] Total entries: 12357
   Timestamp: 2026-02-05T01:43:47.466Z
[2026-02-05T01:43:47.519Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T01:43:47.519Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T01:43:47.520Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-02-05T01:43:47.520Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T01:43:47.520Z] [BOT] [STATS] Channel stats saved
[2026-02-05T01:43:47.520Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-05T01:43:47.564Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-05T01:43:47.564Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-05T01:43:47.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T01:43:47.569Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-05T01:43:47.571Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-05T01:43:47.693Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T01:43:49.717Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*