# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T18:26:09.652Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T18:26:04.375Z] ========================================
[2026-02-04T18:26:04.377Z] Discord Bot Execution Log
[2026-02-04T18:26:04.377Z] Environment: GitHub Actions
[2026-02-04T18:26:04.378Z] Node Version: v20.20.0
[2026-02-04T18:26:04.378Z] ========================================
[2026-02-04T18:26:04.378Z] Environment Variables Check:
[2026-02-04T18:26:04.378Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T18:26:04.378Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T18:26:04.378Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T18:26:04.378Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T18:26:04.378Z] 
Multi-Channel Configuration:
[2026-02-04T18:26:04.378Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T18:26:04.378Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.378Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.378Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T18:26:04.379Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.379Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.379Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.379Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.379Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T18:26:04.379Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T18:26:04.379Z] 
Data Files Check:
[2026-02-04T18:26:04.380Z] .github/data/new_jobs.json: ✅ Exists (10 items, 180088 bytes)
[2026-02-04T18:26:04.449Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T18:26:04.449Z] 
========================================
[2026-02-04T18:26:04.449Z] Starting Enhanced Discord Bot...
[2026-02-04T18:26:04.449Z] ========================================
[2026-02-04T18:26:05.036Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T18:26:05.851Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T18:26:05.852Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T18:26:05.852Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T18:26:05.873Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T18:26:05.873Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T18:26:05.874Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T18:26:05.874Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T18:26:05.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T18:26:05.875Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T18:26:05.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T18:26:05.893Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T18:26:05.893Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-04T18:26:05.894Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-04T18:26:05.895Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-04T18:26:05.895Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-04T18:26:05.895Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-04T18:26:05.895Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-04T18:26:05.895Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-04T18:26:05.922Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T18:26:05.955Z] [BOT] ✅ Saved pending queue: 267 total (264 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T18:26:05.955Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T18:26:05.956Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T18:26:05.957Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T18:26:05.957Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T18:26:05.957Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T18:26:05.957Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T18:26:05.957Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T18:26:06.006Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T18:26:06.007Z] [BOT] 💾 DISK STATE: 2270 jobs on disk
[2026-02-04T18:26:06.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T18:26:06.015Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T18:26:06.015Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T18:26:06.017Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T18:26:06.163Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T18:26:06.164Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T18:26:08.185Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*