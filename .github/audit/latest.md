# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T21:09:44.386Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T21:09:39.651Z] ========================================
[2026-02-04T21:09:39.653Z] Discord Bot Execution Log
[2026-02-04T21:09:39.653Z] Environment: GitHub Actions
[2026-02-04T21:09:39.653Z] Node Version: v20.20.0
[2026-02-04T21:09:39.653Z] ========================================
[2026-02-04T21:09:39.653Z] Environment Variables Check:
[2026-02-04T21:09:39.653Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T21:09:39.653Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T21:09:39.653Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T21:09:39.653Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T21:09:39.654Z] 
Multi-Channel Configuration:
[2026-02-04T21:09:39.654Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T21:09:39.654Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T21:09:39.654Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:09:39.654Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T21:09:39.654Z] 
Data Files Check:
[2026-02-04T21:09:39.656Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173630 bytes)
[2026-02-04T21:09:39.714Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T21:09:39.714Z] 
========================================
[2026-02-04T21:09:39.714Z] Starting Enhanced Discord Bot...
[2026-02-04T21:09:39.714Z] ========================================
[2026-02-04T21:09:40.274Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T21:09:40.924Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T21:09:40.925Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T21:09:40.925Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T21:09:40.946Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-04T21:09:40.947Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T21:09:40.948Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T21:09:40.948Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T21:09:40.948Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T21:09:40.949Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-04T21:09:40.949Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T21:09:40.949Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T21:09:40.950Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T21:09:40.962Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T21:09:40.963Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T21:09:40.968Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T21:09:40.968Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-04T21:09:40.968Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-04T21:09:40.968Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-04T21:09:40.968Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-04T21:09:40.968Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-04T21:09:40.969Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-04T21:09:40.970Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-04T21:09:40.997Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-04T21:09:41.031Z] [BOT] ✅ Saved pending queue: 274 total (270 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-04T21:09:41.032Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T21:09:41.032Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T21:09:41.032Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T21:09:41.033Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T21:09:41.033Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T21:09:41.033Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T21:09:41.033Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-04T21:09:41.033Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T21:09:41.034Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T21:09:41.076Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T21:09:41.077Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T21:09:41.082Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T21:09:41.082Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T21:09:41.084Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T21:09:41.213Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T21:09:41.213Z] [BOT ERROR] (node:2618) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T21:09:43.234Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2618) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*